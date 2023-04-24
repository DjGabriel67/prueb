(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nequi-features-office-withdrawal-presentation"],{

/***/ "3Xmg":
/*!******************************************************************************************************!*\
  !*** ./libs/features/office-withdrawal/src/presentation/pages/how-do-i-do-it/how-do-i-do-it.page.ts ***!
  \******************************************************************************************************/
/*! exports provided: HowDoIDoItPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowDoIDoItPage", function() { return HowDoIDoItPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_office_withdrawal_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/office-withdrawal/core */ "wWPW");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _how_do_i_do_it_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./how-do-i-do-it.config */ "UJ1i");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../ui/src/lib/directives/animate-title-on-scroll/animate-title-on-scroll.directive */ "qbWi");














var HowDoIDoItPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HowDoIDoItPage, _super);
    function HowDoIDoItPage(navigatorProvider, translatePipe, officeWithdrawalInteractor, injector) {
        var _this = _super.call(this, injector) || this;
        _this.navigatorProvider = navigatorProvider;
        _this.translatePipe = translatePipe;
        _this.officeWithdrawalInteractor = officeWithdrawalInteractor;
        _this.config = _how_do_i_do_it_config__WEBPACK_IMPORTED_MODULE_7__["HowDoIdoItConfig"];
        return _this;
    }
    HowDoIDoItPage.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.officeWithdrawalInteractor.getOfficeWithdrawalParams()];
                    case 1:
                        _a.officeWithdrawalParams = _b.sent();
                        this.setParamsText();
                        return [2 /*return*/];
                }
            });
        });
    };
    HowDoIDoItPage.prototype.goToSiteToWithdrawMyMoney = function () {
        Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_5__["openUrl"])(this.cashoutLinkText);
    };
    HowDoIDoItPage.prototype.setParamsText = function () {
        this.cashoutLinkText = this.translatePipe.transform(this.config.i18n.help.link, {
            cashoutLink: this.officeWithdrawalParams.cashoutLink,
        });
        this.lastTimeText = this.translatePipe.transform(this.config.i18n.howDoIDoItPage.firstStep.title, {
            lastTime: this.officeWithdrawalParams.lastTime,
        });
    };
    HowDoIDoItPage.ɵfac = function HowDoIDoItPage_Factory(t) { return new (t || HowDoIDoItPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__["NavigatorProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_office_withdrawal_core__WEBPACK_IMPORTED_MODULE_4__["OfficeWithdrawalInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"])); };
    HowDoIDoItPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HowDoIDoItPage, selectors: [["nequi-how-do-i-do-it"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 65, vars: 28, consts: [[1, "nequi-header", "nequi-header--white"], ["slot", "start"], [3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], [1, "nequi-header__title", "ion-text-start"], ["scrollEvents", "true", "appAnimateTitleOnScroll", "", 1, "ion-padding-horizontal", "ion-content--white"], [1, "nequi-title"], ["lines", "none"], ["lines", "full"], [1, "ion-no-padding", "how-do-i-do-it__description-container"], ["size", "2"], [1, "how-do-i-do-it__img-container"], ["slot", "start", 1, "ion-icon--size-big", 3, "icon"], [1, "how-do-i-do-it__subtitle"], [1, "gray-text-color", "text--large", "ion-text-start"], ["sticky", "true", "color", "transparent"], [1, "gray-text-color", "text--large", "text_justify", "ion-text-start"], [1, "nequi-footer"], ["id", "how-do-i-do-it_next_button", "shape", "round", "color", "guayaba", "expand", "block", 1, "nequi-footer__button", 3, "click"]], template: function HowDoIDoItPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HowDoIDoItPage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-title", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-content", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-text", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-list", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-item", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-grid", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-row");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-col", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "ion-icon", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-col");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "h4", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-row");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-col");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ion-text", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "ion-item-divider", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ion-item", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ion-grid", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ion-row");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ion-col", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "ion-icon", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "ion-col");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "h4", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](37, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "ion-row");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "ion-col");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "ion-text", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](42, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "ion-item-divider", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "ion-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "ion-grid", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "ion-row");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "ion-col", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "ion-icon", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "ion-col");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "h4", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](53, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "ion-row");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "ion-col");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "ion-text", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](58, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "ion-footer", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "ion-button", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HowDoIDoItPage_Template_ion_button_click_61_listener() { return ctx.goToSiteToWithdrawMyMoney(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "ion-text");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](64, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 12, ctx.config.i18n.howDoIDoItPage.title), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 14, ctx.config.i18n.howDoIDoItPage.title), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("icon", ctx.config.i18n.howDoIDoItPage.firstStep.image);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.lastTimeText);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 16, ctx.config.i18n.howDoIDoItPage.firstStep.content), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("icon", ctx.config.i18n.howDoIDoItPage.secondStep.image);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](37, 18, ctx.config.i18n.howDoIDoItPage.secondStep.title), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](42, 20, ctx.config.i18n.howDoIDoItPage.secondStep.content), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("icon", ctx.config.i18n.howDoIDoItPage.thirdStep.image);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](53, 22, ctx.config.i18n.howDoIDoItPage.thirdStep.title), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](58, 24, ctx.config.i18n.howDoIDoItPage.thirdStep.content), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](64, 26, ctx.config.i18n.howDoIDoItPage.buttons.help));
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonContent"], _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_9__["AnimateTitleOnScrollDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonItemDivider"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonFooter"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: [".gray-text-color[_ngcontent-%COMP%] {\n  color: var(--gray-text-color);\n}\n\n.text--large[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.text--small[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.ion-icon--size-big[_ngcontent-%COMP%] {\n  zoom: 2;\n}\n\nion-col[_ngcontent-%COMP%] {\n  align-self: center;\n}\n\nion-item[_ngcontent-%COMP%] {\n  --padding-start: 0px;\n  --inner-padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-end: 0px;\n}\n\n.how-do-i-do-it__img-container[_ngcontent-%COMP%] {\n  width: 60px;\n  padding-bottom: 10px;\n}\n\n.how-do-i-do-it__description-container[_ngcontent-%COMP%] {\n  margin-bottom: 17px;\n}\n\n.how-do-i-do-it__subtitle[_ngcontent-%COMP%] {\n  margin-top: 0;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvaG93LWRvLWktZG8taXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQUE7QUFDRjs7QUFHRTtFQUNFLGVBQUE7QUFBSjs7QUFFRTtFQUNFLGVBQUE7QUFBSjs7QUFLRTtFQUNFLE9BQUE7QUFGSjs7QUFNQTtFQUNFLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxvQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQUhGOztBQU9FO0VBQ0UsV0FBQTtFQUNBLG9CQUFBO0FBSko7O0FBTUU7RUFDRSxtQkFBQTtBQUpKOztBQU1FO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUFKSiIsImZpbGUiOiJob3ctZG8taS1kby1pdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JheS10ZXh0LWNvbG9yIHtcbiAgY29sb3I6IHZhcigtLWdyYXktdGV4dC1jb2xvcik7XG59XG5cbi50ZXh0IHtcbiAgJi0tbGFyZ2Uge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICAmLS1zbWFsbCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG5cbi5pb24taWNvbiB7XG4gICYtLXNpemUtYmlnIHtcbiAgICB6b29tOiAyO1xuICB9XG59XG5cbmlvbi1jb2wge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbn1cblxuLmhvdy1kby1pLWRvLWl0IHtcbiAgJl9faW1nLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIH1cbiAgJl9fZGVzY3JpcHRpb24tY29udGFpbmVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxN3B4O1xuICB9XG4gICZfX3N1YnRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxufVxuIl19 */"] });
    return HowDoIDoItPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__["FeatureBasePage"]));



