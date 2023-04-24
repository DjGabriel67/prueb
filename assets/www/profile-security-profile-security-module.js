(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-security-profile-security-module"],{

/***/ "/nKC":
/*!*******************************************************************************************************************!*\
  !*** ./libs/features/profile/src/presentation/profile-security/security-fingerprint/security-fingerprint.page.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: SecurityFingerprintPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityFingerprintPage", function() { return SecurityFingerprintPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nequi_features_application_data_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/application-data/core */ "UgzZ");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_profile_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/profile/config */ "j8jt");
/* harmony import */ var _nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/profile/presentation */ "cLcF");
/* harmony import */ var _nequi_features_security_biometry_core_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/features/security/biometry/core/constants */ "Ujqc");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _security_fingerprint_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./security-fingerprint.config */ "vnSM");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");

















var SecurityFingerprintPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SecurityFingerprintPage, _super);
    function SecurityFingerprintPage(injector, profileService, toastService, translateProvider, applicationDataInteractor, loadingService) {
        var _this = _super.call(this, injector) || this;
        _this.profileService = profileService;
        _this.toastService = toastService;
        _this.translateProvider = translateProvider;
        _this.applicationDataInteractor = applicationDataInteractor;
        _this.loadingService = loadingService;
        return _this;
    }
    SecurityFingerprintPage.prototype.acceptFingerPrintConfiguration = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var fingerprintPreviusValue, toastMessages, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fingerprintPreviusValue = JSON.parse(JSON.stringify(this.profileService.getFingerPrintBiometry()));
                        toastMessages = this.translateProvider.get(_security_fingerprint_config__WEBPACK_IMPORTED_MODULE_9__["SecurityFingerprintConfig"].i18n.toastSuccess);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        return [4 /*yield*/, this.loadingService.show()];
                    case 2:
                        _a.sent();
                        this.profileService.prepareFingerPrintConfiguration(true);
                        return [4 /*yield*/, this.profileService.updateUserProfile()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.profileService.saveFingerprintOnLoginInLocalStorage(true)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.toastService.showSuccess(toastMessages)];
                    case 5:
                        _a.sent();
                        this.saveTermsAndConditions(true);
                        this.navigateBack(true);
                        return [3 /*break*/, 7];
                    case 6:
                        error_1 = _a.sent();
                        this.profileService.setBiometry(fingerprintPreviusValue, _nequi_features_security_biometry_core_constants__WEBPACK_IMPORTED_MODULE_7__["BiometryType"].FINGERPRINT);
                        this.toastService.showError(error_1.message);
                        this.navigateBack(false);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    SecurityFingerprintPage.prototype.goBack = function () {
        this.saveTermsAndConditions(false);
        this.navigatorProvider.back();
    };
    SecurityFingerprintPage.prototype.navigateBack = function (hasErrors) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingService.hide(hasErrors)];
                    case 1:
                        _a.sent();
                        this.navigatorProvider.back();
                        return [2 /*return*/];
                }
            });
        });
    };
    SecurityFingerprintPage.prototype.saveTermsAndConditions = function (isTermsAndConditionsAccepted) {
        this.applicationDataInteractor.save(_nequi_features_profile_config__WEBPACK_IMPORTED_MODULE_5__["ProfileConfig"].applicationData.isTermsAndConditionsAccepted, isTermsAndConditionsAccepted);
    };
    SecurityFingerprintPage.ɵfac = function SecurityFingerprintPage_Factory(t) { return new (t || SecurityFingerprintPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_6__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_8__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_3__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_application_data_core__WEBPACK_IMPORTED_MODULE_2__["ApplicationDataInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_8__["LoadingService"])); };
    SecurityFingerprintPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SecurityFingerprintPage, selectors: [["app-security-fingerprint"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 16, vars: 9, consts: [[1, "nequi-header"], ["slot", "start"], ["id", "security-fingerprint_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], ["fullscreen", "true", 1, "ion-content--enroll", "ion-padding-horizontal"], [1, "nequi-title"], [1, "content", 3, "innerHTML"], [1, "nequi-footer"], [1, "nequi-footer__toolbar"], ["expand", "block", "id", "security-fingerprint_go-back_button", "color", "guayaba", 1, "nequi-footer__button", 3, "click"]], template: function SecurityFingerprintPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SecurityFingerprintPage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-content", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-text", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "section", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-footer", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-toolbar", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SecurityFingerprintPage_Template_ion_button_click_13_listener() { return ctx.acceptFingerPrintConfiguration(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 3, "profile-security.activate-fingerprint.title"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 5, "profile-security.activate-fingerprint.description"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 7, "profile-security.activate-fingerprint.buttons.accept"), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonFooter"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"]], styles: [".content[_ngcontent-%COMP%] {\n  color: var(--gray-60);\n  font-size: 0.875em;\n  line-height: 17px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvc2VjdXJpdHktZmluZ2VycHJpbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0YiLCJmaWxlIjoic2VjdXJpdHktZmluZ2VycHJpbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xuICBjb2xvcjogdmFyKC0tZ3JheS02MCk7XG4gIGZvbnQtc2l6ZTogMC44NzVlbTtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG59XG4iXX0= */"] });
    return SecurityFingerprintPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_4__["FeatureBasePage"]));



/***/ }),

/***/ "5WHd":
/*!********************************************************************************************!*\
  !*** ./libs/features/profile/src/presentation/profile-security/profile-security.module.ts ***!
  \********************************************************************************************/
/*! exports provided: ProfileSecurityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileSecurityModule", function() { return ProfileSecurityModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nequi_apps_base_mobile_config_features_commons_services_daon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/apps/base/mobile/config/features/commons/services/daon */ "AuwZ");
/* harmony import */ var _nequi_features_account_locks_presentation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/account-locks/presentation */ "XEt7");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_security_biometry_presentation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/security/biometry/presentation */ "8Kip");
/* harmony import */ var _nequi_native_daon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/native/daon */ "+b3i");
/* harmony import */ var _nequi_native_finger_print__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/native/finger-print */ "6zf7");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _facial_biometry_facial_biometry_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./facial-biometry/facial-biometry.page */ "t/OL");
/* harmony import */ var _home_profile_security_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/profile-security.page */ "L7Ig");
/* harmony import */ var _profile_security_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./profile-security-routing.module */ "autN");
/* harmony import */ var _security_fingerprint_security_fingerprint_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./security-fingerprint/security-fingerprint.page */ "/nKC");
/* harmony import */ var _security_password_security_password_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./security-password/security-password.page */ "d1W1");
/* harmony import */ var _show_biometry_by_voice_show_biometry_by_voice_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./show-biometry-by-voice/show-biometry-by-voice.page */ "MHyH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _account_locks_src_presentation_features_account_locks_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../account-locks/src/presentation/features-account-locks.module */ "KMk+");



















