cordova.define("cordova-nequi-plugin-detectid.detectId", function(require, exports, module) {
var exec = require('cordova/exec'),
    constants = Object.freeze({
        PLUGIN_NAME: 'DetectIdPlugin',
        DEVICE_REGISTRATION_ACTION_NAME: 'deviceRegistrationByActivationCode',
        GET_SOFT_TOKEN_ACTION_NAME: 'getSoftToken',
        IS_DEVICE_PROVISIONED: 'isDeviceProvisioned',
        DELETE_ACCOUNT: 'deleteAccounts'
    });


function DetectId() {

    var api = {
        deviceRegistrationByActivationCode: deviceRegistrationByActivationCode,
        getSoftToken: getSoftToken,
        isDeviceProvisioned: isDeviceProvisioned,
        deleteAccounts: deleteAccounts
    };


    return api;


    /**
     * Función que se encarga de aprovisionar un dispositivo por
     * medio de un código
     * @method deviceRegistrationByActivationCode
     * @param activationCode {String}
     * @public
     */
    function deviceRegistrationByActivationCode(activationCode, successCB, failureCB) {
        if (activationCode) {
            exec(successCB, failureCB, constants.PLUGIN_NAME, constants.DEVICE_REGISTRATION_ACTION_NAME, [activationCode])
        } else {
            throw ('deviceRegistrationByActivationCode method require an activationCode');
        }
    }

    /**
     * Función que se encarga de generar un token con el SDK para
     * ser enviado en las transacciones
     * @method getSoftToken
     * @public
     */
    function getSoftToken(successCB, failureCB) {
        exec(successCB, failureCB, constants.PLUGIN_NAME, constants.GET_SOFT_TOKEN_ACTION_NAME, []);
    }

    /**
     * Función que se encarga de eliminar la cuenta de un usuario.
     * Se encarga de eliminar la cuenta del detectID
     * @method deleteAccounts
     * @public
     */
    function deleteAccounts(successCB, failureCB) {
        exec(successCB, failureCB, constants.PLUGIN_NAME, constants.DELETE_ACCOUNT, []);
    }

    /**
     * Función que se encarga de validar si un dispositivo está aprovisionado
     * @method isDeviceProvisioned
     * @public
     */
    function isDeviceProvisioned(successCB, failureCB) {
        exec(successCB, failureCB, constants.PLUGIN_NAME, constants.IS_DEVICE_PROVISIONED, []);
    }
}


module.exports = new DetectId();
});
