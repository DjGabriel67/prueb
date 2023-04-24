(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-parachute-parachute-module"],{

/***/ "1HOm":
/*!***********************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/parachute/parachute-routing.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: ParachuteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParachuteRoutingModule", function() { return ParachuteRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _middlewares_base_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../middlewares/base.config */ "lvuB");
/* harmony import */ var _middlewares_base_middleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../middlewares/base.middleware */ "Jqih");
/* harmony import */ var _middlewares_parachute_middleware__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../middlewares/parachute.middleware */ "zepf");
/* harmony import */ var _config_parachute_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config/parachute.config */ "shLz");
/* harmony import */ var _pages_adjust_installments_adjust_installments_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/adjust-installments/adjust-installments.page */ "K+S4");
/* harmony import */ var _pages_change_live_insurance_change_live_insurance_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/change-live-insurance/change-live-insurance.page */ "x9dT");
/* harmony import */ var _pages_payment_detail_payment_detail_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/payment-detail/payment-detail.page */ "Y8pJ");
/* harmony import */ var _pages_payment_home_payment_home_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/payment-home/payment-home.page */ "6Mh6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");













var routes = [
    {
        path: '',
        canActivate: [_middlewares_parachute_middleware__WEBPACK_IMPORTED_MODULE_5__["ParachuteMiddleware"]],
        data: {
            moduleName: _middlewares_base_middleware__WEBPACK_IMPORTED_MODULE_4__["MiddlewareModuleName"].PARACHUTE,
            bottomSheetKey: _middlewares_base_config__WEBPACK_IMPORTED_MODULE_3__["BaseConfig"].parachute.bottomSheet,
            redirectToPayment: _middlewares_base_config__WEBPACK_IMPORTED_MODULE_3__["BaseConfig"].routes.parachutePayment,
            redirectToPreapproved: _middlewares_base_config__WEBPACK_IMPORTED_MODULE_3__["BaseConfig"].routes.parachutePreapproved,
            flowType: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["FlowType"].PARACHUTE,
        },
    },
    {
        path: 'payment-home',
        component: _pages_payment_home_payment_home_page__WEBPACK_IMPORTED_MODULE_10__["PaymentHomePage"],
    },
    {
        path: 'adjust-installments',
        component: _pages_adjust_installments_adjust_installments_page__WEBPACK_IMPORTED_MODULE_7__["AdjustInstallmentsPage"],
    },
    {
        path: 'payment-detail',
        component: _pages_payment_detail_payment_detail_page__WEBPACK_IMPORTED_MODULE_9__["PaymentDetailPage"],
    },
    {
        path: 'change-live-insurance',
        component: _pages_change_live_insurance_change_live_insurance_page__WEBPACK_IMPORTED_MODULE_8__["ChangeLiveInsurancePage"],
    },
];
var ParachuteRoutingModule = /** @class */ (function () {
    function ParachuteRoutingModule() {
    }
    ParachuteRoutingModule.ɵfac = function ParachuteRoutingModule_Factory(t) { return new (t || ParachuteRoutingModule)(); };
    ParachuteRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: ParachuteRoutingModule });
    ParachuteRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [[
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(_nequi_features_commons__WEBPACK_IMPORTED_MODULE_1__["I18nModuleResolver"].setup(routes, [
                    _config_parachute_config__WEBPACK_IMPORTED_MODULE_6__["ParachuteConfig"].i18n.moduleKey,
                    _config_parachute_config__WEBPACK_IMPORTED_MODULE_6__["ParachuteConfig"].i18n.contractModuleKey,
                ])),
            ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return ParachuteRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](ParachuteRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "6Mh6":
/*!***********************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/parachute/pages/payment-home/payment-home.page.ts ***!
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
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/credits/core */ "42wy");
/* harmony import */ var _nequi_features_money_management_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/features/money-management/core */ "Qxr/");
/* harmony import */ var _nequi_utils_date__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/utils/date */ "tGfC");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _nequi_utils_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nequi/utils/string */ "p6rB");
/* harmony import */ var _organisms_payment_payment_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../organisms/payment/payment.config */ "pnSE");
/* harmony import */ var _organisms_payment_payment_type__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../organisms/payment/payment.type */ "iwuA");
/* harmony import */ var _organisms_payment_payment_view_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../organisms/payment/payment.view-model */ "KTg/");
/* harmony import */ var _services_credit_info_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../services/credit-info.model */ "9FmH");
/* harmony import */ var _services_payment_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../services/payment.service */ "l8yf");
/* harmony import */ var _payment_home_config__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./payment-home.config */ "tTaq");
/* harmony import */ var _organisms_payment_payment_organism__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../organisms/payment/payment.organism */ "yDoo");


























