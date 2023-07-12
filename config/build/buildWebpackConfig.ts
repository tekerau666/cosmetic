import {BuildOptions} from "./types/config";
import webpack from "webpack";
import path from "path";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildPlugins} from "./buildPlugins";


export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { paths, mode }: BuildOptions = options;
    return {
        mode,
        entry: paths.entry,
        module: {
            rules: buildLoaders()
        },
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(options),
        resolve: buildResolvers(options),
    }
}