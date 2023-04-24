(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["presentation-tab-links-tab-links-module"],{

/***/ "+hTr":
/*!******************************************************************************!*\
  !*** ./libs/apps/base/mobile/src/presentation/tab-links/tab-links.module.ts ***!
  \******************************************************************************/
/*! exports provided: TabLinksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabLinksModule", function() { return TabLinksModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_dynamic_form_presentation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/dynamic-form/presentation */ "yM19");
/* harmony import */ var _nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/money-management/presentation */ "JFCQ");
/* harmony import */ var _nequi_features_movements_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/movements/core */ "K+hB");
/* harmony import */ var _nequi_features_movements_presentation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/features/movements/presentation */ "PLCX");
/* harmony import */ var _nequi_features_style_manager_presentation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/features/style-manager/presentation */ "An21");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _tab_link_backpack_middleware__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tab-link-backpack-middleware */ "9hmy");
/* harmony import */ var _tab_links_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tab-links-routing.module */ "MoBX");
/* harmony import */ var _tab_links_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tab-links.page */ "nS32");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _features_movements_src_presentation_movements_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../features/movements/src/presentation/movements.module */ "yGFR");
















var TabLinksModule = /** @class */ (function () {
    function TabLinksModule() {
    }
    TabLinksModule.ɵfac = function TabLinksModule_Factory(t) { return new (t || TabLinksModule)(); };
    TabLinksModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: TabLinksModule });
    TabLinksModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ providers: [_nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_5__["GoalImageService"]], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _tab_links_routing_module__WEBPACK_IMPORTED_MODULE_12__["TabLinksRoutingModule"],
                _nequi_ui__WEBPACK_IMPORTED_MODULE_9__["NequiUiModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"],
                _nequi_features_dynamic_form_presentation__WEBPACK_IMPORTED_MODULE_4__["DynamicFormModule"],
                _nequi_features_style_manager_presentation__WEBPACK_IMPORTED_MODULE_8__["FeaturesStyleManagerModule"],
                _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__["FeaturesCommonsModule"],
                _nequi_features_movements_presentation__WEBPACK_IMPORTED_MODULE_7__["MovementsModule"].withConfig([
                    {
                        provide: _nequi_features_movements_core__WEBPACK_IMPORTED_MODULE_6__["MovementsInteractor"],
                        deps: [_nequi_features_movements_core__WEBPACK_IMPORTED_MODULE_6__["MovementsRepository"], _nequi_features_movements_core__WEBPACK_IMPORTED_MODULE_6__["TicketRepository"]],
                        useClass: _nequi_features_movements_core__WEBPACK_IMPORTED_MODULE_6__["MovementsInteractor"],
                    },
                    _tab_link_backpack_middleware__WEBPACK_IMPORTED_MODULE_11__["TabLinkBackpackMiddleware"],
                ]),
            ]] });
    return TabLinksModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](TabLinksModule, { declarations: [_tab_links_page__WEBPACK_IMPORTED_MODULE_13__["TabLinksPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
        _tab_links_routing_module__WEBPACK_IMPORTED_MODULE_12__["TabLinksRoutingModule"],
        _nequi_ui__WEBPACK_IMPORTED_MODULE_9__["NequiUiModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"],
        _nequi_features_dynamic_form_presentation__WEBPACK_IMPORTED_MODULE_4__["DynamicFormModule"],
        _nequi_features_style_manager_presentation__WEBPACK_IMPORTED_MODULE_8__["FeaturesStyleManagerModule"],
        _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__["FeaturesCommonsModule"], _features_movements_src_presentation_movements_module__WEBPACK_IMPORTED_MODULE_15__["MovementsModule"]] }); })();


/***/ }),

/***/ "8gIJ":
/*!***********************************************************************************************!*\
  !*** ./libs/features/commons/src/core/analytics/parameters/track-view-clevertap.parameter.ts ***!
  \***********************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "8gdM":
/*!**********************************************************************!*\
  !*** ./libs/features/commons/src/core/analytics/parameters/index.ts ***!
  \**********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _identify_user_third_party_parameter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identify-user-third-party.parameter */ "rWiP");
