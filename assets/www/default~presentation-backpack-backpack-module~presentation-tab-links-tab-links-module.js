(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~presentation-backpack-backpack-module~presentation-tab-links-tab-links-module"],{

/***/ "HvfI":
/*!*********************************************************************************!*\
  !*** ./libs/apps/base/mobile/src/presentation/backpack/home/home.view-model.ts ***!
  \*********************************************************************************/
/*! exports provided: HomeViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeViewModel", function() { return HomeViewModel; });
var HomeViewModel = /** @class */ (function () {
    function HomeViewModel() {
    }
    Object.defineProperty(HomeViewModel.prototype, "useMoneyOptions", {
        get: function () {
            return this.options;
        },
        enumerable: false,
        configurable: true
    });
    HomeViewModel.prototype.setUseMoneyOptions = function (options) {
        this.options = options;
    };
    HomeViewModel.prototype.setBalanceData = function (balance) {
        this.availableAmount = balance.available;
        this.totalAmount = balance.total;
        this.hasPocketsCreated = balance.pockets > 0;
        this.isLoadingBalance = false;
    };
    return HomeViewModel;
}());



/***/ }),

/***/ "LAgr":
/*!***************************************************************************!*\
  !*** ./libs/apps/base/mobile/src/presentation/backpack/home/home.page.ts ***!
  \***************************************************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _config_application_data_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @config/application-data.config */ "hjha");
/* harmony import */ var _nequi_apps_base_mobile_config_features_commons_services_deep_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/apps/base/mobile/config/features/commons/services/deep-link */ "8aH0");
/* harmony import */ var _nequi_apps_base_mobile_config_features_commons_services_status_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/apps/base/mobile/config/features/commons/services/status-bar */ "zZn9");
/* harmony import */ var _nequi_features_alternate_flows_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/alternate-flows/core */ "uzTX");
/* harmony import */ var _nequi_features_application_data_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/application-data/core */ "UgzZ");
/* harmony import */ var _nequi_features_closet_presentation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/closet/presentation */ "Qek3");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_decorators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nequi/features/commons/decorators */ "hW7w");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_features_money_management_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nequi/features/money-management/core */ "Qxr/");
/* harmony import */ var _nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @nequi/features/money-management/presentation */ "JFCQ");
/* harmony import */ var _nequi_features_notifications_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @nequi/features/notifications/core */ "pTML");
/* harmony import */ var _nequi_features_profile_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @nequi/features/profile/core */ "w8sc");
/* harmony import */ var _nequi_features_profile_data__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @nequi/features/profile/data */ "m+bZ");
/* harmony import */ var _nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @nequi/features/profile/presentation */ "cLcF");
/* harmony import */ var _nequi_features_push_notifications_presentation__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @nequi/features/push-notifications/presentation */ "q8Yo");
/* harmony import */ var _nequi_features_security_biometry_presentation__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @nequi/features/security/biometry/presentation */ "8Kip");
/* harmony import */ var _nequi_features_settings_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @nequi/features/settings/core */ "0nzD");
/* harmony import */ var _nequi_features_settings_presentation__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @nequi/features/settings/presentation */ "uYS2");
/* harmony import */ var _nequi_features_style_manager_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @nequi/features/style-manager/core */ "vpn+");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_date__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @nequi/utils/date */ "tGfC");
/* harmony import */ var _nequi_utils_string__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @nequi/utils/string */ "p6rB");
/* harmony import */ var _home_config__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./home.config */ "yFZ8");
/* harmony import */ var _home_view_model__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./home.view-model */ "HvfI");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _features_style_manager_src_presentation_directives_styles_from_resource_directive__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../../../../../features/style-manager/src/presentation/directives/styles-from-resource.directive */ "3kMd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ui_src_lib_directives_text_hidden_nequi_text_hidden_directive__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../../../../../ui/src/lib/directives/text-hidden/nequi-text-hidden.directive */ "o3Td");
/* harmony import */ var _ui_src_lib_directives_nequi_currency_style_nequi_currency_style_directive__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../../../../../ui/src/lib/directives/nequi-currency-style/nequi-currency-style.directive */ "kVXI");
/* harmony import */ var _ui_src_lib_components_tool_card_tool_card_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../../../../../ui/src/lib/components/tool-card/tool-card.component */ "4z4I");
/* harmony import */ var _ui_src_lib_directives_long_press_long_press_directive__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../../../../../ui/src/lib/directives/long-press/long-press.directive */ "kHOk");
/* harmony import */ var _features_money_management_src_presentation_components_use_money_use_money_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../../../../../../features/money-management/src/presentation/components/use-money/use-money.component */ "x24J");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
























































