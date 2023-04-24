(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nequi-features-cash-in-presentation"],{

/***/ "0bkQ":
/*!***************************************************!*\
  !*** ./libs/features/cash-in/src/config/index.ts ***!
  \***************************************************/
/*! exports provided: CashInConfig, CashInConfigProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cash_in_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cash-in.config */ "HtQs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CashInConfig", function() { return _cash_in_config__WEBPACK_IMPORTED_MODULE_0__["CashInConfig"]; });

/* harmony import */ var _cash_in_config_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cash-in-config.provider */ "58hU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CashInConfigProvider", function() { return _cash_in_config_provider__WEBPACK_IMPORTED_MODULE_1__["CashInConfigProvider"]; });





/***/ }),

/***/ "58hU":
/*!*********************************************************************!*\
  !*** ./libs/features/cash-in/src/config/cash-in-config.provider.ts ***!
  \*********************************************************************/
/*! exports provided: CashInConfigProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashInConfigProvider", function() { return CashInConfigProvider; });
var CashInConfigProvider = /** @class */ (function () {
    function CashInConfigProvider() {
    }
    return CashInConfigProvider;
}());



/***/ }),

/***/ "8IJr":
/*!******************************************************************************************!*\
  !*** ./libs/features/cash-in/src/presentation/other-bank-info/other-bank-info.config.ts ***!
  \******************************************************************************************/
/*! exports provided: OtherBankInfoConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherBankInfoConfig", function() { return OtherBankInfoConfig; });
var OtherBankInfoConfig = Object.freeze({
    i18n: {
        infoMessages: [
            {
                image: 'cashin.other-bank-info.times.image',
                title: 'cashin.other-bank-info.times.title',
                content: 'cashin.other-bank-info.times.content',
            },
            {
                image: 'cashin.other-bank-info.business-days.image',
                title: 'cashin.other-bank-info.business-days.title',
                content: 'cashin.other-bank-info.business-days.content',
            },
            {
                image: 'cashin.other-bank-info.weekends.image',
                title: 'cashin.other-bank-info.weekends.title',
                content: 'cashin.other-bank-info.weekends.content',
            },
            {
                image: 'cashin.other-bank-info.holidays.image',
                title: 'cashin.other-bank-info.holidays.title',
                content: 'cashin.other-bank-info.holidays.content',
            },
        ],
    },
    routes: {
        bank: '/admin/send/bank-pa',
    },
});


/***/ }),

/***/ "FEQQ":
/*!**************************************************************************************!*\
  !*** ./libs/features/cash-in/src/presentation/organisms/cash-in-options.organism.ts ***!
  \**************************************************************************************/
/*! exports provided: CashInOptionsOrganism */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashInOptionsOrganism", function() { return CashInOptionsOrganism; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nequi_features_cash_in_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/cash-in/core */ "Kv3X");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_features_send_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/features/send/core */ "mumb");
/* harmony import */ var _nequi_mfp_exceptions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/mfp/exceptions */ "Xyzt");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_date__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nequi/utils/date */ "tGfC");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _cash_in_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../cash-in.config */ "GUYq");
/* harmony import */ var _other_bank_info_other_bank_info_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../other-bank-info/other-bank-info.component */ "js3i");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ui_src_lib_components_nav_button_card_nav_button_card_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../ui/src/lib/components/nav-button-card/nav-button-card.component */ "gDHj");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
























