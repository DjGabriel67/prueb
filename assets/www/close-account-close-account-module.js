(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["close-account-close-account-module"],{

/***/ "++f/":
/*!****************************************************************************************!*\
  !*** ./libs/features/profile/src/presentation/close-account/pages/home/home.config.ts ***!
  \****************************************************************************************/
/*! exports provided: HomeConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeConfig", function() { return HomeConfig; });
var HomeConfig = Object.freeze({
    i18n: {
        title: 'profile.close-account.home.title',
        stepsTitle: 'profile.close-account.home.steps.title',
        inputPlaceholder: 'profile.close-account.home.input-placeholder',
        steps: [
            'profile.close-account.home.steps.step-one',
            'profile.close-account.home.steps.step-two',
            'profile.close-account.home.steps.step-three',
            'profile.close-account.home.steps.step-four',
        ],
        stepsDescription: 'profile.close-account.home.steps.description',
        sendButton: 'profile.close-account.home.send-button',
        closeButton: 'profile.close-account.home.close-button',
        pinChallenge: 'profile.close-account.pin-challenge',
        alerts: {
            timeHasCome: 'profile.close-account.alerts.time-has-come',
            canNotClose: 'profile.close-account.alerts.can-not-close',
            invalidContact: 'profile.close-account.alerts.invalid-contact',
            invalidAccount: 'profile.close-account.alerts.invalid-account',
            pendingBalance: 'profile.close-account.alerts.pending-balance',
            pendingCredit: 'profile.close-account.alerts.pending-credit',
            closeAccount: 'profile.close-account.alerts.close-account',
        },
        modals: {
            goodbye: 'profile.close-account.modals.goodbye',
            looseEnds: 'profile.close-account.modals.loose-ends',
            closingCycles: 'profile.close-account.modals.closing-cycles',
            mirror: 'profile.close-account.modals.mirror',
        },
        toast: {
            targetAccountBlocked: 'profile.close-account.toast.target-account-blocked',
        },
        errorMessage: 'profile.close-account.home.error-message',
    },
    routes: {
        sendMoney: '/admin/profile/close/send-money',
        backpack: '/admin/dashboard',
        signIn: '/',
        cashIn: '/admin/cash-in',
        helpForm: 'https://ayuda.nequi.com.co/hc/es/requests/new?ticket_form_id=173477',
    },
});


/***/ }),

/***/ "0E8t":
/*!**************************************************************************************************!*\
  !*** ./libs/features/profile/src/presentation/close-account/pages/send-money/send-money.page.ts ***!
  \**************************************************************************************************/
/*! exports provided: SendMoneyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendMoneyPage", function() { return SendMoneyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _services_close_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/close-account.service */ "YwhE");
/* harmony import */ var _send_money_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./send-money.config */ "leAX");
/* harmony import */ var _send_money_view_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./send-money.view-model */ "G4Y5");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../ui/src/lib/directives/animate-title-on-scroll/animate-title-on-scroll.directive */ "qbWi");
/* harmony import */ var _ui_src_lib_directives_form_content_style_form_content_style_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../ui/src/lib/directives/form-content-style/form-content-style.directive */ "+XT3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _contacts_src_presentation_controls_contact_control_contact_selector_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../contacts/src/presentation/controls/contact-control/contact-selector.component */ "2MVS");
/* harmony import */ var _ui_src_lib_directives_control_errors_control_errors_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../ui/src/lib/directives/control-errors/control-errors.directive */ "XHcO");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");





















