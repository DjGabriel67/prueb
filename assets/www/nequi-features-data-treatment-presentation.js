(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nequi-features-data-treatment-presentation"],{

/***/ "0tE/":
/*!*******************************************************************************!*\
  !*** ./libs/features/data-treatment/src/presentation/pages/form/form.page.ts ***!
  \*******************************************************************************/
/*! exports provided: FormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPage", function() { return FormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_application_data_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/application-data/core */ "UgzZ");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_features_data_treatment_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/features/data-treatment/core */ "v036");
/* harmony import */ var _nequi_features_lite_registry_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nequi/features/lite-registry/data */ "jztc");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_ui_services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nequi/ui/services */ "U66T");
/* harmony import */ var _nequi_utils_date__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @nequi/utils/date */ "tGfC");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _form_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./form.config */ "MtSC");
/* harmony import */ var _form_view_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./form.view-model */ "Esq3");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../ui/src/lib/directives/animate-title-on-scroll/animate-title-on-scroll.directive */ "qbWi");
/* harmony import */ var _ui_src_lib_directives_form_content_style_form_content_style_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../ui/src/lib/directives/form-content-style/form-content-style.directive */ "+XT3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ui_src_lib_components_busy_indicator_busy_indicator_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../../ui/src/lib/components/busy-indicator/busy-indicator.component */ "N6nj");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");

































