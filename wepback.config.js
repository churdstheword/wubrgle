const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        app: './src/index.js'
    },
    target: 'web',
    output: {
        filename: "wubrgle.bundle.js",
        path: path.resolve(__dirname, "dist"),
        library: {
            name: 'wubrgle',
            type: 'umd'
        }
    },
    module: {
        rules: [
            {
                test: /\.(mjs|js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader:
                        'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-react',
                            '@babel/preset-env',
                        ],
                        plugins: [
                            '@babel/plugin-transform-runtime',
                        ],
                    },
                },
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.mjs', '.jsx']
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'APP_VERSION': JSON.stringify('0.1.0')
            }
        })
    ],

    devServer: {
        host: '0.0.0.0',
        port: '3000',
        static: {
            publicPath: path.resolve(__dirname, 'dist'),
            directory: path.resolve(__dirname, 'public'),
        },
        compress: true,
    }

}
