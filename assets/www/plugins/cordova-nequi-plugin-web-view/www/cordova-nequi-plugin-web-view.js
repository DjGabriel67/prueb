cordova.define("cordova-nequi-plugin-web-view.cordova-nequi-plugin-web-view", function(require, exports, module) {
var exec = require('cordova/exec'),
    CONSTANTS = {
        PLUGIN_NAME: 'WebViewPlugin',
        LAUNCH_MAP: 'launchWebView'
    };

function WebViewPlugin() {

    var api = {
        launchWebView: launchWebView
    };

    return api;

    /**
     * Funcion para lanzar un webView
     * @method launchWebView
     * @params {String} url -> url a abrir
     * @params {String} titleView -> titulo del webView
     * @private
     */
    function launchWebView(url, titleView, loadLabel, optionalHeaders, successCB, failureCB) {
        exec(successCB, failureCB, CONSTANTS.PLUGIN_NAME, CONSTANTS.LAUNCH_MAP, [url, titleView, loadLabel, optionalHeaders]);
    }

}

module.exports = new WebViewPlugin();

});
