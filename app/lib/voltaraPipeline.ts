// app/lib/voltaraPipeline.ts

// --- Types -------------------------------------------------------

export type VoltaraScan = {
  raw: string;
  length: number;
  words: number;
  lines: number;
};

export type VoltaraMined = {
  insight: string;
  emotionalTone: "CALM" | "INTENSE" | "DREAMY";
  complexityScore: number; // 0–100
};

export type VoltaraBlueprint = {
  title: string;
  summary: string;
  tags: string[];
  suggestedAction: string;
};

export type VoltaraOutput = {
  scan: VoltaraScan;
  mined: VoltaraMined;
  blueprint: VoltaraBlueprint;
};

// --- VoltaraSee --------------------------------------------------

export function voltaraSee(input: string): VoltaraScan {
  const lines = input.split(/\r?\n/).filter((l) => l.trim().length > 0).length;
  const words = input.trim().length ? input.trim().split(/\s+/).length : 0;

  return {
    raw: input,
    length: input.length,
    words,
    lines,
  };
}

// --- VoltaraMine -------------------------------------------------

export function voltaraMine(scan: VoltaraScan): VoltaraMined {
  const { length, words } = scan;

  const density = words === 0 ? 0 : length / words;
  let emotionalTone: VoltaraMined["emotionalTone"] = "CALM";

  if (density > 18) emotionalTone = "INTENSE";
  if (density < 8 && words > 0) emotionalTone = "DREAMY";

  const complexityScore = Math.min(100, Math.round((length / 600) * 100));

  const insight = `Detected ${words} words across ${scan.lines} line(s), approx. complexity score ${complexityScore}/100.`;

  return {
    insight,
    emotionalTone,
    complexityScore,
  };
}

// --- VoltaraComeUp -----------------------------------------------

export function voltaraComeUp(mined: VoltaraMined): VoltaraBlueprint {
  let title = "Soft Pattern Detected";
  let suggestedAction = "Capture this in your Oracle Vision log.";

  if (mined.emotionalTone === "INTENSE") {
    title = "High-Charge Signal";
    suggestedAction = "Tag this as a critical node and revisit when calm.";
  } else if (mined.emotionalTone === "DREAMY") {
    title = "Dreamlike Blueprint";
    suggestedAction = "Feed this into the V3 Dream Compiler for expansion.";
  }

  const summary = `${mined.insight} Emotional tone appears ${mined.emotionalTone.toLowerCase()}.`;

  const tags = [
    "voltarseer",
    mined.emotionalTone.toLowerCase(),
    mined.complexityScore > 60 ? "deep" : "light",
  ];

  return {
    title,
    summary,
    tags,
    suggestedAction,
  };
}

// --- VoltaraView (pipeline runner) -------------------------------

export function runVoltaraPipeline(input: string): VoltaraOutput {
  const scan = voltaraSee(input);
  const mined = voltaraMine(scan);
  const blueprint = voltaraComeUp(mined);

  return { scan, mined, blueprint };
}
