const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    polyfills: "./src/polyfills.js",
    index: "./src/index.js"
  },
  plugins: [
    // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Production"
    }),
    new webpack.ProvidePlugin({
      join: ["lodash", "join"]
    })
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
