module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'max-len': ['error', {
      code: 150,
      ignoreComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    }],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};

// /* eslint-env node */
// require("@rushstack/eslint-patch/modern-module-resolution");

// const path = require("node:path");
// const createAliasSetting = require("@vue/eslint-config-airbnb/createAliasSetting");

// module.exports = {
//   root: true,
//   env: {
//     node: true,
//   },
//   extends: [
//     "plugin:vue/essential",
//     // "@vue/eslint-config-airbnb", // <-- added
//     // "eslint:recommended",
//     "@vue/eslint-config-prettier",
//   ],
//   parserOptions: {
//     parser: "@babel/eslint-parser",
//   },
//   rules: {
//     "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
//     "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
//   },
//   settings: {
//     ...createAliasSetting({
//       "@assets": `${path.resolve(__dirname, "./src/assets/")}`,
//       "@components": `${path.resolve(__dirname, "./src/components/")}`,
//       "@config": `${path.resolve(__dirname, "./src/config/")}`,
//       "@lib": `${path.resolve(__dirname, "./src/lib/")}`,
//       "@router": `${path.resolve(__dirname, "./src/router/")}`,
//       "@store": `${path.resolve(__dirname, "./src/store/")}`,
//       "@styles": `${path.resolve(__dirname, "./src/styles/")}`,
//       "@views": `${path.resolve(__dirname, "./src/views/")}`,
//       "@atoms": `${path.resolve(__dirname, "./src/atoms/")}`,
//       "@molecules": `${path.resolve(__dirname, "./src/molecules/")}`,
//       "@organisms": `${path.resolve(__dirname, "./src/organisms/")}`,
//       "@templates": `${path.resolve(__dirname, "./src/templates/")}`,
//     }),
//   },
// };