function PaymentHomePage_app_payment_0_Template(rf, ctx) { if (rf & 1) {
    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-payment", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("showDetailPressed", function PaymentHomePage_app_payment_0_Template_app_payment_showDetailPressed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.onShowDetailPressed(); })("goToPaymentPressed", function PaymentHomePage_app_payment_0_Template_app_payment_goToPaymentPressed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.onPaymentPressed(); })("goToBackPressed", function PaymentHomePage_app_payment_0_Template_app_payment_goToBackPressed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showMovements", true)("messages", ctx_r0.config.i18n)("feePaymentMessage", ctx_r0.viewModel.feePaymentMessage);
} }
var PaymentHomePage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PaymentHomePage, _super);
    function PaymentHomePage(viewModel, currencyPipe, datePipe, creditInfoModel, balanceInteractor, paymentService, creditEventsHandler, analyticsInteractor, injector) {
        var _this = _super.call(this, injector) || this;
        _this.viewModel = viewModel;
        _this.currencyPipe = currencyPipe;
        _this.datePipe = datePipe;
        _this.creditInfoModel = creditInfoModel;
        _this.balanceInteractor = balanceInteractor;
        _this.paymentService = paymentService;
        _this.creditEventsHandler = creditEventsHandler;
        _this.analyticsInteractor = analyticsInteractor;
        _this.paymentConfig = _organisms_payment_payment_config__WEBPACK_IMPORTED_MODULE_11__["PaymentConfig"];
        _this.config = _payment_home_config__WEBPACK_IMPORTED_MODULE_16__["ParachutePaymentConfig"];
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
                        this.updateBackpackIcon();
                        this.setAnalyticsIntentionToPay();
                        return [2 /*return*/];
                }
            });
        });
    };
    PaymentHomePage.prototype.onShowDetailPressed = function () {
        this.navigatorProvider.navigateForward(this.config.routes.paymentDetail, {
            state: this.creditInfoModel.customerCreditInfo.credit,
        });
    };
    PaymentHomePage.prototype.onPaymentPressed = function () {
        var _this = this;
        if (this.availableMoney < this.viewModel.paymentControl.value) {
            this.paymentService.toastService.showError(this.errorMessage.noHaveAvailable);
            this.setAnalyticsIntentionToPay(new _nequi_commons_exceptions__WEBPACK_IMPORTED_MODULE_3__["CoreException"](this.errorMessage.noHaveAvailable, ''));
            return;
        }
        if (this.viewModel.selectedPayType === _organisms_payment_payment_type__WEBPACK_IMPORTED_MODULE_12__["PaymentType"].PAYMENT &&
            this.viewModel.paymentTime === _organisms_payment_payment_type__WEBPACK_IMPORTED_MODULE_12__["PaymentType"].PAYMENT) {
            this.paymentService.showModalPayment(this.paymentConfig.i18n.modal.payment, function () {
                return _this.goToAdjustInstallment();
            });
            return;
        }
        this.viewModel.paymentAmount =
            this.viewModel.paymentAmount || Number(this.viewModel.paymentControl.value);
        this.onConfirmation();
    };
    PaymentHomePage.prototype.onTransactionSuccess = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var customKey, i18nKey, i18n, i18nFormatted;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                customKey = this.viewModel.paymentTime + "-" + this.viewModel.selectedPayType;
                if (Object.hasOwnProperty.bind(this.paymentConfig.successfulTransactionValidation, customKey)) {
                    i18nKey = this.paymentConfig.successfulTransactionValidation[customKey];
                    i18n = this.translateProvider.get(i18nKey);
                    i18nFormatted = Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_9__["toCamelCaseProperties"])(i18n);
                    this.showMessageSuccess(i18nFormatted, customKey);
                }
                return [2 /*return*/];
            });
        });
    };
    PaymentHomePage.prototype.onTransactionFailed = function (error) {
        this.setAnalyticsIntentionToPay(error);
        if (error instanceof _nequi_commons_exceptions__WEBPACK_IMPORTED_MODULE_3__["ExceedCeilingException"]) {
            throw error;
        }
        if (error instanceof _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_6__["AsyncLoanPaymentException"]) {
            this.asyncLoanPaymentFailed();
        }
        if (_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["NOT_BALANCE_AVAILABLE_ERRORS"].includes(error.code)) {
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
                switch (_a.label) {
                    case 0:
                        this.errorMessage = this.translateProvider.get(this.paymentConfig.i18n.error);
                        return [4 /*yield*/, this.viewModel.getPageConfiguration(this.errorMessage, this.config.i18n.modal.overdueFee)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PaymentHomePage.prototype.goToAdjustInstallment = function () {
        this.creditInfoModel.creditFeatureInfo = {
            productId: this.customerProduct.credit.debenture,
            paymentAmount: this.viewModel.paymentControl.value,
            installment: this.customerProduct.credit.installment.totalPending,
        };
        this.navigatorProvider.navigateForward(this.paymentConfig.routes.parachute.adjunstInstallment, {
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
                        this.i18n.confirmation.subtitle = this.i18n.confirmation.parachute.subtitle;
                        this.i18n.confirmation.footerDescription = this.i18n.confirmation.parachute.footerDescription;
                        this.paymentService.showConfirmationInfo(this.i18n.confirmation, this.viewModel.buildItems(this.i18n.confirmation, this.viewModel.pocketControl.value, this.currencyPipe, this.datePipe), Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_10__["createFormat"])(this.i18n.confirmation.footerDescription, [
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
        var result = this.translateProvider.get(this.paymentConfig.i18n.content);
        this.i18n = Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_9__["toCamelCaseProperties"])(result);
    };
    PaymentHomePage.prototype.makePayment = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data, transaction;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                data = {
                    operatorType: _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_6__["OperationCreditType"].PAYMENT,
                    productId: _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_6__["CreditType"].PROPELLER,
                    debenture: this.customerProduct.credit.debenture,
                    paymentType: _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_6__["PaymentType"].LOAN,
                    rescheduleType: _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_6__["RescheduleType"].INSTALLMENTS_NUMBER,
                };
                transaction = new _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_6__["PaymentTransaction"]()
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
        if (this.viewModel.paymentTime === _organisms_payment_payment_type__WEBPACK_IMPORTED_MODULE_12__["PaymentType"].PAYMENT &&
            this.viewModel.selectedPayType === _organisms_payment_payment_type__WEBPACK_IMPORTED_MODULE_12__["PaymentType"].PAY_ALL) {
            this.paymentService.showFullScreenModal(this.i18n.cardModal.payTodayAllAsyncPayment, fullscreenModalConfig);
        }
        if (this.viewModel.paymentTime === _organisms_payment_payment_type__WEBPACK_IMPORTED_MODULE_12__["PaymentType"].PAY_TODAY_FEE &&
            this.viewModel.selectedPayType === _organisms_payment_payment_type__WEBPACK_IMPORTED_MODULE_12__["PaymentType"].PAYMENT) {
            this.paymentService.showFullScreenModal(this.i18n.cardModal.payTodayAmountAsyncPayment, fullscreenModalConfig);
        }
        if (this.viewModel.paymentTime === _organisms_payment_payment_type__WEBPACK_IMPORTED_MODULE_12__["PaymentType"].PAY_TODAY_FEE &&
            this.viewModel.selectedPayType === _organisms_payment_payment_type__WEBPACK_IMPORTED_MODULE_12__["PaymentType"].PAY_TODAY_FEE) {
            this.paymentService.showFullScreenModal(this.i18n.cardModal.payTodayFeeAsyncPayment, fullscreenModalConfig);
        }
        if (this.viewModel.paymentTime === _organisms_payment_payment_type__WEBPACK_IMPORTED_MODULE_12__["PaymentType"].PAY_TODAY_FEE &&
            this.viewModel.selectedPayType === _organisms_payment_payment_type__WEBPACK_IMPORTED_MODULE_12__["PaymentType"].PAY_ALL) {
            this.paymentService.showFullScreenModal(this.i18n.cardModal.payTodayAllAsyncPayment, fullscreenModalConfig);
        }
    };
    PaymentHomePage.prototype.showMessageSuccess = function (i18n, customKey) {
        var payOverdueFeeKey = _organisms_payment_payment_type__WEBPACK_IMPORTED_MODULE_12__["PaymentType"].OVERDUE_FEE + "-" + _organisms_payment_payment_type__WEBPACK_IMPORTED_MODULE_12__["PaymentType"].OVERDUE_FEE;
        var _a = this.viewModel.credit.installment, total = _a.total, totalPaid = _a.totalPaid;
        if (payOverdueFeeKey === customKey && this.viewModel.installmentPending === total - totalPaid) {
            this.paymentService.showCardModal(this.i18n.cardModalParachute.payOverdueLastFees);
            return;
        }
        if (payOverdueFeeKey === customKey && this.viewModel.installmentPending === 1) {
            this.i18n.cardModalParachute.payOverdueFee.content = Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_10__["createFormat"])(this.i18n.cardModalParachute.payOverdueFee.content, [this.datePipe.transform(this.viewModel.credit.installment.next.date)]);
            this.paymentService.showCardModal(this.i18n.cardModalParachute.payOverdueFee);
            return;
        }
        if (payOverdueFeeKey === customKey && this.viewModel.installmentPending > 1) {
            this.paymentService.showCardModal(this.i18n.cardModalParachute.payOverdueFees);
            return;
        }
        if (this.viewModel.selectedPayType === _organisms_payment_payment_type__WEBPACK_IMPORTED_MODULE_12__["PaymentType"].PAY_ALL) {
            this.paymentService.showCardModal(this.i18n.cardModalParachute.payOverdueAll);
            return;
        }
        this.paymentService.showCardModal(i18n);
    };
    PaymentHomePage.prototype.updateBackpackIcon = function () {
        this.creditEventsHandler.emitDisbursedEvent({
            creditType: _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_6__["CreditType"].PARACHUTE,
            hasCredits: true,
            isRescheduled: this.viewModel.credit.isRescheduled,
            isExpired: this.viewModel.credit.isExpired,
        });
    };
    PaymentHomePage.prototype.setAnalyticsIntentionToPay = function (error) {
        var eventName = this.config.analytics.intentionToPay.name.cleverTap;
        var isPayTodayFee = this.viewModel.paymentTime === _organisms_payment_payment_type__WEBPACK_IMPORTED_MODULE_12__["PaymentType"].PAY_TODAY_FEE;
        var nextInstallmentAt = this.viewModel.credit.installment.next.date;
        var params = this.config.analytics.intentionToPay.params.cleverTap;
        var paramsValue = [
            Object(_nequi_utils_date__WEBPACK_IMPORTED_MODULE_8__["getFormattedDateTimes"])(),
            isPayTodayFee,
            Object(_nequi_utils_date__WEBPACK_IMPORTED_MODULE_8__["getFormattedDateTimes"])(nextInstallmentAt),
            this.viewModel.credit.balance,
            this.viewModel.credit.installment.next.value,
            this.viewModel.credit.installment.total - this.viewModel.credit.installment.totalPaid,
        ];
        if (error) {
            eventName = this.config.analytics.intentionToPay.error;
            params = params.concat(this.config.analytics.intentionToPay.params.error);
            paramsValue = paramsValue.concat([error.code, error.message]);
        }
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["AnalyticsType"].CLEVERTAP,
            params: {
                eventName: eventName,
                eventProps: Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_9__["stringsArrayToObjectWithValues"])(params, paramsValue),
            },
        });
    };
    PaymentHomePage.ɵfac = function PaymentHomePage_Factory(t) { return new (t || PaymentHomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_organisms_payment_payment_view_model__WEBPACK_IMPORTED_MODULE_13__["PaymentViewModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_credit_info_model__WEBPACK_IMPORTED_MODULE_14__["CreditInfoModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_money_management_core__WEBPACK_IMPORTED_MODULE_7__["BalanceInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_payment_service__WEBPACK_IMPORTED_MODULE_15__["PaymentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_6__["CreditEventsHandler"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["AnalyticsInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"])); };
    PaymentHomePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PaymentHomePage, selectors: [["app-credits-propeller-payment"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "ion-page", "organismId", "payment", 3, "showMovements", "messages", "feePaymentMessage", "showDetailPressed", "goToPaymentPressed", "goToBackPressed", 4, "ngIf"], ["organismId", "payment", 1, "ion-page", 3, "showMovements", "messages", "feePaymentMessage", "showDetailPressed", "goToPaymentPressed", "goToBackPressed"]], template: function PaymentHomePage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, PaymentHomePage_app_payment_0_Template, 1, 3, "app-payment", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.customerProduct);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _organisms_payment_payment_organism__WEBPACK_IMPORTED_MODULE_17__["PaymentOrganism"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXltZW50LWhvbWUucGFnZS5zY3NzIn0= */"] });
    return PaymentHomePage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__["TransactionBasePage"]));



/***/ }),