function FormPage_app_busy_indicator_14_Template(rf, ctx) { if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-busy-indicator", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onReload", function FormPage_app_busy_indicator_14_Template_app_busy_indicator_onReload_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.getData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showReload", ctx_r0.viewModel.busyIndicator.error)("reloadMessage", ctx_r0.viewModel.busyIndicator.error);
} }
function FormPage_form_15_ion_item_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-checkbox", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var option_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", option_r8.control);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", option_r8.text, " ");
} }
function FormPage_form_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-list", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, FormPage_form_15_ion_item_2_Template, 4, 2, "ion-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.viewModel.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.viewModel.controls);
} }
function FormPage_ion_text_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-text", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, "data-treatment.form.remember-message"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function FormPage_ion_text_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-text", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, "data-treatment.form.accept-message"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function FormPage_ion_footer_18_Template(rf, ctx) { if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-footer", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormPage_ion_footer_18_Template_ion_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.saveOptions(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r4.viewModel.busyIndicator.show);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, "data-treatment.form.button"), " ");
} }
var FormPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FormPage, _super);
    function FormPage(injector, originFlow, dataTreatmentInteractor, parameterInteractor, loadingService, toastService, router, registryLiteModel, analyticsInteractor, applicationDataInteractor, translateProvider, cardModalService) {
        var _this = _super.call(this, injector) || this;
        _this.originFlow = originFlow;
        _this.dataTreatmentInteractor = dataTreatmentInteractor;
        _this.parameterInteractor = parameterInteractor;
        _this.loadingService = loadingService;
        _this.toastService = toastService;
        _this.router = router;
        _this.registryLiteModel = registryLiteModel;
        _this.analyticsInteractor = analyticsInteractor;
        _this.applicationDataInteractor = applicationDataInteractor;
        _this.translateProvider = translateProvider;
        _this.cardModalService = cardModalService;
        _this.viewModel = new _form_view_model__WEBPACK_IMPORTED_MODULE_15__["FormViewModel"]();
        _this.operationType = _nequi_features_data_treatment_core__WEBPACK_IMPORTED_MODULE_8__["OperationType"].UPDATE;
        var state = _this.router.getCurrentNavigation().extras.state;
        _this.phoneNumber = state === null || state === void 0 ? void 0 : state.phoneNumber;
        _this.fromDeepLink = state === null || state === void 0 ? void 0 : state.fromDeepLink;
        _this.data = state === null || state === void 0 ? void 0 : state.data;
        return _this;
    }
    FormPage.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getData()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(FormPage.prototype, "showDisclaimer", {
        get: function () {
            return this.originFlow === _nequi_features_commons__WEBPACK_IMPORTED_MODULE_4__["OriginFlow"].ENROLL || this.originFlow === _nequi_features_commons__WEBPACK_IMPORTED_MODULE_4__["OriginFlow"].BACKPACK;
        },
        enumerable: false,
        configurable: true
    });
    FormPage.prototype.getData = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var url, options, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        this.viewModel.busyIndicator.show = true;
                        this.viewModel.busyIndicator.error = '';
                        return [4 /*yield*/, this.getOptionsUrl()];
                    case 1:
                        url = _a.sent();
                        return [4 /*yield*/, this.dataTreatmentInteractor.getOptions(url)];
                    case 2:
                        options = _a.sent();
                        this.viewModel.buildCheckboxes(options);
                        if (this.originFlow === _nequi_features_commons__WEBPACK_IMPORTED_MODULE_4__["OriginFlow"].PROFILE) {
                            this.setProfileData();
                        }
                        if (this.originFlow === _nequi_features_commons__WEBPACK_IMPORTED_MODULE_4__["OriginFlow"].BACKPACK) {
                            this.setData();
                        }
                        this.viewModel.busyIndicator.show = false;
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.viewModel.busyIndicator.error = this.translateProvider.get(_form_config__WEBPACK_IMPORTED_MODULE_14__["FormConfig"].i18n.errorMessage);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    FormPage.prototype.setData = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data, error_2;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.dataTreatmentInteractor.getUserData()];
                    case 1:
                        data = _a.sent();
                        this.viewModel.updateCheckboxValues(data);
                        this.viewModel.busyIndicator.show = false;
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        if (error_2.constructor.name === _nequi_features_data_treatment_core__WEBPACK_IMPORTED_MODULE_8__["NoDataException"].name) {
                            this.operationType = _nequi_features_data_treatment_core__WEBPACK_IMPORTED_MODULE_8__["OperationType"].CREATE;
                            this.viewModel.busyIndicator.show = false;
                            return [2 /*return*/];
                        }
                        this.viewModel.busyIndicator.error = error_2.message;
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FormPage.prototype.saveOptions = function () {
        this.viewModel.mapOptionValues();
        if (this.originFlow === _nequi_features_commons__WEBPACK_IMPORTED_MODULE_4__["OriginFlow"].ENROLL) {
            this.setTemporalDataTreatment();
            return;
        }
        this.saveDataTreatment();
    };
    FormPage.prototype.getOptionsUrl = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.parameterInteractor.getParameter(_form_config__WEBPACK_IMPORTED_MODULE_14__["FormConfig"].parameters.id)];
                    case 1: return [2 /*return*/, (_a.sent())
                            .filter(function (attribute) { return attribute.value === _form_config__WEBPACK_IMPORTED_MODULE_14__["FormConfig"].parameters.urlKey; })
                            .map(function (param) { return param.code; })
                            .reduce(function (param) { return param; })];
                }
            });
        });
    };
    FormPage.prototype.saveDataTreatment = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var shouldUnlock, error_3;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 6]);
                        return [4 /*yield*/, this.loadingService.show()];
                    case 1:
                        _a.sent();
                        shouldUnlock = this.originFlow === _nequi_features_commons__WEBPACK_IMPORTED_MODULE_4__["OriginFlow"].BACKPACK && !this.fromDeepLink;
                        return [4 /*yield*/, this.dataTreatmentInteractor.saveUserData(this.viewModel.buildRequest(this.operationType), shouldUnlock)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.loadingService.hide(true)];
                    case 3:
                        _a.sent();
                        this.successNavigation();
                        return [3 /*break*/, 6];
                    case 4:
                        error_3 = _a.sent();
                        return [4 /*yield*/, this.loadingService.hideWithoutFeedback()];
                    case 5:
                        _a.sent();
                        this.toastService.showError(error_3.message);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    FormPage.prototype.successNavigation = function () {
        var _a;
        var _this = this;
        var url = this.getSuccessUrl();
        var navigation = (_a = {},
            _a[_nequi_features_commons__WEBPACK_IMPORTED_MODULE_4__["OriginFlow"].ENROLL] = function () { return _this.enrollNavigation(url); },
            _a[_nequi_features_commons__WEBPACK_IMPORTED_MODULE_4__["OriginFlow"].PROFILE] = function () { return _this.profileNavigation(url); },
            _a[_nequi_features_commons__WEBPACK_IMPORTED_MODULE_4__["OriginFlow"].BACKPACK] = function () { return _this.backpackNavigation(url); },
            _a);
        if (navigation[this.originFlow]) {
            return navigation[this.originFlow]();
        }
        this.navigatorProvider.navigateForward(url);
    };
    FormPage.prototype.profileNavigation = function (url) {
        this.sendAnalyticsAcceptDataTreatment();
        this.navigatorProvider.navigateBack(url);
    };
    FormPage.prototype.enrollNavigation = function (url) {
        this.navigatorProvider.navigateForward(url, {
            state: {
                phoneNumber: this.phoneNumber,
            },
        });
    };
    FormPage.prototype.getSuccessUrl = function () {
        var _a;
        return (_a = {},
            _a[_nequi_features_commons__WEBPACK_IMPORTED_MODULE_4__["OriginFlow"].ENROLL] = _form_config__WEBPACK_IMPORTED_MODULE_14__["FormConfig"].routes.token,
            _a[_nequi_features_commons__WEBPACK_IMPORTED_MODULE_4__["OriginFlow"].PROFILE] = _form_config__WEBPACK_IMPORTED_MODULE_14__["FormConfig"].routes.dashboard,
            _a[_nequi_features_commons__WEBPACK_IMPORTED_MODULE_4__["OriginFlow"].BACKPACK] = _form_config__WEBPACK_IMPORTED_MODULE_14__["FormConfig"].routes.dashboard,
            _a)[this.originFlow];
    };
    FormPage.prototype.setTemporalDataTreatment = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.registryLiteModel.dataTreatment = JSON.stringify(this.viewModel.buildRequest());
                        return [4 /*yield*/, this.applicationDataInteractor.save(_form_config__WEBPACK_IMPORTED_MODULE_14__["FormConfig"].data.userData, this.registryLiteModel.dataTreatment)];
                    case 1:
                        _a.sent();
                        this.successNavigation();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormPage.prototype.sendAnalyticsAcceptDataTreatment = function () {
        var analytics = _form_config__WEBPACK_IMPORTED_MODULE_14__["FormConfig"].analytics.acceptDataTreatment;
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["AnalyticsType"].CLEVERTAP,
            params: {
                eventName: analytics.name,
                eventProps: Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_13__["stringsArrayToObjectWithValues"])(analytics.params, [Object(_nequi_utils_date__WEBPACK_IMPORTED_MODULE_12__["getFormattedDateTimes"])()]),
            },
        });
    };
    FormPage.prototype.backpackNavigation = function (url) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var message;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.navigatorProvider.navigateRoot(url);
                        message = this.translateProvider.get(_form_config__WEBPACK_IMPORTED_MODULE_14__["FormConfig"].i18n.allReady);
                        return [4 /*yield*/, this.cardModalService.show({
                                title: message.title,
                                imgPath: message.image,
                                content: message.content,
                                buttons: [
                                    {
                                        text: message.buttons.ready,
                                    },
                                ],
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormPage.prototype.setProfileData = function () {
        if (this.data === null) {
            this.operationType = _nequi_features_data_treatment_core__WEBPACK_IMPORTED_MODULE_8__["OperationType"].CREATE;
            return;
        }
        this.viewModel.updateCheckboxValues(this.data);
    };
    FormPage.ɵfac = function FormPage_Factory(t) { return new (t || FormPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_4__["ORIGIN_FLOW"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_data_treatment_core__WEBPACK_IMPORTED_MODULE_8__["DataTreatmentInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["ParameterInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_10__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_10__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_lite_registry_data__WEBPACK_IMPORTED_MODULE_9__["RegistryLiteModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["AnalyticsInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_application_data_core__WEBPACK_IMPORTED_MODULE_3__["ApplicationDataInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_7__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui_services__WEBPACK_IMPORTED_MODULE_11__["CardModalService"])); };
    FormPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FormPage, selectors: [["app-form"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 19, vars: 14, consts: [[1, "nequi-header", "nequi-header--white"], ["slot", "start"], [3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], [1, "nequi-header__title", "ion-text-start"], ["scrollEvents", "true", "appAnimateTitleOnScroll", "", "appFormContentStyle", "", "fullscreen", "true", 1, "ion-content--enroll", "ion-padding-horizontal"], [1, "nequi-title"], [1, "description", 3, "innerHTML"], [3, "showReload", "reloadMessage", "onReload", 4, "ngIf"], [3, "formGroup", 4, "ngIf"], ["class", "description description__list", 3, "innerHTML", 4, "ngIf"], ["class", "nequi-footer", 4, "ngIf"], [3, "showReload", "reloadMessage", "onReload"], [3, "formGroup"], [1, "list"], ["lines", "none", "class", "list__item ion-no-padding", 4, "ngFor", "ngForOf"], ["lines", "none", 1, "list__item", "ion-no-padding"], ["slot", "end", 1, "filled-in", "payment__checkbox", 3, "formControl"], [1, "ion-text-wrap"], [1, "description", "description__list", 3, "innerHTML"], [1, "nequi-footer"], [1, "nequi-footer__toolbar"], ["expand", "block", "color", "guayaba", 1, "nequi-footer__button", 3, "disabled", "click"]], template: function FormPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormPage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-title", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-content", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-text", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "ion-text", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, FormPage_app_busy_indicator_14_Template, 1, 2, "app-busy-indicator", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, FormPage_form_15_Template, 3, 2, "form", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, FormPage_ion_text_16_Template, 2, 3, "ion-text", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, FormPage_ion_text_17_Template, 2, 3, "ion-text", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, FormPage_ion_footer_18_Template, 5, 4, "ion-footer", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 8, "data-treatment.form.title"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 10, "data-treatment.form.title"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 12, "data-treatment.form.description"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.viewModel.busyIndicator.show);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.viewModel.busyIndicator.show);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.viewModel.busyIndicator.show && ctx.showDisclaimer);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.viewModel.busyIndicator.show && ctx.showDisclaimer);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.viewModel.busyIndicator.show);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonContent"], _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_17__["AnimateTitleOnScrollDirective"], _ui_src_lib_directives_form_content_style_form_content_style_directive__WEBPACK_IMPORTED_MODULE_18__["FormContentStyleDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonText"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"], _ui_src_lib_components_busy_indicator_busy_indicator_component__WEBPACK_IMPORTED_MODULE_20__["BusyIndicatorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonCheckbox"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["BooleanValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormControlDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonFooter"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__["TranslatePipe"]], styles: [".description[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: var(--gray-70);\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 18.52px;\n}\n.description__list[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.description__footer[_ngcontent-%COMP%] {\n  padding: 0 16px;\n  padding-bottom: 9px;\n}\n.list__item[_ngcontent-%COMP%] {\n  --background: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvZm9ybS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUFDRjtBQUNFO0VBQ0UsbUJBQUE7QUFDSjtBQUVFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBQUo7QUFLRTtFQUNFLGtCQUFBO0FBRkoiLCJmaWxlIjoiZm9ybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVzY3JpcHRpb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiB2YXIoLS1ncmF5LTcwKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTguNTJweDtcblxuICAmX19saXN0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG5cbiAgJl9fZm9vdGVyIHtcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDlweDtcbiAgfVxufVxuXG4ubGlzdCB7XG4gICZfX2l0ZW0ge1xuICAgIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgfVxufVxuIl19 */"] });
    return FormPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_6__["FeatureBasePage"]));



/***/ }),

/***/ "Esq3":
/*!*************************************************************************************!*\
  !*** ./libs/features/data-treatment/src/presentation/pages/form/form.view-model.ts ***!
  \*************************************************************************************/
/*! exports provided: FormViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormViewModel", function() { return FormViewModel; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _nequi_features_data_treatment_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/features/data-treatment/core */ "v036");


var FormViewModel = /** @class */ (function () {
    function FormViewModel() {
        this.controls = [];
        this.busyIndicator = {
            show: false,
            error: '',
        };
    }
    FormViewModel.prototype.buildCheckboxes = function (items) {
        var _this = this;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({});
        items.forEach(function (item) {
            _this.createCheckbox({
                answer: true,
                id: item.id,
                text: item.text,
            });
        });
    };
    FormViewModel.prototype.updateCheckboxValues = function (data) {
        var _this = this;
        if ((data === null || data === void 0 ? void 0 : data.items.length) > 0) {
            data.items.forEach(function (ele) {
                if (_this.form.get(ele.id)) {
                    _this.form.get(ele.id).setValue(ele.answer);
                }
                else {
                    _this.createCheckbox(ele);
                }
            });
        }
    };
    FormViewModel.prototype.mapOptionValues = function () {
        var _this = this;
        this.controls.forEach(function (control) {
            control.answer = _this.form.get(control.id).value;
        });
    };
    FormViewModel.prototype.buildRequest = function (operationType) {
        return {
            items: this.controls.map(function (control) {
                return {
                    id: control.id,
                    answer: control.answer,
                    text: control.text,
                };
            }),
            flow: operationType || _nequi_features_data_treatment_core__WEBPACK_IMPORTED_MODULE_1__["OperationType"].CREATE,
        };
    };
    FormViewModel.prototype.createCheckbox = function (item) {
        var checkboxControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](item.answer, []);
        this.controls.push({
            id: item.id,
            text: item.text,
            answer: item.answer,
            control: checkboxControl,
        });
        this.form.addControl(item.id, checkboxControl);
    };
    return FormViewModel;
}());



/***/ }),

/***/ "H8gv":
/*!*************************************************************************************************!*\
  !*** ./libs/features/data-treatment/src/presentation/features-data-treatment-routing.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: FeaturesDataTreatmentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesDataTreatmentRoutingModule", function() { return FeaturesDataTreatmentRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "akKM");
/* harmony import */ var _middleware_information_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./middleware/information.middleware */ "pTv/");
/* harmony import */ var _middleware_user_data_middleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./middleware/user-data.middleware */ "hMLv");
/* harmony import */ var _pages_authorization_authorization_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/authorization/authorization.page */ "K7l9");
/* harmony import */ var _pages_form_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/form/form.page */ "0tE/");
/* harmony import */ var _pages_information_information_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/information/information.page */ "HEC9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");










