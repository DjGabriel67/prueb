(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nequi-features-remittances-presentation"],{

/***/ "7Z67":
/*!********************************************************************************!*\
  !*** ./libs/features/remittances/src/presentation/pages/terms/terms.config.ts ***!
  \********************************************************************************/
/*! exports provided: TermsConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsConfig", function() { return TermsConfig; });
var TermsConfig = Object.freeze({
    i18n: {
        successReceiveRemittances: 'remittances.modals.success-receive-remittances',
        errorReceiveRemittances: 'remittances.modals.error-receive-remittances',
        bottomSheetTitle: 'remittances.terms-and-conditions.bottomsheet.title',
        pinChallengeMessage: 'remittances.terms-and-conditions.pin-challenge',
    },
    routes: {
        currentUrl: 'admin/remittances/terms',
        home: 'admin/dashboard',
    },
    analytics: {
        events: {
            successReceiveRemittances: {
                name: 'Remesa_Usuario_inscripcion_abono',
                params: {
                    cleverTap: ['Fecha_inscripción'],
                },
            },
        },
    },
});


/***/ }),

/***/ "B077":
/*!******************************************************************************!*\
  !*** ./libs/features/remittances/src/presentation/pages/form/form.config.ts ***!
  \******************************************************************************/
/*! exports provided: RemittancesConfigInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemittancesConfigInfo", function() { return RemittancesConfigInfo; });
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/features/profile/presentation */ "cLcF");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _form_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form.module */ "xa+O");
var _a;




var RemittancesConfigInfo = Object.freeze({
    i18n: {
        addressText: '{0} - {1}',
        receiveRemittanes: 'remittances.modals.accept-receive-remittances',
        declineRemittances: 'remittances.modals.decline-receive-remittances',
        controlListError: 'remittances.errors.control-list',
    },
    routes: {
        help: 'https://ayuda.nequi.com.co/hc/es/articles/360042937371',
        currentUrl: 'admin/remittances/form',
        termAndCondition: 'admin/remittances/terms',
        home: 'admin/dashboard',
    },
    analytics: {
        events: {
            intentionOfReceive: {
                name: 'Remesa_Usuario_intencion_inscripcion',
                params: {
                    cleverTap: ['Fecha_intencion'],
                },
            },
            declineRemittances: {
                name: 'Remesa_rechazo_voluntario',
                params: {
                    cleverTap: ['Fecha_rechazo'],
                },
            },
        },
    },
    addressText: '{0} - {1}',
    moduleList: [
        _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_0__["ModuleCode"].BARCODE_INFORMATION,
        _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_0__["ModuleCode"].LOCATION,
        _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_0__["ModuleCode"].OCCUPATION,
        _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_0__["ModuleCode"].INCOME_EXPENSES,
    ],
    navOrder: (_a = {},
        _a[_nequi_ui__WEBPACK_IMPORTED_MODULE_2__["NavButtonCardStatus"].COMPLETED] = 1,
        _a[_nequi_ui__WEBPACK_IMPORTED_MODULE_2__["NavButtonCardStatus"].ACTIVE] = 2,
        _a[_nequi_ui__WEBPACK_IMPORTED_MODULE_2__["NavButtonCardStatus"].INACTIVE] = 3,
        _a),
    navButtons: [
        {
            id: _form_module__WEBPACK_IMPORTED_MODULE_3__["RemittancesModule"].YOUR_DOCUMENT,
            leftImage: 'assets/images/profile/my-info/happy-face.svg',
            title: 'remittances.form.my-info.nav-buttons.my-document.title',
            description: 'remittances.form.my-info.nav-buttons.my-document.description',
            link: 'admin/remittances/profile/my-info/document-guide',
            status: _nequi_ui__WEBPACK_IMPORTED_MODULE_2__["NavButtonCardStatus"].INACTIVE,
            config: {
                sourceFlow: _nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_1__["SourceFlow"].BREAK_CEILING,
            },
        },
        {
            id: _form_module__WEBPACK_IMPORTED_MODULE_3__["RemittancesModule"].WHERE_YOU_LIVE,
            leftImage: 'assets/images/profile/my-info/home.svg',
            title: 'remittances.form.my-info.nav-buttons.your-address.title',
            description: 'remittances.form.my-info.nav-buttons.your-address.description',
            link: 'admin/remittances/profile/my-info/address',
            status: _nequi_ui__WEBPACK_IMPORTED_MODULE_2__["NavButtonCardStatus"].INACTIVE,
        },
        {
            id: _form_module__WEBPACK_IMPORTED_MODULE_3__["RemittancesModule"].WHAT_DO_YOU_DO,
            leftImage: 'assets/images/profile/my-info/work.svg',
            title: 'remittances.form.my-info.nav-buttons.your-work.title',
            description: 'remittances.form.my-info.nav-buttons.your-work.description',
            link: 'admin/remittances/profile/my-info/occupation',
            status: _nequi_ui__WEBPACK_IMPORTED_MODULE_2__["NavButtonCardStatus"].INACTIVE,
        },
        {
            id: _form_module__WEBPACK_IMPORTED_MODULE_3__["RemittancesModule"].YOUR_MONEY,
            leftImage: 'assets/images/propeller/money.svg',
            title: 'remittances.form.my-info.nav-buttons.your-money.title',
            description: 'remittances.form.my-info.nav-buttons.your-money.description',
            link: 'admin/remittances/profile/account/income-and-expenses',
            status: _nequi_ui__WEBPACK_IMPORTED_MODULE_2__["NavButtonCardStatus"].INACTIVE,
        },
    ],
});