/***/ "K+S4":
/*!*************************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/parachute/pages/adjust-installments/adjust-installments.page.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: AdjustInstallmentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdjustInstallmentsPage", function() { return AdjustInstallmentsPage; });
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
/* harmony import */ var _services_adjust_installments_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../services/adjust-installments.service */ "cO3k");
/* harmony import */ var _adjust_installments_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./adjust-installments.config */ "S2sR");
/* harmony import */ var _adjust_installments_view_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./adjust-installments.view-model */ "KSEX");
/* harmony import */ var _organisms_adjust_installments_adjust_installments_organism__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../organisms/adjust-installments/adjust-installments.organism */ "xtdo");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ui_src_lib_components_busy_indicator_busy_indicator_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../../../ui/src/lib/components/busy-indicator/busy-indicator.component */ "N6nj");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
























function AdjustInstallmentsPage_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "app-adjust-installment", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("accept", function AdjustInstallmentsPage_ng_container_0_Template_app_adjust_installment_accept_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.showConfirmationInfo($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 3, ctx_r0.config.i18n.title))("data", ctx_r0.adjustInstallmentsService.data)("flow", ctx_r0.flowType.PARACHUTE);
} }
function AdjustInstallmentsPage_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-header", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-toolbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-buttons", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdjustInstallmentsPage_ng_container_1_Template_ion_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "ion-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-content", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "app-busy-indicator", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onReload", function AdjustInstallmentsPage_ng_container_1_Template_app_busy_indicator_onReload_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.loadData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showReload", ctx_r1.viewModel.hasError)("reloadMessage", ctx_r1.viewModel.bussyIndicatorError);
} }
var AdjustInstallmentsPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AdjustInstallmentsPage, _super);
    function AdjustInstallmentsPage(injector, adjustInstallmentsService, loadingService, translateProvider, datePipe, currencyPipe, confirmInfoBottomSheetService, router) {
        var _this = _super.call(this, injector) || this;
        _this.adjustInstallmentsService = adjustInstallmentsService;
        _this.loadingService = loadingService;
        _this.translateProvider = translateProvider;
        _this.datePipe = datePipe;
        _this.currencyPipe = currencyPipe;
        _this.confirmInfoBottomSheetService = confirmInfoBottomSheetService;
        _this.router = router;
        _this.config = _adjust_installments_config__WEBPACK_IMPORTED_MODULE_12__["AdjustInstallmentsConfig"];
        _this.viewModel = new _adjust_installments_view_model__WEBPACK_IMPORTED_MODULE_13__["AdjustInstallmentsViewModel"]();
        _this.flowType = _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["FlowType"];
        return _this;
    }
    AdjustInstallmentsPage.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setPocket();
                        this.initI18n();
                        return [4 /*yield*/, this.loadData()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AdjustInstallmentsPage.prototype.loadData = function () {
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
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    AdjustInstallmentsPage.prototype.showConfirmationInfo = function (params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var buildItemParams, data;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.viewModel.rescheduleType = params.rescheduleType;
                        buildItemParams = {
                            messages: this.i18n.confirmation,
                            pocketInfo: this.pocket,
                            currencyPipe: this.currencyPipe,
                            datePipe: this.datePipe,
                            paymentAmount: this.adjustInstallmentsService.paymentAmount,
                            nextFeeDate: this.adjustInstallmentsService.data.nextFeeDate,
                        };
                        return [4 /*yield*/, this.confirmInfoBottomSheetService.show({
                                title: this.i18n.confirmation.title,
                                subtitle: this.i18n.confirmation.parachute.subtitle,
                                items: this.viewModel.buildItems(buildItemParams),
                                confirmLabel: this.i18n.confirmation.buttons.next,
                                cancelLabel: this.i18n.confirmation.buttons.cancel,
                                viewCancel: true,
                                footerDescription: Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_10__["createFormat"])(this.i18n.confirmation.parachute.footerDescription, [
                                    this.datePipe.transform(this.adjustInstallmentsService.data.lastFeeDate),
                                ]),
                            })];
                    case 1:
                        data = (_a.sent()).data;
                        if (data === true) {
                            this.adjustInstallmentsService.makePayment(this.i18n, this.viewModel.rescheduleType, this.pocket, _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__["CreditType"].PARACHUTE);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AdjustInstallmentsPage.prototype.initI18n = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var result;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                result = this.translateProvider.get(this.config.i18n.content);
                this.i18n = Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_9__["toCamelCaseProperties"])(result);
                return [2 /*return*/];
            });
        });
    };
    AdjustInstallmentsPage.prototype.setPocket = function () {
        var _a;
        this.pocket = (_a = this.router.getCurrentNavigation().extras.state) === null || _a === void 0 ? void 0 : _a.pocket;
    };
    AdjustInstallmentsPage.ɵfac = function AdjustInstallmentsPage_Factory(t) { return new (t || AdjustInstallmentsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_adjust_installments_service__WEBPACK_IMPORTED_MODULE_11__["AdjustInstallmentsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_8__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_6__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_8__["ConfirmInfoBottomSheetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
    AdjustInstallmentsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AdjustInstallmentsPage, selectors: [["app-parachute-adjust-installments"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "ion-page", 3, "title", "data", "flow", "accept"], [1, "nequi-header"], ["slot", "start"], ["id", "adjust-installments_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], [1, "ion-content--white"], [3, "showReload", "reloadMessage", "onReload"]], template: function AdjustInstallmentsPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AdjustInstallmentsPage_ng_container_0_Template, 3, 5, "ng-container", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AdjustInstallmentsPage_ng_container_1_Template, 8, 2, "ng-container", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.viewModel.hasError);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.viewModel.hasError);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _organisms_adjust_installments_adjust_installments_organism__WEBPACK_IMPORTED_MODULE_14__["AdjustInstallmentsOrganism"], _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonContent"], _ui_src_lib_components_busy_indicator_busy_indicator_component__WEBPACK_IMPORTED_MODULE_16__["BusyIndicatorComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGp1c3QtaW5zdGFsbG1lbnRzLnBhZ2Uuc2NzcyJ9 */"] });
    return AdjustInstallmentsPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__["FeatureBasePage"]));



