"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Image from "next/image";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

interface NFTCardProps {
  title: string;
  description: string;
  imageUrl: string;
  details: string;
}

export const NFTCard = ({
  title,
  description,
  imageUrl,
  details,
}: NFTCardProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="cursor-pointer bg-transparent rounded-lg shadow-lg hover:shadow-xl transition-all p-4 w-full">
          <Image
            src={imageUrl}
            alt={title}
            width={240}
            height={220}
            className="rounded mb-2 mx-auto object-cover w-[240px] h-[220px]"
          />

          <h2
            className={`text-lg font-bold mb-1 text-white ${cinzel.className}`}
          >
            {title}
          </h2>
          <p className="text-sm text-white">
            {description?.split(" ").slice(0, 10).join(" ")}
            {description?.split(" ").length > 10 ? "..." : ""}
          </p>
        </div>
      </DialogTrigger>

      <DialogContent className="max-w-[95vw] md:max-w-4xl bg-black rounded-md overflow-y-auto max-h-[90vh]">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 w-full md:w-[40%]">
            <div className="w-full aspect-[4/3] overflow-hidden rounded bg-gray-200">
              <img
                src={imageUrl}
                alt="nft"
                className="w-full h-full object-cover"
              />
            </div>

            <Accordion
              type="single"
              collapsible
              className="w-full text-white mt-4"
            >
              <AccordionItem value="details">
                <AccordionTrigger className="bg-[#383838] rounded px-2 py-2 text-sm">
                  Details
                </AccordionTrigger>

                <AccordionContent>
                  <p className="text-sm text-white pt-4 px-2">{details}</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="flex-1 w-full">
            <h2
              className={`text-xl font-bold text-white mb-2 ${cinzel.className}`}
            >
              {title}
            </h2>

            <p className="font-bold text-white text-sm mt-2">DESCRIPTION</p>
            <p className="text-white text-sm leading-relaxed">{description}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
