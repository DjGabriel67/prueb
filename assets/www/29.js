(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "smMY":
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js ***!
  \******************************************************************/
/*! exports provided: ion_reorder, ion_reorder_group */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_reorder", function() { return Reorder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_reorder_group", function() { return ReorderGroup; });
/* harmony import */ var _Users_bancolombia_Documents_NEQUI_APP_GITHUB_PDN_nequi_core_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "rePB");
/* harmony import */ var _Users_bancolombia_Documents_NEQUI_APP_GITHUB_PDN_nequi_core_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "HaE+");
/* harmony import */ var _Users_bancolombia_Documents_NEQUI_APP_GITHUB_PDN_nequi_core_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var _Users_bancolombia_Documents_NEQUI_APP_GITHUB_PDN_nequi_core_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "wEJo");
/* harmony import */ var _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ionic-global-63a97a32.js */ "E/Mt");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "qULd");





function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }




var reorderIosCss = ":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:34px;opacity:0.4}";
var reorderMdCss = ":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:31px;opacity:0.3}";

var Reorder = /*#__PURE__*/function () {
  function Reorder(hostRef) {
    Object(_Users_bancolombia_Documents_NEQUI_APP_GITHUB_PDN_nequi_core_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Reorder);

    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["r"])(this, hostRef);
  }

  Object(_Users_bancolombia_Documents_NEQUI_APP_GITHUB_PDN_nequi_core_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Reorder, [{
    key: "onClick",
    value: function onClick(ev) {
      var reorderGroup = this.el.closest('ion-reorder-group');
      ev.preventDefault(); // Only stop event propagation if the reorder is inside of an enabled
      // reorder group. This allows interaction with clickable children components.

      if (!reorderGroup || !reorderGroup.disabled) {
        ev.stopImmediatePropagation();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_5__["b"])(this);
      var reorderIcon = mode === 'ios' ? 'reorder-three-outline' : 'reorder-two-sharp';
      return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["H"], {
        class: mode
      }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["h"])("slot", null, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["h"])("ion-icon", {
        name: reorderIcon,
        lazy: false,
        class: "reorder-icon",
        part: "icon"
      })));
    }
  }, {
    key: "el",
    get: function get() {
      return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["i"])(this);
    }
  }]);

  return Reorder;
}();

Reorder.style = {
  ios: reorderIosCss,
  md: reorderMdCss
};
var reorderGroupCss = ".reorder-list-active>*{-webkit-transition:-webkit-transform 300ms;transition:-webkit-transform 300ms;transition:transform 300ms;transition:transform 300ms, -webkit-transform 300ms;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none !important;transition:none !important;-webkit-box-shadow:0 0 10px rgba(0, 0, 0, 0.4);box-shadow:0 0 10px rgba(0, 0, 0, 0.4);opacity:0.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}";