var routes = [
    {
        path: '',
        component: _pages_information_information_page__WEBPACK_IMPORTED_MODULE_7__["InformationPage"],
        canActivate: [_middleware_information_middleware__WEBPACK_IMPORTED_MODULE_3__["InformationMiddleware"]],
    },
    {
        path: 'information',
        component: _pages_information_information_page__WEBPACK_IMPORTED_MODULE_7__["InformationPage"],
    },
    {
        path: 'authorization',
        component: _pages_authorization_authorization_page__WEBPACK_IMPORTED_MODULE_5__["AuthorizationPage"],
    },
    {
        path: 'form-data',
        component: _pages_form_form_page__WEBPACK_IMPORTED_MODULE_6__["FormPage"],
        canActivate: [_middleware_user_data_middleware__WEBPACK_IMPORTED_MODULE_4__["UserDataMiddleware"]],
    },
    {
        path: 'form',
        component: _pages_form_form_page__WEBPACK_IMPORTED_MODULE_6__["FormPage"],
    },
];
var FeaturesDataTreatmentRoutingModule = /** @class */ (function () {
    function FeaturesDataTreatmentRoutingModule() {
    }
    FeaturesDataTreatmentRoutingModule.ɵfac = function FeaturesDataTreatmentRoutingModule_Factory(t) { return new (t || FeaturesDataTreatmentRoutingModule)(); };
    FeaturesDataTreatmentRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: FeaturesDataTreatmentRoutingModule });
    FeaturesDataTreatmentRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(_nequi_features_commons__WEBPACK_IMPORTED_MODULE_1__["I18nModuleResolver"].setup(routes, [_config__WEBPACK_IMPORTED_MODULE_2__["DataTreatmentConfig"].i18n.moduleKey])),
            ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return FeaturesDataTreatmentRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](FeaturesDataTreatmentRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "HEC9":
/*!*********************************************************************************************!*\
  !*** ./libs/features/data-treatment/src/presentation/pages/information/information.page.ts ***!
  \*********************************************************************************************/
/*! exports provided: InformationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationPage", function() { return InformationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_utils_date__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/utils/date */ "tGfC");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _information_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./information.config */ "VheX");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../ui/src/lib/directives/animate-title-on-scroll/animate-title-on-scroll.directive */ "qbWi");
/* harmony import */ var _ui_src_lib_components_item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../ui/src/lib/components/item-detail/item-detail.component */ "Ycc7");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");




















