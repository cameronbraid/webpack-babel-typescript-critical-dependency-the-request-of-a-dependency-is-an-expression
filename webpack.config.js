const path = require("path")

module.exports = {

  mode: "development",

  entry: {
    "entry": "./src/entry"
  },

  resolve: {
    extensions: [".ts", ".js"],
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["awesome-typescript-loader"],
      },
    ],
  },

  devServer : {
    hot: false,
    port: 3000,
    host: "0.0.0.0",
    writeToDisk: true,
  }
}