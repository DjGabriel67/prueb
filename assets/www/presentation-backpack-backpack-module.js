(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["presentation-backpack-backpack-module"],{

/***/ "A/ow":
/*!*******************************************************************************************************************!*\
  !*** ./libs/apps/base/mobile/src/presentation/backpack/backpack-money-partition/backpack-money-partition.page.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: BackpackMoneyPartitionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackpackMoneyPartitionPage", function() { return BackpackMoneyPartitionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _config_i18n_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @config/i18n.config */ "b+ZT");
/* harmony import */ var _nequi_commons_exceptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/commons/exceptions */ "0sJq");
/* harmony import */ var _nequi_features_card_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/card/core */ "K3wr");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_features_money_management_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/features/money-management/core */ "Qxr/");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _backpack_money_partition_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./backpack-money-partition.config */ "fLsI");
/* harmony import */ var _backpack_money_partition_view_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./backpack-money-partition.view-model */ "nRIH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../ui/src/lib/directives/animate-title-on-scroll/animate-title-on-scroll.directive */ "qbWi");
/* harmony import */ var _ui_src_lib_directives_nequi_currency_style_nequi_currency_style_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../ui/src/lib/directives/nequi-currency-style/nequi-currency-style.directive */ "kVXI");
/* harmony import */ var _ui_src_lib_components_busy_indicator_busy_indicator_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../../ui/src/lib/components/busy-indicator/busy-indicator.component */ "N6nj");
/* harmony import */ var _ui_src_lib_components_skeleton_skeleton_card_skeleton_card_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../../ui/src/lib/components/skeleton/skeleton-card/skeleton-card.component */ "+36n");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ui_src_lib_pipes_nequi_currency_nequi_currency_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../../ui/src/lib/pipes/nequi-currency/nequi-currency.pipe */ "Vb1S");
