/***/ }),

/***/ "KSEX":
/*!*******************************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/parachute/pages/adjust-installments/adjust-installments.view-model.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: AdjustInstallmentsViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdjustInstallmentsViewModel", function() { return AdjustInstallmentsViewModel; });
/* harmony import */ var _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nequi/features/credits/core */ "42wy");

var AdjustInstallmentsViewModel = /** @class */ (function () {
    function AdjustInstallmentsViewModel() {
        this.hasError = false;
    }
    AdjustInstallmentsViewModel.prototype.buildItems = function (params) {
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
    return AdjustInstallmentsViewModel;
}());



/***/ }),

/***/ "QnCy":
/*!*******************************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/parachute/pages/change-live-insurance/change-live-insurance.config.ts ***!
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

/***/ "S2sR":
/*!***************************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/parachute/pages/adjust-installments/adjust-installments.config.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: AdjustInstallmentsConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdjustInstallmentsConfig", function() { return AdjustInstallmentsConfig; });
var AdjustInstallmentsConfig = Object.freeze({
    i18n: {
        title: 'credits.home.payment.parachute-header.title',
        content: 'credits.adjust-installments',
    },
});


/***/ }),

/***/ "Y8pJ":
/*!***************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/parachute/pages/payment-detail/payment-detail.page.ts ***!
  \***************************************************************************************************************/