/***/ }),

/***/ "7ri3":
/*!*******************************************************************************************************!*\
  !*** ./libs/features/office-withdrawal/src/presentation/features-office-withdrawal-routing.module.ts ***!
  \*******************************************************************************************************/
/*! exports provided: FeaturesOfficeWithdrawalRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesOfficeWithdrawalRoutingModule", function() { return FeaturesOfficeWithdrawalRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _config_office_withdrawal_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/office-withdrawal.config */ "8se9");
/* harmony import */ var _middlewares_office_withdrawal_middleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./middlewares/office-withdrawal.middleware */ "PqKK");
/* harmony import */ var _pages_home_office_withdrawal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home/office-withdrawal.page */ "h3FX");
/* harmony import */ var _pages_how_do_i_do_it_how_do_i_do_it_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/how-do-i-do-it/how-do-i-do-it.page */ "3Xmg");









var routes = [
    {
        path: '',
        canActivate: [_middlewares_office_withdrawal_middleware__WEBPACK_IMPORTED_MODULE_4__["OfficeWithDrawalMiddleware"]],
        component: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Type"],
    },
    {
        path: 'how-do-i-do-it',
        component: _pages_how_do_i_do_it_how_do_i_do_it_page__WEBPACK_IMPORTED_MODULE_6__["HowDoIDoItPage"],
    },
    {
        path: 'home',
        component: _pages_home_office_withdrawal_page__WEBPACK_IMPORTED_MODULE_5__["OfficeWithdrawalPage"],
    },
];
var FeaturesOfficeWithdrawalRoutingModule = /** @class */ (function () {
    function FeaturesOfficeWithdrawalRoutingModule() {
    }
    FeaturesOfficeWithdrawalRoutingModule.ɵfac = function FeaturesOfficeWithdrawalRoutingModule_Factory(t) { return new (t || FeaturesOfficeWithdrawalRoutingModule)(); };
    FeaturesOfficeWithdrawalRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FeaturesOfficeWithdrawalRoutingModule });
    FeaturesOfficeWithdrawalRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__["I18nModuleResolver"].setup(routes, [_config_office_withdrawal_config__WEBPACK_IMPORTED_MODULE_3__["OfficeWithDrawalConfig"].i18n.moduleKey])),
            ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return FeaturesOfficeWithdrawalRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FeaturesOfficeWithdrawalRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "8se9":
/*!********************************************************************************!*\
  !*** ./libs/features/office-withdrawal/src/config/office-withdrawal.config.ts ***!
  \********************************************************************************/
/*! exports provided: OfficeWithDrawalConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficeWithDrawalConfig", function() { return OfficeWithDrawalConfig; });
var config = {
    i18n: {
        moduleKey: 'office-withdrawal',
    },
};
var OfficeWithDrawalConfig = Object.freeze(config);


/***/ }),

/***/ "DGMZ":
/*!*****************************************************************************************************!*\
  !*** ./libs/features/office-withdrawal/src/presentation/pages/home/office-withdrawal.view-model.ts ***!
  \*****************************************************************************************************/
/*! exports provided: OfficeWithdrawalViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficeWithdrawalViewModel", function() { return OfficeWithdrawalViewModel; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _office_withdrawal_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./office-withdrawal.config */ "fHHY");


