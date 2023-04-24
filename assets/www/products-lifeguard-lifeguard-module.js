(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-lifeguard-lifeguard-module"],{

/***/ "0n3p":
/*!*******************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard/pages/loan-info/loan-info.config.ts ***!
  \*******************************************************************************************************/
/*! exports provided: LoanInfoConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanInfoConfig", function() { return LoanInfoConfig; });
var LoanInfoConfig = Object.freeze({
    i18n: {
        loanInfo: {
            content: 'lifeguard.loan-info',
            shareIconButton: 'lifeguard.loan-info.share-icon-button',
            saveIconButton: 'lifeguard.loan-info.save-icon-button',
            headerTitle: 'lifeguard.loan-info.header.title',
            toatMessage: 'lifeguard.loan-info.toast-message',
            whatYouAskedFor: 'lifeguard.loan-info.info-list.what-you-asked-for',
            howMach: {
                label: 'lifeguard.loan-info.info-list.how-much.label',
                info: 'lifeguard.loan-info.info-list.how-much.info',
            },
            lifeEnsurance: {
                label: 'lifeguard.loan-info.info-list.life-ensurance.label',
                info: 'lifeguard.loan-info.info-list.life-ensurance.info',
            },
            paymentDate: 'lifeguard.loan-info.info-list.payment-date',
            howMuchIsTheInterestLabel: 'lifeguard.loan-info.info-list.how-much-is-the-interest-label',
            howMuchIsTheInterestValue: 'lifeguard.loan-info.info-list.how-much-is-the-interest-value',
            helpMessage: 'lifeguard.loan-info.footer-message',
            continueButton: 'lifeguard.loan-info.continue-button',
        },
        logs: 'lifeguard.loan-info.logs',
    },
    routes: {
        loanDestination: '/admin/credits/lifeguard/its-serious',
    },
    analytics: {
        intentionOfSummary: {
            name: 'Salvavidas_intencion_resumen_prestamo',
            params: {
                cleverTap: ['Fecha_intencion', 'Valor_solicitado', 'Plazo_prestamo'],
            },
        },
    },
});


/***/ }),

/***/ "2Auq":
/*!*********************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard/organisms/payment/payment.organism.ts ***!
  \*********************************************************************************************************/
/*! exports provided: PaymentOrganism */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentOrganism", function() { return PaymentOrganism; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/money-management/presentation */ "JFCQ");
/* harmony import */ var _nequi_features_money_management_presentation_controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/money-management/presentation/controls */ "CTrg");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/utils/string */ "p6rB");
/* harmony import */ var _pages_home_home_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pages/home/home.config */ "mB9U");
/* harmony import */ var _payment_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./payment.config */ "OfUe");
/* harmony import */ var _payment_view_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./payment.view-model */ "buqy");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _credit_detail_credit_detail_organism__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../credit-detail/credit-detail.organism */ "BUs5");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ui_src_lib_directives_form_content_style_form_content_style_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../../ui/src/lib/directives/form-content-style/form-content-style.directive */ "+XT3");
/* harmony import */ var _ui_src_lib_directives_control_errors_control_errors_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../../../ui/src/lib/directives/control-errors/control-errors.directive */ "XHcO");
/* harmony import */ var _ui_src_lib_controls_nequi_input_currency_nequi_input_currency_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../../../ui/src/lib/controls/nequi-input-currency/nequi-input-currency.component */ "VG0r");
/* harmony import */ var _money_management_src_presentation_controls_origin_money_control_origin_money_control_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../../money-management/src/presentation/controls/origin-money-control/origin-money-control.component */ "O3Yd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
























var _c0 = function (a0, a1, a2, a3) { return { required: a0, max: a1, min: a2, userPaymentAmount: a3 }; };
var _c1 = function (a0, a1) { return { control: a0, messages: a1 }; };
function PaymentOrganism_form_11_Template(rf, ctx) { if (rf & 1) {
    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "nequi-input-currency", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ion-checkbox", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ionChange", function PaymentOrganism_form_11_Template_ion_checkbox_ionChange_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.viewModel.updateAmountStatus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ion-text", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "ion-text", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "nequi-origin-money-control", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.viewModel.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "", ctx_r0.organismId, "__amount_label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nequiControlErrors", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](31, _c1, ctx_r0.viewModel.amount, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction4"](26, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 12, ctx_r0.messages.required), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 14, ctx_r0.messages.errors.higherAmount), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 16, ctx_r0.messages.required), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 18, ctx_r0.replaceAmountText))));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 20, ctx_r0.messages.fieldLabel), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("control", ctx_r0.viewModel.amount)("allowNegative", false)("decimalLimit", ctx_r0.viewModel.decimalLimitValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r0.viewModel.totalPayment);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 22, ctx_r0.messages.payAll), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 24, ctx_r0.messages.pocketPlaceholder));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r0.viewModel.pocket)("minAmount", ctx_r0.viewModel.amount.value);
} }
var PaymentOrganism = /** @class */ (function () {
    function PaymentOrganism(navigatorProvider, changeDetectorRef, translateProvider, currencyPipe, currencyConfigProvider, originMoneyService) {
        this.navigatorProvider = navigatorProvider;
        this.changeDetectorRef = changeDetectorRef;
        this.translateProvider = translateProvider;
        this.currencyPipe = currencyPipe;
        this.currencyConfigProvider = currencyConfigProvider;
        this.originMoneyService = originMoneyService;
        this.navigateTo = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.messages = _payment_config__WEBPACK_IMPORTED_MODULE_9__["CreditDetailConfig"];
        this.config = _pages_home_home_config__WEBPACK_IMPORTED_MODULE_8__["LifeGuardConfig"];
        this.replaceAmountText = '';
        this.isTotalPayment = false;
        this.viewModel = new _payment_view_model__WEBPACK_IMPORTED_MODULE_10__["PaymentViewModel"](currencyConfigProvider);
    }
    PaymentOrganism.prototype.ngAfterViewChecked = function () {
        this.changeDetectorRef.detectChanges();
    };
    PaymentOrganism.prototype.ngOnInit = function () {
        this.viewModel.initForm(this.data.balance, this.data.normalInterest, this.data.approvedValue);
        var message = this.translateProvider.get(this.messages.errors.invalidAmount);
        this.replaceAmountText = Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_7__["createFormat"])(message, [
            this.currencyPipe.transform(this.data.approvedValue),
        ]);
        this.setPocket();
    };
    PaymentOrganism.prototype.goBack = function () {
        this.navigatorProvider.back();
    };
    PaymentOrganism.prototype.goToPayment = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.isTotalPayment = parseFloat(this.viewModel.amount.value) === this.viewModel.totalAmount;
                this.navigateTo.emit({
                    pocket: this.viewModel.pocket.value,
                    amount: this.viewModel.amount.value,
                    isTotalPayment: this.isTotalPayment,
                });
                return [2 /*return*/];
            });
        });
    };
    PaymentOrganism.prototype.goToDetail = function () {
        this.navigatorProvider.navigateForward(this.config.routes.paymentDetail, {
            state: this.data,
        });
    };
    PaymentOrganism.prototype.setPocket = function () {
        this.viewModel.pocket.setValue(this.originMoneyService.getAvailablePocket());
    };
    PaymentOrganism.ɵfac = function PaymentOrganism_Factory(t) { return new (t || PaymentOrganism)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_3__["NavigatorProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_3__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_6__["CurrencyConfigProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_4__["OriginMoneyService"])); };
    PaymentOrganism.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PaymentOrganism, selectors: [["app-payment-organism"]], viewQuery: function PaymentOrganism_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_nequi_features_money_management_presentation_controls__WEBPACK_IMPORTED_MODULE_5__["OriginMoneyControlComponent"], 1);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.originMoneyControl = _t.first);
        } }, inputs: { data: "data", organismId: "organismId" }, outputs: { navigateTo: "navigateTo" }, decls: 17, vars: 13, consts: [[1, "nequi-header"], ["slot", "start"], [3, "id", "click"], ["slot", "icon-only", "name", "arrow-back-outline"], ["name", "information-outline", "slot", "end", 3, "click"], ["fullscreen", "true", 1, "ion-content--white", "ion-padding-horizontal"], [1, "nequi-title"], [3, "balance", "endAt", "isExpired"], ["class", "credit-detail__form", "appFormContentStyle", "", 3, "formGroup", 4, "ngIf"], [1, "nequi-footer", "ion-no-border", "card__footer"], [1, "nequi-footer__toolbar"], ["shape", "round", "expand", "block", "color", "guayaba", 1, "nequi-footer__button", 3, "id", "disabled", "click"], ["appFormContentStyle", "", 1, "credit-detail__form", 3, "formGroup"], [1, "nequi-item", "margin-bottom-8", 3, "id", "nequiControlErrors"], ["position", "floating", 1, "nequi-item__label"], ["tooltipType", "error", "inputClass", "nequi-item__input", 1, "sc-ion-input-ios-h", 3, "control", "allowNegative", "decimalLimit"], ["lines", "none", 1, "credit-detail__payall"], ["slot", "start", "color", "primary", "id", "credit-detail_checkbox", 1, "credit-detail__checkbox", 3, "formControl", "ionChange"], ["id", "credit-detail__label-check", 1, "credit-detail__label-check"], ["color", "medium", 1, "margin-top-8"], [1, "credit-detail__pocket-placeholder"], [1, "credit-detail__pocket"], [3, "formControl", "minAmount"]], template: function PaymentOrganism_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PaymentOrganism_Template_ion_button_click_3_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-icon", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PaymentOrganism_Template_ion_icon_click_5_listener() { return ctx.goToDetail(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-content", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "app-credit-detail-organism", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, PaymentOrganism_form_11_Template, 22, 34, "form", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ion-footer", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ion-toolbar", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PaymentOrganism_Template_ion_button_click_14_listener() { return ctx.goToPayment(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "", ctx.organismId, "_go-back_button");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 9, ctx.messages.title), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("balance", ctx.data.balance)("endAt", ctx.data.endAt)("isExpired", ctx.data.isExpired);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.viewModel.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "", ctx.organismId, "_ready_button");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.viewModel.amount.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 11, ctx.messages.nextButton), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonContent"], _credit_detail_credit_detail_organism__WEBPACK_IMPORTED_MODULE_12__["CreditDetailOrganism"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonFooter"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatusGroup"], _ui_src_lib_directives_form_content_style_form_content_style_directive__WEBPACK_IMPORTED_MODULE_14__["FormContentStyleDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonItem"], _ui_src_lib_directives_control_errors_control_errors_directive__WEBPACK_IMPORTED_MODULE_15__["ControlErrorsDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonLabel"], _ui_src_lib_controls_nequi_input_currency_nequi_input_currency_component__WEBPACK_IMPORTED_MODULE_16__["NequiInputCurrencyComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonCheckbox"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["BooleanValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormControlDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonText"], _money_management_src_presentation_controls_origin_money_control_origin_money_control_component__WEBPACK_IMPORTED_MODULE_17__["OriginMoneyControlComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["TranslatePipe"]], styles: [".info-item[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem;\n}\n.info-item__label[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.lifeguard-detail[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.lifeguard__footer-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--gray-70);\n  margin: 1rem 16px;\n}\n.credit-detail__amount-container[_ngcontent-%COMP%] {\n  margin-left: 14px;\n  margin-right: 14px;\n}\n.credit-detail__amount-container[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: bold;\n}\n.credit-detail__amount-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.credit-detail__label[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-bottom: 8px;\n}\n.credit-detail__amount[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.credit-detail__form[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.credit-detail__checkbox[_ngcontent-%COMP%] {\n  --background-checked: var(--input-purple);\n  --checkmark-color: white;\n}\n.credit-detail__label-check[_ngcontent-%COMP%] {\n  color: var(--gray-70);\n  font-size: 16px;\n}\n.credit-detail__payall[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.credit-detail__pocket-placeholder[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  font-size: 16px;\n}\n.credit-detail__pocket[_ngcontent-%COMP%] {\n  margin-left: 14px;\n  margin-right: 14px;\n}\n.card-option__chip[_ngcontent-%COMP%] {\n  --background: var(--guayaba-10);\n  --color: var(--guayaba);\n  padding: 0 10px;\n  height: 24px;\n}\n.checkbox-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  stroke: white;\n}\nion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvcGF5bWVudC5vcmdhbmlzbS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUFDRjtBQUFFO0VBQ0UsZUFBQTtBQUVKO0FBRUE7RUFDRSxnQkFBQTtBQUNGO0FBR0U7RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQUFKO0FBS0U7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBRko7QUFHSTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQUROO0FBR0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUROO0FBS0U7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUFISjtBQU1FO0VBQ0UsZUFBQTtBQUpKO0FBT0U7RUFDRSxnQkFBQTtBQUxKO0FBUUU7RUFDRSx5Q0FBQTtFQUNBLHdCQUFBO0FBTko7QUFTRTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtBQVBKO0FBVUU7RUFDRSxnQkFBQTtBQVJKO0FBV0U7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFUSjtBQVlFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQVZKO0FBY0E7RUFDRSwrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFYRjtBQWNBO0VBQ0UsYUFBQTtBQVhGO0FBY0E7RUFDRSxlQUFBO0FBWEYiLCJmaWxlIjoicGF5bWVudC5vcmdhbmlzbS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluZm8taXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDAuM3JlbTtcbiAgJl9fbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuXG4ubGlmZWd1YXJkLWRldGFpbCB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5saWZlZ3VhcmQge1xuICAmX19mb290ZXItdGV4dCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiB2YXIoLS1ncmF5LTcwKTtcbiAgICBtYXJnaW46IDFyZW0gMTZweDtcbiAgfVxufVxuXG4uY3JlZGl0LWRldGFpbCB7XG4gICZfX2Ftb3VudC1jb250YWluZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAxNHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTRweDtcbiAgICBpb24tdGV4dCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgICBkaXYge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuICB9XG5cbiAgJl9fbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIH1cblxuICAmX19hbW91bnQge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxuXG4gICZfX2Zvcm0ge1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gIH1cblxuICAmX19jaGVja2JveCB7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLWlucHV0LXB1cnBsZSk7XG4gICAgLS1jaGVja21hcmstY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgJl9fbGFiZWwtY2hlY2sge1xuICAgIGNvbG9yOiB2YXIoLS1ncmF5LTcwKTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cblxuICAmX19wYXlhbGwge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cblxuICAmX19wb2NrZXQtcGxhY2Vob2xkZXIge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgJl9fcG9ja2V0IHtcbiAgICBtYXJnaW4tbGVmdDogMTRweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE0cHg7XG4gIH1cbn1cblxuLmNhcmQtb3B0aW9uX19jaGlwIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1ndWF5YWJhLTEwKTtcbiAgLS1jb2xvcjogdmFyKC0tZ3VheWFiYSk7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuXG4uY2hlY2tib3gtaWNvbiBwYXRoIHtcbiAgc3Ryb2tlOiB3aGl0ZTtcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG59XG4iXX0= */"] });
    return PaymentOrganism;
}());



/***/ }),

/***/ "3sOq":
/*!*************************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard/pages/reschedule-payment/reschedule-payment.config.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: ReschedulePaymentConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReschedulePaymentConfig", function() { return ReschedulePaymentConfig; });
var ReschedulePaymentConfig = Object.freeze({
    i18n: {
        title: 'lifeguard.reschedule-payment.title',
        nextButton: 'lifeguard.reschedule-payment.button',
        paymentDescription: 'lifeguard.reschedule-payment.description',
        detailItems: 'lifeguard.reschedule-payment.detail-items',
        content: 'lifeguard.reschedule-payment',
        raiseAnchorContent: 'lifeguard.reschedule-payment.card-modal.raise-anchor.content',
    },
    routes: {
        dashboard: '/admin/dashboard',
    },
});


/***/ }),

/***/ "4Qcv":
/*!*****************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard/pages/reschedule-home/reschedule-home.page.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: RescheduleHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RescheduleHomePage", function() { return RescheduleHomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_application_data_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/application-data/core */ "UgzZ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/credits/core */ "42wy");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _reschedule_home_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reschedule-home.config */ "zncb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ui_src_lib_components_busy_indicator_busy_indicator_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../../ui/src/lib/components/busy-indicator/busy-indicator.component */ "N6nj");
/* harmony import */ var _ui_src_lib_components_item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../../ui/src/lib/components/item-detail/item-detail.component */ "Ycc7");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");




















function RescheduleHomePage_app_busy_indicator_12_Template(rf, ctx) { if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-busy-indicator", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onReload", function RescheduleHomePage_app_busy_indicator_12_Template_app_busy_indicator_onReload_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.reload(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showReload", true)("reloadMessage", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, "lifeguard.extend-term.retry-message"));
} }
function RescheduleHomePage_div_13_app_item_detail_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-item-detail", 13);
} if (rf & 2) {
    var item_r5 = ctx.$implicit;
    var last_r6 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", item_r5.image)("title", item_r5.title)("line", !last_r6)("description", item_r5.content);
} }
function RescheduleHomePage_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RescheduleHomePage_div_13_app_item_detail_1_Template, 1, 4, "app-item-detail", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.itemList);
} }
var RescheduleHomePage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(RescheduleHomePage, _super);
    function RescheduleHomePage(translateProvider, creditInteractor, cardModalService, loadService, applicationDataInteractor, moduleConfigProvider, router, injector) {
        var _this = _super.call(this, injector) || this;
        _this.translateProvider = translateProvider;
        _this.creditInteractor = creditInteractor;
        _this.cardModalService = cardModalService;
        _this.loadService = loadService;
        _this.applicationDataInteractor = applicationDataInteractor;
        _this.moduleConfigProvider = moduleConfigProvider;
        _this.router = router;
        _this.config = _reschedule_home_config__WEBPACK_IMPORTED_MODULE_8__["RescheduleHomeConfig"];
        _this.gender = _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_4__["Gender"];
        _this.itemList = [];
        _this.showRetry = false;
        return _this;
    }
    RescheduleHomePage.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.router.getCurrentNavigation().extras.state) return [3 /*break*/, 3];
                        this.loanAccountNumber = this.router.getCurrentNavigation().extras.state.loanAcc;
                        return [4 /*yield*/, this.isProcessAlreadyStarted()];
                    case 1:
                        if (!!(_a.sent())) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.loadData()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RescheduleHomePage.prototype.goBack = function () {
        this.navigatorProvider.back();
    };
    RescheduleHomePage.prototype.reload = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.showRetry = false;
                        return [4 /*yield*/, this.loadData()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RescheduleHomePage.prototype.loadData = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var response, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 10]);
                        return [4 /*yield*/, this.loadService.show()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.creditInteractor.validateLoanExtension(this.loanAccountNumber)];
                    case 2:
                        response = (_a.sent());
                        return [4 /*yield*/, this.loadService.hideWithoutFeedback()];
                    case 3:
                        _a.sent();
                        if (!response.applyReschedule) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.validateReschedule(response.rescheduleName)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [3 /*break*/, 10];
                    case 6:
                        error_1 = _a.sent();
                        if (!(error_1.constructor === _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_6__["ValidateLoanRescheduleException"])) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.showCardModal(this.config.i18n.modalsErrors[error_1.code])];
                    case 7:
                        _a.sent();
                        return [2 /*return*/];
                    case 8: return [4 /*yield*/, this.loadService.hideWithoutFeedback()];
                    case 9:
                        _a.sent();
                        this.showRetry = true;
                        throw error_1;
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    RescheduleHomePage.prototype.goTo = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.applicationDataInteractor.save(this.moduleConfigProvider.applicationData.lifeguardRescheduleAlreadyStarted, true)];
                    case 1:
                        _a.sent();
                        this.navigatorProvider.navigateForward(this.config.routes.haveToPay);
                        return [2 /*return*/];
                }
            });
        });
    };
    RescheduleHomePage.prototype.isProcessAlreadyStarted = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var isAlreadyStarted;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.applicationDataInteractor.findValue(this.moduleConfigProvider.applicationData.lifeguardRescheduleAlreadyStarted, false)];
                    case 1:
                        isAlreadyStarted = _a.sent();
                        if (isAlreadyStarted) {
                            setTimeout(function () {
                                _this.showCardModal(_this.config.i18n.modalProcessIsAlreadyStarted);
                            }, 0);
                            return [2 /*return*/, true];
                        }
                        return [2 /*return*/, false];
                }
            });
        });
    };
    RescheduleHomePage.prototype.validateReschedule = function (rescheduleName) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.itemList = this.translateProvider.get(rescheduleName === _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_6__["ScheduleName"].MODIFICATION
                    ? this.config.i18n.modification
                    : this.config.i18n.maintenance);
                return [2 /*return*/];
            });
        });
    };
    RescheduleHomePage.prototype.showCardModal = function (i18nMessages) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages, buttons;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        messages = this.translateProvider.get(i18nMessages);
                        buttons = null;
                        if (messages.buttons.cancel) {
                            buttons = [
                                {
                                    text: messages.buttons.next,
                                    handler: function () { return _this.reload(); },
                                },
                                {
                                    text: messages.buttons.cancel,
                                    color: 'medianoche',
                                    handler: function () { return _this.navigatorProvider.navigateForward(_this.config.routes.backpack); },
                                },
                            ];
                        }
                        if (!messages.buttons.cancel) {
                            buttons = [
                                {
                                    text: messages.buttons.next,
                                    handler: function () { return _this.navigatorProvider.navigateForward(_this.config.routes.backpack); },
                                },
                            ];
                        }
                        return [4 /*yield*/, this.cardModalService.show({
                                title: messages.title,
                                imgPath: messages.image,
                                content: messages.content,
                                buttons: buttons,
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RescheduleHomePage.ɵfac = function RescheduleHomePage_Factory(t) { return new (t || RescheduleHomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_5__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_6__["CreditInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_7__["CardModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_7__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_application_data_core__WEBPACK_IMPORTED_MODULE_3__["ApplicationDataInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_5__["ModuleConfigProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"])); };
    RescheduleHomePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RescheduleHomePage, selectors: [["app-reschedule-home"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 19, vars: 11, consts: [[1, "nequi-header"], ["slot", "start"], ["id", "extend-term_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], [1, "nequi-header__title", "ion-text-start"], ["fullscreen", "true", 1, "ion-content--white", "ion-padding-horizontal"], [1, "nequi-title"], [3, "showReload", "reloadMessage", "onReload", 4, "ngIf"], [4, "ngIf"], [1, "nequi-footer", "ion-no-border"], ["id", "extend-term_ready_button", "expand", "block", "color", "guayaba", 1, "nequi-footer__button", 3, "click"], [3, "showReload", "reloadMessage", "onReload"], [3, "icon", "title", "line", "description", 4, "ngFor", "ngForOf"], [3, "icon", "title", "line", "description"]], template: function RescheduleHomePage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RescheduleHomePage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, RescheduleHomePage_app_busy_indicator_12_Template, 2, 4, "app-busy-indicator", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, RescheduleHomePage_div_13_Template, 2, 1, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-footer", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RescheduleHomePage_Template_ion_button_click_16_listener() { return ctx.goTo(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 5, "lifeguard.extend-term.title"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 7, "lifeguard.extend-term.title"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showRetry);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.showRetry);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 9, "lifeguard.extend-term.button"), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonFooter"], _ui_src_lib_components_busy_indicator_busy_indicator_component__WEBPACK_IMPORTED_MODULE_11__["BusyIndicatorComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _ui_src_lib_components_item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_12__["ItemDetailComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"]], styles: [".description-item[_ngcontent-%COMP%]::part(native) {\n  --padding-start: 0px;\n}\n.description-item__text[_ngcontent-%COMP%] {\n  color: var(--gray-70);\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 17px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvcmVzY2hlZHVsZS1ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLG9CQUFBO0FBQUo7QUFHRTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBREoiLCJmaWxlIjoicmVzY2hlZHVsZS1ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXNjcmlwdGlvbi1pdGVtIHtcbiAgJjo6cGFydChuYXRpdmUpIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgfVxuXG4gICZfX3RleHQge1xuICAgIGNvbG9yOiB2YXIoLS1ncmF5LTcwKTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxufVxuIl19 */"] });
    return RescheduleHomePage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_4__["FeatureBasePage"]));



/***/ }),

/***/ "4f0y":
/*!***********************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard/pages/its-serious/its-serious.config.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ItsSeriousConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItsSeriousConfig", function() { return ItsSeriousConfig; });
var ItsSeriousConfig = Object.freeze({
    i18n: {
        title: 'lifeguard.its-serious.title',
        itemList: 'lifeguard.its-serious.item-list',
        acceptButton: 'lifeguard.its-serious.accept-button',
    },
    routes: {
        termsAndConditions: '/admin/credits/lifeguard/terms-and-conditions',
    },
});


/***/ }),

/***/ "5YDh":
/*!*******************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard/pages/home/home.page.ts ***!
  \*******************************************************************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_commons_exceptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/commons/exceptions */ "0sJq");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/features/credits/core */ "42wy");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_date__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nequi/utils/date */ "tGfC");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _organisms_approval_front_approval_front_view_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../organisms/approval-front/approval-front.view-model */ "pwQe");
