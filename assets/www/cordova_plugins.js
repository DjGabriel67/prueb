cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-nequi-plugin-common.cordova-nequi-plugin-common",
      "file": "plugins/cordova-nequi-plugin-common/www/cordova-nequi-plugin-common.js",
      "pluginId": "cordova-nequi-plugin-common",
      "clobbers": [
        "cordova.plugins.cordova-nequi-plugin-common"
      ]
    },
    {
      "id": "cordova-nequi-plugin-qr-reader.cordova-nequi-plugin-qr-reader",
      "file": "plugins/cordova-nequi-plugin-qr-reader/www/cordova-nequi-plugin-qr-reader.js",
      "pluginId": "cordova-nequi-plugin-qr-reader",
      "clobbers": [
        "cordova.plugins.nequi.qrreader"
      ]
    },
    {
      "id": "cordova-plugin-statusbar.statusbar",
      "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
      "pluginId": "cordova-plugin-statusbar",
      "clobbers": [
        "window.StatusBar"
      ]
    },
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "cordova-launch-review.LaunchReview",
      "file": "plugins/cordova-launch-review/www/launchreview.js",
      "pluginId": "cordova-launch-review",
      "clobbers": [
        "LaunchReview"
      ]
    },
    {
      "id": "cordova-plugin-ionic-keyboard.keyboard",
      "file": "plugins/cordova-plugin-ionic-keyboard/www/android/keyboard.js",
      "pluginId": "cordova-plugin-ionic-keyboard",
      "clobbers": [
        "window.Keyboard"
      ]
    },
    {
      "id": "cordova-sqlite-storage.SQLitePlugin",
      "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
      "pluginId": "cordova-sqlite-storage",
      "clobbers": [
        "SQLitePlugin"
      ]
    },
    {
      "id": "cordova-plugin-ionic-webview.IonicWebView",
      "file": "plugins/cordova-plugin-ionic-webview/src/www/util.js",
      "pluginId": "cordova-plugin-ionic-webview",
      "clobbers": [
        "Ionic.WebView"
      ]
    },
    {
      "id": "cordova-plugin-file.DirectoryEntry",
      "file": "plugins/cordova-plugin-file/www/DirectoryEntry.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.DirectoryEntry"
      ]
    },
    {
      "id": "cordova-plugin-file.DirectoryReader",
      "file": "plugins/cordova-plugin-file/www/DirectoryReader.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.DirectoryReader"
      ]
    },
    {
      "id": "cordova-plugin-file.Entry",
      "file": "plugins/cordova-plugin-file/www/Entry.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.Entry"
      ]
    },
    {
      "id": "cordova-plugin-file.File",
      "file": "plugins/cordova-plugin-file/www/File.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.File"
      ]
    },
    {
      "id": "cordova-plugin-file.FileEntry",
      "file": "plugins/cordova-plugin-file/www/FileEntry.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileEntry"
      ]
    },
    {
      "id": "cordova-plugin-file.FileError",
      "file": "plugins/cordova-plugin-file/www/FileError.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileError"
      ]
    },
    {
      "id": "cordova-plugin-file.FileReader",
      "file": "plugins/cordova-plugin-file/www/FileReader.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileReader"
      ]
    },
    {
      "id": "cordova-plugin-file.FileSystem",
      "file": "plugins/cordova-plugin-file/www/FileSystem.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileSystem"
      ]
    },
    {
      "id": "cordova-plugin-file.FileUploadOptions",
      "file": "plugins/cordova-plugin-file/www/FileUploadOptions.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileUploadOptions"
      ]
    },
    {
      "id": "cordova-plugin-file.FileUploadResult",
      "file": "plugins/cordova-plugin-file/www/FileUploadResult.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileUploadResult"
      ]
    },
    {
      "id": "cordova-plugin-file.FileWriter",
      "file": "plugins/cordova-plugin-file/www/FileWriter.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileWriter"
      ]
    },
    {
      "id": "cordova-plugin-file.Flags",
      "file": "plugins/cordova-plugin-file/www/Flags.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.Flags"
      ]
    },
    {
      "id": "cordova-plugin-file.LocalFileSystem",
      "file": "plugins/cordova-plugin-file/www/LocalFileSystem.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.LocalFileSystem"
      ],
      "merges": [
        "window"
      ]
    },
    {
      "id": "cordova-plugin-file.Metadata",
      "file": "plugins/cordova-plugin-file/www/Metadata.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.Metadata"
      ]
    },
    {
      "id": "cordova-plugin-file.ProgressEvent",
      "file": "plugins/cordova-plugin-file/www/ProgressEvent.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.ProgressEvent"
      ]
    },
    {
      "id": "cordova-plugin-file.fileSystems",
      "file": "plugins/cordova-plugin-file/www/fileSystems.js",
      "pluginId": "cordova-plugin-file"
    },
    {
      "id": "cordova-plugin-file.requestFileSystem",
      "file": "plugins/cordova-plugin-file/www/requestFileSystem.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.requestFileSystem"
      ]
    },
    {
      "id": "cordova-plugin-file.resolveLocalFileSystemURI",
      "file": "plugins/cordova-plugin-file/www/resolveLocalFileSystemURI.js",
      "pluginId": "cordova-plugin-file",
      "merges": [
        "window"
      ]
    },
    {
      "id": "cordova-plugin-file.isChrome",
      "file": "plugins/cordova-plugin-file/www/browser/isChrome.js",
      "pluginId": "cordova-plugin-file",
      "runs": true
    },
    {
      "id": "cordova-plugin-file.androidFileSystem",
      "file": "plugins/cordova-plugin-file/www/android/FileSystem.js",
      "pluginId": "cordova-plugin-file",
      "merges": [
        "FileSystem"
      ]
    },
    {
      "id": "cordova-plugin-file.fileSystems-roots",
      "file": "plugins/cordova-plugin-file/www/fileSystems-roots.js",
      "pluginId": "cordova-plugin-file",
      "runs": true
    },
    {
      "id": "cordova-plugin-file.fileSystemPaths",
      "file": "plugins/cordova-plugin-file/www/fileSystemPaths.js",
      "pluginId": "cordova-plugin-file",
      "merges": [
        "cordova"
      ],
      "runs": true
    },
    {
      "id": "cordova-plugin-datepicker.DatePicker",
      "file": "plugins/cordova-plugin-datepicker/www/android/DatePicker.js",
      "pluginId": "cordova-plugin-datepicker",
      "clobbers": [
        "datePicker"
      ]
    },
    {
      "id": "cordova-nequi-plugin-daon-face.faceBiometry",
      "file": "plugins/cordova-nequi-plugin-daon-face/www/faceBiometry.js",
      "pluginId": "cordova-nequi-plugin-daon-face",
      "clobbers": [
        "cordova.plugins.nequi.faceBiometry"
      ]
    },
    {
      "id": "cordova-nequi-plugin-finger-print.fingerPrint",
      "file": "plugins/cordova-nequi-plugin-finger-print/www/fingerPrint.js",
      "pluginId": "cordova-nequi-plugin-finger-print",
      "clobbers": [
        "cordova.plugins.nequi.fingerPrint"
      ]
    },
    {
      "id": "cordova-nequi-plugin-notifications.notifications",
      "file": "plugins/cordova-nequi-plugin-notifications/www/notifications.js",
      "pluginId": "cordova-nequi-plugin-notifications",
      "clobbers": [
        "cordova.plugins.nequi.notifications"
      ]
    },
    {
      "id": "cordova-ourcodeworld-preventscreenshots.OurCodeWorldpreventscreenshots",
      "file": "plugins/cordova-ourcodeworld-preventscreenshots/www/ourcodeworldpreventscreenshots.js",
      "pluginId": "cordova-ourcodeworld-preventscreenshots",
      "clobbers": [
        "OurCodeWorldpreventscreenshots"
      ]
    },
    {
      "id": "cordova-plugin-network-information.network",
      "file": "plugins/cordova-plugin-network-information/www/network.js",
      "pluginId": "cordova-plugin-network-information",
      "clobbers": [
        "navigator.connection"
      ]
    },
    {
      "id": "cordova-plugin-network-information.Connection",
      "file": "plugins/cordova-plugin-network-information/www/Connection.js",
      "pluginId": "cordova-plugin-network-information",
      "clobbers": [
        "Connection"
      ]
    },
    {
      "id": "phonegap-plugin-mobile-accessibility.mobile-accessibility",
      "file": "plugins/phonegap-plugin-mobile-accessibility/www/mobile-accessibility.js",
      "pluginId": "phonegap-plugin-mobile-accessibility",
      "clobbers": [
        "window.MobileAccessibility"
      ]
    },
    {
      "id": "phonegap-plugin-mobile-accessibility.MobileAccessibilityNotifications",
      "file": "plugins/phonegap-plugin-mobile-accessibility/www/MobileAccessibilityNotifications.js",
      "pluginId": "phonegap-plugin-mobile-accessibility",
      "clobbers": [
        "MobileAccessibilityNotifications"
      ]
    },
    {
      "id": "dynatrace-cordova-plugin.native-network-interceptor-utils",
      "file": "plugins/dynatrace-cordova-plugin/networking/NativeNetworkInterceptorUtils.js",
      "pluginId": "dynatrace-cordova-plugin"
    },
    {
      "id": "dynatrace-cordova-plugin.mobile-first-network-interceptor",
      "file": "plugins/dynatrace-cordova-plugin/networking/MobileFirstNetworkInterceptor.js",
      "pluginId": "dynatrace-cordova-plugin"
    },
    {
      "id": "dynatrace-cordova-plugin.dynatraceMobile",
      "file": "plugins/dynatrace-cordova-plugin/other/DynatraceCordovaPlugin.js",
      "pluginId": "dynatrace-cordova-plugin",
      "clobbers": [
        "dynatraceMobile"
      ]
    },
    {
      "id": "cordova-nequi-plugin-permissions.permissions",
      "file": "plugins/cordova-nequi-plugin-permissions/www/permissions.js",
      "pluginId": "cordova-nequi-plugin-permissions",
      "clobbers": [
        "cordova.plugins.nequi.permissions"
      ]
    },
    {
      "id": "cordova-open-native-settings.Settings",
      "file": "plugins/cordova-open-native-settings/www/settings.js",
      "pluginId": "cordova-open-native-settings",
      "clobbers": [
        "cordova.plugins.settings"
      ]
    },
    {
      "id": "cordova-nequi-plugin-automatic-date.automaticDate",
      "file": "plugins/cordova-nequi-plugin-automatic-date/www/automaticDate.js",
      "pluginId": "cordova-nequi-plugin-automatic-date",
      "clobbers": [
        "cordova.plugins.nequi.automaticDate"
      ]
    },
    {
      "id": "com.darktalker.cordova.screenshot.screenshot",
      "file": "plugins/com.darktalker.cordova.screenshot/www/Screenshot.js",
      "pluginId": "com.darktalker.cordova.screenshot",
      "merges": [
        "navigator.screenshot"
      ]
    },
    {
      "id": "es6-promise-plugin.Promise",
      "file": "plugins/es6-promise-plugin/www/promise.js",
      "pluginId": "es6-promise-plugin",
      "runs": true
    },
    {
      "id": "cordova-plugin-x-socialsharing.SocialSharing",
      "file": "plugins/cordova-plugin-x-socialsharing/www/SocialSharing.js",
      "pluginId": "cordova-plugin-x-socialsharing",
      "clobbers": [
        "window.plugins.socialsharing"
      ]
    },
    {
      "id": "cordova-plugin-telerik-imagepicker.ImagePicker",
      "file": "plugins/cordova-plugin-telerik-imagepicker/www/imagepicker.js",
      "pluginId": "cordova-plugin-telerik-imagepicker",
      "clobbers": [
        "plugins.imagePicker"
      ]
    },
    {
      "id": "cordova-plugin-iroot.IRoot",
      "file": "plugins/cordova-plugin-iroot/www/iroot.js",
      "pluginId": "cordova-plugin-iroot",
      "clobbers": [
        "IRoot"
      ]
    },
    {
      "id": "cordova-plugin-firebase-analytics.FirebaseAnalytics",
      "file": "plugins/cordova-plugin-firebase-analytics/www/FirebaseAnalytics.js",
      "pluginId": "cordova-plugin-firebase-analytics",
      "merges": [
        "cordova.plugins.firebase.analytics"
      ]
    },
    {
      "id": "cordova-plugin-3dtouch.ThreeDeeTouch",
      "file": "plugins/cordova-plugin-3dtouch/www/ThreeDeeTouch.js",
      "pluginId": "cordova-plugin-3dtouch",
      "clobbers": [
        "ThreeDeeTouch"
      ]
    },
    {
      "id": "cordova-plugin-appminimize.AppMinimize",
      "file": "plugins/cordova-plugin-appminimize/www/AppMinimize.js",
      "pluginId": "cordova-plugin-appminimize",
      "clobbers": [
        "cordova.plugins.appMinimize"
      ]
    },
    {
      "id": "cordova-plugin-dialogs.notification",
      "file": "plugins/cordova-plugin-dialogs/www/notification.js",
      "pluginId": "cordova-plugin-dialogs",
      "merges": [
        "navigator.notification"
      ]
    },
    {
      "id": "cordova-plugin-dialogs.notification_android",
      "file": "plugins/cordova-plugin-dialogs/www/android/notification.js",
      "pluginId": "cordova-plugin-dialogs",
      "merges": [
        "navigator.notification"
      ]
    },
    {
      "id": "cordova-plugin-globalization.GlobalizationError",
      "file": "plugins/cordova-plugin-globalization/www/GlobalizationError.js",
      "pluginId": "cordova-plugin-globalization",
      "clobbers": [
        "window.GlobalizationError"
      ]
    },
    {
      "id": "cordova-plugin-globalization.globalization",
      "file": "plugins/cordova-plugin-globalization/www/globalization.js",
      "pluginId": "cordova-plugin-globalization",
      "clobbers": [
        "navigator.globalization"
      ]
    },
    {
      "id": "cordova-plugin-mfp.mfp",
      "file": "plugins/cordova-plugin-mfp/bootstrap.js",
      "pluginId": "cordova-plugin-mfp",
      "runs": true
    },
    {
      "id": "cordova-nequi-plugin-toast.cordova-nequi-plugin-toast",
      "file": "plugins/cordova-nequi-plugin-toast/www/cordova-nequi-plugin-toast.js",
      "pluginId": "cordova-nequi-plugin-toast",
      "clobbers": [
        "cordova.plugins.cordova-nequi-plugin-toast"
      ]
    },
    {
      "id": "cordova-plugin-geolocation.geolocation",
      "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
      "pluginId": "cordova-plugin-geolocation",
      "clobbers": [
        "navigator.geolocation"
      ]
    },
    {
      "id": "cordova-plugin-geolocation.PositionError",
      "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
      "pluginId": "cordova-plugin-geolocation",
      "runs": true
    },
    {
      "id": "cordova-plugin-inappbrowser.inappbrowser",
      "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
      "pluginId": "cordova-plugin-inappbrowser",
      "clobbers": [
        "cordova.InAppBrowser.open"
      ]
    },
    {
      "id": "cordova-plugin-contacts-x.ContactsX",
      "file": "plugins/cordova-plugin-contacts-x/www/contactsX.js",
      "pluginId": "cordova-plugin-contacts-x",
      "clobbers": [
        "window.ContactsX"
      ]
    },
    {
      "id": "cordova-nequi-plugin-filechooser.cordova-nequi-plugin-filechooser",
      "file": "plugins/cordova-nequi-plugin-filechooser/www/cordova-nequi-plugin-filechooser.js",
      "pluginId": "cordova-nequi-plugin-filechooser",
      "clobbers": [
        "cordova.plugins.nequi.filechooser"
      ]
    },
    {
      "id": "cordova-plugin-calendar.Calendar",
      "file": "plugins/cordova-plugin-calendar/www/Calendar.js",
      "pluginId": "cordova-plugin-calendar",
      "clobbers": [
        "Calendar"
      ]
    },
    {
      "id": "cordova-nequi-plugin-privacy-screen.privacyScreen",
      "file": "plugins/cordova-nequi-plugin-privacy-screen/www/privacy-screen.js",
      "pluginId": "cordova-nequi-plugin-privacy-screen",
      "clobbers": [
        "cordova.plugins.nequi.privacyScreen"
      ]
    },
    {
      "id": "cordova-nequi-plugin-daon-voice.voiceBiometry",
      "file": "plugins/cordova-nequi-plugin-daon-voice/www/voiceBiometry.js",
      "pluginId": "cordova-nequi-plugin-daon-voice",
      "clobbers": [
        "cordova.plugins.nequi.voiceBiometry"
      ]
    },
    {
      "id": "cordova-clipboard.Clipboard",
      "file": "plugins/cordova-clipboard/www/clipboard.js",
      "pluginId": "cordova-clipboard",
      "clobbers": [
        "cordova.plugins.clipboard"
      ]
    },
    {
      "id": "cordova-plugin-lottie-splashscreen.LottieSplashScreen",
      "file": "plugins/cordova-plugin-lottie-splashscreen/dist/www/lottie-splashscreen.js",
      "pluginId": "cordova-plugin-lottie-splashscreen",
      "clobbers": [
        "lottie.splashscreen"
      ]
    },
    {
      "id": "cordova-nequi-plugin-web-view.cordova-nequi-plugin-web-view",
      "file": "plugins/cordova-nequi-plugin-web-view/www/cordova-nequi-plugin-web-view.js",
      "pluginId": "cordova-nequi-plugin-web-view",
      "clobbers": [
        "cordova.plugins.nequiWebView"
      ]
    },
    {
      "id": "cordova-nequi-plugin-datami.DatamiPlugin",
      "file": "plugins/cordova-nequi-plugin-datami/www/datamiPlugin.js",
      "pluginId": "cordova-nequi-plugin-datami",
      "clobbers": [
        "cordova.plugins.nequi.datami"
      ]
    },
    {
      "id": "cordova-nequi-plugin-maps.maps",
      "file": "plugins/cordova-nequi-plugin-maps/www/maps.js",
      "pluginId": "cordova-nequi-plugin-maps",
      "clobbers": [
        "cordova.plugins.nequi.maps"
      ]
    },
    {
      "id": "cordova-nequi-plugin-diffie-hellman.deffieHellman",
      "file": "plugins/cordova-nequi-plugin-diffie-hellman/www/diffieHellman.js",
      "pluginId": "cordova-nequi-plugin-diffie-hellman",
      "clobbers": [
        "cordova.plugins.nequi.diffieHellman"
      ]
    },
    {
      "id": "cordova-nequi-plugin-kofax.kofax",
      "file": "plugins/cordova-nequi-plugin-kofax/www/kofax.js",
      "pluginId": "cordova-nequi-plugin-kofax",
      "clobbers": [
        "cordova.plugins.nequi.kofax"
      ]
    },
    {
      "id": "cordova-nequi-plugin-detectid.detectId",
      "file": "plugins/cordova-nequi-plugin-detectid/www/detectId.js",
      "pluginId": "cordova-nequi-plugin-detectid",
      "clobbers": [
        "cordova.plugins.nequi.detectId"
      ]
    },
    {
      "id": "cordova-nequi-plugin-facebook.FacebookConnectPlugin",
      "file": "plugins/cordova-nequi-plugin-facebook/www/facebook-native.js",
      "pluginId": "cordova-nequi-plugin-facebook",
      "clobbers": [
        "facebookConnectPlugin"
      ]
    },
    {
      "id": "ionic-nequi-plugin-deeplinks.deeplink",
      "file": "plugins/ionic-nequi-plugin-deeplinks/www/deeplink.js",
      "pluginId": "ionic-nequi-plugin-deeplinks",
      "clobbers": [
        "IonicDeeplink"
      ],
      "runs": true
    },
    {
      "id": "cordova-nequi-plugin-civica.cordova-nequi-plugin-civica",
      "file": "plugins/cordova-nequi-plugin-civica/www/cordova-nequi-plugin-civica.js",
      "pluginId": "cordova-nequi-plugin-civica",
      "clobbers": [
        "cordova.plugins.nequi.civica"
      ]
    },
    {
      "id": "clevertap-cordova.CleverTap",
      "file": "plugins/clevertap-cordova/www/CleverTap.js",
      "pluginId": "clevertap-cordova",
      "clobbers": [
        "CleverTap"
      ]
    },
    {
      "id": "cordova-nequi-plugin-chat-zendesk.cordova-nequi-plugin-chat-zendesk",
      "file": "plugins/cordova-nequi-plugin-chat-zendesk/www/cordova-nequi-plugin-chat-zendesk.js",
      "pluginId": "cordova-nequi-plugin-chat-zendesk",
      "clobbers": [
        "cordova.plugins.cordova-nequi-plugin-chat-zendesk"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-nequi-plugin-common": "11.1.0",
    "cordova-nequi-plugin-qr-reader": "10.1.0",
    "cordova-plugin-cocoapod-support": "1.6.2",
    "cordova-plugin-add-swift-support": "2.0.2",
    "cordova-plugin-statusbar": "2.4.3",
    "cordova-plugin-device": "2.1.0",
    "cordova-launch-review": "4.0.1",
    "cordova-plugin-ionic-keyboard": "2.2.0",
    "cordova-sqlite-storage": "6.0.0",
    "cordova-plugin-ionic-webview": "4.2.1",
    "cordova-plugin-file": "6.0.2",
    "cordova-plugin-datepicker": "0.9.3",
    "cordova-plugin-androidx": "2.0.0",
    "cordova-plugin-androidx-adapter": "1.1.3",
    "cordova-nequi-plugin-daon-face": "7.1.0",
    "cordova-nequi-plugin-finger-print": "2.0.1",
    "cordova-nequi-plugin-notifications": "5.0.1",
    "cordova-ourcodeworld-preventscreenshots": "1.0.0",
    "cordova-plugin-network-information": "3.0.1-dev",
    "phonegap-plugin-mobile-accessibility": "1.0.5-dev",
    "dynatrace-cordova-plugin": "1.261.3",
    "cordova-nequi-plugin-permissions": "2.0.0",
    "cordova-open-native-settings": "1.5.5",
    "cordova-nequi-plugin-automatic-date": "1.0.0",
    "com.darktalker.cordova.screenshot": "0.1.5",
    "es6-promise-plugin": "4.2.2",
    "cordova-plugin-x-socialsharing": "6.0.4",
    "cordova-plugin-telerik-imagepicker": "2.3.3",
    "cordova-plugin-iroot": "2.1.0",
    "cordova-support-android-plugin": "1.0.2",
    "cordova-plugin-firebase-analytics": "6.0.1",
    "cordova-plugin-3dtouch": "1.3.8",
    "cordova-plugin-appminimize": "1.0.1",
    "cordova-plugin-dialogs": "2.0.2",
    "cordova-plugin-globalization": "1.11.0",
    "cordova-plugin-okhttp": "2.0.0",
    "cordova-plugin-mfp": "8.0.2021090603",
    "cordova-nequi-plugin-toast": "1.0.0",
    "cordova-plugin-geolocation": "4.1.0",
    "cordova-plugin-inappbrowser": "5.0.0",
    "cordova-nequi-plugin-build-phases": "1.0.1",
    "cordova-plugin-contacts-x": "2.0.3",
    "cordova-nequi-plugin-filechooser": "1.0.2",
    "cordova-plugin-calendar": "5.1.6",
    "cordova-nequi-plugin-privacy-screen": "1.0.2",
    "cordova-nequi-plugin-daon-voice": "6.1.0",
    "cordova-clipboard": "1.3.0",
    "cordova-plugin-lottie-splashscreen": "0.9.6",
    "cordova-nequi-plugin-web-view": "4.0.3",
    "cordova-nequi-plugin-datami": "3.0.0",
    "cordova-nequi-plugin-mfp-connection": "1.0.0",
    "cordova-nequi-plugin-maps": "6.0.0",
    "cordova-nequi-plugin-diffie-hellman": "4.0.1",
    "cordova-nequi-plugin-kofax": "9.0.0",
    "cordova-nequi-plugin-detectid": "5.0.0",
    "cordova-nequi-plugin-facebook": "3.0.0",
    "ionic-nequi-plugin-deeplinks": "1.0.20",
    "cordova-nequi-plugin-civica": "3.0.4",
    "clevertap-cordova": "3.0.0",
    "cordova-nequi-plugin-chat-zendesk": "2.0.0"
  };
});