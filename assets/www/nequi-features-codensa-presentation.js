(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nequi-features-codensa-presentation"],{

/***/ "+Y2H":
/*!***************************************************************************!*\
  !*** ./libs/features/codensa/src/presentation/pages/home/home.service.ts ***!
  \***************************************************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_application_data_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/application-data/core */ "UgzZ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/profile/presentation */ "cLcF");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _home_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home.config */ "7tpx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");















var HomeService = /** @class */ (function () {
    function HomeService(navigatorProvider, firstTimeMessageBottomSheetService, translateProvider, applicationDataInteractor, route, cardModalService, alertService, profileService, moduleConfigProvider) {
        this.navigatorProvider = navigatorProvider;
        this.firstTimeMessageBottomSheetService = firstTimeMessageBottomSheetService;
        this.translateProvider = translateProvider;
        this.applicationDataInteractor = applicationDataInteractor;
        this.route = route;
        this.cardModalService = cardModalService;
        this.alertService = alertService;
        this.profileService = profileService;
        this.moduleConfigProvider = moduleConfigProvider;
        this.config = _home_config__WEBPACK_IMPORTED_MODULE_7__["CodensaConfig"];
        this.isWrongTime = false;
    }
    HomeService.prototype.goBack = function () {
        this.navigatorProvider.back();
    };
    HomeService.prototype.showCodensaWelcome = function (isWrongTime) {
        if (isWrongTime === void 0) { isWrongTime = false; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, button, cssClass, isFirstTime, bottomSheetMessages;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.config.firstMessage, button = _a.button, cssClass = _a.cssClass;
                        return [4 /*yield*/, this.applicationDataInteractor.findValue(this.moduleConfigProvider.applicationData.isFirstTime, true)];
                    case 1:
                        isFirstTime = _b.sent();
                        if (!isFirstTime) return [3 /*break*/, 4];
                        bottomSheetMessages = this.translateProvider.get(this.config.i18n.bottomSheet.welcome);
                        return [4 /*yield*/, this.firstTimeMessageBottomSheetService.show({
                                icon: bottomSheetMessages.image,
                                message: bottomSheetMessages.message,
                                content: bottomSheetMessages.content,
                                cssClass: cssClass.firstTimeMessage,
                                header: {
                                    view: true,
                                    action: function () { return _this.redirect(true); },
                                },
                                button: {
                                    label: bottomSheetMessages.button,
                                    color: button.color,
                                    fill: button.fill,
                                    action: function () { return _this.redirect(isWrongTime); },
                                },
                            })];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, this.applicationDataInteractor.save(this.moduleConfigProvider.applicationData.isFirstTime, false)];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    HomeService.prototype.onShowCardModal = function (i18nMessage, onAccept, onCancel) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var message, buttons;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        message = this.translateProvider.get(i18nMessage);
                        buttons = ((_a = message.buttons) === null || _a === void 0 ? void 0 : _a.cancel) ? [
                            {
                                text: message.buttons.accept,
                                handler: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                    return [2 /*return*/, onAccept === null || onAccept === void 0 ? void 0 : onAccept()];
                                }); }); },
                            },
                            {
                                text: message.buttons.cancel,
                                color: this.config.colors.midnight,
                                handler: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                    return [2 /*return*/, onCancel === null || onCancel === void 0 ? void 0 : onCancel()];
                                }); }); },
                            },
                        ]
                            : [
                                {
                                    text: message.buttons.accept,
                                    handler: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                        return [2 /*return*/, onAccept === null || onAccept === void 0 ? void 0 : onAccept()];
                                    }); }); },
                                },
                            ];
                        return [4 /*yield*/, this.cardModalService.show({
                                title: message.header,
                                imgPath: message.image,
                                content: message.content,
                                buttons: buttons,
                            })];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeService.prototype.onShowError = function (messages) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var alertConfig;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                alertConfig = this.translateProvider.get(messages);
                this.alertService.show({
                    messages: {
                        message: alertConfig.content,
                        header: alertConfig.header,
                        buttons: alertConfig.buttons,
                    },
                });
                return [2 /*return*/];
            });
        });
    };
    HomeService.prototype.goToRoute = function (route) {
        this.navigatorProvider.navigateRoot(route, {
            relativeTo: this.route,
            replaceUrl: true,
        });
    };
    HomeService.prototype.setInfoSearch = function (data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.applicationDataInteractor.save(this.moduleConfigProvider.applicationData.searchBy, JSON.stringify(data))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeService.prototype.getInfoSearch = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var searchBy;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.applicationDataInteractor.findValue(this.moduleConfigProvider.applicationData.searchBy)];
                    case 1:
                        searchBy = _a.sent();
                        return [2 /*return*/, searchBy
                                ? JSON.parse(searchBy)
                                : { email: this.profileService.getEmail() }];
                }
            });
        });
    };
    HomeService.prototype.redirect = function (isWrongTime) {
        this.firstTimeMessageBottomSheetService.hide();
        if (isWrongTime) {
            this.goBack();
        }
    };
    HomeService.ɵfac = function HomeService_Factory(t) { return new (t || HomeService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_4__["NavigatorProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_6__["FirstTimeMessageBottomSheetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_4__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_nequi_features_application_data_core__WEBPACK_IMPORTED_MODULE_2__["ApplicationDataInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_6__["CardModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_4__["ModuleConfigProvider"])); };
    HomeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: HomeService, factory: HomeService.ɵfac });
    return HomeService;
}());



