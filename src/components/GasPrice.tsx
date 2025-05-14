import { useState, useEffect } from 'react';
import { formatGwei } from 'viem';

type GasPriceData = {
  low: bigint;
  medium: bigint;
  high: bigint;
  lastUpdated: Date;
};

export function GasPrice() {
  const [gasPrice, setGasPrice] = useState<GasPriceData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchGasPrice = async () => {
      setIsLoading(true);
      try {
        // This would normally be a real API call to an Ethereum gas price oracle
        // For demo purposes, we're using mock data
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Mock gas price data
        setGasPrice({
          low: BigInt(12000000000), // 12 gwei
          medium: BigInt(15000000000), // 15 gwei
          high: BigInt(20000000000), // 20 gwei
          lastUpdated: new Date(),
        });
      } catch (error) {
        console.error('Error fetching gas price:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGasPrice();
    
    // Update gas price every 30 seconds
    const interval = setInterval(fetchGasPrice, 30000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold text-text-primary mb-4">Current Gas Prices</h2>
      
      {isLoading && !gasPrice ? (
        <p className="text-text-primary">Loading gas prices...</p>
      ) : gasPrice ? (
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-green-50 p-3 rounded-lg text-center">
              <div className="text-sm text-gray-600">Low</div>
              <div className="font-semibold text-green-600">{formatGwei(gasPrice.low)} Gwei</div>
            </div>
            <div className="bg-yellow-50 p-3 rounded-lg text-center">
              <div className="text-sm text-gray-600">Medium</div>
              <div className="font-semibold text-yellow-600">{formatGwei(gasPrice.medium)} Gwei</div>
            </div>
            <div className="bg-red-50 p-3 rounded-lg text-center">
              <div className="text-sm text-gray-600">High</div>
              <div className="font-semibold text-red-600">{formatGwei(gasPrice.high)} Gwei</div>
            </div>
          </div>
          <div className="text-xs text-gray-500 mt-2 text-right">
            Last updated: {gasPrice.lastUpdated.toLocaleTimeString()}
          </div>
        </div>
      ) : (
        <p className="text-text-primary">Unable to fetch gas prices</p>
      )}
    </div>
  );
} 