function HomePage_ion_img_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](0, "ion-img", 33);
} }
function HomePage_ion_img_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](0, "ion-img", 34);
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("src", ctx_r1.userProfileImage);
} }
function HomePage_ion_label_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpipeBind1"](3, 2, ctx_r2.config.greeting));
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtextInterpolate"](ctx_r2.viewModel.nickName);
} }
function HomePage_ion_label_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](1, "ion-skeleton-text", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](2, "ion-skeleton-text", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
} }
function HomePage_ion_text_24_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](0, "span", 40);
} if (rf & 2) {
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("nequiTextHidden", ctx_r12.shouldShowAvailable);
} }
function HomePage_ion_text_24_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](0, "span", 41);
} if (rf & 2) {
    var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("nequiCurrencyStyle", ctx_r13.viewModel.availableAmount);
} }
function HomePage_ion_text_24_Template(rf, ctx) { if (rf & 1) {
    var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](0, "ion-text", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵlistener"]("click", function HomePage_ion_text_24_Template_ion_text_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵrestoreView"](_r15); var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"](); return ctx_r14.toggleAvailable(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](1, HomePage_ion_text_24_span_1_Template, 1, 1, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](2, HomePage_ion_text_24_span_2_Template, 1, 1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", ctx_r4.shouldShowAvailable);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", !ctx_r4.shouldShowAvailable);
} }
function HomePage_ion_skeleton_text_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](0, "ion-skeleton-text", 42);
} }
function HomePage_ion_text_27_Template(rf, ctx) { if (rf & 1) {
    var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](0, "ion-text", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵlistener"]("click", function HomePage_ion_text_27_Template_ion_text_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵrestoreView"](_r17); var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"](); return ctx_r16.openMoneyDetail(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpipeBind1"](2, 1, ctx_r6.config.total), " ");
} }
function HomePage_ion_text_28_Template(rf, ctx) { if (rf & 1) {
    var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](0, "ion-text", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵlistener"]("click", function HomePage_ion_text_28_Template_ion_text_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵrestoreView"](_r19); var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"](); return ctx_r18.openMoneyDetail(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("nequiTextHidden", ctx_r7.shouldShowAvailable);
} }
function HomePage_ion_text_29_Template(rf, ctx) { if (rf & 1) {
    var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](0, "ion-text", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵlistener"]("click", function HomePage_ion_text_29_Template_ion_text_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵrestoreView"](_r21); var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"](); return ctx_r20.openMoneyDetail(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("nequiCurrencyStyle", ctx_r8.viewModel.totalAmount);
} }
function HomePage_ion_skeleton_text_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](0, "ion-skeleton-text", 46);
} }
function HomePage_app_tool_card_37_Template(rf, ctx) { if (rf & 1) {
    var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](0, "app-tool-card", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵlistener"]("appLongPress", function HomePage_app_tool_card_37_Template_app_tool_card_appLongPress_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵrestoreView"](_r25); var i_r23 = ctx.index; var tool_r22 = ctx.$implicit; var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"](); return ctx_r24.openBottomSheetToolList($event, i_r23, tool_r22); })("click", function HomePage_app_tool_card_37_Template_app_tool_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵrestoreView"](_r25); var tool_r22 = ctx.$implicit; var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"](); return ctx_r26.cardClick(tool_r22); });
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
} if (rf & 2) {
    var tool_r22 = ctx.$implicit;
    var i_r23 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵclassMap"](tool_r22.cssClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpropertyInterpolate1"]("id", "backpack-home_dashboard-card-", i_r23, "_button");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("image", tool_r22.images.backpack)("name", tool_r22.title);
} }
function HomePage_app_use_money_38_Template(rf, ctx) { if (rf & 1) {
    var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](0, "app-use-money", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵlistener"]("optionSelected", function HomePage_app_use_money_38_Template_app_use_money_optionSelected_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵrestoreView"](_r28); var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"](); return ctx_r27.onOptionSelected($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("options", ctx_r11.viewModel.useMoneyOptions);
} }
var _c0 = function (a0) { return { "ion-content--backpack-without-ceiling": a0 }; };
var _c1 = function (a0) { return { "has-notification": a0 }; };
var HomePage = /** @class */ (function () {
    function HomePage(balanceInteractor, profileModel, profileService, navigatorProvider, translateProvider, profileInteractor, clevertapInteractor, toastService, settingInteractor, toolListBottomSheetService, preventScreenshotProvider, pushNotificationsService, sessionProvider, statusBarService, useMoneyStatusService, userInfoProvider, balanceEventsHandler, deepLinkService, appOptionsProvider, analyticsInteractor, applicationDataInteractor, registrationCompletedService, notificationInteractor, goalImageService, updateImageProfileService, experimentsAlternateFlowsInteractor) {
        var _this = this;
        this.balanceInteractor = balanceInteractor;
        this.profileModel = profileModel;
        this.profileService = profileService;
        this.navigatorProvider = navigatorProvider;
        this.translateProvider = translateProvider;
        this.profileInteractor = profileInteractor;
        this.clevertapInteractor = clevertapInteractor;
        this.toastService = toastService;
        this.settingInteractor = settingInteractor;
        this.toolListBottomSheetService = toolListBottomSheetService;
        this.preventScreenshotProvider = preventScreenshotProvider;
        this.pushNotificationsService = pushNotificationsService;
        this.sessionProvider = sessionProvider;
        this.statusBarService = statusBarService;
        this.useMoneyStatusService = useMoneyStatusService;
        this.userInfoProvider = userInfoProvider;
        this.balanceEventsHandler = balanceEventsHandler;
        this.deepLinkService = deepLinkService;
        this.appOptionsProvider = appOptionsProvider;
        this.analyticsInteractor = analyticsInteractor;
        this.applicationDataInteractor = applicationDataInteractor;
        this.registrationCompletedService = registrationCompletedService;
        this.notificationInteractor = notificationInteractor;
        this.goalImageService = goalImageService;
        this.updateImageProfileService = updateImageProfileService;
        this.experimentsAlternateFlowsInteractor = experimentsAlternateFlowsInteractor;
        this.viewModel = new _home_view_model__WEBPACK_IMPORTED_MODULE_26__["HomeViewModel"]();
        this.config = _home_config__WEBPACK_IMPORTED_MODULE_25__["HomeConfig"];
        this.isVisible = true;
        this.getBalance();
        this.balanceEvent = this.balanceEventsHandler.on(_nequi_features_money_management_core__WEBPACK_IMPORTED_MODULE_11__["BalanceEvents"].BALANCE_UPDATED, function (balance) {
            _this.viewModel.setBalanceData(balance);
            _this.setAvailableTextMessage();
        });
    }
    HomePage.prototype.persistFullName = function (fullName) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!fullName) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.applicationDataInteractor.save(_config_application_data_config__WEBPACK_IMPORTED_MODULE_1__["ApplicationDataConfig"].backpack.fullName, fullName, this.userInfoProvider.getPhoneNumber())];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.persistNickName = function (nickName) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!nickName) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.applicationDataInteractor.save(_config_application_data_config__WEBPACK_IMPORTED_MODULE_1__["ApplicationDataConfig"].backpack.nickName, nickName, this.userInfoProvider.getPhoneNumber())];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setResourceId();
                        this.setAvailableTextMessage();
                        this.viewModel.setUseMoneyOptions(this.appOptionsProvider.getUseMoney());
                        this.statusBarService.changeStatusBarColor(_nequi_apps_base_mobile_config_features_commons_services_status_bar__WEBPACK_IMPORTED_MODULE_3__["Colors"].MEDIANOCHE);
                        this.registrationCompletedService.subscribe(function () { return _this.showCoachmarkUseMoney(); });
                        return [4 /*yield*/, this.getUserProfile()];
                    case 1:
                        _a.sent();
                        this.useMoneyStatusService.subscribe(function (status) { return (_this.viewModel.isOriginMoneyOpened = status === _nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_12__["UseMoneyStatus"].OPENED); });
                        this.updateImageProfileService.subscribe(function () { return _this.loadImageFromStorage(); });
                        this.profileService.subscribe(function () { return _this.getUserProfile(); });
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.ionViewWillEnter = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var didDeepLinkNavigation;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.preventScreenshotProvider.enable();
                        return [4 /*yield*/, this.setDashboardTools()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.deepLinkService.navigatePendingDeepLink()];
                    case 2:
                        didDeepLinkNavigation = _a.sent();
                        if (!!didDeepLinkNavigation) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.pushNotificationsService.processCurrentNotification(this.sessionProvider.userHasSession)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [4 /*yield*/, this.setNotificationTabNotifications()];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.ngOnDestroy = function () {
        var _a;
        this.useMoneyStatusService.unsubscribe();
        (_a = this.balanceEvent) === null || _a === void 0 ? void 0 : _a.call(this);
        this.updateImageProfileService.unsubscribe();
    };
    HomePage.prototype.toggleAvailable = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.shouldShowAvailable = !this.shouldShowAvailable;
                        return [4 /*yield*/, this.applicationDataInteractor.save(this.config.applicationData.balanceVisibleStatus, this.shouldShowAvailable)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.openMoneyDetail = function () {
        this.isVisible = false;
        this.navigatorProvider.navigateRoot(this.config.routes.moneyPartition, {
            animated: true,
            animation: function (baseEl, opts) { return Object(_nequi_ui__WEBPACK_IMPORTED_MODULE_22__["TopToBottomCornerTransition"])(baseEl, opts); },
        });
    };
    HomePage.prototype.getBalance = function (event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, balance, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.viewModel.isLoadingBalance) {
                            this.setCompletePullToRefreshEvent(event);
                            return [2 /*return*/];
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 4, , 5]);
                        this.viewModel.isLoadingBalance = true;
                        _a = this;
                        return [4 /*yield*/, this.applicationDataInteractor.findValue(this.config.applicationData.balanceVisibleStatus, false)];
                    case 2:
                        _a.shouldShowAvailable = _b.sent();
                        return [4 /*yield*/, this.balanceInteractor.getBalance()];
                    case 3:
                        balance = _b.sent();
                        this.viewModel.setBalanceData(balance);
                        this.setAvailableTextMessage();
                        this.setCompletePullToRefreshEvent(event);
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _b.sent();
                        this.viewModel.isLoadingBalance = false;
                        this.viewModel.reloadBalance = false;
                        this.setCompletePullToRefreshEvent(event);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.navigateTo = function (route) {
        this.navigatorProvider.navigateForward(route);
    };
    HomePage.prototype.getUserProfile = function () {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var userProfileInfo;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.loadingNickname = true;
                        return [4 /*yield*/, this.profileInteractor.getUserProfile()];
                    case 1:
                        userProfileInfo = _b.sent();
                        this.profileModel.setUserProfileInfo(userProfileInfo);
                        this.viewModel.nickName = this.userInfoProvider.nickName;
                        this.loadingNickname = false;
                        this.analyticsInteractor.initialize({ type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_8__["AnalyticsType"].DYNATRACE });
                        return [4 /*yield*/, this.saveFingerPrintOnLoginInLocalStorage()];
                    case 2:
                        _b.sent();
                        this.clevertapInteractor.identifyUser({
                            name: this.userInfoProvider.nickName,
                            phoneNumber: this.profileModel.phoneNumber,
                            birthDate: Object(_nequi_utils_date__WEBPACK_IMPORTED_MODULE_23__["transformDateFromString"])((_a = this.profileModel.birthDate) !== null && _a !== void 0 ? _a : '', _nequi_utils_date__WEBPACK_IMPORTED_MODULE_23__["DateFormat"].YYYY_MM_DD_HH_MM_SS),
                            email: this.profileModel.email,
                        });
                        this.persistFullName(this.userInfoProvider.fullName);
                        this.persistNickName(this.userInfoProvider.nickName);
                        return [4 /*yield*/, this.loadImageFromStorage()];
                    case 3:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.cardClick = function (tool) {
        var _this = this;
        if (!tool.url) {
            return false;
        }
        if (tool.analytics) {
            tool.analytics.forEach(function (event) {
                _this.analyticsInteractor.trackEvent(event);
            });
        }
        this.navigatorProvider.navigateForward([tool.url], { queryParams: tool.params, state: tool });
    };
    HomePage.prototype.openBottomSheetToolList = function (event, index, tool) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var options, items, data, error_2;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        event.preventDefault();
                        if (!!tool.moveOptions.canMove) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toastService.showError(tool.moveOptions.dashboardCanNotMoveMessage)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                    case 2:
                        _a.trys.push([2, 5, , 7]);
                        options = this.translateProvider.get(_home_config__WEBPACK_IMPORTED_MODULE_25__["HomeConfig"].changeToolMessages);
                        return [4 /*yield*/, this.settingInteractor.getClosetToolList()];
                    case 3:
                        items = _a.sent();
                        return [4 /*yield*/, this.toolListBottomSheetService.show({
                                title: Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_24__["createFormat"])(options['bottom-sheet'].title, [tool.title]),
                                items: items
                                    .map(function (item, count) {
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item), { index: count, type: _nequi_features_closet_presentation__WEBPACK_IMPORTED_MODULE_6__["ToolType"].STORE });
                                })
                                    .filter(function (item) { return item.moveOptions.canMove; }),
                                successMessage: Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_24__["createFormat"])(options.success, [tool.title]),
                                toolsIndex: { backpack: index },
                            })];
                    case 4:
                        data = (_a.sent()).data;
                        if (data === true) {
                            this.setDashboardTools();
                        }
                        return [3 /*break*/, 7];
                    case 5:
                        error_2 = _a.sent();
                        return [4 /*yield*/, this.toastService.showError(error_2.message)];
                    case 6:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.onOptionSelected = function (option) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.sendAnalyticsUseMoney(option.id);
                if (option.id === 'cash-out') {
                    this.experimentsAlternateFlowsInteractor
                        .getAlternateFlows()
                        .then(function () {
                        _this.navigatorProvider.navigateForward('admin/experiment-alternate-flows');
                    })
                        .catch(function () {
                        _this.navigatorProvider.navigateForward(option.url);
                    });
                }
                else {
                    this.navigatorProvider.navigateForward(option.url);
                }
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.setNotificationTabNotifications = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var totalUnreadNotificationQuantity, error_3;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.notificationInteractor.getTotalUnreadNotificationQuantity()];
                    case 1:
                        totalUnreadNotificationQuantity =
                            _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        totalUnreadNotificationQuantity = 0;
                        return [3 /*break*/, 3];
                    case 3:
                        this.hasNotifications = totalUnreadNotificationQuantity > 0;
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.openHelp = function () {
        this.navigatorProvider.navigateForward([this.config.routes.help], {
            queryParams: {
                context: this.config.helpContext,
            },
        });
    };
    HomePage.prototype.getAvailableTextKey = function (hasPocketsCreated) {
        return hasPocketsCreated ? this.config.availableTextPockets : this.config.availableText;
    };
    HomePage.prototype.setAvailableTextMessage = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var textKey;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                textKey = this.getAvailableTextKey(this.viewModel.hasPocketsCreated);
                this.availableText = this.translateProvider.get(textKey);
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.setCompletePullToRefreshEvent = function (event) {
        if (event) {
            event.target.complete();
        }
    };
    HomePage.prototype.setDashboardTools = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var tools, error_4;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.settingInteractor.getBackpackToolList()];
                    case 1:
                        tools = _a.sent();
                        this.viewModel.dashboardToolList = tools;
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
                        this.viewModel.dashboardToolList = _home_config__WEBPACK_IMPORTED_MODULE_25__["HomeConfig"].defaultTools;
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.saveFingerPrintOnLoginInLocalStorage = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var fingerPrintBiometry;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                fingerPrintBiometry = this.profileService.getFingerPrintBiometry();
                this.profileService.saveFingerprintOnLoginInLocalStorage(fingerPrintBiometry === null || fingerPrintBiometry === void 0 ? void 0 : fingerPrintBiometry.enabled);
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.setResourceId = function () {
        var _a;
        this.resourceId =
            ((_a = this.userInfoProvider.getAccount()) === null || _a === void 0 ? void 0 : _a.type) === _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_8__["AccountType"].SAVINGS
                ? _nequi_features_style_manager_core__WEBPACK_IMPORTED_MODULE_21__["ResourceId"].BACKPACK_WITHOUT_CEILING
                : _nequi_features_style_manager_core__WEBPACK_IMPORTED_MODULE_21__["ResourceId"].BACKPACK;
        this.isSavingAccount = this.resourceId === _nequi_features_style_manager_core__WEBPACK_IMPORTED_MODULE_21__["ResourceId"].BACKPACK_WITHOUT_CEILING;
    };
    HomePage.prototype.showCoachmarkUseMoney = function () {
        this.useMoneyComponent.showCoachmark();
    };
    HomePage.prototype.loadImageFromStorage = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var optimizedImage, error_5;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.goalImageService.get(this.config.userImageId)];
                    case 1:
                        optimizedImage = _a.sent();
                        if (optimizedImage) {
                            this.userProfileImage = optimizedImage;
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_5 = _a.sent();
                        this.loadingNickname = false;
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.sendAnalyticsUseMoney = function (id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var analytics, action;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                analytics = this.config.analytics.useMoney;
                action = this.config.analytics.useMoney.tags[id];
                if (!action) {
                    return [2 /*return*/];
                }
                this.analyticsInteractor.trackEvent({
                    type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_8__["AnalyticsType"].CLEVERTAP,
                    params: {
                        eventName: analytics.name,
                        eventProps: Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_27__["stringsArrayToObjectWithValues"])(analytics.params, [
                            Object(_nequi_utils_date__WEBPACK_IMPORTED_MODULE_23__["getFormattedDateTimes"])(),
                            action,
                        ]),
                    },
                });
                return [2 /*return*/];
            });
        });
    };
    HomePage.ɵfac = function HomePage_Factory(t) { return new (t || HomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdirectiveInject"](_nequi_features_money_management_core__WEBPACK_IMPORTED_MODULE_11__["BalanceInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdirectiveInject"](_nequi_features_profile_data__WEBPACK_IMPORTED_MODULE_15__["ProfileModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdirectiveInject"](_nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_16__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_10__["NavigatorProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdirectiveInject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_7__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdirectiveInject"](_nequi_features_profile_core__WEBPACK_IMPORTED_MODULE_14__["ProfileInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_8__["AnalyticsThirdPartyInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_22__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdirectiveInject"](_nequi_features_settings_core__WEBPACK_IMPORTED_MODULE_19__["SettingInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdirectiveInject"](_nequi_features_settings_presentation__WEBPACK_IMPORTED_MODULE_20__["ToolListBottomSheetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdirectiveInject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_7__["PreventScreenshotProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdirectiveInject"](_nequi_features_push_notifications_presentation__WEBPACK_IMPORTED_MODULE_17__["PushNotificationsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_10__["SessionProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdirectiveInject"](_nequi_apps_base_mobile_config_features_commons_services_status_bar__WEBPACK_IMPORTED_MODULE_3__["StatusBarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdirectiveInject"](_nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_12__["UseMoneyStatusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdirectiveInject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_7__["UserInfoProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdirectiveInject"](_nequi_features_money_management_core__WEBPACK_IMPORTED_MODULE_11__["BalanceEventsHandler"]), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdirectiveInject"](_nequi_apps_base_mobile_config_features_commons_services_deep_link__WEBPACK_IMPORTED_MODULE_2__["DeepLinkService"]), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdirectiveInject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_7__["AppOptionsProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_8__["AnalyticsInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdirectiveInject"](_nequi_features_application_data_core__WEBPACK_IMPORTED_MODULE_5__["ApplicationDataInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdirectiveInject"](_nequi_features_security_biometry_presentation__WEBPACK_IMPORTED_MODULE_18__["RegistrationCompletedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdirectiveInject"](_nequi_features_notifications_core__WEBPACK_IMPORTED_MODULE_13__["NotificationInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdirectiveInject"](_nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_12__["GoalImageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdirectiveInject"](_nequi_features_profile_presentation__WEBPACK_IMPORTED_MODULE_16__["UpdateImageProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdirectiveInject"](_nequi_features_alternate_flows_core__WEBPACK_IMPORTED_MODULE_4__["AlternateFlowsInteractor"])); };
    HomePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineComponent"]({ type: HomePage, selectors: [["app-backpack-home"]], viewQuery: function HomePage_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵviewQuery"](_nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_12__["UseMoneyComponent"], 1);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵloadQuery"]()) && (ctx.useMoneyComponent = _t.first);
        } }, decls: 39, vars: 27, consts: [["fullscreen", "true", 1, "backpack-home", "ion-content--backpack", 3, "nequiStylesFromResource", "ngClass"], ["slot", "fixed", "pullMax", "98", 1, "backpack-home__refresher", 3, "disabled", "ionRefresh"], ["name", "crescent", "color", "light", 1, "backpack-home__refresher__spinner"], [1, "backpack-home__content", "ion-padding-horizontal"], [1, "backpack-home__image-div"], ["name", "bk_saldo", "src", "/assets/images/home/bk_saldo.svg", 1, "backpack-home__ion-img"], [1, "backpack-home__header", "ion-no-padding"], [1, "backpack-home__user-info", "ion-justify-content-between"], ["lines", "none", 1, "backpack-home__user-info__item", 3, "click"], [1, "backpack-home__user-info__avatar"], ["src", "/assets/images/backpack/user-image.svg", 4, "ngIf"], [3, "src", 4, "ngIf"], [4, "ngIf"], ["id", "backpack-home__notification_button", 1, "backpack-home__user-info__button", 3, "ngClass", "click"], ["slot", "icon-only", "name", "notifications-outline"], ["id", "backpack-home__help_button", 1, "backpack-home__user-info__button", 3, "click"], ["slot", "icon-only", "name", "help"], [1, "ion-text-center", "backpack-home__available", "margin-top", "margin-top-16"], [1, "backpack-home__available__label", 3, "click"], [1, "available__eye", 3, "name"], ["class", "backpack-home__available__value margin-bottom-8", 3, "click", 4, "ngIf"], ["animated", "", "class", "backpack-home__available--loading", 4, "ngIf"], [1, "backpack-home__total", "ion-text-center"], ["class", "backpack-home__total__label", 3, "click", 4, "ngIf"], ["prefixCharacter", "$ ", "class", "backpack-home__total__value", 3, "nequiTextHidden", "click", 4, "ngIf"], ["class", "backpack-home__total__value", 3, "nequiCurrencyStyle", "click", 4, "ngIf"], ["animated", "", "class", "backpack-home__total--loading", 4, "ngIf"], [1, "backpack-home__your-money", "margin-top-8", "ion-text-center"], ["shape", "round", "fill", "outline", "size", "small", 1, "backpack-home__your-money__button", 3, "click"], ["slot", "end", "name", "chevron-down-outline"], [1, "backpack-home__cards"], [3, "id", "image", "name", "class", "appLongPress", "click", 4, "ngFor", "ngForOf"], ["slot", "fixed", "id", "backpack-home_use-money_button", "class", "backpack-home__use-money", 3, "options", "optionSelected", 4, "ngIf"], ["src", "/assets/images/backpack/user-image.svg"], [3, "src"], ["animated", "", 1, "backpack-home__nickname-label--loading"], ["animated", "", 1, "backpack-home__nickname--loading"], [1, "backpack-home__available__value", "margin-bottom-8", 3, "click"], ["prefixCharacter", "$ ", 3, "nequiTextHidden", 4, "ngIf"], [3, "nequiCurrencyStyle", 4, "ngIf"], ["prefixCharacter", "$ ", 3, "nequiTextHidden"], [3, "nequiCurrencyStyle"], ["animated", "", 1, "backpack-home__available--loading"], [1, "backpack-home__total__label", 3, "click"], ["prefixCharacter", "$ ", 1, "backpack-home__total__value", 3, "nequiTextHidden", "click"], [1, "backpack-home__total__value", 3, "nequiCurrencyStyle", "click"], ["animated", "", 1, "backpack-home__total--loading"], [3, "id", "image", "name", "appLongPress", "click"], ["slot", "fixed", "id", "backpack-home_use-money_button", 1, "backpack-home__use-money", 3, "options", "optionSelected"]], template: function HomePage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](0, "ion-content", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](1, "ion-refresher", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵlistener"]("ionRefresh", function HomePage_Template_ion_refresher_ionRefresh_1_listener($event) { return ctx.getBalance($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](2, "ion-spinner", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](5, "ion-img", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](8, "ion-item", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵlistener"]("click", function HomePage_Template_ion_item_click_8_listener() { return ctx.navigateTo(ctx.config.routes.profile); });
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](9, "ion-avatar", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](10, HomePage_ion_img_10_Template, 1, 0, "ion-img", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](11, HomePage_ion_img_11_Template, 1, 1, "ion-img", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](12, HomePage_ion_label_12_Template, 6, 4, "ion-label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](13, HomePage_ion_label_13_Template, 3, 0, "ion-label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](14, "ion-buttons");
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](15, "ion-button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵlistener"]("click", function HomePage_Template_ion_button_click_15_listener() { return ctx.navigateTo(ctx.config.routes.notifications); });
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](16, "ion-icon", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](17, "ion-button", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵlistener"]("click", function HomePage_Template_ion_button_click_17_listener() { return ctx.openHelp(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](18, "ion-icon", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](19, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](20, "ion-text", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵlistener"]("click", function HomePage_Template_ion_text_click_20_listener() { return ctx.toggleAvailable(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpipe"](22, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](23, "ion-icon", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](24, HomePage_ion_text_24_Template, 3, 2, "ion-text", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](25, HomePage_ion_skeleton_text_25_Template, 1, 0, "ion-skeleton-text", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](26, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](27, HomePage_ion_text_27_Template, 3, 3, "ion-text", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](28, HomePage_ion_text_28_Template, 1, 1, "ion-text", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](29, HomePage_ion_text_29_Template, 1, 1, "ion-text", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](30, HomePage_ion_skeleton_text_30_Template, 1, 0, "ion-skeleton-text", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](31, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](32, "ion-button", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵlistener"]("click", function HomePage_Template_ion_button_click_32_listener() { return ctx.openMoneyDetail(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](33);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpipe"](34, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](35, "ion-icon", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](36, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](37, HomePage_app_tool_card_37_Template, 1, 5, "app-tool-card", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](38, HomePage_app_use_money_38_Template, 1, 1, "app-use-money", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("nequiStylesFromResource", ctx.resourceId)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpureFunction1"](23, _c0, ctx.isSavingAccount));
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("disabled", ctx.viewModel.isOriginMoneyOpened);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", !ctx.userProfileImage);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", ctx.userProfileImage);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", !ctx.loadingNickname);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", ctx.loadingNickname);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpureFunction1"](25, _c1, ctx.hasNotifications));
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpipeBind1"](22, 19, ctx.availableText), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("name", ctx.shouldShowAvailable ? "eye-outline" : "eye-off-outline");
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", !ctx.viewModel.isLoadingBalance);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", ctx.viewModel.isLoadingBalance);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", !ctx.viewModel.isLoadingBalance);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", !ctx.viewModel.isLoadingBalance && ctx.shouldShowAvailable);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", !ctx.viewModel.isLoadingBalance && !ctx.shouldShowAvailable);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", ctx.viewModel.isLoadingBalance);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpipeBind1"](34, 21, "backpack.home.money.your-money-button"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngForOf", ctx.viewModel.dashboardToolList);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", ctx.viewModel.useMoneyOptions && ctx.isVisible);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_29__["IonContent"], _features_style_manager_src_presentation_directives_styles_from_resource_directive__WEBPACK_IMPORTED_MODULE_30__["StylesFromResourceDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_31__["NgClass"], _ionic_angular__WEBPACK_IMPORTED_MODULE_29__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_29__["IonSpinner"], _ionic_angular__WEBPACK_IMPORTED_MODULE_29__["IonImg"], _ionic_angular__WEBPACK_IMPORTED_MODULE_29__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_29__["IonAvatar"], _angular_common__WEBPACK_IMPORTED_MODULE_31__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_29__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_29__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_29__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_29__["IonText"], _angular_common__WEBPACK_IMPORTED_MODULE_31__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_29__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_29__["IonSkeletonText"], _ui_src_lib_directives_text_hidden_nequi_text_hidden_directive__WEBPACK_IMPORTED_MODULE_32__["NequiTextHiddenDirective"], _ui_src_lib_directives_nequi_currency_style_nequi_currency_style_directive__WEBPACK_IMPORTED_MODULE_33__["NequiCurrencyStyleDirective"], _ui_src_lib_components_tool_card_tool_card_component__WEBPACK_IMPORTED_MODULE_34__["ToolCardComponent"], _ui_src_lib_directives_long_press_long_press_directive__WEBPACK_IMPORTED_MODULE_35__["LongPressDirective"], _features_money_management_src_presentation_components_use_money_use_money_component__WEBPACK_IMPORTED_MODULE_36__["UseMoneyComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_37__["TranslatePipe"]], styles: [".backpack-home__refresher[_ngcontent-%COMP%] {\n  color: white;\n  background-color: var(--medianoche);\n  height: 100px;\n  padding-top: 16px;\n  text-align: center;\n}\n.backpack-home__refresher__spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 auto;\n  transform: scale(0.85);\n}\n.backpack-home__image-div[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  justify-content: flex-end;\n  z-index: 2;\n}\n.backpack-home__ion-img[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n}\n.backpack-home__content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n.backpack-home__header[_ngcontent-%COMP%] {\n  width: 100%;\n  flex-grow: 3;\n  color: white;\n}\n.backpack-home__user-info[_ngcontent-%COMP%] {\n  display: flex;\n}\n.backpack-home__user-info__item[_ngcontent-%COMP%] {\n  color: white;\n  display: flex;\n  --background: transparent;\n  --padding-start: 0;\n}\n.backpack-home__user-info__avatar[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  --border-radius: 32px;\n  margin-right: 16px;\n}\n.backpack-home__user-info__button[_ngcontent-%COMP%] {\n  color: white;\n  position: relative;\n}\n.backpack-home__user-info__button.has-notification[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  background: var(--zanahoria);\n  border-radius: 50%;\n  width: 12px;\n  height: 12px;\n  top: calc(50% - 14px);\n  left: 60%;\n}\n.backpack-home__user-info__button.ion-activated[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.backpack-home__available[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.backpack-home__available__label[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 4vw;\n}\n.backpack-home__available__value[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 7vw;\n}\n.backpack-home__total[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 4vw;\n}\n.backpack-home__your-money__button[_ngcontent-%COMP%] {\n  color: white;\n  height: 25px;\n  --border-color: white;\n  --padding-end: 16px;\n  --padding-start: 16px;\n}\n.backpack-home__your-money__button.ion-activated[_ngcontent-%COMP%] {\n  --background-activated: none;\n  --background-focused: none;\n}\n.backpack-home__cards[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  flex-grow: 3.7;\n}\n.backpack-home__use-money[_ngcontent-%COMP%] {\n  --use-money-bottom: 92px;\n  --use-money-right: 27px;\n}\n.backpack-home__nickname-label--loading[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 16px;\n  margin-bottom: 2px;\n  --border-radius: 6px;\n  background-image: linear-gradient(90deg, #280f49 -24.18%, #4d336d 50.26%, #280f49 114.84%);\n  margin-top: 1.5px;\n}\n.backpack-home__nickname--loading[_ngcontent-%COMP%] {\n  width: 85px;\n  height: 21px;\n  --border-radius: 6px;\n  background-image: linear-gradient(90deg, #280f49 -24.18%, #4d336d 50.26%, #280f49 114.84%);\n  margin-bottom: 0;\n}\n.backpack-home__available--loading[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 24px;\n  margin: 4px auto 10px auto;\n  --border-radius: 6px;\n  background-image: linear-gradient(90deg, #280f49 -24.18%, #4d336d 50.26%, #280f49 114.84%);\n}\n.backpack-home__total--loading[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 16px;\n  margin: 0 auto;\n  --border-radius: 6px;\n  background-image: linear-gradient(90deg, #280f49 -24.18%, #4d336d 50.26%, #280f49 114.84%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxZQUFBO0VBQ0EsbUNBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUFKO0FBRUk7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBQUFOO0FBSUU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7QUFGSjtBQUtFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FBSEo7QUFNRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBSko7QUFPRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUxKO0FBUUU7RUFDRSxhQUFBO0FBTko7QUFRSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQU5OO0FBU0k7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFQTjtBQVVJO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBUk47QUFVTTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsU0FBQTtBQVJSO0FBV007RUFDRSxVQUFBO0FBVFI7QUFjRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQVpKO0FBY0k7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUFaTjtBQWVJO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBYk47QUFpQkU7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUFmSjtBQW1CSTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBakJOO0FBbUJNO0VBQ0UsNEJBQUE7RUFDQSwwQkFBQTtBQWpCUjtBQXNCRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0FBcEJKO0FBdUJFO0VBQ0Usd0JBQUE7RUFDQSx1QkFBQTtBQXJCSjtBQXdCRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLDBGQUFBO0VBQ0EsaUJBQUE7QUF0Qko7QUF5QkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsMEZBQUE7RUFDQSxnQkFBQTtBQXZCSjtBQTBCRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtFQUNBLDBGQUFBO0FBeEJKO0FBMkJFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSwwRkFBQTtBQXpCSiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrcGFjay1ob21lIHtcbiAgJl9fcmVmcmVzaGVyIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVkaWFub2NoZSk7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAmX19zcGlubmVyIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjg1KTtcbiAgICB9XG4gIH1cblxuICAmX19pbWFnZS1kaXYge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgei1pbmRleDogMjtcbiAgfVxuXG4gICZfX2lvbi1pbWcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgJl9fY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gICZfX2hlYWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleC1ncm93OiAzO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gICZfX3VzZXItaW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgICZfX2l0ZW0ge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgfVxuXG4gICAgJl9fYXZhdGFyIHtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiAzMnB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgIH1cblxuICAgICZfX2J1dHRvbiB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICYuaGFzLW5vdGlmaWNhdGlvbjo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS16YW5haG9yaWEpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICAgIHRvcDogY2FsYyg1MCUgLSAxNHB4KTtcbiAgICAgICAgbGVmdDogNjAlO1xuICAgICAgfVxuXG4gICAgICAmLmlvbi1hY3RpdmF0ZWQge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICZfX2F2YWlsYWJsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgJl9fbGFiZWwge1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIGZvbnQtc2l6ZTogNHZ3O1xuICAgIH1cblxuICAgICZfX3ZhbHVlIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBmb250LXNpemU6IDd2dztcbiAgICB9XG4gIH1cblxuICAmX190b3RhbCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDR2dztcbiAgfVxuXG4gICZfX3lvdXItbW9uZXkge1xuICAgICZfX2J1dHRvbiB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAtLWJvcmRlci1jb2xvcjogd2hpdGU7XG4gICAgICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuXG4gICAgICAmLmlvbi1hY3RpdmF0ZWQge1xuICAgICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiBub25lO1xuICAgICAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmX19jYXJkcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgZmxleC1ncm93OiAzLjc7XG4gIH1cblxuICAmX191c2UtbW9uZXkge1xuICAgIC0tdXNlLW1vbmV5LWJvdHRvbTogOTJweDtcbiAgICAtLXVzZS1tb25leS1yaWdodDogMjdweDtcbiAgfVxuXG4gICZfX25pY2tuYW1lLWxhYmVsLS1sb2FkaW5nIHtcbiAgICB3aWR0aDogMzJweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgIC0tYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzI4MGY0OSAtMjQuMTglLCAjNGQzMzZkIDUwLjI2JSwgIzI4MGY0OSAxMTQuODQlKTtcbiAgICBtYXJnaW4tdG9wOiAxLjVweDtcbiAgfVxuXG4gICZfX25pY2tuYW1lLS1sb2FkaW5nIHtcbiAgICB3aWR0aDogODVweDtcbiAgICBoZWlnaHQ6IDIxcHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMjgwZjQ5IC0yNC4xOCUsICM0ZDMzNmQgNTAuMjYlLCAjMjgwZjQ5IDExNC44NCUpO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cblxuICAmX19hdmFpbGFibGUtLWxvYWRpbmcge1xuICAgIHdpZHRoOiAxNjBweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgbWFyZ2luOiA0cHggYXV0byAxMHB4IGF1dG87XG4gICAgLS1ib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMjgwZjQ5IC0yNC4xOCUsICM0ZDMzNmQgNTAuMjYlLCAjMjgwZjQ5IDExNC44NCUpO1xuICB9XG5cbiAgJl9fdG90YWwtLWxvYWRpbmcge1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgLS1ib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMjgwZjQ5IC0yNC4xOCUsICM0ZDMzNmQgNTAuMjYlLCAjMjgwZjQ5IDExNC44NCUpO1xuICB9XG59XG4iXX0= */"] });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_nequi_features_commons_decorators__WEBPACK_IMPORTED_MODULE_9__["RunOnce"])(_config_application_data_config__WEBPACK_IMPORTED_MODULE_1__["ApplicationDataConfig"].backpack.saveFullName),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
    ], HomePage.prototype, "persistFullName", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_nequi_features_commons_decorators__WEBPACK_IMPORTED_MODULE_9__["RunOnce"])(_config_application_data_config__WEBPACK_IMPORTED_MODULE_1__["ApplicationDataConfig"].backpack.saveNickName),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
    ], HomePage.prototype, "persistNickName", null);
    return HomePage;
}());



