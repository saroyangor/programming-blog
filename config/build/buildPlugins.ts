import webpack from 'webpack';
import HTMLWebpackPlugin from "html-webpack-plugin";
import {BuildOptions} from "./types/config";

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
  const plugins = [
    new HTMLWebpackPlugin({
      template: paths.html
    }),
    new webpack.ProgressPlugin(),
  ];

  return plugins;
}
