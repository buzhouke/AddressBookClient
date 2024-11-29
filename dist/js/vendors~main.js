(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~main"],{

/***/ "+wNj":
/*!********************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

/***/ }),

/***/ "MeCZ":
/*!***************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-infinite-scroll-hook/dist/react-infinite-scroll-hook.esm.js ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intersection_observer_hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intersection-observer-hook */ "OTY7");



var DEFAULT_DELAY_IN_MS = 100;

function useInfiniteScroll(_ref) {
  var loading = _ref.loading,
      hasNextPage = _ref.hasNextPage,
      onLoadMore = _ref.onLoadMore,
      rootMargin = _ref.rootMargin,
      disabled = _ref.disabled,
      _ref$delayInMs = _ref.delayInMs,
      delayInMs = _ref$delayInMs === void 0 ? DEFAULT_DELAY_IN_MS : _ref$delayInMs;

  var _useTrackVisibility = Object(react_intersection_observer_hook__WEBPACK_IMPORTED_MODULE_1__[/* useTrackVisibility */ "a"])({
    rootMargin: rootMargin
  }),
      ref = _useTrackVisibility[0],
      _useTrackVisibility$ = _useTrackVisibility[1],
      rootRef = _useTrackVisibility$.rootRef,
      isVisible = _useTrackVisibility$.isVisible;

  var shouldLoadMore = !disabled && !loading && isVisible && hasNextPage; // eslint-disable-next-line consistent-return

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (shouldLoadMore) {
      // When we trigger 'onLoadMore' and new items are added to the list,
      // right before they become rendered on the screen, 'loading' becomes false
      // and 'isVisible' can be true for a brief time, based on the scroll position.
      // So, it triggers 'onLoadMore' just after the first one is finished.
      // We use a small delay here to prevent this kind of situations.
      // It can be configured by hook args.
      var timer = setTimeout(function () {
        onLoadMore();
      }, delayInMs);
      return function () {
        clearTimeout(timer);
      };
    }
  }, [onLoadMore, shouldLoadMore, delayInMs]);
  return [ref, {
    rootRef: rootRef
  }];
}

/* harmony default export */ __webpack_exports__["a"] = (useInfiniteScroll);
//# sourceMappingURL=react-infinite-scroll-hook.esm.js.map


/***/ }),

/***/ "OTY7":
/*!***************************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-intersection-observer-hook/dist/react-intersection-observer-hook.esm.js ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: useIntersectionObserver, useTrackVisibility */
/*! exports used: useTrackVisibility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export useIntersectionObserver */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useTrackVisibility; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var DEFAULT_ROOT_MARGIN = '0px';
var DEFAULT_THRESHOLD = [0]; // For more info:
// https://developers.google.com/web/updates/2016/04/intersectionobserver
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

function useIntersectionObserver(args) {
  var _args$rootMargin, _args$threshold;

  var rootMargin = (_args$rootMargin = args == null ? void 0 : args.rootMargin) != null ? _args$rootMargin : DEFAULT_ROOT_MARGIN;
  var threshold = (_args$threshold = args == null ? void 0 : args.threshold) != null ? _args$threshold : DEFAULT_THRESHOLD;
  var nodeRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var rootRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var observerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      entry = _useState[0],
      setEntry = _useState[1];

  var unobserve = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    // Disconnect the current observer (if there is one)
    var currentObserver = observerRef.current;
    currentObserver == null ? void 0 : currentObserver.disconnect();
    observerRef.current = null;
  }, []);
  var observe = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    var node = nodeRef.current;

    if (node) {
      var root = rootRef.current;
      var options = {
        root: root,
        rootMargin: rootMargin,
        threshold: threshold
      }; // Create a observer for current "node" with given options.

      var observer = new IntersectionObserver(function (_ref) {
        var newEntry = _ref[0];
        setEntry(newEntry);
      }, options);
      observer.observe(node);
      observerRef.current = observer;
    }
  }, [rootMargin, threshold]);
  var initializeObserver = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    unobserve();
    observe();
  }, [observe, unobserve]);
  var refCallback = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (node) {
    nodeRef.current = node;
    initializeObserver();
  }, [initializeObserver]);
  var rootRefCallback = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (rootNode) {
    rootRef.current = rootNode;
    initializeObserver();
  }, [initializeObserver]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // After React 18, StrictMode unmounts and mounts components to be sure
    // if they are resilient effects being mounted and destroyed multiple times.
    // This a behavior to be sure nothing breaks when off-screen components
    // can preserve their state with future React versions.
    // So in StrictMode, React unmounts the component, clean-up of this useEffect gets triggered and
    // we stop observing the node. But we need to start observing after component re-mounts with its preserved state.
    // So to handle this case, we call initializeObserver here.
    // https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-strict-mode
    initializeObserver();
    return function () {
      // We disconnect the observer on unmount to prevent memory leaks etc.
      unobserve();
    };
  }, [initializeObserver, unobserve]);
  return [refCallback, {
    entry: entry,
    rootRef: rootRefCallback
  }];
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function useTrackVisibility(args) {
  var _result$entry;

  var _useIntersectionObser = useIntersectionObserver(args),
      ref = _useIntersectionObser[0],
      result = _useIntersectionObser[1];

  var isVisible = Boolean((_result$entry = result.entry) == null ? void 0 : _result$entry.isIntersecting);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(isVisible),
      wasEverVisible = _useState[0],
      setWasEverVisible = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (isVisible) {
      setWasEverVisible(isVisible);
    }
  }, [isVisible]);
  return [ref, _extends({}, result, {
    isVisible: isVisible,
    wasEverVisible: wasEverVisible
  })];
}


