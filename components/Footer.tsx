import React from 'react'
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const Footer = () => {
  return (
    <div className='bg-black'>

    <div className="  container mx-auto px-8 py-2 flex flex-col sm:flex-row justify-between items-center w-full ">
      <h1 className={`cursor-pointer font-bold text-2xl ${cinzel.className}`}>
        <span className="text-white">NFT</span>{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400">
          SEA
        </span>
      </h1>

      <p className="text-gray-400 text-sm mt-2 sm:mt-0">
        NFT Sea 2025 © All rights reserved
      </p>

      <button className="mt-4 sm:mt-0 py-2 px-4 rounded-lg text-white font-semibold bg-gradient-to-r from-blue-600 to-pink-600 hover:from-blue-700 hover:to-pink-700 transition-all">
        Explore Marketplace
      </button>
    </div>
    </div>
  )
}

export default Footer;