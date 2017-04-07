var webpackConfig = require('./webpack.config.js'),
    stageServerConfig = require('./servers/stage.js');

webpackConfig.devServer = stageServerConfig;

module.exports = webpackConfig;