/***/ }),

/***/ "LptJ":
/*!*******************************************************************************************!*\
  !*** ./libs/features/remittances/src/presentation/features-remittances-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: FeaturesRemittancesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesRemittancesRoutingModule", function() { return FeaturesRemittancesRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _config_remittances_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/remittances.config */ "sz4k");
/* harmony import */ var _pages_form_form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/form/form.page */ "WzX9");
/* harmony import */ var _pages_terms_terms_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/terms/terms.page */ "z+J3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







var routes = [
    {
        path: 'form',
        component: _pages_form_form_page__WEBPACK_IMPORTED_MODULE_3__["FormPage"],
    },
    {
        path: 'terms',
        component: _pages_terms_terms_page__WEBPACK_IMPORTED_MODULE_4__["TermsPage"],
    },
    {
        path: 'profile',
        loadChildren: function () {
            return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @nequi/features/profile/presentation */ "cLcF")).then(function (m) { return m.FeaturesProfileModule; });
        },
    },
];
var FeaturesRemittancesRoutingModule = /** @class */ (function () {
    function FeaturesRemittancesRoutingModule() {
    }
    FeaturesRemittancesRoutingModule.ɵfac = function FeaturesRemittancesRoutingModule_Factory(t) { return new (t || FeaturesRemittancesRoutingModule)(); };
    FeaturesRemittancesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: FeaturesRemittancesRoutingModule });
    FeaturesRemittancesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(_nequi_features_commons__WEBPACK_IMPORTED_MODULE_1__["I18nModuleResolver"].setup(routes, [_config_remittances_config__WEBPACK_IMPORTED_MODULE_2__["RemittancesConfig"].i18n.moduleKey])),
            ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return FeaturesRemittancesRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](FeaturesRemittancesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "UJPx":
/*!*************************************************************!*\
  !*** ./libs/features/remittances/src/presentation/index.ts ***!
  \*************************************************************/
/*! exports provided: FeaturesRemittancesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _features_remittances_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./features-remittances.module */ "c55b");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeaturesRemittancesModule", function() { return _features_remittances_module__WEBPACK_IMPORTED_MODULE_0__["FeaturesRemittancesModule"]; });




/***/ }),

/***/ "WzX9":
/*!****************************************************************************!*\
  !*** ./libs/features/remittances/src/presentation/pages/form/form.page.ts ***!
  \****************************************************************************/
/*! exports provided: FormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPage", function() { return FormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_features_profile_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/profile/core */ "w8sc");
/* harmony import */ var _nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/profile/presentation */ "cLcF");
/* harmony import */ var _nequi_features_remittances_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/features/remittances/core */ "Hs6i");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_date__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nequi/utils/date */ "tGfC");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _form_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./form.config */ "B077");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _profile_src_presentation_organisms_module_list_module_list_organism__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../profile/src/presentation/organisms/module-list/module-list.organism */ "RZDl");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");






















