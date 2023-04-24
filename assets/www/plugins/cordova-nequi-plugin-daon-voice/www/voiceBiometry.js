cordova.define("cordova-nequi-plugin-daon-voice.voiceBiometry", function(require, exports, module) {
const exec = require('cordova/exec'),
    constants = Object.freeze({
        PLUGIN_NAME: 'VoiceBiometryPlugin',
        VOICE_ENROLL: 'voiceEnroll',
        VERIFY_VOICE: 'verifyVoice',
    });

function BiometryVoice() {

    var api = {
        voiceEnroll: voiceEnroll,
        getVoice: getVoice
    };

    return api;

    /**
     * Llama la pantalla de verificación biométrica por voz
     * @method getVoice
     * @return {Promise}
     * @public
     */
    function getVoice(successCB, failureCB, _textToast, _toastType) {
        var textToast = _textToast || null,
            toastType = _toastType || null;

        exec(successCB, failureCB, constants.PLUGIN_NAME, constants.VERIFY_VOICE, [textToast, toastType]);
    }

    /**
     * Utilizado para llamar la pantalla de enrolamiento de la voz
     * @method voiceEnroll
     * @public
     */
    function voiceEnroll(successCB, failureCB, _textToast, _toastType) {
        var textToast = _textToast || null,
            toastType = _toastType || null;
        exec(successCB, failureCB, constants.PLUGIN_NAME, constants.VOICE_ENROLL, [textToast, toastType]);
    }
}

module.exports = new BiometryVoice();
});
