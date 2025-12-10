"use client";

import Link from "next/link";

const PILL =
  "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs tracking-[0.18em] uppercase border bg-slate-900/80";

export default function ExchangePage() {
  return (
    <main className="relative min-h-screen bg-slate-950 text-slate-100 pt-20 pb-24 px-6 overflow-hidden">
      {/* BACKDROP */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.18]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at top, rgba(79,70,229,0.25), transparent 60%)",
          }}
        />
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(129,140,248,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(129,140,248,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* HEADER */}
        <header className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-[11px] tracking-[0.22em] text-indigo-300 uppercase mb-1">
              Voltara Exchange · UX Prototype
            </p>
            <h1 className="text-3xl md:text-4xl font-bold tracking-[0.16em] uppercase">
              Token Exchange Layout
            </h1>
            <p className="mt-3 text-sm text-slate-300 max-w-xl">
              A design pass for the future swap interface. No contracts are
              wired yet — this is pure UX, ready for the day VLTRX and Voltara
              pools go live.
            </p>
          </div>
          <Link
            href="/"
            className="text-xs text-slate-400 hover:text-indigo-300 inline-flex items-center gap-1 transition-colors cursor-pointer"
            aria-label="Back to hub"
          >
            <span>← Back to Hub</span>
          </Link>
        </header>

        {/* STATUS STRIP */}
        <div className="mb-6 flex flex-wrap items-center gap-3 text-xs">
          <span
            className={`${PILL} border-sky-400/70 text-sky-200 cursor-default`}
          >
            <span className="h-2 w-2 rounded-full bg-sky-300 animate-pulse" />
            In Design · No On-chain Calls
          </span>
          <span
            className={`${PILL} border-slate-600 text-slate-300 cursor-default font-mono`}
          >
            Pair: VLTRX / ETH (planned)
          </span>
        </div>

        {/* GRID */}
        <section className="grid gap-6 md:grid-cols-2">
          {/* Swap Panel */}
          <div className="rounded-2xl border border-indigo-400/60 bg-slate-950/80 px-5 py-4 shadow-[0_0_26px_rgba(129,140,248,0.4)]">
            <p className="text-[11px] tracking-[0.22em] text-indigo-300 uppercase mb-3">
              Swap Panel (Prototype)
            </p>

            <div className="space-y-4 text-sm">
              <div>
                <p className="text-xs text-slate-400 mb-1">From</p>
                <button
                  type="button"
                  className="w-full flex items-center justify-between rounded-xl bg-slate-900/90 border border-slate-700/80 px-3 py-2 text-left hover:border-indigo-400 hover:ring-2 hover:ring-indigo-400/60 hover:shadow-[0_0_22px_rgba(129,140,248,0.5)] transition-all cursor-pointer"
                >
                  <div>
                    <p className="text-slate-200 text-xs">Token</p>
                    <p className="text-xs text-slate-400">
                      ETH · VLTRX · VOLT
                    </p>
                  </div>
                  <span className="px-2 py-1 rounded-lg bg-slate-800 text-xs text-slate-200 border border-slate-600">
                    Select
                  </span>
                </button>
              </div>

              <div>
                <p className="text-xs text-slate-400 mb-1">To</p>
                <button
                  type="button"
                  className="w-full flex items-center justify-between rounded-xl bg-slate-900/90 border border-slate-700/80 px-3 py-2 text-left hover:border-indigo-400 hover:ring-2 hover:ring-indigo-400/60 hover:shadow-[0_0_22px_rgba(129,140,248,0.5)] transition-all cursor-pointer"
                >
                  <div>
                    <p className="text-slate-200 text-xs">Token</p>
                    <p className="text-xs text-slate-400">
                      VLTRX (primary) · Voltara
                    </p>
                  </div>
                  <span className="px-2 py-1 rounded-lg bg-slate-800 text-xs text-slate-200 border border-slate-600">
                    Select
                  </span>
                </button>
              </div>

              <div>
                <p className="text-xs text-slate-400 mb-1">Amount</p>
                <input
                  disabled
                  placeholder="0.00 (UI only)"
                  className="w-full rounded-xl bg-slate-900/90 border border-slate-700/80 px-3 py-2 text-xs text-slate-500 cursor-not-allowed"
                />
              </div>

              <button
                disabled
                className="w-full mt-1 rounded-xl bg-indigo-500 text-xs font-semibold text-slate-950 py-2 opacity-60 cursor-not-allowed"
              >
                Swap (disabled · design only)
              </button>
            </div>
          </div>

          {/* Right: Planned Metrics */}
          <div className="rounded-2xl border border-slate-700/80 bg-slate-950/80 px-5 py-4">
            <p className="text-[11px] tracking-[0.22em] text-slate-400 uppercase mb-3">
              Planned Metrics & Routing
            </p>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-center justify-between">
                <span>Oracle Treasury Fee Route</span>
                <span className="px-2 py-1 rounded-full bg-slate-900 border border-slate-600 font-mono">
                  % of swap → treasury
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Founder Stream</span>
                <span className="px-2 py-1 rounded-full bg-slate-900 border border-slate-600 font-mono">
                  mirrored cut
                </span>
              </div>
              <div className="pt-2 border-t border-slate-800 mt-3">
                <p className="text-slate-400 mb-2">
                  Once the pools are live, this panel will surface:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Current VLTRX / ETH price and 24h change</li>
                  <li>Estimated impact per swap (price movement)</li>
                  <li>Treasury fee earned from recent swaps</li>
                  <li>LP position hints and strategy hooks</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER NOTE */}
        <div className="mt-8 rounded-xl border border-slate-800 bg-slate-950/80 px-5 py-4 text-xs text-slate-300">
          <p>
            This page is intentionally frontend-only. No contracts are touched
            until the VLTRX and Voltara liquidity pools are funded. Treat it as
            the blueprint for the final Exchange experience.
          </p>
        </div>
      </div>
    </main>
  );
}
