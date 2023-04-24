(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nequi-features-alternate-flows-presentation"],{

/***/ "2z4U":
/*!***************************************************************************************************!*\
  !*** ./libs/features/alternate-flows/src/presentation/features-alternate-flows-routing.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: FeaturesAlternateFlowsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesAlternateFlowsRoutingModule", function() { return FeaturesAlternateFlowsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _pages_how_to_use_money_how_to_use_money_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/how-to-use-money/how-to-use-money.config */ "yq1a");
/* harmony import */ var _pages_how_to_use_money_how_to_use_money_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/how-to-use-money/how-to-use-money.page */ "DspI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






var routes = [{ path: '', component: _pages_how_to_use_money_how_to_use_money_page__WEBPACK_IMPORTED_MODULE_3__["HowToUseMoneyPage"] }];
var FeaturesAlternateFlowsRoutingModule = /** @class */ (function () {
    function FeaturesAlternateFlowsRoutingModule() {
    }
    FeaturesAlternateFlowsRoutingModule.ɵfac = function FeaturesAlternateFlowsRoutingModule_Factory(t) { return new (t || FeaturesAlternateFlowsRoutingModule)(); };
    FeaturesAlternateFlowsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: FeaturesAlternateFlowsRoutingModule });
    FeaturesAlternateFlowsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(_nequi_features_commons__WEBPACK_IMPORTED_MODULE_1__["I18nModuleResolver"].setup(routes, [_pages_how_to_use_money_how_to_use_money_config__WEBPACK_IMPORTED_MODULE_2__["HowToUseMoneyConfig"].i18n.moduleKey]))], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return FeaturesAlternateFlowsRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](FeaturesAlternateFlowsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "DspI":
/*!********************************************************************************************************!*\
  !*** ./libs/features/alternate-flows/src/presentation/pages/how-to-use-money/how-to-use-money.page.ts ***!
  \********************************************************************************************************/
/*! exports provided: HowToUseMoneyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowToUseMoneyPage", function() { return HowToUseMoneyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_ui_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/ui/services */ "U66T");
/* harmony import */ var _nequi_utils_date__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/utils/date */ "tGfC");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core */ "uzTX");
/* harmony import */ var _how_to_use_money_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./how-to-use-money.config */ "yq1a");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../ui/src/lib/directives/animate-title-on-scroll/animate-title-on-scroll.directive */ "qbWi");
/* harmony import */ var _ui_src_lib_directives_form_content_style_form_content_style_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../ui/src/lib/directives/form-content-style/form-content-style.directive */ "+XT3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ui_src_lib_components_nav_button_card_nav_button_card_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../ui/src/lib/components/nav-button-card/nav-button-card.component */ "gDHj");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");






