/***/ }),

/***/ "NCpI":
/*!*****************************************************************************************!*\
  !*** ./libs/apps/base/mobile/src/presentation/backpack/contingency/contingency.page.ts ***!
  \*****************************************************************************************/
/*! exports provided: ContingencyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContingencyPage", function() { return ContingencyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _config_application_data_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @config/application-data.config */ "hjha");
/* harmony import */ var _nequi_apps_base_mobile_config_features_commons_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/apps/base/mobile/config/features/commons/services */ "hVBB");
/* harmony import */ var _nequi_features_application_data_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/application-data/core */ "UgzZ");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/money-management/presentation */ "JFCQ");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _home_home_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../home/home.config */ "yFZ8");
/* harmony import */ var _contingency_view_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contingency.view-model */ "dIih");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ui_src_lib_directives_text_hidden_nequi_text_hidden_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../ui/src/lib/directives/text-hidden/nequi-text-hidden.directive */ "o3Td");
/* harmony import */ var _ui_src_lib_directives_nequi_currency_style_nequi_currency_style_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../ui/src/lib/directives/nequi-currency-style/nequi-currency-style.directive */ "kVXI");
/* harmony import */ var _features_money_management_src_presentation_components_use_money_use_money_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../../features/money-management/src/presentation/components/use-money/use-money.component */ "x24J");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");






















