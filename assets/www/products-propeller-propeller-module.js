(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-propeller-propeller-module"],{

/***/ "/SdG":
/*!***********************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/propeller/pages/payment-home/payment-home.page.ts ***!
  \***********************************************************************************************************/
/*! exports provided: PaymentHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentHomePage", function() { return PaymentHomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nequi_commons_exceptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/commons/exceptions */ "0sJq");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/features/credits/core */ "42wy");
/* harmony import */ var _nequi_features_help_presentation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/features/help/presentation */ "eKBs");
/* harmony import */ var _nequi_features_money_management_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nequi/features/money-management/core */ "Qxr/");
/* harmony import */ var _nequi_native_calendar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nequi/native/calendar */ "at6U");
/* harmony import */ var _nequi_utils_date__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nequi/utils/date */ "tGfC");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _nequi_utils_string__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @nequi/utils/string */ "p6rB");
/* harmony import */ var _organisms_payment_payment_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../organisms/payment/payment.config */ "pnSE");
/* harmony import */ var _organisms_payment_payment_type__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../organisms/payment/payment.type */ "iwuA");
/* harmony import */ var _organisms_payment_payment_view_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../organisms/payment/payment.view-model */ "KTg/");
/* harmony import */ var _services_credit_info_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../services/credit-info.model */ "9FmH");
/* harmony import */ var _services_payment_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../services/payment.service */ "l8yf");
/* harmony import */ var _payment_home_config__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./payment-home.config */ "b2rR");
/* harmony import */ var _organisms_payment_payment_organism__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../organisms/payment/payment.organism */ "yDoo");
































function PaymentHomePage_app_payment_0_Template(rf, ctx) { if (rf & 1) {
    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-payment", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("showDetailPressed", function PaymentHomePage_app_payment_0_Template_app_payment_showDetailPressed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.onShowDetailPressed(); })("goToPaymentPressed", function PaymentHomePage_app_payment_0_Template_app_payment_goToPaymentPressed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.onPaymentPressed(); })("goToBackPressed", function PaymentHomePage_app_payment_0_Template_app_payment_goToBackPressed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.onBackPressed(); })("showHelpPressed", function PaymentHomePage_app_payment_0_Template_app_payment_showHelpPressed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.onShowHelpPressed(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showMovements", true)("showHelpButton", true)("messages", ctx_r0.paymentConfig.i18n)("feePaymentMessage", ctx_r0.viewModel.feePaymentMessage);
} }
var PaymentHomePage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PaymentHomePage, _super);
    function PaymentHomePage(injector, viewModel, currencyPipe, datePipe, creditInfoModel, balanceInteractor, paymentService, creditEventsHandler, calendarPlugin, loggerInteractor, helpService, analyticsInteractor, dynatraceService) {
        var _this = _super.call(this, injector) || this;
        _this.viewModel = viewModel;
        _this.currencyPipe = currencyPipe;
        _this.datePipe = datePipe;
        _this.creditInfoModel = creditInfoModel;
        _this.balanceInteractor = balanceInteractor;
        _this.paymentService = paymentService;
        _this.creditEventsHandler = creditEventsHandler;
        _this.calendarPlugin = calendarPlugin;
        _this.loggerInteractor = loggerInteractor;
        _this.helpService = helpService;
        _this.analyticsInteractor = analyticsInteractor;
        _this.dynatraceService = dynatraceService;
        _this.paymentConfig = _organisms_payment_payment_config__WEBPACK_IMPORTED_MODULE_14__["PaymentConfig"];
        _this.clickStatus = true;
        _this.viewModel.setConfig(_this.paymentConfig);
        return _this;
    }
    PaymentHomePage.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.initPage()];
                    case 1:
                        _a.sent();
                        this.initI18n();
                        this.setAnalyticsIntentionToPay();
                        return [2 /*return*/];
                }
            });
        });
    };
    PaymentHomePage.prototype.ionViewWillLeave = function () {
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
    PaymentHomePage.prototype.onBackPressed = function () {
        this.navigatorProvider.back();
    };
    PaymentHomePage.prototype.onShowDetailPressed = function () {
        this.navigatorProvider.navigateForward(this.paymentConfig.routes.propeller.paymentDetail, {
            state: this.creditInfoModel.customerCreditInfo.credit,
        });
    };
    PaymentHomePage.prototype.onShowHelpPressed = function () {
        this.helpService.unsubscribe();
        this.helpService.subscribe(this.onShowRescheduleLoan.bind(this));
        var action = this.translateProvider.get(this.paymentConfig.i18n.helpAction);
        this.navigatorProvider.navigateForward(this.paymentConfig.routes.help, {
            queryParams: {
                context: this.paymentConfig.helpContext,
                action: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, action), { showIcon: true }),
            },
        });
    };
    PaymentHomePage.prototype.onPaymentPressed = function () {
        var _this = this;
        if (this.availableMoney < this.viewModel.paymentControl.value) {
            this.paymentService.toastService.showError(this.errorMessage.noHaveAvailable);
            this.setAnalyticsIntentionToPay(new _nequi_commons_exceptions__WEBPACK_IMPORTED_MODULE_3__["CoreException"](this.errorMessage.noHaveAvailable, ''));
            return;
        }
        if (this.viewModel.selectedPayType === _organisms_payment_payment_type__WEBPACK_IMPORTED_MODULE_15__["PaymentType"].PAYMENT &&
            this.viewModel.paymentTime === _organisms_payment_payment_type__WEBPACK_IMPORTED_MODULE_15__["PaymentType"].PAYMENT) {
            this.paymentService.showModalPayment(this.paymentConfig.i18n.modal.payment, function () {
                return _this.goToAdjustInstallment();
            });
            return;
        }
        this.viewModel.paymentAmount =
            this.viewModel.paymentAmount || Number(this.viewModel.paymentControl.value);
        this.onConfirmation();
    };
    PaymentHomePage.prototype.onShowRescheduleLoan = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.helpService.unsubscribe();
                this.navigatorProvider.navigateForward(this.paymentConfig.routes.rescheduleLoan, {
                    state: {
                        originFlow: _nequi_features_commons__WEBPACK_IMPORTED_MODULE_4__["OriginFlow"].CREDITS,
                        creditType: _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__["CreditType"].PROPELLER,
                    },
                });
                return [2 /*return*/];
            });
        });
    };
    PaymentHomePage.prototype.onTransactionSuccess = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var customKey, i18nKey, i18n, i18nFormatted;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                customKey = this.viewModel.paymentTime + "-" + this.viewModel.selectedPayType;
                if (Object.hasOwnProperty.bind(this.paymentConfig.successfulTransactionValidation, customKey)) {
                    this.setAnalyticsOfSuccess(customKey);
                    this.deleteCalendarEvents();
                    i18nKey = this.paymentConfig.successfulTransactionValidation[customKey];
                    i18n = this.translateProvider.get(i18nKey);
                    i18nFormatted = Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_12__["toCamelCaseProperties"])(i18n);
                    if (this.viewModel.credit.balance === this.viewModel.paymentAmount) {
                        this.creditEventsHandler.emitDisbursedEvent({
                            creditType: _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__["CreditType"].PROPELLER,
                            hasCredits: false,
                            isExpired: false,
                            isRescheduled: false,
                        });
                    }
                    this.showMessageSuccess(i18nFormatted, customKey);
                }
                return [2 /*return*/];
            });
        });
    };
    PaymentHomePage.prototype.onTransactionFailed = function (error) {
        this.setAnalyticsIntentionToPay(error);
        if (error instanceof _nequi_commons_exceptions__WEBPACK_IMPORTED_MODULE_3__["ExceedDebitCeilingException"]) {
            throw error;
        }
        if (error instanceof _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__["AsyncLoanPaymentException"]) {
            this.asyncLoanPaymentFailed();
        }
        if (_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["NOT_BALANCE_AVAILABLE_ERRORS"].includes(error.code)) {
            throw error;
        }
        this.paymentService.toastService.showError(error.message);
    };
    PaymentHomePage.prototype.isInsufficientMoney = function (transaction) {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                if (typeof ((_a = transaction.pocket) === null || _a === void 0 ? void 0 : _a.amount) === this.paymentConfig.typeOfNumber) {
                    return [2 /*return*/, ((_b = transaction.pocket) === null || _b === void 0 ? void 0 : _b.amount) < transaction.amount];
                }
                return [2 /*return*/, false];
            });
        });
    };
    PaymentHomePage.prototype.setAnalyticsIntentionToPay = function (error) {
        var eventName = _payment_home_config__WEBPACK_IMPORTED_MODULE_19__["PaymentConfig"].analytics.intentionToPay.name.cleverTap;
        var isPayTodayFee = this.viewModel.paymentTime === _organisms_payment_payment_type__WEBPACK_IMPORTED_MODULE_15__["PaymentType"].PAY_TODAY_FEE;
        var nextInstallmentAt = this.viewModel.credit.installment.next.date;
        var params = _payment_home_config__WEBPACK_IMPORTED_MODULE_19__["PaymentConfig"].analytics.intentionToPay.params.cleverTap;
        var paramsValue = [
            Object(_nequi_utils_date__WEBPACK_IMPORTED_MODULE_11__["getFormattedDateTimes"])(),
            isPayTodayFee,
            Object(_nequi_utils_date__WEBPACK_IMPORTED_MODULE_11__["getFormattedDateTimes"])(nextInstallmentAt),
            this.viewModel.credit.balance,
            this.viewModel.credit.installment.next.value,
            this.viewModel.credit.installment.total - this.viewModel.credit.installment.totalPaid,
        ];
        if (error) {
            eventName = _payment_home_config__WEBPACK_IMPORTED_MODULE_19__["PaymentConfig"].analytics.intentionToPay.error;
            params = params.concat(_payment_home_config__WEBPACK_IMPORTED_MODULE_19__["PaymentConfig"].analytics.intentionToPay.params.error);
            paramsValue = paramsValue.concat([error.code, error.message]);
            this.dynatraceService.setCustomError(error);
        }
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["AnalyticsType"].CLEVERTAP,
            params: {
                eventName: eventName,
                eventProps: Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_12__["stringsArrayToObjectWithValues"])(params, paramsValue),
            },
        });
    };
    PaymentHomePage.prototype.initPage = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.customerProduct = this.creditInfoModel.customerCreditInfo;
                        this.viewModel.credit = this.customerProduct.credit;
                        this.viewModel.setCreditInfo();
                        this.viewModel.initForm();
                        this.getAvailableMoney();
                        return [4 /*yield*/, this.getPageConfiguration()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.setAnalyticsOfBegin()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PaymentHomePage.prototype.getAvailableMoney = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var response;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.balanceInteractor.getBalance()];
                    case 1:
                        response = _a.sent();
                        this.availableMoney = response.available;
                        return [2 /*return*/];
                }
            });
        });
    };
    PaymentHomePage.prototype.getPageConfiguration = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.errorMessage = this.translateProvider.get(this.paymentConfig.i18n.error);
                this.viewModel.getPageConfiguration(this.errorMessage, this.paymentConfig.i18n.modal.overdueFee);
                return [2 /*return*/];
            });
        });
    };
    PaymentHomePage.prototype.goToAdjustInstallment = function () {
        this.creditInfoModel.creditFeatureInfo = {
            productId: this.customerProduct.credit.debenture,
            paymentAmount: this.viewModel.paymentControl.value,
            installment: this.customerProduct.credit.installment.totalPending,
        };
        this.navigatorProvider.navigateForward(this.paymentConfig.routes.propeller.adjunstInstallment, {
            state: { pocket: this.viewModel.pocketControl.value },
        });
    };
    PaymentHomePage.prototype.onConfirmation = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var error_1;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 1, , 3]);
                        this.paymentService.showConfirmationInfo(this.i18n.confirmation, this.viewModel.buildItems(this.i18n.confirmation, this.viewModel.pocketControl.value, this.currencyPipe, this.datePipe), Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_13__["createFormat"])(this.i18n.confirmation.footerDescription, [
                            this.datePipe.transform(this.viewModel.lastPayment),
                        ]), function () { return _this.makePayment(); });
                        return [3 /*break*/, 3];
                    case 1:
                        error_1 = _a.sent();
                        this.setAnalyticsIntentionToPay(error_1);
                        return [4 /*yield*/, this.paymentService.toastService.showError(error_1.message)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PaymentHomePage.prototype.initI18n = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var result;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                result = this.translateProvider.get(this.paymentConfig.i18n.content);
                this.i18n = Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_12__["toCamelCaseProperties"])(result);
                return [2 /*return*/];
            });
        });
    };
    PaymentHomePage.prototype.makePayment = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data, transaction;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                data = {
                    operatorType: _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__["OperationCreditType"].PAYMENT,
                    productId: _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__["CreditType"].PROPELLER,
                    debenture: this.customerProduct.credit.debenture,
                    paymentType: _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__["PaymentType"].LOAN,
                    rescheduleType: _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__["RescheduleType"].INSTALLMENTS_NUMBER,
                };
                transaction = new _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__["PaymentTransaction"]()
                    .withData(data)
                    .withAmount(this.viewModel.paymentAmount)
                    .withPocket(this.viewModel.pocketControl.value);
                _super.prototype.executeTransaction.call(this, transaction);
                return [2 /*return*/];
            });
        });
    };
    PaymentHomePage.prototype.asyncLoanPaymentFailed = function () {
        var fullscreenModalConfig = {
            cssClass: this.paymentConfig.fullscreenModal.cssClass,
            cssClassButton: this.paymentConfig.fullscreenModal.cssClassButton,
        };
        if (this.viewModel.paymentTime === _organisms_payment_payment_type__WEBPACK_IMPORTED_MODULE_15__["PaymentType"].PAYMENT &&
            this.viewModel.selectedPayType === _organisms_payment_payment_type__WEBPACK_IMPORTED_MODULE_15__["PaymentType"].PAY_ALL) {
            this.paymentService.showFullScreenModal(this.i18n.cardModal.payTodayAllAsyncPayment, fullscreenModalConfig);
        }
        if (this.viewModel.paymentTime === _organisms_payment_payment_type__WEBPACK_IMPORTED_MODULE_15__["PaymentType"].PAY_TODAY_FEE &&
            this.viewModel.selectedPayType === _organisms_payment_payment_type__WEBPACK_IMPORTED_MODULE_15__["PaymentType"].PAYMENT) {
            this.paymentService.showFullScreenModal(this.i18n.cardModal.payTodayAmountAsyncPayment, fullscreenModalConfig);
        }
        if (this.viewModel.paymentTime === _organisms_payment_payment_type__WEBPACK_IMPORTED_MODULE_15__["PaymentType"].PAY_TODAY_FEE &&
            this.viewModel.selectedPayType === _organisms_payment_payment_type__WEBPACK_IMPORTED_MODULE_15__["PaymentType"].PAY_TODAY_FEE) {
            this.paymentService.showFullScreenModal(this.i18n.cardModal.payTodayFeeAsyncPayment, fullscreenModalConfig);
        }
        if (this.viewModel.paymentTime === _organisms_payment_payment_type__WEBPACK_IMPORTED_MODULE_15__["PaymentType"].PAY_TODAY_FEE &&
            this.viewModel.selectedPayType === _organisms_payment_payment_type__WEBPACK_IMPORTED_MODULE_15__["PaymentType"].PAY_ALL) {
            this.paymentService.showFullScreenModal(this.i18n.cardModal.payTodayAllAsyncPayment, fullscreenModalConfig);
        }
    };
    PaymentHomePage.prototype.showMessageSuccess = function (i18n, customKey) {
        var payOverdueFeeKey = _organisms_payment_payment_type__WEBPACK_IMPORTED_MODULE_15__["PaymentType"].OVERDUE_FEE + "-" + _organisms_payment_payment_type__WEBPACK_IMPORTED_MODULE_15__["PaymentType"].OVERDUE_FEE;
        var _a = this.viewModel.credit.installment, total = _a.total, totalPaid = _a.totalPaid;
        if (payOverdueFeeKey === customKey && this.viewModel.installmentPending === total - totalPaid) {
            this.paymentService.showCardModal(this.i18n.cardModal.payOverdueLastFees);
            return;
        }
        if (payOverdueFeeKey === customKey && this.viewModel.installmentPending === 1) {
            this.i18n.cardModal.payOverdueFee.content = Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_13__["createFormat"])(this.i18n.cardModal.payOverdueFee.content, [this.datePipe.transform(this.viewModel.credit.installment.next.date)]);
            this.paymentService.showCardModal(this.i18n.cardModal.payOverdueFee);
            return;
        }
        if (payOverdueFeeKey === customKey && this.viewModel.installmentPending > 1) {
            this.paymentService.showCardModal(this.i18n.cardModal.payOverdueFees);
            return;
        }
        this.paymentService.showCardModal(i18n);
    };
    PaymentHomePage.prototype.deleteCalendarEvents = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var creditStartDate, creditEndDate, creditNextDate, startDate, endDate, days, params, error_2;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        creditStartDate = this.viewModel.credit.startAt;
                        creditEndDate = this.viewModel.credit.endAt;
                        creditNextDate = this.viewModel.credit.installment.next.date;
                        startDate = void 0;
                        endDate = void 0;
                        if (this.viewModel.selectedPayType === _organisms_payment_payment_type__WEBPACK_IMPORTED_MODULE_15__["PaymentType"].PAY_ALL) {
                            startDate = new Date(creditStartDate);
                            startDate.setDate(startDate.getDate() - 1);
                            endDate = new Date(creditEndDate);
                            endDate.setDate(endDate.getDate() + 1);
                        }
                        else {
                            days = 2;
                            startDate = new Date(creditNextDate);
                            startDate.setDate(startDate.getDate() - 1);
                            endDate = new Date(startDate);
                            endDate.setDate(endDate.getDate() + days);
                        }
                        params = {
                            title: this.translateProvider.get(_payment_home_config__WEBPACK_IMPORTED_MODULE_19__["PaymentConfig"].i18n.calendarTitle),
                            startDate: new Date(startDate),
                            endDate: new Date(endDate),
                        };
                        return [4 /*yield*/, this.calendarPlugin.deleteEvent(params)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        this.loggerInteractor.error("[calendar-plugin] " + JSON.stringify(error_2));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PaymentHomePage.prototype.setAnalyticsOfBegin = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var isPayTodayFee, nextInstallmentAt, paramsValue;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isPayTodayFee = this.viewModel.paymentTime === _organisms_payment_payment_type__WEBPACK_IMPORTED_MODULE_15__["PaymentType"].PAY_TODAY_FEE;
                        nextInstallmentAt = this.viewModel.credit.installment.next.date;
                        paramsValue = [
                            _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__["CreditType"].PROPELLER,
                            String(isPayTodayFee),
                            Object(_nequi_utils_date__WEBPACK_IMPORTED_MODULE_11__["getFormattedDateTimes"])(nextInstallmentAt),
                            this.viewModel.credit.balance,
                            this.viewModel.credit.installment.next.value,
                            this.viewModel.credit.installment.total - this.viewModel.credit.installment.totalPaid,
                        ];
                        return [4 /*yield*/, this.dynatraceService.setAnalyticsOfEvent({
                                eventName: _payment_home_config__WEBPACK_IMPORTED_MODULE_19__["PaymentConfig"].analytics.intentionToPay.name.dynatrace,
                                eventProps: Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_12__["stringsArrayToObjectWithValues"])(_payment_home_config__WEBPACK_IMPORTED_MODULE_19__["PaymentConfig"].analytics.intentionToPay.params.dynatrace, paramsValue),
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PaymentHomePage.prototype.setAnalyticsOfSuccess = function (customKey) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dynatraceService.setAnalyticsOfEnd()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.dynatraceService.setAnalyticsOfEvent({
                                eventName: this.paymentConfig.analytics.intentionToTransactionSuccess.name[customKey] + "_" + _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["FlowType"].PROPELLER,
                                eventProps: Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_12__["stringsArrayToObjectWithValues"])(this.paymentConfig.analytics.intentionToTransactionSuccess.params.dynatrace, [_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__["CreditType"].PROPELLER, this.viewModel.paymentAmount]),
                                leave: true,
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PaymentHomePage.ɵfac = function PaymentHomePage_Factory(t) { return new (t || PaymentHomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_organisms_payment_payment_view_model__WEBPACK_IMPORTED_MODULE_16__["PaymentViewModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_credit_info_model__WEBPACK_IMPORTED_MODULE_17__["CreditInfoModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_money_management_core__WEBPACK_IMPORTED_MODULE_9__["BalanceInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_payment_service__WEBPACK_IMPORTED_MODULE_18__["PaymentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__["CreditEventsHandler"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_native_calendar__WEBPACK_IMPORTED_MODULE_10__["CalendarPlugin"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["LoggerInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_help_presentation__WEBPACK_IMPORTED_MODULE_8__["HelpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["AnalyticsInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_6__["DynatraceService"])); };
    PaymentHomePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PaymentHomePage, selectors: [["app-credits-propeller-payment"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "ion-page", "organismId", "payment", 3, "showMovements", "showHelpButton", "messages", "feePaymentMessage", "showDetailPressed", "goToPaymentPressed", "goToBackPressed", "showHelpPressed", 4, "ngIf"], ["organismId", "payment", 1, "ion-page", 3, "showMovements", "showHelpButton", "messages", "feePaymentMessage", "showDetailPressed", "goToPaymentPressed", "goToBackPressed", "showHelpPressed"]], template: function PaymentHomePage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, PaymentHomePage_app_payment_0_Template, 1, 4, "app-payment", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.customerProduct);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _organisms_payment_payment_organism__WEBPACK_IMPORTED_MODULE_20__["PaymentOrganism"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXltZW50LWhvbWUucGFnZS5zY3NzIn0= */"] });
    return PaymentHomePage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_6__["TransactionBasePage"]));



/***/ }),

/***/ "00WT":
/*!***********************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/propeller/pages/ensure-loan/ensure-loan.config.ts ***!
  \***********************************************************************************************************/
/*! exports provided: EnsureLoanConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnsureLoanConfig", function() { return EnsureLoanConfig; });
var EnsureLoanConfig = Object.freeze({
    i18n: {
        insuranceWithNequiBottomSheet: 'credits.ensure-loan.bottom-sheet',
        ensureLoan: {
            content: 'credits.ensure-loan',
            headerTitle: 'credits.ensure-loan.header.title',
            ensureLoanWithNequi: {
                title: 'credits.ensure-loan.ensure-loan-with-nequi.title',
                description: 'credits.ensure-loan.ensure-loan-with-nequi.description',
                tagImg: 'credits.ensure-loan.ensure-loan-with-nequi.tag-img',
                tagLabel: 'credits.ensure-loan.ensure-loan-with-nequi.tag-label',
            },
            ensureLoanWithAnother: {
                title: 'credits.ensure-loan.ensure-loan-with-another.title',
                description: 'credits.ensure-loan.ensure-loan-with-another.description',
                tagImg: 'credits.ensure-loan.ensure-loan-with-another.tag-img',
                tagLabel: 'credits.ensure-loan.ensure-loan-with-another.tag-label',
            },
            moreInfoButton: 'credits.ensure-loan.more-info-button',
        },
        logs: 'credits.ensure-loan.logs',
        creditName: 'credits.credit-name',
    },
    insuranceCarrier: 'Suramericana de Seguros S.A.',
    goTo: {
        loanInfo: '/admin/credits/propeller/loan-info',
        sendYourPolicy: 'mailto:enviatupoliza@nequi.co',
    },
    idSelectors: {
        continueButtonId: 'info-list_continue_button',
        chooseButtonId: 'info-list_choose_button',
        policyButtonId: 'info-list_policy_button',
    },
    analytics: {
        intentionOfEnsureLoan: {
            name: 'preaprobado_seguro_propulsor',
            params: {
                dynatrace: ['product_id', 'precio_seguro'],
            },
        },
    },
});


/***/ }),

/***/ "0rmU":
/*!***********************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/propeller/pages/loan-info/loan-info.view-model.ts ***!
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

/***/ "1MwG":
/*!**********************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/propeller/config/propeller.config.ts ***!
  \**********************************************************************************************/
/*! exports provided: PropellerConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropellerConfig", function() { return PropellerConfig; });
var config = {
    i18n: {
        moduleKey: 'credits',
        contractModuleKey: 'credits/contract',
    },
    applicationData: {
        isTimeToPay: 'propeller.is-time-to-pay',
        homeIsShowFirstMessage: 'propeller.payment-home-is-show-first-message',
        showMovementsModal: 'propeller.movements-show-modal',
    },
};
var PropellerConfig = Object.freeze(config);


/***/ }),

/***/ "1wwv":
/*!*********************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/propeller/pages/this-got-serious/this-got-serious.config.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: ThisGotSeriousConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThisGotSeriousConfig", function() { return ThisGotSeriousConfig; });
var ThisGotSeriousConfig = Object.freeze({
    i18n: {
        title: 'credits.this-got-serious.title',
        itemlist: [
            {
                img: 'credits.this-got-serious.content.payments-auto.img',
                title: 'credits.this-got-serious.content.payments-auto.title',
                description: 'credits.this-got-serious.content.payments-auto.description',
            },
            {
                img: 'credits.this-got-serious.content.we-can-report-you.img',
                title: 'credits.this-got-serious.content.we-can-report-you.title',
                description: 'credits.this-got-serious.content.we-can-report-you.description',
            },
        ],
        acceptButton: 'credits.this-got-serious.accept-button',
        logs: 'credits.this-got-serious.logs',
    },
    goTo: {
        termsAndConditions: '/admin/credits/propeller/terms-and-conditions',
    },
});


/***/ }),

/***/ "81L6":
/*!*************************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/propeller/pages/loan-destination/loan-destination.view-model.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: LoanDestinationViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanDestinationViewModel", function() { return LoanDestinationViewModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");


var LoanDestinationViewModel = /** @class */ (function () {
    function LoanDestinationViewModel() {
    }
    LoanDestinationViewModel.prototype.initForm = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.destination = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
                this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                    destination: this.destination,
                });
                return [2 /*return*/];
            });
        });
    };
    return LoanDestinationViewModel;
}());



/***/ }),

