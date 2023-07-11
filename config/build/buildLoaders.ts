import webpack from "webpack";


export function buildLoaders(): webpack.RuleSetRule[ ] {
    const typescriptLoader =  {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node-modules/,
    }
    return [
       typescriptLoader,
    ]
}