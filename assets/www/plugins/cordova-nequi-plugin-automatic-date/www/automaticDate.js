cordova.define("cordova-nequi-plugin-automatic-date.automaticDate", function(require, exports, module) {
const exec = require('cordova/exec'),
    constants = Object.freeze({
        PLUGIN_NAME: 'AutomaticDatePlugin',
        GET_AUTO_TIME_ACTION: 'getAutoTime'
    });


function AutomaticDate() {
    /**
     * Objeto para exponer interface publica del provider de biometría facial
     * @property self
     * @type object
     */
    var api = {
        isAutomaticTimeEnabled: _isAutomaticTimeEnabled
    };


    return api;


    function _isAutomaticTimeEnabled(successCB, failureCB) {
        exec(successCB, failureCB, constants.PLUGIN_NAME, constants.GET_AUTO_TIME_ACTION, []);
    }
}



module.exports = new AutomaticDate();

});
