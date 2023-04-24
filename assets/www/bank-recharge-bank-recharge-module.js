(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bank-recharge-bank-recharge-module"],{

/***/ "2cn+":
/*!*************************************************************************************************************!*\
  !*** ./libs/features/send/src/presentation/bank-recharge/link-bank-account/link-bank-account.view-model.ts ***!
  \*************************************************************************************************************/
/*! exports provided: LinkBankAccountViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkBankAccountViewModel", function() { return LinkBankAccountViewModel; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _link_bank_account_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./link-bank-account.config */ "MHN+");



var LinkBankAccountViewModel = /** @class */ (function () {
    function LinkBankAccountViewModel() {
        this.accountTypeOptions = [];
    }
    LinkBankAccountViewModel.prototype.initForm = function () {
        this.createFormGroup();
    };
    LinkBankAccountViewModel.prototype.getBankAccount = function () {
        return {
            type: this.form.value.accountType.alias,
            // eslint-disable-next-line id-blacklist
            number: this.form.value.accountNumber,
        };
    };
    LinkBankAccountViewModel.prototype.createFormGroup = function () {
        this.accountNumberFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(_link_bank_account_config__WEBPACK_IMPORTED_MODULE_2__["LinkBankAccountConfig"].validators.minLength),
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(_link_bank_account_config__WEBPACK_IMPORTED_MODULE_2__["LinkBankAccountConfig"].validators.maxLength),
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(_link_bank_account_config__WEBPACK_IMPORTED_MODULE_2__["LinkBankAccountConfig"].validators.pattern),
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
        ]);
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            accountType: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            accountNumber: this.accountNumberFormControl,
        });
        Object(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_1__["clearFormErrors"])(this.form);
    };
    return LinkBankAccountViewModel;
}());



/***/ }),

/***/ "4UvZ":
/*!***********************************************************************************************************!*\
  !*** ./libs/features/send/src/presentation/bank-recharge/token-validation/token-validation.view-model.ts ***!
  \***********************************************************************************************************/
/*! exports provided: TokenValidationViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenValidationViewModel", function() { return TokenValidationViewModel; });
/* harmony import */ var _token_validation_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token-validation.config */ "u8DI");

var TokenValidationViewModel = /** @class */ (function () {
    function TokenValidationViewModel() {
        this.size = _token_validation_config__WEBPACK_IMPORTED_MODULE_0__["TokenValidationConfig"].passwordSize;
        this.token = '';
        this.exceededTokenAttempts = false;
    }
    TokenValidationViewModel.prototype.clearBankAccount = function () {
        this.bankAccount = {
            // eslint-disable-next-line id-blacklist
            number: '',
            type: null,
        };
    };
    return TokenValidationViewModel;
}());



/***/ }),

/***/ "7vlj":
/*!***********************************************************************************!*\
  !*** ./libs/features/send/src/presentation/bank-recharge/bank-recharge.module.ts ***!
  \***********************************************************************************/
/*! exports provided: BankRechargeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankRechargeModule", function() { return BankRechargeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _bank_recharge_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bank-recharge-routing.module */ "WHmo");
/* harmony import */ var _home_home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.page */ "sygX");
/* harmony import */ var _link_bank_account_link_bank_account_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./link-bank-account/link-bank-account.page */ "JNd5");
/* harmony import */ var _token_validation_token_validation_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./token-validation/token-validation.page */ "MyCo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










var BankRechargeModule = /** @class */ (function () {
    function BankRechargeModule() {
    }
    BankRechargeModule.ɵfac = function BankRechargeModule_Factory(t) { return new (t || BankRechargeModule)(); };
    BankRechargeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: BankRechargeModule });
    BankRechargeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [_nequi_ui__WEBPACK_IMPORTED_MODULE_3__["InputSelectBottomSheetService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
                _bank_recharge_routing_module__WEBPACK_IMPORTED_MODULE_5__["BankRechargeRoutingModule"],
                _nequi_ui__WEBPACK_IMPORTED_MODULE_3__["NequiUiModule"],
            ]] });
    return BankRechargeModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](BankRechargeModule, { declarations: [_link_bank_account_link_bank_account_page__WEBPACK_IMPORTED_MODULE_7__["LinkBankAccountPage"], _home_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"], _token_validation_token_validation_page__WEBPACK_IMPORTED_MODULE_8__["TokenValidationPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
        _bank_recharge_routing_module__WEBPACK_IMPORTED_MODULE_5__["BankRechargeRoutingModule"],
        _nequi_ui__WEBPACK_IMPORTED_MODULE_3__["NequiUiModule"]] }); })();


/***/ }),

/***/ "JNd5":
/*!*******************************************************************************************************!*\
  !*** ./libs/features/send/src/presentation/bank-recharge/link-bank-account/link-bank-account.page.ts ***!
  \*******************************************************************************************************/
/*! exports provided: LinkBankAccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkBankAccountPage", function() { return LinkBankAccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_features_send_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/send/core */ "mumb");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _link_bank_account_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./link-bank-account.config */ "MHN+");
/* harmony import */ var _link_bank_account_view_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./link-bank-account.view-model */ "2cn+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ui_src_lib_directives_form_content_style_form_content_style_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../ui/src/lib/directives/form-content-style/form-content-style.directive */ "+XT3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ui_src_lib_controls_input_select_input_select_control_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../ui/src/lib/controls/input-select/input-select-control.component */ "BMu5");
/* harmony import */ var _ui_src_lib_directives_control_errors_control_errors_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../ui/src/lib/directives/control-errors/control-errors.directive */ "XHcO");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");





