function ContingencyPage_ion_label_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.viewModel.greeting);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.viewModel.nickName);
} }
function ContingencyPage_ion_label_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "ion-skeleton-text", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "ion-skeleton-text", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ContingencyPage_ion_text_19_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "span", 35);
} if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nequiTextHidden", ctx_r8.viewModel.shouldShowAvailable);
} }
function ContingencyPage_ion_text_19_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "span", 36);
} if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nequiCurrencyStyle", ctx_r9.viewModel.availableAmount);
} }
function ContingencyPage_ion_text_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-text", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ContingencyPage_ion_text_19_span_1_Template, 1, 1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, ContingencyPage_ion_text_19_span_2_Template, 1, 1, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r2.viewModel.shouldShowAvailable);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r2.viewModel.shouldShowAvailable);
} }
function ContingencyPage_ion_skeleton_text_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ion-skeleton-text", 37);
} }
function ContingencyPage_ion_text_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ion-text", 38);
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nequiTextHidden", ctx_r4.viewModel.shouldShowAvailable);
} }
function ContingencyPage_ion_text_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ion-text", 39);
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nequiCurrencyStyle", ctx_r5.viewModel.totalAmount);
} }
function ContingencyPage_ion_skeleton_text_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ion-skeleton-text", 40);
} }
function ContingencyPage_app_use_money_38_Template(rf, ctx) { if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-use-money", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("optionSelected", function ContingencyPage_app_use_money_38_Template_app_use_money_optionSelected_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r11); var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r10.onOptionSelected($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("options", ctx_r7.viewModel.useMoneyOptions);
} }
var _c0 = function (a0) { return { "ion-content--backpack-without-ceiling": a0 }; };
var DEFAULT_EXECUTION_TIME = 500;
var ContingencyPage = /** @class */ (function () {
    function ContingencyPage(userInfoProvider, navigatorProvider, appOptionsProvider, statusBarService, translateProvider, useMoneyStatusService, applicationDataInteractor, toastService) {
        this.userInfoProvider = userInfoProvider;
        this.navigatorProvider = navigatorProvider;
        this.appOptionsProvider = appOptionsProvider;
        this.statusBarService = statusBarService;
        this.translateProvider = translateProvider;
        this.useMoneyStatusService = useMoneyStatusService;
        this.applicationDataInteractor = applicationDataInteractor;
        this.toastService = toastService;
        this.viewModel = new _contingency_view_model__WEBPACK_IMPORTED_MODULE_9__["ContingencyViewModel"]();
        this.config = _home_home_config__WEBPACK_IMPORTED_MODULE_8__["HomeConfig"];
    }
    ContingencyPage.prototype.ngOnInit = function () {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.viewModel.setUseMoneyOptions(this.appOptionsProvider.getUseMoney());
                        this.statusBarService.changeStatusBarColor(_nequi_apps_base_mobile_config_features_commons_services__WEBPACK_IMPORTED_MODULE_2__["Colors"].MEDIANOCHE);
                        return [4 /*yield*/, this.loadNickName()];
                    case 1:
                        _b.sent();
                        this.useMoneyStatusService.subscribe(function (status) { return (_this.viewModel.isOriginMoneyOpened = status === _nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_6__["UseMoneyStatus"].OPENED); });
                        this.isSavingAccount = ((_a = this.userInfoProvider.getAccount()) === null || _a === void 0 ? void 0 : _a.type) === _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_4__["AccountType"].SAVINGS;
                        return [2 /*return*/];
                }
            });
        });
    };
    ContingencyPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        setTimeout(function () {
            _this.useMoneyComponent.onTapFab();
            _this.useMoneyComponent.open(_this.viewModel.useMoneyOptions);
        }, DEFAULT_EXECUTION_TIME);
    };
    ContingencyPage.prototype.ngOnDestroy = function () {
        this.useMoneyStatusService.unsubscribe();
    };
    ContingencyPage.prototype.loadNickName = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        this.loadingNickname = true;
                        _a = this.viewModel;
                        return [4 /*yield*/, this.applicationDataInteractor.findValue(_config_application_data_config__WEBPACK_IMPORTED_MODULE_1__["ApplicationDataConfig"].backpack.nickName, '', this.userInfoProvider.getPhoneNumber())];
                    case 1:
                        _a.nickName = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        this.viewModel.nickName = '';
                        return [3 /*break*/, 3];
                    case 3:
                        this.loadGreeting();
                        this.loadingNickname = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    ContingencyPage.prototype.onOptionSelected = function (option) {
        this.navigatorProvider.navigateForward(option.url, {
            state: {
                contingencyAvailable: this.viewModel.availableAmount,
            },
        });
    };
    ContingencyPage.prototype.toggleAvailable = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.viewModel.shouldShowAvailable = !this.viewModel.shouldShowAvailable;
                        return [4 /*yield*/, this.applicationDataInteractor.save(this.config.applicationData.balanceVisibleStatus, this.viewModel.shouldShowAvailable)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ContingencyPage.prototype.showDisableAlert = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var message;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        message = this.translateProvider.get(this.config.i18n.disabledOption);
                        return [4 /*yield*/, this.toastService.showInfo(message)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ContingencyPage.prototype.loadGreeting = function () {
        var greeting = this.translateProvider.get(this.config.greeting);
        this.viewModel.validateGreeting(greeting);
    };
    ContingencyPage.ɵfac = function ContingencyPage_Factory(t) { return new (t || ContingencyPage)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_5__["UserInfoProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_5__["NavigatorProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_5__["AppOptionsProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_nequi_apps_base_mobile_config_features_commons_services__WEBPACK_IMPORTED_MODULE_2__["StatusBarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_5__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_6__["UseMoneyStatusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_nequi_features_application_data_core__WEBPACK_IMPORTED_MODULE_3__["ApplicationDataInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_7__["ToastService"])); };
    ContingencyPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: ContingencyPage, selectors: [["app-backpack-contingency"]], viewQuery: function ContingencyPage_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_6__["UseMoneyComponent"], 1);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.useMoneyComponent = _t.first);
        } }, decls: 39, vars: 25, consts: [["fullscreen", "true", 1, "backpack-home", "ion-content--backpack", 3, "ngClass"], [1, "backpack-home__content", "ion-content--backpack-contingency", "ion-padding-horizontal"], [1, "backpack-home__header", "ion-no-padding"], [1, "backpack-home__user-info", "ion-justify-content-between"], ["lines", "none", 1, "backpack-home__user-info__item", 3, "click"], [1, "backpack-home__user-info__avatar"], ["src", "/assets/images/backpack/user-image.svg"], [4, "ngIf"], [1, "ion-justify-content-between"], ["id", "backpack-home__notification_button", 1, "backpack-home__user-info__button", 3, "click"], ["slot", "icon-only", "name", "notifications-outline"], ["id", "backpack-home__help_button", 1, "backpack-home__user-info__button", 3, "click"], ["slot", "icon-only", "name", "help"], [1, "ion-text-center", "backpack-home__available", "margin-top", "margin-top-16"], [1, "backpack-home__available__label"], [1, "available__eye", 3, "name"], ["class", "backpack-home__available__value margin-bottom-8", 4, "ngIf"], ["animated", "", "class", "backpack-home__available--loading", 4, "ngIf"], [1, "backpack-home__total", "ion-text-center"], [1, "backpack-home__total__label"], ["prefixCharacter", "$ ", "class", "backpack-home__total__value", 3, "nequiTextHidden", 4, "ngIf"], ["class", "backpack-home__total__value", 3, "nequiCurrencyStyle", 4, "ngIf"], ["animated", "", "class", "backpack-home__total--loading", 4, "ngIf"], [1, "backpack-home__your-money", "margin-top-8", "ion-text-center"], ["shape", "round", "fill", "outline", "size", "small", 1, "backpack-home__your-money__button", 3, "click"], ["slot", "end", "name", "chevron-down-outline"], [1, "contingency-container"], [1, "contingency-container__image", 3, "src"], [1, "contingency-container__label"], ["slot", "fixed", "id", "backpack-contingency_use-money_button", "class", "backpack-home__use-money", 3, "options", "optionSelected", 4, "ngIf"], ["animated", "", 1, "backpack-home__nickname-label--loading"], ["animated", "", 1, "backpack-home__nickname--loading"], [1, "backpack-home__available__value", "margin-bottom-8"], ["prefixCharacter", "$ ", 3, "nequiTextHidden", 4, "ngIf"], [3, "nequiCurrencyStyle", 4, "ngIf"], ["prefixCharacter", "$ ", 3, "nequiTextHidden"], [3, "nequiCurrencyStyle"], ["animated", "", 1, "backpack-home__available--loading"], ["prefixCharacter", "$ ", 1, "backpack-home__total__value", 3, "nequiTextHidden"], [1, "backpack-home__total__value", 3, "nequiCurrencyStyle"], ["animated", "", 1, "backpack-home__total--loading"], ["slot", "fixed", "id", "backpack-contingency_use-money_button", 1, "backpack-home__use-money", 3, "options", "optionSelected"]], template: function ContingencyPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-content", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "ion-item", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ContingencyPage_Template_ion_item_click_4_listener() { return ctx.showDisableAlert(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "ion-avatar", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "ion-img", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, ContingencyPage_ion_label_7_Template, 5, 2, "ion-label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, ContingencyPage_ion_label_8_Template, 3, 0, "ion-label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "ion-buttons", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "ion-button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ContingencyPage_Template_ion_button_click_10_listener() { return ctx.showDisableAlert(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "ion-icon", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "ion-button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ContingencyPage_Template_ion_button_click_12_listener() { return ctx.showDisableAlert(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](13, "ion-icon", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "ion-text", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](17, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "ion-icon", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, ContingencyPage_ion_text_19_Template, 3, 2, "ion-text", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](20, ContingencyPage_ion_skeleton_text_20_Template, 1, 0, "ion-skeleton-text", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "ion-text", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](24, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](25, ContingencyPage_ion_text_25_Template, 1, 1, "ion-text", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](26, ContingencyPage_ion_text_26_Template, 1, 1, "ion-text", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](27, ContingencyPage_ion_skeleton_text_27_Template, 1, 0, "ion-skeleton-text", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "ion-button", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ContingencyPage_Template_ion_button_click_29_listener() { return ctx.showDisableAlert(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](31, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](32, "ion-icon", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](34, "img", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "ion-text", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](36);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](37, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](38, ContingencyPage_app_use_money_38_Template, 1, 1, "app-use-money", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](23, _c0, ctx.isSavingAccount));
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.loadingNickname);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.loadingNickname);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](17, 15, ctx.config.contingency.available), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("name", ctx.viewModel.shouldShowAvailable ? "eye-outline" : "eye-off-outline");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.viewModel.isLoadingBalance);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.viewModel.isLoadingBalance);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](24, 17, ctx.config.total), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.viewModel.isLoadingBalance && ctx.viewModel.shouldShowAvailable);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.viewModel.isLoadingBalance && !ctx.viewModel.shouldShowAvailable);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.viewModel.isLoadingBalance);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](31, 19, "backpack.home.money.your-money-button"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx.config.contingency.image, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](37, 21, ctx.config.contingency.label), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.viewModel.useMoneyOptions);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonAvatar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonImg"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonSkeletonText"], _ui_src_lib_directives_text_hidden_nequi_text_hidden_directive__WEBPACK_IMPORTED_MODULE_13__["NequiTextHiddenDirective"], _ui_src_lib_directives_nequi_currency_style_nequi_currency_style_directive__WEBPACK_IMPORTED_MODULE_14__["NequiCurrencyStyleDirective"], _features_money_management_src_presentation_components_use_money_use_money_component__WEBPACK_IMPORTED_MODULE_15__["UseMoneyComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslatePipe"]], styles: [".backpack-home__refresher[_ngcontent-%COMP%] {\n  color: white;\n  background-color: var(--medianoche);\n  height: 100px;\n  padding-top: 16px;\n  text-align: center;\n}\n.backpack-home__refresher__spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 auto;\n  transform: scale(0.85);\n}\n.backpack-home__image-div[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  justify-content: flex-end;\n  z-index: 2;\n}\n.backpack-home__ion-img[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n}\n.backpack-home__content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n.backpack-home__header[_ngcontent-%COMP%] {\n  width: 100%;\n  flex-grow: 3;\n  color: white;\n}\n.backpack-home__user-info[_ngcontent-%COMP%] {\n  display: flex;\n}\n.backpack-home__user-info__item[_ngcontent-%COMP%] {\n  color: white;\n  display: flex;\n  --background: transparent;\n  --padding-start: 0;\n}\n.backpack-home__user-info__avatar[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  --border-radius: 32px;\n  margin-right: 16px;\n}\n.backpack-home__user-info__button[_ngcontent-%COMP%] {\n  color: white;\n  position: relative;\n}\n.backpack-home__user-info__button.has-notification[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  background: var(--zanahoria);\n  border-radius: 50%;\n  width: 12px;\n  height: 12px;\n  top: calc(50% - 14px);\n  left: 60%;\n}\n.backpack-home__user-info__button.ion-activated[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.backpack-home__available[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.backpack-home__available__label[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 4vw;\n}\n.backpack-home__available__value[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 7vw;\n}\n.backpack-home__total[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 4vw;\n}\n.backpack-home__your-money__button[_ngcontent-%COMP%] {\n  color: white;\n  height: 25px;\n  --border-color: white;\n  --padding-end: 16px;\n  --padding-start: 16px;\n}\n.backpack-home__your-money__button.ion-activated[_ngcontent-%COMP%] {\n  --background-activated: none;\n  --background-focused: none;\n}\n.backpack-home__cards[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  flex-grow: 3.7;\n}\n.backpack-home__use-money[_ngcontent-%COMP%] {\n  --use-money-bottom: 92px;\n  --use-money-right: 27px;\n}\n.backpack-home__nickname-label--loading[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 16px;\n  margin-bottom: 2px;\n  --border-radius: 6px;\n  background-image: linear-gradient(90deg, #280f49 -24.18%, #4d336d 50.26%, #280f49 114.84%);\n  margin-top: 1.5px;\n}\n.backpack-home__nickname--loading[_ngcontent-%COMP%] {\n  width: 85px;\n  height: 21px;\n  --border-radius: 6px;\n  background-image: linear-gradient(90deg, #280f49 -24.18%, #4d336d 50.26%, #280f49 114.84%);\n  margin-bottom: 0;\n}\n.backpack-home__available--loading[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 24px;\n  margin: 4px auto 10px auto;\n  --border-radius: 6px;\n  background-image: linear-gradient(90deg, #280f49 -24.18%, #4d336d 50.26%, #280f49 114.84%);\n}\n.backpack-home__total--loading[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 16px;\n  margin: 0 auto;\n  --border-radius: 6px;\n  background-image: linear-gradient(90deg, #280f49 -24.18%, #4d336d 50.26%, #280f49 114.84%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxZQUFBO0VBQ0EsbUNBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUFKO0FBRUk7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBQUFOO0FBSUU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7QUFGSjtBQUtFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FBSEo7QUFNRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBSko7QUFPRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUxKO0FBUUU7RUFDRSxhQUFBO0FBTko7QUFRSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQU5OO0FBU0k7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFQTjtBQVVJO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBUk47QUFVTTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsU0FBQTtBQVJSO0FBV007RUFDRSxVQUFBO0FBVFI7QUFjRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQVpKO0FBY0k7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUFaTjtBQWVJO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBYk47QUFpQkU7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUFmSjtBQW1CSTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBakJOO0FBbUJNO0VBQ0UsNEJBQUE7RUFDQSwwQkFBQTtBQWpCUjtBQXNCRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0FBcEJKO0FBdUJFO0VBQ0Usd0JBQUE7RUFDQSx1QkFBQTtBQXJCSjtBQXdCRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLDBGQUFBO0VBQ0EsaUJBQUE7QUF0Qko7QUF5QkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsMEZBQUE7RUFDQSxnQkFBQTtBQXZCSjtBQTBCRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtFQUNBLDBGQUFBO0FBeEJKO0FBMkJFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSwwRkFBQTtBQXpCSiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrcGFjay1ob21lIHtcbiAgJl9fcmVmcmVzaGVyIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVkaWFub2NoZSk7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAmX19zcGlubmVyIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjg1KTtcbiAgICB9XG4gIH1cblxuICAmX19pbWFnZS1kaXYge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgei1pbmRleDogMjtcbiAgfVxuXG4gICZfX2lvbi1pbWcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgJl9fY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gICZfX2hlYWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleC1ncm93OiAzO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gICZfX3VzZXItaW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgICZfX2l0ZW0ge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgfVxuXG4gICAgJl9fYXZhdGFyIHtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiAzMnB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgIH1cblxuICAgICZfX2J1dHRvbiB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICYuaGFzLW5vdGlmaWNhdGlvbjo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS16YW5haG9yaWEpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICAgIHRvcDogY2FsYyg1MCUgLSAxNHB4KTtcbiAgICAgICAgbGVmdDogNjAlO1xuICAgICAgfVxuXG4gICAgICAmLmlvbi1hY3RpdmF0ZWQge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICZfX2F2YWlsYWJsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgJl9fbGFiZWwge1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIGZvbnQtc2l6ZTogNHZ3O1xuICAgIH1cblxuICAgICZfX3ZhbHVlIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBmb250LXNpemU6IDd2dztcbiAgICB9XG4gIH1cblxuICAmX190b3RhbCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDR2dztcbiAgfVxuXG4gICZfX3lvdXItbW9uZXkge1xuICAgICZfX2J1dHRvbiB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAtLWJvcmRlci1jb2xvcjogd2hpdGU7XG4gICAgICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuXG4gICAgICAmLmlvbi1hY3RpdmF0ZWQge1xuICAgICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiBub25lO1xuICAgICAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmX19jYXJkcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgZmxleC1ncm93OiAzLjc7XG4gIH1cblxuICAmX191c2UtbW9uZXkge1xuICAgIC0tdXNlLW1vbmV5LWJvdHRvbTogOTJweDtcbiAgICAtLXVzZS1tb25leS1yaWdodDogMjdweDtcbiAgfVxuXG4gICZfX25pY2tuYW1lLWxhYmVsLS1sb2FkaW5nIHtcbiAgICB3aWR0aDogMzJweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgIC0tYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzI4MGY0OSAtMjQuMTglLCAjNGQzMzZkIDUwLjI2JSwgIzI4MGY0OSAxMTQuODQlKTtcbiAgICBtYXJnaW4tdG9wOiAxLjVweDtcbiAgfVxuXG4gICZfX25pY2tuYW1lLS1sb2FkaW5nIHtcbiAgICB3aWR0aDogODVweDtcbiAgICBoZWlnaHQ6IDIxcHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMjgwZjQ5IC0yNC4xOCUsICM0ZDMzNmQgNTAuMjYlLCAjMjgwZjQ5IDExNC44NCUpO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cblxuICAmX19hdmFpbGFibGUtLWxvYWRpbmcge1xuICAgIHdpZHRoOiAxNjBweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgbWFyZ2luOiA0cHggYXV0byAxMHB4IGF1dG87XG4gICAgLS1ib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMjgwZjQ5IC0yNC4xOCUsICM0ZDMzNmQgNTAuMjYlLCAjMjgwZjQ5IDExNC44NCUpO1xuICB9XG5cbiAgJl9fdG90YWwtLWxvYWRpbmcge1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgLS1ib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMjgwZjQ5IC0yNC4xOCUsICM0ZDMzNmQgNTAuMjYlLCAjMjgwZjQ5IDExNC44NCUpO1xuICB9XG59XG4iXX0= */", ".contingency-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 40%;\n  left: 0;\n  right: 0;\n}\n.contingency-container__image[_ngcontent-%COMP%], .contingency-container__label[_ngcontent-%COMP%] {\n  display: block;\n}\n.contingency-container__image[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n.contingency-container__label[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--medianoche);\n  margin: 8px 16px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvY29udGluZ2VuY3kucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUFDRjtBQUNFO0VBRUUsY0FBQTtBQUFKO0FBR0U7RUFDRSxjQUFBO0FBREo7QUFJRTtFQUNFLGVBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFGSiIsImZpbGUiOiJjb250aW5nZW5jeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGluZ2VuY3ktY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQwJTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG5cbiAgJl9faW1hZ2UsXG4gICZfX2xhYmVsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gICZfX2ltYWdlIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuXG4gICZfX2xhYmVsIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6IHZhcigtLW1lZGlhbm9jaGUpO1xuICAgIG1hcmdpbjogOHB4IDE2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG4iXX0= */"] });
    return ContingencyPage;
}());



