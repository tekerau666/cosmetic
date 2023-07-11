import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";


export function buildLoaders(): webpack.RuleSetRule[ ] {
    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: true
                }
            },
            "sass-loader",
        ]
    }

    const typescriptLoader =  {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node-modules/,
    }
    return [
       typescriptLoader,
        cssLoader,
    ]
}