/***/ }),

/***/ "7tpx":
/*!**************************************************************************!*\
  !*** ./libs/features/codensa/src/presentation/pages/home/home.config.ts ***!
  \**************************************************************************/
/*! exports provided: CodensaConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodensaConfig", function() { return CodensaConfig; });
var CodensaConfig = Object.freeze({
    i18n: {
        title: 'codensa.home.title',
        pinChallenge: 'codensa.home.pin-challenge',
        bottomSheet: {
            welcome: 'codensa.home.bottom-sheet.welcome',
            confirm: 'codensa.home.bottom-sheet.confirm',
        },
        billType: 'codensa.home.bill-type',
        withoutPendingBillsError: 'codensa.home.modals.without-pending-bills',
        successPaymentAlert: 'codensa.home.modals.success-payment',
        paidBillAlert: 'codensa.home.modals.paid-bill-error',
        userWithProblemsInCodensa: 'codensa.home.modals.user-with-problems-in-codensa-error',
        billWithPaymentInTransit: 'codensa.home.modals.bill-with-payment-in-transit-error',
        barcodeReader: 'codensa.home.barcode-reader.view',
        invalidBarcodeError: 'codensa.home.barcode-reader.errors.invalid-barcode',
        barcodeError: 'codensa.home.barcode-reader.errors',
    },
    routes: {
        backpack: '/admin/dashboard',
        closet: '/admin/store',
    },
    firstMessage: {
        button: {
            color: 'guayaba',
            fill: 'outline',
        },
        cssClass: {
            firstTimeMessage: 'first-time-message--icon-standard',
        },
    },
    validators: {
        accountNumber: {
            minLength: 7,
            maxLength: 7,
            pattern: '^[0-9]+$',
        },
        email: {
            minLength: 6,
            maxLength: 50,
            // eslint-disable-next-line no-useless-escape
            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        },
        barCode: {
            fromValue: 2,
            toValue: 9,
        },
    },
    colors: {
        midnight: 'medianoche',
    },
    barcodeReader: {
        showGalleryButton: 'true',
        errors: {
            goBackOnCamera: '14004',
        },
    },
});


/***/ }),

/***/ "GKrZ":
/*!******************************************************************************************!*\
  !*** ./libs/features/codensa/src/presentation/organisms/bill-list/bill-list.organism.ts ***!
  \******************************************************************************************/
/*! exports provided: BillListOrganism */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillListOrganism", function() { return BillListOrganism; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ui_src_lib_directives_nequi_currency_style_nequi_currency_style_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../ui/src/lib/directives/nequi-currency-style/nequi-currency-style.directive */ "kVXI");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");










