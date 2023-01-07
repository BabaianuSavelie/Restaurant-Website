const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require('webpack');

module.exports = {
  mode: "development",
  entry: {
    about: "./src/views/about/about.js",
    menu: "./src/views/menu/menu.js"
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].js",
    assetModuleFilename: "assets/[name][ext]",
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(scss)$/,
        use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpg|svg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  devServer: {
    watchFiles: ["./src/", "./public/index.html"],
    port: 3000,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject:true,
      title: "Metropolis | About Us",
      template: "src/views/about/aboutPage.html",
      filename: "aboutPage.html",
      chunks: "about",
    }),
    new HtmlWebpackPlugin({
      inject:true,
      title: "Metropolis | Menu",
      template: "src/views/menu/menuPage.html",
      filename: "menuPage.html",
      chunks: "menu",
    }),
  ],
};