var OfficeWithdrawalViewModel = /** @class */ (function () {
    function OfficeWithdrawalViewModel() {
        this.config = _office_withdrawal_config__WEBPACK_IMPORTED_MODULE_1__["OfficeWithdrawalConfig"];
    }
    OfficeWithdrawalViewModel.prototype.initForm = function (officeWithdrawalParams) {
        this.minAmount = Number(officeWithdrawalParams.minValue);
        this.buildFormGroup(officeWithdrawalParams);
    };
    OfficeWithdrawalViewModel.prototype.buildBottomsheetItems = function (messages) {
        return [
            {
                label: messages.product.label,
                value: messages.product.name,
            },
            {
                label: messages.amount,
                value: "$" + this.amount.value.toLocaleString().replace(/,/g, '.'),
            },
            {
                label: messages.type.label,
                value: messages.type.name,
            },
        ];
    };
    OfficeWithdrawalViewModel.prototype.buildFormGroup = function (officeWithdrawalParams) {
        this.createControls(officeWithdrawalParams);
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            amount: this.amount,
            pocket: this.pocket,
        });
    };
    OfficeWithdrawalViewModel.prototype.createControls = function (officeWithdrawalParams) {
        this.pocket = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null);
        this.amount = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(Number(officeWithdrawalParams.minValue)),
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(this.config.validators.multiplesOfFifty),
        ]);
    };
    return OfficeWithdrawalViewModel;
}());



/***/ }),

/***/ "MGus":
/*!*******************************************************************!*\
  !*** ./libs/features/office-withdrawal/src/presentation/index.ts ***!
  \*******************************************************************/
/*! exports provided: FeaturesOfficeWithdrawalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _features_office_withdrawal_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./features-office-withdrawal.module */ "rF5r");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeaturesOfficeWithdrawalModule", function() { return _features_office_withdrawal_module__WEBPACK_IMPORTED_MODULE_0__["FeaturesOfficeWithdrawalModule"]; });




/***/ }),

/***/ "PqKK":
/*!******************************************************************************************************!*\
  !*** ./libs/features/office-withdrawal/src/presentation/middlewares/office-withdrawal.middleware.ts ***!
  \******************************************************************************************************/
/*! exports provided: OfficeWithDrawalMiddleware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficeWithDrawalMiddleware", function() { return OfficeWithDrawalMiddleware; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_notifications_presentation___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/notifications/presentation/ */ "Wf/D");
/* harmony import */ var _nequi_features_office_withdrawal_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/office-withdrawal/core */ "wWPW");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _middleware_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./middleware.config */ "eBBt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");














var OfficeWithDrawalMiddleware = /** @class */ (function () {
    function OfficeWithDrawalMiddleware(loadingService, toastService, alertController, translateProvider, navigatorProvider, officeWithdrawalInteractor, cardModalService, moduleConfigProvider, router) {
        this.loadingService = loadingService;
        this.toastService = toastService;
        this.alertController = alertController;
        this.translateProvider = translateProvider;
        this.navigatorProvider = navigatorProvider;
        this.officeWithdrawalInteractor = officeWithdrawalInteractor;
        this.cardModalService = cardModalService;
        this.moduleConfigProvider = moduleConfigProvider;
        this.router = router;
        this.viewModel = new _nequi_features_notifications_presentation___WEBPACK_IMPORTED_MODULE_4__["HomeViewModel"]();
        this.config = _middleware_config__WEBPACK_IMPORTED_MODULE_7__["MiddlewareConfig"];
    }
    OfficeWithDrawalMiddleware.prototype.canActivate = function (_route, _state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var params, messages, alert_1;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.translateProvider.loadModule(this.moduleConfigProvider.i18n.moduleKey)];
                    case 1:
                        _a.sent();
                        params = this.router.getCurrentNavigation().extras
                            .state;
                        messages = this.translateProvider.get(this.config.i18n.alerts);
                        if (params === null || params === void 0 ? void 0 : params.tourHowToDoIt) {
                            return [2 /*return*/, this.navigatorProvider.navigateForward(this.config.routes.howDoIDoIt)];
                        }
                        if (!(params === null || params === void 0 ? void 0 : params.regretted)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.alertController.create({
                                header: messages.title,
                                cssClass: 'nequi-alert',
                                message: messages.content,
                                buttons: [
                                    {
                                        text: messages.buttons.cancel,
                                        cssClass: 'normal-font-weight',
                                    },
                                    {
                                        text: messages.buttons.accept,
                                        handler: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                            return [2 /*return*/, this.executeReverse()];
                                        }); }); },
                                    },
                                ],
                            })];
                    case 2:
                        alert_1 = _a.sent();
                        return [4 /*yield*/, alert_1.present()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, false];
                    case 4:
                        this.navigatorProvider.navigateForward(this.config.routes.officeWithdrawal);
                        return [2 /*return*/];
                }
            });
        });
    };
    OfficeWithDrawalMiddleware.prototype.executeReverse = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var message, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        message = this.translateProvider.get(this.config.i18n.toastsSuccess);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        return [4 /*yield*/, this.loadingService.show()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.officeWithdrawalInteractor.reverse()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.loadingService.hideWithoutFeedback()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.toastService.showSuccess(message.regretted.content)];
                    case 5:
                        _a.sent();
                        this.navigatorProvider.navigateRoot(this.config.routes.backpack);
                        return [3 /*break*/, 7];
                    case 6:
                        error_1 = _a.sent();
                        this.processErrors(error_1);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    OfficeWithDrawalMiddleware.prototype.processErrors = function (error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loadingService.hideWithoutFeedback();
                        if (!(error.constructor.name === _nequi_features_office_withdrawal_core__WEBPACK_IMPORTED_MODULE_5__["ReverseBranchWithdrawalException"].name)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.onShowCardModal()];
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
    OfficeWithDrawalMiddleware.prototype.onShowCardModal = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var i18n;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i18n = this.translateProvider.get(this.config.i18n.modalRegretted);
                        return [4 /*yield*/, this.cardModalService.show({
                                imgPath: i18n.icon,
                                title: i18n.header,
                                content: i18n.message,
                                buttons: [
                                    {
                                        text: i18n.buttons.next,
                                    },
                                    {
                                        text: i18n.buttons.recharge,
                                        color: 'medianoche',
                                        handler: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                            return [2 /*return*/, this.navigatorProvider.navigateRoot(this.config.routes.cashIn)];
                                        }); }); },
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
    OfficeWithDrawalMiddleware.ɵfac = function OfficeWithDrawalMiddleware_Factory(t) { return new (t || OfficeWithDrawalMiddleware)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_6__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_3__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_3__["NavigatorProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_nequi_features_office_withdrawal_core__WEBPACK_IMPORTED_MODULE_5__["OfficeWithdrawalInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_6__["CardModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_3__["ModuleConfigProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
    OfficeWithDrawalMiddleware.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: OfficeWithDrawalMiddleware, factory: OfficeWithDrawalMiddleware.ɵfac });
    return OfficeWithDrawalMiddleware;
}());