function HowToUseMoneyPage_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.config.images.iconHappyFace);
} }
function HowToUseMoneyPage_nequi_nav_button_card_14_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nequi-nav-button-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("clicked", function HowToUseMoneyPage_nequi_nav_button_card_14_Template_nequi_nav_button_card_clicked_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); var option_r2 = ctx.$implicit; var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.onOptionClicked(option_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var option_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", option_r2.id)("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 5, option_r2.title))("leftImage", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 7, option_r2.icon))("description", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 9, option_r2.description))("showIcon", true);
} }
var HowToUseMoneyPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HowToUseMoneyPage, _super);
    function HowToUseMoneyPage(injector, navigatorProvider, firstTimeMessageBottomSheetService, translateProvider, bottomSheetController, analyticsInteractor) {
        var _this = _super.call(this, injector) || this;
        _this.navigatorProvider = navigatorProvider;
        _this.firstTimeMessageBottomSheetService = firstTimeMessageBottomSheetService;
        _this.translateProvider = translateProvider;
        _this.bottomSheetController = bottomSheetController;
        _this.analyticsInteractor = analyticsInteractor;
        _this.config = _how_to_use_money_config__WEBPACK_IMPORTED_MODULE_10__["HowToUseMoneyConfig"];
        return _this;
    }
    HowToUseMoneyPage.prototype.goBack = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.navigatorProvider.back();
                return [2 /*return*/];
            });
        });
    };
    HowToUseMoneyPage.prototype.onOptionClicked = function (option) {
        var bottomSheetMessages;
        switch (option.id) {
            case _core__WEBPACK_IMPORTED_MODULE_9__["HowToUseMoneyOptions"].TO_PAY:
                bottomSheetMessages = this.translateProvider.get(this.config.options[_core__WEBPACK_IMPORTED_MODULE_9__["HowToUseMoneyOptions"].TO_PAY].bottomSheet);
                this.showBottomSheetFirstMessage(bottomSheetMessages, option.id);
                this.setAnalyticsIntentionOfCardRequest(this.config.analytics.events.card.actions.pay, this.config.analytics.events.card.name);
                break;
            case _core__WEBPACK_IMPORTED_MODULE_9__["HowToUseMoneyOptions"].TO_BUY:
                bottomSheetMessages = this.translateProvider.get(this.config.options[_core__WEBPACK_IMPORTED_MODULE_9__["HowToUseMoneyOptions"].TO_BUY].bottomSheet);
                this.showBottomSheetFirstMessage(bottomSheetMessages, option.id);
                this.setAnalyticsIntentionOfCardRequest(this.config.analytics.events.card.actions.buy, this.config.analytics.events.card.name);
                break;
            case _core__WEBPACK_IMPORTED_MODULE_9__["HowToUseMoneyOptions"].TRANSPORT:
                bottomSheetMessages = this.translateProvider.get(this.config.options[_core__WEBPACK_IMPORTED_MODULE_9__["HowToUseMoneyOptions"].TRANSPORT].bottomSheet);
                this.showBottomSheetFirstMessageWhitSelect(bottomSheetMessages);
                this.setAnalyticsIntentionOfCardRequest(this.config.analytics.events.card.actions.transport, this.config.analytics.events.card.name);
                break;
            case _core__WEBPACK_IMPORTED_MODULE_9__["HowToUseMoneyOptions"].SERVICES:
                bottomSheetMessages = this.translateProvider.get(this.config.options[_core__WEBPACK_IMPORTED_MODULE_9__["HowToUseMoneyOptions"].SERVICES].bottomSheet);
                this.showBottomSheetFirstMessage(bottomSheetMessages, option.id);
                this.setAnalyticsIntentionOfCardRequest(this.config.analytics.events.card.actions.services, this.config.analytics.events.card.name);
                break;
            case _core__WEBPACK_IMPORTED_MODULE_9__["HowToUseMoneyOptions"].OTHERS:
                bottomSheetMessages = this.translateProvider.get(this.config.options[_core__WEBPACK_IMPORTED_MODULE_9__["HowToUseMoneyOptions"].OTHERS].bottomSheet);
                this.showBottomSheetFirstMessage(bottomSheetMessages, option.id);
                this.setAnalyticsIntentionOfCardRequest(this.config.analytics.events.card.actions.others, this.config.analytics.events.card.name);
                break;
            default:
                this.navigatorProvider.navigateForward(this.config.urls.others);
                break;
        }
    };
    HowToUseMoneyPage.prototype.showBottomSheetFirstMessage = function (data, option) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.firstTimeMessageBottomSheetService.show({
                            icon: data.icon,
                            message: data.title,
                            content: data.description,
                            button: {
                                label: data.firstButton,
                                color: 'guayaba',
                                fill: 'outline',
                                action: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                        this.firstOptionSelectedBottomSheet(option, data.url);
                                        return [2 /*return*/];
                                    });
                                }); },
                            },
                            buttonNext: {
                                label: data.secondButton,
                                color: 'medianoche',
                                fill: 'outline',
                                action: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                        this.firstTimeMessageBottomSheetService.hide(true);
                                        this.skipFirsOptionSelectedBottomSheet(option);
                                        return [2 /*return*/];
                                    });
                                }); },
                            },
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HowToUseMoneyPage.prototype.firstOptionSelectedBottomSheet = function (option, url) {
        switch (option) {
            case _core__WEBPACK_IMPORTED_MODULE_9__["HowToUseMoneyOptions"].TO_PAY:
                this.navigatorProvider.navigateForward(url);
                break;
            case _core__WEBPACK_IMPORTED_MODULE_9__["HowToUseMoneyOptions"].TO_BUY:
                Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_8__["openUrl"])(url);
                break;
            case _core__WEBPACK_IMPORTED_MODULE_9__["HowToUseMoneyOptions"].SERVICES:
                this.setAnalyticsIntentionOfCardRequest(this.config.analytics.events.payServives.actions.payServices, this.config.analytics.events.payServives.name);
                this.navigatorProvider.navigateForward(url, { state: { id: 'publicServices' } });
                break;
            case _core__WEBPACK_IMPORTED_MODULE_9__["HowToUseMoneyOptions"].OTHERS:
                this.firstTimeMessageBottomSheetService.hide(true);
                this.navigatorProvider.navigateForward(url);
                break;
            default:
                break;
        }
    };
    HowToUseMoneyPage.prototype.skipFirsOptionSelectedBottomSheet = function (option) {
        switch (option) {
            case _core__WEBPACK_IMPORTED_MODULE_9__["HowToUseMoneyOptions"].TO_PAY:
                this.navigatorProvider.navigateForward(this.config.urls.others);
                this.setAnalyticsIntentionOfCardRequest(this.config.analytics.events.skipPay.actions.skip, this.config.analytics.events.skipPay.name);
                break;
            case _core__WEBPACK_IMPORTED_MODULE_9__["HowToUseMoneyOptions"].TO_BUY:
                this.navigatorProvider.navigateForward(this.config.urls.others);
                break;
            case _core__WEBPACK_IMPORTED_MODULE_9__["HowToUseMoneyOptions"].TRANSPORT:
                this.navigatorProvider.navigateForward(this.config.urls.others);
                this.setAnalyticsIntentionOfCardRequest(this.config.analytics.events.skipTransport.actions.skip /*  */, this.config.analytics.events.skipTransport.name);
                break;
            case _core__WEBPACK_IMPORTED_MODULE_9__["HowToUseMoneyOptions"].SERVICES:
                this.navigatorProvider.navigateForward(this.config.urls.others);
                this.setAnalyticsIntentionOfCardRequest(this.config.analytics.events.skipServices.actions.skip, this.config.analytics.events.skipServices.name);
                break;
            case _core__WEBPACK_IMPORTED_MODULE_9__["HowToUseMoneyOptions"].OTHERS:
                this.navigatorProvider.navigateForward(this.config.urls.others);
                this.setAnalyticsIntentionOfCardRequest(this.config.analytics.events.skipNequiCard.actions.skip, this.config.analytics.events.skipNequiCard.name);
                break;
            default:
                break;
        }
    };
    HowToUseMoneyPage.prototype.showBottomSheetFirstMessageWhitSelect = function (data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var bottomSheet;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        bottomSheet = this.bottomSheetController.create({
                            component: _nequi_ui__WEBPACK_IMPORTED_MODULE_5__["FirstTimeMessageWithSelectOrganism"],
                            componentProps: {
                                icon: data.icon,
                                message: data.title,
                                content: data.description,
                                options: this.config.cities,
                                label: data.label,
                                button: {
                                    label: data.firstButton,
                                    color: 'medianoche',
                                    fill: 'outline',
                                    action: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                            this.firstTimeMessageBottomSheetService.hide(true);
                                            this.navigatorProvider.navigateForward(this.config.urls.others);
                                            return [2 /*return*/];
                                        });
                                    }); },
                                },
                                optionSelected: function (option) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                        if (option.code === this.config.medellinCode) {
                                            this.navigatorProvider.navigateForward(this.config.urls.civica);
                                        }
                                        else {
                                            this.navigatorProvider.navigateForward(this.config.urls.others);
                                        }
                                        return [2 /*return*/];
                                    });
                                }); },
                            },
                        });
                        return [4 /*yield*/, bottomSheet.open()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HowToUseMoneyPage.prototype.setAnalyticsIntentionOfCardRequest = function (event, eventName) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.analyticsInteractor.trackEvent({
                    type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["AnalyticsType"].FACEBOOK,
                    params: { eventName: eventName },
                });
                this.analyticsInteractor.trackEvent({
                    type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["AnalyticsType"].FIREBASE,
                    params: { eventName: eventName },
                });
                this.analyticsInteractor.trackEvent({
                    type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["AnalyticsType"].CLEVERTAP,
                    params: {
                        eventName: eventName,
                        eventProps: Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_8__["stringsArrayToObjectWithValues"])(this.config.analytics.events.card.params.cleverTap, [event, Object(_nequi_utils_date__WEBPACK_IMPORTED_MODULE_7__["getFormattedDateTimes"])()]),
                    },
                });
                return [2 /*return*/];
            });
        });
    };
    HowToUseMoneyPage.ɵfac = function HowToUseMoneyPage_Factory(t) { return new (t || HowToUseMoneyPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_4__["NavigatorProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui_services__WEBPACK_IMPORTED_MODULE_6__["FirstTimeMessageBottomSheetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_4__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_5__["BottomSheetController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["AnalyticsInteractor"])); };
    HowToUseMoneyPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HowToUseMoneyPage, selectors: [["nequi-how-to-use-money"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 15, vars: 8, consts: [[1, "nequi-header", "nequi-header--white"], ["slot", "start"], ["id", "recharge-cell_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], ["scrollEvents", "true", "appAnimateTitleOnScroll", "", "fullscreen", "true", "appFormContentStyle", "", 1, "ion-content--empty-case", "ion-text-center", "ion-padding", "first-time-message__content"], ["class", "first-time-message__img", 4, "ngIf"], [1, "first-time-message__text"], [1, "first-time-message__description"], ["class", "margin-bottom-8", 3, "id", "title", "leftImage", "description", "showIcon", "clicked", 4, "ngFor", "ngForOf"], [1, "first-time-message__img"], [3, "src"], [1, "margin-bottom-8", 3, "id", "title", "leftImage", "description", "showIcon", "clicked"]], template: function HowToUseMoneyPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HowToUseMoneyPage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-content", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, HowToUseMoneyPage_div_6_Template, 2, 1, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-text", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-list");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, HowToUseMoneyPage_nequi_nav_button_card_14_Template, 4, 11, "nequi-nav-button-card", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.config.images.iconHappyFace);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 4, "alternate-flows.flows.title"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 6, "alternate-flows.flows.content"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.config.options);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonContent"], _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_12__["AnimateTitleOnScrollDirective"], _ui_src_lib_directives_form_content_style_form_content_style_directive__WEBPACK_IMPORTED_MODULE_13__["FormContentStyleDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonImg"], _ui_src_lib_components_nav_button_card_nav_button_card_component__WEBPACK_IMPORTED_MODULE_15__["NavButtonCardComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslatePipe"]], styles: [".first-time-message__content[_ngcontent-%COMP%] {\n  padding: 0 24px;\n}\n.first-time-message__content-img[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.first-time-message__img[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-bottom: 16px;\n  padding-top: 40px;\n}\n.first-time-message__img[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%] {\n  width: 84px;\n  min-height: 38px;\n  display: inline;\n}\n.first-time-message__text[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 30px;\n  text-align: center;\n  margin-top: 5px;\n  padding: 0 30px;\n  display: block;\n}\n.first-time-message__description[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--card-modal-text);\n  margin-top: 10px 0;\n  padding: 0 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvaG93LXRvLXVzZS1tb25leS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxlQUFBO0FBQUo7QUFHRTtFQUNFLHFCQUFBO0FBREo7QUFJRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQUZKO0FBSUk7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBRk47QUFNRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFKSjtBQU9FO0VBQ0UsZUFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBTEoiLCJmaWxlIjoiaG93LXRvLXVzZS1tb25leS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlyc3QtdGltZS1tZXNzYWdlIHtcbiAgJl9fY29udGVudCB7XG4gICAgcGFkZGluZzogMCAyNHB4O1xuICB9XG5cbiAgJl9fY29udGVudC1pbWcge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuXG4gICZfX2ltZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuXG4gICAgaW9uLWltZyB7XG4gICAgICB3aWR0aDogODRweDtcbiAgICAgIG1pbi1oZWlnaHQ6IDM4cHg7XG4gICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgfVxuICB9XG5cbiAgJl9fdGV4dCB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBwYWRkaW5nOiAwIDMwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAmX19kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiB2YXIoLS1jYXJkLW1vZGFsLXRleHQpO1xuICAgIG1hcmdpbi10b3A6IDEwcHggMDtcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG4gIH1cbn1cbiJdfQ== */"] });
    return HowToUseMoneyPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__["FeatureBasePage"]));



/***/ }),

/***/ "PoZN":
/*!***********************************************************!*\
  !*** ./libs/features/alternate-flows/src/config/index.ts ***!
  \***********************************************************/
/*! exports provided: AlternateFlowsConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlternateFlowsConfig", function() { return AlternateFlowsConfig; });
var AlternateFlowsConfig = Object.freeze({
    i18n: {
        moduleKey: 'alternate-flows',
    },
    applicationData: {},
    cache: {},
});


/***/ }),

