(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~products-lifeguard-lifeguard-module~products-lifeguard-recharged-lifeguard-recharged-module~~69703029"],{

/***/ "3T9V":
/*!************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/organisms/approval-front/constants/approval-front-module.ts ***!
  \************************************************************************************************************/
/*! exports provided: ApprovalFrontModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovalFrontModule", function() { return ApprovalFrontModule; });
var ApprovalFrontModule;
(function (ApprovalFrontModule) {
    ApprovalFrontModule["YOUR_DOCUMENT"] = "yourDocument";
    ApprovalFrontModule["WHAT_DO_YOU_DO"] = "whatDoYouDo";
    ApprovalFrontModule["YOUR_MONEY"] = "yourMoney";
})(ApprovalFrontModule || (ApprovalFrontModule = {}));


/***/ }),

/***/ "53R8":
/*!**************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/organisms/approval-front/approval-front.config.ts ***!
  \**************************************************************************************************/
/*! exports provided: ApprovalFrontConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovalFrontConfig", function() { return ApprovalFrontConfig; });
/* harmony import */ var _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nequi/features/credits/core */ "42wy");
/* harmony import */ var _nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/features/profile/presentation */ "cLcF");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _constants_approval_front_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants/approval-front-module */ "3T9V");
var _a, _b;




var ApprovalFrontConfig = Object.freeze({
    routes: {
        dashboard: '/admin/dashboard',
        closet: '/admin/store',
        preapprovedHome: '/admin/credits/propeller/preapproved-home',
        currentUrl: '/admin/credits/propeller/know-us-better-engine',
        help: 'https://ayuda.nequi.com.co/hc/es/articles/360042937371',
    },
    navOrder: (_a = {},
        _a[_nequi_ui__WEBPACK_IMPORTED_MODULE_2__["NavButtonCardStatus"].COMPLETED] = 1,
        _a[_nequi_ui__WEBPACK_IMPORTED_MODULE_2__["NavButtonCardStatus"].ACTIVE] = 2,
        _a[_nequi_ui__WEBPACK_IMPORTED_MODULE_2__["NavButtonCardStatus"].INACTIVE] = 3,
        _a),
    navButtons: [
        {
            id: _constants_approval_front_module__WEBPACK_IMPORTED_MODULE_3__["ApprovalFrontModule"].YOUR_DOCUMENT,
            leftImage: 'assets/images/propeller/happy-man.svg',
            title: 'credits.approval-front.content.your-document.title',
            description: 'credits.approval-front.content.your-document.description',
            link: '/admin/credits/propeller/profile/my-info/document-guide',
            status: _nequi_ui__WEBPACK_IMPORTED_MODULE_2__["NavButtonCardStatus"].INACTIVE,
            config: {
                sourceFlow: _nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_1__["SourceFlow"].BREAK_CEILING,
            },
        },
        {
            id: _constants_approval_front_module__WEBPACK_IMPORTED_MODULE_3__["ApprovalFrontModule"].WHAT_DO_YOU_DO,
            leftImage: 'assets/images/propeller/suitcase.svg',
            title: 'credits.approval-front.content.what-do-you-do.title',
            description: 'credits.approval-front.content.what-do-you-do.description',
            link: '/admin/credits/propeller/occupation-engine',
            status: _nequi_ui__WEBPACK_IMPORTED_MODULE_2__["NavButtonCardStatus"].INACTIVE,
        },
        {
            id: _constants_approval_front_module__WEBPACK_IMPORTED_MODULE_3__["ApprovalFrontModule"].YOUR_MONEY,
            leftImage: 'assets/images/propeller/money.svg',
            title: 'credits.approval-front.content.your-money.title',
            description: 'credits.approval-front.content.your-money.description',
            link: '/admin/credits/propeller/your-money-engine',
            status: _nequi_ui__WEBPACK_IMPORTED_MODULE_2__["NavButtonCardStatus"].INACTIVE,
        },
    ],
    documentStatus: {
        notImage: '0',
        defaultStatus: '1',
        noValidated: '3',
        validated: '2',
        rejected: '6',
        requestMoreInfo: '7',
        requestMoreInfoWithKofaxError: '8',
    },
    errorCode: {
        userDontHaveImagesError: '11-9L',
        numbersNotMatch: '36-8L',
        kofaxSystemDisabled: '36-1L',
        yourDataNotMatch: '36-9L',
        wrongName: '11-98L',
        wrongNumber: '11-99L',
    },
    flowsWithExtraction: ['FE'],
    colors: {
        midnight: 'medianoche',
    },
    analytics: {
        intentionOfRejection: (_b = {},
            _b[_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_0__["WrongDontComplyWithRiskPoliciesException"].name] = {
                name: 'motivo_rechazo_politicas_riesgo',
            },
            _b[_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_0__["HadObligationsInMoraException"].name] = {
                name: 'motivo_rechazo_mora',
            },
            _b[_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_0__["WrongDontUserInCentralsException"].name] = {
                name: 'motivo_rechazo_info_centrales',
            },
            _b[_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_0__["WrongMeetsPaymentCapacityException"].name] = {
                name: 'motivo_rechazo_capacidad_pago',
            },
            _b.params = {
                cleverTap: ['error'],
            },
            _b),
        intentionOfBegin: {
            name: 'motor_modulos',
        },
        intentionOfSucces: {
            name: 'motor_exitoso',
            params: {
                dynatrace: [
                    'motor_aprobado',
                    'motor_valor_aprobado',
                    'motor_numero_cuotas',
                    'error_code',
                    'error_name',
                ],
            },
        },
    },
    i18n: {
        approvalFrontTimeout: 'credits.home.alert.approval-front.time-out',
    },
    additionalIncomes: {
        retired: '05',
        independent: '03',
    },
});