function BillListOrganism_h2_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.title);
} }
function BillListOrganism_ion_item_8_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-item", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BillListOrganism_ion_item_8_Template_ion_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); var item_r2 = ctx.$implicit; var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.sendBill(item_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ion-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "ion-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "ion-text", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r2 = ctx.$implicit;
    var idx_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "bill-list-item-section_", idx_r3, "_item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "bill-list-item-name_", idx_r3, "_text");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 9, "codensa.home.bill-type." + item_r2.type), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "bill-list-item-account_number_", idx_r3, "_text");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r2.accountNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "bill-list-item-value_", idx_r3, "_text");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 11, "codensa.home.value"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nequiCurrencyStyle", item_r2.amount)("showDecimals", false);
} }
var BillListOrganism = /** @class */ (function () {
    function BillListOrganism(bottomSheetController, translateProvider) {
        this.bottomSheetController = bottomSheetController;
        this.translateProvider = translateProvider;
    }
    BillListOrganism.prototype.sendBill = function (item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.action(item)];
                    case 1:
                        _a.sent();
                        this.bottomSheetController.dismiss();
                        return [2 /*return*/];
                }
            });
        });
    };
    BillListOrganism.prototype.hide = function () {
        this.bottomSheetController.dismiss();
    };
    BillListOrganism.ɵfac = function BillListOrganism_Factory(t) { return new (t || BillListOrganism)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_2__["BottomSheetController"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_1__["TranslateProvider"])); };
    BillListOrganism.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: BillListOrganism, selectors: [["app-bill-list"]], inputs: { items: "items", title: "title", action: "action" }, decls: 9, vars: 2, consts: [[1, "nequi-header"], [1, "bill-list__toolbar"], ["slot", "start"], ["id", "bill-list_back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], ["fullscreen", "true", "scrollY", "true", 1, "bill-list__content", "ion-padding-horizontal"], ["id", "bottom-sheet_title_text", "class", "bill-list__title", 4, "ngIf"], ["lines", "inset", 1, "ion-no-margin", "bill-list__list"], ["class", "bill-list__item", 3, "id", "click", 4, "ngFor", "ngForOf"], ["id", "bottom-sheet_title_text", 1, "bill-list__title"], [1, "bill-list__item", 3, "id", "click"], [1, "ion-text-wrap"], [1, "bill-list__item--name", 3, "id"], [1, "bill-list__item--account_number", 3, "id"], [1, "bill-list__item--value", 3, "id"], [1, "bill-list-item__amount", 3, "nequiCurrencyStyle", "showDecimals"]], template: function BillListOrganism_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-toolbar", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-buttons", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ion-button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BillListOrganism_Template_ion_button_click_3_listener() { return ctx.hide(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "ion-icon", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, BillListOrganism_h2_6_Template, 2, 1, "h2", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-list", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, BillListOrganism_ion_item_8_Template, 13, 13, "ion-item", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.title);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.items);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonText"], _ui_src_lib_directives_nequi_currency_style_nequi_currency_style_directive__WEBPACK_IMPORTED_MODULE_6__["NequiCurrencyStyleDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]], styles: ["[_nghost-%COMP%] {\n  position: relative;\n}\n\n.bill-list__content[_ngcontent-%COMP%] {\n  --background: var(--transparent);\n}\n\n.bill-list__title[_ngcontent-%COMP%] {\n  margin: 8px 0px 0px;\n  color: var(--medianoche);\n  font-style: normal;\n  font-size: 24px;\n  line-height: 29px;\n}\n\n.bill-list__list[_ngcontent-%COMP%] {\n  background: none;\n  height: calc(70vh - 72px);\n  overflow-y: scroll;\n}\n\n.bill-list__item[_ngcontent-%COMP%] {\n  padding: 6px 0;\n  min-height: 56px;\n  background: var(--white);\n}\n\n.bill-list__item[_ngcontent-%COMP%]::part(native) {\n  padding-right: 20px;\n}\n\n.bill-list__item--name[_ngcontent-%COMP%] {\n  color: var(--medianoche);\n  font-size: 1rem;\n  font-weight: 500;\n}\n\n.bill-list__item--account_number[_ngcontent-%COMP%], .bill-list__item--value[_ngcontent-%COMP%] {\n  color: var(--gray-70);\n  font-size: 0.875rem;\n  font-weight: 400;\n  margin-top: 4px;\n  margin-left: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvYmlsbC1saXN0Lm9yZ2FuaXNtLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUdFO0VBQ0UsZ0NBQUE7QUFBSjs7QUFHRTtFQUNFLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQURKOztBQUlFO0VBQ0UsZ0JBQUE7RUFFQSx5QkFBQTtFQUNBLGtCQUFBO0FBSEo7O0FBTUU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQUpKOztBQU1JO0VBQ0UsbUJBQUE7QUFKTjs7QUFPSTtFQUNFLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBTE47O0FBUUk7RUFFRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFQTiIsImZpbGUiOiJiaWxsLWxpc3Qub3JnYW5pc20uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYmlsbC1saXN0IHtcbiAgJl9fY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XG4gIH1cblxuICAmX190aXRsZSB7XG4gICAgbWFyZ2luOiA4cHggMHB4IDBweDtcbiAgICBjb2xvcjogdmFyKC0tbWVkaWFub2NoZSk7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMjlweDtcbiAgfVxuXG4gICZfX2xpc3Qge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG5cbiAgICBoZWlnaHQ6IGNhbGMoNzB2aCAtIDcycHgpO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgfVxuXG4gICZfX2l0ZW0ge1xuICAgIHBhZGRpbmc6IDZweCAwO1xuICAgIG1pbi1oZWlnaHQ6IDU2cHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuXG4gICAgJjo6cGFydChuYXRpdmUpIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgfVxuXG4gICAgJi0tbmFtZSB7XG4gICAgICBjb2xvcjogdmFyKC0tbWVkaWFub2NoZSk7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cblxuICAgICYtLWFjY291bnRfbnVtYmVyLFxuICAgICYtLXZhbHVlIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1ncmF5LTcwKTtcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
    return BillListOrganism;
}());



/***/ }),

/***/ "XIsZ":
/*!************************************************************!*\
  !*** ./libs/features/codensa/src/config/codensa.config.ts ***!
  \************************************************************/
