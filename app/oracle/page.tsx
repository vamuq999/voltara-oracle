// app/oracle/page.tsx
"use client";
import { ConnectWalletButton } from "../components/ConnectWalletButton";

import React, { useState, useEffect } from "react";
import { useAccount, useWriteContract } from "wagmi";
import {
  ORACLE_VISION_NFT_ADDRESS,
  ORACLE_VISION_NFT_ABI,
} from "../lib/oracleVision";



function truncate(str: string, max: number) {
  if (str.length <= max) return str;
  return str.slice(0, max - 1) + "…";
}

export default function OracleVisionPage() {
  const { address, isConnected } = useAccount();
  const { writeContractAsync } = useWriteContract();

 // 0.01 ETH in wei (10^16)
const MINT_PRICE = BigInt("10000000000000000");




  // Fix for hydration issues: only show wallet-dependent UI after mount
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isMinting, setIsMinting] = useState(false);

  const shortAddress =
    address && `${address.slice(0, 6)}…${address.slice(-4)}`;

  const handleGenerateAnswer = async () => {
  if (!question.trim()) {
    alert("Ask the Oracle a real question first.");
    return;
  }

  setIsGenerating(true);
  try {
    const res = await fetch("/api/oracle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question: question.trim() }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("Oracle API error:", res.status, text);
      alert("The Oracle ran into an error. Try again in a moment.");
      return;
    }

    const data: { response: string } = await res.json();
    setAnswer(data.response);
  } catch (err) {
    console.error(err);
    alert("Network error talking to the Oracle.");
  } finally {
    setIsGenerating(false);
  }
};


// Real mint – calls the OracleVisionNFT contract

