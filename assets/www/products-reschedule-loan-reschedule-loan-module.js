(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-reschedule-loan-reschedule-loan-module"],{

/***/ "FJxJ":
/*!*********************************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/reschedule-loan/pages/reschedule-loan-home/reschedule-loan-home.page.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: RescheduleLoanHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RescheduleLoanHomePage", function() { return RescheduleLoanHomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _services_reschedule_loan_info_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/reschedule-loan-info.model */ "dxZ7");
/* harmony import */ var _reschedule_loan_home_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reschedule-loan-home.config */ "nvBl");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ui_src_lib_directives_form_content_style_form_content_style_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../../ui/src/lib/directives/form-content-style/form-content-style.directive */ "+XT3");
/* harmony import */ var _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../../ui/src/lib/directives/animate-title-on-scroll/animate-title-on-scroll.directive */ "qbWi");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ui_src_lib_components_radio_card_radio_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../../ui/src/lib/components/radio-card/radio-card.component */ "OJy+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ui_src_lib_pipes_nequi_currency_nequi_currency_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../../ui/src/lib/pipes/nequi-currency/nequi-currency.pipe */ "Vb1S");



















var _c0 = function (a0) { return { installments: a0 }; };
var _c1 = function (a0) { return { monthlyFee: a0 }; };
function RescheduleLoanHomePage_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "nequi-radio-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var option_r1 = ctx.$implicit;
    var optionIndex_r2 = ctx.index;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("prefixId", "reschedule-loan-home_option" + optionIndex_r2)("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 4, ctx_r0.config.i18n.optionTitle, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c0, option_r1.installments)))("note", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 7, ctx_r0.config.i18n.optionDescription, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](14, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 10, option_r1.monthlyFee))))("value", optionIndex_r2);
} }
var RescheduleLoanHomePage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(RescheduleLoanHomePage, _super);
    function RescheduleLoanHomePage(injector, viewModel, analyticsInteractor, dynatraceService) {
        var _this = _super.call(this, injector) || this;
        _this.viewModel = viewModel;
        _this.analyticsInteractor = analyticsInteractor;
        _this.dynatraceService = dynatraceService;
        _this.config = _reschedule_loan_home_config__WEBPACK_IMPORTED_MODULE_6__["RescheduleLoanHomeConfig"];
        return _this;
    }
    RescheduleLoanHomePage.prototype.ngOnInit = function () {
        this.initPage();
    };
    RescheduleLoanHomePage.prototype.ionViewWillLeave = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dynatraceService.setAnalyticsOfEnd()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RescheduleLoanHomePage.prototype.onConfirm = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.setAnalyticsIntentionOfOption()];
                    case 1:
                        _a.sent();
                        this.goToConditionsRescheduleLoan();
                        return [2 /*return*/];
                }
            });
        });
    };
    RescheduleLoanHomePage.prototype.loadData = function () { };
    RescheduleLoanHomePage.prototype.initPage = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.viewModel.initControl();
                        return [4 /*yield*/, this.dynatraceService.setAnalyticsOfEvent({
                                eventName: this.config.analytics.intentionOfOption.name.toLowerCase(),
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RescheduleLoanHomePage.prototype.goToConditionsRescheduleLoan = function () {
        var option = this.viewModel.rescheduleOptionList[this.viewModel.rescheduleOption.value];
        this.navigatorProvider.navigateForward(this.config.routes.conditionsRescheduleLoan, {
            state: {
                productId: this.viewModel.productId,
                debenture: this.viewModel.creditCode,
                nextInstallmentAt: option.nextInstallmentAt,
                totalTerms: option.totalInstallments,
                additionalTerms: option.installments,
                type: option.rescheduleType,
                feeAmount: option.monthlyFee,
            },
        });
    };
    RescheduleLoanHomePage.prototype.setAnalyticsIntentionOfOption = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var eventName, installments, monthlyFee, eventProps, dynatraceProps;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                eventName = this.config.analytics.intentionOfOption.name;
                installments = [];
                monthlyFee = [];
                this.viewModel.rescheduleOptionList.map(function (item) { return [
                    installments.push(item.installments),
                    monthlyFee.push(item.monthlyFee),
                ]; });
                eventProps = [
                    this.viewModel.productId,
                    this.viewModel.rescheduleOptionList[0].rescheduleType,
                    installments.join('-'),
                    monthlyFee.join('-'),
                ];
                this.analyticsInteractor.trackEvent({
                    type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["AnalyticsType"].CLEVERTAP,
                    params: {
                        eventName: eventName,
                        eventProps: Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_4__["stringsArrayToObjectWithValues"])(this.config.analytics.intentionOfOption.params.cleverTap, eventProps),
                    },
                });
                dynatraceProps = Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_4__["stringsArrayToObjectWithValues"])(this.config.analytics.intentionOfOption.params.dynatrace, eventProps);
                this.dynatraceService.setAnalyticsOfProperties(dynatraceProps);
                return [2 /*return*/];
            });
        });
    };
    RescheduleLoanHomePage.ɵfac = function RescheduleLoanHomePage_Factory(t) { return new (t || RescheduleLoanHomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_reschedule_loan_info_model__WEBPACK_IMPORTED_MODULE_5__["RescheduleLoanInfoModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["AnalyticsInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__["DynatraceService"])); };
    RescheduleLoanHomePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RescheduleLoanHomePage, selectors: [["app-credits-reschedule-home-loan"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 26, vars: 18, consts: [[1, "nequi-header", "nequi-header--white"], ["slot", "start"], ["id", "reschedule-loan-home_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], [1, "nequi-header__title", "ion-text-start"], ["fullscreen", "true", "appFormContentStyle", "", "scrollEvents", "true", "appAnimateTitleOnScroll", "", 1, "ion-content--white", "ion-padding-horizontal"], [1, "nequi-title"], ["id", "reschedule-loan-home_description_label", 1, "description"], [3, "formControl"], [4, "ngFor", "ngForOf"], ["id", "reschedule-loan-home_note_label", 1, "note"], [1, "nequi-footer", "ion-no-border"], [1, "nequi-footer__toolbar"], ["id", "reschedule-loan-home_ready_button", "expand", "block", "color", "guayaba", 1, "nequi-footer__button", 3, "disabled", "click"], [3, "prefixId", "title", "note", "value"]], template: function RescheduleLoanHomePage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RescheduleLoanHomePage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-title", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-content", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-text", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-text", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-radio-group", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, RescheduleLoanHomePage_ng_container_17_Template, 5, 16, "ng-container", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-text", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-footer", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-toolbar", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RescheduleLoanHomePage_Template_ion_button_click_23_listener() { return ctx.onConfirm(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 8, ctx.config.i18n.title));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 10, ctx.config.i18n.title), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 12, ctx.config.i18n.description), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.viewModel.rescheduleOption);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.viewModel.rescheduleOptionList);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 14, ctx.config.i18n.note), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.viewModel.rescheduleOption.valid);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 16, ctx.config.i18n.confirmButton), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonContent"], _ui_src_lib_directives_form_content_style_form_content_style_directive__WEBPACK_IMPORTED_MODULE_8__["FormContentStyleDirective"], _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_9__["AnimateTitleOnScrollDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonRadioGroup"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonFooter"], _ui_src_lib_components_radio_card_radio_card_component__WEBPACK_IMPORTED_MODULE_12__["RadioCardComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"], _ui_src_lib_pipes_nequi_currency_nequi_currency_pipe__WEBPACK_IMPORTED_MODULE_14__["NequiCurrencyPipe"]], styles: [".description[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 17px;\n  color: var(--gray-70);\n}\n\n.note[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 14px;\n  color: var(--gray-70);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvcmVzY2hlZHVsZS1sb2FuLWhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFDRiIsImZpbGUiOiJyZXNjaGVkdWxlLWxvYW4taG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVzY3JpcHRpb24ge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIGNvbG9yOiB2YXIoLS1ncmF5LTcwKTtcbn1cblxuLm5vdGUge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1ncmF5LTcwKTtcbn1cbiJdfQ== */"] });
    return RescheduleLoanHomePage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__["FeatureBasePage"]));



/***/ }),

/***/ "KpmF":
/*!***********************************************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/reschedule-loan/pages/conditions-reschedule-loan/conditions-reschedule-loan.config.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: ConditionsRescheduleLoanConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConditionsRescheduleLoanConfig", function() { return ConditionsRescheduleLoanConfig; });
/* harmony import */ var _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nequi/features/credits/core */ "42wy");
var _a, _b;

