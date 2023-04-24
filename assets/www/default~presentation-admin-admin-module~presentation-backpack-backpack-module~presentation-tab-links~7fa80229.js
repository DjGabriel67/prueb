(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~presentation-admin-admin-module~presentation-backpack-backpack-module~presentation-tab-links~7fa80229"],{

/***/ "1m3c":
/*!*************************************************************************!*\
  !*** ./libs/features/closet/src/presentation/features-closet.module.ts ***!
  \*************************************************************************/
/*! exports provided: FeaturesClosetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesClosetModule", function() { return FeaturesClosetModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nequi_features_closet_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/closet/core */ "8KP5");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_features_settings_presentation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/settings/presentation */ "uYS2");
/* harmony import */ var _nequi_features_style_manager_presentation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/style-manager/presentation */ "An21");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _config_closet_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../config/closet.config */ "vppm");
/* harmony import */ var _closet_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./closet-routing.module */ "gGMr");
/* harmony import */ var _pages_home_home_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/home/home.page */ "3EK0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");













var FeaturesClosetModule = /** @class */ (function () {
    function FeaturesClosetModule() {
    }
    FeaturesClosetModule.ɵfac = function FeaturesClosetModule_Factory(t) { return new (t || FeaturesClosetModule)(); };
    FeaturesClosetModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: FeaturesClosetModule });
    FeaturesClosetModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [
            {
                provide: _nequi_features_closet_core__WEBPACK_IMPORTED_MODULE_3__["ClosetInteractor"],
                deps: [_nequi_features_closet_core__WEBPACK_IMPORTED_MODULE_3__["ClosetRepository"]],
                useFactory: function (repository) { return new _nequi_features_closet_core__WEBPACK_IMPORTED_MODULE_3__["ClosetInteractor"](repository); },
            },
            _nequi_features_settings_presentation__WEBPACK_IMPORTED_MODULE_5__["ToolListBottomSheetService"],
            {
                provide: _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_4__["ModuleConfigProvider"],
                useValue: _config_closet_config__WEBPACK_IMPORTED_MODULE_9__["ClosetConfig"],
            },
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _closet_routing_module__WEBPACK_IMPORTED_MODULE_10__["ClosetRoutingModule"],
                _nequi_ui__WEBPACK_IMPORTED_MODULE_7__["NequiUiModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
                _nequi_features_style_manager_presentation__WEBPACK_IMPORTED_MODULE_6__["FeaturesStyleManagerModule"],
            ]] });
    return FeaturesClosetModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](FeaturesClosetModule, { declarations: [_pages_home_home_page__WEBPACK_IMPORTED_MODULE_11__["HomePage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _closet_routing_module__WEBPACK_IMPORTED_MODULE_10__["ClosetRoutingModule"],
        _nequi_ui__WEBPACK_IMPORTED_MODULE_7__["NequiUiModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
        _nequi_features_style_manager_presentation__WEBPACK_IMPORTED_MODULE_6__["FeaturesStyleManagerModule"]] }); })();


/***/ }),

/***/ "3EK0":
/*!***********************************************************************!*\
  !*** ./libs/features/closet/src/presentation/pages/home/home.page.ts ***!
  \***********************************************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _nequi_features_application_data_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/features/application-data/core */ "UgzZ");
/* harmony import */ var _nequi_features_closet_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/closet/core */ "8KP5");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_features_settings_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/settings/core */ "0nzD");
/* harmony import */ var _nequi_features_settings_presentation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/settings/presentation */ "uYS2");
/* harmony import */ var _nequi_features_style_manager_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/features/style-manager/core */ "vpn+");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _nequi_utils_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nequi/utils/string */ "p6rB");
/* harmony import */ var _constants_banner_status__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../constants/banner-status */ "tsmQ");
/* harmony import */ var _constants_tool_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../constants/tool-types */ "QiGx");
/* harmony import */ var _mappers_get_banner_list_mapper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../mappers/get-banner-list.mapper */ "L7X/");
/* harmony import */ var _home_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home.config */ "Dfqp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../ui/src/lib/directives/animate-title-on-scroll/animate-title-on-scroll.directive */ "qbWi");
/* harmony import */ var _style_manager_src_presentation_directives_styles_from_resource_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../style-manager/src/presentation/directives/styles-from-resource.directive */ "3kMd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ui_src_lib_components_busy_indicator_busy_indicator_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../../ui/src/lib/components/busy-indicator/busy-indicator.component */ "N6nj");
/* harmony import */ var _ui_src_lib_components_skeleton_skeleton_card_skeleton_card_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../../ui/src/lib/components/skeleton/skeleton-card/skeleton-card.component */ "+36n");
/* harmony import */ var _ui_src_lib_directives_long_press_long_press_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../../../ui/src/lib/directives/long-press/long-press.directive */ "kHOk");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");































