"use client";

import Link from "next/link";

const PILL =
  "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs tracking-[0.18em] uppercase border bg-slate-900/80";

export default function NodeArmyPage() {
  return (
    <main className="relative min-h-screen bg-slate-950 text-slate-100 pt-20 pb-24 px-6 overflow-hidden">
      {/* BACKDROP */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.18]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at top, rgba(16,185,129,0.22), transparent 60%)",
          }}
        />
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(15,118,110,0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,118,110,0.18) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* HEADER */}
        <header className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-[11px] tracking-[0.22em] text-emerald-300 uppercase mb-1">
              Node Army · Monolith v1
            </p>
            <h1 className="text-3xl md:text-4xl font-bold tracking-[0.16em] uppercase">
              Node Army Command
            </h1>
            <p className="mt-3 text-sm text-slate-300 max-w-xl">
              Staking, ranks, AI tasks, and routed rewards. This console is a
              preview of the systems that will plug into the NodeArmyMonolith
              contract.
            </p>
          </div>
          <Link
            href="/"
            className="text-xs text-slate-400 hover:text-emerald-300 inline-flex items-center gap-1 transition-colors cursor-pointer"
            aria-label="Back to hub"
          >
            <span>← Back to Hub</span>
          </Link>
        </header>

        {/* STATUS STRIP */}
        <div className="mb-6 flex flex-wrap items-center gap-3 text-xs">
          <span
            className={`${PILL} border-yellow-400/60 text-yellow-200 cursor-default`}
          >
            <span className="h-2 w-2 rounded-full bg-yellow-300 animate-pulse" />
            Coming Soon · Smart Contract Live Next
          </span>
          <span
            className={`${PILL} border-slate-600 text-slate-300 cursor-default font-mono`}
          >
            NODE_TYPES: SCOUT · OPERATOR · OVERSEER
          </span>
        </div>

        {/* GRID */}
        <section className="grid gap-6 md:grid-cols-2">
          {/* Left: Node Types */}
          <div className="rounded-2xl border border-emerald-500/40 bg-slate-950/80 px-5 py-4 shadow-[0_0_26px_rgba(16,185,129,0.35)]">
            <p className="text-[11px] tracking-[0.22em] text-emerald-300 uppercase mb-2">
              Node Archetypes
            </p>
            <ul className="space-y-3 text-sm">
              <li className="group">
                <p className="font-semibold text-slate-100 flex items-center gap-2">
                  Scout Nodes
                  <span className="px-2 py-0.5 text-[10px] rounded-full border border-emerald-400/60 bg-emerald-500/10 text-emerald-200 tracking-[0.2em] uppercase">
                    ε Boost
                  </span>
                </p>
                <p className="text-slate-300 text-xs mt-1">
                  Discovery and scanning tasks. Higher{" "}
                  <span className="text-emerald-300">epsilon</span> boost for
                  finding opportunities, flows, and threats.
                </p>
              </li>
              <li className="group">
                <p className="font-semibold text-slate-100 mt-2 flex items-center gap-2">
                  Operator Nodes
                  <span className="px-2 py-0.5 text-[10px] rounded-full border border-emerald-400/60 bg-emerald-500/10 text-emerald-200 tracking-[0.2em] uppercase">
                    λ Boost
                  </span>
                </p>
                <p className="text-slate-300 text-xs mt-1">
                  Throughput and execution. Strong{" "}
                  <span className="text-emerald-300">lambda</span> boost on
                  successful task completion.
                </p>
              </li>
              <li className="group">
                <p className="font-semibold text-slate-100 mt-2 flex items-center gap-2">
                  Overseer Nodes
                  <span className="px-2 py-0.5 text-[10px] rounded-full border border-emerald-400/60 bg-emerald-500/10 text-emerald-200 tracking-[0.2em] uppercase">
                    ζ Boost
                  </span>
                </p>
                <p className="text-slate-300 text-xs mt-1">
                  Governance and oversight. Boosts{" "}
                  <span className="text-emerald-300">zeta</span> when scoring,
                  reviewing, and curating tasks.
                </p>
              </li>
            </ul>
          </div>

          {/* Right: Planned Dashboard */}
          <div className="rounded-2xl border border-slate-700/80 bg-slate-950/80 px-5 py-4">
            <p className="text-[11px] tracking-[0.22em] text-slate-400 uppercase mb-2">
              Planned Dashboard Layout
            </p>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-center justify-between">
                <span>Active Nodes</span>
                <span className="px-2 py-1 rounded-full bg-slate-900 border border-slate-600 font-mono">
                  0 / 0 (UI only)
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Treasury Routing</span>
                <span className="px-2 py-1 rounded-full bg-slate-900 border border-slate-600 font-mono">
                  Founder + Oracle Treasury
                </span>
              </div>
              <div className="pt-2 border-top border-slate-800 mt-3">
                <p className="text-slate-400 mb-2">
                  When the contract is deployed, this panel will show:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Node registrations and types</li>
                  <li>Merit earned per node and in total</li>
                  <li>Boost multipliers (ε / λ / ζ)</li>
                  <li>Fee flow to treasury / founder streams</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="mt-8 rounded-xl border border-slate-700/80 bg-slate-950/80 px-5 py-4 text-xs text-slate-300">
          <p className="mb-2 text-slate-200 font-semibold">
            What you can do now:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Use the Oracle to generate blueprints for future Node tasks.</li>
            <li>
              Keep notes on potential Scout / Operator / Overseer missions to
              onboard once staking is live.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
