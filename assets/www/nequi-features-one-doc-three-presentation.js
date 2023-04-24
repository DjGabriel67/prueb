(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nequi-features-one-doc-three-presentation"],{

/***/ "8sNI":
/*!***************************************************************!*\
  !*** ./libs/features/one-doc-three/src/presentation/index.ts ***!
  \***************************************************************/
/*! exports provided: OneDocThreeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _one_doc_three_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./one-doc-three.module */ "GSbb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OneDocThreeModule", function() { return _one_doc_three_module__WEBPACK_IMPORTED_MODULE_0__["OneDocThreeModule"]; });




/***/ }),

/***/ "BxHZ":
/*!***************************************************************************************************!*\
  !*** ./libs/features/one-doc-three/src/presentation/view-models/one-doc-three-user.view-model.ts ***!
  \***************************************************************************************************/
/*! exports provided: OneDocThreeUserViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneDocThreeUserViewModel", function() { return OneDocThreeUserViewModel; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])();
var OneDocThreeUserViewModel = /** @class */ (function () {
    function OneDocThreeUserViewModel() {
    }
    OneDocThreeUserViewModel.prototype.fromValidateUserEntity = function (entity) {
        this.commerceCode = entity.commerceCode;
        this.contractId = entity.contractId;
        this.lastContractVersion = entity.lastContractVersion;
        this.price = entity.price;
        this.productName = entity.productName;
        this.contract = entity.contract;
        this.url = entity.url;
        this.userId = entity.userId;
        this.email = entity.email;
    };
    OneDocThreeUserViewModel.prototype.toValidateUserEntity = function () {
        return {
            commerceCode: this.commerceCode,
            contractId: this.contractId,
            price: this.price,
            productName: this.productName,
            contract: this.contract,
            userId: this.userId,
            email: this.email,
        };
    };
    return OneDocThreeUserViewModel;
}());



/***/ }),

/***/ "Ffbc":
/*!********************************************************************************!*\
  !*** ./libs/features/one-doc-three/src/presentation/pages/home/home.config.ts ***!
  \********************************************************************************/
/*! exports provided: HomeConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeConfig", function() { return HomeConfig; });
var HomeConfig = Object.freeze({
    i18n: {
        bottomSheetHome: 'one-doc-three.home.bottom-sheet',
        content: 'one-doc-three.home',
        modals: {
            pendingChat: 'one-doc-three.home.modals.pending-chat',
        },
        alerts: {
            unavailableService: 'one-doc-three.home.alerts.unavailable-service',
        },
    },
    bottomSheet: {
        cssClass: 'first-time-message--icon-big',
        button: {
            fill: 'outline',
            color: 'guayaba',
        },
    },
    chatHeaders: {
        authorizationKey: 'authorization',
        userReferenceKey: 'user_reference',
    },
    routes: {
        closet: '/admin/closet/',
        oneDocThreeTerms: '/admin/one-doc-three/terms',
        confirm: '/admin/one-doc-three/confirm',
    },
    pendingChatConfig: {
        webViewTitle: '1DOC3',
        webViewLabel: '',
    },
    analytics: {
        events: {
            purchaseIntention: {
                name: 'undoc3_Intencion_compra',
            },
            paymentIntention: {
                name: '1doc3_Intencion_pago',
                clevertap: {
                    name: '1doc3_Intencion_pago',
                    params: ['Fecha_intencion'],
                },
            },
        },
    },
});


/***/ }),

/***/ "GSbb":
/*!******************************************************************************!*\
  !*** ./libs/features/one-doc-three/src/presentation/one-doc-three.module.ts ***!
  \******************************************************************************/
/*! exports provided: OneDocThreeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneDocThreeModule", function() { return OneDocThreeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/money-management/presentation */ "JFCQ");
/* harmony import */ var _nequi_features_one_doc_three_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/one-doc-three/core */ "GuOC");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _config_one_doc_three_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config/one-doc-three.config */ "rbvJ");
/* harmony import */ var _middlewares_one_doc_three_middleware__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./middlewares/one-doc-three.middleware */ "xXj2");
/* harmony import */ var _one_doc_three_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./one-doc-three-routing-module */ "wbo8");
/* harmony import */ var _pages_confirmation_confirmation_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/confirmation/confirmation.page */ "f7p1");
/* harmony import */ var _pages_home_home_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/home/home.page */ "bBl2");
/* harmony import */ var _pages_terms_terms_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/terms/terms.page */ "YVo4");
/* harmony import */ var _view_models_one_doc_three_user_view_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./view-models/one-doc-three-user.view-model */ "BxHZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");
