function HomePage_ion_skeleton_text_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "ion-skeleton-text", 10);
} }
function HomePage_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainer"](0);
} }
var _c0 = function (a0) { return { "busy-indicator__margin": a0 }; };
function HomePage_app_busy_indicator_12_Template(rf, ctx) { if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "app-busy-indicator", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("onReload", function HomePage_app_busy_indicator_12_Template_app_busy_indicator_onReload_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r7); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return ctx_r6.setStoreTools(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "app-skeleton-card", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](5, _c0, ctx_r2.loadingError))("showReload", ctx_r2.loadingError)("reloadMessage", ctx_r2.loadingError)("showSkeleton", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("items", 20);
} }
function HomePage_ion_grid_13_ion_col_2_Template(rf, ctx) { if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("appLongPress", function HomePage_ion_grid_13_ion_col_2_Template_ion_col_appLongPress_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r12); var i_r10 = ctx.index; var tool_r9 = ctx.$implicit; var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2); return ctx_r11.openBottomSheetToolList($event, i_r10, tool_r9); })("click", function HomePage_ion_grid_13_ion_col_2_Template_ion_col_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r12); var tool_r9 = ctx.$implicit; var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2); return ctx_r13.cardClick(tool_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "ion-text", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    var tool_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("src", tool_r9.images.store, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](tool_r9.title);
} }
function HomePage_ion_grid_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-grid", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, HomePage_ion_grid_13_ion_col_2_Template, 5, 2, "ion-col", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r3.tools);
} }
function HomePage_ng_template_14_ion_slide_2_ion_button_2_Template(rf, ctx) { if (rf & 1) {
    var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function HomePage_ng_template_14_ion_slide_2_ion_button_2_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r19); var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3); return ctx_r18.isBannerVisible = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "ion-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} }
