(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~products-lifeguard-lifeguard-module~products-lifeguard-recharged-lifeguard-recharged-module~~2ffa56f8"],{

/***/ "/RGA":
/*!***************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/organisms/approval-front/services/your-money-engine.service.ts ***!
  \***************************************************************************************************************/
/*! exports provided: YourMoneyEngineService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YourMoneyEngineService", function() { return YourMoneyEngineService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



var YourMoneyEngineService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(YourMoneyEngineService, _super);
    function YourMoneyEngineService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    YourMoneyEngineService.ɵfac = function YourMoneyEngineService_Factory(t) { return ɵYourMoneyEngineService_BaseFactory(t || YourMoneyEngineService); };
    YourMoneyEngineService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: YourMoneyEngineService, factory: YourMoneyEngineService.ɵfac });
    return YourMoneyEngineService;
}(_nequi_features_commons__WEBPACK_IMPORTED_MODULE_1__["ObservableBaseService"]));

var ɵYourMoneyEngineService_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](YourMoneyEngineService);


/***/ }),

/***/ "1lxh":
/*!****************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/organisms/approval-front/approval-front.organism.ts ***!
  \****************************************************************************************************/
/*! exports provided: ApprovalFrontOrganism */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovalFrontOrganism", function() { return ApprovalFrontOrganism; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/credits/core */ "42wy");
/* harmony import */ var _nequi_features_profile_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/profile/core */ "w8sc");
/* harmony import */ var _nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/features/profile/presentation */ "cLcF");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_date__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nequi/utils/date */ "tGfC");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _nequi_utils_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nequi/utils/string */ "p6rB");
/* harmony import */ var _services_credit_info_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/credit-info.model */ "9FmH");
/* harmony import */ var _approval_front_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./approval-front.config */ "53R8");
/* harmony import */ var _approval_front_view_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./approval-front.view-model */ "pwQe");
/* harmony import */ var _constants_approval_front_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./constants/approval-front-module */ "3T9V");
/* harmony import */ var _services_approval_front_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/approval-front.service */ "Pxf4");
/* harmony import */ var _services_occupation_engine_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/occupation-engine.service */ "hY4E");
/* harmony import */ var _services_your_money_engine_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/your-money-engine.service */ "/RGA");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ui_src_lib_components_nav_button_card_nav_button_card_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../../ui/src/lib/components/nav-button-card/nav-button-card.component */ "gDHj");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");




































function ApprovalFrontOrganism_nequi_nav_button_card_12_Template(rf, ctx) { if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nequi-nav-button-card", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("clicked", function ApprovalFrontOrganism_nequi_nav_button_card_12_Template_nequi_nav_button_card_clicked_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); var item_r1 = ctx.$implicit; var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.goTo(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "approval-front-engine_item-", item_r1.id, "_nav-button-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("leftImage", item_r1.leftImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 5, item_r1.title))("description", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 7, item_r1.description))("status", item_r1.status);
} }
var ApprovalFrontOrganism = /** @class */ (function () {
    function ApprovalFrontOrganism(creditInteractor, viewModel, creditInfoModel, userInfoProvider, loadingService, loggerInteractor, navigatorProvider, documentScanService, occupationEngineService, yourMoneyEngineService, documentScanInteractor, toastService, cardModalService, approvalFrontService, analyticsInteractor, moduleInfoInteractor, alertService, dynatraceService, sessionProvider) {
        this.creditInteractor = creditInteractor;
        this.viewModel = viewModel;
        this.creditInfoModel = creditInfoModel;
        this.userInfoProvider = userInfoProvider;
        this.loadingService = loadingService;
        this.loggerInteractor = loggerInteractor;
        this.navigatorProvider = navigatorProvider;
        this.documentScanService = documentScanService;
        this.occupationEngineService = occupationEngineService;
        this.yourMoneyEngineService = yourMoneyEngineService;
        this.documentScanInteractor = documentScanInteractor;
        this.toastService = toastService;
        this.cardModalService = cardModalService;
        this.approvalFrontService = approvalFrontService;
        this.analyticsInteractor = analyticsInteractor;
        this.moduleInfoInteractor = moduleInfoInteractor;
        this.alertService = alertService;
        this.dynatraceService = dynatraceService;
        this.sessionProvider = sessionProvider;
        this.nextButtonCliked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.goBackCliked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.completed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.config = _approval_front_config__WEBPACK_IMPORTED_MODULE_13__["ApprovalFrontConfig"];
        this.factoryException = {};
        this.i18n = null;
    }
    ApprovalFrontOrganism.prototype.ngOnInit = function () {
        this.i18n = Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_10__["toCamelCaseProperties"])(this.messages);
        this.setExceptionFactory();
        this.getModules();
        this.setAnalyticsIntentionOfBegin();
    };
    ApprovalFrontOrganism.prototype.ngOnDestroy = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dynatraceService.setAnalyticsOfEnd()];
                    case 1:
                        _a.sent();
                        this.documentScanService.unsubscribe();
                        this.occupationEngineService.unsubscribe();
                        this.yourMoneyEngineService.unsubscribe();
                        return [2 /*return*/];
                }
            });
        });
    };
    ApprovalFrontOrganism.prototype.goTo = function (item) {
        switch (item.id) {
            case _constants_approval_front_module__WEBPACK_IMPORTED_MODULE_15__["ApprovalFrontModule"].YOUR_DOCUMENT:
                this.subscribeToDocumentScan(item);
                break;
            case _constants_approval_front_module__WEBPACK_IMPORTED_MODULE_15__["ApprovalFrontModule"].WHAT_DO_YOU_DO:
                this.subscribeToOccupation(item);
                break;
            case _constants_approval_front_module__WEBPACK_IMPORTED_MODULE_15__["ApprovalFrontModule"].YOUR_MONEY:
                this.subscribeToYourMoney(item);
                break;
        }
    };
    ApprovalFrontOrganism.prototype.onValidateEngine = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var term, installments, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        _j.trys.push([0, 5, , 10]);
                        return [4 /*yield*/, this.loadingService.show()];
                    case 1:
                        _j.sent();
                        this.viewModel.info.isFromApproval = true;
                        this.viewModel.info.attempt.isCallService = false;
                        term = (_c = (_b = (_a = this.creditInfoModel) === null || _a === void 0 ? void 0 : _a.creditFeatureInfo) === null || _b === void 0 ? void 0 : _b.installment) !== null && _c !== void 0 ? _c : null;
                        return [4 /*yield*/, this.creditInteractor.getApprovalFront({
                                creditType: _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["CreditType"].PROPELLER,
                                term: (_d = this.viewModel.info.currentInstallment.value) !== null && _d !== void 0 ? _d : term,
                                amount: (_h = (_g = (_f = (_e = this.creditInfoModel) === null || _e === void 0 ? void 0 : _e.customerCreditInfo) === null || _f === void 0 ? void 0 : _f.preapproved) === null || _g === void 0 ? void 0 : _g.maxAmount) !== null && _h !== void 0 ? _h : null,
                            })];
                    case 2:
                        installments = (_j.sent());
                        return [4 /*yield*/, this.setEngineInstallments(installments)];
                    case 3:
                        _j.sent();
                        return [4 /*yield*/, this.loadingService.hide(true)];
                    case 4:
                        _j.sent();
                        this.onSuccesEmit();
                        return [3 /*break*/, 10];
                    case 5:
                        error_1 = _j.sent();
                        return [4 /*yield*/, this.loadingService.hideWithoutFeedback()];
                    case 6:
                        _j.sent();
                        if (!(error_1 === null || error_1 === void 0 ? void 0 : error_1.data)) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.setEngineInstallments(error_1.data)];
                    case 7:
                        _j.sent();
                        _j.label = 8;
                    case 8: return [4 /*yield*/, this.onFailGetApprovalFront(error_1)];
                    case 9:
                        _j.sent();
                        return [3 /*break*/, 10];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    ApprovalFrontOrganism.prototype.goBack = function () {
        this.goBackCliked.emit();
    };
    ApprovalFrontOrganism.prototype.goToHelp = function () {
        Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_10__["openUrl"])(this.config.routes.help);
    };
    ApprovalFrontOrganism.prototype.finish = function () {
        this.getModules();
        this.navigatorProvider.navigateRoot(this.config.routes.currentUrl);
    };
    ApprovalFrontOrganism.prototype.onSuccesEmit = function (error) {
        this.setAnalyticsIntentionOfSucces(error);
        this.approvalFrontService.emit(true);
        this.nextButtonCliked.emit();
    };
    ApprovalFrontOrganism.prototype.setEngineInstallments = function (installmentList) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (Array.isArray(installmentList) && (installmentList === null || installmentList === void 0 ? void 0 : installmentList.length)) {
                    this.viewModel.info.installmentList = installmentList;
                }
                return [2 /*return*/];
            });
        });
    };
    ApprovalFrontOrganism.prototype.onFailGetApprovalFront = function (error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.factoryException[error.constructor.name]) {
                            this.viewModel.info.attempt.error = error;
                            this.factoryException[error.constructor.name](error);
                            return [2 /*return*/];
                        }
                        this.dynatraceService.setCustomError(error);
                        return [4 /*yield*/, this.toastService.showError(error.message)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ApprovalFrontOrganism.prototype.getModules = function () {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _b, data, error_2;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 5, , 7]);
                        return [4 /*yield*/, this.loadingService.show()];
                    case 1:
                        _c.sent();
                        _b = this.viewModel.modules;
                        return [4 /*yield*/, this.onValidateDocumentScanned()];
                    case 2:
                        _b.documentScan = _c.sent();
                        return [4 /*yield*/, this.creditInteractor.getModules()];
                    case 3:
                        data = _c.sent();
                        return [4 /*yield*/, this.viewModel.loadModules(data)];
                    case 4:
                        _c.sent();
                        return [3 /*break*/, 7];
                    case 5:
                        error_2 = _c.sent();
                        return [4 /*yield*/, this.viewModel.loadModules((_a = error_2 === null || error_2 === void 0 ? void 0 : error_2.data) !== null && _a !== void 0 ? _a : [])];
                    case 6:
                        _c.sent();
                        return [3 /*break*/, 7];
                    case 7: return [4 /*yield*/, this.loadingService.hideWithoutFeedback()];
                    case 8:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ApprovalFrontOrganism.prototype.subscribeToDocumentScan = function (item) {
        this.documentScanService.unsubscribe();
        this.documentScanService.configModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ type: this.userInfoProvider.getDocument().type, phoneNumber: this.userInfoProvider.getPhoneNumber() }, item.config);
        this.documentScanService.subscribe(this.onDocumentScanCompleted.bind(this));
        this.navigatorProvider.navigateForward([item.link], {
            state: this.viewModel.modules.barcodeInfo,
        });
    };
    ApprovalFrontOrganism.prototype.subscribeToOccupation = function (item) {
        this.occupationEngineService.unsubscribe();
        this.occupationEngineService.subscribe(this.onOccupationCompleted.bind(this));
        this.navigatorProvider.navigateForward([item.link], {
            state: this.viewModel.modules.occupationData,
        });
    };
    ApprovalFrontOrganism.prototype.subscribeToYourMoney = function (item) {
        this.yourMoneyEngineService.unsubscribe();
        this.yourMoneyEngineService.subscribe(this.onYourMoneyCompleted.bind(this));
        var canShowAdditionalIncomesField = this.showAdditionalIncomes();
        this.navigatorProvider.navigateForward([item.link], {
            state: {
                yourMoneyData: this.viewModel.modules.yourMoneyData,
                canShowAdditionalIncomesField: canShowAdditionalIncomesField,
            },
        });
    };
    ApprovalFrontOrganism.prototype.showAdditionalIncomes = function () {
        return !(this.viewModel.modules.occupationData.occupation.code ===
            this.config.additionalIncomes.retired ||
            this.viewModel.modules.occupationData.occupation.code ===
                this.config.additionalIncomes.independent);
    };
    ApprovalFrontOrganism.prototype.onDocumentScanCompleted = function (response) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var error_3;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingService.show()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        this.viewModel.modules.documentScan.data = response.data;
                        this.viewModel.modules.barcodeInfo = response.barcodeInfo;
                        this.documentScanService.configModule = null;
                        return [4 /*yield*/, this.moduleInfoInteractor.saveModuleInfo({
                                code: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["ModuleCode"].BARCODE_INFORMATION,
                                data: { key: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["ModuleName"].BARCODE_INFORMATION, value: this.viewModel.modules.barcodeInfo },
                            })];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        error_3 = _a.sent();
                        this.loggerInteractor.error(error_3);
                        return [3 /*break*/, 5];
                    case 5: return [4 /*yield*/, this.loadingService.hideWithoutFeedback()];
                    case 6:
                        _a.sent();
                        this.completed.emit({
                            moduleId: _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["ModuleCodeEngine"].BARCODE_INFORMATION,
                            value: this.viewModel.modules.barcodeInfo,
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ApprovalFrontOrganism.prototype.onOccupationCompleted = function (occupation) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var occupationValue, error_4, message;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingService.show()];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 4, , 5]);
                        occupation.sinceDate =
                            typeof occupation.sinceDate === 'object'
                                ? occupation.sinceDate
                                : Object(_nequi_utils_date__WEBPACK_IMPORTED_MODULE_9__["transformDateFromString"])(occupation.sinceDate, _nequi_utils_date__WEBPACK_IMPORTED_MODULE_9__["DateFormat"].YYYY_MM_DD_HH_MM_SS);
                        occupationValue = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ sinceDate: occupation.sinceDate.toISOString() }, occupation);
                        this.viewModel.modules.occupationData = occupation;
                        return [4 /*yield*/, this.creditInteractor.saveCustomerInfo({
                                moduleId: _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["ModuleCodeEngine"].OCCUPATION,
                                value: occupationValue,
                            })];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        error_4 = _b.sent();
                        message = "(" + ((_a = occupation.occupation) === null || _a === void 0 ? void 0 : _a.name) + ") " + (error_4 === null || error_4 === void 0 ? void 0 : error_4.message);
                        if (this.saveCustomerInfoFail(error_4, message)) {
                            return [2 /*return*/];
                        }
                        return [3 /*break*/, 5];
                    case 5: return [4 /*yield*/, this.loadingService.hideWithoutFeedback()];
                    case 6:
                        _b.sent();
                        this.completed.emit({
                            moduleId: _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["ModuleCodeEngine"].OCCUPATION,
                            value: occupationValue,
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ApprovalFrontOrganism.prototype.onYourMoneyCompleted = function (yourMoney) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var error_5;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingService.show()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        this.viewModel.modules.yourMoneyData = yourMoney;
                        return [4 /*yield*/, this.creditInteractor.saveCustomerInfo({
                                moduleId: _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["ModuleCodeEngine"].INCOME_EXPENSES,
                                value: this.viewModel.modules.yourMoneyData,
                            })];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        error_5 = _a.sent();
                        if (this.saveCustomerInfoFail(error_5)) {
                            return [2 /*return*/];
                        }
                        return [3 /*break*/, 5];
                    case 5: return [4 /*yield*/, this.loadingService.hideWithoutFeedback()];
                    case 6:
                        _a.sent();
                        this.completed.emit({
                            moduleId: _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["ModuleCodeEngine"].INCOME_EXPENSES,
                            value: this.viewModel.modules.yourMoneyData,
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ApprovalFrontOrganism.prototype.onValidateDocumentScanned = function () {
        var _a, _b, _c;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var documentStatus, error_6;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 2, , 3]);
                        if (this.viewModel.modules.documentScan ||
                            (((_a = this.viewModel.modules.documentScan) === null || _a === void 0 ? void 0 : _a.error) &&
                                ((_c = (_b = this.viewModel.modules.documentScan) === null || _b === void 0 ? void 0 : _b.error) === null || _c === void 0 ? void 0 : _c.errorId) ===
                                    this.config.errorCode.userDontHaveImagesError)) {
                            return [2 /*return*/, this.viewModel.modules.documentScan];
                        }
                        return [4 /*yield*/, this.documentScanInteractor.validateDocument()];
                    case 1:
                        documentStatus = _d.sent();
                        return [2 /*return*/, {
                                data: documentStatus,
                                isSave: true,
                                updatable: true,
                                hasError: false,
                            }];
                    case 2:
                        error_6 = _d.sent();
                        return [2 /*return*/, this.getDocumentScannedStatusFail(error_6)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ApprovalFrontOrganism.prototype.getDocumentScannedStatusFail = function (error) {
        return {
            data: null,
            isSave: false,
            updatable: true,
            hasError: true,
            error: error,
        };
    };
    ApprovalFrontOrganism.prototype.groundsForRejectionApprovalFront = function (error, message) {
        var _this = this;
        message.content = Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_11__["createFormat"])(message.content, [this.i18n.creditName[this.organismId]]);
        this.approvalFrontService.showCardModal(message, function () {
            _this.setAnalyticsIntentionOfRejection(error);
            _this.approvalFrontService.goTo(_this.config.routes.closet);
        });
    };
    ApprovalFrontOrganism.prototype.processGetApprovalAttemptError = function () {
        var _this = this;
        var _a;
        var messages = this.i18n.modalError.dontHaveApprovalAttempt;
        messages.content = Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_11__["createFormat"])(messages.content, [
            String((_a = this.viewModel.info.attempt.maxAttempt) !== null && _a !== void 0 ? _a : 0),
        ]);
        this.approvalFrontService.showCardModal(messages, function () {
            return _this.approvalFrontService.goTo(_this.config.routes.closet);
        });
    };
    ApprovalFrontOrganism.prototype.setAnalyticsIntentionOfRejection = function (error) {
        var eventName = this.i18n.creditName[this.organismId] + "_" + this.config.analytics.intentionOfRejection[error.constructor.name].name;
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["AnalyticsType"].FACEBOOK,
            params: {
                eventName: eventName,
            },
        });
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["AnalyticsType"].FIREBASE,
            params: { eventName: eventName },
        });
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["AnalyticsType"].CLEVERTAP,
            params: {
                eventName: eventName,
                eventProps: Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_10__["stringsArrayToObjectWithValues"])(this.config.analytics.intentionOfRejection.params.cleverTap, [error.code]),
            },
        });
        this.dynatraceService.setCustomError(error);
    };
    ApprovalFrontOrganism.prototype.setAnalyticsIntentionOfBegin = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var eventName;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        eventName = this.config.analytics.intentionOfBegin.name + "_" + String(this.i18n.creditName[this.organismId]).toLowerCase();
                        return [4 /*yield*/, this.dynatraceService.setAnalyticsOfEvent({
                                eventName: eventName,
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ApprovalFrontOrganism.prototype.setAnalyticsIntentionOfSucces = function (error) {
        var _a, _b, _c, _d, _e;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var installment, eventName;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        eventName = this.config.analytics.intentionOfSucces.name + "_" + String(this.i18n.creditName[this.organismId]).toLowerCase();
                        if (((_a = this.viewModel.info.installmentList) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                            installment = this.viewModel.info.installmentList[0];
                        }
                        return [4 /*yield*/, this.dynatraceService.setAnalyticsOfEvent({
                                eventName: eventName,
                                eventProps: Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_10__["stringsArrayToObjectWithValues"])(this.config.analytics.intentionOfSucces.params.dynatrace, [
                                    true,
                                    (_b = installment === null || installment === void 0 ? void 0 : installment.value) !== null && _b !== void 0 ? _b : null,
                                    (_c = installment === null || installment === void 0 ? void 0 : installment.installment) !== null && _c !== void 0 ? _c : null,
                                    (_d = error === null || error === void 0 ? void 0 : error.code) !== null && _d !== void 0 ? _d : null,
                                    (_e = error === null || error === void 0 ? void 0 : error.name) !== null && _e !== void 0 ? _e : null,
                                ]),
                                leave: true,
                            })];
                    case 1:
                        _f.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ApprovalFrontOrganism.prototype.showPromptAlertTimeoutApprovalFront = function () {
        var _this = this;
        var config = {
            i18nKey: this.config.i18n.approvalFrontTimeout,
            handlers: {
                accept: function () { return _this.navigatorProvider.navigateRoot(_this.config.routes.closet); },
            },
        };
        this.alertService.showByI18n(config);
    };
    ApprovalFrontOrganism.prototype.setExceptionFactory = function () {
        var _a;
        var _this = this;
        this.factoryException = (_a = {},
            _a[_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["WrongDontComplyWithRiskPoliciesException"].name] = function (error) {
                return _this.groundsForRejectionApprovalFront(error, _this.i18n.modalError.wrongDontComplyWithRiskPolicies);
            },
            _a[_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["HadObligationsInMoraException"].name] = function (error) {
                return _this.groundsForRejectionApprovalFront(error, _this.i18n.modalError.hadObligationsInMora);
            },
            _a[_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["WrongDontUserInCentralsException"].name] = function (error) {
                return _this.groundsForRejectionApprovalFront(error, _this.i18n.modalError.wrongDontUserInCentrals);
            },
            _a[_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["WrongMeetsPaymentCapacityException"].name] = function (error) {
                return _this.groundsForRejectionApprovalFront(error, _this.i18n.modalError.wrongMeetsPaymentCapacity);
            },
            _a[_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["HaveApprovalAttemptException"].name] = function (error) { return _this.onSuccesEmit(error); },
            _a[_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["DontHaveApprovalAttemptWithDataException"].name] = function (error) {
                return _this.onSuccesEmit(error);
            },
            _a[_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["DontHaveApprovalAttemptException"].name] = function () { return _this.processGetApprovalAttemptError(); },
            _a[_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["TimeoutApprovalFrontException"].name] = function () { return _this.showPromptAlertTimeoutApprovalFront(); },
            _a[_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["ValidateDataDoesNotMatchException"].name] = function () { return _this.dataDoesNotMatchError(); },
            _a);
    };
    ApprovalFrontOrganism.prototype.saveCustomerInfoFail = function (error, message) {
        this.dynatraceService.setCustomError(error, message);
        this.loggerInteractor.error(error);
        if (this.factoryException[error.constructor.name]) {
            return this.factoryException[error.constructor.name]();
        }
    };
    ApprovalFrontOrganism.prototype.dataDoesNotMatchError = function () {
        var _this = this;
        var messages = this.i18n.modalError.dataDoesNotMatch;
        this.approvalFrontService.showCardModal(messages, function () { return _this.sessionProvider.closeApp(); });
        return true;
    };
    ApprovalFrontOrganism.ɵfac = function ApprovalFrontOrganism_Factory(t) { return new (t || ApprovalFrontOrganism)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["CreditInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_approval_front_view_model__WEBPACK_IMPORTED_MODULE_14__["ApprovalFrontViewModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_credit_info_model__WEBPACK_IMPORTED_MODULE_12__["CreditInfoModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_4__["UserInfoProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_8__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["LoggerInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_4__["NavigatorProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_7__["DocumentScanService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_occupation_engine_service__WEBPACK_IMPORTED_MODULE_17__["OccupationEngineService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_your_money_engine_service__WEBPACK_IMPORTED_MODULE_18__["YourMoneyEngineService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["DocumentScanInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_8__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_8__["CardModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_approval_front_service__WEBPACK_IMPORTED_MODULE_16__["ApprovalFrontService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["AnalyticsInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_profile_core__WEBPACK_IMPORTED_MODULE_6__["ModuleInfoInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__["DynatraceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_4__["SessionProvider"])); };
    ApprovalFrontOrganism.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ApprovalFrontOrganism, selectors: [["app-approval-front"]], inputs: { organismId: "organismId", messages: "messages" }, outputs: { nextButtonCliked: "nextButtonCliked", goBackCliked: "goBackCliked", completed: "completed" }, decls: 18, vars: 6, consts: [[1, "nequi-header"], ["slot", "start"], ["id", "approval-front_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], ["slot", "end"], ["id", "approval-front_go-help_button", 3, "click"], ["slot", "icon-only", "name", "help-outline"], ["fullscreen", "true", 1, "ion-content--white", "ion-padding-horizontal"], [1, "nequi-title"], ["class", "margin-bottom-8", 3, "id", "title", "description", "leftImage", "status", "clicked", 4, "ngFor", "ngForOf"], [1, "nequi-footer", "ion-no-border"], [1, "ion-text-center"], ["id", "approval-front_ready_button", "expand", "block", "color", "guayaba", 1, "nequi-footer__button", 3, "disabled", "click"], [1, "margin-bottom-8", 3, "id", "title", "description", "leftImage", "status", "clicked"]], template: function ApprovalFrontOrganism_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ApprovalFrontOrganism_Template_ion_button_click_3_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-buttons", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ApprovalFrontOrganism_Template_ion_button_click_6_listener() { return ctx.goToHelp(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "ion-icon", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-content", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-grid");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ApprovalFrontOrganism_nequi_nav_button_card_12_Template, 3, 9, "nequi-nav-button-card", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-footer", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-toolbar", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ApprovalFrontOrganism_Template_ion_button_click_15_listener() { return ctx.onValidateEngine(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.i18n.headerTitle, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.viewModel.navButtons);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.viewModel.canContinue);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 4, "Listo"), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_19__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_19__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_19__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_19__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_19__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_19__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_19__["IonGrid"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_19__["IonFooter"], _ui_src_lib_components_nav_button_card_nav_button_card_component__WEBPACK_IMPORTED_MODULE_21__["NavButtonCardComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHByb3ZhbC1mcm9udC5vcmdhbmlzbS5zY3NzIn0= */"] });
    return ApprovalFrontOrganism;
}());



/***/ }),

/***/ "40mb":
/*!**************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/organisms/contract/contract.config.ts ***!
  \**************************************************************************************/
/*! exports provided: ContractConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractConfig", function() { return ContractConfig; });
var ContractConfig = Object.freeze({
    i18n: {
        lifeguard: 'credits/contract.lifeguard',
        proppeler: 'credits/contract.propeller',
    },
    replaceString: {
        value: /\$#VALUE/g,
        totalValue: /\$#TOTAL_VALUE/g,
        insuranceValue: /\$#VALUE_LIFE_INSURANCE/g,
        installmentValue: /#FEEVALUE/g,
        numberInstallments: /#FEESNUMBER/g,
        installmentDay: /#FEEDAY/g,
        installmentPeriods: /#LOAN_PERIOD_MONTHS/g,
        maxInstallmentPeriods: /#MAX_OF_INSTALLMENTS/g,
        // TODO: the back sends the parameters in Spanish
        monthlyInterestRate: /#TASA_INTERES_MENSUAL/g,
        annualEffectiveRate: /#TAZA_INTERES_EFECTIVA_ANUAL/g,
        paymentDate: /#FECHA_DE_PAGO/g,
        disbursementValue: /#VALOR_DEL_DESEMBOLSO/g,
        installment: /#CUOTA_CREDITO/g,
        insurance: /\$#VALOR_SEGURO_VIDA/g,
        nextPaymentDate: /#PROXIMA_FECHA_PAGO/g,
        disbursement: /\$#VALOR_DESEMBOLSO/g,
        singleValuePaymentFee: /\$#VALOR_UNICA_CUOTA_PAGO/g,
        repeatedText: 'El ',
        space: /\s+/g,
    },
    pipeFormat: {
        percent: '.0-2',
    },
});


/***/ }),

/***/ "8tJ0":
/*!***************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/organisms/payment/custom-validators.ts ***!
  \***************************************************************************************/
/*! exports provided: CustomValidatorsForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomValidatorsForm", function() { return CustomValidatorsForm; });
var CustomValidatorsForm = /** @class */ (function () {
    function CustomValidatorsForm() {
    }
    CustomValidatorsForm.prototype.maxOverdueFeeValidator = function (overdueFee) {
        return function (control) {
            if (control.value > overdueFee) {
                return { maxOverdueFee: true };
            }
            return null;
        };
    };
    CustomValidatorsForm.prototype.maxFeeValidator = function (maxPaymentValue) {
        return function (control) {
            if (control.value > maxPaymentValue) {
                return { maxFee: true };
            }
            return null;
        };
    };
    return CustomValidatorsForm;
}());



/***/ }),

/***/ "AYRj":
/*!******************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/organisms/preapproval/services/preapproved.service.ts ***!
  \******************************************************************************************************/
/*! exports provided: PreapprovedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreapprovedService", function() { return PreapprovedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _preapproval_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../preapproval.config */ "UEf9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");












var PreapprovedService = /** @class */ (function () {
    function PreapprovedService(fullscreenModalService, navController, route, translateProvider, loadingService, toastService, cardModalService) {
        this.fullscreenModalService = fullscreenModalService;
        this.navController = navController;
        this.route = route;
        this.translateProvider = translateProvider;
        this.loadingService = loadingService;
        this.toastService = toastService;
        this.cardModalService = cardModalService;
        this.config = _preapproval_config__WEBPACK_IMPORTED_MODULE_6__["PreapprovalConfig"];
    }
    PreapprovedService.prototype.showFullScreenModal = function (i18n) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var i18nFormatted;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i18nFormatted = Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_5__["toCamelCaseProperties"])(i18n);
                        return [4 /*yield*/, this.fullscreenModalService.show({
                                title: i18nFormatted.title,
                                imgPath: i18nFormatted.image,
                                content: i18nFormatted.description,
                                cssClass: this.config.fullscreenModal.cssClass,
                                buttons: [
                                    {
                                        text: i18nFormatted.acceptButton,
                                        handler: this.goToKnowUsBetterEngine.bind(this),
                                        cssClass: this.config.fullscreenModal.cssClassButton,
                                    },
                                ],
                                link: {
                                    text: i18nFormatted.moreInfoLink,
                                    url: this.config.routes.moreInfo,
                                },
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PreapprovedService.prototype.goToKnowUsBetterEngine = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.navController.navigateForward(this.config.routes.knowUsBetterEngine, {
                    relativeTo: this.route,
                });
                return [2 /*return*/];
            });
        });
    };
    PreapprovedService.prototype.goToSpecialConditions = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                messages = this.translateProvider.get(this.config.i18n.modal.specialConditions);
                this.showFullScreenModal(messages);
                return [2 /*return*/];
            });
        });
    };
    PreapprovedService.prototype.goBack = function () {
        this.navController.back();
    };
    PreapprovedService.prototype.showCardModal = function (i18n) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.cardModalService.show({
                    title: i18n.title,
                    imgPath: i18n.image,
                    content: i18n.content,
                    buttons: [
                        {
                            text: i18n.readyButton,
                            handler: function () { return _this.navController.back(); },
                        },
                    ],
                });
                return [2 /*return*/];
            });
        });
    };
    PreapprovedService.ɵfac = function PreapprovedService_Factory(t) { return new (t || PreapprovedService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_4__["FullscreenModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_3__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_4__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_4__["CardModalService"])); };
    PreapprovedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: PreapprovedService, factory: PreapprovedService.ɵfac });
    return PreapprovedService;
}());