/*! exports provided: CodensaConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodensaConfig", function() { return CodensaConfig; });
var CodensaConfig = Object.freeze({
    i18n: {
        moduleKey: 'codensa',
    },
    applicationData: {
        isFirstTime: 'codensa.codensa-home-is-show-first-message',
        searchBy: 'codensa.codensa-home-search-by',
    },
});


/***/ }),

/***/ "cByV":
/*!******************************************************************************!*\
  !*** ./libs/features/codensa/src/presentation/pages/home/home.view-model.ts ***!
  \******************************************************************************/
/*! exports provided: HomeViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeViewModel", function() { return HomeViewModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _nequi_features_codensa_core_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/codensa/core/constants */ "MLzP");
/* harmony import */ var _nequi_utils_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/utils/string */ "p6rB");
/* harmony import */ var _home_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.config */ "7tpx");





var HomeViewModel = /** @class */ (function () {
    function HomeViewModel() {
        this.config = _home_config__WEBPACK_IMPORTED_MODULE_4__["CodensaConfig"];
        this.pocketList = [];
    }
    HomeViewModel.prototype.getBillsData = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var barCode;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                barCode = this.queryBarCode
                    ? String(this.queryBarCode.substring(this.config.validators.barCode.fromValue, this.config.validators.barCode.toValue))
                    : null;
                if (this.accountNumber.value === barCode) {
                    return [2 /*return*/, {
                            searchBy: _nequi_features_codensa_core_constants__WEBPACK_IMPORTED_MODULE_2__["SearchByType"].BARCODE,
                            billCode: this.queryBarCode,
                        }];
                }
                return [2 /*return*/, {
                        searchBy: _nequi_features_codensa_core_constants__WEBPACK_IMPORTED_MODULE_2__["SearchByType"].ACCOUNT_NUMBER,
                        billCode: this.accountNumber.value,
                    }];
            });
        });
    };
    HomeViewModel.prototype.setAccountNumber = function (params) {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                this.queryBarCode = (_a = params === null || params === void 0 ? void 0 : params.barcode) !== null && _a !== void 0 ? _a : null;
                this.accountNumber.setValue((_b = params === null || params === void 0 ? void 0 : params.accountNumber) !== null && _b !== void 0 ? _b : null);
                return [2 /*return*/];
            });
        });
    };
    HomeViewModel.prototype.buildItems = function (messages, billType, currencyPipe, datePipe) {
        return [
            {
                label: messages.type,
                value: billType,
            },
            {
                label: messages.amount,
                value: currencyPipe.transform(this.billInfo.amount, '', 'symbol', '.0'),
            },
            {
                label: messages.accountNumber,
                value: this.billInfo.accountNumber,
            },
            {
                label: messages.customerName,
                value: Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_3__["toCapitalize"])(this.billInfo.customerName),
            },
            {
                label: messages.address,
                value: Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_3__["toCapitalize"])(this.billInfo.address),
            },
            {
                label: messages.expirationAt,
                value: datePipe.transform(this.billInfo.expirationAt),
            },
            {
                label: messages.email,
                value: this.email.value,
            },
        ];
    };
    HomeViewModel.prototype.buildForm = function (infoSearch) {
        this.createControls(infoSearch);
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            accountNumber: this.accountNumber,
            email: this.email,
        });
        this.form.markAsPristine();
        this.form.markAsUntouched();
    };
    HomeViewModel.prototype.createControls = function (infoSearch) {
        var accountNumber = infoSearch.accountNumber, email = infoSearch.email;
        this.accountNumber = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](accountNumber !== null && accountNumber !== void 0 ? accountNumber : null, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(this.config.validators.accountNumber.minLength),
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(this.config.validators.accountNumber.maxLength),
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.config.validators.accountNumber.pattern),
        ]);
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](email !== null && email !== void 0 ? email : null, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(this.config.validators.email.minLength),
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(this.config.validators.email.maxLength),
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.config.validators.email.pattern),
        ]);
        this.pocket = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.pocketList[0]);
    };
    return HomeViewModel;
}());



/***/ }),

/***/ "cqpJ":
/*!*********************************************************!*\
  !*** ./libs/features/codensa/src/presentation/index.ts ***!
  \*********************************************************/
/*! exports provided: FeaturesCodensaModule, BillListOrganism */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _features_codensa_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./features-codensa.module */ "mCBF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeaturesCodensaModule", function() { return _features_codensa_module__WEBPACK_IMPORTED_MODULE_0__["FeaturesCodensaModule"]; });

/* harmony import */ var _organisms_bill_list_bill_list_organism__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./organisms/bill-list/bill-list.organism */ "GKrZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BillListOrganism", function() { return _organisms_bill_list_bill_list_organism__WEBPACK_IMPORTED_MODULE_1__["BillListOrganism"]; });





