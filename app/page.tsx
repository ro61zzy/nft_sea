import Nav from "@/components/Nav";
import { NFTCard } from "@/components/NFTCard";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"], 
  variable: "--font-cinzel", 
  display: "swap",
});

const mockNFTs = [
  {
    title: "Golden Artifact",
    description: "A unique digital relic from the lost civilization.",
    imageUrl: "/nft_example.png",
    details: "Minted on Ethereum in 2023. Owned by you.",
  },
  {
    title: "Crypto Dragon",
    description: "A fierce creature with legendary fire.",
      imageUrl: "/nft_example.png",
    details: "Minted on Polygon. 1 of 50 editions.",
  },
    {
    title: "Crypto Dragon",
    description: "A fierce creature with legendary fire.",
       imageUrl: "/nft_example.png",
    details: "Minted on Polygon. 1 of 50 editions.",
  },
    {
    title: "Crypto Dragon",
    description: "A fierce creature with legendary fire.",
      imageUrl: "/nft_example.png",
    details: "Minted on Polygon. 1 of 50 editions.",
  },
    {
    title: "Crypto Dragon",
    description: "A fierce creature with legendary fire.",
       imageUrl: "/nft_example.png",
    details: "Minted on Polygon. 1 of 50 editions.",
  },
];

export default function Home() {
  return (
    <div>
      <Nav />
      <div className="flex flex-col border my-6 mx-4 py-7 rounded-xl items-center justify-center">
        <h1 className={`text-2xl font-bold bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent ${cinzel.className}`}>Listing Owned NFTs</h1>
      </div>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-5 px-4 pb-10">
        {mockNFTs.map((nft, idx) => (
          <NFTCard key={idx} {...nft} />
        ))}
      </div>
    </div>
  );
}
