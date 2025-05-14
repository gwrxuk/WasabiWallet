import type { ReactNode } from 'react';
import { ConnectWallet } from './ConnectWallet';

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-text-primary">Ethereum Wallet Dashboard</h1>
          </div>
          <ConnectWallet />
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-white shadow-md mt-auto">
        <div className="container mx-auto px-4 py-6 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Ethereum Wallet Dashboard Demo</p>
          <p className="text-xs mt-1">Built with React, Vite, TypeScript, Tailwind CSS, Viem, and Wagmi</p>
        </div>
      </footer>
    </div>
  );
} 