var OneDocThreeModule = /** @class */ (function () {
    function OneDocThreeModule() {
    }
    OneDocThreeModule.ɵfac = function OneDocThreeModule_Factory(t) { return new (t || OneDocThreeModule)(); };
    OneDocThreeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: OneDocThreeModule });
    OneDocThreeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ providers: [
            _middlewares_one_doc_three_middleware__WEBPACK_IMPORTED_MODULE_9__["OneDocThreeMiddleware"],
            _nequi_ui__WEBPACK_IMPORTED_MODULE_6__["ConfirmInfoBottomSheetService"],
            _view_models_one_doc_three_user_view_model__WEBPACK_IMPORTED_MODULE_14__["OneDocThreeUserViewModel"],
            {
                provide: _nequi_features_commons__WEBPACK_IMPORTED_MODULE_3__["ModuleConfigProvider"],
                useValue: _config_one_doc_three_config__WEBPACK_IMPORTED_MODULE_8__["OneDocThreeConfig"],
            },
            {
                provide: _nequi_features_one_doc_three_core__WEBPACK_IMPORTED_MODULE_5__["OneDocThreeInteractor"],
                deps: [_nequi_features_one_doc_three_core__WEBPACK_IMPORTED_MODULE_5__["OneDocThreeRepository"]],
                useFactory: function (repository) { return new _nequi_features_one_doc_three_core__WEBPACK_IMPORTED_MODULE_5__["OneDocThreeInteractor"](repository); },
            },
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _one_doc_three_routing_module__WEBPACK_IMPORTED_MODULE_10__["OneDocThreeRoutingModule"],
                _nequi_ui__WEBPACK_IMPORTED_MODULE_6__["NequiUiModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_4__["FeaturesMoneyManagementModule"],
            ]] });
    return OneDocThreeModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](OneDocThreeModule, { declarations: [_pages_home_home_page__WEBPACK_IMPORTED_MODULE_12__["HomePage"], _pages_terms_terms_page__WEBPACK_IMPORTED_MODULE_13__["TermsPage"], _pages_confirmation_confirmation_page__WEBPACK_IMPORTED_MODULE_11__["ConfirmationPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
        _one_doc_three_routing_module__WEBPACK_IMPORTED_MODULE_10__["OneDocThreeRoutingModule"],
        _nequi_ui__WEBPACK_IMPORTED_MODULE_6__["NequiUiModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_4__["FeaturesMoneyManagementModule"]] }); })();


/***/ }),

/***/ "KLz/":
/*!**********************************************************************************!*\
  !*** ./libs/features/one-doc-three/src/presentation/mappers/connectionMapper.ts ***!
  \**********************************************************************************/
/*! exports provided: ConnectionMaper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionMaper", function() { return ConnectionMaper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _pages_confirmation_confirmation_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/confirmation/confirmation.config */ "uYqJ");



var ConnectionMaper = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ConnectionMaper, _super);
    function ConnectionMaper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConnectionMaper.from = function (data) {
        return {
            url: data.connection.url,
            headers: [
                {
                    name: _pages_confirmation_confirmation_config__WEBPACK_IMPORTED_MODULE_2__["ConfirmationConfig"].headersForChat.authorizationKey,
                    value: data.connection.headers.authorization,
                },
                {
                    name: _pages_confirmation_confirmation_config__WEBPACK_IMPORTED_MODULE_2__["ConfirmationConfig"].headersForChat.userReferenceKey,
                    value: data.connection.headers.userReference,
                },
            ],
        };
    };
    return ConnectionMaper;
}(_nequi_features_commons__WEBPACK_IMPORTED_MODULE_1__["BaseMapper"]));



/***/ }),

/***/ "YVo4":
/*!********************************************************************************!*\
  !*** ./libs/features/one-doc-three/src/presentation/pages/terms/terms.page.ts ***!
  \********************************************************************************/
/*! exports provided: TermsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsPage", function() { return TermsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nequi_features_one_doc_three_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/one-doc-three/core */ "GuOC");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _view_models_one_doc_three_user_view_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../view-models/one-doc-three-user.view-model */ "BxHZ");
/* harmony import */ var _terms_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./terms.config */ "v3bG");
/* harmony import */ var _terms_view_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./terms.view-model */ "ZbMr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ui_src_lib_pipes_trust_html_trust_html_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../ui/src/lib/pipes/trust-html/trust-html.pipe */ "FKD1");















var TermsPage = /** @class */ (function () {
    function TermsPage(oneDocThreeInteractor, oneDocThreeUserViewModel, navController, loadingService, toastService) {
        this.oneDocThreeInteractor = oneDocThreeInteractor;
        this.oneDocThreeUserViewModel = oneDocThreeUserViewModel;
        this.navController = navController;
        this.loadingService = loadingService;
        this.toastService = toastService;
        this.viewModel = new _terms_view_model__WEBPACK_IMPORTED_MODULE_6__["TermsViewModel"]();
    }
    TermsPage.prototype.ngOnInit = function () {
        this.viewModel.initControl();
        this.viewModel.terms = this.oneDocThreeUserViewModel.contract;
    };
    TermsPage.prototype.goBack = function () {
        this.navController.back();
    };
    TermsPage.prototype.acceptContract = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingService.show()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 5, , 8]);
                        return [4 /*yield*/, this.oneDocThreeInteractor.acceptTerms({
                                url: this.oneDocThreeUserViewModel.url,
                                productName: this.oneDocThreeUserViewModel.productName,
                                contractId: this.oneDocThreeUserViewModel.contractId,
                                commerceCode: this.oneDocThreeUserViewModel.commerceCode,
                                lastContractVersion: this.oneDocThreeUserViewModel.lastContractVersion,
                                contract: this.oneDocThreeUserViewModel.contract,
                                price: this.oneDocThreeUserViewModel.price.toString(),
                                userId: this.oneDocThreeUserViewModel.userId,
                            })];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.loadingService.hide(true)];
                    case 4:
                        _a.sent();
                        this.navController.navigateBack(_terms_config__WEBPACK_IMPORTED_MODULE_5__["TermsConfig"].routes.confirm);
                        return [3 /*break*/, 8];
                    case 5:
                        error_1 = _a.sent();
                        return [4 /*yield*/, this.loadingService.hide(false)];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, this.toastService.showError(error_1.message)];
                    case 7:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    TermsPage.ɵfac = function TermsPage_Factory(t) { return new (t || TermsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_nequi_features_one_doc_three_core__WEBPACK_IMPORTED_MODULE_2__["OneDocThreeInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_view_models_one_doc_three_user_view_model__WEBPACK_IMPORTED_MODULE_4__["OneDocThreeUserViewModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_3__["ToastService"])); };
    TermsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: TermsPage, selectors: [["app-terms"]], decls: 21, vars: 14, consts: [[1, "nequi-header"], ["slot", "start"], ["id", "terms_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], [1, "ion-content--enroll", "ion-padding-horizontal"], [1, "nequi-title"], [3, "innerHTML"], [1, "nequi-footer"], [1, "nequi-footer__toolbar"], ["lines", "none", 1, "footer__accept-agreement"], ["slot", "start", "id", "terms_accept-agreement_checkbox", 1, "footer__accept-agreement_checkbox", 3, "formControl"], ["id", "terms_accept-agreement_label"], ["id", "terms_accept-agreement_button", "shape", "round", "color", "medianoche", "expand", "block", 1, "nequi-footer__button", 3, "disabled", "click"]], template: function TermsPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TermsPage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "ion-content", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "ion-text", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](10, "trustHTML");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "ion-footer", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "ion-toolbar", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "ion-item", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "ion-checkbox", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "ion-text", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](17, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "ion-button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TermsPage_Template_ion_button_click_18_listener() { return ctx.acceptContract(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](20, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](8, 6, "one-doc-three.terms.title"));
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](10, 8, ctx.viewModel.terms), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formControl", ctx.viewModel.termsControl);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](17, 10, "one-doc-three.terms.accept-terms"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.viewModel.termsControl.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](20, 12, "one-doc-three.terms.button"), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCheckbox"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["BooleanValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControlDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], _ui_src_lib_pipes_trust_html_trust_html_pipe__WEBPACK_IMPORTED_MODULE_10__["TrustHTMLPipe"]], styles: [".footer__accept-agreement[_ngcontent-%COMP%] {\n  padding: 8px 0 8px 0;\n  --background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvdGVybXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usb0JBQUE7RUFDQSx5QkFBQTtBQUFKIiwiZmlsZSI6InRlcm1zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xuICAmX19hY2NlcHQtYWdyZWVtZW50IHtcbiAgICBwYWRkaW5nOiA4cHggMCA4cHggMDtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB9XG59XG4iXX0= */"] });
    return TermsPage;
}());



/***/ }),

