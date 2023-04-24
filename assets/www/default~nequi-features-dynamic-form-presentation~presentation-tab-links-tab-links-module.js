(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~nequi-features-dynamic-form-presentation~presentation-tab-links-tab-links-module"],{

/***/ "/7t7":
/*!*****************************************************************************************************!*\
  !*** ./libs/features/dynamic-form/src/presentation/pages/validate-info/validate-info.view-model.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ValidateInfoViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateInfoViewModel", function() { return ValidateInfoViewModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _validate_info_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validate-info.config */ "92MV");



var sendEditableToEnd = function (referenceA, referenceB) {
    return Number(referenceA.field.isEditable) - Number(referenceB.field.isEditable);
};
var ValidateInfoViewModel = /** @class */ (function () {
    function ValidateInfoViewModel() {
        this.balanceToggle = false;
        this.pocket = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.config = _validate_info_config__WEBPACK_IMPORTED_MODULE_2__["ValidateInfoConfig"];
    }
    Object.defineProperty(ValidateInfoViewModel.prototype, "title", {
        get: function () {
            var _a, _b;
            return (_b = (_a = this.viewProperties) === null || _a === void 0 ? void 0 : _a.title) !== null && _b !== void 0 ? _b : this.config.i18n.validate.title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ValidateInfoViewModel.prototype, "subtitle", {
        get: function () {
            var _a, _b;
            return (_b = (_a = this.viewProperties) === null || _a === void 0 ? void 0 : _a.subtitle) !== null && _b !== void 0 ? _b : this.config.i18n.validate.subtitle;
        },
        enumerable: false,
        configurable: true
    });
    ValidateInfoViewModel.prototype.getButtonLabel = function (button) {
        var _a;
        return (_a = button.label) !== null && _a !== void 0 ? _a : this.config.i18n.validate.buttonLabel;
    };
    ValidateInfoViewModel.prototype.initForm = function (references) {
        this.fields = references.map(function (field) {
            return {
                control: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: field.value, disabled: field.isDisabled }),
                field: field,
            };
        }).sort(sendEditableToEnd);
        this.buildForm();
    };
    ValidateInfoViewModel.prototype.buildForm = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ pocket: this.pocket }, this.fields.reduce(function (fields, field) {
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, fields), (_a = {}, _a[field.field.name] = field.control, _a));
        }, {})));
    };
    return ValidateInfoViewModel;
}());



/***/ }),

/***/ "7Cgl":
/*!*******************************************************************************!*\
  !*** ./libs/features/dynamic-form/src/presentation/pages/persistence.form.ts ***!
  \*******************************************************************************/
/*! exports provided: PersistenceForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersistenceForm", function() { return PersistenceForm; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _nequi_commons_decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/commons/decorators */ "/Q/5");


var PersistenceForm = /** @class */ (function () {
    function PersistenceForm() {
    }
    Object.defineProperty(PersistenceForm.prototype, "formId", {
        get: function () {
            return this.formIdentifier;
        },
        set: function (value) {
            this.formIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PersistenceForm.prototype, "homeForm", {
        get: function () {
            return this.homeFormInfo;
        },
        set: function (value) {
            this.homeFormInfo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PersistenceForm.prototype, "validate", {
        get: function () {
            return this.validateInfo;
        },
        set: function (value) {
            this.validateInfo = value;
        },
        enumerable: false,
        configurable: true
    });
    PersistenceForm = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _nequi_commons_decorators__WEBPACK_IMPORTED_MODULE_1__["Singleton"]
    ], PersistenceForm);
    return PersistenceForm;
}());



/***/ }),

/***/ "92MV":
/*!*************************************************************************************************!*\
  !*** ./libs/features/dynamic-form/src/presentation/pages/validate-info/validate-info.config.ts ***!
  \*************************************************************************************************/
/*! exports provided: ValidateInfoConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateInfoConfig", function() { return ValidateInfoConfig; });
var ValidateInfoConfig = Object.freeze({
    referenceAmount: 'value',
    i18n: {
        validate: {
            title: 'dynamic-form.validate-info.title',
            subtitle: 'dynamic-form.validate-info.subtitle',
            buttonLabel: 'dynamic-form.validate-info.button-label',
            pocketLabel: 'dynamic-form.validate-info.pocketLabel',
        },
        confirm: 'dynamic-form.confirm',
    },
    defaultAlertImage: 'assets/images/organisms/modals/hand-peace.svg',
    routes: {
        ceiling: '/admin/backpack/ceiling',
        backpack: '/admin/dashboard',
    },
    referencesName: {
        value: 'value',
    },
});


/***/ }),

/***/ "CcfQ":
/*!*******************************************************************************************************!*\
  !*** ./libs/features/dynamic-form/src/presentation/controls/search-select/search-select.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: SearchSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchSelectComponent", function() { return SearchSelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ui_src_lib_components_busy_indicator_busy_indicator_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../ui/src/lib/components/busy-indicator/busy-indicator.component */ "N6nj");
/* harmony import */ var _components_selector_item_selector_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/selector-item/selector-item.component */ "MfLu");











function SearchSelectComponent_ion_icon_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ion-icon", 8);
} }
function SearchSelectComponent_ion_icon_6_Template(rf, ctx) { if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchSelectComponent_ion_icon_6_Template_ion_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.clearInput(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SearchSelectComponent_div_7_app_busy_indicator_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-busy-indicator");
} }
function SearchSelectComponent_div_7_ion_list_2_app_selector_item_1_Template(rf, ctx) { if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-selector-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchSelectComponent_div_7_ion_list_2_app_selector_item_1_Template_app_selector_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); var item_r10 = ctx.$implicit; var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r11.onItemSelected(item_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("values", item_r10.visibleValue);
} }
function SearchSelectComponent_div_7_ion_list_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-list", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SearchSelectComponent_div_7_ion_list_2_app_selector_item_1_Template, 1, 1, "app-selector-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r8.suggestions);
} }
var _c0 = function (a0) { return { "search-select__selector--has-options": a0 }; };
function SearchSelectComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SearchSelectComponent_div_7_app_busy_indicator_1_Template, 1, 0, "app-busy-indicator", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SearchSelectComponent_div_7_ion_list_2_Template, 2, 1, "ion-list", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c0, ctx_r2.hasSuggestions));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.hasSuggestions)("ngIfElse", _r3);
} }
function SearchSelectComponent_ng_template_8_ng_container_0_ion_text_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ion-text", 18);
} if (rf & 2) {
    var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r14.hint, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function SearchSelectComponent_ng_template_8_ng_container_0_ion_text_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ion-text", 19);
} if (rf & 2) {
    var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r15.emptyMessage, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function SearchSelectComponent_ng_template_8_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SearchSelectComponent_ng_template_8_ng_container_0_ion_text_1_Template, 1, 1, "ion-text", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SearchSelectComponent_ng_template_8_ng_container_0_ion_text_2_Template, 1, 1, "ion-text", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r13.isHintVisible);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r13.isHintVisible && ctx_r13.shouldShowEmptyMessage);
} }
function SearchSelectComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, SearchSelectComponent_ng_template_8_ng_container_0_Template, 3, 2, "ng-container", 11);
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r4.isLoading);
} }
var DEFAULT_DEBOUNCE = 250;
var DEFAULT_MIN_LENGTH_TO_SEARCH = 3;
var removeSpaces = function (text) { return text === null || text === void 0 ? void 0 : text.trim(); };
var SearchSelectComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SearchSelectComponent, _super);
    function SearchSelectComponent(elementRef) {
        var _this = _super.call(this) || this;
        _this.elementRef = elementRef;
        _this.debounce = DEFAULT_DEBOUNCE;
        _this.minLengthToSearch = DEFAULT_MIN_LENGTH_TO_SEARCH;
        _this.criteria = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        _this.showSuggestions = false;
        _this.shouldShowEmptyMessage = false;
        _this.isLoading = false;
        _this.isWriting = false;
        return _this;
    }
    SearchSelectComponent.prototype.clickOut = function (event) {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.closeSuggestions();
        }
    };
    SearchSelectComponent.prototype.ngOnDestroy = function () {
        var _a;
        (_a = this.criteriaSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    };
    Object.defineProperty(SearchSelectComponent.prototype, "label", {
        get: function () {
            return this.placeholder;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SearchSelectComponent.prototype, "isFilled", {
        get: function () {
            return !!this.value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SearchSelectComponent.prototype, "isHintVisible", {
        get: function () {
            var _a, _b, _c;
            return (((_b = removeSpaces((_a = this.criteria) === null || _a === void 0 ? void 0 : _a.value)) === null || _b === void 0 ? void 0 : _b.length) < this.minLengthToSearch || !((_c = this.criteria) === null || _c === void 0 ? void 0 : _c.value));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SearchSelectComponent.prototype, "hasSuggestions", {
        get: function () {
            var _a;
            return ((_a = this.suggestions) === null || _a === void 0 ? void 0 : _a.length) > 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SearchSelectComponent.prototype, "isSearchIconVisible", {
        get: function () {
            return !this.isFilled && !this.isWriting;
        },
        enumerable: false,
        configurable: true
    });
    SearchSelectComponent.prototype.writeValue = function (value) {
        this.criteria.setValue(value === null || value === void 0 ? void 0 : value.title);
        _super.prototype.writeValue.call(this, value);
    };
    SearchSelectComponent.prototype.openSuggestions = function () {
        var _this = this;
        this.watchCriteriaChanges();
        setTimeout(function () {
            _this.showSuggestions = true;
            _this.isWriting = true;
        }, 1);
    };
    SearchSelectComponent.prototype.closeSuggestions = function () {
        this.showSuggestions = false;
        this.isWriting = false;
    };
    SearchSelectComponent.prototype.clearInput = function () {
        this.setValue(null);
        this.criteria.setValue('');
    };
    SearchSelectComponent.prototype.onItemSelected = function (item) {
        var _a;
        (_a = this.criteriaSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        this.criteriaSubscription = null;
        this.criteria.setValue(item.title);
        this.setValue(item);
        this.closeSuggestions();
    };
    SearchSelectComponent.prototype.watchCriteriaChanges = function () {
        var _this = this;
        if (this.criteriaSubscription) {
            return;
        }
        this.criteriaSubscription = this.criteria.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(this.debounce))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])())
            .subscribe(function (value) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            return [2 /*return*/, this.onCriteriaHasChanges(value)];
        }); }); });
    };
    SearchSelectComponent.prototype.onCriteriaHasChanges = function (value) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _b;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(((_a = removeSpaces(value)) === null || _a === void 0 ? void 0 : _a.length) >= this.minLengthToSearch)) return [3 /*break*/, 2];
                        this.isLoading = true;
                        _b = this;
                        return [4 /*yield*/, this.options(value)];
                    case 1:
                        _b.suggestions = _c.sent();
                        this.shouldShowEmptyMessage = true;
                        this.isLoading = false;
                        return [3 /*break*/, 3];
                    case 2:
                        this.shouldShowEmptyMessage = false;
                        this.suggestions = [];
                        _c.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SearchSelectComponent.ɵfac = function SearchSelectComponent_Factory(t) { return new (t || SearchSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])); };
    SearchSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SearchSelectComponent, selectors: [["app-search-select"]], hostBindings: function SearchSelectComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchSelectComponent_click_HostBindingHandler($event) { return ctx.clickOut($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveDocument"]);
        } }, inputs: { placeholder: "placeholder", hint: "hint", emptyMessage: "emptyMessage", options: "options", debounce: "debounce", minLengthToSearch: "minLengthToSearch" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                    multi: true,
                    useExisting: SearchSelectComponent,
                },
            ]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 10, vars: 5, consts: [[1, "search-selector"], [1, "nequi-item", "nequi-input-select__control", "ion-align-items-center", "margin-bottom-8", 3, "click"], ["position", "floating", 1, "nequi-item__label"], ["class", "nequi-input-select__icon", "slot", "start", "name", "search-outline", 4, "ngIf"], ["type", "text", 1, "nequi-item__input", 3, "formControl"], ["class", "nequi-input-select__icon", "slot", "end", "name", "close-outline", 3, "click", 4, "ngIf"], ["class", "search-select__selector", 3, "class", 4, "ngIf"], ["empty", ""], ["slot", "start", "name", "search-outline", 1, "nequi-input-select__icon"], ["slot", "end", "name", "close-outline", 1, "nequi-input-select__icon", 3, "click"], [1, "search-select__selector"], [4, "ngIf"], ["class", "selector__list", 4, "ngIf", "ngIfElse"], [1, "selector__list"], ["class", "selector__item", 3, "values", "click", 4, "ngFor", "ngForOf"], [1, "selector__item", 3, "values", "click"], ["class", "selector__hint", 3, "innerHTML", 4, "ngIf"], ["class", "selector--empty", 3, "innerHTML", 4, "ngIf"], [1, "selector__hint", 3, "innerHTML"], [1, "selector--empty", 3, "innerHTML"]], template: function SearchSelectComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-item", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchSelectComponent_Template_ion_item_click_1_listener() { return ctx.openSuggestions(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-label", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, SearchSelectComponent_ion_icon_4_Template, 1, 0, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "ion-input", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, SearchSelectComponent_ion_icon_6_Template, 1, 0, "ion-icon", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, SearchSelectComponent_div_7_Template, 3, 7, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, SearchSelectComponent_ng_template_8_Template, 1, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.label);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isSearchIconVisible);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.criteria);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isFilled);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showSuggestions);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonIcon"], _ui_src_lib_components_busy_indicator_busy_indicator_component__WEBPACK_IMPORTED_MODULE_7__["BusyIndicatorComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _components_selector_item_selector_item_component__WEBPACK_IMPORTED_MODULE_8__["SelectorItemComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonText"]], styles: [".search-select__selector[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  width: calc(100% - var(--padding-end) * 2);\n  max-height: 50vh;\n  min-height: 20vh;\n  padding: 5px 10px;\n  border-radius: 8px;\n  overflow: hidden;\n  justify-content: center;\n  background: var(--background-field-gray);\n  z-index: 11;\n}\n.search-select__selector--has-options[_ngcontent-%COMP%] {\n  justify-content: start;\n}\n.selector__list[_ngcontent-%COMP%] {\n  overflow-y: auto;\n}\n.selector__hint[_ngcontent-%COMP%], .selector--empty[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--gray-color-step-700);\n  font-size: 0.875em;\n}\n.selector--empty[_ngcontent-%COMP%] {\n  color: var(--medianoche);\n}\n.selector__item[_ngcontent-%COMP%]:not(:last-child) {\n  --border-bottom: 1px solid var(--gray-border);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvc2VhcmNoLXNlbGVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBRUEsMENBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUVBLGdCQUFBO0VBQ0EsdUJBQUE7RUFFQSx3Q0FBQTtFQUVBLFdBQUE7QUFKSjtBQU1JO0VBQ0Usc0JBQUE7QUFKTjtBQVVFO0VBQ0UsZ0JBQUE7QUFQSjtBQVVFO0VBRUUsa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0FBVEo7QUFZRTtFQUNFLHdCQUFBO0FBVko7QUFhRTtFQUNFLDZDQUFBO0FBWEoiLCJmaWxlIjoic2VhcmNoLXNlbGVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gtc2VsZWN0IHtcbiAgJl9fc2VsZWN0b3Ige1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICB3aWR0aDogY2FsYygxMDAlIC0gdmFyKC0tcGFkZGluZy1lbmQpICogMik7XG4gICAgbWF4LWhlaWdodDogNTB2aDtcbiAgICBtaW4taGVpZ2h0OiAyMHZoO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcblxuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWZpZWxkLWdyYXkpO1xuXG4gICAgei1pbmRleDogMTE7XG5cbiAgICAmLS1oYXMtb3B0aW9ucyB7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIH1cbiAgfVxufVxuXG4uc2VsZWN0b3Ige1xuICAmX19saXN0IHtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICB9XG5cbiAgJl9faGludCxcbiAgJi0tZW1wdHkge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0tZ3JheS1jb2xvci1zdGVwLTcwMCk7XG4gICAgZm9udC1zaXplOiAwLjg3NWVtO1xuICB9XG5cbiAgJi0tZW1wdHkge1xuICAgIGNvbG9yOiB2YXIoLS1tZWRpYW5vY2hlKTtcbiAgfVxuXG4gICZfX2l0ZW06bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgLS1ib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZ3JheS1ib3JkZXIpO1xuICB9XG59XG4iXX0= */"] });
    return SearchSelectComponent;
}(_nequi_ui__WEBPACK_IMPORTED_MODULE_4__["InputControlValue"]));



/***/ }),

/***/ "ESsW":
/*!************************************************************************!*\
  !*** ./libs/features/dynamic-form/src/presentation/pages/base-page.ts ***!
  \************************************************************************/
/*! exports provided: DynamicFormBasePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFormBasePage", function() { return DynamicFormBasePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nequi_commons_exceptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/commons/exceptions */ "0sJq");
/* harmony import */ var _nequi_features_application_data_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/application-data/core */ "UgzZ");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nequi/features/dynamic-form/core */ "//55");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _dynamic_form_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../dynamic-form.config */ "NzzY");
/* harmony import */ var _services_bottom_sheet_informative_view_bottom_sheet_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/bottom-sheet/informative-view-bottom-sheet.service */ "lJLI");
/* harmony import */ var _services_dynamic_form_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/dynamic-form.service */ "QAPA");
/* harmony import */ var _persistence_form__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./persistence.form */ "7Cgl");
/* harmony import */ var _validate_info_validate_info_config__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./validate-info/validate-info.config */ "92MV");





























