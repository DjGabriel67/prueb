(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nequi-features-netflix-presentation"],{

/***/ "8UQT":
/*!**************************************************************************!*\
  !*** ./libs/features/netflix/src/presentation/pages/terms/terms.page.ts ***!
  \**************************************************************************/
/*! exports provided: TermsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsPage", function() { return TermsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_features_netflix_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/netflix/core */ "UGS5");
/* harmony import */ var _nequi_utils_date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/utils/date */ "tGfC");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _config_netflix_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../config/netflix.config */ "v4rG");
/* harmony import */ var _terms_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./terms.config */ "rWqt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ui_src_lib_pipes_trust_html_trust_html_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../ui/src/lib/pipes/trust-html/trust-html.pipe */ "FKD1");
















function TermsPage_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "trustHTML");
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 1, ctx_r0.contract), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
} }
var TermsPage = /** @class */ (function () {
    function TermsPage(navigatorProvider, netflixInteractor, translateProvider, analyticsInteractor) {
        this.navigatorProvider = navigatorProvider;
        this.netflixInteractor = netflixInteractor;
        this.translateProvider = translateProvider;
        this.analyticsInteractor = analyticsInteractor;
        this.config = _terms_config__WEBPACK_IMPORTED_MODULE_7__["TermsConfig"];
        this.translateProvider.loadModule(_config_netflix_config__WEBPACK_IMPORTED_MODULE_6__["NetflixConfig"].i18n.moduleKey);
    }
    TermsPage.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.netflixInteractor.getContract()];
                    case 1:
                        _a.contract = _b.sent();
                        this.setAnalyticsIntentionOfBegin();
                        return [2 /*return*/];
                }
            });
        });
    };
    TermsPage.prototype.goBack = function () {
        this.navigatorProvider.back();
    };
    TermsPage.prototype.acceptContract = function () {
        this.navigatorProvider.navigateForward(this.config.routes.buyPage);
    };
    TermsPage.prototype.setAnalyticsIntentionOfBegin = function () {
        var analytics = _terms_config__WEBPACK_IMPORTED_MODULE_7__["TermsConfig"].analytics;
        var clevertapParameters = Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_5__["stringsArrayToObjectWithValues"])(_terms_config__WEBPACK_IMPORTED_MODULE_7__["TermsConfig"].analytics.clevertap.properties, [Object(_nequi_utils_date__WEBPACK_IMPORTED_MODULE_4__["getFormattedDateTimes"])()]);
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_1__["AnalyticsType"].FIREBASE,
            params: { eventName: analytics.events.netflixIntentionOfBegin },
        });
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_1__["AnalyticsType"].FACEBOOK,
            params: { eventName: analytics.events.netflixIntentionOfBegin },
        });
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_1__["AnalyticsType"].CLEVERTAP,
            params: {
                eventName: analytics.clevertap.eventName,
                eventProps: clevertapParameters,
            },
        });
    };
    TermsPage.ɵfac = function TermsPage_Factory(t) { return new (t || TermsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_2__["NavigatorProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_nequi_features_netflix_core__WEBPACK_IMPORTED_MODULE_3__["NetflixInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_2__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_1__["AnalyticsInteractor"])); };
    TermsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: TermsPage, selectors: [["nequi-terms"]], decls: 14, vars: 7, consts: [[1, "nequi-header"], ["slot", "start"], ["id", "terms_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], [1, "ion-content--enroll", "ion-padding-horizontal"], [1, "nequi-title", 3, "innerHtml"], [3, "innerHTML", 4, "ngIf"], [1, "nequi-footer"], [1, "nequi-footer__toolbar"], ["id", "terms_accept-agreement_button", "shape", "round", "color", "guayaba", "expand", "block", 1, "nequi-footer__button", 3, "click"], [3, "innerHTML"]], template: function TermsPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TermsPage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "ion-content", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "ion-text", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, TermsPage_p_8_Template, 2, 3, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "ion-footer", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "ion-toolbar", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "ion-button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TermsPage_Template_ion_button_click_11_listener() { return ctx.acceptContract(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](13, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](7, 3, ctx.config.i18n.title), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.contract);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](13, 5, ctx.config.i18n.button), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonText"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonFooter"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"], _ui_src_lib_pipes_trust_html_trust_html_pipe__WEBPACK_IMPORTED_MODULE_12__["TrustHTMLPipe"]], encapsulation: 2 });
    return TermsPage;
}());



