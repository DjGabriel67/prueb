(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~nequi-features-open-banking-presentation-permission~permission-pages-permission-module"],{

/***/ "1JGI":
/*!********************************************************************************************************!*\
  !*** ./libs/features/open-banking/src/presentation/permission/pages/experiences/experiences.config.ts ***!
  \********************************************************************************************************/
/*! exports provided: ExperiencesConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperiencesConfig", function() { return ExperiencesConfig; });
var ExperiencesConfig = Object.freeze({
    i18n: {
        deleteAlert: 'open-banking.permission.experiences.delete',
        deleteSuccess: 'open-banking.permission.experiences.delete-success-message',
        error: 'open-banking.permission.error',
    },
    toastDelay: 4000,
});


/***/ }),

/***/ "47+D":
/*!***************************************************************************************************!*\
  !*** ./libs/features/open-banking/src/presentation/permission/pages/permission-routing.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: PermissionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionRoutingModule", function() { return PermissionRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons_resolvers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/features/commons/resolvers */ "XBSJ");
/* harmony import */ var _config_open_banking_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config/open-banking.config */ "lIQC");
/* harmony import */ var _balance_inquiry_detail_balance_inquiry_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./balance-inquiry-detail/balance-inquiry-detail.page */ "X21o");
/* harmony import */ var _balance_inquiry_balance_inquiry_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./balance-inquiry/balance-inquiry.page */ "RBtG");
/* harmony import */ var _experiences_experiences_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./experiences/experiences.page */ "9UKf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








var routes = [
    {
        path: 'experiences',
        component: _experiences_experiences_page__WEBPACK_IMPORTED_MODULE_5__["ExperiencesPage"],
    },
    {
        path: 'balance-inquiry',
        component: _balance_inquiry_balance_inquiry_page__WEBPACK_IMPORTED_MODULE_4__["BalanceInquiryPage"],
    },
    {
        path: 'balance-inquiry-detail',
        component: _balance_inquiry_detail_balance_inquiry_detail_page__WEBPACK_IMPORTED_MODULE_3__["BalanceInquiryDetailPage"],
    },
];
var PermissionRoutingModule = /** @class */ (function () {
    function PermissionRoutingModule() {
    }
    PermissionRoutingModule.ɵfac = function PermissionRoutingModule_Factory(t) { return new (t || PermissionRoutingModule)(); };
    PermissionRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: PermissionRoutingModule });
    PermissionRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(_nequi_features_commons_resolvers__WEBPACK_IMPORTED_MODULE_1__["I18nModuleResolver"].setup(routes, [_config_open_banking_config__WEBPACK_IMPORTED_MODULE_2__["OpenBankingConfig"].i18n.moduleKey])),
            ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return PermissionRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](PermissionRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "9UKf":
/*!******************************************************************************************************!*\
  !*** ./libs/features/open-banking/src/presentation/permission/pages/experiences/experiences.page.ts ***!
  \******************************************************************************************************/
/*! exports provided: ExperiencesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperiencesPage", function() { return ExperiencesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nequi_features_application_data_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/application-data/core */ "UgzZ");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/open-banking/core */ "vY5Q");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/utils/string */ "p6rB");
/* harmony import */ var _config_open_banking_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../config/open-banking.config */ "lIQC");
/* harmony import */ var _experiences_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./experiences.config */ "1JGI");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ui_src_lib_components_busy_indicator_busy_indicator_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../ui/src/lib/components/busy-indicator/busy-indicator.component */ "N6nj");
/* harmony import */ var _ui_src_lib_components_empty_case_empty_case_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../ui/src/lib/components/empty-case/empty-case.component */ "cdII");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");





