var ProfileSecurityModule = /** @class */ (function () {
    function ProfileSecurityModule() {
    }
    ProfileSecurityModule.ɵfac = function ProfileSecurityModule_Factory(t) { return new (t || ProfileSecurityModule)(); };
    ProfileSecurityModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: ProfileSecurityModule });
    ProfileSecurityModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ providers: [
            _nequi_native_finger_print__WEBPACK_IMPORTED_MODULE_8__["FingerPrintPlugin"],
            _nequi_apps_base_mobile_config_features_commons_services_daon__WEBPACK_IMPORTED_MODULE_3__["DaonFaceService"],
            _nequi_apps_base_mobile_config_features_commons_services_daon__WEBPACK_IMPORTED_MODULE_3__["DaonVoiceService"],
            _nequi_native_daon__WEBPACK_IMPORTED_MODULE_7__["DaonFacePlugin"],
            _nequi_native_daon__WEBPACK_IMPORTED_MODULE_7__["DaonVoicePlugin"],
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _profile_security_routing_module__WEBPACK_IMPORTED_MODULE_13__["ProfileSecurityRoutingModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"],
                _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__["FeaturesCommonsModule"],
                _nequi_ui__WEBPACK_IMPORTED_MODULE_9__["NequiUiModule"],
                _nequi_features_security_biometry_presentation__WEBPACK_IMPORTED_MODULE_6__["ChooseBiometryModule"],
                _nequi_features_account_locks_presentation__WEBPACK_IMPORTED_MODULE_4__["FeaturesAccountLocksModule"].forChild(),
            ]] });
    return ProfileSecurityModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](ProfileSecurityModule, { declarations: [_home_profile_security_page__WEBPACK_IMPORTED_MODULE_12__["ProfileSecurityPage"],
        _security_password_security_password_page__WEBPACK_IMPORTED_MODULE_15__["SecurityPasswordPage"],
        _security_fingerprint_security_fingerprint_page__WEBPACK_IMPORTED_MODULE_14__["SecurityFingerprintPage"],
        _security_fingerprint_security_fingerprint_page__WEBPACK_IMPORTED_MODULE_14__["SecurityFingerprintPage"],
        _facial_biometry_facial_biometry_page__WEBPACK_IMPORTED_MODULE_11__["FacialBiometryPage"],
        _show_biometry_by_voice_show_biometry_by_voice_page__WEBPACK_IMPORTED_MODULE_16__["ShowBiometryByVoicePage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _profile_security_routing_module__WEBPACK_IMPORTED_MODULE_13__["ProfileSecurityRoutingModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"],
        _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__["FeaturesCommonsModule"],
        _nequi_ui__WEBPACK_IMPORTED_MODULE_9__["NequiUiModule"],
        _nequi_features_security_biometry_presentation__WEBPACK_IMPORTED_MODULE_6__["ChooseBiometryModule"], _account_locks_src_presentation_features_account_locks_module__WEBPACK_IMPORTED_MODULE_18__["FeaturesAccountLocksModule"]] }); })();


/***/ }),

/***/ "6WkY":
/*!*************************************************************************************************************************!*\
  !*** ./libs/features/profile/src/presentation/profile-security/show-biometry-by-voice/show-biometry-by-voice.config.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: ShowBiometryByVoiceConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowBiometryByVoiceConfig", function() { return ShowBiometryByVoiceConfig; });
var ShowBiometryByVoiceConfig = Object.freeze({
    i18n: {
        cancelAlert: 'profile-security.show-biometry-by-voice.cancel-alert',
        permissionsDenied: 'profile-security.show-biometry-by-voice.permissions-denied',
    },
    routes: {
        security: '/admin/profile/settings/security',
    },
    applicationDetails: 'application_details',
});


/***/ }),

/***/ "K1aW":
/*!*************************************************************************************************!*\
  !*** ./libs/features/profile/src/presentation/profile-security/home/profile-security-config.ts ***!
  \*************************************************************************************************/
/*! exports provided: ProfileSecurityConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileSecurityConfig", function() { return ProfileSecurityConfig; });
var ProfileSecurityConfig = Object.freeze({
    i18n: {
        activatePassword: 'profile-security.password-on-transactions.alert-activate-password',
        deactivatePassword: 'profile-security.password-on-transactions.alert-deactivate-password',
        8004: 'profile-security.fingerprint-modal-settings.enroll-touch-id',
        8010: 'profile-security.fingerprint-modal-settings.enroll-face-id',
        8009: 'profile-security.fingerprint-modal-settings.user-has-denied-face-id',
        security: 'security',
        passOnTransactions: 'profile-security.password-on-transactions',
        biometryFacialModalSettings: 'profile-security.biometry-facial-modal-settings',
        dataTreatmentMinorsModalSettings: 'profile-security.data-treatment-minors-modal-settings',
        unregisterVoiceBiometrySettings: 'profile-security.unregister-voice-biometry-settings',
        pinChallengeMessage: 'profile.home.pin-challenge',
        contingencyAppGate: 'profile-security.contingency-app-gate',
    },
    routes: {
        fingerprint: 'fingerprint',
        facialbiometry: '/admin/profile/settings/security/facial-biometry',
        showBiometryByVoicePage: '/admin/profile/settings/security/show-biometry-by-voice',
        settings: '/admin/profile/settings',
        dataTreatment: '/admin/profile/settings/security/data-treatment/form-data',
        backpack: '/admin/dashboard',
    },
});


/***/ }),

/***/ "L7Ig":
/*!***********************************************************************************************!*\
  !*** ./libs/features/profile/src/presentation/profile-security/home/profile-security.page.ts ***!
  \***********************************************************************************************/
/*! exports provided: ProfileSecurityPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileSecurityPage", function() { return ProfileSecurityPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_apps_base_mobile_config_features_commons_services_native_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/apps/base/mobile/config/features/commons/services/native-settings */ "JPxF");
/* harmony import */ var _nequi_features_application_data_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/application-data/core */ "UgzZ");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_features_profile_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/features/profile/config */ "j8jt");
/* harmony import */ var _nequi_features_profile_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nequi/features/profile/data */ "m+bZ");
/* harmony import */ var _nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nequi/features/profile/presentation */ "cLcF");
/* harmony import */ var _nequi_features_security_auth_presentation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nequi/features/security/auth/presentation */ "hHau");
/* harmony import */ var _nequi_features_security_biometry_core_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @nequi/features/security/biometry/core/constants */ "Ujqc");
/* harmony import */ var _nequi_native_finger_print__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @nequi/native/finger-print */ "6zf7");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _profile_security_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./profile-security-config */ "K1aW");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../ui/src/lib/directives/animate-title-on-scroll/animate-title-on-scroll.directive */ "qbWi");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
































