import { useAccount } from 'wagmi';
import { useState, useEffect } from 'react';

type Transaction = {
  hash: string;
  from: string;
  to: string;
  value: string;
  timestamp: number;
};

// This is a placeholder component that would normally fetch transactions from an API
export function RecentTransactions() {
  const { address, isConnected } = useAccount();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isConnected || !address) return;

    const fetchTransactions = async () => {
      setIsLoading(true);
      try {
        // This would normally be a real API call to an Ethereum indexer or service like Etherscan
        // For demo purposes, we're using mock data
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const mockTransactions: Transaction[] = [
          {
            hash: '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef',
            from: address,
            to: '0xd8da6bf26964af9d7eed9e03e53415d37aa96045',
            value: '0.1',
            timestamp: Date.now() - 3600000,
          },
          {
            hash: '0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890',
            from: '0x71c7656ec7ab88b098defb751b7401b5f6d8976f',
            to: address,
            value: '0.05',
            timestamp: Date.now() - 7200000,
          },
          {
            hash: '0x7890abcdef1234567890abcdef1234567890abcdef1234567890abcdef123456',
            from: address,
            to: '0xc5fdf4076b8f3a5357c5e395ab970b5b54098fef',
            value: '0.023',
            timestamp: Date.now() - 14400000,
          },
        ];
        
        setTransactions(mockTransactions);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTransactions();
  }, [address, isConnected]);

  if (!isConnected) return null;

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold text-text-primary mb-4">Recent Transactions</h2>
      
      {isLoading ? (
        <p className="text-text-primary">Loading transactions...</p>
      ) : transactions.length > 0 ? (
        <div className="flex flex-col gap-4">
          {transactions.map((tx) => (
            <div key={tx.hash} className="border-b border-gray-200 pb-3 last:border-0">
              <div className="flex justify-between items-start mb-1">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-text-primary">
                    {tx.from === address ? 'Sent' : 'Received'} {tx.value} ETH
                  </span>
                  <span className="text-xs text-gray-500">
                    {new Date(tx.timestamp).toLocaleString()}
                  </span>
                </div>
                <span className={`text-xs font-medium ${tx.from === address ? 'text-error' : 'text-secondary'}`}>
                  {tx.from === address ? '-' : '+'}{tx.value} ETH
                </span>
              </div>
              <div className="text-xs text-gray-500 truncate">
                {tx.from === address ? `To: ${tx.to}` : `From: ${tx.from}`}
              </div>
              <div className="text-xs text-gray-500 truncate">
                Tx: {tx.hash}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-text-primary">No transactions found</p>
      )}
    </div>
  );
} 