function CashInOptionsOrganism_nequi_nav_button_card_11_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nequi-nav-button-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("clicked", function CashInOptionsOrganism_nequi_nav_button_card_11_Template_nequi_nav_button_card_clicked_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); var option_r2 = ctx.$implicit; var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.onOptionClicked(option_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var option_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 4, option_r2.title))("leftImage", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 6, option_r2.icon))("description", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 8, option_r2.description))("showIcon", true);
} }
function CashInOptionsOrganism_a_12_Template(rf, ctx) { if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CashInOptionsOrganism_a_12_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.goToHelp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "cashin.help"), " ");
} }
var CashInOptionsOrganism = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CashInOptionsOrganism, _super);
    function CashInOptionsOrganism(loadingService, sendInteractor, translateProvider, toastService, cardModalService, mapsProvider, navigatorProvider, modalController, analyticsInteractor, translateProvder, injector) {
        var _this = _super.call(this, injector) || this;
        _this.loadingService = loadingService;
        _this.sendInteractor = sendInteractor;
        _this.translateProvider = translateProvider;
        _this.toastService = toastService;
        _this.cardModalService = cardModalService;
        _this.mapsProvider = mapsProvider;
        _this.navigatorProvider = navigatorProvider;
        _this.modalController = modalController;
        _this.analyticsInteractor = analyticsInteractor;
        _this.translateProvder = translateProvder;
        _this.options = [];
        return _this;
    }
    CashInOptionsOrganism.prototype.ngOnInit = function () {
        this.options = this.getOptions();
        this.validateShouldShowHelp();
    };
    CashInOptionsOrganism.prototype.onOptionClicked = function (option) {
        switch (option.id) {
            case _nequi_features_cash_in_core__WEBPACK_IMPORTED_MODULE_3__["CashInOptions"].BANCOLOMBIA:
                this.setAnalyticsIntention(option.title);
                return this.cashinBank();
            case _nequi_features_cash_in_core__WEBPACK_IMPORTED_MODULE_3__["CashInOptions"].BANISTMO:
            case _nequi_features_cash_in_core__WEBPACK_IMPORTED_MODULE_3__["CashInOptions"].CASH:
                this.setAnalyticsIntention(option.title);
                return this.navigateToOrganism(_nequi_ui__WEBPACK_IMPORTED_MODULE_9__["InformativeContentOrganism"], option.info, this.openNequiPoints.bind(this));
            case _nequi_features_cash_in_core__WEBPACK_IMPORTED_MODULE_3__["CashInOptions"].ACH:
                this.setAnalyticsIntention(option.title);
                return this.navigateToOrganism(_nequi_ui__WEBPACK_IMPORTED_MODULE_9__["InformativeContentOrganism"], option.info, this.openOtherBankModal.bind(this));
            case _nequi_features_cash_in_core__WEBPACK_IMPORTED_MODULE_3__["CashInOptions"].PSE:
                this.setAnalyticsIntention(option.title);
                // TODO: Fix url pse
                return this.navigateToOrganism(_nequi_ui__WEBPACK_IMPORTED_MODULE_9__["FirstTimeMessageOrganism"], option.info, this.openPSE.bind(this));
            default:
                return this.bottomSheetController.dismiss(option.url);
        }
    };
    CashInOptionsOrganism.prototype.openOtherBankModal = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.bottomSheetController.setCanResizeBottomSheetComponent(false);
                        return [4 /*yield*/, this.modalController.create({
                                component: _other_bank_info_other_bank_info_component__WEBPACK_IMPORTED_MODULE_13__["OtherBankInfoComponent"],
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        this.bottomSheetController.setCanResizeBottomSheetComponent(true);
                        return [2 /*return*/];
                }
            });
        });
    };
    CashInOptionsOrganism.prototype.close = function () {
        this.bottomSheetController.dismiss(null);
    };
    CashInOptionsOrganism.prototype.goToHelp = function () {
        this.close();
        this.navigatorProvider.navigateForward(_cash_in_config__WEBPACK_IMPORTED_MODULE_12__["CashInConfig"].help, {
            queryParams: {
                context: _cash_in_config__WEBPACK_IMPORTED_MODULE_12__["CashInConfig"].context,
            },
        });
    };
    CashInOptionsOrganism.prototype.validateShouldShowHelp = function () {
        this.showHelp = this.idOptions.includes(_nequi_features_cash_in_core__WEBPACK_IMPORTED_MODULE_3__["CashInOptions"].HELP);
    };
    CashInOptionsOrganism.prototype.cashinBank = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var account, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 9]);
                        return [4 /*yield*/, this.loadingService.show()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.sendInteractor.validate(_nequi_features_send_core__WEBPACK_IMPORTED_MODULE_7__["ProcessType"].LINK_ACCOUNTS)];
                    case 2:
                        account = _a.sent();
                        account.filter(function (bankAccount) { return bankAccount.isLinked; });
                        return [4 /*yield*/, this.loadingService.hideWithoutFeedback()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, this.bottomSheetController.dismiss(_cash_in_config__WEBPACK_IMPORTED_MODULE_12__["CashInConfig"].routes.bankRecharge)];
                    case 4:
                        error_1 = _a.sent();
                        if (!(error_1 instanceof _nequi_features_send_core__WEBPACK_IMPORTED_MODULE_7__["NoLinkedAccountsException"])) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.loadingService.hideWithoutFeedback()];
                    case 5:
                        _a.sent();
                        this.linkBankAccountBoottomSheet();
                        return [2 /*return*/];
                    case 6:
                        if (!(error_1 instanceof _nequi_mfp_exceptions__WEBPACK_IMPORTED_MODULE_8__["MfpResponseException"])) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.loadingService.hide(false)];
                    case 7:
                        _a.sent();
                        this.toastService.showError(error_1.message);
                        return [2 /*return*/];
                    case 8:
                        this.validateCashinBankModal(error_1);
                        return [3 /*break*/, 9];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    CashInOptionsOrganism.prototype.linkBankAccountBoottomSheet = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var bottomSheetMessages;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                bottomSheetMessages = this.translateProvider.get('backpack.home.bottom-sheet.link-bank-account');
                this.forward(_nequi_ui__WEBPACK_IMPORTED_MODULE_9__["FirstTimeMessageOrganism"], {
                    icon: bottomSheetMessages.image,
                    message: bottomSheetMessages.message,
                    content: bottomSheetMessages.content,
                    url: bottomSheetMessages.url,
                    cssClass: 'first-time-message--icon-standard',
                    header: {
                        view: true,
                    },
                    button: {
                        label: bottomSheetMessages.button,
                        color: 'guayaba',
                        fill: 'outline',
                        action: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                this.bottomSheetController.dismiss(_cash_in_config__WEBPACK_IMPORTED_MODULE_12__["CashInConfig"].routes.linkBankAccount);
                                return [2 /*return*/];
                            });
                        }); },
                    },
                });
                return [2 /*return*/];
            });
        });
    };
    CashInOptionsOrganism.prototype.validateCashinBankModal = function (error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var i18nKey, acceptAction, modal;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i18nKey = 'backpack.home.modals.trapped-genie.no-banck-accounts';
                        if (error instanceof _nequi_features_send_core__WEBPACK_IMPORTED_MODULE_7__["InvalidDocumentException"]) {
                            i18nKey = 'backpack.home.modals.trapped-genie.invalid-document';
                        }
                        if (error instanceof _nequi_features_send_core__WEBPACK_IMPORTED_MODULE_7__["NoPassWhiteListException"]) {
                            acceptAction = function () {
                                return _this.navigateToOrganism(_nequi_ui__WEBPACK_IMPORTED_MODULE_9__["FirstTimeMessageOrganism"], _cash_in_config__WEBPACK_IMPORTED_MODULE_12__["CashInConfig"].pseInfo, _this.openPSE.bind(_this));
                            };
                            i18nKey = 'backpack.home.modals.trapped-genie.no-pass-white-list';
                        }
                        modal = this.translateProvider.get(i18nKey);
                        return [4 /*yield*/, this.loadingService.hide(false)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.cardModalService.show({
                                title: modal.header,
                                imgPath: modal.image,
                                content: modal.content,
                                buttons: [
                                    {
                                        text: modal.buttons.accept,
                                        handler: acceptAction,
                                    },
                                    {
                                        text: modal.buttons.cancel.text,
                                        isLink: modal.buttons.cancel.isLink,
                                        handler: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                                if (modal.buttons.cancel.link) {
                                                    Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_11__["openUrl"])(modal.buttons.cancel.link);
                                                }
                                                return [2 /*return*/];
                                            });
                                        }); },
                                    },
                                ],
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CashInOptionsOrganism.prototype.navigateToOrganism = function (component, info, action, cssClass) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                messages = this.translateProvider.get(info);
                this.forward(component, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, messages), { header: { view: true }, cssClass: cssClass !== null && cssClass !== void 0 ? cssClass : 'first-time-message--icon-standard', button: {
                        label: messages.button,
                        color: 'guayaba',
                        fill: 'outline',
                        action: action,
                    } }));
                return [2 /*return*/];
            });
        });
    };
    CashInOptionsOrganism.prototype.openPSE = function () {
        Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_11__["openUrl"])(_cash_in_config__WEBPACK_IMPORTED_MODULE_12__["CashInConfig"].urlPse);
        this.bottomSheetController.dismiss(null);
    };
    CashInOptionsOrganism.prototype.openNequiPoints = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // ToDo: Retrieve radius from Dynamo Parameter
                    return [4 /*yield*/, this.mapsProvider.launch({
                            pointsType: _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_6__["PointsType"].RECHARGE,
                            radius: _cash_in_config__WEBPACK_IMPORTED_MODULE_12__["CashInConfig"].radiusMap,
                        })];
                    case 1:
                        // ToDo: Retrieve radius from Dynamo Parameter
                        _a.sent();
                        this.bottomSheetController.dismiss(null);
                        return [2 /*return*/];
                }
            });
        });
    };
    CashInOptionsOrganism.prototype.getOptions = function () {
        var _this = this;
        if (this.idOptions) {
            return _cash_in_config__WEBPACK_IMPORTED_MODULE_12__["CashInConfig"].options.filter(function (option) {
                return _this.idOptions.findIndex(function (el) { return el !== _nequi_features_cash_in_core__WEBPACK_IMPORTED_MODULE_3__["CashInOptions"].HELP && el === option.id; }) !== -1;
            });
        }
    };
    CashInOptionsOrganism.prototype.setAnalyticsIntention = function (optionSelected) {
        var eventProperty = _cash_in_config__WEBPACK_IMPORTED_MODULE_12__["CashInConfig"].analytics.events.intentionOfCashIn;
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["AnalyticsType"].FACEBOOK,
            params: {
                eventName: eventProperty.name,
            },
        });
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["AnalyticsType"].FIREBASE,
            params: { eventName: eventProperty.name },
        });
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["AnalyticsType"].CLEVERTAP,
            params: {
                eventName: eventProperty.name,
                eventProps: Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_11__["stringsArrayToObjectWithValues"])(eventProperty.params.cleverTap, [
                    Object(_nequi_utils_date__WEBPACK_IMPORTED_MODULE_10__["getFormattedDateTimes"])(),
                    this.translateProvder.get(optionSelected),
                ]),
            },
        });
    };
    CashInOptionsOrganism.ɵfac = function CashInOptionsOrganism_Factory(t) { return new (t || CashInOptionsOrganism)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_9__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_send_core__WEBPACK_IMPORTED_MODULE_7__["SendInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_4__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_9__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_9__["CardModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_6__["MapsProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_4__["NavigatorProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["AnalyticsInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_4__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"])); };
    CashInOptionsOrganism.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CashInOptionsOrganism, selectors: [["app-cash-in-options"]], inputs: { idOptions: "idOptions" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 13, vars: 5, consts: [[1, "ion-page"], [1, "ion-no-border", "nequi-header", "nequi-header--white"], ["slot", "end"], ["id", "cash-in-option_close_button", 3, "click"], ["color", "dark", "slot", "icon-only", "name", "close-outline"], ["fullscreen", "", 1, "ion-content--white", "ion-padding-horizontal"], [1, "nequi-title"], ["class", "margin-bottom-8", 3, "title", "leftImage", "description", "showIcon", "clicked", 4, "ngFor", "ngForOf"], ["class", "nequi-footer__link link", 3, "click", 4, "ngIf"], [1, "margin-bottom-8", 3, "title", "leftImage", "description", "showIcon", "clicked"], [1, "nequi-footer__link", "link", 3, "click"]], template: function CashInOptionsOrganism_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-header", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-buttons", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CashInOptionsOrganism_Template_ion_button_click_4_listener() { return ctx.close(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "ion-icon", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h2", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-list");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, CashInOptionsOrganism_nequi_nav_button_card_11_Template, 4, 10, "nequi-nav-button-card", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, CashInOptionsOrganism_a_12_Template, 3, 3, "a", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 3, "cashin.bottom-sheet.title"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.options);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showHelp);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _ui_src_lib_components_nav_button_card_nav_button_card_component__WEBPACK_IMPORTED_MODULE_15__["NavButtonCardComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslatePipe"]], styles: [".link[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvY2FzaC1pbi1vcHRpb25zLm9yZ2FuaXNtLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFDRiIsImZpbGUiOiJjYXNoLWluLW9wdGlvbnMub3JnYW5pc20uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saW5rIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4iXX0= */"] });
    return CashInOptionsOrganism;
}(_nequi_ui__WEBPACK_IMPORTED_MODULE_9__["NavRootBottomSheetBaseComponent"]));



