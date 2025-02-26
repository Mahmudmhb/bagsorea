import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "***", // Replace with the actual hostname
        port: "", // Leave empty if no specific port is needed
      },
    ],
  },
};

export default nextConfig;
