import webpack from 'webpack'
import {buildPlugins} from "./config/build/buildPlugins";
import {buildLoaders} from "./config/build/buildLoaders";
import {buildResolvers} from "./config/build/buildResolvers";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildPath} from "./config/build/types/config";
import path from "path";

export default () => {

const paths: BuildPath = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
}
const mode = 'development';
const isDev = mode === 'development';
const config: webpack.Configuration = buildWebpackConfig({
    mode: "development",
    paths,
    isDev
})
    return config
}
