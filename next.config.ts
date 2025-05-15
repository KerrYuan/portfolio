//const repoName = "portfolio";
const isProd = process.env.NODE_ENV === "production";

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: "export",
  assetPrefix: isProd ? "/portfolio/" : "",
  basePath: isProd ? "/portfolio" : "",
  //trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