var rescheduleContent = [
    {
        leftImage: '/assets/images/propeller/umbrella-icon.svg',
        title: 'credits.conditions-reschedule-loan.content.modification.not-affect-your-grade.title',
        description: 'credits.conditions-reschedule-loan.content.modification.not-affect-your-grade.description',
    },
    {
        leftImage: '/assets/images/propeller/warning-icon.svg',
        title: 'credits.conditions-reschedule-loan.content.modification.a-pact.title',
        description: 'credits.conditions-reschedule-loan.content.modification.a-pact.description',
    },
    {
        leftImage: '/assets/images/propeller/eye-icon.svg',
        title: 'credits.conditions-reschedule-loan.content.modification.check-the-best-option.title',
        description: 'credits.conditions-reschedule-loan.content.modification.check-the-best-option.description',
    },
];
var ConditionsRescheduleLoanConfig = Object.freeze({
    i18n: {
        title: 'credits.conditions-reschedule-loan.title',
        headerTitle: 'credits.conditions-reschedule-loan.header-title',
        acceptButton: 'credits.conditions-reschedule-loan.accept-button',
        content: (_a = {},
            _a[_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_0__["RescheduleType"].MODIFICATION] = rescheduleContent,
            _a[_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_0__["RescheduleType"].MAINTENANCE] = rescheduleContent,
            _a[_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_0__["RescheduleType"].RESTRUCTURING] = [
                {
                    leftImage: '/assets/images/propeller/umbrella-icon.svg',
                    title: 'credits.conditions-reschedule-loan.content.restructuring.rating-as-restructured.title',
                    description: 'credits.conditions-reschedule-loan.content.restructuring.rating-as-restructured.description',
                },
                {
                    leftImage: '/assets/images/propeller/warning-icon.svg',
                    title: 'credits.conditions-reschedule-loan.content.restructuring.a-pact.title',
                    description: 'credits.conditions-reschedule-loan.content.restructuring.a-pact.description',
                },
                {
                    leftImage: '/assets/images/propeller/reader-icon.svg',
                    title: 'credits.conditions-reschedule-loan.content.restructuring.check-the-best-option.title',
                    description: 'credits.conditions-reschedule-loan.content.restructuring.check-the-best-option.description',
                },
            ],
            _a),
        confirmation: 'credits.conditions-reschedule-loan.bottom-sheet.confirm',
        pinChallenge: 'credits.conditions-reschedule-loan.pin-challenge',
        rescheduleType: 'credits.conditions-reschedule-loan.reschedule-type',
        cardModal: {
            extendedYourTerm: 'credits.conditions-reschedule-loan.card-modal.extended-your-term',
            almost: 'credits.conditions-reschedule-loan.card-modal.almost',
            duplicateTransaction: 'credits.conditions-reschedule-loan.card-modal.duplicate-transaction',
            timeoutRescheduleLoan: 'credits.conditions-reschedule-loan.card-modal.previous-request-in-process',
            previousRequestInProcess: 'credits.conditions-reschedule-loan.card-modal.previous-request-in-process',
            cannotRescheduleLoanError: 'credits.reschedule-loan.modal.cannot-reschedule-loan-error',
            exceedsMaximumTermError: 'credits.conditions-reschedule-loan.card-modal.exceeds-maximum-term',
        },
        logs: {
            name: 'ampliacion_de_plazo',
            messages: (_b = {},
                _b[_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_0__["RescheduleType"].MODIFICATION] = 'credits.conditions-reschedule-loan.logs.modification',
                _b[_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_0__["RescheduleType"].MAINTENANCE] = 'credits.conditions-reschedule-loan.logs.modification',
                _b[_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_0__["RescheduleType"].RESTRUCTURING] = 'credits.conditions-reschedule-loan.logs.restructuring',
                _b),
        },
    },
    routes: {
        backpack: '/admin/dashboard',
        conditionsRescheduleLoan: '/admin/credits/reschedule-loan/conditions',
    },
    colors: {
        midnight: 'medianoche',
    },
    analytics: {
        intentionOfSuccess: {
            name: 'Alivio_exitoso',
            params: {
                cleverTap: [
                    'Tipo de préstamo',
                    'Tipo de alivio',
                    'Nuevo plazo',
                    'Valor estimado de cuotas',
                ],
                dynatrace: [
                    'product_id',
                    'tipo_alivio',
                    'nuevo_plazo',
                    'nuevo_valor_cuotas',
                    'fecha_limite_pago',
                ],
            },
        },
    },
    formatLogDate: 'yyyy-MM-dd hh:mm:ss',
});


/***/ }),

/***/ "Tm7P":
/*!***********************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/reschedule-loan/reschedule-loan-routing.module.ts ***!
  \***********************************************************************************************************/
/*! exports provided: RescheduleLoanRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RescheduleLoanRoutingModule", function() { return RescheduleLoanRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _middlewares_reschedule_loan_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../middlewares/reschedule-loan.middleware */ "r1wT");
/* harmony import */ var _config_reschedule_loan_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config/reschedule-loan.config */ "wmLn");
/* harmony import */ var _pages_conditions_reschedule_loan_conditions_reschedule_loan_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/conditions-reschedule-loan/conditions-reschedule-loan.page */ "WBN+");
/* harmony import */ var _pages_reschedule_loan_home_reschedule_loan_home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/reschedule-loan-home/reschedule-loan-home.page */ "FJxJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