function BackpackMoneyPartitionPage_ion_spinner_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "ion-spinner", 16);
} }
function BackpackMoneyPartitionPage_ion_text_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "ion-text", 17);
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nequiCurrencyStyle", ctx_r1.viewModel.totalAmount)("showDecimals", true)("noSpaces", true);
} }
function BackpackMoneyPartitionPage_app_busy_indicator_21_Template(rf, ctx) { if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "app-busy-indicator", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onReload", function BackpackMoneyPartitionPage_app_busy_indicator_21_Template_app_busy_indicator_onReload_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r6); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r5.initialize(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "app-skeleton-card", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("showReload", ctx_r2.viewModel.loadingError)("reloadMessage", ctx_r2.viewModel.loadingError)("showSkeleton", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("items", 5);
} }
function BackpackMoneyPartitionPage_ion_grid_22_ion_card_1_ion_text_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-text", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](item_r8.value[1].alternativeAmountTranslation || _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, item_r8.value[1].amount));
} }
function BackpackMoneyPartitionPage_ion_grid_22_ion_card_1_ion_text_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-text", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](item_r8.value[1].emptyCase.message);
} }
function BackpackMoneyPartitionPage_ion_grid_22_ion_card_1_ion_icon_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "ion-icon", 34);
} }
var _c0 = function (a0) { return { "col__data--ion-text-title--disabled": a0 }; };
function BackpackMoneyPartitionPage_ion_grid_22_ion_card_1_Template(rf, ctx) { if (rf & 1) {
    var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-card", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "ion-row", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function BackpackMoneyPartitionPage_ion_grid_22_ion_card_1_Template_ion_row_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r16); var item_r8 = ctx.$implicit; var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r15.goToModule(item_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "ion-col", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "ion-avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "ion-col", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "ion-text", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, BackpackMoneyPartitionPage_ion_grid_22_ion_card_1_ion_text_8_Template, 3, 3, "ion-text", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](9, BackpackMoneyPartitionPage_ion_grid_22_ion_card_1_ion_text_9_Template, 2, 1, "ion-text", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "ion-col", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](11, BackpackMoneyPartitionPage_ion_grid_22_ion_card_1_ion_icon_11_Template, 1, 0, "ion-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r8 = ctx.$implicit;
    var i_r9 = ctx.index;
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵattribute"]("data-index", i_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("src", ctx_r7.viewModel.setIcons(item_r8.value[1]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](7, _c0, item_r8.value[1].isEmpty));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](item_r8.value[1].label);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !item_r8.value[1].isEmpty);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", item_r8.value[1].isEmpty);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", item_r8.value[1].tapeable);
} }
function BackpackMoneyPartitionPage_ion_grid_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-grid", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, BackpackMoneyPartitionPage_ion_grid_22_ion_card_1_Template, 12, 9, "ion-card", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, ctx_r3.viewModel.arrayPockets));
} }
function BackpackMoneyPartitionPage_ion_footer_23_Template(rf, ctx) { if (rf & 1) {
    var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-footer", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "ion-toolbar", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "ion-item", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function BackpackMoneyPartitionPage_ion_footer_23_Template_ion_item_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r18); var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r17.goToNequiCeiling(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "ion-label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "ion-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](5, 1, "backpack.money-partition.footer"), " ");
} }
var BackpackMoneyPartitionPage = /** @class */ (function () {
    function BackpackMoneyPartitionPage(navigatorProvider, translateProvider, moneyManagementInteractor, toastService, userInfoProvider, cardInteractor, currencyPipe) {
        this.navigatorProvider = navigatorProvider;
        this.translateProvider = translateProvider;
        this.moneyManagementInteractor = moneyManagementInteractor;
        this.toastService = toastService;
        this.userInfoProvider = userInfoProvider;
        this.cardInteractor = cardInteractor;
        this.currencyPipe = currencyPipe;
        this.config = _backpack_money_partition_config__WEBPACK_IMPORTED_MODULE_9__["BackpackMoneyPartitionConfig"];
        this.cardItems = [];
        this.translateProvider.loadModule(_config_i18n_config__WEBPACK_IMPORTED_MODULE_2__["I18nConfig"].modules.BACKPACK);
    }
    BackpackMoneyPartitionPage.prototype.ngOnInit = function () {
        this.viewModel = new _backpack_money_partition_view_model__WEBPACK_IMPORTED_MODULE_10__["BackpackMoneyPartitionViewModel"]();
        this.cardItems = this.translateProvider.get(this.config.cardItems);
        this.cardTapArrow = this.translateProvider.get(this.config.cardTapArrow);
        this.isTapeable = true;
    };
    BackpackMoneyPartitionPage.prototype.ionViewWillEnter = function () {
        this.initialize();
    };
    BackpackMoneyPartitionPage.prototype.ionViewWillLeave = function () {
        this.viewModel.isLoadingMoneyData = true;
        this.viewModel.loadingError = '';
    };
    BackpackMoneyPartitionPage.prototype.closeMoneyDetail = function () {
        this.navigatorProvider.back();
        // TODO: A la espera de solución de BUG - https://github.com/ionic-team/ionic-framework/issues/20448
        // this.navigatorProvider.navigateBack(this.config.routes.home, {
        //   animated: true,
        //   animation: (baseEl, opts) => backpackToHomeTransition(baseEl, opts),
        // });
    };
    BackpackMoneyPartitionPage.prototype.goToModule = function (item) {
        if (!item.value[1].tapeable) {
            return;
        }
        this.navigatorProvider.navigateForward(item.value[1].link);
    };
    BackpackMoneyPartitionPage.prototype.goToNequiCeiling = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.navigatorProvider.navigateRoot(this.config.routes.ceiling, {
                    animated: true,
                    animation: function (baseEl, opts) { return Object(_nequi_ui__WEBPACK_IMPORTED_MODULE_8__["BottomToTopTransition"])(baseEl, opts); },
                });
                return [2 /*return*/];
            });
        });
    };
    Object.defineProperty(BackpackMoneyPartitionPage.prototype, "displayCeilingComponent", {
        get: function () {
            return this.userInfoProvider.getAccount().type !== _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["AccountType"].SAVINGS;
        },
        enumerable: false,
        configurable: true
    });
    BackpackMoneyPartitionPage.prototype.initialize = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var pockets, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        this.viewModel.isLoadingMoneyData = true;
                        this.viewModel.loadingError = '';
                        return [4 /*yield*/, this.moneyManagementInteractor.getPockets([
                                _nequi_features_money_management_core__WEBPACK_IMPORTED_MODULE_7__["PocketType"].POCKET,
                                _nequi_features_money_management_core__WEBPACK_IMPORTED_MODULE_7__["PocketType"].CARD,
                                _nequi_features_money_management_core__WEBPACK_IMPORTED_MODULE_7__["PocketType"].GOAL,
                                _nequi_features_money_management_core__WEBPACK_IMPORTED_MODULE_7__["PocketType"].AVAILABLE,
                                _nequi_features_money_management_core__WEBPACK_IMPORTED_MODULE_7__["PocketType"].MATTRESS,
                            ])];
                    case 1:
                        pockets = _a.sent();
                        return [4 /*yield*/, this.initAlternativeAmounts()];
                    case 2:
                        _a.sent();
                        this.viewModel.setAmounts(pockets, {
                            amountByType: this.altAmtByPocketType,
                            translatorByType: this.altAmtTranslatorByPocketType,
                        });
                        this.viewModel.isLoadingMoneyData = false;
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        if (error_1 instanceof _nequi_commons_exceptions__WEBPACK_IMPORTED_MODULE_3__["EmptyCaseException"]) {
                            this.viewModel.setAmounts();
                            this.toastService.showError(this.translateProvider.get(this.config.i18n.defaultError));
                            return [2 /*return*/];
                        }
                        this.viewModel.loadingError = error_1.message;
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    BackpackMoneyPartitionPage.prototype.initAlternativeAmounts = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.altAmtByPocketType = new Map();
                        this.altAmtTranslatorByPocketType = new Map();
                        return [4 /*yield*/, this.initCardAlternativeAmounts()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BackpackMoneyPartitionPage.prototype.initCardAlternativeAmounts = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var card_1, alternativeAmount, _a;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.cardInteractor.get()];
                    case 1:
                        card_1 = _b.sent();
                        if (!card_1.useFree) {
                            return [2 /*return*/];
                        }
                        alternativeAmount = card_1.balance > 0
                            ? _backpack_money_partition_config__WEBPACK_IMPORTED_MODULE_9__["CardAlternativeAmount"].BALANCE_PLUS_AVAILABLE
                            : _backpack_money_partition_config__WEBPACK_IMPORTED_MODULE_9__["CardAlternativeAmount"].AVAILABLE;
                        this.altAmtByPocketType.set(_nequi_features_money_management_core__WEBPACK_IMPORTED_MODULE_7__["PocketType"].CARD, alternativeAmount);
                        this.altAmtTranslatorByPocketType.set(_nequi_features_money_management_core__WEBPACK_IMPORTED_MODULE_7__["PocketType"].CARD, function (i18nKey) {
                            return _this.translateProvider.get(i18nKey, {
                                balance: _this.currencyPipe.transform(card_1.balance),
                            });
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        _a = _b.sent();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    BackpackMoneyPartitionPage.ɵfac = function BackpackMoneyPartitionPage_Factory(t) { return new (t || BackpackMoneyPartitionPage)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_6__["NavigatorProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_6__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_nequi_features_money_management_core__WEBPACK_IMPORTED_MODULE_7__["MoneyManagementInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_8__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_6__["UserInfoProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_nequi_features_card_core__WEBPACK_IMPORTED_MODULE_4__["CardInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"])); };
    BackpackMoneyPartitionPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: BackpackMoneyPartitionPage, selectors: [["app-backpack-money-partition"]], decls: 24, vars: 14, consts: [[1, "nequi-header", "nequi-header--medianoche"], ["slot", "start"], ["id", "backpack-money-partition_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline", 1, "white-text"], [1, "nequi-header__title", "ion-text-start"], ["scrollEvents", "true", "appAnimateTitleOnScroll", "", "fullscreen", "true", 1, "ion-content--backpack-money-partition", "ion-padding-horizontal"], [1, "nequi-title", "white-text"], [1, "ion-no-padding", "total-cash-grid__all-cash"], [1, "ion-no-padding"], [1, "subtitle"], [1, "total-amount"], ["color", "light", "class", "diamond-spinner", 4, "ngIf"], [3, "nequiCurrencyStyle", "showDecimals", "noSpaces", 4, "ngIf"], ["color", "light", 3, "showReload", "reloadMessage", "showSkeleton", "onReload", 4, "ngIf"], ["class", "ion-no-padding", "display", "block", 4, "ngIf"], ["class", "nequi-footer", 4, "ngIf"], ["color", "light", 1, "diamond-spinner"], [3, "nequiCurrencyStyle", "showDecimals", "noSpaces"], ["color", "light", 3, "showReload", "reloadMessage", "showSkeleton", "onReload"], ["skeleton", "", 3, "items"], ["display", "block", 1, "ion-no-padding"], ["class", "ion-no-padding money-item__card", 4, "ngFor", "ngForOf"], [1, "ion-no-padding", "money-item__card"], [1, "money-item__row", 3, "click"], ["size", "2", 1, "money-item__row__image"], [3, "src"], [1, "col__data"], [1, "col__data--ion-text-title", 3, "ngClass"], ["class", "col__data--ion-text-value", 4, "ngIf"], ["class", "col__data--ion-text-subtitle", 4, "ngIf"], ["size", "1", 1, "money-item__row--ion-col-tap"], ["name", "chevron-forward-outline", 4, "ngIf"], [1, "col__data--ion-text-value"], [1, "col__data--ion-text-subtitle"], ["name", "chevron-forward-outline"], [1, "nequi-footer"], [1, "nequi-footer__toolbar", "ion-no-padding"], ["lines", "none", 1, "nequi-footer__partition", 3, "click"], [1, "nequi-footer--label-padding"], ["slot", "end", "name", "chevron-up-outline"]], template: function BackpackMoneyPartitionPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function BackpackMoneyPartitionPage_Template_ion_button_click_3_listener() { return ctx.closeMoneyDetail(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "ion-title", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](7, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "ion-content", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](11, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "ion-grid", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "ion-row", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "ion-col", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](17, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](19, BackpackMoneyPartitionPage_ion_spinner_19_Template, 1, 0, "ion-spinner", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](20, BackpackMoneyPartitionPage_ion_text_20_Template, 1, 3, "ion-text", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](21, BackpackMoneyPartitionPage_app_busy_indicator_21_Template, 2, 4, "app-busy-indicator", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](22, BackpackMoneyPartitionPage_ion_grid_22_Template, 3, 3, "ion-grid", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](23, BackpackMoneyPartitionPage_ion_footer_23_Template, 7, 3, "ion-footer", 15);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](7, 8, "backpack.money-partition.title"));
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](11, 10, "backpack.money-partition.title"));
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](17, 12, "backpack.money-partition.subtitle"));
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.viewModel.isLoadingMoneyData && !ctx.viewModel.loadingError);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.viewModel.isLoadingMoneyData);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.viewModel.isLoadingMoneyData);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.viewModel.isLoadingMoneyData);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.displayCeilingComponent);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonContent"], _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_13__["AnimateTitleOnScrollDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonCol"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonSpinner"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonText"], _ui_src_lib_directives_nequi_currency_style_nequi_currency_style_directive__WEBPACK_IMPORTED_MODULE_14__["NequiCurrencyStyleDirective"], _ui_src_lib_components_busy_indicator_busy_indicator_component__WEBPACK_IMPORTED_MODULE_15__["BusyIndicatorComponent"], _ui_src_lib_components_skeleton_skeleton_card_skeleton_card_component__WEBPACK_IMPORTED_MODULE_16__["SkeletonCardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonAvatar"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonLabel"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["KeyValuePipe"], _ui_src_lib_pipes_nequi_currency_nequi_currency_pipe__WEBPACK_IMPORTED_MODULE_18__["NequiCurrencyPipe"]], styles: [".ion-content--backpack-money-partition[_ngcontent-%COMP%] {\n  --background: var(--medianoche);\n}\n\nion-item[_ngcontent-%COMP%]::part(native) {\n  padding-left: 5px;\n}\n\n.total-cash-grid__all-cash[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  margin-bottom: 25px;\n}\n\n.col__data[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  font-family: var(--ion-font-family);\n  font-weight: 500;\n  align-self: center;\n  margin-left: 10px;\n}\n\n.col__data--ion-text-title[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: var(--medianoche);\n}\n\n.col__data--ion-text-title--disabled[_ngcontent-%COMP%] {\n  color: var(--gray-70);\n}\n\n.col__data--ion-text-value[_ngcontent-%COMP%], .col__data--ion-text-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--gray-70);\n  font-weight: 400;\n}\n\n.money-item__card[_ngcontent-%COMP%] {\n  height: 80px;\n  left: 0px;\n  top: 0px;\n  border-radius: 8px;\n  align-items: center;\n  align-content: center;\n  vertical-align: middle;\n  margin-top: 5px;\n  margin-bottom: 10px;\n}\n\n.money-item__row[_ngcontent-%COMP%] {\n  height: 80px;\n  align-content: center;\n  vertical-align: middle;\n  padding-left: 10px;\n}\n\n.money-item__row--ion-col[_ngcontent-%COMP%] {\n  align-items: center;\n  align-content: center;\n  vertical-align: middle;\n  text-align: center;\n  display: flex;\n  padding-right: 5px;\n}\n\n.money-item__row--ion-col-tap[_ngcontent-%COMP%] {\n  align-self: center;\n}\n\n.money-item__row--icon[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n  zoom: 2.2x;\n}\n\n.money-item__row--icon-tap[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n\n.money-item__row--div[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  width: 100%;\n  height: 200px;\n  justify-content: center;\n}\n\n.money-item__row__image[_ngcontent-%COMP%] {\n  align-items: center;\n  align-content: center;\n  vertical-align: middle;\n  text-align: center;\n  display: flex;\n}\n\n.subtitle[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n  text-align: center;\n  color: var(--white);\n}\n\n.total-amount[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 24px;\n  text-align: center;\n  color: var(--white);\n}\n\n.total-amount[_ngcontent-%COMP%]   .diamond-spinner[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: -9px;\n}\n\n.diamond-container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0px auto;\n  margin-top: 38px;\n  padding-left: 5px;\n  clear: both;\n  display: block;\n}\n\n.diamond[_ngcontent-%COMP%] {\n  width: 25vw;\n  height: 25vw;\n  display: block;\n  border-radius: 6px;\n  transform: rotate(45deg);\n  position: absolute;\n}\n\n.diamond--main[_ngcontent-%COMP%] {\n  width: 37vw;\n  height: 37vw;\n  margin: 3vw 0 0 20vw;\n  background: var(--white);\n}\n\n.diamond--main[_ngcontent-%COMP%]   .diamond-box[_ngcontent-%COMP%] {\n  margin: 11vw 0 0 0vw;\n}\n\n.diamond--main[_ngcontent-%COMP%]   .diamond-box[_ngcontent-%COMP%]   .diamond-text[_ngcontent-%COMP%] {\n  line-height: 29.37px;\n  font-weight: 500;\n}\n\n.diamond--main[_ngcontent-%COMP%]   .diamond-box[_ngcontent-%COMP%]   .diamond-text--title[_ngcontent-%COMP%] {\n  font-size: 6vw;\n}\n\n.diamond--main[_ngcontent-%COMP%]   .diamond-box[_ngcontent-%COMP%]   .diamond-text--amount[_ngcontent-%COMP%] {\n  font-size: 5vw;\n}\n\n.diamond--top-left[_ngcontent-%COMP%] {\n  background: var(--aguamarica-light);\n  margin: 37vw 0 0 6vw;\n}\n\n.diamond--top-right[_ngcontent-%COMP%] {\n  background: var(--aguamarica-light);\n  margin: 37vw 0 0 46vw;\n}\n\n.diamond--bottom-center[_ngcontent-%COMP%] {\n  background: var(--color-title-box);\n  margin: 57vw 0 0 26vw;\n}\n\n.diamond--bottom-right[_ngcontent-%COMP%] {\n  background: var(--color-title-box);\n  margin: 66vw 0 0 56vw;\n}\n\n.diamond--border-dashed[_ngcontent-%COMP%] {\n  border: 1px dashed var(--color-title-box);\n  background: none;\n}\n\n.diamond--border-dashed[_ngcontent-%COMP%]   .diamond-box[_ngcontent-%COMP%]   .diamond-text[_ngcontent-%COMP%] {\n  color: var(--color-title-box);\n}\n\n.diamond-box[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  display: block;\n  text-align: center;\n  position: absolute;\n  margin: 7vw 0 0 0;\n  transform: rotate(-45deg);\n}\n\n.diamond-box[_ngcontent-%COMP%]   .diamond-text[_ngcontent-%COMP%] {\n  color: var(--medianoche);\n  line-height: 22px;\n}\n\n.diamond-box[_ngcontent-%COMP%]   .diamond-text--title[_ngcontent-%COMP%] {\n  font-size: 4.4vw;\n  font-weight: 500;\n}\n\n.diamond-box[_ngcontent-%COMP%]   .diamond-text--amount[_ngcontent-%COMP%] {\n  font-size: 3.3vw;\n  font-weight: 400;\n}\n\n.diamond-box[_ngcontent-%COMP%]   .diamond-text[_ngcontent-%COMP%]   .diamond-spinner[_ngcontent-%COMP%] {\n  margin-top: -14px;\n  position: relative;\n  top: 16px;\n}\n\n.nequi-footer__toolbar[_ngcontent-%COMP%] {\n  --padding-bottom: 0;\n  padding-top: 0;\n  box-shadow: none;\n  padding-bottom: 0;\n  background: var(--medianoche);\n  box-shadow: var(--purple-box-shadow);\n}\n\n.nequi-footer__partition[_ngcontent-%COMP%] {\n  width: calc(100% - 32px);\n  border-radius: 8px 8px 0px 0px;\n  margin: 0 auto;\n  font-weight: 500;\n  --min-height: 48px;\n  background: var(--white);\n  border-radius: 8px 8px 0 0;\n  box-shadow: 0px -4px 8px var(--black-opacity-24);\n}\n\n.nequi-footer--label-padding[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n\n.white-text[_ngcontent-%COMP%] {\n  color: var(--white);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvYmFja3BhY2stbW9uZXktcGFydGl0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUdFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUtFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFGSjs7QUFJSTtFQUNFLGVBQUE7RUFDQSx3QkFBQTtBQUZOOztBQUlJO0VBQ0UscUJBQUE7QUFGTjs7QUFJSTtFQUVFLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBSE47O0FBU0U7RUFDRSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQU5KOztBQVNFO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQVBKOztBQVNJO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFQTjs7QUFVSTtFQUNFLGtCQUFBO0FBUk47O0FBV0k7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUFUTjs7QUFZSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBVk47O0FBYUk7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBWE47O0FBY0k7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFaTjs7QUFpQkE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFkRjs7QUFpQkE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFkRjs7QUFnQkU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBZEo7O0FBa0JBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBZkY7O0FBa0JBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0FBZkY7O0FBaUJFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0FBZko7O0FBaUJJO0VBQ0Usb0JBQUE7QUFmTjs7QUFpQk07RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0FBZlI7O0FBaUJRO0VBQ0UsY0FBQTtBQWZWOztBQWtCUTtFQUNFLGNBQUE7QUFoQlY7O0FBc0JFO0VBQ0UsbUNBQUE7RUFDQSxvQkFBQTtBQXBCSjs7QUF1QkU7RUFDRSxtQ0FBQTtFQUNBLHFCQUFBO0FBckJKOztBQXdCRTtFQUNFLGtDQUFBO0VBQ0EscUJBQUE7QUF0Qko7O0FBeUJFO0VBQ0Usa0NBQUE7RUFDQSxxQkFBQTtBQXZCSjs7QUEwQkU7RUFDRSx5Q0FBQTtFQUNBLGdCQUFBO0FBeEJKOztBQTJCTTtFQUNFLDZCQUFBO0FBekJSOztBQStCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBNUJGOztBQThCRTtFQUNFLHdCQUFBO0VBQ0EsaUJBQUE7QUE1Qko7O0FBOEJJO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQTVCTjs7QUErQkk7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBN0JOOztBQWdDSTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBOUJOOztBQW9DRTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0FBakNKOztBQW9DRTtFQUNFLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnREFBQTtBQWxDSjs7QUFxQ0U7RUFDRSxrQkFBQTtBQW5DSjs7QUF1Q0E7RUFDRSxtQkFBQTtBQXBDRiIsImZpbGUiOiJiYWNrcGFjay1tb25leS1wYXJ0aXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlvbi1jb250ZW50LS1iYWNrcGFjay1tb25leS1wYXJ0aXRpb24ge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLW1lZGlhbm9jaGUpO1xufVxuXG5pb24taXRlbTo6cGFydChuYXRpdmUpIHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbi50b3RhbC1jYXNoLWdyaWQge1xuICAmX19hbGwtY2FzaCB7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICB9XG59XG5cbi5jb2wge1xuICAmX19kYXRhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseSk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG5cbiAgICAmLS1pb24tdGV4dC10aXRsZSB7XG4gICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICBjb2xvcjogdmFyKC0tbWVkaWFub2NoZSk7XG4gICAgfVxuICAgICYtLWlvbi10ZXh0LXRpdGxlLS1kaXNhYmxlZCB7XG4gICAgICBjb2xvcjogdmFyKC0tZ3JheS03MCk7XG4gICAgfVxuICAgICYtLWlvbi10ZXh0LXZhbHVlLFxuICAgICYtLWlvbi10ZXh0LXN1YnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1ncmF5LTcwKTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgfVxuICB9XG59XG5cbi5tb25leS1pdGVtIHtcbiAgJl9fY2FyZCB7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICB0b3A6IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuXG4gICZfX3JvdyB7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcblxuICAgICYtLWlvbi1jb2wge1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIH1cblxuICAgICYtLWlvbi1jb2wtdGFwIHtcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAmLS1pY29uIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgIHpvb206IDIuMng7XG4gICAgfVxuXG4gICAgJi0taWNvbi10YXAge1xuICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgfVxuXG4gICAgJi0tZGl2IHtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG4gICAgJl9faW1hZ2Uge1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgfVxufVxuXG4uc3VidGl0bGUge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG59XG5cbi50b3RhbC1hbW91bnQge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG5cbiAgLmRpYW1vbmQtc3Bpbm5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1ib3R0b206IC05cHg7XG4gIH1cbn1cblxuLmRpYW1vbmQtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIG1hcmdpbi10b3A6IDM4cHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBjbGVhcjogYm90aDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5kaWFtb25kIHtcbiAgd2lkdGg6IDI1dnc7XG4gIGhlaWdodDogMjV2dztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgJi0tbWFpbiB7XG4gICAgd2lkdGg6IDM3dnc7XG4gICAgaGVpZ2h0OiAzN3Z3O1xuICAgIG1hcmdpbjogM3Z3IDAgMCAyMHZ3O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcblxuICAgIC5kaWFtb25kLWJveCB7XG4gICAgICBtYXJnaW46IDExdncgMCAwIDB2dztcblxuICAgICAgLmRpYW1vbmQtdGV4dCB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOS4zN3B4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuXG4gICAgICAgICYtLXRpdGxlIHtcbiAgICAgICAgICBmb250LXNpemU6IDZ2dztcbiAgICAgICAgfVxuXG4gICAgICAgICYtLWFtb3VudCB7XG4gICAgICAgICAgZm9udC1zaXplOiA1dnc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmLS10b3AtbGVmdCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYWd1YW1hcmljYS1saWdodCk7XG4gICAgbWFyZ2luOiAzN3Z3IDAgMCA2dnc7XG4gIH1cblxuICAmLS10b3AtcmlnaHQge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWFndWFtYXJpY2EtbGlnaHQpO1xuICAgIG1hcmdpbjogMzd2dyAwIDAgNDZ2dztcbiAgfVxuXG4gICYtLWJvdHRvbS1jZW50ZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXRpdGxlLWJveCk7XG4gICAgbWFyZ2luOiA1N3Z3IDAgMCAyNnZ3O1xuICB9XG5cbiAgJi0tYm90dG9tLXJpZ2h0IHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci10aXRsZS1ib3gpO1xuICAgIG1hcmdpbjogNjZ2dyAwIDAgNTZ2dztcbiAgfVxuXG4gICYtLWJvcmRlci1kYXNoZWQge1xuICAgIGJvcmRlcjogMXB4IGRhc2hlZCB2YXIoLS1jb2xvci10aXRsZS1ib3gpO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG5cbiAgICAuZGlhbW9uZC1ib3gge1xuICAgICAgLmRpYW1vbmQtdGV4dCB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10aXRsZS1ib3gpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uZGlhbW9uZC1ib3gge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogN3Z3IDAgMCAwO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuXG4gIC5kaWFtb25kLXRleHQge1xuICAgIGNvbG9yOiB2YXIoLS1tZWRpYW5vY2hlKTtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcblxuICAgICYtLXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogNC40dnc7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cblxuICAgICYtLWFtb3VudCB7XG4gICAgICBmb250LXNpemU6IDMuM3Z3O1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB9XG5cbiAgICAuZGlhbW9uZC1zcGlubmVyIHtcbiAgICAgIG1hcmdpbi10b3A6IC0xNHB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgdG9wOiAxNnB4O1xuICAgIH1cbiAgfVxufVxuXG4ubmVxdWktZm9vdGVyIHtcbiAgJl9fdG9vbGJhciB7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLW1lZGlhbm9jaGUpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXB1cnBsZS1ib3gtc2hhZG93KTtcbiAgfVxuXG4gICZfX3BhcnRpdGlvbiB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMycHgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMHB4IDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIC0tbWluLWhlaWdodDogNDhweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwIDA7XG4gICAgYm94LXNoYWRvdzogMHB4IC00cHggOHB4IHZhcigtLWJsYWNrLW9wYWNpdHktMjQpO1xuICB9XG5cbiAgJi0tbGFiZWwtcGFkZGluZyB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICB9XG59XG5cbi53aGl0ZS10ZXh0IHtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbn1cbiJdfQ== */"] });
    return BackpackMoneyPartitionPage;
}());



