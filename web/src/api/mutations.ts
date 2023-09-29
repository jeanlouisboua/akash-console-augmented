import { getRpcNode } from '../hooks/useRpcNode';

import * as beta2 from './rpc/beta2';
import * as beta3 from './rpc/beta3';
import { getKeplr } from '../_helpers/keplr-utils';
import { getCurrentHeight } from '../_helpers/deployments-utils';
import { SDLSpec } from '../components/SdlConfiguration/settings';

//export const closeDeployment = async (dseq: string) => {
  export const closeDeployment = async ({wallet, dseq}: {wallet: any; dseq: string}) => {
  const { networkType } = getRpcNode();
  //const wallet = await getKeplr();

  const mutateMethod = beta3.deployments.closeDeployment;
    
  /*const mutateMethod = networkType === 'testnet'
    ? beta3.deployments.closeDeployment
    : beta2.deployments.closeDeployment;*/

  const owner = wallet.accounts[0].address;

  return mutateMethod(wallet, { owner, dseq: parseInt(dseq) });
};

export const fundDeployment = async ({wallet, dseq, amount }: {wallet:any, dseq: string, amount: number }) => {
  const { networkType } = getRpcNode();
  //const wallet = await getKeplr();
  const mutateMethod = beta3.deployments.fundDeployment;
  /*const mutateMethod = networkType === 'testnet'
    ? beta3.deployments.fundDeployment
    : beta2.deployments.fundDeployment;*/

  const owner = wallet.accounts[0].address;

  return mutateMethod(wallet, { owner, dseq: parseInt(dseq) }, amount);
};

export const createDeployment = async (
  {wallet, sdl, depositor }: {wallet: any; sdl: SDLSpec | undefined; depositor?: string }
) => {
  const { networkType } = getRpcNode();
  //const wallet = await getKeplr();

  if (!sdl) {
    return Promise.reject('No SDL provided');
  }
  const mutateMethod = beta3.deployments.createDeployment;
  /*const mutateMethod = networkType === 'testnet'
    ? beta3.deployments.createDeployment
    : beta2.deployments.createDeployment;*/

  return mutateMethod(wallet, sdl, depositor);
};

export const createCertificate = async (wallet: any) => {
  const { rpcNode, networkType } = getRpcNode();
 // const wallet = await getKeplr();
 
 const mutateMethod = beta3.certificates.createAndBroadcastCertificate;
  
  /*const mutateMethod = networkType === 'testnet'
    ? beta3.certificates.createAndBroadcastCertificate
    : beta2.certificates.createAndBroadcastCertificate;*/

  return mutateMethod(rpcNode, wallet);
};

//export const revokeCertificate = async (certificate: string) => {
  export const revokeCertificate = async ({ wallet, certificate }:{ wallet: any, certificate: string }) => {
  const { rpcNode, networkType } = getRpcNode();
  //const wallet = await getKeplr();
  const mutateMethod = beta3.certificates.broadcastRevokeCertificate;
  /*const mutateMethod = networkType === 'testnet'
    ? beta3.certificates.broadcastRevokeCertificate
    : beta2.certificates.broadcastRevokeCertificate;*/

  return mutateMethod(rpcNode, wallet, certificate);
};

export const createLease = async ({wallet, bidId} :{wallet: any, bidId: {
  owner: string;
  dseq: Long;
  gseq: number;
  oseq: number;
  provider: string;
}}) => {
  const { networkType } = getRpcNode();
 // const wallet = await getKeplr();
 const mutateMethod = beta3.deployments.createLease;

  /*const mutateMethod = networkType === 'testnet'
    ? beta3.deployments.createLease
    : beta2.deployments.createLease;*/

  return mutateMethod(wallet, (bidId as any));
};

export const sendManifest = async ({ address, lease, sdl }: { address: string, lease: any, sdl: any }) => {
  const { networkType } = getRpcNode();
  const mutateMethod = beta3.deployments.sendManifest;
  /*const mutateMethod = networkType === 'testnet'
    ? beta3.deployments.sendManifest
    : beta2.deployments.sendManifest;*/

  return mutateMethod(address, lease, sdl);
};

export const updateDeployment = async ({ wallet, deploymentId, sdl }: { wallet: any, deploymentId: object, sdl: SDLSpec | undefined }) => {
  const { networkType } = getRpcNode();
  //const wallet = await getKeplr();

  if (!sdl) {
    return Promise.reject('No SDL provided');
  }
  const mutateMethod = beta3.deployments.updateDeployment;

  /*const mutateMethod = networkType === 'testnet'
    ? beta3.deployments.updateDeployment
    : beta2.deployments.updateDeployment;*/

  return mutateMethod(wallet, deploymentId, sdl);
};