var routes = [
    {
        path: '',
        canActivate: [_middlewares_reschedule_loan_middleware__WEBPACK_IMPORTED_MODULE_2__["RescheduleLoanMiddleware"]],
        component: _pages_reschedule_loan_home_reschedule_loan_home_page__WEBPACK_IMPORTED_MODULE_5__["RescheduleLoanHomePage"],
    },
    {
        path: 'home',
        component: _pages_reschedule_loan_home_reschedule_loan_home_page__WEBPACK_IMPORTED_MODULE_5__["RescheduleLoanHomePage"],
    },
    {
        path: 'conditions',
        component: _pages_conditions_reschedule_loan_conditions_reschedule_loan_page__WEBPACK_IMPORTED_MODULE_4__["ConditionsRescheduleLoanPage"],
    },
];
var RescheduleLoanRoutingModule = /** @class */ (function () {
    function RescheduleLoanRoutingModule() {
    }
    RescheduleLoanRoutingModule.ɵfac = function RescheduleLoanRoutingModule_Factory(t) { return new (t || RescheduleLoanRoutingModule)(); };
    RescheduleLoanRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: RescheduleLoanRoutingModule });
    RescheduleLoanRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(_nequi_features_commons__WEBPACK_IMPORTED_MODULE_1__["I18nModuleResolver"].setup(routes, [_config_reschedule_loan_config__WEBPACK_IMPORTED_MODULE_3__["RescheduleLoanConfig"].i18n.moduleKey])),
            ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return RescheduleLoanRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](RescheduleLoanRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "WBN+":
/*!*********************************************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/reschedule-loan/pages/conditions-reschedule-loan/conditions-reschedule-loan.page.ts ***!
  \*********************************************************************************************************************************************/
/*! exports provided: ConditionsRescheduleLoanPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConditionsRescheduleLoanPage", function() { return ConditionsRescheduleLoanPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/credits/core */ "42wy");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_date__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/utils/date */ "tGfC");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _nequi_utils_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nequi/utils/string */ "p6rB");
/* harmony import */ var _services_credit_logger_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../services/credit-logger.service */ "2ibl");
/* harmony import */ var _services_reschedule_loan_info_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/reschedule-loan-info.model */ "dxZ7");
/* harmony import */ var _conditions_reschedule_loan_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./conditions-reschedule-loan.config */ "KpmF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ui_src_lib_directives_form_content_style_form_content_style_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../../../ui/src/lib/directives/form-content-style/form-content-style.directive */ "+XT3");
/* harmony import */ var _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../../../ui/src/lib/directives/animate-title-on-scroll/animate-title-on-scroll.directive */ "qbWi");
/* harmony import */ var _ui_src_lib_components_item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../../../ui/src/lib/components/item-detail/item-detail.component */ "Ycc7");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");



























