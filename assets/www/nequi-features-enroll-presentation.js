(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nequi-features-enroll-presentation"],{

/***/ "1jMZ":
/*!*************************************************************************************************!*\
  !*** ./libs/features/enroll/src/presentation/pages/enroll-request/enroll-request.view-model.ts ***!
  \*************************************************************************************************/
/*! exports provided: EnrollRequestViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnrollRequestViewModel", function() { return EnrollRequestViewModel; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _enroll_request_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enroll-request.config */ "pn2B");


var EnrollRequestViewModel = /** @class */ (function () {
    function EnrollRequestViewModel() {
        this.isKeyboardShown = false;
        this.enrollRequestConfig = _enroll_request_config__WEBPACK_IMPORTED_MODULE_1__["EnrollRequestConfig"];
    }
    EnrollRequestViewModel.prototype.initForm = function (phoneNumber, phoneNumberPattern) {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](phoneNumber, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(phoneNumberPattern),
            ]),
            sendMessage: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](false, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].requiredTrue]),
        });
        this.form.markAsPristine();
        this.form.markAsUntouched();
    };
    Object.defineProperty(EnrollRequestViewModel.prototype, "phoneNumberFormControl", {
        get: function () {
            return this.form.get('phoneNumber');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EnrollRequestViewModel.prototype, "sendMessageFormControl", {
        get: function () {
            return this.form.get('sendMessage');
        },
        enumerable: false,
        configurable: true
    });
    EnrollRequestViewModel.prototype.onInputFocus = function (isKeyboardShown) {
        this.isKeyboardShown = isKeyboardShown;
    };
    return EnrollRequestViewModel;
}());



/***/ }),

/***/ "IlNe":
/*!**********************************************************!*\
  !*** ./libs/features/enroll/src/config/enroll.config.ts ***!
  \**********************************************************/
/*! exports provided: EnrollConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnrollConfig", function() { return EnrollConfig; });
var EnrollConfig = Object.freeze({
    i18n: {
        moduleKey: 'enroll',
        accountLocksKey: 'account-locks',
    },
    cache: {
        keys: {
            userProfileInfo: 'user-profile-info',
        },
    },
    applicationData: {
        biometryBlocked: 'biometry.biometryBlocked',
    },
});


/***/ }),

/***/ "KrOT":
/*!*********************************************************************************************!*\
  !*** ./libs/features/enroll/src/presentation/pages/enroll-token/enroll-token.view-model.ts ***!
  \*********************************************************************************************/
/*! exports provided: EnrollTokenViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnrollTokenViewModel", function() { return EnrollTokenViewModel; });
var EnrollTokenViewModel = /** @class */ (function () {
    function EnrollTokenViewModel() {
        this.phoneNumber = '';
        this.oneTimePin = '';
    }
    EnrollTokenViewModel.prototype.setQueryParams = function (queryParamMap) {
        this.tokenAccess = queryParamMap.get('tokenAccess');
        this.phoneNumber = queryParamMap.get('phoneNumber');
        this.isEnroll =
            queryParamMap.get('isEnroll') === undefined ? true : Boolean(queryParamMap.get('isEnroll'));
    };
    return EnrollTokenViewModel;
}());



/***/ }),

/***/ "QdMn":
/*!*********************************************************************************!*\
  !*** ./libs/features/enroll/src/presentation/features-enroll-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: FeaturesEnrollRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesEnrollRoutingModule", function() { return FeaturesEnrollRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _pages_enroll_request_enroll_request_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/enroll-request/enroll-request.page */ "aAGC");
/* harmony import */ var _pages_enroll_token_enroll_token_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/enroll-token/enroll-token.page */ "yj3f");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






var routes = [
    {
        path: 'enroll-request',
        component: _pages_enroll_request_enroll_request_page__WEBPACK_IMPORTED_MODULE_2__["EnrollRequestPage"],
    },
    {
        path: 'enroll-token',
        component: _pages_enroll_token_enroll_token_page__WEBPACK_IMPORTED_MODULE_3__["EnrollTokenPage"],
    },
    {
        path: 'data-treatment',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | nequi-features-data-treatment-presentation */ "nequi-features-data-treatment-presentation").then(__webpack_require__.bind(null, /*! @nequi/features/data-treatment/presentation */ "fJ9x")).then(function (m) {
                return new _nequi_features_commons__WEBPACK_IMPORTED_MODULE_1__["ModuleWithProvidersFactory"](m.FeaturesDataTreatmentModule.withConfig([
                    { provide: _nequi_features_commons__WEBPACK_IMPORTED_MODULE_1__["ORIGIN_FLOW"], useValue: _nequi_features_commons__WEBPACK_IMPORTED_MODULE_1__["OriginFlow"].ENROLL },
                ]));
            });
        },
    },
];
var FeaturesEnrollRoutingModule = /** @class */ (function () {
    function FeaturesEnrollRoutingModule() {
    }
    FeaturesEnrollRoutingModule.ɵfac = function FeaturesEnrollRoutingModule_Factory(t) { return new (t || FeaturesEnrollRoutingModule)(); };
    FeaturesEnrollRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: FeaturesEnrollRoutingModule });
    FeaturesEnrollRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return FeaturesEnrollRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](FeaturesEnrollRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "ULS5":
/*!********************************************************!*\
  !*** ./libs/features/enroll/src/presentation/index.ts ***!
  \********************************************************/
/*! exports provided: FeaturesEnrollModule, ChangePhoneNumberService, TokenAccessActionService, EnrollRequestPage, EnrollTokenConfig, EnrollTokenPage, EnrollTokenViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _features_enroll_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./features-enroll.module */ "u5vB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeaturesEnrollModule", function() { return _features_enroll_module__WEBPACK_IMPORTED_MODULE_0__["FeaturesEnrollModule"]; });

