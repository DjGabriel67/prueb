(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-lifeguard-recharged-lifeguard-recharged-module"],{

/***/ "25Ct":
/*!*****************************************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard-recharged/pages/know-us-better-engine/know-us-better-engine.config.ts ***!
  \*****************************************************************************************************************************************/
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
        preapprovedHome: '/admin/credits/lifeguard-recharged/preapproved-home',
        dashboard: '/admin/dashboard',
    },
});


/***/ }),

/***/ "2BjH":
/*!*****************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard-recharged/pages/loan-info/loan-info.config.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: LoanInfoConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanInfoConfig", function() { return LoanInfoConfig; });
var LoanInfoConfig = Object.freeze({
    i18n: {
        loanInfo: {
            content: 'credits.lifeguard-recharged.loan-info',
            shareIconButton: 'credits.lifeguard-recharged.loan-info.share-icon-button',
            saveIconButton: 'credits.lifeguard-recharged.loan-info.save-icon-button',
            headerTitle: 'credits.lifeguard-recharged.loan-info.header.title',
            toatMessage: 'credits.lifeguard-recharged.loan-info.toast-message',
            loanAmountLabel: 'credits.lifeguard-recharged.loan-info.info-list.loan-amount-label',
            loanAmountWithCommissionsLabel: 'credits.lifeguard-recharged.loan-info.info-list.loan-amount-with-commissions-label',
            loanAmountWithCommissionsInfoMessage: 'credits.lifeguard-recharged.loan-info.info-list.loan-amount-with-commissions-info-message',
            whatItCostsYouLabel: 'credits.lifeguard-recharged.loan-info.info-list.what-it-costs-you-label',
            whatItCostsYouInfoMessage: 'credits.lifeguard-recharged.loan-info.info-list.what-it-costs-you-info-message',
            howMuchIsTheInterestLabel: 'credits.lifeguard-recharged.loan-info.info-list.how-much-is-the-interest-label',
            howMuchIsTheInterestValue: 'credits.lifeguard-recharged.loan-info.info-list.how-much-is-the-interest-value',
            howMuchIsTheInterestInfoMessage: 'credits.lifeguard-recharged.loan-info.info-list.how-much-is-the-interest-info-message',
            insuranceCostPerMonthLabel: 'credits.lifeguard-recharged.loan-info.info-list.insurance-cost-per-month-label',
            insuranceCostPerMonthInfoMessage: 'credits.lifeguard-recharged.loan-info.info-list.insurance-cost-per-month-info-message',
            expiredDateLabel: 'credits.lifeguard-recharged.loan-info.info-list.expired-date-label',
            helpMessage: 'credits.lifeguard-recharged.loan-info.help-message',
            continueButton: 'credits.lifeguard-recharged.loan-info.continue-button',
        },
        logs: 'credits.lifeguard-recharged.loan-info.logs',
    },
    routes: {
        knowUsBetter: '/admin/credits/lifeguard-recharged/know-us-better',
    },
    analytics: {
        events: {
            intentionOfSummary: {
                name: 'SalvavidasR_intencion_resumen_prestamo',
                params: {
                    cleverTap: ['Fecha_intencion', 'Valor_solicitado', 'PlazoPrestamo'],
                },
            },
        },
    },
    toast: {
        cssClass: 'nequi-toast__icon--info-save-button',
    },
});


/***/ }),

/***/ "4U8j":
/*!**********************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/middlewares/lifeguard-recharged.middleware.ts ***!
  \**********************************************************************************************/
/*! exports provided: LifeguardRechargedMiddleware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifeguardRechargedMiddleware", function() { return LifeguardRechargedMiddleware; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/features/credits/core */ "42wy");
/* harmony import */ var _base_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.middleware */ "Jqih");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var LifeguardRechargedMiddleware = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LifeguardRechargedMiddleware, _super);
    function LifeguardRechargedMiddleware() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LifeguardRechargedMiddleware.prototype.getCustomerCreditsFail = function (error) {
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
                        if (!(error.code === _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_1__["ErrorCode"].EXPLORE_THE_SEA)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.showWelcome()];
                    case 5:
                        result = _a.sent();
                        return [2 /*return*/, result ? this.showOtherCreditOptions(error.data) : result];
                    case 6:
                        if (error.code === _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_1__["ErrorCode"].WRONG_TIME_DISBURSEMENT_CREDIT) {
                            this.toastService.showError(error.message);
                            return [2 /*return*/, false];
                        }
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
    LifeguardRechargedMiddleware.prototype.setGetCustomerCreditsException = function () {
        var _a;
        var _this = this;
        this.getCustomerCreditException = (_a = {},
            _a[_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_1__["ValidateCreditTypeException"].name] = function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, !this.navController.navigateForward(this.config.routes.lifeguard)];
            }); }); },
            _a[_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_1__["ValidateCreditsParamsException"].name] = function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, this.onCreditsParamsError()];
            }); }); },
            _a);
    };
    LifeguardRechargedMiddleware.prototype.showOtherCreditOptions = function (data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var i18nKey, url, _a, creditType;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                i18nKey = this.config.lifeguardRecharged.modal.lifeguard;
                _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(data === null || data === void 0 ? void 0 : data.availableProducts, 1), creditType = _a[0];
                if (creditType === _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_1__["CreditType"].PROPELLER) {
                    i18nKey = this.config.lifeguardRecharged.modal.propeller;
                    url = this.config.routes.propellerPreapproved;
                }
                return [2 /*return*/, this.showCardModal({
                        i18nKey: i18nKey,
                        onAccept: function () { return (url ? _this.navController.navigateRoot(url) : false); },
                        onCancel: function () { return false; },
                    })];
            });
        });
    };
    LifeguardRechargedMiddleware.prototype.failApprovalUpFrontAttempt = function (error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.dynatraceService.setCustomError(error);
                        if (error === null || error === void 0 ? void 0 : error.data) {
                            this.setMaxAttemptApprovalFront(error.data);
                        }
                        if (error.constructor === _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_1__["HaveApprovalAttemptException"]) {
                            this.navController.navigateRoot(this.config.lifeguardRecharged.routes.knowUsBetterEngine);
                        }
                        if (error.constructor === _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_1__["DontHaveApprovalAttemptWithDataException"]) {
                            return [2 /*return*/, true];
                        }
                        if (error.constructor === _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_1__["DontHaveApprovalAttemptException"]) {
                            this.processGetApprovalAttemptError(error);
                        }
                        if (!(error.constructor !== _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_1__["HaveApprovalAttemptException"])) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toastService.showError(error.message)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/, false];
                }
            });
        });
    };
    LifeguardRechargedMiddleware.prototype.onCreditsParamsError = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var i18n;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                i18n = this.translateProvider.get(this.config.common.alert.paramsError);
                this.alertService.show({ messages: i18n });
                return [2 /*return*/, false];
            });
        });
    };
    LifeguardRechargedMiddleware.ɵfac = function LifeguardRechargedMiddleware_Factory(t) { return ɵLifeguardRechargedMiddleware_BaseFactory(t || LifeguardRechargedMiddleware); };
    LifeguardRechargedMiddleware.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: LifeguardRechargedMiddleware, factory: LifeguardRechargedMiddleware.ɵfac });
    return LifeguardRechargedMiddleware;
}(_base_middleware__WEBPACK_IMPORTED_MODULE_2__["BaseMiddleware"]));

var ɵLifeguardRechargedMiddleware_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](LifeguardRechargedMiddleware);


/***/ }),

/***/ "6R3u":
/*!***************************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard-recharged/pages/payment-detail/payment-detail.config.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: PaymentDetailConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentDetailConfig", function() { return PaymentDetailConfig; });
var PaymentDetailConfig = Object.freeze({
    i18n: {
        headerTitle: 'credits.lifeguard-recharged.payment-detail.title',
        paymentDetail: 'credits.lifeguard-recharged.payment-detail.items',
        paymentDetailExpired: 'credits.lifeguard-recharged.payment-detail.items-expired',
        insurance: 'credits.lifeguard-recharged.payment-detail.insurance',
        modal: 'credits.lifeguard-recharged.payment-detail.modal',
    },
    routes: {
        backpack: '/admin/dashboard',
        changeLiveInsurance: '/admin/credits/lifeguard-recharged/change-live-insurance',
    },
    insurance: 2900,
});


/***/ }),

/***/ "CEbS":
/*!***********************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard-recharged/lifeguard-recharged.module.ts ***!
  \***********************************************************************************************************/
/*! exports provided: LifeguardRechargedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifeguardRechargedModule", function() { return LifeguardRechargedModule; });
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
/* harmony import */ var _middlewares_lifeguard_recharged_middleware__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../middlewares/lifeguard-recharged.middleware */ "4U8j");
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
/* harmony import */ var _config_lifeguard_recharged_config__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./config/lifeguard-recharged.config */ "VGeY");
/* harmony import */ var _lifeguard_recharged_routing_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./lifeguard-recharged-routing.module */ "XuzY");
/* harmony import */ var _pages_agreement_fga_agreement_fga_page__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/agreement-fga/agreement-fga.page */ "eLxO");
/* harmony import */ var _pages_ensure_loan_ensure_loan_page__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/ensure-loan/ensure-loan.page */ "oPib");
/* harmony import */ var _pages_home_home_page__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/home/home.page */ "TAOr");
/* harmony import */ var _pages_its_serious_its_serious_page__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/its-serious/its-serious.page */ "qeHC");
/* harmony import */ var _pages_know_us_better_engine_know_us_better_engine_page__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/know-us-better-engine/know-us-better-engine.page */ "NKId");
/* harmony import */ var _pages_know_us_better_know_us_better_page__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/know-us-better/know-us-better.page */ "UcNE");
/* harmony import */ var _pages_life_insurance_life_insurance_page__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pages/life-insurance/life-insurance.page */ "d9iY");
/* harmony import */ var _pages_loan_info_loan_info_page__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./pages/loan-info/loan-info.page */ "LM49");
/* harmony import */ var _pages_payment_detail_payment_detail_page__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pages/payment-detail/payment-detail.page */ "oiv4");
/* harmony import */ var _pages_payment_guarantees_payment_guarantees_page__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pages/payment-guarantees/payment-guarantees.page */ "yqos");
/* harmony import */ var _pages_payment_home_payment_home_page__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./pages/payment-home/payment-home.page */ "JSGi");
/* harmony import */ var _pages_preapproved_home_preapproved_home_page__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./pages/preapproved-home/preapproved-home.page */ "WC+j");
/* harmony import */ var _pages_terms_and_conditions_terms_and_conditions_page__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./pages/terms-and-conditions/terms-and-conditions.page */ "P5VM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/core */ "fXoL");










































var LifeguardRechargedModule = /** @class */ (function () {
    function LifeguardRechargedModule() {
    }
    LifeguardRechargedModule.ɵfac = function LifeguardRechargedModule_Factory(t) { return new (t || LifeguardRechargedModule)(); };
    LifeguardRechargedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_41__["ɵɵdefineNgModule"]({ type: LifeguardRechargedModule });
    LifeguardRechargedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_41__["ɵɵdefineInjector"]({ providers: [
            {
                provide: _nequi_features_commons__WEBPACK_IMPORTED_MODULE_4__["ModuleConfigProvider"],
                useValue: _config_lifeguard_recharged_config__WEBPACK_IMPORTED_MODULE_26__["LifeguardRechargedConfig"],
            },
            _nequi_ui__WEBPACK_IMPORTED_MODULE_11__["ConfirmInfoBottomSheetService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["PercentPipe"],
            _organisms_approval_front_approval_front_view_model__WEBPACK_IMPORTED_MODULE_15__["ApprovalFrontViewModel"],
            _services_credit_logger_service__WEBPACK_IMPORTED_MODULE_24__["CreditLoggerService"],
            _middlewares_lifeguard_recharged_middleware__WEBPACK_IMPORTED_MODULE_14__["LifeguardRechargedMiddleware"],
            _services_customer_finacial_service__WEBPACK_IMPORTED_MODULE_25__["CustomerFinancialService"],
            _services_adjust_installments_service__WEBPACK_IMPORTED_MODULE_23__["AdjustInstallmentsService"],
            _organisms_payment_payment_view_model__WEBPACK_IMPORTED_MODULE_20__["PaymentViewModel"],
            _organisms_preapproval_preapproval_view_model__WEBPACK_IMPORTED_MODULE_21__["PreapprovalViewModel"],
            _organisms_preapproval_services_preapproved_service__WEBPACK_IMPORTED_MODULE_22__["PreapprovedService"],
            _organisms_approval_front_services_approval_front_service__WEBPACK_IMPORTED_MODULE_16__["ApprovalFrontService"],
            _organisms_approval_front_services_occupation_engine_service__WEBPACK_IMPORTED_MODULE_17__["OccupationEngineService"],
            _organisms_approval_front_services_your_money_engine_service__WEBPACK_IMPORTED_MODULE_18__["YourMoneyEngineService"],
            _nequi_apps_base_mobile_config_features_commons_services__WEBPACK_IMPORTED_MODULE_3__["ScreenshotSharingService"],
            _nequi_native_screenshot__WEBPACK_IMPORTED_MODULE_9__["ScreenshotPlugin"],
            _nequi_native_social_sharing__WEBPACK_IMPORTED_MODULE_10__["SocialSharingPlugin"],
            _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__["DynatraceService"],
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"],
                _nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_6__["FeaturesMoneyManagementModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_13__["ComponentsModule"],
                _lifeguard_recharged_routing_module__WEBPACK_IMPORTED_MODULE_27__["LifeguardRechargedRoutingModule"],
                _nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_8__["FeaturesProfileModule"],
                _organisms_credits_organism_module__WEBPACK_IMPORTED_MODULE_19__["CreditsOrganismModule"],
                _nequi_features_profile_my_info_presentation__WEBPACK_IMPORTED_MODULE_7__["MyInfoModule"],
                _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__["FeaturesCommonsModule"],
            ]] });
    return LifeguardRechargedModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_41__["ɵɵsetNgModuleScope"](LifeguardRechargedModule, { declarations: [_pages_home_home_page__WEBPACK_IMPORTED_MODULE_30__["HomePage"],
        _pages_preapproved_home_preapproved_home_page__WEBPACK_IMPORTED_MODULE_39__["PreapprovedHomePage"],
        _pages_payment_home_payment_home_page__WEBPACK_IMPORTED_MODULE_38__["PaymentHomePage"],
        _pages_payment_detail_payment_detail_page__WEBPACK_IMPORTED_MODULE_36__["PaymentDetailPage"],
        _pages_payment_guarantees_payment_guarantees_page__WEBPACK_IMPORTED_MODULE_37__["PaymentGuaranteesPage"],
        _pages_life_insurance_life_insurance_page__WEBPACK_IMPORTED_MODULE_34__["LifeInsurancePage"],
        _pages_ensure_loan_ensure_loan_page__WEBPACK_IMPORTED_MODULE_29__["EnsureLoanPage"],
        _pages_loan_info_loan_info_page__WEBPACK_IMPORTED_MODULE_35__["LoanInfoPage"],
        _pages_its_serious_its_serious_page__WEBPACK_IMPORTED_MODULE_31__["ItsSeriousPage"],
        _pages_terms_and_conditions_terms_and_conditions_page__WEBPACK_IMPORTED_MODULE_40__["TermsAndConditionsPage"],
        _pages_agreement_fga_agreement_fga_page__WEBPACK_IMPORTED_MODULE_28__["AgreementFgaPage"],
        _pages_know_us_better_engine_know_us_better_engine_page__WEBPACK_IMPORTED_MODULE_32__["KnowUsBetterEnginePage"],
        _pages_know_us_better_know_us_better_page__WEBPACK_IMPORTED_MODULE_33__["KnowUsBetterPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"],
        _nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_6__["FeaturesMoneyManagementModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_13__["ComponentsModule"],
        _lifeguard_recharged_routing_module__WEBPACK_IMPORTED_MODULE_27__["LifeguardRechargedRoutingModule"],
        _nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_8__["FeaturesProfileModule"],
        _organisms_credits_organism_module__WEBPACK_IMPORTED_MODULE_19__["CreditsOrganismModule"],
        _nequi_features_profile_my_info_presentation__WEBPACK_IMPORTED_MODULE_7__["MyInfoModule"],
        _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__["FeaturesCommonsModule"]] }); })();


/***/ }),