function ProfileSecurityPage_ion_item_group_38_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item-group", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item-divider", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-toggle", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileSecurityPage_ion_item_group_38_Template_ion_toggle_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.toggleFingerprintOnLogin(); })("ngModelChange", function ProfileSecurityPage_ion_item_group_38_Template_ion_toggle_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.isFingerPrintEnable = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 3, "profile-security.items.auth-method.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 5, "profile-security.items.auth-method.fingerprint"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.isFingerPrintEnable);
} }
var ProfileSecurityPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ProfileSecurityPage, _super);
    function ProfileSecurityPage(injector, userInfoProvider, translateProvider, alertService, profileModel, fingerPrintPlugin, route, profileService, loadingService, toastService, cardModalService, nativeSettingsService, pinChallengeModalService, applicationDataInteractor, sessionProvider) {
        var _this = _super.call(this, injector) || this;
        _this.userInfoProvider = userInfoProvider;
        _this.translateProvider = translateProvider;
        _this.alertService = alertService;
        _this.profileModel = profileModel;
        _this.fingerPrintPlugin = fingerPrintPlugin;
        _this.route = route;
        _this.profileService = profileService;
        _this.loadingService = loadingService;
        _this.toastService = toastService;
        _this.cardModalService = cardModalService;
        _this.nativeSettingsService = nativeSettingsService;
        _this.pinChallengeModalService = pinChallengeModalService;
        _this.applicationDataInteractor = applicationDataInteractor;
        _this.sessionProvider = sessionProvider;
        _this.config = _profile_security_config__WEBPACK_IMPORTED_MODULE_15__["ProfileSecurityConfig"];
        _this.messages = _this.translateProvider.get(_this.config.i18n.passOnTransactions);
        _this.isPasswordOnTransactions = _this.isPasswordOnTransactionsActivated;
        _this.isFingerPrintEnable = _this.fingerprintStatus.enabled;
        return _this;
    }
    Object.defineProperty(ProfileSecurityPage.prototype, "fingerprintStatus", {
        get: function () {
            return this.profileService.getFingerPrintBiometry();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProfileSecurityPage.prototype, "voiceBiometryStatus", {
        get: function () {
            return this.profileService.getVoiceBiometry();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProfileSecurityPage.prototype, "isPasswordOnTransactionsActivated", {
        get: function () {
            var _a, _b;
            return ((_b = (_a = this.profileModel) === null || _a === void 0 ? void 0 : _a.security) === null || _b === void 0 ? void 0 : _b.value) || false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProfileSecurityPage.prototype, "dataTreatmentUrl", {
        get: function () {
            return this.config.routes.dataTreatment;
        },
        enumerable: false,
        configurable: true
    });
    ProfileSecurityPage.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.validateIsFingerprintAvailable()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfileSecurityPage.prototype.goBack = function () {
        this.navigatorProvider.navigateBack(this.config.routes.settings);
    };
    ProfileSecurityPage.prototype.ionViewDidEnter = function () {
        this.manageFingerprintToggle();
    };
    ProfileSecurityPage.prototype.togglePasswordOnTransactions = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.sessionProvider.isContingencyAppGate) {
                            this.revertPasswordStatus();
                            return [2 /*return*/, this.showMessageContingencyAppGate()];
                        }
                        if (!this.isPasswordOnTransactions) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.alertService.showByI18n({
                                i18nKey: this.config.i18n.deactivatePassword,
                                handlers: {
                                    accept: function () { return _this.updateUserProfilePasswordOnTransactions(false); },
                                    cancel: function () { return _this.revertPasswordStatus(); },
                                },
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                    case 2: return [4 /*yield*/, this.alertService.showByI18n({
                            i18nKey: this.config.i18n.activatePassword,
                            handlers: {
                                accept: function () { return _this.updateUserProfilePasswordOnTransactions(true); },
                                cancel: function () { return _this.revertPasswordStatus(); },
                            },
                        })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfileSecurityPage.prototype.setVoiceBiometry = function (event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                event.stopImmediatePropagation();
                try {
                    if (!this.voiceBiometryStatus.enrolled) {
                        this.showBiometryFacialModalSettings();
                        return [2 /*return*/];
                    }
                    if (this.voiceBiometryStatus.enabled && this.voiceBiometryStatus.enrolled) {
                        this.showUnregisterAlert();
                        return [2 /*return*/];
                    }
                    this.updateVoiceBiometryOnLoginConfiguration();
                }
                catch (error) {
                    this.showBiometryFacialModalSettings();
                }
                return [2 /*return*/];
            });
        });
    };
    ProfileSecurityPage.prototype.handlerUnregisterAlert = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.pinChallengeIsValid()];
                    case 1:
                        if (_a.sent()) {
                            this.updateVoiceBiometryOnLoginConfiguration();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfileSecurityPage.prototype.showUnregisterAlert = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                messages = this.translateProvider.get(this.config.i18n.unregisterVoiceBiometrySettings);
                this.alertService.show({
                    messages: messages,
                    handlers: {
                        accept: function () { return _this.handlerUnregisterAlert(); },
                    },
                });
                return [2 /*return*/];
            });
        });
    };
    ProfileSecurityPage.prototype.pinChallengeIsValid = function () {
        var pinChallengeMessage = this.translateProvider.get(this.config.i18n.pinChallengeMessage);
        return this.pinChallengeModalService.show(pinChallengeMessage);
    };
    ProfileSecurityPage.prototype.toggleFingerprintOnLogin = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (this.sessionProvider.isContingencyAppGate) {
                    this.isFingerPrintEnable = this.fingerprintStatus.enabled;
                    return [2 /*return*/, this.showMessageContingencyAppGate()];
                }
                try {
                    if (!this.fingerPrintPlugin.isAvailable()) {
                        return [2 /*return*/];
                    }
                    if (this.fingerprintStatus.enabled) {
                        this.updateFingerprintOnLoginConfiguration();
                        return [2 /*return*/];
                    }
                    this.navigatorProvider.navigateForward([this.config.routes.fingerprint], {
                        relativeTo: this.route,
                    });
                }
                catch (error) {
                    this.openFingerprintModalSettings(error);
                }
                return [2 /*return*/];
            });
        });
    };
    ProfileSecurityPage.prototype.goToDataTreatment = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var isDocumentTI, acceptHandler;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isDocumentTI = this.userInfoProvider.getDocument().type === _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["DocumentTypes"].TI;
                        if (!isDocumentTI) return [3 /*break*/, 2];
                        acceptHandler = function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                this.navigatorProvider.navigateRoot(this.config.routes.backpack, {
                                    relativeTo: this.route,
                                });
                                return [2 /*return*/];
                            });
                        }); };
                        return [4 /*yield*/, this.showCardModal(this.config.i18n.dataTreatmentMinorsModalSettings, acceptHandler)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                    case 2:
                        this.navigatorProvider.navigateForward(this.dataTreatmentUrl);
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfileSecurityPage.prototype.manageFingerprintToggle = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var isTermsAndConditionsAccepted;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.applicationDataInteractor.findValue(_nequi_features_profile_config__WEBPACK_IMPORTED_MODULE_8__["ProfileConfig"].applicationData.isTermsAndConditionsAccepted, this.fingerprintStatus.enabled)];
                    case 1:
                        isTermsAndConditionsAccepted = _a.sent();
                        if (isTermsAndConditionsAccepted) {
                            this.isFingerPrintEnable = true;
                        }
                        else {
                            this.isFingerPrintEnable = false;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfileSecurityPage.prototype.revertPasswordStatus = function () {
        this.isPasswordOnTransactions = !this.isPasswordOnTransactions;
    };
    ProfileSecurityPage.prototype.showBiometryFacialModalSettings = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var acceptHandler;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        acceptHandler = function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                this.navigatorProvider.navigateForward([this.config.routes.facialbiometry], {
                                    relativeTo: this.route,
                                });
                                return [2 /*return*/];
                            });
                        }); };
                        return [4 /*yield*/, this.showCardModal(this.config.i18n.biometryFacialModalSettings, acceptHandler)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfileSecurityPage.prototype.updateUserProfilePasswordOnTransactions = function (isPasswordOnTransactions) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var message, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 7]);
                        return [4 /*yield*/, this.loadingService.show()];
                    case 1:
                        _a.sent();
                        this.profileModel.flagBiometry = false;
                        this.profileModel.flagChangeFingerPrint = false;
                        this.profileModel.isUpdatePassOnTransactionsProcess = true;
                        this.profileModel.security.value = isPasswordOnTransactions;
                        return [4 /*yield*/, this.profileService.updateUserProfile()];
                    case 2:
                        _a.sent();
                        this.profileModel.isUpdatePassOnTransactionsProcess = false;
                        return [4 /*yield*/, this.loadingService.hide(true)];
                    case 3:
                        _a.sent();
                        message = isPasswordOnTransactions
                            ? this.messages.successActivated
                            : this.messages.successDeactivated;
                        return [4 /*yield*/, this.toastService.showSuccess(message)];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 5:
                        error_1 = _a.sent();
                        this.profileModel.isUpdatePassOnTransactionsProcess = false;
                        this.profileModel.security.value = !isPasswordOnTransactions;
                        return [4 /*yield*/, this.loadingService.hide(false)];
                    case 6:
                        _a.sent();
                        this.toastService.showError(error_1.message);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    ProfileSecurityPage.prototype.updateVoiceBiometryOnLoginConfiguration = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var voicePreviousValue, messages, error_2;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        voicePreviousValue = JSON.parse(JSON.stringify(this.profileService.getVoiceBiometry()));
                        messages = this.translateProvider.get(this.config.i18n.unregisterVoiceBiometrySettings);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 8, , 10]);
                        return [4 /*yield*/, this.loadingService.show()];
                    case 2:
                        _a.sent();
                        this.profileService.prepareBiometryVoiceConfiguration(!voicePreviousValue.enabled);
                        this.profileModel.flagBiometry = true;
                        return [4 /*yield*/, this.profileService.updateUserProfile()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.loadingService.hide(true)];
                    case 4:
                        _a.sent();
                        if (!voicePreviousValue.enabled) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.toastService.showSuccess(messages.toast.disabled)];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                    case 6: return [4 /*yield*/, this.toastService.showSuccess(messages.toast.enabled)];
                    case 7:
                        _a.sent();
                        return [3 /*break*/, 10];
                    case 8:
                        error_2 = _a.sent();
                        this.profileService.setBiometry(voicePreviousValue, _nequi_features_security_biometry_core_constants__WEBPACK_IMPORTED_MODULE_12__["BiometryType"].VOICE);
                        return [4 /*yield*/, this.loadingService.hide(false)];
                    case 9:
                        _a.sent();
                        return [3 /*break*/, 10];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    ProfileSecurityPage.prototype.validateIsFingerprintAvailable = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                try {
                    if (this.fingerPrintPlugin.isAvailable()) {
                        this.isFingerprintAvailable = true;
                    }
                }
                catch (error) {
                    this.isFingerprintAvailable = false;
                }
                return [2 /*return*/];
            });
        });
    };
    ProfileSecurityPage.prototype.updateFingerprintOnLoginConfiguration = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var fingerprintPreviusValue, error_3;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fingerprintPreviusValue = JSON.parse(JSON.stringify(this.profileService.getFingerPrintBiometry()));
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 8]);
                        return [4 /*yield*/, this.loadingService.show()];
                    case 2:
                        _a.sent();
                        this.profileService.prepareFingerPrintConfiguration(false);
                        return [4 /*yield*/, this.profileService.updateUserProfile()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.profileService.saveFingerprintOnLoginInLocalStorage(false)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.loadingService.hide(true)];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 6:
                        error_3 = _a.sent();
                        this.profileService.setBiometry(fingerprintPreviusValue, _nequi_features_security_biometry_core_constants__WEBPACK_IMPORTED_MODULE_12__["BiometryType"].FINGERPRINT);
                        return [4 /*yield*/, this.loadingService.hide(false)];
                    case 7:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    ProfileSecurityPage.prototype.openFingerprintModalSettings = function (error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messageObject, acceptHandler;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        messageObject = this.config.i18n[error];
                        if (!messageObject) {
                            return [2 /*return*/];
                        }
                        acceptHandler = function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                            var nativeError_1;
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        return [4 /*yield*/, this.nativeSettingsService.open(this.config.i18n.security)];
                                    case 1:
                                        _a.sent();
                                        return [3 /*break*/, 3];
                                    case 2:
                                        nativeError_1 = _a.sent();
                                        this.alertService.show(nativeError_1);
                                        return [3 /*break*/, 3];
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); };
                        return [4 /*yield*/, this.showCardModal(messageObject, acceptHandler)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfileSecurityPage.prototype.showMessageContingencyAppGate = function () {
        this.toastService.showInfo(this.translateProvider.get(this.config.i18n.contingencyAppGate));
    };
    ProfileSecurityPage.prototype.showCardModal = function (i18nKey, acceptHandler, cancelHandler) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var buttons, message;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        buttons = [];
                        message = this.translateProvider.get(i18nKey);
                        buttons.push({
                            text: message.buttons.accept,
                            handler: acceptHandler !== null && acceptHandler !== void 0 ? acceptHandler : null,
                        });
                        if (message.buttons.cancel) {
                            buttons.push({
                                color: 'medianoche-gray',
                                text: message.buttons.cancel,
                                handler: cancelHandler !== null && cancelHandler !== void 0 ? cancelHandler : null,
                            });
                        }
                        return [4 /*yield*/, this.cardModalService.show({
                                title: message.title,
                                content: message.content,
                                imgPath: message.image,
                                buttons: buttons,
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfileSecurityPage.ɵfac = function ProfileSecurityPage_Factory(t) { return new (t || ProfileSecurityPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_7__["UserInfoProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_7__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_6__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_profile_data__WEBPACK_IMPORTED_MODULE_9__["ProfileModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_native_finger_print__WEBPACK_IMPORTED_MODULE_13__["FingerPrintPlugin"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_10__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_14__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_14__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_14__["CardModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_apps_base_mobile_config_features_commons_services_native_settings__WEBPACK_IMPORTED_MODULE_3__["NativeSettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_security_auth_presentation__WEBPACK_IMPORTED_MODULE_11__["PinChallengeModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_application_data_core__WEBPACK_IMPORTED_MODULE_4__["ApplicationDataInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_7__["SessionProvider"])); };
    ProfileSecurityPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProfileSecurityPage, selectors: [["app-profile-security"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 48, vars: 30, consts: [[1, "nequi-header"], ["slot", "start"], ["id", "profile-security_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], [1, "nequi-header__title", "ion-text-start"], ["scrollEvents", "true", "appAnimateTitleOnScroll", "", "fullscreen", "true", 1, "ion-content--enroll", "ion-padding-horizontal"], [1, "nequi-title"], [1, "list"], [1, "list__item-group", "margin-bottom-16"], [1, "list__divider"], ["detail", "", "routerLink", "../password", "id", "profile-security_securiyt-key_ion-item", 1, "list__item"], [1, "list__item"], ["id", "profile-security_transactions-key_toggle", "slot", "end", 1, "nequi-item__toggle", 3, "ngModel", "click", "ngModelChange"], ["pwdOnTransactions", ""], ["id", "profile-security_voice_toggle", "slot", "end", 1, "nequi-item__toggle", 3, "checked", "click"], ["class", "list__item-group margin-bottom-16", 4, "ngIf"], [1, "list__item-group"], ["detail", "", "id", "profile-security_your-data_ion-item", 1, "list__item", 3, "click"], ["id", "profile-security_fingerprint_toggle", "slot", "end", 1, "nequi-item__toggle", 3, "ngModel", "click", "ngModelChange"], ["fingerPrint", ""]], template: function ProfileSecurityPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileSecurityPage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-title", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-content", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-text", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-list", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-item-group", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-item-divider", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-item", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-item", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ion-toggle", 12, 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileSecurityPage_Template_ion_toggle_click_26_listener() { return ctx.togglePasswordOnTransactions(); })("ngModelChange", function ProfileSecurityPage_Template_ion_toggle_ngModelChange_26_listener($event) { return ctx.isPasswordOnTransactions = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ion-item-group", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ion-item-divider", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ion-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ion-item", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "ion-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](36, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "ion-toggle", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileSecurityPage_Template_ion_toggle_click_37_listener($event) { return ctx.setVoiceBiometry($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, ProfileSecurityPage_ion_item_group_38_Template, 11, 7, "ion-item-group", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "ion-item-group", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "ion-item-divider", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "ion-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](43, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "ion-item", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileSecurityPage_Template_ion_item_click_44_listener() { return ctx.goToDataTreatment(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "ion-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](47, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 12, "profile-security.title"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 14, "profile-security.title"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 16, "profile-security.items.security-key.title"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 18, "profile-security.items.security-key.change-key"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 20, "profile-security.items.security-key.transactions-key"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.isPasswordOnTransactions);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](32, 22, "profile-security.items.biometry.title"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](36, 24, "profile-security.items.biometry.voice"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx.voiceBiometryStatus == null ? null : ctx.voiceBiometryStatus.enabled);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isFingerprintAvailable);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](43, 26, "profile-security.items.your-data.title"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](47, 28, "profile-security.items.your-data.text"));
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonContent"], _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_17__["AnimateTitleOnScrollDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonItemGroup"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonItemDivider"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["RouterLinkDelegate"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonToggle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["BooleanValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__["TranslatePipe"]], styles: [".list[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.list__item[_ngcontent-%COMP%] {\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n  --inner-padding-start: 8px;\n  --background: transparent;\n  --min-height: 66px;\n  --background-hover: transparent;\n  --background-activated: transparent;\n}\n.list__divider[_ngcontent-%COMP%] {\n  --background: transparent;\n  --padding-start: 0;\n  --color: var(--gray-alert-message);\n  font-family: var(--ion-font-family);\n  font-size: 17px;\n  font-weight: 600;\n  margin-bottom: -12px;\n}\n.list__item-group[_ngcontent-%COMP%]:last-child   .item[_ngcontent-%COMP%] {\n  --border-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvcHJvZmlsZS1zZWN1cml0eS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBQTtBQUNGO0FBQUU7RUFDRSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQ0FBQTtBQUVKO0FBQ0U7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBQ0o7QUFJTTtFQUNFLDJCQUFBO0FBRlIiLCJmaWxlIjoicHJvZmlsZS1zZWN1cml0eS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAmX19pdGVtIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLW1pbi1oZWlnaHQ6IDY2cHg7XG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB0cmFuc3BhcmVudDtcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbiAgfVxuXG4gICZfX2RpdmlkZXIge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIC0tY29sb3I6IHZhcigtLWdyYXktYWxlcnQtbWVzc2FnZSk7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseSk7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogLTEycHg7XG4gIH1cblxuICAmX19pdGVtLWdyb3VwIHtcbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgLml0ZW0ge1xuICAgICAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
    return ProfileSecurityPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_6__["FeatureBasePage"]));



/***/ }),

/***/ "MHyH":
/*!***********************************************************************************************************************!*\
  !*** ./libs/features/profile/src/presentation/profile-security/show-biometry-by-voice/show-biometry-by-voice.page.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: ShowBiometryByVoicePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowBiometryByVoicePage", function() { return ShowBiometryByVoicePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nequi_apps_base_mobile_config_features_commons_services_daon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/apps/base/mobile/config/features/commons/services/daon */ "AuwZ");
/* harmony import */ var _nequi_apps_base_mobile_config_features_commons_services_native_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/apps/base/mobile/config/features/commons/services/native-settings */ "JPxF");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_features_profile_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/features/profile/data */ "m+bZ");
/* harmony import */ var _nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/features/profile/presentation */ "cLcF");
/* harmony import */ var _nequi_features_security_biometry_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nequi/features/security/biometry/core */ "qmPB");
/* harmony import */ var _nequi_native_commons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nequi/native/commons */ "OxMa");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _home_profile_security_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../home/profile-security-config */ "K1aW");
/* harmony import */ var _show_biometry_by_voice_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./show-biometry-by-voice.config */ "6WkY");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");

/* eslint-disable @angular-eslint/component-selector */






















var ShowBiometryByVoicePage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ShowBiometryByVoicePage, _super);
    function ShowBiometryByVoicePage(injector, translateProvider, alertController, daonVoiceService, loadingService, toastService, profileModel, profileService, cardModalService, nativeSettingsService) {
        var _this = _super.call(this, injector) || this;
        _this.translateProvider = translateProvider;
        _this.alertController = alertController;
        _this.daonVoiceService = daonVoiceService;
        _this.loadingService = loadingService;
        _this.toastService = toastService;
        _this.profileModel = profileModel;
        _this.profileService = profileService;
        _this.cardModalService = cardModalService;
        _this.nativeSettingsService = nativeSettingsService;
        return _this;
    }
    ShowBiometryByVoicePage.prototype.captureVoice = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var voices, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, this.daonVoiceService.getVoices()];
                    case 1:
                        voices = _a.sent();
                        return [4 /*yield*/, this.loadingService.show()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.daonVoiceService.registerVoice(voices)];
                    case 3:
                        _a.sent();
                        this.updateVoiceBiometryConfiguration();
                        this.loadingService.hide();
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        if (error_1 instanceof _nequi_native_commons__WEBPACK_IMPORTED_MODULE_10__["GoBackException"]) {
                            return [2 /*return*/];
                        }
                        if (error_1 instanceof _nequi_features_security_biometry_core__WEBPACK_IMPORTED_MODULE_9__["PermissionDeniedException"]) {
                            return [2 /*return*/, this.showPermissionAlert()];
                        }
                        this.loadingService.hide(false);
                        this.toastService.showError(error_1.errorMessage);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ShowBiometryByVoicePage.prototype.updateVoiceBiometryConfiguration = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        messages = this.translateProvider.get(_home_profile_security_config__WEBPACK_IMPORTED_MODULE_12__["ProfileSecurityConfig"].i18n.unregisterVoiceBiometrySettings);
                        this.profileModel.flagBiometry = true;
                        this.profileService.prepareBiometryVoiceConfiguration(true);
                        return [4 /*yield*/, this.profileService.updateUserProfile()];
                    case 1:
                        _a.sent();
                        this.navigatorProvider.navigateRoot(_show_biometry_by_voice_config__WEBPACK_IMPORTED_MODULE_13__["ShowBiometryByVoiceConfig"].routes.security);
                        return [4 /*yield*/, this.toastService.showSuccess(messages.toast.enabled)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ShowBiometryByVoicePage.prototype.goBack = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages, alert;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        messages = this.translateProvider.get(_show_biometry_by_voice_config__WEBPACK_IMPORTED_MODULE_13__["ShowBiometryByVoiceConfig"].i18n.cancelAlert);
                        return [4 /*yield*/, this.alertController.create({
                                header: messages.header,
                                cssClass: 'nequi-alert',
                                message: messages.message,
                                buttons: [
                                    {
                                        text: messages.buttons.accept,
                                        handler: function () {
                                            return _this.navigatorProvider.navigateRoot(_show_biometry_by_voice_config__WEBPACK_IMPORTED_MODULE_13__["ShowBiometryByVoiceConfig"].routes.security);
                                        },
                                    },
                                    {
                                        text: messages.buttons.cancel,
                                        role: 'cancel',
                                    },
                                ],
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ShowBiometryByVoicePage.prototype.showPermissionAlert = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                messages = this.translateProvider.get(_show_biometry_by_voice_config__WEBPACK_IMPORTED_MODULE_13__["ShowBiometryByVoiceConfig"].i18n.permissionsDenied);
                this.cardModalService.show({
                    title: messages.title,
                    imgPath: messages.image,
                    content: messages.message,
                    buttons: [
                        {
                            text: messages.buttons.accept,
                            handler: function () {
                                return _this.nativeSettingsService.open(_show_biometry_by_voice_config__WEBPACK_IMPORTED_MODULE_13__["ShowBiometryByVoiceConfig"].applicationDetails);
                            },
                        },
                        {
                            text: messages.buttons.cancel,
                            color: 'medianoche-gray',
                        },
                    ],
                });
                return [2 /*return*/];
            });
        });
    };
    ShowBiometryByVoicePage.ɵfac = function ShowBiometryByVoicePage_Factory(t) { return new (t || ShowBiometryByVoicePage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_6__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_apps_base_mobile_config_features_commons_services_daon__WEBPACK_IMPORTED_MODULE_3__["DaonVoiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_11__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_11__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_profile_data__WEBPACK_IMPORTED_MODULE_7__["ProfileModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_8__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_11__["CardModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_apps_base_mobile_config_features_commons_services_native_settings__WEBPACK_IMPORTED_MODULE_4__["NativeSettingsService"])); };
    ShowBiometryByVoicePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ShowBiometryByVoicePage, selectors: [["nequi-biometry-by-voice"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 29, vars: 15, consts: [[1, "nequi-header"], ["slot", "start"], ["id", "security-biometry_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], ["fullscreen", "true", 1, "ion-content--enroll", "ion-padding-horizontal"], [1, "nequi-title"], [1, "content", 3, "innerHTML"], [1, ""], ["lines", "none", 1, "biometry-by-voice__item", "ion-no-margin", "ion-no-padding"], [1, "left-icon"], ["src", "/assets/images/icons/forest.svg"], [1, "description"], ["slot", "start", 1, "left-icon"], ["src", "/assets/images/icons/sound-level.svg"], [1, "nequi-footer"], [1, "nequi-footer__toolbar"], ["expand", "block", "id", "security-fingerprint_go-back_button", "color", "guayaba", 1, "nequi-footer__button", 3, "click"]], template: function ShowBiometryByVoicePage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShowBiometryByVoicePage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-content", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-text", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "section", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-item", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-thumbnail", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "ion-img", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-item", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-thumbnail", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "ion-img", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ion-footer", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-toolbar", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ion-button", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShowBiometryByVoicePage_Template_ion_button_click_26_listener() { return ctx.captureVoice(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 5, "profile-security.show-biometry-by-voice.title"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 7, "profile-security.show-biometry-by-voice.description"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 9, "profile-security.show-biometry-by-voice.items.noise"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 11, "profile-security.show-biometry-by-voice.items.speak"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](28, 13, "profile-security.show-biometry-by-voice.buttons.accept"), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonThumbnail"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonImg"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFooter"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslatePipe"]], styles: [".content[_ngcontent-%COMP%] {\n  color: var(--gray-60);\n  font-size: 0.875em;\n  line-height: 17px;\n}\n\n.left-icon[_ngcontent-%COMP%] {\n  height: 26px;\n  width: 25px;\n  margin-right: 15px;\n}\n\n.biometry-by-voice__item[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvc2hvdy1iaW9tZXRyeS1ieS12b2ljZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFHRTtFQUNFLGlCQUFBO0FBQUoiLCJmaWxlIjoic2hvdy1iaW9tZXRyeS1ieS12b2ljZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XG4gIGNvbG9yOiB2YXIoLS1ncmF5LTYwKTtcbiAgZm9udC1zaXplOiAwLjg3NWVtO1xuICBsaW5lLWhlaWdodDogMTdweDtcbn1cblxuLmxlZnQtaWNvbiB7XG4gIGhlaWdodDogMjZweDtcbiAgd2lkdGg6IDI1cHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLmJpb21ldHJ5LWJ5LXZvaWNlX19pdGVtIHtcbiAgLmRlc2NyaXB0aW9uIHtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgfVxufVxuIl19 */"] });
    return ShowBiometryByVoicePage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__["FeatureBasePage"]));



/***/ }),

/***/ "autN":
/*!****************************************************************************************************!*\
  !*** ./libs/features/profile/src/presentation/profile-security/profile-security-routing.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: ProfileSecurityRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileSecurityRoutingModule", function() { return ProfileSecurityRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _facial_biometry_facial_biometry_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./facial-biometry/facial-biometry.page */ "t/OL");
