'use client'

import Nav from "@/components/Nav";
import React from "react";
import { Cinzel } from "next/font/google";
import { Upload, File, Loader } from "lucide-react";
import { useState } from "react";
import { uploadFileToIPFS, uploadJSONToIPFS } from "@/lib/pinata";
import toast from "react-hot-toast";
import { useWriteContract, useAccount } from "wagmi";
import { nftContract } from '@/lib/contracts';

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const index = () => {
  const { address, isConnected } = useAccount();
const { writeContractAsync } = useWriteContract();

  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);
  

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };


  const handleMint = async () => {
  if (!file) return toast.error("Please select a file.");
  if (!isConnected || !address) return toast.error("Connect your wallet first.");

  setUploading(true);
  toast.loading("Uploading to IPFS...");

  try {
    const imageUrl = await uploadFileToIPFS(file);
    const metadata = {
      name: title,
      description,
      image: imageUrl,
    };

    const metadataUrl = await uploadJSONToIPFS(metadata);

    toast.dismiss();
    toast.loading("Minting NFT...");

    const txHash = await writeContractAsync({
      address: nftContract.address,
      abi: nftContract.abi,
      functionName: "mint",
      args: [address, metadataUrl],
    });

    toast.dismiss();
    toast.success("NFT minted successfully!");
    console.log("Transaction hash:", txHash);
  } catch (err: any) {
    console.error("Mint error:", err);
    toast.dismiss();
    toast.error(err?.message || "Minting failed");
  } finally {
    setUploading(false);
  }
};


  return (
    <div>
      <Nav />
      <div className="flex flex-col border mt-10 mx-4 py-10 rounded-xl border-white bg-white/10 backdrop-blur-sm  items-center justify-center">
        <h1
          className={`text-4xl font-bold bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent ${cinzel.className}`}
        >
          MINT NEW NFT
        </h1>
        <p className="text-white text-sm text-center pt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem
          tortor <br />
          quis amet scelerisque vivamus egestas.{" "}
        </p>
      </div>
      <div className="mt-16 flex items-center justify-center">
        <div className="flex flex-col gap-3 max-w-[360px] w-full">
          <label className="flex flex-col items-center justify-center w-full h-15 border-2 border-dashed border-[#9E9E9E] rounded cursor-pointer hover:border-blue-500 transition p-2 bg-[#383838]">
            <input type="file" className="hidden" onChange={handleFileChange} />
            <Upload size={32} className="text-gray-400" />
            <p className="mt-2 text-gray-300 text-sm">
              Drag & Drop or <span className="text-blue-400">Browse</span>
            </p>

          </label>
            {file && (
        <div className="mt-1 flex items-center gap-2 text-gray-300">
          <File size={20} />
          <span className="truncate">{file.name}</span>
        </div>
      )}



          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="NFT Title"
            className="bg-[#383838] text-white p-2 text-sm rounded border border-[#9E9E9E] focus:outline-none focus:border-purple-500"
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            className="bg-[#383838] text-white p-2 text-sm rounded border border-[#9E9E9E] focus:outline-none focus:border-purple-500 resize-none"
          ></textarea>

          <div className="flex justify-between items-center mt-4">
            <button className="text-white text-[12px] py-3 px-6  hover:bg-gray-800 transition-colors">
              Mint without listing
            </button>
            <button
              onClick={handleMint}
              disabled={uploading}
              className="py-3 px-6 rounded-[2px] text-[12px] text-white  bg-gradient-to-r from-blue-600 to-pink-600 hover:from-blue-700 hover:to-pink-700 transition-all"
            >
              Mint and list immediately
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