var ReorderGroup = /*#__PURE__*/function () {
  function ReorderGroup(hostRef) {
    Object(_Users_bancolombia_Documents_NEQUI_APP_GITHUB_PDN_nequi_core_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ReorderGroup);

    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["r"])(this, hostRef);
    this.ionItemReorder = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["e"])(this, "ionItemReorder", 7);
    this.lastToIndex = -1;
    this.cachedHeights = [];
    this.scrollElTop = 0;
    this.scrollElBottom = 0;
    this.scrollElInitial = 0;
    this.containerTop = 0;
    this.containerBottom = 0;
    this.state = 0
    /* Idle */
    ;
    /**
     * If `true`, the reorder will be hidden.
     */

    this.disabled = true;
  }

  Object(_Users_bancolombia_Documents_NEQUI_APP_GITHUB_PDN_nequi_core_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ReorderGroup, [{
    key: "disabledChanged",
    value: function disabledChanged() {
      if (this.gesture) {
        this.gesture.enable(!this.disabled);
      }
    }
  }, {
    key: "connectedCallback",
    value: function () {
      var _connectedCallback = Object(_Users_bancolombia_Documents_NEQUI_APP_GITHUB_PDN_nequi_core_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this = this;

        var contentEl;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              contentEl = this.el.closest('ion-content');

              if (!contentEl) {
                _context.next = 5;
                break;
              }

              _context.next = 4;
              return contentEl.getScrollElement();

            case 4:
              this.scrollEl = _context.sent;

            case 5:
              _context.next = 7;
              return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./index-34cb2743.js */ "KF81"));

            case 7:
              this.gesture = _context.sent.createGesture({
                el: this.el,
                gestureName: 'reorder',
                gesturePriority: 110,
                threshold: 0,
                direction: 'y',
                passive: false,
                canStart: function canStart(detail) {
                  return _this.canStart(detail);
                },
                onStart: function onStart(ev) {
                  return _this.onStart(ev);
                },
                onMove: function onMove(ev) {
                  return _this.onMove(ev);
                },
                onEnd: function onEnd() {
                  return _this.onEnd();
                }
              });
              this.disabledChanged();

            case 9:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));

      function connectedCallback() {
        return _connectedCallback.apply(this, arguments);
      }

      return connectedCallback;
    }()
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.onEnd();

      if (this.gesture) {
        this.gesture.destroy();
        this.gesture = undefined;
      }
    }
    /**
     * Completes the reorder operation. Must be called by the `ionItemReorder` event.
     *
     * If a list of items is passed, the list will be reordered and returned in the
     * proper order.
     *
     * If no parameters are passed or if `true` is passed in, the reorder will complete
     * and the item will remain in the position it was dragged to. If `false` is passed,
     * the reorder will complete and the item will bounce back to its original position.
     *
     * @param listOrReorder A list of items to be sorted and returned in the new order or a
     * boolean of whether or not the reorder should reposition the item.
     */

  }, {
    key: "complete",
    value: function complete(listOrReorder) {
      return Promise.resolve(this.completeSync(listOrReorder));
    }
  }, {
    key: "canStart",
    value: function canStart(ev) {
      if (this.selectedItemEl || this.state !== 0
      /* Idle */
      ) {
        return false;
      }

      var target = ev.event.target;
      var reorderEl = target.closest('ion-reorder');

      if (!reorderEl) {
        return false;
      }

      var item = findReorderItem(reorderEl, this.el);

      if (!item) {
        return false;
      }

      ev.data = item;
      return true;
    }
  }, {
    key: "onStart",
    value: function onStart(ev) {
      ev.event.preventDefault();
      var item = this.selectedItemEl = ev.data;
      var heights = this.cachedHeights;
      heights.length = 0;
      var el = this.el;
      var children = el.children;

      if (!children || children.length === 0) {
        return;
      }

      var sum = 0;

      for (var i = 0; i < children.length; i++) {
        var child = children[i];
        sum += child.offsetHeight;
        heights.push(sum);
        child.$ionIndex = i;
      }

      var box = el.getBoundingClientRect();
      this.containerTop = box.top;
      this.containerBottom = box.bottom;

      if (this.scrollEl) {
        var scrollBox = this.scrollEl.getBoundingClientRect();
        this.scrollElInitial = this.scrollEl.scrollTop;
        this.scrollElTop = scrollBox.top + AUTO_SCROLL_MARGIN;
        this.scrollElBottom = scrollBox.bottom - AUTO_SCROLL_MARGIN;
      } else {
        this.scrollElInitial = 0;
        this.scrollElTop = 0;
        this.scrollElBottom = 0;
      }

      this.lastToIndex = indexForItem(item);
      this.selectedItemHeight = item.offsetHeight;
      this.state = 1
      /* Active */
      ;
      item.classList.add(ITEM_REORDER_SELECTED);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_6__["a"])();
    }
  }, {
    key: "onMove",
    value: function onMove(ev) {
      var selectedItem = this.selectedItemEl;

      if (!selectedItem) {
        return;
      } // Scroll if we reach the scroll margins


      var scroll = this.autoscroll(ev.currentY); // // Get coordinate

      var top = this.containerTop - scroll;
      var bottom = this.containerBottom - scroll;
      var currentY = Math.max(top, Math.min(ev.currentY, bottom));
      var deltaY = scroll + currentY - ev.startY;
      var normalizedY = currentY - top;
      var toIndex = this.itemIndexForTop(normalizedY);

      if (toIndex !== this.lastToIndex) {
        var fromIndex = indexForItem(selectedItem);
        this.lastToIndex = toIndex;
        Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_6__["b"])();
        this.reorderMove(fromIndex, toIndex);
      } // Update selected item position


      selectedItem.style.transform = "translateY(".concat(deltaY, "px)");
    }
  }, {
    key: "onEnd",
    value: function onEnd() {
      var selectedItemEl = this.selectedItemEl;
      this.state = 2
      /* Complete */
      ;

      if (!selectedItemEl) {
        this.state = 0
        /* Idle */
        ;
        return;
      }

      var toIndex = this.lastToIndex;
      var fromIndex = indexForItem(selectedItemEl);

      if (toIndex === fromIndex) {
        this.completeSync();
      } else {
        this.ionItemReorder.emit({
          from: fromIndex,
          to: toIndex,
          complete: this.completeSync.bind(this)
        });
      }

      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_6__["h"])();
    }
  }, {
    key: "completeSync",
    value: function completeSync(listOrReorder) {
      var selectedItemEl = this.selectedItemEl;

      if (selectedItemEl && this.state === 2
      /* Complete */
      ) {
        var children = this.el.children;
        var len = children.length;
        var toIndex = this.lastToIndex;
        var fromIndex = indexForItem(selectedItemEl);

        if (toIndex !== fromIndex && (listOrReorder === undefined || listOrReorder === true)) {
          var ref = fromIndex < toIndex ? children[toIndex + 1] : children[toIndex];
          this.el.insertBefore(selectedItemEl, ref);
        }

        if (Array.isArray(listOrReorder)) {
          listOrReorder = reorderArray(listOrReorder, fromIndex, toIndex);
        }

        for (var i = 0; i < len; i++) {
          children[i].style['transform'] = '';
        }

        selectedItemEl.style.transition = '';
        selectedItemEl.classList.remove(ITEM_REORDER_SELECTED);
        this.selectedItemEl = undefined;
        this.state = 0
        /* Idle */
        ;
      }

      return listOrReorder;
    }
  }, {
    key: "itemIndexForTop",
    value: function itemIndexForTop(deltaY) {
      var heights = this.cachedHeights; // TODO: since heights is a sorted array of integers, we can do
      // speed up the search using binary search. Remember that linear-search is still
      // faster than binary-search for small arrays (<64) due CPU branch misprediction.

      for (var i = 0; i < heights.length; i++) {
        if (heights[i] > deltaY) {
          return i;
        }
      }

      return heights.length - 1;
    }
    /********* DOM WRITE ********* */

  }, {
    key: "reorderMove",
    value: function reorderMove(fromIndex, toIndex) {
      var itemHeight = this.selectedItemHeight;
      var children = this.el.children;

      for (var i = 0; i < children.length; i++) {
        var style = children[i].style;
        var value = '';

        if (i > fromIndex && i <= toIndex) {
          value = "translateY(".concat(-itemHeight, "px)");
        } else if (i < fromIndex && i >= toIndex) {
          value = "translateY(".concat(itemHeight, "px)");
        }

        style['transform'] = value;
      }
    }
  }, {
    key: "autoscroll",
    value: function autoscroll(posY) {
      if (!this.scrollEl) {
        return 0;
      }

      var amount = 0;

      if (posY < this.scrollElTop) {
        amount = -SCROLL_JUMP;
      } else if (posY > this.scrollElBottom) {
        amount = SCROLL_JUMP;
      }

      if (amount !== 0) {
        this.scrollEl.scrollBy(0, amount);
      }

      return this.scrollEl.scrollTop - this.scrollElInitial;
    }
  }, {
    key: "render",
    value: function render() {
      var _class;

      var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_5__["b"])(this);
      return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["H"], {
        class: (_class = {}, Object(_Users_bancolombia_Documents_NEQUI_APP_GITHUB_PDN_nequi_core_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, mode, true), Object(_Users_bancolombia_Documents_NEQUI_APP_GITHUB_PDN_nequi_core_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, 'reorder-enabled', !this.disabled), Object(_Users_bancolombia_Documents_NEQUI_APP_GITHUB_PDN_nequi_core_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, 'reorder-list-active', this.state !== 0), _class)
      });
    }
  }, {
    key: "el",
    get: function get() {
      return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["i"])(this);
    }
  }], [{
    key: "watchers",
    get: function get() {
      return {
        "disabled": ["disabledChanged"]
      };
    }
  }]);

  return ReorderGroup;
}();

var indexForItem = function indexForItem(element) {
  return element['$ionIndex'];
};

var findReorderItem = function findReorderItem(node, container) {
  var parent;

  while (node) {
    parent = node.parentElement;

    if (parent === container) {
      return node;
    }

    node = parent;
  }

  return undefined;
};

var AUTO_SCROLL_MARGIN = 60;
var SCROLL_JUMP = 10;
var ITEM_REORDER_SELECTED = 'reorder-selected';

var reorderArray = function reorderArray(array, from, to) {
  var element = array[from];
  array.splice(from, 1);
  array.splice(to, 0, element);
  return array.slice();
};

ReorderGroup.style = reorderGroupCss;


/***/ })

}]);
//# sourceMappingURL=29.js.map