/***/ }),

/***/ "UJ1i":
/*!********************************************************************************************************!*\
  !*** ./libs/features/office-withdrawal/src/presentation/pages/how-do-i-do-it/how-do-i-do-it.config.ts ***!
  \********************************************************************************************************/
/*! exports provided: HowDoIdoItConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowDoIdoItConfig", function() { return HowDoIdoItConfig; });
var HowDoIdoItConfig = Object.freeze({
    i18n: {
        howDoIDoItPage: {
            title: 'office-withdrawal.how-do-i-do-it-page.title',
            firstStep: {
                title: 'office-withdrawal.how-do-i-do-it-page.first-step.title',
                content: 'office-withdrawal.how-do-i-do-it-page.first-step.content',
                image: '/assets/images/office-withdrawal/time.svg',
            },
            secondStep: {
                title: 'office-withdrawal.how-do-i-do-it-page.second-step.title',
                content: 'office-withdrawal.how-do-i-do-it-page.second-step.content',
                image: '/assets/images/office-withdrawal/person.svg',
            },
            thirdStep: {
                title: 'office-withdrawal.how-do-i-do-it-page.third-step.title',
                content: 'office-withdrawal.how-do-i-do-it-page.third-step.content',
                image: '/assets/images/office-withdrawal/cash.svg',
            },
            buttons: {
                help: 'office-withdrawal.how-do-i-do-it-page.buttons.help',
            },
        },
        help: {
            link: 'office-withdrawal.help.link',
        },
    },
});


/***/ }),

/***/ "eBBt":
/*!*******************************************************************************************!*\
  !*** ./libs/features/office-withdrawal/src/presentation/middlewares/middleware.config.ts ***!
  \*******************************************************************************************/
/*! exports provided: MiddlewareConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiddlewareConfig", function() { return MiddlewareConfig; });
var MiddlewareConfig = Object.freeze({
    i18n: {
        alerts: 'office-withdrawal.alerts.reverse-withdrawal',
        toastsSuccess: 'office-withdrawal.toasts-success',
        modalRegretted: 'office-withdrawal.modals.regretted',
    },
    routes: {
        officeWithdrawal: '/admin/office-withdrawal/home',
        howDoIDoIt: '/admin/office-withdrawal/how-do-i-do-it',
        backpack: '/admin/dashboard',
        cashIn: '/admin/cash-in',
    },
});


/***/ }),

/***/ "fHHY":
/*!*************************************************************************************************!*\
  !*** ./libs/features/office-withdrawal/src/presentation/pages/home/office-withdrawal.config.ts ***!
  \*************************************************************************************************/
/*! exports provided: OfficeWithdrawalConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficeWithdrawalConfig", function() { return OfficeWithdrawalConfig; });
/* harmony import */ var libs_features_commons_src_presentation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! libs/features/commons/src/presentation */ "BT0d");

var OfficeWithdrawalConfig = Object.freeze({
    i18n: {
        howDoIDoItPage: {
            title: 'office-withdrawal.how-do-i-do-it-page.title',
            firstStep: {
                title: 'office-withdrawal.how-do-i-do-it-page.first-step.title',
                content: 'office-withdrawal.how-do-i-do-it-page.first-step.content',
            },
            secondStep: {
                title: 'office-withdrawal.how-do-i-do-it-page.second-step.title',
                content: 'office-withdrawal.how-do-i-do-it-page.second-step.content',
            },
            thirdStep: {
                title: 'office-withdrawal.how-do-i-do-it-page.third-step.title',
                content: 'office-withdrawal.how-do-i-do-it-page.third-step.content',
            },
            buttons: {
                help: 'office-withdrawal.how-do-i-do-it-page.buttons.help',
            },
        },
        mainPage: {
            title: 'office-withdrawal.main-page.title',
            detail: {
                title: 'office-withdrawal.main-page.detail.title',
                content: 'office-withdrawal.main-page.detail.content',
            },
            inputs: {
                amount: {
                    placeholder: 'office-withdrawal.main-page.inputs.amount.placeholder',
                    description: 'office-withdrawal.main-page.inputs.amount.description',
                    errors: {
                        required: 'office-withdrawal.main-page.inputs.amount.errors.required',
                        minAmount: 'office-withdrawal.main-page.inputs.amount.errors.minAmount',
                        multiplesOfFifty: 'office-withdrawal.main-page.inputs.amount.errors.multiplesOfFifty',
                    },
                },
            },
            buttons: {
                next: 'office-withdrawal.main-page.buttons.next',
            },
        },
        boottomSheet: 'office-withdrawal.boottom-sheet',
        modals: 'office-withdrawal.modals',
        transactionSuccess: 'office-withdrawal.modals.transaction-success',
        modalTransactionParam: 'office-withdrawal.modals.transaction-success.header',
        help: {
            label: 'office-withdrawal.help.label',
            link: 'office-withdrawal.help.link',
        },
        errors: 'office-withdrawal.errors',
    },
    validators: {
        minLength: 3000000,
        pattern: libs_features_commons_src_presentation__WEBPACK_IMPORTED_MODULE_0__["CustomInputValidators"].patterns.onlyNumbers,
        multiplesOfFifty: libs_features_commons_src_presentation__WEBPACK_IMPORTED_MODULE_0__["CustomInputValidators"].patterns.multiplesOfFifty,
    },
    mainPage: { icon: 'assets/images/icons/calendar-blue.svg' },
    routes: {
        backpack: '/admin/dashboard',
    },
});


