(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-occupation-profile-occupation-module"],{

/***/ "+f01":
/*!*****************************************************************************************************!*\
  !*** ./libs/features/profile/src/presentation/profile-occupation/home/profile-occupation.config.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ProfileOccupationConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileOccupationConfig", function() { return ProfileOccupationConfig; });
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
var _a;

var ProfileOccupationConfig = Object.freeze((_a = {},
    _a[_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_0__["OccupationCode"].STUDENT] = 'profile.occupation.form.studies',
    _a[_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_0__["OccupationCode"].EMPLOYED] = 'profile.occupation.form.profession',
    _a));


/***/ }),

/***/ "ABRY":
/*!************************************************************************************************!*\
  !*** ./libs/features/profile/src/presentation/profile-occupation/profile-occupation.module.ts ***!
  \************************************************************************************************/
/*! exports provided: ProfileOccupationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileOccupationPageModule", function() { return ProfileOccupationPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _attach_rut_attach_rut_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attach-rut/attach-rut.page */ "B7FV");
/* harmony import */ var _home_profile_occupation_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/profile-occupation.page */ "c5ko");
/* harmony import */ var _occupation_economic_activity_occupation_economic_activity_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./occupation-economic-activity/occupation-economic-activity.page */ "IRUD");
/* harmony import */ var _profile_occupation_address_profile_occupation_address_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile-occupation-address/profile-occupation-address.page */ "uIM0");
/* harmony import */ var _profile_occupation_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile-occupation-routing.module */ "lVcb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");












var ProfileOccupationPageModule = /** @class */ (function () {
    function ProfileOccupationPageModule() {
    }
    ProfileOccupationPageModule.ɵfac = function ProfileOccupationPageModule_Factory(t) { return new (t || ProfileOccupationPageModule)(); };
    ProfileOccupationPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: ProfileOccupationPageModule });
    ProfileOccupationPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [_nequi_ui__WEBPACK_IMPORTED_MODULE_4__["InputSelectBottomSheetService"]], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _profile_occupation_routing_module__WEBPACK_IMPORTED_MODULE_10__["ProfileOccupationPageRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _nequi_ui__WEBPACK_IMPORTED_MODULE_4__["NequiUiModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
                _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__["FeaturesCommonsModule"],
            ]] });
    return ProfileOccupationPageModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](ProfileOccupationPageModule, { declarations: [_home_profile_occupation_page__WEBPACK_IMPORTED_MODULE_7__["ProfileOccupationPage"],
        _profile_occupation_address_profile_occupation_address_page__WEBPACK_IMPORTED_MODULE_9__["ProfileOccupationAddressPage"],
        _occupation_economic_activity_occupation_economic_activity_page__WEBPACK_IMPORTED_MODULE_8__["OccupationEconomicActivityPage"],
        _attach_rut_attach_rut_page__WEBPACK_IMPORTED_MODULE_6__["AttachRutPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _profile_occupation_routing_module__WEBPACK_IMPORTED_MODULE_10__["ProfileOccupationPageRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _nequi_ui__WEBPACK_IMPORTED_MODULE_4__["NequiUiModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
        _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__["FeaturesCommonsModule"]] }); })();


/***/ }),

/***/ "B7FV":
/*!*************************************************************************************************!*\
  !*** ./libs/features/profile/src/presentation/profile-occupation/attach-rut/attach-rut.page.ts ***!
  \*************************************************************************************************/
/*! exports provided: AttachRutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachRutPage", function() { return AttachRutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_apps_base_mobile_config_features_commons_services_hardware_permission__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/apps/base/mobile/config/features/commons/services/hardware-permission */ "CiQA");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/profile/presentation */ "cLcF");
/* harmony import */ var _nequi_native_file_chooser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/native/file-chooser */ "jo/v");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _attach_rut_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./attach-rut.config */ "d1lQ");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");





















var AttachRutPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AttachRutPage, _super);
    function AttachRutPage(router, fileChooserPlugin, occupationInteractor, occupationService, alertService, loadingService, hardwarePermissionService, injector) {
        var _a;
        var _this = _super.call(this, injector) || this;
        _this.router = router;
        _this.fileChooserPlugin = fileChooserPlugin;
        _this.occupationInteractor = occupationInteractor;
        _this.occupationService = occupationService;
        _this.alertService = alertService;
        _this.loadingService = loadingService;
        _this.hardwarePermissionService = hardwarePermissionService;
        _this.config = _attach_rut_config__WEBPACK_IMPORTED_MODULE_10__["AttachRutConfig"];
        _this.alertHandlers = (_a = {},
            _a[_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["CiiuNotMatchException"].name] = function () { return _this.goBack(); },
            _a[_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["FallenKofaxException"].name] = function () { return _this.emitOccupationInformation(false); },
            _a[_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["NotRutRetriesException"].name] = function () { return _this.finishProcess(); },
            _a);
        return _this;
    }
    AttachRutPage.prototype.ngOnInit = function () {
        this.occupationData = this.router.getCurrentNavigation().extras.state;
    };
    AttachRutPage.prototype.openDianLink = function () {
        Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_9__["openUrl"])(_attach_rut_config__WEBPACK_IMPORTED_MODULE_10__["AttachRutConfig"].dianUrl);
    };
    AttachRutPage.prototype.attachRut = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var exception_1, _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.hardwarePermissionService.check(_nequi_apps_base_mobile_config_features_commons_services_hardware_permission__WEBPACK_IMPORTED_MODULE_3__["PermissionType"].READ_EXTERNAL_STORAGE)];
                    case 1:
                        _b.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        exception_1 = _b.sent();
                        return [4 /*yield*/, this.alertService.showByI18n({ i18nKey: this.config.i18n.notHavePermission })];
                    case 3:
                        _b.sent();
                        return [2 /*return*/];
                    case 4:
                        _a = this;
                        return [4 /*yield*/, this.fileChooserPlugin.open(_nequi_native_file_chooser__WEBPACK_IMPORTED_MODULE_7__["MimeType"].PDF)];
                    case 5:
                        _a.file = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AttachRutPage.prototype.sendRut = function () {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var error_1, i18nKey, alertHandler;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 4, , 7]);
                        this.occupationService.notSave = false;
                        return [4 /*yield*/, this.loadingService.show()];
                    case 1:
                        _c.sent();
                        return [4 /*yield*/, this.occupationInteractor.sendRut((_b = (_a = this.occupationData) === null || _a === void 0 ? void 0 : _a.ciiuCode) === null || _b === void 0 ? void 0 : _b.key, this.file.data)];
                    case 2:
                        _c.sent();
                        this.emitOccupationInformation();
                        return [4 /*yield*/, this.loadingService.hide(true)];
                    case 3:
                        _c.sent();
                        return [3 /*break*/, 7];
                    case 4:
                        error_1 = _c.sent();
                        return [4 /*yield*/, this.loadingService.hide(false)];
                    case 5:
                        _c.sent();
                        this.occupationService.notSave = true;
                        i18nKey = this.config.i18n.rutErrors[error_1.constructor.name];
                        alertHandler = this.alertHandlers[error_1.constructor.name] || null;
                        if (!i18nKey) {
                            this.emitOccupationInformation(false);
                            throw error_1;
                        }
                        return [4 /*yield*/, this.alertService.showByI18n({ i18nKey: i18nKey, handlers: { accept: alertHandler } })];
                    case 6:
                        _c.sent();
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    AttachRutPage.prototype.emitOccupationInformation = function (validate) {
        if (validate === void 0) { validate = true; }
        this.occupationService.emit(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.occupationData), { validate: validate }));
    };
    AttachRutPage.prototype.finishProcess = function () {
        this.navigatorProvider.navigateRoot(_attach_rut_config__WEBPACK_IMPORTED_MODULE_10__["AttachRutConfig"].goTo.home);
    };
    AttachRutPage.ɵfac = function AttachRutPage_Factory(t) { return new (t || AttachRutPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_native_file_chooser__WEBPACK_IMPORTED_MODULE_7__["FileChooserPlugin"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["OccupationInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_6__["OccupationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_8__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_apps_base_mobile_config_features_commons_services_hardware_permission__WEBPACK_IMPORTED_MODULE_3__["HardwarePermissionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"])); };
    AttachRutPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AttachRutPage, selectors: [["app-attach-rut"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 30, vars: 20, consts: [[1, "nequi-header"], ["slot", "start"], ["id", "attach-rut_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], ["fullscreen", "true", 1, "ion-padding-horizontal", "ion-content--white"], [1, "nequi-title"], [1, "nequi-item", "margin-bottom-16", 3, "click"], ["position", "floating", 1, "nequi-item__label"], ["type", "text", "readonly", "", 1, "nequi-item__input", 3, "value"], ["slot", "end", "name", "add-outline", 1, "nequi-item__icon"], [1, "text-description"], ["href", "javascript:;", 1, "link--decoration-none", "text--purple", 3, "click"], [1, "nequi-footer", "nequi-footer--padding-vertical-24"], ["id", "attach-rut_send_button", "shape", "round", "color", "guayaba", "expand", "block", 1, "margin-bottom-16", 3, "disabled", "click"]], template: function AttachRutPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AttachRutPage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-item", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AttachRutPage_Template_ion_item_click_9_listener() { return ctx.attachRut(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "ion-input", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "ion-icon", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AttachRutPage_Template_a_click_19_listener() { return ctx.openDianLink(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-footer", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ion-button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AttachRutPage_Template_ion_button_click_27_listener() { return ctx.sendRut(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](29, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 8, ctx.config.i18n.title), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 10, ctx.config.i18n.attachLabel), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.file == null ? null : ctx.file.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 12, ctx.config.i18n.descriptionFirst));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 14, ctx.config.i18n.dian), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 16, ctx.config.i18n.descriptionLast));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !(ctx.file == null ? null : ctx.file.name));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](29, 18, ctx.config.i18n.next), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["TextValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonFooter"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"]], encapsulation: 2 });
    return AttachRutPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__["FeatureBasePage"]));



/***/ }),

/***/ "GGP3":
/*!***************************************************************************************************************************************!*\
  !*** ./libs/features/profile/src/presentation/profile-occupation/occupation-economic-activity/occupation-economic-activity.config.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: OccupationEconomicActivityConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OccupationEconomicActivityConfig", function() { return OccupationEconomicActivityConfig; });
var OccupationEconomicActivityConfig = Object.freeze({
    dianUrl: 'https://www.dian.gov.co/Transaccional/Paginas/Rut.aspx',
    economicActivityKey: 'profile.economic-activity',
    confirmDescriptionKey: 'profile.economic-activity.confirm-description',
    viewExample: {
        id: 'occupation-economic-activity_view-example_modal',
        imagePath: 'assets/images/organisms/modals/ciiu-example.svg',
        cssClass: 'modal--medianoche modal--image-height-auto',
    },
});


/***/ }),

