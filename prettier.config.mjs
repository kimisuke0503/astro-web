/** @type {import("prettier").Options} */

const config = {
  arrowParens: "avoid",
  semi: true,
  tabWidth: 2,
  printWidth: 80,
  singleQuote: false,
  jsxSingleQuote: false,
  trailingComma: "es5",
  bracketSpacing: true,
  endOfLine: "lf",
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  tailwindConfig: "./tailwind.config.cjs",
  overrides: [
    {
      files: "**/*.astro",
      options: { parser: "astro" },
    },
  ],
};

export default config;
