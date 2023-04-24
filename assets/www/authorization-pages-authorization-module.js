(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authorization-pages-authorization-module"],{

/***/ "78Oh":
/*!*********************************************************************************************!*\
  !*** ./libs/features/open-banking/src/presentation/authorization/pages/home/home.config.ts ***!
  \*********************************************************************************************/
/*! exports provided: HomeConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeConfig", function() { return HomeConfig; });
var HomeConfig = Object.freeze({
    bottomSheet: {
        cssClass: 'first-time-message--icon-authorization',
        button: {
            fill: 'outline',
            color: 'guayaba',
        },
    },
    routes: {
        closet: '/admin/closet/',
        authorizationTerms: '/admin/open-banking/authorization/terms',
    },
});


/***/ }),

/***/ "9jt3":
/*!***********************************************************************************************!*\
  !*** ./libs/features/open-banking/src/presentation/authorization/pages/terms/terms.config.ts ***!
  \***********************************************************************************************/
/*! exports provided: TermsConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsConfig", function() { return TermsConfig; });
var TermsConfig = Object.freeze({
    i18n: {
        alerts: {
            error: 'open-banking.alerts.error',
        },
    },
    routes: {
        closet: '/admin/closet/',
        authorizationPermissions: '/admin/open-banking/authorization/permissions',
    },
});


/***/ }),

/***/ "Frve":
/*!*******************************************************************************************!*\
  !*** ./libs/features/open-banking/src/presentation/authorization/pages/home/home.page.ts ***!
  \*******************************************************************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _view_models_authorization_user_view_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../view-models/authorization-user.view-model */ "mWeS");
/* harmony import */ var _services_authorization_card_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/authorization-card-modal.service */ "hFhZ");
/* harmony import */ var _home_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home.config */ "78Oh");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ui_src_lib_pipes_trust_html_trust_html_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../ui/src/lib/pipes/trust-html/trust-html.pipe */ "FKD1");

















function HomePage_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-row", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-col", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "ion-text", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "trustHTML");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 2, item_r1.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 6, item_r1.content)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
var HomePage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HomePage, _super);
    function HomePage(injector, authorizationUserViewModel, authorizationCardModalService, loadingService, translateProvider, moduleConfigProvider) {
        var _this = _super.call(this, injector) || this;
        _this.authorizationUserViewModel = authorizationUserViewModel;
        _this.authorizationCardModalService = authorizationCardModalService;
        _this.loadingService = loadingService;
        _this.translateProvider = translateProvider;
        _this.moduleConfigProvider = moduleConfigProvider;
        _this.translateProvider.loadModule(_this.moduleConfigProvider.i18n.moduleKey);
        return _this;
    }
    HomePage.prototype.ngOnInit = function () {
        if (!this.authorizationUserViewModel.shouldShowInformation) {
            this.validateApp();
        }
    };
    HomePage.prototype.goBack = function () {
        this.navController.navigateForward(_home_config__WEBPACK_IMPORTED_MODULE_7__["HomeConfig"].routes.closet);
    };
    HomePage.prototype.validateApp = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var shouldOpenApp;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingService.show()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.authorizationCardModalService.openApp()];
                    case 2:
                        shouldOpenApp = _a.sent();
                        if (!shouldOpenApp) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.authorizationCardModalService.goToApp()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.loadingService.hideWithoutFeedback()];
                    case 4:
                        _a.sent();
                        this.navController.navigateForward(_home_config__WEBPACK_IMPORTED_MODULE_7__["HomeConfig"].routes.closet);
                        return [3 /*break*/, 9];
                    case 5:
                        if (!this.authorizationUserViewModel.shouldShowTerms) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.loadingService.hideWithoutFeedback()];
                    case 6:
                        _a.sent();
                        this.navController.navigateForward(_home_config__WEBPACK_IMPORTED_MODULE_7__["HomeConfig"].routes.authorizationTerms);
                        return [3 /*break*/, 9];
                    case 7: return [4 /*yield*/, this.loadingService.hide(false)];
                    case 8:
                        _a.sent();
                        _a.label = 9;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.ɵfac = function HomePage_Factory(t) { return new (t || HomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_view_models_authorization_user_view_model__WEBPACK_IMPORTED_MODULE_5__["AuthorizationUserViewModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_authorization_card_modal_service__WEBPACK_IMPORTED_MODULE_6__["AuthorizationCardModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__["ModuleConfigProvider"])); };
    HomePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomePage, selectors: [["app-home"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 16, vars: 6, consts: [[1, "nequi-header"], ["slot", "start"], ["id", "authorization_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], ["fullscreen", "true", 1, "ion-content--enroll", "ion-padding-horizontal", "content"], [1, "nequi-title", "content__title"], [4, "ngFor", "ngForOf"], [1, "nequi-footer", 3, "hidden"], ["id", "authorization_go-to-terms_button", "shape", "round", "color", "guayaba", "expand", "block", "type", "submit", 1, "nequi-footer__button", 3, "click"], [1, "ion-margin-bottom", "ion-border-bottom"], [1, "ion-padding-bottom"], ["lines", "none", 1, "ion-no-margin", "ion-no-padding", "info-list__item"], [1, "ion-no-margin", "info-list__title", "margin-bottom-16"], [1, "ion-no-margin", "info-list__content", 3, "innerHtml"]], template: function HomePage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomePage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-content", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-text", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-list");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, HomePage_ng_container_9_Template, 11, 8, "ng-container", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-footer", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomePage_Template_ion_button_click_12_listener() { return ctx.validateApp(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-text");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.authorizationUserViewModel.appName, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.authorizationUserViewModel.informationScreen);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.authorizationUserViewModel.shouldShowInformation);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 4, "open-banking.authorization.information.button"));
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonLabel"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"], _ui_src_lib_pipes_trust_html_trust_html_pipe__WEBPACK_IMPORTED_MODULE_11__["TrustHTMLPipe"]], styles: [".ion-border-bottom[_ngcontent-%COMP%] {\n  border-width: 0 0 1px 0;\n  border-color: var(--divisor-line);\n  border-style: solid;\n}\n\n.info-list--light[_ngcontent-%COMP%] {\n  color: var(--medianoche);\n}\n\n.info-list--dark[_ngcontent-%COMP%] {\n  color: var(--white);\n}\n\n.info-list__content[_ngcontent-%COMP%] {\n  --background: var(--transparent);\n}\n\n.info-list__list[_ngcontent-%COMP%] {\n  background: none;\n  margin-top: 25px;\n}\n\n.info-list__item[_ngcontent-%COMP%]::part(native) {\n  --inner-padding-start: 0;\n  --inner-padding-end: 0;\n  --min-height: auto;\n  background: none;\n}\n\n.info-list__title[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 22px;\n  color: var(--medianoche);\n}\n\n.info-list__content[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 17px;\n  color: var(--gray-70);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFHRTtFQUNFLHdCQUFBO0FBQUo7O0FBR0U7RUFDRSxtQkFBQTtBQURKOztBQUlFO0VBQ0UsZ0NBQUE7QUFGSjs7QUFLRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFISjs7QUFPSTtFQUNFLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBTE47O0FBU0U7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7QUFQSjs7QUFVRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQVJKIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlvbi1ib3JkZXItYm90dG9tIHtcbiAgYm9yZGVyLXdpZHRoOiAwIDAgMXB4IDA7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGl2aXNvci1saW5lKTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cblxuLmluZm8tbGlzdCB7XG4gICYtLWxpZ2h0IHtcbiAgICBjb2xvcjogdmFyKC0tbWVkaWFub2NoZSk7XG4gIH1cblxuICAmLS1kYXJrIHtcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICB9XG5cbiAgJl9fY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XG4gIH1cblxuICAmX19saXN0IHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gIH1cblxuICAmX19pdGVtIHtcbiAgICAmOjpwYXJ0KG5hdGl2ZSkge1xuICAgICAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgICAgIC0tbWluLWhlaWdodDogYXV0bztcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgJl9fdGl0bGUge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICBjb2xvcjogdmFyKC0tbWVkaWFub2NoZSk7XG4gIH1cblxuICAmX19jb250ZW50IHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gICAgY29sb3I6IHZhcigtLWdyYXktNzApO1xuICB9XG59XG4iXX0= */"] });
    return HomePage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__["FeatureBasePage"]));



