"use client";

import Link from "next/link";
import { ConnectWalletButton } from "./components/ConnectWalletButton";

const CARD_BASE =
  "group block rounded-2xl px-6 py-5 border bg-slate-900/60 transition-all duration-200 cursor-pointer relative overflow-hidden";
const CARD_GLOW_ORACLE =
  "hover:border-cyan-300 border-cyan-400/30 shadow-[0_0_25px_rgba(34,211,238,0.25)] hover:shadow-[0_0_45px_rgba(34,211,238,0.6)] hover:bg-slate-900/95 hover:-translate-y-0.5 hover:ring-2 hover:ring-cyan-300/60";
const CARD_GLOW_NODE =
  "hover:border-emerald-300 border-slate-700/70 hover:shadow-[0_0_40px_rgba(16,185,129,0.6)] hover:bg-slate-900/95 hover:-translate-y-0.5 hover:ring-2 hover:ring-emerald-300/60";
const CARD_GLOW_EXCHANGE =
  "hover:border-indigo-300 border-slate-700/70 hover:shadow-[0_0_40px_rgba(129,140,248,0.7)] hover:bg-slate-900/95 hover:-translate-y-0.5 hover:ring-2 hover:ring-indigo-300/60";

export default function VoltaraHubPage() {
  return (
    <main className="relative min-h-screen bg-slate-950 text-slate-100 pt-20 pb-24 px-6 overflow-hidden">
      {/* GRID BACKDROP */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.16]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at top, rgba(45,212,191,0.2), transparent 55%), radial-gradient(circle at bottom, rgba(59,130,246,0.18), transparent 55%)",
          }}
        />
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(148,163,184,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.08) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* HEADER */}
      <div className="relative max-w-5xl mx-auto mb-10 flex items-center justify-between gap-4">
        <div>
          <p className="text-[11px] tracking-[0.22em] text-emerald-300 uppercase mb-2">
            Voltara Hub · V3
          </p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-[0.16em] uppercase">
            A Unified Interface for the Voltara Ecosystem
          </h1>
          <p className="mt-3 text-sm text-slate-400 max-w-xl">
            Only live, working systems are shown here. No dead links. No ghost
            features. Just signal.
          </p>
        </div>
        <div className="flex flex-col items-end gap-3">
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-emerald-500/10 text-xs text-emerald-300 border border-emerald-400/40 shadow-[0_0_18px_rgba(16,185,129,0.35)]">
            <span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
            Live Systems Online
          </span>
          <ConnectWalletButton />
        </div>
      </div>

      {/* FEATURE GRID */}
      <section className="relative max-w-5xl mx-auto grid gap-6 md:grid-cols-1">
        {/* ORACLE CARD */}
        <Link
          href="/oracle"
          aria-label="Go to Voltara Oracle"
          className={`${CARD_BASE} ${CARD_GLOW_ORACLE}`}
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity pointer-events-none bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.5),_transparent_60%)]" />
          <div className="relative flex items-start justify-between gap-4">
            <div>
              <p className="text-[11px] tracking-[0.22em] text-cyan-300 uppercase mb-1">
                Live · Oracle
              </p>
              <h2 className="text-xl font-semibold">Oracle</h2>
              <p className="mt-2 text-sm text-slate-300">
                Access the Voltara Oracle experience and V3 Dream Compiler. Run
                VoltaraSee → VoltaraMine → VoltaraComeUp → View, with optional
                Oracle Vision NFT minting when live.
              </p>
              <div className="mt-3 inline-flex items-center gap-1 text-sm text-cyan-300 group-hover:gap-2 transition-all">
                <span>Go to Oracle</span>
                <span aria-hidden>↗</span>
              </div>
            </div>
            <div className="hidden md:flex flex-col items-end gap-2">
              <span className="px-2 py-1 text-[10px] rounded-full bg-emerald-500/10 border border-emerald-400/40 text-emerald-300 tracking-[0.18em] uppercase">
                Active System
              </span>
              <span className="px-2 py-1 text-[10px] rounded-full bg-slate-900/80 border border-slate-600 text-slate-300 font-mono">
                /oracle
              </span>
            </div>
          </div>
        </Link>

        {/* NODE ARMY CARD */}
        <Link
          href="/nodearmy"
          aria-label="Open Node Army console"
          className={`${CARD_BASE} ${CARD_GLOW_NODE}`}
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity pointer-events-none bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.5),_transparent_60%)]" />
          <div className="relative flex items-start justify-between gap-4">
            <div>
              <p className="text-[11px] tracking-[0.22em] text-emerald-300 uppercase mb-1">
                Coming Soon · Node Army
              </p>
              <h2 className="text-xl font-semibold">Node Army</h2>
              <p className="mt-2 text-sm text-slate-300">
                Staking, ranks, and AI task nodes. Every mission routes rewards
                back into the Oracle Treasury and founder stream via the
                NodeArmyMonolith contract.
              </p>
              <div className="mt-3 inline-flex items-center gap-1 text-sm text-emerald-300 group-hover:gap-2 transition-all">
                <span>Open Node Army Console</span>
                <span aria-hidden>↗</span>
              </div>
            </div>
            <div className="hidden md:flex flex-col items-end gap-2">
              <span className="px-2 py-1 text-[10px] rounded-full bg-slate-900/80 border border-slate-600 text-slate-300 font-mono">
                /nodearmy
              </span>
              <span className="px-2 py-1 text-[10px] rounded-full bg-yellow-500/10 border border-yellow-400/60 text-yellow-200 tracking-[0.18em] uppercase">
                In Preparation
              </span>
            </div>
          </div>
        </Link>

        {/* EXCHANGE CARD */}
        <Link
          href="/exchange"
          aria-label="Open Exchange layout"
          className={`${CARD_BASE} ${CARD_GLOW_EXCHANGE}`}
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity pointer-events-none bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.6),_transparent_60%)]" />
          <div className="relative flex items-start justify-between gap-4">
            <div>
              <p className="text-[11px] tracking-[0.22em] text-indigo-300 uppercase mb-1">
                In Design · Exchange
              </p>
              <h2 className="text-xl font-semibold">Exchange</h2>
              <p className="mt-2 text-sm text-slate-300">
                Planned swap interface for VLTRX and ecosystem tokens, with fee
                routing back into the Oracle Treasury, plus LP tools and basic
                analytics.
              </p>
              <div className="mt-3 inline-flex items-center gap-1 text-sm text-indigo-300 group-hover:gap-2 transition-all">
                <span>Open Exchange Layout</span>
                <span aria-hidden>↗</span>
              </div>
            </div>
            <div className="hidden md:flex flex-col items-end gap-2">
              <span className="px-2 py-1 text-[10px] rounded-full bg-slate-900/80 border border-slate-600 text-slate-300 font-mono">
                /exchange
              </span>
              <span className="px-2 py-1 text-[10px] rounded-full bg-sky-500/10 border border-sky-400/60 text-sky-200 tracking-[0.18em] uppercase">
                UX Prototype
              </span>
            </div>
          </div>
        </Link>
      </section>
    </main>
  );
}
