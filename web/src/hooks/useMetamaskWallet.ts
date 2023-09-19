import { useRecoilState } from 'recoil';
import { MetaMaskSDK, SDKProvider } from '@metamask/sdk';
import MetaMaskOnboarding from '@metamask/onboarding';
import { keplrState } from '../recoil/atoms';
import { ethers } from 'ethers';
import * as bip39 from 'bip39';
import { DirectSecp256k1HdWallet, Registry } from '@cosmjs/proto-signing';

let onboarding: any;
let accounts: any;
const { ethereum } = window;
const currentUrl = new URL(window.location.href);
const forwarderOrigin = currentUrl.hostname === 'localhost' ? 'http://localhost:3000' : undefined;

export function useMetamaskWallet(){
    const [keplr, setKeplr] = useRecoilState(keplrState);
    const isConnected = keplr.isSignedIn;
    //const [, setShowKeplrPopup] = useRecoilState(showKeplrWindow);

    const initialize = async () => {
        try {
            onboarding = new MetaMaskOnboarding({ forwarderOrigin });
        } catch (error) {
            console.error(error);
        }
    
        if (isMetaMaskInstalled()) {
            console.log('Metamask is already installed');
            handleNewAccounts();
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
          setKeplr({
            accounts:[...cosmosAccounts],
            isSignedIn: true,
          });
          console.log("keplr object", keplr);
            localStorage.setItem('walletConnected', 'true');
            //ethereum.autoRefreshOnNetworkChange = false;
            /*ethereum.on('chainChanged', handleNewChain)
            ethereum.on('networkChanged', handleNewNetwork)*/
            ethereum?.on('accountsChanged', handleNewAccounts);
            console.log('Metamask sucessfully connected ! ');
        } else {
            console.log('Metamask Disconnected ! ');
            //setAuth(false);
            setKeplr({
              isSignedIn: false,
              accounts: [],
            });
            localStorage.setItem('walletConnected', 'false');
        }
    }

    const connectWallet = async() => {
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
        console.log("Entropy: "+entropy);
        const mnemonic = bip39.entropyToMnemonic(entropy);
        console.log(mnemonic);
        handleNewAccounts(accounts, mnemonic);
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

function getAkashTypeRegistry(): any {
  throw new Error('Function not implemented.');
}