/***/ }),

/***/ "h3FX":
/*!***********************************************************************************************!*\
  !*** ./libs/features/office-withdrawal/src/presentation/pages/home/office-withdrawal.page.ts ***!
  \***********************************************************************************************/
/*! exports provided: OfficeWithdrawalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficeWithdrawalPage", function() { return OfficeWithdrawalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/money-management/presentation */ "JFCQ");
/* harmony import */ var _nequi_features_office_withdrawal_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/office-withdrawal/core */ "wWPW");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _office_withdrawal_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./office-withdrawal.config */ "fHHY");
/* harmony import */ var _office_withdrawal_view_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./office-withdrawal.view-model */ "DGMZ");
/* harmony import */ var _money_management_src_presentation_components_balance_header_balance_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../money-management/src/presentation/components/balance-header/balance-header.component */ "1rl1");
/* harmony import */ var _ui_src_lib_directives_form_content_style_form_content_style_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../ui/src/lib/directives/form-content-style/form-content-style.directive */ "+XT3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ui_src_lib_components_busy_indicator_busy_indicator_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../ui/src/lib/components/busy-indicator/busy-indicator.component */ "N6nj");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ui_src_lib_directives_control_errors_control_errors_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../ui/src/lib/directives/control-errors/control-errors.directive */ "XHcO");
/* harmony import */ var _ui_src_lib_controls_nequi_input_currency_nequi_input_currency_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../ui/src/lib/controls/nequi-input-currency/nequi-input-currency.component */ "VG0r");
/* harmony import */ var _money_management_src_presentation_controls_origin_money_control_origin_money_control_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../money-management/src/presentation/controls/origin-money-control/origin-money-control.component */ "O3Yd");
























