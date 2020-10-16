module.exports = {
  presets: [
    ["@babel/preset-typescript",{
      allowNamespaces: true,
      onlyRemoveTypeImports : true,
    },],
    [
      "@babel/preset-env",
      {
        useBuiltIns: "entry", // aka polyfills
        corejs: 3,
      },
    ],
  ],
}