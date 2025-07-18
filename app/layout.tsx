import type { Metadata } from "next";
import "./globals.css";
import { Web3Provider } from "@/provider/Web3Provider";

export const metadata: Metadata = {
  title: "NFT SEA",
  description: "by me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="container mx-auto px-12 antialiased bg-[url('/background.png')] bg-cover bg-center min-h-screen">
        <Web3Provider>{children}</Web3Provider>
      </body>
    </html>
  );
}