/***/ "ZbMr":
/*!**************************************************************************************!*\
  !*** ./libs/features/one-doc-three/src/presentation/pages/terms/terms.view-model.ts ***!
  \**************************************************************************************/
/*! exports provided: TermsViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsViewModel", function() { return TermsViewModel; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");

var TermsViewModel = /** @class */ (function () {
    function TermsViewModel() {
    }
    TermsViewModel.prototype.initControl = function () {
        this.acceptTerms = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](false, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].requiredTrue]);
    };
    Object.defineProperty(TermsViewModel.prototype, "termsControl", {
        get: function () {
            return this.acceptTerms;
        },
        enumerable: false,
        configurable: true
    });
    return TermsViewModel;
}());



/***/ }),

/***/ "b6FA":
/*!***********************************************************************************************!*\
  !*** ./libs/features/one-doc-three/src/presentation/pages/confirmation/confirm.view-model.ts ***!
  \***********************************************************************************************/
/*! exports provided: ConfirmViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmViewModel", function() { return ConfirmViewModel; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");

var ConfirmViewModel = /** @class */ (function () {
    function ConfirmViewModel() {
        this.pocketControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]();
    }
    ConfirmViewModel.prototype.buildForm = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            pocket: this.pocketControl,
        });
        this.form.markAsPristine();
        this.form.markAsUntouched();
    };
    ConfirmViewModel.prototype.buildArrayConfirmationItems = function (messages, amount, email) {
        return [
            {
                label: messages.items.product.label,
                value: messages.items.product.name,
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
    return ConfirmViewModel;
}());



/***/ }),

/***/ "bBl2":
/*!******************************************************************************!*\
  !*** ./libs/features/one-doc-three/src/presentation/pages/home/home.page.ts ***!
  \******************************************************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_features_one_doc_three_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/one-doc-three/core */ "GuOC");
/* harmony import */ var _nequi_native_nequi_web_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/native/nequi-web-view */ "jqqF");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_date__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nequi/utils/date */ "tGfC");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _nequi_utils_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nequi/utils/string */ "p6rB");
/* harmony import */ var _view_models_one_doc_three_user_view_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../view-models/one-doc-three-user.view-model */ "BxHZ");
/* harmony import */ var _home_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home.config */ "Ffbc");
/* harmony import */ var _home_view_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home.view-model */ "j30d");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ui_src_lib_components_busy_indicator_busy_indicator_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../ui/src/lib/components/busy-indicator/busy-indicator.component */ "N6nj");
/* harmony import */ var _ui_src_lib_components_item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../ui/src/lib/components/item-detail/item-detail.component */ "Ycc7");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");




