const handleMint = async () => {
  if (!isConnected || !address) {
    alert("Connect your wallet before minting.");
    return;
  }
  if (!question.trim() || !answer) {
    alert("You need a question and an oracle response before minting.");
    return;
  }

  setIsMinting(true);
  try {
    const txHash = await writeContractAsync({
      address: ORACLE_VISION_NFT_ADDRESS as `0x${string}`,
      abi: ORACLE_VISION_NFT_ABI,
      functionName: "mintOracleVision",
      args: [],
      value: MINT_PRICE,
    });

    console.log("Mint tx sent:", txHash);
    alert(
      `Mint transaction sent!\n\nTX hash:\n${txHash}\n\nWatch your wallet / explorer for confirmation.`
    );
  } catch (err: any) {
    console.error(err);
    alert(
      `Mint failed:\n${
        err?.shortMessage || err?.message || "Unknown error, see console."
      }`
    );
  } finally {
    setIsMinting(false);
  }
};




  return (
    <main className="vx-shell">
            <div className="mb-6 flex justify-end">
        <ConnectWalletButton />
      </div>

      <div className="relative mx-auto flex max-w-5xl flex-col gap-8 px-4 py-8 lg:py-12 z-10">
        {/* Header */}
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
              Voltara Oracle // Vision Deck
            </p>
            <h1 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
              Oracle Vision – Wisdom NFTs
            </h1>
            <p className="mt-2 text-sm text-slate-400 max-w-2xl">
              Ask a question, receive an oracle response, and mint it as a
              permanent on-chain vision. Each NFT captures a single moment of
              insight in the Voltara Codex.
            </p>

            {/* ✅ Only render this after mount to avoid hydration mismatch */}
            {mounted && isConnected && address && (
              <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-slate-300">
                <span className="rounded-full bg-slate-800 px-3 py-1">
                  {shortAddress}
                </span>
              </div>
            )}
          </div>

          <div className="rounded-2xl border border-white/5 bg-slate-900/70 px-4 py-3 text-xs text-slate-300 shadow-xl shadow-slate-950/60">
            <p className="font-medium text-slate-100 text-[11px] uppercase tracking-[0.18em]">
              Mint Flow
            </p>
            <ol className="mt-2 space-y-1 list-decimal pl-4">
              <li>Ask the Oracle a question.</li>
              <li>Generate & review the response.</li>
              <li>Mint the vision as an NFT.</li>
            </ol>
          </div>
        </header>

        {/* Main grid */}
        <section className="grid gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1.3fr)]">
          {/* Left: question + answer */}
          <div className="flex flex-col gap-4">
            {/* Question card */}
            <div className="rounded-2xl border border-white/5 bg-slate-900/70 p-5 shadow-xl shadow-slate-950/70 backdrop-blur-xl">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
                1 • Ask the Oracle
              </h2>
              <p className="mt-1 text-xs text-slate-400">
                Frame a single clear question. This will be embedded in your NFT
                metadata forever.
              </p>

              <textarea
                className="mt-4 min-h-[120px] w-full resize-none rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/60"
                placeholder="Example: What should I focus on in the next 90 days to stabilise my life and grow Voltara?"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />

              <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500">
                <span>{question.trim().length} characters</span>
                <span>Stored on-chain as part of the vision.</span>
              </div>

              <button
                onClick={handleGenerateAnswer}
                disabled={isGenerating || !question.trim()}
                className="mt-4 inline-flex h-10 items-center justify-center rounded-xl bg-cyan-500 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/40 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {isGenerating
                  ? "Consulting the Oracle..."
                  : "Generate Oracle Response"}
              </button>
            </div>

            {/* Answer card */}
            <div className="rounded-2xl border border-cyan-500/30 bg-slate-900/70 p-5 shadow-xl shadow-cyan-500/20 backdrop-blur-xl">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                2 • Oracle Response
              </h2>
              {answer ? (
                <div className="mt-3 space-y-3 text-sm text-slate-100">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
                    Interpreted Vision
                  </p>
                  <p className="leading-relaxed">{answer}</p>
                  <p className="mt-2 text-[11px] text-slate-400">
                    This text will be embedded as the core description of your
                    Oracle Vision NFT.
                  </p>
                </div>
              ) : (
                <p className="mt-3 text-sm text-slate-400">
                  No response yet. Ask a question and click{" "}
                  <span className="text-cyan-300">Generate Oracle Response</span>{" "}
                  to channel a new vision.
                </p>
              )}
            </div>
          </div>

          {/* Right: NFT preview + mint */}
          <div className="flex flex-col gap-4">
            {/* NFT preview */}
            <div className="rounded-2xl border border-white/5 bg-slate-900/70 p-5 shadow-xl shadow-slate-950/70 backdrop-blur-xl">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
                3 • Vision NFT Preview
              </h2>

              <div className="mt-3 rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-900/40 p-4 shadow-inner shadow-slate-950/80">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-300">
                  Oracle Vision // VX
                </div>
                <div className="mt-2 text-base font-semibold text-slate-50">
                  {question.trim()
                    ? truncate(question.trim(), 80)
                    : "Untitled Oracle Vision"}
                </div>

                <div className="mt-3 text-xs text-slate-400 space-y-1">
                  <p className="font-medium text-slate-300">Question</p>
                  <p className="text-[11px] leading-relaxed">
                    {question.trim() || "Your question will appear here."}
                  </p>
                </div>

                <div className="mt-3 text-xs text-slate-400 space-y-1">
                  <p className="font-medium text-slate-300">Oracle Response</p>
                  <p className="text-[11px] leading-relaxed">
                    {answer ||
                      "The Oracle's response will be sealed into this NFT."}
                  </p>
                </div>

                <div className="mt-3 flex flex-wrap items-center justify-between text-[11px] text-slate-500">
                  <span>Network: Ethereum mainnet (planned)</span>
                  <span>Collection: OracleVisionNFT</span>
                </div>
              </div>
            </div>

            {/* Mint actions */}
            <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-950/70 p-5 text-xs text-slate-400">
              <p className="font-medium text-slate-200 text-sm">
                Mint Oracle Vision NFT
              </p>

              <ul className="mt-2 list-disc space-y-1 pl-4">
                <li>
                  Wallet must be connected and on the supported network before
                  minting.
                </li>
                <li>
                  Question + response are stored as on-chain metadata (or via
                  IPFS, depending on your contract design).
                </li>
                <li>
                  Each mint mints a unique token ID in{" "}
                  <span className="text-cyan-300">OracleVisionNFT</span>.
                </li>
              </ul>

              <button

  onClick={handleMint}
  disabled={isMinting}
  className="mt-4 inline-flex h-10 items-center justify-center rounded-xl bg-emerald-500 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-40"
>
  {isMinting
    ? "Submitting mint transaction..."
    : "Mint Oracle Vision NFT"}
</button>

            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