/***/ }),

/***/ "BJHQ":
/*!************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/organisms/preapproval/preapproval.view-model.ts ***!
  \************************************************************************************************/
/*! exports provided: PreapprovalViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreapprovalViewModel", function() { return PreapprovalViewModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/credits/core */ "42wy");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _services_credit_info_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/credit-info.model */ "9FmH");
/* harmony import */ var _approval_front_approval_front_view_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../approval-front/approval-front.view-model */ "pwQe");
/* harmony import */ var _preapproval_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./preapproval.config */ "UEf9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");










var PreapprovalViewModel = /** @class */ (function () {
    function PreapprovalViewModel(creditInfoModel, approvalFrontViewModel) {
        this.creditInfoModel = creditInfoModel;
        this.approvalFrontViewModel = approvalFrontViewModel;
        this.minAmount = 0;
        this.maxAmount = 0;
        this.nationalGuaranteeFundCommissionPercentage = 0;
        this.monthlyInterestRate = 0;
        this.monthlyInsuranceAmount = 0;
        this.insuranceCoverageAmount = 0;
        this.loanAmount = 0;
        this.isWrongTime = false;
        this.userDontHavePreApproved = false;
        this.details = [];
        this.isMinAmountPreaproved = false;
        this.isDataLoaded = false;
        this.bussyIndicator = {
            show: false,
            error: '',
        };
        this.config = _preapproval_config__WEBPACK_IMPORTED_MODULE_6__["PreapprovalConfig"];
    }
    PreapprovalViewModel.prototype.initForm = function (amount) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.financingAmount = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](amount !== null && amount !== void 0 ? amount : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
                this.term = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
                this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                    financingAmount: this.financingAmount,
                    term: this.term,
                });
                return [2 /*return*/];
            });
        });
    };
    Object.defineProperty(PreapprovalViewModel.prototype, "monthlyFee", {
        get: function () {
            var valueTerm = Number(this.form.value.term.value);
            var p100 = 100;
            var nationalGuaranteeFundCommission = this.nationalGuaranteeFundCommissionPercentage / p100;
            return (((this.financingAmount.value + this.financingAmount.value * nationalGuaranteeFundCommission) *
                (Math.pow((1 + this.monthlyInterestRate), valueTerm) * this.monthlyInterestRate)) /
                (Math.pow((1 + this.monthlyInterestRate), valueTerm) - 1) +
                Math.ceil((this.financingAmount.value +
                    this.financingAmount.value * nationalGuaranteeFundCommission) /
                    this.insuranceCoverageAmount) *
                    this.monthlyInsuranceAmount);
        },
        enumerable: false,
        configurable: true
    });
    PreapprovalViewModel.prototype.processPreapproved = function (customerCredits) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.customerCredits = customerCredits;
                        return [4 /*yield*/, this.isCalledApprovalFront()];
                    case 1:
                        _a.sent();
                        this.preapproved = this.customerCredits.preapproved;
                        this.setViewModel();
                        return [2 /*return*/];
                }
            });
        });
    };
    PreapprovalViewModel.prototype.isCalledApprovalFront = function () {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var list;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.approvalFrontViewModel.info.isFromApproval && ((_a = this.approvalFrontViewModel.info.installmentList) === null || _a === void 0 ? void 0 : _a.length))) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.sortInstallments(this.approvalFrontViewModel.info.installmentList, this.config.sortProperty.installment)];
                    case 1:
                        list = _b.sent();
                        this.customerCredits.preapproved.maxAmount = list[0].value;
                        this.financingAmount.setValue(this.customerCredits.preapproved.maxAmount);
                        if (!(this.approvalFrontViewModel.info.attempt.error &&
                            this.approvalFrontViewModel.info.attempt.error.constructor.name ===
                                _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_2__["DontHaveApprovalAttemptWithDataException"].name)) return [3 /*break*/, 3];
                        this.customerCredits.preapproved.maxInstallment = list[0].installment;
                        this.customerCredits.preapproved.minInstallment = list[list.length - 1].installment;
                        return [4 /*yield*/, this.setTermOptionsWithInstallment(list)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                    case 3:
                        this.setTermOptionSelect();
                        return [2 /*return*/];
                }
            });
        });
    };
    PreapprovalViewModel.prototype.setTermOptionSelect = function () {
        var data = [];
        for (var index = this.customerCredits.preapproved.maxInstallment; index >= this.customerCredits.preapproved.minInstallment; index--) {
            data.push({
                name: index + " " + this.operationParams.installmentSuffix,
                value: index,
                amount: this.customerCredits.preapproved.maxAmount,
            });
        }
        this.termOptionsSelect = data !== null && data !== void 0 ? data : [];
    };
    PreapprovalViewModel.prototype.setTermOptionsWithInstallment = function (data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.termOptionsSelect = data.map(function (item) {
                            return {
                                name: (item === null || item === void 0 ? void 0 : item.installment) + " " + _this.operationParams.installmentSuffix,
                                value: item === null || item === void 0 ? void 0 : item.installment,
                                amount: item === null || item === void 0 ? void 0 : item.value,
                            };
                        });
                        _a = this;
                        return [4 /*yield*/, this.sortInstallments(this.termOptionsSelect, this.config.sortProperty.installmentParams)];
                    case 1:
                        _a.termOptionsSelect = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PreapprovalViewModel.prototype.setPaymentGuaranteesInfo = function () {
        var _a, _b, _c;
        this.creditInfoModel.creditFeatureInfo = {
            loanAmount: this.financingAmount.value,
            commissionPercentage: this.nationalGuaranteeFundCommissionPercentage,
            monthlyFee: this.monthlyFee,
            term: this.term.value,
            approvedDate: this.preapproved.approvedAt,
            installment: (_c = (_b = (_a = this.form.value) === null || _a === void 0 ? void 0 : _a.term) === null || _b === void 0 ? void 0 : _b.value) !== null && _c !== void 0 ? _c : this.preapproved.maxInstallment,
            expirationDateText: this.preapproved.expirationDateText,
        };
    };
    PreapprovalViewModel.prototype.changeInstallment = function (event) {
        this.creditInfoModel.creditFeatureInfo = {
            installment: event.value,
        };
        this.maxAmount = event.amount;
        this.financingAmount.setValue(event.amount);
    };
    PreapprovalViewModel.prototype.buildDetail = function (messagesDetail) {
        var _a = Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_3__["toCamelCaseProperties"])(messagesDetail), label = _a.label, how = _a.how, when = _a.when, help = _a.help;
        this.details = [
            {
                label: label,
                helpMessage: help,
            },
            {
                label: how,
            },
            {
                label: when,
                description: this.preapproved.expirationAt.toString(),
            },
        ];
    };
    PreapprovalViewModel.prototype.getMonthlyFee = function () {
        return this.monthlyFee;
    };
    PreapprovalViewModel.prototype.setViewModel = function () {
        var _this = this;
        var _a, _b;
        var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(this.termOptionsSelect, 1), term = _c[0];
        if (this.approvalFrontViewModel.info.isFromApproval && ((_a = this.approvalFrontViewModel.info.installmentList) === null || _a === void 0 ? void 0 : _a.length)) {
            term = (_b = this.termOptionsSelect.find(function (item) { return item.value === _this.approvalFrontViewModel.info.installmentList[0].installment; })) !== null && _b !== void 0 ? _b : term;
        }
        this.term.setValue(term);
        this.minAmount = this.preapproved.minAmount
            ? this.preapproved.minAmount
            : this.operationParams.baseAmount;
        this.maxAmount = this.preapproved.maxAmount;
        this.nationalGuaranteeFundCommissionPercentage = this.preapproved.percentageOfCommission;
        this.monthlyInterestRate = this.operationParams.monthlyInterestRate;
        this.monthlyInsuranceAmount = this.operationParams.monthlyInsurance;
        this.insuranceCoverageAmount = this.operationParams.insuranceCoverage;
        this.isMinAmountPreaproved = this.preapproved.minAmount === this.preapproved.maxAmount;
        this.creditInfoModel.creditFeatureInfo = {
            approvedDate: this.preapproved.approvedAt,
            installment: this.preapproved.maxInstallment,
        };
        this.creditInfoModel.agreement = {
            agreement: this.preapproved.product.agreement,
            agreementFGA: this.preapproved.product.secondaryAgreement,
        };
        this.isDataLoaded = true;
    };
    PreapprovalViewModel.prototype.sortInstallments = function (data, property) {
        return data.sort(function (a, b) {
            if (a[property] < b[property]) {
                return 1;
            }
            if (a[property] > b[property]) {
                return -1;
            }
            return 0;
        });
    };
    PreapprovalViewModel.ɵfac = function PreapprovalViewModel_Factory(t) { return new (t || PreapprovalViewModel)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_services_credit_info_model__WEBPACK_IMPORTED_MODULE_4__["CreditInfoModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_approval_front_approval_front_view_model__WEBPACK_IMPORTED_MODULE_5__["ApprovalFrontViewModel"])); };
    PreapprovalViewModel.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: PreapprovalViewModel, factory: PreapprovalViewModel.ɵfac });
    return PreapprovalViewModel;
}());



/***/ }),

/***/ "BkOq":
/*!***************************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/organisms/approval-front/pages/occupation-engine/occupation-engine.page.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: OccupationEnginePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OccupationEnginePage", function() { return OccupationEnginePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/credits/core */ "42wy");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _services_occupation_engine_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/occupation-engine.service */ "hY4E");
/* harmony import */ var _occupation_engine_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./occupation-engine.config */ "XLvJ");
/* harmony import */ var _occupation_engine_view_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./occupation-engine.view-model */ "HCzv");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ui_src_lib_controls_input_select_input_select_control_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../../ui/src/lib/controls/input-select/input-select-control.component */ "BMu5");
/* harmony import */ var _ui_src_lib_controls_nequi_input_date_nequi_input_date_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../../ui/src/lib/controls/nequi-input-date/nequi-input-date.component */ "n8X/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");






















function OccupationEnginePage_form_9_ion_row_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "nequi-input-date", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, ctx_r1.config.i18n.sinceDateLabel))("dateControl", ctx_r1.viewModel.sinceDate)("max", ctx_r1.maxDate);
} }
function OccupationEnginePage_form_9_ion_row_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "nequi-input-select-control", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r2.viewModel.contract)("hideFilter", true)("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, ctx_r2.config.i18n.contractLabel))("options", ctx_r2.viewModel.contractList);
} }
function OccupationEnginePage_form_9_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-grid", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-row", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nequi-input-select-control", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selected", function OccupationEnginePage_form_9_Template_nequi_input_select_control_selected_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.viewModel.resetForm($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, OccupationEnginePage_form_9_ion_row_6_Template, 4, 5, "ion-row", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, OccupationEnginePage_form_9_ion_row_7_Template, 4, 6, "ion-row", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.viewModel.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r0.viewModel.occupation)("hideFilter", true)("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 7, ctx_r0.config.i18n.occupationLabel))("options", ctx_r0.viewModel.occupationList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.viewModel.showSinceDateField);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.viewModel.showContractField);
} }
var OccupationEnginePage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(OccupationEnginePage, _super);
    function OccupationEnginePage(injector, router, occupationEngineService, changeDetectorRef, creditInteractor, loggerInteractor, parameterInteractor, loadingService) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.router = router;
        _this.occupationEngineService = occupationEngineService;
        _this.changeDetectorRef = changeDetectorRef;
        _this.creditInteractor = creditInteractor;
        _this.loggerInteractor = loggerInteractor;
        _this.parameterInteractor = parameterInteractor;
        _this.loadingService = loadingService;
        _this.config = _occupation_engine_config__WEBPACK_IMPORTED_MODULE_8__["OccupationEngineConfig"];
        _this.viewModel = new _occupation_engine_view_model__WEBPACK_IMPORTED_MODULE_9__["OccupationEngineViewModel"]();
        return _this;
    }
    OccupationEnginePage.prototype.ngOnInit = function () {
        this.initData();
    };
    OccupationEnginePage.prototype.ngAfterViewChecked = function () {
        this.changeDetectorRef.detectChanges();
    };
    OccupationEnginePage.prototype.onComplete = function () {
        this.occupationEngineService.emit(this.viewModel.form.value);
    };
    Object.defineProperty(OccupationEnginePage.prototype, "maxDate", {
        get: function () {
            var currentDate = new Date();
            var maxDate = currentDate.setDate(currentDate.getDate() + 1);
            return new Date(maxDate).toISOString();
        },
        enumerable: false,
        configurable: true
    });
    OccupationEnginePage.prototype.initData = function () {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var parameters, _b, _c, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 3, 4, 5]);
                        this.loadingService.show();
                        this.occupationData = this.router.getCurrentNavigation().extras
                            .state;
                        this.viewModel.initForm(this.occupationData);
                        this.viewModel.validateOccupation((_a = this.occupationData) === null || _a === void 0 ? void 0 : _a.occupation);
                        return [4 /*yield*/, this.parameterInteractor.getParameter(_occupation_engine_config__WEBPACK_IMPORTED_MODULE_8__["OccupationEngineConfig"].dynamoParam)];
                    case 1:
                        parameters = _d.sent();
                        _c = (_b = this.viewModel).setOccupationsAndContracts;
                        return [4 /*yield*/, this.creditInteractor.getOccupations(parameters)];
                    case 2:
                        _c.apply(_b, [_d.sent()]);
                        return [3 /*break*/, 5];
                    case 3:
                        error_1 = _d.sent();
                        this.loggerInteractor.error(error_1);
                        return [3 /*break*/, 5];
                    case 4:
                        this.loadingService.hideWithoutFeedback();
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    OccupationEnginePage.ɵfac = function OccupationEnginePage_Factory(t) { return new (t || OccupationEnginePage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_occupation_engine_service__WEBPACK_IMPORTED_MODULE_7__["OccupationEngineService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["CreditInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__["LoggerInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__["ParameterInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_6__["LoadingService"])); };
    OccupationEnginePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OccupationEnginePage, selectors: [["app-credits-occupation-engine"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 15, vars: 8, consts: [[1, "nequi-header"], ["slot", "start"], ["id", "occupation-engine_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], ["fullscreen", "true", 1, "ion-content--white", "ion-padding-horizontal"], [1, "nequi-title"], [3, "formGroup", 4, "ngIf"], [1, "nequi-footer", "ion-no-border"], ["id", "occupation-engine_ready_button", "expand", "block", "color", "guayaba", 1, "nequi-footer__button", 3, "disabled", "click"], [3, "formGroup"], [1, "ion-no-padding"], [1, "margin-bottom-8"], ["id", "occupation-engine_occupation_select", 1, "margin-bottom-8", 3, "formControl", "hideFilter", "label", "options", "selected"], ["class", "margin-bottom-16", 4, "ngIf"], [4, "ngIf"], [1, "margin-bottom-16"], ["id", "occupation-engine_since-date_input-date", 3, "placeholder", "dateControl", "max"], ["id", "occupation-engine_contract_select", 1, "margin-bottom-8", 3, "formControl", "hideFilter", "label", "options"]], template: function OccupationEnginePage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OccupationEnginePage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-content", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, OccupationEnginePage_form_9_Template, 8, 9, "form", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-footer", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OccupationEnginePage_Template_ion_button_click_12_listener() { return ctx.onComplete(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 4, ctx.config.i18n.headerTitle), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.viewModel.occupationList);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.viewModel.isValidForm());
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 6, ctx.config.i18n.readyButton), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonFooter"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonCol"], _ui_src_lib_controls_input_select_input_select_control_component__WEBPACK_IMPORTED_MODULE_13__["InputSelectControlComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControlDirective"], _ui_src_lib_controls_nequi_input_date_nequi_input_date_component__WEBPACK_IMPORTED_MODULE_14__["NequiInputDateComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"]], encapsulation: 2 });
    return OccupationEnginePage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_4__["FeatureBasePage"]));



/***/ }),

/***/ "CIIQ":
/*!**************************************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/organisms/approval-front/pages/occupation-engine/constants/occupation-engine-types.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: OccupacionEngineTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OccupacionEngineTypes", function() { return OccupacionEngineTypes; });
var OccupacionEngineTypes;
(function (OccupacionEngineTypes) {
    OccupacionEngineTypes["EMPLOYEE"] = "Empleado";
    OccupacionEngineTypes["INDEPENDENT"] = "Independiente";
    OccupacionEngineTypes["RETIRED"] = "Jubilado";
})(OccupacionEngineTypes || (OccupacionEngineTypes = {}));


/***/ }),

