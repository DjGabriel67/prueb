(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nequi-features-open-banking-presentation"],{

/***/ "DgA0":
/*!*********************************************************************************************!*\
  !*** ./libs/features/open-banking/src/presentation/features-open-banking-routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: FeaturesOpenBankingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesOpenBankingRoutingModule", function() { return FeaturesOpenBankingRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



var routes = [
    {
        path: 'authorization',
        loadChildren: function () { return Promise.all(/*! import() | authorization-pages-authorization-module */[__webpack_require__.e("common"), __webpack_require__.e("authorization-pages-authorization-module")]).then(__webpack_require__.bind(null, /*! ./authorization/pages/authorization.module */ "b/qV")).then(function (m) { return m.AuthorizationModule; }); },
    },
    {
        path: 'permission',
        loadChildren: function () { return __webpack_require__.e(/*! import() | permission-pages-permission-module */ "default~nequi-features-open-banking-presentation-permission~permission-pages-permission-module").then(__webpack_require__.bind(null, /*! ./permission/pages/permission.module */ "LwlF")).then(function (m) { return m.PermissionModule; }); },
    },
];
var FeaturesOpenBankingRoutingModule = /** @class */ (function () {
    function FeaturesOpenBankingRoutingModule() {
    }
    FeaturesOpenBankingRoutingModule.ɵfac = function FeaturesOpenBankingRoutingModule_Factory(t) { return new (t || FeaturesOpenBankingRoutingModule)(); };
    FeaturesOpenBankingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FeaturesOpenBankingRoutingModule });
    FeaturesOpenBankingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return FeaturesOpenBankingRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FeaturesOpenBankingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "Ia79":
/*!**************************************************************!*\
  !*** ./libs/features/open-banking/src/presentation/index.ts ***!
  \**************************************************************/
/*! exports provided: FeaturesOpenBankingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _features_open_banking_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./features-open-banking.module */ "oosC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeaturesOpenBankingModule", function() { return _features_open_banking_module__WEBPACK_IMPORTED_MODULE_0__["FeaturesOpenBankingModule"]; });




/***/ }),

/***/ "oosC":
/*!*************************************************************************************!*\
  !*** ./libs/features/open-banking/src/presentation/features-open-banking.module.ts ***!
  \*************************************************************************************/
/*! exports provided: FeaturesOpenBankingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesOpenBankingModule", function() { return FeaturesOpenBankingModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _config_open_banking_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/open-banking.config */ "lIQC");
/* harmony import */ var _features_open_banking_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features-open-banking-routing.module */ "DgA0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





var FeaturesOpenBankingModule = /** @class */ (function () {
    function FeaturesOpenBankingModule() {
    }
    FeaturesOpenBankingModule.ɵfac = function FeaturesOpenBankingModule_Factory(t) { return new (t || FeaturesOpenBankingModule)(); };
    FeaturesOpenBankingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: FeaturesOpenBankingModule });
    FeaturesOpenBankingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
            {
                provide: _nequi_features_commons__WEBPACK_IMPORTED_MODULE_1__["ModuleConfigProvider"],
                useValue: _config_open_banking_config__WEBPACK_IMPORTED_MODULE_2__["OpenBankingConfig"],
            },
        ], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _features_open_banking_routing_module__WEBPACK_IMPORTED_MODULE_3__["FeaturesOpenBankingRoutingModule"]]] });
    return FeaturesOpenBankingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](FeaturesOpenBankingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _features_open_banking_routing_module__WEBPACK_IMPORTED_MODULE_3__["FeaturesOpenBankingRoutingModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=nequi-features-open-banking-presentation.js.map