/***/ }),

/***/ "GR45":
/*!************************************************************************!*\
  !*** ./libs/features/netflix/src/presentation/pages/buy/buy.config.ts ***!
  \************************************************************************/
/*! exports provided: BuyConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyConfig", function() { return BuyConfig; });
var BuyConfig = Object.freeze({
    appData: {
        formDataKey: 'netflix.buy:form-data',
    },
    i18n: {
        title: 'netflix.buy.title',
        codeFormatBase: 'netflix.buy.code-format',
        footer: {
            message: 'netflix.buy.footer.message',
            button: 'netflix.buy.footer.button',
            link: 'netflix.buy.footer.link',
        },
        form: {
            codePlaceholder: 'netflix.buy.form.code',
            email: {
                placeholder: 'netflix.buy.form.email',
                help: 'netflix.buy.controls-errors.email.help',
                required: 'netflix.buy.controls-errors.email.required',
                wrongEmail: 'netflix.buy.controls-errors.email.wrong-email',
            },
        },
        confirmBottomSheet: 'netflix.buy.bottom-sheet',
        modal: {
            success: 'netflix.buy.modals.buy-success',
            paymentInProgress: 'netflix.buy.modals.payment-in-progress',
        },
    },
    validators: {
        email: {
            minLength: 6,
            maxLength: 50,
            // eslint-disable-next-line no-useless-escape
            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        },
        amount: {
            min: 20000,
            max: 50000,
        },
    },
    routes: {
        helpPage: '/admin/netflix/help',
        dashBoard: '/admin/dashboard',
    },
    analytics: {
        events: {
            netflixSuccessRecharge: 'Netflix_recarga_exitosa',
        },
        clevertap: {
            eventName: 'Netflix_recarga_exitosa',
            properties: ['Fecha_recarga', 'Valor_recarga'],
        },
    },
});


/***/ }),

/***/ "bBBZ":
/*!***********************************************************************************!*\
  !*** ./libs/features/netflix/src/presentation/features-netflix-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: FeaturesNetflixRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesNetflixRoutingModule", function() { return FeaturesNetflixRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _config_netflix_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/netflix.config */ "v4rG");
/* harmony import */ var _pages_buy_buy_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/buy/buy.page */ "sRKW");
/* harmony import */ var _pages_help_help_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/help/help.page */ "gUq+");
/* harmony import */ var _pages_terms_terms_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/terms/terms.page */ "8UQT");









var routes = [
    {
        path: '',
        component: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Type"],
        canActivate: [_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_2__["InformationBottomSheetMiddleware"]],
        data: {
            i18nModuleKey: _config_netflix_config__WEBPACK_IMPORTED_MODULE_3__["NetflixConfig"].i18n.moduleKey,
            i18nMessagesKey: _config_netflix_config__WEBPACK_IMPORTED_MODULE_3__["NetflixConfig"].i18n.bottomSheet,
            redirectTo: 'terms',
        },
    },
    {
        path: 'terms',
        component: _pages_terms_terms_page__WEBPACK_IMPORTED_MODULE_6__["TermsPage"],
    },
    {
        path: 'buy',
        component: _pages_buy_buy_page__WEBPACK_IMPORTED_MODULE_4__["BuyPage"],
    },
    {
        path: 'help',
        component: _pages_help_help_page__WEBPACK_IMPORTED_MODULE_5__["HelpPage"],
    },
];
var FeaturesNetflixRoutingModule = /** @class */ (function () {
    function FeaturesNetflixRoutingModule() {
    }
    FeaturesNetflixRoutingModule.ɵfac = function FeaturesNetflixRoutingModule_Factory(t) { return new (t || FeaturesNetflixRoutingModule)(); };
    FeaturesNetflixRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FeaturesNetflixRoutingModule });
    FeaturesNetflixRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return FeaturesNetflixRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FeaturesNetflixRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "g3wA":