/***/ }),

/***/ "Ge4f":
/*!************************************************************************************!*\
  !*** ./libs/apps/base/mobile/src/presentation/backpack/backpack-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: BackpackRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackpackRoutingModule", function() { return BackpackRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _backpack_money_partition_backpack_money_partition_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./backpack-money-partition/backpack-money-partition.page */ "A/ow");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");








var routes = [
    {
        path: 'money-partition',
        component: _backpack_money_partition_backpack_money_partition_page__WEBPACK_IMPORTED_MODULE_4__["BackpackMoneyPartitionPage"],
    },
    {
        path: 'choose-biometry',
        loadChildren: function () {
            return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @nequi/features/security/biometry/presentation/choose-biometry */ "yitO")).then(function (m) { return m.ChooseBiometryModule; });
        },
    },
    {
        path: 'data-treatment',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | nequi-features-data-treatment-presentation */ "nequi-features-data-treatment-presentation").then(__webpack_require__.bind(null, /*! @nequi/features/data-treatment/presentation */ "fJ9x")).then(function (m) {
                return new _nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__["ModuleWithProvidersFactory"](m.FeaturesDataTreatmentModule.withConfig([
                    { provide: _nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__["ORIGIN_FLOW"], useValue: _nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__["OriginFlow"].BACKPACK },
                ]));
            });
        },
    },
];
var BackpackRoutingModule = /** @class */ (function () {
    function BackpackRoutingModule() {
    }
    BackpackRoutingModule.ɵfac = function BackpackRoutingModule_Factory(t) { return new (t || BackpackRoutingModule)(); };
    BackpackRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: BackpackRoutingModule });
    BackpackRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes),
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"].forRoot({
                    modalEnter: _nequi_ui__WEBPACK_IMPORTED_MODULE_3__["BottomToTopModalAnimation"],
                    modalLeave: _nequi_ui__WEBPACK_IMPORTED_MODULE_3__["TopToBottomModalAnimation"],
                }),
            ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return BackpackRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](BackpackRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "fLsI":
/*!*********************************************************************************************************************!*\
  !*** ./libs/apps/base/mobile/src/presentation/backpack/backpack-money-partition/backpack-money-partition.config.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: CardAlternativeAmount, BackpackMoneyPartitionConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardAlternativeAmount", function() { return CardAlternativeAmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackpackMoneyPartitionConfig", function() { return BackpackMoneyPartitionConfig; });
/* harmony import */ var _nequi_features_money_management_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nequi/features/money-management/core */ "Qxr/");
var _a;