/***/ }),

/***/ "Fww2":
/*!******************************************************************************!*\
  !*** ./libs/features/cash-in/src/presentation/middleware/home.middleware.ts ***!
  \******************************************************************************/
/*! exports provided: HomeMiddleware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeMiddleware", function() { return HomeMiddleware; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_cash_in_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/cash-in/config */ "0bkQ");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/utils/types */ "UE8s");
/* harmony import */ var _organisms_cash_in_options_organism__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../organisms/cash-in-options.organism */ "FEQQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");












var HomeMiddleware = /** @class */ (function () {
    function HomeMiddleware(bottomSheetController, router, translateProvider, moduleConfigProvider, cashInConfigProvider) {
        this.bottomSheetController = bottomSheetController;
        this.router = router;
        this.translateProvider = translateProvider;
        this.moduleConfigProvider = moduleConfigProvider;
        this.cashInConfigProvider = cashInConfigProvider;
    }
    HomeMiddleware.prototype.canActivate = function (_route, _state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var route;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.translateProvider.loadModule(this.moduleConfigProvider.i18n.moduleKey)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.showBottomSheet()];
                    case 2:
                        route = _a.sent();
                        if (Object(_nequi_utils_types__WEBPACK_IMPORTED_MODULE_5__["isTypeOf"])(route, String)) {
                            return [2 /*return*/, this.router.createUrlTree([route])];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeMiddleware.prototype.showBottomSheet = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var bottomSheet;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        bottomSheet = this.bottomSheetController.create({
                            component: _nequi_ui__WEBPACK_IMPORTED_MODULE_4__["NavRootBottomSheetComponent"],
                            componentProps: {
                                inputProps: {
                                    idOptions: this.cashInConfigProvider.cashInIdOptions,
                                },
                                rootPage: _organisms_cash_in_options_organism__WEBPACK_IMPORTED_MODULE_6__["CashInOptionsOrganism"],
                            },
                        });
                        return [4 /*yield*/, bottomSheet.open()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, bottomSheet.onDidDismiss()];
                    case 2: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    HomeMiddleware.ɵfac = function HomeMiddleware_Factory(t) { return new (t || HomeMiddleware)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_4__["BottomSheetController"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_3__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_3__["ModuleConfigProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_nequi_features_cash_in_config__WEBPACK_IMPORTED_MODULE_2__["CashInConfigProvider"])); };
    HomeMiddleware.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: HomeMiddleware, factory: HomeMiddleware.ɵfac });
    return HomeMiddleware;
}());



/***/ }),

