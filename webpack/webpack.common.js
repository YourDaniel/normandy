const webpack = require('webpack');
const paths = require('./paths')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    context: paths.src,
    entry: [paths.src + '/index.js'],
    output: {
        path: paths.build,
        filename: 'js/[name].[contenthash].bundle.js',
        publicPath: './',
        assetModuleFilename: '[path][name].[ext]?[hash]'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: paths.public,
                    to: paths.build + '/public',
                    globOptions: {
                        ignore: ['*.DS_Store'],
                    },
                    noErrorOnMissing: true,
                },
            ],
        }),
        new HtmlWebpackPlugin({
            title: 'New Project',
            favicon: paths.public + '/favicon.ico',
            template: paths.src + '/markup/index.html', // template file
            filename: 'index.html', // output file
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|svg|pdf|mp3|wav)$/i,
                type: 'asset/resource',
                
                
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|)$/,
                type: 'asset/inline',
                
                
            },
        ],
    },
    resolve: {
        alias: {
            source: paths.src,
            public: paths.public,
        },
    },
}