var _c0 = ["nequiRemittancesModuleList"];
var FormPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FormPage, _super);
    function FormPage(injector, translateProvider, moduleConfigProvider, moduleInfoInteractor, loggerInteractor, toastService, cardModalService, alertService, loadingService, occupationService, analyticsInteractor) {
        var _this = _super.call(this, injector) || this;
        _this.translateProvider = translateProvider;
        _this.moduleConfigProvider = moduleConfigProvider;
        _this.moduleInfoInteractor = moduleInfoInteractor;
        _this.loggerInteractor = loggerInteractor;
        _this.toastService = toastService;
        _this.cardModalService = cardModalService;
        _this.alertService = alertService;
        _this.loadingService = loadingService;
        _this.occupationService = occupationService;
        _this.analyticsInteractor = analyticsInteractor;
        _this.config = _form_config__WEBPACK_IMPORTED_MODULE_11__["RemittancesConfigInfo"];
        _this.isFormIncomplete = true;
        _this.translateProvider.loadModule(_this.moduleConfigProvider.i18n.moduleKey);
        return _this;
    }
    FormPage.prototype.onCompletedRequestData = function (modules) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.isFormIncomplete = false;
                this.moduleListData = modules;
                this.locationData = this.moduleListOrganism.getModuleData(this.moduleListData, _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["ModuleCode"].LOCATION);
                this.occupationData = this.moduleListOrganism.getModuleData(this.moduleListData, _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["ModuleCode"].OCCUPATION);
                this.incomeAndExpensesData = this.moduleListOrganism.getModuleData(this.moduleListData, _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["ModuleCode"].INCOME_EXPENSES);
                return [2 /*return*/];
            });
        });
    };
    FormPage.prototype.openHelpOption = function () {
        this.openExternalUrl(this.config.routes.help);
    };
    FormPage.prototype.goToTerms = function () {
        this.validateSarlaft();
    };
    FormPage.prototype.showRemittancesModalDecline = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modalCancel;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        modalCancel = this.translateProvider.get(this.config.i18n.declineRemittances);
                        return [4 /*yield*/, this.cardModalService.show({
                                title: modalCancel.title,
                                imgPath: modalCancel.image,
                                content: modalCancel.content,
                                buttons: [
                                    {
                                        text: modalCancel.buttons.accept,
                                        handler: function () {
                                            _this.navigatorProvider.navigateForward(_this.config.routes.currentUrl);
                                        },
                                    },
                                    {
                                        color: _nequi_ui__WEBPACK_IMPORTED_MODULE_8__["ModalButtonColor"].MIDNIGHT,
                                        text: modalCancel.buttons.cancel,
                                        handler: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                                this.setAnalyticsDeclineRemittances();
                                                this.navigatorProvider.navigateRoot(this.config.routes.home);
                                                return [2 /*return*/];
                                            });
                                        }); },
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
    FormPage.prototype.showReceiveRemittancesModal = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modalAccept;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        modalAccept = this.translateProvider.get(this.config.i18n.receiveRemittanes);
                        return [4 /*yield*/, this.cardModalService.show({
                                title: modalAccept.title,
                                imgPath: modalAccept.image,
                                content: modalAccept.content,
                                buttons: [
                                    {
                                        text: modalAccept.buttons.accept,
                                        handler: function () {
                                            _this.navigatorProvider.navigateForward(_this.config.routes.currentUrl);
                                        },
                                    },
                                    {
                                        color: _nequi_ui__WEBPACK_IMPORTED_MODULE_8__["ModalButtonColor"].MIDNIGHT,
                                        text: modalAccept.buttons.cancel,
                                        handler: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                                this.showRemittancesModalDecline();
                                                return [2 /*return*/];
                                            });
                                        }); },
                                    },
                                ],
                            })];
                    case 1:
                        _a.sent();
                        this.setAnalyticsIntentionReceive();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormPage.prototype.markAsCompleteModule = function (module) {
        switch (module.type) {
            case _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["ModuleCode"].BARCODE_INFORMATION:
                this.documentCompleteHandler(module.data);
                break;
            case _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["ModuleCode"].LOCATION:
                this.locationCompletedHandler(module.data);
                break;
            case _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["ModuleCode"].OCCUPATION:
                this.occupationCompletedHandler(module.data);
                break;
            case _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["ModuleCode"].INCOME_EXPENSES:
                this.yourIncomeCompleteHandler(module.data);
                break;
        }
    };
    FormPage.prototype.validateSarlaft = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var occupationCode, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_o) {
                switch (_o.label) {
                    case 0:
                        occupationCode = ((_b = (_a = this.occupationData) === null || _a === void 0 ? void 0 : _a.ciiuCode) === null || _b === void 0 ? void 0 : _b.key) ? (_d = (_c = this.occupationData) === null || _c === void 0 ? void 0 : _c.ciiuCode) === null || _d === void 0 ? void 0 : _d.key : (_f = (_e = this.occupationData) === null || _e === void 0 ? void 0 : _e.occupation) === null || _f === void 0 ? void 0 : _f.name.toUpperCase();
                        _o.label = 1;
                    case 1:
                        _o.trys.push([1, 5, , 7]);
                        return [4 /*yield*/, this.loadingService.show()];
                    case 2:
                        _o.sent();
                        return [4 /*yield*/, this.moduleInfoInteractor.calculateClientRisk({
                                cityCode: (_h = (_g = this.locationData) === null || _g === void 0 ? void 0 : _g.city) === null || _h === void 0 ? void 0 : _h.code,
                                countryCode: (_j = this.locationData.country) === null || _j === void 0 ? void 0 : _j.isoCode,
                                incomes: (_m = (_l = (_k = this.incomeAndExpensesData) === null || _k === void 0 ? void 0 : _k.incomeExpenses) === null || _l === void 0 ? void 0 : _l.income) === null || _m === void 0 ? void 0 : _m.max,
                                occupationCode: occupationCode,
                            })];
                    case 3:
                        _o.sent();
                        return [4 /*yield*/, this.loadingService.hideWithoutFeedback()];
                    case 4:
                        _o.sent();
                        this.navigatorProvider.navigateForward(this.config.routes.termAndCondition);
                        return [3 /*break*/, 7];
                    case 5:
                        error_1 = _o.sent();
                        return [4 /*yield*/, this.loadingService.hideWithoutFeedback()];
                    case 6:
                        _o.sent();
                        this.manageErrors(error_1);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    FormPage.prototype.manageErrors = function (error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var balanceErrors;
            var _a;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        balanceErrors = (_a = {},
                            _a[_nequi_features_profile_core__WEBPACK_IMPORTED_MODULE_5__["LockedInSarlaftException"].name] = function () { return _this.showSarlaftAlert(); },
                            _a);
                        if (error.code === _nequi_features_remittances_core__WEBPACK_IMPORTED_MODULE_7__["ErrorCode"].UNDERWEIGHT_SARLAFT) {
                            this.showSarlaftAlert();
                            return [2 /*return*/];
                        }
                        if (balanceErrors[error.constructor.name]) {
                            return [2 /*return*/, balanceErrors[error.constructor.name]()];
                        }
                        return [4 /*yield*/, this.toastService.showError(error.message)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormPage.prototype.setAnalyticsDeclineRemittances = function () {
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["AnalyticsType"].CLEVERTAP,
            params: {
                eventName: this.config.analytics.events.declineRemittances.name,
                eventProps: Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_10__["stringsArrayToObjectWithValues"])(this.config.analytics.events.declineRemittances.params.cleverTap, [Object(_nequi_utils_date__WEBPACK_IMPORTED_MODULE_9__["getFormattedDateTimes"])()]),
            },
        });
    };
    FormPage.prototype.setAnalyticsIntentionReceive = function () {
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["AnalyticsType"].FACEBOOK,
            params: {
                eventName: this.config.analytics.events.intentionOfReceive.name,
            },
        });
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["AnalyticsType"].FIREBASE,
            params: { eventName: this.config.analytics.events.intentionOfReceive.name },
        });
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["AnalyticsType"].CLEVERTAP,
            params: {
                eventName: this.config.analytics.events.intentionOfReceive.name,
                eventProps: Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_10__["stringsArrayToObjectWithValues"])(this.config.analytics.events.intentionOfReceive.params.cleverTap, [Object(_nequi_utils_date__WEBPACK_IMPORTED_MODULE_9__["getFormattedDateTimes"])()]),
            },
        });
    };
    FormPage.prototype.documentCompleteHandler = function (document) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var error_2;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.moduleInfoInteractor.saveModuleInfo({
                                code: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["ModuleCode"].BARCODE_INFORMATION,
                                data: { key: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["ModuleName"].BARCODE_INFORMATION, value: document },
                                formId: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["FormId"].REMITTANCES,
                            })];
                    case 1:
                        _a.sent();
                        this.moduleListOrganism.finish();
                        return [3 /*break*/, 4];
                    case 2:
                        error_2 = _a.sent();
                        this.loggerInteractor.error(error_2);
                        return [4 /*yield*/, this.toastService.showError(error_2.message)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    FormPage.prototype.locationCompletedHandler = function (location) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var error_3;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.moduleInfoInteractor.saveModuleInfo({
                                code: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["ModuleCode"].LOCATION,
                                data: { key: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["ModuleName"].LOCATION, value: location },
                                formId: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["FormId"].REMITTANCES,
                            })];
                    case 1:
                        _a.sent();
                        this.moduleListOrganism.finish();
                        return [3 /*break*/, 4];
                    case 2:
                        error_3 = _a.sent();
                        this.loggerInteractor.error(error_3);
                        return [4 /*yield*/, this.toastService.showError(error_3.message)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    FormPage.prototype.occupationCompletedHandler = function (occupation) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var error_4;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        occupation = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, occupation), { formId: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["FormId"].REMITTANCES });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 5]);
                        return [4 /*yield*/, this.moduleInfoInteractor.saveModuleInfo({
                                code: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["ModuleCode"].OCCUPATION,
                                data: { key: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["ModuleName"].OCCUPATION, value: occupation },
                                formId: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["FormId"].REMITTANCES,
                            })];
                    case 2:
                        _a.sent();
                        this.moduleListOrganism.finish();
                        return [3 /*break*/, 5];
                    case 3:
                        error_4 = _a.sent();
                        this.loggerInteractor.error(error_4);
                        return [4 /*yield*/, this.loadingService.hideWithoutFeedback()];
                    case 4:
                        _a.sent();
                        this.occupationService.processErrors(error_4, occupation);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    FormPage.prototype.yourIncomeCompleteHandler = function (incomeAndExpenses) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var error_5;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.moduleInfoInteractor.saveModuleInfo({
                                code: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["ModuleCode"].INCOME_EXPENSES,
                                data: { key: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["ModuleName"].INCOME_EXPENSES, value: incomeAndExpenses },
                                formId: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["FormId"].REMITTANCES,
                            })];
                    case 1:
                        _a.sent();
                        this.moduleListOrganism.finish();
                        this.isFormIncomplete = false;
                        return [3 /*break*/, 4];
                    case 2:
                        error_5 = _a.sent();
                        this.loggerInteractor.error(error_5);
                        return [4 /*yield*/, this.toastService.showError(error_5.message)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    FormPage.prototype.showSarlaftAlert = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertService.showByI18n({
                            i18nKey: this.config.i18n.controlListError,
                            handlers: {
                                accept: function () {
                                    _this.navigatorProvider.navigateRoot(_this.config.routes.home);
                                },
                            },
                            backdropDismiss: false,
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormPage.prototype.openExternalUrl = function (url) {
        Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_10__["openUrl"])(url);
    };
    FormPage.ɵfac = function FormPage_Factory(t) { return new (t || FormPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_4__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_4__["ModuleConfigProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_profile_core__WEBPACK_IMPORTED_MODULE_5__["ModuleInfoInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["LoggerInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_8__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_8__["CardModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_8__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_6__["OccupationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["AnalyticsInteractor"])); };
    FormPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FormPage, selectors: [["nequi-remittances"]], viewQuery: function FormPage_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.moduleListOrganism = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 19, vars: 12, consts: [[1, "nequi-header"], ["slot", "start"], ["id", "remittances-form_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], ["slot", "end"], ["id", "remittances-form_help_button", 3, "click"], ["slot", "icon-only", "name", "help-outline"], [1, "ion-content--enroll", "ion-padding-horizontal"], [1, "nequi-title"], ["organismId", "remittances-form", 3, "items", "moduleList", "navOrder", "addressFormat", "currentUrl", "completed", "completedRequestData"], ["nequiRemittancesModuleList", ""], [1, "nequi-footer", "nequi-footer--padding-vertical-24"], [1, "nequi-footer__toolbar"], ["id", "form_complete_remittances", "shape", "round", "color", "guayaba", "expand", "block", 1, "margin-vertical-16", 3, "disabled", "click"]], template: function FormPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormPage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-buttons", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormPage_Template_ion_button_click_6_listener() { return ctx.openHelpOption(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "ion-icon", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-content", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-text", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "nequi-profile-module-list", 9, 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("completed", function FormPage_Template_nequi_profile_module_list_completed_12_listener($event) { return ctx.markAsCompleteModule($event); })("completedRequestData", function FormPage_Template_nequi_profile_module_list_completedRequestData_12_listener($event) { return ctx.onCompletedRequestData($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-footer", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-toolbar", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormPage_Template_ion_button_click_16_listener() { return ctx.goToTerms(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 8, "remittances.form.title"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.config.navButtons)("moduleList", ctx.config.moduleList)("navOrder", ctx.config.navOrder)("addressFormat", ctx.config.i18n.addressText)("currentUrl", ctx.config.routes.currentUrl);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isFormIncomplete);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 10, "remittances.form.footer-button"), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonText"], _profile_src_presentation_organisms_module_list_module_list_organism__WEBPACK_IMPORTED_MODULE_13__["ModuleListOrganism"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonFooter"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslatePipe"]], encapsulation: 2 });
    return FormPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__["FeatureBasePage"]));



/***/ }),

/***/ "c55b":
/*!***********************************************************************************!*\
  !*** ./libs/features/remittances/src/presentation/features-remittances.module.ts ***!
  \***********************************************************************************/
/*! exports provided: FeaturesRemittancesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesRemittancesModule", function() { return FeaturesRemittancesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/profile/presentation */ "cLcF");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _config_remittances_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config/remittances.config */ "sz4k");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core */ "Hs6i");
/* harmony import */ var _components_bottomsheet_bottomsheet_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/bottomsheet/bottomsheet.component */ "s7CU");
/* harmony import */ var _features_remittances_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./features-remittances-routing.module */ "LptJ");
/* harmony import */ var _pages_form_form_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/form/form.page */ "WzX9");
/* harmony import */ var _pages_terms_terms_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/terms/terms.page */ "z+J3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");













var FeaturesRemittancesModule = /** @class */ (function () {
    function FeaturesRemittancesModule() {
    }
    FeaturesRemittancesModule.ɵfac = function FeaturesRemittancesModule_Factory(t) { return new (t || FeaturesRemittancesModule)(); };
    FeaturesRemittancesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: FeaturesRemittancesModule });
    FeaturesRemittancesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [
            {
                provide: _core__WEBPACK_IMPORTED_MODULE_7__["RemittancesInteractor"],
                deps: [_core__WEBPACK_IMPORTED_MODULE_7__["RemittancesRepository"]],
                useClass: _core__WEBPACK_IMPORTED_MODULE_7__["RemittancesInteractor"],
            },
            {
                provide: _nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__["ModuleConfigProvider"],
                useValue: _config_remittances_config__WEBPACK_IMPORTED_MODULE_6__["RemittancesConfig"],
            },
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"],
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
                _nequi_ui__WEBPACK_IMPORTED_MODULE_4__["NequiComponentsModule"],
                _features_remittances_routing_module__WEBPACK_IMPORTED_MODULE_9__["FeaturesRemittancesRoutingModule"],
                _nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_3__["FeaturesProfileModule"],
                _nequi_ui__WEBPACK_IMPORTED_MODULE_4__["NequiUiModule"],
            ]] });
    return FeaturesRemittancesModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](FeaturesRemittancesModule, { declarations: [_pages_form_form_page__WEBPACK_IMPORTED_MODULE_10__["FormPage"], _pages_terms_terms_page__WEBPACK_IMPORTED_MODULE_11__["TermsPage"], _components_bottomsheet_bottomsheet_component__WEBPACK_IMPORTED_MODULE_8__["BottomsheetComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
        _nequi_ui__WEBPACK_IMPORTED_MODULE_4__["NequiComponentsModule"],
        _features_remittances_routing_module__WEBPACK_IMPORTED_MODULE_9__["FeaturesRemittancesRoutingModule"],
        _nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_3__["FeaturesProfileModule"],
        _nequi_ui__WEBPACK_IMPORTED_MODULE_4__["NequiUiModule"]] }); })();