/***/ "GUYq":
/*!******************************************************************!*\
  !*** ./libs/features/cash-in/src/presentation/cash-in.config.ts ***!
  \******************************************************************/
/*! exports provided: CashInConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashInConfig", function() { return CashInConfig; });
/* harmony import */ var _nequi_features_cash_in_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nequi/features/cash-in/core */ "Kv3X");

var CashInConfig = {
    routes: {
        bank: 'bank',
        linkBankAccount: '/admin/send/bank-recharge/link-bank-account',
        bankRecharge: '/admin/send/bank-recharge',
    },
    urlPse: 'https://recarga.nequi.com.co/bdigitalpsl',
    pseInfo: 'cashin.bottom-sheet.options.pse.info',
    options: [
        {
            id: _nequi_features_cash_in_core__WEBPACK_IMPORTED_MODULE_0__["CashInOptions"].BANCOLOMBIA,
            title: 'cashin.bottom-sheet.options.bancolombia.title',
            description: 'cashin.bottom-sheet.options.bancolombia.description',
            icon: 'cashin.bottom-sheet.options.bancolombia.icon',
        },
        {
            id: _nequi_features_cash_in_core__WEBPACK_IMPORTED_MODULE_0__["CashInOptions"].BANISTMO,
            title: 'cashin.bottom-sheet.options.banistmo.title',
            description: 'cashin.bottom-sheet.options.banistmo.description',
            icon: 'cashin.bottom-sheet.options.banistmo.icon',
            info: 'cashin.bottom-sheet.options.banistmo.info',
        },
        {
            id: _nequi_features_cash_in_core__WEBPACK_IMPORTED_MODULE_0__["CashInOptions"].CASH,
            title: 'cashin.bottom-sheet.options.cash.title',
            description: 'cashin.bottom-sheet.options.cash.description',
            icon: 'cashin.bottom-sheet.options.cash.icon',
            info: 'cashin.bottom-sheet.options.cash.info',
        },
        {
            id: _nequi_features_cash_in_core__WEBPACK_IMPORTED_MODULE_0__["CashInOptions"].ACH,
            title: 'cashin.bottom-sheet.options.ach.title',
            description: 'cashin.bottom-sheet.options.ach.description',
            icon: 'cashin.bottom-sheet.options.ach.icon',
            info: 'cashin.bottom-sheet.options.ach.info',
        },
        {
            id: _nequi_features_cash_in_core__WEBPACK_IMPORTED_MODULE_0__["CashInOptions"].PSE,
            title: 'cashin.bottom-sheet.options.pse.title',
            description: 'cashin.bottom-sheet.options.pse.description',
            icon: 'cashin.bottom-sheet.options.pse.icon',
            info: 'cashin.bottom-sheet.options.pse.info',
        },
    ],
    radiusMap: '1',
    help: 'help',
    showHelp: 'cashin.showHelp',
    context: 'cashIn',
    analytics: {
        events: {
            intentionOfCashIn: {
                name: 'Intencion_cashin',
                params: {
                    cleverTap: ['fecha', 'acciones'],
                },
            },
        },
    },
};