/***/ }),

/***/ "dIih":
/*!***********************************************************************************************!*\
  !*** ./libs/apps/base/mobile/src/presentation/backpack/contingency/contingency.view-model.ts ***!
  \***********************************************************************************************/
/*! exports provided: ContingencyViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContingencyViewModel", function() { return ContingencyViewModel; });
var ContingencyViewModel = /** @class */ (function () {
    function ContingencyViewModel() {
    }
    Object.defineProperty(ContingencyViewModel.prototype, "useMoneyOptions", {
        get: function () {
            return this.options;
        },
        enumerable: false,
        configurable: true
    });
    ContingencyViewModel.prototype.setUseMoneyOptions = function (options) {
        this.options = options;
    };
    ContingencyViewModel.prototype.validateGreeting = function (greeting) {
        if (!this.nickName) {
            this.greeting = greeting.slice(0, -1);
            return;
        }
        this.greeting = greeting;
    };
    return ContingencyViewModel;
}());



/***/ }),

/***/ "yFZ8":
/*!*****************************************************************************!*\
  !*** ./libs/apps/base/mobile/src/presentation/backpack/home/home.config.ts ***!
  \*****************************************************************************/
/*! exports provided: HomeConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeConfig", function() { return HomeConfig; });
var HomeConfig = Object.freeze({
    applicationData: {
        balanceVisibleStatus: 'backpack-home.balance-visible-status',
    },
    greeting: 'backpack.home.greeting',
    availableText: 'backpack.home.money.available-text',
    contingency: {
        available: 'backpack.home.contingency.available',
        image: 'assets/images/icons/icon-contingency.svg',
        label: 'backpack.home.contingency.label',
    },
    availableTextPockets: 'backpack.home.money.available-text-pockets',
    total: 'backpack.home.money.total',
    useMoneyMessages: 'backpack.home.use-money',
    routes: {
        moneyPartition: '/admin/backpack/money-partition',
        bankRecharge: '/admin/send/bank-recharge',
        linkBankAccount: '/admin/send/bank-recharge/link-bank-account',
        rechargeBankAccount: '/admin/send/bank-recharge/recharge-bank-account',
        sendMoneyUser: '/admin/send/nequi',
        sendMoneyOtherBank: '/admin/send/bank',
        requestMoney: '/admin/request-money',
        cashOutMoney: '/admin/cash-out-money',
        payments: '/admin/payments/read-qr',
        notifications: '/admin/notifications',
        profile: '/admin/profile',
        help: '/help',
    },
    i18n: {
        noPassWhitelistModal: 'backpack.home.modals.trapped-genie.no-pass-white-list',
        invalidDocumentModal: 'backpack.home.modals.trapped-genie.invalid-document',
        noBankAccountsModal: 'backpack.home.modals.trapped-genie.no-banck-accounts',
        linkBankAccountBoottomSheet: 'backpack.home.bottom-sheet.link-bank-account',
        sendToBankBoottomSheet: 'backpack.home.bottom-sheet.send-to-bank',
        disabledOption: 'backpack.home.use-money.disabled-option',
    },
    changeToolMessages: 'backpack.change-tool',
    bottomSheet: {
        cssClass: {
            firstTimeMessage: 'first-time-message--icon-standard',
        },
    },
    defaultTools: [
        {
            id: 'nequiPhysicalCard',
            title: 'Tarjeta Nequi',
            url: 'nequiPhysicalCardHome',
            images: {
                backpack: '/assets/images/tools/dashboard/nequiPhysicalCard.svg',
                store: '/assets/images/tools/closet/nequiPhysicalCard.svg',
            },
            moveOptions: {
                canMove: true,
            },
        },
        {
            id: 'saved',
            title: 'Colchón',
            url: 'saved',
            images: {
                backpack: '/assets/images/tools/dashboard/saved.svg',
                store: '/assets/images/tools/closet/saved.svg',
            },
            moveOptions: {
                canMove: true,
            },
        },
        {
            id: 'pocket',
            title: 'Bolsillos',
            url: 'pockets',
            images: {
                backpack: '/assets/images/tools/dashboard/pocket.svg',
                store: '/assets/images/tools/closet/pocket.svg',
            },
            moveOptions: {
                canMove: true,
            },
        },
    ],
    homeImages: {
        bkSaldo: '/assets/images/home/bk_saldo.svg',
    },
    helpContext: 'profile',
    userImageId: 'profile-user-image',
    analytics: {
        useMoney: {
            name: 'Signo_Pesos',
            params: ['fecha', 'accion'],
            tags: {
                'services': 'Servicios',
                'cash-out': 'Saca',
                'request': 'Pide',
                'send': 'Envía',
                'qr': 'QR',
                'cash-in': 'Recarga',
            },
        },
    },
});


/***/ })

}]);
//# sourceMappingURL=default~presentation-backpack-backpack-module~presentation-tab-links-tab-links-module.js.map