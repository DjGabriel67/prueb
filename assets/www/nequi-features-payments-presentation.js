(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nequi-features-payments-presentation"],{

/***/ "/7cD":
/*!**********************************************************!*\
  !*** ./libs/features/payments/src/presentation/index.ts ***!
  \**********************************************************/
/*! exports provided: FeaturePaymentsModule, PaymentOptionsOrganism */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _feature_payments_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feature-payments.module */ "nBiU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeaturePaymentsModule", function() { return _feature_payments_module__WEBPACK_IMPORTED_MODULE_0__["FeaturePaymentsModule"]; });

/* harmony import */ var _organisms_payment_options_organism__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./organisms/payment-options.organism */ "9VBE");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaymentOptionsOrganism", function() { return _organisms_payment_options_organism__WEBPACK_IMPORTED_MODULE_1__["PaymentOptionsOrganism"]; });





/***/ }),

/***/ "1M7f":
/*!***************************************************************************************!*\
  !*** ./libs/features/payments/src/presentation/middleware/payment-home.middleware.ts ***!
  \***************************************************************************************/
/*! exports provided: PaymentHomeMiddleware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentHomeMiddleware", function() { return PaymentHomeMiddleware; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_payments_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/payments/config */ "cxwD");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/utils/types */ "UE8s");
/* harmony import */ var _organisms_payment_options_organism__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../organisms/payment-options.organism */ "9VBE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");












var PaymentHomeMiddleware = /** @class */ (function () {
    function PaymentHomeMiddleware(bottomSheetController, router, translateProvider, moduleConfigProvider, paymentsConfigProvider) {
        this.bottomSheetController = bottomSheetController;
        this.router = router;
        this.translateProvider = translateProvider;
        this.moduleConfigProvider = moduleConfigProvider;
        this.paymentsConfigProvider = paymentsConfigProvider;
    }
    PaymentHomeMiddleware.prototype.canActivate = function (_route, state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var routeUrl;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.translateProvider.loadModule(this.moduleConfigProvider.i18n.moduleKey)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.openBottomSheet()];
                    case 2:
                        routeUrl = _a.sent();
                        if (routeUrl && Object(_nequi_utils_types__WEBPACK_IMPORTED_MODULE_5__["isTypeOf"])(routeUrl, String)) {
                            return [2 /*return*/, this.router.createUrlTree([state.url, routeUrl])];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    PaymentHomeMiddleware.prototype.openBottomSheet = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var bottomSheet, response;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        bottomSheet = this.bottomSheetController.create({
                            component: _nequi_ui__WEBPACK_IMPORTED_MODULE_4__["NavRootBottomSheetComponent"],
                            isBackdropDismiss: true,
                            componentProps: {
                                rootPage: _organisms_payment_options_organism__WEBPACK_IMPORTED_MODULE_6__["PaymentOptionsOrganism"],
                                inputProps: {
                                    showReportOption: this.paymentsConfigProvider.showReportOption,
                                },
                            },
                        });
                        return [4 /*yield*/, bottomSheet.open()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, bottomSheet.onDidDismiss()];
                    case 2:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    PaymentHomeMiddleware.ɵfac = function PaymentHomeMiddleware_Factory(t) { return new (t || PaymentHomeMiddleware)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_4__["BottomSheetController"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__["ModuleConfigProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_nequi_features_payments_config__WEBPACK_IMPORTED_MODULE_3__["PaymentsConfigProvider"])); };
    PaymentHomeMiddleware.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: PaymentHomeMiddleware, factory: PaymentHomeMiddleware.ɵfac });
    return PaymentHomeMiddleware;
}());



/***/ }),

/***/ "2mSA":
/*!*****************************************************************************************************!*\
  !*** ./libs/features/payments/src/presentation/pages/pending-payment/pending-payment.view-model.ts ***!
  \*****************************************************************************************************/
/*! exports provided: PendingPaymentViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingPaymentViewModel", function() { return PendingPaymentViewModel; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "bt4H");


var PendingPaymentViewModel = /** @class */ (function () {
    function PendingPaymentViewModel() {
        this.isBalanceShowed = false;
    }
    PendingPaymentViewModel.prototype.init = function (data) {
        this.merchant = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]({ value: data === null || data === void 0 ? void 0 : data.name, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]);
        this.amount = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]({ value: data === null || data === void 0 ? void 0 : data.value, disabled: true }, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(1),
        ]);
        this.pocket = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            amount: this.amount,
            merchant: this.merchant,
            pocket: this.pocket,
        });
    };
    PendingPaymentViewModel.prototype.getPocketName = function () {
        var _a, _b;
        return this.pocket.value ? (_b = (_a = this.pocket) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.name : _config__WEBPACK_IMPORTED_MODULE_1__["PaymentsConfig"].defaultPocket;
    };
    return PendingPaymentViewModel;
}());



/***/ }),

/***/ "9VBE":
/*!***************************************************************************************!*\
  !*** ./libs/features/payments/src/presentation/organisms/payment-options.organism.ts ***!
  \***************************************************************************************/
/*! exports provided: PaymentOptionsOrganism */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentOptionsOrganism", function() { return PaymentOptionsOrganism; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "bt4H");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ui_src_lib_components_nav_button_card_nav_button_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../ui/src/lib/components/nav-button-card/nav-button-card.component */ "gDHj");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");












function PaymentOptionsOrganism_nequi_nav_button_card_11_Template(rf, ctx) { if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nequi-nav-button-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("clicked", function PaymentOptionsOrganism_nequi_nav_button_card_11_Template_nequi_nav_button_card_clicked_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); var option_r1 = ctx.$implicit; var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.onOptionClicked(option_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var option_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 3, option_r1.title))("leftImage", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 5, option_r1.icon))("description", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 7, option_r1.description));
} }
var PaymentOptionsOrganism = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PaymentOptionsOrganism, _super);
    function PaymentOptionsOrganism(moduleConfigProvider, translateProvider, injector) {
        var _this = _super.call(this, injector) || this;
        _this.moduleConfigProvider = moduleConfigProvider;
        _this.options = _config__WEBPACK_IMPORTED_MODULE_5__["PaymentsConfig"].options;
        translateProvider.loadModule(_this.moduleConfigProvider.i18n.moduleKey);
        return _this;
    }
    PaymentOptionsOrganism.prototype.onOptionClicked = function (option) {
        if (option.url) {
            return this.bottomSheetController.dismiss(option.url);
        }
        this.forward(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__["MyQrOrganism"], {
            theme: 'light',
            showReportOption: this.showReportOption,
        });
    };
    PaymentOptionsOrganism.prototype.close = function () {
        this.bottomSheetController.dismiss(null);
    };
    PaymentOptionsOrganism.ɵfac = function PaymentOptionsOrganism_Factory(t) { return new (t || PaymentOptionsOrganism)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__["ModuleConfigProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"])); };
    PaymentOptionsOrganism.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PaymentOptionsOrganism, selectors: [["app-payment-options"]], inputs: { showReportOption: "showReportOption" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 12, vars: 4, consts: [[1, "ion-page"], [1, "ion-no-border"], ["slot", "end"], ["id", "option-selector_close_button", 3, "click"], ["color", "dark", "slot", "icon-only", "name", "close-outline"], ["fullscreen", "", 1, "ion-content--white", "ion-padding-horizontal"], [1, "nequi-title"], ["class", "margin-bottom-8", "showIcon", "true", 3, "title", "leftImage", "description", "clicked", 4, "ngFor", "ngForOf"], ["showIcon", "true", 1, "margin-bottom-8", 3, "title", "leftImage", "description", "clicked"]], template: function PaymentOptionsOrganism_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-header", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-buttons", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PaymentOptionsOrganism_Template_ion_button_click_4_listener() { return ctx.close(); });
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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, PaymentOptionsOrganism_nequi_nav_button_card_11_Template, 4, 9, "nequi-nav-button-card", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 2, "payments.bottom-sheet.title"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.options);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _ui_src_lib_components_nav_button_card_nav_button_card_component__WEBPACK_IMPORTED_MODULE_8__["NavButtonCardComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"]], encapsulation: 2 });
    return PaymentOptionsOrganism;
}(_nequi_ui__WEBPACK_IMPORTED_MODULE_4__["NavRootBottomSheetBaseComponent"]));



/***/ }),

/***/ "AiDz":
/*!***********************************************************************************************!*\
  !*** ./libs/features/payments/src/presentation/pages/pending-payment/pending-payment.page.ts ***!
  \***********************************************************************************************/
/*! exports provided: PendingPaymentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingPaymentPage", function() { return PendingPaymentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var libs_features_commons_src_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! libs/features/commons/src/core */ "zidQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_commons_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/commons/providers */ "AJyP");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_notifications_presentation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/features/notifications/presentation */ "Wf/D");
/* harmony import */ var _nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nequi/features/profile/presentation */ "cLcF");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_date__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nequi/utils/date */ "tGfC");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _nequi_utils_string__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @nequi/utils/string */ "p6rB");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../config */ "bt4H");
/* harmony import */ var _pending_payment_view_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pending-payment.view-model */ "2mSA");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _money_management_src_presentation_components_balance_header_balance_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../money-management/src/presentation/components/balance-header/balance-header.component */ "1rl1");
/* harmony import */ var _ui_src_lib_directives_form_content_style_form_content_style_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../ui/src/lib/directives/form-content-style/form-content-style.directive */ "+XT3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ui_src_lib_directives_control_errors_control_errors_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../../ui/src/lib/directives/control-errors/control-errors.directive */ "XHcO");
/* harmony import */ var _ui_src_lib_controls_nequi_input_currency_nequi_input_currency_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../../ui/src/lib/controls/nequi-input-currency/nequi-input-currency.component */ "VG0r");
/* harmony import */ var _money_management_src_presentation_controls_origin_money_control_origin_money_control_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../../money-management/src/presentation/controls/origin-money-control/origin-money-control.component */ "O3Yd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
