var _c0 = function (a0, a1) { return { control: a0, messages: a1 }; };
function LinkBankAccountPage_form_9_Template(rf, ctx) { if (rf & 1) {
    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "nequi-input-select-control", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "ion-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "ion-label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "ion-input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ionFocus", function LinkBankAccountPage_form_9_Template_ion_input_ionFocus_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2); var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); ctx_r1.viewModel.accountNumberFormControl.markAsUntouched(); return ctx_r1.viewModel.accountNumberFormControl.markAsPristine(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](10, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx_r0.viewModel.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 8, "bank-recharge.link-bank-account.account-type"))("options", ctx_r0.viewModel.accountTypeOptions)("hideFilter", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nequiControlErrors", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](16, _c0, ctx_r0.viewModel.accountNumberFormControl, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 10, "bank-recharge.link-bank-account.error-messages.account-number")));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](7, 12, "bank-recharge.link-bank-account.account-number"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formControl", ctx_r0.viewModel.accountNumberFormControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](11, 14, "bank-recharge.link-bank-account.description"), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
} }
var LinkBankAccountPage = /** @class */ (function () {
    function LinkBankAccountPage(navigatorProvider, translateProvider, alertService, cardModalService, sendInteractor, moduleConfigProvider) {
        var _this = this;
        this.navigatorProvider = navigatorProvider;
        this.translateProvider = translateProvider;
        this.alertService = alertService;
        this.cardModalService = cardModalService;
        this.sendInteractor = sendInteractor;
        this.moduleConfigProvider = moduleConfigProvider;
        this.viewModel = new _link_bank_account_view_model__WEBPACK_IMPORTED_MODULE_8__["LinkBankAccountViewModel"]();
        this.translateProvider.loadModule(this.moduleConfigProvider.i18n.bankRechargeModuleKey).then(function () {
            _this.loadAccountTypeOptions();
        });
    }
    LinkBankAccountPage.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.viewModel.initForm();
                return [2 /*return*/];
            });
        });
    };
    LinkBankAccountPage.prototype.goBack = function () {
        this.navigatorProvider.back();
    };
    LinkBankAccountPage.prototype.validateBankAccount = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var bankAccount, isLinked, isUnlinked;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        bankAccount = this.viewModel.getBankAccount();
                        return [4 /*yield*/, this.sendInteractor.isLinked(bankAccount)];
                    case 1:
                        isLinked = _a.sent();
                        if (!isLinked) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.showModalIsLinked()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                    case 3: return [4 /*yield*/, this.sendInteractor.isUnlinked(bankAccount)];
                    case 4:
                        isUnlinked = _a.sent();
                        if (isUnlinked) {
                            this.showTokenModal();
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.showAlertIsUnlinked()];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LinkBankAccountPage.prototype.showAlertIsUnlinked = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                messages = this.translateProvider.get(_link_bank_account_config__WEBPACK_IMPORTED_MODULE_7__["LinkBankAccountConfig"].i18n.isUnlinkedAlert);
                this.alertService.show({
                    messages: {
                        header: messages.title,
                        message: messages.content,
                        buttons: { accept: messages.ready },
                    },
                });
                return [2 /*return*/];
            });
        });
    };
    LinkBankAccountPage.prototype.showTokenModal = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                messages = this.translateProvider.get(_link_bank_account_config__WEBPACK_IMPORTED_MODULE_7__["LinkBankAccountConfig"].i18n.tokenModal);
                this.cardModalService.show({
                    imgPath: _link_bank_account_config__WEBPACK_IMPORTED_MODULE_7__["LinkBankAccountConfig"].modalImage,
                    title: messages.title,
                    content: messages.content,
                    buttons: [
                        {
                            text: messages.ready,
                            handler: function () {
                                _this.navigatorProvider.navigateForward([_link_bank_account_config__WEBPACK_IMPORTED_MODULE_7__["LinkBankAccountConfig"].tokenValidationUrl], {
                                    state: {
                                        bankAccount: _this.viewModel.getBankAccount(),
                                    },
                                });
                            },
                        },
                        {
                            text: messages.helpLinkText,
                            isLink: true,
                            handler: function () {
                                Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_6__["openUrl"])(messages.helpLink);
                            },
                        },
                    ],
                });
                return [2 /*return*/];
            });
        });
    };
    LinkBankAccountPage.prototype.showModalIsLinked = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                messages = this.translateProvider.get(_link_bank_account_config__WEBPACK_IMPORTED_MODULE_7__["LinkBankAccountConfig"].i18n.isLinkedModal);
                this.cardModalService.show({
                    imgPath: _link_bank_account_config__WEBPACK_IMPORTED_MODULE_7__["LinkBankAccountConfig"].modalImage,
                    title: messages.title,
                    content: messages.content,
                    buttons: [
                        {
                            text: messages.ready,
                            handler: function () { return _this.resetForm(); },
                        },
                    ],
                });
                return [2 /*return*/];
            });
        });
    };
    LinkBankAccountPage.prototype.resetForm = function () {
        this.viewModel.form.reset();
    };
    LinkBankAccountPage.prototype.loadAccountTypeOptions = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var accountTypesMessages;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                accountTypesMessages = this.translateProvider.get(_link_bank_account_config__WEBPACK_IMPORTED_MODULE_7__["LinkBankAccountConfig"].i18n.accountTypes);
                this.viewModel.accountTypeOptions = [
                    {
                        alias: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_1__["AccountType"].SAVINGS,
                        name: accountTypesMessages[_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_1__["AccountType"].SAVINGS],
                    },
                    {
                        alias: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_1__["AccountType"].CURRENT,
                        name: accountTypesMessages[_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_1__["AccountType"].CURRENT],
                    },
                ];
                return [2 /*return*/];
            });
        });
    };
    LinkBankAccountPage.ɵfac = function LinkBankAccountPage_Factory(t) { return new (t || LinkBankAccountPage)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_3__["NavigatorProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_3__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_2__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_5__["CardModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_nequi_features_send_core__WEBPACK_IMPORTED_MODULE_4__["SendInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_3__["ModuleConfigProvider"])); };
    LinkBankAccountPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: LinkBankAccountPage, selectors: [["app-link-bank-account"]], decls: 15, vars: 8, consts: [[1, "nequi-header"], ["slot", "start"], ["id", "link-bank-account_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], ["fullscreen", "true", "appFormContentStyle", "", 1, "ion-padding-horizontal", "ion-content--white"], [1, "nequi-title"], [3, "formGroup", 4, "ngIf"], [1, "nequi-footer"], ["id", "link-bank-account_continue_button", "shape", "round", "color", "guayaba", "expand", "block", 1, "margin-vertical-16", 3, "disabled", "click"], [3, "formGroup"], ["id", "link-bank-account_value_input", "formControlName", "accountType", 1, "margin-bottom-8", 3, "label", "options", "hideFilter"], [1, "nequi-item", 3, "nequiControlErrors"], ["position", "floating", 1, "nequi-item__label"], ["id", "link-bank-account_account-number_input", "type", "text", 1, "nequi-item__input", 3, "formControl", "ionFocus"], [1, "text-description", "margin-top-8"], [3, "innerHTML"]], template: function LinkBankAccountPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LinkBankAccountPage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "ion-content", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "ion-text", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, LinkBankAccountPage_form_9_Template, 12, 19, "form", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "ion-footer", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "ion-button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LinkBankAccountPage_Template_ion_button_click_12_listener() { return ctx.validateBankAccount(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](14, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](8, 4, "bank-recharge.link-bank-account.title"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.viewModel.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.viewModel.form == null ? null : ctx.viewModel.form.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](14, 6, "bank-recharge.link-bank-account.continue"), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonContent"], _ui_src_lib_directives_form_content_style_form_content_style_directive__WEBPACK_IMPORTED_MODULE_11__["FormContentStyleDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonText"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonFooter"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormGroupDirective"], _ui_src_lib_controls_input_select_input_select_control_component__WEBPACK_IMPORTED_MODULE_14__["InputSelectControlComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormControlName"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonItem"], _ui_src_lib_directives_control_errors_control_errors_directive__WEBPACK_IMPORTED_MODULE_15__["ControlErrorsDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormControlDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslatePipe"]], encapsulation: 2 });
    return LinkBankAccountPage;
}());



/***/ }),

/***/ "Kx42":
/*!***********************************************************************************!*\
  !*** ./libs/features/send/src/presentation/bank-recharge/home/home.view-model.ts ***!
  \***********************************************************************************/
/*! exports provided: HomeViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeViewModel", function() { return HomeViewModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _home_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.config */ "aDqZ");





