module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  globals: {
    // Vitest globals
    describe: "readonly",
    it: "readonly",
    test: "readonly",
    expect: "readonly",
    beforeAll: "readonly",
    afterAll: "readonly",
    beforeEach: "readonly",
    afterEach: "readonly",
    vi: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "react-refresh"],
  rules: {
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
  settings: {
    react: {
      version: "19.0",
    },
  },
  ignorePatterns: ["dist", ".eslintrc.cjs"],
};