var _c0 = function (a0) { return { informative: a0 }; };
var _c1 = function (a0, a1) { return { control: a0, messages: a1 }; };
function PendingPaymentPage_form_13_Template(rf, ctx) { if (rf & 1) {
    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "ion-input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "nequi-input-currency", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "ion-item", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "nequi-origin-money-control", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("insufficientMoney", function PendingPaymentPage_form_13_Template_nequi_origin_money_control_insufficientMoney_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r1.setAnalyticsInsufficientMoney(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "ion-text", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r0.viewModel.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](27, _c0, ctx_r0.viewModel.merchant.disabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 15, "payments.home.inputs.merchant.placeholder"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx_r0.viewModel.merchant);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nequiControlErrors", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](29, _c1, ctx_r0.viewModel.amount, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 17, "validators.general")));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](32, _c0, ctx_r0.viewModel.amount.disabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 19, "payments.home.inputs.amount.placeholder"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isReadOnly", true)("control", ctx_r0.viewModel.amount)("allowNegative", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 21, "payments.home.inputs.pocket.placeholder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx_r0.viewModel.pocket)("minAmount", ctx_r0.viewModel.amount.value)("title", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 23, "payments.home.inputs.pocket.placeholder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](21, 25, "payments.home.inputs.pocket.info"), " ");
} }
var PendingPaymentPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PendingPaymentPage, _super);
    function PendingPaymentPage(injector, router, profileService, currencyPipe, moduleConfigProvider, homeService, notificationHomeService, analyticsInteractor) {
        var _this = _super.call(this, injector) || this;
        _this.router = router;
        _this.profileService = profileService;
        _this.currencyPipe = currencyPipe;
        _this.moduleConfigProvider = moduleConfigProvider;
        _this.homeService = homeService;
        _this.notificationHomeService = notificationHomeService;
        _this.analyticsInteractor = analyticsInteractor;
        _this.viewModel = new _pending_payment_view_model__WEBPACK_IMPORTED_MODULE_15__["PendingPaymentViewModel"]();
        _this.notificationViewModel = new _nequi_features_notifications_presentation__WEBPACK_IMPORTED_MODULE_8__["HomeViewModel"]();
        _this.translateProvider.loadModule(_this.moduleConfigProvider.i18n.moduleKey);
        _this.modalService = _nequi_commons_providers__WEBPACK_IMPORTED_MODULE_5__["InjectorProvider"].get(_nequi_ui__WEBPACK_IMPORTED_MODULE_10__["CardModalService"]);
        return _this;
    }
    PendingPaymentPage.prototype.ngOnInit = function () {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                this.notification = (_a = this.router.getCurrentNavigation().extras) === null || _a === void 0 ? void 0 : _a.state;
                this.paymentData = this.notification.event.info;
                this.viewModel.init(this.paymentData);
                this.setAnalitycsIntentionPayment();
                return [2 /*return*/];
            });
        });
    };
    PendingPaymentPage.prototype.makePayment = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var transaction;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                transaction = new libs_features_commons_src_core__WEBPACK_IMPORTED_MODULE_1__["PaymentTransaction"]()
                    .withAmount(this.viewModel.amount.value)
                    .withData({
                    transactionId: this.paymentData.tranId,
                    code: this.paymentData.code,
                })
                    .withPocket(this.viewModel.form.value.pocket);
                _super.prototype.executeTransaction.call(this, transaction);
                return [2 /*return*/];
            });
        });
    };
    PendingPaymentPage.prototype.setAnalyticsInsufficientMoney = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var paramsInsufficientBalance;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        paramsInsufficientBalance = [
                            _config__WEBPACK_IMPORTED_MODULE_14__["PaymentsConfig"].productName,
                            (_c = (_b = (_a = this.notification) === null || _a === void 0 ? void 0 : _a.event) === null || _b === void 0 ? void 0 : _b.info) === null || _c === void 0 ? void 0 : _c.name,
                            _config__WEBPACK_IMPORTED_MODULE_14__["PaymentsConfig"].analytics.events.tagInsufficientBalance.status,
                            Object(_nequi_utils_date__WEBPACK_IMPORTED_MODULE_11__["getFormattedDateTimes"])(),
                            Object(_nequi_utils_date__WEBPACK_IMPORTED_MODULE_11__["getFormattedHour"])(),
                            (_f = (_e = (_d = this.notification) === null || _d === void 0 ? void 0 : _d.event) === null || _e === void 0 ? void 0 : _e.info) === null || _f === void 0 ? void 0 : _f.value,
                        ];
                        return [4 /*yield*/, this.setAnalytics(_config__WEBPACK_IMPORTED_MODULE_14__["PaymentsConfig"].analytics.events.tagInsufficientBalance.name, (_h = (_g = _config__WEBPACK_IMPORTED_MODULE_14__["PaymentsConfig"].analytics.events.tagInsufficientBalance) === null || _g === void 0 ? void 0 : _g.params) === null || _h === void 0 ? void 0 : _h.requiredParams, paramsInsufficientBalance)];
                    case 1:
                        _j.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PendingPaymentPage.prototype.setOriginMoney = function (transaction) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var pocket;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (transaction.pocket === null) {
                    pocket = this.originMoneyService.getAvailablePocket();
                    transaction.withPocket(pocket);
                }
                return [2 /*return*/, transaction];
            });
        });
    };
    PendingPaymentPage.prototype.showConfirmation = function (transaction) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var info, data, _a, _b;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.getConfirmationInfo(transaction)];
                    case 1:
                        info = _c.sent();
                        if (!info) {
                            return [2 /*return*/, true];
                        }
                        _b = (_a = this.confirmBottomSheetService).show;
                        return [4 /*yield*/, this.updateConfirmationWithPocket(info, transaction)];
                    case 2: return [4 /*yield*/, _b.apply(_a, [_c.sent()])];
                    case 3:
                        data = (_c.sent()).data;
                        if (data) {
                            return [2 /*return*/, true];
                        }
                        this.setAnalitycsCancelNotification();
                        return [2 /*return*/, false];
                }
            });
        });
    };
    PendingPaymentPage.prototype.onTransactionFailed = function (error, _transaction) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (error && (error === null || error === void 0 ? void 0 : error.code) === libs_features_commons_src_core__WEBPACK_IMPORTED_MODULE_1__["TRANSACTION_ERRORS"].TRANSACTION_DOES_NOT_EXIT) {
                            this.showDialogNotBalance();
                        }
                        if (error && libs_features_commons_src_core__WEBPACK_IMPORTED_MODULE_1__["NOT_BALANCE_AVAILABLE_ERRORS"].includes(error === null || error === void 0 ? void 0 : error.code)) {
                            this.setAnalyticsInsufficientMoney();
                        }
                        this.loadingService.hide(false);
                        return [4 /*yield*/, this.notificationHomeService.archiveNotification(this.notificationViewModel.currentNotification)];
                    case 1:
                        _a.sent();
                        throw error;
                }
            });
        });
    };
    PendingPaymentPage.prototype.showDialogNotBalance = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messagesKey, messages;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        messagesKey = _config__WEBPACK_IMPORTED_MODULE_14__["PaymentsConfig"].i18n.notBalanceError;
                        messages = this.translateProvider.get(messagesKey);
                        return [4 /*yield*/, this.navigatorProvider.navigateForward(_config__WEBPACK_IMPORTED_MODULE_14__["PaymentsConfig"].routes.adminUrl)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.modalService.show({
                                imgPath: messages.image,
                                title: messages.title,
                                content: messages.content,
                                buttons: [
                                    {
                                        text: messages.buttons.accept,
                                        handler: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                            return [2 /*return*/];
                                        }); }); },
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
    PendingPaymentPage.prototype.onTransactionSuccess = function (_response, _transaction) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var paramsSuccess, message;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_l) {
                switch (_l.label) {
                    case 0:
                        paramsSuccess = [
                            _config__WEBPACK_IMPORTED_MODULE_14__["PaymentsConfig"].productName,
                            (_a = _config__WEBPACK_IMPORTED_MODULE_14__["PaymentsConfig"].analytics.events.tagTransactionSuccess) === null || _a === void 0 ? void 0 : _a.status,
                            (_d = (_c = (_b = this.notification) === null || _b === void 0 ? void 0 : _b.event) === null || _c === void 0 ? void 0 : _c.info) === null || _d === void 0 ? void 0 : _d.name,
                            Object(_nequi_utils_date__WEBPACK_IMPORTED_MODULE_11__["getFormattedDateTimes"])(),
                            Object(_nequi_utils_date__WEBPACK_IMPORTED_MODULE_11__["getFormattedHour"])(),
                            (_g = (_f = (_e = this.notification) === null || _e === void 0 ? void 0 : _e.event) === null || _f === void 0 ? void 0 : _f.info) === null || _g === void 0 ? void 0 : _g.value,
                            this.viewModel.getPocketName(),
                        ];
                        return [4 /*yield*/, this.setAnalytics((_h = _config__WEBPACK_IMPORTED_MODULE_14__["PaymentsConfig"].analytics.events.tagTransactionSuccess) === null || _h === void 0 ? void 0 : _h.name, (_k = (_j = _config__WEBPACK_IMPORTED_MODULE_14__["PaymentsConfig"].analytics.events.tagTransactionSuccess) === null || _j === void 0 ? void 0 : _j.params) === null || _k === void 0 ? void 0 : _k.requiredParams, paramsSuccess)];
                    case 1:
                        _l.sent();
                        return [4 /*yield*/, this.homeService.archiveNotification(this.notification)];
                    case 2:
                        _l.sent();
                        return [4 /*yield*/, this.navigatorProvider.navigateRoot(_config__WEBPACK_IMPORTED_MODULE_14__["PaymentsConfig"].routes.movements)];
                    case 3:
                        _l.sent();
                        message = Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_13__["createFormat"])(this.translateProvider.get(_config__WEBPACK_IMPORTED_MODULE_14__["PaymentsConfig"].i18n.paymentSuccessful), [this.paymentData.name]);
                        this.toastService.showSuccess(message);
                        return [2 /*return*/];
                }
            });
        });
    };
    PendingPaymentPage.prototype.getConfirmationInfo = function (_transaction) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                messages = this.translateProvider.get(_config__WEBPACK_IMPORTED_MODULE_14__["PaymentsConfig"].i18n.paymentConfirmation);
                return [2 /*return*/, {
                        title: messages.title,
                        items: [
                            { label: messages.commerce, value: this.paymentData.name },
                            {
                                label: messages.amount,
                                value: this.currencyPipe.transform(this.viewModel.amount.value),
                            },
                        ],
                        confirmLabel: messages.accept,
                    }];
            });
        });
    };
    PendingPaymentPage.prototype.setAnalitycsCancelNotification = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var paramsCancel;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        paramsCancel = [
                            Object(_nequi_utils_date__WEBPACK_IMPORTED_MODULE_11__["getFormattedDateTimes"])(),
                            _config__WEBPACK_IMPORTED_MODULE_14__["PaymentsConfig"].productName,
                            (_c = (_b = (_a = this.notification) === null || _a === void 0 ? void 0 : _a.event) === null || _b === void 0 ? void 0 : _b.info) === null || _c === void 0 ? void 0 : _c.name,
                            (_f = (_e = (_d = this.notification) === null || _d === void 0 ? void 0 : _d.event) === null || _e === void 0 ? void 0 : _e.info) === null || _f === void 0 ? void 0 : _f.value,
                        ];
                        return [4 /*yield*/, this.setAnalytics(_config__WEBPACK_IMPORTED_MODULE_14__["PaymentsConfig"].analytics.events.tagTransactionCancel.name, (_h = (_g = _config__WEBPACK_IMPORTED_MODULE_14__["PaymentsConfig"].analytics.events.tagTransactionCancel) === null || _g === void 0 ? void 0 : _g.params) === null || _h === void 0 ? void 0 : _h.requiredParams, paramsCancel)];
                    case 1:
                        _j.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PendingPaymentPage.prototype.setAnalitycsIntentionPayment = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var valueParams = [
            Object(_nequi_utils_date__WEBPACK_IMPORTED_MODULE_11__["getFormattedDateTimes"])(),
            Object(_nequi_utils_date__WEBPACK_IMPORTED_MODULE_11__["getFormattedHour"])(),
            (_c = (_b = (_a = this.notification) === null || _a === void 0 ? void 0 : _a.event) === null || _b === void 0 ? void 0 : _b.info) === null || _c === void 0 ? void 0 : _c.name,
            (_f = (_e = (_d = this.notification) === null || _d === void 0 ? void 0 : _d.event) === null || _e === void 0 ? void 0 : _e.info) === null || _f === void 0 ? void 0 : _f.value,
        ];
        this.setAnalytics((_g = _config__WEBPACK_IMPORTED_MODULE_14__["PaymentsConfig"].analytics.events.tagIntentionPayment) === null || _g === void 0 ? void 0 : _g.name, (_j = (_h = _config__WEBPACK_IMPORTED_MODULE_14__["PaymentsConfig"].analytics.events.tagIntentionPayment) === null || _h === void 0 ? void 0 : _h.params) === null || _j === void 0 ? void 0 : _j.requiredParams, valueParams);
    };
    PendingPaymentPage.prototype.setAnalytics = function (eventName, params, valueParams) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var trackEventClevertap, trackEventFirebase, trackEventFacebook;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        trackEventClevertap = {
                            type: libs_features_commons_src_core__WEBPACK_IMPORTED_MODULE_1__["AnalyticsType"].CLEVERTAP,
                            params: {
                                eventName: eventName,
                                eventProps: Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_12__["stringsArrayToObjectWithValues"])(params, valueParams),
                            },
                        };
                        trackEventFirebase = {
                            type: libs_features_commons_src_core__WEBPACK_IMPORTED_MODULE_1__["AnalyticsType"].FIREBASE,
                            params: {
                                eventName: eventName,
                                eventProps: Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_12__["stringsArrayToObjectWithValues"])(params, valueParams),
                            },
                        };
                        trackEventFacebook = {
                            type: libs_features_commons_src_core__WEBPACK_IMPORTED_MODULE_1__["AnalyticsType"].FACEBOOK,
                            params: {
                                eventName: eventName,
                                eventProps: Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_12__["stringsArrayToObjectWithValues"])(params, valueParams),
                            },
                        };
                        return [4 /*yield*/, this.analyticsInteractor.trackEvent(trackEventClevertap)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.analyticsInteractor.trackEvent(trackEventFirebase)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.analyticsInteractor.trackEvent(trackEventFacebook)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PendingPaymentPage.ɵfac = function PendingPaymentPage_Factory(t) { return new (t || PendingPaymentPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_9__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_6__["ModuleConfigProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nequi_features_notifications_presentation__WEBPACK_IMPORTED_MODULE_8__["HomeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nequi_features_notifications_presentation__WEBPACK_IMPORTED_MODULE_8__["HomeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](libs_features_commons_src_core__WEBPACK_IMPORTED_MODULE_1__["AnalyticsInteractor"])); };
    PendingPaymentPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PendingPaymentPage, selectors: [["app-payments-home"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 19, vars: 10, consts: [[1, "nequi-header"], ["slot", "start"], ["id", "payments-home_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], ["slot", "end"], [3, "click"], ["slot", "icon-only", 3, "name"], [3, "isDarkTheme", "isShow"], ["fullscreen", "true", "appFormContentStyle", "", 1, "ion-padding-horizontal", "ion-content--white"], [1, "nequi-title"], [3, "formGroup", 4, "ngIf"], [1, "nequi-footer"], ["id", "payments-home_next_button", "shape", "round", "color", "guayaba", "expand", "block", 1, "margin-vertical-16", 3, "click"], [3, "formGroup"], [1, "nequi-item", "margin-bottom-8"], ["position", "floating", 1, "payments__merchant-label", "nequi-item__label", 3, "ngClass"], [1, "payments__merchant-input", 3, "formControl"], [1, "nequi-item", "margin-bottom-8", 3, "nequiControlErrors"], ["position", "floating", 1, "payments__amount-label", "nequi-item__label", 3, "ngClass"], ["tooltipType", "error", "inputClass", "nequi-item__input", 1, "sc-ion-input-ios-h", 3, "isReadOnly", "control", "allowNegative"], ["lines", "none", 1, "ion-no-padding", "nequi-item-no-background", "nequi-item-no-lines"], [1, "margin-bottom-8", 3, "formControl", "minAmount", "title", "insufficientMoney"], ["color", "primary"], [1, "label__message"]], template: function PendingPaymentPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PendingPaymentPage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ion-buttons", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PendingPaymentPage_Template_ion_button_click_6_listener() { return ctx.viewModel.isBalanceShowed = !ctx.viewModel.isBalanceShowed; });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "ion-icon", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "app-balance-header", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "ion-content", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ion-text", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, PendingPaymentPage_form_13_Template, 22, 34, "form", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "ion-footer", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "ion-button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PendingPaymentPage_Template_ion_button_click_16_listener() { return ctx.makePayment(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("name", ctx.viewModel.isBalanceShowed ? "chevron-up-outline" : "chevron-down-outline");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isDarkTheme", false)("isShow", ctx.viewModel.isBalanceShowed);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 6, "payments.pending-payment.title"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.viewModel.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](18, 8, "payments.home.buttons.next"), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonIcon"], _money_management_src_presentation_components_balance_header_balance_header_component__WEBPACK_IMPORTED_MODULE_17__["BalanceHeaderComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonContent"], _ui_src_lib_directives_form_content_style_form_content_style_directive__WEBPACK_IMPORTED_MODULE_18__["FormContentStyleDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonText"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonFooter"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormControlDirective"], _ui_src_lib_directives_control_errors_control_errors_directive__WEBPACK_IMPORTED_MODULE_20__["ControlErrorsDirective"], _ui_src_lib_controls_nequi_input_currency_nequi_input_currency_component__WEBPACK_IMPORTED_MODULE_21__["NequiInputCurrencyComponent"], _money_management_src_presentation_controls_origin_money_control_origin_money_control_component__WEBPACK_IMPORTED_MODULE_22__["OriginMoneyControlComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__["TranslatePipe"]], encapsulation: 2 });
    return PendingPaymentPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_7__["TransactionBasePage"]));



/***/ }),

/***/ "BLic":
/*!*************************************************************************************************!*\
  !*** ./libs/features/payments/src/presentation/pages/quick-payment/quick-payment.view-model.ts ***!
  \*************************************************************************************************/
/*! exports provided: QuickPaymentViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickPaymentViewModel", function() { return QuickPaymentViewModel; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _quick_payment_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quick-payment.config */ "Ygxu");


var QuickPaymentViewModel = /** @class */ (function () {
    function QuickPaymentViewModel() {
        this.isBalanceShowed = false;
    }
    QuickPaymentViewModel.prototype.init = function (data, payerReferenceTooltipInfo) {
        this.merchant = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]({ value: data === null || data === void 0 ? void 0 : data.destination, disabled: !!(data === null || data === void 0 ? void 0 : data.destination) }, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
        ]);
        this.amount = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]({ value: data === null || data === void 0 ? void 0 : data.amount, disabled: !!(data === null || data === void 0 ? void 0 : data.amount) }, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(1),
        ]);
        this.message = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]({
            value: data.description || null,
            disabled: !!(data === null || data === void 0 ? void 0 : data.description),
        });
        this.payerReference = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](data.payerReference, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(_quick_payment_config__WEBPACK_IMPORTED_MODULE_1__["QuickPaymentConfig"].maxLengthString));
        this.pocket = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](data.pocket);
        this.showPayerReference = data.showPayerReference;
        this.showMessage = data.description && data.description !== '';
        this.disablePayerReference = !!data.payerReference;
        this.payerReferenceTooltip = {
            control: this.payerReference,
            cssClass: 'margin-bottom-8',
        };
        if (!this.disablePayerReference) {
            this.payerReferenceTooltip.helpMessage = payerReferenceTooltipInfo;
        }
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            amount: this.amount,
            message: this.message,
            merchant: this.merchant,
            payerReference: this.payerReference,
            pocket: this.pocket,
        });
    };
    return QuickPaymentViewModel;
}());



