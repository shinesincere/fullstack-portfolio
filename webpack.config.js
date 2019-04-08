const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const CLIENT = path.resolve(__dirname, "src/client");
const BUILD = path.resolve(__dirname, "build");

module.exports = {
  entry: {
    main: CLIENT + "/js/index.js"
  },
  output: {
    publicPath: "/",
    path: BUILD,
    filename: "bundle.js"
  },
  devServer: {
    contentBase: BUILD
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: { loader: "html-loader", options: { minimize: true } }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { presets: ["@babel/env", "@babel/react"] }
        }
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ["file-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: CLIENT + "/text/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  }
};