cordova.define("cordova-nequi-plugin-daon-face.faceBiometry", function(require, exports, module) {
const exec = require('cordova/exec'),
  constants = Object.freeze({
    PLUGIN_NAME: 'FaceBiometryPlugin',
    OPEN_CAMERA: 'openCamera',
    CANCEL_BIOMETRY: 'cancelBiometry',
    TAKE_PICTURE: 'take3DPicture',
  });

function BiometryFace() {
  /**
   * Objeto para exponer interfaz pública del provider de biometría facial
   * @property self
   * @type object
   */
  var api = {
    biometryFaceCapture: biometryFaceCapture,
    cancelBiometryCapture: cancelBiometryCapture,
  };

  return api;

  /**
   * Función encargada de abrir la cámara para obtener una imágen biométrica
   * @method biometryFaceCapture
   * @param {Function} successCB Success callback
   * @param {Function} failuerCB Error callback
   * @param {String} _captureType Indicate if the capture is 3DCapture, blinkCapture
   * @param {Boolean} _livenessDetectionProps Object with the liveness detection props
   * @public
   */
  function biometryFaceCapture(successCB, failuerCB, _captureType, _livenessDetectionProps) {
    var captureType = _captureType || null,
      liveness = _livenessDetectionProps || false;

    exec(successCB, failuerCB, constants.PLUGIN_NAME, constants.OPEN_CAMERA, [
      captureType,
      liveness,
    ]);
  }

  /**
   * Funcion para cancelar el proceso de biometria
   * @method cancelBiometryCapture
   * @private
   */
  function cancelBiometryCapture(successCB, failuerCB) {
    exec(successCB, failuerCB, PLUGIN_NAME, CANCEL_BIOMETRY, []);
  }
}

module.exports = new BiometryFace();

});