/***/ "IRUD":
/*!*************************************************************************************************************************************!*\
  !*** ./libs/features/profile/src/presentation/profile-occupation/occupation-economic-activity/occupation-economic-activity.page.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: OccupationEconomicActivityPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OccupationEconomicActivityPage", function() { return OccupationEconomicActivityPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/profile/presentation */ "cLcF");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _occupation_economic_activity_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./occupation-economic-activity.config */ "GGP3");
/* harmony import */ var _occupation_economic_activity_view_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./occupation-economic-activity.view-model */ "x1jA");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ui_src_lib_controls_input_select_input_select_control_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../ui/src/lib/controls/input-select/input-select-control.component */ "BMu5");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");






















function OccupationEconomicActivityPage_form_9_Template(rf, ctx) { if (rf & 1) {
    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "ion-input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "nequi-input-select-control", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OccupationEconomicActivityPage_form_9_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.openDianLink(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.viewModel.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 7, "profile.economic-activity.occupation-label"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 9, "profile.economic-activity.ciiu-label"))("options", ctx_r0.getCiiuList.bind(ctx_r0))("useVirtualScroll", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 11, "profile.economic-activity.description"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 13, "profile.economic-activity.dian"), " ");
} }
var OccupationEconomicActivityPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(OccupationEconomicActivityPage, _super);
    function OccupationEconomicActivityPage(translateProvider, fullscreenModalService, confirmBottomSheetService, occupationService, occupationInteractor, router, injector) {
        var _this = _super.call(this, injector) || this;
        _this.translateProvider = translateProvider;
        _this.fullscreenModalService = fullscreenModalService;
        _this.confirmBottomSheetService = confirmBottomSheetService;
        _this.occupationService = occupationService;
        _this.occupationInteractor = occupationInteractor;
        _this.router = router;
        _this.viewModel = new _occupation_economic_activity_view_model__WEBPACK_IMPORTED_MODULE_10__["OccupationEconomicActivityViewModel"]();
        return _this;
    }
    OccupationEconomicActivityPage.prototype.ngOnInit = function () {
        this.occupationData = this.router.getCurrentNavigation().extras.state;
        this.viewModel.initForm(this.occupationData);
    };
    OccupationEconomicActivityPage.prototype.openConfirm = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var items, data;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.buildConfirmData()];
                    case 1:
                        items = _a.sent();
                        return [4 /*yield*/, this.confirmBottomSheetService.show({
                                subtitle: _occupation_economic_activity_config__WEBPACK_IMPORTED_MODULE_9__["OccupationEconomicActivityConfig"].confirmDescriptionKey,
                                items: items,
                            })];
                    case 2:
                        data = (_a.sent()).data;
                        if (data) {
                            this.occupationService.emit(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.occupationData), this.viewModel.model));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    OccupationEconomicActivityPage.prototype.openDianLink = function () {
        Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_8__["openUrl"])(_occupation_economic_activity_config__WEBPACK_IMPORTED_MODULE_9__["OccupationEconomicActivityConfig"].dianUrl);
    };
    OccupationEconomicActivityPage.prototype.openViewExample = function () {
        this.fullscreenModalService.show({
            id: _occupation_economic_activity_config__WEBPACK_IMPORTED_MODULE_9__["OccupationEconomicActivityConfig"].viewExample.id,
            imgPath: _occupation_economic_activity_config__WEBPACK_IMPORTED_MODULE_9__["OccupationEconomicActivityConfig"].viewExample.imagePath,
            cssClass: _occupation_economic_activity_config__WEBPACK_IMPORTED_MODULE_9__["OccupationEconomicActivityConfig"].viewExample.cssClass,
        });
    };
    OccupationEconomicActivityPage.prototype.getCiiuList = function () {
        return this.occupationInteractor.getCiiuList();
    };
    OccupationEconomicActivityPage.prototype.buildConfirmData = function () {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                messages = this.translateProvider.get(_occupation_economic_activity_config__WEBPACK_IMPORTED_MODULE_9__["OccupationEconomicActivityConfig"].economicActivityKey);
                return [2 /*return*/, [
                        {
                            label: messages['occupation-label'],
                            value: (_a = this.occupationData) === null || _a === void 0 ? void 0 : _a.occupation.name,
                        },
                        {
                            label: messages.title,
                            value: this.viewModel.model.ciiuCode.name,
                        },
                    ]];
            });
        });
    };
    OccupationEconomicActivityPage.ɵfac = function OccupationEconomicActivityPage_Factory(t) { return new (t || OccupationEconomicActivityPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_5__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_7__["FullscreenModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_7__["ConfirmInfoBottomSheetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_6__["OccupationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__["OccupationInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"])); };
    OccupationEconomicActivityPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OccupationEconomicActivityPage, selectors: [["app-occupation-economic-activity"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 19, vars: 11, consts: [[1, "nequi-header"], ["slot", "start"], ["id", "occupation-economic-activity_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], ["fullscreen", "true", 1, "ion-padding-horizontal", "ion-content--white"], [1, "nequi-title"], [3, "formGroup", 4, "ngIf"], [1, "nequi-footer", "nequi-footer--padding-vertical-24"], ["id", "occupation-economic-activity_confirm_button", "shape", "round", "color", "guayaba", "expand", "block", 1, "margin-bottom-16", 3, "disabled", "click"], [1, "nequi-footer__link", 3, "click"], ["id", "occupation-economic-activity_view-example_link", 1, "nequi-footer__link"], [3, "formGroup"], [1, "nequi-item", "margin-bottom-8"], ["position", "floating", 1, "nequi-item__label"], ["id", "occupation-economic-activity_occupation-name_input", "type", "text", "formControlName", "occupationName", 1, "nequi-item__input"], ["id", "occupation-economic-activity_value_input", "formControlName", "ciiuCode", "visibleKey", "name", 1, "margin-bottom-16", 3, "label", "options", "useVirtualScroll"], [1, "text-description"], [3, "innerHTML"], ["href", "javascript:;", 1, "link--decoration-none", "text--purple", 3, "click"]], template: function OccupationEconomicActivityPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OccupationEconomicActivityPage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, OccupationEconomicActivityPage_form_9_Template, 14, 15, "form", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-footer", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OccupationEconomicActivityPage_Template_ion_button_click_12_listener() { return ctx.openConfirm(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OccupationEconomicActivityPage_Template_p_click_15_listener() { return ctx.openViewExample(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 5, "profile.economic-activity.title"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.viewModel.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.viewModel.form == null ? null : ctx.viewModel.form.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 7, "profile.economic-activity.next"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 9, "profile.economic-activity.view-example"), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonText"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonFooter"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormControlName"], _ui_src_lib_controls_input_select_input_select_control_component__WEBPACK_IMPORTED_MODULE_14__["InputSelectControlComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"]], encapsulation: 2 });
    return OccupationEconomicActivityPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_4__["FeatureBasePage"]));



/***/ }),

/***/ "MEGa":
/*!***************************************************************************************************************************************!*\
  !*** ./libs/features/profile/src/presentation/profile-occupation/profile-occupation-address/profile-occupation-address.view-model.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: ProfileOccupationAddressViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileOccupationAddressViewModel", function() { return ProfileOccupationAddressViewModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");


var ProfileOccupationAddressViewModel = /** @class */ (function () {
    function ProfileOccupationAddressViewModel() {
    }
    Object.defineProperty(ProfileOccupationAddressViewModel.prototype, "address", {
        get: function () {
            return this.formGroup.value.address;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProfileOccupationAddressViewModel.prototype, "model", {
        get: function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ companyName: this.formGroup.value.company }, this.formGroup.value.address);
        },
        enumerable: false,
        configurable: true
    });
    ProfileOccupationAddressViewModel.prototype.initForm = function (data) {
        this.form = {
            company: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](data === null || data === void 0 ? void 0 : data.companyName, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](data, [this.addressFilled.bind(this)]),
        };
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.form));
    };
    ProfileOccupationAddressViewModel.prototype.onAddressChanged = function (value) {
        this.isAddressValid = value.isValidForm;
        this.form.address.setValue(value.data);
    };
    ProfileOccupationAddressViewModel.prototype.addressFilled = function (control) {
        if (!control.value || !this.isAddressValid) {
            return { required: true };
        }
    };
    return ProfileOccupationAddressViewModel;
}());



/***/ }),

/***/ "c5ko":
/*!***************************************************************************************************!*\
  !*** ./libs/features/profile/src/presentation/profile-occupation/home/profile-occupation.page.ts ***!
  \***************************************************************************************************/
/*! exports provided: ProfileOccupationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileOccupationPage", function() { return ProfileOccupationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/profile/presentation */ "cLcF");
/* harmony import */ var _profile_occupation_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-occupation.config */ "+f01");
/* harmony import */ var _profile_occupation_view_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile-occupation.view-model */ "eMso");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ui_src_lib_controls_input_select_input_select_control_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../ui/src/lib/controls/input-select/input-select-control.component */ "BMu5");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");


















