(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nequi-features-transfi-ya-presentation"],{

/***/ "6uRK":
/*!***************************************************************************!*\
  !*** ./libs/features/transfi-ya/src/presentation/pages/send/send.page.ts ***!
  \***************************************************************************/
/*! exports provided: SendPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendPage", function() { return SendPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-mask */ "tmjD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_contacts_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/features/contacts/core */ "Zcn6");
/* harmony import */ var _nequi_features_transfi_ya_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/features/transfi-ya/core */ "dlSz");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _organisms_send_nequi_confirmation_send_nequi_confirmation_organism__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../organisms/send-nequi-confirmation/send-nequi-confirmation.organism */ "SSOj");
/* harmony import */ var _send_send_view_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../send/send.view-model */ "JM89");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./config */ "wock");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _money_management_src_presentation_components_balance_header_balance_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../money-management/src/presentation/components/balance-header/balance-header.component */ "1rl1");
/* harmony import */ var _ui_src_lib_directives_form_content_style_form_content_style_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../ui/src/lib/directives/form-content-style/form-content-style.directive */ "+XT3");
/* harmony import */ var _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../ui/src/lib/directives/animate-title-on-scroll/animate-title-on-scroll.directive */ "qbWi");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _contacts_src_presentation_controls_contact_control_contact_selector_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../contacts/src/presentation/controls/contact-control/contact-selector.component */ "2MVS");
/* harmony import */ var _ui_src_lib_directives_control_errors_control_errors_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../../ui/src/lib/directives/control-errors/control-errors.directive */ "XHcO");
/* harmony import */ var _ui_src_lib_controls_nequi_input_currency_nequi_input_currency_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../../../ui/src/lib/controls/nequi-input-currency/nequi-input-currency.component */ "VG0r");
/* harmony import */ var _money_management_src_presentation_controls_origin_money_control_origin_money_control_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../../money-management/src/presentation/controls/origin-money-control/origin-money-control.component */ "O3Yd");
/* harmony import */ var _ui_src_lib_pipes_nequi_currency_nequi_currency_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../../../ui/src/lib/pipes/nequi-currency/nequi-currency.pipe */ "Vb1S");



