/* empty/unused harmony star reexport *//* harmony import */ var _track_event_clevertap_parameter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./track-event-clevertap.parameter */ "rDWr");
/* empty/unused harmony star reexport *//* harmony import */ var _track_event_facebook_parameter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./track-event-facebook.parameter */ "LNFH");
/* empty/unused harmony star reexport *//* harmony import */ var _track_event_firebase_parameter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./track-event-firebase.parameter */ "do9/");
/* empty/unused harmony star reexport *//* harmony import */ var _track_event_dynatrace_parameter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./track-event-dynatrace.parameter */ "KyfU");
/* empty/unused harmony star reexport *//* harmony import */ var _track_view_clevertap_parameter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./track-view-clevertap.parameter */ "8gIJ");
/* empty/unused harmony star reexport *//* harmony import */ var _track_view_facebook_parameter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./track-view-facebook.parameter */ "WuN4");
/* empty/unused harmony star reexport *//* harmony import */ var _track_view_firebase_parameter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./track-view-firebase.parameter */ "s3r3");
/* empty/unused harmony star reexport *//* harmony import */ var _track_view_dynatrace_parameter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./track-view-dynatrace.parameter */ "Ah94");
/* empty/unused harmony star reexport *//* harmony import */ var _track_error_dynatrace_parameter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./track-error-dynatrace.parameter */ "ei1f");
/* empty/unused harmony star reexport */











/***/ }),

/***/ "9hmy":
/*!******************************************************************************************!*\
  !*** ./libs/apps/base/mobile/src/presentation/tab-links/tab-link-backpack-middleware.ts ***!
  \******************************************************************************************/
/*! exports provided: TabLinkBackpackMiddleware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabLinkBackpackMiddleware", function() { return TabLinkBackpackMiddleware; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_style_manager_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/style-manager/core */ "vpn+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");








var TabLinkBackpackMiddleware = /** @class */ (function () {
    function TabLinkBackpackMiddleware(router, sessionProvider, navigatorProvider) {
        this.router = router;
        this.sessionProvider = sessionProvider;
        this.navigatorProvider = navigatorProvider;
    }
    TabLinkBackpackMiddleware.prototype.canActivate = function (_route, _state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (this.sessionProvider.contingencyType === _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__["ContingencyType"].FINACLE) {
                    this.navigatorProvider.navigateForward("/admin/" + _nequi_features_style_manager_core__WEBPACK_IMPORTED_MODULE_4__["ResourceId"].BACKPACK_CONTINGENCY);
                }
                return [2 /*return*/, true];
            });
        });
    };
    TabLinkBackpackMiddleware.ɵfac = function TabLinkBackpackMiddleware_Factory(t) { return new (t || TabLinkBackpackMiddleware)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__["SessionProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__["NavigatorProvider"])); };
    TabLinkBackpackMiddleware.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: TabLinkBackpackMiddleware, factory: TabLinkBackpackMiddleware.ɵfac });
    return TabLinkBackpackMiddleware;
}());



/***/ }),

/***/ "Ah94":
/*!***********************************************************************************************!*\
  !*** ./libs/features/commons/src/core/analytics/parameters/track-view-dynatrace.parameter.ts ***!
  \***********************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "KyfU":
/*!************************************************************************************************!*\
  !*** ./libs/features/commons/src/core/analytics/parameters/track-event-dynatrace.parameter.ts ***!
  \************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "LNFH":
/*!***********************************************************************************************!*\
  !*** ./libs/features/commons/src/core/analytics/parameters/track-event-facebook.parameter.ts ***!
  \***********************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "MoBX":
/*!**************************************************************************************!*\
  !*** ./libs/apps/base/mobile/src/presentation/tab-links/tab-links-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: TabLinksRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabLinksRoutingModule", function() { return TabLinksRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_movements_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/movements/core */ "K+hB");
/* harmony import */ var _nequi_features_style_manager_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/style-manager/core */ "vpn+");
/* harmony import */ var _backpack_contingency_contingency_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../backpack/contingency/contingency.page */ "NCpI");
/* harmony import */ var _backpack_home_home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../backpack/home/home.page */ "LAgr");
/* harmony import */ var _tab_link_backpack_middleware__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab-link-backpack-middleware */ "9hmy");
/* harmony import */ var _tab_links_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab-links.page */ "nS32");
/* harmony import */ var _tabs_links_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tabs-links.config */ "Yj9a");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");