function ProfileOccupationPage_form_10_ion_item_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, ctx_r1.descriptionPlaceholder), " ");
} }
function ProfileOccupationPage_form_10_Template(rf, ctx) { if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nequi-input-select-control", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selected", function ProfileOccupationPage_form_10_Template_nequi_input_select_control_selected_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.onOccupationChanged(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ProfileOccupationPage_form_10_ion_item_3_Template, 5, 3, "ion-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.viewModel.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 5, "profile.occupation.form.occupation"))("options", ctx_r0.getOccupationList.bind(ctx_r0))("hideFilter", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.viewModel.professionFormControl);
} }
var ProfileOccupationPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ProfileOccupationPage, _super);
    function ProfileOccupationPage(occupationInteractor, occupationService, route, router, dynatraceService, injector) {
        var _this = _super.call(this, injector) || this;
        _this.occupationInteractor = occupationInteractor;
        _this.occupationService = occupationService;
        _this.route = route;
        _this.router = router;
        _this.dynatraceService = dynatraceService;
        _this.viewModel = new _profile_occupation_view_model__WEBPACK_IMPORTED_MODULE_7__["ProfileOccupationViewModel"]();
        return _this;
    }
    Object.defineProperty(ProfileOccupationPage.prototype, "descriptionPlaceholder", {
        get: function () {
            return _profile_occupation_config__WEBPACK_IMPORTED_MODULE_6__["ProfileOccupationConfig"][this.viewModel.model.occupation.code];
        },
        enumerable: false,
        configurable: true
    });
    ProfileOccupationPage.prototype.ngOnInit = function () {
        this.data = this.router.getCurrentNavigation().extras.state;
        this.viewModel.initForm(this.data);
        this.onOccupationChanged();
    };
    ProfileOccupationPage.prototype.getOccupationList = function () {
        return this.occupationInteractor.get();
    };
    ProfileOccupationPage.prototype.onOccupationChanged = function () {
        try {
            this.viewModel.removeProfessionFormControl();
            this.occupationInteractor.validateRequireDescription(this.viewModel.model);
        }
        catch (exception) {
            this.manageRequireDescriptionException(exception);
        }
    };
    ProfileOccupationPage.prototype.onOccupationFilled = function () {
        try {
            this.occupationInteractor.validateOccupation(this.viewModel.model);
            this.occupationService.emit(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.data), this.viewModel.model));
        }
        catch (exception) {
            this.manageRequireLocationException(exception);
            this.manageRequireEconomicActivityException(exception);
            this.manageNotRequireEconomicActivityException(exception, this.viewModel.model.occupation.code);
            this.dynatraceService.setCustomError(exception, null, true);
        }
    };
    ProfileOccupationPage.prototype.manageRequireDescriptionException = function (exception) {
        if (exception instanceof _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__["RequireDescriptionException"]) {
            this.viewModel.addProfessionFormControl(this.data);
        }
        this.dynatraceService.setCustomError(exception, null, true);
    };
    ProfileOccupationPage.prototype.manageRequireLocationException = function (exception) {
        if (exception instanceof _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__["RequireLocationException"]) {
            this.navigatorProvider.navigateForward(['address'], {
                relativeTo: this.route,
                state: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.data), this.viewModel.model),
            });
        }
    };
    ProfileOccupationPage.prototype.manageRequireEconomicActivityException = function (exception) {
        if (exception instanceof _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__["RequireEconomicActivityException"]) {
            this.navigatorProvider.navigateForward(['economic-activity'], {
                relativeTo: this.route,
                state: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.data), this.viewModel.model),
            });
        }
    };
    ProfileOccupationPage.prototype.manageNotRequireEconomicActivityException = function (exception, occupationCode) {
        if (!(exception instanceof _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__["NotRequireEconomicActivityException"])) {
            return;
        }
        if (this.occupationInteractor.validateIsRentier(occupationCode)) {
            var RENTIER_CAPITAL = '0090';
            this.viewModel.model.ciiuCode = {
                key: RENTIER_CAPITAL,
                name: null,
            };
        }
        this.occupationService.emit(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.data), this.viewModel.model));
    };
    ProfileOccupationPage.ɵfac = function ProfileOccupationPage_Factory(t) { return new (t || ProfileOccupationPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__["OccupationInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_5__["OccupationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_4__["DynatraceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"])); };
    ProfileOccupationPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProfileOccupationPage, selectors: [["app-profile-occupation"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 16, vars: 8, consts: [[1, "nequi-header"], ["slot", "start"], ["id", "profile-occupation_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], ["fullscreen", "true", 1, "ion-padding-horizontal", "ion-content--white"], [1, "list"], [3, "formGroup", 4, "ngIf"], [1, "nequi-footer", "nequi-footer--padding-24"], ["id", "profile-occupation_continue_button", "expand", "block", "color", "guayaba", "shape", "round", 3, "disabled", "click"], [3, "formGroup"], ["formControlName", "occupation", "visibleKey", "name", 3, "label", "options", "hideFilter", "selected"], ["class", "nequi-item", 4, "ngIf"], [1, "nequi-item"], ["id", "profile-occupation_profession_label", "position", "floating", 1, "nequi-item__label"], ["id", "profile-occupation_professsion_input", "formControlName", "profession", "type", "text", 1, "nequi-item__input"]], template: function ProfileOccupationPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileOccupationPage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-content", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-list", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ProfileOccupationPage_form_10_Template, 4, 7, "form", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-footer", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileOccupationPage_Template_ion_button_click_13_listener() { return ctx.onOccupationFilled(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 4, "profile.occupation.title"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.viewModel.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.viewModel.form.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 6, "profile.occupation.form.button"), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonFooter"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormGroupDirective"], _ui_src_lib_controls_input_select_input_select_control_component__WEBPACK_IMPORTED_MODULE_11__["InputSelectControlComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControlName"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["TextValueAccessor"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"]], encapsulation: 2 });
    return ProfileOccupationPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_4__["FeatureBasePage"]));



/***/ }),

/***/ "d1lQ":
/*!***************************************************************************************************!*\
  !*** ./libs/features/profile/src/presentation/profile-occupation/attach-rut/attach-rut.config.ts ***!
  \***************************************************************************************************/
/*! exports provided: AttachRutConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachRutConfig", function() { return AttachRutConfig; });
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
var _a;

var AttachRutConfig = Object.freeze({
    dianUrl: 'https://muisca.dian.gov.co/WebArquitectura/DefLoginMb.faces',
    i18n: {
        title: 'profile.attach-rut.title',
        attachLabel: 'profile.attach-rut.attach-label',
        descriptionFirst: 'profile.attach-rut.description-first',
        dian: 'profile.attach-rut.dian',
        descriptionLast: 'profile.attach-rut.description-last',
        next: 'profile.attach-rut.next',
        notHavePermission: 'profile.rut.alerts.not-have-permission',
        rutErrors: (_a = {},
            _a[_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_0__["DocumentNotMatchException"].name] = 'profile.rut.alerts.document-no-match',
            _a[_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_0__["CiiuNotMatchException"].name] = 'profile.rut.alerts.ciiu-not-match',
            _a[_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_0__["FallenKofaxException"].name] = 'profile.rut.alerts.fallen-kofax',
            _a[_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_0__["NotRutException"].name] = 'profile.rut.alerts.is-not-rut',
            _a[_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_0__["NotRutRetriesException"].name] = 'profile.rut.alerts.not-retries',
            _a),
    },
    goTo: {
        home: '/admin/dashboard',
    },
});


/***/ }),