/***/ "CQtc":
/*!**********************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/organisms/preapproval/preapproval.organism.ts ***!
  \**********************************************************************************************/
/*! exports provided: PreapprovalOrganism */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreapprovalOrganism", function() { return PreapprovalOrganism; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nequi_features_commons_presentation_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons/presentation/services */ "ao53");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/credits/core */ "42wy");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _nequi_utils_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/utils/string */ "p6rB");
/* harmony import */ var _services_customer_finacial_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/customer-finacial.service */ "uuzL");
/* harmony import */ var _approval_front_approval_front_view_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../approval-front/approval-front.view-model */ "pwQe");
/* harmony import */ var _approval_front_services_approval_front_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../approval-front/services/approval-front.service */ "Pxf4");
/* harmony import */ var _preapproval_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./preapproval.config */ "UEf9");
/* harmony import */ var _preapproval_view_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./preapproval.view-model */ "BJHQ");
/* harmony import */ var _services_preapproved_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/preapproved.service */ "AYRj");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ui_src_lib_directives_form_content_style_form_content_style_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../ui/src/lib/directives/form-content-style/form-content-style.directive */ "+XT3");
/* harmony import */ var _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../ui/src/lib/directives/animate-title-on-scroll/animate-title-on-scroll.directive */ "qbWi");
/* harmony import */ var _ui_src_lib_components_busy_indicator_busy_indicator_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../ui/src/lib/components/busy-indicator/busy-indicator.component */ "N6nj");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_card_money_slider_card_money_slider_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../components/card-money-slider/card-money-slider.component */ "5ecc");
/* harmony import */ var _ui_src_lib_controls_input_select_input_select_control_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../../ui/src/lib/controls/input-select/input-select-control.component */ "BMu5");
/* harmony import */ var _ui_src_lib_directives_nequi_currency_style_nequi_currency_style_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../../../ui/src/lib/directives/nequi-currency-style/nequi-currency-style.directive */ "kVXI");
/* harmony import */ var _ui_src_lib_components_view_detail_view_detail_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../../../ui/src/lib/components/view-detail/view-detail.component */ "yT3N");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");



































function PreapprovalOrganism_ion_button_9_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PreapprovalOrganism_ion_button_9_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.goToHelp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ion-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "", ctx_r0.organismId, "_go-help_button");
} }
function PreapprovalOrganism_app_busy_indicator_14_Template(rf, ctx) { if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-busy-indicator", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onReload", function PreapprovalOrganism_app_busy_indicator_14_Template_app_busy_indicator_onReload_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.bussyIndicatorReload(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showReload", ctx_r1.viewModel.bussyIndicator.error)("reloadMessage", ctx_r1.viewModel.bussyIndicator.error);
} }
function PreapprovalOrganism_form_15_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nequi-input-select-control", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PreapprovalOrganism_form_15_ng_container_3_Template_nequi_input_select_control_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r11.getApprovalUpFrontAttempt($event); })("selected", function PreapprovalOrganism_form_15_ng_container_3_Template_nequi_input_select_control_selected_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r13.onChangeInstallment($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-item", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-item", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-text", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ion-item", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "ion-text", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-item", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ion-text", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "ion-item", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "ion-text", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "", ctx_r8.organismId, "__select-term");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hideFilter", true)("label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 13, ctx_r8.messages.termLabel))("options", ctx_r8.viewModel.termOptionsSelect)("isDisabledClick", true)("isReadOnly", !ctx_r8.approvalFrontViewModel.info.isAvailable);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 15, ctx_r8.messages.monthlyPaymentAmount.label), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r8.viewModel.term.value.value, " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 17, ctx_r8.messages.monthlyPaymentAmount.complementText), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nequiCurrencyStyle", ctx_r8.viewModel.monthlyFee)("showDecimals", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 19, ctx_r8.messages.monthlyPaymentAmount.additionalText), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](21, 21, ctx_r8.messages.monthlyPaymentAmount.infoMessage), " ");
} }
function PreapprovalOrganism_form_15_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-view-detail", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 3, ctx_r9.messages == null ? null : ctx_r9.messages.detail.subtitle))("status", ctx_r9.detailColor)("details", ctx_r9.viewModel.details);
} }
function PreapprovalOrganism_form_15_Template(rf, ctx) { if (rf & 1) {
    var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nequi-card-money-slider", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("amountChange", function PreapprovalOrganism_form_15_Template_nequi_card_money_slider_amountChange_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.showViewDetail && ctx_r14.updateDetails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, PreapprovalOrganism_form_15_ng_container_3_Template, 22, 23, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, PreapprovalOrganism_form_15_ng_container_4_Template, 4, 5, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r2.viewModel.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "", ctx_r2.organismId, "__card-money-slider-amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r2.config.images.airIcon)("title", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 13, ctx_r2.preapprovedLabel))("amount", ctx_r2.viewModel.financingAmount.value)("minAmount", ctx_r2.viewModel.minAmount)("maxAmount", ctx_r2.viewModel.maxAmount)("stepAmount", ctx_r2.viewModel.operationParams.stepAmount)("showDecimals", false)("formControl", ctx_r2.viewModel.financingAmount)("hideSlider", ctx_r2.viewModel.isMinAmountPreaproved);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r2.showViewDetail);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.showViewDetail);
} }
function PreapprovalOrganism_ion_footer_16_ion_row_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-row", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 1, ctx_r16.messages.footer.authorization), " ");
} }
function PreapprovalOrganism_ion_footer_16_ion_button_6_Template(rf, ctx) { if (rf & 1) {
    var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PreapprovalOrganism_ion_footer_16_ion_button_6_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r18.onSpecialConditions(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "", ctx_r17.organismId, "_condition_button");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, ctx_r17.messages.footer.conditionButtonText), " ");
} }
function PreapprovalOrganism_ion_footer_16_Template(rf, ctx) { if (rf & 1) {
    var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-footer", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PreapprovalOrganism_ion_footer_16_ion_row_2_Template, 5, 3, "ion-row", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PreapprovalOrganism_ion_footer_16_Template_ion_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r20.goToPaymentGuarantees(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, PreapprovalOrganism_ion_footer_16_ion_button_6_Template, 3, 4, "ion-button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.messages.footer.authorization);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "", ctx_r3.organismId, "_ready_button");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 4, ctx_r3.messages.footer.readyButtonText), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.approvalFrontViewModel.info.isAvailable && !ctx_r3.approvalFrontViewModel.info.isFromApproval);
} }
var DEFAULT_TIMEOUT = 500;
var PreapprovalOrganism = /** @class */ (function () {
    function PreapprovalOrganism(translateProvider, creditInteractor, preapprovedService, viewModel, approvalFrontViewModel, currencyPipe, approvalFrontService, dynatraceService, customerFinancialService) {
        this.translateProvider = translateProvider;
        this.creditInteractor = creditInteractor;
        this.preapprovedService = preapprovedService;
        this.viewModel = viewModel;
        this.approvalFrontViewModel = approvalFrontViewModel;
        this.currencyPipe = currencyPipe;
        this.approvalFrontService = approvalFrontService;
        this.dynatraceService = dynatraceService;
        this.customerFinancialService = customerFinancialService;
        this.showViewDetail = false;
        this.showHelpButton = false;
        this.showApprovalFront = false;
        this.nextButtonCliked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.goBackCliked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.showHelpPressed = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.config = _preapproval_config__WEBPACK_IMPORTED_MODULE_12__["PreapprovalConfig"];
        this.detailColor = _nequi_ui__WEBPACK_IMPORTED_MODULE_6__["ViewDetailStatus"].GRAY;
        this.factoryException = {};
    }
    PreapprovalOrganism.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.setAnalyticsPreapproved()];
                    case 1:
                        _a.sent();
                        this.onGetOperationParams();
                        this.approvalFrontService.subscribe(this.initPage.bind(this));
                        return [2 /*return*/];
                }
            });
        });
    };
    PreapprovalOrganism.prototype.ngOnDestroy = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.approvalFrontService.unsubscribe();
                return [2 /*return*/];
            });
        });
    };
    PreapprovalOrganism.prototype.goBack = function () {
        this.goBackCliked.emit();
    };
    PreapprovalOrganism.prototype.goToHelp = function () {
        this.showHelpPressed.emit();
    };
    PreapprovalOrganism.prototype.goToPaymentGuarantees = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.viewModel.setPaymentGuaranteesInfo();
                this.nextButtonCliked.emit();
                return [2 /*return*/];
            });
        });
    };
    PreapprovalOrganism.prototype.onSpecialConditions = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.getApprovalUpFrontAttempt();
                return [2 /*return*/];
            });
        });
    };
    PreapprovalOrganism.prototype.onChangeInstallment = function (event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.approvalFrontViewModel.info.attempt.hasAttempts &&
                            this.viewModel.preapproved.maxInstallment !== event.value)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.approvalUpFrontLastAttemptError(event)];
                    case 1:
                        if (!(_a.sent())) {
                            this.setCurrentInstallment(event);
                        }
                        return [2 /*return*/];
                    case 2:
                        this.viewModel.changeInstallment(event);
                        return [2 /*return*/];
                }
            });
        });
    };
    PreapprovalOrganism.prototype.setExceptionFactory = function () {
        var _a;
        var _this = this;
        this.factoryException = (_a = {},
            _a[_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["HaveApprovalAttemptException"].name] = function (error) {
                _this.processHaveApprovalAttempt(error);
            },
            _a[_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["DontHaveApprovalAttemptWithDataException"].name] = function (error) {
                _this.processDontHaveApprovalAttemptWithDataError(error);
            },
            _a[_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["DontHaveApprovalAttemptException"].name] = function (error) {
                _this.processDontHaveApprovalAttemptError(error);
            },
            _a[_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["NeverBeenApprovedFrontException"].name] = function () {
                _this.processNeverBeenApprovedFrontError();
            },
            _a);
    };
    PreapprovalOrganism.prototype.getApprovalUpFrontAttempt = function (event) {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var response, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        event === null || event === void 0 ? void 0 : event.stopPropagation();
                        this.viewModel.currentTerm = this.viewModel.term.value;
                        if (!this.approvalFrontViewModel.info.isAvailable) return [3 /*break*/, 5];
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 4, , 5]);
                        if (!!this.approvalFrontViewModel.info.attempt.isCallService) return [3 /*break*/, 3];
                        this.preapprovedService.loadingService.show();
                        this.approvalFrontViewModel.info.attempt.hasAttempts = false;
                        return [4 /*yield*/, this.creditInteractor.getApprovalAttempt()];
                    case 2:
                        response = (_c.sent());
                        if (response) {
                            this.approvalFrontViewModel.info.attempt.maxAttempt = (_b = (_a = response === null || response === void 0 ? void 0 : response.attempts) === null || _a === void 0 ? void 0 : _a.maxAttempt) !== null && _b !== void 0 ? _b : null;
                        }
                        this.approvalFrontViewModel.info.attempt.isCallService = true;
                        this.approvalFrontViewModel.info.attempt.hasAttempts = true;
                        this.preapprovedService.loadingService.hideWithoutFeedback();
                        _c.label = 3;
                    case 3:
                        if (this.approvalFrontViewModel.info.attempt.error) {
                            this.dynatraceService.setCustomError(this.approvalFrontViewModel.info.attempt.error);
                            throw this.approvalFrontViewModel.info.attempt.error;
                        }
                        this.processHaveApprovalAttempt();
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _c.sent();
                        this.failApprovalUpFrontAttempt(error_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    PreapprovalOrganism.prototype.updateDetails = function () {
        var monthlyFee = this.viewModel.getMonthlyFee();
        this.viewModel.details[0].description = this.currencyPipe.transform(monthlyFee - this.viewModel.financingAmount.value);
        this.viewModel.details[1].description = this.currencyPipe.transform(monthlyFee);
    };
    PreapprovalOrganism.prototype.bussyIndicatorReload = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.onGetOperationParams()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PreapprovalOrganism.prototype.setCurrentInstallment = function (event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.approvalFrontViewModel.info.currentInstallment = event;
                        this.viewModel.term.setValue(this.viewModel.currentTerm);
                        return [4 /*yield*/, this.setAnalyticsIntentionOfApprovalUpFront()];
                    case 1:
                        _a.sent();
                        this.preapprovedService.goToSpecialConditions();
                        return [2 /*return*/];
                }
            });
        });
    };
    PreapprovalOrganism.prototype.approvalUpFrontLastAttemptError = function (event) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(((_a = this.approvalFrontViewModel.info.attempt.error) === null || _a === void 0 ? void 0 : _a.constructor.name) ===
                            _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["HaveApprovalAttemptException"].name)) return [3 /*break*/, 2];
                        messages = this.translateProvider.get(this.config.i18n.modal.lastApprovalAttempt);
                        return [4 /*yield*/, this.approvalFrontService.showCardModal(messages, function () { return _this.setCurrentInstallment(event); }, function () { return _this.viewModel.term.setValue(_this.viewModel.currentTerm); })];
                    case 1:
                        _b.sent();
                        return [2 /*return*/, true];
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    PreapprovalOrganism.prototype.failApprovalUpFrontAttempt = function (error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.dynatraceService.setCustomError(error);
                        this.preapprovedService.loadingService.hideWithoutFeedback();
                        if (this.factoryException[error.constructor.name]) {
                            this.factoryException[error.constructor.name](error);
                            this.approvalFrontViewModel.info.attempt.isCallService = true;
                            this.approvalFrontViewModel.info.attempt.error = error;
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.preapprovedService.toastService.showError(error.message)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PreapprovalOrganism.prototype.processHaveApprovalAttempt = function (error) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var message, param;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        message = this.translateProvider.get(this.config.i18n.toast.haveApprovalAttempt);
                        param = String((_a = this.approvalFrontViewModel.info.attempt.maxAttempt) !== null && _a !== void 0 ? _a : error.data.attempts.maxAttempt);
                        this.approvalFrontViewModel.info.attempt.hasAttempts = true;
                        message = Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_8__["createFormat"])(message, [param]);
                        this.viewModel.setTermOptionSelect();
                        this.installmentSelect.options = this.viewModel.termOptionsSelect;
                        return [4 /*yield*/, this.installmentSelect.showOptions()];
                    case 1:
                        _b.sent();
                        setTimeout(function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.preapprovedService.toastService.showInfo(message)];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); }, DEFAULT_TIMEOUT);
                        return [2 /*return*/];
                }
            });
        });
    };
    PreapprovalOrganism.prototype.processNeverBeenApprovedFrontError = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.approvalFrontViewModel.info.attempt.hasAttempts = true;
                        this.viewModel.setTermOptionSelect();
                        this.installmentSelect.options = this.viewModel.termOptionsSelect;
                        return [4 /*yield*/, this.installmentSelect.showOptions()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PreapprovalOrganism.prototype.processDontHaveApprovalAttemptWithDataError = function (error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var message;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.viewModel.setTermOptionsWithInstallment(error.data.installmentList)];
                    case 1:
                        _a.sent();
                        this.installmentSelect.options = this.viewModel.termOptionsSelect;
                        return [4 /*yield*/, this.installmentSelect.showOptions()];
                    case 2:
                        _a.sent();
                        message = this.translateProvider.get(this.config.i18n.toast.dontHaveApprovalAttemptWithData);
                        setTimeout(function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.preapprovedService.toastService.showInfo(message)];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); }, DEFAULT_TIMEOUT);
                        return [2 /*return*/];
                }
            });
        });
    };
    PreapprovalOrganism.prototype.processDontHaveApprovalAttemptError = function (error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                messages = this.translateProvider.get(this.config.i18n.modal.dontHaveApprovalAttempt);
                messages.description = this.translateProvider.get(this.config.i18n.modal.dontHaveApprovalAttemptDescription, {
                    limitedConsultations: String(error.data.attempts.maxAttempt),
                });
                this.approvalFrontService.showCardModal(messages);
                return [2 /*return*/];
            });
        });
    };
    PreapprovalOrganism.prototype.initPage = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setExceptionFactory();
                        this.viewModel.initForm(this.financingAmount);
                        return [4 /*yield*/, this.viewModel.processPreapproved(this.customerCredits)];
                    case 1:
                        _a.sent();
                        this.preapprovedLabel = !this.viewModel.isMinAmountPreaproved
                            ? this.messages.amount.title
                            : this.messages.amount.min;
                        if (this.showViewDetail) {
                            this.loadDetails();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    PreapprovalOrganism.prototype.loadDetails = function () {
        var message = this.translateProvider.get(this.messages.detail.monthlyPayment);
        this.viewModel.buildDetail(message);
        this.updateDetails();
    };
    PreapprovalOrganism.prototype.setAnalyticsIntentionOfApprovalUpFront = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var creditName, eventName, eventProps;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        creditName = this.translateProvider.get(this.config.i18n.creditName);
                        eventName = this.config.analytics.intentionOfApprovalUpFront.name + "_" + String(creditName[this.organismId]).toLowerCase();
                        eventProps = Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_7__["stringsArrayToObjectWithValues"])(this.config.analytics.intentionOfApprovalUpFront.params.dynatrace, [this.customerCredits.preapproved.product.id, this.viewModel.maxAmount]);
                        return [4 /*yield*/, this.dynatraceService.setAnalyticsOfEvent({ eventName: eventName, eventProps: eventProps, leave: true })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PreapprovalOrganism.prototype.onGetOperationParams = function () {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var response, error_2, message;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, 4, 6]);
                        return [4 /*yield*/, this.preapprovedService.loadingService.show()];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, this.creditInteractor.getOperationParams(this.customerCredits.preapproved.product.id)];
                    case 2:
                        response = _b.sent();
                        this.approvalFrontViewModel.info.isAvailable = this.showApprovalFront
                            ? response === null || response === void 0 ? void 0 : response.isAvailableApprovalFront : false;
                        this.viewModel.operationParams = (_a = this.operationParams) !== null && _a !== void 0 ? _a : response === null || response === void 0 ? void 0 : response.preapproved;
                        this.viewModel.bussyIndicator.show = false;
                        this.viewModel.bussyIndicator.error = '';
                        this.initPage();
                        return [3 /*break*/, 6];
                    case 3:
                        error_2 = _b.sent();
                        message = error_2.message;
                        if (error_2.constructor.name === _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["ValidateCreditsParamsException"].name) {
                            message = this.translateProvider.get(this.config.i18n.bussyIndicator);
                        }
                        this.viewModel.bussyIndicator.show = true;
                        this.viewModel.bussyIndicator.error = message;
                        this.dynatraceService.setCustomError(error_2);
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, this.preapprovedService.loadingService.hideWithoutFeedback()];
                    case 5:
                        _b.sent();
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    PreapprovalOrganism.prototype.setAnalyticsPreapproved = function () {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var creditName, eventName, eventProps;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        creditName = this.translateProvider.get(this.config.i18n.creditName);
                        eventName = this.config.analytics.intentionOfPreapproved.name + "_" + String(creditName[this.organismId]).toLowerCase();
                        eventProps = Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_7__["stringsArrayToObjectWithValues"])(this.config.analytics.intentionOfPreapproved.params.dynatrace, [
                            this.customerCredits.preapproved.product.id,
                            (_a = this.customerFinancialService.creditUserInfo) === null || _a === void 0 ? void 0 : _a.hasPreapproved.toString(),
                        ]);
                        return [4 /*yield*/, this.dynatraceService.setAnalyticsOfEvent({ eventName: eventName, eventProps: eventProps })];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PreapprovalOrganism.ɵfac = function PreapprovalOrganism_Factory(t) { return new (t || PreapprovalOrganism)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_4__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["CreditInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_preapproved_service__WEBPACK_IMPORTED_MODULE_14__["PreapprovedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_preapproval_view_model__WEBPACK_IMPORTED_MODULE_13__["PreapprovalViewModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_approval_front_approval_front_view_model__WEBPACK_IMPORTED_MODULE_10__["ApprovalFrontViewModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_approval_front_services_approval_front_service__WEBPACK_IMPORTED_MODULE_11__["ApprovalFrontService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_presentation_services__WEBPACK_IMPORTED_MODULE_3__["DynatraceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_customer_finacial_service__WEBPACK_IMPORTED_MODULE_9__["CustomerFinancialService"])); };
    PreapprovalOrganism.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PreapprovalOrganism, selectors: [["app-preapproval"]], viewQuery: function PreapprovalOrganism_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_nequi_ui__WEBPACK_IMPORTED_MODULE_6__["InputSelectControlComponent"], 1);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.installmentSelect = _t.first);
        } }, inputs: { organismId: "organismId", customerCredits: "customerCredits", financingAmount: "financingAmount", operationParams: "operationParams", showViewDetail: "showViewDetail", messages: "messages", showHelpButton: "showHelpButton", showApprovalFront: "showApprovalFront" }, outputs: { nextButtonCliked: "nextButtonCliked", goBackCliked: "goBackCliked", showHelpPressed: "showHelpPressed" }, decls: 17, vars: 11, consts: [[1, "nequi-header", "nequi-header--white"], ["slot", "start"], [3, "id", "click"], ["slot", "icon-only", "name", "arrow-back-outline"], [1, "nequi-header__title", "ion-text-start"], ["slot", "end"], [3, "id", "click", 4, "ngIf"], ["fullscreen", "true", "appFormContentStyle", "", "appAnimateTitleOnScroll", "", "scrollEvents", "true", 1, "ion-content--white", "ion-padding-horizontal"], [1, "nequi-title"], [3, "showReload", "reloadMessage", "onReload", 4, "ngIf"], [3, "formGroup", 4, "ngIf"], ["class", "nequi-footer ion-no-border", 4, "ngIf"], ["slot", "icon-only", "name", "help-outline"], [3, "showReload", "reloadMessage", "onReload"], [3, "formGroup"], [1, "margin-bottom-16", 3, "id", "icon", "title", "amount", "minAmount", "maxAmount", "stepAmount", "showDecimals", "formControl", "hideSlider", "amountChange"], [4, "ngIf"], ["formControlName", "term", 1, "margin-bottom-8", 3, "id", "hideFilter", "label", "options", "isDisabledClick", "isReadOnly", "click", "selected"], ["installmentSelect", ""], ["lines", "none"], ["for", "", 1, "preapproval__label-term-amount"], ["lines", "none", 1, "preapproval__term"], [1, "preapproval__term-desc"], [1, "preapproval__term-amount", 3, "nequiCurrencyStyle", "showDecimals"], [1, "preapproval__text-additional"], ["lines", "none", 1, "preapproval__under-amount", "margin-bottom-16"], [1, "preapproval__under-amount-text"], [1, "preapproval__detail"], [3, "title", "status", "details"], [1, "nequi-footer", "ion-no-border"], [1, "nequi-footer__toolbar"], ["class", "margin-bottom-8", 4, "ngIf"], ["expand", "block", "color", "guayaba", 1, "nequi-footer__button", 3, "id", "click"], ["class", "nequi-footer__button preapproval__footer-button-no-margin", "expand", "block", "color", "medianoche", "fill", "outline", 3, "id", "click", 4, "ngIf"], [1, "margin-bottom-8"], [1, "preapproval__footer-message"], ["expand", "block", "color", "medianoche", "fill", "outline", 1, "nequi-footer__button", "preapproval__footer-button-no-margin", 3, "id", "click"]], template: function PreapprovalOrganism_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PreapprovalOrganism_Template_ion_button_click_3_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-title", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-buttons", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, PreapprovalOrganism_ion_button_9_Template, 2, 1, "ion-button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-content", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-text", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, PreapprovalOrganism_app_busy_indicator_14_Template, 1, 2, "app-busy-indicator", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, PreapprovalOrganism_form_15_Template, 5, 15, "form", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, PreapprovalOrganism_ion_footer_16_Template, 7, 6, "ion-footer", 11);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "", ctx.organismId, "_go-back_button");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 7, ctx.messages.headerTitle), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showHelpButton);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 9, ctx.messages.headerTitle), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.viewModel.bussyIndicator.show);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.viewModel.isDataLoaded && !ctx.viewModel.bussyIndicator.show);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.viewModel.bussyIndicator.show);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonContent"], _ui_src_lib_directives_form_content_style_form_content_style_directive__WEBPACK_IMPORTED_MODULE_16__["FormContentStyleDirective"], _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_17__["AnimateTitleOnScrollDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonText"], _ui_src_lib_components_busy_indicator_busy_indicator_component__WEBPACK_IMPORTED_MODULE_18__["BusyIndicatorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormGroupDirective"], _components_card_money_slider_card_money_slider_component__WEBPACK_IMPORTED_MODULE_20__["CardMoneySliderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormControlDirective"], _ui_src_lib_controls_input_select_input_select_control_component__WEBPACK_IMPORTED_MODULE_21__["InputSelectControlComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormControlName"], _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonItem"], _ui_src_lib_directives_nequi_currency_style_nequi_currency_style_directive__WEBPACK_IMPORTED_MODULE_22__["NequiCurrencyStyleDirective"], _ui_src_lib_components_view_detail_view_detail_component__WEBPACK_IMPORTED_MODULE_23__["ViewDetailComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonCol"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__["TranslatePipe"]], styles: [".preapproval__card[_ngcontent-%COMP%] {\n  --background: var(--medianoche);\n  padding: 0px;\n  box-shadow: 0px 1px 1px var(--box-shadow-a-015);\n  margin-inline: 10px;\n}\n.preapproval__item[_ngcontent-%COMP%]::part(native) {\n  --padding-start: 0px;\n  --highlight-background: 0px;\n  --inner-padding-end: 0px;\n  --min-height: 35px;\n  background: var(--medianoche);\n}\n.preapproval__air-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  --background: transparent;\n  float: right;\n  right: 0;\n  top: 14px;\n}\n.preapproval__amount-text[_ngcontent-%COMP%] {\n  --color: var(--white);\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 19px;\n  margin-inline: 20px;\n}\n.preapproval__financing-amount[_ngcontent-%COMP%] {\n  color: var(--white);\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 28.8px;\n  margin-inline: 20px;\n}\n.preapproval__min-amount[_ngcontent-%COMP%], .preapproval__max-amount[_ngcontent-%COMP%] {\n  padding-inline: 20px;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 14.4px;\n  flex: none;\n  color: var(--white);\n  margin-inline: 0px;\n}\n.preapproval__slider-range[_ngcontent-%COMP%] {\n  --bar-height: 8px;\n  --bar-border-radius: 16px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  padding-inline: 20px;\n}\n.preapproval__slider-range[_ngcontent-%COMP%]::part(bar) {\n  background: var(--white);\n}\n.preapproval__slider-range[_ngcontent-%COMP%]::part(bar-active) {\n  background: linear-gradient(270deg, var(--guayaba) 2.45%, var(--ultravioleta) 98.16%);\n}\n.preapproval__slider-range[_ngcontent-%COMP%]::part(knob) {\n  border: 2px solid var(--white);\n  background: var(--guayaba);\n  top: calc(50% - (var(--knob-size) + 4px) / 2);\n  left: calc(50% - (var(--knob-size) + 4px) / 2);\n}\n.preapproval__label-term-amount[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 17px;\n  color: var(--gray-60);\n}\n.preapproval__term[_ngcontent-%COMP%]::part(native) {\n  --min-height: 28px;\n}\n.preapproval__term-desc[_ngcontent-%COMP%], .preapproval__term-amount[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 29px;\n  color: var(--medianoche);\n}\n.preapproval__text-additional[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 17px;\n  color: var(--gray-60);\n}\n.preapproval__under-amount[_ngcontent-%COMP%]::part(native) {\n  --padding-start: 0px;\n  --padding-top: 5px;\n}\n.preapproval__under-amount-text[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 14px;\n  color: var(--gray-alert-message);\n}\n.preapproval__detail[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.preapproval__footer[_ngcontent-%COMP%] {\n  min-height: 134px;\n}\n.preapproval__footer-message[_ngcontent-%COMP%] {\n  padding: 4px 16px;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 14px;\n  color: var(--gray-alert-message);\n}\n.preapproval__footer-button-no-margin[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvcHJlYXBwcm92YWwub3JnYW5pc20uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLCtDQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUlJO0VBQ0Usb0JBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQUZOO0FBTUU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQUpKO0FBT0U7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFMSjtBQVFFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBTko7QUFTRTtFQUVFLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQVJKO0FBV0U7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBVEo7QUFXSTtFQUNFLHdCQUFBO0FBVE47QUFZSTtFQUNFLHFGQUFBO0FBVk47QUFhSTtFQUNFLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2Q0FBQTtFQUNBLDhDQUFBO0FBWE47QUFlRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQWJKO0FBaUJJO0VBQ0Usa0JBQUE7QUFmTjtBQWtCSTtFQUVFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtBQWpCTjtBQXFCRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQW5CSjtBQXVCSTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7QUFyQk47QUF3Qkk7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7QUF0Qk47QUEwQkU7RUFDRSxnQkFBQTtBQXhCSjtBQTJCRTtFQUNFLGlCQUFBO0FBekJKO0FBMkJJO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7QUF6Qk47QUE0Qkk7RUFDRSxnQkFBQTtBQTFCTiIsImZpbGUiOiJwcmVhcHByb3ZhbC5vcmdhbmlzbS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByZWFwcHJvdmFsIHtcbiAgJl9fY2FyZCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1tZWRpYW5vY2hlKTtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAxcHggdmFyKC0tYm94LXNoYWRvdy1hLTAxNSk7XG4gICAgbWFyZ2luLWlubGluZTogMTBweDtcbiAgfVxuXG4gICZfX2l0ZW0ge1xuICAgICY6OnBhcnQobmF0aXZlKSB7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgIC0taGlnaGxpZ2h0LWJhY2tncm91bmQ6IDBweDtcbiAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgICAgIC0tbWluLWhlaWdodDogMzVweDtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLW1lZGlhbm9jaGUpO1xuICAgIH1cbiAgfVxuXG4gICZfX2Fpci1pY29uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMjtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDE0cHg7XG4gIH1cblxuICAmX19hbW91bnQtdGV4dCB7XG4gICAgLS1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAgIG1hcmdpbi1pbmxpbmU6IDIwcHg7XG4gIH1cblxuICAmX19maW5hbmNpbmctYW1vdW50IHtcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyOC44cHg7XG4gICAgbWFyZ2luLWlubGluZTogMjBweDtcbiAgfVxuXG4gICZfX21pbi1hbW91bnQsXG4gICZfX21heC1hbW91bnQge1xuICAgIHBhZGRpbmctaW5saW5lOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNC40cHg7XG4gICAgZmxleDogbm9uZTtcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIG1hcmdpbi1pbmxpbmU6IDBweDtcbiAgfVxuXG4gICZfX3NsaWRlci1yYW5nZSB7XG4gICAgLS1iYXItaGVpZ2h0OiA4cHg7XG4gICAgLS1iYXItYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgcGFkZGluZy1pbmxpbmU6IDIwcHg7XG5cbiAgICAmOjpwYXJ0KGJhcikge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICAgIH1cblxuICAgICY6OnBhcnQoYmFyLWFjdGl2ZSkge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgdmFyKC0tZ3VheWFiYSkgMi40NSUsIHZhcigtLXVsdHJhdmlvbGV0YSkgOTguMTYlKTtcbiAgICB9XG5cbiAgICAmOjpwYXJ0KGtub2IpIHtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXdoaXRlKTtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWd1YXlhYmEpO1xuICAgICAgdG9wOiBjYWxjKDUwJSAtICh2YXIoLS1rbm9iLXNpemUpICsgNHB4KSAvIDIpO1xuICAgICAgbGVmdDogY2FsYyg1MCUgLSAodmFyKC0ta25vYi1zaXplKSArIDRweCkgLyAyKTtcbiAgICB9XG4gIH1cblxuICAmX19sYWJlbC10ZXJtLWFtb3VudCB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAgIGNvbG9yOiB2YXIoLS1ncmF5LTYwKTtcbiAgfVxuXG4gICZfX3Rlcm0ge1xuICAgICY6OnBhcnQobmF0aXZlKSB7XG4gICAgICAtLW1pbi1oZWlnaHQ6IDI4cHg7XG4gICAgfVxuXG4gICAgJi1kZXNjLFxuICAgICYtYW1vdW50IHtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICBsaW5lLWhlaWdodDogMjlweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1tZWRpYW5vY2hlKTtcbiAgICB9XG4gIH1cblxuICAmX190ZXh0LWFkZGl0aW9uYWwge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICBjb2xvcjogdmFyKC0tZ3JheS02MCk7XG4gIH1cblxuICAmX191bmRlci1hbW91bnQge1xuICAgICY6OnBhcnQobmF0aXZlKSB7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgIC0tcGFkZGluZy10b3A6IDVweDtcbiAgICB9XG5cbiAgICAmLXRleHQge1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgICAgY29sb3I6IHZhcigtLWdyYXktYWxlcnQtbWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgJl9fZGV0YWlsIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICB9XG5cbiAgJl9fZm9vdGVyIHtcbiAgICBtaW4taGVpZ2h0OiAxMzRweDtcblxuICAgICYtbWVzc2FnZSB7XG4gICAgICBwYWRkaW5nOiA0cHggMTZweDtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1ncmF5LWFsZXJ0LW1lc3NhZ2UpO1xuICAgIH1cblxuICAgICYtYnV0dG9uLW5vLW1hcmdpbiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cbiAgfVxufVxuIl19 */"] });
    return PreapprovalOrganism;
}());



