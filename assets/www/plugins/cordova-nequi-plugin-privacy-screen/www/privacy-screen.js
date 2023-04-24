cordova.define("cordova-nequi-plugin-privacy-screen.privacyScreen", function(require, exports, module) {
function PrivacyScreen() {
  const exec = require('cordova/exec');
  const PLUGIN_NAME = 'PrivacyScreen';
  const ACTIONS = {
    ENABLE: 'enable',
    DISABLE: 'disable',
  };

  return {
    enable: enable,
    disable: disable,
  };

  function enable() {
    return new Promise((resolve, reject) => {
      exec(resolve, reject, PLUGIN_NAME, ACTIONS.ENABLE, []);
    });
  }

  function disable() {
    return new Promise((resolve, reject) => {
      exec(resolve, reject, PLUGIN_NAME, ACTIONS.DISABLE, []);
    });
  }
}

module.exports = new PrivacyScreen();

});
