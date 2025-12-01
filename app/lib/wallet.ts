// app/lib/wallet.ts
"use client";

import { mainnet, sepolia } from "wagmi/chains";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { createWeb3Modal } from "@web3modal/wagmi/react";

const projectId = "YOUR_WEB3MODAL_PROJECT_ID"; // <-- put your real ID here

export const chains = [mainnet, sepolia];

const metadata = {
  name: "Voltara Labs",
  description: "Voltara Node Army & Oracle stack",
  url: "https://voltara.local",
  icons: ["https://avatars.githubusercontent.com/u/37784886?s=200&v=4"],
};

export const config = defaultWagmiConfig({
  projectId,
  chains,
  metadata,
  enableInjected: true,
  enableWalletConnect: true,
  enableCoinbase: true,
  enableEIP6963: true,
});

createWeb3Modal({
  wagmiConfig: config,
  projectId,
  chains,
  themeMode: "dark",
});
