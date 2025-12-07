"use client";

import { useState } from "react";

export default function StatusOrb() {
  const [hovered, setHovered] = useState(false);

  // Status Colors + core animation
  const ONLINE =
    "bg-emerald-400 shadow-[0_0_14px_rgba(16,185,129,0.7)] volt-orb-core";
  const OFFLINE =
    "bg-gray-500 shadow-[0_0_8px_rgba(100,100,100,0.4)]";

  // Static for now – can be wired to real data later
  const SYSTEM_STATUS = {
    oracle: true,
    nodeArmy: true,
    minter: false,
  };

  return (
    <div
      className="fixed bottom-6 left-6 z-50 transition-all"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
     {/* Orb + orbiting particles */}
<div className="relative h-16 w-16 -ml-3 -mb-3">

  {/* Core orb */}
  <div
    className={`
      absolute inset-3 rounded-full transition-all duration-300 backdrop-blur
      ${SYSTEM_STATUS.oracle ? ONLINE : OFFLINE}
      ${hovered ? "scale-110" : "scale-100"}
    `}
  />

  {/* Orbit ring */}
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <span className="volt-orbit-ring" />
  </div>

  {/* Orbiting electrons */}
  <span className="volt-orbit-dot volt-orbit-dot-1" />
  <span className="volt-orbit-dot volt-orbit-dot-2" />

</div>

      {/* Hover Panel */}
      {hovered && (
        <div
          className="
            absolute left-14 bottom-1 px-4 py-3 w-52 rounded-xl
            bg-slate-900/90 border border-slate-700/40 backdrop-blur-lg
            shadow-[0_0_20px_rgba(0,0,0,0.6)]
            text-slate-200 text-xs space-y-1
          "
        >
          <p className="font-semibold text-cyan-300 mb-1">System Status</p>

          <p>
            <span className="text-emerald-400">●</span> Oracle — Online
          </p>
          <p>
            <span className="text-emerald-400">●</span> Node Army — Online
          </p>
          <p>
            <span className="text-amber-400">●</span> Minter — Coming Online
          </p>
        </div>
      )}
    </div>
  );
}