/***/ }),

/***/ "J1P9":
/*!***************************************************************************************************!*\
  !*** ./libs/features/open-banking/src/presentation/authorization/pages/terms/terms.view-model.ts ***!
  \***************************************************************************************************/
/*! exports provided: TermsViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsViewModel", function() { return TermsViewModel; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");

var TermsViewModel = /** @class */ (function () {
    function TermsViewModel() {
    }
    TermsViewModel.prototype.initControl = function () {
        this.acceptTerms = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](false, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].requiredTrue]);
    };
    Object.defineProperty(TermsViewModel.prototype, "termsControl", {
        get: function () {
            return this.acceptTerms;
        },
        enumerable: false,
        configurable: true
    });
    return TermsViewModel;
}());



/***/ }),

/***/ "O0jW":
/*!*********************************************************************************************************!*\
  !*** ./libs/features/open-banking/src/presentation/authorization/pages/permissions/permissions.page.ts ***!
  \*********************************************************************************************************/
/*! exports provided: PermissionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionsPage", function() { return PermissionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _view_models_authorization_user_view_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../view-models/authorization-user.view-model */ "mWeS");
/* harmony import */ var _services_authorization_card_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/authorization-card-modal.service */ "hFhZ");
/* harmony import */ var _permissions_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./permissions.config */ "wU81");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ui_src_lib_components_item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../ui/src/lib/components/item-detail/item-detail.component */ "Ycc7");
/* harmony import */ var _ui_src_lib_pipes_trust_html_trust_html_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../ui/src/lib/pipes/trust-html/trust-html.pipe */ "FKD1");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");


















function PermissionsPage_app_item_detail_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-item-detail", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 3, "open-banking.authorization.resume.icon"))("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 5, "open-banking.authorization.resume.message"))("line", false);
} }
function PermissionsPage_ul_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "trustHTML");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, item_r2.data.label), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
var PermissionsPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PermissionsPage, _super);
    function PermissionsPage(injector, authorizationUserViewModel, authorizationCardModalService, loadingService, translateProvider, moduleConfigProvider) {
        var _this = _super.call(this, injector) || this;
        _this.authorizationUserViewModel = authorizationUserViewModel;
        _this.authorizationCardModalService = authorizationCardModalService;
        _this.loadingService = loadingService;
        _this.translateProvider = translateProvider;
        _this.moduleConfigProvider = moduleConfigProvider;
        _this.translateProvider.loadModule(_this.moduleConfigProvider.i18n.moduleKey);
        return _this;
    }
    PermissionsPage.prototype.goBack = function () {
        this.navController.navigateForward(_permissions_config__WEBPACK_IMPORTED_MODULE_7__["PermissionsConfig"].routes.closet);
    };
    PermissionsPage.prototype.validateApp = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingService.show()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.authorizationCardModalService.goToApp()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.loadingService.hideWithoutFeedback()];
                    case 3:
                        _a.sent();
                        this.navController.navigateForward(_permissions_config__WEBPACK_IMPORTED_MODULE_7__["PermissionsConfig"].routes.closet);
                        return [2 /*return*/];
                }
            });
        });
    };
    PermissionsPage.ɵfac = function PermissionsPage_Factory(t) { return new (t || PermissionsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_view_models_authorization_user_view_model__WEBPACK_IMPORTED_MODULE_5__["AuthorizationUserViewModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_authorization_card_modal_service__WEBPACK_IMPORTED_MODULE_6__["AuthorizationCardModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__["ModuleConfigProvider"])); };
    PermissionsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PermissionsPage, selectors: [["app-permissions"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 21, vars: 12, consts: [[1, "nequi-header"], ["slot", "start"], ["id", "authorization-permissions_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], ["fullscreen", "true", 1, "ion-content--enroll", "ion-padding-horizontal", "content", "data-content"], [1, "nequi-title", "content__title"], [3, "icon", "title", "line", 4, "ngIf"], [1, "data-content__authorization-permissions", 3, "innerHTML"], [1, "list"], ["class", "list__item", "lines", "none", 4, "ngFor", "ngForOf"], [1, "data-content__authorization-copy", 3, "innerHTML"], [1, "nequi-footer"], ["id", "authorization_go-to-app_button", "shape", "round", "color", "guayaba", "expand", "block", "type", "submit", 1, "nequi-footer__button", 3, "click"], [3, "icon", "title", "line"], ["lines", "none", 1, "list__item"], ["id", "profile-terms_content_label", 1, "list__item-label", 3, "innerHTML"]], template: function PermissionsPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PermissionsPage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-content", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-text", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, PermissionsPage_app_item_detail_8_Template, 3, 7, "app-item-detail", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "p", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "trustHTML");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-list", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, PermissionsPage_ul_12_Template, 3, 3, "ul", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "p", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "trustHTML");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-footer", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PermissionsPage_Template_ion_button_click_17_listener() { return ctx.validateApp(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-text");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.authorizationUserViewModel.permissionsTitle, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authorizationUserViewModel.appName);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 6, ctx.authorizationUserViewModel.permissionsDatos), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.authorizationUserViewModel.permissions);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 8, ctx.authorizationUserViewModel.permissionsCopy), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 10, "open-banking.authorization.resume.button"));
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonText"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonFooter"], _ui_src_lib_components_item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_10__["ItemDetailComponent"]], pipes: [_ui_src_lib_pipes_trust_html_trust_html_pipe__WEBPACK_IMPORTED_MODULE_11__["TrustHTMLPipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"]], styles: [".data-content__authorization-permissions[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 16.8px;\n  color: var(--gray-70);\n}\n.data-content__authorization-copy[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 16.8px;\n  color: var(--gray-70);\n}\n.list__item-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 16.8px;\n  color: var(--gray-70);\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvcGVybWlzc2lvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFBSjtBQUVFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFBSjtBQUtFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0FBRkoiLCJmaWxlIjoicGVybWlzc2lvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhdGEtY29udGVudCB7XG4gICZfX2F1dGhvcml6YXRpb24tcGVybWlzc2lvbnMge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMTYuOHB4O1xuICAgIGNvbG9yOiB2YXIoLS1ncmF5LTcwKTtcbiAgfVxuICAmX19hdXRob3JpemF0aW9uLWNvcHkge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMTYuOHB4O1xuICAgIGNvbG9yOiB2YXIoLS1ncmF5LTcwKTtcbiAgfVxufVxuXG4ubGlzdCB7XG4gICZfX2l0ZW0tbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMTYuOHB4O1xuICAgIGNvbG9yOiB2YXIoLS1ncmF5LTcwKTtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cbiJdfQ== */"] });
    return PermissionsPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__["FeatureBasePage"]));



/***/ }),

/***/ "Uj/p":
/*!*********************************************************************************************************!*\
  !*** ./libs/features/open-banking/src/presentation/authorization/pages/authorization-routing.module.ts ***!
  \*********************************************************************************************************/
