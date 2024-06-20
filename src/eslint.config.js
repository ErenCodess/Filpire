import js from "@eslint/js";

export default [
  js.configs.recommended,

  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
      "import/no-cycle": 0,
      "no-console": 0,
      "linebreak-style": 0,
      "react/state-in-constructor": 0,
    },
  },
];

module.exports = {
  env: {
    browser: true,
    es2023: true,
  },
  parserOptions: {
    ecmaFfeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  Plugin: {
    react,
  },
  extends: {
    Plugin: react / recommended,
    airbnb,
  },
};
