// Webpack
import webpack from "webpack";
// Plugins
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { BuildOptions } from "./types/config";

export function buildPlugins({
  paths,
  isDev,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  const plugins = [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    // Определение глобальных переменных
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
  ];
  if (isDev) {
    // Analyze Bundle Size
    plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }));
    // HMR
    // Inject code, components without reloading
    plugins.push(new webpack.HotModuleReplacementPlugin());
  }
  return plugins;
}
