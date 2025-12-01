// app/nodearmy/page.tsx
"use client";

import React, { useState } from "react";
import { useAccount, useBalance } from "wagmi";
import { useWeb3Modal } from "@web3modal/wagmi/react";

type NodeStatus = "IDLE" | "ACTIVE" | "BOOSTED" | "OFFLINE";

interface NodeInfo {
  id: number;
  label: string;
  tier: "Scout" | "Operator" | "Overseer";
  status: NodeStatus;
  uptime: string;
  yield: string;
}

const MOCK_NODES: NodeInfo[] = [
  {
    id: 1,
    label: "VX-01 // Scout",
    tier: "Scout",
    status: "ACTIVE",
    uptime: "14h 22m",
    yield: "32 VLTRX / day",
  },
  {
    id: 2,
    label: "VX-02 // Operator",
    tier: "Operator",
    status: "BOOSTED",
    uptime: "3d 4h",
    yield: "115 VLTRX / day",
  },
  {
    id: 3,
    label: "VX-03 // Overseer",
    tier: "Overseer",
    status: "IDLE",
    uptime: "—",
    yield: "—",
  },
  {
    id: 4,
    label: "VX-04 // Scout",
    tier: "Scout",
    status: "OFFLINE",
    uptime: "Last seen 7h ago",
    yield: "0 VLTRX / day",
  },
];

