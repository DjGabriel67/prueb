(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "0J48":
/*!*****************************************************!*\
  !*** ./libs/native/src/calendar/calendar.plugin.ts ***!
  \*****************************************************/
/*! exports provided: CalendarRecurrence, CalendarPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarRecurrence", function() { return CalendarRecurrence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarPlugin", function() { return CalendarPlugin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/calendar/ngx */ "8P2a");
/* harmony import */ var _nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nequi/features/commons/core */ "zidQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");






var CalendarRecurrence;
(function (CalendarRecurrence) {
    CalendarRecurrence["DAILY"] = "daily";
    CalendarRecurrence["WEEKLY"] = "weekly";
    CalendarRecurrence["MONTHLY"] = "monthly";
    CalendarRecurrence["YEARLY"] = "yearly";
})(CalendarRecurrence || (CalendarRecurrence = {}));
var CALENDAR_NAME = 'Nequi';
var CALENDAR_COLOR = '#210049';
var CalendarPlugin = /** @class */ (function () {
    function CalendarPlugin(calendar, loggerInteractor) {
        this.calendar = calendar;
        this.loggerInteractor = loggerInteractor;
        this.createCalendar();
    }
    CalendarPlugin.prototype.getCalendarOptions = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, this.calendar.getCalendarOptions()];
            });
        });
    };
    CalendarPlugin.prototype.deleteEvents = function (params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var title, location, notes, startDate, endDate;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                title = params.title, location = params.location, notes = params.notes, startDate = params.startDate, endDate = params.endDate;
                return [2 /*return*/, this.calendar.deleteEvent(title, location, notes, startDate, endDate)];
            });
        });
    };
    CalendarPlugin.prototype.createEvent = function (params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var title, location, description, startDate, endDate, options, calendar;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        title = params.title, location = params.location, description = params.description, startDate = params.startDate, endDate = params.endDate, options = params.options;
                        return [4 /*yield*/, this.getCalendars()];
                    case 1:
                        calendar = _a.sent();
                        options.calendarId = Number(calendar.id);
                        options.calendarName = CALENDAR_NAME;
                        return [2 /*return*/, this.calendar.createEventWithOptions(title, location, description, startDate, endDate, options)];
                }
            });
        });
    };
    CalendarPlugin.prototype.deleteEvent = function (params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var title, location, notes, startDate, endDate, calendar, options, events;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        title = params.title, location = params.location, notes = params.notes, startDate = params.startDate, endDate = params.endDate;
                        return [4 /*yield*/, this.getCalendars()];
                    case 1:
                        calendar = _a.sent();
                        options = {
                            calendarId: Number(calendar.id),
                            calendarName: CALENDAR_NAME,
                        };
                        return [4 /*yield*/, this.calendar.findEventWithOptions(title, location, notes, startDate, endDate, options)];
                    case 2:
                        events = _a.sent();
                        if (!events) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.calendar.deleteEventById(events[0].id)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CalendarPlugin.prototype.createCalendar = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.calendar.createCalendar({
                                calendarName: CALENDAR_NAME,
                                calendarColor: CALENDAR_COLOR,
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        this.loggerInteractor.error("[calendar-plugin][createCalendar] " + JSON.stringify(error_1));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CalendarPlugin.prototype.getCalendars = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var calendars;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.calendar.listCalendars()];
                    case 1:
                        calendars = _a.sent();
                        return [2 /*return*/, calendars.find(function (e) { return e.name === CALENDAR_NAME; })];
                }
            });
        });
    };
    CalendarPlugin.ɵfac = function CalendarPlugin_Factory(t) { return new (t || CalendarPlugin)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_1__["Calendar"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_nequi_features_commons_core__WEBPACK_IMPORTED_MODULE_2__["LoggerInteractor"])); };
    CalendarPlugin.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: CalendarPlugin, factory: CalendarPlugin.ɵfac, providedIn: 'root' });
    return CalendarPlugin;
}());



/***/ }),

/***/ "Zcj0":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "wEJo");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "qULd");
/* harmony import */ var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-34cb2743.js */ "KF81");




var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
  var currentTouchedButton;
  var initialTouchedButton;

  var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
    if (typeof document === 'undefined') {
      return;
    }

    var target = document.elementFromPoint(x, y);

    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }

    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };

  var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
    currentTouchedButton = button;

    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }

    var buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
      return buttonToModify.classList.add('ion-activated');
    });
    hapticFeedbackFn();
  };

  var clearActiveButton = function clearActiveButton() {
    var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (!currentTouchedButton) {
      return;
    }

    var buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
      return buttonToModify.classList.remove('ion-activated');
    });
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */

    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }

    currentTouchedButton = undefined;
  };

  return Object(_index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__["createGesture"])({
    el: el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: function onStart(ev) {
      return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["a"]);
    },
    onMove: function onMove(ev) {
      return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["b"]);
    },
    onEnd: function onEnd() {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["h"])();
      initialTouchedButton = undefined;
    }
  });
};



/***/ }),

/***/ "at6U":
/*!*******************************************!*\
  !*** ./libs/native/src/calendar/index.ts ***!
  \*******************************************/
/*! exports provided: CalendarRecurrence, CalendarPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calendar_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar.plugin */ "0J48");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarRecurrence", function() { return _calendar_plugin__WEBPACK_IMPORTED_MODULE_0__["CalendarRecurrence"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarPlugin", function() { return _calendar_plugin__WEBPACK_IMPORTED_MODULE_0__["CalendarPlugin"]; });