/***/ }),

/***/ "5ecc":
/*!************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/components/card-money-slider/card-money-slider.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: MIN_AMOUNT, MAX_AMOUNT, CardMoneySliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_AMOUNT", function() { return MIN_AMOUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_AMOUNT", function() { return MAX_AMOUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardMoneySliderComponent", function() { return CardMoneySliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ui_src_lib_directives_nequi_currency_style_nequi_currency_style_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../ui/src/lib/directives/nequi-currency-style/nequi-currency-style.directive */ "kVXI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function CardMoneySliderComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-range", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function CardMoneySliderComponent_ng_container_8_Template_ion_range_ionChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.setValue($event.detail.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-text", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "ion-text", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.isDisabled)("value", ctx_r0.amount)("min", ctx_r0.minAmount)("max", ctx_r0.maxAmount)("step", ctx_r0.stepAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nequiCurrencyStyle", ctx_r0.minAmount)("showDecimals", ctx_r0.showDecimals);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nequiCurrencyStyle", ctx_r0.maxAmount)("showDecimals", ctx_r0.showDecimals);
} }
var MIN_AMOUNT = 0;
var MAX_AMOUNT = 100000;
var STEP_AMOUNT = 10000;
var CardMoneySliderComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CardMoneySliderComponent, _super);
    function CardMoneySliderComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.amount = MIN_AMOUNT;
        _this.minAmount = MIN_AMOUNT;
        _this.maxAmount = MAX_AMOUNT;
        _this.stepAmount = STEP_AMOUNT;
        _this.isDisabled = false;
        _this.hideSlider = false;
        _this.showDecimals = false;
        _this.amountChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return _this;
    }
    CardMoneySliderComponent.prototype.ngOnChanges = function (changes) {
        if (changes.minAmount || changes.maxAmount) {
            this.isDisabled = false;
            this.validateAmounts();
        }
    };
    CardMoneySliderComponent.prototype.ngAfterViewInit = function () {
        this.validateAmounts();
    };
    CardMoneySliderComponent.prototype.setValue = function (value) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                _super.prototype.setValue.call(this, value);
                this.amount = value;
                this.amountChange.emit(value);
                return [2 /*return*/];
            });
        });
    };
    CardMoneySliderComponent.prototype.validateAmounts = function () {
        if (this.maxAmount === this.minAmount) {
            this.isDisabled = true;
        }
        if (this.maxAmount < this.minAmount) {
            this.minAmount = MIN_AMOUNT;
            this.maxAmount = MAX_AMOUNT;
        }
        this.amount =
            this.amount < this.minAmount || this.amount > this.maxAmount ? this.minAmount : this.amount;
    };
    CardMoneySliderComponent.ɵfac = function CardMoneySliderComponent_Factory(t) { return ɵCardMoneySliderComponent_BaseFactory(t || CardMoneySliderComponent); };
    CardMoneySliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CardMoneySliderComponent, selectors: [["nequi-card-money-slider"]], inputs: { icon: "icon", title: "title", amount: "amount", minAmount: "minAmount", maxAmount: "maxAmount", stepAmount: "stepAmount", isDisabled: "isDisabled", hideSlider: "hideSlider", showDecimals: "showDecimals" }, outputs: { amountChange: "amountChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return CardMoneySliderComponent; }),
                    multi: true,
                },
            ]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 9, vars: 5, consts: [[1, "card-money-slider"], [1, "card-money-slider__icon"], [3, "src"], ["lines", "none", 1, "card-money-slider__item"], [1, "card-money-slider__title"], [1, "card-money-slider__amount", 3, "nequiCurrencyStyle", "showDecimals"], [4, "ngIf"], [1, "card-money-slider__slider-range", 3, "disabled", "value", "min", "max", "step", "ionChange"], ["slot", "start", 1, "card-money-slider__min-amount", 3, "nequiCurrencyStyle", "showDecimals"], ["slot", "end", 1, "card-money-slider__max-amount", 3, "nequiCurrencyStyle", "showDecimals"]], template: function CardMoneySliderComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-card", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-item", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-item", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "ion-text", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CardMoneySliderComponent_ng_container_8_Template, 6, 9, "ng-container", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.icon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nequiCurrencyStyle", ctx.amount)("showDecimals", ctx.showDecimals);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.hideSlider);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonText"], _ui_src_lib_directives_nequi_currency_style_nequi_currency_style_directive__WEBPACK_IMPORTED_MODULE_5__["NequiCurrencyStyleDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRange"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["SelectValueAccessor"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.card-money-slider[_ngcontent-%COMP%] {\n  --background: var(--medianoche);\n  box-shadow: 0px 1px 1px var(--box-shadow-a-015);\n  border-radius: 8px;\n  margin: 0;\n  padding: 24px 0;\n}\n\n.card-money-slider__item[_ngcontent-%COMP%]::part(native) {\n  --padding-start: 0px;\n  --highlight-background: 0px;\n  --inner-padding-end: 0px;\n  --min-height: 18px;\n  background: var(--medianoche);\n}\n\n.card-money-slider__icon[_ngcontent-%COMP%] {\n  position: absolute;\n  float: right;\n  right: 0;\n  z-index: 2;\n  top: 14px;\n  --background: transparent;\n}\n\n.card-money-slider__title[_ngcontent-%COMP%] {\n  --color: var(--white);\n  font-weight: 500;\n  font-size: 16px;\n  margin: 0 24px 2px;\n}\n\n.card-money-slider__amount[_ngcontent-%COMP%] {\n  color: var(--white);\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 28.8px;\n  margin-left: 24px;\n  margin-right: 24px;\n}\n\n.card-money-slider__min-amount[_ngcontent-%COMP%], .card-money-slider__max-amount[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 14.4px;\n  flex: none;\n  color: var(--white);\n  margin: 0;\n  padding: 0 24px;\n}\n\n.card-money-slider__slider-range[_ngcontent-%COMP%] {\n  --bar-height: 8px;\n  --bar-border-radius: 16px;\n  padding: 0 24px;\n}\n\n.card-money-slider__slider-range[_ngcontent-%COMP%]::part(bar) {\n  background: var(--white);\n}\n\n.card-money-slider__slider-range[_ngcontent-%COMP%]::part(bar-active) {\n  background: linear-gradient(270deg, var(--guayaba) 2.45%, var(--ultravioleta) 98.16%);\n}\n\n.card-money-slider__slider-range[_ngcontent-%COMP%]::part(knob) {\n  border: 2px solid var(--white);\n  background: var(--guayaba);\n  top: calc(50% - (var(--knob-size) + 4px) / 2);\n  left: calc(50% - (var(--knob-size) + 4px) / 2);\n  box-shadow: black 0px 4px 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvY2FyZC1tb25leS1zbGlkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0Y7O0FBQ0E7RUFDRSwrQkFBQTtFQUNBLCtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUNJO0VBQ0Usb0JBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQUNOOztBQUdFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7QUFESjs7QUFJRTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFGSjs7QUFLRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBSEo7O0FBTUU7RUFFRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBTEo7O0FBUUU7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQU5KOztBQVFJO0VBQ0Usd0JBQUE7QUFOTjs7QUFTSTtFQUNFLHFGQUFBO0FBUE47O0FBVUk7RUFDRSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkNBQUE7RUFDQSw4Q0FBQTtFQUNBLDhCQUFBO0FBUk4iLCJmaWxlIjoiY2FyZC1tb25leS1zbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmNhcmQtbW9uZXktc2xpZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1tZWRpYW5vY2hlKTtcbiAgYm94LXNoYWRvdzogMHB4IDFweCAxcHggdmFyKC0tYm94LXNoYWRvdy1hLTAxNSk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAyNHB4IDA7XG5cbiAgJl9faXRlbSB7XG4gICAgJjo6cGFydChuYXRpdmUpIHtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgICAgLS1oaWdobGlnaHQtYmFja2dyb3VuZDogMHB4O1xuICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAgICAgLS1taW4taGVpZ2h0OiAxOHB4O1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tbWVkaWFub2NoZSk7XG4gICAgfVxuICB9XG5cbiAgJl9faWNvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICByaWdodDogMDtcbiAgICB6LWluZGV4OiAyO1xuICAgIHRvcDogMTRweDtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgJl9fdGl0bGUge1xuICAgIC0tY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW46IDAgMjRweCAycHg7XG4gIH1cblxuICAmX19hbW91bnQge1xuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI4LjhweDtcbiAgICBtYXJnaW4tbGVmdDogMjRweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG4gIH1cblxuICAmX19taW4tYW1vdW50LFxuICAmX19tYXgtYW1vdW50IHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMTQuNHB4O1xuICAgIGZsZXg6IG5vbmU7XG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMCAyNHB4O1xuICB9XG5cbiAgJl9fc2xpZGVyLXJhbmdlIHtcbiAgICAtLWJhci1oZWlnaHQ6IDhweDtcbiAgICAtLWJhci1ib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIHBhZGRpbmc6IDAgMjRweDtcblxuICAgICY6OnBhcnQoYmFyKSB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gICAgfVxuXG4gICAgJjo6cGFydChiYXItYWN0aXZlKSB7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCB2YXIoLS1ndWF5YWJhKSAyLjQ1JSwgdmFyKC0tdWx0cmF2aW9sZXRhKSA5OC4xNiUpO1xuICAgIH1cblxuICAgICY6OnBhcnQoa25vYikge1xuICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0td2hpdGUpO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tZ3VheWFiYSk7XG4gICAgICB0b3A6IGNhbGMoNTAlIC0gKHZhcigtLWtub2Itc2l6ZSkgKyA0cHgpIC8gMik7XG4gICAgICBsZWZ0OiBjYWxjKDUwJSAtICh2YXIoLS1rbm9iLXNpemUpICsgNHB4KSAvIDIpO1xuICAgICAgYm94LXNoYWRvdzogcmdiKDAgMCAwKSAwcHggNHB4IDE2cHg7XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
    return CardMoneySliderComponent;
}(_nequi_ui__WEBPACK_IMPORTED_MODULE_3__["InputControlValue"]));