var _c0 = function (a0) { return { maxAmount: a0 }; };
var _c1 = function (a0) { return { max: a0 }; };
var _c2 = function (a0, a1) { return { control: a0, messages: a1 }; };
function SendPage_form_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-contact-control", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ion-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "nequi-input-currency", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ion-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "ion-label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "ion-textarea", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "ion-text", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "nequi-origin-money-control", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r0.viewModel.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 12, "cashout.transfi-ya.send.inputs.contact.placeholder"))("formControl", ctx_r0.viewModel.contact);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nequiControlErrors", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](34, _c2, ctx_r0.viewModel.amount, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](32, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](4, 14, "cashout.transfi-ya.send.inputs.amount.errors.max", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](30, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind4"](5, 17, ctx_r0.viewModel.limits == null ? null : ctx_r0.viewModel.limits.maxAmount, "", "", ctx_r0.viewModel.currencyFormat))))));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 22, "cashout.transfi-ya.send.inputs.amount.placeholder"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("control", ctx_r0.viewModel.amount)("allowNegative", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nequiControlErrors", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](37, _c2, ctx_r0.viewModel.message, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 24, "cashout.transfi-ya.send.inputs.message.errors")));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 26, "cashout.transfi-ya.send.inputs.message.placeholder"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx_r0.viewModel.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](19, 28, "cashout.transfi-ya.send.inputs.pocket.placeholder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx_r0.viewModel.pocketControl);
} }
function SendPage_ion_text_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "cashout.transfi-ya.send.buttons.next"));
} }
function SendPage_ion_spinner_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-spinner", 24);
} }
var _c3 = function (a0, a1) { return { fee: a0, maxHoursToAccept: a1 }; };
var SendPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SendPage, _super);
    function SendPage(viewModel, interactor, router, contactsInteractor, bottomSheetController, currencyPipe, translatePipe, maskPipe, phoneNumberConfigProvider, route, cardModal, moduleConfigProvider, injector) {
        var _this = _super.call(this, injector) || this;
        _this.viewModel = viewModel;
        _this.interactor = interactor;
        _this.router = router;
        _this.contactsInteractor = contactsInteractor;
        _this.bottomSheetController = bottomSheetController;
        _this.currencyPipe = currencyPipe;
        _this.translatePipe = translatePipe;
        _this.maskPipe = maskPipe;
        _this.phoneNumberConfigProvider = phoneNumberConfigProvider;
        _this.route = route;
        _this.cardModal = cardModal;
        _this.moduleConfigProvider = moduleConfigProvider;
        _this.balanceToogle = false;
        return _this;
    }
    SendPage.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var sendInfo, limits, fee;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.translateProvider.loadModule(this.moduleConfigProvider.i18n.moduleKey);
                        sendInfo = this.router.getCurrentNavigation().extras.state;
                        this.viewModel.setPocket(sendInfo.pocket);
                        return [4 /*yield*/, this.interactor.getLimits()];
                    case 1:
                        limits = _a.sent();
                        return [4 /*yield*/, this.interactor.getFee()];
                    case 2:
                        fee = _a.sent();
                        this.viewModel.setLimits(limits);
                        this.viewModel.setFee(fee);
                        return [2 /*return*/];
                }
            });
        });
    };
    SendPage.prototype.confirmTransaction = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var isNequi, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        this.viewModel.isLoading = true;
                        return [4 /*yield*/, this.contactsInteractor.isNequiUser(this.viewModel.contact.value)];
                    case 1:
                        isNequi = _a.sent();
                        this.viewModel.isLoading = false;
                        if (!isNequi) {
                            return [2 /*return*/, this.makeTransaction()];
                        }
                        return [4 /*yield*/, this.showSendNequiConfirmation()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.toastService.showError(error_1.message);
                        this.viewModel.isLoading = false;
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SendPage.prototype.setOriginMoney = function (transaction) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var pocket;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (!(transaction === null || transaction === void 0 ? void 0 : transaction.pocket) || (transaction === null || transaction === void 0 ? void 0 : transaction.pocket) === null) {
                    pocket = this.originMoneyService.getAvailablePocket();
                    transaction.withPocket(pocket);
                }
                return [2 /*return*/, transaction];
            });
        });
    };
    SendPage.prototype.getConfirmationInfo = function (transaction) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                messages = this.translateProvider.get(_config__WEBPACK_IMPORTED_MODULE_14__["SendConfig"].i18n.confirmation);
                return [2 /*return*/, {
                        title: messages.title,
                        items: [
                            {
                                label: messages.cel,
                                value: transaction.data.contact.phoneNumber,
                            },
                            {
                                label: messages.amount,
                                value: this.currencyPipe.transform(transaction.amount),
                            },
                        ],
                    }];
            });
        });
    };
    SendPage.prototype.onTransactionSuccess = function (_transaction) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var helpUrl, messages;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.interactor.getHelpUrl()];
                    case 1:
                        helpUrl = _a.sent();
                        messages = this.translateProvider.get(_config__WEBPACK_IMPORTED_MODULE_14__["SendConfig"].i18n.success);
                        this.cardModal.show({
                            imgPath: messages.image,
                            title: messages.title,
                            content: this.translateProvider.get(_config__WEBPACK_IMPORTED_MODULE_14__["SendConfig"].i18n.successContent, {
                                timeLimit: this.viewModel.limits.maxHoursToAcceptTransaction,
                            }),
                            buttons: [
                                {
                                    text: messages.button,
                                    color: _config__WEBPACK_IMPORTED_MODULE_14__["SendConfig"].styles.confirmation.button.color,
                                    handler: function () { return _this.finishTransaction(); },
                                },
                                {
                                    text: messages.help,
                                    isLink: true,
                                    handler: function () {
                                        Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_10__["openUrl"])(helpUrl);
                                        _this.finishTransaction();
                                    },
                                },
                            ],
                            nativeBackButtonAction: function () { return _this.finishTransaction(); },
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SendPage.prototype.onTransactionFailed = function (error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (error.constructor === _nequi_features_transfi_ya_core__WEBPACK_IMPORTED_MODULE_8__["MaxAllowedTransactionsException"]) {
                    this.alertService.showByI18n({ i18nKey: _config__WEBPACK_IMPORTED_MODULE_14__["SendConfig"].i18n.maxAllowedTransactionsError });
                    return [2 /*return*/];
                }
                throw error;
            });
        });
    };
    SendPage.prototype.makeTransaction = function () {
        var transaction = new _nequi_features_transfi_ya_core__WEBPACK_IMPORTED_MODULE_8__["TransfiYaSendTransaction"]()
            .withAmount(this.viewModel.amount.value)
            .withData({
            contact: this.viewModel.contact.value,
            message: this.viewModel.message.value,
            transactionType: _nequi_features_transfi_ya_core__WEBPACK_IMPORTED_MODULE_8__["TransactionType"].SEND,
        })
            .withPocket(this.viewModel.form.value.pocket);
        _super.prototype.executeTransaction.call(this, transaction);
    };
    SendPage.prototype.showSendNequiConfirmation = function () {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages, contact, bottomSheet;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        messages = Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_10__["toCamelCaseProperties"])(this.translateProvider.get(_config__WEBPACK_IMPORTED_MODULE_14__["SendConfig"].i18n.sendNequiConfirmation));
                        contact = ((_a = this.viewModel.contact.value) === null || _a === void 0 ? void 0 : _a.completeName) ? (_b = this.viewModel.contact.value) === null || _b === void 0 ? void 0 : _b.completeName : this.maskPipe.transform(this.viewModel.contact.value.phoneNumber, this.phoneNumberConfigProvider.mask);
                        return [4 /*yield*/, this.bottomSheetController.create({
                                component: _organisms_send_nequi_confirmation_send_nequi_confirmation_organism__WEBPACK_IMPORTED_MODULE_12__["SendNequiConfirmationOrganism"],
                                componentProps: {
                                    title: messages.title,
                                    image: messages.image,
                                    content: this.translatePipe.transform(_config__WEBPACK_IMPORTED_MODULE_14__["SendConfig"].i18n.sendNequiConfirmationContent, {
                                        phoneNumber: contact,
                                    }),
                                    actions: [
                                        {
                                            label: messages.buttons.nequi,
                                            color: _config__WEBPACK_IMPORTED_MODULE_14__["SendConfig"].styles.sendNequiConfirmation.nequiButton.color,
                                            fill: _config__WEBPACK_IMPORTED_MODULE_14__["SendConfig"].styles.sendNequiConfirmation.nequiButton.fill,
                                            action: function () {
                                                bottomSheet.close();
                                                _this.navigatorProvider.navigateForward([_config__WEBPACK_IMPORTED_MODULE_14__["SendConfig"].routes.sendNequi], {
                                                    relativeTo: _this.route,
                                                    state: {
                                                        contact: _this.viewModel.contact.value,
                                                        message: _this.viewModel.message.value,
                                                        amount: _this.viewModel.amount.value,
                                                        pocket: _this.viewModel.pocketControl.value,
                                                        initTransactionOnLoad: true,
                                                    },
                                                });
                                            },
                                        },
                                        {
                                            label: messages.buttons.transfiYa,
                                            color: _config__WEBPACK_IMPORTED_MODULE_14__["SendConfig"].styles.sendNequiConfirmation.transfiYa.color,
                                            fill: _config__WEBPACK_IMPORTED_MODULE_14__["SendConfig"].styles.sendNequiConfirmation.nequiButton.fill,
                                            action: function () {
                                                var time = 400;
                                                bottomSheet.close();
                                                setTimeout(function () {
                                                    _this.makeTransaction();
                                                }, time);
                                            },
                                        },
                                    ],
                                },
                                componentEvents: { closed: function () { return bottomSheet.close(); } },
                                isAutoHeight: true,
                                hasBackdrop: true,
                                isBackdropDismiss: true,
                                isBackButtonDismiss: true,
                            })];
                    case 1:
                        bottomSheet = _c.sent();
                        bottomSheet.open();
                        return [2 /*return*/];
                }
            });
        });
    };
    SendPage.prototype.finishTransaction = function () {
        var _this = this;
        var messages = this.translateProvider.get(_config__WEBPACK_IMPORTED_MODULE_14__["SendConfig"].i18n.success);
        this.navigatorProvider.navigateRoot([_config__WEBPACK_IMPORTED_MODULE_14__["SendConfig"].routes.end]).then(function () {
            _this.toastService.showSuccess(messages.toast);
        });
    };
    SendPage.ɵfac = function SendPage_Factory(t) { return new (t || SendPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_send_send_view_model__WEBPACK_IMPORTED_MODULE_13__["SendViewModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nequi_features_transfi_ya_core__WEBPACK_IMPORTED_MODULE_8__["TransfiYaInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nequi_features_contacts_core__WEBPACK_IMPORTED_MODULE_7__["ContactsInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_9__["BottomSheetController"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_mask__WEBPACK_IMPORTED_MODULE_1__["MaskPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_5__["PhoneNumberConfigProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_9__["CardModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_5__["ModuleConfigProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"])); };
    SendPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SendPage, selectors: [["app-transfi-ya-send"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 26, vars: 22, consts: [[1, "nequi-header", "nequi-header--white"], ["slot", "start"], [3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], [1, "nequi-header__title", "ion-text-start"], ["slot", "end"], ["slot", "icon-only", 3, "name"], [3, "isDarkTheme", "isShow"], ["appFormContentStyle", "", "scrollEvents", "true", "appAnimateTitleOnScroll", "", "fullscreen", "true", 1, "ion-padding-horizontal", "ion-content--white"], [1, "nequi-title"], ["class", "form", 3, "formGroup", 4, "ngIf"], [1, "nequi-footer"], [1, "disclaimer"], ["id", "transfi-ya_next_button", "shape", "round", "color", "guayaba", "expand", "block", 3, "disabled", "click"], [4, "ngIf"], ["name", "crescent", "color", "light", 4, "ngIf"], [1, "form", 3, "formGroup"], [3, "placeholder", "formControl"], [1, "nequi-item", "margin-bottom-8", 3, "nequiControlErrors"], ["position", "floating", 1, "nequi-item__label"], ["tooltipType", "error", "inputClass", "nequi-item__input", 1, "sc-ion-input-ios-h", 3, "control", "allowNegative"], ["rows", "3", "inputmode", "text", "autocapitalize", "sentences", 1, "nequi-item__text-area", 3, "formControl"], ["color", "medium", 1, "margin-top-16"], [1, "margin-bottom-8", 3, "formControl"], ["name", "crescent", "color", "light"]], template: function SendPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SendPage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ion-title", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-buttons", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SendPage_Template_ion_button_click_9_listener() { return ctx.balanceToogle = !ctx.balanceToogle; });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "ion-icon", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "app-balance-header", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "ion-content", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "ion-text", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, SendPage_form_16_Template, 21, 40, "form", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "ion-footer", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "ion-text", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](21, "currency");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "ion-button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SendPage_Template_ion_button_click_23_listener() { return ctx.confirmTransaction(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, SendPage_ion_text_24_Template, 3, 3, "ion-text", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, SendPage_ion_spinner_25_Template, 1, 0, "ion-spinner", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 10, "cashout.transfi-ya.send.title"));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("name", ctx.balanceToogle ? "chevron-up-outline" : "chevron-down-outline");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isDarkTheme", false)("isShow", ctx.balanceToogle);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 12, "cashout.transfi-ya.send.title"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.viewModel.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](20, 14, "cashout.transfi-ya.send.info", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](19, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](21, 17, ctx.viewModel.fee), ctx.viewModel.limits == null ? null : ctx.viewModel.limits.maxHoursToAcceptTransaction)), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.viewModel.form == null ? null : ctx.viewModel.form.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.viewModel.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.viewModel.isLoading);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonTitle"], _money_management_src_presentation_components_balance_header_balance_header_component__WEBPACK_IMPORTED_MODULE_16__["BalanceHeaderComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonContent"], _ui_src_lib_directives_form_content_style_form_content_style_directive__WEBPACK_IMPORTED_MODULE_17__["FormContentStyleDirective"], _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_18__["AnimateTitleOnScrollDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonText"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonFooter"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormGroupDirective"], _contacts_src_presentation_controls_contact_control_contact_selector_component__WEBPACK_IMPORTED_MODULE_20__["ContactControlComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormControlDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonItem"], _ui_src_lib_directives_control_errors_control_errors_directive__WEBPACK_IMPORTED_MODULE_21__["ControlErrorsDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonLabel"], _ui_src_lib_controls_nequi_input_currency_nequi_input_currency_component__WEBPACK_IMPORTED_MODULE_22__["NequiInputCurrencyComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonTextarea"], _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["TextValueAccessor"], _money_management_src_presentation_controls_origin_money_control_origin_money_control_component__WEBPACK_IMPORTED_MODULE_23__["OriginMoneyControlComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonSpinner"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"], _ui_src_lib_pipes_nequi_currency_nequi_currency_pipe__WEBPACK_IMPORTED_MODULE_24__["NequiCurrencyPipe"]], styles: [".nequi-footer[_ngcontent-%COMP%]   .disclaimer[_ngcontent-%COMP%] {\n  color: var(--gray-alert-message);\n  font-size: 0.75em;\n  line-height: 16px;\n  display: inline-block;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvc2VuZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQUoiLCJmaWxlIjoic2VuZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmVxdWktZm9vdGVyIHtcbiAgLmRpc2NsYWltZXIge1xuICAgIGNvbG9yOiB2YXIoLS1ncmF5LWFsZXJ0LW1lc3NhZ2UpO1xuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG59XG4iXX0= */"] });
    return SendPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_6__["TransactionBasePage"]));