function ConditionsRescheduleLoanPage_app_item_detail_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-item-detail", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
} if (rf & 2) {
    var item_r1 = ctx.$implicit;
    var last_r2 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", item_r1.leftImage)("title", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 4, item_r1.title))("description", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 6, item_r1.description))("line", !last_r2);
} }
var ConditionsRescheduleLoanPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ConditionsRescheduleLoanPage, _super);
    function ConditionsRescheduleLoanPage(viewModel, router, route, cardModalService, currencyPipe, datePipe, confirmInfoBottomSheetService, analyticsInteractor, creditLoggerService, dynatraceService, injector) {
        var _this = _super.call(this, injector) || this;
        _this.viewModel = viewModel;
        _this.router = router;
        _this.route = route;
        _this.cardModalService = cardModalService;
        _this.currencyPipe = currencyPipe;
        _this.datePipe = datePipe;
        _this.confirmInfoBottomSheetService = confirmInfoBottomSheetService;
        _this.analyticsInteractor = analyticsInteractor;
        _this.creditLoggerService = creditLoggerService;
        _this.dynatraceService = dynatraceService;
        _this.config = _conditions_reschedule_loan_config__WEBPACK_IMPORTED_MODULE_13__["ConditionsRescheduleLoanConfig"];
        _this.factoryException = {};
        _this.setExceptionFactory();
        return _this;
    }
    ConditionsRescheduleLoanPage.prototype.ngOnInit = function () {
        this.reschedule = this.router.getCurrentNavigation().extras.state;
        this.viewModel.rescheduleLoanInfo = this.reschedule;
        this.content = this.config.i18n.content[this.reschedule.type];
    };
    ConditionsRescheduleLoanPage.prototype.onConfirm = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.rescheduleLoan();
                return [2 /*return*/];
            });
        });
    };
    ConditionsRescheduleLoanPage.prototype.onTransactionFailed = function (error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.canContinue = true;
                this.manageErrors(error);
                return [2 /*return*/];
            });
        });
    };
    ConditionsRescheduleLoanPage.prototype.onTransactionSuccess = function (expireAt) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingService.hide(true)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.setAnalyticsIntentionOfSuccess(expireAt)];
                    case 2:
                        _a.sent();
                        this.onShowCardModal({
                            i18nMessage: this.config.i18n.cardModal.extendedYourTerm,
                            expireAt: expireAt,
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ConditionsRescheduleLoanPage.prototype.setOriginMoney = function (transaction) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, transaction];
            });
        });
    };
    ConditionsRescheduleLoanPage.prototype.getConfirmationInfo = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages, messageRescheduleType;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                messages = this.translateProvider.get(this.config.i18n.confirmation);
                messageRescheduleType = this.translateProvider.get(this.config.i18n.rescheduleType + "." + this.viewModel.rescheduleLoanInfo.type);
                return [2 /*return*/, {
                        title: messages.title,
                        subtitle: messages.subtitle,
                        items: this.viewModel.buildItems(messageRescheduleType, messages.items, this.currencyPipe),
                        confirmLabel: messages.buttons.confirm,
                        viewCancel: false,
                    }];
            });
        });
    };
    ConditionsRescheduleLoanPage.prototype.showConfirmation = function (_transaction) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var info, data;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getConfirmationInfo()];
                    case 1:
                        info = _a.sent();
                        if (!info) {
                            return [2 /*return*/, true];
                        }
                        return [4 /*yield*/, this.confirmInfoBottomSheetService.show(info)];
                    case 2:
                        data = (_a.sent()).data;
                        return [2 /*return*/, data === true];
                }
            });
        });
    };
    ConditionsRescheduleLoanPage.prototype.rescheduleLoan = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var params, transactionInfo;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.setLog(this.config.i18n.logs);
                this.canContinue = false;
                params = {
                    productId: this.viewModel.rescheduleLoanInfo.productId,
                    loanAccount: this.viewModel.rescheduleLoanInfo.debenture,
                    nextInstallmentAt: this.viewModel.rescheduleLoanInfo.nextInstallmentAt,
                    newInstallment: this.viewModel.rescheduleLoanInfo.totalTerms,
                    additionalTerms: this.viewModel.rescheduleLoanInfo.additionalTerms,
                    rescheduleType: this.viewModel.rescheduleLoanInfo.type,
                };
                transactionInfo = new _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["Transaction"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["OperationType"].LOAN_RESCHEDULE)
                    .withData(params)
                    .useRepository(_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_6__["LoanRescheduleRepository"].name);
                _super.prototype.executeTransaction.call(this, transactionInfo);
                return [2 /*return*/];
            });
        });
    };
    ConditionsRescheduleLoanPage.prototype.onShowCardModal = function (params) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var message, content;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        message = this.translateProvider.get(params.i18nMessage);
                        return [4 /*yield*/, this.contentModal(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, params), { content: (_a = message === null || message === void 0 ? void 0 : message.content) !== null && _a !== void 0 ? _a : message === null || message === void 0 ? void 0 : message.description }))];
                    case 1:
                        content = _b.sent();
                        return [4 /*yield*/, this.cardModalService.show({
                                title: message.title,
                                imgPath: message.image,
                                content: content,
                                buttons: [
                                    {
                                        text: message.buttons.accept,
                                        handler: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                            return [2 /*return*/, this.goToRoute(this.config.routes.backpack)];
                                        }); }); },
                                    },
                                ],
                            })];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ConditionsRescheduleLoanPage.prototype.contentModal = function (params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (params === null || params === void 0 ? void 0 : params.expireAt) {
                    return [2 /*return*/, Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_10__["createFormat"])(params.content, [this.datePipe.transform(params === null || params === void 0 ? void 0 : params.expireAt)])];
                }
                if (params === null || params === void 0 ? void 0 : params.maxTerm) {
                    return [2 /*return*/, Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_10__["createFormat"])(params.content, [params === null || params === void 0 ? void 0 : params.maxTerm])];
                }
                return [2 /*return*/, Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_10__["createFormat"])(params.content, [this.viewModel.creditName])];
            });
        });
    };
    ConditionsRescheduleLoanPage.prototype.goToRoute = function (route) {
        this.navigatorProvider.navigateRoot(route, {
            relativeTo: this.route,
            replaceUrl: true,
        });
    };
    ConditionsRescheduleLoanPage.prototype.setExceptionFactory = function () {
        var _a;
        var _this = this;
        this.factoryException = (_a = {},
            _a[_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_6__["TimeoutRescheduleLoanException"].name] = function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.loadingService.hide(true)];
                        case 1:
                            _a.sent();
                            this.onShowCardModal({ i18nMessage: this.config.i18n.cardModal.timeoutRescheduleLoan });
                            return [2 /*return*/];
                    }
                });
            }); },
            _a[_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_6__["PreviousRequestInProcessException"].name] = function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.loadingService.hide(true)];
                        case 1:
                            _a.sent();
                            this.onShowCardModal({ i18nMessage: this.config.i18n.cardModal.previousRequestInProcess });
                            return [2 /*return*/];
                    }
                });
            }); },
            _a[_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_6__["DuplicateTransactionException"].name] = function () {
                return _this.onShowCardModal({ i18nMessage: _this.config.i18n.cardModal.duplicateTransaction });
            },
            _a[_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_6__["CannotRescheduleLoanException"].name] = function () {
                return _this.onShowCardModal({ i18nMessage: _this.config.i18n.cardModal.cannotRescheduleLoanError });
            },
            _a[_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_6__["ExceedsMaximumTermException"].name] = function (error) {
                var _a;
                return _this.onShowCardModal({
                    i18nMessage: _this.config.i18n.cardModal.exceedsMaximumTermError,
                    maxTerm: (_a = error.data) === null || _a === void 0 ? void 0 : _a.maxTerm,
                });
            },
            _a);
    };
    ConditionsRescheduleLoanPage.prototype.manageErrors = function (error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(error.constructor.name !== _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_6__["PreviousRequestInProcessException"].name &&
                            error.constructor.name !== _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_6__["TimeoutRescheduleLoanException"].name)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.loadingService.hide(false)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (this.factoryException[error.constructor.name]) {
                            this.factoryException[error.constructor.name](error);
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.toastService.showError(error.message)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ConditionsRescheduleLoanPage.prototype.setAnalyticsIntentionOfSuccess = function (expireAt) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var eventName;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        eventName = this.config.analytics.intentionOfSuccess.name;
                        this.analyticsInteractor.trackEvent({
                            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["AnalyticsType"].CLEVERTAP,
                            params: {
                                eventName: eventName,
                                eventProps: Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_9__["stringsArrayToObjectWithValues"])(this.config.analytics.intentionOfSuccess.params.cleverTap, [
                                    this.viewModel.rescheduleLoanInfo.productId,
                                    this.viewModel.rescheduleLoanInfo.type,
                                    this.viewModel.rescheduleLoanInfo.totalTerms,
                                    this.viewModel.rescheduleLoanInfo.feeAmount,
                                ]),
                            },
                        });
                        return [4 /*yield*/, this.dynatraceService.setAnalyticsOfEvent({
                                eventName: eventName.toLowerCase(),
                                eventProps: Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_9__["stringsArrayToObjectWithValues"])(this.config.analytics.intentionOfSuccess.params.dynatrace, [
                                    this.viewModel.rescheduleLoanInfo.productId,
                                    this.viewModel.rescheduleLoanInfo.type,
                                    this.viewModel.rescheduleLoanInfo.totalTerms,
                                    this.viewModel.rescheduleLoanInfo.feeAmount,
                                    Object(_nequi_utils_date__WEBPACK_IMPORTED_MODULE_8__["getFormattedDateTimes"])(expireAt),
                                ]),
                                leave: true,
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ConditionsRescheduleLoanPage.prototype.setLog = function (log) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.creditLoggerService.save({
                            flowType: log.name + "_" + this.viewModel.rescheduleLoanInfo.productId + "|" + this.datePipe.transform(new Date(), this.config.formatLogDate),
                            i18nKey: this.config.i18n.logs.messages[this.reschedule.type],
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ConditionsRescheduleLoanPage.ɵfac = function ConditionsRescheduleLoanPage_Factory(t) { return new (t || ConditionsRescheduleLoanPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_reschedule_loan_info_model__WEBPACK_IMPORTED_MODULE_12__["RescheduleLoanInfoModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_7__["CardModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_7__["ConfirmInfoBottomSheetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["AnalyticsInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_credit_logger_service__WEBPACK_IMPORTED_MODULE_11__["CreditLoggerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__["DynatraceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"])); };
    ConditionsRescheduleLoanPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ConditionsRescheduleLoanPage, selectors: [["app-credits-conditions-reschedule-loan"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 18, vars: 12, consts: [[1, "nequi-header", "nequi-header--white"], ["slot", "start"], ["id", "conditions-reschedule-loan_go-back_button", 3, "disabled", "click"], ["slot", "icon-only", "name", "arrow-back-outline", 1, "white-text"], [1, "nequi-header__title", "ion-text-start"], ["fullscreen", "true", "appFormContentStyle", "", "scrollEvents", "true", "appAnimateTitleOnScroll", "", 1, "ion-content--white", "ion-padding-horizontal"], [1, "nequi-title", "conditions-reschedule-loan__title", 3, "innerHtml"], [1, "margin-top-16"], [3, "icon", "title", "description", "line", 4, "ngFor", "ngForOf"], [1, "nequi-footer", "ion-no-border"], ["id", "conditions-reschedule-loan_accept_button", "expand", "block", "color", "guayaba", 1, "nequi-footer__button", 3, "disabled", "click"], [3, "icon", "title", "description", "line"]], template: function ConditionsRescheduleLoanPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ConditionsRescheduleLoanPage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
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
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "ion-text", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-list", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ConditionsRescheduleLoanPage_app_item_detail_12_Template, 3, 8, "app-item-detail", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ion-footer", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ion-button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ConditionsRescheduleLoanPage_Template_ion_button_click_15_listener() { return ctx.onConfirm(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.canContinue);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 6, ctx.config.i18n.headerTitle));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 8, ctx.config.i18n.title), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.content);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.canContinue);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 10, ctx.config.i18n.acceptButton), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonContent"], _ui_src_lib_directives_form_content_style_form_content_style_directive__WEBPACK_IMPORTED_MODULE_15__["FormContentStyleDirective"], _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_16__["AnimateTitleOnScrollDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonFooter"], _ui_src_lib_components_item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_17__["ItemDetailComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["TranslatePipe"]], styles: [".conditions-reschedule-loan__title[_ngcontent-%COMP%] {\n  line-height: 30px;\n}\n.conditions-reschedule-loan__item[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  border-bottom: 1px solid var(--divisor-line);\n  padding: 8px 0px 16px 0px;\n}\n.conditions-reschedule-loan__item[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0px;\n}\n.conditions-reschedule-loan__item-title[_ngcontent-%COMP%] {\n  color: var(--medianoche);\n  font-style: normal;\n  font-weight: 500;\n  font-size: 17px;\n  line-height: 22px;\n  display: inline;\n  position: relative;\n  top: -10px;\n}\n.conditions-reschedule-loan__item-description[_ngcontent-%COMP%] {\n  color: var(--gray-70);\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 17px;\n  text-overflow: unset;\n  white-space: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvY29uZGl0aW9ucy1yZXNjaGVkdWxlLWxvYW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsaUJBQUE7QUFBSjtBQUdFO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDRDQUFBO0VBQ0EseUJBQUE7QUFESjtBQUdJO0VBQ0Usa0JBQUE7QUFETjtBQUlJO0VBQ0Usd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUZOO0FBS0k7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBSE4iLCJmaWxlIjoiY29uZGl0aW9ucy1yZXNjaGVkdWxlLWxvYW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbmRpdGlvbnMtcmVzY2hlZHVsZS1sb2FuIHtcbiAgJl9fdGl0bGUge1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICB9XG5cbiAgJl9faXRlbSB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWRpdmlzb3ItbGluZSk7XG4gICAgcGFkZGluZzogOHB4IDBweCAxNnB4IDBweDtcblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBib3JkZXItYm90dG9tOiAwcHg7XG4gICAgfVxuXG4gICAgJi10aXRsZSB7XG4gICAgICBjb2xvcjogdmFyKC0tbWVkaWFub2NoZSk7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0b3A6IC0xMHB4O1xuICAgIH1cblxuICAgICYtZGVzY3JpcHRpb24ge1xuICAgICAgY29sb3I6IHZhcigtLWdyYXktNzApO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAgICAgdGV4dC1vdmVyZmxvdzogdW5zZXQ7XG4gICAgICB3aGl0ZS1zcGFjZTogdW5zZXQ7XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
    return ConditionsRescheduleLoanPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__["TransactionBasePage"]));



/***/ }),

/***/ "aAeo":
/*!***************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/reschedule-loan/reschedule-loan.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: RescheduleLoanModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RescheduleLoanModule", function() { return RescheduleLoanModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/profile/presentation */ "cLcF");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components.module */ "LwLH");
/* harmony import */ var _middlewares_reschedule_loan_middleware__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../middlewares/reschedule-loan.middleware */ "r1wT");
/* harmony import */ var _config_reschedule_loan_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./config/reschedule-loan.config */ "wmLn");
/* harmony import */ var _pages_conditions_reschedule_loan_conditions_reschedule_loan_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/conditions-reschedule-loan/conditions-reschedule-loan.page */ "WBN+");
/* harmony import */ var _pages_reschedule_loan_home_reschedule_loan_home_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/reschedule-loan-home/reschedule-loan-home.page */ "FJxJ");
/* harmony import */ var _reschedule_loan_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./reschedule-loan-routing.module */ "Tm7P");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");