var _c0 = function (a0, a1) { return { control: a0, messages: a1 }; };
function SendMoneyPage_form_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-contact-control", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-item", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "ion-input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.viewModel.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 6, ctx_r0.config.i18n.inputs.cel.placeholder))("formControl", ctx_r0.viewModel.contact);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nequiControlErrors", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](12, _c0, ctx_r0.viewModel.amount, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 8, ctx_r0.config.i18n.inputs.amount.errors)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 10, ctx_r0.config.i18n.inputs.amount.placeholder), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r0.viewModel.amount);
} }
var SendMoneyPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SendMoneyPage, _super);
    function SendMoneyPage(injector, router, closeAccountService, currencyConfigProvider, currencyPipe) {
        var _this = _super.call(this, injector) || this;
        _this.router = router;
        _this.closeAccountService = closeAccountService;
        _this.currencyConfigProvider = currencyConfigProvider;
        _this.currencyPipe = currencyPipe;
        _this.viewModel = new _send_money_view_model__WEBPACK_IMPORTED_MODULE_8__["SendMoneyViewModel"]();
        _this.config = _send_money_config__WEBPACK_IMPORTED_MODULE_7__["SendMoneyConfig"];
        var total = _this.router.getCurrentNavigation().extras.state.total;
        _this.viewModel.createFormGroup();
        _this.viewModel.amount.setValue(_this.currencyPipe.transform(total));
        return _this;
    }
    Object.defineProperty(SendMoneyPage.prototype, "decimalLimit", {
        get: function () {
            return this.currencyConfigProvider.visualDecimalLimit;
        },
        enumerable: false,
        configurable: true
    });
    SendMoneyPage.prototype.validatePhoneNumberAndCloseAccount = function () {
        var _this = this;
        this.closeAccountService.validateContact(this.viewModel.contact.value, function () {
            return _this.cleanContact();
        });
    };
    SendMoneyPage.prototype.cleanContact = function () {
        this.viewModel.contact.setValue(null);
    };
    SendMoneyPage.ɵfac = function SendMoneyPage_Factory(t) { return new (t || SendMoneyPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_close_account_service__WEBPACK_IMPORTED_MODULE_6__["CloseAccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_5__["CurrencyConfigProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"])); };
    SendMoneyPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SendMoneyPage, selectors: [["app-close-account-send-money"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 18, vars: 11, consts: [[1, "nequi-header", "nequi-header--white"], ["slot", "start"], ["id", "send-money_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], ["id", "send-money_title_label", 1, "nequi-header__title", "ion-text-start"], ["scrollEvents", "true", "appAnimateTitleOnScroll", "", "fullscreen", "true", "appFormContentStyle", "", 1, "ion-content--enroll", "ion-padding-horizontal", "content"], [1, "nequi-title"], ["class", "form", 3, "formGroup", 4, "ngIf"], [1, "nequi-footer"], ["id", "send-money_send_button", "shape", "round", "color", "guayaba", "expand", "block", 1, "margin-vertical-16", 3, "disabled", "click"], [1, "form", 3, "formGroup"], [3, "placeholder", "formControl"], [1, "nequi-item", "margin-bottom-8", 3, "nequiControlErrors"], ["position", "floating", 1, "nequi-item__label"], ["type", "text", "disabled", "", 1, "nequi-item__input", 3, "formControl"]], template: function SendMoneyPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SendMoneyPage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
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
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-text", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, SendMoneyPage_form_12_Template, 9, 15, "form", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ion-footer", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ion-button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SendMoneyPage_Template_ion_button_click_15_listener() { return ctx.validatePhoneNumberAndCloseAccount(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 5, ctx.config.i18n.title), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 7, ctx.config.i18n.title), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.viewModel.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.viewModel.form.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 9, ctx.config.i18n.sendButton), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonContent"], _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_10__["AnimateTitleOnScrollDirective"], _ui_src_lib_directives_form_content_style_form_content_style_directive__WEBPACK_IMPORTED_MODULE_11__["FormContentStyleDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonText"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonFooter"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroupDirective"], _contacts_src_presentation_controls_contact_control_contact_selector_component__WEBPACK_IMPORTED_MODULE_13__["ContactControlComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControlDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonItem"], _ui_src_lib_directives_control_errors_control_errors_directive__WEBPACK_IMPORTED_MODULE_14__["ControlErrorsDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["TextValueAccessor"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZW5kLW1vbmV5LnBhZ2Uuc2NzcyJ9 */"] });
    return SendMoneyPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_4__["FeatureBasePage"]));



/***/ }),

/***/ "G4Y5":
/*!********************************************************************************************************!*\
  !*** ./libs/features/profile/src/presentation/close-account/pages/send-money/send-money.view-model.ts ***!
  \********************************************************************************************************/
/*! exports provided: SendMoneyViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendMoneyViewModel", function() { return SendMoneyViewModel; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");

var SendMoneyViewModel = /** @class */ (function () {
    function SendMoneyViewModel() {
    }
    SendMoneyViewModel.prototype.createFormGroup = function () {
        this.createControls();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            contact: this.contact,
            amount: this.amount,
        });
        this.form.markAsPristine();
        this.form.markAsUntouched();
    };
    SendMoneyViewModel.prototype.createControls = function () {
        this.contact = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]);
        this.amount = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]);
    };
    return SendMoneyViewModel;
}());



/***/ }),

/***/ "SPf3":
/*!**********************************************************************************************!*\
  !*** ./libs/features/profile/src/presentation/close-account/close-account-routing.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: CloseAccountRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseAccountRoutingModule", function() { return CloseAccountRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_home_home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home/home.page */ "WLwl");
/* harmony import */ var _pages_send_money_send_money_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/send-money/send-money.page */ "0E8t");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