function InformationPage_ion_button_3_Template(rf, ctx) { if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InformationPage_ion_button_3_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InformationPage_app_item_detail_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-item-detail", 12);
} if (rf & 2) {
    var item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", item_r4.icon)("title", item_r4.title)("description", item_r4.description);
} }
var InformationPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(InformationPage, _super);
    function InformationPage(injector, translateProvider, analyticsInteractor, router, originFlow, activatedRoute) {
        var _a, _b;
        var _this = _super.call(this, injector) || this;
        _this.translateProvider = translateProvider;
        _this.analyticsInteractor = analyticsInteractor;
        _this.router = router;
        _this.originFlow = originFlow;
        _this.activatedRoute = activatedRoute;
        _this.config = _information_config__WEBPACK_IMPORTED_MODULE_9__["InformationConfig"];
        _this.information = [];
        _this.phoneNumber = (_a = _this.router.getCurrentNavigation().extras.state) === null || _a === void 0 ? void 0 : _a.phoneNumber;
        _this.fromDeepLink = (_b = _this.router.getCurrentNavigation().extras.state) === null || _b === void 0 ? void 0 : _b.fromDeepLink;
        return _this;
    }
    Object.defineProperty(InformationPage.prototype, "showGoBack", {
        get: function () {
            return this.originFlow !== _nequi_features_commons__WEBPACK_IMPORTED_MODULE_3__["OriginFlow"].BACKPACK || this.fromDeepLink;
        },
        enumerable: false,
        configurable: true
    });
    InformationPage.prototype.ngOnInit = function () {
        this.loadContent();
    };
    InformationPage.prototype.nextPage = function () {
        if (this.originFlow === _nequi_features_commons__WEBPACK_IMPORTED_MODULE_3__["OriginFlow"].BACKPACK) {
            this.sendAnalyticsIntentionDataTreatment();
        }
        this.navigatorProvider.navigateForward([this.config.routes.authorization], {
            state: { phoneNumber: this.phoneNumber, fromDeepLink: this.fromDeepLink },
            relativeTo: this.activatedRoute,
        });
    };
    InformationPage.prototype.loadContent = function () {
        var i18nKey = this.config.i18n.content;
        if (this.originFlow === _nequi_features_commons__WEBPACK_IMPORTED_MODULE_3__["OriginFlow"].BACKPACK || this.originFlow === _nequi_features_commons__WEBPACK_IMPORTED_MODULE_3__["OriginFlow"].PROFILE) {
            i18nKey = this.config.i18n.contentLock;
        }
        this.information = this.translateProvider.get(i18nKey);
    };
    InformationPage.prototype.sendAnalyticsIntentionDataTreatment = function () {
        var analytics = this.config.analytics.intentionDataTreatment;
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["AnalyticsType"].CLEVERTAP,
            params: {
                eventName: analytics.name,
                eventProps: Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_8__["stringsArrayToObjectWithValues"])(analytics.params, [Object(_nequi_utils_date__WEBPACK_IMPORTED_MODULE_7__["getFormattedDateTimes"])()]),
            },
        });
    };
    InformationPage.ɵfac = function InformationPage_Factory(t) { return new (t || InformationPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_6__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["AnalyticsInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_3__["ORIGIN_FLOW"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
    InformationPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: InformationPage, selectors: [["app-information"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 17, vars: 11, consts: [[1, "nequi-header", "nequi-header--white"], ["slot", "start"], ["id", "contract_go-back_button", 3, "click", 4, "ngIf"], [1, "nequi-header__title", "ion-text-start"], ["scrollEvents", "true", "appAnimateTitleOnScroll", "", 1, "ion-content--enroll", "ion-padding-horizontal"], [1, "nequi-title"], [3, "icon", "title", "description", 4, "ngFor", "ngForOf"], [1, "nequi-footer"], [1, "nequi-footer__toolbar", "ion-text-center"], ["color", "guayaba", "shape", "round", "expand", "block", 1, "nequi-footer__button", 3, "click"], ["id", "contract_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], [3, "icon", "title", "description"]], template: function InformationPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, InformationPage_ion_button_3_Template, 2, 0, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-content", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-text", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, InformationPage_app_item_detail_11_Template, 1, 3, "app-item-detail", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-footer", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-toolbar", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InformationPage_Template_ion_button_click_14_listener() { return ctx.nextPage(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showGoBack);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 5, "data-treatment.information.title"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 7, "data-treatment.information.title"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.information);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 9, "data-treatment.information.button"), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonButtons"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonContent"], _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_12__["AnimateTitleOnScrollDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonText"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonIcon"], _ui_src_lib_components_item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_13__["ItemDetailComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslatePipe"]], styles: [".nequi-footer__link[_ngcontent-%COMP%] {\n  --link-text-color: var(--input-purple);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvaW5mb3JtYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0NBQUE7QUFDRiIsImZpbGUiOiJpbmZvcm1hdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmVxdWktZm9vdGVyX19saW5rIHtcbiAgLS1saW5rLXRleHQtY29sb3I6IHZhcigtLWlucHV0LXB1cnBsZSk7XG59XG4iXX0= */"] });
    return InformationPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__["FeatureBasePage"]));



/***/ }),

