cordova.define("cordova-nequi-plugin-chat-zendesk.cordova-nequi-plugin-chat-zendesk", function(require, exports, module) {

function NequiChatZendesk() {
    var CONSTANTS = {
            PLUGIN_NAME: 'ZendeskChatPlugin',
            OPEN_CHAT: 'open'
        },
        api = {
            open: open
        };

    return api;

    /**
     * Funcion para lanzar el administrador de archivos y seleccionar un archivo
     * @method open
     * @private
     */
    function open(parameters, successCB, failureCB) {
        var result = new Promise(function (resolve, reject) {
            cordova.exec(
                resolve,
                reject,
                CONSTANTS.PLUGIN_NAME,
                CONSTANTS.OPEN_CHAT,
                [parameters]
            );
        });

        if (typeof successCB === 'function') {
            result.then(successCB);
        }
        if (typeof failureCB === 'function') {
            result.catch(failureCB);
        }

        return result;
    }
}

module.exports = new NequiChatZendesk();

});