var DynamicFormBasePage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DynamicFormBasePage, _super);
    function DynamicFormBasePage(cardModalService, alertService, dynamicFormInteractor, route, router, dynamicFormService, dynamicInformativeViewBottomSheetService, qrReaderService, loggerInteractor, translateProvider, moduleConfigProvider, currencyPipe, analyticsInteractor, applicationDataInteractor, persistenceForm, injector) {
        var _this = _super.call(this, injector) || this;
        _this.cardModalService = cardModalService;
        _this.alertService = alertService;
        _this.dynamicFormInteractor = dynamicFormInteractor;
        _this.route = route;
        _this.router = router;
        _this.dynamicFormService = dynamicFormService;
        _this.dynamicInformativeViewBottomSheetService = dynamicInformativeViewBottomSheetService;
        _this.qrReaderService = qrReaderService;
        _this.loggerInteractor = loggerInteractor;
        _this.translateProvider = translateProvider;
        _this.moduleConfigProvider = moduleConfigProvider;
        _this.currencyPipe = currencyPipe;
        _this.analyticsInteractor = analyticsInteractor;
        _this.applicationDataInteractor = applicationDataInteractor;
        _this.persistenceForm = persistenceForm;
        _this.translateProvider.loadModule(_this.moduleConfigProvider.i18n.moduleKey);
        return _this;
    }
    // eslint-disable-next-line complexity
    DynamicFormBasePage.prototype.handleButtonAction = function (button, formId) {
        var _a, _b, _c, _d, _e, _f;
        if (((_b = (_a = button.actionInfo) === null || _a === void 0 ? void 0 : _a.goTo) === null || _b === void 0 ? void 0 : _b.includes(_dynamic_form_config__WEBPACK_IMPORTED_MODULE_12__["DynamicFormConfig"].routes.oldHomeRoute)) &&
            !button.params) {
            return;
        }
        switch (button === null || button === void 0 ? void 0 : button.action) {
            case _nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_9__["ActionType"].ALERT:
                this.handleAlertInformation((_c = button.actionInfo) === null || _c === void 0 ? void 0 : _c.alert, formId);
                break;
            case _nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_9__["ActionType"].GO_TO_LINK:
                Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_11__["openUrl"])((_d = button.actionInfo) === null || _d === void 0 ? void 0 : _d.url);
                if ((_e = button.actionInfo) === null || _e === void 0 ? void 0 : _e.redirect) {
                    this.navigatorProvider.navigateForward((_f = button.actionInfo) === null || _f === void 0 ? void 0 : _f.redirect);
                }
                break;
            case _nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_9__["ActionType"].SUBMIT:
                this.onSubmit(button);
                break;
            case _nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_9__["ActionType"].CAMERA:
                this.onScan(button);
                break;
            case _nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_9__["ActionType"].GO_BACK:
                this.onGoBack();
                break;
            case _nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_9__["ActionType"].GO_TO:
                this.navigatorProvider.navigateForward(button.actionInfo.goTo);
                break;
            case _nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_9__["ActionType"].GO_NEXT:
                this.onGoNext(button);
                break;
            case _nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_9__["ActionType"].GO_ADMIN:
                return this.goAdmin();
            case _nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_9__["ActionType"].GO_FIRST:
                this.onGoFirst(button);
                break;
            case _nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_9__["ActionType"].GO_BREAK_CEILING:
                // TODO: Agregar redireccion cuando se implemente
                break;
            default:
                break;
        }
    };
    DynamicFormBasePage.prototype.handleAlertInformation = function (alertInfo, formId, screenName, backButtonAction) {
        var _a, _b, _c, _d;
        if (screenName === void 0) { screenName = this.screenName; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var alert, buttons;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        if (!alertInfo) {
                            return [2 /*return*/];
                        }
                        if (!(typeof alertInfo === 'string')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.dynamicFormInteractor.getAlert(alertInfo, screenName, formId)];
                    case 1:
                        alert = _e.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        alert = alertInfo;
                        _e.label = 3;
                    case 3:
                        if (!alert) {
                            return [2 /*return*/];
                        }
                        if (!(alert.type === 'modal')) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.cardModalService.show({
                                imgPath: (_a = alert.image) !== null && _a !== void 0 ? _a : _dynamic_form_config__WEBPACK_IMPORTED_MODULE_12__["DynamicFormConfig"].defaultSuccessAlertAsset,
                                title: alert.title,
                                content: alert.content,
                                nativeBackButtonAction: backButtonAction,
                                buttons: alert.buttons.map(function (button, index) {
                                    return {
                                        text: button.label,
                                        handler: function () { return _this.handleButtonAction(button, formId); },
                                        color: index === 0 ? 'guayaba' : 'medianoche-gray',
                                    };
                                }),
                            })];
                    case 4:
                        _e.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        buttons = {
                            accept: (_b = alert.buttons[0]) === null || _b === void 0 ? void 0 : _b.label,
                            cancel: (_d = (_c = alert.buttons[1]) === null || _c === void 0 ? void 0 : _c.label) !== null && _d !== void 0 ? _d : undefined,
                        };
                        if (alert.buttons.length === 1) {
                            delete buttons.cancel;
                        }
                        this.alertService.show({
                            messages: {
                                header: alert.title,
                                message: alert.content,
                                buttons: buttons,
                            },
                            handlers: {
                                cancel: function () { return _this.handleButtonAction(alert.buttons[1], formId); },
                                accept: function () { return _this.handleButtonAction(alert.buttons[0], formId); },
                            },
                        });
                        _e.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    DynamicFormBasePage.prototype.getTransactionValue = function (bill, form) {
        var _this = this;
        var field = bill.fields.find(function (currentField) { return _this.isValueReference(currentField); });
        return Number(form.get(field.name).value);
    };
    DynamicFormBasePage.prototype.getConfirmationInfo = function (transactionInfo) {
        var _a, _b, _c;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var screenConfig, messages;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.dynamicFormInteractor.getScreenConfiguration(_nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_9__["FlowScreens"].CONFIRM, transactionInfo.data.formId)];
                    case 1:
                        screenConfig = _d.sent();
                        messages = this.translateProvider.get(_validate_info_validate_info_config__WEBPACK_IMPORTED_MODULE_16__["ValidateInfoConfig"].i18n.confirm);
                        return [2 /*return*/, {
                                title: messages.title,
                                subtitle: (_a = screenConfig.subtitle) !== null && _a !== void 0 ? _a : messages.subtitle,
                                items: this.getConfirmItems(transactionInfo.data),
                                confirmLabel: (_c = (_b = screenConfig.buttons[0]) === null || _b === void 0 ? void 0 : _b.label) !== null && _c !== void 0 ? _c : messages.button,
                                viewCancel: false,
                            }];
                }
            });
        });
    };
    DynamicFormBasePage.prototype.setOriginMoney = function (transaction) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var pocket;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (transaction.pocket === null) {
                    pocket = this.originMoneyService.getAvailablePocket();
                    transaction.withPocket(pocket);
                }
                return [2 /*return*/, transaction];
            });
        });
    };
    DynamicFormBasePage.prototype.unhandledError = function (error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.loadingService.isShown) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.loadingService.hide(false)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.loggerInteractor.error(JSON.stringify(error));
                        if (error instanceof _nequi_commons_exceptions__WEBPACK_IMPORTED_MODULE_4__["ExceedCeilingException"] ||
                            _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_6__["NOT_BALANCE_AVAILABLE_ERRORS"].includes(error.code)) {
                            throw error;
                        }
                        this.toastService.showError(error.message);
                        return [2 /*return*/];
                }
            });
        });
    };
    DynamicFormBasePage.prototype.onTransactionFailed = function (error, transaction) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var errorPaymentAlert;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loadingService.hide(false);
                        return [4 /*yield*/, this.dynamicFormInteractor.getErrorAlert(transaction.data.formId, error.code)];
                    case 1:
                        errorPaymentAlert = _a.sent();
                        if (errorPaymentAlert) {
                            this.handleAlertInformation(errorPaymentAlert, transaction.data.formId);
                            return [2 /*return*/];
                        }
                        this.unhandledError(error);
                        return [2 /*return*/];
                }
            });
        });
    };
    DynamicFormBasePage.prototype.onTransactionSuccess = function (response, transaction) {
        var _a, _b, _c;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var successPaymentAlert, configTagSync, configTagAsync;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.dynamicFormInteractor.getSuccessPaymentAlert(transaction.data.formId, response)];
                    case 1:
                        successPaymentAlert = _d.sent();
                        configTagSync = (_a = transaction.data.tags) === null || _a === void 0 ? void 0 : _a.successPayment.sync;
                        configTagAsync = (_b = transaction.data.tags) === null || _b === void 0 ? void 0 : _b.successPayment.async;
                        if ((_c = successPaymentAlert === null || successPaymentAlert === void 0 ? void 0 : successPaymentAlert.alert) === null || _c === void 0 ? void 0 : _c.cache) {
                            this.saveForm();
                        }
                        if (successPaymentAlert) {
                            this.handleAlertInformation(successPaymentAlert.alert, transaction.data.formId, null, function () {
                                return _this.goAdmin();
                            });
                            this.setAnalyticsSyncSuccessPayment(configTagSync);
                        }
                        else {
                            // TODO: modificar logica para controlar redireccion a la pantalla donde el flujo inicio(backpack o closet)
                            this.navigatorProvider.navigateForward(_validate_info_validate_info_config__WEBPACK_IMPORTED_MODULE_16__["ValidateInfoConfig"].routes.backpack);
                            this.setAnalyticsAsyncSuccessPayment(configTagAsync);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DynamicFormBasePage.prototype.goAdmin = function () {
        this.navigatorProvider.navigateRoot(_dynamic_form_config__WEBPACK_IMPORTED_MODULE_12__["DynamicFormConfig"].routes.admin);
    };
    DynamicFormBasePage.prototype.saveForm = function () {
        var _a, _b, _c, _d;
        if (!((_b = (_a = this.persistenceForm) === null || _a === void 0 ? void 0 : _a.validate) === null || _b === void 0 ? void 0 : _b.value)) {
            (_d = (_c = this.persistenceForm) === null || _c === void 0 ? void 0 : _c.validate) === null || _d === void 0 ? true : delete _d.value;
        }
        this.applicationDataInteractor.save(this.moduleConfigProvider.applicationData.persistenceHomeDataKey +
            this.persistenceForm.formId, this.persistenceForm.homeForm);
        this.applicationDataInteractor.save(this.moduleConfigProvider.applicationData.persistenceValidateDataKey +
            this.persistenceForm.formId, this.persistenceForm.validate);
    };
    DynamicFormBasePage.prototype.getConfirmItems = function (bill) {
        var _this = this;
        var referenceValue = this.getValueReference(bill);
        var references = bill.fields
            .filter(function (field) { return field.isVisible && !_this.isValueReference(field) && field.value; })
            .map(function (field) { return _this.getConfirmInfoItem(field); });
        references.push(this.getConfirmInfoItem(referenceValue));
        return references;
    };
    DynamicFormBasePage.prototype.getValueReference = function (bill) {
        var _this = this;
        return bill.fields.find(function (currentField) { return _this.isValueReference(currentField); });
    };
    DynamicFormBasePage.prototype.isValueReference = function (field) {
        return field.name === _validate_info_validate_info_config__WEBPACK_IMPORTED_MODULE_16__["ValidateInfoConfig"].referenceAmount;
    };
    DynamicFormBasePage.prototype.getConfirmInfoItem = function (field) {
        var _a, _b, _c;
        var value = (_b = (_a = field.value) === null || _a === void 0 ? void 0 : _a.toString) === null || _b === void 0 ? void 0 : _b.call(_a);
        return {
            label: (_c = field.complementaryLabel) !== null && _c !== void 0 ? _c : field.placeHolder,
            value: field.type === _nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_9__["FieldType"].MONEY ? this.currencyPipe.transform(value) : value,
        };
    };
    DynamicFormBasePage.prototype.setAnalyticsSyncSuccessPayment = function (configTagSync) {
        if (!configTagSync) {
            return;
        }
        this.analyticsInteractor.trackEvent({
            type: configTagSync.facebook.type,
            params: {
                eventName: configTagSync.facebook.params.eventName,
            },
        });
        this.analyticsInteractor.trackEvent({
            type: configTagSync.firebase.type,
            params: {
                eventName: configTagSync.firebase.params.eventName,
            },
        });
    };
    DynamicFormBasePage.prototype.setAnalyticsAsyncSuccessPayment = function (configTagAsync) {
        if (!configTagAsync) {
            return;
        }
        this.analyticsInteractor.trackEvent({
            type: configTagAsync.facebook.type,
            params: {
                eventName: configTagAsync.facebook.params.eventName,
            },
        });
        this.analyticsInteractor.trackEvent({
            type: configTagAsync.firebase.type,
            params: {
                eventName: configTagAsync.firebase.params.eventName,
            },
        });
    };
    DynamicFormBasePage.ɵfac = function DynamicFormBasePage_Factory(t) { return new (t || DynamicFormBasePage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_10__["CardModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_7__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_9__["DynamicFormInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_dynamic_form_service__WEBPACK_IMPORTED_MODULE_14__["DynamicFormService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_bottom_sheet_informative_view_bottom_sheet_service__WEBPACK_IMPORTED_MODULE_13__["InformativeViewBottomSheetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_7__["QrReaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_6__["LoggerInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_8__["TranslateProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_8__["ModuleConfigProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_6__["AnalyticsInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_features_application_data_core__WEBPACK_IMPORTED_MODULE_5__["ApplicationDataInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_persistence_form__WEBPACK_IMPORTED_MODULE_15__["PersistenceForm"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"])); };
    DynamicFormBasePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DynamicFormBasePage, selectors: [["app-dynamic-form-base"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, template: function DynamicFormBasePage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "no-ui");
        } }, encapsulation: 2 });
    return DynamicFormBasePage;
}(_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_7__["TransactionBasePage"]));



/***/ }),

/***/ "MfLu":
/*!*********************************************************************************************************!*\
  !*** ./libs/features/dynamic-form/src/presentation/components/selector-item/selector-item.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: SelectorItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectorItemComponent", function() { return SelectorItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function SelectorItemComponent_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("selector-item__value--" + item_r1.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.value, " ");
} }
var SelectorItemComponent = /** @class */ (function () {
    function SelectorItemComponent() {
    }
    SelectorItemComponent.ɵfac = function SelectorItemComponent_Factory(t) { return new (t || SelectorItemComponent)(); };
    SelectorItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectorItemComponent, selectors: [["app-selector-item"]], inputs: { values: "values" }, decls: 2, vars: 1, consts: [[1, "selector-item"], ["class", "selector-item__value", 3, "class", 4, "ngFor", "ngForOf"], [1, "selector-item__value"]], template: function SelectorItemComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SelectorItemComponent_label_1_Template, 2, 3, "label", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.values);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".selector-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  background-color: transparent;\n  border-bottom: var(--border-bottom);\n}\n.selector-item__value--title[_ngcontent-%COMP%] {\n  font-size: 1em;\n  color: var(--medianoche);\n  line-height: 1.15em;\n  margin-bottom: 4px;\n}\n.selector-item__value--subtitle[_ngcontent-%COMP%], .selector-item__value--simpleText[_ngcontent-%COMP%] {\n  font-size: 0.875em;\n  color: var(--gray-70);\n}\n.selector-item__value[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvc2VsZWN0b3ItaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1DQUFBO0FBQ0Y7QUFFSTtFQUNFLGNBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFBTjtBQUdJO0VBRUUsa0JBQUE7RUFDQSxxQkFBQTtBQUZOO0FBS0k7RUFDRSxnQkFBQTtBQUhOIiwiZmlsZSI6InNlbGVjdG9yLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0b3ItaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiB2YXIoLS1ib3JkZXItYm90dG9tKTtcblxuICAmX192YWx1ZSB7XG4gICAgJi0tdGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICBjb2xvcjogdmFyKC0tbWVkaWFub2NoZSk7XG4gICAgICBsaW5lLWhlaWdodDogMS4xNWVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIH1cblxuICAgICYtLXN1YnRpdGxlLFxuICAgICYtLXNpbXBsZVRleHQge1xuICAgICAgZm9udC1zaXplOiAwLjg3NWVtO1xuICAgICAgY29sb3I6IHZhcigtLWdyYXktNzApO1xuICAgIH1cblxuICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
    return SelectorItemComponent;
}());



/***/ }),

/***/ "NBrK":
/*!***********************************************************************************************!*\
  !*** ./libs/features/dynamic-form/src/presentation/pages/validate-info/validate-info.page.ts ***!
  \***********************************************************************************************/
/*! exports provided: ValidateInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateInfoPage", function() { return ValidateInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/dynamic-form/core */ "//55");
/* harmony import */ var _nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/money-management/presentation */ "JFCQ");
/* harmony import */ var _dynamic_form_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dynamic-form.config */ "NzzY");
/* harmony import */ var _base_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base-page */ "ESsW");
/* harmony import */ var _validate_info_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validate-info.config */ "92MV");
/* harmony import */ var _validate_info_view_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./validate-info.view-model */ "/7t7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _money_management_src_presentation_components_balance_header_balance_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../money-management/src/presentation/components/balance-header/balance-header.component */ "1rl1");
/* harmony import */ var _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../ui/src/lib/directives/animate-title-on-scroll/animate-title-on-scroll.directive */ "qbWi");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _money_management_src_presentation_controls_origin_money_control_origin_money_control_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../money-management/src/presentation/controls/origin-money-control/origin-money-control.component */ "O3Yd");
/* harmony import */ var _controls_dynamic_input_dynamic_input_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../controls/dynamic-input/dynamic-input.component */ "YpBf");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");

















