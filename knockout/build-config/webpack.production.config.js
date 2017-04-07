var webpack = require('webpack'),
    config = require('./config/base.js'),
    CompressionPlugin = require('compression-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
        output: {
            comments: false
        }
    }),
    new CompressionPlugin({
        asset: '[file].gz[query]',
        algorithm: 'gzip',
        test: /\.js$/,
        threshold: 10240,
        minRatio: 0.8
    })
);

module.exports = config;