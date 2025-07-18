"use client"

import React from "react";
import { Cinzel } from "next/font/google";
import {  WalletOptions } from "./WalletConnectButton";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const Nav = () => {
  return (
    <div className="pt-4 w-full px-4">
      <div className="flex justify-between items-center w-full">
        <h1 className={`text-5xl font-bold ${cinzel.className}`}>
          <span className="text-white">NFT</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400">
            SEA
          </span>
        </h1>

        <div className="flex text-right">
          <h3 className="text-sm text-white mb-2">Mint</h3>
         <WalletOptions />
        </div>
      </div>
    </div>
  );
};

export default Nav;
