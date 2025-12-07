"use client";

import { useState } from "react";

export default function LotteryPage() {
  const [tickets, setTickets] = useState(0);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-6 py-20 relative overflow-hidden">

      {/* BACKGROUND HALO */}
      <div className="pointer-events-none absolute inset-0 
        bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_65%)] blur-3xl" 
      />

      {/* PAGE TITLE */}
      <h1 className="text-4xl font-bold text-center tracking-[0.2em] mb-4">
        VOLTARA LOTTERY
      </h1>

      <p className="text-center text-slate-400 mb-12">
        High-stakes. Fair odds. Fully on-chain randomness powered by Voltara Oracle.
      </p>

      {/* JACKPOT ORB */}
      <div className="flex justify-center mb-12">
        <div className="relative h-60 w-60 rounded-full flex items-center justify-center
          bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.25),rgba(15,23,42,1))]
          shadow-[0_0_60px_20px_rgba(34,211,238,0.25)]
          animate-[pulse_5s_ease-in-out_infinite]
        ">
          <span className="text-3xl font-bold tracking-widest drop-shadow-[0_0_12px_#0ff]">
            {tickets * 5 + 50} VLTRX
          </span>

          {/* Glow Ring */}
          <div className="absolute inset-0 rounded-full border border-cyan-400/30 blur-[2px]" />
        </div>
      </div>

      {/* BUY TICKET AREA */}
      <div className="max-w-md mx-auto bg-slate-900/40 border border-slate-800/60
        rounded-xl p-6 shadow-xl backdrop-blur-sm relative overflow-hidden group">

        {/* Hover Pulse */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500">
          <div className="absolute -inset-24 mx-auto my-auto blur-3xl
          bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.45),transparent_60%)]
          group-hover:animate-[pulse_3s_ease-in-out_infinite]" />
        </div>

        <h2 className="text-xl font-semibold mb-2">Buy Lottery Ticket</h2>
        <p className="text-slate-400 mb-4">Each ticket increases the jackpot prize.</p>

        <button
          onClick={() => setTickets(tickets + 1)}
          className="w-full py-3 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/40
            rounded-lg text-cyan-300 font-semibold tracking-wide transition-all
            hover:shadow-[0_0_25px_rgba(34,211,238,0.45)]"
        >
          Buy Ticket (5 VLTRX)
        </button>
      </div>

      {/* STATS ROW */}
      <div className="max-w-2xl mx-auto mt-14 grid grid-cols-3 gap-6 text-center">
        <div>
          <div className="text-2xl font-bold">{tickets}</div>
          <div className="text-slate-400 text-sm">Your Tickets</div>
        </div>

        <div>
          <div className="text-2xl font-bold">{tickets * 5 + 50} VLTRX</div>
          <div className="text-slate-400 text-sm">Prize Pool</div>
        </div>

        <div>
          <div className="text-2xl font-bold">23h</div>
          <div className="text-slate-400 text-sm">Time Left</div>
        </div>
      </div>
    </main>
  );
}
