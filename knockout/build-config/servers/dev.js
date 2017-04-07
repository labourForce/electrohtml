var config = require('./base.js');

config.proxy = [{
    context: ['/rest/**'],
    target: "https://dev.healthydirections.com/",
    secure: false
}];

module.exports = config;