/***/ }),

/***/ "DepU":
/*!*************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/organisms/credits-organism.module.ts ***!
  \*************************************************************************************/
/*! exports provided: CreditsOrganismModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditsOrganismModule", function() { return CreditsOrganismModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/money-management/presentation */ "JFCQ");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/components.module */ "LwLH");
/* harmony import */ var _add_more_info_add_more_info_organism__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-more-info/add-more-info.organism */ "GV1l");
/* harmony import */ var _adjust_installments_adjust_installments_organism__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./adjust-installments/adjust-installments.organism */ "xtdo");
/* harmony import */ var _approval_front_approval_front_organism__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./approval-front/approval-front.organism */ "1lxh");
/* harmony import */ var _approval_front_pages_occupation_engine_occupation_engine_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./approval-front/pages/occupation-engine/occupation-engine.page */ "BkOq");
/* harmony import */ var _approval_front_pages_your_money_engine_your_money_engine_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./approval-front/pages/your-money-engine/your-money-engine.page */ "xpCB");
/* harmony import */ var _contract_contract_organism__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contract/contract.organism */ "Lnzr");
/* harmony import */ var _payment_payment_organism__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./payment/payment.organism */ "yDoo");
/* harmony import */ var _preapproval_preapproval_organism__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./preapproval/preapproval.organism */ "CQtc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");
















var DECLARATIONS = [
    _approval_front_approval_front_organism__WEBPACK_IMPORTED_MODULE_9__["ApprovalFrontOrganism"],
    _contract_contract_organism__WEBPACK_IMPORTED_MODULE_12__["ContractOrganism"],
    _preapproval_preapproval_organism__WEBPACK_IMPORTED_MODULE_14__["PreapprovalOrganism"],
    _payment_payment_organism__WEBPACK_IMPORTED_MODULE_13__["PaymentOrganism"],
    _adjust_installments_adjust_installments_organism__WEBPACK_IMPORTED_MODULE_8__["AdjustInstallmentsOrganism"],
    _add_more_info_add_more_info_organism__WEBPACK_IMPORTED_MODULE_7__["AddMoreInfoOrganism"],
];
var CreditsOrganismModule = /** @class */ (function () {
    function CreditsOrganismModule() {
    }
    CreditsOrganismModule.ɵfac = function CreditsOrganismModule_Factory(t) { return new (t || CreditsOrganismModule)(); };
    CreditsOrganismModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: CreditsOrganismModule });
    CreditsOrganismModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ imports: [[
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
                _nequi_ui__WEBPACK_IMPORTED_MODULE_4__["NequiUiModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                _nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_3__["FeaturesMoneyManagementModule"],
            ]] });
    return CreditsOrganismModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](CreditsOrganismModule, { declarations: [_approval_front_approval_front_organism__WEBPACK_IMPORTED_MODULE_9__["ApprovalFrontOrganism"],
        _contract_contract_organism__WEBPACK_IMPORTED_MODULE_12__["ContractOrganism"],
        _preapproval_preapproval_organism__WEBPACK_IMPORTED_MODULE_14__["PreapprovalOrganism"],
        _payment_payment_organism__WEBPACK_IMPORTED_MODULE_13__["PaymentOrganism"],
        _adjust_installments_adjust_installments_organism__WEBPACK_IMPORTED_MODULE_8__["AdjustInstallmentsOrganism"],
        _add_more_info_add_more_info_organism__WEBPACK_IMPORTED_MODULE_7__["AddMoreInfoOrganism"], _approval_front_pages_occupation_engine_occupation_engine_page__WEBPACK_IMPORTED_MODULE_10__["OccupationEnginePage"], _approval_front_pages_your_money_engine_your_money_engine_page__WEBPACK_IMPORTED_MODULE_11__["YourMoneyEnginePage"]], imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
        _nequi_ui__WEBPACK_IMPORTED_MODULE_4__["NequiUiModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
        _nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_3__["FeaturesMoneyManagementModule"]], exports: [_approval_front_approval_front_organism__WEBPACK_IMPORTED_MODULE_9__["ApprovalFrontOrganism"],
        _contract_contract_organism__WEBPACK_IMPORTED_MODULE_12__["ContractOrganism"],
        _preapproval_preapproval_organism__WEBPACK_IMPORTED_MODULE_14__["PreapprovalOrganism"],
        _payment_payment_organism__WEBPACK_IMPORTED_MODULE_13__["PaymentOrganism"],
        _adjust_installments_adjust_installments_organism__WEBPACK_IMPORTED_MODULE_8__["AdjustInstallmentsOrganism"],
        _add_more_info_add_more_info_organism__WEBPACK_IMPORTED_MODULE_7__["AddMoreInfoOrganism"]] }); })();


/***/ }),

/***/ "GV1l":
/*!**************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/organisms/add-more-info/add-more-info.organism.ts ***!
  \**************************************************************************************************/
/*! exports provided: AddMoreInfoOrganism */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMoreInfoOrganism", function() { return AddMoreInfoOrganism; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");








function AddMoreInfoOrganism_h2_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx_r0.title));
} }
var AddMoreInfoOrganism = /** @class */ (function () {
    function AddMoreInfoOrganism(bottomSheetController) {
        this.bottomSheetController = bottomSheetController;
        this.theme = _nequi_ui__WEBPACK_IMPORTED_MODULE_1__["Theme"].LIGHT;
        this.THEMES = _nequi_ui__WEBPACK_IMPORTED_MODULE_1__["Theme"];
    }
    AddMoreInfoOrganism.prototype.ngOnInit = function () {
        this.initForm();
    };
    AddMoreInfoOrganism.prototype.hide = function () {
        this.bottomSheetController.dismiss();
    };
    AddMoreInfoOrganism.prototype.initForm = function () {
        this.moreInfo = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]);
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            moreInfo: this.moreInfo,
        });
    };
    AddMoreInfoOrganism.ɵfac = function AddMoreInfoOrganism_Factory(t) { return new (t || AddMoreInfoOrganism)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_1__["BottomSheetController"])); };
    AddMoreInfoOrganism.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AddMoreInfoOrganism, selectors: [["app-add-more-info"]], inputs: { title: "title", label: "label", theme: "theme", actionLabel: "actionLabel", action: "action" }, decls: 18, vars: 13, consts: [[1, "add-more-info__toolbar"], ["slot", "end"], ["id", "add-more-info_close_button", 3, "color", "click"], ["slot", "icon-only", "name", "close-outline"], ["fullscreen", "true", "scrollY", "false", 1, "add-more-info__content", "ion-padding-horizontal"], ["class", "add-more-info__title", 4, "ngIf"], [3, "formGroup"], [1, "nequi-item"], ["position", "floating", 1, "nequi-item__label"], ["formControlName", "moreInfo", "rows", "3", 1, "nequi-item__input"], [1, "nequi-footer", "nequi-footer--padding-confirm", "confirm__footer"], ["id", "add-more-info_confirm_button", "expand", "block", "color", "guayaba", 1, "nequi-footer__button", 3, "disabled", "click"], [1, "add-more-info__title"]], template: function AddMoreInfoOrganism_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddMoreInfoOrganism_Template_ion_button_click_3_listener() { return ctx.hide(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, AddMoreInfoOrganism_h2_6_Template, 3, 3, "h2", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "form", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-item", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-label", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "ion-textarea", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ion-footer", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ion-button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddMoreInfoOrganism_Template_ion_button_click_15_listener() { return ctx.action(ctx.form); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("nequi-header nequi-header--", ctx.theme, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", ctx.theme !== ctx.THEMES.LIGHT ? ctx.THEMES.LIGHT : "");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.title);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 9, ctx.label), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.form.valid);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 11, ctx.actionLabel), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTextarea"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonFooter"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: ["[_nghost-%COMP%] {\n  position: relative;\n}\n\n.nequi-header--light[_ngcontent-%COMP%]   .info-list__toolbar[_ngcontent-%COMP%] {\n  --background: var(--white);\n  --color: var(--medianoche);\n}\n\n.nequi-header--dark[_ngcontent-%COMP%]   .info-list__toolbar[_ngcontent-%COMP%] {\n  --background: var(--medianoche);\n  --color: var(--white);\n}\n\n.add-more-info--light[_ngcontent-%COMP%] {\n  color: var(--medianoche);\n}\n\n.add-more-info--dark[_ngcontent-%COMP%] {\n  color: var(--white);\n}\n\n.add-more-info__content[_ngcontent-%COMP%] {\n  --background: var(--transparent);\n}\n\n.add-more-info__title[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n}\n\n.nequi-item[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvYWRkLW1vcmUtaW5mby5vcmdhbmlzbS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjs7QUFJSTtFQUNFLDBCQUFBO0VBQ0EsMEJBQUE7QUFETjs7QUFNSTtFQUNFLCtCQUFBO0VBQ0EscUJBQUE7QUFKTjs7QUFVRTtFQUNFLHdCQUFBO0FBUEo7O0FBVUU7RUFDRSxtQkFBQTtBQVJKOztBQVdFO0VBQ0UsZ0NBQUE7QUFUSjs7QUFZRTtFQUNFLG1CQUFBO0FBVko7O0FBYUE7RUFDRSxtQkFBQTtBQVZGIiwiZmlsZSI6ImFkZC1tb3JlLWluZm8ub3JnYW5pc20uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubmVxdWktaGVhZGVyIHtcbiAgJi0tbGlnaHQge1xuICAgIC5pbmZvLWxpc3RfX3Rvb2xiYXIge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gICAgICAtLWNvbG9yOiB2YXIoLS1tZWRpYW5vY2hlKTtcbiAgICB9XG4gIH1cblxuICAmLS1kYXJrIHtcbiAgICAuaW5mby1saXN0X190b29sYmFyIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tbWVkaWFub2NoZSk7XG4gICAgICAtLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgfVxuICB9XG59XG5cbi5hZGQtbW9yZS1pbmZvIHtcbiAgJi0tbGlnaHQge1xuICAgIGNvbG9yOiB2YXIoLS1tZWRpYW5vY2hlKTtcbiAgfVxuXG4gICYtLWRhcmsge1xuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIH1cblxuICAmX19jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcbiAgfVxuXG4gICZfX3RpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICB9XG59XG4ubmVxdWktaXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG59XG4iXX0= */"] });
    return AddMoreInfoOrganism;
}());



/***/ }),

/***/ "HCzv":
/*!*********************************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/organisms/approval-front/pages/occupation-engine/occupation-engine.view-model.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: OccupationEngineViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OccupationEngineViewModel", function() { return OccupationEngineViewModel; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _constants_occupation_engine_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/occupation-engine-types */ "CIIQ");


var CONTRACT_CODE_DEFAULT = '01';
var OccupationEngineViewModel = /** @class */ (function () {
    function OccupationEngineViewModel() {
    }
    OccupationEngineViewModel.prototype.initForm = function (data) {
        var _a, _b, _c;
        this.occupation = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]((_a = data === null || data === void 0 ? void 0 : data.occupation) !== null && _a !== void 0 ? _a : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]);
        this.sinceDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]((_b = data === null || data === void 0 ? void 0 : data.sinceDate) !== null && _b !== void 0 ? _b : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]);
        this.contract = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]((_c = data === null || data === void 0 ? void 0 : data.contract) !== null && _c !== void 0 ? _c : { code: CONTRACT_CODE_DEFAULT, name: '' }, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
        ]);
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            occupation: this.occupation,
            sinceDate: this.sinceDate,
            contract: this.contract,
        });
    };
    OccupationEngineViewModel.prototype.setOccupationsAndContracts = function (data) {
        this.contractList = data.contractList;
        this.occupationList = data.occupationList;
    };
    OccupationEngineViewModel.prototype.validateOccupation = function (value) {
        if ((value === null || value === void 0 ? void 0 : value.type) === _constants_occupation_engine_types__WEBPACK_IMPORTED_MODULE_1__["OccupacionEngineTypes"].RETIRED) {
            this.showSinceDateField = false;
            this.showContractField = false;
        }
        if ((value === null || value === void 0 ? void 0 : value.type) === _constants_occupation_engine_types__WEBPACK_IMPORTED_MODULE_1__["OccupacionEngineTypes"].INDEPENDENT) {
            this.showSinceDateField = true;
            this.showContractField = false;
        }
        if ((value === null || value === void 0 ? void 0 : value.type) === _constants_occupation_engine_types__WEBPACK_IMPORTED_MODULE_1__["OccupacionEngineTypes"].EMPLOYEE) {
            this.showSinceDateField = true;
            this.showContractField = true;
        }
    };
    OccupationEngineViewModel.prototype.resetForm = function (value) {
        this.validateOccupation(value);
        this.form.patchValue({
            sinceDate: new Date(),
            contract: { code: CONTRACT_CODE_DEFAULT, name: '' },
        });
    };
    OccupationEngineViewModel.prototype.isValidForm = function () {
        if (!this.showSinceDateField) {
            return this.occupation.valid;
        }
        if (!this.showContractField) {
            return this.occupation.valid && this.sinceDate.valid;
        }
        return this.form.valid;
    };
    return OccupationEngineViewModel;
}());



/***/ }),

/***/ "KTg/":
/*!****************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/organisms/payment/payment.view-model.ts ***!
  \****************************************************************************************/
/*! exports provided: PaymentViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentViewModel", function() { return PaymentViewModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/utils/string */ "p6rB");
/* harmony import */ var _services_payment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/payment.service */ "l8yf");
/* harmony import */ var _custom_validators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./custom-validators */ "8tJ0");
/* harmony import */ var _payment_type__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./payment.type */ "iwuA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");