/***/ "hG/X":
/*!*****************************************************************!*\
  !*** ./libs/features/alternate-flows/src/presentation/index.ts ***!
  \*****************************************************************/
/*! exports provided: FeaturesAlternateFlowsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _features_alternate_flows_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./features-alternate-flows.module */ "slXE");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeaturesAlternateFlowsModule", function() { return _features_alternate_flows_module__WEBPACK_IMPORTED_MODULE_0__["FeaturesAlternateFlowsModule"]; });




/***/ }),

/***/ "slXE":
/*!*******************************************************************************************!*\
  !*** ./libs/features/alternate-flows/src/presentation/features-alternate-flows.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: FeaturesAlternateFlowsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesAlternateFlowsModule", function() { return FeaturesAlternateFlowsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "PoZN");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core */ "uzTX");
/* harmony import */ var _features_alternate_flows_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./features-alternate-flows-routing.module */ "2z4U");
/* harmony import */ var _pages_how_to_use_money_how_to_use_money_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/how-to-use-money/how-to-use-money.page */ "DspI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










var FeaturesAlternateFlowsModule = /** @class */ (function () {
    function FeaturesAlternateFlowsModule() {
    }
    FeaturesAlternateFlowsModule.ɵfac = function FeaturesAlternateFlowsModule_Factory(t) { return new (t || FeaturesAlternateFlowsModule)(); };
    FeaturesAlternateFlowsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: FeaturesAlternateFlowsModule });
    FeaturesAlternateFlowsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [
            {
                provide: _core__WEBPACK_IMPORTED_MODULE_6__["AlternateFlowsInteractor"],
                deps: [_core__WEBPACK_IMPORTED_MODULE_6__["AlternateFlowsRepository"]],
                useClass: _core__WEBPACK_IMPORTED_MODULE_6__["AlternateFlowsInteractor"],
            },
            {
                provide: _nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__["ModuleConfigProvider"],
                useValue: _config__WEBPACK_IMPORTED_MODULE_5__["AlternateFlowsConfig"],
            },
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _features_alternate_flows_routing_module__WEBPACK_IMPORTED_MODULE_7__["FeaturesAlternateFlowsRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
                _nequi_ui__WEBPACK_IMPORTED_MODULE_3__["NequiComponentsModule"],
                _nequi_ui__WEBPACK_IMPORTED_MODULE_3__["NequiUiModule"],
            ]] });
    return FeaturesAlternateFlowsModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](FeaturesAlternateFlowsModule, { declarations: [_pages_how_to_use_money_how_to_use_money_page__WEBPACK_IMPORTED_MODULE_8__["HowToUseMoneyPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _features_alternate_flows_routing_module__WEBPACK_IMPORTED_MODULE_7__["FeaturesAlternateFlowsRoutingModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
        _nequi_ui__WEBPACK_IMPORTED_MODULE_3__["NequiComponentsModule"],
        _nequi_ui__WEBPACK_IMPORTED_MODULE_3__["NequiUiModule"]] }); })();


