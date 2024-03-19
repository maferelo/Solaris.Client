module.exports = {
  root: true,
  extends: ["universe/native", "universe/shared/typescript-analysis"],
  plugins: ["jest", "perfectionist"],
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.d.tsx"],
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  ],
  env: {
    node: true,
    "jest/globals": true,
  },
  rules: {
    // Rule reference: https://eslint.org/docs/latest/rules/
    "perfectionist/sort-interfaces": "error",
    "no-restricted-imports": [
      "error",
      {
        patterns: ["@/features/*/*"],
      },
    ],
    "import/no-cycle": "error",
  },
  globals: {
    // Detox
    device: false,
    expect: false,
    waitFor: false,
    element: false,
    by: false,
  },
};