/***/ "K7l9":
/*!*************************************************************************************************!*\
  !*** ./libs/features/data-treatment/src/presentation/pages/authorization/authorization.page.ts ***!
  \*************************************************************************************************/
/*! exports provided: AuthorizationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizationPage", function() { return AuthorizationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _authorization_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authorization.config */ "KMPG");
/* harmony import */ var _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../ui/src/lib/directives/animate-title-on-scroll/animate-title-on-scroll.directive */ "qbWi");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ui_src_lib_components_busy_indicator_busy_indicator_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../ui/src/lib/components/busy-indicator/busy-indicator.component */ "N6nj");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ui_src_lib_pipes_trust_html_trust_html_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../ui/src/lib/pipes/trust-html/trust-html.pipe */ "FKD1");
















function AuthorizationPage_app_busy_indicator_12_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-busy-indicator", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onReload", function AuthorizationPage_app_busy_indicator_12_Template_app_busy_indicator_onReload_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.getTermsContent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showReload", ctx_r0.busyIndicator.error)("reloadMessage", ctx_r0.busyIndicator.error);
} }
function AuthorizationPage_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "trustHTML");
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx_r1.termsAndConditions), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function AuthorizationPage_ion_button_14_Template(rf, ctx) { if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AuthorizationPage_ion_button_14_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.acceptAgreement(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "data-treatment.authorization.button"), " ");
} }
function AuthorizationPage_ion_fab_15_ion_fab_button_1_Template(rf, ctx) { if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-fab-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AuthorizationPage_ion_fab_15_ion_fab_button_1_Template_ion_fab_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r9.scrollToBottom(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AuthorizationPage_ion_fab_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-fab", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AuthorizationPage_ion_fab_15_ion_fab_button_1_Template, 2, 0, "ion-fab-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.isScrollEnd);
} }
var AuthorizationPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AuthorizationPage, _super);
    function AuthorizationPage(injector, parameterInteractor, router, activatedRoute) {
        var _a, _b;
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.parameterInteractor = parameterInteractor;
        _this.router = router;
        _this.activatedRoute = activatedRoute;
        _this.isScrollEnd = false;
        _this.config = _authorization_config__WEBPACK_IMPORTED_MODULE_6__["AuthorizationConfig"];
        _this.busyIndicator = {
            show: false,
            error: '',
        };
        _this.phoneNumber = (_a = _this.router.getCurrentNavigation().extras.state) === null || _a === void 0 ? void 0 : _a.phoneNumber;
        _this.fromDeepLink = (_b = _this.router.getCurrentNavigation().extras.state) === null || _b === void 0 ? void 0 : _b.fromDeepLink;
        return _this;
    }
    AuthorizationPage.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getTermsContent()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthorizationPage.prototype.acceptAgreement = function () {
        this.goToForm();
    };
    AuthorizationPage.prototype.scrollToBottom = function () {
        this.content.scrollToBottom();
    };
    AuthorizationPage.prototype.handleScroll = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var element;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.content.getScrollElement()];
                    case 1:
                        element = _a.sent();
                        this.isScrollEnd =
                            Math.abs(element.scrollHeight - element.clientHeight - element.scrollTop) < 1;
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthorizationPage.prototype.getTermsContent = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        this.busyIndicator.show = true;
                        _a = this;
                        return [4 /*yield*/, this.parameterInteractor.getParameter(_authorization_config__WEBPACK_IMPORTED_MODULE_6__["AuthorizationConfig"].parameters.id)];
                    case 1:
                        _a.termsAndConditions = (_b.sent())
                            .filter(function (attribute) { return attribute.value === _authorization_config__WEBPACK_IMPORTED_MODULE_6__["AuthorizationConfig"].parameters.termsKey; })
                            .map(function (param) { return param.code; })
                            .reduce(function (param) { return param; });
                        this.busyIndicator.show = false;
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        this.busyIndicator.error = error_1;
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AuthorizationPage.prototype.goToForm = function () {
        this.navigatorProvider.navigateForward([this.config.routes.form], {
            state: { phoneNumber: this.phoneNumber, fromDeepLink: this.fromDeepLink },
            relativeTo: this.activatedRoute,
        });
    };
    AuthorizationPage.ɵfac = function AuthorizationPage_Factory(t) { return new (t || AuthorizationPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["ParameterInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
    AuthorizationPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AuthorizationPage, selectors: [["app-authorization"]], viewQuery: function AuthorizationPage_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], 1);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 16, vars: 10, consts: [[1, "nequi-header", "nequi-header--white"], ["id", "contract_header-title_label", 1, "nequi-header__title", "ion-text-start"], ["slot", "start"], ["id", "contract_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], ["fullscreen", "true", "scrollEvents", "true", "appAnimateTitleOnScroll", "", 1, "ion-content--enroll", "ion-content--white", "ion-padding-horizontal", "content", 3, "ionScroll"], ["id", "contract_title_label", 1, "nequi-title"], [3, "showReload", "reloadMessage", "onReload", 4, "ngIf"], ["class", "terms-content", 3, "innerHTML", 4, "ngIf"], ["class", "nequi-footer__button", "expand", "block", "color", "guayaba", 3, "click", 4, "ngIf"], ["slot", "fixed", "vertical", "bottom", "horizontal", "end", "class", "contract__buttons", 4, "ngIf"], [3, "showReload", "reloadMessage", "onReload"], [1, "terms-content", 3, "innerHTML"], ["expand", "block", "color", "guayaba", 1, "nequi-footer__button", 3, "click"], ["slot", "fixed", "vertical", "bottom", "horizontal", "end", 1, "contract__buttons"], ["color", "guayaba", "class", "contract__button-bottom", 3, "click", 4, "ngIf"], ["color", "guayaba", 1, "contract__button-bottom", 3, "click"], ["name", "arrow-down"]], template: function AuthorizationPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-text", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-buttons", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AuthorizationPage_Template_ion_button_click_6_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "ion-icon", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-content", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionScroll", function AuthorizationPage_Template_ion_content_ionScroll_8_listener() { return ctx.handleScroll(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-text", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AuthorizationPage_app_busy_indicator_12_Template, 1, 2, "app-busy-indicator", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, AuthorizationPage_p_13_Template, 2, 3, "p", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AuthorizationPage_ion_button_14_Template, 3, 3, "ion-button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, AuthorizationPage_ion_fab_15_Template, 2, 1, "ion-fab", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 6, "data-treatment.authorization.title"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 8, "data-treatment.authorization.title"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.busyIndicator.show);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.busyIndicator.show);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.busyIndicator.show);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.busyIndicator.show);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_7__["AnimateTitleOnScrollDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _ui_src_lib_components_busy_indicator_busy_indicator_component__WEBPACK_IMPORTED_MODULE_9__["BusyIndicatorComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonFabButton"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"], _ui_src_lib_pipes_trust_html_trust_html_pipe__WEBPACK_IMPORTED_MODULE_11__["TrustHTMLPipe"]], styles: [".nequi-title[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\n\n.nequi-header__title[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.terms-content[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  font-size: 14px;\n  line-height: 17px;\n  margin-bottom: 16px;\n  text-align: justify;\n}\n\n.nequi-footer__button[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n\n.contract__buttons[_ngcontent-%COMP%] {\n  right: 24px;\n  bottom: 24px;\n}\n\n.contract__button-bottom[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvYXV0aG9yaXphdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGIiwiZmlsZSI6ImF1dGhvcml6YXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5lcXVpLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4ubmVxdWktaGVhZGVyX190aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGVybXMtY29udGVudCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLm5lcXVpLWZvb3Rlcl9fYnV0dG9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cblxuLmNvbnRyYWN0X19idXR0b25zIHtcbiAgcmlnaHQ6IDI0cHg7XG4gIGJvdHRvbTogMjRweDtcbn1cblxuLmNvbnRyYWN0X19idXR0b24tYm90dG9tIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cbiJdfQ== */"] });
    return AuthorizationPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__["FeatureBasePage"]));



/***/ }),

/***/ "KMPG":
/*!***************************************************************************************************!*\
  !*** ./libs/features/data-treatment/src/presentation/pages/authorization/authorization.config.ts ***!
  \***************************************************************************************************/
/*! exports provided: AuthorizationConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizationConfig", function() { return AuthorizationConfig; });
var AuthorizationConfig = Object.freeze({
    routes: {
        form: '../form',
    },
    parameters: {
        id: '4001',
        termsKey: 'terms',
    },
});


/***/ }),

/***/ "MtSC":
/*!*********************************************************************************!*\
  !*** ./libs/features/data-treatment/src/presentation/pages/form/form.config.ts ***!
  \*********************************************************************************/
/*! exports provided: FormConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormConfig", function() { return FormConfig; });
var FormConfig = Object.freeze({
    i18n: {
        errorMessage: 'data-treatment.form.error-message',
        allReady: 'data-treatment.form.bottom-sheets.all-ready',
    },
    routes: {
        dashboard: '/admin/dashboard',
        token: '/auth/enroll/enroll-request',
    },
    parameters: {
        id: '4001',
        urlKey: 'url',
        termsKey: 'terms',
    },
    analytics: {
        acceptDataTreatment: {
            name: 'Autorizacion_TratamientoDatos',
            params: ['fecha'],
        },
    },
    data: {
        userData: 'userInfo.data-treatment',
    },
});


/***/ }),

