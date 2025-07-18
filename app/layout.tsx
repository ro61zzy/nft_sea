import type { Metadata } from "next";
import "./globals.css";
import { Web3Provider } from "@/provider/Web3Provider";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

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
      <body className="antialiased bg-[url('/background.png')] bg-cover bg-center">
        <Web3Provider>
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow container mx-auto px-12 py-2">
               <Toaster position="top-center" />
              {children}
            </main>
            <Footer />
          </div>
        </Web3Provider>
      </body>
    </html>
  );
}