/***/ }),

/***/ "C08M":
/*!*********************************************************************************!*\
  !*** ./libs/features/transfi-ya/src/presentation/features-transfi-ya.module.ts ***!
  \*********************************************************************************/
/*! exports provided: FeaturesTransfiYaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesTransfiYaModule", function() { return FeaturesTransfiYaModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nequi_features_contacts_presentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/contacts/presentation */ "59nv");
/* harmony import */ var _nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/money-management/presentation */ "JFCQ");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _features_transfi_ya_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./features-transfi-ya-routing.module */ "YA42");
/* harmony import */ var _organisms_send_nequi_confirmation_send_nequi_confirmation_organism__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./organisms/send-nequi-confirmation/send-nequi-confirmation.organism */ "SSOj");
/* harmony import */ var _pages_send_send_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/send/send.page */ "6uRK");
/* harmony import */ var _pages_send_send_view_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/send/send.view-model */ "JM89");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");












var FeaturesTransfiYaModule = /** @class */ (function () {
    function FeaturesTransfiYaModule() {
    }
    FeaturesTransfiYaModule.ɵfac = function FeaturesTransfiYaModule_Factory(t) { return new (t || FeaturesTransfiYaModule)(); };
    FeaturesTransfiYaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: FeaturesTransfiYaModule });
    FeaturesTransfiYaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [_pages_send_send_view_model__WEBPACK_IMPORTED_MODULE_10__["SendViewModel"]], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                _features_transfi_ya_routing_module__WEBPACK_IMPORTED_MODULE_7__["FeaturesTransfiYaRoutingModule"],
                _nequi_ui__WEBPACK_IMPORTED_MODULE_5__["NequiUiModule"],
                _nequi_features_contacts_presentation__WEBPACK_IMPORTED_MODULE_3__["FeaturesContactsModule"],
                _nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_4__["FeaturesMoneyManagementModule"],
            ]] });
    return FeaturesTransfiYaModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](FeaturesTransfiYaModule, { declarations: [_pages_send_send_page__WEBPACK_IMPORTED_MODULE_9__["SendPage"], _organisms_send_nequi_confirmation_send_nequi_confirmation_organism__WEBPACK_IMPORTED_MODULE_8__["SendNequiConfirmationOrganism"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
        _features_transfi_ya_routing_module__WEBPACK_IMPORTED_MODULE_7__["FeaturesTransfiYaRoutingModule"],
        _nequi_ui__WEBPACK_IMPORTED_MODULE_5__["NequiUiModule"],
        _nequi_features_contacts_presentation__WEBPACK_IMPORTED_MODULE_3__["FeaturesContactsModule"],
        _nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_4__["FeaturesMoneyManagementModule"]] }); })();