/* harmony import */ var _home_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home.config */ "mB9U");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home.service */ "ixgN");
/* harmony import */ var _home_view_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home.view-model */ "TR9s");
/* harmony import */ var _organisms_preapproved_preapproved_organism__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../organisms/preapproved/preapproved.organism */ "trfP");
/* harmony import */ var _organisms_payment_payment_organism__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../organisms/payment/payment.organism */ "2Auq");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");


























function HomePage_app_preapproved_organism_0_Template(rf, ctx) { if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-preapproved-organism", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("navigateTo", function HomePage_app_preapproved_organism_0_Template_app_preapproved_organism_navigateTo_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.navigateTo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("messages", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 3, ctx_r0.config.i18n.preapproved))("data", ctx_r0.homeViewModel.preapproved)("organismId", "preapproved");
} }
function HomePage_app_payment_organism_1_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-payment-organism", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("navigateTo", function HomePage_app_payment_organism_1_Template_app_payment_organism_navigateTo_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.processPayment($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx_r1.homeViewModel.credit)("organismId", "payment");
} }
var TYPE_OF_NUMBER = 'number';
var HomePage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HomePage, _super);
    function HomePage(injector, homeViewModel, confirmBottomSheetService, route, currencyPipe, cardModalService, datePipe, creditEventsHandler, approvalFrontViewModel, analyticsInteractor) {
        var _this = _super.call(this, injector) || this;
        _this.homeViewModel = homeViewModel;
        _this.confirmBottomSheetService = confirmBottomSheetService;
        _this.route = route;
        _this.currencyPipe = currencyPipe;
        _this.cardModalService = cardModalService;
        _this.datePipe = datePipe;
        _this.creditEventsHandler = creditEventsHandler;
        _this.approvalFrontViewModel = approvalFrontViewModel;
        _this.analyticsInteractor = analyticsInteractor;
        _this.config = _home_config__WEBPACK_IMPORTED_MODULE_12__["LifeGuardConfig"];
        _this.minAmount = 0;
        return _this;
    }
    HomePage.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.homeViewModel.initForm();
                this.setAnalyticsIntentionToPay();
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.ngOnDestroy = function () {
        this.approvalFrontViewModel.resetValue();
    };
    HomePage.prototype.navigateTo = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.navigatorProvider.navigateForward(this.config.routes.paymentGuarantees, {
                    relativeTo: this.route,
                });
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.processPayment = function (paymentInfo) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages, data;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        messages = this.translateProvider.get(_home_config__WEBPACK_IMPORTED_MODULE_12__["LifeGuardConfig"].confirmation);
                        this.homeViewModel.isTotalPayment = paymentInfo.isTotalPayment;
                        this.homeViewModel.paymentAmount = paymentInfo.amount;
                        this.pocket = paymentInfo.pocket;
                        return [4 /*yield*/, this.confirmBottomSheetService.show({
                                title: messages.title,
                                subtitle: messages.subtitle,
                                items: this.homeViewModel.buildItems(messages, {
                                    payment: paymentInfo.amount,
                                    loan: this.homeViewModel.credit.balance,
                                    date: this.homeViewModel.credit.endAt.toString(),
                                    normalInterest: this.homeViewModel.credit.normalInterest,
                                    penaltyInterest: this.homeViewModel.credit.penaltyInterest,
                                    insurance: this.homeViewModel.credit.feesOutstanding,
                                    isTotalPayment: paymentInfo.isTotalPayment,
                                    isExpired: paymentInfo.isExpired,
                                }, paymentInfo.pocket, this.currencyPipe, this.datePipe),
                                confirmLabel: messages.button.next,
                            })];
                    case 1:
                        data = (_a.sent()).data;
                        if (data === true) {
                            this.makePayment();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.onTransactionSuccess = function (response) {
        if (this.homeViewModel.isTotalPayment) {
            this.creditEventsHandler.emitDisbursedEvent({
                creditType: _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__["CreditType"].LIFEGUARD,
                hasCredits: false,
                isExpired: false,
                isRescheduled: false,
            });
        }
        this.showCardModal(response);
    };
    HomePage.prototype.onTransactionFailed = function (error) {
        this.setAnalyticsIntentionToPay(error);
        if (error.constructor === _nequi_commons_exceptions__WEBPACK_IMPORTED_MODULE_4__["ExceedCeilingException"]) {
            throw error;
        }
        if (_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["NOT_BALANCE_AVAILABLE_ERRORS"].includes(error.code)) {
            throw error;
        }
        this.toastService.showError(error.message);
    };
    HomePage.prototype.isInsufficientMoney = function (transaction) {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                if (typeof ((_a = transaction.pocket) === null || _a === void 0 ? void 0 : _a.amount) === TYPE_OF_NUMBER) {
                    return [2 /*return*/, ((_b = transaction.pocket) === null || _b === void 0 ? void 0 : _b.amount) < transaction.amount];
                }
                return [2 /*return*/, false];
            });
        });
    };
    HomePage.prototype.makePayment = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data, transaction;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                data = {
                    operatorType: _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__["OperationCreditType"].PAYMENT,
                    productId: _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__["CreditType"].LIFEGUARD,
                    debenture: this.homeViewModel.credit.debenture,
                    paymentType: _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__["PaymentType"].LOAN,
                    rescheduleType: _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__["RescheduleType"].INSTALLMENTS_NUMBER,
                };
                transaction = new _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__["PaymentTransaction"]()
                    .withData(data)
                    .withAmount(this.homeViewModel.paymentAmount)
                    .withPocket(this.pocket);
                _super.prototype.executeTransaction.call(this, transaction);
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.showCardModal = function (data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                messages = this.translateProvider.get(this.getI18Messages());
                this.cardModalService.show({
                    imgPath: messages.icon,
                    title: messages.title,
                    content: messages.content,
                    buttons: [
                        {
                            text: messages.buttons.next,
                            handler: function () {
                                if (_this.homeViewModel.credit.isExpired) {
                                    _this.navigatorProvider.navigateForward(_home_config__WEBPACK_IMPORTED_MODULE_12__["LifeGuardConfig"].routes.movements, {
                                        state: { tranId: data.transactionDetails.id },
                                    });
                                    return;
                                }
                                _this.navigatorProvider.navigateRoot(_home_config__WEBPACK_IMPORTED_MODULE_12__["LifeGuardConfig"].routes.backpack);
                            },
                        },
                    ],
                });
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.getI18Messages = function () {
        if (this.homeViewModel.isTotalPayment) {
            return this.getTotalPaymentMessage();
        }
        return this.getPartialPaymentMessage();
    };
    HomePage.prototype.getTotalPaymentMessage = function () {
        return this.homeViewModel.credit.isExpired
            ? _home_config__WEBPACK_IMPORTED_MODULE_12__["LifeGuardConfig"].i18n.modal.totalPaymentExpired
            : _home_config__WEBPACK_IMPORTED_MODULE_12__["LifeGuardConfig"].i18n.modal.totalPayment;
    };
    HomePage.prototype.getPartialPaymentMessage = function () {
        return this.homeViewModel.credit.isExpired
            ? _home_config__WEBPACK_IMPORTED_MODULE_12__["LifeGuardConfig"].i18n.modal.partialPaymentExpired
            : _home_config__WEBPACK_IMPORTED_MODULE_12__["LifeGuardConfig"].i18n.modal.partialPayment;
    };
    HomePage.prototype.setAnalyticsIntentionToPay = function (error) {
        var eventName = this.config.analytics.intentionToPay.name.cleverTap;
        var nextInstallmentAt = this.homeViewModel.credit.installment.next.date;
        var params = this.config.analytics.intentionToPay.params.cleverTap;
        var paramsValue = [
            Object(_nequi_utils_date__WEBPACK_IMPORTED_MODULE_9__["getFormattedDateTimes"])(),
            this.homeViewModel.credit.isExpired,
            Object(_nequi_utils_date__WEBPACK_IMPORTED_MODULE_9__["getFormattedDateTimes"])(nextInstallmentAt),
            this.homeViewModel.credit.balance,
            this.homeViewModel.credit.installment.total - this.homeViewModel.credit.installment.totalPaid,
        ];
        if (error) {
            eventName = this.config.analytics.intentionToPay.error;
            params = params.concat(this.config.analytics.intentionToPay.params.error);
            paramsValue = paramsValue.concat([error.code, error.message]);
        }
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["AnalyticsType"].CLEVERTAP,
            params: {
                eventName: eventName,
                eventProps: Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_10__["stringsArrayToObjectWithValues"])(params, paramsValue),
            },
        });
    };
    HomePage.ɵfac = function HomePage_Factory(t) { return new (t || HomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_home_view_model__WEBPACK_IMPORTED_MODULE_14__["HomeViewModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_8__["ConfirmInfoBottomSheetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_8__["CardModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__["CreditEventsHandler"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_organisms_approval_front_approval_front_view_model__WEBPACK_IMPORTED_MODULE_11__["ApprovalFrontViewModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["AnalyticsInteractor"])); };
    HomePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomePage, selectors: [["app-credits-lifeguard"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_home_service__WEBPACK_IMPORTED_MODULE_13__["HomeService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 2, consts: [["class", "ion-page", 3, "messages", "data", "organismId", "navigateTo", 4, "ngIf"], ["class", "ion-page", 3, "data", "organismId", "navigateTo", 4, "ngIf"], [1, "ion-page", 3, "messages", "data", "organismId", "navigateTo"], [1, "ion-page", 3, "data", "organismId", "navigateTo"]], template: function HomePage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, HomePage_app_preapproved_organism_0_Template, 2, 5, "app-preapproved-organism", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HomePage_app_payment_organism_1_Template, 1, 2, "app-payment-organism", 1);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.homeViewModel.preapproved);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.homeViewModel.credit);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _organisms_preapproved_preapproved_organism__WEBPACK_IMPORTED_MODULE_15__["PreApprovedOrganism"], _organisms_payment_payment_organism__WEBPACK_IMPORTED_MODULE_16__["PaymentOrganism"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyJ9 */"] });
    return HomePage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_6__["TransactionBasePage"]));



/***/ }),

/***/ "7lGe":
/*!*************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard/pages/gender/gender.config.ts ***!
  \*************************************************************************************************/
/*! exports provided: LifeInsuranceConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifeInsuranceConfig", function() { return LifeInsuranceConfig; });
var LifeInsuranceConfig = Object.freeze({
    i18n: {
        headerTitle: 'lifeguard.life-insurance.content.title',
        headerDescription: 'lifeguard.life-insurance.gender-options.text',
        genderOptions: {
            female: {
                label: 'lifeguard.life-insurance.gender-options.female.label',
                image: 'lifeguard.life-insurance.gender-options.female.icon',
            },
            male: {
                label: 'lifeguard.life-insurance.gender-options.male.label',
                image: 'lifeguard.life-insurance.gender-options.male.icon',
            },
        },
        readyButton: 'lifeguard.life-insurance.gender-button',
    },
    goTo: {
        ensureLoan: '/admin/credits/lifeguard/ensure-loan',
    },
});


/***/ }),

/***/ "85bt":
/*!***************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard/pages/payment-detail/payment-detail.page.ts ***!
  \***************************************************************************************************************/
/*! exports provided: PaymentDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentDetailPage", function() { return PaymentDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_apps_base_mobile_config_features_commons_services_screenshot_sharing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/apps/base/mobile/config/features/commons/services/screenshot-sharing */ "VXOE");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_utils_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/utils/string */ "p6rB");
/* harmony import */ var _payment_detail_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment-detail.config */ "TDwy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ui_src_lib_components_view_detail_view_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../../ui/src/lib/components/view-detail/view-detail.component */ "yT3N");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");















function PaymentDetailPage_ion_header_0_Template(rf, ctx) { if (rf & 1) {
    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-header", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "ion-toolbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "ion-buttons", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "ion-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PaymentDetailPage_ion_header_0_Template_ion_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2); var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r1.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "ion-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "ion-buttons", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "ion-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PaymentDetailPage_ion_header_0_Template_ion_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r3.shareScreenshoot(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "ion-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "ion-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PaymentDetailPage_ion_header_0_Template_ion_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r4.saveScreenshot(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "ion-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", true);
} }
var PaymentDetailPage = /** @class */ (function () {
    function PaymentDetailPage(navigatorProvider, translateProvider, screenshotSharingService, router, currencyPipe, datePipe) {
        this.navigatorProvider = navigatorProvider;
        this.translateProvider = translateProvider;
        this.screenshotSharingService = screenshotSharingService;
        this.router = router;
        this.currencyPipe = currencyPipe;
        this.datePipe = datePipe;
        this.config = _payment_detail_config__WEBPACK_IMPORTED_MODULE_6__["PaymentDetailConfig"];
        this.isScreenShotTaken = false;
    }
    PaymentDetailPage.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var credit;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.router.getCurrentNavigation().extras.state];
                    case 1:
                        credit = (_a.sent());
                        this.loadDetail(credit);
                        return [2 /*return*/];
                }
            });
        });
    };
    PaymentDetailPage.prototype.goBack = function () {
        this.navigatorProvider.back();
    };
    PaymentDetailPage.prototype.shareScreenshoot = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isScreenShotTaken = true;
                        return [4 /*yield*/, this.screenshotSharingService.viaOptions()];
                    case 1:
                        _a.sent();
                        this.isScreenShotTaken = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    PaymentDetailPage.prototype.saveScreenshot = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.screenshotSharingService.viaOptions()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PaymentDetailPage.prototype.loadDetail = function (credit) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var items;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                items = this.translateProvider.get(this.config.i18n.paymentDetail);
                this.detailItem = [
                    {
                        label: items.loanValue,
                        description: this.currencyPipe.transform(credit.approvedValue),
                    },
                ];
                this.interestRates(credit, items.interestRates);
                if (!credit.isExpired) {
                    this.detailItem = this.detailItem.concat([
                        {
                            label: items.monthlyFee.label,
                            description: this.currencyPipe.transform(credit.normalInterest),
                            helpMessage: items.monthlyFee.message,
                        },
                        {
                            label: items.monthlyInsurance.label,
                            description: this.currencyPipe.transform(credit.feesOutstanding),
                            helpMessage: Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_5__["createFormat"])(items.monthlyInsurance.message, [
                                this.currencyPipe.transform(this.config.insurance),
                            ]),
                        },
                    ]);
                }
                if (credit.isExpired) {
                    this.detailItem = this.detailItem.concat([
                        {
                            label: items.monthlyFee.label,
                            description: this.currencyPipe.transform(credit.normalInterest),
                        },
                        {
                            label: items.monthlyFeeArrears.label,
                            description: this.currencyPipe.transform(credit.penaltyInterest),
                            helpMessage: items.monthlyFeeArrears.message,
                        },
                        {
                            label: items.monthlyInsuranceToday.label,
                            description: this.currencyPipe.transform(credit.feesOutstanding),
                            helpMessage: Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_5__["createFormat"])(items.monthlyInsuranceToday.message, [
                                this.currencyPipe.transform(this.config.insurance),
                            ]),
                        },
                    ]);
                }
                this.detailItem = this.detailItem.concat([
                    {
                        label: items.totalvalue,
                        description: this.currencyPipe.transform(credit.balance),
                    },
                    {
                        label: items.paydayLimit,
                        description: this.datePipe.transform(new Date(credit.endAt)),
                    },
                    {
                        label: items.numberContract,
                        description: credit.debenture,
                    },
                ]);
                return [2 /*return*/];
            });
        });
    };
    PaymentDetailPage.prototype.interestRates = function (credit, interestRates) {
        if (credit.rateAnnualInterest && credit.rateMonthlyInterest) {
            this.detailItem.push({
                label: interestRates.label,
                description: Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_5__["createFormat"])(interestRates.description, [
                    credit.rateMonthlyInterest.toString(),
                    credit.rateAnnualInterest.toString(),
                ]),
                helpMessage: interestRates.message,
            });
        }
    };
    PaymentDetailPage.ɵfac = function PaymentDetailPage_Factory(t) { return new (t || PaymentDetailPage)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_4__["NavigatorProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_4__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_nequi_apps_base_mobile_config_features_commons_services_screenshot_sharing__WEBPACK_IMPORTED_MODULE_3__["ScreenshotSharingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"])); };
    PaymentDetailPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: PaymentDetailPage, selectors: [["app-payment-detail"]], decls: 7, vars: 5, consts: [["class", "nequi-header", 4, "ngIf"], ["fullscreen", "true", 1, "ion-content--white", "ion-padding-horizontal"], [1, "nequi-title"], [1, "payment-detail"], [3, "details"], [1, "nequi-header"], ["slot", "start"], ["id", "payment-detail_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], ["slot", "end"], ["id", "payment-detail_share_button", 3, "click"], ["slot", "icon-only", "name", "share-social-outline"], ["id", "payment-detail_save_button", 3, "hidden", "click"], ["slot", "icon-only", "name", "save-outline"]], template: function PaymentDetailPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, PaymentDetailPage_ion_header_0_Template, 10, 1, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "ion-content", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "app-view-detail", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isScreenShotTaken);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 3, ctx.config.i18n.headerTitle), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("details", ctx.detailItem);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonContent"], _ui_src_lib_components_view_detail_view_detail_component__WEBPACK_IMPORTED_MODULE_9__["ViewDetailComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonIcon"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"]], styles: [".nequi-title[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvcGF5bWVudC1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRiIsImZpbGUiOiJwYXltZW50LWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmVxdWktdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4iXX0= */"] });
    return PaymentDetailPage;
}());



/***/ }),

/***/ "8Lu4":
/*!*****************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard/pages/gender/gender.view-model.ts ***!
  \*****************************************************************************************************/
/*! exports provided: LifeInsuranceViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifeInsuranceViewModel", function() { return LifeInsuranceViewModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");


var LifeInsuranceViewModel = /** @class */ (function () {
    function LifeInsuranceViewModel() {
    }
    LifeInsuranceViewModel.prototype.initForm = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.gender = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
                this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                    gender: this.gender,
                });
                return [2 /*return*/];
            });
        });
    };
    return LifeInsuranceViewModel;
}());



/***/ }),

/***/ "Avlg":
/*!***************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard/lifeguard.module.ts ***!
  \***************************************************************************************/
/*! exports provided: LifeguardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifeguardModule", function() { return LifeguardModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nequi_apps_base_mobile_config_features_commons_services_screenshot_sharing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/apps/base/mobile/config/features/commons/services/screenshot-sharing */ "VXOE");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/money-management/presentation */ "JFCQ");
/* harmony import */ var _nequi_native_screenshot__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/native/screenshot */ "dqaN");
/* harmony import */ var _nequi_native_social_sharing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/native/social-sharing */ "nNyq");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/components.module */ "LwLH");
/* harmony import */ var _middlewares_lifeguard_middleware__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../middlewares/lifeguard.middleware */ "P+Ai");
/* harmony import */ var _organisms_approval_front_approval_front_view_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../organisms/approval-front/approval-front.view-model */ "pwQe");
/* harmony import */ var _organisms_approval_front_services_approval_front_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../organisms/approval-front/services/approval-front.service */ "Pxf4");
/* harmony import */ var _organisms_approval_front_services_occupation_engine_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../organisms/approval-front/services/occupation-engine.service */ "hY4E");
/* harmony import */ var _organisms_approval_front_services_your_money_engine_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../organisms/approval-front/services/your-money-engine.service */ "/RGA");
/* harmony import */ var _organisms_credits_organism_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../organisms/credits-organism.module */ "DepU");
/* harmony import */ var _services_customer_finacial_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../services/customer-finacial.service */ "uuzL");
/* harmony import */ var _config_lifeguard_config__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./config/lifeguard.config */ "r704");
/* harmony import */ var _lifeguard_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./lifeguard-routing.module */ "vRqB");
/* harmony import */ var _organisms_credit_detail_credit_detail_organism__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./organisms/credit-detail/credit-detail.organism */ "BUs5");
/* harmony import */ var _organisms_payment_payment_organism__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./organisms/payment/payment.organism */ "2Auq");
/* harmony import */ var _organisms_preapproved_preapproved_organism__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./organisms/preapproved/preapproved.organism */ "trfP");
/* harmony import */ var _pages_ensure_loan_ensure_loan_page__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/ensure-loan/ensure-loan.page */ "NBrM");
/* harmony import */ var _pages_gender_gender_page__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/gender/gender.page */ "O+xm");
/* harmony import */ var _pages_home_home_page__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/home/home.page */ "5YDh");
/* harmony import */ var _pages_home_home_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/home/home.service */ "ixgN");
/* harmony import */ var _pages_home_home_view_model__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/home/home.view-model */ "TR9s");
/* harmony import */ var _pages_its_serious_its_serious_page__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/its-serious/its-serious.page */ "OnDc");
/* harmony import */ var _pages_know_us_better_engine_know_us_better_engine_page__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/know-us-better-engine/know-us-better-engine.page */ "ljt7");
/* harmony import */ var _pages_life_ensurance_life_ensurance_page__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/life-ensurance/life-ensurance.page */ "M22z");
/* harmony import */ var _pages_loan_info_loan_info_page__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/loan-info/loan-info.page */ "p20M");
/* harmony import */ var _pages_payment_detail_payment_detail_page__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/payment-detail/payment-detail.page */ "85bt");
/* harmony import */ var _pages_reschedule_home_reschedule_home_page__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/reschedule-home/reschedule-home.page */ "4Qcv");
/* harmony import */ var _pages_reschedule_info_reschedule_info_page__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pages/reschedule-info/reschedule-info.page */ "W0VE");
/* harmony import */ var _pages_reschedule_payment_reschedule_payment_page__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./pages/reschedule-payment/reschedule-payment.page */ "Ho00");
/* harmony import */ var _pages_terms_and_conditions_terms_and_conditions_page__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pages/terms-and-conditions/terms-and-conditions.page */ "YTzw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/core */ "fXoL");






