function HomePage_div_9_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "app-busy-indicator", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onReload", function HomePage_div_9_Template_app_busy_indicator_onReload_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.validateUser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showReload", ctx_r0.viewModel.isFailed)("reloadMessage", ctx_r0.viewModel.failedMessage);
} }
var _c0 = function (a0) { return { value: a0 }; };
function HomePage_ng_container_10_app_item_detail_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-item-detail", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    var item_r6 = ctx.$implicit;
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", item_r6.icon)("title", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](1, 3, item_r6.title, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c0, ctx_r5.oneDocThreeUserViewModel.price)))("description", item_r6.description);
} }
function HomePage_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HomePage_ng_container_10_app_item_detail_1_Template, 2, 8, "app-item-detail", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.viewModel.items);
} }
function HomePage_ion_footer_11_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-footer", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomePage_ion_footer_11_Template_ion_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.validateNavigation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomePage_ion_footer_11_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.openTerms(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 2, "one-doc-three.home.button-label"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 4, "one-doc-three.home.terms"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
var HomePage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HomePage, _super);
    function HomePage(injector, oneDocThreeUserViewModel, oneDocThreeInteractor, translateProvider, alertService, cardModalService, nequiWebView, currencyPipe, analyticsInteractor) {
        var _this = _super.call(this, injector) || this;
        _this.oneDocThreeUserViewModel = oneDocThreeUserViewModel;
        _this.oneDocThreeInteractor = oneDocThreeInteractor;
        _this.translateProvider = translateProvider;
        _this.alertService = alertService;
        _this.cardModalService = cardModalService;
        _this.nequiWebView = nequiWebView;
        _this.currencyPipe = currencyPipe;
        _this.analyticsInteractor = analyticsInteractor;
        _this.viewModel = new _home_view_model__WEBPACK_IMPORTED_MODULE_14__["HomeViewModel"]();
        return _this;
    }
    HomePage.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var texts;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        texts = this.translateProvider.get(_home_config__WEBPACK_IMPORTED_MODULE_13__["HomeConfig"].i18n.content);
                        this.viewModel.items = texts.content;
                        this.viewModel.reloadMessage = texts['reload-message'];
                        if (this.oneDocThreeUserViewModel.isUserValidated) {
                            this.loadPriceToText();
                            this.viewModel.setSuccess();
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.validateUser()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.validateUser = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var validateUserEntity, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        this.viewModel.setLoading();
                        return [4 /*yield*/, this.oneDocThreeInteractor.validateUser()];
                    case 1:
                        validateUserEntity = _a.sent();
                        this.oneDocThreeUserViewModel.fromValidateUserEntity(validateUserEntity);
                        this.loadPriceToText();
                        this.viewModel.setSuccess();
                        return [3 /*break*/, 4];
                    case 2:
                        error_1 = _a.sent();
                        return [4 /*yield*/, this.processError(error_1)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.validateNavigation = function () {
        this.setAnalytics();
        if (this.oneDocThreeUserViewModel.shouldShowTerms) {
            this.navController.navigateForward(_home_config__WEBPACK_IMPORTED_MODULE_13__["HomeConfig"].routes.oneDocThreeTerms);
            return;
        }
        this.navController.navigateForward(_home_config__WEBPACK_IMPORTED_MODULE_13__["HomeConfig"].routes.confirm);
    };
    HomePage.prototype.openTerms = function () {
        Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_10__["openUrl"])(this.oneDocThreeUserViewModel.url);
    };
    HomePage.prototype.processError = function (error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (error instanceof _nequi_features_one_doc_three_core__WEBPACK_IMPORTED_MODULE_6__["ContractNotAcceptedException"]) {
                    this.oneDocThreeUserViewModel.fromValidateUserEntity(error.data);
                    this.oneDocThreeUserViewModel.shouldShowTerms = true;
                    this.loadPriceToText();
                    this.viewModel.setSuccess();
                    return [2 /*return*/];
                }
                if (error instanceof _nequi_features_one_doc_three_core__WEBPACK_IMPORTED_MODULE_6__["PendingChatException"]) {
                    this.oneDocThreeUserViewModel.price = error.data.price;
                    this.loadPriceToText();
                    this.viewModel.pendingChatParams = {
                        url: error.data.url,
                        headers: [
                            {
                                name: _home_config__WEBPACK_IMPORTED_MODULE_13__["HomeConfig"].chatHeaders.authorizationKey,
                                value: error.data.headers.authorization,
                            },
                            {
                                name: _home_config__WEBPACK_IMPORTED_MODULE_13__["HomeConfig"].chatHeaders.userReferenceKey,
                                value: error.data.headers.userReference,
                            },
                        ],
                    };
                    this.viewModel.setSuccess();
                    return [2 /*return*/, this.showPendingChatCardModal()];
                }
                if (error instanceof _nequi_features_one_doc_three_core__WEBPACK_IMPORTED_MODULE_6__["UnavailableServiceException"]) {
                    this.viewModel.setFail(this.viewModel.reloadMessage);
                    return [2 /*return*/, this.showErrorAlert()];
                }
                this.viewModel.setFail(this.viewModel.reloadMessage);
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.loadPriceToText = function () {
        var _this = this;
        this.viewModel.items = this.viewModel.items.map(function (item) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item), { title: Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_11__["createFormat"])(item.title, [
                    _this.currencyPipe.transform(_this.oneDocThreeUserViewModel.price.toString()),
                ]) });
        });
    };
    HomePage.prototype.showPendingChatCardModal = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                modal = this.translateProvider.get(_home_config__WEBPACK_IMPORTED_MODULE_13__["HomeConfig"].i18n.modals.pendingChat);
                this.cardModalService.show({
                    imgPath: modal.image,
                    title: modal.title,
                    content: modal.description,
                    buttons: [
                        {
                            text: modal.button,
                            handler: function () { return _this.openWebView(); },
                        },
                    ],
                });
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.showErrorAlert = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                alert = this.translateProvider.get(_home_config__WEBPACK_IMPORTED_MODULE_13__["HomeConfig"].i18n.alerts.unavailableService);
                this.alertService.show({
                    messages: {
                        header: alert.title,
                        message: alert.message,
                        buttons: {
                            accept: alert.button,
                        },
                    },
                    handlers: {
                        accept: function () { return _this.navController.navigateBack(_home_config__WEBPACK_IMPORTED_MODULE_13__["HomeConfig"].routes.closet); },
                    },
                });
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.openWebView = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.nequiWebView.launchWebView({
                            url: this.viewModel.pendingChatParams.url,
                            title: _home_config__WEBPACK_IMPORTED_MODULE_13__["HomeConfig"].pendingChatConfig.webViewTitle,
                            loadLabel: _home_config__WEBPACK_IMPORTED_MODULE_13__["HomeConfig"].pendingChatConfig.webViewLabel,
                            headers: this.viewModel.pendingChatParams.headers,
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.setAnalytics = function () {
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__["AnalyticsType"].FACEBOOK,
            params: { eventName: _home_config__WEBPACK_IMPORTED_MODULE_13__["HomeConfig"].analytics.events.paymentIntention.name },
        });
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__["AnalyticsType"].FIREBASE,
            params: { eventName: _home_config__WEBPACK_IMPORTED_MODULE_13__["HomeConfig"].analytics.events.paymentIntention.name },
        });
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__["AnalyticsType"].CLEVERTAP,
            params: {
                eventName: _home_config__WEBPACK_IMPORTED_MODULE_13__["HomeConfig"].analytics.events.paymentIntention.name,
                eventProps: Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_10__["stringsArrayToObjectWithValues"])(_home_config__WEBPACK_IMPORTED_MODULE_13__["HomeConfig"].analytics.events.paymentIntention.clevertap.params, [Object(_nequi_utils_date__WEBPACK_IMPORTED_MODULE_9__["getFormattedDateTimes"])()]),
            },
        });
    };
    HomePage.ɵfac = function HomePage_Factory(t) { return new (t || HomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_view_models_one_doc_three_user_view_model__WEBPACK_IMPORTED_MODULE_12__["OneDocThreeUserViewModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_one_doc_three_core__WEBPACK_IMPORTED_MODULE_6__["OneDocThreeInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_5__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_4__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_8__["CardModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_native_nequi_web_view__WEBPACK_IMPORTED_MODULE_7__["NequiWebView"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__["AnalyticsInteractor"])); };
    HomePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomePage, selectors: [["app-home"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 12, vars: 6, consts: [[1, "nequi-header"], ["slot", "start"], ["id", "one-doc-three_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], [1, "ion-content--enroll", "ion-padding-horizontal"], [1, "nequi-title"], ["class", "loading_container", 4, "ngIf"], [4, "ngIf"], ["class", "nequi-footer", 4, "ngIf"], [1, "loading_container"], [3, "showReload", "reloadMessage", "onReload"], [3, "icon", "title", "description", 4, "ngFor", "ngForOf"], [3, "icon", "title", "description"], [1, "nequi-footer"], [1, "nequi-footer__toolbar", "ion-padding-horizontal"], ["color", "guayaba", "shape", "round", "expand", "block", 3, "click"], [1, "nequi-link", 3, "innerHTML", "click"]], template: function HomePage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomePage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
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
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, HomePage_div_9_Template, 2, 2, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, HomePage_ng_container_10_Template, 2, 1, "ng-container", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, HomePage_ion_footer_11_Template, 7, 6, "ion-footer", 8);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 4, "one-doc-three.home.title"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.viewModel.isSuccess);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.viewModel.isSuccess);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.viewModel.isSuccess);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonText"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ui_src_lib_components_busy_indicator_busy_indicator_component__WEBPACK_IMPORTED_MODULE_16__["BusyIndicatorComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _ui_src_lib_components_item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_17__["ItemDetailComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonFooter"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["TranslatePipe"]], styles: [".nequi-footer.toolbar[_ngcontent-%COMP%] {\n  --padding-bottom: 0;\n  --padding-top: 0;\n}\n\n.nequi-link[_ngcontent-%COMP%] {\n  display: block;\n  margin: 8px auto;\n  text-align: center;\n  font-size: 14px;\n  color: var(--input-purple);\n}\n\n.loading_container[_ngcontent-%COMP%] {\n  height: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBSUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtBQURGOztBQUlBO0VBQ0UsV0FBQTtBQURGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5lcXVpLWZvb3RlciB7XG4gICYudG9vbGJhciB7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgICAtLXBhZGRpbmctdG9wOiAwO1xuICB9XG59XG5cbi5uZXF1aS1saW5rIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogOHB4IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0taW5wdXQtcHVycGxlKTtcbn1cblxuLmxvYWRpbmdfY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA4MCU7XG59XG4iXX0= */"] });
    return HomePage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_4__["FeatureBasePage"]));



