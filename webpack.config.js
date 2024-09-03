import { resolve as _resolve, join } from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export const mode = "development";
export const entry = "./src/index.tsx";
export const output = {
  filename: "bundle.js",
  path: _resolve(__dirname, "dist"),
};
export const resolve = {
  extensions: [".ts", ".tsx", ".js"],
};
export const module = {
  rules: [
    {
      test: /\.tsx?$/,
      use: "ts-loader",
      exclude: /node_modules/,
    },
    {
      enforce: "pre",
      test: /\.js$/,
      loader: "source-map-loader",
    },
  ],
};
export const devtool = "source-map";
export const devServer = {
  static: {
    directory: join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
