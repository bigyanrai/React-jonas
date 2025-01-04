// .eslintrc.cjs
module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "react-app",
    "plugin:@typescript-eslint/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect", // Automatically detect the React version
    },
  },
  rules: {
    "react/react-in-jsx-scope": "off", // Disable this rule
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "no-console": "warn",
    "no-unused-vars": "warn",
    "react/prop-types": "off",
  },
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  plugins: ["react", "@typescript-eslint"],
};