/*! exports provided: MapParamsToApp, AuthorizationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapParamsToApp", function() { return MapParamsToApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizationRoutingModule", function() { return AuthorizationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _config_open_banking_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config/open-banking.config */ "lIQC");
/* harmony import */ var _middlewares_authorization_middleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../middlewares/authorization.middleware */ "sebd");
/* harmony import */ var _home_home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.page */ "Frve");
/* harmony import */ var _permissions_permissions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./permissions/permissions.page */ "O0jW");
/* harmony import */ var _terms_terms_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./terms/terms.page */ "gdlN");










var MapParamsToApp = /** @class */ (function () {
    function MapParamsToApp(router) {
        this.router = router;
    }
    MapParamsToApp.prototype.canActivate = function (route, state) {
        var _a, _b, _c, _d, _e;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var app;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_f) {
                app = (_b = (_a = this.router.getCurrentNavigation().extras.state) === null || _a === void 0 ? void 0 : _a.params) === null || _b === void 0 ? void 0 : _b.app;
                if (!app) {
                    app = ((_d = (_c = this.router.getCurrentNavigation().extras.queryParams) === null || _c === void 0 ? void 0 : _c.args) === null || _d === void 0 ? void 0 : _d.app)
                        || ((_e = this.router.getCurrentNavigation().extras.state) === null || _e === void 0 ? void 0 : _e.app);
                }
                return [2 /*return*/, this.router.parseUrl(state.url.replace(/\?.+/, '') + "/" + app)];
            });
        });
    };
    MapParamsToApp.ɵfac = function MapParamsToApp_Factory(t) { return new (t || MapParamsToApp)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
    MapParamsToApp.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MapParamsToApp, factory: MapParamsToApp.ɵfac });
    return MapParamsToApp;
}());

var routes = [
    {
        path: 'info',
        component: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Type"],
        canActivate: [MapParamsToApp],
    },
    {
        path: 'info/:app',
        component: _home_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"],
        data: {
            i18nModuleKey: _config_open_banking_config__WEBPACK_IMPORTED_MODULE_3__["OpenBankingConfig"].i18n.moduleKey,
        },
        canActivate: [_middlewares_authorization_middleware__WEBPACK_IMPORTED_MODULE_4__["AuthorizationMiddleware"]],
    },
    {
        path: 'terms',
        component: _terms_terms_page__WEBPACK_IMPORTED_MODULE_7__["TermsPage"],
    },
    {
        path: 'permissions',
        component: _permissions_permissions_page__WEBPACK_IMPORTED_MODULE_6__["PermissionsPage"],
    },
];
var AuthorizationRoutingModule = /** @class */ (function () {
    function AuthorizationRoutingModule() {
    }
    AuthorizationRoutingModule.ɵfac = function AuthorizationRoutingModule_Factory(t) { return new (t || AuthorizationRoutingModule)(); };
    AuthorizationRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AuthorizationRoutingModule });
    AuthorizationRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
    return AuthorizationRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AuthorizationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "b/qV":
/*!*************************************************************************************************!*\
  !*** ./libs/features/open-banking/src/presentation/authorization/pages/authorization.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: AuthorizationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizationModule", function() { return AuthorizationModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/open-banking/core */ "vY5Q");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _core_application_interactor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/application.interactor */ "qHrF");
/* harmony import */ var _middlewares_authorization_middleware__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../middlewares/authorization.middleware */ "sebd");
/* harmony import */ var _view_models_authorization_user_view_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../view-models/authorization-user.view-model */ "mWeS");
/* harmony import */ var _services_authorization_card_modal_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/authorization-card-modal.service */ "hFhZ");
/* harmony import */ var _services_authorization_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/authorization.service */ "oS4q");
/* harmony import */ var _authorization_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./authorization-routing.module */ "Uj/p");
/* harmony import */ var _home_home_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.page */ "Frve");
/* harmony import */ var _permissions_permissions_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./permissions/permissions.page */ "O0jW");
/* harmony import */ var _terms_terms_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./terms/terms.page */ "gdlN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");
















var AuthorizationModule = /** @class */ (function () {
    function AuthorizationModule() {
    }
    AuthorizationModule.ɵfac = function AuthorizationModule_Factory(t) { return new (t || AuthorizationModule)(); };
    AuthorizationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AuthorizationModule });
    AuthorizationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ providers: [
            _middlewares_authorization_middleware__WEBPACK_IMPORTED_MODULE_7__["AuthorizationMiddleware"],
            _view_models_authorization_user_view_model__WEBPACK_IMPORTED_MODULE_8__["AuthorizationUserViewModel"],
            _services_authorization_card_modal_service__WEBPACK_IMPORTED_MODULE_9__["AuthorizationCardModalService"],
            _services_authorization_service__WEBPACK_IMPORTED_MODULE_10__["AuthorizationService"],
            _authorization_routing_module__WEBPACK_IMPORTED_MODULE_11__["MapParamsToApp"],
            {
                provide: _nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_3__["AuthorizationInteractor"],
                deps: [_nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_3__["AuthorizationRepository"]],
                useFactory: function (repository) { return new _nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_3__["AuthorizationInteractor"](repository); },
            },
            {
                provide: _core_application_interactor__WEBPACK_IMPORTED_MODULE_6__["ApplicationInteractor"],
                deps: [_nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_3__["ApplicationRepository"]],
                useFactory: function (repository) { return new _core_application_interactor__WEBPACK_IMPORTED_MODULE_6__["ApplicationInteractor"](repository); },
            },
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _authorization_routing_module__WEBPACK_IMPORTED_MODULE_11__["AuthorizationRoutingModule"],
                _nequi_ui__WEBPACK_IMPORTED_MODULE_4__["NequiUiModule"],
            ]] });
    return AuthorizationModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AuthorizationModule, { declarations: [_home_home_page__WEBPACK_IMPORTED_MODULE_12__["HomePage"], _terms_terms_page__WEBPACK_IMPORTED_MODULE_14__["TermsPage"], _permissions_permissions_page__WEBPACK_IMPORTED_MODULE_13__["PermissionsPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _authorization_routing_module__WEBPACK_IMPORTED_MODULE_11__["AuthorizationRoutingModule"],
        _nequi_ui__WEBPACK_IMPORTED_MODULE_4__["NequiUiModule"]] }); })();


/***/ }),

/***/ "gdlN":
/*!*********************************************************************************************!*\
  !*** ./libs/features/open-banking/src/presentation/authorization/pages/terms/terms.page.ts ***!
  \*********************************************************************************************/
/*! exports provided: TermsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsPage", function() { return TermsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _view_models_authorization_user_view_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../view-models/authorization-user.view-model */ "mWeS");
/* harmony import */ var _services_authorization_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/authorization.service */ "oS4q");
/* harmony import */ var _terms_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./terms.config */ "9jt3");
/* harmony import */ var _terms_view_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./terms.view-model */ "J1P9");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ui_src_lib_pipes_trust_html_trust_html_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../ui/src/lib/pipes/trust-html/trust-html.pipe */ "FKD1");



















var TermsPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TermsPage, _super);
    function TermsPage(injector, alertService, authorizationUserViewModel, authorizationService, loadingService, translateProvider, moduleConfigProvider) {
        var _this = _super.call(this, injector) || this;
        _this.alertService = alertService;
        _this.authorizationUserViewModel = authorizationUserViewModel;
        _this.authorizationService = authorizationService;
        _this.loadingService = loadingService;
        _this.translateProvider = translateProvider;
        _this.moduleConfigProvider = moduleConfigProvider;
        _this.viewModel = new _terms_view_model__WEBPACK_IMPORTED_MODULE_8__["TermsViewModel"]();
        _this.translateProvider.loadModule(_this.moduleConfigProvider.i18n.moduleKey);
        return _this;
    }
    TermsPage.prototype.ngOnInit = function () {
        this.viewModel.initControl();
        this.viewModel.terms = this.authorizationUserViewModel.contract;
    };
    TermsPage.prototype.goBack = function () {
        this.navController.navigateForward(_terms_config__WEBPACK_IMPORTED_MODULE_7__["TermsConfig"].routes.closet);
    };
    TermsPage.prototype.acceptContract = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var params, hasAcceptTerms, alert_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingService.show()];
                    case 1:
                        _a.sent();
                        params = {
                            app: this.authorizationUserViewModel.app,
                            acceptContractMail: this.authorizationUserViewModel.acceptContractMail,
                            permissions: this.authorizationUserViewModel.permissions,
                        };
                        return [4 /*yield*/, this.authorizationService.acceptTerms(params)];
                    case 2:
                        hasAcceptTerms = _a.sent();
                        if (!hasAcceptTerms) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.loadingService.hide(true)];
                    case 3:
                        _a.sent();
                        this.authorizationUserViewModel.shouldShowTerms = false;
                        this.navController.navigateForward(_terms_config__WEBPACK_IMPORTED_MODULE_7__["TermsConfig"].routes.authorizationPermissions);
                        return [3 /*break*/, 6];
                    case 4:
                        alert_1 = this.translateProvider.get(_terms_config__WEBPACK_IMPORTED_MODULE_7__["TermsConfig"].i18n.alerts.error);
                        this.alertService.show({
                            messages: {
                                header: alert_1.title,
                                message: alert_1.message,
                                buttons: {
                                    accept: alert_1.button,
                                },
                            },
                            handlers: {
                                accept: function () { },
                            },
                        });
                        return [4 /*yield*/, this.loadingService.hide(false)];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    TermsPage.ɵfac = function TermsPage_Factory(t) { return new (t || TermsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_view_models_authorization_user_view_model__WEBPACK_IMPORTED_MODULE_5__["AuthorizationUserViewModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_authorization_service__WEBPACK_IMPORTED_MODULE_6__["AuthorizationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__["ModuleConfigProvider"])); };
    TermsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TermsPage, selectors: [["app-terms"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 21, vars: 14, consts: [[1, "nequi-header"], ["slot", "start"], ["id", "autorization-terms_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], ["fullscreen", "true", 1, "ion-content--enroll", "ion-padding-horizontal", "content"], [1, "nequi-title", "content__title"], [3, "innerHTML"], [1, "nequi-footer"], [1, "nequi-footer__toolbar"], ["lines", "none", 1, "footer__accept-agreement"], ["slot", "start", "id", "terms_accept-agreement_checkbox", 1, "footer__accept-agreement_checkbox", 3, "formControl"], ["id", "terms_accept-agreement_label"], ["id", "terms_accept-agreement_button", "shape", "round", "color", "guayaba", "expand", "block", 1, "nequi-footer__button", 3, "disabled", "click"]], template: function TermsPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermsPage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-content", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-text", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "trustHTML");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-footer", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-toolbar", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-item", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "ion-checkbox", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-text", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermsPage_Template_ion_button_click_18_listener() { return ctx.acceptContract(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 6, "open-banking.authorization.terms.title"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 8, ctx.viewModel.terms), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.viewModel.termsControl);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 10, "open-banking.authorization.terms.accept-terms"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.viewModel.termsControl.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 12, "open-banking.authorization.terms.button"), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonCheckbox"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["BooleanValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControlDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"], _ui_src_lib_pipes_trust_html_trust_html_pipe__WEBPACK_IMPORTED_MODULE_12__["TrustHTMLPipe"]], styles: [".footer__accept-agreement[_ngcontent-%COMP%] {\n  padding: 8px 0 8px 0;\n  --background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvdGVybXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usb0JBQUE7RUFDQSx5QkFBQTtBQUFKIiwiZmlsZSI6InRlcm1zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xuICAmX19hY2NlcHQtYWdyZWVtZW50IHtcbiAgICBwYWRkaW5nOiA4cHggMCA4cHggMDtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB9XG59XG4iXX0= */"] });
    return TermsPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__["FeatureBasePage"]));



/***/ }),

/***/ "hFhZ":
/*!****************************************************************************************************************!*\
  !*** ./libs/features/open-banking/src/presentation/authorization/services/authorization-card-modal.service.ts ***!
  \****************************************************************************************************************/
/*! exports provided: AuthorizationCardModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizationCardModalService", function() { return AuthorizationCardModalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var libs_features_commons_src_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! libs/features/commons/src/core */ "zidQ");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/open-banking/core */ "vY5Q");
/* harmony import */ var _nequi_native_nequi_web_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/native/nequi-web-view */ "jqqF");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_date__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/utils/date */ "tGfC");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _nequi_utils_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nequi/utils/string */ "p6rB");
/* harmony import */ var _view_models_authorization_user_view_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../view-models/authorization-user.view-model */ "mWeS");
/* harmony import */ var _authorization_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./authorization.service */ "oS4q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");






