var LifeguardModule = /** @class */ (function () {
    function LifeguardModule() {
    }
    LifeguardModule.ɵfac = function LifeguardModule_Factory(t) { return new (t || LifeguardModule)(); };
    LifeguardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdefineNgModule"]({ type: LifeguardModule });
    LifeguardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdefineInjector"]({ providers: [
            {
                provide: _nequi_features_commons__WEBPACK_IMPORTED_MODULE_4__["ModuleConfigProvider"],
                useValue: _config_lifeguard_config__WEBPACK_IMPORTED_MODULE_18__["LifeGuardConfig"],
            },
            _nequi_ui__WEBPACK_IMPORTED_MODULE_8__["ConfirmInfoBottomSheetService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["PercentPipe"],
            _services_customer_finacial_service__WEBPACK_IMPORTED_MODULE_17__["CustomerFinancialService"],
            _middlewares_lifeguard_middleware__WEBPACK_IMPORTED_MODULE_11__["LifeguardMiddleware"],
            _pages_home_home_view_model__WEBPACK_IMPORTED_MODULE_27__["HomeViewModel"],
            _pages_home_home_service__WEBPACK_IMPORTED_MODULE_26__["HomeService"],
            _organisms_approval_front_approval_front_view_model__WEBPACK_IMPORTED_MODULE_12__["ApprovalFrontViewModel"],
            _organisms_approval_front_services_approval_front_service__WEBPACK_IMPORTED_MODULE_13__["ApprovalFrontService"],
            _organisms_approval_front_services_occupation_engine_service__WEBPACK_IMPORTED_MODULE_14__["OccupationEngineService"],
            _organisms_approval_front_services_your_money_engine_service__WEBPACK_IMPORTED_MODULE_15__["YourMoneyEngineService"],
            _nequi_apps_base_mobile_config_features_commons_services_screenshot_sharing__WEBPACK_IMPORTED_MODULE_3__["ScreenshotSharingService"],
            _nequi_native_screenshot__WEBPACK_IMPORTED_MODULE_6__["ScreenshotPlugin"],
            _nequi_native_social_sharing__WEBPACK_IMPORTED_MODULE_7__["SocialSharingPlugin"],
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _lifeguard_routing_module__WEBPACK_IMPORTED_MODULE_19__["LifeguardRoutingModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"],
                _nequi_ui__WEBPACK_IMPORTED_MODULE_8__["NequiUiModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_10__["ComponentsModule"],
                _nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_5__["FeaturesMoneyManagementModule"],
                _organisms_credits_organism_module__WEBPACK_IMPORTED_MODULE_16__["CreditsOrganismModule"],
            ]] });
    return LifeguardModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵsetNgModuleScope"](LifeguardModule, { declarations: [_pages_home_home_page__WEBPACK_IMPORTED_MODULE_25__["HomePage"],
        _pages_its_serious_its_serious_page__WEBPACK_IMPORTED_MODULE_28__["ItsSeriousPage"],
        _organisms_preapproved_preapproved_organism__WEBPACK_IMPORTED_MODULE_22__["PreApprovedOrganism"],
        _pages_life_ensurance_life_ensurance_page__WEBPACK_IMPORTED_MODULE_30__["LifeEnsurancePage"],
        _pages_gender_gender_page__WEBPACK_IMPORTED_MODULE_24__["GenderPage"],
        _pages_ensure_loan_ensure_loan_page__WEBPACK_IMPORTED_MODULE_23__["EnsureLoanPage"],
        _pages_loan_info_loan_info_page__WEBPACK_IMPORTED_MODULE_31__["LoanInfoPage"],
        _pages_terms_and_conditions_terms_and_conditions_page__WEBPACK_IMPORTED_MODULE_36__["TermsAndConditionsPage"],
        _organisms_payment_payment_organism__WEBPACK_IMPORTED_MODULE_21__["PaymentOrganism"],
        _pages_payment_detail_payment_detail_page__WEBPACK_IMPORTED_MODULE_32__["PaymentDetailPage"],
        _organisms_credit_detail_credit_detail_organism__WEBPACK_IMPORTED_MODULE_20__["CreditDetailOrganism"],
        _pages_reschedule_home_reschedule_home_page__WEBPACK_IMPORTED_MODULE_33__["RescheduleHomePage"],
        _pages_reschedule_info_reschedule_info_page__WEBPACK_IMPORTED_MODULE_34__["RescheduleInfoPage"],
        _pages_reschedule_payment_reschedule_payment_page__WEBPACK_IMPORTED_MODULE_35__["ReschedulePaymentPage"],
        _pages_know_us_better_engine_know_us_better_engine_page__WEBPACK_IMPORTED_MODULE_29__["KnowUsBetterEnginePage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
        _lifeguard_routing_module__WEBPACK_IMPORTED_MODULE_19__["LifeguardRoutingModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"],
        _nequi_ui__WEBPACK_IMPORTED_MODULE_8__["NequiUiModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_10__["ComponentsModule"],
        _nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_5__["FeaturesMoneyManagementModule"],
        _organisms_credits_organism_module__WEBPACK_IMPORTED_MODULE_16__["CreditsOrganismModule"]] }); })();


/***/ }),

/***/ "BUs5":
/*!*********************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard/organisms/credit-detail/credit-detail.organism.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: CreditDetailOrganism */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditDetailOrganism", function() { return CreditDetailOrganism; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ui_src_lib_directives_nequi_currency_style_nequi_currency_style_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../ui/src/lib/directives/nequi-currency-style/nequi-currency-style.directive */ "kVXI");
/* harmony import */ var _ui_src_lib_components_view_detail_view_detail_item_view_detail_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../ui/src/lib/components/view-detail/view-detail-item/view-detail-item.component */ "W1wR");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ui_src_lib_pipes_nequi_date_nequi_date_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../ui/src/lib/pipes/nequi-date/nequi-date.pipe */ "Rt7k");







function CreditDetailOrganism_ion_chip_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-chip", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", ctx_r0.organismId, "_nequi_label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "lifeguard.home.credit.out-to-date"), " ");
} }
var CreditDetailOrganism = /** @class */ (function () {
    function CreditDetailOrganism() {
        this.isExpired = false;
        this.showTextAsAlert = true;
        this.label = 'lifeguard.home.credit.payment-date';
    }
    CreditDetailOrganism.ɵfac = function CreditDetailOrganism_Factory(t) { return new (t || CreditDetailOrganism)(); };
    CreditDetailOrganism.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreditDetailOrganism, selectors: [["app-credit-detail-organism"]], inputs: { organismId: "organismId", isExpired: "isExpired", endAt: "endAt", balance: "balance", showTextAsAlert: "showTextAsAlert", label: "label" }, decls: 10, vars: 12, consts: [[1, "credit-detail__amount-container"], [1, "credit-detail__label-container"], [1, "credit-detail__label"], ["class", "card-option__chip", 4, "ngIf"], [1, "credit-detail__amount", 3, "nequiCurrencyStyle"], [3, "isAlert", "description", "label"], [1, "card-option__chip"], [3, "id"]], template: function CreditDetailOrganism_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-text", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CreditDetailOrganism_ion_chip_5_Template, 4, 4, "ion-chip", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ion-text", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-view-detail-item", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 6, "lifeguard.home.credit.amount"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpired);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nequiCurrencyStyle", ctx.balance);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isAlert", ctx.isExpired && ctx.showTextAsAlert)("description", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 8, ctx.endAt))("label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 10, ctx.label));
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonText"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ui_src_lib_directives_nequi_currency_style_nequi_currency_style_directive__WEBPACK_IMPORTED_MODULE_3__["NequiCurrencyStyleDirective"], _ui_src_lib_components_view_detail_view_detail_item_view_detail_item_component__WEBPACK_IMPORTED_MODULE_4__["ViewDetailItemComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonChip"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"], _ui_src_lib_pipes_nequi_date_nequi_date_pipe__WEBPACK_IMPORTED_MODULE_6__["NequiDatePipe"]], styles: [".credit-detail__amount-container[_ngcontent-%COMP%] {\n  margin-left: 14px;\n  margin-right: 14px;\n}\n.credit-detail__amount-container[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: bold;\n}\n.credit-detail__label-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.credit-detail__label[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-bottom: 8px;\n}\n.credit-detail__amount[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.credit-detail__form[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.credit-detail__checkbox[_ngcontent-%COMP%] {\n  --background-checked: var(--input-purple);\n  --checkmark-color: white;\n}\n.credit-detail__label-check[_ngcontent-%COMP%] {\n  color: var(--gray-70);\n  font-size: 16px;\n}\n.credit-detail__payall[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.card-option__chip[_ngcontent-%COMP%] {\n  --background: var(--guayaba-10);\n  --color: var(--guayaba);\n  padding: 0 10px;\n  height: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvY3JlZGl0LWRldGFpbC5vcmdhbmlzbS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQUFKO0FBQ0k7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUFDTjtBQUdFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFESjtBQUlFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBRko7QUFLRTtFQUNFLGVBQUE7QUFISjtBQU1FO0VBQ0UsZ0JBQUE7QUFKSjtBQU9FO0VBQ0UseUNBQUE7RUFDQSx3QkFBQTtBQUxKO0FBUUU7RUFDRSxxQkFBQTtFQUNBLGVBQUE7QUFOSjtBQVNFO0VBQ0UsZ0JBQUE7QUFQSjtBQVdBO0VBQ0UsK0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBUkYiLCJmaWxlIjoiY3JlZGl0LWRldGFpbC5vcmdhbmlzbS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNyZWRpdC1kZXRhaWwge1xuICAmX19hbW91bnQtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tbGVmdDogMTRweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE0cHg7XG4gICAgaW9uLXRleHQge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gIH1cblxuICAmX19sYWJlbC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuICAmX19sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgfVxuXG4gICZfX2Ftb3VudCB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG5cbiAgJl9fZm9ybSB7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgfVxuXG4gICZfX2NoZWNrYm94IHtcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0taW5wdXQtcHVycGxlKTtcbiAgICAtLWNoZWNrbWFyay1jb2xvcjogd2hpdGU7XG4gIH1cblxuICAmX19sYWJlbC1jaGVjayB7XG4gICAgY29sb3I6IHZhcigtLWdyYXktNzApO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuXG4gICZfX3BheWFsbCB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxufVxuXG4uY2FyZC1vcHRpb25fX2NoaXAge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWd1YXlhYmEtMTApO1xuICAtLWNvbG9yOiB2YXIoLS1ndWF5YWJhKTtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBoZWlnaHQ6IDI0cHg7XG59XG4iXX0= */"] });
    return CreditDetailOrganism;
}());



/***/ }),

/***/ "Ho00":
/*!***********************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard/pages/reschedule-payment/reschedule-payment.page.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: ReschedulePaymentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReschedulePaymentPage", function() { return ReschedulePaymentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_commons_exceptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/commons/exceptions */ "0sJq");
/* harmony import */ var _nequi_features_application_data_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/application-data/core */ "UgzZ");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/features/credits/core */ "42wy");
/* harmony import */ var _nequi_features_money_management_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nequi/features/money-management/core */ "Qxr/");
/* harmony import */ var _nequi_features_money_management_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nequi/features/money-management/data */ "9P2t");
/* harmony import */ var _nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nequi/features/money-management/presentation */ "JFCQ");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _reschedule_payment_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./reschedule-payment.config */ "3sOq");
/* harmony import */ var _reschedule_payment_view_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./reschedule-payment.view-model */ "aTbj");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../../../ui/src/lib/directives/animate-title-on-scroll/animate-title-on-scroll.directive */ "qbWi");
/* harmony import */ var _ui_src_lib_components_view_detail_view_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../../../ui/src/lib/components/view-detail/view-detail.component */ "yT3N");
/* harmony import */ var _money_management_src_presentation_controls_origin_money_control_origin_money_control_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../../../money-management/src/presentation/controls/origin-money-control/origin-money-control.component */ "O3Yd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");






























var ReschedulePaymentPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ReschedulePaymentPage, _super);
    function ReschedulePaymentPage(router, currencyPipe, datePipe, confirmBottomSheetService, moneyManagementInteractor, applicationDataInteractor, cardModalService, creditEventsHandler, moduleConfigProvider, injector) {
        var _this = _super.call(this, injector) || this;
        _this.router = router;
        _this.currencyPipe = currencyPipe;
        _this.datePipe = datePipe;
        _this.confirmBottomSheetService = confirmBottomSheetService;
        _this.moneyManagementInteractor = moneyManagementInteractor;
        _this.applicationDataInteractor = applicationDataInteractor;
        _this.cardModalService = cardModalService;
        _this.creditEventsHandler = creditEventsHandler;
        _this.moduleConfigProvider = moduleConfigProvider;
        _this.config = _reschedule_payment_config__WEBPACK_IMPORTED_MODULE_14__["ReschedulePaymentConfig"];
        _this.viewModel = new _reschedule_payment_view_model__WEBPACK_IMPORTED_MODULE_15__["ReschedulePaymentViewModel"]();
        _this.initI18n();
        _this.loadDetailItems();
        return _this;
    }
    ReschedulePaymentPage.prototype.ngOnInit = function () {
        var _a;
        this.viewModel.creditInfo = (_a = this.router.getCurrentNavigation().extras) === null || _a === void 0 ? void 0 : _a.state;
    };
    ReschedulePaymentPage.prototype.goBack = function () {
        this.navigatorProvider.back();
    };
    ReschedulePaymentPage.prototype.onPocketSelected = function (pocket) {
        this.viewModel.pocketControl.setValue(pocket);
        this.showConfirmationInfo();
    };
    ReschedulePaymentPage.prototype.showPockets = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 7]);
                        return [4 /*yield*/, this.loadingService.show()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.loadPockets()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.loadingService.hide(true)];
                    case 3:
                        _a.sent();
                        this.originMoneyControl.selectOriginMoney();
                        return [3 /*break*/, 7];
                    case 4:
                        error_1 = _a.sent();
                        return [4 /*yield*/, this.loadingService.hide(false)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.toastService.showError(error_1.message)];
                    case 6:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    ReschedulePaymentPage.prototype.onTransactionSuccess = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var error_2;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.applicationDataInteractor.save(this.moduleConfigProvider.applicationData.lifeguardRescheduleAlreadyStarted, false)];
                    case 1:
                        _a.sent();
                        this.creditEventsHandler.emitDisbursedEvent({
                            creditType: _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_8__["CreditType"].LIFEGUARD,
                            hasCredits: true,
                            isExpired: false,
                            isRescheduled: true,
                        });
                        this.showSuccessModal(this.i18n.cardModal.raiseAnchor);
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        this.toastService.showError(error_2.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ReschedulePaymentPage.prototype.onTransactionFailed = function (error) {
        if (error.constructor === _nequi_commons_exceptions__WEBPACK_IMPORTED_MODULE_4__["ExceedCeilingException"]) {
            throw error;
        }
        if (error instanceof _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_8__["LoanExtensionTimeoutFailException"]) {
            this.showExceptionModal(this.i18n.cardModal.manDrift);
        }
        else {
            this.toastService.showError(error.message);
        }
    };
    ReschedulePaymentPage.prototype.showSuccessModal = function (modal) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var newLimitDateFormatted;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newLimitDateFormatted = this.datePipe.transform(this.viewModel.creditInfo.newLoan.endAt);
                        return [4 /*yield*/, this.cardModalService.show({
                                title: modal.title,
                                imgPath: modal.image,
                                content: this.translateProvider.get(this.config.i18n.raiseAnchorContent, {
                                    newLimitDate: newLimitDateFormatted,
                                }),
                                buttons: [
                                    {
                                        text: modal.readyButton,
                                        handler: function () { return _this.navigatorProvider.navigateRoot(_this.config.routes.dashboard); },
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
    ReschedulePaymentPage.prototype.showExceptionModal = function (modal) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cardModalService.show({
                            title: modal.title,
                            imgPath: modal.image,
                            content: modal.content,
                            buttons: [
                                {
                                    text: modal.readyButton,
                                    handler: function () { return _this.navigatorProvider.navigateRoot(_this.config.routes.dashboard); },
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
    ReschedulePaymentPage.prototype.loadPockets = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var pockets;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.moneyManagementInteractor.getPocketsForTransaction()];
                    case 1:
                        pockets = _a.sent();
                        this.viewModel.pocketList = new _nequi_features_money_management_data__WEBPACK_IMPORTED_MODULE_10__["PocketMapper"]().fromList(pockets);
                        return [2 /*return*/];
                }
            });
        });
    };
    ReschedulePaymentPage.prototype.showConfirmationInfo = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.confirmBottomSheetService.show({
                            title: this.i18n.confirmation.title,
                            subtitle: this.i18n.confirmation.subtitle,
                            items: this.viewModel.buildItems(this.i18n.confirmation, this.currencyPipe, this.datePipe),
                            confirmLabel: this.i18n.confirmation.button,
                        })];
                    case 1:
                        data = (_a.sent()).data;
                        if (data === true) {
                            this.makePayment();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ReschedulePaymentPage.prototype.makePayment = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data, transaction;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                data = {
                    operatorType: _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_8__["OperationCreditType"].PAYMENT,
                    productId: _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_8__["CreditType"].LIFEGUARD,
                    debenture: this.viewModel.creditInfo.loanAccount,
                    paymentType: _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_8__["PaymentType"].LOAN_RESCHEDULE,
                    rescheduleType: _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_8__["RescheduleType"].INSTALLMENTS_NUMBER,
                };
                transaction = new _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_8__["PaymentTransaction"]()
                    .withData(data)
                    .withAmount(this.viewModel.creditInfo.totalOtherValues)
                    .withPocket(this.viewModel.pocketControl.value);
                _super.prototype.executeTransaction.call(this, transaction);
                return [2 /*return*/];
            });
        });
    };
    ReschedulePaymentPage.prototype.initI18n = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var result;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                result = this.translateProvider.get(this.config.i18n.content);
                this.i18n = Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_13__["toCamelCaseProperties"])(result);
                return [2 /*return*/];
            });
        });
    };
    ReschedulePaymentPage.prototype.loadDetailItems = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var items;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                items = this.translateProvider.get(this.config.i18n.detailItems);
                this.detailItems = [
                    {
                        label: items.currentInterests.label,
                        description: this.currencyPipe.transform(this.viewModel.creditInfo.normalInterest),
                        helpMessage: items.currentInterests.help,
                    },
                    {
                        label: items.penaltyInterest.label,
                        description: this.currencyPipe.transform(this.viewModel.creditInfo.penaltyInterest),
                        helpMessage: items.penaltyInterest.help,
                    },
                    {
                        label: items.lifeInsurance.label,
                        description: this.currencyPipe.transform(this.viewModel.creditInfo.feesOutstanding),
                        helpMessage: items.lifeInsurance.help,
                    },
                    {
                        label: items.total,
                        description: this.currencyPipe.transform(this.viewModel.creditInfo.totalOtherValues),
                    },
                ];
                return [2 /*return*/];
            });
        });
    };
    ReschedulePaymentPage.ɵfac = function ReschedulePaymentPage_Factory(t) { return new (t || ReschedulePaymentPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_12__["ConfirmInfoBottomSheetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_money_management_core__WEBPACK_IMPORTED_MODULE_9__["MoneyManagementInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_application_data_core__WEBPACK_IMPORTED_MODULE_5__["ApplicationDataInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_12__["CardModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_8__["CreditEventsHandler"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_6__["ModuleConfigProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"])); };
    ReschedulePaymentPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ReschedulePaymentPage, selectors: [["app-reschedule-payment"]], viewQuery: function ReschedulePaymentPage_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_11__["OriginMoneyControlComponent"], 1);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.originMoneyControl = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 22, vars: 17, consts: [[1, "nequi-header"], ["slot", "start"], ["id", "reschedule-payment_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], [1, "nequi-header__title", "ion-text-start"], ["fullscreen", "true", "scrollEvents", "true", "appAnimateTitleOnScroll", "", 1, "ion-content--white", "ion-padding-horizontal"], [1, "nequi-title"], ["id", "reschedule-payment_detail_text", 1, "view-detail"], [3, "details"], [3, "hidden", "pockets", "formControl", "minAmount", "pocketSelected"], [1, "nequi-footer", "ion-no-border"], ["id", "reschedule-payment_ready_button", "expand", "block", "color", "guayaba", 1, "nequi-footer__button", 3, "click"]], template: function ReschedulePaymentPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReschedulePaymentPage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-title", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-content", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "app-view-detail", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "nequi-origin-money-control", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("pocketSelected", function ReschedulePaymentPage_Template_nequi_origin_money_control_pocketSelected_16_listener($event) { return ctx.onPocketSelected($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "ion-footer", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "ion-button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReschedulePaymentPage_Template_ion_button_click_19_listener() { return ctx.showPockets(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 9, ctx.config.i18n.title), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 11, ctx.config.i18n.title), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 13, ctx.config.i18n.paymentDescription), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("details", ctx.detailItems);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", true)("pockets", ctx.viewModel.pocketList)("formControl", ctx.viewModel.pocketControl)("minAmount", ctx.viewModel.creditInfo.totalOtherValues);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](21, 15, ctx.config.i18n.nextButton), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonContent"], _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_17__["AnimateTitleOnScrollDirective"], _ui_src_lib_components_view_detail_view_detail_component__WEBPACK_IMPORTED_MODULE_18__["ViewDetailComponent"], _money_management_src_presentation_controls_origin_money_control_origin_money_control_component__WEBPACK_IMPORTED_MODULE_19__["OriginMoneyControlComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormControlDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonFooter"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__["TranslatePipe"]], styles: [".view-detail[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 500;\n  color: var(--gray-alert-message);\n  margin: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvcmVzY2hlZHVsZS1wYXltZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtBQUNGIiwiZmlsZSI6InJlc2NoZWR1bGUtcGF5bWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlldy1kZXRhaWwge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS1ncmF5LWFsZXJ0LW1lc3NhZ2UpO1xuICBtYXJnaW46IDhweDtcbn1cbiJdfQ== */"] });
    return ReschedulePaymentPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_7__["TransactionBasePage"]));



/***/ }),

/***/ "Kq5B":
/*!***********************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard/pages/loan-info/loan-info.view-model.ts ***!
  \***********************************************************************************************************/
