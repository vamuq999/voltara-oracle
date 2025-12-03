"use client";

import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
import { mainnet, sepolia } from "wagmi/chains";

// 1. Project ID (replace this with your real one)
const projectId = "1984373f84bb00fb0d6f6b0b2f09af8a";

// 2. Chains array
export const chains = [mainnet, sepolia] as const;

// 3. App metadata
const metadata = {
  name: "Voltara Oracle",
  description: "Ask the Oracle. Mint the Vision.",
  url: "https://voltata-oracle.vercel.app",
  icons: ["https://voltata-oracle.vercel.app/icon.png"],
};

// 4. Wagmi config (chains go HERE)
export const config = defaultWagmiConfig({
  projectId,
  chains,
  metadata,
  enableInjected: true,
  enableWalletConnect: true,
});

// 5. Web3Modal init (NO `chains` here)
createWeb3Modal({
  projectId,
  wagmiConfig: config,
  // you can add options like:
  // themeMode: "dark",
  // themeVariables: { "--w3m-accent": "#38bdf8" },
});