/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ "hRFZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChangePhoneNumberService", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["ChangePhoneNumberService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenAccessActionService", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["TokenAccessActionService"]; });

/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages */ "csdp");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnrollRequestPage", function() { return _pages__WEBPACK_IMPORTED_MODULE_2__["EnrollRequestPage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnrollTokenConfig", function() { return _pages__WEBPACK_IMPORTED_MODULE_2__["EnrollTokenConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnrollTokenPage", function() { return _pages__WEBPACK_IMPORTED_MODULE_2__["EnrollTokenPage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnrollTokenViewModel", function() { return _pages__WEBPACK_IMPORTED_MODULE_2__["EnrollTokenViewModel"]; });






/***/ }),

/***/ "aAGC":
/*!*******************************************************************************************!*\
  !*** ./libs/features/enroll/src/presentation/pages/enroll-request/enroll-request.page.ts ***!
  \*******************************************************************************************/
/*! exports provided: EnrollRequestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnrollRequestPage", function() { return EnrollRequestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_apps_base_mobile_config_features_commons_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/apps/base/mobile/config/features/commons/services */ "hVBB");
/* harmony import */ var _nequi_cache_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/cache/core */ "k/UE");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_features_contacts_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nequi/features/contacts/core */ "Zcn6");
/* harmony import */ var _nequi_features_contingency_presentation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nequi/features/contingency/presentation */ "fcjA");
/* harmony import */ var _nequi_features_enroll_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nequi/features/enroll/core */ "HgV1");
/* harmony import */ var _nequi_features_profile_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @nequi/features/profile/core */ "w8sc");
/* harmony import */ var _nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @nequi/features/profile/presentation */ "cLcF");
/* harmony import */ var _nequi_features_security_auth_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @nequi/features/security/auth/core */ "9r1r");
/* harmony import */ var _nequi_features_settings_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @nequi/features/settings/core */ "0nzD");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _services_change_phone_number_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../services/change-phone-number.service */ "1oV5");
/* harmony import */ var _enroll_request_config__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./enroll-request.config */ "pn2B");
/* harmony import */ var _enroll_request_view_model__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./enroll-request.view-model */ "1jMZ");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ui_src_lib_directives_form_content_style_form_content_style_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../../ui/src/lib/directives/form-content-style/form-content-style.directive */ "+XT3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ui_src_lib_controls_nequi_input_phone_nequi_input_phone_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../../../ui/src/lib/controls/nequi-input-phone/nequi-input-phone.component */ "42OV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");









































