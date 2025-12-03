// app/lib/oracleVision.ts

import VoltaraVisionNFTv2 from "@/app/lib/abi/VoltaraVisionNFTv2.json";

// On-chain address of the VoltaraVisionNFTv2 contract (mainnet)
export const ORACLE_VISION_NFT_ADDRESS =
  "0xab8c69c811313659cfeba270a693fcc6ce7c561f" as `0x${string}`;

// ABI – the JSON file already *is* the ABI array
export const ORACLE_VISION_NFT_ABI = VoltaraVisionNFTv2;
