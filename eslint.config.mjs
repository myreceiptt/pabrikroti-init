import js from "@eslint/js";
import next from "@next/eslint-plugin-next";
import tseslint from "typescript-eslint";

export default [
  {
    ignores: [".next/**", "node_modules/**", "dist/**", "build/**"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  next.configs["core-web-vitals"],
];
