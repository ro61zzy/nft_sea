"use client";

import React from "react";
import Link from "next/link";
import { Cinzel } from "next/font/google";
import { WalletOptions } from "@/components/WalletConnectButton";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const Nav = () => {
  return (
    <nav className="w-full px-4">
      <div className="flex justify-between items-center w-full">
        <Link href="/" className={`text-3xl font-bold ${cinzel.className}`}>
          <h1 className="cursor-pointer">
            <span className="text-white">NFT</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400">
              SEA
            </span>
          </h1>
        </Link>

        <div className="flex items-center gap-1 sm:gap-5">
          <Link href="/mint">
            <h1 className="text-l font-bold text-white hover:text-blue-300 cursor-pointer pt-2">
              Mint
            </h1>
          </Link>
          <WalletOptions />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