/***/ }),

/***/ "fTM9":
/*!***********************************************************************************!*\
  !*** ./libs/features/codensa/src/presentation/features-codensa-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: FeaturesCodensaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesCodensaRoutingModule", function() { return FeaturesCodensaRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _config_codensa_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/codensa.config */ "XIsZ");
/* harmony import */ var _pages_home_home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.page */ "gdVu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






var routes = [
    {
        path: '',
        component: _pages_home_home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    },
];
var FeaturesCodensaRoutingModule = /** @class */ (function () {
    function FeaturesCodensaRoutingModule() {
    }
    FeaturesCodensaRoutingModule.ɵfac = function FeaturesCodensaRoutingModule_Factory(t) { return new (t || FeaturesCodensaRoutingModule)(); };
    FeaturesCodensaRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: FeaturesCodensaRoutingModule });
    FeaturesCodensaRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(_nequi_features_commons__WEBPACK_IMPORTED_MODULE_1__["I18nModuleResolver"].setup(routes, [_config_codensa_config__WEBPACK_IMPORTED_MODULE_2__["CodensaConfig"].i18n.moduleKey])),
            ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return FeaturesCodensaRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](FeaturesCodensaRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "gdVu":
/*!************************************************************************!*\
  !*** ./libs/features/codensa/src/presentation/pages/home/home.page.ts ***!
  \************************************************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nequi_features_codensa_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/codensa/core */ "VbCg");
/* harmony import */ var _nequi_features_codensa_core_exceptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/codensa/core/exceptions */ "4A4/");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_money_management_presentation_controls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/features/money-management/presentation/controls */ "CTrg");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _organisms_bill_list_bill_list_organism__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../organisms/bill-list/bill-list.organism */ "GKrZ");
/* harmony import */ var _home_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home.config */ "7tpx");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home.service */ "+Y2H");
/* harmony import */ var _home_view_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home.view-model */ "cByV");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ui_src_lib_directives_form_content_style_form_content_style_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../ui/src/lib/directives/form-content-style/form-content-style.directive */ "+XT3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ui_src_lib_directives_message_manager_message_manager_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../ui/src/lib/directives/message-manager/message-manager.directive */ "68HU");
/* harmony import */ var _ui_src_lib_directives_control_errors_control_errors_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../ui/src/lib/directives/control-errors/control-errors.directive */ "XHcO");
/* harmony import */ var _money_management_src_presentation_controls_origin_money_control_origin_money_control_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../money-management/src/presentation/controls/origin-money-control/origin-money-control.component */ "O3Yd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");




