var HomeViewModel = /** @class */ (function () {
    function HomeViewModel(sensitivePipe, translateProvider) {
        this.sensitivePipe = sensitivePipe;
        this.translateProvider = translateProvider;
        this.accountTypeOptions = [];
    }
    Object.defineProperty(HomeViewModel.prototype, "selectedAccount", {
        get: function () {
            return this.account.value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HomeViewModel.prototype, "linkedAccounts", {
        get: function () {
            var _a, _b;
            return (_b = (_a = this.accounts) === null || _a === void 0 ? void 0 : _a.filter(function (account) { return account.isLinked; })) !== null && _b !== void 0 ? _b : [];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HomeViewModel.prototype, "hasAccountsToLink", {
        get: function () {
            var _a;
            return (_a = this.accounts) === null || _a === void 0 ? void 0 : _a.some(function (account) { return !account.isLinked; });
        },
        enumerable: false,
        configurable: true
    });
    HomeViewModel.prototype.initForm = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.account = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
                this.amount = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
                this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                    account: this.account,
                    amount: this.amount,
                });
                return [2 /*return*/];
            });
        });
    };
    HomeViewModel.prototype.setAccounts = function (accounts) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _b;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = this;
                        return [4 /*yield*/, this.mapAccounts(accounts)];
                    case 1:
                        _b.accounts = (_a = (_c.sent())) !== null && _a !== void 0 ? _a : [];
                        if (this.linkedAccounts.length === 1) {
                            this.account.setValue(this.accounts[0]);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeViewModel.prototype.setLimits = function (limits) {
        this.limits = limits;
        this.amount.setValidators([
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(_home_config__WEBPACK_IMPORTED_MODULE_4__["HomeConfig"].minAmount),
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(limits.daily),
        ]);
    };
    HomeViewModel.prototype.mapAccounts = function (accounts) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages, accountTypes;
            var _a;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                messages = this.translateProvider.get(_home_config__WEBPACK_IMPORTED_MODULE_4__["HomeConfig"].accountTypesMessages);
                accountTypes = (_a = {},
                    _a[_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["AccountType"].SAVINGS] = messages.savings,
                    _a[_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["AccountType"].CURRENT] = messages.current,
                    _a);
                return [2 /*return*/, accounts === null || accounts === void 0 ? void 0 : accounts.map(function (account) {
                        var visibleType = accountTypes[account.type];
                        var maskedNumber = _this.sensitivePipe.transform(account.number, _nequi_ui__WEBPACK_IMPORTED_MODULE_3__["MaskType"].BANK_ACCOUNT);
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, account), { visibleType: visibleType,
                            maskedNumber: maskedNumber, visibleName: maskedNumber + " - " + visibleType, otherValue: account.isLinked });
                    })];
            });
        });
    };
    return HomeViewModel;
}());



/***/ }),

/***/ "MHN+":
/*!*********************************************************************************************************!*\
  !*** ./libs/features/send/src/presentation/bank-recharge/link-bank-account/link-bank-account.config.ts ***!
  \*********************************************************************************************************/
/*! exports provided: LinkBankAccountConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkBankAccountConfig", function() { return LinkBankAccountConfig; });
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");

var LinkBankAccountConfig = Object.freeze({
    modalImage: 'assets/images/bank-recharge/lamp-icon.svg',
    tokenValidationUrl: '/admin/send/bank-recharge/token-validation',
    validators: {
        minLength: 11,
        maxLength: 11,
        pattern: _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_0__["CustomInputValidators"].patterns.onlyNumbers,
    },
    i18n: {
        accountTypes: 'account-types',
        isLinkedModal: 'bank-recharge.link-bank-account.is-linked-modal',
        tokenModal: 'bank-recharge.link-bank-account.token-modal',
        isUnlinkedAlert: 'bank-recharge.link-bank-account.is-unlinked-alert',
    },
});


/***/ }),

/***/ "MyCo":
/*!*****************************************************************************************************!*\
  !*** ./libs/features/send/src/presentation/bank-recharge/token-validation/token-validation.page.ts ***!
  \*****************************************************************************************************/
/*! exports provided: TokenValidationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenValidationPage", function() { return TokenValidationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_features_security_auth_presentation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/security/auth/presentation */ "hHau");
/* harmony import */ var _nequi_features_send_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/send/core */ "mumb");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _token_validation_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./token-validation.config */ "u8DI");
/* harmony import */ var _token_validation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./token-validation.service */ "bUSV");
/* harmony import */ var _token_validation_view_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./token-validation.view-model */ "4UvZ");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ui_src_lib_components_key_view_key_view_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../ui/src/lib/components/key-view/key-view.component */ "GsaP");
/* harmony import */ var _ui_src_lib_components_numeric_keyboard_numeric_keyboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../ui/src/lib/components/numeric-keyboard/numeric-keyboard.component */ "PTw6");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");























var TokenValidationPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TokenValidationPage, _super);
    function TokenValidationPage(router, pinChallengeModalService, translateProvider, loadingService, cardModalService, confirmBottomSheetService, sendInteractor, tokenValidationService, userInfoProvider, moduleConfigProvider, injector) {
        var _this = _super.call(this, injector) || this;
        _this.router = router;
        _this.pinChallengeModalService = pinChallengeModalService;
        _this.translateProvider = translateProvider;
        _this.loadingService = loadingService;
        _this.cardModalService = cardModalService;
        _this.confirmBottomSheetService = confirmBottomSheetService;
        _this.sendInteractor = sendInteractor;
        _this.tokenValidationService = tokenValidationService;
        _this.userInfoProvider = userInfoProvider;
        _this.moduleConfigProvider = moduleConfigProvider;
        _this.translateProvider.loadModule(_this.moduleConfigProvider.i18n.bankRechargeModuleKey);
        return _this;
    }
    TokenValidationPage.prototype.ngOnInit = function () {
        this.viewModel = new _token_validation_view_model__WEBPACK_IMPORTED_MODULE_11__["TokenValidationViewModel"]();
        this.viewModel.bankAccount = this.router.getCurrentNavigation().extras.state
            .bankAccount;
    };
    TokenValidationPage.prototype.confirmGoBack = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var exceededTokenAttempts;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.viewModel.exceededTokenAttempts) {
                            exceededTokenAttempts = this.translateProvider.get(_token_validation_config__WEBPACK_IMPORTED_MODULE_9__["TokenValidationConfig"].i18n.exceededTokenAttempts);
                            this.tokenValidationService.showAlertExceedTokenAttempts(exceededTokenAttempts);
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.showModalHowToDoIt()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TokenValidationPage.prototype.onFilled = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 6]);
                        return [4 /*yield*/, this.loadingService.show()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.sendInteractor.validateToken(this.viewModel.token)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.loadingService.hide(true)];
                    case 3:
                        _a.sent();
                        this.showBottomSheetConfirmation();
                        return [3 /*break*/, 6];
                    case 4:
                        error_1 = _a.sent();
                        return [4 /*yield*/, this.loadingService.hide(false)];
                    case 5:
                        _a.sent();
                        this.manageErrors(error_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    TokenValidationPage.prototype.showModalHowToDoIt = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                messages = this.translateProvider.get(_token_validation_config__WEBPACK_IMPORTED_MODULE_9__["TokenValidationConfig"].i18n.howToDoItModal);
                this.cardModalService.show({
                    imgPath: _token_validation_config__WEBPACK_IMPORTED_MODULE_9__["TokenValidationConfig"].modalImage,
                    title: messages.title,
                    content: messages.content,
                    buttons: [
                        {
                            text: messages.helpLinkText,
                            color: 'guayaba',
                            handler: function () {
                                Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_8__["openUrl"])(messages.helpLink);
                            },
                        },
                        {
                            text: messages.exit,
                            color: 'medianoche',
                            handler: function () { return _this.tokenValidationService.goBack(); },
                        },
                    ],
                });
                return [2 /*return*/];
            });
        });
    };
    TokenValidationPage.prototype.showBottomSheetConfirmation = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var accountTypes, messages, isConfirmed;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        accountTypes = this.translateProvider.get(_token_validation_config__WEBPACK_IMPORTED_MODULE_9__["TokenValidationConfig"].i18n.accountTypes);
                        messages = this.translateProvider.get(_token_validation_config__WEBPACK_IMPORTED_MODULE_9__["TokenValidationConfig"].i18n.confirmBottomSheet);
                        return [4 /*yield*/, this.confirmBottomSheetService.show({
                                title: messages.title,
                                confirmLabel: messages.confirm,
                                cancelLabel: messages.cancel,
                                items: [
                                    {
                                        label: messages.accountType,
                                        value: accountTypes[this.viewModel.bankAccount.type],
                                    },
                                    {
                                        label: messages.accountNumber,
                                        value: this.viewModel.bankAccount.number,
                                    },
                                ],
                            })];
                    case 1:
                        isConfirmed = (_a.sent()).data;
                        if (!isConfirmed) {
                            return [2 /*return*/];
                        }
                        this.processPinChallenge();
                        return [2 /*return*/];
                }
            });
        });
    };
    TokenValidationPage.prototype.processPinChallenge = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages, isValid;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        messages = this.translateProvider.get(_token_validation_config__WEBPACK_IMPORTED_MODULE_9__["TokenValidationConfig"].i18n.pinChallenge);
                        if (this.userInfoProvider.getSecurity().value) {
                            this.linkAccount();
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.pinChallengeModalService.show({
                                title: messages.title,
                                message: messages.message,
                            })];
                    case 1:
                        isValid = _a.sent();
                        if (isValid) {
                            this.linkAccount();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TokenValidationPage.prototype.linkAccount = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var error_2;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingService.show()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 5, , 7]);
                        return [4 /*yield*/, this.sendInteractor.link(this.viewModel.bankAccount)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.loadingService.hide(true)];
                    case 4:
                        _a.sent();
                        this.viewModel.clearBankAccount();
                        this.showModalLinkAccountSuccess();
                        return [3 /*break*/, 7];
                    case 5:
                        error_2 = _a.sent();
                        return [4 /*yield*/, this.loadingService.hide(false)];
                    case 6:
                        _a.sent();
                        this.tokenValidationService.showAlertLinkAccountFailed();
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    TokenValidationPage.prototype.showModalLinkAccountSuccess = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.setCustomGoBack(this.tokenValidationService.goToCashInHome);
                messages = this.translateProvider.get(_token_validation_config__WEBPACK_IMPORTED_MODULE_9__["TokenValidationConfig"].i18n.linkAccountSuccess);
                this.cardModalService.show({
                    imgPath: _token_validation_config__WEBPACK_IMPORTED_MODULE_9__["TokenValidationConfig"].lampIconPath,
                    title: messages.title,
                    content: messages.content,
                    buttons: [
                        {
                            text: messages.ready,
                            color: 'guayaba',
                            handler: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.loadingService.show()];
                                        case 1:
                                            _a.sent();
                                            return [4 /*yield*/, this.tokenValidationService.goToRecharge()];
                                        case 2:
                                            _a.sent();
                                            this.clearCustomGoBack();
                                            this.loadingService.hideWithoutFeedback();
                                            return [2 /*return*/];
                                    }
                                });
                            }); },
                        },
                    ],
                });
                return [2 /*return*/];
            });
        });
    };
    TokenValidationPage.prototype.manageErrors = function (error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var tokenValidationMessages;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.viewModel.token = '';
                this.viewModel.isValidatingToken = false;
                tokenValidationMessages = this.translateProvider.get(_token_validation_config__WEBPACK_IMPORTED_MODULE_9__["TokenValidationConfig"].i18n.tokenValidation);
                switch (error.constructor) {
                    case _nequi_features_send_core__WEBPACK_IMPORTED_MODULE_6__["ExceededTokenAttemptsException"]:
                        this.viewModel.exceededTokenAttempts = false;
                        this.tokenValidationService.showAlertExceedTokenAttempts(tokenValidationMessages.exceededTokenAttempts);
                        break;
                    case _nequi_features_send_core__WEBPACK_IMPORTED_MODULE_6__["NoNotificationsInscribedException"]:
                        this.tokenValidationService.showAlertNoNotificationsInscribed(tokenValidationMessages.noNotificationsInscribed);
                        break;
                    case _nequi_features_send_core__WEBPACK_IMPORTED_MODULE_6__["WrongTokenException"]:
                        this.tokenValidationService.showAlertWrongToken(tokenValidationMessages.wrongToken);
                        break;
                    case _nequi_features_send_core__WEBPACK_IMPORTED_MODULE_6__["ExpiredTokenException"]:
                        this.tokenValidationService.showAlertExpiredToken(tokenValidationMessages.expiredToken);
                        break;
                    case _nequi_features_send_core__WEBPACK_IMPORTED_MODULE_6__["InvalidOtpException"]:
                        this.tokenValidationService.showAlertInvalidOtp(tokenValidationMessages.isThatYourKey, error.data.attemptsRemaining);
                        break;
                    case _nequi_features_send_core__WEBPACK_IMPORTED_MODULE_6__["UserExceedAttemptsException"]:
                        this.tokenValidationService.showAlertUserExceedAttempts(tokenValidationMessages.attemptsBlock, error.data.blockRemaining);
                        break;
                    case _nequi_features_send_core__WEBPACK_IMPORTED_MODULE_6__["DynamicTokenDisabledException"]:
                        this.tokenValidationService.showAlertDynamicTokenDisabled(tokenValidationMessages.weLackMagic);
                        break;
                    case _nequi_features_send_core__WEBPACK_IMPORTED_MODULE_6__["SharedKeyNotFoundException"]:
                        this.tokenValidationService.showAlertSharedKeyNotFound(tokenValidationMessages.andTheMagicKey);
                        break;
                    case _nequi_features_send_core__WEBPACK_IMPORTED_MODULE_6__["ClientManualBlockException"]:
                        this.tokenValidationService.showAlertClientManualBlock(tokenValidationMessages.blockedGenius);
                        break;
                    default:
                        this.tokenValidationService.showAlertGeniusNotAvailable(tokenValidationMessages.geniusNotAvailable, error.message);
                        break;
                }
                return [2 /*return*/];
            });
        });
    };
    TokenValidationPage.ɵfac = function TokenValidationPage_Factory(t) { return new (t || TokenValidationPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_security_auth_presentation__WEBPACK_IMPORTED_MODULE_5__["PinChallengeModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_4__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_7__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_7__["CardModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_7__["ConfirmInfoBottomSheetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_send_core__WEBPACK_IMPORTED_MODULE_6__["SendInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_token_validation_service__WEBPACK_IMPORTED_MODULE_10__["TokenValidationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_4__["UserInfoProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_4__["ModuleConfigProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"])); };
    TokenValidationPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TokenValidationPage, selectors: [["app-token-validation"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_token_validation_service__WEBPACK_IMPORTED_MODULE_10__["TokenValidationService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 19, vars: 11, consts: [[1, "nequi-header"], ["slot", "start"], ["id", "token-validation_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], ["fullscreen", "true", 1, "ion-content--enroll", "ion-padding-horizontal"], ["id", "token-validation_title_label", 1, "nequi-title"], ["id", "token-validation_description_label", 1, "margin-bottom-16"], [3, "size", "value", "hidden", "filled"], [1, "nequi-footer"], ["id", "token-validation_numeric-keyboard", 1, "ion-padding-horizontal", 3, "disabled", "digits", "digitsChange"]], template: function TokenValidationPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TokenValidationPage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-content", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-text", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-grid");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-row");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-col");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "app-key-view", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("filled", function TokenValidationPage_Template_app_key_view_filled_15_listener() { return ctx.onFilled(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-footer", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "app-numeric-keyboard", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("digitsChange", function TokenValidationPage_Template_app_numeric_keyboard_digitsChange_18_listener($event) { return ctx.viewModel.token = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 7, "bank-recharge.token-validation.title"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 9, "bank-recharge.token-validation.description"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("size", ctx.viewModel.size)("value", ctx.viewModel.token)("hidden", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", (ctx.viewModel.token == null ? null : ctx.viewModel.token.length) >= ctx.viewModel.size)("digits", ctx.viewModel.token);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonCol"], _ui_src_lib_components_key_view_key_view_component__WEBPACK_IMPORTED_MODULE_13__["KeyViewComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonFooter"], _ui_src_lib_components_numeric_keyboard_numeric_keyboard_component__WEBPACK_IMPORTED_MODULE_14__["NumericKeyboardComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"]], encapsulation: 2 });
    return TokenValidationPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__["FeatureBasePage"]));



