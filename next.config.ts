import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Optimizaciones para Firebase Hosting
  output: "export",
  images: {
    unoptimized: true,
  },
  swcMinify: true,
  compress: true,
  productionBrowserSourceMaps: false,
};

export default nextConfig;
