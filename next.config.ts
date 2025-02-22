import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/favorites",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