var RescheduleLoanModule = /** @class */ (function () {
    function RescheduleLoanModule() {
    }
    RescheduleLoanModule.ɵfac = function RescheduleLoanModule_Factory(t) { return new (t || RescheduleLoanModule)(); };
    RescheduleLoanModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: RescheduleLoanModule });
    RescheduleLoanModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ providers: [
            {
                provide: _nequi_features_commons__WEBPACK_IMPORTED_MODULE_3__["ModuleConfigProvider"],
                useValue: _config_reschedule_loan_config__WEBPACK_IMPORTED_MODULE_10__["RescheduleLoanConfig"],
            },
            _nequi_ui__WEBPACK_IMPORTED_MODULE_6__["ConfirmInfoBottomSheetService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["PercentPipe"],
            _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_4__["DynatraceService"],
            _middlewares_reschedule_loan_middleware__WEBPACK_IMPORTED_MODULE_9__["RescheduleLoanMiddleware"],
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _reschedule_loan_routing_module__WEBPACK_IMPORTED_MODULE_13__["RescheduleLoanRoutingModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
                _nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_5__["FeaturesProfileModule"],
                _nequi_ui__WEBPACK_IMPORTED_MODULE_6__["NequiUiModule"],
            ]] });
    return RescheduleLoanModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](RescheduleLoanModule, { declarations: [_pages_reschedule_loan_home_reschedule_loan_home_page__WEBPACK_IMPORTED_MODULE_12__["RescheduleLoanHomePage"], _pages_conditions_reschedule_loan_conditions_reschedule_loan_page__WEBPACK_IMPORTED_MODULE_11__["ConditionsRescheduleLoanPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
        _reschedule_loan_routing_module__WEBPACK_IMPORTED_MODULE_13__["RescheduleLoanRoutingModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
        _nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_5__["FeaturesProfileModule"],
        _nequi_ui__WEBPACK_IMPORTED_MODULE_6__["NequiUiModule"]] }); })();


