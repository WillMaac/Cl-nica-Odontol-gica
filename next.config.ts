import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["images.unsplash.com"],
  },

  maxWidth: {
        '1800': '1800px',
      },
};

export default nextConfig;