var routes = [
    {
        path: '',
        component: _pages_home_home_page__WEBPACK_IMPORTED_MODULE_1__["HomePage"],
    },
    {
        path: 'send-money',
        component: _pages_send_money_send_money_page__WEBPACK_IMPORTED_MODULE_2__["SendMoneyPage"],
    },
];
var CloseAccountRoutingModule = /** @class */ (function () {
    function CloseAccountRoutingModule() {
    }
    CloseAccountRoutingModule.ɵfac = function CloseAccountRoutingModule_Factory(t) { return new (t || CloseAccountRoutingModule)(); };
    CloseAccountRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CloseAccountRoutingModule });
    CloseAccountRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return CloseAccountRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CloseAccountRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "WLwl":
/*!**************************************************************************************!*\
  !*** ./libs/features/profile/src/presentation/close-account/pages/home/home.page.ts ***!
  \**************************************************************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_money_management_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/money-management/core */ "Qxr/");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _services_close_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/close-account.service */ "YwhE");
/* harmony import */ var _home_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home.config */ "++f/");
/* harmony import */ var _home_view_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home.view-model */ "ZhP8");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../ui/src/lib/directives/animate-title-on-scroll/animate-title-on-scroll.directive */ "qbWi");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ui_src_lib_components_busy_indicator_busy_indicator_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../ui/src/lib/components/busy-indicator/busy-indicator.component */ "N6nj");
/* harmony import */ var _ui_src_lib_controls_nequi_input_currency_nequi_input_currency_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../ui/src/lib/controls/nequi-input-currency/nequi-input-currency.component */ "VG0r");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");




