function ValidateInfoPage_form_19_app_dynamic_input_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-dynamic-input", 20);
} if (rf & 2) {
    var input_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", input_r3.control)("field", input_r3.field);
} }
function ValidateInfoPage_form_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "form", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-list", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, ValidateInfoPage_form_19_app_dynamic_input_2_Template, 1, 2, "app-dynamic-input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "nequi-origin-money-control", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r0.viewModel.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.viewModel.fields);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 6, ctx_r0.config.i18n.validate.pocketLabel));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", ctx_r0.viewModel.pocket)("minAmount", ctx_r0.minAmount)("title", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](7, 8, ctx_r0.config.i18n.validate.pocketLabel));
} }
function ValidateInfoPage_ion_toolbar_21_ion_button_1_Template(rf, ctx) { if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ValidateInfoPage_ion_toolbar_21_ion_button_1_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7); var button_r5 = ctx.$implicit; var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r6.onButtonClicked(button_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var button_r5 = ctx.$implicit;
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r4.viewModel.form.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 2, ctx_r4.viewModel.getButtonLabel(button_r5)), " ");
} }
function ValidateInfoPage_ion_toolbar_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-toolbar", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ValidateInfoPage_ion_toolbar_21_ion_button_1_Template, 3, 4, "ion-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.viewModel.viewProperties.buttons);
} }
var ValidateInfoPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ValidateInfoPage, _super);
    function ValidateInfoPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewModel = new _validate_info_view_model__WEBPACK_IMPORTED_MODULE_7__["ValidateInfoViewModel"]();
        _this.screenName = _nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_2__["FlowScreens"].VALIDATE;
        _this.config = _validate_info_config__WEBPACK_IMPORTED_MODULE_6__["ValidateInfoConfig"];
        return _this;
    }
    Object.defineProperty(ValidateInfoPage.prototype, "transactionValue", {
        get: function () {
            return this.getTransactionValue(this.bill, this.viewModel.form);
        },
        enumerable: false,
        configurable: true
    });
    ValidateInfoPage.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.loadViewProperties();
                return [2 /*return*/];
            });
        });
    };
    Object.defineProperty(ValidateInfoPage.prototype, "minAmount", {
        get: function () {
            var _a;
            return ((_a = this.viewModel.form.get(this.config.referenceAmount)) === null || _a === void 0 ? void 0 : _a.value) || 0;
        },
        enumerable: false,
        configurable: true
    });
    ValidateInfoPage.prototype.onSubmit = function () {
        _super.prototype.executeTransaction.call(this, this.getTransactionInfo(this.bill, this.viewModel.form));
    };
    ValidateInfoPage.prototype.onGoBack = function () {
        this.navigatorProvider.back();
    };
    ValidateInfoPage.prototype.onGoNext = function () {
        this.executeTransaction(this.getTransactionInfo(this.bill, this.viewModel.form));
    };
    ValidateInfoPage.prototype.onScan = function () {
        // Do nothing
    };
    ValidateInfoPage.prototype.onGoFirst = function () {
        this.navigatorProvider.navigateBack([_dynamic_form_config__WEBPACK_IMPORTED_MODULE_4__["DynamicFormConfig"].routes.admin]);
    };
    ValidateInfoPage.prototype.onButtonClicked = function (button) {
        this.handleButtonAction(button, this.bill.formId);
    };
    ValidateInfoPage.prototype.loadViewProperties = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var updatedBill, _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.bill = this.router.getCurrentNavigation().extras.state;
                        return [4 /*yield*/, this.updateFormValues(this.bill)];
                    case 1:
                        updatedBill = _b.sent();
                        _a = this.viewModel;
                        return [4 /*yield*/, this.dynamicFormInteractor.getScreenConfiguration(_nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_2__["FlowScreens"].VALIDATE, this.bill.formId)];
                    case 2:
                        _a.viewProperties = _b.sent();
                        this.viewModel.initForm(updatedBill.fields);
                        if (!this.viewModel.viewProperties.toast) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.dynamicFormService.showToast(this.viewModel.viewProperties, _nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_2__["FlowScreens"].VALIDATE, this.bill.formId)];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ValidateInfoPage.prototype.updateFormValues = function (bill) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var persistentData;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.applicationDataInteractor.findValue(this.moduleConfigProvider.applicationData.persistenceValidateDataKey + bill.formId)];
                    case 1:
                        persistentData = _a.sent();
                        if (persistentData) {
                            bill.fields.map(function (field) {
                                if (persistentData[field.name] &&
                                    field.isEditable &&
                                    field.name !== _validate_info_config__WEBPACK_IMPORTED_MODULE_6__["ValidateInfoConfig"].referencesName.value) {
                                    field.value = persistentData[field.name];
                                }
                                return field;
                            });
                        }
                        return [2 /*return*/, bill];
                }
            });
        });
    };
    ValidateInfoPage.prototype.getTransactionInfo = function (bill, form) {
        var _this = this;
        return new _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_1__["Transaction"](bill.operationType)
            .withAmount(this.getTransactionValue(bill, form))
            .withPocket(this.viewModel.pocket.value)
            .withData(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, bill), { fields: bill.fields.map(function (field) { return _this.updateFieldValue(field, form); }) }))
            .useRepository(_nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_2__["DynamicFormRepository"].name);
    };
    ValidateInfoPage.prototype.updateFieldValue = function (field, form) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, field), { value: form.get(field.name).value });
    };
    ValidateInfoPage.ɵfac = function ValidateInfoPage_Factory(t) { return ɵValidateInfoPage_BaseFactory(t || ValidateInfoPage); };
    ValidateInfoPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: ValidateInfoPage, selectors: [["app-validate-info"]], viewQuery: function ValidateInfoPage_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_3__["OriginMoneyControlComponent"], 1);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.originMoneyControl = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 22, vars: 14, consts: [[1, "nequi-header", "nequi-header--white"], ["slot", "start"], ["id", "validate-info_go-back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], ["slot", "end"], ["id", "validate-info_balance_button", 3, "click"], ["slot", "icon-only", 3, "name"], [1, "nequi-header__title", "ion-text-start"], [3, "isDarkTheme", "isShow"], ["scrollEvents", "true", "appAnimateTitleOnScroll", "", "fullscreen", "true", 1, "ion-content--enroll", "ion-padding-horizontal", "validate-info"], ["id", "validate-info_title_label", 1, "nequi-title"], ["id", "validate-info_subtitle_label", 1, "form__title"], [3, "formGroup", 4, "ngIf"], [1, "nequi-footer"], ["class", "nequi-footer__toolbar", 4, "ngIf"], [3, "formGroup"], [1, "validate-info__form"], ["id", "validate-info_form_input", 3, "formControl", "field", 4, "ngFor", "ngForOf"], [1, "form__title", "margin-bottom-8"], [3, "formControl", "minAmount", "title"], ["id", "validate-info_form_input", 3, "formControl", "field"], [1, "nequi-footer__toolbar"], ["id", "validate-info_button_submit", "class", "nequi-footer__button", "shape", "round", "color", "guayaba", "expand", "block", 3, "disabled", "click", 4, "ngFor", "ngForOf"], ["id", "validate-info_button_submit", "shape", "round", "color", "guayaba", "expand", "block", 1, "nequi-footer__button", 3, "disabled", "click"]], template: function ValidateInfoPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ValidateInfoPage_Template_ion_button_click_3_listener() { return ctx.onGoBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "ion-buttons", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "ion-button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ValidateInfoPage_Template_ion_button_click_6_listener() { return ctx.viewModel.balanceToggle = !ctx.viewModel.balanceToggle; });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "ion-icon", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "ion-title", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](10, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "app-balance-header", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "ion-content", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "ion-text", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "ion-text", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](18, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, ValidateInfoPage_form_19_Template, 8, 10, "form", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "ion-footer", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, ValidateInfoPage_ion_toolbar_21_Template, 2, 1, "ion-toolbar", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("name", ctx.viewModel.balanceToggle ? "chevron-up-outline" : "chevron-down-outline");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](10, 8, ctx.viewModel.title), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isDarkTheme", false)("isShow", ctx.viewModel.balanceToggle);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](15, 10, ctx.viewModel.title), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](18, 12, ctx.viewModel.subtitle), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.viewModel.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.viewModel.form);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonTitle"], _money_management_src_presentation_components_balance_header_balance_header_component__WEBPACK_IMPORTED_MODULE_10__["BalanceHeaderComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonContent"], _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_11__["AnimateTitleOnScrollDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonText"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonFooter"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _money_management_src_presentation_controls_origin_money_control_origin_money_control_component__WEBPACK_IMPORTED_MODULE_14__["OriginMoneyControlComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormControlDirective"], _controls_dynamic_input_dynamic_input_component__WEBPACK_IMPORTED_MODULE_15__["DynamicInputComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslatePipe"]], styles: [".validate-info__subtitle[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--gray-alert-message);\n}\n.validate-info__form[_ngcontent-%COMP%] {\n  margin: 16px 0;\n}\n.validate-info[_ngcontent-%COMP%]   .nequi-footer__toolbar[_ngcontent-%COMP%] {\n  box-shadow: none;\n  padding: 8px 0px 8px 0px;\n  margin-top: -5px;\n}\n.form__title.margin-bottom-8[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvdmFsaWRhdGUtaW5mby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxlQUFBO0VBQ0EsZ0NBQUE7QUFBSjtBQUdFO0VBQ0UsY0FBQTtBQURKO0FBSUU7RUFDRSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUFGSjtBQU1BO0VBQ0Usa0JBQUE7QUFIRiIsImZpbGUiOiJ2YWxpZGF0ZS1pbmZvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52YWxpZGF0ZS1pbmZvIHtcbiAgJl9fc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogdmFyKC0tZ3JheS1hbGVydC1tZXNzYWdlKTtcbiAgfVxuXG4gICZfX2Zvcm0ge1xuICAgIG1hcmdpbjogMTZweCAwO1xuICB9XG5cbiAgLm5lcXVpLWZvb3Rlcl9fdG9vbGJhciB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBwYWRkaW5nOiA4cHggMHB4IDhweCAwcHg7XG4gICAgbWFyZ2luLXRvcDogLTVweDtcbiAgfVxufVxuXG4uZm9ybV9fdGl0bGUubWFyZ2luLWJvdHRvbS04IHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuIl19 */"] });
    return ValidateInfoPage;
}(_base_page__WEBPACK_IMPORTED_MODULE_5__["DynamicFormBasePage"]));

var ɵValidateInfoPage_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetInheritedFactory"](ValidateInfoPage);


/***/ }),

/***/ "NzzY":
/*!****************************************************************************!*\
  !*** ./libs/features/dynamic-form/src/presentation/dynamic-form.config.ts ***!
  \****************************************************************************/
/*! exports provided: DynamicFormConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFormConfig", function() { return DynamicFormConfig; });
var DynamicFormConfig = Object.freeze({
    page: {
        home: 'home',
        validate: 'validate',
        confirm: 'confirm',
    },
    routes: {
        form: '/admin/dynamic-form/form',
        validate: 'validate',
        admin: '/admin/dashboard',
        oldHomeRoute: 'dynamicFormHome',
    },
    theme: 'light',
    iconDefault: 'icon-tres-listanequi',
    defaultSuccessAlertAsset: '/assets/images/transversal/blue-ok.svg',
});


/***/ }),

/***/ "OjB3":
/*!*****************************************************************************!*\
  !*** ./libs/features/dynamic-form/src/presentation/pages/home/home.page.ts ***!
  \*****************************************************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/dynamic-form/core */ "//55");
/* harmony import */ var _nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/money-management/presentation */ "JFCQ");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _dynamic_form_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dynamic-form.config */ "NzzY");
/* harmony import */ var _base_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../base-page */ "ESsW");
/* harmony import */ var _validate_info_validate_info_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../validate-info/validate-info.config */ "92MV");
/* harmony import */ var _home_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home.config */ "1OWG");
/* harmony import */ var _home_view_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home.view-model */ "Znnt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _money_management_src_presentation_components_balance_header_balance_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../money-management/src/presentation/components/balance-header/balance-header.component */ "1rl1");
/* harmony import */ var _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../ui/src/lib/directives/animate-title-on-scroll/animate-title-on-scroll.directive */ "qbWi");
/* harmony import */ var _ui_src_lib_directives_form_content_style_form_content_style_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../ui/src/lib/directives/form-content-style/form-content-style.directive */ "+XT3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ui_src_lib_components_busy_indicator_busy_indicator_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../ui/src/lib/components/busy-indicator/busy-indicator.component */ "N6nj");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _controls_dynamic_input_dynamic_input_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../controls/dynamic-input/dynamic-input.component */ "YpBf");
/* harmony import */ var _money_management_src_presentation_controls_origin_money_control_origin_money_control_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../money-management/src/presentation/controls/origin-money-control/origin-money-control.component */ "O3Yd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");





