/***/ "FyzH":
/*!***************************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard-recharged/pages/life-insurance/life-insurance.config.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: LifeInsuranceConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifeInsuranceConfig", function() { return LifeInsuranceConfig; });
var LifeInsuranceConfig = Object.freeze({
    i18n: {
        lifeInsurance: {
            headerTitle: 'credits.lifeguard-recharged.life-insurance.header.title',
            headerDescription: 'credits.lifeguard-recharged.life-insurance.header.description',
            genderOptions: {
                female: {
                    label: 'credits.lifeguard-recharged.life-insurance.gender-options.female.label',
                    image: 'credits.lifeguard-recharged.life-insurance.gender-options.female.icon',
                },
                male: {
                    label: 'credits.lifeguard-recharged.life-insurance.gender-options.male.label',
                    image: 'credits.lifeguard-recharged.life-insurance.gender-options.male.icon',
                },
            },
            readyButton: 'credits.lifeguard-recharged.life-insurance.ready-button',
        },
    },
    goTo: {
        ensureLoan: '/admin/credits/lifeguard-recharged/ensure-loan',
    },
});


/***/ }),

/***/ "J4x1":
/*!*********************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard-recharged/pages/loan-info/loan-info.view-model.ts ***!
  \*********************************************************************************************************************/
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

/***/ "JSGi":
/*!*********************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard-recharged/pages/payment-home/payment-home.page.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: PaymentHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentHomePage", function() { return PaymentHomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/credits/core */ "42wy");
/* harmony import */ var _nequi_features_money_management_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/money-management/core */ "Qxr/");
/* harmony import */ var _nequi_native_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/native/calendar */ "at6U");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _nequi_utils_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nequi/utils/string */ "p6rB");
/* harmony import */ var _organisms_payment_payment_type__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../organisms/payment/payment.type */ "iwuA");
/* harmony import */ var _organisms_payment_payment_view_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../organisms/payment/payment.view-model */ "KTg/");
/* harmony import */ var _services_credit_info_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../services/credit-info.model */ "9FmH");
/* harmony import */ var _services_payment_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../services/payment.service */ "l8yf");
/* harmony import */ var _payment_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./payment.config */ "dpmc");
/* harmony import */ var _organisms_payment_payment_organism__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../organisms/payment/payment.organism */ "yDoo");

























function PaymentHomePage_app_payment_0_Template(rf, ctx) { if (rf & 1) {
    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-payment", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("showDetailPressed", function PaymentHomePage_app_payment_0_Template_app_payment_showDetailPressed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.onShowDetailPressed(); })("goToPaymentPressed", function PaymentHomePage_app_payment_0_Template_app_payment_goToPaymentPressed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.onPaymentPressed(); })("goToBackPressed", function PaymentHomePage_app_payment_0_Template_app_payment_goToBackPressed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.onBackPressed(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("messages", ctx_r0.config.i18n)("feePaymentMessage", ctx_r0.viewModel.feePaymentMessage)("config", ctx_r0.config)("showPaymentProgress", false)("showAmountNextInstallment", false)("showMovements", true);
} }
var PaymentHomePage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PaymentHomePage, _super);
    function PaymentHomePage(currencyPipe, datePipe, creditInfoModel, balanceInteractor, paymentService, creditEventsHandler, calendarPlugin, loggerInteractor, viewModel, injector) {
        var _this = _super.call(this, injector) || this;
        _this.currencyPipe = currencyPipe;
        _this.datePipe = datePipe;
        _this.creditInfoModel = creditInfoModel;
        _this.balanceInteractor = balanceInteractor;
        _this.paymentService = paymentService;
        _this.creditEventsHandler = creditEventsHandler;
        _this.calendarPlugin = calendarPlugin;
        _this.loggerInteractor = loggerInteractor;
        _this.viewModel = viewModel;
        _this.config = _payment_config__WEBPACK_IMPORTED_MODULE_14__["PaymentConfig"];
        _this.clickStatus = true;
        _this.viewModel.setConfig(_this.config);
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
                        return [2 /*return*/];
                }
            });
        });
    };
    PaymentHomePage.prototype.onBackPressed = function () {
        this.navigatorProvider.back();
    };
    PaymentHomePage.prototype.onShowDetailPressed = function () {
        this.navigatorProvider.navigateForward(this.config.routes.paymentDetail, {
            state: this.creditInfoModel.customerCreditInfo.credit,
        });
    };
    PaymentHomePage.prototype.onPaymentPressed = function () {
        if (this.availableMoney < this.viewModel.paymentControl.value) {
            this.paymentService.toastService.showError(this.errorMessage.noHaveAvailable);
            return;
        }
        this.viewModel.paymentAmount =
            this.viewModel.paymentAmount || Number(this.viewModel.paymentControl.value);
        this.onConfirmation();
    };
    PaymentHomePage.prototype.onTransactionSuccess = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.viewModel.selectedPayType === _organisms_payment_payment_type__WEBPACK_IMPORTED_MODULE_10__["PaymentType"].PAY_ALL)) return [3 /*break*/, 2];
                        this.deleteCalendarEvents();
                        this.creditEventsHandler.emitDisbursedEvent({
                            creditType: _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["CreditType"].LIFEGUARD_RECHARGED,
                            hasCredits: false,
                            isExpired: false,
                            isRescheduled: false,
                        });
                        return [4 /*yield*/, this.paymentService.showModalSuccessPayment(this.config.i18n.modal.payTodayAll)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                    case 2: return [4 /*yield*/, this.paymentService.showModalSuccessPayment(this.config.i18n.modal.payTodayFee)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PaymentHomePage.prototype.onTransactionFailed = function (error) {
        if (error instanceof _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["AsyncLoanPaymentException"]) {
            this.asyncLoanPaymentFailed();
        }
        if (_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__["NOT_BALANCE_AVAILABLE_ERRORS"].includes(error.code)) {
            throw error;
        }
        this.paymentService.toastService.showError(error.message);
    };
    PaymentHomePage.prototype.isInsufficientMoney = function (transaction) {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                if (typeof ((_a = transaction.pocket) === null || _a === void 0 ? void 0 : _a.amount) === this.config.typeOfNumber) {
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
                this.errorMessage = this.translateProvider.get(this.config.i18n.error);
                this.viewModel.getPageConfiguration(this.errorMessage, this.config.i18n.modal.overdueFee);
                return [2 /*return*/];
            });
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
                        this.paymentService.showConfirmationInfo(this.i18n.confirmation, this.viewModel.buildItems(this.i18n.confirmation, this.viewModel.pocketControl.value, this.currencyPipe, this.datePipe), Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_9__["createFormat"])(this.i18n.confirmation.footerDescription, [
                            this.datePipe.transform(this.viewModel.lastPayment),
                        ]), function () { return _this.makePayment(); });
                        return [3 /*break*/, 3];
                    case 1:
                        error_1 = _a.sent();
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
                result = this.translateProvider.get(this.config.i18n.content);
                this.i18n = Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_8__["toCamelCaseProperties"])(result);
                return [2 /*return*/];
            });
        });
    };
    PaymentHomePage.prototype.makePayment = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data, transaction;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                data = {
                    operatorType: _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["OperationCreditType"].PAYMENT,
                    productId: _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["CreditType"].LIFEGUARD_RECHARGED,
                    debenture: this.customerProduct.credit.debenture,
                    paymentType: _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["PaymentType"].LOAN,
                    rescheduleType: _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["RescheduleType"].INSTALLMENTS_NUMBER,
                };
                transaction = new _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["PaymentTransaction"]()
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
            cssClass: this.config.fullscreenModal.cssClass,
            cssClassButton: this.config.fullscreenModal.cssClassButton,
        };
        if (this.viewModel.paymentTime === _organisms_payment_payment_type__WEBPACK_IMPORTED_MODULE_10__["PaymentType"].PAYMENT &&
            this.viewModel.selectedPayType === _organisms_payment_payment_type__WEBPACK_IMPORTED_MODULE_10__["PaymentType"].PAY_ALL) {
            this.paymentService.showFullScreenModal(this.i18n.cardModal.payTodayAllAsyncPayment, fullscreenModalConfig);
        }
        if (this.viewModel.paymentTime === _organisms_payment_payment_type__WEBPACK_IMPORTED_MODULE_10__["PaymentType"].PAY_TODAY_FEE &&
            this.viewModel.selectedPayType === _organisms_payment_payment_type__WEBPACK_IMPORTED_MODULE_10__["PaymentType"].PAYMENT) {
            this.paymentService.showFullScreenModal(this.i18n.cardModal.payTodayAmountAsyncPayment, fullscreenModalConfig);
        }
        if (this.viewModel.paymentTime === _organisms_payment_payment_type__WEBPACK_IMPORTED_MODULE_10__["PaymentType"].PAY_TODAY_FEE &&
            this.viewModel.selectedPayType === _organisms_payment_payment_type__WEBPACK_IMPORTED_MODULE_10__["PaymentType"].PAY_TODAY_FEE) {
            this.paymentService.showFullScreenModal(this.i18n.cardModal.payTodayFeeAsyncPayment, fullscreenModalConfig);
        }
        if (this.viewModel.paymentTime === _organisms_payment_payment_type__WEBPACK_IMPORTED_MODULE_10__["PaymentType"].PAY_TODAY_FEE &&
            this.viewModel.selectedPayType === _organisms_payment_payment_type__WEBPACK_IMPORTED_MODULE_10__["PaymentType"].PAY_ALL) {
            this.paymentService.showFullScreenModal(this.i18n.cardModal.payTodayAllAsyncPayment, fullscreenModalConfig);
        }
    };
    PaymentHomePage.prototype.showMessageSuccess = function (i18n, customKey) {
        var payOverdueFeeKey = _organisms_payment_payment_type__WEBPACK_IMPORTED_MODULE_10__["PaymentType"].OVERDUE_FEE + "-" + _organisms_payment_payment_type__WEBPACK_IMPORTED_MODULE_10__["PaymentType"].OVERDUE_FEE;
        var _a = this.viewModel.credit.installment, total = _a.total, totalPaid = _a.totalPaid;
        if (payOverdueFeeKey === customKey && this.viewModel.installmentPending === total - totalPaid) {
            this.paymentService.showCardModal(this.i18n.cardModal.payOverdueLastFees);
            return;
        }
        if (payOverdueFeeKey === customKey && this.viewModel.installmentPending === 1) {
            this.i18n.cardModal.payOverdueFee.content = Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_9__["createFormat"])(this.i18n.cardModal.payOverdueFee.content, [this.datePipe.transform(this.viewModel.credit.installment.next.date)]);
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
            var creditEndDate, startDate, endDate, params, error_2;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        creditEndDate = this.viewModel.credit.endAt;
                        startDate = new Date(creditEndDate.getFullYear(), creditEndDate.getMonth(), creditEndDate.getDate() - 1);
                        endDate = new Date(creditEndDate.getFullYear(), creditEndDate.getMonth(), creditEndDate.getDate() + 1);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        params = {
                            title: this.translateProvider.get(this.config.i18n.calendarTitle),
                            startDate: startDate,
                            endDate: endDate,
                        };
                        return [4 /*yield*/, this.calendarPlugin.deleteEvent(params)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        this.loggerInteractor.error("[calendar-plugin] " + JSON.stringify(error_2));
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    PaymentHomePage.ɵfac = function PaymentHomePage_Factory(t) { return new (t || PaymentHomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_credit_info_model__WEBPACK_IMPORTED_MODULE_12__["CreditInfoModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_money_management_core__WEBPACK_IMPORTED_MODULE_6__["BalanceInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_payment_service__WEBPACK_IMPORTED_MODULE_13__["PaymentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["CreditEventsHandler"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_native_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarPlugin"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__["LoggerInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_organisms_payment_payment_view_model__WEBPACK_IMPORTED_MODULE_11__["PaymentViewModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"])); };
    PaymentHomePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PaymentHomePage, selectors: [["app-credits-lifeguard-recharged-payment"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "ion-page", "organismId", "payment", 3, "messages", "feePaymentMessage", "config", "showPaymentProgress", "showAmountNextInstallment", "showMovements", "showDetailPressed", "goToPaymentPressed", "goToBackPressed", 4, "ngIf"], ["organismId", "payment", 1, "ion-page", 3, "messages", "feePaymentMessage", "config", "showPaymentProgress", "showAmountNextInstallment", "showMovements", "showDetailPressed", "goToPaymentPressed", "goToBackPressed"]], template: function PaymentHomePage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, PaymentHomePage_app_payment_0_Template, 1, 6, "app-payment", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.customerProduct);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _organisms_payment_payment_organism__WEBPACK_IMPORTED_MODULE_15__["PaymentOrganism"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXltZW50LWhvbWUucGFnZS5zY3NzIn0= */"] });
    return PaymentHomePage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_4__["TransactionBasePage"]));



/***/ }),

/***/ "LM49":
/*!***************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard-recharged/pages/loan-info/loan-info.page.ts ***!
  \***************************************************************************************************************/
/*! exports provided: LoanInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanInfoPage", function() { return LoanInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_apps_base_mobile_config_features_commons_services_screenshot_sharing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/apps/base/mobile/config/features/commons/services/screenshot-sharing */ "VXOE");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_date__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/utils/date */ "tGfC");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _services_credit_info_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../services/credit-info.model */ "9FmH");
/* harmony import */ var _loan_info_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./loan-info.config */ "2BjH");
/* harmony import */ var _loan_info_view_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./loan-info.view-model */ "J4x1");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ui_src_lib_directives_nequi_currency_style_nequi_currency_style_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../../ui/src/lib/directives/nequi-currency-style/nequi-currency-style.directive */ "kVXI");
/* harmony import */ var _ui_src_lib_directives_message_manager_message_manager_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../../../ui/src/lib/directives/message-manager/message-manager.directive */ "68HU");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ui_src_lib_pipes_nequi_currency_nequi_currency_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../../../ui/src/lib/pipes/nequi-currency/nequi-currency.pipe */ "Vb1S");


