/***/ }),

/***/ "HtQs":
/*!************************************************************!*\
  !*** ./libs/features/cash-in/src/config/cash-in.config.ts ***!
  \************************************************************/
/*! exports provided: CashInConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashInConfig", function() { return CashInConfig; });
var config = {
    i18n: {
        moduleKey: 'cashin',
    },
};
var CashInConfig = Object.freeze(config);


/***/ }),

/***/ "PZQc":
/*!***********************************************************************************!*\
  !*** ./libs/features/cash-in/src/presentation/features-cash-in-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: FeaturesCashInRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesCashInRoutingModule", function() { return FeaturesCashInRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "0bkQ");
/* harmony import */ var _middleware_home_middleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./middleware/home.middleware */ "Fww2");







var routes = [
    {
        path: '',
        component: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Type"],
        canActivate: [_middleware_home_middleware__WEBPACK_IMPORTED_MODULE_4__["HomeMiddleware"]],
    },
];
var FeaturesCashInRoutingModule = /** @class */ (function () {
    function FeaturesCashInRoutingModule() {
    }
    FeaturesCashInRoutingModule.ɵfac = function FeaturesCashInRoutingModule_Factory(t) { return new (t || FeaturesCashInRoutingModule)(); };
    FeaturesCashInRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FeaturesCashInRoutingModule });
    FeaturesCashInRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__["I18nModuleResolver"].setup(routes, [_config__WEBPACK_IMPORTED_MODULE_3__["CashInConfig"].i18n.moduleKey])),
            ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return FeaturesCashInRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FeaturesCashInRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "hcvd":