function HomePage_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "app-busy-indicator", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onReload", function HomePage_ng_container_12_Template_app_busy_indicator_onReload_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r4.getFormInfo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("showReload", !!ctx_r0.loadingError)("reloadMessage", ctx_r0.loadingError);
} }
function HomePage_ion_footer_13_ion_toolbar_1_ng_container_1_ion_button_1_Template(rf, ctx) { if (rf & 1) {
    var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HomePage_ion_footer_13_ion_toolbar_1_ng_container_1_ion_button_1_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r13); var button_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit; var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r11.onButtonClicked(button_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    var button_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx_r9.viewModel.form.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 2, ctx_r9.viewModel.getButtonLabel(button_r8)), " ");
} }
function HomePage_ion_footer_13_ion_toolbar_1_ng_container_1_ion_button_2_Template(rf, ctx) { if (rf & 1) {
    var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HomePage_ion_footer_13_ion_toolbar_1_ng_container_1_ion_button_2_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r17); var button_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit; var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r15.onButtonClicked(button_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    var button_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, ctx_r10.viewModel.getButtonLabel(button_r8)), " ");
} }
function HomePage_ion_footer_13_ion_toolbar_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HomePage_ion_footer_13_ion_toolbar_1_ng_container_1_ion_button_1_Template, 3, 4, "ion-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, HomePage_ion_footer_13_ion_toolbar_1_ng_container_1_ion_button_2_Template, 3, 3, "ion-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var button_r8 = ctx.$implicit;
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r7.isSubmitButton(button_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r7.isSubmitButton(button_r8));
} }
function HomePage_ion_footer_13_ion_toolbar_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-toolbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HomePage_ion_footer_13_ion_toolbar_1_ng_container_1_Template, 3, 2, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r6.viewModel.screenConfig.buttons);
} }
function HomePage_ion_footer_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-footer", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HomePage_ion_footer_13_ion_toolbar_1_Template, 2, 1, "ion-toolbar", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.viewModel.form);
} }
function HomePage_ng_template_14_form_2_div_1_app_dynamic_input_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "app-dynamic-input", 28);
} if (rf & 2) {
    var input_r24 = ctx.$implicit;
    var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formControl", input_r24.control)("dependency", ctx_r23.viewModel.form.get(input_r24.field.fieldDependency))("field", input_r24.field);
} }
function HomePage_ng_template_14_form_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "ion-list", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, HomePage_ng_template_14_form_2_div_1_app_dynamic_input_4_Template, 1, 3, "app-dynamic-input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "ion-text", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    var box_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](box_r22.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", box_r22.fields);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", box_r22.description, "");
} }
function HomePage_ng_template_14_form_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "nequi-origin-money-control", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 4, ctx_r21.config.i18n.pocketLabel));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formControl", ctx_r21.viewModel.pocketControl)("minAmount", ctx_r21.minAmount)("title", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 6, ctx_r21.config.i18n.pocketLabel));
} }
function HomePage_ng_template_14_form_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "form", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HomePage_ng_template_14_form_2_div_1_Template, 7, 3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, HomePage_ng_template_14_form_2_ng_container_2_Template, 6, 8, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx_r19.viewModel.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r19.viewModel.boxes);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r19.showOriginMoney);
} }
function HomePage_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-text", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, HomePage_ng_template_14_form_2_Template, 3, 3, "form", 22);
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r3.viewModel.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r3.viewModel.form);
} }
var HomePage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HomePage, _super);
    function HomePage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.screenName = _nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_2__["FlowScreens"].HOME;
        _this.viewModel = new _home_view_model__WEBPACK_IMPORTED_MODULE_9__["HomeViewModel"]();
        _this.config = _home_config__WEBPACK_IMPORTED_MODULE_8__["HomeConfig"];
        _this.showOriginMoney = true;
        return _this;
    }
    HomePage.prototype.isSubmitButton = function (button) {
        return button.action === _nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_2__["ActionType"].SUBMIT;
    };
    HomePage.prototype.onSubmit = function () {
        var params = this.viewModel.fields.reduce(this.getReferences.bind(this), {});
        this.getPendingBills(params);
    };
    HomePage.prototype.onGoBack = function () {
        this.navigatorProvider.back();
    };
    HomePage.prototype.onGoNext = function () {
        this.navigateToNext(this.bills);
    };
    HomePage.prototype.onScan = function (button) {
        this.openScanner(button);
    };
    HomePage.prototype.onGoFirst = function () {
        this.goBack();
    };
    HomePage.prototype.getTransactionValue = function (bill) {
        if (!bill) {
            return 0;
        }
        var field = bill.fields.find(function (currentField) { return currentField.name === _validate_info_validate_info_config__WEBPACK_IMPORTED_MODULE_7__["ValidateInfoConfig"].referenceAmount; });
        return Number(field.value);
    };
    HomePage.prototype.ngOnInit = function () {
        var _a, _b;
        this.formId = (_a = this.route.snapshot.paramMap.get('id')) !== null && _a !== void 0 ? _a : ((_b = this.router.getCurrentNavigation().extras.state) === null || _b === void 0 ? void 0 : _b.product).id;
        this.persistenceForm.formId = this.formId;
        this.getFormInfo();
    };
    HomePage.prototype.ngOnDestroy = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastService.hide()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(HomePage.prototype, "minAmount", {
        get: function () {
            var _this = this;
            var _a, _b, _c;
            var controlName = (_b = (_a = this.viewModel.fields.find(function (field) { return (field === null || field === void 0 ? void 0 : field.field.type) === _this.config.referenceAmount; })) === null || _a === void 0 ? void 0 : _a.field) === null || _b === void 0 ? void 0 : _b.name;
            return controlName ? (_c = this.viewModel.form.get(controlName)) === null || _c === void 0 ? void 0 : _c.value : 0;
        },
        enumerable: false,
        configurable: true
    });
    HomePage.prototype.getSelectorOptions = function (field, searchCriteria) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var formParams;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_k) {
                if (field.fieldDependency &&
                    ((_b = (_a = this.viewModel.form.value) === null || _a === void 0 ? void 0 : _a[field.fieldDependency]) === null || _b === void 0 ? void 0 : _b.value.length) > 0 && ((_e = (_d = (_c = this.viewModel.form.value) === null || _c === void 0 ? void 0 : _c[field.fieldDependency]) === null || _d === void 0 ? void 0 : _d.value) === null || _e === void 0 ? void 0 : _e[0].listName)) {
                    field.config.listName = (_h = (_g = (_f = this.viewModel.form.value) === null || _f === void 0 ? void 0 : _f[field.fieldDependency]) === null || _g === void 0 ? void 0 : _g.value) === null || _h === void 0 ? void 0 : _h[0].listName;
                }
                formParams = (_j = field.params) === null || _j === void 0 ? void 0 : _j.reduce(function (currentParams, param) {
                    var _a;
                    currentParams[param] = (_a = _this.viewModel.form.value) === null || _a === void 0 ? void 0 : _a[param];
                    return currentParams;
                }, {});
                return [2 /*return*/, this.dynamicFormInteractor.getListOptions(field.config.listName, formParams, searchCriteria)];
            });
        });
    };
    HomePage.prototype.onButtonClicked = function (button) {
        this.handleButtonAction(button, this.formId);
    };
    HomePage.prototype.getFormInfo = function () {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var formInfo, screenConfig, screenConfigValidate, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.loadingError = '';
                        this.isLoading = true;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, 7, 8]);
                        return [4 /*yield*/, this.dynamicFormInteractor.getProductInfo(this.formId)];
                    case 2:
                        formInfo = _b.sent();
                        return [4 /*yield*/, this.getScreenConfig(_nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_2__["FlowScreens"].HOME)];
                    case 3:
                        screenConfig = _b.sent();
                        return [4 /*yield*/, this.getScreenConfig(_nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_2__["FlowScreens"].VALIDATE)];
                    case 4:
                        screenConfigValidate = _b.sent();
                        this.showOriginMoney = !!((_a = screenConfigValidate.complementaryConfiguration) === null || _a === void 0 ? void 0 : _a.hideView);
                        return [4 /*yield*/, this.onGetFormInfoSuccess(formInfo, screenConfig)];
                    case 5:
                        _b.sent();
                        return [3 /*break*/, 8];
                    case 6:
                        error_1 = _b.sent();
                        this.loadingError = error_1.message;
                        return [3 /*break*/, 8];
                    case 7:
                        this.isLoading = false;
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.onGetFormInfoSuccess = function (form, screenConfig) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var updatedForm, canShowInformativeView;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.viewModel.fieldOptionsFunction = this.getSelectorOptions.bind(this);
                        return [4 /*yield*/, this.updateFormValues(form)];
                    case 1:
                        updatedForm = _a.sent();
                        this.viewModel.initForm(updatedForm, screenConfig);
                        return [4 /*yield*/, this.dynamicFormInteractor.mustShowInformativeView(screenConfig.informativeView.frequency, form.id)];
                    case 2:
                        canShowInformativeView = _a.sent();
                        if (!canShowInformativeView) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.showInformativeView(screenConfig.informativeView)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        if (!screenConfig.toast) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.dynamicFormService.showToast(screenConfig, _nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_2__["FlowScreens"].HOME, this.formId)];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6:
                        this.setDynamicAnalyticsOfIntention(form, _nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_2__["AnalyticsWhen"].INITIAL_INTENTION);
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.updateFormValues = function (form) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var persistentData;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.applicationDataInteractor.findValue(this.moduleConfigProvider.applicationData.persistenceHomeDataKey + this.formId)];
                    case 1:
                        persistentData = _a.sent();
                        if (!(!(form === null || form === void 0 ? void 0 : form.cache) && persistentData)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.applicationDataInteractor.remove(this.moduleConfigProvider.applicationData.persistenceHomeDataKey + this.formId)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, form];
                    case 3:
                        if (persistentData) {
                            form.boxes.map(function (box) {
                                return box.fields.map(function (field) {
                                    if (persistentData[field.name]) {
                                        field.value = persistentData[field.name];
                                    }
                                    return field;
                                });
                            });
                        }
                        return [2 /*return*/, form];
                }
            });
        });
    };
    HomePage.prototype.getReferences = function (items, control) {
        var _a, _b;
        var _c, _d, _e;
        if (control.field.type === _nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_2__["FieldType"].CONTACT) {
            var reference = control.field.name.replace(this.config.replace.regex, function (_number) {
                return (parseInt(_number, 10) + 1).toString();
            });
            return _a = {},
                _a[control.field.name] = (_c = this.viewModel.form.get(control.field.name).value) === null || _c === void 0 ? void 0 : _c.phoneNumber,
                _a[reference] = (_d = this.viewModel.form.get(control.field.name).value) === null || _d === void 0 ? void 0 : _d.completeName,
                _a;
        }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, items), (_b = {}, _b[control.field.name] = control.field.type === _nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_2__["FieldType"].SELECT || control.field.type === _nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_2__["FieldType"].SEARCH
            ? (_e = this.viewModel.form.get(control.field.name).value) === null || _e === void 0 ? void 0 : _e.value : this.viewModel.form.get(control.field.name).value, _b));
    };
    HomePage.prototype.showInformativeView = function (informativeView) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dynamicInformativeViewBottomSheetService.show(informativeView)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.openScanner = function (dynamicButtonActionInformation) {
        var _a, _b, _c;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var scannerView, scannerButton, button, qrString, error_2;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 2, , 3]);
                        scannerView = dynamicButtonActionInformation.actionInfo.scannerView;
                        scannerButton = scannerView.button;
                        button = {
                            icon: (_a = scannerButton === null || scannerButton === void 0 ? void 0 : scannerButton.icon) !== null && _a !== void 0 ? _a : '',
                            code: (_b = scannerButton === null || scannerButton === void 0 ? void 0 : scannerButton.code) !== null && _b !== void 0 ? _b : '',
                            name: (_c = scannerButton === null || scannerButton === void 0 ? void 0 : scannerButton.name) !== null && _c !== void 0 ? _c : '',
                        };
                        return [4 /*yield*/, this.qrReaderService.launch({
                                content: scannerView === null || scannerView === void 0 ? void 0 : scannerView.content,
                                imageName: '',
                                title: scannerView === null || scannerView === void 0 ? void 0 : scannerView.title,
                                showGalleryButton: scannerView === null || scannerView === void 0 ? void 0 : scannerView.showGalleryButton.toString(),
                            }, button)];
                    case 1:
                        qrString = _d.sent();
                        if (!qrString) {
                            return [2 /*return*/];
                        }
                        this.processBarcode(qrString, dynamicButtonActionInformation);
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _d.sent();
                        if (error_2 !== this.config.errors.goBackOnCamera) {
                            this.handleError(error_2);
                        }
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.processBarcode = function (barcode, button) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var pendingBills, error_3;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 6]);
                        return [4 /*yield*/, this.loadingService.show()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.dynamicFormInteractor.processBarcode(this.formId, barcode)];
                    case 2:
                        pendingBills = _a.sent();
                        return [4 /*yield*/, this.getPendingBills(pendingBills, button)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 4:
                        error_3 = _a.sent();
                        return [4 /*yield*/, this.loadingService.hide(false)];
                    case 5:
                        _a.sent();
                        this.handleError(error_3);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.handleError = function (error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var alertConfig;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dynamicFormInteractor.getErrorAlert(this.formId, error.code)];
                    case 1:
                        alertConfig = _a.sent();
                        if (!alertConfig) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.loadingService.hide(true)];
                    case 2:
                        _a.sent();
                        this.handleAlertInformation(alertConfig, this.formId);
                        return [2 /*return*/];
                    case 3: return [4 /*yield*/, this.unhandledError(error)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.getPendingBills = function (params, barcodeButton) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var form, formId, _a, error_4;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        form = this.viewModel.formInfo;
                        formId = form.id;
                        return [4 /*yield*/, this.loadingService.show()];
                    case 1:
                        _b.sent();
                        this.setDynamicAnalyticsOfIntention(form, _nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_2__["AnalyticsWhen"].QUERY_INTENTION);
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 4, , 7]);
                        _a = this;
                        return [4 /*yield*/, this.dynamicFormInteractor.getPendingBills(formId, params)];
                    case 3:
                        _a.bills = _b.sent();
                        this.onGetPendingBillsSuccess(this.bills);
                        return [3 /*break*/, 7];
                    case 4:
                        error_4 = _b.sent();
                        if (!barcodeButton) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.onGetPendingBillsFailFromBarcodeScanning(barcodeButton)];
                    case 5:
                        _b.sent();
                        return [2 /*return*/];
                    case 6:
                        this.handleError(error_4);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.onGetPendingBillsSuccess = function (billsResponse) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingService.hide(true)];
                    case 1:
                        _a.sent();
                        if (this.mustShowSubmitAlert(this.viewModel.screenConfig) ||
                            billsResponse[0].showBeforeGoToNextAlert) {
                            this.handleAlertInformation('beforeGoToNextAlert', this.formId);
                        }
                        else {
                            this.defineSubmitAction(billsResponse);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.defineSubmitAction = function (billsResponse) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var screenConfig, bill;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getScreenConfig(_nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_2__["FlowScreens"].VALIDATE)];
                    case 1:
                        screenConfig = _b.sent();
                        this.persistenceForm.homeForm = this.viewModel.form.value;
                        if ((_a = screenConfig.complementaryConfiguration) === null || _a === void 0 ? void 0 : _a.hideView) {
                            bill = billsResponse[0];
                            this.executeTransaction(this.getTransactionInfo(bill));
                        }
                        else {
                            this.navigateToNext(billsResponse);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.getTransactionInfo = function (bill) {
        return new _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_1__["Transaction"](bill.operationType)
            .withAmount(this.getTransactionValue(bill))
            .withPocket(this.viewModel.pocketControl.value)
            .withData(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, bill), { fields: bill.fields }))
            .useRepository(_nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_2__["DynamicFormRepository"].name);
    };
    HomePage.prototype.navigateToNext = function (bills) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var screenConfig;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getScreenConfig(_nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_2__["FlowScreens"].PRODUCTS)];
                    case 1:
                        screenConfig = _a.sent();
                        if (!(bills.length === 1)) return [3 /*break*/, 2];
                        this.navigatorProvider.navigateForward([_dynamic_form_config__WEBPACK_IMPORTED_MODULE_5__["DynamicFormConfig"].routes.form, this.formId, _dynamic_form_config__WEBPACK_IMPORTED_MODULE_5__["DynamicFormConfig"].routes.validate], {
                            state: bills[0],
                        });
                        return [3 /*break*/, 4];
                    case 2:
                        this.dynamicFormService.showProductList(screenConfig.title, bills);
                        if (!screenConfig.toast) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.dynamicFormService.showToast(screenConfig, _nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_2__["FlowScreens"].PRODUCTS, this.formId)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.onGetPendingBillsFailFromBarcodeScanning = function (button) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loadingService.hide(false);
                        messages = this.translateProvider.get(this.config.i18n.homeGetPendingBillRetryAlert);
                        return [4 /*yield*/, this.alertService.show({
                                messages: {
                                    header: messages.title,
                                    message: messages.content,
                                    buttons: {
                                        cancel: messages.cancelButton,
                                        accept: messages.actionButton,
                                    },
                                },
                                handlers: {
                                    cancel: function () { },
                                    accept: function () {
                                        _this.onScan(button);
                                    },
                                },
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.mustShowSubmitAlert = function (screenConfiguration) {
        var _this = this;
        var hasAlertConfig = false;
        screenConfiguration.buttons.forEach(function (button) {
            var _a;
            hasAlertConfig =
                ((_a = screenConfiguration === null || screenConfiguration === void 0 ? void 0 : screenConfiguration.complementaryConfiguration) === null || _a === void 0 ? void 0 : _a.beforeGoToNextAlert) &&
                    _this.isSubmitButton(button);
        });
        return hasAlertConfig;
    };
    HomePage.prototype.getScreenConfig = function (flow) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, this.dynamicFormInteractor.getScreenConfiguration(flow, this.formId)];
            });
        });
    };
    HomePage.prototype.setDynamicAnalyticsOfIntention = function (form, tagType) {
        var tag = _nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_2__["AnalyticsWhen"].INITIAL_INTENTION;
        var posTag = 0;
        if (tagType === _nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_2__["AnalyticsWhen"].QUERY_INTENTION) {
            tag = _nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_2__["AnalyticsWhen"].QUERY_INTENTION;
            posTag = 1;
        }
        if (form.tags) {
            var tagToSend = Array.isArray(form === null || form === void 0 ? void 0 : form.tags) ? form.tags[posTag][tag] : form.tags[tag];
            if (tagToSend) {
                this.dynamicFormInteractor.processTagsParams({
                    event: tagToSend.clevertap,
                    commerce: form.id,
                });
                this.setAnalyticsIntention(tagToSend);
            }
        }
    };
    HomePage.prototype.setAnalyticsIntention = function (configTag) {
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
                eventProps: Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_4__["stringsArrayToObjectWithValues"])(property, valueProperty),
            },
        });
    };
    HomePage.ɵfac = function HomePage_Factory(t) { return ɵHomePage_BaseFactory(t || HomePage); };
    HomePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: HomePage, selectors: [["app-dynamic-form-home"]], viewQuery: function HomePage_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_3__["OriginMoneyControlComponent"], 1);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.originMoneyControl = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]], decls: 16, vars: 7, consts: [[1, "nequi-header"], ["slot", "start"], [3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], ["slot", "end"], ["id", "home_balance_button", 3, "click"], ["slot", "icon-only", 3, "name"], [1, "nequi-header__title", "ion-text-start"], [3, "isDarkTheme", "isShow"], ["fullscreen", "", "scrollEvents", "true", "appAnimateTitleOnScroll", "", "appFormContentStyle", "", 1, "ion-content--enroll", "ion-padding-horizontal"], [4, "ngIf", "ngIfElse"], ["class", "nequi-footer dynamic-form-home", 4, "ngIf"], ["content", ""], [3, "showReload", "reloadMessage", "onReload"], [1, "nequi-footer", "dynamic-form-home"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "margin-vertical-16", "shape", "round", "color", "guayaba", "expand", "block", 3, "disabled", "click", 4, "ngIf"], ["class", "nequi-footer__button button-link", "expand", "block", "fill", "clear", 3, "click", 4, "ngIf"], ["shape", "round", "color", "guayaba", "expand", "block", 1, "margin-vertical-16", 3, "disabled", "click"], ["expand", "block", "fill", "clear", 1, "nequi-footer__button", "button-link", 3, "click"], [1, "nequi-title"], [3, "formGroup", 4, "ngIf"], [3, "formGroup"], ["id", "home_box_title", 1, "form__title"], [1, "dynamic-fields"], [3, "formControl", "dependency", "field", 4, "ngFor", "ngForOf"], ["id", "home_box_description", 1, "text-description"], [3, "formControl", "dependency", "field"], [1, "form__title", "margin-bottom-8"], [3, "formControl", "minAmount", "title"]], template: function HomePage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HomePage_Template_ion_button_click_3_listener() { return ctx.onGoBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "ion-buttons", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "ion-button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HomePage_Template_ion_button_click_6_listener() { return ctx.viewModel.balanceToggle = !ctx.viewModel.balanceToggle; });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "ion-icon", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "ion-title", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "app-balance-header", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "ion-content", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, HomePage_ng_container_12_Template, 2, 2, "ng-container", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, HomePage_ion_footer_13_Template, 2, 1, "ion-footer", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, HomePage_ng_template_14_Template, 3, 2, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
        } if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("name", ctx.viewModel.balanceToggle ? "chevron-up-outline" : "chevron-down-outline");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx.viewModel.title, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("isDarkTheme", false)("isShow", ctx.viewModel.balanceToggle);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isLoading || !!ctx.loadingError)("ngIfElse", _r2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.isLoading || !ctx.loadingError);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonTitle"], _money_management_src_presentation_components_balance_header_balance_header_component__WEBPACK_IMPORTED_MODULE_12__["BalanceHeaderComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonContent"], _ui_src_lib_directives_animate_title_on_scroll_animate_title_on_scroll_directive__WEBPACK_IMPORTED_MODULE_13__["AnimateTitleOnScrollDirective"], _ui_src_lib_directives_form_content_style_form_content_style_directive__WEBPACK_IMPORTED_MODULE_14__["FormContentStyleDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _ui_src_lib_components_busy_indicator_busy_indicator_component__WEBPACK_IMPORTED_MODULE_16__["BusyIndicatorComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonFooter"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonText"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonList"], _controls_dynamic_input_dynamic_input_component__WEBPACK_IMPORTED_MODULE_18__["DynamicInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormControlDirective"], _money_management_src_presentation_controls_origin_money_control_origin_money_control_component__WEBPACK_IMPORTED_MODULE_19__["OriginMoneyControlComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__["TranslatePipe"]], styles: [".nequi-item[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%]    > .nequi-item[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.button-link[_ngcontent-%COMP%] {\n  height: auto;\n  margin-bottom: 8px;\n  --color: var(--input-purple);\n}\n\n.form__title.margin-bottom-8[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n\n.dynamic-fields[_ngcontent-%COMP%] {\n  contain: none;\n}\n\n.dynamic-form-home[_ngcontent-%COMP%]   .nequi-footer__toolbar[_ngcontent-%COMP%] {\n  box-shadow: none;\n  padding: 8px 0px 8px 0px;\n  margin-top: -5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFHRTtFQUNFLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQUFKIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5lcXVpLWl0ZW0gKyAqID4gLm5lcXVpLWl0ZW0ge1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5idXR0b24tbGluayB7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAtLWNvbG9yOiB2YXIoLS1pbnB1dC1wdXJwbGUpO1xufVxuXG4uZm9ybV9fdGl0bGUubWFyZ2luLWJvdHRvbS04IHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4uZHluYW1pYy1maWVsZHMge1xuICBjb250YWluOiBub25lO1xufVxuXG4uZHluYW1pYy1mb3JtLWhvbWUge1xuICAubmVxdWktZm9vdGVyX190b29sYmFyIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIHBhZGRpbmc6IDhweCAwcHggOHB4IDBweDtcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xuICB9XG59XG4iXX0= */"] });
    return HomePage;
}(_base_page__WEBPACK_IMPORTED_MODULE_6__["DynamicFormBasePage"]));

var ɵHomePage_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetInheritedFactory"](HomePage);


/***/ }),

