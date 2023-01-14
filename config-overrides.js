const { override, addBabelPlugins } = require("customize-cra");

module.exports = override(
  ...addBabelPlugins([
    "module-resolver",
    {
      alias: {
        "@ducks": "./src/ducks",
      },
    },
  ])
);
