cordova.define("cordova-nequi-plugin-notifications.notifications", function(require, exports, module) {
var exec = require('cordova/exec'),
    constants = Object.freeze({
        PLUGIN_NAME: 'NequiNotificationsPlugin',
        ON_NOTIFICATION_OPEN: 'onNotificationOpen',
        DISPATCH_PENDING_NOTIFICATION: 'dispatchPendingNotification',
        GET_ALL_INBOX_MESSAGES: 'getAllInboxMessages'
    });


function NequiNotifications() {

    var api = {
        onNotification: onNotification,
        dispatchPendingNotification: dispatchPendingNotification,
        getAllInboxMessages: getAllInboxMessages
    };


    return api;

    /**
     * Función que se dispara cuando una notificación es abierta.
     * @method onNotification
     * @public
     */
    function onNotification(successCB, failureCB){
        exec(successCB, failureCB, constants.PLUGIN_NAME, constants.ON_NOTIFICATION_OPEN, []);
    }

    /**
     * Función que se encarga de validar y disparar una notificación pendiente
     * @method dispatchPendingNotification
     * @public
     */
    function dispatchPendingNotification(successCB, failureCB) {
        exec(successCB, failureCB, constants.PLUGIN_NAME, constants.DISPATCH_PENDING_NOTIFICATION, []);
    }

    /**
     * Función que se encarga de traer todas las notificaciones de AppInbox de CleverTap
     * @method getAllInboxMessages
     * @public
     */
    function getAllInboxMessages(successCB, failureCB) {
        exec(successCB, failureCB, constants.PLUGIN_NAME, constants.GET_ALL_INBOX_MESSAGES, []);
    }
}


module.exports = new NequiNotifications();
});