/*!****************************************************************************!*\
  !*** ./libs/features/netflix/src/presentation/pages/buy/buy.view-model.ts ***!
  \****************************************************************************/
/*! exports provided: BuyViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyViewModel", function() { return BuyViewModel; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _buy_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buy.config */ "GR45");


var BuyViewModel = /** @class */ (function () {
    function BuyViewModel() {
        this.pocketList = [];
        this.buildForm();
        this.form.markAsPristine();
        this.form.markAsUntouched();
    }
    Object.defineProperty(BuyViewModel.prototype, "package", {
        get: function () {
            return this.codeControl.value;
        },
        enumerable: false,
        configurable: true
    });
    BuyViewModel.prototype.buildForm = function () {
        this.createControls();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            pocket: this.pocketControl,
            code: this.codeControl,
            email: this.emailControl,
        });
        this.form.markAsPristine();
        this.form.markAsUntouched();
    };
    BuyViewModel.prototype.buildArrayConfirmationItems = function (messages, amount, email, product) {
        return [
            {
                label: messages.items.product,
                value: product,
            },
            {
                label: messages.items.email,
                value: email,
            },
            {
                label: messages.items.amount,
                value: amount,
            },
        ];
    };
    BuyViewModel.prototype.createControls = function () {
        this.pocketControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.pocketList[0]);
        this.codeControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]);
        this.emailControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(_buy_config__WEBPACK_IMPORTED_MODULE_1__["BuyConfig"].validators.email.minLength),
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(_buy_config__WEBPACK_IMPORTED_MODULE_1__["BuyConfig"].validators.email.maxLength),
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(_buy_config__WEBPACK_IMPORTED_MODULE_1__["BuyConfig"].validators.email.pattern),
        ]);
    };
    return BuyViewModel;
}());



/***/ }),

/***/ "gUq+":
/*!************************************************************************!*\
  !*** ./libs/features/netflix/src/presentation/pages/help/help.page.ts ***!
  \************************************************************************/
/*! exports provided: HelpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpPage", function() { return HelpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _config_netflix_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config/netflix.config */ "v4rG");
/* harmony import */ var _help_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./help.config */ "yF3l");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ui_src_lib_components_item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../ui/src/lib/components/item-detail/item-detail.component */ "Ycc7");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");











function HelpPage_app_item_detail_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-item-detail", 10);
} if (rf & 2) {
    var item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", item_r1.title)("description", item_r1.description);
} }
var HelpPage = /** @class */ (function () {
    function HelpPage(navController, translateProvider) {
        this.navController = navController;
        this.translateProvider = translateProvider;
        this.config = _help_config__WEBPACK_IMPORTED_MODULE_4__["HelpConfig"];
        this.items = [];
    }
    HelpPage.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.translateProvider.loadModule(_config_netflix_config__WEBPACK_IMPORTED_MODULE_3__["NetflixConfig"].i18n.moduleKey)];
                    case 1:
                        _a.sent();
                        this.items = this.translateProvider.get(this.config.i18n.content);
                        return [2 /*return*/];
                }
            });
        });
    };
    HelpPage.prototype.goBack = function () {
        this.navController.back();
    };
    HelpPage.ɵfac = function HelpPage_Factory(t) { return new (t || HelpPage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_2__["TranslateProvider"])); };
    HelpPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: HelpPage, selectors: [["nequi-help"]], decls: 14, vars: 7, consts: [[1, "nequi-header"], ["slot", "start"], ["id", "help_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], [1, "ion-content--enroll", "ion-padding-horizontal"], [1, "nequi-title", 3, "innerHtml"], [3, "title", "description", 4, "ngFor", "ngForOf"], [1, "nequi-footer"], [1, "nequi-footer__toolbar"], ["id", "help_accept-agreement_button", "shape", "round", "color", "guayaba", "expand", "block", 1, "nequi-footer__button", 3, "click"], [3, "title", "description"]], template: function HelpPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HelpPage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-content", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "ion-text", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, HelpPage_app_item_detail_8_Template, 1, 2, "app-item-detail", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-footer", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "ion-toolbar", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ion-button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HelpPage_Template_ion_button_click_11_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](13, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 3, ctx.config.i18n.title), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.items);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](13, 5, ctx.config.i18n.button), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonText"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonFooter"], _ui_src_lib_components_item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_7__["ItemDetailComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]], encapsulation: 2 });
    return HelpPage;
}());



