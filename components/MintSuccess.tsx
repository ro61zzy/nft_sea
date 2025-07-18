// components/MintSuccess.tsx
'use client';

import { CheckCircle } from 'lucide-react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

type Props = {
  txHash: string | null;
};

export default function MintSuccess({ txHash }: Props) {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push('/');
    }, 4000);
    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center h-[60vh] gap-4 text-center">
      <CheckCircle size={80} className="text-green-500 animate-bounce" />
      <h2 className="text-white text-2xl font-semibold">NFT Minted Successfully!</h2>

      {txHash && (
        <a
          href={`https://sepolia.etherscan.io/tx/${txHash}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 text-sm underline"
        >
          View on Etherscan
        </a>
      )}

      <p className="text-gray-400 text-sm mt-2">Redirecting to homepage...</p>
    </div>
  );
}