/***/ "eMso":
/*!*********************************************************************************************************!*\
  !*** ./libs/features/profile/src/presentation/profile-occupation/home/profile-occupation.view-model.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ProfileOccupationViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileOccupationViewModel", function() { return ProfileOccupationViewModel; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");


var PROFESSION = 'profession';
var ProfileOccupationViewModel = /** @class */ (function () {
    function ProfileOccupationViewModel() {
    }
    Object.defineProperty(ProfileOccupationViewModel.prototype, "model", {
        get: function () {
            return this.form.value;
        },
        enumerable: false,
        configurable: true
    });
    ProfileOccupationViewModel.prototype.initForm = function (data) {
        this.createControls(data);
        this.createFormGroup(data);
    };
    ProfileOccupationViewModel.prototype.addProfessionFormControl = function (occupation) {
        var _a;
        this.professionFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]((_a = occupation === null || occupation === void 0 ? void 0 : occupation.profession) !== null && _a !== void 0 ? _a : '');
        if ((occupation === null || occupation === void 0 ? void 0 : occupation.occupation.code) !== _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_1__["OccupationCode"].STUDENT) {
            this.professionFormControl.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        }
        this.form.addControl(PROFESSION, this.professionFormControl);
    };
    ProfileOccupationViewModel.prototype.removeProfessionFormControl = function () {
        this.professionFormControl = null;
        this.form.removeControl(PROFESSION);
    };
    ProfileOccupationViewModel.prototype.createControls = function (data) {
        var _a;
        this.occupationFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]((_a = data === null || data === void 0 ? void 0 : data.occupation) !== null && _a !== void 0 ? _a : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]);
    };
    ProfileOccupationViewModel.prototype.createFormGroup = function (data) {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            occupation: this.occupationFormControl,
        });
        if (data === null || data === void 0 ? void 0 : data.profession) {
            this.addProfessionFormControl(data);
        }
        this.form.markAsPristine();
        this.form.markAsUntouched();
    };
    return ProfileOccupationViewModel;
}());