/***/ "VheX":
/*!***********************************************************************************************!*\
  !*** ./libs/features/data-treatment/src/presentation/pages/information/information.config.ts ***!
  \***********************************************************************************************/
/*! exports provided: InformationConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationConfig", function() { return InformationConfig; });
var InformationConfig = Object.freeze({
    i18n: {
        content: 'data-treatment.information.content',
        contentLock: 'data-treatment.information-lock.content',
        cardModalLock: 'data-treatment.information.card-modal-lock',
    },
    routes: {
        authorization: '../authorization',
        information: '/admin/backpack/data-treatment/information',
        profileInformation: '/admin/profile/settings/security/data-treatment/information',
    },
    analytics: {
        intentionDataTreatment: {
            name: 'Intencion_TratamientoDatos',
            params: ['fecha'],
        },
    },
});


/***/ }),

/***/ "akKM":
/*!**********************************************************!*\
  !*** ./libs/features/data-treatment/src/config/index.ts ***!
  \**********************************************************/
/*! exports provided: DataTreatmentConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTreatmentConfig", function() { return DataTreatmentConfig; });
var DataTreatmentConfig = Object.freeze({
    i18n: {
        moduleKey: 'data-treatment',
    },
    applicationData: {},
    cache: {},
});


/***/ }),

