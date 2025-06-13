import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    // !! Danger: This should not be used for production builds unless you
    // absolutely know what you are doing.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
