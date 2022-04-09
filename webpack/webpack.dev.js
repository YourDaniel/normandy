const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const paths = require('./paths')
const autoprefixer = require("autoprefixer");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        compress: true,
        port: 3000,
        open: true,
        hot: true,
        static: {
            directory: paths.build,
        },
        historyApiFallback: true
    },
    
    module: {
        rules: [
            {
                test: /\.[js]sx?$/,
                exclude: /node_modules/,
                use: [
            
                    {
                        loader: 'babel-loader',
                        options: {
                            plugins: [
                                'react-refresh/babel',
                            ].filter(Boolean),
                        },
                    },
                ],
            },
            {
                test: /\.(css)$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                ident: 'postcss',
                                plugins: [autoprefixer],
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 2,
                            modules: {
                                localIdentName: '[name]_[local]_[contenthash:base64:5]',
                        
                            }
                        },
                    },
                    'sass-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                ident: 'postcss',
                                plugins: [autoprefixer],
                            },
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new ReactRefreshWebpackPlugin(),
    ],
})