/*! exports provided: LoanInfoViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanInfoViewModel", function() { return LoanInfoViewModel; });
var LoanInfoViewModel = /** @class */ (function () {
    function LoanInfoViewModel() {
    }
    return LoanInfoViewModel;
}());



/***/ }),

/***/ "M22z":
/*!***************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard/pages/life-ensurance/life-ensurance.page.ts ***!
  \***************************************************************************************************************/
/*! exports provided: LifeEnsurancePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifeEnsurancePage", function() { return LifeEnsurancePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _services_credit_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/credit-logger.service */ "2ibl");
/* harmony import */ var _services_customer_finacial_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/customer-finacial.service */ "uuzL");
/* harmony import */ var _life_ensurance_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./life-ensurance.config */ "lg92");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ui_src_lib_components_item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../../ui/src/lib/components/item-detail/item-detail.component */ "Ycc7");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");

















var LifeEnsurancePage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LifeEnsurancePage, _super);
    function LifeEnsurancePage(injector, route, userInfoProvider, customerFinancialService, creditLoggerService) {
        var _this = _super.call(this, injector) || this;
        _this.route = route;
        _this.userInfoProvider = userInfoProvider;
        _this.customerFinancialService = customerFinancialService;
        _this.creditLoggerService = creditLoggerService;
        _this.config = _life_ensurance_config__WEBPACK_IMPORTED_MODULE_8__["PaymentGuaranteesConfig"];
        return _this;
    }
    LifeEnsurancePage.prototype.goToLifeInsurance = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var gender, route;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.setLog(this.config.i18n.logs);
                gender = this.userInfoProvider.getGender();
                route = gender ? this.config.goTo.loan : this.config.goTo.gender;
                if (gender) {
                    this.customerFinancialService.updateCreditUser(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.customerFinancialService.creditUserInfo), { gender: gender }));
                }
                this.navigatorProvider.navigateForward(route, {
                    relativeTo: this.route,
                });
                return [2 /*return*/];
            });
        });
    };
    LifeEnsurancePage.prototype.setLog = function (messages) {
        this.creditLoggerService.save({ flowType: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__["FlowType"].PROPELLER, i18nKey: messages });
    };
    LifeEnsurancePage.ɵfac = function LifeEnsurancePage_Factory(t) { return new (t || LifeEnsurancePage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_5__["UserInfoProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_customer_finacial_service__WEBPACK_IMPORTED_MODULE_7__["CustomerFinancialService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_credit_logger_service__WEBPACK_IMPORTED_MODULE_6__["CreditLoggerService"])); };
    LifeEnsurancePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LifeEnsurancePage, selectors: [["app-credits-life-ensure"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 18, vars: 14, consts: [[1, "nequi-header"], ["slot", "start"], ["id", "life-ensurance_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], ["fullscreen", "true", 1, "ion-content--white", "ion-padding-horizontal"], [1, "nequi-title"], [1, "margin-top-16"], [3, "line", "icon", "title", "description"], [1, "nequi-footer", "ion-no-border"], ["id", "life-ensurance__ready_button", "expand", "block", "color", "guayaba", 1, "nequi-footer__button", 3, "click"]], template: function LifeEnsurancePage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LifeEnsurancePage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-list", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "app-item-detail", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-footer", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LifeEnsurancePage_Template_ion_button_click_15_listener() { return ctx.goToLifeInsurance(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 6, ctx.config.i18n.title));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("line", false)("icon", ctx.config.i18n.content.icon)("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 8, ctx.config.i18n.content.title))("description", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 10, ctx.config.i18n.content.text));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 12, ctx.config.i18n.readyButton), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonList"], _ui_src_lib_components_item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_10__["ItemDetailComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonFooter"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"]], styles: [".credits-propeller__note[_ngcontent-%COMP%] {\n  color: var(--gray-70);\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 17px;\n}\n.credits-propeller__item[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  border-bottom: 1px solid var(--divisor-line);\n  padding: 8px 0px 16px 0px;\n}\n.credits-propeller__item[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0px;\n}\n.credits-propeller__item-img[_ngcontent-%COMP%] {\n  display: inline;\n}\n.credits-propeller__item-img[_ngcontent-%COMP%]::part(image) {\n  width: 32px;\n  height: 32px;\n  display: inline;\n  margin-right: 8px;\n}\n.credits-propeller__item-title[_ngcontent-%COMP%] {\n  color: var(--medianoche);\n  font-style: normal;\n  font-weight: 500;\n  font-size: 17px;\n  line-height: 22px;\n  display: inline;\n  position: relative;\n  top: -10px;\n}\n.credits-propeller__item-description[_ngcontent-%COMP%] {\n  color: var(--gray-70);\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 17px;\n  text-overflow: unset;\n  white-space: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvbGlmZS1lbnN1cmFuY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQUo7QUFHRTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0Q0FBQTtFQUNBLHlCQUFBO0FBREo7QUFHSTtFQUNFLGtCQUFBO0FBRE47QUFJSTtFQUNFLGVBQUE7QUFGTjtBQUlNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFGUjtBQU1JO0VBQ0Usd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUpOO0FBT0k7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBTE4iLCJmaWxlIjoibGlmZS1lbnN1cmFuY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNyZWRpdHMtcHJvcGVsbGVyIHtcbiAgJl9fbm90ZSB7XG4gICAgY29sb3I6IHZhcigtLWdyYXktNzApO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgfVxuXG4gICZfX2l0ZW0ge1xuICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kaXZpc29yLWxpbmUpO1xuICAgIHBhZGRpbmc6IDhweCAwcHggMTZweCAwcHg7XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMHB4O1xuICAgIH1cblxuICAgICYtaW1nIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZTtcblxuICAgICAgJjo6cGFydChpbWFnZSkge1xuICAgICAgICB3aWR0aDogMzJweDtcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgICYtdGl0bGUge1xuICAgICAgY29sb3I6IHZhcigtLW1lZGlhbm9jaGUpO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgdG9wOiAtMTBweDtcbiAgICB9XG5cbiAgICAmLWRlc2NyaXB0aW9uIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1ncmF5LTcwKTtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IHVuc2V0O1xuICAgICAgd2hpdGUtc3BhY2U6IHVuc2V0O1xuICAgIH1cbiAgfVxufVxuIl19 */"] });
    return LifeEnsurancePage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_4__["FeatureBasePage"]));



/***/ }),

/***/ "NBrM":
/*!*********************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard/pages/ensure-loan/ensure-loan.page.ts ***!
  \*********************************************************************************************************/
/*! exports provided: EnsureLoanPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnsureLoanPage", function() { return EnsureLoanPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/features/credits/core */ "42wy");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _nequi_utils_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nequi/utils/string */ "p6rB");
/* harmony import */ var _services_credit_info_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../services/credit-info.model */ "9FmH");
/* harmony import */ var _services_credit_logger_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../services/credit-logger.service */ "2ibl");
/* harmony import */ var _ensure_loan_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ensure-loan.config */ "q70c");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ui_src_lib_components_card_option_chip_card_option_chip_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../../../ui/src/lib/components/card-option-chip/card-option-chip.component */ "V69X");
/* harmony import */ var _ui_src_lib_components_busy_indicator_busy_indicator_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../../../ui/src/lib/components/busy-indicator/busy-indicator.component */ "N6nj");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");


























function EnsureLoanPage_ng_container_9_ion_footer_12_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-footer", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EnsureLoanPage_ng_container_9_ion_footer_12_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r4.showMoreInfo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 1, ctx_r3.config.i18n.ensureLoan.moreInfoButton), " ");
} }
function EnsureLoanPage_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "nequi-card-option-chip", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EnsureLoanPage_ng_container_9_Template_nequi_card_option_chip_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.goToLoanInfo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "nequi-card-option-chip", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EnsureLoanPage_ng_container_9_Template_nequi_card_option_chip_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.showHaveAnotherInsurance(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, EnsureLoanPage_ng_container_9_ion_footer_12_Template, 5, 3, "ion-footer", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx_r0.ensureLoanWithNequiTitle)("description", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 13, ctx_r0.config.i18n.ensureLoan.ensureLoanWithNequi.description))("showDetail", true)("chipIcon", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 15, ctx_r0.config.i18n.ensureLoan.ensureLoanWithNequi.tagImg))("chipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 17, ctx_r0.config.i18n.ensureLoan.ensureLoanWithNequi.tagLabel))("chipColor", ctx_r0.colorCard.GREEN);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 19, ctx_r0.config.i18n.ensureLoan.ensureLoanWithAnother.title))("description", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 21, ctx_r0.config.i18n.ensureLoan.ensureLoanWithAnother.description))("showDetail", false)("chipIcon", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 23, ctx_r0.config.i18n.ensureLoan.ensureLoanWithAnother.tagImg))("chipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 25, ctx_r0.config.i18n.ensureLoan.ensureLoanWithAnother.tagLabel))("chipColor", ctx_r0.colorCard.RED);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.isLoading && !ctx_r0.errorMessage);
} }
function EnsureLoanPage_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-busy-indicator", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onReload", function EnsureLoanPage_ng_template_10_Template_app_busy_indicator_onReload_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.loadData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showReload", !!ctx_r2.errorMessage)("reloadMessage", ctx_r2.errorMessage);
} }
var EnsureLoanPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EnsureLoanPage, _super);
    function EnsureLoanPage(injector, translateProvider, infoListBottomSheetService, route, currencyPipe, creditLoggerService, creditInfoModel, creditInteractor) {
        var _this = _super.call(this, injector) || this;
        _this.translateProvider = translateProvider;
        _this.infoListBottomSheetService = infoListBottomSheetService;
        _this.route = route;
        _this.currencyPipe = currencyPipe;
        _this.creditLoggerService = creditLoggerService;
        _this.creditInfoModel = creditInfoModel;
        _this.creditInteractor = creditInteractor;
        _this.config = _ensure_loan_config__WEBPACK_IMPORTED_MODULE_13__["EnsureLoanConfig"];
        _this.colorCard = _nequi_ui__WEBPACK_IMPORTED_MODULE_8__["ChipColor"];
        _this.isLoading = false;
        _this.errorMessage = null;
        return _this;
    }
    EnsureLoanPage.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadData()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EnsureLoanPage.prototype.goToLoanInfo = function () {
        this.navigatorProvider.navigateForward(this.config.goTo.loanInfo, {
            relativeTo: this.route,
        });
    };
    EnsureLoanPage.prototype.showMoreInfo = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var insuranceWithNequi, itemListBottomSheet, buttons;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                insuranceWithNequi = this.bottomSheetI18n.insuranceWithNequi;
                itemListBottomSheet = Object.values(insuranceWithNequi.itemList);
                buttons = [
                    {
                        id: this.config.idSelectors.continueButtonId,
                        label: insuranceWithNequi.footer.continueWithNequiButton,
                        color: _nequi_ui__WEBPACK_IMPORTED_MODULE_8__["ButtonColor"].GUAYABA,
                        action: function () {
                            _this.infoListBottomSheetService.hide();
                            _this.goToLoanInfo();
                        },
                    },
                ];
                this.infoListBottomSheetService.show({
                    title: insuranceWithNequi.header.title,
                    items: itemListBottomSheet,
                    buttons: buttons,
                    theme: _nequi_ui__WEBPACK_IMPORTED_MODULE_8__["Theme"].LIGHT,
                });
                return [2 /*return*/];
            });
        });
    };
    EnsureLoanPage.prototype.showHaveAnotherInsurance = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var haveAnotherInsurance, itemListBottomSheet, buttons;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                haveAnotherInsurance = this.bottomSheetI18n.haveAnotherInsurance;
                itemListBottomSheet = Object.values(haveAnotherInsurance.itemList);
                buttons = [
                    {
                        id: this.config.idSelectors.chooseButtonId,
                        label: haveAnotherInsurance.footer.chooseTheOneFromNequiButton,
                        color: _nequi_ui__WEBPACK_IMPORTED_MODULE_8__["ButtonColor"].GUAYABA,
                        action: function () {
                            _this.infoListBottomSheetService.hide();
                            _this.goToLoanInfo();
                        },
                    },
                ];
                this.infoListBottomSheetService.show({
                    title: haveAnotherInsurance.header.title,
                    items: itemListBottomSheet,
                    buttons: buttons,
                    theme: _nequi_ui__WEBPACK_IMPORTED_MODULE_8__["Theme"].LIGHT,
                });
                return [2 /*return*/];
            });
        });
    };
    EnsureLoanPage.prototype.loadData = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var loanPortfolio, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.isLoading = true;
                        this.errorMessage = null;
                        return [4 /*yield*/, this.creditInteractor.getLoanPortfolio({
                                creditType: _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__["CreditType"].LIFEGUARD,
                                amount: this.creditInfoModel.creditFeatureInfo.loanAmount,
                            })];
                    case 1:
                        loanPortfolio = _a.sent();
                        this.creditInfoModel.loanPortfolioInfo = loanPortfolio;
                        this.initItemList();
                        this.isLoading = false;
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        this.isLoading = false;
                        this.errorMessage = error_1.message;
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    EnsureLoanPage.prototype.initItemList = function () {
        var i18n = this.translateProvider.get(this.config.i18n.ensureLoan.content);
        var i18nFormatted = Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_9__["toCamelCaseProperties"])(i18n);
        this.setLog(this.config.i18n.logs);
        this.bottomSheetI18n = i18nFormatted.bottomSheet;
        var itemList = this.bottomSheetI18n.insuranceWithNequi.itemList;
        var monthlyInsuranceFormatted = this.currencyPipe.transform(this.creditInfoModel.loanPortfolioInfo.monthlyInsuranceAmount);
        itemList.whatItCostsYou.description = Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_10__["createFormat"])(itemList.whatItCostsYou.description, [
            monthlyInsuranceFormatted,
        ]);
        itemList.whoIsMyInsuranceWith.description = Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_10__["createFormat"])(itemList.whoIsMyInsuranceWith.description, [_ensure_loan_config__WEBPACK_IMPORTED_MODULE_13__["EnsureLoanConfig"].insuranceCarrier]);
        this.ensureLoanWithNequiTitle = Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_10__["createFormat"])(i18nFormatted.ensureLoanWithNequi.title, [
            monthlyInsuranceFormatted,
        ]);
        this.bottomSheetI18n.insuranceWithNequi.itemList = itemList;
    };
    EnsureLoanPage.prototype.setLog = function (messages) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.creditLoggerService.save({ flowType: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["FlowType"].LIFEGUARD, i18nKey: messages });
                return [2 /*return*/];
            });
        });
    };
    EnsureLoanPage.ɵfac = function EnsureLoanPage_Factory(t) { return new (t || EnsureLoanPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_6__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_8__["InfoListBottomSheetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_credit_logger_service__WEBPACK_IMPORTED_MODULE_12__["CreditLoggerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_credit_info_model__WEBPACK_IMPORTED_MODULE_11__["CreditInfoModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__["CreditInteractor"])); };
    EnsureLoanPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EnsureLoanPage, selectors: [["app-ensure-loan-credits"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 12, vars: 5, consts: [[1, "nequi-header"], ["slot", "start"], ["id", "ensure-loan_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], ["fullscreen", "true", 1, "ion-content--white", "ion-padding-horizontal"], [1, "nequi-title"], [4, "ngIf", "ngIfElse"], ["busyIndicator", ""], [1, "card-item"], [3, "title", "description", "showDetail", "chipIcon", "chipTitle", "chipColor", "click"], ["class", "nequi-footer", 4, "ngIf"], [1, "nequi-footer"], [1, "ion-text-center"], ["id", "ensure-loan_footer_link", 1, "nequi-footer__link", 3, "click"], [3, "showReload", "reloadMessage", "onReload"]], template: function EnsureLoanPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EnsureLoanPage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-content", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-text", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, EnsureLoanPage_ng_container_9_Template, 13, 27, "ng-container", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, EnsureLoanPage_ng_template_10_Template, 1, 2, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 3, ctx.config.i18n.ensureLoan.headerTitle), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLoading && !ctx.errorMessage)("ngIfElse", _r1);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonText"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ui_src_lib_components_card_option_chip_card_option_chip_component__WEBPACK_IMPORTED_MODULE_15__["CardOptionChipComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonFooter"], _ui_src_lib_components_busy_indicator_busy_indicator_component__WEBPACK_IMPORTED_MODULE_16__["BusyIndicatorComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslatePipe"]], styles: [".card-item[_ngcontent-%COMP%] {\n  margin: 16px 4px 0px 4px;\n}\n\n.nequi-footer[_ngcontent-%COMP%] {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvZW5zdXJlLWxvYW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJlbnN1cmUtbG9hbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1pdGVtIHtcbiAgbWFyZ2luOiAxNnB4IDRweCAwcHggNHB4O1xufVxuXG4ubmVxdWktZm9vdGVyIHtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4iXX0= */"] });
    return EnsureLoanPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__["FeatureBasePage"]));



/***/ }),

/***/ "O+xm":
/*!***********************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard/pages/gender/gender.page.ts ***!
  \***********************************************************************************************/
/*! exports provided: GenderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenderPage", function() { return GenderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _services_customer_finacial_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/customer-finacial.service */ "uuzL");
/* harmony import */ var _gender_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gender.config */ "7lGe");
/* harmony import */ var _gender_view_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gender.view-model */ "8Lu4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");














var GenderPage = /** @class */ (function () {
    function GenderPage(navigatorProvider, route, customerFinancialService) {
        this.navigatorProvider = navigatorProvider;
        this.route = route;
        this.customerFinancialService = customerFinancialService;
        this.config = _gender_config__WEBPACK_IMPORTED_MODULE_5__["LifeInsuranceConfig"];
        this.gender = _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_2__["Gender"];
        this.viewModel = new _gender_view_model__WEBPACK_IMPORTED_MODULE_6__["LifeInsuranceViewModel"]();
    }
    GenderPage.prototype.ngOnInit = function () {
        this.initPage();
    };
    GenderPage.prototype.goBack = function () {
        this.navigatorProvider.back();
    };
    GenderPage.prototype.goToEnsureLoan = function () {
        this.customerFinancialService.updateCreditUser(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.customerFinancialService.creditUserInfo), { gender: this.viewModel.gender.value }));
        this.navigatorProvider.navigateForward(this.config.goTo.ensureLoan, {
            relativeTo: this.route,
        });
    };
    GenderPage.prototype.initPage = function () {
        this.viewModel.initForm();
    };
    GenderPage.ɵfac = function GenderPage_Factory(t) { return new (t || GenderPage)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_3__["NavigatorProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_customer_finacial_service__WEBPACK_IMPORTED_MODULE_4__["CustomerFinancialService"])); };
    GenderPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: GenderPage, selectors: [["app-gender-credits"]], decls: 35, vars: 25, consts: [[1, "nequi-header"], ["slot", "start"], ["id", "gender_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], ["fullscreen", "true", 1, "ion-content--white", "ion-padding-horizontal"], [3, "formGroup"], [1, "nequi-title"], ["lines", "none", 1, "description-item"], [1, "description-item__text"], ["formControlName", "gender"], ["lines", "none", 1, "radio-button"], ["id", "gender_female_img", 1, "radio-button__icon", 3, "src"], [1, "radio-button__label"], [1, "radio-button__radio", 3, "value"], ["id", "gender_male_img", 1, "radio-button__icon", 3, "src"], [1, "nequi-footer", "ion-no-border"], ["id", "gender_ready_button", "expand", "block", "color", "guayaba", 1, "nequi-footer__button", 3, "disabled", "click"]], template: function GenderPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function GenderPage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "ion-content", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "form", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "ion-text", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "ion-item", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "ion-text", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "ion-list");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "ion-radio-group", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "ion-item", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "img", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](18, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "ion-label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](21, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "ion-radio", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "ion-item", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "img", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](25, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "ion-label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](28, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](29, "ion-radio", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "ion-footer", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "ion-button", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function GenderPage_Template_ion_button_click_32_listener() { return ctx.goToEnsureLoan(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](34, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.viewModel.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](9, 11, ctx.config.i18n.headerTitle), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](13, 13, ctx.config.i18n.headerDescription), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](18, 15, ctx.config.i18n.genderOptions.female.image), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](21, 17, ctx.config.i18n.genderOptions.female.label), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx.gender.FEMALE);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](25, 19, ctx.config.i18n.genderOptions.male.image), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](28, 21, ctx.config.i18n.genderOptions.male.label), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx.gender.MALE);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.viewModel.form.valid);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](34, 23, ctx.config.i18n.readyButton), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonRadioGroup"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControlName"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonRadio"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["RadioValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonFooter"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"]], styles: [".description-item[_ngcontent-%COMP%]::part(native) {\n  --padding-start: 0px;\n}\n.description-item__text[_ngcontent-%COMP%] {\n  color: var(--gray-70);\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 17px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvZ2VuZGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLG9CQUFBO0FBQUo7QUFHRTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBREoiLCJmaWxlIjoiZ2VuZGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXNjcmlwdGlvbi1pdGVtIHtcbiAgJjo6cGFydChuYXRpdmUpIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgfVxuXG4gICZfX3RleHQge1xuICAgIGNvbG9yOiB2YXIoLS1ncmF5LTcwKTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxufVxuIl19 */"] });
    return GenderPage;
}());



/***/ }),

/***/ "OfUe":
/*!*******************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard/organisms/payment/payment.config.ts ***!
  \*******************************************************************************************************/
/*! exports provided: CreditDetailConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditDetailConfig", function() { return CreditDetailConfig; });
var CreditDetailConfig = Object.freeze({
    title: 'lifeguard.home.credit.header.title',
    amountLabel: 'lifeguard.home.credit.amount',
    paymentLabel: 'lifeguard.home.credit.payment-date',
    fieldLabel: 'lifeguard.home.credit.field-label',
    payAll: 'lifeguard.home.credit.pay-all',
    errors: {
        invalidAmount: 'lifeguard.home.credit.errors.no-valid-amount',
        higherAmount: 'lifeguard.home.credit.errors.higher-amount',
    },
    required: 'validators.general.required',
    informationIcon: '/assets/images/lifeguard/information-icon.svg',
    outToDate: 'lifeguard.home.credit.out-to-date',
    nextButton: 'lifeguard.home.credit.ready-button',
    routes: {
        paymentDetail: '/admin/credits/lifeguard/payment-detail',
    },
    pocketPlaceholder: 'lifeguard.home.credit.pocket.placeholder',
});


/***/ }),

/***/ "OnDc":
/*!*********************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard/pages/its-serious/its-serious.page.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ItsSeriousPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItsSeriousPage", function() { return ItsSeriousPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _its_serious_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./its-serious.config */ "4f0y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ui_src_lib_components_item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../../ui/src/lib/components/item-detail/item-detail.component */ "Ycc7");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");











