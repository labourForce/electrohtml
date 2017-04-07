var path = require('path'),
    vendorList = require('./vendor.js'),
    aliasList = require('./alias.js'),
    pluginList = require('./plugins.js');

module.exports = {
    entry: {
        vendor: vendorList,
        app: ['src/scripts/app.js']
    },
    output: {
        filename: 'assets/js/[name].js',
        publicPath: '/',
        path: path.join(__dirname, '../../dist/')
    },
    resolve: {
        modules: [
            'node_modules',
            'bower_components',
            '.'
        ],
        extensions: ['.js', '.html'],
        alias: aliasList
    },
    module: {
        loaders: [
            {
                test: /[\\\/]bower_components[\\\/]modernizr[\\\/]index\.js$/,
                loader: 'imports-loader?this=>window!exports-loader?window.Modernizr'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader?presets[]=es2015'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader?name=assets/images/[name].[ext]'
            },
            // {
            //     test: /\.css$/,
            //     loader: 'css-loader?name=assets/css/[name].css'
            // },
            // {
            //     test: /\.css$/,
            //     loader: ExtractTextPlugin.extract('style', 'css|file')
            // },
            {
                test: /\.html$/,
                loader: 'html-loader?root=src'
            }
        ]
    },
    plugins: pluginList
}