var CardAlternativeAmount;
(function (CardAlternativeAmount) {
    CardAlternativeAmount[CardAlternativeAmount["BALANCE_PLUS_AVAILABLE"] = 0] = "BALANCE_PLUS_AVAILABLE";
    CardAlternativeAmount[CardAlternativeAmount["AVAILABLE"] = 1] = "AVAILABLE";
})(CardAlternativeAmount || (CardAlternativeAmount = {}));
var BackpackMoneyPartitionConfig = Object.freeze({
    i18n: {
        defaultError: 'backpack.money-partition.default-error',
    },
    module: {
        available: {
            type: _nequi_features_money_management_core__WEBPACK_IMPORTED_MODULE_0__["PocketType"].AVAILABLE,
            text: 'backpack.money-partition.diamond.available',
            amount: null,
            label: 'Disponible',
            isEmpty: false,
            link: '/admin/dashboard',
            icon: '/assets/images/backpack/money-partition/available.svg',
            tapeable: false,
            priority: 0,
        },
        card: {
            type: _nequi_features_money_management_core__WEBPACK_IMPORTED_MODULE_0__["PocketType"].CARD,
            text: 'backpack.money-partition.diamond.card',
            amount: null,
            label: 'Tarjeta',
            isEmpty: false,
            link: '/admin/card',
            icon: '/assets/images/backpack/money-partition/card.svg',
            tapeable: true,
            priority: 1,
            emptyCase: {
                icon: '/assets/images/backpack/money-partition/card-disabled.svg',
                message: 'Saca tu Tarjeta Nequi',
            },
            alternativeAmount: (_a = {},
                _a[CardAlternativeAmount.BALANCE_PLUS_AVAILABLE] = 'backpack.money-partition.alternative-amount.card.balance-plus-available',
                _a[CardAlternativeAmount.AVAILABLE] = 'backpack.money-partition.alternative-amount.card.available',
                _a),
        },
        pockets: {
            type: _nequi_features_money_management_core__WEBPACK_IMPORTED_MODULE_0__["PocketType"].POCKET,
            text: 'backpack.money-partition.diamond.pockets',
            amount: null,
            label: 'Bolsillos',
            isEmpty: false,
            link: '/admin/money-management/pocket-home',
            icon: '/assets/images/backpack/money-partition/pockets.svg',
            tapeable: true,
            priority: 2,
            emptyCase: {
                icon: '/assets/images/backpack/money-partition/pockets-disabled.svg',
                message: 'Organiza tu plata',
            },
        },
        goals: {
            type: _nequi_features_money_management_core__WEBPACK_IMPORTED_MODULE_0__["PocketType"].GOAL,
            text: 'backpack.money-partition.diamond.goals',
            amount: null,
            label: 'Metas',
            isEmpty: false,
            link: '/admin/money-management/goal-home',
            icon: '/assets/images/backpack/money-partition/goals.svg',
            tapeable: true,
            priority: 3,
            emptyCase: {
                icon: '/assets/images/backpack/money-partition/goals-disabled.svg',
                message: 'Ahorra para un sueño acá',
            },
        },
        mattress: {
            type: _nequi_features_money_management_core__WEBPACK_IMPORTED_MODULE_0__["PocketType"].MATTRESS,
            text: 'backpack.money-partition.diamond.mattress',
            amount: null,
            label: 'Colchón',
            isEmpty: false,
            link: '/admin/money-management/mattress-home',
            icon: '/assets/images/backpack/money-partition/mattress.svg',
            tapeable: true,
            priority: 4,
            emptyCase: {
                icon: '/assets/images/backpack/money-partition/mattress-disabled.svg',
                message: 'Guarda tu plata acá',
            },
        },
    },
    routes: {
        ceiling: '/admin/backpack/ceiling',
        home: '/admin/dashboard',
    },
    cardItems: 'backpack.money-partition.card-items',
    cardTapArrow: 'backpack.money-partition.arrow-tap-icon',
});