var AuthorizationCardModalService = /** @class */ (function () {
    function AuthorizationCardModalService(authorizationUserViewModel, authorizationService, cardModalService, loggerInteractor, translateProvider, navController, nequiWebView, moduleConfigProvider, analyticsInteractor) {
        this.authorizationUserViewModel = authorizationUserViewModel;
        this.authorizationService = authorizationService;
        this.cardModalService = cardModalService;
        this.loggerInteractor = loggerInteractor;
        this.translateProvider = translateProvider;
        this.navController = navController;
        this.nequiWebView = nequiWebView;
        this.moduleConfigProvider = moduleConfigProvider;
        this.analyticsInteractor = analyticsInteractor;
        this.translateProvider.loadModule(this.moduleConfigProvider.i18n.moduleKey);
    }
    AuthorizationCardModalService.prototype.goToApp = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        messages = this.authorizationUserViewModel.reward;
                        if (!this.authorizationUserViewModel.intentionTags) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.setAnalyticsFinalIntention(this.authorizationUserViewModel.intentionTags[_nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_4__["TagsConfig"].FINAL_INTENTION])];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!(!this.authorizationUserViewModel.checkInfoSaved[_nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_4__["ScreenConfig"].BEFORE_GOTO_APP].enable ||
                            this.authorizationUserViewModel.checkInfoSaved[_nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_4__["ScreenConfig"].BEFORE_GOTO_APP].counter === 0)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.openUrlApp()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, false];
                    case 4:
                        if (this.authorizationUserViewModel.checkInfoSaved[_nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_4__["ScreenConfig"].BEFORE_GOTO_APP].counter &&
                            this.authorizationUserViewModel.checkInfoSaved[_nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_4__["ScreenConfig"].BEFORE_GOTO_APP].counter !== 0) {
                            this.authorizationUserViewModel.checkInfoSaved[_nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_4__["ScreenConfig"].BEFORE_GOTO_APP].counter =
                                this.authorizationUserViewModel.checkInfoSaved[_nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_4__["ScreenConfig"].BEFORE_GOTO_APP].counter - 1;
                            this.authorizationUserViewModel.saveScreenConfig(this.authorizationUserViewModel.checkInfoSaved, this.authorizationUserViewModel.appName);
                        }
                        this.cardModalService.show({
                            imgPath: messages.imgPath,
                            title: Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_9__["createFormat"])(messages.title, [this.authorizationUserViewModel.appName]),
                            content: Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_9__["createFormat"])(messages.content, [this.authorizationUserViewModel.appName]),
                            buttons: [
                                {
                                    text: messages.buttons.next,
                                    handler: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                        var isApp;
                                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    if (!this.authorizationUserViewModel.isAppValidated) return [3 /*break*/, 2];
                                                    return [4 /*yield*/, this.openUrlApp()];
                                                case 1:
                                                    _a.sent();
                                                    return [3 /*break*/, 5];
                                                case 2: return [4 /*yield*/, this.openApp()];
                                                case 3:
                                                    isApp = _a.sent();
                                                    if (!isApp) return [3 /*break*/, 5];
                                                    return [4 /*yield*/, this.openUrlApp()];
                                                case 4:
                                                    _a.sent();
                                                    _a.label = 5;
                                                case 5: return [2 /*return*/];
                                            }
                                        });
                                    }); },
                                },
                                {
                                    text: messages.buttons.back,
                                    color: 'medianoche',
                                },
                            ],
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthorizationCardModalService.prototype.openApp = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var params;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                params = {
                    app: this.authorizationUserViewModel.app,
                };
                return [2 /*return*/, this.authorizationService.openApp(params)];
            });
        });
    };
    AuthorizationCardModalService.prototype.openUrlApp = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var url, _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        url = this.authorizationUserViewModel.url + "?token=" + this.authorizationUserViewModel.token;
                        _a = this.authorizationUserViewModel.action;
                        switch (_a) {
                            case 'WEBVIEW': return [3 /*break*/, 1];
                            case 'NAVIGATOR': return [3 /*break*/, 3];
                            case 'DEEPLINK': return [3 /*break*/, 5];
                        }
                        return [3 /*break*/, 6];
                    case 1: return [4 /*yield*/, this.openWebView(url)];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 8];
                    case 3: return [4 /*yield*/, this.openNavigator(url)];
                    case 4:
                        _b.sent();
                        return [3 /*break*/, 8];
                    case 5:
                        this.navController.navigateForward(url);
                        return [3 /*break*/, 8];
                    case 6: return [4 /*yield*/, this.openWebView(url)];
                    case 7:
                        _b.sent();
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    AuthorizationCardModalService.prototype.openWebView = function (url) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var err_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.nequiWebView.launchWebView({
                                url: url,
                                title: this.authorizationUserViewModel.appName,
                                loadLabel: this.authorizationUserViewModel.appName,
                                headers: this.authorizationUserViewModel.headers,
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        this.loggerInteractor.error("[Authorization][webview] " + JSON.stringify(err_1));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AuthorizationCardModalService.prototype.openNavigator = function (url) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_8__["openUrl"])(url)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthorizationCardModalService.prototype.setAnalyticsFinalIntention = function (configTag) {
        var e_1, _a;
        var currentDate = Object(_nequi_utils_date__WEBPACK_IMPORTED_MODULE_7__["getFormattedDateTimes"])();
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(configTag.clevertap.params.eventProps), _c = _b.next(); !_c.done; _c = _b.next()) {
                var valuesToReplace = _c.value;
                if (valuesToReplace.value === _nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_4__["TagValuesToReplace"].CURRENT_DATE) {
                    configTag.clevertap.params.eventProps[0].value = currentDate;
                }
                if (valuesToReplace.value === _nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_4__["TagValuesToReplace"].COMMERCE) {
                    configTag.clevertap.params.eventProps[1].value = this.authorizationUserViewModel.appName;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var property = [];
        var valueProperty = [];
        var paramsLength = configTag.clevertap.params.eventProps.length;
        for (var i = 0; i < paramsLength; i++) {
            property.push(configTag.clevertap.params.eventProps[i].label);
            valueProperty.push(configTag.clevertap.params.eventProps[i].value);
        }
        this.analyticsInteractor.trackEvent({
            type: configTag.facebook.type,
            params: {
                eventName: configTag.facebook.params.eventName,
            },
        });
        this.analyticsInteractor.trackEvent({
            type: configTag.firebase.type,
            params: {
                eventName: configTag.firebase.params.eventName,
            },
        });
        this.analyticsInteractor.trackEvent({
            type: configTag.clevertap.type,
            params: {
                eventName: configTag.clevertap.params.eventName,
                eventProps: Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_8__["stringsArrayToObjectWithValues"])(property, valueProperty),
            },
        });
    };
    AuthorizationCardModalService.ɵfac = function AuthorizationCardModalService_Factory(t) { return new (t || AuthorizationCardModalService)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_view_models_authorization_user_view_model__WEBPACK_IMPORTED_MODULE_10__["AuthorizationUserViewModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_authorization_service__WEBPACK_IMPORTED_MODULE_11__["AuthorizationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_6__["CardModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](libs_features_commons_src_core__WEBPACK_IMPORTED_MODULE_1__["LoggerInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_3__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_nequi_native_nequi_web_view__WEBPACK_IMPORTED_MODULE_5__["NequiWebView"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_3__["ModuleConfigProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](libs_features_commons_src_core__WEBPACK_IMPORTED_MODULE_1__["AnalyticsInteractor"])); };
    AuthorizationCardModalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjectable"]({ token: AuthorizationCardModalService, factory: AuthorizationCardModalService.ɵfac });
    return AuthorizationCardModalService;
}());



/***/ }),

/***/ "mWeS":
/*!**************************************************************************************************!*\
  !*** ./libs/features/open-banking/src/presentation/view-models/authorization-user.view-model.ts ***!
  \**************************************************************************************************/
/*! exports provided: AuthorizationUserViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizationUserViewModel", function() { return AuthorizationUserViewModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _nequi_features_application_data_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/features/application-data/core */ "UgzZ");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/open-banking/core */ "vY5Q");
/* harmony import */ var _config_open_banking_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/open-banking.config */ "lIQC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







