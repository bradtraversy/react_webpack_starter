const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const settings = {
    distPath: path.join(__dirname, 'dist'),
    srcPath: path.join(__dirname, 'src')
};

function srcPathExtend(subpath) {
    return path.join(settings.srcPath, subpath)
}

const config = {
    entry:  srcPathExtend('index.tsx'),
    output: {
        path: settings.distPath,
        filename: 'index_bundle.js',
        sourceMapFilename: 'index_bundle.map'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
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
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: [
                                require('autoprefixer')()
                            ],
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
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
        new CleanWebpackPlugin([settings.distPath], {
            verbose: true
        }),
        new HtmlWebpackPlugin({
            template: srcPathExtend('index.html')
        })
    ]
};

module.exports = (env, options) => {
    config.mode = options.mode;

    if (options.mode === 'development') {
        config.devtool = 'source-map';
    }

    return config;
};
