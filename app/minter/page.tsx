// app/minter/page.tsx

export default function MinterPage() {
  return (
    <div className="min-h-[80vh] bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-xl space-y-6 rounded-3xl border border-slate-800/70 bg-slate-950/80 p-8 shadow-[0_0_40px_rgba(15,23,42,0.9)]">
        {/* Pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-[11px] font-medium text-slate-300">
          <span className="h-2 w-2 rounded-full bg-slate-500 shadow-[0_0_8px_rgba(148,163,184,0.9)]" />
          Voltara Minter • Offline
        </div>

        {/* Heading */}
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold text-slate-50 mb-2">
            VLTRX is currently in fixed-supply trading phase
          </h1>
          <p className="text-sm md:text-[15px] text-slate-300/90">
            The on-chain minter is intentionally disabled for this phase. A
            fixed allocation of VLTRX (e.g. 30M) will be used for liquidity
            pools, incentives, and direct trading only. No new tokens are being
            minted.
          </p>
        </div>

        {/* Info Card */}
        <div className="space-y-3 rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4 text-sm text-slate-300/90">
          <p>
            This keeps the supply simple and predictable while you focus on
            launch, trading, and building the ecosystem.
          </p>
          <ul className="list-disc list-inside text-[13px] text-slate-400 space-y-1">
            <li>Fixed supply (e.g. 30M VLTRX) — no live minting.</li>
            <li>Tokens can be allocated to LPs, partners, and community.</li>
            <li>A future v2 minter can always be deployed later if needed.</li>
          </ul>
        </div>

        <p className="text-[11px] text-slate-500">
          When you&apos;re ready, this page can be upgraded to a live minting
          interface. For now, VLTRX is a capped asset — trade and build.
        </p>
      </div>
    </div>
  );
}