//# sourceMappingURL=react-intersection-observer-hook.esm.js.map


/***/ }),

/***/ "Udmz":
/*!***********************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-router-dom/index.js ***!
  \***********************************************************************************************************/
/*! exports provided: MemoryRouter, Navigate, NavigationType, Outlet, Route, Router, Routes, UNSAFE_LocationContext, UNSAFE_NavigationContext, UNSAFE_RouteContext, createPath, createRoutesFromChildren, generatePath, matchPath, matchRoutes, parsePath, renderMatches, resolvePath, useHref, useInRouterContext, useLocation, useMatch, useNavigate, useNavigationType, useOutlet, useOutletContext, useParams, useResolvedPath, useRoutes, BrowserRouter, HashRouter, Link, NavLink, createSearchParams, unstable_HistoryRouter, useLinkClickHandler, useSearchParams */
/*! exports used: unstable_HistoryRouter, useSearchParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BrowserRouter */
/* unused harmony export HashRouter */
/* unused harmony export Link */
/* unused harmony export NavLink */
/* unused harmony export createSearchParams */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryRouter; });
/* unused harmony export useLinkClickHandler */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useSearchParams; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! history */ "SGJe");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "H8PI");
/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */





function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const _excluded = ["onClick", "reloadDocument", "replace", "state", "target", "to"],
      _excluded2 = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"];

function warning(cond, message) {
  if (!cond) {
    // eslint-disable-next-line no-console
    if (typeof console !== "undefined") console.warn(message);

    try {
      // Welcome to debugging React Router!
      //
      // This error is thrown as a convenience so you can more easily
      // find the source for a warning that appears in the console by
      // enabling "pause on exceptions" in your JavaScript debugger.
      throw new Error(message); // eslint-disable-next-line no-empty
    } catch (e) {}
  }
} ////////////////////////////////////////////////////////////////////////////////
// COMPONENTS
////////////////////////////////////////////////////////////////////////////////

/**
 * A `<Router>` for use in web browsers. Provides the cleanest URLs.
 */
function BrowserRouter(_ref) {
  let {
    basename,
    children,
    window
  } = _ref;
  let historyRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  if (historyRef.current == null) {
    historyRef.current = Object(history__WEBPACK_IMPORTED_MODULE_1__[/* createBrowserHistory */ "b"])({
      window
    });
  }

  let history = historyRef.current;
  let [state, setState] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    action: history.action,
    location: history.location
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(() => history.listen(setState), [history]);
  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_router__WEBPACK_IMPORTED_MODULE_2__[/* Router */ "c"], {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}

/**
 * A `<Router>` for use in web browsers. Stores the location in the hash
 * portion of the URL so it is not sent to the server.
 */
function HashRouter(_ref2) {
  let {
    basename,
    children,
    window
  } = _ref2;
  let historyRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  if (historyRef.current == null) {
    historyRef.current = Object(history__WEBPACK_IMPORTED_MODULE_1__[/* createHashHistory */ "c"])({
      window
    });
  }

  let history = historyRef.current;
  let [state, setState] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    action: history.action,
    location: history.location
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(() => history.listen(setState), [history]);
  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_router__WEBPACK_IMPORTED_MODULE_2__[/* Router */ "c"], {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}

/**
 * A `<Router>` that accepts a pre-instantiated history object. It's important
 * to note that using your own history object is highly discouraged and may add
 * two versions of the history library to your bundles unless you use the same
 * version of the history library that React Router uses internally.
 */
function HistoryRouter(_ref3) {
  let {
    basename,
    children,
    history
  } = _ref3;
  const [state, setState] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    action: history.action,
    location: history.location
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(() => history.listen(setState), [history]);
  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_router__WEBPACK_IMPORTED_MODULE_2__[/* Router */ "c"], {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}

if (true) {
  HistoryRouter.displayName = "unstable_HistoryRouter";
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

/**
 * The public API for rendering a history-aware <a>.
 */
const Link = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function LinkWithRef(_ref4, ref) {
  let {
    onClick,
    reloadDocument,
    replace = false,
    state,
    target,
    to
  } = _ref4,
      rest = _objectWithoutPropertiesLoose(_ref4, _excluded);

  let href = Object(react_router__WEBPACK_IMPORTED_MODULE_2__[/* useHref */ "g"])(to);
  let internalOnClick = useLinkClickHandler(to, {
    replace,
    state,
    target
  });

  function handleClick(event) {
    if (onClick) onClick(event);

    if (!event.defaultPrevented && !reloadDocument) {
      internalOnClick(event);
    }
  }

  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", _extends({}, rest, {
      href: href,
      onClick: handleClick,
      ref: ref,
      target: target
    }))
  );
});

if (true) {
  Link.displayName = "Link";
}

/**
 * A <Link> wrapper that knows if it's "active" or not.
 */
const NavLink = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function NavLinkWithRef(_ref5, ref) {
  let {
    "aria-current": ariaCurrentProp = "page",
    caseSensitive = false,
    className: classNameProp = "",
    end = false,
    style: styleProp,
    to,
    children
  } = _ref5,
      rest = _objectWithoutPropertiesLoose(_ref5, _excluded2);

  let location = Object(react_router__WEBPACK_IMPORTED_MODULE_2__[/* useLocation */ "h"])();
  let path = Object(react_router__WEBPACK_IMPORTED_MODULE_2__[/* useResolvedPath */ "j"])(to);
  let locationPathname = location.pathname;
  let toPathname = path.pathname;

  if (!caseSensitive) {
    locationPathname = locationPathname.toLowerCase();
    toPathname = toPathname.toLowerCase();
  }

  let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(toPathname.length) === "/";
  let ariaCurrent = isActive ? ariaCurrentProp : undefined;
  let className;

  if (typeof classNameProp === "function") {
    className = classNameProp({
      isActive
    });
  } else {
    // If the className prop is not a function, we use a default `active`
    // class for <NavLink />s that are active. In v5 `active` was the default
    // value for `activeClassName`, but we are removing that API and can still
    // use the old default behavior for a cleaner upgrade path and keep the
    // simple styling rules working as they currently do.
    className = [classNameProp, isActive ? "active" : null].filter(Boolean).join(" ");
  }

  let style = typeof styleProp === "function" ? styleProp({
    isActive
  }) : styleProp;
  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Link, _extends({}, rest, {
    "aria-current": ariaCurrent,
    className: className,
    ref: ref,
    style: style,
    to: to
  }), typeof children === "function" ? children({
    isActive
  }) : children);
});

if (true) {
  NavLink.displayName = "NavLink";
} ////////////////////////////////////////////////////////////////////////////////
// HOOKS
////////////////////////////////////////////////////////////////////////////////

/**
 * Handles the click behavior for router `<Link>` components. This is useful if
 * you need to create custom `<Link>` components with the same click behavior we
 * use in our exported `<Link>`.
 */


function useLinkClickHandler(to, _temp) {
  let {
    target,
    replace: replaceProp,
    state
  } = _temp === void 0 ? {} : _temp;
  let navigate = Object(react_router__WEBPACK_IMPORTED_MODULE_2__[/* useNavigate */ "i"])();
  let location = Object(react_router__WEBPACK_IMPORTED_MODULE_2__[/* useLocation */ "h"])();
  let path = Object(react_router__WEBPACK_IMPORTED_MODULE_2__[/* useResolvedPath */ "j"])(to);
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
    if (event.button === 0 && ( // Ignore everything but left clicks
    !target || target === "_self") && // Let browser handle "target=_blank" etc.
    !isModifiedEvent(event) // Ignore clicks with modifier keys
    ) {
      event.preventDefault(); // If the URL hasn't changed, a regular <a> will do a replace instead of
      // a push, so do the same here.

      let replace = !!replaceProp || Object(history__WEBPACK_IMPORTED_MODULE_1__[/* createPath */ "e"])(location) === Object(history__WEBPACK_IMPORTED_MODULE_1__[/* createPath */ "e"])(path);
      navigate(to, {
        replace,
        state
      });
    }
  }, [location, navigate, path, replaceProp, state, target, to]);
}
/**
 * A convenient wrapper for reading and writing search parameters via the
 * URLSearchParams interface.
 */

function useSearchParams(defaultInit) {
   true ? warning(typeof URLSearchParams !== "undefined", "You cannot use the `useSearchParams` hook in a browser that does not " + "support the URLSearchParams API. If you need to support Internet " + "Explorer 11, we recommend you load a polyfill such as " + "https://github.com/ungap/url-search-params\n\n" + "If you're unsure how to load polyfills, we recommend you check out " + "https://polyfill.io/v3/ which provides some recommendations about how " + "to load polyfills only for users that need them, instead of for every " + "user.") : undefined;
  let defaultSearchParamsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(createSearchParams(defaultInit));
  let location = Object(react_router__WEBPACK_IMPORTED_MODULE_2__[/* useLocation */ "h"])();
  let searchParams = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    let searchParams = createSearchParams(location.search);

    for (let key of defaultSearchParamsRef.current.keys()) {
      if (!searchParams.has(key)) {
        defaultSearchParamsRef.current.getAll(key).forEach(value => {
          searchParams.append(key, value);
        });
      }
    }

    return searchParams;
  }, [location.search]);
  let navigate = Object(react_router__WEBPACK_IMPORTED_MODULE_2__[/* useNavigate */ "i"])();
  let setSearchParams = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((nextInit, navigateOptions) => {
    navigate("?" + createSearchParams(nextInit), navigateOptions);
  }, [navigate]);
  return [searchParams, setSearchParams];
}

/**
 * Creates a URLSearchParams object using the given initializer.
 *
 * This is identical to `new URLSearchParams(init)` except it also
 * supports arrays as values in the object form of the initializer
 * instead of just strings. This is convenient when you need multiple
 * values for a given key, but don't want to use an array initializer.
 *
 * For example, instead of:
 *
 *   let searchParams = new URLSearchParams([
 *     ['sort', 'name'],
 *     ['sort', 'price']
 *   ]);
 *
 * you can do:
 *
 *   let searchParams = createSearchParams({
 *     sort: ['name', 'price']
 *   });
 */
function createSearchParams(init) {
  if (init === void 0) {
    init = "";
  }

  return new URLSearchParams(typeof init === "string" || Array.isArray(init) || init instanceof URLSearchParams ? init : Object.keys(init).reduce((memo, key) => {
    let value = init[key];
    return memo.concat(Array.isArray(value) ? value.map(v => [key, v]) : [[key, value]]);
  }, []));
}


//# sourceMappingURL=index.js.map


/***/ }),

/***/ "hOcL":
/*!*********************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/remove-accents/index.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

var characterMap = {
	"À": "A",
	"Á": "A",
	"Â": "A",
	"Ã": "A",
	"Ä": "A",
	"Å": "A",
	"Ấ": "A",
	"Ắ": "A",
	"Ẳ": "A",
	"Ẵ": "A",
	"Ặ": "A",
	"Æ": "AE",
	"Ầ": "A",
	"Ằ": "A",
	"Ȃ": "A",
	"Ç": "C",
	"Ḉ": "C",
	"È": "E",
	"É": "E",
	"Ê": "E",
	"Ë": "E",
	"Ế": "E",
	"Ḗ": "E",
	"Ề": "E",
	"Ḕ": "E",
	"Ḝ": "E",
	"Ȇ": "E",
	"Ì": "I",
	"Í": "I",
	"Î": "I",
	"Ï": "I",
	"Ḯ": "I",
	"Ȋ": "I",
	"Ð": "D",
	"Ñ": "N",
	"Ò": "O",
	"Ó": "O",
	"Ô": "O",
	"Õ": "O",
	"Ö": "O",
	"Ø": "O",
	"Ố": "O",
	"Ṍ": "O",
	"Ṓ": "O",
	"Ȏ": "O",
	"Ù": "U",
	"Ú": "U",
	"Û": "U",
	"Ü": "U",
	"Ý": "Y",
	"à": "a",
	"á": "a",
	"â": "a",
	"ã": "a",
	"ä": "a",
	"å": "a",
	"ấ": "a",
	"ắ": "a",
	"ẳ": "a",
	"ẵ": "a",
	"ặ": "a",
	"æ": "ae",
	"ầ": "a",
	"ằ": "a",
	"ȃ": "a",
	"ç": "c",
	"ḉ": "c",
	"è": "e",
	"é": "e",
	"ê": "e",
	"ë": "e",
	"ế": "e",
	"ḗ": "e",
	"ề": "e",
	"ḕ": "e",
	"ḝ": "e",
	"ȇ": "e",
	"ì": "i",
	"í": "i",
	"î": "i",
	"ï": "i",
	"ḯ": "i",
	"ȋ": "i",
	"ð": "d",
	"ñ": "n",
	"ò": "o",
	"ó": "o",
	"ô": "o",
	"õ": "o",
	"ö": "o",
	"ø": "o",
	"ố": "o",
	"ṍ": "o",
	"ṓ": "o",
	"ȏ": "o",
	"ù": "u",
	"ú": "u",
	"û": "u",
	"ü": "u",
	"ý": "y",
	"ÿ": "y",
	"Ā": "A",
	"ā": "a",
	"Ă": "A",
	"ă": "a",
	"Ą": "A",
	"ą": "a",
	"Ć": "C",
	"ć": "c",
	"Ĉ": "C",
	"ĉ": "c",
	"Ċ": "C",
	"ċ": "c",
	"Č": "C",
	"č": "c",
	"C̆": "C",
	"c̆": "c",
	"Ď": "D",
	"ď": "d",
	"Đ": "D",
	"đ": "d",
	"Ē": "E",
	"ē": "e",
	"Ĕ": "E",
	"ĕ": "e",
	"Ė": "E",
	"ė": "e",
	"Ę": "E",
	"ę": "e",
	"Ě": "E",
	"ě": "e",
	"Ĝ": "G",
	"Ǵ": "G",
	"ĝ": "g",
	"ǵ": "g",
	"Ğ": "G",
	"ğ": "g",
	"Ġ": "G",
	"ġ": "g",
	"Ģ": "G",
	"ģ": "g",
	"Ĥ": "H",
	"ĥ": "h",
	"Ħ": "H",
	"ħ": "h",
	"Ḫ": "H",
	"ḫ": "h",
	"Ĩ": "I",
	"ĩ": "i",
	"Ī": "I",
	"ī": "i",
	"Ĭ": "I",
	"ĭ": "i",
	"Į": "I",
	"į": "i",
	"İ": "I",
	"ı": "i",
	"Ĳ": "IJ",
	"ĳ": "ij",
	"Ĵ": "J",
	"ĵ": "j",
	"Ķ": "K",
	"ķ": "k",
	"Ḱ": "K",
	"ḱ": "k",
	"K̆": "K",
	"k̆": "k",
	"Ĺ": "L",
	"ĺ": "l",
	"Ļ": "L",
	"ļ": "l",
	"Ľ": "L",
	"ľ": "l",
	"Ŀ": "L",
	"ŀ": "l",
	"Ł": "l",
	"ł": "l",
	"Ḿ": "M",
	"ḿ": "m",
	"M̆": "M",
	"m̆": "m",
	"Ń": "N",
	"ń": "n",
	"Ņ": "N",
	"ņ": "n",
	"Ň": "N",
	"ň": "n",
	"ŉ": "n",
	"N̆": "N",
	"n̆": "n",
	"Ō": "O",
	"ō": "o",
	"Ŏ": "O",
	"ŏ": "o",
	"Ő": "O",
	"ő": "o",
	"Œ": "OE",
	"œ": "oe",
	"P̆": "P",
	"p̆": "p",
	"Ŕ": "R",
	"ŕ": "r",
	"Ŗ": "R",
	"ŗ": "r",
	"Ř": "R",
	"ř": "r",
	"R̆": "R",
	"r̆": "r",
	"Ȓ": "R",
	"ȓ": "r",
	"Ś": "S",
	"ś": "s",
	"Ŝ": "S",
	"ŝ": "s",
	"Ş": "S",
	"Ș": "S",
	"ș": "s",
	"ş": "s",
	"Š": "S",
	"š": "s",
	"Ţ": "T",
	"ţ": "t",
	"ț": "t",
	"Ț": "T",
	"Ť": "T",
	"ť": "t",
	"Ŧ": "T",
	"ŧ": "t",
	"T̆": "T",
	"t̆": "t",
	"Ũ": "U",
	"ũ": "u",
	"Ū": "U",
	"ū": "u",
	"Ŭ": "U",
	"ŭ": "u",
	"Ů": "U",
	"ů": "u",
	"Ű": "U",
	"ű": "u",
	"Ų": "U",
	"ų": "u",
	"Ȗ": "U",
	"ȗ": "u",
	"V̆": "V",
	"v̆": "v",
	"Ŵ": "W",
	"ŵ": "w",
	"Ẃ": "W",
	"ẃ": "w",
	"X̆": "X",
	"x̆": "x",
	"Ŷ": "Y",
	"ŷ": "y",
	"Ÿ": "Y",
	"Y̆": "Y",
	"y̆": "y",
	"Ź": "Z",
	"ź": "z",
	"Ż": "Z",
	"ż": "z",
	"Ž": "Z",
	"ž": "z",
	"ſ": "s",
	"ƒ": "f",
	"Ơ": "O",
	"ơ": "o",
	"Ư": "U",
	"ư": "u",
	"Ǎ": "A",
	"ǎ": "a",
	"Ǐ": "I",
	"ǐ": "i",
	"Ǒ": "O",
	"ǒ": "o",
	"Ǔ": "U",
	"ǔ": "u",
	"Ǖ": "U",
	"ǖ": "u",
	"Ǘ": "U",
	"ǘ": "u",
	"Ǚ": "U",
	"ǚ": "u",
	"Ǜ": "U",
	"ǜ": "u",
	"Ứ": "U",
	"ứ": "u",
	"Ṹ": "U",
	"ṹ": "u",
	"Ǻ": "A",
	"ǻ": "a",
	"Ǽ": "AE",
	"ǽ": "ae",
	"Ǿ": "O",
	"ǿ": "o",
	"Þ": "TH",
	"þ": "th",
	"Ṕ": "P",
	"ṕ": "p",
	"Ṥ": "S",
	"ṥ": "s",
	"X́": "X",
	"x́": "x",
	"Ѓ": "Г",
	"ѓ": "г",
	"Ќ": "К",
	"ќ": "к",
	"A̋": "A",
	"a̋": "a",
	"E̋": "E",
	"e̋": "e",
	"I̋": "I",
	"i̋": "i",
	"Ǹ": "N",
	"ǹ": "n",
	"Ồ": "O",
	"ồ": "o",
	"Ṑ": "O",
	"ṑ": "o",
	"Ừ": "U",
	"ừ": "u",
	"Ẁ": "W",
	"ẁ": "w",
	"Ỳ": "Y",
	"ỳ": "y",
	"Ȁ": "A",
	"ȁ": "a",
	"Ȅ": "E",
	"ȅ": "e",
	"Ȉ": "I",
	"ȉ": "i",
	"Ȍ": "O",
	"ȍ": "o",
	"Ȑ": "R",
	"ȑ": "r",
	"Ȕ": "U",
	"ȕ": "u",
	"B̌": "B",
	"b̌": "b",
	"Č̣": "C",
	"č̣": "c",
	"Ê̌": "E",
	"ê̌": "e",
	"F̌": "F",
	"f̌": "f",
	"Ǧ": "G",
	"ǧ": "g",
	"Ȟ": "H",
	"ȟ": "h",
	"J̌": "J",
	"ǰ": "j",
	"Ǩ": "K",
	"ǩ": "k",
	"M̌": "M",
	"m̌": "m",
	"P̌": "P",
	"p̌": "p",
	"Q̌": "Q",
	"q̌": "q",
	"Ř̩": "R",
	"ř̩": "r",
	"Ṧ": "S",
	"ṧ": "s",
	"V̌": "V",
	"v̌": "v",
	"W̌": "W",
	"w̌": "w",
	"X̌": "X",
	"x̌": "x",
	"Y̌": "Y",
	"y̌": "y",
	"A̧": "A",
	"a̧": "a",
	"B̧": "B",
	"b̧": "b",
	"Ḑ": "D",
	"ḑ": "d",
	"Ȩ": "E",
	"ȩ": "e",
	"Ɛ̧": "E",
	"ɛ̧": "e",
	"Ḩ": "H",
	"ḩ": "h",
	"I̧": "I",
	"i̧": "i",
	"Ɨ̧": "I",
	"ɨ̧": "i",
	"M̧": "M",
	"m̧": "m",
	"O̧": "O",
	"o̧": "o",
	"Q̧": "Q",
	"q̧": "q",
	"U̧": "U",
	"u̧": "u",
	"X̧": "X",
	"x̧": "x",
	"Z̧": "Z",
	"z̧": "z",
};

var chars = Object.keys(characterMap).join('|');
var allAccents = new RegExp(chars, 'g');
var firstAccent = new RegExp(chars, '');

var removeAccents = function(string) {	
	return string.replace(allAccents, function(match) {
		return characterMap[match];
	});
};

var hasAccents = function(string) {
	return !!string.match(firstAccent);
};

module.exports = removeAccents;
module.exports.has = hasAccents;
module.exports.remove = removeAccents;


/***/ }),