/***/ }),

/***/ "WHmo":
/*!*******************************************************************************************!*\
  !*** ./libs/features/send/src/presentation/bank-recharge/bank-recharge-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: BankRechargeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankRechargeRoutingModule", function() { return BankRechargeRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.page */ "sygX");
/* harmony import */ var _link_bank_account_link_bank_account_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./link-bank-account/link-bank-account.page */ "JNd5");
/* harmony import */ var _token_validation_token_validation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token-validation/token-validation.page */ "MyCo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






var routes = [
    {
        path: '',
        component: _home_home_page__WEBPACK_IMPORTED_MODULE_1__["HomePage"],
    },
    {
        path: 'link-bank-account',
        component: _link_bank_account_link_bank_account_page__WEBPACK_IMPORTED_MODULE_2__["LinkBankAccountPage"],
    },
    {
        path: 'token-validation',
        component: _token_validation_token_validation_page__WEBPACK_IMPORTED_MODULE_3__["TokenValidationPage"],
    },
];
var BankRechargeRoutingModule = /** @class */ (function () {
    function BankRechargeRoutingModule() {
    }
    BankRechargeRoutingModule.ɵfac = function BankRechargeRoutingModule_Factory(t) { return new (t || BankRechargeRoutingModule)(); };
    BankRechargeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: BankRechargeRoutingModule });
    BankRechargeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return BankRechargeRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](BankRechargeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "aDqZ":
/*!*******************************************************************************!*\
  !*** ./libs/features/send/src/presentation/bank-recharge/home/home.config.ts ***!
  \*******************************************************************************/
/*! exports provided: HomeConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeConfig", function() { return HomeConfig; });
var HomeConfig = {
    minAmount: 1,
    rechargeLimits: '25006',
    modalMessages: 'bank-recharge.home.modals.no-accounts',
    accountTypesMessages: 'bank-recharge.home.account.types',
    linkAccountRoute: 'link-bank-account',
    i18n: {
        errorDefaults: 'bank-recharge.home.errors.default',
        confirmation: 'bank-recharge.home.confirmation',
    },
    routes: {
        admin: '/admin/dashboard',
        breakCeiling: '/admin/full-registry',
        helpLink: 'bank-recharge.home.help-url',
    },
    analytics: {
        events: {
            successfulRecharge: 'Recarga_plata_toque_exitoso',
            successfulRechargeFb: 'fb_mobile_purchase',
        },
    },
};


/***/ }),

/***/ "bUSV":
/*!********************************************************************************************************!*\
  !*** ./libs/features/send/src/presentation/bank-recharge/token-validation/token-validation.service.ts ***!
  \********************************************************************************************************/
/*! exports provided: TokenValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenValidationService", function() { return TokenValidationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _nequi_utils_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/utils/string */ "p6rB");
/* harmony import */ var _token_validation_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./token-validation.config */ "u8DI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");









