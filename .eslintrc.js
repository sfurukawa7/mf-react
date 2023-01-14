module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "react-hooks", "import"],
  rules: {
    "react/jsx-filename-extension": ["warn", { extensions: [".tsx"] }],
    "react/function-component-definition": ["warn", { namedComponents: "arrow-function" }],
    "react/react-in-jsx-scope": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/self-closing-comp": [
      "error",
      {
        component: true,
        html: true,
      },
    ],
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "import", next: "const" },
      { blankLine: "always", prev: "*", next: "export" },
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "never", prev: "const", next: "const" },
    ],
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "parent", "sibling", "index", "object", "type"],
        pathGroups: [
          {
            pattern: "{react,react-dom/**,react-router-dom,next/**}",
            group: "builtin",
            position: "before",
          },
          {
            pattern: "{@ducks,@ducks/**}",
            group: "parent",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        alphabetize: {
          order: "asc",
        },
        "newlines-between": "always",
      },
    ],
  },
};
