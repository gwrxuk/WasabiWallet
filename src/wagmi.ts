import { http, createConfig } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
import { injected, metaMask, walletConnect } from 'wagmi/connectors';

// Create wagmi config for Ethereum connections
export const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
  connectors: [
    injected(),
    metaMask(),
    walletConnect({
      projectId: 'YOUR_WALLET_CONNECT_PROJECT_ID', // Replace with your actual WalletConnect project ID
    }),
  ],
}); 