function OfficeWithdrawalPage_app_busy_indicator_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-busy-indicator", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-skeleton-text", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-skeleton-text", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showSkeleton", true);
} }
var _c0 = function (a0, a1, a2) { return { required: a0, min: a1, pattern: a2 }; };
var _c1 = function (a0, a1) { return { control: a0, messages: a1 }; };
function OfficeWithdrawalPage_form_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "nequi-input-currency", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-text", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "nequi-origin-money-control", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.viewModel.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nequiControlErrors", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](22, _c1, ctx_r1.viewModel.amount, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](18, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 8, ctx_r1.config.i18n.mainPage.inputs.amount.errors.required), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 10, ctx_r1.minValueTextError), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 12, ctx_r1.config.i18n.mainPage.inputs.amount.errors.multiplesOfFifty))));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 14, ctx_r1.config.i18n.mainPage.inputs.amount.placeholder), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("control", ctx_r1.viewModel.amount)("allowNegative", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 16, ctx_r1.minValueTextDescription), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", true)("formControl", ctx_r1.viewModel.pocket);
} }
var OfficeWithdrawalPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(OfficeWithdrawalPage, _super);
    function OfficeWithdrawalPage(injector, officeWithdrawalInteractor, translatePipe, alertController, cardModalService) {
        var _this = _super.call(this, injector) || this;
        _this.officeWithdrawalInteractor = officeWithdrawalInteractor;
        _this.translatePipe = translatePipe;
        _this.alertController = alertController;
        _this.cardModalService = cardModalService;
        _this.balanceToogle = false;
        _this.config = _office_withdrawal_config__WEBPACK_IMPORTED_MODULE_9__["OfficeWithdrawalConfig"];
        _this.viewModel = new _office_withdrawal_view_model__WEBPACK_IMPORTED_MODULE_10__["OfficeWithdrawalViewModel"]();
        return _this;
    }
    OfficeWithdrawalPage.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.initForm()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OfficeWithdrawalPage.prototype.goBack = function () {
        this.navigatorProvider.back();
    };
    OfficeWithdrawalPage.prototype.whereToWithdrawMyMoney = function () {
        Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_7__["openUrl"])(this.cashoutLinkText);
        this.navigatorProvider.navigateRoot(this.config.routes.backpack);
    };
    OfficeWithdrawalPage.prototype.setParamsText = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var minValueFormated;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                minValueFormated = "$" + this.officeWithdrawalParams.minValue
                    .toLocaleString()
                    .replace(/,/g, '.');
                this.cashoutLinkText = this.translatePipe.transform(_office_withdrawal_config__WEBPACK_IMPORTED_MODULE_9__["OfficeWithdrawalConfig"].i18n.help.link, {
                    cashoutLink: this.officeWithdrawalParams.cashoutLink,
                });
                this.minValueTextDescription = this.translatePipe.transform(this.config.i18n.mainPage.inputs.amount.description, { minValue: minValueFormated });
                this.minValueTextError = this.translatePipe.transform(this.config.i18n.mainPage.inputs.amount.errors.minAmount, { minValue: minValueFormated });
                return [2 /*return*/];
            });
        });
    };
    OfficeWithdrawalPage.prototype.executeWithdraw = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var pocket, transaction;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                pocket = this.viewModel.pocket.value;
                transaction = new _nequi_features_office_withdrawal_core__WEBPACK_IMPORTED_MODULE_5__["OfficeWithdrawalTransaction"]()
                    .withPocket(pocket)
                    .withAmount(this.viewModel.amount.value);
                _super.prototype.executeTransaction.call(this, transaction);
                return [2 /*return*/];
            });
        });
    };
    OfficeWithdrawalPage.prototype.setOriginMoney = function (transaction) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var pocket;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (transaction.pocket) {
                            return [2 /*return*/, transaction];
                        }
                        this.shouldSelectPocket = true;
                        return [4 /*yield*/, this.originMoneyService.openModal(this.officeWithdrawalParams.minValue)];
                    case 1:
                        pocket = _a.sent();
                        return [2 /*return*/, new _nequi_features_office_withdrawal_core__WEBPACK_IMPORTED_MODULE_5__["OfficeWithdrawalTransaction"]().withAmount(transaction.amount).withPocket(pocket)];
                }
            });
        });
    };
    OfficeWithdrawalPage.prototype.onTransactionSuccess = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.showModal();
                return [2 /*return*/];
            });
        });
    };
    OfficeWithdrawalPage.prototype.onTransactionFailed = function (error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (error.constructor.name === _nequi_features_office_withdrawal_core__WEBPACK_IMPORTED_MODULE_5__["WithdrawalTimeOutException"].name) {
                            this.presentAlert();
                        }
                        return [4 /*yield*/, this.toastService.showError(error.message)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OfficeWithdrawalPage.prototype.getConfirmationInfo = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                messages = this.translateProvider.get(_office_withdrawal_config__WEBPACK_IMPORTED_MODULE_9__["OfficeWithdrawalConfig"].i18n.boottomSheet);
                return [2 /*return*/, {
                        title: messages.confirm.title,
                        subtitle: messages.confirm.subtitle,
                        items: this.viewModel.buildBottomsheetItems(messages.confirm.items),
                        confirmLabel: messages.confirm.accept,
                    }];
            });
        });
    };
    OfficeWithdrawalPage.prototype.initForm = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.isLoading = true;
                        _a = this;
                        return [4 /*yield*/, this.officeWithdrawalInteractor.getOfficeWithdrawalParams()];
                    case 1:
                        _a.officeWithdrawalParams = _b.sent();
                        this.viewModel.initForm(this.officeWithdrawalParams);
                        this.setParamsText();
                        this.isLoading = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    OfficeWithdrawalPage.prototype.showModal = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var amountFormated, messages, content;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        amountFormated = "$" + this.viewModel.amount.value.toLocaleString().replace(/,/g, '.');
                        messages = this.translateProvider.get(_office_withdrawal_config__WEBPACK_IMPORTED_MODULE_9__["OfficeWithdrawalConfig"].i18n.transactionSuccess);
                        content = this.translatePipe.transform(_office_withdrawal_config__WEBPACK_IMPORTED_MODULE_9__["OfficeWithdrawalConfig"].i18n.modalTransactionParam, {
                            amount: amountFormated,
                        });
                        return [4 /*yield*/, this.cardModalService.show({
                                title: content,
                                imgPath: messages.icon,
                                content: messages.message,
                                buttons: [
                                    {
                                        text: messages.buttons.next,
                                        handler: function () { return _this.navigatorProvider.navigateRoot(_this.config.routes.backpack); },
                                    },
                                    {
                                        isLink: true,
                                        text: this.translateProvider.get(_office_withdrawal_config__WEBPACK_IMPORTED_MODULE_9__["OfficeWithdrawalConfig"].i18n.help.label),
                                        handler: function () { return _this.whereToWithdrawMyMoney(); },
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
    OfficeWithdrawalPage.prototype.presentAlert = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages, alert;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        messages = this.translateProvider.get(_office_withdrawal_config__WEBPACK_IMPORTED_MODULE_9__["OfficeWithdrawalConfig"].i18n.errors);
                        return [4 /*yield*/, this.alertController.create({
                                header: messages.default.title,
                                cssClass: 'nequi-alert',
                                message: messages.default.content,
                                buttons: [
                                    {
                                        text: messages.default.buttons.okButton,
                                        handler: function () {
                                            _this.executeWithdraw();
                                        },
                                    },
                                ],
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OfficeWithdrawalPage.ɵfac = function OfficeWithdrawalPage_Factory(t) { return new (t || OfficeWithdrawalPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_features_office_withdrawal_core__WEBPACK_IMPORTED_MODULE_5__["OfficeWithdrawalInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_6__["CardModalService"])); };
    OfficeWithdrawalPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OfficeWithdrawalPage, selectors: [["nequi-office-withdrawal"]], viewQuery: function OfficeWithdrawalPage_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_4__["OriginMoneyControlComponent"], 1);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.originMoneyControl = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 42, vars: 25, consts: [[1, "nequi-header", "nequi-header--white"], ["slot", "start"], [3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], ["slot", "end"], ["slot", "icon-only", 3, "name"], [1, "nequi-header__title", "ion-text-start"], [3, "isDarkTheme", "isShow"], ["appFormContentStyle", "", 1, "ion-padding-horizontal", "ion-content--white"], [1, "nequi-title"], ["lines", "full"], [1, "ion-no-padding", "office-withdrawal__description-container"], ["size", "2"], [1, "office-withdrawal__img-container"], [3, "src"], [1, "office-withdrawal__subtitle"], [1, "gray-text-color", "text__large", "ion-text-start"], [3, "showSkeleton", 4, "ngIf"], ["class", "form", 3, "formGroup", 4, "ngIf"], [1, "nequi-footer"], ["id", "office-withdrawal_next_button", "shape", "round", "color", "guayaba", "expand", "block", 1, "nequi-footer__button", 3, "disabled", "click"], [1, "nequi-footer__link"], [1, "nequi-footer__link", 3, "click"], [3, "showSkeleton"], ["skeleton", "", 1, "form"], ["animated", "", 1, "skeleton__square--large"], ["animated", "", 1, "skeleton__square--small"], [1, "form", 3, "formGroup"], [1, "nequi-item", "margin-bottom-8", 3, "nequiControlErrors"], ["position", "floating", 1, "goal-edit__label-amount", "nequi-item__label"], ["tooltipType", "error", "inputClass", "nequi-item__input", 1, "sc-ion-input-ios-h", 3, "control", "allowNegative"], [1, "gray-text-color", "text__small"], [3, "hidden", "formControl"]], template: function OfficeWithdrawalPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OfficeWithdrawalPage_Template_ion_button_click_3_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-buttons", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OfficeWithdrawalPage_Template_ion_button_click_6_listener() { return ctx.balanceToogle = !ctx.balanceToogle; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "ion-icon", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-title", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "app-balance-header", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-content", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-text", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-item", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-grid", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-row");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-col", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "ion-img", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-col");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h4", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ion-row");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ion-text", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](29, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, OfficeWithdrawalPage_app_busy_indicator_30_Template, 4, 1, "app-busy-indicator", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, OfficeWithdrawalPage_form_31_Template, 13, 25, "form", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "ion-footer", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "ion-button", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OfficeWithdrawalPage_Template_ion_button_click_34_listener() { return ctx.executeWithdraw(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "ion-text");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](37, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "p", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "a", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OfficeWithdrawalPage_Template_a_click_39_listener() { return ctx.whereToWithdrawMyMoney(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](41, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", ctx.balanceToogle ? "chevron-up-outline" : "chevron-down-outline");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 13, ctx.config.i18n.mainPage.title), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isDarkTheme", false)("isShow", ctx.balanceToogle);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 15, ctx.config.i18n.mainPage.title), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.config.mainPage.icon);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 17, ctx.config.i18n.mainPage.detail.title), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](29, 19, ctx.config.i18n.mainPage.detail.content), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.viewModel.form && !ctx.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", (ctx.viewModel.form == null ? null : ctx.viewModel.form.invalid) || ctx.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](37, 21, ctx.config.i18n.mainPage.buttons.next));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](41, 23, ctx.config.i18n.help.label), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _money_management_src_presentation_components_balance_header_balance_header_component__WEBPACK_IMPORTED_MODULE_11__["BalanceHeaderComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ui_src_lib_directives_form_content_style_form_content_style_directive__WEBPACK_IMPORTED_MODULE_12__["FormContentStyleDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonImg"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFooter"], _ui_src_lib_components_busy_indicator_busy_indicator_component__WEBPACK_IMPORTED_MODULE_14__["BusyIndicatorComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSkeletonText"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormGroupDirective"], _ui_src_lib_directives_control_errors_control_errors_directive__WEBPACK_IMPORTED_MODULE_16__["ControlErrorsDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ui_src_lib_controls_nequi_input_currency_nequi_input_currency_component__WEBPACK_IMPORTED_MODULE_17__["NequiInputCurrencyComponent"], _money_management_src_presentation_controls_origin_money_control_origin_money_control_component__WEBPACK_IMPORTED_MODULE_18__["OriginMoneyControlComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormControlDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]], styles: [".gray-text-color[_ngcontent-%COMP%] {\n  color: var(--gray-text-color);\n}\n\n.text__large[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.text__small[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.form[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n.office-withdrawal__img-container[_ngcontent-%COMP%] {\n  width: 40px;\n}\n\n.office-withdrawal__description-container[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.office-withdrawal__subtitle[_ngcontent-%COMP%] {\n  margin-top: 0;\n  font-size: 18px;\n}\n\n.nequi-footer__button[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n\n.nequi-footer[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n\n.skeleton__container[_ngcontent-%COMP%] {\n  height: -moz-max-content;\n  height: max-content;\n}\n\n.skeleton__square--large[_ngcontent-%COMP%] {\n  height: 48px;\n  margin-bottom: 8px;\n}\n\n.skeleton__square--small[_ngcontent-%COMP%] {\n  height: 16px;\n}\n\n.skeleton__square--small[_ngcontent-%COMP%], .skeleton__square--large[_ngcontent-%COMP%] {\n  border-radius: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvb2ZmaWNlLXdpdGhkcmF3YWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQUE7QUFDRjs7QUFHRTtFQUNFLGVBQUE7QUFBSjs7QUFFRTtFQUNFLGVBQUE7QUFBSjs7QUFHQTtFQUNFLGdCQUFBO0FBQUY7O0FBR0U7RUFDRSxXQUFBO0FBQUo7O0FBRUU7RUFDRSxtQkFBQTtBQUFKOztBQUVFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUFBSjs7QUFJQTtFQUNFLG1CQUFBO0FBREY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0FBQUY7O0FBSUU7RUFDRSx3QkFBQTtFQUFBLG1CQUFBO0FBREo7O0FBR0U7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFHRTtFQUNFLFlBQUE7QUFESjs7QUFHRTtFQUVFLGtCQUFBO0FBRkoiLCJmaWxlIjoib2ZmaWNlLXdpdGhkcmF3YWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyYXktdGV4dC1jb2xvciB7XG4gIGNvbG9yOiB2YXIoLS1ncmF5LXRleHQtY29sb3IpO1xufVxuXG4udGV4dCB7XG4gICZfX2xhcmdlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgJl9fc21hbGwge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxufVxuLmZvcm0ge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLm9mZmljZS13aXRoZHJhd2FsIHtcbiAgJl9faW1nLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDQwcHg7XG4gIH1cbiAgJl9fZGVzY3JpcHRpb24tY29udGFpbmVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG4gICZfX3N1YnRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxufVxuXG4ubmVxdWktZm9vdGVyX19idXR0b24ge1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuLm5lcXVpLWZvb3RlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xufVxuXG4uc2tlbGV0b24ge1xuICAmX19jb250YWluZXIge1xuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XG4gIH1cbiAgJl9fc3F1YXJlLS1sYXJnZSB7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgfVxuICAmX19zcXVhcmUtLXNtYWxsIHtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gIH1cbiAgJl9fc3F1YXJlLS1zbWFsbCxcbiAgJl9fc3F1YXJlLS1sYXJnZSB7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB9XG59XG4iXX0= */"] });
    return OfficeWithdrawalPage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_3__["TransactionBasePage"]));



/***/ }),

/***/ "rF5r":
/*!***********************************************************************************************!*\
  !*** ./libs/features/office-withdrawal/src/presentation/features-office-withdrawal.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: FeaturesOfficeWithdrawalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesOfficeWithdrawalModule", function() { return FeaturesOfficeWithdrawalModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_contacts_presentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/contacts/presentation */ "59nv");