var _c0 = function (a1) { return { cssClass: "info-item__message", helpMessage: a1 }; };
var _c1 = function (a0, a1) { return { monthlyInterestRate: a0, normalAnualEfectiveRate: a1 }; };
var _c2 = function (a0) { return { insuranceMontly: a0 }; };
var _c3 = function () { return { cssClass: "info-item__message" }; };
var LoanInfoPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LoanInfoPage, _super);
    function LoanInfoPage(injector, translateProvider, toastService, creditInfoModel, route, screenshotSharingService, analyticsInteractor) {
        var _this = _super.call(this, injector) || this;
        _this.translateProvider = translateProvider;
        _this.toastService = toastService;
        _this.creditInfoModel = creditInfoModel;
        _this.route = route;
        _this.screenshotSharingService = screenshotSharingService;
        _this.analyticsInteractor = analyticsInteractor;
        _this.config = _loan_info_config__WEBPACK_IMPORTED_MODULE_11__["LoanInfoConfig"];
        _this.viewModel = new _loan_info_view_model__WEBPACK_IMPORTED_MODULE_12__["LoanInfoViewModel"]();
        return _this;
    }
    LoanInfoPage.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.showSaveToast();
                this.initData();
                return [2 /*return*/];
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
    LoanInfoPage.prototype.goKnowUsBetter = function () {
        this.setAnalyticsIntentionOfSummary();
        this.navigatorProvider.navigateForward(this.config.routes.knowUsBetter, {
            relativeTo: this.route,
        });
    };
    LoanInfoPage.prototype.initData = function () {
        var p100 = 100;
        this.viewModel.commissionPercentage =
            this.creditInfoModel.creditFeatureInfo.commissionPercentage / p100;
        this.viewModel.loanAmount = this.creditInfoModel.creditFeatureInfo.loanAmount;
        this.viewModel.monthlyFee = this.creditInfoModel.creditFeatureInfo.monthlyFee;
        this.viewModel.monthlyInsuranceAmount = this.creditInfoModel.loanPortfolioInfo.monthlyInsuranceAmount;
        this.viewModel.monthlyInterestRate =
            this.creditInfoModel.loanPortfolioInfo.monthlyInterestRate / p100;
        this.viewModel.normalAnualEfectiveRate =
            this.creditInfoModel.loanPortfolioInfo.normalAnualEfectiveRate / p100;
        this.viewModel.installment = this.creditInfoModel.creditFeatureInfo.installment;
        this.viewModel.expirationDateText = this.creditInfoModel.creditFeatureInfo.expirationDateText;
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
                                type: _nequi_ui__WEBPACK_IMPORTED_MODULE_7__["IconToastType"].INFO,
                                position: _nequi_ui__WEBPACK_IMPORTED_MODULE_7__["ToastPosition"].TOP,
                                cssClass: this.config.toast.cssClass,
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
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["AnalyticsType"].FACEBOOK,
            params: {
                eventName: this.config.analytics.events.intentionOfSummary.name,
            },
        });
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["AnalyticsType"].FIREBASE,
            params: { eventName: this.config.analytics.events.intentionOfSummary.name },
        });
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["AnalyticsType"].CLEVERTAP,
            params: {
                eventName: this.config.analytics.events.intentionOfSummary.name,
                eventProps: Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_9__["stringsArrayToObjectWithValues"])(this.config.analytics.events.intentionOfSummary.params.cleverTap, [Object(_nequi_utils_date__WEBPACK_IMPORTED_MODULE_8__["getFormattedDateTimes"])(), this.viewModel.loanAmount, this.viewModel.installment]),
            },
        });
    };
    LoanInfoPage.ɵfac = function LoanInfoPage_Factory(t) { return new (t || LoanInfoPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_6__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_7__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_credit_info_model__WEBPACK_IMPORTED_MODULE_10__["CreditInfoModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_apps_base_mobile_config_features_commons_services_screenshot_sharing__WEBPACK_IMPORTED_MODULE_3__["ScreenshotSharingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["AnalyticsInteractor"])); };
    LoanInfoPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoanInfoPage, selectors: [["app-loan-info-credits"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 73, vars: 82, consts: [[1, "nequi-header"], ["slot", "start"], ["id", "loan-info_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], ["slot", "end"], ["id", "loan-info_share_button", 3, "click"], ["slot", "icon-only", 3, "src"], ["id", "loan-info_save_button", 3, "click"], ["fullscreen", "true", 1, "ion-content--white", "ion-padding-horizontal"], [1, "nequi-title"], ["lines", "none", 1, "info-item", "info-item__margin-left-20"], [1, "info-item__content"], ["id", "loan-info_loan-amount_label", 1, "info-item__label"], ["id", "loan-info_loan-amount_text", 1, "info-item__loan-amount", 3, "nequiCurrencyStyle", "showDecimals"], [1, "info-item__margin-left-20"], ["lines", "none", 1, "info-item", 3, "nequiMessageManager"], ["id", "loan-info_loan-amount-with-commission_label", 1, "info-item__label"], ["id", "loan-info_loan-amount-with-commission_text", 1, "info-item__value", 3, "nequiCurrencyStyle", "showDecimals"], ["id", "loan-info_what-is-costs-you_label", 1, "info-item__label"], ["id", "loan-info_what-is-costs-you_text", 1, "info-item__value", 3, "nequiCurrencyStyle", "showDecimals"], ["id", "loan-info_how-much-is-the-interest_label", 1, "info-item__label"], ["id", "loan-info_how-much-is-the-interest_text", 1, "info-item__value"], ["id", "loan-info_monthly-insurance-amount_label", 1, "info-item__label"], ["id", "loan-info_monthly-insurance-amount_text", 1, "info-item__value", 3, "nequiCurrencyStyle", "showDecimals"], ["id", "loan-info_expired-date_label", 1, "info-item__label"], ["id", "loan-info_expired-date_text", 1, "info-item__value"], [1, "nequi-footer", "ion-no-border"], [1, "margin-bottom-8"], [1, "info-item__footer-message"], ["id", "loan-info_continue_button", "expand", "block", "color", "guayaba", 1, "nequi-footer__button", 3, "click"]], template: function LoanInfoPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoanInfoPage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-buttons", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoanInfoPage_Template_ion_button_click_6_listener() { return ctx.shareScreenshoot(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "ion-icon", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoanInfoPage_Template_ion_button_click_9_listener() { return ctx.saveScreenshot(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "ion-icon", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-content", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-item", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "ion-text", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-list", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-item", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ion-label", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "ion-text", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ion-item", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](31, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ion-label", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](35, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "ion-text", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "ion-item", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](38, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "ion-label", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](42, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "ion-text", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](45, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](46, "percent");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](47, "percent");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "ion-item", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](49, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](50, "currency");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "ion-label", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](54, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "ion-text", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "ion-item", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "ion-label", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](60, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "ion-text", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "ion-footer", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "ion-row", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "ion-col");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](69, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "ion-button", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoanInfoPage_Template_ion_button_click_70_listener() { return ctx.goKnowUsBetter(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](72, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 26, ctx.config.i18n.loanInfo.shareIconButton));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 28, ctx.config.i18n.loanInfo.saveIconButton));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 30, ctx.config.i18n.loanInfo.headerTitle), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 32, ctx.config.i18n.loanInfo.loanAmountLabel), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nequiCurrencyStyle", ctx.viewModel.loanAmount)("showDecimals", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nequiMessageManager", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](68, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 34, ctx.config.i18n.loanInfo.loanAmountWithCommissionsInfoMessage)));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](28, 36, ctx.config.i18n.loanInfo.loanAmountWithCommissionsLabel), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nequiCurrencyStyle", ctx.viewModel.loanAmount + ctx.viewModel.loanAmount * ctx.viewModel.commissionPercentage)("showDecimals", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nequiMessageManager", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](70, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](31, 38, ctx.config.i18n.loanInfo.whatItCostsYouInfoMessage)));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](35, 40, ctx.config.i18n.loanInfo.whatItCostsYouLabel), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nequiCurrencyStyle", ctx.viewModel.monthlyFee - ctx.viewModel.loanAmount)("showDecimals", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nequiMessageManager", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](72, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](38, 42, ctx.config.i18n.loanInfo.howMuchIsTheInterestInfoMessage)));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](42, 44, ctx.config.i18n.loanInfo.howMuchIsTheInterestLabel), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](45, 46, ctx.config.i18n.loanInfo.howMuchIsTheInterestValue, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](74, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](46, 49, ctx.viewModel.monthlyInterestRate, ".0-2"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](47, 52, ctx.viewModel.normalAnualEfectiveRate, ".0-2"))), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nequiMessageManager", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](79, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](49, 55, ctx.config.i18n.loanInfo.insuranceCostPerMonthInfoMessage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](77, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](50, 58, ctx.viewModel.monthlyInsuranceAmount)))));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](54, 60, ctx.config.i18n.loanInfo.insuranceCostPerMonthLabel), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nequiCurrencyStyle", ctx.viewModel.monthlyInsuranceAmount)("showDecimals", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nequiMessageManager", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](81, _c3));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](60, 62, ctx.config.i18n.loanInfo.expiredDateLabel), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.viewModel.expirationDateText, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](69, 64, ctx.config.i18n.loanInfo.helpMessage), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](72, 66, ctx.config.i18n.loanInfo.continueButton), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_13__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["IonText"], _ui_src_lib_directives_nequi_currency_style_nequi_currency_style_directive__WEBPACK_IMPORTED_MODULE_14__["NequiCurrencyStyleDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["IonList"], _ui_src_lib_directives_message_manager_message_manager_directive__WEBPACK_IMPORTED_MODULE_15__["MessageManagerDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["IonCol"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["PercentPipe"], _ui_src_lib_pipes_nequi_currency_nequi_currency_pipe__WEBPACK_IMPORTED_MODULE_18__["NequiCurrencyPipe"]], styles: [".info-item[_ngcontent-%COMP%]  {\n  --padding-top: 10px;\n  --padding-bottom: 0px;\n  --padding-start: 0px;\n}\n.info-item__content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: flex-start;\n  gap: 5px;\n}\n.info-item__label[_ngcontent-%COMP%] {\n  color: var(--gray-60);\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 17px;\n}\n.info-item__loan-amount[_ngcontent-%COMP%] {\n  color: var(--medianoche);\n  font-style: normal;\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 29px;\n}\n.info-item__value[_ngcontent-%COMP%] {\n  color: var(--medianoche);\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 19px;\n}\n.info-item__message[_ngcontent-%COMP%] {\n  margin-top: -10px;\n}\n.info-item__footer-message[_ngcontent-%COMP%] {\n  padding: 4px 16px;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 14px;\n  color: var(--gray-alert-message);\n}\n.info-item__margin-left-20[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n#loan-info_save_button[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvbG9hbi1pbmZvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtBQUFKO0FBR0U7RUFDRSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLFFBQUE7QUFESjtBQUlFO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBRko7QUFLRTtFQUNFLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUhKO0FBTUU7RUFDRSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFKSjtBQU9FO0VBQ0UsaUJBQUE7QUFMSjtBQVFFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7QUFOSjtBQVNFO0VBQ0UsaUJBQUE7QUFQSjtBQVdBO0VBQ0UsYUFBQTtBQVJGIiwiZmlsZSI6ImxvYW4taW5mby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5mby1pdGVtIHtcbiAgJjo6bmctZGVlcCB7XG4gICAgLS1wYWRkaW5nLXRvcDogMTBweDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIH1cblxuICAmX19jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBnYXA6IDVweDtcbiAgfVxuXG4gICZfX2xhYmVsIHtcbiAgICBjb2xvcjogdmFyKC0tZ3JheS02MCk7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICB9XG5cbiAgJl9fbG9hbi1hbW91bnQge1xuICAgIGNvbG9yOiB2YXIoLS1tZWRpYW5vY2hlKTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI5cHg7XG4gIH1cblxuICAmX192YWx1ZSB7XG4gICAgY29sb3I6IHZhcigtLW1lZGlhbm9jaGUpO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMTlweDtcbiAgfVxuXG4gICZfX21lc3NhZ2Uge1xuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICB9XG5cbiAgJl9fZm9vdGVyLW1lc3NhZ2Uge1xuICAgIHBhZGRpbmc6IDRweCAxNnB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICBjb2xvcjogdmFyKC0tZ3JheS1hbGVydC1tZXNzYWdlKTtcbiAgfVxuXG4gICZfX21hcmdpbi1sZWZ0LTIwIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgfVxufVxuXG4jbG9hbi1pbmZvX3NhdmVfYnV0dG9uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbiJdfQ== */"] });
    return LoanInfoPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__["FeatureBasePage"]));



/***/ }),

/***/ "N71J":
/*!***************************************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard-recharged/pages/terms-and-conditions/terms-and-conditions.config.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: TermsAndConditionsConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsAndConditionsConfig", function() { return TermsAndConditionsConfig; });
var TermsAndConditionsConfig = Object.freeze({
    i18n: {
        messages: 'credits.lifeguard-recharged.terms-and-conditions',
        messageToastError: 'credits.lifeguard-recharged.terms-and-conditions.message-toast-error',
        logs: 'credits.lifeguard-recharged.terms-and-conditions.logs',
    },
    goTo: {
        agreementFga: '/admin/credits/lifeguard-recharged/agreement-fga',
    },
});


/***/ }),

/***/ "NKId":
/*!***************************************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard-recharged/pages/know-us-better-engine/know-us-better-engine.page.ts ***!
  \***************************************************************************************************************************************/
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
/* harmony import */ var _know_us_better_engine_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./know-us-better-engine.config */ "25Ct");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");