/***/ "QAPA":
/*!**************************************************************************************!*\
  !*** ./libs/features/dynamic-form/src/presentation/services/dynamic-form.service.ts ***!
  \**************************************************************************************/
/*! exports provided: DynamicFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFormService", function() { return DynamicFormService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/dynamic-form/core */ "//55");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _nequi_ui_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/ui/services */ "U66T");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _dynamic_form_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dynamic-form.config */ "NzzY");
/* harmony import */ var _organisms_product_list_product_list_organism__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../organisms/product-list/product-list.organism */ "tcRU");
/* harmony import */ var _bottom_sheet_dynamic_list_bottom_sheet_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bottom-sheet/dynamic-list-bottom-sheet.service */ "bpBy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");
















var DynamicFormService = /** @class */ (function () {
    function DynamicFormService(dynamicListBottomSheetService, dynamicFormInteractor, navController, cardModalService, alertService, toastService) {
        this.dynamicListBottomSheetService = dynamicListBottomSheetService;
        this.dynamicFormInteractor = dynamicFormInteractor;
        this.navController = navController;
        this.cardModalService = cardModalService;
        this.alertService = alertService;
        this.toastService = toastService;
        this.showedToasts = [];
    }
    DynamicFormService.prototype.resetShowedToasts = function () {
        this.showedToasts = [];
    };
    /**
     * @returns The button when the button action can`t be resolved
     */
    DynamicFormService.prototype.showAlertInfo = function (alertInfo, screen, formId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!alertInfo) {
                            return [2 /*return*/];
                        }
                        if (!(typeof alertInfo === 'string')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.dynamicFormInteractor.getAlert(alertInfo, screen, formId)];
                    case 1:
                        alert = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        alert = alertInfo;
                        _a.label = 3;
                    case 3:
                        if (!alert) {
                            return [2 /*return*/];
                        }
                        return [2 /*return*/, new Promise(function (resolve) {
                                var _a, _b, _c, _d;
                                if (alert.type === 'modal') {
                                    _this.cardModalService.show({
                                        imgPath: (_a = alert.image) !== null && _a !== void 0 ? _a : _dynamic_form_config__WEBPACK_IMPORTED_MODULE_7__["DynamicFormConfig"].defaultSuccessAlertAsset,
                                        title: alert.title,
                                        content: alert.content,
                                        buttons: alert.buttons.map(function (button, index) {
                                            return {
                                                text: button.label,
                                                handler: function () { return resolve(button); },
                                                color: index === 0 ? 'guayaba' : 'medianoche-gray',
                                            };
                                        }),
                                    });
                                }
                                else {
                                    _this.alertService.show({
                                        messages: {
                                            header: alert.title,
                                            message: alert.content,
                                            buttons: {
                                                cancel: (_b = alert.buttons[0]) === null || _b === void 0 ? void 0 : _b.label,
                                                accept: (_d = (_c = alert.buttons[1]) === null || _c === void 0 ? void 0 : _c.label) !== null && _d !== void 0 ? _d : undefined,
                                            },
                                        },
                                        handlers: {
                                            cancel: function () { return resolve(alert.buttons[0]); },
                                            accept: function () { return resolve(alert.buttons[1]); },
                                        },
                                    });
                                }
                            })];
                }
            });
        });
    };
    /**
     * Handle click on dynamic Button clicked
     *
     * @returns The button when the button action can`t be resolved
     */
    DynamicFormService.prototype.handleButtonClick = function (button, screen, formId) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (button === null || button === void 0 ? void 0 : button.action) {
                    case _nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_3__["ActionType"].ALERT:
                        return [2 /*return*/, this.showAlertInfo((_a = button.actionInfo) === null || _a === void 0 ? void 0 : _a.alert, screen, formId)];
                    case _nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_3__["ActionType"].GO_TO_LINK:
                        Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_6__["openUrl"])(button.actionInfo.url);
                        break;
                    case _nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_3__["ActionType"].GO_TO:
                        this.navController.navigateForward(button.actionInfo.goTo);
                        break;
                    default:
                        return [2 /*return*/, button];
                }
                return [2 /*return*/];
            });
        });
    };
    DynamicFormService.prototype.showProductList = function (title, productList) {
        var _this = this;
        var itemsProductList = productList.map(function (item) {
            return {
                name: item.title,
                description: item.description,
                action: function () {
                    _this.goToItem(item, [
                        _dynamic_form_config__WEBPACK_IMPORTED_MODULE_7__["DynamicFormConfig"].routes.form,
                        item.formId,
                        _dynamic_form_config__WEBPACK_IMPORTED_MODULE_7__["DynamicFormConfig"].routes.validate,
                    ]);
                },
            };
        });
        var optionsBottomSheet = itemsProductList;
        this.dynamicListBottomSheetService.show({
            title: title,
            items: optionsBottomSheet,
        }, _organisms_product_list_product_list_organism__WEBPACK_IMPORTED_MODULE_8__["ProductListOrganism"]);
    };
    DynamicFormService.prototype.showToast = function (screenConfig, screenName, formId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var buttons;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (!this.showedToasts.includes(screenName)) {
                    buttons = [];
                    if (screenConfig.toast.button) {
                        buttons = [
                            {
                                side: 'end',
                                text: screenConfig.toast.button.label,
                                handler: function () {
                                    return _this.handleButtonClick(screenConfig.toast.button, screenName, formId);
                                },
                            },
                        ];
                    }
                    this.toastService.show(screenConfig.toast.content, _nequi_ui__WEBPACK_IMPORTED_MODULE_4__["ToastType"].INFO, null, _nequi_ui_services__WEBPACK_IMPORTED_MODULE_5__["ToastPosition"].TOP, buttons);
                    this.showedToasts.push(screenName);
                }
                return [2 /*return*/];
            });
        });
    };
    DynamicFormService.prototype.goToItem = function (item, route) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dynamicListBottomSheetService.hide()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.navController.navigateForward(route, {
                                state: item,
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DynamicFormService.ɵfac = function DynamicFormService_Factory(t) { return new (t || DynamicFormService)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_bottom_sheet_dynamic_list_bottom_sheet_service__WEBPACK_IMPORTED_MODULE_9__["DynamicListBottomSheetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_3__["DynamicFormInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_nequi_features_commons__WEBPACK_IMPORTED_MODULE_1__["NavigatorProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_4__["CardModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_2__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_4__["ToastService"])); };
    DynamicFormService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({ token: DynamicFormService, factory: DynamicFormService.ɵfac });
    return DynamicFormService;
}());



/***/ }),

/***/ "YpBf":
/*!*******************************************************************************************************!*\
  !*** ./libs/features/dynamic-form/src/presentation/controls/dynamic-input/dynamic-input.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: DynamicInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicInputComponent", function() { return DynamicInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/dynamic-form/core */ "//55");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ui_src_lib_directives_message_manager_message_manager_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../ui/src/lib/directives/message-manager/message-manager.directive */ "68HU");
/* harmony import */ var _ui_src_lib_controls_input_select_input_select_control_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../ui/src/lib/controls/input-select/input-select-control.component */ "BMu5");
/* harmony import */ var _search_select_search_select_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../search-select/search-select.component */ "CcfQ");
/* harmony import */ var _ui_src_lib_controls_nequi_input_currency_nequi_input_currency_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../ui/src/lib/controls/nequi-input-currency/nequi-input-currency.component */ "VG0r");
/* harmony import */ var _contacts_src_presentation_controls_contact_control_contact_selector_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../contacts/src/presentation/controls/contact-control/contact-selector.component */ "2MVS");
var _a;


/* eslint-disable no-use-before-define */














function DynamicInputComponent_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function DynamicInputComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DynamicInputComponent_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r5);
} }
function DynamicInputComponent_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function DynamicInputComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DynamicInputComponent_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r11);
} }
function DynamicInputComponent_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function DynamicInputComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DynamicInputComponent_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r7);
} }
function DynamicInputComponent_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function DynamicInputComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DynamicInputComponent_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r9);
} }
function DynamicInputComponent_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function DynamicInputComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DynamicInputComponent_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r13);
} }
var _c0 = function (a0, a1, a2) { return { control: a0, errorMessages: a1, helpMessage: a2, cssClass: "margin-bottom-8" }; };
var _c1 = function (a0) { return { informative: a0 }; };
function DynamicInputComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ionFocus", function DynamicInputComponent_ng_template_6_Template_ion_input_ionFocus_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); ctx_r20.formControl.markAsUntouched(); return ctx_r20.formControl.markAsPristine(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx_r6.isHidden)("nequiMessageManager", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](9, _c0, ctx_r6.formControl, ctx_r6.validationMessages, ctx_r6.validationMessages.info));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](13, _c1, !ctx_r6.fieldConfig.isEditable));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r6.fieldConfig.placeHolder, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("inputmode", ctx_r6.fieldConfig.inputType)("readonly", !ctx_r6.fieldConfig.isEditable)("formControl", ctx_r6.formControl)("type", ctx_r6.fieldConfig.inputType)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](15, _c1, !ctx_r6.fieldConfig.isEditable));
} }
function DynamicInputComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nequi-input-select-control", 11);
} if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx_r8.isHidden)("isReadOnly", !ctx_r8.fieldConfig.isEditable)("formControl", ctx_r8.formControl)("hideFilter", true)("label", ctx_r8.fieldConfig.placeHolder)("options", ctx_r8.getSelectOptions.bind(ctx_r8))("isDynamicForms", true);
} }
function DynamicInputComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-search-select", 12);
} if (rf & 2) {
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx_r10.isHidden)("placeholder", ctx_r10.fieldConfig.placeHolder)("formControl", ctx_r10.formControl)("hint", ctx_r10.fieldConfig.config.description)("emptyMessage", ctx_r10.fieldConfig.config.emptyMessage)("minLengthToSearch", ctx_r10.fieldConfig.config.minLengthToSearch)("options", ctx_r10.getSelectOptions.bind(ctx_r10));
} }
function DynamicInputComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "nequi-input-currency", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx_r12.isHidden)("nequiMessageManager", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](7, _c0, ctx_r12.formControl, ctx_r12.validationMessages, ctx_r12.validationMessages.info));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](11, _c1, !ctx_r12.fieldConfig.isEditable));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r12.fieldConfig.placeHolder, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("isReadOnly", !ctx_r12.fieldConfig.isEditable)("control", ctx_r12.formControl)("decimalLimit", ctx_r12.decimalLimit);
} }
function DynamicInputComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-contact-control", 14);
} if (rf & 2) {
    var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("allowInvitation", false)("placeholder", ctx_r14.fieldConfig.placeHolder)("formControl", ctx_r14.formControl);
} }
var ValidationMapper = (_a = {},
    _a[_nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_4__["ValidationType"].REQUIRED] = _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
    _a[_nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_4__["ValidationType"].MIN] = _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min,
    _a[_nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_4__["ValidationType"].MAX] = _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max,
    _a[_nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_4__["ValidationType"].MIN_LENGTH] = _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength,
    _a[_nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_4__["ValidationType"].MAX_LENGTH] = _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength,
    _a[_nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_4__["ValidationType"].PATTERN] = _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern,
    _a);
var getNumberOfDecimals = function (value) {
    var numberValue = Number(value);
    if (isNaN(numberValue)) {
        return 0;
    }
    if (numberValue % 1 !== 0) {
        return numberValue.toString().split('.')[1].length;
    }
    return 0;
};
var getValidationMessages = function (messages, validation) {
    messages[validation.type] = validation.message;
    return messages;
};
var getValidations = function (validations) { return validations === null || validations === void 0 ? void 0 : validations.map(function (validation) {
    var _a;
    if (validation.type === _nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_4__["ValidationType"].REQUIRED) {
        return ValidationMapper[validation.type];
    }
    return (_a = ValidationMapper[validation.type]) === null || _a === void 0 ? void 0 : _a.call(ValidationMapper, validation.value);
}).filter(function (validation) { return !!validation; }); };
var DynamicInputComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DynamicInputComponent, _super);
    function DynamicInputComponent(currencyConfigProvider) {
        var _this = _super.call(this) || this;
        _this.currencyConfigProvider = currencyConfigProvider;
        _this.FieldTypes = _nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_4__["FieldType"];
        return _this;
    }
    Object.defineProperty(DynamicInputComponent.prototype, "fieldConfig", {
        get: function () {
            var _a;
            return (_a = this.fieldConfigByDependency) !== null && _a !== void 0 ? _a : this.field;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicInputComponent.prototype, "isHidden", {
        get: function () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            var hasDependency = !!this.dependency;
            var isInvalidDependencyValue = !((_a = this.dependency) === null || _a === void 0 ? void 0 : _a.value) && ((_b = this.dependency) === null || _b === void 0 ? void 0 : _b.invalid);
            return ((!hasDependency && !this.field.isVisible) ||
                (hasDependency && isInvalidDependencyValue && !this.field.isVisible) ||
                (hasDependency && ((_c = this.field) === null || _c === void 0 ? void 0 : _c.id) &&
                    ((_d = this.field) === null || _d === void 0 ? void 0 : _d.id) !== ((_f = (_e = this.dependency) === null || _e === void 0 ? void 0 : _e.value) === null || _f === void 0 ? void 0 : _f.value) &&
                    ((_j = (_h = (_g = this.dependency) === null || _g === void 0 ? void 0 : _g.value) === null || _h === void 0 ? void 0 : _h.value) === null || _j === void 0 ? void 0 : _j.length) < 0));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicInputComponent.prototype, "decimalLimit", {
        get: function () {
            return Math.max.apply(Math, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])([getNumberOfDecimals(this.field.value),
                this.currencyConfigProvider.decimalLimit], this.field.validations
                .filter(function (validation) {
                return validation.type === _nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_4__["ValidationType"].MIN || validation.type === _nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_4__["ValidationType"].MAX;
            })
                .map(function (validation) { return getNumberOfDecimals(validation.value); })));
        },
        enumerable: false,
        configurable: true
    });
    // Override
    DynamicInputComponent.prototype.ngOnInit = function () {
        var _a;
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, getValidations(this.field.validations));
        this.validationMessages = (_a = this.fieldConfig) === null || _a === void 0 ? void 0 : _a.validations.reduce(getValidationMessages, {
            info: this.field.toolTip,
        });
        this.watchControlChanges();
        this.watchDependencyChanges();
    };
    // Override
    DynamicInputComponent.prototype.ngOnChanges = function (_changes) {
        this.watchDependencyChanges();
    };
    // Override
    DynamicInputComponent.prototype.ngOnDestroy = function () {
        var _a, _b;
        (_a = this.$dependencySubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        (_b = this.$controlSubscription) === null || _b === void 0 ? void 0 : _b.unsubscribe();
    };
    // Override
    DynamicInputComponent.prototype.writeValue = function (value) {
        this.value = value;
        this.formControl.setValue(value);
    };
    // Override
    DynamicInputComponent.prototype.registerOnChange = function (fn) {
        this.formControl.registerOnChange(fn);
        this.onChange = fn;
    };
    // Override
    DynamicInputComponent.prototype.setDisabledState = function (isDisabled) {
        this.switchControlState(isDisabled);
    };
    // Override
    DynamicInputComponent.prototype.validate = function () {
        return this.formControl.invalid && !this.isHidden && this.formControl.errors;
    };
    DynamicInputComponent.prototype.getSelectOptions = function (searchCriteria) {
        var _a, _b;
        return (_b = (_a = this.field).options) === null || _b === void 0 ? void 0 : _b.call(_a, this.field, searchCriteria);
    };
    DynamicInputComponent.prototype.watchControlChanges = function () {
        var _this = this;
        if (this.$controlSubscription) {
            return;
        }
        this.$controlSubscription = this.formControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])())
            .subscribe(function (value) {
            var _a;
            (_a = _this.onChange) === null || _a === void 0 ? void 0 : _a.call(_this, value);
        });
    };
    DynamicInputComponent.prototype.watchDependencyChanges = function () {
        var _this = this;
        this.switchControlState();
        if (!this.dependency || this.$dependencySubscription) {
            return;
        }
        this.$dependencySubscription = this.dependency.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])())
            .subscribe(function () {
            var _a;
            _this.switchControlState();
            _this.formControl.setValue(null);
            if (((_a = _this.field.configByDependency) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                _this.updateFieldInfo();
            }
        });
    };
    DynamicInputComponent.prototype.updateFieldInfo = function () {
        var _this = this;
        var _a, _b, _c;
        if (((_a = this.field.configByDependency) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            this.fieldConfigByDependency = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.field), this.field.configByDependency.find(function (config) { return config.id === _this.dependency.value.value; }));
        }
        this.formControl.setValidators(getValidations((_b = this.fieldConfig) === null || _b === void 0 ? void 0 : _b.validations));
        this.validationMessages = (_c = this.fieldConfig) === null || _c === void 0 ? void 0 : _c.validations.reduce(getValidationMessages, {
            info: this.field.toolTip,
        });
    };
    DynamicInputComponent.prototype.switchControlState = function (isDisabled) {
        var _a, _b, _c;
        if (isDisabled === void 0) { isDisabled = false; }
        if ((!this.dependency && !isDisabled) || (!isDisabled && ((_a = this.dependency) === null || _a === void 0 ? void 0 : _a.valid))) {
            return (_b = this.formControl) === null || _b === void 0 ? void 0 : _b.enable();
        }
        return (_c = this.formControl) === null || _c === void 0 ? void 0 : _c.disable();
    };
    DynamicInputComponent.ɵfac = function DynamicInputComponent_Factory(t) { return new (t || DynamicInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_5__["CurrencyConfigProvider"])); };
    DynamicInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DynamicInputComponent, selectors: [["app-dynamic-input"]], inputs: { field: "field", dependency: "dependency" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                    multi: true,
                    useExisting: DynamicInputComponent,
                },
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"],
                    multi: true,
                    useExisting: DynamicInputComponent,
                },
            ]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 16, vars: 6, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], ["input", ""], ["select", ""], ["search", ""], ["money", ""], ["contact", ""], [4, "ngTemplateOutlet"], [1, "nequi-item", "margin-bottom-8", 3, "hidden", "nequiMessageManager"], ["position", "floating", 1, "nequi-item__label", 3, "ngClass"], ["inputmode", "fieldConfig.inputType", "id", "dynamic-form_basic_input", 1, "nequi-item__input", 3, "inputmode", "readonly", "formControl", "type", "ngClass", "ionFocus"], ["id", "dynamic-form_select_input", "visibleKey", "title", 1, "margin-bottom-8", 3, "hidden", "isReadOnly", "formControl", "hideFilter", "label", "options", "isDynamicForms"], [1, "margin-bottom-8", 3, "hidden", "placeholder", "formControl", "hint", "emptyMessage", "minLengthToSearch", "options"], ["id", "dynamic-form_input", "tooltipType", "error", "inputClass", "nequi-item__input", 1, "sc-ion-input-ios-h", 3, "isReadOnly", "control", "decimalLimit"], [3, "allowInvitation", "placeholder", "formControl"]], template: function DynamicInputComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DynamicInputComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DynamicInputComponent_ng_container_2_Template, 2, 1, "ng-container", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DynamicInputComponent_ng_container_3_Template, 2, 1, "ng-container", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, DynamicInputComponent_ng_container_4_Template, 2, 1, "ng-container", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, DynamicInputComponent_ng_container_5_Template, 2, 1, "ng-container", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, DynamicInputComponent_ng_template_6_Template, 4, 17, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, DynamicInputComponent_ng_template_8_Template, 1, 7, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, DynamicInputComponent_ng_template_10_Template, 1, 7, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, DynamicInputComponent_ng_template_12_Template, 4, 13, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, DynamicInputComponent_ng_template_14_Template, 1, 3, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx.fieldConfig.type);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", ctx.FieldTypes.INPUT);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", ctx.FieldTypes.MONEY);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", ctx.FieldTypes.SELECT);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", ctx.FieldTypes.SEARCH);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", ctx.FieldTypes.CONTACT);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgTemplateOutlet"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonItem"], _ui_src_lib_directives_message_manager_message_manager_directive__WEBPACK_IMPORTED_MODULE_8__["MessageManagerDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlDirective"], _ui_src_lib_controls_input_select_input_select_control_component__WEBPACK_IMPORTED_MODULE_9__["InputSelectControlComponent"], _search_select_search_select_component__WEBPACK_IMPORTED_MODULE_10__["SearchSelectComponent"], _ui_src_lib_controls_nequi_input_currency_nequi_input_currency_component__WEBPACK_IMPORTED_MODULE_11__["NequiInputCurrencyComponent"], _contacts_src_presentation_controls_contact_control_contact_selector_component__WEBPACK_IMPORTED_MODULE_12__["ContactControlComponent"]], encapsulation: 2 });
    return DynamicInputComponent;
}(_nequi_ui__WEBPACK_IMPORTED_MODULE_5__["InputControlValue"]));



