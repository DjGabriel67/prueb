(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "cABk":
/*!****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-loading.entry.js ***!
  \****************************************************************/
/*! exports provided: ion_loading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_loading", function() { return Loading; });
/* harmony import */ var _Users_bancolombia_Documents_NEQUI_APP_GITHUB_PDN_nequi_core_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "rePB");
/* harmony import */ var _Users_bancolombia_Documents_NEQUI_APP_GITHUB_PDN_nequi_core_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "HaE+");
/* harmony import */ var _Users_bancolombia_Documents_NEQUI_APP_GITHUB_PDN_nequi_core_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var _Users_bancolombia_Documents_NEQUI_APP_GITHUB_PDN_nequi_core_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "wEJo");
/* harmony import */ var _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ionic-global-63a97a32.js */ "E/Mt");
/* harmony import */ var _overlays_a62f858b_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./overlays-a62f858b.js */ "f9PN");
/* harmony import */ var _index_9e3fe806_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index-9e3fe806.js */ "39oe");
/* harmony import */ var _theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./theme-ff3fc52f.js */ "74mu");
/* harmony import */ var _animation_822d986b_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./animation-822d986b.js */ "Kfhc");
/* harmony import */ var _hardware_back_button_4a6b37fb_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hardware-back-button-4a6b37fb.js */ "B4Jq");
/* harmony import */ var _helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./helpers-1457892a.js */ "W6o/");





function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }









/**
 * iOS Loading Enter Animation
 */

var iosEnterAnimation = function iosEnterAnimation(baseEl) {
  var baseAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_9__["c"])();
  var backdropAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_9__["c"])();
  var wrapperAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_9__["c"])();
  backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 0.01, 'var(--backdrop-opacity)').beforeStyles({
    'pointer-events': 'none'
  }).afterClearStyles(['pointer-events']);
  wrapperAnimation.addElement(baseEl.querySelector('.loading-wrapper')).keyframes([{
    offset: 0,
    opacity: 0.01,
    transform: 'scale(1.1)'
  }, {
    offset: 1,
    opacity: 1,
    transform: 'scale(1)'
  }]);
  return baseAnimation.addElement(baseEl).easing('ease-in-out').duration(200).addAnimation([backdropAnimation, wrapperAnimation]);
};
/**
 * iOS Loading Leave Animation
 */


var iosLeaveAnimation = function iosLeaveAnimation(baseEl) {
  var baseAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_9__["c"])();
  var backdropAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_9__["c"])();
  var wrapperAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_9__["c"])();
  backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 'var(--backdrop-opacity)', 0);
  wrapperAnimation.addElement(baseEl.querySelector('.loading-wrapper')).keyframes([{
    offset: 0,
    opacity: 0.99,
    transform: 'scale(1)'
  }, {
    offset: 1,
    opacity: 0,
    transform: 'scale(0.9)'
  }]);
  return baseAnimation.addElement(baseEl).easing('ease-in-out').duration(200).addAnimation([backdropAnimation, wrapperAnimation]);
};
/**
 * Md Loading Enter Animation
 */


var mdEnterAnimation = function mdEnterAnimation(baseEl) {
  var baseAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_9__["c"])();
  var backdropAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_9__["c"])();
  var wrapperAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_9__["c"])();
  backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 0.01, 'var(--backdrop-opacity)').beforeStyles({
    'pointer-events': 'none'
  }).afterClearStyles(['pointer-events']);
  wrapperAnimation.addElement(baseEl.querySelector('.loading-wrapper')).keyframes([{
    offset: 0,
    opacity: 0.01,
    transform: 'scale(1.1)'
  }, {
    offset: 1,
    opacity: 1,
    transform: 'scale(1)'
  }]);
  return baseAnimation.addElement(baseEl).easing('ease-in-out').duration(200).addAnimation([backdropAnimation, wrapperAnimation]);
};
/**
 * Md Loading Leave Animation
 */


var mdLeaveAnimation = function mdLeaveAnimation(baseEl) {
  var baseAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_9__["c"])();
  var backdropAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_9__["c"])();
  var wrapperAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_9__["c"])();
  backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 'var(--backdrop-opacity)', 0);
  wrapperAnimation.addElement(baseEl.querySelector('.loading-wrapper')).keyframes([{
    offset: 0,
    opacity: 0.99,
    transform: 'scale(1)'
  }, {
    offset: 1,
    opacity: 0,
    transform: 'scale(0.9)'
  }]);
  return baseAnimation.addElement(baseEl).easing('ease-in-out').duration(200).addAnimation([backdropAnimation, wrapperAnimation]);
};