/*!***************************************************************************!*\
  !*** ./libs/features/cash-in/src/presentation/features-cash-in.module.ts ***!
  \***************************************************************************/
/*! exports provided: FeaturesCashInModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesCashInModule", function() { return FeaturesCashInModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config */ "0bkQ");
/* harmony import */ var _config_cash_in_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config/cash-in.config */ "HtQs");
/* harmony import */ var _features_cash_in_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./features-cash-in-routing.module */ "PZQc");
/* harmony import */ var _middleware_home_middleware__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./middleware/home.middleware */ "Fww2");
/* harmony import */ var _organisms_cash_in_options_organism__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./organisms/cash-in-options.organism */ "FEQQ");
/* harmony import */ var _other_bank_info_other_bank_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./other-bank-info/other-bank-info.component */ "js3i");













var FeaturesCashInModule = /** @class */ (function () {
    function FeaturesCashInModule() {
    }
    FeaturesCashInModule.forChild = function (config) {
        return {
            ngModule: FeaturesCashInModule,
            providers: [
                {
                    provide: _config__WEBPACK_IMPORTED_MODULE_6__["CashInConfigProvider"],
                    useValue: config,
                },
            ],
        };
    };
    FeaturesCashInModule.ɵfac = function FeaturesCashInModule_Factory(t) { return new (t || FeaturesCashInModule)(); };
    FeaturesCashInModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FeaturesCashInModule });
    FeaturesCashInModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [
            _middleware_home_middleware__WEBPACK_IMPORTED_MODULE_9__["HomeMiddleware"],
            {
                provide: _nequi_features_commons__WEBPACK_IMPORTED_MODULE_3__["ModuleConfigProvider"],
                useValue: _config_cash_in_config__WEBPACK_IMPORTED_MODULE_7__["CashInConfig"],
            },
        ], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _features_cash_in_routing_module__WEBPACK_IMPORTED_MODULE_8__["FeaturesCashInRoutingModule"], _nequi_ui__WEBPACK_IMPORTED_MODULE_4__["NequiUiModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]]] });
    return FeaturesCashInModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FeaturesCashInModule, { declarations: [_organisms_cash_in_options_organism__WEBPACK_IMPORTED_MODULE_10__["CashInOptionsOrganism"], _other_bank_info_other_bank_info_component__WEBPACK_IMPORTED_MODULE_11__["OtherBankInfoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _features_cash_in_routing_module__WEBPACK_IMPORTED_MODULE_8__["FeaturesCashInRoutingModule"], _nequi_ui__WEBPACK_IMPORTED_MODULE_4__["NequiUiModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]] }); })();