/***/ }),

/***/ "E9oT":
/*!************************************************************************************!*\
  !*** ./libs/features/payments/src/presentation/feature-payments-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: PaymentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentRoutingModule", function() { return PaymentRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_send_presentation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/send/presentation */ "tiu6");
/* harmony import */ var _middleware_payment_home_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./middleware/payment-home.middleware */ "1M7f");
/* harmony import */ var _middleware_read_qr_middleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./middleware/read-qr.middleware */ "vAlN");
/* harmony import */ var _pages_pending_payment_pending_payment_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/pending-payment/pending-payment.page */ "AiDz");
/* harmony import */ var _pages_quick_payment_quick_payment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/quick-payment/quick-payment.page */ "s4ec");









var routes = [
    {
        path: '',
        component: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Type"],
        canActivate: [_middleware_payment_home_middleware__WEBPACK_IMPORTED_MODULE_3__["PaymentHomeMiddleware"]],
    },
    {
        path: 'read-qr',
        component: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Type"],
        canActivate: [_middleware_read_qr_middleware__WEBPACK_IMPORTED_MODULE_4__["ReadQrMiddleWare"]],
    },
    {
        path: 'send/from-qr',
        component: _nequi_features_send_presentation__WEBPACK_IMPORTED_MODULE_2__["SendFromQrPage"],
    },
    {
        path: 'pay',
        component: _pages_quick_payment_quick_payment_page__WEBPACK_IMPORTED_MODULE_6__["QuickPaymentPage"],
    },
    {
        path: 'pending',
        component: _pages_pending_payment_pending_payment_page__WEBPACK_IMPORTED_MODULE_5__["PendingPaymentPage"],
    },
];
var PaymentRoutingModule = /** @class */ (function () {
    function PaymentRoutingModule() {
    }
    PaymentRoutingModule.ɵfac = function PaymentRoutingModule_Factory(t) { return new (t || PaymentRoutingModule)(); };
    PaymentRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PaymentRoutingModule });
    PaymentRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return PaymentRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PaymentRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "KKbJ":