function ItsSeriousPage_app_item_detail_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-item-detail", 9);
} if (rf & 2) {
    var item_r1 = ctx.$implicit;
    var last_r2 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", item_r1.image)("title", item_r1.title)("line", !last_r2)("description", item_r1.content);
} }
var ItsSeriousPage = /** @class */ (function () {
    function ItsSeriousPage(navigatorProvider, translateProvider, route) {
        this.navigatorProvider = navigatorProvider;
        this.translateProvider = translateProvider;
        this.route = route;
        this.config = _its_serious_config__WEBPACK_IMPORTED_MODULE_3__["ItsSeriousConfig"];
        this.itemList = [];
    }
    ItsSeriousPage.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.itemList = this.translateProvider.get(this.config.i18n.itemList);
                return [2 /*return*/];
            });
        });
    };
    ItsSeriousPage.prototype.goBack = function () {
        this.navigatorProvider.back();
    };
    ItsSeriousPage.prototype.goToTermsAndConditions = function () {
        this.navigatorProvider.navigateForward(this.config.routes.termsAndConditions, {
            relativeTo: this.route,
        });
    };
    ItsSeriousPage.ɵfac = function ItsSeriousPage_Factory(t) { return new (t || ItsSeriousPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_2__["NavigatorProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_2__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
    ItsSeriousPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ItsSeriousPage, selectors: [["app-credits-its-serious"]], decls: 15, vars: 7, consts: [[1, "nequi-header"], ["slot", "start"], ["id", "its-serious_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], ["fullscreen", "true", 1, "ion-content--white", "ion-padding-horizontal"], [1, "nequi-title"], [3, "icon", "title", "line", "description", 4, "ngFor", "ngForOf"], [1, "nequi-footer", "ion-no-border"], ["id", "its-serious_ready_button", "expand", "block", "color", "guayaba", 1, "nequi-footer__button", 3, "click"], [3, "icon", "title", "line", "description"]], template: function ItsSeriousPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ItsSeriousPage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ion-content", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, ItsSeriousPage_app_item_detail_9_Template, 1, 4, "app-item-detail", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "ion-footer", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "ion-button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ItsSeriousPage_Template_ion_button_click_12_listener() { return ctx.goToTermsAndConditions(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 3, ctx.config.i18n.title));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.itemList);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 5, ctx.config.i18n.acceptButton), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonFooter"], _ui_src_lib_components_item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_7__["ItemDetailComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpdHMtc2VyaW91cy5wYWdlLnNjc3MifQ== */"] });
    return ItsSeriousPage;
}());



/***/ }),

/***/ "P+Ai":
/*!************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/middlewares/lifeguard.middleware.ts ***!
  \************************************************************************************/
/*! exports provided: LifeguardMiddleware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifeguardMiddleware", function() { return LifeguardMiddleware; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/credits/core */ "42wy");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_date__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/utils/date */ "tGfC");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _organisms_approval_front_approval_front_view_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../organisms/approval-front/approval-front.view-model */ "pwQe");
/* harmony import */ var _products_lifeguard_pages_home_home_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../products/lifeguard/pages/home/home.config */ "mB9U");
/* harmony import */ var _products_lifeguard_pages_home_home_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../products/lifeguard/pages/home/home.service */ "ixgN");
/* harmony import */ var _products_lifeguard_pages_home_home_view_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../products/lifeguard/pages/home/home.view-model */ "TR9s");
/* harmony import */ var _services_credit_info_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/credit-info.model */ "9FmH");
/* harmony import */ var _services_credit_logger_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/credit-logger.service */ "2ibl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");



























var LifeguardMiddleware = /** @class */ (function () {
    function LifeguardMiddleware(creditInteractor, homeService, loadingService, translateProvider, homeViewModel, creditLoggerService, creditInfoModel, creditEventsHandler, fullscreenModalService, navigatorProvider, route, approvalFrontViewModel, moduleConfigProvider, alertService, analyticsInteractor) {
        this.creditInteractor = creditInteractor;
        this.homeService = homeService;
        this.loadingService = loadingService;
        this.translateProvider = translateProvider;
        this.homeViewModel = homeViewModel;
        this.creditLoggerService = creditLoggerService;
        this.creditInfoModel = creditInfoModel;
        this.creditEventsHandler = creditEventsHandler;
        this.fullscreenModalService = fullscreenModalService;
        this.navigatorProvider = navigatorProvider;
        this.route = route;
        this.approvalFrontViewModel = approvalFrontViewModel;
        this.moduleConfigProvider = moduleConfigProvider;
        this.alertService = alertService;
        this.analyticsInteractor = analyticsInteractor;
        this.config = _products_lifeguard_pages_home_home_config__WEBPACK_IMPORTED_MODULE_10__["LifeGuardConfig"];
    }
    LifeguardMiddleware.prototype.canActivate = function (_route, _state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.translateProvider.loadModule(this.moduleConfigProvider.i18n.moduleKey)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.translateProvider.loadModule(this.moduleConfigProvider.i18n.creditsModuleKey)];
                    case 2:
                        _a.sent();
                        if (!this.approvalFrontViewModel.info.isFromApproval) {
                            this.setExceptionFactory();
                            return [2 /*return*/, this.getCustomerCreditInfo()];
                        }
                        return [2 /*return*/, true];
                }
            });
        });
    };
    LifeguardMiddleware.prototype.getCustomerCreditInfo = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var lifeguard, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 7, , 9]);
                        return [4 /*yield*/, this.loadingService.show()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.creditInteractor.getLifeguard()];
                    case 2:
                        lifeguard = _a.sent();
                        return [4 /*yield*/, this.loadingService.hideWithoutFeedback()];
                    case 3:
                        _a.sent();
                        if (!lifeguard.credit) return [3 /*break*/, 6];
                        if (!(lifeguard.credit.status === _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["CreditStatus"].PAID)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.homeService.showPendingPaymentProcessModal()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, false];
                    case 5:
                        this.homeViewModel.credit = lifeguard.credit;
                        this.homeViewModel.credit.endAt.setMinutes(this.homeViewModel.credit.endAt.getMinutes() +
                            this.homeViewModel.credit.endAt.getTimezoneOffset());
                        return [2 /*return*/, true];
                    case 6: return [2 /*return*/, this.processPreapproved(lifeguard.preapproved)];
                    case 7:
                        error_1 = _a.sent();
                        return [4 /*yield*/, this.loadingService.hideWithoutFeedback()];
                    case 8:
                        _a.sent();
                        return [2 /*return*/, this.processErrors(error_1)];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    LifeguardMiddleware.prototype.processErrors = function (error) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.factoryException[error.code]) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.factoryException[error.code](error)];
                    case 1: return [2 /*return*/, (_a = !!(_b.sent())) !== null && _a !== void 0 ? _a : false];
                    case 2:
                        if (!(error.constructor === _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["UnavailabilityTimeException"])) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.showPromptAlertUnavailabilityTime(error)];
                    case 3:
                        _b.sent();
                        return [2 /*return*/];
                    case 4:
                        this.homeService.showDefaultAlert();
                        return [2 /*return*/, false];
                }
            });
        });
    };
    LifeguardMiddleware.prototype.processPreapproved = function (preapproved) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var result;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!preapproved) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.homeService.showCannotSaveYouCardModal()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                    case 2:
                        this.homeViewModel.preapproved = preapproved;
                        this.creditInfoModel.agreement = {
                            agreement: preapproved === null || preapproved === void 0 ? void 0 : preapproved.product.agreement,
                        };
                        return [4 /*yield*/, this.homeService.showPreapprovedWelcome()];
                    case 3:
                        result = _a.sent();
                        if (!(result && !this.homeViewModel.isWrongTime)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.setAnalyticsIntentionOfBegin()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.registerWelcomeLog()];
                    case 5:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 6: return [2 /*return*/, false];
                }
            });
        });
    };
    LifeguardMiddleware.prototype.processPersonalDataError = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        messages = this.translateProvider.get(_products_lifeguard_pages_home_home_config__WEBPACK_IMPORTED_MODULE_10__["LifeGuardConfig"].i18n.alert.wrongPersonalData);
                        return [4 /*yield*/, this.homeService.showTwoButtonsModal(messages, '')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LifeguardMiddleware.prototype.processPenaltyForTime = function (message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        messages = this.translateProvider.get(_products_lifeguard_pages_home_home_config__WEBPACK_IMPORTED_MODULE_10__["LifeGuardConfig"].i18n.alert.penaltyForTime);
                        messages.description = message;
                        return [4 /*yield*/, this.homeService.showTwoButtonsModal(messages, '')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LifeguardMiddleware.prototype.registerWelcomeLog = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.setLog(_products_lifeguard_pages_home_home_config__WEBPACK_IMPORTED_MODULE_10__["LifeGuardConfig"].i18n.logs);
                return [2 /*return*/];
            });
        });
    };
    LifeguardMiddleware.prototype.setLog = function (messages) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.creditLoggerService.save({ flowType: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["FlowType"].LIFEGUARD, i18nKey: messages });
                return [2 /*return*/];
            });
        });
    };
    LifeguardMiddleware.prototype.setExceptionFactory = function () {
        var _a;
        var _this = this;
        this.factoryException = (_a = {},
            _a[_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["ErrorCode"].USER_DONT_HAVE_PREAPPROVED] = function (error) {
                return _this.customerMustGoToEngine(error);
            },
            _a[_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["ErrorCode"].USER_DONT_HAVE_PREAPPROVED_CREDIT_REQUESTED] = function (error) {
                return _this.customerMustGoToEngine(error);
            },
            _a[_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["ErrorCode"].ISNT_POSSIBLE] = function (error) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.exceptionEmitDisbursedEvent(error)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); },
            _a[_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["ErrorCode"].USER_DONT_HAVE_CREDITS] = function (error) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.exceptionEmitDisbursedEvent(error)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); },
            _a[_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["ErrorCode"].PENALTY_FOR_TIME] = function (error) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.processPenaltyForTime(error.message)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); },
            _a[_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["ErrorCode"].WRONG_DOCUMENT_ID_EXPIRIAN] = function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.processPersonalDataError()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); },
            _a[_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["ErrorCode"].WRONG_DOCUMENT_TYPE_ID_EXPIRIAN] = function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.processPersonalDataError()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); },
            _a[_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["ErrorCode"].WRONG_LAST_NAME_EXPIRIAN] = function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.processPersonalDataError()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); },
            _a);
    };
    LifeguardMiddleware.prototype.showPromptAlertUnavailabilityTime = function (error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var i18n, messages;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                i18n = this.translateProvider.get(this.config.i18n.alert.unavailabilityTime.alertconfig);
                messages = {
                    header: i18n.title,
                    message: error.message,
                    buttons: {
                        accept: i18n.button,
                    },
                };
                this.alertService.show({
                    messages: messages,
                    handlers: {
                        accept: function () { return _this.navigatorProvider.navigateRoot(_this.config.routes.dashboard); },
                    },
                });
                return [2 /*return*/];
            });
        });
    };
    LifeguardMiddleware.prototype.customerMustGoToEngine = function (error) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var result;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        result = false;
                        if (!(error === null || error === void 0 ? void 0 : error.data)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.processPreapproved((_a = error.data) === null || _a === void 0 ? void 0 : _a.preapproved)];
                    case 1:
                        result = _b.sent();
                        _b.label = 2;
                    case 2: return [2 /*return*/, result ? this.showUserDontHavePreapprovalModal() : result];
                }
            });
        });
    };
    LifeguardMiddleware.prototype.exceptionEmitDisbursedEvent = function (error) {
        var _a, _b, _c, _d;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        this.creditEventsHandler.emitDisbursedEvent({
                            creditType: _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["CreditType"].LIFEGUARD,
                            hasCredits: ((_b = (_a = error.data) === null || _a === void 0 ? void 0 : _a.preapproved) === null || _b === void 0 ? void 0 : _b.length) > 0 || ((_d = (_c = error.data) === null || _c === void 0 ? void 0 : _c.product) === null || _d === void 0 ? void 0 : _d.length) > 0,
                            isExpired: false,
                            isRescheduled: false,
                        });
                        return [4 /*yield*/, this.homeService.showCannotSaveYouCardModal()];
                    case 1:
                        _e.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // TODO: mover a organismo y hacerlo general
    LifeguardMiddleware.prototype.showUserDontHavePreapprovalModal = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var i18n, i18nFormatted, result;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i18n = this.translateProvider.get(this.config.i18n.modal.dontHavePreapproved);
                        i18nFormatted = Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_8__["toCamelCaseProperties"])(i18n);
                        return [4 /*yield*/, this.fullscreenModalService.show({
                                title: i18nFormatted.title,
                                imgPath: i18nFormatted.image,
                                content: i18nFormatted.description,
                                cssClass: this.config.fullscreenModal.cssClass,
                                buttons: [
                                    {
                                        text: i18nFormatted.acceptButton,
                                        handler: function () { return _this.getApprovalUpFrontAttempt(); },
                                        cssClass: this.config.fullscreenModal.cssClassButton,
                                    },
                                ],
                                link: {
                                    text: i18nFormatted.moreInfoLink,
                                    url: this.config.routes.moreInfo,
                                },
                            })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, !!(result === null || result === void 0 ? void 0 : result.data)];
                }
            });
        });
    };
    LifeguardMiddleware.prototype.getApprovalUpFrontAttempt = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var error_2;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 8]);
                        return [4 /*yield*/, this.loadingService.show()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.creditInteractor.getApprovalAttempt()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.loadingService.hideWithoutFeedback()];
                    case 3:
                        _a.sent();
                        this.navigatorProvider.navigateForward(this.config.routes.knowUsBetterEngine, {
                            relativeTo: this.route,
                        });
                        return [3 /*break*/, 8];
                    case 4:
                        error_2 = _a.sent();
                        return [4 /*yield*/, this.loadingService.hideWithoutFeedback()];
                    case 5:
                        _a.sent();
                        if (error_2.constructor === _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["DontHaveApprovalAttemptException"] ||
                            error_2.constructor === _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["DontHaveApprovalAttemptWithDataException"]) {
                            this.processGetApprovalAttemptError(error_2);
                            return [2 /*return*/, false];
                        }
                        if (!(error_2.constructor !== _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["HaveApprovalAttemptException"])) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.homeService.showToastService(error_2.message)];
                    case 6:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 7:
                        if (error_2.constructor === _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["HaveApprovalAttemptException"]) {
                            this.navigatorProvider.navigateForward(this.config.routes.knowUsBetterEngine, {
                                relativeTo: this.route,
                            });
                        }
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    LifeguardMiddleware.prototype.processGetApprovalAttemptError = function (error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                messages = this.translateProvider.get(this.config.i18n.modal.dontHaveApprovalAttempt);
                messages.description = this.translateProvider.get(this.config.i18n.modal.dontHaveApprovalAttemptDescription, {
                    limitedConsultations: String(error.data.attempts.maxAttempt),
                });
                this.homeService.showCardModal({ message: messages });
                return [2 /*return*/];
            });
        });
    };
    LifeguardMiddleware.prototype.setAnalyticsIntentionOfBegin = function () {
        var eventName = this.config.analytics.intentionOfBegin.name;
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
                eventProps: Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_8__["stringsArrayToObjectWithValues"])(this.config.analytics.intentionOfBegin.params.cleverTap, [Object(_nequi_utils_date__WEBPACK_IMPORTED_MODULE_7__["getFormattedDateTimes"])(), String(!!this.homeViewModel.preapproved)]),
            },
        });
    };
    LifeguardMiddleware.ɵfac = function LifeguardMiddleware_Factory(t) { return new (t || LifeguardMiddleware)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["CreditInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_products_lifeguard_pages_home_home_service__WEBPACK_IMPORTED_MODULE_11__["HomeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_4__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_products_lifeguard_pages_home_home_view_model__WEBPACK_IMPORTED_MODULE_12__["HomeViewModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_services_credit_logger_service__WEBPACK_IMPORTED_MODULE_14__["CreditLoggerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_services_credit_info_model__WEBPACK_IMPORTED_MODULE_13__["CreditInfoModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["CreditEventsHandler"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_6__["FullscreenModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_4__["NavigatorProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_organisms_approval_front_approval_front_view_model__WEBPACK_IMPORTED_MODULE_9__["ApprovalFrontViewModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_4__["ModuleConfigProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["AnalyticsInteractor"])); };
    LifeguardMiddleware.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjectable"]({ token: LifeguardMiddleware, factory: LifeguardMiddleware.ɵfac });
    return LifeguardMiddleware;
}());



/***/ }),

/***/ "TDwy":
/*!*****************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard/pages/payment-detail/payment-detail.config.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: PaymentDetailConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentDetailConfig", function() { return PaymentDetailConfig; });
var PaymentDetailConfig = Object.freeze({
    i18n: {
        headerTitle: 'lifeguard.payment-detail.title',
        paymentDetail: 'lifeguard.payment-detail.items',
    },
    routes: {
        backpack: '/admin/dashboard',
    },
    insurance: 2900,
});


/***/ }),

/***/ "TR9s":
/*!*************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard/pages/home/home.view-model.ts ***!
  \*************************************************************************************************/
/*! exports provided: HomeViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeViewModel", function() { return HomeViewModel; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _nequi_utils_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/utils/string */ "p6rB");
/* harmony import */ var _home_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.config */ "mB9U");




Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])();
var HomeViewModel = /** @class */ (function () {
    function HomeViewModel() {
        this.minAmount = 0;
        this.maxAmount = 0;
        this.isContentVisible = false;
        this.monthlyInterestRate = 0;
        this.insuranceCoverageAmount = 0;
        this.loanAmount = 0;
        this.isMinAmountPreaproved = false;
        this.preapprovedLabel = '';
        this.expirtationDateText = '';
        this.isWrongTime = false;
        this.itemDetail = [];
        this.pocket = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.isTotalPayment = false;
        this.paymentAmount = 0;
    }
    HomeViewModel.prototype.initForm = function () {
        this.financingAmount = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            pocket: this.pocket,
            financingAmount: this.financingAmount,
        });
    };
    HomeViewModel.prototype.buildItems = function (messages, values, pocketInfo, currencyPipe, datePipe) {
        var pocket = {
            isPocket: true,
            title: messages.items.pocket,
            name: pocketInfo.name,
            image: pocketInfo.imageUrl,
            icon: pocketInfo.iconUrl,
        };
        var items = [
            {
                label: messages.items.amount,
                value: currencyPipe.transform(values.payment),
            },
            {
                label: messages.items.loan,
                value: currencyPipe.transform(values.loan),
            },
        ];
        if (values.isTotalPayment && !values.isExpired) {
            items = items.concat([
                {
                    label: messages.items.normal,
                    value: currencyPipe.transform(values.normalInterest),
                },
                {
                    label: messages.items.insurance.label,
                    value: currencyPipe.transform(values.insurance),
                    helpMessage: Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_2__["createFormat"])(messages.items.insurance.message, [
                        currencyPipe.transform(values.insurance),
                    ]),
                },
            ]);
        }
        if (values.isExpired) {
            items = items.concat([
                {
                    label: messages.items.interestArrears,
                    value: currencyPipe.transform(values.penaltyInterest),
                },
                {
                    label: messages.items.normal,
                    value: currencyPipe.transform(values.normalInterest),
                },
                {
                    label: messages.items.monthlyInsuranceToday.label,
                    value: currencyPipe.transform(values.insurance),
                    helpMessage: Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_2__["createFormat"])(messages.items.monthlyInsuranceToday.message, [
                        currencyPipe.transform(_home_config__WEBPACK_IMPORTED_MODULE_3__["LifeGuardConfig"].insurance),
                    ]),
                },
            ]);
        }
        items.push({
            label: messages.items.date,
            value: datePipe.transform(new Date(values.date), _home_config__WEBPACK_IMPORTED_MODULE_3__["LifeGuardConfig"].finishDateFormat),
        }, pocket);
        return items;
    };
    return HomeViewModel;
}());



/***/ }),

/***/ "W0VE":
/*!*****************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard/pages/reschedule-info/reschedule-info.page.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: RescheduleInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RescheduleInfoPage", function() { return RescheduleInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/credits/core */ "42wy");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _reschedule_info_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reschedule-info.config */ "nxg+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../../ui/src/lib/directives/animate-title-on-scroll/animate-title-on-scroll.directive */ "qbWi");
/* harmony import */ var _ui_src_lib_components_busy_indicator_busy_indicator_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../../ui/src/lib/components/busy-indicator/busy-indicator.component */ "N6nj");
/* harmony import */ var _organisms_credit_detail_credit_detail_organism__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../organisms/credit-detail/credit-detail.organism */ "BUs5");
/* harmony import */ var _ui_src_lib_components_view_detail_view_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../../ui/src/lib/components/view-detail/view-detail.component */ "yT3N");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");




















function RescheduleInfoPage_ion_buttons_5_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-buttons", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RescheduleInfoPage_ion_buttons_5_Template_ion_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.showInformationMessage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "ion-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RescheduleInfoPage_app_busy_indicator_13_Template(rf, ctx) { if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-busy-indicator", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("showReloadChange", function RescheduleInfoPage_app_busy_indicator_13_Template_app_busy_indicator_showReloadChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.reloadError = $event; })("onReload", function RescheduleInfoPage_app_busy_indicator_13_Template_app_busy_indicator_onReload_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.reload(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showReload", ctx_r1.reloadError)("reloadMessage", ctx_r1.reloadError);
} }
function RescheduleInfoPage_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-credit-detail-organism", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "app-view-detail", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("balance", ctx_r2.totalLoanAmount)("endAt", ctx_r2.endAt)("isExpired", true)("showTextAsAlert", false)("label", ctx_r2.config.i18n.endAtMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 7, ctx_r2.config.i18n.itemsTitle));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("details", ctx_r2.detailItems);
} }
function RescheduleInfoPage_ion_footer_15_Template(rf, ctx) { if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-footer", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-text", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RescheduleInfoPage_ion_footer_15_Template_ion_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.navigateToPayment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 2, ctx_r3.config.i18n.footerMessage), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 4, ctx_r3.config.i18n.footerButton), " ");
} }
var RescheduleInfoPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(RescheduleInfoPage, _super);
    function RescheduleInfoPage(translateProvider, toastService, alertService, creditInteractor, currencyPipe, injector) {
        var _this = _super.call(this, injector) || this;
        _this.translateProvider = translateProvider;
        _this.toastService = toastService;
        _this.alertService = alertService;
        _this.creditInteractor = creditInteractor;
        _this.currencyPipe = currencyPipe;
        _this.config = _reschedule_info_config__WEBPACK_IMPORTED_MODULE_7__["RescheduleInfoConfig"];
        return _this;
    }
    RescheduleInfoPage.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCreditDetail()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RescheduleInfoPage.prototype.reload = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCreditDetail()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RescheduleInfoPage.prototype.goBack = function () {
        this.navigatorProvider.back();
    };
    RescheduleInfoPage.prototype.navigateToPayment = function () {
        this.navigatorProvider.navigateForward(this.config.routes.payment, {
            state: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.creditInfo),
        });
    };
    RescheduleInfoPage.prototype.showInformationMessage = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var message;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        message = this.translateProvider.get(this.config.i18n.informationMessage);
                        return [4 /*yield*/, this.toastService.showWithIcon({
                                message: message,
                                type: _nequi_ui__WEBPACK_IMPORTED_MODULE_6__["IconToastType"].INFO,
                                position: _nequi_ui__WEBPACK_IMPORTED_MODULE_6__["ToastPosition"].TOP,
                                duration: this.config.infoMessageDuration,
                                isBackdropDismiss: true,
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RescheduleInfoPage.prototype.getCreditDetail = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.showBusy = true;
                        this.reloadError = null;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, , 8]);
                        _a = this;
                        return [4 /*yield*/, this.creditInteractor.getInfoCredits(this.config.creditTypeShortTerm)];
                    case 2:
                        _a.creditInfo = _b.sent();
                        if (!!this.creditInfo) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.showExitAlert()];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        this.showBusy = false;
                        this.showInformationMessage();
                        this.loadCreditDetail(this.creditInfo);
                        _b.label = 5;
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        error_1 = _b.sent();
                        this.reloadError = this.translateProvider.get(this.config.i18n.retryMessage);
                        return [4 /*yield*/, this.toastService.showError(error_1.message)];
                    case 7:
                        _b.sent();
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    RescheduleInfoPage.prototype.loadCreditDetail = function (credit) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var items;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.totalLoanAmount = credit.balance;
                this.endAt = credit.newLoan.endAt;
                items = this.translateProvider.get(this.config.i18n.interestsDetail);
                this.detailItems = [
                    {
                        label: items.commission.label,
                        description: this.currencyPipe.transform(this.getCommissionValue(credit)),
                        helpMessage: items.commission.message,
                    },
                    {
                        label: items.lifeInsuranceInterest.label,
                        description: this.currencyPipe.transform(credit.newLoan.totalInsurance),
                        helpMessage: items.lifeInsuranceInterest.message,
                    },
                ];
                return [2 /*return*/];
            });
        });
    };
    RescheduleInfoPage.prototype.showExitAlert = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertService.showByI18n({
                            i18nKey: this.config.i18n.exitAlert,
                            handlers: {
                                accept: function () {
                                    _this.navigatorProvider.navigateRoot(_this.config.routes.dashBoard);
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
    RescheduleInfoPage.prototype.getCommissionValue = function (credit) {
        return this.creditInteractor.getCommission({
            amount: credit.approvedValue,
            commission: {
                maximum: null,
                percentage: credit.commission,
                value: null,
            },
        });
    };
    RescheduleInfoPage.ɵfac = function RescheduleInfoPage_Factory(t) { return new (t || RescheduleInfoPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_4__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_6__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["CreditInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"])); };
    RescheduleInfoPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RescheduleInfoPage, selectors: [["app-reschedule-info"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 16, vars: 10, consts: [[1, "nequi-header"], ["slot", "start"], ["id", "reschedule-info_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], ["slot", "end", 4, "ngIf"], [1, "nequi-header__title", "ion-text-start"], ["fullscreen", "true", "scrollEvents", "true", "appAnimateTitleOnScroll", "", 1, "ion-content--white", "ion-padding-horizontal"], [1, "nequi-title"], [3, "showReload", "reloadMessage", "showReloadChange", "onReload", 4, "ngIf"], [4, "ngIf"], ["class", "nequi-footer", 4, "ngIf"], ["slot", "end"], ["id", "reschedule-info_info_button", 3, "click"], ["slot", "icon-only", "name", "information"], [3, "showReload", "reloadMessage", "showReloadChange", "onReload"], [3, "balance", "endAt", "isExpired", "showTextAsAlert", "label"], ["id", "form_detail_text", 1, "view-detail"], [3, "details"], [1, "nequi-footer"], [1, "nequi-footer__toolbar"], [1, "nequi-footer__toolbar-text"], ["id", "reschedule-info_ready_button", "expand", "block", "color", "guayaba", 1, "nequi-footer__button", 3, "click"]], template: function RescheduleInfoPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RescheduleInfoPage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, RescheduleInfoPage_ion_buttons_5_Template, 3, 0, "ion-buttons", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-title", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-content", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, RescheduleInfoPage_app_busy_indicator_13_Template, 1, 2, "app-busy-indicator", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, RescheduleInfoPage_div_14_Template, 6, 9, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, RescheduleInfoPage_ion_footer_15_Template, 8, 6, "ion-footer", 10);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.showBusy);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 6, ctx.config.i18n.title), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 8, ctx.config.i18n.title), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showBusy);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.showBusy);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.showBusy);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonContent"], _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_9__["AnimateTitleOnScrollDirective"], _ui_src_lib_components_busy_indicator_busy_indicator_component__WEBPACK_IMPORTED_MODULE_10__["BusyIndicatorComponent"], _organisms_credit_detail_credit_detail_organism__WEBPACK_IMPORTED_MODULE_11__["CreditDetailOrganism"], _ui_src_lib_components_view_detail_view_detail_component__WEBPACK_IMPORTED_MODULE_12__["ViewDetailComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonText"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"]], styles: [".view-detail[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 500;\n  color: var(--gray-alert-message);\n  margin: 8px;\n}\n\n.nequi-footer__toolbar[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.nequi-footer__toolbar-text[_ngcontent-%COMP%] {\n  margin: 16px;\n  display: inline-block;\n  font-size: 14px;\n  color: var(--gray-70);\n  line-height: 16.8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvcmVzY2hlZHVsZS1pbmZvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUdFO0VBQ0UsVUFBQTtBQUFKOztBQUVJO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFBTiIsImZpbGUiOiJyZXNjaGVkdWxlLWluZm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpZXctZGV0YWlsIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogdmFyKC0tZ3JheS1hbGVydC1tZXNzYWdlKTtcbiAgbWFyZ2luOiA4cHg7XG59XG5cbi5uZXF1aS1mb290ZXIge1xuICAmX190b29sYmFyIHtcbiAgICBwYWRkaW5nOiAwO1xuXG4gICAgJi10ZXh0IHtcbiAgICAgIG1hcmdpbjogMTZweDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1ncmF5LTcwKTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNi44cHg7XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
    return RescheduleInfoPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__["FeatureBasePage"]));



/***/ }),

/***/ "YTzw":
/*!***************************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard/pages/terms-and-conditions/terms-and-conditions.page.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: TermsAndConditionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsAndConditionsPage", function() { return TermsAndConditionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/credits/core */ "42wy");
/* harmony import */ var _nequi_features_credits_core_exceptions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/credits/core/exceptions */ "RUq+");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_date__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/utils/date */ "tGfC");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _organisms_contract_constants_contract_type__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../organisms/contract/constants/contract-type */ "dKxq");
/* harmony import */ var _services_credit_info_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../services/credit-info.model */ "9FmH");
/* harmony import */ var _services_customer_finacial_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../services/customer-finacial.service */ "uuzL");
/* harmony import */ var _terms_and_conditions_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./terms-and-conditions.config */ "jHVH");
/* harmony import */ var _organisms_contract_contract_organism__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../organisms/contract/contract.organism */ "Lnzr");






















var TermsAndConditionsPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TermsAndConditionsPage, _super);
    function TermsAndConditionsPage(route, creditInfoModel, customerFinancialService, cardModalService, creditEventsHandler, analyticsInteractor, injector) {
        var _this = _super.call(this, injector) || this;
        _this.route = route;
        _this.creditInfoModel = creditInfoModel;
        _this.customerFinancialService = customerFinancialService;
        _this.cardModalService = cardModalService;
        _this.creditEventsHandler = creditEventsHandler;
        _this.analyticsInteractor = analyticsInteractor;
        _this.config = _terms_and_conditions_config__WEBPACK_IMPORTED_MODULE_13__["TermsAndConditionsConfig"];
        _this.contractType = _organisms_contract_constants_contract_type__WEBPACK_IMPORTED_MODULE_10__["ContractType"].CREDIT_LIFEGUARD;
        return _this;
    }
    TermsAndConditionsPage.prototype.ngOnInit = function () {
        this.setAnalyticsIntentionOfEnd();
    };
    TermsAndConditionsPage.prototype.executeDisbursement = function () {
        var data = {
            operatorType: _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["OperationCreditType"].DISBURSEMENT,
            isDebitType: true,
            approvedAt: this.creditInfoModel.creditFeatureInfo.approvedDate,
            loanValue: this.creditInfoModel.creditFeatureInfo.loanAmount,
            productId: _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["CreditType"].LIFEGUARD,
            gender: this.customerFinancialService.creditUserInfo.gender,
            purpose: this.creditInfoModel.creditFeatureInfo.loanDestination || '',
        };
        var transaction = new _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["DisbursementTransaction"]().withData(data);
        _super.prototype.executeTransaction.call(this, transaction);
    };
    TermsAndConditionsPage.prototype.setOriginMoney = function (transaction) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                transaction.withPocket(null);
                return [2 /*return*/, transaction];
            });
        });
    };
    TermsAndConditionsPage.prototype.onTransactionSuccess = function () {
        this.disbursementSuccess();
    };
    TermsAndConditionsPage.prototype.onTransactionFailed = function (error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.generalError(error)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TermsAndConditionsPage.prototype.goToBackpack = function () {
        this.navigatorProvider.navigateForward(this.config.routes.backpack, {
            relativeTo: this.route,
        });
    };
    TermsAndConditionsPage.prototype.goToRegistryFull = function () {
        this.navigatorProvider.navigateForward(this.config.routes.registryFull, {
            relativeTo: this.route,
        });
    };
    TermsAndConditionsPage.prototype.disbursementSuccess = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingService.hide(true)];
                    case 1:
                        _a.sent();
                        this.creditInfoModel.cleanPreapprovedInfo();
                        this.creditEventsHandler.emitDisbursedEvent({
                            creditType: _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["CreditType"].LIFEGUARD,
                            hasCredits: true,
                            isRescheduled: false,
                            isExpired: false,
                        });
                        this.showCardModal(this.config.i18n.cardModalSuccess);
                        return [2 /*return*/];
                }
            });
        });
    };
    TermsAndConditionsPage.prototype.generalError = function (error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (error.constructor === _nequi_features_credits_core_exceptions__WEBPACK_IMPORTED_MODULE_6__["AlertCategoryException"] ||
                            error.constructor === _nequi_features_credits_core_exceptions__WEBPACK_IMPORTED_MODULE_6__["BlockingCategoryException"]) {
                            this.showCardModal(this.config.i18n.controlListError);
                            return [2 /*return*/];
                        }
                        if (error.constructor === _nequi_features_credits_core_exceptions__WEBPACK_IMPORTED_MODULE_6__["BreakCeilingException"]) {
                            this.showBreakCeilingError();
                            return [2 /*return*/];
                        }
                        if (error.constructor === _nequi_features_credits_core_exceptions__WEBPACK_IMPORTED_MODULE_6__["DisbursementTimeOutException"]) {
                            this.showDisbursementTimeOutError();
                            return [2 /*return*/];
                        }
                        if (error.constructor === _nequi_features_credits_core_exceptions__WEBPACK_IMPORTED_MODULE_6__["WrongTimeDisbursementException"]) {
                            this.showWrongTimeDisbursementError(error);
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.toastService.showWithIcon({
                                message: error.message,
                                type: _nequi_ui__WEBPACK_IMPORTED_MODULE_7__["IconToastType"].ERROR,
                                position: _nequi_ui__WEBPACK_IMPORTED_MODULE_7__["ToastPosition"].TOP,
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TermsAndConditionsPage.prototype.showCardModal = function (i18nMessage) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var message;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        message = this.translateProvider.get(i18nMessage);
                        return [4 /*yield*/, this.cardModalService.show({
                                title: message.header,
                                imgPath: message.image,
                                content: message.content,
                                buttons: [
                                    {
                                        text: message.buttons.accept,
                                        handler: function () {
                                            _this.goToBackpack();
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
    TermsAndConditionsPage.prototype.showBreakCeilingError = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var message;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        message = this.translateProvider.get(this.config.i18n.breakCeilingError);
                        return [4 /*yield*/, this.cardModalService.show({
                                title: message.header,
                                imgPath: message.image,
                                content: message.content,
                                buttons: [
                                    {
                                        text: message.buttons.breakCeiling,
                                        handler: function () { return _this.goToRegistryFull(); },
                                    },
                                    {
                                        color: this.config.colors.midnight,
                                        text: message.buttons.accept,
                                        handler: function () {
                                            _this.goToBackpack();
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
    TermsAndConditionsPage.prototype.showDisbursementTimeOutError = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var message;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        message = this.translateProvider.get(this.config.i18n.disbursementTimeOutError);
                        return [4 /*yield*/, this.cardModalService.show({
                                title: message.header,
                                imgPath: message.image,
                                content: message.content,
                                buttons: [
                                    {
                                        text: message.buttons.accept,
                                        handler: function () {
                                            _this.creditInfoModel.cleanPreapprovedInfo();
                                            _this.goToBackpack();
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
    TermsAndConditionsPage.prototype.showWrongTimeDisbursementError = function (error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var message;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                message = this.translateProvider.get(this.config.i18n.wrongTimeDisbursementError);
                this.alertService.show({
                    messages: {
                        header: message.header,
                        message: error.message,
                        buttons: message.buttons,
                    },
                    handlers: {
                        accept: function () { return _this.goToBackpack(); },
                    },
                });
                return [2 /*return*/];
            });
        });
    };
    TermsAndConditionsPage.prototype.setAnalyticsIntentionOfEnd = function () {
        var installment = 1;
        var eventName = this.config.analytics.intentionOfEnd.name;
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__["AnalyticsType"].FACEBOOK,
            params: {
                eventName: eventName,
            },
        });
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__["AnalyticsType"].FIREBASE,
            params: { eventName: eventName },
        });
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__["AnalyticsType"].CLEVERTAP,
            params: {
                eventName: eventName,
                eventProps: Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_9__["stringsArrayToObjectWithValues"])(this.config.analytics.intentionOfEnd.params.cleverTap, [Object(_nequi_utils_date__WEBPACK_IMPORTED_MODULE_8__["getFormattedDateTimes"])(), this.creditInfoModel.creditFeatureInfo.loanAmount, installment]),
            },
        });
    };
    TermsAndConditionsPage.ɵfac = function TermsAndConditionsPage_Factory(t) { return new (t || TermsAndConditionsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_credit_info_model__WEBPACK_IMPORTED_MODULE_11__["CreditInfoModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_customer_finacial_service__WEBPACK_IMPORTED_MODULE_12__["CustomerFinancialService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_7__["CardModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["CreditEventsHandler"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__["AnalyticsInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"])); };
    TermsAndConditionsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TermsAndConditionsPage, selectors: [["app-credits-terms-and-conditions"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[1, "ion-page", 3, "type", "accepted"]], template: function TermsAndConditionsPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-contract-organism", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("accepted", function TermsAndConditionsPage_Template_app_contract_organism_accepted_0_listener() { return ctx.executeDisbursement(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.contractType);
        } }, directives: [_organisms_contract_contract_organism__WEBPACK_IMPORTED_MODULE_14__["ContractOrganism"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXJtcy1hbmQtY29uZGl0aW9ucy5wYWdlLnNjc3MifQ== */"] });
    return TermsAndConditionsPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_4__["TransactionBasePage"]));



/***/ }),

/***/ "aTbj":
/*!*****************************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard/pages/reschedule-payment/reschedule-payment.view-model.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: ReschedulePaymentViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReschedulePaymentViewModel", function() { return ReschedulePaymentViewModel; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _reschedule_payment_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reschedule-payment.config */ "3sOq");


var ReschedulePaymentViewModel = /** @class */ (function () {
    function ReschedulePaymentViewModel() {
        this.config = _reschedule_payment_config__WEBPACK_IMPORTED_MODULE_1__["ReschedulePaymentConfig"];
        this.paymentAmount = 0;
        this.pocketControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]);
    }
    ReschedulePaymentViewModel.prototype.buildItems = function (messages, currencyPipe, datePipe) {
        var _a = this.pocketControl.value, name = _a.name, iconUrl = _a.iconUrl, icon = _a.icon;
        var pocket = {
            isPocket: true,
            title: messages.items.pocket,
            name: name,
            image: iconUrl,
            icon: icon,
        };
        return [
            {
                label: messages.items.currentInterests,
                value: currencyPipe.transform(this.creditInfo.normalInterest),
            },
            {
                label: messages.items.penaltyInterest,
                value: currencyPipe.transform(this.creditInfo.penaltyInterest),
            },
            {
                label: messages.items.lifeInsurance,
                value: currencyPipe.transform(this.creditInfo.feesOutstanding),
            },
            {
                label: messages.items.total,
                value: currencyPipe.transform(this.creditInfo.totalOtherValues),
            },
            {
                label: messages.items.newPaymentLimitDate,
                value: datePipe.transform(this.creditInfo.newLoan.endAt),
            },
            pocket,
        ];
    };
    return ReschedulePaymentViewModel;
}());



/***/ }),

/***/ "buqy":
/*!***********************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard/organisms/payment/payment.view-model.ts ***!
  \***********************************************************************************************************/
/*! exports provided: PaymentViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentViewModel", function() { return PaymentViewModel; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _utils_user_payment_amount_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/user-payment-amount.validator */ "qofs");


var PaymentViewModel = /** @class */ (function () {
    function PaymentViewModel(currencyConfigProvider) {
        this.currencyConfigProvider = currencyConfigProvider;
        this.pocket = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]();
    }
    PaymentViewModel.prototype.initForm = function (totalAmount, normalInterest, approvedValue) {
        this.totalAmount = totalAmount;
        this.amount = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]({ value: totalAmount, disabled: true }, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(1),
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].max(totalAmount),
            _utils_user_payment_amount_validator__WEBPACK_IMPORTED_MODULE_1__["UserPaymentAmountValidator"].userPaymentAmountValidator(totalAmount, normalInterest, approvedValue),
        ]);
        this.totalPayment = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](true, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].requiredTrue]);
        this.decimalLimitValue = this.currencyConfigProvider.visualDecimalLimit;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            pocket: this.pocket,
            amount: this.amount,
            total: this.totalPayment,
        });
    };
    PaymentViewModel.prototype.updateAmountStatus = function () {
        if (this.amount.disabled) {
            this.amount.setValue(null);
            this.amount.enable();
            this.decimalLimitValue = this.currencyConfigProvider.decimalLimit;
        }
        else {
            this.amount.setValue(this.totalAmount);
            this.amount.disable();
            this.decimalLimitValue = this.currencyConfigProvider.visualDecimalLimit;
        }
        this.form.markAsPristine();
        this.form.markAsUntouched();
    };
    return PaymentViewModel;
}());



/***/ }),

/***/ "ixgN":
/*!**********************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard/pages/home/home.service.ts ***!
  \**********************************************************************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _home_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.config */ "mB9U");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");










var HomeService = /** @class */ (function () {
    function HomeService(navigatorProvider, firstTimeMessageBottomSheetService, translateProvider, cardModalService, alertService, toastService) {
        this.navigatorProvider = navigatorProvider;
        this.firstTimeMessageBottomSheetService = firstTimeMessageBottomSheetService;
        this.translateProvider = translateProvider;
        this.cardModalService = cardModalService;
        this.alertService = alertService;
        this.toastService = toastService;
        this.config = _home_config__WEBPACK_IMPORTED_MODULE_5__["LifeGuardConfig"];
    }
    HomeService.prototype.showPreapprovedWelcome = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var bottomSheetMessages, result;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        bottomSheetMessages = this.translateProvider.get(this.config.i18n.bottomSheet.welcome);
                        return [4 /*yield*/, this.firstTimeMessageBottomSheetService.show({
                                icon: bottomSheetMessages.image,
                                message: bottomSheetMessages.message,
                                content: bottomSheetMessages.content,
                                cssClass: this.config.bottomSheet.cssClass.firstTimeMessage,
                                header: {
                                    view: true,
                                    action: function () { return _this.firstTimeMessageBottomSheetService.hide(false); },
                                },
                                button: {
                                    label: bottomSheetMessages.button,
                                    color: 'guayaba',
                                    fill: 'outline',
                                    action: function () { return _this.firstTimeMessageBottomSheetService.hide(true); },
                                },
                            })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data];
                }
            });
        });
    };
    HomeService.prototype.showCannotSaveYouCardModal = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        messages = this.translateProvider.get(this.config.i18n.cannotSaveYouAlert);
                        return [4 /*yield*/, this.cardModalService.show({
                                title: messages.title,
                                imgPath: messages.image,
                                content: messages.description,
                                buttons: [
                                    {
                                        text: messages.buttons.accept,
                                    },
                                    {
                                        isLink: true,
                                        text: messages.link.text,
                                        handler: function () {
                                            Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_4__["openUrl"])(messages.link.url);
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
    HomeService.prototype.showTwoButtonsModal = function (messages, url, withSecondButton) {
        if (withSecondButton === void 0) { withSecondButton = false; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cardModalService.show({
                            title: messages.title,
                            imgPath: messages.image,
                            content: messages.description,
                            buttons: withSecondButton
                                ? [
                                    {
                                        text: messages.buttons.accept,
                                        handler: function () { return _this.navigatorProvider.navigateRoot(url); },
                                    },
                                    {
                                        text: messages.buttons.cancel,
                                        color: _nequi_ui__WEBPACK_IMPORTED_MODULE_3__["ModalButtonColor"].MIDNIGHT_GRAY,
                                    },
                                ]
                                : [
                                    {
                                        text: messages.buttons.accept,
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
    HomeService.prototype.showPendingPaymentProcessModal = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        messages = this.translateProvider.get(this.config.i18n.pendingPaymentProcess);
                        return [4 /*yield*/, this.cardModalService.show({
                                title: messages.title,
                                imgPath: messages.image,
                                content: messages.description,
                                buttons: [
                                    {
                                        text: messages.buttons.accept,
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
    HomeService.prototype.showCombackLaterAlert = function (text, callback) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var i18n;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i18n = this.translateProvider.get(this.config.i18n.alert.comeBackLater);
                        i18n.message = text.replace(i18n.message, '').trim();
                        return [4 /*yield*/, this.alertService.show({
                                messages: {
                                    header: i18n.header,
                                    message: i18n.message,
                                    buttons: i18n.buttons,
                                },
                                handlers: {
                                    accept: function () {
                                        if (callback) {
                                            callback.bind(_this);
                                        }
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
    HomeService.prototype.showDefaultAlert = function () {
        var message = {
            i18nKey: this.config.i18n.alert.defaultError,
            backdropDismiss: false,
        };
        this.alertService.showByI18n(message);
    };
    HomeService.prototype.showToastService = function (message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastService.showError(message)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeService.prototype.showCardModal = function (params) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var message, buttons, result;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        message = params.i18nKey ? this.translateProvider.get(params.i18nKey) : params.message;
                        buttons = [
                            {
                                text: message.buttons.accept,
                                handler: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () { var _a; return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                                    return [2 /*return*/, (_a = params.onAccept) === null || _a === void 0 ? void 0 : _a.call(params)];
                                }); }); },
                            },
                        ];
                        if ((_a = message.buttons) === null || _a === void 0 ? void 0 : _a.cancel) {
                            buttons.push({
                                text: message.buttons.cancel,
                                color: _nequi_ui__WEBPACK_IMPORTED_MODULE_3__["ModalButtonColor"].MIDNIGHT_GRAY,
                                handler: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () { var _a; return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                                    return [2 /*return*/, (_a = params.onCancel) === null || _a === void 0 ? void 0 : _a.call(params)];
                                }); }); },
                            });
                        }
                        if (message.link) {
                            buttons.push({
                                isLink: true,
                                text: message.link.text,
                                handler: function () {
                                    Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_4__["openUrl"])(message.link.url);
                                },
                            });
                        }
                        return [4 /*yield*/, this.cardModalService.show({
                                title: message.title,
                                imgPath: message.image,
                                content: message.description,
                                buttons: buttons,
                            })];
                    case 1:
                        result = _b.sent();
                        return [2 /*return*/, result === null || result === void 0 ? void 0 : result.data];
                }
            });
        });
    };
    HomeService.ɵfac = function HomeService_Factory(t) { return new (t || HomeService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_2__["NavigatorProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_3__["FirstTimeMessageBottomSheetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_2__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_3__["CardModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_1__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_3__["ToastService"])); };
    HomeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: HomeService, factory: HomeService.ɵfac });
    return HomeService;
}());



/***/ }),

/***/ "jHVH":
/*!*****************************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard/pages/terms-and-conditions/terms-and-conditions.config.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: TermsAndConditionsConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsAndConditionsConfig", function() { return TermsAndConditionsConfig; });
var TermsAndConditionsConfig = Object.freeze({
    i18n: {
        pinChallengeMessage: 'lifeguard.terms-and-conditions.pin-challenge-modal',
        cardModalSuccess: 'lifeguard.terms-and-conditions.modals.success',
        controlListError: 'lifeguard.terms-and-conditions.modals.control-list',
        breakCeilingError: 'lifeguard.terms-and-conditions.modals.break-ceiling',
        disbursementTimeOutError: 'lifeguard.terms-and-conditions.modals.disbursement-time-out',
        wrongTimeDisbursementError: 'lifeguard.terms-and-conditions.errors.wrong-time-disbursement',
    },
    routes: {
        agreementFGA: '/admin/credits/lifeguard/agreement-fga',
        backpack: '/admin/dashboard',
        registryFull: '/admin/full-registry',
    },
    colors: {
        midnight: 'medianoche',
    },
    analytics: {
        intentionOfEnd: {
            name: 'Salvavidas_intencion_final_tyc_prestamo',
            params: {
                cleverTap: ['Fecha_intencion', 'Valor_solicitado', 'Plazo_prestamo'],
            },
        },
    },
});


/***/ }),

/***/ "lg92":
/*!*****************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard/pages/life-ensurance/life-ensurance.config.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: PaymentGuaranteesConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentGuaranteesConfig", function() { return PaymentGuaranteesConfig; });
var PaymentGuaranteesConfig = Object.freeze({
    i18n: {
        title: 'lifeguard.life-insurance.header.title',
        content: {
            title: 'lifeguard.life-insurance.content.title',
            text: 'lifeguard.life-insurance.content.description',
            icon: '/assets/images/propeller/padlock.svg',
        },
        readyButton: 'lifeguard.life-insurance.ready-button',
        logs: 'lifeguard.life-insurance.logs',
    },
    goTo: {
        gender: '/admin/credits/lifeguard/gender',
        loan: '/admin/credits/lifeguard/ensure-loan',
    },
});


/***/ }),

/***/ "ljt7":
/*!*****************************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard/pages/know-us-better-engine/know-us-better-engine.page.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: KnowUsBetterEnginePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnowUsBetterEnginePage", function() { return KnowUsBetterEnginePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _organisms_approval_front_approval_front_organism__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../organisms/approval-front/approval-front.organism */ "1lxh");
/* harmony import */ var _know_us_better_engine_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./know-us-better-engine.config */ "tRkG");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");