/***/ }),

/***/ "f7p1":
/*!**********************************************************************************************!*\
  !*** ./libs/features/one-doc-three/src/presentation/pages/confirmation/confirmation.page.ts ***!
  \**********************************************************************************************/
/*! exports provided: ConfirmationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationPage", function() { return ConfirmationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nequi_commons_exceptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/commons/exceptions */ "0sJq");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_one_doc_three_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/one-doc-three/core */ "GuOC");
/* harmony import */ var _nequi_native_nequi_web_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/native/nequi-web-view */ "jqqF");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _mappers_connectionMapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../mappers/connectionMapper */ "KLz/");
/* harmony import */ var _view_models_one_doc_three_user_view_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../view-models/one-doc-three-user.view-model */ "BxHZ");
/* harmony import */ var _confirm_view_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./confirm.view-model */ "b6FA");
/* harmony import */ var _confirmation_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./confirmation.config */ "uYqJ");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ui_src_lib_directives_nequi_currency_style_nequi_currency_style_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../ui/src/lib/directives/nequi-currency-style/nequi-currency-style.directive */ "kVXI");
/* harmony import */ var _money_management_src_presentation_controls_origin_money_control_origin_money_control_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../money-management/src/presentation/controls/origin-money-control/origin-money-control.component */ "O3Yd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
























