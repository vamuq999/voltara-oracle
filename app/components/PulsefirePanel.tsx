"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type PulseStatus = "idle" | "pending" | "hit" | "miss";

export function PulsefirePanel() {
  const [betAmount, setBetAmount] = useState("1.00");
  const [riskTier, setRiskTier] = useState<"LOW" | "MEDIUM" | "HIGH">("MEDIUM");
  const [pulses, setPulses] = useState<PulseStatus[]>([
    "idle",
    "idle",
    "idle",
    "idle",
    "idle",
  ]);
  const [isFiring, setIsFiring] = useState(false);
  const [outcome, setOutcome] = useState<"idle" | "win" | "loss">("idle");
  const [finalMultiplier, setFinalMultiplier] = useState(0);
  const [message, setMessage] = useState<string | null>(null);
  const [isCinematic, setIsCinematic] = useState(false);

  useEffect(() => {
    if (isFiring) setIsCinematic(true);
  }, [isFiring]);

  const disabled =
    !betAmount || isNaN(parseFloat(betAmount)) || parseFloat(betAmount) <= 0 || isFiring;

 const hitChance = 0.4; // 40% per pulse





  const potentialMaxWin =
    !betAmount || isNaN(parseFloat(betAmount))
      ? 0
      : parseFloat(betAmount) * Math.pow(2, 5); // 32x on 5/5

  const handleFire = async () => {
    if (disabled) return;

    setOutcome("idle");
    setMessage(null);
    setFinalMultiplier(0);
    setPulses(["idle", "idle", "idle", "idle", "idle"]);
    setIsFiring(true);

    let hits = 0;

    for (let i = 0; i < 5; i++) {
      setPulses((prev) => {
        const next = [...prev];
        next[i] = "pending";
        return next;
      });

      await new Promise((res) => setTimeout(res, 380));

      const hit = Math.random() < hitChance;

      setPulses((prev) => {
        const next = [...prev];
        next[i] = hit ? "hit" : "miss";
        return next;
      });

      if (!hit) {
        const mult = hits > 0 ? Math.pow(2, hits) : 0;
        setFinalMultiplier(mult);
        setOutcome("loss");
        setMessage(
          hits === 0
            ? `Pulse ${i + 1} failed. Singularity collapsed instantly.`
            : `Pulse ${i + 1} failed. Run ended with ${hits} hit${
                hits > 1 ? "s" : ""
              }.`
        );
        setIsFiring(false);
        return;
      }

      hits++;
    }

    const mult = Math.pow(2, hits);
    setFinalMultiplier(mult);
    setOutcome("win");
    setMessage(`All 5 pulses connected. Singularity breached at ${mult}x.`);
    setIsFiring(false);
  };

  const effectiveHitRateLabel = `${Math.round(hitChance * 100)}% per pulse`;


  const pulseColorClasses = (status: PulseStatus) => {
    if (status === "pending")
      return "border-amber-300 bg-amber-500/20 shadow-[0_0_26px_rgba(252,211,77,0.6)]";
    if (status === "hit")
      return "border-emerald-300 bg-emerald-500/20 shadow-[0_0_26px_rgba(52,211,153,0.7)]";
    if (status === "miss")
      return "border-rose-300 bg-rose-500/20 shadow-[0_0_26px_rgba(248,113,113,0.7)]";
    return "border-slate-600 bg-slate-900/70";
  };

  return (
    <div className="space-y-6">
      {/* Top Row: Title + Summary */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-slate-50 flex items-center gap-2">
            PULSEFIRE <span className="text-amber-300 text-sm">// SINGULARITY</span>
          </h3>
          <p className="mt-1 text-xs md:text-sm text-slate-300 max-w-md">
            Five sequential plasma pulses with a fixed {Math.round(hitChance * 100)}% hit rate each. Any miss
            collapses the run. Survive all five and breach the Singularity with an
            exponential payout curve.
          </p>
        </div>

        <div className="flex flex-col items-end gap-1 text-right">
          <span className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
            Profile
          </span>
          <div className="text-[11px] text-slate-300">
            Hit Rate:{" "}
            <span className="text-amber-300 font-semibold">
              {effectiveHitRateLabel}
            </span>
          </div>
          <div className="text-[11px] text-slate-400">
            Max Simulated Payout:{" "}
            <span className="text-emerald-300 font-semibold">
              {potentialMaxWin > 0 ? potentialMaxWin.toFixed(2) : "0.00"} Voltara
            </span>{" "}
            (32x)
          </div>
        </div>
      </div>

      {/* Risk Tier Selector */}
      <div className="space-y-2">
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs font-medium text-slate-300 uppercase tracking-[0.18em]">
            Risk Profile
          </span>
          <span className="text-[11px] text-slate-400">
           Cosmetic only for now – live odds are fixed at 40%.

          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {/* These TierPill clones are local to this file.
              If you want, we can later refactor to reuse your global TierPill. */}
          <TierPillLocal
            label="Stabilised"
            sub="Baseline risk"
            active={riskTier === "LOW"}
            accent="emerald"
            onClick={() => !isFiring && setRiskTier("LOW")}
          />
          <TierPillLocal
            label="Charged Core"
            sub="Default"
            active={riskTier === "MEDIUM"}
            accent="cyan"
            onClick={() => !isFiring && setRiskTier("MEDIUM")}
          />
          <TierPillLocal
            label="Overclocked"
            sub="Degen aesthetic"
            active={riskTier === "HIGH"}
            accent="violet"
            onClick={() => !isFiring && setRiskTier("HIGH")}
          />
        </div>
      </div>

      {/* Wager + Pulses */}
      <div className="grid gap-4 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)]">
        {/* Wager Input */}
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
              className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2.5 pr-20 text-sm text-slate-100 placeholder:text-slate-500 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400/70"
              placeholder="0.00"
              disabled={isFiring}
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <span className="rounded-lg bg-slate-900/80 px-2.5 py-1 text-[11px] text-slate-300 border border-slate-700">
                Voltara
              </span>
            </div>
          </div>

          <p className="text-[11px] text-slate-500">
            Later, this will validate against your on-chain Voltara balance.
          </p>
        </div>

        {/* Pulse Chamber Row */}
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs font-medium text-slate-300 uppercase tracking-[0.18em]">
              Pulse Chambers
            </span>
            <span className="text-[11px] text-slate-400">
              Five sequential shots into the core.
            </span>
          </div>

          <div className="flex items-center justify-between gap-2">
            {pulses.map((status, idx) => (
              <div key={idx} className="flex flex-col items-center gap-1">
                <div
                  className={`h-9 w-9 rounded-full border bg-slate-900/70 transition-all duration-200 ${pulseColorClasses(
                    status
                  )}`}
                />
                <span className="text-[10px] text-slate-500">P{idx + 1}</span>
              </div>
            ))}
          </div>

          <div className="text-[11px] text-slate-500">
            Each pulse rolls independently at 20% success chance. A single miss
            collapses the Singularity.
          </div>
        </div>
      </div>

      {/* Fire Button + Status */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 pt-2">
        <button
          type="button"
          disabled={disabled}
          onClick={handleFire}
          className={`inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition
            ${
              disabled
                ? "bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700"
                : "bg-amber-500/90 hover:bg-amber-400 text-slate-950 border border-amber-300 shadow-[0_0_25px_rgba(245,158,11,0.65)]"
            }`}
        >
          {isFiring ? "Pulses Firing…" : "Fire the Singularity"}
        </button>

        <div className="flex flex-col gap-1 text-[11px] text-slate-500 max-w-xs">
          <div>
            Exponential curve:{" "}
            <span className="text-amber-300 font-semibold">2^hits</span> · Perfect
            5/5 ={" "}
            <span className="text-emerald-300 font-semibold">32x</span> payout.
          </div>
          <div>
            This is a front-end only simulation. On-chain logic will replace this
            RNG and connect to the real treasury later.
          </div>
          {message && (
            <div
              className={`mt-1 rounded-lg border px-2 py-1 ${
                outcome === "win"
                  ? "border-emerald-400/60 bg-emerald-500/10 text-emerald-200"
                  : "border-rose-400/60 bg-rose-500/10 text-rose-200"
              }`}
            >
              {message}
            </div>
          )}
        </div>
      </div>

      {/* CINEMATIC OVERLAY */}
      <AnimatePresence>
        {isCinematic && (
          <motion.div
            className="fixed inset-0 z-40 flex items-center justify-center bg-slate-950/90 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
            }}
          >
            {/* NEBULA BACKGROUND */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -left-24 -top-32 h-80 w-80 rounded-full bg-amber-500/25 blur-3xl animate-pulse" />
              <div className="absolute right-[-10%] top-1/3 h-96 w-96 rounded-full bg-emerald-500/25 blur-3xl animate-pulse" />
              <div className="absolute left-1/4 bottom-[-15%] h-72 w-72 rounded-full bg-cyan-500/25 blur-3xl opacity-70" />
            </div>

            {/* click-to-close behind card */}
            <div
              className="absolute inset-0"
              onClick={() => !isFiring && setIsCinematic(false)}
            />

            {/* CINEMATIC CARD */}
            <motion.div
              className="relative z-50 w-full max-w-3xl mx-4 rounded-3xl border border-amber-400/40 bg-gradient-to-b from-slate-900/95 via-slate-950/98 to-slate-950/98 px-8 py-6 shadow-[0_0_80px_rgba(245,158,11,0.55)]"
              initial={{ y: 40, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 30, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 220, damping: 24 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-amber-300/90">
                    PULSEFIRE // SINGULARITY
                  </div>
                  <div className="text-xs text-slate-400">
                    Cinematic view · Plasma chamber diagnostics
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsCinematic(false)}
                  disabled={isFiring}
                  className="rounded-full border border-slate-600 bg-slate-900/80 px-3 py-1 text-[11px] text-slate-200 hover:border-amber-400/70 hover:text-amber-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isFiring ? "Sequence Locked…" : "Close"}
                </button>
              </div>

              {/* Chambers + Result */}
              <div className="space-y-6">
                {/* Chambers Row */}
                <div className="flex items-center justify-between gap-4">
                  {pulses.map((status, idx) => (
                    <div
                      key={`cine-${idx}`}
                      className="flex flex-col items-center gap-1"
                    >
                      <motion.div
                        className={`h-14 w-14 rounded-full border bg-slate-950/80 ${pulseColorClasses(
                          status
                        )}`}
                        animate={
                          status === "pending"
                            ? { scale: [1, 1.1, 1], opacity: [0.9, 1, 0.9] }
                            : { scale: 1, opacity: 1 }
                        }
                        transition={{
                          duration: 0.35,
                          repeat: status === "pending" ? Infinity : 0,
                        }}
                      />
                      <span className="text-[10px] text-slate-400">
                        Pulse {idx + 1}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Result */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.22em] text-slate-400 mb-1">
                      Result
                    </div>
                    <div className="text-sm text-slate-200">
                      {message ? (
                        <span
                          className={
                            outcome === "win"
                              ? "text-emerald-300"
                              : outcome === "loss"
                              ? "text-rose-300"
                              : "text-slate-300"
                          }
                        >
                          {message}
                        </span>
                      ) : isFiring ? (
                        <span className="text-amber-300">
                          Firing sequence in progress…
                        </span>
                      ) : (
                        <span className="text-slate-400">
                          Awaiting next plasma sequence.
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-[11px] uppercase tracking-[0.22em] text-slate-400 mb-1">
                      Final Multiplier
                    </div>
                    <div className="text-3xl font-semibold text-emerald-300">
                      {finalMultiplier > 0 ? `${finalMultiplier}x` : "0x"}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* local pill variant so we don't have to import from page.tsx */
interface TierPillLocalProps {
  label: string;
  sub: string;
  active: boolean;
  accent: "emerald" | "cyan" | "violet";
  onClick: () => void;
}

function TierPillLocal({
  label,
  sub,
  active,
  accent,
  onClick,
}: TierPillLocalProps) {
  const accentClasses: Record<
    TierPillLocalProps["accent"],
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
        "bg-cyan-500/15 border-cyan-400/70 text-cyan-100 shadow-[0_0_18px_rgga(34,211,238,0.55)]",
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
