var webpackConfig = require('./webpack.production.config.js'),
    devServerConfig = require('./servers/dev.js');

devServerConfig.port = 8181;
devServerConfig.compress = true;
webpackConfig.devServer = devServerConfig;

module.exports = webpackConfig;