var TokenValidationService = /** @class */ (function () {
    function TokenValidationService(navigatorProvider, alertService) {
        this.navigatorProvider = navigatorProvider;
        this.alertService = alertService;
    }
    TokenValidationService.prototype.showErrorAlert = function (messages, action, cancelAction) {
        var buttons = { accept: messages.leftButton, cancel: messages.rightButton };
        this.alertService.show({
            messages: {
                header: messages.title,
                message: messages.content,
                buttons: buttons,
            },
            handlers: {
                accept: action,
                cancel: cancelAction,
            },
        });
    };
    TokenValidationService.prototype.showAlertExceedTokenAttempts = function (exceededTokenAttempts) {
        var _this = this;
        this.showErrorAlert(exceededTokenAttempts, function () { return _this.goBack(); });
    };
    TokenValidationService.prototype.showAlertNoNotificationsInscribed = function (noNotificationsInscribed) {
        var _this = this;
        this.showErrorAlert(noNotificationsInscribed, function () { return _this.goBack(); }, function () {
            Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_3__["openUrl"])(_token_validation_config__WEBPACK_IMPORTED_MODULE_5__["TokenValidationConfig"].helpLinkNotifications);
        });
    };
    TokenValidationService.prototype.showAlertWrongToken = function (wrongToken) {
        this.showErrorAlert(wrongToken);
    };
    TokenValidationService.prototype.showAlertExpiredToken = function (expiredToken) {
        this.showErrorAlert(expiredToken);
    };
    TokenValidationService.prototype.showAlertInvalidOtp = function (isThatYourKey, attemptsRemaining) {
        var alertCopy = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, isThatYourKey), { content: Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_4__["createFormat"])(isThatYourKey.content, [attemptsRemaining]) });
        this.showErrorAlert(alertCopy);
    };
    TokenValidationService.prototype.showAlertUserExceedAttempts = function (attemptsBlock, blockRemaining) {
        var _this = this;
        var alertCopy = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, attemptsBlock), { content: Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_4__["createFormat"])(attemptsBlock.content, [blockRemaining]) });
        this.showErrorAlert(alertCopy, function () { return _this.goToCashInHome(); });
    };
    TokenValidationService.prototype.showAlertDynamicTokenDisabled = function (weLackMagic) {
        var _this = this;
        this.showErrorAlert(weLackMagic, function () { return _this.goToCashInHome(); });
    };
    TokenValidationService.prototype.showAlertSharedKeyNotFound = function (andTheMagicKey) {
        this.showErrorAlert(andTheMagicKey);
    };
    TokenValidationService.prototype.showAlertClientManualBlock = function (blockedGenius) {
        var _this = this;
        this.showErrorAlert(blockedGenius, function () { return _this.goToCashInHome(); });
    };
    TokenValidationService.prototype.showAlertGeniusNotAvailable = function (geniusNotAvailable, errorMessage) {
        var alertCopy = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, geniusNotAvailable), { content: errorMessage });
        this.showErrorAlert(alertCopy);
    };
    TokenValidationService.prototype.showAlertLinkAccountFailed = function () {
        this.alertService.showByI18n({ i18nKey: _token_validation_config__WEBPACK_IMPORTED_MODULE_5__["TokenValidationConfig"].i18n.linkAccountFail });
    };
    TokenValidationService.prototype.goToRecharge = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.navigatorProvider.navigateRoot(_token_validation_config__WEBPACK_IMPORTED_MODULE_5__["TokenValidationConfig"].routes.backpack)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.navigatorProvider.navigateForward(_token_validation_config__WEBPACK_IMPORTED_MODULE_5__["TokenValidationConfig"].routes.bankRecharge)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TokenValidationService.prototype.goToCashInHome = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.navigatorProvider.navigateRoot(_token_validation_config__WEBPACK_IMPORTED_MODULE_5__["TokenValidationConfig"].routes.backpack)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.navigatorProvider.navigateForward(_token_validation_config__WEBPACK_IMPORTED_MODULE_5__["TokenValidationConfig"].routes.cashIn)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TokenValidationService.prototype.goBack = function () {
        this.navigatorProvider.back();
    };
    TokenValidationService.ɵfac = function TokenValidationService_Factory(t) { return new (t || TokenValidationService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_1__["NavigatorProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_2__["AlertService"])); };
    TokenValidationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: TokenValidationService, factory: TokenValidationService.ɵfac });
    return TokenValidationService;
}());



/***/ }),

/***/ "sygX":
/*!*****************************************************************************!*\
  !*** ./libs/features/send/src/presentation/bank-recharge/home/home.page.ts ***!
  \*****************************************************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_send_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/features/send/core */ "mumb");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _home_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home.config */ "aDqZ");
/* harmony import */ var _home_view_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home.view-model */ "Kx42");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ui_src_lib_directives_form_content_style_form_content_style_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../ui/src/lib/directives/form-content-style/form-content-style.directive */ "+XT3");
/* harmony import */ var _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../ui/src/lib/directives/animate-title-on-scroll/animate-title-on-scroll.directive */ "qbWi");
/* harmony import */ var _ui_src_lib_components_busy_indicator_busy_indicator_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../ui/src/lib/components/busy-indicator/busy-indicator.component */ "N6nj");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ui_src_lib_controls_input_select_input_select_control_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../ui/src/lib/controls/input-select/input-select-control.component */ "BMu5");
/* harmony import */ var _ui_src_lib_directives_control_errors_control_errors_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../../ui/src/lib/directives/control-errors/control-errors.directive */ "XHcO");
/* harmony import */ var _ui_src_lib_controls_nequi_input_currency_nequi_input_currency_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../../ui/src/lib/controls/nequi-input-currency/nequi-input-currency.component */ "VG0r");
/* harmony import */ var _ui_src_lib_pipes_nequi_currency_nequi_currency_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../../ui/src/lib/pipes/nequi-currency/nequi-currency.pipe */ "Vb1S");
var _a;






























function HomePage_app_busy_indicator_12_Template(rf, ctx) { if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-busy-indicator", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onReload", function HomePage_app_busy_indicator_12_Template_app_busy_indicator_onReload_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.initView(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showReload", ctx_r0.busyIndicatorError)("reloadMessage", ctx_r0.busyIndicatorError);
} }
var _c0 = function (a0, a1) { return { dailyLimit: a0, monthlyLimit: a1 }; };
function HomePage_form_13_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, "bank-recharge.home.message", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](8, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 4, ctx_r4.viewModel.limits == null ? null : ctx_r4.viewModel.limits.daily), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 6, ctx_r4.viewModel.limits == null ? null : ctx_r4.viewModel.limits.monthly))), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
var _c1 = function (a0) { return { dailyLimit: a0 }; };
var _c2 = function (a0, a1, a2) { return { required: a0, min: a1, max: a2 }; };
var _c3 = function (a0, a1) { return { control: a0, messages: a1 }; };
function HomePage_form_13_Template(rf, ctx) { if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "nequi-input-select-control", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "nequi-input-currency", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, HomePage_form_13_div_12_Template, 5, 11, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ion-button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomePage_form_13_Template_ion_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.addAccount(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-text", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "ion-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r1.viewModel.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hideFilter", true)("label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 10, "bank-recharge.home.inputs.account.placeholder"))("options", ctx_r1.viewModel.linkedAccounts)("isReadOnly", (ctx_r1.viewModel.linkedAccounts == null ? null : ctx_r1.viewModel.linkedAccounts.length) === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nequiControlErrors", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](31, _c3, ctx_r1.viewModel.amount, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](27, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 12, "validators.general.required"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 14, "validators.general.min"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](6, 16, "bank-recharge.home.inputs.amount.errors.max", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](25, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 19, ctx_r1.viewModel.limits == null ? null : ctx_r1.viewModel.limits.daily))))));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 21, "bank-recharge.home.inputs.amount.placeholder"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("control", ctx_r1.viewModel.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.viewModel.limits);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 23, "bank-recharge.home.buttons.add-account"));
} }
var errorMessages = (_a = {},
    _a[_nequi_features_commons__WEBPACK_IMPORTED_MODULE_4__["ErrorCode"].BANK_RECHARGE.ACCOUNT_WITH_LOCKS] = 'bank-recharge.home.errors.locked-account',
    _a[_nequi_features_commons__WEBPACK_IMPORTED_MODULE_4__["ErrorCode"].BANK_RECHARGE.ACCOUNT_WITH_LOCKS_SECOD_CASE] = 'bank-recharge.home.errors.locked-account',
    _a[_nequi_features_commons__WEBPACK_IMPORTED_MODULE_4__["ErrorCode"].BANK_RECHARGE.DEBIT_LIMIT_REACHED] = 'bank-recharge.home.errors.limits-reached',
    _a[_nequi_features_commons__WEBPACK_IMPORTED_MODULE_4__["ErrorCode"].BANK_RECHARGE.MONTHLY_DEBIT_LIMIT_REACHED] = 'bank-recharge.home.errors.monthly-limits-reached',
    _a[_nequi_features_commons__WEBPACK_IMPORTED_MODULE_4__["ErrorCode"].BANK_RECHARGE.NEQUI_ACCOUNT_LOCKED] = 'bank-recharge.home.errors.nequi-account-locked',
    _a[_nequi_features_commons__WEBPACK_IMPORTED_MODULE_4__["ErrorCode"].BANK_RECHARGE.UNAVAILABLE_ACCOUNT] = 'bank-recharge.home.errors.unavailable-account',
    _a[_nequi_features_commons__WEBPACK_IMPORTED_MODULE_4__["ErrorCode"].BANK_RECHARGE.EXCEEDS_CEILING] = 'bank-recharge.home.errors.exceeds-ceiling',
    _a[_nequi_features_commons__WEBPACK_IMPORTED_MODULE_4__["ErrorCode"].BANK_RECHARGE.NOT_BALANCE_AVAILABLE] = 'bank-recharge.home.errors.no-balance-available',
    _a);
