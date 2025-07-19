import { http, createConfig } from "wagmi";
import { sepolia } from "wagmi/chains";
import { metaMask, walletConnect, injected } from "wagmi/connectors";

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!;

export const config = createConfig({
  chains: [sepolia],
  connectors: [
    metaMask(), 
    walletConnect({ projectId }), 
    injected()
  ],
  transports: {
    [sepolia.id]: http(),
  },
});