/***/ }),

/***/ "s7CU":
/*!****************************************************************************************************!*\
  !*** ./libs/features/remittances/src/presentation/components/bottomsheet/bottomsheet.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: BottomsheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomsheetComponent", function() { return BottomsheetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _nequi_features_remittances_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/features/remittances/core */ "Hs6i");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ui_src_lib_components_busy_indicator_busy_indicator_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../ui/src/lib/components/busy-indicator/busy-indicator.component */ "N6nj");









function BottomsheetComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "app-busy-indicator", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("showReloadChange", function BottomsheetComponent_div_9_Template_app_busy_indicator_showReloadChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return !!(ctx_r2.reloadError = $event); })("onReload", function BottomsheetComponent_div_9_Template_app_busy_indicator_onReload_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.reload(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("showReload", !!ctx_r0.reloadError)("reloadMessage", ctx_r0.reloadError);
} }
function BottomsheetComponent_ion_list_10_ion_item_1_Template(rf, ctx) { if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BottomsheetComponent_ion_list_10_ion_item_1_Template_ion_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); var item_r6 = ctx.$implicit; var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r8.selectItem(item_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r6.value, " ");
} }
function BottomsheetComponent_ion_list_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-list", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BottomsheetComponent_ion_list_10_ion_item_1_Template, 3, 1, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.remittancesList);
} }
var BottomsheetComponent = /** @class */ (function () {
    function BottomsheetComponent(bottomSheetController, remittancesInteractor) {
        this.bottomSheetController = bottomSheetController;
        this.remittancesInteractor = remittancesInteractor;
    }
    BottomsheetComponent.prototype.ngOnInit = function () {
        this.getNumeralChanges();
    };
    BottomsheetComponent.prototype.hide = function () {
        this.bottomSheetController.dismiss();
    };
    BottomsheetComponent.prototype.reload = function () {
        this.reloadError = '';
        this.getNumeralChanges();
    };
    BottomsheetComponent.prototype.selectItem = function (item) {
        this.bottomSheetController.dismiss({
            exchangeNumber: item.code,
        });
    };
    BottomsheetComponent.prototype.getNumeralChanges = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        this.isLoading = true;
                        _a = this;
                        return [4 /*yield*/, this.remittancesInteractor.getRemittanceExchangeNumbers()];
                    case 1:
                        _a.remittancesList = _b.sent();
                        this.isLoading = false;
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        this.isLoading = false;
                        this.reloadError = error_1.message;
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    BottomsheetComponent.ɵfac = function BottomsheetComponent_Factory(t) { return new (t || BottomsheetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_2__["BottomSheetController"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nequi_features_remittances_core__WEBPACK_IMPORTED_MODULE_1__["RemittancesInteractor"])); };
    BottomsheetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: BottomsheetComponent, selectors: [["app-bottomsheet"]], inputs: { title: "title" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([
                {
                    provide: _nequi_features_remittances_core__WEBPACK_IMPORTED_MODULE_1__["RemittancesInteractor"],
                    deps: [_nequi_features_remittances_core__WEBPACK_IMPORTED_MODULE_1__["RemittancesRepository"]],
                    useClass: _nequi_features_remittances_core__WEBPACK_IMPORTED_MODULE_1__["RemittancesInteractor"],
                },
            ])], decls: 11, vars: 3, consts: [[1, "ion-page"], [1, "nequi-header", "nequi-header"], [1, "dynamic-list__toolbar"], ["slot", "end"], ["id", "nav-bottom-sheet_back_button", 3, "click"], ["slot", "icon-only", "name", "close-outline"], [1, "remittances-list__title"], ["fullscreen", "", 1, "content", "ion-padding-horizontal"], ["style", "min-height: 150px", 4, "ngIf"], ["class", "remittances-list", 4, "ngIf"], [2, "min-height", "150px"], [1, "remittances-list__busy-indicator", 3, "showReload", "reloadMessage", "showReloadChange", "onReload"], [1, "remittances-list"], ["class", "ion-no-padding remittances-list__item", 3, "click", 4, "ngFor", "ngForOf"], [1, "ion-no-padding", "remittances-list__item", 3, "click"], [1, "ion-text-wrap", "remittances-list__label"]], template: function BottomsheetComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-header", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-toolbar", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ion-buttons", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BottomsheetComponent_Template_ion_button_click_4_listener() { return ctx.hide(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "ion-icon", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h2", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-content", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, BottomsheetComponent_div_9_Template, 2, 2, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, BottomsheetComponent_ion_list_10_Template, 2, 1, "ion-list", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading || ctx.reloadError);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ui_src_lib_components_busy_indicator_busy_indicator_component__WEBPACK_IMPORTED_MODULE_6__["BusyIndicatorComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"]], styles: [".content[_ngcontent-%COMP%] {\n  --background: var(--transparent);\n  -webkit-padding-start: var(--ion-padding, 8px);\n  padding-inline-start: var(--ion-padding, 8px);\n  -webkit-padding-end: var(--ion-padding, 8px);\n  padding-inline-end: var(--ion-padding, 8px);\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.remittances-list[_ngcontent-%COMP%] {\n  background: none;\n  margin: 8px 9px 0 9px;\n  overflow-y: auto;\n}\n\n.remittances-list__title[_ngcontent-%COMP%] {\n  padding: 0 24px;\n  font-weight: 600;\n  color: var(--medianoche);\n}\n\n.remittances-list__label[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n  font-size: 1rem;\n}\n\n.remittances-list__busy-indicator[_ngcontent-%COMP%] {\n  --bottom: 14vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvYm90dG9tc2hlZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsNkNBQUE7RUFDQSw0Q0FBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBRUUsZ0JBQUE7RUFDQSxxQkFBQTtFQUVBLGdCQUFBO0FBREY7O0FBR0U7RUFDRSxlQVBRO0VBUVIsZ0JBQUE7RUFDQSx3QkFBQTtBQURKOztBQUlFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFGSjs7QUFLRTtFQUNFLGNBQUE7QUFISiIsImZpbGUiOiJib3R0b21zaGVldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XG4gIC13ZWJraXQtcGFkZGluZy1zdGFydDogdmFyKC0taW9uLXBhZGRpbmcsIDhweCk7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZywgOHB4KTtcbiAgLXdlYmtpdC1wYWRkaW5nLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDhweCk7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDhweCk7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxuLnJlbWl0dGFuY2VzLWxpc3Qge1xuICAkcGFkZGluZzogMCAyNHB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBtYXJnaW46IDhweCA5cHggMCA5cHg7XG5cbiAgb3ZlcmZsb3cteTogYXV0bztcblxuICAmX190aXRsZSB7XG4gICAgcGFkZGluZzogJHBhZGRpbmc7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogdmFyKC0tbWVkaWFub2NoZSk7XG4gIH1cblxuICAmX19sYWJlbCB7XG4gICAgbWFyZ2luOiAxcmVtIDA7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG5cbiAgJl9fYnVzeS1pbmRpY2F0b3Ige1xuICAgIC0tYm90dG9tOiAxNHZoO1xuICB9XG59XG4iXX0= */"] });
    return BottomsheetComponent;
}());



/***/ }),