/***/ }),

/***/ "Z241":
/*!************************************************************************************!*\
  !*** ./libs/features/dynamic-form/src/presentation/dynamic-form-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: MapParamsToFormId, DynamicFormRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapParamsToFormId", function() { return MapParamsToFormId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFormRoutingModule", function() { return DynamicFormRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nequi_features_commons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons */ "60O0");
/* harmony import */ var _config_dynamic_form_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/dynamic-form.config */ "uv90");
/* harmony import */ var _pages_categories_categories_middleware__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/categories/categories.middleware */ "kwN3");
/* harmony import */ var _pages_home_home_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/home/home.page */ "OjB3");
/* harmony import */ var _pages_validate_info_validate_info_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/validate-info/validate-info.page */ "NBrK");












var MapParamsToFormId = /** @class */ (function () {
    function MapParamsToFormId(navController, router) {
        this.navController = navController;
        this.router = router;
    }
    MapParamsToFormId.prototype.canActivate = function (route, state) {
        var _a, _b, _c, _d, _e;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var formId;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_f) {
                formId = (_a = this.router.getCurrentNavigation().extras.queryParams) === null || _a === void 0 ? void 0 : _a.formId;
                if (!formId) {
                    formId = (_c = (_b = this.router.getCurrentNavigation().extras.queryParams) === null || _b === void 0 ? void 0 : _b.args) === null || _c === void 0 ? void 0 : _c.formId;
                }
                if (!formId) {
                    formId = (_e = (_d = this.router.getCurrentNavigation().extras.state) === null || _d === void 0 ? void 0 : _d.params) === null || _e === void 0 ? void 0 : _e.formId;
                }
                return [2 /*return*/, this.router.parseUrl(state.url.replace(/\?.+/, '') + "/" + formId)];
            });
        });
    };
    MapParamsToFormId.ɵfac = function MapParamsToFormId_Factory(t) { return new (t || MapParamsToFormId)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
    MapParamsToFormId.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MapParamsToFormId, factory: MapParamsToFormId.ɵfac });
    return MapParamsToFormId;
}());

var routes = [
    {
        path: 'form',
        component: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Type"],
        canActivate: [MapParamsToFormId],
    },
    {
        path: 'categories',
        component: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Type"],
        canActivate: [_pages_categories_categories_middleware__WEBPACK_IMPORTED_MODULE_6__["CategoriesMiddleware"]],
    },
    {
        path: 'form/:id',
        component: _pages_home_home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"],
    },
    {
        path: 'form/:id/validate',
        component: _pages_validate_info_validate_info_page__WEBPACK_IMPORTED_MODULE_8__["ValidateInfoPage"],
    },
];
var DynamicFormRoutingModule = /** @class */ (function () {
    function DynamicFormRoutingModule() {
    }
    DynamicFormRoutingModule.ɵfac = function DynamicFormRoutingModule_Factory(t) { return new (t || DynamicFormRoutingModule)(); };
    DynamicFormRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DynamicFormRoutingModule });
    DynamicFormRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_nequi_features_commons__WEBPACK_IMPORTED_MODULE_4__["I18nModuleResolver"].setup(routes, [
                    _config_dynamic_form_config__WEBPACK_IMPORTED_MODULE_5__["DynamicFormConfig"].i18n.moduleKey,
                    _config_dynamic_form_config__WEBPACK_IMPORTED_MODULE_5__["DynamicFormConfig"].i18n.contactsModuleKey,
                ])),
            ], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
    return DynamicFormRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DynamicFormRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "Znnt":
/*!***********************************************************************************!*\
  !*** ./libs/features/dynamic-form/src/presentation/pages/home/home.view-model.ts ***!
  \***********************************************************************************/
/*! exports provided: HomeViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeViewModel", function() { return HomeViewModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.config */ "1OWG");



var mapField = function (field, optionsHandler) {
    return {
        control: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](field.value),
        field: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, field), { options: optionsHandler }),
    };
};
var mapBox = function (box, optionsHandler) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, box), { fields: box.fields.map(function (field) { return mapField(field, optionsHandler); }) });
};
var setFieldControl = function (fields, field) {
    fields[field.field.name] = field.control;
    return fields;
};
var HomeViewModel = /** @class */ (function () {
    function HomeViewModel() {
        this.balanceToggle = false;
        this.pocketControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.config = _home_config__WEBPACK_IMPORTED_MODULE_2__["HomeConfig"];
    }
    Object.defineProperty(HomeViewModel.prototype, "title", {
        get: function () {
            var _a;
            return (_a = this.screenConfig) === null || _a === void 0 ? void 0 : _a.title;
        },
        enumerable: false,
        configurable: true
    });
    HomeViewModel.prototype.getButtonLabel = function (button) {
        var _a;
        return (_a = button.label) !== null && _a !== void 0 ? _a : this.config.i18n.buttonLabel;
    };
    HomeViewModel.prototype.initForm = function (formInfo, screenConfig) {
        var _this = this;
        this.formInfo = formInfo;
        this.screenConfig = screenConfig;
        this.boxes = formInfo.boxes.map(function (box) { return mapBox(box, _this.fieldOptionsFunction); });
        this.fields = this.boxes.reduce(function (fields, box) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(fields, box.fields); }, []);
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ pocket: this.pocketControl }, this.fields.reduce(setFieldControl, {})));
    };
    return HomeViewModel;
}());



/***/ }),

/***/ "bpBy":
/*!****************************************************************************************************************!*\
  !*** ./libs/features/dynamic-form/src/presentation/services/bottom-sheet/dynamic-list-bottom-sheet.service.ts ***!
  \****************************************************************************************************************/
/*! exports provided: DynamicListBottomSheetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicListBottomSheetService", function() { return DynamicListBottomSheetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/ui */ "HYn3");





var DynamicListBottomSheetService = /** @class */ (function () {
    function DynamicListBottomSheetService(bottomSheetController) {
        this.bottomSheetController = bottomSheetController;
    }
    DynamicListBottomSheetService.prototype.show = function (componentProps, organism) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var bottomSheet;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        bottomSheet = this.bottomSheetController.create({
                            isAutoHeight: true,
                            component: organism,
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
    DynamicListBottomSheetService.prototype.hide = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, this.bottomSheetController.dismiss()];
            });
        });
    };
    DynamicListBottomSheetService.ɵfac = function DynamicListBottomSheetService_Factory(t) { return new (t || DynamicListBottomSheetService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_2__["BottomSheetController"])); };
    DynamicListBottomSheetService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DynamicListBottomSheetService, factory: DynamicListBottomSheetService.ɵfac, providedIn: 'root' });
    return DynamicListBottomSheetService;
}());



/***/ }),

/***/ "c16e":
/*!**********************************************************************************************************************************!*\
  !*** ./libs/features/dynamic-form/src/presentation/components/dynamic-informative-view-content/informative-content.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: InformativeContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformativeContentComponent", function() { return InformativeContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nequi_ui_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/ui/base */ "TE8y");
/* harmony import */ var _nequi_utils_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/utils/functions */ "uHPB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function InformativeContentComponent_ion_content_6_ion_slide_2_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 18);
} if (rf & 2) {
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    var idx_r6 = ctx_r10.index;
    var slide_r5 = ctx_r10.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "modal-dynamic_slide-icon", idx_r6, "_image");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", slide_r5.image, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function InformativeContentComponent_ion_content_6_ion_slide_2_h1_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "h1", 19);
} if (rf & 2) {
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    var idx_r6 = ctx_r11.index;
    var slide_r5 = ctx_r11.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "modal-dynamic_slide-title", idx_r6, "_label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHtml", slide_r5.title, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
} }
function InformativeContentComponent_ion_content_6_ion_slide_2_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "p", 20);
} if (rf & 2) {
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    var idx_r6 = ctx_r12.index;
    var slide_r5 = ctx_r12.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "modal-dynamic_slide-content", idx_r6, "_content");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHtml", slide_r5.description, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
} }
function InformativeContentComponent_ion_content_6_ion_slide_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-slide");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-grid", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, InformativeContentComponent_ion_content_6_ion_slide_2_img_4_Template, 1, 2, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, InformativeContentComponent_ion_content_6_ion_slide_2_h1_5_Template, 1, 2, "h1", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, InformativeContentComponent_ion_content_6_ion_slide_2_p_6_Template, 1, 2, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var slide_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", slide_r5.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", slide_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", slide_r5.description);
} }
function InformativeContentComponent_ion_content_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-content", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-slides", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, InformativeContentComponent_ion_content_6_ion_slide_2_Template, 7, 3, "ion-slide", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pager", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.slides);
} }
function InformativeContentComponent_ion_content_7_ion_skeleton_text_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ion-skeleton-text", 27);
} }
function InformativeContentComponent_ion_content_7_img_5_Template(rf, ctx) { if (rf & 1) {
    var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("load", function InformativeContentComponent_ion_content_7_img_5_Template_img_load_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18); var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r17.onDynamicImageLoad(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r14.modal.image, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("hidden", !ctx_r14.isloaded);
} }
function InformativeContentComponent_ion_content_7_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "p", 29);
} if (rf & 2) {
    var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r15.modal.title, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
} }
function InformativeContentComponent_ion_content_7_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "p", 30);
} if (rf & 2) {
    var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r16.modal.description, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
} }
function InformativeContentComponent_ion_content_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-content", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-grid", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-col", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, InformativeContentComponent_ion_content_7_ion_skeleton_text_4_Template, 1, 0, "ion-skeleton-text", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, InformativeContentComponent_ion_content_7_img_5_Template, 1, 2, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-col", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, InformativeContentComponent_ion_content_7_p_8_Template, 1, 1, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "ion-col", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, InformativeContentComponent_ion_content_7_p_11_Template, 1, 1, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.isloaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.modal.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.modal.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.modal.description);
} }
function InformativeContentComponent_ion_button_10_Template(rf, ctx) { if (rf & 1) {
    var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InformativeContentComponent_ion_button_10_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r19.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("color", "guayaba")("fill", "outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r2.button, " ");
} }
function InformativeContentComponent_a_11_Template(rf, ctx) { if (rf & 1) {
    var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InformativeContentComponent_a_11_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r22); var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r21.linkAction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r3.link.label, " ");
} }
var InformativeContentComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(InformativeContentComponent, _super);
    function InformativeContentComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isloaded = false;
        return _this;
    }
    InformativeContentComponent.prototype.ngOnInit = function () {
        if (this.slides.length === 1) {
            this.modal = this.slides[0];
        }
    };
    InformativeContentComponent.prototype.onDynamicImageLoad = function () {
        this.isloaded = true;
    };
    InformativeContentComponent.prototype.goBack = function () {
        this.dismiss();
    };
    InformativeContentComponent.prototype.hide = function () {
        this.dismiss();
    };
    InformativeContentComponent.prototype.linkAction = function () {
        Object(_nequi_utils_functions__WEBPACK_IMPORTED_MODULE_3__["openUrl"])(this.link.actionInfo.url);
    };
    InformativeContentComponent.ɵfac = function InformativeContentComponent_Factory(t) { return ɵInformativeContentComponent_BaseFactory(t || InformativeContentComponent); };
    InformativeContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: InformativeContentComponent, selectors: [["app-dynamic-informative-view"]], viewQuery: function InformativeContentComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSlides"], 1);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.slidesComponent = _t.first);
        } }, inputs: { slides: "slides", link: "link", button: "button" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 12, vars: 4, consts: [[1, "ion-page", "dynamic-informative-view"], [1, "nequi-header", "nequi-header--white"], ["slot", "end"], ["id", "informative-view_dismiss-modal_button", 3, "click"], ["slot", "icon-only", "name", "close-outline"], ["class", "ion-content--empty-case ion-padding-horizontal", "scrollY", "false", "fullscreen", "", 4, "ngIf"], ["class", "ion-content--empty-case ion-padding-horizontal modal", "scrollY", "false", 4, "ngIf"], [1, "nequi-footer"], [1, "nequi-footer__toolbar", "nequi-footer__toolbar--no-shadow"], ["class", "ion-margin", "id", "modal-dynamic_modal-button_button", "shape", "round", "expand", "block", 3, "color", "fill", "click", 4, "ngIf"], ["class", "modal__link nequi-footer__link ion-margin", 3, "click", 4, "ngIf"], ["scrollY", "false", "fullscreen", "", 1, "ion-content--empty-case", "ion-padding-horizontal"], [1, "modal__slides", 3, "pager"], [4, "ngFor", "ngForOf"], [1, "ion-no-padding"], ["class", "modal__image", 3, "id", "src", 4, "ngIf"], ["class", "modal__title", 3, "id", "innerHtml", 4, "ngIf"], ["class", "modal__content", 3, "id", "innerHtml", 4, "ngIf"], [1, "modal__image", 3, "id", "src"], [1, "modal__title", 3, "id", "innerHtml"], [1, "modal__content", 3, "id", "innerHtml"], ["scrollY", "false", 1, "ion-content--empty-case", "ion-padding-horizontal", "modal"], [1, "ion-text-center"], ["class", "modal__skeleton", "animated", "", 4, "ngIf"], ["id", "modal-dynamic_icon_image", "class", "modal__image", 3, "src", "hidden", "load", 4, "ngIf"], ["id", "modal-dynamic_title_label", "class", "modal__title", 3, "innerHTML", 4, "ngIf"], ["id", "modal-dynamic_content_label", "class", "modal__content", 3, "innerHTML", 4, "ngIf"], ["animated", "", 1, "modal__skeleton"], ["id", "modal-dynamic_icon_image", 1, "modal__image", 3, "src", "hidden", "load"], ["id", "modal-dynamic_title_label", 1, "modal__title", 3, "innerHTML"], ["id", "modal-dynamic_content_label", 1, "modal__content", 3, "innerHTML"], ["id", "modal-dynamic_modal-button_button", "shape", "round", "expand", "block", 1, "ion-margin", 3, "color", "fill", "click"], [1, "modal__link", "nequi-footer__link", "ion-margin", 3, "click"]], template: function InformativeContentComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-header", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-buttons", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InformativeContentComponent_Template_ion_button_click_4_listener() { return ctx.hide(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "ion-icon", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, InformativeContentComponent_ion_content_6_Template, 3, 2, "ion-content", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, InformativeContentComponent_ion_content_7_Template, 12, 4, "ion-content", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ion-footer", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ion-toolbar", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, InformativeContentComponent_ion_button_10_Template, 2, 3, "ion-button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, InformativeContentComponent_a_11_Template, 2, 1, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.slides.length > 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.slides.length == 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.button);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.link);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSlides"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSlide"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSkeletonText"]], styles: [".dynamic-informative-view[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%] {\n  color: var(--white);\n}\n.dynamic-informative-view[_ngcontent-%COMP%]   .modal__image[_ngcontent-%COMP%] {\n  height: 100px;\n  margin: 8px 0;\n  width: 100%;\n}\n.dynamic-informative-view[_ngcontent-%COMP%]   .modal__skeleton[_ngcontent-%COMP%] {\n  height: 60px;\n  max-width: 80%;\n  margin: 10px auto;\n  border-radius: 6px;\n}\n.dynamic-informative-view[_ngcontent-%COMP%]   .modal__icon[_ngcontent-%COMP%] {\n  color: var(--medianoche);\n  font-size: 30px;\n}\n.dynamic-informative-view[_ngcontent-%COMP%]   .modal__title[_ngcontent-%COMP%] {\n  color: var(--medianoche);\n  font-size: 22px;\n  margin: 0 0 16px 0;\n  font-weight: 500;\n}\n.dynamic-informative-view[_ngcontent-%COMP%]   .modal__content[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  color: var(--card-modal-text);\n  overflow-y: hidden;\n  height: auto;\n}\n.dynamic-informative-view[_ngcontent-%COMP%]   .modal__slides[_ngcontent-%COMP%] {\n  height: auto;\n}\n.dynamic-informative-view[_ngcontent-%COMP%]   .modal__slides[_ngcontent-%COMP%]     .swiper-slide {\n  align-items: flex-start;\n}\n.dynamic-informative-view[_ngcontent-%COMP%]   .modal__slides[_ngcontent-%COMP%]     .swiper-wrapper {\n  margin-bottom: 32px;\n}\n.dynamic-informative-view[_ngcontent-%COMP%]   .modal__slides[_ngcontent-%COMP%]     .swiper-pagination {\n  bottom: 0;\n}\n.dynamic-informative-view[_ngcontent-%COMP%]   .modal__slides[_ngcontent-%COMP%]     .swiper-pagination-bullet {\n  bottom: 0;\n  width: 10px;\n  height: 10px;\n  background: var(--transparent);\n  border: 1px solid var(--guayaba);\n  opacity: 1;\n}\n.dynamic-informative-view[_ngcontent-%COMP%]   .modal__slides[_ngcontent-%COMP%]     .swiper-pagination-bullet-active {\n  background: var(--guayaba);\n}\n.dynamic-informative-view[_ngcontent-%COMP%]   .modal__link[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n}\n.dynamic-informative-view[_ngcontent-%COMP%]   .nequi-footer__toolbar[_ngcontent-%COMP%] {\n  padding-top: 0;\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvaW5mb3JtYXRpdmUtY29udGVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLG1CQUFBO0FBQUo7QUFFSTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUFOO0FBR0k7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFETjtBQUlJO0VBQ0Usd0JBQUE7RUFDQSxlQUFBO0FBRk47QUFLSTtFQUNFLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFITjtBQU1JO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUpOO0FBT0k7RUFDRSxZQUFBO0FBTE47QUFRUTtFQUNFLHVCQUFBO0FBTlY7QUFTUTtFQUNFLG1CQUFBO0FBUFY7QUFVUTtFQUNFLFNBQUE7QUFSVjtBQVdRO0VBQ0UsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLFVBQUE7QUFUVjtBQVlRO0VBQ0UsMEJBQUE7QUFWVjtBQWVJO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBYk47QUFrQkk7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFoQk4iLCJmaWxlIjoiaW5mb3JtYXRpdmUtY29udGVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5keW5hbWljLWluZm9ybWF0aXZlLXZpZXcge1xuICAubW9kYWwge1xuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG5cbiAgICAmX19pbWFnZSB7XG4gICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgbWFyZ2luOiA4cHggMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgICZfX3NrZWxldG9uIHtcbiAgICAgIGhlaWdodDogNjBweDtcbiAgICAgIG1heC13aWR0aDogODAlO1xuICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgfVxuXG4gICAgJl9faWNvbiB7XG4gICAgICBjb2xvcjogdmFyKC0tbWVkaWFub2NoZSk7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxuXG4gICAgJl9fdGl0bGUge1xuICAgICAgY29sb3I6IHZhcigtLW1lZGlhbm9jaGUpO1xuICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgbWFyZ2luOiAwIDAgMTZweCAwO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG5cbiAgICAmX19jb250ZW50IHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1jYXJkLW1vZGFsLXRleHQpO1xuICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cblxuICAgICZfX3NsaWRlcyB7XG4gICAgICBoZWlnaHQ6IGF1dG87XG5cbiAgICAgIDo6bmctZGVlcCB7XG4gICAgICAgIC5zd2lwZXItc2xpZGUge1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICB9XG5cbiAgICAgICAgLnN3aXBlci13cmFwcGVyIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnN3aXBlci1wYWdpbmF0aW9uIHtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ndWF5YWJhKTtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWd1YXlhYmEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJl9fbGluayB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIH1cblxuICAubmVxdWktZm9vdGVyIHtcbiAgICAmX190b29sYmFyIHtcbiAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgLS1wYWRkaW5nLWVuZDogMDtcbiAgICAgIC0tcGFkZGluZy10b3A6IDA7XG4gICAgICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICAgIH1cbiAgfVxufVxuIl19 */"] });
    return InformativeContentComponent;
}(_nequi_ui_base__WEBPACK_IMPORTED_MODULE_2__["BaseModalOrganism"]));