var _c1 = function (a0) { return { "loading": a0 }; };
function HomePage_ng_template_14_ion_slide_2_Template(rf, ctx) { if (rf & 1) {
    var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-slide", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "ion-buttons", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, HomePage_ng_template_14_ion_slide_2_ion_button_2_Template, 2, 0, "ion-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "ion-img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ionImgDidLoad", function HomePage_ng_template_14_ion_slide_2_Template_ion_img_ionImgDidLoad_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r21); var bannerIndex_r16 = ctx.index; var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2); return ctx_r20.onIonImgDidLoad(bannerIndex_r16); })("click", function HomePage_ng_template_14_ion_slide_2_Template_ion_img_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r21); var banner_r15 = ctx.$implicit; var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2); return ctx_r22.onClick(banner_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    var banner_r15 = ctx.$implicit;
    var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](3, _c1, banner_r15.status === ctx_r14.bannerStatus.LOADING));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", banner_r15.status === ctx_r14.bannerStatus.LOADED);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("src", banner_r15.urlImage);
} }
function HomePage_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "ion-slides", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, HomePage_ng_template_14_ion_slide_2_Template, 4, 5, "ion-slide", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("options", ctx_r5.slideOpts);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r5.bannerList);
} }
var HomePage = /** @class */ (function () {
    function HomePage(fullscreenModalService, translateProvider, applicationDataInteractor, settingInteractor, toastService, closetInteractor, navigatorProvider, loggerInteractor, toolListBottomSheetService, analyticsInteractor, moduleConfigProvider) {
        this.fullscreenModalService = fullscreenModalService;
        this.translateProvider = translateProvider;
        this.applicationDataInteractor = applicationDataInteractor;
        this.settingInteractor = settingInteractor;
        this.toastService = toastService;
        this.closetInteractor = closetInteractor;
        this.navigatorProvider = navigatorProvider;
        this.loggerInteractor = loggerInteractor;
        this.toolListBottomSheetService = toolListBottomSheetService;
        this.analyticsInteractor = analyticsInteractor;
        this.moduleConfigProvider = moduleConfigProvider;
        this.hasErrorLoading = false;
        this.isBannerVisible = true;
        this.slideOpts = {
            speed: 1500,
            autoplay: true,
        };
        this.showSliderSkeleton = true;
        this.translateProvider.loadModule(this.moduleConfigProvider.i18n.moduleKey);
        this.getBannerData();
    }
    Object.defineProperty(HomePage.prototype, "bannerStatus", {
        get: function () {
            return _constants_banner_status__WEBPACK_IMPORTED_MODULE_11__["BannerStatus"];
        },
        enumerable: false,
        configurable: true
    });
    HomePage.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.resourceId = _nequi_features_style_manager_core__WEBPACK_IMPORTED_MODULE_7__["ResourceId"].CLOSET;
                        return [4 /*yield*/, this.setStoreTools()];
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
                    case 0:
                        this.isBannerVisible = true;
                        return [4 /*yield*/, this.validateShowCoachmark()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.setStoreTools = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        this.isShowBusy = true;
                        this.loadingError = '';
                        _a = this;
                        return [4 /*yield*/, this.settingInteractor.getClosetToolList()];
                    case 1:
                        _a.tools = _b.sent();
                        this.isShowBusy = false;
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        this.loggerInteractor.error(error_1);
                        this.loadingError = error_1.message;
                        this.hasErrorLoading = true;
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.openBottomSheetToolList = function (event, index, tool) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var options, items, data;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        event.preventDefault();
                        if (!!tool.moveOptions.canMove) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toastService.showError(tool.moveOptions.closetCanNotMoveMessage)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                    case 2:
                        options = this.translateProvider.get(_home_config__WEBPACK_IMPORTED_MODULE_14__["HomeConfig"].changeToolMessages);
                        return [4 /*yield*/, this.settingInteractor.getBackpackToolList()];
                    case 3:
                        items = _a.sent();
                        return [4 /*yield*/, this.toolListBottomSheetService.show({
                                title: Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_10__["createFormat"])(options['bottom-sheet'].title, [tool.title]),
                                items: items.map(function (item, count) {
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item), { index: count, type: _constants_tool_types__WEBPACK_IMPORTED_MODULE_12__["ToolType"].BACKPACK });
                                }),
                                successMessage: Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_10__["createFormat"])(options.success, [tool.title]),
                                toolsIndex: { closet: index },
                            })];
                    case 4:
                        data = (_a.sent()).data;
                        if (data === true) {
                            this.setStoreTools();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.onIonImgDidLoad = function (bannerIndex) {
        this.bannerList[bannerIndex].status = _constants_banner_status__WEBPACK_IMPORTED_MODULE_11__["BannerStatus"].LOADED;
        this.showSliderSkeleton = false;
    };
    HomePage.prototype.onClick = function (banner) {
        if (!banner.deepLink) {
            return;
        }
        Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_9__["openUrl"])(banner.deepLink);
    };
    HomePage.prototype.cardClick = function (tool) {
        var _this = this;
        if (!tool.url) {
            return;
        }
        if (tool.analytics) {
            tool.analytics.forEach(function (event) {
                _this.analyticsInteractor.trackEvent(event);
            });
        }
        this.navigatorProvider.navigateForward([tool.url], {
            queryParams: tool.params,
            state: tool,
        });
    };
    HomePage.prototype.openCoachmark = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var coachmark;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                coachmark = this.translateProvider.get(_home_config__WEBPACK_IMPORTED_MODULE_14__["HomeConfig"].coachmarkMessage);
                this.fullscreenModalService.show({
                    id: _home_config__WEBPACK_IMPORTED_MODULE_14__["HomeConfig"].coachmarkTools.id,
                    imgPath: _home_config__WEBPACK_IMPORTED_MODULE_14__["HomeConfig"].coachmarkTools.imgPath,
                    cssClass: _home_config__WEBPACK_IMPORTED_MODULE_14__["HomeConfig"].coachmarkTools.cssClass,
                    content: coachmark.message,
                    fullPageDismiss: true,
                });
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.validateShowCoachmark = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var counter;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.applicationDataInteractor.findValue(this.moduleConfigProvider.applicationData.coachmarkToolViewedCounter, 1)];
                    case 1:
                        counter = _a.sent();
                        if (counter > _home_config__WEBPACK_IMPORTED_MODULE_14__["HomeConfig"].maxViewedCounter) {
                            return [2 /*return*/];
                        }
                        if (!(counter === _home_config__WEBPACK_IMPORTED_MODULE_14__["HomeConfig"].maxViewedCounter)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.openCoachmark()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        counter++;
                        return [4 /*yield*/, this.applicationDataInteractor.save(this.moduleConfigProvider.applicationData.coachmarkToolViewedCounter, counter)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.getBannerData = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var bannerList, e_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.closetInteractor.getBannerList()];
                    case 1:
                        bannerList = _a.sent();
                        this.bannerList = new _mappers_get_banner_list_mapper__WEBPACK_IMPORTED_MODULE_13__["GetBannerListMapper"]().fromList(bannerList);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        this.bannerList = _home_config__WEBPACK_IMPORTED_MODULE_14__["HomeConfig"].defaultBanner;
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.ɵfac = function HomePage_Factory(t) { return new (t || HomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_8__["FullscreenModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_4__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_nequi_features_application_data_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationDataInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_nequi_features_settings_core__WEBPACK_IMPORTED_MODULE_5__["SettingInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_8__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_nequi_features_closet_core__WEBPACK_IMPORTED_MODULE_2__["ClosetInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_4__["NavigatorProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__["LoggerInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_nequi_features_settings_presentation__WEBPACK_IMPORTED_MODULE_6__["ToolListBottomSheetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__["AnalyticsInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_4__["ModuleConfigProvider"])); };
    HomePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({ type: HomePage, selectors: [["app-closet"]], decls: 16, vars: 12, consts: [[1, "nequi-header", "nequi-header--white"], [1, "nequi-header__title", "ion-text-start"], ["scrollEvents", "true", "appAnimateTitleOnScroll", "", "fullscreen", "true", 1, "ion-padding-horizontal", "ion-content--white", "content", 3, "nequiStylesFromResource"], [1, "nequi-title"], [1, "slider", 3, "hidden"], ["class", "slider-skeleton", "animated", "", 4, "ngIf"], [4, "ngTemplateOutlet"], ["class", "busy-indicator", 3, "ngClass", "showReload", "reloadMessage", "showSkeleton", "onReload", 4, "ngIf"], ["class", "tool-list", "class", "ion-no-padding", 4, "ngIf"], ["banner", ""], ["animated", "", 1, "slider-skeleton"], [1, "busy-indicator", 3, "ngClass", "showReload", "reloadMessage", "showSkeleton", "onReload"], ["skeleton", "", "type", "small", 3, "items"], [1, "ion-no-padding"], ["class", "ion-text-center tool-list__col margin-bottom-8", "size", "3", 3, "appLongPress", "click", 4, "ngFor", "ngForOf"], ["size", "3", 1, "ion-text-center", "tool-list__col", "margin-bottom-8", 3, "appLongPress", "click"], [1, "tool-list__image-box"], ["onerror", "this.src='assets/images/tools/under-construction.svg'", 1, "tool-list__image", 3, "src"], [1, "tool-list__title"], ["pager", "", 1, "slider__slides", 3, "options"], ["class", "slider__slides__slide", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "slider__slides__slide", 3, "ngClass"], ["slot", "end", 1, "slider__buttons"], ["id", "home-closet-slider_close_button", "color", "medianoche", 3, "click", 4, "ngIf"], [3, "src", "ionImgDidLoad", "click"], ["id", "home-closet-slider_close_button", "color", "medianoche", 3, "click"], ["slot", "icon-only", "name", "close-outline"]], template: function HomePage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "ion-title", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "ion-content", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "ion-text", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](10, HomePage_ion_skeleton_text_10_Template, 1, 0, "ion-skeleton-text", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](11, HomePage_ng_container_11_Template, 1, 0, "ng-container", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](12, HomePage_app_busy_indicator_12_Template, 2, 7, "app-busy-indicator", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](13, HomePage_ion_grid_13_Template, 3, 1, "ion-grid", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](14, HomePage_ng_template_14_Template, 3, 2, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"]);
        } if (rf & 2) {
            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](4, 8, "closet.title"));
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("nequiStylesFromResource", ctx.resourceId);
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](8, 10, "closet.title"));
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("hidden", !ctx.isBannerVisible);
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.showSliderSkeleton);
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngTemplateOutlet", _r4);
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.isShowBusy);
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", (ctx.tools == null ? null : ctx.tools.length) > 0 && !ctx.isShowBusy);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonContent"], _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_17__["AnimateTitleOnScrollDirective"], _style_manager_src_presentation_directives_styles_from_resource_directive__WEBPACK_IMPORTED_MODULE_18__["StylesFromResourceDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonText"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgTemplateOutlet"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonSkeletonText"], _ui_src_lib_components_busy_indicator_busy_indicator_component__WEBPACK_IMPORTED_MODULE_20__["BusyIndicatorComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgClass"], _ui_src_lib_components_skeleton_skeleton_card_skeleton_card_component__WEBPACK_IMPORTED_MODULE_21__["SkeletonCardComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonRow"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonCol"], _ui_src_lib_directives_long_press_long_press_directive__WEBPACK_IMPORTED_MODULE_22__["LongPressDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonSlides"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonSlide"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonImg"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonIcon"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__["TranslatePipe"]], styles: [".close__button[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n}\n\n.content[_ngcontent-%COMP%] {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-bottom: 80px;\n}\n\n.busy-indicator[_ngcontent-%COMP%] {\n  --bottom: 35vh;\n}\n\n.nequi-title[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-left: 8px;\n}\n\n.tool-list__image-box[_ngcontent-%COMP%] {\n  box-shadow: 0px 2px 4px var(--medianoche-16);\n  border-radius: 8px;\n  padding: 4px 4px;\n  width: 40px;\n  margin: 0 auto 4px auto;\n}\n\n.tool-list__image[_ngcontent-%COMP%] {\n  width: 32px;\n}\n\n.tool-list__title[_ngcontent-%COMP%] {\n  color: var(--medianoche);\n  font-size: 0.875em;\n  padding: 0 4px;\n  display: block;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.slider[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 10px;\n  min-height: 20%;\n}\n\n.slider__buttons[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 5px;\n  top: 0;\n}\n\n.slider__slides[_ngcontent-%COMP%]     .swiper-pagination-bullet {\n  border: 1px solid var(--gray-alert-message);\n  background: var(--transparent);\n}\n\n.slider__slides[_ngcontent-%COMP%]     .swiper-pagination-bullet-active {\n  background: var(--gray-alert-message);\n}\n\n.slider__slides[_ngcontent-%COMP%]     .swiper-pagination {\n  position: relative;\n  bottom: 0;\n}\n\n.slider__slides__slide[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%] {\n  width: 95%;\n}\n\n.slider__slides__slide[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]::part(image) {\n  border-radius: 8px;\n}\n\n.slider__slides__slide[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.slider__slides__slide.loading[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%] {\n  width: 0;\n}\n\n.slider__slides__slide.loading[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 3em;\n  margin-bottom: 3em;\n}\n\n.slider[_ngcontent-%COMP%]   .slider-skeleton[_ngcontent-%COMP%] {\n  height: 21.5vh;\n  width: 95%;\n  margin: 0 auto;\n  border-radius: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFHRTtFQUNFLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQUFKOztBQUdFO0VBQ0UsV0FBQTtBQURKOztBQUlFO0VBQ0Usd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBR0EsYUFBQTtBQUZKOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFIRjs7QUFLRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7QUFISjs7QUFRTTtFQUNFLDJDQUFBO0VBQ0EsOEJBQUE7QUFOUjs7QUFTTTtFQUNFLHFDQUFBO0FBUFI7O0FBVU07RUFDRSxrQkFBQTtFQUNBLFNBQUE7QUFSUjs7QUFhTTtFQUNFLFVBQUE7QUFYUjs7QUFZUTtFQUNFLGtCQUFBO0FBVlY7O0FBY007RUFDRSxhQUFBO0FBWlI7O0FBZ0JRO0VBQ0UsUUFBQTtBQWRWOztBQWlCUTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFmVjs7QUFxQkU7RUFDRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQW5CSiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbG9zZV9fYnV0dG9uIHtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbn1cblxuLmNvbnRlbnQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgLS1wYWRkaW5nLWVuZDogOHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiA4MHB4O1xufVxuXG4uYnVzeS1pbmRpY2F0b3Ige1xuICAtLWJvdHRvbTogMzV2aDtcbn1cblxuLm5lcXVpLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuLnRvb2wtbGlzdCB7XG4gICZfX2ltYWdlLWJveCB7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggdmFyKC0tbWVkaWFub2NoZS0xNik7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHBhZGRpbmc6IDRweCA0cHg7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG8gNHB4IGF1dG87XG4gIH1cblxuICAmX19pbWFnZSB7XG4gICAgd2lkdGg6IDMycHg7XG4gIH1cblxuICAmX190aXRsZSB7XG4gICAgY29sb3I6IHZhcigtLW1lZGlhbm9jaGUpO1xuICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcbiAgICBwYWRkaW5nOiAwIDRweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XG4gICAgLW1zLWh5cGhlbnM6IGF1dG87XG4gICAgLW1vei1oeXBoZW5zOiBhdXRvO1xuICAgIGh5cGhlbnM6IGF1dG87XG4gIH1cbn1cblxuLnNsaWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWluLWhlaWdodDogMjAlO1xuXG4gICZfX2J1dHRvbnMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNXB4O1xuICAgIHRvcDogMDtcbiAgfVxuXG4gICZfX3NsaWRlcyB7XG4gICAgOjpuZy1kZWVwIHtcbiAgICAgIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmF5LWFsZXJ0LW1lc3NhZ2UpO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XG4gICAgICB9XG5cbiAgICAgIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZ3JheS1hbGVydC1tZXNzYWdlKTtcbiAgICAgIH1cblxuICAgICAgLnN3aXBlci1wYWdpbmF0aW9uIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJl9fc2xpZGUge1xuICAgICAgaW9uLWltZyB7XG4gICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgICY6OnBhcnQoaW1hZ2UpIHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaW9uLXNwaW5uZXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICAmLmxvYWRpbmcge1xuICAgICAgICBpb24taW1nIHtcbiAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1zcGlubmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzZW07XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogM2VtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnNsaWRlci1za2VsZXRvbiB7XG4gICAgaGVpZ2h0OiAyMS41dmg7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIH1cbn1cbiJdfQ== */"] });
    return HomePage;
}());