/***/ }),

/***/ "iZ3W":
/*!***************************************************************************!*\
  !*** ./libs/features/netflix/src/presentation/features-netflix.module.ts ***!
  \***************************************************************************/
/*! exports provided: FeaturesNetflixModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesNetflixModule", function() { return FeaturesNetflixModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/money-management/presentation */ "JFCQ");
/* harmony import */ var _nequi_features_recharge_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/recharge/core */ "2nTw");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core */ "UGS5");
/* harmony import */ var _features_netflix_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./features-netflix-routing.module */ "bBBZ");
/* harmony import */ var _pages_buy_buy_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/buy/buy.page */ "sRKW");
/* harmony import */ var _pages_help_help_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/help/help.page */ "gUq+");
/* harmony import */ var _pages_terms_terms_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/terms/terms.page */ "8UQT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");














var FeaturesNetflixModule = /** @class */ (function () {
    function FeaturesNetflixModule() {
    }
    FeaturesNetflixModule.ɵfac = function FeaturesNetflixModule_Factory(t) { return new (t || FeaturesNetflixModule)(); };
    FeaturesNetflixModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: FeaturesNetflixModule });
    FeaturesNetflixModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ providers: [
            _nequi_ui__WEBPACK_IMPORTED_MODULE_6__["ConfirmInfoBottomSheetService"],
            _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__["InformationBottomSheetMiddleware"],
            {
                provide: _core__WEBPACK_IMPORTED_MODULE_8__["NetflixInteractor"],
                deps: [_core__WEBPACK_IMPORTED_MODULE_8__["NetflixRepository"], _nequi_features_recharge_core__WEBPACK_IMPORTED_MODULE_5__["RechargesRepository"]],
                useClass: _core__WEBPACK_IMPORTED_MODULE_8__["NetflixInteractor"],
            },
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _features_netflix_routing_module__WEBPACK_IMPORTED_MODULE_9__["FeaturesNetflixRoutingModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _nequi_ui__WEBPACK_IMPORTED_MODULE_6__["NequiUiModule"],
                _nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_4__["FeaturesMoneyManagementModule"],
            ]] });
    return FeaturesNetflixModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](FeaturesNetflixModule, { declarations: [_pages_terms_terms_page__WEBPACK_IMPORTED_MODULE_12__["TermsPage"], _pages_buy_buy_page__WEBPACK_IMPORTED_MODULE_10__["BuyPage"], _pages_help_help_page__WEBPACK_IMPORTED_MODULE_11__["HelpPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _features_netflix_routing_module__WEBPACK_IMPORTED_MODULE_9__["FeaturesNetflixRoutingModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
        _nequi_ui__WEBPACK_IMPORTED_MODULE_6__["NequiUiModule"],
        _nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_4__["FeaturesMoneyManagementModule"]] }); })();


/***/ }),

/***/ "rWqt":
/*!****************************************************************************!*\
  !*** ./libs/features/netflix/src/presentation/pages/terms/terms.config.ts ***!
  \****************************************************************************/
/*! exports provided: TermsConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsConfig", function() { return TermsConfig; });
var TermsConfig = Object.freeze({
    i18n: {
        title: 'netflix.terms.title',
        button: 'netflix.terms.button',
    },
    routes: {
        buyPage: '/admin/netflix/buy',
    },
    analytics: {
        events: {
            netflixIntentionOfBegin: 'Netflix_intencion_recarga',
        },
        clevertap: {
            eventName: 'Netflix_intencion_recarga',
            properties: ['Fecha_intencion'],
        },
    },
});


/***/ }),

/***/ "sRKW":
/*!**********************************************************************!*\
  !*** ./libs/features/netflix/src/presentation/pages/buy/buy.page.ts ***!
  \**********************************************************************/