var AuthorizationUserViewModel = /** @class */ (function () {
    function AuthorizationUserViewModel(applicationDataInteractor) {
        this.applicationDataInteractor = applicationDataInteractor;
        this.acceptContractMail = true;
        this.isAppValidated = false;
    }
    AuthorizationUserViewModel.prototype.fromGetAppEntity = function (entity) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _v, _w, _x;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_y) {
                switch (_y.label) {
                    case 0:
                        this.app = (_a = entity.assets) === null || _a === void 0 ? void 0 : _a.app;
                        this.appName = (_b = entity.assets) === null || _b === void 0 ? void 0 : _b.appName;
                        this.contract = (_c = entity.contract) === null || _c === void 0 ? void 0 : _c.text;
                        this.contractValidation = (_d = entity.contract) === null || _d === void 0 ? void 0 : _d.contractValidation;
                        this.informationScreen = (_e = entity.assets) === null || _e === void 0 ? void 0 : _e.informationScreen;
                        _v = this;
                        return [4 /*yield*/, this.getScreenConfig((_f = entity.assets) === null || _f === void 0 ? void 0 : _f.appName, (_g = entity.assets) === null || _g === void 0 ? void 0 : _g.showViews, entity)];
                    case 1:
                        _v.showViews = _y.sent();
                        _w = this;
                        if (!((_h = entity.assets) === null || _h === void 0 ? void 0 : _h.tags)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getDynamicTags((_j = entity.assets) === null || _j === void 0 ? void 0 : _j.tags)];
                    case 2:
                        _x = _y.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.setDynamicTag()];
                    case 4:
                        _x = _y.sent();
                        _y.label = 5;
                    case 5:
                        _w.intentionTags = _x;
                        if (!this.checkInfoSaved) {
                            this.checkInfoSaved = this.showViews;
                        }
                        switch (Object.values(this.showViews).length > 0) {
                            case this.showViews[_nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_3__["ScreenConfig"].MODAL].version !==
                                this.checkInfoSaved[_nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_3__["ScreenConfig"].MODAL].version:
                                this.saveScreenConfig(this.showViews, this.appName);
                                break;
                            case this.showViews[_nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_3__["ScreenConfig"].AUTHORIZATION].version !==
                                this.checkInfoSaved[_nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_3__["ScreenConfig"].AUTHORIZATION].version:
                                this.saveScreenConfig(this.showViews, this.appName);
                                break;
                            case this.showViews[_nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_3__["ScreenConfig"].INFORMATION_SCREEN].version !==
                                this.checkInfoSaved[_nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_3__["ScreenConfig"].INFORMATION_SCREEN].version:
                                this.saveScreenConfig(this.showViews, this.appName);
                                break;
                            case this.showViews[_nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_3__["ScreenConfig"].BEFORE_GOTO_APP].version !==
                                this.checkInfoSaved[_nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_3__["ScreenConfig"].BEFORE_GOTO_APP].version:
                                this.saveScreenConfig(this.showViews, this.appName);
                                break;
                            default:
                                break;
                        }
                        if ((this.informationScreen &&
                            this.checkInfoSaved[_nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_3__["ScreenConfig"].INFORMATION_SCREEN].enable &&
                            this.checkInfoSaved[_nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_3__["ScreenConfig"].INFORMATION_SCREEN].counter !== 0) ||
                            this.contractValidation === _nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_3__["ContractValidation"].NO) {
                            this.shouldShowInformation = true;
                            if (this.checkInfoSaved[_nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_3__["ScreenConfig"].INFORMATION_SCREEN].counter) {
                                this.checkInfoSaved[_nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_3__["ScreenConfig"].INFORMATION_SCREEN].counter =
                                    this.checkInfoSaved[_nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_3__["ScreenConfig"].INFORMATION_SCREEN].counter - 1;
                                this.saveScreenConfig(this.checkInfoSaved, (_k = entity.assets) === null || _k === void 0 ? void 0 : _k.appName);
                            }
                        }
                        else {
                            this.shouldShowInformation = false;
                        }
                        if ((_l = entity.assets) === null || _l === void 0 ? void 0 : _l.modal) {
                            this.modal = {
                                buttonLabel: entity.assets.modal.buttonLabel,
                                description: entity.assets.modal.description,
                                image: entity.assets.modal.image,
                                url: entity.assets.modal.url,
                                title: entity.assets.modal.title,
                            };
                        }
                        this.permissions = (_m = entity.permissions) === null || _m === void 0 ? void 0 : _m.permissions;
                        this.permissionsCopy = (_p = (_o = entity.assets) === null || _o === void 0 ? void 0 : _o.authorization) === null || _p === void 0 ? void 0 : _p.copy;
                        this.permissionsDatos = (_r = (_q = entity.assets) === null || _q === void 0 ? void 0 : _q.authorization) === null || _r === void 0 ? void 0 : _r.permissions;
                        this.permissionsTitle = (_t = (_s = entity.assets) === null || _s === void 0 ? void 0 : _s.authorization) === null || _t === void 0 ? void 0 : _t.title;
                        this.isAppValidated = false;
                        if ((_u = entity.assets) === null || _u === void 0 ? void 0 : _u.beforeGoToApp) {
                            this.reward = {
                                buttons: {
                                    back: entity.assets.beforeGoToApp.buttons.back,
                                    next: entity.assets.beforeGoToApp.buttons.next,
                                },
                                content: entity.assets.beforeGoToApp.description,
                                imgPath: entity.assets.beforeGoToApp.image,
                                title: entity.assets.beforeGoToApp.title,
                            };
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthorizationUserViewModel.prototype.fromOpenAppEntity = function (entity) {
        this.action = entity.action;
        this.url = entity.url;
        this.headers = entity.headers;
        this.token = entity.token;
    };
    AuthorizationUserViewModel.prototype.getScreenConfig = function (commerce, showViews, entity) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a;
            var _b;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.applicationDataInteractor.findValue(_config_open_banking_config__WEBPACK_IMPORTED_MODULE_4__["OpenBankingConfig"].applicationData.persistenceDataKey + commerce)];
                    case 1:
                        _a.checkInfoSaved = _c.sent();
                        if (!this.checkInfoSaved && showViews) {
                            this.saveScreenConfig(showViews, commerce);
                        }
                        if (showViews) {
                            return [2 /*return*/, showViews];
                        }
                        return [2 /*return*/, (_b = {},
                                _b[_nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_3__["ScreenConfig"].MODAL] = {
                                    version: 1,
                                    enable: Object.prototype.hasOwnProperty.call(entity === null || entity === void 0 ? void 0 : entity.assets, 'modal'),
                                },
                                _b[_nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_3__["ScreenConfig"].INFORMATION_SCREEN] = {
                                    version: 1,
                                    enable: Object.prototype.hasOwnProperty.call(entity === null || entity === void 0 ? void 0 : entity.assets, 'informationScreen'),
                                },
                                _b[_nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_3__["ScreenConfig"].BEFORE_GOTO_APP] = {
                                    version: 1,
                                    enable: Object.prototype.hasOwnProperty.call(entity === null || entity === void 0 ? void 0 : entity.assets, 'beforeGoToApp'),
                                },
                                _b[_nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_3__["ScreenConfig"].AUTHORIZATION] = {
                                    version: 1,
                                    enable: Object.prototype.hasOwnProperty.call(entity === null || entity === void 0 ? void 0 : entity.assets, 'authorization'),
                                },
                                _b)];
                }
            });
        });
    };
    AuthorizationUserViewModel.prototype.saveScreenConfig = function (screenData, commerce) {
        var _a, _b;
        if (this.checkInfoSaved) {
            for (var items in this.showViews) {
                if (((_a = this.showViews[items]) === null || _a === void 0 ? void 0 : _a.version) !== ((_b = this.checkInfoSaved[items]) === null || _b === void 0 ? void 0 : _b.version)) {
                    this.checkInfoSaved[items] = this.showViews[items];
                }
            }
        }
        this.applicationDataInteractor.save(_config_open_banking_config__WEBPACK_IMPORTED_MODULE_4__["OpenBankingConfig"].applicationData.persistenceDataKey + commerce, screenData);
    };
    AuthorizationUserViewModel.prototype.getDynamicTagsParams = function (items) {
        return {
            value: items.value,
            label: items.label,
        };
    };
    AuthorizationUserViewModel.prototype.getDynamicTags = function (tags) {
        var _a;
        var _this = this;
        if (Object.prototype.hasOwnProperty.call(tags, _nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_3__["TagsConfig"].INITIAL_INTENTION) &&
            Object.prototype.hasOwnProperty.call(tags, _nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_3__["TagsConfig"].FINAL_INTENTION)) {
            var eventInitialIntenttion = tags[_nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_3__["TagsConfig"].INITIAL_INTENTION];
            var eventFinalIntenttion = tags[_nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_3__["TagsConfig"].FINAL_INTENTION];
            return _a = {},
                _a[_nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_3__["TagsConfig"].INITIAL_INTENTION] = {
                    name: eventInitialIntenttion.name,
                    firebase: {
                        type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["AnalyticsType"].FIREBASE,
                        params: {
                            eventName: eventInitialIntenttion.firebase || eventInitialIntenttion.name,
                        },
                    },
                    facebook: {
                        type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["AnalyticsType"].FACEBOOK,
                        params: {
                            eventName: eventInitialIntenttion.facebook || eventInitialIntenttion.name,
                        },
                    },
                    clevertap: {
                        type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["AnalyticsType"].CLEVERTAP,
                        params: {
                            eventName: eventInitialIntenttion.clevertap || eventInitialIntenttion.name,
                            eventProps: eventInitialIntenttion.params.map(function (items) {
                                return _this.getDynamicTagsParams(items);
                            }),
                        },
                    },
                },
                _a[_nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_3__["TagsConfig"].FINAL_INTENTION] = {
                    name: eventFinalIntenttion.name,
                    firebase: {
                        type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["AnalyticsType"].FIREBASE,
                        params: {
                            eventName: eventFinalIntenttion.firebase || eventFinalIntenttion.name,
                        },
                    },
                    facebook: {
                        type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["AnalyticsType"].FACEBOOK,
                        params: {
                            eventName: eventFinalIntenttion.facebook || eventFinalIntenttion.name,
                        },
                    },
                    clevertap: {
                        type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["AnalyticsType"].CLEVERTAP,
                        params: {
                            eventName: eventFinalIntenttion.clevertap || eventFinalIntenttion.name,
                            eventProps: eventFinalIntenttion.params.map(function (items) {
                                return _this.getDynamicTagsParams(items);
                            }),
                        },
                    },
                },
                _a;
        }
    };
    AuthorizationUserViewModel.prototype.setDynamicTag = function () {
        return {
            initialIntention: {
                name: 'EE_intencion1_servicio',
                firebase: {
                    type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["AnalyticsType"].FIREBASE,
                    params: {
                        eventName: 'EE_intencion1_servicio',
                    },
                },
                facebook: {
                    type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["AnalyticsType"].FACEBOOK,
                    params: {
                        eventName: 'EE_intencion1_servicio',
                    },
                },
                clevertap: {
                    type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["AnalyticsType"].CLEVERTAP,
                    params: {
                        eventName: 'EE_intencion1_servicio',
                        eventProps: [
                            {
                                value: 'CURRENT_DATE',
                                label: 'Fecha_intencion1',
                            },
                            {
                                value: 'COMMERCE',
                                label: 'Comercio',
                            },
                        ],
                    },
                },
            },
            finalIntention: {
                name: 'EE_intencion2_servicio',
                firebase: {
                    type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["AnalyticsType"].FIREBASE,
                    params: {
                        eventName: 'EE_intencion2_servicio',
                    },
                },
                facebook: {
                    type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["AnalyticsType"].FACEBOOK,
                    params: {
                        eventName: 'EE_intencion2_servicio',
                    },
                },
                clevertap: {
                    type: _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["AnalyticsType"].CLEVERTAP,
                    params: {
                        eventName: 'EE_intencion2_servicio',
                        eventProps: [
                            {
                                value: 'CURRENT_DATE',
                                label: 'Fecha_intencion2',
                            },
                            {
                                value: 'COMMERCE',
                                label: 'Comercio',
                            },
                        ],
                    },
                },
            },
        };
    };
    AuthorizationUserViewModel.ɵfac = function AuthorizationUserViewModel_Factory(t) { return new (t || AuthorizationUserViewModel)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_nequi_features_application_data_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationDataInteractor"])); };
    AuthorizationUserViewModel.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: AuthorizationUserViewModel, factory: AuthorizationUserViewModel.ɵfac, providedIn: 'root' });
    return AuthorizationUserViewModel;
}());