/*! exports provided: PaymentDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentDetailPage", function() { return PaymentDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_apps_base_mobile_config_features_commons_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/apps/base/mobile/config/features/commons/services */ "hVBB");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/utils/string */ "p6rB");
/* harmony import */ var _payment_detail_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./payment-detail.config */ "dUbC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ui_src_lib_components_view_detail_view_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../../ui/src/lib/components/view-detail/view-detail.component */ "yT3N");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");

















function PaymentDetailPage_ion_header_0_Template(rf, ctx) { if (rf & 1) {
    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-header", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-toolbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "ion-buttons", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "ion-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PaymentDetailPage_ion_header_0_Template_ion_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2); var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r1.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "ion-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "ion-buttons", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "ion-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PaymentDetailPage_ion_header_0_Template_ion_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r3.shareScreenshoot(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "ion-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "ion-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PaymentDetailPage_ion_header_0_Template_ion_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r4.saveScreenshot(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "ion-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", true);
} }
var PaymentDetailPage = /** @class */ (function () {
    function PaymentDetailPage(cardModalService, navigatorProvider, translateProvider, screenshotSharingService, router, currencyPipe) {
        this.cardModalService = cardModalService;
        this.navigatorProvider = navigatorProvider;
        this.translateProvider = translateProvider;
        this.screenshotSharingService = screenshotSharingService;
        this.router = router;
        this.currencyPipe = currencyPipe;
        this.config = _payment_detail_config__WEBPACK_IMPORTED_MODULE_7__["PaymentDetailConfig"];
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
        this.navigatorProvider.navigateForward(this.config.routes.changeLiveInsurance);
    };
    PaymentDetailPage.prototype.loadDetail = function (credit) {
        if (credit.isExpired) {
            this.buildExpiredItems(credit);
            return;
        }
        this.buildDefaultItems(credit);
    };
    PaymentDetailPage.prototype.buildExpiredItems = function (credit) {
        var items = this.translateProvider.get(this.config.i18n.paymentDetailExpired);
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
                helpMessage: Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_6__["createFormat"])(items.totalEnsurance.message, [
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
    };
    PaymentDetailPage.prototype.buildDefaultItems = function (credit) {
        var items = this.translateProvider.get(this.config.i18n.paymentDetail);
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
                helpMessage: Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_6__["createFormat"])(items.monthlyInsurance.message, [
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
    };
    PaymentDetailPage.prototype.interestRates = function (credit, interestRates) {
        if (credit.rateAnnualInterest && credit.rateMonthlyInterest) {
            this.detailItem.push({
                label: interestRates.label,
                description: Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_6__["createFormat"])(interestRates.description, [
                    credit.rateMonthlyInterest.toString(),
                    credit.rateAnnualInterest.toString(),
                ]),
                helpMessage: interestRates.message,
            });
        }
    };
    PaymentDetailPage.ɵfac = function PaymentDetailPage_Factory(t) { return new (t || PaymentDetailPage)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_5__["CardModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_4__["NavigatorProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_4__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_nequi_apps_base_mobile_config_features_commons_services__WEBPACK_IMPORTED_MODULE_3__["ScreenshotSharingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"])); };
    PaymentDetailPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: PaymentDetailPage, selectors: [["app-payment-detail"]], decls: 12, vars: 8, consts: [["class", "nequi-header", 4, "ngIf"], ["fullscreen", "true", 1, "ion-content--white", "ion-padding-horizontal"], [1, "nequi-title"], [1, "payment-detail"], [3, "details"], [1, "nequi-footer", "ion-no-border", "card__footer"], [1, "nequi-footer__toolbar"], ["id", "payment-detail_footer_link", 1, "nequi-footer__link", 3, "click"], [1, "nequi-header"], ["slot", "start"], ["id", "payment-detail_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], ["slot", "end"], ["id", "payment-detail_share_button", 3, "click"], ["slot", "icon-only", "name", "share-social-outline"], ["id", "payment-detail_save_button", 3, "hidden", "click"], ["slot", "icon-only", "name", "save-outline"]], template: function PaymentDetailPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, PaymentDetailPage_ion_header_0_Template, 10, 1, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-content", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "app-view-detail", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "ion-footer", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "ion-toolbar", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PaymentDetailPage_Template_a_click_9_listener() { return ctx.showModalChangeInsurance(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](11, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.isScreenShotTaken);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 4, ctx.config.i18n.headerTitle), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("details", ctx.detailItem);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](11, 6, ctx.config.i18n.insurance), " ");
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonContent"], _ui_src_lib_components_view_detail_view_detail_component__WEBPACK_IMPORTED_MODULE_10__["ViewDetailComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonIcon"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"]], styles: [".nequi-title[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\n\n.nequi-footer__toolbar[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvcGF5bWVudC1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjs7QUFHRTtFQUNFLGtCQUFBO0FBQUoiLCJmaWxlIjoicGF5bWVudC1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5lcXVpLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4ubmVxdWktZm9vdGVyIHtcbiAgJl9fdG9vbGJhciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG4iXX0= */"] });
    return PaymentDetailPage;
}());



