import antfu from "@antfu/eslint-config";

import withNuxt from "./.nuxt/eslint.config.mjs";

// TODO: make eslint-plugin-tailwindcss work

export default withNuxt(antfu(
  {
    type: "app",
    vue: true,
    typescript: true,
    formatters: true,
    stylistic: {
      indent: 2,
      semi: true,
      quotes: "double",
    },
    ignores: ["**/migrations/*"],
  },
  {
    rules: {
      "ts/consistent-type-definitions": ["error", "type"],
      "no-console": ["warn"],
      "antfu/no-top-level-await": ["off"],
      "node/prefer-global/process": ["off"],
      "node/no-process-env": ["error"],
      "perfectionist/sort-imports": ["error", {
        tsconfig: {
          rootDir: ".",
        },
      }],
      "unicorn/filename-case": ["error", {
        case: "kebabCase",
        ignore: ["README.md"],
      }],
    },
  },
));
// your custom flat configs go here, for example:
// {
//   files: ['**/*.ts', '**/*.tsx'],
//   rules: {
//     'no-console': 'off' // allow console.log in TypeScript files
//   }
// },
// {
//   ...
// }
