"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ConnectWalletButton } from "../components/ConnectWalletButton";
import { PulsefirePanel } from "../components/PulsefirePanel";

type GameId = "voidrun" | "pulsefire";
type RiskTier = "LOW" | "MEDIUM" | "HIGH";

export default function CasinoPage() {
  const [activeGame, setActiveGame] = useState<GameId>("voidrun");
  const [riskTier, setRiskTier] = useState<RiskTier>("LOW");
  const [betAmount, setBetAmount] = useState<string>("");
  const [targetMultiplier, setTargetMultiplier] = useState<number>(1.5);

  const parsedBet = parseFloat(betAmount) || 0;
  const potentialWin = parsedBet > 0 ? parsedBet * targetMultiplier : 0;

  return (
    <main className="relative min-h-screen bg-[#0d1120] text-slate-100 pt-20 pb-24 px-6">
  {/* GLOW BACKDROP */}
  <div className="pointer-events-none fixed inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f1b2e]/40 to-[#0d1120]" />
    <div className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
    <div className="absolute bottom-0 left-0 h-64 w-64 bg-violet-500/20 blur-3xl" />
    <div className="absolute bottom-0 right-0 h-64 w-64 bg-emerald-500/20 blur-3xl" />
  </div>


      <div className="max-w-6xl mx-auto space-y-10">
        {/* STATUS + HEADER ROW */}
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-emerald-500/10 text-xs text-emerald-300 border border-emerald-400/40 shadow-[0_0_18px_rgba(16,185,129,0.35)]">
              <span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
              Voltara Casino // Systems Online
            </div>

            <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                Voltara<span className="text-cyan-300"> Casino Deck</span>
              </h1>
              <p className="mt-2 text-sm md:text-base text-slate-300 max-w-xl">
                Route volatility through the Node Army vaults. Select a protocol,
                calibrate your risk, and let the reactors spin. All wagers and
                winnings are denominated in{" "}
                <span className="font-semibold text-cyan-200">Voltara Coin</span>.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1 rounded-full border border-slate-700/70 bg-slate-900/60 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 animate-ping" />
                Vault: Casino Operations
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-slate-700/70 bg-slate-900/60 px-3 py-1">
                House Edge:
                <span className="font-semibold text-cyan-200"> Calibrated</span>
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-slate-700/70 bg-slate-900/60 px-3 py-1">
                VOIDRUN Mode:
                <span className="font-semibold text-emerald-200"> Online</span>
              </span>
            </div>
          </div>

          <div className="flex flex-col items-end gap-3">
            <ConnectWalletButton />
            <Link
              href="/"
              className="text-xs text-slate-400 hover:text-slate-200 underline underline-offset-4"
            >
              ← Back to Voltara Hub
            </Link>
          </div>
        </header>

        {/* MAIN GRID */}
        <section className="grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] items-start">
         {/* LEFT: GAME SELECTOR */}
<div className="space-y-4">
  <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
    Game Matrix
  </h2>

  <div className="grid gap-4">
    {/* VOIDRUN CARD */}
    <button
      type="button"
      onClick={() => setActiveGame("voidrun")}
      className={`group relative w-full overflow-hidden rounded-2xl border px-4 py-4 text-left transition ${
        activeGame === "voidrun"
          ? "border-cyan-400/80 bg-slate-900/80 shadow-[0_0_30px_rgba(34,211,238,0.45)]"
          : "border-slate-700/70 bg-slate-900/60 hover:border-cyan-400/50 hover:bg-slate-900"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10 opacity-60 pointer-events-none" />

      <div className="relative flex items-start justify-between gap-4">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-cyan-300">
            VOIDRUN // VX
          </div>
          <p className="text-sm text-slate-200">
            High-velocity crash protocol. Pick your multiplier, outrun
            the collapse, and feed the vaults.
          </p>
          <div className="flex flex-wrap gap-2 pt-1.5">
            <span className="inline-flex items-center rounded-full bg-cyan-500/10 border border-cyan-400/40 px-2.5 py-0.5 text-[11px] text-cyan-200">
              High Volatility
            </span>
            <span className="inline-flex items-center rounded-full bg-emerald-500/5 border border-emerald-400/30 px-2.5 py-0.5 text-[11px] text-emerald-200">
              Voltara Coin Payouts
            </span>
          </div>
        </div>

        <div className="flex flex-col items-end gap-2">
          <span className="text-xs text-slate-400">Status</span>
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-400/40 px-2 py-0.5 text-[11px] text-emerald-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 animate-pulse" />
            Online
          </span>
        </div>
      </div>
    </button>

    {/* PULSEFIRE CARD */}
    <button
      type="button"
      onClick={() => setActiveGame("pulsefire")}
      className={`group relative w-full overflow-hidden rounded-2xl border px-4 py-4 text-left transition ${
        activeGame === "pulsefire"
          ? "border-amber-400/80 bg-slate-900/80 shadow-[0_0_30px_rgba(245,158,11,0.45)]"
          : "border-slate-700/70 bg-slate-900/60 hover:border-amber-400/50 hover:bg-slate-900"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-rose-500/10 opacity-60 pointer-events-none" />

      <div className="relative flex items-start justify-between gap-4">
        {/* LEFT: TEXT */}
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-amber-300">
            PulseFire // Singularity
          </div>
          <p className="text-sm text-slate-200">
            Five sequential plasma pulses with a fixed 40% hit-rate and brutal
            turnover. Survive all five and breach the Singularity with an
            exponential payout curve.
          </p>
          <div className="flex flex-wrap gap-2 pt-1.5">
            <span className="inline-flex items-center rounded-full bg-amber-500/10 border border-amber-400/40 px-2.5 py-0.5 text-[11px] text-amber-200">
              40% Hit Rate
            </span>
            <span className="inline-flex items-center rounded-full bg-rose-500/5 border border-rose-400/30 px-2.5 py-0.5 text-[11px] text-rose-200">
              Up to 32x Payout
            </span>
          </div>
        </div>

        {/* RIGHT: STATUS */}
        <div className="flex flex-col items-end gap-2">
          <span className="text-xs text-slate-500">Status</span>
          <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 border border-slate-500/60 px-2 py-0.5 text-[11px] text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
            UI Wiring Pending
          </span>
        </div>
      </div>
    </button>
  </div>

  {/* SMALL NOTE */}
  <p className="text-[11px] text-slate-500 leading-relaxed pt-1">
    All modules route flow back to the{" "}
    <span className="text-slate-300">Oracle Treasury</span>. This page
    is UI-only until wired to the deployed game contracts.
  </p>
</div>

          {/* RIGHT: ACTIVE GAME PANEL */}
          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
              {activeGame === "voidrun"
                ? "VOIDRUN // Control Stack"
                : "PulseFire // Control Stack"}
            </h2>

            <div className="relative overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-950/80 shadow-[0_0_40px_rgba(15,23,42,0.95)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(129,140,248,0.14),_transparent_55%)] pointer-events-none" />

              <div className="relative p-5 md:p-6 space-y-6">
                {activeGame === "voidrun" ? (
                  <VoidrunPanel
                    betAmount={betAmount}
                    setBetAmount={setBetAmount}
                    riskTier={riskTier}
                    setRiskTier={setRiskTier}
                    targetMultiplier={targetMultiplier}
                    setTargetMultiplier={setTargetMultiplier}
                    potentialWin={potentialWin}
                  />
                ) : (
                  <PulsefirePanel />
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

/* ---------------- VOIDRUN PANEL ---------------- */

interface VoidrunPanelProps {
  betAmount: string;
  setBetAmount: (v: string) => void;
  riskTier: RiskTier;
  setRiskTier: (t: RiskTier) => void;
  targetMultiplier: number;
  setTargetMultiplier: (v: number) => void;
  potentialWin: number;
}

function VoidrunPanel(props: VoidrunPanelProps) {
  const {
    betAmount,
    setBetAmount,
    riskTier,
    setRiskTier,
    targetMultiplier,
    setTargetMultiplier,
    potentialWin,
  } = props;

  const [isRunning, setIsRunning] = useState(false);
  const [simMultiplier, setSimMultiplier] = useState(1.0);
  const [simCrashAt, setSimCrashAt] = useState<number | null>(null);
  const [simOutcome, setSimOutcome] = useState<"idle" | "win" | "loss">("idle");
  const [simMessage, setSimMessage] = useState<string | null>(null);
  const [isCinematic, setIsCinematic] = useState(false);

  // Auto-open cinematic when a run begins
  useEffect(() => {
    if (isRunning) setIsCinematic(true);
  }, [isRunning]);

  // cleanup on unmount
  useEffect(() => {
    return () => {
      setIsRunning(false);
    };
  }, []);

  const disabled =
    !betAmount || isNaN(parseFloat(betAmount)) || parseFloat(betAmount) <= 0 || isRunning;

  const maxTrackMultiplier = 10;
  const shipProgress = Math.min(
    1,
    Math.max(0, (simMultiplier - 1) / (maxTrackMultiplier - 1))
  );

  const handleSimulate = () => {
    if (disabled || isRunning) return;

    setSimOutcome("idle");
    setSimMessage(null);
    setSimMultiplier(1.0);

    const crash = getFakeCrashMultiplier(riskTier);
    setSimCrashAt(crash);
    setIsRunning(true);

    const start = 1.0;
    const durationMs = 1400;
    const stepMs = 40;
    const steps = Math.max(1, Math.floor(durationMs / stepMs));
    const increment = (crash - start) / steps;

    let currentStep = 0;

    const timer = window.setInterval(() => {
      currentStep += 1;
      const nextVal = start + increment * currentStep;

      if (currentStep >= steps) {
        window.clearInterval(timer);
        const finalVal = parseFloat(crash.toFixed(2));
        setSimMultiplier(finalVal);

        const didWin = finalVal >= targetMultiplier;
        setSimOutcome(didWin ? "win" : "loss");
        setIsRunning(false);

        if (didWin) {
          setSimMessage(`You outran the collapse at ${finalVal.toFixed(2)}x.`);
        } else {
          setSimMessage(
            `Void collapsed at ${finalVal.toFixed(2)}x before your cashout.`
          );
        }
      } else {
        setSimMultiplier(parseFloat(nextVal.toFixed(2)));
      }
    }, stepMs);
  };

 return (
  <div className="space-y-6">
    {/* Top Row: Title + Status */}
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <h3 className="text-lg md:text-xl font-semibold text-slate-50 flex items-center gap-2">
          VOIDRUN <span className="text-cyan-300 text-sm">// VX</span>
        </h3>
        <p className="mt-1 text-xs md:text-sm text-slate-300 max-w-md">
          Select a risk tier, set your Voltara Coin wager, and choose the
          multiplier you think you can outrun. This simulation animates a
          random crash point based on tier only in the UI – no real bets yet.
        </p>
      </div>

      {/* Simulation header + Cinematic button + status pill */}
      <div className="flex flex-col items-end gap-2">
        {/* SIMULATION + CINEMATIC BUTTON */}
        <div className="flex items-center gap-2">
          <span className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
            Simulation
          </span>

          <button
            type="button"
            onClick={() => setIsCinematic(true)}
            className="rounded-full border border-cyan-400/70 bg-slate-900/70 px-3 py-1 text-[11px] uppercase tracking-wide text-cyan-300 hover:bg-slate-900 transition"
          >
            Cinematic
          </button>
        </div>

        {/* STATUS PILL */}
        <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 border border-slate-600/80 px-3 py-1 text-[11px]">
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              isRunning
                ? "bg-cyan-300 animate-pulse"
                : simOutcome === "win"
                ? "bg-emerald-300"
                : simOutcome === "loss"
                ? "bg-rose-300"
                : "bg-slate-400"
            }`}
          />
          <span className="text-slate-300">
            {isRunning
              ? "Status: Running"
              : simOutcome === "win"
              ? "Status: Win"
              : simOutcome === "loss"
              ? "Status: Loss"
              : "Status: Idle"}
          </span>
        </div>
      </div>
    </div> {/* ✅ close the top row flex container */}

    {/* Risk Tier Selector */}
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs font-medium text-slate-300 uppercase tracking-[0.18em]">
          Risk Tier
        </span>
        <span className="text-[11px] text-slate-400">
          Higher tiers = faster climb, nastier collapses.
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        <TierPill
          label="Low Orbit"
          sub="Conservative"
          active={riskTier === "LOW"}
          accent="emerald"
          onClick={() => !isRunning && setRiskTier("LOW")}
        />
        <TierPill
          label="Mid Void"
          sub="Balanced"
          active={riskTier === "MEDIUM"}
          accent="cyan"
          onClick={() => !isRunning && setRiskTier("MEDIUM")}
        />
        <TierPill
          label="Deep Abyss"
          sub="Degen"
          active={riskTier === "HIGH"}
          accent="violet"
          onClick={() => !isRunning && setRiskTier("HIGH")}
        />
      </div>
    </div>


      {/* Risk Tier Selector */}
      <div className="space-y-2">
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs font-medium text-slate-300 uppercase tracking-[0.18em]">
            Risk Tier
          </span>
          <span className="text-[11px] text-slate-400">
            Higher tiers = faster climb, nastier collapses.
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          <TierPill
            label="Low Orbit"
            sub="Conservative"
            active={riskTier === "LOW"}
            accent="emerald"
            onClick={() => !isRunning && setRiskTier("LOW")}
          />
          <TierPill
            label="Mid Void"
            sub="Balanced"
            active={riskTier === "MEDIUM"}
            accent="cyan"
            onClick={() => !isRunning && setRiskTier("MEDIUM")}
          />
          <TierPill
            label="Deep Abyss"
            sub="Degen"
            active={riskTier === "HIGH"}
            accent="violet"
            onClick={() => !isRunning && setRiskTier("HIGH")}
          />
        </div>
      </div>

      {/* Bet + Multiplier Row */}
      <div className="grid gap-4 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)]">
        {/* Bet Input */}
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs font-medium text-slate-300 uppercase tracking-[0.18em]">
              Wager
            </span>
            <span className="text-[11px] text-slate-400">
              Denominated in Voltara Coin
            </span>
          </div>

          <div className="relative">
            <input
              type="number"
              min={0}
              step="0.01"
              value={betAmount}
              onChange={(e) => setBetAmount(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2.5 pr-20 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/70"
              placeholder="0.00"
              disabled={isRunning}
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <span className="rounded-lg bg-slate-900/80 px-2.5 py-1 text-[11px] text-slate-300 border border-slate-700">
                Voltara
              </span>
            </div>
          </div>

          <p className="text-[11px] text-slate-500">
            Later, this will validate against your on-chain Voltara Coin balance.
          </p>
        </div>

        {/* Multiplier Slider + Ship + Live Sim Display */}
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs font-medium text-slate-300 uppercase tracking-[0.18em]">
              Target Multiplier
            </span>
            <span className="text-[11px] text-slate-400">
              Target:{" "}
              <span className="text-cyan-300 font-semibold">
                {targetMultiplier.toFixed(2)}x
              </span>
            </span>
          </div>

          <div className="space-y-3">
            <input
              type="range"
              min={1.1}
              max={10}
              step={0.1}
              value={targetMultiplier}
              onChange={(e) => setTargetMultiplier(parseFloat(e.target.value))}
              className="w-full accent-cyan-400"
              disabled={isRunning}
            />
            <div className="flex justify-between text-[11px] text-slate-500">
              <span>1.1x</span>
              <span>3x</span>
              <span>6x</span>
              <span>10x</span>
            </div>
          </div>

          {/* VOIDRUN Ship Track */}
          <div className="mt-1 mb-1">
            <div className="relative h-6 rounded-full bg-slate-900/80 border border-slate-700/80 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-cyan-500/15 to-rose-500/15" />
              <div className="absolute inset-y-0 right-0 w-1/3 bg-rose-500/10 pointer-events-none" />

              <motion.div
                className="absolute top-1/2 -translate-y-1/2"
                animate={{ left: `${shipProgress * 100}%` }}
                transition={{ type: "spring", stiffness: 200, damping: 22 }}
              >
                <div className="flex items-center gap-1">
                  <div className="h-4 w-4 rounded-full border border-cyan-300 bg-slate-950 shadow-[0_0_16px_rgba(34,211,238,0.85)]" />
                  <div className="h-[2px] w-6 bg-cyan-300/70 blur-[1px]" />
                </div>
              </motion.div>
            </div>

            <div className="mt-1 flex justify-between text-[10px] text-slate-500">
              <span>Launch</span>
              <span>Safe Orbit</span>
              <span>Danger Zone</span>
            </div>
          </div>

          {/* Multiplier Card */}
          <motion.div
            className="flex items-center justify-between rounded-xl border border-slate-700/80 bg-slate-900/70 px-3 py-2"
            animate={
              isRunning
                ? {
                    scale: 1.03,
                    boxShadow: "0 0 28px rgba(34,211,238,0.45)",
                  }
                : simOutcome === "win"
                ? {
                    scale: 1.05,
                    boxShadow: "0 0 32px rgba(52,211,153,0.55)",
                  }
                : simOutcome === "loss"
                ? {
                    scale: 1.02,
                    boxShadow: "0 0 30px rgba(248,113,113,0.55)",
                  }
                : {
                    scale: 1,
                    boxShadow: "0 0 0 rgba(0,0,0,0)",
                  }
            }
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          >
            <div className="text-[11px] text-slate-400">
              Simulated Run · Current Multiplier
            </div>
            <motion.div
              key={simMultiplier.toFixed(2)}
              initial={{ scale: 0.9, opacity: 0.6 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.15 }}
              className={`text-sm font-semibold ${
                simOutcome === "loss"
                  ? "text-rose-300"
                  : simOutcome === "win"
                  ? "text-emerald-300"
                  : "text-cyan-300"
              }`}
            >
              {simMultiplier.toFixed(2)}x
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Potential Win + Button + Message */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 pt-2">
        <button
          type="button"
          disabled={disabled}
          className={`inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition
            ${
              disabled
                ? "bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700"
                : "bg-cyan-500/90 hover:bg-cyan-400 text-slate-950 border border-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.55)]"
            }`}
          onClick={handleSimulate}
        >
          {isRunning ? "Void in Progress…" : "Arm the Voidrun"}
        </button>

        <div className="flex flex-col gap-1 text-[11px] text-slate-500 max-w-xs">
          <div>
            Potential Win (pre-house edge):{" "}
            <span className="text-emerald-300 font-semibold">
              {potentialWin > 0 ? potentialWin.toFixed(2) : "0.00"} Voltara
            </span>
          </div>
          <div>
            This is a front-end only simulation. On-chain logic will replace this
            random crash generator later.
          </div>

          <AnimatePresence mode="wait">
            {simMessage && (
              <motion.div
                key={simOutcome}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.18 }}
                className={`mt-1 rounded-lg border px-2 py-1 ${
                  simOutcome === "win"
                    ? "border-emerald-400/60 bg-emerald-500/10 text-emerald-200"
                    : "border-rose-400/60 bg-rose-500/10 text-rose-200"
                }`}
              >
                {simMessage}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* CINEMATIC OVERLAY */}
      <AnimatePresence>
        {isCinematic && (
          <motion.div
            className="fixed inset-0 z-40 flex items-center justify-center bg-slate-950/90 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* NEBULA BACKGROUND */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -left-24 -top-32 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl animate-pulse" />
              <div className="absolute right-[-10%] top-1/3 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />
              <div className="absolute left-1/4 bottom-[-15%] h-72 w-72 rounded-full bg-indigo-500/25 blur-3xl opacity-70" />
            </div>

            {/* click-to-close hit area (behind the card) */}
            <div
              className="absolute inset-0"
              onClick={() => !isRunning && setIsCinematic(false)}
            />

            {/* MAIN CINEMATIC CARD */}
            <motion.div
              className="relative z-50 w-full max-w-3xl mx-4 rounded-3xl border border-cyan-400/40 bg-gradient-to-b from-slate-900/95 via-slate-950/98 to-slate-950/98 px-8 py-6 shadow-[0_0_80px_rgba(34,211,238,0.55)]"
              initial={{ y: 40, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 30, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 220, damping: 24 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-cyan-300/80">
                    VOIDRUN // VX
                  </div>
                  <div className="text-xs text-slate-400">
                    Cinematic view · Live simulation mirror
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsCinematic(false)}
                  disabled={isRunning}
                  className="rounded-full border border-slate-600 bg-slate-900/80 px-3 py-1 text-[11px] text-slate-200 hover:border-cyan-400/70 hover:text-cyan-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isRunning ? "Locking run…" : "Close"}
                </button>
              </div>

              {/* Big Multiplier + Trajectory */}
              <div className="grid gap-6 md:grid-cols-[1.2fr_1fr] items-center">
                {/* Left: Big multiplier card */}
                <motion.div
                  className="rounded-3xl border border-slate-700/80 bg-slate-950/70 px-6 py-6 flex flex-col items-center justify-center"
                  animate={
                    isRunning
                      ? { boxShadow: "0 0 40px rgba(34,211,238,0.65)", scale: 1.03 }
                      : simOutcome === "win"
                      ? { boxShadow: "0 0 50px rgba(52,211,153,0.75)", scale: 1.05 }
                      : simOutcome === "loss"
                      ? { boxShadow: "0 0 50px rgba(248,113,113,0.75)", scale: 1.02 }
                      : { boxShadow: "0 0 0 rgba(0,0,0,0)", scale: 1 }
                  }
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <div className="text-[11px] uppercase tracking-[0.22em] text-slate-400 mb-2">
                    Current Multiplier
                  </div>

                  <motion.div
                    key={simMultiplier.toFixed(2)}
                    initial={{ scale: 0.8, opacity: 0.7 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className={`text-5xl md:text-6xl font-bold ${
                      simOutcome === "loss"
                        ? "text-rose-300"
                        : simOutcome === "win"
                        ? "text-emerald-300"
                        : "text-cyan-300"
                    }`}
                  >
                    {simMultiplier.toFixed(2)}x
                  </motion.div>

                  <div className="mt-3 text-xs text-slate-400">
                    Target:{" "}
                    <span className="text-cyan-300 font-semibold">
                      {targetMultiplier.toFixed(2)}x
                    </span>
                  </div>
                </motion.div>

                {/* Right: Trajectory track + status */}
                <div className="space-y-4">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
                    Trajectory
                  </div>

                  {/* Track */}
                  <div className="space-y-2">
                    <div className="relative h-8 rounded-full bg-slate-950/80 border border-slate-700/80 overflow-hidden shadow-[0_0_35px_rgba(34,211,238,0.45)]">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/15 via-emerald-500/20 to-rose-500/25" />
                      <div className="absolute inset-y-0 right-0 w-1/3 bg-rose-500/20" />

                      {(() => {
                        const maxMult = 10;
                        const progress = Math.min(
                          1,
                          Math.max(0, (simMultiplier - 1) / (maxMult - 1))
                        );
                        const leftPercent = progress * 100;

                        return (
                          <div
                            className="absolute top-1/2 -translate-y-1/2"
                            style={{ left: `${leftPercent}%` }}
                          >
                            <div className="flex items-center gap-1">
                              <div className="h-4 w-4 rounded-full border border-cyan-300 bg-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.9)]" />
                              <div className="h-[2px] w-10 bg-cyan-300/70 blur-[1px]" />
                            </div>
                          </div>
                        );
                      })()}
                    </div>

                    <div className="flex justify-between text-[10px] text-slate-500">
                      <span>Launch</span>
                      <span>Safe Orbit</span>
                      <span>Danger Zone</span>
                    </div>
                  </div>

                  {/* Status text */}
                  <div className="text-xs text-slate-300">
                    Status:{" "}
                    {simMessage ? (
                      <span
                        className={
                          simOutcome === "win"
                            ? "text-emerald-300"
                            : simOutcome === "loss"
                            ? "text-rose-300"
                            : "text-cyan-300"
                        }
                      >
                        {simMessage}
                      </span>
                    ) : (
                      <span className="text-slate-400">
                        Awaiting next VOIDRUN sequence…
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Footer row */}
              <div className="mt-5 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400">
                <div>
                  Risk Tier:{" "}
                  <span className="text-slate-200">
                    {riskTier === "HIGH"
                      ? "Deep Abyss"
                      : riskTier === "MEDIUM"
                      ? "Mid Void"
                      : "Low Orbit"}
                  </span>{" "}
                  · Wager:{" "}
                  <span className="text-slate-200">
                    {betAmount || "0"} Voltara
                  </span>
                </div>
                <div className="text-slate-500">
                  Cinematic mirrors the live simulation only – no extra logic here.
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ---------------- SMALL COMPONENTS ---------------- */

interface TierPillProps {
  label: string;
  sub: string;
  active: boolean;
  accent: "emerald" | "cyan" | "violet";
  onClick: () => void;
}

function TierPill({ label, sub, active, accent, onClick }: TierPillProps) {
  const accentClasses: Record<
    TierPillProps["accent"],
    { active: string; idle: string; ring: string }
  > = {
    emerald: {
      active:
        "bg-emerald-500/15 border-emerald-400/70 text-emerald-100 shadow-[0_0_18px_rgba(52,211,153,0.55)]",
      idle: "bg-slate-900/60 border-slate-700/80 text-slate-200 hover:border-emerald-400/60 hover:bg-emerald-500/5",
      ring: "bg-emerald-400",
    },
    cyan: {
      active:
        "bg-cyan-500/15 border-cyan-400/70 text-cyan-100 shadow-[0_0_18px_rgba(34,211,238,0.55)]",
      idle: "bg-slate-900/60 border-slate-700/80 text-slate-200 hover:border-cyan-400/60 hover:bg-cyan-500/5",
      ring: "bg-cyan-400",
    },
    violet: {
      active:
        "bg-violet-500/15 border-violet-400/70 text-violet-100 shadow-[0_0_18px_rgba(129,140,248,0.55)]",
      idle: "bg-slate-900/60 border-slate-700/80 text-slate-200 hover:border-violet-400/60 hover:bg-violet-500/5",
      ring: "bg-violet-400",
    },
  };

  const palette = accentClasses[accent];

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-2 rounded-xl border px-3.5 py-2 text-left text-xs transition ${
        active ? palette.active : palette.idle
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${palette.ring}`} />
      <div className="flex flex-col leading-tight">
        <span className="font-semibold">{label}</span>
        <span className="text-[10px] text-slate-400">{sub}</span>
      </div>
    </button>
  );
}

/* ---------------- RANDOM CRASH GENERATOR ---------------- */

function getFakeCrashMultiplier(tier: RiskTier): number {
  const r = Math.random(); // 0–1

  if (tier === "LOW") {
    if (r < 0.5) return 1.2 + Math.random() * 0.4; // 1.2–1.6
    if (r < 0.8) return 1.6 + Math.random() * 0.7; // 1.6–2.3
    if (r < 0.95) return 2.3 + Math.random() * 1.0; // 2.3–3.3
    return 3.3 + Math.random() * 1.7; // 3.3–5.0
  }

  if (tier === "MEDIUM") {
    if (r < 0.4) return 1.2 + Math.random() * 0.6; // 1.2–1.8
    if (r < 0.7) return 1.8 + Math.random() * 1.0; // 1.8–2.8
    if (r < 0.9) return 2.8 + Math.random() * 1.7; // 2.8–4.5
    if (r < 0.98) return 4.5 + Math.random() * 2.5; // 4.5–7.0
    return 7.0 + Math.random() * 3.0; // 7.0–10.0
  }

  // HIGH (degen)
  if (r < 0.5) return 1.1 + Math.random() * 0.4; // 1.1–1.5
  if (r < 0.75) return 1.5 + Math.random() * 0.7; // 1.5–2.2
  if (r < 0.9) return 2.2 + Math.random() * 2.0; // 2.2–4.2
  if (r < 0.97) return 4.2 + Math.random() * 3.5; // 4.2–7.7
  return 7.7 + Math.random() * 4.0; // 7.7–11.7
}
