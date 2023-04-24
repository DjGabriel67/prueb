(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nequi-features-security-reactivate-account-presentation"],{

/***/ "+hgY":
/*!*****************************************************************************************!*\
  !*** ./libs/features/security/reactivate-account/src/config/reactive-account.config.ts ***!
  \*****************************************************************************************/
/*! exports provided: ReactiveAccountConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactiveAccountConfig", function() { return ReactiveAccountConfig; });
var config = {
    i18n: {
        profileSecurityKey: 'profile-security',
    },
};
var ReactiveAccountConfig = Object.freeze(config);


/***/ }),

/***/ "/Y/F":
/*!******************************************************************************************************************!*\
  !*** ./libs/features/security/reactivate-account/src/presentation/pages/change-password/change-password.page.ts ***!
  \******************************************************************************************************************/
/*! exports provided: ChangePasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPage", function() { return ChangePasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_features_security_biometry_presentation_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/security/biometry/presentation/services */ "V9R7");
/* harmony import */ var _nequi_features_security_reactivate_account_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/security/reactivate-account/core */ "q/fK");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _change_password_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./change-password.config */ "1CFm");
/* harmony import */ var _commons_src_presentation_organisms_confirm_pin_confirm_pin_organism__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../commons/src/presentation/organisms/confirm-pin/confirm-pin.organism */ "5OGX");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");















var ChangePasswordPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ChangePasswordPage, _super);
    function ChangePasswordPage(injector, reactivateAccountInteractor, loadingService, translateProvider, toastService, changePasswordService, moduleConfigProvider) {
        var _this = _super.call(this, injector) || this;
        _this.reactivateAccountInteractor = reactivateAccountInteractor;
        _this.loadingService = loadingService;
        _this.translateProvider = translateProvider;
        _this.toastService = toastService;
        _this.changePasswordService = changePasswordService;
        _this.moduleConfigProvider = moduleConfigProvider;
        _this.config = _change_password_config__WEBPACK_IMPORTED_MODULE_7__["ChangePasswordConfig"];
        _this.translateProvider.loadModule(_this.moduleConfigProvider.i18n.profileSecurityKey);
        return _this;
    }
    ChangePasswordPage.prototype.changePassword = function (newPassword) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 7]);
                        return [4 /*yield*/, this.loadingService.show()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.reactivateAccountInteractor.changePassword(newPassword)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.loadingService.hide(true)];
                    case 3:
                        _a.sent();
                        this.changePasswordService.emit(true);
                        return [3 /*break*/, 7];
                    case 4:
                        error_1 = _a.sent();
                        return [4 /*yield*/, this.loadingService.hide(false)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.toastService.showError(error_1.message)];
                    case 6:
                        _a.sent();
                        this.changePasswordService.emit(false);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    ChangePasswordPage.ɵfac = function ChangePasswordPage_Factory(t) { return new (t || ChangePasswordPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_security_reactivate_account_core__WEBPACK_IMPORTED_MODULE_5__["ReactivateAccountInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_3__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_6__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_security_biometry_presentation_services__WEBPACK_IMPORTED_MODULE_4__["ChangePasswordService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_3__["ModuleConfigProvider"])); };
    ChangePasswordPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChangePasswordPage, selectors: [["app-reactivation-account-change-password"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 15, consts: [["organismId", "reactivate-account-change-password", 3, "initialTitle", "initialDescription", "confirmTitle", "confirmDescription", "toastMessages", "passwordEntered"]], template: function ChangePasswordPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nequi-confirm-pin", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("passwordEntered", function ChangePasswordPage_Template_nequi_confirm_pin_passwordEntered_0_listener($event) { return ctx.changePassword($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("initialTitle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 5, ctx.config.i18n.initialTitle))("initialDescription", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 7, ctx.config.i18n.initialDescription))("confirmTitle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 9, ctx.config.i18n.confirmTitle))("confirmDescription", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 11, ctx.config.i18n.confirmDescription))("toastMessages", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 13, ctx.config.i18n.toastMessages));
        } }, directives: [_commons_src_presentation_organisms_confirm_pin_confirm_pin_organism__WEBPACK_IMPORTED_MODULE_8__["ConfirmPinOrganism"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"]], encapsulation: 2 });
    return ChangePasswordPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_2__["FeatureBasePage"]));



/***/ }),

/***/ "1CFm":
/*!********************************************************************************************************************!*\
  !*** ./libs/features/security/reactivate-account/src/presentation/pages/change-password/change-password.config.ts ***!
  \********************************************************************************************************************/
