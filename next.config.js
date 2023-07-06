/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {},
  optimizeFonts: true,
  compress: true,
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    swcPlugins: [
      ["@lingui/swc-plugin", {}],
    ]
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  scope: "/",
  sw: "service-worker.js"
});

module.exports = withPWA(nextConfig);