var PaymentViewModel = /** @class */ (function () {
    function PaymentViewModel(currencyPipe, paymentService, currencyConfigProvider, moduleConfigProvider) {
        this.currencyPipe = currencyPipe;
        this.paymentService = paymentService;
        this.currencyConfigProvider = currencyConfigProvider;
        this.moduleConfigProvider = moduleConfigProvider;
        this.isContentVisible = true;
        this.chip = {
            isVisible: false,
            text: '',
            class: '',
        };
        this.paymentText = {
            message: '',
            placeholder: '',
        };
        this.clickStatus = true;
        this.customValidators = new _custom_validators__WEBPACK_IMPORTED_MODULE_7__["CustomValidatorsForm"]();
    }
    PaymentViewModel.prototype.setConfig = function (_config) {
        this.config = _config;
    };
    PaymentViewModel.prototype.setCreditInfo = function () {
        this.installmentPending = this.credit.installment.totalPending;
        this.paymentTime = this.validateDate();
        this.overdueFee = this.getExpiredFeesValue();
        this.lastPayment = this.credit.endAt;
    };
    PaymentViewModel.prototype.initForm = function () {
        this.paymentControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', this.validatePayTime());
        this.payFeeControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false, []);
        this.payCompleteControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false, []);
        this.pocketControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            paymentControl: this.paymentControl,
            payTodayFeeControl: this.payFeeControl,
            payCompleteControl: this.payCompleteControl,
        });
    };
    PaymentViewModel.prototype.buildItems = function (messages, pocketInfo, currencyPipe, datePipe) {
        var pocket = {
            isPocket: true,
            title: messages.items.pocket,
            name: pocketInfo.name,
            image: pocketInfo.imageUrl,
            icon: pocketInfo.iconUrl,
        };
        var items = [];
        if (this.paymentTime === _payment_type__WEBPACK_IMPORTED_MODULE_8__["PaymentType"].PAY_TODAY_FEE) {
            items = this.buildPayTodayItems(messages, items, currencyPipe);
        }
        if (this.paymentTime === _payment_type__WEBPACK_IMPORTED_MODULE_8__["PaymentType"].OVERDUE_FEE) {
            items = this.buildPayOverdueItems(messages, items, currencyPipe);
        }
        if (this.paymentTime === _payment_type__WEBPACK_IMPORTED_MODULE_8__["PaymentType"].PAYMENT) {
            items = this.buildTotalPayItems(messages, items, currencyPipe, datePipe);
        }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(items, [pocket]);
    };
    PaymentViewModel.prototype.checkPayFee = function () {
        if (!this.clickStatus) {
            return;
        }
        this.clickStatus = false;
        if (this.paymentTime === _payment_type__WEBPACK_IMPORTED_MODULE_8__["PaymentType"].PAY_TODAY_FEE) {
            this.checkPayFeeStatus({
                message: this.config.i18n.payment.payTodayFeeHelpUnchecked,
                placeholder: this.config.i18n.payment.paySomething,
            }, {
                message: this.config.i18n.payment.payTodayFeeHelpChecked,
                placeholder: this.config.i18n.payment.payTodayFee,
            }, _payment_type__WEBPACK_IMPORTED_MODULE_8__["PaymentType"].PAY_TODAY_FEE, this.credit.installment.next.value);
            return;
        }
        if (this.paymentTime === _payment_type__WEBPACK_IMPORTED_MODULE_8__["PaymentType"].OVERDUE_FEE) {
            this.checkPayFeeStatus({
                message: this.config.i18n.payment.payTodayFeeHelpUnchecked,
                placeholder: this.config.i18n.payment.paySomething,
            }, {
                message: this.config.i18n.payment.payOverdueFeeHelpChecked,
                placeholder: this.config.i18n.payment.payOverdueFee,
            }, _payment_type__WEBPACK_IMPORTED_MODULE_8__["PaymentType"].OVERDUE_FEE, this.overdueFee);
        }
    };
    PaymentViewModel.prototype.checkPayComplete = function () {
        if (!this.clickStatus) {
            return;
        }
        this.clickStatus = false;
        if (this.paymentTime === _payment_type__WEBPACK_IMPORTED_MODULE_8__["PaymentType"].PAYMENT) {
            this.checkPayCompleteStatus({
                message: this.config.i18n.payment.paymentHelp,
                placeholder: this.config.i18n.payment.payment,
            }, {
                message: '',
                placeholder: this.config.i18n.payment.payment,
            });
            return;
        }
        if (this.paymentTime === _payment_type__WEBPACK_IMPORTED_MODULE_8__["PaymentType"].PAY_TODAY_FEE) {
            this.checkPayCompleteStatus({
                message: this.config.i18n.payment.payTodayFeeHelpUnchecked,
                placeholder: this.config.i18n.payment.paySomething,
            }, {
                message: '',
                placeholder: this.config.i18n.payment.paySomething,
            });
            return;
        }
        if (this.paymentTime === _payment_type__WEBPACK_IMPORTED_MODULE_8__["PaymentType"].OVERDUE_FEE) {
            this.checkPayCompleteStatus({
                message: this.config.i18n.payment.payTodayFeeHelpUnchecked,
                placeholder: this.config.i18n.payment.paySomething,
            }, {
                message: this.config.i18n.payment.payTodayFeeHelpUnchecked,
                placeholder: this.config.i18n.payment.paySomething,
            });
        }
    };
    PaymentViewModel.prototype.getPageConfiguration = function (errorMessage, i18nOverdueFee) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.errorMessages = {
                    required: '',
                    min: errorMessage.minFee,
                    max: errorMessage.maxTotalPayment,
                    maxFee: Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_5__["createFormat"])(errorMessage.maxFee, [
                        this.currencyPipe.transform(this.credit.maxPaymentValue),
                    ]),
                };
                if (this.paymentTime === _payment_type__WEBPACK_IMPORTED_MODULE_8__["PaymentType"].PAY_TODAY_FEE) {
                    this.selectedPayType = _payment_type__WEBPACK_IMPORTED_MODULE_8__["PaymentType"].PAY_ALL;
                    this.chip.isVisible = true;
                    this.chip.text = this.config.i18n.chip.payTodayFee;
                    this.chip.class = this.config.chipsClass.yellow;
                    this.checkPayFee();
                    this.paymentService.showPayTodayModal(this.credit.installment.next.date, this.config.i18n.toast.payToday, this.config.i18n.modal.payTodayFee, this.credit.installment.next.value);
                    this.feePaymentMessage = this.config.i18n.payment.payTodayFee;
                    return [2 /*return*/];
                }
                if (this.paymentTime === _payment_type__WEBPACK_IMPORTED_MODULE_8__["PaymentType"].OVERDUE_FEE) {
                    this.selectedPayType = _payment_type__WEBPACK_IMPORTED_MODULE_8__["PaymentType"].PAY_ALL;
                    this.chip.isVisible = true;
                    this.chip.text = this.config.i18n.chip.overdueFee;
                    this.chip.class = this.config.chipsClass.red;
                    this.checkPayFee();
                    this.paymentService.showModalOverdueFee(i18nOverdueFee, this.installmentPending);
                    this.feePaymentMessage = this.config.i18n.payment.payOverdueFee;
                    this.errorMessages = {
                        required: '',
                        min: errorMessage.minFee,
                        max: errorMessage.maxTotalPayment,
                        maxFee: Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_5__["createFormat"])(errorMessage.maxFee, [
                            this.currencyPipe.transform(this.credit.maxPaymentValue),
                        ]),
                        maxOverdueFee: Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_5__["createFormat"])(errorMessage.maxOverdueFee, [
                            this.currencyPipe.transform(this.overdueFee),
                        ]),
                    };
                    return [2 /*return*/];
                }
                this.paymentService.showFirstTimeMessage(this.moduleConfigProvider.applicationData.homeIsShowFirstMessage, this.config.i18n.toast.payment);
                this.paymentTime = _payment_type__WEBPACK_IMPORTED_MODULE_8__["PaymentType"].PAYMENT;
                this.selectedPayType = _payment_type__WEBPACK_IMPORTED_MODULE_8__["PaymentType"].PAYMENT;
                this.chip.isVisible = false;
                this.chip.text = '';
                this.chip.class = '';
                this.paymentText = {
                    message: this.config.i18n.payment.paymentHelp,
                    placeholder: this.config.i18n.payment.payment,
                };
                this.paymentControl.setValue(0);
                return [2 /*return*/];
            });
        });
    };
    PaymentViewModel.prototype.checkPayCompleteStatus = function (uncheckText, checkText) {
        if (this.selectedPayType === _payment_type__WEBPACK_IMPORTED_MODULE_8__["PaymentType"].PAY_ALL) {
            this.uncheckPaymentStatus(true, uncheckText);
            return;
        }
        this.checkPaymentStatus(true, checkText, _payment_type__WEBPACK_IMPORTED_MODULE_8__["PaymentType"].PAY_ALL, this.credit.balance);
    };
    PaymentViewModel.prototype.checkPayFeeStatus = function (uncheckText, checkText, paymentType, amount) {
        if (this.selectedPayType === _payment_type__WEBPACK_IMPORTED_MODULE_8__["PaymentType"].PAY_TODAY_FEE ||
            this.selectedPayType === _payment_type__WEBPACK_IMPORTED_MODULE_8__["PaymentType"].OVERDUE_FEE) {
            this.uncheckPaymentStatus(false, uncheckText);
            return;
        }
        this.checkPaymentStatus(false, checkText, paymentType, amount);
    };
    PaymentViewModel.prototype.uncheckPaymentStatus = function (hasPayComplete, texts) {
        this.paymentText = texts;
        this.selectedPayType = _payment_type__WEBPACK_IMPORTED_MODULE_8__["PaymentType"].PAYMENT;
        if (hasPayComplete) {
            this.payCompleteControl.setValue(false);
        }
        else {
            this.payFeeControl.setValue(false);
        }
        this.paymentControl.enable();
        this.paymentControl.setValue(0);
        this.paymentAmount = 0;
        this.clickStatus = true;
        this.decimalLimitValue = this.currencyConfigProvider.decimalLimit;
        this.form.markAsPristine();
        this.form.markAsUntouched();
    };
    PaymentViewModel.prototype.checkPaymentStatus = function (hasPayComplete, texts, payType, amount) {
        this.paymentText = texts;
        this.selectedPayType = payType;
        if (hasPayComplete) {
            this.payCompleteControl.setValue(true);
        }
        else {
            this.payFeeControl.setValue(true);
        }
        this.paymentControl.disable();
        this.paymentControl.setValue(amount);
        this.paymentAmount = amount;
        this.decimalLimitValue = this.currencyConfigProvider.visualDecimalLimit;
        if (hasPayComplete) {
            this.payFeeControl.setValue(false);
        }
        else {
            this.payCompleteControl.setValue(false);
        }
        this.clickStatus = true;
        this.form.markAsPristine();
        this.form.markAsUntouched();
    };
    PaymentViewModel.prototype.validatePayTime = function () {
        if (this.paymentTime === _payment_type__WEBPACK_IMPORTED_MODULE_8__["PaymentType"].OVERDUE_FEE) {
            return [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(this.credit.balance),
                this.customValidators.maxFeeValidator(this.credit.maxPaymentValue),
                this.customValidators.maxOverdueFeeValidator(this.overdueFee),
            ];
        }
        return [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(this.credit.balance),
            this.customValidators.maxFeeValidator(this.credit.maxPaymentValue),
        ];
    };
    PaymentViewModel.prototype.buildPayTodayItems = function (messages, items, currencyPipe) {
        items.push({
            label: messages.items.amount,
            value: currencyPipe.transform(this.paymentAmount),
        });
        var _a = this.credit.installment, total = _a.total, totalPaid = _a.totalPaid;
        if (this.selectedPayType === _payment_type__WEBPACK_IMPORTED_MODULE_8__["PaymentType"].PAYMENT) {
            items.push({
                label: messages.items.interestNormal.label,
                value: currencyPipe.transform(this.normalInterest),
            }, {
                label: messages.items.installmentsToPay,
                value: String(total - totalPaid),
            });
        }
        if (this.selectedPayType === _payment_type__WEBPACK_IMPORTED_MODULE_8__["PaymentType"].PAY_TODAY_FEE) {
            this.fees = this.principalPending;
            items.push({
                label: messages.items.insurance.label,
                value: currencyPipe.transform(this.credit.feesOutstanding),
                helpMessage: Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_5__["createFormat"])(messages.items.insurance.message, [
                    this.currencyPipe.transform(this.credit.loanDemandOutstandingDetails.fees),
                ]),
            }, {
                label: messages.items.interestArrears.label,
                value: currencyPipe.transform(this.penaltyInterest),
                helpMessage: messages.items.interestArrears.message,
            }, {
                label: messages.items.interestNormal.label,
                value: currencyPipe.transform(this.normalInterest),
            }, {
                label: messages.items.capitalToPay.label,
                value: currencyPipe.transform(this.fees),
                helpMessage: messages.items.capitalToPay.message,
            }, {
                label: messages.items.loanDebt,
                value: currencyPipe.transform(this.credit.balance),
            }, {
                label: messages.items.installmentsToPay,
                value: String(total - (totalPaid + 1)),
            });
        }
        if (this.selectedPayType === _payment_type__WEBPACK_IMPORTED_MODULE_8__["PaymentType"].PAY_ALL) {
            items.push({
                label: messages.items.loanDebt,
                value: currencyPipe.transform(this.credit.balance),
            }, {
                label: messages.items.interestNormalPayAll.label,
                value: currencyPipe.transform(this.normalInterest),
                helpMessage: messages.items.interestNormalPayAll.message,
            });
        }
        return items;
    };
    PaymentViewModel.prototype.buildPayOverdueItems = function (messages, items, currencyPipe) {
        var amountToPayItem = {
            label: messages.items.amount,
            value: currencyPipe.transform(this.paymentAmount),
        };
        var _a = this.credit.installment, total = _a.total, totalPaid = _a.totalPaid;
        if (this.selectedPayType === _payment_type__WEBPACK_IMPORTED_MODULE_8__["PaymentType"].PAYMENT) {
            items.push(amountToPayItem, {
                label: messages.items.loanDebt,
                value: currencyPipe.transform(this.credit.balance),
            }, {
                label: messages.items.installmentsToPay,
                value: String(total - totalPaid),
            });
        }
        if (this.selectedPayType === _payment_type__WEBPACK_IMPORTED_MODULE_8__["PaymentType"].OVERDUE_FEE) {
            items.push(amountToPayItem, {
                label: messages.items.insuranceToPay.label,
                value: currencyPipe.transform(this.credit.feesOutstanding),
                helpMessage: Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_5__["createFormat"])(messages.items.insuranceToPay.message, [
                    this.currencyPipe.transform(this.credit.loanDemandOutstandingDetails.fees),
                ]),
            }, {
                label: messages.items.interestArrears.labelOverdue,
                value: currencyPipe.transform(this.penaltyInterest),
                helpMessage: messages.items.interestArrears.message,
            }, {
                label: messages.items.interestNormal.labelOverdue,
                value: currencyPipe.transform(this.normalInterest),
                helpMessage: messages.items.interestNormal.message,
            }, {
                label: messages.items.loanDebt,
                value: currencyPipe.transform(this.credit.balance),
            }, {
                label: messages.items.installmentsToPay,
                value: String(total - (totalPaid + 1)),
            });
        }
        if (this.selectedPayType === _payment_type__WEBPACK_IMPORTED_MODULE_8__["PaymentType"].PAY_ALL) {
            items.push({
                label: messages.items.loanDebt,
                value: currencyPipe.transform(this.credit.balance),
            }, {
                label: messages.items.interestNormal.labelOverdue,
                value: currencyPipe.transform(this.normalInterest),
                helpMessage: messages.items.interestNormal.message,
            }, {
                label: messages.items.interestArrears.labelOverdue,
                value: currencyPipe.transform(this.penaltyInterest),
                helpMessage: messages.items.interestArrears.message,
            }, {
                label: messages.items.insuranceToPay.label,
                value: currencyPipe.transform(this.credit.feesOutstanding),
                helpMessage: Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_5__["createFormat"])(messages.items.insuranceToPay.message2, [
                    this.currencyPipe.transform(this.credit.loanDemandOutstandingDetails.fees),
                ]),
            }, amountToPayItem);
        }
        return items;
    };
    PaymentViewModel.prototype.buildTotalPayItems = function (messages, items, currencyPipe, datePipe) {
        var amountToPayItem = {
            label: messages.items.amount,
            value: currencyPipe.transform(this.paymentAmount),
        };
        var _a = this.credit, normalInterest = _a.normalInterest, penaltyInterest = _a.penaltyInterest;
        items.push(amountToPayItem, {
            label: messages.items.loanDebt,
            value: currencyPipe.transform(normalInterest),
        });
        if (this.selectedPayType === _payment_type__WEBPACK_IMPORTED_MODULE_8__["PaymentType"].PAY_ALL) {
            items.push({
                label: messages.items.interestNormalPayAll.label,
                helpMessage: messages.items.interestNormalPayAll.message,
                value: currencyPipe.transform(penaltyInterest),
            }, {
                label: messages.items.insuranceToPay.label,
                value: currencyPipe.transform(this.credit.feesOutstanding),
            });
        }
        items.push({
            label: messages.items.date,
            value: datePipe.transform(new Date(this.credit.endAt.toString())),
        });
        return items;
    };
    PaymentViewModel.prototype.validateDate = function () {
        var today = new Date();
        var nextInstallmentDate = this.credit.installment.next.date;
        today.setHours(0, 0, 0, 0);
        nextInstallmentDate.setHours(0, 0, 0, 0);
        if (this.credit.isExpired) {
            return _payment_type__WEBPACK_IMPORTED_MODULE_8__["PaymentType"].OVERDUE_FEE;
        }
        if (today.getTime() === nextInstallmentDate.getTime()) {
            return _payment_type__WEBPACK_IMPORTED_MODULE_8__["PaymentType"].PAY_TODAY_FEE;
        }
        return _payment_type__WEBPACK_IMPORTED_MODULE_8__["PaymentType"].PAYMENT;
    };
    PaymentViewModel.prototype.getExpiredFeesValue = function () {
        this.fees = this.credit.feesOutstanding;
        if (this.credit.installment.total !== this.credit.totDmds) {
            this.fees = this.credit.loanDemandOutstandingDetails.fees;
        }
        this.normalInterest = this.credit.loanDemandOutstandingDetails.normalInterest;
        this.penaltyInterest = this.credit.loanDemandOutstandingDetails.penaltyInterest;
        this.principalPending = this.credit.loanDemandOutstandingDetails.principalPending;
        return this.fees + this.normalInterest + this.penaltyInterest + this.principalPending;
    };
    PaymentViewModel.ɵfac = function PaymentViewModel_Factory(t) { return new (t || PaymentViewModel)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_services_payment_service__WEBPACK_IMPORTED_MODULE_6__["PaymentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_4__["CurrencyConfigProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_3__["ModuleConfigProvider"])); };
    PaymentViewModel.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: PaymentViewModel, factory: PaymentViewModel.ɵfac });
    return PaymentViewModel;
}());



/***/ }),

/***/ "Lnzr":
/*!****************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/organisms/contract/contract.organism.ts ***!
  \****************************************************************************************/
/*! exports provided: ContractOrganism */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractOrganism", function() { return ContractOrganism; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _services_credit_info_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/credit-info.model */ "9FmH");
/* harmony import */ var _constants_contract_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants/contract-type */ "dKxq");
/* harmony import */ var _contract_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contract.config */ "40mb");
/* harmony import */ var _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../ui/src/lib/directives/animate-title-on-scroll/animate-title-on-scroll.directive */ "qbWi");
/* harmony import */ var _ui_src_lib_pipes_trust_html_trust_html_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../ui/src/lib/pipes/trust-html/trust-html.pipe */ "FKD1");

