var _c0 = ["nequiApprovalFrontModulesList"];
var KnowUsBetterEnginePage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(KnowUsBetterEnginePage, _super);
    function KnowUsBetterEnginePage(route, injector) {
        var _this = _super.call(this, injector) || this;
        _this.route = route;
        _this.config = _know_us_better_engine_config__WEBPACK_IMPORTED_MODULE_5__["KnowUsBetterEngineConfig"];
        return _this;
    }
    KnowUsBetterEnginePage.prototype.goBack = function () {
        this.navigatorProvider.back();
    };
    KnowUsBetterEnginePage.prototype.onCompletedModuleData = function () {
        this.approvalFrontOrganism.finish();
    };
    KnowUsBetterEnginePage.prototype.onEngineCompleted = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.navigatorProvider.navigateRoot(this.config.routes.preapproved, {
                    relativeTo: this.route,
                    replaceUrl: true,
                });
                return [2 /*return*/];
            });
        });
    };
    KnowUsBetterEnginePage.ɵfac = function KnowUsBetterEnginePage_Factory(t) { return new (t || KnowUsBetterEnginePage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"])); };
    KnowUsBetterEnginePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: KnowUsBetterEnginePage, selectors: [["app-credits-know-us-better-engine"]], viewQuery: function KnowUsBetterEnginePage_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.approvalFrontOrganism = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 3, consts: [["organismId", "lifeguard", 1, "ion-page", 3, "messages", "completed", "nextButtonCliked", "goBackCliked"], ["nequiApprovalFrontModulesList", ""]], template: function KnowUsBetterEnginePage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-approval-front", 0, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("completed", function KnowUsBetterEnginePage_Template_app_approval_front_completed_0_listener() { return ctx.onCompletedModuleData(); })("nextButtonCliked", function KnowUsBetterEnginePage_Template_app_approval_front_nextButtonCliked_0_listener() { return ctx.onEngineCompleted(); })("goBackCliked", function KnowUsBetterEnginePage_Template_app_approval_front_goBackCliked_0_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("messages", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx.config.i18n.approvalFront));
        } }, directives: [_organisms_approval_front_approval_front_organism__WEBPACK_IMPORTED_MODULE_4__["ApprovalFrontOrganism"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], encapsulation: 2 });
    return KnowUsBetterEnginePage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__["FeatureBasePage"]));



/***/ }),

/***/ "mB9U":
/*!*********************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard/pages/home/home.config.ts ***!
  \*********************************************************************************************/
/*! exports provided: LifeGuardConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifeGuardConfig", function() { return LifeGuardConfig; });
var LifeGuardConfig = Object.freeze({
    airIcon: '/assets/images/credits/air-icon.svg',
    stepAmount: 10000,
    i18n: {
        cannotSaveYouAlert: 'lifeguard.home.cannotSaveYouAlert',
        preapproved: 'lifeguard.home.preapproval',
        pendingPaymentProcess: 'lifeguard.home.pending-payment-process',
        logs: 'lifeguard.home.logs',
        bottomSheet: {
            welcome: 'lifeguard.home.bottom-sheet.welcome',
        },
        modal: {
            parachute: 'lifeguard.home.modal.parachute',
            propeller: 'lifeguard.home.modal.lifeguard',
            partialPayment: 'lifeguard.home.modals.partial-payment',
            totalPayment: 'lifeguard.home.modals.total-payment',
            partialPaymentExpired: 'lifeguard.home.modals.partial-payment-expired',
            totalPaymentExpired: 'lifeguard.home.modals.total-payment-expired',
            dontHavePreapproved: 'lifeguard.home.modals.dont-have-preapproved',
            youCantNow: 'lifeguard.home.modals.you-cant-now',
            dontHaveApprovalAttempt: 'lifeguard.home.modals.dont-have-approval-attempt',
            dontHaveApprovalAttemptDescription: 'lifeguard.home.modals.dont-have-approval-attempt.description',
            pocketLabel: 'credits.home.modal.payment.pocketLabel',
        },
        alert: {
            comeBackLater: 'lifeguard.home.alert.comeBackLater',
            defaultError: 'lifeguard.home.alert.defaultError',
            penaltyForTime: 'lifeguard.home.penalty-for-time',
            wrongPersonalData: 'lifeguard.home.wrong-personal-data',
            unavailabilityTime: {
                alertconfig: 'credits.unavailability-time',
            },
        },
    },
    bottomSheet: {
        cssClass: {
            firstTimeMessage: 'first-time-message--icon-standard',
        },
    },
    alert: {
        timeout: 700,
    },
    routes: {
        dashboard: '/admin/dashboard',
        paymentGuarantees: '/admin/credits/lifeguard/life-ensure',
        backpack: '/admin/dashboard',
        paymentDetail: '/admin/credits/lifeguard/payment-detail',
        movements: '/admin/movements',
        moreInfo: 'https://ayuda.nequi.com.co/hc/es/articles/360060919391',
        propeller: '/admin/credits/propeller',
        knowUsBetterEngine: '/admin/credits/lifeguard/know-us-better-engine',
        preapproved: '/admin/credits/lifeguard',
    },
    confirmation: 'lifeguard.home.confirmation',
    pinchallenge: 'lifeguard.home.pin-challenge',
    finishDateFormat: 'dd \'de\' MMMM \'de\' yyyy',
    insurance: 2900,
    fullscreenModal: {
        cssClass: 'modal--white ion-text-center modal--propeller-credit',
        cssClassButton: 'ion-color-guayaba-outline button-outline',
    },
    analytics: {
        intentionOfBegin: {
            name: 'Salvavidas_intencion_inicial_prestamo',
            params: {
                cleverTap: ['Fecha_intencion', 'Tiene_preaprobado'],
            },
        },
        intentionToPay: {
            name: {
                cleverTap: 'Prestamo_Salvavidas_intencion_pago',
                dynatrace: 'intencion_pago_Salvavidas',
            },
            params: {
                cleverTap: [
                    'Fecha_intencion',
                    'Pago_expirado',
                    'Fecha_proxima_cuota',
                    'Valor_por_pagar',
                    'Cuotas_pendientes_por_pagar',
                ],
                error: ['Codigo_error', 'Descripcion_error'],
            },
            error: 'Prestamo_Salvavidas_intencion_pago_error',
            routes: {
                paymentHome: '/admin/credits/lifeguard',
            },
        },
    },
});


/***/ }),

/***/ "nxg+":
/*!*******************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard/pages/reschedule-info/reschedule-info.config.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: RescheduleInfoConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RescheduleInfoConfig", function() { return RescheduleInfoConfig; });
var RescheduleInfoConfig = Object.freeze({
    creditTypeShortTerm: '1',
    infoMessageDuration: null,
    i18n: {
        title: 'lifeguard.reschedule-info.title',
        endAtMessage: 'lifeguard.reschedule-info.new-payment-date',
        footerButton: 'lifeguard.reschedule-info.footer.button',
        footerMessage: 'lifeguard.reschedule-info.footer.message',
        informationMessage: 'lifeguard.reschedule-info.information',
        retryMessage: 'lifeguard.reschedule-info.retry-message',
        exitAlert: 'lifeguard.reschedule-info.exit-alert',
        interestsDetail: 'lifeguard.reschedule-info.items',
        itemsTitle: 'lifeguard.reschedule-info.items.title',
    },
    routes: {
        payment: '/admin/credits/lifeguard/reschedule-payment',
        dashBoard: '/admin/dashboard',
    },
});


/***/ }),

/***/ "p20M":
/*!*****************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard/pages/loan-info/loan-info.page.ts ***!
  \*****************************************************************************************************/
/*! exports provided: LoanInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanInfoPage", function() { return LoanInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nequi_apps_base_mobile_config_features_commons_services_screenshot_sharing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/apps/base/mobile/config/features/commons/services/screenshot-sharing */ "VXOE");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_date__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nequi/utils/date */ "tGfC");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _nequi_utils_string__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @nequi/utils/string */ "p6rB");
/* harmony import */ var _services_credit_info_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../services/credit-info.model */ "9FmH");
/* harmony import */ var _services_credit_logger_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../services/credit-logger.service */ "2ibl");
/* harmony import */ var _loan_info_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./loan-info.config */ "0n3p");
/* harmony import */ var _loan_info_view_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./loan-info.view-model */ "Kq5B");
/* harmony import */ var _ui_src_lib_directives_nequi_currency_style_nequi_currency_style_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../../../ui/src/lib/directives/nequi-currency-style/nequi-currency-style.directive */ "kVXI");
/* harmony import */ var _ui_src_lib_directives_message_manager_message_manager_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../../../ui/src/lib/directives/message-manager/message-manager.directive */ "68HU");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");






























function LoanInfoPage_ion_header_0_Template(rf, ctx) { if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-buttons", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoanInfoPage_ion_header_0_Template_ion_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "ion-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-buttons", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoanInfoPage_ion_header_0_Template_ion_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.shareScreenshoot(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "ion-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoanInfoPage_ion_header_0_Template_ion_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.saveScreenshot(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "ion-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 2, ctx_r0.config.i18n.loanInfo.shareIconButton));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 4, ctx_r0.config.i18n.loanInfo.saveIconButton));
} }
function LoanInfoPage_ion_footer_33_Template(rf, ctx) { if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-footer", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-text", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoanInfoPage_ion_footer_33_Template_ion_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.goLoanDestination(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 2, ctx_r1.config.i18n.loanInfo.helpMessage), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 4, ctx_r1.config.i18n.loanInfo.continueButton), " ");
} }
var _c0 = function (a1) { return { cssClass: "info-item__message", helpMessage: a1 }; };
var LoanInfoPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LoanInfoPage, _super);
    function LoanInfoPage(injector, translateProvider, toastService, creditInfoModel, route, percentPipe, screenshotSharingService, creditLoggerService, toastController, analyticsInteractor) {
        var _this = _super.call(this, injector) || this;
        _this.translateProvider = translateProvider;
        _this.toastService = toastService;
        _this.creditInfoModel = creditInfoModel;
        _this.route = route;
        _this.percentPipe = percentPipe;
        _this.screenshotSharingService = screenshotSharingService;
        _this.creditLoggerService = creditLoggerService;
        _this.toastController = toastController;
        _this.analyticsInteractor = analyticsInteractor;
        _this.config = _loan_info_config__WEBPACK_IMPORTED_MODULE_15__["LoanInfoConfig"];
        _this.ensuranceMessage = '';
        _this.isScreenShotTaken = false;
        _this.viewModel = new _loan_info_view_model__WEBPACK_IMPORTED_MODULE_16__["LoanInfoViewModel"]();
        return _this;
    }
    LoanInfoPage.prototype.ngOnInit = function () {
        this.initI18n();
        this.viewModel.commissionPercentage = this.creditInfoModel.creditFeatureInfo.commissionPercentage;
        this.viewModel.loanAmount = this.creditInfoModel.creditFeatureInfo.loanAmount;
        this.viewModel.monthlyFee = this.creditInfoModel.creditFeatureInfo.monthlyFee;
        this.viewModel.monthlyInsuranceAmount = this.creditInfoModel.loanPortfolioInfo.monthlyInsuranceAmount;
        this.viewModel.term = this.creditInfoModel.creditFeatureInfo.term;
        this.viewModel.expirationText = this.creditInfoModel.creditFeatureInfo.expirationDateText;
        var ensuranceInfo = this.translateProvider.get(this.config.i18n.loanInfo.lifeEnsurance.info);
        this.ensuranceMessage = Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_12__["createFormat"])(ensuranceInfo, [
            this.viewModel.monthlyInsuranceAmount.toString(),
        ]);
        this.setLog(this.config.i18n.logs);
        this.setAnalyticsIntentionOfSummary();
    };
    LoanInfoPage.prototype.shareScreenshoot = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isScreenShotTaken = true;
                        return [4 /*yield*/, this.screenshotSharingService.viaOptions()];
                    case 1:
                        _a.sent();
                        this.isScreenShotTaken = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    LoanInfoPage.prototype.saveScreenshot = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.screenshotSharingService.viaOptions()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoanInfoPage.prototype.goLoanDestination = function () {
        this.navigatorProvider.navigateForward(this.config.routes.loanDestination, {
            relativeTo: this.route,
        });
    };
    LoanInfoPage.prototype.ionViewWillLeave = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var toast;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _super.prototype.ionViewWillLeave.call(this);
                        return [4 /*yield*/, this.toastController.getTop()];
                    case 1:
                        toast = _a.sent();
                        if (toast) {
                            toast.dismiss();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    LoanInfoPage.prototype.initI18n = function () {
        var howMuchIsTheInterestValue = this.translateProvider.get(this.config.i18n.loanInfo.howMuchIsTheInterestValue);
        var monthlyCashRate = 0.017;
        var annualCashRate = 0.15;
        // TODO: replace params
        this.viewModel.interestText = Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_12__["createFormat"])(howMuchIsTheInterestValue, [
            this.percentPipe.transform(monthlyCashRate, '.0-2'),
            this.percentPipe.transform(annualCashRate, '.0-2'),
        ]);
        this.showSaveToast();
    };
    LoanInfoPage.prototype.showSaveToast = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var message;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        message = this.translateProvider.get(this.config.i18n.loanInfo.toatMessage);
                        return [4 /*yield*/, this.toastService.showWithIcon({
                                message: message,
                                type: _nequi_ui__WEBPACK_IMPORTED_MODULE_9__["IconToastType"].INFO,
                                position: _nequi_ui__WEBPACK_IMPORTED_MODULE_9__["ToastPosition"].TOP,
                                cssClass: 'nequi-toast__icon--info-save-button',
                                isBackdropDismiss: true,
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoanInfoPage.prototype.setLog = function (messages) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.creditLoggerService.save({ flowType: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_6__["FlowType"].LIFEGUARD, i18nKey: messages });
                return [2 /*return*/];
            });
        });
    };
    LoanInfoPage.prototype.setAnalyticsIntentionOfSummary = function () {
        var installment = 1;
        var eventName = this.config.analytics.intentionOfSummary.name;
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_6__["AnalyticsType"].FACEBOOK,
            params: {
                eventName: eventName,
            },
        });
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_6__["AnalyticsType"].FIREBASE,
            params: { eventName: eventName },
        });
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_6__["AnalyticsType"].CLEVERTAP,
            params: {
                eventName: eventName,
                eventProps: Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_11__["stringsArrayToObjectWithValues"])(this.config.analytics.intentionOfSummary.params.cleverTap, [Object(_nequi_utils_date__WEBPACK_IMPORTED_MODULE_10__["getFormattedDateTimes"])(), this.viewModel.loanAmount, installment]),
            },
        });
    };
    LoanInfoPage.ɵfac = function LoanInfoPage_Factory(t) { return new (t || LoanInfoPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_8__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_9__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_credit_info_model__WEBPACK_IMPORTED_MODULE_13__["CreditInfoModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["PercentPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_apps_base_mobile_config_features_commons_services_screenshot_sharing__WEBPACK_IMPORTED_MODULE_5__["ScreenshotSharingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_credit_logger_service__WEBPACK_IMPORTED_MODULE_14__["CreditLoggerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_6__["AnalyticsInteractor"])); };
    LoanInfoPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoanInfoPage, selectors: [["app-loan-info-credits"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 34, vars: 34, consts: [["class", "nequi-header", 4, "ngIf"], ["fullscreen", "true", 1, "ion-content--white", "ion-padding-horizontal"], [1, "nequi-title"], ["lines", "none", 1, "info-item", "info-item__margin-left-20"], [1, "info-item__content"], [1, "info-item__label"], ["id", "loan-info_monthly-fee_text", 1, "info-item__monthly-fee", 3, "nequiCurrencyStyle", "showDecimals"], [1, "info-item__margin-left-20"], ["lines", "none", 1, "info-item", 3, "nequiMessageManager"], ["id", "loan-info_loan-amount-with-commission_label", 1, "info-item__label"], ["id", "loan-info_loan-amount-with-commission_text", 1, "info-item__value", 3, "nequiCurrencyStyle", "showDecimals"], ["id", "loan-info_how-much-is-the-interest_label", 1, "info-item__label"], ["lines", "none", 1, "info-item"], ["id", "loan-info_monthly-insurance-amount_label", 1, "info-item__label"], ["id", "loan-info_monthly-insurance-amount_text", 1, "info-item__value"], ["class", "nequi-footer ion-no-border", 4, "ngIf"], [1, "nequi-header"], ["slot", "start"], ["id", "loan-info_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], ["slot", "end"], ["id", "loan-info_share_button", 3, "click"], ["slot", "icon-only", 3, "src"], ["id", "loan-info_save_button", 3, "click"], [1, "nequi-footer", "ion-no-border"], [1, "nequi-footer__message"], ["id", "loan-info_continue_button", "expand", "block", "color", "guayaba", 1, "nequi-footer__button", 3, "click"]], template: function LoanInfoPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, LoanInfoPage_ion_header_0_Template, 12, 6, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-content", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-text", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-item", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-label", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "ion-text", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-list", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ion-item", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ion-label", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "ion-text", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "ion-item", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "ion-label", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](24, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "ion-text", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "ion-item", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "ion-label", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](30, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "ion-text", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, LoanInfoPage_ion_footer_33_Template, 8, 6, "ion-footer", 15);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isScreenShotTaken);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 16, ctx.config.i18n.loanInfo.headerTitle), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 18, ctx.config.i18n.loanInfo.whatYouAskedFor), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nequiCurrencyStyle", ctx.viewModel.loanAmount)("showDecimals", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nequiMessageManager", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](30, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 20, ctx.config.i18n.loanInfo.howMach.info)));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 22, ctx.config.i18n.loanInfo.howMach.label), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nequiCurrencyStyle", ctx.viewModel.monthlyFee)("showDecimals", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nequiMessageManager", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](32, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](20, 24, ctx.ensuranceMessage)));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](24, 26, ctx.config.i18n.loanInfo.lifeEnsurance.label), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nequiCurrencyStyle", ctx.viewModel.monthlyInsuranceAmount)("showDecimals", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](30, 28, ctx.config.i18n.loanInfo.paymentDate), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.viewModel.expirationText);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isScreenShotTaken);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], _ui_src_lib_directives_nequi_currency_style_nequi_currency_style_directive__WEBPACK_IMPORTED_MODULE_17__["NequiCurrencyStyleDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonList"], _ui_src_lib_directives_message_manager_message_manager_directive__WEBPACK_IMPORTED_MODULE_18__["MessageManagerDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonFooter"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__["TranslatePipe"]], styles: [".info-item[_ngcontent-%COMP%]::part(native) {\n  --padding-top: 10px;\n  --padding-bottom: 0px;\n  --padding-start: 0px;\n}\n.info-item__content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: flex-start;\n  gap: 5px;\n}\n.info-item__label[_ngcontent-%COMP%], .info-item__monthly-fee_under-text[_ngcontent-%COMP%] {\n  color: var(--gray-60);\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 17px;\n}\n.info-item__monthly-fee[_ngcontent-%COMP%] {\n  color: var(--medianoche);\n  font-style: normal;\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 29px;\n}\n.info-item__value[_ngcontent-%COMP%] {\n  color: var(--medianoche);\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 19px;\n}\n.info-item__message[_ngcontent-%COMP%] {\n  margin-top: -10px;\n}\n.info-item__footer-info[_ngcontent-%COMP%] {\n  color: var(--gray-alert-message);\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 14px;\n  margin: 10px 15px;\n}\n.info-item__margin-left-20[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n#loan-info_save_button[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvbG9hbi1pbmZvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtBQUFKO0FBR0U7RUFDRSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLFFBQUE7QUFESjtBQUlFO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBRko7QUFLRTtFQUNFLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUhKO0FBVUU7RUFDRSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFSSjtBQVdFO0VBQ0UsaUJBQUE7QUFUSjtBQVlFO0VBQ0UsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFWSjtBQWFFO0VBQ0UsaUJBQUE7QUFYSjtBQWVBO0VBQ0UsYUFBQTtBQVpGIiwiZmlsZSI6ImxvYW4taW5mby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5mby1pdGVtIHtcbiAgJjo6cGFydChuYXRpdmUpIHtcbiAgICAtLXBhZGRpbmctdG9wOiAxMHB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgfVxuXG4gICZfX2NvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGdhcDogNXB4O1xuICB9XG5cbiAgJl9fbGFiZWwge1xuICAgIGNvbG9yOiB2YXIoLS1ncmF5LTYwKTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIH1cblxuICAmX19tb250aGx5LWZlZSB7XG4gICAgY29sb3I6IHZhcigtLW1lZGlhbm9jaGUpO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMjlweDtcblxuICAgICZfdW5kZXItdGV4dCB7XG4gICAgICBAZXh0ZW5kIC5pbmZvLWl0ZW1fX2xhYmVsO1xuICAgIH1cbiAgfVxuXG4gICZfX3ZhbHVlIHtcbiAgICBjb2xvcjogdmFyKC0tbWVkaWFub2NoZSk7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICB9XG5cbiAgJl9fbWVzc2FnZSB7XG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIH1cblxuICAmX19mb290ZXItaW5mbyB7XG4gICAgY29sb3I6IHZhcigtLWdyYXktYWxlcnQtbWVzc2FnZSk7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgIG1hcmdpbjogMTBweCAxNXB4O1xuICB9XG5cbiAgJl9fbWFyZ2luLWxlZnQtMjAge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB9XG59XG5cbiNsb2FuLWluZm9fc2F2ZV9idXR0b24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuIl19 */"] });
    return LoanInfoPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_7__["FeatureBasePage"]));