/***/ "9LbZ":
/*!***********************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/propeller/propeller-routing.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: PropellerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropellerRoutingModule", function() { return PropellerRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _middlewares_base_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../middlewares/base.config */ "lvuB");
/* harmony import */ var _middlewares_base_middleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../middlewares/base.middleware */ "Jqih");
/* harmony import */ var _middlewares_propeller_middleware__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../middlewares/propeller.middleware */ "bw8x");
/* harmony import */ var _organisms_approval_front_pages_occupation_engine_occupation_engine_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../organisms/approval-front/pages/occupation-engine/occupation-engine.page */ "BkOq");
/* harmony import */ var _organisms_approval_front_pages_your_money_engine_your_money_engine_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../organisms/approval-front/pages/your-money-engine/your-money-engine.page */ "xpCB");
/* harmony import */ var _config_propeller_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./config/propeller.config */ "1MwG");
/* harmony import */ var _pages_adjust_installments_adjust_installments_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/adjust-installments/adjust-installments.page */ "YmSa");
/* harmony import */ var _pages_agreement_fga_agreement_fga_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/agreement-fga/agreement-fga.page */ "L5KX");
/* harmony import */ var _pages_change_live_insurance_change_live_insurance_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/change-live-insurance/change-live-insurance.page */ "A6aE");
/* harmony import */ var _pages_ensure_loan_ensure_loan_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/ensure-loan/ensure-loan.page */ "IxJh");
/* harmony import */ var _pages_home_home_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/home/home.page */ "QK8n");
/* harmony import */ var _pages_know_us_better_engine_know_us_better_engine_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/know-us-better-engine/know-us-better-engine.page */ "p35x");
/* harmony import */ var _pages_know_us_better_know_us_better_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/know-us-better/know-us-better.page */ "C2/M");
/* harmony import */ var _pages_life_insurance_life_insurance_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/life-insurance/life-insurance.page */ "U2KV");
/* harmony import */ var _pages_loan_destination_loan_destination_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/loan-destination/loan-destination.page */ "L2GC");
/* harmony import */ var _pages_loan_info_loan_info_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/loan-info/loan-info.page */ "xAf0");
/* harmony import */ var _pages_payment_detail_payment_detail_page__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/payment-detail/payment-detail.page */ "G1bk");
/* harmony import */ var _pages_payment_guarantees_payment_guarantees_page__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/payment-guarantees/payment-guarantees.page */ "V8rb");
/* harmony import */ var _pages_payment_home_payment_home_page__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/payment-home/payment-home.page */ "/SdG");
/* harmony import */ var _pages_preapproved_home_preapproved_home_page__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/preapproved-home/preapproved-home.page */ "f44g");
/* harmony import */ var _pages_terms_and_conditions_terms_and_conditions_page__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/terms-and-conditions/terms-and-conditions.page */ "Ep/S");
/* harmony import */ var _pages_this_got_serious_this_got_serious_page__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/this-got-serious/this-got-serious.page */ "mXVN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ "fXoL");



























var routes = [
    {
        path: '',
        canActivate: [_middlewares_propeller_middleware__WEBPACK_IMPORTED_MODULE_5__["PropellerMiddleware"]],
        data: {
            moduleName: _middlewares_base_middleware__WEBPACK_IMPORTED_MODULE_4__["MiddlewareModuleName"].PROPELLER,
            bottomSheetKey: _middlewares_base_config__WEBPACK_IMPORTED_MODULE_3__["BaseConfig"].propeller.bottomSheet,
            redirectToPayment: _middlewares_base_config__WEBPACK_IMPORTED_MODULE_3__["BaseConfig"].routes.propellerPayment,
            redirectToPreapproved: _middlewares_base_config__WEBPACK_IMPORTED_MODULE_3__["BaseConfig"].routes.propellerPreapproved,
            flowType: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["FlowType"].PROPELLER,
        },
        component: _pages_home_home_page__WEBPACK_IMPORTED_MODULE_13__["HomePage"],
    },
    {
        path: 'payment-guarantees',
        component: _pages_payment_guarantees_payment_guarantees_page__WEBPACK_IMPORTED_MODULE_20__["PaymentGuaranteesPage"],
    },
    {
        path: 'life-insurance',
        component: _pages_life_insurance_life_insurance_page__WEBPACK_IMPORTED_MODULE_16__["LifeInsurancePage"],
    },
    {
        path: 'ensure-loan',
        component: _pages_ensure_loan_ensure_loan_page__WEBPACK_IMPORTED_MODULE_12__["EnsureLoanPage"],
    },
    {
        path: 'loan-info',
        component: _pages_loan_info_loan_info_page__WEBPACK_IMPORTED_MODULE_18__["LoanInfoPage"],
    },
    {
        path: 'know-us-better',
        component: _pages_know_us_better_know_us_better_page__WEBPACK_IMPORTED_MODULE_15__["KnowUsBetterPage"],
    },
    {
        path: 'loan-destination',
        component: _pages_loan_destination_loan_destination_page__WEBPACK_IMPORTED_MODULE_17__["LoanDestinationPage"],
    },
    {
        path: 'this-got-serious',
        component: _pages_this_got_serious_this_got_serious_page__WEBPACK_IMPORTED_MODULE_24__["ThisGotSeriousPage"],
    },
    {
        path: 'terms-and-conditions',
        component: _pages_terms_and_conditions_terms_and_conditions_page__WEBPACK_IMPORTED_MODULE_23__["TermsAndConditionsPage"],
    },
    {
        path: 'agreement-fga',
        component: _pages_agreement_fga_agreement_fga_page__WEBPACK_IMPORTED_MODULE_10__["AgreementFGAPage"],
    },
    {
        path: 'payment-detail',
        component: _pages_payment_detail_payment_detail_page__WEBPACK_IMPORTED_MODULE_19__["PaymentDetailPage"],
    },
    {
        path: 'adjust-installments',
        component: _pages_adjust_installments_adjust_installments_page__WEBPACK_IMPORTED_MODULE_9__["AdjustIntallmentsPage"],
    },
    {
        path: 'know-us-better-engine',
        component: _pages_know_us_better_engine_know_us_better_engine_page__WEBPACK_IMPORTED_MODULE_14__["KnowUsBetterEnginePage"],
    },
    {
        path: 'change-live-insurance',
        component: _pages_change_live_insurance_change_live_insurance_page__WEBPACK_IMPORTED_MODULE_11__["ChangeLiveInsurancePage"],
    },
    {
        path: 'payment-home',
        component: _pages_payment_home_payment_home_page__WEBPACK_IMPORTED_MODULE_21__["PaymentHomePage"],
    },
    {
        path: 'preapproved-home',
        component: _pages_preapproved_home_preapproved_home_page__WEBPACK_IMPORTED_MODULE_22__["PreapprovedHomePage"],
    },
    {
        path: 'occupation-engine',
        component: _organisms_approval_front_pages_occupation_engine_occupation_engine_page__WEBPACK_IMPORTED_MODULE_6__["OccupationEnginePage"],
    },
    {
        path: 'your-money-engine',
        component: _organisms_approval_front_pages_your_money_engine_your_money_engine_page__WEBPACK_IMPORTED_MODULE_7__["YourMoneyEnginePage"],
    },
    {
        path: 'profile',
        loadChildren: function () {
            return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @nequi/features/profile/presentation */ "cLcF")).then(function (m) { return m.FeaturesProfileModule; });
        },
    },
];
var PropellerRoutingModule = /** @class */ (function () {
    function PropellerRoutingModule() {
    }
    PropellerRoutingModule.ɵfac = function PropellerRoutingModule_Factory(t) { return new (t || PropellerRoutingModule)(); };
    PropellerRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineNgModule"]({ type: PropellerRoutingModule });
    PropellerRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineInjector"]({ imports: [[
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(_nequi_features_commons__WEBPACK_IMPORTED_MODULE_1__["I18nModuleResolver"].setup(routes, [
                    _config_propeller_config__WEBPACK_IMPORTED_MODULE_8__["PropellerConfig"].i18n.moduleKey,
                    _config_propeller_config__WEBPACK_IMPORTED_MODULE_8__["PropellerConfig"].i18n.contractModuleKey,
                ])),
            ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return PropellerRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsetNgModuleScope"](PropellerRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "9qbw":
/*!*********************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/propeller/pages/preapproved-home/preapproved-home.config.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: PropellerConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropellerConfig", function() { return PropellerConfig; });
var PropellerConfig = Object.freeze({
    i18n: {
        preapproval: {
            headerTitle: 'credits.home.preapproval.header.title',
            amount: {
                title: 'credits.home.preapproval.amount.title',
                min: 'credits.home.preapproval.amount.min',
            },
            termLabel: 'credits.home.preapproval.term.label',
            monthlyPaymentAmount: {
                label: 'credits.home.preapproval.monthly-payment-amount.label',
                complementText: 'credits.home.preapproval.monthly-payment-amount.complement-text',
                additionalText: 'credits.home.preapproval.monthly-payment-amount.additional-text',
                infoMessage: 'credits.home.preapproval.monthly-payment-amount.info-message',
            },
            footer: {
                readyButtonText: 'credits.home.preapproval.footer.ready-button.text',
                conditionButtonText: 'credits.home.preapproval.footer.condition-button.text',
            },
        },
        helpContext: 'payment-credit-help',
        logs: {
            amount: 'credits.home.logs.amount',
        },
    },
    routes: {
        paymentGuarantees: '/admin/credits/propeller/payment-guarantees',
        help: '/help',
    },
    timeOut: 1000,
});


/***/ }),

/***/ "A6aE":
/*!*****************************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/propeller/pages/change-live-insurance/change-live-insurance.page.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: ChangeLiveInsurancePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeLiveInsurancePage", function() { return ChangeLiveInsurancePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_utils_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/utils/string */ "p6rB");
/* harmony import */ var _change_live_insurance_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./change-live-insurance.config */ "vtSZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");










function ChangeLiveInsurancePage_ion_header_0_Template(rf, ctx) { if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-toolbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-buttons", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ChangeLiveInsurancePage_ion_header_0_Template_ion_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3); var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r2.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "ion-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ChangeLiveInsurancePage_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r4.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHtml", item_r4.description, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
} }
var ChangeLiveInsurancePage = /** @class */ (function () {
    function ChangeLiveInsurancePage(navController, translateProvider) {
        this.navController = navController;
        this.translateProvider = translateProvider;
        this.config = _change_live_insurance_config__WEBPACK_IMPORTED_MODULE_4__["ChangeLiveInsuranceConfig"];
        this.isScreenShotTaken = false;
    }
    ChangeLiveInsurancePage.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.loadData();
                return [2 /*return*/];
            });
        });
    };
    ChangeLiveInsurancePage.prototype.goBack = function () {
        this.navController.back();
    };
    ChangeLiveInsurancePage.prototype.loadData = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var i18nItems;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                i18nItems = this.translateProvider.get(this.config.i18n.items);
                this.infoItems = [
                    {
                        label: i18nItems.send.title,
                        description: i18nItems.send.description,
                    },
                    {
                        label: i18nItems.check.title,
                        description: Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_3__["createFormat"])(i18nItems.check.description, [
                            this.config.cssClass,
                            this.config.link,
                        ]),
                    },
                    {
                        label: i18nItems.answer.title,
                        description: i18nItems.answer.description,
                    },
                ];
                return [2 /*return*/];
            });
        });
    };
    ChangeLiveInsurancePage.ɵfac = function ChangeLiveInsurancePage_Factory(t) { return new (t || ChangeLiveInsurancePage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_2__["TranslateProvider"])); };
    ChangeLiveInsurancePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ChangeLiveInsurancePage, selectors: [["app-change-live-insurance"]], decls: 11, vars: 8, consts: [["class", "nequi-header", 4, "ngIf"], ["fullscreen", "true", 1, "ion-content--white", "ion-padding-horizontal"], [1, "nequi-title"], ["class", "change-live-insurance__content", 4, "ngFor", "ngForOf"], [1, "nequi-footer", "ion-no-border", "card__footer"], [1, "nequi-footer__toolbar"], ["id", "change-live-insurance_go-back-footer_button", "shape", "round", "color", "guayaba", "expand", "block", 1, "nequi-footer__button", 3, "click"], [1, "nequi-header"], ["slot", "start"], ["id", "change-live-insurance_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], [1, "change-live-insurance__content"], [1, "change-live-insurance__label"], [1, "change-live-insurance__description", 3, "innerHtml"]], template: function ChangeLiveInsurancePage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, ChangeLiveInsurancePage_ion_header_0_Template, 5, 0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-content", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ChangeLiveInsurancePage_div_5_Template, 4, 2, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-footer", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-toolbar", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ChangeLiveInsurancePage_Template_ion_button_click_8_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isScreenShotTaken);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 4, ctx.config.i18n.headerTitle), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.infoItems);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 6, ctx.config.i18n.backButton), " ");
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]], styles: [".change-live-insurance__content[_ngcontent-%COMP%] {\n  padding-top: 16px;\n  border-bottom: 1px solid var(--divisor-line);\n}\n.change-live-insurance__content[_ngcontent-%COMP%]:last-of-type {\n  border: 0px;\n}\n.change-live-insurance__label[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 22px;\n  color: var(--medianoche);\n}\n.change-live-insurance__description[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 17px;\n  color: var(--gray-70);\n  padding: 4px 0px 16px 0px;\n}\n.nequi-title[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\n.nequi-footer__toolbar[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvY2hhbmdlLWxpdmUtaW5zdXJhbmNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGlCQUFBO0VBQ0EsNENBQUE7QUFBSjtBQUVJO0VBQ0UsV0FBQTtBQUFOO0FBSUU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7QUFGSjtBQUtFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUFISjtBQU9BO0VBQ0Usa0JBQUE7QUFKRjtBQVFFO0VBQ0Usa0JBQUE7QUFMSiIsImZpbGUiOiJjaGFuZ2UtbGl2ZS1pbnN1cmFuY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYW5nZS1saXZlLWluc3VyYW5jZSB7XG4gICZfX2NvbnRlbnQge1xuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kaXZpc29yLWxpbmUpO1xuXG4gICAgJjpsYXN0LW9mLXR5cGUge1xuICAgICAgYm9yZGVyOiAwcHg7XG4gICAgfVxuICB9XG5cbiAgJl9fbGFiZWwge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICBjb2xvcjogdmFyKC0tbWVkaWFub2NoZSk7XG4gIH1cblxuICAmX19kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAgIGNvbG9yOiB2YXIoLS1ncmF5LTcwKTtcbiAgICBwYWRkaW5nOiA0cHggMHB4IDE2cHggMHB4O1xuICB9XG59XG5cbi5uZXF1aS10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLm5lcXVpLWZvb3RlciB7XG4gICZfX3Rvb2xiYXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuIl19 */"] });
    return ChangeLiveInsurancePage;
}());



/***/ }),

/***/ "C2/M":
/*!***************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/propeller/pages/know-us-better/know-us-better.page.ts ***!
  \***************************************************************************************************************/
/*! exports provided: KnowUsBetterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnowUsBetterPage", function() { return KnowUsBetterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/credits/core */ "42wy");
/* harmony import */ var _nequi_features_profile_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/profile/core */ "w8sc");
/* harmony import */ var _nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/features/profile/presentation */ "cLcF");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _config_credits_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../config/credits.config */ "M3Ap");
/* harmony import */ var _services_credit_logger_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../services/credit-logger.service */ "2ibl");
/* harmony import */ var _services_customer_finacial_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../services/customer-finacial.service */ "uuzL");
/* harmony import */ var _know_us_better_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./know-us-better.config */ "Xc0T");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../../../ui/src/lib/directives/animate-title-on-scroll/animate-title-on-scroll.directive */ "qbWi");
/* harmony import */ var _profile_src_presentation_organisms_module_list_module_list_organism__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../../profile/src/presentation/organisms/module-list/module-list.organism */ "RZDl");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");




























var _c0 = ["nequiPropellerKnowUsBetterModuleList"];
var KnowUsBetterPage = /** @class */ (function () {
    function KnowUsBetterPage(translateProvider, creditLoggerService, moduleInfoInteractor, loggerInteractor, toastService, alertService, navigatorProvider, configCreditProvider, userInfoProvider, currencyPipe, customerFinancialService, loadingService, dynatraceService) {
        this.translateProvider = translateProvider;
        this.creditLoggerService = creditLoggerService;
        this.moduleInfoInteractor = moduleInfoInteractor;
        this.loggerInteractor = loggerInteractor;
        this.toastService = toastService;
        this.alertService = alertService;
        this.navigatorProvider = navigatorProvider;
        this.configCreditProvider = configCreditProvider;
        this.userInfoProvider = userInfoProvider;
        this.currencyPipe = currencyPipe;
        this.customerFinancialService = customerFinancialService;
        this.loadingService = loadingService;
        this.dynatraceService = dynatraceService;
        this.config = _know_us_better_config__WEBPACK_IMPORTED_MODULE_13__["KnowUsBetterConfig"];
    }
    KnowUsBetterPage.prototype.ngOnInit = function () {
        this.setAnalyticsOfBegin();
    };
    KnowUsBetterPage.prototype.goBack = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dynatraceService.setAnalyticsOfEnd()];
                    case 1:
                        _a.sent();
                        this.navigatorProvider.back();
                        return [2 /*return*/];
                }
            });
        });
    };
    KnowUsBetterPage.prototype.goToHelp = function () {
        Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_9__["openUrl"])(this.config.goTo.help);
    };
    KnowUsBetterPage.prototype.onCompletedRequestData = function (modules) {
        this.moduleListData = modules;
        var incomeExpenses = modules.find(function (module) { return module.type === _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["ModuleCode"].INCOME_EXPENSES; })
            .data;
        if (incomeExpenses) {
            this.setCreditUserInfoAsset(incomeExpenses);
        }
        if (this.canDoSarlaft()) {
            this.setLog();
        }
    };
    KnowUsBetterPage.prototype.onCompletedModuleData = function (module) {
        if (module.type === _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["ModuleCode"].LOCATION) {
            this.locationCompletedHandler(module.data);
        }
        if (module.type === _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["ModuleCode"].OCCUPATION) {
            this.occupationCompletedHandler(module.data);
        }
        if (module.type === _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["ModuleCode"].INCOME_EXPENSES) {
            this.incomeAndExpensesCompletedHandler(module.data);
        }
    };
    KnowUsBetterPage.prototype.setCreditUserInfoAsset = function (incomeExpenses) {
        var _a, _b;
        this.customerFinancialService.updateCreditUser(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.customerFinancialService.creditUserInfo), { assets: (_b = (_a = incomeExpenses.incomeExpenses) === null || _a === void 0 ? void 0 : _a.creditDebit) === null || _b === void 0 ? void 0 : _b.credit }));
    };
    KnowUsBetterPage.prototype.incomeAndExpensesCompletedHandler = function (incomeAndExpenses) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 5]);
                        return [4 /*yield*/, this.moduleInfoInteractor.saveModuleInfo({
                                code: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["ModuleCode"].INCOME_EXPENSES,
                                data: { key: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["ModuleName"].INCOME_EXPENSES, value: incomeAndExpenses },
                            })];
                    case 1:
                        _a.sent();
                        this.setCreditUserInfoAsset(incomeAndExpenses);
                        return [4 /*yield*/, this.sarlaftHandler()];
                    case 2:
                        if (_a.sent()) {
                            this.moduleListOrganism.finish();
                        }
                        return [3 /*break*/, 5];
                    case 3:
                        error_1 = _a.sent();
                        this.dynatraceService.setCustomError(error_1);
                        this.loggerInteractor.error(error_1);
                        return [4 /*yield*/, this.toastService.showError(error_1.message)];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    KnowUsBetterPage.prototype.locationCompletedHandler = function (location) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var error_2;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 5]);
                        return [4 /*yield*/, this.moduleInfoInteractor.saveModuleInfo({
                                code: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["ModuleCode"].LOCATION,
                                data: { key: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["ModuleName"].LOCATION, value: location },
                            })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.sarlaftHandler()];
                    case 2:
                        if (_a.sent()) {
                            this.moduleListOrganism.finish();
                        }
                        return [3 /*break*/, 5];
                    case 3:
                        error_2 = _a.sent();
                        this.dynatraceService.setCustomError(error_2);
                        this.loggerInteractor.error(error_2);
                        return [4 /*yield*/, this.toastService.showError(error_2.message)];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    KnowUsBetterPage.prototype.occupationCompletedHandler = function (occupation) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var error_3;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 5]);
                        return [4 /*yield*/, this.moduleInfoInteractor.saveModuleInfo({
                                code: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["ModuleCode"].OCCUPATION,
                                data: { key: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["ModuleName"].OCCUPATION, value: occupation },
                            })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.sarlaftHandler()];
                    case 2:
                        if (_a.sent()) {
                            this.moduleListOrganism.finish();
                        }
                        return [3 /*break*/, 5];
                    case 3:
                        error_3 = _a.sent();
                        this.dynatraceService.setCustomError(error_3);
                        this.loggerInteractor.error(error_3);
                        return [4 /*yield*/, this.toastService.showError(error_3.message)];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    KnowUsBetterPage.prototype.lockedInSarlaftError = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var message;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        message = this.translateProvider.get(this.config.i18n.sarlaft.alert.lockedInSarlaftError);
                        return [4 /*yield*/, this.alertService.show({
                                messages: {
                                    header: message.header,
                                    message: message.message,
                                    buttons: message.buttons,
                                },
                                handlers: {
                                    accept: function () { return _this.navigatorProvider.navigateRoot([_this.config.goTo.backpack]); },
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
    KnowUsBetterPage.prototype.canDoSarlaft = function () {
        var canDo = false;
        var documentData = this.moduleListOrganism.getModuleData(this.moduleListData, _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["ModuleCode"].CAPTURE_DOCUMENT);
        this.locationData = this.moduleListOrganism.getModuleData(this.moduleListData, _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["ModuleCode"].LOCATION);
        this.occupationData = this.moduleListOrganism.getModuleData(this.moduleListData, _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["ModuleCode"].OCCUPATION);
        this.incomeAndExpensesData = this.moduleListOrganism.getModuleData(this.moduleListData, _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["ModuleCode"].INCOME_EXPENSES);
        var isDocumentValid = documentData && !(documentData === null || documentData === void 0 ? void 0 : documentData.error);
        canDo = !!(isDocumentValid &&
            this.locationData &&
            this.occupationData &&
            this.incomeAndExpensesData);
        return canDo;
    };
    KnowUsBetterPage.prototype.sarlaftHandler = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var occupationCode, error_4;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_m) {
                switch (_m.label) {
                    case 0:
                        _m.trys.push([0, 4, 5, 7]);
                        return [4 /*yield*/, this.loadingService.show()];
                    case 1:
                        _m.sent();
                        if (!this.canDoSarlaft()) return [3 /*break*/, 3];
                        occupationCode = ((_b = (_a = this.occupationData) === null || _a === void 0 ? void 0 : _a.ciiuCode) === null || _b === void 0 ? void 0 : _b.key) ? (_d = (_c = this.occupationData) === null || _c === void 0 ? void 0 : _c.ciiuCode) === null || _d === void 0 ? void 0 : _d.key : (_f = (_e = this.occupationData) === null || _e === void 0 ? void 0 : _e.occupation) === null || _f === void 0 ? void 0 : _f.name.toUpperCase();
                        return [4 /*yield*/, this.moduleInfoInteractor.calculateClientRisk({
                                cityCode: (_h = (_g = this.locationData) === null || _g === void 0 ? void 0 : _g.city) === null || _h === void 0 ? void 0 : _h.code,
                                countryCode: this.configCreditProvider.countryCode,
                                incomes: (_l = (_k = (_j = this.incomeAndExpensesData) === null || _j === void 0 ? void 0 : _j.incomeExpenses) === null || _k === void 0 ? void 0 : _k.income) === null || _l === void 0 ? void 0 : _l.max,
                                occupationCode: occupationCode,
                            })];
                    case 2:
                        _m.sent();
                        return [2 /*return*/, true];
                    case 3: return [2 /*return*/, true];
                    case 4:
                        error_4 = _m.sent();
                        this.manageErrors(error_4);
                        return [3 /*break*/, 7];
                    case 5: return [4 /*yield*/, this.loadingService.hideWithoutFeedback()];
                    case 6:
                        _m.sent();
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    KnowUsBetterPage.prototype.manageErrors = function (error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.dynatraceService.setCustomError(error);
                        if (!_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["SARLAFT_LOCKS"].includes(error.code)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.lockedInSarlaftError()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                    case 2: return [4 /*yield*/, this.toastService.showError(error.message)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    KnowUsBetterPage.prototype.setLog = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var barcodeInfo = this.moduleListOrganism.getModuleData(this.moduleListData, _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["ModuleCode"].BARCODE_INFORMATION);
        var address = this.locationData.address;
        var birthDate = (_a = barcodeInfo === null || barcodeInfo === void 0 ? void 0 : barcodeInfo.birthDate) === null || _a === void 0 ? void 0 : _a.replace(this.config.regex.dateformat, '$1-$2-$3');
        var params = [
            (_b = barcodeInfo === null || barcodeInfo === void 0 ? void 0 : barcodeInfo.documentNumber) === null || _b === void 0 ? void 0 : _b.toString(),
            birthDate,
            this.userInfoProvider.getEmail(),
            this.locationData.province.name,
            this.locationData.city.name,
            address.road.alias + " " + address.firstPart + " " + address.secondPart,
            this.occupationData.occupation.name,
            (_d = (_c = this.incomeAndExpensesData.incomeExpenses) === null || _c === void 0 ? void 0 : _c.income) === null || _d === void 0 ? void 0 : _d.description,
            (_f = (_e = this.incomeAndExpensesData.incomeExpenses) === null || _e === void 0 ? void 0 : _e.expenses) === null || _f === void 0 ? void 0 : _f.description,
            this.currencyPipe.transform((_h = (_g = this.incomeAndExpensesData.incomeExpenses) === null || _g === void 0 ? void 0 : _g.creditDebit) === null || _h === void 0 ? void 0 : _h.credit.toString()),
            this.currencyPipe.transform((_k = (_j = this.incomeAndExpensesData.incomeExpenses) === null || _j === void 0 ? void 0 : _j.creditDebit) === null || _k === void 0 ? void 0 : _k.debit.toString()),
            (_m = (_l = this.incomeAndExpensesData.incomeExpenses) === null || _l === void 0 ? void 0 : _l.originMoney) === null || _m === void 0 ? void 0 : _m.name,
        ];
        this.creditLoggerService.save({
            flowType: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["FlowType"].PROPELLER,
            i18nKey: this.config.i18n.logs,
            params: params,
        });
    };
    KnowUsBetterPage.prototype.setAnalyticsOfBegin = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dynatraceService.setAnalyticsOfEvent({
                            eventName: this.config.analytics.intentionOfModules.name,
                            eventProps: Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_9__["stringsArrayToObjectWithValues"])(this.config.analytics.intentionOfModules.params.dynatrace, [_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["CreditType"].PROPELLER]),
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    KnowUsBetterPage.ɵfac = function KnowUsBetterPage_Factory(t) { return new (t || KnowUsBetterPage)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_4__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_credit_logger_service__WEBPACK_IMPORTED_MODULE_11__["CreditLoggerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_nequi_features_profile_core__WEBPACK_IMPORTED_MODULE_6__["ModuleInfoInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["LoggerInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_8__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_4__["NavigatorProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_config_credits_config__WEBPACK_IMPORTED_MODULE_10__["ConfigCreditProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_4__["UserInfoProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_customer_finacial_service__WEBPACK_IMPORTED_MODULE_12__["CustomerFinancialService"]), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_8__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__["DynatraceService"])); };
    KnowUsBetterPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({ type: KnowUsBetterPage, selectors: [["app-credits-know-us-better"]], viewQuery: function KnowUsBetterPage_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c0, 1);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.moduleListOrganism = _t.first);
        } }, decls: 17, vars: 11, consts: [[1, "nequi-header", "nequi-header--white"], ["slot", "start"], ["id", "know-us-better_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], [1, "nequi-header__title", "ion-text-start"], ["slot", "end"], ["id", "know-us-better_go-help_button", 3, "click"], ["slot", "icon-only", "name", "help-outline"], ["fullscreen", "true", "appAnimateTitleOnScroll", "", "scrollEvents", "true", 1, "ion-content--white", "ion-padding-horizontal"], [1, "nequi-title"], ["organismId", "know-us-better", 3, "items", "moduleList", "navOrder", "addressFormat", "currentUrl", "completed", "completedRequestData"], ["nequiPropellerKnowUsBetterModuleList", ""]], template: function KnowUsBetterPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function KnowUsBetterPage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "ion-title", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](7, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "ion-buttons", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "ion-button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function KnowUsBetterPage_Template_ion_button_click_9_listener() { return ctx.goToHelp(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](10, "ion-icon", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "ion-content", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](14, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "nequi-profile-module-list", 10, 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("completed", function KnowUsBetterPage_Template_nequi_profile_module_list_completed_15_listener($event) { return ctx.onCompletedModuleData($event); })("completedRequestData", function KnowUsBetterPage_Template_nequi_profile_module_list_completedRequestData_15_listener($event) { return ctx.onCompletedRequestData($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](7, 7, ctx.config.i18n.headerTitle), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](14, 9, ctx.config.i18n.headerTitle), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("items", ctx.config.navButtons)("moduleList", ctx.config.moduleList)("navOrder", ctx.config.navOrder)("addressFormat", ctx.config.i18n.addressText)("currentUrl", ctx.config.goTo.currentUrl);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonContent"], _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_16__["AnimateTitleOnScrollDirective"], _profile_src_presentation_organisms_module_list_module_list_organism__WEBPACK_IMPORTED_MODULE_17__["ModuleListOrganism"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["TranslatePipe"]], encapsulation: 2 });
    return KnowUsBetterPage;
}());



/***/ }),

/***/ "E3vt":
/*!*******************************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/propeller/pages/adjust-installments/adjust-installments.view-model.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: AdjustIntallmentsViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdjustIntallmentsViewModel", function() { return AdjustIntallmentsViewModel; });
/* harmony import */ var _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nequi/features/credits/core */ "42wy");

var AdjustIntallmentsViewModel = /** @class */ (function () {
    function AdjustIntallmentsViewModel() {
        this.hasError = false;
    }
    AdjustIntallmentsViewModel.prototype.buildItems = function (params) {
        var pocket = {
            isPocket: true,
            title: params.messages.items.pocket,
            name: params.pocketInfo.name,
            image: params.pocketInfo.imageUrl,
            icon: params.pocketInfo.iconUrl,
        };
        var items = [
            {
                label: params.messages.items.amount,
                value: params.currencyPipe.transform(params.paymentAmount),
            },
        ];
        if (this.rescheduleType === _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_0__["RescheduleType"].INSTALLMENTS_NUMBER) {
            items = items.concat([
                {
                    label: params.messages.items.adjustTypeNumber.label,
                    value: params.messages.items.adjustTypeNumber.value,
                },
            ]);
        }
        if (this.rescheduleType === _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_0__["RescheduleType"].INSTALLMENTS_AMOUNT) {
            items = items.concat([
                {
                    label: params.messages.items.adjustTypeAmount.label,
                    value: params.messages.items.adjustTypeAmount.value,
                },
            ]);
        }
        items.push({
            label: params.messages.items.nextPayment.label,
            value: params.datePipe.transform(params.nextFeeDate),
            helpMessage: params.messages.items.nextPayment.message,
        }, pocket);
        return items;
    };
    return AdjustIntallmentsViewModel;
}());



/***/ }),

/***/ "Ep/S":
/*!***************************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/propeller/pages/terms-and-conditions/terms-and-conditions.page.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: TermsAndConditionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsAndConditionsPage", function() { return TermsAndConditionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/features/credits/core */ "42wy");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _services_credit_info_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../services/credit-info.model */ "9FmH");
/* harmony import */ var _services_credit_logger_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../services/credit-logger.service */ "2ibl");
/* harmony import */ var _terms_and_conditions_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./terms-and-conditions.config */ "uYL7");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../../ui/src/lib/directives/animate-title-on-scroll/animate-title-on-scroll.directive */ "qbWi");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ui_src_lib_pipes_trust_html_trust_html_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../../../ui/src/lib/pipes/trust-html/trust-html.pipe */ "FKD1");

























var TermsAndConditionsPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TermsAndConditionsPage, _super);
    function TermsAndConditionsPage(injector, translateProvider, route, creditInfoModel, toastService, creditLoggerService, dynatraceService) {
        var _this = _super.call(this, injector) || this;
        _this.translateProvider = translateProvider;
        _this.route = route;
        _this.creditInfoModel = creditInfoModel;
        _this.toastService = toastService;
        _this.creditLoggerService = creditLoggerService;
        _this.dynatraceService = dynatraceService;
        _this.config = _terms_and_conditions_config__WEBPACK_IMPORTED_MODULE_12__["TermsAndConditionsConfig"];
        return _this;
    }
    TermsAndConditionsPage.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.setAnalyticsOfBegin();
                this.initPage();
                return [2 /*return*/];
            });
        });
    };
    TermsAndConditionsPage.prototype.ionViewWillLeave = function () {
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
    TermsAndConditionsPage.prototype.acceptAgreement = function () {
        if (window.navigator.onLine) {
            this.goToAgreementFGA();
        }
        if (!window.navigator.onLine) {
            this.messageToastError();
        }
    };
    TermsAndConditionsPage.prototype.goToAgreementFGA = function () {
        this.navigatorProvider.navigateForward(this.config.goTo.agreementFGA);
    };
    TermsAndConditionsPage.prototype.messageToastError = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var message;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                message = this.translateProvider.get(this.config.i18n.messageToastError);
                this.toastService.showError(message);
                return [2 /*return*/];
            });
        });
    };
    TermsAndConditionsPage.prototype.initForm = function () {
        this.acceptAgreementCheckbox = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
    };
    TermsAndConditionsPage.prototype.initData = function () {
        this.termsAndConditions = this.creditInfoModel.agreement.agreement;
    };
    TermsAndConditionsPage.prototype.initPage = function () {
        this.initForm();
        this.initData();
        this.setLog(this.config.i18n.logs);
    };
    TermsAndConditionsPage.prototype.setLog = function (messages) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.creditLoggerService.save({ flowType: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["FlowType"].PROPELLER, i18nKey: messages });
                return [2 /*return*/];
            });
        });
    };
    TermsAndConditionsPage.prototype.setAnalyticsOfBegin = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dynatraceService.setAnalyticsOfEvent({
                            eventName: this.config.analytics.intentionOfTermsAndConditions.name,
                            eventProps: Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_9__["stringsArrayToObjectWithValues"])(this.config.analytics.intentionOfTermsAndConditions.params.dynatrace, [_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__["CreditType"].PROPELLER]),
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TermsAndConditionsPage.ɵfac = function TermsAndConditionsPage_Factory(t) { return new (t || TermsAndConditionsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_6__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_credit_info_model__WEBPACK_IMPORTED_MODULE_10__["CreditInfoModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_8__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_credit_logger_service__WEBPACK_IMPORTED_MODULE_11__["CreditLoggerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__["DynatraceService"])); };
    TermsAndConditionsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TermsAndConditionsPage, selectors: [["app-credits-terms-and-conditions"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 26, vars: 17, consts: [[1, "nequi-header", "nequi-header--white"], ["slot", "start"], ["id", "terms-and-conditions_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], [1, "nequi-header__title", "ion-text-start"], ["fullscreen", "true", "appAnimateTitleOnScroll", "", "scrollEvents", "true", 1, "ion-content--white", "ion-padding-horizontal"], ["id", "terms-and-conditions_title_text", 1, "nequi-title"], [1, "list"], ["lines", "none", 1, "list__item"], ["id", "terms-and-conditions_content_paragraph", 1, "list__item-label", 3, "innerHtml"], [1, "nequi-footer", "ion-no-border", "footer"], [1, "nequi-footer__toolbar"], ["lines", "none", 1, "footer__agreement-accept"], ["slot", "start", "id", "terms-and-conditions_agreement-accept_checkbox", 1, "filled-in", "footer__agreement-accept_checkbox", 3, "formControl"], ["id", "terms-and-conditions_agreement-accept_label", 1, "ion-text-wrap", "footer__agreement-accept_label"], ["id", "terms-and-conditions_ready_button", "expand", "block", "color", "guayaba", 1, "nequi-footer__button", 3, "disabled", "click"]], template: function TermsAndConditionsPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermsAndConditionsPage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-list", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-item", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "p", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "trustHTML");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-footer", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-toolbar", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-item", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "ion-checkbox", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-label", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-button", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermsAndConditionsPage_Template_ion_button_click_23_listener() { return ctx.acceptAgreement(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 7, ctx.config.i18n.title), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 9, ctx.config.i18n.title), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 11, ctx.termsAndConditions), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.acceptAgreementCheckbox);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 13, ctx.config.i18n.acceptAgreementCheckbox), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.acceptAgreementCheckbox.value);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 15, ctx.config.i18n.acceptButton), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_13__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["IonContent"], _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_14__["AnimateTitleOnScrollDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["IonCheckbox"], _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["BooleanValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["IonLabel"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"], _ui_src_lib_pipes_trust_html_trust_html_pipe__WEBPACK_IMPORTED_MODULE_16__["TrustHTMLPipe"]], styles: [".nequi-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-bottom: 16px;\n}\n\n.list__item[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\n\n.list__item-label[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n\n.nequi-footer__toolbar[_ngcontent-%COMP%] {\n  padding-top: 0px;\n}\n\n.footer__agreement-accept[_ngcontent-%COMP%] {\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n}\n\n.footer__agreement-accept_checkbox[_ngcontent-%COMP%] {\n  margin-inline: 0 10px;\n}\n\n.footer__agreement-accept_label[_ngcontent-%COMP%] {\n  color: var(--gray-70);\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 16px;\n}\n\n.list__item-label[_ngcontent-%COMP%]  > p {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvdGVybXMtYW5kLWNvbmRpdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUdFO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtBQUFKOztBQUVJO0VBQ0UsYUFBQTtBQUFOOztBQUtBO0VBQ0UsZ0JBQUE7QUFGRjs7QUFNRTtFQUNFLHlCQUFBO0VBQ0EsbUNBQUE7RUFDQSxpQ0FBQTtFQUNBLCtCQUFBO0FBSEo7O0FBS0k7RUFDRSxxQkFBQTtBQUhOOztBQU1JO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBSk47O0FBU0E7RUFDRSxTQUFBO0FBTkYiLCJmaWxlIjoidGVybXMtYW5kLWNvbmRpdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5lcXVpLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5saXN0IHtcbiAgJl9faXRlbSB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG5cbiAgICAmLWxhYmVsIHtcbiAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgfVxuICB9XG59XG5cbi5uZXF1aS1mb290ZXJfX3Rvb2xiYXIge1xuICBwYWRkaW5nLXRvcDogMHB4O1xufVxuXG4uZm9vdGVyIHtcbiAgJl9fYWdyZWVtZW50LWFjY2VwdCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB0cmFuc3BhcmVudDtcblxuICAgICZfY2hlY2tib3gge1xuICAgICAgbWFyZ2luLWlubGluZTogMCAxMHB4O1xuICAgIH1cblxuICAgICZfbGFiZWwge1xuICAgICAgY29sb3I6IHZhcigtLWdyYXktNzApO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIH1cbiAgfVxufVxuXG4ubGlzdF9faXRlbS1sYWJlbDo6bmctZGVlcCA+IHAge1xuICBtYXJnaW46IDA7XG59XG4iXX0= */"] });
    return TermsAndConditionsPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__["FeatureBasePage"]));



/***/ }),

/***/ "G1bk":
/*!***************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/propeller/pages/payment-detail/payment-detail.page.ts ***!
  \***************************************************************************************************************/
/*! exports provided: PaymentDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentDetailPage", function() { return PaymentDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var libs_features_commons_src_presentation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! libs/features/commons/src/presentation */ "BT0d");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_apps_base_mobile_config_features_commons_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/apps/base/mobile/config/features/commons/services */ "hVBB");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/utils/string */ "p6rB");
/* harmony import */ var _payment_detail_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./payment-detail.config */ "aL3q");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../../ui/src/lib/directives/animate-title-on-scroll/animate-title-on-scroll.directive */ "qbWi");
/* harmony import */ var _ui_src_lib_components_view_detail_view_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../../ui/src/lib/components/view-detail/view-detail.component */ "yT3N");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");




















function PaymentDetailPage_ion_header_0_Template(rf, ctx) { if (rf & 1) {
    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-toolbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-buttons", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ion-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PaymentDetailPage_ion_header_0_Template_ion_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r1.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "ion-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ion-title", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-buttons", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "ion-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PaymentDetailPage_ion_header_0_Template_ion_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.shareScreenshoot(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "ion-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "ion-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PaymentDetailPage_ion_header_0_Template_ion_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.saveScreenshot(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "ion-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 2, ctx_r0.config.i18n.headerTitle), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", true);
} }
var PaymentDetailPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PaymentDetailPage, _super);
    function PaymentDetailPage(injector, cardModalService, translateProvider, screenshotSharingService, router, currencyPipe, percentPipe) {
        var _this = _super.call(this, injector) || this;
        _this.cardModalService = cardModalService;
        _this.translateProvider = translateProvider;
        _this.screenshotSharingService = screenshotSharingService;
        _this.router = router;
        _this.currencyPipe = currencyPipe;
        _this.percentPipe = percentPipe;
        _this.config = _payment_detail_config__WEBPACK_IMPORTED_MODULE_9__["PaymentDetailConfig"];
        _this.isScreenShotTaken = false;
        return _this;
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
    PaymentDetailPage.prototype.showModalChangeInsurance = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        messages = this.translateProvider.get(this.config.i18n.modal);
                        return [4 /*yield*/, this.cardModalService.show({
                                title: messages.title,
                                imgPath: messages.image,
                                content: messages.description,
                                buttons: [
                                    {
                                        text: messages.buttons.accept,
                                        handler: function () { },
                                    },
                                    {
                                        text: messages.buttons.cancel.text,
                                        isLink: messages.buttons.cancel.isLink,
                                        handler: function () { return _this.goToChangeInsurance(); },
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
    PaymentDetailPage.prototype.goToChangeInsurance = function () {
        this.navController.navigateForward(this.config.routes.changeLiveInsurance);
    };
    PaymentDetailPage.prototype.loadDetail = function (credit) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (credit.isExpired) {
                    this.buildExpiredItems(credit);
                    return [2 /*return*/];
                }
                this.buildDefaultItems(credit);
                return [2 /*return*/];
            });
        });
    };
    PaymentDetailPage.prototype.buildDefaultItems = function (credit) {
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
                this.detailItem = this.detailItem.concat([
                    {
                        label: items.monthlyFee.label,
                        description: this.currencyPipe.transform(credit.normalInterest),
                        helpMessage: items.monthlyFee.message,
                    },
                    {
                        label: items.monthlyInsurance.label,
                        description: this.currencyPipe.transform(credit.feesOutstanding),
                        helpMessage: Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_8__["createFormat"])(items.monthlyInsurance.message, [
                            this.currencyPipe.transform(credit.feesOutstanding),
                        ]),
                    },
                    {
                        label: items.loanInstallments,
                        description: String(credit.installment.total),
                    },
                    {
                        label: items.installmentsToPay,
                        description: String(credit.installment.totalPending),
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
    PaymentDetailPage.prototype.buildExpiredItems = function (credit) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var items;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                items = this.translateProvider.get(this.config.i18n.paymentDetailExpired);
                this.detailItem = [
                    {
                        label: items.loanValue,
                        description: this.currencyPipe.transform(credit.approvedValue),
                    },
                ];
                this.interestRates(credit, items.interestRates);
                this.detailItem = this.detailItem.concat([
                    {
                        label: items.totalPayment.label,
                        description: this.currencyPipe.transform(credit.balance),
                    },
                    {
                        label: items.totalEnsurance.label,
                        description: this.currencyPipe.transform(credit.feesOutstanding),
                        helpMessage: Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_8__["createFormat"])(items.totalEnsurance.message, [
                            this.currencyPipe.transform(credit.loanDemandOutstandingDetails.fees),
                        ]),
                    },
                    {
                        label: items.capital.label,
                        description: this.currencyPipe.transform(credit.loanDemandOutstandingDetails.principalPending),
                    },
                    {
                        label: items.normalInteres.label,
                        description: this.currencyPipe.transform(credit.normalInterest),
                        helpMessage: items.normalInteres.message,
                    },
                    {
                        label: items.penaltyInteres.label,
                        description: this.currencyPipe.transform(credit.penaltyInterest),
                        helpMessage: items.penaltyInteres.message,
                    },
                    {
                        label: items.loanInstallments,
                        description: String(credit.installment.total),
                    },
                    {
                        label: items.installmentsToPay,
                        description: String(credit.installment.totalPending),
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
                description: Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_8__["createFormat"])(interestRates.description, [
                    credit.rateMonthlyInterest.toString(),
                    credit.rateAnnualInterest.toString(),
                ]),
                helpMessage: interestRates.message,
            });
        }
    };
    PaymentDetailPage.ɵfac = function PaymentDetailPage_Factory(t) { return new (t || PaymentDetailPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_7__["CardModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_6__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nequi_apps_base_mobile_config_features_commons_services__WEBPACK_IMPORTED_MODULE_5__["ScreenshotSharingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["PercentPipe"])); };
    PaymentDetailPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PaymentDetailPage, selectors: [["app-payment-detail"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 12, vars: 8, consts: [["class", "nequi-header", 4, "ngIf"], ["fullscreen", "true", "appAnimateTitleOnScroll", "", "scrollEvents", "true", 1, "ion-content--white", "ion-padding-horizontal"], [1, "nequi-title"], [1, "payment-detail"], [3, "details"], [1, "nequi-footer", "ion-no-border", "card__footer"], [1, "nequi-footer__toolbar"], ["id", "payment-detail_footer_link", 1, "nequi-footer__link", 3, "click"], [1, "nequi-header"], ["slot", "start"], ["id", "payment-detail_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], [1, "nequi-header__title", "ion-text-start"], ["slot", "end"], ["id", "payment-detail_share_button", 3, "click"], ["slot", "icon-only", "name", "share-social-outline"], ["id", "payment-detail_save_button", 3, "hidden", "click"], ["slot", "icon-only", "name", "save-outline"]], template: function PaymentDetailPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, PaymentDetailPage_ion_header_0_Template, 13, 4, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-content", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "app-view-detail", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-footer", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-toolbar", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PaymentDetailPage_Template_a_click_9_listener() { return ctx.showModalChangeInsurance(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isScreenShotTaken);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 4, ctx.config.i18n.headerTitle), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("details", ctx.detailItem);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 6, ctx.config.i18n.insurance));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonContent"], _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_11__["AnimateTitleOnScrollDirective"], _ui_src_lib_components_view_detail_view_detail_component__WEBPACK_IMPORTED_MODULE_12__["ViewDetailComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonTitle"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"]], styles: [".nequi-title[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\n\n.nequi-footer__toolbar[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvcGF5bWVudC1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjs7QUFHRTtFQUNFLGtCQUFBO0FBQUoiLCJmaWxlIjoicGF5bWVudC1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5lcXVpLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4ubmVxdWktZm9vdGVyIHtcbiAgJl9fdG9vbGJhciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG4iXX0= */"] });
    return PaymentDetailPage;
}(libs_features_commons_src_presentation__WEBPACK_IMPORTED_MODULE_1__["FeatureBasePage"]));



/***/ }),

/***/ "Gpmi":
/*!*********************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/propeller/pages/life-insurance/life-insurance.view-model.ts ***!
  \*********************************************************************************************************************/
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

/***/ "HG+i":
/*!*********************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/propeller/pages/loan-destination/loan-destination.config.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: LoanDestinationConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanDestinationConfig", function() { return LoanDestinationConfig; });
var LoanDestinationConfig = Object.freeze({
    i18n: {
        loanDestination: {
            headerTitle: 'credits.loan-destination.header.title',
            headerDescription: 'credits.loan-destination.header.description',
            destinationOptions: {
                vacations: {
                    label: 'credits.loan-destination.destination-options.vacations.label',
                    value: 'credits.loan-destination.destination-options.vacations.value',
                    image: 'credits.loan-destination.destination-options.vacations.icon',
                },
                home: {
                    label: 'credits.loan-destination.destination-options.home.label',
                    value: 'credits.loan-destination.destination-options.home.value',
                    image: 'credits.loan-destination.destination-options.home.icon',
                },
                vehicle: {
                    label: 'credits.loan-destination.destination-options.vehicle.label',
                    value: 'credits.loan-destination.destination-options.vehicle.value',
                    image: 'credits.loan-destination.destination-options.vehicle.icon',
                },
                education: {
                    label: 'credits.loan-destination.destination-options.education.label',
                    value: 'credits.loan-destination.destination-options.education.value',
                    image: 'credits.loan-destination.destination-options.education.icon',
                },
                investment: {
                    label: 'credits.loan-destination.destination-options.investment.label',
                    value: 'credits.loan-destination.destination-options.investment.value',
                    image: 'credits.loan-destination.destination-options.investment.icon',
                },
                inattendu: {
                    label: 'credits.loan-destination.destination-options.inattendu.label',
                    value: 'credits.loan-destination.destination-options.inattendu.value',
                    image: 'credits.loan-destination.destination-options.inattendu.icon',
                },
                another: {
                    label: 'credits.loan-destination.destination-options.another.label',
                    image: 'credits.loan-destination.destination-options.another.icon',
                },
            },
            bottomSheet: {
                title: 'credits.loan-destination.bottom-sheet.title',
                label: 'credits.loan-destination.bottom-sheet.label',
                actionLabel: 'credits.loan-destination.bottom-sheet.ready-button',
            },
            readyButton: 'credits.loan-destination.ready-button',
        },
    },
    routes: {
        knowUsBetter: '/admin/credits/propeller/know-us-better',
    },
    keyOptions: {
        purpose: 'purpose',
    },
    analytics: {
        intentionOfDestination: {
            name: 'preaprobado_proposito_propulsor',
            params: {
                dynatrace: ['product_id', 'proposito'],
            },
        },
    },
});


/***/ }),

/***/ "IxJh":
/*!*********************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/propeller/pages/ensure-loan/ensure-loan.page.ts ***!
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
/* harmony import */ var _ensure_loan_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ensure-loan.config */ "00WT");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ui_src_lib_components_busy_indicator_busy_indicator_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../../../ui/src/lib/components/busy-indicator/busy-indicator.component */ "N6nj");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");


