/***/ }),

/***/ "oS4q":
/*!*****************************************************************************************************!*\
  !*** ./libs/features/open-banking/src/presentation/authorization/services/authorization.service.ts ***!
  \*****************************************************************************************************/
/*! exports provided: AuthorizationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizationService", function() { return AuthorizationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/open-banking/core */ "vY5Q");
/* harmony import */ var _nequi_utils_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/utils/string */ "p6rB");
/* harmony import */ var _view_models_authorization_user_view_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../view-models/authorization-user.view-model */ "mWeS");
/* harmony import */ var _pages_permissions_permissions_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/permissions/permissions.config */ "wU81");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");












var AuthorizationService = /** @class */ (function () {
    function AuthorizationService(alertService, authorizationInteractor, applicationInteractor, authorizationUserViewModel, translateProvider) {
        this.alertService = alertService;
        this.authorizationInteractor = authorizationInteractor;
        this.applicationInteractor = applicationInteractor;
        this.authorizationUserViewModel = authorizationUserViewModel;
        this.translateProvider = translateProvider;
    }
    AuthorizationService.prototype.openApp = function (params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var openAppEntity, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.applicationInteractor.openApp(params)];
                    case 1:
                        openAppEntity = _a.sent();
                        this.authorizationUserViewModel.fromOpenAppEntity(openAppEntity);
                        this.authorizationUserViewModel.isAppValidated = true;
                        return [2 /*return*/, true];
                    case 2:
                        error_1 = _a.sent();
                        return [2 /*return*/, this.processError(error_1)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AuthorizationService.prototype.acceptTerms = function (params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var error_2;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.authorizationInteractor.authorized(params)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 2:
                        error_2 = _a.sent();
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AuthorizationService.prototype.processError = function (error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var alert;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (error.errorId === _nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_3__["ErrorCode"].DATA_NOT_VALID_STATUS) {
                    if (error.errorMessage === _nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_3__["ErrorCode"].PENDING_ACCEPT_CONTRACT) {
                        this.authorizationUserViewModel.shouldShowTerms = true;
                    }
                    return [2 /*return*/, false];
                }
                alert = this.translateProvider.get(_pages_permissions_permissions_config__WEBPACK_IMPORTED_MODULE_6__["PermissionsConfig"].i18n.alerts.unavailableService);
                this.alertService.show({
                    messages: {
                        header: alert.title,
                        message: Object(_nequi_utils_string__WEBPACK_IMPORTED_MODULE_4__["createFormat"])(alert.message, [this.authorizationUserViewModel.appName]),
                        buttons: {
                            accept: alert.button,
                        },
                    },
                    handlers: {
                        accept: function () { },
                    },
                });
                return [2 /*return*/, false];
            });
        });
    };
    AuthorizationService.ɵfac = function AuthorizationService_Factory(t) { return new (t || AuthorizationService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_2__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_3__["AuthorizationInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_3__["ApplicationInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_view_models_authorization_user_view_model__WEBPACK_IMPORTED_MODULE_5__["AuthorizationUserViewModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_1__["TranslateProvider"])); };
    AuthorizationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: AuthorizationService, factory: AuthorizationService.ɵfac });
    return AuthorizationService;
}());



/***/ }),

/***/ "sebd":
/*!*********************************************************************************************!*\
  !*** ./libs/features/open-banking/src/presentation/middlewares/authorization.middleware.ts ***!
  \*********************************************************************************************/
/*! exports provided: AuthorizationMiddleware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizationMiddleware", function() { return AuthorizationMiddleware; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/open-banking/core */ "vY5Q");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_date__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/utils/date */ "tGfC");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _core_constans_tags__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/constans/tags */ "x+3Y");
/* harmony import */ var _authorization_pages_home_home_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../authorization/pages/home/home.config */ "78Oh");
/* harmony import */ var _authorization_services_authorization_card_modal_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../authorization/services/authorization-card-modal.service */ "hFhZ");
/* harmony import */ var _view_models_authorization_user_view_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../view-models/authorization-user.view-model */ "mWeS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");





