/***/ }),

/***/ "dUbC":
/*!*****************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/parachute/pages/payment-detail/payment-detail.config.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: PaymentDetailConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentDetailConfig", function() { return PaymentDetailConfig; });
var PaymentDetailConfig = Object.freeze({
    i18n: {
        headerTitle: 'credits.payment-detail.title',
        paymentDetail: 'credits.parachute-payment-detail.items',
        paymentDetailExpired: 'credits.parachute-payment-detail.items-expired',
        insurance: 'credits.payment-detail.insurance',
        modal: 'credits.parachute-payment-detail.modal',
    },
    routes: {
        backpack: '/admin/dashboard',
        changeLiveInsurance: '/admin/credits/propeller/change-live-insurance',
    },
    paydayLimitFormat: 'dd \'de\' MMMM \'de\' yyyy',
});


/***/ }),

/***/ "miRz":
/*!***************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/parachute/parachute.module.ts ***!
  \***************************************************************************************/
/*! exports provided: ParachuteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParachuteModule", function() { return ParachuteModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nequi_apps_base_mobile_config_features_commons_services_screenshot_sharing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/apps/base/mobile/config/features/commons/services/screenshot-sharing */ "VXOE");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/money-management/presentation */ "JFCQ");
/* harmony import */ var _nequi_native_screenshot__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/native/screenshot */ "dqaN");
/* harmony import */ var _nequi_native_social_sharing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/native/social-sharing */ "nNyq");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/components.module */ "LwLH");
/* harmony import */ var _middlewares_parachute_middleware__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../middlewares/parachute.middleware */ "zepf");
/* harmony import */ var _organisms_approval_front_approval_front_view_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../organisms/approval-front/approval-front.view-model */ "pwQe");
/* harmony import */ var _organisms_credits_organism_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../organisms/credits-organism.module */ "DepU");
/* harmony import */ var _organisms_payment_payment_view_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../organisms/payment/payment.view-model */ "KTg/");
/* harmony import */ var _organisms_preapproval_services_preapproved_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../organisms/preapproval/services/preapproved.service */ "AYRj");
/* harmony import */ var _services_adjust_installments_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../services/adjust-installments.service */ "cO3k");
/* harmony import */ var _config_parachute_config__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./config/parachute.config */ "shLz");
/* harmony import */ var _pages_adjust_installments_adjust_installments_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/adjust-installments/adjust-installments.page */ "K+S4");
/* harmony import */ var _pages_change_live_insurance_change_live_insurance_page__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/change-live-insurance/change-live-insurance.page */ "x9dT");
/* harmony import */ var _pages_payment_detail_payment_detail_page__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/payment-detail/payment-detail.page */ "Y8pJ");
/* harmony import */ var _pages_payment_home_payment_home_page__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/payment-home/payment-home.page */ "6Mh6");
/* harmony import */ var _parachute_routing_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./parachute-routing.module */ "1HOm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ "fXoL");
























var ParachuteModule = /** @class */ (function () {
    function ParachuteModule() {
    }
    ParachuteModule.ɵfac = function ParachuteModule_Factory(t) { return new (t || ParachuteModule)(); };
    ParachuteModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineNgModule"]({ type: ParachuteModule });
    ParachuteModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineInjector"]({ providers: [
            {
                provide: _nequi_features_commons__WEBPACK_IMPORTED_MODULE_4__["ModuleConfigProvider"],
                useValue: _config_parachute_config__WEBPACK_IMPORTED_MODULE_17__["ParachuteConfig"],
            },
            _organisms_approval_front_approval_front_view_model__WEBPACK_IMPORTED_MODULE_12__["ApprovalFrontViewModel"],
            _organisms_payment_payment_view_model__WEBPACK_IMPORTED_MODULE_14__["PaymentViewModel"],
            _organisms_preapproval_services_preapproved_service__WEBPACK_IMPORTED_MODULE_15__["PreapprovedService"],
            _services_adjust_installments_service__WEBPACK_IMPORTED_MODULE_16__["AdjustInstallmentsService"],
            _middlewares_parachute_middleware__WEBPACK_IMPORTED_MODULE_11__["ParachuteMiddleware"],
            _nequi_native_screenshot__WEBPACK_IMPORTED_MODULE_7__["ScreenshotPlugin"],
            _nequi_apps_base_mobile_config_features_commons_services_screenshot_sharing__WEBPACK_IMPORTED_MODULE_3__["ScreenshotSharingService"],
            _nequi_native_social_sharing__WEBPACK_IMPORTED_MODULE_8__["SocialSharingPlugin"],
            _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__["DynatraceService"],
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_10__["ComponentsModule"],
                _nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_6__["FeaturesMoneyManagementModule"],
                _organisms_credits_organism_module__WEBPACK_IMPORTED_MODULE_13__["CreditsOrganismModule"],
                _parachute_routing_module__WEBPACK_IMPORTED_MODULE_22__["ParachuteRoutingModule"],
            ]] });
    return ParachuteModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsetNgModuleScope"](ParachuteModule, { declarations: [_pages_payment_home_payment_home_page__WEBPACK_IMPORTED_MODULE_21__["PaymentHomePage"],
        _pages_adjust_installments_adjust_installments_page__WEBPACK_IMPORTED_MODULE_18__["AdjustInstallmentsPage"],
        _pages_payment_detail_payment_detail_page__WEBPACK_IMPORTED_MODULE_20__["PaymentDetailPage"],
        _pages_change_live_insurance_change_live_insurance_page__WEBPACK_IMPORTED_MODULE_19__["ChangeLiveInsurancePage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_10__["ComponentsModule"],
        _nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_6__["FeaturesMoneyManagementModule"],
        _organisms_credits_organism_module__WEBPACK_IMPORTED_MODULE_13__["CreditsOrganismModule"],
        _parachute_routing_module__WEBPACK_IMPORTED_MODULE_22__["ParachuteRoutingModule"]] }); })();