/***/ "v9xJ":
/*!***********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/match-sorter/dist/match-sorter.esm.js ***!
  \***********************************************************************************************************************/
/*! exports provided: defaultBaseSortFn, matchSorter, rankings */
/*! exports used: matchSorter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export defaultBaseSortFn */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return matchSorter; });
/* unused harmony export rankings */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "cxan");
/* harmony import */ var remove_accents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remove-accents */ "hOcL");
/* harmony import */ var remove_accents__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(remove_accents__WEBPACK_IMPORTED_MODULE_1__);



var rankings = {
  CASE_SENSITIVE_EQUAL: 7,
  EQUAL: 6,
  STARTS_WITH: 5,
  WORD_STARTS_WITH: 4,
  CONTAINS: 3,
  ACRONYM: 2,
  MATCHES: 1,
  NO_MATCH: 0
};
matchSorter.rankings = rankings;

var defaultBaseSortFn = function defaultBaseSortFn(a, b) {
  return String(a.rankedValue).localeCompare(String(b.rankedValue));
};
/**
 * Takes an array of items and a value and returns a new array with the items that match the given value
 * @param {Array} items - the items to sort
 * @param {String} value - the value to use for ranking
 * @param {Object} options - Some options to configure the sorter
 * @return {Array} - the new sorted array
 */


function matchSorter(items, value, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      keys = _options.keys,
      _options$threshold = _options.threshold,
      threshold = _options$threshold === void 0 ? rankings.MATCHES : _options$threshold,
      _options$baseSort = _options.baseSort,
      baseSort = _options$baseSort === void 0 ? defaultBaseSortFn : _options$baseSort,
      _options$sorter = _options.sorter,
      sorter = _options$sorter === void 0 ? function (matchedItems) {
    return matchedItems.sort(function (a, b) {
      return sortRankedValues(a, b, baseSort);
    });
  } : _options$sorter;
  var matchedItems = items.reduce(reduceItemsToRanked, []);
  return sorter(matchedItems).map(function (_ref) {
    var item = _ref.item;
    return item;
  });

  function reduceItemsToRanked(matches, item, index) {
    var rankingInfo = getHighestRanking(item, keys, value, options);
    var rank = rankingInfo.rank,
        _rankingInfo$keyThres = rankingInfo.keyThreshold,
        keyThreshold = _rankingInfo$keyThres === void 0 ? threshold : _rankingInfo$keyThres;

    if (rank >= keyThreshold) {
      matches.push(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, rankingInfo, {
        item: item,
        index: index
      }));
    }

    return matches;
  }
}
/**
 * Gets the highest ranking for value for the given item based on its values for the given keys
 * @param {*} item - the item to rank
 * @param {Array} keys - the keys to get values from the item for the ranking
 * @param {String} value - the value to rank against
 * @param {Object} options - options to control the ranking
 * @return {{rank: Number, keyIndex: Number, keyThreshold: Number}} - the highest ranking
 */