/***/ }),

/***/ "ft7a":
/*!***********************************************************!*\
  !*** ./libs/native/src/nequi-web-view/web-view.plugin.ts ***!
  \***********************************************************/
/*! exports provided: NequiWebView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NequiWebView", function() { return NequiWebView; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/core */ "C6fG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



var NequiWebView = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NequiWebView, _super);
    function NequiWebView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NequiWebView.prototype.launchWebView = function (params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(_this, 'launchWebView', {}, [
                            params.url,
                            params.title,
                            params.loadLabel,
                            params.headers || [],
                            resolve,
                            function (error) {
                                reject(error);
                            },
                        ]);
                    })];
            });
        });
    };
    NequiWebView.repo = 'https://integracion.bancadigital.com.co/bcol-front/cordova-plugins/cordova-nequi-plugin-web-view';
    NequiWebView.pluginName = 'NequiWebView';
    NequiWebView.plugin = 'cordova-nequi-plugin-web-view';
    NequiWebView.pluginRef = 'cordova.plugins.nequiWebView';
    NequiWebView.platforms = ['Android', 'iOS'];
    NequiWebView.install = 'ionic cordova plugin add cordova-nequi-plugin-web-view';
    NequiWebView.ɵfac = function NequiWebView_Factory(t) { return ɵNequiWebView_BaseFactory(t || NequiWebView); };
    NequiWebView.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: NequiWebView, factory: NequiWebView.ɵfac, providedIn: 'root' });
    return NequiWebView;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]));

var ɵNequiWebView_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](NequiWebView);


/***/ }),

/***/ "h3R7":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
var spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: function fn(dur, index, total) {
      var animationDelay = "".concat(dur * index / total - dur, "ms");
      var angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': "".concat(9 * Math.sin(angle), "px"),
          'left': "".concat(9 * Math.cos(angle), "px"),
          'animation-delay': animationDelay
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: function fn(dur, index, total) {
      var step = index / total;
      var animationDelay = "".concat(dur * step - dur, "ms");
      var angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': "".concat(9 * Math.sin(angle), "px"),
          'left': "".concat(9 * Math.cos(angle), "px"),
          'animation-delay': animationDelay
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: function fn() {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: function fn() {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: function fn(_, index) {
      var animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': "".concat(9 - 9 * index, "px"),
          'animation-delay': animationDelay
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: function fn(dur, index, total) {
      var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
      var animationDelay = "".concat(dur * index / total - dur, "ms");
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: function fn(dur, index, total) {
      var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
      var animationDelay = "".concat(dur * index / total - dur, "ms");
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay
        }
      };
    }
  }
};
var SPINNERS = spinners;


/***/ }),

/***/ "jqqF":
/*!*************************************************!*\
  !*** ./libs/native/src/nequi-web-view/index.ts ***!
  \*************************************************/
/*! exports provided: NequiWebView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _web_view_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web-view.plugin */ "ft7a");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NequiWebView", function() { return _web_view_plugin__WEBPACK_IMPORTED_MODULE_0__["NequiWebView"]; });




/***/ }),

/***/ "lIQC":
/*!**********************************************************************!*\
  !*** ./libs/features/open-banking/src/config/open-banking.config.ts ***!
  \**********************************************************************/
/*! exports provided: OpenBankingConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenBankingConfig", function() { return OpenBankingConfig; });
var OpenBankingConfig = Object.freeze({
    i18n: {
        moduleKey: 'open-banking',
    },
    applicationData: {
        persistenceDataKey: 'openBankingKey.',
    },
});


/***/ }),

/***/ "qULd":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
var HapticEngine = {
  getEngine: function getEngine() {
    var win = window;
    return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
  },
  available: function available() {
    return !!this.getEngine();
  },
  isCordova: function isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor: function isCapacitor() {
    var win = window;
    return !!win.Capacitor;
  },
  impact: function impact(options) {
    var engine = this.getEngine();

    if (!engine) {
      return;
    }

    var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({
      style: style
    });
  },
  notification: function notification(options) {
    var engine = this.getEngine();

    if (!engine) {
      return;
    }

    var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({
      style: style
    });
  },
  selection: function selection() {
    this.impact({
      style: 'light'
    });
  },
  selectionStart: function selectionStart() {
    var engine = this.getEngine();

    if (!engine) {
      return;
    }

    if (this.isCapacitor()) {
      engine.selectionStart();
    } else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged: function selectionChanged() {
    var engine = this.getEngine();

    if (!engine) {
      return;
    }

    if (this.isCapacitor()) {
      engine.selectionChanged();
    } else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd: function selectionEnd() {
    var engine = this.getEngine();

    if (!engine) {
      return;
    }

    if (this.isCapacitor()) {
      engine.selectionEnd();
    } else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */

var hapticSelection = function hapticSelection() {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */


var hapticSelectionStart = function hapticSelectionStart() {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */


var hapticSelectionChanged = function hapticSelectionChanged() {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */


var hapticSelectionEnd = function hapticSelectionEnd() {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */


var hapticImpact = function hapticImpact(options) {
  HapticEngine.impact(options);
};



/***/ })

}]);
//# sourceMappingURL=common.js.map