/***/ }),

/***/ "shLz":
/*!**********************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/parachute/config/parachute.config.ts ***!
  \**********************************************************************************************/
/*! exports provided: ParachuteConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParachuteConfig", function() { return ParachuteConfig; });
var config = {
    i18n: {
        moduleKey: 'credits',
        contractModuleKey: 'credits/contract',
    },
    applicationData: {
        isTimeToPay: 'parachute.is-time-to-pay',
        homeIsShowFirstMessage: 'parachute.payment-home-is-show-first-message',
        showMovementsModal: 'parachute.movements-show-modal',
    },
};
var ParachuteConfig = Object.freeze(config);


/***/ }),

/***/ "tTaq":
/*!*************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/parachute/pages/payment-home/payment-home.config.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ParachutePaymentConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParachutePaymentConfig", function() { return ParachutePaymentConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _organisms_payment_payment_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../organisms/payment/payment.config */ "pnSE");


var ParachutePaymentConfig = Object.freeze(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _organisms_payment_payment_config__WEBPACK_IMPORTED_MODULE_1__["PaymentConfig"].i18n), { routes: {
        paymentGuarantees: '/admin/credits/propeller/payment-guarantees',
        paymentDetail: '/admin/credits/parachute/payment-detail',
    }, i18n: {
        modal: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _organisms_payment_payment_config__WEBPACK_IMPORTED_MODULE_1__["PaymentConfig"].i18n.modal), { overdueFee: 'credits.home.modal.overdue-fee-parachute' }),
        payment: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _organisms_payment_payment_config__WEBPACK_IMPORTED_MODULE_1__["PaymentConfig"].i18n.payment), { headerTitle: 'credits.home.payment.parachute-header.title', paymentHelp: 'credits.home.payment.content.parachute-payment-help', payComplete: 'credits.home.payment.content.pay-complete-parachute', footer: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _organisms_payment_payment_config__WEBPACK_IMPORTED_MODULE_1__["PaymentConfig"].i18n.payment.footer), { message: 'credits.home.payment.footer.parachute-message' }) }),
    }, timeOut: 1000, analytics: {
        intentionToPay: {
            name: {
                cleverTap: 'Prestamo_Paracaidas_intencion_pago',
                dynatrace: 'intencion_pago_Paracaidas',
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
                error: ['Codigo_error', 'Descripcion_error'],
            },
            error: 'Prestamo_Paracaidas_intencion_pago_error',
            routes: {
                paymentHome: '/admin/credits/parachute/payment-home',
            },
        },
    } }));


/***/ }),

/***/ "x9dT":
/*!*****************************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/parachute/pages/change-live-insurance/change-live-insurance.page.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: ChangeLiveInsurancePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeLiveInsurancePage", function() { return ChangeLiveInsurancePage; });
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_utils_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/utils/string */ "p6rB");
/* harmony import */ var _change_live_insurance_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./change-live-insurance.config */ "QnCy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");








function ChangeLiveInsurancePage_ion_header_0_Template(rf, ctx) { if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-toolbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-buttons", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ion-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ChangeLiveInsurancePage_ion_header_0_Template_ion_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "ion-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ChangeLiveInsurancePage_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r4.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHtml", item_r4.description, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
} }
var ChangeLiveInsurancePage = /** @class */ (function () {
    function ChangeLiveInsurancePage(navigatorProvider, translateProvider) {
        this.navigatorProvider = navigatorProvider;
        this.translateProvider = translateProvider;
        this.config = _change_live_insurance_config__WEBPACK_IMPORTED_MODULE_2__["ChangeLiveInsuranceConfig"];
        this.isScreenShotTaken = false;
    }
    ChangeLiveInsurancePage.prototype.ngOnInit = function () {
        this.loadData();
    };
    ChangeLiveInsurancePage.prototype.goBack = function () {
        this.navigatorProvider.back();
    };
    ChangeLiveInsurancePage.prototype.loadData = function () {
        var i18nItems = this.translateProvider.get(this.config.i18n.items);
        this.infoItems = [
            {
                label: i18nItems.send.title,
                description: i18nItems.send.description,
            },
            {
                label: i18nItems.check.title,
                description: Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_1__["createFormat"])(i18nItems.check.description, [
                    this.config.cssClass,
                    this.config.link,
                ]),
            },
            {
                label: i18nItems.answer.title,
                description: i18nItems.answer.description,
            },
        ];
    };
    ChangeLiveInsurancePage.ɵfac = function ChangeLiveInsurancePage_Factory(t) { return new (t || ChangeLiveInsurancePage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_0__["NavigatorProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_0__["TranslateProvider"])); };
    ChangeLiveInsurancePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ChangeLiveInsurancePage, selectors: [["app-change-live-insurance"]], decls: 11, vars: 8, consts: [["class", "nequi-header", 4, "ngIf"], ["fullscreen", "true", 1, "ion-content--white", "ion-padding-horizontal"], [1, "nequi-title"], ["class", "change-live-insurance__content", 4, "ngFor", "ngForOf"], [1, "nequi-footer", "ion-no-border", "card__footer"], [1, "nequi-footer__toolbar"], ["id", "change-live-insurance_go-back-footer_button", "shape", "round", "color", "guayaba", "expand", "block", 1, "nequi-footer__button", 3, "click"], [1, "nequi-header"], ["slot", "start"], ["id", "change-live-insurance_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], [1, "change-live-insurance__content"], [1, "change-live-insurance__label"], [1, "change-live-insurance__description", 3, "innerHtml"]], template: function ChangeLiveInsurancePage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ChangeLiveInsurancePage_ion_header_0_Template, 5, 0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-content", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ChangeLiveInsurancePage_div_5_Template, 4, 2, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-footer", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-toolbar", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ChangeLiveInsurancePage_Template_ion_button_click_8_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isScreenShotTaken);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 4, ctx.config.i18n.headerTitle), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.infoItems);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 6, ctx.config.i18n.backButton), " ");
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonIcon"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: [".change-live-insurance__content[_ngcontent-%COMP%] {\n  padding-top: 16px;\n  border-bottom: 1px solid var(--divisor-line);\n}\n.change-live-insurance__content[_ngcontent-%COMP%]:last-of-type {\n  border: 0px;\n}\n.change-live-insurance__label[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 22px;\n  color: var(--medianoche);\n}\n.change-live-insurance__description[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 17px;\n  color: var(--gray-70);\n  padding: 4px 0px 16px 0px;\n}\n.nequi-title[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\n.nequi-footer__toolbar[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvY2hhbmdlLWxpdmUtaW5zdXJhbmNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGlCQUFBO0VBQ0EsNENBQUE7QUFBSjtBQUVJO0VBQ0UsV0FBQTtBQUFOO0FBSUU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7QUFGSjtBQUtFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUFISjtBQU9BO0VBQ0Usa0JBQUE7QUFKRjtBQVFFO0VBQ0Usa0JBQUE7QUFMSiIsImZpbGUiOiJjaGFuZ2UtbGl2ZS1pbnN1cmFuY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYW5nZS1saXZlLWluc3VyYW5jZSB7XG4gICZfX2NvbnRlbnQge1xuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kaXZpc29yLWxpbmUpO1xuXG4gICAgJjpsYXN0LW9mLXR5cGUge1xuICAgICAgYm9yZGVyOiAwcHg7XG4gICAgfVxuICB9XG5cbiAgJl9fbGFiZWwge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICBjb2xvcjogdmFyKC0tbWVkaWFub2NoZSk7XG4gIH1cblxuICAmX19kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAgIGNvbG9yOiB2YXIoLS1ncmF5LTcwKTtcbiAgICBwYWRkaW5nOiA0cHggMHB4IDE2cHggMHB4O1xuICB9XG59XG5cbi5uZXF1aS10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLm5lcXVpLWZvb3RlciB7XG4gICZfX3Rvb2xiYXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuIl19 */"] });
    return ChangeLiveInsurancePage;
}());



/***/ }),

