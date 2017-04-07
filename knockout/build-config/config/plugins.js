var webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity
        }),
        // new ExtractTextPlugin('style.css', {
        //     allChunks: true
        // }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            // assets: {
            //     'style'  : '[name].css'
            // }
        }),

        new CopyWebpackPlugin([
            {
                context: 'src/styles/',
                from: '**/*.css',
                to: 'assets/css/'
            },
            {
                context: 'src/fonts/',
                from: '**/*.*',
                to: 'assets/fonts/'
            },
            {
                context: 'src/images/',
                from: '**/*.*',
                to: 'assets/images/'
            }
        ]),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ];