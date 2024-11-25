(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["npm._fluentui~utilities"],{

/***/ "+3Q3":
/*!****************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/extendComponent.js ***!
  \****************************************************************************************************************************/
/*! exports provided: extendComponent */
/*! exports used: extendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return extendComponent; });
/* harmony import */ var _appendFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appendFunction */ "9F0M");

/**
 * Extends a component's lifetime methods by appending new functions to the existing lifetime functions.
 */
function extendComponent(parent, methods) {
    for (var name_1 in methods) {
        if (methods.hasOwnProperty(name_1)) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            parent[name_1] = Object(_appendFunction__WEBPACK_IMPORTED_MODULE_0__[/* appendFunction */ "a"])(parent, parent[name_1], methods[name_1]);
        }
    }
}
//# sourceMappingURL=extendComponent.js.map

/***/ }),

/***/ "+FUN":
/*!**********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/Rectangle.js ***!
  \**********************************************************************************************************************/
/*! exports provided: Rectangle */
/*! exports used: Rectangle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rectangle; });
/**
 * Rectangle helper class.
 *
 * @public
 * {@docCategory Rectangle}
 */
var Rectangle = /** @class */ (function () {
    function Rectangle(left, right, top, bottom) {
        if (left === void 0) { left = 0; }
        if (right === void 0) { right = 0; }
        if (top === void 0) { top = 0; }
        if (bottom === void 0) { bottom = 0; }
        this.top = top;
        this.bottom = bottom;
        this.left = left;
        this.right = right;
    }
    Object.defineProperty(Rectangle.prototype, "width", {
        /**
         * Calculated automatically by subtracting the right from left
         */
        get: function () {
            return this.right - this.left;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "height", {
        /**
         * Calculated automatically by subtracting the bottom from top.
         */
        get: function () {
            return this.bottom - this.top;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Tests if another rect is approximately equal to this rect (within 4 decimal places.)
     */
    Rectangle.prototype.equals = function (rect) {
        // Fixing to 4 decimal places because it allows enough precision and will handle cases when something
        // should be rounded, like .999999 should round to 1.
        return (parseFloat(this.top.toFixed(4)) === parseFloat(rect.top.toFixed(4)) &&
            parseFloat(this.bottom.toFixed(4)) === parseFloat(rect.bottom.toFixed(4)) &&
            parseFloat(this.left.toFixed(4)) === parseFloat(rect.left.toFixed(4)) &&
            parseFloat(this.right.toFixed(4)) === parseFloat(rect.right.toFixed(4)));
    };
    return Rectangle;
}());

//# sourceMappingURL=Rectangle.js.map

/***/ }),

/***/ "02QY":
/*!********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/memoize.js ***!
  \********************************************************************************************************************/
/*! exports provided: setMemoizeWeakMap, resetMemoizations, memoize, memoizeFunction, createMemoizer */
/*! exports used: createMemoizer, memoizeFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export setMemoizeWeakMap */
/* unused harmony export resetMemoizations */
/* unused harmony export memoize */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return memoizeFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createMemoizer; });
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/merge-styles */ "lSY2");

var _initializedStylesheetResets = false;
var _resetCounter = 0;
var _emptyObject = { empty: true };
var _dictionary = {};
var _weakMap = typeof WeakMap === 'undefined' ? null : WeakMap;
/**
 *  Test utility for providing a custom weakmap.
 *
 * @internal
 * */
function setMemoizeWeakMap(weakMap) {
    _weakMap = weakMap;
}
/**
 * Reset memoizations.
 */
function resetMemoizations() {
    _resetCounter++;
}
/**
 * Memoize decorator to be used on class methods. WARNING: the `this` reference
 * will be inaccessible within a memoized method, given that a cached method's `this`
 * would not be instance-specific.
 *
 * @public
 */
function memoize(_target, _key, descriptor) {
    // We bind to "null" to prevent people from inadvertently pulling values from "this",
    // rather than passing them in as input values which can be memoized.
    var fn = memoizeFunction(descriptor.value && descriptor.value.bind(null));
    return {
        configurable: true,
        get: function () {
            return fn;
        },
    };
}
/**
 * Memoizes a function; when you pass in the same parameters multiple times, it returns a cached result.
 * Be careful when passing in objects, you need to pass in the same INSTANCE for caching to work. Otherwise
 * it will grow the cache unnecessarily. Also avoid using default values that evaluate functions; passing in
 * undefined for a value and relying on a default function will execute it the first time, but will not
 * re-evaluate subsequent times which may have been unexpected.
 *
 * By default, the cache will reset after 100 permutations, to avoid abuse cases where the function is
 * unintendedly called with unique objects. Without a reset, the cache could grow infinitely, so we safeguard
 * by resetting. To override this behavior, pass a value of 0 to the maxCacheSize parameter.
 *
 * @public
 * @param cb - The function to memoize.
 * @param maxCacheSize - Max results to cache. If the cache exceeds this value, it will reset on the next call.
 * @param ignoreNullOrUndefinedResult - Flag to decide whether to cache callback result if it is undefined/null.
 * If the flag is set to true, the callback result is recomputed every time till the callback result is
 * not undefined/null for the first time, and then the non-undefined/null version gets cached.
 * @returns A memoized version of the function.
 */
function memoizeFunction(cb, maxCacheSize, ignoreNullOrUndefinedResult) {
    if (maxCacheSize === void 0) { maxCacheSize = 100; }
    if (ignoreNullOrUndefinedResult === void 0) { ignoreNullOrUndefinedResult = false; }
    // Avoid breaking scenarios which don't have weak map.
    if (!_weakMap) {
        return cb;
    }
    if (!_initializedStylesheetResets) {
        var stylesheet = _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_0__[/* Stylesheet */ "c"].getInstance();
        if (stylesheet && stylesheet.onReset) {
            _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_0__[/* Stylesheet */ "c"].getInstance().onReset(resetMemoizations);
        }
        _initializedStylesheetResets = true;
    }
    var rootNode;
    var cacheSize = 0;
    var localResetCounter = _resetCounter;
    return function memoizedFunction() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var currentNode = rootNode;
        if (rootNode === undefined ||
            localResetCounter !== _resetCounter ||
            (maxCacheSize > 0 && cacheSize > maxCacheSize)) {
            rootNode = _createNode();
            cacheSize = 0;
            localResetCounter = _resetCounter;
        }
        currentNode = rootNode;
        // Traverse the tree until we find the match.
        for (var i = 0; i < args.length; i++) {
            var arg = _normalizeArg(args[i]);
            if (!currentNode.map.has(arg)) {
                currentNode.map.set(arg, _createNode());
            }
            currentNode = currentNode.map.get(arg);
        }
        if (!currentNode.hasOwnProperty('value')) {
            currentNode.value = cb.apply(void 0, args);
            cacheSize++;
        }
        if (ignoreNullOrUndefinedResult && (currentNode.value === null || currentNode.value === undefined)) {
            currentNode.value = cb.apply(void 0, args);
        }
        return currentNode.value;
    };
}
/**
 * Creates a memoizer for a single-value function, backed by a WeakMap.
 * With a WeakMap, the memoized values are only kept as long as the source objects,
 * ensuring that there is no memory leak.
 *
 * This function assumes that the input values passed to the wrapped function will be
 * `function` or `object` types. To memoize functions which accept other inputs, use
 * `memoizeFunction`, which memoizes against arbitrary inputs using a lookup cache.
 *
 * @public
 */
function createMemoizer(getValue) {
    if (!_weakMap) {
        // Without a `WeakMap` implementation, memoization is not possible.
        return getValue;
    }
    var cache = new _weakMap();
    function memoizedGetValue(input) {
        if (!input || (typeof input !== 'function' && typeof input !== 'object')) {
            // A WeakMap can only be used to test against reference values, i.e. 'function' and 'object'.
            // All other inputs cannot be memoized against in this manner.
            return getValue(input);
        }
        if (cache.has(input)) {
            return cache.get(input);
        }
        var value = getValue(input);
        cache.set(input, value);
        return value;
    }
    return memoizedGetValue;
}
function _normalizeArg(val) {
    if (!val) {
        return _emptyObject;
    }
    else if (typeof val === 'object' || typeof val === 'function') {
        return val;
    }
    else if (!_dictionary[val]) {
        _dictionary[val] = { val: val };
    }
    return _dictionary[val];
}
function _createNode() {
    return {
        map: _weakMap ? new _weakMap() : null,
    };
}
//# sourceMappingURL=memoize.js.map

/***/ }),

/***/ "12gh":
/*!************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/shadowDom/hooks/useMergeStylesHooks.js ***!
  \************************************************************************************************************************************************/
/*! exports provided: useMergeStylesHooks */
/*! exports used: useMergeStylesHooks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useMergeStylesHooks; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_MergeStylesRootContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/MergeStylesRootContext */ "M4sf");


var useMergeStylesHooks = function () {
    var ctx = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_contexts_MergeStylesRootContext__WEBPACK_IMPORTED_MODULE_1__[/* MergeStylesRootContext */ "a"]);
    return {
        useAdoptedStylesheet: ctx.useAdoptedStylesheet,
        useAdoptedStylesheetEx: ctx.useAdoptedStylesheetEx,
        useShadowConfig: ctx.useShadowConfig,
        useMergeStylesShadowRootContext: ctx.useMergeStylesShadowRootContext,
        useHasMergeStylesShadowRootContext: ctx.useHasMergeStylesShadowRootContext,
        useMergeStylesRootStylesheets: ctx.useMergeStylesRootStylesheets,
        useWindow: ctx.useWindow,
        useStyled: ctx.useStyled,
    };
};
//# sourceMappingURL=useMergeStylesHooks.js.map

/***/ }),

/***/ "3eXo":
/*!**************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/BaseComponent.js ***!
  \**************************************************************************************************************************/
/*! exports provided: BaseComponent, nullRender */
/*! exports used: nullRender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BaseComponent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return nullRender; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Async__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Async */ "zgRQ");
/* harmony import */ var _EventGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EventGroup */ "GBES");
/* harmony import */ var _warn_warnConditionallyRequiredProps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./warn/warnConditionallyRequiredProps */ "jVf8");
/* harmony import */ var _warn_warnMutuallyExclusive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./warn/warnMutuallyExclusive */ "q2Xa");
/* harmony import */ var _warn_warnDeprecations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./warn/warnDeprecations */ "uxh7");







/**
 * BaseComponent class, which provides basic helpers for all components.
 *
 * @public
 * {@docCategory BaseComponent}
 *
 * @deprecated Do not use. We are moving away from class component.
 */
var BaseComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "c"])(BaseComponent, _super);
    /**
     * BaseComponent constructor
     * @param props - The props for the component.
     * @param context - The context for the component.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function BaseComponent(props, context) {
        var _this = _super.call(this, props, context) || this;
        // eslint-disable-next-line deprecation/deprecation
        _makeAllSafe(_this, BaseComponent.prototype, [
            'componentDidMount',
            'shouldComponentUpdate',
            'getSnapshotBeforeUpdate',
            'render',
            'componentDidUpdate',
            'componentWillUnmount',
        ]);
        return _this;
    }
    /**
     * When the component receives props, make sure the componentRef is updated.
     */
    BaseComponent.prototype.componentDidUpdate = function (prevProps, prevState) {
        this._updateComponentRef(prevProps, this.props);
    };
    /**
     * When the component has mounted, update the componentRef.
     */
    BaseComponent.prototype.componentDidMount = function () {
        this._setComponentRef(this.props.componentRef, this);
    };
    /**
     * If we have disposables, dispose them automatically on unmount.
     */
    BaseComponent.prototype.componentWillUnmount = function () {
        this._setComponentRef(this.props.componentRef, null);
        if (this.__disposables) {
            for (var i = 0, len = this._disposables.length; i < len; i++) {
                var disposable = this.__disposables[i];
                if (disposable.dispose) {
                    disposable.dispose();
                }
            }
            this.__disposables = null;
        }
    };
    Object.defineProperty(BaseComponent.prototype, "className", {
        /**
         * Gets the object's class name.
         */
        get: function () {
            if (!this.__className) {
                var funcNameRegex = /function (.{1,})\(/;
                var results = funcNameRegex.exec(this.constructor.toString());
                this.__className = results && results.length > 1 ? results[1] : '';
            }
            return this.__className;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "_disposables", {
        /**
         * Allows subclasses to push things to this._disposables to be auto disposed.
         */
        get: function () {
            if (!this.__disposables) {
                this.__disposables = [];
            }
            return this.__disposables;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "_async", {
        /**
         * Gets the async instance associated with the component, created on demand. The async instance gives
         * subclasses a way to execute setTimeout/setInterval async calls safely, where the callbacks
         * will be cleared/ignored automatically after unmounting. The helpers within the async object also
         * preserve the this pointer so that you don't need to "bind" the callbacks.
         */
        get: function () {
            if (!this.__async) {
                this.__async = new _Async__WEBPACK_IMPORTED_MODULE_2__[/* Async */ "a"](this);
                this._disposables.push(this.__async);
            }
            return this.__async;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "_events", {
        /**
         * Gets the event group instance assocaited with the component, created on demand. The event instance
         * provides on/off methods for listening to DOM (or regular javascript object) events. The event callbacks
         * will be automatically disconnected after unmounting. The helpers within the events object also
         * preserve the this reference so that you don't need to "bind" the callbacks.
         */
        get: function () {
            if (!this.__events) {
                this.__events = new _EventGroup__WEBPACK_IMPORTED_MODULE_3__[/* EventGroup */ "a"](this);
                this._disposables.push(this.__events);
            }
            return this.__events;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Helper to return a memoized ref resolver function.
     * @param refName - Name of the member to assign the ref to.
     * @returns A function instance keyed from the given refname.
     * @deprecated Use `createRef` from React.createRef.
     */
    BaseComponent.prototype._resolveRef = function (refName) {
        var _this = this;
        if (!this.__resolves) {
            this.__resolves = {};
        }
        if (!this.__resolves[refName]) {
            this.__resolves[refName] = function (ref) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                return (_this[refName] = ref);
            };
        }
        return this.__resolves[refName];
    };
    /**
     * Updates the componentRef (by calling it with "this" when necessary.)
     */
    BaseComponent.prototype._updateComponentRef = function (currentProps, newProps) {
        if (newProps === void 0) { newProps = {}; }
        // currentProps *should* always be defined, but verify that just in case a subclass is manually
        // calling a lifecycle method with no parameters (which has happened) or other odd usage.
        if (currentProps && newProps && currentProps.componentRef !== newProps.componentRef) {
            this._setComponentRef(currentProps.componentRef, null);
            this._setComponentRef(newProps.componentRef, this);
        }
    };
    /**
     * Warns when a deprecated props are being used.
     *
     * @param deprecationMap - The map of deprecations, where key is the prop name and the value is
     * either null or a replacement prop name.
     */
    BaseComponent.prototype._warnDeprecations = function (deprecationMap) {
        Object(_warn_warnDeprecations__WEBPACK_IMPORTED_MODULE_6__[/* warnDeprecations */ "a"])(this.className, this.props, deprecationMap);
    };
    /**
     * Warns when props which are mutually exclusive with each other are both used.
     *
     * @param mutuallyExclusiveMap - The map of mutually exclusive props.
     */
    BaseComponent.prototype._warnMutuallyExclusive = function (mutuallyExclusiveMap) {
        Object(_warn_warnMutuallyExclusive__WEBPACK_IMPORTED_MODULE_5__[/* warnMutuallyExclusive */ "a"])(this.className, this.props, mutuallyExclusiveMap);
    };
    /**
     * Warns when props are required if a condition is met.
     *
     * @param requiredProps - The name of the props that are required when the condition is met.
     * @param conditionalPropName - The name of the prop that the condition is based on.
     * @param condition - Whether the condition is met.
     */
    BaseComponent.prototype._warnConditionallyRequiredProps = function (requiredProps, conditionalPropName, condition) {
        Object(_warn_warnConditionallyRequiredProps__WEBPACK_IMPORTED_MODULE_4__[/* warnConditionallyRequiredProps */ "a"])(this.className, this.props, requiredProps, conditionalPropName, condition);
    };
    BaseComponent.prototype._setComponentRef = function (ref, value) {
        if (!this._skipComponentRefResolution && ref) {
            if (typeof ref === 'function') {
                ref(value);
            }
            if (typeof ref === 'object') {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                ref.current = value;
            }
        }
    };
    return BaseComponent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

/**
 * Helper to override a given method with a wrapper method that can try/catch the original, but also
 * ensures that the BaseComponent's methods are called before the subclass's. This ensures that
 * componentWillUnmount in the base is called and that things in the _disposables array are disposed.
 */
// eslint-disable-next-line deprecation/deprecation
function _makeAllSafe(obj, prototype, methodNames) {
    for (var i = 0, len = methodNames.length; i < len; i++) {
        _makeSafe(obj, prototype, methodNames[i]);
    }
}
// eslint-disable-next-line deprecation/deprecation
function _makeSafe(obj, prototype, methodName) {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    var classMethod = obj[methodName];
    var prototypeMethod = prototype[methodName];
    if (classMethod || prototypeMethod) {
        obj[methodName] = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            /* eslint-enable @typescript-eslint/no-explicit-any */
            var retVal;
            if (prototypeMethod) {
                retVal = prototypeMethod.apply(this, args);
            }
            if (classMethod !== prototypeMethod) {
                retVal = classMethod.apply(this, args);
            }
            return retVal;
        };
    }
}
/**
 * Simple constant function for returning null, used to render empty templates in JSX.
 *
 * @public
 */
function nullRender() {
    return null;
}
//# sourceMappingURL=BaseComponent.js.map

/***/ }),

/***/ "3yIe":
/*!***********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/controlled.js ***!
  \***********************************************************************************************************************/
/*! exports provided: isControlled */
/*! exports used: isControlled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isControlled; });
/**
 * Determines whether a component is controlled.
 * @param props - Component props
 * @param valueProp - Prop containing the controlled value
 * @returns true if controlled, false if uncontrolled
 */
function isControlled(props, valueProp) {
    // React's built-in <input> considers a prop to be provided if its value is non-null/undefined.
    // Mirror that behavior here (rather than checking for just undefined).
    return props[valueProp] !== undefined && props[valueProp] !== null;
}
//# sourceMappingURL=controlled.js.map

/***/ }),

/***/ "41aL":
/*!****************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/dom/getDocument.js ***!
  \****************************************************************************************************************************/
/*! exports provided: getDocument */
/*! exports used: getDocument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDocument; });
/* harmony import */ var _canUseDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canUseDOM */ "cLtT");

/**
 * Helper to get the document object. Note that in popup window cases, document
 * might be the wrong document, which is why we look at ownerDocument for the
 * truth.
 *
 * @public
 */
function getDocument(rootElement) {
    // eslint-disable-next-line no-restricted-globals
    if (!Object(_canUseDOM__WEBPACK_IMPORTED_MODULE_0__[/* canUseDOM */ "a"])() || typeof document === 'undefined') {
        return undefined;
    }
    else {
        var el = rootElement;
        // eslint-disable-next-line no-restricted-globals
        return el && el.ownerDocument ? el.ownerDocument : document;
    }
}
//# sourceMappingURL=getDocument.js.map

/***/ }),

/***/ "4H/l":
/*!*******************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/scroll.js ***!
  \*******************************************************************************************************************/
/*! exports provided: DATA_IS_SCROLLABLE_ATTRIBUTE, allowScrollOnElement, allowOverscrollOnElement, disableBodyScroll, enableBodyScroll, getScrollbarWidth, findScrollableParent */
/*! exports used: allowOverscrollOnElement, allowScrollOnElement, disableBodyScroll, enableBodyScroll, findScrollableParent, getScrollbarWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DATA_IS_SCROLLABLE_ATTRIBUTE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return allowScrollOnElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return allowOverscrollOnElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return disableBodyScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return enableBodyScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getScrollbarWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return findScrollableParent; });
/* harmony import */ var _dom_getDocument__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/getDocument */ "41aL");
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/merge-styles */ "Q/ol");
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom/getWindow */ "NZSY");



var _scrollbarWidth;
var _bodyScrollDisabledCount = 0;
var DisabledScrollClassName = Object(_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_1__[/* mergeStyles */ "b"])({
    overflow: 'hidden !important',
});
/**
 * Placing this attribute on scrollable divs optimizes detection to know
 * if the div is scrollable or not (given we can avoid expensive operations
 * like getComputedStyle.)
 *
 * @public
 */
var DATA_IS_SCROLLABLE_ATTRIBUTE = 'data-is-scrollable';
/**
 * Allows the user to scroll within a element,
 * while preventing the user from scrolling the body
 */
var allowScrollOnElement = function (element, events) {
    var window = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_2__[/* getWindow */ "a"])(element);
    if (!element || !window) {
        return;
    }
    var _previousClientY = 0;
    var _element = null;
    var computedStyles = window.getComputedStyle(element);
    // remember the clientY for future calls of _preventOverscrolling
    var _saveClientY = function (event) {
        if (event.targetTouches.length === 1) {
            _previousClientY = event.targetTouches[0].clientY;
        }
    };
    // prevent the body from scrolling when the user attempts
    // to scroll past the top or bottom of the element
    var _preventOverscrolling = function (event) {
        // only respond to a single-finger touch
        if (event.targetTouches.length !== 1) {
            return;
        }
        // prevent the body touchmove handler from firing
        // so that scrolling is allowed within the element
        event.stopPropagation();
        if (!_element) {
            return;
        }
        var clientY = event.targetTouches[0].clientY - _previousClientY;
        var scrollableParent = findScrollableParent(event.target);
        if (scrollableParent && _element !== scrollableParent) {
            _element = scrollableParent;
            computedStyles = window.getComputedStyle(_element);
        }
        var scrollTop = _element.scrollTop;
        var isColumnReverse = (computedStyles === null || computedStyles === void 0 ? void 0 : computedStyles.flexDirection) === 'column-reverse';
        // if the element is scrolled to the top,
        // prevent the user from scrolling up
        if (scrollTop === 0 && (isColumnReverse ? clientY < 0 : clientY > 0)) {
            event.preventDefault();
        }
        // if the element is scrolled to the bottom,
        // prevent the user from scrolling down
        if (_element.scrollHeight - Math.abs(Math.ceil(scrollTop)) <= _element.clientHeight &&
            (isColumnReverse ? clientY > 0 : clientY < 0)) {
            event.preventDefault();
        }
    };
    events.on(element, 'touchstart', _saveClientY, { passive: false });
    events.on(element, 'touchmove', _preventOverscrolling, { passive: false });
    _element = element;
};
/**
 * Same as allowScrollOnElement but does not prevent overscrolling.
 */
var allowOverscrollOnElement = function (element, events) {
    if (!element) {
        return;
    }
    var _allowElementScroll = function (event) {
        event.stopPropagation();
    };
    events.on(element, 'touchmove', _allowElementScroll, { passive: false });
};
var _disableIosBodyScroll = function (event) {
    event.preventDefault();
};
/**
 * Disables the body scrolling.
 *
 * @public
 */
function disableBodyScroll() {
    var doc = Object(_dom_getDocument__WEBPACK_IMPORTED_MODULE_0__[/* getDocument */ "a"])();
    if (doc && doc.body && !_bodyScrollDisabledCount) {
        doc.body.classList.add(DisabledScrollClassName);
        doc.body.addEventListener('touchmove', _disableIosBodyScroll, { passive: false, capture: false });
    }
    _bodyScrollDisabledCount++;
}
/**
 * Enables the body scrolling.
 *
 * @public
 */
function enableBodyScroll() {
    if (_bodyScrollDisabledCount > 0) {
        var doc = Object(_dom_getDocument__WEBPACK_IMPORTED_MODULE_0__[/* getDocument */ "a"])();
        if (doc && doc.body && _bodyScrollDisabledCount === 1) {
            doc.body.classList.remove(DisabledScrollClassName);
            doc.body.removeEventListener('touchmove', _disableIosBodyScroll);
        }
        _bodyScrollDisabledCount--;
    }
}
/**
 * Calculates the width of a scrollbar for the browser/os.
 *
 * @public
 */
function getScrollbarWidth(doc) {
    if (_scrollbarWidth === undefined) {
        var theDoc = doc !== null && doc !== void 0 ? doc : Object(_dom_getDocument__WEBPACK_IMPORTED_MODULE_0__[/* getDocument */ "a"])();
        var scrollDiv = theDoc.createElement('div');
        scrollDiv.style.setProperty('width', '100px');
        scrollDiv.style.setProperty('height', '100px');
        scrollDiv.style.setProperty('overflow', 'scroll');
        scrollDiv.style.setProperty('position', 'absolute');
        scrollDiv.style.setProperty('top', '-9999px');
        theDoc.body.appendChild(scrollDiv);
        // Get the scrollbar width
        _scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        // Delete the DIV
        theDoc.body.removeChild(scrollDiv);
    }
    return _scrollbarWidth;
}
/**
 * Traverses up the DOM for the element with the data-is-scrollable=true attribute, or returns
 * document.body.
 *
 * @public
 */
function findScrollableParent(startingElement) {
    var el = startingElement;
    var doc = Object(_dom_getDocument__WEBPACK_IMPORTED_MODULE_0__[/* getDocument */ "a"])(startingElement);
    // First do a quick scan for the scrollable attribute.
    while (el && el !== doc.body) {
        if (el.getAttribute(DATA_IS_SCROLLABLE_ATTRIBUTE) === 'true') {
            return el;
        }
        el = el.parentElement;
    }
    // If we haven't found it, the use the slower method: compute styles to evaluate if overflow is set.
    el = startingElement;
    while (el && el !== doc.body) {
        if (el.getAttribute(DATA_IS_SCROLLABLE_ATTRIBUTE) !== 'false') {
            var computedStyles = getComputedStyle(el);
            var overflowY = computedStyles ? computedStyles.getPropertyValue('overflow-y') : '';
            if (overflowY && (overflowY === 'scroll' || overflowY === 'auto')) {
                return el;
            }
        }
        el = el.parentElement;
    }
    // Fall back to window scroll.
    if (!el || el === doc.body) {
        el = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_2__[/* getWindow */ "a"])(startingElement);
    }
    return el;
}
//# sourceMappingURL=scroll.js.map

/***/ }),

/***/ "5sqY":
/*!**************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/DelayedRender.js ***!
  \**************************************************************************************************************************/
/*! exports provided: DelayedRender */
/*! exports used: DelayedRender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DelayedRender; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom/getWindow */ "NZSY");



/**
 * Utility component for delaying the render of a child component after a given delay. This component
 * requires a single child component; don't pass in many components. Wrap multiple components in a DIV
 * if necessary.
 *
 * @public
 * {@docCategory DelayedRender}
 */
var DelayedRender = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "c"])(DelayedRender, _super);
    function DelayedRender(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isRendered: Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_2__[/* getWindow */ "a"])() === undefined,
        };
        return _this;
    }
    DelayedRender.prototype.componentDidMount = function () {
        var _this = this;
        var delay = this.props.delay;
        // eslint-disable-next-line no-restricted-globals
        this._timeoutId = window.setTimeout(function () {
            _this.setState({
                isRendered: true,
            });
        }, delay);
    };
    DelayedRender.prototype.componentWillUnmount = function () {
        if (this._timeoutId) {
            clearTimeout(this._timeoutId);
        }
    };
    DelayedRender.prototype.render = function () {
        return this.state.isRendered ? react__WEBPACK_IMPORTED_MODULE_1__["Children"].only(this.props.children) : null;
    };
    DelayedRender.defaultProps = {
        delay: 0,
    };
    return DelayedRender;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
//# sourceMappingURL=DelayedRender.js.map

/***/ }),

/***/ "5tSL":
/*!*************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/renderFunction/composeRenderFunction.js ***!
  \*************************************************************************************************************************************************/
/*! exports provided: composeRenderFunction */
/*! exports used: composeRenderFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return composeRenderFunction; });
/* harmony import */ var _memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../memoize */ "02QY");

function createComposedRenderFunction(outer) {
    var outerMemoizer = Object(_memoize__WEBPACK_IMPORTED_MODULE_0__[/* createMemoizer */ "a"])(function (inner) {
        var innerMemoizer = Object(_memoize__WEBPACK_IMPORTED_MODULE_0__[/* createMemoizer */ "a"])(function (defaultRender) {
            return function (innerProps) {
                return inner(innerProps, defaultRender);
            };
        });
        return function (outerProps, defaultRender) {
            return outer(outerProps, defaultRender ? innerMemoizer(defaultRender) : inner);
        };
    });
    return outerMemoizer;
}
var memoizer = Object(_memoize__WEBPACK_IMPORTED_MODULE_0__[/* createMemoizer */ "a"])(createComposedRenderFunction);
/**
 * Composes two 'render functions' to produce a final render function that renders
 * the outer function, passing the inner function as 'default render'. The inner function
 * is then passed the original 'default render' prop.
 * @public
 */
function composeRenderFunction(outer, inner) {
    return memoizer(outer)(inner);
}
//# sourceMappingURL=composeRenderFunction.js.map

/***/ }),

/***/ "6ztV":
/*!*********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/KeyCodes.js ***!
  \*********************************************************************************************************************/
/*! exports provided: KeyCodes */
/*! exports used: KeyCodes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyCodes; });
/**
 * Simulated enum for keycodes. These will get inlined by uglify when used much like an enum
 *
 * @public
 * {@docCategory KeyCodes}
 */
var KeyCodes = {
    backspace: 8,
    tab: 9,
    enter: 13,
    shift: 16,
    ctrl: 17,
    alt: 18,
    pauseBreak: 19,
    capslock: 20,
    escape: 27,
    space: 32,
    pageUp: 33,
    pageDown: 34,
    end: 35,
    home: 36,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    insert: 45,
    del: 46,
    zero: 48,
    one: 49,
    two: 50,
    three: 51,
    four: 52,
    five: 53,
    six: 54,
    seven: 55,
    eight: 56,
    nine: 57,
    colon: 58,
    a: 65,
    b: 66,
    c: 67,
    d: 68,
    e: 69,
    f: 70,
    g: 71,
    h: 72,
    i: 73,
    j: 74,
    k: 75,
    l: 76,
    m: 77,
    n: 78,
    o: 79,
    p: 80,
    q: 81,
    r: 82,
    s: 83,
    t: 84,
    u: 85,
    v: 86,
    w: 87,
    x: 88,
    y: 89,
    z: 90,
    leftWindow: 91,
    rightWindow: 92,
    select: 93,
    /* eslint-disable @typescript-eslint/naming-convention */
    zero_numpad: 96,
    one_numpad: 97,
    two_numpad: 98,
    three_numpad: 99,
    four_numpad: 100,
    five_numpad: 101,
    six_numpad: 102,
    seven_numpad: 103,
    eight_numpad: 104,
    nine_numpad: 105,
    /* eslint-enable @typescript-eslint/naming-convention */
    multiply: 106,
    add: 107,
    subtract: 109,
    decimalPoint: 110,
    divide: 111,
    f1: 112,
    f2: 113,
    f3: 114,
    f4: 115,
    f5: 116,
    f6: 117,
    f7: 118,
    f8: 119,
    f9: 120,
    f10: 121,
    f11: 122,
    f12: 123,
    numlock: 144,
    scrollLock: 145,
    semicolon: 186,
    equalSign: 187,
    comma: 188,
    dash: 189,
    period: 190,
    forwardSlash: 191,
    graveAccent: 192,
    openBracket: 219,
    backSlash: 220,
    closeBracket: 221,
    singleQuote: 222,
};
//# sourceMappingURL=KeyCodes.js.map

/***/ }),

/***/ "8jXb":
/*!***************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/sessionStorage.js ***!
  \***************************************************************************************************************************/
/*! exports provided: getItem, setItem */
/*! exports used: getItem, setItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setItem; });
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/getWindow */ "NZSY");

/**
 * Fetches an item from session storage without throwing an exception
 * @param key The key of the item to fetch from session storage
 */
function getItem(key) {
    var result = null;
    try {
        var win = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__[/* getWindow */ "a"])();
        result = win ? win.sessionStorage.getItem(key) : null;
    }
    catch (e) {
        /* Eat the exception */
    }
    return result;
}
/**
 * Inserts an item into session storage without throwing an exception
 * @param key The key of the item to add to session storage
 * @param data The data to put into session storage
 */
function setItem(key, data) {
    var _a;
    try {
        (_a = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__[/* getWindow */ "a"])()) === null || _a === void 0 ? void 0 : _a.sessionStorage.setItem(key, data);
    }
    catch (e) {
        /* Eat the exception */
    }
}
//# sourceMappingURL=sessionStorage.js.map

/***/ }),

/***/ "9F0M":
/*!***************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/appendFunction.js ***!
  \***************************************************************************************************************************/
/*! exports provided: appendFunction */
/*! exports used: appendFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appendFunction; });
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Returns a single function which will call each of the given functions in the context of the
 * parent.
 */
function appendFunction(parent) {
    var functions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        functions[_i - 1] = arguments[_i];
    }
    if (functions.length < 2) {
        return functions[0];
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        functions.forEach(function (f) { return f && f.apply(parent, args); });
    };
}
//# sourceMappingURL=appendFunction.js.map

/***/ }),

/***/ "9fwj":
/*!*************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/ie11Detector.js ***!
  \*************************************************************************************************************************/
/*! exports provided: isIE11 */
/*! exports used: isIE11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isIE11; });
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/getWindow */ "NZSY");

var isIE11 = function () {
    var _a;
    var win = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__[/* getWindow */ "a"])();
    if (!((_a = win === null || win === void 0 ? void 0 : win.navigator) === null || _a === void 0 ? void 0 : _a.userAgent)) {
        return false;
    }
    return win.navigator.userAgent.indexOf('rv:11.0') > -1;
};
//# sourceMappingURL=ie11Detector.js.map

/***/ }),

/***/ "9yo2":
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/useIsomorphicLayoutEffect.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: useIsomorphicLayoutEffect */
/*! exports used: useIsomorphicLayoutEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useIsomorphicLayoutEffect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dom_canUseDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/canUseDOM */ "cLtT");


/**
 * React currently throws a warning when using `useLayoutEffect` on the server. To get around it,
 * this hook calls `useEffect` on the server (no-op) and `useLayoutEffect` in the browser.
 *
 * Prefer `useEffect` unless you have a specific need to do something after mount and before paint,
 * such as to avoid a render flash for certain operations.
 *
 * Server-side rendering is detected based on `canUseDOM` from `@fluentui/utilities`.
 *
 * https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
 * https://github.com/reduxjs/react-redux/blob/master/src/utils/useIsomorphicLayoutEffect.js
 */
// eslint-disable-next-line no-restricted-properties
var useIsomorphicLayoutEffect = Object(_dom_canUseDOM__WEBPACK_IMPORTED_MODULE_1__[/* canUseDOM */ "a"])() ? react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"] : react__WEBPACK_IMPORTED_MODULE_0__["useEffect"];
//# sourceMappingURL=useIsomorphicLayoutEffect.js.map

/***/ }),

/***/ "9zv+":
/*!******************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/getId.js ***!
  \******************************************************************************************************************/
/*! exports provided: getId, resetIds */
/*! exports used: getId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getId; });
/* unused harmony export resetIds */
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/getWindow */ "NZSY");
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/merge-styles */ "lSY2");


// Initialize global window id.
var CURRENT_ID_PROPERTY = '__currentId__';
var DEFAULT_ID_STRING = 'id__';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var _global = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__[/* getWindow */ "a"])() || {};
if (_global[CURRENT_ID_PROPERTY] === undefined) {
    _global[CURRENT_ID_PROPERTY] = 0;
}
var _initializedStylesheetResets = false;
/**
 * Generates a unique id in the global scope (this spans across duplicate copies of the same library.)
 *
 * @public
 */
function getId(prefix) {
    if (!_initializedStylesheetResets) {
        // Configure ids to reset on stylesheet resets.
        var stylesheet = _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_1__[/* Stylesheet */ "c"].getInstance();
        if (stylesheet && stylesheet.onReset) {
            stylesheet.onReset(resetIds);
        }
        _initializedStylesheetResets = true;
    }
    var index = _global[CURRENT_ID_PROPERTY]++;
    return (prefix === undefined ? DEFAULT_ID_STRING : prefix) + index;
}
/**
 * Resets id counter to an (optional) number.
 *
 * @public
 */
function resetIds(counter) {
    if (counter === void 0) { counter = 0; }
    _global[CURRENT_ID_PROPERTY] = counter;
}
//# sourceMappingURL=getId.js.map

/***/ }),

/***/ "A49k":
/*!*******************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/FocusRectsProvider.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: FocusRectsProvider */
/*! exports used: FocusRectsProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FocusRectsProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useFocusRects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useFocusRects */ "obGf");


var FocusRectsProvider = function (props) {
    var providerRef = props.providerRef, layerRoot = props.layerRoot;
    var registeredProviders = react__WEBPACK_IMPORTED_MODULE_0__["useState"]([])[0];
    var parentContext = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_useFocusRects__WEBPACK_IMPORTED_MODULE_1__[/* FocusRectsContext */ "b"]);
    // Inherit the parent context if it exists, unless this is a layer root.
    // This allows the topmost provider element in the DOM tree to handle the focus events.
    // Since layers are in a separate HTML tree from their parent, they shouldn't use the parent's providerRef.
    var inheritParentContext = parentContext !== undefined && !layerRoot;
    var context = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](function () {
        return inheritParentContext
            ? undefined
            : {
                providerRef: providerRef,
                registeredProviders: registeredProviders,
                registerProvider: function (ref) {
                    // Register this child provider with the current context, and any parent contexts
                    registeredProviders.push(ref);
                    parentContext === null || parentContext === void 0 ? void 0 : parentContext.registerProvider(ref);
                },
                unregisterProvider: function (ref) {
                    parentContext === null || parentContext === void 0 ? void 0 : parentContext.unregisterProvider(ref);
                    var i = registeredProviders.indexOf(ref);
                    if (i >= 0) {
                        registeredProviders.splice(i, 1);
                    }
                },
            };
    }, [providerRef, registeredProviders, parentContext, inheritParentContext]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        if (context) {
            context.registerProvider(context.providerRef);
            return function () { return context.unregisterProvider(context.providerRef); };
        }
    }, [context]);
    // Create a new context provider if this is not inheriting from the parent.
    if (context) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_useFocusRects__WEBPACK_IMPORTED_MODULE_1__[/* FocusRectsContext */ "b"].Provider, { value: context }, props.children);
    }
    else {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, props.children);
    }
};
//# sourceMappingURL=FocusRectsProvider.js.map

/***/ }),

/***/ "BLix":
/*!*********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/getPropsWithDefaults.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: getPropsWithDefaults */
/*! exports used: getPropsWithDefaults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getPropsWithDefaults; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");

/**
 * Function to apply default values to a component props object. This function is intended for function components,
 * to maintain parity with the `defaultProps` feature of class components. It accounts for properties that are
 * specified, but undefined.
 * @param defaultProps- An object with default values for various properties
 * @param propsWithoutDefaults- The props object passed into the component
 */
function getPropsWithDefaults(defaultProps, propsWithoutDefaults) {
    var props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, propsWithoutDefaults);
    for (var _i = 0, _a = Object.keys(defaultProps); _i < _a.length; _i++) {
        var key = _a[_i];
        if (props[key] === undefined) {
            props[key] = defaultProps[key];
        }
    }
    return props;
}
//# sourceMappingURL=getPropsWithDefaults.js.map

/***/ }),

/***/ "CDZR":
/*!**********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/warn/warn.js ***!
  \**********************************************************************************************************************/
/*! exports provided: warn, setWarningCallback */
/*! exports used: warn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return warn; });
/* unused harmony export setWarningCallback */
/* eslint-disable no-console */
var _warningCallback = undefined;
/**
 * Sends a warning to console, if the api is present.
 *
 * @public
 * @param message - Warning message.
 */
function warn(message) {
    if (_warningCallback && "development" !== 'production') {
        _warningCallback(message);
    }
    else if (console && console.warn) {
        console.warn(message);
    }
}
/**
 * Configures the warning callback. Passing in undefined will reset it to use the default
 * console.warn function.
 *
 * @public
 * @param warningCallback - Callback to override the generated warnings.
 */
function setWarningCallback(warningCallback) {
    _warningCallback = warningCallback;
}
//# sourceMappingURL=warn.js.map

/***/ }),

/***/ "CdGp":
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/safeRequestAnimationFrame.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: safeRequestAnimationFrame */
/*! exports used: safeRequestAnimationFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return safeRequestAnimationFrame; });
/* harmony import */ var _extendComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extendComponent */ "+3Q3");

/**
 * Generates a function to be attached to a React component, which can be called
 * as a replacement to RAF. In-flight async calls will be auto canceled if the component
 * is unmounting before the async code is executed, preventing bugs where code
 * accesses things within the component after being unmounted.
 */
var safeRequestAnimationFrame = function (component) {
    var activeTimeouts;
    return function (cb) {
        if (!activeTimeouts) {
            activeTimeouts = new Set();
            Object(_extendComponent__WEBPACK_IMPORTED_MODULE_0__[/* extendComponent */ "a"])(component, {
                componentWillUnmount: function () {
                    activeTimeouts.forEach(function (id) { return cancelAnimationFrame(id); });
                },
            });
        }
        var timeoutId = requestAnimationFrame(function () {
            activeTimeouts.delete(timeoutId);
            cb();
        });
        activeTimeouts.add(timeoutId);
    };
};
//# sourceMappingURL=safeRequestAnimationFrame.js.map

/***/ }),

/***/ "DAso":
/*!******************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/merge.js ***!
  \******************************************************************************************************************/
/*! exports provided: merge */
/*! exports used: merge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return merge; });
/**
 * Simple deep merge function. Takes all arguments and returns a deep copy of the objects merged
 * together in the order provided. If an object creates a circular reference, it will assign the
 * original reference.
 */
function merge(target) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        _merge(target || {}, arg);
    }
    return target;
}
/**
 * The _merge helper iterates through all props on source and assigns them to target.
 * When the value is an object, we will create a deep clone of the object. However if
 * there is a circular reference, the value will not be deep cloned and will persist
 * the reference.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _merge(target, source, circularReferences) {
    if (circularReferences === void 0) { circularReferences = []; }
    circularReferences.push(source);
    for (var name_1 in source) {
        if (source.hasOwnProperty(name_1)) {
            if (name_1 !== '__proto__' && name_1 !== 'constructor' && name_1 !== 'prototype') {
                var value = source[name_1];
                if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
                    var isCircularReference = circularReferences.indexOf(value) > -1;
                    target[name_1] = (isCircularReference ? value : _merge(target[name_1] || {}, value, circularReferences));
                }
                else {
                    target[name_1] = value;
                }
            }
        }
    }
    circularReferences.pop();
    return target;
}
//# sourceMappingURL=merge.js.map

/***/ }),

/***/ "Eh56":
/*!*******************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/classNamesFunction.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: classNamesFunction */
/*! exports used: classNamesFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return classNamesFunction; });
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/merge-styles */ "lSY2");
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/merge-styles */ "LyZa");
/* harmony import */ var _rtl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rtl */ "Ge+E");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom */ "NZSY");



var MAX_CACHE_COUNT = 50;
var DEFAULT_SPECIFICITY_MULTIPLIER = 5;
var _memoizedClassNames = 0;
var stylesheet = _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_0__[/* Stylesheet */ "c"].getInstance();
if (stylesheet && stylesheet.onReset) {
    stylesheet.onReset(function () { return _memoizedClassNames++; });
}
// Note that because of the caching nature within the classNames memoization,
// I've disabled this rule to simply be able to work with any types.
/* eslint-disable @typescript-eslint/no-explicit-any */
// This represents a prop we attach to each Map to indicate the cached return value
// associated with the graph node.
var retVal = '__retval__';
/**
 * Creates a getClassNames function which calls getStyles given the props, and injects them
 * into mergeStyleSets.
 *
 * Note that the props you pass in on every render should be in the same order and
 * immutable (numbers, strings, and booleans). This will allow the results to be memoized. Violating
 * these will cause extra recalcs to occur.
 */
function classNamesFunction(options) {
    // We build a trie where each node is a Map. The map entry key represents an argument
    // value, and the entry value is another node (Map). Each node has a `__retval__`
    // property which is used to hold the cached response.
    if (options === void 0) { options = {}; }
    // To derive the response, we can simply ensure the arguments are added or already
    // exist in the trie. At the last node, if there is a `__retval__` we return that. Otherwise
    // we call the `getStyles` api to evaluate, cache on the property, and return that.
    // let map: IRecursiveMemoNode = new Map();
    var windowMap = new Map();
    var styleCalcCount = 0;
    var getClassNamesCount = 0;
    var currentMemoizedClassNames = _memoizedClassNames;
    var getClassNames = function (styleFunctionOrObject, styleProps) {
        var _a;
        if (styleProps === void 0) { styleProps = {}; }
        // If useStaticStyles is true, styleFunctionOrObject returns slot to classname mappings.
        // If there is also no style overrides, we can skip merge styles completely and
        // simply return the result from the style funcion.
        if (options.useStaticStyles &&
            typeof styleFunctionOrObject === 'function' &&
            styleFunctionOrObject.__noStyleOverride__) {
            return styleFunctionOrObject(styleProps);
        }
        getClassNamesCount++;
        var shadowConfig = styleFunctionOrObject
            ? styleFunctionOrObject.__shadowConfig__
            : undefined;
        var key = shadowConfig && shadowConfig.window ? shadowConfig.window : '__default__';
        if (!windowMap.has(key)) {
            windowMap.set(key, new Map());
        }
        var current = windowMap.get(key);
        // let current: Map<any, any> = map;
        var theme = styleProps.theme;
        var rtl = theme && theme.rtl !== undefined ? theme.rtl : Object(_rtl__WEBPACK_IMPORTED_MODULE_2__[/* getRTL */ "a"])();
        var disableCaching = options.disableCaching;
        // On reset of our stylesheet, reset memoized cache.
        if (currentMemoizedClassNames !== _memoizedClassNames) {
            currentMemoizedClassNames = _memoizedClassNames;
            // map = new Map();
            windowMap.set(key, new Map());
            current = windowMap.get(key);
            styleCalcCount = 0;
        }
        if (!options.disableCaching) {
            current = _traverseMap(windowMap.get(key), styleFunctionOrObject);
            current = _traverseMap(current, styleProps);
        }
        if (disableCaching || !current[retVal]) {
            if (styleFunctionOrObject === undefined) {
                current[retVal] = {};
            }
            else {
                current[retVal] = Object(_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_1__[/* mergeCssSets */ "a"])([
                    (typeof styleFunctionOrObject === 'function'
                        ? styleFunctionOrObject(styleProps)
                        : styleFunctionOrObject),
                ], {
                    shadowConfig: styleFunctionOrObject.__shadowConfig__,
                    rtl: !!rtl,
                    specificityMultiplier: options.useStaticStyles ? DEFAULT_SPECIFICITY_MULTIPLIER : undefined,
                });
            }
            if (!disableCaching) {
                styleCalcCount++;
            }
        }
        if (styleCalcCount > (options.cacheSize || MAX_CACHE_COUNT)) {
            var win = Object(_dom__WEBPACK_IMPORTED_MODULE_3__[/* getWindow */ "a"])();
            if ((_a = win === null || win === void 0 ? void 0 : win.FabricConfig) === null || _a === void 0 ? void 0 : _a.enableClassNameCacheFullWarning) {
                // eslint-disable-next-line no-console
                console.warn("Styles are being recalculated too frequently. Cache miss rate is ".concat(styleCalcCount, "/").concat(getClassNamesCount, "."));
                // eslint-disable-next-line no-console
                console.trace();
            }
            windowMap.get(key).clear();
            styleCalcCount = 0;
            // Mutate the options passed in, that's all we can do.
            options.disableCaching = true;
        }
        // Note: the retVal is an attached property on the Map; not a key in the Map. We use this attached property to
        // cache the return value for this branch of the graph.
        return current[retVal];
    };
    return getClassNames;
}
function _traverseEdge(current, value) {
    value = _normalizeValue(value);
    if (!current.has(value)) {
        current.set(value, new Map());
    }
    return current.get(value);
}
function _traverseMap(current, inputs) {
    if (typeof inputs === 'function') {
        var cachedInputsFromStyled = inputs.__cachedInputs__;
        if (cachedInputsFromStyled) {
            // The styled helper will generate the styles function and will attach the cached
            // inputs (consisting of the default styles, customzied styles, and user provided styles.)
            // These should be used as cache keys for deriving the memoized value.
            for (var _i = 0, _a = inputs.__cachedInputs__; _i < _a.length; _i++) {
                var input = _a[_i];
                current = _traverseEdge(current, input);
            }
        }
        else {
            current = _traverseEdge(current, inputs);
        }
    }
    else if (typeof inputs === 'object') {
        for (var propName in inputs) {
            if (inputs.hasOwnProperty(propName)) {
                current = _traverseEdge(current, inputs[propName]);
            }
        }
    }
    return current;
}
function _normalizeValue(value) {
    switch (value) {
        case undefined:
            return '__undefined__';
        case null:
            return '__null__';
        default:
            return value;
    }
}
//# sourceMappingURL=classNamesFunction.js.map

/***/ }),

/***/ "FKem":
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/customizations/Customizer.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: Customizer */
/*! exports used: Customizer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Customizer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Customizations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Customizations */ "HliU");
/* harmony import */ var _CustomizerContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CustomizerContext */ "pQvb");
/* harmony import */ var _mergeCustomizations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mergeCustomizations */ "S8Un");





/**
 * The Customizer component allows for default props to be mixed into components which
 * are decorated with the customizable() decorator, or use the styled HOC. This enables
 * injection scenarios like:
 *
 * 1. render svg icons instead of the icon font within all buttons
 * 2. inject a custom theme object into a component
 *
 * Props are provided via the settings prop which should be one of the following:
 * - A json map which contains 1 or more name/value pairs representing injectable props.
 * - A function that receives the current settings and returns the new ones that apply to the scope
 *
 * @public
 *
 * @deprecated This component is deprecated for purpose of applying theme to components
 * as of `@fluentui/react` version 8. Use `ThemeProvider` for applying theme instead.
 */
var Customizer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "c"])(Customizer, _super);
    function Customizer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._onCustomizationChange = function () { return _this.forceUpdate(); };
        return _this;
    }
    Customizer.prototype.componentDidMount = function () {
        _Customizations__WEBPACK_IMPORTED_MODULE_2__[/* Customizations */ "a"].observe(this._onCustomizationChange);
    };
    Customizer.prototype.componentWillUnmount = function () {
        _Customizations__WEBPACK_IMPORTED_MODULE_2__[/* Customizations */ "a"].unobserve(this._onCustomizationChange);
    };
    Customizer.prototype.render = function () {
        var _this = this;
        var contextTransform = this.props.contextTransform;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_CustomizerContext__WEBPACK_IMPORTED_MODULE_3__[/* CustomizerContext */ "a"].Consumer, null, function (parentContext) {
            var newContext = Object(_mergeCustomizations__WEBPACK_IMPORTED_MODULE_4__[/* mergeCustomizations */ "a"])(_this.props, parentContext);
            if (contextTransform) {
                newContext = contextTransform(newContext);
            }
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_CustomizerContext__WEBPACK_IMPORTED_MODULE_3__[/* CustomizerContext */ "a"].Provider, { value: newContext }, _this.props.children);
        }));
    };
    return Customizer;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=Customizer.js.map

/***/ }),

/***/ "FTLG":
/*!*******************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/object.js ***!
  \*******************************************************************************************************************/
/*! exports provided: shallowCompare, assign, filteredAssign, mapEnumByName, values, omit */
/*! exports used: assign, omit, shallowCompare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return shallowCompare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return assign; });
/* unused harmony export filteredAssign */
/* unused harmony export mapEnumByName */
/* unused harmony export values */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return omit; });
/**
 * Compares a to b and b to a.
 *
 * @public
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function shallowCompare(a, b) {
    if (!a || !b) {
        // only return true if both a and b are falsy
        return !a && !b;
    }
    for (var propName in a) {
        if (a.hasOwnProperty(propName)) {
            if (!b.hasOwnProperty(propName) || b[propName] !== a[propName]) {
                return false;
            }
        }
    }
    for (var propName in b) {
        if (b.hasOwnProperty(propName)) {
            if (!a.hasOwnProperty(propName)) {
                return false;
            }
        }
    }
    return true;
}
/**
 * Makes a resulting merge of a bunch of objects. Pass in the target object followed by 1 or more
 * objects as arguments and they will be merged sequentially into the target. Note that this will
 * shallow merge; it will not create new cloned values for target members.
 *
 * @public
 * @param target - Target object to merge following object arguments into.
 * @param args - One or more objects that will be mixed into the target in the order they are provided.
 * @returns Resulting merged target.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function assign(target) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return filteredAssign.apply(this, [null, target].concat(args));
}
/**
 * Makes a resulting merge of a bunch of objects, but allows a filter function to be passed in to filter
 * the resulting merges. This allows for scenarios where you want to merge "everything except that one thing"
 * or "properties that start with data-". Note that this will shallow merge; it will not create new cloned
 * values for target members.
 *
 * @public
 * @param isAllowed - Callback to determine if the given propName is allowed in the result.
 * @param target - Target object to merge following object arguments into.
 * @param args - One or more objects that will be mixed into the target in the order they are provided.
 * @returns Resulting merged target.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function filteredAssign(isAllowed, target) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    target = target || {};
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var sourceObject = args_1[_a];
        if (sourceObject) {
            for (var propName in sourceObject) {
                if (sourceObject.hasOwnProperty(propName) && (!isAllowed || isAllowed(propName))) {
                    target[propName] = sourceObject[propName];
                }
            }
        }
    }
    return target;
}
/**
 * Takes an enum and iterates over each value of the enum (as a string), running the callback on each,
 * returning a mapped array.
 * @param theEnum - Enum to iterate over
 * @param callback - The first parameter the name of the entry, and the second parameter is the value
 * of that entry, which is the value you'd normally use when using the enum (usually a number).
 */
function mapEnumByName(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
theEnum, callback) {
    // map<any> to satisfy compiler since it doesn't realize we strip out undefineds in the .filter() call
    return Object.keys(theEnum)
        .map(function (p) {
        // map on each property name as a string
        if (String(Number(p)) !== p) {
            // if the property is not just a number (because enums in TypeScript will map both ways)
            return callback(p, theEnum[p]);
        }
        return undefined;
    })
        .filter(function (v) { return !!v; }); // only return elements with values
}
/**
 * Get all values in an object dictionary
 *
 * @param obj - The dictionary to get values for
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function values(obj) {
    return Object.keys(obj).reduce(function (arr, key) {
        arr.push(obj[key]);
        return arr;
    }, []);
}
/**
 * Tiny helper to do the minimal amount of work in duplicating an object but omitting some
 * props. This ends up faster than using object ...rest or reduce to filter.
 *
 * This behaves very much like filteredAssign, but does not merge many objects together,
 * uses an exclusion object map, and avoids spreads all for optimal performance.
 *
 * See perf test for background:
 * https://jsperf.com/omit-vs-rest-vs-reduce/1
 *
 * @param obj - The object to clone
 * @param exclusions - The array of keys to exclude
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function omit(obj, exclusions) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var result = {};
    for (var key in obj) {
        if (exclusions.indexOf(key) === -1 && obj.hasOwnProperty(key)) {
            result[key] = obj[key];
        }
    }
    return result;
}
//# sourceMappingURL=object.js.map

/***/ }),

/***/ "FTRa":
/*!****************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/createMergedRef.js ***!
  \****************************************************************************************************************************/
/*! exports provided: createMergedRef */
/*! exports used: createMergedRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createMergedRef; });
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array */ "S+0K");

/**
 * Set up a ref resolver function given internal state managed for the ref.
 * @param local Set
 */
var createResolver = function (local) {
    return function (newValue) {
        for (var _i = 0, _a = local.refs; _i < _a.length; _i++) {
            var ref = _a[_i];
            if (typeof ref === 'function') {
                ref(newValue);
            }
            else if (ref) {
                // work around the immutability of the React.Ref type
                ref.current = newValue;
            }
        }
    };
};
/**
 * Helper to merge refs from within class components.
 */
var createMergedRef = function (value) {
    var local = {
        refs: [],
    };
    return function () {
        var newRefs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newRefs[_i] = arguments[_i];
        }
        if (!local.resolver || !Object(_array__WEBPACK_IMPORTED_MODULE_0__[/* arraysEqual */ "b"])(local.refs, newRefs)) {
            local.resolver = createResolver(local);
        }
        local.refs = newRefs;
        return local.resolver;
    };
};
//# sourceMappingURL=createMergedRef.js.map

/***/ }),

/***/ "GAaB":
/*!****************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/customizations/customizable.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: customizable */
/*! exports used: customizable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return customizable; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Customizations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Customizations */ "HliU");
/* harmony import */ var _hoistStatics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hoistStatics */ "uj5P");
/* harmony import */ var _CustomizerContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CustomizerContext */ "pQvb");
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/merge-styles */ "HhsF");
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/merge-styles */ "Dz3X");
/* harmony import */ var _shadowDom_contexts_MergeStylesShadowRootConsumer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shadowDom/contexts/MergeStylesShadowRootConsumer */ "YJM4");
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dom/getWindow */ "NZSY");
/* harmony import */ var _fluentui_react_window_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fluentui/react-window-provider */ "7R02");
/* harmony import */ var _memoize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../memoize */ "02QY");










var memoizedMakeShadowConfig = Object(_memoize__WEBPACK_IMPORTED_MODULE_10__[/* memoizeFunction */ "b"])(_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_5__[/* makeShadowConfig */ "e"]);
var mergeComponentStyles = Object(_memoize__WEBPACK_IMPORTED_MODULE_10__[/* memoizeFunction */ "b"])(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function (defaultStyles, componentStyles, shadowConfig) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, defaultStyles), componentStyles), { __shadowConfig__: shadowConfig });
});
function customizable(scope, fields, concatStyles) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return function customizableFactory(ComposedComponent) {
        var _a;
        var resultClass = (_a = /** @class */ (function (_super) {
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "c"])(ComponentWithInjectedProps, _super);
                function ComponentWithInjectedProps(props) {
                    var _this = _super.call(this, props) || this;
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    _this._styleCache = {};
                    _this._onSettingChanged = _this._onSettingChanged.bind(_this);
                    return _this;
                }
                ComponentWithInjectedProps.prototype.componentDidMount = function () {
                    _Customizations__WEBPACK_IMPORTED_MODULE_2__[/* Customizations */ "a"].observe(this._onSettingChanged);
                };
                ComponentWithInjectedProps.prototype.componentWillUnmount = function () {
                    _Customizations__WEBPACK_IMPORTED_MODULE_2__[/* Customizations */ "a"].unobserve(this._onSettingChanged);
                };
                ComponentWithInjectedProps.prototype.render = function () {
                    var _this = this;
                    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_shadowDom_contexts_MergeStylesShadowRootConsumer__WEBPACK_IMPORTED_MODULE_7__[/* MergeStylesShadowRootConsumer */ "a"], { stylesheetKey: scope }, function (inShadow) {
                        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_CustomizerContext__WEBPACK_IMPORTED_MODULE_4__[/* CustomizerContext */ "a"].Consumer, null, function (context) {
                            var _a;
                            var defaultProps = _Customizations__WEBPACK_IMPORTED_MODULE_2__[/* Customizations */ "a"].getSettings(fields, scope, context.customizations);
                            var win = (_a = _this.context.window) !== null && _a !== void 0 ? _a : Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_8__[/* getWindow */ "a"])();
                            var shadowConfig = memoizedMakeShadowConfig(scope, inShadow, win);
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            var componentProps = _this.props;
                            // If defaultProps.styles is a function, evaluate it before calling concatStyleSets
                            if (defaultProps.styles && typeof defaultProps.styles === 'function') {
                                defaultProps.styles = defaultProps.styles(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, defaultProps), componentProps));
                            }
                            // If concatStyles is true and custom styles have been defined compute those styles
                            if (concatStyles && defaultProps.styles) {
                                if (_this._styleCache.default !== defaultProps.styles ||
                                    _this._styleCache.component !== componentProps.styles) {
                                    var mergedStyles = Object(_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_6__[/* concatStyleSets */ "a"])(defaultProps.styles, componentProps.styles);
                                    mergedStyles.__shadowConfig__ = shadowConfig;
                                    _this._styleCache.default = defaultProps.styles;
                                    _this._styleCache.component = componentProps.styles;
                                    _this._styleCache.merged = mergedStyles;
                                }
                                return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ComposedComponent, Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, defaultProps, componentProps, { styles: _this._styleCache.merged })));
                            }
                            var styles = mergeComponentStyles(defaultProps.styles, componentProps.styles, shadowConfig);
                            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ComposedComponent, Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, defaultProps, componentProps, { styles: styles }));
                        }));
                    }));
                };
                ComponentWithInjectedProps.prototype._onSettingChanged = function () {
                    this.forceUpdate();
                };
                return ComponentWithInjectedProps;
            }(react__WEBPACK_IMPORTED_MODULE_1__["Component"])),
            _a.displayName = 'Customized' + scope,
            _a.contextType = _fluentui_react_window_provider__WEBPACK_IMPORTED_MODULE_9__[/* WindowContext */ "a"],
            _a);
        return Object(_hoistStatics__WEBPACK_IMPORTED_MODULE_3__[/* hoistStatics */ "a"])(ComposedComponent, resultClass);
    };
}
//# sourceMappingURL=customizable.js.map

/***/ }),

/***/ "GBES":
/*!***********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/EventGroup.js ***!
  \***********************************************************************************************************************/
/*! exports provided: EventGroup */
/*! exports used: EventGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventGroup; });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "41aL");
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./object */ "FTLG");


/** An instance of EventGroup allows anything with a handle to it to trigger events on it.
 *  If the target is an HTMLElement, the event will be attached to the element and can be
 *  triggered as usual (like clicking for onClick).
 *  The event can be triggered by calling EventGroup.raise() here. If the target is an
 *  HTMLElement, the event gets raised and is handled by the browser. Otherwise, it gets
 *  handled here in EventGroup, and the handler is called in the context of the parent
 *  (which is passed in in the constructor).
 *
 * @public
 * {@docCategory EventGroup}
 */
var EventGroup = /** @class */ (function () {
    /** parent: the context in which events attached to non-HTMLElements are called */
    function EventGroup(parent) {
        this._id = EventGroup._uniqueId++;
        this._parent = parent;
        this._eventRecords = [];
    }
    /** For IE8, bubbleEvent is ignored here and must be dealt with by the handler.
     *  Events raised here by default have bubbling set to false and cancelable set to true.
     *  This applies also to built-in events being raised manually here on HTMLElements,
     *  which may lead to unexpected behavior if it differs from the defaults.
     *
     */
    EventGroup.raise = function (target, eventName, eventArgs, bubbleEvent, doc) {
        var retVal;
        var theDoc = doc !== null && doc !== void 0 ? doc : Object(_dom__WEBPACK_IMPORTED_MODULE_0__[/* getDocument */ "a"])();
        if (EventGroup._isElement(target)) {
            if (typeof theDoc !== 'undefined' && theDoc.createEvent) {
                var ev = theDoc.createEvent('HTMLEvents');
                // eslint-disable-next-line deprecation/deprecation
                ev.initEvent(eventName, bubbleEvent || false, true);
                Object(_object__WEBPACK_IMPORTED_MODULE_1__[/* assign */ "a"])(ev, eventArgs);
                retVal = target.dispatchEvent(ev);
            }
            else if (typeof theDoc !== 'undefined' && theDoc.createEventObject) {
                // IE8
                var evObj = theDoc.createEventObject(eventArgs);
                // cannot set cancelBubble on evObj, fireEvent will overwrite it
                target.fireEvent('on' + eventName, evObj);
            }
        }
        else {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore  -- FIXME: strictBindCallApply error - https://github.com/microsoft/fluentui/issues/17331
            while (target && retVal !== false) {
                var events = target.__events__;
                var eventRecords = events ? events[eventName] : null;
                if (eventRecords) {
                    for (var id in eventRecords) {
                        if (eventRecords.hasOwnProperty(id)) {
                            var eventRecordList = eventRecords[id];
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-ignore  -- FIXME: strictBindCallApply error - https://github.com/microsoft/fluentui/issues/17331
                            for (var listIndex = 0; retVal !== false && listIndex < eventRecordList.length; listIndex++) {
                                var record = eventRecordList[listIndex];
                                if (record.objectCallback) {
                                    retVal = record.objectCallback.call(record.parent, eventArgs);
                                }
                            }
                        }
                    }
                }
                // If the target has a parent, bubble the event up.
                target = bubbleEvent ? target.parent : null;
            }
        }
        return retVal;
    };
    EventGroup.isObserved = function (target, eventName) {
        var events = target && target.__events__;
        return !!events && !!events[eventName];
    };
    /** Check to see if the target has declared support of the given event. */
    EventGroup.isDeclared = function (target, eventName) {
        var declaredEvents = target && target.__declaredEvents;
        return !!declaredEvents && !!declaredEvents[eventName];
    };
    EventGroup.stopPropagation = function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        }
        else {
            // IE8
            event.cancelBubble = true;
        }
    };
    EventGroup._isElement = function (target) {
        return (!!target && (!!target.addEventListener || (typeof HTMLElement !== 'undefined' && target instanceof HTMLElement)));
    };
    EventGroup.prototype.dispose = function () {
        if (!this._isDisposed) {
            this._isDisposed = true;
            this.off();
            this._parent = null;
        }
    };
    /** On the target, attach a set of events, where the events object is a name to function mapping. */
    EventGroup.prototype.onAll = function (target, events, useCapture) {
        for (var eventName in events) {
            if (events.hasOwnProperty(eventName)) {
                this.on(target, eventName, events[eventName], useCapture);
            }
        }
    };
    /**
     * On the target, attach an event whose handler will be called in the context of the parent
     * of this instance of EventGroup.
     */
    EventGroup.prototype.on = function (target, eventName, callback, options) {
        var _this = this;
        if (eventName.indexOf(',') > -1) {
            var events = eventName.split(/[ ,]+/);
            for (var i = 0; i < events.length; i++) {
                this.on(target, events[i], callback, options);
            }
        }
        else {
            var parent_1 = this._parent;
            var eventRecord = {
                target: target,
                eventName: eventName,
                parent: parent_1,
                callback: callback,
                options: options,
            };
            // Initialize and wire up the record on the target, so that it can call the callback if the event fires.
            var events = (target.__events__ = target.__events__ || {});
            events[eventName] =
                events[eventName] ||
                    {
                        count: 0,
                    };
            events[eventName][this._id] = events[eventName][this._id] || [];
            events[eventName][this._id].push(eventRecord);
            events[eventName].count++;
            if (EventGroup._isElement(target)) {
                var processElementEvent = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    if (_this._isDisposed) {
                        return;
                    }
                    var result;
                    try {
                        result = callback.apply(parent_1, args);
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore  -- FIXME: strictBindCallApply error - https://github.com/microsoft/fluentui/issues/17331
                        if (result === false && args[0]) {
                            var e = args[0];
                            if (e.preventDefault) {
                                e.preventDefault();
                            }
                            if (e.stopPropagation) {
                                e.stopPropagation();
                            }
                            e.cancelBubble = true;
                        }
                    }
                    catch (e) {
                        // ignore
                    }
                    return result;
                };
                eventRecord.elementCallback = processElementEvent;
                if (target.addEventListener) {
                    target.addEventListener(eventName, processElementEvent, options);
                }
                else if (target.attachEvent) {
                    // IE8
                    target.attachEvent('on' + eventName, processElementEvent);
                }
            }
            else {
                var processObjectEvent = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    if (_this._isDisposed) {
                        return;
                    }
                    return callback.apply(parent_1, args);
                };
                eventRecord.objectCallback = processObjectEvent;
            }
            // Remember the record locally, so that it can be removed.
            this._eventRecords.push(eventRecord);
        }
    };
    EventGroup.prototype.off = function (target, eventName, callback, options) {
        for (var i = 0; i < this._eventRecords.length; i++) {
            var eventRecord = this._eventRecords[i];
            if ((!target || target === eventRecord.target) &&
                (!eventName || eventName === eventRecord.eventName) &&
                (!callback || callback === eventRecord.callback) &&
                (typeof options !== 'boolean' || options === eventRecord.options)) {
                var events = eventRecord.target.__events__;
                var targetArrayLookup = events[eventRecord.eventName];
                var targetArray = targetArrayLookup ? targetArrayLookup[this._id] : null;
                // We may have already target's entries, so check for null.
                if (targetArray) {
                    if (targetArray.length === 1 || !callback) {
                        targetArrayLookup.count -= targetArray.length;
                        delete events[eventRecord.eventName][this._id];
                    }
                    else {
                        targetArrayLookup.count--;
                        targetArray.splice(targetArray.indexOf(eventRecord), 1);
                    }
                    if (!targetArrayLookup.count) {
                        delete events[eventRecord.eventName];
                    }
                }
                if (eventRecord.elementCallback) {
                    if (eventRecord.target.removeEventListener) {
                        eventRecord.target.removeEventListener(eventRecord.eventName, eventRecord.elementCallback, eventRecord.options);
                    }
                    else if (eventRecord.target.detachEvent) {
                        // IE8
                        eventRecord.target.detachEvent('on' + eventRecord.eventName, eventRecord.elementCallback);
                    }
                }
                this._eventRecords.splice(i--, 1);
            }
        }
    };
    /** Trigger the given event in the context of this instance of EventGroup. */
    EventGroup.prototype.raise = function (eventName, eventArgs, bubbleEvent) {
        return EventGroup.raise(this._parent, eventName, eventArgs, bubbleEvent);
    };
    /** Declare an event as being supported by this instance of EventGroup. */
    EventGroup.prototype.declare = function (event) {
        var declaredEvents = (this._parent.__declaredEvents = this._parent.__declaredEvents || {});
        if (typeof event === 'string') {
            declaredEvents[event] = true;
        }
        else {
            for (var i = 0; i < event.length; i++) {
                declaredEvents[event[i]] = true;
            }
        }
    };
    EventGroup._uniqueId = 0;
    return EventGroup;
}());
//# sourceMappingURL=EventGroup.js.map

/***/ }),

/***/ "Ge+E":
/*!****************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/rtl.js ***!
  \****************************************************************************************************************/
/*! exports provided: getRTL, setRTL, getRTLSafeKeyCode */
/*! exports used: getRTL, getRTLSafeKeyCode, setRTL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getRTL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setRTL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getRTLSafeKeyCode; });
/* harmony import */ var _KeyCodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KeyCodes */ "6ztV");
/* harmony import */ var _dom_getDocument__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/getDocument */ "41aL");
/* harmony import */ var _sessionStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sessionStorage */ "8jXb");
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/merge-styles */ "exPR");




var RTL_LOCAL_STORAGE_KEY = 'isRTL';
// Default to undefined so that we initialize on first read.
var _isRTL;
/**
 * Gets the rtl state of the page (returns true if in rtl.)
 */
function getRTL(theme) {
    if (theme === void 0) { theme = {}; }
    if (theme.rtl !== undefined) {
        return theme.rtl;
    }
    if (_isRTL === undefined) {
        // Fabric supports persisting the RTL setting between page refreshes via session storage
        var savedRTL = Object(_sessionStorage__WEBPACK_IMPORTED_MODULE_2__[/* getItem */ "a"])(RTL_LOCAL_STORAGE_KEY);
        if (savedRTL !== null) {
            _isRTL = savedRTL === '1';
            setRTL(_isRTL);
        }
        var doc = Object(_dom_getDocument__WEBPACK_IMPORTED_MODULE_1__[/* getDocument */ "a"])();
        if (_isRTL === undefined && doc) {
            _isRTL = ((doc.body && doc.body.getAttribute('dir')) || doc.documentElement.getAttribute('dir')) === 'rtl';
            Object(_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_3__[/* setRTL */ "b"])(_isRTL);
        }
    }
    return !!_isRTL;
}
/**
 * Sets the rtl state of the page (by adjusting the dir attribute of the html element.)
 */
function setRTL(isRTL, persistSetting) {
    if (persistSetting === void 0) { persistSetting = false; }
    var doc = Object(_dom_getDocument__WEBPACK_IMPORTED_MODULE_1__[/* getDocument */ "a"])();
    if (doc) {
        doc.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    }
    if (persistSetting) {
        Object(_sessionStorage__WEBPACK_IMPORTED_MODULE_2__[/* setItem */ "b"])(RTL_LOCAL_STORAGE_KEY, isRTL ? '1' : '0');
    }
    _isRTL = isRTL;
    Object(_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_3__[/* setRTL */ "b"])(_isRTL);
}
/**
 * Returns the given key, but flips right/left arrows if necessary.
 */
function getRTLSafeKeyCode(key, theme) {
    if (theme === void 0) { theme = {}; }
    if (getRTL(theme)) {
        if (key === _KeyCodes__WEBPACK_IMPORTED_MODULE_0__[/* KeyCodes */ "a"].left) {
            key = _KeyCodes__WEBPACK_IMPORTED_MODULE_0__[/* KeyCodes */ "a"].right;
        }
        else if (key === _KeyCodes__WEBPACK_IMPORTED_MODULE_0__[/* KeyCodes */ "a"].right) {
            key = _KeyCodes__WEBPACK_IMPORTED_MODULE_0__[/* KeyCodes */ "a"].left;
        }
    }
    return key;
}
//# sourceMappingURL=rtl.js.map

/***/ }),

/***/ "H/r9":
/*!************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/dom/getRect.js ***!
  \************************************************************************************************************************/
/*! exports provided: getRect */
/*! exports used: getRect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getRect; });
/* harmony import */ var _getWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow */ "NZSY");

/**
 * Helper to get bounding client rect. Passing in window will get the window size.
 *
 * @public
 */
function getRect(element, win) {
    var theWin = (win !== null && win !== void 0 ? win : (!element || (element && element.hasOwnProperty('devicePixelRatio'))))
        ? Object(_getWindow__WEBPACK_IMPORTED_MODULE_0__[/* getWindow */ "a"])()
        : Object(_getWindow__WEBPACK_IMPORTED_MODULE_0__[/* getWindow */ "a"])(element);
    var rect;
    if (element) {
        if (element === theWin) {
            rect = {
                left: 0,
                top: 0,
                width: theWin.innerWidth,
                height: theWin.innerHeight,
                right: theWin.innerWidth,
                bottom: theWin.innerHeight,
            };
        }
        else if (element.getBoundingClientRect) {
            rect = element.getBoundingClientRect();
        }
    }
    return rect;
}
//# sourceMappingURL=getRect.js.map

/***/ }),

/***/ "HliU":
/*!******************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/customizations/Customizations.js ***!
  \******************************************************************************************************************************************/
/*! exports provided: Customizations */
/*! exports used: Customizations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Customizations; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _GlobalSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../GlobalSettings */ "XLAH");


var CustomizationsGlobalKey = 'customizations';
var NO_CUSTOMIZATIONS = { settings: {}, scopedSettings: {}, inCustomizerContext: false };
var _allSettings = _GlobalSettings__WEBPACK_IMPORTED_MODULE_1__[/* GlobalSettings */ "a"].getValue(CustomizationsGlobalKey, {
    settings: {},
    scopedSettings: {},
    inCustomizerContext: false,
});
var _events = [];
var Customizations = /** @class */ (function () {
    function Customizations() {
    }
    Customizations.reset = function () {
        _allSettings.settings = {};
        _allSettings.scopedSettings = {};
    };
    /** Apply global Customization settings.
     * @example Customizations.applySettings(\{ theme: \{...\} \});
     */
    Customizations.applySettings = function (settings) {
        _allSettings.settings = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, _allSettings.settings), settings);
        Customizations._raiseChange();
    };
    /** Apply Customizations to a particular named scope, like a component.
     * @example Customizations.applyScopedSettings('Nav', \{ styles: () =\> \{\} \});
     */
    Customizations.applyScopedSettings = function (scopeName, settings) {
        _allSettings.scopedSettings[scopeName] = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, _allSettings.scopedSettings[scopeName]), settings);
        Customizations._raiseChange();
    };
    Customizations.getSettings = function (properties, scopeName, localSettings) {
        if (localSettings === void 0) { localSettings = NO_CUSTOMIZATIONS; }
        var settings = {};
        var localScopedSettings = (scopeName && localSettings.scopedSettings[scopeName]) || {};
        var globalScopedSettings = (scopeName && _allSettings.scopedSettings[scopeName]) || {};
        for (var _i = 0, properties_1 = properties; _i < properties_1.length; _i++) {
            var property = properties_1[_i];
            settings[property] =
                localScopedSettings[property] ||
                    localSettings.settings[property] ||
                    globalScopedSettings[property] ||
                    _allSettings.settings[property];
        }
        return settings;
    };
    /** Used to run some code that sets Customizations without triggering an update until the end.
     * Useful for applying Customizations that don't affect anything currently rendered, or for
     * applying many customizations at once.
     * @param suppressUpdate - Do not raise the change event at the end, preventing all updates
     */
    Customizations.applyBatchedUpdates = function (code, suppressUpdate) {
        Customizations._suppressUpdates = true;
        try {
            code();
        }
        catch (_a) {
            /* do nothing */
        }
        Customizations._suppressUpdates = false;
        if (!suppressUpdate) {
            Customizations._raiseChange();
        }
    };
    Customizations.observe = function (onChange) {
        _events.push(onChange);
    };
    Customizations.unobserve = function (onChange) {
        _events = _events.filter(function (cb) { return cb !== onChange; });
    };
    Customizations._raiseChange = function () {
        if (!Customizations._suppressUpdates) {
            _events.forEach(function (cb) { return cb(); });
        }
    };
    return Customizations;
}());

//# sourceMappingURL=Customizations.js.map

/***/ }),

/***/ "Imro":
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/selection/Selection.types.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: SELECTION_CHANGE, SELECTION_ITEMS_CHANGE, SelectionMode, SelectionDirection */
/*! exports used: SELECTION_CHANGE, SELECTION_ITEMS_CHANGE, SelectionMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SELECTION_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SELECTION_ITEMS_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SelectionMode; });
/* unused harmony export SelectionDirection */
var SELECTION_CHANGE = 'change';
var SELECTION_ITEMS_CHANGE = 'items-change';
/**
 * {@docCategory Selection}
 */
var SelectionMode;
(function (SelectionMode) {
    SelectionMode[SelectionMode["none"] = 0] = "none";
    SelectionMode[SelectionMode["single"] = 1] = "single";
    SelectionMode[SelectionMode["multiple"] = 2] = "multiple";
})(SelectionMode || (SelectionMode = {}));
/**
 * {@docCategory Selection}
 */
var SelectionDirection;
(function (SelectionDirection) {
    SelectionDirection[SelectionDirection["horizontal"] = 0] = "horizontal";
    SelectionDirection[SelectionDirection["vertical"] = 1] = "vertical";
})(SelectionDirection || (SelectionDirection = {}));
//# sourceMappingURL=Selection.types.js.map

/***/ }),

/***/ "KbVg":
/*!****************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/customizations/useCustomizationSettings.js ***!
  \****************************************************************************************************************************************************/
/*! exports provided: useCustomizationSettings */
/*! exports used: useCustomizationSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useCustomizationSettings; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Customizations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Customizations */ "HliU");
/* harmony import */ var _CustomizerContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomizerContext */ "pQvb");



/**
 * Hook to get Customizations settings from Customizations singleton or CustomizerContext.
 * It will trigger component state update on settings change observed.
 */
function useCustomizationSettings(properties, scopeName) {
    var forceUpdate = useForceUpdate();
    var customizations = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_CustomizerContext__WEBPACK_IMPORTED_MODULE_2__[/* CustomizerContext */ "a"]).customizations;
    var inCustomizerContext = customizations.inCustomizerContext;
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        if (!inCustomizerContext) {
            _Customizations__WEBPACK_IMPORTED_MODULE_1__[/* Customizations */ "a"].observe(forceUpdate);
        }
        return function () {
            if (!inCustomizerContext) {
                _Customizations__WEBPACK_IMPORTED_MODULE_1__[/* Customizations */ "a"].unobserve(forceUpdate);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps -- exclude forceUpdate
    }, [inCustomizerContext]);
    return _Customizations__WEBPACK_IMPORTED_MODULE_1__[/* Customizations */ "a"].getSettings(properties, scopeName, customizations);
}
function useForceUpdate() {
    var _a = react__WEBPACK_IMPORTED_MODULE_0__["useState"](0), setValue = _a[1];
    return function () { return setValue(function (value) { return ++value; }); };
}
//# sourceMappingURL=useCustomizationSettings.js.map

/***/ }),

/***/ "M4sf":
/*!******************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/shadowDom/contexts/MergeStylesRootContext.js ***!
  \******************************************************************************************************************************************************/
/*! exports provided: MergeStylesRootContext, MergeStylesRootProvider */
/*! exports used: MergeStylesRootContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MergeStylesRootContext; });
/* unused harmony export MergeStylesRootProvider */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/merge-styles */ "HhsF");
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/merge-styles */ "qU9U");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dom */ "NZSY");
/* harmony import */ var _hooks_useAdoptedStylesheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useAdoptedStylesheet */ "mlc2");
/* harmony import */ var _hooks_useShadowConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useShadowConfig */ "dVHb");
/* harmony import */ var _hooks_useMergeStylesShadowRoot__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useMergeStylesShadowRoot */ "ew1g");
/* harmony import */ var _hooks_useMergeStylesRootStylesheets__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/useMergeStylesRootStylesheets */ "NYq4");
/* harmony import */ var _hooks_useStyled__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hooks/useStyled */ "N9bF");
/* harmony import */ var _fluentui_react_window_provider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fluentui/react-window-provider */ "7R02");










var noop = function () { return false; };
var noopShadow = function () { return _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_2__[/* DEFAULT_SHADOW_CONFIG */ "a"]; };
var noopRootStylesheets = function () { return new Map(); };
var noopUndefined = function () { return undefined; };
var MergeStylesRootContext = react__WEBPACK_IMPORTED_MODULE_1__["createContext"]({
    stylesheets: new Map(),
    useAdoptedStylesheetEx: noop,
    useAdoptedStylesheet: noop,
    useShadowConfig: noopShadow,
    useMergeStylesShadowRootContext: noopUndefined,
    useHasMergeStylesShadowRootContext: noop,
    useMergeStylesRootStylesheets: noopRootStylesheets,
    useWindow: noopUndefined,
    useStyled: noopUndefined,
});
/**
 * Root context provider for mergeStyles shadow DOM.
 * Typically this is placed at the render root of your React application.
 */
var MergeStylesRootProvider = function (_a) {
    var userSheets = _a.stylesheets, userWindow = _a.window, useAdoptedStylesheet = _a.useAdoptedStylesheet, useAdoptedStylesheetEx = _a.useAdoptedStylesheetEx, useShadowConfig = _a.useShadowConfig, useMergeStylesShadowRootContext = _a.useMergeStylesShadowRootContext, useHasMergeStylesShadowRootContext = _a.useHasMergeStylesShadowRootContext, useMergeStylesRootStylesheets = _a.useMergeStylesRootStylesheets, useWindow = _a.useWindow, useStyled = _a.useStyled, props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __rest */ "e"])(_a, ["stylesheets", "window", "useAdoptedStylesheet", "useAdoptedStylesheetEx", "useShadowConfig", "useMergeStylesShadowRootContext", "useHasMergeStylesShadowRootContext", "useMergeStylesRootStylesheets", "useWindow", "useStyled"]);
    var win = userWindow !== null && userWindow !== void 0 ? userWindow : Object(_dom__WEBPACK_IMPORTED_MODULE_4__[/* getWindow */ "a"])();
    var _b = react__WEBPACK_IMPORTED_MODULE_1__["useState"](function () { return userSheets || new Map(); }), stylesheets = _b[0], setStylesheets = _b[1];
    var sheetHandler = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (_a) {
        var key = _a.key, sheet = _a.sheet;
        setStylesheets(function (prev) {
            var next = new Map(prev);
            next.set(key, sheet);
            return next;
        });
    }, []);
    // Udapte stylesheets based on user style sheet changes
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
        setStylesheets(userSheets || new Map());
    }, [userSheets]);
    // Wire up listener for adopted stylesheets
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
        if (!win) {
            return;
        }
        var sheet = _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_3__[/* ShadowDomStylesheet */ "c"].getInstance(Object(_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_2__[/* makeShadowConfig */ "e"])(_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_2__[/* GLOBAL_STYLESHEET_KEY */ "b"], false, win));
        var off = sheet.onAddSheet(sheetHandler);
        return function () {
            off();
        };
    }, [win, sheetHandler]);
    // Read stylesheets from window on mount
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
        if (!win) {
            return;
        }
        var changed = false;
        var next = new Map(stylesheets);
        var sheet = _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_3__[/* ShadowDomStylesheet */ "c"].getInstance(Object(_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_2__[/* makeShadowConfig */ "e"])(_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_2__[/* GLOBAL_STYLESHEET_KEY */ "b"], false, win));
        var adoptedSheets = sheet.getAdoptedSheets();
        adoptedSheets.forEach(function (adoptedSheet, key) {
            next.set(key, adoptedSheet);
            changed = true;
        });
        if (changed) {
            setStylesheets(next);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    var value = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
        return {
            stylesheets: stylesheets,
            useAdoptedStylesheet: useAdoptedStylesheet || _hooks_useAdoptedStylesheet__WEBPACK_IMPORTED_MODULE_5__[/* useAdoptedStylesheet */ "a"],
            useAdoptedStylesheetEx: useAdoptedStylesheetEx || _hooks_useAdoptedStylesheet__WEBPACK_IMPORTED_MODULE_5__[/* useAdoptedStylesheetEx */ "b"],
            useShadowConfig: useShadowConfig || _hooks_useShadowConfig__WEBPACK_IMPORTED_MODULE_6__[/* useShadowConfig */ "a"],
            useMergeStylesShadowRootContext: useMergeStylesShadowRootContext || _hooks_useMergeStylesShadowRoot__WEBPACK_IMPORTED_MODULE_7__[/* useMergeStylesShadowRootContext */ "b"],
            useHasMergeStylesShadowRootContext: useHasMergeStylesShadowRootContext || _hooks_useMergeStylesShadowRoot__WEBPACK_IMPORTED_MODULE_7__[/* useHasMergeStylesShadowRootContext */ "a"],
            useMergeStylesRootStylesheets: useMergeStylesRootStylesheets || _hooks_useMergeStylesRootStylesheets__WEBPACK_IMPORTED_MODULE_8__[/* useMergeStylesRootStylesheets */ "a"],
            useWindow: useWindow || _fluentui_react_window_provider__WEBPACK_IMPORTED_MODULE_10__[/* useWindow */ "c"],
            useStyled: useStyled || _hooks_useStyled__WEBPACK_IMPORTED_MODULE_9__[/* useStyled */ "a"],
        };
    }, [
        stylesheets,
        useAdoptedStylesheet,
        useAdoptedStylesheetEx,
        useShadowConfig,
        useMergeStylesShadowRootContext,
        useHasMergeStylesShadowRootContext,
        useMergeStylesRootStylesheets,
        useWindow,
        useStyled,
    ]);
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](MergeStylesRootContext.Provider, Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({ value: value }, props));
};
//# sourceMappingURL=MergeStylesRootContext.js.map

/***/ }),

/***/ "MBBx":
/*!*******************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/styled.js ***!
  \*******************************************************************************************************************/
/*! exports provided: styled */
/*! exports used: styled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styled; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/merge-styles */ "ZURq");
/* harmony import */ var _shadowDom_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shadowDom/index */ "12gh");
/* harmony import */ var _customizations_useCustomizationSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customizations/useCustomizationSettings */ "KbVg");





var DefaultFields = ['theme', 'styles'];
function styled(Component, baseStyles, getProps, customizable, pure) {
    customizable = customizable || { scope: '', fields: undefined };
    var scope = customizable.scope, _a = customizable.fields, fields = _a === void 0 ? DefaultFields : _a;
    var Wrapped = react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"](function (props, forwardedRef) {
        var styles = react__WEBPACK_IMPORTED_MODULE_1__["useRef"]();
        var settings = Object(_customizations_useCustomizationSettings__WEBPACK_IMPORTED_MODULE_4__[/* useCustomizationSettings */ "a"])(fields, scope);
        var customizedStyles = settings.styles, dir = settings.dir, rest = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __rest */ "e"])(settings, ["styles", "dir"]);
        var additionalProps = getProps ? getProps(props) : undefined;
        var useStyled = Object(_shadowDom_index__WEBPACK_IMPORTED_MODULE_3__[/* useMergeStylesHooks */ "a"])().useStyled;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var cache = (styles.current && styles.current.__cachedInputs__) || [];
        var propStyles = props.styles;
        if (!styles.current || customizedStyles !== cache[1] || propStyles !== cache[2]) {
            // Using styled components as the Component arg will result in nested styling arrays.
            // The function can be cached and in order to prevent the props from being retained within it's closure
            // we pass in just the styles and not the entire props
            var concatenatedStyles = function (styleProps) {
                return Object(_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_2__[/* concatStyleSetsWithProps */ "a"])(styleProps, baseStyles, customizedStyles, propStyles);
            };
            // The __cachedInputs__ array is attached to the function and consumed by the
            // classNamesFunction as a list of keys to include for memoizing classnames.
            concatenatedStyles.__cachedInputs__ = [
                baseStyles,
                customizedStyles,
                propStyles,
            ];
            concatenatedStyles.__noStyleOverride__ =
                !customizedStyles && !propStyles;
            styles.current = concatenatedStyles;
        }
        styles.current.__shadowConfig__ = useStyled(scope);
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Component, Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({ ref: forwardedRef }, rest, additionalProps, props, { styles: styles.current }));
    });
    // Function.prototype.name is an ES6 feature, so the cast to any is required until we're
    // able to drop IE 11 support and compile with ES6 libs
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Wrapped.displayName = "Styled".concat(Component.displayName || Component.name);
    // This preserves backwards compatibility.
    var pureComponent = pure ? react__WEBPACK_IMPORTED_MODULE_1__["memo"](Wrapped) : Wrapped;
    // Check if the wrapper has a displayName after it has been memoized. Then assign it to the pure component.
    if (Wrapped.displayName) {
        pureComponent.displayName = Wrapped.displayName;
    }
    return pureComponent;
}
//# sourceMappingURL=styled.js.map

/***/ }),

/***/ "N9bF":
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/shadowDom/hooks/useStyled.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: useStyled */
/*! exports used: useStyled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useStyled; });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dom */ "NZSY");
/* harmony import */ var _useMergeStylesHooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useMergeStylesHooks */ "12gh");


var useStyled = function (scope) {
    if (scope === void 0) { scope = '__global__'; }
    var _a = Object(_useMergeStylesHooks__WEBPACK_IMPORTED_MODULE_1__[/* useMergeStylesHooks */ "a"])(), useAdoptedStylesheetEx = _a.useAdoptedStylesheetEx, useShadowConfig = _a.useShadowConfig, useMergeStylesShadowRootContext = _a.useMergeStylesShadowRootContext, useMergeStylesRootStylesheets = _a.useMergeStylesRootStylesheets, useWindow = _a.useWindow;
    var win = useWindow() || Object(_dom__WEBPACK_IMPORTED_MODULE_0__[/* getWindow */ "a"])();
    var shadowCtx = useMergeStylesShadowRootContext();
    var inShadow = !!shadowCtx;
    var rootMergeStyles = useMergeStylesRootStylesheets();
    var shadowConfig = useShadowConfig(scope, inShadow, win);
    useAdoptedStylesheetEx(scope, shadowCtx, rootMergeStyles, win);
    return shadowConfig;
};
//# sourceMappingURL=useStyled.js.map

/***/ }),

/***/ "NYq4":
/*!**********************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/shadowDom/hooks/useMergeStylesRootStylesheets.js ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: useMergeStylesRootStylesheets */
/*! exports used: useMergeStylesRootStylesheets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useMergeStylesRootStylesheets; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_MergeStylesRootContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/MergeStylesRootContext */ "M4sf");


/**
 * Get the map of stylesheets available in the context.
 */
var useMergeStylesRootStylesheets = function () {
    return react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_contexts_MergeStylesRootContext__WEBPACK_IMPORTED_MODULE_1__[/* MergeStylesRootContext */ "a"]).stylesheets;
};
//# sourceMappingURL=useMergeStylesRootStylesheets.js.map

/***/ }),

/***/ "NZSY":
/*!**************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/dom/getWindow.js ***!
  \**************************************************************************************************************************/
/*! exports provided: getWindow */
/*! exports used: getWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getWindow; });
/* harmony import */ var _canUseDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canUseDOM */ "cLtT");

var _window = undefined;
// Note: Accessing "window" in IE11 is somewhat expensive, and calling "typeof window"
// hits a memory leak, whereas aliasing it and calling "typeof _window" does not.
// Caching the window value at the file scope lets us minimize the impact.
try {
    // eslint-disable-next-line no-restricted-globals
    _window = window;
}
catch (e) {
    /* no-op */
}
/**
 * Helper to get the window object. The helper will make sure to use a cached variable
 * of "window", to avoid overhead and memory leaks in IE11. Note that in popup scenarios the
 * window object won't match the "global" window object, and for these scenarios, you should
 * pass in an element hosted within the popup.
 *
 * @public
 */
function getWindow(rootElement) {
    if (!Object(_canUseDOM__WEBPACK_IMPORTED_MODULE_0__[/* canUseDOM */ "a"])() || typeof _window === 'undefined') {
        return undefined;
    }
    else {
        var el = rootElement;
        return el && el.ownerDocument && el.ownerDocument.defaultView ? el.ownerDocument.defaultView : _window;
    }
}
//# sourceMappingURL=getWindow.js.map

/***/ }),

/***/ "QUK6":
/*!*****************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/customizations/mergeSettings.js ***!
  \*****************************************************************************************************************************************/
/*! exports provided: mergeSettings, mergeScopedSettings */
/*! exports used: mergeScopedSettings, mergeSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return mergeSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mergeScopedSettings; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");

/**
 * Merge new and old settings, giving priority to new settings.
 * New settings is optional in which case oldSettings is returned as-is.
 * @param oldSettings - Old settings to fall back to.
 * @param newSettings - New settings that will be merged over oldSettings.
 * @returns Merged settings.
 */
function mergeSettings(oldSettings, newSettings) {
    if (oldSettings === void 0) { oldSettings = {}; }
    var mergeSettingsWith = _isSettingsFunction(newSettings) ? newSettings : _settingsMergeWith(newSettings);
    return mergeSettingsWith(oldSettings);
}
function mergeScopedSettings(oldSettings, newSettings) {
    if (oldSettings === void 0) { oldSettings = {}; }
    var mergeSettingsWith = _isSettingsFunction(newSettings) ? newSettings : _scopedSettingsMergeWith(newSettings);
    return mergeSettingsWith(oldSettings);
}
function _isSettingsFunction(settings) {
    return typeof settings === 'function';
}
function _settingsMergeWith(newSettings) {
    return function (settings) { return (newSettings ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, settings), newSettings) : settings); };
}
function _scopedSettingsMergeWith(scopedSettingsFromProps) {
    if (scopedSettingsFromProps === void 0) { scopedSettingsFromProps = {}; }
    return function (oldScopedSettings) {
        var newScopedSettings = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, oldScopedSettings);
        for (var scopeName in scopedSettingsFromProps) {
            if (scopedSettingsFromProps.hasOwnProperty(scopeName)) {
                newScopedSettings[scopeName] = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, oldScopedSettings[scopeName]), scopedSettingsFromProps[scopeName]);
            }
        }
        return newScopedSettings;
    };
}
//# sourceMappingURL=mergeSettings.js.map

/***/ }),

/***/ "S+0K":
/*!******************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/array.js ***!
  \******************************************************************************************************************/
/*! exports provided: findIndex, find, createArray, toMatrix, removeIndex, replaceElement, addElementAtIndex, flatten, arraysEqual */
/*! exports used: addElementAtIndex, arraysEqual, find, findIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return findIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return find; });
/* unused harmony export createArray */
/* unused harmony export toMatrix */
/* unused harmony export removeIndex */
/* unused harmony export replaceElement */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addElementAtIndex; });
/* unused harmony export flatten */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return arraysEqual; });
/**
 * Helper to find the index of an item within an array, using a callback to
 * determine the match.
 *
 * @public
 * @param array - Array to search.
 * @param cb - Callback which returns true on matches.
 * @param fromIndex - Optional index to start from (defaults to 0)
 */
function findIndex(array, cb, fromIndex) {
    if (fromIndex === void 0) { fromIndex = 0; }
    var index = -1;
    for (var i = fromIndex; array && i < array.length; i++) {
        if (cb(array[i], i)) {
            index = i;
            break;
        }
    }
    return index;
}
/**
 * Helper to find the first item within an array that satisfies the callback.
 * @param array - Array to search
 * @param cb - Callback which returns true on matches
 */
function find(array, cb) {
    var index = findIndex(array, cb);
    if (index < 0) {
        return undefined;
    }
    return array[index];
}
/**
 * Creates an array of a given size and helper method to populate.
 *
 * @public
 * @param size - Size of array.
 * @param getItem - Callback to populate given cell index.
 */
function createArray(size, getItem) {
    var array = [];
    for (var i = 0; i < size; i++) {
        array.push(getItem(i));
    }
    return array;
}
/**
 * Convert the given array to a matrix with columnCount number
 * of columns.
 *
 * @public
 * @param items - The array to convert
 * @param columnCount - The number of columns for the resulting matrix
 * @returns A matrix of items
 */
function toMatrix(items, columnCount) {
    return items.reduce(function (rows, currentValue, index) {
        if (index % columnCount === 0) {
            rows.push([currentValue]);
        }
        else {
            rows[rows.length - 1].push(currentValue);
        }
        return rows;
    }, []);
}
/**
 * Given an array, it returns a new array that does not contain the item at the given index.
 * @param array - The array to operate on
 * @param index - The index of the element to remove
 */
function removeIndex(array, index) {
    return array.filter(function (_, i) { return index !== i; });
}
/**
 * Given an array, this function returns a new array where the element at a given index has been replaced.
 * @param array - The array to operate on
 * @param newElement - The element that will be placed in the new array
 * @param index - The index of the element that should be replaced
 */
function replaceElement(array, newElement, index) {
    var copy = array.slice();
    copy[index] = newElement;
    return copy;
}
/**
 * Given an array, this function returns a new array where an element has been inserted at the given index.
 * @param array - The array to operate on
 * @param index - The index where an element should be inserted
 * @param itemToAdd - The element to insert
 */
function addElementAtIndex(array, index, itemToAdd) {
    var copy = array.slice();
    copy.splice(index, 0, itemToAdd);
    return copy;
}
/**
 * Given an array where each element is of type T or T[], flatten it into an array of T
 * @param array - The array where each element can optionally also be an array
 */
function flatten(array) {
    var result = [];
    array.forEach(function (item) { return (result = result.concat(item)); });
    return result;
}
/**
 * Returns a boolean indicating if the two given arrays are equal in length and values.
 *
 * @param array1 - First array to compare
 * @param array2 - Second array to compare
 * @returns True if the arrays are the same length and have the same values in the same positions, false otherwise.
 */
function arraysEqual(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }
    for (var i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
}
//# sourceMappingURL=array.js.map

/***/ }),

/***/ "S8Un":
/*!***********************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/customizations/mergeCustomizations.js ***!
  \***********************************************************************************************************************************************/
/*! exports provided: mergeCustomizations */
/*! exports used: mergeCustomizations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mergeCustomizations; });
/* harmony import */ var _mergeSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mergeSettings */ "QUK6");

/**
 * Merge props and customizations giving priority to props over context.
 * NOTE: This function will always perform multiple merge operations. Use with caution.
 * @param props - New settings to merge in.
 * @param parentContext - Context containing current settings.
 * @returns Merged customizations.
 */
function mergeCustomizations(props, parentContext) {
    var _a = (parentContext || {}).customizations, customizations = _a === void 0 ? { settings: {}, scopedSettings: {} } : _a;
    return {
        customizations: {
            settings: Object(_mergeSettings__WEBPACK_IMPORTED_MODULE_0__[/* mergeSettings */ "b"])(customizations.settings, props.settings),
            scopedSettings: Object(_mergeSettings__WEBPACK_IMPORTED_MODULE_0__[/* mergeScopedSettings */ "a"])(customizations.scopedSettings, props.scopedSettings),
            inCustomizerContext: true,
        },
    };
}
//# sourceMappingURL=mergeCustomizations.js.map

/***/ }),

/***/ "T+Fs":
/*!*******************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/componentAs/composeComponentAs.js ***!
  \*******************************************************************************************************************************************/
/*! exports provided: composeComponentAs */
/*! exports used: composeComponentAs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return composeComponentAs; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../memoize */ "02QY");



function createComposedComponent(outer) {
    var Outer = outer;
    var outerMemoizer = Object(_memoize__WEBPACK_IMPORTED_MODULE_2__[/* createMemoizer */ "a"])(function (inner) {
        if (outer === inner) {
            throw new Error('Attempted to compose a component with itself.');
        }
        var Inner = inner;
        var innerMemoizer = Object(_memoize__WEBPACK_IMPORTED_MODULE_2__[/* createMemoizer */ "a"])(function (defaultRender) {
            var InnerWithDefaultRender = function (innerProps) {
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Inner, Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, innerProps, { defaultRender: defaultRender }));
            };
            return InnerWithDefaultRender;
        });
        var OuterWithDefaultRender = function (outerProps) {
            var defaultRender = outerProps.defaultRender;
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Outer, Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, outerProps, { defaultRender: defaultRender ? innerMemoizer(defaultRender) : Inner }));
        };
        return OuterWithDefaultRender;
    });
    return outerMemoizer;
}
var componentAsMemoizer = Object(_memoize__WEBPACK_IMPORTED_MODULE_2__[/* createMemoizer */ "a"])(createComposedComponent);
/**
 * Composes two components which conform to the `IComponentAs` specification; that is, two
 * components which accept a `defaultRender` prop, which is a 'default' implementation of
 * a component which accepts the same overall props.
 *
 * @public
 */
function composeComponentAs(outer, inner) {
    return componentAsMemoizer(outer)(inner);
}
//# sourceMappingURL=composeComponentAs.js.map

/***/ }),

/***/ "V8qg":
/*!*********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/language.js ***!
  \*********************************************************************************************************************/
/*! exports provided: getLanguage, setLanguage */
/*! exports used: getLanguage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getLanguage; });
/* unused harmony export setLanguage */
/* harmony import */ var _dom_getDocument__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/getDocument */ "41aL");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage */ "xyV2");
/* harmony import */ var _sessionStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sessionStorage */ "8jXb");



// Default to undefined so that we initialize on first read.
var _language;
var STORAGE_KEY = 'language';
/**
 * Gets the language set for the page.
 * @param persistenceType - Where to persist the value. Default is `sessionStorage` if available.
 */
function getLanguage(persistenceType) {
    if (persistenceType === void 0) { persistenceType = 'sessionStorage'; }
    if (_language === undefined) {
        var doc = Object(_dom_getDocument__WEBPACK_IMPORTED_MODULE_0__[/* getDocument */ "a"])();
        var savedLanguage = persistenceType === 'localStorage'
            ? _localStorage__WEBPACK_IMPORTED_MODULE_1__[/* getItem */ "a"](STORAGE_KEY)
            : persistenceType === 'sessionStorage'
                ? _sessionStorage__WEBPACK_IMPORTED_MODULE_2__[/* getItem */ "a"](STORAGE_KEY)
                : undefined;
        if (savedLanguage) {
            _language = savedLanguage;
        }
        if (_language === undefined && doc) {
            _language = doc.documentElement.getAttribute('lang');
        }
        if (_language === undefined) {
            _language = 'en';
        }
    }
    return _language;
}
function setLanguage(language, persistenceParam) {
    var doc = Object(_dom_getDocument__WEBPACK_IMPORTED_MODULE_0__[/* getDocument */ "a"])();
    if (doc) {
        doc.documentElement.setAttribute('lang', language);
    }
    var persistenceType = persistenceParam === true ? 'none' : !persistenceParam ? 'sessionStorage' : persistenceParam;
    if (persistenceType === 'localStorage') {
        _localStorage__WEBPACK_IMPORTED_MODULE_1__[/* setItem */ "b"](STORAGE_KEY, language);
    }
    else if (persistenceType === 'sessionStorage') {
        _sessionStorage__WEBPACK_IMPORTED_MODULE_2__[/* setItem */ "b"](STORAGE_KEY, language);
    }
    _language = language;
}
//# sourceMappingURL=language.js.map

/***/ }),

/***/ "Vc0M":
/*!*****************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/aria.js ***!
  \*****************************************************************************************************************/
/*! exports provided: mergeAriaAttributeValues */
/*! exports used: mergeAriaAttributeValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mergeAriaAttributeValues; });
/**
 * ARIA helper to concatenate attributes, returning undefined if all attributes
 * are undefined. (Empty strings are not a valid ARIA attribute value.)
 *
 * @param ariaAttributes - ARIA attributes to merge
 */
function mergeAriaAttributeValues() {
    var ariaAttributes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ariaAttributes[_i] = arguments[_i];
    }
    var mergedAttribute = ariaAttributes
        .filter(function (arg) { return arg; })
        .join(' ')
        .trim();
    return mergedAttribute === '' ? undefined : mergedAttribute;
}
//# sourceMappingURL=aria.js.map

/***/ }),

/***/ "WjVC":
/*!****************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/css.js ***!
  \****************************************************************************************************************/
/*! exports provided: css */
/*! exports used: css */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return css; });
/**
 * Concatination helper, which can merge class names together. Skips over falsey values.
 *
 * @public
 */
function css() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var classes = [];
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        if (arg) {
            if (typeof arg === 'string') {
                classes.push(arg);
            }
            else if (arg.hasOwnProperty('toString') && typeof arg.toString === 'function') {
                classes.push(arg.toString());
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                for (var key in arg) {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    if (arg[key]) {
                        classes.push(key);
                    }
                }
            }
        }
    }
    return classes.join(' ');
}
//# sourceMappingURL=css.js.map

/***/ }),

/***/ "XLAH":
/*!***************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/GlobalSettings.js ***!
  \***************************************************************************************************************************/
/*! exports provided: GlobalSettings */
/*! exports used: GlobalSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalSettings; });
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/getWindow */ "NZSY");

/**
 * Storing global state in local module variables has issues when more than one copy
 * if the module gets loaded on the page (due to a bundling error or simply by consuming
 * a prebundled script.)
 *
 * This file contains helpers to deal with the getting and setting local state, and allows
 * callers to get called back when it mutates.
 */
var GLOBAL_SETTINGS_PROP_NAME = '__globalSettings__';
var CALLBACK_STATE_PROP_NAME = '__callbacks__';
var _counter = 0;
/**
 * Global settings helper, which stores settings in the global (window) namespace.
 * If window is not provided, it will store settings in module scope. Provides a
 * way to observe changes as well when their values change.
 *
 * @public
 * {@docCategory GlobalSettings}
 */
var GlobalSettings = /** @class */ (function () {
    function GlobalSettings() {
    }
    GlobalSettings.getValue = function (key, defaultValue) {
        var globalSettings = _getGlobalSettings();
        if (globalSettings[key] === undefined) {
            globalSettings[key] = typeof defaultValue === 'function' ? defaultValue() : defaultValue;
        }
        return globalSettings[key];
    };
    GlobalSettings.setValue = function (key, value) {
        var globalSettings = _getGlobalSettings();
        var callbacks = globalSettings[CALLBACK_STATE_PROP_NAME];
        var oldValue = globalSettings[key];
        if (value !== oldValue) {
            globalSettings[key] = value;
            var changeDescription = {
                oldValue: oldValue,
                value: value,
                key: key,
            };
            for (var id in callbacks) {
                if (callbacks.hasOwnProperty(id)) {
                    callbacks[id](changeDescription);
                }
            }
        }
        return value;
    };
    GlobalSettings.addChangeListener = function (cb) {
        // Note: we use generated ids on the callbacks to create a map of the callbacks, which optimizes removal.
        // (It's faster to delete a key than it is to look up the index of an object and splice an array.)
        var id = cb.__id__;
        var callbacks = _getCallbacks();
        if (!id) {
            id = cb.__id__ = String(_counter++);
        }
        callbacks[id] = cb;
    };
    GlobalSettings.removeChangeListener = function (cb) {
        var callbacks = _getCallbacks();
        delete callbacks[cb.__id__];
    };
    return GlobalSettings;
}());

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _getGlobalSettings() {
    var _a;
    var win = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__[/* getWindow */ "a"])();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var globalObj = win || {};
    if (!globalObj[GLOBAL_SETTINGS_PROP_NAME]) {
        globalObj[GLOBAL_SETTINGS_PROP_NAME] = (_a = {},
            _a[CALLBACK_STATE_PROP_NAME] = {},
            _a);
    }
    return globalObj[GLOBAL_SETTINGS_PROP_NAME];
}
function _getCallbacks() {
    var globalSettings = _getGlobalSettings();
    return globalSettings[CALLBACK_STATE_PROP_NAME];
}
//# sourceMappingURL=GlobalSettings.js.map

/***/ }),

/***/ "YJM4":
/*!*************************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/shadowDom/contexts/MergeStylesShadowRootConsumer.js ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: MergeStylesShadowRootConsumer */
/*! exports used: MergeStylesShadowRootConsumer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MergeStylesShadowRootConsumer; });
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/merge-styles */ "HhsF");
/* harmony import */ var _hooks_useMergeStylesHooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useMergeStylesHooks */ "12gh");
/* harmony import */ var _hooks_useMergeStylesShadowRoot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useMergeStylesShadowRoot */ "ew1g");



var MergeStylesShadowRootConsumer = function (_a) {
    var stylesheetKey = _a.stylesheetKey, children = _a.children;
    var _b = Object(_hooks_useMergeStylesHooks__WEBPACK_IMPORTED_MODULE_1__[/* useMergeStylesHooks */ "a"])(), useAdoptedStylesheetEx = _b.useAdoptedStylesheetEx, useMergeStylesRootStylesheets = _b.useMergeStylesRootStylesheets, useWindow = _b.useWindow;
    var shadowCtx = Object(_hooks_useMergeStylesShadowRoot__WEBPACK_IMPORTED_MODULE_2__[/* useMergeStylesShadowRootContext */ "b"])();
    var rootMergeStyles = useMergeStylesRootStylesheets();
    var win = useWindow();
    useAdoptedStylesheetEx(_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_0__[/* GLOBAL_STYLESHEET_KEY */ "b"], shadowCtx, rootMergeStyles, win);
    useAdoptedStylesheetEx(stylesheetKey, shadowCtx, rootMergeStyles, win);
    return children(!!shadowCtx);
};
//# sourceMappingURL=MergeStylesShadowRootConsumer.js.map

/***/ }),

/***/ "bf8k":
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/initializeComponentRef.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: initializeComponentRef */
/*! exports used: initializeComponentRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initializeComponentRef; });
/* harmony import */ var _extendComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extendComponent */ "+3Q3");

/**
 * Helper to manage componentRef resolution. Internally appends logic to
 * lifetime methods to resolve componentRef to the passed in object.
 *
 * Usage: call initializeComponentRef(this) in the constructor,
 */
function initializeComponentRef(obj) {
    Object(_extendComponent__WEBPACK_IMPORTED_MODULE_0__[/* extendComponent */ "a"])(obj, {
        componentDidMount: _onMount,
        componentDidUpdate: _onUpdate,
        componentWillUnmount: _onUnmount,
    });
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _onMount() {
    _setComponentRef(this.props.componentRef, this);
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _onUpdate(prevProps) {
    if (prevProps.componentRef !== this.props.componentRef) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        _setComponentRef(prevProps.componentRef, null);
        _setComponentRef(this.props.componentRef, this);
    }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _onUnmount() {
    _setComponentRef(this.props.componentRef, null);
}
function _setComponentRef(componentRef, value) {
    if (componentRef) {
        if (typeof componentRef === 'object') {
            componentRef.current = value;
        }
        else if (typeof componentRef === 'function') {
            componentRef(value);
        }
    }
}
//# sourceMappingURL=initializeComponentRef.js.map

/***/ }),

/***/ "bsd9":
/*!***************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/mobileDetector.js ***!
  \***************************************************************************************************************************/
/*! exports provided: isIOS */
/*! exports used: isIOS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isIOS; });
/**
 * Returns true if and only if the user is on a iOS device.
 * Used to determine whether iOS-specific behavior should be applied.
 */
var isIOS = function () {
    // eslint-disable-next-line no-restricted-globals
    if (!window || !window.navigator || !window.navigator.userAgent) {
        return false;
    }
    // eslint-disable-next-line no-restricted-globals
    return /iPad|iPhone|iPod/i.test(window.navigator.userAgent);
};
//# sourceMappingURL=mobileDetector.js.map

/***/ }),

/***/ "cLtT":
/*!**************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/dom/canUseDOM.js ***!
  \**************************************************************************************************************************/
/*! exports provided: canUseDOM */
/*! exports used: canUseDOM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return canUseDOM; });
/**
 * Verifies if an application can use DOM.
 */
function canUseDOM() {
    return (
    // eslint-disable-next-line no-restricted-globals
    typeof window !== 'undefined' &&
        !!(
        // eslint-disable-next-line no-restricted-globals, deprecation/deprecation
        (window.document && window.document.createElement)));
}
//# sourceMappingURL=canUseDOM.js.map

/***/ }),

/***/ "cgK4":
/*!***********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/osDetector.js ***!
  \***********************************************************************************************************************/
/*! exports provided: isMac */
/*! exports used: isMac */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isMac; });
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/getWindow */ "NZSY");

var isMacResult;
/**
 * Returns true if the user is on a Mac. Caches the result value.
 * @param reset - Reset the cached result value (mainly for testing).
 */
function isMac(reset) {
    var _a;
    if (typeof isMacResult === 'undefined' || reset) {
        var win = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__[/* getWindow */ "a"])();
        // In certain SSR frameworks, `window` will be defined even on the server but `navigator` will be undefined
        var userAgent = (_a = win === null || win === void 0 ? void 0 : win.navigator) === null || _a === void 0 ? void 0 : _a.userAgent;
        isMacResult = !!userAgent && userAgent.indexOf('Macintosh') !== -1;
    }
    return !!isMacResult;
}
//# sourceMappingURL=osDetector.js.map

/***/ }),

/***/ "csto":
/*!******************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/hoist.js ***!
  \******************************************************************************************************************/
/*! exports provided: hoistMethods, unhoistMethods */
/*! exports used: hoistMethods, unhoistMethods */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hoistMethods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return unhoistMethods; });
var REACT_LIFECYCLE_EXCLUSIONS = [
    'setState',
    'render',
    'componentWillMount',
    'UNSAFE_componentWillMount',
    'componentDidMount',
    'componentWillReceiveProps',
    'UNSAFE_componentWillReceiveProps',
    'shouldComponentUpdate',
    'componentWillUpdate',
    'getSnapshotBeforeUpdate',
    'UNSAFE_componentWillUpdate',
    'componentDidUpdate',
    'componentWillUnmount',
];
/**
 * Allows you to hoist methods, except those in an exclusion set from a source object into a destination object.
 *
 * @public
 * @param destination - The instance of the object to hoist the methods onto.
 * @param source - The instance of the object where the methods are hoisted from.
 * @param exclusions - (Optional) What methods to exclude from being hoisted.
 * @returns An array of names of methods that were hoisted.
 */
function hoistMethods(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
destination, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
source, exclusions) {
    if (exclusions === void 0) { exclusions = REACT_LIFECYCLE_EXCLUSIONS; }
    var hoisted = [];
    var _loop_1 = function (methodName) {
        if (typeof source[methodName] === 'function' &&
            destination[methodName] === undefined &&
            (!exclusions || exclusions.indexOf(methodName) === -1)) {
            hoisted.push(methodName);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            destination[methodName] = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                source[methodName].apply(source, args);
            };
        }
    };
    for (var methodName in source) {
        _loop_1(methodName);
    }
    return hoisted;
}
/**
 * Provides a method for convenience to unhoist hoisted methods.
 *
 * @public
 * @param source - The source object upon which methods were hoisted.
 * @param methodNames - An array of method names to unhoist.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function unhoistMethods(source, methodNames) {
    methodNames.forEach(function (methodName) { return delete source[methodName]; });
}
//# sourceMappingURL=hoist.js.map

/***/ }),

/***/ "dVHb":
/*!********************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/shadowDom/hooks/useShadowConfig.js ***!
  \********************************************************************************************************************************************/
/*! exports provided: useShadowConfig */
/*! exports used: useShadowConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useShadowConfig; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/merge-styles */ "HhsF");


/**
 * Get a shadow config.
 * @param stylesheetKey - Globally unique key
 * @param win - Reference to the `window` global.
 * @returns ShadowConfig
 */
var useShadowConfig = function (stylesheetKey, inShadow, win) {
    if (inShadow === void 0) { inShadow = false; }
    return react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](function () {
        return Object(_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_1__[/* makeShadowConfig */ "e"])(stylesheetKey, inShadow, win);
    }, [stylesheetKey, inShadow, win]);
};
//# sourceMappingURL=useShadowConfig.js.map

/***/ }),

/***/ "e6CW":
/*!***********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/properties.js ***!
  \***********************************************************************************************************************/
/*! exports provided: baseElementEvents, baseElementProperties, htmlElementProperties, labelProperties, audioProperties, videoProperties, olProperties, liProperties, anchorProperties, buttonProperties, inputProperties, textAreaProperties, selectProperties, optionProperties, tableProperties, trProperties, thProperties, tdProperties, colGroupProperties, colProperties, formProperties, iframeProperties, imgProperties, imageProperties, divProperties, getNativeProps */
/*! exports used: anchorProperties, audioProperties, buttonProperties, colGroupProperties, colProperties, divProperties, formProperties, getNativeProps, htmlElementProperties, iframeProperties, imgProperties, inputProperties, labelProperties, liProperties, olProperties, optionProperties, selectProperties, tableProperties, tdProperties, textAreaProperties, thProperties, trProperties, videoProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export baseElementEvents */
/* unused harmony export baseElementProperties */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return htmlElementProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return labelProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return audioProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return videoProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return olProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return liProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return anchorProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return buttonProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return inputProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return textAreaProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return selectProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return optionProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return tableProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return trProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return thProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return tdProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return colGroupProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return colProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return formProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return iframeProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return imgProperties; });
/* unused harmony export imageProperties */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return divProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getNativeProps; });
var toObjectMap = function () {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    var result = {};
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        var keys = Array.isArray(item) ? item : Object.keys(item);
        for (var _b = 0, keys_1 = keys; _b < keys_1.length; _b++) {
            var key = keys_1[_b];
            result[key] = 1;
        }
    }
    return result;
};
/**
 * An array of events that are allowed on every html element type.
 *
 * @public
 */
var baseElementEvents = toObjectMap([
    'onCopy',
    'onCut',
    'onPaste',
    'onCompositionEnd',
    'onCompositionStart',
    'onCompositionUpdate',
    'onFocus',
    'onFocusCapture',
    'onBlur',
    'onBlurCapture',
    'onChange',
    'onInput',
    'onSubmit',
    'onLoad',
    'onError',
    'onKeyDown',
    'onKeyDownCapture',
    'onKeyPress',
    'onKeyUp',
    'onAbort',
    'onCanPlay',
    'onCanPlayThrough',
    'onDurationChange',
    'onEmptied',
    'onEncrypted',
    'onEnded',
    'onLoadedData',
    'onLoadedMetadata',
    'onLoadStart',
    'onPause',
    'onPlay',
    'onPlaying',
    'onProgress',
    'onRateChange',
    'onSeeked',
    'onSeeking',
    'onStalled',
    'onSuspend',
    'onTimeUpdate',
    'onVolumeChange',
    'onWaiting',
    'onClick',
    'onClickCapture',
    'onContextMenu',
    'onDoubleClick',
    'onDrag',
    'onDragEnd',
    'onDragEnter',
    'onDragExit',
    'onDragLeave',
    'onDragOver',
    'onDragStart',
    'onDrop',
    'onMouseDown',
    'onMouseDownCapture',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    'onMouseUpCapture',
    'onSelect',
    'onTouchCancel',
    'onTouchEnd',
    'onTouchMove',
    'onTouchStart',
    'onScroll',
    'onWheel',
    'onPointerCancel',
    'onPointerDown',
    'onPointerEnter',
    'onPointerLeave',
    'onPointerMove',
    'onPointerOut',
    'onPointerOver',
    'onPointerUp',
    'onGotPointerCapture',
    'onLostPointerCapture',
]);
/**
 * An array of element attributes which are allowed on every html element type.
 *
 * @public
 */
var baseElementProperties = toObjectMap([
    'accessKey',
    'children',
    'className',
    'contentEditable',
    'dir',
    'draggable',
    'hidden',
    'htmlFor',
    'id',
    'lang',
    'ref',
    'role',
    'style',
    'tabIndex',
    'title',
    'translate',
    'spellCheck',
    'name', // global
]);
/**
 * An array of HTML element properties and events.
 *
 * @public
 */
var htmlElementProperties = toObjectMap(baseElementProperties, baseElementEvents);
/**
 * An array of LABEL tag properties and events.
 *
 * @public
 */
var labelProperties = toObjectMap(htmlElementProperties, [
    'form', // button, fieldset, input, label, meter, object, output, select, textarea
]);
/**
 * An array of AUDIO tag properties and events.

 * @public
 */
var audioProperties = toObjectMap(htmlElementProperties, [
    'height',
    'loop',
    'muted',
    'preload',
    'src',
    'width', // canvas, embed, iframe, img, input, object, video
]);
/**
 * An array of VIDEO tag properties and events.
 *
 * @public
 */
var videoProperties = toObjectMap(audioProperties, [
    'poster', // video
]);
/**
 * An array of OL tag properties and events.
 *
 * @public
 */
var olProperties = toObjectMap(htmlElementProperties, [
    'start', // ol
]);
/**
 * An array of LI tag properties and events.
 *
 * @public
 */
var liProperties = toObjectMap(htmlElementProperties, [
    'value', // button, input, li, option, meter, progress, param
]);
/**
 * An array of A tag properties and events.
 *
 * @public
 */
var anchorProperties = toObjectMap(htmlElementProperties, [
    'download',
    'href',
    'hrefLang',
    'media',
    'rel',
    'target',
    'type', // a, button, input, link, menu, object, script, source, style
]);
/**
 * An array of BUTTON tag properties and events.
 *
 * @public
 */
var buttonProperties = toObjectMap(htmlElementProperties, [
    'autoFocus',
    'disabled',
    'form',
    'formAction',
    'formEncType',
    'formMethod',
    'formNoValidate',
    'formTarget',
    'type',
    'value', // button, input, li, option, meter, progress, param,
]);
/**
 * An array of INPUT tag properties and events.
 *
 * @public
 */
var inputProperties = toObjectMap(buttonProperties, [
    'accept',
    'alt',
    'autoCapitalize',
    'autoComplete',
    'checked',
    'dirname',
    'form',
    'height',
    'inputMode',
    'list',
    'max',
    'maxLength',
    'min',
    'minLength',
    'multiple',
    'pattern',
    'placeholder',
    'readOnly',
    'required',
    'src',
    'step',
    'size',
    'type',
    'value',
    'width', // canvas, embed, iframe, img, input, object, video
]);
/**
 * An array of TEXTAREA tag properties and events.
 *
 * @public
 */
var textAreaProperties = toObjectMap(buttonProperties, [
    'autoCapitalize',
    'cols',
    'dirname',
    'form',
    'maxLength',
    'minLength',
    'placeholder',
    'readOnly',
    'required',
    'rows',
    'wrap', // textarea
]);
/**
 * An array of SELECT tag properties and events.
 *
 * @public
 */
var selectProperties = toObjectMap(buttonProperties, [
    'form',
    'multiple',
    'required', // input, select, textarea
]);
var optionProperties = toObjectMap(htmlElementProperties, [
    'selected',
    'value', // button, input, li, option, meter, progress, param
]);
/**
 * An array of TABLE tag properties and events.
 *
 * @public
 */
var tableProperties = toObjectMap(htmlElementProperties, [
    'cellPadding',
    'cellSpacing', // table
]);
/**
 * An array of TR tag properties and events.
 *
 * @public
 */
var trProperties = htmlElementProperties;
/**
 * An array of TH tag properties and events.
 *
 * @public
 */
var thProperties = toObjectMap(htmlElementProperties, [
    'rowSpan',
    'scope', // th
]);
/**
 * An array of TD tag properties and events.
 *
 * @public
 */
var tdProperties = toObjectMap(htmlElementProperties, [
    'colSpan',
    'headers',
    'rowSpan',
    'scope', // th
]);
var colGroupProperties = toObjectMap(htmlElementProperties, [
    'span', // col, colgroup
]);
var colProperties = toObjectMap(htmlElementProperties, [
    'span', // col, colgroup
]);
/**
 * An array of FORM tag properties and events.
 *
 * @public
 */
var formProperties = toObjectMap(htmlElementProperties, [
    'acceptCharset',
    'action',
    'encType',
    'encType',
    'method',
    'noValidate',
    'target', // form
]);
/**
 * An array of IFRAME tag properties and events.
 *
 * @public
 */
var iframeProperties = toObjectMap(htmlElementProperties, [
    'allow',
    'allowFullScreen',
    'allowPaymentRequest',
    'allowTransparency',
    'csp',
    'height',
    'importance',
    'referrerPolicy',
    'sandbox',
    'src',
    'srcDoc',
    'width', // canvas, embed, iframe, img, input, object, video,
]);
/**
 * An array of IMAGE tag properties and events.
 *
 * @public
 */
var imgProperties = toObjectMap(htmlElementProperties, [
    'alt',
    'crossOrigin',
    'height',
    'src',
    'srcSet',
    'useMap',
    'width', // canvas, embed, iframe, img, input, object, video
]);
/**
 * @deprecated Use imgProperties for img elements.
 */
var imageProperties = imgProperties;
/**
 * An array of DIV tag properties and events.
 *
 * @public
 */
var divProperties = htmlElementProperties;
/**
 * Gets native supported props for an html element provided the allowance set. Use one of the property
 * sets defined (divProperties, buttonPropertes, etc) to filter out supported properties from a given
 * props set. Note that all data- and aria- prefixed attributes will be allowed.
 * NOTE: getNativeProps should always be applied first when adding props to a react component. The
 * non-native props should be applied second. This will prevent getNativeProps from overriding your custom props.
 * For example, if props passed to getNativeProps has an onClick function and getNativeProps is added to
 * the component after an onClick function is added, then the getNativeProps onClick will override it.
 *
 * @public
 * @param props - The unfiltered input props
 * @param allowedPropsNames - The array or record of allowed prop names.
 * @returns The filtered props
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getNativeProps(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
props, allowedPropNames, excludedPropNames) {
    // It'd be great to properly type this while allowing 'aria-` and 'data-' attributes like TypeScript does for
    // JSX attributes, but that ability is hardcoded into the TS compiler with no analog in TypeScript typings.
    // Then we'd be able to enforce props extends native props (including aria- and data- attributes), and then
    // return native props.
    // We should be able to do this once this PR is merged: https://github.com/microsoft/TypeScript/pull/26797
    var isArray = Array.isArray(allowedPropNames);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var result = {};
    var keys = Object.keys(props);
    for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
        var key = keys_2[_i];
        var isNativeProp = (!isArray && allowedPropNames[key]) ||
            (isArray && allowedPropNames.indexOf(key) >= 0) ||
            key.indexOf('data-') === 0 ||
            key.indexOf('aria-') === 0;
        if (isNativeProp && (!excludedPropNames || (excludedPropNames === null || excludedPropNames === void 0 ? void 0 : excludedPropNames.indexOf(key)) === -1)) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            result[key] = props[key];
        }
    }
    return result;
}
//# sourceMappingURL=properties.js.map

/***/ }),

/***/ "e6FP":
/*!*************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/warn/warnControlledUsage.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: resetControlledWarnings, warnControlledUsage */
/*! exports used: warnControlledUsage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export resetControlledWarnings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return warnControlledUsage; });
/* harmony import */ var _warn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warn */ "CDZR");
/* harmony import */ var _controlled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controlled */ "3yIe");


var warningsMap;
if (true) {
    warningsMap = {
        valueOnChange: {},
        valueDefaultValue: {},
        controlledToUncontrolled: {},
        uncontrolledToControlled: {},
    };
}
/** Reset controlled usage warnings for testing purposes. */
function resetControlledWarnings() {
    if (true) {
        warningsMap.valueOnChange = {};
        warningsMap.valueDefaultValue = {};
        warningsMap.controlledToUncontrolled = {};
        warningsMap.uncontrolledToControlled = {};
    }
}
/**
 * Check for and warn on the following error conditions with a form component:
 * - A value prop is provided (indicated it's being used as controlled) without a change handler,
 *    and the component is not read-only
 * - Both the value and defaultValue props are provided
 * - The component is attempting to switch between controlled and uncontrolled
 *
 * The messages mimic the warnings React gives for these error conditions on input elements.
 * The warning will only be displayed once per component ID.
 */
function warnControlledUsage(params) {
    if (true) {
        var componentId = params.componentId, componentName = params.componentName, defaultValueProp = params.defaultValueProp, props = params.props, oldProps = params.oldProps, onChangeProp = params.onChangeProp, readOnlyProp = params.readOnlyProp, valueProp = params.valueProp;
        // This warning logic closely follows what React does for native <input> elements.
        var oldIsControlled = oldProps ? Object(_controlled__WEBPACK_IMPORTED_MODULE_1__[/* isControlled */ "a"])(oldProps, valueProp) : undefined;
        var newIsControlled = Object(_controlled__WEBPACK_IMPORTED_MODULE_1__[/* isControlled */ "a"])(props, valueProp);
        if (newIsControlled) {
            // onChange (or readOnly) must be provided if value is provided
            var hasOnChange = !!props[onChangeProp];
            var isReadOnly = !!(readOnlyProp && props[readOnlyProp]);
            if (!(hasOnChange || isReadOnly) && !warningsMap.valueOnChange[componentId]) {
                warningsMap.valueOnChange[componentId] = true;
                Object(_warn__WEBPACK_IMPORTED_MODULE_0__[/* warn */ "a"])("Warning: You provided a '".concat(String(valueProp), "' prop to a ").concat(String(componentName), " without an '").concat(String(onChangeProp), "' handler. ") +
                    "This will render a read-only field. If the field should be mutable use '".concat(String(defaultValueProp), "'. ") +
                    "Otherwise, set '".concat(String(onChangeProp), "'").concat(readOnlyProp ? " or '".concat(String(readOnlyProp), "'") : '', "."));
            }
            // value and defaultValue are mutually exclusive
            var defaultValue = props[defaultValueProp];
            if (defaultValue !== undefined && defaultValue !== null && !warningsMap.valueDefaultValue[componentId]) {
                warningsMap.valueDefaultValue[componentId] = true;
                Object(_warn__WEBPACK_IMPORTED_MODULE_0__[/* warn */ "a"])("Warning: You provided both '".concat(String(valueProp), "' and '").concat(String(defaultValueProp), "' to a ").concat(componentName, ". ") +
                    "Form fields must be either controlled or uncontrolled (specify either the '".concat(String(valueProp), "' prop, ") +
                    "or the '".concat(String(defaultValueProp), "' prop, but not both). Decide between using a controlled or uncontrolled ") +
                    "".concat(componentName, " and remove one of these props. More info: https://fb.me/react-controlled-components"));
            }
        }
        // Warn if switching between uncontrolled and controlled. (One difference between this implementation
        // and React's <input> is that if oldIsControlled is indeterminate and newIsControlled true, we don't warn.)
        if (oldProps && newIsControlled !== oldIsControlled) {
            var oldType = oldIsControlled ? 'a controlled' : 'an uncontrolled';
            var newType = oldIsControlled ? 'uncontrolled' : 'controlled';
            var warnMap = oldIsControlled ? warningsMap.controlledToUncontrolled : warningsMap.uncontrolledToControlled;
            if (!warnMap[componentId]) {
                warnMap[componentId] = true;
                Object(_warn__WEBPACK_IMPORTED_MODULE_0__[/* warn */ "a"])("Warning: A component is changing ".concat(oldType, " ").concat(componentName, " to be ").concat(newType, ". ") +
                    "".concat(componentName, "s should not switch from controlled to uncontrolled (or vice versa). ") +
                    "Decide between using controlled or uncontrolled for the lifetime of the component. " +
                    "More info: https://fb.me/react-controlled-components");
            }
        }
    }
}
//# sourceMappingURL=warnControlledUsage.js.map

/***/ }),

/***/ "ew1g":
/*!*****************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/shadowDom/hooks/useMergeStylesShadowRoot.js ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: useHasMergeStylesShadowRootContext, useMergeStylesShadowRootContext */
/*! exports used: useHasMergeStylesShadowRootContext, useMergeStylesShadowRootContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useHasMergeStylesShadowRootContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useMergeStylesShadowRootContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_MergeStylesShadowRootContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/MergeStylesShadowRootContext */ "pLOS");


/**
 * Test if a context is available.
 * @returns true if there is a context.
 */
var useHasMergeStylesShadowRootContext = function () {
    return !!useMergeStylesShadowRootContext();
};
/**
 * Get a reference to the shadow root context.
 * @returns The context for the shadow root.
 */
var useMergeStylesShadowRootContext = function () {
    return react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_contexts_MergeStylesShadowRootContext__WEBPACK_IMPORTED_MODULE_1__[/* MergeStylesShadowRootContext */ "a"]);
};
//# sourceMappingURL=useMergeStylesShadowRoot.js.map

/***/ }),

/***/ "gDO5":
/*!*********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/keyboard.js ***!
  \*********************************************************************************************************************/
/*! exports provided: isDirectionalKeyCode, addDirectionalKeyCode, removeDirectionalKeyCode */
/*! exports used: isDirectionalKeyCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isDirectionalKeyCode; });
/* unused harmony export addDirectionalKeyCode */
/* unused harmony export removeDirectionalKeyCode */
/* harmony import */ var _KeyCodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KeyCodes */ "6ztV");
var _a;

var DirectionalKeyCodes = (_a = {},
    _a[_KeyCodes__WEBPACK_IMPORTED_MODULE_0__[/* KeyCodes */ "a"].up] = 1,
    _a[_KeyCodes__WEBPACK_IMPORTED_MODULE_0__[/* KeyCodes */ "a"].down] = 1,
    _a[_KeyCodes__WEBPACK_IMPORTED_MODULE_0__[/* KeyCodes */ "a"].left] = 1,
    _a[_KeyCodes__WEBPACK_IMPORTED_MODULE_0__[/* KeyCodes */ "a"].right] = 1,
    _a[_KeyCodes__WEBPACK_IMPORTED_MODULE_0__[/* KeyCodes */ "a"].home] = 1,
    _a[_KeyCodes__WEBPACK_IMPORTED_MODULE_0__[/* KeyCodes */ "a"].end] = 1,
    _a[_KeyCodes__WEBPACK_IMPORTED_MODULE_0__[/* KeyCodes */ "a"].tab] = 1,
    _a[_KeyCodes__WEBPACK_IMPORTED_MODULE_0__[/* KeyCodes */ "a"].pageUp] = 1,
    _a[_KeyCodes__WEBPACK_IMPORTED_MODULE_0__[/* KeyCodes */ "a"].pageDown] = 1,
    _a);