/***/ }),

/***/ "nRIH":
/*!*************************************************************************************************************************!*\
  !*** ./libs/apps/base/mobile/src/presentation/backpack/backpack-money-partition/backpack-money-partition.view-model.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: BackpackMoneyPartitionViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackpackMoneyPartitionViewModel", function() { return BackpackMoneyPartitionViewModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _nequi_features_money_management_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/features/money-management/core */ "Qxr/");
/* harmony import */ var _nequi_utils_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/utils/types */ "UE8s");
/* harmony import */ var _backpack_money_partition_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./backpack-money-partition.config */ "fLsI");




var getTotalsByPocketType = function (totals, pocket) {
    if (!totals[pocket.type]) {
        totals[pocket.type] = 0;
    }
    totals[pocket.type] += pocket.amount;
    return totals;
};
var BackpackMoneyPartitionViewModel = /** @class */ (function () {
    function BackpackMoneyPartitionViewModel() {
        this.config = _backpack_money_partition_config__WEBPACK_IMPORTED_MODULE_3__["BackpackMoneyPartitionConfig"];
        this.module = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.config.module);
        this.totalAmount = null;
        this.arrayPockets = [];
    }
    BackpackMoneyPartitionViewModel.prototype.setAmounts = function (pockets, handler) {
        var _a;
        if (!pockets || !handler) {
            return;
        }
        var totals = pockets.reduce(getTotalsByPocketType, {});
        this.totalAmount = pockets.reduce(function (total, pocket) { return (total = total + pocket.amount); }, 0);
        this.module.available.amount = (_a = totals[_nequi_features_money_management_core__WEBPACK_IMPORTED_MODULE_1__["PocketType"].AVAILABLE]) !== null && _a !== void 0 ? _a : 0;
        this.module.mattress.amount = totals[_nequi_features_money_management_core__WEBPACK_IMPORTED_MODULE_1__["PocketType"].MATTRESS];
        this.module.mattress.isEmpty = this.isValueEmpty(this.module.mattress.amount);
        this.module.pockets.amount = totals[_nequi_features_money_management_core__WEBPACK_IMPORTED_MODULE_1__["PocketType"].POCKET];
        this.module.pockets.isEmpty = this.isValueEmpty(this.module.pockets.amount);
        this.module.goals.amount = totals[_nequi_features_money_management_core__WEBPACK_IMPORTED_MODULE_1__["PocketType"].GOAL];
        this.module.goals.isEmpty = this.isValueEmpty(this.module.goals.amount);
        this.module.card.amount = totals[_nequi_features_money_management_core__WEBPACK_IMPORTED_MODULE_1__["PocketType"].CARD];
        this.module.card.isEmpty = this.isValueEmpty(this.module.card.amount);
        this.arrayPockets = Object.entries(this.module);
        this.sortPockets();
        this.handlePocketsAlternativeAmounts(handler);
    };
    BackpackMoneyPartitionViewModel.prototype.setIcons = function (value) {
        return value.isEmpty ? value.emptyCase.icon : value.icon;
    };
    BackpackMoneyPartitionViewModel.prototype.isValueEmpty = function (amount) {
        var isNumber = Object(_nequi_utils_types__WEBPACK_IMPORTED_MODULE_2__["isTypeOf"])(amount, Number);
        return (isNumber && amount < 0) || (!isNumber && !amount);
    };
    BackpackMoneyPartitionViewModel.prototype.sortPockets = function () {
        this.arrayPockets.sort(function (a, b) { return a[1].isEmpty - b[1].isEmpty || a[1].priority - b[1].priority; });
    };
    BackpackMoneyPartitionViewModel.prototype.handlePocketsAlternativeAmounts = function (handler) {
        this.arrayPockets.forEach(function (pocket) {
            if (pocket[1].alternativeAmount) {
                var type = pocket[1].type;
                var amount = handler.amountByType.get(type);
                var i18nKey = pocket[1].alternativeAmount[amount];
                var translator = handler.translatorByType.get(type);
                pocket[1].alternativeAmountTranslation = translator === null || translator === void 0 ? void 0 : translator(i18nKey);
            }
        });
    };
    return BackpackMoneyPartitionViewModel;
}());



