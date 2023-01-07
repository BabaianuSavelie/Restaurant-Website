const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "app.js",
    // assetModuleFilename: "assets/[name][ext]",
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
        generator: {
          filename: "assets/[name][ext]",
        },
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
      title: "Metropolis",
      template: "src/template.html",
    }),
  ],
};
