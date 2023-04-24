cordova.define("cordova-nequi-plugin-toast.cordova-nequi-plugin-toast", function(require, exports, module) {
var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'cordova-nequi-plugin-toast', 'coolMethod', [arg0]);
};

});