/* harmony import */ var _home_profile_security_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/profile-security.page */ "L7Ig");
/* harmony import */ var _security_fingerprint_security_fingerprint_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./security-fingerprint/security-fingerprint.page */ "/nKC");
/* harmony import */ var _security_password_security_password_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./security-password/security-password.page */ "d1W1");
/* harmony import */ var _show_biometry_by_voice_show_biometry_by_voice_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./show-biometry-by-voice/show-biometry-by-voice.page */ "MHyH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









var routes = [
    {
        path: '',
        component: _home_profile_security_page__WEBPACK_IMPORTED_MODULE_3__["ProfileSecurityPage"],
    },
    {
        path: 'password',
        component: _security_password_security_password_page__WEBPACK_IMPORTED_MODULE_5__["SecurityPasswordPage"],
    },
    {
        path: 'fingerprint',
        component: _security_fingerprint_security_fingerprint_page__WEBPACK_IMPORTED_MODULE_4__["SecurityFingerprintPage"],
    },
    {
        path: 'facial-biometry',
        component: _facial_biometry_facial_biometry_page__WEBPACK_IMPORTED_MODULE_2__["FacialBiometryPage"],
    },
    {
        path: 'show-biometry-by-voice',
        component: _show_biometry_by_voice_show_biometry_by_voice_page__WEBPACK_IMPORTED_MODULE_6__["ShowBiometryByVoicePage"],
    },
    {
        path: 'data-treatment',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | nequi-features-data-treatment-presentation */ "nequi-features-data-treatment-presentation").then(__webpack_require__.bind(null, /*! @nequi/features/data-treatment/presentation */ "fJ9x")).then(function (m) {
                return new _nequi_features_commons__WEBPACK_IMPORTED_MODULE_1__["ModuleWithProvidersFactory"](m.FeaturesDataTreatmentModule.withConfig([
                    { provide: _nequi_features_commons__WEBPACK_IMPORTED_MODULE_1__["ORIGIN_FLOW"], useValue: _nequi_features_commons__WEBPACK_IMPORTED_MODULE_1__["OriginFlow"].PROFILE },
                ]));
            });
        },
    },
];
var ProfileSecurityRoutingModule = /** @class */ (function () {
    function ProfileSecurityRoutingModule() {
    }
    ProfileSecurityRoutingModule.ɵfac = function ProfileSecurityRoutingModule_Factory(t) { return new (t || ProfileSecurityRoutingModule)(); };
    ProfileSecurityRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: ProfileSecurityRoutingModule });
    ProfileSecurityRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return ProfileSecurityRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](ProfileSecurityRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "d1W1":
/*!*************************************************************************************************************!*\
  !*** ./libs/features/profile/src/presentation/profile-security/security-password/security-password.page.ts ***!
  \*************************************************************************************************************/
/*! exports provided: SecurityPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityPasswordPage", function() { return SecurityPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_features_profile_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/profile/data */ "m+bZ");
/* harmony import */ var _nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/profile/presentation */ "cLcF");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _security_password_view_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./security-password.view-model */ "eytC");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ui_src_lib_components_key_view_key_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../ui/src/lib/components/key-view/key-view.component */ "GsaP");
/* harmony import */ var _ui_src_lib_components_numeric_keyboard_numeric_keyboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../ui/src/lib/components/numeric-keyboard/numeric-keyboard.component */ "PTw6");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");



