var _c0 = ["nequiApprovalFrontModulesList"];
var KnowUsBetterEnginePage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(KnowUsBetterEnginePage, _super);
    function KnowUsBetterEnginePage(route, injector) {
        var _this = _super.call(this, injector) || this;
        _this.route = route;
        _this.config = _know_us_better_engine_config__WEBPACK_IMPORTED_MODULE_5__["KnowUsBetterEngineConfig"];
        return _this;
    }
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
    KnowUsBetterEnginePage.ɵfac = function KnowUsBetterEnginePage_Factory(t) { return new (t || KnowUsBetterEnginePage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"])); };
    KnowUsBetterEnginePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: KnowUsBetterEnginePage, selectors: [["app-credits-know-us-better-engine"]], viewQuery: function KnowUsBetterEnginePage_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.approvalFrontOrganism = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 3, consts: [["organismId", "lifeguard-recharged", 1, "ion-page", 3, "messages", "completed", "nextButtonCliked", "goBackCliked"], ["nequiApprovalFrontModulesList", ""]], template: function KnowUsBetterEnginePage_Template(rf, ctx) { if (rf & 1) {
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

/***/ "P5VM":
/*!*************************************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard-recharged/pages/terms-and-conditions/terms-and-conditions.page.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: TermsAndConditionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsAndConditionsPage", function() { return TermsAndConditionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _services_credit_info_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/credit-info.model */ "9FmH");
/* harmony import */ var _terms_and_conditions_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./terms-and-conditions.config */ "N71J");
/* harmony import */ var _organisms_contract_contract_organism__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../organisms/contract/contract.organism */ "Lnzr");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");















var TermsAndConditionsPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TermsAndConditionsPage, _super);
    function TermsAndConditionsPage(injector, translateProvider, route, creditInfoModel, toastService) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.translateProvider = translateProvider;
        _this.route = route;
        _this.creditInfoModel = creditInfoModel;
        _this.toastService = toastService;
        _this.config = _terms_and_conditions_config__WEBPACK_IMPORTED_MODULE_7__["TermsAndConditionsConfig"];
        return _this;
    }
    TermsAndConditionsPage.prototype.ngOnInit = function () {
        this.termsAndConditions = this.creditInfoModel.agreement.agreement;
    };
    TermsAndConditionsPage.prototype.acceptAgreement = function () {
        if (window.navigator.onLine) {
            this.goToAgreementFga();
            return;
        }
        var message = this.translateProvider.get(this.config.i18n.messageToastError);
        this.toastService.showError(message);
    };
    TermsAndConditionsPage.prototype.goToAgreementFga = function () {
        this.navigatorProvider.navigateForward(this.config.goTo.agreementFga, {
            relativeTo: this.route,
        });
    };
    TermsAndConditionsPage.ɵfac = function TermsAndConditionsPage_Factory(t) { return new (t || TermsAndConditionsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_4__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_credit_info_model__WEBPACK_IMPORTED_MODULE_6__["CreditInfoModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_5__["ToastService"])); };
    TermsAndConditionsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TermsAndConditionsPage, selectors: [["app-credits-lifeguard-recharged-terms-and-conditions"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 4, consts: [[1, "ion-page", 3, "messages", "agreement", "accepted"]], template: function TermsAndConditionsPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-contract-organism", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("accepted", function TermsAndConditionsPage_Template_app_contract_organism_accepted_0_listener() { return ctx.acceptAgreement(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("messages", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, ctx.config.i18n.messages))("agreement", ctx.termsAndConditions);
        } }, directives: [_organisms_contract_contract_organism__WEBPACK_IMPORTED_MODULE_8__["ContractOrganism"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"]], encapsulation: 2 });
    return TermsAndConditionsPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__["FeatureBasePage"]));



/***/ }),

/***/ "Pxpp":
/*!***************************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard-recharged/pages/know-us-better/know-us-better.config.ts ***!
  \***************************************************************************************************************************/
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
        buttonReady: 'credits.know-us-better.buttonReady',
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
        currentUrl: '/admin/credits/lifeguard-recharged/know-us-better',
        backpack: '/admin/dashboard',
        thisGotSerious: '/admin/credits/lifeguard-recharged/its-serious',
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
            link: '/admin/credits/lifeguard-recharged/profile/my-info/document-guide',
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
            link: '/admin/credits/lifeguard-recharged/profile/my-info/address',
            status: _nequi_ui__WEBPACK_IMPORTED_MODULE_2__["NavButtonCardStatus"].INACTIVE,
        },
        {
            id: _nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_1__["ModuleId"].WHAT_DO_YOU_DO,
            leftImage: 'assets/images/propeller/suitcase.svg',
            title: 'credits.know-us-better.content.what-do-you-do.title',
            description: 'credits.know-us-better.content.what-do-you-do.description',
            link: '/admin/credits/lifeguard-recharged/profile/my-info/occupation',
            status: _nequi_ui__WEBPACK_IMPORTED_MODULE_2__["NavButtonCardStatus"].INACTIVE,
        },
        {
            id: _nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_1__["ModuleId"].YOUR_MONEY,
            leftImage: 'assets/images/propeller/money.svg',
            title: 'credits.know-us-better.content.your-money.title',
            description: 'credits.know-us-better.content.your-money.description',
            link: '/admin/credits/lifeguard-recharged/profile/account/income-and-expenses',
            status: _nequi_ui__WEBPACK_IMPORTED_MODULE_2__["NavButtonCardStatus"].INACTIVE,
        },
    ],
});


/***/ }),

/***/ "Smg2":
/*!*********************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard-recharged/pages/ensure-loan/ensure-loan.config.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: EnsureLoanConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnsureLoanConfig", function() { return EnsureLoanConfig; });
var EnsureLoanConfig = Object.freeze({
    i18n: {
        insuranceWithNequiBottomSheet: 'credits.ensure-loan.bottom-sheet',
        ensureLoan: {
            content: 'credits.lifeguard-recharged.ensure-loan',
            headerTitle: 'credits.lifeguard-recharged.ensure-loan.header.title',
            ensureLoanWithNequi: {
                title: 'credits.lifeguard-recharged.ensure-loan.ensure-loan-with-nequi.title',
                description: 'credits.lifeguard-recharged.ensure-loan.ensure-loan-with-nequi.description',
                tagImg: 'credits.lifeguard-recharged.ensure-loan.ensure-loan-with-nequi.tag-img',
                tagLabel: 'credits.lifeguard-recharged.ensure-loan.ensure-loan-with-nequi.tag-label',
            },
            ensureLoanWithAnother: {
                title: 'credits.lifeguard-recharged.ensure-loan.ensure-loan-with-another.title',
                description: 'credits.lifeguard-recharged.ensure-loan.ensure-loan-with-another.description',
                tagImg: 'credits.lifeguard-recharged.ensure-loan.ensure-loan-with-another.tag-img',
                tagLabel: 'credits.lifeguard-recharged.ensure-loan.ensure-loan-with-another.tag-label',
            },
            moreInfoButton: 'credits.lifeguard-recharged.ensure-loan.more-info-button',
        },
        logs: 'credits.lifeguard-recharged.ensure-loan.logs',
    },
    insuranceCarrier: 'Suramericana de Seguros S.A.',
    goTo: {
        loanInfo: '/admin/credits/lifeguard-recharged/loan-info',
        sendYourPolicy: 'mailto:enviatupoliza@nequi.co',
    },
    idSelectors: {
        continueButtonId: 'info-list_continue_button',
        chooseButtonId: 'info-list_choose_button',
        policyButtonId: 'info-list_policy_button',
    },
});


/***/ }),

/***/ "TAOr":
/*!*****************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard-recharged/pages/home/home.page.ts ***!
  \*****************************************************************************************************/
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("customerCredits", ctx_r0.lifeguardRechargedData);
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
        this.lifeguardRechargedData = this.creditInfoModel.customerCreditInfo;
    };
    HomePage.ɵfac = function HomePage_Factory(t) { return new (t || HomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_credit_info_model__WEBPACK_IMPORTED_MODULE_0__["CreditInfoModel"])); };
    HomePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomePage, selectors: [["app-credits-lifeguard-recharged"]], decls: 1, vars: 1, consts: [["class", "ion-page", "organismId", "lifeguard-recharged", 3, "customerCredits", 4, "ngIf"], ["organismId", "lifeguard-recharged", 1, "ion-page", 3, "customerCredits"]], template: function HomePage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomePage_app_preapproval_0_Template, 1, 1, "app-preapproval", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isPreapproval);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _organisms_preapproval_preapproval_organism__WEBPACK_IMPORTED_MODULE_3__["PreapprovalOrganism"]], styles: [".credits-lifeguard-recharged__footer[_ngcontent-%COMP%] {\n  min-height: 134px;\n}\n.credits-lifeguard-recharged__footer-message[_ngcontent-%COMP%] {\n  padding: 16px;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 14px;\n  color: var(--gray-alert-message);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxpQkFBQTtBQUFKO0FBRUk7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0FBQU4iLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JlZGl0cy1saWZlZ3VhcmQtcmVjaGFyZ2VkIHtcbiAgJl9fZm9vdGVyIHtcbiAgICBtaW4taGVpZ2h0OiAxMzRweDtcblxuICAgICYtbWVzc2FnZSB7XG4gICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgICAgY29sb3I6IHZhcigtLWdyYXktYWxlcnQtbWVzc2FnZSk7XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
    return HomePage;
}());



/***/ }),

/***/ "UcNE":
/*!*************************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard-recharged/pages/know-us-better/know-us-better.page.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: KnowUsBetterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnowUsBetterPage", function() { return KnowUsBetterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/features/credits/core */ "42wy");
/* harmony import */ var _nequi_features_profile_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/features/profile/core */ "w8sc");
/* harmony import */ var _nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nequi/features/profile/presentation */ "cLcF");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _config_credits_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../config/credits.config */ "M3Ap");
/* harmony import */ var _services_credit_logger_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../services/credit-logger.service */ "2ibl");
/* harmony import */ var _services_customer_finacial_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../services/customer-finacial.service */ "uuzL");
/* harmony import */ var _know_us_better_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./know-us-better.config */ "Pxpp");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../../../ui/src/lib/directives/animate-title-on-scroll/animate-title-on-scroll.directive */ "qbWi");
/* harmony import */ var _profile_src_presentation_organisms_module_list_module_list_organism__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../../profile/src/presentation/organisms/module-list/module-list.organism */ "RZDl");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");































var _c0 = ["nequiLifeguardRechargedKnowUsBetterModuleList"];
var KnowUsBetterPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(KnowUsBetterPage, _super);
    function KnowUsBetterPage(translateProvider, creditLoggerService, moduleInfoInteractor, loggerInteractor, toastService, alertService, configCreditProvider, userInfoProvider, currencyPipe, customerFinancialService, route, loadingService, injector) {
        var _this = _super.call(this, injector) || this;
        _this.translateProvider = translateProvider;
        _this.creditLoggerService = creditLoggerService;
        _this.moduleInfoInteractor = moduleInfoInteractor;
        _this.loggerInteractor = loggerInteractor;
        _this.toastService = toastService;
        _this.alertService = alertService;
        _this.configCreditProvider = configCreditProvider;
        _this.userInfoProvider = userInfoProvider;
        _this.currencyPipe = currencyPipe;
        _this.customerFinancialService = customerFinancialService;
        _this.route = route;
        _this.loadingService = loadingService;
        _this.config = _know_us_better_config__WEBPACK_IMPORTED_MODULE_15__["KnowUsBetterConfig"];
        return _this;
    }
    KnowUsBetterPage.prototype.goToHelp = function () {
        Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_11__["openUrl"])(this.config.goTo.help);
    };
    KnowUsBetterPage.prototype.onCompletedRequestData = function (modules) {
        this.moduleListData = modules;
        var incomeExpenses = modules.find(function (module) { return module.type === _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["ModuleCode"].INCOME_EXPENSES; })
            .data;
        if (incomeExpenses) {
            this.setCreditUserInfoAsset(incomeExpenses);
        }
        if (this.canDoSarlaft()) {
            this.setLog();
        }
    };
    KnowUsBetterPage.prototype.onCompletedModuleData = function (module) {
        if (module.type === _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["ModuleCode"].LOCATION) {
            this.locationCompletedHandler(module.data);
        }
        if (module.type === _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["ModuleCode"].OCCUPATION) {
            this.occupationCompletedHandler(module.data);
        }
        if (module.type === _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["ModuleCode"].INCOME_EXPENSES) {
            this.incomeAndExpensesCompletedHandler(module.data);
        }
    };
    KnowUsBetterPage.prototype.goToThisGotSerious = function () {
        this.navigatorProvider.navigateForward(this.config.goTo.thisGotSerious, {
            relativeTo: this.route,
        });
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
                                code: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["ModuleCode"].INCOME_EXPENSES,
                                data: { key: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["ModuleName"].INCOME_EXPENSES, value: incomeAndExpenses },
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
                                code: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["ModuleCode"].LOCATION,
                                data: { key: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["ModuleName"].LOCATION, value: location },
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
                                code: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["ModuleCode"].OCCUPATION,
                                data: { key: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["ModuleName"].OCCUPATION, value: occupation },
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
        var documentData = this.moduleListOrganism.getModuleData(this.moduleListData, _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["ModuleCode"].CAPTURE_DOCUMENT);
        this.locationData = this.moduleListOrganism.getModuleData(this.moduleListData, _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["ModuleCode"].LOCATION);
        this.occupationData = this.moduleListOrganism.getModuleData(this.moduleListData, _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["ModuleCode"].OCCUPATION);
        this.incomeAndExpensesData = this.moduleListOrganism.getModuleData(this.moduleListData, _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["ModuleCode"].INCOME_EXPENSES);
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
                        if (!_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__["SARLAFT_LOCKS"].includes(error.code)) return [3 /*break*/, 2];
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
        var barcodeInfo = this.moduleListOrganism.getModuleData(this.moduleListData, _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["ModuleCode"].BARCODE_INFORMATION);
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
            flowType: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["FlowType"].LIFEGUARD_RECHARGED,
            i18nKey: this.config.i18n.logs,
            params: params,
        });
    };
    KnowUsBetterPage.ɵfac = function KnowUsBetterPage_Factory(t) { return new (t || KnowUsBetterPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_6__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_credit_logger_service__WEBPACK_IMPORTED_MODULE_13__["CreditLoggerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_profile_core__WEBPACK_IMPORTED_MODULE_8__["ModuleInfoInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["LoggerInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_10__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_config_credits_config__WEBPACK_IMPORTED_MODULE_12__["ConfigCreditProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_6__["UserInfoProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_customer_finacial_service__WEBPACK_IMPORTED_MODULE_14__["CustomerFinancialService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_10__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"])); };
    KnowUsBetterPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: KnowUsBetterPage, selectors: [["app-credits-know-us-better"]], viewQuery: function KnowUsBetterPage_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.moduleListOrganism = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 22, vars: 14, consts: [[1, "nequi-header", "nequi-header--white"], ["slot", "start"], ["id", "know-us-better_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], [1, "nequi-header__title", "ion-text-start"], ["slot", "end"], ["id", "know-us-better_go-help_button", 3, "click"], ["slot", "icon-only", "name", "help-outline"], ["fullscreen", "true", "appAnimateTitleOnScroll", "", "scrollEvents", "true", 1, "ion-content--white", "ion-padding-horizontal"], [1, "nequi-title"], ["organismId", "know-us-better", 3, "items", "moduleList", "navOrder", "addressFormat", "currentUrl", "completed", "completedRequestData"], ["nequiLifeguardRechargedKnowUsBetterModuleList", ""], [1, "nequi-footer", "ion-no-border"], [1, "ion-text-center"], ["id", "know_us_better_ready_button", "expand", "block", "color", "guayaba", 1, "nequi-footer__button", 3, "click"]], template: function KnowUsBetterPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function KnowUsBetterPage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-title", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-buttons", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function KnowUsBetterPage_Template_ion_button_click_9_listener() { return ctx.goToHelp(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "ion-icon", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-content", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "nequi-profile-module-list", 10, 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("completed", function KnowUsBetterPage_Template_nequi_profile_module_list_completed_15_listener($event) { return ctx.onCompletedModuleData($event); })("completedRequestData", function KnowUsBetterPage_Template_nequi_profile_module_list_completedRequestData_15_listener($event) { return ctx.onCompletedRequestData($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "ion-footer", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "ion-toolbar", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "ion-button", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function KnowUsBetterPage_Template_ion_button_click_19_listener() { return ctx.goToThisGotSerious(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 8, ctx.config.i18n.headerTitle), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 10, ctx.config.i18n.headerTitle), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("items", ctx.config.navButtons)("moduleList", ctx.config.moduleList)("navOrder", ctx.config.navOrder)("addressFormat", ctx.config.i18n.addressText)("currentUrl", ctx.config.goTo.currentUrl);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](21, 12, ctx.config.i18n.buttonReady), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonContent"], _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_17__["AnimateTitleOnScrollDirective"], _profile_src_presentation_organisms_module_list_module_list_organism__WEBPACK_IMPORTED_MODULE_18__["ModuleListOrganism"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonFooter"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__["TranslatePipe"]], encapsulation: 2 });
    return KnowUsBetterPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__["FeatureBasePage"]));



/***/ }),

/***/ "V4/G":
/*!*******************************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard-recharged/pages/preapproved-home/preapproved-home.config.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: LifeguardRechargedConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifeguardRechargedConfig", function() { return LifeguardRechargedConfig; });
var LifeguardRechargedConfig = Object.freeze({
    i18n: {
        preapproval: {
            headerTitle: 'credits.lifeguard-recharged.home.preapproval.header.title',
            amount: {
                title: 'credits.lifeguard-recharged.home.preapproval.amount.title',
                min: 'credits.lifeguard-recharged.home.preapproval.amount.min',
            },
            detail: {
                subtitle: 'credits.lifeguard-recharged.home.preapproval.detail.subtitle',
                monthlyPayment: 'credits.lifeguard-recharged.home.preapproval.detail.monthly-payment-amount',
            },
            footer: {
                readyButtonText: 'credits.lifeguard-recharged.home.preapproval.footer.ready-button.text',
                authorization: 'credits.lifeguard-recharged.home.preapproval.footer.authorization',
                conditionButtonText: 'credits.lifeguard-recharged.home.preapproval.footer.condition-button.text',
            },
        },
    },
    routes: {
        paymentGuarantees: '/admin/credits/lifeguard-recharged/payment-guarantees',
    },
    logs: {
        amount: 'credits.home.logs.amount',
    },
    timeOut: 1000,
});


/***/ }),

