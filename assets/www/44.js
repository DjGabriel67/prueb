(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[44],{

/***/ "8Mb5":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js ***!
  \***********************************************************************/
/*! exports provided: ion_virtual_scroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_virtual_scroll", function() { return VirtualScroll; });
/* harmony import */ var _Users_bancolombia_Documents_NEQUI_APP_GITHUB_PDN_nequi_core_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "HaE+");
/* harmony import */ var _Users_bancolombia_Documents_NEQUI_APP_GITHUB_PDN_nequi_core_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var _Users_bancolombia_Documents_NEQUI_APP_GITHUB_PDN_nequi_core_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _Users_bancolombia_Documents_NEQUI_APP_GITHUB_PDN_nequi_core_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ "uFwe");
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "wEJo");
/* harmony import */ var _helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers-1457892a.js */ "W6o/");





function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }



var CELL_TYPE_ITEM = 'item';
var CELL_TYPE_HEADER = 'header';
var CELL_TYPE_FOOTER = 'footer';
var NODE_CHANGE_NONE = 0;
var NODE_CHANGE_POSITION = 1;
var NODE_CHANGE_CELL = 2;
var MIN_READS = 2;

var updateVDom = function updateVDom(dom, heightIndex, cells, range) {
  // reset dom
  var _iterator = Object(_Users_bancolombia_Documents_NEQUI_APP_GITHUB_PDN_nequi_core_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_3__["default"])(dom),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var node = _step.value;
      node.change = NODE_CHANGE_NONE;
      node.d = true;
    } // try to match into exisiting dom

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var toMutate = [];
  var end = range.offset + range.length;

  var _loop = function _loop() {
    var cell = cells[i];
    var node = dom.find(function (n) {
      return n.d && n.cell === cell;
    });

    if (node) {
      var top = heightIndex[i];

      if (top !== node.top) {
        node.top = top;
        node.change = NODE_CHANGE_POSITION;
      }

      node.d = false;
    } else {
      toMutate.push(cell);
    }
  };

  for (var i = range.offset; i < end; i++) {
    _loop();
  } // needs to append


  var pool = dom.filter(function (n) {
    return n.d;
  });

  var _loop2 = function _loop2() {
    var cell = _toMutate[_i];
    var node = pool.find(function (n) {
      return n.d && n.cell.type === cell.type;
    });
    var index = cell.i;

    if (node) {
      node.d = false;
      node.change = NODE_CHANGE_CELL;
      node.cell = cell;
      node.top = heightIndex[index];
    } else {
      dom.push({
        d: false,
        cell: cell,
        visible: true,
        change: NODE_CHANGE_CELL,
        top: heightIndex[index]
      });
    }
  };

  for (var _i = 0, _toMutate = toMutate; _i < _toMutate.length; _i++) {
    _loop2();
  }

  dom.filter(function (n) {
    return n.d && n.top !== -9999;
  }).forEach(function (n) {
    n.change = NODE_CHANGE_POSITION;
    n.top = -9999;
  });
};

var doRender = function doRender(el, nodeRender, dom, updateCellHeight) {
  var children = Array.from(el.children).filter(function (n) {
    return n.tagName !== 'TEMPLATE';
  });
  var childrenNu = children.length;
  var child;

  for (var i = 0; i < dom.length; i++) {
    var node = dom[i];
    var cell = node.cell; // the cell change, the content must be updated

    if (node.change === NODE_CHANGE_CELL) {
      if (i < childrenNu) {
        child = children[i];
        nodeRender(child, cell, i);
      } else {
        var newChild = createNode(el, cell.type);
        child = nodeRender(newChild, cell, i) || newChild;
        child.classList.add('virtual-item');
        el.appendChild(child);
      }

      child['$ionCell'] = cell;
    } else {
      child = children[i];
    } // only update position when it changes


    if (node.change !== NODE_CHANGE_NONE) {
      child.style.transform = "translate3d(0,".concat(node.top, "px,0)");
    } // update visibility


    var visible = cell.visible;

    if (node.visible !== visible) {
      if (visible) {
        child.classList.remove('virtual-loading');
      } else {
        child.classList.add('virtual-loading');
      }

      node.visible = visible;
    } // dynamic height


    if (cell.reads > 0) {
      updateCellHeight(cell, child);
      cell.reads--;
    }
  }
};