function EnsureLoanPage_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EnsureLoanPage_ng_container_9_Template_ion_card_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.goToLoanInfo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-text", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-chip", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-avatar", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ion-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ion-text", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "ion-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "ion-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EnsureLoanPage_ng_container_9_Template_ion_card_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.showHaveAnotherInsurance(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "ion-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "ion-text", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "ion-chip", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "ion-avatar", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "ion-label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "ion-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "ion-text", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](32, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "ion-footer", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "ion-toolbar", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EnsureLoanPage_ng_container_9_Template_a_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.showMoreInfo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](37, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.ensureLoanWithNequiTitle, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 9, ctx_r0.config.i18n.ensureLoan.ensureLoanWithNequi.tagImg), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 11, ctx_r0.config.i18n.ensureLoan.ensureLoanWithNequi.tagLabel), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 13, ctx_r0.config.i18n.ensureLoan.ensureLoanWithNequi.description), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](21, 15, ctx_r0.config.i18n.ensureLoan.ensureLoanWithAnother.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](25, 17, ctx_r0.config.i18n.ensureLoan.ensureLoanWithAnother.tagImg), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](28, 19, ctx_r0.config.i18n.ensureLoan.ensureLoanWithAnother.tagLabel), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](32, 21, ctx_r0.config.i18n.ensureLoan.ensureLoanWithAnother.description), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](37, 23, ctx_r0.config.i18n.ensureLoan.moreInfoButton), "");
} }
function EnsureLoanPage_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-busy-indicator", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onReload", function EnsureLoanPage_ng_template_10_Template_app_busy_indicator_onReload_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.loadData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showReload", !!ctx_r2.errorMessage)("reloadMessage", ctx_r2.errorMessage);
} }
var EnsureLoanPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EnsureLoanPage, _super);
    function EnsureLoanPage(injector, translateProvider, infoListBottomSheetService, route, creditInteractor, creditInfoModel, creditLoggerService, currencyPipe, dynatraceService) {
        var _this = _super.call(this, injector) || this;
        _this.translateProvider = translateProvider;
        _this.infoListBottomSheetService = infoListBottomSheetService;
        _this.route = route;
        _this.creditInteractor = creditInteractor;
        _this.creditInfoModel = creditInfoModel;
        _this.creditLoggerService = creditLoggerService;
        _this.currencyPipe = currencyPipe;
        _this.dynatraceService = dynatraceService;
        _this.config = _ensure_loan_config__WEBPACK_IMPORTED_MODULE_13__["EnsureLoanConfig"];
        _this.isLoading = false;
        _this.errorMessage = null;
        return _this;
    }
    EnsureLoanPage.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dynatraceService.setAnalyticsOfEvent({
                            eventName: this.config.analytics.intentionOfEnsureLoan.name,
                        })];
                    case 1:
                        _a.sent();
                        this.loadData();
                        return [2 /*return*/];
                }
            });
        });
    };
    EnsureLoanPage.prototype.ionViewWillLeave = function () {
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
    EnsureLoanPage.prototype.goToLoanInfo = function () {
        this.navigatorProvider.navigateForward(this.config.goTo.loanInfo);
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
                        action: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.infoListBottomSheetService.hide()];
                                    case 1:
                                        _a.sent();
                                        this.goToLoanInfo();
                                        return [2 /*return*/];
                                }
                            });
                        }); },
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
                        action: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.infoListBottomSheetService.hide()];
                                    case 1:
                                        _a.sent();
                                        this.goToLoanInfo();
                                        return [2 /*return*/];
                                }
                            });
                        }); },
                    },
                    {
                        id: this.config.idSelectors.policyButtonId,
                        label: haveAnotherInsurance.footer.sendMailWithPolicyButton,
                        color: _nequi_ui__WEBPACK_IMPORTED_MODULE_8__["ButtonColor"].MEDIANOCHE,
                        action: function () {
                            Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_9__["openUrl"])(_this.config.goTo.sendYourPolicy);
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
            var _a, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        this.isLoading = true;
                        this.errorMessage = null;
                        _a = this;
                        return [4 /*yield*/, this.creditInteractor.getLoanPortfolio({
                                creditType: _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__["CreditType"].PROPELLER,
                                amount: this.creditInfoModel.creditFeatureInfo.loanAmount,
                                numInstallments: this.creditInfoModel.creditFeatureInfo.installment,
                            })];
                    case 1:
                        _a.loanPortfolio = _b.sent();
                        this.creditInfoModel.loanPortfolioInfo = this.loanPortfolio;
                        this.initItemList();
                        this.setAnalyticsOfProperties([
                            _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__["CreditType"].PROPELLER,
                            this.loanPortfolio.monthlyInsuranceAmount,
                        ]);
                        this.isLoading = false;
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        this.isLoading = false;
                        this.errorMessage = error_1.message;
                        this.dynatraceService.setCustomError(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    EnsureLoanPage.prototype.initItemList = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var i18n, i18nFormatted, itemList;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                i18n = this.translateProvider.get(this.config.i18n.ensureLoan.content);
                i18nFormatted = Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_9__["toCamelCaseProperties"])(i18n);
                this.saveLog();
                this.bottomSheetI18n = i18nFormatted.bottomSheet;
                itemList = this.bottomSheetI18n.insuranceWithNequi.itemList;
                itemList.whatItCostsYou.description = Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_10__["createFormat"])(itemList.whatItCostsYou.description, [
                    this.currencyPipe.transform(this.loanPortfolio.monthlyInsuranceAmount.toString()),
                ]);
                itemList.whoIsMyInsuranceWith.description = Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_10__["createFormat"])(itemList.whoIsMyInsuranceWith.description, [this.config.insuranceCarrier]);
                this.ensureLoanWithNequiTitle = Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_10__["createFormat"])(i18nFormatted.ensureLoanWithNequi.title, [
                    this.currencyPipe.transform(this.loanPortfolio.monthlyInsuranceAmount.toString()),
                ]);
                this.bottomSheetI18n.insuranceWithNequi.itemList = itemList;
                return [2 /*return*/];
            });
        });
    };
    EnsureLoanPage.prototype.saveLog = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.creditLoggerService.save({
                    flowType: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["FlowType"].PROPELLER,
                    i18nKey: this.config.i18n.logs,
                    params: [this.currencyPipe.transform(this.loanPortfolio.monthlyInsuranceAmount)],
                });
                return [2 /*return*/];
            });
        });
    };
    EnsureLoanPage.prototype.setAnalyticsOfProperties = function (eventProps) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var props;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                props = Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_9__["stringsArrayToObjectWithValues"])(this.config.analytics.intentionOfEnsureLoan.params.dynatrace, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(eventProps));
                this.dynatraceService.setAnalyticsOfProperties({ props: props });
                return [2 /*return*/];
            });
        });
    };
    EnsureLoanPage.ɵfac = function EnsureLoanPage_Factory(t) { return new (t || EnsureLoanPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_6__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_8__["InfoListBottomSheetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__["CreditInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_credit_info_model__WEBPACK_IMPORTED_MODULE_11__["CreditInfoModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_credit_logger_service__WEBPACK_IMPORTED_MODULE_12__["CreditLoggerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__["DynatraceService"])); };
    EnsureLoanPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EnsureLoanPage, selectors: [["app-ensure-loan-credits"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 12, vars: 5, consts: [[1, "nequi-header"], ["slot", "start"], ["id", "ensure-loan_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], ["fullscreen", "true", 1, "ion-content--white", "ion-padding-horizontal"], [1, "nequi-title"], [4, "ngIf", "ngIfElse"], ["busyIndicator", ""], [1, "card-item", 3, "click"], ["lines", "none", 1, "card-item__header"], ["id", "ensure-loan_sure-with-nequi_title", 1, "card-item__title"], ["slot", "end", 1, "card-item__tag", "card-item__tag-fast"], [1, "card-item__tag_icon"], ["id", "ensure-loan_sure-with-nequi_img", 3, "src"], ["id", "ensure-loan_sure-with-nequi_label"], ["lines", "none"], ["id", "ensure-loan_sure-with-nequi_text", 1, "card-item__description"], ["id", "ensure-loan_sure-with-nequi_icon", "name", "chevron-forward-outline", "slot", "end", 1, "card-item__right-icon", "ion-no-margin"], ["id", "ensure-loan_sure-with-another_title", 1, "card-item__title"], ["slot", "end", 1, "card-item__tag", "card-item__tag-slow"], ["id", "ensure-loan_sure-with-another_img", 3, "src"], ["id", "ensure-loan_sure-with-another_label"], ["id", "ensure-loan_sure-with-another_text", 1, "card-item__description"], [1, "nequi-footer"], [1, "ion-text-center"], ["id", "ensure-loan_footer_link", 1, "nequi-footer__link", 3, "click"], [3, "showReload", "reloadMessage", "onReload"]], template: function EnsureLoanPage_Template(rf, ctx) { if (rf & 1) {
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
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, EnsureLoanPage_ng_container_9_Template, 38, 25, "ng-container", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, EnsureLoanPage_ng_template_10_Template, 1, 2, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 3, ctx.config.i18n.ensureLoan.headerTitle), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLoading && !ctx.errorMessage)("ngIfElse", _r1);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonChip"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonAvatar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonFooter"], _ui_src_lib_components_busy_indicator_busy_indicator_component__WEBPACK_IMPORTED_MODULE_15__["BusyIndicatorComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslatePipe"]], styles: [".card-item[_ngcontent-%COMP%] {\n  margin: 8px 5px;\n  padding-bottom: 16px;\n  border-radius: 8px;\n  border: 1px solid var(--border-gray-20);\n  box-shadow: 0px 1px 1px var(--box-shadow-card-015);\n}\n.card-item__header[_ngcontent-%COMP%]::part(native) {\n  --min-height: auto;\n  --padding-top: 8px;\n}\n.card-item__title[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 19px;\n  margin-top: 8px;\n}\n.card-item__description[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 17px;\n  color: var(--gray-70);\n}\n.card-item__tag[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  gap: 5px;\n  height: 24px;\n  min-width: 73px;\n  font-size: 11px;\n  padding-inline: 5px;\n  margin: 0;\n  margin-bottom: auto;\n}\n.card-item__tag_icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  margin: 0;\n  flex: none;\n}\n.card-item__tag_icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  --border-radius: 0;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.card-item__tag-fast[_ngcontent-%COMP%] {\n  --background: var(--guanabana-10);\n  --color: var(--guanabana);\n}\n.card-item__tag-slow[_ngcontent-%COMP%] {\n  --background: var(--guayaba-10);\n  --color: var(--guayaba);\n  min-width: 65px;\n}\n.card-item__right-icon[_ngcontent-%COMP%] {\n  width: 35px;\n  transform: translateY(-15px);\n  color: var(--medianoche);\n  font-size: 20px;\n}\n.nequi-footer[_ngcontent-%COMP%] {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvZW5zdXJlLWxvYW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1Q0FBQTtFQUNBLGtEQUFBO0FBQ0Y7QUFFSTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUFBTjtBQUlFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFGSjtBQUtFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFISjtBQU1FO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFKSjtBQU1JO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUpOO0FBTU07RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7QUFKUjtBQVFJO0VBQ0UsaUNBQUE7RUFDQSx5QkFBQTtBQU5OO0FBU0k7RUFDRSwrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQVBOO0FBV0U7RUFDRSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7QUFUSjtBQWFBO0VBQ0UsU0FBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtBQVZGIiwiZmlsZSI6ImVuc3VyZS1sb2FuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWl0ZW0ge1xuICBtYXJnaW46IDhweCA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1ncmF5LTIwKTtcbiAgYm94LXNoYWRvdzogMHB4IDFweCAxcHggdmFyKC0tYm94LXNoYWRvdy1jYXJkLTAxNSk7XG5cbiAgJl9faGVhZGVyIHtcbiAgICAmOjpwYXJ0KG5hdGl2ZSkge1xuICAgICAgLS1taW4taGVpZ2h0OiBhdXRvO1xuICAgICAgLS1wYWRkaW5nLXRvcDogOHB4O1xuICAgIH1cbiAgfVxuXG4gICZfX3RpdGxlIHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICB9XG5cbiAgJl9fZGVzY3JpcHRpb24ge1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICBjb2xvcjogdmFyKC0tZ3JheS03MCk7XG4gIH1cblxuICAmX190YWcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA1cHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIG1pbi13aWR0aDogNzNweDtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgcGFkZGluZy1pbmxpbmU6IDVweDtcbiAgICBtYXJnaW46IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcblxuICAgICZfaWNvbiB7XG4gICAgICB3aWR0aDogMTZweDtcbiAgICAgIGhlaWdodDogMTZweDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZsZXg6IG5vbmU7XG5cbiAgICAgIGltZyB7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLWZhc3Qge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1ndWFuYWJhbmEtMTApO1xuICAgICAgLS1jb2xvcjogdmFyKC0tZ3VhbmFiYW5hKTtcbiAgICB9XG5cbiAgICAmLXNsb3cge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1ndWF5YWJhLTEwKTtcbiAgICAgIC0tY29sb3I6IHZhcigtLWd1YXlhYmEpO1xuICAgICAgbWluLXdpZHRoOiA2NXB4O1xuICAgIH1cbiAgfVxuXG4gICZfX3JpZ2h0LWljb24ge1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTVweCk7XG4gICAgY29sb3I6IHZhcigtLW1lZGlhbm9jaGUpO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxufVxuXG4ubmVxdWktZm9vdGVyIHtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4iXX0= */"] });
    return EnsureLoanPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__["FeatureBasePage"]));



/***/ }),

/***/ "L2GC":
/*!*******************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/propeller/pages/loan-destination/loan-destination.page.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: LoanDestinationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanDestinationPage", function() { return LoanDestinationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/credits/core */ "42wy");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _organisms_add_more_info_services_add_more_info_bottom_sheet_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../organisms/add-more-info/services/add-more-info-bottom-sheet.service */ "gTEW");
/* harmony import */ var _services_credit_info_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/credit-info.model */ "9FmH");
/* harmony import */ var _loan_destination_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./loan-destination.config */ "HG+i");
/* harmony import */ var _loan_destination_view_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./loan-destination.view-model */ "81L6");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../../ui/src/lib/directives/animate-title-on-scroll/animate-title-on-scroll.directive */ "qbWi");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");























var REGISTRATION_STATUS = 0;
var LoanDestinationPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LoanDestinationPage, _super);
    function LoanDestinationPage(injector, route, addMoreInfoBottomSheetService, creditInfoModel, creditInteractor, loadingService, toastService, dynatraceService) {
        var _this = _super.call(this, injector) || this;
        _this.route = route;
        _this.addMoreInfoBottomSheetService = addMoreInfoBottomSheetService;
        _this.creditInfoModel = creditInfoModel;
        _this.creditInteractor = creditInteractor;
        _this.loadingService = loadingService;
        _this.toastService = toastService;
        _this.dynatraceService = dynatraceService;
        _this.config = _loan_destination_config__WEBPACK_IMPORTED_MODULE_10__["LoanDestinationConfig"];
        _this.viewModel = new _loan_destination_view_model__WEBPACK_IMPORTED_MODULE_11__["LoanDestinationViewModel"]();
        return _this;
    }
    LoanDestinationPage.prototype.ngOnInit = function () {
        this.initPage();
    };
    LoanDestinationPage.prototype.ionViewWillLeave = function () {
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
    LoanDestinationPage.prototype.continueToKnowUsBetter = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.onSaveAdditionalInfo()];
                    case 1:
                        if (_a.sent()) {
                            this.creditInfoModel.creditFeatureInfo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.creditInfoModel.creditFeatureInfo), { loanDestination: this.viewModel.destination.value });
                            this.goToKnowUsBetter();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    LoanDestinationPage.prototype.openAddMoreInfo = function () {
        var _this = this;
        var componentProps = {
            title: this.config.i18n.loanDestination.bottomSheet.title,
            label: this.config.i18n.loanDestination.bottomSheet.label,
            actionLabel: this.config.i18n.loanDestination.bottomSheet.actionLabel,
            action: this.addMoreInfoAction.bind(this),
            theme: _nequi_ui__WEBPACK_IMPORTED_MODULE_6__["Theme"].LIGHT,
        };
        this.addMoreInfoBottomSheetService
            .show(componentProps)
            .then(function () { return _this.viewModel.destination.setValue(null); });
    };
    LoanDestinationPage.prototype.initPage = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.viewModel.initForm();
                        return [4 /*yield*/, this.dynatraceService.setAnalyticsOfEvent({
                                eventName: this.config.analytics.intentionOfDestination.name,
                            })];
                    case 1:
                        _a.sent();
                        this.onGetAdditionalInfo();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoanDestinationPage.prototype.goToKnowUsBetter = function () {
        this.navigatorProvider.navigateForward(this.config.routes.knowUsBetter);
    };
    LoanDestinationPage.prototype.addMoreInfoAction = function (_form) {
        var moreInfo = _form.value.moreInfo;
        this.viewModel.destination.setValue(moreInfo);
        this.addMoreInfoBottomSheetService.hide();
        this.continueToKnowUsBetter();
    };
    LoanDestinationPage.prototype.onGetAdditionalInfo = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var resultInfo, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, 5, 6]);
                        this.loadingService.show();
                        return [4 /*yield*/, this.creditInteractor.getAdditionalInfo({
                                registrationStatus: REGISTRATION_STATUS,
                                flow: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__["FlowType"].PROPELLER,
                            })];
                    case 1:
                        resultInfo = _a.sent();
                        if (resultInfo.length > 0) {
                            this.viewModel.additionalInfo = resultInfo[0];
                            this.viewModel.destination.setValue(this.viewModel.additionalInfo.purpose);
                        }
                        this.loadingService.hideWithoutFeedback();
                        return [3 /*break*/, 6];
                    case 2:
                        error_1 = _a.sent();
                        this.dynatraceService.setCustomError(error_1);
                        if (!(error_1.constructor !== _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["DontHaveDataException"])) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.toastService.showError(error_1.message)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        this.loadingService.hideWithoutFeedback();
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    LoanDestinationPage.prototype.onSaveAdditionalInfo = function () {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var error_2;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 3, 5, 6]);
                        this.loadingService.show();
                        return [4 /*yield*/, this.creditInteractor.saveAdditionalInfo({
                                registrationStatus: (_b = (_a = this.viewModel.additionalInfo) === null || _a === void 0 ? void 0 : _a.registrationStatus) !== null && _b !== void 0 ? _b : REGISTRATION_STATUS,
                                flow: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__["FlowType"].PROPELLER,
                                options: [{ key: this.config.keyOptions.purpose, value: this.viewModel.destination.value }],
                            })];
                    case 1:
                        _c.sent();
                        return [4 /*yield*/, this.setAnalyticsOfProperties([_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["CreditType"].PROPELLER, this.viewModel.destination.value])];
                    case 2:
                        _c.sent();
                        this.loadingService.hideWithoutFeedback();
                        return [2 /*return*/, true];
                    case 3:
                        error_2 = _c.sent();
                        this.dynatraceService.setCustomError(error_2);
                        return [4 /*yield*/, this.toastService.showError(error_2.message)];
                    case 4:
                        _c.sent();
                        return [2 /*return*/, false];
                    case 5:
                        this.loadingService.hideWithoutFeedback();
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    LoanDestinationPage.prototype.setAnalyticsOfProperties = function (eventProps) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var props;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                props = Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_7__["stringsArrayToObjectWithValues"])(this.config.analytics.intentionOfDestination.params.dynatrace, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(eventProps));
                this.dynatraceService.setAnalyticsOfProperties({ props: props });
                return [2 /*return*/];
            });
        });
    };
    LoanDestinationPage.ɵfac = function LoanDestinationPage_Factory(t) { return new (t || LoanDestinationPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_organisms_add_more_info_services_add_more_info_bottom_sheet_service__WEBPACK_IMPORTED_MODULE_8__["AddMoreInfoBottomSheetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_credit_info_model__WEBPACK_IMPORTED_MODULE_9__["CreditInfoModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["CreditInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_6__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_4__["DynatraceService"])); };
    LoanDestinationPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoanDestinationPage, selectors: [["app-loan-destination-credits"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 78, vars: 74, consts: [[1, "nequi-header", "nequi-header--white"], ["slot", "start"], ["id", "loan-destination_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], [1, "nequi-header__title", "ion-text-start"], ["fullscreen", "true", "appAnimateTitleOnScroll", "", "scrollEvents", "true", 1, "ion-content--white", "ion-padding-horizontal"], [3, "formGroup"], [1, "nequi-title"], ["lines", "none", 1, "description-item"], [1, "description-item__text", 3, "innerHtml"], ["formControlName", "destination"], ["lines", "none", 1, "radio-button"], ["id", "loan-destination_vacations-option_image", 1, "radio-button__icon", 3, "src"], ["id", "loan-destination_vacations-option_label", 1, "radio-button__label"], ["id", "loan-destination_vacations-option_radio", 1, "radio-button__radio", 3, "value"], ["id", "loan-destination_home-option_image", 1, "radio-button__icon", 3, "src"], ["id", "loan-destination_home-option_label", 1, "radio-button__label"], ["id", "loan-destination_home-option_radio", 1, "radio-button__radio", 3, "value"], ["id", "loan-destination_vehicle-option_image", 1, "radio-button__icon", 3, "src"], ["id", "loan-destination_vehicle-option_label", 1, "radio-button__label"], ["id", "loan-destination_vehicle-option_radio", 1, "radio-button__radio", 3, "value"], ["id", "loan-destination_education-option_image", 1, "radio-button__icon", 3, "src"], ["id", "loan-destination_education-option_label", 1, "radio-button__label"], ["id", "loan-destination_education-option_radio", 1, "radio-button__radio", 3, "value"], ["id", "loan-destination_investment-option_image", 1, "radio-button__icon", 3, "src"], ["id", "loan-destination_investment-option_label", 1, "radio-button__label"], ["id", "loan-destination_investment-option_radio", 1, "radio-button__radio", 3, "value"], ["id", "loan-destination_inattendu-option_image", 1, "radio-button__icon", 3, "src"], ["id", "loan-destination_inattendu-option_label", 1, "radio-button__label"], ["id", "loan-destination_inattendu-option_radio", 1, "radio-button__radio", 3, "value"], ["id", "loan-destination_another-option_image", 1, "radio-button__icon", 3, "src"], ["id", "loan-destination_another-option_label", 1, "radio-button__label"], ["id", "loan-destination_another-option_radio", "value", "another", 1, "radio-button__radio", 3, "click"], [1, "nequi-footer", "ion-no-border"], ["id", "loan-destination_ready_button", "expand", "block", "color", "guayaba", 1, "nequi-footer__button", 3, "disabled", "click"]], template: function LoanDestinationPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoanDestinationPage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "form", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-item", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "ion-text", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-list");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-radio-group", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-item", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "img", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-label", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "ion-radio", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ion-item", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "img", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ion-label", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](31, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "ion-radio", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](33, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "ion-item", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "img", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](36, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "ion-label", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](39, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "ion-radio", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](41, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "ion-item", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "img", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](44, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "ion-label", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](47, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "ion-radio", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](49, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "ion-item", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "img", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](52, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "ion-label", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](55, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "ion-radio", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](57, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "ion-item", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "img", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](60, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "ion-label", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](63, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "ion-radio", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](65, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "ion-item", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "img", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](68, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "ion-label", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](71, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "ion-radio", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoanDestinationPage_Template_ion_radio_click_72_listener() { return ctx.openAddMoreInfo(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "ion-footer", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "ion-button", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoanDestinationPage_Template_ion_button_click_75_listener() { return ctx.continueToKnowUsBetter(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](77, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 26, ctx.config.i18n.loanDestination.headerTitle), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.viewModel.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 28, ctx.config.i18n.loanDestination.headerTitle), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 30, ctx.config.i18n.loanDestination.headerDescription), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 32, ctx.config.i18n.loanDestination.destinationOptions.vacations.image), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 34, ctx.config.i18n.loanDestination.destinationOptions.vacations.label), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 36, ctx.config.i18n.loanDestination.destinationOptions.vacations.value));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](28, 38, ctx.config.i18n.loanDestination.destinationOptions.home.image), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](31, 40, ctx.config.i18n.loanDestination.destinationOptions.home.label), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](33, 42, ctx.config.i18n.loanDestination.destinationOptions.home.value));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](36, 44, ctx.config.i18n.loanDestination.destinationOptions.vehicle.image), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](39, 46, ctx.config.i18n.loanDestination.destinationOptions.vehicle.label), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](41, 48, ctx.config.i18n.loanDestination.destinationOptions.vehicle.value));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](44, 50, ctx.config.i18n.loanDestination.destinationOptions.education.image), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](47, 52, ctx.config.i18n.loanDestination.destinationOptions.education.label), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](49, 54, ctx.config.i18n.loanDestination.destinationOptions.education.value));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](52, 56, ctx.config.i18n.loanDestination.destinationOptions.investment.image), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](55, 58, ctx.config.i18n.loanDestination.destinationOptions.investment.label), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](57, 60, ctx.config.i18n.loanDestination.destinationOptions.investment.value));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](60, 62, ctx.config.i18n.loanDestination.destinationOptions.inattendu.image), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](63, 64, ctx.config.i18n.loanDestination.destinationOptions.inattendu.label), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](65, 66, ctx.config.i18n.loanDestination.destinationOptions.inattendu.value));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](68, 68, ctx.config.i18n.loanDestination.destinationOptions.another.image), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](71, 70, ctx.config.i18n.loanDestination.destinationOptions.another.label), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.viewModel.form.valid);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](77, 72, ctx.config.i18n.loanDestination.readyButton), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonContent"], _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_13__["AnimateTitleOnScrollDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonRadioGroup"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormControlName"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonRadio"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["RadioValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonFooter"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"]], styles: [".description-item[_ngcontent-%COMP%]::part(native) {\n  --padding-start: 0px;\n}\n.description-item__text[_ngcontent-%COMP%] {\n  color: var(--gray-70);\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 17px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvbG9hbi1kZXN0aW5hdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxvQkFBQTtBQUFKO0FBR0U7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQURKIiwiZmlsZSI6ImxvYW4tZGVzdGluYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlc2NyaXB0aW9uLWl0ZW0ge1xuICAmOjpwYXJ0KG5hdGl2ZSkge1xuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICB9XG5cbiAgJl9fdGV4dCB7XG4gICAgY29sb3I6IHZhcigtLWdyYXktNzApO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG59XG4iXX0= */"] });
    return LoanDestinationPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_4__["FeatureBasePage"]));



/***/ }),

/***/ "L5KX":
/*!*************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/propeller/pages/agreement-fga/agreement-fga.page.ts ***!
  \*************************************************************************************************************/
/*! exports provided: AgreementFGAPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgreementFGAPage", function() { return AgreementFGAPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/features/credits/core */ "42wy");
/* harmony import */ var _nequi_features_profile_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/features/profile/core */ "w8sc");
/* harmony import */ var _nequi_native_calendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nequi/native/calendar */ "at6U");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_date__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nequi/utils/date */ "tGfC");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _services_credit_info_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../services/credit-info.model */ "9FmH");
/* harmony import */ var _services_credit_logger_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../services/credit-logger.service */ "2ibl");
/* harmony import */ var _services_customer_finacial_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../services/customer-finacial.service */ "uuzL");
/* harmony import */ var _agreement_fga_config__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./agreement-fga.config */ "uZfz");
/* harmony import */ var _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../../../ui/src/lib/directives/animate-title-on-scroll/animate-title-on-scroll.directive */ "qbWi");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ui_src_lib_pipes_trust_html_trust_html_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../../../../ui/src/lib/pipes/trust-html/trust-html.pipe */ "FKD1");

































var AgreementFGAPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AgreementFGAPage, _super);
    function AgreementFGAPage(route, creditInfoModel, customerFinancialService, cardModalService, moduleInfoInteractor, creditLoggerService, analyticsInteractor, creditEventsHandler, calendarPlugin, loggerInteractor, parameterInteractor, platform, dynatraceService, injector) {
        var _this = _super.call(this, injector) || this;
        _this.route = route;
        _this.creditInfoModel = creditInfoModel;
        _this.customerFinancialService = customerFinancialService;
        _this.cardModalService = cardModalService;
        _this.moduleInfoInteractor = moduleInfoInteractor;
        _this.creditLoggerService = creditLoggerService;
        _this.analyticsInteractor = analyticsInteractor;
        _this.creditEventsHandler = creditEventsHandler;
        _this.calendarPlugin = calendarPlugin;
        _this.loggerInteractor = loggerInteractor;
        _this.parameterInteractor = parameterInteractor;
        _this.platform = platform;
        _this.dynatraceService = dynatraceService;
        _this.config = _agreement_fga_config__WEBPACK_IMPORTED_MODULE_16__["AgreementFGAConfig"];
        _this.calendarMessages = _this.translateProvider.get(_this.config.i18n.calendar);
        return _this;
    }
    AgreementFGAPage.prototype.ngOnInit = function () {
        this.setAnalyticsOfBegin();
        this.initPage();
    };
    AgreementFGAPage.prototype.ionViewWillLeave = function () {
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
    AgreementFGAPage.prototype.goBack = function () {
        this.navigatorProvider.back();
    };
    AgreementFGAPage.prototype.acceptAgreement = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.canContinue = false;
                this.setAnalyticsIntentionOfEnd();
                this.disbursement();
                this.setLog(this.config.i18n.logs.pin);
                return [2 /*return*/];
            });
        });
    };
    AgreementFGAPage.prototype.setOriginMoney = function (transaction) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, transaction];
            });
        });
    };
    AgreementFGAPage.prototype.onTransactionSuccess = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.setAnalyticsSuccess()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.createCalendarEvents()];
                    case 2:
                        _a.sent();
                        this.showCardModal();
                        this.creditEventsHandler.emitDisbursedEvent({
                            creditType: _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__["CreditType"].PROPELLER,
                            hasCredits: true,
                            isExpired: false,
                            isRescheduled: false,
                        });
                        this.setLog(this.config.i18n.logs.modal);
                        return [2 /*return*/];
                }
            });
        });
    };
    AgreementFGAPage.prototype.onTransactionFailed = function (error, _transaction) {
        this.canContinue = true;
        this.dynatraceService.setCustomError(error);
        throw error;
    };
    AgreementFGAPage.prototype.validatePin = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var isValidate;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.transactionBaseService.validatePin(this.config.i18n.pinChallengeMessage)];
                    case 1:
                        isValidate = _a.sent();
                        if (!isValidate) {
                            this.canContinue = true;
                        }
                        return [2 /*return*/, isValidate];
                }
            });
        });
    };
    AgreementFGAPage.prototype.goToBackpack = function () {
        this.navigatorProvider.navigateRoot(this.config.routes.backpack, {
            relativeTo: this.route,
        });
    };
    AgreementFGAPage.prototype.disbursement = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, params, transaction;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.getUserInfo()];
                    case 1:
                        _a.userData = _b.sent();
                        params = {
                            operatorType: _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__["OperationCreditType"].DISBURSEMENT,
                            isDebitType: true,
                            approvedAt: this.creditInfoModel.creditFeatureInfo.approvedDate,
                            loanValue: this.creditInfoModel.creditFeatureInfo.loanAmount,
                            productId: _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__["CreditType"].PROPELLER,
                            gender: this.customerFinancialService.creditUserInfo.gender,
                            purpose: this.creditInfoModel.creditFeatureInfo.loanDestination,
                            additionalInfo: {
                                city: this.userData.city || '',
                                state: this.userData.state || '',
                                address: this.userData.address || '',
                                installment: this.creditInfoModel.creditFeatureInfo.installment,
                                ciiu: this.userData.ciiu || '',
                                totalAssets: this.customerFinancialService.creditUserInfo.assets
                                    ? this.customerFinancialService.creditUserInfo.assets.toString()
                                    : '0',
                                fee: this.creditInfoModel.creditFeatureInfo.installment,
                            },
                        };
                        transaction = new _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__["DisbursementTransaction"]().withData(params);
                        _super.prototype.executeTransaction.call(this, transaction);
                        return [2 /*return*/];
                }
            });
        });
    };
    AgreementFGAPage.prototype.loadModule = function (moduleInfoList, moduleCode, moduleName) {
        var _a;
        var moduleInfo = moduleInfoList.filter(function (module) { return module.code === moduleCode; })[0];
        return (_a = moduleInfo === null || moduleInfo === void 0 ? void 0 : moduleInfo.data.filter(function (detail) { return detail.key === moduleName; })[0]) === null || _a === void 0 ? void 0 : _a.value;
    };
    AgreementFGAPage.prototype.getUserInfo = function () {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data, locationData, occupationData, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, this.loadingService.show()];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, this.moduleInfoInteractor.getModuleInfo([
                                _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["ModuleCode"].LOCATION,
                                _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["ModuleCode"].OCCUPATION,
                            ])];
                    case 2:
                        data = _b.sent();
                        locationData = this.loadModule(data, _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["ModuleCode"].LOCATION, _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["ModuleName"].LOCATION);
                        occupationData = this.loadModule(data, _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["ModuleCode"].OCCUPATION, _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["ModuleName"].OCCUPATION);
                        return [4 /*yield*/, this.loadingService.hideWithoutFeedback()];
                    case 3:
                        _b.sent();
                        return [2 /*return*/, {
                                city: locationData.city.code.toString(),
                                state: locationData.province.code.toString(),
                                address: locationData.address,
                                ciiu: ((_a = occupationData.ciiuCode) === null || _a === void 0 ? void 0 : _a.key) ? occupationData.ciiuCode.key.toString() : '',
                            }];
                    case 4:
                        error_1 = _b.sent();
                        this.dynatraceService.setCustomError(error_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    AgreementFGAPage.prototype.showCardModal = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var i18n, i18nFormatted;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                i18n = this.translateProvider.get(this.config.i18n.cardModalMessage);
                i18nFormatted = Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_12__["toCamelCaseProperties"])(i18n);
                this.cardModalService.show({
                    title: i18nFormatted.title,
                    imgPath: i18nFormatted.image,
                    content: i18nFormatted.content,
                    buttons: [
                        {
                            text: i18nFormatted.readyButton,
                            handler: function () {
                                _this.goToBackpack();
                            },
                        },
                    ],
                });
                return [2 /*return*/];
            });
        });
    };
    AgreementFGAPage.prototype.initPage = function () {
        this.initForm();
        this.initData();
        this.setLog(this.config.i18n.logs.agreement);
    };
    AgreementFGAPage.prototype.initForm = function () {
        this.acceptAgreementCheckbox = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
    };
    AgreementFGAPage.prototype.initData = function () {
        var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(new Date().toISOString().split(this.config.regexDate), 3), year = _a[0], month = _a[1], day = _a[2];
        var contractHTML = this.creditInfoModel.agreement.agreementFGA;
        this.agreementFGA = contractHTML
            .replace(this.config.replaceString.suscribeDay, day)
            .replace(this.config.replaceString.suscribeMonth, month)
            .replace(this.config.replaceString.suscribeYear, year);
    };
    AgreementFGAPage.prototype.setLog = function (messages) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.creditLoggerService.save({ flowType: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["FlowType"].PROPELLER, i18nKey: messages });
                return [2 /*return*/];
            });
        });
    };
    AgreementFGAPage.prototype.setAnalyticsIntentionOfEnd = function () {
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["AnalyticsType"].FACEBOOK,
            params: {
                eventName: this.config.analytics.events.intentionOfEnd.name,
            },
        });
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["AnalyticsType"].FIREBASE,
            params: { eventName: this.config.analytics.events.intentionOfEnd.name },
        });
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["AnalyticsType"].CLEVERTAP,
            params: {
                eventName: this.config.analytics.events.intentionOfEnd.name,
                eventProps: Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_12__["stringsArrayToObjectWithValues"])(this.config.analytics.events.intentionOfEnd.params.cleverTap, [
                    Object(_nequi_utils_date__WEBPACK_IMPORTED_MODULE_11__["getFormattedDateTimes"])(),
                    this.creditInfoModel.creditFeatureInfo.loanAmount,
                    this.creditInfoModel.creditFeatureInfo.term.value,
                    this.creditInfoModel.creditFeatureInfo.loanDestination,
                ]),
            },
        });
    };
    AgreementFGAPage.prototype.setAnalyticsSuccess = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, loanSuccess, mobileSubscribe;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(this.config.analytics.events.success.name, 2), loanSuccess = _a[0], mobileSubscribe = _a[1];
                        this.analyticsInteractor.trackEvent({
                            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["AnalyticsType"].FACEBOOK,
                            params: {
                                eventName: loanSuccess,
                            },
                        });
                        this.analyticsInteractor.trackEvent({
                            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["AnalyticsType"].FACEBOOK,
                            params: {
                                eventName: mobileSubscribe,
                            },
                        });
                        this.analyticsInteractor.trackEvent({
                            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["AnalyticsType"].FIREBASE,
                            params: { eventName: loanSuccess },
                        });
                        return [4 /*yield*/, this.dynatraceService.setAnalyticsOfEvent({
                                eventName: this.config.analytics.events.successOfFga.name,
                                eventProps: Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_12__["stringsArrayToObjectWithValues"])(this.config.analytics.events.successOfFga.params.dynatrace, [
                                    _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__["CreditType"].PROPELLER,
                                    Object(_nequi_utils_date__WEBPACK_IMPORTED_MODULE_11__["getFormattedDateTimes"])(),
                                    this.creditInfoModel.creditFeatureInfo.loanAmount,
                                    this.creditInfoModel.creditFeatureInfo.term.value,
                                    this.creditInfoModel.creditFeatureInfo.loanDestination,
                                    this.userData.ciiu,
                                    'true',
                                ]),
                                leave: true,
                            })];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AgreementFGAPage.prototype.createCalendarEvents = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var startHour, endHour, parameters, currentDate, startDate, options, params, error_2;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        startHour = this.config.calendar.startHour;
                        endHour = this.config.calendar.endHour;
                        return [4 /*yield*/, this.getDynamoCalendarParameters()];
                    case 1:
                        parameters = _a.sent();
                        if (parameters) {
                            startHour = parameters.startHour;
                            endHour = parameters.endHour;
                        }
                        currentDate = new Date();
                        startDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate());
                        return [4 /*yield*/, this.getCalendarOptions()];
                    case 2:
                        options = _a.sent();
                        params = {
                            title: this.calendarMessages.title,
                            location: null,
                            description: this.translateProvider.get(this.config.i18n.calendarDescription, {
                                deepLink: this.calendarMessages.url,
                            }),
                            startDate: new Date(startDate.setHours(startHour, 0, 0, 0)),
                            endDate: new Date(startDate.setHours(endHour, 0, 0, 0)),
                            options: options,
                        };
                        return [4 /*yield*/, this.calendarPlugin.createEvent(params)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        error_2 = _a.sent();
                        this.loggerInteractor.error("[calendar-plugin] " + JSON.stringify(error_2));
                        this.dynatraceService.setCustomError(error_2);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    AgreementFGAPage.prototype.getCalendarOptions = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var options, recurrenceEndDate, parameters;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.calendarPlugin.getCalendarOptions()];
                    case 1:
                        options = _a.sent();
                        recurrenceEndDate = new Date();
                        recurrenceEndDate.setMonth(recurrenceEndDate.getMonth() + 1 + this.creditInfoModel.creditFeatureInfo.term.value);
                        return [4 /*yield*/, this.getDynamoCalendarParameters()];
                    case 2:
                        parameters = _a.sent();
                        if (parameters) {
                            options.firstReminderMinutes = parameters.firstReminderMinutes;
                            options.secondReminderMinutes = parameters.secondReminderMinutes;
                        }
                        else {
                            options.firstReminderMinutes = this.config.calendar.firstReminderMinutes;
                            options.secondReminderMinutes = this.config.calendar.secondReminderMinutes;
                        }
                        options.recurrence = _nequi_native_calendar__WEBPACK_IMPORTED_MODULE_9__["CalendarRecurrence"].MONTHLY;
                        options.recurrenceEndDate = new Date(recurrenceEndDate);
                        return [2 /*return*/, options];
                }
            });
        });
    };
    AgreementFGAPage.prototype.getDynamoCalendarParameters = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.parameterInteractor.getParameter(this.config.calendar.param)];
                    case 1: return [2 /*return*/, (_a.sent()).reduce(function (all, param) {
                            var _a;
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, all), (_a = {}, _a[param.code] = Number(param.value), _a));
                        }, {})];
                }
            });
        });
    };
    AgreementFGAPage.prototype.setAnalyticsOfBegin = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dynatraceService.setAnalyticsOfEvent({
                            eventName: this.config.analytics.events.intentionOfFga.name,
                            eventProps: Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_12__["stringsArrayToObjectWithValues"])(this.config.analytics.events.intentionOfFga.params.dynatrace, [
                                _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__["CreditType"].PROPELLER,
                                this.creditInfoModel.creditFeatureInfo.loanAmount,
                                this.creditInfoModel.creditFeatureInfo.term.value,
                                this.creditInfoModel.creditFeatureInfo.loanDestination,
                            ]),
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AgreementFGAPage.ɵfac = function AgreementFGAPage_Factory(t) { return new (t || AgreementFGAPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_credit_info_model__WEBPACK_IMPORTED_MODULE_13__["CreditInfoModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_customer_finacial_service__WEBPACK_IMPORTED_MODULE_15__["CustomerFinancialService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_10__["CardModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_profile_core__WEBPACK_IMPORTED_MODULE_8__["ModuleInfoInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_credit_logger_service__WEBPACK_IMPORTED_MODULE_14__["CreditLoggerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["AnalyticsInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__["CreditEventsHandler"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_native_calendar__WEBPACK_IMPORTED_MODULE_9__["CalendarPlugin"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["LoggerInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["ParameterInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_6__["DynatraceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"])); };
    AgreementFGAPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AgreementFGAPage, selectors: [["app-credits-agreement-fga"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 26, vars: 17, consts: [[1, "nequi-header", "nequi-header--white"], ["slot", "start"], ["id", "agreement-fga_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], [1, "nequi-header__title", "ion-text-start"], ["fullscreen", "true", "appAnimateTitleOnScroll", "", "scrollEvents", "true", 1, "ion-content--white", "ion-padding-horizontal"], ["id", "agreement-fga_title_text", 1, "nequi-title"], [1, "list"], ["lines", "none", 1, "list__item"], ["id", "agreement-fga_content_paragraph", 1, "list__item-label", 3, "innerHtml"], [1, "nequi-footer", "ion-no-border", "footer"], [1, "nequi-footer__toolbar"], ["lines", "none", 1, "footer__agreement-accept"], ["slot", "start", "id", "agreement-fga_agreement-accept_checkbox", 1, "filled-in", "footer__agreement-accept_checkbox", 3, "formControl"], ["id", "agreement-fga_agreement-accept_label", 1, "ion-text-wrap", "footer__agreement-accept_label"], ["id", "agreement-fga_ready_button", "expand", "block", "color", "guayaba", 1, "nequi-footer__button", 3, "disabled", "click"]], template: function AgreementFGAPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AgreementFGAPage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-list", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-item", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "p", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "trustHTML");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-footer", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-toolbar", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-item", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "ion-checkbox", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-label", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-button", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AgreementFGAPage_Template_ion_button_click_23_listener() { return ctx.acceptAgreement(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 7, ctx.config.i18n.title), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 9, ctx.config.i18n.title), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 11, ctx.agreementFGA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.acceptAgreementCheckbox);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 13, ctx.config.i18n.acceptAgreementLabel), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.acceptAgreementCheckbox.value || !ctx.canContinue);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 15, ctx.config.i18n.acceptButton), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_17__["AnimateTitleOnScrollDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCheckbox"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["BooleanValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["TranslatePipe"], _ui_src_lib_pipes_trust_html_trust_html_pipe__WEBPACK_IMPORTED_MODULE_19__["TrustHTMLPipe"]], styles: [".nequi-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-bottom: 16px;\n}\n\n.list__item[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\n\n.list__item-label[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n\n.nequi-footer__toolbar[_ngcontent-%COMP%] {\n  padding-top: 0px;\n}\n\n.footer__agreement-accept[_ngcontent-%COMP%] {\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n}\n\n.footer__agreement-accept_checkbox[_ngcontent-%COMP%] {\n  margin-inline: 0 10px;\n}\n\n.footer__agreement-accept_label[_ngcontent-%COMP%] {\n  color: var(--gray-70);\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 16px;\n}\n\n.list__item-label[_ngcontent-%COMP%]  > p {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvYWdyZWVtZW50LWZnYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBR0U7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0FBQUo7O0FBRUk7RUFDRSxhQUFBO0FBQU47O0FBS0E7RUFDRSxnQkFBQTtBQUZGOztBQU1FO0VBQ0UseUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsK0JBQUE7QUFISjs7QUFLSTtFQUNFLHFCQUFBO0FBSE47O0FBTUk7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFKTjs7QUFTQTtFQUNFLFNBQUE7QUFORiIsImZpbGUiOiJhZ3JlZW1lbnQtZmdhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXF1aS10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4ubGlzdCB7XG4gICZfX2l0ZW0ge1xuICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuXG4gICAgJi1sYWJlbCB7XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgIH1cbiAgfVxufVxuXG4ubmVxdWktZm9vdGVyX190b29sYmFyIHtcbiAgcGFkZGluZy10b3A6IDBweDtcbn1cblxuLmZvb3RlciB7XG4gICZfX2FncmVlbWVudC1hY2NlcHQge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogdHJhbnNwYXJlbnQ7XG5cbiAgICAmX2NoZWNrYm94IHtcbiAgICAgIG1hcmdpbi1pbmxpbmU6IDAgMTBweDtcbiAgICB9XG5cbiAgICAmX2xhYmVsIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1ncmF5LTcwKTtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICB9XG4gIH1cbn1cblxuLmxpc3RfX2l0ZW0tbGFiZWw6Om5nLWRlZXAgPiBwIHtcbiAgbWFyZ2luOiAwO1xufVxuIl19 */"] });
    return AgreementFGAPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_6__["TransactionBasePage"]));



/***/ }),

/***/ "QK8n":
/*!*******************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/propeller/pages/home/home.page.ts ***!
  \*******************************************************************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var _services_credit_info_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/credit-info.model */ "9FmH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _organisms_preapproval_preapproval_organism__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../organisms/preapproval/preapproval.organism */ "CQtc");





function HomePage_app_preapproval_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-preapproval", 1);
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("customerCredits", ctx_r0.propellerData);
} }
var HomePage = /** @class */ (function () {
    function HomePage(creditInfoModel) {
        this.creditInfoModel = creditInfoModel;
        this.isPreapproval = false;
        this.isPayment = false;
    }
    HomePage.prototype.ngOnInit = function () {
        this.initPage();
    };
    HomePage.prototype.initPage = function () {
        this.propellerData = this.creditInfoModel.customerCreditInfo;
    };
    HomePage.ɵfac = function HomePage_Factory(t) { return new (t || HomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_credit_info_model__WEBPACK_IMPORTED_MODULE_0__["CreditInfoModel"])); };
    HomePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomePage, selectors: [["app-credits-propeller"]], decls: 1, vars: 1, consts: [["class", "ion-page", "organismId", "propeller", 3, "customerCredits", 4, "ngIf"], ["organismId", "propeller", 1, "ion-page", 3, "customerCredits"]], template: function HomePage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomePage_app_preapproval_0_Template, 1, 1, "app-preapproval", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isPreapproval);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _organisms_preapproval_preapproval_organism__WEBPACK_IMPORTED_MODULE_3__["PreapprovalOrganism"]], styles: [".credits-propeller__footer[_ngcontent-%COMP%] {\n  min-height: 134px;\n}\n.credits-propeller__footer-message[_ngcontent-%COMP%] {\n  padding: 16px;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 14px;\n  color: var(--gray-alert-message);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxpQkFBQTtBQUFKO0FBRUk7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0FBQU4iLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JlZGl0cy1wcm9wZWxsZXIge1xuICAmX19mb290ZXIge1xuICAgIG1pbi1oZWlnaHQ6IDEzNHB4O1xuXG4gICAgJi1tZXNzYWdlIHtcbiAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgICBjb2xvcjogdmFyKC0tZ3JheS1hbGVydC1tZXNzYWdlKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
    return HomePage;
}());



/***/ }),

/***/ "U2KV":
/*!***************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/propeller/pages/life-insurance/life-insurance.page.ts ***!
  \***************************************************************************************************************/
/*! exports provided: LifeInsurancePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifeInsurancePage", function() { return LifeInsurancePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _services_customer_finacial_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/customer-finacial.service */ "uuzL");
/* harmony import */ var _life_insurance_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./life-insurance.config */ "ZeNP");
/* harmony import */ var _life_insurance_view_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./life-insurance.view-model */ "Gpmi");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");













var LifeInsurancePage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LifeInsurancePage, _super);
    function LifeInsurancePage(injector, route, customerFinancialService) {
        var _this = _super.call(this, injector) || this;
        _this.route = route;
        _this.customerFinancialService = customerFinancialService;
        _this.config = _life_insurance_config__WEBPACK_IMPORTED_MODULE_5__["LifeInsuranceConfig"];
        _this.gender = _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__["Gender"];
        _this.viewModel = new _life_insurance_view_model__WEBPACK_IMPORTED_MODULE_6__["LifeInsuranceViewModel"]();
        return _this;
    }
    LifeInsurancePage.prototype.ngOnInit = function () {
        this.initPage();
    };
    LifeInsurancePage.prototype.goToEnsureLoan = function () {
        this.customerFinancialService.updateCreditUser(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.customerFinancialService.creditUserInfo), { gender: this.viewModel.gender.value }));
        this.navigatorProvider.navigateForward(this.config.goTo.ensureLoan);
    };
    LifeInsurancePage.prototype.initPage = function () {
        this.viewModel.initForm();
    };
    LifeInsurancePage.ɵfac = function LifeInsurancePage_Factory(t) { return new (t || LifeInsurancePage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_customer_finacial_service__WEBPACK_IMPORTED_MODULE_4__["CustomerFinancialService"])); };
    LifeInsurancePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LifeInsurancePage, selectors: [["app-life-insurance-credits"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 35, vars: 25, consts: [[1, "nequi-header"], ["slot", "start"], ["id", "life-insurance_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], ["fullscreen", "true", 1, "ion-content--white", "ion-padding-horizontal"], [3, "formGroup"], [1, "nequi-title"], ["lines", "none", 1, "description-item"], [1, "description-item__text"], ["formControlName", "gender"], ["lines", "none", 1, "radio-button"], ["id", "life-insurance_female_img", 1, "radio-button__icon", 3, "src"], [1, "radio-button__label"], [1, "radio-button__radio", 3, "value"], ["id", "life-insurance_male_img", 1, "radio-button__icon", 3, "src"], [1, "nequi-footer", "ion-no-border"], ["id", "life-insurance_ready_button", "expand", "block", "color", "guayaba", 1, "nequi-footer__button", 3, "disabled", "click"]], template: function LifeInsurancePage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LifeInsurancePage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-content", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-item", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-text", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-list");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-radio-group", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-item", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "img", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "ion-radio", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-item", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "img", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ion-label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "ion-radio", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ion-footer", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "ion-button", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LifeInsurancePage_Template_ion_button_click_32_listener() { return ctx.goToEnsureLoan(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](34, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.viewModel.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 11, ctx.config.i18n.lifeInsurance.headerTitle), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 13, ctx.config.i18n.lifeInsurance.headerDescription), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 15, ctx.config.i18n.lifeInsurance.genderOptions.female.image), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 17, ctx.config.i18n.lifeInsurance.genderOptions.female.label), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.gender.FEMALE);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 19, ctx.config.i18n.lifeInsurance.genderOptions.male.image), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](28, 21, ctx.config.i18n.lifeInsurance.genderOptions.male.label), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.gender.MALE);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.viewModel.form.valid);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](34, 23, ctx.config.i18n.lifeInsurance.readyButton), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonRadioGroup"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControlName"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonRadio"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["RadioValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonFooter"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"]], styles: [".description-item[_ngcontent-%COMP%]::part(native) {\n  --padding-start: 0px;\n}\n.description-item__text[_ngcontent-%COMP%] {\n  color: var(--gray-70);\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 17px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvbGlmZS1pbnN1cmFuY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usb0JBQUE7QUFBSjtBQUdFO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFESiIsImZpbGUiOiJsaWZlLWluc3VyYW5jZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVzY3JpcHRpb24taXRlbSB7XG4gICY6OnBhcnQobmF0aXZlKSB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIH1cblxuICAmX190ZXh0IHtcbiAgICBjb2xvcjogdmFyKC0tZ3JheS03MCk7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbn1cbiJdfQ== */"] });
    return LifeInsurancePage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__["FeatureBasePage"]));



/***/ }),

/***/ "UfrE":
/*!*************************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/propeller/pages/payment-guarantees/payment-guarantees.config.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: PaymentGuaranteesConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentGuaranteesConfig", function() { return PaymentGuaranteesConfig; });
var PaymentGuaranteesConfig = Object.freeze({
    i18n: {
        title: 'credits.payment-guarantees.title',
        note: 'credits.payment-guarantees.note',
        content: 'credits.payment-guarantees.content',
        readyButton: 'credits.payment-guarantees.ready-button',
        logs: 'credits.payment-guarantees.logs',
    },
    goTo: {
        lifeInsurance: '/admin/credits/propeller/life-insurance',
    },
});


/***/ }),

/***/ "V8rb":
/*!***********************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/propeller/pages/payment-guarantees/payment-guarantees.page.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: PaymentGuaranteesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentGuaranteesPage", function() { return PaymentGuaranteesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_utils_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/utils/string */ "p6rB");
/* harmony import */ var _services_credit_info_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/credit-info.model */ "9FmH");
/* harmony import */ var _services_credit_logger_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/credit-logger.service */ "2ibl");
/* harmony import */ var _payment_guarantees_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./payment-guarantees.config */ "UfrE");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ui_src_lib_components_item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../../ui/src/lib/components/item-detail/item-detail.component */ "Ycc7");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");




















