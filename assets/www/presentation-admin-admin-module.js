(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["presentation-admin-admin-module"],{

/***/ "+i7D":
/*!******************************************************************!*\
  !*** ./apps/colombia/src/app/presentation/admin/admin.module.ts ***!
  \******************************************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _config_application_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @config/application/config */ "UWZR");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nequi_features_closet_presentation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/closet/presentation */ "Qek3");
/* harmony import */ var _nequi_features_credits_presentation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/credits/presentation */ "jGqD");
/* harmony import */ var _nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/money-management/presentation */ "JFCQ");
/* harmony import */ var _nequi_features_paypal_presentation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/features/paypal/presentation */ "trB8");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin-routing.module */ "GdCK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _libs_features_credits_src_presentation_features_credits_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../libs/features/credits/src/presentation/features-credits.module */ "CaLU");













var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule.ɵfac = function AdminModule_Factory(t) { return new (t || AdminModule)(); };
    AdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AdminModule });
    AdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [_nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_6__["UseMoneyStatusService"]], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _admin_routing_module__WEBPACK_IMPORTED_MODULE_10__["AdminRoutingModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"],
                _nequi_features_closet_presentation__WEBPACK_IMPORTED_MODULE_4__["FeaturesClosetModule"],
                _nequi_features_paypal_presentation__WEBPACK_IMPORTED_MODULE_7__["FeaturesPaypalModule"],
                _nequi_ui__WEBPACK_IMPORTED_MODULE_8__["NequiUiModule"],
                _nequi_features_credits_presentation__WEBPACK_IMPORTED_MODULE_5__["FeaturesCreditsModule"].forRoot({
                    countryCode: _config_application_config__WEBPACK_IMPORTED_MODULE_2__["COUNTRY_CONFIGURATION"].code,
                }),
            ]] });
    return AdminModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AdminModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        _admin_routing_module__WEBPACK_IMPORTED_MODULE_10__["AdminRoutingModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"],
        _nequi_features_closet_presentation__WEBPACK_IMPORTED_MODULE_4__["FeaturesClosetModule"],
        _nequi_features_paypal_presentation__WEBPACK_IMPORTED_MODULE_7__["FeaturesPaypalModule"],
        _nequi_ui__WEBPACK_IMPORTED_MODULE_8__["NequiUiModule"], _libs_features_credits_src_presentation_features_credits_module__WEBPACK_IMPORTED_MODULE_12__["FeaturesCreditsModule"]] }); })();


/***/ }),

/***/ "/1gg":
/*!************************************************************************!*\
  !*** ./libs/features/paypal/src/presentation/services/form.service.ts ***!
  \************************************************************************/
/*! exports provided: FormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormService", function() { return FormService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _nequi_commons_exceptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/commons/exceptions */ "0sJq");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_features_paypal_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/paypal/core */ "EkB8");
/* harmony import */ var _nequi_features_paypal_exceptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/paypal/exceptions */ "0TYU");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/utils/string */ "p6rB");
/* harmony import */ var _pages_form_form_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pages/form/form.config */ "z8k3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");













var FormService = /** @class */ (function () {
    function FormService(alertService, navigatorProvider, cardModalService, toastService, translateProvider) {
        var _a;
        var _this = this;
        this.alertService = alertService;
        this.navigatorProvider = navigatorProvider;
        this.cardModalService = cardModalService;
        this.toastService = toastService;
        this.translateProvider = translateProvider;
        this.config = _pages_form_form_config__WEBPACK_IMPORTED_MODULE_8__["FormConfig"];
        this.factoryException = (_a = {},
            _a[_nequi_features_paypal_core__WEBPACK_IMPORTED_MODULE_4__["NoAccountException"].name] = function () {
                _this.showTransactionProblemAlert();
            },
            _a[_nequi_features_paypal_core__WEBPACK_IMPORTED_MODULE_4__["TransactionProblemException"].name] = function () {
                _this.showTransactionProblemAlert();
            },
            _a[_nequi_features_paypal_core__WEBPACK_IMPORTED_MODULE_4__["TransactionInProcessException"].name] = function () {
                _this.onShowAlertError(_this.config.i18n.errorMessages.transactionInProcess, null, function () {
                    return _this.navigatorProvider.navigateBack(_this.config.routes.closet);
                });
            },
            _a[_nequi_features_paypal_exceptions__WEBPACK_IMPORTED_MODULE_5__["UnavailabilityException"].name] = function () {
                _this.onShowAlertError(_this.config.i18n.errorMessages.unavailability, null, function () {
                    return _this.navigatorProvider.navigateBack(_this.config.routes.closet);
                });
            },
            _a[_nequi_features_paypal_core__WEBPACK_IMPORTED_MODULE_4__["TimeoutReverseFinacleException"].name] = function () {
                _this.onShowAlertError(_this.config.i18n.errorMessages.timeoutReverseFinacle, null, function () {
                    return _this.navigatorProvider.navigateBack(_this.config.routes.closet);
                });
            },
            _a[_nequi_features_paypal_core__WEBPACK_IMPORTED_MODULE_4__["ExpiredRateException"].name] = function () {
                _this.onShowAlertError(_this.config.i18n.errorMessages.expiredRate, null, function () {
                    return _this.navigatorProvider.back();
                });
            },
            _a[_nequi_features_paypal_core__WEBPACK_IMPORTED_MODULE_4__["PaypalDebitLimitException"].name] = function (error) {
                _this.showPaypaLimitAlert(error);
            },
            _a[_nequi_features_paypal_core__WEBPACK_IMPORTED_MODULE_4__["PaypalDepositDebitLimitException"].name] = function () {
                _this.showPaypaLimitAlert();
            },
            _a[_nequi_features_paypal_core__WEBPACK_IMPORTED_MODULE_4__["PaypalSystemDebitLimitException"].name] = function () {
                _this.showPaypaLimitAlert();
            },
            _a[_nequi_features_paypal_core__WEBPACK_IMPORTED_MODULE_4__["ExceedDebitCeilingException"].name] = function () {
                _this.showNequiLimitAlert();
            },
            _a[_nequi_features_paypal_core__WEBPACK_IMPORTED_MODULE_4__["ExceedCreditCeilingException"].name] = function () {
                _this.showNequiLimitAlert();
            },
            _a[_nequi_features_paypal_core__WEBPACK_IMPORTED_MODULE_4__["WithdrawalTransactionNotCompletedException"].name] = function () {
                // analyticsProvider.views.payPalMAPayPalDebitLimitAlerWithdrawal.track();
                _this.onShowAlertError(_this.config.i18n.errorMessages.nequiDebitLimitCommission, null, function () {
                    // analyticsProvider.events.paypal.tapBreakCeilingWithdrawal.track();
                    _this.navigatorProvider.navigateForward(_this.config.routes.breakCeiling);
                }, function () {
                    // analyticsProvider.events.paypal.tapNoBreakCeilingWithdrawalPayPal.track();
                    _this.navigatorProvider.back();
                });
            },
            _a[_nequi_features_paypal_core__WEBPACK_IMPORTED_MODULE_4__["PaypalConstraintsProblemException"].name] = function (error) {
                _this.onShowAlertError(_this.config.i18n.errorMessages.paypalConstraintsProblem, error, function () {
                    return _this.navigatorProvider.back();
                });
            },
            _a[_nequi_features_paypal_core__WEBPACK_IMPORTED_MODULE_4__["PaypalAccountLimitsProblemException"].name] = function (error) {
                _this.onShowAlertError(_this.config.i18n.errorMessages.paypalAccountLimitsProblem, error, function () {
                    return _this.navigatorProvider.back();
                });
            },
            _a[_nequi_features_paypal_core__WEBPACK_IMPORTED_MODULE_4__["PaypalAnnualDebitLimitException"].name] = function (error) {
                _this.onShowAlertError(_this.config.i18n.errorMessages.annualDebitLimit, error, function () {
                    return _this.navigatorProvider.back();
                });
            },
            _a[_nequi_features_paypal_core__WEBPACK_IMPORTED_MODULE_4__["PaypalAsyncWithdrawalException"].name] = function () {
                _this.onShowCardModal(_this.config.i18n.errorMessages.paypalAsyncWithdrawal, function () {
                    return _this.navigatorProvider.navigateForward(_this.config.routes.backpackHomeUrl);
                });
            },
            _a[_nequi_features_paypal_core__WEBPACK_IMPORTED_MODULE_4__["PaypalAsyncWithdrawalAccountProblemException"].name] = function () {
                _this.onShowToastError(_this.config.i18n.errorMessages.paypalAsyncWithdrawalAccountProblem);
            },
            _a[_nequi_features_paypal_core__WEBPACK_IMPORTED_MODULE_4__["AnnualCurrencyExchangeTopException"].name] = function (error) {
                _this.onShowAlertError(_this.config.i18n.errorMessages.annualCurrencyExchangeLimit, error, function () {
                    return _this.navigatorProvider.back();
                });
            },
            _a);
    }
    FormService.prototype.setViewModel = function (viewModel) {
        this.viewModel = viewModel;
    };
    FormService.prototype.processError = function (error) {
        if (error instanceof _nequi_commons_exceptions__WEBPACK_IMPORTED_MODULE_1__["ExceedCeilingException"]) {
            throw error;
        }
        if (this.factoryException[error.constructor.name]) {
            this.factoryException[error.constructor.name](error);
            return;
        }
        this.onShowToastError(error.message);
    };
    FormService.prototype.showTransactionProblemAlert = function () {
        var _this = this;
        this.onShowAlertError(this.config.i18n.errorMessages.transactionProblem, null, function () {
            return _this.navigatorProvider.navigateBack(_this.config.routes.closet);
        });
    };
    FormService.prototype.onShowCardModal = function (i18nKey, onAccept) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        messages = this.translateProvider.get(i18nKey);
                        return [4 /*yield*/, this.cardModalService.show({
                                title: messages.header,
                                imgPath: messages.image,
                                content: messages.message,
                                buttons: [
                                    {
                                        text: messages.buttons.accept,
                                        handler: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                            return [2 /*return*/, onAccept === null || onAccept === void 0 ? void 0 : onAccept()];
                                        }); }); },
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
    FormService.prototype.onShowAlertError = function (messages, error, onAccept, onCancel) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var message;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                message = this.translateProvider.get(messages);
                this.alertService.show({
                    messages: {
                        message: (_a = message === null || message === void 0 ? void 0 : message.message) !== null && _a !== void 0 ? _a : error.message,
                        header: message.header,
                        buttons: message.buttons,
                    },
                    handlers: {
                        accept: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                            return [2 /*return*/, onAccept === null || onAccept === void 0 ? void 0 : onAccept()];
                        }); }); },
                        cancel: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                            return [2 /*return*/, onCancel === null || onCancel === void 0 ? void 0 : onCancel()];
                        }); }); },
                    },
                });
                return [2 /*return*/];
            });
        });
    };
    FormService.prototype.showPaypaLimitAlert = function (error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages, alertOptions;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                messages = this.translateProvider.get(this.config.i18n.errorMessages.paypalWithdrawalLimit);
                alertOptions = this.getInitAlertParameters(messages);
                alertOptions.messages.message = this.getPaypalLimitAlertMessage(error === null || error === void 0 ? void 0 : error.message, messages.message);
                this.alertService.show({
                    messages: alertOptions.messages,
                    handlers: {
                        accept: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                            return [2 /*return*/, this.navigatorProvider.back()];
                        }); }); },
                    },
                });
                return [2 /*return*/];
            });
        });
    };
    FormService.prototype.getPaypalLimitAlertMessage = function (errorMessage, defaultContent) {
        if (errorMessage !== undefined) {
            return errorMessage;
        }
        return Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_7__["createFormat"])(defaultContent, [
            this.viewModel.formParams.maxAllowedLimitInUSD.toString(),
        ]);
    };
    FormService.prototype.showNequiLimitAlert = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        messages = this.translateProvider.get(this.config.i18n.errorMessages.nequiDebitLimit);
                        return [4 /*yield*/, this.cardModalService.show({
                                title: messages.header,
                                imgPath: messages.image,
                                content: messages.message,
                                buttons: [
                                    {
                                        text: messages.buttons.accept,
                                        cssClass: 'margin-bottom-16',
                                        handler: function () {
                                            _this.navigatorProvider.navigateForward(_this.config.routes.breakCeiling);
                                        },
                                    },
                                    {
                                        text: messages.buttons.cancel,
                                        color: 'medianoche',
                                        handler: function () {
                                            // analyticsProvider.events.paypal.tapBreakCeilingWithdrawal.track();
                                            _this.navigatorProvider.back();
                                        },
                                    },
                                    {
                                        text: messages.buttons.link,
                                        isLink: true,
                                        handler: function () {
                                            // analyticsProvider.events.paypal.tapNoBreakCeilingWithdrawal.track();
                                            _this.navigatorProvider.navigateForward(_this.config.routes.moneyPartition);
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
    FormService.prototype.onShowToastError = function (i18nKey) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var message;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        message = this.translateProvider.get(i18nKey);
                        return [4 /*yield*/, this.toastService.showError(message)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormService.prototype.getInitAlertParameters = function (messages) {
        var _a, _b;
        return {
            messages: {
                header: messages.header,
                message: messages.message,
                buttons: {
                    accept: (_a = messages.buttons) === null || _a === void 0 ? void 0 : _a.accept,
                    cancel: (_b = messages.buttons) === null || _b === void 0 ? void 0 : _b.cancel,
                },
            },
        };
    };
    FormService.ɵfac = function FormService_Factory(t) { return new (t || FormService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_2__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_3__["NavigatorProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_6__["CardModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_6__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_3__["TranslateProvider"])); };
    FormService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: FormService, factory: FormService.ɵfac });
    return FormService;
}());



/***/ }),

/***/ "07Qx":
/*!*********************************************************!*\
  !*** ./apps/colombia/src/app/features/cash-in/index.ts ***!
  \*********************************************************/
/*! exports provided: CASH_IN_MODULE_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASH_IN_MODULE_CONFIG", function() { return CASH_IN_MODULE_CONFIG; });
/* harmony import */ var _config_parameters_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @config/parameters/config */ "NnSs");
/* harmony import */ var _nequi_features_cash_in_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/features/cash-in/core */ "Kv3X");


var CASH_IN_MODULE_CONFIG = {
    radiusMap: _config_parameters_config__WEBPACK_IMPORTED_MODULE_0__["PARAMETERS_CONFIG"].RADIUS_MAP,
    cashInIdOptions: [_nequi_features_cash_in_core__WEBPACK_IMPORTED_MODULE_1__["CashInOptions"].BANCOLOMBIA, _nequi_features_cash_in_core__WEBPACK_IMPORTED_MODULE_1__["CashInOptions"].PSE, _nequi_features_cash_in_core__WEBPACK_IMPORTED_MODULE_1__["CashInOptions"].CASH, _nequi_features_cash_in_core__WEBPACK_IMPORTED_MODULE_1__["CashInOptions"].HELP],
};


/***/ }),

/***/ "2NV4":
/*!*************************************************************************************************!*\
  !*** ./libs/features/send/src/presentation/other-bank/pages/home/send-money-other-bank.page.ts ***!
  \*************************************************************************************************/
/*! exports provided: SendMoneyOtherBankPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendMoneyOtherBankPage", function() { return SendMoneyOtherBankPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_commons_exceptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/commons/exceptions */ "0sJq");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_money_management_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/features/money-management/core */ "Qxr/");
/* harmony import */ var _nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nequi/features/money-management/presentation */ "JFCQ");
/* harmony import */ var _nequi_features_send_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nequi/features/send/config */ "XAmg");
/* harmony import */ var _nequi_features_send_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nequi/features/send/core */ "mumb");
/* harmony import */ var _nequi_utils_date__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @nequi/utils/date */ "tGfC");
/* harmony import */ var _nequi_utils_string__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @nequi/utils/string */ "p6rB");
/* harmony import */ var _send_money_other_bank_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../send-money-other-bank.config */ "M5Iz");
/* harmony import */ var _services_load_favorite_account_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/load-favorite-account.service */ "dbmG");
/* harmony import */ var _mappers_send_money_other_bank_mapper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./mappers/send-money-other-bank.mapper */ "9P8x");
/* harmony import */ var _send_money_other_bank_view_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./send-money-other-bank.view-model */ "dp8m");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _money_management_src_presentation_components_balance_header_balance_header_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../../money-management/src/presentation/components/balance-header/balance-header.component */ "1rl1");
/* harmony import */ var _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../../../ui/src/lib/directives/animate-title-on-scroll/animate-title-on-scroll.directive */ "qbWi");
/* harmony import */ var _ui_src_lib_directives_form_content_style_form_content_style_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../../../ui/src/lib/directives/form-content-style/form-content-style.directive */ "+XT3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ui_src_lib_directives_control_errors_control_errors_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../../../../ui/src/lib/directives/control-errors/control-errors.directive */ "XHcO");
/* harmony import */ var _ui_src_lib_directives_input_trim_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../../../../ui/src/lib/directives/input/trim.directive */ "nZkk");
/* harmony import */ var _ui_src_lib_controls_input_select_input_select_control_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../../../../ui/src/lib/controls/input-select/input-select-control.component */ "BMu5");
/* harmony import */ var _ui_src_lib_controls_nequi_input_currency_nequi_input_currency_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../../../../ui/src/lib/controls/nequi-input-currency/nequi-input-currency.component */ "VG0r");
/* harmony import */ var _money_management_src_presentation_controls_origin_money_control_origin_money_control_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../../../money-management/src/presentation/controls/origin-money-control/origin-money-control.component */ "O3Yd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");






































var _c0 = function (a0, a1) { return { control: a0, messages: a1 }; };
var _c1 = function (a0, a1, a2) { return { required: a0, pattern: a1, invalidAccountLength: a2 }; };
var _c2 = function (a0, a1, a2) { return { required: a0, min: a1, max: a2 }; };
function SendMoneyOtherBankPage_form_18_Template(rf, ctx) { if (rf & 1) {
    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-list", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("focusout", function SendMoneyOtherBankPage_form_18_Template_ion_input_focusout_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.onBlur(); })("ionFocus", function SendMoneyOtherBankPage_form_18_Template_ion_input_ionFocus_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); ctx_r3.viewModel.nameControl.markAsUntouched(); return ctx_r3.viewModel.nameControl.markAsPristine(); })("ionChange", function SendMoneyOtherBankPage_form_18_Template_ion_input_ionChange_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.viewModel.normalizeNameData(ctx_r4.viewModel.nameControl); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "nequi-input-select-control", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ion-label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ion-input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ionFocus", function SendMoneyOtherBankPage_form_18_Template_ion_input_ionFocus_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); ctx_r5.viewModel.documentNumberControl.markAsUntouched(); return ctx_r5.viewModel.documentNumberControl.markAsPristine(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "nequi-input-select-control", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selected", function SendMoneyOtherBankPage_form_18_Template_nequi_input_select_control_selected_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.bankSelected($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "nequi-input-select-control", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selected", function SendMoneyOtherBankPage_form_18_Template_nequi_input_select_control_selected_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.accountSelected($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "ion-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "ion-label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "ion-input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ionFocus", function SendMoneyOtherBankPage_form_18_Template_ion_input_ionFocus_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); ctx_r8.viewModel.accountNumberControl.markAsUntouched(); return ctx_r8.viewModel.accountNumberControl.markAsPristine(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "ion-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](30, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "ion-label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "nequi-input-currency", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "ion-item", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "ion-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](39, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "ion-toggle", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "ion-item", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "ion-label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](44, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "nequi-origin-money-control", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](46, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.viewModel.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nequiControlErrors", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](68, _c0, ctx_r0.viewModel.nameControl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 34, "validators.general")));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 36, "cashout.send-banks.name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r0.viewModel.nameControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 38, "cashout.send-banks.documentType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r0.viewModel.documentTypeControl)("options", ctx_r0.viewModel.documentTypes)("hideFilter", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nequiControlErrors", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](71, _c0, ctx_r0.viewModel.documentNumberControl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 40, "validators.general")));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 42, "cashout.send-banks.documentNumber"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r0.viewModel.documentNumberControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 44, "cashout.send-banks.bank"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r0.viewModel.bankControl)("options", ctx_r0.getBankList.bind(ctx_r0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 46, "cashout.send-banks.accountType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r0.viewModel.accountTypeControl)("isDisabled", !ctx_r0.viewModel.form.value.bank)("options", ctx_r0.accountTypes)("hideFilter", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nequiControlErrors", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](78, _c0, ctx_r0.viewModel.accountNumberControl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](74, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](21, 48, "validators.general.required"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](22, 50, "validators.general.pattern"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](23, 52, "cashout.send-banks.invalid-account-length"))));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](26, 54, "cashout.send-banks.accountNumber"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r0.viewModel.accountNumberControl)("disabled", !ctx_r0.viewModel.form.value.bank || !ctx_r0.viewModel.form.value.accountType);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nequiControlErrors", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](85, _c0, ctx_r0.viewModel.amountControl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](81, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](29, 56, "cashout.send-banks.validators.amount.default.required"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](30, 58, "cashout.send-banks.validators.amount.default.min"), ctx_r0.viewModel.maxMoneyToTransferErrorMessage)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](33, 60, "cashout.send-banks.amount"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("control", ctx_r0.viewModel.amountControl)("allowNegative", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](39, 62, "cashout.send-banks.rememberInFavorites"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r0.viewModel.form.invalid && !ctx_r0.viewModel.favoriteLoaded)("formControl", ctx_r0.viewModel.isFavoriteControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](44, 64, "cashout.send-banks.originMoney"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r0.viewModel.pocketControl)("minAmount", ctx_r0.viewModel.form.value.amount)("title", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](46, 66, "cashout.send-banks.originMoney"));
} }
var SendMoneyOtherBankPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SendMoneyOtherBankPage, _super);
    function SendMoneyOtherBankPage(bankInteractor, feeInteractor, currencyPipe, loadFavoriteAccountService, sendInteractor, router, analyticsInteractor, moduleConfigProvider, sendConfigProvider, injector, balanceInterator) {
        var _this = _super.call(this, injector) || this;
        _this.bankInteractor = bankInteractor;
        _this.feeInteractor = feeInteractor;
        _this.currencyPipe = currencyPipe;
        _this.loadFavoriteAccountService = loadFavoriteAccountService;
        _this.sendInteractor = sendInteractor;
        _this.router = router;
        _this.analyticsInteractor = analyticsInteractor;
        _this.moduleConfigProvider = moduleConfigProvider;
        _this.sendConfigProvider = sendConfigProvider;
        _this.balanceInterator = balanceInterator;
        _this.viewModel = new _send_money_other_bank_view_model__WEBPACK_IMPORTED_MODULE_17__["SendMoneyOtherBankViewModel"]();
        _this.balanceToogle = false;
        _this.translateProvider.loadModule(_this.moduleConfigProvider.i18n.moduleKey).then(function () {
            _this.createDocumentTypes();
        });
        return _this;
    }
    Object.defineProperty(SendMoneyOtherBankPage.prototype, "accountTypes", {
        get: function () {
            var _a, _b;
            return ((_b = (_a = this.viewModel.bankControl) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.accountTypes) || [];
        },
        enumerable: false,
        configurable: true
    });
    SendMoneyOtherBankPage.prototype.ngOnInit = function () {
        var _a, _b, _c, _d;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var pocket;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_e) {
                pocket = (_a = this.router.getCurrentNavigation().extras.state) === null || _a === void 0 ? void 0 : _a.pocket;
                this.config = this.sendConfigProvider.sendOtherBankConfig;
                this.viewModel.setConfig(this.config);
                this.viewModel.buildForm(pocket);
                this.checkLoadFavorite();
                this.favoriteSubscription$ = (_d = (_c = (_b = this.viewModel.isFavoriteControl) === null || _b === void 0 ? void 0 : _b.valueChanges) === null || _c === void 0 ? void 0 : _c.subscribe) === null || _d === void 0 ? void 0 : _d.call(_c, function (value) {
                    _this.onFavoriteToggleChange(value);
                });
                return [2 /*return*/];
            });
        });
    };
    SendMoneyOtherBankPage.prototype.ngOnDestroy = function () {
        var _a;
        this.viewModel.favoriteAccountSubscription.unsubscribe();
        (_a = this.favoriteSubscription$) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        this.viewModel.destroy();
    };
    SendMoneyOtherBankPage.prototype.onBlur = function () {
        this.viewModel.onBlur();
    };
    SendMoneyOtherBankPage.prototype.goBack = function () {
        this.navigatorProvider.back();
    };
    SendMoneyOtherBankPage.prototype.bankSelected = function (bank) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.viewModel.accountTypeControl.reset();
                        this.viewModel.accountNumberControl.reset();
                        return [4 /*yield*/, this.getFee(bank)];
                    case 1:
                        _a.sent();
                        this.showCostAndDateToSendMoneyNotification(bank);
                        return [2 /*return*/];
                }
            });
        });
    };
    SendMoneyOtherBankPage.prototype.accountSelected = function (accountSelected) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.viewModel.updateAccountControlValidators(accountSelected.attributes);
                        if (!(accountSelected.type === _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_6__["AccountType"].CAT)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getMaxMoneyToTransfer()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                    case 2:
                        this.viewModel.maxMoneyToTransferErrorMessage = this.translateProvider.get(_send_money_other_bank_config__WEBPACK_IMPORTED_MODULE_14__["SendMoneyOtherBankConfig"].i18n.defaultAmountError);
                        this.viewModel.updateAmountControlValidator(null);
                        return [2 /*return*/];
                }
            });
        });
    };
    SendMoneyOtherBankPage.prototype.onFavoriteToggleChange = function (value) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var message;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(value && !this.viewModel.favoriteLoaded)) return [3 /*break*/, 2];
                        message = this.translateProvider.get(_send_money_other_bank_config__WEBPACK_IMPORTED_MODULE_14__["SendMoneyOtherBankConfig"].i18n.favoriteActivated);
                        return [4 /*yield*/, this.toastService.showSuccess(message)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!value && this.viewModel.favoriteLoaded && this.viewModel.isSameAccount) {
                            this.showConfirmDeleteFavoriteAlert();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SendMoneyOtherBankPage.prototype.goToFavoriteAccount = function () {
        this.navigatorProvider.navigateForward(_send_money_other_bank_config__WEBPACK_IMPORTED_MODULE_14__["SendMoneyOtherBankConfig"].favoriteAccountsUrl);
    };
    SendMoneyOtherBankPage.prototype.sendMoney = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var transaction;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                transaction = new _nequi_features_send_core__WEBPACK_IMPORTED_MODULE_11__["SendMoneyOtherBankTransaction"]()
                    .withAmount(this.viewModel.form.value.amount)
                    .withData(new _mappers_send_money_other_bank_mapper__WEBPACK_IMPORTED_MODULE_16__["SendMoneyOtherBankMapper"]().from(this.viewModel.form.value))
                    .withPocket(this.viewModel.form.value.pocket);
                _super.prototype.executeTransaction.call(this, transaction);
                return [2 /*return*/];
            });
        });
    };
    SendMoneyOtherBankPage.prototype.getBankList = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, this.bankInteractor.getList()];
            });
        });
    };
    SendMoneyOtherBankPage.prototype.getConfirmationInfo = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                messages = this.translateProvider.get(_send_money_other_bank_config__WEBPACK_IMPORTED_MODULE_14__["SendMoneyOtherBankConfig"].i18n.confirmation);
                return [2 /*return*/, {
                        title: messages.title,
                        items: this.viewModel.buildArrayConfirmationItems(messages, this.currencyPipe),
                        confirmLabel: messages.buttons.confirm,
                        cancelLabel: messages.buttons.cancel,
                        viewCancel: false,
                    }];
            });
        });
    };
    SendMoneyOtherBankPage.prototype.setOriginMoney = function (transaction) {
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
    SendMoneyOtherBankPage.prototype.onTransactionSuccess = function (_response, transaction) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var message;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        message = this.translateProvider.get(_send_money_other_bank_config__WEBPACK_IMPORTED_MODULE_14__["SendMoneyOtherBankConfig"].i18n.success);
                        this.setAnalytics();
                        return [4 /*yield*/, this.toastService.showSuccess(message)];
                    case 1:
                        _a.sent();
                        this.navigatorProvider.navigateForward([_send_money_other_bank_config__WEBPACK_IMPORTED_MODULE_14__["SendMoneyOtherBankConfig"].routes.detail], {
                            state: transaction,
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SendMoneyOtherBankPage.prototype.onTransactionFailed = function (error) {
        var _a, _b, _c, _d;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages, alertOptions;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_e) {
                if (error instanceof _nequi_commons_exceptions__WEBPACK_IMPORTED_MODULE_4__["ExceedCeilingException"] ||
                    _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_6__["NOT_BALANCE_AVAILABLE_ERRORS"].includes(error.code)) {
                    throw error;
                }
                messages = this.translateProvider.get((_a = _send_money_other_bank_config__WEBPACK_IMPORTED_MODULE_14__["SendMoneyOtherBankConfig"].errorMessages[error.code]) !== null && _a !== void 0 ? _a : _send_money_other_bank_config__WEBPACK_IMPORTED_MODULE_14__["SendMoneyOtherBankConfig"].i18n.errorDefault);
                alertOptions = {
                    messages: {
                        header: messages.title,
                        message: ((_b = error === null || error === void 0 ? void 0 : error.data) === null || _b === void 0 ? void 0 : _b.balance) ? Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_13__["createFormat"])(messages.content, [String(error.data.balance)])
                            : messages.content,
                        buttons: {
                            accept: (_c = messages.buttons) === null || _c === void 0 ? void 0 : _c.okButton,
                            cancel: (_d = messages.buttons) === null || _d === void 0 ? void 0 : _d.cancelButton,
                        },
                    },
                };
                this.alertService.show(alertOptions);
                return [2 /*return*/];
            });
        });
    };
    SendMoneyOtherBankPage.prototype.createDocumentTypes = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var documentTypes;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                documentTypes = this.translateProvider.get(_send_money_other_bank_config__WEBPACK_IMPORTED_MODULE_14__["SendMoneyOtherBankConfig"].i18n.documentTypes);
                this.viewModel.createDocumentTypeList(documentTypes);
                return [2 /*return*/];
            });
        });
    };
    SendMoneyOtherBankPage.prototype.getFee = function (bank) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var response, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.feeInteractor.get({
                                feeType: _nequi_features_send_core__WEBPACK_IMPORTED_MODULE_11__["FeeTypes"].OTHER_BANKS,
                                achCode: bank.achCode,
                            })];
                    case 1:
                        response = _a.sent();
                        this.commission = response.totalCommission;
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        if (bank.id === this.config.localBank) {
                            this.commission = 0;
                        }
                        else {
                            this.commission = this.config.defaultCommission;
                        }
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SendMoneyOtherBankPage.prototype.showCostAndDateToSendMoneyNotification = function (bank) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var message, nextAvailableDay, arrayMessageParams, day, dayName;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        message = '';
                        if (!(bank.id === this.config.localBank)) return [3 /*break*/, 2];
                        message = this.translateProvider.get(_send_money_other_bank_config__WEBPACK_IMPORTED_MODULE_14__["SendMoneyOtherBankConfig"].i18n.sendToLocalBank);
                        return [4 /*yield*/, this.toastService.showInfo(message)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                    case 2:
                        nextAvailableDay = Object(_nequi_utils_date__WEBPACK_IMPORTED_MODULE_12__["getNextAvailableDay"])(new Date(), this.config.lastAvailableHour);
                        arrayMessageParams = [this.currencyPipe.transform(this.commission)];
                        if (!Object(_nequi_utils_date__WEBPACK_IMPORTED_MODULE_12__["isToday"])(nextAvailableDay)) return [3 /*break*/, 4];
                        message = this.translateProvider.get(_send_money_other_bank_config__WEBPACK_IMPORTED_MODULE_14__["SendMoneyOtherBankConfig"].i18n.sendToday);
                        return [4 /*yield*/, this.toastService.showInfo(Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_13__["createFormat"])(message, arrayMessageParams))];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                    case 4:
                        if (Object(_nequi_utils_date__WEBPACK_IMPORTED_MODULE_12__["isTomorrow"])(nextAvailableDay)) {
                            message = this.translateProvider.get(_send_money_other_bank_config__WEBPACK_IMPORTED_MODULE_14__["SendMoneyOtherBankConfig"].i18n.sendTomorrow);
                        }
                        else {
                            day = nextAvailableDay.getDay();
                            dayName = _send_money_other_bank_config__WEBPACK_IMPORTED_MODULE_14__["SendMoneyOtherBankConfig"].notificationMessages.days[day].toLowerCase();
                            arrayMessageParams.push(dayName);
                            arrayMessageParams.push(day);
                            message = this.translateProvider.get(_send_money_other_bank_config__WEBPACK_IMPORTED_MODULE_14__["SendMoneyOtherBankConfig"].i18n.sendNextAvailableDay);
                        }
                        return [4 /*yield*/, this.toastService.showInfo(Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_13__["createFormat"])(message, arrayMessageParams))];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SendMoneyOtherBankPage.prototype.checkLoadFavorite = function () {
        var _this = this;
        this.viewModel.favoriteAccountSubscription = this.loadFavoriteAccountService.favoriteAccount$.subscribe(function (favorite) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.viewModel.setFavorite(favorite);
                        return [4 /*yield*/, this.getFee(favorite.bank)];
                    case 1:
                        _a.sent();
                        this.showCostAndDateToSendMoneyNotification(favorite.bank);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    SendMoneyOtherBankPage.prototype.showConfirmDeleteFavoriteAlert = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (this.viewModel.favoriteLoaded) {
                    this.alertService.showByI18n({
                        i18nKey: _send_money_other_bank_config__WEBPACK_IMPORTED_MODULE_14__["SendMoneyOtherBankConfig"].i18n.confirmDeleteFavorite,
                        handlers: {
                            accept: function () { return _this.deleteFavorite(); },
                            cancel: function () { return _this.viewModel.isFavoriteControl.setValue(true); },
                        },
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    SendMoneyOtherBankPage.prototype.deleteFavorite = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var error_2;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.loadingService.show()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.sendInteractor.deleteFavorite({
                                beneficiaryDocument: {
                                    id: this.viewModel.favoriteLoaded.beneficiaryDocument.id,
                                    type: this.viewModel.favoriteLoaded.beneficiaryDocument.type,
                                },
                                destinationAccount: this.viewModel.favoriteLoaded.destination.account,
                            })];
                    case 2:
                        _a.sent();
                        this.viewModel.favoriteLoaded = null;
                        this.loadingService.hide(true);
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        this.loadingService.hide(false);
                        this.showErrorDeletingFavoriteAlert();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SendMoneyOtherBankPage.prototype.showErrorDeletingFavoriteAlert = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertService.showByI18n({
                            i18nKey: _send_money_other_bank_config__WEBPACK_IMPORTED_MODULE_14__["SendMoneyOtherBankConfig"].i18n.errorDeletingFavorite,
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SendMoneyOtherBankPage.prototype.setAnalytics = function () {
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_6__["AnalyticsType"].FACEBOOK,
            params: {
                eventName: _send_money_other_bank_config__WEBPACK_IMPORTED_MODULE_14__["SendMoneyOtherBankConfig"].analytics.events.successfulMoneySendingToOtherBank,
            },
        });
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_6__["AnalyticsType"].FACEBOOK,
            params: { eventName: _send_money_other_bank_config__WEBPACK_IMPORTED_MODULE_14__["SendMoneyOtherBankConfig"].analytics.events.facebookMobilePurchase },
        });
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_6__["AnalyticsType"].FIREBASE,
            params: {
                eventName: _send_money_other_bank_config__WEBPACK_IMPORTED_MODULE_14__["SendMoneyOtherBankConfig"].analytics.events.successfulMoneySendingToOtherBank,
            },
        });
    };
    SendMoneyOtherBankPage.prototype.getMaxMoneyToTransfer = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var maxMoneyToTransfer, message;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loadingService.show();
                        return [4 /*yield*/, this.balanceInterator.getLimits()];
                    case 1:
                        maxMoneyToTransfer = (_a.sent()).credit;
                        message = this.translateProvider.get(_send_money_other_bank_config__WEBPACK_IMPORTED_MODULE_14__["SendMoneyOtherBankConfig"].i18n.catsAmountError);
                        this.viewModel.maxMoneyToTransferErrorMessage = Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_13__["createFormat"])(message, [
                            this.currencyPipe.transform(maxMoneyToTransfer, '', '', '.00'),
                        ]);
                        this.viewModel.updateAmountControlValidator(maxMoneyToTransfer);
                        this.loadingService.hide();
                        return [2 /*return*/];
                }
            });
        });
    };
    SendMoneyOtherBankPage.ɵfac = function SendMoneyOtherBankPage_Factory(t) { return new (t || SendMoneyOtherBankPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_send_core__WEBPACK_IMPORTED_MODULE_11__["BankInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_send_core__WEBPACK_IMPORTED_MODULE_11__["FeeInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_load_favorite_account_service__WEBPACK_IMPORTED_MODULE_15__["LoadFavoriteAccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_send_core__WEBPACK_IMPORTED_MODULE_11__["SendInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_6__["AnalyticsInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_5__["ModuleConfigProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_send_config__WEBPACK_IMPORTED_MODULE_10__["SendConfigProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_money_management_core__WEBPACK_IMPORTED_MODULE_8__["BalanceInteractor"])); };
    SendMoneyOtherBankPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SendMoneyOtherBankPage, selectors: [["app-send-mony-other-bank"]], viewQuery: function SendMoneyOtherBankPage_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_9__["OriginMoneyControlComponent"], 1);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.originMoneyControl = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 24, vars: 14, consts: [[1, "nequi-header", "nequi-header--white"], ["slot", "start"], [3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], [1, "nequi-header__title", "ion-text-start"], ["slot", "end"], ["name", "star-outline", "slot", "start"], ["slot", "icon-only", 3, "name"], [3, "isDarkTheme", "isShow"], ["fullscreen", "true", "scrollEvents", "true", "appAnimateTitleOnScroll", "", "appFormContentStyle", "", 1, "ion-padding-horizontal", "ion-content--white"], [1, "nequi-title"], ["class", "form", 3, "formGroup", 4, "ngIf"], [1, "nequi-footer"], ["shape", "round", "expand", "block", "color", "guayaba", 1, "margin-vertical-16", 3, "disabled", "click"], [1, "form", 3, "formGroup"], [1, "form__list"], [1, "nequi-item", "margin-bottom-8", 3, "nequiControlErrors"], ["position", "floating", 1, "nequi-item__label"], ["type", "text", "trim", "", 1, "nequi-item__input", 3, "formControl", "focusout", "ionFocus", "ionChange"], [3, "formControl", "label", "options", "hideFilter"], ["type", "tel", 1, "nequi-item__input", 3, "formControl", "ionFocus"], ["visibleKey", "name", 3, "formControl", "label", "options", "selected"], ["visibleKey", "description", 3, "formControl", "isDisabled", "label", "options", "hideFilter", "selected"], ["type", "tel", 1, "nequi-item__input", 3, "formControl", "disabled", "ionFocus"], ["tooltipType", "error", "inputClass", "nequi-item__input", 1, "sc-ion-input-ios-h", 3, "control", "allowNegative"], ["lines", "none", 1, "form__list__favorite", "margin-bottom-8", "margin-horizontal-8"], ["slot", "end", 1, "nequi-item__toggle", 3, "disabled", "formControl"], ["lines", "none", 1, "ion-no-padding", "nequi-item-no-background", "nequi-item-no-lines"], [1, "form__list__pocket-label"], [1, "margin-bottom-8", 3, "formControl", "minAmount", "title"]], template: function SendMoneyOtherBankPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SendMoneyOtherBankPage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-title", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-buttons", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SendMoneyOtherBankPage_Template_ion_button_click_9_listener() { return ctx.goToFavoriteAccount(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "ion-icon", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SendMoneyOtherBankPage_Template_ion_button_click_11_listener() { return ctx.balanceToogle = !ctx.balanceToogle; });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "ion-icon", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "app-balance-header", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-content", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ion-text", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, SendMoneyOtherBankPage_form_18_Template, 47, 88, "form", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "ion-footer", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "ion-button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SendMoneyOtherBankPage_Template_ion_button_click_21_listener() { return ctx.sendMoney(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 8, "cashout.send-banks.title"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("name", ctx.balanceToogle ? "chevron-up-outline" : "chevron-down-outline");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("isDarkTheme", false)("isShow", ctx.balanceToogle);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 10, "cashout.send-banks.title"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.viewModel.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.viewModel.form.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](23, 12, "cashout.send-banks.ready"));
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_18__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_18__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_18__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_18__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_18__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_18__["IonTitle"], _money_management_src_presentation_components_balance_header_balance_header_component__WEBPACK_IMPORTED_MODULE_19__["BalanceHeaderComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_18__["IonContent"], _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_20__["AnimateTitleOnScrollDirective"], _ui_src_lib_directives_form_content_style_form_content_style_directive__WEBPACK_IMPORTED_MODULE_21__["FormContentStyleDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_18__["IonText"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_18__["IonFooter"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_18__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_18__["IonItem"], _ui_src_lib_directives_control_errors_control_errors_directive__WEBPACK_IMPORTED_MODULE_23__["ControlErrorsDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_18__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_18__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_18__["TextValueAccessor"], _ui_src_lib_directives_input_trim_directive__WEBPACK_IMPORTED_MODULE_24__["InputTrimDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormControlDirective"], _ui_src_lib_controls_input_select_input_select_control_component__WEBPACK_IMPORTED_MODULE_25__["InputSelectControlComponent"], _ui_src_lib_controls_nequi_input_currency_nequi_input_currency_component__WEBPACK_IMPORTED_MODULE_26__["NequiInputCurrencyComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_18__["IonToggle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_18__["BooleanValueAccessor"], _money_management_src_presentation_controls_origin_money_control_origin_money_control_component__WEBPACK_IMPORTED_MODULE_27__["OriginMoneyControlComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__["TranslatePipe"]], styles: [".form__list[_ngcontent-%COMP%] {\n  background: transparent;\n}\n.form__list__favorite[_ngcontent-%COMP%] {\n  border: 1px solid rgba(151, 151, 151, 0.04);\n  box-shadow: 0px 1px 1px rgba(60, 133, 127, 0.15);\n  border-radius: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvc2VuZC1tb25leS1vdGhlci1iYW5rLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHVCQUFBO0FBQUo7QUFFSTtFQUNFLDJDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxrQkFBQTtBQUFOIiwiZmlsZSI6InNlbmQtbW9uZXktb3RoZXItYmFuay5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybSB7XG4gICZfX2xpc3Qge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gICAgJl9fZmF2b3JpdGUge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNTEsIDE1MSwgMTUxLCAwLjA0KTtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggMXB4IHJnYmEoNjAsIDEzMywgMTI3LCAwLjE1KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
    return SendMoneyOtherBankPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_7__["TransactionBasePage"]));



/***/ }),

/***/ "4Hmc":
/*!**********************************************************!*\
  !*** ./libs/features/paypal/src/config/paypal.config.ts ***!
  \**********************************************************/
/*! exports provided: PaypalConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaypalConfig", function() { return PaypalConfig; });
var PaypalConfig = Object.freeze({
    i18n: {
        moduleKey: 'paypal',
    },
    applicationData: {
        paypalHomeIsShowFirstMessage: 'paypal.paypal-home-is-show-first-message',
    },
});


/***/ }),

/***/ "5lJz":
/*!**************************************************************************************************!*\
  !*** ./libs/features/send/src/presentation/other-bank/pages/favorite/favorite-account.config.ts ***!
  \**************************************************************************************************/
/*! exports provided: FavoriteAccountConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteAccountConfig", function() { return FavoriteAccountConfig; });
var FavoriteAccountConfig = Object.freeze({
    cashoutUrl: '/admin/send/bank',
    colors: {
        cssClass: [
            'list-item__icon list-item__icon--pink',
            'list-item__icon list-item__icon--purple',
            'list-item__icon list-item__icon--gray',
            'list-item__icon list-item__icon--blue',
            'list-item__icon list-item__icon--cyan',
            'list-item__icon list-item__icon--green',
        ],
    },
    sendMoneyOtherBankUrl: '/admin/send/bank',
    emptyCaseImage: 'assets/images/empty-cases/empty-case-relations-list.svg',
    emptyCaseText: 'cashout.favorite-account.empty-case.label',
});


/***/ }),

/***/ "6X76":
/*!*********************************************************************************!*\
  !*** ./libs/features/paypal/src/presentation/features-paypal-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: FeaturesPaypalRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesPaypalRoutingModule", function() { return FeaturesPaypalRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _config_paypal_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/paypal.config */ "4Hmc");
/* harmony import */ var _middlewares_pay_pal_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./middlewares/pay-pal.middleware */ "oDJG");
/* harmony import */ var _pages_form_info_form_info_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/form-info/form-info.page */ "EaRh");
/* harmony import */ var _pages_form_form_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/form/form.page */ "IUtL");
/* harmony import */ var _pages_home_home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/home/home.page */ "rXf7");
/* harmony import */ var _pages_registry_info_registry_info_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/registry-info/registry-info.page */ "S/Y9");
/* harmony import */ var _pages_registry_registry_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/registry/registry.page */ "EV9H");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");











var routes = [
    {
        path: '',
        data: {
            i18nModuleKey: _config_paypal_config__WEBPACK_IMPORTED_MODULE_2__["PaypalConfig"].i18n.moduleKey,
        },
        canActivate: [_middlewares_pay_pal_middleware__WEBPACK_IMPORTED_MODULE_3__["PaypalMiddleware"]],
    },
    {
        path: 'receive',
        component: _pages_home_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"],
    },
    {
        path: 'registry',
        component: _pages_registry_registry_page__WEBPACK_IMPORTED_MODULE_8__["RegistryPage"],
    },
    {
        path: 'info-registry',
        component: _pages_registry_info_registry_info_page__WEBPACK_IMPORTED_MODULE_7__["RegistryInfoPage"],
    },
    {
        path: 'form-info',
        component: _pages_form_info_form_info_page__WEBPACK_IMPORTED_MODULE_4__["FormInfoPage"],
    },
    {
        path: 'form',
        component: _pages_form_form_page__WEBPACK_IMPORTED_MODULE_5__["FormPage"],
    },
    {
        path: 'profile',
        loadChildren: function () {
            return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @nequi/features/profile/presentation */ "cLcF")).then(function (m) { return m.FeaturesProfileModule; });
        },
    },
];
var FeaturesPaypalRoutingModule = /** @class */ (function () {
    function FeaturesPaypalRoutingModule() {
    }
    FeaturesPaypalRoutingModule.ɵfac = function FeaturesPaypalRoutingModule_Factory(t) { return new (t || FeaturesPaypalRoutingModule)(); };
    FeaturesPaypalRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: FeaturesPaypalRoutingModule });
    FeaturesPaypalRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(_nequi_features_commons__WEBPACK_IMPORTED_MODULE_1__["I18nModuleResolver"].setup(routes, [_config_paypal_config__WEBPACK_IMPORTED_MODULE_2__["PaypalConfig"].i18n.moduleKey]))], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return FeaturesPaypalRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](FeaturesPaypalRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "9A31":
/*!***************************************************************************!*\
  !*** ./libs/features/paypal/src/presentation/services/account.service.ts ***!
  \***************************************************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_features_paypal_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/paypal/core */ "EkB8");
/* harmony import */ var _nequi_features_paypal_exceptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/paypal/exceptions */ "0TYU");
/* harmony import */ var _nequi_features_security_auth_presentation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/security/auth/presentation */ "hHau");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _pages_home_home_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/home/home.config */ "iYAC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");














var AccountService = /** @class */ (function () {
    function AccountService(navigatorProvider, paypalInterator, alertService, cardModalService, loadingService, toastService, translateProvider, pinChallengeService) {
        this.navigatorProvider = navigatorProvider;
        this.paypalInterator = paypalInterator;
        this.alertService = alertService;
        this.cardModalService = cardModalService;
        this.loadingService = loadingService;
        this.toastService = toastService;
        this.translateProvider = translateProvider;
        this.pinChallengeService = pinChallengeService;
        this.config = _pages_home_home_config__WEBPACK_IMPORTED_MODULE_7__["HomeConfig"];
    }
    Object.defineProperty(AccountService.prototype, "metrics", {
        get: function () {
            return this.metricsInfo;
        },
        set: function (params) {
            this.metricsInfo = params;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountService.prototype, "userInfo", {
        get: function () {
            return this.infoUser;
        },
        set: function (info) {
            this.infoUser = info;
        },
        enumerable: false,
        configurable: true
    });
    AccountService.prototype.getUserStatus = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, this.loadingService.show()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.paypalInterator.getUserStatus()];
                    case 2:
                        data = _a.sent();
                        return [4 /*yield*/, this.loadingService.hideWithoutFeedback()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, data];
                    case 4:
                        error_1 = _a.sent();
                        return [2 /*return*/, this.processError(error_1)];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    AccountService.prototype.unlinkAccount = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var message, error_2;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 8]);
                        return [4 /*yield*/, this.loadingService.show()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.paypalInterator.unlinkAccountPaypal()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.loadingService.hide(true)];
                    case 3:
                        _a.sent();
                        message = this.translateProvider.get(this.config.i18n.unlinkAccountSuccess);
                        return [4 /*yield*/, this.toastService.showSuccess(message, this.config.toastTimer)];
                    case 4:
                        _a.sent();
                        this.navigatorProvider.navigateRoot(this.config.routes.backpackHomeUrl);
                        return [3 /*break*/, 8];
                    case 5:
                        error_2 = _a.sent();
                        return [4 /*yield*/, this.showUnlinkAccountError()];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, this.loadingService.hide(false)];
                    case 7:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    AccountService.prototype.getAccountServices = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var params, responseRates, responseLimitsAccounts;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = {
                            option: _nequi_features_paypal_core__WEBPACK_IMPORTED_MODULE_3__["TransactionType"].WITHDRAWAL,
                        };
                        return [4 /*yield*/, this.paypalInterator.getRecharges(params)];
                    case 1:
                        responseRates = _a.sent();
                        return [4 /*yield*/, this.paypalInterator.getLimitsAccount(this.config.typeLimitsAccount.withdrawal)];
                    case 2:
                        responseLimitsAccounts = _a.sent();
                        this.metrics = { responseRates: responseRates, responseLimitsAccounts: responseLimitsAccounts };
                        return [2 /*return*/, this.metrics];
                }
            });
        });
    };
    AccountService.prototype.showUnlinkAccountError = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertService.showByI18n({
                            i18nKey: _pages_home_home_config__WEBPACK_IMPORTED_MODULE_7__["HomeConfig"].i18n.failUnlinkAccount,
                            handlers: {
                                accept: function () { return _this.navigatorProvider.navigateBack(_this.config.routes.closetUrl); },
                            },
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AccountService.prototype.processError = function (error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var accountExceptions;
            var _a;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        accountExceptions = (_a = {},
                            _a[_nequi_features_paypal_exceptions__WEBPACK_IMPORTED_MODULE_4__["ControlListException"].name] = function () { return _this.showControlListError(); },
                            _a[_nequi_features_paypal_exceptions__WEBPACK_IMPORTED_MODULE_4__["EmailException"].name] = function () { return _this.showModalEmailConfirmation(); },
                            _a[_nequi_features_paypal_exceptions__WEBPACK_IMPORTED_MODULE_4__["NoAccountException"].name] = function () { return _this.registryAccount(error); },
                            _a);
                        if (accountExceptions[error.constructor.name]) {
                            accountExceptions[error.constructor.name]();
                            return [2 /*return*/, null];
                        }
                        return [4 /*yield*/, this.loadingService.hideWithoutFeedback()];
                    case 1:
                        _b.sent();
                        throw error;
                }
            });
        });
    };
    AccountService.prototype.showControlListError = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingService.hideWithoutFeedback()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.alertService.showByI18n({
                                i18nKey: _pages_home_home_config__WEBPACK_IMPORTED_MODULE_7__["HomeConfig"].i18n.controlListError,
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AccountService.prototype.showModalEmailConfirmation = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingService.hideWithoutFeedback()];
                    case 1:
                        _a.sent();
                        messages = this.translateProvider.get(this.config.i18n.emailConfirmationError);
                        return [4 /*yield*/, this.cardModalService.show({
                                title: messages.title,
                                imgPath: messages.image,
                                content: messages.content,
                                buttons: [
                                    {
                                        text: messages.buttons.accept,
                                        handler: function () { return _this.gotToSettingsToChangeEmail(); },
                                    },
                                    {
                                        text: messages.buttons.cancel,
                                        color: this.config.color.medianocheGray,
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
    AccountService.prototype.gotToSettingsToChangeEmail = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var pinChallengeMessages;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pinChallengeMessages = this.translateProvider.get(this.config.i18n.pinChallenge);
                        return [4 /*yield*/, this.pinChallengeService.show(pinChallengeMessages)];
                    case 1:
                        if (!(_a.sent())) {
                            return [2 /*return*/];
                        }
                        this.navigatorProvider.navigateForward([this.config.routes.emailUrl], {
                            state: { requireKeyCard: true },
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AccountService.prototype.registryAccount = function (error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = error === null || error === void 0 ? void 0 : error.data;
                        this.userInfo = data;
                        return [4 /*yield*/, this.loadingService.hideWithoutFeedback()];
                    case 1:
                        _a.sent();
                        this.navigatorProvider.navigateForward([this.config.routes.infoPage], {
                            state: { data: data },
                        });
                        return [2 /*return*/, true];
                }
            });
        });
    };
    AccountService.ɵfac = function AccountService_Factory(t) { return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_2__["NavigatorProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_nequi_features_paypal_core__WEBPACK_IMPORTED_MODULE_3__["PaypalInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_1__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_6__["CardModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_6__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_2__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_nequi_features_security_auth_presentation__WEBPACK_IMPORTED_MODULE_5__["PinChallengeModalService"])); };
    AccountService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: AccountService, factory: AccountService.ɵfac });
    return AccountService;
}());



/***/ }),

/***/ "9P8x":
/*!***********************************************************************************************************!*\
  !*** ./libs/features/send/src/presentation/other-bank/pages/home/mappers/send-money-other-bank.mapper.ts ***!
  \***********************************************************************************************************/
/*! exports provided: SendMoneyOtherBankMapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendMoneyOtherBankMapper", function() { return SendMoneyOtherBankMapper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");


var SendMoneyOtherBankMapper = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SendMoneyOtherBankMapper, _super);
    function SendMoneyOtherBankMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SendMoneyOtherBankMapper.prototype.from = function (formValue) {
        var _a;
        return {
            favorite: formValue.isFavorite,
            bankAccount: {
                bank: formValue.bank,
                number: formValue.accountNumber,
                type: formValue.accountType,
                holder: {
                    name: formValue.name,
                    lastName: null,
                    documentNumber: formValue.documentNumber,
                    documentType: (_a = formValue.documentType) === null || _a === void 0 ? void 0 : _a.value,
                },
            },
        };
    };
    return SendMoneyOtherBankMapper;
}(_nequi_features_commons__WEBPACK_IMPORTED_MODULE_1__["BaseMapper"]));



/***/ }),

/***/ "AxC3":
/*!*************************************************************************************************!*\
  !*** ./libs/features/paypal/src/presentation/pages/home/constants/balance-progress-bar-type.ts ***!
  \*************************************************************************************************/
/*! exports provided: BalanceProgressBarType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalanceProgressBarType", function() { return BalanceProgressBarType; });
var BalanceProgressBarType;
(function (BalanceProgressBarType) {
    BalanceProgressBarType["DETERMINATE"] = "determinate";
    BalanceProgressBarType["INDETERMINATE"] = "indeterminate";
})(BalanceProgressBarType || (BalanceProgressBarType = {}));


/***/ }),

/***/ "BBqN":
/*!*********************************************************************************************************************************!*\
  !*** ./libs/features/send/src/presentation/other-bank/pages/send-other-bank-without-id/mappers/send-money-other-bank.mapper.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: SendMoneyOtherBankMapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendMoneyOtherBankMapper", function() { return SendMoneyOtherBankMapper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");


var SendMoneyOtherBankMapper = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SendMoneyOtherBankMapper, _super);
    function SendMoneyOtherBankMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SendMoneyOtherBankMapper.prototype.from = function (formValue) {
        return {
            favorite: formValue.isFavorite,
            bankAccount: {
                bank: formValue.bank,
                number: formValue.accountNumber,
                type: formValue.accountType,
                holder: {
                    name: formValue.name,
                    lastName: null,
                },
            },
            message: formValue.message,
            applicationDate: formValue.applicationDate,
        };
    };
    return SendMoneyOtherBankMapper;
}(_nequi_features_commons__WEBPACK_IMPORTED_MODULE_1__["BaseMapper"]));



/***/ }),

/***/ "C5gY":
/*!****************************************************************************************************!*\
  !*** ./libs/features/send/src/presentation/nequi/pages/transaction-detail/detail-share.options.ts ***!
  \****************************************************************************************************/
/*! exports provided: DetailShareOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailShareOptions", function() { return DetailShareOptions; });
var DetailShareOptions;
(function (DetailShareOptions) {
    DetailShareOptions["SHOW_RECEIPT"] = "receipt";
    DetailShareOptions["SEND_VIA_EMAIL"] = "email";
})(DetailShareOptions || (DetailShareOptions = {}));


/***/ }),

/***/ "DOL8":
/*!******************************************************************************************************!*\
  !*** ./libs/features/send/src/presentation/other-bank/pages/favorite/favorite-account.view-model.ts ***!
  \******************************************************************************************************/
/*! exports provided: FavoriteAccountViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteAccountViewModel", function() { return FavoriteAccountViewModel; });
var FavoriteAccountViewModel = /** @class */ (function () {
    function FavoriteAccountViewModel() {
        this.favoritesFiltered = [];
        this.favorites = [];
        this.isEmptyCase = false;
    }
    return FavoriteAccountViewModel;
}());



/***/ }),

/***/ "EI13":
/*!************************************************************************************!*\
  !*** ./libs/features/send/src/presentation/other-bank/pages/detail/detail.page.ts ***!
  \************************************************************************************/
/*! exports provided: OtherBankDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherBankDetailPage", function() { return OtherBankDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _send_money_other_bank_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../send-money-other-bank.config */ "M5Iz");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ui_src_lib_components_view_detail_view_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../ui/src/lib/components/view-detail/view-detail.component */ "yT3N");
/* harmony import */ var _money_management_src_presentation_components_origin_money_card_origin_money_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../money-management/src/presentation/components/origin-money-card/origin-money-card.component */ "VUO8");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");

















var FIELD_LABELS = 'cashout.bank.detail.fields';
var OtherBankDetailPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(OtherBankDetailPage, _super);
    function OtherBankDetailPage(injector, router, translateProvider, currencyPipe) {
        var _this = _super.call(this, injector) || this;
        _this.router = router;
        _this.translateProvider = translateProvider;
        _this.currencyPipe = currencyPipe;
        _this.messages = Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_7__["toCamelCaseProperties"])(_this.translateProvider.get(FIELD_LABELS));
        return _this;
    }
    Object.defineProperty(OtherBankDetailPage.prototype, "status", {
        get: function () {
            return _nequi_ui__WEBPACK_IMPORTED_MODULE_6__["ViewDetailStatus"].RED;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OtherBankDetailPage.prototype, "icon", {
        get: function () {
            return _nequi_ui__WEBPACK_IMPORTED_MODULE_6__["ViewDetailIconType"].ARROW_DOWN;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OtherBankDetailPage.prototype, "details", {
        get: function () {
            if (!this.transaction || !this.messages) {
                return;
            }
            var holderName = [
                this.transaction.data.bankAccount.holder.name,
                this.transaction.data.bankAccount.holder.lastName,
            ]
                .filter(function (name) { return !!name; })
                .join(' ');
            var items = [
                { label: this.messages.for, description: holderName },
                {
                    label: this.messages.documentNumber,
                    description: this.transaction.data.bankAccount.holder.documentNumber,
                },
                { label: this.messages.bank, description: this.transaction.data.bankAccount.bank.name },
                { label: this.messages.accountNumber, description: this.transaction.data.bankAccount.number },
                {
                    label: this.messages.amount,
                    description: this.currencyPipe.transform(this.transaction.amount),
                },
            ];
            if (this.transaction.data.message) {
                items.push({
                    label: this.messages.message,
                    description: this.transaction.data.message,
                });
            }
            return items;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OtherBankDetailPage.prototype, "pocket", {
        get: function () {
            var _a;
            return (_a = this.transaction) === null || _a === void 0 ? void 0 : _a.pocket;
        },
        enumerable: false,
        configurable: true
    });
    OtherBankDetailPage.prototype.ngOnInit = function () {
        this.transaction = this.router.getCurrentNavigation().extras
            .state;
    };
    OtherBankDetailPage.prototype.goBack = function () {
        this.accept();
    };
    OtherBankDetailPage.prototype.accept = function () {
        this.navigatorProvider.navigateBack(_send_money_other_bank_config__WEBPACK_IMPORTED_MODULE_8__["SendMoneyOtherBankConfig"].routes.admin);
    };
    OtherBankDetailPage.ɵfac = function OtherBankDetailPage_Factory(t) { return new (t || OtherBankDetailPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_4__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"])); };
    OtherBankDetailPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: OtherBankDetailPage, selectors: [["app-send-other-bank-detail"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 25, vars: 20, consts: [[1, "ion-page", "send-bank-detail"], [1, "nequi-header"], ["slot", "start"], ["id", "detail_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], ["fullscreen", "true", 1, "ion-padding-horizontal", "ion-content--movements", "content"], [1, "nequi-title"], [3, "status", "icon", "title", "details", "color"], [1, "origin-money", "ion-margin-vertical"], [1, "origin-money__span"], [3, "pocket"], ["color", "gray", 1, "margin-top-8", "info"], [1, "nequi-footer", "nequi-footer--padding-24"], [1, "nequi-footer__toolbar"], ["id", "detail_next_button", "shape", "round", "color", "guayaba", "expand", "block", 1, "margin-bottom-8", 3, "click"]], template: function OtherBankDetailPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-header", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-buttons", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OtherBankDetailPage_Template_ion_button_click_4_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "ion-icon", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-content", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-text", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "app-view-detail", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "app-origin-money-card", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "ion-text", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "ion-footer", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "ion-toolbar", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "ion-button", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OtherBankDetailPage_Template_ion_button_click_22_listener() { return ctx.accept(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](24, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 10, "cashout.bank.detail.title"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("status", ctx.status)("icon", ctx.icon)("title", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 12, "cashout.bank.detail.subtitle"))("details", ctx.details)("color", "toast");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 14, "cashout.bank.detail.fields.origin-money"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pocket", ctx.pocket);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 16, "cashout.bank.detail.info"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](24, 18, "cashout.bank.detail.button"), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonText"], _ui_src_lib_components_view_detail_view_detail_component__WEBPACK_IMPORTED_MODULE_10__["ViewDetailComponent"], _money_management_src_presentation_components_origin_money_card_origin_money_card_component__WEBPACK_IMPORTED_MODULE_11__["OriginMoneyCardComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonFooter"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"]], styles: [".send-bank-detail[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--gray-60);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7QUFBSiIsImZpbGUiOiJkZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbmQtYmFuay1kZXRhaWwge1xuICAuaW5mbyB7XG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICBjb2xvcjogdmFyKC0tZ3JheS02MCk7XG4gIH1cbn1cbiJdfQ== */"] });
    return OtherBankDetailPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__["FeatureBasePage"]));



/***/ }),

/***/ "EV9H":
/*!*******************************************************************************!*\
  !*** ./libs/features/paypal/src/presentation/pages/registry/registry.page.ts ***!
  \*******************************************************************************/
/*! exports provided: RegistryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistryPage", function() { return RegistryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_features_paypal_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/features/paypal/core */ "EkB8");
/* harmony import */ var _nequi_features_profile_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/features/profile/core */ "w8sc");
/* harmony import */ var _nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nequi/features/profile/presentation */ "cLcF");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_date__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nequi/utils/date */ "tGfC");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _nequi_utils_string__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @nequi/utils/string */ "p6rB");
/* harmony import */ var _registry_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./registry.config */ "tgj0");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _profile_src_presentation_organisms_module_list_module_list_organism__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../profile/src/presentation/organisms/module-list/module-list.organism */ "RZDl");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");


























var _c0 = ["nequiPayPalModuleList"];
var RegistryPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(RegistryPage, _super);
    function RegistryPage(injector, translateProvider, inAppBrowser, router, cardModalService, alertService, userInfoProvider, moduleInfoInteractor, loggerInteractor, toastService, analyticsInteractor, moduleConfigProvider) {
        var _this = _super.call(this, injector) || this;
        _this.translateProvider = translateProvider;
        _this.inAppBrowser = inAppBrowser;
        _this.router = router;
        _this.cardModalService = cardModalService;
        _this.alertService = alertService;
        _this.userInfoProvider = userInfoProvider;
        _this.moduleInfoInteractor = moduleInfoInteractor;
        _this.loggerInteractor = loggerInteractor;
        _this.toastService = toastService;
        _this.analyticsInteractor = analyticsInteractor;
        _this.moduleConfigProvider = moduleConfigProvider;
        _this.config = _registry_config__WEBPACK_IMPORTED_MODULE_14__["RegistryConfig"];
        _this.translateProvider.loadModule(_this.moduleConfigProvider.i18n.moduleKey);
        _this.setAnalyticsIntentionOfBonding();
        return _this;
    }
    RegistryPage.prototype.ngOnInit = function () {
        this.params = this.router.getCurrentNavigation().extras.state;
    };
    RegistryPage.prototype.onCompletedModuleData = function (module) {
        if (module.type === _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["ModuleCode"].LOCATION) {
            this.locationCompletedHandler(module.data);
        }
        if (module.type === _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["ModuleCode"].OCCUPATION) {
            this.occupationCompletedHandler(module.data);
        }
        if (module.type === _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["ModuleCode"].REGISTRY_PAYPAL) {
            this.moduleListOrganism.finish();
            this.openWebView();
        }
    };
    RegistryPage.prototype.openHelpOption = function () {
        this.openExternalUrl(this.config.goTo.help);
    };
    RegistryPage.prototype.openWebView = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var urlStructure, phoneNumber, url;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        urlStructure = this.translateProvider.get(this.config.i18n.urlStructure);
                        if (!this.params) {
                            this.goBack();
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.userInfoProvider.getPhoneNumber()];
                    case 1:
                        phoneNumber = _a.sent();
                        url = Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_13__["createFormat"])(urlStructure, [
                            this.params.url,
                            this.params.id,
                            this.params.returnUrl,
                            phoneNumber,
                        ]);
                        this.browser = this.inAppBrowser.create(url, '_blank', 'clearcache=yes,clearsessioncache=yes,location=no,zoom=no');
                        this.browser.on('loadstart').subscribe(function (event) { return _this.loadStartCallBack(event); });
                        return [2 /*return*/];
                }
            });
        });
    };
    RegistryPage.prototype.setAnalyticsIntentionOfBonding = function () {
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["AnalyticsType"].FACEBOOK,
            params: {
                eventName: this.config.analytics.events.intentionOfBonding.name,
            },
        });
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["AnalyticsType"].FIREBASE,
            params: { eventName: this.config.analytics.events.intentionOfBonding.name },
        });
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["AnalyticsType"].CLEVERTAP,
            params: {
                eventName: this.config.analytics.events.intentionOfBonding.name,
                eventProps: Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_12__["stringsArrayToObjectWithValues"])(this.config.analytics.events.intentionOfBonding.params.cleverTap, [Object(_nequi_utils_date__WEBPACK_IMPORTED_MODULE_11__["getFormattedDateTimes"])()]),
            },
        });
    };
    RegistryPage.prototype.setAnalyticsSuccesfulBonding = function () {
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["AnalyticsType"].FACEBOOK,
            params: {
                eventName: this.config.analytics.events.successfullBondging.name,
            },
        });
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["AnalyticsType"].FIREBASE,
            params: { eventName: this.config.analytics.events.successfullBondging.name },
        });
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["AnalyticsType"].CLEVERTAP,
            params: {
                eventName: this.config.analytics.events.successfullBondging.name,
                eventProps: Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_12__["stringsArrayToObjectWithValues"])(this.config.analytics.events.successfullBondging.params.cleverTap, [Object(_nequi_utils_date__WEBPACK_IMPORTED_MODULE_11__["getFormattedDateTimes"])()]),
            },
        });
    };
    RegistryPage.prototype.setAnalyticsErrorBonding = function (errorPaypal) {
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["AnalyticsType"].FACEBOOK,
            params: {
                eventName: this.config.analytics.events.errorBonding.name,
            },
        });
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["AnalyticsType"].FIREBASE,
            params: { eventName: this.config.analytics.events.errorBonding.name },
        });
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["AnalyticsType"].CLEVERTAP,
            params: {
                eventName: this.config.analytics.events.errorBonding.name,
                eventProps: Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_12__["stringsArrayToObjectWithValues"])(this.config.analytics.events.errorBonding.params.cleverTap, [errorPaypal]),
            },
        });
    };
    RegistryPage.prototype.locationCompletedHandler = function (location) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.moduleInfoInteractor.saveModuleInfo({
                                code: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["ModuleCode"].LOCATION,
                                data: { key: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["ModuleName"].LOCATION, value: location },
                            })];
                    case 1:
                        _a.sent();
                        this.moduleListOrganism.finish();
                        return [3 /*break*/, 4];
                    case 2:
                        error_1 = _a.sent();
                        this.loggerInteractor.error(error_1);
                        return [4 /*yield*/, this.toastService.showError(error_1.message)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    RegistryPage.prototype.occupationCompletedHandler = function (occupation) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var error_2;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.moduleInfoInteractor.saveModuleInfo({
                                code: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["ModuleCode"].OCCUPATION,
                                data: { key: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["ModuleName"].OCCUPATION, value: occupation },
                            })];
                    case 1:
                        _a.sent();
                        this.moduleListOrganism.finish();
                        return [3 /*break*/, 4];
                    case 2:
                        error_2 = _a.sent();
                        this.loggerInteractor.error(error_2);
                        return [4 /*yield*/, this.toastService.showError(error_2.message)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    RegistryPage.prototype.loadStartCallBack = function (event) {
        var url = new URL(event.url);
        if (url.searchParams.get(this.config.searchParams.description) ||
            url.searchParams.get(this.config.searchParams.close)) {
            this.browser.close();
        }
        if (url.href && url.href.indexOf(this.config.goTo.backToDashboard) !== -1) {
            this.browser.close();
            this.openDefaultError();
        }
        if (url.href && url.href.indexOf(this.config.goTo.backToAppAction) !== -1) {
            this.browser.close();
            var payPalResponseCode = url.searchParams.get(this.config.searchParams.responseCode);
            this.manageWebViewUrl(payPalResponseCode);
            if (payPalResponseCode.toLowerCase() === this.config.success) {
                return;
            }
            this.setAnalyticsErrorBonding(payPalResponseCode);
        }
    };
    RegistryPage.prototype.manageWebViewUrl = function (responseCode) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if ((responseCode === null || responseCode === void 0 ? void 0 : responseCode.toLowerCase()) === this.config.success) {
                            this.showSuccessPaypalRegistration();
                            this.setAnalyticsSuccesfulBonding();
                            return [2 /*return*/];
                        }
                        if (!(responseCode === _nequi_features_paypal_core__WEBPACK_IMPORTED_MODULE_7__["ErrorCode"].EMAIL_NO_MATCH_WITH_NEQUI)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.openPopupEmailNotMatch()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                    case 2:
                        if (!(responseCode === _nequi_features_paypal_core__WEBPACK_IMPORTED_MODULE_7__["ErrorCode"].INVALID_COUNTRY)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.openPopupInvalidCountry()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                    case 4:
                        if (!(responseCode === _nequi_features_paypal_core__WEBPACK_IMPORTED_MODULE_7__["ErrorCode"].EMAIL_ALREADY_LINKED)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.openPopUpEmailLinked()];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                    case 6:
                        this.openDefaultError();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegistryPage.prototype.showSuccessPaypalRegistration = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        messages = this.translateProvider.get(this.config.i18n.successEmailRegistration);
                        return [4 /*yield*/, this.cardModalService.show({
                                title: messages.title,
                                imgPath: messages.image,
                                content: messages.content,
                                buttons: [
                                    {
                                        text: messages.buttons.accept,
                                        handler: function () {
                                            _this.navigatorProvider.navigateRoot(_this.config.goTo.getMoneyUrl, {
                                                state: { isRegisterFinished: true },
                                            });
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
    RegistryPage.prototype.openPopupEmailNotMatch = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertService.showByI18n({
                            i18nKey: this.config.i18n.emailNotMatch,
                            handlers: {
                                accept: function () { return _this.goBack(); },
                                cancel: function () { return _this.openExternalUrl(_this.config.goTo.emailNotMatchWithNequiHelpUrl); },
                            },
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegistryPage.prototype.openPopupInvalidCountry = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertService.showByI18n({
                            i18nKey: this.config.i18n.invalidCountry,
                            handlers: {
                                accept: function () { return _this.openWebView(); },
                                cancel: function () { return _this.openExternalUrl(_this.config.goTo.createAccountUrl); },
                            },
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegistryPage.prototype.openPopUpEmailLinked = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertService.showByI18n({
                            i18nKey: this.config.i18n.mailAlreadyLinked,
                            handlers: {
                                accept: function () { return _this.openWebView(); },
                            },
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegistryPage.prototype.openDefaultError = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertService.showByI18n({
                            i18nKey: this.config.i18n.defaultError,
                            handlers: {
                                accept: function () { return _this.goBack(); },
                            },
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegistryPage.prototype.openExternalUrl = function (url) {
        Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_12__["openUrl"])(url);
    };
    RegistryPage.ɵfac = function RegistryPage_Factory(t) { return new (t || RegistryPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_6__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_10__["CardModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_6__["UserInfoProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_profile_core__WEBPACK_IMPORTED_MODULE_8__["ModuleInfoInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["LoggerInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_10__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["AnalyticsInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_6__["ModuleConfigProvider"])); };
    RegistryPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegistryPage, selectors: [["nequi-paypal-registry"]], viewQuery: function RegistryPage_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.moduleListOrganism = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 14, vars: 8, consts: [[1, "nequi-header", "nequi-header--white"], ["slot", "start"], ["id", "paypal-registry_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], ["slot", "end"], ["id", "paypal-registry_help_button", 3, "click"], ["slot", "icon-only", "name", "help-outline"], [1, "ion-content--enroll", "ion-padding-horizontal"], [1, "nequi-title"], ["organismId", "paypal-registry", 3, "items", "moduleList", "navOrder", "addressFormat", "currentUrl", "completed"], ["nequiPayPalModuleList", ""]], template: function RegistryPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegistryPage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-buttons", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegistryPage_Template_ion_button_click_6_listener() { return ctx.openHelpOption(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "ion-icon", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-content", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-text", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "nequi-profile-module-list", 9, 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("completed", function RegistryPage_Template_nequi_profile_module_list_completed_12_listener($event) { return ctx.onCompletedModuleData($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 6, "paypal.registry.title"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.config.navButtons)("moduleList", ctx.config.moduleList)("navOrder", ctx.config.navOrder)("addressFormat", ctx.config.i18n.addressText)("currentUrl", ctx.config.goTo.currentUrl);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonText"], _profile_src_presentation_organisms_module_list_module_list_organism__WEBPACK_IMPORTED_MODULE_16__["ModuleListOrganism"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3RyeS5wYWdlLnNjc3MifQ== */"] });
    return RegistryPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__["FeatureBasePage"]));



/***/ }),

/***/ "EaRh":
/*!*********************************************************************************!*\
  !*** ./libs/features/paypal/src/presentation/pages/form-info/form-info.page.ts ***!
  \*********************************************************************************/
/*! exports provided: FormInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormInfoPage", function() { return FormInfoPage; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _form_info_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-info-config */ "SMFJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");








var FormInfoPage = /** @class */ (function () {
    function FormInfoPage(navigatorProvider, translateProvider, moduleConfigProvider, router) {
        this.navigatorProvider = navigatorProvider;
        this.translateProvider = translateProvider;
        this.moduleConfigProvider = moduleConfigProvider;
        this.router = router;
        this.config = _form_info_config__WEBPACK_IMPORTED_MODULE_2__["FormInfoConfig"];
        this.translateProvider.loadModule(this.moduleConfigProvider.i18n.moduleKey);
    }
    FormInfoPage.prototype.ngOnInit = function () {
        var _a;
        this.params = (_a = this.router.getCurrentNavigation().extras.state) === null || _a === void 0 ? void 0 : _a.params;
    };
    FormInfoPage.prototype.goBack = function () {
        this.navigatorProvider.navigateBack(this.config.routes.paypalHome);
    };
    FormInfoPage.prototype.goPaypalForm = function () {
        this.navigatorProvider.navigateForward(this.config.routes.paypalForm, {
            state: {
                params: this.params,
            },
        });
    };
    FormInfoPage.ɵfac = function FormInfoPage_Factory(t) { return new (t || FormInfoPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_1__["NavigatorProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_1__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_1__["ModuleConfigProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"])); };
    FormInfoPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: FormInfoPage, selectors: [["nequi-form-info"]], decls: 27, vars: 18, consts: [[1, "nequi-header"], ["slot", "start"], ["id", "authorization-permissions_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], ["fullscreen", "true", 1, "ion-content--enroll", "ion-padding-horizontal", "content", "data-content"], [1, "nequi-title", "content__title"], [1, "paypal__pay"], [1, "paypal__line"], [1, "paypal__pay", 3, "innerHtml"], [1, "nequi-footer"], ["id", "authorization_go-to-app_button", "shape", "round", "color", "guayaba", "expand", "block", "type", "submit", 1, "nequi-footer__button", 3, "click"]], template: function FormInfoPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FormInfoPage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ion-content", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-text", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "hr", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "p", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "ion-footer", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "ion-button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FormInfoPage_Template_ion_button_click_23_listener() { return ctx.goPaypalForm(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "ion-text");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](26, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 6, ctx.config.i18n.costsInfoTitle), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 8, ctx.config.i18n.ratesTitle));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 10, ctx.config.i18n.ratesContent));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](18, 12, ctx.config.i18n.gmfTitle));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](20, 14, ctx.config.i18n.gmfContent), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](26, 16, ctx.config.i18n.continue));
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonFooter"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLWluZm8ucGFnZS5zY3NzIn0= */"] });
    return FormInfoPage;
}());



/***/ }),

/***/ "GdCK":
/*!**************************************************************************!*\
  !*** ./apps/colombia/src/app/presentation/admin/admin-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_account_ceiling_presentation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/features/account-ceiling/presentation */ "Qe2H");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _features_cash_in__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../features/cash-in */ "07Qx");
/* harmony import */ var _features_cash_out_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../features/cash-out/index */ "bOn3");
/* harmony import */ var _features_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../features/notifications */ "UuxJ");
/* harmony import */ var _features_payments__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../features/payments */ "IY4Y");
/* harmony import */ var _features_send__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../features/send */ "ySrV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");










var routes = [
    {
        path: '',
        loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @nequi/apps/base/mobile */ "ODzJ")).then(function (m) { return m.AppsBaseMobileModule; }); },
    },
    {
        path: 'profile',
        loadChildren: function () {
            return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @nequi/features/profile/presentation */ "cLcF")).then(function (m) { return m.FeaturesProfileModule; });
        },
    },
    {
        path: 'office-withdrawal',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | nequi-features-office-withdrawal-presentation */ "nequi-features-office-withdrawal-presentation").then(__webpack_require__.bind(null, /*! @nequi/features/office-withdrawal/presentation */ "MGus")).then(function (m) { return m.FeaturesOfficeWithdrawalModule; });
        },
    },
    {
        path: 'money-management',
        loadChildren: function () {
            return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @nequi/features/money-management/presentation */ "JFCQ")).then(function (m) { return m.FeaturesMoneyManagementModule; });
        },
    },
    {
        path: 'send',
        loadChildren: function () {
            return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @nequi/features/send/presentation */ "tiu6")).then(function (m) { return new _nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__["ModuleWithProvidersFactory"](m.FeaturesSendModule.forChild(_features_send__WEBPACK_IMPORTED_MODULE_7__["SEND_MDOULE_CONFIG"])); });
        },
    },
    {
        path: 'send/bank-recharge',
        loadChildren: function () {
            return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @nequi/features/send/presentation */ "tiu6")).then(function (m) { return m.FeaturesSendModule; });
        },
    },
    {
        path: 'cash-in',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | nequi-features-cash-in-presentation */ "nequi-features-cash-in-presentation").then(__webpack_require__.bind(null, /*! @nequi/features/cash-in/presentation */ "nV+j")).then(function (m) {
                return new _nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__["ModuleWithProvidersFactory"](m.FeaturesCashInModule.forChild(_features_cash_in__WEBPACK_IMPORTED_MODULE_3__["CASH_IN_MODULE_CONFIG"]));
            });
        },
    },
    {
        path: 'payments',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | nequi-features-payments-presentation */ "nequi-features-payments-presentation").then(__webpack_require__.bind(null, /*! @nequi/features/payments/presentation */ "/7cD")).then(function (m) {
                return new _nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__["ModuleWithProvidersFactory"](m.FeaturePaymentsModule.forChild(_features_payments__WEBPACK_IMPORTED_MODULE_6__["PAYMENTS_MODULE_CONFIG"]));
            });
        },
    },
    {
        path: 'credits',
        loadChildren: function () {
            return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @nequi/features/credits/presentation */ "jGqD")).then(function (m) { return m.FeaturesCreditsModule; });
        },
    },
    {
        path: 'card',
        loadChildren: function () {
            return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @nequi/features/card/presentation */ "bEwN")).then(function (m) { return m.FeaturesCardModule; });
        },
    },
    {
        path: 'request-money',
        loadChildren: function () {
            return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @nequi/features/request-money/presentation */ "qu8p")).then(function (m) { return m.RequestMoneyModule; });
        },
    },
    {
        path: 'cash-out-money',
        loadChildren: function () {
            return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @nequi/features/cash-out-money/presentation */ "42QW")).then(function (m) { return new _nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__["ModuleWithProvidersFactory"](m.CashOutMoneyModule.forChild(_features_cash_out_index__WEBPACK_IMPORTED_MODULE_4__["CASH_OUT_MODULE_CONFIG"])); });
        },
    },
    {
        path: 'dynamic-form',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | nequi-features-dynamic-form-presentation */ "default~nequi-features-dynamic-form-presentation~presentation-tab-links-tab-links-module").then(__webpack_require__.bind(null, /*! @nequi/features/dynamic-form/presentation */ "yM19")).then(function (m) { return m.DynamicFormModule; });
        },
    },
    {
        path: 'recharge',
        loadChildren: function () {
            return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @nequi/features/recharge/presentation */ "lkNV")).then(function (m) { return m.FeaturesRechargeModule; });
        },
    },
    {
        path: 'one-doc-three',
        loadChildren: function () {
            return Promise.all(/*! import() | nequi-features-one-doc-three-presentation */[__webpack_require__.e("common"), __webpack_require__.e("nequi-features-one-doc-three-presentation")]).then(__webpack_require__.bind(null, /*! @nequi/features/one-doc-three/presentation */ "8sNI")).then(function (m) { return m.OneDocThreeModule; });
        },
    },
    {
        path: 'paypal',
        loadChildren: function () {
            return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @nequi/features/paypal/presentation */ "trB8")).then(function (m) { return m.FeaturesPaypalModule; });
        },
    },
    {
        path: 'nfc-civica',
        loadChildren: function () {
            return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @nequi/features/nfc-civica/presentation */ "+oPQ")).then(function (m) { return m.FeaturesNfcCivicaModule; });
        },
    },
    {
        path: 'soat',
        loadChildren: function () {
            return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @nequi/features/soat/presentation */ "xoJR")).then(function (m) { return m.FeaturesSoatModule; });
        },
    },
    {
        path: 'codensa',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | nequi-features-codensa-presentation */ "nequi-features-codensa-presentation").then(__webpack_require__.bind(null, /*! @nequi/features/codensa/presentation */ "cqpJ")).then(function (m) { return m.FeaturesCodensaModule; });
        },
    },
    {
        path: 'netflix',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | nequi-features-netflix-presentation */ "nequi-features-netflix-presentation").then(__webpack_require__.bind(null, /*! @nequi/features/netflix/presentation */ "shq2")).then(function (m) { return m.FeaturesNetflixModule; });
        },
    },
    {
        path: 'open-banking',
        loadChildren: function () {
            return Promise.all(/*! import() | nequi-features-open-banking-presentation */[__webpack_require__.e("common"), __webpack_require__.e("nequi-features-open-banking-presentation")]).then(__webpack_require__.bind(null, /*! @nequi/features/open-banking/presentation */ "Ia79")).then(function (m) { return m.FeaturesOpenBankingModule; });
        },
    },
    {
        path: 'full-registry',
        loadChildren: function () {
            return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @nequi/features/full-registry/presentation */ "UGkd")).then(function (m) { return m.FeaturesFullRegistryModule; });
        },
    },
    {
        path: 'redeem-code',
        loadChildren: function () {
            return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @nequi/features/redeem-code/presentation */ "zuRI")).then(function (m) { return m.FeaturesRedeemCodeModule; });
        },
    },
    {
        path: 'biometry/selfie',
        loadChildren: function () {
            return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @nequi/features/security/biometry/presentation */ "8Kip")).then(function (m) { return m.SelfieModule; });
        },
    },
    {
        path: 'backpack/ceiling',
        component: _nequi_features_account_ceiling_presentation__WEBPACK_IMPORTED_MODULE_1__["CeilingWithMonthlyLimitsPage"],
    },
    {
        path: 'remittances',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | nequi-features-remittances-presentation */ "nequi-features-remittances-presentation").then(__webpack_require__.bind(null, /*! @nequi/features/remittances/presentation */ "UJPx")).then(function (m) { return m.FeaturesRemittancesModule; });
        },
    },
    {
        path: 'notifications',
        loadChildren: function () {
            return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @nequi/features/notifications/presentation */ "Wf/D")).then(function (m) {
                return new _nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__["ModuleWithProvidersFactory"](m.FeaturesNotificationsModule.forChild(_features_notifications__WEBPACK_IMPORTED_MODULE_5__["NOTIFICATIONS_CONFIG"]));
            });
        },
    },
    {
        path: 'experiment-alternate-flows',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | nequi-features-alternate-flows-presentation */ "nequi-features-alternate-flows-presentation").then(__webpack_require__.bind(null, /*! @nequi/features/alternate-flows/presentation */ "hG/X")).then(function (m) { return m.FeaturesAlternateFlowsModule; });
        },
    },
    {
        path: '**',
        redirectTo: '/admin',
        pathMatch: 'full',
    },
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule.ɵfac = function AdminRoutingModule_Factory(t) { return new (t || AdminRoutingModule)(); };
    AdminRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AdminRoutingModule });
    AdminRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return AdminRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AdminRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "H7vw":
/*!*********************************************************************************!*\
  !*** ./libs/features/paypal/src/presentation/pages/registry/registry-module.ts ***!
  \*********************************************************************************/
/*! exports provided: RegistryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistryModule", function() { return RegistryModule; });
var RegistryModule;
(function (RegistryModule) {
    RegistryModule["YOUR_DOCUMENT"] = "yourDocument";
    RegistryModule["WHERE_YOU_LIVE"] = "whereYouLive";
    RegistryModule["WHAT_DO_YOU_DO"] = "whatDoYouDo";
    RegistryModule["REGISTRY_PAYPAL"] = "registryPaypal";
})(RegistryModule || (RegistryModule = {}));


/***/ }),

/***/ "I0U/":
/*!*************************************************************************!*\
  !*** ./libs/features/paypal/src/presentation/features-paypal.module.ts ***!
  \*************************************************************************/
/*! exports provided: FeaturesPaypalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesPaypalModule", function() { return FeaturesPaypalModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_paypal_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/paypal/core */ "EkB8");
/* harmony import */ var _nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/profile/presentation */ "cLcF");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _config_paypal_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config/paypal.config */ "4Hmc");
/* harmony import */ var _features_paypal_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./features-paypal-routing.module */ "6X76");
/* harmony import */ var _middlewares_pay_pal_middleware__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./middlewares/pay-pal.middleware */ "oDJG");
/* harmony import */ var _pages_form_info_form_info_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/form-info/form-info.page */ "EaRh");
/* harmony import */ var _pages_form_form_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/form/form.page */ "IUtL");
/* harmony import */ var _pages_home_home_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/home/home.page */ "rXf7");
/* harmony import */ var _pages_registry_info_registry_info_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/registry-info/registry-info.page */ "S/Y9");
/* harmony import */ var _pages_registry_registry_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/registry/registry.page */ "EV9H");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/account.service */ "9A31");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ "fXoL");


















var FeaturesPaypalModule = /** @class */ (function () {
    function FeaturesPaypalModule() {
    }
    FeaturesPaypalModule.ɵfac = function FeaturesPaypalModule_Factory(t) { return new (t || FeaturesPaypalModule)(); };
    FeaturesPaypalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: FeaturesPaypalModule });
    FeaturesPaypalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ providers: [
            {
                provide: _nequi_features_commons__WEBPACK_IMPORTED_MODULE_3__["ModuleConfigProvider"],
                useValue: _config_paypal_config__WEBPACK_IMPORTED_MODULE_8__["PaypalConfig"],
            },
            {
                provide: _nequi_features_paypal_core__WEBPACK_IMPORTED_MODULE_4__["PaypalInteractor"],
                deps: [_nequi_features_paypal_core__WEBPACK_IMPORTED_MODULE_4__["PaypalRepository"]],
                useClass: _nequi_features_paypal_core__WEBPACK_IMPORTED_MODULE_4__["PaypalInteractor"],
            },
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"],
            _nequi_ui__WEBPACK_IMPORTED_MODULE_6__["InputSelectBottomSheetService"],
            _services_account_service__WEBPACK_IMPORTED_MODULE_16__["AccountService"],
            _middlewares_pay_pal_middleware__WEBPACK_IMPORTED_MODULE_10__["PaypalMiddleware"],
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _features_paypal_routing_module__WEBPACK_IMPORTED_MODULE_9__["FeaturesPaypalRoutingModule"],
                _nequi_ui__WEBPACK_IMPORTED_MODULE_6__["NequiUiModule"],
                _nequi_ui__WEBPACK_IMPORTED_MODULE_6__["NequiComponentsModule"],
                _nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_5__["FeaturesProfileModule"],
            ]] });
    return FeaturesPaypalModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](FeaturesPaypalModule, { declarations: [_pages_form_info_form_info_page__WEBPACK_IMPORTED_MODULE_11__["FormInfoPage"], _pages_registry_info_registry_info_page__WEBPACK_IMPORTED_MODULE_14__["RegistryInfoPage"], _pages_home_home_page__WEBPACK_IMPORTED_MODULE_13__["HomePage"], _pages_registry_registry_page__WEBPACK_IMPORTED_MODULE_15__["RegistryPage"], _pages_form_form_page__WEBPACK_IMPORTED_MODULE_12__["FormPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
        _features_paypal_routing_module__WEBPACK_IMPORTED_MODULE_9__["FeaturesPaypalRoutingModule"],
        _nequi_ui__WEBPACK_IMPORTED_MODULE_6__["NequiUiModule"],
        _nequi_ui__WEBPACK_IMPORTED_MODULE_6__["NequiComponentsModule"],
        _nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_5__["FeaturesProfileModule"]] }); })();


/***/ }),

/***/ "IUtL":
/*!***********************************************************************!*\
  !*** ./libs/features/paypal/src/presentation/pages/form/form.page.ts ***!
  \***********************************************************************/
/*! exports provided: FormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPage", function() { return FormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_paypal_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/features/paypal/core */ "EkB8");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_date__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nequi/utils/date */ "tGfC");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _nequi_utils_number__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nequi/utils/number */ "L2Ra");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _mappers_withdrawal_mapper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../mappers/withdrawal.mapper */ "x5iK");
/* harmony import */ var _services_form_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/form.service */ "/1gg");
/* harmony import */ var _form_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./form.config */ "z8k3");
/* harmony import */ var _form_view_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./form.view-model */ "lua0");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../ui/src/lib/directives/animate-title-on-scroll/animate-title-on-scroll.directive */ "qbWi");
/* harmony import */ var _ui_src_lib_directives_form_content_style_form_content_style_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../../ui/src/lib/directives/form-content-style/form-content-style.directive */ "+XT3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ui_src_lib_directives_control_errors_control_errors_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../../ui/src/lib/directives/control-errors/control-errors.directive */ "XHcO");
/* harmony import */ var _ui_src_lib_controls_nequi_input_currency_nequi_input_currency_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../../../ui/src/lib/controls/nequi-input-currency/nequi-input-currency.component */ "VG0r");
/* harmony import */ var _ui_src_lib_controls_input_select_input_select_control_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../../../ui/src/lib/controls/input-select/input-select-control.component */ "BMu5");
/* harmony import */ var _ui_src_lib_directives_message_manager_message_manager_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../../../ui/src/lib/directives/message-manager/message-manager.directive */ "68HU");
/* harmony import */ var _ui_src_lib_pipes_nequi_currency_nequi_currency_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../../../ui/src/lib/pipes/nequi-currency/nequi-currency.pipe */ "Vb1S");



































var _c0 = function (a0, a1, a2) { return { required: a0, min: a1, max: a2 }; };
var _c1 = function (a0, a1) { return { control: a0, messages: a1 }; };
var _c2 = function (a1) { return { cssClass: "info-item__message", helpMessage: a1 }; };
var FormPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FormPage, _super);
    function FormPage(paypalInteractor, router, formService, currencyPipe, translatePipe, analyticsInteractor, moduleConfigProvider, cardModalService, injector) {
        var _this = _super.call(this, injector) || this;
        _this.paypalInteractor = paypalInteractor;
        _this.router = router;
        _this.formService = formService;
        _this.currencyPipe = currencyPipe;
        _this.translatePipe = translatePipe;
        _this.analyticsInteractor = analyticsInteractor;
        _this.moduleConfigProvider = moduleConfigProvider;
        _this.cardModalService = cardModalService;
        _this.config = _form_config__WEBPACK_IMPORTED_MODULE_15__["FormConfig"];
        _this.viewModel = new _form_view_model__WEBPACK_IMPORTED_MODULE_16__["FormViewModel"]();
        _this.translateProvider.loadModule(_this.moduleConfigProvider.i18n.moduleKey);
        _this.formService.setViewModel(_this.viewModel);
        return _this;
    }
    FormPage.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setInitValues();
                        return [4 /*yield*/, this.getExchangeNumberList()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormPage.prototype.getExchangeNumberList = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 4, , 7]);
                        return [4 /*yield*/, this.loadingService.show()];
                    case 1:
                        _b.sent();
                        _a = this.viewModel;
                        return [4 /*yield*/, this.paypalInteractor.getExchangeNumberList(this.config.exchangeCodes.exchangeFormCode, this.config.exchangeCodes.transactionType.withdrawal)];
                    case 2:
                        _a.economicActivityList = _b.sent();
                        return [4 /*yield*/, this.loadingService.hideWithoutFeedback()];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 7];
                    case 4:
                        error_1 = _b.sent();
                        return [4 /*yield*/, this.loadingService.hideWithoutFeedback()];
                    case 5:
                        _b.sent();
                        return [4 /*yield*/, this.toastService.showError(error_1.message)];
                    case 6:
                        _b.sent();
                        this.goBack();
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    FormPage.prototype.calculateValues = function () {
        if (this.viewModel.amountControl && this.viewModel.formParams.recharge) {
            this.viewModel.amountCOP = this.getAmountCopRounded();
            var feeValue = this.getFeeValueCalculated();
            this.viewModel.commission = this.viewModel.getNegativeCommission(feeValue);
            this.viewModel.totalTransaction = this.getTotalTransaction();
            this.viewModel.moneyRequested = this.viewModel.amountControl.value;
            this.viewModel.rate = this.viewModel.formParams.recharge.rate;
        }
        else {
            this.viewModel.setZeroValues();
        }
    };
    FormPage.prototype.selectIncomes = function (event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (event.exchangeNumber === this.config.exchangeCodes.tourismCode) {
                    modal = this.translateProvider.get(this.config.i18n.declaration);
                    this.cardModalService.show({
                        title: modal.title,
                        content: modal.content,
                        buttons: [
                            {
                                text: modal.buttons.accept,
                                handler: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                        this.checkFormData();
                                        return [2 /*return*/];
                                    });
                                }); },
                            },
                            {
                                color: 'medianoche',
                                text: modal.buttons.cancel,
                                handler: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                        this.viewModel.transactionReason = null;
                                        this.viewModel.economicActivityControl.reset();
                                        return [2 /*return*/];
                                    });
                                }); },
                            },
                        ],
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    FormPage.prototype.checkFormData = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.viewModel.form.valid) return [3 /*break*/, 3];
                        this.transactionId = null;
                        return [4 /*yield*/, this.getPaypalTransactionData()];
                    case 1:
                        if (!_a.sent()) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.makeTransaction()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FormPage.prototype.setOriginMoney = function (transaction) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, transaction];
            });
        });
    };
    FormPage.prototype.onTransactionSuccess = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var successMessage;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                successMessage = this.translateProvider.get(this.config.i18n.successMessage);
                this.setAnalyticsSuccesRecharge();
                this.toastService.showSuccess(successMessage);
                this.navigatorProvider.navigateForward(this.config.routes.backpackHomeUrl);
                return [2 /*return*/];
            });
        });
    };
    FormPage.prototype.onTransactionFailed = function (error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.formService.processError(error);
                return [2 /*return*/];
            });
        });
    };
    FormPage.prototype.getConfirmationInfo = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, title, subtitle, messages;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                _a = this.translateProvider.get(this.config.i18n.bottomSheet.confirm), title = _a.title, subtitle = _a.subtitle, messages = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["title", "subtitle"]);
                this.viewModel.setTransactionReason(this.config.i18n.bottomSheet.transactionReason, this.translatePipe);
                return [2 /*return*/, {
                        title: title,
                        subtitle: subtitle,
                        items: this.viewModel.buildItems(messages, this.currencyPipe),
                        confirmLabel: messages.button,
                    }];
            });
        });
    };
    FormPage.prototype.setInitValues = function () {
        var _a, _b;
        var formParams = (_a = this.router.getCurrentNavigation().extras.state) === null || _a === void 0 ? void 0 : _a.params;
        if (!formParams) {
            this.navigatorProvider.navigateBack(this.config.routes.paypalHome);
            return;
        }
        this.viewModel.formParams = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, formParams), { recharge: {
                fee: formParams.recharge.fee,
                rate: formParams.recharge.rate,
                maximumFeeValue: formParams.recharge.maximumFeeValue,
                tax: formParams.recharge.tax,
                feeType: (_b = formParams.recharge.feeType) !== null && _b !== void 0 ? _b : _nequi_features_paypal_core__WEBPACK_IMPORTED_MODULE_7__["FeeType"].PERCENTAGE,
            } });
        var rate = this.viewModel.formParams.recharge.rate;
        var balance = this.viewModel.formParams.balance.available;
        this.viewModel.setMaxLimitTransfer(this.viewModel.formParams.maxLimitTransfer, this.viewModel.formParams.balance.available);
        this.setAnalyticsInitialIntentionOfRecharge(balance, rate);
        this.viewModel.buildForm();
    };
    FormPage.prototype.getAmountCopRounded = function () {
        return Object(_nequi_utils_number__WEBPACK_IMPORTED_MODULE_11__["roundNumber"])(this.viewModel.amountControl.value * this.viewModel.formParams.recharge.rate, this.config.balance.currency.decimalsToRound);
    };
    FormPage.prototype.getFeeValueCalculated = function () {
        var feeValueCalculated = this.paypalInteractor.calculateFee(this.viewModel.formParams.recharge, this.viewModel.amountCOP);
        return feeValueCalculated + feeValueCalculated * this.viewModel.formParams.recharge.tax;
    };
    FormPage.prototype.getTotalTransaction = function () {
        return Object(_nequi_utils_number__WEBPACK_IMPORTED_MODULE_11__["roundNumber"])(this.viewModel.amountCOP + this.viewModel.commission, this.config.balance.currency.decimalsToRound);
    };
    FormPage.prototype.makeTransaction = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var transaction;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        transaction = new _nequi_features_paypal_core__WEBPACK_IMPORTED_MODULE_7__["WithdrawalTransaction"]()
                            .withAmount(this.viewModel.amountControl.value)
                            .withData(new _mappers_withdrawal_mapper__WEBPACK_IMPORTED_MODULE_13__["WithdrawalMapper"]().from({
                            form: this.viewModel.form.value,
                            transactionId: this.transactionId,
                        }));
                        return [4 /*yield*/, _super.prototype.executeTransaction.call(this, transaction)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormPage.prototype.getPaypalTransactionData = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var recharges, valueCop, valueUsd, error_2;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 6]);
                        return [4 /*yield*/, this.loadingService.show()];
                    case 1:
                        _a.sent();
                        this.transactionId = this.paypalInteractor.getWithdrawalTransactionId();
                        return [4 /*yield*/, this.paypalInteractor.getRecharges({
                                option: _nequi_features_paypal_core__WEBPACK_IMPORTED_MODULE_7__["TransactionType"].WITHDRAWAL,
                                amount: this.viewModel.amountControl.value,
                                transactionId: this.transactionId,
                            })];
                    case 2:
                        recharges = _a.sent();
                        this.viewModel.updateRecharges(recharges);
                        valueCop = this.viewModel.amountCOP;
                        valueUsd = this.viewModel.moneyRequested;
                        this.setAnalyticsFinalIntentionOfRecharge(valueCop, valueUsd);
                        return [4 /*yield*/, this.loadingService.hideWithoutFeedback()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 4:
                        error_2 = _a.sent();
                        return [4 /*yield*/, this.loadingService.hide(false)];
                    case 5:
                        _a.sent();
                        this.formService.processError(error_2);
                        return [2 /*return*/, false];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    FormPage.prototype.setAnalyticsInitialIntentionOfRecharge = function (balance, rate) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.analyticsInteractor.trackEvent({
                    type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["AnalyticsType"].FACEBOOK,
                    params: {
                        eventName: this.config.analytics.events.intentionOfRecharge.name,
                    },
                });
                this.analyticsInteractor.trackEvent({
                    type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["AnalyticsType"].FIREBASE,
                    params: { eventName: this.config.analytics.events.intentionOfRecharge.name },
                });
                this.analyticsInteractor.trackEvent({
                    type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["AnalyticsType"].CLEVERTAP,
                    params: {
                        eventName: this.config.analytics.events.intentionOfRecharge.name,
                        eventProps: Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_10__["stringsArrayToObjectWithValues"])(this.config.analytics.events.intentionOfRecharge.params.cleverTap, [Object(_nequi_utils_date__WEBPACK_IMPORTED_MODULE_9__["getFormattedDateTimes"])(), balance, rate]),
                    },
                });
                return [2 /*return*/];
            });
        });
    };
    FormPage.prototype.setAnalyticsFinalIntentionOfRecharge = function (valueCop, valueUsd) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.analyticsInteractor.trackEvent({
                    type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["AnalyticsType"].FACEBOOK,
                    params: {
                        eventName: this.config.analytics.events.finalIntentionOfRecharge.name,
                    },
                });
                this.analyticsInteractor.trackEvent({
                    type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["AnalyticsType"].FIREBASE,
                    params: { eventName: this.config.analytics.events.finalIntentionOfRecharge.name },
                });
                this.analyticsInteractor.trackEvent({
                    type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["AnalyticsType"].CLEVERTAP,
                    params: {
                        eventName: this.config.analytics.events.finalIntentionOfRecharge.name,
                        eventProps: Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_10__["stringsArrayToObjectWithValues"])(this.config.analytics.events.finalIntentionOfRecharge.params.cleverTap, [valueUsd, valueCop, Object(_nequi_utils_date__WEBPACK_IMPORTED_MODULE_9__["getFormattedDateTimes"])()]),
                    },
                });
                return [2 /*return*/];
            });
        });
    };
    FormPage.prototype.setAnalyticsSuccesRecharge = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.analyticsInteractor.trackEvent({
                    type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["AnalyticsType"].FACEBOOK,
                    params: {
                        eventName: this.config.analytics.events.successRecharge.name,
                    },
                });
                this.analyticsInteractor.trackEvent({
                    type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["AnalyticsType"].FACEBOOK,
                    params: {
                        eventName: this.config.analytics.events.successRecharge.facebook,
                    },
                });
                this.analyticsInteractor.trackEvent({
                    type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["AnalyticsType"].FIREBASE,
                    params: { eventName: this.config.analytics.events.successRecharge.name },
                });
                return [2 /*return*/];
            });
        });
    };
    FormPage.ɵfac = function FormPage_Factory(t) { return new (t || FormPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_paypal_core__WEBPACK_IMPORTED_MODULE_7__["PaypalInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_form_service__WEBPACK_IMPORTED_MODULE_14__["FormService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["AnalyticsInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_4__["ModuleConfigProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_8__["CardModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"])); };
    FormPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FormPage, selectors: [["nequi-paypal-form"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_services_form_service__WEBPACK_IMPORTED_MODULE_14__["FormService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 81, vars: 88, consts: [[1, "nequi-header", "nequi-header--white"], ["slot", "start"], ["id", "form_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], [1, "nequi-header__title", "ion-text-start"], ["fullscreen", "true", "scrollEvents", "true", "appAnimateTitleOnScroll", "", "appFormContentStyle", "", 1, "ion-padding-horizontal", "ion-content--enroll"], [1, "nequi-title", "content__title", 3, "innerHTML"], [1, "content__balance-card", "ion-no-padding"], ["id", "form_balance-title_text", 1, "content__balance-card-title"], ["id", "form_balance-value_text", 1, "content__balance-card-balance"], [1, "form", 3, "formGroup"], [1, "form__list"], ["id", "form_amount_input", 1, "nequi-item", "margin-bottom-8", 3, "nequiControlErrors"], ["position", "floating", 1, "nequi-item__label"], ["inputClass", "nequi-item__input", "tooltipType", "error", 1, "sc-ion-input-ios-h", 3, "prefix", "control", "valueChanged", "focusLost"], [1, "content__amount-info"], ["id", "form_economic-activity_input", "visibleKey", "description", 3, "formControl", "label", "options", "hideFilter", "selected"], ["id", "form_detail_text", 1, "content__transaction-detail"], [1, "content__transaction-section"], ["lines", "none", 1, "info-item", 3, "nequiMessageManager"], [1, "info-item__content"], ["id", "form_exchange-rate_label", 1, "info-item__label"], ["id", "form_exchange-rate_text", 1, "info-item__value"], ["lines", "none", 1, "info-item"], ["id", "form_amount-cop_label", 1, "info-item__label"], ["id", "form_amount-cop_text", 1, "info-item__value"], ["id", "form_commission_label", 1, "info-item__label"], ["id", "form_commission_text", 1, "info-item__value"], ["id", "form_total_label", 1, "info-item__label"], ["id", "form_total_text", 1, "info-item__value"], [1, "nequi-footer"], ["id", "form_next_button", "color", "guayaba", "shape", "round", "expand", "block", 1, "margin-vertical-16", 3, "disabled", "click"]], template: function FormPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormPage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
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
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-row");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ion-col", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "h2", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "currency");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "form", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "ion-list", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "ion-item", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](26, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](27, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](28, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "ion-label", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](31, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "nequi-input-currency", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChanged", function FormPage_Template_nequi_input_currency_valueChanged_32_listener() { return ctx.calculateValues(); })("focusLost", function FormPage_Template_nequi_input_currency_focusLost_32_listener() { return ctx.calculateValues(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](35, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "nequi-input-select-control", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selected", function FormPage_Template_nequi_input_select_control_selected_36_listener($event) { return ctx.selectIncomes($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](37, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "p", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](40, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "ion-item", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](43, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "ion-label", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](47, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "ion-text", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](50, "currency");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "ion-item", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "ion-label", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](55, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "ion-text", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](58, "currency");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "ion-item", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](60, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "ion-label", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](64, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "ion-text", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](67, "currency");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "ion-item", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "ion-label", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](72, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "ion-text", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](75, "currency");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "ion-footer", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "ion-button", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormPage_Template_ion_button_click_78_listener() { return ctx.checkFormData(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](80, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 28, "paypal.form.labels.header-title"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 30, "paypal.form.labels.title"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 32, "paypal.form.labels.balance.title"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 34, "paypal.form.labels.balance.symbolMoney"), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind4"](22, 36, ctx.viewModel.formParams.balance.available, "USD", "", "1.2-2"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.viewModel.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nequiControlErrors", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](81, _c1, ctx.viewModel.amountControl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](77, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](26, 41, "validators.general.required"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](27, 43, "validators.general.min"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](28, 45, "paypal.form.fields.amount.errors.limit-exceeded"))));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](31, 47, "paypal.form.fields.amount.placeholder"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("prefix", ctx.config.dollarPrefix)("control", ctx.viewModel.amountControl);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](35, 49, "paypal.form.fields.amount.info"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](37, 51, "paypal.form.fields.economic-activity.placeholder"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.viewModel.economicActivityControl)("options", ctx.viewModel.economicActivityList)("hideFilter", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](40, 53, "paypal.form.labels.detail"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nequiMessageManager", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](84, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](43, 55, "paypal.form.labels.exchange-rate.help")));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](47, 57, "paypal.form.labels.exchange-rate.placeholder"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](50, 59, ctx.viewModel.formParams.recharge.rate), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](55, 61, "paypal.form.labels.amount-cop"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](58, 63, ctx.viewModel.amountCOP), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nequiMessageManager", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](86, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](60, 65, "paypal.form.labels.commission.help")));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](64, 67, "paypal.form.labels.commission.placeholder"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](67, 69, ctx.viewModel.commission), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](72, 71, "paypal.form.labels.total"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](75, 73, ctx.viewModel.totalTransaction), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.viewModel.form == null ? null : ctx.viewModel.form.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](80, 75, "paypal.form.labels.next"), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_17__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_17__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_17__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_17__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_17__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_17__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_17__["IonContent"], _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_18__["AnimateTitleOnScrollDirective"], _ui_src_lib_directives_form_content_style_form_content_style_directive__WEBPACK_IMPORTED_MODULE_19__["FormContentStyleDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_17__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_17__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_17__["IonCol"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_17__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_17__["IonItem"], _ui_src_lib_directives_control_errors_control_errors_directive__WEBPACK_IMPORTED_MODULE_21__["ControlErrorsDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_17__["IonLabel"], _ui_src_lib_controls_nequi_input_currency_nequi_input_currency_component__WEBPACK_IMPORTED_MODULE_22__["NequiInputCurrencyComponent"], _ui_src_lib_controls_input_select_input_select_control_component__WEBPACK_IMPORTED_MODULE_23__["InputSelectControlComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormControlDirective"], _ui_src_lib_directives_message_manager_message_manager_directive__WEBPACK_IMPORTED_MODULE_24__["MessageManagerDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_17__["IonFooter"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"], _ui_src_lib_pipes_nequi_currency_nequi_currency_pipe__WEBPACK_IMPORTED_MODULE_25__["NequiCurrencyPipe"]], styles: [".content__title[_ngcontent-%COMP%] {\n  line-height: 30px;\n}\n.content__balance-card[_ngcontent-%COMP%] {\n  margin: 0px 14px;\n}\n.content__balance-card-title[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.content__balance-card-balance[_ngcontent-%COMP%] {\n  margin: 4px 0 8px 0;\n  font-weight: 600;\n}\n.content__transaction-detail[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 500;\n  color: var(--gray-alert-message);\n  margin: 8px;\n}\n.content__transaction-section[_ngcontent-%COMP%] {\n  padding: 0 16px;\n  margin-bottom: 20px;\n}\n.content__amount-info[_ngcontent-%COMP%] {\n  color: var(--bilbao);\n  margin: 0px 15px;\n}\n.info-item[_ngcontent-%COMP%]::part(native) {\n  --padding-top: 10px;\n  --padding-bottom: 0px;\n  --padding-start: 0px;\n  --background: none;\n  opacity: 1;\n}\n.info-item__content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: flex-start;\n  gap: 5px;\n}\n.info-item__label[_ngcontent-%COMP%] {\n  color: var(--gray-60);\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 17px;\n}\n.info-item__value[_ngcontent-%COMP%] {\n  color: var(--medianoche);\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 19px;\n}\n.info-item__message[_ngcontent-%COMP%] {\n  margin-top: -10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvZm9ybS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxpQkFBQTtBQUFKO0FBR0U7RUFDRSxnQkFBQTtBQURKO0FBR0k7RUFDRSxnQkFBQTtBQUROO0FBSUk7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FBRk47QUFNRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7QUFKSjtBQU9FO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBTEo7QUFRRTtFQUNFLG9CQUFBO0VBQ0EsZ0JBQUE7QUFOSjtBQVdFO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBUko7QUFXRTtFQUNFLGFBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsUUFBQTtBQVRKO0FBWUU7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFWSjtBQWFFO0VBQ0Usd0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBWEo7QUFjRTtFQUNFLGlCQUFBO0FBWkoiLCJmaWxlIjoiZm9ybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XG4gICZfX3RpdGxlIHtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgfVxuXG4gICZfX2JhbGFuY2UtY2FyZCB7XG4gICAgbWFyZ2luOiAwcHggMTRweDtcblxuICAgICYtdGl0bGUge1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG5cbiAgICAmLWJhbGFuY2Uge1xuICAgICAgbWFyZ2luOiA0cHggMCA4cHggMDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuICB9XG5cbiAgJl9fdHJhbnNhY3Rpb24tZGV0YWlsIHtcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6IHZhcigtLWdyYXktYWxlcnQtbWVzc2FnZSk7XG4gICAgbWFyZ2luOiA4cHg7XG4gIH1cblxuICAmX190cmFuc2FjdGlvbi1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gICZfX2Ftb3VudC1pbmZve1xuICAgIGNvbG9yOiB2YXIoLS1iaWxiYW8pO1xuICAgIG1hcmdpbjogMHB4IDE1cHg7XG4gIH1cbn1cblxuLmluZm8taXRlbSB7XG4gICY6OnBhcnQobmF0aXZlKSB7XG4gICAgLS1wYWRkaW5nLXRvcDogMTBweDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICAmX19jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBnYXA6IDVweDtcbiAgfVxuXG4gICZfX2xhYmVsIHtcbiAgICBjb2xvcjogdmFyKC0tZ3JheS02MCk7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICB9XG5cbiAgJl9fdmFsdWUge1xuICAgIGNvbG9yOiB2YXIoLS1tZWRpYW5vY2hlKTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIH1cblxuICAmX19tZXNzYWdlIHtcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgfVxufVxuIl19 */"] });
    return FormPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_6__["TransactionBasePage"]));



/***/ }),

/***/ "IY4Y":
/*!**********************************************************!*\
  !*** ./apps/colombia/src/app/features/payments/index.ts ***!
  \**********************************************************/
/*! exports provided: PAYMENTS_MODULE_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAYMENTS_MODULE_CONFIG", function() { return PAYMENTS_MODULE_CONFIG; });
/* harmony import */ var _nequi_native_qr_reader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nequi/native/qr-reader */ "AEiP");

var PAYMENTS_MODULE_CONFIG = {
    configButtonQR: _nequi_native_qr_reader__WEBPACK_IMPORTED_MODULE_0__["QrReaderConfig"].buttons.goToCode,
    configViewQR: _nequi_native_qr_reader__WEBPACK_IMPORTED_MODULE_0__["QrReaderConfig"].views.paymentFromHome,
    showReportOption: true,
};


/***/ }),

/***/ "JxkJ":
/*!*********************************************************************************!*\
  !*** ./libs/features/send/src/presentation/nequi/pages/send-money-user.page.ts ***!
  \*********************************************************************************/
/*! exports provided: SendMoneyUserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendMoneyUserPage", function() { return SendMoneyUserPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_apps_base_mobile_config_features_commons_services_contact_invitation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/apps/base/mobile/config/features/commons/services/contact-invitation */ "7x76");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_features_contacts_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/features/contacts/core */ "Zcn6");
/* harmony import */ var _nequi_features_contacts_presentation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nequi/features/contacts/presentation */ "59nv");
/* harmony import */ var _nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nequi/features/money-management/presentation */ "JFCQ");
/* harmony import */ var _nequi_features_notifications_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nequi/features/notifications/core */ "pTML");
/* harmony import */ var _nequi_features_profile_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @nequi/features/profile/data */ "m+bZ");
/* harmony import */ var _nequi_features_send_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @nequi/features/send/core */ "mumb");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_date__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @nequi/utils/date */ "tGfC");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _nequi_utils_string__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @nequi/utils/string */ "p6rB");
/* harmony import */ var _nequi_utils_types__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @nequi/utils/types */ "UE8s");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../config */ "XAmg");
/* harmony import */ var _send_money_user_config__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./send-money-user.config */ "KnaW");
/* harmony import */ var _send_money_user_view_model__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./send-money-user.view-model */ "XbDX");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _money_management_src_presentation_components_balance_header_balance_header_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../../money-management/src/presentation/components/balance-header/balance-header.component */ "1rl1");
/* harmony import */ var _ui_src_lib_directives_form_content_style_form_content_style_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../../../ui/src/lib/directives/form-content-style/form-content-style.directive */ "+XT3");
/* harmony import */ var _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../../../ui/src/lib/directives/animate-title-on-scroll/animate-title-on-scroll.directive */ "qbWi");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _contacts_src_presentation_controls_contact_control_contact_selector_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../../contacts/src/presentation/controls/contact-control/contact-selector.component */ "2MVS");
/* harmony import */ var _ui_src_lib_directives_message_manager_message_manager_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../../../../ui/src/lib/directives/message-manager/message-manager.directive */ "68HU");
/* harmony import */ var _ui_src_lib_directives_control_errors_control_errors_directive__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../../../../ui/src/lib/directives/control-errors/control-errors.directive */ "XHcO");
/* harmony import */ var _ui_src_lib_controls_nequi_input_currency_nequi_input_currency_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../../../../ui/src/lib/controls/nequi-input-currency/nequi-input-currency.component */ "VG0r");
/* harmony import */ var _ui_src_lib_directives_input_trim_directive__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../../../../ui/src/lib/directives/input/trim.directive */ "nZkk");
/* harmony import */ var _money_management_src_presentation_controls_origin_money_control_origin_money_control_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../../../money-management/src/presentation/controls/origin-money-control/origin-money-control.component */ "O3Yd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");















































var _c0 = function (a0, a1) { return { control: a0, infoMessage: a1, cssClass: "margin-bottom-8" }; };
var _c1 = function (a0, a1) { return { control: a0, messages: a1 }; };
function SendMoneyUserPage_form_16_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "app-contact-control", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function SendMoneyUserPage_form_16_Template_app_contact_control_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.onChangePhone(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "nequi-input-currency", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ion-label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "ion-textarea", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "ion-text", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "nequi-origin-money-control", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.viewModel.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 20, "cashout.send-money-user.inputs.phone-number.placeholder"))("formControl", ctx_r0.viewModel.contact)("isEditable", !ctx_r0.viewModel.isSendFromRequest)("shouldCheckSameNumber", true)("userPhoneNumber", ctx_r0.viewModel.userPhoneNumber)("errorMessages", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 22, "cashout.send-money-user.inputs.phone-number.errors"))("nequiMessageManager", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](36, _c0, ctx_r0.viewModel.contact, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 24, "cashout.send-money-user.inputs.phone-number.info-message")));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nequiControlErrors", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](39, _c1, ctx_r0.viewModel.amount, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 26, "cashout.send-money-user.inputs.amount.errors")));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 28, "cashout.send-money-user.inputs.amount.placeholder"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("control", ctx_r0.viewModel.amount)("allowNegative", false)("isReadOnly", ctx_r0.viewModel.isSendFromRequest);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nequiControlErrors", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](42, _c1, ctx_r0.viewModel.message, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 30, "cashout.send-money-user.inputs.message.errors")));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 32, "cashout.send-money-user.inputs.message.placeholder"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r0.viewModel.message)("maxlength", ctx_r0.config.validators.maxLengthMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](20, 34, "cashout.send-money-user.inputs.pocket.placeholder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r0.viewModel.pocketControl)("minAmount", ctx_r0.viewModel.form.value.amount);
} }
function SendMoneyUserPage_ion_text_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "cashout.send-money-user.buttons.next"));
} }
function SendMoneyUserPage_ion_spinner_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ion-spinner", 25);
} }
var SendMoneyUserPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SendMoneyUserPage, _super);
    function SendMoneyUserPage(cardModalService, firstTimeMessageBottomSheetService, profileModel, contactInvitationService, currencyPipe, provisioningManagementInteractor, contactsInteractor, phonePipe, router, analyticsInteractor, moduleConfigProvider, sendConfigProvider, userInfoProvider, notificationInteractor, injector) {
        var _this = _super.call(this, injector) || this;
        _this.cardModalService = cardModalService;
        _this.firstTimeMessageBottomSheetService = firstTimeMessageBottomSheetService;
        _this.profileModel = profileModel;
        _this.contactInvitationService = contactInvitationService;
        _this.currencyPipe = currencyPipe;
        _this.provisioningManagementInteractor = provisioningManagementInteractor;
        _this.contactsInteractor = contactsInteractor;
        _this.phonePipe = phonePipe;
        _this.router = router;
        _this.analyticsInteractor = analyticsInteractor;
        _this.moduleConfigProvider = moduleConfigProvider;
        _this.sendConfigProvider = sendConfigProvider;
        _this.userInfoProvider = userInfoProvider;
        _this.notificationInteractor = notificationInteractor;
        _this.viewModel = new _send_money_user_view_model__WEBPACK_IMPORTED_MODULE_21__["SendMoneyUserViewModel"](_this.userInfoProvider);
        _this.config = _send_money_user_config__WEBPACK_IMPORTED_MODULE_20__["SendMoneyUserConfig"];
        _this.balanceToogle = false;
        _this.translateProvider.loadModule(_this.moduleConfigProvider.i18n.moduleKey);
        return _this;
    }
    SendMoneyUserPage.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var sendInfo;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                sendInfo = this.router.getCurrentNavigation().extras.state;
                this.viewModel.setConfig(this.sendConfigProvider.sendToNequiConfig);
                this.viewModel.initForm(sendInfo);
                if (sendInfo.initTransactionOnLoad && this.viewModel.form.valid) {
                    this.sendMoney(sendInfo.contact);
                }
                return [2 /*return*/];
            });
        });
    };
    SendMoneyUserPage.prototype.onSendMoney = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.setContact()];
                    case 1:
                        _a.sent();
                        if (this.contactControlComponent.isASelectedContact) {
                            this.openBottomSheet();
                            return [2 /*return*/];
                        }
                        this.showAreYouSureModal();
                        return [2 /*return*/];
                }
            });
        });
    };
    SendMoneyUserPage.prototype.onChangePhone = function () {
        if (this.viewModel.contact.valid) {
            var message = this.translateProvider.get(this.config.i18n.reviewInformation);
            this.toastService.showInfo(message, this.config.toastDuration);
        }
    };
    SendMoneyUserPage.prototype.getConfirmationInfo = function (_transaction) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var confirmBottomSheet, items;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        confirmBottomSheet = this.translateProvider.get(_send_money_user_config__WEBPACK_IMPORTED_MODULE_20__["SendMoneyUserConfig"].i18n.confirmBottomSheet);
                        return [4 /*yield*/, this.buildConfirmData(confirmBottomSheet)];
                    case 1:
                        items = _a.sent();
                        return [2 /*return*/, {
                                title: confirmBottomSheet.title,
                                confirmLabel: confirmBottomSheet.buttons.accept,
                                cancelLabel: confirmBottomSheet.buttons.cancel,
                                viewCancel: true,
                                items: items,
                            }];
                }
            });
        });
    };
    SendMoneyUserPage.prototype.showConfirmation = function (transaction) {
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
                        if (typeof data === 'boolean') {
                            this.setAnalyticsIntention(_send_money_user_config__WEBPACK_IMPORTED_MODULE_20__["AnalyticsIntention"].CONFIRMATION, data ? _send_money_user_config__WEBPACK_IMPORTED_MODULE_20__["AnalyticsAction"].CONFIRM : _send_money_user_config__WEBPACK_IMPORTED_MODULE_20__["AnalyticsAction"].CORRECT);
                        }
                        return [2 /*return*/, data === true];
                }
            });
        });
    };
    SendMoneyUserPage.prototype.setOriginMoney = function (transaction) {
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
    SendMoneyUserPage.prototype.onTransactionSuccess = function (response, transaction) {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var toastMessage;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.setAnalytics();
                        if (this.viewModel.isSendFromRequest) {
                            this.notificationInteractor.archiveNotification((_b = (_a = this.viewModel.sendInfo) === null || _a === void 0 ? void 0 : _a.request) === null || _b === void 0 ? void 0 : _b.notificationId);
                        }
                        if (!transaction.data.contact.isNequi) {
                            this.showInviteModal();
                            return [2 /*return*/];
                        }
                        toastMessage = this.translateProvider.get(_send_money_user_config__WEBPACK_IMPORTED_MODULE_20__["SendMoneyUserConfig"].i18n.successMessage);
                        if (!Object(_nequi_utils_types__WEBPACK_IMPORTED_MODULE_18__["isTypeOf"])(response, ['reference', 'amount'])) return [3 /*break*/, 1];
                        this.navigatorProvider.navigateBack(_send_money_user_config__WEBPACK_IMPORTED_MODULE_20__["SendMoneyUserConfig"].routes.transactionDetail, {
                            state: {
                                response: response,
                                transaction: transaction,
                            },
                        });
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.navigatorProvider.navigateForward(_send_money_user_config__WEBPACK_IMPORTED_MODULE_20__["SendMoneyUserConfig"].routes.movements)];
                    case 2:
                        _c.sent();
                        this.toastService.showSuccess(toastMessage);
                        _c.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SendMoneyUserPage.prototype.setContact = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.maskedName = null;
                        _a = this;
                        return [4 /*yield*/, this.contactsInteractor.updateStatus([this.viewModel.contact.value])];
                    case 1:
                        _a.contact = (_b.sent())[0];
                        if (this.contact.recipient) {
                            this.maskedName = this.contact.recipient;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SendMoneyUserPage.prototype.openBottomSheet = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.viewModel.isLoading = true;
                try {
                    if (this.contact.isNequi) {
                        this.sendMoney(this.contact);
                        return [2 /*return*/];
                    }
                    this.sendBottomSheet();
                }
                catch (error) {
                    this.toastService.showError(error.message);
                }
                finally {
                    this.viewModel.isLoading = false;
                }
                return [2 /*return*/];
            });
        });
    };
    SendMoneyUserPage.prototype.buildConfirmData = function (bottomSheet) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var confirmData;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                confirmData = [
                    {
                        label: bottomSheet.items.phone,
                        value: this.phonePipe.transform(this.viewModel.contact.value.phoneNumber),
                    },
                    {
                        label: bottomSheet.items.amount,
                        value: this.currencyPipe.transform(this.viewModel.amount.value),
                    },
                ];
                if (this.maskedName) {
                    confirmData.splice(0, 0, {
                        label: bottomSheet.items.recipient,
                        value: this.maskedName,
                    });
                }
                return [2 /*return*/, confirmData];
            });
        });
    };
    SendMoneyUserPage.prototype.sendBottomSheet = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var actualDate, limitDate, month, sendBottomSheet;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        actualDate = new Date();
                        limitDate = new Date(actualDate.setDate(actualDate.getDate() + 1));
                        month = _send_money_user_config__WEBPACK_IMPORTED_MODULE_20__["SendMoneyUserConfig"].months[limitDate.getMonth()];
                        sendBottomSheet = this.translateProvider.get(_send_money_user_config__WEBPACK_IMPORTED_MODULE_20__["SendMoneyUserConfig"].i18n.sendBottomSheet);
                        sendBottomSheet.content = Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_17__["createFormat"])(sendBottomSheet.content, [
                            limitDate.getDate().toString(),
                            month,
                        ]);
                        return [4 /*yield*/, this.firstTimeMessageBottomSheetService.show({
                                icon: sendBottomSheet.image,
                                message: sendBottomSheet.message,
                                content: sendBottomSheet.content,
                                cssClass: 'first-time-message--icon-standard',
                                header: {
                                    view: true,
                                    action: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                            this.firstTimeMessageBottomSheetService.hide();
                                            return [2 /*return*/];
                                        });
                                    }); },
                                },
                                button: {
                                    label: sendBottomSheet.button,
                                    color: 'guayaba',
                                    fill: 'outline',
                                    action: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                        var time;
                                        var _this = this;
                                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                            time = 400;
                                            this.firstTimeMessageBottomSheetService.hide();
                                            setTimeout(function () {
                                                _this.sendMoney(_this.viewModel.contact.value);
                                            }, time);
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
    SendMoneyUserPage.prototype.sendMoney = function (contact) {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var transaction, transactionData, transactionWith;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                transaction = new _nequi_features_send_core__WEBPACK_IMPORTED_MODULE_13__["SendMoneyTransaction"](contact.isNequi ? _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["OperationType"].SEND_MONEY_USER : _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["OperationType"].SEND_MONEY_NO_USER);
                transactionData = {
                    contact: contact,
                    message: this.viewModel.message.value,
                    request: ((_a = this.viewModel.sendInfo) === null || _a === void 0 ? void 0 : _a.request) && {
                        message: (_b = this.viewModel.sendInfo.request) === null || _b === void 0 ? void 0 : _b.message,
                        transactionId: this.viewModel.transactionId.value,
                    },
                };
                transactionWith = transaction
                    .withAmount(this.viewModel.amount.value)
                    .withData(transactionData)
                    .withPocket(this.viewModel.form.value.pocket);
                _super.prototype.executeTransaction.call(this, transactionWith);
                return [2 /*return*/];
            });
        });
    };
    SendMoneyUserPage.prototype.showInviteModal = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        messages = this.translateProvider.get(this.config.i18n.inviteContactModal);
                        return [4 /*yield*/, this.cardModalService.show({
                                imgPath: messages.image,
                                title: messages.header,
                                content: messages.message,
                                buttons: [
                                    {
                                        text: messages.buttons.whatsapp,
                                        handler: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                                this.inviteFromWhatsapp();
                                                return [2 /*return*/];
                                            });
                                        }); },
                                    },
                                    {
                                        text: messages.buttons.sms,
                                        color: this.config.color.medianocheGray,
                                        handler: function () {
                                            _this.inviteFromSms();
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
    SendMoneyUserPage.prototype.inviteFromWhatsapp = function () {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messageTemplate, amount, invitationMessage, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        messageTemplate = this.translateProvider.get(this.config.i18n.messageToShare);
                        amount = this.currencyPipe.transform(this.viewModel.amount.value);
                        invitationMessage = Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_17__["createFormat"])(messageTemplate, [
                            (_a = this.profileModel.nickName) === null || _a === void 0 ? void 0 : _a.toUpperCase(),
                            amount,
                        ]);
                        return [4 /*yield*/, this.navigatorProvider.navigateForward(_send_money_user_config__WEBPACK_IMPORTED_MODULE_20__["SendMoneyUserConfig"].routes.notifications)];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.contactInvitationService.viaWhatsapp(invitationMessage)];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _b.sent();
                        this.toastService.showError(this.translateProvider.get(this.config.i18n.whatsappNotAvailableMessage));
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    SendMoneyUserPage.prototype.inviteFromSms = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var params, error_2;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingService.show()];
                    case 1:
                        _a.sent();
                        params = {
                            phoneNumberDestination: this.viewModel.contact.value.phoneNumber,
                            phoneNumberOrigin: this.profileModel.phoneNumber,
                            value: +this.viewModel.amount.value,
                        };
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.provisioningManagementInteractor.sendSms(params)];
                    case 3:
                        _a.sent();
                        this.sendMessageSuccess();
                        return [3 /*break*/, 5];
                    case 4:
                        error_2 = _a.sent();
                        this.sendMessageFail(error_2);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    SendMoneyUserPage.prototype.sendMessageSuccess = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingService.hide(true)];
                    case 1:
                        _a.sent();
                        this.navigatorProvider.navigateForward(_send_money_user_config__WEBPACK_IMPORTED_MODULE_20__["SendMoneyUserConfig"].routes.notifications);
                        return [2 /*return*/];
                }
            });
        });
    };
    SendMoneyUserPage.prototype.sendMessageFail = function (error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingService.hide(false)];
                    case 1:
                        _a.sent();
                        this.toastService.showError(error.message);
                        return [2 /*return*/];
                }
            });
        });
    };
    SendMoneyUserPage.prototype.setAnalytics = function () {
        var analytics = _send_money_user_config__WEBPACK_IMPORTED_MODULE_20__["SendMoneyUserConfig"].analytics.events;
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["AnalyticsType"].FACEBOOK,
            params: { eventName: analytics.successSending },
        });
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["AnalyticsType"].FACEBOOK,
            params: { eventName: analytics.facebookMobilePurchase },
        });
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["AnalyticsType"].FIREBASE,
            params: { eventName: analytics.successSending },
        });
    };
    SendMoneyUserPage.prototype.showAreYouSureModal = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages, contentParams, content;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        messages = this.translateProvider.get(this.config.i18n.areYouSureModal);
                        contentParams = [this.phonePipe.transform(this.viewModel.contact.value.phoneNumber)];
                        if (this.maskedName) {
                            contentParams.push("- " + this.maskedName);
                        }
                        content = Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_17__["createFormat"])(messages.message, contentParams);
                        return [4 /*yield*/, this.cardModalService.show({
                                imgPath: messages.image,
                                title: messages.header,
                                content: content,
                                buttons: [
                                    {
                                        text: messages.buttons.accept,
                                        handler: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                                this.openBottomSheet();
                                                this.setAnalyticsIntention(_send_money_user_config__WEBPACK_IMPORTED_MODULE_20__["AnalyticsIntention"].CORRECTION, _send_money_user_config__WEBPACK_IMPORTED_MODULE_20__["AnalyticsAction"].CONFIRM);
                                                return [2 /*return*/];
                                            });
                                        }); },
                                    },
                                    {
                                        text: messages.buttons.cancel,
                                        color: this.config.color.medianocheGray,
                                        handler: function () {
                                            _this.setAnalyticsIntention(_send_money_user_config__WEBPACK_IMPORTED_MODULE_20__["AnalyticsIntention"].CORRECTION, _send_money_user_config__WEBPACK_IMPORTED_MODULE_20__["AnalyticsAction"].CORRECT);
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
    SendMoneyUserPage.prototype.setAnalyticsIntention = function (intentionName, action) {
        var eventName = this.config.analytics.intention[intentionName];
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["AnalyticsType"].FACEBOOK,
            params: {
                eventName: eventName,
            },
        });
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["AnalyticsType"].FIREBASE,
            params: { eventName: eventName },
        });
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["AnalyticsType"].CLEVERTAP,
            params: {
                eventName: eventName,
                eventProps: Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_16__["stringsArrayToObjectWithValues"])(this.config.analytics.intention.params.cleverTap, [action, Object(_nequi_utils_date__WEBPACK_IMPORTED_MODULE_15__["getFormattedDateTimes"])()]),
            },
        });
    };
    SendMoneyUserPage.ɵfac = function SendMoneyUserPage_Factory(t) { return new (t || SendMoneyUserPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_14__["CardModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_14__["FirstTimeMessageBottomSheetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_profile_data__WEBPACK_IMPORTED_MODULE_12__["ProfileModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_apps_base_mobile_config_features_commons_services_contact_invitation__WEBPACK_IMPORTED_MODULE_4__["ContactInvitationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["ProvisioningInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_contacts_core__WEBPACK_IMPORTED_MODULE_8__["ContactsInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_6__["PhonePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["AnalyticsInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_7__["ModuleConfigProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_config__WEBPACK_IMPORTED_MODULE_19__["SendConfigProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_7__["UserInfoProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_notifications_core__WEBPACK_IMPORTED_MODULE_11__["NotificationInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"])); };
    SendMoneyUserPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SendMoneyUserPage, selectors: [["app-send-money-user"]], viewQuery: function SendMoneyUserPage_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_10__["OriginMoneyControlComponent"], 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_nequi_features_contacts_presentation__WEBPACK_IMPORTED_MODULE_9__["ContactControlComponent"], 1);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.originMoneyControl = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.contactControlComponent = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 22, vars: 13, consts: [[1, "nequi-header", "nequi-header--white"], ["slot", "start"], ["id", "send-money-user_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], [1, "nequi-header__title", "ion-text-start"], ["slot", "end"], [3, "click"], ["slot", "icon-only", 3, "name"], [3, "isDarkTheme", "isShow"], ["appFormContentStyle", "", "scrollEvents", "true", "appAnimateTitleOnScroll", "", "fullscreen", "true", 1, "ion-padding-horizontal", "ion-content--white"], [1, "nequi-title"], ["class", "form", 3, "formGroup", 4, "ngIf"], [1, "nequi-footer"], ["id", "send-money-user_next_button", "shape", "round", "color", "guayaba", "expand", "block", 3, "disabled", "click"], [4, "ngIf"], ["name", "crescent", "color", "light", 4, "ngIf"], [1, "form", 3, "formGroup"], [3, "placeholder", "formControl", "isEditable", "shouldCheckSameNumber", "userPhoneNumber", "errorMessages", "nequiMessageManager", "change"], [1, "nequi-item", "margin-bottom-8", 3, "nequiControlErrors"], ["position", "floating", 1, "goal-edit__label-amount", "nequi-item__label"], ["tooltipType", "error", "inputClass", "nequi-item__input", 1, "sc-ion-input-ios-h", 3, "control", "allowNegative", "isReadOnly"], ["position", "floating", 1, "nequi-item__label"], ["rows", "3", "inputmode", "text", "autocapitalize", "sentences", "trim", "", 1, "nequi-item__text-area", 3, "formControl", "maxlength"], ["color", "medium", 1, "margin-top-16"], [1, "margin-bottom-8", 3, "formControl", "minAmount"], ["name", "crescent", "color", "light"]], template: function SendMoneyUserPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SendMoneyUserPage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-title", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-buttons", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SendMoneyUserPage_Template_ion_button_click_9_listener() { return ctx.balanceToogle = !ctx.balanceToogle; });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "ion-icon", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "app-balance-header", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ion-content", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ion-text", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, SendMoneyUserPage_form_16_Template, 22, 45, "form", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "ion-footer", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "ion-button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SendMoneyUserPage_Template_ion_button_click_19_listener() { return ctx.onSendMoney(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, SendMoneyUserPage_ion_text_20_Template, 3, 3, "ion-text", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, SendMoneyUserPage_ion_spinner_21_Template, 1, 0, "ion-spinner", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 9, "cashout.send-money-user.title"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("name", ctx.balanceToogle ? "chevron-up-outline" : "chevron-down-outline");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("isDarkTheme", false)("isShow", ctx.balanceToogle);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 11, "cashout.send-money-user.title"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.viewModel.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.viewModel.form == null ? null : ctx.viewModel.form.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.viewModel.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.viewModel.isLoading);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_22__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_22__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_22__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_22__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_22__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_22__["IonTitle"], _money_management_src_presentation_components_balance_header_balance_header_component__WEBPACK_IMPORTED_MODULE_23__["BalanceHeaderComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_22__["IonContent"], _ui_src_lib_directives_form_content_style_form_content_style_directive__WEBPACK_IMPORTED_MODULE_24__["FormContentStyleDirective"], _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_25__["AnimateTitleOnScrollDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_22__["IonText"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_22__["IonFooter"], _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_26__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_26__["FormGroupDirective"], _contacts_src_presentation_controls_contact_control_contact_selector_component__WEBPACK_IMPORTED_MODULE_27__["ContactControlComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_26__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_26__["FormControlDirective"], _ui_src_lib_directives_message_manager_message_manager_directive__WEBPACK_IMPORTED_MODULE_28__["MessageManagerDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_22__["IonItem"], _ui_src_lib_directives_control_errors_control_errors_directive__WEBPACK_IMPORTED_MODULE_29__["ControlErrorsDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_22__["IonLabel"], _ui_src_lib_controls_nequi_input_currency_nequi_input_currency_component__WEBPACK_IMPORTED_MODULE_30__["NequiInputCurrencyComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_22__["IonTextarea"], _ionic_angular__WEBPACK_IMPORTED_MODULE_22__["TextValueAccessor"], _ui_src_lib_directives_input_trim_directive__WEBPACK_IMPORTED_MODULE_31__["InputTrimDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_26__["MaxLengthValidator"], _money_management_src_presentation_controls_origin_money_control_origin_money_control_component__WEBPACK_IMPORTED_MODULE_32__["OriginMoneyControlComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_22__["IonSpinner"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_33__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZW5kLW1vbmV5LXVzZXIucGFnZS5zY3NzIn0= */"] });
    return SendMoneyUserPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_6__["TransactionBasePage"]));



/***/ }),

/***/ "KnaW":
/*!***********************************************************************************!*\
  !*** ./libs/features/send/src/presentation/nequi/pages/send-money-user.config.ts ***!
  \***********************************************************************************/
/*! exports provided: AnalyticsIntention, AnalyticsAction, SendMoneyUserConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsIntention", function() { return AnalyticsIntention; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsAction", function() { return AnalyticsAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendMoneyUserConfig", function() { return SendMoneyUserConfig; });
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_send_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/features/send/core */ "mumb");
/* harmony import */ var _transaction_detail_detail_share_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transaction-detail/detail-share.options */ "C5gY");
var _a, _b;



var AnalyticsIntention;
(function (AnalyticsIntention) {
    AnalyticsIntention[AnalyticsIntention["CORRECTION"] = 0] = "CORRECTION";
    AnalyticsIntention[AnalyticsIntention["CONFIRMATION"] = 1] = "CONFIRMATION";
})(AnalyticsIntention || (AnalyticsIntention = {}));
var AnalyticsAction;
(function (AnalyticsAction) {
    AnalyticsAction["CORRECT"] = "corrige";
    AnalyticsAction["CONFIRM"] = "confirma";
})(AnalyticsAction || (AnalyticsAction = {}));
var SendMoneyUserConfig = Object.freeze({
    validators: {
        minLength: 10,
        maxLength: 10,
        maxLengthMessage: 144,
        minLengthMessage: 0,
    },
    i18n: {
        accountTypes: 'cashout.send-money-user.account-types',
        confirmBottomSheet: 'cashout.send-money-user.boottom-sheet.confirm',
        sendBottomSheet: 'cashout.send-money-user.boottom-sheet.send',
        pinChallengeMessage: 'cashout.send-money-user.pin-challenge',
        errorDefault: 'cashout.send-money-user.errors.default',
        inviteContactModal: 'cashout.send-money-user.modals.invite-contact',
        messageToShare: 'cashout.send-money-user.message-to-share',
        successMessage: 'cashout.send-money-user.success-message',
        whatsappNotAvailableMessage: 'cashout.send-money-user.social-sharing.whatsapp-not-available',
        reviewInformation: 'cashout.send-money-user.toast.review-information',
        areYouSureModal: 'cashout.send-money-user.modals.are-you-sure',
        detailLabels: 'cashout.sherpa.detail.fields',
    },
    routes: {
        notifications: '/admin/notifications',
        admin: '/admin/dashboard',
        movements: '/admin/movements',
        transactionDetail: '/admin/send/nequi/datail',
        report: 'report',
        receipt: '/admin/movements/receipt',
    },
    color: {
        medianocheGray: 'medianoche-gray',
    },
    bottomSheetTheme: 'light',
    months: [
        'enero',
        'febrero',
        'marzo',
        'abril',
        'mayo',
        'junio',
        'julio',
        'agosto',
        'septiembre',
        'octubre',
        'noviembre',
        'diciembre',
    ],
    /* TODO: Cambiar los textos para el i18n de send */
    errorMessages: (_a = {},
        _a[_nequi_features_send_core__WEBPACK_IMPORTED_MODULE_1__["ErrorCode"].ACCOUNT_WITH_LOCKS] = 'bank-recharge.home.errors.locked-account',
        _a[_nequi_features_send_core__WEBPACK_IMPORTED_MODULE_1__["ErrorCode"].ACCOUNT_WITH_LOCKS_SECOD_CASE] = 'bank-recharge.home.errors.locked-account',
        _a[_nequi_features_send_core__WEBPACK_IMPORTED_MODULE_1__["ErrorCode"].DEBIT_LIMIT_REACHED] = 'bank-recharge.home.errors.limits-reached',
        _a[_nequi_features_send_core__WEBPACK_IMPORTED_MODULE_1__["ErrorCode"].MONTHLY_DEBIT_LIMIT_REACHED] = 'bank-recharge.home.errors.monthly-limits-reached',
        _a[_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_0__["TRANSACTION_ERRORS"].NEQUI_ACCOUNT_LOCKED] = 'bank-recharge.home.errors.nequi-account-locked',
        _a[_nequi_features_send_core__WEBPACK_IMPORTED_MODULE_1__["ErrorCode"].UNAVAILABLE_ACCOUNT] = 'bank-recharge.home.errors.unavailable-account',
        _a[_nequi_features_send_core__WEBPACK_IMPORTED_MODULE_1__["ErrorCode"].NOT_BALANCE_AVAILABLE] = 'bank-recharge.home.errors.no-balance-available',
        _a),
    analytics: {
        events: {
            facebookMobilePurchase: 'fb_mobile_purchase',
            successSending: 'Envia_exitoso',
        },
        intention: (_b = {},
            _b[AnalyticsIntention.CORRECTION] = 'Corregir_envio_nequi',
            _b[AnalyticsIntention.CONFIRMATION] = 'Confirmacion_envio_nequi',
            _b.params = {
                cleverTap: ['acciones', 'fecha'],
            },
            _b),
    },
    detailShareOptions: [
        {
            id: _transaction_detail_detail_share_options__WEBPACK_IMPORTED_MODULE_2__["DetailShareOptions"].SHOW_RECEIPT,
            label: 'cashout.sherpa.bottom-sheet.share-options.receipt',
            icon: 'receipt-outline',
            isIcon: true,
        },
        {
            id: _transaction_detail_detail_share_options__WEBPACK_IMPORTED_MODULE_2__["DetailShareOptions"].SEND_VIA_EMAIL,
            label: 'cashout.sherpa.bottom-sheet.share-options.email',
            icon: 'mail-outline',
            isIcon: true,
        },
    ],
    labels: {
        fieldLabels: 'cashout.sherpa.detail.fields',
    },
    toastDuration: 4000,
    toast: {
        toastInformation: 'Recuerda que desde esta pantalla puedes compartir este movimiento.',
    },
});


/***/ }),

/***/ "Kv3X":
/*!*************************************************!*\
  !*** ./libs/features/cash-in/src/core/index.ts ***!
  \*************************************************/
/*! exports provided: CashInOptions, Countries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_cash_in_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/cash-in-options */ "S5Uj");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CashInOptions", function() { return _constants_cash_in_options__WEBPACK_IMPORTED_MODULE_0__["CashInOptions"]; });

/* harmony import */ var _constants_countries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/countries */ "aI3e");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Countries", function() { return _constants_countries__WEBPACK_IMPORTED_MODULE_1__["Countries"]; });





/***/ }),

/***/ "LTAK":
/*!*********************************************************************************************!*\
  !*** ./libs/features/send/src/presentation/nequi/pages/send-from-qr/send-from-qr.config.ts ***!
  \*********************************************************************************************/
/*! exports provided: SendFromQrConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendFromQrConfig", function() { return SendFromQrConfig; });
var SendFromQrConfig = Object.freeze({
    validators: {
        minLength: 10,
        maxLength: 10,
        maxLengthMessage: 144,
    },
    i18n: {
        noNequiAlert: 'cashout.send-money-user-from-qr.modals.no-nequi',
        successMessage: 'payments.home.messages.success',
    },
    routes: {
        admin: '/admin/dashboard',
        movements: '/admin/movements',
        transactionDetail: '/admin/send/nequi/datail',
    },
    color: {
        medianocheGray: 'medianoche-gray',
    },
});


/***/ }),

/***/ "M0iR":
/*!*********************************************************************************************!*\
  !*** ./libs/features/send/src/presentation/organisms/send-options/send-options.organism.ts ***!
  \*********************************************************************************************/
/*! exports provided: SendOptionsOrganism */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendOptionsOrganism", function() { return SendOptionsOrganism; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_transfi_ya_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/transfi-ya/core */ "dlSz");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_ui_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/ui/services */ "U66T");
/* harmony import */ var _nequi_utils_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/utils/string */ "p6rB");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../config */ "RWxE");
/* harmony import */ var _constants_send_options__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../constants/send-options */ "wMbQ");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ui_src_lib_components_nav_button_card_nav_button_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../ui/src/lib/components/nav-button-card/nav-button-card.component */ "gDHj");






















function SendOptionsOrganism_nequi_nav_button_card_11_Template(rf, ctx) { if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nequi-nav-button-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("clicked", function SendOptionsOrganism_nequi_nav_button_card_11_Template_nequi_nav_button_card_clicked_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); var option_r1 = ctx.$implicit; var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.onOptionClicked(option_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var option_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 3, option_r1.title))("image", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 5, option_r1.icon))("description", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 7, option_r1.description));
} }
var SendOptionsOrganism = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SendOptionsOrganism, _super);
    function SendOptionsOrganism(bottomSheetController, translateProvider, currencyPipe, transfiYaInteractor, parameterInteractor, loadingService, toastService, injector) {
        var _this = _super.call(this, injector) || this;
        _this.bottomSheetController = bottomSheetController;
        _this.translateProvider = translateProvider;
        _this.currencyPipe = currencyPipe;
        _this.transfiYaInteractor = transfiYaInteractor;
        _this.parameterInteractor = parameterInteractor;
        _this.loadingService = loadingService;
        _this.toastService = toastService;
        _this.options = [];
        _this.bottomSheetController = bottomSheetController;
        return _this;
    }
    SendOptionsOrganism.prototype.ngAfterContentInit = function () {
        this.options = this.getOptions();
    };
    SendOptionsOrganism.prototype.ngOnInit = function () {
        this.options = this.getOptions();
    };
    SendOptionsOrganism.prototype.close = function () {
        this.bottomSheetController.dismiss(null);
    };
    SendOptionsOrganism.prototype.onOptionClicked = function (option) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, _b, _c, _d, _e;
            var _f, _g;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_h) {
                switch (_h.label) {
                    case 0:
                        _a = option.id;
                        switch (_a) {
                            case _constants_send_options__WEBPACK_IMPORTED_MODULE_11__["SendOptions"].OTHER_BANK: return [3 /*break*/, 1];
                            case _constants_send_options__WEBPACK_IMPORTED_MODULE_11__["SendOptions"].OTHER_BANK_WITHOUT_DOCUMENT: return [3 /*break*/, 3];
                            case _constants_send_options__WEBPACK_IMPORTED_MODULE_11__["SendOptions"].TRANSFI_YA: return [3 /*break*/, 5];
                        }
                        return [3 /*break*/, 6];
                    case 1:
                        _c = (_b = this.bottomSheetController).dismiss;
                        _f = {
                            url: _config__WEBPACK_IMPORTED_MODULE_10__["SendConfig"].routes.sendBankInfo
                        };
                        return [4 /*yield*/, this.getOtherBankInformation()];
                    case 2:
                        _c.apply(_b, [(_f.information = _h.sent(),
                                _f)]);
                        return [3 /*break*/, 7];
                    case 3:
                        _e = (_d = this.bottomSheetController).dismiss;
                        _g = {
                            url: _config__WEBPACK_IMPORTED_MODULE_10__["SendConfig"].routes.sendBankInfo
                        };
                        return [4 /*yield*/, this.getOtherBankInformationWithoutDocument()];
                    case 4:
                        _e.apply(_d, [(_g.information = _h.sent(),
                                _g)]);
                        return [3 /*break*/, 7];
                    case 5:
                        this.redirectToTransfiYa();
                        return [3 /*break*/, 7];
                    case 6:
                        this.bottomSheetController.dismiss({ url: _config__WEBPACK_IMPORTED_MODULE_10__["SendConfig"].routes.sendNequi, information: null });
                        _h.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    SendOptionsOrganism.prototype.getOtherBankInformation = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var CURRENCY_DIGITS, commission, amount, messages;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        CURRENCY_DIGITS = '.0';
                        return [4 /*yield*/, this.getCommission()];
                    case 1:
                        commission = _a.sent();
                        amount = this.currencyPipe
                            .transform(commission, '', '', CURRENCY_DIGITS)
                            .replace(/\s/g, '');
                        messages = this.translateProvider.get(_config__WEBPACK_IMPORTED_MODULE_10__["SendConfig"].i18n.information.data);
                        return [2 /*return*/, {
                                title: messages.title,
                                description: Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_8__["createFormat"])(messages.costs, [amount]),
                                infoMessages: _config__WEBPACK_IMPORTED_MODULE_10__["SendConfig"].i18n.information.infoMessages,
                                button: {
                                    label: messages.button,
                                    url: _config__WEBPACK_IMPORTED_MODULE_10__["SendConfig"].routes.sendBank,
                                },
                            }];
                }
            });
        });
    };
    SendOptionsOrganism.prototype.redirectToTransfiYa = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.forward(_nequi_ui__WEBPACK_IMPORTED_MODULE_6__["AsyncBoardingMessageOrganism"], {
                    content: function () { return _this.getTransfiYaContent(); },
                    header: {
                        goBack: {
                            icon: 'arrow-back-outline',
                            action: function () { return _this.back(); },
                        },
                    },
                    button: {
                        label: this.translateProvider.get(_config__WEBPACK_IMPORTED_MODULE_10__["SendConfig"].i18n.transfiYa.button),
                        color: 'guayaba',
                        fill: 'outline',
                        action: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                this.bottomSheetController.dismiss({
                                    url: _config__WEBPACK_IMPORTED_MODULE_10__["SendConfig"].routes.sendTransfiYa,
                                    information: null,
                                });
                                return [2 /*return*/];
                            });
                        }); },
                    },
                });
                return [2 /*return*/];
            });
        });
    };
    SendOptionsOrganism.prototype.getTransfiYaContent = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var limits, helpUrl;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.transfiYaInteractor.getLimits()];
                    case 1:
                        limits = _a.sent();
                        return [4 /*yield*/, this.transfiYaInteractor.getHelpUrl()];
                    case 2:
                        helpUrl = _a.sent();
                        return [2 /*return*/, {
                                title: this.translateProvider.get(_config__WEBPACK_IMPORTED_MODULE_10__["SendConfig"].i18n.transfiYa.title),
                                description: this.translateProvider.get(_config__WEBPACK_IMPORTED_MODULE_10__["SendConfig"].i18n.transfiYa.description, {
                                    timeLimit: limits.maxHoursToAcceptTransaction,
                                }),
                                image: this.translateProvider.get(_config__WEBPACK_IMPORTED_MODULE_10__["SendConfig"].i18n.transfiYa.image),
                                url: {
                                    link: helpUrl,
                                    label: this.translateProvider.get(_config__WEBPACK_IMPORTED_MODULE_10__["SendConfig"].i18n.transfiYa.help),
                                },
                            }];
                }
            });
        });
    };
    SendOptionsOrganism.prototype.getOptions = function () {
        var _this = this;
        if (this.idOptions) {
            return _config__WEBPACK_IMPORTED_MODULE_10__["SendConfig"].sendOptions.filter(function (option) { return _this.idOptions.findIndex(function (el) { return el === option.id; }) !== -1; });
        }
    };
    SendOptionsOrganism.prototype.getCommission = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var commission, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.loadingService.show();
                        return [4 /*yield*/, this.parameterInteractor.getParameter(_config__WEBPACK_IMPORTED_MODULE_10__["SendConfig"].commissionParameterId)];
                    case 1:
                        commission = (_a.sent())
                            .map(function (param) { return Number(param.value); })
                            .reduce(function (param) { return param; });
                        this.loadingService.hideWithoutFeedback();
                        return [2 /*return*/, commission];
                    case 2:
                        error_1 = _a.sent();
                        this.loadingService.hideWithoutFeedback();
                        this.toastService.showError(error_1.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SendOptionsOrganism.prototype.getOtherBankInformationWithoutDocument = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                messages = this.translateProvider.get(_config__WEBPACK_IMPORTED_MODULE_10__["SendConfig"].i18n.informationWithoutDocument.data);
                return [2 /*return*/, {
                        title: messages.title,
                        description: null,
                        infoMessages: _config__WEBPACK_IMPORTED_MODULE_10__["SendConfig"].i18n.informationWithoutDocument.infoMessages,
                        button: {
                            label: messages.ready,
                            url: _config__WEBPACK_IMPORTED_MODULE_10__["SendConfig"].routes.sendBankWithoutDocument,
                        },
                    }];
            });
        });
    };
    SendOptionsOrganism.ɵfac = function SendOptionsOrganism_Factory(t) { return new (t || SendOptionsOrganism)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_6__["BottomSheetController"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_3__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_transfi_ya_core__WEBPACK_IMPORTED_MODULE_5__["TransfiYaInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["ParameterInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_ui_services__WEBPACK_IMPORTED_MODULE_7__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_ui_services__WEBPACK_IMPORTED_MODULE_7__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"])); };
    SendOptionsOrganism.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SendOptionsOrganism, selectors: [["app-send-options"]], inputs: { idOptions: "idOptions" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 12, vars: 4, consts: [[1, "ion-page"], [1, "ion-no-border"], ["slot", "end"], ["id", "option-selector_close_button", 3, "click"], ["color", "dark", "slot", "icon-only", "name", "close-outline"], [1, "ion-content--white", "ion-padding-horizontal"], [1, "nequi-title"], ["class", "margin-bottom-8", "showIcon", "true", 3, "title", "image", "description", "clicked", 4, "ngFor", "ngForOf"], ["showIcon", "true", 1, "margin-bottom-8", 3, "title", "image", "description", "clicked"]], template: function SendOptionsOrganism_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-header", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-buttons", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SendOptionsOrganism_Template_ion_button_click_4_listener() { return ctx.close(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "ion-icon", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-content", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h2", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-list");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, SendOptionsOrganism_nequi_nav_button_card_11_Template, 4, 9, "nequi-nav-button-card", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 2, "cashout.send-bottom-sheet.title"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.options);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _ui_src_lib_components_nav_button_card_nav_button_card_component__WEBPACK_IMPORTED_MODULE_13__["NavButtonCardComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"]], styles: [".bottom-sheet__content[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.hidden-height[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -20000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvc2VuZC1vcHRpb25zLm9yZ2FuaXNtLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJzZW5kLW9wdGlvbnMub3JnYW5pc20uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3R0b20tc2hlZXRfX2NvbnRlbnQge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5oaWRkZW4taGVpZ2h0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtMjAwMDA7XG59XG4iXX0= */"] });
    return SendOptionsOrganism;
}(_nequi_ui__WEBPACK_IMPORTED_MODULE_6__["NavRootBottomSheetBaseComponent"]));



/***/ }),

/***/ "M5Iz":
/*!****************************************************************************************!*\
  !*** ./libs/features/send/src/presentation/other-bank/send-money-other-bank.config.ts ***!
  \****************************************************************************************/
/*! exports provided: SendMoneyOtherBankConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendMoneyOtherBankConfig", function() { return SendMoneyOtherBankConfig; });
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_send_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/features/send/core */ "mumb");
var _a;


var SendMoneyOtherBankConfig = Object.freeze({
    documentTypes: [
        { type: _nequi_features_send_core__WEBPACK_IMPORTED_MODULE_1__["DocumentType"].CC, value: 'CC' },
        { type: _nequi_features_send_core__WEBPACK_IMPORTED_MODULE_1__["DocumentType"].CE, value: 'CE' },
        { type: _nequi_features_send_core__WEBPACK_IMPORTED_MODULE_1__["DocumentType"].NIT, value: 'NT' },
        { type: _nequi_features_send_core__WEBPACK_IMPORTED_MODULE_1__["DocumentType"].TI, value: 'TI' },
        { type: _nequi_features_send_core__WEBPACK_IMPORTED_MODULE_1__["DocumentType"].PA, value: 'PS' },
        { type: _nequi_features_send_core__WEBPACK_IMPORTED_MODULE_1__["DocumentType"].FD, value: 'FD' },
        { type: _nequi_features_send_core__WEBPACK_IMPORTED_MODULE_1__["DocumentType"].RC, value: 'RC' },
    ],
    i18n: {
        errorDefault: 'cashout.send-money-user.errors.default',
        pinChallengeMessage: 'cashout.send-money-user.pin-challenge',
        favoriteActivated: 'cashout.send-banks.favorite-is-activated',
        confirmation: 'cashout.send-banks.confirmation',
        success: 'cashout.send-banks.success',
        documentTypes: 'cashout.send-banks.document-types',
        sendToLocalBank: 'cashout.send-banks.notification-messages.send-to-local-bank',
        sendToday: 'cashout.send-banks.notification-messages.send-today',
        sendTomorrow: 'cashout.send-banks.notification-messages.send-tomorrow',
        sendNextAvailableDay: 'cashout.send-banks.notification-messages.send-next-available-day',
        confirmDeleteFavorite: 'cashout.favorite-account.alert.confirm-delete-favorite',
        errorDeletingFavorite: 'cashout.favorite-account.alert.error-deleting-favorite',
        bankInfoTast: 'cashout.send-banks.toast.bank-info',
        bancolombiaInfoTast: 'cashout.send-banks.toast.bancolombia-info',
        defaultAmountError: 'cashout.send-banks.validators.amount.default.max',
        catsAmountError: 'cashout.send-banks.validators.amount.cats.max',
    },
    favoriteAccountUrl: '/admin/send/bank/favorite',
    errorMessages: (_a = {},
        _a[_nequi_features_send_core__WEBPACK_IMPORTED_MODULE_1__["ErrorCode"].ACCOUNT_WITH_LOCKS] = 'bank-recharge.home.errors.locked-account',
        _a[_nequi_features_send_core__WEBPACK_IMPORTED_MODULE_1__["ErrorCode"].ACCOUNT_WITH_LOCKS_SECOD_CASE] = 'bank-recharge.home.errors.locked-account',
        _a[_nequi_features_send_core__WEBPACK_IMPORTED_MODULE_1__["ErrorCode"].DEBIT_LIMIT_REACHED] = 'bank-recharge.home.errors.limits-reached',
        _a[_nequi_features_send_core__WEBPACK_IMPORTED_MODULE_1__["ErrorCode"].MONTHLY_DEBIT_LIMIT_REACHED] = 'bank-recharge.home.errors.monthly-limits-reached',
        _a[_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_0__["TRANSACTION_ERRORS"].NEQUI_ACCOUNT_LOCKED] = 'bank-recharge.home.errors.nequi-account-locked',
        _a[_nequi_features_send_core__WEBPACK_IMPORTED_MODULE_1__["ErrorCode"].UNAVAILABLE_ACCOUNT] = 'bank-recharge.home.errors.unavailable-account',
        _a[_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_0__["TRANSACTION_ERRORS"].EXCEEDS_CREDIT_CEILING] = 'bank-recharge.home.errors.exceeds-ceiling',
        _a[_nequi_features_send_core__WEBPACK_IMPORTED_MODULE_1__["ErrorCode"].NOT_BALANCE_AVAILABLE] = 'bank-recharge.home.errors.no-balance-available',
        _a[_nequi_features_send_core__WEBPACK_IMPORTED_MODULE_1__["ErrorCode"].NOT_BALANCE_AVAILABLE] = 'cashout.send-banks.errors.no-balance-available',
        _a[_nequi_features_send_core__WEBPACK_IMPORTED_MODULE_1__["ErrorCode"].NOT_BALANCE_AVAILABLE_WITH_COMMISSION] = 'cashout.send-banks.errors.no-balance-available-with-commission',
        _a[_nequi_features_send_core__WEBPACK_IMPORTED_MODULE_1__["ErrorCode"].TIME_NOT_ALLOWED] = 'cashout.send-banks.errors.time-not-allowed',
        _a[_nequi_features_send_core__WEBPACK_IMPORTED_MODULE_1__["ErrorCode"].ACCOUNT_NUMBER_DOES_NOT_MATCH] = 'cashout.send-banks.errors.account-not-match',
        _a[_nequi_features_send_core__WEBPACK_IMPORTED_MODULE_1__["ErrorCode"].DOCUMENT_DOES_NOT_MATCH] = 'cashout.send-banks.errors.document-not-match',
        _a),
    notificationMessages: {
        days: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    },
    favoriteAccountsUrl: '/admin/send/bank/favorite',
    routes: {
        admin: '/admin/dashboard',
        detail: '/admin/send/bank/detail',
    },
    analytics: {
        events: {
            successfulMoneySendingToOtherBank: 'Envia_exitoso_otros_bancos',
            facebookMobilePurchase: 'fb_mobile_purchase',
        },
    },
});


/***/ }),

/***/ "MQxz":
/*!*********************************************************************!*\
  !*** ./libs/features/send/src/presentation/features-send.module.ts ***!
  \*********************************************************************/
/*! exports provided: FeaturesSendModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesSendModule", function() { return FeaturesSendModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nequi_apps_base_mobile_config_features_commons_services_contact_invitation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/apps/base/mobile/config/features/commons/services/contact-invitation */ "7x76");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_commons_presentation___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/commons/presentation/ */ "BT0d");
/* harmony import */ var _nequi_features_contacts_presentation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/features/contacts/presentation */ "59nv");
/* harmony import */ var _nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/features/money-management/presentation */ "JFCQ");
/* harmony import */ var _nequi_features_send_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nequi/features/send/core */ "mumb");
/* harmony import */ var _nequi_native_social_sharing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nequi/native/social-sharing */ "nNyq");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../config */ "XAmg");
/* harmony import */ var _config_send_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../config/send.config */ "Bass");
/* harmony import */ var _features_send_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./features-send-routing.module */ "dJfQ");
/* harmony import */ var _middleware_send_money_home_middleware__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./middleware/send-money-home.middleware */ "Qx++");
/* harmony import */ var _nequi_pages_send_from_qr_send_from_qr_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./nequi/pages/send-from-qr/send-from-qr.page */ "ntor");
/* harmony import */ var _nequi_pages_send_money_user_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./nequi/pages/send-money-user.page */ "JxkJ");
/* harmony import */ var _nequi_pages_transaction_detail_transaction_detail_page__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./nequi/pages/transaction-detail/transaction-detail.page */ "p4gF");
/* harmony import */ var _organisms_send_options_send_options_organism__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./organisms/send-options/send-options.organism */ "M0iR");
/* harmony import */ var _other_bank_pages_detail_detail_page__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./other-bank/pages/detail/detail.page */ "EI13");
/* harmony import */ var _other_bank_pages_favorite_favorite_account_page__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./other-bank/pages/favorite/favorite-account.page */ "zVdS");
/* harmony import */ var _other_bank_pages_home_send_money_other_bank_page__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./other-bank/pages/home/send-money-other-bank.page */ "2NV4");
/* harmony import */ var _other_bank_pages_other_bank_info_other_bank_info_page__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./other-bank/pages/other-bank-info/other-bank-info.page */ "TQ7E");
/* harmony import */ var _other_bank_pages_send_other_bank_without_id_send_other_bank_without_id_page__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./other-bank/pages/send-other-bank-without-id/send-other-bank-without-id.page */ "nswd");
/* harmony import */ var _other_bank_services_load_favorite_account_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./other-bank/services/load-favorite-account.service */ "dbmG");




























var FeaturesSendModule = /** @class */ (function () {
    function FeaturesSendModule() {
    }
    FeaturesSendModule.forChild = function (config) {
        return {
            ngModule: FeaturesSendModule,
            providers: [
                {
                    provide: _config__WEBPACK_IMPORTED_MODULE_13__["SendConfigProvider"],
                    useValue: config,
                },
            ],
        };
    };
    FeaturesSendModule.ɵfac = function FeaturesSendModule_Factory(t) { return new (t || FeaturesSendModule)(); };
    FeaturesSendModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FeaturesSendModule });
    FeaturesSendModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [
            _middleware_send_money_home_middleware__WEBPACK_IMPORTED_MODULE_16__["SendMoneyHomeMiddleware"],
            _nequi_ui__WEBPACK_IMPORTED_MODULE_11__["InputSelectBottomSheetService"],
            _nequi_apps_base_mobile_config_features_commons_services_contact_invitation__WEBPACK_IMPORTED_MODULE_4__["ContactInvitationService"],
            _nequi_native_social_sharing__WEBPACK_IMPORTED_MODULE_10__["SocialSharingPlugin"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"],
            _other_bank_services_load_favorite_account_service__WEBPACK_IMPORTED_MODULE_26__["LoadFavoriteAccountService"],
            {
                provide: _nequi_features_send_core__WEBPACK_IMPORTED_MODULE_9__["SendInteractor"],
                deps: [_nequi_features_send_core__WEBPACK_IMPORTED_MODULE_9__["BankAccountRepository"]],
                useClass: _nequi_features_send_core__WEBPACK_IMPORTED_MODULE_9__["SendInteractor"],
            },
            {
                provide: _nequi_features_commons__WEBPACK_IMPORTED_MODULE_5__["ModuleConfigProvider"],
                useValue: _config_send_config__WEBPACK_IMPORTED_MODULE_14__["SendConfig"],
            },
            _nequi_features_commons_presentation___WEBPACK_IMPORTED_MODULE_6__["PhonePipe"],
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _features_send_routing_module__WEBPACK_IMPORTED_MODULE_15__["FeaturesSendRoutingModule"],
                _nequi_ui__WEBPACK_IMPORTED_MODULE_11__["NequiUiModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"],
                _nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_8__["FeaturesMoneyManagementModule"],
                _nequi_features_contacts_presentation__WEBPACK_IMPORTED_MODULE_7__["FeaturesContactsModule"],
            ]] });
    return FeaturesSendModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FeaturesSendModule, { declarations: [_organisms_send_options_send_options_organism__WEBPACK_IMPORTED_MODULE_20__["SendOptionsOrganism"],
        _other_bank_pages_home_send_money_other_bank_page__WEBPACK_IMPORTED_MODULE_23__["SendMoneyOtherBankPage"],
        _nequi_pages_send_money_user_page__WEBPACK_IMPORTED_MODULE_18__["SendMoneyUserPage"],
        _other_bank_pages_favorite_favorite_account_page__WEBPACK_IMPORTED_MODULE_22__["FavoriteAccountPage"],
        _nequi_pages_send_from_qr_send_from_qr_page__WEBPACK_IMPORTED_MODULE_17__["SendFromQrPage"],
        _other_bank_pages_detail_detail_page__WEBPACK_IMPORTED_MODULE_21__["OtherBankDetailPage"],
        _other_bank_pages_send_other_bank_without_id_send_other_bank_without_id_page__WEBPACK_IMPORTED_MODULE_25__["SendOtherBankWithoutIdPage"],
        _other_bank_pages_other_bank_info_other_bank_info_page__WEBPACK_IMPORTED_MODULE_24__["OtherBankInfoPage"],
        _nequi_pages_transaction_detail_transaction_detail_page__WEBPACK_IMPORTED_MODULE_19__["TransactionDetailPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _features_send_routing_module__WEBPACK_IMPORTED_MODULE_15__["FeaturesSendRoutingModule"],
        _nequi_ui__WEBPACK_IMPORTED_MODULE_11__["NequiUiModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"],
        _nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_8__["FeaturesMoneyManagementModule"],
        _nequi_features_contacts_presentation__WEBPACK_IMPORTED_MODULE_7__["FeaturesContactsModule"]] }); })();


/***/ }),

/***/ "Oo3T":
/*!*************************************************************************************************!*\
  !*** ./libs/features/send/src/presentation/nequi/pages/send-from-qr/send-from-qr-view.model.ts ***!
  \*************************************************************************************************/
/*! exports provided: SendFromQrViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendFromQrViewModel", function() { return SendFromQrViewModel; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _send_from_qr_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./send-from-qr.config */ "LTAK");



var SendFromQrViewModel = /** @class */ (function () {
    function SendFromQrViewModel() {
    }
    SendFromQrViewModel.prototype.initForm = function (contact, amount, message, pocket) {
        this.createFormGroup(contact, amount, message, pocket);
    };
    SendFromQrViewModel.prototype.createFormGroup = function (contact, amount, message, pocket) {
        this.crateControls(contact, amount, message, pocket);
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            pocket: this.pocketControl,
            contact: this.contact,
            amount: this.amount,
            message: this.message,
        });
        this.form.markAsPristine();
        this.form.markAsUntouched();
    };
    SendFromQrViewModel.prototype.crateControls = function (contact, amount, message, pocket) {
        this.contact = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](contact || null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]);
        this.amount = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](amount, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(1)]);
        this.pocketControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](pocket);
        this.message = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](message, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(_send_from_qr_config__WEBPACK_IMPORTED_MODULE_2__["SendFromQrConfig"].validators.maxLengthMessage),
            _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_1__["CustomInputValidators"].transactionField,
        ]);
    };
    return SendFromQrViewModel;
}());



/***/ }),

/***/ "Qx++":
/*!**************************************************************************************!*\
  !*** ./libs/features/send/src/presentation/middleware/send-money-home.middleware.ts ***!
  \**************************************************************************************/
/*! exports provided: SendMoneyHomeMiddleware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendMoneyHomeMiddleware", function() { return SendMoneyHomeMiddleware; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/utils/types */ "UE8s");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config */ "XAmg");
/* harmony import */ var _organisms_send_options_send_options_organism__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../organisms/send-options/send-options.organism */ "M0iR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");














var SendMoneyHomeMiddleware = /** @class */ (function () {
    function SendMoneyHomeMiddleware(bottomSheetController, router, navController, translateProvider, moduleConfigProvider, sendConfigProvider) {
        this.bottomSheetController = bottomSheetController;
        this.router = router;
        this.navController = navController;
        this.translateProvider = translateProvider;
        this.moduleConfigProvider = moduleConfigProvider;
        this.sendConfigProvider = sendConfigProvider;
    }
    SendMoneyHomeMiddleware.prototype.canActivate = function (_route, state) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var navigationData, pocket, urlTree;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.openBottomSheet()];
                    case 1:
                        navigationData = _b.sent();
                        pocket = (_a = this.router.getCurrentNavigation().extras.state) === null || _a === void 0 ? void 0 : _a.pocket;
                        if ((navigationData === null || navigationData === void 0 ? void 0 : navigationData.url) && Object(_nequi_utils_types__WEBPACK_IMPORTED_MODULE_5__["isTypeOf"])(navigationData.url, String)) {
                            urlTree = this.router.createUrlTree([state.url, navigationData.url]);
                            this.navController.navigateForward(urlTree, {
                                state: { pocket: pocket, information: navigationData.information },
                            });
                        }
                        return [2 /*return*/, false];
                }
            });
        });
    };
    SendMoneyHomeMiddleware.prototype.openBottomSheet = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var bottomSheet, response;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.translateProvider.loadModule(this.moduleConfigProvider.i18n.moduleKey);
                        bottomSheet = this.bottomSheetController.create({
                            component: _nequi_ui__WEBPACK_IMPORTED_MODULE_4__["NavRootBottomSheetComponent"],
                            componentProps: {
                                rootPage: _organisms_send_options_send_options_organism__WEBPACK_IMPORTED_MODULE_7__["SendOptionsOrganism"],
                                inputProps: {
                                    idOptions: this.sendConfigProvider.sendIdOptions,
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
    SendMoneyHomeMiddleware.ɵfac = function SendMoneyHomeMiddleware_Factory(t) { return new (t || SendMoneyHomeMiddleware)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_4__["BottomSheetController"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_3__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_3__["ModuleConfigProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_config__WEBPACK_IMPORTED_MODULE_6__["SendConfigProvider"])); };
    SendMoneyHomeMiddleware.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: SendMoneyHomeMiddleware, factory: SendMoneyHomeMiddleware.ɵfac });
    return SendMoneyHomeMiddleware;
}());



/***/ }),

/***/ "RJv0":
/*!******************************************************************************************************************************!*\
  !*** ./libs/features/send/src/presentation/other-bank/pages/send-other-bank-without-id/send-other-bank-without-id.config.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: SendOtherBankWithoutIdConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendOtherBankWithoutIdConfig", function() { return SendOtherBankWithoutIdConfig; });
var SendOtherBankWithoutIdConfig = Object.freeze({
    i18n: {
        snackbar: {
            firstTime: 'cashout.send-banks.toast.first-time',
        },
    },
    firstCommissionOfTheYear: '5',
    formatApplicationDate: 'yyyyMMdd',
});


/***/ }),

/***/ "RWxE":
/*!*******************************************************!*\
  !*** ./libs/features/send/src/presentation/config.ts ***!
  \*******************************************************/
/*! exports provided: SendConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendConfig", function() { return SendConfig; });
/* harmony import */ var _constants_send_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/send-options */ "wMbQ");
/* eslint-disable sonarjs/no-duplicate-string */

var SendConfig = {
    routes: {
        sendNequi: 'nequi',
        sendBank: '/admin/send/bank',
        sendTransfiYa: 'transfi-ya',
        sendBankInfo: 'bank-info',
        sendBankWithoutDocument: '/admin/send/other-bank-without-id',
    },
    i18n: {
        bottomSheet: 'cashout.send-bottom-sheet',
        bankFirstTimeMessage: 'cashout.bank.first-time-message',
        transfiYa: {
            description: 'cashout.transfi-ya.boarding-message.description',
            title: 'cashout.transfi-ya.boarding-message.title',
            image: 'cashout.transfi-ya.boarding-message.image',
            help: 'cashout.transfi-ya.boarding-message.help',
            button: 'cashout.transfi-ya.boarding-message.button',
        },
        information: {
            data: 'cashout.bank.information',
            infoMessages: [
                {
                    image: 'cashout.bank.information.to-bancolombia.image',
                    title: 'cashout.bank.information.to-bancolombia.title',
                    content: 'cashout.bank.information.to-bancolombia.content',
                },
                {
                    image: 'cashout.bank.information.business-days.image',
                    title: 'cashout.bank.information.business-days.title',
                    content: 'cashout.bank.information.business-days.content',
                },
                {
                    image: 'cashout.bank.information.friday-to-sunday.image',
                    title: 'cashout.bank.information.friday-to-sunday.title',
                    content: 'cashout.bank.information.friday-to-sunday.content',
                },
                {
                    image: 'cashout.bank.information.weekends.image',
                    title: 'cashout.bank.information.weekends.title',
                    content: 'cashout.bank.information.weekends.content',
                },
            ],
        },
        informationWithoutDocument: {
            data: 'cashout.other-bank-info',
            infoMessages: [
                {
                    image: 'cashout.other-bank-info.costs.image',
                    title: 'cashout.other-bank-info.costs.title',
                    content: 'cashout.other-bank-info.costs.content',
                },
                {
                    image: 'cashout.other-bank-info.business-days.image',
                    title: 'cashout.other-bank-info.business-days.title',
                    content: 'cashout.other-bank-info.business-days.content',
                },
                {
                    image: 'cashout.other-bank-info.weekends.image',
                    title: 'cashout.other-bank-info.weekends.title',
                    content: 'cashout.other-bank-info.weekends.content',
                },
                {
                    image: 'cashout.other-bank-info.holidays.image',
                    title: 'cashout.other-bank-info.holidays.title',
                    content: 'cashout.other-bank-info.holidays.content',
                },
            ],
        },
    },
    sendOptions: [
        {
            id: _constants_send_options__WEBPACK_IMPORTED_MODULE_0__["SendOptions"].NEQUI,
            title: 'cashout.send-bottom-sheet.options.nequi.title',
            description: 'cashout.send-bottom-sheet.options.nequi.description',
            icon: '/assets/images/use-money/send/nequi.svg',
        },
        {
            id: _constants_send_options__WEBPACK_IMPORTED_MODULE_0__["SendOptions"].TRANSFI_YA,
            title: 'cashout.send-bottom-sheet.options.transfi-ya.title',
            description: 'cashout.send-bottom-sheet.options.transfi-ya.description',
            icon: '/assets/images/use-money/send/transfi-ya.svg',
        },
        {
            id: _constants_send_options__WEBPACK_IMPORTED_MODULE_0__["SendOptions"].OTHER_BANK,
            title: 'cashout.send-bottom-sheet.options.bank.title',
            description: 'cashout.send-bottom-sheet.options.bank.description',
            icon: '/assets/images/use-money/send/bank.svg',
        },
        {
            id: _constants_send_options__WEBPACK_IMPORTED_MODULE_0__["SendOptions"].OTHER_BANK_WITHOUT_DOCUMENT,
            title: 'cashout.send-bottom-sheet.options.bank.title',
            description: 'cashout.send-bottom-sheet.options.bank.description',
            icon: '/assets/images/use-money/send/bank.svg',
        },
    ],
    commissionParameterId: '25009',
};


/***/ }),

/***/ "RhAX":
/*!*******************************************************************************************!*\
  !*** ./libs/features/paypal/src/presentation/pages/registry-info/registry-info-config.ts ***!
  \*******************************************************************************************/
/*! exports provided: RegistryInfoConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistryInfoConfig", function() { return RegistryInfoConfig; });
var RegistryInfoConfig = Object.freeze({
    i18n: {
        titleReceive: 'paypal.registry.info.title',
        subTitleReceive: 'paypal.registry.info.receive.title',
        imageReceive: 'paypal.registry.info.receive.image',
        receivePersonalInfo: 'paypal.registry.info.receive.content.your-personal',
        receiveEmailInfo: 'paypal.registry.info.receive.content.your-email',
        receivePaypalInfo: 'paypal.registry.info.receive.content.your-paypal',
        receiveAccountInfo: 'paypal.registry.info.receive.content.your-account',
        receiveBalanceInfo: 'paypal.registry.info.receive.content.your-balance',
        receiveMonthInfo: 'paypal.registry.info.receive.content.your-month',
        continue: 'paypal.registry.info.buttons.accept',
        titlePay: 'paypal.registry.info.payment.title',
        imagePay: 'paypal.registry.info.payment.image',
        subTitlePay: 'paypal.registry.info.payment.title',
        receivePayInfo: 'paypal.registry.info.payment.content',
    },
    analytics: {
        events: {
            initialIntention: {
                name: 'Paypal_intencion_inicial_servicio',
                params: {
                    cleverTap: ['Fecha_intencion'],
                },
            },
        },
    },
    routes: {
        backpackHomeUrl: '/admin/dashboard',
        paypalRegistry: '/admin/paypal/registry',
        paypalHome: '/admin/paypal/receive',
    },
    typeLimitsAccount: {
        deposit: '1',
        withdrawal: '2',
        depositAndWithdrawal: '3',
    },
});


/***/ }),

/***/ "S/Y9":
/*!*****************************************************************************************!*\
  !*** ./libs/features/paypal/src/presentation/pages/registry-info/registry-info.page.ts ***!
  \*****************************************************************************************/
/*! exports provided: RegistryInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistryInfoPage", function() { return RegistryInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_features_paypal_exceptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/paypal/exceptions */ "0TYU");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_date__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/utils/date */ "tGfC");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/account.service */ "9A31");
/* harmony import */ var _registry_info_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./registry-info-config */ "RhAX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ui_src_lib_components_item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../ui/src/lib/components/item-detail/item-detail.component */ "Ycc7");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");



















var RegistryInfoPage = /** @class */ (function () {
    function RegistryInfoPage(navigatorProvider, translateProvider, moduleConfigProvider, router, loadingService, accountService, toastService, analyticsInteractor) {
        this.navigatorProvider = navigatorProvider;
        this.translateProvider = translateProvider;
        this.moduleConfigProvider = moduleConfigProvider;
        this.router = router;
        this.loadingService = loadingService;
        this.accountService = accountService;
        this.toastService = toastService;
        this.analyticsInteractor = analyticsInteractor;
        this.config = _registry_info_config__WEBPACK_IMPORTED_MODULE_9__["RegistryInfoConfig"];
        this.translateProvider.loadModule(this.moduleConfigProvider.i18n.moduleKey);
    }
    RegistryInfoPage.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.initValues();
                return [2 /*return*/];
            });
        });
    };
    RegistryInfoPage.prototype.setRates = function (rates) {
        var tax = String(rates.maximumFeeValue + rates.maximumFeeValue * rates.tax);
        var fee = String(rates.maximumFeeValue * rates.maximumFeeValue * rates.fee);
        var i18Tax = 'paypal.registry.info.payment.content';
        this.taxInfo = this.translateProvider.get(i18Tax, { fee: fee, tax: tax });
    };
    RegistryInfoPage.prototype.setLimits = function (limits) {
        var MIN_AVAILABLE = 20;
        var maxAllowed = limits[0].maxAllowedLimitInUSD + MIN_AVAILABLE;
        var i18nMaxAllowed = 'paypal.registry.info.receive.content.your-month';
        this.maxAllowedText = this.translateProvider.get(i18nMaxAllowed, { maxAllowed: maxAllowed });
    };
    RegistryInfoPage.prototype.goBack = function () {
        this.navigatorProvider.navigateBack(this.config.routes.backpackHomeUrl);
    };
    RegistryInfoPage.prototype.goTo = function () {
        if (this.accountService.userInfo.hasAccount) {
            this.navigatorProvider.navigateForward([this.config.routes.paypalHome], {
                state: this.accountService.userInfo,
            });
            return;
        }
        this.navigatorProvider.navigateForward([this.config.routes.paypalRegistry], {
            state: this.accountService.userInfo,
        });
    };
    RegistryInfoPage.prototype.initValues = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var responseService, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingService.show()];
                    case 1:
                        _a.sent();
                        this.setAnalyticsInitialIntention();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 7, , 13]);
                        return [4 /*yield*/, this.accountService.getAccountServices()];
                    case 3:
                        responseService = _a.sent();
                        return [4 /*yield*/, this.setRates(responseService.responseRates)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.setLimits(responseService.responseLimitsAccounts)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.loadingService.hideWithoutFeedback()];
                    case 6:
                        _a.sent();
                        return [3 /*break*/, 13];
                    case 7:
                        error_1 = _a.sent();
                        if (!(error_1 instanceof _nequi_features_paypal_exceptions__WEBPACK_IMPORTED_MODULE_4__["UnavailabilityException"])) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.toastService.showInfo(error_1.message)];
                    case 8:
                        _a.sent();
                        return [3 /*break*/, 11];
                    case 9: return [4 /*yield*/, this.toastService.showError(error_1.message)];
                    case 10:
                        _a.sent();
                        _a.label = 11;
                    case 11:
                        this.navigatorProvider.navigateForward(this.config.routes.backpackHomeUrl);
                        return [4 /*yield*/, this.loadingService.hideWithoutFeedback()];
                    case 12:
                        _a.sent();
                        return [3 /*break*/, 13];
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    RegistryInfoPage.prototype.setAnalyticsInitialIntention = function () {
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["AnalyticsType"].FACEBOOK,
            params: {
                eventName: this.config.analytics.events.initialIntention.name,
            },
        });
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["AnalyticsType"].FIREBASE,
            params: { eventName: this.config.analytics.events.initialIntention.name },
        });
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["AnalyticsType"].CLEVERTAP,
            params: {
                eventName: this.config.analytics.events.initialIntention.name,
                eventProps: Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_7__["stringsArrayToObjectWithValues"])(this.config.analytics.events.initialIntention.params.cleverTap, [Object(_nequi_utils_date__WEBPACK_IMPORTED_MODULE_6__["getFormattedDateTimes"])()]),
            },
        });
    };
    RegistryInfoPage.ɵfac = function RegistryInfoPage_Factory(t) { return new (t || RegistryInfoPage)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_3__["NavigatorProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_3__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_3__["ModuleConfigProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_8__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_5__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["AnalyticsInteractor"])); };
    RegistryInfoPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: RegistryInfoPage, selectors: [["nequi-registry-info"]], decls: 43, vars: 44, consts: [[1, "nequi-header"], ["slot", "start"], ["id", "authorization-permissions_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], ["fullscreen", "true", 1, "ion-content--enroll", "ion-padding-horizontal", "content", "data-content"], [1, "nequi-title", "content__title"], [3, "icon", "title", "line"], [1, "paypal__list"], [1, "list__item"], ["id", "profile-terms_content_label", 1, "list__item-label", 3, "innerHTML"], [1, "paypal__line"], [1, "paypal__pay"], [1, "nequi-footer"], ["id", "authorization_go-to-app_button", "shape", "round", "color", "guayaba", "expand", "block", "type", "submit", 1, "nequi-footer__button", 3, "click"]], template: function RegistryInfoPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function RegistryInfoPage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "ion-content", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "ion-text", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "app-item-detail", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](10, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](11, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "ion-list", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "ol", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "li", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](16, "li", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](17, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "li", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](19, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](20, "li", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](21, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](22, "li", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](23, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](24, "li", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](25, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](26, "hr", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "ion-text", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](29, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](30, "app-item-detail", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](31, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](32, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](35, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](36, "hr", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "ion-footer", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "ion-button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function RegistryInfoPage_Template_ion_button_click_39_listener() { return ctx.goTo(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "ion-text");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](41);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](42, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](8, 16, ctx.config.i18n.titleReceive), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](10, 18, ctx.config.i18n.imageReceive))("title", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](11, 20, ctx.config.i18n.subTitleReceive))("line", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](15, 22, ctx.config.i18n.receivePersonalInfo), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeHtml"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](17, 24, ctx.config.i18n.receiveEmailInfo), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeHtml"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](19, 26, ctx.config.i18n.receivePaypalInfo), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeHtml"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](21, 28, ctx.config.i18n.receiveAccountInfo), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeHtml"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](23, 30, ctx.config.i18n.receiveBalanceInfo), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeHtml"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](25, 32, ctx.maxAllowedText), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeHtml"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](29, 34, ctx.config.i18n.titlePay), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](31, 36, ctx.config.i18n.imagePay))("title", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](32, 38, ctx.config.i18n.subTitlePay))("line", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](35, 40, ctx.taxInfo));
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](42, 42, ctx.config.i18n.continue));
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonText"], _ui_src_lib_components_item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_12__["ItemDetailComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonFooter"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"]], styles: [".paypal__list[_ngcontent-%COMP%] {\n  margin-top: -40px;\n  margin-left: -15px;\n  color: var(--gray-70);\n}\n.paypal__line[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(210, 93, 93, 0.1);\n}\n.paypal__pay[_ngcontent-%COMP%] {\n  margin-top: -30px;\n  color: var(--gray-70);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvcmVnaXN0cnktaW5mby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFBSjtBQUVFO0VBQ0UsNENBQUE7QUFBSjtBQUVFO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtBQUFKIiwiZmlsZSI6InJlZ2lzdHJ5LWluZm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBheXBhbCB7XG4gICZfX2xpc3Qge1xuICAgIG1hcmdpbi10b3A6IC00MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcbiAgICBjb2xvcjogdmFyKC0tZ3JheS03MCk7XG4gIH1cbiAgJl9fbGluZSB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjEwLCA5MywgOTMsIDAuMSk7XG4gIH1cbiAgJl9fcGF5IHtcbiAgICBtYXJnaW4tdG9wOiAtMzBweDtcbiAgICBjb2xvcjogdmFyKC0tZ3JheS03MCk7XG4gIH1cbn1cbiJdfQ== */"] });
    return RegistryInfoPage;
}());



/***/ }),

/***/ "S5Uj":
/*!*********************************************************************!*\
  !*** ./libs/features/cash-in/src/core/constants/cash-in-options.ts ***!
  \*********************************************************************/
/*! exports provided: CashInOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashInOptions", function() { return CashInOptions; });
var CashInOptions;
(function (CashInOptions) {
    CashInOptions[CashInOptions["BANCOLOMBIA"] = 0] = "BANCOLOMBIA";
    CashInOptions[CashInOptions["BANISTMO"] = 1] = "BANISTMO";
    CashInOptions[CashInOptions["ACH"] = 2] = "ACH";
    CashInOptions[CashInOptions["PSE"] = 3] = "PSE";
    CashInOptions[CashInOptions["CASH"] = 4] = "CASH";
    CashInOptions[CashInOptions["HELP"] = 5] = "HELP";
})(CashInOptions || (CashInOptions = {}));


/***/ }),

/***/ "SMFJ":
/*!***********************************************************************************!*\
  !*** ./libs/features/paypal/src/presentation/pages/form-info/form-info-config.ts ***!
  \***********************************************************************************/
/*! exports provided: FormInfoConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormInfoConfig", function() { return FormInfoConfig; });
var FormInfoConfig = Object.freeze({
    i18n: {
        costsInfoTitle: 'paypal.form.costs-info.title',
        ratesTitle: 'paypal.form.costs-info.rates.title',
        ratesContent: 'paypal.form.costs-info.rates.content',
        gmfTitle: 'paypal.form.costs-info.gmf.title',
        gmfContent: 'paypal.form.costs-info.gmf.content',
        continue: 'paypal.form.costs-info.buttons.accept',
    },
    routes: {
        paypalHome: '/admin/paypal/receive',
        paypalForm: '/admin/paypal/form',
        backpackHomeUrl: '/admin/dashboard',
    },
});


/***/ }),

/***/ "TQ7E":
/*!******************************************************************************************************!*\
  !*** ./libs/features/send/src/presentation/other-bank/pages/other-bank-info/other-bank-info.page.ts ***!
  \******************************************************************************************************/
/*! exports provided: OtherBankInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherBankInfoPage", function() { return OtherBankInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../ui/src/lib/directives/animate-title-on-scroll/animate-title-on-scroll.directive */ "qbWi");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ui_src_lib_components_item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../ui/src/lib/components/item-detail/item-detail.component */ "Ycc7");
/* harmony import */ var _ui_src_lib_pipes_strip_html_strip_html_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../ui/src/lib/pipes/strip-html/strip-html.pipe */ "oslj");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ui_src_lib_pipes_nequi_currency_nequi_currency_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../ui/src/lib/pipes/nequi-currency/nequi-currency.pipe */ "Vb1S");













function OtherBankInfoPage_ion_text_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-text", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx_r0.description), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
var _c0 = function (a0) { return { commision: a0 }; };
function OtherBankInfoPage_app_item_detail_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-item-detail", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "currency");
} if (rf & 2) {
    var item_r2 = ctx.$implicit;
    var last_r3 = ctx.last;
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 4, item_r2.image))("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 6, item_r2.title))("description", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 8, item_r2.content, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 11, ctx_r1.commision))))("line", !last_r3);
} }
var OtherBankInfoPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(OtherBankInfoPage, _super);
    function OtherBankInfoPage(injector, router) {
        var _this = _super.call(this, injector) || this;
        _this.router = router;
        _this.button = { label: '', url: '', color: '', fill: 'solid' };
        return _this;
    }
    OtherBankInfoPage.prototype.ngOnInit = function () {
        var _a, _b, _c;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_d) {
                this.commision = 5;
                data = (_a = this.router.getCurrentNavigation().extras.state) === null || _a === void 0 ? void 0 : _a.information;
                this.title = data.title;
                this.description = data.description;
                this.button.label = (_b = data.button) === null || _b === void 0 ? void 0 : _b.label;
                this.button.url = (_c = data.button) === null || _c === void 0 ? void 0 : _c.url;
                this.infoMessages = data.infoMessages;
                return [2 /*return*/];
            });
        });
    };
    OtherBankInfoPage.prototype.gotTo = function () {
        return this.navigatorProvider.navigateForward([this.button.url], {
            replaceUrl: true,
        });
    };
    OtherBankInfoPage.ɵfac = function OtherBankInfoPage_Factory(t) { return new (t || OtherBankInfoPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
    OtherBankInfoPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OtherBankInfoPage, selectors: [["app-other-bank-info"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 18, vars: 13, consts: [[1, "nequi-header", "nequi-header--white"], ["slot", "start"], ["id", "other-bank-info_back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], [1, "nequi-header__title", "ion-text-start", 3, "innerHTML"], ["scrollEvents", "true", "appAnimateTitleOnScroll", "", "fullscreen", "true", 1, "ion-padding-horizontal", "ion-content--enroll"], ["id", "other-bank-info_title_label", 1, "nequi-title", 3, "innerHTML"], ["class", "description margin-bottom-16", 3, "innerHTML", 4, "ngIf"], ["class", "detail", 3, "icon", "title", "description", "line", 4, "ngFor", "ngForOf"], [1, "nequi-footer", "nequi-footer--padding-24"], ["id", "other-bank-info_continue_button", "shape", "round", "color", "guayaba", "expand", "block", 3, "click"], [1, "description", "margin-bottom-16", 3, "innerHTML"], [1, "detail", 3, "icon", "title", "description", "line"]], template: function OtherBankInfoPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OtherBankInfoPage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "ion-title", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "stripHTML");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-content", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "ion-text", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, OtherBankInfoPage_ion_text_11_Template, 2, 3, "ion-text", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, OtherBankInfoPage_app_item_detail_12_Template, 5, 15, "app-item-detail", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-footer", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OtherBankInfoPage_Template_ion_button_click_15_listener() { return ctx.gotTo(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 7, ctx.title)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 9, ctx.title), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.description);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.infoMessages);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 11, ctx.button.label), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_5__["AnimateTitleOnScrollDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonText"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonFooter"], _ui_src_lib_components_item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_7__["ItemDetailComponent"]], pipes: [_ui_src_lib_pipes_strip_html_strip_html_pipe__WEBPACK_IMPORTED_MODULE_8__["StripHTMLPipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], _ui_src_lib_pipes_nequi_currency_nequi_currency_pipe__WEBPACK_IMPORTED_MODULE_10__["NequiCurrencyPipe"]], styles: [".nequi-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-top: 8px;\n}\n\n.description[_ngcontent-%COMP%] {\n  font-size: 1em;\n  color: var(--gray-60);\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvb3RoZXItYmFuay1pbmZvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBQ0YiLCJmaWxlIjoib3RoZXItYmFuay1pbmZvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXF1aS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDFlbTtcbiAgY29sb3I6IHZhcigtLWdyYXktNjApO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiJdfQ== */"] });
    return OtherBankInfoPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__["FeatureBasePage"]));



/***/ }),

/***/ "UuxJ":
/*!***************************************************************!*\
  !*** ./apps/colombia/src/app/features/notifications/index.ts ***!
  \***************************************************************/
/*! exports provided: NOTIFICATIONS_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTIFICATIONS_CONFIG", function() { return NOTIFICATIONS_CONFIG; });
/* harmony import */ var _nequi_features_notifications_presentation_entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nequi/features/notifications/presentation/entities */ "7bEg");

var NOTIFICATIONS_CONFIG = {
    notificationTabs: [
        _nequi_features_notifications_presentation_entities__WEBPACK_IMPORTED_MODULE_0__["NotificationTabType"].RECEIVED,
        _nequi_features_notifications_presentation_entities__WEBPACK_IMPORTED_MODULE_0__["NotificationTabType"].ON_HOLD,
        _nequi_features_notifications_presentation_entities__WEBPACK_IMPORTED_MODULE_0__["NotificationTabType"].TRANSFIYA,
    ],
};


/***/ }),

/***/ "XbDX":
/*!***************************************************************************************!*\
  !*** ./libs/features/send/src/presentation/nequi/pages/send-money-user.view-model.ts ***!
  \***************************************************************************************/
/*! exports provided: SendMoneyUserViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendMoneyUserViewModel", function() { return SendMoneyUserViewModel; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _send_money_user_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./send-money-user.config */ "KnaW");



var SendMoneyUserViewModel = /** @class */ (function () {
    function SendMoneyUserViewModel(userInfoProvider) {
        this.userInfoProvider = userInfoProvider;
    }
    Object.defineProperty(SendMoneyUserViewModel.prototype, "isSendFromRequest", {
        get: function () {
            var _a, _b;
            return !!((_b = (_a = this.sendInfo) === null || _a === void 0 ? void 0 : _a.request) === null || _b === void 0 ? void 0 : _b.transactionId);
        },
        enumerable: false,
        configurable: true
    });
    SendMoneyUserViewModel.prototype.initForm = function (sendInfo) {
        this.sendInfo = sendInfo;
        this.createFormGroup(sendInfo);
        this.userPhoneNumber = this.userInfoProvider.getPhoneNumber();
    };
    SendMoneyUserViewModel.prototype.setConfig = function (config) {
        this.config = config;
    };
    SendMoneyUserViewModel.prototype.createFormGroup = function (sendInfo) {
        this.crateControls(sendInfo);
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            pocket: this.pocketControl,
            contact: this.contact,
            amount: this.amount,
            message: this.message,
            transactionId: this.transactionId,
        });
        this.form.markAsPristine();
        this.form.markAsUntouched();
    };
    SendMoneyUserViewModel.prototype.crateControls = function (sendInfo) {
        var _a, _b, _c, _d, _e;
        var amount = (_b = (_a = sendInfo === null || sendInfo === void 0 ? void 0 : sendInfo.request) === null || _a === void 0 ? void 0 : _a.amount) !== null && _b !== void 0 ? _b : sendInfo === null || sendInfo === void 0 ? void 0 : sendInfo.amount;
        var contact = (_d = (_c = sendInfo === null || sendInfo === void 0 ? void 0 : sendInfo.request) === null || _c === void 0 ? void 0 : _c.contact) !== null && _d !== void 0 ? _d : sendInfo === null || sendInfo === void 0 ? void 0 : sendInfo.contact;
        this.contact = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](contact, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]);
        this.amount = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](amount, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(this.config.minAmount),
        ]);
        this.message = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](sendInfo === null || sendInfo === void 0 ? void 0 : sendInfo.message, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(_send_money_user_config__WEBPACK_IMPORTED_MODULE_2__["SendMoneyUserConfig"].validators.maxLengthMessage),
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(_send_money_user_config__WEBPACK_IMPORTED_MODULE_2__["SendMoneyUserConfig"].validators.minLengthMessage),
            _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_1__["CustomInputValidators"].transactionField,
        ]);
        this.pocketControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](sendInfo === null || sendInfo === void 0 ? void 0 : sendInfo.pocket);
        this.transactionId = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]((_e = sendInfo === null || sendInfo === void 0 ? void 0 : sendInfo.request) === null || _e === void 0 ? void 0 : _e.transactionId);
    };
    return SendMoneyUserViewModel;
}());



/***/ }),

/***/ "aI3e":
/*!***************************************************************!*\
  !*** ./libs/features/cash-in/src/core/constants/countries.ts ***!
  \***************************************************************/
/*! exports provided: Countries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Countries", function() { return Countries; });
var Countries;
(function (Countries) {
    Countries["COLOMBIA"] = "CO";
    Countries["PANAMA"] = "PA";
})(Countries || (Countries = {}));


/***/ }),

/***/ "bOn3":
/*!**********************************************************!*\
  !*** ./apps/colombia/src/app/features/cash-out/index.ts ***!
  \**********************************************************/
/*! exports provided: CASH_OUT_MODULE_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASH_OUT_MODULE_CONFIG", function() { return CASH_OUT_MODULE_CONFIG; });
/* harmony import */ var _nequi_features_cash_out_money_presentation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nequi/features/cash-out-money/presentation */ "42QW");

var CASH_OUT_MODULE_CONFIG = {
    cashOutOptions: [
        _nequi_features_cash_out_money_presentation__WEBPACK_IMPORTED_MODULE_0__["CashOutOption"].ATM,
        _nequi_features_cash_out_money_presentation__WEBPACK_IMPORTED_MODULE_0__["CashOutOption"].PHYSICAL_POINT,
        _nequi_features_cash_out_money_presentation__WEBPACK_IMPORTED_MODULE_0__["CashOutOption"].MAP,
        _nequi_features_cash_out_money_presentation__WEBPACK_IMPORTED_MODULE_0__["CashOutOption"].HELP,
    ],
};


/***/ }),

/***/ "dJfQ":
/*!*****************************************************************************!*\
  !*** ./libs/features/send/src/presentation/features-send-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: FeaturesSendRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesSendRoutingModule", function() { return FeaturesSendRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _middleware_send_money_home_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./middleware/send-money-home.middleware */ "Qx++");
/* harmony import */ var _nequi_pages_send_from_qr_send_from_qr_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nequi/pages/send-from-qr/send-from-qr.page */ "ntor");
/* harmony import */ var _nequi_pages_send_money_user_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nequi/pages/send-money-user.page */ "JxkJ");
/* harmony import */ var _nequi_pages_transaction_detail_transaction_detail_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nequi/pages/transaction-detail/transaction-detail.page */ "p4gF");
/* harmony import */ var _other_bank_pages_detail_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./other-bank/pages/detail/detail.page */ "EI13");
/* harmony import */ var _other_bank_pages_favorite_favorite_account_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./other-bank/pages/favorite/favorite-account.page */ "zVdS");
/* harmony import */ var _other_bank_pages_home_send_money_other_bank_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./other-bank/pages/home/send-money-other-bank.page */ "2NV4");
/* harmony import */ var _other_bank_pages_other_bank_info_other_bank_info_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./other-bank/pages/other-bank-info/other-bank-info.page */ "TQ7E");
/* harmony import */ var _other_bank_pages_send_other_bank_without_id_send_other_bank_without_id_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./other-bank/pages/send-other-bank-without-id/send-other-bank-without-id.page */ "nswd");













var routes = [
    {
        path: '',
        component: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Type"],
        canActivate: [_middleware_send_money_home_middleware__WEBPACK_IMPORTED_MODULE_2__["SendMoneyHomeMiddleware"]],
    },
    {
        path: 'nequi',
        component: _nequi_pages_send_money_user_page__WEBPACK_IMPORTED_MODULE_4__["SendMoneyUserPage"],
    },
    {
        path: 'nequi/datail',
        component: _nequi_pages_transaction_detail_transaction_detail_page__WEBPACK_IMPORTED_MODULE_5__["TransactionDetailPage"],
    },
    {
        path: 'from-qr',
        component: _nequi_pages_send_from_qr_send_from_qr_page__WEBPACK_IMPORTED_MODULE_3__["SendFromQrPage"],
    },
    {
        path: 'bank',
        component: _other_bank_pages_home_send_money_other_bank_page__WEBPACK_IMPORTED_MODULE_8__["SendMoneyOtherBankPage"],
    },
    {
        path: 'bank-recharge',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | bank-recharge-bank-recharge-module */ "bank-recharge-bank-recharge-module").then(__webpack_require__.bind(null, /*! ./bank-recharge/bank-recharge.module */ "7vlj")).then(function (m) { return m.BankRechargeModule; });
        },
    },
    {
        path: 'bank/favorite',
        component: _other_bank_pages_favorite_favorite_account_page__WEBPACK_IMPORTED_MODULE_7__["FavoriteAccountPage"],
    },
    {
        path: 'bank/detail',
        component: _other_bank_pages_detail_detail_page__WEBPACK_IMPORTED_MODULE_6__["OtherBankDetailPage"],
    },
    {
        path: 'transfi-ya',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | nequi-features-transfi-ya-presentation */ "nequi-features-transfi-ya-presentation").then(__webpack_require__.bind(null, /*! @nequi/features/transfi-ya/presentation */ "e/3u")).then(function (m) { return m.FeaturesTransfiYaModule; });
        },
    },
    {
        path: 'bank-info',
        component: _other_bank_pages_other_bank_info_other_bank_info_page__WEBPACK_IMPORTED_MODULE_9__["OtherBankInfoPage"],
    },
    {
        path: 'other-bank-without-id',
        component: _other_bank_pages_send_other_bank_without_id_send_other_bank_without_id_page__WEBPACK_IMPORTED_MODULE_10__["SendOtherBankWithoutIdPage"],
    },
];
var FeaturesSendRoutingModule = /** @class */ (function () {
    function FeaturesSendRoutingModule() {
    }
    FeaturesSendRoutingModule.ɵfac = function FeaturesSendRoutingModule_Factory(t) { return new (t || FeaturesSendRoutingModule)(); };
    FeaturesSendRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FeaturesSendRoutingModule });
    FeaturesSendRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return FeaturesSendRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FeaturesSendRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "dbmG":
/*!**************************************************************************************************!*\
  !*** ./libs/features/send/src/presentation/other-bank/services/load-favorite-account.service.ts ***!
  \**************************************************************************************************/
/*! exports provided: LoadFavoriteAccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadFavoriteAccountService", function() { return LoadFavoriteAccountService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


var LoadFavoriteAccountService = /** @class */ (function () {
    function LoadFavoriteAccountService() {
        this.favoriteAccount = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.favoriteAccount$ = this.favoriteAccount.asObservable();
    }
    LoadFavoriteAccountService.prototype.setFavoriteAccount = function (favorite) {
        this.favoriteAccount.next(favorite);
    };
    LoadFavoriteAccountService.ɵfac = function LoadFavoriteAccountService_Factory(t) { return new (t || LoadFavoriteAccountService)(); };
    LoadFavoriteAccountService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LoadFavoriteAccountService, factory: LoadFavoriteAccountService.ɵfac });
    return LoadFavoriteAccountService;
}());



/***/ }),

/***/ "dp8m":
/*!*******************************************************************************************************!*\
  !*** ./libs/features/send/src/presentation/other-bank/pages/home/send-money-other-bank.view-model.ts ***!
  \*******************************************************************************************************/
/*! exports provided: SendMoneyOtherBankViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendMoneyOtherBankViewModel", function() { return SendMoneyOtherBankViewModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _send_money_other_bank_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../send-money-other-bank.config */ "M5Iz");




var FAVORITE_CONTROL_NAME = 'isFavorite';
var normalizeName = function (value) { return value.replace(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_2__["CustomTextNormalizer"].regex.NORMALIZE_ACCENTS_AND_SPECIAL_CHARACTERS, '\0'); };
var filterAccountType = function (typeAccountA, code) {
    return typeAccountA.code === code;
};
var isSameAccount = function (favorite, formInfo) {
    return favorite.beneficiaryDocument.id === formInfo.documentNumber &&
        favorite.beneficiaryDocument.type === formInfo.documentType.value &&
        favorite.bank.achCode === formInfo.bank.achCode &&
        favorite.destination.typeAccount === formInfo.accountType.code &&
        favorite.destination.account === formInfo.accountNumber;
};
var SendMoneyOtherBankViewModel = /** @class */ (function () {
    function SendMoneyOtherBankViewModel() {
        this.documentTypes = [];
        this.bankList = [];
        this.isFavoriteLoaded = false;
    }
    SendMoneyOtherBankViewModel.prototype.onBlur = function () {
        var fieldNameValue = this.form.value.name;
        var fieldNameValueTransformed = fieldNameValue
            .normalize('NFD')
            .replace(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_2__["CustomTextNormalizer"].regex.NORMALIZE_ACCENTS, '')
            .trim();
        this.form.get('name').setValue(fieldNameValueTransformed);
    };
    SendMoneyOtherBankViewModel.prototype.normalizeNameData = function (formControl) {
        formControl.setValue(normalizeName(formControl.value));
    };
    Object.defineProperty(SendMoneyOtherBankViewModel.prototype, "isSameAccount", {
        get: function () {
            return isSameAccount(this.favoriteLoaded, this.form.value);
        },
        enumerable: false,
        configurable: true
    });
    SendMoneyOtherBankViewModel.prototype.setConfig = function (config) {
        this.config = config;
    };
    SendMoneyOtherBankViewModel.prototype.buildForm = function (pocket) {
        var _a;
        this.crateControls(pocket);
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]((_a = {
                name: this.nameControl,
                documentType: this.documentTypeControl,
                documentNumber: this.documentNumberControl,
                bank: this.bankControl,
                accountType: this.accountTypeControl,
                accountNumber: this.accountNumberControl,
                amount: this.amountControl
            },
            _a[FAVORITE_CONTROL_NAME] = this.isFavoriteControl,
            _a.pocket = this.pocketControl,
            _a));
        this.form.markAsPristine();
        this.form.markAsUntouched();
        this.subscribeToFavoriteChanges();
    };
    SendMoneyOtherBankViewModel.prototype.destroy = function () {
        var _a, _b;
        (_b = (_a = this.subscriptions$) === null || _a === void 0 ? void 0 : _a.forEach) === null || _b === void 0 ? void 0 : _b.call(_a, function (subscription) { var _a; return (_a = subscription === null || subscription === void 0 ? void 0 : subscription.unsubscribe) === null || _a === void 0 ? void 0 : _a.call(subscription); });
    };
    SendMoneyOtherBankViewModel.prototype.createDocumentTypeList = function (documentTypeTexts) {
        this.documentTypes = _send_money_other_bank_config__WEBPACK_IMPORTED_MODULE_3__["SendMoneyOtherBankConfig"].documentTypes.map(function (type) {
            return { name: documentTypeTexts[type.type], value: type.value };
        });
    };
    SendMoneyOtherBankViewModel.prototype.buildArrayConfirmationItems = function (messages, currencyPipe) {
        var items = [
            {
                label: messages.items.name,
                value: this.form.value.name,
            },
            {
                label: messages.items.documentType,
                value: this.form.value.documentType.name,
            },
            {
                label: messages.items.documentNumber,
                value: this.form.value.documentNumber,
            },
            {
                label: messages.items.bank,
                value: this.form.value.bank.name,
            },
            {
                label: messages.items.accountType,
                value: this.form.value.accountType.description,
            },
            {
                label: messages.items.accountNumber,
                value: this.form.value.accountNumber,
            },
            {
                label: messages.items.amount,
                value: currencyPipe.transform(this.form.value.amount),
            },
        ];
        if (this.form.value.isFavorite) {
            items.splice(items.length - 1, 0, {
                label: messages.items.state.label,
                value: messages.items.state.value,
            });
        }
        return items;
    };
    SendMoneyOtherBankViewModel.prototype.updateAccountControlValidators = function (attribute) {
        var _a;
        this.accountNumberControl.reset();
        this.accountNumberControl.clearValidators();
        this.accountNumberControl.setValidators([
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_2__["CustomInputValidators"].patterns.onlyNumbers),
            this.validateAccountLength((_a = attribute.validators) === null || _a === void 0 ? void 0 : _a.validAccountSizes),
        ]);
        this.accountNumberControl.updateValueAndValidity();
    };
    SendMoneyOtherBankViewModel.prototype.setFavorite = function (favorite) {
        var _a, _b, _c, _d, _e, _f;
        var documentType = this.documentTypes.find(function (document) { return document.value === favorite.beneficiaryDocument.type; });
        var accountType = (_c = (_b = (_a = favorite.bank) === null || _a === void 0 ? void 0 : _a.accountTypes) === null || _b === void 0 ? void 0 : _b.find) === null || _c === void 0 ? void 0 : _c.call(_b, function (type) {
            return filterAccountType(type, favorite.destination.typeAccount);
        });
        this.nameControl.setValue(favorite.destination.name);
        this.documentTypeControl.setValue(documentType);
        this.documentNumberControl.setValue(favorite.beneficiaryDocument.id);
        this.bankControl.setValue((_d = favorite.bank) !== null && _d !== void 0 ? _d : null);
        this.accountTypeControl.setValue(accountType);
        this.accountNumberControl.setValue(favorite.destination.account);
        this.isFavoriteControl.setValue(true, { emitEvent: false });
        this.accountNumberControl.setValidators([
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_2__["CustomInputValidators"].patterns.onlyNumbers),
            this.validateAccountLength((_f = (_e = accountType === null || accountType === void 0 ? void 0 : accountType.attributes) === null || _e === void 0 ? void 0 : _e.validators) === null || _f === void 0 ? void 0 : _f.validAccountSizes),
        ]);
        this.favoriteLoaded = favorite;
    };
    SendMoneyOtherBankViewModel.prototype.updateAmountControlValidator = function (maxMoneyToTransfer) {
        if (this.amountControl.value) {
            this.amountControl.reset();
            this.amountControl.clearValidators();
        }
        if (maxMoneyToTransfer) {
            this.amountControl.setValidators([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(maxMoneyToTransfer),
            ]);
            this.amountControl.updateValueAndValidity();
            return;
        }
        this.amountControl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]);
        this.amountControl.updateValueAndValidity();
    };
    SendMoneyOtherBankViewModel.prototype.crateControls = function (pocket) {
        this.nameControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(this.config.nameMinLength),
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(this.config.nameMaxLength),
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_2__["CustomInputValidators"].patterns.onlyAlphaNumericWithSpaces),
        ]);
        this.documentTypeControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.bankControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.accountTypeControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.amountControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]);
        this.isFavoriteControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false);
        this.pocketControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](pocket);
        this.documentNumberControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(this.config.documentNumberMinLength),
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(this.config.documentNumberMaxLength),
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_2__["CustomInputValidators"].patterns.onlyNumbers),
        ]);
        this.accountNumberControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_2__["CustomInputValidators"].patterns.onlyNumbers),
        ]);
    };
    SendMoneyOtherBankViewModel.prototype.validateAccountLength = function (validateAccountSizes) {
        return function (control) {
            if (!control.value) {
                return null;
            }
            var validateAccountSizesArray = validateAccountSizes.split(',');
            var isValidAccountLength = validateAccountSizesArray.some(function (item) { return control.value.length === Number(item); });
            return isValidAccountLength ? null : { invalidAccountLength: true };
        };
    };
    SendMoneyOtherBankViewModel.prototype.subscribeToFavoriteChanges = function () {
        var _this = this;
        this.subscriptions$ = Object.keys(this.form.controls).map(function (control) {
            if (control === FAVORITE_CONTROL_NAME) {
                return null;
            }
            return _this.form.controls[control].valueChanges.subscribe(function (value) {
                var _a;
                if (_this.favoriteLoaded) {
                    _this.isFavoriteControl.setValue(isSameAccount(_this.favoriteLoaded, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.form.value), (_a = {}, _a[control] = value, _a))), {
                        emitEvent: false,
                    });
                }
            });
        });
    };
    return SendMoneyOtherBankViewModel;
}());



/***/ }),

/***/ "iYAC":
/*!*************************************************************************!*\
  !*** ./libs/features/paypal/src/presentation/pages/home/home.config.ts ***!
  \*************************************************************************/
/*! exports provided: HomeConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeConfig", function() { return HomeConfig; });
var HomeConfig = Object.freeze({
    i18n: {
        title: 'paypal.home.title',
        titleWithErrors: 'paypal.home.title-with-errors',
        bottomSheet: {
            firstUsageMessage: 'paypal.home.bottom-sheet.link-account',
            sendPayPalToNequi: 'paypal.home.bottom-sheet.send-payPal-to-nequi',
        },
        emailConfirmationError: 'paypal.home.errors.email',
        nameNoMatchWhitNequiError: 'paypal.home.errors.name-no-match-with-nequi',
        controlListError: 'paypal.home.errors.control-list',
        pinChallenge: 'paypal.home.pin-challenge',
        successEmailRegistration: 'paypal.home.success-email-registration',
        linkWrongCurrencyError: 'paypal.home.errors.link-wrong-currency',
        retryRegistryError: 'paypal.home.errors.retry-registry',
        unlinkAccount: 'paypal.home.unlink-account',
        unlinkAccountSuccess: 'paypal.home.unlink-account.success',
        defaultMessage: 'paypal.home.contextual-message.defaultMessage',
        limitExceedError: 'paypal.home.errors.limit-exceed',
        balanceZeroError: 'paypal.home.errors.balance-zero',
        unavailabilityError: 'paypal.home.errors.unavailability',
        failUnlinkAccount: 'paypal.home.errors.fail-unlink-account',
        generalError: 'paypal.home.errors.general',
        withdrawalNull: 'paypal.home.errors.withdrawal-null',
    },
    analytics: {
        events: {
            checkBalance: {
                name: 'Paypal_consulta_saldo',
                params: {
                    cleverTap: ['Fecha_consulta_saldo', 'Saldo_actual_paypal'],
                },
            },
        },
    },
    bottomSheet: {
        cssClass: 'first-time-message--icon-standard',
        button: {
            fill: 'outline',
            color: 'guayaba',
        },
    },
    color: {
        medianocheGray: 'medianoche-gray',
    },
    routes: {
        backpackHomeUrl: '/admin/dashboard',
        closetUrl: '/admin/store',
        emailUrl: '/admin/profile/my-info/email',
        receiveUrl: '/admin/paypal/receive',
        payPalFormInfo: '/admin/paypal/form-info',
        registryPageUrl: '/admin/paypal/registry',
        infoPage: '/admin/paypal/info-registry',
    },
    balance: {
        currency: {
            decimal: '1.2-2',
            whole: 0,
        },
        progress: {
            gradiant: {
                value: 0,
                css: 'balance-card__progress-bar--gradiant',
            },
        },
    },
    decimalQuantityLimit: '1.0-0',
    typeLimitsAccount: {
        deposit: '1',
        withdrawal: '2',
        depositAndWithdrawal: '3',
    },
    toastTimer: 5000,
    percentage: 100,
});


/***/ }),

/***/ "lua0":
/*!*****************************************************************************!*\
  !*** ./libs/features/paypal/src/presentation/pages/form/form.view-model.ts ***!
  \*****************************************************************************/
/*! exports provided: FormViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormViewModel", function() { return FormViewModel; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _nequi_utils_number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/utils/number */ "L2Ra");
/* harmony import */ var _form_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form.config */ "z8k3");



var FormViewModel = /** @class */ (function () {
    function FormViewModel() {
        this.economicActivityList = [];
        this.moneyRequested = 0;
        this.rate = 0;
        this.amountCOP = 0;
        this.commission = 0;
        this.totalTransaction = 0;
    }
    FormViewModel.prototype.buildForm = function () {
        this.createControls();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            economicActivity: this.economicActivityControl,
            amount: this.amountControl,
        });
        this.form.markAsPristine();
        this.form.markAsUntouched();
    };
    FormViewModel.prototype.buildItems = function (messages, currencyPipe) {
        return [
            {
                label: messages.totalAmount,
                value: currencyPipe.transform(this.totalTransaction),
                isMainValue: true,
            },
            {
                label: messages.moneyRequested,
                value: currencyPipe.transform(this.moneyRequested, '', _form_config__WEBPACK_IMPORTED_MODULE_2__["FormConfig"].dollarPrefix, '.00'),
            },
            {
                label: messages.exchangeRate.label,
                value: currencyPipe.transform(this.rate),
                description: messages.exchangeRate.info,
            },
            {
                label: messages.moneyRequestedPesos,
                value: currencyPipe.transform(this.amountCOP),
            },
            {
                label: messages.commission.label,
                value: currencyPipe.transform(this.commission),
                description: messages.commission.info,
            },
            {
                label: messages.economicActivity,
                value: this.transactionReason,
            },
        ];
    };
    FormViewModel.prototype.setMaxLimitTransfer = function (maxLimitTransfer, payPalBalance) {
        if (maxLimitTransfer > payPalBalance) {
            this.maxAmount = payPalBalance;
            return;
        }
        this.maxAmount = maxLimitTransfer;
    };
    FormViewModel.prototype.setTransactionReason = function (textBaseKey, translatePipe) {
        this.transactionReason = translatePipe.transform(textBaseKey, {
            economicActivity: this.economicActivityControl.value.description,
            formValue: this.economicActivityControl.value.form,
            formNumber: this.economicActivityControl.value.exchangeNumber,
        });
    };
    FormViewModel.prototype.setZeroValues = function () {
        this.amountCOP = 0;
        this.commission = 0;
        this.totalTransaction = 0;
    };
    FormViewModel.prototype.updateRecharges = function (recharges) {
        this.moneyRequested = recharges.originalAmount;
        this.totalTransaction = recharges.totalAmount;
        this.amountCOP = recharges.amount;
        this.commission = this.getNegativeCommission(recharges.totalFeeAndTax);
        this.rate = recharges.rate;
    };
    FormViewModel.prototype.getNegativeCommission = function (feeValue) {
        return Object(_nequi_utils_number__WEBPACK_IMPORTED_MODULE_1__["roundNumber"])(feeValue, _form_config__WEBPACK_IMPORTED_MODULE_2__["FormConfig"].balance.currency.decimalsToRound) * -1;
    };
    FormViewModel.prototype.createControls = function () {
        this.economicActivityControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]);
        this.amountControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(1),
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].max(this.maxAmount),
        ]);
    };
    return FormViewModel;
}());



/***/ }),

/***/ "nswd":
/*!****************************************************************************************************************************!*\
  !*** ./libs/features/send/src/presentation/other-bank/pages/send-other-bank-without-id/send-other-bank-without-id.page.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: SendOtherBankWithoutIdPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendOtherBankWithoutIdPage", function() { return SendOtherBankWithoutIdPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_commons_exceptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/commons/exceptions */ "0sJq");
/* harmony import */ var _nequi_features_application_data_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/application-data/core */ "UgzZ");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nequi/features/money-management/presentation */ "JFCQ");
/* harmony import */ var _nequi_features_send_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nequi/features/send/config */ "XAmg");
/* harmony import */ var _nequi_features_send_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nequi/features/send/core */ "mumb");
/* harmony import */ var _nequi_utils_date__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @nequi/utils/date */ "tGfC");
/* harmony import */ var _nequi_utils_string__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @nequi/utils/string */ "p6rB");
/* harmony import */ var _send_money_other_bank_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../send-money-other-bank.config */ "M5Iz");
/* harmony import */ var _services_load_favorite_account_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/load-favorite-account.service */ "dbmG");
/* harmony import */ var _mappers_send_money_other_bank_mapper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./mappers/send-money-other-bank.mapper */ "BBqN");
/* harmony import */ var _send_other_bank_without_id_config__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./send-other-bank-without-id.config */ "RJv0");
/* harmony import */ var _send_other_bank_without_id_view_model__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./send-other-bank-without-id.view-model */ "sTMj");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _money_management_src_presentation_components_balance_header_balance_header_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../../money-management/src/presentation/components/balance-header/balance-header.component */ "1rl1");
/* harmony import */ var _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../../../ui/src/lib/directives/animate-title-on-scroll/animate-title-on-scroll.directive */ "qbWi");
/* harmony import */ var _ui_src_lib_directives_form_content_style_form_content_style_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../../../../ui/src/lib/directives/form-content-style/form-content-style.directive */ "+XT3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ui_src_lib_directives_control_errors_control_errors_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../../../../ui/src/lib/directives/control-errors/control-errors.directive */ "XHcO");
/* harmony import */ var _ui_src_lib_directives_input_trim_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../../../../ui/src/lib/directives/input/trim.directive */ "nZkk");
/* harmony import */ var _ui_src_lib_controls_input_select_input_select_control_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../../../../ui/src/lib/controls/input-select/input-select-control.component */ "BMu5");
/* harmony import */ var _ui_src_lib_controls_nequi_input_currency_nequi_input_currency_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../../../../ui/src/lib/controls/nequi-input-currency/nequi-input-currency.component */ "VG0r");
/* harmony import */ var _money_management_src_presentation_controls_origin_money_control_origin_money_control_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../../../../money-management/src/presentation/controls/origin-money-control/origin-money-control.component */ "O3Yd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");







































var _c0 = function (a0, a1) { return { control: a0, messages: a1 }; };
var _c1 = function (a0, a1, a2) { return { required: a0, pattern: a1, invalidAccountLength: a2 }; };
var _c2 = function (a0, a1, a2) { return { required: a0, min: a1, max: a2 }; };
function SendOtherBankWithoutIdPage_form_18_Template(rf, ctx) { if (rf & 1) {
    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-list", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("focusout", function SendOtherBankWithoutIdPage_form_18_Template_ion_input_focusout_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.onBlur(); })("ionFocus", function SendOtherBankWithoutIdPage_form_18_Template_ion_input_ionFocus_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); ctx_r3.viewModel.nameControl.markAsUntouched(); return ctx_r3.viewModel.nameControl.markAsPristine(); })("ionChange", function SendOtherBankWithoutIdPage_form_18_Template_ion_input_ionChange_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.viewModel.normalizeNameData(ctx_r4.viewModel.nameControl); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "nequi-input-select-control", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selected", function SendOtherBankWithoutIdPage_form_18_Template_nequi_input_select_control_selected_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.bankSelected($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "nequi-input-select-control", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selected", function SendOtherBankWithoutIdPage_form_18_Template_nequi_input_select_control_selected_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.accountSelected($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ion-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "ion-label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "ion-input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ionFocus", function SendOtherBankWithoutIdPage_form_18_Template_ion_input_ionFocus_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); ctx_r7.viewModel.accountNumberControl.markAsUntouched(); return ctx_r7.viewModel.accountNumberControl.markAsPristine(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "ion-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "ion-label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "nequi-input-currency", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "ion-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "ion-label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](32, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "ion-textarea", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "ion-item", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "ion-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](38, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "ion-toggle", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "ion-item", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "ion-label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](43, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "nequi-origin-money-control", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](45, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.viewModel.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nequiControlErrors", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](66, _c0, ctx_r0.viewModel.nameControl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 32, "validators.general")));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 34, "cashout.send-banks.name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r0.viewModel.nameControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 36, "cashout.send-banks.bank"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r0.viewModel.bankControl)("options", ctx_r0.getBankList.bind(ctx_r0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 38, "cashout.send-banks.accountType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r0.viewModel.accountTypeControl)("isDisabled", !ctx_r0.viewModel.form.value.bank)("options", ctx_r0.accountTypes)("hideFilter", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nequiControlErrors", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](73, _c0, ctx_r0.viewModel.accountNumberControl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](69, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 40, "validators.general.required"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 42, "validators.general.pattern"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 44, "cashout.send-banks.invalid-account-length"))));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](18, 46, "cashout.send-banks.accountNumber"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r0.viewModel.accountNumberControl)("disabled", !ctx_r0.viewModel.form.value.bank || !ctx_r0.viewModel.form.value.accountType);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nequiControlErrors", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](80, _c0, ctx_r0.viewModel.amountControl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](76, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](21, 48, "validators.general.required"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](22, 50, "cashout.send-banks.validations.amount.min"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](23, 52, "cashout.send-banks.validations.amount.max"))));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](26, 54, "cashout.send-banks.amount"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("control", ctx_r0.viewModel.amountControl)("allowNegative", false)("decimalLimit", ctx_r0.config.accountNumberDecimalLimit);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nequiControlErrors", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](83, _c0, ctx_r0.viewModel.messageControl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](29, 56, "cashout.send-money-user.inputs.message.errors")));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](32, 58, "cashout.send-money-user.inputs.message.placeholder"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r0.viewModel.messageControl)("maxlength", ctx_r0.config.messageMaxLength);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](38, 60, "cashout.send-banks.rememberInFavorites"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r0.viewModel.form.invalid && !ctx_r0.viewModel.favoriteLoaded)("formControl", ctx_r0.viewModel.isFavoriteControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](43, 62, "cashout.send-banks.originMoney"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r0.viewModel.pocketControl)("minAmount", ctx_r0.viewModel.form.value.amount)("title", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](45, 64, "cashout.send-banks.originMoney"));
} }
var SendOtherBankWithoutIdPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SendOtherBankWithoutIdPage, _super);
    function SendOtherBankWithoutIdPage(bankInteractor, feeInteractor, currencyPipe, loadFavoriteAccountService, sendInteractor, router, route, analyticsInteractor, moduleConfigProvider, sendConfigProvider, applicationDataInteractor, datePipe, injector) {
        var _this = _super.call(this, injector) || this;
        _this.bankInteractor = bankInteractor;
        _this.feeInteractor = feeInteractor;
        _this.currencyPipe = currencyPipe;
        _this.loadFavoriteAccountService = loadFavoriteAccountService;
        _this.sendInteractor = sendInteractor;
        _this.router = router;
        _this.route = route;
        _this.analyticsInteractor = analyticsInteractor;
        _this.moduleConfigProvider = moduleConfigProvider;
        _this.sendConfigProvider = sendConfigProvider;
        _this.applicationDataInteractor = applicationDataInteractor;
        _this.datePipe = datePipe;
        _this.viewModel = new _send_other_bank_without_id_view_model__WEBPACK_IMPORTED_MODULE_18__["SendOtherBankWithoutIdViewModel"]();
        _this.balanceToogle = false;
        _this.translateProvider.loadModule(_this.moduleConfigProvider.i18n.moduleKey);
        return _this;
    }
    Object.defineProperty(SendOtherBankWithoutIdPage.prototype, "accountTypes", {
        get: function () {
            var _a, _b;
            return ((_b = (_a = this.viewModel.bankControl) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.accountTypes) || [];
        },
        enumerable: false,
        configurable: true
    });
    SendOtherBankWithoutIdPage.prototype.ngOnInit = function () {
        var _a, _b, _c, _d;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var pocket;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_e) {
                pocket = (_a = this.router.getCurrentNavigation().extras.state) === null || _a === void 0 ? void 0 : _a.pocket;
                this.config = this.sendConfigProvider.sendOtherBankConfig;
                this.viewModel.setConfig(this.config);
                this.viewModel.buildForm(pocket);
                this.showSnackbarFirstTime();
                this.checkLoadFavorite();
                this.favoriteSubscription$ = (_d = (_c = (_b = this.viewModel.isFavoriteControl) === null || _b === void 0 ? void 0 : _b.valueChanges) === null || _c === void 0 ? void 0 : _c.subscribe) === null || _d === void 0 ? void 0 : _d.call(_c, function (value) {
                    _this.onFavoriteToggleChange(value);
                });
                return [2 /*return*/];
            });
        });
    };
    SendOtherBankWithoutIdPage.prototype.ngOnDestroy = function () {
        var _a;
        this.viewModel.favoriteAccountSubscription.unsubscribe();
        (_a = this.favoriteSubscription$) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        this.viewModel.destroy();
    };
    SendOtherBankWithoutIdPage.prototype.onBlur = function () {
        this.viewModel.onBlur();
    };
    SendOtherBankWithoutIdPage.prototype.goBack = function () {
        this.navigatorProvider.back();
    };
    SendOtherBankWithoutIdPage.prototype.bankSelected = function (bank) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.viewModel.accountTypeControl.reset();
                        this.viewModel.accountNumberControl.reset();
                        return [4 /*yield*/, this.getFee(bank)];
                    case 1:
                        _a.sent();
                        this.showCostAndDateToSendMoneyNotification(bank);
                        return [2 /*return*/];
                }
            });
        });
    };
    SendOtherBankWithoutIdPage.prototype.accountSelected = function (accountSelected) {
        this.viewModel.updateAmountControlValidators(accountSelected.attributes);
    };
    SendOtherBankWithoutIdPage.prototype.onFavoriteToggleChange = function (value) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var message;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(value && !this.viewModel.favoriteLoaded)) return [3 /*break*/, 2];
                        message = this.translateProvider.get(_send_money_other_bank_config__WEBPACK_IMPORTED_MODULE_14__["SendMoneyOtherBankConfig"].i18n.favoriteActivated);
                        return [4 /*yield*/, this.toastService.showSuccess(message)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!value && this.viewModel.favoriteLoaded && this.viewModel.isSameAccount) {
                            this.showConfirmDeleteFavoriteAlert();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SendOtherBankWithoutIdPage.prototype.goToFavoriteAccount = function () {
        this.navigatorProvider.navigateForward(_send_money_other_bank_config__WEBPACK_IMPORTED_MODULE_14__["SendMoneyOtherBankConfig"].favoriteAccountsUrl);
    };
    SendOtherBankWithoutIdPage.prototype.sendMoney = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var nextAvailableDay, applicationDate, transaction;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                nextAvailableDay = Object(_nequi_utils_date__WEBPACK_IMPORTED_MODULE_12__["getNextAvailableDay"])(new Date(), this.config.lastAvailableHour);
                applicationDate = this.datePipe.transform(nextAvailableDay, _send_other_bank_without_id_config__WEBPACK_IMPORTED_MODULE_17__["SendOtherBankWithoutIdConfig"].formatApplicationDate);
                transaction = new _nequi_features_send_core__WEBPACK_IMPORTED_MODULE_11__["SendMoneyOtherBankTransaction"]()
                    .withAmount(this.viewModel.form.value.amount)
                    .withData(new _mappers_send_money_other_bank_mapper__WEBPACK_IMPORTED_MODULE_16__["SendMoneyOtherBankMapper"]().from(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.viewModel.form.value), { applicationDate: applicationDate })))
                    .withPocket(this.viewModel.form.value.pocket);
                _super.prototype.executeTransaction.call(this, transaction);
                return [2 /*return*/];
            });
        });
    };
    SendOtherBankWithoutIdPage.prototype.getBankList = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, this.bankInteractor.getList()];
            });
        });
    };
    SendOtherBankWithoutIdPage.prototype.getConfirmationInfo = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                messages = this.translateProvider.get(_send_money_other_bank_config__WEBPACK_IMPORTED_MODULE_14__["SendMoneyOtherBankConfig"].i18n.confirmation);
                return [2 /*return*/, {
                        title: messages.title,
                        items: this.viewModel.buildArrayConfirmationItems(messages, this.currencyPipe),
                        confirmLabel: messages.buttons.confirm,
                        cancelLabel: messages.buttons.cancel,
                        viewCancel: false,
                    }];
            });
        });
    };
    SendOtherBankWithoutIdPage.prototype.setOriginMoney = function (transaction) {
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
    SendOtherBankWithoutIdPage.prototype.onTransactionSuccess = function (_response, transaction) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var message;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        message = this.translateProvider.get(_send_money_other_bank_config__WEBPACK_IMPORTED_MODULE_14__["SendMoneyOtherBankConfig"].i18n.success);
                        this.setAnalytics();
                        return [4 /*yield*/, this.toastService.showSuccess(message)];
                    case 1:
                        _a.sent();
                        this.navigatorProvider.navigateForward([_send_money_other_bank_config__WEBPACK_IMPORTED_MODULE_14__["SendMoneyOtherBankConfig"].routes.detail], {
                            state: transaction,
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SendOtherBankWithoutIdPage.prototype.onTransactionFailed = function (error) {
        var _a, _b, _c, _d;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages, alertOptions;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_e) {
                if (error instanceof _nequi_commons_exceptions__WEBPACK_IMPORTED_MODULE_4__["ExceedCeilingException"] ||
                    _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_7__["NOT_BALANCE_AVAILABLE_ERRORS"].includes(error.code)) {
                    throw error;
                }
                messages = this.translateProvider.get((_a = _send_money_other_bank_config__WEBPACK_IMPORTED_MODULE_14__["SendMoneyOtherBankConfig"].errorMessages[error.code]) !== null && _a !== void 0 ? _a : _send_money_other_bank_config__WEBPACK_IMPORTED_MODULE_14__["SendMoneyOtherBankConfig"].i18n.errorDefault);
                alertOptions = {
                    messages: {
                        header: messages.title,
                        message: ((_b = error === null || error === void 0 ? void 0 : error.data) === null || _b === void 0 ? void 0 : _b.balance) ? Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_13__["createFormat"])(messages.content, [String(error.data.balance)])
                            : messages.content,
                        buttons: {
                            accept: (_c = messages.buttons) === null || _c === void 0 ? void 0 : _c.okButton,
                            cancel: (_d = messages.buttons) === null || _d === void 0 ? void 0 : _d.cancelButton,
                        },
                    },
                };
                this.alertService.show(alertOptions);
                return [2 /*return*/];
            });
        });
    };
    SendOtherBankWithoutIdPage.prototype.getFee = function (bank) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var response, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.feeInteractor.get({
                                feeType: _nequi_features_send_core__WEBPACK_IMPORTED_MODULE_11__["FeeTypes"].OTHER_BANKS,
                                achCode: bank.achCode,
                            })];
                    case 1:
                        response = _a.sent();
                        this.commission = response.totalCommission;
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        if (bank.id === this.config.localBank) {
                            this.commission = 0;
                        }
                        else {
                            this.commission = this.config.defaultCommission;
                        }
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SendOtherBankWithoutIdPage.prototype.showCostAndDateToSendMoneyNotification = function (bank) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var message, nextAvailableDay;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        message = '';
                        if (!(bank.id === this.config.localBank)) return [3 /*break*/, 2];
                        message = this.translateProvider.get(_send_money_other_bank_config__WEBPACK_IMPORTED_MODULE_14__["SendMoneyOtherBankConfig"].i18n.sendToLocalBank);
                        return [4 /*yield*/, this.toastService.showInfo(message)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                    case 2:
                        nextAvailableDay = Object(_nequi_utils_date__WEBPACK_IMPORTED_MODULE_12__["getNextAvailableDay"])(new Date(), this.config.lastAvailableHour);
                        if (!Object(_nequi_utils_date__WEBPACK_IMPORTED_MODULE_12__["isToday"])(nextAvailableDay)) return [3 /*break*/, 4];
                        message = this.translateProvider.get(_send_money_other_bank_config__WEBPACK_IMPORTED_MODULE_14__["SendMoneyOtherBankConfig"].i18n.sendToday);
                        return [4 /*yield*/, this.toastService.showInfo(message)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                    case 4:
                        if (Object(_nequi_utils_date__WEBPACK_IMPORTED_MODULE_12__["isTomorrow"])(nextAvailableDay)) {
                            message = this.translateProvider.get(_send_money_other_bank_config__WEBPACK_IMPORTED_MODULE_14__["SendMoneyOtherBankConfig"].i18n.sendTomorrow);
                        }
                        else {
                            message = this.translateProvider.get(_send_money_other_bank_config__WEBPACK_IMPORTED_MODULE_14__["SendMoneyOtherBankConfig"].i18n.sendNextAvailableDay);
                        }
                        return [4 /*yield*/, this.toastService.showInfo(message)];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SendOtherBankWithoutIdPage.prototype.checkLoadFavorite = function () {
        var _this = this;
        this.viewModel.favoriteAccountSubscription = this.loadFavoriteAccountService.favoriteAccount$.subscribe(function (favorite) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.viewModel.setFavorite(favorite);
                        return [4 /*yield*/, this.getFee(favorite.bank)];
                    case 1:
                        _a.sent();
                        this.showCostAndDateToSendMoneyNotification(favorite.bank);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    SendOtherBankWithoutIdPage.prototype.showConfirmDeleteFavoriteAlert = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (this.viewModel.favoriteLoaded) {
                    this.alertService.showByI18n({
                        i18nKey: _send_money_other_bank_config__WEBPACK_IMPORTED_MODULE_14__["SendMoneyOtherBankConfig"].i18n.confirmDeleteFavorite,
                        handlers: {
                            accept: function () { return _this.deleteFavorite(); },
                            cancel: function () { return _this.viewModel.isFavoriteControl.setValue(true); },
                        },
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    SendOtherBankWithoutIdPage.prototype.deleteFavorite = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var error_2;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.loadingService.show()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.sendInteractor.deleteFavorite({
                                beneficiaryDocument: {
                                    id: this.viewModel.favoriteLoaded.beneficiaryDocument.id,
                                    type: this.viewModel.favoriteLoaded.beneficiaryDocument.type,
                                },
                                destinationAccount: this.viewModel.favoriteLoaded.destination.account,
                            })];
                    case 2:
                        _a.sent();
                        this.viewModel.favoriteLoaded = null;
                        this.loadingService.hide(true);
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        this.loadingService.hide(false);
                        this.showErrorDeletingFavoriteAlert();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SendOtherBankWithoutIdPage.prototype.showErrorDeletingFavoriteAlert = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertService.showByI18n({
                            i18nKey: _send_money_other_bank_config__WEBPACK_IMPORTED_MODULE_14__["SendMoneyOtherBankConfig"].i18n.errorDeletingFavorite,
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SendOtherBankWithoutIdPage.prototype.setAnalytics = function () {
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_7__["AnalyticsType"].FACEBOOK,
            params: {
                eventName: _send_money_other_bank_config__WEBPACK_IMPORTED_MODULE_14__["SendMoneyOtherBankConfig"].analytics.events.successfulMoneySendingToOtherBank,
            },
        });
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_7__["AnalyticsType"].FACEBOOK,
            params: { eventName: _send_money_other_bank_config__WEBPACK_IMPORTED_MODULE_14__["SendMoneyOtherBankConfig"].analytics.events.facebookMobilePurchase },
        });
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_7__["AnalyticsType"].FIREBASE,
            params: {
                eventName: _send_money_other_bank_config__WEBPACK_IMPORTED_MODULE_14__["SendMoneyOtherBankConfig"].analytics.events.successfulMoneySendingToOtherBank,
            },
        });
    };
    SendOtherBankWithoutIdPage.prototype.showSnackbarFirstTime = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var canShow, message;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.applicationDataInteractor.findValue(this.moduleConfigProvider.applicationData.sendOtherBankPaToastFirstTime, true)];
                    case 1:
                        canShow = _a.sent();
                        if (!canShow) return [3 /*break*/, 4];
                        message = this.translateProvider.get(_send_other_bank_without_id_config__WEBPACK_IMPORTED_MODULE_17__["SendOtherBankWithoutIdConfig"].i18n.snackbar.firstTime);
                        return [4 /*yield*/, this.toastService.showInfo(Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_13__["createFormat"])(message, [_send_other_bank_without_id_config__WEBPACK_IMPORTED_MODULE_17__["SendOtherBankWithoutIdConfig"].firstCommissionOfTheYear]))];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.applicationDataInteractor.save(this.moduleConfigProvider.applicationData.sendOtherBankPaToastFirstTime, false)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SendOtherBankWithoutIdPage.ɵfac = function SendOtherBankWithoutIdPage_Factory(t) { return new (t || SendOtherBankWithoutIdPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_send_core__WEBPACK_IMPORTED_MODULE_11__["BankInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_send_core__WEBPACK_IMPORTED_MODULE_11__["FeeInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_load_favorite_account_service__WEBPACK_IMPORTED_MODULE_15__["LoadFavoriteAccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_send_core__WEBPACK_IMPORTED_MODULE_11__["SendInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_7__["AnalyticsInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_6__["ModuleConfigProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_send_config__WEBPACK_IMPORTED_MODULE_10__["SendConfigProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_application_data_core__WEBPACK_IMPORTED_MODULE_5__["ApplicationDataInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"])); };
    SendOtherBankWithoutIdPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SendOtherBankWithoutIdPage, selectors: [["app-send-mony-other-bank"]], viewQuery: function SendOtherBankWithoutIdPage_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_9__["OriginMoneyControlComponent"], 1);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.originMoneyControl = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 24, vars: 14, consts: [[1, "nequi-header", "nequi-header--white"], ["slot", "start"], [3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], [1, "nequi-header__title", "ion-text-start"], ["slot", "end"], ["name", "star-outline", "slot", "start"], ["slot", "icon-only", 3, "name"], [3, "isDarkTheme", "isShow"], ["fullscreen", "true", "scrollEvents", "true", "appAnimateTitleOnScroll", "", "appFormContentStyle", "", 1, "ion-padding-horizontal", "ion-content--white"], [1, "nequi-title"], ["class", "form", 3, "formGroup", 4, "ngIf"], [1, "nequi-footer"], ["shape", "round", "expand", "block", "color", "guayaba", 1, "margin-vertical-16", 3, "disabled", "click"], [1, "form", 3, "formGroup"], [1, "form__list"], [1, "nequi-item", "margin-bottom-8", 3, "nequiControlErrors"], ["position", "floating", 1, "nequi-item__label"], ["type", "text", "trim", "", 1, "nequi-item__input", 3, "formControl", "focusout", "ionFocus", "ionChange"], ["visibleKey", "name", 3, "formControl", "label", "options", "selected"], ["visibleKey", "description", 3, "formControl", "isDisabled", "label", "options", "hideFilter", "selected"], ["type", "tel", 1, "nequi-item__input", 3, "formControl", "disabled", "ionFocus"], ["tooltipType", "error", "inputClass", "nequi-item__input", 1, "sc-ion-input-ios-h", 3, "control", "allowNegative", "decimalLimit"], ["rows", "3", "inputmode", "text", "autocapitalize", "sentences", "trim", "", 1, "nequi-item__text-area", 3, "formControl", "maxlength"], ["lines", "none", 1, "form__list__favorite", "margin-bottom-8", "margin-horizontal-8"], ["slot", "end", 1, "nequi-item__toggle", 3, "disabled", "formControl"], ["lines", "none", 1, "ion-no-padding", "nequi-item-no-background", "nequi-item-no-lines"], [1, "form__list__pocket-label"], [1, "margin-bottom-8", 3, "formControl", "minAmount", "title"]], template: function SendOtherBankWithoutIdPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SendOtherBankWithoutIdPage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-title", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-buttons", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SendOtherBankWithoutIdPage_Template_ion_button_click_9_listener() { return ctx.goToFavoriteAccount(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "ion-icon", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SendOtherBankWithoutIdPage_Template_ion_button_click_11_listener() { return ctx.balanceToogle = !ctx.balanceToogle; });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "ion-icon", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "app-balance-header", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-content", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ion-text", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, SendOtherBankWithoutIdPage_form_18_Template, 46, 86, "form", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "ion-footer", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "ion-button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SendOtherBankWithoutIdPage_Template_ion_button_click_21_listener() { return ctx.sendMoney(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 8, "cashout.send-banks.title"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("name", ctx.balanceToogle ? "chevron-up-outline" : "chevron-down-outline");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("isDarkTheme", false)("isShow", ctx.balanceToogle);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 10, "cashout.send-banks.title"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.viewModel.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.viewModel.form.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](23, 12, "cashout.send-banks.ready"));
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_19__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_19__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_19__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_19__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_19__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_19__["IonTitle"], _money_management_src_presentation_components_balance_header_balance_header_component__WEBPACK_IMPORTED_MODULE_20__["BalanceHeaderComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_19__["IonContent"], _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_21__["AnimateTitleOnScrollDirective"], _ui_src_lib_directives_form_content_style_form_content_style_directive__WEBPACK_IMPORTED_MODULE_22__["FormContentStyleDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_19__["IonText"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_19__["IonFooter"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_19__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_19__["IonItem"], _ui_src_lib_directives_control_errors_control_errors_directive__WEBPACK_IMPORTED_MODULE_24__["ControlErrorsDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_19__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_19__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_19__["TextValueAccessor"], _ui_src_lib_directives_input_trim_directive__WEBPACK_IMPORTED_MODULE_25__["InputTrimDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormControlDirective"], _ui_src_lib_controls_input_select_input_select_control_component__WEBPACK_IMPORTED_MODULE_26__["InputSelectControlComponent"], _ui_src_lib_controls_nequi_input_currency_nequi_input_currency_component__WEBPACK_IMPORTED_MODULE_27__["NequiInputCurrencyComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_19__["IonTextarea"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["MaxLengthValidator"], _ionic_angular__WEBPACK_IMPORTED_MODULE_19__["IonToggle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_19__["BooleanValueAccessor"], _money_management_src_presentation_controls_origin_money_control_origin_money_control_component__WEBPACK_IMPORTED_MODULE_28__["OriginMoneyControlComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__["TranslatePipe"]], styles: [".form__list[_ngcontent-%COMP%] {\n  background: transparent;\n}\n.form__list__favorite[_ngcontent-%COMP%] {\n  border: 1px solid rgba(151, 151, 151, 0.04);\n  box-shadow: 0px 1px 1px rgba(60, 133, 127, 0.15);\n  border-radius: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvc2VuZC1vdGhlci1iYW5rLXdpdGhvdXQtaWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsdUJBQUE7QUFBSjtBQUVJO0VBQ0UsMkNBQUE7RUFDQSxnREFBQTtFQUNBLGtCQUFBO0FBQU4iLCJmaWxlIjoic2VuZC1vdGhlci1iYW5rLXdpdGhvdXQtaWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0ge1xuICAmX19saXN0IHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuICAgICZfX2Zhdm9yaXRlIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTUxLCAxNTEsIDE1MSwgMC4wNCk7XG4gICAgICBib3gtc2hhZG93OiAwcHggMXB4IDFweCByZ2JhKDYwLCAxMzMsIDEyNywgMC4xNSk7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
    return SendOtherBankWithoutIdPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_8__["TransactionBasePage"]));



/***/ }),

/***/ "ntor":
/*!*******************************************************************************************!*\
  !*** ./libs/features/send/src/presentation/nequi/pages/send-from-qr/send-from-qr.page.ts ***!
  \*******************************************************************************************/
/*! exports provided: SendFromQrPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendFromQrPage", function() { return SendFromQrPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_features_contacts_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/contacts/core */ "Zcn6");
/* harmony import */ var _nequi_utils_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/utils/types */ "UE8s");
/* harmony import */ var _send_from_qr_view_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./send-from-qr-view.model */ "Oo3T");
/* harmony import */ var _send_from_qr_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./send-from-qr.config */ "LTAK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ui_src_lib_directives_form_content_style_form_content_style_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../ui/src/lib/directives/form-content-style/form-content-style.directive */ "+XT3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _contacts_src_presentation_controls_contact_control_contact_selector_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../contacts/src/presentation/controls/contact-control/contact-selector.component */ "2MVS");
/* harmony import */ var _ui_src_lib_directives_control_errors_control_errors_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../../ui/src/lib/directives/control-errors/control-errors.directive */ "XHcO");
/* harmony import */ var _ui_src_lib_controls_nequi_input_currency_nequi_input_currency_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../../ui/src/lib/controls/nequi-input-currency/nequi-input-currency.component */ "VG0r");
/* harmony import */ var _ui_src_lib_directives_input_trim_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../../ui/src/lib/directives/input/trim.directive */ "nZkk");
/* harmony import */ var _money_management_src_presentation_controls_origin_money_control_origin_money_control_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../money-management/src/presentation/controls/origin-money-control/origin-money-control.component */ "O3Yd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
























var _c0 = function (a0, a1) { return { control: a0, messages: a1 }; };
function SendFromQrPage_form_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-contact-control", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "nequi-input-currency", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "ion-textarea", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-text", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "nequi-origin-money-control", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.viewModel.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 14, "cashout.send-money-user-from-qr.inputs.phone-number.placeholder"))("isEditable", false)("formControl", ctx_r0.viewModel.contact);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nequiControlErrors", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](26, _c0, ctx_r0.viewModel.amount, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 16, "cashout.send-money-user-from-qr.inputs.amount.errors")));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 18, "cashout.send-money-user-from-qr.inputs.amount.placeholder"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("control", ctx_r0.viewModel.amount)("allowNegative", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nequiControlErrors", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](29, _c0, ctx_r0.viewModel.message, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 20, "cashout.send-money-user-from-qr.inputs.message.errors")));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 22, "cashout.send-money-user-from-qr.inputs.message.placeholder"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r0.viewModel.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 24, "cashout.send-money-user-from-qr.inputs.pocket.placeholder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r0.viewModel.pocketControl)("minAmount", ctx_r0.minAmount);
} }
function SendFromQrPage_ion_text_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "cashout.send-money-user-from-qr.buttons.next"));
} }
function SendFromQrPage_ion_spinner_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-spinner", 21);
} }
var SendFromQrPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SendFromQrPage, _super);
    function SendFromQrPage(contactsInteractor, router, moduleConfigProvider, injector) {
        var _this = _super.call(this, injector) || this;
        _this.contactsInteractor = contactsInteractor;
        _this.router = router;
        _this.moduleConfigProvider = moduleConfigProvider;
        _this.viewModel = new _send_from_qr_view_model__WEBPACK_IMPORTED_MODULE_8__["SendFromQrViewModel"]();
        _this.config = _send_from_qr_config__WEBPACK_IMPORTED_MODULE_9__["SendFromQrConfig"];
        _this.translateProvider.loadModule(_this.moduleConfigProvider.i18n.moduleKey);
        return _this;
    }
    SendFromQrPage.prototype.ngOnInit = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var contact;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_l) {
                this.transactionInfo = (_a = this.router.getCurrentNavigation().extras) === null || _a === void 0 ? void 0 : _a.state;
                contact = {
                    phoneNumber: (_c = (_b = this.transactionInfo) === null || _b === void 0 ? void 0 : _b.contactInfo) === null || _c === void 0 ? void 0 : _c.phoneNumber,
                    firstName: (_e = (_d = this.transactionInfo) === null || _d === void 0 ? void 0 : _d.contactInfo) === null || _e === void 0 ? void 0 : _e.userName,
                    completeName: (_g = (_f = this.transactionInfo) === null || _f === void 0 ? void 0 : _f.contactInfo) === null || _g === void 0 ? void 0 : _g.userName,
                };
                this.viewModel.initForm(contact, (_h = this.transactionInfo) === null || _h === void 0 ? void 0 : _h.amount, (_j = this.transactionInfo) === null || _j === void 0 ? void 0 : _j.description, (_k = this.transactionInfo) === null || _k === void 0 ? void 0 : _k.pocket);
                return [2 /*return*/];
            });
        });
    };
    Object.defineProperty(SendFromQrPage.prototype, "minAmount", {
        get: function () {
            return this.viewModel.amount.value || 0;
        },
        enumerable: false,
        configurable: true
    });
    SendFromQrPage.prototype.onSendMoney = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var contact, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.viewModel.isLoading = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        return [4 /*yield*/, this.contactsInteractor.updateStatus([this.viewModel.contact.value])];
                    case 2:
                        contact = (_a.sent())[0];
                        if (!(contact === null || contact === void 0 ? void 0 : contact.isNequi)) return [3 /*break*/, 3];
                        this.sendMoney(contact);
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.noNequiAlert()];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_1 = _a.sent();
                        this.toastService.showError(error_1.message);
                        return [3 /*break*/, 7];
                    case 7:
                        this.viewModel.isLoading = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    SendFromQrPage.prototype.setOriginMoney = function (transaction) {
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
    SendFromQrPage.prototype.onTransactionSuccess = function (response, transaction) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!transaction.data.additionalInfo.contactInfo.isNequi) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.noNequiAlert()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                    case 2:
                        if (!Object(_nequi_utils_types__WEBPACK_IMPORTED_MODULE_7__["isTypeOf"])(response, ['reference', 'amount'])) return [3 /*break*/, 3];
                        this.navigatorProvider.navigateBack(this.config.routes.transactionDetail, {
                            state: {
                                response: response,
                                transaction: transaction,
                            },
                        });
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.navigatorProvider.navigateForward(this.config.routes.movements)];
                    case 4:
                        _a.sent();
                        this.toastService.showSuccess(this.translateProvider.get(this.config.i18n.successMessage));
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    SendFromQrPage.prototype.sendMoney = function (contact) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var transaction;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.transactionInfo.contactInfo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, contact);
                transaction = new _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__["PaymentTransaction"]()
                    .withAmount(this.viewModel.amount.value)
                    .withPocket(this.viewModel.form.value.pocket)
                    .withData({
                    merchant: {
                        name: contact.completeName,
                        code: '',
                    },
                    type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__["PaymentType"].QR,
                    additionalInfo: this.transactionInfo,
                });
                _super.prototype.executeTransaction.call(this, transaction);
                return [2 /*return*/];
            });
        });
    };
    SendFromQrPage.prototype.noNequiAlert = function () {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages, alertOptions;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                messages = this.translateProvider.get(this.config.i18n.noNequiAlert);
                alertOptions = {
                    messages: {
                        header: messages === null || messages === void 0 ? void 0 : messages.title,
                        message: messages === null || messages === void 0 ? void 0 : messages.content,
                        buttons: {
                            accept: (_a = messages.buttons) === null || _a === void 0 ? void 0 : _a.accept,
                        },
                    },
                };
                this.alertService.show(alertOptions);
                return [2 /*return*/];
            });
        });
    };
    SendFromQrPage.ɵfac = function SendFromQrPage_Factory(t) { return new (t || SendFromQrPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_contacts_core__WEBPACK_IMPORTED_MODULE_6__["ContactsInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_5__["ModuleConfigProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"])); };
    SendFromQrPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SendFromQrPage, selectors: [["app-send-money-user"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 15, vars: 7, consts: [[1, "nequi-header"], ["slot", "start"], ["id", "send-user-from-qr_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], ["fullscreen", "true", "appFormContentStyle", "", 1, "ion-padding-horizontal", "ion-content--white"], [1, "nequi-title"], ["class", "form", 3, "formGroup", 4, "ngIf"], [1, "nequi-footer"], ["id", "send-user-from-qr_next_button", "shape", "round", "color", "guayaba", "expand", "block", 1, "margin-vertical-16", 3, "disabled", "click"], [4, "ngIf"], ["name", "crescent", "color", "light", 4, "ngIf"], [1, "form", 3, "formGroup"], [3, "placeholder", "isEditable", "formControl"], [1, "nequi-item", "margin-bottom-8", 3, "nequiControlErrors"], ["position", "floating", 1, "goal-edit__label-amount", "nequi-item__label"], ["tooltipType", "error", "inputClass", "nequi-item__input", 1, "sc-ion-input-ios-h", 3, "control", "allowNegative"], [1, "nequi-item", 3, "nequiControlErrors"], ["position", "floating", 1, "nequi-item__label"], ["rows", "3", "trim", "", 1, "nequi-item__input", 3, "formControl"], ["color", "medium", 1, "margin-top-16"], [1, "margin-bottom-8", 3, "formControl", "minAmount"], ["name", "crescent", "color", "light"]], template: function SendFromQrPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SendFromQrPage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, SendFromQrPage_form_9_Template, 21, 32, "form", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-footer", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SendFromQrPage_Template_ion_button_click_12_listener() { return ctx.onSendMoney(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, SendFromQrPage_ion_text_13_Template, 3, 3, "ion-text", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, SendFromQrPage_ion_spinner_14_Template, 1, 0, "ion-spinner", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 5, "cashout.send-money-user-from-qr.title"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.viewModel.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.viewModel.form == null ? null : ctx.viewModel.form.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.viewModel.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.viewModel.isLoading);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonContent"], _ui_src_lib_directives_form_content_style_form_content_style_directive__WEBPACK_IMPORTED_MODULE_11__["FormContentStyleDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonText"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonFooter"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormGroupDirective"], _contacts_src_presentation_controls_contact_control_contact_selector_component__WEBPACK_IMPORTED_MODULE_14__["ContactControlComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormControlDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonItem"], _ui_src_lib_directives_control_errors_control_errors_directive__WEBPACK_IMPORTED_MODULE_15__["ControlErrorsDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonLabel"], _ui_src_lib_controls_nequi_input_currency_nequi_input_currency_component__WEBPACK_IMPORTED_MODULE_16__["NequiInputCurrencyComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonTextarea"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["TextValueAccessor"], _ui_src_lib_directives_input_trim_directive__WEBPACK_IMPORTED_MODULE_17__["InputTrimDirective"], _money_management_src_presentation_controls_origin_money_control_origin_money_control_component__WEBPACK_IMPORTED_MODULE_18__["OriginMoneyControlComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonSpinner"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZW5kLW1vbmV5LXVzZXIucGFnZS5zY3NzIn0= */"] });
    return SendFromQrPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_4__["TransactionBasePage"]));



/***/ }),

/***/ "oDJG":
/*!*********************************************************************************!*\
  !*** ./libs/features/paypal/src/presentation/middlewares/pay-pal.middleware.ts ***!
  \*********************************************************************************/
/*! exports provided: PaypalMiddleware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaypalMiddleware", function() { return PaypalMiddleware; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_application_data_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/application-data/core */ "UgzZ");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _pages_home_home_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/home/home.config */ "iYAC");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/account.service */ "9A31");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");












var PaypalMiddleware = /** @class */ (function () {
    function PaypalMiddleware(applicationDataInteractor, firstTimeMessageBottomSheetService, translateProvider, accountService, navigatorProvider, moduleConfigProvider) {
        this.applicationDataInteractor = applicationDataInteractor;
        this.firstTimeMessageBottomSheetService = firstTimeMessageBottomSheetService;
        this.translateProvider = translateProvider;
        this.accountService = accountService;
        this.navigatorProvider = navigatorProvider;
        this.moduleConfigProvider = moduleConfigProvider;
    }
    PaypalMiddleware.prototype.canActivate = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.translateProvider.loadModule(this.moduleConfigProvider.i18n.moduleKey)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.checkBottomSheetVisualization()];
                    case 2:
                        if (!_a.sent()) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.showBottomSheet()];
                    case 3:
                        data = (_a.sent()).data;
                        if (!data) {
                            return [2 /*return*/];
                        }
                        return [2 /*return*/, this.getUserStatus()];
                    case 4: return [2 /*return*/, this.getUserStatus()];
                }
            });
        });
    };
    PaypalMiddleware.prototype.getUserStatus = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.accountService.getUserStatus()];
                    case 1:
                        data = _a.sent();
                        if (data) {
                            this.accountService.userInfo = data;
                            this.navigatorProvider.navigateForward(_pages_home_home_config__WEBPACK_IMPORTED_MODULE_5__["HomeConfig"].routes.infoPage, {
                                state: { data: data },
                            });
                        }
                        return [2 /*return*/, false];
                }
            });
        });
    };
    PaypalMiddleware.prototype.checkBottomSheetVisualization = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var shouldNotShowFirstMessage;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.applicationDataInteractor.findValue(this.moduleConfigProvider.applicationData.paypalHomeIsShowFirstMessage, false)];
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
    PaypalMiddleware.prototype.showBottomSheet = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var bottomSheet;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                bottomSheet = this.translateProvider.get(_pages_home_home_config__WEBPACK_IMPORTED_MODULE_5__["HomeConfig"].i18n.bottomSheet.firstUsageMessage);
                return [2 /*return*/, this.firstTimeMessageBottomSheetService.show({
                        icon: bottomSheet.icon,
                        message: bottomSheet.message,
                        content: bottomSheet.content,
                        cssClass: _pages_home_home_config__WEBPACK_IMPORTED_MODULE_5__["HomeConfig"].bottomSheet.cssClass,
                        button: {
                            label: bottomSheet.button,
                            fill: _pages_home_home_config__WEBPACK_IMPORTED_MODULE_5__["HomeConfig"].bottomSheet.button.fill,
                            color: _pages_home_home_config__WEBPACK_IMPORTED_MODULE_5__["HomeConfig"].bottomSheet.button.color,
                            action: function () { return _this.hideBottomSheet(true); },
                        },
                        header: {
                            view: true,
                            action: function () { return _this.hideBottomSheet(false); },
                        },
                    })];
            });
        });
    };
    PaypalMiddleware.prototype.hideBottomSheet = function (canNavigate) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.applicationDataInteractor.save(this.moduleConfigProvider.applicationData.paypalHomeIsShowFirstMessage, true)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.firstTimeMessageBottomSheetService.hide(canNavigate)];
                }
            });
        });
    };
    PaypalMiddleware.ɵfac = function PaypalMiddleware_Factory(t) { return new (t || PaypalMiddleware)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_nequi_features_application_data_core__WEBPACK_IMPORTED_MODULE_2__["ApplicationDataInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_4__["FirstTimeMessageBottomSheetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_3__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_services_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_3__["NavigatorProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_3__["ModuleConfigProvider"])); };
    PaypalMiddleware.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: PaypalMiddleware, factory: PaypalMiddleware.ɵfac });
    return PaypalMiddleware;
}());



/***/ }),

/***/ "p4gF":
/*!*******************************************************************************************************!*\
  !*** ./libs/features/send/src/presentation/nequi/pages/transaction-detail/transaction-detail.page.ts ***!
  \*******************************************************************************************************/
/*! exports provided: TransactionDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionDetailPage", function() { return TransactionDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _send_money_user_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../send-money-user.config */ "KnaW");
/* harmony import */ var _detail_share_options__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./detail-share.options */ "C5gY");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ui_src_lib_components_view_detail_view_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../ui/src/lib/components/view-detail/view-detail.component */ "yT3N");
/* harmony import */ var _money_management_src_presentation_components_origin_money_card_origin_money_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../money-management/src/presentation/components/origin-money-card/origin-money-card.component */ "VUO8");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");



















var TransactionDetailPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TransactionDetailPage, _super);
    function TransactionDetailPage(injector, router, translateProvider, simpleListBottomSheetService, currencyPipe, toastService) {
        var _this = _super.call(this, injector) || this;
        _this.router = router;
        _this.translateProvider = translateProvider;
        _this.simpleListBottomSheetService = simpleListBottomSheetService;
        _this.currencyPipe = currencyPipe;
        _this.toastService = toastService;
        _this.showToastComponent = true;
        _this.messages = Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_7__["toCamelCaseProperties"])(_this.translateProvider.get(_send_money_user_config__WEBPACK_IMPORTED_MODULE_8__["SendMoneyUserConfig"].labels.fieldLabels));
        return _this;
    }
    Object.defineProperty(TransactionDetailPage.prototype, "status", {
        get: function () {
            return _nequi_ui__WEBPACK_IMPORTED_MODULE_6__["ViewDetailStatus"].RED;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransactionDetailPage.prototype, "icon", {
        get: function () {
            return _nequi_ui__WEBPACK_IMPORTED_MODULE_6__["ViewDetailIconType"].ARROW_DOWN;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransactionDetailPage.prototype, "details", {
        get: function () {
            var dateFormat = {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
            };
            var items = [
                { label: this.messages.for, description: this.transaction.destination },
                {
                    label: this.messages.reference,
                    description: this.transaction.reference,
                },
                { label: this.messages.phoneNumber, description: this.transaction.phoneNumberDestination },
                {
                    label: this.messages.date,
                    description: this.transaction.date.toLocaleDateString('es-CO', dateFormat),
                },
                {
                    label: this.messages.amount,
                    description: this.currencyPipe.transform(this.transaction.amount),
                },
            ];
            if (this.transaction.message) {
                items.push({
                    label: this.messages.message,
                    description: this.transaction.message.includes('{@RM/}')
                        ? this.transaction.message.split('{@RM/}')[0]
                        : this.transaction.message,
                });
            }
            return items;
        },
        enumerable: false,
        configurable: true
    });
    TransactionDetailPage.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.transaction = this.router.getCurrentNavigation().extras.state
                            .response;
                        this.availablePocket = this.router.getCurrentNavigation().extras.state.transaction.pocket;
                        this.availablePocket.amount = this.transaction.amount;
                        return [4 /*yield*/, this.toastService.showInfo(_send_money_user_config__WEBPACK_IMPORTED_MODULE_8__["SendMoneyUserConfig"].toast.toastInformation)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TransactionDetailPage.prototype.goBack = function () {
        this.accept();
    };
    TransactionDetailPage.prototype.accept = function () {
        this.navigatorProvider.navigateBack(_send_money_user_config__WEBPACK_IMPORTED_MODULE_8__["SendMoneyUserConfig"].routes.admin);
    };
    TransactionDetailPage.prototype.openShareOptions = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var optionsBottomSheet, actions;
            var _a;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                optionsBottomSheet = _send_money_user_config__WEBPACK_IMPORTED_MODULE_8__["SendMoneyUserConfig"].detailShareOptions;
                actions = (_a = {},
                    _a[_detail_share_options__WEBPACK_IMPORTED_MODULE_9__["DetailShareOptions"].SHOW_RECEIPT] = function () {
                        _this.showReceipt(false);
                    },
                    _a[_detail_share_options__WEBPACK_IMPORTED_MODULE_9__["DetailShareOptions"].SEND_VIA_EMAIL] = function () {
                        _this.showReceipt(true);
                    },
                    _a);
                this.showSimpleListBottomSheet({ items: optionsBottomSheet, actions: actions });
                return [2 /*return*/];
            });
        });
    };
    TransactionDetailPage.prototype.showReceipt = function (isSharingViaEmail) {
        var movement = {
            amount: this.transaction.amount,
            createdAt: this.transaction.date,
            transactionId: this.transaction.reference,
            subject: this.transaction.message,
            title: this.transaction.destination,
            transactionParticular: this.transaction.destination,
            name: this.transaction.destination,
            reference: this.transaction.reference,
        };
        var messages = this.translateProvider.get(_send_money_user_config__WEBPACK_IMPORTED_MODULE_8__["SendMoneyUserConfig"].i18n.detailLabels);
        var movementDetailField = [
            {
                type: 'text',
                label: messages.for,
                value: this.transaction.destination,
            },
            {
                type: 'text',
                label: messages.phoneNumber,
                value: this.transaction.phoneNumberDestination,
            },
            {
                type: 'currency',
                label: messages.amount,
                value: this.transaction.amount.toString(),
            },
            {
                type: 'creationDate',
                label: messages.date,
                value: this.transaction.date,
            },
        ];
        if (this.transaction.message) {
            var positionIndex = 2;
            movementDetailField.splice(positionIndex, 0, {
                type: 'message',
                label: messages.message,
                value: this.transaction.message.includes('{@RM/}')
                    ? this.transaction.message.split('{@RM/}')
                    : [this.transaction.message],
            });
        }
        var movementDetail = {
            movement: movement,
            detail: movementDetailField,
        };
        this.simpleListBottomSheetService.hide();
        this.navigatorProvider.navigateForward(_send_money_user_config__WEBPACK_IMPORTED_MODULE_8__["SendMoneyUserConfig"].routes.receipt, {
            state: {
                detail: movementDetail,
                isSharingViaEmail: isSharingViaEmail,
            },
        });
    };
    TransactionDetailPage.prototype.showSimpleListBottomSheet = function (componentProps) {
        componentProps.theme = _send_money_user_config__WEBPACK_IMPORTED_MODULE_8__["SendMoneyUserConfig"].bottomSheetTheme;
        this.simpleListBottomSheetService.show(componentProps);
    };
    TransactionDetailPage.ɵfac = function TransactionDetailPage_Factory(t) { return new (t || TransactionDetailPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_4__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_6__["SimpleListBottomSheetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_6__["ToastService"])); };
    TransactionDetailPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TransactionDetailPage, selectors: [["app-transaction-detail"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 25, vars: 17, consts: [[1, "ion-page", "send-bank-detail"], [1, "nequi-header"], ["slot", "start"], ["id", "detail_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], ["slot", "end"], ["id", "detail-share-options_button", 3, "click"], ["name", "share-social-outline"], ["fullscreen", "true", 1, "ion-padding-horizontal", "ion-content--movements", "content"], [1, "nequi-title"], [3, "status", "icon", "title", "details", "color"], [1, "origin-money", "ion-margin-vertical"], [1, "origin-money__span"], [3, "pocket"], [1, "nequi-footer", "nequi-footer--padding-24"], [1, "nequi-footer__toolbar"], ["id", "detail_next_button", "shape", "round", "color", "guayaba", "expand", "block", 1, "margin-bottom-8", 3, "click"]], template: function TransactionDetailPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-header", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-buttons", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TransactionDetailPage_Template_ion_button_click_4_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "ion-icon", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-buttons", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TransactionDetailPage_Template_ion_button_click_7_listener() { return ctx.openShareOptions(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "ion-icon", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-content", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-text", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "app-view-detail", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "app-origin-money-card", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "ion-footer", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "ion-toolbar", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "ion-button", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TransactionDetailPage_Template_ion_button_click_22_listener() { return ctx.accept(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](24, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 9, "cashout.sherpa.detail.title"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("status", ctx.status)("icon", ctx.icon)("title", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 11, "cashout.sherpa.detail.subtitle"))("details", ctx.details)("color", "toast");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](18, 13, "cashout.sherpa.detail.fields.origin-money"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pocket", ctx.availablePocket);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](24, 15, "cashout.bank.detail.button"), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonText"], _ui_src_lib_components_view_detail_view_detail_component__WEBPACK_IMPORTED_MODULE_11__["ViewDetailComponent"], _money_management_src_presentation_components_origin_money_card_origin_money_card_component__WEBPACK_IMPORTED_MODULE_12__["OriginMoneyCardComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonFooter"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"]], styles: [".send-bank-detail[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--gray-60);\n}\n\n[_nghost-%COMP%]     .labeled-value__label, [_nghost-%COMP%]     .labeled-value__value {\n  margin-left: 16px;\n}\n\n[_nghost-%COMP%]     .detail-messages {\n  margin-left: 10px;\n}\n\n.movement-detail[_ngcontent-%COMP%]   .nequi-title[_ngcontent-%COMP%] {\n  max-width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvdHJhbnNhY3Rpb24tZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7QUFBSjs7QUFNSTtFQUVFLGlCQUFBO0FBSk47O0FBUUU7RUFDRSxpQkFBQTtBQU5KOztBQVdFO0VBQ0UsY0FBQTtBQVJKIiwiZmlsZSI6InRyYW5zYWN0aW9uLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VuZC1iYW5rLWRldGFpbCB7XG4gIC5pbmZvIHtcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgIGNvbG9yOiB2YXIoLS1ncmF5LTYwKTtcbiAgfVxufVxuXG46aG9zdCA6Om5nLWRlZXAge1xuICAubGFiZWxlZC12YWx1ZSB7XG4gICAgJl9fbGFiZWwsXG4gICAgJl9fdmFsdWUge1xuICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgfVxuICB9XG5cbiAgLmRldGFpbC1tZXNzYWdlcyB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbn1cblxuLm1vdmVtZW50LWRldGFpbCB7XG4gIC5uZXF1aS10aXRsZSB7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gIH1cbn1cbiJdfQ== */"] });
    return TransactionDetailPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__["FeatureBasePage"]));



/***/ }),

/***/ "rXf7":
/*!***********************************************************************!*\
  !*** ./libs/features/paypal/src/presentation/pages/home/home.page.ts ***!
  \***********************************************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_commons_exceptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/commons/exceptions */ "0sJq");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_features_paypal_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/features/paypal/core */ "EkB8");
/* harmony import */ var _nequi_features_paypal_exceptions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/features/paypal/exceptions */ "0TYU");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_date__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nequi/utils/date */ "tGfC");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _nequi_utils_string__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @nequi/utils/string */ "p6rB");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/account.service */ "9A31");
/* harmony import */ var _home_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home.config */ "iYAC");
/* harmony import */ var _home_view_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home.view-model */ "zZCo");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ui_src_lib_components_busy_indicator_busy_indicator_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../ui/src/lib/components/busy-indicator/busy-indicator.component */ "N6nj");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ui_src_lib_pipes_nequi_currency_nequi_currency_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../../ui/src/lib/pipes/nequi-currency/nequi-currency.pipe */ "Vb1S");





























function HomePage_app_busy_indicator_8_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-busy-indicator", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onReload", function HomePage_app_busy_indicator_8_Template_app_busy_indicator_onReload_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.loadBalance(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showReload", ctx_r0.bussyIndicatorError)("reloadMessage", ctx_r0.bussyIndicatorError);
} }
function HomePage_ion_row_9_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-progress-bar", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-row", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-col", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-col", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r5.viewModel.progressBar.cssClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r5.viewModel.progressBar.value)("type", ctx_r5.viewModel.progressBar.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 8, "paypal.home.balance.amount"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind4"](8, 10, ctx_r5.viewModel.withdrawal == null ? null : ctx_r5.viewModel.withdrawal.utilisedAmountInUSD, "", "", ctx_r5.config.decimalQuantityLimit), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 15, "paypal.home.balance.maxAmount"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind4"](13, 17, ctx_r5.viewModel.withdrawal == null ? null : ctx_r5.viewModel.withdrawal.maxAllowedLimitInUSD, "", "", ctx_r5.config.decimalQuantityLimit), "");
} }
var _c0 = function (a0) { return { "balance-card__description--error": a0 }; };
function HomePage_ion_row_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-col", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-text", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, HomePage_ion_row_9_div_15_Template, 14, 22, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 6, "paypal.home.balance.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 8, "paypal.home.balance.symbolMoney"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind4"](11, 10, ctx_r1.viewModel.balance == null ? null : ctx_r1.viewModel.balance.available, "", "", ctx_r1.config.balance.currency.decimal), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](17, _c0, ctx_r1.viewModel.hasError));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 15, ctx_r1.viewModel.contextualMessage), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.viewModel.hideLimits);
} }
function HomePage_ion_footer_10_Template(rf, ctx) { if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-footer", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomePage_ion_footer_10_Template_ion_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.goToReceivedToPaypal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomePage_ion_footer_10_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.onUnlinkAccount(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r2.viewModel.hasDisabledReceive);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 3, "paypal.home.buttons.receiveMoney"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 5, "paypal.home.link.unlink"), " ");
} }
var HomePage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HomePage, _super);
    function HomePage(injector, translateProvider, firstTimeMessageBottomSheetService, paypalInterator, alertService, loadingService, toastService, accountService, analyticsInteractor, moduleConfigProvider, router) {
        var _a;
        var _this = _super.call(this, injector) || this;
        _this.translateProvider = translateProvider;
        _this.firstTimeMessageBottomSheetService = firstTimeMessageBottomSheetService;
        _this.paypalInterator = paypalInterator;
        _this.alertService = alertService;
        _this.loadingService = loadingService;
        _this.toastService = toastService;
        _this.accountService = accountService;
        _this.analyticsInteractor = analyticsInteractor;
        _this.moduleConfigProvider = moduleConfigProvider;
        _this.router = router;
        _this.config = _home_config__WEBPACK_IMPORTED_MODULE_14__["HomeConfig"];
        _this.viewModel = new _home_view_model__WEBPACK_IMPORTED_MODULE_15__["HomeViewModel"]();
        _this.showBussyIndicator = false;
        _this.translateProvider.loadModule(_this.moduleConfigProvider.i18n.moduleKey);
        _this.connectionData = _this.router.getCurrentNavigation().extras.state.data;
        _this.isRegisterFinished = (_a = _this.router.getCurrentNavigation().extras.state) === null || _a === void 0 ? void 0 : _a.isRegisterFinished;
        return _this;
    }
    HomePage.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadBalance()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.goBack = function () {
        var goBackUrl = this.config.routes.infoPage;
        if (this.isRegisterFinished) {
            goBackUrl = this.config.routes.closetUrl;
        }
        this.navigatorProvider.navigateBack(goBackUrl, {
            state: { isRegisterFinished: false },
        });
    };
    HomePage.prototype.loadBalance = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, message, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.showBussyIndicator = true;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 5, , 7]);
                        this.bussyIndicatorError = '';
                        this.viewModel.hasDisabledReceive = false;
                        this.viewModel.hasError = false;
                        this.viewModel.contextualMessage = this.config.i18n.defaultMessage;
                        _a = this.viewModel;
                        return [4 /*yield*/, this.paypalInterator.getBalance()];
                    case 2:
                        _a.balance = _b.sent();
                        this.setAnalyticsCheckBalance(this.viewModel.balance.available);
                        if (!(this.viewModel.balance.available === 0)) return [3 /*break*/, 4];
                        this.viewModel.hasDisabledReceive = true;
                        message = this.translateProvider.get(this.config.i18n.balanceZeroError);
                        return [4 /*yield*/, this.toastService.showError(message, this.config.toastTimer)];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4:
                        this.getLimitsAccount();
                        return [3 /*break*/, 7];
                    case 5:
                        error_1 = _b.sent();
                        return [4 /*yield*/, this.manageErrorsBalance(error_1)];
                    case 6:
                        _b.sent();
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.getLimitsAccount = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var response, error_2;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        if (!(this.viewModel.maxAllowedLimitInUSD === null)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.accountService.metrics];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, this.getLimitsAccountSuccess(response.responseLimitsAccounts)];
                    case 2:
                        _a.sent();
                        if (this.viewModel.withdrawal.utilisedAmountInUSD >= this.viewModel.maxAllowedLimitInUSD) {
                            this.viewModel.hasError = true;
                            this.viewModel.hasDisabledReceive = true;
                            this.viewModel.contextualMessage = this.config.i18n.limitExceedError;
                        }
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_2 = _a.sent();
                        this.bussyIndicatorError = error_2.message;
                        this.showBussyIndicator = true;
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.goToReceivedToPaypal = function () {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var metrics, error_3;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 4, , 7]);
                        if (!(this.viewModel.balance.available > 0 &&
                            ((_a = this.viewModel.withdrawal) === null || _a === void 0 ? void 0 : _a.utilisedAmountInUSD) < this.viewModel.maxAllowedLimitInUSD)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.loadingService.show()];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, this.accountService.metrics];
                    case 2:
                        metrics = _b.sent();
                        this.viewModel.rechargeMetrics = metrics.responseRates;
                        this.getReceivedRechargeSuccess(_nequi_features_paypal_core__WEBPACK_IMPORTED_MODULE_7__["TransactionType"].WITHDRAWAL);
                        _b.label = 3;
                    case 3: return [3 /*break*/, 7];
                    case 4:
                        error_3 = _b.sent();
                        return [4 /*yield*/, this.loadingService.hide(false)];
                    case 5:
                        _b.sent();
                        return [4 /*yield*/, this.manageErrorsReceivedRecharge(error_3)];
                    case 6:
                        _b.sent();
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.onUnlinkAccount = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.alertService.showByI18n({
                    i18nKey: this.config.i18n.unlinkAccount,
                    handlers: {
                        accept: function () { return _this.accountService.unlinkAccount(); },
                    },
                });
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.manageErrorsBalance = function (error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var balanceErrors;
            var _a;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                balanceErrors = (_a = {},
                    _a[_nequi_features_paypal_exceptions__WEBPACK_IMPORTED_MODULE_8__["NoAccountException"].name] = function () { return _this.showRetryRegistryError(error); },
                    _a[_nequi_features_paypal_exceptions__WEBPACK_IMPORTED_MODULE_8__["LinkWrongCurrencyException"].name] = function () { return _this.showLinkWrongCurrencyError(); },
                    _a[_nequi_features_paypal_exceptions__WEBPACK_IMPORTED_MODULE_8__["InvalidTokenException"].name] = function () { return _this.showRetryRegistryError(error); },
                    _a[_nequi_features_paypal_exceptions__WEBPACK_IMPORTED_MODULE_8__["NameNoMatchWithNequiException"].name] = function () { return _this.showModalNameNotMatch(); },
                    _a);
                if (balanceErrors[error.constructor.name]) {
                    return [2 /*return*/, balanceErrors[error.constructor.name]()];
                }
                this.showGeneralError(error, this.config.i18n.generalError);
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.showModalNameNotMatch = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingService.hideWithoutFeedback()];
                    case 1:
                        _a.sent();
                        this.alertService.showByI18n({
                            i18nKey: this.config.i18n.nameNoMatchWhitNequiError,
                            handlers: {
                                accept: function () { return _this.accountService.unlinkAccount(); },
                                cancel: function () { return _this.goBack(); },
                            },
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.showLinkWrongCurrencyError = function () {
        // TODO: no existe la url en el app actual 'payPalConfig.cards.putMoneyInNequiHelpUrl'
        var _this = this;
        this.alertService.showByI18n({
            i18nKey: _home_config__WEBPACK_IMPORTED_MODULE_14__["HomeConfig"].i18n.linkWrongCurrencyError,
            handlers: {
                accept: function () { return _this.navController.back(); },
            },
        });
    };
    HomePage.prototype.showRetryRegistryError = function (error) {
        var _this = this;
        var data = this.connectionData;
        this.alertService.showByI18n({
            i18nKey: _home_config__WEBPACK_IMPORTED_MODULE_14__["HomeConfig"].i18n.retryRegistryError,
            handlers: {
                accept: function () {
                    _this.bussyIndicatorError = error.message;
                    _this.showBussyIndicator = true;
                    _this.navigatorProvider.navigateForward([_this.config.routes.registryPageUrl], {
                        state: { data: data },
                    });
                },
            },
        });
    };
    HomePage.prototype.getLimitsAccountSuccess = function (limistAccount) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, _b, errorMessage, utilisedAmountInUSD, maxAllowedLimitInUSD;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.viewModel;
                        return [4 /*yield*/, this.getLimitsForType(limistAccount, this.config.typeLimitsAccount.deposit)];
                    case 1:
                        _a.deposit = _c.sent();
                        _b = this.viewModel;
                        return [4 /*yield*/, this.getLimitsForType(limistAccount, this.config.typeLimitsAccount.withdrawal)];
                    case 2:
                        _b.withdrawal = _c.sent();
                        if (!this.viewModel.withdrawal) {
                            errorMessage = this.translateProvider.get(this.config.i18n.withdrawalNull);
                            throw new _nequi_commons_exceptions__WEBPACK_IMPORTED_MODULE_3__["CoreException"](errorMessage, null);
                        }
                        utilisedAmountInUSD = this.viewModel.withdrawal.utilisedAmountInUSD;
                        maxAllowedLimitInUSD = this.viewModel.withdrawal.maxAllowedLimitInUSD;
                        this.viewModel.maxLimitTransfer = 0;
                        if (maxAllowedLimitInUSD - utilisedAmountInUSD >= 0) {
                            this.viewModel.maxLimitTransfer = maxAllowedLimitInUSD - utilisedAmountInUSD;
                        }
                        this.viewModel.maxAllowedLimitInUSD = maxAllowedLimitInUSD;
                        this.viewModel.hideLimits = false;
                        this.viewModel.getProgressValue(utilisedAmountInUSD, maxAllowedLimitInUSD);
                        this.showBussyIndicator = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.getLimitsForType = function (limistAccount, type) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var limitFilter;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                limitFilter = limistAccount.filter(function (limit) { return String(limit.transactionType) === type; });
                return [2 /*return*/, limitFilter && limitFilter.length === 1 ? limitFilter[0] : null];
            });
        });
    };
    HomePage.prototype.getReceivedRechargeSuccess = function (type) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var message, params;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.viewModel.transactionType = type;
                        message = this.config.i18n.bottomSheet.sendPayPalToNequi;
                        params = [
                            String(this.viewModel.maxAllowedLimitInUSD),
                            String(this.viewModel.rechargeMetrics.fee * _home_config__WEBPACK_IMPORTED_MODULE_14__["HomeConfig"].percentage),
                            String(this.viewModel.rechargeMetrics.maximumFeeValue +
                                (this.viewModel.rechargeMetrics.maximumFeeValue * this.viewModel.rechargeMetrics.tax)),
                        ];
                        if (this.viewModel.rechargeMetrics.feeType === _nequi_features_paypal_core__WEBPACK_IMPORTED_MODULE_7__["FeeType"].FIX_AMOUNT) {
                            this.viewModel.rechargeMetrics.fee = this.viewModel.rechargeMetrics.defaultFeeValue;
                            params = [
                                String(this.viewModel.maxAllowedLimitInUSD),
                                String(this.viewModel.rechargeMetrics.fee),
                                String(this.viewModel.rechargeMetrics.maximumFeeValue +
                                    (this.viewModel.rechargeMetrics.maximumFeeValue * this.viewModel.rechargeMetrics.tax)),
                            ];
                        }
                        return [4 /*yield*/, this.loadingService.hideWithoutFeedback()];
                    case 1:
                        _a.sent();
                        if (this.viewModel.rechargeMetrics) {
                            this.showBottomSheetRecharge(message, params);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.showBottomSheetRecharge = function (message, params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var bottomSheet;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        bottomSheet = this.translateProvider.get(message);
                        return [4 /*yield*/, this.firstTimeMessageBottomSheetService.show({
                                icon: bottomSheet.image,
                                message: bottomSheet.title,
                                content: Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_12__["createFormat"])(bottomSheet.content, params),
                                cssClass: _home_config__WEBPACK_IMPORTED_MODULE_14__["HomeConfig"].bottomSheet.cssClass,
                                button: {
                                    label: bottomSheet.button,
                                    fill: _home_config__WEBPACK_IMPORTED_MODULE_14__["HomeConfig"].bottomSheet.button.fill,
                                    color: _home_config__WEBPACK_IMPORTED_MODULE_14__["HomeConfig"].bottomSheet.button.color,
                                    action: function () {
                                        _this.firstTimeMessageBottomSheetService.hide();
                                        _this.navigateToPaypalFormInfo();
                                    },
                                },
                                header: {
                                    view: true,
                                    action: function () { return _this.firstTimeMessageBottomSheetService.hide(); },
                                },
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.navigateToPaypalFormInfo = function () {
        var params = {
            recharge: this.viewModel.rechargeMetrics,
            balance: this.viewModel.balance,
            maxLimitTransfer: this.viewModel.maxLimitTransfer,
            maxAllowedLimitInUSD: this.viewModel.maxAllowedLimitInUSD,
        };
        this.navController.navigateForward(this.config.routes.payPalFormInfo, {
            state: {
                params: params,
            },
        });
    };
    HomePage.prototype.manageErrorsReceivedRecharge = function (error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (error.constructor === _nequi_features_paypal_exceptions__WEBPACK_IMPORTED_MODULE_8__["UnavailabilityException"]) {
                            this.showGeneralError(error, this.config.i18n.unavailabilityError);
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.toastService.showError(error.message, this.config.toastTimer)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.showGeneralError = function (error, messages) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var message;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                message = this.translateProvider.get(messages);
                this.alertService.show({
                    messages: {
                        message: error.message,
                        header: message.header,
                        buttons: message.buttons,
                    },
                    handlers: {
                        accept: function () { return _this.navController.navigateBack(_this.config.routes.closetUrl); },
                    },
                });
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.setAnalyticsCheckBalance = function (balance) {
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["AnalyticsType"].FACEBOOK,
            params: {
                eventName: this.config.analytics.events.checkBalance.name,
            },
        });
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["AnalyticsType"].FIREBASE,
            params: { eventName: this.config.analytics.events.checkBalance.name },
        });
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["AnalyticsType"].CLEVERTAP,
            params: {
                eventName: this.config.analytics.events.checkBalance.name,
                eventProps: Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_11__["stringsArrayToObjectWithValues"])(this.config.analytics.events.checkBalance.params.cleverTap, [Object(_nequi_utils_date__WEBPACK_IMPORTED_MODULE_10__["getFormattedDateTimes"])(), balance]),
            },
        });
    };
    HomePage.ɵfac = function HomePage_Factory(t) { return new (t || HomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_6__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_9__["FirstTimeMessageBottomSheetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_paypal_core__WEBPACK_IMPORTED_MODULE_7__["PaypalInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_9__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_9__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_13__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["AnalyticsInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_6__["ModuleConfigProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
    HomePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomePage, selectors: [["nequi-paypal"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 11, vars: 6, consts: [[1, "nequi-header"], ["slot", "start"], ["id", "paypal_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], ["fullscreen", "true", 1, "ion-content--enroll", "ion-padding-horizontal", "content"], [1, "nequi-title", "content__title", 3, "innerHTML"], [3, "showReload", "reloadMessage", "onReload", 4, "ngIf"], [4, "ngIf"], ["class", "nequi-footer nequi-footer--padding-vertical-24", 4, "ngIf"], [3, "showReload", "reloadMessage", "onReload"], [1, "balance-card", "ion-no-padding"], [1, "balance-card__title"], [1, "balance-card__balance"], [1, "balance-card__description", 3, "ngClass"], [1, "balance-card__progress-bar"], [3, "value", "type"], [1, "balance-card__amount"], ["size", "auto"], [1, "ion-text-right"], [1, "nequi-footer", "nequi-footer--padding-vertical-24"], [1, "nequi-footer__toolbar", "ion-text-center"], ["id", "home_receive-money_button", "shape", "round", "color", "guayaba", "expand", "block", 1, "margin-vertical-16", 3, "disabled", "click"], [1, "nequi-footer__link"], ["id", "home_unlink-account_link", 1, "nequi-footer__link", 3, "click"]], template: function HomePage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomePage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-content", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "ion-text", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, HomePage_app_busy_indicator_8_Template, 1, 2, "app-busy-indicator", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, HomePage_ion_row_9_Template, 16, 19, "ion-row", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, HomePage_ion_footer_10_Template, 9, 7, "ion-footer", 8);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 4, "paypal.home.title"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showBussyIndicator);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.showBussyIndicator);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.showBussyIndicator);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonText"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _ui_src_lib_components_busy_indicator_busy_indicator_component__WEBPACK_IMPORTED_MODULE_18__["BusyIndicatorComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonCol"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgClass"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonProgressBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonFooter"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__["TranslatePipe"], _ui_src_lib_pipes_nequi_currency_nequi_currency_pipe__WEBPACK_IMPORTED_MODULE_20__["NequiCurrencyPipe"]], styles: [".content__title[_ngcontent-%COMP%] {\n  line-height: 30px;\n}\n\n.balance-card[_ngcontent-%COMP%] {\n  margin: 0px 14px;\n}\n\n.balance-card__title[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.balance-card__balance[_ngcontent-%COMP%] {\n  margin: 4px 0 8px 0;\n  font-weight: 600;\n}\n\n.balance-card__description[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--gray-70);\n}\n\n.balance-card__description--error[_ngcontent-%COMP%] {\n  color: var(--guayaba);\n}\n\n.balance-card__amount[_ngcontent-%COMP%] {\n  flex: none;\n  margin-top: 8px;\n  font-size: 14px;\n  line-height: 16px;\n  color: var(--gray-70);\n}\n\n.balance-card__amount[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.balance-card__progress-bar[_ngcontent-%COMP%], .balance-card__progress-bar--gradiant[_ngcontent-%COMP%] {\n  --buffer-background: var(--gray-inputs-divide);\n  margin-top: 8px;\n  height: 8px;\n  border-radius: 44px;\n}\n\n.balance-card__progress-bar--gradiant[_ngcontent-%COMP%] {\n  --progress-background: linear-gradient(\n    270deg,\n    var(--guayaba) 2.45%,\n    var(--ultravioleta) 98.16%\n  );\n}\n\n.nequi-footer__link[_ngcontent-%COMP%] {\n  margin: 24px 0 16px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxpQkFBQTtBQUFKOztBQUdBO0VBQ0UsZ0JBQUE7QUFBRjs7QUFFRTtFQUNFLGdCQUFBO0FBQUo7O0FBR0U7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FBREo7O0FBSUU7RUFDRSxlQUFBO0VBQ0EscUJBQUE7QUFGSjs7QUFJSTtFQUNFLHFCQUFBO0FBRk47O0FBTUU7RUFJRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBUEo7O0FBQUk7RUFDRSxVQUFBO0FBRU47O0FBT0U7RUFDRSw4Q0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFMSjs7QUFPSTtFQUVFOzs7O0dBQUE7QUFGTjs7QUFXQTtFQUNFLHVCQUFBO0FBUkYiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XG4gICZfX3RpdGxlIHtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgfVxufVxuLmJhbGFuY2UtY2FyZCB7XG4gIG1hcmdpbjogMHB4IDE0cHg7XG5cbiAgJl9fdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cblxuICAmX19iYWxhbmNlIHtcbiAgICBtYXJnaW46IDRweCAwIDhweCAwO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cblxuICAmX19kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiB2YXIoLS1ncmF5LTcwKTtcblxuICAgICYtLWVycm9yIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1ndWF5YWJhKTtcbiAgICB9XG4gIH1cblxuICAmX19hbW91bnQge1xuICAgIGlvbi1jb2wge1xuICAgICAgcGFkZGluZzogMDtcbiAgICB9XG4gICAgZmxleDogbm9uZTtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIGNvbG9yOiB2YXIoLS1ncmF5LTcwKTtcbiAgfVxuXG4gICZfX3Byb2dyZXNzLWJhciB7XG4gICAgLS1idWZmZXItYmFja2dyb3VuZDogdmFyKC0tZ3JheS1pbnB1dHMtZGl2aWRlKTtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgaGVpZ2h0OiA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNDRweDtcblxuICAgICYtLWdyYWRpYW50IHtcbiAgICAgIEBleHRlbmQgLmJhbGFuY2UtY2FyZF9fcHJvZ3Jlc3MtYmFyO1xuICAgICAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgIDI3MGRlZyxcbiAgICAgICAgdmFyKC0tZ3VheWFiYSkgMi40NSUsXG4gICAgICAgIHZhcigtLXVsdHJhdmlvbGV0YSkgOTguMTYlXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuXG4ubmVxdWktZm9vdGVyX19saW5rIHtcbiAgbWFyZ2luOiAyNHB4IDAgMTZweCAwcHg7XG59XG4iXX0= */"] });
    return HomePage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__["FeatureBasePage"]));



/***/ }),

/***/ "sTMj":
/*!**********************************************************************************************************************************!*\
  !*** ./libs/features/send/src/presentation/other-bank/pages/send-other-bank-without-id/send-other-bank-without-id.view-model.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: SendOtherBankWithoutIdViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendOtherBankWithoutIdViewModel", function() { return SendOtherBankWithoutIdViewModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");



var FAVORITE_CONTROL_NAME = 'isFavorite';
var normalizeName = function (value) { return value.replace(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_2__["CustomTextNormalizer"].regex.NORMALIZE_ACCENTS_AND_SPECIAL_CHARACTERS, '\0'); };
var filterAccountType = function (typeAccountA, code) {
    return typeAccountA.code === code;
};
var isSameAccount = function (favorite, formInfo) {
    return favorite.bank.achCode === formInfo.bank.achCode &&
        favorite.destination.typeAccount === formInfo.accountType.code &&
        favorite.destination.account === formInfo.accountNumber;
};
var SendOtherBankWithoutIdViewModel = /** @class */ (function () {
    function SendOtherBankWithoutIdViewModel() {
        this.bankList = [];
        this.isFavoriteLoaded = false;
    }
    SendOtherBankWithoutIdViewModel.prototype.onBlur = function () {
        var fieldNameValue = this.form.value.name;
        var fieldNameValueTransformed = fieldNameValue
            .normalize('NFD')
            .replace(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_2__["CustomTextNormalizer"].regex.NORMALIZE_ACCENTS, '')
            .trim();
        this.form.get('name').setValue(fieldNameValueTransformed);
    };
    SendOtherBankWithoutIdViewModel.prototype.normalizeNameData = function (formControl) {
        formControl.setValue(normalizeName(formControl.value).toUpperCase());
    };
    Object.defineProperty(SendOtherBankWithoutIdViewModel.prototype, "isSameAccount", {
        get: function () {
            return isSameAccount(this.favoriteLoaded, this.form.value);
        },
        enumerable: false,
        configurable: true
    });
    SendOtherBankWithoutIdViewModel.prototype.setConfig = function (config) {
        this.config = config;
    };
    SendOtherBankWithoutIdViewModel.prototype.buildForm = function (pocket) {
        var _a;
        this.crateControls(pocket);
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]((_a = {
                name: this.nameControl,
                bank: this.bankControl,
                accountType: this.accountTypeControl,
                accountNumber: this.accountNumberControl,
                amount: this.amountControl,
                message: this.messageControl
            },
            _a[FAVORITE_CONTROL_NAME] = this.isFavoriteControl,
            _a.pocket = this.pocketControl,
            _a));
        this.form.markAsPristine();
        this.form.markAsUntouched();
        this.subscribeToFavoriteChanges();
    };
    SendOtherBankWithoutIdViewModel.prototype.destroy = function () {
        var _a, _b;
        (_b = (_a = this.subscriptions$) === null || _a === void 0 ? void 0 : _a.forEach) === null || _b === void 0 ? void 0 : _b.call(_a, function (subscription) { var _a; return (_a = subscription === null || subscription === void 0 ? void 0 : subscription.unsubscribe) === null || _a === void 0 ? void 0 : _a.call(subscription); });
    };
    SendOtherBankWithoutIdViewModel.prototype.buildArrayConfirmationItems = function (messages, currencyPipe) {
        var items = [
            {
                label: messages.items.name,
                value: this.form.value.name,
            },
            {
                label: messages.items.bank,
                value: this.form.value.bank.name,
            },
            {
                label: messages.items.accountType,
                value: this.form.value.accountType.description,
            },
            {
                label: messages.items.accountNumber,
                value: this.form.value.accountNumber,
            },
            {
                label: messages.items.amount,
                value: currencyPipe.transform(this.form.value.amount),
            },
        ];
        if (this.form.value.message) {
            items.push({
                label: messages.items.message,
                value: this.form.value.message,
            });
        }
        if (this.form.value.isFavorite) {
            items.push({
                label: messages.items.state.label,
                value: messages.items.state.value,
            });
        }
        return items;
    };
    SendOtherBankWithoutIdViewModel.prototype.updateAmountControlValidators = function (attribute) {
        var _a;
        this.accountNumberControl.reset();
        this.accountNumberControl.clearValidators();
        this.accountNumberControl.setValidators([
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_2__["CustomInputValidators"].patterns.onlyNumbers),
            this.validateAccountLength((_a = attribute.validators) === null || _a === void 0 ? void 0 : _a.validAccountSizes),
        ]);
    };
    SendOtherBankWithoutIdViewModel.prototype.setFavorite = function (favorite) {
        var _a, _b, _c, _d, _e, _f;
        var accountType = (_c = (_b = (_a = favorite.bank) === null || _a === void 0 ? void 0 : _a.accountTypes) === null || _b === void 0 ? void 0 : _b.find) === null || _c === void 0 ? void 0 : _c.call(_b, function (type) {
            return filterAccountType(type, favorite.destination.typeAccount);
        });
        this.nameControl.setValue(favorite.destination.name);
        this.bankControl.setValue((_d = favorite.bank) !== null && _d !== void 0 ? _d : null);
        this.accountTypeControl.setValue(accountType);
        this.accountNumberControl.setValue(favorite.destination.account);
        this.isFavoriteControl.setValue(true, { emitEvent: false });
        this.accountNumberControl.setValidators([
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_2__["CustomInputValidators"].patterns.onlyNumbers),
            this.validateAccountLength((_f = (_e = accountType === null || accountType === void 0 ? void 0 : accountType.attributes) === null || _e === void 0 ? void 0 : _e.validators) === null || _f === void 0 ? void 0 : _f.validAccountSizes),
        ]);
        this.favoriteLoaded = favorite;
    };
    SendOtherBankWithoutIdViewModel.prototype.crateControls = function (pocket) {
        this.nameControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(this.config.nameMinLength),
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(this.config.nameMaxLength),
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_2__["CustomInputValidators"].patterns.onlyAlphaNumericWithSpaces),
        ]);
        this.bankControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.accountTypeControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.amountControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(this.config.accountNumberMin),
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(this.config.accountNumberMax),
        ]);
        this.isFavoriteControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false);
        this.pocketControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](pocket);
        this.accountNumberControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_2__["CustomInputValidators"].patterns.onlyNumbers),
        ]);
        this.messageControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_2__["CustomInputValidators"].patterns.onlyAlphaNumericWithSpaces),
        ]);
    };
    SendOtherBankWithoutIdViewModel.prototype.validateAccountLength = function (validateAccountSizes) {
        return function (control) {
            if (!control.value) {
                return null;
            }
            var validateAccountSizesArray = validateAccountSizes.split(',');
            var isValidAccountLength = validateAccountSizesArray.some(function (item) { return control.value.length === Number(item); });
            return isValidAccountLength ? null : { invalidAccountLength: true };
        };
    };
    SendOtherBankWithoutIdViewModel.prototype.subscribeToFavoriteChanges = function () {
        var _this = this;
        this.subscriptions$ = Object.keys(this.form.controls).map(function (control) {
            if (control === FAVORITE_CONTROL_NAME) {
                return null;
            }
            return _this.form.controls[control].valueChanges.subscribe(function (value) {
                var _a;
                if (_this.favoriteLoaded) {
                    _this.isFavoriteControl.setValue(isSameAccount(_this.favoriteLoaded, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.form.value), (_a = {}, _a[control] = value, _a))), {
                        emitEvent: false,
                    });
                }
            });
        });
    };
    return SendOtherBankWithoutIdViewModel;
}());



/***/ }),

/***/ "tgj0":
/*!*********************************************************************************!*\
  !*** ./libs/features/paypal/src/presentation/pages/registry/registry.config.ts ***!
  \*********************************************************************************/
/*! exports provided: RegistryConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistryConfig", function() { return RegistryConfig; });
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/features/profile/presentation */ "cLcF");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _registry_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registry-module */ "H7vw");
var _a;




var RegistryConfig = Object.freeze({
    i18n: {
        addressText: '{0} - {1}',
        urlStructure: 'paypal.registry.url-structure',
        successEmailRegistration: 'paypal.registry.success-email-registration',
        emailNotMatch: 'paypal.registry.errors.email-not-match',
        invalidCountry: 'paypal.registry.errors.invalid-country',
        mailAlreadyLinked: 'paypal.registry.errors.email-already-linked',
        defaultError: 'paypal.registry.errors.general',
    },
    goTo: {
        help: 'https://ayuda.nequi.com.co/hc/es/articles/360038903251-Enlazar-mi-Nequi-con-PayPal',
        currentUrl: '/admin/paypal/registry',
        homeUrl: '/admin/paypal',
        backToAppAction: 'goto/payPalEmail',
        backToDashboard: 'goto/dashboard',
        emailNotMatchWithNequiHelpUrl: 'https://ayuda.nequi.com.co/hc/es/articles/360027677331',
        createAccountUrl: 'https://www.paypal.com/co/webapps/mpp/account-selection?utm_source=Nequi',
        adminUrl: '/admin/dashboard',
        getMoneyUrl: '/admin/paypal/receive',
    },
    moduleList: [
        _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_0__["ModuleCode"].LOCATION,
        _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_0__["ModuleCode"].OCCUPATION,
        _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_0__["ModuleCode"].PERSONAL_INFORMATION,
        _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_0__["ModuleCode"].BARCODE_INFORMATION,
    ],
    navOrder: (_a = {},
        _a[_nequi_ui__WEBPACK_IMPORTED_MODULE_2__["NavButtonCardStatus"].COMPLETED] = 1,
        _a[_nequi_ui__WEBPACK_IMPORTED_MODULE_2__["NavButtonCardStatus"].ACTIVE] = 2,
        _a[_nequi_ui__WEBPACK_IMPORTED_MODULE_2__["NavButtonCardStatus"].INACTIVE] = 3,
        _a),
    navButtons: [
        {
            id: _registry_module__WEBPACK_IMPORTED_MODULE_3__["RegistryModule"].YOUR_DOCUMENT,
            leftImage: 'assets/images/propeller/happy-man.svg',
            title: 'paypal.registry.content.yourDocument.title',
            description: 'paypal.registry.content.yourDocument.description',
            link: '/admin/paypal/profile/my-info/document-guide',
            status: _nequi_ui__WEBPACK_IMPORTED_MODULE_2__["NavButtonCardStatus"].INACTIVE,
            config: {
                sourceFlow: _nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_1__["SourceFlow"].BREAK_CEILING,
            },
        },
        {
            id: _registry_module__WEBPACK_IMPORTED_MODULE_3__["RegistryModule"].WHERE_YOU_LIVE,
            leftImage: 'assets/images/propeller/home.svg',
            title: 'paypal.registry.content.whereYouLive.title',
            description: 'paypal.registry.content.whereYouLive.description',
            link: '/admin/paypal/profile/my-info/address',
            status: _nequi_ui__WEBPACK_IMPORTED_MODULE_2__["NavButtonCardStatus"].INACTIVE,
        },
        {
            id: _registry_module__WEBPACK_IMPORTED_MODULE_3__["RegistryModule"].WHAT_DO_YOU_DO,
            leftImage: 'assets/images/propeller/suitcase.svg',
            title: 'paypal.registry.content.whatDoYouDo.title',
            description: 'paypal.registry.content.whatDoYouDo.description',
            link: '/admin/paypal/profile/my-info/occupation',
            status: _nequi_ui__WEBPACK_IMPORTED_MODULE_2__["NavButtonCardStatus"].INACTIVE,
        },
        {
            id: _registry_module__WEBPACK_IMPORTED_MODULE_3__["RegistryModule"].REGISTRY_PAYPAL,
            leftImage: 'assets/images/icons/link.svg',
            title: 'paypal.registry.content.registry.title',
            description: 'paypal.registry.content.registry.description',
            link: '/admin/paypal/registry',
            status: _nequi_ui__WEBPACK_IMPORTED_MODULE_2__["NavButtonCardStatus"].INACTIVE,
        },
    ],
    analytics: {
        events: {
            intentionOfBonding: {
                name: 'Paypal_intencion_vinculacion',
                params: {
                    cleverTap: ['Fecha_intencion'],
                },
            },
            successfullBondging: {
                name: 'Paypal_exito_vinculacion',
                params: {
                    cleverTap: ['Fecha_vinculacion'],
                },
            },
            errorBonding: {
                name: 'Paypal_error_vinculacion',
                params: {
                    cleverTap: ['Codigo_error'],
                },
            },
        },
    },
    searchParams: {
        description: 'error_description',
        close: 'closeWV',
        responseCode: 'payPalResponseCode',
    },
    success: 'success',
});


/***/ }),

/***/ "tiu6":
/*!******************************************************!*\
  !*** ./libs/features/send/src/presentation/index.ts ***!
  \******************************************************/
/*! exports provided: FeaturesSendModule, SendFromQrPage, SendOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _features_send_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./features-send.module */ "MQxz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeaturesSendModule", function() { return _features_send_module__WEBPACK_IMPORTED_MODULE_0__["FeaturesSendModule"]; });

/* harmony import */ var _nequi_pages_send_from_qr_send_from_qr_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nequi/pages/send-from-qr/send-from-qr.page */ "ntor");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SendFromQrPage", function() { return _nequi_pages_send_from_qr_send_from_qr_page__WEBPACK_IMPORTED_MODULE_1__["SendFromQrPage"]; });

/* harmony import */ var _constants_send_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/send-options */ "wMbQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SendOptions", function() { return _constants_send_options__WEBPACK_IMPORTED_MODULE_2__["SendOptions"]; });






/***/ }),

/***/ "trB8":
/*!********************************************************!*\
  !*** ./libs/features/paypal/src/presentation/index.ts ***!
  \********************************************************/
/*! exports provided: FeaturesPaypalModule, HomePage, RegistryPage, BalanceProgressBarType, HomeViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _features_paypal_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./features-paypal.module */ "I0U/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeaturesPaypalModule", function() { return _features_paypal_module__WEBPACK_IMPORTED_MODULE_0__["FeaturesPaypalModule"]; });

/* harmony import */ var _pages_home_home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home/home.page */ "rXf7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return _pages_home_home_page__WEBPACK_IMPORTED_MODULE_1__["HomePage"]; });

/* harmony import */ var _pages_registry_registry_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/registry/registry.page */ "EV9H");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegistryPage", function() { return _pages_registry_registry_page__WEBPACK_IMPORTED_MODULE_2__["RegistryPage"]; });

/* harmony import */ var _pages_home_constants_balance_progress_bar_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/constants/balance-progress-bar-type */ "AxC3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BalanceProgressBarType", function() { return _pages_home_constants_balance_progress_bar_type__WEBPACK_IMPORTED_MODULE_3__["BalanceProgressBarType"]; });

/* harmony import */ var _pages_home_home_view_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home/home.view-model */ "zZCo");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeViewModel", function() { return _pages_home_home_view_model__WEBPACK_IMPORTED_MODULE_4__["HomeViewModel"]; });








/***/ }),

/***/ "wMbQ":
/*!***********************************************************************!*\
  !*** ./libs/features/send/src/presentation/constants/send-options.ts ***!
  \***********************************************************************/
/*! exports provided: SendOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendOptions", function() { return SendOptions; });
var SendOptions;
(function (SendOptions) {
    SendOptions[SendOptions["NEQUI"] = 0] = "NEQUI";
    SendOptions[SendOptions["TRANSFI_YA"] = 1] = "TRANSFI_YA";
    SendOptions[SendOptions["OTHER_BANK"] = 2] = "OTHER_BANK";
    SendOptions[SendOptions["OTHER_BANK_WITHOUT_DOCUMENT"] = 3] = "OTHER_BANK_WITHOUT_DOCUMENT";
})(SendOptions || (SendOptions = {}));


/***/ }),

/***/ "x5iK":
/*!****************************************************************************!*\
  !*** ./libs/features/paypal/src/presentation/mappers/withdrawal.mapper.ts ***!
  \****************************************************************************/
/*! exports provided: WithdrawalMapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithdrawalMapper", function() { return WithdrawalMapper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");


var WithdrawalMapper = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(WithdrawalMapper, _super);
    function WithdrawalMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WithdrawalMapper.prototype.from = function (params) {
        return {
            transactionId: params.transactionId,
            description: params.form.economicActivity.description,
            exchangeFormCode: params.form.economicActivity.form,
            exchangeNumeral: params.form.economicActivity.exchangeNumber,
        };
    };
    return WithdrawalMapper;
}(_nequi_features_commons__WEBPACK_IMPORTED_MODULE_1__["BaseMapper"]));



/***/ }),

/***/ "ySrV":
/*!******************************************************!*\
  !*** ./apps/colombia/src/app/features/send/index.ts ***!
  \******************************************************/
/*! exports provided: SEND_MDOULE_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEND_MDOULE_CONFIG", function() { return SEND_MDOULE_CONFIG; });
/* harmony import */ var _config_application_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @config/application/config */ "UWZR");
/* harmony import */ var _nequi_features_send_presentation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/features/send/presentation */ "tiu6");


var SEND_MDOULE_CONFIG = {
    sendIdOptions: [_nequi_features_send_presentation__WEBPACK_IMPORTED_MODULE_1__["SendOptions"].NEQUI, _nequi_features_send_presentation__WEBPACK_IMPORTED_MODULE_1__["SendOptions"].TRANSFI_YA, _nequi_features_send_presentation__WEBPACK_IMPORTED_MODULE_1__["SendOptions"].OTHER_BANK],
    sendOtherBankConfig: _config_application_config__WEBPACK_IMPORTED_MODULE_0__["SEND_OTHER_BANK_CONFIG"],
    sendToNequiConfig: _config_application_config__WEBPACK_IMPORTED_MODULE_0__["SEND_TO_NEQUI_CONFIG"],
};


/***/ }),

/***/ "z8k3":
/*!*************************************************************************!*\
  !*** ./libs/features/paypal/src/presentation/pages/form/form.config.ts ***!
  \*************************************************************************/
/*! exports provided: FormConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormConfig", function() { return FormConfig; });
var FormConfig = Object.freeze({
    i18n: {
        title: 'paypal.form.title',
        titleWithErrors: 'paypal.home.title-with-errors',
        bottomSheet: {
            confirm: 'paypal.form.bottom-sheet.confirmation',
            transactionReason: 'paypal.form.bottom-sheet.confirmation.transactionReason',
        },
        pinChallenge: 'paypal.form.pin-challenge',
        successMessage: 'paypal.form.toast.success',
        defaultError: 'paypal.form.errors.default',
        declaration: 'paypal.form.money-declaration',
        errorMessages: {
            transactionProblem: 'paypal.form.errors.transaction-problem',
            transactionInProcess: 'paypal.form.errors.transaction-in-process',
            unavailability: 'paypal.form.errors.unavailability',
            timeoutReverseFinacle: 'paypal.form.errors.timeout-reverse-finacle',
            expiredRate: 'paypal.form.errors.expired-rate',
            paypalWithdrawalLimit: 'paypal.form.errors.paypal-withdrawal-limit',
            nequiDebitLimit: 'paypal.form.errors.nequi-debit-limit',
            nequiDebitLimitCommission: 'paypal.form.errors.nequi-debit-limit-commission',
            paypalConstraintsProblem: 'paypal.form.errors.paypal-constraints-problem',
            paypalAccountLimitsProblem: 'paypal.form.errors.paypal-account-limits-problem',
            annualDebitLimit: 'paypal.form.errors.annual-debit-limit',
            paypalAsyncWithdrawal: 'paypal.form.errors.paypal-async-withdrawal',
            paypalAsyncWithdrawalAccountProblem: 'paypal.form.toast.error.paypal-async-withdrawal-account-problem',
            annualCurrencyExchangeLimit: 'paypal.form.errors.annual-money-exchange-limit',
        },
    },
    analytics: {
        events: {
            intentionOfRecharge: {
                name: 'Paypal_intencion_inicial_recarga',
                params: {
                    cleverTap: ['Fecha_intencion_recarga', 'Saldo_paypal', 'Tasa_cambio'],
                },
            },
            finalIntentionOfRecharge: {
                name: 'Paypal_intencion_final_recarga',
                params: {
                    cleverTap: [
                        'Valor_intencion_recarga_usd',
                        'Valor_intencion_recarga_cop',
                        'Fecha_intencion_recarga',
                    ],
                },
            },
            successRecharge: {
                facebook: 'fb_mobile_tutorial_completed',
                name: 'Paypal_exito_recarga',
            },
        },
    },
    balance: {
        currency: {
            decimalsToRound: 2,
        },
    },
    exchangeCodes: {
        tourismCode: '1530',
        exchangeFormCode: '05',
        transactionType: {
            deposit: 'D',
            withdrawal: 'C',
        },
    },
    routes: {
        backpackHomeUrl: '/admin/dashboard',
        paypalHome: '/admin/paypal/receive',
        closet: '/admin/closet',
        breakCeiling: '/admin/full-registry',
        moneyPartition: '/admin/backpack/money-partition',
    },
    dollarPrefix: 'USD ',
});


/***/ }),

/***/ "zVdS":
/*!************************************************************************************************!*\
  !*** ./libs/features/send/src/presentation/other-bank/pages/favorite/favorite-account.page.ts ***!
  \************************************************************************************************/
/*! exports provided: FavoriteAccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteAccountPage", function() { return FavoriteAccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _nequi_commons_exceptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/commons/exceptions */ "0sJq");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_features_send_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/send/core */ "mumb");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/utils/string */ "p6rB");
/* harmony import */ var _services_load_favorite_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/load-favorite-account.service */ "dbmG");
/* harmony import */ var _favorite_account_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./favorite-account.config */ "5lJz");
/* harmony import */ var _favorite_account_view_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./favorite-account.view-model */ "DOL8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ui_src_lib_organisms_diamond_list_diamond_list_organism__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../ui/src/lib/organisms/diamond-list/diamond-list.organism */ "LDA0");
/* harmony import */ var _ui_src_lib_components_empty_case_empty_case_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../ui/src/lib/components/empty-case/empty-case.component */ "cdII");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");



















var _c0 = function () { return { title: "destination.name", subtitle: "bank.name", description: "destination.account" }; };
function FavoriteAccountPage_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "ion-header", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "ion-toolbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "ion-buttons", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "ion-button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function FavoriteAccountPage_ng_container_0_Template_ion_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r3.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "ion-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "ion-text", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "ion-toolbar", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "ion-searchbar", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ionChange", function FavoriteAccountPage_ng_container_0_Template_ion_searchbar_ionChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r5.filterFavoriteAccounts($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "ion-content", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "nequi-diamond-list", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("itemSelected", function FavoriteAccountPage_ng_container_0_Template_nequi_diamond_list_itemSelected_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r6.onFavoriteSelected($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](8, 6, "cashout.favorite-account.title"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](11, 8, "cashout.favorite-account.searchbar-label"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("items", ctx_r0.viewModel.favoritesFiltered)("showDiamonds", true)("showChips", false)("mapper", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](10, _c0));
} }
function FavoriteAccountPage_ng_template_1_app_empty_case_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-empty-case", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("image", ctx_r7.config.emptyCaseImage)("text", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 2, ctx_r7.config.emptyCaseText));
} }
function FavoriteAccountPage_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-header", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "ion-toolbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "ion-buttons", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "ion-button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function FavoriteAccountPage_ng_template_1_Template_ion_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9); var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r8.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "ion-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, FavoriteAccountPage_ng_template_1_app_empty_case_5_Template, 2, 4, "app-empty-case", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "ion-footer", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "ion-toolbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "ion-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function FavoriteAccountPage_ng_template_1_Template_ion_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9); var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r10.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r2.goBackPressed);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](10, 2, "cashout.favorite-account.empty-case.button"), " ");
} }
var filterBank = function (bankA, code) { return bankA.achCode === code; };
var filterAccountType = function (typeAccountA, code) {
    return typeAccountA.code === code;
};
var FavoriteAccountPage = /** @class */ (function () {
    function FavoriteAccountPage(navigatorProvider, sendInteractor, loadingService, translateProvider, loadFavoriteAccountService, toastService, bankInteractor, moduleConfigProvider) {
        this.navigatorProvider = navigatorProvider;
        this.sendInteractor = sendInteractor;
        this.loadingService = loadingService;
        this.translateProvider = translateProvider;
        this.loadFavoriteAccountService = loadFavoriteAccountService;
        this.toastService = toastService;
        this.bankInteractor = bankInteractor;
        this.moduleConfigProvider = moduleConfigProvider;
        this.viewModel = new _favorite_account_view_model__WEBPACK_IMPORTED_MODULE_8__["FavoriteAccountViewModel"]();
        this.config = _favorite_account_config__WEBPACK_IMPORTED_MODULE_7__["FavoriteAccountConfig"];
        this.goBackPressed = false;
        this.translateProvider.loadModule(this.moduleConfigProvider.i18n.moduleKey);
    }
    FavoriteAccountPage.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getFavorites()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FavoriteAccountPage.prototype.getFavorites = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var favorites, _a, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, , 9]);
                        return [4 /*yield*/, this.loadingService.show()];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, this.sendInteractor.getFavorites()];
                    case 2:
                        favorites = _b.sent();
                        _a = this.viewModel;
                        return [4 /*yield*/, this.mapFavorites(favorites)];
                    case 3:
                        _a.favorites = _b.sent();
                        this.viewModel.favoritesFiltered = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this.viewModel.favorites);
                        return [4 /*yield*/, this.loadingService.hide(true)];
                    case 4:
                        _b.sent();
                        return [3 /*break*/, 9];
                    case 5:
                        error_1 = _b.sent();
                        if (!(error_1 instanceof _nequi_commons_exceptions__WEBPACK_IMPORTED_MODULE_1__["EmptyCaseException"])) return [3 /*break*/, 7];
                        this.viewModel.isEmptyCase = true;
                        this.viewModel.favorites = [];
                        this.viewModel.favoritesFiltered = [];
                        return [4 /*yield*/, this.loadingService.hide(true)];
                    case 6:
                        _b.sent();
                        return [2 /*return*/];
                    case 7: return [4 /*yield*/, this.loadingService.hide(false)];
                    case 8:
                        _b.sent();
                        this.toastService.showError(error_1.message);
                        return [3 /*break*/, 9];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    FavoriteAccountPage.prototype.onFavoriteSelected = function (favorite) {
        this.loadFavoriteAccountService.setFavoriteAccount(favorite);
        this.goBack();
    };
    FavoriteAccountPage.prototype.filterFavoriteAccounts = function (event) {
        var query = Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_5__["scapeSpecialChars"])(Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_5__["removeAccents"])(event.detail.value.trim().toLowerCase()));
        if (query.length <= 0) {
            this.viewModel.favoritesFiltered = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this.viewModel.favorites);
            return;
        }
        this.viewModel.favoritesFiltered = this.viewModel.favorites.filter(function (account) {
            var name = Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_5__["scapeSpecialChars"])(Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_5__["removeAccents"])(account.destination.name.toLowerCase()));
            var destinationAccount = Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_5__["scapeSpecialChars"])(Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_5__["removeAccents"])(account.destination.account.toLowerCase()));
            var bankName = Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_5__["scapeSpecialChars"])(Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_5__["removeAccents"])(account.bank.name.toLowerCase()));
            return (name.indexOf(query) >= 0 ||
                destinationAccount.indexOf(query) >= 0 ||
                bankName.indexOf(query) >= 0);
        });
    };
    FavoriteAccountPage.prototype.goBack = function () {
        this.goBackPressed = true;
        this.navigatorProvider.back();
    };
    FavoriteAccountPage.prototype.mapFavorites = function (favorites) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var bankList;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bankInteractor.getList()];
                    case 1:
                        bankList = _a.sent();
                        return [2 /*return*/, favorites.map(function (favorite) {
                                var bank = bankList.find(function (currentBank) { return filterBank(currentBank, favorite.bank.achCode); });
                                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, favorite), { bank: bank, accountType: bank.accountTypes.find(function (account) {
                                        return filterAccountType(account, favorite.destination.typeAccount);
                                    }) });
                            })];
                }
            });
        });
    };
    FavoriteAccountPage.ɵfac = function FavoriteAccountPage_Factory(t) { return new (t || FavoriteAccountPage)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_2__["NavigatorProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_nequi_features_send_core__WEBPACK_IMPORTED_MODULE_3__["SendInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_2__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_load_favorite_account_service__WEBPACK_IMPORTED_MODULE_6__["LoadFavoriteAccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_4__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_nequi_features_send_core__WEBPACK_IMPORTED_MODULE_3__["BankInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_2__["ModuleConfigProvider"])); };
    FavoriteAccountPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: FavoriteAccountPage, selectors: [["app-favorite-account"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["emptyCase", ""], [1, "nequi-header"], ["slot", "start"], ["id", "favorite-account_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], ["id", "favorite-account_title_label", 1, "nequi-title"], [1, "ion-padding-horizontal", "toolbar"], ["id", "favorite-account_searchbar_searchbar", "mode", "ios", 1, "content__searchbar", 3, "placeholder", "ionChange"], [1, "ion-content--enroll", "ion-padding-horizontal", "content"], ["componentId", "favorite-account", 3, "items", "showDiamonds", "showChips", "mapper", "itemSelected"], [3, "image", "text", 4, "ngIf"], [1, "nequi-footer"], ["id", "favorite-account_go-back-footer_button", "shape", "round", "expand", "block", 1, "nequi-footer__button", 3, "click"], [3, "image", "text"]], template: function FavoriteAccountPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, FavoriteAccountPage_ng_container_0_Template, 14, 11, "ng-container", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, FavoriteAccountPage_ng_template_1_Template, 11, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        } if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.viewModel.isEmptyCase)("ngIfElse", _r1);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonSearchbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["TextValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonContent"], _ui_src_lib_organisms_diamond_list_diamond_list_organism__WEBPACK_IMPORTED_MODULE_12__["DiamondListOrganism"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonFooter"], _ui_src_lib_components_empty_case_empty_case_component__WEBPACK_IMPORTED_MODULE_13__["EmptyCaseComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslatePipe"]], styles: ["[_nghost-%COMP%] {\n  --favorite-item-pink: #ffacc7;\n  --favorite-item-purple: #d1bdf1;\n  --favorite-item-gray: #a699b6;\n  --favorite-item-blue: #b3c8ff;\n  --favorite-item-cyan: #aceaef;\n  --favorite-item-green: #b4ebda;\n}\n\n.nequi-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 6px 0 0 0;\n}\n\n.content__searchbar[_ngcontent-%COMP%] {\n  --background: var(--background-field-gray);\n  --icon-color: var(--gray-alert-message);\n  --clear-button-color: var(--gray-alert-message);\n  --border-radius: 8px;\n  padding: 0;\n}\n\n.list[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  --ion-background-color: transparent;\n}\n\n.list-item[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  padding-bottom: 16px;\n}\n\n.list-item[_ngcontent-%COMP%]::part(native) {\n  --inner-padding-start: 0;\n  --inner-padding-end: 0;\n}\n\n.list-item__icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 6px;\n  transform: rotate(45deg);\n  margin-left: 10px;\n}\n\n.list-item__icon--pink[_ngcontent-%COMP%] {\n  background: var(--favorite-item-pink);\n}\n\n.list-item__icon--purple[_ngcontent-%COMP%] {\n  background: var(--favorite-item-purple);\n}\n\n.list-item__icon--gray[_ngcontent-%COMP%] {\n  background: var(--favorite-item-gray);\n}\n\n.list-item__icon--blue[_ngcontent-%COMP%] {\n  background: var(--favorite-item-blue);\n}\n\n.list-item__icon--cyan[_ngcontent-%COMP%] {\n  background: var(--favorite-item-cyan);\n}\n\n.list-item__icon--green[_ngcontent-%COMP%] {\n  background: var(--favorite-item-green);\n}\n\n.list-item__icon-text[_ngcontent-%COMP%] {\n  margin: 0;\n  color: white;\n  font-weight: 600;\n  transform: rotate(-45deg) translate(0px, 2px);\n}\n\n.label[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.label--title[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.label--subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--gray-60);\n}\n\n.nequi-footer__button[_ngcontent-%COMP%] {\n  --background: var(--color-title-box);\n  --background-activated: var(--ion-color-primary-contrast);\n  --background-activated-opacity: 0.4;\n}\n\n.toolbar[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --padding-end: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvZmF2b3JpdGUtYWNjb3VudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUdFO0VBQ0UsMENBQUE7RUFDQSx1Q0FBQTtFQUNBLCtDQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0FBQUo7O0FBSUE7RUFDRSxnQkFBQTtFQUNBLG1DQUFBO0FBREY7O0FBR0U7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0FBREo7O0FBR0k7RUFDRSx3QkFBQTtFQUNBLHNCQUFBO0FBRE47O0FBSUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0FBRk47O0FBSU07RUFDRSxxQ0FBQTtBQUZSOztBQUtNO0VBQ0UsdUNBQUE7QUFIUjs7QUFNTTtFQUNFLHFDQUFBO0FBSlI7O0FBT007RUFDRSxxQ0FBQTtBQUxSOztBQVFNO0VBQ0UscUNBQUE7QUFOUjs7QUFTTTtFQUNFLHNDQUFBO0FBUFI7O0FBV0k7RUFDRSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsNkNBQUE7QUFUTjs7QUFjQTtFQUNFLGNBQUE7QUFYRjs7QUFhRTtFQUNFLGVBQUE7QUFYSjs7QUFjRTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtBQVpKOztBQWlCRTtFQUNFLG9DQUFBO0VBQ0EseURBQUE7RUFDQSxtQ0FBQTtBQWRKOztBQWtCQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFmRiIsImZpbGUiOiJmYXZvcml0ZS1hY2NvdW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLS1mYXZvcml0ZS1pdGVtLXBpbms6ICNmZmFjYzc7XG4gIC0tZmF2b3JpdGUtaXRlbS1wdXJwbGU6ICNkMWJkZjE7XG4gIC0tZmF2b3JpdGUtaXRlbS1ncmF5OiAjYTY5OWI2O1xuICAtLWZhdm9yaXRlLWl0ZW0tYmx1ZTogI2IzYzhmZjtcbiAgLS1mYXZvcml0ZS1pdGVtLWN5YW46ICNhY2VhZWY7XG4gIC0tZmF2b3JpdGUtaXRlbS1ncmVlbjogI2I0ZWJkYTtcbn1cblxuLm5lcXVpLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW46IDZweCAwIDAgMDtcbn1cblxuLmNvbnRlbnQge1xuICAmX19zZWFyY2hiYXIge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1maWVsZC1ncmF5KTtcbiAgICAtLWljb24tY29sb3I6IHZhcigtLWdyYXktYWxlcnQtbWVzc2FnZSk7XG4gICAgLS1jbGVhci1idXR0b24tY29sb3I6IHZhcigtLWdyYXktYWxlcnQtbWVzc2FnZSk7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuXG4ubGlzdCB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gICYtaXRlbSB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuXG4gICAgJjo6cGFydChuYXRpdmUpIHtcbiAgICAgIC0taW5uZXItcGFkZGluZy1zdGFydDogMDtcbiAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gICAgfVxuXG4gICAgJl9faWNvbiB7XG4gICAgICB3aWR0aDogNDBweDtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcblxuICAgICAgJi0tcGluayB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWZhdm9yaXRlLWl0ZW0tcGluayk7XG4gICAgICB9XG5cbiAgICAgICYtLXB1cnBsZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWZhdm9yaXRlLWl0ZW0tcHVycGxlKTtcbiAgICAgIH1cblxuICAgICAgJi0tZ3JheSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWZhdm9yaXRlLWl0ZW0tZ3JheSk7XG4gICAgICB9XG5cbiAgICAgICYtLWJsdWUge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1mYXZvcml0ZS1pdGVtLWJsdWUpO1xuICAgICAgfVxuXG4gICAgICAmLS1jeWFuIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZmF2b3JpdGUtaXRlbS1jeWFuKTtcbiAgICAgIH1cblxuICAgICAgJi0tZ3JlZW4ge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1mYXZvcml0ZS1pdGVtLWdyZWVuKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmX19pY29uLXRleHQge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKDBweCwgMnB4KTtcbiAgICB9XG4gIH1cbn1cblxuLmxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG5cbiAgJi0tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuXG4gICYtLXN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IHZhcigtLWdyYXktNjApO1xuICB9XG59XG5cbi5uZXF1aS1mb290ZXIge1xuICAmX19idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tY29sb3ItdGl0bGUtYm94KTtcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAwLjQ7XG4gIH1cbn1cblxuLnRvb2xiYXIge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG59XG4iXX0= */"] });
    return FavoriteAccountPage;
}());



/***/ }),

/***/ "zZCo":
/*!*****************************************************************************!*\
  !*** ./libs/features/paypal/src/presentation/pages/home/home.view-model.ts ***!
  \*****************************************************************************/
/*! exports provided: HomeViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeViewModel", function() { return HomeViewModel; });
/* harmony import */ var _constants_balance_progress_bar_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/balance-progress-bar-type */ "AxC3");
/* harmony import */ var _home_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.config */ "iYAC");


var HomeViewModel = /** @class */ (function () {
    function HomeViewModel() {
        this.deposit = null;
        this.withdrawal = null;
        this.maxLimitTransfer = null;
        this.maxAllowedLimitInUSD = null;
        this.utilisedAmountInUSD = null;
        this.hideLimits = false;
        this.hasError = false;
        this.hasDisabledReceive = false;
        this.contextualMessage = _home_config__WEBPACK_IMPORTED_MODULE_1__["HomeConfig"].i18n.defaultMessage;
        this.progressBarType = _constants_balance_progress_bar_type__WEBPACK_IMPORTED_MODULE_0__["BalanceProgressBarType"];
        this.progressBar = {
            value: _home_config__WEBPACK_IMPORTED_MODULE_1__["HomeConfig"].balance.progress.gradiant.value,
            type: this.progressBarType.INDETERMINATE,
            cssClass: _home_config__WEBPACK_IMPORTED_MODULE_1__["HomeConfig"].balance.progress.gradiant.css,
        };
    }
    HomeViewModel.prototype.getProgressValue = function (value, targetValue) {
        this.progressBar.type = this.progressBarType.DETERMINATE;
        this.progressBar.value = value / targetValue > 1 ? 1 : value / targetValue;
    };
    return HomeViewModel;
}());



/***/ })

}]);
//# sourceMappingURL=presentation-admin-admin-module.js.map