cordova.define("cordova-nequi-plugin-datami.DatamiPlugin", function(require, exports, module) {
const exec = require('cordova/exec'),
    constants = Object.freeze({
        PLUGIN_NAME: 'DatamiPlugin',
        UNSPONSORED: 'unsponsored'
    });


function Datami() {
    /**
     * Objeto para exponer interface publica del provider datami
     * @property self
     * @type object
     */
    var api = {
        unsponsorUser: _unsponsorUser
    };


    return api;

    /**
     * Función encargada marcar un usuario como no patrocinado
     * @method _unsponsorUser
     * @public
     * @param {Function} successCB Función de éxito
     * @param {*} failuerCB
     */
    function _unsponsorUser(successCB, failuerCB) {

        exec(successCB, failuerCB, constants.PLUGIN_NAME, constants.UNSPONSORED, ['true']);
    }
}



module.exports = new Datami();

});