var loadingIosCss = ".sc-ion-loading-ios-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-ios-h{display:none}.loading-wrapper.sc-ion-loading-ios{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-lines.sc-ion-loading-ios,.spinner-lines-small.sc-ion-loading-ios,.spinner-bubbles.sc-ion-loading-ios,.spinner-circles.sc-ion-loading-ios,.spinner-crescent.sc-ion-loading-ios,.spinner-dots.sc-ion-loading-ios{color:var(--spinner-color)}.sc-ion-loading-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, #f9f9f9));--max-width:270px;--max-height:90%;--spinner-color:var(--ion-color-step-600, #666666);--backdrop-opacity:var(--ion-backdrop-opacity, 0.3);color:var(--ion-text-color, #000);font-size:14px}.loading-wrapper.sc-ion-loading-ios{border-radius:8px;padding-left:34px;padding-right:34px;padding-top:24px;padding-bottom:24px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-wrapper.sc-ion-loading-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:34px;padding-inline-start:34px;-webkit-padding-end:34px;padding-inline-end:34px}}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.loading-translucent.sc-ion-loading-ios-h .loading-wrapper.sc-ion-loading-ios{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.loading-content.sc-ion-loading-ios{font-weight:bold}.loading-spinner.sc-ion-loading-ios+.loading-content.sc-ion-loading-ios{margin-left:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-spinner.sc-ion-loading-ios+.loading-content.sc-ion-loading-ios{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}";
var loadingMdCss = ".sc-ion-loading-md-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-md-h{display:none}.loading-wrapper.sc-ion-loading-md{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-lines.sc-ion-loading-md,.spinner-lines-small.sc-ion-loading-md,.spinner-bubbles.sc-ion-loading-md,.spinner-circles.sc-ion-loading-md,.spinner-crescent.sc-ion-loading-md,.spinner-dots.sc-ion-loading-md{color:var(--spinner-color)}.sc-ion-loading-md-h{--background:var(--ion-color-step-50, #f2f2f2);--max-width:280px;--max-height:90%;--spinner-color:var(--ion-color-primary, #3880ff);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);color:var(--ion-color-step-850, #262626);font-size:14px}.loading-wrapper.sc-ion-loading-md{border-radius:2px;padding-left:24px;padding-right:24px;padding-top:24px;padding-bottom:24px;-webkit-box-shadow:0 16px 20px rgba(0, 0, 0, 0.4);box-shadow:0 16px 20px rgba(0, 0, 0, 0.4)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-wrapper.sc-ion-loading-md{padding-left:unset;padding-right:unset;-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px}}.loading-spinner.sc-ion-loading-md+.loading-content.sc-ion-loading-md{margin-left:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-spinner.sc-ion-loading-md+.loading-content.sc-ion-loading-md{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}";