var CONECTION_ERROR_1 = '1001';
var CONECTION_ERROR_2 = '1002';
// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
function isErrorConection(errorCode) {
    return errorCode === CONECTION_ERROR_1 || errorCode === CONECTION_ERROR_2;
}
var EnrollRequestPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EnrollRequestPage, _super);
    function EnrollRequestPage(injector, authProvider, settingInteractor, translateProvider, loadingService, enrollInteractor, toastService, alertService, profileService, router, statusBarService, cacheInteractor, userInfoProvider, changePhoneNumberService, analyticsInteractor, profileInteractor, activatedRoute, sessionProvider, contingencyService, authInteractor, clevertapInteractor, moduleConfigProvider, phoneNumberConfig) {
        var _a;
        var _b;
        var _this = _super.call(this, injector) || this;
        _this.authProvider = authProvider;
        _this.settingInteractor = settingInteractor;
        _this.translateProvider = translateProvider;
        _this.loadingService = loadingService;
        _this.enrollInteractor = enrollInteractor;
        _this.toastService = toastService;
        _this.alertService = alertService;
        _this.profileService = profileService;
        _this.router = router;
        _this.statusBarService = statusBarService;
        _this.cacheInteractor = cacheInteractor;
        _this.userInfoProvider = userInfoProvider;
        _this.changePhoneNumberService = changePhoneNumberService;
        _this.analyticsInteractor = analyticsInteractor;
        _this.profileInteractor = profileInteractor;
        _this.activatedRoute = activatedRoute;
        _this.sessionProvider = sessionProvider;
        _this.contingencyService = contingencyService;
        _this.authInteractor = authInteractor;
        _this.clevertapInteractor = clevertapInteractor;
        _this.moduleConfigProvider = moduleConfigProvider;
        _this.phoneNumberConfig = phoneNumberConfig;
        _this.viewModel = new _enroll_request_view_model__WEBPACK_IMPORTED_MODULE_19__["EnrollRequestViewModel"]();
        _this.sendRequestErrors = (_a = {},
            _a[_nequi_features_enroll_core__WEBPACK_IMPORTED_MODULE_11__["UserExistException"].name] = function () { return _this.userExist(); },
            _a[_nequi_features_enroll_core__WEBPACK_IMPORTED_MODULE_11__["ExcededAttempsGenerateOtpException"].name] = function () { return _this.userExceededAttempts(); },
            _a[_nequi_features_enroll_core__WEBPACK_IMPORTED_MODULE_11__["IsInvitationModeException"].name] = function () { return _this.invitationMode(); },
            _a);
        _this.statusBarService.changeStatusBarColor(_nequi_apps_base_mobile_config_features_commons_services__WEBPACK_IMPORTED_MODULE_3__["Colors"].DEFAULT);
        _this.translateProvider.loadModule(_this.moduleConfigProvider.i18n.moduleKey);
        var phoneNumber = (_b = _this.router.getCurrentNavigation().extras.state) === null || _b === void 0 ? void 0 : _b.phoneNumber;
        _this.viewModel.initForm(phoneNumber, _this.phoneNumberConfig.validExpression);
        return _this;
    }
    EnrollRequestPage.prototype.goBack = function () {
        this.navigatorProvider.back();
    };
    EnrollRequestPage.prototype.sendRequest = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        if (this.sessionProvider.hasContingency()) {
                            this.contingencyService.showCanNotCreateAccountModal();
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.loadingService.show()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.handleSendRequest()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.handleError(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    EnrollRequestPage.prototype.handleSendRequest = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var phoneNumber;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        phoneNumber = this.viewModel.phoneNumberFormControl.value;
                        if (!this.changePhoneNumberService.isChangePhoneNumberActive) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.validateNewPhoneNumber(phoneNumber.toString())];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 2: return [4 /*yield*/, this.enrollInteractor.request(phoneNumber)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.loadingService.hideWithoutFeedback()];
                    case 4:
                        _a.sent();
                        this.trackAskForNumber();
                        this.goToEnrollToken();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    EnrollRequestPage.prototype.invitationMode = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingService.hideWithoutFeedback()];
                    case 1:
                        _a.sent();
                        // TODO: $state.go('enrollInvitationMode', {});
                        this.goToEnrollToken();
                        return [2 /*return*/];
                }
            });
        });
    };
    EnrollRequestPage.prototype.goToEnrollToken = function () {
        this.navigatorProvider.navigateForward(this.viewModel.enrollRequestConfig.enrollTokenUrl, {
            queryParams: {
                phoneNumber: this.viewModel.phoneNumberFormControl.value,
                tokenAccess: _nequi_features_security_auth_core__WEBPACK_IMPORTED_MODULE_14__["TokenAccess"].REGISTRY,
                isEnroll: true,
            },
        });
    };
    EnrollRequestPage.prototype.handleError = function (error) {
        var _a;
        if (this.sendRequestErrors[(_a = error === null || error === void 0 ? void 0 : error.constructor) === null || _a === void 0 ? void 0 : _a.name]) {
            return this.sendRequestErrors[error.constructor.name]();
        }
        this.genericViewError(error);
    };
    EnrollRequestPage.prototype.genericViewError = function (error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var isConectionError;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingService.hideWithoutFeedback()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.toastService.hide()];
                    case 2:
                        _a.sent();
                        isConectionError = isErrorConection(error.code);
                        if (isConectionError) {
                            return [2 /*return*/, this.toastService.showConnectionError(error.message)];
                        }
                        this.toastService.showError(error.message);
                        return [2 /*return*/];
                }
            });
        });
    };
    EnrollRequestPage.prototype.userExceededAttempts = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingService.hideWithoutFeedback()];
                    case 1:
                        _a.sent();
                        this.alertService.showByI18n({
                            i18nKey: this.viewModel.enrollRequestConfig.errorExceededAttemptsGenerateOtp,
                            handlers: {
                                accept: function () { return _this.authProvider.signOut(); },
                            },
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    EnrollRequestPage.prototype.accountAlreadyExists = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.settingInteractor.get()];
                    case 1:
                        _a.sent();
                        /* analyticsProvider.removeAditionalTagForView(
                          configAnalitycsProvider.generalAnalytics.aditionalTagsForViews.userOrigin.tagName
                        ); */
                        this.changePhoneNumberService.isChangePhoneNumberActive = false;
                        this.navigatorProvider.navigateForward(this.viewModel.enrollRequestConfig.authValidatePasswordUrl, {
                            queryParams: {
                                phoneNumber: this.viewModel.phoneNumberFormControl.value,
                                isDeviceProvisioned: false,
                            },
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    EnrollRequestPage.prototype.showAlertAccountAlreadyExists = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var phoneNumber;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userInfoProvider.getPhoneNumber()];
                    case 1:
                        phoneNumber = _a.sent();
                        this.alertService.showByI18n({
                            i18nKey: this.viewModel.enrollRequestConfig.errorAccountAlreadyExists,
                            handlers: {
                                accept: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                        this.accountAlreadyExists();
                                        return [2 /*return*/];
                                    });
                                }); },
                            },
                            messageParameters: [phoneNumber],
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    EnrollRequestPage.prototype.validateStateUser = function (response) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.cacheInteractor.clearGroup(this.moduleConfigProvider.cache.keys.userProfileInfo);
                this.profileService.setLastLogin(null);
                switch (response.state) {
                    case _nequi_features_contacts_core__WEBPACK_IMPORTED_MODULE_9__["UserStatus"].ENROLL:
                        this.goToEnrollToken();
                        break;
                    case _nequi_features_contacts_core__WEBPACK_IMPORTED_MODULE_9__["UserStatus"].LITE_REGISTRY:
                        this.showAlertAccountAlreadyExists();
                        break;
                    default:
                }
                return [2 /*return*/];
            });
        });
    };
    EnrollRequestPage.prototype.userExist = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var response, catchError_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 6]);
                        return [4 /*yield*/, this.authInteractor.phoneNumberEmailValidation(this.viewModel.phoneNumberFormControl.value)];
                    case 1:
                        response = _a.sent();
                        this.clevertapInteractor.changeUserIdentity(response.cifId);
                        return [4 /*yield*/, this.validateStateUser(response)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.loadingService.hideWithoutFeedback()];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 4:
                        catchError_1 = _a.sent();
                        return [4 /*yield*/, this.loadingService.hideWithoutFeedback()];
                    case 5:
                        _a.sent();
                        this.toastService.showInfo(catchError_1.message);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    EnrollRequestPage.prototype.trackAskForNumber = function () {
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_6__["AnalyticsType"].FACEBOOK,
            params: { eventName: _enroll_request_config__WEBPACK_IMPORTED_MODULE_18__["EnrollRequestConfig"].anaytics.askForNumberEventName },
        });
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_6__["AnalyticsType"].FIREBASE,
            params: { eventName: _enroll_request_config__WEBPACK_IMPORTED_MODULE_18__["EnrollRequestConfig"].anaytics.askForNumberEventName },
        });
    };
    EnrollRequestPage.prototype.validateNewPhoneNumber = function (phoneNumber) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var error_2;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.profileInteractor.validateNewPhoneNumber(phoneNumber)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.loadingService.hideWithoutFeedback()];
                    case 2:
                        _a.sent();
                        this.navigatorProvider.navigateForward(this.viewModel.enrollRequestConfig.enrollTokenUrl, {
                            queryParams: {
                                phoneNumber: phoneNumber,
                            },
                            relativeTo: this.activatedRoute,
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        this.handleError(error_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    EnrollRequestPage.ɵfac = function EnrollRequestPage_Factory(t) { return new (t || EnrollRequestPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_5__["AuthProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_settings_core__WEBPACK_IMPORTED_MODULE_15__["SettingInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_8__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_16__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_enroll_core__WEBPACK_IMPORTED_MODULE_11__["EnrollInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_16__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_7__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_13__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_apps_base_mobile_config_features_commons_services__WEBPACK_IMPORTED_MODULE_3__["StatusBarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_cache_core__WEBPACK_IMPORTED_MODULE_4__["CacheInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_5__["UserInfoProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_change_phone_number_service__WEBPACK_IMPORTED_MODULE_17__["ChangePhoneNumberService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_6__["AnalyticsInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_profile_core__WEBPACK_IMPORTED_MODULE_12__["ProfileInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_8__["SessionProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_contingency_presentation__WEBPACK_IMPORTED_MODULE_10__["ContingencyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_security_auth_core__WEBPACK_IMPORTED_MODULE_14__["AuthInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_6__["AnalyticsThirdPartyInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_8__["ModuleConfigProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_5__["PhoneNumberConfigProvider"])); };
    EnrollRequestPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EnrollRequestPage, selectors: [["app-enroll-request"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 31, vars: 23, consts: [[1, "nequi-header"], ["slot", "start"], ["id", "enroll-request_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], ["fullscreen", "true", "appFormContentStyle", "", 1, "ion-content--enroll", "ion-padding-horizontal"], [1, "nequi-title"], [3, "formGroup"], [1, "ion-no-padding"], [1, "margin-bottom-16"], ["id", "enroll-request_phone-number_input", "itemClass", "nequi-item", "inputClass", "nequi-item__input", "codeClass", "nequi-item__phone-code", "divisionClass", "nequi-item__division", "color", "input", 3, "placeholder", "control", "errorMessages", "hasIndicative", "focusEvent"], [1, "request-enroll__item-text"], [1, "nequi-footer", "ion-no-border"], ["lines", "none", 1, "request-enroll__item"], [1, "request-enroll__item-text", "ion-text-wrap"], ["slot", "start", "id", "enroll-request_agree_checkbox", 1, "filled-in", 3, "formControl"], ["id", "enroll-request_send-request_button", "expand", "block", "shape", "round", "color", "guayaba", 1, "margin-bottom-8", 3, "disabled", "click"]], template: function EnrollRequestPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EnrollRequestPage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "form", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-grid", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-row");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-col", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "nequi-input-phone", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focusEvent", function EnrollRequestPage_Template_nequi_input_phone_focusEvent_13_listener($event) { return ctx.viewModel.onInputFocus($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-row");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-col");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-note", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-footer", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-item", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ion-label", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "ion-checkbox", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ion-button", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EnrollRequestPage_Template_ion_button_click_28_listener() { return ctx.sendRequest(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](30, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 11, "enroll.request-enroll.title"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.viewModel.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 13, "enroll.request-enroll.placeholders.input-phone"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("control", ctx.viewModel.phoneNumberFormControl)("errorMessages", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 15, "enroll.request-enroll.validators.phone-number"))("hasIndicative", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 17, "enroll.request-enroll.description"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 19, "enroll.request-enroll.message"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.viewModel.sendMessageFormControl);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.viewModel.form.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](30, 21, "enroll.request-enroll.send-message"), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_20__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_20__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_20__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_20__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_20__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_20__["IonContent"], _ui_src_lib_directives_form_content_style_form_content_style_directive__WEBPACK_IMPORTED_MODULE_21__["FormContentStyleDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_20__["IonText"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_20__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_20__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_20__["IonCol"], _ui_src_lib_controls_nequi_input_phone_nequi_input_phone_component__WEBPACK_IMPORTED_MODULE_23__["NequiInputPhoneComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_20__["IonNote"], _ionic_angular__WEBPACK_IMPORTED_MODULE_20__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_20__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_20__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_20__["IonCheckbox"], _ionic_angular__WEBPACK_IMPORTED_MODULE_20__["BooleanValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormControlDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__["TranslatePipe"]], styles: [".request-enroll__item[_ngcontent-%COMP%] {\n  --padding-start: 16px;\n  --padding-end: 8px;\n  --padding-bottom: 17px;\n  --background: none;\n  --background-hover: none;\n}\n.request-enroll__item-text[_ngcontent-%COMP%] {\n  color: var(--text-color, var(--gray-alert-message));\n  text-align: justify;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 16px;\n}\n.nequi-footer__toolbar[_ngcontent-%COMP%] {\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvZW5yb2xsLXJlcXVlc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQUFKO0FBRUk7RUFDRSxtREFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFBTjtBQU1FO0VBQ0UsVUFBQTtBQUhKIiwiZmlsZSI6ImVucm9sbC1yZXF1ZXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXF1ZXN0LWVucm9sbCB7XG4gICZfX2l0ZW0ge1xuICAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgICAtLXBhZGRpbmctZW5kOiA4cHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTdweDtcbiAgICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBub25lO1xuXG4gICAgJi10ZXh0IHtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLCB2YXIoLS1ncmF5LWFsZXJ0LW1lc3NhZ2UpKTtcbiAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgfVxuICB9XG59XG5cbi5uZXF1aS1mb290ZXIge1xuICAmX190b29sYmFyIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG4iXX0= */"] });
    return EnrollRequestPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_7__["FeatureBasePage"]));



/***/ }),

/***/ "csdp":
/*!**************************************************************!*\
  !*** ./libs/features/enroll/src/presentation/pages/index.ts ***!
  \**************************************************************/
/*! exports provided: EnrollRequestPage, EnrollTokenConfig, EnrollTokenPage, EnrollTokenViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enroll_request_enroll_request_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enroll-request/enroll-request.page */ "aAGC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnrollRequestPage", function() { return _enroll_request_enroll_request_page__WEBPACK_IMPORTED_MODULE_0__["EnrollRequestPage"]; });

/* harmony import */ var _enroll_token_enroll_token_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enroll-token/enroll-token.config */ "Vwvn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnrollTokenConfig", function() { return _enroll_token_enroll_token_config__WEBPACK_IMPORTED_MODULE_1__["EnrollTokenConfig"]; });

/* harmony import */ var _enroll_token_enroll_token_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enroll-token/enroll-token.page */ "yj3f");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnrollTokenPage", function() { return _enroll_token_enroll_token_page__WEBPACK_IMPORTED_MODULE_2__["EnrollTokenPage"]; });

/* harmony import */ var _enroll_token_enroll_token_view_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enroll-token/enroll-token.view-model */ "KrOT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnrollTokenViewModel", function() { return _enroll_token_enroll_token_view_model__WEBPACK_IMPORTED_MODULE_3__["EnrollTokenViewModel"]; });







/***/ }),

/***/ "pn2B":
/*!*********************************************************************************************!*\
  !*** ./libs/features/enroll/src/presentation/pages/enroll-request/enroll-request.config.ts ***!
  \*********************************************************************************************/
/*! exports provided: EnrollRequestConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnrollRequestConfig", function() { return EnrollRequestConfig; });
var EnrollRequestConfig = Object.freeze({
    authValidatePasswordUrl: '/auth/validate-password',
    enrollTokenUrl: '/auth/enroll/enroll-token',
    enrollRequestUrl: '/auth/enroll/enroll-request',
    errorExceededAttemptsGenerateOtp: 'enroll.request-enroll.alert.error.exceeded-attempts-generate-otp',
    errorAccountAlreadyExists: 'enroll.request-enroll.alert.error.account-already-exists',
    anaytics: {
        askForNumberEventName: 'Vinculación_pedir_numero_cel',
    },
});


/***/ }),

/***/ "u5vB":
/*!*************************************************************************!*\
  !*** ./libs/features/enroll/src/presentation/features-enroll.module.ts ***!
  \*************************************************************************/
/*! exports provided: FeaturesEnrollModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesEnrollModule", function() { return FeaturesEnrollModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_enroll_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/enroll/core */ "HgV1");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _config_enroll_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config/enroll.config */ "IlNe");
/* harmony import */ var _features_enroll_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./features-enroll-routing.module */ "QdMn");
/* harmony import */ var _pages_enroll_request_enroll_request_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/enroll-request/enroll-request.page */ "aAGC");
/* harmony import */ var _pages_enroll_token_enroll_token_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/enroll-token/enroll-token.page */ "yj3f");
/* harmony import */ var _services_token_access_action_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/token-access-action.service */ "GhcM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");