var ɵCardMoneySliderComponent_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](CardMoneySliderComponent);


/***/ }),

/***/ "9FmH":
/*!******************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/services/credit-info.model.ts ***!
  \******************************************************************************/
/*! exports provided: CreditInfoModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditInfoModel", function() { return CreditInfoModel; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

var CreditInfoModel = /** @class */ (function () {
    function CreditInfoModel() {
        this.creditFeatures = null;
        this.agreementInfo = null;
    }
    Object.defineProperty(CreditInfoModel.prototype, "agreement", {
        get: function () {
            return this.agreementInfo;
        },
        set: function (updateAgreement) {
            this.agreementInfo = updateAgreement;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreditInfoModel.prototype, "creditFeatureInfo", {
        get: function () {
            return this.creditFeatures;
        },
        set: function (updateCreditFeatures) {
            this.creditFeatures = updateCreditFeatures;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreditInfoModel.prototype, "loanPortfolioInfo", {
        get: function () {
            return this.loanPortfolio;
        },
        set: function (newLoanPortfolio) {
            this.loanPortfolio = newLoanPortfolio;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreditInfoModel.prototype, "customerCreditInfo", {
        get: function () {
            return this.customerCredit;
        },
        set: function (newCustomerCredit) {
            this.customerCredit = newCustomerCredit;
        },
        enumerable: false,
        configurable: true
    });
    CreditInfoModel.prototype.cleanPreapprovedInfo = function () {
        this.creditFeatures = null;
        this.agreementInfo = null;
    };
    CreditInfoModel.ɵfac = function CreditInfoModel_Factory(t) { return new (t || CreditInfoModel)(); };
    CreditInfoModel.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CreditInfoModel, factory: CreditInfoModel.ɵfac, providedIn: 'root' });
    return CreditInfoModel;
}());



/***/ }),

/***/ "LwLH":
/*!********************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/components/components.module.ts ***!
  \********************************************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _components_card_money_slider_card_money_slider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/card-money-slider/card-money-slider.component */ "5ecc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






var DECLARATIONS = [_components_card_money_slider_card_money_slider_component__WEBPACK_IMPORTED_MODULE_4__["CardMoneySliderComponent"]];
var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule.ɵfac = function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); };
    ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ComponentsModule });
    ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _nequi_ui__WEBPACK_IMPORTED_MODULE_3__["NequiUiModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]]] });
    return ComponentsModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ComponentsModule, { declarations: [_components_card_money_slider_card_money_slider_component__WEBPACK_IMPORTED_MODULE_4__["CardMoneySliderComponent"]], imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _nequi_ui__WEBPACK_IMPORTED_MODULE_3__["NequiUiModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]], exports: [_components_card_money_slider_card_money_slider_component__WEBPACK_IMPORTED_MODULE_4__["CardMoneySliderComponent"]] }); })();


/***/ }),

/***/ "pwQe":
/*!******************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/organisms/approval-front/approval-front.view-model.ts ***!
  \******************************************************************************************************/
/*! exports provided: ApprovalFrontViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovalFrontViewModel", function() { return ApprovalFrontViewModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/features/credits/core */ "42wy");
/* harmony import */ var _nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/profile/presentation */ "cLcF");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/utils/string */ "p6rB");
/* harmony import */ var _approval_front_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./approval-front.config */ "53R8");
/* harmony import */ var _constants_approval_front_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants/approval-front-module */ "3T9V");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