/***/ }),

/***/ "9PAS":
/*!*************************************************************************************!*\
  !*** ./libs/features/settings/src/presentation/features-settings-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: FeaturesSettingsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesSettingsRoutingModule", function() { return FeaturesSettingsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



var routes = [];
var FeaturesSettingsRoutingModule = /** @class */ (function () {
    function FeaturesSettingsRoutingModule() {
    }
    FeaturesSettingsRoutingModule.ɵfac = function FeaturesSettingsRoutingModule_Factory(t) { return new (t || FeaturesSettingsRoutingModule)(); };
    FeaturesSettingsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FeaturesSettingsRoutingModule });
    FeaturesSettingsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return FeaturesSettingsRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FeaturesSettingsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "Dfqp":
/*!*************************************************************************!*\
  !*** ./libs/features/closet/src/presentation/pages/home/home.config.ts ***!
  \*************************************************************************/
/*! exports provided: HomeConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeConfig", function() { return HomeConfig; });
/* harmony import */ var _constants_banner_status__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/banner-status */ "tsmQ");

var HomeConfig = Object.freeze({
    coachmarkTools: {
        id: 'closet_coachmark-tools_modal',
        imgPath: 'assets/images/organisms/modals/coachmark-tool.svg',
        cssClass: 'modal--medianoche-90 modal--image-height-auto modal--center_vertical',
    },
    coachmarkMessage: 'closet.coachmark',
    maxViewedCounter: 3,
    changeToolMessages: 'backpack.change-tool',
    defaultBanner: [
        {
            deepLink: '',
            urlImage: 'assets/images/closet/banner_store.svg',
            status: _constants_banner_status__WEBPACK_IMPORTED_MODULE_0__["BannerStatus"].LOADED,
        },
    ],
});


