/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/scg",
  assetPrefix: "/scg",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