/*!***********************************************************************!*\
  !*** ./libs/features/payments/src/config/payments-config.provider.ts ***!
  \***********************************************************************/
/*! exports provided: PaymentsConfigProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsConfigProvider", function() { return PaymentsConfigProvider; });
var PaymentsConfigProvider = /** @class */ (function () {
    function PaymentsConfigProvider() {
    }
    return PaymentsConfigProvider;
}());



/***/ }),

/***/ "Ygxu":
/*!*********************************************************************************************!*\
  !*** ./libs/features/payments/src/presentation/pages/quick-payment/quick-payment.config.ts ***!
  \*********************************************************************************************/
/*! exports provided: QuickPaymentConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickPaymentConfig", function() { return QuickPaymentConfig; });
var QuickPaymentConfig = {
    i18n: {
        processError: 'payments.quick-payment.process.errors.not-match',
        userNotFound: 'payments.quick-payment.read.errors.user-not-found',
        readError: 'payments.quick-payment.read.errors.default',
        asynchronousTransactionAlert: 'payments.errors-messages.asynchronous-transaction',
        differentAmountAlert: 'payments.errors-messages.different-amount',
        expiredPaymentAlert: 'payments.errors-messages.expired-payment',
        noPendingPaymentAlert: 'payments.errors-messages.no-pending-payment',
        rejectedPaymentAlert: 'payments.errors-messages.rejected-payment',
        technicalErrorAlert: 'payments.errors-messages.technical-error',
        insufficientFundsAlert: 'payments.errors-messages.insufficient-funds',
        duplicateTransactionAlert: 'payments.errors-messages.duplicate-transaction',
        invalidQrAlert: 'payments.errors-messages.invalid-qr',
        payerInfo: 'payments.home.inputs.payerReference.info',
        paymentSuccess: 'payments.home.messages.success',
        annulateSuccess: 'payments.home.messages.annulate-success',
        paymentCancellationTitle: 'payments.home.cancellation-title',
        paymentTitle: 'payments.home.title',
        buttonCancellationLabel: 'payments.home.buttons.accept',
        buttonLabel: 'payments.home.buttons.next',
        closedAndBlockedAccountAlert: 'payments.errors-messages.closed-and-blocked-account',
    },
    routes: {
        adminUrl: '/admin/dashboard',
        movements: '/admin/movements',
        login: '/auth',
        readQr: '/admin/payments/read-qr',
        cashIn: '/admin/cash-in',
    },
    paymentsRouteBase: 'payments',
    maxLengthString: 150,
    analytics: {
        events: {
            qrSuccessPurchase: 'Pago_qr_exitoso',
            qrSuccessPurchaseFacebook: 'fb_mobile_purchase',
        },
    },
};


/***/ }),

/***/ "bt4H":
/*!***********************************************************!*\
  !*** ./libs/features/payments/src/presentation/config.ts ***!
  \***********************************************************/
/*! exports provided: PaymentsConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsConfig", function() { return PaymentsConfig; });
/* harmony import */ var _core_exceptions_error_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/exceptions/error-code */ "EHNi");
var _a;

var PaymentsConfig = {
    analytics: {
        typeTransaction: 'success',
        events: {
            tagTransactionSuccess: {
                name: 'Trx_exitosa',
                status: 'success',
                params: {
                    requiredParams: ['Producto', 'Estado', 'Comercio', 'Fecha', 'Hora', 'Valor', 'Bolsillo'],
                },
            },
            tagTransactionCancel: {
                name: 'Cancelar_confirmacion',
                params: {
                    requiredParams: ['Fecha', 'Producto', 'Comercio', 'Valor'],
                },
            },
            tagIntentionPayment: {
                name: 'Intencion_pago',
                params: {
                    requiredParams: ['Fecha_intencion', 'Hora', 'Comercio', 'Valor'],
                },
            },
            tagInsufficientBalance: {
                name: 'Saldo_insuficiente',
                status: 'rejected',
                params: {
                    requiredParams: ['producto', 'comercio', 'estado', 'fecha', 'hora', 'valor'],
                },
            },
        },
    },
    defaultPocket: 'Disponible',
    productName: 'api_push',
    i18n: {
        processError: 'payments.quick-payment.process.errors.not-match',
        userNotFound: 'payments.quick-payment.read.errors.user-not-found',
        readError: 'payments.quick-payment.read.errors.default',
        bottomSheet: 'payments.bottom-sheet',
        paymentConfirmation: 'payments.pending-payment.confirm',
        paymentSuccessful: 'payments.pending-payment.toast.success',
        notBalanceError: 'payments.errors-messages.not-balance',
        externalQrError: 'payments.quick-payment.process.errors.external-qr',
    },
    routes: {
        adminUrl: '/admin/dashboard',
        login: '/auth',
        redeemCode: '/admin/redeem-code',
        validateRedeemCode: '/admin/redeem-code/validate-code',
        readQr: 'read-qr',
        payment: 'pay',
        sendFromQr: 'send/from-qr',
        movements: '/admin/movements',
    },
    options: [
        {
            title: 'payments.bottom-sheet.options.qr-payment.title',
            description: 'payments.bottom-sheet.options.qr-payment.description',
            icon: 'payments.bottom-sheet.options.qr-payment.icon',
            url: 'read-qr',
        },
        {
            title: 'payments.bottom-sheet.options.my-qr.title',
            description: 'payments.bottom-sheet.options.my-qr.description',
            icon: 'payments.bottom-sheet.options.my-qr.icon',
        },
    ],
    paymentsRouteBase: 'payments/',
    errorMessages: (_a = {},
        _a[_core_exceptions_error_code__WEBPACK_IMPORTED_MODULE_0__["ProcessingErrorsCode"].PURCHASE_ALREADY_MADE] = 'payments.quick-payment.process.errors.purchase-already-made',
        _a[_core_exceptions_error_code__WEBPACK_IMPORTED_MODULE_0__["ProcessingErrorsCode"].CANCELED_PURCHASE] = 'payments.quick-payment.process.errors.canceled-purchase',
        _a[_core_exceptions_error_code__WEBPACK_IMPORTED_MODULE_0__["ProcessingErrorsCode"].PHONE_NUMBER_NOT_FOUND] = 'payments.quick-payment.process.errors.phone-number-not-found',
        _a[_core_exceptions_error_code__WEBPACK_IMPORTED_MODULE_0__["ProcessingErrorsCode"].NO_PAYMENT_PENDING] = 'payments.quick-payment.process.errors.no-payment-pending',
        _a[_core_exceptions_error_code__WEBPACK_IMPORTED_MODULE_0__["ProcessingErrorsCode"].EXPIRED_PAYMENT] = 'payments.quick-payment.process.errors.expired-payment',
        _a[_core_exceptions_error_code__WEBPACK_IMPORTED_MODULE_0__["ProcessingErrorsCode"].INVALID_QR] = 'payments.quick-payment.process.errors.invalid-qr',
        _a),
};