/***/ }),

/***/ "Ebnd":
/*!********************************************************************************************!*\
  !*** ./libs/features/settings/src/presentation/services/tool-list-bottom-sheet.service.ts ***!
  \********************************************************************************************/
/*! exports provided: ToolListBottomSheetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolListBottomSheetService", function() { return ToolListBottomSheetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _organisms_bottom_sheets_tools_list_tool_list_organism__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../organisms/bottom-sheets/tools-list/tool-list.organism */ "lKPi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





var ToolListBottomSheetService = /** @class */ (function () {
    function ToolListBottomSheetService(bottomSheetController) {
        this.bottomSheetController = bottomSheetController;
    }
    ToolListBottomSheetService.prototype.show = function (_a) {
        var title = _a.title, items = _a.items, successMessage = _a.successMessage, toolsIndex = _a.toolsIndex;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var bottomSheet;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        bottomSheet = this.bottomSheetController.create({
                            isAutoHeight: true,
                            component: _organisms_bottom_sheets_tools_list_tool_list_organism__WEBPACK_IMPORTED_MODULE_2__["ToolListBottomSheetOrganism"],
                            componentProps: { title: title, items: items, successMessage: successMessage, toolsIndex: toolsIndex },
                        });
                        return [4 /*yield*/, bottomSheet.open()];
                    case 1:
                        _b.sent();
                        return [2 /*return*/, bottomSheet.onDidDismiss()];
                }
            });
        });
    };
    ToolListBottomSheetService.ɵfac = function ToolListBottomSheetService_Factory(t) { return new (t || ToolListBottomSheetService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_1__["BottomSheetController"])); };
    ToolListBottomSheetService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ToolListBottomSheetService, factory: ToolListBottomSheetService.ɵfac });
    return ToolListBottomSheetService;
}());