function PaymentGuaranteesPage_app_item_detail_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-item-detail", 11);
} if (rf & 2) {
    var item_r1 = ctx.$implicit;
    var last_r2 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", item_r1.image)("title", item_r1.title)("description", item_r1.description)("line", !last_r2);
} }
var PaymentGuaranteesPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PaymentGuaranteesPage, _super);
    function PaymentGuaranteesPage(injector, translateProvider, route, currencyPipe, creditInfoModel, creditLoggerService) {
        var _this = _super.call(this, injector) || this;
        _this.translateProvider = translateProvider;
        _this.route = route;
        _this.currencyPipe = currencyPipe;
        _this.creditInfoModel = creditInfoModel;
        _this.creditLoggerService = creditLoggerService;
        _this.config = _payment_guarantees_config__WEBPACK_IMPORTED_MODULE_10__["PaymentGuaranteesConfig"];
        return _this;
    }
    PaymentGuaranteesPage.prototype.ngOnInit = function () {
        this.loadItemList();
    };
    PaymentGuaranteesPage.prototype.goToLifeInsurance = function () {
        this.saveLog();
        this.navigatorProvider.navigateForward(this.config.goTo.lifeInsurance);
    };
    PaymentGuaranteesPage.prototype.loadItemList = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var i18n, commissionPersentage, amount, p100, newDescription;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                i18n = this.translateProvider.get(this.config.i18n.content);
                commissionPersentage = this.creditInfoModel.creditFeatureInfo.commissionPercentage;
                amount = this.creditInfoModel.creditFeatureInfo.loanAmount;
                p100 = 100;
                this.commissionAmount = this.currencyPipe.transform(amount * (commissionPersentage / p100));
                newDescription = Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_7__["createFormat"])(i18n.warranty.description, [
                    commissionPersentage.toString(),
                    this.commissionAmount,
                ]);
                this.itemList = [
                    {
                        image: i18n.warranty.img,
                        title: i18n.warranty.title,
                        description: newDescription,
                    },
                    {
                        image: i18n.insurance.img,
                        title: i18n.insurance.title,
                        description: i18n.insurance.description,
                    },
                ];
                return [2 /*return*/];
            });
        });
    };
    PaymentGuaranteesPage.prototype.saveLog = function () {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                this.creditLoggerService.save({
                    flowType: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["FlowType"].PROPELLER,
                    i18nKey: this.config.i18n.logs,
                    params: [
                        (_b = (_a = this.creditInfoModel.creditFeatureInfo) === null || _a === void 0 ? void 0 : _a.commissionPercentage) === null || _b === void 0 ? void 0 : _b.toString(),
                        this.commissionAmount,
                    ],
                });
                return [2 /*return*/];
            });
        });
    };
    PaymentGuaranteesPage.ɵfac = function PaymentGuaranteesPage_Factory(t) { return new (t || PaymentGuaranteesPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_6__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_credit_info_model__WEBPACK_IMPORTED_MODULE_8__["CreditInfoModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_credit_logger_service__WEBPACK_IMPORTED_MODULE_9__["CreditLoggerService"])); };
    PaymentGuaranteesPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PaymentGuaranteesPage, selectors: [["app-credits-payment-guarantees"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 19, vars: 10, consts: [[1, "nequi-header"], ["slot", "start"], ["id", "credits-propeller_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], ["fullscreen", "true", 1, "ion-content--white", "ion-padding-horizontal"], [1, "nequi-title"], [1, "credits-propeller__note"], [1, "margin-top-16"], [3, "icon", "title", "description", "line", 4, "ngFor", "ngForOf"], [1, "nequi-footer", "ion-no-border"], ["id", "credits-propeller_ready_button", "expand", "block", "color", "guayaba", 1, "nequi-footer__button", 3, "click"], [3, "icon", "title", "description", "line"]], template: function PaymentGuaranteesPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PaymentGuaranteesPage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-content", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-label", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ion-list", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, PaymentGuaranteesPage_app_item_detail_13_Template, 1, 4, "app-item-detail", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-footer", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "ion-button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PaymentGuaranteesPage_Template_ion_button_click_16_listener() { return ctx.goToLifeInsurance(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 4, ctx.config.i18n.title));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 6, ctx.config.i18n.note));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.itemList);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](18, 8, ctx.config.i18n.readyButton), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonFooter"], _ui_src_lib_components_item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_12__["ItemDetailComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"]], styles: [".credits-propeller__note[_ngcontent-%COMP%] {\n  color: var(--gray-70);\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 17px;\n}\n.credits-propeller__item[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  border-bottom: 1px solid var(--divisor-line);\n  padding: 8px 0px 16px 0px;\n}\n.credits-propeller__item[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0px;\n}\n.credits-propeller__item-img[_ngcontent-%COMP%] {\n  display: inline;\n}\n.credits-propeller__item-img[_ngcontent-%COMP%]::part(image) {\n  width: 32px;\n  height: 32px;\n  display: inline;\n  margin-right: 8px;\n}\n.credits-propeller__item-title[_ngcontent-%COMP%] {\n  color: var(--medianoche);\n  font-style: normal;\n  font-weight: 500;\n  font-size: 17px;\n  line-height: 22px;\n  display: inline;\n  position: relative;\n  top: -10px;\n}\n.credits-propeller__item-description[_ngcontent-%COMP%] {\n  color: var(--gray-70);\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 17px;\n  text-overflow: unset;\n  white-space: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvcGF5bWVudC1ndWFyYW50ZWVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUFKO0FBR0U7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNENBQUE7RUFDQSx5QkFBQTtBQURKO0FBR0k7RUFDRSxrQkFBQTtBQUROO0FBSUk7RUFDRSxlQUFBO0FBRk47QUFJTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBRlI7QUFNSTtFQUNFLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFKTjtBQU9JO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQUxOIiwiZmlsZSI6InBheW1lbnQtZ3VhcmFudGVlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JlZGl0cy1wcm9wZWxsZXIge1xuICAmX19ub3RlIHtcbiAgICBjb2xvcjogdmFyKC0tZ3JheS03MCk7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICB9XG5cbiAgJl9faXRlbSB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWRpdmlzb3ItbGluZSk7XG4gICAgcGFkZGluZzogOHB4IDBweCAxNnB4IDBweDtcblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBib3JkZXItYm90dG9tOiAwcHg7XG4gICAgfVxuXG4gICAgJi1pbWcge1xuICAgICAgZGlzcGxheTogaW5saW5lO1xuXG4gICAgICAmOjpwYXJ0KGltYWdlKSB7XG4gICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi10aXRsZSB7XG4gICAgICBjb2xvcjogdmFyKC0tbWVkaWFub2NoZSk7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0b3A6IC0xMHB4O1xuICAgIH1cblxuICAgICYtZGVzY3JpcHRpb24ge1xuICAgICAgY29sb3I6IHZhcigtLWdyYXktNzApO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAgICAgdGV4dC1vdmVyZmxvdzogdW5zZXQ7XG4gICAgICB3aGl0ZS1zcGFjZTogdW5zZXQ7XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
    return PaymentGuaranteesPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__["FeatureBasePage"]));



/***/ }),

/***/ "Xc0T":
/*!*****************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/propeller/pages/know-us-better/know-us-better.config.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: KnowUsBetterConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnowUsBetterConfig", function() { return KnowUsBetterConfig; });
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/features/profile/presentation */ "cLcF");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
var _a;



var KnowUsBetterConfig = Object.freeze({
    i18n: {
        headerTitle: 'credits.know-us-better.headerTitle',
        helpLink: 'credits.know-us-better.helpLink',
        addressText: '{0} - {1}',
        logs: 'credits.know-us-better.logs',
        sarlaft: {
            alert: {
                lockedInSarlaftError: 'credits.know-us-better.sarlaft.alert.locked-in-sarlaft-error',
            },
        },
    },
    goTo: {
        help: 'https://ayuda.nequi.com.co/hc/es/articles/360042937371',
        currentUrl: '/admin/credits/propeller/know-us-better',
        backpack: '/admin/dashboard',
    },
    regex: {
        dateformat: /(\d{4})(\d{2})(\d{2})/,
    },
    moduleList: [
        _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_0__["ModuleCode"].LOCATION,
        _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_0__["ModuleCode"].OCCUPATION,
        _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_0__["ModuleCode"].INCOME_EXPENSES,
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
            id: _nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_1__["ModuleId"].YOUR_DOCUMENT,
            leftImage: 'assets/images/propeller/happy-man.svg',
            title: 'credits.know-us-better.content.your-document.title',
            description: 'credits.know-us-better.content.your-document.description',
            link: '/admin/credits/propeller/profile/my-info/document-guide',
            status: _nequi_ui__WEBPACK_IMPORTED_MODULE_2__["NavButtonCardStatus"].INACTIVE,
            config: {
                sourceFlow: _nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_1__["SourceFlow"].BREAK_CEILING,
            },
        },
        {
            id: _nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_1__["ModuleId"].WHERE_YOU_LIVE,
            leftImage: 'assets/images/propeller/home.svg',
            title: 'credits.know-us-better.content.where-you-live.title',
            description: 'credits.know-us-better.content.where-you-live.description',
            link: '/admin/credits/propeller/profile/my-info/address',
            status: _nequi_ui__WEBPACK_IMPORTED_MODULE_2__["NavButtonCardStatus"].INACTIVE,
        },
        {
            id: _nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_1__["ModuleId"].WHAT_DO_YOU_DO,
            leftImage: 'assets/images/propeller/suitcase.svg',
            title: 'credits.know-us-better.content.what-do-you-do.title',
            description: 'credits.know-us-better.content.what-do-you-do.description',
            link: '/admin/credits/propeller/profile/my-info/occupation',
            status: _nequi_ui__WEBPACK_IMPORTED_MODULE_2__["NavButtonCardStatus"].INACTIVE,
        },
        {
            id: _nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_1__["ModuleId"].YOUR_MONEY,
            leftImage: 'assets/images/propeller/money.svg',
            title: 'credits.know-us-better.content.your-money.title',
            description: 'credits.know-us-better.content.your-money.description',
            link: '/admin/credits/propeller/profile/account/income-and-expenses',
            status: _nequi_ui__WEBPACK_IMPORTED_MODULE_2__["NavButtonCardStatus"].INACTIVE,
        },
        {
            id: _nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_1__["ModuleId"].TALKING_ABOUT,
            leftImage: 'assets/images/propeller/messages.svg',
            title: 'credits.know-us-better.content.talking-about.title',
            description: 'credits.know-us-better.content.talking-about.description',
            link: '/admin/credits/propeller/talking-about',
            status: _nequi_ui__WEBPACK_IMPORTED_MODULE_2__["NavButtonCardStatus"].INACTIVE,
            config: {
                chatKey: 'nequiChatCredits',
                finishRoute: '/admin/credits/propeller/this-got-serious',
            },
        },
    ],
    analytics: {
        intentionOfModules: {
            name: 'preaprobado_modulos_propulsor',
            params: {
                dynatrace: ['product_id'],
            },
        },
    },
});


/***/ }),

/***/ "YmSa":
/*!*************************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/propeller/pages/adjust-installments/adjust-installments.page.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: AdjustIntallmentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdjustIntallmentsPage", function() { return AdjustIntallmentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/features/credits/core */ "42wy");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_ui_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nequi/ui/services */ "U66T");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _nequi_utils_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nequi/utils/string */ "p6rB");
/* harmony import */ var _services_adjust_installments_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../services/adjust-installments.service */ "cO3k");
/* harmony import */ var _adjust_installments_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./adjust-installments.config */ "Jsat");
/* harmony import */ var _adjust_installments_view_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./adjust-installments.view-model */ "E3vt");
/* harmony import */ var _organisms_adjust_installments_adjust_installments_organism__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../organisms/adjust-installments/adjust-installments.organism */ "xtdo");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ui_src_lib_components_busy_indicator_busy_indicator_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../../../ui/src/lib/components/busy-indicator/busy-indicator.component */ "N6nj");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");



























function AdjustIntallmentsPage_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "app-adjust-installment", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("accept", function AdjustIntallmentsPage_ng_container_0_Template_app_adjust_installment_accept_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.onAccept($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 3, ctx_r0.config.i18n.headerTitle))("data", ctx_r0.adjustInstallmentsService.data)("flow", ctx_r0.flowType.PROPELLER);
} }
function AdjustIntallmentsPage_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-header", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-toolbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-buttons", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdjustIntallmentsPage_ng_container_1_Template_ion_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "ion-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-content", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "app-busy-indicator", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onReload", function AdjustIntallmentsPage_ng_container_1_Template_app_busy_indicator_onReload_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.loadData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showReload", ctx_r1.viewModel.hasError)("reloadMessage", ctx_r1.viewModel.bussyIndicatorError);
} }
var AdjustIntallmentsPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AdjustIntallmentsPage, _super);
    function AdjustIntallmentsPage(injector, translateProvider, adjustInstallmentsService, currencyPipe, datePipe, confirmBottomSheetService, loadingService, dynatraceService, router) {
        var _this = _super.call(this, injector) || this;
        _this.translateProvider = translateProvider;
        _this.adjustInstallmentsService = adjustInstallmentsService;
        _this.currencyPipe = currencyPipe;
        _this.datePipe = datePipe;
        _this.confirmBottomSheetService = confirmBottomSheetService;
        _this.loadingService = loadingService;
        _this.dynatraceService = dynatraceService;
        _this.router = router;
        _this.config = _adjust_installments_config__WEBPACK_IMPORTED_MODULE_13__["AdjustIntallmentsConfig"];
        _this.flowType = _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["FlowType"];
        _this.viewModel = new _adjust_installments_view_model__WEBPACK_IMPORTED_MODULE_14__["AdjustIntallmentsViewModel"]();
        return _this;
    }
    AdjustIntallmentsPage.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setPocket();
                        this.initI18n();
                        return [4 /*yield*/, this.dynatraceService.setAnalyticsOfEvent({
                                eventName: this.config.analytics.intentionToPayment.name,
                            })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.loadData()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AdjustIntallmentsPage.prototype.ionViewWillLeave = function () {
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
    AdjustIntallmentsPage.prototype.loadData = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 6]);
                        this.viewModel.hasError = false;
                        return [4 /*yield*/, this.loadingService.show()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.adjustInstallmentsService.loadData()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.loadingService.hide(true)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 4:
                        error_1 = _a.sent();
                        return [4 /*yield*/, this.loadingService.hide(false)];
                    case 5:
                        _a.sent();
                        this.viewModel.hasError = true;
                        this.viewModel.bussyIndicatorError = error_1.message;
                        this.dynatraceService.setCustomError(error_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    AdjustIntallmentsPage.prototype.showConfirmationInfo = function (rescheduleType) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var buildItemParams, data;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.viewModel.rescheduleType = rescheduleType;
                        buildItemParams = {
                            messages: this.i18n.confirmation,
                            pocketInfo: this.pocket,
                            currencyPipe: this.currencyPipe,
                            datePipe: this.datePipe,
                            paymentAmount: this.adjustInstallmentsService.paymentAmount,
                            nextFeeDate: this.adjustInstallmentsService.data.nextFeeDate,
                        };
                        return [4 /*yield*/, this.confirmBottomSheetService.show({
                                title: this.i18n.confirmation.title,
                                subtitle: this.i18n.confirmation.subtitle,
                                items: this.viewModel.buildItems(buildItemParams),
                                confirmLabel: this.i18n.confirmation.buttons.next,
                                cancelLabel: this.i18n.confirmation.buttons.cancel,
                                viewCancel: true,
                                footerDescription: Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_11__["createFormat"])(this.i18n.confirmation.footerDescription, [
                                    this.datePipe.transform(this.adjustInstallmentsService.data.lastFeeDate),
                                ]),
                            })];
                    case 1:
                        data = (_a.sent()).data;
                        if (data === true) {
                            this.adjustInstallmentsService.makePayment(this.i18n, this.viewModel.rescheduleType, this.pocket, _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__["CreditType"].PROPELLER);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AdjustIntallmentsPage.prototype.onAccept = function (params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (params.isSuccess) {
                    this.showConfirmationInfo(params.rescheduleType);
                    this.setAnalyticsOfProperties(params.rescheduleType);
                    return [2 /*return*/];
                }
                this.dynatraceService.setCustomError(params.error);
                return [2 /*return*/];
            });
        });
    };
    AdjustIntallmentsPage.prototype.initI18n = function () {
        var result = this.translateProvider.get(this.config.i18n.content);
        this.i18n = Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_10__["toCamelCaseProperties"])(result);
    };
    AdjustIntallmentsPage.prototype.setAnalyticsOfProperties = function (rescheduleType) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var paramsValue, props;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                paramsValue = [
                    _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__["CreditType"].PROPELLER,
                    this.adjustInstallmentsService.paymentAmount,
                    this.translateProvider.get(this.config.i18n.paymentType[rescheduleType]),
                    this.adjustInstallmentsService.data.nextFeeDate,
                ].concat(rescheduleType === _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__["RescheduleType"].INSTALLMENTS_AMOUNT
                    ? [this.adjustInstallmentsService.data.amountFeesAdjusted]
                    : [
                        this.adjustInstallmentsService.data.numberFeesAdjusted,
                        this.adjustInstallmentsService.data.lastFeeDate,
                    ]);
                props = Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_10__["stringsArrayToObjectWithValues"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this.config.analytics.intentionToPayment.params.dynatrace).concat(this.config.analytics.intentionToPayment.params[rescheduleType]), paramsValue);
                this.dynatraceService.setAnalyticsOfProperties(props);
                return [2 /*return*/];
            });
        });
    };
    AdjustIntallmentsPage.prototype.setPocket = function () {
        var _a;
        this.pocket = (_a = this.router.getCurrentNavigation().extras.state) === null || _a === void 0 ? void 0 : _a.pocket;
    };
    AdjustIntallmentsPage.ɵfac = function AdjustIntallmentsPage_Factory(t) { return new (t || AdjustIntallmentsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_6__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_adjust_installments_service__WEBPACK_IMPORTED_MODULE_12__["AdjustInstallmentsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_ui_services__WEBPACK_IMPORTED_MODULE_9__["ConfirmInfoBottomSheetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_8__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__["DynatraceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
    AdjustIntallmentsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AdjustIntallmentsPage, selectors: [["app-adjust-installments-credits"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "ion-page", 3, "title", "data", "flow", "accept"], [1, "nequi-header"], ["slot", "start"], ["id", "adjust-installments_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], [1, "ion-content--white"], [3, "showReload", "reloadMessage", "onReload"]], template: function AdjustIntallmentsPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AdjustIntallmentsPage_ng_container_0_Template, 3, 5, "ng-container", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AdjustIntallmentsPage_ng_container_1_Template, 8, 2, "ng-container", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.viewModel.hasError);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.viewModel.hasError);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _organisms_adjust_installments_adjust_installments_organism__WEBPACK_IMPORTED_MODULE_15__["AdjustInstallmentsOrganism"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonContent"], _ui_src_lib_components_busy_indicator_busy_indicator_component__WEBPACK_IMPORTED_MODULE_17__["BusyIndicatorComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["TranslatePipe"]], styles: [".card-item[_ngcontent-%COMP%] {\n  margin: 8px 5px;\n  border-radius: 8px;\n  border: 1px solid var(--border-gray-20);\n  box-shadow: 0px 1px 1px var(--box-shadow-card-015);\n}\n.card-item__content[_ngcontent-%COMP%]::part(native) {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  --min-height: auto;\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n}\n.card-item__title[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 19px;\n}\n.card-item__note[_ngcontent-%COMP%] {\n  padding-top: 4px;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 17px;\n  color: var(--gray-70);\n}\n.description[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 17px;\n  color: var(--gray-70);\n}\n.note[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 14px;\n  color: var(--gray-70);\n}\nion-radio[_ngcontent-%COMP%] {\n  margin: 5px;\n  width: 18px;\n  height: 18px;\n}\nion-item[_ngcontent-%COMP%]::part(native) {\n  --background-activated-opacity: 0;\n  --background-focused-opacity: 0;\n  --background-hover-opacity: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvYWRqdXN0LWluc3RhbGxtZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx1Q0FBQTtFQUNBLGtEQUFBO0FBQ0Y7QUFFSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBQU47QUFJRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFGSjtBQUtFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFISjtBQU9BO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBSkY7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQUpGO0FBT0E7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFKRjtBQVFFO0VBQ0UsaUNBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0FBTEoiLCJmaWxlIjoiYWRqdXN0LWluc3RhbGxtZW50cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1pdGVtIHtcbiAgbWFyZ2luOiA4cHggNXB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1ncmF5LTIwKTtcbiAgYm94LXNoYWRvdzogMHB4IDFweCAxcHggdmFyKC0tYm94LXNoYWRvdy1jYXJkLTAxNSk7XG5cbiAgJl9fY29udGVudCB7XG4gICAgJjo6cGFydChuYXRpdmUpIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAtLW1pbi1oZWlnaHQ6IGF1dG87XG4gICAgICAtLXBhZGRpbmctdG9wOiAxNnB4O1xuICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICB9XG4gIH1cblxuICAmX190aXRsZSB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICB9XG5cbiAgJl9fbm90ZSB7XG4gICAgcGFkZGluZy10b3A6IDRweDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gICAgY29sb3I6IHZhcigtLWdyYXktNzApO1xuICB9XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgY29sb3I6IHZhcigtLWdyYXktNzApO1xufVxuXG4ubm90ZSB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgY29sb3I6IHZhcigtLWdyYXktNzApO1xufVxuXG5pb24tcmFkaW8ge1xuICBtYXJnaW46IDVweDtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAmOjpwYXJ0KG5hdGl2ZSkge1xuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMDtcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAwO1xuICAgIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAwO1xuICB9XG59XG4iXX0= */"] });
    return AdjustIntallmentsPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__["FeatureBasePage"]));



/***/ }),

/***/ "ZeNP":
/*!*****************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/propeller/pages/life-insurance/life-insurance.config.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: LifeInsuranceConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifeInsuranceConfig", function() { return LifeInsuranceConfig; });
var LifeInsuranceConfig = Object.freeze({
    i18n: {
        lifeInsurance: {
            headerTitle: 'credits.life-insurance.header.title',
            headerDescription: 'credits.life-insurance.header.description',
            genderOptions: {
                female: {
                    label: 'credits.life-insurance.gender-options.female.label',
                    image: 'credits.life-insurance.gender-options.female.icon',
                },
                male: {
                    label: 'credits.life-insurance.gender-options.male.label',
                    image: 'credits.life-insurance.gender-options.male.icon',
                },
            },
            readyButton: 'credits.life-insurance.ready-button',
        },
    },
    goTo: {
        ensureLoan: '/admin/credits/propeller/ensure-loan',
    },
});


/***/ }),

/***/ "aL3q":
/*!*****************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/propeller/pages/payment-detail/payment-detail.config.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: PaymentDetailConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentDetailConfig", function() { return PaymentDetailConfig; });
var PaymentDetailConfig = Object.freeze({
    i18n: {
        headerTitle: 'credits.payment-detail.title',
        paymentDetail: 'credits.payment-detail.items',
        paymentDetailExpired: 'credits.payment-detail.items-expired',
        insurance: 'credits.payment-detail.insurance',
        modal: 'credits.payment-detail.modal',
    },
    routes: {
        backpack: '/admin/dashboard',
        changeLiveInsurance: '/admin/credits/propeller/change-live-insurance',
    },
    paydayLimitFormat: 'dd \'de\' MMMM \'de\' yyyy',
});


/***/ }),

/***/ "b2rR":
/*!*************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/propeller/pages/payment-home/payment-home.config.ts ***!
  \*************************************************************************************************************/
/*! exports provided: PaymentConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentConfig", function() { return PaymentConfig; });
var PaymentConfig = Object.freeze({
    i18n: {
        calendarTitle: 'credits.calendar.propeller.title',
    },
    routes: {
        paymentGuarantees: '/admin/credits/propeller/payment-guarantees',
    },
    timeOut: 1000,
    analytics: {
        intentionToPay: {
            name: {
                cleverTap: 'Prestamo_Propulsor_intención_pago',
                dynatrace: 'intencion_pago_propulsor',
            },
            params: {
                cleverTap: [
                    'Fecha_intencion',
                    'Dia_pago',
                    'Fecha_proxima_cuota',
                    'Valor_por_pagar',
                    'Valor_proxima_cuota',
                    'Cuotas_pendientes_por_pagar',
                ],
                dynatrace: [
                    'product_id',
                    'dia_pago',
                    'fecha_proxima_cuota',
                    'valor_por_pagar',
                    'valor_proxima_cuota',
                    'cuotas_pendientes_por_pagar',
                ],
                error: ['Codigo_error', 'Descripcion_error'],
            },
            error: 'Prestamo_Propulsor_intención_pago_Error',
            routes: {
                paymentHome: '/admin/credits/propeller/payment-home',
            },
        },
    },
});


/***/ }),

/***/ "bw8x":
/*!************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/middlewares/propeller.middleware.ts ***!
  \************************************************************************************/
