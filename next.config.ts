import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // Enables static export
  basePath: "/TextAnalyzer", // Replace with your GitHub repo name
  assetPrefix: "/TextAnalyzer/",
};

export default nextConfig;

module.exports = nextConfig;
