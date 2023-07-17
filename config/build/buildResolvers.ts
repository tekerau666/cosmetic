import {ResolveOptions} from "webpack";
import {BuildOptions} from "./types/config";
import path from "path";


export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node-modules'],
        mainFiles: ['index'],
        alias: {
            '@': path.resolve(__dirname, 'src/'),
        }
    }
}