var Loading = /*#__PURE__*/function () {
  function Loading(hostRef) {
    var _this = this;

    Object(_Users_bancolombia_Documents_NEQUI_APP_GITHUB_PDN_nequi_core_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Loading);

    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["r"])(this, hostRef);
    this.didPresent = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["e"])(this, "ionLoadingDidPresent", 7);
    this.willPresent = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["e"])(this, "ionLoadingWillPresent", 7);
    this.willDismiss = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["e"])(this, "ionLoadingWillDismiss", 7);
    this.didDismiss = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["e"])(this, "ionLoadingDidDismiss", 7);
    this.presented = false;
    /**
     * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
     */

    this.keyboardClose = true;
    /**
     * Number of milliseconds to wait before dismissing the loading indicator.
     */

    this.duration = 0;
    /**
     * If `true`, the loading indicator will be dismissed when the backdrop is clicked.
     */

    this.backdropDismiss = false;
    /**
     * If `true`, a backdrop will be displayed behind the loading indicator.
     */

    this.showBackdrop = true;
    /**
     * If `true`, the loading indicator will be translucent.
     * Only applies when the mode is `"ios"` and the device supports
     * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
     */

    this.translucent = false;
    /**
     * If `true`, the loading indicator will animate.
     */

    this.animated = true;

    this.onBackdropTap = function () {
      _this.dismiss(undefined, _overlays_a62f858b_js__WEBPACK_IMPORTED_MODULE_6__["B"]);
    };
  }

  Object(_Users_bancolombia_Documents_NEQUI_APP_GITHUB_PDN_nequi_core_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Loading, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      Object(_overlays_a62f858b_js__WEBPACK_IMPORTED_MODULE_6__["e"])(this.el);
    }
  }, {
    key: "componentWillLoad",
    value: function componentWillLoad() {
      if (this.spinner === undefined) {
        var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_5__["b"])(this);
        this.spinner = _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_5__["c"].get('loadingSpinner', _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_5__["c"].get('spinner', mode === 'ios' ? 'lines' : 'crescent'));
      }
    }
    /**
     * Present the loading overlay after it has been created.
     */

  }, {
    key: "present",
    value: function () {
      var _present2 = Object(_Users_bancolombia_Documents_NEQUI_APP_GITHUB_PDN_nequi_core_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this2 = this;

        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_overlays_a62f858b_js__WEBPACK_IMPORTED_MODULE_6__["d"])(this, 'loadingEnter', iosEnterAnimation, mdEnterAnimation, undefined);

            case 2:
              if (this.duration > 0) {
                this.durationTimeout = setTimeout(function () {
                  return _this2.dismiss();
                }, this.duration + 10);
              }

            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));

      function present() {
        return _present2.apply(this, arguments);
      }

      return present;
    }()
    /**
     * Dismiss the loading overlay after it has been presented.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the loading.
     * This can be useful in a button handler for determining which button was
     * clicked to dismiss the loading.
     * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
     */

  }, {
    key: "dismiss",
    value: function dismiss(data, role) {
      if (this.durationTimeout) {
        clearTimeout(this.durationTimeout);
      }

      return Object(_overlays_a62f858b_js__WEBPACK_IMPORTED_MODULE_6__["f"])(this, data, role, 'loadingLeave', iosLeaveAnimation, mdLeaveAnimation);
    }
    /**
     * Returns a promise that resolves when the loading did dismiss.
     */

  }, {
    key: "onDidDismiss",
    value: function onDidDismiss() {
      return Object(_overlays_a62f858b_js__WEBPACK_IMPORTED_MODULE_6__["g"])(this.el, 'ionLoadingDidDismiss');
    }
    /**
     * Returns a promise that resolves when the loading will dismiss.
     */

  }, {
    key: "onWillDismiss",
    value: function onWillDismiss() {
      return Object(_overlays_a62f858b_js__WEBPACK_IMPORTED_MODULE_6__["g"])(this.el, 'ionLoadingWillDismiss');
    }
  }, {
    key: "render",
    value: function render() {
      var _Object$assign;

      var message = this.message,
          spinner = this.spinner,
          htmlAttributes = this.htmlAttributes;
      var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_5__["b"])(this);
      return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["H"], Object.assign({
        tabindex: "-1"
      }, htmlAttributes, {
        style: {
          zIndex: "".concat(40000 + this.overlayIndex)
        },
        onIonBackdropTap: this.onBackdropTap,
        class: Object.assign(Object.assign({}, Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_8__["g"])(this.cssClass)), (_Object$assign = {}, Object(_Users_bancolombia_Documents_NEQUI_APP_GITHUB_PDN_nequi_core_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$assign, mode, true), Object(_Users_bancolombia_Documents_NEQUI_APP_GITHUB_PDN_nequi_core_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$assign, 'loading-translucent', this.translucent), _Object$assign))
      }), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["h"])("ion-backdrop", {
        visible: this.showBackdrop,
        tappable: this.backdropDismiss
      }), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["h"])("div", {
        tabindex: "0"
      }), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["h"])("div", {
        class: "loading-wrapper ion-overlay-wrapper",
        role: "dialog"
      }, spinner && Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["h"])("div", {
        class: "loading-spinner"
      }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["h"])("ion-spinner", {
        name: spinner,
        "aria-hidden": "true"
      })), message && Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["h"])("div", {
        class: "loading-content",
        innerHTML: Object(_index_9e3fe806_js__WEBPACK_IMPORTED_MODULE_7__["s"])(message)
      })), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["h"])("div", {
        tabindex: "0"
      }));
    }
  }, {
    key: "el",
    get: function get() {
      return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["i"])(this);
    }
  }]);

  return Loading;
}();

Loading.style = {
  ios: loadingIosCss,
  md: loadingMdCss
};


/***/ })

}]);
//# sourceMappingURL=20.js.map