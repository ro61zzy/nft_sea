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
            height={240}
            className="rounded mb-2 mx-auto"
          />

          <h2
            className={`text-l font-bold mb-1 text-white ${cinzel.className}`}
          >
            {title}
          </h2>
         <p className="text-[13px] text-white">
  {description?.split(" ").slice(0, 10).join(" ")}{description?.split(" ").length > 10 ? "..." : ""}
</p>

        </div>
      </DialogTrigger>

      <DialogContent className="max-w-7xl bg-black">
        <div className="flex flex-col md:flex-row gap-6">
          <div>
            <Image
              src={imageUrl}
              alt={title}
              width={200}
              height={200}
              className="rounded-md"
            />
            <Accordion
              type="single"
              collapsible
              className="w-full text-white mt-4"
            >
              <AccordionItem value="details">
                <AccordionTrigger className="bg-[#383838] rounded-[2px] px-[5px] py-2">
                  Details
                </AccordionTrigger>

                <AccordionContent>
                  <p className="text-md text-white pt-4 px-[5px]">{details}</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className={`text-xl font-bold text-white ${cinzel.className}`}>
              {title}
            </h2>
            <p className="font-bold text-white text-[14px] mt-2">DESCRIPTION</p>
            <p className="text-white text-sm">{description}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