/***/ }),

/***/ "JM89":
/*!*********************************************************************************!*\
  !*** ./libs/features/transfi-ya/src/presentation/pages/send/send.view-model.ts ***!
  \*********************************************************************************/
/*! exports provided: SendViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendViewModel", function() { return SendViewModel; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "wock");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



var SendViewModel = /** @class */ (function () {
    function SendViewModel() {
        this.createFormGroup();
    }
    Object.defineProperty(SendViewModel.prototype, "maxAmount", {
        get: function () {
            var _a;
            return (_a = this.limits) === null || _a === void 0 ? void 0 : _a.maxAmount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SendViewModel.prototype, "currencyFormat", {
        get: function () {
            return _config__WEBPACK_IMPORTED_MODULE_1__["SendConfig"].currencyFormat;
        },
        enumerable: false,
        configurable: true
    });
    SendViewModel.prototype.setPocket = function (pocket) {
        this.pocketControl.setValue(pocket);
    };
    SendViewModel.prototype.setLimits = function (limits) {
        this.limits = limits;
        this.amount.setValidators([
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(_config__WEBPACK_IMPORTED_MODULE_1__["SendConfig"].validations.amount.min),
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].max(limits.maxAmount),
        ]);
    };
    SendViewModel.prototype.setFee = function (fee) {
        this.fee = fee;
    };
    SendViewModel.prototype.createFormGroup = function () {
        this.crateControls();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            pocket: this.pocketControl,
            contact: this.contact,
            amount: this.amount,
            message: this.message,
        });
        this.form.markAsPristine();
        this.form.markAsUntouched();
    };
    SendViewModel.prototype.crateControls = function () {
        this.contact = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]);
        this.amount = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]);
        this.message = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(_config__WEBPACK_IMPORTED_MODULE_1__["SendConfig"].validations.message.maxLength),
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(_config__WEBPACK_IMPORTED_MODULE_1__["SendConfig"].validations.message.pattern),
        ]);
        this.pocketControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]();
    };
    SendViewModel.ɵfac = function SendViewModel_Factory(t) { return new (t || SendViewModel)(); };
    SendViewModel.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SendViewModel, factory: SendViewModel.ɵfac });
    return SendViewModel;
}());