function getHighestRanking(item, keys, value, options) {
  if (!keys) {
    // if keys is not specified, then we assume the item given is ready to be matched
    var stringItem = item;
    return {
      // ends up being duplicate of 'item' in matches but consistent
      rankedValue: stringItem,
      rank: getMatchRanking(stringItem, value, options),
      keyIndex: -1,
      keyThreshold: options.threshold
    };
  }

  var valuesToRank = getAllValuesToRank(item, keys);
  return valuesToRank.reduce(function (_ref2, _ref3, i) {
    var rank = _ref2.rank,
        rankedValue = _ref2.rankedValue,
        keyIndex = _ref2.keyIndex,
        keyThreshold = _ref2.keyThreshold;
    var itemValue = _ref3.itemValue,
        attributes = _ref3.attributes;
    var newRank = getMatchRanking(itemValue, value, options);
    var newRankedValue = rankedValue;
    var minRanking = attributes.minRanking,
        maxRanking = attributes.maxRanking,
        threshold = attributes.threshold;

    if (newRank < minRanking && newRank >= rankings.MATCHES) {
      newRank = minRanking;
    } else if (newRank > maxRanking) {
      newRank = maxRanking;
    }

    if (newRank > rank) {
      rank = newRank;
      keyIndex = i;
      keyThreshold = threshold;
      newRankedValue = itemValue;
    }

    return {
      rankedValue: newRankedValue,
      rank: rank,
      keyIndex: keyIndex,
      keyThreshold: keyThreshold
    };
  }, {
    rankedValue: item,
    rank: rankings.NO_MATCH,
    keyIndex: -1,
    keyThreshold: options.threshold
  });
}
/**
 * Gives a rankings score based on how well the two strings match.
 * @param {String} testString - the string to test against
 * @param {String} stringToRank - the string to rank
 * @param {Object} options - options for the match (like keepDiacritics for comparison)
 * @returns {Number} the ranking for how well stringToRank matches testString
 */


function getMatchRanking(testString, stringToRank, options) {
  testString = prepareValueForComparison(testString, options);
  stringToRank = prepareValueForComparison(stringToRank, options); // too long

  if (stringToRank.length > testString.length) {
    return rankings.NO_MATCH;
  } // case sensitive equals


  if (testString === stringToRank) {
    return rankings.CASE_SENSITIVE_EQUAL;
  } // Lower casing before further comparison


  testString = testString.toLowerCase();
  stringToRank = stringToRank.toLowerCase(); // case insensitive equals

  if (testString === stringToRank) {
    return rankings.EQUAL;
  } // starts with


  if (testString.startsWith(stringToRank)) {
    return rankings.STARTS_WITH;
  } // word starts with


  if (testString.includes(" " + stringToRank)) {
    return rankings.WORD_STARTS_WITH;
  } // contains


  if (testString.includes(stringToRank)) {
    return rankings.CONTAINS;
  } else if (stringToRank.length === 1) {
    // If the only character in the given stringToRank
    //   isn't even contained in the testString, then
    //   it's definitely not a match.
    return rankings.NO_MATCH;
  } // acronym


  if (getAcronym(testString).includes(stringToRank)) {
    return rankings.ACRONYM;
  } // will return a number between rankings.MATCHES and
  // rankings.MATCHES + 1 depending  on how close of a match it is.


  return getClosenessRanking(testString, stringToRank);
}
/**
 * Generates an acronym for a string.
 *
 * @param {String} string the string for which to produce the acronym
 * @returns {String} the acronym
 */


function getAcronym(string) {
  var acronym = '';
  var wordsInString = string.split(' ');
  wordsInString.forEach(function (wordInString) {
    var splitByHyphenWords = wordInString.split('-');
    splitByHyphenWords.forEach(function (splitByHyphenWord) {
      acronym += splitByHyphenWord.substr(0, 1);
    });
  });
  return acronym;
}
/**
 * Returns a score based on how spread apart the
 * characters from the stringToRank are within the testString.
 * A number close to rankings.MATCHES represents a loose match. A number close
 * to rankings.MATCHES + 1 represents a tighter match.
 * @param {String} testString - the string to test against
 * @param {String} stringToRank - the string to rank
 * @returns {Number} the number between rankings.MATCHES and
 * rankings.MATCHES + 1 for how well stringToRank matches testString
 */


function getClosenessRanking(testString, stringToRank) {
  var matchingInOrderCharCount = 0;
  var charNumber = 0;

  function findMatchingCharacter(matchChar, string, index) {
    for (var j = index, J = string.length; j < J; j++) {
      var stringChar = string[j];

      if (stringChar === matchChar) {
        matchingInOrderCharCount += 1;
        return j + 1;
      }
    }

    return -1;
  }

  function getRanking(spread) {
    var spreadPercentage = 1 / spread;
    var inOrderPercentage = matchingInOrderCharCount / stringToRank.length;
    var ranking = rankings.MATCHES + inOrderPercentage * spreadPercentage;
    return ranking;
  }

  var firstIndex = findMatchingCharacter(stringToRank[0], testString, 0);

  if (firstIndex < 0) {
    return rankings.NO_MATCH;
  }

  charNumber = firstIndex;

  for (var i = 1, I = stringToRank.length; i < I; i++) {
    var matchChar = stringToRank[i];
    charNumber = findMatchingCharacter(matchChar, testString, charNumber);
    var found = charNumber > -1;

    if (!found) {
      return rankings.NO_MATCH;
    }
  }

  var spread = charNumber - firstIndex;
  return getRanking(spread);
}
/**
 * Sorts items that have a rank, index, and keyIndex
 * @param {Object} a - the first item to sort
 * @param {Object} b - the second item to sort
 * @return {Number} -1 if a should come first, 1 if b should come first, 0 if equal
 */


