cordova.define("cordova-nequi-plugin-civica.cordova-nequi-plugin-civica", function(require, exports, module) {
const exec = require('cordova/exec'),
    constants = Object.freeze({
        PLUGIN_NAME: 'CivicaPlugin',
        HAVE_NFC: 'haveNFC',
        INIT_HANDLER: 'init',
        STOP_HANDLER: 'stop'
    });
function CivicaPlugin() {
    /**
     * Property to export
     * @property api
     * @type object
     */
    api = {
        init: init,
        haveNFC: haveNFC,
        stop: stop
    };

    return api;


    function haveNFC(successCallback, errorCallback) {
        exec(successCallback, errorCallback, constants.PLUGIN_NAME, constants.HAVE_NFC, []);
    }

    function init(successCallback, errorCallback) {
        exec(successCallback, errorCallback, constants.PLUGIN_NAME, constants.INIT_HANDLER, []);
    }

    function stop(successCallback, errorCallback) {
        exec(successCallback, errorCallback, constants.PLUGIN_NAME, constants.STOP_HANDLER, []);
    }

}

module.exports = new CivicaPlugin();

});
