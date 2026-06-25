import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/investor-protoype-",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