/***/ "sz4k":
/*!********************************************************************!*\
  !*** ./libs/features/remittances/src/config/remittances.config.ts ***!
  \********************************************************************/
/*! exports provided: RemittancesConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemittancesConfig", function() { return RemittancesConfig; });
var RemittancesConfig = Object.freeze({
    i18n: {
        moduleKey: 'remittances',
    },
    applicationData: {},
    cache: {},
});


/***/ }),

/***/ "xa+O":
/*!******************************************************************************!*\
  !*** ./libs/features/remittances/src/presentation/pages/form/form.module.ts ***!
  \******************************************************************************/
/*! exports provided: RemittancesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemittancesModule", function() { return RemittancesModule; });
var RemittancesModule;
(function (RemittancesModule) {
    RemittancesModule["YOUR_DOCUMENT"] = "yourDocument";
    RemittancesModule["WHERE_YOU_LIVE"] = "whereYouLive";
    RemittancesModule["WHAT_DO_YOU_DO"] = "whatDoYouDo";
    RemittancesModule["YOUR_MONEY"] = "yourMoney";
})(RemittancesModule || (RemittancesModule = {}));


/***/ }),

/***/ "z+J3":
/*!******************************************************************************!*\
  !*** ./libs/features/remittances/src/presentation/pages/terms/terms.page.ts ***!
  \******************************************************************************/