var ApprovalFrontViewModel = /** @class */ (function () {
    function ApprovalFrontViewModel() {
        this.config = _approval_front_config__WEBPACK_IMPORTED_MODULE_5__["ApprovalFrontConfig"];
        this.items = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this.config.navButtons);
        this.modules = {
            barcodeInfo: null,
            occupationData: null,
            yourMoneyData: null,
            documentScan: null,
            completed: 0,
        };
        this.approvalFront = {
            installmentList: null,
            attempt: {
                isCallService: false,
                error: null,
                hasAttempts: false,
                maxAttempt: null,
            },
            isFromApproval: false,
            isAvailable: false,
            currentInstallment: {
                name: null,
                value: null,
                amount: null,
            },
        };
    }
    Object.defineProperty(ApprovalFrontViewModel.prototype, "info", {
        get: function () {
            return this.approvalFront;
        },
        set: function (newApprovalFront) {
            this.approvalFront = newApprovalFront;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApprovalFrontViewModel.prototype, "canContinue", {
        get: function () {
            return !!(this.modules.barcodeInfo &&
                this.modules.occupationData &&
                this.modules.yourMoneyData);
        },
        enumerable: false,
        configurable: true
    });
    ApprovalFrontViewModel.prototype.loadModules = function (data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.modules.completed = 0;
                this.modules.barcodeInfo = this.findModule(data, _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_1__["ModuleCodeEngine"].BARCODE_INFORMATION);
                this.modules.occupationData = this.findModule(data, _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_1__["ModuleCodeEngine"].OCCUPATION);
                this.modules.yourMoneyData = this.findModule(data, _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_1__["ModuleCodeEngine"].INCOME_EXPENSES);
                this.navButtons = this.items.map(function (item) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item), _this.getModuleTexts(item));
                });
                this.navButtons = this.navButtons.sort(function (a, b) { return _this.config.navOrder[a.status] - _this.config.navOrder[b.status]; });
                return [2 /*return*/];
            });
        });
    };
    ApprovalFrontViewModel.prototype.resetValue = function () {
        this.info = {
            installmentList: null,
            attempt: {
                isCallService: false,
                error: null,
                hasAttempts: false,
                maxAttempt: null,
            },
            isFromApproval: false,
            isAvailable: false,
            currentInstallment: {
                name: null,
                value: null,
                amount: null,
            },
        };
    };
    ApprovalFrontViewModel.prototype.findModule = function (data, moduleCode) {
        var _a;
        return ((_a = data.find(function (item) { return item.moduleId === moduleCode; })) === null || _a === void 0 ? void 0 : _a.value) || null;
    };
    ApprovalFrontViewModel.prototype.getModuleTexts = function (item) {
        switch (item.id) {
            case _constants_approval_front_module__WEBPACK_IMPORTED_MODULE_6__["ApprovalFrontModule"].YOUR_DOCUMENT:
                return this.getYourDocument(item.config);
            case _constants_approval_front_module__WEBPACK_IMPORTED_MODULE_6__["ApprovalFrontModule"].WHAT_DO_YOU_DO:
                return this.getWhatDoYouDo();
            case _constants_approval_front_module__WEBPACK_IMPORTED_MODULE_6__["ApprovalFrontModule"].YOUR_MONEY:
                return this.getYourMoney();
        }
    };
    ApprovalFrontViewModel.prototype.getYourDocument = function (configModule) {
        var _a;
        var isCompleted = this.isCompletedDocumentScan(configModule.sourceFlow);
        if (isCompleted && this.modules.barcodeInfo) {
            var textStructure = '{0} {1}';
            return {
                title: Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_4__["createFormat"])(textStructure, [
                    this.modules.barcodeInfo.name1,
                    this.modules.barcodeInfo.lastName1,
                ]),
                description: Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_4__["createFormat"])(textStructure, [
                    this.modules.barcodeInfo.documentType,
                    (_a = this.modules.barcodeInfo.documentNumber) === null || _a === void 0 ? void 0 : _a.toString(),
                ]),
                status: _nequi_ui__WEBPACK_IMPORTED_MODULE_3__["NavButtonCardStatus"].COMPLETED,
            };
        }
        return this.validateModules();
    };
    ApprovalFrontViewModel.prototype.getWhatDoYouDo = function () {
        var _a;
        if (this.modules.occupationData) {
            return {
                title: (_a = this.modules.occupationData.occupation) === null || _a === void 0 ? void 0 : _a.name,
                status: _nequi_ui__WEBPACK_IMPORTED_MODULE_3__["NavButtonCardStatus"].COMPLETED,
            };
        }
        return this.validateModules();
    };
    ApprovalFrontViewModel.prototype.getYourMoney = function () {
        if (this.modules.yourMoneyData) {
            return {
                status: _nequi_ui__WEBPACK_IMPORTED_MODULE_3__["NavButtonCardStatus"].COMPLETED,
            };
        }
        return this.validateModules();
    };
    ApprovalFrontViewModel.prototype.validateModules = function () {
        var status = {
            status: this.modules.completed === 0 ? _nequi_ui__WEBPACK_IMPORTED_MODULE_3__["NavButtonCardStatus"].ACTIVE : _nequi_ui__WEBPACK_IMPORTED_MODULE_3__["NavButtonCardStatus"].INACTIVE,
        };
        this.modules.completed++;
        return status;
    };
    ApprovalFrontViewModel.prototype.isCompletedDocumentScan = function (sourceFlow) {
        var _a, _b, _c;
        var isCaptureComplete = false;
        var hasBarcodeInfo = !!this.modules.barcodeInfo &&
            typeof this.modules.barcodeInfo === 'object' &&
            !!this.modules.barcodeInfo.birthPlace;
        if (this.config.flowsWithExtraction.indexOf(sourceFlow) !== -1) {
            isCaptureComplete =
                ((_a = this.modules.documentScan.data) === null || _a === void 0 ? void 0 : _a.statusAnv) === this.config.documentStatus.validated;
            isCaptureComplete =
                isCaptureComplete ||
                    (((_b = this.modules.documentScan.data) === null || _b === void 0 ? void 0 : _b.statusAnv) === this.config.documentStatus.requestMoreInfo &&
                        hasBarcodeInfo);
            isCaptureComplete =
                isCaptureComplete ||
                    (((_c = this.modules.documentScan.data) === null || _c === void 0 ? void 0 : _c.statusAnv) ===
                        this.config.documentStatus.requestMoreInfoWithKofaxError &&
                        hasBarcodeInfo);
            return isCaptureComplete;
        }
        return this.isSourceFlowYourAccount(sourceFlow);
    };
    ApprovalFrontViewModel.prototype.isSourceFlowYourAccount = function (sourceFlow) {
        var _a, _b, _c;
        return (sourceFlow === _nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_2__["SourceFlow"].YOUR_ACCOUNT &&
            (((_a = this.modules.documentScan.data) === null || _a === void 0 ? void 0 : _a.statusAnv) === this.config.documentStatus.validated ||
                ((_b = this.modules.documentScan.data) === null || _b === void 0 ? void 0 : _b.statusAnv) ===
                    this.config.documentStatus.requestMoreInfoWithKofaxError ||
                ((_c = this.modules.documentScan.data) === null || _c === void 0 ? void 0 : _c.statusAnv) === this.config.documentStatus.noValidated));
    };
    ApprovalFrontViewModel.ɵfac = function ApprovalFrontViewModel_Factory(t) { return new (t || ApprovalFrontViewModel)(); };
    ApprovalFrontViewModel.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: ApprovalFrontViewModel, factory: ApprovalFrontViewModel.ɵfac });
    return ApprovalFrontViewModel;
}());



/***/ })

}]);
//# sourceMappingURL=default~products-lifeguard-lifeguard-module~products-lifeguard-recharged-lifeguard-recharged-module~~69703029.js.map