/***/ "VGeY":
/*!******************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard-recharged/config/lifeguard-recharged.config.ts ***!
  \******************************************************************************************************************/
/*! exports provided: LifeguardRechargedConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifeguardRechargedConfig", function() { return LifeguardRechargedConfig; });
var config = {
    i18n: {
        moduleKey: 'credits',
        contractModuleKey: 'credits/contract',
    },
    applicationData: {
        isTimeToPay: 'lifeguard-recharged.is-time-to-pay',
        homeIsShowFirstMessage: 'lifeguard-recharged.payment-home-is-show-first-message',
        showMovementsModal: 'lifeguard-recharged.movements-show-modal',
    },
};
var LifeguardRechargedConfig = Object.freeze(config);


/***/ }),

/***/ "WC+j":
/*!*****************************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard-recharged/pages/preapproved-home/preapproved-home.page.ts ***!
  \*****************************************************************************************************************************/
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
/* harmony import */ var _preapproved_home_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./preapproved-home.config */ "V4/G");




















function PreapprovedHomePage_app_preapproval_0_Template(rf, ctx) { if (rf & 1) {
    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-preapproval", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nextButtonCliked", function PreapprovedHomePage_app_preapproval_0_Template_app_preapproval_nextButtonCliked_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.goToPaymentGuarantees(); })("goBackCliked", function PreapprovedHomePage_app_preapproval_0_Template_app_preapproval_goBackCliked_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showViewDetail", true)("messages", ctx_r0.config.i18n.preapproval)("financingAmount", ctx_r0.lifeguardRechargedData.preapproved.minAmount)("customerCredits", ctx_r0.lifeguardRechargedData);
} }
var PreapprovedHomePage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PreapprovedHomePage, _super);
    function PreapprovedHomePage(injector, creditInfoModel, viewModel, route, creditLoggerService, currencyPipe, approvalFrontViewModel) {
        var _this = _super.call(this, injector) || this;
        _this.creditInfoModel = creditInfoModel;
        _this.viewModel = viewModel;
        _this.route = route;
        _this.creditLoggerService = creditLoggerService;
        _this.currencyPipe = currencyPipe;
        _this.approvalFrontViewModel = approvalFrontViewModel;
        _this.isPreapproval = true;
        _this.config = _preapproved_home_config__WEBPACK_IMPORTED_MODULE_11__["LifeguardRechargedConfig"];
        return _this;
    }
    PreapprovedHomePage.prototype.ngOnInit = function () {
        this.initPage();
    };
    PreapprovedHomePage.prototype.ngOnDestroy = function () {
        this.approvalFrontViewModel.resetValue();
    };
    PreapprovedHomePage.prototype.goToPaymentGuarantees = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.saveLog();
                this.navigatorProvider.navigateForward(this.config.routes.paymentGuarantees, {
                    relativeTo: this.route,
                });
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
    PreapprovedHomePage.prototype.initPage = function () {
        this.lifeguardRechargedData = this.creditInfoModel.customerCreditInfo;
    };
    PreapprovedHomePage.prototype.saveLog = function () {
        this.creditLoggerService.save({
            flowType: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["FlowType"].LIFEGUARD_RECHARGED,
            i18nKey: this.config.logs.amount,
            params: [
                this.currencyPipe.transform(this.viewModel.maxAmount),
                this.currencyPipe.transform(this.creditInfoModel.creditFeatureInfo.loanAmount),
                this.creditInfoModel.creditFeatureInfo.installment.toString(),
                this.currencyPipe.transform(this.creditInfoModel.creditFeatureInfo.monthlyFee),
            ],
        });
    };
    PreapprovedHomePage.ɵfac = function PreapprovedHomePage_Factory(t) { return new (t || PreapprovedHomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_credit_info_model__WEBPACK_IMPORTED_MODULE_9__["CreditInfoModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_organisms_preapproval_preapproval_view_model__WEBPACK_IMPORTED_MODULE_8__["PreapprovalViewModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_credit_logger_service__WEBPACK_IMPORTED_MODULE_10__["CreditLoggerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_organisms_approval_front_approval_front_view_model__WEBPACK_IMPORTED_MODULE_6__["ApprovalFrontViewModel"])); };
    PreapprovedHomePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PreapprovedHomePage, selectors: [["app-credits-lifeguard-recharged"]], viewQuery: function PreapprovedHomePage_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_organisms_preapproval_preapproval_organism__WEBPACK_IMPORTED_MODULE_7__["PreapprovalOrganism"], 1);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.preaprovalOrganism = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "ion-page", "organismId", "lifeguard-recharged", 3, "showViewDetail", "messages", "financingAmount", "customerCredits", "nextButtonCliked", "goBackCliked", 4, "ngIf"], ["organismId", "lifeguard-recharged", 1, "ion-page", 3, "showViewDetail", "messages", "financingAmount", "customerCredits", "nextButtonCliked", "goBackCliked"]], template: function PreapprovedHomePage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, PreapprovedHomePage_app_preapproval_0_Template, 1, 4, "app-preapproval", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.lifeguardRechargedData);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _organisms_preapproval_preapproval_organism__WEBPACK_IMPORTED_MODULE_7__["PreapprovalOrganism"]], styles: [".credits-lifeguard-recharged__footer[_ngcontent-%COMP%] {\n  min-height: 134px;\n}\n.credits-lifeguard-recharged__footer-message[_ngcontent-%COMP%] {\n  padding: 16px;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 14px;\n  color: var(--gray-alert-message);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvcHJlYXBwcm92ZWQtaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxpQkFBQTtBQUFKO0FBRUk7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0FBQU4iLCJmaWxlIjoicHJlYXBwcm92ZWQtaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JlZGl0cy1saWZlZ3VhcmQtcmVjaGFyZ2VkIHtcbiAgJl9fZm9vdGVyIHtcbiAgICBtaW4taGVpZ2h0OiAxMzRweDtcblxuICAgICYtbWVzc2FnZSB7XG4gICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgICAgY29sb3I6IHZhcigtLWdyYXktYWxlcnQtbWVzc2FnZSk7XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
    return PreapprovedHomePage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__["FeatureBasePage"]));



/***/ }),

/***/ "XuzY":
/*!*******************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard-recharged/lifeguard-recharged-routing.module.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: LifeguardRechargedRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifeguardRechargedRoutingModule", function() { return LifeguardRechargedRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _middlewares_base_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../middlewares/base.config */ "lvuB");
/* harmony import */ var _middlewares_base_middleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../middlewares/base.middleware */ "Jqih");
/* harmony import */ var _middlewares_lifeguard_recharged_middleware__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../middlewares/lifeguard-recharged.middleware */ "4U8j");
/* harmony import */ var _organisms_approval_front_pages_occupation_engine_occupation_engine_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../organisms/approval-front/pages/occupation-engine/occupation-engine.page */ "BkOq");
/* harmony import */ var _organisms_approval_front_pages_your_money_engine_your_money_engine_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../organisms/approval-front/pages/your-money-engine/your-money-engine.page */ "xpCB");
/* harmony import */ var _config_lifeguard_recharged_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./config/lifeguard-recharged.config */ "VGeY");
/* harmony import */ var _pages_agreement_fga_agreement_fga_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/agreement-fga/agreement-fga.page */ "eLxO");
/* harmony import */ var _pages_ensure_loan_ensure_loan_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/ensure-loan/ensure-loan.page */ "oPib");
/* harmony import */ var _pages_home_home_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/home/home.page */ "TAOr");
/* harmony import */ var _pages_its_serious_its_serious_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/its-serious/its-serious.page */ "qeHC");
/* harmony import */ var _pages_know_us_better_engine_know_us_better_engine_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/know-us-better-engine/know-us-better-engine.page */ "NKId");
/* harmony import */ var _pages_know_us_better_know_us_better_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/know-us-better/know-us-better.page */ "UcNE");
/* harmony import */ var _pages_life_insurance_life_insurance_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/life-insurance/life-insurance.page */ "d9iY");
/* harmony import */ var _pages_loan_info_loan_info_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/loan-info/loan-info.page */ "LM49");
/* harmony import */ var _pages_payment_detail_payment_detail_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/payment-detail/payment-detail.page */ "oiv4");
/* harmony import */ var _pages_payment_guarantees_payment_guarantees_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/payment-guarantees/payment-guarantees.page */ "yqos");
/* harmony import */ var _pages_payment_home_payment_home_page__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/payment-home/payment-home.page */ "JSGi");
/* harmony import */ var _pages_preapproved_home_preapproved_home_page__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/preapproved-home/preapproved-home.page */ "WC+j");
/* harmony import */ var _pages_terms_and_conditions_terms_and_conditions_page__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/terms-and-conditions/terms-and-conditions.page */ "P5VM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ "fXoL");
























var routes = [
    {
        path: '',
        canActivate: [_middlewares_lifeguard_recharged_middleware__WEBPACK_IMPORTED_MODULE_5__["LifeguardRechargedMiddleware"]],
        data: {
            moduleName: _middlewares_base_middleware__WEBPACK_IMPORTED_MODULE_4__["MiddlewareModuleName"].LIFEGUARD_RECHARGED,
            bottomSheetKey: _middlewares_base_config__WEBPACK_IMPORTED_MODULE_3__["BaseConfig"].lifeguardRecharged.bottomSheet,
            redirectToPayment: _middlewares_base_config__WEBPACK_IMPORTED_MODULE_3__["BaseConfig"].routes.lifeguardRechargedPayment,
            redirectToPreapproved: _middlewares_base_config__WEBPACK_IMPORTED_MODULE_3__["BaseConfig"].routes.lifeguardRechargedPreapproved,
            flowType: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["FlowType"].LIFEGUARD_RECHARGED,
        },
        component: _pages_home_home_page__WEBPACK_IMPORTED_MODULE_11__["HomePage"],
    },
    {
        path: 'payment-home',
        component: _pages_payment_home_payment_home_page__WEBPACK_IMPORTED_MODULE_19__["PaymentHomePage"],
    },
    {
        path: 'preapproved-home',
        component: _pages_preapproved_home_preapproved_home_page__WEBPACK_IMPORTED_MODULE_20__["PreapprovedHomePage"],
    },
    {
        path: 'payment-detail',
        component: _pages_payment_detail_payment_detail_page__WEBPACK_IMPORTED_MODULE_17__["PaymentDetailPage"],
    },
    {
        path: 'payment-guarantees',
        component: _pages_payment_guarantees_payment_guarantees_page__WEBPACK_IMPORTED_MODULE_18__["PaymentGuaranteesPage"],
    },
    {
        path: 'life-insurance',
        component: _pages_life_insurance_life_insurance_page__WEBPACK_IMPORTED_MODULE_15__["LifeInsurancePage"],
    },
    {
        path: 'ensure-loan',
        component: _pages_ensure_loan_ensure_loan_page__WEBPACK_IMPORTED_MODULE_10__["EnsureLoanPage"],
    },
    {
        path: 'loan-info',
        component: _pages_loan_info_loan_info_page__WEBPACK_IMPORTED_MODULE_16__["LoanInfoPage"],
    },
    {
        path: 'its-serious',
        component: _pages_its_serious_its_serious_page__WEBPACK_IMPORTED_MODULE_12__["ItsSeriousPage"],
    },
    {
        path: 'terms-and-conditions',
        component: _pages_terms_and_conditions_terms_and_conditions_page__WEBPACK_IMPORTED_MODULE_21__["TermsAndConditionsPage"],
    },
    {
        path: 'agreement-fga',
        component: _pages_agreement_fga_agreement_fga_page__WEBPACK_IMPORTED_MODULE_9__["AgreementFgaPage"],
    },
    {
        path: 'know-us-better-engine',
        component: _pages_know_us_better_engine_know_us_better_engine_page__WEBPACK_IMPORTED_MODULE_13__["KnowUsBetterEnginePage"],
    },
    {
        path: 'know-us-better',
        component: _pages_know_us_better_know_us_better_page__WEBPACK_IMPORTED_MODULE_14__["KnowUsBetterPage"],
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
var LifeguardRechargedRoutingModule = /** @class */ (function () {
    function LifeguardRechargedRoutingModule() {
    }
    LifeguardRechargedRoutingModule.ɵfac = function LifeguardRechargedRoutingModule_Factory(t) { return new (t || LifeguardRechargedRoutingModule)(); };
    LifeguardRechargedRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineNgModule"]({ type: LifeguardRechargedRoutingModule });
    LifeguardRechargedRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjector"]({ imports: [[
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(_nequi_features_commons__WEBPACK_IMPORTED_MODULE_1__["I18nModuleResolver"].setup(routes, [
                    _config_lifeguard_recharged_config__WEBPACK_IMPORTED_MODULE_8__["LifeguardRechargedConfig"].i18n.moduleKey,
                    _config_lifeguard_recharged_config__WEBPACK_IMPORTED_MODULE_8__["LifeguardRechargedConfig"].i18n.contractModuleKey,
                ])),
            ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return LifeguardRechargedRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetNgModuleScope"](LifeguardRechargedRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "ZZZj":
/*!*********************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard-recharged/pages/its-serious/its-serious.config.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: ItsSeriousConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItsSeriousConfig", function() { return ItsSeriousConfig; });
var ItsSeriousConfig = Object.freeze({
    i18n: {
        title: 'credits.lifeguard-recharged.its-serious.title',
        itemlist: [
            {
                image: 'credits.lifeguard-recharged.its-serious.content.payments-auto.img',
                title: 'credits.lifeguard-recharged.its-serious.content.payments-auto.title',
                description: 'credits.lifeguard-recharged.its-serious.content.payments-auto.description',
            },
            {
                image: 'credits.lifeguard-recharged.its-serious.content.we-can-report-you.img',
                title: 'credits.lifeguard-recharged.its-serious.content.we-can-report-you.title',
                description: 'credits.lifeguard-recharged.its-serious.content.we-can-report-you.description',
            },
        ],
        acceptButton: 'credits.lifeguard-recharged.its-serious.accept-button',
        logs: 'credits.lifeguard-recharged.its-serious.logs',
    },
    goTo: {
        termsAndConditions: '/admin/credits/lifeguard-recharged/terms-and-conditions',
    },
});


/***/ }),

/***/ "d9iY":
/*!*************************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard-recharged/pages/life-insurance/life-insurance.page.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: LifeInsurancePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifeInsurancePage", function() { return LifeInsurancePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _services_customer_finacial_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/customer-finacial.service */ "uuzL");
/* harmony import */ var _life_insurance_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./life-insurance.config */ "FyzH");
/* harmony import */ var _life_insurance_view_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./life-insurance.view-model */ "nwlP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");