function SecurityPasswordPage_ion_text_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-text", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "profile-security.change-password.crate.title"), " ");
} }
function SecurityPasswordPage_ion_text_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-text", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "profile-security.change-password.confirm.title"), " ");
} }
function SecurityPasswordPage_div_12_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "profile-security.change-password.crate.description"), " ");
} }
function SecurityPasswordPage_div_12_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "profile-security.change-password.confirm.description"), " ");
} }
function SecurityPasswordPage_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SecurityPasswordPage_div_12_span_1_Template, 3, 3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SecurityPasswordPage_div_12_span_2_Template, 3, 3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.viewModel.isConfirming);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.viewModel.isConfirming);
} }
var I18N_CHANGE_PASSWORD = 'profile-security.change-password';
var SecurityPasswordPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SecurityPasswordPage, _super);
    function SecurityPasswordPage(injector, changeDetectorRef, profileModel, toastService, translateProvider, profileService, loadingService) {
        var _this = _super.call(this, injector) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.profileModel = profileModel;
        _this.toastService = toastService;
        _this.translateProvider = translateProvider;
        _this.profileService = profileService;
        _this.loadingService = loadingService;
        _this.viewModel = new _security_password_view_model__WEBPACK_IMPORTED_MODULE_8__["SecurityPasswordViewModel"]();
        return _this;
    }
    SecurityPasswordPage.prototype.ionViewDidEnter = function () {
        this.messages = this.translateProvider.get(I18N_CHANGE_PASSWORD);
        this.toastService.showInfo(this.messages.toast.info);
    };
    SecurityPasswordPage.prototype.goBack = function () {
        if (this.viewModel.isConfirming) {
            this.viewModel.isConfirming = false;
            return;
        }
        this.navigatorProvider.back();
    };
    SecurityPasswordPage.prototype.keyPressed = function (password) {
        var responseMeter = Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_7__["passwordMeterCheck"])(password);
        if (responseMeter.isValid) {
            return;
        }
        this.resetAll();
        this.toastService.showError(this.messages.errors.repeated);
    };
    SecurityPasswordPage.prototype.onFilled = function () {
        if (this.viewModel.isConfirming) {
            this.processConfirmation();
            return;
        }
        this.initConfirmation();
    };
    SecurityPasswordPage.prototype.initConfirmation = function () {
        this.toastService.showSuccess(this.messages.toast.confirm);
        this.viewModel.isConfirming = true;
        this.viewModel.setErrorMessage(null);
        this.viewModel.setInitialPassword(this.viewModel.password);
        this.viewModel.password = '';
        this.changeDetectorRef.detectChanges();
    };
    SecurityPasswordPage.prototype.processConfirmation = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.viewModel.isSamePassword(this.viewModel.password)) {
                            this.resetAll();
                            this.viewModel.setErrorMessage(this.messages.errors.different);
                            return [2 /*return*/];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        return [4 /*yield*/, this.loadingService.show()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.profileService.changePassword({
                                newPassword: this.viewModel.password,
                                phoneNumber: this.profileModel.phoneNumber,
                            })];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.loadingService.hide(true)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.toastService.showSuccess(this.messages.toast.success)];
                    case 5:
                        _a.sent();
                        this.navigatorProvider.back();
                        return [3 /*break*/, 7];
                    case 6:
                        error_1 = _a.sent();
                        this.loadingService.hide(false);
                        this.resetAll();
                        this.toastService.showError((error_1 === null || error_1 === void 0 ? void 0 : error_1.errorMessage) || this.messages.errors.default);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    SecurityPasswordPage.prototype.resetAll = function () {
        this.viewModel.isConfirming = false;
        this.viewModel.password = '';
        this.viewModel.setInitialPassword('');
        this.changeDetectorRef.detectChanges();
    };
    SecurityPasswordPage.ɵfac = function SecurityPasswordPage_Factory(t) { return new (t || SecurityPasswordPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_profile_data__WEBPACK_IMPORTED_MODULE_4__["ProfileModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_6__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_3__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_6__["LoadingService"])); };
    SecurityPasswordPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SecurityPasswordPage, selectors: [["app-security-password"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 16, vars: 7, consts: [[1, "nequi-header"], ["slot", "start"], ["id", "security-password_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], ["fullscreen", "true", 1, "ion-content--enroll", "ion-padding-horizontal"], ["class", "nequi-title", 4, "ngIf"], [3, "value", "hidden", "filled"], ["class", "description", 4, "ngIf"], [1, "nequi-footer", "ion-padding-horizontal"], ["id", "profile-security-password_numeric-keyboard", 1, "ion-padding-horizontal", 3, "disabled", "digits", "digitsChange"], [1, "nequi-title"], [1, "description"], [4, "ngIf"]], template: function SecurityPasswordPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SecurityPasswordPage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-content", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SecurityPasswordPage_ion_text_6_Template, 3, 3, "ion-text", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SecurityPasswordPage_ion_text_7_Template, 3, 3, "ion-text", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-grid");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-row");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-col");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "app-key-view", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("filled", function SecurityPasswordPage_Template_app_key_view_filled_11_listener() { return ctx.onFilled(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, SecurityPasswordPage_div_12_Template, 3, 2, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-footer", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "app-numeric-keyboard", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("digitsChange", function SecurityPasswordPage_Template_app_numeric_keyboard_digitsChange_15_listener($event) { return ctx.viewModel.password = $event; })("digitsChange", function SecurityPasswordPage_Template_app_numeric_keyboard_digitsChange_15_listener($event) { return ctx.keyPressed($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.viewModel.isConfirming);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.viewModel.isConfirming);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.viewModel.password)("hidden", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx.viewModel.error == null ? null : ctx.viewModel.error.message));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", (ctx.viewModel.password == null ? null : ctx.viewModel.password.length) >= 4)("digits", ctx.viewModel.password);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonCol"], _ui_src_lib_components_key_view_key_view_component__WEBPACK_IMPORTED_MODULE_11__["KeyViewComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonFooter"], _ui_src_lib_components_numeric_keyboard_numeric_keyboard_component__WEBPACK_IMPORTED_MODULE_12__["NumericKeyboardComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonText"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"]], styles: [".description[_ngcontent-%COMP%] {\n  color: var(--medianoche);\n  font-size: 14px;\n  text-align: center;\n  margin: 12px 24px;\n}\n.description--has-error[_ngcontent-%COMP%] {\n  color: var(--guayaba);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvc2VjdXJpdHktcGFzc3dvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUNGO0FBQ0U7RUFDRSxxQkFBQTtBQUNKIiwiZmlsZSI6InNlY3VyaXR5LXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS1tZWRpYW5vY2hlKTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMTJweCAyNHB4O1xuXG4gICYtLWhhcy1lcnJvciB7XG4gICAgY29sb3I6IHZhcigtLWd1YXlhYmEpO1xuICB9XG59XG4iXX0= */"] });
    return SecurityPasswordPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_2__["FeatureBasePage"]));



/***/ }),

/***/ "eytC":
/*!*******************************************************************************************************************!*\
  !*** ./libs/features/profile/src/presentation/profile-security/security-password/security-password.view-model.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: SecurityPasswordViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityPasswordViewModel", function() { return SecurityPasswordViewModel; });
/* harmony import */ var _nequi_commons_exceptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nequi/commons/exceptions */ "0sJq");

var SecurityPasswordViewModel = /** @class */ (function () {
    function SecurityPasswordViewModel() {
        this.isConfirming = false;
        this.password = '';
        this.initialPassword = '';
    }
    SecurityPasswordViewModel.prototype.setInitialPassword = function (password) {
        this.initialPassword = password;
    };
    SecurityPasswordViewModel.prototype.isSamePassword = function (password) {
        return this.initialPassword === password;
    };
    SecurityPasswordViewModel.prototype.setErrorMessage = function (message) {
        if (!message) {
            return;
        }
        this.error = new _nequi_commons_exceptions__WEBPACK_IMPORTED_MODULE_0__["CoreException"](message);
    };
    return SecurityPasswordViewModel;
}());



/***/ }),