/***/ }),

/***/ "iffz":
/*!***********************************************************************************************************************************!*\
  !*** ./libs/features/profile/src/presentation/profile-occupation/profile-occupation-address/profile-occupation-address.config.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: ProfileOccupationAddress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileOccupationAddress", function() { return ProfileOccupationAddress; });
var ProfileOccupationAddress = Object.freeze({
    i18n: {
        profileOccupation: 'profile.occupation',
    },
});


/***/ }),

/***/ "lVcb":
/*!********************************************************************************************************!*\
  !*** ./libs/features/profile/src/presentation/profile-occupation/profile-occupation-routing.module.ts ***!
  \********************************************************************************************************/
/*! exports provided: ProfileOccupationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileOccupationPageRoutingModule", function() { return ProfileOccupationPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _attach_rut_attach_rut_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attach-rut/attach-rut.page */ "B7FV");
/* harmony import */ var _home_profile_occupation_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/profile-occupation.page */ "c5ko");
/* harmony import */ var _occupation_economic_activity_occupation_economic_activity_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./occupation-economic-activity/occupation-economic-activity.page */ "IRUD");
/* harmony import */ var _profile_occupation_address_profile_occupation_address_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile-occupation-address/profile-occupation-address.page */ "uIM0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







var routes = [
    {
        path: '',
        component: _home_profile_occupation_page__WEBPACK_IMPORTED_MODULE_2__["ProfileOccupationPage"],
    },
    {
        path: 'address',
        component: _profile_occupation_address_profile_occupation_address_page__WEBPACK_IMPORTED_MODULE_4__["ProfileOccupationAddressPage"],
    },
    {
        path: 'economic-activity',
        component: _occupation_economic_activity_occupation_economic_activity_page__WEBPACK_IMPORTED_MODULE_3__["OccupationEconomicActivityPage"],
    },
    {
        path: 'economic-activity/attach-rut',
        component: _attach_rut_attach_rut_page__WEBPACK_IMPORTED_MODULE_1__["AttachRutPage"],
    },
];
var ProfileOccupationPageRoutingModule = /** @class */ (function () {
    function ProfileOccupationPageRoutingModule() {
    }
    ProfileOccupationPageRoutingModule.ɵfac = function ProfileOccupationPageRoutingModule_Factory(t) { return new (t || ProfileOccupationPageRoutingModule)(); };
    ProfileOccupationPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ProfileOccupationPageRoutingModule });
    ProfileOccupationPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return ProfileOccupationPageRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ProfileOccupationPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "uIM0":
