const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require('webpack');

module.exports = {
  mode: "development",
  entry: {
    about: "./src/views/about/about.js",
    menu: "./src/views/menu/menu.js",
    contacts: "./src/views/contacts/contacts.js",
  },
  output: {
    path: path.resolve(__dirname, "public"),
<<<<<<< HEAD
    filename: "app.js",
    // assetModuleFilename: "assets/[name][ext]",
=======
    filename: "[name].js",
    assetModuleFilename: "assets/[name][ext]",
>>>>>>> 00233b4a9b6147fcb348f8f4e47b5b01ee55d45a
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
    new HtmlWebpackPlugin({
      inject:true,
      title: "Metropolis | Contacts",
      template: "src/views/contacts/contactsPage.html",
      filename: "contactsPage.html",
      chunks: "contacts",
    }),
  ],
};