/***/ }),

/***/ "SSOj":
/*!*************************************************************************************************************************!*\
  !*** ./libs/features/transfi-ya/src/presentation/organisms/send-nequi-confirmation/send-nequi-confirmation.organism.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: SendNequiConfirmationOrganism */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendNequiConfirmationOrganism", function() { return SendNequiConfirmationOrganism; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ui_src_lib_pipes_trust_html_trust_html_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../ui/src/lib/pipes/trust-html/trust-html.pipe */ "FKD1");





function SendNequiConfirmationOrganism_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.image);
} }
function SendNequiConfirmationOrganism_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "trustHTML");
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r1.content), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function SendNequiConfirmationOrganism_ion_button_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SendNequiConfirmationOrganism_ion_button_11_Template_ion_button_click_0_listener() { var button_r3 = ctx.$implicit; return button_r3.action(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var button_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", button_r3.color)("fill", button_r3.fill);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", button_r3.label, " ");
} }
var SendNequiConfirmationOrganism = /** @class */ (function () {
    function SendNequiConfirmationOrganism() {
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SendNequiConfirmationOrganism.ɵfac = function SendNequiConfirmationOrganism_Factory(t) { return new (t || SendNequiConfirmationOrganism)(); };
    SendNequiConfirmationOrganism.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SendNequiConfirmationOrganism, selectors: [["app-send-nequi-confirmation"]], inputs: { title: "title", content: "content", image: "image", actions: "actions" }, outputs: { closed: "closed" }, decls: 12, vars: 4, consts: [[1, "ion-page"], [1, "nequi-header", "nequi-header--white", "ion-padding-horizontal"], ["slot", "end"], ["id", "send-nequi-confirmation_close_button", "color", "medianoche", 3, "click"], ["slot", "icon-only", "name", "close-outline"], [1, "ion-content--empty-case", "ion-text-center", "ion-padding", "send-nequi-confirmation__content"], ["class", "send-nequi-confirmation__image margin-bottom-8", 4, "ngIf"], [1, "send-nequi-confirmation__title"], ["class", "send-nequi-confirmation__description", 3, "innerHTML", 4, "ngIf"], ["expand", "block", "class", "send-nequi-confirmation__button", "shape", "round", 3, "color", "fill", "click", 4, "ngFor", "ngForOf"], [1, "send-nequi-confirmation__image", "margin-bottom-8"], [3, "src"], [1, "send-nequi-confirmation__description", 3, "innerHTML"], ["expand", "block", "shape", "round", 1, "send-nequi-confirmation__button", 3, "color", "fill", "click"]], template: function SendNequiConfirmationOrganism_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-header", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-buttons", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SendNequiConfirmationOrganism_Template_ion_button_click_4_listener() { return ctx.closed.emit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ion-icon", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SendNequiConfirmationOrganism_div_7_Template, 2, 1, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SendNequiConfirmationOrganism_p_10_Template, 2, 3, "p", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SendNequiConfirmationOrganism_ion_button_11_Template, 2, 3, "ion-button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.image);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.content);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.actions);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonImg"]], pipes: [_ui_src_lib_pipes_trust_html_trust_html_pipe__WEBPACK_IMPORTED_MODULE_3__["TrustHTMLPipe"]], styles: [".send-nequi-confirmation__title[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 19px;\n  text-align: center;\n  margin-top: 5px;\n  padding: 0 16px;\n}\n.send-nequi-confirmation__image[_ngcontent-%COMP%] {\n  width: 88px;\n  height: 88px;\n  margin: 0 auto;\n}\n.send-nequi-confirmation__description[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--card-modal-text);\n  margin-top: 0;\n  padding-top: 0;\n  padding: 0 16px;\n}\n.send-nequi-confirmation__button[_ngcontent-%COMP%]    + .send-nequi-confirmation__button[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvc2VuZC1uZXF1aS1jb25maXJtYXRpb24ub3JnYW5pc20uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBQUo7QUFHRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQURKO0FBSUU7RUFDRSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFGSjtBQUtFO0VBQ0UsZUFBQTtBQUhKIiwiZmlsZSI6InNlbmQtbmVxdWktY29uZmlybWF0aW9uLm9yZ2FuaXNtLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VuZC1uZXF1aS1jb25maXJtYXRpb24ge1xuICAmX190aXRsZSB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgcGFkZGluZzogMCAxNnB4O1xuICB9XG5cbiAgJl9faW1hZ2Uge1xuICAgIHdpZHRoOiA4OHB4O1xuICAgIGhlaWdodDogODhweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuXG4gICZfX2Rlc2NyaXB0aW9uIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgY29sb3I6IHZhcigtLWNhcmQtbW9kYWwtdGV4dCk7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG4gIH1cblxuICAmX19idXR0b24gKyAmX19idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgfVxufVxuIl19 */"] });
    return SendNequiConfirmationOrganism;
}());



