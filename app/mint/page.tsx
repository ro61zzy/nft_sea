import Nav from "@/components/Nav";
import React from "react";
import { Cinzel } from "next/font/google";
import { Upload, File, Loader } from "lucide-react";
import Footer from "@/components/Footer";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const index = () => {
  return (
    <div>
      <Nav />
      <div className="flex flex-col border mt-4 mx-4 py-8 rounded-xl bg-gray bg-opacity-30 backdrop-blur-xl items-center justify-center">
        <h1
          className={`text-2xl font-bold bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent ${cinzel.className}`}
        >
          MINT NEW NFT
        </h1>
        <p className="text-white text-[8px] text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem
          tortor <br />
          quis amet scelerisque vivamus egestas.{" "}
        </p>
      </div>
      <div className="mt-8 flex items-center justify-center">
        <div className="flex flex-col gap-3 max-w-[360px] w-full">
          <label className="flex flex-col items-center justify-center w-full h-15 border-2 border-dashed border-[#9E9E9E] rounded cursor-pointer hover:border-blue-500 transition p-2 bg-[#383838]">
            <input type="file" className="hidden" />
            <Upload size={32} className="text-gray-400" />
            <p className="mt-2 text-gray-300 text-sm">
              Drag & Drop or <span className="text-blue-400">Browse</span>
            </p>
          </label>

          <input
            type="text"
            placeholder="NFT Title"
            className="bg-[#383838] text-white p-2 text-sm rounded border border-[#9E9E9E] focus:outline-none focus:border-purple-500"
          />
          <textarea
            placeholder="Description"
            rows={4}
            className="bg-[#383838] text-white p-2 text-sm rounded border border-[#9E9E9E] focus:outline-none focus:border-purple-500 resize-none"
          ></textarea>

          <div className="flex justify-between items-center mt-4">
            <button className="text-white text-[12px] py-3 px-6  hover:bg-gray-800 transition-colors">
              Mint without listing
            </button>
            <button className="py-3 px-6 rounded-[2px] text-[12px] text-white  bg-gradient-to-r from-blue-600 to-pink-600 hover:from-blue-700 hover:to-pink-700 transition-all">
              Mint and list immediately
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