/***/ }),

/***/ "dxZ7":
/*!****************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/reschedule-loan/services/reschedule-loan-info.model.ts ***!
  \****************************************************************************************************************/
/*! exports provided: RescheduleLoanInfoModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RescheduleLoanInfoModel", function() { return RescheduleLoanInfoModel; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _nequi_utils_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/utils/string */ "p6rB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



var RescheduleLoanInfoModel = /** @class */ (function () {
    function RescheduleLoanInfoModel() {
    }
    RescheduleLoanInfoModel.prototype.initControl = function () {
        this.rescheduleOption = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]);
    };
    RescheduleLoanInfoModel.prototype.buildItems = function (messageRescheduleType, messages, currencyPipe) {
        var installments = this.rescheduleLoanInfo.totalTerms - this.rescheduleLoanInfo.additionalTerms;
        return [
            {
                label: String(messages.type),
                value: messageRescheduleType,
            },
            {
                label: Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_1__["createFormat"])(messages.term.label, [this.creditName]),
                value: Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_1__["createFormat"])(messages.term.value, [String(installments)]),
            },
            {
                label: messages.termExtensionBy.label,
                value: Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_1__["createFormat"])(messages.termExtensionBy.value, [
                    String(this.rescheduleLoanInfo.additionalTerms),
                ]),
            },
            {
                label: Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_1__["createFormat"])(messages.newTerm.label, [this.creditName]),
                value: Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_1__["createFormat"])(messages.newTerm.value, [String(this.rescheduleLoanInfo.totalTerms)]),
            },
            {
                label: messages.amount.label,
                value: Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_1__["createFormat"])(messages.amount.value, [
                    currencyPipe.transform(this.rescheduleLoanInfo.feeAmount, '', 'symbol', '.0'),
                ]),
            },
        ];
    };
    RescheduleLoanInfoModel.ɵfac = function RescheduleLoanInfoModel_Factory(t) { return new (t || RescheduleLoanInfoModel)(); };
    RescheduleLoanInfoModel.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: RescheduleLoanInfoModel, factory: RescheduleLoanInfoModel.ɵfac, providedIn: 'root' });
    return RescheduleLoanInfoModel;
}());



/***/ }),

/***/ "nvBl":
/*!***********************************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/reschedule-loan/pages/reschedule-loan-home/reschedule-loan-home.config.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: RescheduleLoanHomeConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RescheduleLoanHomeConfig", function() { return RescheduleLoanHomeConfig; });
var RescheduleLoanHomeConfig = Object.freeze({
    i18n: {
        title: 'credits.reschedule-loan.title',
        description: 'credits.reschedule-loan.description',
        note: 'credits.reschedule-loan.note',
        optionTitle: 'credits.reschedule-loan.option-title',
        optionDescription: 'credits.reschedule-loan.option-description',
        confirmButton: 'credits.reschedule-loan.confirm-button',
        modal: {
            cannotRescheduleLoanError: 'credits.reschedule-loan.modal.cannot-reschedule-loan-error',
            paymentOptions: 'credits.reschedule-loan.modal.payment-options',
            unapprovedReliefError: 'credits.reschedule-loan.modal.unapproved-relief-error',
            exceedsMaximumTermError: 'credits.conditions-reschedule-loan.card-modal.exceeds-maximum-term',
            duplicateTransaction: 'credits.conditions-reschedule-loan.card-modal.duplicate-transaction',
        },
        creditName: 'credits.credit-name',
        reportDetail: 'credits.reschedule-loan.report-detail',
    },
    routes: {
        backpack: '/admin/dashboard',
        homeRescheduleLoan: '/admin/credits/reschedule-loan/home',
        conditionsRescheduleLoan: '/admin/credits/reschedule-loan/conditions',
        reportProblem: '/admin/movements/help',
        propeller: '/admin/credits/propeller/payment-home',
    },
    rescheduleOptions: [
        {
            term: 2,
            value: 0,
        },
        {
            term: 3,
            value: 0,
        },
        {
            term: 5,
            value: 0,
        },
    ],
    validPaths: [
        '/admin/dashboard',
        '/admin/store',
        '/admin/notifications',
        '/admin/credits/propeller/payment-home',
        '/admin/credits/lifeguard-recharged/payment-home',
    ],
    analytics: {
        intentionOfRelief: {
            name: 'alivio_intencion',
            params: {
                cleverTap: ['Tipo de préstamo', 'Tipo de alivio'],
                dynatrace: ['product_id'],
            },
        },
        intentionOfOption: {
            name: 'alivio_opciones',
            params: {
                cleverTap: [
                    'Tipo de préstamo',
                    'Tipo de alivio',
                    'Plazos permitidos',
                    'Valor estimado de cuotas',
                ],
                dynatrace: ['product_id', 'tipo_alivio', 'plazos_permitidos', 'valor_estimado_cuotas'],
            },
        },
    },
    fullscreenModal: {
        cssClass: 'modal--white ion-text-center modal--reschedule-loan',
        cssClassButton: 'ion-color-guayaba',
    },
    cardModal: {
        cssClassButton: 'imedianoche',
    },
    finishDateFormat: 'dd \'de\' MMMM \'de\' yyyy \'a las\' hh:mm aa',
    nextExtensionDateFormat: 'dd \'de\' MMMM \'de\' yyyy',
});


/***/ }),

/***/ "r1wT":
/*!******************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/middlewares/reschedule-loan.middleware.ts ***!
  \******************************************************************************************/
/*! exports provided: RescheduleLoanMiddleware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RescheduleLoanMiddleware", function() { return RescheduleLoanMiddleware; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/features/credits/core */ "42wy");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _nequi_utils_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nequi/utils/string */ "p6rB");
/* harmony import */ var _products_reschedule_loan_pages_reschedule_loan_home_reschedule_loan_home_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../products/reschedule-loan/pages/reschedule-loan-home/reschedule-loan-home.config */ "nvBl");
/* harmony import */ var _products_reschedule_loan_services_reschedule_loan_info_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../products/reschedule-loan/services/reschedule-loan-info.model */ "dxZ7");
/* harmony import */ var _services_credit_info_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/credit-info.model */ "9FmH");
/* harmony import */ var _base_middleware__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./base.middleware */ "Jqih");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");

