/*! exports provided: TermsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsPage", function() { return TermsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_remittances_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/remittances/core */ "Hs6i");
/* harmony import */ var _nequi_features_security_auth_presentation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/security/auth/presentation */ "hHau");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_date__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/utils/date */ "tGfC");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _components_bottomsheet_bottomsheet_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/bottomsheet/bottomsheet.component */ "s7CU");
/* harmony import */ var _terms_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./terms.config */ "7Z67");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../ui/src/lib/directives/animate-title-on-scroll/animate-title-on-scroll.directive */ "qbWi");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");





















var TERMS_AND_CONDITION_STATUS = 'ACCEPT';
var TermsPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TermsPage, _super);
    function TermsPage(injector, moduleConfigProvider, cardModalService, analyticsInteractor, remittancesInteractor, translateProvider, loadingService, pinChallengeModalService, bottomSheetController) {
        var _this = _super.call(this, injector) || this;
        _this.moduleConfigProvider = moduleConfigProvider;
        _this.cardModalService = cardModalService;
        _this.analyticsInteractor = analyticsInteractor;
        _this.remittancesInteractor = remittancesInteractor;
        _this.translateProvider = translateProvider;
        _this.loadingService = loadingService;
        _this.pinChallengeModalService = pinChallengeModalService;
        _this.bottomSheetController = bottomSheetController;
        _this.config = _terms_config__WEBPACK_IMPORTED_MODULE_11__["TermsConfig"];
        _this.translateProvider.loadModule(_this.moduleConfigProvider.i18n.moduleKey);
        return _this;
    }
    TermsPage.prototype.remittancesModalSuccess = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modalSuccess;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        modalSuccess = this.translateProvider.get(this.config.i18n.successReceiveRemittances);
                        return [4 /*yield*/, this.cardModalService.show({
                                title: modalSuccess.title,
                                imgPath: modalSuccess.image,
                                content: modalSuccess.content,
                                buttons: [
                                    {
                                        text: modalSuccess.button,
                                        handler: function () {
                                            _this.navigatorProvider.navigateRoot(_this.config.routes.home);
                                        },
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
    TermsPage.prototype.remittancesModalError = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modalError;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        modalError = this.translateProvider.get(this.config.i18n.errorReceiveRemittances);
                        return [4 /*yield*/, this.cardModalService.show({
                                title: modalError.title,
                                imgPath: modalError.image,
                                content: modalError.content,
                                buttons: [
                                    {
                                        text: modalError.button,
                                        handler: function () {
                                            _this.navigatorProvider.navigateRoot(_this.config.routes.home);
                                        },
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
    TermsPage.prototype.goToNumeralChanges = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.showBottomSheet();
                return [2 /*return*/];
            });
        });
    };
    TermsPage.prototype.showBottomSheet = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var bottomSheet, data;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bottomSheetController.create({
                            component: _components_bottomsheet_bottomsheet_component__WEBPACK_IMPORTED_MODULE_10__["BottomsheetComponent"],
                            isAutoHeight: true,
                            componentProps: {
                                title: this.translateProvider.get(this.config.i18n.bottomSheetTitle),
                            },
                        })];
                    case 1:
                        bottomSheet = _a.sent();
                        return [4 /*yield*/, bottomSheet.open()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, bottomSheet.onDidDismiss()];
                    case 3:
                        data = (_a.sent()).data;
                        if (data) {
                            this.enrollUserToReceiveRemitances(data.exchangeNumber);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TermsPage.prototype.enrollUserToReceiveRemitances = function (exchangeNumber) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var pinChallengeMessage, isValid, params, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pinChallengeMessage = this.translateProvider.get(this.config.i18n.pinChallengeMessage);
                        return [4 /*yield*/, this.pinChallengeModalService.show(pinChallengeMessage)];
                    case 1:
                        isValid = _a.sent();
                        params = {
                            exchangeNumber: exchangeNumber,
                            termsAndConditionStatus: TERMS_AND_CONDITION_STATUS,
                        };
                        if (!isValid) {
                            return [2 /*return*/];
                        }
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 6, , 8]);
                        return [4 /*yield*/, this.loadingService.show()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.remittancesInteractor.receiveRemittances(params)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.loadingService.hideWithoutFeedback()];
                    case 5:
                        _a.sent();
                        this.setAnalyticsSucessReceive();
                        this.remittancesModalSuccess();
                        return [3 /*break*/, 8];
                    case 6:
                        error_1 = _a.sent();
                        return [4 /*yield*/, this.loadingService.hideWithoutFeedback()];
                    case 7:
                        _a.sent();
                        this.remittancesModalError();
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    TermsPage.prototype.setAnalyticsSucessReceive = function () {
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__["AnalyticsType"].FACEBOOK,
            params: {
                eventName: this.config.analytics.events.successReceiveRemittances.name,
            },
        });
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__["AnalyticsType"].FIREBASE,
            params: { eventName: this.config.analytics.events.successReceiveRemittances.name },
        });
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__["AnalyticsType"].CLEVERTAP,
            params: {
                eventName: this.config.analytics.events.successReceiveRemittances.name,
                eventProps: Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_9__["stringsArrayToObjectWithValues"])(this.config.analytics.events.successReceiveRemittances.params.cleverTap, [Object(_nequi_utils_date__WEBPACK_IMPORTED_MODULE_8__["getFormattedDateTimes"])()]),
            },
        });
    };
    TermsPage.ɵfac = function TermsPage_Factory(t) { return new (t || TermsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__["ModuleConfigProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_7__["CardModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__["AnalyticsInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_remittances_core__WEBPACK_IMPORTED_MODULE_5__["RemittancesInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_7__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_security_auth_presentation__WEBPACK_IMPORTED_MODULE_6__["PinChallengeModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_7__["BottomSheetController"])); };
    TermsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TermsPage, selectors: [["nequi-remittances-terms"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 49, vars: 39, consts: [[1, "nequi-header", "nequi-header--white"], ["slot", "start"], ["id", "form_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], [1, "nequi-header__title", "ion-text-start"], ["fullscreen", "true", "scrollEvents", "true", "appAnimateTitleOnScroll", "", 1, "ion-content--enroll", "ion-padding-horizontal"], [1, "nequi-title"], [1, "terms__content"], [1, "terms__img", 3, "src"], [1, "nequi-title", "terms", "rate__title"], [1, "terms__line"], [1, "terms", "trust__img", 3, "src"], [1, "nequi-title", "terms", "trust__title"], [1, "terms", "automatic-subscription__img", 3, "src"], [1, "nequi-footer", "nequi-footer--padding-vertical-24"], [1, "nequi-footer__toolbar"], ["id", "accept_terms_remittances", "color", "guayaba", "shape", "round", "expand", "block", 1, "margin-vertical-16", 3, "click"]], template: function TermsPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermsPage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "ion-img", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-text", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "hr", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "ion-img", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ion-text", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](30, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](33, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "hr", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "ion-img", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](37, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "ion-text", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](40, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](43, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "ion-footer", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "ion-toolbar", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "ion-button", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermsPage_Template_ion_button_click_46_listener() { return ctx.goToNumeralChanges(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](48, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 13, "remittances.terms-and-conditions.title"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 15, "remittances.terms-and-conditions.title"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 17, "remittances.terms-and-conditions.subtitle"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 19, "remittances.terms-and-conditions.current-rate.image"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 21, "remittances.terms-and-conditions.current-rate.title"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 23, "remittances.terms-and-conditions.current-rate.content"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](27, 25, "remittances.terms-and-conditions.trust.image"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](30, 27, "remittances.terms-and-conditions.trust.title"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](33, 29, "remittances.terms-and-conditions.trust.content"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](37, 31, "remittances.terms-and-conditions.automatic-subscription.image"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](40, 33, "remittances.terms-and-conditions.automatic-subscription.title"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](43, 35, "remittances.terms-and-conditions.automatic-subscription.content"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](48, 37, "remittances.terms-and-conditions.footer-button"), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonContent"], _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_13__["AnimateTitleOnScrollDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonImg"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonFooter"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslatePipe"]], styles: [".terms.rate__title[_ngcontent-%COMP%] {\n  font-size: 19px;\n  margin-left: 15px;\n  font-weight: 600;\n}\n.terms.trust__title[_ngcontent-%COMP%] {\n  font-size: 19px;\n  margin-left: 15px;\n  font-weight: 600;\n  margin-top: 22px;\n}\n.terms.trust__img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 70px;\n}\n.terms__line[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n}\n.terms__content[_ngcontent-%COMP%] {\n  display: flex;\n}\n.terms__img[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 90px;\n}\n.automatic-subscription__img[_ngcontent-%COMP%] {\n  width: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvdGVybXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFETjtBQU1JO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUpOO0FBT0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUxOO0FBU0U7RUFDRSx3Q0FBQTtBQVBKO0FBVUU7RUFDRSxhQUFBO0FBUko7QUFXRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBVEo7QUFhQTtFQUNFLFdBQUE7QUFWRiIsImZpbGUiOiJ0ZXJtcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVybXMge1xuICAmLnJhdGUge1xuICAgICZfX3RpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG4gIH1cblxuICAmLnRydXN0IHtcbiAgICAmX190aXRsZSB7XG4gICAgICBmb250LXNpemU6IDE5cHg7XG4gICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBtYXJnaW4tdG9wOiAyMnB4O1xuICAgIH1cblxuICAgICZfX2ltZyB7XG4gICAgICB3aWR0aDogNDBweDtcbiAgICAgIGhlaWdodDogNzBweDtcbiAgICB9XG4gIH1cblxuICAmX19saW5lIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB9XG5cbiAgJl9fY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuXG4gICZfX2ltZyB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA5MHB4O1xuICB9XG59XG5cbi5hdXRvbWF0aWMtc3Vic2NyaXB0aW9uX19pbWcge1xuICB3aWR0aDogMzBweDtcbn1cbiJdfQ== */"] });
    return TermsPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_4__["FeatureBasePage"]));



/***/ })

}]);
//# sourceMappingURL=nequi-features-remittances-presentation.js.map