/*!*********************************************************************************************************************************!*\
  !*** ./libs/features/profile/src/presentation/profile-occupation/profile-occupation-address/profile-occupation-address.page.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: ProfileOccupationAddressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileOccupationAddressPage", function() { return ProfileOccupationAddressPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/profile/presentation */ "cLcF");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/utils/string */ "p6rB");
/* harmony import */ var _profile_occupation_address_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile-occupation-address.config */ "iffz");
/* harmony import */ var _profile_occupation_address_view_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile-occupation-address.view-model */ "MEGa");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _commons_src_presentation_organisms_address_address_organism__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../commons/src/presentation/organisms/address/address.organism */ "3FTZ");
/* harmony import */ var _ui_src_lib_directives_rounded_button_rounded_button_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../ui/src/lib/directives/rounded-button/rounded-button.directive */ "h1UR");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");




















var ProfileOccupationAddressPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ProfileOccupationAddressPage, _super);
    function ProfileOccupationAddressPage(injector, translateProvider, confirmInfoBottomSheetService, occupationService, router) {
        var _this = _super.call(this, injector) || this;
        _this.translateProvider = translateProvider;
        _this.confirmInfoBottomSheetService = confirmInfoBottomSheetService;
        _this.occupationService = occupationService;
        _this.router = router;
        _this.viewModel = new _profile_occupation_address_view_model__WEBPACK_IMPORTED_MODULE_9__["ProfileOccupationAddressViewModel"]();
        _this.patterns = _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__["CustomInputValidators"].patterns;
        return _this;
    }
    ProfileOccupationAddressPage.prototype.ngOnInit = function () {
        var _a;
        this.occupationData = this.router.getCurrentNavigation().extras.state;
        this.viewModel.initForm((_a = this.occupationData) === null || _a === void 0 ? void 0 : _a.location);
    };
    ProfileOccupationAddressPage.prototype.openConfirmBottomSheet = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var confirmData, result;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.buildConfirmData()];
                    case 1:
                        confirmData = _a.sent();
                        return [4 /*yield*/, this.confirmInfoBottomSheetService.show({ items: confirmData })];
                    case 2:
                        result = _a.sent();
                        if (result.data === true) {
                            this.occupationService.emit(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.occupationData), { location: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.viewModel.model) }));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfileOccupationAddressPage.prototype.buildConfirmData = function () {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                messages = this.translateProvider.get(_profile_occupation_address_config__WEBPACK_IMPORTED_MODULE_8__["ProfileOccupationAddress"].i18n.profileOccupation);
                return [2 /*return*/, [
                        {
                            label: (_a = this.occupationData) === null || _a === void 0 ? void 0 : _a.occupation.name,
                            value: (_b = this.occupationData) === null || _b === void 0 ? void 0 : _b.profession,
                        },
                        {
                            label: messages.address.bottomSheet.province,
                            value: this.viewModel.model.province.name,
                        },
                        {
                            label: messages.address.bottomSheet.city,
                            value: this.viewModel.model.city.name,
                        },
                        {
                            label: messages.address.bottomSheet.address,
                            value: Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_7__["createFormat"])(messages.address.bottomSheet['address-format'], [
                                this.viewModel.model.address.road.name,
                                this.viewModel.model.address.firstPart,
                                this.viewModel.model.address.secondPart,
                            ]),
                        },
                        {
                            label: messages.address.bottomSheet.details,
                            value: this.viewModel.model.address.extraPart,
                        },
                    ]];
            });
        });
    };
    ProfileOccupationAddressPage.ɵfac = function ProfileOccupationAddressPage_Factory(t) { return new (t || ProfileOccupationAddressPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_4__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_6__["ConfirmInfoBottomSheetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_5__["OccupationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
    ProfileOccupationAddressPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProfileOccupationAddressPage, selectors: [["app-profile-agreement"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 21, vars: 13, consts: [[1, "nequi-header"], ["slot", "start"], ["id", "profile-agreement_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], [1, "ion-padding-horizontal", "ion-content--white"], [3, "formGroup"], [1, "nequi-item"], ["position", "floating", 1, "nequi-item__label"], ["type", "text", "formControlName", "company", 1, "nequi-item__input"], [3, "data", "patterns", "addressChange"], [1, "nequi-footer"], [1, "nequi-footer__toolbar"], ["appRoundedButton", "pink", 1, "nequi-footer__button", 3, "disabled", "click"]], template: function ProfileOccupationAddressPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileOccupationAddressPage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-content", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "form", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-item", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "ion-input", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "nequi-address", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("addressChange", function ProfileOccupationAddressPage_Template_nequi_address_addressChange_15_listener($event) { return ctx.viewModel.onAddressChanged($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-footer", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-toolbar", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileOccupationAddressPage_Template_ion_button_click_18_listener() { return ctx.openConfirmBottomSheet(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 7, "profile.occupation.address.title"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.viewModel.formGroup);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 9, "profile.occupation.address.form.company"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.viewModel.address)("patterns", ctx.patterns);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.viewModel.formGroup.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 11, "profile.occupation.address.form.button"), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControlName"], _commons_src_presentation_organisms_address_address_organism__WEBPACK_IMPORTED_MODULE_12__["AddressOrganism"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonFooter"], _ui_src_lib_directives_rounded_button_rounded_button_directive__WEBPACK_IMPORTED_MODULE_13__["RoundedButtonDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslatePipe"]], encapsulation: 2 });
    return ProfileOccupationAddressPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__["FeatureBasePage"]));



/***/ }),

/***/ "x1jA":
/*!*******************************************************************************************************************************************!*\
  !*** ./libs/features/profile/src/presentation/profile-occupation/occupation-economic-activity/occupation-economic-activity.view-model.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: OccupationEconomicActivityViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OccupationEconomicActivityViewModel", function() { return OccupationEconomicActivityViewModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");


var OccupationEconomicActivityViewModel = /** @class */ (function () {
    function OccupationEconomicActivityViewModel() {
    }
    Object.defineProperty(OccupationEconomicActivityViewModel.prototype, "model", {
        get: function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.form.value);
        },
        enumerable: false,
        configurable: true
    });
    OccupationEconomicActivityViewModel.prototype.initForm = function (data) {
        this.createFormGroup(data);
    };
    OccupationEconomicActivityViewModel.prototype.createFormGroup = function (data) {
        var _a, _b, _c;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            occupationName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: (_b = (_a = data === null || data === void 0 ? void 0 : data.occupation) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : '', disabled: true }, []),
            ciiuCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((_c = data === null || data === void 0 ? void 0 : data.ciiuCode) !== null && _c !== void 0 ? _c : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
        this.form.markAsPristine();
        this.form.markAsUntouched();
    };
    return OccupationEconomicActivityViewModel;
}());



/***/ })

}]);
//# sourceMappingURL=profile-occupation-profile-occupation-module.js.map