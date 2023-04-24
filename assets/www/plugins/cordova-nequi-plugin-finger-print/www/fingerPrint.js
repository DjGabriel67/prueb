cordova.define("cordova-nequi-plugin-finger-print.fingerPrint", function(require, exports, module) {
var exec = require('cordova/exec'),
    PLUGIN_NAME = 'FingerPrintPlugin',
    IS_AVAILABLE = 'isAvailable',
    VERIFY_FINGERPRINT = 'verifyFingerprint',
    UPDATE_FINGERPRINT_STATE = 'updateFingerprintState';

function FingerPrint() {};

FingerPrint.prototype.isAvailable = function () {
    return new Promise(function (resolve, reject) {
        exec(resolve, reject, PLUGIN_NAME, IS_AVAILABLE, []);
    });
};

FingerPrint.prototype.verifyFingerprint = function (content, title, cancelButton, passwordButton) {

    content = content || '';
    title = title || '';
    cancelButton = cancelButton || '';
    passwordButton = passwordButton || '';


    return new Promise(function (resolve, reject) {
        exec(resolve, reject, PLUGIN_NAME, VERIFY_FINGERPRINT, [content, title, cancelButton, passwordButton]);
    });
};

FingerPrint.prototype.updateFingerprintState = function () {
    return new Promise(function (resolve, reject) {
        exec(resolve, reject, PLUGIN_NAME, UPDATE_FINGERPRINT_STATE, []);
    });
};


module.exports = new FingerPrint();

});