var HomePage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HomePage, _super);
    function HomePage(sendInteractor, parameterInteractor, route, modalService, translatePipe, currencyPipe, analyticsInteractor, moduleConfigProvider, sensitivePipe, injector) {
        var _this = _super.call(this, injector) || this;
        _this.sendInteractor = sendInteractor;
        _this.parameterInteractor = parameterInteractor;
        _this.route = route;
        _this.modalService = modalService;
        _this.translatePipe = translatePipe;
        _this.currencyPipe = currencyPipe;
        _this.analyticsInteractor = analyticsInteractor;
        _this.moduleConfigProvider = moduleConfigProvider;
        _this.isLoading = false;
        _this.viewModel = new _home_view_model__WEBPACK_IMPORTED_MODULE_12__["HomeViewModel"](sensitivePipe, _this.translateProvider);
        return _this;
    }
    HomePage.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.translateProvider.loadModule(this.moduleConfigProvider.i18n.bankRechargeModuleKey)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.ionViewWillEnter = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.initView()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.initView = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var limits, accounts, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isLoading = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        this.viewModel.initForm();
                        return [4 /*yield*/, this.parameterInteractor.getParameter(_home_config__WEBPACK_IMPORTED_MODULE_11__["HomeConfig"].rechargeLimits)];
                    case 2:
                        limits = (_a.sent()).reduce(function (all, param) {
                            var _a;
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, all), (_a = {}, _a[param.code] = param.value, _a));
                        }, {});
                        this.viewModel.setLimits(limits);
                        return [4 /*yield*/, this.sendInteractor.get(_nequi_features_send_core__WEBPACK_IMPORTED_MODULE_7__["ProcessType"].LINK_ACCOUNTS)];
                    case 3:
                        accounts = _a.sent();
                        this.viewModel.setAccounts(accounts);
                        this.isLoading = false;
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        this.busyIndicatorError = error_1.message;
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.recharge = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var transaction;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                transaction = new _nequi_features_send_core__WEBPACK_IMPORTED_MODULE_7__["BankRechargeTransaction"]()
                    .withAmount(this.viewModel.amount.value)
                    .withData(this.viewModel.account.value);
                _super.prototype.executeTransaction.call(this, transaction);
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.addAccount = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (!this.viewModel.hasAccountsToLink) {
                    messages = this.translateProvider.get(_home_config__WEBPACK_IMPORTED_MODULE_11__["HomeConfig"].modalMessages);
                    this.modalService.show(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, messages), { imgPath: messages.image, buttons: [
                            {
                                text: messages.okButton,
                            },
                        ] }));
                }
                else {
                    this.navigatorProvider.navigateForward([_home_config__WEBPACK_IMPORTED_MODULE_11__["HomeConfig"].linkAccountRoute], {
                        relativeTo: this.route,
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.goToHelp = function () {
        var url = this.translateProvider.get(_home_config__WEBPACK_IMPORTED_MODULE_11__["HomeConfig"].routes.helpLink);
        Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_9__["openUrl"])(url);
    };
    HomePage.prototype.setOriginMoney = function (transaction) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, transaction.withPocket(null)];
            });
        });
    };
    HomePage.prototype.getConfirmationInfo = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                messages = this.translateProvider.get(_home_config__WEBPACK_IMPORTED_MODULE_11__["HomeConfig"].i18n.confirmation);
                return [2 /*return*/, {
                        title: messages.title,
                        items: [
                            { label: messages.items.account, value: this.viewModel.selectedAccount.maskedNumber },
                            {
                                label: messages.items['account-type'],
                                value: this.viewModel.selectedAccount.visibleType,
                            },
                            {
                                label: messages.items.amount,
                                value: this.currencyPipe.transform(this.viewModel.amount.value),
                            },
                        ],
                        confirmLabel: messages.buttons.confirm,
                        cancelLabel: messages.buttons.cancel,
                    }];
            });
        });
    };
    HomePage.prototype.onTransactionSuccess = function (_response, _transaction) {
        this.setAnalytics();
        this.navigatorProvider.navigateRoot(_home_config__WEBPACK_IMPORTED_MODULE_11__["HomeConfig"].routes.admin);
    };
    HomePage.prototype.onTransactionFailed = function (error) {
        var _a, _b, _c;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages, alertOptions;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_d) {
                messages = this.translateProvider.get((_a = errorMessages[error.code]) !== null && _a !== void 0 ? _a : _home_config__WEBPACK_IMPORTED_MODULE_11__["HomeConfig"].i18n.errorDefaults);
                alertOptions = {
                    messages: {
                        header: messages.title,
                        message: messages.content,
                        buttons: {
                            accept: (_b = messages.buttons) === null || _b === void 0 ? void 0 : _b.okButton,
                            cancel: (_c = messages.buttons) === null || _c === void 0 ? void 0 : _c.cancelButton,
                        },
                    },
                };
                switch (error.code) {
                    case _nequi_features_commons__WEBPACK_IMPORTED_MODULE_4__["ErrorCode"].BANK_RECHARGE.MONTHLY_DEBIT_LIMIT_REACHED:
                        alertOptions.messages.message = this.translatePipe.transform(errorMessages[error.code] + ".content", { remaining: this.currencyPipe.transform(error.data.remainingBalance) });
                        break;
                    case _nequi_features_commons__WEBPACK_IMPORTED_MODULE_4__["ErrorCode"].BANK_RECHARGE.EXCEEDS_CEILING:
                        alertOptions.handlers = {
                            accept: function () {
                                return _this.navigatorProvider.navigateForward(_home_config__WEBPACK_IMPORTED_MODULE_11__["HomeConfig"].routes.breakCeiling);
                            },
                        };
                        break;
                }
                this.alertService.show(alertOptions);
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.setAnalytics = function () {
        var analytics = _home_config__WEBPACK_IMPORTED_MODULE_11__["HomeConfig"].analytics.events;
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["AnalyticsType"].FACEBOOK,
            params: { eventName: analytics.successfulRecharge },
        });
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["AnalyticsType"].FACEBOOK,
            params: { eventName: analytics.successfulRechargeFb },
        });
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["AnalyticsType"].FIREBASE,
            params: { eventName: analytics.successfulRecharge },
        });
    };
    HomePage.ɵfac = function HomePage_Factory(t) { return new (t || HomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_send_core__WEBPACK_IMPORTED_MODULE_7__["SendInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["ParameterInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_8__["CardModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["AnalyticsInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_4__["ModuleConfigProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_8__["MaskSensitivePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"])); };
    HomePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomePage, selectors: [["app-home-recharge"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_nequi_ui__WEBPACK_IMPORTED_MODULE_8__["MaskSensitivePipe"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 23, vars: 15, consts: [[1, "nequi-header", "nequi-header--white"], ["slot", "start"], ["id", "bank-recharge_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], [1, "nequi-header__title", "ion-text-start"], ["fullscreen", "true", "appFormContentStyle", "", "scrollEvents", "true", "appAnimateTitleOnScroll", "", 1, "ion-padding-horizontal", "ion-content--white", "bank-recharge"], [1, "nequi-title"], [3, "showReload", "reloadMessage", "onReload", 4, "ngIf"], [3, "formGroup", 4, "ngIf"], [1, "nequi-footer"], ["id", "bank-recharge_continue_button", "shape", "round", "color", "guayaba", "expand", "block", 1, "margin-vertical-16", 3, "disabled", "click"], [1, "nequi-footer__link"], ["id", "card-address_link", 1, "nequi-footer__link", 3, "click"], [3, "showReload", "reloadMessage", "onReload"], [3, "formGroup"], ["id", "bank-recharge_value_input", "formControlName", "account", "visibleKey", "visibleName", 1, "margin-bottom-8", 3, "hideFilter", "label", "options", "isReadOnly"], [1, "nequi-item", "margin-bottom-8", 3, "nequiControlErrors"], ["position", "floating", 1, "nequi-item__label"], ["id", "bank-recharge_amount_input", "type", "number", 1, "nequi-item__input", 3, "control"], ["class", "text-description margin-bottom-8", 4, "ngIf"], ["shape", "round", "expand", "block", "fill", "outline", 1, "bank-recharge__add-account", "ion-text-start", 3, "click"], [1, "button__label"], ["name", "add-outline", "slot", "end"], [1, "text-description", "margin-bottom-8"], [3, "innerHTML"]], template: function HomePage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomePage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
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
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, HomePage_app_busy_indicator_12_Template, 1, 2, "app-busy-indicator", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, HomePage_form_13_Template, 18, 34, "form", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-footer", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "ion-button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomePage_Template_ion_button_click_16_listener() { return ctx.recharge(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomePage_Template_a_click_20_listener() { return ctx.goToHelp(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 7, "bank-recharge.home.title"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 9, "bank-recharge.home.title"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading || ctx.busyIndicatorError);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.viewModel.form && !(ctx.isLoading || ctx.busyIndicatorError));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.viewModel.form == null ? null : ctx.viewModel.form.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](18, 11, "bank-recharge.home.buttons.next"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](22, 13, "bank-recharge.home.buttons.help"), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_13__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["IonContent"], _ui_src_lib_directives_form_content_style_form_content_style_directive__WEBPACK_IMPORTED_MODULE_14__["FormContentStyleDirective"], _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_15__["AnimateTitleOnScrollDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["IonText"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["IonFooter"], _ui_src_lib_components_busy_indicator_busy_indicator_component__WEBPACK_IMPORTED_MODULE_16__["BusyIndicatorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormGroupDirective"], _ui_src_lib_controls_input_select_input_select_control_component__WEBPACK_IMPORTED_MODULE_18__["InputSelectControlComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormControlName"], _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["IonItem"], _ui_src_lib_directives_control_errors_control_errors_directive__WEBPACK_IMPORTED_MODULE_19__["ControlErrorsDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["IonLabel"], _ui_src_lib_controls_nequi_input_currency_nequi_input_currency_component__WEBPACK_IMPORTED_MODULE_20__["NequiInputCurrencyComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"], _ui_src_lib_pipes_nequi_currency_nequi_currency_pipe__WEBPACK_IMPORTED_MODULE_21__["NequiCurrencyPipe"]], styles: [".bank-recharge[_ngcontent-%COMP%]   .text-description[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.bank-recharge__add-account[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  margin-right: auto;\n  margin-left: 0;\n  --border-style: dashed;\n  --border-radius: 8px;\n  --border-color: var(--aguamarica-border);\n  --color: var(--aguamarica-border);\n  --background-activated: var(--ion-color-light-shade);\n}\n.bank-recharge[_ngcontent-%COMP%]   .button__label[_ngcontent-%COMP%] {\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxlQUFBO0FBQUo7QUFHRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBRUEsc0JBQUE7RUFDQSxvQkFBQTtFQUNBLHdDQUFBO0VBQ0EsaUNBQUE7RUFDQSxvREFBQTtBQUZKO0FBS0U7RUFDRSxrQkFBQTtBQUhKIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhbmstcmVjaGFyZ2Uge1xuICAudGV4dC1kZXNjcmlwdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICB9XG5cbiAgJl9fYWRkLWFjY291bnQge1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuXG4gICAgLS1ib3JkZXItc3R5bGU6IGRhc2hlZDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tYWd1YW1hcmljYS1ib3JkZXIpO1xuICAgIC0tY29sb3I6IHZhcigtLWFndWFtYXJpY2EtYm9yZGVyKTtcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICB9XG5cbiAgLmJ1dHRvbl9fbGFiZWwge1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgfVxufVxuIl19 */"] });
    return HomePage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_6__["TransactionBasePage"]));



/***/ }),

/***/ "u8DI":
/*!*******************************************************************************************************!*\
  !*** ./libs/features/send/src/presentation/bank-recharge/token-validation/token-validation.config.ts ***!
  \*******************************************************************************************************/
/*! exports provided: TokenValidationConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenValidationConfig", function() { return TokenValidationConfig; });
var TokenValidationConfig = Object.freeze({
    passwordSize: 6,
    modalImage: 'assets/images/bank-recharge/clock-icon.svg',
    lampIconPath: 'assets/images/bank-recharge/lamp-icon.svg',
    helpLinkNotifications: 'https://www.grupobancolombia.com/wps/portal/personas/aprender-es-facil/como-usar-banco/seguridad/alertas-notificaciones',
    routes: {
        bankRecharge: '/admin/send/bank-recharge',
        backpack: '/admin/dashboard',
        cashIn: '/admin/cash-in',
    },
    i18n: {
        accountTypes: 'account-types',
        howToDoItModal: 'bank-recharge.token-validation.how-to-do-it-modal',
        linkAccountSuccess: 'bank-recharge.token-validation.linkAccountSuccess',
        linkAccountFail: 'bank-recharge.token-validation.linkAccountFail',
        confirmBottomSheet: 'bank-recharge.token-validation.confirm-bottom-sheet',
        tokenValidation: 'bank-recharge.token-validation',
        exceededTokenAttempts: 'bank-recharge.token-validation.exceededTokenAttempts',
        pinChallenge: 'bank-recharge.token-validation.pin-challenge',
    },
});


/***/ })

}]);
//# sourceMappingURL=bank-recharge-bank-recharge-module.js.map