export default function NodeArmyPage() {
  // REAL wallet state from wagmi
  const { address, isConnected } = useAccount();
  const { open } = useWeb3Modal();

  const { data: ethBalance } = useBalance({
    address,
    chainId: 1, // Ethereum mainnet for now
    watch: true,
    enabled: !!address,
  });

  const [selectedNode, setSelectedNode] = useState<NodeInfo | null>(null);

  const vltrxPrice = "0.12"; // TODO: replace with live on-chain price later
  const totalNodes = MOCK_NODES.length;
  const activeNodes = MOCK_NODES.filter(
    (n) => n.status === "ACTIVE" || n.status === "BOOSTED"
  ).length;
  const boostedNodes = MOCK_NODES.filter((n) => n.status === "BOOSTED").length;

  const handleActivateNode = () => {
    if (!selectedNode) return alert("Select a node first.");
    if (!isConnected) return alert("Connect your wallet first.");
    alert(`(stub) Activating node: ${selectedNode.label}`);
  };

  const handleBoostNode = () => {
    if (!selectedNode) return alert("Select a node first.");
    if (!isConnected) return alert("Connect your wallet first.");
    alert(`(stub) Applying boost to: ${selectedNode.label}`);
  };

  const handleDeactivateNode = () => {
    if (!selectedNode) return alert("Select a node first.");
    if (!isConnected) return alert("Connect your wallet first.");
    alert(`(stub) Deactivating node: ${selectedNode.label}`);
  };

  // Small helper for display
  const shortAddress =
    address && `${address.slice(0, 6)}…${address.slice(-4)}`;

  const formattedEth =
    ethBalance && Number(ethBalance.formatted).toFixed(4);

  return (
    <main className="vx-shell">
      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 lg:py-12 z-10">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Voltara Node Army Control Deck
            </h1>
            <p className="mt-1 text-sm text-slate-400">
              Command your AI nodes, monitor yields, and deploy boosts in real
              time.
            </p>

            {isConnected && (
              <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-slate-300">
                <span className="rounded-full bg-slate-800 px-3 py-1">
                  {shortAddress}
                </span>
                {formattedEth && (
                  <span className="rounded-full bg-slate-800 px-3 py-1">
                    Ξ {formattedEth}
                  </span>
                )}
              </div>
            )}
          </div>

          {/* REAL wallet connect button */}
          <button
            onClick={() => open()}
            className={`inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium transition ${
              isConnected
                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/60"
                : "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/60 hover:bg-cyan-400"
            }`}
          >
            {isConnected ? "Wallet Connected" : "Connect Wallet"}
          </button>
        </header>

        {/* Stats row */}
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            label="Total Nodes"
            value={totalNodes.toString()}
            sub="Registered in this command deck."
          />
          <StatCard
            label="Active Nodes"
            value={activeNodes.toString()}
            sub="Currently online + working."
          />
          <StatCard
            label="Boosted Nodes"
            value={boostedNodes.toString()}
            sub="Running with enhanced yield."
          />
          <StatCard
            label="VLTRX / USD (stub)"
            value={`$${vltrxPrice}`}
            sub="Live feed to be wired on-chain."
          />
        </section>

        {/* Main grid */}
        <section className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)]">
          {/* Left: Node table */}
          <div className="rounded-2xl border border-white/5 bg-slate-900/60 shadow-2xl shadow-cyan-500/5 backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/5 px-5 py-3">
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">
                  Node Roster
                </h2>
                <p className="text-xs text-slate-500">
                  Tap a node to select it, then apply orders on the right.
                </p>
              </div>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-[11px] font-medium text-slate-300">
                {activeNodes}/{totalNodes} Online
              </span>
            </div>

            <div className="max-h-[420px] overflow-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="sticky top-0 bg-slate-900/90 backdrop-blur">
                  <tr className="text-xs uppercase tracking-wide text-slate-400">
                    <th className="px-4 py-2">Node</th>
                    <th className="px-4 py-2">Tier</th>
                    <th className="px-4 py-2">Status</th>
                    <th className="px-4 py-2">Uptime</th>
                    <th className="px-4 py-2">Yield</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  {MOCK_NODES.map((node) => {
                    const isSelected = selectedNode?.id === node.id;
                    return (
                      <tr
                        key={node.id}
                        onClick={() => setSelectedNode(node)}
                        className={`cursor-pointer text-xs sm:text-sm transition ${
                          isSelected
                            ? "bg-cyan-500/10 hover:bg-cyan-500/20"
                            : "hover:bg-slate-800/70"
                        }`}
                      >
                        <td className="px-4 py-3 font-medium text-slate-50">
                          {node.label}
                        </td>
                        <td className="px-4 py-3 text-slate-300">
                          {node.tier}
                        </td>
                        <td className="px-4 py-3">
                          <StatusPill status={node.status} />
                        </td>
                        <td className="px-4 py-3 text-slate-300">
                          {node.uptime}
                        </td>
                        <td className="px-4 py-3 text-slate-300">
                          {node.yield}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right: Controls */}
          <div className="flex flex-col gap-4">
            {/* Selected node summary */}
            <div className="rounded-2xl border border-cyan-500/30 bg-slate-900/70 shadow-xl shadow-cyan-500/20 backdrop-blur-xl">
              <div className="border-b border-cyan-500/30 px-5 py-3">
                <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                  Selected Node
                </h2>
              </div>
              <div className="px-5 py-4 text-sm">
                {selectedNode ? (
                  <>
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                      {selectedNode.tier} NODE
                    </p>
                    <p className="mt-1 text-base font-semibold">
                      {selectedNode.label}
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-slate-300">
                      <StatusPill status={selectedNode.status} />
                      <span className="rounded-full bg-slate-800 px-3 py-1">
                        Uptime: {selectedNode.uptime}
                      </span>
                      <span className="rounded-full bg-slate-800 px-3 py-1">
                        Yield: {selectedNode.yield}
                      </span>
                    </div>
                  </>
                ) : (
                  <p className="text-slate-400">
                    No node selected. Tap a node in the roster to begin issuing
                    orders.
                  </p>
                )}
              </div>
            </div>

            {/* Action panel */}
            <div className="rounded-2xl border border-white/5 bg-slate-900/70 shadow-xl shadow-slate-950/70 backdrop-blur-xl">
              <div className="border-b border-white/5 px-5 py-3">
                <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
                  Command Panel
                </h2>
                <p className="mt-1 text-xs text-slate-400">
                  These buttons will later call your smart contracts on-chain.
                </p>
              </div>
              <div className="px-5 py-4">
                <div className="grid gap-3 sm:grid-cols-2">
                  <button
                    onClick={handleActivateNode}
                    className="h-10 rounded-xl bg-emerald-500 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-40"
                    disabled={!selectedNode}
                  >
                    Activate Node
                  </button>
                  <button
                    onClick={handleDeactivateNode}
                    className="h-10 rounded-xl bg-slate-800 text-sm font-semibold text-slate-100 shadow-lg shadow-slate-950/60 transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-40"
                    disabled={!selectedNode}
                  >
                    Deactivate Node
                  </button>
                  <button
                    onClick={handleBoostNode}
                    className="h-10 rounded-xl bg-cyan-500 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/50 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-40 sm:col-span-2"
                    disabled={!selectedNode}
                  >
                    Apply Boost (stub)
                  </button>
                </div>

                <p className="mt-4 text-[11px] leading-relaxed text-slate-500">
                  On-chain wiring plan:
                  <br />
                  <span className="text-slate-300">
                    • Activate / Deactivate
                  </span>{" "}
                  → calls into{" "}
                  <span className="text-cyan-300">NodeRegistry</span>.
                  <br />
                  <span className="text-slate-300">• Apply Boost</span> → calls{" "}
                  <span className="text-cyan-300">Merit / Boost contracts</span>{" "}
                  to upgrade yield and reputation.
                </p>
              </div>
            </div>

            {/* Roadmap note */}
            <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-950/60 px-5 py-4 text-xs text-slate-400">
              <p className="font-medium text-slate-200">
                Next steps (after this UI feels good):
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-4">
                <li>Swap stub connect for real wallet (wagmi + Web3Modal).</li>
                <li>
                  Replace mock data with live reads from NodeRegistry on-chain.
                </li>
                <li>
                  Wire buttons to actual write functions (activate / boost).
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function StatCard(props: { label: string; value: string; sub?: string }) {
  return (
    <div className="rounded-2xl border border-white/5 bg-slate-900/70 p-4 shadow-xl shadow-slate-950/70 backdrop-blur-xl">
      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
        {props.label}
      </p>
      <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-50">
        {props.value}
      </p>
      {props.sub && (
        <p className="mt-1 text-xs text-slate-500">{props.sub}</p>
      )}
    </div>
  );
}

function StatusPill({ status }: { status: NodeStatus }) {
  const base =
    "inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold";

  if (status === "ACTIVE") {
    return (
      <span
        className={`${base} bg-emerald-500/15 text-emerald-300 border border-emerald-500/40`}
      >
        ● ACTIVE
      </span>
    );
  }
  if (status === "BOOSTED") {
    return (
      <span
        className={`${base} bg-cyan-500/15 text-cyan-300 border border-cyan-500/40`}
      >
        ⚡ BOOSTED
      </span>
    );
  }
  if (status === "OFFLINE") {
    return (
      <span
        className={`${base} bg-rose-500/10 text-rose-300 border border-rose-500/40`}
      >
        ● OFFLINE
      </span>
    );
  }
  // IDLE
  return (
    <span
      className={`${base} bg-slate-800 text-slate-200 border border-slate-600`}
    >
      ● IDLE
    </span>
  );
}