var LifeInsurancePage = /** @class */ (function () {
    function LifeInsurancePage(navigatorProvider, route, customerFinancialService) {
        this.navigatorProvider = navigatorProvider;
        this.route = route;
        this.customerFinancialService = customerFinancialService;
        this.config = _life_insurance_config__WEBPACK_IMPORTED_MODULE_5__["LifeInsuranceConfig"];
        this.gender = _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_2__["Gender"];
        this.viewModel = new _life_insurance_view_model__WEBPACK_IMPORTED_MODULE_6__["LifeInsuranceViewModel"]();
    }
    LifeInsurancePage.prototype.ngOnInit = function () {
        this.initPage();
    };
    LifeInsurancePage.prototype.goBack = function () {
        this.navigatorProvider.back();
    };
    LifeInsurancePage.prototype.goToEnsureLoan = function () {
        this.customerFinancialService.updateCreditUser(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.customerFinancialService.creditUserInfo), { gender: this.viewModel.gender.value }));
        this.navigatorProvider.navigateForward(this.config.goTo.ensureLoan, {
            relativeTo: this.route,
        });
    };
    LifeInsurancePage.prototype.initPage = function () {
        this.viewModel.initForm();
    };
    LifeInsurancePage.ɵfac = function LifeInsurancePage_Factory(t) { return new (t || LifeInsurancePage)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_3__["NavigatorProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_customer_finacial_service__WEBPACK_IMPORTED_MODULE_4__["CustomerFinancialService"])); };
    LifeInsurancePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: LifeInsurancePage, selectors: [["app-credits-lifeguard-recharged-life-insurance"]], decls: 35, vars: 25, consts: [[1, "nequi-header"], ["slot", "start"], ["id", "life-insurance_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], ["fullscreen", "true", 1, "ion-content--white", "ion-padding-horizontal"], [3, "formGroup"], [1, "nequi-title"], ["lines", "none", 1, "description-item"], [1, "description-item__text"], ["formControlName", "gender"], ["lines", "none", 1, "radio-button"], ["id", "life-insurance_female_img", 1, "radio-button__icon", 3, "src"], [1, "radio-button__label"], [1, "radio-button__radio", 3, "value"], ["id", "life-insurance_male_img", 1, "radio-button__icon", 3, "src"], [1, "nequi-footer", "ion-no-border"], ["id", "life-insurance_ready_button", "expand", "block", "color", "guayaba", 1, "nequi-footer__button", 3, "disabled", "click"]], template: function LifeInsurancePage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function LifeInsurancePage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "ion-content", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "form", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "ion-item", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "ion-text", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "ion-list");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "ion-radio-group", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "ion-item", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "img", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](18, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "ion-label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](21, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "ion-radio", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "ion-item", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "img", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](25, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "ion-label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](28, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](29, "ion-radio", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "ion-footer", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "ion-button", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function LifeInsurancePage_Template_ion_button_click_32_listener() { return ctx.goToEnsureLoan(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](34, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.viewModel.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](9, 11, ctx.config.i18n.lifeInsurance.headerTitle), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](13, 13, ctx.config.i18n.lifeInsurance.headerDescription), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](18, 15, ctx.config.i18n.lifeInsurance.genderOptions.female.image), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](21, 17, ctx.config.i18n.lifeInsurance.genderOptions.female.label), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx.gender.FEMALE);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](25, 19, ctx.config.i18n.lifeInsurance.genderOptions.male.image), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](28, 21, ctx.config.i18n.lifeInsurance.genderOptions.male.label), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx.gender.MALE);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.viewModel.form.valid);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](34, 23, ctx.config.i18n.lifeInsurance.readyButton), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonRadioGroup"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControlName"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonRadio"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["RadioValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonFooter"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"]], styles: [".description-item[_ngcontent-%COMP%]::part(native) {\n  --padding-start: 0px;\n}\n.description-item__text[_ngcontent-%COMP%] {\n  color: var(--gray-70);\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 17px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvbGlmZS1pbnN1cmFuY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usb0JBQUE7QUFBSjtBQUdFO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFESiIsImZpbGUiOiJsaWZlLWluc3VyYW5jZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVzY3JpcHRpb24taXRlbSB7XG4gICY6OnBhcnQobmF0aXZlKSB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIH1cblxuICAmX190ZXh0IHtcbiAgICBjb2xvcjogdmFyKC0tZ3JheS03MCk7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbn1cbiJdfQ== */"] });
    return LifeInsurancePage;
}());



/***/ }),

/***/ "dpmc":
/*!******************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard-recharged/pages/payment-home/payment.config.ts ***!
  \******************************************************************************************************************/
/*! exports provided: PaymentConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentConfig", function() { return PaymentConfig; });
/* harmony import */ var _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nequi/features/credits/core */ "42wy");
/* harmony import */ var _organisms_payment_payment_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../organisms/payment/payment.type */ "iwuA");
var _a, _b;


var PaymentConfig = Object.freeze({
    i18n: {
        content: 'credits.lifeguard-recharged.home.payment',
        chip: {
            payTodayFee: 'credits.lifeguard-recharged.home.chip.pay-today-fee',
            overdueFee: 'credits.lifeguard-recharged.home.chip.overdue-fee',
        },
        error: 'credits.lifeguard-recharged.home.error',
        modal: {
            payment: 'credits.lifeguard-recharged.home.modal.payment',
            payTodayFee: 'credits.lifeguard-recharged.home.payment.card-modal.pay-today-fee',
            overdueFee: 'credits.lifeguard-recharged.home.modal.overdue-fee',
            payTodayAll: 'credits.lifeguard-recharged.home.payment.card-modal.pay-today-all',
            pocketLabel: 'credits.home.modal.payment.pocketLabel',
        },
        toast: {
            payment: 'credits.lifeguard-recharged.home.toast.payment',
            payToday: 'credits.lifeguard-recharged.home.toast.pay-today',
            lacksMoney: 'credits.lifeguard-recharged.home.toast.lacks-money',
        },
        payment: {
            headerTitle: 'credits.lifeguard-recharged.home.payment.header.title',
            toPay: 'credits.lifeguard-recharged.home.payment.content.to-pay',
            fee: 'credits.lifeguard-recharged.home.payment.content.fee',
            nextFee: 'credits.lifeguard-recharged.home.payment.content.next-fee',
            nextFeeAmount: 'credits.lifeguard-recharged.home.payment.content.next-fee-amount',
            overdueFee: 'credits.lifeguard-recharged.home.payment.content.overdue-fee',
            paymentHelp: '',
            payTodayFeeHelpChecked: 'credits.lifeguard-recharged.home.payment.content.pay-today-fee-help-checked',
            payTodayFeeHelpUnchecked: 'credits.lifeguard-recharged.home.payment.content.pay-today-fee-help-unchecked',
            payOverdueFeeHelpChecked: 'credits.lifeguard-recharged.home.payment.content.pay-overdue-fee-help-checked',
            payOverdueFeeHelpUnchecked: 'credits.lifeguard-recharged.home.payment.content.pay-overdue-fee-help-unchecked',
            payment: 'credits.lifeguard-recharged.home.payment.content.payment',
            payTodayFee: 'credits.lifeguard-recharged.home.payment.content.pay-today-fee',
            payOverdueFee: 'credits.lifeguard-recharged.home.payment.content.pay-overdue-fee',
            paySomething: 'credits.lifeguard-recharged.home.payment.content.pay-something',
            payComplete: 'credits.lifeguard-recharged.home.payment.content.pay-complete',
            footer: {
                message: '',
                readyButtonText: 'credits.lifeguard-recharged.home.payment.footer.ready-button.text',
                movements: {
                    label: 'credits.lifeguard-recharged.home.payment.footer.movements.label',
                    cardModal: 'credits.lifeguard-recharged.home.payment.footer.movements.modal',
                },
            },
        },
        calendarTitle: 'credits.calendar.lifeguard-recharged.title',
        movementsTitle: (_a = {},
            _a[_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_0__["CreditType"].LIFEGUARD_RECHARGED] = 'credits.home.lifeguard-title',
            _a),
        helpAction: 'credits.home.payment.help-action',
        pocketLabel: 'credits.home.modal.payment.pocketLabel',
    },
    bottomSheet: {
        cssClass: {
            firstTimeMessage: 'first-time-message--icon-standard',
        },
    },
    alert: {
        timeout: 700,
    },
    goTo: {
        paymentGuarantees: '/admin/credits/lifeguard-recharged/payment-guarantees',
    },
    percentage: {
        p25: {
            value: 0.25,
            cssClass: 'payment__progress-bar--25',
        },
        p50: {
            value: 0.5,
            cssClass: 'payment__progress-bar--50',
        },
        p75: {
            value: 0.75,
            cssClass: 'payment__progress-bar--75',
        },
        p100: {
            value: 1,
            cssClass: 'payment__progress-bar--100',
        },
        total: 100,
    },
    routes: {
        movements: '/admin/credits/movements',
        paymentDetail: '/admin/credits/lifeguard-recharged/payment-detail',
    },
    chipsClass: {
        yellow: 'payment__chip payment__chip--yellow',
        red: 'payment__chip payment__chip--red',
    },
    fullscreenModal: {
        cssClass: 'modal--white ion-text-center modal--lifeguard-recharged-credit',
        cssClassButton: 'ion-color-guayaba-outline button-outline',
    },
    successfulTransactionValidation: (_b = {},
        _b[_organisms_payment_payment_type__WEBPACK_IMPORTED_MODULE_1__["PaymentType"].PAYMENT + "-" + _organisms_payment_payment_type__WEBPACK_IMPORTED_MODULE_1__["PaymentType"].PAY_ALL] = 'credits.home.payment-lifeguard-recharged.card-modal.pay-today-all',
        _b[_organisms_payment_payment_type__WEBPACK_IMPORTED_MODULE_1__["PaymentType"].PAY_TODAY_FEE + "-" + _organisms_payment_payment_type__WEBPACK_IMPORTED_MODULE_1__["PaymentType"].PAYMENT] = 'credits.home.payment-lifeguard-recharged.card-modal.pay-today-amount',
        _b[_organisms_payment_payment_type__WEBPACK_IMPORTED_MODULE_1__["PaymentType"].PAY_TODAY_FEE + "-" + _organisms_payment_payment_type__WEBPACK_IMPORTED_MODULE_1__["PaymentType"].PAY_TODAY_FEE] = 'credits.home.payment-lifeguard-recharged.card-modal.pay-today-fee',
        _b[_organisms_payment_payment_type__WEBPACK_IMPORTED_MODULE_1__["PaymentType"].PAY_TODAY_FEE + "-" + _organisms_payment_payment_type__WEBPACK_IMPORTED_MODULE_1__["PaymentType"].PAY_ALL] = 'credits.home.payment-lifeguard-recharged.card-modal.pay-today-all',
        _b[_organisms_payment_payment_type__WEBPACK_IMPORTED_MODULE_1__["PaymentType"].OVERDUE_FEE + "-" + _organisms_payment_payment_type__WEBPACK_IMPORTED_MODULE_1__["PaymentType"].PAYMENT] = 'credits.home.payment-lifeguard-recharged.card-modal.pay-overdue-amount',
        _b[_organisms_payment_payment_type__WEBPACK_IMPORTED_MODULE_1__["PaymentType"].OVERDUE_FEE + "-" + _organisms_payment_payment_type__WEBPACK_IMPORTED_MODULE_1__["PaymentType"].OVERDUE_FEE] = 'credits.home.payment-lifeguard-recharged.card-modal.pay-overdue-fee',
        _b[_organisms_payment_payment_type__WEBPACK_IMPORTED_MODULE_1__["PaymentType"].OVERDUE_FEE + "-" + _organisms_payment_payment_type__WEBPACK_IMPORTED_MODULE_1__["PaymentType"].PAY_ALL] = 'credits.home.payment-lifeguard-recharged.card-modal.pay-overdue-all',
        _b),
    typeOfNumber: 'number',
});


/***/ }),

/***/ "eLxO":
/*!***********************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard-recharged/pages/agreement-fga/agreement-fga.page.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: AgreementFgaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgreementFgaPage", function() { return AgreementFgaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/credits/core */ "42wy");
/* harmony import */ var _nequi_features_profile_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/profile/core */ "w8sc");
/* harmony import */ var _nequi_native_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/native/calendar */ "at6U");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_date__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nequi/utils/date */ "tGfC");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _services_credit_info_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../services/credit-info.model */ "9FmH");
/* harmony import */ var _services_customer_finacial_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../services/customer-finacial.service */ "uuzL");
/* harmony import */ var _agreement_fga_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./agreement-fga.config */ "yz02");
/* harmony import */ var _organisms_contract_contract_organism__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../organisms/contract/contract.organism */ "Lnzr");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");

























var AgreementFgaPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AgreementFgaPage, _super);
    function AgreementFgaPage(injector, route, creditInfoModel, analyticsInteractor, customerFinancialService, moduleInfoInteractor, cardModalService, creditEventsHandler, calendarPlugin, loggerInteractor, parameterInteractor) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.route = route;
        _this.creditInfoModel = creditInfoModel;
        _this.analyticsInteractor = analyticsInteractor;
        _this.customerFinancialService = customerFinancialService;
        _this.moduleInfoInteractor = moduleInfoInteractor;
        _this.cardModalService = cardModalService;
        _this.creditEventsHandler = creditEventsHandler;
        _this.calendarPlugin = calendarPlugin;
        _this.loggerInteractor = loggerInteractor;
        _this.parameterInteractor = parameterInteractor;
        _this.config = _agreement_fga_config__WEBPACK_IMPORTED_MODULE_13__["AgreementFGAConfig"];
        _this.calendarMessages = _this.translateProvider.get(_this.config.i18n.calendar);
        return _this;
    }
    AgreementFgaPage.prototype.ngOnInit = function () {
        this.initData();
    };
    AgreementFgaPage.prototype.acceptAgreement = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.setAnalyticsIntentionOfEnd();
                this.disbursement();
                return [2 /*return*/];
            });
        });
    };
    AgreementFgaPage.prototype.setOriginMoney = function (transaction) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, transaction];
            });
        });
    };
    AgreementFgaPage.prototype.validatePin = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var pinMessages;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                pinMessages = this.translateProvider.get(this.config.i18n.pinChallengeMessage);
                return [2 /*return*/, this.pinChallengeModalService.show({
                        title: pinMessages.title,
                        message: pinMessages.message,
                        isOptional: true,
                    })];
            });
        });
    };
    AgreementFgaPage.prototype.onTransactionSuccess = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setAnalyticsSuccess();
                        return [4 /*yield*/, this.createCalendarEvents()];
                    case 1:
                        _a.sent();
                        this.showCardModal();
                        this.creditEventsHandler.emitDisbursedEvent({
                            creditType: _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["CreditType"].LIFEGUARD_RECHARGED,
                            hasCredits: true,
                            isExpired: false,
                            isRescheduled: false,
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AgreementFgaPage.prototype.disbursement = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data, params, transaction;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getUserInfo()];
                    case 1:
                        data = _a.sent();
                        params = {
                            operatorType: _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["OperationCreditType"].DISBURSEMENT,
                            isDebitType: true,
                            approvedAt: this.creditInfoModel.creditFeatureInfo.approvedDate,
                            loanValue: this.creditInfoModel.creditFeatureInfo.loanAmount,
                            productId: _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["CreditType"].LIFEGUARD_RECHARGED,
                            gender: this.customerFinancialService.creditUserInfo.gender,
                            purpose: '',
                            additionalInfo: {
                                city: data.city || '',
                                state: data.state || '',
                                address: data.address || '',
                                installment: this.creditInfoModel.creditFeatureInfo.installment,
                                ciiu: data.ciiu || '',
                                totalAssets: this.customerFinancialService.creditUserInfo.assets
                                    ? this.customerFinancialService.creditUserInfo.assets.toString()
                                    : '',
                                fee: this.creditInfoModel.creditFeatureInfo.installment,
                            },
                        };
                        transaction = new _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["DisbursementTransaction"]().withData(params);
                        _super.prototype.executeTransaction.call(this, transaction);
                        return [2 /*return*/];
                }
            });
        });
    };
    AgreementFgaPage.prototype.loadModule = function (moduleInfoList, moduleCode, moduleName) {
        var _a, _b;
        var moduleInfo = moduleInfoList.find(function (module) { return module.code === moduleCode; });
        return (_b = (_a = moduleInfo === null || moduleInfo === void 0 ? void 0 : moduleInfo.data) === null || _a === void 0 ? void 0 : _a.find(function (detail) { return detail.key === moduleName; })) === null || _b === void 0 ? void 0 : _b.value;
    };
    AgreementFgaPage.prototype.getUserInfo = function () {
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
                                _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__["ModuleCode"].LOCATION,
                                _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__["ModuleCode"].OCCUPATION,
                            ])];
                    case 2:
                        data = _b.sent();
                        locationData = this.loadModule(data, _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__["ModuleCode"].LOCATION, _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__["ModuleName"].LOCATION);
                        occupationData = this.loadModule(data, _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__["ModuleCode"].OCCUPATION, _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__["ModuleName"].OCCUPATION);
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
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    AgreementFgaPage.prototype.showCardModal = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var i18n;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                i18n = this.translateProvider.get(this.config.i18n.cardModalMessage);
                this.cardModalService.show({
                    title: i18n.title,
                    imgPath: i18n.image,
                    content: i18n.content,
                    buttons: [
                        {
                            text: i18n.button,
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
    AgreementFgaPage.prototype.goToBackpack = function () {
        this.navigatorProvider.navigateForward(this.config.routes.backpack, {
            relativeTo: this.route,
        });
    };
    AgreementFgaPage.prototype.initData = function () {
        var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(new Date().toISOString().split(this.config.regexDate), 3), year = _a[0], month = _a[1], day = _a[2];
        var contractHTML = this.creditInfoModel.agreement.agreementFGA;
        this.agreementFga = contractHTML
            .replace(this.config.replaceString.suscribeDay, day)
            .replace(this.config.replaceString.suscribeMonth, month)
            .replace(this.config.replaceString.suscribeYear, year);
    };
    AgreementFgaPage.prototype.setAnalyticsIntentionOfEnd = function () {
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__["AnalyticsType"].FACEBOOK,
            params: {
                eventName: this.config.analytics.events.intentionOfEnd.name,
            },
        });
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__["AnalyticsType"].FIREBASE,
            params: { eventName: this.config.analytics.events.intentionOfEnd.name },
        });
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__["AnalyticsType"].CLEVERTAP,
            params: {
                eventName: this.config.analytics.events.intentionOfEnd.name,
                eventProps: Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_10__["stringsArrayToObjectWithValues"])(this.config.analytics.events.intentionOfEnd.params.cleverTap, [
                    Object(_nequi_utils_date__WEBPACK_IMPORTED_MODULE_9__["getFormattedDateTimes"])(),
                    this.creditInfoModel.creditFeatureInfo.loanAmount,
                    this.creditInfoModel.creditFeatureInfo.term.value,
                    this.creditInfoModel.creditFeatureInfo.loanDestination,
                ]),
            },
        });
    };
    AgreementFgaPage.prototype.setAnalyticsSuccess = function () {
        var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(this.config.analytics.events.success.name, 2), loanSuccess = _a[0], mobileSubscribe = _a[1];
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__["AnalyticsType"].FACEBOOK,
            params: {
                eventName: loanSuccess,
            },
        });
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__["AnalyticsType"].FACEBOOK,
            params: {
                eventName: mobileSubscribe,
            },
        });
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__["AnalyticsType"].FIREBASE,
            params: { eventName: loanSuccess },
        });
    };
    AgreementFgaPage.prototype.createCalendarEvents = function () {
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
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    AgreementFgaPage.prototype.getCalendarOptions = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var options, parameters;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.calendarPlugin.getCalendarOptions()];
                    case 1:
                        options = _a.sent();
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
                        return [2 /*return*/, options];
                }
            });
        });
    };
    AgreementFgaPage.prototype.getDynamoCalendarParameters = function () {
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
    AgreementFgaPage.ɵfac = function AgreementFgaPage_Factory(t) { return new (t || AgreementFgaPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_credit_info_model__WEBPACK_IMPORTED_MODULE_11__["CreditInfoModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__["AnalyticsInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_customer_finacial_service__WEBPACK_IMPORTED_MODULE_12__["CustomerFinancialService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_profile_core__WEBPACK_IMPORTED_MODULE_6__["ModuleInfoInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_8__["CardModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_5__["CreditEventsHandler"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_native_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarPlugin"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__["LoggerInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__["ParameterInteractor"])); };
    AgreementFgaPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AgreementFgaPage, selectors: [["app-credits-lifeguard-recharged-agreement-fga"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 4, consts: [[1, "ion-page", 3, "messages", "agreement", "accepted"]], template: function AgreementFgaPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-contract-organism", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("accepted", function AgreementFgaPage_Template_app_contract_organism_accepted_0_listener() { return ctx.acceptAgreement(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("messages", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, ctx.config.i18n.messages))("agreement", ctx.agreementFga);
        } }, directives: [_organisms_contract_contract_organism__WEBPACK_IMPORTED_MODULE_14__["ContractOrganism"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"]], encapsulation: 2 });
    return AgreementFgaPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_4__["TransactionBasePage"]));



/***/ }),

/***/ "nwlP":
/*!*******************************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard-recharged/pages/life-insurance/life-insurance.view-model.ts ***!
  \*******************************************************************************************************************************/
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

/***/ "oPib":
/*!*******************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard-recharged/pages/ensure-loan/ensure-loan.page.ts ***!
  \*******************************************************************************************************************/
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
/* harmony import */ var _ensure_loan_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ensure-loan.config */ "Smg2");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
























var EnsureLoanPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EnsureLoanPage, _super);
    function EnsureLoanPage(injector, translateProvider, infoListBottomSheetService, route, creditInteractor, creditInfoModel, creditLoggerService, loadingService, toastService, currencyPipe) {
        var _this = _super.call(this, injector) || this;
        _this.translateProvider = translateProvider;
        _this.infoListBottomSheetService = infoListBottomSheetService;
        _this.route = route;
        _this.creditInteractor = creditInteractor;
        _this.creditInfoModel = creditInfoModel;
        _this.creditLoggerService = creditLoggerService;
        _this.loadingService = loadingService;
        _this.toastService = toastService;
        _this.currencyPipe = currencyPipe;
        _this.config = _ensure_loan_config__WEBPACK_IMPORTED_MODULE_13__["EnsureLoanConfig"];
        return _this;
    }
    EnsureLoanPage.prototype.ngOnInit = function () {
        this.initPage();
    };
    EnsureLoanPage.prototype.goToLoanInfo = function () {
        this.navigatorProvider.navigateForward(this.config.goTo.loanInfo, {
            relativeTo: this.route,
        });
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
    EnsureLoanPage.prototype.initPage = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 4, , 7]);
                        return [4 /*yield*/, this.loadingService.show()];
                    case 1:
                        _b.sent();
                        _a = this;
                        return [4 /*yield*/, this.creditInteractor.getLoanPortfolio({
                                creditType: _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__["CreditType"].LIFEGUARD_RECHARGED,
                                amount: this.creditInfoModel.creditFeatureInfo.loanAmount,
                                numInstallments: this.creditInfoModel.creditFeatureInfo.installment,
                            })];
                    case 2:
                        _a.loanPortfolio = _b.sent();
                        return [4 /*yield*/, this.loadingService.hide(true)];
                    case 3:
                        _b.sent();
                        this.creditInfoModel.loanPortfolioInfo = this.loanPortfolio;
                        this.initItemList();
                        return [3 /*break*/, 7];
                    case 4:
                        error_1 = _b.sent();
                        return [4 /*yield*/, this.loadingService.hide(false)];
                    case 5:
                        _b.sent();
                        return [4 /*yield*/, this.toastService.showError(error_1.message)];
                    case 6:
                        _b.sent();
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
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
                    flowType: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["FlowType"].LIFEGUARD_RECHARGED,
                    i18nKey: this.config.i18n.logs,
                    params: [this.currencyPipe.transform(this.loanPortfolio.monthlyInsuranceAmount)],
                });
                return [2 /*return*/];
            });
        });
    };
    EnsureLoanPage.ɵfac = function EnsureLoanPage_Factory(t) { return new (t || EnsureLoanPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_6__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_8__["InfoListBottomSheetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__["CreditInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_credit_info_model__WEBPACK_IMPORTED_MODULE_11__["CreditInfoModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_credit_logger_service__WEBPACK_IMPORTED_MODULE_12__["CreditLoggerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_8__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_8__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"])); };
    EnsureLoanPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EnsureLoanPage, selectors: [["app-credits-lifeguard-recharged-ensure-loan"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 46, vars: 28, consts: [[1, "nequi-header"], ["slot", "start"], ["id", "ensure-loan_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], ["fullscreen", "true", 1, "ion-content--white", "ion-padding-horizontal"], [1, "nequi-title"], [1, "card-item", 3, "click"], ["lines", "none", 1, "card-item__header"], ["id", "ensure-loan_sure-with-nequi_title", 1, "card-item__title"], ["slot", "end", 1, "card-item__tag", "card-item__tag-fast"], [1, "card-item__tag_icon"], ["id", "ensure-loan_sure-with-nequi_img", 3, "src"], ["id", "ensure-loan_sure-with-nequi_label"], ["lines", "none"], ["id", "ensure-loan_sure-with-nequi_text", 1, "card-item__description"], ["id", "ensure-loan_sure-with-nequi_icon", "name", "chevron-forward-outline", "slot", "end", 1, "card-item__right-icon", "ion-no-margin"], ["id", "ensure-loan_sure-with-another_title", 1, "card-item__title"], ["slot", "end", 1, "card-item__tag", "card-item__tag-slow"], ["id", "ensure-loan_sure-with-another_img", 3, "src"], ["id", "ensure-loan_sure-with-another_label"], ["id", "ensure-loan_sure-with-another_text", 1, "card-item__description"], [1, "nequi-footer", "ion-no-border"], [1, "ion-text-center"], ["id", "ensure-loan_footer_link", 1, "nequi-footer__link", 3, "click"]], template: function EnsureLoanPage_Template(rf, ctx) { if (rf & 1) {
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
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-card", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EnsureLoanPage_Template_ion_card_click_9_listener() { return ctx.goToLoanInfo(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-item", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-text", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ion-chip", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-avatar", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "img", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "ion-label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "ion-item", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "ion-text", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "ion-icon", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "ion-card", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EnsureLoanPage_Template_ion_card_click_25_listener() { return ctx.showHaveAnotherInsurance(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "ion-item", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "ion-text", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](29, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "ion-chip", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "ion-avatar", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "img", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](33, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "ion-label", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](36, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "ion-item", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "ion-text", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](40, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "ion-footer", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "ion-toolbar", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "a", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EnsureLoanPage_Template_a_click_43_listener() { return ctx.showMoreInfo(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](45, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 10, ctx.config.i18n.ensureLoan.headerTitle), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.ensureLoanWithNequiTitle, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 12, ctx.config.i18n.ensureLoan.ensureLoanWithNequi.tagImg), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 14, ctx.config.i18n.ensureLoan.ensureLoanWithNequi.tagLabel), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](23, 16, ctx.config.i18n.ensureLoan.ensureLoanWithNequi.description), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](29, 18, ctx.config.i18n.ensureLoan.ensureLoanWithAnother.title), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](33, 20, ctx.config.i18n.ensureLoan.ensureLoanWithAnother.tagImg), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](36, 22, ctx.config.i18n.ensureLoan.ensureLoanWithAnother.tagLabel), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](40, 24, ctx.config.i18n.ensureLoan.ensureLoanWithAnother.description), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](45, 26, ctx.config.i18n.ensureLoan.moreInfoButton), "");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonChip"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonAvatar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonFooter"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"]], styles: [".card-item[_ngcontent-%COMP%] {\n  margin: 8px 5px;\n  padding-bottom: 16px;\n  border-radius: 8px;\n  border: 1px solid var(--border-gray-20);\n  box-shadow: 0px 1px 1px var(--box-shadow-card-015);\n}\n.card-item__header[_ngcontent-%COMP%]::part(native) {\n  --min-height: auto;\n  --padding-top: 8px;\n}\n.card-item__title[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 19px;\n  margin-top: 8px;\n}\n.card-item__description[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 17px;\n  color: var(--gray-70);\n}\n.card-item__tag[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  gap: 5px;\n  height: 24px;\n  min-width: 73px;\n  font-size: 11px;\n  padding-inline: 5px;\n  margin: 0;\n  margin-bottom: auto;\n}\n.card-item__tag_icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  margin: 0;\n  flex: none;\n}\n.card-item__tag_icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  --border-radius: 0;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.card-item__tag-fast[_ngcontent-%COMP%] {\n  --background: var(--guanabana-10);\n  --color: var(--guanabana);\n}\n.card-item__tag-slow[_ngcontent-%COMP%] {\n  --background: var(--guayaba-10);\n  --color: var(--guayaba);\n  min-width: 65px;\n}\n.card-item__right-icon[_ngcontent-%COMP%] {\n  width: 35px;\n  transform: translateY(-15px);\n  color: var(--medianoche);\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvZW5zdXJlLWxvYW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1Q0FBQTtFQUNBLGtEQUFBO0FBQ0Y7QUFFSTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUFBTjtBQUlFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFGSjtBQUtFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFISjtBQU1FO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFKSjtBQU1JO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUpOO0FBTU07RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7QUFKUjtBQVFJO0VBQ0UsaUNBQUE7RUFDQSx5QkFBQTtBQU5OO0FBU0k7RUFDRSwrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQVBOO0FBV0U7RUFDRSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7QUFUSiIsImZpbGUiOiJlbnN1cmUtbG9hbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1pdGVtIHtcbiAgbWFyZ2luOiA4cHggNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ3JheS0yMCk7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggMXB4IHZhcigtLWJveC1zaGFkb3ctY2FyZC0wMTUpO1xuXG4gICZfX2hlYWRlciB7XG4gICAgJjo6cGFydChuYXRpdmUpIHtcbiAgICAgIC0tbWluLWhlaWdodDogYXV0bztcbiAgICAgIC0tcGFkZGluZy10b3A6IDhweDtcbiAgICB9XG4gIH1cblxuICAmX190aXRsZSB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgfVxuXG4gICZfX2Rlc2NyaXB0aW9uIHtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gICAgY29sb3I6IHZhcigtLWdyYXktNzApO1xuICB9XG5cbiAgJl9fdGFnIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNXB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgICBtaW4td2lkdGg6IDczcHg7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIHBhZGRpbmctaW5saW5lOiA1cHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XG5cbiAgICAmX2ljb24ge1xuICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmbGV4OiBub25lO1xuXG4gICAgICBpbWcge1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi1mYXN0IHtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tZ3VhbmFiYW5hLTEwKTtcbiAgICAgIC0tY29sb3I6IHZhcigtLWd1YW5hYmFuYSk7XG4gICAgfVxuXG4gICAgJi1zbG93IHtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tZ3VheWFiYS0xMCk7XG4gICAgICAtLWNvbG9yOiB2YXIoLS1ndWF5YWJhKTtcbiAgICAgIG1pbi13aWR0aDogNjVweDtcbiAgICB9XG4gIH1cblxuICAmX19yaWdodC1pY29uIHtcbiAgICB3aWR0aDogMzVweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1cHgpO1xuICAgIGNvbG9yOiB2YXIoLS1tZWRpYW5vY2hlKTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbn1cbiJdfQ== */"] });
    return EnsureLoanPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__["FeatureBasePage"]));



