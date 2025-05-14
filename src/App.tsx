import { Layout } from './components/Layout';
import { AccountBalance } from './components/AccountBalance';
import { GasPrice } from './components/GasPrice';
import { RecentTransactions } from './components/RecentTransactions';
import { useAccount } from 'wagmi';

function App() {
  const { isConnected } = useAccount();

  return (
    <Layout>
      {isConnected ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <AccountBalance />
            <GasPrice />
          </div>
          <div>
            <RecentTransactions />
          </div>
        </div>
      ) : (
        <div className="text-center py-20">
          <h1 className="text-3xl font-bold text-text-primary mb-4">Welcome to Ethereum Wallet Dashboard</h1>
          <p className="text-lg text-gray-600 mb-8">Connect your wallet to get started</p>
          <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-text-primary mb-4">Connect Your Wallet</h2>
            <p className="text-gray-600 mb-4">
              To use this dashboard, you need to connect an Ethereum wallet. 
              Click one of the buttons above to connect.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center text-gray-600">
                <svg className="w-5 h-5 mr-2 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                View your ETH balance
              </div>
              <div className="flex items-center text-gray-600">
                <svg className="w-5 h-5 mr-2 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Check current gas prices
              </div>
              <div className="flex items-center text-gray-600">
                <svg className="w-5 h-5 mr-2 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                See your recent transactions
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default App;