/***/ }),

/***/ "YA42":
/*!*****************************************************************************************!*\
  !*** ./libs/features/transfi-ya/src/presentation/features-transfi-ya-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: FeaturesTransfiYaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesTransfiYaRoutingModule", function() { return FeaturesTransfiYaRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_send_send_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/send/send.page */ "6uRK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




var routes = [
    {
        path: '',
        component: _pages_send_send_page__WEBPACK_IMPORTED_MODULE_1__["SendPage"],
    },
];
var FeaturesTransfiYaRoutingModule = /** @class */ (function () {
    function FeaturesTransfiYaRoutingModule() {
    }
    FeaturesTransfiYaRoutingModule.ɵfac = function FeaturesTransfiYaRoutingModule_Factory(t) { return new (t || FeaturesTransfiYaRoutingModule)(); };
    FeaturesTransfiYaRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: FeaturesTransfiYaRoutingModule });
    FeaturesTransfiYaRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return FeaturesTransfiYaRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FeaturesTransfiYaRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "e/3u":
/*!************************************************************!*\
  !*** ./libs/features/transfi-ya/src/presentation/index.ts ***!
  \************************************************************/
/*! exports provided: FeaturesTransfiYaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _features_transfi_ya_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./features-transfi-ya.module */ "C08M");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeaturesTransfiYaModule", function() { return _features_transfi_ya_module__WEBPACK_IMPORTED_MODULE_0__["FeaturesTransfiYaModule"]; });




