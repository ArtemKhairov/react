import webpack from "webpack";
// Types
import { BuildOptions } from "./types/config";
// Configuration Builders
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildPlugins } from "./buildPlugins";

export function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { paths, mode } = options;
  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    plugins: buildPlugins(options),
  };
}