var routes = [
    {
        path: '',
        component: _tab_links_page__WEBPACK_IMPORTED_MODULE_7__["TabLinksPage"],
        children: [
            {
                path: _nequi_features_style_manager_core__WEBPACK_IMPORTED_MODULE_3__["ResourceId"].BACKPACK,
                component: _backpack_home_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"],
                canActivate: [_tab_link_backpack_middleware__WEBPACK_IMPORTED_MODULE_6__["TabLinkBackpackMiddleware"]],
            },
            {
                path: _nequi_features_style_manager_core__WEBPACK_IMPORTED_MODULE_3__["ResourceId"].BACKPACK_CONTINGENCY,
                component: _backpack_contingency_contingency_page__WEBPACK_IMPORTED_MODULE_4__["ContingencyPage"],
            },
            {
                path: _nequi_features_style_manager_core__WEBPACK_IMPORTED_MODULE_3__["ResourceId"].CLOSET,
                loadChildren: function () {
                    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @nequi/features/closet/presentation */ "Qek3")).then(function (m) { return m.FeaturesClosetModule; });
                },
            },
            {
                path: _nequi_features_style_manager_core__WEBPACK_IMPORTED_MODULE_3__["ResourceId"].MOVEMENTS,
                loadChildren: function () {
                    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @nequi/features/movements/presentation */ "PLCX")).then(function (m) {
                        return new _nequi_features_commons__WEBPACK_IMPORTED_MODULE_1__["ModuleWithProvidersFactory"](m.MovementsModule.withConfig([
                            {
                                provide: _nequi_features_movements_core__WEBPACK_IMPORTED_MODULE_2__["MovementsInteractor"],
                                deps: [_nequi_features_movements_core__WEBPACK_IMPORTED_MODULE_2__["MovementsRepository"], _nequi_features_movements_core__WEBPACK_IMPORTED_MODULE_2__["TicketRepository"]],
                                useClass: _nequi_features_movements_core__WEBPACK_IMPORTED_MODULE_2__["MovementsInteractor"],
                            },
                        ]));
                    });
                },
            },
            { path: 'closet', redirectTo: _nequi_features_style_manager_core__WEBPACK_IMPORTED_MODULE_3__["ResourceId"].CLOSET },
            { path: 'closet/', redirectTo: _nequi_features_style_manager_core__WEBPACK_IMPORTED_MODULE_3__["ResourceId"].CLOSET },
            {
                path: '',
                redirectTo: _nequi_features_style_manager_core__WEBPACK_IMPORTED_MODULE_3__["ResourceId"].BACKPACK,
                pathMatch: 'full',
            },
        ],
    },
    {
        path: '',
        redirectTo: _nequi_features_style_manager_core__WEBPACK_IMPORTED_MODULE_3__["ResourceId"].BACKPACK,
        pathMatch: 'full',
    },
];
var TabLinksRoutingModule = /** @class */ (function () {
    function TabLinksRoutingModule() {
    }
    TabLinksRoutingModule.ɵfac = function TabLinksRoutingModule_Factory(t) { return new (t || TabLinksRoutingModule)(); };
    TabLinksRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: TabLinksRoutingModule });
    TabLinksRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(_nequi_features_commons__WEBPACK_IMPORTED_MODULE_1__["I18nModuleResolver"].setup(routes, [
                    _tabs_links_config__WEBPACK_IMPORTED_MODULE_8__["TabLinksConfig"].i18n.backpack,
                    _tabs_links_config__WEBPACK_IMPORTED_MODULE_8__["TabLinksConfig"].i18n.profile,
                    _tabs_links_config__WEBPACK_IMPORTED_MODULE_8__["TabLinksConfig"].i18n.moneyManagement,
                    _tabs_links_config__WEBPACK_IMPORTED_MODULE_8__["TabLinksConfig"].i18n.contacts,
                ])),
            ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return TabLinksRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](TabLinksRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "WuN4":
/*!**********************************************************************************************!*\
  !*** ./libs/features/commons/src/core/analytics/parameters/track-view-facebook.parameter.ts ***!
  \**********************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "Yj9a":
/*!*******************************************************************************!*\
  !*** ./libs/apps/base/mobile/src/presentation/tab-links/tabs-links.config.ts ***!
  \*******************************************************************************/
/*! exports provided: TabLinksConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabLinksConfig", function() { return TabLinksConfig; });
var TabLinksConfig = Object.freeze({
    analytics: {
        events: {
            intentionOfIngress: {
                name: 'Servicios_intencion_ingreso',
                params: {
                    cleverTap: ['Fecha_intencion'],
                },
            },
        },
    },
    i18n: {
        backpack: 'backpack',
        profile: 'profile',
        moneyManagement: 'money-management',
        contacts: 'contacts',
    },
});


/***/ }),

