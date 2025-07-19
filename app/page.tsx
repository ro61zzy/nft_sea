"use client";

import { useEffect, useState } from "react";
import Nav from "@/components/Nav";
import { NFTCard } from "@/components/NFTCard";
import { Cinzel } from "next/font/google";
import { useAccount } from "wagmi";
import { getNFTsForOwner } from "@/lib/alchemy";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

export default function Home() {
  const { address, isConnected } = useAccount();
  const [nfts, setNfts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNFTs = async () => {
      if (!address) return;
      setLoading(true);
      try {
        const data = await getNFTsForOwner(address);
        setNfts(data);
      } catch (err) {
        console.error("Failed to load NFTs", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNFTs();
  }, [address]);

  return (
    <div>
      <Nav />
      <div className="flex flex-col border my-6 mx-4 py-7 rounded-xl items-center justify-center border-white bg-white/10 backdrop-blur-sm">
        <h1
          className={`text-2xl font-bold bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent ${cinzel.className}`}
        >
          Listing Owned NFTs
        </h1>
      </div>
      {!isConnected ? (
        <div className="w-full flex justify-center mt-10">
          <p className="text-white text-lg px-6 py-3 rounded-xl shadow-lg text-center">
            Please connect your wallet to view your NFTs.
          </p>
        </div>
      ) : loading ? (
        <div className="w-full flex justify-center mt-10">
          <p className="text-white text-lg animate-pulse">Loading NFTs...</p>
        </div>
      ) : (
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl px-4 pb-10">
            {nfts.length === 0 ? (
              <p className="text-white text-lg text-center col-span-full">
                You don’t own any NFTs yet. Try minting one first.
              </p>
            ) : (
              nfts.map((nft, idx) => <NFTCard key={idx} {...nft} />)
            )}
          </div>
        </div>
      )}
    </div>
  );
}