/*! exports provided: PropellerMiddleware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropellerMiddleware", function() { return PropellerMiddleware; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/features/credits/core */ "42wy");
/* harmony import */ var _base_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.middleware */ "Jqih");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var PropellerMiddleware = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PropellerMiddleware, _super);
    function PropellerMiddleware() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PropellerMiddleware.prototype.getCustomerCreditsFail = function (error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var result;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.dynatraceService.setCustomError(error);
                        result = false;
                        if (!_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOMER_MUST_GO_TO_ENGINE"].includes(error.code)) return [3 /*break*/, 2];
                        if (error.data) {
                            this.setCustomerCreditsError(error.data);
                        }
                        return [4 /*yield*/, this.showWelcome()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result ? this.showUserDontHavePreapprovalModal() : result];
                    case 2:
                        if (!_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_1__["CONFIDENCE_SCORE_CREDITS_ERRORS"].includes(error.code)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.onSarlaftLocksError()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                    case 4:
                        if (!_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_1__["CUSTORMER_WITHOUT_PREAPROVED_ERRORS"].includes(error.code)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.showWelcome()];
                    case 5:
                        result = _a.sent();
                        return [2 /*return*/, result ? this.showOtherCreditOptions(error.data) : result];
                    case 6:
                        // TODO: Queda pendiente un refactor para incluir los errores anteriores (No se hace para evitar regresion en el HU)
                        if (this.getCustomerCreditException[error.constructor.name]) {
                            return [2 /*return*/, this.getCustomerCreditException[error.constructor.name](error)];
                        }
                        return [4 /*yield*/, this.showComeBackLaterAlert(error.message)];
                    case 7:
                        _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    PropellerMiddleware.prototype.setGetCustomerCreditsException = function () {
        var _a;
        var _this = this;
        this.getCustomerCreditException = (_a = {},
            _a[_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_1__["FgaRegulationLockoutException"].name] = function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, this.onFgaRegulationLockoutError()];
            }); }); },
            _a);
    };
    PropellerMiddleware.prototype.showOtherCreditOptions = function (data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var i18nKey, url, _a, creditType;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                i18nKey = this.config.propeller.modal.propeller;
                _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])((data === null || data === void 0 ? void 0 : data.availableProducts) || [], 1), creditType = _a[0];
                if (creditType === _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_1__["CreditType"].LIFEGUARD) {
                    i18nKey = this.config.propeller.modal.lifeguard;
                    url = this.config.routes.lifeguard;
                }
                return [2 /*return*/, this.showCardModal({
                        i18nKey: i18nKey,
                        onAccept: function () { return (url ? _this.navController.navigateRoot(url) : false); },
                        onCancel: function () { return false; },
                    })];
            });
        });
    };
    PropellerMiddleware.prototype.onFgaRegulationLockoutError = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var i18nKey;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                i18nKey = this.config.propeller.modal.fgaRegulationLockout;
                return [2 /*return*/, this.showCardModal({
                        i18nKey: i18nKey,
                        onAccept: function () { return _this.navController.navigateRoot(_this.config.routes.dashboard); },
                        onCancel: function () { return false; },
                    })];
            });
        });
    };
    PropellerMiddleware.ɵfac = function PropellerMiddleware_Factory(t) { return ɵPropellerMiddleware_BaseFactory(t || PropellerMiddleware); };
    PropellerMiddleware.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: PropellerMiddleware, factory: PropellerMiddleware.ɵfac });
    return PropellerMiddleware;
}(_base_middleware__WEBPACK_IMPORTED_MODULE_2__["BaseMiddleware"]));

var ɵPropellerMiddleware_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](PropellerMiddleware);


/***/ }),

/***/ "f44g":
/*!*******************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/propeller/pages/preapproved-home/preapproved-home.page.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: PreapprovedHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreapprovedHomePage", function() { return PreapprovedHomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _organisms_approval_front_approval_front_view_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../organisms/approval-front/approval-front.view-model */ "pwQe");
/* harmony import */ var _organisms_preapproval_preapproval_organism__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../organisms/preapproval/preapproval.organism */ "CQtc");
/* harmony import */ var _organisms_preapproval_preapproval_view_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../organisms/preapproval/preapproval.view-model */ "BJHQ");
/* harmony import */ var _services_credit_info_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/credit-info.model */ "9FmH");
/* harmony import */ var _services_credit_logger_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../services/credit-logger.service */ "2ibl");
/* harmony import */ var _preapproved_home_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./preapproved-home.config */ "9qbw");





















function PreapprovedHomePage_app_preapproval_0_Template(rf, ctx) { if (rf & 1) {
    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-preapproval", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nextButtonCliked", function PreapprovedHomePage_app_preapproval_0_Template_app_preapproval_nextButtonCliked_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.goToPaymentGuarantees(); })("goBackCliked", function PreapprovedHomePage_app_preapproval_0_Template_app_preapproval_goBackCliked_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.goBack(); })("showHelpPressed", function PreapprovedHomePage_app_preapproval_0_Template_app_preapproval_showHelpPressed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.onShowHelpPressed(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showHelpButton", true)("showApprovalFront", true)("messages", ctx_r0.config.i18n.preapproval)("financingAmount", ctx_r0.propellerData.preapproved.maxAmount)("customerCredits", ctx_r0.propellerData);
} }
var PreapprovedHomePage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PreapprovedHomePage, _super);
    function PreapprovedHomePage(injector, creditInfoModel, viewModel, route, creditLoggerService, currencyPipe, dynatraceService, approvalFrontViewModel) {
        var _this = _super.call(this, injector) || this;
        _this.creditInfoModel = creditInfoModel;
        _this.viewModel = viewModel;
        _this.route = route;
        _this.creditLoggerService = creditLoggerService;
        _this.currencyPipe = currencyPipe;
        _this.dynatraceService = dynatraceService;
        _this.approvalFrontViewModel = approvalFrontViewModel;
        _this.isPreapproval = true;
        _this.config = _preapproved_home_config__WEBPACK_IMPORTED_MODULE_11__["PropellerConfig"];
        return _this;
    }
    PreapprovedHomePage.prototype.ngOnInit = function () {
        this.initPage();
    };
    PreapprovedHomePage.prototype.ngOnDestroy = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.approvalFrontViewModel.resetValue();
                return [2 /*return*/];
            });
        });
    };
    PreapprovedHomePage.prototype.ionViewWillLeave = function () {
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
    PreapprovedHomePage.prototype.goToPaymentGuarantees = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.saveLog();
                this.navigatorProvider.navigateForward(this.config.routes.paymentGuarantees);
                return [2 /*return*/];
            });
        });
    };
    PreapprovedHomePage.prototype.goBack = function () {
        if (this.approvalFrontViewModel.info.isFromApproval) {
            this.navigatorProvider.back();
            return;
        }
        _super.prototype.goBack.call(this);
    };
    PreapprovedHomePage.prototype.onShowHelpPressed = function () {
        this.navigatorProvider.navigateForward(this.config.routes.help, {
            queryParams: {
                context: this.config.i18n.helpContext,
            },
        });
    };
    PreapprovedHomePage.prototype.initPage = function () {
        this.propellerData = this.creditInfoModel.customerCreditInfo;
    };
    PreapprovedHomePage.prototype.saveLog = function () {
        this.creditLoggerService.save({
            flowType: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["FlowType"].PROPELLER,
            i18nKey: this.config.i18n.logs.amount,
            params: [
                this.currencyPipe.transform(this.viewModel.maxAmount),
                this.currencyPipe.transform(this.creditInfoModel.creditFeatureInfo.loanAmount),
                this.creditInfoModel.creditFeatureInfo.installment.toString(),
                this.currencyPipe.transform(this.creditInfoModel.creditFeatureInfo.monthlyFee),
            ],
        });
    };
    PreapprovedHomePage.ɵfac = function PreapprovedHomePage_Factory(t) { return new (t || PreapprovedHomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_credit_info_model__WEBPACK_IMPORTED_MODULE_9__["CreditInfoModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_organisms_preapproval_preapproval_view_model__WEBPACK_IMPORTED_MODULE_8__["PreapprovalViewModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_credit_logger_service__WEBPACK_IMPORTED_MODULE_10__["CreditLoggerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__["DynatraceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_organisms_approval_front_approval_front_view_model__WEBPACK_IMPORTED_MODULE_6__["ApprovalFrontViewModel"])); };
    PreapprovedHomePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PreapprovedHomePage, selectors: [["app-credits-propeller"]], viewQuery: function PreapprovedHomePage_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_organisms_preapproval_preapproval_organism__WEBPACK_IMPORTED_MODULE_7__["PreapprovalOrganism"], 1);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.preaprovalOrganism = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "ion-page", "organismId", "propeller", 3, "showHelpButton", "showApprovalFront", "messages", "financingAmount", "customerCredits", "nextButtonCliked", "goBackCliked", "showHelpPressed", 4, "ngIf"], ["organismId", "propeller", 1, "ion-page", 3, "showHelpButton", "showApprovalFront", "messages", "financingAmount", "customerCredits", "nextButtonCliked", "goBackCliked", "showHelpPressed"]], template: function PreapprovedHomePage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, PreapprovedHomePage_app_preapproval_0_Template, 1, 5, "app-preapproval", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.propellerData);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _organisms_preapproval_preapproval_organism__WEBPACK_IMPORTED_MODULE_7__["PreapprovalOrganism"]], styles: [".credits-propeller__footer[_ngcontent-%COMP%] {\n  min-height: 134px;\n}\n.credits-propeller__footer-message[_ngcontent-%COMP%] {\n  padding: 16px;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 14px;\n  color: var(--gray-alert-message);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvcHJlYXBwcm92ZWQtaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxpQkFBQTtBQUFKO0FBRUk7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0FBQU4iLCJmaWxlIjoicHJlYXBwcm92ZWQtaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JlZGl0cy1wcm9wZWxsZXIge1xuICAmX19mb290ZXIge1xuICAgIG1pbi1oZWlnaHQ6IDEzNHB4O1xuXG4gICAgJi1tZXNzYWdlIHtcbiAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgICBjb2xvcjogdmFyKC0tZ3JheS1hbGVydC1tZXNzYWdlKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
    return PreapprovedHomePage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__["FeatureBasePage"]));



/***/ }),

/***/ "gTEW":
/*!***********************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/organisms/add-more-info/services/add-more-info-bottom-sheet.service.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: AddMoreInfoBottomSheetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMoreInfoBottomSheetService", function() { return AddMoreInfoBottomSheetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _add_more_info_organism__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../add-more-info.organism */ "GV1l");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





var AddMoreInfoBottomSheetService = /** @class */ (function () {
    function AddMoreInfoBottomSheetService(bottomSheetController) {
        this.bottomSheetController = bottomSheetController;
    }
    AddMoreInfoBottomSheetService.prototype.show = function (componentProps) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var bottomSheet;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        bottomSheet = this.bottomSheetController.create({
                            isAutoHeight: true,
                            component: _add_more_info_organism__WEBPACK_IMPORTED_MODULE_2__["AddMoreInfoOrganism"],
                            componentProps: componentProps,
                            cssClass: (componentProps === null || componentProps === void 0 ? void 0 : componentProps.theme) === _nequi_ui__WEBPACK_IMPORTED_MODULE_1__["Theme"].DARK || !(componentProps === null || componentProps === void 0 ? void 0 : componentProps.theme)
                                ? 'bottom-sheet--medianoche'
                                : '',
                        });
                        return [4 /*yield*/, bottomSheet.open()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, bottomSheet.onDidDismiss()];
                }
            });
        });
    };
    AddMoreInfoBottomSheetService.prototype.hide = function () {
        return this.bottomSheetController.dismiss();
    };
    AddMoreInfoBottomSheetService.ɵfac = function AddMoreInfoBottomSheetService_Factory(t) { return new (t || AddMoreInfoBottomSheetService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_1__["BottomSheetController"])); };
    AddMoreInfoBottomSheetService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AddMoreInfoBottomSheetService, factory: AddMoreInfoBottomSheetService.ɵfac, providedIn: 'root' });
    return AddMoreInfoBottomSheetService;
}());



/***/ }),

/***/ "mXVN":
/*!*******************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/propeller/pages/this-got-serious/this-got-serious.page.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: ThisGotSeriousPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThisGotSeriousPage", function() { return ThisGotSeriousPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _services_credit_logger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/credit-logger.service */ "2ibl");
/* harmony import */ var _this_got_serious_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./this-got-serious.config */ "1wwv");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");














function ThisGotSeriousPage_ion_item_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "ion-label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 3, item_r1.img));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 5, item_r1.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 7, item_r1.description), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
var ThisGotSeriousPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ThisGotSeriousPage, _super);
    function ThisGotSeriousPage(injector, route, creditLoggerService, dynatraceService) {
        var _this = _super.call(this, injector) || this;
        _this.route = route;
        _this.creditLoggerService = creditLoggerService;
        _this.dynatraceService = dynatraceService;
        _this.config = _this_got_serious_config__WEBPACK_IMPORTED_MODULE_6__["ThisGotSeriousConfig"];
        return _this;
    }
    ThisGotSeriousPage.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dynatraceService.setAnalyticsOfEnd()];
                    case 1:
                        _a.sent();
                        this.setLog(this.config.i18n.logs);
                        return [2 /*return*/];
                }
            });
        });
    };
    ThisGotSeriousPage.prototype.goToTermsAndConditions = function () {
        this.navigatorProvider.navigateForward(this.config.goTo.termsAndConditions);
    };
    ThisGotSeriousPage.prototype.setLog = function (messages) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.creditLoggerService.save({ flowType: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__["FlowType"].PROPELLER, i18nKey: messages });
                return [2 /*return*/];
            });
        });
    };
    ThisGotSeriousPage.ɵfac = function ThisGotSeriousPage_Factory(t) { return new (t || ThisGotSeriousPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_credit_logger_service__WEBPACK_IMPORTED_MODULE_5__["CreditLoggerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_4__["DynatraceService"])); };
    ThisGotSeriousPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ThisGotSeriousPage, selectors: [["app-credits-this-got-serious"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 16, vars: 7, consts: [[1, "nequi-header"], ["slot", "start"], ["id", "this-got-serious_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], ["fullscreen", "true", 1, "ion-content--white", "ion-padding-horizontal"], [1, "nequi-title"], [1, "content-list", "margin-top-16"], ["lines", "none", "class", "content-list__item", 4, "ngFor", "ngForOf"], [1, "nequi-footer", "ion-no-border"], ["id", "this-got-serious_ready_button", "expand", "block", "color", "guayaba", 1, "nequi-footer__button", 3, "click"], ["lines", "none", 1, "content-list__item"], [1, "content-list__item_img", 3, "src"], [1, "content-list__item_title"], ["lines", "none", 1, "content-list__item_description", 3, "innerHtml"]], template: function ThisGotSeriousPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ThisGotSeriousPage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ThisGotSeriousPage_ion_item_10_Template, 12, 9, "ion-item", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-footer", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ThisGotSeriousPage_Template_ion_button_click_13_listener() { return ctx.goToTermsAndConditions(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 3, ctx.config.i18n.title));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.config.i18n.itemlist);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 5, ctx.config.i18n.acceptButton), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonImg"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonLabel"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"]], styles: [".content-list__item[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  border-bottom: 1px solid var(--divisor-line);\n  padding: 8px 0px 16px 0px;\n}\n.content-list__item[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0px;\n}\n.content-list__item_img[_ngcontent-%COMP%] {\n  display: inline;\n}\n.content-list__item_img[_ngcontent-%COMP%]::part(image) {\n  width: 32px;\n  height: 32px;\n  display: inline;\n  margin-right: 8px;\n}\n.content-list__item_title[_ngcontent-%COMP%] {\n  color: var(--medianoche);\n  font-style: normal;\n  font-weight: 500;\n  font-size: 17px;\n  line-height: 22px;\n  display: inline;\n  position: relative;\n  top: -10px;\n}\n.content-list__item_description[_ngcontent-%COMP%] {\n  color: var(--gray-70);\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 17px;\n  text-overflow: unset;\n  white-space: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvdGhpcy1nb3Qtc2VyaW91cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNENBQUE7RUFDQSx5QkFBQTtBQUFKO0FBRUk7RUFDRSxrQkFBQTtBQUFOO0FBR0k7RUFDRSxlQUFBO0FBRE47QUFHTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBRFI7QUFLSTtFQUNFLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFITjtBQU1JO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQUpOIiwiZmlsZSI6InRoaXMtZ290LXNlcmlvdXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtbGlzdCB7XG4gICZfX2l0ZW0ge1xuICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kaXZpc29yLWxpbmUpO1xuICAgIHBhZGRpbmc6IDhweCAwcHggMTZweCAwcHg7XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMHB4O1xuICAgIH1cblxuICAgICZfaW1nIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZTtcblxuICAgICAgJjo6cGFydChpbWFnZSkge1xuICAgICAgICB3aWR0aDogMzJweDtcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgICZfdGl0bGUge1xuICAgICAgY29sb3I6IHZhcigtLW1lZGlhbm9jaGUpO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgdG9wOiAtMTBweDtcbiAgICB9XG5cbiAgICAmX2Rlc2NyaXB0aW9uIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1ncmF5LTcwKTtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IHVuc2V0O1xuICAgICAgd2hpdGUtc3BhY2U6IHVuc2V0O1xuICAgIH1cbiAgfVxufVxuIl19 */"] });
    return ThisGotSeriousPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_4__["FeatureBasePage"]));



/***/ }),

/***/ "oRJb":
/*!*******************************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/propeller/pages/know-us-better-engine/know-us-better-engine.config.ts ***!
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
        preapprovedHome: '/admin/credits/propeller/preapproved-home',
        dashboard: '/admin/dashboard',
    },
});


/***/ }),

/***/ "p35x":
/*!*****************************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/propeller/pages/know-us-better-engine/know-us-better-engine.page.ts ***!
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
/* harmony import */ var _know_us_better_engine_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./know-us-better-engine.config */ "oRJb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");










var _c0 = ["nequiApprovalFrontModulesList"];
var KnowUsBetterEnginePage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(KnowUsBetterEnginePage, _super);
    function KnowUsBetterEnginePage(injector, route) {
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
                this.navigatorProvider.navigateRoot(this.config.routes.preapprovedHome, {
                    relativeTo: this.route,
                    replaceUrl: true,
                });
                return [2 /*return*/];
            });
        });
    };
    KnowUsBetterEnginePage.ɵfac = function KnowUsBetterEnginePage_Factory(t) { return new (t || KnowUsBetterEnginePage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
    KnowUsBetterEnginePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: KnowUsBetterEnginePage, selectors: [["app-credits-know-us-better-engine"]], viewQuery: function KnowUsBetterEnginePage_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.approvalFrontOrganism = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 3, consts: [["organismId", "propeller", 1, "ion-page", 3, "messages", "completed", "nextButtonCliked", "goBackCliked"], ["nequiApprovalFrontModulesList", ""]], template: function KnowUsBetterEnginePage_Template(rf, ctx) { if (rf & 1) {
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

/***/ "uI+K":
/*!*******************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/propeller/pages/loan-info/loan-info.config.ts ***!
  \*******************************************************************************************************/
/*! exports provided: LoanInfoConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanInfoConfig", function() { return LoanInfoConfig; });
var LoanInfoConfig = Object.freeze({
    i18n: {
        loanInfo: {
            content: 'credits.loan-info',
            shareIconButton: 'credits.loan-info.share-icon-button',
            saveIconButton: 'credits.loan-info.save-icon-button',
            headerTitle: 'credits.loan-info.header.title',
            toatMessage: 'credits.loan-info.toast-message',
            monthlyFeeLabel: 'credits.loan-info.info-list.monthly-fee-label',
            monthlyFeeInfoMessage: 'credits.loan-info.info-list.monthly-fee-info-message',
            loanAmountLabel: 'credits.loan-info.info-list.loan-amount-label',
            loanAmountWithCommissionsLabel: 'credits.loan-info.info-list.loan-amount-with-commissions-label',
            loanAmountWithCommissionsInfoMessage: 'credits.loan-info.info-list.loan-amount-with-commissions-info-message',
            howMuchIsTheInterestLabel: 'credits.loan-info.info-list.how-much-is-the-interest-label',
            howMuchIsTheInterestValue: 'credits.loan-info.info-list.how-much-is-the-interest-value',
            howMuchIsTheInterestInfoMessage: 'credits.loan-info.info-list.how-much-is-the-interest-info-message',
            insuranceCostPerMonthLabel: 'credits.loan-info.info-list.insurance-cost-per-month-label',
            insuranceCostPerMonthInfoMessage: 'credits.loan-info.info-list.insurance-cost-per-month-info-message',
            whenIsEachInstallmentDebitedLabel: 'credits.loan-info.info-list.when-is-each-installment-debited-label',
            whenIsEachInstallmentDebitedValue: 'credits.loan-info.info-list.when-is-each-installment-debited-value',
            whenIsEachInstallmentDebitedInfoMessage: 'credits.loan-info.info-list.when-is-each-installment-debited-info-message',
            termLabel: 'credits.loan-info.info-list.term-label',
            termInfoMessage: 'credits.loan-info.info-list.term-info-message',
            helpMessage: 'credits.loan-info.help-message',
            continueButton: 'credits.loan-info.continue-button',
        },
        logs: 'credits.loan-info.logs',
    },
    routes: {
        loanDestination: '/admin/credits/propeller/loan-destination',
        help: '/help',
    },
    analytics: {
        events: {
            intentionOfSummary: {
                name: 'Propulsor_intencion_resumen_prestamo',
                params: {
                    cleverTap: ['Fecha_intencion', 'Valor_solicitado', 'Plazo_prestamo'],
                    dynatrace: ['product_id', 'valor_tasa', 'valor_solicitado', 'plazo_prestamo'],
                },
                dynatrace: 'preaprobado_resumen_propulsor',
            },
        },
    },
    helpContext: 'payment-credit-help',
});


/***/ }),

/***/ "uYL7":
/*!*****************************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/propeller/pages/terms-and-conditions/terms-and-conditions.config.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: TermsAndConditionsConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsAndConditionsConfig", function() { return TermsAndConditionsConfig; });
var TermsAndConditionsConfig = Object.freeze({
    i18n: {
        title: 'credits.terms-and-conditions.title',
        messageToastError: 'credits.terms-and-conditions.message-toast-error',
        acceptAgreementCheckbox: 'credits.terms-and-conditions.accept-agreement-checkbox',
        acceptButton: 'credits.terms-and-conditions.accept-button',
        logs: 'credits.terms-and-conditions.logs',
    },
    goTo: {
        agreementFGA: '/admin/credits/propeller/agreement-fga',
    },
    analytics: {
        intentionOfTermsAndConditions: {
            name: 'preaprobado_contrato_propulsor',
            params: {
                dynatrace: ['product_id'],
            },
        },
    },
});


/***/ }),

/***/ "uZfz":
/*!***************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/propeller/pages/agreement-fga/agreement-fga.config.ts ***!
  \***************************************************************************************************************/
/*! exports provided: AgreementFGAConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgreementFGAConfig", function() { return AgreementFGAConfig; });
var AgreementFGAConfig = Object.freeze({
    i18n: {
        title: 'credits.agreement-fga.title',
        acceptAgreementLabel: 'credits.agreement-fga.accept-agreement-label',
        acceptButton: 'credits.agreement-fga.accept-button',
        pinChallengeMessage: 'credits.agreement-fga.pin-challenge',
        cardModalMessage: 'credits.agreement-fga.card-modal',
        logs: {
            agreement: 'credits.agreement-fga.logs',
            pin: 'credits.disbursement.logs.pin',
            modal: 'credits.disbursement.logs.modal',
        },
        calendar: 'credits.calendar.propeller',
        calendarDescription: 'credits.calendar.propeller.description',
    },
    routes: {
        backpack: '/admin/dashboard',
    },
    analytics: {
        events: {
            intentionOfEnd: {
                name: 'Propulsor_intencion_final_tyc_prestamo',
                params: {
                    cleverTap: ['Fecha_intencion', 'Valor_solicitado', 'Plazo_prestamo', 'Uso_destino'],
                },
            },
            intentionOfFga: {
                name: 'preaprobado_contratofga_propulsor',
                params: {
                    dynatrace: ['product_id', 'valor_solicitado', 'plazo_prestamo', 'uso_destino'],
                },
            },
            successOfFga: {
                name: 'preaprobado_exito_propulsor',
                params: {
                    dynatrace: [
                        'product_id',
                        'fecha_desembolso',
                        'valor_desembolso',
                        'plazo_prestamo',
                        'uso_destino',
                        'ocupacion',
                        'recordatorio_calendario',
                    ],
                },
            },
            success: {
                name: ['Propulsor_exito_prestamo', 'fb_mobile_subscribe'],
            },
        },
    },
    replaceString: {
        suscribeDay: /#DAY/g,
        suscribeMonth: /#MONTH/g,
        suscribeYear: /#YEAR/g,
    },
    regexDate: /\D/,
    calendar: {
        param: '25007',
        startHour: 10,
        endHour: 18,
        firstReminderMinutes: 10,
        secondReminderMinutes: 1440,
    },
});


/***/ }),

/***/ "vtSZ":
/*!*******************************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/propeller/pages/change-live-insurance/change-live-insurance.config.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: ChangeLiveInsuranceConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeLiveInsuranceConfig", function() { return ChangeLiveInsuranceConfig; });
var ChangeLiveInsuranceConfig = Object.freeze({
    i18n: {
        headerTitle: 'credits.change-live-insurance.title',
        items: 'credits.change-live-insurance.items',
        backButton: 'credits.change-live-insurance.back',
    },
    cssClass: 'link-purple',
    link: 'https://ayuda.nequi.com.co/hc/es/articles/360043476752-Condiciones-para-endosar-el-seguro-de-vida',
    routes: {
        backpack: '/admin/dashboard',
    },
});


/***/ }),

/***/ "xAf0":
/*!*****************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/propeller/pages/loan-info/loan-info.page.ts ***!
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
/* harmony import */ var _nequi_apps_base_mobile_config_features_commons_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/apps/base/mobile/config/features/commons/services */ "hVBB");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/features/credits/core */ "42wy");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_date__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nequi/utils/date */ "tGfC");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _nequi_utils_string__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @nequi/utils/string */ "p6rB");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _services_credit_info_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../services/credit-info.model */ "9FmH");
/* harmony import */ var _services_credit_logger_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../services/credit-logger.service */ "2ibl");
/* harmony import */ var _loan_info_config__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./loan-info.config */ "uI+K");
/* harmony import */ var _loan_info_view_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./loan-info.view-model */ "0rmU");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../../../../ui/src/lib/directives/animate-title-on-scroll/animate-title-on-scroll.directive */ "qbWi");
/* harmony import */ var _ui_src_lib_directives_nequi_currency_style_nequi_currency_style_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../../../../ui/src/lib/directives/nequi-currency-style/nequi-currency-style.directive */ "kVXI");
/* harmony import */ var _ui_src_lib_directives_message_manager_message_manager_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../../../../ui/src/lib/directives/message-manager/message-manager.directive */ "68HU");

