/***/ "fJ9x":
/*!****************************************************************!*\
  !*** ./libs/features/data-treatment/src/presentation/index.ts ***!
  \****************************************************************/
/*! exports provided: FeaturesDataTreatmentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _features_data_treatment_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./features-data-treatment.module */ "vk63");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeaturesDataTreatmentModule", function() { return _features_data_treatment_module__WEBPACK_IMPORTED_MODULE_0__["FeaturesDataTreatmentModule"]; });




/***/ }),

/***/ "hMLv":
/*!******************************************************************************************!*\
  !*** ./libs/features/data-treatment/src/presentation/middleware/user-data.middleware.ts ***!
  \******************************************************************************************/
/*! exports provided: UserDataMiddleware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDataMiddleware", function() { return UserDataMiddleware; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_data_treatment_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/data-treatment/core */ "v036");
/* harmony import */ var _nequi_ui_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/ui/services */ "U66T");
/* harmony import */ var _pages_information_information_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/information/information.config */ "VheX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");











var UserDataMiddleware = /** @class */ (function () {
    function UserDataMiddleware(originFlow, dataTreatmentInteractor, navigatorProvider, router, activatedRoute, loadingService) {
        this.originFlow = originFlow;
        this.dataTreatmentInteractor = dataTreatmentInteractor;
        this.navigatorProvider = navigatorProvider;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.loadingService = loadingService;
    }
    UserDataMiddleware.prototype.canActivate = function (_route, _state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var state, data, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 7]);
                        state = this.router.getCurrentNavigation().extras.state;
                        this.phoneNumber = state === null || state === void 0 ? void 0 : state.phoneNumber;
                        this.fromDeepLink = state === null || state === void 0 ? void 0 : state.fromDeepLink;
                        if (!(this.originFlow === _nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__["OriginFlow"].PROFILE || this.originFlow === _nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__["OriginFlow"].BACKPACK)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.loadingService.show()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.dataTreatmentInteractor.getUserData()];
                    case 2:
                        data = _a.sent();
                        this.router.getCurrentNavigation().extras.state = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { data: data });
                        return [4 /*yield*/, this.loadingService.hide()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/, true];
                    case 5:
                        error_1 = _a.sent();
                        if (error_1.constructor.name === _nequi_features_data_treatment_core__WEBPACK_IMPORTED_MODULE_3__["NoDataException"].name) {
                            this.navigatorProvider.navigateForward([_pages_information_information_config__WEBPACK_IMPORTED_MODULE_5__["InformationConfig"].routes.profileInformation], {
                                state: { phoneNumber: this.phoneNumber, fromDeepLink: this.fromDeepLink, data: null },
                                relativeTo: this.activatedRoute,
                            });
                        }
                        return [4 /*yield*/, this.loadingService.hide()];
                    case 6:
                        _a.sent();
                        return [2 /*return*/, false];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    UserDataMiddleware.ɵfac = function UserDataMiddleware_Factory(t) { return new (t || UserDataMiddleware)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__["ORIGIN_FLOW"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_nequi_features_data_treatment_core__WEBPACK_IMPORTED_MODULE_3__["DataTreatmentInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__["NavigatorProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_nequi_ui_services__WEBPACK_IMPORTED_MODULE_4__["LoadingService"])); };
    UserDataMiddleware.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: UserDataMiddleware, factory: UserDataMiddleware.ɵfac });
    return UserDataMiddleware;
}());



/***/ }),

/***/ "pTv/":
/*!********************************************************************************************!*\
  !*** ./libs/features/data-treatment/src/presentation/middleware/information.middleware.ts ***!
  \********************************************************************************************/
/*! exports provided: InformationMiddleware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationMiddleware", function() { return InformationMiddleware; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_card_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/card/core */ "K3wr");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_data_treatment_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/data-treatment/config */ "akKM");
/* harmony import */ var _nequi_ui_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/ui/services */ "U66T");
/* harmony import */ var _pages_information_information_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/information/information.config */ "VheX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");