/*! exports provided: BuyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyPage", function() { return BuyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nequi_commons_exceptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/commons/exceptions */ "0sJq");
/* harmony import */ var _nequi_features_application_data_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/application-data/core */ "UgzZ");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/features/money-management/presentation */ "JFCQ");
/* harmony import */ var _nequi_features_netflix_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nequi/features/netflix/core */ "UGS5");
/* harmony import */ var _nequi_features_recharge_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nequi/features/recharge/core */ "2nTw");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_date__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @nequi/utils/date */ "tGfC");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _config_netflix_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../config/netflix.config */ "v4rG");
/* harmony import */ var _buy_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./buy.config */ "GR45");
/* harmony import */ var _buy_view_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./buy.view-model */ "g3wA");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _money_management_src_presentation_components_balance_header_balance_header_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../money-management/src/presentation/components/balance-header/balance-header.component */ "1rl1");
/* harmony import */ var _ui_src_lib_directives_form_content_style_form_content_style_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../../ui/src/lib/directives/form-content-style/form-content-style.directive */ "+XT3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ui_src_lib_controls_input_select_input_select_control_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../../ui/src/lib/controls/input-select/input-select-control.component */ "BMu5");
/* harmony import */ var _ui_src_lib_directives_message_manager_message_manager_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../../../ui/src/lib/directives/message-manager/message-manager.directive */ "68HU");
/* harmony import */ var _money_management_src_presentation_controls_origin_money_control_origin_money_control_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../../money-management/src/presentation/controls/origin-money-control/origin-money-control.component */ "O3Yd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
































