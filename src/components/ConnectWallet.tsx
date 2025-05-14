import { useAccount, useConnect, useDisconnect } from 'wagmi';

export function ConnectWallet() {
  const { connectors, connect, status } = useConnect();
  const { disconnect } = useDisconnect();
  const { address, isConnected } = useAccount();

  if (isConnected) {
    return (
      <div className="flex items-center gap-4">
        <span className="text-sm text-text-primary truncate max-w-[150px]">
          {address}
        </span>
        <button
          onClick={() => disconnect()}
          className="bg-error hover:bg-opacity-80 text-white px-4 py-2 rounded-lg transition-all"
        >
          Disconnect
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      {connectors.map((connector) => (
        <button
          key={connector.uid}
          onClick={() => connect({ connector })}
          disabled={status === 'pending'}
          className="bg-primary hover:bg-opacity-80 text-white px-4 py-2 rounded-lg transition-all"
        >
          {connector.name}
          {status === 'pending' && ' (connecting...)'}
        </button>
      ))}
    </div>
  );
} 