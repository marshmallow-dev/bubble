import { ethers } from "ethers";

export const sendEvmNativeTokens = async (
  to: string,
  amount: string,
  rpc: string
) => {
  const provider = new ethers.providers.JsonRpcProvider(rpc);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const pk: string = process.env.PRIVATE_KEY;
  const signer = new ethers.Wallet(pk, provider);
  const tx = signer.sendTransaction({
    to: to,
    value: ethers.utils.parseEther(amount),
  });
  return await tx;
};

export const rpc = {
  AVAX: "https://api.avax-test.network/ext/bc/C/rpc",
  ETH: "https://eth-goerli.public.blastapi.io",
  FANTOM: "https://fantom-testnet.public.blastapi.io",
};
