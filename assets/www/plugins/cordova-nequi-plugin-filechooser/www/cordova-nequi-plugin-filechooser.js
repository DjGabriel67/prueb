cordova.define("cordova-nequi-plugin-filechooser.cordova-nequi-plugin-filechooser", function(require, exports, module) {
function from_base64 (sBase64, nBlocksSize) {
    function _b64ToUint6 (nChr) {
        return nChr > 64 && nChr < 91 ?
            nChr - 65 :
        nChr > 96 && nChr < 123 ?
            nChr - 71 :
        nChr > 47 && nChr < 58 ?
            nChr + 4 :
        nChr === 43 ?
            62 :
        nChr === 47 ?
            63 :
            0
        ;
    }

    var nInLen = sBase64.length;
    var nOutLen = nBlocksSize ?
        Math.ceil((nInLen * 3 + 1 >> 2) / nBlocksSize) * nBlocksSize :
        nInLen * 3 + 1 >> 2
    ;
    var taBytes = new Uint8Array(nOutLen);

    for (var nMod3, nMod4, nUint24 = 0, nOutIdx = 0, nInIdx = 0; nInIdx < nInLen; nInIdx++) {
        nMod4 = nInIdx & 3;
        nUint24 |= _b64ToUint6(sBase64.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
        if (nMod4 === 3 || nInLen - nInIdx === 1) {
            for (nMod3 = 0; nMod3 < 3 && nOutIdx < nOutLen; nMod3++, nOutIdx++) {
                taBytes[nOutIdx] = nUint24 >>> (16 >>> nMod3 & 24) & 255;
            }
            nUint24 = 0;
        }
    }

    return taBytes;
}


function FileChooser() {
    var CONSTANTS = {
            PLUGIN_NAME: 'FileChooserPlugin',
            SELECT_FILES: 'selectFiles'
        },
        api = {
            selectFiles: selectFiles
        };

    return api;

    /**
     * Funcion para lanzar el administrador de archivos y seleccionar un archivo
     * @method selectFiles
     * @private
     */
    function selectFiles(accept, successCB, failureCB) {
        var result = new Promise(function (resolve, reject) {
            cordova.exec(
                function (json) {
                    if (json === 'RESULT_CANCELED') {
                        resolve();
                        return;
                    }

                    try {
                        var o = JSON.parse(json);
                        var base64Data = o.data.replace(/[^A-Za-z0-9\+\=\/]/g, '');

                        o.data = base64Data;

                        resolve(o);
                    }
                    catch (err) {
                        reject(err);
                    }
                },
                reject,
                CONSTANTS.PLUGIN_NAME,
                CONSTANTS.SELECT_FILES,
                [(typeof accept === 'string' ? accept.replace(/\s/g, '') : undefined) || '*/*']
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

module.exports = new FileChooser();

});
