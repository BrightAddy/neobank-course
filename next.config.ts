import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/signup",
        permanent: false, // Set to false so it handles dynamic auth routing properly
      },
    ];
  },
};

export default nextConfig;