/***/ }),

/***/ "wock":
/*!************************************************************************!*\
  !*** ./libs/features/transfi-ya/src/presentation/pages/send/config.ts ***!
  \************************************************************************/
/*! exports provided: SendConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendConfig", function() { return SendConfig; });
var SendConfig = {
    i18n: {
        sendNequiConfirmation: 'cashout.transfi-ya.send.send-nequi-confirmation',
        sendNequiConfirmationContent: 'cashout.transfi-ya.send.send-nequi-confirmation.content',
        confirmation: 'cashout.transfi-ya.send.confirmation',
        success: 'cashout.transfi-ya.send.success',
        successContent: 'cashout.transfi-ya.send.success.content',
        maxAllowedTransactionsError: 'cashout.transfi-ya.send.max-allowed-transactions',
    },
    routes: {
        sendNequi: '/admin/send/nequi',
        end: '/admin/movements',
    },
    styles: {
        sendNequiConfirmation: {
            nequiButton: {
                color: 'guayaba',
                fill: 'outline',
            },
            transfiYa: {
                color: 'medianoche',
                fill: 'outline',
            },
        },
        confirmation: {
            button: {
                color: 'guayaba',
            },
        },
    },
    validations: {
        amount: {
            min: 1,
        },
        message: {
            maxLength: 155,
            pattern: /^[A-Za-z0-9?\s]+$/,
        },
    },
    currencyFormat: '.00',
};


/***/ })

}]);
//# sourceMappingURL=nequi-features-transfi-ya-presentation.js.map