var createNode = function createNode(el, type) {
  var template = getTemplate(el, type);

  if (template && el.ownerDocument) {
    return el.ownerDocument.importNode(template.content, true).children[0];
  }

  return null;
};

var getTemplate = function getTemplate(el, type) {
  switch (type) {
    case CELL_TYPE_ITEM:
      return el.querySelector('template:not([name])');

    case CELL_TYPE_HEADER:
      return el.querySelector('template[name=header]');

    case CELL_TYPE_FOOTER:
      return el.querySelector('template[name=footer]');
  }
};

var getViewport = function getViewport(scrollTop, vierportHeight, margin) {
  return {
    top: Math.max(scrollTop - margin, 0),
    bottom: scrollTop + vierportHeight + margin
  };
};

var getRange = function getRange(heightIndex, viewport, buffer) {
  var topPos = viewport.top;
  var bottomPos = viewport.bottom; // find top index

  var i = 0;

  for (; i < heightIndex.length; i++) {
    if (heightIndex[i] > topPos) {
      break;
    }
  }

  var offset = Math.max(i - buffer - 1, 0); // find bottom index

  for (; i < heightIndex.length; i++) {
    if (heightIndex[i] >= bottomPos) {
      break;
    }
  }

  var end = Math.min(i + buffer, heightIndex.length);
  var length = end - offset;
  return {
    offset: offset,
    length: length
  };
};

var getShouldUpdate = function getShouldUpdate(dirtyIndex, currentRange, range) {
  var end = range.offset + range.length;
  return dirtyIndex <= end || currentRange.offset !== range.offset || currentRange.length !== range.length;
};

var findCellIndex = function findCellIndex(cells, index) {
  var max = cells.length > 0 ? cells[cells.length - 1].index : 0;

  if (index === 0) {
    return 0;
  } else if (index === max + 1) {
    return cells.length;
  } else {
    return cells.findIndex(function (c) {
      return c.index === index;
    });
  }
};

var inplaceUpdate = function inplaceUpdate(dst, src, offset) {
  if (offset === 0 && src.length >= dst.length) {
    return src;
  }

  for (var i = 0; i < src.length; i++) {
    dst[i + offset] = src[i];
  }

  return dst;
};

var _calcCells = function calcCells(items, itemHeight, headerHeight, footerHeight, headerFn, footerFn, approxHeaderHeight, approxFooterHeight, approxItemHeight, j, offset, len) {
  var cells = [];
  var end = len + offset;

  for (var i = offset; i < end; i++) {
    var item = items[i];

    if (headerFn) {
      var value = headerFn(item, i, items);

      if (value != null) {
        cells.push({
          i: j++,
          type: CELL_TYPE_HEADER,
          value: value,
          index: i,
          height: headerHeight ? headerHeight(value, i) : approxHeaderHeight,
          reads: headerHeight ? 0 : MIN_READS,
          visible: !!headerHeight
        });
      }
    }

    cells.push({
      i: j++,
      type: CELL_TYPE_ITEM,
      value: item,
      index: i,
      height: itemHeight ? itemHeight(item, i) : approxItemHeight,
      reads: itemHeight ? 0 : MIN_READS,
      visible: !!itemHeight
    });

    if (footerFn) {
      var _value = footerFn(item, i, items);

      if (_value != null) {
        cells.push({
          i: j++,
          type: CELL_TYPE_FOOTER,
          value: _value,
          index: i,
          height: footerHeight ? footerHeight(_value, i) : approxFooterHeight,
          reads: footerHeight ? 0 : MIN_READS,
          visible: !!footerHeight
        });
      }
    }
  }

  return cells;
};

var _calcHeightIndex = function calcHeightIndex(buf, cells, index) {
  var acum = buf[index];

  for (var i = index; i < buf.length; i++) {
    buf[i] = acum;
    acum += cells[i].height;
  }

  return acum;
};

var resizeBuffer = function resizeBuffer(buf, len) {
  if (!buf) {
    return new Uint32Array(len);
  }

  if (buf.length === len) {
    return buf;
  } else if (len > buf.length) {
    var newBuf = new Uint32Array(len);
    newBuf.set(buf);
    return newBuf;
  } else {
    return buf.subarray(0, len);
  }
};

var positionForIndex = function positionForIndex(index, cells, heightIndex) {
  var cell = cells.find(function (c) {
    return c.type === CELL_TYPE_ITEM && c.index === index;
  });

  if (cell) {
    return heightIndex[cell.i];
  }

  return -1;
};