function sortRankedValues(a, b, baseSort) {
  var aFirst = -1;
  var bFirst = 1;
  var aRank = a.rank,
      aKeyIndex = a.keyIndex;
  var bRank = b.rank,
      bKeyIndex = b.keyIndex;
  var same = aRank === bRank;

  if (same) {
    if (aKeyIndex === bKeyIndex) {
      // use the base sort function as a tie-breaker
      return baseSort(a, b);
    } else {
      return aKeyIndex < bKeyIndex ? aFirst : bFirst;
    }
  } else {
    return aRank > bRank ? aFirst : bFirst;
  }
}
/**
 * Prepares value for comparison by stringifying it, removing diacritics (if specified)
 * @param {String} value - the value to clean
 * @param {Object} options - {keepDiacritics: whether to remove diacritics}
 * @return {String} the prepared value
 */


function prepareValueForComparison(value, _ref4) {
  var keepDiacritics = _ref4.keepDiacritics;
  // value might not actually be a string at this point (we don't get to choose)
  // so part of preparing the value for comparison is ensure that it is a string
  value = "" + value; // toString

  if (!keepDiacritics) {
    value = remove_accents__WEBPACK_IMPORTED_MODULE_1___default()(value);
  }

  return value;
}
/**
 * Gets value for key in item at arbitrarily nested keypath
 * @param {Object} item - the item
 * @param {Object|Function} key - the potentially nested keypath or property callback
 * @return {Array} - an array containing the value(s) at the nested keypath
 */


function getItemValues(item, key) {
  if (typeof key === 'object') {
    key = key.key;
  }

  var value;

  if (typeof key === 'function') {
    value = key(item);
  } else if (item == null) {
    value = null;
  } else if (Object.hasOwnProperty.call(item, key)) {
    value = item[key];
  } else if (key.includes('.')) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    return getNestedValues(key, item);
  } else {
    value = null;
  } // because `value` can also be undefined


  if (value == null) {
    return [];
  }

  if (Array.isArray(value)) {
    return value;
  }

  return [String(value)];
}
/**
 * Given path: "foo.bar.baz"
 * And item: {foo: {bar: {baz: 'buzz'}}}
 *   -> 'buzz'
 * @param path a dot-separated set of keys
 * @param item the item to get the value from
 */


function getNestedValues(path, item) {
  var keys = path.split('.');
  var values = [item];

  for (var i = 0, I = keys.length; i < I; i++) {
    var nestedKey = keys[i];
    var nestedValues = [];

    for (var j = 0, J = values.length; j < J; j++) {
      var nestedItem = values[j];
      if (nestedItem == null) continue;

      if (Object.hasOwnProperty.call(nestedItem, nestedKey)) {
        var nestedValue = nestedItem[nestedKey];

        if (nestedValue != null) {
          nestedValues.push(nestedValue);
        }
      } else if (nestedKey === '*') {
        // ensure that values is an array
        nestedValues = nestedValues.concat(nestedItem);
      }
    }

    values = nestedValues;
  }

  if (Array.isArray(values[0])) {
    // keep allowing the implicit wildcard for an array of strings at the end of
    // the path; don't use `.flat()` because that's not available in node.js v10
    var result = [];
    return result.concat.apply(result, values);
  } // Based on our logic it should be an array of strings by now...
  // assuming the user's path terminated in strings


  return values;
}
/**
 * Gets all the values for the given keys in the given item and returns an array of those values
 * @param item - the item from which the values will be retrieved
 * @param keys - the keys to use to retrieve the values
 * @return objects with {itemValue, attributes}
 */


function getAllValuesToRank(item, keys) {
  var allValues = [];

  for (var j = 0, J = keys.length; j < J; j++) {
    var key = keys[j];
    var attributes = getKeyAttributes(key);
    var itemValues = getItemValues(item, key);

    for (var i = 0, I = itemValues.length; i < I; i++) {
      allValues.push({
        itemValue: itemValues[i],
        attributes: attributes
      });
    }
  }

  return allValues;
}

var defaultKeyAttributes = {
  maxRanking: Infinity,
  minRanking: -Infinity
};
/**
 * Gets all the attributes for the given key
 * @param key - the key from which the attributes will be retrieved
 * @return object containing the key's attributes
 */

function getKeyAttributes(key) {
  if (typeof key === 'string') {
    return defaultKeyAttributes;
  }

  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, defaultKeyAttributes, key);
}
/*
eslint
  no-continue: "off",
*/




/***/ })

}]);
//# sourceMappingURL=vendors~main.js.map