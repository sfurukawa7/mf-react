const path = require("path");
const { override, addBabelPlugins, addWebpackAlias } = require("customize-cra");

module.exports = override(
  ...addBabelPlugins([
    "module-resolver",
    {
      alias: {
        "@ducks": "./src/ducks",
      },
    },
  ]),
  addWebpackAlias({
    "@ducks": path.resolve(__dirname, "./src/ducks"),
  })
);
