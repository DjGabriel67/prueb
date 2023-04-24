(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["presentation-auth-auth-module"],{

/***/ "GJUu":
/*!****************************************************************!*\
  !*** ./apps/colombia/src/app/presentation/auth/auth.module.ts ***!
  \****************************************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "PLH8");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nequi_apps_base_mobile_config_features_commons_services_daon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/apps/base/mobile/config/features/commons/services/daon */ "AuwZ");
/* harmony import */ var _nequi_apps_base_mobile_config_features_commons_services_hardware_permission__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/apps/base/mobile/config/features/commons/services/hardware-permission */ "CiQA");
/* harmony import */ var _nequi_features_account_locks_presentation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/account-locks/presentation */ "XEt7");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_profile_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/features/profile/core */ "w8sc");
/* harmony import */ var _nequi_features_security_biometry_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nequi/features/security/biometry/core */ "qmPB");
/* harmony import */ var _nequi_features_security_biometry_presentation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nequi/features/security/biometry/presentation */ "8Kip");
/* harmony import */ var _nequi_features_settings_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nequi/features/settings/core */ "0nzD");
/* harmony import */ var _nequi_native_daon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @nequi/native/daon */ "+b3i");
/* harmony import */ var _nequi_native_hardware_permission__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @nequi/native/hardware-permission */ "a6Id");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./auth-routing.module */ "rFrg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _libs_features_account_locks_src_presentation_features_account_locks_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../libs/features/account-locks/src/presentation/features-account-locks.module */ "KMk+");



















var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule.ɵfac = function AuthModule_Factory(t) { return new (t || AuthModule)(); };
    AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: AuthModule });
    AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ providers: [
            _nequi_apps_base_mobile_config_features_commons_services_daon__WEBPACK_IMPORTED_MODULE_4__["DaonFaceService"],
            _nequi_apps_base_mobile_config_features_commons_services_daon__WEBPACK_IMPORTED_MODULE_4__["DaonVoiceService"],
            _nequi_native_daon__WEBPACK_IMPORTED_MODULE_12__["DaonFacePlugin"],
            _nequi_native_daon__WEBPACK_IMPORTED_MODULE_12__["DaonVoicePlugin"],
            _nequi_apps_base_mobile_config_features_commons_services_hardware_permission__WEBPACK_IMPORTED_MODULE_5__["HardwarePermissionService"],
            _nequi_native_hardware_permission__WEBPACK_IMPORTED_MODULE_13__["HardwarePermissionPlugin"],
            _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_7__["MyQrBottomSheetService"],
            _nequi_ui__WEBPACK_IMPORTED_MODULE_14__["SimpleListBottomSheetService"],
            _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_7__["QrReaderService"],
            _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_2__["Keyboard"],
            {
                provide: _nequi_features_security_biometry_core__WEBPACK_IMPORTED_MODULE_9__["BiometryInteractor"],
                deps: [_nequi_features_security_biometry_core__WEBPACK_IMPORTED_MODULE_9__["BiometryRepository"]],
                useClass: _nequi_features_security_biometry_core__WEBPACK_IMPORTED_MODULE_9__["BiometryInteractor"],
            },
            {
                provide: _nequi_features_profile_core__WEBPACK_IMPORTED_MODULE_8__["AccountInteractor"],
                deps: [_nequi_features_profile_core__WEBPACK_IMPORTED_MODULE_8__["AccountRepository"], _nequi_features_settings_core__WEBPACK_IMPORTED_MODULE_11__["SettingRepository"]],
                useClass: _nequi_features_profile_core__WEBPACK_IMPORTED_MODULE_8__["AccountInteractor"],
            },
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_16__["AuthRoutingModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _nequi_ui__WEBPACK_IMPORTED_MODULE_14__["NequiUiModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateModule"],
                _nequi_features_account_locks_presentation__WEBPACK_IMPORTED_MODULE_6__["FeaturesAccountLocksModule"].forChild(),
                _nequi_features_security_biometry_presentation__WEBPACK_IMPORTED_MODULE_10__["ChooseBiometryModule"],
            ]] });
    return AuthModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](AuthModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _auth_routing_module__WEBPACK_IMPORTED_MODULE_16__["AuthRoutingModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        _nequi_ui__WEBPACK_IMPORTED_MODULE_14__["NequiUiModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateModule"], _libs_features_account_locks_src_presentation_features_account_locks_module__WEBPACK_IMPORTED_MODULE_18__["FeaturesAccountLocksModule"], _nequi_features_security_biometry_presentation__WEBPACK_IMPORTED_MODULE_10__["ChooseBiometryModule"]] }); })();


/***/ }),

