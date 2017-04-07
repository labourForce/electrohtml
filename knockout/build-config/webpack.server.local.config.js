var webpackConfig = require('./webpack.config.js'),
    localServerConfig = require('./servers/local.js');

webpackConfig.devServer = localServerConfig;

module.exports = webpackConfig;
