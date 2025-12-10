"use client";

import { useState } from "react";
import { ConnectWalletButton } from "../components/ConnectWalletButton";
import StatusOrb from "../components/StatusOrb";
import {
  runVoltaraPipeline,
  VoltaraOutput,
} from "../lib/voltaraPipeline";
import { mintOracleVisionFromPipeline } from "../lib/oracleVisionClient";

export default function OraclePage() {
  // -------------------- STATE --------------------
  const [question, setQuestion] = useState("");
  const [output, setOutput] = useState<VoltaraOutput | null>(null);
  const [showJson, setShowJson] = useState(false);

  // minting state
  const [isMinting, setIsMinting] = useState(false);
  const [mintTxHash, setMintTxHash] = useState<string | null>(null);
  const [mintError, setMintError] = useState<string | null>(null);

  // -------------------- HANDLERS --------------------
  const handleRun = () => {
    if (!question.trim()) return;
    const result = runVoltaraPipeline(question);
    setOutput(result);
    setMintTxHash(null);
    setMintError(null);
  };

  const handleMint = async () => {
    if (!output) return;
    setIsMinting(true);
    setMintError(null);
    setMintTxHash(null);

    try {
      const txHash = await mintOracleVisionFromPipeline({
        scan: output.scan,
        mined: output.mined,
        blueprint: output.blueprint,
        // 0 = free mint for now; change later if you set a price
        mintValueEth: "0",
      });

      setMintTxHash(txHash);
    } catch (err: any) {
      console.error(err);
      setMintError(err?.message ?? "Mint failed");
    } finally {
      setIsMinting(false);
    }
  };

  // live stats on input
  const charCount = question.length;
  const wordCount = question.trim().length
    ? question.trim().split(/\s+/).length
    : 0;

  // -------------------- RENDER --------------------
  return (
    <main className="relative min-h-screen bg-slate-950 text-slate-100 pt-20 pb-24 px-6 overflow-hidden">
      {/* SUBTLE GRID BACKDROP */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.14]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(148,163,184,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.12) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* STATUS CHIP */}
      <div className="relative flex justify-center mb-6">
        <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-emerald-500/10 text-xs text-emerald-300 border border-emerald-400/40 shadow-[0_0_18px_rgba(16,185,129,0.35)]">
          <span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
          Live Systems Online
        </span>
      </div>

      {/* HEADER */}
      <header className="relative max-w-5xl mx-auto mb-8 flex items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-[0.18em] mb-1 uppercase">
            Voltara Oracle
          </h1>
          <p className="text-[11px] md:text-xs text-slate-400 tracking-[0.22em] uppercase">
            V3 Dream Compiler · VoltaraSee → VoltaraMine → VoltaraComeUp → View
          </p>

          {/* PIPELINE STAGE CHIPS */}
          <div className="mt-3 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.2em]">
            <span className="px-2 py-1 rounded-full bg-slate-900/80 border border-emerald-500/60 text-emerald-300">
              Stage 1 · See
            </span>
            <span className="px-2 py-1 rounded-full bg-slate-900/80 border border-cyan-500/50 text-cyan-300">
              Stage 2 · Mine
            </span>
            <span className="px-2 py-1 rounded-full bg-slate-900/80 border border-fuchsia-500/50 text-fuchsia-300">
              Stage 3 · ComeUp
            </span>
            <span className="px-2 py-1 rounded-full bg-slate-900/80 border border-slate-500/80 text-slate-200">
              Stage 4 · View
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <StatusOrb />
          <ConnectWalletButton />
        </div>
      </header>

      {/* MAIN GRID */}
      <section className="relative max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
        {/* INPUT SIDE */}
        <div className="space-y-4">
          <label className="block text-xs font-semibold tracking-[0.18em] uppercase text-slate-400">
            Input Stream
          </label>

          <div className="rounded-xl bg-slate-950/80 border border-slate-700/70 shadow-[0_0_40px_rgba(15,23,42,0.9)]">
            <textarea
              className="w-full h-52 rounded-t-xl bg-transparent px-4 py-3 text-sm outline-none resize-none"
              placeholder="Drop in a dream fragment, question, or raw text for VoltaraSee to scan..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />

            {/* LIVE TELEMETRY BAR */}
            <div className="flex items-center justify-between px-4 py-2 border-t border-slate-700/70 text-[11px] text-slate-400">
              <div className="flex gap-4">
                <span>
                  <span className="text-slate-500">chars:</span>{" "}
                  <span className="text-emerald-300">{charCount}</span>
                </span>
                <span>
                  <span className="text-slate-500">words:</span>{" "}
                  <span className="text-cyan-300">{wordCount}</span>
                </span>
              </div>
              <span className="font-mono text-[10px] text-slate-500">
                PIPELINE_READY {">>"} {question.trim() ? "ONLINE" : "IDLE"}
              </span>
            </div>
          </div>

          <button
            onClick={handleRun}
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-emerald-500 text-slate-950 text-sm font-semibold shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 transition"
          >
            Run Voltara Pipeline
          </button>
        </div>

        {/* OUTPUT SIDE */}
        <div className="space-y-4">
          <label className="block text-xs font-semibold tracking-[0.18em] uppercase text-slate-400">
            Voltara View · Signal Console
          </label>

          {!output && (
            <div className="rounded-xl border border-slate-700/70 bg-slate-950/80 px-4 py-6 text-sm text-slate-400 shadow-[0_0_34px_rgba(15,23,42,0.9)]">
              Waiting for input. Once you run the pipeline, this console will
              show:
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li>Scan metrics from VoltaraSee</li>
                <li>Signal extraction from VoltaraMine</li>
                <li>Blueprint + suggested action from VoltaraComeUp</li>
                <li>Optional JSON debug of the full pipeline output</li>
              </ul>
            </div>
          )}

          {output && (
            <>
              {/* TELEMETRY SUMMARY */}
              <div className="rounded-xl border border-emerald-500/30 bg-slate-950/80 px-4 py-3 flex flex-wrap items-center justify-between gap-3 shadow-[0_0_34px_rgba(16,185,129,0.25)]">
                <div className="space-y-1 text-xs">
                  <p className="text-slate-400 uppercase tracking-[0.18em]">
                    Signal Telemetry
                  </p>
                  <p className="text-[11px] text-slate-300">
                    {output.scan.words} words · {output.scan.lines} line(s) ·{" "}
                    {output.scan.length} chars
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 text-[11px]">
                  <span className="px-2 py-1 rounded-full bg-slate-900 border border-slate-600 text-slate-200">
                    Tone:{" "}
                    <span className="text-emerald-300">
                      {output.mined.emotionalTone}
                    </span>
                  </span>
                  <span className="px-2 py-1 rounded-full bg-slate-900 border border-slate-600 text-slate-200">
                    Complexity:{" "}
                    <span className="text-cyan-300">
                      {output.mined.complexityScore}/100
                    </span>
                  </span>
                </div>
              </div>

              {/* STAGE CARDS */}
              <div className="space-y-3">
                {/* Stage 1 */}
                <div className="rounded-lg border border-slate-700/80 bg-slate-950/90 px-4 py-3">
                  <p className="text-[10px] font-semibold text-emerald-300 uppercase tracking-[0.22em] mb-1">
                    Stage 1 · VoltaraSee (Scan)
                  </p>
                  <p className="text-xs text-slate-400">
                    Input stream normalized and tokenised. Baseline stats
                    computed for downstream mining.
                  </p>
                  <p className="mt-2 font-mono text-[11px] text-slate-300">
                    {output.scan.words} words · {output.scan.lines} line(s) ·{" "}
                    {output.scan.length} chars
                  </p>
                </div>

                {/* Stage 2 */}
                <div className="rounded-lg border border-slate-700/80 bg-slate-950/90 px-4 py-3">
                  <p className="text-[10px] font-semibold text-cyan-300 uppercase tracking-[0.22em] mb-1">
                    Stage 2 · VoltaraMine (Signal)
                  </p>
                  <p className="text-sm text-slate-200">
                    {output.mined.insight}
                  </p>
                  <p className="mt-2 text-[11px] text-slate-400">
                    Emotional tone:&nbsp;
                    <span className="text-emerald-300">
                      {output.mined.emotionalTone}
                    </span>{" "}
                    · Complexity:&nbsp;
                    <span className="text-cyan-300">
                      {output.mined.complexityScore}/100
                    </span>
                  </p>
                </div>

                {/* Stage 3 */}
                <div className="rounded-lg border border-slate-700/80 bg-slate-950/90 px-4 py-3">
                  <p className="text-[10px] font-semibold text-fuchsia-300 uppercase tracking-[0.22em] mb-1">
                    Stage 3 · VoltaraComeUp (Blueprint)
                  </p>
                  <p className="text-sm font-semibold text-slate-100">
                    {output.blueprint.title}
                  </p>
                  <p className="text-sm text-slate-200 mt-1">
                    {output.blueprint.summary}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-2">
                    Suggested action:&nbsp;
                    <span className="text-emerald-300">
                      {output.blueprint.suggestedAction}
                    </span>
                  </p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {output.blueprint.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-full bg-slate-900 text-[10px] uppercase tracking-[0.18em] text-slate-300 border border-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Mint Oracle Vision Button */}
                  <div className="mt-3 flex flex-col gap-2">
                    <button
                      onClick={handleMint}
                      disabled={isMinting}
                      className="inline-flex items-center justify-center px-3 py-1.5 rounded-md bg-emerald-500 text-slate-950 text-xs font-semibold shadow shadow-emerald-500/40 hover:bg-emerald-400 disabled:opacity-60 disabled:cursor-not-allowed transition"
                    >
                      {isMinting
                        ? "Minting Oracle Vision..."
                        : "Mint Oracle Vision NFT"}
                    </button>

                    {mintTxHash && (
                      <p className="text-[11px] text-emerald-300">
                        Minted! Tx hash:{" "}
                        <span className="font-mono break-all">
                          {mintTxHash}
                        </span>
                      </p>
                    )}

                    {mintError && (
                      <p className="text-[11px] text-red-400">
                        Error: {mintError}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* JSON DEBUG TOGGLE */}
              <div className="mt-4">
                <button
                  onClick={() => setShowJson((v) => !v)}
                  className="text-[11px] uppercase tracking-[0.2em] text-slate-400 hover:text-emerald-300 flex items-center gap-2"
                >
                  <span>{showJson ? "Hide" : "Show"} JSON Output</span>
                  <span className="text-emerald-400">
                    {showJson ? "▲" : "▼"}
                  </span>
                </button>

                {showJson && (
                  <pre className="mt-2 max-h-56 overflow-auto rounded-lg bg-slate-950/95 border border-slate-700/80 text-[11px] leading-relaxed text-emerald-200 p-3 font-mono">
                    {JSON.stringify(output, null, 2)}
                  </pre>
                )}
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
