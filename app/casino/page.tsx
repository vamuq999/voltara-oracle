"use client";

import { useState } from "react";

type Result = "win" | "lose" | null;

export default function CasinoPage() {
  const [flipAmount, setFlipAmount] = useState(10);
  const [flipResult, setFlipResult] = useState<Result>(null);

  const [pulseAmount, setPulseAmount] = useState(5);
  const [pulseResult, setPulseResult] = useState<Result>(null);

  const [message, setMessage] = useState<string | null>(null);

  const handleCoinFlip = () => {
    setMessage(null);
    const win = Math.random() < 0.5;
    setFlipResult(win ? "win" : "lose");
    setMessage(
      win
        ? `You doubled your ${flipAmount} VLTRX!`
        : `You lost ${flipAmount} VLTRX in the void.`
    );
  };

  const handlePulseBet = () => {
    setMessage(null);
    const win = Math.random() < 0.2; // 20% win chance, x5 payout (conceptually)
    setPulseResult(win ? "win" : "lose");
    setMessage(
      win
        ? `Pulse surge! Your ${pulseAmount} VLTRX would 5x.`
        : `Pulse collapse. ${pulseAmount} VLTRX burnt in the storm.`
    );
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-6 py-20 relative overflow-hidden">
      {/* Background halo */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.15),transparent_55%),radial-gradient(circle_at_bottom,_rgba(15,23,42,1),rgba(15,23,42,1))]" />

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold tracking-[0.25em] uppercase">
            VOLTARA CASINO
          </h1>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            Prototype house-edge games for VLTRX. Front-end only for now —
            on-chain contracts and real tokens will plug in later.
          </p>
        </div>

        {/* Status message */}
        {message && (
          <div className="mb-6 text-center text-sm text-cyan-200">
            {message}
          </div>
        )}

        {/* Games grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* COIN FLIP */}
          <section className="relative group rounded-2xl border border-slate-800/70 bg-slate-900/70 shadow-xl backdrop-blur-sm overflow-hidden">
            {/* glow */}
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-500">
              <div className="absolute -inset-24 mx-auto my-auto blur-3xl bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.45),transparent_60%)] group-hover:animate-[pulse_3s_ease-in-out_infinite]" />
            </div>

            <div className="relative p-6 space-y-4">
              <div>
                <h2 className="text-lg font-semibold">Coin Flip // Double or Nothing</h2>
                <p className="text-sm text-slate-400">
                  50/50 odds. Heads you double, tails you lose. When wired to
                  contracts, VLTRX moves in and out automatically.
                </p>
              </div>

              {/* Amount input */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.18em] text-slate-400">
                  Wager (VLTRX)
                </label>
                <input
                  type="number"
                  min={1}
                  className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-cyan-400/60 focus:border-cyan-300"
                  value={flipAmount}
                  onChange={(e) =>
                    setFlipAmount(Math.max(1, Number(e.target.value) || 1))
                  }
                />
              </div>

              {/* Action button */}
              <button
                onClick={handleCoinFlip}
                className="w-full py-2.5 rounded-lg text-sm font-semibold bg-cyan-500/20 border border-cyan-400/60 text-cyan-200 hover:bg-cyan-500/30 hover:shadow-[0_0_25px_rgba(34,211,238,0.55)] transition-all"
              >
                Flip Coin
              </button>

              {/* Result display */}
              <div className="text-sm text-center min-h-[1.5rem]">
                {flipResult === "win" && (
                  <span className="text-emerald-300">Result: WIN</span>
                )}
                {flipResult === "lose" && (
                  <span className="text-rose-300">Result: LOSS</span>
                )}
                {flipResult === null && (
                  <span className="text-slate-500">Awaiting your first flip.</span>
                )}
              </div>
            </div>
          </section>

          {/* PULSE BET */}
          <section className="relative group rounded-2xl border border-slate-800/70 bg-slate-900/70 shadow-xl backdrop-blur-sm overflow-hidden">
            {/* glow */}
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-500">
              <div className="absolute -inset-24 mx-auto my-auto blur-3xl bg-[radial-gradient(circle_at_center,rgba(244,114,182,0.45),transparent_60%)] group-hover:animate-[pulse_3s_ease-in-out_infinite]" />
            </div>

            <div className="relative p-6 space-y-4">
              <div>
                <h2 className="text-lg font-semibold">Pulse Bet // x5 Surge</h2>
                <p className="text-sm text-slate-400">
                  20% win chance. If it hits, the payout is 5x. A future smart
                  contract can lock the odds and route fees to the Treasury.
                </p>
              </div>

              {/* Amount input */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.18em] text-slate-400">
                  Wager (VLTRX)
                </label>
                <input
                  type="number"
                  min={1}
                  className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-pink-400/60 focus:border-pink-300"
                  value={pulseAmount}
                  onChange={(e) =>
                    setPulseAmount(Math.max(1, Number(e.target.value) || 1))
                  }
                />
              </div>

              {/* Action button */}
              <button
                onClick={handlePulseBet}
                className="w-full py-2.5 rounded-lg text-sm font-semibold bg-pink-500/20 border border-pink-400/60 text-pink-200 hover:bg-pink-500/30 hover:shadow-[0_0_25px_rgba(244,114,182,0.55)] transition-all"
              >
                Fire Pulse Bet
              </button>

              {/* Result display */}
              <div className="text-sm text-center min-h-[1.5rem]">
                {pulseResult === "win" && (
                  <span className="text-emerald-300">Result: WIN (x5)</span>
                )}
                {pulseResult === "lose" && (
                  <span className="text-rose-300">Result: LOSS</span>
                )}
                {pulseResult === null && (
                  <span className="text-slate-500">
                    Pulse reactor is idle. Awaiting wager.
                  </span>
                )}
              </div>
            </div>
          </section>
        </div>

        {/* Info footer */}
        <div className="mt-10 text-xs text-slate-500 max-w-3xl mx-auto text-center">
          This page is a front-end prototype only. Once the Voltara Casino
          contracts are deployed, each game will route stakes and payouts in
          VLTRX, with a configurable house edge that feeds the Oracle Treasury
          and Node Army reward streams.
        </div>
      </div>
    </main>
  );
}