function ExperiencesPage_ion_text_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-text", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "open-banking.permission.experiences.description"), " ");
} }
function ExperiencesPage_app_busy_indicator_10_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-busy-indicator", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onReload", function ExperiencesPage_app_busy_indicator_10_Template_app_busy_indicator_onReload_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.getPermissions(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showReload", true)("reloadMessage", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, "open-banking.permission.experiences.retry-message"));
} }
function ExperiencesPage_app_empty_case_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-empty-case", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("image", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, "open-banking.permission.experiences.empty-case.image"))("text", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 4, "open-banking.permission.experiences.empty-case.text"));
} }
function ExperiencesPage_ion_item_12_Template(rf, ctx) { if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExperiencesPage_ion_item_12_Template_ion_icon_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); var permission_r6 = ctx.$implicit; var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.deletePermission(permission_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var permission_r6 = ctx.$implicit;
    var i_r7 = ctx.index;
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("list-item__border", i_r7 < ctx_r3.permissionList.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", "permission_name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](permission_r6.appName);
} }
var ExperiencesPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ExperiencesPage, _super);
    function ExperiencesPage(injector, alertService, loadingService, authorizationInteractor, translateProvider, toastService, applicationDataInteractor) {
        var _this = _super.call(this, injector) || this;
        _this.alertService = alertService;
        _this.loadingService = loadingService;
        _this.authorizationInteractor = authorizationInteractor;
        _this.translateProvider = translateProvider;
        _this.toastService = toastService;
        _this.applicationDataInteractor = applicationDataInteractor;
        _this.showRetry = false;
        _this.showEmptyCase = false;
        _this.permissionList = [];
        _this.acceptContractMail = false;
        return _this;
    }
    ExperiencesPage.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getPermissions()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ExperiencesPage.prototype.getPermissions = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        this.loadingService.show();
                        _a = this;
                        return [4 /*yield*/, this.authorizationInteractor.getApprovalByUser()];
                    case 1:
                        _a.permissionList = _b.sent();
                        return [4 /*yield*/, this.cleanPermissions()];
                    case 2:
                        _b.sent();
                        this.showEmptyCase = true;
                        this.loadingService.hideWithoutFeedback();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _b.sent();
                        this.showRetry = true;
                        this.showEmptyCase = false;
                        this.loadingService.hideWithoutFeedback();
                        throw error_1;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ExperiencesPage.prototype.cleanPermissions = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.permissionList = this.permissionList.filter(function (permission) { return permission.allowedPermissions.length !== 0; });
                return [2 /*return*/];
            });
        });
    };
    ExperiencesPage.prototype.deletePermission = function (permission) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                alert = this.translateProvider.get(_experiences_config__WEBPACK_IMPORTED_MODULE_9__["ExperiencesConfig"].i18n.deleteAlert);
                this.alertService.show({
                    messages: {
                        header: alert.header,
                        message: Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_7__["createFormat"])(alert.message, [permission.appName]),
                        buttons: {
                            accept: alert.buttons.accept,
                            cancel: alert.buttons.cancel,
                        },
                    },
                    handlers: {
                        accept: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                            return [2 /*return*/, this.updatePermissionStatus(permission)];
                        }); }); },
                    },
                });
                return [2 /*return*/];
            });
        });
    };
    ExperiencesPage.prototype.updatePermissionStatus = function (permission) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var params, message, error_2, alert_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        this.loadingService.show();
                        params = {
                            app: permission.app.slice(0, permission.app.lastIndexOf('_')),
                            acceptContractMail: this.acceptContractMail,
                            permissions: [],
                        };
                        return [4 /*yield*/, this.authorizationInteractor.unauthorized(params)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.loadingService.hideWithoutFeedback()];
                    case 2:
                        _a.sent();
                        this.deletepermissionFromList(permission.app);
                        this.applicationDataInteractor.remove(_config_open_banking_config__WEBPACK_IMPORTED_MODULE_8__["OpenBankingConfig"].applicationData.persistenceDataKey + permission.appName);
                        message = this.translateProvider.get(_experiences_config__WEBPACK_IMPORTED_MODULE_9__["ExperiencesConfig"].i18n.deleteSuccess);
                        this.toastService.showSuccess(message, _experiences_config__WEBPACK_IMPORTED_MODULE_9__["ExperiencesConfig"].toastDelay);
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        this.loadingService.hide(false);
                        alert_1 = this.translateProvider.get(_experiences_config__WEBPACK_IMPORTED_MODULE_9__["ExperiencesConfig"].i18n.error);
                        this.alertService.show({
                            messages: {
                                header: alert_1.title,
                                message: alert_1.message,
                                buttons: {
                                    accept: alert_1.button,
                                },
                            },
                            handlers: {
                                accept: function () { },
                            },
                        });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ExperiencesPage.prototype.deletepermissionFromList = function (permissionApp) {
        this.permissionList = this.permissionList.filter(function (permission) { return permission.app !== permissionApp; });
    };
    ExperiencesPage.ɵfac = function ExperiencesPage_Factory(t) { return new (t || ExperiencesPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_4__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_5__["AuthorizationInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_3__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_6__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_application_data_core__WEBPACK_IMPORTED_MODULE_2__["ApplicationDataInteractor"])); };
    ExperiencesPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ExperiencesPage, selectors: [["nequi-home"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 13, vars: 7, consts: [[1, "nequi-header"], ["slot", "start"], ["id", "permission_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], ["fullscreen", "true", 1, "ion-content--enroll", "ion-padding-horizontal", "content"], [1, "nequi-title", "content__title"], ["id", "permission_description_label", "class", "description", 4, "ngIf"], [3, "showReload", "reloadMessage", "onReload", 4, "ngIf"], [3, "image", "text", 4, "ngIf"], ["lines", "none", "class", "list-item margin-bottom-8", 3, "list-item__border", 4, "ngFor", "ngForOf"], ["id", "permission_description_label", 1, "description"], [3, "showReload", "reloadMessage", "onReload"], [3, "image", "text"], ["lines", "none", 1, "list-item", "margin-bottom-8"], [1, "label", "label--title", 3, "id"], ["id", "permission_icon-trailing_image", "slot", "end", "name", "trash-outline", 1, "list-item__icon--trailing", 3, "click"]], template: function ExperiencesPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExperiencesPage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ExperiencesPage_ion_text_9_Template, 3, 3, "ion-text", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ExperiencesPage_app_busy_indicator_10_Template, 2, 4, "app-busy-indicator", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ExperiencesPage_app_empty_case_11_Template, 3, 6, "app-empty-case", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ExperiencesPage_ion_item_12_Template, 5, 4, "ion-item", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 5, "open-banking.permission.experiences.title"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.permissionList.length > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showRetry);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.permissionList.length === 0 && !ctx.showRetry && ctx.showEmptyCase);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.permissionList);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonText"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _ui_src_lib_components_busy_indicator_busy_indicator_component__WEBPACK_IMPORTED_MODULE_12__["BusyIndicatorComponent"], _ui_src_lib_components_empty_case_empty_case_component__WEBPACK_IMPORTED_MODULE_13__["EmptyCaseComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonItem"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslatePipe"]], styles: ["[_nghost-%COMP%]  app-empty-case .empty-case__container {\n  height: 100%;\n}\n\n.description[_ngcontent-%COMP%] {\n  color: var(--gray-70);\n  margin-bottom: 10px;\n  display: block;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvZXhwZXJpZW5jZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UsWUFBQTtBQUROOztBQU1BO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBSEYiLCJmaWxlIjoiZXhwZXJpZW5jZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Q6Om5nLWRlZXAge1xuICBhcHAtZW1wdHktY2FzZSB7XG4gICAgLmVtcHR5LWNhc2VfX2NvbnRhaW5lciB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICB9XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS1ncmF5LTcwKTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbiJdfQ== */"] });
    return ExperiencesPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_4__["FeatureBasePage"]));



/***/ }),

/***/ "A71x":
/*!******************************************************************************************************************************!*\
  !*** ./libs/features/open-banking/src/presentation/permission/pages/balance-inquiry-detail/balance-inquiry-detail.config.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: BalanceInquiryDetailConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalanceInquiryDetailConfig", function() { return BalanceInquiryDetailConfig; });
var BalanceInquiryDetailConfig = Object.freeze({
    i18n: {
        deleteConfig: 'open-banking.permission.balance-inquiry-detail.delete',
        deleteConfigMessage: 'open-banking.permission.balance-inquiry-detail.delete.message',
        deleteErrorMessage: 'open-banking.permission.balance-inquiry-detail.retry-message',
        deleteSuccessMessage: 'open-banking.permission.balance-inquiry-detail.delete-success-message',
    },
    routes: {
        balanceInquiry: '/admin/profile/settings/product/authorizations/balance-inquiry',
    },
});


/***/ }),

/***/ "DcRc":
/*!****************************************************************************************************!*\
  !*** ./libs/features/open-banking/src/presentation/permission/services/balance-inquiry.service.ts ***!
  \****************************************************************************************************/
/*! exports provided: BalanceInquiryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalanceInquiryService", function() { return BalanceInquiryService; });
var BalanceInquiryService = /** @class */ (function () {
    function BalanceInquiryService() {
        this.authorizationList = [];
        this.showRetry = false;
        this.isShowEmptyCase = false;
    }
    return BalanceInquiryService;
}());



/***/ }),

/***/ "LwlF":
/*!*******************************************************************************************!*\
  !*** ./libs/features/open-banking/src/presentation/permission/pages/permission.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: PermissionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionModule", function() { return PermissionModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/open-banking/core */ "vY5Q");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _services_balance_inquiry_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/balance-inquiry.service */ "DcRc");
