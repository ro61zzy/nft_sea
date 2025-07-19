# 🖼️ NFT Minting App

A simple decentralized application built with **Next.js**, **TypeScript**, **TailwindCSS**, **Wagmi**, and **Pinata** that allows users to **connect their Ethereum wallet** and **mint ERC-721 NFTs** by uploading an image and metadata, then storing them on IPFS.

## 🚀 Live Demo

👉 [https://nft-sea-eta.vercel.app/](https://nft-sea-eta.vercel.app/)

---

## 📸 Features

- ✅ Wallet connection (MetaMask, Injected, WalletConnect)
- ✅ Mint NFTs with title, description, and image
- ✅ Upload assets to IPFS via **Pinata**
- ✅ Mint NFTs to the user's connected wallet using the `mint(to, uri)` function
- ✅ Fetch and display minted NFTs from **Alchemy API**
- ✅ Styled using TailwindCSS + Shadcn-ui
- ✅ Fully responsive UI with loading + success states

---

## 🛠️ Tech Stack

| Tech          | Purpose                              |
|---------------|--------------------------------------|
| **Next.js 14**| App framework                        |
| **TypeScript**| Type safety                          |
| **TailwindCSS**| Styling + layout                    |
| **Wagmi**     | Ethereum wallet + contract interactions |
| **Pinata**    | IPFS file + metadata storage         |
| **Alchemy**   | NFT ownership lookup (read only)     |

---

## 📦 Installation

```bash
git clone git@github.com:ro61zzy/nft_sea.git
cd nft_sea

# install dependencies
npm install

# create .env file
cp .env.example .env

# start dev server
npm run dev
```

## 🔐 .env Setup
Create a .env file at the root of your project:

```bash
NEXT_PUBLIC_CHAIN_ID=11155111
NEXT_PUBLIC_ALCHEMY_ENDPOINT=https://eth-sepolia.g.alchemy.com/v2/YOUR_ALCHEMY_API_KEY
NEXT_PUBLIC_MY_ALCHEMY_API_KEY= "YOUR_ALCHEMY_API_KEY"
NEXT_PUBLIC_NFT_ADDRESS=0xc507d4FbD9b5Bd102668c00a3eF7ec68bF95C6A1
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID= "your_walletconnect_project_id"

NEXT_PUBLIC_PINATA_API_KEY= "your_pinata_key"
NEXT_PUBLIC_PINATA_SECRET_API_KEY= "your_pinata_secret"
```


## ✍️ Minting Flow
1. User connects their wallet

2. **Fills out form:** title, description, image

3. Image is uploaded to IPFS via Pinata

4. Metadata JSON (OpenSea-compliant) is uploaded to IPFS

5. **Calls contract:** mint(address, uri)

6. Displays success message with transaction hash

## 📄 NFT Metadata Format
We follow OpenSea Metadata Standards:

```
{
  "name": "NFT Title",
  "description": "NFT Description",
  "image": "https://ipfs.io/ipfs/<hash>"
}
```

## Tech Stack
Next.js 14, TypeScript, Tailwind, Shadcs-UI, Wagmi, Tanstack Query, Pinata, Alchemy API

