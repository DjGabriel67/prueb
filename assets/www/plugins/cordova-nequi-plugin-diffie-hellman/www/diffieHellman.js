cordova.define("cordova-nequi-plugin-diffie-hellman.deffieHellman", function(require, exports, module) {
var exec = require('cordova/exec'),
    constants = Object.freeze({
        DH_PLUGIN_NAME: 'DiffieHellmanPlugin',
        GENERATE_PUBLIC_SENDER_KEY: 'generatePublicSenderKey',
        GENERATE_PRIVATE_SENDER_KEY: 'generatePrivateSenderKey',
        RESTORE_DH_KEY: 'restoreDhKey'
    });


function DiffieHellman() {

    var api = {
        generatePublicSenderKey: _generatePublicSenderKey,
        generatePrivateSenderKey: _generatePrivateSenderKey,
        restoreDhKey: _restoreDhKey
    };


    return api;

    /**
     * Metod que genera una llave publica para el cifrado de datos
     * @method _generatePublicSenderKey
     */
    function _generatePublicSenderKey(successCB, failureCB) {
        exec(successCB, failureCB, constants.DH_PLUGIN_NAME, constants.GENERATE_PUBLIC_SENDER_KEY, []);
    }

    /**
     * Este metodo obtiene la llave privada de acuerdo a la llave publica generada desde el servidor
     * @method generatePrivateSenderKey
     * @param publicKey Llave publica para el cifrado de los datos
     */
    function _generatePrivateSenderKey(publicKey, successCB, failureCB) {
        if (publicKey) {
            exec(successCB, failureCB, constants.DH_PLUGIN_NAME, constants.GENERATE_PRIVATE_SENDER_KEY, [publicKey]);
        } else {
            failureCB('dont have public key');
        }
    }

    /**
     * Metodo para reiniciar las llaves creadas con diffiehellman
     * @method restoreDhKey
     * @private
     */
    function _restoreDhKey(successCB, failureCB) {
        exec(successCB, failureCB, constants.DH_PLUGIN_NAME, constants.RESTORE_DH_KEY, []);
    }
}


module.exports = new DiffieHellman();
});