/* harmony import */ var _balance_inquiry_detail_balance_inquiry_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./balance-inquiry-detail/balance-inquiry-detail.page */ "X21o");
/* harmony import */ var _balance_inquiry_balance_inquiry_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./balance-inquiry/balance-inquiry.page */ "RBtG");
/* harmony import */ var _experiences_experiences_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./experiences/experiences.page */ "9UKf");
/* harmony import */ var _permission_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./permission-routing.module */ "47+D");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











var PermissionModule = /** @class */ (function () {
    function PermissionModule() {
    }
    PermissionModule.ɵfac = function PermissionModule_Factory(t) { return new (t || PermissionModule)(); };
    PermissionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: PermissionModule });
    PermissionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [
            _services_balance_inquiry_service__WEBPACK_IMPORTED_MODULE_5__["BalanceInquiryService"],
            {
                provide: _nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_2__["AuthorizationInteractor"],
                deps: [_nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_2__["AuthorizationRepository"]],
                useFactory: function (repository) { return new _nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_2__["AuthorizationInteractor"](repository); },
            },
        ], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _permission_routing_module__WEBPACK_IMPORTED_MODULE_9__["PermissionRoutingModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _nequi_ui__WEBPACK_IMPORTED_MODULE_3__["NequiUiModule"]]] });
    return PermissionModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](PermissionModule, { declarations: [_experiences_experiences_page__WEBPACK_IMPORTED_MODULE_8__["ExperiencesPage"], _balance_inquiry_balance_inquiry_page__WEBPACK_IMPORTED_MODULE_7__["BalanceInquiryPage"], _balance_inquiry_detail_balance_inquiry_detail_page__WEBPACK_IMPORTED_MODULE_6__["BalanceInquiryDetailPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _permission_routing_module__WEBPACK_IMPORTED_MODULE_9__["PermissionRoutingModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _nequi_ui__WEBPACK_IMPORTED_MODULE_3__["NequiUiModule"]] }); })();


