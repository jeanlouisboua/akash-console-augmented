import { useRecoilState } from 'recoil';
import { MetaMaskSDK, SDKProvider } from '@metamask/sdk';
import MetaMaskOnboarding from '@metamask/onboarding';
import { keplrState, activeCertificate } from '../recoil/atoms';
import { loadActiveCertificate } from '../recoil/api';
import { ethers } from 'ethers';
import * as bip39 from 'bip39';
import { DirectSecp256k1HdWallet, Registry } from '@cosmjs/proto-signing';



let onboarding: any;
let accounts: any;
let mnemonic: any;
const { ethereum } = window;
const currentUrl = new URL(window.location.href);
const forwarderOrigin = currentUrl.hostname === 'localhost' ? 'http://localhost:3000' : undefined;

export function useMetamaskWallet(){
    const [keplr, setKeplr] = useRecoilState(keplrState);
    const [certificate, setCertificate] = useRecoilState(activeCertificate);
    const isConnected = keplr.isSignedIn;

    const initialize = async () => {
        try {
            onboarding = new MetaMaskOnboarding({ forwarderOrigin });
        } catch (error) {
            console.error(error);
        }
    
        if (isMetaMaskInstalled()) {
            console.log('Metamask is already installed');
            //handleNewAccounts();
        } else {
          onboarding.startOnboarding();
        }
    };
    
    const isMetaMaskInstalled = () => {
        return Boolean(ethereum && ethereum.isMetaMask);
    };
    
    
    async function handleNewAccounts(newAccounts?: any, mnemonic?: any) {
        accounts = newAccounts;
        if (accounts && accounts.length > 0) {
          const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix: "akash" });
          const cosmosAccounts = await wallet.getAccounts();
          
          console.log("accountsList", cosmosAccounts);
          const activeCert = await loadActiveCertificate(cosmosAccounts[0].address);
          if (activeCert.$type === 'TLS Certificate') {
            setCertificate(activeCert);
          }
          setKeplr({
            accounts:[...cosmosAccounts],
            offlineSigner: wallet,
            isSignedIn: true,
            isConnecting: false
          });

          console.log("keplr object", keplr);
            localStorage.setItem('walletConnected', 'true');
            //ethereum.autoRefreshOnNetworkChange = false;
            /*ethereum.on('chainChanged', handleNewChain)
            ethereum.on('networkChanged', handleNewNetwork)*/
            ethereum?.on('accountsChanged', handleNewAccounts);
            console.log('Metamask sucessfully connected ! ');

           
        } /*else {
            console.log('Metamask Disconnected ! ');
            setKeplr({
              isSignedIn: false,
              accounts: [],
              isConnecting: false
            });
            localStorage.setItem('walletConnected', 'false');
        }*/
    }

    const connectWallet = async() => {
      try {
        await initialize();
        accounts = await ethereum?.request({
          method: 'wallet_requestPermissions',
          params: [{
              eth_accounts: {}
          }]
      }).then(() => ethereum.request({
          method: 'eth_requestAccounts'
      }));
      /*const provider = new ethers.BrowserProvider(ethereum!);
      const offlineSigner = provider.getSigner();
      const network = await provider.getNetwork();
      const balance = await provider.getBalance(accounts[0]);
      console.log("Balance", balance);*/
      const msg = 'Akash console want to verify your identity, it\'s mandatory to approve.';
      const from = accounts[0];
      const sign = await ethereum?.request({
        method: 'personal_sign',
        params: [msg, from],
      });
      console.log(sign);
     const hash = ethers.keccak256(ethers.toUtf8Bytes(msg))
     const entropy = hash.slice(2);
      console.log('Entropy: '+entropy);
      //mnemonic = bip39.entropyToMnemonic(entropy);
      mnemonic = 'balance nose video sheriff box come reduce flower black supreme soda tool fly lesson crater muffin crowd eight observe desert drift gloom this shock'
      console.log(mnemonic);
      handleNewAccounts(accounts, mnemonic); 
      } catch (error) {
        console.log(error);
        setKeplr({
          isSignedIn: false,
          accounts: [],
          isConnecting: false
        });
      }
      
    };
    
      const disconnectWallet = () => {
        if (accounts && accounts.length > 0) {
          localStorage.setItem('walletConnected', 'false');
          setKeplr({
            isSignedIn: false,
            accounts: [],
          });
        }
      };
    
      return {
        isConnected,
        connect: connectWallet,
        disconnect: disconnectWallet,
      };
}
