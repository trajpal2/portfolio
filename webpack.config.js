const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  const isProd = argv.mode === "production";

  return {
    entry: path.resolve(__dirname, "src/index.jsx"),
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: isProd ? "js/[name].[contenthash:8].js" : "js/bundle.js",
      clean: true,
      publicPath: "/",
    },
    resolve: {
      extensions: [".js", ".jsx"],
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@shared": path.resolve(__dirname, "src/shared"),
        "@pages": path.resolve(__dirname, "src/pages"),
      },
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: "babel-loader",
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.pdf$/i,
          type: "asset/resource",
          generator: {
            filename: "[name][ext]",
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public/index.html"),
        favicon: false,
      }),
    ],
    devServer: {
      static: {
        directory: path.resolve(__dirname, "public"),
      },
      historyApiFallback: true,
      port: 3000,
      hot: true,
      open: false,
      proxy: [
        {
          context: ["/api"],
          target: "http://localhost:5050",
        },
      ],
    },
    devtool: isProd ? "source-map" : "eval-source-map",
  };
};