var FeaturesEnrollModule = /** @class */ (function () {
    function FeaturesEnrollModule() {
    }
    FeaturesEnrollModule.ɵfac = function FeaturesEnrollModule_Factory(t) { return new (t || FeaturesEnrollModule)(); };
    FeaturesEnrollModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: FeaturesEnrollModule });
    FeaturesEnrollModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ providers: [
            _services_token_access_action_service__WEBPACK_IMPORTED_MODULE_12__["TokenAccessActionService"],
            _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_4__["PhonePipe"],
            {
                provide: _nequi_features_enroll_core__WEBPACK_IMPORTED_MODULE_5__["EnrollInteractor"],
                deps: [_nequi_features_enroll_core__WEBPACK_IMPORTED_MODULE_5__["EnrollRepository"]],
                useClass: _nequi_features_enroll_core__WEBPACK_IMPORTED_MODULE_5__["EnrollInteractor"],
            },
            {
                provide: _nequi_features_commons__WEBPACK_IMPORTED_MODULE_3__["ModuleConfigProvider"],
                useValue: _config_enroll_config__WEBPACK_IMPORTED_MODULE_8__["EnrollConfig"],
            },
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _features_enroll_routing_module__WEBPACK_IMPORTED_MODULE_9__["FeaturesEnrollRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _nequi_ui__WEBPACK_IMPORTED_MODULE_6__["NequiUiModule"],
                _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_4__["FeaturesCommonsModule"],
            ]] });
    return FeaturesEnrollModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](FeaturesEnrollModule, { declarations: [_pages_enroll_request_enroll_request_page__WEBPACK_IMPORTED_MODULE_10__["EnrollRequestPage"], _pages_enroll_token_enroll_token_page__WEBPACK_IMPORTED_MODULE_11__["EnrollTokenPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _features_enroll_routing_module__WEBPACK_IMPORTED_MODULE_9__["FeaturesEnrollRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
        _nequi_ui__WEBPACK_IMPORTED_MODULE_6__["NequiUiModule"],
        _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_4__["FeaturesCommonsModule"]] }); })();