/***/ }),

/***/ "cxwD":
/*!****************************************************!*\
  !*** ./libs/features/payments/src/config/index.ts ***!
  \****************************************************/
/*! exports provided: PaymentsConfigProvider, PaymentsConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _payments_config_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payments-config.provider */ "KKbJ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaymentsConfigProvider", function() { return _payments_config_provider__WEBPACK_IMPORTED_MODULE_0__["PaymentsConfigProvider"]; });

/* harmony import */ var _payments_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payments.config */ "uNjT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaymentsConfig", function() { return _payments_config__WEBPACK_IMPORTED_MODULE_1__["PaymentsConfig"]; });





/***/ }),

/***/ "nBiU":
/*!****************************************************************************!*\
  !*** ./libs/features/payments/src/presentation/feature-payments.module.ts ***!
  \****************************************************************************/
/*! exports provided: FeaturePaymentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturePaymentsModule", function() { return FeaturePaymentsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/money-management/presentation */ "JFCQ");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../config */ "cxwD");
/* harmony import */ var _config_payments_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../config/payments.config */ "uNjT");
/* harmony import */ var _feature_payments_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./feature-payments-routing.module */ "E9oT");
/* harmony import */ var _middleware_payment_home_middleware__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./middleware/payment-home.middleware */ "1M7f");
/* harmony import */ var _middleware_read_qr_middleware__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./middleware/read-qr.middleware */ "vAlN");
/* harmony import */ var _organisms_payment_options_organism__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./organisms/payment-options.organism */ "9VBE");
/* harmony import */ var _pages_pending_payment_pending_payment_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/pending-payment/pending-payment.page */ "AiDz");
/* harmony import */ var _pages_quick_payment_quick_payment_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/quick-payment/quick-payment.page */ "s4ec");


















var FeaturePaymentsModule = /** @class */ (function () {
    function FeaturePaymentsModule() {
    }
    FeaturePaymentsModule.forChild = function (config) {
        return {
            ngModule: FeaturePaymentsModule,
            providers: [
                {
                    provide: _config__WEBPACK_IMPORTED_MODULE_9__["PaymentsConfigProvider"],
                    useValue: config,
                },
            ],
        };
    };
    FeaturePaymentsModule.ɵfac = function FeaturePaymentsModule_Factory(t) { return new (t || FeaturePaymentsModule)(); };
    FeaturePaymentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FeaturePaymentsModule });
    FeaturePaymentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [
            _middleware_payment_home_middleware__WEBPACK_IMPORTED_MODULE_12__["PaymentHomeMiddleware"],
            _middleware_read_qr_middleware__WEBPACK_IMPORTED_MODULE_13__["ReadQrMiddleWare"],
            _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__["QrReaderService"],
            {
                provide: _nequi_features_commons__WEBPACK_IMPORTED_MODULE_4__["ModuleConfigProvider"],
                useValue: _config_payments_config__WEBPACK_IMPORTED_MODULE_10__["PaymentsConfig"],
            },
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
                _nequi_ui__WEBPACK_IMPORTED_MODULE_7__["NequiUiModule"],
                _feature_payments_routing_module__WEBPACK_IMPORTED_MODULE_11__["PaymentRoutingModule"],
                _nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_6__["FeaturesMoneyManagementModule"],
                _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__["FeaturesCommonsModule"],
            ]] });
    return FeaturePaymentsModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FeaturePaymentsModule, { declarations: [_organisms_payment_options_organism__WEBPACK_IMPORTED_MODULE_14__["PaymentOptionsOrganism"], _pages_pending_payment_pending_payment_page__WEBPACK_IMPORTED_MODULE_15__["PendingPaymentPage"], _pages_quick_payment_quick_payment_page__WEBPACK_IMPORTED_MODULE_16__["QuickPaymentPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
        _nequi_ui__WEBPACK_IMPORTED_MODULE_7__["NequiUiModule"],
        _feature_payments_routing_module__WEBPACK_IMPORTED_MODULE_11__["PaymentRoutingModule"],
        _nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_6__["FeaturesMoneyManagementModule"],
        _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__["FeaturesCommonsModule"]] }); })();


/***/ }),

/***/ "s4ec":
/*!*******************************************************************************************!*\
  !*** ./libs/features/payments/src/presentation/pages/quick-payment/quick-payment.page.ts ***!
  \*******************************************************************************************/
/*! exports provided: QuickPaymentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickPaymentPage", function() { return QuickPaymentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_commons_exceptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/commons/exceptions */ "0sJq");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_features_payments_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/features/payments/core */ "dpbz");
/* harmony import */ var _nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nequi/features/profile/presentation */ "cLcF");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nequi/utils/string */ "p6rB");
/* harmony import */ var _quick_payment_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./quick-payment.config */ "Ygxu");
/* harmony import */ var _quick_payment_view_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./quick-payment.view-model */ "BLic");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _money_management_src_presentation_components_balance_header_balance_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../money-management/src/presentation/components/balance-header/balance-header.component */ "1rl1");
/* harmony import */ var _ui_src_lib_directives_form_content_style_form_content_style_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../ui/src/lib/directives/form-content-style/form-content-style.directive */ "+XT3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ui_src_lib_directives_control_errors_control_errors_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../ui/src/lib/directives/control-errors/control-errors.directive */ "XHcO");
/* harmony import */ var _ui_src_lib_controls_nequi_input_currency_nequi_input_currency_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../../ui/src/lib/controls/nequi-input-currency/nequi-input-currency.component */ "VG0r");
/* harmony import */ var _money_management_src_presentation_controls_origin_money_control_origin_money_control_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../money-management/src/presentation/controls/origin-money-control/origin-money-control.component */ "O3Yd");
/* harmony import */ var _ui_src_lib_directives_message_manager_message_manager_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../../ui/src/lib/directives/message-manager/message-manager.directive */ "68HU");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");






























