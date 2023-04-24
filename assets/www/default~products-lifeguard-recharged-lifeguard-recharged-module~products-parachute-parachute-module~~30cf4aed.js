(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~products-lifeguard-recharged-lifeguard-recharged-module~products-parachute-parachute-module~~30cf4aed"],{

/***/ "Jsat":
/*!***************************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/propeller/pages/adjust-installments/adjust-installments.config.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: AdjustIntallmentsConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdjustIntallmentsConfig", function() { return AdjustIntallmentsConfig; });
/* harmony import */ var _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nequi/features/credits/core */ "42wy");
var _a, _b;

var AdjustIntallmentsConfig = Object.freeze({
    i18n: {
        headerTitle: 'credits.adjust-installments.title',
        description: 'credits.adjust-installments.description',
        note: 'credits.adjust-installments.note',
        adjustFeesAmountTitle: 'credits.adjust-installments.adjust-fees-amount.title',
        adjustFeesAmountNote: 'credits.adjust-installments.adjust-fees-amount.note',
        adjustFeesNumberTitle: 'credits.adjust-installments.adjust-fees-number.title',
        adjustFeesNumberNote: 'credits.adjust-installments.adjust-fees-number.note',
        content: 'credits.adjust-installments',
        acceptButton: 'credits.adjust-installments.accept-button',
        modals: {
            reduceFeesValue: 'credits.adjust-installments.card-modal.reduce-fees-value.content',
            reduceFeesNumber: 'credits.adjust-installments.card-modal.reduce-fees-number.content',
        },
        paymentType: (_a = {},
            _a[_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_0__["RescheduleType"].INSTALLMENTS_AMOUNT] = 'credits.adjust-installments.adjust-fees-amount.param',
            _a[_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_0__["RescheduleType"].INSTALLMENTS_NUMBER] = 'credits.adjust-installments.adjust-fees-number.param',
            _a),
    },
    routes: {
        dashboard: '/admin/dashboard',
    },
    optionList: {
        adjustFeeAmount: _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_0__["RescheduleType"].INSTALLMENTS_AMOUNT,
        adjustFeeNumber: _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_0__["RescheduleType"].INSTALLMENTS_NUMBER,
    },
    fullscreenModal: {
        cssClass: 'modal--white ion-text-center modal--propeller-credit',
        cssClassButton: 'ion-color-guayaba-outline button-outline',
    },
    analytics: {
        intentionToPayment: {
            name: 'tipo_intencion_abono_propulsor',
            params: (_b = {
                    dynatrace: ['product_id', 'valor_abono', 'tipo_abono', 'fecha_proxima_cuota']
                },
                _b[_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_0__["RescheduleType"].INSTALLMENTS_AMOUNT] = ['valor_cuotas'],
                _b[_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_0__["RescheduleType"].INSTALLMENTS_NUMBER] = ['valor_ultima_cuota', 'fecha_ultima_cuota'],
                _b),
        },
        intentionToPaySuccess: {
            name: 'abono_propulsor',
            params: {
                dynatrace: ['product_id', 'tipo_abono', 'valor_abono'],
            },
        },
    },
});


/***/ }),

/***/ "cO3k":
/*!****************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/services/adjust-installments.service.ts ***!
  \****************************************************************************************/
/*! exports provided: AdjustInstallmentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdjustInstallmentsService", function() { return AdjustInstallmentsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nequi_commons_exceptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/commons/exceptions */ "0sJq");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/features/credits/core */ "42wy");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _products_propeller_pages_adjust_installments_adjust_installments_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../products/propeller/pages/adjust-installments/adjust-installments.config */ "Jsat");
/* harmony import */ var _credit_info_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./credit-info.model */ "9FmH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");






















