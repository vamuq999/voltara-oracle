// app/minter/page.tsx

export default function MinterPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
      <div className="max-w-xl w-full mx-4 rounded-2xl border border-slate-800/70 bg-slate-950/80 p-8 shadow-[0_0_40px_rgba(15,23,42,0.9)]">
        <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-slate-900/80 px-3 py-1 text-[11px] font-medium text-amber-300/90">
          <span className="h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.9)]" />
          Voltara Minter — Launch Sequence Preparing
        </p>

        <h1 className="text-2xl md:text-3xl font-semibold text-slate-50 mb-3">
          Voltara Minter
        </h1>

        <p className="text-sm md:text-base text-slate-300/90 mb-6">
          Premium gateway into the VLTRX economy. Fixed on-chain price, designed
          to complement the liquidity pool instead of fighting it.
        </p>

        <div className="rounded-xl border border-slate-700/70 bg-slate-900/80 px-4 py-3 text-sm text-slate-300/90">
          This module will appear as a full page once the UX and routing are
          production ready. For now, you can monitor status from the{" "}
          <span className="text-cyan-300 font-medium">VoltaAra Hub</span>.
        </div>
      </div>
    </div>
  );
}
