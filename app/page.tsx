// app/page.tsx
import Link from "next/link";

export default function VoltaraHubPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-black text-slate-100">
      {/* Glow overlay */}
      <div className="pointer-events-none fixed inset-0 opacity-60">
        <div className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-violet-600 blur-[100px]" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-10 pt-10 md:px-8">
        {/* HERO */}
       <header className="relative mb-10 md:mb-14 volt-hero-enter">
  {/* AΛA watermark */}
  <span
    className="
      pointer-events-none
      absolute
      -top-16
      left-1/2
      -translate-x-1/2
      text-[120px]
      md:text-[210px]
      font-semibold
      tracking-[0.4em]
      text-cyan-400/5
      select-none
    "
  >
    AΛA
  </span>

  {/* Foreground hero content */}
  <div className="relative z-10">
    <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-slate-900/60 px-3 py-1 text-xs font-medium text-cyan-300/90 backdrop-blur">
    <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.9)] volt-heartbeat-dot" />
  Live Systems Online
    </p>

    <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-50 md:text-5xl">
      VOLTA<span className="text-cyan-400">Λ</span>RA HUB
    </h1>
    <p className="mt-4 max-w-2xl text-sm text-slate-300/90 md:text-base">
      A unified interface for the Voltara ecosystem — only live, working
      systems are shown here. No dead links. No ghost features. Just
      signal.
    </p>
  </div>
</header>


        {/* GRID */}
        <section className="grid flex-1 gap-6 md:grid-cols-3">
          {/* ORACLE VISION TILE */}
        <Link
  href="/oracle"
  className="group relative flex flex-col overflow-hidden rounded-2xl border border-cyan-500/30 bg-slate-950/70 p-5 shadow-[0_0_35px_rgba(34,211,238,0.18)] transition-transform duration-150 hover:-translate-y-1 hover:border-cyan-400/70 volt-tile-oracle volt-tile-enter"
  style={{ animationDelay: "0.15s" }}
>


            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0,rgba(56,189,248,0.45),transparent_55%),radial-gradient(circle_at_90%_100%,rgba(129,140,248,0.35),transparent_55%)] opacity-70" />
            <div className="relative z-10 flex-1">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-cyan-100 md:text-xl">
                🔮 Oracle Vision // VX
              </h2>
              <p className="mt-3 text-sm text-slate-200/90">
                Mint on-chain wisdom NFTs directly from the Oracle. One
                question. One answer. Permanent ledger.
              </p>

              <div className="mt-5 flex items-center justify-between text-xs text-cyan-200/80">
                <span className="inline-flex items-center gap-1 rounded-full border border-cyan-400/40 bg-slate-900/80 px-2 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.9)]" />
                  Status: Live
                </span>
                <span>Contract: Vision v2</span>
              </div>
            </div>

            <div className="relative z-10 mt-6">
              <button className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500/90 px-4 py-2 text-sm font-semibold text-slate-950 shadow-[0_0_25px_rgba(34,211,238,0.6)] transition transform hover:-translate-y-0.5 hover:scale-[1.02] group-hover:bg-cyan-400 group-hover:shadow-[0_0_40px_rgba(34,211,238,0.9)]">
  Mint Vision
                <span className="text-xs opacity-80">→</span>
              </button>
            </div>
          </Link>

          {/* NODE ARMY TILE */}
  <Link
  href="/node-army"
  className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-950/80 p-5 shadow-[0_0_28px_rgba(15,23,42,0.9)] transition-transform duration-150 hover:-translate-y-1 hover:border-cyan-300/60 volt-tile-node volt-tile-enter"
  style={{ animationDelay: "0.28s" }}
>


            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0_0,rgba(59,130,246,0.45),transparent_50%),radial-gradient(circle_at_100%_100%,rgba(236,72,153,0.35),transparent_50%)] opacity-60" />
            <div className="relative z-10 flex-1">
              <h2 className="flex items-center gap-2 text-lg font-semibold md:text-xl">
                🛡️ Node Army
              </h2>
              <p className="mt-3 text-sm text-slate-200/90">
                View your node roles, operator tiers, and the evolving registry
                of Voltara&apos;s autonomous agents.
              </p>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-200/90">
                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/40 bg-slate-900/80 px-2 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.9)]" />
                  Status: Live UI
                </span>
                <span className="rounded-full bg-slate-900/80 px-2 py-1">
                  Tiers: Scout / Operator / Overseer
                </span>
              </div>
            </div>

            <div className="relative z-10 mt-6">
             <button className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-600/80 bg-slate-900/80 px-4 py-2 text-sm font-semibold text-slate-100 transition transform hover:-translate-y-0.5 hover:scale-[1.02] group-hover:border-cyan-400 group-hover:text-cyan-100">
  Enter Node Operations
                <span className="text-xs opacity-80">→</span>
              </button>
            </div>
          </Link>

          {/* VOLTARA MINTER TILE (COMING ONLINE) */}
     <div
  id="minter"
  className="relative flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80 p-5 opacity-90 volt-tile-minter volt-tile-enter"
  style={{ animationDelay: "0.41s" }}
>


     <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0,rgba(56,189,248,0.35),transparent_55%)] opacity-60" />
            <div className="relative z-10 flex-1">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-slate-100 md:text-xl">
                💎 Voltara Minter
              </h2>
              <p className="mt-3 text-sm text-slate-200/85">
                Premium gateway into the VLTRX economy. Fixed on-chain price,
                designed to complement the liquidity pool instead of fighting it.
              </p>

              <div className="mt-5 flex items-center justify-between text-xs">
                <span className="inline-flex items-center gap-1 rounded-full border border-amber-400/50 bg-slate-900/80 px-2 py-1 text-amber-200">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-300 shadow-[0_0_10px_rgba(252,211,77,0.9)]" />
                  Status: Coming Online
                </span>
                <span className="text-slate-300/80">Token Minter v1</span>
              </div>
            </div>

            <div className="relative z-10 mt-6">
              <button
                className="inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm font-semibold text-slate-400"
                disabled
              >
                Preparing Launch Sequence…
              </button>
              <p className="mt-2 text-[11px] text-slate-400/80">
                This module will appear as a full page once the UX and routing
                are production ready.
              </p>
            </div>
          </div>
        </section>

        {/* STATUS FOOTER */}
        <footer className="relative mt-10 border-t border-slate-800/70 pt-4 text-[11px] text-slate-400 md:text-xs">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-slate-900/80 px-3 py-1">
                Hub Version: <span className="text-slate-200">v0.1</span> — Live
                Systems Only
              </span>
              <span className="rounded-full bg-slate-900/80 px-3 py-1">
                Oracle Contract:{" "}
                <span className="font-mono text-[10px] text-cyan-300">
                  VoltaraVisionNFTv2
                </span>
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-slate-900/80 px-3 py-1">
                Treasury:{" "}
                <span className="font-mono text-[10px] text-cyan-300">
                  0xFc60...10C1
                </span>
              </span>
              <span className="rounded-full bg-slate-900/80 px-3 py-1">
                Chain: <span className="text-slate-200">Ethereum Mainnet</span>
              </span>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