var ɵInformativeContentComponent_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetInheritedFactory"](InformativeContentComponent);


/***/ }),

/***/ "kfNr":
/*!*****************************************************************************************************!*\
  !*** ./libs/features/dynamic-form/src/presentation/organisms/dynamic-list/dynamic-list.organism.ts ***!
  \*****************************************************************************************************/
/*! exports provided: DynamicListOrganism */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicListOrganism", function() { return DynamicListOrganism; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/dynamic-form/core */ "//55");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _dynamic_form_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dynamic-form.config */ "NzzY");
/* harmony import */ var _services_bottom_sheet_dynamic_list_bottom_sheet_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/bottom-sheet/dynamic-list-bottom-sheet.service */ "bpBy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ui_src_lib_components_busy_indicator_busy_indicator_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../ui/src/lib/components/busy-indicator/busy-indicator.component */ "N6nj");
/* harmony import */ var _ui_src_lib_components_skeleton_skeleton_card_skeleton_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../ui/src/lib/components/skeleton/skeleton-card/skeleton-card.component */ "+36n");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");















function DynamicListOrganism_h2_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, ctx_r0.tool.title));
} }
function DynamicListOrganism_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, ctx_r1.tool.description));
} }
function DynamicListOrganism_app_busy_indicator_10_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-busy-indicator", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onReload", function DynamicListOrganism_app_busy_indicator_10_Template_app_busy_indicator_onReload_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r4.reload(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-skeleton-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("showReload", !!ctx_r2.loadingError)("reloadMessage", ctx_r2.loadingError)("showSkeleton", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("items", 3);
} }
function DynamicListOrganism_ion_list_11_ion_item_1_ion_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ion-img", 22);
} if (rf & 2) {
    var item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", item_r7.icon);
} }
var _c0 = function (a0) { return { "background": a0 }; };
function DynamicListOrganism_ion_list_11_ion_item_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](4, _c0, item_r7.iconBackground));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate1"]("dynamic-list__icon icon ", item_r7.icon, "");
} }
function DynamicListOrganism_ion_list_11_ion_item_1_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    var idx_r8 = ctx_r14.index;
    var item_r7 = ctx_r14.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("id", "dynamic-list_", idx_r8, "-sub-title_text");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, item_r7.subtitle), " ");
} }
function DynamicListOrganism_ion_list_11_ion_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DynamicListOrganism_ion_list_11_ion_item_1_Template_ion_item_click_0_listener() { var item_r7 = ctx.$implicit; return item_r7.action && item_r7.action(item_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, DynamicListOrganism_ion_list_11_ion_item_1_ion_img_1_Template, 1, 1, "ion-img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, DynamicListOrganism_ion_list_11_ion_item_1_span_2_Template, 2, 6, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ion-label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, DynamicListOrganism_ion_list_11_ion_item_1_p_6_Template, 3, 4, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r7 = ctx.$implicit;
    var idx_r8 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !item_r7.isIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r7.isIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("id", "dynamic-list_", idx_r8, "-title_text");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 5, item_r7.label), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r7.subtitle);
} }
function DynamicListOrganism_ion_list_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-list", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, DynamicListOrganism_ion_list_11_ion_item_1_Template, 7, 7, "ion-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r3.items);
} }
var DynamicListOrganism = /** @class */ (function () {
    function DynamicListOrganism(bottomSheetController, dynamicFormInteractor, loadingService, navController, dynamicListBottomSheetService) {
        this.bottomSheetController = bottomSheetController;
        this.dynamicFormInteractor = dynamicFormInteractor;
        this.loadingService = loadingService;
        this.navController = navController;
        this.dynamicListBottomSheetService = dynamicListBottomSheetService;
        this.items = [];
    }
    DynamicListOrganism.prototype.ngOnInit = function () {
        this.getCategoryList(this.tool.id);
    };
    DynamicListOrganism.prototype.hide = function () {
        this.bottomSheetController.dismiss();
    };
    DynamicListOrganism.prototype.reload = function () {
        this.getCategoryList(this.tool.id);
    };
    DynamicListOrganism.prototype.getCategoryList = function (categoryId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var categoryList, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        this.isLoading = true;
                        this.loadingError = '';
                        return [4 /*yield*/, this.dynamicFormInteractor.getCategoryList(categoryId)];
                    case 1:
                        categoryList = _a.sent();
                        this.isLoading = false;
                        this.showCategories(categoryList);
                        return [3 /*break*/, 4];
                    case 2:
                        error_1 = _a.sent();
                        this.loadingError = error_1.message;
                        return [4 /*yield*/, this.loadingService.hide(false)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    DynamicListOrganism.prototype.showCategories = function (categories) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var itemsCategory;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                itemsCategory = categories.map(function (item) {
                    var _a, _b;
                    return {
                        id: item.id,
                        label: item.name,
                        subtitle: (_a = item.subtitle) !== null && _a !== void 0 ? _a : null,
                        icon: (_b = item.icon.name) !== null && _b !== void 0 ? _b : _dynamic_form_config__WEBPACK_IMPORTED_MODULE_4__["DynamicFormConfig"].iconDefault,
                        iconColor: item.icon.color,
                        iconBackground: item.icon.background,
                        action: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                            var _a;
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4 /*yield*/, this.dynamicListBottomSheetService.hide()];
                                    case 1:
                                        _b.sent();
                                        return [4 /*yield*/, this.navController.navigateForward([(_a = item.goTo) !== null && _a !== void 0 ? _a : _dynamic_form_config__WEBPACK_IMPORTED_MODULE_4__["DynamicFormConfig"].routes.form, item.id], {
                                                state: item,
                                            })];
                                    case 2:
                                        _b.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); },
                        isIcon: true,
                    };
                });
                this.items = itemsCategory;
                return [2 /*return*/];
            });
        });
    };
    DynamicListOrganism.ɵfac = function DynamicListOrganism_Factory(t) { return new (t || DynamicListOrganism)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_3__["BottomSheetController"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_2__["DynamicFormInteractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_bottom_sheet_dynamic_list_bottom_sheet_service__WEBPACK_IMPORTED_MODULE_5__["DynamicListBottomSheetService"])); };
    DynamicListOrganism.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: DynamicListOrganism, selectors: [["app-dynamic-list"]], inputs: { tool: "tool" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([
                {
                    provide: _nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_2__["DynamicFormInteractor"],
                    deps: [_nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_2__["DynamicFormRepository"]],
                    useClass: _nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_2__["DynamicFormInteractor"],
                },
            ])], decls: 12, vars: 4, consts: [[1, "ion-page"], [1, "nequi-header", "nequi-header"], [1, "dynamic-list__toolbar"], ["slot", "end"], ["id", "nav-bottom-sheet_back_button", 3, "click"], ["slot", "icon-only", "name", "close-outline"], ["fullscreen", "", 1, "dynamic-list__content", "ion-padding-horizontal"], ["class", "dynamic-list__title title", 4, "ngIf"], ["class", "text-description", 4, "ngIf"], ["class", "dynamic-list__busy-indicator", 3, "showReload", "reloadMessage", "showSkeleton", "onReload", 4, "ngIf"], ["class", "ion-no-margin dynamic-list__list", "lines", "none", 4, "ngIf"], [1, "dynamic-list__title", "title"], [1, "text-description"], [1, "dynamic-list__busy-indicator", 3, "showReload", "reloadMessage", "showSkeleton", "onReload"], ["skeleton", "", 3, "items"], ["lines", "none", 1, "ion-no-margin", "dynamic-list__list"], ["detail", "", "class", "ion-no-margin ion-no-padding dynamic-list__item dynamic-list", 3, "click", 4, "ngFor", "ngForOf"], ["detail", "", 1, "ion-no-margin", "ion-no-padding", "dynamic-list__item", "dynamic-list", 3, "click"], ["slot", "start", "class", "ion-no-margin dynamic-list__image", 3, "src", 4, "ngIf"], ["class", "dynamic-list__diamond", 3, "ngStyle", 4, "ngIf"], [1, "ion-no-margin", "dynamic-list__text", 3, "id"], ["class", "ion-no-margin sub-title", 3, "id", 4, "ngIf"], ["slot", "start", 1, "ion-no-margin", "dynamic-list__image", 3, "src"], [1, "dynamic-list__diamond", 3, "ngStyle"], ["slot", "start"], [1, "ion-no-margin", "sub-title", 3, "id"]], template: function DynamicListOrganism_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "ion-header", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "ion-toolbar", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ion-buttons", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DynamicListOrganism_Template_ion_button_click_4_listener() { return ctx.hide(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "ion-icon", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "ion-content", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, DynamicListOrganism_h2_7_Template, 3, 3, "h2", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, DynamicListOrganism_p_8_Template, 3, 3, "p", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, DynamicListOrganism_app_busy_indicator_10_Template, 2, 4, "app-busy-indicator", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, DynamicListOrganism_ion_list_11_Template, 2, 1, "ion-list", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.tool.title);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.tool.description);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _ui_src_lib_components_busy_indicator_busy_indicator_component__WEBPACK_IMPORTED_MODULE_8__["BusyIndicatorComponent"], _ui_src_lib_components_skeleton_skeleton_card_skeleton_card_component__WEBPACK_IMPORTED_MODULE_9__["SkeletonCardComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonImg"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"]], styles: [".nequi-header[_ngcontent-%COMP%]   .dynamic-list__toolbar[_ngcontent-%COMP%] {\n  --background: var(--white);\n  --color: var(--medianoche);\n}\n\n.sub-title[_ngcontent-%COMP%] {\n  color: var(--gray-70);\n}\n\n.dynamic-list[_ngcontent-%COMP%] {\n  color: var(--medianoche);\n}\n\n.dynamic-list__content[_ngcontent-%COMP%] {\n  --background: var(--transparent);\n  -webkit-padding-start: var(--ion-padding, 8px);\n  padding-inline-start: var(--ion-padding, 8px);\n  -webkit-padding-end: var(--ion-padding, 8px);\n  padding-inline-end: var(--ion-padding, 8px);\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.dynamic-list__title[_ngcontent-%COMP%] {\n  margin: 8px 0;\n  color: var(--medianoche);\n  font-style: normal;\n  font-size: 24px;\n  line-height: 29px;\n}\n\n.dynamic-list__list[_ngcontent-%COMP%] {\n  background: none;\n  margin: 8px 9px 0 9px;\n}\n\n.dynamic-list__diamond[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 4px;\n  transform: rotate(45deg);\n  margin-left: 10px;\n  margin-right: 15px;\n  background: var(--bilbao-40);\n}\n\n.dynamic-list__icon[_ngcontent-%COMP%] {\n  transform: rotate(-45deg);\n  margin: 4px 0px 0px 9px;\n}\n\n.dynamic-list__item[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  padding: 6px 0 6px 4px;\n  --detail-icon-opacity: 1;\n  --border-color: var(--divisor-line);\n  min-height: 56px;\n  background: var(--white);\n  border: 1px solid rgba(151, 151, 151, 0.2);\n  box-shadow: 0px 1px 1px rgba(60, 133, 127, 0.15);\n  border-radius: 8px;\n}\n\n.dynamic-list__item-label[_ngcontent-%COMP%] {\n  color: var(--darkpurple);\n  margin: 28px 0px 24px 0px;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1;\n}\n\n.dynamic-list__image[_ngcontent-%COMP%] {\n  width: 44px;\n  margin: 4px 10px;\n}\n\n.dynamic-list__busy-indicator[_ngcontent-%COMP%] {\n  --bottom: initial;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvZHluYW1pYy1saXN0Lm9yZ2FuaXNtLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSwwQkFBQTtFQUNBLDBCQUFBO0FBQUo7O0FBSUE7RUFDRSxxQkFBQTtBQURGOztBQUlBO0VBQ0Usd0JBQUE7QUFERjs7QUFHRTtFQUNFLGdDQUFBO0VBQ0EsOENBQUE7RUFDQSw2Q0FBQTtFQUNBLDRDQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBSUU7RUFDRSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUZKOztBQUtFO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtBQUhKOztBQU1FO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7QUFKSjs7QUFPRTtFQUNFLHlCQUFBO0VBQ0EsdUJBQUE7QUFMSjs7QUFRRTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxrQkFBQTtBQU5KOztBQVFJO0VBQ0Usd0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFOTjs7QUFVRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQVJKOztBQVdFO0VBQ0UsaUJBQUE7QUFUSiIsImZpbGUiOiJkeW5hbWljLWxpc3Qub3JnYW5pc20uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXF1aS1oZWFkZXIge1xuICAuZHluYW1pYy1saXN0X190b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgICAtLWNvbG9yOiB2YXIoLS1tZWRpYW5vY2hlKTtcbiAgfVxufVxuXG4uc3ViLXRpdGxlIHtcbiAgY29sb3I6IHZhcigtLWdyYXktNzApO1xufVxuXG4uZHluYW1pYy1saXN0IHtcbiAgY29sb3I6IHZhcigtLW1lZGlhbm9jaGUpO1xuXG4gICZfX2NvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xuICAgIC13ZWJraXQtcGFkZGluZy1zdGFydDogdmFyKC0taW9uLXBhZGRpbmcsIDhweCk7XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCA4cHgpO1xuICAgIC13ZWJraXQtcGFkZGluZy1lbmQ6IHZhcigtLWlvbi1wYWRkaW5nLCA4cHgpO1xuICAgIHBhZGRpbmctaW5saW5lLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDhweCk7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIH1cblxuICAmX190aXRsZSB7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgICBjb2xvcjogdmFyKC0tbWVkaWFub2NoZSk7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMjlweDtcbiAgfVxuXG4gICZfX2xpc3Qge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgbWFyZ2luOiA4cHggOXB4IDAgOXB4O1xuICB9XG5cbiAgJl9fZGlhbW9uZCB7XG4gICAgd2lkdGg6IDMycHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmlsYmFvLTQwKTtcbiAgfVxuXG4gICZfX2ljb24ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgbWFyZ2luOiA0cHggMHB4IDBweCA5cHg7XG4gIH1cblxuICAmX19pdGVtIHtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgcGFkZGluZzogNnB4IDAgNnB4IDRweDtcbiAgICAtLWRldGFpbC1pY29uLW9wYWNpdHk6IDE7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWRpdmlzb3ItbGluZSk7XG4gICAgbWluLWhlaWdodDogNTZweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNTEsIDE1MSwgMTUxLCAwLjIpO1xuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMXB4IHJnYmEoNjAsIDEzMywgMTI3LCAwLjE1KTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG5cbiAgICAmLWxhYmVsIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1kYXJrcHVycGxlKTtcbiAgICAgIG1hcmdpbjogMjhweCAwcHggMjRweCAwcHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgfVxuICB9XG5cbiAgJl9faW1hZ2Uge1xuICAgIHdpZHRoOiA0NHB4O1xuICAgIG1hcmdpbjogNHB4IDEwcHg7XG4gIH1cblxuICAmX19idXN5LWluZGljYXRvciB7XG4gICAgLS1ib3R0b206IGluaXRpYWw7XG4gIH1cbn1cbiJdfQ== */"] });
    return DynamicListOrganism;
}());



