import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "adminpanel.inmedsolution.com",
  //       pathname: "/**",
  //     },
  //   ],
  // },
  images: {
    domains: ['adminpanel.inmedsolution.com'],
  },
};

export default nextConfig;
