const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
    distPath: path.join(__dirname, 'dist'),
    srcPath: path.join(__dirname, 'src')
};

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: config.distPath,
        filename: 'index_bundle.js',
        sourceMapFilename: 'index_bundle.map'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ["babel-loader", "ts-loader", "tslint-loader"]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: [require('autoprefixer')()]
                        }
                    }
                ]
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "fonts/[name].[ext]",
                    },
                },
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'assets/'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin([config.distPath], {verbose: true}),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
    ]
};