function ContractOrganism_ion_content_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-content", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-text", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-list", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-item", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "trustHTML");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.messages == null ? null : ctx_r0.messages.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 2, ctx_r0.agreement), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function ContractOrganism_ion_footer_8_Template(rf, ctx) { if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-footer", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-checkbox", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ContractOrganism_ion_footer_8_Template_ion_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.acceptAgreement(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r1.acceptAgreementCheckbox);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.messages == null ? null : ctx_r1.messages.checkbox, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !(ctx_r1.acceptAgreementCheckbox == null ? null : ctx_r1.acceptAgreementCheckbox.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.messages.button, " ");
} }
var ContractOrganism = /** @class */ (function () {
    function ContractOrganism(translateProvider, navController, creditInfoModel, currencyPipe, moduleConfigProvider, percentPipe) {
        this.translateProvider = translateProvider;
        this.navController = navController;
        this.creditInfoModel = creditInfoModel;
        this.currencyPipe = currencyPipe;
        this.moduleConfigProvider = moduleConfigProvider;
        this.percentPipe = percentPipe;
        this.accepted = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.config = _contract_config__WEBPACK_IMPORTED_MODULE_8__["ContractConfig"];
    }
    ContractOrganism.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.initForm();
                        return [4 /*yield*/, this.translateProvider.loadModule(this.moduleConfigProvider.i18n.moduleKey)];
                    case 1:
                        _a.sent();
                        this.initPage();
                        return [2 /*return*/];
                }
            });
        });
    };
    ContractOrganism.prototype.goBack = function () {
        this.navController.back();
    };
    ContractOrganism.prototype.acceptAgreement = function () {
        if (this.acceptAgreementCheckbox.value) {
            this.accepted.emit(true);
        }
    };
    ContractOrganism.prototype.initForm = function () {
        this.acceptAgreementCheckbox = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
    };
    ContractOrganism.prototype.initPage = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (!this.messages) {
                    this.messages = this.translateProvider.get(this.config.i18n[this.type]);
                }
                if (!this.agreement) {
                    this.agreement = this.creditInfoModel.agreement.agreement;
                    this.replaceVariable();
                }
                return [2 /*return*/];
            });
        });
    };
    ContractOrganism.prototype.replaceVariable = function () {
        var contractHTML = this.agreement;
        var installmentDay = '';
        var installmentPeriods = 0;
        var installmetMinusThree = 0;
        var commissionPercentage = this.creditInfoModel.creditFeatureInfo.commissionPercentage;
        var installmentValue = this.currencyPipe.transform(this.creditInfoModel.creditFeatureInfo.monthlyFee);
        var approvedValue = this.currencyPipe
            .transform(this.creditInfoModel.creditFeatureInfo.loanAmount)
            .replace(this.config.replaceString.space, '');
        var insuranceValue = this.currencyPipe
            .transform(this.creditInfoModel.loanPortfolioInfo.monthlyInsuranceAmount)
            .replace(this.config.replaceString.space, '');
        var installmentNum = this.currencyPipe.transform(this.creditInfoModel.creditFeatureInfo.installment);
        var totalValue = this.currencyPipe.transform(this.creditInfoModel.creditFeatureInfo.loanAmount +
            this.creditInfoModel.creditFeatureInfo.monthlyFee +
            this.creditInfoModel.loanPortfolioInfo.monthlyInsuranceAmount);
        var installment = this.currencyPipe
            .transform(this.creditInfoModel.creditFeatureInfo.loanAmount +
            this.creditInfoModel.creditFeatureInfo.monthlyFee)
            .replace(this.config.replaceString.space, '');
        var monthlyInterestRate = this.percentPipe
            .transform(this.creditInfoModel.creditFeatureInfo.monthlyInterestRate, this.config.pipeFormat.percent)
            .replace(this.config.replaceString.space, '');
        var expirationDateText = this.creditInfoModel.creditFeatureInfo.expirationDateText.replace(this.config.replaceString.repeatedText, '');
        this.agreement = contractHTML
            .replace(this.config.replaceString.insuranceValue, insuranceValue)
            .replace(this.config.replaceString.value, approvedValue)
            .replace(this.config.replaceString.totalValue, totalValue)
            .replace(this.config.replaceString.installmentValue, installmentValue)
            .replace(this.config.replaceString.numberInstallments, installmentNum)
            .replace(this.config.replaceString.installmentDay, installmentDay)
            .replace(this.config.replaceString.installmentDay, String(installmentPeriods))
            .replace(this.config.replaceString.installmentDay, String(installmetMinusThree))
            .replace(this.config.replaceString.monthlyInterestRate, monthlyInterestRate)
            .replace(this.config.replaceString.annualEffectiveRate, String(commissionPercentage))
            .replace(this.config.replaceString.paymentDate, expirationDateText)
            .replace(this.config.replaceString.disbursementValue, approvedValue)
            .replace(this.config.replaceString.installment, installment)
            .replace(this.config.replaceString.insurance, insuranceValue)
            .replace(this.config.replaceString.nextPaymentDate, expirationDateText)
            .replace(this.config.replaceString.disbursement, approvedValue)
            .replace(this.config.replaceString.singleValuePaymentFee, installment);
    };
    ContractOrganism.ɵfac = function ContractOrganism_Factory(t) { return new (t || ContractOrganism)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_5__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_credit_info_model__WEBPACK_IMPORTED_MODULE_6__["CreditInfoModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_5__["ModuleConfigProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["PercentPipe"])); };
    ContractOrganism.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ContractOrganism, selectors: [["app-contract-organism"]], inputs: { type: "type", agreement: "agreement", messages: "messages" }, outputs: { accepted: "accepted" }, decls: 9, vars: 3, consts: [[1, "nequi-header", "nequi-header--white"], ["slot", "start"], ["id", "contract_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], [1, "nequi-header__title", "ion-text-start"], ["class", "ion-content--white ion-padding-horizontal", "fullscreen", "true", "appAnimateTitleOnScroll", "", "scrollEvents", "true", 4, "ngIf"], ["class", "nequi-footer ion-no-border footer", 4, "ngIf"], ["fullscreen", "true", "appAnimateTitleOnScroll", "", "scrollEvents", "true", 1, "ion-content--white", "ion-padding-horizontal"], ["id", "contract_title_label", 1, "nequi-title"], [1, "list"], ["lines", "none", 1, "list__item"], ["id", "contract_content_label", 1, "list__item-label", 3, "innerHTML"], [1, "nequi-footer", "ion-no-border", "footer"], [1, "nequi-footer__toolbar"], ["lines", "none", 1, "footer__agreement-accept"], ["slot", "start", "id", "contract_agreement-accept_checkbox", 1, "filled-in", "footer__agreement-accept_checkbox", 3, "formControl"], ["id", "contract_agreement-accept_label", 1, "ion-text-wrap", "footer__agreement-accept_label"], ["id", "contract_ready_button", "expand", "block", "color", "guayaba", 1, "nequi-footer__button", 3, "disabled", "click"]], template: function ContractOrganism_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ContractOrganism_Template_ion_button_click_3_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-title", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ContractOrganism_ion_content_7_Template, 7, 4, "ion-content", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ContractOrganism_ion_footer_8_Template, 8, 4, "ion-footer", 6);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.messages == null ? null : ctx.messages.title, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.messages);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.messages);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_9__["AnimateTitleOnScrollDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCheckbox"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["BooleanValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"]], pipes: [_ui_src_lib_pipes_trust_html_trust_html_pipe__WEBPACK_IMPORTED_MODULE_10__["TrustHTMLPipe"]], styles: [".nequi-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-bottom: 16px;\n}\n\n.list__item[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\n\n.list__item-label[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n\n.nequi-footer__toolbar[_ngcontent-%COMP%] {\n  padding-top: 0px;\n}\n\n.footer__agreement-accept[_ngcontent-%COMP%] {\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n}\n\n.footer__agreement-accept_checkbox[_ngcontent-%COMP%] {\n  margin-inline: 0 10px;\n}\n\n.footer__agreement-accept_label[_ngcontent-%COMP%] {\n  color: var(--gray-70);\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 16px;\n}\n\n.list__item-label[_ngcontent-%COMP%]  > p {\n  margin: 0;\n}\n\n.list__item-label[_ngcontent-%COMP%]     ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.list__item-label[_ngcontent-%COMP%]     ul li {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  margin-bottom: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvY29udHJhY3Qub3JnYW5pc20uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFHRTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7QUFBSjs7QUFFSTtFQUNFLGFBQUE7QUFBTjs7QUFLQTtFQUNFLGdCQUFBO0FBRkY7O0FBTUU7RUFDRSx5QkFBQTtFQUNBLG1DQUFBO0VBQ0EsaUNBQUE7RUFDQSwrQkFBQTtBQUhKOztBQUtJO0VBQ0UscUJBQUE7QUFITjs7QUFNSTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUpOOztBQVNBO0VBQ0UsU0FBQTtBQU5GOztBQVNBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQU5GOztBQVFFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBTkoiLCJmaWxlIjoiY29udHJhY3Qub3JnYW5pc20uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXF1aS10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4ubGlzdCB7XG4gICZfX2l0ZW0ge1xuICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuXG4gICAgJi1sYWJlbCB7XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgIH1cbiAgfVxufVxuXG4ubmVxdWktZm9vdGVyX190b29sYmFyIHtcbiAgcGFkZGluZy10b3A6IDBweDtcbn1cblxuLmZvb3RlciB7XG4gICZfX2FncmVlbWVudC1hY2NlcHQge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogdHJhbnNwYXJlbnQ7XG5cbiAgICAmX2NoZWNrYm94IHtcbiAgICAgIG1hcmdpbi1pbmxpbmU6IDAgMTBweDtcbiAgICB9XG5cbiAgICAmX2xhYmVsIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1ncmF5LTcwKTtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICB9XG4gIH1cbn1cblxuLmxpc3RfX2l0ZW0tbGFiZWw6Om5nLWRlZXAgPiBwIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubGlzdF9faXRlbS1sYWJlbCA6Om5nLWRlZXAgdWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG5cbiAgbGkge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICB9XG59XG4iXX0= */"] });
    return ContractOrganism;
}());



/***/ }),

/***/ "Pxf4":
/*!************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/organisms/approval-front/services/approval-front.service.ts ***!
  \************************************************************************************************************/
/*! exports provided: ApprovalFrontService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovalFrontService", function() { return ApprovalFrontService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _approval_front_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../approval-front.config */ "53R8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");











var ApprovalFrontService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ApprovalFrontService, _super);
    function ApprovalFrontService(loadingService, toastService, cardModalService, navigatorProvider, route) {
        var _this = _super.call(this) || this;
        _this.loadingService = loadingService;
        _this.toastService = toastService;
        _this.cardModalService = cardModalService;
        _this.navigatorProvider = navigatorProvider;
        _this.route = route;
        _this.config = _approval_front_config__WEBPACK_IMPORTED_MODULE_6__["ApprovalFrontConfig"];
        return _this;
    }
    ApprovalFrontService.prototype.showCardModal = function (message, onAccept, onCancel) {
        var _a, _b, _c;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var buttons, result;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        buttons = [
                            {
                                text: message.buttons.accept,
                                handler: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                    return [2 /*return*/, onAccept === null || onAccept === void 0 ? void 0 : onAccept()];
                                }); }); },
                            },
                        ];
                        if ((_a = message.buttons) === null || _a === void 0 ? void 0 : _a.cancel) {
                            buttons.push({
                                text: message.buttons.cancel,
                                color: this.config.colors.midnight,
                                handler: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                    return [2 /*return*/, onCancel === null || onCancel === void 0 ? void 0 : onCancel()];
                                }); }); },
                            });
                        }
                        if ((_b = message.buttons) === null || _b === void 0 ? void 0 : _b.link) {
                            buttons.push({
                                isLink: true,
                                text: message.buttons.link.text,
                                handler: function () {
                                    Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_5__["openUrl"])(message.buttons.link.url);
                                },
                            });
                        }
                        return [4 /*yield*/, this.cardModalService.show({
                                title: message.title,
                                imgPath: message.image,
                                content: (_c = message === null || message === void 0 ? void 0 : message.content) !== null && _c !== void 0 ? _c : message === null || message === void 0 ? void 0 : message.description,
                                buttons: buttons,
                            })];
                    case 1:
                        result = _d.sent();
                        return [2 /*return*/, result === null || result === void 0 ? void 0 : result.data];
                }
            });
        });
    };
    ApprovalFrontService.prototype.goTo = function (url) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.navigatorProvider.navigateRoot(url, {
                    relativeTo: this.route,
                    replaceUrl: true,
                });
                return [2 /*return*/];
            });
        });
    };
    ApprovalFrontService.ɵfac = function ApprovalFrontService_Factory(t) { return new (t || ApprovalFrontService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_4__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_4__["CardModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_3__["NavigatorProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
    ApprovalFrontService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: ApprovalFrontService, factory: ApprovalFrontService.ɵfac });
    return ApprovalFrontService;
}(_nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__["ObservableBaseService"]));



/***/ }),

/***/ "RLMN":
/*!*********************************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/organisms/approval-front/pages/your-money-engine/your-money-engine.view-model.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: YourMoneyEngineViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YourMoneyEngineViewModel", function() { return YourMoneyEngineViewModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");


var YourMoneyEngineViewModel = /** @class */ (function () {
    function YourMoneyEngineViewModel() {
    }
    YourMoneyEngineViewModel.prototype.setCeilings = function (min, max) {
        this.minAmount = min;
        this.maxAmount = max;
    };
    YourMoneyEngineViewModel.prototype.initForm = function (data, canShowAdditionalIncomesField) {
        var _a, _b, _c;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_d) {
                this.canShowAdditionalIncomesField = canShowAdditionalIncomesField;
                this.incomes = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((_a = data === null || data === void 0 ? void 0 : data.incomes) !== null && _a !== void 0 ? _a : 0, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(this.minAmount),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(this.maxAmount),
                ]);
                this.expenses = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((_b = data === null || data === void 0 ? void 0 : data.expenses) !== null && _b !== void 0 ? _b : 0, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(this.minAmount),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(this.maxAmount),
                ]);
                this.otherIncomes = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((_c = data === null || data === void 0 ? void 0 : data.otherIncomes) !== null && _c !== void 0 ? _c : 0, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(this.minAmount),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(this.maxAmount),
                ]);
                this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                    incomes: this.incomes,
                    expenses: this.expenses,
                    otherIncomes: this.otherIncomes,
                });
                return [2 /*return*/];
            });
        });
    };
    return YourMoneyEngineViewModel;
}());



/***/ }),

/***/ "UEf9":
/*!********************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/organisms/preapproval/preapproval.config.ts ***!
  \********************************************************************************************/
/*! exports provided: PreapprovalConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreapprovalConfig", function() { return PreapprovalConfig; });
var PreapprovalConfig = Object.freeze({
    i18n: {
        bottomSheet: {
            welcome: 'credits.home.bottom-sheet.wellcome',
        },
        toast: {
            haveApprovalAttempt: 'credits.home.toast.have-approval-attempt',
            dontHaveApprovalAttemptWithData: 'credits.home.toast.dont-have-approval-attempt-with-data',
        },
        modal: {
            parachute: 'credits.home.modal.parachute',
            lifeguard: 'credits.home.modal.lifeguard',
            propeller: 'credits.home.modal.propeller',
            dontHavePreapproved: 'credits.home.modal.dont-have-preapproved',
            specialConditions: 'credits.home.modal.special-conditions',
            youCantNow: 'credits.home.modal.you-cant-now',
            lastApprovalAttempt: 'credits.home.modal.last-approval-attempt',
            dontHaveApprovalAttempt: 'credits.home.modal.dont-have-approval-attempt',
            dontHaveApprovalAttemptDescription: 'credits.home.modal.dont-have-approval-attempt.description',
            wrongDontComplyWithRiskPolicies: 'credits.approval-front.modal-error.wrong-dont-comply-with-risk-policies',
            hadObligationsInMora: 'credits.approval-front.modal-error.had-obligations-in-mora',
            wrongDontUserInCentrals: 'credits.approval-front.modal-error.wrong-dont-user-in-centrals',
            wrongMeetsPaymentCapacity: 'credits.approval-front.modal-error.wrong-meets-payment-capacity',
            dataDoesNotMatch: 'credits.approval-front.modal-error.data-does-not-match',
        },
        alert: {
            comeBackLater: 'credits.home.alert.come-back-later',
            defaultError: 'credits.home.alert.default-error',
        },
        bussyIndicator: 'credits.home.bussy-indicator',
        helpAction: 'credits.home.payment.help-action',
        creditName: 'credits.credit-name',
    },
    bottomSheet: {
        cssClass: {
            firstTimeMessage: 'first-time-message--icon-standard',
        },
    },
    alert: {
        timeout: 700,
    },
    images: {
        airIcon: '/assets/images/propeller/air-icon.svg',
    },
    routes: {
        backpack: '/admin/dashboard',
        paymentGuarantees: '/admin/credits/propeller/payment-guarantees',
        lifeguard: '/admin/credits/lifeguard',
        knowUsBetterEngine: '/admin/credits/propeller/know-us-better-engine',
        moreInfo: 'https://ayuda.nequi.com.co/hc/es/articles/360060919391',
        help: '/help',
    },
    fullscreenModal: {
        cssClass: 'modal--white ion-text-center modal--propeller-credit',
        cssClassButton: 'ion-color-guayaba-outline button-outline',
    },
    analytics: {
        intentionOfApprovalUpFront: {
            name: 'motor_cambio_condiciones',
            params: {
                dynatrace: ['product_id', 'motor_valor_preaprobado'],
            },
        },
        intentionOfPreapproved: {
            name: 'preaprobado',
            params: {
                dynatrace: ['product_id', 'preapproved'],
            },
        },
    },
    sortProperty: {
        installment: 'installment',
        installmentParams: 'value',
    },
});


/***/ }),

/***/ "XLvJ":
/*!*****************************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/organisms/approval-front/pages/occupation-engine/occupation-engine.config.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: OccupationEngineConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OccupationEngineConfig", function() { return OccupationEngineConfig; });
var OccupationEngineConfig = Object.freeze({
    i18n: {
        headerTitle: 'credits.occupation-engine.header-title',
        occupationLabel: 'credits.occupation-engine.occupation-label',
        sinceDateLabel: 'credits.occupation-engine.since-date-label',
        contractLabel: 'credits.occupation-engine.contract-label',
        readyButton: 'credits.occupation-engine.ready-button',
    },
    dynamoParam: '26005',
});


/***/ }),

/***/ "dKxq":
/*!**********************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/organisms/contract/constants/contract-type.ts ***!
  \**********************************************************************************************/
/*! exports provided: ContractType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractType", function() { return ContractType; });
var ContractType;
(function (ContractType) {
    ContractType["CREDIT_LIFEGUARD"] = "lifeguard";
    ContractType["CREDIT_PROPELLER"] = "propeller";
})(ContractType || (ContractType = {}));


/***/ }),

/***/ "hY4E":
/*!***************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/organisms/approval-front/services/occupation-engine.service.ts ***!
  \***************************************************************************************************************/
/*! exports provided: OccupationEngineService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OccupationEngineService", function() { return OccupationEngineService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



var OccupationEngineService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(OccupationEngineService, _super);
    function OccupationEngineService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OccupationEngineService.ɵfac = function OccupationEngineService_Factory(t) { return ɵOccupationEngineService_BaseFactory(t || OccupationEngineService); };
    OccupationEngineService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: OccupationEngineService, factory: OccupationEngineService.ɵfac });
    return OccupationEngineService;
}(_nequi_features_commons__WEBPACK_IMPORTED_MODULE_1__["ObservableBaseService"]));

var ɵOccupationEngineService_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](OccupationEngineService);


/***/ }),

/***/ "iwuA":
/*!**********************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/organisms/payment/payment.type.ts ***!
  \**********************************************************************************/
/*! exports provided: PaymentType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentType", function() { return PaymentType; });
var PaymentType;
(function (PaymentType) {
    PaymentType[PaymentType["PAYMENT"] = 1] = "PAYMENT";
    PaymentType[PaymentType["PAY_TODAY_FEE"] = 2] = "PAY_TODAY_FEE";
    PaymentType[PaymentType["OVERDUE_FEE"] = 3] = "OVERDUE_FEE";
    PaymentType[PaymentType["PAY_ALL"] = 4] = "PAY_ALL";
})(PaymentType || (PaymentType = {}));


/***/ }),

/***/ "m+9w":
/*!*****************************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/organisms/approval-front/pages/your-money-engine/your-money-engine.config.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: YourMoneyEngineConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YourMoneyEngineConfig", function() { return YourMoneyEngineConfig; });
var YourMoneyEngineConfig = Object.freeze({
    i18n: {
        headerTitle: 'credits.your-money-engine.header.title',
        headerDescription: 'credits.your-money-engine.header.description',
        incomes: {
            label: 'credits.your-money-engine.incomes-per-month.label',
            infoText: 'credits.your-money-engine.incomes-per-month.info-text',
        },
        expenses: {
            label: 'credits.your-money-engine.expenses-per-month.label',
            infoText: 'credits.your-money-engine.expenses-per-month.info-text',
        },
        otherIncomes: {
            label: 'credits.your-money-engine.additional-incomes-per-month.label',
            infoText: 'credits.your-money-engine.additional-incomes-per-month.info-text',
        },
        readyButton: 'credits.your-money-engine.ready-button',
    },
    ceilings: {
        min: 0,
        max: 999999999,
    },
});


/***/ }),

/***/ "o4Ca":
/*!************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/organisms/adjust-installments/adjust-installments.config.ts ***!
  \************************************************************************************************************/
/*! exports provided: AdjustInstallmentsConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdjustInstallmentsConfig", function() { return AdjustInstallmentsConfig; });
/* harmony import */ var _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nequi/features/credits/core */ "42wy");

var AdjustInstallmentsConfig = Object.freeze({
    i18n: {
        description: 'credits.adjust-installments.description',
        note: 'credits.adjust-installments.note',
        adjustFeesAmountTitle: 'credits.adjust-installments.adjust-fees-amount.title',
        adjustFeesAmountNote: 'credits.adjust-installments.adjust-fees-amount.note',
        adjustFeesNumberTitle: 'credits.adjust-installments.adjust-fees-number.title',
        adjustFeesNumberNote: 'credits.adjust-installments.adjust-fees-number.note',
        content: 'credits.adjust-installments',
        acceptButton: 'credits.adjust-installments.accept-button',
    },
    routes: {
        dashboard: '/admin/dashboard',
    },
    optionList: {
        adjustFeeAmount: _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_0__["RescheduleType"].INSTALLMENTS_AMOUNT,
        adjustFeeNumber: _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_0__["RescheduleType"].INSTALLMENTS_NUMBER,
    },
    fullscreenModal: {
        cssClass: 'modal--white ion-text-center modal--propeller-credit',
        cssClassButton: 'ion-color-guayaba-outline button-outline',
    },
});


/***/ }),

/***/ "pnSE":
/*!************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/organisms/payment/payment.config.ts ***!
  \************************************************************************************/
/*! exports provided: PaymentsType, PaymentConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsType", function() { return PaymentsType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentConfig", function() { return PaymentConfig; });
/* harmony import */ var _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nequi/features/credits/core */ "42wy");
/* harmony import */ var _payment_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment.type */ "iwuA");
var _a, _b, _c;


var PaymentsType = Object.freeze({
    PAYMENT_ALL: _payment_type__WEBPACK_IMPORTED_MODULE_1__["PaymentType"].PAYMENT + "-" + _payment_type__WEBPACK_IMPORTED_MODULE_1__["PaymentType"].PAY_ALL,
});
var PaymentConfig = Object.freeze({
    i18n: {
        content: 'credits.home.payment',
        chip: {
            payTodayFee: 'credits.home.chip.pay-today-fee',
            overdueFee: 'credits.home.chip.overdue-fee',
        },
        error: 'credits.home.error',
        modal: {
            payment: 'credits.home.modal.payment',
            payTodayFee: 'credits.home.modal.pay-today-fee',
            overdueFee: 'credits.home.modal.overdue-fee',
        },
        toast: {
            payment: 'credits.home.toast.payment',
            payToday: 'credits.home.toast.pay-today',
            lacksMoney: 'credits.home.toast.lacks-money',
        },
        payment: {
            headerTitle: 'credits.home.payment.header.title',
            toPay: 'credits.home.payment.content.to-pay',
            fee: 'credits.home.payment.content.fee',
            nextFee: 'credits.home.payment.content.next-fee',
            nextFeeAmount: 'credits.home.payment.content.next-fee-amount',
            overdueFee: 'credits.home.payment.content.overdue-fee',
            paymentHelp: 'credits.home.payment.content.payment-help',
            payTodayFeeHelpChecked: 'credits.home.payment.content.pay-today-fee-help-checked',
            payTodayFeeHelpUnchecked: 'credits.home.payment.content.pay-today-fee-help-unchecked',
            payOverdueFeeHelpChecked: 'credits.home.payment.content.pay-overdue-fee-help-checked',
            payOverdueFeeHelpUnchecked: 'credits.home.payment.content.pay-overdue-fee-help-unchecked',
            payment: 'credits.home.payment.content.payment',
            payTodayFee: 'credits.home.payment.content.pay-today-fee',
            payOverdueFee: 'credits.home.payment.content.pay-overdue-fee',
            paySomething: 'credits.home.payment.content.pay-something',
            payComplete: 'credits.home.payment.content.pay-complete',
            pocketPlaceholder: 'credits.home.payment.content.pocket.placeholder',
            footer: {
                message: 'credits.home.payment.footer.message',
                readyButtonText: 'credits.home.payment.footer.ready-button.text',
                movements: {
                    label: 'credits.home.payment.footer.movements.label',
                    cardModal: 'credits.home.payment.footer.movements.modal',
                },
            },
        },
        movementsTitle: (_a = {},
            _a[_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_0__["CreditType"].PROPELLER] = 'credits.home.propeller-title',
            _a[_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_0__["CreditType"].PARACHUTE] = 'credits.home.parachute-title',
            _a[_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_0__["CreditType"].LIFEGUARD_RECHARGED] = 'credits.home.lifeguard-title',
            _a),
        helpAction: 'credits.home.payment.help-action',
        pocketLabel: 'credits.home.modal.payment.pocketLabel',
    },
    bottomSheet: {
        cssClass: {
            firstTimeMessage: 'first-time-message--icon-standard',
        },
    },
    alert: {
        timeout: 700,
    },
    percentage: {
        p25: {
            value: 0.25,
            cssClass: 'payment__progress-bar--25',
        },
        p50: {
            value: 0.5,
            cssClass: 'payment__progress-bar--50',
        },
        p75: {
            value: 0.75,
            cssClass: 'payment__progress-bar--75',
        },
        p100: {
            value: 1,
            cssClass: 'payment__progress-bar--100',
        },
        total: 100,
    },
    routes: {
        parachute: {
            adjunstInstallment: '/admin/credits/parachute/adjust-installments',
            paymentDetail: '/admin/credits/parachute/payment-detail',
        },
        propeller: {
            adjunstInstallment: '/admin/credits/propeller/adjust-installments',
            paymentDetail: '/admin/credits/propeller/payment-detail',
        },
        movements: '/admin/credits/movements',
        help: '/help',
        rescheduleLoan: '/admin/credits/reschedule-loan',
    },
    chipsClass: {
        yellow: 'payment__chip payment__chip--yellow',
        red: 'payment__chip payment__chip--red',
    },
    fullscreenModal: {
        cssClass: 'modal--white ion-text-center modal--propeller-credit',
        cssClassButton: 'ion-color-guayaba-outline button-outline',
    },
    successfulTransactionValidation: (_b = {},
        _b[PaymentsType.PAYMENT_ALL] = 'credits.home.payment.card-modal.pay-today-all',
        _b[_payment_type__WEBPACK_IMPORTED_MODULE_1__["PaymentType"].PAY_TODAY_FEE + "-" + _payment_type__WEBPACK_IMPORTED_MODULE_1__["PaymentType"].PAYMENT] = 'credits.home.payment.card-modal.pay-today-amount',
        _b[_payment_type__WEBPACK_IMPORTED_MODULE_1__["PaymentType"].PAY_TODAY_FEE + "-" + _payment_type__WEBPACK_IMPORTED_MODULE_1__["PaymentType"].PAY_TODAY_FEE] = 'credits.home.payment.card-modal.pay-today-fee',
        _b[_payment_type__WEBPACK_IMPORTED_MODULE_1__["PaymentType"].PAY_TODAY_FEE + "-" + _payment_type__WEBPACK_IMPORTED_MODULE_1__["PaymentType"].PAY_ALL] = 'credits.home.payment.card-modal.pay-today-all',
        _b[_payment_type__WEBPACK_IMPORTED_MODULE_1__["PaymentType"].OVERDUE_FEE + "-" + _payment_type__WEBPACK_IMPORTED_MODULE_1__["PaymentType"].PAYMENT] = 'credits.home.payment.card-modal.pay-overdue-amount',
        _b[_payment_type__WEBPACK_IMPORTED_MODULE_1__["PaymentType"].OVERDUE_FEE + "-" + _payment_type__WEBPACK_IMPORTED_MODULE_1__["PaymentType"].OVERDUE_FEE] = 'credits.home.payment.card-modal.pay-overdue-fee',
        _b[_payment_type__WEBPACK_IMPORTED_MODULE_1__["PaymentType"].OVERDUE_FEE + "-" + _payment_type__WEBPACK_IMPORTED_MODULE_1__["PaymentType"].PAY_ALL] = 'credits.home.payment.card-modal.pay-overdue-all',
        _b),
    helpContext: 'payment-credit-help',
    analytics: {
        intentionToTransactionSuccess: {
            name: (_c = {},
                _c[PaymentsType.PAYMENT_ALL] = 'pago_total',
                _c[_payment_type__WEBPACK_IMPORTED_MODULE_1__["PaymentType"].PAY_TODAY_FEE + "-" + _payment_type__WEBPACK_IMPORTED_MODULE_1__["PaymentType"].PAYMENT] = 'abono_cuota',
                _c[_payment_type__WEBPACK_IMPORTED_MODULE_1__["PaymentType"].PAY_TODAY_FEE + "-" + _payment_type__WEBPACK_IMPORTED_MODULE_1__["PaymentType"].PAY_TODAY_FEE] = 'pago_cuota',
                _c[_payment_type__WEBPACK_IMPORTED_MODULE_1__["PaymentType"].PAY_TODAY_FEE + "-" + _payment_type__WEBPACK_IMPORTED_MODULE_1__["PaymentType"].PAY_ALL] = 'pago_total',
                _c[_payment_type__WEBPACK_IMPORTED_MODULE_1__["PaymentType"].OVERDUE_FEE + "-" + _payment_type__WEBPACK_IMPORTED_MODULE_1__["PaymentType"].PAYMENT] = 'abono_cuota_vencida',
                _c[_payment_type__WEBPACK_IMPORTED_MODULE_1__["PaymentType"].OVERDUE_FEE + "-" + _payment_type__WEBPACK_IMPORTED_MODULE_1__["PaymentType"].OVERDUE_FEE] = 'pago_cuota_vencida',
                _c[_payment_type__WEBPACK_IMPORTED_MODULE_1__["PaymentType"].OVERDUE_FEE + "-" + _payment_type__WEBPACK_IMPORTED_MODULE_1__["PaymentType"].PAY_ALL] = 'pago_total_vencida',
                _c),
            params: {
                dynatrace: ['product_id', 'valor_pago'],
            },
        },
    },
    typeOfNumber: 'number',
});


