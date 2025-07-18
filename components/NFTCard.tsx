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
        <div className="cursor-pointer bg-black rounded-lg shadow-md hover:shadow-xl transition-all p-4 w-[280px]">
          <Image
            src={imageUrl}
            alt={title}
            width={240}
            height={240}
            className="rounded-md mb-2"
          />
          <h2 className={`text-xl font-bold mb-1 text-white ${cinzel.className}`}>{title}</h2>
          <p className="text-sm text-white">{description}</p>
        </div>
      </DialogTrigger>

      <DialogContent className="max-w-5xl bg-black">
        <div className="flex flex-col md:flex-row gap-6">
          <div>
            <Image
              src={imageUrl}
              alt={title}
              width={200}
              height={200}
              className="rounded-md"
            />
            <Accordion type="single" collapsible className="w-full text-white mt-4">
              <AccordionItem value="details">
                <AccordionTrigger>Details</AccordionTrigger>
                <AccordionContent>
                  <p className="text-md text-white">{details}</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className={`text-2xl font-bold text-white ${cinzel.className}`}>{title}</h2>
            <p className="text-white">{description}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