/*! exports provided: ChangePasswordConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordConfig", function() { return ChangePasswordConfig; });
var ChangePasswordConfig = Object.freeze({
    i18n: {
        initialTitle: 'sign-in.biometry-change-password.initial-title',
        initialDescription: 'sign-in.biometry-change-password.initial-description',
        confirmTitle: 'sign-in.biometry-change-password.confirm-title',
        confirmDescription: 'sign-in.biometry-change-password.confirm-description',
        toastMessages: 'sign-in.biometry-change-password.toast',
        changePassSuccess: 'sign-in.change-password.success',
    },
});


/***/ }),

/***/ "4wD7":
/*!*****************************************************************************!*\
  !*** ./libs/features/security/reactivate-account/src/presentation/index.ts ***!
  \*****************************************************************************/
/*! exports provided: FeaturesReactivateAccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _features_reactivate_account_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./features-reactivate-account.module */ "OYZU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeaturesReactivateAccountModule", function() { return _features_reactivate_account_module__WEBPACK_IMPORTED_MODULE_0__["FeaturesReactivateAccountModule"]; });




/***/ }),

/***/ "5I69":
/*!***********************************************************************************************************************!*\
  !*** ./libs/features/security/reactivate-account/src/presentation/middleware/make-account-reactivation.middleware.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: MakeAccountReactivationMiddleware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakeAccountReactivationMiddleware", function() { return MakeAccountReactivationMiddleware; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_security_biometry_presentation_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/security/biometry/presentation/services */ "V9R7");
/* harmony import */ var _features_reactivate_account_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../features-reactivate-account.config */ "jEbt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");








var MakeAccountReactivationMiddleware = /** @class */ (function () {
    function MakeAccountReactivationMiddleware(chooseBiometryService, changePasswordService, authProvider, navigatorProvider) {
        this.chooseBiometryService = chooseBiometryService;
        this.changePasswordService = changePasswordService;
        this.authProvider = authProvider;
        this.navigatorProvider = navigatorProvider;
    }
    MakeAccountReactivationMiddleware.prototype.canActivate = function (_route) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.navigatorProvider.navigateForward(_features_reactivate_account_config__WEBPACK_IMPORTED_MODULE_4__["FeaturesReactivateAccountConfig"].routes.chooseBiometryUrl);
                this.chooseBiometryService.subscribe(function (response) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                        if (!response.isValid) {
                            return [2 /*return*/, this.unsubscribeEvents()];
                        }
                        this.navigatorProvider.navigateForward(_features_reactivate_account_config__WEBPACK_IMPORTED_MODULE_4__["FeaturesReactivateAccountConfig"].routes.changePasswordUrl);
                        return [2 /*return*/];
                    });
                }); });
                this.changePasswordService.subscribe(function (isSuccess) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                        if (isSuccess) {
                            this.logout();
                        }
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/, false];
            });
        });
    };
    MakeAccountReactivationMiddleware.prototype.logout = function () {
        this.authProvider.signOut();
        this.unsubscribeEvents();
    };
    MakeAccountReactivationMiddleware.prototype.unsubscribeEvents = function () {
        var _a, _b;
        (_a = this.chooseBiometryService) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        (_b = this.changePasswordService) === null || _b === void 0 ? void 0 : _b.unsubscribe();
    };
    MakeAccountReactivationMiddleware.ɵfac = function MakeAccountReactivationMiddleware_Factory(t) { return new (t || MakeAccountReactivationMiddleware)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_nequi_features_security_biometry_presentation_services__WEBPACK_IMPORTED_MODULE_3__["ChooseBiometryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_nequi_features_security_biometry_presentation_services__WEBPACK_IMPORTED_MODULE_3__["ChangePasswordService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__["AuthProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__["NavigatorProvider"])); };
    MakeAccountReactivationMiddleware.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: MakeAccountReactivationMiddleware, factory: MakeAccountReactivationMiddleware.ɵfac });
    return MakeAccountReactivationMiddleware;
}());



/***/ }),

/***/ "OYZU":
/*!**********************************************************************************************************!*\
  !*** ./libs/features/security/reactivate-account/src/presentation/features-reactivate-account.module.ts ***!
  \**********************************************************************************************************/