var _c0 = function (a0) { return { informative: a0 }; };
function QuickPaymentPage_form_13_ion_item_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "ion-input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nequiMessageManager", ctx_r2.viewModel.payerReferenceTooltip);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c0, ctx_r2.viewModel.payerReference.disabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 5, "payments.home.inputs.payerReference.placeholder"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r2.viewModel.payerReference)("readonly", ctx_r2.viewModel.disablePayerReference);
} }
function QuickPaymentPage_form_13_ion_item_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "ion-input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c0, ctx_r3.viewModel.message.disabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 3, "payments.home.inputs.message.placeholder"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r3.viewModel.message);
} }
var _c1 = function (a0, a1) { return { control: a0, messages: a1 }; };
function QuickPaymentPage_form_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "ion-input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, QuickPaymentPage_form_13_ion_item_6_Template, 5, 9, "ion-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, QuickPaymentPage_form_13_ion_item_7_Template, 5, 7, "ion-item", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-item", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "nequi-input-currency", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ion-text", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "nequi-origin-money-control", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.viewModel.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](22, _c0, ctx_r0.viewModel.merchant.disabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 14, "payments.home.inputs.merchant.placeholder"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r0.viewModel.merchant);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.viewModel.showPayerReference);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.viewModel.showMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nequiControlErrors", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](24, _c1, ctx_r0.viewModel.amount, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 16, "validators.general")));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](27, _c0, ctx_r0.viewModel.amount.disabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 18, "payments.home.inputs.amount.placeholder"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("control", ctx_r0.viewModel.amount)("allowNegative", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](18, 20, "payments.home.inputs.pocket.placeholder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r0.viewModel.pocket)("minAmount", ctx_r0.minAmount);
} }
function QuickPaymentPage_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "payments.home.contextual-message"), " ");
} }
var QuickPaymentPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(QuickPaymentPage, _super);
    function QuickPaymentPage(router, profileService, currencyPipe, cardModalService, analyticsInteractor, moduleConfigProvider, injector) {
        var _a;
        var _this = _super.call(this, injector) || this;
        _this.router = router;
        _this.profileService = profileService;
        _this.currencyPipe = currencyPipe;
        _this.cardModalService = cardModalService;
        _this.analyticsInteractor = analyticsInteractor;
        _this.moduleConfigProvider = moduleConfigProvider;
        _this.viewModel = new _quick_payment_view_model__WEBPACK_IMPORTED_MODULE_13__["QuickPaymentViewModel"]();
        _this.isPaymentCancellation = false;
        _this.titleAndButtonTexts = {
            title: _quick_payment_config__WEBPACK_IMPORTED_MODULE_12__["QuickPaymentConfig"].i18n.paymentTitle,
            button: _quick_payment_config__WEBPACK_IMPORTED_MODULE_12__["QuickPaymentConfig"].i18n.buttonLabel,
        };
        _this.factoryException = (_a = {},
            _a[_nequi_features_payments_core__WEBPACK_IMPORTED_MODULE_8__["AsynchronousTransactionException"].name] = function () { return _this.processAsynchronousException(); },
            _a[_nequi_features_payments_core__WEBPACK_IMPORTED_MODULE_8__["DifferentAmountException"].name] = function () { return _this.processDifferentAmountException(); },
            _a[_nequi_features_payments_core__WEBPACK_IMPORTED_MODULE_8__["WithoutPendingPaymentsException"].name] = function () { return _this.processWithoutPendingException(); },
            _a[_nequi_features_payments_core__WEBPACK_IMPORTED_MODULE_8__["ExpiredPaymentException"].name] = function () { return _this.processExpiredPaymentException(); },
            _a[_nequi_features_payments_core__WEBPACK_IMPORTED_MODULE_8__["RejectedPaymentException"].name] = function (error) {
                return _this.processRejectedPaymentException(error);
            },
            _a[_nequi_features_payments_core__WEBPACK_IMPORTED_MODULE_8__["TechnicalErrorException"].name] = function (error) {
                return _this.processTechnicalErrorException(error);
            },
            _a[_nequi_features_payments_core__WEBPACK_IMPORTED_MODULE_8__["InsufficientFundsException"].name] = function () { return _this.processInsufficientFundsException(); },
            _a[_nequi_features_payments_core__WEBPACK_IMPORTED_MODULE_8__["TransactionDuplicatedException"].name] = function (error) {
                return _this.processTransactionDuplicatedException(error);
            },
            _a[_nequi_features_payments_core__WEBPACK_IMPORTED_MODULE_8__["InvalidQrException"].name] = function (error) { return _this.processInvalidQrException(error); },
            _a[_nequi_commons_exceptions__WEBPACK_IMPORTED_MODULE_4__["ClosedAccountException"].name] = function () { return _this.processClosedAndBlockedAccountException(); },
            _a[_nequi_commons_exceptions__WEBPACK_IMPORTED_MODULE_4__["AccountLockedToTransactException"].name] = function () { return _this.processClosedAndBlockedAccountException(); },
            _a);
        _this.translateProvider.loadModule(_this.moduleConfigProvider.i18n.moduleKey);
        return _this;
    }
    Object.defineProperty(QuickPaymentPage.prototype, "minAmount", {
        get: function () {
            return this.viewModel.amount.value || 0;
        },
        enumerable: false,
        configurable: true
    });
    QuickPaymentPage.prototype.ngOnInit = function () {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var payerReferenceToolTipInfo;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                this.paymentData = (_a = this.router.getCurrentNavigation().extras) === null || _a === void 0 ? void 0 : _a.state;
                this.setPaymentCancellationValues();
                payerReferenceToolTipInfo = this.translateProvider.get(_quick_payment_config__WEBPACK_IMPORTED_MODULE_12__["QuickPaymentConfig"].i18n.payerInfo);
                this.viewModel.init(this.paymentData, payerReferenceToolTipInfo);
                return [2 /*return*/];
            });
        });
    };
    QuickPaymentPage.prototype.makePayment = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var amount, transaction_1, transaction;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (this.paymentData.showPayerReference) {
                    this.preparePaymentData();
                }
                if (this.paymentData.issuer === _nequi_features_payments_core__WEBPACK_IMPORTED_MODULE_8__["QrIssuer"].KINPOS) {
                    amount = this.paymentData.paymentInfo.amount;
                    transaction_1 = new _nequi_features_payments_core__WEBPACK_IMPORTED_MODULE_8__["KinposPaymentTransaction"]()
                        .withAmount(amount)
                        .withPocket(this.viewModel.pocket.value)
                        .withData(this.paymentData);
                    _super.prototype.executeTransaction.call(this, transaction_1);
                    return [2 /*return*/];
                }
                if (this.qrType === _nequi_features_payments_core__WEBPACK_IMPORTED_MODULE_8__["QrType"].ANNULATE) {
                    this.cancelPayment();
                    return [2 /*return*/];
                }
                transaction = new _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["PaymentTransaction"]()
                    .withAmount(this.viewModel.amount.value)
                    .withPocket(this.viewModel.pocket.value)
                    .withData({
                    merchant: {
                        name: this.viewModel.merchant.value,
                        code: '',
                    },
                    type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["PaymentType"].QR,
                    additionalInfo: this.paymentData,
                });
                _super.prototype.executeTransaction.call(this, transaction);
                return [2 /*return*/];
            });
        });
    };
    QuickPaymentPage.prototype.cancelPayment = function () {
        var transaction = new _nequi_features_payments_core__WEBPACK_IMPORTED_MODULE_8__["QrCancellationTransaction"]()
            .withAmount(this.viewModel.amount.value)
            .withData({
            merchant: {
                name: this.viewModel.merchant.value,
                code: '',
            },
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["PaymentType"].ANNULATE,
            additionalInfo: this.paymentData,
        });
        _super.prototype.executeTransaction.call(this, transaction);
    };
    QuickPaymentPage.prototype.setOriginMoney = function (transaction) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var pocket;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (transaction.pocket === null) {
                    pocket = this.originMoneyService.getAvailablePocket();
                    transaction.withPocket(pocket);
                    return [2 /*return*/, transaction];
                }
                if (this.qrType === _nequi_features_payments_core__WEBPACK_IMPORTED_MODULE_8__["QrType"].ANNULATE) {
                    transaction.withPocket(null);
                    return [2 /*return*/, transaction];
                }
                return [2 /*return*/, _super.prototype.setOriginMoney.call(this, transaction)];
            });
        });
    };
    QuickPaymentPage.prototype.onTransactionFailed = function (error, _transaction) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.loadingService.hide(false);
                if (this.factoryException[error.constructor.name]) {
                    this.factoryException[error.constructor.name](error);
                    return [2 /*return*/];
                }
                throw error;
            });
        });
    };
    QuickPaymentPage.prototype.onTransactionSuccess = function (_response, _transaction) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var annulateMessage, paymentMessage;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        annulateMessage = _quick_payment_config__WEBPACK_IMPORTED_MODULE_12__["QuickPaymentConfig"].i18n.annulateSuccess;
                        paymentMessage = _quick_payment_config__WEBPACK_IMPORTED_MODULE_12__["QuickPaymentConfig"].i18n.paymentSuccess;
                        if (this.qrType !== _nequi_features_payments_core__WEBPACK_IMPORTED_MODULE_8__["QrType"].ANNULATE) {
                            this.trackAnalyticsSuccessPurchase();
                        }
                        return [4 /*yield*/, this.navigatorProvider.navigateRoot(_quick_payment_config__WEBPACK_IMPORTED_MODULE_12__["QuickPaymentConfig"].routes.movements)];
                    case 1:
                        _a.sent();
                        this.toastService.showSuccess(this.translateProvider.get(this.qrType === _nequi_features_payments_core__WEBPACK_IMPORTED_MODULE_8__["QrType"].ANNULATE ? annulateMessage : paymentMessage));
                        return [2 /*return*/];
                }
            });
        });
    };
    QuickPaymentPage.prototype.preparePaymentData = function () {
        var paymentInfo = this.paymentData.paymentInfo;
        if (this.paymentData.showPayerReference) {
            paymentInfo.qrInfo.payerReference = this.viewModel.payerReference.value;
        }
        if (paymentInfo.qrInfo.withPayerReference) {
            delete paymentInfo.qrInfo.withPayerReference;
        }
    };
    QuickPaymentPage.prototype.trackAnalyticsSuccessPurchase = function () {
        var analytics = _quick_payment_config__WEBPACK_IMPORTED_MODULE_12__["QuickPaymentConfig"].analytics.events;
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["AnalyticsType"].FIREBASE,
            params: { eventName: analytics.qrSuccessPurchase },
        });
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["AnalyticsType"].FACEBOOK,
            params: { eventName: analytics.qrSuccessPurchase },
        });
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["AnalyticsType"].FACEBOOK,
            params: { eventName: analytics.qrSuccessPurchaseFacebook },
        });
    };
    QuickPaymentPage.prototype.processAsynchronousException = function () {
        var _this = this;
        this.showCardModal({
            messagesRoute: _quick_payment_config__WEBPACK_IMPORTED_MODULE_12__["QuickPaymentConfig"].i18n.asynchronousTransactionAlert,
            acceptAction: function () { return _this.navigateToBackpack(); },
        });
    };
    QuickPaymentPage.prototype.processDifferentAmountException = function () {
        this.showErrorAlert({ messagesRoute: _quick_payment_config__WEBPACK_IMPORTED_MODULE_12__["QuickPaymentConfig"].i18n.differentAmountAlert });
    };
    QuickPaymentPage.prototype.processWithoutPendingException = function () {
        this.showErrorAlert({ messagesRoute: _quick_payment_config__WEBPACK_IMPORTED_MODULE_12__["QuickPaymentConfig"].i18n.noPendingPaymentAlert });
    };
    QuickPaymentPage.prototype.processExpiredPaymentException = function () {
        this.showErrorAlert({ messagesRoute: _quick_payment_config__WEBPACK_IMPORTED_MODULE_12__["QuickPaymentConfig"].i18n.expiredPaymentAlert });
    };
    QuickPaymentPage.prototype.processRejectedPaymentException = function (error) {
        var _this = this;
        this.showErrorAlertWithBackendMessage({
            messagesRoute: _quick_payment_config__WEBPACK_IMPORTED_MODULE_12__["QuickPaymentConfig"].i18n.rejectedPaymentAlert,
            backendMessage: error.message,
            acceptAction: function () { return _this.launchQrReader(); },
        });
    };
    QuickPaymentPage.prototype.processTechnicalErrorException = function (error) {
        var _this = this;
        this.showErrorAlertWithBackendMessage({
            messagesRoute: _quick_payment_config__WEBPACK_IMPORTED_MODULE_12__["QuickPaymentConfig"].i18n.technicalErrorAlert,
            backendMessage: error.message,
            acceptAction: function () { return _this.launchQrReader(); },
        });
    };
    QuickPaymentPage.prototype.processInsufficientFundsException = function () {
        var _this = this;
        this.showCardModal({
            messagesRoute: _quick_payment_config__WEBPACK_IMPORTED_MODULE_12__["QuickPaymentConfig"].i18n.insufficientFundsAlert,
            messageParams: [this.currencyPipe.transform(this.paymentData.amount).replace(' ', '')],
            acceptAction: function () { return _this.launchRechargeAccount(); },
        });
    };
    QuickPaymentPage.prototype.processTransactionDuplicatedException = function (error) {
        var _this = this;
        this.showErrorAlertWithBackendMessage({
            messagesRoute: _quick_payment_config__WEBPACK_IMPORTED_MODULE_12__["QuickPaymentConfig"].i18n.duplicateTransactionAlert,
            backendMessage: error.message,
            acceptAction: function () { return _this.launchQrReader(); },
        });
    };
    QuickPaymentPage.prototype.processInvalidQrException = function (error) {
        var _this = this;
        this.showErrorAlertWithBackendMessage({
            messagesRoute: _quick_payment_config__WEBPACK_IMPORTED_MODULE_12__["QuickPaymentConfig"].i18n.invalidQrAlert,
            backendMessage: error.message,
            acceptAction: function () { return _this.launchQrReader(); },
        });
    };
    QuickPaymentPage.prototype.processClosedAndBlockedAccountException = function () {
        var _this = this;
        var alert = this.translateProvider.get(_quick_payment_config__WEBPACK_IMPORTED_MODULE_12__["QuickPaymentConfig"].i18n.closedAndBlockedAccountAlert);
        return this.alertService.show({
            messages: alert,
            handlers: {
                accept: function () { return _this.navigateToBackpack(); },
            },
        });
    };
    QuickPaymentPage.prototype.launchRechargeAccount = function () {
        this.goBack();
        this.navigatorProvider.navigateRoot(_quick_payment_config__WEBPACK_IMPORTED_MODULE_12__["QuickPaymentConfig"].routes.cashIn);
    };
    QuickPaymentPage.prototype.launchQrReader = function () {
        this.goBack();
        this.navigatorProvider.navigateRoot(_quick_payment_config__WEBPACK_IMPORTED_MODULE_12__["QuickPaymentConfig"].routes.readQr);
    };
    QuickPaymentPage.prototype.navigateToBackpack = function () {
        this.navigatorProvider.navigateRoot(_quick_payment_config__WEBPACK_IMPORTED_MODULE_12__["QuickPaymentConfig"].routes.adminUrl);
    };
    QuickPaymentPage.prototype.showErrorAlert = function (error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var handler;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                handler = {
                    accept: error.acceptAction,
                    cancel: error.cancelAction,
                };
                return [2 /*return*/, this.alertService.showByI18n({
                        i18nKey: error.messagesRoute,
                        handlers: error.acceptAction ? handler : null,
                        messageParameters: error.messageParams,
                    })];
            });
        });
    };
    QuickPaymentPage.prototype.showErrorAlertWithBackendMessage = function (error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var handler, i18nMessage;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                handler = {
                    accept: error.acceptAction,
                    cancel: error.cancelAction,
                };
                i18nMessage = this.translateProvider.get(error.messagesRoute);
                return [2 /*return*/, this.alertService.show({
                        messages: {
                            header: i18nMessage.header,
                            message: error.backendMessage,
                            buttons: {
                                accept: i18nMessage.buttons.accept,
                            },
                        },
                        handlers: error.acceptAction ? handler : null,
                    })];
            });
        });
    };
    QuickPaymentPage.prototype.showCardModal = function (error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages, buttons;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                messages = this.translateProvider.get(error.messagesRoute);
                buttons = [];
                if (error.messageParams) {
                    messages.content = Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_11__["createFormat"])(messages.content, error.messageParams);
                }
                buttons.push({
                    text: messages.buttons.accept,
                    handler: error.acceptAction,
                });
                if (messages.buttons.cancel) {
                    buttons.push({
                        text: messages.buttons.cancel,
                        color: 'medianoche-gray',
                    });
                }
                this.cardModalService.show({
                    title: messages.header,
                    imgPath: messages.image,
                    content: messages.content,
                    buttons: buttons,
                });
                return [2 /*return*/];
            });
        });
    };
    QuickPaymentPage.prototype.setPaymentCancellationValues = function () {
        var _a, _b, _c, _d;
        this.qrType = (_d = (_c = (_b = (_a = this.paymentData
            .paymentInfo) === null || _a === void 0 ? void 0 : _a.additionalDataFieldTemplate) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.porposeOfTransaction) === null || _d === void 0 ? void 0 : _d.data;
        if (this.qrType === _nequi_features_payments_core__WEBPACK_IMPORTED_MODULE_8__["QrType"].ANNULATE) {
            this.titleAndButtonTexts = {
                title: _quick_payment_config__WEBPACK_IMPORTED_MODULE_12__["QuickPaymentConfig"].i18n.paymentCancellationTitle,
                button: _quick_payment_config__WEBPACK_IMPORTED_MODULE_12__["QuickPaymentConfig"].i18n.buttonCancellationLabel,
            };
            this.isPaymentCancellation = true;
        }
    };
    QuickPaymentPage.ɵfac = function QuickPaymentPage_Factory(t) { return new (t || QuickPaymentPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_9__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_10__["CardModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["AnalyticsInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_7__["ModuleConfigProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"])); };
    QuickPaymentPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: QuickPaymentPage, selectors: [["app-quick-payment"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 20, vars: 12, consts: [[1, "nequi-header"], ["slot", "start"], ["id", "payments-home_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], ["slot", "end"], [3, "click"], ["slot", "icon-only", 3, "name"], [3, "isDarkTheme", "isShow"], ["fullscreen", "true", "appFormContentStyle", "", 1, "ion-padding-horizontal", "ion-content--white"], [1, "nequi-title"], [3, "formGroup", 4, "ngIf"], [1, "nequi-footer"], ["id", "payment-cancellation_contextual-message_text", "class", "payment-cancellation__contextual-message", 4, "ngIf"], ["id", "payments-home_next_button", "shape", "round", "color", "guayaba", "expand", "block", 1, "margin-vertical-16", 3, "disabled", "click"], [3, "formGroup"], [1, "nequi-item", "margin-bottom-8"], ["position", "floating", 1, "payments__merchant-label", "nequi-item__label", 3, "ngClass"], [1, "payments__merchant-input", 3, "formControl"], ["class", "nequi-item margin-bottom-8", 3, "nequiMessageManager", 4, "ngIf"], ["class", "nequi-item margin-bottom-8", 4, "ngIf"], [1, "nequi-item", "margin-bottom-8", 3, "nequiControlErrors"], ["position", "floating", 1, "payments__amount-label", "nequi-item__label", 3, "ngClass"], ["tooltipType", "error", "inputClass", "nequi-item__input", 1, "sc-ion-input-ios-h", 3, "control", "allowNegative"], ["color", "medium", 1, "margin-top-16"], [1, "margin-bottom-8", 3, "formControl", "minAmount"], [1, "nequi-item", "margin-bottom-8", 3, "nequiMessageManager"], [1, "payments__merchant-input", 3, "formControl", "readonly"], ["position", "floating", 1, "nequi-item__label", 3, "ngClass"], ["readonly", "", 1, "payments__message-input", 3, "formControl"], ["id", "payment-cancellation_contextual-message_text", 1, "payment-cancellation__contextual-message"]], template: function QuickPaymentPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QuickPaymentPage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-buttons", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QuickPaymentPage_Template_ion_button_click_6_listener() { return ctx.viewModel.isBalanceShowed = !ctx.viewModel.isBalanceShowed; });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "ion-icon", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "app-balance-header", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-content", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-text", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, QuickPaymentPage_form_13_Template, 20, 29, "form", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-footer", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, QuickPaymentPage_p_15_Template, 3, 3, "p", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "ion-button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QuickPaymentPage_Template_ion_button_click_17_listener() { return ctx.makePayment(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("name", ctx.viewModel.isBalanceShowed ? "chevron-up-outline" : "chevron-down-outline");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("isDarkTheme", false)("isShow", ctx.viewModel.isBalanceShowed);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 8, ctx.titleAndButtonTexts.title), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.viewModel.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isPaymentCancellation);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.viewModel.form == null ? null : ctx.viewModel.form.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 10, ctx.titleAndButtonTexts.button), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonIcon"], _money_management_src_presentation_components_balance_header_balance_header_component__WEBPACK_IMPORTED_MODULE_15__["BalanceHeaderComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonContent"], _ui_src_lib_directives_form_content_style_form_content_style_directive__WEBPACK_IMPORTED_MODULE_16__["FormContentStyleDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonText"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonFooter"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormControlDirective"], _ui_src_lib_directives_control_errors_control_errors_directive__WEBPACK_IMPORTED_MODULE_18__["ControlErrorsDirective"], _ui_src_lib_controls_nequi_input_currency_nequi_input_currency_component__WEBPACK_IMPORTED_MODULE_19__["NequiInputCurrencyComponent"], _money_management_src_presentation_controls_origin_money_control_origin_money_control_component__WEBPACK_IMPORTED_MODULE_20__["OriginMoneyControlComponent"], _ui_src_lib_directives_message_manager_message_manager_directive__WEBPACK_IMPORTED_MODULE_21__["MessageManagerDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__["TranslatePipe"]], styles: [".payment-cancellation__contextual-message[_ngcontent-%COMP%] {\n  color: var(--gray-alert-message);\n  text-align: justify;\n  font-size: 14px;\n  margin: 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvcXVpY2stcGF5bWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFDRiIsImZpbGUiOiJxdWljay1wYXltZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXltZW50LWNhbmNlbGxhdGlvbl9fY29udGV4dHVhbC1tZXNzYWdlIHtcbiAgY29sb3I6IHZhcigtLWdyYXktYWxlcnQtbWVzc2FnZSk7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG4iXX0= */"] });
    return QuickPaymentPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_6__["TransactionBasePage"]));



