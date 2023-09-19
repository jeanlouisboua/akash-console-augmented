import { ethers } from 'ethers';

export function shortenString(str: string, extraShort?: true) {
  return `${str.substring(0, extraShort ? 4 : 8)}...${str.substring(
    str.length - (extraShort ? 3 : 6),
  )}`;
}

export function shortenAddress(address: string, extraShort?: true): string {
  try {
    const formattedAddress = ethers.getAddress(address);
    return shortenString(formattedAddress, extraShort);
  } catch {
    return address;
  }
}

export function shortenIfAddress(
  address?: string | null | false,
  extraShort?: true,
): string {
  if (typeof address === "string" && address.length > 0) {
    return shortenAddress(address, extraShort);
  }
  return address || "";
}
