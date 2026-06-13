import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/products/vox-reception",
        destination: "/products/vaidya",
        permanent: true,
      },
      {
        source: "/products/voz-reception",
        destination: "/products/vaidya",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
