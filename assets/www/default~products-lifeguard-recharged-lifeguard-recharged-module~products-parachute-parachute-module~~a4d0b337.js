(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~products-lifeguard-recharged-lifeguard-recharged-module~products-parachute-parachute-module~~a4d0b337"],{

/***/ "Jqih":
/*!*******************************************************************************!*\
  !*** ./libs/features/credits/src/presentation/middlewares/base.middleware.ts ***!
  \*******************************************************************************/
/*! exports provided: MiddlewareModuleName, BaseMiddleware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiddlewareModuleName", function() { return MiddlewareModuleName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseMiddleware", function() { return BaseMiddleware; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/features/credits/core */ "42wy");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_date__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nequi/utils/date */ "tGfC");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _middlewares_base_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../middlewares/base.config */ "lvuB");
/* harmony import */ var _organisms_approval_front_approval_front_view_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../organisms/approval-front/approval-front.view-model */ "pwQe");
/* harmony import */ var _services_credit_info_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/credit-info.model */ "9FmH");
/* harmony import */ var _services_credit_logger_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/credit-logger.service */ "2ibl");
/* harmony import */ var _services_customer_finacial_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/customer-finacial.service */ "uuzL");

















var MiddlewareModuleName;
(function (MiddlewareModuleName) {
    MiddlewareModuleName["PROPELLER"] = "propeller";
    MiddlewareModuleName["PARACHUTE"] = "parachute";
    MiddlewareModuleName["LIFEGUARD_RECHARGED"] = "lifeguardRecharged";
})(MiddlewareModuleName || (MiddlewareModuleName = {}));
var BaseMiddleware = /** @class */ (function () {
    function BaseMiddleware(injector) {
        this.config = _middlewares_base_config__WEBPACK_IMPORTED_MODULE_11__["BaseConfig"];
        this.getCustomerCreditException = {};
        this.approvalFrontException = {};
        this.navController = injector.get(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]);
        this.router = injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]);
        this.route = injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]);
        this.translateProvider = injector.get(_nequi_features_commons__WEBPACK_IMPORTED_MODULE_4__["TranslateProvider"]);
        this.creditInteractor = injector.get(_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__["CreditInteractor"]);
        this.loadingService = injector.get(_nequi_ui__WEBPACK_IMPORTED_MODULE_8__["LoadingService"]);
        this.firstTimeMessageBottomSheetService = injector.get(_nequi_ui__WEBPACK_IMPORTED_MODULE_8__["FirstTimeMessageBottomSheetService"]);
        this.alertService = injector.get(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_6__["AlertService"]);
        this.creditLoggerService = injector.get(_services_credit_logger_service__WEBPACK_IMPORTED_MODULE_14__["CreditLoggerService"]);
        this.analyticsInteractor = injector.get(_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["AnalyticsInteractor"]);
        this.cardModalService = injector.get(_nequi_ui__WEBPACK_IMPORTED_MODULE_8__["CardModalService"]);
        this.creditInfoModel = injector.get(_services_credit_info_model__WEBPACK_IMPORTED_MODULE_13__["CreditInfoModel"]);
        this.customerFinancialService = injector.get(_services_customer_finacial_service__WEBPACK_IMPORTED_MODULE_15__["CustomerFinancialService"]);
        this.fullscreenModalService = injector.get(_nequi_ui__WEBPACK_IMPORTED_MODULE_8__["FullscreenModalService"]);
        this.toastService = injector.get(_nequi_ui__WEBPACK_IMPORTED_MODULE_8__["ToastService"]);
        this.approvalFrontViewModel = injector.get(_organisms_approval_front_approval_front_view_model__WEBPACK_IMPORTED_MODULE_12__["ApprovalFrontViewModel"]);
        this.userInfoProvider = injector.get(_nequi_features_commons__WEBPACK_IMPORTED_MODULE_4__["UserInfoProvider"]);
        this.moduleConfigProvider = injector.get(_nequi_features_commons__WEBPACK_IMPORTED_MODULE_4__["ModuleConfigProvider"]);
        this.dynatraceService = injector.get(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_6__["DynatraceService"]);
    }
    BaseMiddleware.prototype.canActivate = function (route) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var isActivate;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.data = route.data;
                        return [4 /*yield*/, this.translateProvider.loadModule(this.moduleConfigProvider.i18n.moduleKey)];
                    case 1:
                        _a.sent();
                        if (!this.config.validPaths.includes(this.router.url)) {
                            return [2 /*return*/, true];
                        }
                        return [4 /*yield*/, this.setAnalyticsBeforeBegin()];
                    case 2:
                        _a.sent();
                        this.checkDeepLink();
                        this.setGetCustomerCreditsException();
                        this.setApprovalFrontException();
                        return [4 /*yield*/, this.onValidateToRedirect()];
                    case 3:
                        isActivate = _a.sent();
                        return [4 /*yield*/, this.dynatraceService.setAnalyticsOfEnd()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, isActivate];
                }
            });
        });
    };
    BaseMiddleware.prototype.validateGetCustomerCredit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 10]);
                        return [4 /*yield*/, this.loadingService.show()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getCreditInfo()];
                    case 2:
                        data = _a.sent();
                        return [4 /*yield*/, this.loadingService.hideWithoutFeedback()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, this.getCustomerCreditsSuccess(data)];
                    case 4:
                        error_1 = _a.sent();
                        return [4 /*yield*/, this.loadingService.hideWithoutFeedback()];
                    case 5:
                        _a.sent();
                        this.dynatraceService.setCustomError(error_1);
                        if (!(error_1.constructor === _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__["CreditStillOpenException"])) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.showCardModal({ i18nKey: _middlewares_base_config__WEBPACK_IMPORTED_MODULE_11__["BaseConfig"].common.modal.paymentIsStillProcessing })];
                    case 6:
                        _a.sent();
                        return [2 /*return*/];
                    case 7:
                        if (!(error_1.constructor === _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__["UnavailabilityTimeException"])) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.showPromptAlertUnavailabilityTime(error_1)];
                    case 8:
                        _a.sent();
                        return [2 /*return*/];
                    case 9: return [2 /*return*/, this.getCustomerCreditsFail(error_1)];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    BaseMiddleware.prototype.showCardModal = function (params) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var message, buttons, result;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        message = params.i18nKey ? this.translateProvider.get(params.i18nKey) : params.message;
                        buttons = [
                            {
                                text: message.buttons.accept,
                                handler: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () { var _a; return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                                    return [2 /*return*/, (_a = params.onAccept) === null || _a === void 0 ? void 0 : _a.call(params)];
                                }); }); },
                            },
                        ];
                        if ((_a = message.buttons) === null || _a === void 0 ? void 0 : _a.cancel) {
                            buttons.push({
                                text: message.buttons.cancel,
                                color: 'medianoche-gray',
                                handler: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () { var _a; return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                                    return [2 /*return*/, (_a = params.onCancel) === null || _a === void 0 ? void 0 : _a.call(params)];
                                }); }); },
                            });
                        }
                        if (message.link) {
                            buttons.push({
                                isLink: true,
                                text: message.link.text,
                                handler: function () {
                                    Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_10__["openUrl"])(message.link.url);
                                },
                            });
                        }
                        return [4 /*yield*/, this.cardModalService.show({
                                title: message.title,
                                imgPath: message.image,
                                content: message.description,
                                buttons: buttons,
                            })];
                    case 1:
                        result = _b.sent();
                        return [2 /*return*/, result === null || result === void 0 ? void 0 : result.data];
                }
            });
        });
    };
    BaseMiddleware.prototype.showPromptAlertUnavailabilityTime = function (error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var i18n, messages;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                i18n = this.translateProvider.get(this.config.common.alert.unavailabilityTime.alertconfig);
                messages = {
                    header: i18n.title,
                    message: error.message,
                    buttons: {
                        accept: i18n.button,
                    },
                };
                return [2 /*return*/, this.alertService.show({
                        messages: messages,
                        handlers: {
                            accept: function () { return _this.navController.navigateRoot(_this.config.routes.dashboard); },
                        },
                    })];
            });
        });
    };
    BaseMiddleware.prototype.setMaxAttemptApprovalFront = function (data) {
        var _a, _b;
        this.approvalFrontViewModel.info.attempt.maxAttempt = (_b = (_a = data === null || data === void 0 ? void 0 : data.attempts) === null || _a === void 0 ? void 0 : _a.maxAttempt) !== null && _b !== void 0 ? _b : null;
    };
    BaseMiddleware.prototype.processGetApprovalAttemptError = function (error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.dynatraceService.setCustomError(error);
                messages = this.translateProvider.get(this.config[this.data.moduleName].modal.dontHaveApprovalAttempt);
                messages.description = this.translateProvider.get(this.config[this.data.moduleName].modal.dontHaveApprovalAttemptDescription, {
                    limitedConsultations: String(error.data.attempts.maxAttempt),
                });
                this.showCardModal({ message: messages });
                return [2 /*return*/, false];
            });
        });
    };
    BaseMiddleware.prototype.getCustomerCreditsSuccess = function (data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var preapproved, credit, creditUserInfo;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.creditInfoModel.customerCreditInfo = data;
                preapproved = data.preapproved, credit = data.credit;
                creditUserInfo = this.customerFinancialService.creditUserInfo;
                if (preapproved) {
                    this.customerFinancialService.updateCreditUser(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, creditUserInfo), { hasPreapproved: true, hasCredit: false }));
                    this.nextRoute = this.data.redirectToPreapproved;
                    return [2 /*return*/, this.showWelcome()];
                }
                if (credit) {
                    this.customerFinancialService.updateCreditUser(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, creditUserInfo), { hasPreapproved: false, hasCredit: true }));
                    this.nextRoute = this.data.redirectToPayment;
                    return [2 /*return*/, true];
                }
                return [2 /*return*/, false];
            });
        });
    };
    BaseMiddleware.prototype.showWelcome = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var bottomSheetMessages, result;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        bottomSheetMessages = this.translateProvider.get(String(this.data.bottomSheetKey.welcome));
                        return [4 /*yield*/, this.firstTimeMessageBottomSheetService.show({
                                icon: bottomSheetMessages.image,
                                message: bottomSheetMessages.message,
                                content: bottomSheetMessages.content,
                                url: bottomSheetMessages.url,
                                cssClass: 'first-time-message--icon-standard',
                                header: {
                                    view: true,
                                    action: function () { return _this.firstTimeMessageBottomSheetService.hide(); },
                                },
                                button: {
                                    label: bottomSheetMessages.button,
                                    color: 'guayaba',
                                    fill: 'outline',
                                    action: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                        return [2 /*return*/, this.firstTimeMessageBottomSheetService.hide(true)];
                                    }); }); },
                                },
                            })];
                    case 1:
                        result = _a.sent();
                        if (result === null || result === void 0 ? void 0 : result.data) {
                            this.setAnalyticsIntentionOfBegin();
                            this.creditLoggerService.save({
                                flowType: this.data.flowType,
                                i18nKey: this.config[this.data.moduleName].logs.welcome,
                            });
                        }
                        if (!(this.data.flowType === _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["FlowType"].PARACHUTE)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.showCardModal({ i18nKey: _middlewares_base_config__WEBPACK_IMPORTED_MODULE_11__["BaseConfig"].parachute.modal.cannotSaveYou })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/, !!(result === null || result === void 0 ? void 0 : result.data)];
                }
            });
        });
    };
    BaseMiddleware.prototype.showComeBackLaterAlert = function (text) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var i18n;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                i18n = this.translateProvider.get(this.config.common.alert.comeBackLater);
                i18n.message = text.replace(i18n.message, '').trim();
                return [2 /*return*/, this.alertService.show({ messages: i18n })];
            });
        });
    };
    BaseMiddleware.prototype.setCustomerCreditsError = function (data) {
        this.creditInfoModel.customerCreditInfo = data;
        var preapproved = data === null || data === void 0 ? void 0 : data.preapproved;
        var creditUserInfo = this.customerFinancialService.creditUserInfo;
        if (preapproved) {
            this.customerFinancialService.updateCreditUser(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, creditUserInfo), { hasPreapproved: true, hasCredit: false }));
        }
        this.nextRoute = this.data.redirectToPreapproved;
    };
    BaseMiddleware.prototype.onSarlaftLocksError = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.showCardModal({
                    i18nKey: this.config[this.data.moduleName].modal.youCantNow,
                });
                return [2 /*return*/];
            });
        });
    };
    BaseMiddleware.prototype.showUserDontHavePreapprovalModal = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var i18n, i18nFormatted, result;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i18n = this.translateProvider.get(this.config[this.data.moduleName].modal.dontHavePreapproved);
                        i18nFormatted = Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_10__["toCamelCaseProperties"])(i18n);
                        return [4 /*yield*/, this.setAnalyticsIntentionOfApprovalUpFront()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.fullscreenModalService.show({
                                title: i18nFormatted.title,
                                imgPath: i18nFormatted.image,
                                content: i18nFormatted.description,
                                cssClass: this.config.fullscreenModal.cssClass,
                                buttons: [
                                    {
                                        text: i18nFormatted.acceptButton,
                                        handler: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                            var resultAttempt;
                                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0: return [4 /*yield*/, this.getApprovalUpFrontAttempt()];
                                                    case 1:
                                                        resultAttempt = _a.sent();
                                                        this.fullscreenModalService.hide(resultAttempt);
                                                        return [2 /*return*/, true];
                                                }
                                            });
                                        }); },
                                        cssClass: this.config.fullscreenModal.cssClassButton,
                                    },
                                ],
                                link: {
                                    text: i18nFormatted.moreInfoLink,
                                    url: this.config.routes.moreInfo,
                                },
                            })];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, !!(result === null || result === void 0 ? void 0 : result.data)];
                }
            });
        });
    };
    BaseMiddleware.prototype.failApprovalUpFrontAttempt = function (error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.dynatraceService.setCustomError(error);
                        if (error === null || error === void 0 ? void 0 : error.data) {
                            this.setMaxAttemptApprovalFront(error.data);
                        }
                        if (this.approvalFrontException[error.constructor.name]) {
                            return [2 /*return*/, this.approvalFrontException[error.constructor.name](error)];
                        }
                        if (!(error.constructor !== _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__["HaveApprovalAttemptException"] &&
                            error.constructor !== _nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__["NeverBeenApprovedFrontException"])) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toastService.showError(error.message)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, false];
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    BaseMiddleware.prototype.setApprovalFrontException = function () {
        var _a;
        var _this = this;
        this.approvalFrontException = (_a = {},
            _a[_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__["DontHaveApprovalAttemptWithDataException"].name] = function (error) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, this.onApprovalAttemptWithDataException(error)];
            }); }); },
            _a[_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__["DontHaveApprovalAttemptException"].name] = function (error) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, this.processGetApprovalAttemptError(error)];
            }); }); },
            _a[_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__["HaveApprovalAttemptException"].name] = function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                var _this = this;
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                    this.showCardModal({
                        i18nKey: this.config[this.data.moduleName].modal.lastApprovalAttempt,
                        onAccept: function () {
                            _this.navController.navigateRoot(_this.config[_this.data.moduleName].routes.knowUsBetterEngine);
                        },
                        onCancel: function () { return false; },
                    });
                    return [2 /*return*/, false];
                });
            }); },
            _a[_nequi_features_credits_core__WEBPACK_IMPORTED_MODULE_7__["NeverBeenApprovedFrontException"].name] = function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                    this.navController.navigateRoot(this.config[this.data.moduleName].routes.knowUsBetterEngine);
                    return [2 /*return*/, false];
                });
            }); },
            _a);
    };
    BaseMiddleware.prototype.onValidateToRedirect = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.validateGetCustomerCredit()];
                    case 1:
                        if (_a.sent()) {
                            this.navController.navigateForward(this.nextRoute);
                            return [2 /*return*/, true];
                        }
                        return [2 /*return*/, false];
                }
            });
        });
    };
    BaseMiddleware.prototype.getApprovalUpFrontAttempt = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var response, error_2;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 6]);
                        return [4 /*yield*/, this.loadingService.show()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.creditInteractor.getApprovalAttempt()];
                    case 2:
                        response = _a.sent();
                        this.setMaxAttemptApprovalFront(response);
                        return [4 /*yield*/, this.loadingService.hideWithoutFeedback()];
                    case 3:
                        _a.sent();
                        this.navController.navigateForward(this.config[this.data.moduleName].routes.knowUsBetterEngine, {
                            relativeTo: this.route,
                        });
                        return [3 /*break*/, 6];
                    case 4:
                        error_2 = _a.sent();
                        return [4 /*yield*/, this.loadingService.hideWithoutFeedback()];
                    case 5:
                        _a.sent();
                        return [2 /*return*/, this.failApprovalUpFrontAttempt(error_2)];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    BaseMiddleware.prototype.setAnalyticsIntentionOfBegin = function () {
        var _a;
        var eventName = this.config[this.data.moduleName].analytics.intentionOfBegin.name;
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
                eventProps: Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_10__["stringsArrayToObjectWithValues"])(this.config[this.data.moduleName].analytics.intentionOfBegin.params.cleverTap, [
                    Object(_nequi_utils_date__WEBPACK_IMPORTED_MODULE_9__["getFormattedDateTimes"])(),
                    String((_a = this.customerFinancialService.creditUserInfo) === null || _a === void 0 ? void 0 : _a.hasPreapproved),
                ]),
            },
        });
    };
    BaseMiddleware.prototype.checkDeepLink = function () {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var analytics;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        analytics = (_b = (_a = this.router.getCurrentNavigation().extras.queryParams) === null || _a === void 0 ? void 0 : _a.args) === null || _b === void 0 ? void 0 : _b.analytics;
                        if (!analytics) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.onSaveAdditionalInfo(analytics)];
                    case 1:
                        _c.sent();
                        this.setAnalyticsIntentionOfDeeplink(analytics);
                        _c.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    BaseMiddleware.prototype.onSaveAdditionalInfo = function (analytics) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var deeplinkInfo, error_3;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        deeplinkInfo = this.config[this.data.moduleName].deeplink;
                        return [4 /*yield*/, this.creditInteractor.saveAdditionalInfo(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, deeplinkInfo), { options: [
                                    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, deeplinkInfo.options.intention),
                                    { key: deeplinkInfo.options.intentionDate, value: Object(_nequi_utils_date__WEBPACK_IMPORTED_MODULE_9__["getFormattedDateTimes"])() },
                                    { key: deeplinkInfo.options.origin, value: analytics },
                                ] }))];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        error_3 = _a.sent();
                        return [4 /*yield*/, this.toastService.showError(error_3.message)];
                    case 3:
                        _a.sent();
                        this.dynatraceService.setCustomError(error_3);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    BaseMiddleware.prototype.setAnalyticsIntentionOfDeeplink = function (analytics) {
        var eventName = this.config[this.data.moduleName].analytics.intentionOfDeeplink.name;
        this.analyticsInteractor.trackEvent({
            type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_5__["AnalyticsType"].CLEVERTAP,
            params: {
                eventName: eventName,
                eventProps: Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_10__["stringsArrayToObjectWithValues"])(this.config[this.data.moduleName].analytics.intentionOfDeeplink.params.cleverTap, [Object(_nequi_utils_date__WEBPACK_IMPORTED_MODULE_9__["getFormattedDateTimes"])(), this.userInfoProvider.getDocument().id, analytics]),
            },
        });
    };
    BaseMiddleware.prototype.getCreditInfo = function () {
        if (this.data.moduleName === MiddlewareModuleName.PROPELLER) {
            return this.creditInteractor.getPropeller();
        }
        if (this.data.moduleName === MiddlewareModuleName.PARACHUTE) {
            return this.creditInteractor.getParachute();
        }
        if (this.data.moduleName === MiddlewareModuleName.LIFEGUARD_RECHARGED) {
            return this.creditInteractor.getLifeguardRecharged();
        }
    };
    BaseMiddleware.prototype.setAnalyticsIntentionOfApprovalUpFront = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var eventName;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        eventName = this.config[this.data.moduleName].analytics.intentionOfApprovalUpFront.name;
                        return [4 /*yield*/, this.dynatraceService.setAnalyticsOfEvent({
                                eventName: eventName,
                                leave: true,
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BaseMiddleware.prototype.setAnalyticsBeforeBegin = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dynatraceService.setAnalyticsOfEvent({
                            eventName: this.config[this.data.moduleName].analytics.intentionBeforeBegin.name,
                            eventProps: Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_10__["stringsArrayToObjectWithValues"])(this.config[this.data.moduleName].analytics.intentionBeforeBegin.params.dynatrace, this.config[this.data.moduleName].analytics.intentionBeforeBegin.value),
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BaseMiddleware.prototype.onApprovalAttemptWithDataException = function (error) {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                this.approvalFrontViewModel.info.attempt.isCallService = false;
                this.approvalFrontViewModel.info.isFromApproval = true;
                this.approvalFrontViewModel.info.attempt.error = error;
                if (Array.isArray((_a = error.data) === null || _a === void 0 ? void 0 : _a.installmentList) && ((_b = error.data) === null || _b === void 0 ? void 0 : _b.installmentList.length)) {
                    this.approvalFrontViewModel.info.installmentList = error.data.installmentList;
                }
                return [2 /*return*/, true];
            });
        });
    };
    BaseMiddleware.ɵfac = function BaseMiddleware_Factory(t) { return new (t || BaseMiddleware)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"])); };
    BaseMiddleware.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BaseMiddleware, factory: BaseMiddleware.ɵfac });
    return BaseMiddleware;
}());



/***/ })

}]);
//# sourceMappingURL=default~products-lifeguard-recharged-lifeguard-recharged-module~products-parachute-parachute-module~~a4d0b337.js.map