/***/ }),

/***/ "t7IN":
/*!****************************************************************************!*\
  !*** ./libs/apps/base/mobile/src/presentation/backpack/backpack.module.ts ***!
  \****************************************************************************/
/*! exports provided: BackpackModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackpackModule", function() { return BackpackModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/money-management/presentation */ "JFCQ");
/* harmony import */ var _nequi_features_settings_presentation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/settings/presentation */ "uYS2");
/* harmony import */ var _nequi_features_style_manager_presentation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/style-manager/presentation */ "An21");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _backpack_money_partition_backpack_money_partition_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./backpack-money-partition/backpack-money-partition.page */ "A/ow");
/* harmony import */ var _backpack_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./backpack-routing.module */ "Ge4f");
/* harmony import */ var _contingency_contingency_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contingency/contingency.page */ "NCpI");
/* harmony import */ var _home_home_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.page */ "LAgr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");














var BackpackModule = /** @class */ (function () {
    function BackpackModule() {
    }
    BackpackModule.ɵfac = function BackpackModule_Factory(t) { return new (t || BackpackModule)(); };
    BackpackModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: BackpackModule });
    BackpackModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ providers: [_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__["QrReaderService"], _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__["MyQrBottomSheetService"], _nequi_features_settings_presentation__WEBPACK_IMPORTED_MODULE_5__["ToolListBottomSheetService"]], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _backpack_routing_module__WEBPACK_IMPORTED_MODULE_10__["BackpackRoutingModule"],
                _nequi_ui__WEBPACK_IMPORTED_MODULE_7__["NequiUiModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
                _nequi_features_style_manager_presentation__WEBPACK_IMPORTED_MODULE_6__["FeaturesStyleManagerModule"],
                _nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_4__["FeaturesMoneyManagementModule"],
            ]] });
    return BackpackModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](BackpackModule, { declarations: [_home_home_page__WEBPACK_IMPORTED_MODULE_12__["HomePage"], _backpack_money_partition_backpack_money_partition_page__WEBPACK_IMPORTED_MODULE_9__["BackpackMoneyPartitionPage"], _contingency_contingency_page__WEBPACK_IMPORTED_MODULE_11__["ContingencyPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
        _backpack_routing_module__WEBPACK_IMPORTED_MODULE_10__["BackpackRoutingModule"],
        _nequi_ui__WEBPACK_IMPORTED_MODULE_7__["NequiUiModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
        _nequi_features_style_manager_presentation__WEBPACK_IMPORTED_MODULE_6__["FeaturesStyleManagerModule"],
        _nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_4__["FeaturesMoneyManagementModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=presentation-backpack-backpack-module.js.map