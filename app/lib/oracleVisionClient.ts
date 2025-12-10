// app/lib/oracleVisionClient.ts
"use client";

import { ethers } from "ethers";
import {
  ORACLE_VISION_ADDRESS,
  ORACLE_VISION_ABI,
} from "./oracleVision";

import {
  VoltaraScan,
  VoltaraMined,
  VoltaraBlueprint,
} from "./voltaraPipeline";

// so TypeScript doesn't complain about window.ethereum
declare global {
  interface Window {
    ethereum?: any;
  }
}

export async function mintOracleVisionFromPipeline(params: {
  scan: VoltaraScan;
  mined: VoltaraMined;
  blueprint: VoltaraBlueprint;
  mintValueEth?: string; // e.g. "0.01" or "0"
}): Promise<string> {
  if (typeof window === "undefined") {
    throw new Error("Not in a browser environment.");
  }

  if (!window.ethereum) {
    throw new Error("No wallet detected (window.ethereum missing).");
  }

  if (
    ORACLE_VISION_ADDRESS ===
    "0x0000000000000000000000000000000000000000"
  ) {
    throw new Error("OracleVision address not set yet.");
  }

  const { scan, mined, blueprint, mintValueEth } = params;

  // Connect to wallet
  const provider = new ethers.BrowserProvider(window.ethereum as any);
  const signer = await provider.getSigner();

  const contract = new ethers.Contract(
    ORACLE_VISION_ADDRESS,
    ORACLE_VISION_ABI,
    signer
  );

  // Pack the pipeline data into JSON
  const rawPayload = JSON.stringify(
    {
      scan,
      mined,
      blueprint,
      timestamp: Date.now(),
    },
    null,
    2
  );

  const overrides: any = {};
  if (mintValueEth && mintValueEth !== "0") {
    overrides.value = ethers.parseEther(mintValueEth);
  }

  const tx = await contract.mintVision(
    blueprint.title,
    blueprint.summary,
    rawPayload,
    overrides
  );

  const receipt = await tx.wait();
  return String(receipt.hash);
}
