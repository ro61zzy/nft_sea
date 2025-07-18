"use client";

import * as React from "react";
import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsName,
  useEnsAvatar,
} from "wagmi";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Wallet } from "lucide-react";

export function WalletOptions() {
  const { connectors, connect } = useConnect();
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });
  const { data: ensAvatar } = useEnsAvatar({ name: ensName! });

  const [connectedWalletName, setConnectedWalletName] = React.useState<
    string | null
  >(null);

  const shortenAddress = (addr: string | undefined) =>
    addr ? `${addr.slice(0, 6)}...${addr.slice(-4)}` : "";

  function getWalletEmoji(walletName: string): string {
    const name = walletName.toLowerCase();
    if (name.includes("metamask")) return "🦊";
    return "🦊";
  }

  return (
    <Sheet>
     <SheetTrigger asChild>
  <button className="flex items-center gap-2 px-4 py-2 text-sm text-white hover:bg-gray-700 transition">
    <Wallet className="w-7 h-7" />

          {isConnected && (
            <span className="text-sm font-medium">
              {ensName || shortenAddress(address)}
            </span>
          )}
        </button>
      </SheetTrigger>

      <SheetContent className="w-[400px] sm:w-[540px] bg-black text-white">
        <SheetHeader>
          {isConnected ? (
            <div className="flex flex-col items-start gap-4">
              <SheetTitle className="text-white text-xl mb-4">
                {" "}
                Wallet Connected
              </SheetTitle>

              {ensAvatar && (
                <img
                  src={ensAvatar}
                  alt="ENS Avatar"
                  className="w-12 h-12 rounded-full"
                />
              )}
              <button
                onClick={() => disconnect()}
                className="w-full flex items-center justify-center gap-2 mt-2 px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition"
              >
                <span className="text-xl">
                  {getWalletEmoji(connectedWalletName || "")}
                </span>
                Disconnect
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <SheetTitle className="text-white text-xl mb-8">
                Connect Wallet
              </SheetTitle>
              {connectors.map((connector) => (
                <button
                  key={connector.uid}
                  onClick={() => connect({ connector })}
                  className="flex items-center gap-3 px-4 py-3 border border-white rounded hover:bg-white hover:text-black transition"
                >
                  <span className="text-xl px-8">
                    {getWalletEmoji(connector.name)}
                  </span>
                  <span className="text-2xl font-medium">{connector.name}</span>
                </button>
              ))}
            </div>
          )}
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
