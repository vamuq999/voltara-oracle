// app/lib/abi/oracleVision.ts

// TODO: after you deploy OracleVision, paste the real address here.
export const ORACLE_VISION_ADDRESS =
  "0x0000000000000000000000000000000000000000";

// Minimal ABI with a single mint function.
// Adjust the function name / inputs if your Solidity is different.
export const ORACLE_VISION_ABI = [
  {
    inputs: [
      { internalType: "string", name: "title", type: "string" },
      { internalType: "string", name: "summary", type: "string" },
      { internalType: "string", name: "rawPayload", type: "string" },
    ],
    name: "mintVision",
    outputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    stateMutability: "payable", // change to "nonpayable" if your mint is free
    type: "function",
  },
];