var InformationMiddleware = /** @class */ (function () {
    function InformationMiddleware(translateProvider, cardModalService, navigatorProvider, loadingService) {
        this.translateProvider = translateProvider;
        this.cardModalService = cardModalService;
        this.navigatorProvider = navigatorProvider;
        this.loadingService = loadingService;
    }
    InformationMiddleware.prototype.canActivate = function (_route, _state) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingService.hideWithoutFeedback()];
                    case 1:
                        _b.sent();
                        if (!((_a = _route.queryParams) === null || _a === void 0 ? void 0 : _a.fromDeepLink)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.showCardModal()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/, true];
                }
            });
        });
    };
    InformationMiddleware.prototype.showCardModal = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.translateProvider.loadModule(_nequi_features_data_treatment_config__WEBPACK_IMPORTED_MODULE_4__["DataTreatmentConfig"].i18n.moduleKey)];
                    case 1:
                        _a.sent();
                        messages = this.translateProvider.get(_pages_information_information_config__WEBPACK_IMPORTED_MODULE_6__["InformationConfig"].i18n.cardModalLock);
                        this.cardModalService.show({
                            title: messages.title,
                            content: messages.content,
                            imgPath: messages.image,
                            buttons: [
                                {
                                    text: messages.buttons.accept,
                                    handler: function () {
                                        _this.navigatorProvider.navigateForward([_pages_information_information_config__WEBPACK_IMPORTED_MODULE_6__["InformationConfig"].routes.information], {
                                            state: { fromDeepLink: true },
                                        });
                                    },
                                },
                                {
                                    text: messages.buttons.cancel,
                                    color: _nequi_features_card_core__WEBPACK_IMPORTED_MODULE_2__["Color"].MEDIANOCHE,
                                },
                            ],
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    InformationMiddleware.ɵfac = function InformationMiddleware_Factory(t) { return new (t || InformationMiddleware)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_3__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_nequi_ui_services__WEBPACK_IMPORTED_MODULE_5__["CardModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_3__["NavigatorProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_nequi_ui_services__WEBPACK_IMPORTED_MODULE_5__["LoadingService"])); };
    InformationMiddleware.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: InformationMiddleware, factory: InformationMiddleware.ɵfac });
    return InformationMiddleware;
}());



/***/ }),

/***/ "vk63":
/*!*****************************************************************************************!*\
  !*** ./libs/features/data-treatment/src/presentation/features-data-treatment.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: FeaturesDataTreatmentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesDataTreatmentModule", function() { return FeaturesDataTreatmentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_data_treatment_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/data-treatment/core */ "v036");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../config */ "akKM");
/* harmony import */ var _features_data_treatment_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./features-data-treatment-routing.module */ "H8gv");
/* harmony import */ var _middleware_information_middleware__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./middleware/information.middleware */ "pTv/");
/* harmony import */ var _middleware_user_data_middleware__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./middleware/user-data.middleware */ "hMLv");
/* harmony import */ var _pages_authorization_authorization_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/authorization/authorization.page */ "K7l9");
/* harmony import */ var _pages_form_form_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/form/form.page */ "0tE/");
/* harmony import */ var _pages_information_information_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/information/information.page */ "HEC9");

















var FeaturesDataTreatmentModule = /** @class */ (function () {
    function FeaturesDataTreatmentModule() {
    }
    FeaturesDataTreatmentModule.withConfig = function (config) {
        return {
            ngModule: FeaturesDataTreatmentModule,
            providers: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])([{ provide: _nequi_features_commons__WEBPACK_IMPORTED_MODULE_5__["ORIGIN_FLOW"], useValue: _nequi_features_commons__WEBPACK_IMPORTED_MODULE_5__["OriginFlow"].ENROLL }], config),
        };
    };
    FeaturesDataTreatmentModule.ɵfac = function FeaturesDataTreatmentModule_Factory(t) { return new (t || FeaturesDataTreatmentModule)(); };
    FeaturesDataTreatmentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: FeaturesDataTreatmentModule });
    FeaturesDataTreatmentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [
            {
                provide: _nequi_features_data_treatment_core__WEBPACK_IMPORTED_MODULE_6__["DataTreatmentInteractor"],
                deps: [_nequi_features_data_treatment_core__WEBPACK_IMPORTED_MODULE_6__["DataTreatmentRepository"]],
                useClass: _nequi_features_data_treatment_core__WEBPACK_IMPORTED_MODULE_6__["DataTreatmentInteractor"],
            },
            {
                provide: _nequi_features_commons__WEBPACK_IMPORTED_MODULE_5__["ModuleConfigProvider"],
                useValue: _config__WEBPACK_IMPORTED_MODULE_9__["DataTreatmentConfig"],
            },
            _middleware_information_middleware__WEBPACK_IMPORTED_MODULE_11__["InformationMiddleware"],
            _middleware_user_data_middleware__WEBPACK_IMPORTED_MODULE_12__["UserDataMiddleware"],
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _nequi_ui__WEBPACK_IMPORTED_MODULE_7__["NequiUiModule"],
                _features_data_treatment_routing_module__WEBPACK_IMPORTED_MODULE_10__["FeaturesDataTreatmentRoutingModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
            ]] });
    return FeaturesDataTreatmentModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FeaturesDataTreatmentModule, { declarations: [_pages_form_form_page__WEBPACK_IMPORTED_MODULE_14__["FormPage"], _pages_information_information_page__WEBPACK_IMPORTED_MODULE_15__["InformationPage"], _pages_authorization_authorization_page__WEBPACK_IMPORTED_MODULE_13__["AuthorizationPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _nequi_ui__WEBPACK_IMPORTED_MODULE_7__["NequiUiModule"],
        _features_data_treatment_routing_module__WEBPACK_IMPORTED_MODULE_10__["FeaturesDataTreatmentRoutingModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=nequi-features-data-treatment-presentation.js.map