function HomePage_form_9_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "nequi-origin-money-control", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("minAmount", ctx_r1.viewModel.billInfo == null ? null : ctx_r1.viewModel.billInfo.amount)("formControl", ctx_r1.viewModel.pocket);
} }
var _c0 = function (a0, a1, a2, a3) { return { required: a0, pattern: a1, maxlength: a2, minlength: a3 }; };
var _c1 = function (a0, a1, a3, a4) { return { control: a0, infoMessage: a1, cssClass: "margin-bottom-8", helpMessage: a3, errorMessages: a4 }; };
var _c2 = function (a0, a1) { return { control: a0, messages: a1 }; };
function HomePage_form_9_Template(rf, ctx) { if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ionFocus", function HomePage_form_9_Template_ion_input_ionFocus_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); ctx_r2.viewModel.accountNumber.markAsUntouched(); return ctx_r2.viewModel.accountNumber.markAsPristine(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ion-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "ion-input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, HomePage_form_9_div_21_Template, 2, 2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.viewModel.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nequiMessageManager", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction4"](37, _c1, ctx_r0.viewModel.accountNumber, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 8, "codensa.home.controls-errors.account-number.info"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 10, "codensa.home.controls-errors.account-number.help"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction4"](32, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 12, "codensa.home.controls-errors.account-number.required"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 14, "codensa.home.controls-errors.account-number.wrong-account"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 16, "codensa.home.controls-errors.account-number.wrong-account"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 18, "codensa.home.controls-errors.account-number.wrong-account"))));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 20, "codensa.home.form.account-number"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r0.viewModel.accountNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nequiControlErrors", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](47, _c2, ctx_r0.viewModel.email, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction4"](42, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 22, "codensa.home.controls-errors.email.required"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 24, "codensa.home.controls-errors.email.wrong-email"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 26, "codensa.home.controls-errors.email.wrong-email"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 28, "codensa.home.controls-errors.email.wrong-email"))));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 30, "codensa.home.form.email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r0.viewModel.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", false);
} }
var HomePage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HomePage, _super);
    function HomePage(codensaInteractor, homeService, bottomSheetController, currencyPipe, datePipe, qrReaderService, moduleConfigProvider, injector) {
        var _this = _super.call(this, injector) || this;
        _this.codensaInteractor = codensaInteractor;
        _this.homeService = homeService;
        _this.bottomSheetController = bottomSheetController;
        _this.currencyPipe = currencyPipe;
        _this.datePipe = datePipe;
        _this.qrReaderService = qrReaderService;
        _this.moduleConfigProvider = moduleConfigProvider;
        _this.config = _home_config__WEBPACK_IMPORTED_MODULE_11__["CodensaConfig"];
        _this.viewModel = new _home_view_model__WEBPACK_IMPORTED_MODULE_13__["HomeViewModel"]();
        _this.factoryException = {};
        _this.setExceptionFactory();
        return _this;
    }
    HomePage.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var infoSearch;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.homeService.getInfoSearch()];
                    case 1:
                        infoSearch = _a.sent();
                        this.viewModel.buildForm(infoSearch);
                        this.translateProvider.loadModule(this.moduleConfigProvider.i18n.moduleKey).then(function () {
                            _this.homeService.showCodensaWelcome(_this.homeService.isWrongTime);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.onGetBills = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var bills, _a, _b, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, this.loadingService.show()];
                    case 1:
                        _c.sent();
                        _b = (_a = this.codensaInteractor).getBills;
                        return [4 /*yield*/, this.viewModel.getBillsData()];
                    case 2: return [4 /*yield*/, _b.apply(_a, [_c.sent()])];
                    case 3:
                        bills = _c.sent();
                        return [4 /*yield*/, this.loadingService.hide(true)];
                    case 4:
                        _c.sent();
                        this.homeService.setInfoSearch({
                            accountNumber: this.viewModel.accountNumber.value,
                            email: this.viewModel.email.value,
                        });
                        this.showBottomSheetBills(bills);
                        return [3 /*break*/, 6];
                    case 5:
                        error_1 = _c.sent();
                        this.manageErrors(error_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.onScanCode = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages, scannerView;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                messages = this.translateProvider.get(this.config.i18n.barcodeReader);
                scannerView = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, messages), { showGalleryButton: this.config.barcodeReader.showGalleryButton });
                this.openScanner(scannerView);
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.goBack = function () {
        this.homeService.goBack();
    };
    HomePage.prototype.getConfirmationInfo = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var billType, _a, title, subtitle, messages;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                billType = this.translateProvider.get(this.config.i18n.billType + "." + this.viewModel.billInfo.type);
                _a = this.translateProvider.get(this.config.i18n.bottomSheet.confirm), title = _a.title, subtitle = _a.subtitle, messages = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["title", "subtitle"]);
                return [2 /*return*/, {
                        title: title,
                        subtitle: subtitle,
                        items: this.viewModel.buildItems(messages, billType, this.currencyPipe, this.datePipe),
                        confirmLabel: messages.button,
                    }];
            });
        });
    };
    HomePage.prototype.onTransactionFailed = function (error, _transaction) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.loadingService.hide(false);
                this.manageErrors(error);
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.onTransactionSuccess = function (_response, _transaction) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.loadingService.hide(true);
                this.homeService.onShowCardModal(this.config.i18n.successPaymentAlert, function () {
                    return _this.homeService.goBack();
                });
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.setExceptionFactory = function () {
        var _a;
        var _this = this;
        this.factoryException = (_a = {},
            _a[_nequi_features_codensa_core_exceptions__WEBPACK_IMPORTED_MODULE_4__["PaidBillException"].name] = function () { return _this.homeService.onShowError(_this.config.i18n.paidBillAlert); },
            _a[_nequi_features_codensa_core_exceptions__WEBPACK_IMPORTED_MODULE_4__["BillWithPaymentInTransitException"].name] = function () {
                return _this.homeService.onShowError(_this.config.i18n.billWithPaymentInTransit);
            },
            _a[_nequi_features_codensa_core_exceptions__WEBPACK_IMPORTED_MODULE_4__["UserWithProblemsInCodensaException"].name] = function () {
                return _this.homeService.onShowError(_this.config.i18n.userWithProblemsInCodensa);
            },
            _a[_nequi_features_codensa_core_exceptions__WEBPACK_IMPORTED_MODULE_4__["InvalidBarcodeException"].name] = function () { return _this.onInvalidBarcodeError(); },
            _a);
    };
    HomePage.prototype.showBottomSheetBills = function (bills) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var title, componentProps, bottomSheet;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        title = this.translateProvider.get(this.config.i18n.title);
                        componentProps = {
                            title: title,
                            items: bills,
                            action: function (item) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.onBillClicked(item)];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); },
                        };
                        bottomSheet = this.bottomSheetController.create({
                            isAutoHeight: true,
                            component: _organisms_bill_list_bill_list_organism__WEBPACK_IMPORTED_MODULE_10__["BillListOrganism"],
                            componentProps: componentProps,
                        });
                        return [4 /*yield*/, bottomSheet.open()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, bottomSheet.onDidDismiss()];
                }
            });
        });
    };
    HomePage.prototype.onBillClicked = function (item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.viewModel.billInfo = item;
                this.makePayment(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.viewModel.billInfo), { email: this.viewModel.email.value }));
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.makePayment = function (bill) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var transactionInfo;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                transactionInfo = new _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_6__["Transaction"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_6__["OperationType"].CODENSA_PAYMENT)
                    .withAmount(bill.amount)
                    .withPocket(this.viewModel.pocket.value)
                    .withData(bill)
                    .useRepository(_nequi_features_codensa_core__WEBPACK_IMPORTED_MODULE_3__["CodensaRepository"].name);
                _super.prototype.executeTransaction.call(this, transactionInfo);
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.openScanner = function (scannerView) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var barcodeString, error_2;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.qrReaderService.launch({
                                content: scannerView === null || scannerView === void 0 ? void 0 : scannerView.content,
                                imageName: scannerView === null || scannerView === void 0 ? void 0 : scannerView.imageName,
                                title: scannerView === null || scannerView === void 0 ? void 0 : scannerView.title,
                                showGalleryButton: scannerView === null || scannerView === void 0 ? void 0 : scannerView.showGalleryButton.toString(),
                            })];
                    case 1:
                        barcodeString = _a.sent();
                        this.onReadBarcodeSuccess(barcodeString);
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        if (error_2 !== this.config.barcodeReader.errors.goBackOnCamera) {
                            this.manageBarcodeErrors(error_2);
                        }
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.onReadBarcodeSuccess = function (billBarcode) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var params, error_3;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.codensaInteractor.processBarcode(billBarcode)];
                    case 1:
                        params = _a.sent();
                        this.viewModel.setAccountNumber(params);
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        this.manageErrors(error_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.manageBarcodeErrors = function (error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var message;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        message = this.translateProvider.get(this.config.i18n.barcodeError + "." + error);
                        return [4 /*yield*/, this.toastService.showError(message)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.manageErrors = function (error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(error.constructor === _nequi_features_codensa_core_exceptions__WEBPACK_IMPORTED_MODULE_4__["WithoutPendingBillsException"])) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.onWithoutPendingBillsError()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                    case 2: return [4 /*yield*/, this.loadingService.hide(false)];
                    case 3:
                        _a.sent();
                        if (this.factoryException[error.constructor.name]) {
                            this.factoryException[error.constructor.name]();
                            return [2 /*return*/];
                        }
                        throw error;
                }
            });
        });
    };
    HomePage.prototype.onWithoutPendingBillsError = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingService.hide(true)];
                    case 1:
                        _a.sent();
                        this.homeService.onShowCardModal(this.config.i18n.withoutPendingBillsError, function () {
                            return _this.homeService.goBack();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.onInvalidBarcodeError = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var message;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        message = this.translateProvider.get(this.config.i18n.invalidBarcodeError);
                        return [4 /*yield*/, this.toastService.showError(message)];
                    case 1:
                        _a.sent();
                        this.viewModel.setAccountNumber();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.ɵfac = function HomePage_Factory(t) { return new (t || HomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_codensa_core__WEBPACK_IMPORTED_MODULE_3__["CodensaInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_home_service__WEBPACK_IMPORTED_MODULE_12__["HomeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_9__["BottomSheetController"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_7__["QrReaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_5__["ModuleConfigProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"])); };
    HomePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomePage, selectors: [["app-codensa-home"]], viewQuery: function HomePage_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_nequi_features_money_management_presentation_controls__WEBPACK_IMPORTED_MODULE_8__["OriginMoneyControlComponent"], 1);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.originMoneyControl = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_home_service__WEBPACK_IMPORTED_MODULE_12__["HomeService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 20, vars: 11, consts: [[1, "nequi-header"], ["slot", "start"], ["id", "home_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], ["fullscreen", "true", "appFormContentStyle", "", 1, "ion-content--enroll", "ion-padding-horizontal", "content"], [1, "nequi-title", "content__title"], ["class", "form", 3, "formGroup", 4, "ngIf"], [1, "nequi-footer"], [1, "ion-text-center"], ["id", "home_get-bills_button", "shape", "round", "color", "guayaba", "expand", "block", "type", "submit", 3, "disabled", "click"], [1, "nequi-footer__link"], ["id", "home_scan-code_link", 1, "nequi-footer__link", 3, "click"], [1, "form", 3, "formGroup"], ["id", "home-codensa_account-number_input", 1, "nequi-item", "margin-bottom-8", 3, "nequiMessageManager"], ["position", "floating", 1, "nequi-item__label"], ["type", "tel", 1, "nequi-item__input", 3, "formControl", "ionFocus"], ["id", "home-codensa_mail_input", 1, "nequi-item", "margin-bottom-8", 3, "nequiControlErrors"], ["type", "text", 1, "nequi-item__input", 3, "formControl"], [4, "ngIf"], [3, "minAmount", "formControl"]], template: function HomePage_Template(rf, ctx) { if (rf & 1) {
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
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, HomePage_form_9_Template, 22, 50, "form", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-footer", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-toolbar", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ion-button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomePage_Template_ion_button_click_12_listener() { return ctx.onGetBills(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ion-text");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomePage_Template_a_click_17_listener() { return ctx.onScanCode(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 5, "codensa.home.title"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.viewModel.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.viewModel.form == null ? null : ctx.viewModel.form.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 7, "codensa.home.button"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 9, "codensa.home.link.scan-code"), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonContent"], _ui_src_lib_directives_form_content_style_form_content_style_directive__WEBPACK_IMPORTED_MODULE_15__["FormContentStyleDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonText"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonFooter"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonItem"], _ui_src_lib_directives_message_manager_message_manager_directive__WEBPACK_IMPORTED_MODULE_17__["MessageManagerDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormControlDirective"], _ui_src_lib_directives_control_errors_control_errors_directive__WEBPACK_IMPORTED_MODULE_18__["ControlErrorsDirective"], _money_management_src_presentation_controls_origin_money_control_origin_money_control_component__WEBPACK_IMPORTED_MODULE_19__["OriginMoneyControlComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__["TranslatePipe"]], styles: [".nequi-footer__link[_ngcontent-%COMP%] {\n  margin: 24px 0 16px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtBQUNGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5lcXVpLWZvb3Rlcl9fbGluayB7XG4gIG1hcmdpbjogMjRweCAwIDE2cHggMHB4O1xufVxuIl19 */"] });
    return HomePage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_7__["TransactionBasePage"]));



/***/ }),

/***/ "mCBF":
/*!***************************************************************************!*\
  !*** ./libs/features/codensa/src/presentation/features-codensa.module.ts ***!
  \***************************************************************************/
/*! exports provided: FeaturesCodensaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesCodensaModule", function() { return FeaturesCodensaModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nequi_features_codensa_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/codensa/core */ "VbCg");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/money-management/presentation */ "JFCQ");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _config_codensa_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../config/codensa.config */ "XIsZ");
/* harmony import */ var _features_codensa_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./features-codensa-routing.module */ "fTM9");
/* harmony import */ var _organisms_bill_list_bill_list_organism__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./organisms/bill-list/bill-list.organism */ "GKrZ");
/* harmony import */ var _pages_home_home_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/home/home.page */ "gdVu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");