/**
 * Returns true if the keycode is a directional keyboard key.
 */
function isDirectionalKeyCode(which) {
    return !!DirectionalKeyCodes[which];
}
/**
 * Adds a keycode to the list of keys that, when pressed, should cause the focus outlines to be visible.
 * This can be used to add global shortcut keys that directionally move from section to section within
 * an app or between focus trap zones.
 */
function addDirectionalKeyCode(which) {
    DirectionalKeyCodes[which] = 1;
}
/**
 * Removes a keycode to the list of keys that, when pressed, should cause the focus outlines to be visible.
 * This can be used to remove global shortcut keys that directionally move from section to section within
 * an app or between focus trap zones.
 */
function removeDirectionalKeyCode(which) {
    delete DirectionalKeyCodes[which];
}
//# sourceMappingURL=keyboard.js.map

/***/ }),

/***/ "jVf8":
/*!************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/warn/warnConditionallyRequiredProps.js ***!
  \************************************************************************************************************************************************/
/*! exports provided: warnConditionallyRequiredProps */
/*! exports used: warnConditionallyRequiredProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return warnConditionallyRequiredProps; });
/* harmony import */ var _warn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warn */ "CDZR");

/**
 * Warns when props are required if a condition is met.
 *
 * @public
 * @param componentName - The name of the component being used.
 * @param props - The props passed into the component.
 * @param requiredProps - The name of the props that are required when the condition is met.
 * @param conditionalPropName - The name of the prop that the condition is based on.
 * @param condition - Whether the condition is met.
 */
function warnConditionallyRequiredProps(componentName, props, requiredProps, conditionalPropName, condition) {
    if (condition === true && "development" !== 'production') {
        for (var _i = 0, requiredProps_1 = requiredProps; _i < requiredProps_1.length; _i++) {
            var requiredPropName = requiredProps_1[_i];
            if (!(requiredPropName in props)) {
                Object(_warn__WEBPACK_IMPORTED_MODULE_0__[/* warn */ "a"])("".concat(componentName, " property '").concat(requiredPropName, "' is required when '").concat(conditionalPropName, "' is used.'"));
            }
        }
    }
}
//# sourceMappingURL=warnConditionallyRequiredProps.js.map

/***/ }),

/***/ "jY6u":
/*!*********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/modalize.js ***!
  \*********************************************************************************************************************/
/*! exports provided: modalize */
/*! exports used: modalize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return modalize; });
/* harmony import */ var _dom_getDocument__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/getDocument */ "41aL");
/**
 * The helper functions here will make the target element as modal to screen readers, by placing aria-hidden on elements
 * that are siblings to the target element and the target element's ancestors (because aria-hidden gets inherited).
 * That way, all other elements on the page are hidden to the screen reader.
 */

/** Tag names to ignore when modalizing */
var tagsToIgnore = ['TEMPLATE', 'STYLE', 'SCRIPT'];
/**
 * Call this on a target element to make it modal to screen readers.
 * Returns a function that undoes the changes it made.
 */
function modalize(target) {
    var targetDocument = Object(_dom_getDocument__WEBPACK_IMPORTED_MODULE_0__[/* getDocument */ "a"])(target);
    if (!targetDocument) {
        // can't do this in SSR
        return function () { return undefined; };
    }
    var affectedNodes = [];
    // start at target, then recurse and do the same for parent, until we reach <body>
    while (target !== targetDocument.body && target.parentElement) {
        // grab all siblings of current element
        for (var _i = 0, _a = target.parentElement.children; _i < _a.length; _i++) {
            var sibling = _a[_i];
            // but ignore elements that are already aria-hidden
            var ariaHidden = sibling.getAttribute('aria-hidden');
            if (sibling !== target && (ariaHidden === null || ariaHidden === void 0 ? void 0 : ariaHidden.toLowerCase()) !== 'true' && tagsToIgnore.indexOf(sibling.tagName) === -1) {
                affectedNodes.push([sibling, ariaHidden]);
            }
        }
        target = target.parentElement;
    }
    // take all those elements and set aria-hidden=true on them
    affectedNodes.forEach(function (_a) {
        var node = _a[0];
        node.setAttribute('aria-hidden', 'true');
    });
    return function () {
        unmodalize(affectedNodes);
        affectedNodes = []; // dispose
    };
}
/**
 * Undoes the changes that modalize() did.
 */
function unmodalize(affectedNodes) {
    affectedNodes.forEach(function (_a) {
        var node = _a[0], originalValue = _a[1];
        // Restore the original value (false or unset)
        if (originalValue) {
            node.setAttribute('aria-hidden', originalValue);
        }
        else {
            node.removeAttribute('aria-hidden');
        }
    });
}
//# sourceMappingURL=modalize.js.map

/***/ }),

/***/ "km5L":
/*!*******************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/dom/on.js ***!
  \*******************************************************************************************************************/
/*! exports provided: on */
/*! exports used: on */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return on; });
function on(element, eventName, callback, options) {
    element.addEventListener(eventName, callback, options);
    return function () { return element.removeEventListener(eventName, callback, options); };
}
//# sourceMappingURL=on.js.map

/***/ }),

/***/ "lE+F":
/*!******************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/focus.js ***!
  \******************************************************************************************************************/
/*! exports provided: getFirstFocusable, getLastFocusable, getFirstTabbable, getLastTabbable, focusFirstChild, getPreviousElement, getNextElement, isElementVisible, isElementVisibleAndNotHidden, isElementTabbable, isElementFocusZone, isElementFocusSubZone, doesElementContainFocus, shouldWrapFocus, focusAsync, getFocusableByIndexPath, getElementIndexPath */
/*! exports used: doesElementContainFocus, focusAsync, focusFirstChild, getElementIndexPath, getFirstFocusable, getFirstTabbable, getFocusableByIndexPath, getLastFocusable, getLastTabbable, getNextElement, getPreviousElement, isElementFocusSubZone, isElementFocusZone, isElementTabbable, isElementVisibleAndNotHidden, shouldWrapFocus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getFirstFocusable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getLastFocusable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getFirstTabbable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getLastTabbable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return focusFirstChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getPreviousElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getNextElement; });
/* unused harmony export isElementVisible */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return isElementVisibleAndNotHidden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return isElementTabbable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return isElementFocusZone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return isElementFocusSubZone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return doesElementContainFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return shouldWrapFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return focusAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getFocusableByIndexPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getElementIndexPath; });
/* harmony import */ var _dom_elementContainsAttribute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/elementContainsAttribute */ "u3Bb");
/* harmony import */ var _dom_elementContains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/elementContains */ "H5Ur");
/* harmony import */ var _dom_getParent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom/getParent */ "kujG");
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom/getWindow */ "NZSY");
/* harmony import */ var _dom_getDocument__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom/getDocument */ "41aL");





var IS_FOCUSABLE_ATTRIBUTE = 'data-is-focusable';
var IS_VISIBLE_ATTRIBUTE = 'data-is-visible';
var FOCUSZONE_ID_ATTRIBUTE = 'data-focuszone-id';
var FOCUSZONE_SUB_ATTRIBUTE = 'data-is-sub-focuszone';
/**
 * Gets the first focusable element.
 *
 * @public
 */
function getFirstFocusable(rootElement, currentElement, includeElementsInFocusZones, includeShadowRoots) {
    return getNextElement(rootElement, currentElement, true /*checkNode*/, false /*suppressParentTraversal*/, false /*suppressChildTraversal*/, includeElementsInFocusZones, undefined, undefined, undefined, includeShadowRoots);
}
/**
 * Gets the last focusable element.
 *
 * @public
 */
function getLastFocusable(rootElement, currentElement, includeElementsInFocusZones, includeShadowRoots) {
    return getPreviousElement(rootElement, currentElement, true /*checkNode*/, false /*suppressParentTraversal*/, true /*traverseChildren*/, includeElementsInFocusZones, undefined, undefined, includeShadowRoots);
}
/**
 * Gets the first tabbable element. (The difference between focusable and tabbable is that tabbable elements are
 * focusable elements that also have tabIndex != -1.)
 * @param rootElement - The parent element to search beneath.
 * @param currentElement - The descendant of rootElement to start the search at.  This element is the first one checked,
 * and iteration continues forward.  Typical use passes rootElement.firstChild.
 * @param includeElementsInFocusZones - true if traversal should go into FocusZone descendants.
 * @param checkNode - Include currentElement in search when true. Defaults to true.
 * @public
 */
function getFirstTabbable(rootElement, currentElement, includeElementsInFocusZones, checkNode, includeShadowRoots) {
    if (checkNode === void 0) { checkNode = true; }
    return getNextElement(rootElement, currentElement, checkNode, false /*suppressParentTraversal*/, false /*suppressChildTraversal*/, includeElementsInFocusZones, false /*allowFocusRoot*/, true /*tabbable*/, undefined, includeShadowRoots);
}
/**
 * Gets the last tabbable element. (The difference between focusable and tabbable is that tabbable elements are
 * focusable elements that also have tabIndex != -1.)
 * @param rootElement - The parent element to search beneath.
 * @param currentElement - The descendant of rootElement to start the search at.  This element is the first one checked,
 * and iteration continues in reverse.  Typical use passes rootElement.lastChild.
 * @param includeElementsInFocusZones - true if traversal should go into FocusZone descendants.
 * @param checkNode - Include currentElement in search when true. Defaults to true.
 * @public
 */
function getLastTabbable(rootElement, currentElement, includeElementsInFocusZones, checkNode, includeShadowRoots) {
    if (checkNode === void 0) { checkNode = true; }
    return getPreviousElement(rootElement, currentElement, checkNode, false /*suppressParentTraversal*/, true /*traverseChildren*/, includeElementsInFocusZones, false /*allowFocusRoot*/, true /*tabbable*/, includeShadowRoots);
}
/**
 * Attempts to focus the first focusable element that is a child or child's child of the rootElement.
 *
 * @public
 * @param rootElement - Element to start the search for a focusable child.
 * @param bypassHiddenElements - If true, focus will be not be set on hidden elements.
 * @returns True if focus was set, false if it was not.
 */
function focusFirstChild(rootElement, bypassHiddenElements, includeShadowRoots) {
    var element = getNextElement(rootElement, rootElement, true, false, false, true, undefined, undefined, bypassHiddenElements, includeShadowRoots);
    if (element) {
        focusAsync(element);
        return true;
    }
    return false;
}
/**
 * Traverse to find the previous element.
 * If tabbable is true, the element must have tabIndex != -1.
 *
 * @public
 */
function getPreviousElement(rootElement, currentElement, checkNode, suppressParentTraversal, traverseChildren, includeElementsInFocusZones, allowFocusRoot, tabbable, includeShadowRoots) {
    var _a;
    if (!currentElement || (!allowFocusRoot && currentElement === rootElement)) {
        return null;
    }
    var isCurrentElementVisible = isElementVisible(currentElement);
    // Check its children.
    if (traverseChildren &&
        isCurrentElementVisible &&
        (includeElementsInFocusZones || !(isElementFocusZone(currentElement) || isElementFocusSubZone(currentElement)))) {
        var lastElementChild = (currentElement.lastElementChild ||
            (includeShadowRoots && ((_a = currentElement.shadowRoot) === null || _a === void 0 ? void 0 : _a.lastElementChild)));
        var childMatch = getPreviousElement(rootElement, lastElementChild, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable, includeShadowRoots);
        if (childMatch) {
            if ((tabbable && isElementTabbable(childMatch, true, includeShadowRoots)) || !tabbable) {
                return childMatch;
            }
            var childMatchSiblingMatch = getPreviousElement(rootElement, childMatch.previousElementSibling, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable, includeShadowRoots);
            if (childMatchSiblingMatch) {
                return childMatchSiblingMatch;
            }
            var childMatchParent = childMatch.parentElement;
            // At this point if we have not found any potential matches
            // start looking at the rest of the subtree under the currentParent.
            // NOTE: We do not want to recurse here because doing so could
            // cause elements to get skipped.
            while (childMatchParent && childMatchParent !== currentElement) {
                var childMatchParentMatch = getPreviousElement(rootElement, childMatchParent.previousElementSibling, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable, includeShadowRoots);
                if (childMatchParentMatch) {
                    return childMatchParentMatch;
                }
                childMatchParent = childMatchParent.parentElement;
            }
        }
    }
    // Check the current node, if it's not the first traversal.
    if (checkNode && isCurrentElementVisible && isElementTabbable(currentElement, tabbable, includeShadowRoots)) {
        return currentElement;
    }
    // Check its previous sibling.
    var siblingMatch = getPreviousElement(rootElement, currentElement.previousElementSibling, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable, includeShadowRoots);
    if (siblingMatch) {
        return siblingMatch;
    }
    // Check its parent.
    if (!suppressParentTraversal) {
        return getPreviousElement(rootElement, currentElement.parentElement, true, false, false, includeElementsInFocusZones, allowFocusRoot, tabbable, includeShadowRoots);
    }
    return null;
}
/**
 * Traverse to find the next focusable element.
 * If tabbable is true, the element must have tabIndex != -1.
 *
 * @public
 * @param checkNode - Include currentElement in search when true.
 */
function getNextElement(rootElement, currentElement, checkNode, suppressParentTraversal, suppressChildTraversal, includeElementsInFocusZones, allowFocusRoot, tabbable, bypassHiddenElements, includeShadowRoots) {
    var _a;
    if (!currentElement || (currentElement === rootElement && suppressChildTraversal && !allowFocusRoot)) {
        return null;
    }
    var checkElementVisibility = bypassHiddenElements ? isElementVisibleAndNotHidden : isElementVisible;
    var isCurrentElementVisible = checkElementVisibility(currentElement);
    // Check the current node, if it's not the first traversal.
    if (checkNode && isCurrentElementVisible && isElementTabbable(currentElement, tabbable, includeShadowRoots)) {
        return currentElement;
    }
    // Check its children.
    if (!suppressChildTraversal &&
        isCurrentElementVisible &&
        (includeElementsInFocusZones || !(isElementFocusZone(currentElement) || isElementFocusSubZone(currentElement)))) {
        var firstElementchild = (currentElement.firstElementChild ||
            (includeShadowRoots && ((_a = currentElement.shadowRoot) === null || _a === void 0 ? void 0 : _a.firstElementChild)));
        var childMatch = getNextElement(rootElement, firstElementchild, true, true, false, includeElementsInFocusZones, allowFocusRoot, tabbable, bypassHiddenElements, includeShadowRoots);
        if (childMatch) {
            return childMatch;
        }
    }
    if (currentElement === rootElement) {
        return null;
    }
    // Check its sibling.
    var siblingMatch = getNextElement(rootElement, currentElement.nextElementSibling, true, true, false, includeElementsInFocusZones, allowFocusRoot, tabbable, bypassHiddenElements, includeShadowRoots);
    if (siblingMatch) {
        return siblingMatch;
    }
    if (!suppressParentTraversal) {
        return getNextElement(rootElement, currentElement.parentElement, false, false, true, includeElementsInFocusZones, allowFocusRoot, tabbable, bypassHiddenElements, includeShadowRoots);
    }
    return null;
}
/**
 * Determines if an element is visible.
 *
 * @public
 */
function isElementVisible(element) {
    // If the element is not valid, return false.
    if (!element || !element.getAttribute) {
        return false;
    }
    var visibilityAttribute = element.getAttribute(IS_VISIBLE_ATTRIBUTE);
    // If the element is explicitly marked with the visibility attribute, return that value as boolean.
    if (visibilityAttribute !== null && visibilityAttribute !== undefined) {
        return visibilityAttribute === 'true';
    }
    // Fallback to other methods of determining actual visibility.
    return (element.offsetHeight !== 0 ||
        element.offsetParent !== null ||
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        element.isVisible === true); // used as a workaround for testing.
}
/**
 * Determines if an element is visible and not hidden
 * @param element - Element to check
 * @returns Returns true if the given element is visible and not hidden
 *
 * @public
 */
function isElementVisibleAndNotHidden(element, win) {
    var theWin = win !== null && win !== void 0 ? win : Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_3__[/* getWindow */ "a"])();
    return (!!element &&
        isElementVisible(element) &&
        !element.hidden &&
        theWin.getComputedStyle(element).visibility !== 'hidden');
}
/**
 * Determines if an element can receive focus programmatically or via a mouse click.
 * If checkTabIndex is true, additionally checks to ensure the element can be focused with the tab key,
 * meaning tabIndex != -1.
 *
 * @public
 */
function isElementTabbable(element, checkTabIndex, checkShadowRoot) {
    if (checkShadowRoot === void 0) { checkShadowRoot = true; }
    // If this element is null or is disabled, it is not considered tabbable.
    if (!element || element.disabled) {
        return false;
    }
    var tabIndex = 0;
    var tabIndexAttributeValue = null;
    if (element && element.getAttribute) {
        tabIndexAttributeValue = element.getAttribute('tabIndex');
        if (tabIndexAttributeValue) {
            tabIndex = parseInt(tabIndexAttributeValue, 10);
        }
    }
    var isFocusableAttribute = element.getAttribute ? element.getAttribute(IS_FOCUSABLE_ATTRIBUTE) : null;
    var isTabIndexSet = tabIndexAttributeValue !== null && tabIndex >= 0;
    var delegatesFocus = checkShadowRoot && element.shadowRoot ? !!element.shadowRoot.delegatesFocus : false;
    var result = !!element &&
        isFocusableAttribute !== 'false' &&
        (element.tagName === 'A' ||
            element.tagName === 'BUTTON' ||
            element.tagName === 'INPUT' ||
            element.tagName === 'TEXTAREA' ||
            element.tagName === 'SELECT' ||
            isFocusableAttribute === 'true' ||
            isTabIndexSet ||
            delegatesFocus);
    return checkTabIndex ? tabIndex !== -1 && result : result;
}
/**
 * Determines if a given element is a focus zone.
 *
 * @public
 */
function isElementFocusZone(element) {
    return !!(element && element.getAttribute && !!element.getAttribute(FOCUSZONE_ID_ATTRIBUTE));
}
/**
 * Determines if a given element is a focus sub zone.
 *
 * @public
 */
function isElementFocusSubZone(element) {
    return !!(element && element.getAttribute && element.getAttribute(FOCUSZONE_SUB_ATTRIBUTE) === 'true');
}
/**
 * Determines if an element, or any of its children, contain focus.
 *
 * @public
 */
function doesElementContainFocus(element) {
    var doc = Object(_dom_getDocument__WEBPACK_IMPORTED_MODULE_4__[/* getDocument */ "a"])(element);
    var currentActiveElement = doc && doc.activeElement;
    if (currentActiveElement && Object(_dom_elementContains__WEBPACK_IMPORTED_MODULE_1__[/* elementContains */ "a"])(element, currentActiveElement)) {
        return true;
    }
    return false;
}
/**
 * Determines if an, or any of its ancestors, sepcificies that it doesn't want focus to wrap
 * @param element - element to start searching from
 * @param noWrapDataAttribute - the no wrap data attribute to match (either)
 * @returns true if focus should wrap, false otherwise
 */
function shouldWrapFocus(element, noWrapDataAttribute, doc) {
    var theDoc = doc !== null && doc !== void 0 ? doc : Object(_dom_getDocument__WEBPACK_IMPORTED_MODULE_4__[/* getDocument */ "a"])();
    return Object(_dom_elementContainsAttribute__WEBPACK_IMPORTED_MODULE_0__[/* elementContainsAttribute */ "a"])(element, noWrapDataAttribute, theDoc) === 'true' ? false : true;
}
var animationId = undefined;
/**
 * Sets focus to an element asynchronously. The focus will be set at the next browser repaint,
 * meaning it won't cause any extra recalculations. If more than one focusAsync is called during one frame,
 * only the latest called focusAsync element will actually be focused
 * @param element - The element to focus
 */
function focusAsync(element) {
    if (element) {
        var win = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_3__[/* getWindow */ "a"])(element);
        if (win) {
            // cancel any previous focus queues
            if (animationId !== undefined) {
                win.cancelAnimationFrame(animationId);
            }
            // element.focus() is a no-op if the element is no longer in the DOM, meaning this is always safe
            animationId = win.requestAnimationFrame(function () {
                element && element.focus();
                // We are done focusing for this frame, so reset the queued focus element
                animationId = undefined;
            });
        }
    }
}
/**
 * Finds the closest focusable element via an index path from a parent. See
 * `getElementIndexPath` for getting an index path from an element to a child.
 */
function getFocusableByIndexPath(parent, path) {
    var element = parent;
    for (var _i = 0, path_1 = path; _i < path_1.length; _i++) {
        var index = path_1[_i];
        var nextChild = element.children[Math.min(index, element.children.length - 1)];
        if (!nextChild) {
            break;
        }
        element = nextChild;
    }
    element =
        isElementTabbable(element) && isElementVisible(element)
            ? element
            : getNextElement(parent, element, true) || getPreviousElement(parent, element);
    return element;
}
/**
 * Finds the element index path from a parent element to a child element.
 *
 * If you had this node structure: "A has children [B, C] and C has child D",
 * the index path from A to D would be [1, 0], or `parent.chidren[1].children[0]`.
 */
function getElementIndexPath(fromElement, toElement) {
    var path = [];
    while (toElement && fromElement && toElement !== fromElement) {
        var parent_1 = Object(_dom_getParent__WEBPACK_IMPORTED_MODULE_2__[/* getParent */ "a"])(toElement, true);
        if (parent_1 === null) {
            return [];
        }
        path.unshift(Array.prototype.indexOf.call(parent_1.children, toElement));
        toElement = parent_1;
    }
    return path;
}
//# sourceMappingURL=focus.js.map

/***/ }),

/***/ "lgi8":
/*!********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/selection/Selection.js ***!
  \********************************************************************************************************************************/
/*! exports provided: Selection */
/*! exports used: Selection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Selection; });
/* harmony import */ var _Selection_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Selection.types */ "Imro");
/* harmony import */ var _EventGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../EventGroup */ "GBES");


/**
 * {@docCategory Selection}
 */