/*! exports provided: FeaturesReactivateAccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesReactivateAccountModule", function() { return FeaturesReactivateAccountModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_security_reactivate_account_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/security/reactivate-account/core */ "q/fK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _config_reactive_account_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config/reactive-account.config */ "+hgY");
/* harmony import */ var _features_reactivate_account_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./features-reactivate-account-routing.module */ "gWGP");
/* harmony import */ var _middleware_make_account_reactivation_middleware__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./middleware/make-account-reactivation.middleware */ "5I69");
/* harmony import */ var _pages_change_password_change_password_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/change-password/change-password.page */ "/Y/F");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











var FeaturesReactivateAccountModule = /** @class */ (function () {
    function FeaturesReactivateAccountModule() {
    }
    FeaturesReactivateAccountModule.ɵfac = function FeaturesReactivateAccountModule_Factory(t) { return new (t || FeaturesReactivateAccountModule)(); };
    FeaturesReactivateAccountModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: FeaturesReactivateAccountModule });
    FeaturesReactivateAccountModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [
            _middleware_make_account_reactivation_middleware__WEBPACK_IMPORTED_MODULE_8__["MakeAccountReactivationMiddleware"],
            {
                provide: _nequi_features_security_reactivate_account_core__WEBPACK_IMPORTED_MODULE_4__["ReactivateAccountInteractor"],
                deps: [_nequi_features_security_reactivate_account_core__WEBPACK_IMPORTED_MODULE_4__["ReactivateAccountRepository"]],
                useClass: _nequi_features_security_reactivate_account_core__WEBPACK_IMPORTED_MODULE_4__["ReactivateAccountInteractor"],
            },
            {
                provide: _nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__["ModuleConfigProvider"],
                useValue: _config_reactive_account_config__WEBPACK_IMPORTED_MODULE_6__["ReactiveAccountConfig"],
            },
        ], imports: [[
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
                _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__["FeaturesCommonsModule"],
                _features_reactivate_account_routing_module__WEBPACK_IMPORTED_MODULE_7__["FeaturesReactivateAccountRoutingModule"],
            ]] });
    return FeaturesReactivateAccountModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](FeaturesReactivateAccountModule, { declarations: [_pages_change_password_change_password_page__WEBPACK_IMPORTED_MODULE_9__["ChangePasswordPage"]], imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
        _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__["FeaturesCommonsModule"],
        _features_reactivate_account_routing_module__WEBPACK_IMPORTED_MODULE_7__["FeaturesReactivateAccountRoutingModule"]] }); })();


/***/ }),

/***/ "gWGP":
/*!******************************************************************************************************************!*\
  !*** ./libs/features/security/reactivate-account/src/presentation/features-reactivate-account-routing.module.ts ***!
  \******************************************************************************************************************/
/*! exports provided: FeaturesReactivateAccountRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesReactivateAccountRoutingModule", function() { return FeaturesReactivateAccountRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _middleware_make_account_reactivation_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./middleware/make-account-reactivation.middleware */ "5I69");
/* harmony import */ var _pages_change_password_change_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/change-password/change-password.page */ "/Y/F");






var routes = [
    {
        path: '',
        component: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Type"],
        canActivate: [_middleware_make_account_reactivation_middleware__WEBPACK_IMPORTED_MODULE_2__["MakeAccountReactivationMiddleware"]],
    },
    {
        path: 'change-password',
        component: _pages_change_password_change_password_page__WEBPACK_IMPORTED_MODULE_3__["ChangePasswordPage"],
    },
];
var FeaturesReactivateAccountRoutingModule = /** @class */ (function () {
    function FeaturesReactivateAccountRoutingModule() {
    }
    FeaturesReactivateAccountRoutingModule.ɵfac = function FeaturesReactivateAccountRoutingModule_Factory(t) { return new (t || FeaturesReactivateAccountRoutingModule)(); };
    FeaturesReactivateAccountRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FeaturesReactivateAccountRoutingModule });
    FeaturesReactivateAccountRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return FeaturesReactivateAccountRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FeaturesReactivateAccountRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "jEbt":
/*!**********************************************************************************************************!*\
  !*** ./libs/features/security/reactivate-account/src/presentation/features-reactivate-account.config.ts ***!
  \**********************************************************************************************************/
/*! exports provided: FeaturesReactivateAccountConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesReactivateAccountConfig", function() { return FeaturesReactivateAccountConfig; });
var FeaturesReactivateAccountConfig = Object.freeze({
    routes: {
        chooseBiometryUrl: '/auth/choose-biometry',
        changePasswordUrl: '/auth/reactivate-account/change-password',
    },
});


/***/ })

}]);
//# sourceMappingURL=nequi-features-security-reactivate-account-presentation.js.map