/***/ "a2Bh":
/*!***********************************************************!*\
  !*** ./libs/features/commons/src/core/analytics/index.ts ***!
  \***********************************************************/
/*! exports provided: AnalyticsThirdPartyInteractor, AnalyticsInteractor, AnalyticsThirdPartyRepository, AnalyticInitializeRepository, AnalyticTrackRepository, AnalyticsType, AnalyticsErrorType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parameters */ "8gdM");
/* empty/unused harmony star reexport *//* harmony import */ var _analytics_third_party_interactor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./analytics-third-party.interactor */ "o8C8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnalyticsThirdPartyInteractor", function() { return _analytics_third_party_interactor__WEBPACK_IMPORTED_MODULE_1__["AnalyticsThirdPartyInteractor"]; });

/* harmony import */ var _analytics_interactor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./analytics.interactor */ "g+3S");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnalyticsInteractor", function() { return _analytics_interactor__WEBPACK_IMPORTED_MODULE_2__["AnalyticsInteractor"]; });

/* harmony import */ var _repositories_analytics_third_party_repository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./repositories/analytics-third-party.repository */ "cfIf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnalyticsThirdPartyRepository", function() { return _repositories_analytics_third_party_repository__WEBPACK_IMPORTED_MODULE_3__["AnalyticsThirdPartyRepository"]; });

/* harmony import */ var _repositories_analytics_repository__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./repositories/analytics.repository */ "AkxC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnalyticInitializeRepository", function() { return _repositories_analytics_repository__WEBPACK_IMPORTED_MODULE_4__["AnalyticInitializeRepository"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnalyticTrackRepository", function() { return _repositories_analytics_repository__WEBPACK_IMPORTED_MODULE_4__["AnalyticTrackRepository"]; });

/* harmony import */ var _entities_analytics_entity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./entities/analytics.entity */ "v+cq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnalyticsType", function() { return _entities_analytics_entity__WEBPACK_IMPORTED_MODULE_5__["AnalyticsType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnalyticsErrorType", function() { return _entities_analytics_entity__WEBPACK_IMPORTED_MODULE_5__["AnalyticsErrorType"]; });









/***/ }),

/***/ "do9/":
/*!***********************************************************************************************!*\
  !*** ./libs/features/commons/src/core/analytics/parameters/track-event-firebase.parameter.ts ***!
  \***********************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "ei1f":
/*!************************************************************************************************!*\
  !*** ./libs/features/commons/src/core/analytics/parameters/track-error-dynatrace.parameter.ts ***!
  \************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "nS32":
/*!****************************************************************************!*\
  !*** ./libs/apps/base/mobile/src/presentation/tab-links/tab-links.page.ts ***!
  \****************************************************************************/
/*! exports provided: TabLinksPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabLinksPage", function() { return TabLinksPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _config_i18n_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @config/i18n.config */ "b+ZT");
/* harmony import */ var _tabs_links_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-links.config */ "Yj9a");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nequi/features/money-management/presentation */ "JFCQ");
/* harmony import */ var _nequi_features_style_manager_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nequi/features/style-manager/core */ "vpn+");
/* harmony import */ var _nequi_features_style_manager_presentation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nequi/features/style-manager/presentation */ "An21");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_core_analytics__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @nequi/features/commons/core/analytics */ "a2Bh");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _nequi_utils_date__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @nequi/utils/date */ "tGfC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _features_style_manager_src_presentation_directives_styles_from_resource_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../features/style-manager/src/presentation/directives/styles-from-resource.directive */ "3kMd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");



























