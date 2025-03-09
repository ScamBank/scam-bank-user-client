import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/accounts",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
