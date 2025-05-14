import { useAccount, useBalance } from 'wagmi';

export function AccountBalance() {
  const { address, isConnected } = useAccount();
  const { data: balance, isLoading } = useBalance({
    address,
  });

  if (!isConnected) return null;
  
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold text-text-primary mb-4">Account Balance</h2>
      
      {isLoading ? (
        <p className="text-text-primary">Loading balance...</p>
      ) : (
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <span className="text-text-primary">ETH Balance:</span>
            <span className="font-medium text-text-primary">
              {balance?.formatted || '0'} {balance?.symbol}
            </span>
          </div>
          <div className="text-xs text-gray-500 mt-2">
            {address && (
              <div className="truncate">
                Address: {address}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 