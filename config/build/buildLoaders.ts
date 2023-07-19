import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";


export function buildLoaders(): webpack.RuleSetRule[ ] {
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack']
    }

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

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node-modules/,
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader'
            }
        ]
    }
    return [
        typescriptLoader,
        cssLoader,
        svgLoader,
        fileLoader,
    ]
}