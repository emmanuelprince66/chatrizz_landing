import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // Add this line
  trailingSlash: true, // Optional but recommended
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
