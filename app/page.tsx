"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function VoltaraHubPage() {
  // ---------------------------
  // Boot Animation State
  // ---------------------------
  const [bootDone, setBootDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setBootDone(true), 1800); // 1.8s boot
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* ========================================================= */}
      {/* BOOT OVERLAY */}
      {/* ========================================================= */}
      {!bootDone && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950">
          {/* Radial glow background */}
          <div
            className="pointer-events-none absolute inset-0 
            bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),transparent_55%),radial-gradient(circle_at_bottom,_rgba(15,23,42,1),rgba(15,23,42,1))]"
          />

          {/* Boot text + core */}
          <div className="relative flex flex-col items-center gap-4">
            <div className="text-xs font-semibold tracking-[0.3em] text-slate-400 uppercase">
              Initializing
            </div>

            <div className="text-3xl font-bold tracking-[0.35em] text-slate-100">
              VOLT
              <span className="text-[#0ff] drop-shadow-[0_0_12px_#0ff]">A</span>
              RA
            </div>

            {/* Central Lambda Core */}
            <div className="relative mt-4 h-28 w-28 flex items-center justify-center">
              <span className="relative z-10 text-lg font-semibold text-[#0ff] tracking-[0.4em] blur-[0.4px] drop-shadow-[0_0_12px_#0ff]">
                ΛI
              </span>

              <span className="lamda-core-wrapper">
                <span className="lamda-core-glow" />
                <span className="lamda-core-ring" />
              </span>
            </div>

            {/* Status text */}
            <div className="mt-4 flex items-center gap-2 text-[11px] text-slate-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              LAMDA-I core coming online…
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MAIN PAGE CONTENT */}
      {/* ========================================================= */}
      <main className="relative text-slate-100 pt-20 pb-32 px-6 max-w-4xl mx-auto">
        {/* HERO STATUS CHIP */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-emerald-500/10 text-xs text-emerald-300 border border-emerald-400/40 shadow-[0_0_18px_rgba(16,185,129,0.35)]">
            <span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
            Live Systems Online
          </span>
        </div>

        {/* HERO TITLE */}
        <h1 className="text-4xl font-bold text-center tracking-[0.18em] uppercase">
          VOLT
          <span className="text-[#0ff] drop-shadow-[0_0_10px_#0ff]">A</span>
          RA
        </h1>

        {/* HERO SUBTITLE */}
        <p className="text-center text-slate-300 mt-4 max-w-2xl mx-auto">
          A unified interface for the Voltara ecosystem — only live, working
          systems are shown here. No dead links. No ghost features. Just signal.
        </p>

        {/* ========================================================= */}
        {/* FEATURE STACK */}
        {/* ========================================================= */}
        <div className="mt-12 space-y-8">
          {/* ORACLE CARD */}
          <section>
            <div className="relative group rounded-xl p-6 bg-slate-900/40 border border-slate-800/40 shadow-xl backdrop-blur-sm overflow-hidden">
              {/* Hover Glow / Reel Highlight */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-500">
                <div className="absolute -inset-24 mx-auto my-auto blur-3xl bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.45),transparent_60%)] group-hover:animate-[voltaraPulse_3s_ease-in-out_infinite]" />
              </div>

              {/* Card Content */}
              <div className="relative">
                <h2 className="text-lg font-semibold mb-2">Oracle</h2>
                <p className="text-slate-400 mb-4">
                  Access the Voltara Oracle experience and VX wisdom NFTs.
                </p>
                <Link
                  href="/oracle"
                  className="text-cyan-400 hover:text-cyan-300 font-medium"
                >
                  Go to Oracle →
                </Link>
              </div>
            </div>
          </section>

          {/* NODE ARMY CARD */}
          <section>
            <div className="relative group rounded-xl p-6 bg-slate-900/40 border border-slate-800/40 shadow-xl backdrop-blur-sm overflow-hidden">
              {/* Hover Glow / Reel Highlight */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-500">
                <div className="absolute -inset-24 mx-auto my-auto blur-3xl bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.45),transparent_60%)] group-hover:animate-[voltaraPulse_3s_ease-in-out_infinite]" />
              </div>

              {/* Card Content */}
              <div className="relative">
                <h2 className="text-lg font-semibold mb-2">Node Army</h2>
                <p className="text-slate-400 mb-4">
                  Staking, ranks, and AI task nodes. Rewards routed to the
                  Oracle Treasury and Founder streams.
                </p>

                <div className="mt-4 flex justify-end">
                  <span className="px-4 py-1 rounded-full text-xs text-slate-400 border border-slate-700/60">
                    COMING SOON
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* EXCHANGE CARD */}
          <section>
            <div className="relative group rounded-xl p-6 bg-slate-900/40 border border-slate-800/40 shadow-xl backdrop-blur-sm overflow-hidden">
              {/* Hover Glow / Reel Highlight */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-500">
                <div className="absolute -inset-24 mx-auto my-auto blur-3xl bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.45),transparent_60%)] group-hover:animate-[voltaraPulse_3s_ease-in-out_infinite]" />
              </div>

              {/* Card Content */}
              <div className="relative">
                <h2 className="text-lg font-semibold mb-2">Exchange</h2>
                <p className="text-slate-400 mb-4">
                  Swap VLTRX and ecosystem tokens with routing that channels
                  fees back into the Oracle Treasury.
                </p>

                <div className="mt-4 flex justify-end">
                  <span className="px-4 py-1 rounded-full text-xs text-slate-400 border border-slate-700/60">
                    IN DESIGN
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* LOTTERY CARD */}
          <section>
            <div className="relative group rounded-xl p-6 bg-slate-900/40 border border-slate-800/40 shadow-xl backdrop-blur-sm overflow-hidden">
              {/* Hover Glow / Reel Highlight */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-500">
                <div className="absolute -inset-24 mx-auto my-auto blur-3xl bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.35),transparent_60%)] group-hover:animate-[voltaraPulse_3s_ease-in-out_infinite]" />
              </div>

              {/* Card Content */}
              <div className="relative">
                <h2 className="text-lg font-semibold mb-2">Lottery</h2>
                <p className="text-slate-400 mb-4">
                  Daily draw system: buy tickets in VLTRX, winner takes the pot,
                  a cut flows to the Oracle Treasury.
                </p>
                <Link
                  href="/lottery"
                  className="text-amber-300 hover:text-amber-200 font-medium"
                >
                  Enter Lottery →
                </Link>
              </div>
            </div>
          </section>
                    {/* CASINO CARD */}
          <section>
            <div className="relative group rounded-xl p-6 bg-slate-900/40 border border-slate-800/40 shadow-xl backdrop-blur-sm overflow-hidden">
              {/* Hover Glow / Reel Highlight */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-500">
                <div className="absolute -inset-24 mx-auto my-auto blur-3xl bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.4),transparent_60%)] group-hover:animate-[voltaraPulse_3s_ease-in-out_infinite]" />
              </div>

              {/* Card Content */}
              <div className="relative">
                <h2 className="text-lg font-semibold mb-2">Casino</h2>
                <p className="text-slate-400 mb-4">
                  Experimental on-chain games: 50/50 double-or-nothing and
                  high-risk pulse bets, all routed through VLTRX.
                </p>
                <a
                  href="/casino"
                  className="text-cyan-400 hover:text-cyan-300 font-medium"
                >
                  Enter Casino →
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