/***/ }),

/***/ "uNjT":
/*!**************************************************************!*\
  !*** ./libs/features/payments/src/config/payments.config.ts ***!
  \**************************************************************/
/*! exports provided: PaymentsConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsConfig", function() { return PaymentsConfig; });
var config = {
    i18n: {
        moduleKey: 'payments',
    },
};
var PaymentsConfig = Object.freeze(config);


/***/ }),

/***/ "vAlN":
/*!**********************************************************************************!*\
  !*** ./libs/features/payments/src/presentation/middleware/read-qr.middleware.ts ***!
  \**********************************************************************************/
/*! exports provided: ReadQrMiddleWare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadQrMiddleWare", function() { return ReadQrMiddleWare; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nequi_commons_exceptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/commons/exceptions */ "0sJq");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_payments_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/payments/config */ "cxwD");
/* harmony import */ var _nequi_features_payments_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/payments/core */ "dpbz");
/* harmony import */ var _nequi_native_commons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/native/commons */ "OxMa");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _redeem_code_src_data_entities_origin_redeem_type__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../redeem-code/src/data/entities/origin-redeem-type */ "nyE5");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../config */ "bt4H");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");


















var ReadQrMiddleWare = /** @class */ (function () {
    function ReadQrMiddleWare(qrReaderService, loadingService, alertService, navController, quickPaymentInteractor, router, paymentsConfigProvider) {
        this.qrReaderService = qrReaderService;
        this.loadingService = loadingService;
        this.alertService = alertService;
        this.navController = navController;
        this.quickPaymentInteractor = quickPaymentInteractor;
        this.router = router;
        this.paymentsConfigProvider = paymentsConfigProvider;
    }
    ReadQrMiddleWare.prototype.canActivate = function (route, state) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                this.activeRoute = route;
                this.activeState = state;
                this.currentPocket = (_a = this.router.getCurrentNavigation().extras.state) === null || _a === void 0 ? void 0 : _a.pocket;
                this.nextUrl = null;
                return [2 /*return*/, this.initProcess()];
            });
        });
    };
    ReadQrMiddleWare.prototype.initProcess = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.obtainTransactionData()];
                    case 1:
                        data = _a.sent();
                        if (!data) {
                            return [2 /*return*/];
                        }
                        this.navigateToNextPage(data);
                        return [2 /*return*/, false];
                    case 2:
                        error_1 = _a.sent();
                        return [4 /*yield*/, this.handleError(error_1)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ReadQrMiddleWare.prototype.obtainTransactionData = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var codeData, _a, data;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingService.show()];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, this.retrieveQRData()];
                    case 2:
                        codeData = _b.sent();
                        _a = !codeData;
                        if (_a) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.externalQrException(codeData)];
                    case 3:
                        _a = (_b.sent());
                        _b.label = 4;
                    case 4:
                        if (!_a) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.loadingService.hide()];
                    case 5:
                        _b.sent();
                        return [2 /*return*/];
                    case 6: return [4 /*yield*/, this.getTransactionData(codeData)];
                    case 7:
                        data = _b.sent();
                        data.pocket = this.currentPocket;
                        return [4 /*yield*/, this.loadingService.hide()];
                    case 8:
                        _b.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    ReadQrMiddleWare.prototype.externalQrException = function (qrString) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var qrStringTransformed, _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        qrStringTransformed = JSON.parse(qrString);
                        if (!((qrStringTransformed === null || qrStringTransformed === void 0 ? void 0 : qrStringTransformed.typeQR) === _nequi_features_payments_core__WEBPACK_IMPORTED_MODULE_6__["QrType"].EXTERNAL)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.loadingService.hide()];
                    case 1:
                        _b.sent();
                        this.alertService.showByI18n({
                            i18nKey: _config__WEBPACK_IMPORTED_MODULE_10__["PaymentsConfig"].i18n.externalQrError,
                            backdropDismiss: false,
                        });
                        return [2 /*return*/, true];
                    case 2: return [2 /*return*/, false];
                    case 3:
                        _a = _b.sent();
                        return [2 /*return*/, false];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ReadQrMiddleWare.prototype.retrieveQRData = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var pendingTransaction;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.quickPaymentInteractor.getPendingTransaction()];
                    case 1:
                        pendingTransaction = _a.sent();
                        if (!pendingTransaction) {
                            return [2 /*return*/, this.qrReaderService.launch(this.paymentsConfigProvider.configViewQR, this.paymentsConfigProvider.configButtonQR)];
                        }
                        this.quickPaymentInteractor.setPendingTransaction(null);
                        if (pendingTransaction.readingType === _nequi_features_payments_core__WEBPACK_IMPORTED_MODULE_6__["ReadingType"].MANUAL) {
                            throw new _nequi_native_commons__WEBPACK_IMPORTED_MODULE_7__["GoToCodeException"](_nequi_features_payments_core__WEBPACK_IMPORTED_MODULE_6__["ReadingType"].MANUAL.toString());
                        }
                        return [2 /*return*/, pendingTransaction.data];
                }
            });
        });
    };
    ReadQrMiddleWare.prototype.handleError = function (error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var errorMessage;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (error instanceof _nequi_native_commons__WEBPACK_IMPORTED_MODULE_7__["GoToCodeException"]) {
                            this.navigateToRedeemCode(error);
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.loadingService.hideWithoutFeedback()];
                    case 1:
                        _a.sent();
                        if (error instanceof _nequi_commons_exceptions__WEBPACK_IMPORTED_MODULE_3__["CoreException"]) {
                            errorMessage = _config__WEBPACK_IMPORTED_MODULE_10__["PaymentsConfig"].errorMessages[error.code];
                            if (errorMessage) {
                                this.showMappedError(errorMessage);
                                return [2 /*return*/];
                            }
                        }
                        if (error instanceof _nequi_features_payments_core__WEBPACK_IMPORTED_MODULE_6__["UnrecognizedQrException"]) {
                            this.showProcessError();
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.alertService.showByI18n({
                                i18nKey: _config__WEBPACK_IMPORTED_MODULE_10__["PaymentsConfig"].i18n.readError,
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ReadQrMiddleWare.prototype.getTransactionData = function (qrCode) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var paymentData;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.quickPaymentInteractor.processTransaction(qrCode)];
                    case 1:
                        paymentData = _a.sent();
                        if (paymentData.issuer === _nequi_features_payments_core__WEBPACK_IMPORTED_MODULE_6__["QrIssuer"].REDEEM_CODE) {
                            throw new _nequi_native_commons__WEBPACK_IMPORTED_MODULE_7__["GoToCodeException"](paymentData.issuer, qrCode);
                        }
                        this.quickPaymentInteractor.setPendingTransaction(null);
                        return [2 /*return*/, paymentData];
                }
            });
        });
    };
    ReadQrMiddleWare.prototype.showProcessError = function (i18nKey) {
        var _this = this;
        if (i18nKey === void 0) { i18nKey = _config__WEBPACK_IMPORTED_MODULE_10__["PaymentsConfig"].i18n.processError; }
        this.alertService.showByI18n({
            i18nKey: i18nKey,
            handlers: {
                accept: function () {
                    _this.navController.navigateRoot(_config__WEBPACK_IMPORTED_MODULE_10__["PaymentsConfig"].routes.adminUrl);
                },
            },
        });
    };
    ReadQrMiddleWare.prototype.showMappedError = function (i18nKey) {
        var _this = this;
        this.alertService.showByI18n({
            i18nKey: i18nKey,
            handlers: {
                accept: function () {
                    _this.initProcess();
                },
            },
        });
    };
    ReadQrMiddleWare.prototype.navigateToRedeemCode = function (error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (!error.data) {
                    this.navigateToRoute(_config__WEBPACK_IMPORTED_MODULE_10__["PaymentsConfig"].routes.redeemCode);
                    return [2 /*return*/];
                }
                this.navigateToValidateRedeemCode(error.data);
                return [2 /*return*/];
            });
        });
    };
    ReadQrMiddleWare.prototype.navigateToValidateRedeemCode = function (code) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.navigateToRoute(_config__WEBPACK_IMPORTED_MODULE_10__["PaymentsConfig"].routes.validateRedeemCode, {
                    state: { code: code, origin: _redeem_code_src_data_entities_origin_redeem_type__WEBPACK_IMPORTED_MODULE_9__["OriginRedeemType"].QR, hasCancelButton: false },
                });
                return [2 /*return*/];
            });
        });
    };
    ReadQrMiddleWare.prototype.navigateToRoute = function (route, data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingService.hideWithoutFeedback()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.navController.navigateForward(route, data)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ReadQrMiddleWare.prototype.navigateToNextPage = function (data) {
        if (!this.nextUrl) {
            this.nextUrl = this.configureNextUrl(this.activeRoute, this.activeState, data);
        }
        this.navController.navigateForward(this.nextUrl, { state: data });
    };
    ReadQrMiddleWare.prototype.configureNextUrl = function (route, state, data) {
        var _a, _b;
        var url = state.url.replace((_a = route.url[0]) === null || _a === void 0 ? void 0 : _a.path, _config__WEBPACK_IMPORTED_MODULE_10__["PaymentsConfig"].routes.payment);
        if (data.issuer === _nequi_features_payments_core__WEBPACK_IMPORTED_MODULE_6__["QrIssuer"].SEND) {
            url = state.url.replace("" + _config__WEBPACK_IMPORTED_MODULE_10__["PaymentsConfig"].paymentsRouteBase + ((_b = route.url[0]) === null || _b === void 0 ? void 0 : _b.path), _config__WEBPACK_IMPORTED_MODULE_10__["PaymentsConfig"].routes.sendFromQr);
        }
        return url;
    };
    ReadQrMiddleWare.ɵfac = function ReadQrMiddleWare_Factory(t) { return new (t || ReadQrMiddleWare)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_4__["QrReaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_8__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_4__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_nequi_features_payments_core__WEBPACK_IMPORTED_MODULE_6__["QuickPaymentInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_nequi_features_payments_config__WEBPACK_IMPORTED_MODULE_5__["PaymentsConfigProvider"])); };
    ReadQrMiddleWare.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjectable"]({ token: ReadQrMiddleWare, factory: ReadQrMiddleWare.ɵfac });
    return ReadQrMiddleWare;
}());



/***/ })

}]);
//# sourceMappingURL=nequi-features-payments-presentation.js.map