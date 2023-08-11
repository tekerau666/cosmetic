module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
      "standard-with-typescript",
      "plugin:react/recommended",
      "plugin:storybook/recommended",
      "plugin:i18next/recommended",
  ],
  overrides: [
    {
      files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
        'max-len': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    "project": "./tsconfig.json"
    // "tsconfigRootDir": __dirname
  },

  plugins: [
      "react",
      ["i18next"],
      '@typescript-eslint',
      "react-hooks",
  ],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "warn",
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-misused-promises": "warn",
    "@typescript-eslint/no-floating-promises": "warn",
    "@typescript-eslint/ban-ts-comment": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/naming-convention": "warn",
    "i18next/no-literal-string": "error",
    "eslint eol-last": ["error", "always"],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
  },
  globals: {
    __IS_DEV__: true,
    __API__: true
  }
};