/** @type {import('@lingui/conf').LinguiConfig} */
module.exports = {
  locales: ["fr", "en"],
  sourceLocale: "en",
  format: "po",
  formatOptions: {
    lineNumbers: false,
  },
  catalogs: [
    {
      path: "<rootDir>/src/translations/messages/{locale}",
      include: ["<rootDir>"],
      exclude: ["**/.next/**", "**/*.d.ts", "**/node_modules/**"],
    },
  ],
};
