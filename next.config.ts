import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config: any) => {
    // Stub out problematic Node modules used in testing deps
    const stub = path.resolve(__dirname, "stubs/empty.js");

    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "thread-stream": stub,
      "pino-pretty": stub,
      encoding: stub,
    };

    return config;
  },
};

export default nextConfig;