/***/ }),

/***/ "L7X/":
/*!*********************************************************************************!*\
  !*** ./libs/features/closet/src/presentation/mappers/get-banner-list.mapper.ts ***!
  \*********************************************************************************/
/*! exports provided: GetBannerListMapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetBannerListMapper", function() { return GetBannerListMapper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _constants_banner_status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/banner-status */ "tsmQ");
/* harmony import */ var _pages_home_home_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/home/home.config */ "Dfqp");




var OLD_APP_DEFAULT_IMAGE_URL = '../images/banner_store.svg';
var GetBannerListMapper = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GetBannerListMapper, _super);
    function GetBannerListMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GetBannerListMapper.prototype.from = function (banner) {
        return {
            deepLink: banner.deepLink,
            urlImage: banner.urlImage === OLD_APP_DEFAULT_IMAGE_URL
                ? _pages_home_home_config__WEBPACK_IMPORTED_MODULE_3__["HomeConfig"].defaultBanner[0].urlImage
                : banner.urlImage,
            status: _constants_banner_status__WEBPACK_IMPORTED_MODULE_2__["BannerStatus"].LOADING,
        };
    };
    return GetBannerListMapper;
}(_nequi_features_commons__WEBPACK_IMPORTED_MODULE_1__["BaseMapper"]));



/***/ }),

/***/ "Qek3":
/*!********************************************************!*\
  !*** ./libs/features/closet/src/presentation/index.ts ***!
  \********************************************************/
/*! exports provided: FeaturesClosetModule, HomePage, ToolType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _features_closet_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./features-closet.module */ "1m3c");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeaturesClosetModule", function() { return _features_closet_module__WEBPACK_IMPORTED_MODULE_0__["FeaturesClosetModule"]; });

/* harmony import */ var _pages_home_home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home/home.page */ "3EK0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return _pages_home_home_page__WEBPACK_IMPORTED_MODULE_1__["HomePage"]; });

/* harmony import */ var _constants_tool_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/tool-types */ "QiGx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToolType", function() { return _constants_tool_types__WEBPACK_IMPORTED_MODULE_2__["ToolType"]; });






/***/ }),

/***/ "QiGx":
/*!***********************************************************************!*\
  !*** ./libs/features/closet/src/presentation/constants/tool-types.ts ***!
  \***********************************************************************/
/*! exports provided: ToolType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolType", function() { return ToolType; });
var ToolType;
(function (ToolType) {
    ToolType["STORE"] = "store";
    ToolType["BACKPACK"] = "backpack";
})(ToolType || (ToolType = {}));


/***/ }),

/***/ "Y0ib":
/*!*****************************************************************************!*\
  !*** ./libs/features/settings/src/presentation/features-settings.module.ts ***!
  \*****************************************************************************/
/*! exports provided: FeaturesSettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesSettingsModule", function() { return FeaturesSettingsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_ui_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/ui/components */ "+vS3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _config_settings_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config/settings.config */ "L7un");
/* harmony import */ var _features_settings_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./features-settings-routing.module */ "9PAS");
/* harmony import */ var _organisms_bottom_sheets_tools_list_tool_list_organism__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./organisms/bottom-sheets/tools-list/tool-list.organism */ "lKPi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










