import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { keplrState, showKeplrWindow, activeCertificate } from '../recoil/atoms';
import { loadActiveCertificate } from '../recoil/api';
import { getKeplr } from '../_helpers/keplr-utils';
import logging from '../logging';

export function useWallet() {
  const [keplr, setKeplr] = useRecoilState(keplrState);
  const [certificate, setCertificate] = useRecoilState(activeCertificate);
  const isConnected = keplr.isSignedIn;
  const [, setShowKeplrPopup] = useRecoilState(showKeplrWindow);

  /*useEffect(() => {
    if (isConnected) {
      getKeplr()
        .then((res) => {
          setKeplr(res);
        })
        .catch(() => {
          disconnectWallet();
        });
    }
  }, [isConnected]);*/

  const connectWallet = () => {
    if (!window.keplr) {
      setShowKeplrPopup(true);
      return;
    }

    getKeplr()
      .then(async(res) => {
        const activeCert = await loadActiveCertificate(res.accounts[0].address);
        if (activeCert.$type === 'TLS Certificate') {
          setCertificate(activeCert);
        }
        setKeplr(res);
        localStorage.setItem('walletConnected', 'true');
      })
      .catch((error: { message: string }) => {
        logging.error(`Error connecting to Keplr wallet: ${error.message}`);
        console.log(error);
        disconnectWallet();
      });
  };

  const disconnectWallet = () => {
    if (isConnected) {
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