/***/ }),

/***/ "yj3f":
/*!***************************************************************************************!*\
  !*** ./libs/features/enroll/src/presentation/pages/enroll-token/enroll-token.page.ts ***!
  \***************************************************************************************/
/*! exports provided: EnrollTokenPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnrollTokenPage", function() { return EnrollTokenPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_application_data_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/application-data/core */ "UgzZ");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_commons_presentation_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/commons/presentation/services */ "ao53");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_features_contacts_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/features/contacts/core */ "Zcn6");
/* harmony import */ var _nequi_features_enroll_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nequi/features/enroll/core */ "HgV1");
/* harmony import */ var _nequi_features_security_auth_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nequi/features/security/auth/core */ "9r1r");
/* harmony import */ var _nequi_features_security_biometry_core_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nequi/features/security/biometry/core/constants */ "Ujqc");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _services_change_phone_number_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/change-phone-number.service */ "1oV5");
/* harmony import */ var _services_token_access_action_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/token-access-action.service */ "GhcM");
/* harmony import */ var _enroll_token_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./enroll-token.config */ "Vwvn");
/* harmony import */ var _enroll_token_view_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./enroll-token.view-model */ "KrOT");
/* harmony import */ var _nequi_utils_date__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @nequi/utils/date */ "tGfC");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _commons_src_presentation_organisms_request_otp_request_otp_organism__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../commons/src/presentation/organisms/request-otp/request-otp.organism */ "CR+6");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");






















var EnrollTokenPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EnrollTokenPage, _super);
    function EnrollTokenPage(injector) {
        var _this = _super.call(this, injector) || this;
        _this.viewModel = new _enroll_token_view_model__WEBPACK_IMPORTED_MODULE_16__["EnrollTokenViewModel"]();
        _this.route = injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]);
        _this.sessionProvider = injector.get(_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_7__["SessionProvider"]);
        _this.loadingService = injector.get(_nequi_ui__WEBPACK_IMPORTED_MODULE_12__["LoadingService"]);
        _this.translateProvider = injector.get(_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_7__["TranslateProvider"]);
        _this.activitySessionService = injector.get(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__["ActivitySessionService"]);
        _this.enrollInteractor = injector.get(_nequi_features_enroll_core__WEBPACK_IMPORTED_MODULE_9__["EnrollInteractor"]);
        _this.toastService = injector.get(_nequi_ui__WEBPACK_IMPORTED_MODULE_12__["ToastService"]);
        _this.provisioningManagementService = injector.get(_nequi_features_commons_presentation_services__WEBPACK_IMPORTED_MODULE_6__["ProvisioningManagementService"]);
        _this.provisioningInteractor = injector.get(_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["ProvisioningInteractor"]);
        _this.userInfoProvider = injector.get(_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_7__["UserInfoProvider"]);
        _this.tokenAccessActionService = injector.get(_services_token_access_action_service__WEBPACK_IMPORTED_MODULE_14__["TokenAccessActionService"]);
        _this.authProvider = injector.get(_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_7__["AuthProvider"]);
        _this.changePhoneNumberService = injector.get(_services_change_phone_number_service__WEBPACK_IMPORTED_MODULE_13__["ChangePhoneNumberService"]);
        _this.analyticsInteractor = injector.get(_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["AnalyticsInteractor"]);
        _this.applicationDataInteractor = injector.get(_nequi_features_application_data_core__WEBPACK_IMPORTED_MODULE_3__["ApplicationDataInteractor"]);
        _this.moduleConfigProvider = injector.get(_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_7__["ModuleConfigProvider"]);
        _this.translateProvider.loadModule(_this.moduleConfigProvider.i18n.moduleKey);
        _this.translateProvider.loadModule(_this.moduleConfigProvider.i18n.accountLocksKey);
        return _this;
    }
    EnrollTokenPage.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.viewModel.setQueryParams(this.route.snapshot.queryParamMap);
                        return [4 /*yield*/, this.tokenAccessActionService.initActions(this.viewModel.tokenAccess, this.viewModel.phoneNumber)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EnrollTokenPage.prototype.goBack = function () {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                (_a = this.requestOtpOrganism) === null || _a === void 0 ? void 0 : _a.cancel();
                return [2 /*return*/];
            });
        });
    };
    EnrollTokenPage.prototype.onCanceled = function () {
        if (this.viewModel.isEnroll) {
            return this.navigatorProvider.navigateRoot(_enroll_token_config__WEBPACK_IMPORTED_MODULE_15__["EnrollTokenConfig"].routes.enrollRequest);
        }
        this.navigatorProvider.navigateRoot(_enroll_token_config__WEBPACK_IMPORTED_MODULE_15__["EnrollTokenConfig"].routes.login);
    };
    EnrollTokenPage.prototype.onOtpFilled = function (_a) {
        var otp = _a.otp, channel = _a.channel;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var params, result, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.changePhoneNumberService.isChangePhoneNumberActive) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.changePhoneNumberService.changePhoneNumber(this.viewModel.phoneNumber, otp)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/, this.tokenAccessActionService.finishActions(null)];
                    case 2:
                        params = {
                            phoneNumber: this.viewModel.phoneNumber,
                            isEnroll: this.viewModel.isEnroll,
                            channel: channel,
                            otp: otp,
                        };
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 9, , 11]);
                        return [4 /*yield*/, this.loadingService.show()];
                    case 4:
                        _b.sent();
                        return [4 /*yield*/, this.enrollInteractor.validateOtp(params)];
                    case 5:
                        result = _b.sent();
                        return [4 /*yield*/, this.otpValidated(result)];
                    case 6:
                        _b.sent();
                        return [4 /*yield*/, this.loadingService.hide(true)];
                    case 7:
                        _b.sent();
                        return [4 /*yield*/, this.checkBiometryBlocked()];
                    case 8:
                        _b.sent();
                        return [3 /*break*/, 11];
                    case 9:
                        error_1 = _b.sent();
                        return [4 /*yield*/, this.loadingService.hide(false)];
                    case 10:
                        _b.sent();
                        if (error_1 instanceof _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["ProvisioningFailedException"]) {
                            return [2 /*return*/, this.showProvisioningFailedError()];
                        }
                        this.requestOtpOrganism.processError(error_1);
                        return [3 /*break*/, 11];
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    EnrollTokenPage.prototype.otpValidated = function (response) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.trackRegistryOtp();
                        if (!(response.state === _nequi_features_contacts_core__WEBPACK_IMPORTED_MODULE_8__["UserStatus"].ENROLL)) return [3 /*break*/, 2];
                        this.activitySessionService.initActivity();
                        this.sessionProvider.userHasSession = true;
                        return [4 /*yield*/, this.userInfoProvider.save({
                                phoneNumber: this.viewModel.phoneNumber,
                                clientId: null,
                                state: String(response.state),
                            })];
                    case 1:
                        _a.sent();
                        this.sendAnalyticsAcceptDataTreatment();
                        return [3 /*break*/, 4];
                    case 2:
                        if (typeof response === 'undefined' || typeof response.softToken === 'undefined') {
                            return [2 /*return*/, this.showProvisioningFailedError()];
                        }
                        return [4 /*yield*/, this.provisioningDevice(response.softToken)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [4 /*yield*/, this.loadingService.hide(true)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.tokenAccessActionService.finishActions(this.viewModel.tokenAccess)];
                    case 6:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EnrollTokenPage.prototype.generateVoiceOtp = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var error_2;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 6]);
                        return [4 /*yield*/, this.loadingService.show()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.enrollInteractor.generateVoiceOtp(parseInt(this.viewModel.phoneNumber, 10))];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.loadingService.hide(true)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 4:
                        error_2 = _a.sent();
                        return [4 /*yield*/, this.loadingService.hide(false)];
                    case 5:
                        _a.sent();
                        this.toastService.showError(error_2.errorMessage);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    EnrollTokenPage.prototype.checkBiometryBlocked = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var biometryBlocked;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.applicationDataInteractor.findValue(this.moduleConfigProvider.applicationData.biometryBlocked, null, this.userInfoProvider.getPhoneNumber())];
                    case 1:
                        biometryBlocked = _a.sent();
                        if (biometryBlocked !== null) {
                            if (biometryBlocked === _nequi_features_security_biometry_core_constants__WEBPACK_IMPORTED_MODULE_11__["BiometryType"].FACE) {
                                this.tokenAccessActionService.finishActions(_nequi_features_security_auth_core__WEBPACK_IMPORTED_MODULE_10__["TokenAccess"].RESTART_BIOMETRY_FACE);
                                return [2 /*return*/];
                            }
                            this.tokenAccessActionService.finishActions(_nequi_features_security_auth_core__WEBPACK_IMPORTED_MODULE_10__["TokenAccess"].RESTART_BIOMETRY_VOICE);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    EnrollTokenPage.prototype.provisioningDevice = function (softToken) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var error_3;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        this.sessionProvider.userHasSession = true;
                        return [4 /*yield*/, this.provisioningManagementService.registerByActivationCode(softToken)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.provisioningInteractor.activateDevice({
                                phoneNumber: this.viewModel.phoneNumber,
                                isEmailSent: true,
                            })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_3 = _a.sent();
                        this.authProvider.signOut();
                        throw error_3;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    EnrollTokenPage.prototype.showProvisioningFailedError = function () {
        this.toastService.showError(this.translateProvider.get(_enroll_token_config__WEBPACK_IMPORTED_MODULE_15__["EnrollTokenConfig"].errorMessages.provisioningFailedError));
    };
    EnrollTokenPage.prototype.trackRegistryOtp = function () {
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["AnalyticsType"].FACEBOOK,
            params: { eventName: _enroll_token_config__WEBPACK_IMPORTED_MODULE_15__["EnrollTokenConfig"].anaytics.registryOtpEventName },
        });
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["AnalyticsType"].FIREBASE,
            params: { eventName: _enroll_token_config__WEBPACK_IMPORTED_MODULE_15__["EnrollTokenConfig"].anaytics.registryOtpEventName },
        });
    };
    EnrollTokenPage.prototype.sendAnalyticsAcceptDataTreatment = function () {
        var analytics = _enroll_token_config__WEBPACK_IMPORTED_MODULE_15__["EnrollTokenConfig"].anaytics.acceptDataTreatment;
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["AnalyticsType"].CLEVERTAP,
            params: {
                eventName: analytics.name,
                eventProps: Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_18__["stringsArrayToObjectWithValues"])(analytics.params, [Object(_nequi_utils_date__WEBPACK_IMPORTED_MODULE_17__["getFormattedDateTimes"])()]),
            },
        });
    };
    EnrollTokenPage.ɵfac = function EnrollTokenPage_Factory(t) { return new (t || EnrollTokenPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"])); };
    EnrollTokenPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EnrollTokenPage, selectors: [["app-enroll-token"]], viewQuery: function EnrollTokenPage_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__["RequestOtpOrganism"], 1);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.requestOtpOrganism = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 4, consts: [[3, "title", "phoneNumber", "canceled", "voiceOtpRequested", "filled"]], template: function EnrollTokenPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-request-otp", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("canceled", function EnrollTokenPage_Template_app_request_otp_canceled_0_listener() { return ctx.onCanceled(); })("voiceOtpRequested", function EnrollTokenPage_Template_app_request_otp_voiceOtpRequested_0_listener() { return ctx.generateVoiceOtp(); })("filled", function EnrollTokenPage_Template_app_request_otp_filled_0_listener($event) { return ctx.onOtpFilled($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, "enroll.token.title"))("phoneNumber", ctx.viewModel.phoneNumber);
        } }, directives: [_commons_src_presentation_organisms_request_otp_request_otp_organism__WEBPACK_IMPORTED_MODULE_19__["RequestOtpOrganism"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__["TranslatePipe"]], encapsulation: 2 });
    return EnrollTokenPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__["FeatureBasePage"]));



/***/ })

}]);
//# sourceMappingURL=nequi-features-enroll-presentation.js.map