var FeaturesSettingsModule = /** @class */ (function () {
    function FeaturesSettingsModule() {
    }
    FeaturesSettingsModule.ɵfac = function FeaturesSettingsModule_Factory(t) { return new (t || FeaturesSettingsModule)(); };
    FeaturesSettingsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: FeaturesSettingsModule });
    FeaturesSettingsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [
            {
                provide: _nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__["ModuleConfigProvider"],
                useValue: _config_settings_config__WEBPACK_IMPORTED_MODULE_6__["SettingsConfig"],
            },
        ], imports: [[
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
                _features_settings_routing_module__WEBPACK_IMPORTED_MODULE_7__["FeaturesSettingsRoutingModule"],
                _nequi_ui__WEBPACK_IMPORTED_MODULE_3__["NequiUiModule"],
                _nequi_ui_components__WEBPACK_IMPORTED_MODULE_4__["NequiComponentsModule"],
            ]] });
    return FeaturesSettingsModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](FeaturesSettingsModule, { declarations: [_organisms_bottom_sheets_tools_list_tool_list_organism__WEBPACK_IMPORTED_MODULE_8__["ToolListBottomSheetOrganism"]], imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
        _features_settings_routing_module__WEBPACK_IMPORTED_MODULE_7__["FeaturesSettingsRoutingModule"],
        _nequi_ui__WEBPACK_IMPORTED_MODULE_3__["NequiUiModule"],
        _nequi_ui_components__WEBPACK_IMPORTED_MODULE_4__["NequiComponentsModule"]] }); })();


/***/ }),

/***/ "gGMr":
/*!************************************************************************!*\
  !*** ./libs/features/closet/src/presentation/closet-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: ClosetRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClosetRoutingModule", function() { return ClosetRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _config_closet_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/closet.config */ "vppm");
/* harmony import */ var _pages_home_home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.page */ "3EK0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






var routes = [
    {
        path: '',
        component: _pages_home_home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    },
];
var ClosetRoutingModule = /** @class */ (function () {
    function ClosetRoutingModule() {
    }
    ClosetRoutingModule.ɵfac = function ClosetRoutingModule_Factory(t) { return new (t || ClosetRoutingModule)(); };
    ClosetRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ClosetRoutingModule });
    ClosetRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(_nequi_features_commons__WEBPACK_IMPORTED_MODULE_1__["I18nModuleResolver"].setup(routes, [_config_closet_config__WEBPACK_IMPORTED_MODULE_2__["ClosetConfig"].i18n.moduleKey]))], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return ClosetRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ClosetRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "lKPi":
/*!**********************************************************************************************************!*\
  !*** ./libs/features/settings/src/presentation/organisms/bottom-sheets/tools-list/tool-list.organism.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ToolListBottomSheetOrganism */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolListBottomSheetOrganism", function() { return ToolListBottomSheetOrganism; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nequi_features_settings_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/settings/core */ "0nzD");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ui_src_lib_components_tool_card_tool_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../ui/src/lib/components/tool-card/tool-card.component */ "4z4I");