/***/ "zepf":
/*!************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/middlewares/parachute.middleware.ts ***!
  \************************************************************************************/
/*! exports provided: ParachuteMiddleware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParachuteMiddleware", function() { return ParachuteMiddleware; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/features/credits/core */ "42wy");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _base_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.middleware */ "Jqih");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





var ParachuteMiddleware = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ParachuteMiddleware, _super);
    function ParachuteMiddleware() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ParachuteMiddleware.prototype.getCustomerCreditsFail = function (error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var result;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.dynatraceService.setCustomError(error);
                        result = false;
                        if (error.code === _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_1__["ErrorCode"].ISNT_POSSIBLE ||
                            _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_1__["CUSTORMER_WITHOUT_PREAPROVED_ERRORS"].includes(error.code)) {
                            return [2 /*return*/, this.showCannotSaveYouCardModal()];
                        }
                        if (!(error.code === _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_1__["ErrorCode"].EXPLORE_THE_SEA)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.showWelcome()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result ? this.showOtherCreditOptions(error.data) : result];
                    case 2: return [4 /*yield*/, this.showComeBackLaterAlert(error.message)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    ParachuteMiddleware.prototype.setGetCustomerCreditsException = function () {
        this.getCustomerCreditException = {};
    };
    ParachuteMiddleware.prototype.showOtherCreditOptions = function (data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var i18nKey, url, _a, creditType;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                i18nKey = this.config.parachute.modal.cannotSaveYou;
                _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(data === null || data === void 0 ? void 0 : data.availableProducts, 1), creditType = _a[0];
                if (creditType === _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_1__["CreditType"].LIFEGUARD) {
                    i18nKey = this.config.parachute.modal.lifeguard;
                    url = this.config.routes.lifeguard;
                    return [2 /*return*/, this.showCardModal({
                            i18nKey: i18nKey,
                            onAccept: function () { return (url ? _this.navController.navigateRoot(url) : false); },
                            onCancel: function () { return false; },
                        })];
                }
                return [2 /*return*/, this.showCannotSaveYouCardModal()];
            });
        });
    };
    ParachuteMiddleware.prototype.showCannotSaveYouCardModal = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages, result;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        messages = this.translateProvider.get(this.config.parachute.modal.cannotSaveYou);
                        return [4 /*yield*/, this.cardModalService.show({
                                title: messages.title,
                                imgPath: messages.image,
                                content: messages.description,
                                buttons: [
                                    {
                                        text: messages.buttons.accept,
                                        handler: function () { return false; },
                                    },
                                    {
                                        isLink: true,
                                        text: messages.link.text,
                                        handler: function () {
                                            Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_2__["openUrl"])(messages.link.url);
                                            return false;
                                        },
                                    },
                                ],
                            })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result === null || result === void 0 ? void 0 : result.data];
                }
            });
        });
    };
    ParachuteMiddleware.ɵfac = function ParachuteMiddleware_Factory(t) { return ɵParachuteMiddleware_BaseFactory(t || ParachuteMiddleware); };
    ParachuteMiddleware.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ParachuteMiddleware, factory: ParachuteMiddleware.ɵfac });
    return ParachuteMiddleware;
}(_base_middleware__WEBPACK_IMPORTED_MODULE_3__["BaseMiddleware"]));

var ɵParachuteMiddleware_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetInheritedFactory"](ParachuteMiddleware);


/***/ })

}]);
//# sourceMappingURL=products-parachute-parachute-module.js.map