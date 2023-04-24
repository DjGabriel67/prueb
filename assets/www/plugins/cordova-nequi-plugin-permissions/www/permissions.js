cordova.define("cordova-nequi-plugin-permissions.permissions", function(require, exports, module) {
var exec = require('cordova/exec'),
    constants = {
        PLUGIN_NAME: 'PermissionsPlugin',
        CHECK_PERMISSION_ACTION_NAME: 'check_permission',
        CHECK_PERMISSION_VERIFY_ACTION_NAME: 'checkPermissionVerify'
    };



function Permissions() {

    /**
     * Objeto para exponer interface publica del provider
     * @property self
     * @type object
     */
    var api = {
        checkPermission: _checkPermission,
        checkPermissionVerify: _verifyPermission
    };

    return api;

    /**
     * Funcion para verificar los permisos de acceso al hw
     * @method _verifyPermission
     * @param permission [String] nombre de los permisos a solicitar o verificar
     * @param messageRational [Object] JSON con las configuraciones de titulo,
     *        mensaje y titulo de boton, del mensaje explicativo de la razon de los permisos
     *        Objeto de la forma {rationalTitle : '', rationalMessage : '', rationalTxtBtn : '' }
     * @private
     */
    function _verifyPermission(permission, successCB, failureCB) {
        exec(successCB, failureCB, constants.PLUGIN_NAME, constants.CHECK_PERMISSION_VERIFY_ACTION_NAME, [permission]);
    }

    /**
     * Funcion para verificar los permisos de acceso al hw
     * @method _checkPermission
     * @param permission [String] nombre de los permisos a solicitar o verificar
     * @param messageRational [Object] JSON con las configuraciones de titulo,
     *        mensaje y titulo de boton, del mensaje explicativo de la razon de los permisos
     *        Objeto de la forma {rationalTitle : '', rationalMessage : '', rationalTxtBtn : '' }
     * @private
     */
    function _checkPermission(permission, messageRational, successCB, failureCB) {
        exec(successCB, failureCB, constants.PLUGIN_NAME, constants.CHECK_PERMISSION_ACTION_NAME, [permission, messageRational]);
    }
}


module.exports = new Permissions();
});