/***/ }),

/***/ "xOAz":
/*!****************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/organisms/adjust-installments/adjust-installments.view-model.ts ***!
  \****************************************************************************************************************/
/*! exports provided: AdjustInstallmentViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdjustInstallmentViewModel", function() { return AdjustInstallmentViewModel; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");

var AdjustInstallmentViewModel = /** @class */ (function () {
    function AdjustInstallmentViewModel() {
        this.rescheduleType = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]);
        this.pocketControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]);
    }
    return AdjustInstallmentViewModel;
}());



/***/ }),

/***/ "xpCB":
/*!***************************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/organisms/approval-front/pages/your-money-engine/your-money-engine.page.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: YourMoneyEnginePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YourMoneyEnginePage", function() { return YourMoneyEnginePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _services_your_money_engine_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/your-money-engine.service */ "/RGA");
/* harmony import */ var _your_money_engine_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./your-money-engine.config */ "m+9w");
/* harmony import */ var _your_money_engine_view_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./your-money-engine.view-model */ "RLMN");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ui_src_lib_directives_message_manager_message_manager_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../../ui/src/lib/directives/message-manager/message-manager.directive */ "68HU");
/* harmony import */ var _ui_src_lib_controls_nequi_input_currency_nequi_input_currency_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../../ui/src/lib/controls/nequi-input-currency/nequi-input-currency.component */ "VG0r");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
















var _c0 = function (a0, a1, a2) { return { required: a0, min: a1, max: a2 }; };
var _c1 = function (a0, a2, a3) { return { control: a0, cssClass: "margin-bottom-8", helpMessage: a2, errorMessages: a3 }; };
function YourMoneyEnginePage_ion_item_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "nequi-input-currency", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nequiMessageManager", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](18, _c1, ctx_r0.viewModel.otherIncomes, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 4, ctx_r0.config.i18n.otherIncomes.infoText), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](14, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 6, "credits.your-money-engine.validators.required"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 8, "credits.your-money-engine.validators.min"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 10, "credits.your-money-engine.validators.max"))));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 12, ctx_r0.config.i18n.otherIncomes.label), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("control", ctx_r0.viewModel.otherIncomes)("allowNegative", false);
} }
var YourMoneyEnginePage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(YourMoneyEnginePage, _super);
    function YourMoneyEnginePage(injector, router, yourMoneyEngineService) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.router = router;
        _this.yourMoneyEngineService = yourMoneyEngineService;
        _this.config = _your_money_engine_config__WEBPACK_IMPORTED_MODULE_5__["YourMoneyEngineConfig"];
        _this.viewModel = new _your_money_engine_view_model__WEBPACK_IMPORTED_MODULE_6__["YourMoneyEngineViewModel"]();
        return _this;
    }
    YourMoneyEnginePage.prototype.ngOnInit = function () {
        this.initPage();
    };
    YourMoneyEnginePage.prototype.onComplete = function () {
        this.yourMoneyEngineService.emit(this.viewModel.form.value);
    };
    YourMoneyEnginePage.prototype.initPage = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var navigationExtras;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                navigationExtras = this.router.getCurrentNavigation().extras.state;
                this.yourMoneyData = navigationExtras.yourMoneyData;
                this.viewModel.setCeilings(this.config.ceilings.min, this.config.ceilings.max);
                this.viewModel.initForm(this.yourMoneyData, navigationExtras.canShowAdditionalIncomesField);
                return [2 /*return*/];
            });
        });
    };
    YourMoneyEnginePage.ɵfac = function YourMoneyEnginePage_Factory(t) { return new (t || YourMoneyEnginePage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_your_money_engine_service__WEBPACK_IMPORTED_MODULE_4__["YourMoneyEngineService"])); };
    YourMoneyEnginePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: YourMoneyEnginePage, selectors: [["app-your-money-engine-credits"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 38, vars: 56, consts: [[1, "nequi-header"], ["slot", "start"], ["id", "your-money-engine_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], ["fullscreen", "true", 1, "ion-content--white", "ion-padding-horizontal"], [1, "nequi-title"], [3, "formGroup"], ["lines", "none", 1, "item", "ion-no-padding", "margin-bottom-16"], ["id", "income-and-expenses_header-description_text", 1, "item__label"], [1, "nequi-item", "ion-no-padding", "margin-bottom-8", 3, "nequiMessageManager"], ["id", "your-money-engine_incomes-per-month_label", "position", "floating", 1, "nequi-item__label"], ["id", "your-money-engine_incomes-per-month_input", "tooltipType", "error", "inputClass", "nequi-item__input", 1, "sc-ion-input-ios-h", 3, "control", "allowNegative"], ["class", "nequi-item ion-no-padding margin-bottom-8", 3, "nequiMessageManager", 4, "ngIf"], ["id", "your-money-engine_expenses-per-month_label", "position", "floating", 1, "nequi-item__label"], ["id", "your-money-engine_expenses-per-month_input", "tooltipType", "error", "inputClass", "nequi-item__input", 1, "sc-ion-input-ios-h", 3, "control", "allowNegative"], [1, "nequi-footer", "ion-no-border"], ["id", "your-money-engine_ready_button", "expand", "block", "color", "guayaba", 1, "nequi-footer__button", 3, "disabled", "click"], ["id", "your-money-engine_additional-incomes-per-month_label", "position", "floating", 1, "nequi-item__label"], ["id", "your-money-engine_additional-incomes-per-month_input", "tooltipType", "error", "inputClass", "nequi-item__input", 1, "sc-ion-input-ios-h", 3, "control", "allowNegative"]], template: function YourMoneyEnginePage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function YourMoneyEnginePage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-content", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "form", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-item", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-text", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-item", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-label", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "nequi-input-currency", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, YourMoneyEnginePage_ion_item_23_Template, 9, 22, "ion-item", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ion-item", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ion-label", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](31, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "nequi-input-currency", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ion-footer", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "ion-button", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function YourMoneyEnginePage_Template_ion_button_click_35_listener() { return ctx.onComplete(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](37, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 14, ctx.config.i18n.headerTitle), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.viewModel.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 16, ctx.config.i18n.headerDescription), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nequiMessageManager", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](44, _c1, ctx.viewModel.incomes, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 18, ctx.config.i18n.incomes.infoText), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](40, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 20, "credits.your-money-engine.validators.required"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 22, "credits.your-money-engine.validators.min"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 24, "credits.your-money-engine.validators.max"))));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 26, ctx.config.i18n.incomes.label), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("control", ctx.viewModel.incomes)("allowNegative", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.viewModel.canShowAdditionalIncomesField);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nequiMessageManager", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](52, _c1, ctx.viewModel.expenses, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 28, ctx.config.i18n.expenses.infoText), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](48, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 30, "credits.your-money-engine.validators.required"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](27, 32, "credits.your-money-engine.validators.min"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](28, 34, "credits.your-money-engine.validators.max"))));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](31, 36, ctx.config.i18n.expenses.label), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("control", ctx.viewModel.expenses)("allowNegative", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.viewModel.form.valid);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](37, 38, ctx.config.i18n.readyButton), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonText"], _ui_src_lib_directives_message_manager_message_manager_directive__WEBPACK_IMPORTED_MODULE_9__["MessageManagerDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonLabel"], _ui_src_lib_controls_nequi_input_currency_nequi_input_currency_component__WEBPACK_IMPORTED_MODULE_10__["NequiInputCurrencyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonFooter"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"]], styles: [".item[_ngcontent-%COMP%]::part(native) {\n  --min-height: auto;\n}\n.item__label[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 19px;\n  color: var(--gray-alert-message);\n}\n.item__info-text[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 14px;\n  color: var(--gray-alert-message);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEveW91ci1tb25leS1lbmdpbmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usa0JBQUE7QUFBSjtBQUdFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0FBREo7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtBQUZKIiwiZmlsZSI6InlvdXItbW9uZXktZW5naW5lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtIHtcbiAgJjo6cGFydChuYXRpdmUpIHtcbiAgICAtLW1pbi1oZWlnaHQ6IGF1dG87XG4gIH1cblxuICAmX19sYWJlbCB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAgIGNvbG9yOiB2YXIoLS1ncmF5LWFsZXJ0LW1lc3NhZ2UpO1xuICB9XG5cbiAgJl9faW5mby10ZXh0IHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgY29sb3I6IHZhcigtLWdyYXktYWxlcnQtbWVzc2FnZSk7XG4gIH1cbn1cbiJdfQ== */"] });
    return YourMoneyEnginePage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__["FeatureBasePage"]));



/***/ }),

/***/ "xtdo":
/*!**************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/organisms/adjust-installments/adjust-installments.organism.ts ***!
  \**************************************************************************************************************/
/*! exports provided: AdjustInstallmentsOrganism */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdjustInstallmentsOrganism", function() { return AdjustInstallmentsOrganism; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/money-management/presentation */ "JFCQ");
/* harmony import */ var _adjust_installments_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./adjust-installments.config */ "o4Ca");
/* harmony import */ var _adjust_installments_view_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./adjust-installments.view-model */ "xOAz");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ui_src_lib_components_radio_card_radio_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../ui/src/lib/components/radio-card/radio-card.component */ "OJy+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ui_src_lib_pipes_nequi_currency_nequi_currency_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../ui/src/lib/pipes/nequi-currency/nequi-currency.pipe */ "Vb1S");
/* harmony import */ var _ui_src_lib_pipes_nequi_date_nequi_date_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../ui/src/lib/pipes/nequi-date/nequi-date.pipe */ "Rt7k");















var _c0 = function (a0) { return { amountFeesAdjusted: a0 }; };
function AdjustInstallmentsOrganism_nequi_radio_card_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nequi-radio-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "currency");
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 3, ctx_r0.config.i18n.adjustFeesAmountTitle))("note", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 5, ctx_r0.config.i18n.adjustFeesAmountNote, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 8, ctx_r0.data.amountFeesAdjusted))))("value", ctx_r0.config.optionList.adjustFeeAmount);
} }
var _c1 = function (a0) { return { extraMoney: a0 }; };
var _c2 = function (a0, a1) { return { lastFeeDate: a0, numberFeesAdjusted: a1 }; };
var _c3 = function (a0) { return { nextFeeDate: a0 }; };
var AdjustInstallmentsOrganism = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AdjustInstallmentsOrganism, _super);
    function AdjustInstallmentsOrganism() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.accept = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.viewModel = new _adjust_installments_view_model__WEBPACK_IMPORTED_MODULE_6__["AdjustInstallmentViewModel"]();
        _this.config = _adjust_installments_config__WEBPACK_IMPORTED_MODULE_5__["AdjustInstallmentsConfig"];
        _this.flowType = _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["FlowType"];
        return _this;
    }
    AdjustInstallmentsOrganism.prototype.onAccept = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.accept.emit({ isSuccess: true, rescheduleType: this.viewModel.rescheduleType.value });
                return [2 /*return*/];
            });
        });
    };
    AdjustInstallmentsOrganism.ɵfac = function AdjustInstallmentsOrganism_Factory(t) { return ɵAdjustInstallmentsOrganism_BaseFactory(t || AdjustInstallmentsOrganism); };
    AdjustInstallmentsOrganism.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AdjustInstallmentsOrganism, selectors: [["app-adjust-installment"]], viewQuery: function AdjustInstallmentsOrganism_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_4__["OriginMoneyControlComponent"], 1);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.originMoneyControl = _t.first);
        } }, inputs: { title: "title", data: "data", flow: "flow" }, outputs: { accept: "accept" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 28, vars: 38, consts: [[1, "nequi-header"], ["slot", "start"], ["id", "adjust-installments_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], ["fullscren", "true", 1, "ion-content--white", "ion-padding-horizontal"], [1, "nequi-title"], ["id", "adjust-installments_description_label", 1, "description"], [3, "formControl"], ["prefixId", "adjust-installments_fees-amount", 3, "title", "note", "value", 4, "ngIf"], ["prefixId", "adjust-installments_fees-number", 3, "title", "note", "value"], ["id", "adjust-installments_note_label", 1, "note"], [1, "nequi-footer"], [1, "nequi-footer__toolbar"], ["id", "adjust-installments_ready_button", "expand", "block", "color", "guayaba", 1, "nequi-footer__button", 3, "disabled", "click"], ["prefixId", "adjust-installments_fees-amount", 3, "title", "note", "value"]], template: function AdjustInstallmentsOrganism_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdjustInstallmentsOrganism_Template_ion_button_click_3_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-content", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-text", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-text", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "currency");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-radio-group", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, AdjustInstallmentsOrganism_nequi_radio_card_13_Template, 4, 12, "nequi-radio-card", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "nequi-radio-card", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "date");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "currency");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-text", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "date");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-footer", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ion-toolbar", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdjustInstallmentsOrganism_Template_ion_button_click_25_listener() { return ctx.onAccept(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](10, 10, ctx.config.i18n.description, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](31, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 13, ctx.data.extraMoney))), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.viewModel.rescheduleType);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.flow !== ctx.flowType.PARACHUTE);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 15, ctx.config.i18n.adjustFeesNumberTitle))("note", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](16, 17, ctx.config.i18n.adjustFeesNumberNote, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](33, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 20, ctx.data.lastFeeDate), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 22, ctx.data.numberFeesAdjusted))))("value", ctx.config.optionList.adjustFeeNumber);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](21, 24, ctx.config.i18n.note, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](36, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 27, ctx.data.nextFeeDate))), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.viewModel.rescheduleType.valid);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](27, 29, ctx.config.i18n.acceptButton), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonRadioGroup"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _ui_src_lib_components_radio_card_radio_card_component__WEBPACK_IMPORTED_MODULE_10__["RadioCardComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonFooter"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"], _ui_src_lib_pipes_nequi_currency_nequi_currency_pipe__WEBPACK_IMPORTED_MODULE_12__["NequiCurrencyPipe"], _ui_src_lib_pipes_nequi_date_nequi_date_pipe__WEBPACK_IMPORTED_MODULE_13__["NequiDatePipe"]], styles: [".description[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 17px;\n  color: var(--gray-70);\n}\n\n.note[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 14px;\n  color: var(--gray-70);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvYWRqdXN0LWluc3RhbGxtZW50cy5vcmdhbmlzbS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFDRiIsImZpbGUiOiJhZGp1c3QtaW5zdGFsbG1lbnRzLm9yZ2FuaXNtLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVzY3JpcHRpb24ge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIGNvbG9yOiB2YXIoLS1ncmF5LTcwKTtcbn1cblxuLm5vdGUge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1ncmF5LTcwKTtcbn1cbiJdfQ== */"] });
    return AdjustInstallmentsOrganism;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__["FeatureBasePage"]));

var ɵAdjustInstallmentsOrganism_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](AdjustInstallmentsOrganism);


/***/ }),

/***/ "yDoo":
/*!**************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/organisms/payment/payment.organism.ts ***!
  \**************************************************************************************/
/*! exports provided: PaymentOrganism */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentOrganism", function() { return PaymentOrganism; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nequi_features_application_data_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/application-data/core */ "UgzZ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/credits/core */ "42wy");
/* harmony import */ var _nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/money-management/presentation */ "JFCQ");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _payment_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./payment.config */ "pnSE");
/* harmony import */ var _payment_type__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./payment.type */ "iwuA");
/* harmony import */ var _payment_view_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./payment.view-model */ "KTg/");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ui_src_lib_directives_form_content_style_form_content_style_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../ui/src/lib/directives/form-content-style/form-content-style.directive */ "+XT3");
/* harmony import */ var _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../ui/src/lib/directives/animate-title-on-scroll/animate-title-on-scroll.directive */ "qbWi");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _money_management_src_presentation_controls_origin_money_control_origin_money_control_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../money-management/src/presentation/controls/origin-money-control/origin-money-control.component */ "O3Yd");
/* harmony import */ var _ui_src_lib_directives_nequi_currency_style_nequi_currency_style_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../ui/src/lib/directives/nequi-currency-style/nequi-currency-style.directive */ "kVXI");
/* harmony import */ var _ui_src_lib_directives_message_manager_message_manager_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../ui/src/lib/directives/message-manager/message-manager.directive */ "68HU");
/* harmony import */ var _ui_src_lib_controls_nequi_input_currency_nequi_input_currency_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../../ui/src/lib/controls/nequi-input-currency/nequi-input-currency.component */ "VG0r");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ui_src_lib_pipes_nequi_date_nequi_date_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../../ui/src/lib/pipes/nequi-date/nequi-date.pipe */ "Rt7k");





























