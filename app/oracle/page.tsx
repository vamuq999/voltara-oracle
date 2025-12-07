"use client";

import { useState } from "react";
import { ConnectWalletButton } from "../components/ConnectWalletButton";

export default function OraclePage() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function askOracle() {
    if (!question.trim()) return;
    setLoading(true);

    try {
      const res = await fetch("/api/oracle", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();
      setAnswer(data.answer || "No response.");
    } catch (err) {
      setAnswer("Error contacting Oracle.");
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative overflow-hidden">
      {/* BACKGROUND AURA */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.12),transparent_70%)] opacity-60 blur-3xl" />

      <main className="relative z-10 pt-24 pb-32 px-6 max-w-4xl mx-auto">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold tracking-wide">
            V O L T A R A <span className="text-cyan-400">O R A C L E</span>
          </h1>
          <ConnectWalletButton />
        </div>

        {/* SUBTITLE */}
        <p className="text-slate-400 text-center mb-10">
          Ask your question. The Oracle returns a wisdom response and signs it
          into the chain.
        </p>

        {/* ORACLE INPUT CARD */}
        <div className="relative group rounded-xl p-8 bg-slate-900/40 border border-slate-800/40 shadow-xl backdrop-blur-sm overflow-hidden">
          {/* Glow */}
          <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-700">
            <div className="absolute -inset-32 bg-[radial-gradient(circle,rgba(56,189,248,0.35),transparent_70%)] blur-3xl animate-[pulse_4s_ease-in-out_infinite]" />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <label className="text-slate-300 mb-2 block">Your Question</label>
            <input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask anything..."
              className="w-full px-4 py-3 rounded-lg bg-slate-800/60 border border-slate-700/40 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            />

            <button
              onClick={askOracle}
              disabled={loading}
              className="mt-6 w-full py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold transition disabled:opacity-40"
            >
              {loading ? "Consulting Oracle..." : "Ask Oracle"}
            </button>
          </div>
        </div>

        {/* ANSWER BLOCK */}
        {answer && (
          <div className="mt-10 p-6 rounded-xl bg-slate-900/50 border border-slate-800/40 shadow-lg backdrop-blur-sm">
            <h2 className="text-cyan-400 font-semibold mb-3">Oracle Response</h2>
            <p className="text-lg text-slate-200 leading-relaxed whitespace-pre-line">
              {answer}
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