var Selection = /** @class */ (function () {
    /**
     * Create a new Selection. If `TItem` does not have a `key` property, you must provide an options
     * object with a `getKey` implementation. Providing options is optional otherwise.
     * (At most one `options` object is accepted.)
     */
    function Selection() {
        var options = []; // Otherwise, arguments require options with `getKey`.
        for (var _i = 0 // Otherwise, arguments require options with `getKey`.
        ; _i < arguments.length // Otherwise, arguments require options with `getKey`.
        ; _i++ // Otherwise, arguments require options with `getKey`.
        ) {
            options[_i] = arguments[_i]; // Otherwise, arguments require options with `getKey`.
        }
        var _a = options[0] || {}, onSelectionChanged = _a.onSelectionChanged, onItemsChanged = _a.onItemsChanged, getKey = _a.getKey, _b = _a.canSelectItem, canSelectItem = _b === void 0 ? function () { return true; } : _b, items = _a.items, _c = _a.selectionMode, selectionMode = _c === void 0 ? _Selection_types__WEBPACK_IMPORTED_MODULE_0__[/* SelectionMode */ "c"].multiple : _c;
        this.mode = selectionMode;
        this._getKey = getKey || defaultGetKey;
        this._changeEventSuppressionCount = 0;
        this._exemptedCount = 0;
        this._anchoredIndex = 0;
        this._unselectableCount = 0;
        this._onSelectionChanged = onSelectionChanged;
        this._onItemsChanged = onItemsChanged;
        this._canSelectItem = canSelectItem;
        this._keyToIndexMap = {};
        this._isModal = false;
        this.setItems(items || [], true);
        this.count = this.getSelectedCount();
    }
    Selection.prototype.canSelectItem = function (item, index) {
        if (typeof index === 'number' && index < 0) {
            return false;
        }
        return this._canSelectItem(item, index);
    };
    Selection.prototype.getKey = function (item, index) {
        var key = this._getKey(item, index);
        return typeof key === 'number' || key ? "".concat(key) : '';
    };
    Selection.prototype.setChangeEvents = function (isEnabled, suppressChange) {
        this._changeEventSuppressionCount += isEnabled ? -1 : 1;
        if (this._changeEventSuppressionCount === 0 && this._hasChanged) {
            this._hasChanged = false;
            if (!suppressChange) {
                this._change();
            }
        }
    };
    Selection.prototype.isModal = function () {
        return this._isModal;
    };
    Selection.prototype.setModal = function (isModal) {
        if (this._isModal !== isModal) {
            this.setChangeEvents(false);
            this._isModal = isModal;
            if (!isModal) {
                this.setAllSelected(false);
            }
            this._change();
            this.setChangeEvents(true);
        }
    };
    /**
     * Selection needs the items, call this method to set them. If the set
     * of items is the same, this will re-evaluate selection and index maps.
     * Otherwise, shouldClear should be set to true, so that selection is
     * cleared.
     */
    Selection.prototype.setItems = function (items, shouldClear) {
        if (shouldClear === void 0) { shouldClear = true; }
        var newKeyToIndexMap = {};
        var newUnselectableIndices = {};
        var hasSelectionChanged = false;
        this.setChangeEvents(false);
        // Reset the unselectable count.
        this._unselectableCount = 0;
        var haveItemsChanged = false;
        // Build lookup table for quick selection evaluation.
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (item) {
                var key = this.getKey(item, i);
                if (key) {
                    if (!haveItemsChanged && (!(key in this._keyToIndexMap) || this._keyToIndexMap[key] !== i)) {
                        haveItemsChanged = true;
                    }
                    newKeyToIndexMap[key] = i;
                }
            }
            newUnselectableIndices[i] = item && !this.canSelectItem(item);
            if (newUnselectableIndices[i]) {
                this._unselectableCount++;
            }
        }
        if (shouldClear || items.length === 0) {
            this._setAllSelected(false, true);
        }
        // Check the exemption list for discrepencies.
        var newExemptedIndicies = {};
        var newExemptedCount = 0;
        for (var indexProperty in this._exemptedIndices) {
            if (this._exemptedIndices.hasOwnProperty(indexProperty)) {
                var index = Number(indexProperty);
                var item = this._items[index];
                var exemptKey = item ? this.getKey(item, Number(index)) : undefined;
                var newIndex = exemptKey ? newKeyToIndexMap[exemptKey] : index;
                if (newIndex === undefined) {
                    // The item has likely been replaced or removed.
                    hasSelectionChanged = true;
                }
                else {
                    // We know the new index of the item. update the existing exemption table.
                    newExemptedIndicies[newIndex] = true;
                    newExemptedCount++;
                    hasSelectionChanged = hasSelectionChanged || newIndex !== index;
                }
            }
        }
        if (this._items && this._exemptedCount === 0 && items.length !== this._items.length && this._isAllSelected) {
            // If everything was selected but the number of items has changed, selection has changed.
            hasSelectionChanged = true;
        }
        if (!haveItemsChanged) {
            for (var _i = 0, _a = Object.keys(this._keyToIndexMap); _i < _a.length; _i++) {
                var key = _a[_i];
                if (!(key in newKeyToIndexMap)) {
                    haveItemsChanged = true;
                    break;
                }
            }
        }
        this._exemptedIndices = newExemptedIndicies;
        this._exemptedCount = newExemptedCount;
        this._keyToIndexMap = newKeyToIndexMap;
        this._unselectableIndices = newUnselectableIndices;
        this._items = items;
        this._selectedItems = null;
        if (hasSelectionChanged) {
            this._updateCount();
        }
        if (haveItemsChanged) {
            _EventGroup__WEBPACK_IMPORTED_MODULE_1__[/* EventGroup */ "a"].raise(this, _Selection_types__WEBPACK_IMPORTED_MODULE_0__[/* SELECTION_ITEMS_CHANGE */ "b"]);
            if (this._onItemsChanged) {
                this._onItemsChanged();
            }
        }
        if (hasSelectionChanged) {
            this._change();
        }
        this.setChangeEvents(true);
    };
    Selection.prototype.getItems = function () {
        return this._items;
    };
    Selection.prototype.getSelection = function () {
        if (!this._selectedItems) {
            this._selectedItems = [];
            var items = this._items;
            if (items) {
                for (var i = 0; i < items.length; i++) {
                    if (this.isIndexSelected(i)) {
                        this._selectedItems.push(items[i]);
                    }
                }
            }
        }
        return this._selectedItems;
    };
    Selection.prototype.getSelectedCount = function () {
        return this._isAllSelected
            ? this._items.length - this._exemptedCount - this._unselectableCount
            : this._exemptedCount;
    };
    Selection.prototype.getSelectedIndices = function () {
        if (!this._selectedIndices) {
            this._selectedIndices = [];
            var items = this._items;
            if (items) {
                for (var i = 0; i < items.length; i++) {
                    if (this.isIndexSelected(i)) {
                        this._selectedIndices.push(i);
                    }
                }
            }
        }
        return this._selectedIndices;
    };
    Selection.prototype.getItemIndex = function (key) {
        var index = this._keyToIndexMap[key];
        return index !== null && index !== void 0 ? index : -1;
    };
    Selection.prototype.isRangeSelected = function (fromIndex, count) {
        if (count === 0) {
            return false;
        }
        var endIndex = fromIndex + count;
        for (var i = fromIndex; i < endIndex; i++) {
            if (!this.isIndexSelected(i)) {
                return false;
            }
        }
        return true;
    };
    Selection.prototype.isAllSelected = function () {
        var selectableCount = this._items.length - this._unselectableCount;
        // In single mode, we can only have a max of 1 item.
        if (this.mode === _Selection_types__WEBPACK_IMPORTED_MODULE_0__[/* SelectionMode */ "c"].single) {
            selectableCount = Math.min(selectableCount, 1);
        }
        return ((this.count > 0 && this._isAllSelected && this._exemptedCount === 0) ||
            (!this._isAllSelected && this._exemptedCount === selectableCount && selectableCount > 0));
    };
    Selection.prototype.isKeySelected = function (key) {
        var index = this._keyToIndexMap[key];
        return this.isIndexSelected(index);
    };
    Selection.prototype.isIndexSelected = function (index) {
        return !!((this.count > 0 && this._isAllSelected && !this._exemptedIndices[index] && !this._unselectableIndices[index]) ||
            (!this._isAllSelected && this._exemptedIndices[index]));
    };
    Selection.prototype.setAllSelected = function (isAllSelected) {
        if (isAllSelected && this.mode !== _Selection_types__WEBPACK_IMPORTED_MODULE_0__[/* SelectionMode */ "c"].multiple) {
            return;
        }
        var selectableCount = this._items ? this._items.length - this._unselectableCount : 0;
        this.setChangeEvents(false);
        if (selectableCount > 0 && (this._exemptedCount > 0 || isAllSelected !== this._isAllSelected)) {
            this._exemptedIndices = {};
            if (isAllSelected !== this._isAllSelected || this._exemptedCount > 0) {
                this._exemptedCount = 0;
                this._isAllSelected = isAllSelected;
                this._change();
            }
            this._updateCount();
        }
        this.setChangeEvents(true);
    };
    Selection.prototype.setKeySelected = function (key, isSelected, shouldAnchor) {
        var index = this._keyToIndexMap[key];
        if (index >= 0) {
            this.setIndexSelected(index, isSelected, shouldAnchor);
        }
    };
    Selection.prototype.setIndexSelected = function (index, isSelected, shouldAnchor) {
        if (this.mode === _Selection_types__WEBPACK_IMPORTED_MODULE_0__[/* SelectionMode */ "c"].none) {
            return;
        }
        // Clamp the index.
        index = Math.min(Math.max(0, index), this._items.length - 1);
        // No-op on out of bounds selections.
        if (index < 0 || index >= this._items.length) {
            return;
        }
        this.setChangeEvents(false);
        var isExempt = this._exemptedIndices[index];
        var canSelect = !this._unselectableIndices[index];
        if (canSelect) {
            if (isSelected && this.mode === _Selection_types__WEBPACK_IMPORTED_MODULE_0__[/* SelectionMode */ "c"].single) {
                // If this is single-select, the previous selection should be removed.
                this._setAllSelected(false, true);
            }
            // Determine if we need to remove the exemption.
            if (isExempt && ((isSelected && this._isAllSelected) || (!isSelected && !this._isAllSelected))) {
                delete this._exemptedIndices[index];
                this._exemptedCount--;
            }
            // Determine if we need to add the exemption.
            if (!isExempt && ((isSelected && !this._isAllSelected) || (!isSelected && this._isAllSelected))) {
                this._exemptedIndices[index] = true;
                this._exemptedCount++;
            }
            if (shouldAnchor) {
                this._anchoredIndex = index;
            }
        }
        this._updateCount();
        this.setChangeEvents(true);
    };
    Selection.prototype.setRangeSelected = function (fromIndex, count, isSelected, shouldAnchor) {
        if (this.mode === _Selection_types__WEBPACK_IMPORTED_MODULE_0__[/* SelectionMode */ "c"].none) {
            return;
        }
        // Clamp the index.
        fromIndex = Math.min(Math.max(0, fromIndex), this._items.length - 1);
        // Clamp the range.
        count = Math.min(Math.max(0, count), this._items.length - fromIndex);
        // No-op on out of bounds selections.
        if (fromIndex < 0 || fromIndex >= this._items.length || count === 0) {
            return;
        }
        this.setChangeEvents(false);
        var anchorIndex = this._anchoredIndex || 0;
        var startIndex = fromIndex;
        var endIndex = fromIndex + count - 1;
        var newAnchorIndex = anchorIndex >= endIndex ? startIndex : endIndex;
        for (; startIndex <= endIndex; startIndex++) {
            this.setIndexSelected(startIndex, isSelected, shouldAnchor ? startIndex === newAnchorIndex : false);
        }
        this.setChangeEvents(true);
    };
    Selection.prototype.selectToKey = function (key, clearSelection) {
        this.selectToIndex(this._keyToIndexMap[key], clearSelection);
    };
    Selection.prototype.selectToRange = function (fromIndex, count, clearSelection) {
        if (this.mode === _Selection_types__WEBPACK_IMPORTED_MODULE_0__[/* SelectionMode */ "c"].none) {
            return;
        }
        if (this.mode === _Selection_types__WEBPACK_IMPORTED_MODULE_0__[/* SelectionMode */ "c"].single) {
            if (count === 1) {
                this.setIndexSelected(fromIndex, true, true);
            }
            return;
        }
        var anchorIndex = this._anchoredIndex || 0;
        var startIndex = Math.min(fromIndex, anchorIndex);
        var endIndex = Math.max(fromIndex + count - 1, anchorIndex);
        this.setChangeEvents(false);
        if (clearSelection) {
            this._setAllSelected(false, true);
        }
        for (; startIndex <= endIndex; startIndex++) {
            this.setIndexSelected(startIndex, true, false);
        }
        this.setChangeEvents(true);
    };
    Selection.prototype.selectToIndex = function (index, clearSelection) {
        if (this.mode === _Selection_types__WEBPACK_IMPORTED_MODULE_0__[/* SelectionMode */ "c"].none) {
            return;
        }
        if (this.mode === _Selection_types__WEBPACK_IMPORTED_MODULE_0__[/* SelectionMode */ "c"].single) {
            this.setIndexSelected(index, true, true);
            return;
        }
        var anchorIndex = this._anchoredIndex || 0;
        var startIndex = Math.min(index, anchorIndex);
        var endIndex = Math.max(index, anchorIndex);
        this.setChangeEvents(false);
        if (clearSelection) {
            this._setAllSelected(false, true);
        }
        for (; startIndex <= endIndex; startIndex++) {
            this.setIndexSelected(startIndex, true, false);
        }
        this.setChangeEvents(true);
    };
    Selection.prototype.toggleAllSelected = function () {
        this.setAllSelected(!this.isAllSelected());
    };
    Selection.prototype.toggleKeySelected = function (key) {
        this.setKeySelected(key, !this.isKeySelected(key), true);
    };
    Selection.prototype.toggleIndexSelected = function (index) {
        this.setIndexSelected(index, !this.isIndexSelected(index), true);
    };
    Selection.prototype.toggleRangeSelected = function (fromIndex, count) {
        if (this.mode === _Selection_types__WEBPACK_IMPORTED_MODULE_0__[/* SelectionMode */ "c"].none) {
            return;
        }
        var isRangeSelected = this.isRangeSelected(fromIndex, count);
        var endIndex = fromIndex + count;
        if (this.mode === _Selection_types__WEBPACK_IMPORTED_MODULE_0__[/* SelectionMode */ "c"].single && count > 1) {
            return;
        }
        this.setChangeEvents(false);
        for (var i = fromIndex; i < endIndex; i++) {
            this.setIndexSelected(i, !isRangeSelected, false);
        }
        this.setChangeEvents(true);
    };
    Selection.prototype._updateCount = function (preserveModalState) {
        if (preserveModalState === void 0) { preserveModalState = false; }
        var count = this.getSelectedCount();
        if (count !== this.count) {
            this.count = count;
            this._change();
        }
        if (!this.count && !preserveModalState) {
            this.setModal(false);
        }
    };
    Selection.prototype._setAllSelected = function (isAllSelected, preserveModalState) {
        if (preserveModalState === void 0) { preserveModalState = false; }
        if (isAllSelected && this.mode !== _Selection_types__WEBPACK_IMPORTED_MODULE_0__[/* SelectionMode */ "c"].multiple) {
            return;
        }
        var selectableCount = this._items ? this._items.length - this._unselectableCount : 0;
        this.setChangeEvents(false);
        if (selectableCount > 0 && (this._exemptedCount > 0 || isAllSelected !== this._isAllSelected)) {
            this._exemptedIndices = {};
            if (isAllSelected !== this._isAllSelected || this._exemptedCount > 0) {
                this._exemptedCount = 0;
                this._isAllSelected = isAllSelected;
                this._change();
            }
            this._updateCount(preserveModalState);
        }
        this.setChangeEvents(true);
    };
    Selection.prototype._change = function () {
        if (this._changeEventSuppressionCount === 0) {
            this._selectedItems = null;
            this._selectedIndices = undefined;
            _EventGroup__WEBPACK_IMPORTED_MODULE_1__[/* EventGroup */ "a"].raise(this, _Selection_types__WEBPACK_IMPORTED_MODULE_0__[/* SELECTION_CHANGE */ "a"]);
            if (this._onSelectionChanged) {
                this._onSelectionChanged();
            }
        }
        else {
            this._hasChanged = true;
        }
    };
    return Selection;
}());

function defaultGetKey(item, index) {
    // 0 may be used as a key
    var _a = (item || {}).key, key = _a === void 0 ? "".concat(index) : _a;
    return key;
}
//# sourceMappingURL=Selection.js.map

/***/ }),

/***/ "mlc2":
/*!*************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/shadowDom/hooks/useAdoptedStylesheet.js ***!
  \*************************************************************************************************************************************************/
/*! exports provided: useAdoptedStylesheet, useAdoptedStylesheetEx */
/*! exports used: useAdoptedStylesheet, useAdoptedStylesheetEx */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useAdoptedStylesheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useAdoptedStylesheetEx; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/merge-styles */ "qU9U");
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/merge-styles */ "K+Ry");
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/merge-styles */ "lSY2");
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/merge-styles */ "HhsF");
/* harmony import */ var _fluentui_react_window_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react-window-provider */ "7R02");
/* harmony import */ var _useMergeStylesRootStylesheets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./useMergeStylesRootStylesheets */ "NYq4");
/* harmony import */ var _useMergeStylesShadowRoot__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useMergeStylesShadowRoot */ "ew1g");






/**
 * Use adopted stylesheets in the parent shadow root.
 */
var useAdoptedStylesheet = function (stylesheetKey) {
    var shadowCtx = Object(_useMergeStylesShadowRoot__WEBPACK_IMPORTED_MODULE_8__[/* useMergeStylesShadowRootContext */ "b"])();
    var rootMergeStyles = Object(_useMergeStylesRootStylesheets__WEBPACK_IMPORTED_MODULE_7__[/* useMergeStylesRootStylesheets */ "a"])();
    var win = Object(_fluentui_react_window_provider__WEBPACK_IMPORTED_MODULE_6__[/* useWindow */ "c"])();
    return useAdoptedStylesheetEx(stylesheetKey, shadowCtx, rootMergeStyles, win);
};
/**
 * Optimization for specific cases like nested customizables.
 */
var useAdoptedStylesheetEx = function (stylesheetKey, shadowCtx, rootMergeStyles, win) {
    var polyfillInsertListners = react__WEBPACK_IMPORTED_MODULE_1__["useRef"]({});
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
        if (!shadowCtx) {
            return;
        }
        var polyfillListeners = polyfillInsertListners.current;
        polyfillInsertListners.current = {};
        return function () {
            Object.keys(polyfillListeners).forEach(function (key) {
                polyfillListeners[key]();
            });
        };
    }, [win, stylesheetKey, shadowCtx]);
    if (!shadowCtx) {
        return false;
    }
    if (shadowCtx.shadowRoot && !shadowCtx.stylesheets.has(stylesheetKey)) {
        var adoptableStyleSheet = rootMergeStyles.get(stylesheetKey);
        if (adoptableStyleSheet && (win === null || win === void 0 ? void 0 : win.document)) {
            adoptSheet(shadowCtx, win.document, stylesheetKey, adoptableStyleSheet, polyfillInsertListners.current);
        }
    }
    return true;
};
var updatePolyfillSheet = function (shadowCtx, stylesheetKey, rule) {
    var shadowRoot = shadowCtx.shadowRoot;
    var style = shadowRoot.querySelector("[data-merge-styles-stylesheet-key=\"".concat(stylesheetKey, "\"]"));
    if (style === null || style === void 0 ? void 0 : style.sheet) {
        style.sheet.insertRule(rule);
    }
};
var adoptSheet = function (shadowCtx, doc, stylesheetKey, stylesheet, listenerRef) {
    var _a, _b, _c, _d, _e;
    var shadowRoot = shadowCtx.shadowRoot;
    shadowCtx.stylesheets.set(stylesheetKey, stylesheet);
    if (_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_2__[/* SUPPORTS_CONSTRUCTABLE_STYLESHEETS */ "a"]) {
        // Maintain the sort order of Fluent style sheets
        var prevSheets = shadowRoot.adoptedStyleSheets;
        var i = prevSheets.length;
        var found = i === 0;
        while (i >= 0 && !found) {
            i--;
            var prevSheet = prevSheets[i];
            var prevSortOrder = (_b = (_a = prevSheet.metadata) === null || _a === void 0 ? void 0 : _a.sortOrder) !== null && _b !== void 0 ? _b : 0;
            var sheetSortOrder = (_d = (_c = stylesheet.metadata) === null || _c === void 0 ? void 0 : _c.sortOrder) !== null && _d !== void 0 ? _d : 0;
            if (prevSheet.bucketName === 'merge-styles' && prevSortOrder < sheetSortOrder) {
                found = true;
            }
        }
        if (_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_2__[/* SUPPORTS_MODIFYING_ADOPTED_STYLESHEETS */ "b"]) {
            // The current spec allows the `adoptedStyleSheets` array to be modified.
            // Previous versions of the spec required a new array to be created.
            // For more details see: https://github.com/microsoft/fast/pull/6703
            shadowRoot.adoptedStyleSheets.splice(i + 1, 0, stylesheet);
        }
        else {
            shadowRoot.adoptedStyleSheets = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spreadArray */ "f"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spreadArray */ "f"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spreadArray */ "f"])([], shadowRoot.adoptedStyleSheets.slice(0, i + 1), true), [
                stylesheet
            ], false), shadowRoot.adoptedStyleSheets.slice(i + 1), true);
        }
    }
    else {
        var style = doc.createElement('style');
        style.setAttribute('data-merge-styles-stylesheet-key', stylesheetKey);
        var otherStyles = shadowRoot.querySelectorAll('[data-merge-styles-stylesheet-key]');
        if (otherStyles.length > 0) {
            shadowRoot.insertBefore(style, otherStyles[otherStyles.length - 1].nextSibling);
        }
        else {
            shadowRoot.insertBefore(style, shadowRoot.firstChild);
        }
        if (style.sheet) {
            Object(_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_3__[/* cloneCSSStyleSheet */ "a"])(stylesheet, style.sheet);
            if (!listenerRef[stylesheetKey]) {
                var onInsert = function (_a) {
                    var key = _a.key, rule = _a.rule;
                    if (key === stylesheetKey) {
                        if (shadowCtx && rule) {
                            updatePolyfillSheet(shadowCtx, key, rule);
                        }
                    }
                };
                var polyfillSheet = _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_4__[/* Stylesheet */ "c"].getInstance(Object(_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_5__[/* makeShadowConfig */ "e"])(stylesheetKey, true, (_e = doc.defaultView) !== null && _e !== void 0 ? _e : undefined));
                listenerRef[stylesheetKey] = polyfillSheet.onInsertRule(onInsert);
            }
        }
    }
};
//# sourceMappingURL=useAdoptedStylesheet.js.map

/***/ }),

/***/ "obGf":
/*!**************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/useFocusRects.js ***!
  \**************************************************************************************************************************/
/*! exports provided: FocusRectsContext, useFocusRects, FocusRects */
/*! exports used: FocusRects, FocusRectsContext, useFocusRects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FocusRectsContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return useFocusRects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FocusRects; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/getWindow */ "NZSY");
/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keyboard */ "gDO5");
/* harmony import */ var _setFocusVisibility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setFocusVisibility */ "zRON");




var mountCounters = new WeakMap();
var callbackMap = new WeakMap();
function setMountCounters(key, delta) {
    var newValue;
    var currValue = mountCounters.get(key);
    if (currValue) {
        newValue = currValue + delta;
    }
    else {
        newValue = 1;
    }
    mountCounters.set(key, newValue);
    return newValue;
}
function setCallbackMap(context) {
    var callbacks = callbackMap.get(context);
    if (callbacks) {
        return callbacks;
    }
    var onMouseDown = function (ev) { return _onMouseDown(ev, context.registeredProviders); };
    var onPointerDown = function (ev) { return _onPointerDown(ev, context.registeredProviders); };
    var onKeyDown = function (ev) { return _onKeyDown(ev, context.registeredProviders); };
    var onKeyUp = function (ev) { return _onKeyUp(ev, context.registeredProviders); };
    callbacks = { onMouseDown: onMouseDown, onPointerDown: onPointerDown, onKeyDown: onKeyDown, onKeyUp: onKeyUp };
    callbackMap.set(context, callbacks);
    return callbacks;
}
var FocusRectsContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"](undefined);
/**
 * Initializes the logic which:
 *
 * 1. Subscribes keydown, keyup, mousedown and pointerdown events. (It will only do it once for the current element of
 *    the FocusRectsContext providerRef or once per window if no such element is provided via context, so it's safe to
 *    call this method multiple times.)
 * 2. When the user presses triggers a keydown or keyup event via directional keyboard keys, adds the
 *    'ms-Fabric--isFocusVisible' classname to the current element of the FocusRectsContext providerRef or the document
 *    body if no such element is provided via context, and removes the 'ms-Fabric-isFocusHidden' classname.
 * 3. When the user triggers a mousedown or pointerdown event, adds the 'ms-Fabric-isFocusHidden' classname to the
 *    current element of the FocusRectsContext providerRef or the document body if no such element is provided via
 *    context, and removes the 'ms-Fabric--isFocusVisible' classname.
 *
 * This logic allows components on the page to conditionally render focus treatments based on
 * the existence of global classnames, which simplifies logic overall.
 *
 * @param rootRef - A Ref object. Focus rectangle can be applied on itself and all its children.
 */
function useFocusRects(rootRef) {
    var context = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](FocusRectsContext);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        var _a, _b, _c, _d;
        var win = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_1__[/* getWindow */ "a"])(rootRef === null || rootRef === void 0 ? void 0 : rootRef.current);
        if (!win || ((_a = win.FabricConfig) === null || _a === void 0 ? void 0 : _a.disableFocusRects) === true) {
            return undefined;
        }
        var el = win;
        var onMouseDown;
        var onPointerDown;
        var onKeyDown;
        var onKeyUp;
        if (((_b = context === null || context === void 0 ? void 0 : context.providerRef) === null || _b === void 0 ? void 0 : _b.current) &&
            ((_d = (_c = context === null || context === void 0 ? void 0 : context.providerRef) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.addEventListener)) {
            el = context.providerRef.current;
            // The NOINLINE directive tells terser not to move the setCallbackMap implementation into the call site during
            // minification.
            // This prevents the function from capturing additional variables in the closure, which can cause memory leaks.
            var callbacks = /*@__NOINLINE__*/ setCallbackMap(context);
            onMouseDown = callbacks.onMouseDown;
            onPointerDown = callbacks.onPointerDown;
            onKeyDown = callbacks.onKeyDown;
            onKeyUp = callbacks.onKeyUp;
        }
        else {
            onMouseDown = _onMouseDown;
            onPointerDown = _onPointerDown;
            onKeyDown = _onKeyDown;
            onKeyUp = _onKeyUp;
        }
        var count = setMountCounters(el, 1);
        if (count <= 1) {
            el.addEventListener('mousedown', onMouseDown, true);
            el.addEventListener('pointerdown', onPointerDown, true);
            el.addEventListener('keydown', onKeyDown, true);
            el.addEventListener('keyup', onKeyUp, true);
        }
        return function () {
            var _a;
            if (!win || ((_a = win.FabricConfig) === null || _a === void 0 ? void 0 : _a.disableFocusRects) === true) {
                return;
            }
            count = setMountCounters(el, -1);
            if (count === 0) {
                el.removeEventListener('mousedown', onMouseDown, true);
                el.removeEventListener('pointerdown', onPointerDown, true);
                el.removeEventListener('keydown', onKeyDown, true);
                el.removeEventListener('keyup', onKeyUp, true);
            }
        };
    }, [context, rootRef]);
}
/**
 * Function Component wrapper which enables calling `useFocusRects` hook.
 * Renders nothing.
 */
var FocusRects = function (props) {
    useFocusRects(props.rootRef);
    return null;
};
function _onMouseDown(ev, registeredProviders) {
    Object(_setFocusVisibility__WEBPACK_IMPORTED_MODULE_3__[/* setFocusVisibility */ "b"])(false, ev.target, registeredProviders);
}
function _onPointerDown(ev, registeredProviders) {
    if (ev.pointerType !== 'mouse') {
        Object(_setFocusVisibility__WEBPACK_IMPORTED_MODULE_3__[/* setFocusVisibility */ "b"])(false, ev.target, registeredProviders);
    }
}
// You need both a keydown and a keyup listener that sets focus visibility to true to handle two distinct scenarios when
// attaching the listeners and classnames to the provider instead of the document body.
// If you only have a keydown listener, then the focus rectangles will not show when moving from outside of the provider
// to inside it. That is why a keyup listener is needed, since it will always trigger after the focus event is fired.
// If you only have a keyup listener, then the focus rectangles will not show moving between different tabbable elements
// if the tab key is pressed without being released. That's is why we need a keydown listener, since it will trigger for
// every element that is being tabbed into.
// This works because `classList.add` is smart and will not duplicate a classname that already exists on the classList
// when focus visibility is turned on.
function _onKeyDown(ev, registeredProviders) {
    // eslint-disable-next-line deprecation/deprecation
    if (Object(_keyboard__WEBPACK_IMPORTED_MODULE_2__[/* isDirectionalKeyCode */ "a"])(ev.which)) {
        Object(_setFocusVisibility__WEBPACK_IMPORTED_MODULE_3__[/* setFocusVisibility */ "b"])(true, ev.target, registeredProviders);
    }
}
function _onKeyUp(ev, registeredProviders) {
    // eslint-disable-next-line deprecation/deprecation
    if (Object(_keyboard__WEBPACK_IMPORTED_MODULE_2__[/* isDirectionalKeyCode */ "a"])(ev.which)) {
        Object(_setFocusVisibility__WEBPACK_IMPORTED_MODULE_3__[/* setFocusVisibility */ "b"])(true, ev.target, registeredProviders);
    }
}
//# sourceMappingURL=useFocusRects.js.map

/***/ }),

/***/ "pLOS":
/*!************************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/shadowDom/contexts/MergeStylesShadowRootContext.js ***!
  \************************************************************************************************************************************************************/
/*! exports provided: MergeStylesShadowRootContext, MergeStylesShadowRootProvider */
/*! exports used: MergeStylesShadowRootContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MergeStylesShadowRootContext; });
/* unused harmony export MergeStylesShadowRootProvider */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/merge-styles */ "HhsF");
/* harmony import */ var _hooks_useMergeStylesHooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useMergeStylesHooks */ "12gh");




var MergeStylesShadowRootContext = react__WEBPACK_IMPORTED_MODULE_1__["createContext"](undefined);
/**
 * Context for a shadow root.
 */
var MergeStylesShadowRootProvider = function (_a) {
    var shadowRoot = _a.shadowRoot, props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __rest */ "e"])(_a, ["shadowRoot"]);
    var value = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
        return {
            stylesheets: new Map(),
            shadowRoot: shadowRoot,
        };
    }, [shadowRoot]);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](MergeStylesShadowRootContext.Provider, Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({ value: value }, props),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](GlobalStyles, null),
        props.children));
};
var GlobalStyles = function (props) {
    var useAdoptedStylesheet = Object(_hooks_useMergeStylesHooks__WEBPACK_IMPORTED_MODULE_3__[/* useMergeStylesHooks */ "a"])().useAdoptedStylesheet;
    useAdoptedStylesheet(_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_2__[/* GLOBAL_STYLESHEET_KEY */ "b"]);
    return null;
};
//# sourceMappingURL=MergeStylesShadowRootContext.js.map

/***/ }),

/***/ "pQvb":
/*!*********************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/customizations/CustomizerContext.js ***!
  \*********************************************************************************************************************************************/
/*! exports provided: CustomizerContext */
/*! exports used: CustomizerContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomizerContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var CustomizerContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"]({
    customizations: {
        inCustomizerContext: false,
        settings: {},
        scopedSettings: {},
    },
});
//# sourceMappingURL=CustomizerContext.js.map

/***/ }),

/***/ "pSSv":
/*!*******************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/string.js ***!
  \*******************************************************************************************************************/
