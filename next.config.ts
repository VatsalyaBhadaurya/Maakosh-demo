import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Maakosh-demo",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