/***/ }),

/***/ "js3i":
/*!*********************************************************************************************!*\
  !*** ./libs/features/cash-in/src/presentation/other-bank-info/other-bank-info.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: OtherBankInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherBankInfoComponent", function() { return OtherBankInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _other_bank_info_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./other-bank-info.config */ "8IJr");
/* harmony import */ var _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../ui/src/lib/directives/animate-title-on-scroll/animate-title-on-scroll.directive */ "qbWi");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ui_src_lib_components_item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../ui/src/lib/components/item-detail/item-detail.component */ "Ycc7");
/* harmony import */ var _ui_src_lib_pipes_strip_html_strip_html_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../ui/src/lib/pipes/strip-html/strip-html.pipe */ "oslj");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ui_src_lib_pipes_nequi_currency_nequi_currency_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../ui/src/lib/pipes/nequi-currency/nequi-currency.pipe */ "Vb1S");













var _c0 = function (a0) { return { commision: a0 }; };
function OtherBankInfoComponent_app_item_detail_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-item-detail", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "currency");
} if (rf & 2) {
    var item_r1 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 3, item_r1.image))("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 5, item_r1.title))("description", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 7, item_r1.content, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 10, ctx_r0.commision))));
} }
var OtherBankInfoComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(OtherBankInfoComponent, _super);
    function OtherBankInfoComponent(modalController, injector) {
        var _this = _super.call(this, injector) || this;
        _this.modalController = modalController;
        return _this;
    }
    OtherBankInfoComponent.prototype.ngOnInit = function () {
        this.infoMessages = _other_bank_info_config__WEBPACK_IMPORTED_MODULE_4__["OtherBankInfoConfig"].i18n.infoMessages;
    };
    OtherBankInfoComponent.prototype.close = function () {
        this.modalController.dismiss();
    };
    OtherBankInfoComponent.ɵfac = function OtherBankInfoComponent_Factory(t) { return new (t || OtherBankInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"])); };
    OtherBankInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OtherBankInfoComponent, selectors: [["app-other-bank-info"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 21, vars: 14, consts: [[1, "ion-page"], [1, "nequi-header", "nequi-header--white", "ion-no-padding"], ["slot", "end"], ["id", "nav-bottom-sheet_close_button", "color", "medianoche", 3, "click"], ["slot", "icon-only", "name", "close-outline"], [1, "nequi-header__title", "ion-text-start"], ["scrollEvents", "true", "appAnimateTitleOnScroll", "", "fullscreen", "true", 1, "ion-padding-horizontal", "ion-content--enroll"], ["id", "other-bank-info_title_label", 1, "nequi-title"], [3, "icon", "title", "description", 4, "ngFor", "ngForOf"], [1, "nequi-footer", "nequi-footer--padding-24"], ["id", "other-bank-info_continue_button", "shape", "round", "color", "guayaba", "expand", "block", 3, "click"], [3, "icon", "title", "description"]], template: function OtherBankInfoComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-header", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-buttons", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OtherBankInfoComponent_Template_ion_button_click_4_listener() { return ctx.close(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "ion-icon", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-title", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "stripHTML");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-content", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-text", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "stripHTML");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, OtherBankInfoComponent_app_item_detail_15_Template, 5, 14, "app-item-detail", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-footer", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OtherBankInfoComponent_Template_ion_button_click_18_listener() { return ctx.close(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 6, "cashin.other-bank-info.title")));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 10, "cashin.other-bank-info.title")), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.infoMessages);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 12, "cashin.other-bank-info.ready"), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_5__["AnimateTitleOnScrollDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonText"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFooter"], _ui_src_lib_components_item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_7__["ItemDetailComponent"]], pipes: [_ui_src_lib_pipes_strip_html_strip_html_pipe__WEBPACK_IMPORTED_MODULE_8__["StripHTMLPipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], _ui_src_lib_pipes_nequi_currency_nequi_currency_pipe__WEBPACK_IMPORTED_MODULE_10__["NequiCurrencyPipe"]], styles: [".nequi-header__title[_ngcontent-%COMP%] {\n  left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvb3RoZXItYmFuay1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtBQUNGIiwiZmlsZSI6Im90aGVyLWJhbmstaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXF1aS1oZWFkZXJfX3RpdGxlIHtcbiAgbGVmdDogMTBweDtcbn1cbiJdfQ== */"] });
    return OtherBankInfoComponent;
}(_nequi_ui__WEBPACK_IMPORTED_MODULE_3__["NavRootBottomSheetBaseComponent"]));



/***/ }),

/***/ "nV+j":
/*!*********************************************************!*\
  !*** ./libs/features/cash-in/src/presentation/index.ts ***!
  \*********************************************************/
/*! exports provided: FeaturesCashInModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _features_cash_in_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./features-cash-in.module */ "hcvd");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeaturesCashInModule", function() { return _features_cash_in_module__WEBPACK_IMPORTED_MODULE_0__["FeaturesCashInModule"]; });




/***/ })

}]);
//# sourceMappingURL=nequi-features-cash-in-presentation.js.map