/* harmony import */ var _nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/money-management/presentation */ "JFCQ");
/* harmony import */ var _nequi_features_style_manager_presentation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/style-manager/presentation */ "An21");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _config_office_withdrawal_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config/office-withdrawal.config */ "8se9");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core */ "wWPW");
/* harmony import */ var _features_office_withdrawal_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./features-office-withdrawal-routing.module */ "7ri3");
/* harmony import */ var _middlewares_office_withdrawal_middleware__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./middlewares/office-withdrawal.middleware */ "PqKK");
/* harmony import */ var _pages_home_office_withdrawal_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/home/office-withdrawal.page */ "h3FX");
/* harmony import */ var _pages_how_do_i_do_it_how_do_i_do_it_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/how-do-i-do-it/how-do-i-do-it.page */ "3Xmg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");















var FeaturesOfficeWithdrawalModule = /** @class */ (function () {
    function FeaturesOfficeWithdrawalModule() {
    }
    FeaturesOfficeWithdrawalModule.ɵfac = function FeaturesOfficeWithdrawalModule_Factory(t) { return new (t || FeaturesOfficeWithdrawalModule)(); };
    FeaturesOfficeWithdrawalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: FeaturesOfficeWithdrawalModule });
    FeaturesOfficeWithdrawalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ providers: [
            {
                provide: _nequi_features_commons__WEBPACK_IMPORTED_MODULE_2__["ModuleConfigProvider"],
                useValue: _config_office_withdrawal_config__WEBPACK_IMPORTED_MODULE_8__["OfficeWithDrawalConfig"],
            },
            _middlewares_office_withdrawal_middleware__WEBPACK_IMPORTED_MODULE_11__["OfficeWithDrawalMiddleware"],
            {
                provide: _core__WEBPACK_IMPORTED_MODULE_9__["OfficeWithdrawalInteractor"],
                deps: [_core__WEBPACK_IMPORTED_MODULE_9__["OfficeWithdrawalRepository"]],
                useClass: _core__WEBPACK_IMPORTED_MODULE_9__["OfficeWithdrawalInteractor"],
            },
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _features_office_withdrawal_routing_module__WEBPACK_IMPORTED_MODULE_10__["FeaturesOfficeWithdrawalRoutingModule"],
                _nequi_ui__WEBPACK_IMPORTED_MODULE_6__["NequiComponentsModule"],
                _nequi_features_style_manager_presentation__WEBPACK_IMPORTED_MODULE_5__["FeaturesStyleManagerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _nequi_ui__WEBPACK_IMPORTED_MODULE_6__["NequiUiModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _nequi_features_contacts_presentation__WEBPACK_IMPORTED_MODULE_3__["FeaturesContactsModule"],
                _nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_4__["FeaturesMoneyManagementModule"],
            ]] });
    return FeaturesOfficeWithdrawalModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](FeaturesOfficeWithdrawalModule, { declarations: [_pages_home_office_withdrawal_page__WEBPACK_IMPORTED_MODULE_12__["OfficeWithdrawalPage"], _pages_how_do_i_do_it_how_do_i_do_it_page__WEBPACK_IMPORTED_MODULE_13__["HowDoIDoItPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _features_office_withdrawal_routing_module__WEBPACK_IMPORTED_MODULE_10__["FeaturesOfficeWithdrawalRoutingModule"],
        _nequi_ui__WEBPACK_IMPORTED_MODULE_6__["NequiComponentsModule"],
        _nequi_features_style_manager_presentation__WEBPACK_IMPORTED_MODULE_5__["FeaturesStyleManagerModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _nequi_ui__WEBPACK_IMPORTED_MODULE_6__["NequiUiModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
        _nequi_features_contacts_presentation__WEBPACK_IMPORTED_MODULE_3__["FeaturesContactsModule"],
        _nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_4__["FeaturesMoneyManagementModule"]], exports: [_pages_how_do_i_do_it_how_do_i_do_it_page__WEBPACK_IMPORTED_MODULE_13__["HowDoIDoItPage"]] }); })();


/***/ })

}]);
//# sourceMappingURL=nequi-features-office-withdrawal-presentation.js.map