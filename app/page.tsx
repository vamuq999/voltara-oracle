"use client";

import Link from "next/link";

export default function VoltaraHubPage() {
  return (
    <main className="relative text-slate-100 pt-20 pb-32 px-6 max-w-7xl mx-auto">

      {/* HERO STATUS CHIP */}
      <div className="flex justify-center mb-6">
        <span className="px-4 py-1 rounded-full bg-slate-900/70 text-cyan-300 text-xs border border-cyan-500/30">
          ● Live Systems Online
        </span>
      </div>

      {/* HERO TITLE */}
      <h1 className="text-4xl font-bold">
  VOLT(<span className="text-[#0ff] drop-shadow-[0_0_6px_#0ff]">A</span>)RA
</h1>

      <p className="text-center text-slate-300 mt-4 max-w-2xl mx-auto">
        A unified interface for the Voltara ecosystem — only live, working systems are
        shown here. No dead links. No ghost features. Just signal.
      </p>

      {/* HERO AAA WATERMARK */}
      <div className="pointer-events-none select-none absolute inset-0 flex justify-center opacity-[0.09]">
        <div className="text-[22rem] font-black tracking-[2rem] text-slate-300/10">
          AAA
        </div>
      </div>

      {/* MAIN GRID */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">

        {/* ORACLE VISION TILE */}
        <div className="rounded-2xl p-6 bg-slate-900/40 border border-slate-700/40 shadow-xl backdrop-blur-lg relative">
          <h2 className="text-xl font-bold mb-3">🧙 Oracle Vision // VX</h2>
          <p className="text-slate-300 text-sm leading-relaxed mb-4">
            Mint on-chain wisdom NFTs directly from the Oracle.
            One question. One answer. Permanent ledger.
          </p>

          <div className="flex items-center justify-between mb-4">
            <span className="text-xs px-3 py-1 rounded-full bg-emerald-900/40 text-emerald-300 border border-emerald-700/40">
              ● Status: Live
            </span>

            <span className="text-xs text-slate-400">Contract: Vision v2</span>
          </div>

          <Link href="/oracle">
            <button className="w-full rounded-xl py-3 bg-cyan-500 hover:bg-cyan-400 transition text-slate-900 font-semibold">
              Mint Vision →
            </button>
          </Link>
        </div>

        {/* NODE ARMY TILE */}
        <div className="rounded-2xl p-6 bg-slate-900/40 border border-slate-700/40 shadow-xl backdrop-blur-lg relative">
          <h2 className="text-xl font-bold mb-3">🛡️ Node Army</h2>
          <p className="text-slate-300 text-sm leading-relaxed mb-4">
            View your node roles, operator tiers, and the evolving registry
            of Voltara's autonomous agents.
          </p>

          <span className="text-xs px-3 py-1 rounded-full bg-emerald-900/40 text-emerald-300 border border-emerald-700/40">
            ● Status: Live UI
          </span>

          <p className="mt-3 text-xs text-slate-400">
            Tiers: Scout / Operator / Overseer
          </p>

          <Link href="/node-army">
            <button className="w-full mt-6 rounded-xl py-3 bg-slate-800 hover:bg-slate-700 transition text-slate-200 font-semibold">
              Enter Node Operations →
            </button>
          </Link>
        </div>

        {/* EMPTY TILE (Minter removed — clean UI) */}
        <div className="rounded-2xl p-6 bg-slate-900/10 border border-slate-700/10 opacity-40 text-center flex items-center justify-center">
          <span className="text-slate-500 text-sm">Module Removed</span>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-20 border-t border-slate-800/60 pt-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-slate-400">

          <div className="flex flex-wrap gap-3">
            <span className="rounded-full bg-slate-900/80 px-3 py-1">
              Hub Version: <span className="text-slate-200">v0.1 — Live Systems Only</span>
            </span>

            <span className="rounded-full bg-slate-900/80 px-3 py-1">
              Oracle Contract:{" "}
              <span className="font-mono text-[10px] text-cyan-300">
                VoltaraVisionNFTv2
              </span>
            </span>
          </div>

          <span className="text-[11px] text-slate-500">
            VoltaAra System • Voltara Labs
          </span>
        </div>
      </footer>
    </main>
  );
}