/***/ }),

/***/ "kwN3":
/*!***********************************************************************************************!*\
  !*** ./libs/features/dynamic-form/src/presentation/pages/categories/categories.middleware.ts ***!
  \***********************************************************************************************/
/*! exports provided: CategoriesMiddleware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesMiddleware", function() { return CategoriesMiddleware; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _organisms_dynamic_list_dynamic_list_organism__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../organisms/dynamic-list/dynamic-list.organism */ "kfNr");
/* harmony import */ var _services_bottom_sheet_dynamic_list_bottom_sheet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/bottom-sheet/dynamic-list-bottom-sheet.service */ "bpBy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");







var CategoriesMiddleware = /** @class */ (function () {
    function CategoriesMiddleware(router, dynamicListBottomSheetService) {
        this.router = router;
        this.dynamicListBottomSheetService = dynamicListBottomSheetService;
    }
    CategoriesMiddleware.prototype.canActivate = function (_route, _state) {
        if (this.router.getCurrentNavigation().extras.queryParams) {
            this.tool = this.router.getCurrentNavigation().extras.queryParams.args;
            this.showCategories();
            return;
        }
        this.tool = this.router.getCurrentNavigation().extras.state;
        this.showCategories();
        return false;
    };
    CategoriesMiddleware.prototype.showCategories = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.dynamicListBottomSheetService.show({
                    tool: this.tool,
                }, _organisms_dynamic_list_dynamic_list_organism__WEBPACK_IMPORTED_MODULE_2__["DynamicListOrganism"]);
                return [2 /*return*/];
            });
        });
    };
    CategoriesMiddleware.ɵfac = function CategoriesMiddleware_Factory(t) { return new (t || CategoriesMiddleware)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_bottom_sheet_dynamic_list_bottom_sheet_service__WEBPACK_IMPORTED_MODULE_3__["DynamicListBottomSheetService"])); };
    CategoriesMiddleware.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: CategoriesMiddleware, factory: CategoriesMiddleware.ɵfac });
    return CategoriesMiddleware;
}());



/***/ }),

/***/ "lJLI":
/*!********************************************************************************************************************!*\
  !*** ./libs/features/dynamic-form/src/presentation/services/bottom-sheet/informative-view-bottom-sheet.service.ts ***!
  \********************************************************************************************************************/
/*! exports provided: InformativeViewBottomSheetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformativeViewBottomSheetService", function() { return InformativeViewBottomSheetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _components_dynamic_informative_view_content_informative_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/dynamic-informative-view-content/informative-content.component */ "c16e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





var InformativeViewBottomSheetService = /** @class */ (function () {
    function InformativeViewBottomSheetService(bottomSheetController) {
        this.bottomSheetController = bottomSheetController;
    }
    InformativeViewBottomSheetService.prototype.show = function (componentProps) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var bottomSheet;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        bottomSheet = this.bottomSheetController.create({
                            isAutoHeight: true,
                            component: _components_dynamic_informative_view_content_informative_content_component__WEBPACK_IMPORTED_MODULE_2__["InformativeContentComponent"],
                            componentProps: {
                                slides: componentProps.content,
                                link: componentProps.link,
                                button: componentProps.button,
                                onDismiss: function () { return bottomSheet.close(); },
                            },
                            cssClass: '',
                        });
                        return [4 /*yield*/, bottomSheet.open()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    InformativeViewBottomSheetService.prototype.hide = function () {
        return this.bottomSheetController.dismiss();
    };
    InformativeViewBottomSheetService.ɵfac = function InformativeViewBottomSheetService_Factory(t) { return new (t || InformativeViewBottomSheetService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_1__["BottomSheetController"])); };
    InformativeViewBottomSheetService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: InformativeViewBottomSheetService, factory: InformativeViewBottomSheetService.ɵfac });
    return InformativeViewBottomSheetService;
}());



/***/ }),

/***/ "tcRU":
/*!*****************************************************************************************************!*\
  !*** ./libs/features/dynamic-form/src/presentation/organisms/product-list/product-list.organism.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ProductListOrganism */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListOrganism", function() { return ProductListOrganism; });
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function ProductListOrganism_h2_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.title);
} }
function ProductListOrganism_ion_item_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductListOrganism_ion_item_8_Template_ion_item_click_0_listener() { var item_r2 = ctx.$implicit; return item_r2.action && item_r2.action(item_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r2 = ctx.$implicit;
    var idx_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "product-list-item-section_", idx_r3, "_item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "product-list-item-name_", idx_r3, "_text");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r2.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "product-list-item-description_", idx_r3, "_text");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r2.description, " ");
} }
var ProductListOrganism = /** @class */ (function () {
    function ProductListOrganism(bottomSheetController) {
        this.bottomSheetController = bottomSheetController;
    }
    ProductListOrganism.prototype.hide = function () {
        this.bottomSheetController.dismiss();
    };
    ProductListOrganism.ɵfac = function ProductListOrganism_Factory(t) { return new (t || ProductListOrganism)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nequi_ui__WEBPACK_IMPORTED_MODULE_0__["BottomSheetController"])); };
    ProductListOrganism.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProductListOrganism, selectors: [["app-product-list"]], inputs: { items: "items", title: "title" }, decls: 9, vars: 2, consts: [[1, "nequi-header"], [1, "product-list__toolbar"], ["slot", "start"], ["id", "product-list_back_button", 3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], ["fullscreen", "true", "scrollY", "true", 1, "product-list__content"], ["id", "bottom-sheet_title_text", "class", "product-list__title title", 4, "ngIf"], ["lines", "inset", 1, "ion-no-margin", "product-list__list"], ["class", "product-list__item", 3, "id", "click", 4, "ngFor", "ngForOf"], ["id", "bottom-sheet_title_text", 1, "product-list__title", "title"], [1, "product-list__item", 3, "id", "click"], [1, "ion-text-wrap"], [1, "product-list__item--name", 3, "id"], [1, "product-list__item--description", 3, "id"]], template: function ProductListOrganism_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductListOrganism_Template_ion_button_click_3_listener() { return ctx.hide(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ProductListOrganism_h2_6_Template, 2, 1, "h2", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-list", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ProductListOrganism_ion_item_8_Template, 6, 5, "ion-item", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.title);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"]], styles: ["[_nghost-%COMP%] {\n  position: relative;\n}\n\n.product-list__content[_ngcontent-%COMP%] {\n  --background: var(--transparent);\n}\n\n.product-list__title[_ngcontent-%COMP%] {\n  margin: 8px 15px;\n  color: var(--medianoche);\n  font-style: normal;\n  font-size: 24px;\n  line-height: 29px;\n}\n\n.product-list__list[_ngcontent-%COMP%] {\n  background: none;\n  margin-top: 8px;\n  margin-left: 24px;\n  margin-right: 24px;\n  height: calc(70vh - 72px);\n  overflow-y: scroll;\n}\n\n.product-list__item[_ngcontent-%COMP%] {\n  padding: 6px 0;\n  min-height: 56px;\n  background: var(--white);\n}\n\n.product-list__item[_ngcontent-%COMP%]::part(native) {\n  padding-right: 0px;\n  padding-left: 0px;\n}\n\n.product-list__item--name[_ngcontent-%COMP%] {\n  color: var(--medianoche);\n  font-size: 1rem;\n  font-weight: 500;\n  margin-left: 8px;\n}\n\n.product-list__item--description[_ngcontent-%COMP%] {\n  color: var(--gray-70);\n  font-size: 0.875rem;\n  font-weight: 400;\n  margin-top: 4px;\n  margin-left: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvY29sb21iaWEvcHJvZHVjdC1saXN0Lm9yZ2FuaXNtLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUdFO0VBQ0UsZ0NBQUE7QUFBSjs7QUFHRTtFQUNFLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQURKOztBQUlFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFGSjs7QUFLRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FBSEo7O0FBS0k7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FBSE47O0FBTUk7RUFDRSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBSk47O0FBT0k7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFMTiIsImZpbGUiOiJwcm9kdWN0LWxpc3Qub3JnYW5pc20uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucHJvZHVjdC1saXN0IHtcbiAgJl9fY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XG4gIH1cblxuICAmX190aXRsZSB7XG4gICAgbWFyZ2luOiA4cHggMTVweDtcbiAgICBjb2xvcjogdmFyKC0tbWVkaWFub2NoZSk7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMjlweDtcbiAgfVxuXG4gICZfX2xpc3Qge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjRweDtcbiAgICBoZWlnaHQ6IGNhbGMoNzB2aCAtIDcycHgpO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgfVxuXG4gICZfX2l0ZW0ge1xuICAgIHBhZGRpbmc6IDZweCAwO1xuICAgIG1pbi1oZWlnaHQ6IDU2cHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuXG4gICAgJjo6cGFydChuYXRpdmUpIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIH1cblxuICAgICYtLW5hbWUge1xuICAgICAgY29sb3I6IHZhcigtLW1lZGlhbm9jaGUpO1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgfVxuXG4gICAgJi0tZGVzY3JpcHRpb24ge1xuICAgICAgY29sb3I6IHZhcigtLWdyYXktNzApO1xuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICBtYXJnaW4tbGVmdDogMjRweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
    return ProductListOrganism;
}());



/***/ }),

/***/ "xRVq":
/*!****************************************************************************!*\
  !*** ./libs/features/dynamic-form/src/presentation/dynamic-form.module.ts ***!
  \****************************************************************************/
/*! exports provided: DynamicFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFormModule", function() { return DynamicFormModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nequi_features_application_data_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nequi/features/application-data/core */ "UgzZ");
/* harmony import */ var _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nequi/features/commons/presentation */ "BT0d");
/* harmony import */ var _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nequi/features/commons/providers */ "Rt//");
/* harmony import */ var _nequi_features_contacts_presentation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nequi/features/contacts/presentation */ "59nv");
/* harmony import */ var _nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nequi/features/dynamic-form/core */ "//55");
/* harmony import */ var _nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nequi/features/money-management/presentation */ "JFCQ");
/* harmony import */ var _nequi_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nequi/ui */ "HYn3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _config_dynamic_form_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../config/dynamic-form.config */ "uv90");
/* harmony import */ var _components_dynamic_informative_view_content_informative_content_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/dynamic-informative-view-content/informative-content.component */ "c16e");
/* harmony import */ var _components_selector_item_selector_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/selector-item/selector-item.component */ "MfLu");
/* harmony import */ var _controls_dynamic_input_dynamic_input_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./controls/dynamic-input/dynamic-input.component */ "YpBf");
/* harmony import */ var _controls_search_select_search_select_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./controls/search-select/search-select.component */ "CcfQ");
/* harmony import */ var _dynamic_form_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dynamic-form-routing.module */ "Z241");
/* harmony import */ var _organisms_dynamic_list_dynamic_list_organism__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./organisms/dynamic-list/dynamic-list.organism */ "kfNr");
/* harmony import */ var _organisms_product_list_product_list_organism__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./organisms/product-list/product-list.organism */ "tcRU");
/* harmony import */ var _pages_categories_categories_middleware__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/categories/categories.middleware */ "kwN3");
/* harmony import */ var _pages_home_home_page__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/home/home.page */ "OjB3");
/* harmony import */ var _pages_persistence_form__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/persistence.form */ "7Cgl");
/* harmony import */ var _pages_validate_info_validate_info_page__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/validate-info/validate-info.page */ "NBrK");
/* harmony import */ var _services_bottom_sheet_informative_view_bottom_sheet_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/bottom-sheet/informative-view-bottom-sheet.service */ "lJLI");
/* harmony import */ var _services_dynamic_form_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/dynamic-form.service */ "QAPA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ "fXoL");


























var INTERACTOR_PROVIDER = {
    provide: _nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_7__["DynamicFormInteractor"],
    deps: [_nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_7__["DynamicFormRepository"], _nequi_features_application_data_core__WEBPACK_IMPORTED_MODULE_3__["ApplicationDataInteractor"], _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_5__["ModuleConfigProvider"]],
    useFactory: function (repository, applicationDataInteractor, moduleConfigProvider) { return new _nequi_features_dynamic_form_core__WEBPACK_IMPORTED_MODULE_7__["DynamicFormInteractor"](repository, applicationDataInteractor, moduleConfigProvider); },
};
var PERSISTENCE_PROVIDER = {
    provide: _pages_persistence_form__WEBPACK_IMPORTED_MODULE_21__["PersistenceForm"],
    useFactory: function () { return new _pages_persistence_form__WEBPACK_IMPORTED_MODULE_21__["PersistenceForm"](); },
};
var DynamicFormModule = /** @class */ (function () {
    function DynamicFormModule() {
    }
    DynamicFormModule.ɵfac = function DynamicFormModule_Factory(t) { return new (t || DynamicFormModule)(); };
    DynamicFormModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineNgModule"]({ type: DynamicFormModule });
    DynamicFormModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineInjector"]({ providers: [
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CurrencyPipe"],
            _nequi_features_commons_presentation__WEBPACK_IMPORTED_MODULE_4__["QrReaderService"],
            _services_dynamic_form_service__WEBPACK_IMPORTED_MODULE_24__["DynamicFormService"],
            _services_bottom_sheet_informative_view_bottom_sheet_service__WEBPACK_IMPORTED_MODULE_23__["InformativeViewBottomSheetService"],
            _nequi_ui__WEBPACK_IMPORTED_MODULE_9__["ConfirmInfoBottomSheetService"],
            INTERACTOR_PROVIDER,
            _dynamic_form_routing_module__WEBPACK_IMPORTED_MODULE_16__["MapParamsToFormId"],
            _pages_categories_categories_middleware__WEBPACK_IMPORTED_MODULE_19__["CategoriesMiddleware"],
            PERSISTENCE_PROVIDER,
            {
                provide: _nequi_features_commons_providers__WEBPACK_IMPORTED_MODULE_5__["ModuleConfigProvider"],
                useValue: _config_dynamic_form_config__WEBPACK_IMPORTED_MODULE_11__["DynamicFormConfig"],
            },
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _dynamic_form_routing_module__WEBPACK_IMPORTED_MODULE_16__["DynamicFormRoutingModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"],
                _nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_8__["FeaturesMoneyManagementModule"],
                _nequi_features_contacts_presentation__WEBPACK_IMPORTED_MODULE_6__["FeaturesContactsModule"],
                _nequi_ui__WEBPACK_IMPORTED_MODULE_9__["NequiComponentsModule"],
            ]] });
    return DynamicFormModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsetNgModuleScope"](DynamicFormModule, { declarations: [_organisms_dynamic_list_dynamic_list_organism__WEBPACK_IMPORTED_MODULE_17__["DynamicListOrganism"],
        _controls_dynamic_input_dynamic_input_component__WEBPACK_IMPORTED_MODULE_14__["DynamicInputComponent"],
        _components_dynamic_informative_view_content_informative_content_component__WEBPACK_IMPORTED_MODULE_12__["InformativeContentComponent"],
        _pages_home_home_page__WEBPACK_IMPORTED_MODULE_20__["HomePage"],
        _pages_validate_info_validate_info_page__WEBPACK_IMPORTED_MODULE_22__["ValidateInfoPage"],
        _organisms_product_list_product_list_organism__WEBPACK_IMPORTED_MODULE_18__["ProductListOrganism"],
        _controls_search_select_search_select_component__WEBPACK_IMPORTED_MODULE_15__["SearchSelectComponent"],
        _components_selector_item_selector_item_component__WEBPACK_IMPORTED_MODULE_13__["SelectorItemComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _dynamic_form_routing_module__WEBPACK_IMPORTED_MODULE_16__["DynamicFormRoutingModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"],
        _nequi_features_money_management_presentation__WEBPACK_IMPORTED_MODULE_8__["FeaturesMoneyManagementModule"],
        _nequi_features_contacts_presentation__WEBPACK_IMPORTED_MODULE_6__["FeaturesContactsModule"],
        _nequi_ui__WEBPACK_IMPORTED_MODULE_9__["NequiComponentsModule"]] }); })();


/***/ }),

/***/ "yM19":
/*!**************************************************************!*\
  !*** ./libs/features/dynamic-form/src/presentation/index.ts ***!
  \**************************************************************/
/*! exports provided: DynamicFormModule, DynamicFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dynamic_form_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dynamic-form.module */ "xRVq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicFormModule", function() { return _dynamic_form_module__WEBPACK_IMPORTED_MODULE_0__["DynamicFormModule"]; });

/* harmony import */ var _services_dynamic_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/dynamic-form.service */ "QAPA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicFormService", function() { return _services_dynamic_form_service__WEBPACK_IMPORTED_MODULE_1__["DynamicFormService"]; });





/***/ })

}]);
//# sourceMappingURL=default~nequi-features-dynamic-form-presentation~presentation-tab-links-tab-links-module.js.map