/***/ }),

/***/ "yq1a":
/*!**********************************************************************************************************!*\
  !*** ./libs/features/alternate-flows/src/presentation/pages/how-to-use-money/how-to-use-money.config.ts ***!
  \**********************************************************************************************************/
/*! exports provided: HowToUseMoneyConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowToUseMoneyConfig", function() { return HowToUseMoneyConfig; });
/* harmony import */ var _nequi_features_alternate_flows_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nequi/features/alternate-flows/core */ "uzTX");

var HowToUseMoneyConfig = Object.freeze({
    i18n: {
        moduleKey: 'alternate-flows',
    },
    routes: {
        currentUrl: 'admin/experiment-alternate-flows',
        home: 'admin/dashboard',
    },
    images: {
        iconHappyFace: '/assets/images/profile/my-info/happy-face-blue.svg',
    },
    options: [
        {
            id: _nequi_features_alternate_flows_core__WEBPACK_IMPORTED_MODULE_0__["HowToUseMoneyOptions"].TO_PAY,
            title: 'alternate-flows.flows.options.pay.title',
            description: 'alternate-flows.flows.options.pay.description',
            icon: 'alternate-flows.flows.options.pay.icon',
            bottomSheet: 'alternate-flows.flows.options.pay.bottomSheet',
        },
        {
            id: _nequi_features_alternate_flows_core__WEBPACK_IMPORTED_MODULE_0__["HowToUseMoneyOptions"].TO_BUY,
            title: 'alternate-flows.flows.options.buy.title',
            description: 'alternate-flows.flows.options.buy.description',
            icon: 'alternate-flows.flows.options.buy.icon',
            bottomSheet: 'alternate-flows.flows.options.buy.bottomSheet',
        },
        {
            id: _nequi_features_alternate_flows_core__WEBPACK_IMPORTED_MODULE_0__["HowToUseMoneyOptions"].TRANSPORT,
            title: 'alternate-flows.flows.options.transport.title',
            description: 'alternate-flows.flows.options.transport.description',
            icon: 'alternate-flows.flows.options.transport.icon',
            bottomSheet: 'alternate-flows.flows.options.transport.bottomSheet',
        },
        {
            id: _nequi_features_alternate_flows_core__WEBPACK_IMPORTED_MODULE_0__["HowToUseMoneyOptions"].SERVICES,
            title: 'alternate-flows.flows.options.services.title',
            description: 'alternate-flows.flows.options.services.description',
            icon: 'alternate-flows.flows.options.services.icon',
            bottomSheet: 'alternate-flows.flows.options.services.bottomSheet',
        },
        {
            id: _nequi_features_alternate_flows_core__WEBPACK_IMPORTED_MODULE_0__["HowToUseMoneyOptions"].OTHERS,
            title: 'alternate-flows.flows.options.others.title',
            description: 'alternate-flows.flows.options.others.description',
            icon: 'alternate-flows.flows.options.others.icon',
            bottomSheet: 'alternate-flows.flows.options.others.bottomSheet',
        },
    ],
    urls: {
        others: '/admin/cash-out-money',
        civica: 'admin/dynamic-form/form/RECARGA_TRANSPORTE_CIVICA_12001',
    },
    cities: [
        {
            code: '01',
            name: 'Bogotá',
        },
        {
            code: '02',
            name: 'Medellin',
        },
        {
            code: '03',
            name: 'Cali',
        },
        {
            code: '04',
            name: 'Pereira',
        },
        {
            code: '05',
            name: 'Manizales',
        },
        {
            code: '06',
            name: 'Bucaramanga',
        },
        {
            code: '07',
            name: 'Cartagena',
        },
        {
            code: '08',
            name: 'Barranquilla',
        },
    ],
    analytics: {
        events: {
            card: {
                name: 'opciones_retiro_efectivo',
                params: { cleverTap: ['accion', 'fecha'] },
                actions: {
                    pay: 'pagar',
                    buy: 'comprar',
                    transport: 'transporte',
                    services: 'servicios públicos',
                    others: 'otros',
                },
            },
            skipPay: {
                name: 'omitir_evento',
                params: { cleverTap: ['accion', 'fecha'] },
                actions: {
                    skip: 'omitir',
                },
            },
            skipTransport: {
                name: 'omitir_recarga_transporte',
                params: { cleverTap: ['accion', 'fecha'] },
                actions: {
                    skip: 'omitir',
                },
            },
            payServives: {
                name: 'intencion_pago_serviciospublicos',
                params: { cleverTap: ['accion', 'fecha'] },
                actions: {
                    payServices: 'pagar',
                },
            },
            skipServices: {
                name: 'omitir_servicios',
                params: { cleverTap: ['accion', 'fecha'] },
                actions: {
                    skip: 'omitir',
                },
            },
            skipNequiCard: {
                name: 'omitir_tarjeta',
                params: { cleverTap: ['accion', 'fecha'] },
                actions: {
                    skip: 'omitir',
                },
            },
        },
    },
    medellinCode: '02',
});


/***/ })

}]);
//# sourceMappingURL=nequi-features-alternate-flows-presentation.js.map