var AdjustInstallmentsService = /** @class */ (function () {
    function AdjustInstallmentsService(creditInteractor, activatedRoute, navController, datePipe, currencyPipe, creditInfoModel, transactionBaseService, toastService, cardModalService, fullscreenModalService, translateProvider, dynatraceService) {
        this.creditInteractor = creditInteractor;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.datePipe = datePipe;
        this.currencyPipe = currencyPipe;
        this.creditInfoModel = creditInfoModel;
        this.transactionBaseService = transactionBaseService;
        this.toastService = toastService;
        this.cardModalService = cardModalService;
        this.fullscreenModalService = fullscreenModalService;
        this.translateProvider = translateProvider;
        this.dynatraceService = dynatraceService;
        this.data = {
            nextFeeDate: new Date(),
            extraMoney: 0,
            amountFeesAdjusted: 0,
            lastFeeDate: new Date(),
            numberFeesAdjusted: 0,
        };
    }
    AdjustInstallmentsService.prototype.loadData = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var response;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.paymentAmount = this.creditInfoModel.creditFeatureInfo.paymentAmount;
                        return [4 /*yield*/, this.creditInteractor.getLoanSimulation({
                                productId: this.creditInfoModel.creditFeatureInfo.productId,
                                amount: this.paymentAmount,
                            })];
                    case 1:
                        response = _a.sent();
                        this.data.extraMoney = response.amount;
                        this.data.nextFeeDate = response.nextPaymentDate;
                        response.data.forEach(function (item) {
                            if (_products_propeller_pages_adjust_installments_adjust_installments_config__WEBPACK_IMPORTED_MODULE_11__["AdjustIntallmentsConfig"].optionList.adjustFeeAmount === item.rephraseType) {
                                _this.data.amountFeesAdjusted = item.newInstallmentAmount;
                            }
                            if (_products_propeller_pages_adjust_installments_adjust_installments_config__WEBPACK_IMPORTED_MODULE_11__["AdjustIntallmentsConfig"].optionList.adjustFeeNumber === item.rephraseType) {
                                _this.data.lastFeeDate = item.newDueDate;
                                _this.data.numberFeesAdjusted = item.newNumberOfInstallments;
                                _this.lastFeeAmount = item.lastInstallmentAmount;
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AdjustInstallmentsService.prototype.makePayment = function (i18n, rescheduleType, pocket, productId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data, paymentTransaction;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.i18n = i18n;
                data = {
                    operatorType: _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_8__["OperationCreditType"].PAYMENT,
                    productId: productId,
                    debenture: this.creditInfoModel.creditFeatureInfo.productId,
                    paymentType: _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_8__["PaymentType"].LOAN,
                    rescheduleType: rescheduleType,
                };
                paymentTransaction = new _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_8__["PaymentTransaction"]()
                    .withData(data)
                    .withAmount(this.paymentAmount)
                    .withPocket(pocket);
                this.transactionBaseService.executeTransaction(paymentTransaction, function (response) { return _this.onTransactionSuccess(response, rescheduleType); }, function (error) { return _this.onTransactionFailed(error); });
                return [2 /*return*/];
            });
        });
    };
    AdjustInstallmentsService.prototype.onTransactionSuccess = function (response, rescheduleType) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.setAnalyticsOfPayment(rescheduleType)];
                    case 1:
                        _a.sent();
                        if (rescheduleType === _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_8__["RescheduleType"].INSTALLMENTS_AMOUNT) {
                            this.i18n.cardModal.reduceFeesValue.content = this.translateProvider.get(_products_propeller_pages_adjust_installments_adjust_installments_config__WEBPACK_IMPORTED_MODULE_11__["AdjustIntallmentsConfig"].i18n.modals.reduceFeesValue, {
                                amountFeesAdjusted: this.currencyPipe.transform(this.data.amountFeesAdjusted),
                                lifeInsurance: this.currencyPipe.transform(0),
                                normalInterest: this.currencyPipe.transform(response.paymentDetails.normalInterest),
                                nextFeeDate: this.datePipe.transform(this.data.nextFeeDate),
                            });
                            this.showCardModal(this.i18n.cardModal.reduceFeesValue);
                        }
                        if (rescheduleType === _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_8__["RescheduleType"].INSTALLMENTS_NUMBER) {
                            this.i18n.cardModal.reduceFeesNumber.content = this.translateProvider.get(_products_propeller_pages_adjust_installments_adjust_installments_config__WEBPACK_IMPORTED_MODULE_11__["AdjustIntallmentsConfig"].i18n.modals.reduceFeesNumber, {
                                feesNumber: String(this.data.numberFeesAdjusted),
                                lastFeeAmount: this.currencyPipe.transform(this.lastFeeAmount),
                                lifeInsurance: this.currencyPipe.transform(0),
                                normalInterest: this.currencyPipe.transform(response.paymentDetails.normalInterest),
                            });
                            this.showCardModal(this.i18n.cardModal.reduceFeesNumber);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AdjustInstallmentsService.prototype.onTransactionFailed = function (error) {
        this.dynatraceService.setCustomError(error);
        if (error instanceof _nequi_commons_exceptions__WEBPACK_IMPORTED_MODULE_4__["ExceedCeilingException"]) {
            throw error;
        }
        if (_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["NOT_BALANCE_AVAILABLE_ERRORS"].includes(error.code)) {
            throw error;
        }
        this.toastService.showError(error.message);
    };
    AdjustInstallmentsService.prototype.showFullScreenModal = function (i18n) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.fullscreenModalService.show({
                    title: i18n.title,
                    imgPath: i18n.image,
                    content: i18n.content,
                    cssClass: _products_propeller_pages_adjust_installments_adjust_installments_config__WEBPACK_IMPORTED_MODULE_11__["AdjustIntallmentsConfig"].fullscreenModal.cssClass,
                    fullPageDismiss: true,
                    buttons: [
                        {
                            text: i18n.readyButton,
                            handler: this.goToDashboard.bind(this),
                            cssClass: _products_propeller_pages_adjust_installments_adjust_installments_config__WEBPACK_IMPORTED_MODULE_11__["AdjustIntallmentsConfig"].fullscreenModal.cssClassButton,
                        },
                    ],
                });
                return [2 /*return*/];
            });
        });
    };
    AdjustInstallmentsService.prototype.showCardModal = function (i18n) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.cardModalService.show({
                    title: i18n.title,
                    imgPath: i18n.image,
                    content: i18n.content,
                    buttons: [
                        {
                            text: i18n.readyButton,
                            handler: this.goToDashboard.bind(this),
                        },
                    ],
                });
                return [2 /*return*/];
            });
        });
    };
    AdjustInstallmentsService.prototype.goToDashboard = function () {
        this.navController.navigateForward(_products_propeller_pages_adjust_installments_adjust_installments_config__WEBPACK_IMPORTED_MODULE_11__["AdjustIntallmentsConfig"].routes.dashboard, {
            relativeTo: this.activatedRoute,
        });
    };
    AdjustInstallmentsService.prototype.setAnalyticsOfPayment = function (rescheduleType) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dynatraceService.setAnalyticsOfEnd()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.dynatraceService.setAnalyticsOfEvent({
                                eventName: _products_propeller_pages_adjust_installments_adjust_installments_config__WEBPACK_IMPORTED_MODULE_11__["AdjustIntallmentsConfig"].analytics.intentionToPaySuccess.name,
                                eventProps: Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_10__["stringsArrayToObjectWithValues"])(_products_propeller_pages_adjust_installments_adjust_installments_config__WEBPACK_IMPORTED_MODULE_11__["AdjustIntallmentsConfig"].analytics.intentionToPaySuccess.params.dynatrace, [
                                    _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_8__["CreditType"].PROPELLER,
                                    this.translateProvider.get(_products_propeller_pages_adjust_installments_adjust_installments_config__WEBPACK_IMPORTED_MODULE_11__["AdjustIntallmentsConfig"].i18n.paymentType[rescheduleType]),
                                    this.paymentAmount,
                                ]),
                                leave: true,
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AdjustInstallmentsService.ɵfac = function AdjustInstallmentsService_Factory(t) { return new (t || AdjustInstallmentsService)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_8__["CreditInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_credit_info_model__WEBPACK_IMPORTED_MODULE_12__["CreditInfoModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_6__["TransactionBaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_9__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_9__["CardModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_9__["FullscreenModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_7__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_6__["DynatraceService"])); };
    AdjustInstallmentsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjectable"]({ token: AdjustInstallmentsService, factory: AdjustInstallmentsService.ɵfac });
    return AdjustInstallmentsService;
}());



/***/ })

}]);
//# sourceMappingURL=default~products-lifeguard-recharged-lifeguard-recharged-module~products-parachute-parachute-module~~30cf4aed.js.map