function ConfirmationPage_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-item", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "nequi-origin-money-control", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 3, "one-doc-three.confirmation.origin-money"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("minAmount", ctx_r0.oneDocThreeUserViewModel.price)("formControl", ctx_r0.viewModel.pocketControl);
} }
var ConfirmationPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ConfirmationPage, _super);
    function ConfirmationPage(oneDocThreeUserViewModel, currencyPipe, nequiWebView, cardModalService, loggerInteractor, analyticsInteractor, injector) {
        var _this = _super.call(this, injector) || this;
        _this.oneDocThreeUserViewModel = oneDocThreeUserViewModel;
        _this.currencyPipe = currencyPipe;
        _this.nequiWebView = nequiWebView;
        _this.cardModalService = cardModalService;
        _this.loggerInteractor = loggerInteractor;
        _this.analyticsInteractor = analyticsInteractor;
        _this.viewModel = new _confirm_view_model__WEBPACK_IMPORTED_MODULE_11__["ConfirmViewModel"]();
        return _this;
    }
    ConfirmationPage.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingService.show()];
                    case 1:
                        _a.sent();
                        this.viewModel.buildForm();
                        return [4 /*yield*/, this.loadingService.hideWithoutFeedback()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ConfirmationPage.prototype.navigate = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.pay();
                return [2 /*return*/];
            });
        });
    };
    ConfirmationPage.prototype.onTransactionSuccess = function (response) {
        this.setAnalytics();
        this.successResponse(_mappers_connectionMapper__WEBPACK_IMPORTED_MODULE_9__["ConnectionMaper"].from(response));
    };
    ConfirmationPage.prototype.onTransactionFailed = function (error) {
        if (error.constructor !== _nequi_commons_exceptions__WEBPACK_IMPORTED_MODULE_3__["CoreException"]) {
            throw error;
        }
        this.toastService.showError(error.message);
    };
    ConfirmationPage.prototype.getConfirmationInfo = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                messages = this.translateProvider.get(_confirmation_config__WEBPACK_IMPORTED_MODULE_12__["ConfirmationConfig"].i18n.confirmBottomSheet);
                return [2 /*return*/, {
                        title: messages.title,
                        subtitle: messages.subtitle,
                        items: this.viewModel.buildArrayConfirmationItems(messages, this.currencyPipe.transform(this.oneDocThreeUserViewModel.price), this.oneDocThreeUserViewModel.email),
                        confirmLabel: messages.title,
                        viewCancel: false,
                    }];
            });
        });
    };
    ConfirmationPage.prototype.pay = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data, pocket, transaction;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                data = this.oneDocThreeUserViewModel.toValidateUserEntity();
                pocket = this.viewModel.pocketControl.value;
                transaction = new _nequi_features_one_doc_three_core__WEBPACK_IMPORTED_MODULE_6__["DOCPaymentTransaction"]()
                    .withData(data)
                    .withPocket(pocket)
                    .withAmount(this.oneDocThreeUserViewModel.price);
                _super.prototype.executeTransaction.call(this, transaction);
                return [2 /*return*/];
            });
        });
    };
    ConfirmationPage.prototype.successResponse = function (response) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                messages = this.translateProvider.get(_confirmation_config__WEBPACK_IMPORTED_MODULE_12__["ConfirmationConfig"].i18n.cardModal);
                this.cardModalService.show({
                    imgPath: messages.icon,
                    title: messages.title,
                    content: messages.content,
                    buttons: [
                        {
                            text: messages.buttons.next,
                            handler: function () { return _this.openWebView(response); },
                        },
                    ],
                });
                return [2 /*return*/];
            });
        });
    };
    ConfirmationPage.prototype.openWebView = function (response) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var err_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.nequiWebView.launchWebView({
                                url: response.url,
                                title: _confirmation_config__WEBPACK_IMPORTED_MODULE_12__["ConfirmationConfig"].webViewTitle,
                                loadLabel: _confirmation_config__WEBPACK_IMPORTED_MODULE_12__["ConfirmationConfig"].webViewLabel,
                                headers: response.headers,
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        this.loggerInteractor.error("[OneDocThree][webview] " + JSON.stringify(err_1));
                        return [3 /*break*/, 3];
                    case 3:
                        this.navigatorProvider.navigateForward(_confirmation_config__WEBPACK_IMPORTED_MODULE_12__["ConfirmationConfig"].routes.closet);
                        return [2 /*return*/];
                }
            });
        });
    };
    ConfirmationPage.prototype.setAnalytics = function () {
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["AnalyticsType"].FACEBOOK,
            params: { eventName: _confirmation_config__WEBPACK_IMPORTED_MODULE_12__["ConfirmationConfig"].analytics.events.successfulPayment },
        });
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["AnalyticsType"].FIREBASE,
            params: { eventName: _confirmation_config__WEBPACK_IMPORTED_MODULE_12__["ConfirmationConfig"].analytics.events.successfulPayment },
        });
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["AnalyticsType"].CLEVERTAP,
            params: { eventName: _confirmation_config__WEBPACK_IMPORTED_MODULE_12__["ConfirmationConfig"].analytics.events.successfulPayment },
        });
    };
    ConfirmationPage.ɵfac = function ConfirmationPage_Factory(t) { return new (t || ConfirmationPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_view_models_one_doc_three_user_view_model__WEBPACK_IMPORTED_MODULE_10__["OneDocThreeUserViewModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_native_nequi_web_view__WEBPACK_IMPORTED_MODULE_7__["NequiWebView"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_8__["CardModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["LoggerInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["AnalyticsInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"])); };
    ConfirmationPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ConfirmationPage, selectors: [["app-confirmation"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 20, vars: 11, consts: [[1, "nequi-header"], ["slot", "start"], ["id", "one-doc-three-confirm_back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], ["fullscreen", "true", 1, "ion-padding-horizontal", "ion-content--white"], ["id", "confirmation_title_label", 1, "nequi-title"], [1, "confirmation-container"], ["id", "confirmation_how-much_label", 1, "confirmation-text"], ["id", "confirmation_amount_label", 3, "nequiCurrencyStyle"], [4, "ngIf"], [1, "nequi-footer", "nequi-footer--padding-24"], ["id", "confirmation_next_button", "shape", "round", "color", "guayaba", "expand", "block", 3, "click"], ["lines", "none", 1, "ion-no-padding", "nequi-item-no-background", "nequi-item-no-lines"], ["id", "confirmation_origin-money_label"], [1, "margin-bottom-8", 3, "minAmount", "formControl"]], template: function ConfirmationPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ConfirmationPage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
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
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-text", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "ion-text", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ConfirmationPage_div_14_Template, 6, 5, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ion-footer", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "ion-button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ConfirmationPage_Template_ion_button_click_17_listener() { return ctx.navigate(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 5, "one-doc-three.confirmation.title"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 7, "one-doc-three.confirmation.how-much"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nequiCurrencyStyle", ctx.oneDocThreeUserViewModel.price);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 9, "one-doc-three.confirmation.buttons.next"), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_13__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["IonText"], _ui_src_lib_directives_nequi_currency_style_nequi_currency_style_directive__WEBPACK_IMPORTED_MODULE_14__["NequiCurrencyStyleDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["IonLabel"], _money_management_src_presentation_controls_origin_money_control_origin_money_control_component__WEBPACK_IMPORTED_MODULE_15__["OriginMoneyControlComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormControlDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslatePipe"]], styles: [".confirmation-container[_ngcontent-%COMP%] {\n  margin-left: 15px;\n}\n\n.confirmation-text[_ngcontent-%COMP%] {\n  color: var(--card-modal-text);\n  font-size: 14px;\n  margin-top: 0;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvY29uZmlybWF0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQUNGIiwiZmlsZSI6ImNvbmZpcm1hdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29uZmlybWF0aW9uLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4uY29uZmlybWF0aW9uLXRleHQge1xuICBjb2xvcjogdmFyKC0tY2FyZC1tb2RhbC10ZXh0KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tdG9wOiAwO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiJdfQ== */"] });
    return ConfirmationPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__["TransactionBasePage"]));



/***/ }),

/***/ "j30d":
/*!************************************************************************************!*\
  !*** ./libs/features/one-doc-three/src/presentation/pages/home/home.view-model.ts ***!
  \************************************************************************************/
/*! exports provided: HomeViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeViewModel", function() { return HomeViewModel; });
var HomeViewModel = /** @class */ (function () {
    function HomeViewModel() {
        this.items = [];
        this.isLoading = false;
        this.isSuccess = false;
        this.isFailed = false;
        this.failedMessage = null;
    }
    HomeViewModel.prototype.setLoading = function () {
        this.isLoading = true;
        this.isSuccess = false;
        this.isFailed = false;
        this.failedMessage = null;
    };
    HomeViewModel.prototype.setSuccess = function () {
        this.isLoading = false;
        this.isSuccess = true;
        this.isFailed = false;
        this.failedMessage = null;
    };
    HomeViewModel.prototype.setFail = function (failedMessage) {
        this.isFailed = true;
        this.failedMessage = failedMessage;
        this.isLoading = false;
        this.isSuccess = false;
    };
    return HomeViewModel;
}());



/***/ }),

/***/ "rbvJ":
/*!************************************************************************!*\
  !*** ./libs/features/one-doc-three/src/config/one-doc-three.config.ts ***!
  \************************************************************************/
/*! exports provided: OneDocThreeConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneDocThreeConfig", function() { return OneDocThreeConfig; });
var OneDocThreeConfig = Object.freeze({
    i18n: {
        moduleKey: 'one-doc-three',
    },
    applicationData: {
        oneDocThreeFirstMessage: 'one-doc-three.first-message',
    },
});


/***/ }),