var virtualScrollCss = "ion-virtual-scroll{display:block;position:relative;width:100%;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-virtual-scroll>.virtual-loading{opacity:0}ion-virtual-scroll>.virtual-item{position:absolute !important;top:0 !important;right:0 !important;left:0 !important;-webkit-transition-duration:0ms;transition-duration:0ms;will-change:transform}";

var VirtualScroll = /*#__PURE__*/function () {
  function VirtualScroll(hostRef) {
    var _this = this;

    Object(_Users_bancolombia_Documents_NEQUI_APP_GITHUB_PDN_nequi_core_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, VirtualScroll);

    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["r"])(this, hostRef);
    this.range = {
      offset: 0,
      length: 0
    };
    this.viewportHeight = 0;
    this.cells = [];
    this.virtualDom = [];
    this.isEnabled = false;
    this.viewportOffset = 0;
    this.currentScrollTop = 0;
    this.indexDirty = 0;
    this.lastItemLen = 0;
    this.totalHeight = 0;
    /**
     * It is important to provide this
     * if virtual item height will be significantly larger than the default
     * The approximate height of each virtual item template's cell.
     * This dimension is used to help determine how many cells should
     * be created when initialized, and to help calculate the height of
     * the scrollable area. This height value can only use `px` units.
     * Note that the actual rendered size of each cell comes from the
     * app's CSS, whereas this approximation is used to help calculate
     * initial dimensions before the item has been rendered.
     */

    this.approxItemHeight = 45;
    /**
     * The approximate height of each header template's cell.
     * This dimension is used to help determine how many cells should
     * be created when initialized, and to help calculate the height of
     * the scrollable area. This height value can only use `px` units.
     * Note that the actual rendered size of each cell comes from the
     * app's CSS, whereas this approximation is used to help calculate
     * initial dimensions before the item has been rendered.
     */

    this.approxHeaderHeight = 30;
    /**
     * The approximate width of each footer template's cell.
     * This dimension is used to help determine how many cells should
     * be created when initialized, and to help calculate the height of
     * the scrollable area. This height value can only use `px` units.
     * Note that the actual rendered size of each cell comes from the
     * app's CSS, whereas this approximation is used to help calculate
     * initial dimensions before the item has been rendered.
     */

    this.approxFooterHeight = 30;

    this.onScroll = function () {
      _this.updateVirtualScroll();
    };
  }

  Object(_Users_bancolombia_Documents_NEQUI_APP_GITHUB_PDN_nequi_core_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(VirtualScroll, [{
    key: "itemsChanged",
    value: function itemsChanged() {
      this.calcCells();
      this.updateVirtualScroll();
    }
  }, {
    key: "componentWillLoad",
    value: function componentWillLoad() {
      console.warn("[Deprecation Warning]: ion-virtual-scroll has been deprecated and will be removed in Ionic Framework v7.0. See https://ionicframework.com/docs/angular/virtual-scroll for migration steps.");
    }
  }, {
    key: "connectedCallback",
    value: function () {
      var _connectedCallback = Object(_Users_bancolombia_Documents_NEQUI_APP_GITHUB_PDN_nequi_core_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var contentEl;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              contentEl = this.el.closest('ion-content');

              if (contentEl) {
                _context.next = 4;
                break;
              }

              console.error('<ion-virtual-scroll> must be used inside an <ion-content>');
              return _context.abrupt("return");

            case 4:
              _context.next = 6;
              return contentEl.getScrollElement();

            case 6:
              this.scrollEl = _context.sent;
              this.contentEl = contentEl;
              this.calcCells();
              this.updateState();

            case 10:
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
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.updateState();
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.scrollEl = undefined;
    }
  }, {
    key: "onResize",
    value: function onResize() {
      this.calcCells();
      this.updateVirtualScroll();
    }
    /**
     * Returns the position of the virtual item at the given index.
     */

  }, {
    key: "positionForItem",
    value: function positionForItem(index) {
      return Promise.resolve(positionForIndex(index, this.cells, this.getHeightIndex()));
    }
    /**
     * This method marks a subset of items as dirty, so they can be re-rendered. Items should be marked as
     * dirty any time the content or their style changes.
     *
     * The subset of items to be updated can are specifing by an offset and a length.
     */

  }, {
    key: "checkRange",
    value: function () {
      var _checkRange = Object(_Users_bancolombia_Documents_NEQUI_APP_GITHUB_PDN_nequi_core_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(offset) {
        var len,
            length,
            cellIndex,
            cells,
            _args2 = arguments;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              len = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : -1;

              if (this.items) {
                _context2.next = 3;
                break;
              }

              return _context2.abrupt("return");

            case 3:
              length = len === -1 ? this.items.length - offset : len;
              cellIndex = findCellIndex(this.cells, offset);
              cells = _calcCells(this.items, this.itemHeight, this.headerHeight, this.footerHeight, this.headerFn, this.footerFn, this.approxHeaderHeight, this.approxFooterHeight, this.approxItemHeight, cellIndex, offset, length);
              this.cells = inplaceUpdate(this.cells, cells, cellIndex);
              this.lastItemLen = this.items.length;
              this.indexDirty = Math.max(offset - 1, 0);
              this.scheduleUpdate();

            case 10:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));

      function checkRange(_x) {
        return _checkRange.apply(this, arguments);
      }

      return checkRange;
    }()
    /**
     * This method marks the tail the items array as dirty, so they can be re-rendered.
     *
     * It's equivalent to calling:
     *
     * ```js
     * virtualScroll.checkRange(lastItemLen);
     * ```
     */

  }, {
    key: "checkEnd",
    value: function () {
      var _checkEnd = Object(_Users_bancolombia_Documents_NEQUI_APP_GITHUB_PDN_nequi_core_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (this.items) {
                this.checkRange(this.lastItemLen);
              }

            case 1:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));

      function checkEnd() {
        return _checkEnd.apply(this, arguments);
      }

      return checkEnd;
    }()
  }, {
    key: "updateVirtualScroll",
    value: function updateVirtualScroll() {
      // do nothing if virtual-scroll is disabled
      if (!this.isEnabled || !this.scrollEl) {
        return;
      } // unschedule future updates


      if (this.timerUpdate) {
        clearTimeout(this.timerUpdate);
        this.timerUpdate = undefined;
      } // schedule DOM operations into the stencil queue


      Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["f"])(this.readVS.bind(this));
      Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["c"])(this.writeVS.bind(this));
    }
  }, {
    key: "readVS",
    value: function readVS() {
      var contentEl = this.contentEl,
          scrollEl = this.scrollEl,
          el = this.el;
      var topOffset = 0;
      var node = el;

      while (node && node !== contentEl) {
        topOffset += node.offsetTop;
        node = node.offsetParent;
      }

      this.viewportOffset = topOffset;

      if (scrollEl) {
        this.viewportHeight = scrollEl.offsetHeight;
        this.currentScrollTop = scrollEl.scrollTop;
      }
    }
  }, {
    key: "writeVS",
    value: function writeVS() {
      var dirtyIndex = this.indexDirty; // get visible viewport

      var scrollTop = this.currentScrollTop - this.viewportOffset;
      var viewport = getViewport(scrollTop, this.viewportHeight, 100); // compute lazily the height index

      var heightIndex = this.getHeightIndex(); // get array bounds of visible cells base in the viewport

      var range = getRange(heightIndex, viewport, 2); // fast path, do nothing

      var shouldUpdate = getShouldUpdate(dirtyIndex, this.range, range);

      if (!shouldUpdate) {
        return;
      }

      this.range = range; // in place mutation of the virtual DOM

      updateVDom(this.virtualDom, heightIndex, this.cells, range); // Write DOM
      // Different code paths taken depending of the render API used

      if (this.nodeRender) {
        doRender(this.el, this.nodeRender, this.virtualDom, this.updateCellHeight.bind(this));
      } else if (this.domRender) {
        this.domRender(this.virtualDom);
      } else if (this.renderItem) {
        Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["j"])(this);
      }
    }
  }, {
    key: "updateCellHeight",
    value: function updateCellHeight(cell, node) {
      var _this2 = this;

      var update = function update() {
        if (node['$ionCell'] === cell) {
          var style = window.getComputedStyle(node);
          var height = node.offsetHeight + parseFloat(style.getPropertyValue('margin-bottom'));

          _this2.setCellHeight(cell, height);
        }
      };

      if (node) {
        Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_5__["c"])(node, update);
      } else {
        update();
      }
    }
  }, {
    key: "setCellHeight",
    value: function setCellHeight(cell, height) {
      var index = cell.i; // the cell might changed since the height update was scheduled

      if (cell !== this.cells[index]) {
        return;
      }

      if (cell.height !== height || cell.visible !== true) {
        cell.visible = true;
        cell.height = height;
        this.indexDirty = Math.min(this.indexDirty, index);
        this.scheduleUpdate();
      }
    }
  }, {
    key: "scheduleUpdate",
    value: function scheduleUpdate() {
      var _this3 = this;

      clearTimeout(this.timerUpdate);
      this.timerUpdate = setTimeout(function () {
        return _this3.updateVirtualScroll();
      }, 100);
    }
  }, {
    key: "updateState",
    value: function updateState() {
      var shouldEnable = !!(this.scrollEl && this.cells);

      if (shouldEnable !== this.isEnabled) {
        this.enableScrollEvents(shouldEnable);

        if (shouldEnable) {
          this.updateVirtualScroll();
        }
      }
    }
  }, {
    key: "calcCells",
    value: function calcCells() {
      if (!this.items) {
        return;
      }

      this.lastItemLen = this.items.length;
      this.cells = _calcCells(this.items, this.itemHeight, this.headerHeight, this.footerHeight, this.headerFn, this.footerFn, this.approxHeaderHeight, this.approxFooterHeight, this.approxItemHeight, 0, 0, this.lastItemLen);
      this.indexDirty = 0;
    }
  }, {
    key: "getHeightIndex",
    value: function getHeightIndex() {
      if (this.indexDirty !== Infinity) {
        this.calcHeightIndex(this.indexDirty);
      }

      return this.heightIndex;
    }
  }, {
    key: "calcHeightIndex",
    value: function calcHeightIndex() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      // TODO: optimize, we don't need to calculate all the cells
      this.heightIndex = resizeBuffer(this.heightIndex, this.cells.length);
      this.totalHeight = _calcHeightIndex(this.heightIndex, this.cells, index);
      this.indexDirty = Infinity;
    }
  }, {
    key: "enableScrollEvents",
    value: function enableScrollEvents(shouldListen) {
      var _this4 = this;

      if (this.rmEvent) {
        this.rmEvent();
        this.rmEvent = undefined;
      }

      var scrollEl = this.scrollEl;

      if (scrollEl) {
        this.isEnabled = shouldListen;
        scrollEl.addEventListener('scroll', this.onScroll);

        this.rmEvent = function () {
          scrollEl.removeEventListener('scroll', _this4.onScroll);
        };
      }
    }
  }, {
    key: "renderVirtualNode",
    value: function renderVirtualNode(node) {
      var _node$cell = node.cell,
          type = _node$cell.type,
          value = _node$cell.value,
          index = _node$cell.index;

      switch (type) {
        case CELL_TYPE_ITEM:
          return this.renderItem(value, index);

        case CELL_TYPE_HEADER:
          return this.renderHeader(value, index);

        case CELL_TYPE_FOOTER:
          return this.renderFooter(value, index);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["H"], {
        style: {
          height: "".concat(this.totalHeight, "px")
        }
      }, this.renderItem && Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["h"])(VirtualProxy, {
        dom: this.virtualDom
      }, this.virtualDom.map(function (node) {
        return _this5.renderVirtualNode(node);
      })));
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
        "itemHeight": ["itemsChanged"],
        "headerHeight": ["itemsChanged"],
        "footerHeight": ["itemsChanged"],
        "items": ["itemsChanged"]
      };
    }
  }]);

  return VirtualScroll;
}();

var VirtualProxy = function VirtualProxy(_ref, children, utils) {
  var dom = _ref.dom;
  return utils.map(children, function (child, i) {
    var node = dom[i];
    var vattrs = child.vattrs || {};
    var classes = vattrs.class || '';
    classes += 'virtual-item ';

    if (!node.visible) {
      classes += 'virtual-loading';
    }

    return Object.assign(Object.assign({}, child), {
      vattrs: Object.assign(Object.assign({}, vattrs), {
        class: classes,
        style: Object.assign(Object.assign({}, vattrs.style), {
          transform: "translate3d(0,".concat(node.top, "px,0)")
        })
      })
    });
  });
};

VirtualScroll.style = virtualScrollCss;


/***/ })

}]);
//# sourceMappingURL=44.js.map