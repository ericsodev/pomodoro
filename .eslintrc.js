module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard-with-typescript"],
  overrides: [],
  // parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react", "unused-imports"],
  rules: {
    quotes: [2, "double", { avoidEscape: true }],
    "space-before-function-paren": [2, "never"],
    "comma-dangle": [2, "always-multiline"],
    semi: [2, "always"],
    "@typescript-eslint/quotes": [2, "double"],
    "@typescript-eslint/space-before-function-paren": ["warn", "never"],
    "@typescript-eslint/semi": [2, "always"],
    "@typescript-eslint/comma-dangle": "off",
    "unused-imports/no-unused-imports-ts": 2,
    "react/react-in-jsx-scope": "off",
  },
};
