// app/components/ConnectWalletButton.tsx
"use client";
import { ConnectWalletButton } from "../components/ConnectWalletButton";

import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { useWeb3Modal } from "@web3modal/wagmi/react";

export function ConnectWalletButton() {
  const { address, isConnected } = useAccount();
  const { open } = useWeb3Modal();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Avoid hydration mismatch
  if (!mounted) return null;

  const shortAddress =
    address && address.length > 8
      ? `${address.slice(0, 6)}...${address.slice(-4)}`
      : address ?? "";

  return (
    <button
      type="button"
      onClick={() => open()}
      className="rounded-full border border-cyan-400/60 bg-cyan-500/10 px-4 py-2 text-xs font-medium text-cyan-100 hover:bg-cyan-500/20 transition"
    >
      {isConnected && shortAddress ? shortAddress : "Connect Wallet"}
    </button>
  );
}