/***/ "t/OL":
/*!*********************************************************************************************************!*\
  !*** ./libs/features/profile/src/presentation/profile-security/facial-biometry/facial-biometry.page.ts ***!
  \*********************************************************************************************************/
/*! exports provided: FacialBiometryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacialBiometryPage", function() { return FacialBiometryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_security_auth_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/security/auth/core */ "9r1r");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _home_profile_security_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../home/profile-security-config */ "K1aW");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _security_biometry_src_presentation_choose_biometry_organisms_choose_biometry_choose_biometry_organism__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../security/biometry/src/presentation/choose-biometry/organisms/choose-biometry/choose-biometry.organism */ "3g4N");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
















var FacialBiometryPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FacialBiometryPage, _super);
    function FacialBiometryPage(injector, loadingService, provisioningInteractor, loggerInteractor, authInteractor, route) {
        var _this = _super.call(this, injector) || this;
        _this.loadingService = loadingService;
        _this.provisioningInteractor = provisioningInteractor;
        _this.loggerInteractor = loggerInteractor;
        _this.authInteractor = authInteractor;
        _this.route = route;
        _this.config = _home_profile_security_config__WEBPACK_IMPORTED_MODULE_7__["ProfileSecurityConfig"];
        return _this;
    }
    FacialBiometryPage.prototype.successVerification = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var isDeviceProvisioned, softToken, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, this.provisioningInteractor.isDeviceProvisioned()];
                    case 1:
                        isDeviceProvisioned = _a.sent();
                        if (!isDeviceProvisioned) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.provisioningInteractor.getSoftToken()];
                    case 2:
                        softToken = _a.sent();
                        return [4 /*yield*/, this.authInteractor.validateSoftToken(softToken)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.loadingService.hide(true)];
                    case 4:
                        _a.sent();
                        this.navigatorProvider.navigateRoot(this.config.routes.showBiometryByVoicePage);
                        return [2 /*return*/];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_1 = _a.sent();
                        this.loggerInteractor.error(error_1);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    FacialBiometryPage.ɵfac = function FacialBiometryPage_Factory(t) { return new (t || FacialBiometryPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__["ProvisioningInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__["LoggerInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_security_auth_core__WEBPACK_IMPORTED_MODULE_5__["AuthInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
    FacialBiometryPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FacialBiometryPage, selectors: [["app-facial-biometry"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 10, vars: 3, consts: [[1, "nequi-header"], ["slot", "start"], ["id", "facial_biometry_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], [1, "ion-content--enroll", "ion-padding-horizontal"], ["id", "facial_biometry_title_label", 1, "nequi-title"], [3, "faceBiometrySelected"]], template: function FacialBiometryPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FacialBiometryPage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-content", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-text", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nequi-choose-biometry", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("faceBiometrySelected", function FacialBiometryPage_Template_nequi_choose_biometry_faceBiometrySelected_9_listener() { return ctx.successVerification(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 1, "profile-security.facial-biometry.title"), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonText"], _security_biometry_src_presentation_choose_biometry_organisms_choose_biometry_choose_biometry_organism__WEBPACK_IMPORTED_MODULE_9__["ChooseBiometryOrganism"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"]], styles: [".content[_ngcontent-%COMP%] {\n  color: var(--gray-60);\n  font-size: 0.875em;\n  line-height: 17px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvZmFjaWFsLWJpb21ldHJ5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUNGIiwiZmlsZSI6ImZhY2lhbC1iaW9tZXRyeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XG4gIGNvbG9yOiB2YXIoLS1ncmF5LTYwKTtcbiAgZm9udC1zaXplOiAwLjg3NWVtO1xuICBsaW5lLWhlaWdodDogMTdweDtcbn1cbiJdfQ== */"] });
    return FacialBiometryPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_4__["FeatureBasePage"]));



/***/ }),

/***/ "vnSM":
/*!*********************************************************************************************************************!*\
  !*** ./libs/features/profile/src/presentation/profile-security/security-fingerprint/security-fingerprint.config.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: SecurityFingerprintConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityFingerprintConfig", function() { return SecurityFingerprintConfig; });
var SecurityFingerprintConfig = Object.freeze({
    i18n: { toastSuccess: 'profile-security.activate-fingerprint.success-activated' },
});


/***/ })

}]);
//# sourceMappingURL=profile-security-profile-security-module.js.map