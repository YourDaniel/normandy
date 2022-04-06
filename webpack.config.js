const webpack = require('webpack');
const NODE_ENV = process.env.NODE_ENV || 'development';
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const TerserPlugin = require('terser-webpack-plugin');
const autoprefixer = require('autoprefixer');
const isProduction = NODE_ENV !== 'development';
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

if (isProduction) {
    module.exports = {
        mode: 'production',
        context: __dirname + "/src",
        entry: {
            index: './index.js'
        },
        output: {
            path: __dirname + "/build",
            publicPath: '/',
            filename: "js/bundle_[contenthash].js"
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader']
                },
                {
                    test: /\.(css|scss|sass)$/,
                    use: [
                        MiniCssExtractPlugin.loader,
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
                
                {test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i, type: 'asset/resource'},
                
                // Fonts and SVGs: Inline files
                {test: /\.(woff(2)?|eot|ttf|otf|)$/, type: 'asset/inline'},
            ]
        },
        
        plugins: [
            new webpack.NoEmitOnErrorsPlugin(),
            new CleanWebpackPlugin(),
            new webpack.DefinePlugin({
                NODE_ENV: JSON.stringify(NODE_ENV),
                LANG: JSON.stringify('ru')
            }),
            new MiniCssExtractPlugin({
                filename: "css/style[contenthash].css"
            }),
            new HtmlWebpackPlugin({
                template: './markup/index.html'
            }),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery'
            }),
        ],
        
        optimization: {
            minimizer: [
                new TerserPlugin({
                    exclude: /\/node_modules/,
                    terserOptions: {
                        compress: {
                            drop_console: true,
                        },
                    },
                }),
            ],
        },
    };
} else {
    
    module.exports = {
        mode: 'development',
        context: __dirname + "/src",
        entry: [__dirname + '/src/index.js'],
        output: {
            path: __dirname + "/build",
            filename: "js/bundle_[hash].js",
            publicPath: '/',
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
                                plugins: !isProduction && [
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
                
                
                {test: /\.(?:ico|gif|png|jpg|jpeg|svg|pdf|mp3|wav)$/i, type: 'asset/resource'},
                
                // Fonts and SVGs: Inline files
                {test: /\.(woff(2)?|eot|ttf|otf|)$/, type: 'asset/inline'},
            
            
            ]
        },
        
        plugins: [
            new CleanWebpackPlugin(),
            new webpack.NoEmitOnErrorsPlugin(),
            new ReactRefreshWebpackPlugin(),
      
            // new BundleAnalyzerPlugin({
            //     analyzerMode: 'static'
            // }),
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: path.resolve(__dirname, 'src', 'assets'),
                        to: 'assets',
                        globOptions: {
                            ignore: ['*.DS_Store'],
                        },
                    },
                ],
            }),
            
            new webpack.DefinePlugin({
                NODE_ENV: JSON.stringify(NODE_ENV),
                LANG: JSON.stringify('ru')
            }),
            new HtmlWebpackPlugin({
                favicon: __dirname + '/src/files/favicon.png',
                template: './markup/index.html',
                filename: 'index.html',
            }),
            
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery'
            })
        ],
        
        
        devServer: {
            compress: true,
            port: 3000,
            open: true,
            static: {
                directory: path.join(__dirname, 'build'),
            },
            historyApiFallback: true
            
        },
    
        devtool: 'inline-source-map',
        
    };
}
