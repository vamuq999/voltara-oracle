// app/page.tsx
"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="vx-shell">
      <div className="relative mx-auto flex max-w-5xl flex-col gap-8 px-4 py-10 lg:py-16 z-10">
        {/* Heading */}
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
            Voltara Labs // VX-CORE
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Voltara Control Deck
          </h1>
          <p className="max-w-2xl text-sm text-slate-400">
            Choose a module to open its command deck. Each route is a separate
            dApp surface wired into the same Voltara stack.
          </p>
        </header>

        {/* Grid of entrypoints */}
        <section className="grid gap-4 sm:grid-cols-2">
          <AppCard
            href="/mint"
            title="VoltaraMint"
            tag="$VLTRX Minter"
            desc="Mint VLTRX against ETH and track basic token stats."
          />
          <AppCard
            href="/wallet"
            title="Vault & Wallet"
            tag="Portfolio (stub)"
            desc="Simple wallet + balances view for your Voltara stack."
          />
          <AppCard
            href="/nodearmy"
            title="Node Army"
            tag="AI Nodes"
            desc="Command your AI node roster, boosts, and yields."
          />
          <AppCard
            href="/oracle"
            title="Oracle Vision"
            tag="Wisdom NFTs"
            desc="Question → answer → NFT pipeline for the Voltara Oracle."
          />
          <AppCard
            href="/truthlens"
            title="TruthLens AI"
            tag="Signal Scanner"
            desc="Voice / text analysis surface (UI stub for now)."
          />
        </section>

        {/* Footnote */}
        <section className="rounded-2xl border border-dashed border-slate-700 bg-slate-950/60 px-5 py-4 text-xs text-slate-400">
          <p className="font-medium text-slate-200">
            Dev notes
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-4">
            <li>
              Each card above maps to a route under <code>app/</code> (e.g.{" "}
              <code>app/nodearmy/page.tsx</code>).
            </li>
            <li>
              When a module is ready for mainnet, wire its buttons into your
              smart contracts with wagmi.
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}

function AppCard(props: {
  href: string;
  title: string;
  tag: string;
  desc: string;
}) {
  return (
    <Link
      href={props.href}
      className="group rounded-2xl border border-white/5 bg-slate-900/70 p-4 shadow-xl shadow-slate-950/70 backdrop-blur-xl transition hover:border-cyan-400/70 hover:shadow-cyan-500/20"
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
        {props.tag}
      </p>
      <h2 className="mt-2 text-lg font-semibold tracking-tight text-slate-50">
        {props.title}
      </h2>
      <p className="mt-1 text-xs text-slate-400">{props.desc}</p>
      <p className="mt-3 text-[11px] font-medium text-cyan-300 opacity-0 transition group-hover:opacity-100">
        Enter module →
      </p>
    </Link>
  );
}