function PaymentOrganism_ion_button_9_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PaymentOrganism_ion_button_9_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.goToHelp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "", ctx_r0.organismId, "_go-help_button");
} }
function PaymentOrganism_ng_container_17_ion_chip_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-chip");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r5.viewModel.chip.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, ctx_r5.viewModel.chip.text), " ");
} }
function PaymentOrganism_ng_container_17_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-row", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "ion-progress-bar", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 7, ctx_r6.messages.payment.fee), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r6.progressBar.cssClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r6.progressBar.value)("type", ctx_r6.progressBar.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r6.viewModel.credit.installment.totalPaid, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.viewModel.credit.installment.total);
} }
function PaymentOrganism_ng_container_17_ion_row_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-text", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, ctx_r7.messages.payment.nextFee), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 4, ctx_r7.viewModel.credit.installment.next.date), " ");
} }
function PaymentOrganism_ng_container_17_ng_container_12_ion_row_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "ion-text", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, ctx_r10.messages.payment.nextFeeAmount), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nequiCurrencyStyle", ctx_r10.viewModel.credit.installment.next.value);
} }
var _c0 = function (a0) { return { installmentPending: a0 }; };
function PaymentOrganism_ng_container_17_ng_container_12_ion_row_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "ion-text", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 2, ctx_r11.messages.payment.overdueFee, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, ctx_r11.viewModel.installmentPending)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nequiCurrencyStyle", ctx_r11.viewModel.overdueFee);
} }
function PaymentOrganism_ng_container_17_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PaymentOrganism_ng_container_17_ng_container_12_ion_row_1_Template, 6, 4, "ion-row", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PaymentOrganism_ng_container_17_ng_container_12_ion_row_2_Template, 6, 7, "ion-row", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.viewModel.paymentTime === ctx_r8.PaymentType.PAYMENT);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.viewModel.paymentTime === ctx_r8.PaymentType.OVERDUE_FEE);
} }
function PaymentOrganism_ng_container_17_ion_item_19_Template(rf, ctx) { if (rf & 1) {
    var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-checkbox", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function PaymentOrganism_ng_container_17_ion_item_19_Template_ion_checkbox_ionChange_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r12.checkPayFee(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "", ctx_r9.organismId, "_pay-today-fee_checkbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r9.viewModel.payFeeControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "", ctx_r9.organismId, "_pay-today-fee_label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 4, ctx_r9.feePaymentMessage), " ");
} }
var _c1 = function (a0, a2, a3) { return { control: a0, cssClass: "margin-bottom-8", helpMessage: a2, errorMessages: a3 }; };
function PaymentOrganism_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-row", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, PaymentOrganism_ng_container_17_ion_chip_8_Template, 4, 5, "ion-chip", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "ion-text", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, PaymentOrganism_ng_container_17_ng_container_10_Template, 11, 9, "ng-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, PaymentOrganism_ng_container_17_ion_row_11_Template, 8, 6, "ion-row", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, PaymentOrganism_ng_container_17_ng_container_12_Template, 3, 2, "ng-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-item", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "nequi-input-currency", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, PaymentOrganism_ng_container_17_ion_item_19_Template, 5, 6, "ion-item", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-item", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-checkbox", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function PaymentOrganism_ng_container_17_Template_ion_checkbox_ionChange_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.checkPayComplete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 18, ctx_r1.messages.payment.toPay), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.viewModel.chip.isVisible);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nequiCurrencyStyle", ctx_r1.viewModel.credit.balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.showPaymentProgress);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.viewModel.paymentTime === ctx_r1.PaymentType.PAYMENT);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.showAmountNextInstallment);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nequiMessageManager", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](26, _c1, ctx_r1.viewModel.paymentControl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 20, ctx_r1.viewModel.paymentText.message), ctx_r1.viewModel.errorMessages));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "", ctx_r1.organismId, "_assets_label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 22, ctx_r1.viewModel.paymentText.placeholder), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "", ctx_r1.organismId, "_currency_input");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("control", ctx_r1.viewModel.paymentControl)("allowNegative", false)("decimalLimit", ctx_r1.viewModel.decimalLimitValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.viewModel.paymentTime !== ctx_r1.PaymentType.PAYMENT);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "", ctx_r1.organismId, "_pay-complete_checkbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r1.viewModel.payCompleteControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "", ctx_r1.organismId, "_pay-complete_label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 24, ctx_r1.messages.payment.payComplete), " ");
} }
function PaymentOrganism_ion_footer_34_Template(rf, ctx) { if (rf & 1) {
    var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-footer", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-item", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PaymentOrganism_ion_footer_34_Template_ion_item_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.onShowMovements(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "ion-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 1, ctx_r2.messages.payment.footer.movements.label), " ");
} }
var PaymentOrganism = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PaymentOrganism, _super);
    function PaymentOrganism(viewModel, applicationDataInteractor, cardModalService, translateProvider, creditMovementsInteractor, moduleConfigProvider, originMoneyService, injector) {
        var _this = _super.call(this, injector) || this;
        _this.viewModel = viewModel;
        _this.applicationDataInteractor = applicationDataInteractor;
        _this.cardModalService = cardModalService;
        _this.translateProvider = translateProvider;
        _this.creditMovementsInteractor = creditMovementsInteractor;
        _this.moduleConfigProvider = moduleConfigProvider;
        _this.originMoneyService = originMoneyService;
        _this.showMovements = false;
        _this.showPaymentProgress = true;
        _this.showAmountNextInstallment = true;
        _this.config = _payment_config__WEBPACK_IMPORTED_MODULE_8__["PaymentConfig"];
        _this.showHelpButton = false;
        _this.showDetailPressed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.goToPaymentPressed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.goToBackPressed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.showHelpPressed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.PaymentType = _payment_type__WEBPACK_IMPORTED_MODULE_9__["PaymentType"];
        _this.progressBarType = _nequi_ui__WEBPACK_IMPORTED_MODULE_7__["ProgressBarType"];
        _this.clickStatus = true;
        _this.progressBar = {
            value: 0,
            type: _this.progressBarType.DETERMINATE,
            cssClass: _this.config.percentage.p100.cssClass,
        };
        return _this;
    }
    PaymentOrganism.prototype.ngOnInit = function () {
        this.viewModel.clickStatus = this.clickStatus;
        this.getPaymentPercentage();
        this.setPocket();
    };
    PaymentOrganism.prototype.goBack = function () {
        this.goToBackPressed.emit();
    };
    PaymentOrganism.prototype.goToHelp = function () {
        this.showHelpPressed.emit();
    };
    PaymentOrganism.prototype.goToDetail = function () {
        this.showDetailPressed.emit();
    };
    PaymentOrganism.prototype.goToPay = function () {
        this.goToPaymentPressed.emit();
    };
    PaymentOrganism.prototype.checkPayFee = function () {
        this.viewModel.checkPayFee();
    };
    PaymentOrganism.prototype.checkPayComplete = function () {
        this.viewModel.checkPayComplete();
    };
    PaymentOrganism.prototype.onShowMovements = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, titleCreditMovements;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.applicationDataInteractor.findValue(this.moduleConfigProvider.applicationData.showMovementsModal, true)];
                    case 1:
                        _a.shouldShowModal = _b.sent();
                        this.creditMovementsInteractor.setDebenture(this.viewModel.credit.debenture);
                        titleCreditMovements = this.config.i18n.movementsTitle[this.viewModel.credit.type];
                        if (!this.shouldShowModal) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.applicationDataInteractor.save(this.moduleConfigProvider.applicationData.showMovementsModal, false)];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, this.showMovementCreditsModal(titleCreditMovements)];
                    case 3:
                        _b.sent();
                        return [2 /*return*/];
                    case 4:
                        this.navigatorProvider.navigateForward(this.config.routes.movements, {
                            state: { title: titleCreditMovements },
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    PaymentOrganism.prototype.showMovementCreditsModal = function (titleCreditMovements) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        modal = this.translateProvider.get(this.messages.payment.footer.movements.cardModal);
                        return [4 /*yield*/, this.showCardModal(modal, function () {
                                return _this.navigatorProvider.navigateForward(_this.config.routes.movements, {
                                    state: { title: titleCreditMovements },
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PaymentOrganism.prototype.showCardModal = function (messages, handler) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cardModalService.show({
                            title: messages.title,
                            imgPath: messages.image,
                            content: messages.content,
                            buttons: [
                                {
                                    text: messages.buttons.accept,
                                    handler: handler,
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
    PaymentOrganism.prototype.getPaymentPercentage = function () {
        var value = this.viewModel.credit.installment.totalPaid / this.viewModel.credit.installment.total;
        this.progressBar.value = value;
        this.progressBar.cssClass = this.getProgressPercent(value);
    };
    PaymentOrganism.prototype.getProgressPercent = function (value) {
        if (value <= this.config.percentage.p25.value) {
            return this.config.percentage.p25.cssClass;
        }
        if (value > this.config.percentage.p25.value && value <= this.config.percentage.p50.value) {
            return this.config.percentage.p50.cssClass;
        }
        if (value > this.config.percentage.p50.value && value <= this.config.percentage.p75.value) {
            return this.config.percentage.p75.cssClass;
        }
        return this.config.percentage.p100.cssClass;
    };
    PaymentOrganism.prototype.setPocket = function () {
        this.viewModel.pocketControl.setValue(this.originMoneyService.getAvailablePocket());
    };
    PaymentOrganism.ɵfac = function PaymentOrganism_Factory(t) { return new (t || PaymentOrganism)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_payment_view_model__WEBPACK_IMPORTED_MODULE_10__["PaymentViewModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_application_data_core__WEBPACK_IMPORTED_MODULE_2__["ApplicationDataInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_7__["CardModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_4__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["CreditMovementsInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_4__["ModuleConfigProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_6__["OriginMoneyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"])); };
    PaymentOrganism.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PaymentOrganism, selectors: [["app-payment"]], inputs: { organismId: "organismId", messages: "messages", feePaymentMessage: "feePaymentMessage", showMovements: "showMovements", showPaymentProgress: "showPaymentProgress", showAmountNextInstallment: "showAmountNextInstallment", config: "config", showHelpButton: "showHelpButton" }, outputs: { showDetailPressed: "showDetailPressed", goToPaymentPressed: "goToPaymentPressed", goToBackPressed: "goToBackPressed", showHelpPressed: "showHelpPressed" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 35, vars: 25, consts: [[1, "nequi-header", "nequi-header--white"], ["slot", "start"], [3, "id", "click"], ["slot", "icon-only", "name", "arrow-back-outline"], [1, "nequi-header__title", "ion-text-start"], ["slot", "end"], [3, "id", "click", 4, "ngIf"], ["slot", "icon-only", "name", "information-outline"], ["fullscreen", "true", "appFormContentStyle", "", "scrollEvents", "true", "appAnimateTitleOnScroll", "", 1, "ion-content--white", "ion-padding-horizontal"], [1, "nequi-title"], [3, "formGroup"], ["class", "payment", 4, "ngIf"], ["color", "medium", 1, "margin-top-8"], [1, "payment__pocket-placeholder"], [1, "payment__pocket"], [3, "formControl", "minAmount"], [1, "nequi-footer", "ion-no-border", "credits-propeller__footer"], [1, "nequi-footer__toolbar"], [1, "margin-bottom-8"], [1, "payment__footer-message"], ["shape", "round", "expand", "block", "color", "guayaba", 1, "nequi-footer__button", "payment__footer-button", 3, "id", "disabled", "click"], ["class", "nequi-footer", 4, "ngIf"], ["slot", "icon-only", "name", "help-outline"], [1, "payment"], [1, "payment__to-pay-label", "margin-bottom-8"], [3, "class", 4, "ngIf"], [1, "payment__to-pay-text", 3, "nequiCurrencyStyle"], [4, "ngIf"], ["class", "margin-bottom-8", 4, "ngIf"], [1, "nequi-item", "ion-no-padding", "margin-bottom-16", 3, "nequiMessageManager"], ["position", "floating", 1, "nequi-item__label", 3, "id"], ["inputClass", "nequi-item__input", 3, "id", "control", "allowNegative", "decimalLimit"], ["lines", "none", "class", "ion-no-padding", 4, "ngIf"], ["lines", "none", 1, "ion-no-padding"], ["slot", "start", 1, "filled-in", "payment__checkbox", 3, "id", "formControl", "ionChange"], [1, "ion-text-wrap", 3, "id"], [1, "payment__fee-label"], [3, "value", "type"], [1, "payment__min-fee-label"], [1, "payment__max-fee-label"], [1, "payment__next-fee-label"], [1, "payment__next-fee-text"], [1, "payment__next-fee-amount-label"], [1, "payment__next-fee-amount-text", 3, "nequiCurrencyStyle"], [1, "payment__overdue-fee"], [1, "payment__overdue-fee-text", 3, "nequiCurrencyStyle"], [1, "nequi-footer"], [1, "nequi-footer__toolbar--movements", "nequi-footer__toolbar", "ion-no-padding"], ["lines", "none", 1, "nequi-footer__movements", 3, "click"], ["slot", "end", "name", "chevron-up-outline"]], template: function PaymentOrganism_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PaymentOrganism_Template_ion_button_click_3_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-title", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-buttons", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, PaymentOrganism_ion_button_9_Template, 2, 1, "ion-button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PaymentOrganism_Template_ion_button_click_10_listener() { return ctx.goToDetail(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "ion-icon", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-content", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "form", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, PaymentOrganism_ng_container_17_Template, 25, 30, "ng-container", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-text", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h5", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "nequi-origin-money-control", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ion-footer", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-toolbar", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ion-row", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ion-col");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](30, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ion-button", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PaymentOrganism_Template_ion_button_click_31_listener() { return ctx.goToPay(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](33, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, PaymentOrganism_ion_footer_34_Template, 7, 3, "ion-footer", 21);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "", ctx.organismId, "_go-back_button");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 15, ctx.messages.payment.headerTitle));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showHelpButton);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "", ctx.organismId, "_go-back_button");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 17, ctx.messages.payment.headerTitle), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.viewModel.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.viewModel.isContentVisible);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 19, ctx.messages.payment.pocketPlaceholder), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.viewModel.pocketControl)("minAmount", ctx.viewModel.paymentControl.value);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](30, 21, ctx.messages.payment.footer.message));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "", ctx.organismId, "_ready_button");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.viewModel.form.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](33, 23, ctx.messages.payment.footer.readyButtonText), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showMovements);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonContent"], _ui_src_lib_directives_form_content_style_form_content_style_directive__WEBPACK_IMPORTED_MODULE_13__["FormContentStyleDirective"], _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_14__["AnimateTitleOnScrollDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonText"], _money_management_src_presentation_controls_origin_money_control_origin_money_control_component__WEBPACK_IMPORTED_MODULE_16__["OriginMoneyControlComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormControlDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonLabel"], _ui_src_lib_directives_nequi_currency_style_nequi_currency_style_directive__WEBPACK_IMPORTED_MODULE_17__["NequiCurrencyStyleDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonItem"], _ui_src_lib_directives_message_manager_message_manager_directive__WEBPACK_IMPORTED_MODULE_18__["MessageManagerDirective"], _ui_src_lib_controls_nequi_input_currency_nequi_input_currency_component__WEBPACK_IMPORTED_MODULE_19__["NequiInputCurrencyComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonCheckbox"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["BooleanValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonChip"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonProgressBar"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__["TranslatePipe"], _ui_src_lib_pipes_nequi_date_nequi_date_pipe__WEBPACK_IMPORTED_MODULE_21__["NequiDatePipe"]], styles: [".payment__to-pay-label[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 22px;\n  color: var(--medianoche);\n  display: inline-block;\n}\n.payment__to-pay-text[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 29px;\n  color: var(--medianoche);\n  display: block;\n}\n.payment__fee-label[_ngcontent-%COMP%], .payment__min-fee-label[_ngcontent-%COMP%], .payment__max-fee-label[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 17px;\n  color: var(--gray-70);\n}\n.payment__min-fee-label[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.payment__max-fee-label[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 5px;\n  bottom: 5px;\n}\n.payment__next-fee-label[_ngcontent-%COMP%], .payment__next-fee-amount-label[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 17px;\n  color: var(--gray-60);\n  display: block;\n}\n.payment__next-fee-text[_ngcontent-%COMP%], .payment__next-fee-amount-text[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 19px;\n  color: var(--medianoche);\n  display: block;\n}\n.payment__overdue-fee[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 17px;\n  color: var(--guayaba);\n  display: block;\n}\n.payment__overdue-fee-text[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 19px;\n  color: var(--guayaba);\n  display: block;\n}\n.payment__pay-complete-label[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 16px;\n  color: var(--gray-alert-message);\n  display: block;\n}\n.payment__progress-bar[_ngcontent-%COMP%], .payment__progress-bar--100[_ngcontent-%COMP%], .payment__progress-bar--75[_ngcontent-%COMP%], .payment__progress-bar--50[_ngcontent-%COMP%], .payment__progress-bar--25[_ngcontent-%COMP%] {\n  --buffer-background: var(--gray-inputs-divide);\n  height: 8px;\n  border-radius: 44px;\n  margin-bottom: 6px;\n}\n.payment__progress-bar--25[_ngcontent-%COMP%] {\n  --progress-background: var(--ultravioleta);\n}\n.payment__progress-bar--50[_ngcontent-%COMP%] {\n  --progress-background: linear-gradient(\n    270deg,\n    var(--progress-bar-50) 2.45%,\n    var(--ultravioleta) 98.16%\n  );\n}\n.payment__progress-bar--75[_ngcontent-%COMP%] {\n  --progress-background: linear-gradient(\n    270deg,\n    var(--progress-bar-75) 2.45%,\n    var(--ultravioleta) 98.16%\n  );\n}\n.payment__progress-bar--100[_ngcontent-%COMP%] {\n  --progress-background: linear-gradient(\n    270deg,\n    var(--guayaba) 2.45%,\n    var(--ultravioleta) 98.16%\n  );\n}\n.payment__footer[_ngcontent-%COMP%] {\n  min-height: 134px;\n}\n.payment__footer-message[_ngcontent-%COMP%] {\n  padding: 4px 16px;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 14px;\n  color: var(--gray-alert-message);\n}\n.payment__footer-button[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.payment__chip[_ngcontent-%COMP%] {\n  padding: 0 10px;\n  height: 24px;\n  float: right;\n}\n.payment__chip--red[_ngcontent-%COMP%] {\n  --background: var(--guayaba-10);\n  --color: var(--guayaba);\n}\n.payment__chip--yellow[_ngcontent-%COMP%] {\n  --background: var(--chip-yellow);\n  --color: var(--chip-yellow-text);\n}\n.payment__checkbox[_ngcontent-%COMP%] {\n  margin: 0 12px 0 8px;\n}\n.payment__pocket-placeholder[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 16px;\n}\n.payment__pocket[_ngcontent-%COMP%] {\n  margin: 0 8px 16px 8px;\n}\n.item-interactive-disabled[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n.nequi-footer__toolbar--movements[_ngcontent-%COMP%] {\n  padding-bottom: 0px;\n}\n.nequi-footer__movements[_ngcontent-%COMP%] {\n  width: calc(100% - 32px);\n  box-shadow: 0px 4px 4px var(--black-opacity-24);\n  border-radius: 8px 8px 0px 0px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvcGF5bWVudC5vcmdhbmlzbS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7QUFBSjtBQUdFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtBQURKO0FBSUU7RUFHRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFKSjtBQU9FO0VBQ0UsZUFBQTtBQUxKO0FBUUU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBTko7QUFTRTtFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFSSjtBQVdFO0VBRUUsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtBQVZKO0FBYUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBWEo7QUFjRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFaSjtBQWVFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtBQWJKO0FBZ0JFO0VBQ0UsOENBQUE7RUFFQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQWZKO0FBaUJJO0VBRUUsMENBQUE7QUFoQk47QUFtQkk7RUFFRTs7OztHQUFBO0FBZE47QUFxQkk7RUFFRTs7OztHQUFBO0FBaEJOO0FBdUJJO0VBRUU7Ozs7R0FBQTtBQWxCTjtBQTBCRTtFQUNFLGlCQUFBO0FBeEJKO0FBMEJJO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7QUF4Qk47QUEyQkk7RUFDRSxnQkFBQTtBQXpCTjtBQTZCRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQTNCSjtBQTZCSTtFQUNFLCtCQUFBO0VBQ0EsdUJBQUE7QUEzQk47QUE4Qkk7RUFDRSxnQ0FBQTtFQUNBLGdDQUFBO0FBNUJOO0FBZ0NFO0VBQ0Usb0JBQUE7QUE5Qko7QUFpQ0U7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUEvQko7QUFrQ0U7RUFDRSxzQkFBQTtBQWhDSjtBQW9DQTtFQUNFLG9CQUFBO0FBakNGO0FBc0NJO0VBQ0UsbUJBQUE7QUFuQ047QUF1Q0U7RUFDRSx3QkFBQTtFQUNBLCtDQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FBckNKIiwiZmlsZSI6InBheW1lbnQub3JnYW5pc20uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXltZW50IHtcbiAgJl9fdG8tcGF5LWxhYmVsIHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgY29sb3I6IHZhcigtLW1lZGlhbm9jaGUpO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuXG4gICZfX3RvLXBheS10ZXh0IHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI5cHg7XG4gICAgY29sb3I6IHZhcigtLW1lZGlhbm9jaGUpO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgJl9fZmVlLWxhYmVsLFxuICAmX19taW4tZmVlLWxhYmVsLFxuICAmX19tYXgtZmVlLWxhYmVsIHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gICAgY29sb3I6IHZhcigtLWdyYXktNzApO1xuICB9XG5cbiAgJl9fbWluLWZlZS1sYWJlbCB7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICB9XG5cbiAgJl9fbWF4LWZlZS1sYWJlbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgYm90dG9tOiA1cHg7XG4gIH1cblxuICAmX19uZXh0LWZlZS1sYWJlbCxcbiAgJl9fbmV4dC1mZWUtYW1vdW50LWxhYmVsIHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gICAgY29sb3I6IHZhcigtLWdyYXktNjApO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgJl9fbmV4dC1mZWUtdGV4dCxcbiAgJl9fbmV4dC1mZWUtYW1vdW50LXRleHQge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMTlweDtcbiAgICBjb2xvcjogdmFyKC0tbWVkaWFub2NoZSk7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAmX19vdmVyZHVlLWZlZSB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAgIGNvbG9yOiB2YXIoLS1ndWF5YWJhKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gICZfX292ZXJkdWUtZmVlLXRleHQge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMTlweDtcbiAgICBjb2xvcjogdmFyKC0tZ3VheWFiYSk7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAmX19wYXktY29tcGxldGUtbGFiZWwge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICBjb2xvcjogdmFyKC0tZ3JheS1hbGVydC1tZXNzYWdlKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gICZfX3Byb2dyZXNzLWJhciB7XG4gICAgLS1idWZmZXItYmFja2dyb3VuZDogdmFyKC0tZ3JheS1pbnB1dHMtZGl2aWRlKTtcblxuICAgIGhlaWdodDogOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDQ0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuXG4gICAgJi0tMjUge1xuICAgICAgQGV4dGVuZCAucGF5bWVudF9fcHJvZ3Jlc3MtYmFyO1xuICAgICAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiB2YXIoLS11bHRyYXZpb2xldGEpO1xuICAgIH1cblxuICAgICYtLTUwIHtcbiAgICAgIEBleHRlbmQgLnBheW1lbnRfX3Byb2dyZXNzLWJhcjtcbiAgICAgIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAyNzBkZWcsXG4gICAgICAgIHZhcigtLXByb2dyZXNzLWJhci01MCkgMi40NSUsXG4gICAgICAgIHZhcigtLXVsdHJhdmlvbGV0YSkgOTguMTYlXG4gICAgICApO1xuICAgIH1cblxuICAgICYtLTc1IHtcbiAgICAgIEBleHRlbmQgLnBheW1lbnRfX3Byb2dyZXNzLWJhcjtcbiAgICAgIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAyNzBkZWcsXG4gICAgICAgIHZhcigtLXByb2dyZXNzLWJhci03NSkgMi40NSUsXG4gICAgICAgIHZhcigtLXVsdHJhdmlvbGV0YSkgOTguMTYlXG4gICAgICApO1xuICAgIH1cblxuICAgICYtLTEwMCB7XG4gICAgICBAZXh0ZW5kIC5wYXltZW50X19wcm9ncmVzcy1iYXI7XG4gICAgICAtLXByb2dyZXNzLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgMjcwZGVnLFxuICAgICAgICB2YXIoLS1ndWF5YWJhKSAyLjQ1JSxcbiAgICAgICAgdmFyKC0tdWx0cmF2aW9sZXRhKSA5OC4xNiVcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgJl9fZm9vdGVyIHtcbiAgICBtaW4taGVpZ2h0OiAxMzRweDtcblxuICAgICYtbWVzc2FnZSB7XG4gICAgICBwYWRkaW5nOiA0cHggMTZweDtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1ncmF5LWFsZXJ0LW1lc3NhZ2UpO1xuICAgIH1cblxuICAgICYtYnV0dG9uIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuICB9XG5cbiAgJl9fY2hpcCB7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgICBmbG9hdDogcmlnaHQ7XG5cbiAgICAmLS1yZWQge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1ndWF5YWJhLTEwKTtcbiAgICAgIC0tY29sb3I6IHZhcigtLWd1YXlhYmEpO1xuICAgIH1cblxuICAgICYtLXllbGxvdyB7XG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWNoaXAteWVsbG93KTtcbiAgICAgIC0tY29sb3I6IHZhcigtLWNoaXAteWVsbG93LXRleHQpO1xuICAgIH1cbiAgfVxuXG4gICZfX2NoZWNrYm94IHtcbiAgICBtYXJnaW46IDAgMTJweCAwIDhweDtcbiAgfVxuXG4gICZfX3BvY2tldC1wbGFjZWhvbGRlciB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cblxuICAmX19wb2NrZXQge1xuICAgIG1hcmdpbjogMCA4cHggMTZweCA4cHg7XG4gIH1cbn1cblxuLml0ZW0taW50ZXJhY3RpdmUtZGlzYWJsZWQge1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cblxuLm5lcXVpLWZvb3RlciB7XG4gICZfX3Rvb2xiYXIge1xuICAgICYtLW1vdmVtZW50cyB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIH1cbiAgfVxuXG4gICZfX21vdmVtZW50cyB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMycHgpO1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHZhcigtLWJsYWNrLW9wYWNpdHktMjQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMHB4IDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxufVxuIl19 */"] });
    return PaymentOrganism;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__["FeatureBasePage"]));



/***/ })

}]);
//# sourceMappingURL=default~products-lifeguard-lifeguard-module~products-lifeguard-recharged-lifeguard-recharged-module~~2ffa56f8.js.map