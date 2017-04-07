var config = require('./base.js');

config.proxy = [{
    context: ['/rest/**'],
    target: "https://stage.healthydirections.com/",
    secure: false
}];

module.exports = config;