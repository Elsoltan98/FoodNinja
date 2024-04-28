// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error

import { ESLintConfig } from "@eslint/eslintrc";

const config: ESLintConfig = {
  extends: ["plugin:node/recommended"],
  rules: {
    "no-var-requires": "off",
    "node/no-missing-require": "off",
  },
};

export default config;