/***/ "uYqJ":
/*!************************************************************************************************!*\
  !*** ./libs/features/one-doc-three/src/presentation/pages/confirmation/confirmation.config.ts ***!
  \************************************************************************************************/
/*! exports provided: ConfirmationConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationConfig", function() { return ConfirmationConfig; });
var ConfirmationConfig = Object.freeze({
    i18n: {
        confirmBottomSheet: 'one-doc-three.confirmation.bottom-sheet',
        pinChallengeMessage: 'one-doc-three.confirmation.pin-challenge',
        cardModal: 'one-doc-three.payment-success',
    },
    headersForChat: {
        authorizationKey: 'authorization',
        userReferenceKey: 'user_reference',
    },
    webViewTitle: '1DOC3',
    webViewLabel: '',
    routes: {
        closet: '/admin/closet/',
    },
    analytics: {
        events: {
            successfulPayment: '1doc3_pago_exitoso',
        },
    },
});


/***/ }),

/***/ "v3bG":
/*!**********************************************************************************!*\
  !*** ./libs/features/one-doc-three/src/presentation/pages/terms/terms.config.ts ***!
  \**********************************************************************************/
/*! exports provided: TermsConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsConfig", function() { return TermsConfig; });
var TermsConfig = Object.freeze({
    routes: {
        confirm: '/admin/one-doc-three/confirm',
    },
});


/***/ }),

/***/ "wbo8":
/*!**************************************************************************************!*\
  !*** ./libs/features/one-doc-three/src/presentation/one-doc-three-routing-module.ts ***!
  \**************************************************************************************/
/*! exports provided: OneDocThreeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneDocThreeRoutingModule", function() { return OneDocThreeRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _middlewares_one_doc_three_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./middlewares/one-doc-three.middleware */ "xXj2");
/* harmony import */ var _pages_confirmation_confirmation_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/confirmation/confirmation.page */ "f7p1");
/* harmony import */ var _pages_home_home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.page */ "bBl2");
/* harmony import */ var _pages_terms_terms_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/terms/terms.page */ "YVo4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







var routes = [
    {
        path: '',
        component: _pages_home_home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
        canActivate: [_middlewares_one_doc_three_middleware__WEBPACK_IMPORTED_MODULE_1__["OneDocThreeMiddleware"]],
    },
    {
        path: 'terms',
        component: _pages_terms_terms_page__WEBPACK_IMPORTED_MODULE_4__["TermsPage"],
    },
    {
        path: 'confirm',
        component: _pages_confirmation_confirmation_page__WEBPACK_IMPORTED_MODULE_2__["ConfirmationPage"],
    },
];
var OneDocThreeRoutingModule = /** @class */ (function () {
    function OneDocThreeRoutingModule() {
    }
    OneDocThreeRoutingModule.ɵfac = function OneDocThreeRoutingModule_Factory(t) { return new (t || OneDocThreeRoutingModule)(); };
    OneDocThreeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: OneDocThreeRoutingModule });
    OneDocThreeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return OneDocThreeRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](OneDocThreeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xXj2":
/*!**********************************************************************************************!*\
  !*** ./libs/features/one-doc-three/src/presentation/middlewares/one-doc-three.middleware.ts ***!
  \**********************************************************************************************/
/*! exports provided: OneDocThreeMiddleware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneDocThreeMiddleware", function() { return OneDocThreeMiddleware; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_application_data_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/application-data/core */ "UgzZ");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_features_one_doc_three_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/one-doc-three/core */ "GuOC");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _pages_home_home_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pages/home/home.config */ "Ffbc");
/* harmony import */ var _view_models_one_doc_three_user_view_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../view-models/one-doc-three-user.view-model */ "BxHZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");


