/***/ }),

/***/ "oiv4":
/*!*************************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard-recharged/pages/payment-detail/payment-detail.page.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: PaymentDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentDetailPage", function() { return PaymentDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_apps_base_mobile_config_features_commons_services_screenshot_sharing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/apps/base/mobile/config/features/commons/services/screenshot-sharing */ "VXOE");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_utils_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/utils/string */ "p6rB");
/* harmony import */ var _payment_detail_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment-detail.config */ "6R3u");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../../ui/src/lib/directives/animate-title-on-scroll/animate-title-on-scroll.directive */ "qbWi");
/* harmony import */ var _ui_src_lib_components_view_detail_view_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../../ui/src/lib/components/view-detail/view-detail.component */ "yT3N");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
















function PaymentDetailPage_ion_header_0_Template(rf, ctx) { if (rf & 1) {
    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-header", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "ion-toolbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "ion-buttons", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "ion-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PaymentDetailPage_ion_header_0_Template_ion_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2); var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r1.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "ion-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "ion-title", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "ion-buttons", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "ion-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PaymentDetailPage_ion_header_0_Template_ion_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r3.shareScreenshoot(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "ion-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "ion-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PaymentDetailPage_ion_header_0_Template_ion_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r4.saveScreenshot(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "ion-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 2, ctx_r0.config.i18n.headerTitle), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", true);
} }
var PaymentDetailPage = /** @class */ (function () {
    function PaymentDetailPage(navigatorProvider, translateProvider, screenshotSharingService, router, currencyPipe, datePipe) {
        this.navigatorProvider = navigatorProvider;
        this.translateProvider = translateProvider;
        this.screenshotSharingService = screenshotSharingService;
        this.router = router;
        this.currencyPipe = currencyPipe;
        this.datePipe = datePipe;
        this.config = _payment_detail_config__WEBPACK_IMPORTED_MODULE_6__["PaymentDetailConfig"];
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
                helpMessage: Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_5__["createFormat"])(items.monthlyInsurance.message, [
                    this.currencyPipe.transform(credit.feesOutstanding),
                ]),
            },
            {
                label: items.totalvalue,
                description: this.currencyPipe.transform(credit.balance),
            },
            {
                label: items.paydayLimit,
                description: this.datePipe.transform(new Date(credit.endAt)),
            },
            {
                label: items.numberContract,
                description: credit.debenture,
            },
        ]);
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
                label: items.monthlyFee.label,
                description: this.currencyPipe.transform(credit.normalInterest),
            },
            {
                label: items.monthlyFeeArrears.label,
                description: this.currencyPipe.transform(credit.penaltyInterest),
                helpMessage: items.monthlyFeeArrears.message,
            },
            {
                label: items.monthlyInsuranceToday.label,
                description: this.currencyPipe.transform(credit.feesOutstanding),
                helpMessage: Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_5__["createFormat"])(items.monthlyInsuranceToday.message, [
                    this.currencyPipe.transform(credit.feesOutstanding),
                ]),
            },
            {
                label: items.totalvalue,
                description: this.currencyPipe.transform(credit.balance),
            },
            {
                label: items.paydayLimit,
                description: this.datePipe.transform(new Date(credit.endAt)),
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
                description: Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_5__["createFormat"])(interestRates.description, [
                    credit.rateMonthlyInterest.toString(),
                    credit.rateAnnualInterest.toString(),
                ]),
                helpMessage: interestRates.message,
            });
        }
    };
    PaymentDetailPage.ɵfac = function PaymentDetailPage_Factory(t) { return new (t || PaymentDetailPage)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_4__["NavigatorProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_4__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_nequi_apps_base_mobile_config_features_commons_services_screenshot_sharing__WEBPACK_IMPORTED_MODULE_3__["ScreenshotSharingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"])); };
    PaymentDetailPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: PaymentDetailPage, selectors: [["app-credits-lifeguard-recharged-payment-detail"]], decls: 7, vars: 5, consts: [["class", "nequi-header nequi-header--white", 4, "ngIf"], ["fullscreen", "true", "appAnimateTitleOnScroll", "", "scrollEvents", "true", 1, "ion-content--white", "ion-padding-horizontal"], [1, "nequi-title"], [1, "payment-detail"], [3, "details"], [1, "nequi-header", "nequi-header--white"], ["slot", "start"], ["id", "payment-detail_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], [1, "nequi-header__title", "ion-text-start"], ["slot", "end"], ["id", "payment-detail_share_button", 3, "click"], ["slot", "icon-only", "name", "share-social-outline"], ["id", "payment-detail_save_button", 3, "hidden", "click"], ["slot", "icon-only", "name", "save-outline"]], template: function PaymentDetailPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, PaymentDetailPage_ion_header_0_Template, 13, 4, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "ion-content", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "app-view-detail", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isScreenShotTaken);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 3, ctx.config.i18n.headerTitle), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("details", ctx.detailItem);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonContent"], _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_9__["AnimateTitleOnScrollDirective"], _ui_src_lib_components_view_detail_view_detail_component__WEBPACK_IMPORTED_MODULE_10__["ViewDetailComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonTitle"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"]], styles: [".nequi-title[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\n\n.nequi-footer__toolbar[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvcGF5bWVudC1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjs7QUFHRTtFQUNFLGtCQUFBO0FBQUoiLCJmaWxlIjoicGF5bWVudC1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5lcXVpLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4ubmVxdWktZm9vdGVyIHtcbiAgJl9fdG9vbGJhciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG4iXX0= */"] });
    return PaymentDetailPage;
}());



/***/ }),

/***/ "qeHC":
/*!*******************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard-recharged/pages/its-serious/its-serious.page.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: ItsSeriousPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItsSeriousPage", function() { return ItsSeriousPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _its_serious_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./its-serious.config */ "ZZZj");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ui_src_lib_components_item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../../ui/src/lib/components/item-detail/item-detail.component */ "Ycc7");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");











function ItsSeriousPage_app_item_detail_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-item-detail", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
} if (rf & 2) {
    var item_r1 = ctx.$implicit;
    var islast_r2 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 4, item_r1.image))("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 6, item_r1.title))("line", !islast_r2)("description", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 8, item_r1.description));
} }
var ItsSeriousPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ItsSeriousPage, _super);
    function ItsSeriousPage(injector, route) {
        var _this = _super.call(this, injector) || this;
        _this.route = route;
        _this.config = _its_serious_config__WEBPACK_IMPORTED_MODULE_4__["ItsSeriousConfig"];
        return _this;
    }
    ItsSeriousPage.prototype.goToTermsAndConditions = function () {
        this.navigatorProvider.navigateForward(this.config.goTo.termsAndConditions, {
            relativeTo: this.route,
        });
    };
    ItsSeriousPage.ɵfac = function ItsSeriousPage_Factory(t) { return new (t || ItsSeriousPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
    ItsSeriousPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ItsSeriousPage, selectors: [["app-credits-its-serious"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 15, vars: 7, consts: [[1, "nequi-header"], ["slot", "start"], ["id", "its-serious_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], ["fullscreen", "true", 1, "ion-content--white", "ion-padding-horizontal"], [1, "nequi-title"], [3, "icon", "title", "line", "description", 4, "ngFor", "ngForOf"], [1, "nequi-footer", "ion-no-border"], ["id", "its-serious_ready_button", "expand", "block", "color", "guayaba", 1, "nequi-footer__button", 3, "click"], [3, "icon", "title", "line", "description"]], template: function ItsSeriousPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ItsSeriousPage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ItsSeriousPage_app_item_detail_9_Template, 4, 10, "app-item-detail", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-footer", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ItsSeriousPage_Template_ion_button_click_12_listener() { return ctx.goToTermsAndConditions(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 3, ctx.config.i18n.title));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.config.i18n.itemlist);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 5, ctx.config.i18n.acceptButton), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonFooter"], _ui_src_lib_components_item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_7__["ItemDetailComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]], encapsulation: 2 });
    return ItsSeriousPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__["FeatureBasePage"]));



/***/ }),

/***/ "vsrO":
/*!***********************************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard-recharged/pages/payment-guarantees/payment-guarantees.config.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: PaymentGuaranteesConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentGuaranteesConfig", function() { return PaymentGuaranteesConfig; });
var PaymentGuaranteesConfig = Object.freeze({
    i18n: {
        title: 'credits.lifeguard-recharged.payment-guarantees.title',
        note: 'credits.lifeguard-recharged.payment-guarantees.note',
        content: 'credits.lifeguard-recharged.payment-guarantees.content',
        readyButton: 'credits.lifeguard-recharged.payment-guarantees.ready-button',
        logs: 'credits.lifeguard-recharged.payment-guarantees.logs',
    },
    goTo: {
        lifeInsurance: '/admin/credits/lifeguard-recharged/life-insurance',
    },
});


/***/ }),

/***/ "yqos":
/*!*********************************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard-recharged/pages/payment-guarantees/payment-guarantees.page.ts ***!
  \*********************************************************************************************************************************/
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
/* harmony import */ var _payment_guarantees_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./payment-guarantees.config */ "vsrO");
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
        this.navigatorProvider.navigateForward(this.config.goTo.lifeInsurance, {
            relativeTo: this.route,
        });
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
                    flowType: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["FlowType"].LIFEGUARD_RECHARGED,
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
    PaymentGuaranteesPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PaymentGuaranteesPage, selectors: [["app-credits-lifeguard-recharged-payment-guarantees"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 19, vars: 10, consts: [[1, "nequi-header"], ["slot", "start"], ["id", "credits-lifeguard-recharged_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], ["fullscreen", "true", 1, "ion-content--white", "ion-padding-horizontal"], [1, "nequi-title"], [1, "credits-lifeguard-recharged__note"], [1, "margin-top-16"], [3, "icon", "title", "description", "line", 4, "ngFor", "ngForOf"], [1, "nequi-footer", "ion-no-border"], ["id", "credits-lifeguard-recharged_ready_button", "expand", "block", "color", "guayaba", 1, "nequi-footer__button", 3, "click"], [3, "icon", "title", "description", "line"]], template: function PaymentGuaranteesPage_Template(rf, ctx) { if (rf & 1) {
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
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonFooter"], _ui_src_lib_components_item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_12__["ItemDetailComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"]], styles: [".credits-lifeguard-recharged__note[_ngcontent-%COMP%] {\n  color: var(--gray-70);\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 17px;\n}\n.credits-lifeguard-recharged__item[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  border-bottom: 1px solid var(--divisor-line);\n  padding: 8px 0px 16px 0px;\n}\n.credits-lifeguard-recharged__item[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0px;\n}\n.credits-lifeguard-recharged__item-img[_ngcontent-%COMP%] {\n  display: inline;\n}\n.credits-lifeguard-recharged__item-img[_ngcontent-%COMP%]::part(image) {\n  width: 32px;\n  height: 32px;\n  display: inline;\n  margin-right: 8px;\n}\n.credits-lifeguard-recharged__item-title[_ngcontent-%COMP%] {\n  color: var(--medianoche);\n  font-style: normal;\n  font-weight: 500;\n  font-size: 17px;\n  line-height: 22px;\n  display: inline;\n  position: relative;\n  top: -10px;\n}\n.credits-lifeguard-recharged__item-description[_ngcontent-%COMP%] {\n  color: var(--gray-70);\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 17px;\n  text-overflow: unset;\n  white-space: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvcGF5bWVudC1ndWFyYW50ZWVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUFKO0FBR0U7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNENBQUE7RUFDQSx5QkFBQTtBQURKO0FBR0k7RUFDRSxrQkFBQTtBQUROO0FBSUk7RUFDRSxlQUFBO0FBRk47QUFJTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBRlI7QUFNSTtFQUNFLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFKTjtBQU9JO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQUxOIiwiZmlsZSI6InBheW1lbnQtZ3VhcmFudGVlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JlZGl0cy1saWZlZ3VhcmQtcmVjaGFyZ2VkIHtcbiAgJl9fbm90ZSB7XG4gICAgY29sb3I6IHZhcigtLWdyYXktNzApO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgfVxuXG4gICZfX2l0ZW0ge1xuICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kaXZpc29yLWxpbmUpO1xuICAgIHBhZGRpbmc6IDhweCAwcHggMTZweCAwcHg7XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMHB4O1xuICAgIH1cblxuICAgICYtaW1nIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZTtcblxuICAgICAgJjo6cGFydChpbWFnZSkge1xuICAgICAgICB3aWR0aDogMzJweDtcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgICYtdGl0bGUge1xuICAgICAgY29sb3I6IHZhcigtLW1lZGlhbm9jaGUpO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgdG9wOiAtMTBweDtcbiAgICB9XG5cbiAgICAmLWRlc2NyaXB0aW9uIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1ncmF5LTcwKTtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IHVuc2V0O1xuICAgICAgd2hpdGUtc3BhY2U6IHVuc2V0O1xuICAgIH1cbiAgfVxufVxuIl19 */"] });
    return PaymentGuaranteesPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__["FeatureBasePage"]));



/***/ }),

/***/ "yz02":
/*!*************************************************************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/products/lifeguard-recharged/pages/agreement-fga/agreement-fga.config.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: AgreementFGAConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgreementFGAConfig", function() { return AgreementFGAConfig; });
var AgreementFGAConfig = Object.freeze({
    i18n: {
        messages: 'credits.lifeguard-recharged.agreement-fga',
        pinChallengeMessage: 'credits.lifeguard-recharged.disbursement.pin-challenge-modal',
        cardModalMessage: 'credits.lifeguard-recharged.disbursement.card-modal',
        logs: {
            agreement: 'credits.lifeguard-recharged.logs',
            pin: 'credits.lifeguard-recharged.disbursement.logs.pin',
            modal: 'credits.lifeguard-recharged.disbursement.logs.modal',
        },
        calendar: 'credits.calendar.lifeguard-recharged',
        calendarDescription: 'credits.calendar.lifeguard-recharged.description',
    },
    routes: {
        backpack: '/admin/dashboard',
    },
    analytics: {
        events: {
            intentionOfEnd: {
                name: 'SalvavidasR_intencion_final_tyc_prestamo',
                params: {
                    cleverTap: ['Fecha_intencion', 'Valor_solicitado', 'PlazoPrestamo', 'usoDestino'],
                },
            },
            success: {
                name: ['SalvavidasR_exito_prestamo', 'fb_mobile_subscribe'],
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


/***/ })

}]);
//# sourceMappingURL=products-lifeguard-recharged-lifeguard-recharged-module.js.map