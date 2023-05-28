const { locales } = require("./lingui.config.js");

/**
 * @returns {import('next').NextConfig}
 */
const nextConfig = () => {
  return {
    compress: true,
    swcMinify: true,
    reactStrictMode: true,
    experimental: {
      appDir: true,
      swcPlugins: [
        ["@lingui/swc-plugin", {}],
      ],
    },
    i18n: {
      locales: locales,
      defaultLocale: "fr",
    },
    typescript: {
      ignoreBuildErrors: true,
    },
  };
};

module.exports = nextConfig;
