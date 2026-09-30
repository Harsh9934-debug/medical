import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/blog", destination: "/", permanent: true },
      { source: "/blogs", destination: "/", permanent: true },
      { source: "/blogs/:slug*", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
