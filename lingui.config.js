/** @type {import('@lingui/conf').LinguiConfig} */
module.exports = {
  locales: ["en", "fr"],
  sourceLocale: "en",
  fallbackLocales: {
    default: "en",
  },
  format: "po",
  formatOptions: {
    lineNumbers: false,
  },
  catalogs: [
    {
      path: "<rootDir>/translations/messages/{locale}",
      include: ["<rootDir>"],
      exclude: ["**/.next/**", "**/*.d.ts", "**/node_modules/**"],
    },
  ],
};
