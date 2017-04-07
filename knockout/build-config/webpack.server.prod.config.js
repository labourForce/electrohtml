var webpackConfig = require('./webpack.production.config.js'),
    serverConfig = require('./servers/dev.js');

serverConfig.compress = true;
webpackConfig.devServer = serverConfig;

module.exports = webpackConfig;
