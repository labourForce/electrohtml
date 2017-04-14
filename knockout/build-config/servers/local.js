var config = require('./base.js');

config.proxy = [{
    context: ['/rest/**'],
    target: "http://192.168.1.207:8181",
    secure: false
}];

module.exports = config;