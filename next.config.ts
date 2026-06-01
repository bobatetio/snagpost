import type { NextConfig } from "next";

const base = process.env.GITHUB_ACTIONS ? "/snagpost" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: base,
  assetPrefix: base,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: base,
  },
};

export default nextConfig;
