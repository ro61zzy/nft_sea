export async function getNFTsForOwner(ownerAddress: string) {
  const baseURL = `https://eth-sepolia.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_MY_ALCHEMY_API_KEY}`;
  const url = `${baseURL}/getNFTs/?owner=${ownerAddress}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch NFTs");

  const data = await res.json();

  const nfts = data.ownedNfts || [];

  return nfts.map((nft: any) => {
    const rawImage = nft?.metadata?.image || nft?.media?.[0]?.gateway || "";

    // Normalize ipfs:// URIs
    const imageUrl = normalizeIpfsUrl(rawImage);

    return {
      title: nft.title || nft.metadata?.name || "Untitled",
      description: nft.metadata?.description || "No description",
      imageUrl,
      details: `${nft.contractMetadata?.name || "Unknown Contract"} • Token ID: ${parseInt(nft.id.tokenId, 16)}`,
    };
  });
}

function normalizeIpfsUrl(url: string): string {
  if (!url) return "no image found"; 
  if (url.startsWith("ipfs://")) {
    return url.replace("ipfs://", "https://ipfs.io/ipfs/");
  }
  if (url.startsWith("https://ipfs.io/ipfs/https://ipfs.io/ipfs/")) {
    return url.replace("https://ipfs.io/ipfs/https://ipfs.io/ipfs/", "https://ipfs.io/ipfs/");
  }
  return url;
}
