cordova.define("cordova-nequi-plugin-common.cordova-nequi-plugin-common", function(require, exports, module) {
var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'cordova-nequi-plugin-common', 'coolMethod', [arg0]);
};

});