function ToolListBottomSheetOrganism_ion_col_11_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-tool-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToolListBottomSheetOrganism_ion_col_11_Template_app_tool_card_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); var tool_r1 = ctx.$implicit; var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.changeTool($event, tool_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var tool_r1 = ctx.$implicit;
    var i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "backpack-home_dashboard-card-", i_r2, "_button");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("image", tool_r1.images[tool_r1.type])("name", tool_r1.title)("isDisabled", !(tool_r1 == null ? null : tool_r1.moveOptions == null ? null : tool_r1.moveOptions.canMove));
} }
var ToolListBottomSheetOrganism = /** @class */ (function () {
    function ToolListBottomSheetOrganism(bottomSheetController, renderer, toastService, settingInteractor) {
        this.bottomSheetController = bottomSheetController;
        this.renderer = renderer;
        this.toastService = toastService;
        this.settingInteractor = settingInteractor;
    }
    ToolListBottomSheetOrganism.prototype.close = function (update) {
        this.bottomSheetController.dismiss(update);
    };
    ToolListBottomSheetOrganism.prototype.changeTool = function (event, tool) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var backpackToolIndex, closetToolIndex, message;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!tool.moveOptions.canMove) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toastService.showError(tool.moveOptions.closetCanNotMoveMessage)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                    case 2:
                        this.setCssClassName(event);
                        backpackToolIndex = this.toolsIndex.backpack !== undefined ? this.toolsIndex.backpack : tool.index;
                        closetToolIndex = this.toolsIndex.closet !== undefined ? this.toolsIndex.closet : tool.index;
                        this.settingInteractor.updateToolList(backpackToolIndex, closetToolIndex);
                        this.close(true);
                        message = this.successMessage + tool.title;
                        return [4 /*yield*/, this.toastService.showSuccess(message)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ToolListBottomSheetOrganism.prototype.setCssClassName = function (event) {
        var oldSelected = document.querySelector('.tool-list__card-selected');
        if (oldSelected) {
            this.renderer.removeClass(oldSelected, 'tool-list__card-selected');
        }
        this.renderer.addClass(event.currentTarget, 'tool-list__card-selected');
    };
    ToolListBottomSheetOrganism.ɵfac = function ToolListBottomSheetOrganism_Factory(t) { return new (t || ToolListBottomSheetOrganism)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_3__["BottomSheetController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_3__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_settings_core__WEBPACK_IMPORTED_MODULE_2__["SettingInteractor"])); };
    ToolListBottomSheetOrganism.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ToolListBottomSheetOrganism, selectors: [["app-tool-list-bottom-sheet"]], inputs: { title: "title", items: "items", successMessage: "successMessage", toolsIndex: "toolsIndex" }, decls: 12, vars: 2, consts: [[1, "tool-list"], ["slot", "fixed", 1, "ion-no-border"], [1, "tool-list__toolbar"], ["slot", "end"], ["id", "tool-list_close_button", 3, "click"], ["slot", "icon-only", "color", "dark", "name", "close-outline"], [1, "tool-list__content"], ["id", "tool-list_title_label", 1, "nequi-title"], [1, "ion-no-padding"], ["class", "ion-text-center", "size", "3", 4, "ngFor", "ngForOf"], ["size", "3", 1, "ion-text-center"], [1, "tool-list__card", 3, "id", "image", "name", "isDisabled", "click"]], template: function ToolListBottomSheetOrganism_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-header", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-toolbar", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-buttons", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToolListBottomSheetOrganism_Template_ion_button_click_4_listener() { return ctx.close(false); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "ion-icon", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h2", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-grid", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-row");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ToolListBottomSheetOrganism_ion_col_11_Template, 2, 4, "ion-col", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], _ui_src_lib_components_tool_card_tool_card_component__WEBPACK_IMPORTED_MODULE_6__["ToolCardComponent"]], styles: [".tool-list__content[_ngcontent-%COMP%] {\n  padding-bottom: 4px;\n}\n.tool-list__content[_ngcontent-%COMP%]   .nequi-title[_ngcontent-%COMP%] {\n  margin-top: 0;\n  font-size: 1.2em;\n  font-weight: 400;\n  margin-bottom: 8px;\n  margin-left: 16px;\n}\n.tool-list__card[_ngcontent-%COMP%] {\n  --card-content-width: 72px;\n  --card-content-font-size: 0.875rem;\n  --card-content-image-width: 46px;\n  display: inline-flex;\n  padding: 4px 4px;\n}\n.tool-list__card-selected[_ngcontent-%COMP%] {\n  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvdG9vbC1saXN0Lm9yZ2FuaXNtLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxtQkFBQTtBQUFKO0FBRUk7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFBTjtBQUlFO0VBQ0UsMEJBQUE7RUFDQSxrQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQUZKO0FBS0U7RUFDRSw4Q0FBQTtFQUNBLGtCQUFBO0FBSEoiLCJmaWxlIjoidG9vbC1saXN0Lm9yZ2FuaXNtLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbC1saXN0IHtcbiAgJl9fY29udGVudCB7XG4gICAgcGFkZGluZy1ib3R0b206IDRweDtcblxuICAgIC5uZXF1aS10aXRsZSB7XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICB9XG4gIH1cblxuICAmX19jYXJkIHtcbiAgICAtLWNhcmQtY29udGVudC13aWR0aDogNzJweDtcbiAgICAtLWNhcmQtY29udGVudC1mb250LXNpemU6IDAuODc1cmVtO1xuICAgIC0tY2FyZC1jb250ZW50LWltYWdlLXdpZHRoOiA0NnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHBhZGRpbmc6IDRweCA0cHg7XG4gIH1cblxuICAmX19jYXJkLXNlbGVjdGVkIHtcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDVweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgfVxufVxuIl19 */"] });
    return ToolListBottomSheetOrganism;
}());



/***/ }),

/***/ "tsmQ":
/*!**************************************************************************!*\
  !*** ./libs/features/closet/src/presentation/constants/banner-status.ts ***!
  \**************************************************************************/
/*! exports provided: BannerStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerStatus", function() { return BannerStatus; });
var BannerStatus;
(function (BannerStatus) {
    BannerStatus[BannerStatus["LOADING"] = 0] = "LOADING";
    BannerStatus[BannerStatus["LOADED"] = 1] = "LOADED";
})(BannerStatus || (BannerStatus = {}));


/***/ }),

/***/ "uYS2":
/*!**********************************************************!*\
  !*** ./libs/features/settings/src/presentation/index.ts ***!
  \**********************************************************/
/*! exports provided: FeaturesSettingsModule, ToolListBottomSheetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _features_settings_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./features-settings.module */ "Y0ib");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeaturesSettingsModule", function() { return _features_settings_module__WEBPACK_IMPORTED_MODULE_0__["FeaturesSettingsModule"]; });

/* harmony import */ var _services_tool_list_bottom_sheet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/tool-list-bottom-sheet.service */ "Ebnd");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToolListBottomSheetService", function() { return _services_tool_list_bottom_sheet_service__WEBPACK_IMPORTED_MODULE_1__["ToolListBottomSheetService"]; });





/***/ })

}]);
//# sourceMappingURL=default~presentation-admin-admin-module~presentation-backpack-backpack-module~presentation-tab-links~7fa80229.js.map