/***/ "d9Wz":
/*!******************************************************!*\
  !*** ./apps/colombia/src/app/features/auth/index.ts ***!
  \******************************************************/
/*! exports provided: SIGN_IN_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_IN_CONFIG", function() { return SIGN_IN_CONFIG; });
/* harmony import */ var _nequi_native_qr_reader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nequi/native/qr-reader */ "AEiP");

var SIGN_IN_CONFIG = {
    configButtonQR: _nequi_native_qr_reader__WEBPACK_IMPORTED_MODULE_0__["QrReaderConfig"].buttons.goToCode,
    configViewQR: _nequi_native_qr_reader__WEBPACK_IMPORTED_MODULE_0__["QrReaderConfig"].views.paymentFromHome,
};


/***/ }),

/***/ "rFrg":
/*!************************************************************************!*\
  !*** ./apps/colombia/src/app/presentation/auth/auth-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _config_i18n_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @config/i18n.config */ "b+ZT");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _features_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../features/auth */ "d9Wz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






var routes = [
    {
        path: '',
        loadChildren: function () {
            return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @nequi/features/security/auth/presentation */ "hHau")).then(function (m) { return new _nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__["ModuleWithProvidersFactory"](m.FeaturesAuthModule.forChild(_features_auth__WEBPACK_IMPORTED_MODULE_3__["SIGN_IN_CONFIG"])); });
        },
    },
    {
        path: 'choose-biometry',
        loadChildren: function () {
            return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @nequi/features/security/biometry/presentation/choose-biometry */ "yitO")).then(function (m) { return m.ChooseBiometryModule; });
        },
    },
    {
        path: 'biometry-change-password',
        loadChildren: function () {
            return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @nequi/features/security/biometry/presentation/change-password */ "BOJV")).then(function (m) { return m.ChangePasswordModule; });
        },
    },
    {
        path: 'enroll',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | nequi-features-enroll-presentation */ "nequi-features-enroll-presentation").then(__webpack_require__.bind(null, /*! @nequi/features/enroll/presentation */ "ULS5")).then(function (m) { return m.FeaturesEnrollModule; });
        },
    },
    {
        path: 'registry-lite',
        loadChildren: function () {
            return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @nequi/features/lite-registry/presentation */ "41TT")).then(function (m) { return m.RegistryLiteModule; });
        },
    },
    {
        path: 'reactivate-account',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | nequi-features-security-reactivate-account-presentation */ "nequi-features-security-reactivate-account-presentation").then(__webpack_require__.bind(null, /*! @nequi/features/security/reactivate-account/presentation */ "4wD7")).then(function (m) { return m.FeaturesReactivateAccountModule; });
        },
    },
    // --------------------------
    // - ADD YOUR ROUTERS ABOVE -
    // --------------------------
    {
        path: '',
        redirectTo: '/auth',
        pathMatch: 'full',
    },
    {
        path: '**',
        redirectTo: '/auth',
        pathMatch: 'full',
    },
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule.ɵfac = function AuthRoutingModule_Factory(t) { return new (t || AuthRoutingModule)(); };
    AuthRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AuthRoutingModule });
    AuthRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(_nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__["I18nModuleResolver"].setup(routes, [
                    _config_i18n_config__WEBPACK_IMPORTED_MODULE_1__["I18nConfig"].modules.SIGN_IN,
                    _config_i18n_config__WEBPACK_IMPORTED_MODULE_1__["I18nConfig"].modules.PAYMENTS,
                    _config_i18n_config__WEBPACK_IMPORTED_MODULE_1__["I18nConfig"].modules.SECURITY,
                    _config_i18n_config__WEBPACK_IMPORTED_MODULE_1__["I18nConfig"].modules.ACCOUNT_LOCKS,
                ])),
            ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return AuthRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AuthRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=presentation-auth-auth-module.js.map