function TabLinksPage_ion_tab_button_3_ion_skeleton_text_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ion-skeleton-text", 11);
} }
function TabLinksPage_ion_tab_button_3_ion_skeleton_text_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ion-skeleton-text", 12);
} }
function TabLinksPage_ion_tab_button_3_ion_label_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "tab-links_tab-", item_r2.id, "_label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, item_r2.name), " ");
} }
var _c0 = function (a0) { return { "tab-links--loading": a0 }; };
function TabLinksPage_ion_tab_button_3_Template(rf, ctx) { if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-tab-button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "section", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TabLinksPage_ion_tab_button_3_ion_skeleton_text_2_Template, 1, 0, "ion-skeleton-text", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, TabLinksPage_ion_tab_button_3_ion_skeleton_text_3_Template, 1, 0, "ion-skeleton-text", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ionError", function TabLinksPage_ion_tab_button_3_Template_ion_img_ionError_4_listener() { var item_r2 = ctx.$implicit; return item_r2.iconSelected = item_r2.defaultIconSelected; })("ionImgDidLoad", function TabLinksPage_ion_tab_button_3_Template_ion_img_ionImgDidLoad_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); var idx_r3 = ctx.index; var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.updateLoadingStatus(idx_r3, false); })("ionImgWillLoad", function TabLinksPage_ion_tab_button_3_Template_ion_img_ionImgWillLoad_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); var idx_r3 = ctx.index; var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.updateLoadingStatus(idx_r3, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ionError", function TabLinksPage_ion_tab_button_3_Template_ion_img_ionError_5_listener() { var item_r2 = ctx.$implicit; return item_r2.icon = item_r2.defaultIcon; })("ionImgDidLoad", function TabLinksPage_ion_tab_button_3_Template_ion_img_ionImgDidLoad_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); var idx_r3 = ctx.index; var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.updateLoadingStatus(idx_r3, false); })("ionImgWillLoad", function TabLinksPage_ion_tab_button_3_Template_ion_img_ionImgWillLoad_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); var idx_r3 = ctx.index; var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.updateLoadingStatus(idx_r3, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, TabLinksPage_ion_tab_button_3_ion_label_6_Template, 3, 4, "ion-label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r2 = ctx.$implicit;
    var idx_r3 = ctx.index;
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "tab-links_tab-", item_r2.id, "_button");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tab", item_r2.id)("disabled", item_r2.disabled)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](11, _c0, ctx_r1.iconLoading[idx_r3]));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.iconLoading[idx_r3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.iconLoading[idx_r3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "tab-links_tab-", item_r2.id, "-selected_icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", item_r2.iconSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "tab-links_tab-", item_r2.id, "_icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", item_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.iconLoading[idx_r3]);
} }
var TabLinksPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TabLinksPage, _super);
    function TabLinksPage(translateProvider, styleManagerService, alertService, authProvider, injector, useMoneyStatusService, appOptionsProvider, router, analyticsInteractor) {
        var _this = _super.call(this, injector) || this;
        _this.translateProvider = translateProvider;
        _this.styleManagerService = styleManagerService;
        _this.alertService = alertService;
        _this.authProvider = authProvider;
        _this.useMoneyStatusService = useMoneyStatusService;
        _this.appOptionsProvider = appOptionsProvider;
        _this.router = router;
        _this.analyticsInteractor = analyticsInteractor;
        _this.translateProvider.loadModule(_config_i18n_config__WEBPACK_IMPORTED_MODULE_4__["I18nConfig"].modules.BACKPACK);
        _this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]; }))
            .subscribe(function (event) {
            _this.showHideTabs(event);
        });
        return _this;
    }
    Object.defineProperty(TabLinksPage.prototype, "selectedTabIndex", {
        get: function () {
            var _this = this;
            var _a;
            if (this.tabItems.length === 0 || !this.tabBar || !((_a = this.tabBar) === null || _a === void 0 ? void 0 : _a.selectedTab)) {
                return;
            }
            return this.tabItems.findIndex(function (tab) { return tab.id === _this.tabBar.selectedTab; });
        },
        enumerable: false,
        configurable: true
    });
    TabLinksPage.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.resourceId = _nequi_features_style_manager_core__WEBPACK_IMPORTED_MODULE_10__["ResourceId"].BAR;
                this.useMoneyStatusService.subscribe(function (status) { return _this.updateTabsClass(status); });
                this.tabItems = this.appOptionsProvider.getTabs();
                this.iconLoading = new Array(this.tabItems.length);
                this.loadIcons();
                return [2 /*return*/];
            });
        });
    };
    TabLinksPage.prototype.ngOnDestroy = function () {
        this.useMoneyStatusService.unsubscribe();
    };
    TabLinksPage.prototype.goBack = function () {
        var _this = this;
        this.alertService.show({
            messages: {
                header: '¿Estas seguro que quieres salir de Nequi?',
                message: 'Es mejor que cierres tu sesión cuando no estés usando Nequi',
                buttons: {
                    accept: 'Acepta',
                    cancel: 'Cancela',
                },
            },
            handlers: {
                accept: function () { return _this.authProvider.signOut(); },
            },
        });
    };
    TabLinksPage.prototype.tabChange = function (tabsRef) {
        this.activeTab = tabsRef.outlet.activatedView.element;
        if (this.tabBar.selectedTab === _nequi_features_style_manager_core__WEBPACK_IMPORTED_MODULE_10__["ResourceId"].CLOSET) {
            this.setAnalyticsIngressIntention();
        }
    };
    TabLinksPage.prototype.ionViewWillLeave = function () {
        _super.prototype.ionViewWillLeave.call(this);
        this.propagateToActiveTab('ionViewWillLeave');
    };
    TabLinksPage.prototype.ionViewDidLeave = function () {
        this.propagateToActiveTab('ionViewDidLeave');
    };
    TabLinksPage.prototype.ionViewWillEnter = function () {
        this.propagateToActiveTab('ionViewWillEnter');
    };
    TabLinksPage.prototype.ionViewDidEnter = function () {
        _super.prototype.ionViewDidEnter.call(this);
        this.propagateToActiveTab('ionViewDidEnter');
    };
    TabLinksPage.prototype.updateLoadingStatus = function (tabIndex, value) {
        this.iconLoading[tabIndex] = value;
    };
    TabLinksPage.prototype.setAnalyticsIngressIntention = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.analyticsInteractor.trackEvent({
                    type: _nequi_features_commons_core_analytics__WEBPACK_IMPORTED_MODULE_13__["AnalyticsType"].FACEBOOK,
                    params: {
                        eventName: _tabs_links_config__WEBPACK_IMPORTED_MODULE_5__["TabLinksConfig"].analytics.events.intentionOfIngress.name,
                    },
                });
                this.analyticsInteractor.trackEvent({
                    type: _nequi_features_commons_core_analytics__WEBPACK_IMPORTED_MODULE_13__["AnalyticsType"].FIREBASE,
                    params: { eventName: _tabs_links_config__WEBPACK_IMPORTED_MODULE_5__["TabLinksConfig"].analytics.events.intentionOfIngress.name },
                });
                this.analyticsInteractor.trackEvent({
                    type: _nequi_features_commons_core_analytics__WEBPACK_IMPORTED_MODULE_13__["AnalyticsType"].CLEVERTAP,
                    params: {
                        eventName: _tabs_links_config__WEBPACK_IMPORTED_MODULE_5__["TabLinksConfig"].analytics.events.intentionOfIngress.name,
                        eventProps: Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_14__["stringsArrayToObjectWithValues"])(_tabs_links_config__WEBPACK_IMPORTED_MODULE_5__["TabLinksConfig"].analytics.events.intentionOfIngress.params.cleverTap, [Object(_nequi_utils_date__WEBPACK_IMPORTED_MODULE_15__["getFormattedDateTimes"])()]),
                    },
                });
                return [2 /*return*/];
            });
        });
    };
    TabLinksPage.prototype.propagateToActiveTab = function (eventName) {
        if (this.activeTab) {
            this.activeTab.dispatchEvent(new CustomEvent(eventName));
        }
    };
    TabLinksPage.prototype.loadIcons = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var DEFAULT_ICON, icons;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        DEFAULT_ICON = 'dashboard';
                        return [4 /*yield*/, this.styleManagerService.getIcons(this.resourceId)];
                    case 1:
                        icons = _a.sent();
                        this.tabItems.forEach(function (tabItem) {
                            var _a;
                            tabItem.setIcon((_a = icons[tabItem.id]) !== null && _a !== void 0 ? _a : icons[DEFAULT_ICON]);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    TabLinksPage.prototype.updateTabsClass = function (status) {
        this.tabClass = status === _nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_9__["UseMoneyStatus"].OPENED ? 'hidden' : '';
    };
    TabLinksPage.prototype.showHideTabs = function (event) {
        var _a;
        var urlSplitted = (_a = event === null || event === void 0 ? void 0 : event.url) === null || _a === void 0 ? void 0 : _a.split('/').filter(function (segment) { return segment.length > 0; });
        var fullPageUrl = urlSplitted[urlSplitted.length - 1];
        var pageUrl = fullPageUrl === null || fullPageUrl === void 0 ? void 0 : fullPageUrl.split('?')[0];
        var CLOSET = 'closet';
        var showTabBarPages = [
            _nequi_features_style_manager_core__WEBPACK_IMPORTED_MODULE_10__["ResourceId"].ADMIN,
            _nequi_features_style_manager_core__WEBPACK_IMPORTED_MODULE_10__["ResourceId"].BACKPACK,
            _nequi_features_style_manager_core__WEBPACK_IMPORTED_MODULE_10__["ResourceId"].BACKPACK_CONTINGENCY,
            _nequi_features_style_manager_core__WEBPACK_IMPORTED_MODULE_10__["ResourceId"].CLOSET,
            _nequi_features_style_manager_core__WEBPACK_IMPORTED_MODULE_10__["ResourceId"].MOVEMENTS,
            CLOSET,
        ];
        this.tabClass = showTabBarPages.indexOf(pageUrl) >= 0 ? '' : 'hidden';
    };
    TabLinksPage.ɵfac = function TabLinksPage_Factory(t) { return new (t || TabLinksPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_8__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_style_manager_presentation__WEBPACK_IMPORTED_MODULE_11__["StyleManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_7__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_8__["AuthProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_9__["UseMoneyStatusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_8__["AppOptionsProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_12__["AnalyticsInteractor"])); };
    TabLinksPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TabLinksPage, selectors: [["app-tab-links"]], viewQuery: function TabLinksPage_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonTabBar"], 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonTabs"], 1);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.tabBar = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.tabs = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 4, consts: [[3, "ionTabsDidChange"], ["tabs", ""], ["slot", "bottom", 3, "selectedTab", "ngClass", "nequiStylesFromResource"], [3, "tab", "id", "disabled", "ngClass", 4, "ngFor", "ngForOf"], [3, "tab", "id", "disabled", "ngClass"], [1, "tab-section"], ["animated", "", "class", "image--loading", 4, "ngIf"], ["animated", "", "class", "label--loading", 4, "ngIf"], [1, "tab-icon", "tab-icon--selected", 3, "id", "src", "ionError", "ionImgDidLoad", "ionImgWillLoad"], [1, "tab-icon", 3, "id", "src", "ionError", "ionImgDidLoad", "ionImgWillLoad"], ["class", "tab-label", 3, "id", 4, "ngIf"], ["animated", "", 1, "image--loading"], ["animated", "", 1, "label--loading"], [1, "tab-label", 3, "id"]], template: function TabLinksPage_Template(rf, ctx) { if (rf & 1) {
            var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-tabs", 0, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ionTabsDidChange", function TabLinksPage_Template_ion_tabs_ionTabsDidChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1); return ctx.tabChange(_r0); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-tab-bar", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, TabLinksPage_ion_tab_button_3_Template, 7, 13, "ion-tab-button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("selectedTab", ctx.tabItems[0].id)("ngClass", ctx.tabClass)("nequiStylesFromResource", ctx.resourceId);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.tabItems);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonTabs"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonTabBar"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgClass"], _features_style_manager_src_presentation_directives_styles_from_resource_directive__WEBPACK_IMPORTED_MODULE_17__["StylesFromResourceDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonTabButton"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonImg"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonSkeletonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonLabel"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["TranslatePipe"]], styles: ["[_nghost-%COMP%]     .tabs-inner {\n  position: unset !important;\n  contain: size style !important;\n}\n\nion-tab-bar[_ngcontent-%COMP%] {\n  --border: 0;\n  width: 90%;\n  border-radius: 100px;\n  height: 56px;\n  margin: 16px auto;\n  padding: 0 4px;\n  box-shadow: 0px 8px 24px rgba(112, 144, 176, 0.3);\n}\n\nion-tab-bar.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n\nion-tab-button[_ngcontent-%COMP%] {\n  --color: var(--medianoche);\n  --color-selected: var(--tab-selected);\n  display: inline;\n  background: transparent;\n  height: 48px;\n  flex: 0 1 40%;\n}\n\nion-tab-button.tab-disabled[_ngcontent-%COMP%] {\n  opacity: 0.2;\n}\n\nion-tab-button.tab-selected[_ngcontent-%COMP%] {\n  transition: 0.3s;\n  --color: var(--medianoche);\n  background: var(--tab-selected);\n  border-radius: 24px;\n}\n\nion-tab-button.tab-selected[_ngcontent-%COMP%]   .tab-icon[_ngcontent-%COMP%] {\n  display: none;\n}\n\nion-tab-button.tab-selected[_ngcontent-%COMP%]   .tab-icon--selected[_ngcontent-%COMP%] {\n  display: inline;\n}\n\nion-tab-button.tab-selected[_ngcontent-%COMP%]   .tab-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--medianoche-80);\n}\n\nion-tab-button.tab-links--loading[_ngcontent-%COMP%]   .tab-icon[_ngcontent-%COMP%] {\n  visibility: hidden;\n  position: fixed;\n}\n\n.tab-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n\n.tab-icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n\n.tab-icon--selected[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.tab-label[_ngcontent-%COMP%] {\n  display: inline;\n  color: var(--medianoche);\n  font-size: 0.75rem;\n  font-weight: 400;\n}\n\n.image--loading[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  --border-radius: 6px;\n  margin-bottom: 0;\n}\n\n.label--loading[_ngcontent-%COMP%] {\n  width: 69px;\n  height: 12px;\n  --border-radius: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvdGFiLWxpbmtzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaURBQUE7QUFDRjs7QUFDRTtFQUNFLGFBQUE7QUFDSjs7QUFHQTtFQUNFLDBCQUFBO0VBQ0EscUNBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUFGOztBQUVFO0VBQ0UsWUFBQTtBQUFKOztBQUdFO0VBQ0UsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFHSTtFQUNFLGFBQUE7QUFETjs7QUFHTTtFQUNFLGVBQUE7QUFEUjs7QUFLSTtFQUNFLGdCQUFBO0VBQ0EsMkJBQUE7QUFITjs7QUFRSTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQU5OOztBQVdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFSRjs7QUFXQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBUkY7O0FBVUU7RUFDRSxhQUFBO0FBUko7O0FBWUE7RUFDRSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBVEY7O0FBWUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUFURjs7QUFZQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFURiIsImZpbGUiOiJ0YWItbGlua3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC50YWJzLWlubmVyIHtcbiAgcG9zaXRpb246IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGNvbnRhaW46IHNpemUgc3R5bGUgIWltcG9ydGFudDtcbn1cblxuaW9uLXRhYi1iYXIge1xuICAtLWJvcmRlcjogMDtcbiAgd2lkdGg6IDkwJTtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGhlaWdodDogNTZweDtcbiAgbWFyZ2luOiAxNnB4IGF1dG87XG4gIHBhZGRpbmc6IDAgNHB4O1xuICBib3gtc2hhZG93OiAwcHggOHB4IDI0cHggcmdiYSgxMTIsIDE0NCwgMTc2LCAwLjMpO1xuXG4gICYuaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbmlvbi10YWItYnV0dG9uIHtcbiAgLS1jb2xvcjogdmFyKC0tbWVkaWFub2NoZSk7XG4gIC0tY29sb3Itc2VsZWN0ZWQ6IHZhcigtLXRhYi1zZWxlY3RlZCk7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGhlaWdodDogNDhweDtcbiAgZmxleDogMCAxIDQwJTtcblxuICAmLnRhYi1kaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC4yO1xuICB9XG5cbiAgJi50YWItc2VsZWN0ZWQge1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgLS1jb2xvcjogdmFyKC0tbWVkaWFub2NoZSk7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tdGFiLXNlbGVjdGVkKTtcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuXG4gICAgLnRhYi1pY29uIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG5cbiAgICAgICYtLXNlbGVjdGVkIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgfVxuICAgIH1cblxuICAgIC50YWItbGFiZWwge1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS1tZWRpYW5vY2hlLTgwKTtcbiAgICB9XG4gIH1cblxuICAmLnRhYi1saW5rcy0tbG9hZGluZyB7XG4gICAgLnRhYi1pY29uIHtcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB9XG4gIH1cbn1cblxuLnRhYi1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnRhYi1pY29uIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcblxuICAmLS1zZWxlY3RlZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4udGFiLWxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBjb2xvcjogdmFyKC0tbWVkaWFub2NoZSk7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmltYWdlLS1sb2FkaW5nIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA2cHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5sYWJlbC0tbG9hZGluZyB7XG4gIHdpZHRoOiA2OXB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIC0tYm9yZGVyLXJhZGl1czogNnB4O1xufVxuIl19 */"] });
    return TabLinksPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_7__["FeatureBasePage"]));



/***/ }),

/***/ "rDWr":
/*!************************************************************************************************!*\
  !*** ./libs/features/commons/src/core/analytics/parameters/track-event-clevertap.parameter.ts ***!
  \************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "s3r3":
/*!**********************************************************************************************!*\
  !*** ./libs/features/commons/src/core/analytics/parameters/track-view-firebase.parameter.ts ***!
  \**********************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ })

}]);
//# sourceMappingURL=presentation-tab-links-tab-links-module.js.map