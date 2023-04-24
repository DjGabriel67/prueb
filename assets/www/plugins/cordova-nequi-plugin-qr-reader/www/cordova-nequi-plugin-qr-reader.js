cordova.define("cordova-nequi-plugin-qr-reader.cordova-nequi-plugin-qr-reader", function(require, exports, module) {
var exec = require('cordova/exec'),
    CONSTANTS = {
        PLUGIN_NAME: 'QrReaderPlugin',
        LAUNCH_QR_LECTOR: 'launchQrReader',
        FINISH_QR_LECTOR: 'finishQrReader'
    };

function QrReader() {

    var api = {
        launchQrReader: launchQrReader,
        finishQrReader: finishQrReader
    };

    return api;

    /**
     * Funcion lanzar el lector de QR nativo
     * @method launchQrReader
     * @private
     */
    function launchQrReader(view, button, timeToClose, successCB, failureCB) {
        exec(successCB, failureCB, CONSTANTS.PLUGIN_NAME, CONSTANTS.LAUNCH_QR_LECTOR, [view, button, timeToClose]);
    }

    /**
     * Funcion finalizar el lector de QR nativo
     * @method finishQrReader
     * @private
     */
    function finishQrReader(successCB, failureCB) {
        exec(successCB, failureCB, CONSTANTS.PLUGIN_NAME, CONSTANTS.FINISH_QR_LECTOR, []);
    }

}

module.exports = new QrReader();
});