/*! exports provided: format */
/*! exports used: format */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return format; });
// Regex that finds { and } so they can be removed on a lookup for string format
var FORMAT_ARGS_REGEX = /[\{\}]/g;
// Regex that finds {#} so it can be replaced by the arguments in string format
var FORMAT_REGEX = /\{\d+\}/g;
/**
 * String format method, used for scenarios where at runtime you
 * need to evaluate a formatted string given a tokenized string. This
 * usually only is needed in localization scenarios.

 * @example
 * ```tsx
 * "I love {0} every {1}".format("CXP")
 * ```
 * will result in a Debug Exception.
 *
 * @public
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function format(s) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    var args = values;
    // Callback match function
    function replaceFunc(match) {
        // looks up in the args
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var replacement = args[match.replace(FORMAT_ARGS_REGEX, '')];
        // catches undefined in nondebug and null in debug and nondebug
        if (replacement === null || replacement === undefined) {
            replacement = '';
        }
        return replacement;
    }
    return s.replace(FORMAT_REGEX, replaceFunc);
}
//# sourceMappingURL=string.js.map

/***/ }),

/***/ "q2Xa":
/*!***************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/warn/warnMutuallyExclusive.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: warnMutuallyExclusive */
/*! exports used: warnMutuallyExclusive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return warnMutuallyExclusive; });
/* harmony import */ var _warn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warn */ "CDZR");

/**
 * Warns when two props which are mutually exclusive are both being used.
 *
 * @public
 * @param componentName - The name of the component being used.
 * @param props - The props passed into the component.
 * @param exclusiveMap - A map where the key is a parameter, and the value is the other parameter.
 */
function warnMutuallyExclusive(componentName, props, exclusiveMap) {
    if (true) {
        for (var propName in exclusiveMap) {
            if (props && props[propName] !== undefined) {
                var propInExclusiveMapValue = exclusiveMap[propName];
                if (propInExclusiveMapValue && props[propInExclusiveMapValue] !== undefined) {
                    Object(_warn__WEBPACK_IMPORTED_MODULE_0__[/* warn */ "a"])("".concat(componentName, " property '").concat(propName, "' is mutually exclusive with '").concat(exclusiveMap[propName], "'. ") +
                        "Use one or the other.");
                }
            }
        }
    }
}
//# sourceMappingURL=warnMutuallyExclusive.js.map

/***/ }),

/***/ "tS8V":
/*!*********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/initials.js ***!
  \*********************************************************************************************************************/
/*! exports provided: getInitials */
/*! exports used: getInitials */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getInitials; });
/**
 * Regular expressions matching characters to ignore when calculating the initials.
 */
/**
 * Regular expression matching characters within various types of enclosures, including the enclosures themselves
 *  so for example, (xyz) [xyz] {xyz} <xyz> all would be ignored
 */
var UNWANTED_ENCLOSURES_REGEX = /[\(\[\{\<][^\)\]\}\>]*[\)\]\}\>]/g;
/**
 * Regular expression matching special ASCII characters except space, plus some unicode special characters.
 * Applies after unwanted enclosures have been removed
 */
var UNWANTED_CHARS_REGEX = /[\0-\u001F\!-/:-@\[-`\{-\u00BF\u0250-\u036F\uD800-\uFFFF]/g;
/**
 * Regular expression matching phone numbers. Applied after chars matching UNWANTED_CHARS_REGEX have been removed
 * and number has been trimmed for whitespaces
 */
var PHONENUMBER_REGEX = /^\d+[\d\s]*(:?ext|x|)\s*\d+$/i;
/** Regular expression matching one or more spaces. */
var MULTIPLE_WHITESPACES_REGEX = /\s+/g;
/**
 * Regular expression matching languages for which we currently don't support initials.
 * Arabic:   Arabic, Arabic Supplement, Arabic Extended-A.
 * Korean:   Hangul Jamo, Hangul Compatibility Jamo, Hangul Jamo Extended-A, Hangul Syllables, Hangul Jamo Extended-B.
 * Japanese: Hiragana, Katakana.
 * CJK:      CJK Unified Ideographs Extension A, CJK Unified Ideographs, CJK Compatibility Ideographs,
 *             CJK Unified Ideographs Extension B
 */
var UNSUPPORTED_TEXT_REGEX = 
// eslint-disable-next-line @fluentui/max-len
/[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uAC00-\uD7AF\uD7B0-\uD7FF\u3040-\u309F\u30A0-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF]|[\uD840-\uD869][\uDC00-\uDED6]/;
function getInitialsLatin(displayName, isRtl) {
    var initials = '';
    var splits = displayName.split(' ');
    if (splits.length === 2) {
        initials += splits[0].charAt(0).toUpperCase();
        initials += splits[1].charAt(0).toUpperCase();
    }
    else if (splits.length === 3) {
        initials += splits[0].charAt(0).toUpperCase();
        initials += splits[2].charAt(0).toUpperCase();
    }
    else if (splits.length !== 0) {
        initials += splits[0].charAt(0).toUpperCase();
    }
    if (isRtl && initials.length > 1) {
        return initials.charAt(1) + initials.charAt(0);
    }
    return initials;
}
function cleanupDisplayName(displayName) {
    displayName = displayName.replace(UNWANTED_ENCLOSURES_REGEX, '');
    displayName = displayName.replace(UNWANTED_CHARS_REGEX, '');
    displayName = displayName.replace(MULTIPLE_WHITESPACES_REGEX, ' ');
    displayName = displayName.trim();
    return displayName;
}
/**
 * Get (up to 2 characters) initials based on display name of the persona.
 *
 * @public
 */
function getInitials(displayName, isRtl, allowPhoneInitials) {
    if (!displayName) {
        return '';
    }
    displayName = cleanupDisplayName(displayName);
    // For names containing CJK characters, and phone numbers, we don't display initials
    if (UNSUPPORTED_TEXT_REGEX.test(displayName) || (!allowPhoneInitials && PHONENUMBER_REGEX.test(displayName))) {
        return '';
    }
    return getInitialsLatin(displayName, isRtl);
}
//# sourceMappingURL=initials.js.map

/***/ }),

/***/ "uj5P":
/*!*************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/hoistStatics.js ***!
  \*************************************************************************************************************************/
/*! exports provided: hoistStatics */
/*! exports used: hoistStatics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hoistStatics; });
/**
 * Allows you to hoist static functions in components.
 * Created for the purpose of fixing broken static functions in classes
 * that utilize decorators.
 *
 * @public
 * @param source - The object where the methods are hoisted from.
 * @param dest - The object to hoist the methods onto.
 * @returns The dest object with methods added
 */
function hoistStatics(source, dest) {
    for (var name_1 in source) {
        if (source.hasOwnProperty(name_1)) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            dest[name_1] = source[name_1];
        }
    }
    return dest;
}
//# sourceMappingURL=hoistStatics.js.map

/***/ }),

/***/ "uxh7":
/*!**********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/warn/warnDeprecations.js ***!
  \**********************************************************************************************************************************/
/*! exports provided: warnDeprecations */
/*! exports used: warnDeprecations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return warnDeprecations; });
/* harmony import */ var _warn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warn */ "CDZR");

/**
 * Warns when a deprecated props are being used.
 *
 * @public
 * @param componentName - The name of the component being used.
 * @param props - The props passed into the component.
 * @param deprecationMap - The map of deprecations, where key is the prop name and the value is
 * either null or a replacement prop name.
 */
function warnDeprecations(componentName, props, deprecationMap) {
    if (true) {
        for (var propName in deprecationMap) {
            if (props && propName in props) {
                var deprecationMessage = "".concat(componentName, " property '").concat(propName, "' was used but has been deprecated.");
                var replacementPropName = deprecationMap[propName];
                if (replacementPropName) {
                    deprecationMessage += " Use '".concat(replacementPropName, "' instead.");
                }
                Object(_warn__WEBPACK_IMPORTED_MODULE_0__[/* warn */ "a"])(deprecationMessage);
            }
        }
    }
}
//# sourceMappingURL=warnDeprecations.js.map

/***/ }),

/***/ "v4zd":
/*!*********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/overflow.js ***!
  \*********************************************************************************************************************/
/*! exports provided: hasHorizontalOverflow, hasVerticalOverflow, hasOverflow */
/*! exports used: hasOverflow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export hasHorizontalOverflow */
/* unused harmony export hasVerticalOverflow */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hasOverflow; });
/**
 * Detects whether an element's content has horizontal overflow
 *
 * @public
 * @param element - Element to check for overflow
 * @returns True if element's content overflows
 */
function hasHorizontalOverflow(element) {
    return element.clientWidth < element.scrollWidth;
}
/**
 * Detects whether an element's content has vertical overflow
 *
 * @public
 * @param element - Element to check for overflow
 * @returns True if element's content overflows
 */
function hasVerticalOverflow(element) {
    return element.clientHeight < element.scrollHeight;
}
/**
 * Detects whether an element's content has overflow in any direction
 *
 * @public
 * @param element - Element to check for overflow
 * @returns True if element's content overflows
 */
function hasOverflow(element) {
    return hasHorizontalOverflow(element) || hasVerticalOverflow(element);
}
//# sourceMappingURL=overflow.js.map

/***/ }),

/***/ "vord":
/*!**********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/getNativeElementProps.js ***!
  \**********************************************************************************************************************************/
/*! exports provided: getNativeElementProps */
/*! exports used: getNativeElementProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getNativeElementProps; });
/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./properties */ "e6CW");

var nativeElementMap = {
    label: _properties__WEBPACK_IMPORTED_MODULE_0__[/* labelProperties */ "m"],
    audio: _properties__WEBPACK_IMPORTED_MODULE_0__[/* audioProperties */ "b"],
    video: _properties__WEBPACK_IMPORTED_MODULE_0__[/* videoProperties */ "w"],
    ol: _properties__WEBPACK_IMPORTED_MODULE_0__[/* olProperties */ "o"],
    li: _properties__WEBPACK_IMPORTED_MODULE_0__[/* liProperties */ "n"],
    a: _properties__WEBPACK_IMPORTED_MODULE_0__[/* anchorProperties */ "a"],
    button: _properties__WEBPACK_IMPORTED_MODULE_0__[/* buttonProperties */ "c"],
    input: _properties__WEBPACK_IMPORTED_MODULE_0__[/* inputProperties */ "l"],
    textarea: _properties__WEBPACK_IMPORTED_MODULE_0__[/* textAreaProperties */ "t"],
    select: _properties__WEBPACK_IMPORTED_MODULE_0__[/* selectProperties */ "q"],
    option: _properties__WEBPACK_IMPORTED_MODULE_0__[/* optionProperties */ "p"],
    table: _properties__WEBPACK_IMPORTED_MODULE_0__[/* tableProperties */ "r"],
    tr: _properties__WEBPACK_IMPORTED_MODULE_0__[/* trProperties */ "v"],
    th: _properties__WEBPACK_IMPORTED_MODULE_0__[/* thProperties */ "u"],
    td: _properties__WEBPACK_IMPORTED_MODULE_0__[/* tdProperties */ "s"],
    colGroup: _properties__WEBPACK_IMPORTED_MODULE_0__[/* colGroupProperties */ "d"],
    col: _properties__WEBPACK_IMPORTED_MODULE_0__[/* colProperties */ "e"],
    form: _properties__WEBPACK_IMPORTED_MODULE_0__[/* formProperties */ "g"],
    iframe: _properties__WEBPACK_IMPORTED_MODULE_0__[/* iframeProperties */ "j"],
    img: _properties__WEBPACK_IMPORTED_MODULE_0__[/* imgProperties */ "k"],
};
/**
 * Given an element tagname and user props, filters the props to only allowed props for the given
 * element type.
 * @param tagName - Tag name (e.g. "div")
 * @param props - Props object
 * @param excludedPropNames - List of props to disallow
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getNativeElementProps(tagName, props, excludedPropNames) {
    var allowedPropNames = (tagName && nativeElementMap[tagName]) || _properties__WEBPACK_IMPORTED_MODULE_0__[/* htmlElementProperties */ "i"];
    return Object(_properties__WEBPACK_IMPORTED_MODULE_0__[/* getNativeProps */ "h"])(props, allowedPropNames, excludedPropNames);
}
//# sourceMappingURL=getNativeElementProps.js.map

/***/ }),

/***/ "xyV2":
/*!*************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/localStorage.js ***!
  \*************************************************************************************************************************/
/*! exports provided: getItem, setItem */
/*! exports used: getItem, setItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setItem; });
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/getWindow */ "NZSY");

/**
 * Fetches an item from local storage without throwing an exception
 * @param key The key of the item to fetch from local storage
 */
function getItem(key) {
    var result = null;
    try {
        var win = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__[/* getWindow */ "a"])();
        result = win ? win.localStorage.getItem(key) : null;
    }
    catch (e) {
        /* Eat the exception */
    }
    return result;
}
/**
 * Inserts an item into local storage without throwing an exception
 * @param key The key of the item to add to local storage
 * @param data The data to put into local storage
 */
function setItem(key, data) {
    try {
        var win = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__[/* getWindow */ "a"])();
        win && win.localStorage.setItem(key, data);
    }
    catch (e) {
        /* Eat the exception */
    }
}
//# sourceMappingURL=localStorage.js.map

/***/ }),

/***/ "zRON":
/*!*******************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/setFocusVisibility.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: IsFocusVisibleClassName, IsFocusHiddenClassName, setFocusVisibility */
/*! exports used: IsFocusVisibleClassName, setFocusVisibility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsFocusVisibleClassName; });
/* unused harmony export IsFocusHiddenClassName */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setFocusVisibility; });
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/getWindow */ "NZSY");

var IsFocusVisibleClassName = 'ms-Fabric--isFocusVisible';
var IsFocusHiddenClassName = 'ms-Fabric--isFocusHidden';
function updateClassList(el, enabled) {
    if (el) {
        el.classList.add(enabled ? IsFocusVisibleClassName : IsFocusHiddenClassName);
        el.classList.remove(enabled ? IsFocusHiddenClassName : IsFocusVisibleClassName);
    }
}
/**
 * Sets the visibility of focus styling.
 *
 * By default, focus styles (the box surrounding a focused Button, for example) only show up when navigational
 * keypresses occur (through Tab, arrows, PgUp/PgDn, Home and End), and are hidden when mouse interactions occur.
 * This API provides an imperative way to turn them on/off.
 *
 * A use case might be when you have a keypress like ctrl-f6 navigate to a particular region on the page,
 * and want focus to show up.
 *
 * @param enabled - Whether to turn focus visibility on or off.
 * @param target - Optional target from which to get window in case no `providerElem` has been specified.
 * @param registeredProviders - Array of provider refs that are associated with a FocusRectsProvider. If no array
 *                              is passed in, the classnames are attached to the document body that contains `target`.
 */
function setFocusVisibility(enabled, target, registeredProviders) {
    var _a;
    if (registeredProviders) {
        registeredProviders.forEach(function (ref) { return updateClassList(ref.current, enabled); });
    }
    else {
        updateClassList((_a = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__[/* getWindow */ "a"])(target)) === null || _a === void 0 ? void 0 : _a.document.body, enabled);
    }
}
//# sourceMappingURL=setFocusVisibility.js.map

/***/ }),

/***/ "zgRQ":
/*!******************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/Async.js ***!
  \******************************************************************************************************************/
/*! exports provided: Async */
/*! exports used: Async */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Async; });
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/getWindow */ "NZSY");

/**
 * Bugs often appear in async code when stuff gets disposed, but async operations don't get canceled.
 * This Async helper class solves these issues by tying async code to the lifetime of a disposable object.
 *
 * Usage: Anything class extending from BaseModel can access this helper via this.async. Otherwise create a
 * new instance of the class and remember to call dispose() during your code's dispose handler.
 *
 * @public
 */
var Async = /** @class */ (function () {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function Async(parent, onError) {
        this._timeoutIds = null;
        this._immediateIds = null;
        this._intervalIds = null;
        this._animationFrameIds = null;
        this._isDisposed = false;
        this._parent = parent || null;
        this._onErrorHandler = onError;
        this._noop = function () {
            /* do nothing */
        };
    }
    /**
     * Dispose function, clears all async operations.
     */
    Async.prototype.dispose = function () {
        var id;
        this._isDisposed = true;
        this._parent = null;
        // Clear timeouts.
        if (this._timeoutIds) {
            for (id in this._timeoutIds) {
                if (this._timeoutIds.hasOwnProperty(id)) {
                    this.clearTimeout(parseInt(id, 10));
                }
            }
            this._timeoutIds = null;
        }
        // Clear immediates.
        if (this._immediateIds) {
            for (id in this._immediateIds) {
                if (this._immediateIds.hasOwnProperty(id)) {
                    this.clearImmediate(parseInt(id, 10));
                }
            }
            this._immediateIds = null;
        }
        // Clear intervals.
        if (this._intervalIds) {
            for (id in this._intervalIds) {
                if (this._intervalIds.hasOwnProperty(id)) {
                    this.clearInterval(parseInt(id, 10));
                }
            }
            this._intervalIds = null;
        }
        // Clear animation frames.
        if (this._animationFrameIds) {
            for (id in this._animationFrameIds) {
                if (this._animationFrameIds.hasOwnProperty(id)) {
                    this.cancelAnimationFrame(parseInt(id, 10));
                }
            }
            this._animationFrameIds = null;
        }
    };
    /**
     * SetTimeout override, which will auto cancel the timeout during dispose.
     * @param callback - Callback to execute.
     * @param duration - Duration in milliseconds.
     * @returns The setTimeout id.
     */
    Async.prototype.setTimeout = function (callback, duration) {
        var _this = this;
        var timeoutId = 0;
        if (!this._isDisposed) {
            if (!this._timeoutIds) {
                this._timeoutIds = {};
            }
            timeoutId = setTimeout(function () {
                // Time to execute the timeout, enqueue it as a foreground task to be executed.
                try {
                    // Now delete the record and call the callback.
                    if (_this._timeoutIds) {
                        delete _this._timeoutIds[timeoutId];
                    }
                    callback.apply(_this._parent);
                }
                catch (e) {
                    _this._logError(e);
                }
            }, duration);
            this._timeoutIds[timeoutId] = true;
        }
        return timeoutId;
    };
    /**
     * Clears the timeout.
     * @param id - Id to cancel.
     */
    Async.prototype.clearTimeout = function (id) {
        if (this._timeoutIds && this._timeoutIds[id]) {
            clearTimeout(id);
            delete this._timeoutIds[id];
        }
    };
    /**
     * SetImmediate override, which will auto cancel the immediate during dispose.
     * @param callback - Callback to execute.
     * @param targetElement - Optional target element to use for identifying the correct window.
     * @returns The setTimeout id.
     */
    Async.prototype.setImmediate = function (callback, targetElement) {
        var _this = this;
        var immediateId = 0;
        var win = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__[/* getWindow */ "a"])(targetElement);
        if (!this._isDisposed) {
            if (!this._immediateIds) {
                this._immediateIds = {};
            }
            var setImmediateCallback = function () {
                // Time to execute the timeout, enqueue it as a foreground task to be executed.
                try {
                    // Now delete the record and call the callback.
                    if (_this._immediateIds) {
                        delete _this._immediateIds[immediateId];
                    }
                    callback.apply(_this._parent);
                }
                catch (e) {
                    _this._logError(e);
                }
            };
            immediateId = win.setTimeout(setImmediateCallback, 0);
            this._immediateIds[immediateId] = true;
        }
        return immediateId;
    };
    /**
     * Clears the immediate.
     * @param id - Id to cancel.
     * @param targetElement - Optional target element to use for identifying the correct window.
     */
    Async.prototype.clearImmediate = function (id, targetElement) {
        var win = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__[/* getWindow */ "a"])(targetElement);
        if (this._immediateIds && this._immediateIds[id]) {
            win.clearTimeout(id);
            delete this._immediateIds[id];
        }
    };
    /**
     * SetInterval override, which will auto cancel the timeout during dispose.
     * @param callback - Callback to execute.
     * @param duration - Duration in milliseconds.
     * @returns The setTimeout id.
     */
    Async.prototype.setInterval = function (callback, duration) {
        var _this = this;
        var intervalId = 0;
        if (!this._isDisposed) {
            if (!this._intervalIds) {
                this._intervalIds = {};
            }
            intervalId = setInterval(function () {
                // Time to execute the interval callback, enqueue it as a foreground task to be executed.
                try {
                    callback.apply(_this._parent);
                }
                catch (e) {
                    _this._logError(e);
                }
            }, duration);
            this._intervalIds[intervalId] = true;
        }
        return intervalId;
    };
    /**
     * Clears the interval.
     * @param id - Id to cancel.
     */
    Async.prototype.clearInterval = function (id) {
        if (this._intervalIds && this._intervalIds[id]) {
            clearInterval(id);
            delete this._intervalIds[id];
        }
    };
    /**
     * Creates a function that, when executed, will only call the func function at most once per
     * every wait milliseconds. Provide an options object to indicate that func should be invoked
     * on the leading and/or trailing edge of the wait timeout. Subsequent calls to the throttled
     * function will return the result of the last func call.
     *
     * Note: If leading and trailing options are true func will be called on the trailing edge of
     * the timeout only if the throttled function is invoked more than once during the wait timeout.
     *
     * @param func - The function to throttle.
     * @param wait - The number of milliseconds to throttle executions to. Defaults to 0.
     * @param options - The options object.
     * @returns The new throttled function.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Async.prototype.throttle = function (func, wait, options) {
        var _this = this;
        if (this._isDisposed) {
            return this._noop;
        }
        var waitMS = wait || 0;
        var leading = true;
        var trailing = true;
        var lastExecuteTime = 0;
        var lastResult;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var lastArgs;
        var timeoutId = null;
        if (options && typeof options.leading === 'boolean') {
            leading = options.leading;
        }
        if (options && typeof options.trailing === 'boolean') {
            trailing = options.trailing;
        }
        var callback = function (userCall) {
            var now = Date.now();
            var delta = now - lastExecuteTime;
            var waitLength = leading ? waitMS - delta : waitMS;
            if (delta >= waitMS && (!userCall || leading)) {
                lastExecuteTime = now;
                if (timeoutId) {
                    _this.clearTimeout(timeoutId);
                    timeoutId = null;
                }
                lastResult = func.apply(_this._parent, lastArgs);
            }
            else if (timeoutId === null && trailing) {
                timeoutId = _this.setTimeout(callback, waitLength);
            }
            return lastResult;
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var resultFunction = (function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            lastArgs = args;
            return callback(true);
        });
        return resultFunction;
    };
    /**
     * Creates a function that will delay the execution of func until after wait milliseconds have
     * elapsed since the last time it was invoked. Provide an options object to indicate that func
     * should be invoked on the leading and/or trailing edge of the wait timeout. Subsequent calls
     * to the debounced function will return the result of the last func call.
     *
     * Note: If leading and trailing options are true func will be called on the trailing edge of
     * the timeout only if the debounced function is invoked more than once during the wait
     * timeout.
     *
     * @param func - The function to debounce.
     * @param wait - The number of milliseconds to delay.
     * @param options - The options object.
     * @returns The new debounced function.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Async.prototype.debounce = function (func, wait, options) {
        var _this = this;
        if (this._isDisposed) {
            var noOpFunction = (function () {
                /** Do nothing */
            });
            noOpFunction.cancel = function () {
                return;
            };
            noOpFunction.flush = (function () { return null; });
            noOpFunction.pending = function () { return false; };
            return noOpFunction;
        }
        var waitMS = wait || 0;
        var leading = false;
        var trailing = true;
        var maxWait = null;
        var lastCallTime = 0;
        var lastExecuteTime = Date.now();
        var lastResult;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var lastArgs;
        var timeoutId = null;
        if (options && typeof options.leading === 'boolean') {
            leading = options.leading;
        }
        if (options && typeof options.trailing === 'boolean') {
            trailing = options.trailing;
        }
        if (options && typeof options.maxWait === 'number' && !isNaN(options.maxWait)) {
            maxWait = options.maxWait;
        }
        var markExecuted = function (time) {
            if (timeoutId) {
                _this.clearTimeout(timeoutId);
                timeoutId = null;
            }
            lastExecuteTime = time;
        };
        var invokeFunction = function (time) {
            markExecuted(time);
            lastResult = func.apply(_this._parent, lastArgs);
        };
        var callback = function (userCall) {
            var now = Date.now();
            var executeImmediately = false;
            if (userCall) {
                if (leading && now - lastCallTime >= waitMS) {
                    executeImmediately = true;
                }
                lastCallTime = now;
            }
            var delta = now - lastCallTime;
            var waitLength = waitMS - delta;
            var maxWaitDelta = now - lastExecuteTime;
            var maxWaitExpired = false;
            if (maxWait !== null) {
                // maxWait only matters when there is a pending callback
                if (maxWaitDelta >= maxWait && timeoutId) {
                    maxWaitExpired = true;
                }
                else {
                    waitLength = Math.min(waitLength, maxWait - maxWaitDelta);
                }
            }
            if (delta >= waitMS || maxWaitExpired || executeImmediately) {
                invokeFunction(now);
            }
            else if ((timeoutId === null || !userCall) && trailing) {
                timeoutId = _this.setTimeout(callback, waitLength);
            }
            return lastResult;
        };
        var pending = function () {
            return !!timeoutId;
        };
        var cancel = function () {
            if (pending()) {
                // Mark the debounced function as having executed
                markExecuted(Date.now());
            }
        };
        var flush = function () {
            if (pending()) {
                invokeFunction(Date.now());
            }
            return lastResult;
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var resultFunction = (function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            lastArgs = args;
            return callback(true);
        });
        resultFunction.cancel = cancel;
        resultFunction.flush = flush;
        resultFunction.pending = pending;
        return resultFunction;
    };
    Async.prototype.requestAnimationFrame = function (callback, targetElement) {
        var _this = this;
        var animationFrameId = 0;
        var win = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__[/* getWindow */ "a"])(targetElement);
        if (!this._isDisposed) {
            if (!this._animationFrameIds) {
                this._animationFrameIds = {};
            }
            var animationFrameCallback = function () {
                try {
                    // Now delete the record and call the callback.
                    if (_this._animationFrameIds) {
                        delete _this._animationFrameIds[animationFrameId];
                    }
                    callback.apply(_this._parent);
                }
                catch (e) {
                    _this._logError(e);
                }
            };
            animationFrameId = win.requestAnimationFrame
                ? win.requestAnimationFrame(animationFrameCallback)
                : win.setTimeout(animationFrameCallback, 0);
            this._animationFrameIds[animationFrameId] = true;
        }
        return animationFrameId;
    };
    Async.prototype.cancelAnimationFrame = function (id, targetElement) {
        var win = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__[/* getWindow */ "a"])(targetElement);
        if (this._animationFrameIds && this._animationFrameIds[id]) {
            win.cancelAnimationFrame ? win.cancelAnimationFrame(id) : win.clearTimeout(id);
            delete this._animationFrameIds[id];
        }
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Async.prototype._logError = function (e) {
        if (this._onErrorHandler) {
            this._onErrorHandler(e);
        }
    };
    return Async;
}());

//# sourceMappingURL=Async.js.map

/***/ })

}]);
//# sourceMappingURL=npm._fluentui~utilities.js.map