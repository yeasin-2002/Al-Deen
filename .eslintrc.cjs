module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "prettier",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:@tanstack/eslint-plugin-query/recommended",
    "plugin:@typescript-eslint/strict",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "node_modules"],
  parser: "@typescript-eslint/parser",
  plugins: [
    "react-refresh",
    "@tanstack/query",
    "perfectionist",
    "unicorn",
    "@typescript-eslint",
  ],
  rules: {
    "@typescript-eslint/no-empty-interface": 0,
  },
  root: true,
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        "next/core-web-vitals",
        "plugin:@tanstack/eslint-plugin-query/recommended",
      ],
    },
  ],
};