/***/ }),

/***/ "q70c":
/*!***********************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard/pages/ensure-loan/ensure-loan.config.ts ***!
  \***********************************************************************************************************/
/*! exports provided: EnsureLoanConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnsureLoanConfig", function() { return EnsureLoanConfig; });
var EnsureLoanConfig = Object.freeze({
    i18n: {
        insuranceWithNequiBottomSheet: 'lifeguard.ensure-loan.bottom-sheet',
        ensureLoan: {
            content: 'lifeguard.ensure-loan',
            headerTitle: 'lifeguard.ensure-loan.header.title',
            ensureLoanWithNequi: {
                title: 'lifeguard.ensure-loan.ensure-loan-with-nequi.title',
                description: 'lifeguard.ensure-loan.ensure-loan-with-nequi.description',
                tagImg: 'lifeguard.ensure-loan.ensure-loan-with-nequi.tag-img',
                tagLabel: 'lifeguard.ensure-loan.ensure-loan-with-nequi.tag-label',
            },
            ensureLoanWithAnother: {
                title: 'lifeguard.ensure-loan.ensure-loan-with-another.title',
                description: 'lifeguard.ensure-loan.ensure-loan-with-another.description',
                tagImg: 'lifeguard.ensure-loan.ensure-loan-with-another.tag-img',
                tagLabel: 'lifeguard.ensure-loan.ensure-loan-with-another.tag-label',
            },
            moreInfoButton: 'lifeguard.ensure-loan.more-info-button',
        },
        logs: 'lifeguard.ensure-loan.logs',
    },
    goTo: {
        loanInfo: '/admin/credits/lifeguard/loan-info',
    },
    idSelectors: {
        continueButtonId: 'info-list_continue_button',
        chooseButtonId: 'info-list_choose_button',
        policyButtonId: 'info-list_policy_button',
    },
    insuranceCarrier: 'Suramericana de Seguros S.A.',
});


/***/ }),

/***/ "qofs":
/*!**********************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard/utils/user-payment-amount.validator.ts ***!
  \**********************************************************************************************************/
/*! exports provided: UserPaymentAmountValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPaymentAmountValidator", function() { return UserPaymentAmountValidator; });
var UserPaymentAmountValidator = /** @class */ (function () {
    function UserPaymentAmountValidator() {
    }
    UserPaymentAmountValidator.userPaymentAmountValidator = function (totalAmount, normalInterest, approvedValue) {
        return function (control) {
            if (totalAmount <= parseFloat(control.value)) {
                return null;
            }
            var isUserPaymentAmount = normalInterest ? control.value > approvedValue - 1 : false;
            return isUserPaymentAmount ? { userPaymentAmount: { value: control.value } } : null;
        };
    };
    return UserPaymentAmountValidator;
}());



/***/ }),

/***/ "r704":
/*!**********************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard/config/lifeguard.config.ts ***!
  \**********************************************************************************************/
/*! exports provided: LifeGuardConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifeGuardConfig", function() { return LifeGuardConfig; });
var config = {
    i18n: {
        moduleKey: 'lifeguard',
        creditsModuleKey: 'credits',
        contractModuleKey: 'credits/contract',
    },
    applicationData: {
        lifeguardRescheduleAlreadyStarted: 'lifeguard.reschedule-already-started',
    },
};
var LifeGuardConfig = Object.freeze(config);


/***/ }),

/***/ "tRkG":
/*!*******************************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard/pages/know-us-better-engine/know-us-better-engine.config.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: KnowUsBetterEngineConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnowUsBetterEngineConfig", function() { return KnowUsBetterEngineConfig; });
var KnowUsBetterEngineConfig = Object.freeze({
    i18n: {
        approvalFront: 'credits.approval-front',
    },
    routes: {
        preapproved: '/admin/credits/lifeguard',
        dashboard: '/admin/dashboard',
    },
});


/***/ }),

/***/ "trfP":
/*!*****************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard/organisms/preapproved/preapproved.organism.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: PreApprovedOrganism */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreApprovedOrganism", function() { return PreApprovedOrganism; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/credits/core */ "42wy");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _organisms_approval_front_approval_front_view_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../organisms/approval-front/approval-front.view-model */ "pwQe");
/* harmony import */ var _services_credit_info_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/credit-info.model */ "9FmH");
/* harmony import */ var _services_credit_logger_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../services/credit-logger.service */ "2ibl");
/* harmony import */ var _pages_home_home_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../pages/home/home.config */ "mB9U");
/* harmony import */ var _pages_home_home_view_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../pages/home/home.view-model */ "TR9s");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../../ui/src/lib/directives/animate-title-on-scroll/animate-title-on-scroll.directive */ "qbWi");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_card_money_slider_card_money_slider_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../components/card-money-slider/card-money-slider.component */ "5ecc");
/* harmony import */ var _ui_src_lib_components_view_detail_view_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../../../ui/src/lib/components/view-detail/view-detail.component */ "yT3N");

























var PreApprovedOrganism = /** @class */ (function () {
    function PreApprovedOrganism(currencyPipe, creditInfoModel, navigatorProvider, creditInteractor, creditLoggerService, approvalFrontViewModel) {
        this.currencyPipe = currencyPipe;
        this.creditInfoModel = creditInfoModel;
        this.navigatorProvider = navigatorProvider;
        this.creditInteractor = creditInteractor;
        this.creditLoggerService = creditLoggerService;
        this.approvalFrontViewModel = approvalFrontViewModel;
        this.navigateTo = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.config = _pages_home_home_config__WEBPACK_IMPORTED_MODULE_11__["LifeGuardConfig"];
        this.detailColor = _nequi_ui__WEBPACK_IMPORTED_MODULE_6__["ViewDetailStatus"].GRAY;
        this.colorGreen = _nequi_ui__WEBPACK_IMPORTED_MODULE_6__["ChipColor"].GREEN;
        this.colorRed = _nequi_ui__WEBPACK_IMPORTED_MODULE_6__["ChipColor"].RED;
        this.details = [];
        this.messagesMapped = null;
        this.viewModel = new _pages_home_home_view_model__WEBPACK_IMPORTED_MODULE_12__["HomeViewModel"]();
    }
    PreApprovedOrganism.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.messagesMapped = Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_7__["toCamelCaseProperties"])(this.messages);
                        this.viewModel.initForm();
                        this.setViewModel(this.data);
                        return [4 /*yield*/, this.loadDetails()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PreApprovedOrganism.prototype.goBack = function () {
        this.navigatorProvider.back();
    };
    PreApprovedOrganism.prototype.goToPaymentGuarantees = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.creditInfoModel.creditFeatureInfo = {
                            loanAmount: this.viewModel.financingAmount.value,
                            monthlyFee: this.getMonthlyFee(),
                            installment: this.viewModel.maxInstallments,
                            expirationDateText: this.viewModel.expirtationDateText,
                            monthlyInterestRate: this.getMonthlyInterestRate(),
                            commissionPercentage: this.viewModel.commission.percentage,
                        };
                        return [4 /*yield*/, this.registerAmountLog()];
                    case 1:
                        _a.sent();
                        this.navigateTo.emit();
                        return [2 /*return*/];
                }
            });
        });
    };
    PreApprovedOrganism.prototype.updateDetails = function () {
        var monthlyFee = this.getMonthlyFee();
        this.details[0].description = this.currencyPipe.transform(monthlyFee);
        this.details[1].description = this.currencyPipe.transform(this.viewModel.financingAmount.value + monthlyFee);
    };
    PreApprovedOrganism.prototype.setViewModel = function (data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.creditInfoModel.creditFeatureInfo = {
                    approveDate: this.data.approvedAt,
                };
                this.viewModel.financingAmount.setValue(data.minAmount);
                this.viewModel.minAmount = data.minAmount;
                this.viewModel.maxAmount = data.maxAmount;
                this.viewModel.isMinAmountPreaproved = data.minAmount === data.maxAmount;
                this.viewModel.commission = data.product.commission;
                this.viewModel.maxInstallments = data.maxInstallment;
                this.viewModel.expirtationDateText = data.expirationDateText;
                this.viewModel.preapprovedLabel = !this.viewModel.isMinAmountPreaproved
                    ? this.messagesMapped.amount.howMuch
                    : this.messagesMapped.amount.min;
                this.approvalFrontIsCall();
                return [2 /*return*/];
            });
        });
    };
    PreApprovedOrganism.prototype.approvalFrontIsCall = function () {
        if (this.approvalFrontViewModel.info.isFromApproval) {
            var installmentList = this.approvalFrontViewModel.info.installmentList;
            if ((installmentList === null || installmentList === void 0 ? void 0 : installmentList.length) > 0) {
                this.viewModel.maxInstallments = installmentList[installmentList.length - 1].installment;
                this.viewModel.maxAmount = installmentList[installmentList.length - 1].value;
            }
        }
    };
    PreApprovedOrganism.prototype.loadDetails = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, label, how, when, help;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                _a = this.messagesMapped.monthlyPaymentAmount, label = _a.label, how = _a.how, when = _a.when, help = _a.help;
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
                        description: this.data.expirationAt.toString(),
                    },
                ];
                this.updateDetails();
                return [2 /*return*/];
            });
        });
    };
    PreApprovedOrganism.prototype.registerAmountLog = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.setLog(this.config.i18n.logs);
                return [2 /*return*/];
            });
        });
    };
    PreApprovedOrganism.prototype.getMonthlyFee = function () {
        return this.creditInteractor.getCommission({
            amount: this.viewModel.financingAmount.value,
            commission: this.viewModel.commission,
        });
    };
    PreApprovedOrganism.prototype.getMonthlyInterestRate = function () {
        var months = 12;
        var fee = 1;
        var p100 = 100;
        return Math.pow((fee + this.viewModel.commission.percentage / p100), (fee / months)) - fee;
    };
    PreApprovedOrganism.prototype.setLog = function (messages) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.creditLoggerService.save({ flowType: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__["FlowType"].PROPELLER, i18nKey: messages });
                return [2 /*return*/];
            });
        });
    };
    PreApprovedOrganism.ɵfac = function PreApprovedOrganism_Factory(t) { return new (t || PreApprovedOrganism)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_credit_info_model__WEBPACK_IMPORTED_MODULE_9__["CreditInfoModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_4__["NavigatorProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["CreditInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_credit_logger_service__WEBPACK_IMPORTED_MODULE_10__["CreditLoggerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_organisms_approval_front_approval_front_view_model__WEBPACK_IMPORTED_MODULE_8__["ApprovalFrontViewModel"])); };
    PreApprovedOrganism.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PreApprovedOrganism, selectors: [["app-preapproved-organism"]], inputs: { messages: "messages", data: "data", organismId: "organismId" }, outputs: { navigateTo: "navigateTo" }, decls: 21, vars: 20, consts: [[1, "nequi-header"], ["slot", "start"], [3, "id", "click"], ["slot", "icon-only", "name", "arrow-back-outline"], [1, "nequi-header__title", "ion-text-start"], ["scrollEvents", "true", "appAnimateTitleOnScroll", "", "fullscreen", "true", 1, "ion-content--white", "ion-padding-horizontal"], [1, "nequi-title"], [3, "formGroup"], [3, "id", "icon", "title", "amount", "minAmount", "maxAmount", "stepAmount", "showDecimals", "formControl", "hideSlider", "amountChange"], [1, "lifeguard-detail"], [3, "title", "status", "details"], [1, "nequi-footer__message"], [1, "nequi-footer", "ion-no-border"], ["expand", "block", "color", "guayaba", 1, "nequi-footer__button", 3, "id", "click"]], template: function PreApprovedOrganism_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PreApprovedOrganism_Template_ion_button_click_3_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-title", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-content", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-text", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "form", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "nequi-card-money-slider", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("amountChange", function PreApprovedOrganism_Template_nequi_card_money_slider_amountChange_12_listener() { return ctx.updateDetails(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "app-view-detail", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ion-text", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "ion-footer", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "ion-button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PreApprovedOrganism_Template_ion_button_click_19_listener() { return ctx.goToPaymentGuarantees(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "", ctx.organismId, "_go-back_button");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.messagesMapped.header.title, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.messagesMapped.header.title);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.viewModel.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "", ctx.organismId, "_card_slider");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.config.airIcon)("title", ctx.viewModel.preapprovedLabel)("amount", ctx.viewModel.financingAmount.value)("minAmount", ctx.viewModel.minAmount)("maxAmount", ctx.viewModel.maxAmount)("stepAmount", ctx.config.stepAmount)("showDecimals", false)("formControl", ctx.viewModel.form.get("financingAmount"))("hideSlider", ctx.viewModel.isMinAmountPreaproved);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx.messagesMapped.subtitle)("status", ctx.detailColor)("details", ctx.details);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.messagesMapped.footer.authorization);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "", ctx.organismId, "_ready_button");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.messagesMapped.footer.readyButton.text, " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_13__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["IonContent"], _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_14__["AnimateTitleOnScrollDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["IonText"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormGroupDirective"], _components_card_money_slider_card_money_slider_component__WEBPACK_IMPORTED_MODULE_16__["CardMoneySliderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormControlDirective"], _ui_src_lib_components_view_detail_view_detail_component__WEBPACK_IMPORTED_MODULE_17__["ViewDetailComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["IonFooter"]], styles: [".info-item[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem;\n}\n.info-item__label[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.lifeguard-detail[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.lifeguard__footer-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--gray-70);\n  margin: 1rem 16px;\n}\n.nequi-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.nequi-footer__message[_ngcontent-%COMP%] {\n  margin: 8px 16px;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvcHJlYXBwcm92ZWQub3JnYW5pc20uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FBQ0Y7QUFBRTtFQUNFLGVBQUE7QUFFSjtBQUVBO0VBQ0UsZ0JBQUE7QUFDRjtBQUdFO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFBSjtBQUtFO0VBQ0UsVUFBQTtBQUZKO0FBS0U7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBSEoiLCJmaWxlIjoicHJlYXBwcm92ZWQub3JnYW5pc20uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbmZvLWl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAwLjNyZW07XG4gICZfX2xhYmVsIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cblxuLmxpZmVndWFyZC1kZXRhaWwge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4ubGlmZWd1YXJkIHtcbiAgJl9fZm9vdGVyLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogdmFyKC0tZ3JheS03MCk7XG4gICAgbWFyZ2luOiAxcmVtIDE2cHg7XG4gIH1cbn1cblxuLm5lcXVpLWZvb3RlciB7XG4gIGlvbi10b29sYmFyIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgJl9fbWVzc2FnZSB7XG4gICAgbWFyZ2luOiA4cHggMTZweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG59XG4iXX0= */"] });
    return PreApprovedOrganism;
}());



/***/ }),

/***/ "vRqB":
/*!***********************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard/lifeguard-routing.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: LifeguardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifeguardRoutingModule", function() { return LifeguardRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _middlewares_lifeguard_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../middlewares/lifeguard.middleware */ "P+Ai");
/* harmony import */ var _config_lifeguard_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config/lifeguard.config */ "r704");
/* harmony import */ var _pages_ensure_loan_ensure_loan_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/ensure-loan/ensure-loan.page */ "NBrM");
/* harmony import */ var _pages_gender_gender_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/gender/gender.page */ "O+xm");
/* harmony import */ var _pages_home_home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/home/home.page */ "5YDh");
/* harmony import */ var _pages_its_serious_its_serious_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/its-serious/its-serious.page */ "OnDc");
/* harmony import */ var _pages_know_us_better_engine_know_us_better_engine_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/know-us-better-engine/know-us-better-engine.page */ "ljt7");
/* harmony import */ var _pages_life_ensurance_life_ensurance_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/life-ensurance/life-ensurance.page */ "M22z");
/* harmony import */ var _pages_loan_info_loan_info_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/loan-info/loan-info.page */ "p20M");
/* harmony import */ var _pages_payment_detail_payment_detail_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/payment-detail/payment-detail.page */ "85bt");
/* harmony import */ var _pages_reschedule_home_reschedule_home_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/reschedule-home/reschedule-home.page */ "4Qcv");
/* harmony import */ var _pages_reschedule_info_reschedule_info_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/reschedule-info/reschedule-info.page */ "W0VE");
/* harmony import */ var _pages_reschedule_payment_reschedule_payment_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/reschedule-payment/reschedule-payment.page */ "Ho00");
/* harmony import */ var _pages_terms_and_conditions_terms_and_conditions_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/terms-and-conditions/terms-and-conditions.page */ "YTzw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ "fXoL");


















var routes = [
    {
        path: '',
        component: _pages_home_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"],
        canActivate: [_middlewares_lifeguard_middleware__WEBPACK_IMPORTED_MODULE_2__["LifeguardMiddleware"]],
    },
    {
        path: 'its-serious',
        component: _pages_its_serious_its_serious_page__WEBPACK_IMPORTED_MODULE_7__["ItsSeriousPage"],
    },
    {
        path: 'life-ensure',
        component: _pages_life_ensurance_life_ensurance_page__WEBPACK_IMPORTED_MODULE_9__["LifeEnsurancePage"],
    },
    {
        path: 'gender',
        component: _pages_gender_gender_page__WEBPACK_IMPORTED_MODULE_5__["GenderPage"],
    },
    {
        path: 'ensure-loan',
        component: _pages_ensure_loan_ensure_loan_page__WEBPACK_IMPORTED_MODULE_4__["EnsureLoanPage"],
    },
    {
        path: 'loan-info',
        component: _pages_loan_info_loan_info_page__WEBPACK_IMPORTED_MODULE_10__["LoanInfoPage"],
    },
    {
        path: 'terms-and-conditions',
        component: _pages_terms_and_conditions_terms_and_conditions_page__WEBPACK_IMPORTED_MODULE_15__["TermsAndConditionsPage"],
    },
    {
        path: 'payment-detail',
        component: _pages_payment_detail_payment_detail_page__WEBPACK_IMPORTED_MODULE_11__["PaymentDetailPage"],
    },
    {
        path: 'reschedule',
        component: _pages_reschedule_home_reschedule_home_page__WEBPACK_IMPORTED_MODULE_12__["RescheduleHomePage"],
    },
    {
        path: 'reschedule-info',
        component: _pages_reschedule_info_reschedule_info_page__WEBPACK_IMPORTED_MODULE_13__["RescheduleInfoPage"],
    },
    {
        path: 'reschedule-payment',
        component: _pages_reschedule_payment_reschedule_payment_page__WEBPACK_IMPORTED_MODULE_14__["ReschedulePaymentPage"],
    },
    {
        path: 'know-us-better-engine',
        component: _pages_know_us_better_engine_know_us_better_engine_page__WEBPACK_IMPORTED_MODULE_8__["KnowUsBetterEnginePage"],
    },
];
var LifeguardRoutingModule = /** @class */ (function () {
    function LifeguardRoutingModule() {
    }
    LifeguardRoutingModule.ɵfac = function LifeguardRoutingModule_Factory(t) { return new (t || LifeguardRoutingModule)(); };
    LifeguardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: LifeguardRoutingModule });
    LifeguardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ imports: [[
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(_nequi_features_commons__WEBPACK_IMPORTED_MODULE_1__["I18nModuleResolver"].setup(routes, [
                    _config_lifeguard_config__WEBPACK_IMPORTED_MODULE_3__["LifeGuardConfig"].i18n.moduleKey,
                    _config_lifeguard_config__WEBPACK_IMPORTED_MODULE_3__["LifeGuardConfig"].i18n.creditsModuleKey,
                    _config_lifeguard_config__WEBPACK_IMPORTED_MODULE_3__["LifeGuardConfig"].i18n.contractModuleKey,
                ])),
            ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return LifeguardRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](LifeguardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zncb":
/*!*******************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard/pages/reschedule-home/reschedule-home.config.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: RescheduleHomeConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RescheduleHomeConfig", function() { return RescheduleHomeConfig; });
/* harmony import */ var _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nequi/features/credits/core */ "42wy");
var _a;

var RescheduleHomeConfig = Object.freeze({
    i18n: {
        maintenance: 'lifeguard.extend-term.maintenance.item-list',
        modification: 'lifeguard.extend-term.modification.item-list',
        modalsErrors: (_a = {},
            _a[_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_0__["RescheduleErrors"].MODAL_ONE] = 'lifeguard.extend-term.modals.one',
            _a[_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_0__["RescheduleErrors"].MODAL_TWO] = 'lifeguard.extend-term.modals.two',
            _a[_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_0__["RescheduleErrors"].MODAL_THREE] = 'lifeguard.extend-term.modals.three',
            _a[_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_0__["RescheduleErrors"].MODAL_FOUR] = 'lifeguard.extend-term.modals.four',
            _a[_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_0__["RescheduleErrors"].MODAL_FIVE] = 'lifeguard.extend-term.modals.five',
            _a),
        modalProcessIsAlreadyStarted: 'lifeguard.extend-term.modals.isAlreadyStarted',
    },
    routes: {
        backpack: '/admin/dashboard',
        haveToPay: '/admin/credits/lifeguard/reschedule-info',
    },
});


/***/ })

}]);
//# sourceMappingURL=products-lifeguard-lifeguard-module.js.map