var AuthorizationMiddleware = /** @class */ (function () {
    function AuthorizationMiddleware(navController, applicationInteractor, authorizationUserViewModel, loadingService, translateProvider, firstTimeMessageBottomSheetService, authorizationCardModalService, analyticsInteractor) {
        this.navController = navController;
        this.applicationInteractor = applicationInteractor;
        this.authorizationUserViewModel = authorizationUserViewModel;
        this.loadingService = loadingService;
        this.translateProvider = translateProvider;
        this.firstTimeMessageBottomSheetService = firstTimeMessageBottomSheetService;
        this.authorizationCardModalService = authorizationCardModalService;
        this.analyticsInteractor = analyticsInteractor;
    }
    AuthorizationMiddleware.prototype.canActivate = function (route, _state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var app, params, isGetApp;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.translateProvider.loadModule(route.data.i18nModuleKey);
                        app = route.paramMap.get('app');
                        if (!app) return [3 /*break*/, 4];
                        params = {
                            app: app,
                            toReturn: _nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_5__["ToReturn"],
                        };
                        return [4 /*yield*/, this.getApp(params)];
                    case 1:
                        isGetApp = _a.sent();
                        if (!(isGetApp &&
                            this.authorizationUserViewModel.contractValidation === _nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_5__["ContractValidation"].YES)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.showBottomSheet()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 3:
                        this.openApp();
                        _a.label = 4;
                    case 4: return [2 /*return*/, false];
                }
            });
        });
    };
    AuthorizationMiddleware.prototype.getApp = function (params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var getAppEntity, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 7]);
                        return [4 /*yield*/, this.loadingService.show()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.applicationInteractor.getApp(params)];
                    case 2:
                        getAppEntity = _a.sent();
                        return [4 /*yield*/, this.authorizationUserViewModel.fromGetAppEntity(getAppEntity)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.loadingService.hideWithoutFeedback()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 5:
                        error_1 = _a.sent();
                        return [4 /*yield*/, this.loadingService.hideWithoutFeedback()];
                    case 6:
                        _a.sent();
                        return [2 /*return*/, false];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    AuthorizationMiddleware.prototype.openApp = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingService.show()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.authorizationCardModalService.goToApp()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.loadingService.hideWithoutFeedback()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthorizationMiddleware.prototype.showBottomSheet = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.authorizationUserViewModel.intentionTags) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.setAnalyticsInitialIntention(this.authorizationUserViewModel.intentionTags[_core_constans_tags__WEBPACK_IMPORTED_MODULE_9__["TagsConfig"].INITIAL_INTENTION])];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!this.authorizationUserViewModel.checkInfoSaved[_nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_5__["ScreenConfig"].MODAL].enable ||
                            this.authorizationUserViewModel.checkInfoSaved[_nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_5__["ScreenConfig"].MODAL].counter === 0) {
                            return [2 /*return*/, false];
                        }
                        if (this.authorizationUserViewModel.checkInfoSaved[_nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_5__["ScreenConfig"].MODAL].counter &&
                            this.authorizationUserViewModel.checkInfoSaved[_nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_5__["ScreenConfig"].MODAL].counter !== 0) {
                            this.authorizationUserViewModel.checkInfoSaved[_nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_5__["ScreenConfig"].MODAL].counter =
                                this.authorizationUserViewModel.checkInfoSaved[_nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_5__["ScreenConfig"].MODAL].counter - 1;
                            this.authorizationUserViewModel.saveScreenConfig(this.authorizationUserViewModel.checkInfoSaved, this.authorizationUserViewModel.appName);
                        }
                        return [4 /*yield*/, this.firstTimeMessageBottomSheetService.show({
                                icon: this.authorizationUserViewModel.modal.image,
                                message: this.authorizationUserViewModel.modal.title,
                                content: this.authorizationUserViewModel.modal.description,
                                cssClass: _authorization_pages_home_home_config__WEBPACK_IMPORTED_MODULE_10__["HomeConfig"].bottomSheet.cssClass,
                                url: this.authorizationUserViewModel.modal.url
                                    ? this.authorizationUserViewModel.modal.url
                                    : null,
                                button: {
                                    label: this.authorizationUserViewModel.modal.buttonLabel,
                                    fill: _authorization_pages_home_home_config__WEBPACK_IMPORTED_MODULE_10__["HomeConfig"].bottomSheet.button.fill,
                                    color: _authorization_pages_home_home_config__WEBPACK_IMPORTED_MODULE_10__["HomeConfig"].bottomSheet.button.color,
                                    action: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                            this.firstTimeMessageBottomSheetService.hide({ seen: true });
                                            return [2 /*return*/];
                                        });
                                    }); },
                                },
                                header: {
                                    view: true,
                                    action: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                            this.firstTimeMessageBottomSheetService.hide({ seen: true });
                                            this.navController.navigateForward(_authorization_pages_home_home_config__WEBPACK_IMPORTED_MODULE_10__["HomeConfig"].routes.closet);
                                            return [2 /*return*/];
                                        });
                                    }); },
                                },
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthorizationMiddleware.prototype.setAnalyticsInitialIntention = function (configTag) {
        var e_1, _a;
        var currentDate = Object(_nequi_utils_date__WEBPACK_IMPORTED_MODULE_7__["getFormattedDateTimes"])();
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(configTag.clevertap.params.eventProps), _c = _b.next(); !_c.done; _c = _b.next()) {
                var valuesToReplace = _c.value;
                if (valuesToReplace.value === _nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_5__["TagValuesToReplace"].CURRENT_DATE) {
                    configTag.clevertap.params.eventProps[0].value = currentDate;
                }
                if (valuesToReplace.value === _nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_5__["TagValuesToReplace"].COMMERCE) {
                    configTag.clevertap.params.eventProps[1].value = this.authorizationUserViewModel.appName;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var property = [];
        var valueProperty = [];
        var paramsLength = configTag.clevertap.params.eventProps.length;
        for (var i = 0; i < paramsLength; i++) {
            property.push(configTag.clevertap.params.eventProps[i].label);
            valueProperty.push(configTag.clevertap.params.eventProps[i].value);
        }
        this.analyticsInteractor.trackEvent({
            type: configTag.facebook.type,
            params: {
                eventName: configTag.facebook.params.eventName,
            },
        });
        this.analyticsInteractor.trackEvent({
            type: configTag.firebase.type,
            params: {
                eventName: configTag.firebase.params.eventName,
            },
        });
        this.analyticsInteractor.trackEvent({
            type: configTag.clevertap.type,
            params: {
                eventName: configTag.clevertap.params.eventName,
                eventProps: Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_8__["stringsArrayToObjectWithValues"])(property, valueProperty),
            },
        });
    };
    AuthorizationMiddleware.ɵfac = function AuthorizationMiddleware_Factory(t) { return new (t || AuthorizationMiddleware)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_nequi_features_open_banking_core__WEBPACK_IMPORTED_MODULE_5__["ApplicationInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_view_models_authorization_user_view_model__WEBPACK_IMPORTED_MODULE_12__["AuthorizationUserViewModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_4__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_6__["FirstTimeMessageBottomSheetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_authorization_services_authorization_card_modal_service__WEBPACK_IMPORTED_MODULE_11__["AuthorizationCardModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_3__["AnalyticsInteractor"])); };
    AuthorizationMiddleware.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjectable"]({ token: AuthorizationMiddleware, factory: AuthorizationMiddleware.ɵfac });
    return AuthorizationMiddleware;
}());



/***/ }),

/***/ "wU81":
/*!***********************************************************************************************************!*\
  !*** ./libs/features/open-banking/src/presentation/authorization/pages/permissions/permissions.config.ts ***!
  \***********************************************************************************************************/
/*! exports provided: PermissionsConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionsConfig", function() { return PermissionsConfig; });
var PermissionsConfig = Object.freeze({
    i18n: {
        alerts: {
            unavailableService: 'open-banking.alerts.unavailable-service',
        },
    },
    routes: {
        closet: '/admin/closet/',
    },
});


/***/ })

}]);
//# sourceMappingURL=authorization-pages-authorization-module.js.map