/***/ }),

/***/ "RBtG":
/*!**************************************************************************************************************!*\
  !*** ./libs/features/open-banking/src/presentation/permission/pages/balance-inquiry/balance-inquiry.page.ts ***!
  \**************************************************************************************************************/
/*! exports provided: BalanceInquiryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalanceInquiryPage", function() { return BalanceInquiryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_commons_exceptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/commons/exceptions */ "0sJq");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/open-banking/core */ "vY5Q");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _services_balance_inquiry_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/balance-inquiry.service */ "DcRc");
/* harmony import */ var _balance_inquiry_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./balance-inquiry.config */ "vjDN");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../ui/src/lib/directives/animate-title-on-scroll/animate-title-on-scroll.directive */ "qbWi");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ui_src_lib_components_busy_indicator_busy_indicator_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../ui/src/lib/components/busy-indicator/busy-indicator.component */ "N6nj");
/* harmony import */ var _ui_src_lib_components_empty_case_empty_case_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../ui/src/lib/components/empty-case/empty-case.component */ "cdII");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");






















function BalanceInquiryPage_app_busy_indicator_12_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-busy-indicator", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onReload", function BalanceInquiryPage_app_busy_indicator_12_Template_app_busy_indicator_onReload_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.getAuthorizationsList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showReload", true)("reloadMessage", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, "open-banking.permission.balance-inquiry.retry-message"));
} }
function BalanceInquiryPage_app_empty_case_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-empty-case", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("image", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, "open-banking.permission.balance-inquiry.empty-case.image"))("text", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 4, "open-banking.permission.balance-inquiry.empty-case.text"));
} }
function BalanceInquiryPage_ion_item_14_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BalanceInquiryPage_ion_item_14_Template_ion_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); var authorization_r5 = ctx.$implicit; var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.goToBalanceInquiryDetail(authorization_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var authorization_r5 = ctx.$implicit;
    var i_r6 = ctx.index;
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("list-item__border", i_r6 < ctx_r2.balanceInquiryService.authorizationList.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", "balance-inquiry_commerce-" + i_r6 + "_label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", authorization_r5.commerce, " ");
} }
var BalanceInquiryPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BalanceInquiryPage, _super);
    function BalanceInquiryPage(injector, balanceInquiryService, authorizationInteractor, loadingService, toastService, translateProvider, router, activatedRoute) {
        var _this = _super.call(this, injector) || this;
        _this.balanceInquiryService = balanceInquiryService;
        _this.authorizationInteractor = authorizationInteractor;
        _this.loadingService = loadingService;
        _this.toastService = toastService;
        _this.translateProvider = translateProvider;
        _this.router = router;
        _this.activatedRoute = activatedRoute;
        return _this;
    }
    BalanceInquiryPage.prototype.ngOnInit = function () {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.isAuthorizationCreated = (_a = this.router.getCurrentNavigation().extras.state) === null || _a === void 0 ? void 0 : _a.authorizationCreated;
                        this.checkAuthorizationCreated();
                        return [4 /*yield*/, this.getAuthorizationsList()];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BalanceInquiryPage.prototype.goBack = function () {
        if (this.isAuthorizationCreated) {
            this.navigatorProvider.navigateRoot([_balance_inquiry_config__WEBPACK_IMPORTED_MODULE_9__["BalanceInquiryConfig"].routes.backpack], {
                replaceUrl: true,
            });
        }
        else {
            this.navigatorProvider.back();
        }
    };
    BalanceInquiryPage.prototype.getAuthorizationsList = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, exception_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 4, , 6]);
                        return [4 /*yield*/, this.loadingService.show()];
                    case 1:
                        _b.sent();
                        _a = this.balanceInquiryService;
                        return [4 /*yield*/, this.authorizationInteractor.getAuthorizations()];
                    case 2:
                        _a.authorizationList = _b.sent();
                        this.showListView();
                        return [4 /*yield*/, this.loadingService.hideWithoutFeedback()];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 6];
                    case 4:
                        exception_1 = _b.sent();
                        return [4 /*yield*/, this.loadingService.hideWithoutFeedback()];
                    case 5:
                        _b.sent();
                        this.balanceInquiryService.authorizationList = [];
                        if (exception_1 instanceof _nequi_commons_exceptions__WEBPACK_IMPORTED_MODULE_3__["EmptyCaseException"]) {
                            this.showEmptyCaseView();
                            return [2 /*return*/];
                        }
                        this.showReloadView();
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    BalanceInquiryPage.prototype.goToBalanceInquiryDetail = function (authorization) {
        this.navigatorProvider.navigateForward([_balance_inquiry_config__WEBPACK_IMPORTED_MODULE_9__["BalanceInquiryConfig"].routes.balanceInquiryDetail], {
            state: authorization,
            relativeTo: this.activatedRoute,
        });
    };
    BalanceInquiryPage.prototype.showEmptyCaseView = function () {
        this.balanceInquiryService.isShowEmptyCase = true;
        this.balanceInquiryService.showRetry = false;
    };
    BalanceInquiryPage.prototype.showReloadView = function () {
        this.balanceInquiryService.isShowEmptyCase = false;
        this.balanceInquiryService.showRetry = true;
    };
    BalanceInquiryPage.prototype.showListView = function () {
        this.balanceInquiryService.isShowEmptyCase = false;
        this.balanceInquiryService.showRetry = false;
    };
    BalanceInquiryPage.prototype.checkAuthorizationCreated = function () {
        if (this.isAuthorizationCreated) {
            var message = this.translateProvider.get(_balance_inquiry_config__WEBPACK_IMPORTED_MODULE_9__["BalanceInquiryConfig"].i18n.authorizationSuccessMessage);
            this.toastService.showSuccess(message);
        }
    };
    BalanceInquiryPage.ɵfac = function BalanceInquiryPage_Factory(t) { return new (t || BalanceInquiryPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_balance_inquiry_service__WEBPACK_IMPORTED_MODULE_8__["BalanceInquiryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_6__["AuthorizationInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_7__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_7__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_4__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
    BalanceInquiryPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BalanceInquiryPage, selectors: [["app-balance-inquiry"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 15, vars: 9, consts: [[1, "nequi-header", "nequi-header--white"], ["id", "balance-inquiry_header-title_label", 1, "nequi-header__title", "ion-text-start"], ["slot", "start"], ["id", "balance-inquiry_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], ["fullscreen", "true", "scrollEvents", "true", "appAnimateTitleOnScroll", "", 1, "ion-content--enroll", "ion-padding-horizontal", "content"], [1, "nequi-title", "content__title"], ["class", "busy-indicator", 3, "showReload", "reloadMessage", "onReload", 4, "ngIf"], [3, "image", "text", 4, "ngIf"], ["lines", "none", "class", "list-item", "detail", "", 3, "list-item__border", "click", 4, "ngFor", "ngForOf"], [1, "busy-indicator", 3, "showReload", "reloadMessage", "onReload"], [3, "image", "text"], ["lines", "none", "detail", "", 1, "list-item", 3, "click"], [1, "list-item__label", 3, "id"]], template: function BalanceInquiryPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-text", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-buttons", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BalanceInquiryPage_Template_ion_button_click_6_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "ion-icon", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-content", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-text", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, BalanceInquiryPage_app_busy_indicator_12_Template, 2, 4, "app-busy-indicator", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, BalanceInquiryPage_app_empty_case_13_Template, 3, 6, "app-empty-case", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, BalanceInquiryPage_ion_item_14_Template, 3, 4, "ion-item", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 5, "open-banking.permission.balance-inquiry.title"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 7, "open-banking.permission.balance-inquiry.title"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.balanceInquiryService.showRetry);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.balanceInquiryService.authorizationList.length === 0 && !ctx.balanceInquiryService.showRetry && ctx.balanceInquiryService.isShowEmptyCase);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.balanceInquiryService.authorizationList);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonContent"], _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_11__["AnimateTitleOnScrollDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _ui_src_lib_components_busy_indicator_busy_indicator_component__WEBPACK_IMPORTED_MODULE_13__["BusyIndicatorComponent"], _ui_src_lib_components_empty_case_empty_case_component__WEBPACK_IMPORTED_MODULE_14__["EmptyCaseComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonLabel"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"]], styles: ["[_nghost-%COMP%]  app-empty-case .empty-case__container {\n  height: 100%;\n}\n\n.list[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n\n.list-item[_ngcontent-%COMP%] {\n  --ion-background-color: transparent;\n  --padding-start: 0;\n  padding-bottom: 8px;\n  margin-top: 15px;\n}\n\n.list-item__icon--trailing[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: var(--medianoche);\n}\n\n.list-item__border[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--divisor-line);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvYmFsYW5jZS1pbnF1aXJ5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLFlBQUE7QUFETjs7QUFNQTtFQUNFLGdCQUFBO0FBSEY7O0FBS0U7RUFDRSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUhKOztBQU1NO0VBQ0UsZUFBQTtFQUNBLHdCQUFBO0FBSlI7O0FBUUk7RUFDRSw0Q0FBQTtBQU5OIiwiZmlsZSI6ImJhbGFuY2UtaW5xdWlyeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdDo6bmctZGVlcCB7XG4gIGFwcC1lbXB0eS1jYXNlIHtcbiAgICAuZW1wdHktY2FzZV9fY29udGFpbmVyIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gIH1cbn1cblxuLmxpc3Qge1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuXG4gICYtaXRlbSB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcblxuICAgICZfX2ljb24ge1xuICAgICAgJi0tdHJhaWxpbmcge1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1tZWRpYW5vY2hlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmX19ib3JkZXIge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWRpdmlzb3ItbGluZSk7XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
    return BalanceInquiryPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__["FeatureBasePage"]));



/***/ }),

/***/ "X21o":
/*!****************************************************************************************************************************!*\
  !*** ./libs/features/open-banking/src/presentation/permission/pages/balance-inquiry-detail/balance-inquiry-detail.page.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: BalanceInquiryDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalanceInquiryDetailPage", function() { return BalanceInquiryDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/open-banking/core */ "vY5Q");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _services_balance_inquiry_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/balance-inquiry.service */ "DcRc");