function BuyPage_form_13_nequi_origin_money_control_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nequi-origin-money-control", 22);
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r1.viewModel.pocketControl)("minAmount", ctx_r1.viewModel.package.amount);
} }
var _c0 = function (a0, a1, a2, a3) { return { required: a0, pattern: a1, maxlength: a2, minlength: a3 }; };
var _c1 = function (a0, a2, a3) { return { control: a0, cssClass: "margin-bottom-8", helpMessage: a2, errorMessages: a3 }; };
function BuyPage_form_13_Template(rf, ctx) { if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "nequi-input-select-control", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ion-input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ionFocus", function BuyPage_form_13_Template_ion_input_ionFocus_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); ctx_r2.viewModel.emailControl.markAsUntouched(); return ctx_r2.viewModel.emailControl.markAsPristine(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, BuyPage_form_13_nequi_origin_money_control_13_Template, 1, 2, "nequi-origin-money-control", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.viewModel.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r0.getPackageList.bind(ctx_r0))("label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 9, ctx_r0.config.i18n.form.codePlaceholder))("formControl", ctx_r0.viewModel.codeControl)("hideFilter", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nequiMessageManager", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](28, _c1, ctx_r0.viewModel.emailControl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 11, ctx_r0.config.i18n.form.email.help), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction4"](23, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 13, ctx_r0.config.i18n.form.email.required), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 15, ctx_r0.config.i18n.form.email.wrongEmail), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 17, ctx_r0.config.i18n.form.email.wrongEmail), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 19, ctx_r0.config.i18n.form.email.wrongEmail))));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 21, ctx_r0.config.i18n.form.email.placeholder), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r0.viewModel.emailControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", false);
} }
var BuyPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BuyPage, _super);
    function BuyPage(rechargesInteractor, applicationDataInteractor, userInfoProvider, currencyPipe, cardModalService, analyticsInteractor, injector) {
        var _this = _super.call(this, injector) || this;
        _this.rechargesInteractor = rechargesInteractor;
        _this.applicationDataInteractor = applicationDataInteractor;
        _this.userInfoProvider = userInfoProvider;
        _this.currencyPipe = currencyPipe;
        _this.cardModalService = cardModalService;
        _this.analyticsInteractor = analyticsInteractor;
        _this.viewModel = new _buy_view_model__WEBPACK_IMPORTED_MODULE_16__["BuyViewModel"]();
        _this.config = _buy_config__WEBPACK_IMPORTED_MODULE_15__["BuyConfig"];
        _this.balanceToggle = false;
        _this.translateProvider.loadModule(_config_netflix_config__WEBPACK_IMPORTED_MODULE_14__["NetflixConfig"].i18n.moduleKey);
        return _this;
    }
    BuyPage.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.setEmail();
                return [2 /*return*/];
            });
        });
    };
    BuyPage.prototype.goBack = function () {
        this.navigatorProvider.back();
    };
    BuyPage.prototype.howToUseNetflix = function () {
        this.navigatorProvider.navigateForward(this.config.routes.helpPage);
    };
    BuyPage.prototype.getPackageList = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, packageList;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.rechargesInteractor.getOperatorsByType(_nequi_features_recharge_core__WEBPACK_IMPORTED_MODULE_10__["OperatorType"].NETFLIX)];
                    case 1:
                        _a.operator = (_b.sent())[0];
                        return [4 /*yield*/, this.rechargesInteractor.getPackagesByCode(this.operator.id.toString())];
                    case 2:
                        packageList = _b.sent();
                        return [2 /*return*/, this.getPackageListFormatted(packageList)];
                }
            });
        });
    };
    BuyPage.prototype.makeTransaction = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data, transaction;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                data = {
                    type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_6__["PaymentType"].RECHARGE,
                    merchant: this.operator,
                    additionalInfo: {
                        email: this.viewModel.emailControl.value,
                        package: this.viewModel.codeControl.value,
                        operatorType: _nequi_features_recharge_core__WEBPACK_IMPORTED_MODULE_10__["OperatorType"].NETFLIX,
                    },
                };
                transaction = new _nequi_features_netflix_core__WEBPACK_IMPORTED_MODULE_9__["NetflixTransaction"]()
                    .withData(data)
                    .withAmount(this.viewModel.package.amount)
                    .withPocket(this.viewModel.pocketControl.value);
                _super.prototype.executeTransaction.call(this, transaction);
                return [2 /*return*/];
            });
        });
    };
    BuyPage.prototype.getConfirmationInfo = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                messages = this.translateProvider.get(this.config.i18n.confirmBottomSheet);
                return [2 /*return*/, {
                        title: messages.title,
                        subtitle: messages.subtitle,
                        confirmLabel: messages.title,
                        items: this.viewModel.buildArrayConfirmationItems(messages, this.currencyPipe.transform(this.viewModel.package.amount), this.viewModel.emailControl.value, this.viewModel.package.nameSelected),
                    }];
            });
        });
    };
    BuyPage.prototype.onTransactionSuccess = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.applicationDataInteractor.save(_config_netflix_config__WEBPACK_IMPORTED_MODULE_14__["NetflixConfig"].applicationData.lastEmail, this.viewModel.emailControl.value)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.navigatorProvider.navigateRoot(this.config.routes.dashBoard)];
                    case 2:
                        _a.sent();
                        this.setAnalyticsSuccessRecharge();
                        this.showSuccessModal();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.toastService.showError(error_1.message);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    BuyPage.prototype.onTransactionFailed = function (error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (error instanceof _nequi_commons_exceptions__WEBPACK_IMPORTED_MODULE_3__["ExceedCeilingException"]) {
                    throw error;
                }
                if (error instanceof _nequi_features_netflix_core__WEBPACK_IMPORTED_MODULE_9__["PaymentInProgressException"]) {
                    this.showPaymenInProgressModal();
                    return [2 /*return*/];
                }
                this.toastService.showError(error.message);
                return [2 /*return*/];
            });
        });
    };
    BuyPage.prototype.setAnalyticsSuccessRecharge = function () {
        var analytics = _buy_config__WEBPACK_IMPORTED_MODULE_15__["BuyConfig"].analytics;
        var clevertapParameters = Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_13__["stringsArrayToObjectWithValues"])(_buy_config__WEBPACK_IMPORTED_MODULE_15__["BuyConfig"].analytics.clevertap.properties, [Object(_nequi_utils_date__WEBPACK_IMPORTED_MODULE_12__["getFormattedDateTimes"])(), this.currencyPipe.transform(this.viewModel.package.amount)]);
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_6__["AnalyticsType"].FIREBASE,
            params: { eventName: analytics.events.netflixSuccessRecharge },
        });
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_6__["AnalyticsType"].FACEBOOK,
            params: { eventName: analytics.events.netflixSuccessRecharge },
        });
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_6__["AnalyticsType"].CLEVERTAP,
            params: {
                eventName: analytics.clevertap.eventName,
                eventProps: clevertapParameters,
            },
        });
    };
    BuyPage.prototype.getPackageListFormatted = function (packages) {
        var _this = this;
        return packages.map(function (_package) {
            var amountFormatted = _this.currencyPipe.transform(_package.amount);
            var packageMessageFormatted = _this.translateProvider.get(_this.config.i18n.codeFormatBase, {
                value: amountFormatted,
            });
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ name: amountFormatted, nameSelected: packageMessageFormatted }, _package);
        });
    };
    BuyPage.prototype.showSuccessModal = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        messages = this.translateProvider.get(this.config.i18n.modal.success);
                        return [4 /*yield*/, this.cardModalService.show({
                                title: messages.header,
                                imgPath: messages.image,
                                content: messages.content,
                                buttons: [
                                    {
                                        text: messages.buttons.accept,
                                    },
                                    {
                                        text: messages.buttons.cancel.text,
                                        isLink: messages.buttons.cancel.isLink,
                                        handler: function () { return _this.howToUseNetflix(); },
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
    BuyPage.prototype.showPaymenInProgressModal = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        messages = this.translateProvider.get(this.config.i18n.modal.paymentInProgress);
                        return [4 /*yield*/, this.cardModalService.show({
                                title: messages.header,
                                imgPath: messages.image,
                                content: messages.content,
                                buttons: [
                                    {
                                        text: messages.accept,
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
    BuyPage.prototype.setEmail = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, _b;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.loadingService.show()];
                    case 1:
                        _c.sent();
                        _b = (_a = this.viewModel.emailControl).setValue;
                        return [4 /*yield*/, this.getPreloadEmail()];
                    case 2:
                        _b.apply(_a, [_c.sent()]);
                        return [4 /*yield*/, this.loadingService.hide(true)];
                    case 3:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BuyPage.prototype.getPreloadEmail = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.applicationDataInteractor.findValue(this.config.appData.formDataKey, null)];
                    case 1:
                        data = _a.sent();
                        if (data) {
                            return [2 /*return*/, data];
                        }
                        return [2 /*return*/, this.userInfoProvider.getEmail()];
                }
            });
        });
    };
    BuyPage.ɵfac = function BuyPage_Factory(t) { return new (t || BuyPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_recharge_core__WEBPACK_IMPORTED_MODULE_10__["RechargesInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_application_data_core__WEBPACK_IMPORTED_MODULE_4__["ApplicationDataInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_5__["UserInfoProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_11__["CardModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_6__["AnalyticsInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"])); };
    BuyPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BuyPage, selectors: [["nequi-buy"]], viewQuery: function BuyPage_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_8__["OriginMoneyControlComponent"], 1);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.originMoneyControl = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 26, vars: 17, consts: [[1, "nequi-header"], ["slot", "start"], ["id", "buy_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], ["slot", "end"], [3, "click"], ["slot", "icon-only", 3, "name"], [3, "isShow", "isDarkTheme"], ["appFormContentStyle", "", 1, "ion-content--enroll", "ion-padding-horizontal"], ["id", "buy_title_label", 1, "nequi-title"], ["class", "form", 3, "formGroup", 4, "ngIf"], [1, "nequi-footer"], [1, "nequi-footer__toolbar-text"], ["id", "buy_next_button", "shape", "round", "color", "guayaba", "expand", "block", 1, "margin-vertical-16", 3, "disabled", "click"], [1, "nequi-footer__link"], ["id", "buy_use_link", 1, "nequi-footer__link", 3, "click"], [1, "form", 3, "formGroup"], ["id", "buy_codes_input", "selectedKey", "nameSelected", 3, "options", "label", "formControl", "hideFilter"], ["id", "buy_email_item", 1, "nequi-item", "margin-bottom-8", 3, "nequiMessageManager"], ["position", "floating", 1, "nequi-item__label"], ["id", "buy_email_input", "type", "text", 1, "nequi-item__input", 3, "formControl", "ionFocus"], ["class", "margin-bottom-8", 3, "formControl", "minAmount", 4, "ngIf"], [1, "margin-bottom-8", 3, "formControl", "minAmount"]], template: function BuyPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BuyPage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-buttons", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BuyPage_Template_ion_button_click_6_listener() { return ctx.balanceToggle = !ctx.balanceToggle; });
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
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, BuyPage_form_13_Template, 14, 32, "form", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-footer", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "ion-text", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "ion-button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BuyPage_Template_ion_button_click_19_listener() { return ctx.makeTransaction(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BuyPage_Template_a_click_23_listener() { return ctx.howToUseNetflix(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("name", ctx.balanceToggle ? "chevron-up-outline" : "chevron-down-outline");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("isShow", ctx.balanceToggle)("isDarkTheme", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 9, ctx.config.i18n.title));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.viewModel.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](18, 11, ctx.config.i18n.footer.message), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.viewModel.form.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](21, 13, ctx.config.i18n.footer.button), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](25, 15, ctx.config.i18n.footer.link), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_17__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_17__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_17__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_17__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_17__["IonIcon"], _money_management_src_presentation_components_balance_header_balance_header_component__WEBPACK_IMPORTED_MODULE_18__["BalanceHeaderComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_17__["IonContent"], _ui_src_lib_directives_form_content_style_form_content_style_directive__WEBPACK_IMPORTED_MODULE_19__["FormContentStyleDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_17__["IonText"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_17__["IonFooter"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormGroupDirective"], _ui_src_lib_controls_input_select_input_select_control_component__WEBPACK_IMPORTED_MODULE_21__["InputSelectControlComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormControlDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_17__["IonItem"], _ui_src_lib_directives_message_manager_message_manager_directive__WEBPACK_IMPORTED_MODULE_22__["MessageManagerDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_17__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_17__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_17__["TextValueAccessor"], _money_management_src_presentation_controls_origin_money_control_origin_money_control_component__WEBPACK_IMPORTED_MODULE_23__["OriginMoneyControlComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__["TranslatePipe"]], styles: [".nequi-footer__toolbar[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.nequi-footer__toolbar-text[_ngcontent-%COMP%] {\n  margin: 16px;\n  display: inline-block;\n  font-size: 14px;\n  color: var(--gray-70);\n  line-height: 16.8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvYnV5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFVBQUE7QUFBSjtBQUVJO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFBTiIsImZpbGUiOiJidXkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5lcXVpLWZvb3RlciB7XG4gICZfX3Rvb2xiYXIge1xuICAgIHBhZGRpbmc6IDA7XG5cbiAgICAmLXRleHQge1xuICAgICAgbWFyZ2luOiAxNnB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgY29sb3I6IHZhcigtLWdyYXktNzApO1xuICAgICAgbGluZS1oZWlnaHQ6IDE2LjhweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
    return BuyPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_7__["TransactionBasePage"]));



/***/ }),

/***/ "shq2":
/*!*********************************************************!*\
  !*** ./libs/features/netflix/src/presentation/index.ts ***!
  \*********************************************************/
/*! exports provided: FeaturesNetflixModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _features_netflix_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./features-netflix.module */ "iZ3W");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeaturesNetflixModule", function() { return _features_netflix_module__WEBPACK_IMPORTED_MODULE_0__["FeaturesNetflixModule"]; });




/***/ }),

/***/ "v4rG":
/*!************************************************************!*\
  !*** ./libs/features/netflix/src/config/netflix.config.ts ***!
  \************************************************************/
/*! exports provided: NetflixConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetflixConfig", function() { return NetflixConfig; });
var NetflixConfig = Object.freeze({
    i18n: {
        moduleKey: 'netflix',
        bottomSheet: 'netflix.bottom-sheet',
    },
    applicationData: {
        lastEmail: 'netflix.last-email',
    },
});


/***/ }),

/***/ "yF3l":
/*!**************************************************************************!*\
  !*** ./libs/features/netflix/src/presentation/pages/help/help.config.ts ***!
  \**************************************************************************/
/*! exports provided: HelpConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpConfig", function() { return HelpConfig; });
var HelpConfig = Object.freeze({
    i18n: {
        title: 'netflix.help.title',
        button: 'netflix.help.button',
        content: 'netflix.help.content',
    },
});


/***/ })

}]);
//# sourceMappingURL=nequi-features-netflix-presentation.js.map