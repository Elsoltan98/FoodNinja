/* eslint-disable no-undef */
// @ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const eslint = require("@eslint/js");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const tseslint = require("typescript-eslint");
module.exports = tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
);
