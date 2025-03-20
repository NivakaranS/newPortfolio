import type { NextConfig } from "next";
import { webpack } from "next/dist/compiled/webpack/webpack";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    config.resolve.fallback = {fs: false, net: false, tls: false}
    return config
  },
  future: {
    webpack5: true,
  },
};

module.exports = {
  nextConfig
}
