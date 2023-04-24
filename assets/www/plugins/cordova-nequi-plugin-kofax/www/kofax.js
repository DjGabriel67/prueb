cordova.define("cordova-nequi-plugin-kofax.kofax", function(require, exports, module) {
var exec = require('cordova/exec'),
    constants = {
        PLUGIN_NAME: 'kofax',
        CAPTURE_IMAGE: 'captureImage',
        CAPTURE_BARCODE: 'captureBarcode',
        PROCESS_IMAGE: 'processImage',
        GET_IMAGE: 'getImage',
        DELETE_IMAGE: 'deleteImage',
        CLEAR_IMAGES_FOLDER: 'clearImagesFolder',
        IMAGE_FORMAT: {
            JPG: 'jpeg',
            PNG: 'png',
            TIFF: 'tiff'
        },
    };

function Kofax() {

    var api = {
        launchDocumentScanner: _launchDocumentScanner,
        launchBarcodeScanner: _launchBarcodeScanner,
        processImage: _processImage,
        getImage: _getImage,
        deleteImage: _deleteImage,
        clearImagesFolder: _clearImagesFolder,
        IMAGE_FORMAT: constants.IMAGE_FORMAT,
        VRS: _getDefaultVRS()
    };

    return api;

    function _launchDocumentScanner(successCB, failureCB, options) {
        var params = [{}, {}, '', constants.IMAGE_FORMAT.JPEG];

        if (options) {
            params[0] = options.viewMessages || {};
            params[1] = options.viewTimeouts || {};
            params[2] = options.viewStyle || '';
            params[3] = options.imageFormat || constants.IMAGE_FORMAT.JPEG;
            params[4] = options.isSelfie || false;
        }

        exec(successCB, failureCB, constants.PLUGIN_NAME, constants.CAPTURE_IMAGE, params);
    }


    function _launchBarcodeScanner(successCB, failureCB, options) {
        var params = [{}, {}, '', constants.IMAGE_FORMAT.JPEG];

        if (options) {
            params[0] = options.viewMessages || {};
            params[1] = options.viewTimeouts || {};
            params[2] = options.viewStyle || '';
            params[3] = options.imageFormat || constants.IMAGE_FORMAT.JPEG;
        }

        exec(successCB, failureCB, constants.PLUGIN_NAME, constants.CAPTURE_BARCODE, params);
    }


    function _processImage(imageInfo, successCB, failureCB, options) {
        var vrsProfile = api.VRS,
            image = {};


        image.imagePath = imageInfo.imagePath || '';
        image.base64 = imageInfo.base64 || '';
        imageFormat = imageInfo.imageFormat || constants.IMAGE_FORMAT.JPG;

        if (options) {
            vrsProfile = options.vrsString || vrsProfile;
        }

        exec(successCB, failureCB, constants.PLUGIN_NAME, constants.PROCESS_IMAGE, [image, vrsProfile, imageFormat]);
    }

    function _getImage(imagesInfo, successCB, failureCB) {
        var params = [];

        params.push(null);
        params.push(constants.IMAGE_FORMAT.JPG);

        if (imagesInfo) {
            params.push(imagesInfo);
        }

        exec(successCB, failureCB, constants.PLUGIN_NAME, constants.GET_IMAGE, params);
    }

    function _deleteImage(filePath, successCB, failureCB) {
        exec(successCB, failureCB, constants.PLUGIN_NAME, constants.DELETE_IMAGE, [filePath]);
    }

    function _clearImagesFolder(successCB, failureCB) {
        exec(successCB, failureCB, constants.PLUGIN_NAME, constants.CLEAR_IMAGES_FOLDER, []);
    }


    function _getDefaultVRS() {
        var strPerfectionProfile = '';

        strPerfectionProfile += '_DeviceType_2';
        strPerfectionProfile += '_DocDimLarge_3.375';
        strPerfectionProfile += '_DocDimSmall_2.125';
        strPerfectionProfile += '_DoSkewCorrectionPage_';
        strPerfectionProfile += '_DoCropCorrection_';
        strPerfectionProfile += '_Do90DegreeRotation_9_';
        strPerfectionProfile += '_FinalImageDPI_300';
        strPerfectionProfile += '_LoadInlineSetting_[CSkewDetect.correct_illumination.Bool=0]';

        return strPerfectionProfile;
    }
}


module.exports = new Kofax();
});