/* harmony import */ var _balance_inquiry_detail_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./balance-inquiry-detail.config */ "A71x");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../ui/src/lib/directives/animate-title-on-scroll/animate-title-on-scroll.directive */ "qbWi");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");




















function BalanceInquiryDetailPage_ion_item_11_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-text", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BalanceInquiryDetailPage_ion_item_11_Template_ion_icon_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); var authorization_r1 = ctx.$implicit; var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.showAlertConfirmDelete(authorization_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var authorization_r1 = ctx.$implicit;
    var i_r2 = ctx.index;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("list-item__border", i_r2 < ctx_r0.authorizationsList.authData.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", "balance-inquiry-detail_commerce-" + i_r2 + "_label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", authorization_r1.productName, " ");
} }
var BalanceInquiryDetailPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BalanceInquiryDetailPage, _super);
    function BalanceInquiryDetailPage(injector, balanceInquiryService, alertService, loadingService, authorizationInteractor, translateProvider, router, toastService) {
        var _this = _super.call(this, injector) || this;
        _this.balanceInquiryService = balanceInquiryService;
        _this.alertService = alertService;
        _this.loadingService = loadingService;
        _this.authorizationInteractor = authorizationInteractor;
        _this.translateProvider = translateProvider;
        _this.router = router;
        _this.toastService = toastService;
        return _this;
    }
    BalanceInquiryDetailPage.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.authorizationsList = this.router.getCurrentNavigation().extras.state;
                return [2 /*return*/];
            });
        });
    };
    BalanceInquiryDetailPage.prototype.showAlertConfirmDelete = function (authorization) {
        var _this = this;
        var message = this.translateProvider.get(_balance_inquiry_detail_config__WEBPACK_IMPORTED_MODULE_8__["BalanceInquiryDetailConfig"].i18n.deleteConfigMessage, {
            commerce: this.authorizationsList.commerce,
            productName: authorization.productName,
        });
        var deleteConfig = this.translateProvider.get(_balance_inquiry_detail_config__WEBPACK_IMPORTED_MODULE_8__["BalanceInquiryDetailConfig"].i18n.deleteConfig);
        this.alertService.show({
            messages: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, deleteConfig), { message: message }),
            handlers: {
                accept: function () { return _this.deleteAuthorization(authorization); },
            },
        });
    };
    BalanceInquiryDetailPage.prototype.deleteAuthorization = function (authorization) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 6]);
                        return [4 /*yield*/, this.loadingService.show()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.authorizationInteractor.archiveAuthorization(authorization.authorizedAt)];
                    case 2:
                        _a.sent();
                        this.removeAuthorization(authorization);
                        return [4 /*yield*/, this.loadingService.hide(true)];
                    case 3:
                        _a.sent();
                        this.showAlertSuccessDelete();
                        return [3 /*break*/, 6];
                    case 4:
                        error_1 = _a.sent();
                        return [4 /*yield*/, this.loadingService.hide(false)];
                    case 5:
                        _a.sent();
                        this.showAlertErrorDelete();
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    BalanceInquiryDetailPage.prototype.removeAuthorization = function (authorization) {
        var index = this.authorizationsList.authData.findIndex(function (element) { return element.authorizedAt === authorization.authorizedAt; });
        this.authorizationsList.authData.splice(index, 1);
        this.validateEmptyCase();
    };
    BalanceInquiryDetailPage.prototype.validateEmptyCase = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.authorizationsList.authData.length === 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.removeCommerceAuthorization()];
                    case 1:
                        _a.sent();
                        this.balanceInquiryService.isShowEmptyCase = true;
                        this.balanceInquiryService.showRetry = false;
                        this.goBack();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    BalanceInquiryDetailPage.prototype.removeCommerceAuthorization = function () {
        var _this = this;
        var index = this.balanceInquiryService.authorizationList.findIndex(function (element) { return element.commerce === _this.authorizationsList.commerce; });
        this.balanceInquiryService.authorizationList.splice(index, 1);
    };
    BalanceInquiryDetailPage.prototype.showAlertErrorDelete = function () {
        var message = this.translateProvider.get(_balance_inquiry_detail_config__WEBPACK_IMPORTED_MODULE_8__["BalanceInquiryDetailConfig"].i18n.deleteErrorMessage);
        this.toastService.showError(message);
    };
    BalanceInquiryDetailPage.prototype.showAlertSuccessDelete = function () {
        var message = this.translateProvider.get(_balance_inquiry_detail_config__WEBPACK_IMPORTED_MODULE_8__["BalanceInquiryDetailConfig"].i18n.deleteSuccessMessage);
        this.toastService.showSuccess(message);
    };
    BalanceInquiryDetailPage.ɵfac = function BalanceInquiryDetailPage_Factory(t) { return new (t || BalanceInquiryDetailPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_balance_inquiry_service__WEBPACK_IMPORTED_MODULE_7__["BalanceInquiryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_4__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_5__["AuthorizationInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_3__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_6__["ToastService"])); };
    BalanceInquiryDetailPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BalanceInquiryDetailPage, selectors: [["app-balance-inquiry-detail"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 12, vars: 5, consts: [[1, "nequi-header", "nequi-header--white"], ["id", "balance-inquiry-detail_header-title_label", 1, "nequi-header__title", "ion-text-start"], ["slot", "start"], ["id", "balance-inquiry-detail_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], ["fullscreen", "true", "scrollEvents", "true", "appAnimateTitleOnScroll", "", 1, "ion-content--enroll", "ion-padding-horizontal", "content"], [1, "nequi-title", "content__title"], ["lines", "none", "class", "list-item", 3, "list-item__border", 4, "ngFor", "ngForOf"], ["lines", "none", 1, "list-item"], [3, "id"], ["id", "balance-inquiry-detail_trailing_icon", "slot", "end", "name", "trash-outline", 1, "list-item__icon--trailing", 3, "click"]], template: function BalanceInquiryDetailPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-text", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-buttons", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BalanceInquiryDetailPage_Template_ion_button_click_6_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "ion-icon", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-content", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-text", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, BalanceInquiryDetailPage_ion_item_11_Template, 4, 4, "ion-item", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 3, "open-banking.permission.balance-inquiry-detail.title"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.authorizationsList.commerce, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.authorizationsList.authData);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonContent"], _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_10__["AnimateTitleOnScrollDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonItem"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"]], styles: [".list[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.list-item[_ngcontent-%COMP%] {\n  --ion-background-color: transparent;\n  --padding-start: 0;\n  padding-bottom: 8px;\n  margin-top: 15px;\n}\n.list-item__icon--trailing[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: var(--medianoche);\n}\n.list-item__border[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--divisor-line);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvYmFsYW5jZS1pbnF1aXJ5LWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGO0FBQ0U7RUFDRSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNKO0FBRU07RUFDRSxlQUFBO0VBQ0Esd0JBQUE7QUFBUjtBQUlJO0VBQ0UsNENBQUE7QUFGTiIsImZpbGUiOiJiYWxhbmNlLWlucXVpcnktZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0IHtcbiAgbWFyZ2luLXRvcDogMjRweDtcblxuICAmLWl0ZW0ge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG5cbiAgICAmX19pY29uIHtcbiAgICAgICYtLXRyYWlsaW5nIHtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tbWVkaWFub2NoZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJl9fYm9yZGVyIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kaXZpc29yLWxpbmUpO1xuICAgIH1cbiAgfVxufVxuIl19 */"] });
    return BalanceInquiryDetailPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_4__["FeatureBasePage"]));



/***/ }),

/***/ "vjDN":
/*!****************************************************************************************************************!*\
  !*** ./libs/features/open-banking/src/presentation/permission/pages/balance-inquiry/balance-inquiry.config.ts ***!
  \****************************************************************************************************************/
/*! exports provided: BalanceInquiryConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalanceInquiryConfig", function() { return BalanceInquiryConfig; });
var BalanceInquiryConfig = Object.freeze({
    i18n: {
        deleteConfig: 'open-banking.permission.balance-inquiry.delete',
        deleteConfigMessage: 'open-banking.permission.balance-inquiry.delete.message',
        deleteErrorMessage: 'open-banking.permission.balance-inquiry.retry-message',
        deleteSuccessMessage: 'open-banking.permission.balance-inquiry.delete-success-message',
        authorizationSuccessMessage: 'open-banking.permission.balance-inquiry.authorization-success-message',
    },
    routes: {
        backpack: '/admin/dashboard',
        balanceInquiryDetail: '/admin/profile/settings/product/authorizations/balance-inquiry-detail',
    },
});


/***/ })

}]);
//# sourceMappingURL=default~nequi-features-open-banking-presentation-permission~permission-pages-permission-module.js.map