var OneDocThreeMiddleware = /** @class */ (function () {
    function OneDocThreeMiddleware(currencyPipe, oneDocThreeInteractor, oneDocThreeUserViewModel, loadingService, applicationDataInteractor, firstTimeMessageBottomSheetService, translateProvider, moduleConfigProvider, analyticsInteractor) {
        this.currencyPipe = currencyPipe;
        this.oneDocThreeInteractor = oneDocThreeInteractor;
        this.oneDocThreeUserViewModel = oneDocThreeUserViewModel;
        this.loadingService = loadingService;
        this.applicationDataInteractor = applicationDataInteractor;
        this.firstTimeMessageBottomSheetService = firstTimeMessageBottomSheetService;
        this.translateProvider = translateProvider;
        this.moduleConfigProvider = moduleConfigProvider;
        this.analyticsInteractor = analyticsInteractor;
    }
    OneDocThreeMiddleware.prototype.canActivate = function (_route, _state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var isUserValidated, result;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.translateProvider.loadModule(this.moduleConfigProvider.i18n.moduleKey)];
                    case 1:
                        _a.sent();
                        this.setAnalyticsPurchaseIntention();
                        return [4 /*yield*/, this.checkBottomSheetVisualization()];
                    case 2:
                        if (!_a.sent()) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.validateUser()];
                    case 3:
                        isUserValidated = _a.sent();
                        if (!isUserValidated) {
                            return [2 /*return*/, false];
                        }
                        this.oneDocThreeUserViewModel.isUserValidated = true;
                        return [4 /*yield*/, this.showBottomSheet()];
                    case 4:
                        result = _a.sent();
                        if (result) {
                            return [2 /*return*/, true];
                        }
                        _a.label = 5;
                    case 5:
                        this.oneDocThreeUserViewModel.isUserValidated = false;
                        return [2 /*return*/, true];
                }
            });
        });
    };
    OneDocThreeMiddleware.prototype.validateUser = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var validateUserEntity, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 6]);
                        return [4 /*yield*/, this.loadingService.show()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.oneDocThreeInteractor.validateUser()];
                    case 2:
                        validateUserEntity = _a.sent();
                        this.oneDocThreeUserViewModel.fromValidateUserEntity(validateUserEntity);
                        return [4 /*yield*/, this.loadingService.hide(true)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 4:
                        error_1 = _a.sent();
                        return [4 /*yield*/, this.loadingService.hideWithoutFeedback()];
                    case 5:
                        _a.sent();
                        return [2 /*return*/, this.processError(error_1)];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    OneDocThreeMiddleware.prototype.processError = function (error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (error instanceof _nequi_features_one_doc_three_core__WEBPACK_IMPORTED_MODULE_6__["ContractNotAcceptedException"]) {
                    this.oneDocThreeUserViewModel.fromValidateUserEntity(error.data);
                    this.oneDocThreeUserViewModel.shouldShowTerms = true;
                    return [2 /*return*/, true];
                }
                throw error;
            });
        });
    };
    OneDocThreeMiddleware.prototype.checkBottomSheetVisualization = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var shouldNotShowFirstMessage;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.applicationDataInteractor.findValue(this.moduleConfigProvider.applicationData.oneDocThreeFirstMessage, false)];
                    case 1:
                        shouldNotShowFirstMessage = _a.sent();
                        if (!shouldNotShowFirstMessage) {
                            return [2 /*return*/, true];
                        }
                        return [2 /*return*/, false];
                }
            });
        });
    };
    OneDocThreeMiddleware.prototype.showBottomSheet = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var bottomSheet, result;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        bottomSheet = this.translateProvider.get(_pages_home_home_config__WEBPACK_IMPORTED_MODULE_8__["HomeConfig"].i18n.bottomSheetHome);
                        return [4 /*yield*/, this.firstTimeMessageBottomSheetService.show({
                                icon: bottomSheet.image,
                                message: bottomSheet.title,
                                content: bottomSheet.content,
                                cssClass: _pages_home_home_config__WEBPACK_IMPORTED_MODULE_8__["HomeConfig"].bottomSheet.cssClass,
                                button: {
                                    label: bottomSheet.button,
                                    fill: _pages_home_home_config__WEBPACK_IMPORTED_MODULE_8__["HomeConfig"].bottomSheet.button.fill,
                                    color: _pages_home_home_config__WEBPACK_IMPORTED_MODULE_8__["HomeConfig"].bottomSheet.button.color,
                                    action: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, this.applicationDataInteractor.save(this.moduleConfigProvider.applicationData.oneDocThreeFirstMessage, true)];
                                                case 1:
                                                    _a.sent();
                                                    this.firstTimeMessageBottomSheetService.hide(true);
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); },
                                },
                                header: {
                                    view: true,
                                    action: function () { return _this.firstTimeMessageBottomSheetService.hide(false); },
                                },
                            })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data];
                }
            });
        });
    };
    OneDocThreeMiddleware.prototype.setAnalyticsPurchaseIntention = function () {
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["AnalyticsType"].FACEBOOK,
            params: {
                eventName: _pages_home_home_config__WEBPACK_IMPORTED_MODULE_8__["HomeConfig"].analytics.events.purchaseIntention.name,
            },
        });
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["AnalyticsType"].FIREBASE,
            params: { eventName: _pages_home_home_config__WEBPACK_IMPORTED_MODULE_8__["HomeConfig"].analytics.events.purchaseIntention.name },
        });
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["AnalyticsType"].CLEVERTAP,
            params: {
                eventName: _pages_home_home_config__WEBPACK_IMPORTED_MODULE_8__["HomeConfig"].analytics.events.purchaseIntention.name,
            },
        });
    };
    OneDocThreeMiddleware.ɵfac = function OneDocThreeMiddleware_Factory(t) { return new (t || OneDocThreeMiddleware)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_nequi_features_one_doc_three_core__WEBPACK_IMPORTED_MODULE_6__["OneDocThreeInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_view_models_one_doc_three_user_view_model__WEBPACK_IMPORTED_MODULE_9__["OneDocThreeUserViewModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_7__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_nequi_features_application_data_core__WEBPACK_IMPORTED_MODULE_3__["ApplicationDataInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_7__["FirstTimeMessageBottomSheetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_5__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_5__["ModuleConfigProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["AnalyticsInteractor"])); };
    OneDocThreeMiddleware.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({ token: OneDocThreeMiddleware, factory: OneDocThreeMiddleware.ɵfac });
    return OneDocThreeMiddleware;
}());



/***/ })

}]);
//# sourceMappingURL=nequi-features-one-doc-three-presentation.js.map