# Ethereum Wallet Dashboard

A modern, responsive Ethereum wallet dashboard demo built with React, TypeScript, Vite, Tailwind CSS, Viem, and Wagmi.

## Features

- Connect to multiple Ethereum wallets (MetaMask, WalletConnect, etc.)
- View ETH balance
- Check current gas prices
- See recent transactions
- Fully responsive design
- TypeScript for type safety
- Modern UI with Tailwind CSS

## Technologies Used

- **React**: Modern UI library
- **TypeScript**: Type-safe JavaScript
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **Viem**: TypeScript interface for Ethereum
- **Wagmi**: React hooks for Ethereum
- **React Query**: Data synchronization for React

## Getting Started

### Prerequisites

- Node.js 14.18+ or 16+
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/eth-wallet-dashboard.git
cd eth-wallet-dashboard
```

2. Install dependencies
```bash
npm install
# or
yarn
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Configuration

To use WalletConnect, you need to get a project ID from [WalletConnect Cloud](https://cloud.walletconnect.com/). Once you have it, update the `projectId` in `src/wagmi.ts`:

```typescript
walletConnect({
  projectId: 'YOUR_WALLET_CONNECT_PROJECT_ID', // Replace with your actual WalletConnect project ID
}),
```

## Build for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## Folder Structure

```
eth-wallet-dashboard/
├── public/
├── src/
│   ├── components/
│   │   ├── AccountBalance.tsx
│   │   ├── ConnectWallet.tsx
│   │   ├── GasPrice.tsx
│   │   ├── Layout.tsx
│   │   └── RecentTransactions.tsx
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── wagmi.ts
├── index.html
└── package.json
```

## License

MIT
