cordova.define("cordova-nequi-plugin-maps.maps", function(require, exports, module) {
var exec = require('cordova/exec'),
    CONSTANTS = {
        PLUGIN_NAME: 'MapsPlugin',
        LAUNCH_MAP: 'launchMap'
    };

function Maps() {
    var api = {
        launchMap: launchMap
    };

    return api;


    /**
     * Funcion lanzar el mapa nativo
     * @method launchMap
     * @param locationType [String] Tipo punto a mostrar
     * @param phoneNumber [String] numero de celular del usuario
     * @param radiusMap [String] radio del mapa
     * @private
     */
    function launchMap(locationType, phoneNumber, radiusMap, adapter, successCB, failureCB) {
        exec(successCB, failureCB, CONSTANTS.PLUGIN_NAME, CONSTANTS.LAUNCH_MAP, [
            locationType,
            phoneNumber,
            radiusMap,
            adapter
        ]);
    }
}

module.exports = new Maps();

});