var FeaturesCodensaModule = /** @class */ (function () {
    function FeaturesCodensaModule() {
    }
    FeaturesCodensaModule.ɵfac = function FeaturesCodensaModule_Factory(t) { return new (t || FeaturesCodensaModule)(); };
    FeaturesCodensaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: FeaturesCodensaModule });
    FeaturesCodensaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ providers: [
            {
                provide: _nequi_features_commons__WEBPACK_IMPORTED_MODULE_4__["ModuleConfigProvider"],
                useValue: _config_codensa_config__WEBPACK_IMPORTED_MODULE_9__["CodensaConfig"],
            },
            _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_5__["QrReaderService"],
            {
                provide: _nequi_features_codensa_core__WEBPACK_IMPORTED_MODULE_3__["CodensaInteractor"],
                deps: [_nequi_features_codensa_core__WEBPACK_IMPORTED_MODULE_3__["CodensaRepository"]],
                useFactory: function (repository) { return new _nequi_features_codensa_core__WEBPACK_IMPORTED_MODULE_3__["CodensaInteractor"](repository); },
            },
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
                _features_codensa_routing_module__WEBPACK_IMPORTED_MODULE_10__["FeaturesCodensaRoutingModule"],
                _nequi_ui__WEBPACK_IMPORTED_MODULE_7__["NequiUiModule"],
                _nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_6__["FeaturesMoneyManagementModule"],
            ]] });
    return FeaturesCodensaModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](FeaturesCodensaModule, { declarations: [_pages_home_home_page__WEBPACK_IMPORTED_MODULE_12__["HomePage"], _organisms_bill_list_bill_list_organism__WEBPACK_IMPORTED_MODULE_11__["BillListOrganism"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
        _features_codensa_routing_module__WEBPACK_IMPORTED_MODULE_10__["FeaturesCodensaRoutingModule"],
        _nequi_ui__WEBPACK_IMPORTED_MODULE_7__["NequiUiModule"],
        _nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_6__["FeaturesMoneyManagementModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=nequi-features-codensa-presentation.js.map