var RescheduleLoanMiddleware = /** @class */ (function () {
    function RescheduleLoanMiddleware(router, creditInteractor, loadingService, translateProvider, navigatorProvider, cardModalService, rescheduleLoanModel, toastService, moduleConfigProvider, analyticsInteractor, creditInfoModel, fullscreenModalService, currencyPipe, datePipe, dynatraceService, route) {
        this.router = router;
        this.creditInteractor = creditInteractor;
        this.loadingService = loadingService;
        this.translateProvider = translateProvider;
        this.navigatorProvider = navigatorProvider;
        this.cardModalService = cardModalService;
        this.rescheduleLoanModel = rescheduleLoanModel;
        this.toastService = toastService;
        this.moduleConfigProvider = moduleConfigProvider;
        this.analyticsInteractor = analyticsInteractor;
        this.creditInfoModel = creditInfoModel;
        this.fullscreenModalService = fullscreenModalService;
        this.currencyPipe = currencyPipe;
        this.datePipe = datePipe;
        this.dynatraceService = dynatraceService;
        this.route = route;
        this.config = _products_reschedule_loan_pages_reschedule_loan_home_reschedule_loan_home_config__WEBPACK_IMPORTED_MODULE_11__["RescheduleLoanHomeConfig"];
        this.factoryException = {};
    }
    RescheduleLoanMiddleware.prototype.canActivate = function (_route, _state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.translateProvider.loadModule(this.moduleConfigProvider.i18n.moduleKey)];
                    case 1:
                        _a.sent();
                        if (!this.config.validPaths.includes(this.router.url)) {
                            return [2 /*return*/, false];
                        }
                        this.setAnalyticsOfBegin();
                        this.setExceptionFactory();
                        return [4 /*yield*/, this.validateGetRescheduleLoan()];
                    case 2:
                        if (_a.sent()) {
                            return [2 /*return*/, this.navigatorProvider.navigateForward(this.config.routes.homeRescheduleLoan)];
                        }
                        return [2 /*return*/, false];
                }
            });
        });
    };
    RescheduleLoanMiddleware.prototype.validateGetRescheduleLoan = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, resultGetReschedule, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 6, 7, 9]);
                        return [4 /*yield*/, this.loadingService.show()];
                    case 1:
                        _b.sent();
                        _a = this;
                        return [4 /*yield*/, this.getState()];
                    case 2:
                        _a.originFlow = _b.sent();
                        return [4 /*yield*/, this.creditInteractor.getRescheduleLoan({
                                creditCode: this.rescheduleLoanModel.creditCode,
                                productId: this.rescheduleLoanModel.productId,
                            })];
                    case 3:
                        resultGetReschedule = _b.sent();
                        this.rescheduleLoanModel.rescheduleOptionList = resultGetReschedule;
                        this.getCredit();
                        return [4 /*yield*/, this.setAnalyticsIntentionOfRelief()];
                    case 4:
                        _b.sent();
                        return [4 /*yield*/, this.loadingService.hideWithoutFeedback()];
                    case 5:
                        _b.sent();
                        if (this.originFlow === _nequi_features_commons__WEBPACK_IMPORTED_MODULE_3__["OriginFlow"].CREDITS) {
                            return [2 /*return*/, this.showPaymentOptionsModal()];
                        }
                        return [2 /*return*/, true];
                    case 6:
                        error_1 = _b.sent();
                        this.processErrors(error_1);
                        return [3 /*break*/, 9];
                    case 7: return [4 /*yield*/, this.dynatraceService.setAnalyticsOfEnd()];
                    case 8:
                        _b.sent();
                        return [7 /*endfinally*/];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    RescheduleLoanMiddleware.prototype.getState = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var state, loanAcc, productId;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                state = this.router.getCurrentNavigation().extras.state;
                if ((state === null || state === void 0 ? void 0 : state.originFlow) !== _nequi_features_commons__WEBPACK_IMPORTED_MODULE_3__["OriginFlow"].CREDITS) {
                    loanAcc = state.loanAcc, productId = state.productId;
                    this.rescheduleLoanModel.creditCode = loanAcc;
                    this.rescheduleLoanModel.productId = Number(productId);
                    return [2 /*return*/, null];
                }
                this.rescheduleLoanModel.creditCode = this.creditInfoModel.customerCreditInfo.credit.debenture;
                this.rescheduleLoanModel.productId = Number(state.creditType);
                return [2 /*return*/, state.originFlow];
            });
        });
    };
    RescheduleLoanMiddleware.prototype.getCredit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (this.rescheduleLoanModel.productId) {
                    case _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__["CreditType"].PROPELLER:
                        this.getCreditName(_base_middleware__WEBPACK_IMPORTED_MODULE_14__["MiddlewareModuleName"].PROPELLER);
                        break;
                    case _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__["CreditType"].LIFEGUARD_RECHARGED:
                        this.getCreditName(_base_middleware__WEBPACK_IMPORTED_MODULE_14__["MiddlewareModuleName"].LIFEGUARD_RECHARGED);
                        break;
                }
                return [2 /*return*/];
            });
        });
    };
    RescheduleLoanMiddleware.prototype.getCreditName = function (credit) {
        var creditName = this.translateProvider.get(this.config.i18n.creditName);
        creditName = Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_9__["toCamelCaseProperties"])(creditName);
        this.rescheduleLoanModel.creditName = creditName[credit];
    };
    RescheduleLoanMiddleware.prototype.processErrors = function (error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingService.hideWithoutFeedback()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.dynatraceService.setCustomError(error)];
                    case 2:
                        _a.sent();
                        if (this.factoryException[error.constructor.name]) {
                            this.factoryException[error.constructor.name](error);
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.toastService.showError(error.message)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RescheduleLoanMiddleware.prototype.setExceptionFactory = function () {
        var _a;
        var _this = this;
        this.factoryException = (_a = {},
            _a[_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__["CannotRescheduleLoanException"].name] = function () { return _this.processCannotRescheduleLoanError(); },
            _a[_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__["ExceedsMaximumTermException"].name] = function (error) { return _this.processExceedsMaximumTermError(error); },
            _a[_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__["DuplicateTransactionException"].name] = function (error) { return _this.processDuplicateTransactionError(error); },
            _a);
    };
    RescheduleLoanMiddleware.prototype.processCannotRescheduleLoanError = function () {
        var messages = this.translateProvider.get(this.config.i18n.modal.cannotRescheduleLoanError);
        if (this.originFlow === _nequi_features_commons__WEBPACK_IMPORTED_MODULE_3__["OriginFlow"].CREDITS) {
            messages = this.translateProvider.get(this.config.i18n.modal.unapprovedReliefError);
        }
        this.showCardModal({ message: messages });
    };
    RescheduleLoanMiddleware.prototype.processExceedsMaximumTermError = function (error) {
        var _a;
        var messages = this.translateProvider.get(this.config.i18n.modal.exceedsMaximumTermError);
        if ((_a = error === null || error === void 0 ? void 0 : error.data) === null || _a === void 0 ? void 0 : _a.maxTerm) {
            messages.content = Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_10__["createFormat"])(messages.content, [error.data.maxTerm]);
        }
        this.showCardModal({
            message: messages,
            params: { url: this.config.routes.backpack },
        });
    };
    RescheduleLoanMiddleware.prototype.processDuplicateTransactionError = function (error) {
        var _a;
        var messages = this.translateProvider.get(this.config.i18n.modal.duplicateTransaction);
        if ((_a = error === null || error === void 0 ? void 0 : error.data) === null || _a === void 0 ? void 0 : _a.nextExtensionDate) {
            messages.content = Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_10__["createFormat"])(messages.content, [
                this.datePipe.transform(error.data.nextExtensionDate, this.config.nextExtensionDateFormat),
            ]);
        }
        this.showCardModal({
            message: messages,
            params: {
                url: this.config.routes.backpack,
            },
        });
    };
    RescheduleLoanMiddleware.prototype.showCardModal = function (modalInfo) {
        var _this = this;
        var _a, _b;
        var message = modalInfo.i18nKey
            ? this.translateProvider.get(modalInfo.i18nKey)
            : modalInfo.message;
        var buttons = [
            {
                text: message.buttons.accept,
                handler: function () {
                    var _a;
                    if ((_a = modalInfo === null || modalInfo === void 0 ? void 0 : modalInfo.params) === null || _a === void 0 ? void 0 : _a.url) {
                        _this.goToRoute(String(modalInfo.params.url));
                    }
                },
            },
        ];
        if ((_a = message.buttons) === null || _a === void 0 ? void 0 : _a.report) {
            buttons.push({
                color: _nequi_ui__WEBPACK_IMPORTED_MODULE_8__["ModalButtonColor"].MIDNIGHT,
                text: message.buttons.report,
                handler: function () { return _this.goToReportIssue(); },
            });
        }
        this.cardModalService.show({
            title: message.title,
            imgPath: message.image,
            content: (_b = message.description) !== null && _b !== void 0 ? _b : message.content,
            buttons: buttons,
        });
    };
    RescheduleLoanMiddleware.prototype.setAnalyticsIntentionOfRelief = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var eventName;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                eventName = this.config.analytics.intentionOfRelief.name;
                this.analyticsInteractor.trackEvent({
                    type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["AnalyticsType"].CLEVERTAP,
                    params: {
                        eventName: eventName,
                        eventProps: Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_9__["stringsArrayToObjectWithValues"])(this.config.analytics.intentionOfRelief.params.cleverTap, [
                            this.rescheduleLoanModel.productId,
                            this.rescheduleLoanModel.rescheduleOptionList[0].rescheduleType,
                        ]),
                    },
                });
                return [2 /*return*/];
            });
        });
    };
    RescheduleLoanMiddleware.prototype.showPaymentOptionsModal = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var i18n, i18nFormatted, result;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i18n = this.translateProvider.get(this.config.i18n.modal.paymentOptions);
                        i18nFormatted = Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_9__["toCamelCaseProperties"])(i18n);
                        return [4 /*yield*/, this.fullscreenModalService.show({
                                title: Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_10__["createFormat"])(i18nFormatted.title, [this.rescheduleLoanModel.creditName]),
                                imgPath: i18nFormatted.image,
                                content: i18nFormatted.description,
                                cssClass: this.config.fullscreenModal.cssClass,
                                buttons: [
                                    {
                                        text: i18nFormatted.acceptButton,
                                        handler: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                                this.fullscreenModalService.hide(true);
                                                return [2 /*return*/];
                                            });
                                        }); },
                                        cssClass: this.config.fullscreenModal.cssClassButton,
                                    },
                                ],
                            })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, !!(result === null || result === void 0 ? void 0 : result.data)];
                }
            });
        });
    };
    RescheduleLoanMiddleware.prototype.goToRoute = function (route) {
        this.navigatorProvider.navigateRoot(route, {
            relativeTo: this.route,
            replaceUrl: true,
        });
    };
    RescheduleLoanMiddleware.prototype.goToReportIssue = function () {
        this.getCredit();
        var messageItemDetail = this.translateProvider.get(this.config.i18n.reportDetail);
        var detail = {
            title: Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_10__["createFormat"])(messageItemDetail.title, [this.rescheduleLoanModel.creditName]),
            status: _nequi_ui__WEBPACK_IMPORTED_MODULE_8__["ViewDetailStatus"].RED,
            details: [
                {
                    label: messageItemDetail.amount,
                    description: this.currencyPipe.transform(this.creditInfoModel.customerCreditInfo.credit.approvedValue),
                },
                {
                    label: messageItemDetail.date,
                    description: this.transformFinishDate(this.creditInfoModel.customerCreditInfo.credit.startAt),
                },
                {
                    label: messageItemDetail.installments,
                    description: String(this.creditInfoModel.customerCreditInfo.credit.installment.total),
                },
            ],
        };
        this.navigatorProvider.navigateForward(this.config.routes.reportProblem, {
            state: {
                detail: detail,
                originFlow: _nequi_features_commons__WEBPACK_IMPORTED_MODULE_3__["OriginFlow"].RESCHEDULE_LOAN,
                routeReturn: this.config.routes.propeller,
            },
        });
    };
    RescheduleLoanMiddleware.prototype.transformFinishDate = function (goalFinishDate) {
        return this.datePipe.transform(goalFinishDate, this.config.finishDateFormat);
    };
    RescheduleLoanMiddleware.prototype.setAnalyticsOfBegin = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dynatraceService.setAnalyticsOfEvent({
                            eventName: this.config.analytics.intentionOfRelief.name.toLowerCase(),
                            eventProps: Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_9__["stringsArrayToObjectWithValues"])(this.config.analytics.intentionOfRelief.params.dynatrace, [this.rescheduleLoanModel.productId]),
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RescheduleLoanMiddleware.ɵfac = function RescheduleLoanMiddleware_Factory(t) { return new (t || RescheduleLoanMiddleware)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__["CreditInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_8__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_6__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_6__["NavigatorProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_8__["CardModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_products_reschedule_loan_services_reschedule_loan_info_model__WEBPACK_IMPORTED_MODULE_12__["RescheduleLoanInfoModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_8__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_6__["ModuleConfigProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["AnalyticsInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_services_credit_info_model__WEBPACK_IMPORTED_MODULE_13__["CreditInfoModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_8__["FullscreenModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__["DynatraceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
    RescheduleLoanMiddleware.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjectable"]({ token: RescheduleLoanMiddleware, factory: RescheduleLoanMiddleware.ɵfac });
    return RescheduleLoanMiddleware;
}());



/***/ }),

/***/ "wmLn":
/*!**********************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/reschedule-loan/config/reschedule-loan.config.ts ***!
  \**********************************************************************************************************/
/*! exports provided: RescheduleLoanConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RescheduleLoanConfig", function() { return RescheduleLoanConfig; });
var config = {
    i18n: {
        moduleKey: 'credits',
    },
};
var RescheduleLoanConfig = Object.freeze(config);


/***/ })

}]);
//# sourceMappingURL=products-reschedule-loan-reschedule-loan-module.js.map