function HomePage_app_busy_indicator_12_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-busy-indicator", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onReload", function HomePage_app_busy_indicator_12_Template_app_busy_indicator_onReload_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.getBalance(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showReload", ctx_r0.busyIndicatorError)("reloadMessage", ctx_r0.busyIndicatorError);
} }
function HomePage_div_13_li_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var step_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, step_r6));
} }
function HomePage_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "nequi-input-currency", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-text", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ol", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, HomePage_div_13_li_11_Template, 4, 3, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-text", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 7, ctx_r1.config.i18n.inputPlaceholder), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("control", ctx_r1.viewModel.amountControl)("isReadOnly", true)("decimalLimit", ctx_r1.decimalLimit);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 9, ctx_r1.config.i18n.stepsTitle), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.config.i18n.steps);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 11, ctx_r1.config.i18n.stepsDescription), " ");
} }
function HomePage_ion_footer_14_ion_button_2_Template(rf, ctx) { if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomePage_ion_footer_14_ion_button_2_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r9.goToSendMoney(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r7.config.i18n.sendButton), " ");
} }
function HomePage_ion_footer_14_ion_button_3_Template(rf, ctx) { if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomePage_ion_footer_14_ion_button_3_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r11.closeAccount(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r8.config.i18n.closeButton), " ");
} }
function HomePage_ion_footer_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-footer", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HomePage_ion_footer_14_ion_button_2_Template, 3, 3, "ion-button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HomePage_ion_footer_14_ion_button_3_Template, 3, 3, "ion-button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.viewModel.haveToSendMoney);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.viewModel.haveToSendMoney);
} }
var HomePage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HomePage, _super);
    function HomePage(injector, balanceInteractor, moneyManagementInteractor, closeAccountService, currencyConfigProvider, translateProvider) {
        var _this = _super.call(this, injector) || this;
        _this.balanceInteractor = balanceInteractor;
        _this.moneyManagementInteractor = moneyManagementInteractor;
        _this.closeAccountService = closeAccountService;
        _this.currencyConfigProvider = currencyConfigProvider;
        _this.translateProvider = translateProvider;
        _this.config = _home_config__WEBPACK_IMPORTED_MODULE_7__["HomeConfig"];
        _this.viewModel = new _home_view_model__WEBPACK_IMPORTED_MODULE_8__["HomeViewModel"]();
        return _this;
    }
    Object.defineProperty(HomePage.prototype, "decimalLimit", {
        get: function () {
            return this.currencyConfigProvider.visualDecimalLimit;
        },
        enumerable: false,
        configurable: true
    });
    HomePage.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getBalance()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.closeAccount = function () {
        this.closeAccountService.showCloseAccountAlert();
    };
    HomePage.prototype.goToSendMoney = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.viewModel.hasPockets) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.closeAccountService.showLooseEndsCardModal()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                    case 2:
                        this.navigatorProvider.navigateForward([this.config.routes.sendMoney], {
                            state: { total: this.viewModel.total },
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.getBalance = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var total, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        this.showBusyIndicator = true;
                        this.busyIndicatorError = '';
                        return [4 /*yield*/, this.balanceInteractor.getBalance()];
                    case 1:
                        total = (_a.sent()).total;
                        this.viewModel.validateTotal(total);
                        if (!(total > 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getAllPockets()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        this.showBusyIndicator = false;
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        this.busyIndicatorError = this.translateProvider.get(this.config.i18n.errorMessage);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.getAllPockets = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var pockets;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.moneyManagementInteractor.getPockets([
                            _nequi_features_money_management_core__WEBPACK_IMPORTED_MODULE_4__["PocketType"].AVAILABLE,
                            _nequi_features_money_management_core__WEBPACK_IMPORTED_MODULE_4__["PocketType"].POCKET,
                            _nequi_features_money_management_core__WEBPACK_IMPORTED_MODULE_4__["PocketType"].GOAL,
                            _nequi_features_money_management_core__WEBPACK_IMPORTED_MODULE_4__["PocketType"].MATTRESS,
                            _nequi_features_money_management_core__WEBPACK_IMPORTED_MODULE_4__["PocketType"].CARD,
                        ])];
                    case 1:
                        pockets = _a.sent();
                        this.processPockets(pockets);
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.processPockets = function (pockets) {
        var e_1, _a;
        var types = [_nequi_features_money_management_core__WEBPACK_IMPORTED_MODULE_4__["PocketType"].POCKET, _nequi_features_money_management_core__WEBPACK_IMPORTED_MODULE_4__["PocketType"].GOAL, _nequi_features_money_management_core__WEBPACK_IMPORTED_MODULE_4__["PocketType"].MATTRESS];
        try {
            for (var pockets_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(pockets), pockets_1_1 = pockets_1.next(); !pockets_1_1.done; pockets_1_1 = pockets_1.next()) {
                var pocket = pockets_1_1.value;
                if (types.includes(pocket.type) && pocket.amount > 0) {
                    this.viewModel.hasPockets = true;
                    return;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (pockets_1_1 && !pockets_1_1.done && (_a = pockets_1.return)) _a.call(pockets_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    HomePage.ɵfac = function HomePage_Factory(t) { return new (t || HomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_money_management_core__WEBPACK_IMPORTED_MODULE_4__["BalanceInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_money_management_core__WEBPACK_IMPORTED_MODULE_4__["MoneyManagementInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_close_account_service__WEBPACK_IMPORTED_MODULE_6__["CloseAccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_5__["CurrencyConfigProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__["TranslateProvider"])); };
    HomePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomePage, selectors: [["app-close-account-home"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 15, vars: 9, consts: [[1, "nequi-header", "nequi-header--white"], ["slot", "start"], ["id", "home_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], ["id", "home_title_label", 1, "nequi-header__title", "ion-text-start"], ["scrollEvents", "true", "appAnimateTitleOnScroll", "", "fullscreen", "true", 1, "ion-content--enroll", "ion-padding-horizontal", "content"], [1, "nequi-title"], [3, "showReload", "reloadMessage", "onReload", 4, "ngIf"], [4, "ngIf"], ["class", "nequi-footer", 4, "ngIf"], [3, "showReload", "reloadMessage", "onReload"], [1, "nequi-item", "margin-bottom-16"], ["position", "floating", 1, "nequi-item__label"], ["id", "home_amount_input", "type", "number", 1, "nequi-item__input", 3, "control", "isReadOnly", "decimalLimit"], [1, "content__subtitle", "margin-bottom-16"], [1, "list"], ["class", "list-item", 4, "ngFor", "ngForOf"], [1, "list-item"], [1, "nequi-footer"], [1, "nequi-footer__toolbar"], ["class", "nequi-footer__button", "fill", "outline", "shape", "round", "color", "guayaba", "expand", "block", 3, "click", 4, "ngIf"], ["id", "home_close_button", "class", "nequi-footer__button", "fill", "outline", "shape", "round", "color", "guayaba", "expand", "block", 3, "click", 4, "ngIf"], ["fill", "outline", "shape", "round", "color", "guayaba", "expand", "block", 1, "nequi-footer__button", 3, "click"], ["id", "home_close_button", "fill", "outline", "shape", "round", "color", "guayaba", "expand", "block", 1, "nequi-footer__button", 3, "click"]], template: function HomePage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomePage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, HomePage_app_busy_indicator_12_Template, 1, 2, "app-busy-indicator", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, HomePage_div_13_Template, 15, 13, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, HomePage_ion_footer_14_Template, 4, 2, "ion-footer", 9);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 5, ctx.config.i18n.title), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 7, ctx.config.i18n.title), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showBusyIndicator);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.showBusyIndicator);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.showBusyIndicator);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonContent"], _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_10__["AnimateTitleOnScrollDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonText"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _ui_src_lib_components_busy_indicator_busy_indicator_component__WEBPACK_IMPORTED_MODULE_12__["BusyIndicatorComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonLabel"], _ui_src_lib_controls_nequi_input_currency_nequi_input_currency_component__WEBPACK_IMPORTED_MODULE_13__["NequiInputCurrencyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonFooter"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslatePipe"]], styles: [".content__subtitle[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 18px;\n  color: var(--gray-70);\n  font-weight: 500;\n}\n\n.list[_ngcontent-%COMP%] {\n  padding-left: 24px;\n}\n\n.list[_ngcontent-%COMP%]::marker, .list-item[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 16px;\n  color: var(--gray-60);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFJQTtFQUNFLGtCQUFBO0FBREY7O0FBR0U7RUFFRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBRkoiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XG4gICZfX3N1YnRpdGxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6IHZhcigtLWdyYXktNzApO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbn1cblxuLmxpc3Qge1xuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG5cbiAgJjo6bWFya2VyLFxuICAmLWl0ZW0ge1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6IHZhcigtLWdyYXktNjApO1xuICB9XG59XG4iXX0= */"] });
    return HomePage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__["FeatureBasePage"]));



/***/ }),

/***/ "YwhE":
/*!************************************************************************************************!*\
  !*** ./libs/features/profile/src/presentation/close-account/services/close-account.service.ts ***!
  \************************************************************************************************/
/*! exports provided: CloseAccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseAccountService", function() { return CloseAccountService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _nequi_cache_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/cache/core */ "k/UE");
/* harmony import */ var _nequi_features_application_data_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/application-data/core */ "UgzZ");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_features_contacts_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/features/contacts/core */ "Zcn6");
/* harmony import */ var _nequi_features_profile_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/features/profile/core */ "w8sc");
/* harmony import */ var _nequi_features_security_auth_presentation_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nequi/features/security/auth/presentation/services */ "5YBk");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _nequi_utils_string__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @nequi/utils/string */ "p6rB");
/* harmony import */ var _pages_home_home_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../pages/home/home.config */ "++f/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");

























var CloseAccountService = /** @class */ (function () {
    function CloseAccountService(navigatorProvider, translateProvider, pluginDeviceProvisioningRepository, userInfoProvider, contactsInteractor, accountInteractor, cacheInteractor, toastService, alertService, cardModalService, applicationDataInteractor, loadingService, pinChallengeModalService) {
        var _a;
        var _this = this;
        this.navigatorProvider = navigatorProvider;
        this.translateProvider = translateProvider;
        this.pluginDeviceProvisioningRepository = pluginDeviceProvisioningRepository;
        this.userInfoProvider = userInfoProvider;
        this.contactsInteractor = contactsInteractor;
        this.accountInteractor = accountInteractor;
        this.cacheInteractor = cacheInteractor;
        this.toastService = toastService;
        this.alertService = alertService;
        this.cardModalService = cardModalService;
        this.applicationDataInteractor = applicationDataInteractor;
        this.loadingService = loadingService;
        this.pinChallengeModalService = pinChallengeModalService;
        this.factoryException = (_a = {},
            _a[_nequi_features_profile_core__WEBPACK_IMPORTED_MODULE_8__["AccountWithBalanceException"].name] = function (error) {
                return _this.showPendingBalanceAlert(error.data.interestAmount);
            },
            _a[_nequi_features_profile_core__WEBPACK_IMPORTED_MODULE_8__["AccountWithCreditException"].name] = function () { return _this.showPendingCreditAlert(); },
            _a[_nequi_features_profile_core__WEBPACK_IMPORTED_MODULE_8__["SomethingPendingException"].name] = function () { return _this.showCanNotCloseAlert(); },
            _a[_nequi_features_profile_core__WEBPACK_IMPORTED_MODULE_8__["ComissionPendingForNonUse"].name] = function () { return _this.showClosingCyclesCardModal(); },
            _a[_nequi_features_profile_core__WEBPACK_IMPORTED_MODULE_8__["SendMoneyAccountBlockedException"].name] = function (error) { return _this.showInvalidAccountAlert(error.message); },
            _a[_nequi_features_profile_core__WEBPACK_IMPORTED_MODULE_8__["SendMoneyTargetAccountBlocked"].name] = function () { return _this.showTargetAccountBlockedToast(); },
            _a);
    }
    CloseAccountService.prototype.closeAccount = function (phoneNumberDestination) {
        if (phoneNumberDestination === void 0) { phoneNumberDestination = ''; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var softToken, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 7]);
                        return [4 /*yield*/, this.loadingService.show()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.pluginDeviceProvisioningRepository.getSoftToken()];
                    case 2:
                        softToken = _a.sent();
                        return [4 /*yield*/, this.accountInteractor.close({
                                softToken: softToken,
                                phoneNumberDestination: phoneNumberDestination,
                                reasonCode: '',
                            })];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.loadingService.hide(true)];
                    case 4:
                        _a.sent();
                        this.processSuccess();
                        return [3 /*break*/, 7];
                    case 5:
                        error_1 = _a.sent();
                        return [4 /*yield*/, this.loadingService.hide(false)];
                    case 6:
                        _a.sent();
                        this.processFail(error_1);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    CloseAccountService.prototype.showLooseEndsCardModal = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        modal = this.translateProvider.get(_pages_home_home_config__WEBPACK_IMPORTED_MODULE_13__["HomeConfig"].i18n.modals.looseEnds);
                        return [4 /*yield*/, this.cardModalService.show({
                                imgPath: modal.image,
                                title: modal.title,
                                content: modal.content,
                                buttons: [
                                    {
                                        text: modal.button,
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
    CloseAccountService.prototype.validateContact = function (contact, changeContactCallback) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.userInfoProvider.getPhoneNumber() === contact.phoneNumber)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.showMirrorCardModal()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                    case 2: return [4 /*yield*/, this.contactsInteractor.isNequiUser(contact)];
                    case 3:
                        if (!!(_a.sent())) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.showInvalidContactAlert(changeContactCallback)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                    case 5: return [4 /*yield*/, this.showTimeHasComeAlert(contact)];
                    case 6:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CloseAccountService.prototype.showCloseAccountAlert = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertService.showByI18n({
                            i18nKey: _pages_home_home_config__WEBPACK_IMPORTED_MODULE_13__["HomeConfig"].i18n.alerts.closeAccount,
                            handlers: {
                                accept: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                    var isValid;
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, this.validatePin()];
                                            case 1:
                                                isValid = _a.sent();
                                                if (!isValid) return [3 /*break*/, 3];
                                                return [4 /*yield*/, this.closeAccount()];
                                            case 2:
                                                _a.sent();
                                                _a.label = 3;
                                            case 3: return [2 /*return*/];
                                        }
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
    CloseAccountService.prototype.showTimeHasComeAlert = function (contact) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        alert = this.translateProvider.get(_pages_home_home_config__WEBPACK_IMPORTED_MODULE_13__["HomeConfig"].i18n.alerts.timeHasCome);
                        return [4 /*yield*/, this.alertService.show({
                                messages: {
                                    header: alert.header,
                                    message: Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_12__["createFormat"])(alert.message, [contact.firstName || contact.phoneNumber]),
                                    buttons: alert.buttons,
                                },
                                handlers: {
                                    accept: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                        var isValid;
                                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, this.validatePin()];
                                                case 1:
                                                    isValid = _a.sent();
                                                    if (!isValid) return [3 /*break*/, 3];
                                                    return [4 /*yield*/, this.closeAccount(contact.phoneNumber)];
                                                case 2:
                                                    _a.sent();
                                                    _a.label = 3;
                                                case 3: return [2 /*return*/];
                                            }
                                        });
                                    }); },
                                    cancel: function () { return _this.navigatorProvider.back(); },
                                },
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CloseAccountService.prototype.showMirrorCardModal = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        modal = this.translateProvider.get(_pages_home_home_config__WEBPACK_IMPORTED_MODULE_13__["HomeConfig"].i18n.modals.mirror);
                        return [4 /*yield*/, this.cardModalService.show({
                                imgPath: modal.image,
                                title: modal.title,
                                content: modal.content,
                                buttons: [
                                    {
                                        text: modal.button,
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
    CloseAccountService.prototype.showGoodbyeCardModal = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        modal = this.translateProvider.get(_pages_home_home_config__WEBPACK_IMPORTED_MODULE_13__["HomeConfig"].i18n.modals.goodbye);
                        return [4 /*yield*/, this.cardModalService.show({
                                imgPath: modal.image,
                                title: modal.title,
                                content: modal.content,
                                buttons: [
                                    {
                                        text: modal.button,
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
    CloseAccountService.prototype.showClosingCyclesCardModal = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        modal = this.translateProvider.get(_pages_home_home_config__WEBPACK_IMPORTED_MODULE_13__["HomeConfig"].i18n.modals.closingCycles);
                        return [4 /*yield*/, this.cardModalService.show({
                                imgPath: modal.image,
                                title: modal.title,
                                content: modal.content,
                                buttons: [
                                    {
                                        text: modal.buttons.recharge,
                                        handler: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0: return [4 /*yield*/, this.navigatorProvider.navigateRoot(_pages_home_home_config__WEBPACK_IMPORTED_MODULE_13__["HomeConfig"].routes.backpack)];
                                                    case 1:
                                                        _a.sent();
                                                        return [4 /*yield*/, this.navigatorProvider.navigateForward(_pages_home_home_config__WEBPACK_IMPORTED_MODULE_13__["HomeConfig"].routes.cashIn)];
                                                    case 2:
                                                        _a.sent();
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); },
                                    },
                                    {
                                        text: modal.buttons.quit,
                                        color: 'medianoche',
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
    CloseAccountService.prototype.showInvalidContactAlert = function (changeContactCallback) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertService.showByI18n({
                            i18nKey: _pages_home_home_config__WEBPACK_IMPORTED_MODULE_13__["HomeConfig"].i18n.alerts.invalidContact,
                            handlers: {
                                accept: changeContactCallback,
                            },
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CloseAccountService.prototype.showInvalidAccountAlert = function (message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        alert = this.translateProvider.get(_pages_home_home_config__WEBPACK_IMPORTED_MODULE_13__["HomeConfig"].i18n.alerts.invalidAccount);
                        return [4 /*yield*/, this.alertService.show({
                                messages: {
                                    header: alert.header,
                                    message: message || alert.message,
                                    buttons: alert.buttons,
                                },
                                handlers: {
                                    accept: function () { return _this.navigatorProvider.back(); },
                                },
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CloseAccountService.prototype.showPendingBalanceAlert = function (interestAmount) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        alert = this.translateProvider.get(_pages_home_home_config__WEBPACK_IMPORTED_MODULE_13__["HomeConfig"].i18n.alerts.pendingBalance);
                        return [4 /*yield*/, this.alertService.show({
                                messages: {
                                    header: alert.header,
                                    message: alert.message,
                                    buttons: alert.buttons,
                                },
                                handlers: {
                                    accept: function () {
                                        return _this.navigatorProvider.navigateForward(_pages_home_home_config__WEBPACK_IMPORTED_MODULE_13__["HomeConfig"].routes.sendMoney, {
                                            state: { total: interestAmount },
                                        });
                                    },
                                },
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CloseAccountService.prototype.showTargetAccountBlockedToast = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var message;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        message = this.translateProvider.get(_pages_home_home_config__WEBPACK_IMPORTED_MODULE_13__["HomeConfig"].i18n.toast.targetAccountBlocked);
                        return [4 /*yield*/, this.toastService.showError(message)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CloseAccountService.prototype.showCanNotCloseAlert = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertService.showByI18n({
                            i18nKey: _pages_home_home_config__WEBPACK_IMPORTED_MODULE_13__["HomeConfig"].i18n.alerts.canNotClose,
                            handlers: {
                                accept: function () { return Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_11__["openUrl"])(_pages_home_home_config__WEBPACK_IMPORTED_MODULE_13__["HomeConfig"].routes.helpForm); },
                                cancel: function () { return _this.navigatorProvider.navigateRoot(_pages_home_home_config__WEBPACK_IMPORTED_MODULE_13__["HomeConfig"].routes.backpack); },
                            },
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CloseAccountService.prototype.showPendingCreditAlert = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertService.showByI18n({
                            i18nKey: _pages_home_home_config__WEBPACK_IMPORTED_MODULE_13__["HomeConfig"].i18n.alerts.pendingCredit,
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CloseAccountService.prototype.processSuccess = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var error_2;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 7]);
                        return [4 /*yield*/, this.pluginDeviceProvisioningRepository.deleteAccounts()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.deleteData()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.showGoodbyeCardModal()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.navigatorProvider.navigateRoot(_pages_home_home_config__WEBPACK_IMPORTED_MODULE_13__["HomeConfig"].routes.signIn)];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 5:
                        error_2 = _a.sent();
                        return [4 /*yield*/, this.processError()];
                    case 6:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    CloseAccountService.prototype.processFail = function (error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.factoryException[error.constructor.name]) {
                            this.factoryException[error.constructor.name](error);
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.toastService.showError(error.message)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CloseAccountService.prototype.processError = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var error_3;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, this.pluginDeviceProvisioningRepository.deleteAccounts()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.deleteData()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.navigatorProvider.navigateRoot(_pages_home_home_config__WEBPACK_IMPORTED_MODULE_13__["HomeConfig"].routes.signIn)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        error_3 = _a.sent();
                        this.showInvalidAccountAlert(null);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    CloseAccountService.prototype.deleteData = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.applicationDataInteractor.deleteAll()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.cacheInteractor.clearAll()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CloseAccountService.prototype.validatePin = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var pinChallenge;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                pinChallenge = this.translateProvider.get(_pages_home_home_config__WEBPACK_IMPORTED_MODULE_13__["HomeConfig"].i18n.pinChallenge);
                return [2 /*return*/, this.pinChallengeModalService.show({
                        title: pinChallenge.title,
                        message: pinChallenge.message,
                    })];
            });
        });
    };
    CloseAccountService.ɵfac = function CloseAccountService_Factory(t) { return new (t || CloseAccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_6__["NavigatorProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_3__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["PluginDeviceProvisioningRepository"]), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_6__["UserInfoProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_nequi_features_contacts_core__WEBPACK_IMPORTED_MODULE_7__["ContactsInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_nequi_features_profile_core__WEBPACK_IMPORTED_MODULE_8__["AccountInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_nequi_cache_core__WEBPACK_IMPORTED_MODULE_1__["CacheInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_10__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_10__["CardModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_nequi_features_application_data_core__WEBPACK_IMPORTED_MODULE_2__["ApplicationDataInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_10__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_nequi_features_security_auth_presentation_services__WEBPACK_IMPORTED_MODULE_9__["PinChallengeModalService"])); };
    CloseAccountService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjectable"]({ token: CloseAccountService, factory: CloseAccountService.ɵfac });
    return CloseAccountService;
}());



/***/ }),

/***/ "ZhP8":
/*!********************************************************************************************!*\
  !*** ./libs/features/profile/src/presentation/close-account/pages/home/home.view-model.ts ***!
  \********************************************************************************************/
/*! exports provided: HomeViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeViewModel", function() { return HomeViewModel; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");

var HomeViewModel = /** @class */ (function () {
    function HomeViewModel() {
    }
    HomeViewModel.prototype.validateTotal = function (total) {
        this.total = total;
        this.amountControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.total);
        this.haveToSendMoney = this.total !== 0;
    };
    return HomeViewModel;
}());



/***/ }),

/***/ "leAX":
/*!****************************************************************************************************!*\
  !*** ./libs/features/profile/src/presentation/close-account/pages/send-money/send-money.config.ts ***!
  \****************************************************************************************************/
/*! exports provided: SendMoneyConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendMoneyConfig", function() { return SendMoneyConfig; });
var SendMoneyConfig = Object.freeze({
    i18n: {
        title: 'profile.close-account.send-money.title',
        sendButton: 'profile.close-account.send-money.send-button',
        inputs: {
            cel: {
                placeholder: 'profile.close-account.send-money.inputs.phone-number.placeholder',
            },
            amount: {
                errors: 'profile.close-account.send-money.inputs.amount.errors',
                placeholder: 'profile.close-account.send-money.inputs.amount.placeholder',
            },
        },
    },
});


/***/ }),

/***/ "rOgz":
/*!**************************************************************************************!*\
  !*** ./libs/features/profile/src/presentation/close-account/close-account.module.ts ***!
  \**************************************************************************************/
/*! exports provided: CloseAccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseAccountModule", function() { return CloseAccountModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nequi_features_contacts_presentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/contacts/presentation */ "59nv");
/* harmony import */ var _nequi_features_profile_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/profile/core */ "w8sc");
/* harmony import */ var _nequi_features_settings_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/settings/core */ "0nzD");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _close_account_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./close-account-routing.module */ "SPf3");
/* harmony import */ var _pages_home_home_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/home/home.page */ "WLwl");
/* harmony import */ var _pages_send_money_send_money_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/send-money/send-money.page */ "0E8t");
/* harmony import */ var _services_close_account_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/close-account.service */ "YwhE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");













var CloseAccountModule = /** @class */ (function () {
    function CloseAccountModule() {
    }
    CloseAccountModule.ɵfac = function CloseAccountModule_Factory(t) { return new (t || CloseAccountModule)(); };
    CloseAccountModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: CloseAccountModule });
    CloseAccountModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [
            _services_close_account_service__WEBPACK_IMPORTED_MODULE_11__["CloseAccountService"],
            {
                provide: _nequi_features_profile_core__WEBPACK_IMPORTED_MODULE_4__["AccountInteractor"],
                deps: [_nequi_features_profile_core__WEBPACK_IMPORTED_MODULE_4__["AccountRepository"], _nequi_features_settings_core__WEBPACK_IMPORTED_MODULE_5__["SettingRepository"]],
                useClass: _nequi_features_profile_core__WEBPACK_IMPORTED_MODULE_4__["AccountInteractor"],
            },
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _close_account_routing_module__WEBPACK_IMPORTED_MODULE_8__["CloseAccountRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _nequi_ui__WEBPACK_IMPORTED_MODULE_6__["NequiUiModule"],
                _nequi_features_contacts_presentation__WEBPACK_IMPORTED_MODULE_3__["FeaturesContactsModule"],
            ]] });
    return CloseAccountModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](CloseAccountModule, { declarations: [_pages_home_home_page__WEBPACK_IMPORTED_MODULE_9__["HomePage"], _pages_send_money_send_money_page__WEBPACK_IMPORTED_MODULE_10__["SendMoneyPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
        _close_account_routing_module__WEBPACK_IMPORTED_MODULE_8__["CloseAccountRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
        _nequi_ui__WEBPACK_IMPORTED_MODULE_6__["NequiUiModule"],
        _nequi_features_contacts_presentation__WEBPACK_IMPORTED_MODULE_3__["FeaturesContactsModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=close-account-close-account-module.js.map