var _c0 = function (a1) { return { cssClass: "info-item__message", helpMessage: a1 }; };
var _c1 = function (a0) { return { feeDay: a0 }; };
var LoanInfoPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LoanInfoPage, _super);
    function LoanInfoPage(injector, translateProvider, toastService, creditInfoModel, route, percentPipe, screenshotSharingService, creditLoggerService, analyticsInteractor, currencyPipe, translatePipe, dynatraceService) {
        var _this = _super.call(this, injector) || this;
        _this.translateProvider = translateProvider;
        _this.toastService = toastService;
        _this.creditInfoModel = creditInfoModel;
        _this.route = route;
        _this.percentPipe = percentPipe;
        _this.screenshotSharingService = screenshotSharingService;
        _this.creditLoggerService = creditLoggerService;
        _this.analyticsInteractor = analyticsInteractor;
        _this.currencyPipe = currencyPipe;
        _this.translatePipe = translatePipe;
        _this.dynatraceService = dynatraceService;
        _this.config = _loan_info_config__WEBPACK_IMPORTED_MODULE_16__["LoanInfoConfig"];
        _this.viewModel = new _loan_info_view_model__WEBPACK_IMPORTED_MODULE_17__["LoanInfoViewModel"]();
        return _this;
    }
    LoanInfoPage.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var p100, _a, monthlyInsuranceAmount, monthlyInterestRate, normalAnualEfectiveRate;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        p100 = 100;
                        _a = this.creditInfoModel.loanPortfolioInfo, monthlyInsuranceAmount = _a.monthlyInsuranceAmount, monthlyInterestRate = _a.monthlyInterestRate, normalAnualEfectiveRate = _a.normalAnualEfectiveRate;
                        this.viewModel.commissionPercentage =
                            this.creditInfoModel.creditFeatureInfo.commissionPercentage / p100;
                        this.viewModel.loanAmount = this.creditInfoModel.creditFeatureInfo.loanAmount;
                        this.viewModel.monthlyFee = this.creditInfoModel.creditFeatureInfo.monthlyFee;
                        this.viewModel.monthlyInsuranceAmount = monthlyInsuranceAmount;
                        this.viewModel.monthlyInterestRate = monthlyInterestRate / p100;
                        this.viewModel.normalAnualEfectiveRate = normalAnualEfectiveRate / p100;
                        this.viewModel.term = this.creditInfoModel.creditFeatureInfo.term;
                        this.viewModel.feeDay = new Date().getDate();
                        return [4 /*yield*/, this.initI18n()];
                    case 1:
                        _b.sent();
                        this.saveLog();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoanInfoPage.prototype.shareScreenshoot = function () {
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
        this.setAnalyticsIntentionOfSummary();
        this.navigatorProvider.navigateForward(this.config.routes.loanDestination);
    };
    LoanInfoPage.prototype.goToHelp = function () {
        this.navigatorProvider.navigateForward(this.config.routes.help, {
            queryParams: {
                context: this.config.helpContext,
            },
        });
    };
    LoanInfoPage.prototype.initI18n = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var howMuchIsTheInterestValue;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                howMuchIsTheInterestValue = this.translateProvider.get(this.config.i18n.loanInfo.howMuchIsTheInterestValue);
                this.viewModel.interestText = Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_12__["createFormat"])(howMuchIsTheInterestValue, [
                    this.percentPipe.transform(this.viewModel.monthlyInterestRate, '.0-2'),
                    this.percentPipe.transform(this.viewModel.normalAnualEfectiveRate, '.0-2'),
                ]);
                this.showSaveToast();
                return [2 /*return*/];
            });
        });
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
    LoanInfoPage.prototype.setAnalyticsIntentionOfSummary = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.analyticsInteractor.trackEvent({
                    type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["AnalyticsType"].FACEBOOK,
                    params: {
                        eventName: this.config.analytics.events.intentionOfSummary.name,
                    },
                });
                this.analyticsInteractor.trackEvent({
                    type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["AnalyticsType"].FIREBASE,
                    params: { eventName: this.config.analytics.events.intentionOfSummary.name },
                });
                this.analyticsInteractor.trackEvent({
                    type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["AnalyticsType"].CLEVERTAP,
                    params: {
                        eventName: this.config.analytics.events.intentionOfSummary.name,
                        eventProps: Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_11__["stringsArrayToObjectWithValues"])(this.config.analytics.events.intentionOfSummary.params.cleverTap, [Object(_nequi_utils_date__WEBPACK_IMPORTED_MODULE_10__["getFormattedDateTimes"])(), this.viewModel.loanAmount, this.viewModel.term.value]),
                    },
                });
                this.dynatraceService.setAnalyticsOfEvent({
                    eventName: this.config.analytics.events.intentionOfSummary.dynatrace,
                    eventProps: Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_11__["stringsArrayToObjectWithValues"])(this.config.analytics.events.intentionOfSummary.params.dynatrace, [
                        _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_8__["CreditType"].PROPELLER,
                        this.viewModel.normalAnualEfectiveRate,
                        this.viewModel.loanAmount,
                        this.viewModel.term.value,
                    ]),
                    leave: true,
                });
                return [2 /*return*/];
            });
        });
    };
    LoanInfoPage.prototype.saveLog = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.creditLoggerService.save({
                    flowType: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["FlowType"].PROPELLER,
                    i18nKey: this.config.i18n.logs,
                    params: [
                        this.currencyPipe.transform(this.viewModel.loanAmount),
                        this.currencyPipe.transform(this.viewModel.loanAmount +
                            this.viewModel.loanAmount * this.viewModel.commissionPercentage),
                        this.percentPipe.transform(this.viewModel.normalAnualEfectiveRate, '.0-2'),
                        this.percentPipe.transform(this.viewModel.monthlyInterestRate, '.0-2'),
                        this.currencyPipe.transform(this.viewModel.monthlyInsuranceAmount),
                        this.currencyPipe.transform(this.viewModel.monthlyFee),
                        this.translatePipe.transform(this.config.i18n.loanInfo.whenIsEachInstallmentDebitedValue, {
                            feeDay: this.viewModel.feeDay,
                        }),
                        this.viewModel.term.name,
                    ],
                });
                return [2 /*return*/];
            });
        });
    };
    LoanInfoPage.ɵfac = function LoanInfoPage_Factory(t) { return new (t || LoanInfoPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_7__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_9__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_credit_info_model__WEBPACK_IMPORTED_MODULE_14__["CreditInfoModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["PercentPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_apps_base_mobile_config_features_commons_services__WEBPACK_IMPORTED_MODULE_4__["ScreenshotSharingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_credit_logger_service__WEBPACK_IMPORTED_MODULE_15__["CreditLoggerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["AnalyticsInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_6__["DynatraceService"])); };
    LoanInfoPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoanInfoPage, selectors: [["app-loan-info-credits"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 87, vars: 85, consts: [[1, "nequi-header", "nequi-header--white"], ["slot", "start"], ["id", "loan-info_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], [1, "nequi-header__title", "ion-text-start"], ["slot", "end"], ["id", "loan-info_share_button", 3, "click"], ["slot", "icon-only", 3, "src"], ["id", "loan-info_save_button", 3, "click"], ["id", "loan-info_go-help_button", 3, "click"], ["slot", "icon-only", "name", "help-outline"], ["fullscreen", "true", "appAnimateTitleOnScroll", "", "scrollEvents", "true", 1, "ion-content--white", "ion-padding-horizontal"], [1, "nequi-title"], ["lines", "none", 1, "info-item", "info-item__margin-left-20"], [1, "info-item__content"], ["id", "loan-info_monthly-fee_label", 1, "info-item__label"], ["id", "loan-info_monthly-fee_text", 1, "info-item__monthly-fee", 3, "nequiCurrencyStyle", "showDecimals"], ["id", "loan-info_monthly-fee_text", 1, "info-item__monthly-fee_under-text"], [1, "info-item__margin-left-20"], ["lines", "none", 1, "info-item"], ["id", "loan-info_loan-amount_label", 1, "info-item__label"], ["id", "loan-info_loan-amount_text", 1, "info-item__value", 3, "nequiCurrencyStyle", "showDecimals"], ["lines", "none", 1, "info-item", 3, "nequiMessageManager"], ["id", "loan-info_loan-amount-with-commission_label", 1, "info-item__label"], ["id", "loan-info_loan-amount-with-commission_text", 1, "info-item__value", 3, "nequiCurrencyStyle", "showDecimals"], ["id", "loan-info_how-much-is-the-interest_label", 1, "info-item__label"], ["id", "loan-info_how-much-is-the-interest_text", 1, "info-item__value"], ["id", "loan-info_monthly-insurance-amount_label", 1, "info-item__label"], ["id", "loan-info_monthly-insurance-amount_text", 1, "info-item__value", 3, "nequiCurrencyStyle", "showDecimals"], ["id", "loan-info_when-is-each-installment-debited_label", 1, "info-item__label"], ["id", "loan-info_when-is-each-installment-debited_text", 1, "info-item__value"], ["id", "loan-info_term_label", 1, "info-item__label"], ["id", "loan-info_term_value", 1, "info-item__value"], ["lines", "none", 1, "margin-bottom-8", "ion-no-padding"], [1, "info-item__footer-info"], [1, "nequi-footer", "ion-no-border"], [1, "ion-text-center"], ["id", "loan-info_continue_button", "expand", "block", "color", "guayaba", 1, "nequi-footer__button", 3, "click"]], template: function LoanInfoPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoanInfoPage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-title", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-buttons", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoanInfoPage_Template_ion_button_click_9_listener() { return ctx.shareScreenshoot(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "ion-icon", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ion-button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoanInfoPage_Template_ion_button_click_12_listener() { return ctx.saveScreenshot(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "ion-icon", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ion-buttons", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "ion-button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoanInfoPage_Template_ion_button_click_16_listener() { return ctx.goToHelp(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "ion-icon", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "ion-content", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "ion-item", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "ion-label", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](26, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "ion-text", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "ion-text", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](30, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "ion-list", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "ion-item", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "ion-label", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](36, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "ion-text", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "ion-item", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](39, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "ion-label", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](43, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "ion-text", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "ion-item", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](46, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "ion-label", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](50, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "ion-text", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "ion-item", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](54, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "ion-label", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](58, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "ion-text", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "ion-item", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](61, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "ion-label", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](65, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "ion-text", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](68, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "ion-item", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](70, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "ion-label", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](74, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "ion-text", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](77, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "ion-item", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "ion-text", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](81, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "ion-footer", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "ion-toolbar", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "ion-button", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoanInfoPage_Template_ion_button_click_84_listener() { return ctx.goLoanDestination(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](86, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 30, ctx.config.i18n.loanInfo.headerTitle), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 32, ctx.config.i18n.loanInfo.shareIconButton));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 34, ctx.config.i18n.loanInfo.saveIconButton));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](21, 36, ctx.config.i18n.loanInfo.headerTitle), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](26, 38, ctx.config.i18n.loanInfo.monthlyFeeLabel), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nequiCurrencyStyle", ctx.viewModel.monthlyFee)("showDecimals", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](30, 40, ctx.config.i18n.loanInfo.monthlyFeeInfoMessage), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](36, 42, ctx.config.i18n.loanInfo.loanAmountLabel), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nequiCurrencyStyle", ctx.viewModel.loanAmount)("showDecimals", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nequiMessageManager", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](73, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](39, 44, ctx.config.i18n.loanInfo.loanAmountWithCommissionsInfoMessage)));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](43, 46, ctx.config.i18n.loanInfo.loanAmountWithCommissionsLabel), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nequiCurrencyStyle", ctx.viewModel.loanAmount + ctx.viewModel.loanAmount * ctx.viewModel.commissionPercentage)("showDecimals", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nequiMessageManager", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](75, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](46, 48, ctx.config.i18n.loanInfo.howMuchIsTheInterestInfoMessage)));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](50, 50, ctx.config.i18n.loanInfo.howMuchIsTheInterestLabel), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.viewModel.interestText, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nequiMessageManager", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](77, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](54, 52, ctx.config.i18n.loanInfo.insuranceCostPerMonthInfoMessage)));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](58, 54, ctx.config.i18n.loanInfo.insuranceCostPerMonthLabel), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nequiCurrencyStyle", ctx.viewModel.monthlyInsuranceAmount)("showDecimals", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nequiMessageManager", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](79, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](61, 56, ctx.config.i18n.loanInfo.whenIsEachInstallmentDebitedInfoMessage)));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](65, 58, ctx.config.i18n.loanInfo.whenIsEachInstallmentDebitedLabel), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](68, 60, ctx.config.i18n.loanInfo.whenIsEachInstallmentDebitedValue, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](81, _c1, ctx.viewModel.feeDay)), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nequiMessageManager", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](83, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](70, 63, ctx.config.i18n.loanInfo.termInfoMessage)));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](74, 65, ctx.config.i18n.loanInfo.termLabel), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](77, 67, ctx.viewModel.term == null ? null : ctx.viewModel.term.name), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](81, 69, ctx.config.i18n.loanInfo.helpMessage), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](86, 71, ctx.config.i18n.loanInfo.continueButton), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_18__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_18__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_18__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_18__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_18__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_18__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_18__["IonContent"], _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_19__["AnimateTitleOnScrollDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_18__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_18__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_18__["IonText"], _ui_src_lib_directives_nequi_currency_style_nequi_currency_style_directive__WEBPACK_IMPORTED_MODULE_20__["NequiCurrencyStyleDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_18__["IonList"], _ui_src_lib_directives_message_manager_message_manager_directive__WEBPACK_IMPORTED_MODULE_21__["MessageManagerDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_18__["IonFooter"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"]], styles: [".info-item[_ngcontent-%COMP%]::part(native) {\n  --padding-top: 10px;\n  --padding-bottom: 0px;\n  --padding-start: 0px;\n}\n.info-item__content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: flex-start;\n  gap: 5px;\n}\n.info-item__label[_ngcontent-%COMP%], .info-item__monthly-fee_under-text[_ngcontent-%COMP%] {\n  color: var(--gray-60);\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 17px;\n}\n.info-item__monthly-fee[_ngcontent-%COMP%] {\n  color: var(--medianoche);\n  font-style: normal;\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 29px;\n}\n.info-item__value[_ngcontent-%COMP%] {\n  color: var(--medianoche);\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 19px;\n}\n.info-item__message[_ngcontent-%COMP%] {\n  margin-top: -10px;\n}\n.info-item__footer-info[_ngcontent-%COMP%] {\n  color: var(--gray-alert-message);\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 14px;\n  margin: 10px 15px 10px 0px;\n}\n.info-item__margin-left-20[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n#loan-info_save_button[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvbG9hbi1pbmZvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtBQUFKO0FBR0U7RUFDRSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLFFBQUE7QUFESjtBQUlFO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBRko7QUFLRTtFQUNFLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUhKO0FBVUU7RUFDRSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFSSjtBQVdFO0VBQ0UsaUJBQUE7QUFUSjtBQVlFO0VBQ0UsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7QUFWSjtBQWFFO0VBQ0UsaUJBQUE7QUFYSjtBQWVBO0VBQ0UsYUFBQTtBQVpGIiwiZmlsZSI6ImxvYW4taW5mby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5mby1pdGVtIHtcbiAgJjo6cGFydChuYXRpdmUpIHtcbiAgICAtLXBhZGRpbmctdG9wOiAxMHB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgfVxuXG4gICZfX2NvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGdhcDogNXB4O1xuICB9XG5cbiAgJl9fbGFiZWwge1xuICAgIGNvbG9yOiB2YXIoLS1ncmF5LTYwKTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIH1cblxuICAmX19tb250aGx5LWZlZSB7XG4gICAgY29sb3I6IHZhcigtLW1lZGlhbm9jaGUpO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMjlweDtcblxuICAgICZfdW5kZXItdGV4dCB7XG4gICAgICBAZXh0ZW5kIC5pbmZvLWl0ZW1fX2xhYmVsO1xuICAgIH1cbiAgfVxuXG4gICZfX3ZhbHVlIHtcbiAgICBjb2xvcjogdmFyKC0tbWVkaWFub2NoZSk7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICB9XG5cbiAgJl9fbWVzc2FnZSB7XG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIH1cblxuICAmX19mb290ZXItaW5mbyB7XG4gICAgY29sb3I6IHZhcigtLWdyYXktYWxlcnQtbWVzc2FnZSk7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgIG1hcmdpbjogMTBweCAxNXB4IDEwcHggMHB4O1xuICB9XG5cbiAgJl9fbWFyZ2luLWxlZnQtMjAge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB9XG59XG5cbiNsb2FuLWluZm9fc2F2ZV9idXR0b24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuIl19 */"] });
    return LoanInfoPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_6__["FeatureBasePage"]));



/***/ }),

/***/ "xIxk":
/*!***************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/propeller/propeller.module.ts ***!
  \***************************************************************************************/
/*! exports provided: PropellerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropellerModule", function() { return PropellerModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nequi_apps_base_mobile_config_features_commons_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/apps/base/mobile/config/features/commons/services */ "hVBB");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/money-management/presentation */ "JFCQ");
/* harmony import */ var _nequi_features_profile_my_info_presentation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/features/profile/my-info/presentation */ "A74X");
/* harmony import */ var _nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/features/profile/presentation */ "cLcF");
/* harmony import */ var _nequi_native_screenshot__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nequi/native/screenshot */ "dqaN");
/* harmony import */ var _nequi_native_social_sharing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nequi/native/social-sharing */ "nNyq");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/components.module */ "LwLH");
/* harmony import */ var _middlewares_propeller_middleware__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../middlewares/propeller.middleware */ "bw8x");
/* harmony import */ var _organisms_approval_front_approval_front_view_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../organisms/approval-front/approval-front.view-model */ "pwQe");
/* harmony import */ var _organisms_approval_front_services_approval_front_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../organisms/approval-front/services/approval-front.service */ "Pxf4");
/* harmony import */ var _organisms_approval_front_services_occupation_engine_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../organisms/approval-front/services/occupation-engine.service */ "hY4E");
/* harmony import */ var _organisms_approval_front_services_your_money_engine_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../organisms/approval-front/services/your-money-engine.service */ "/RGA");
/* harmony import */ var _organisms_credits_organism_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../organisms/credits-organism.module */ "DepU");
/* harmony import */ var _organisms_payment_payment_view_model__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../organisms/payment/payment.view-model */ "KTg/");
/* harmony import */ var _organisms_preapproval_preapproval_view_model__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../organisms/preapproval/preapproval.view-model */ "BJHQ");
/* harmony import */ var _organisms_preapproval_services_preapproved_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../organisms/preapproval/services/preapproved.service */ "AYRj");
/* harmony import */ var _services_adjust_installments_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../services/adjust-installments.service */ "cO3k");
/* harmony import */ var _services_credit_logger_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../services/credit-logger.service */ "2ibl");
/* harmony import */ var _services_customer_finacial_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../services/customer-finacial.service */ "uuzL");
/* harmony import */ var _config_propeller_config__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./config/propeller.config */ "1MwG");
/* harmony import */ var _pages_adjust_installments_adjust_installments_page__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/adjust-installments/adjust-installments.page */ "YmSa");
/* harmony import */ var _pages_agreement_fga_agreement_fga_page__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/agreement-fga/agreement-fga.page */ "L5KX");
/* harmony import */ var _pages_change_live_insurance_change_live_insurance_page__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/change-live-insurance/change-live-insurance.page */ "A6aE");
/* harmony import */ var _pages_ensure_loan_ensure_loan_page__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/ensure-loan/ensure-loan.page */ "IxJh");
/* harmony import */ var _pages_home_home_page__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/home/home.page */ "QK8n");
/* harmony import */ var _pages_know_us_better_engine_know_us_better_engine_page__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/know-us-better-engine/know-us-better-engine.page */ "p35x");
/* harmony import */ var _pages_know_us_better_know_us_better_page__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/know-us-better/know-us-better.page */ "C2/M");
/* harmony import */ var _pages_life_insurance_life_insurance_page__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pages/life-insurance/life-insurance.page */ "U2KV");
/* harmony import */ var _pages_loan_destination_loan_destination_page__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./pages/loan-destination/loan-destination.page */ "L2GC");
/* harmony import */ var _pages_loan_info_loan_info_page__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pages/loan-info/loan-info.page */ "xAf0");
/* harmony import */ var _pages_payment_detail_payment_detail_page__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pages/payment-detail/payment-detail.page */ "G1bk");
/* harmony import */ var _pages_payment_guarantees_payment_guarantees_page__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./pages/payment-guarantees/payment-guarantees.page */ "V8rb");
/* harmony import */ var _pages_payment_home_payment_home_page__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./pages/payment-home/payment-home.page */ "/SdG");
/* harmony import */ var _pages_preapproved_home_preapproved_home_page__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./pages/preapproved-home/preapproved-home.page */ "f44g");
/* harmony import */ var _pages_terms_and_conditions_terms_and_conditions_page__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./pages/terms-and-conditions/terms-and-conditions.page */ "Ep/S");
/* harmony import */ var _pages_this_got_serious_this_got_serious_page__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./pages/this-got-serious/this-got-serious.page */ "mXVN");
/* harmony import */ var _propeller_routing_module__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./propeller-routing.module */ "9LbZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/core */ "fXoL");













































var PropellerModule = /** @class */ (function () {
    function PropellerModule() {
    }
    PropellerModule.ɵfac = function PropellerModule_Factory(t) { return new (t || PropellerModule)(); };
    PropellerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_44__["ɵɵdefineNgModule"]({ type: PropellerModule });
    PropellerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_44__["ɵɵdefineInjector"]({ providers: [
            {
                provide: _nequi_features_commons__WEBPACK_IMPORTED_MODULE_4__["ModuleConfigProvider"],
                useValue: _config_propeller_config__WEBPACK_IMPORTED_MODULE_26__["PropellerConfig"],
            },
            _nequi_ui__WEBPACK_IMPORTED_MODULE_11__["ConfirmInfoBottomSheetService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["PercentPipe"],
            _services_credit_logger_service__WEBPACK_IMPORTED_MODULE_24__["CreditLoggerService"],
            _middlewares_propeller_middleware__WEBPACK_IMPORTED_MODULE_14__["PropellerMiddleware"],
            _organisms_payment_payment_view_model__WEBPACK_IMPORTED_MODULE_20__["PaymentViewModel"],
            _organisms_preapproval_preapproval_view_model__WEBPACK_IMPORTED_MODULE_21__["PreapprovalViewModel"],
            _organisms_approval_front_approval_front_view_model__WEBPACK_IMPORTED_MODULE_15__["ApprovalFrontViewModel"],
            _organisms_preapproval_services_preapproved_service__WEBPACK_IMPORTED_MODULE_22__["PreapprovedService"],
            _services_customer_finacial_service__WEBPACK_IMPORTED_MODULE_25__["CustomerFinancialService"],
            _services_adjust_installments_service__WEBPACK_IMPORTED_MODULE_23__["AdjustInstallmentsService"],
            _organisms_approval_front_services_occupation_engine_service__WEBPACK_IMPORTED_MODULE_17__["OccupationEngineService"],
            _organisms_approval_front_services_your_money_engine_service__WEBPACK_IMPORTED_MODULE_18__["YourMoneyEngineService"],
            _organisms_approval_front_services_approval_front_service__WEBPACK_IMPORTED_MODULE_16__["ApprovalFrontService"],
            _nequi_native_screenshot__WEBPACK_IMPORTED_MODULE_9__["ScreenshotPlugin"],
            _nequi_apps_base_mobile_config_features_commons_services__WEBPACK_IMPORTED_MODULE_3__["ScreenshotSharingService"],
            _nequi_native_social_sharing__WEBPACK_IMPORTED_MODULE_10__["SocialSharingPlugin"],
            _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__["DynatraceService"],
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _propeller_routing_module__WEBPACK_IMPORTED_MODULE_43__["PropellerRoutingModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_13__["ComponentsModule"],
                _nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_6__["FeaturesMoneyManagementModule"],
                _nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_8__["FeaturesProfileModule"],
                _organisms_credits_organism_module__WEBPACK_IMPORTED_MODULE_19__["CreditsOrganismModule"],
                _nequi_features_profile_my_info_presentation__WEBPACK_IMPORTED_MODULE_7__["MyInfoModule"],
                _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__["FeaturesCommonsModule"],
            ]] });
    return PropellerModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_44__["ɵɵsetNgModuleScope"](PropellerModule, { declarations: [_pages_home_home_page__WEBPACK_IMPORTED_MODULE_31__["HomePage"],
        _pages_payment_guarantees_payment_guarantees_page__WEBPACK_IMPORTED_MODULE_38__["PaymentGuaranteesPage"],
        _pages_life_insurance_life_insurance_page__WEBPACK_IMPORTED_MODULE_34__["LifeInsurancePage"],
        _pages_ensure_loan_ensure_loan_page__WEBPACK_IMPORTED_MODULE_30__["EnsureLoanPage"],
        _pages_loan_info_loan_info_page__WEBPACK_IMPORTED_MODULE_36__["LoanInfoPage"],
        _pages_know_us_better_know_us_better_page__WEBPACK_IMPORTED_MODULE_33__["KnowUsBetterPage"],
        _pages_loan_destination_loan_destination_page__WEBPACK_IMPORTED_MODULE_35__["LoanDestinationPage"],
        _pages_this_got_serious_this_got_serious_page__WEBPACK_IMPORTED_MODULE_42__["ThisGotSeriousPage"],
        _pages_terms_and_conditions_terms_and_conditions_page__WEBPACK_IMPORTED_MODULE_41__["TermsAndConditionsPage"],
        _pages_agreement_fga_agreement_fga_page__WEBPACK_IMPORTED_MODULE_28__["AgreementFGAPage"],
        _pages_adjust_installments_adjust_installments_page__WEBPACK_IMPORTED_MODULE_27__["AdjustIntallmentsPage"],
        _pages_payment_detail_payment_detail_page__WEBPACK_IMPORTED_MODULE_37__["PaymentDetailPage"],
        _pages_know_us_better_engine_know_us_better_engine_page__WEBPACK_IMPORTED_MODULE_32__["KnowUsBetterEnginePage"],
        _pages_change_live_insurance_change_live_insurance_page__WEBPACK_IMPORTED_MODULE_29__["ChangeLiveInsurancePage"],
        _pages_payment_home_payment_home_page__WEBPACK_IMPORTED_MODULE_39__["PaymentHomePage"],
        _pages_preapproved_home_preapproved_home_page__WEBPACK_IMPORTED_MODULE_40__["PreapprovedHomePage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
        _propeller_routing_module__WEBPACK_IMPORTED_MODULE_43__["PropellerRoutingModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_13__["ComponentsModule"],
        _nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_6__["FeaturesMoneyManagementModule"],
        _nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_8__["FeaturesProfileModule"],
        _organisms_credits_organism_module__WEBPACK_IMPORTED_MODULE_19__["CreditsOrganismModule"],
        _nequi_features_profile_my_info_presentation__WEBPACK_IMPORTED_MODULE_7__["MyInfoModule"],
        _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__["FeaturesCommonsModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=products-propeller-propeller-module.js.map