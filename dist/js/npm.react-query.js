(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["npm.react-query"],{

/***/ "1oX/":
/*!****************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-query/es/core/retryer.js ***!
  \****************************************************************************************************************/
/*! exports provided: isCancelable, CancelledError, isCancelledError, Retryer */
/*! exports used: Retryer, isCancelable, isCancelledError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isCancelable; });
/* unused harmony export CancelledError */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isCancelledError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Retryer; });
/* harmony import */ var _focusManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./focusManager */ "HXfz");
/* harmony import */ var _onlineManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onlineManager */ "vQUu");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "jLnA");




function defaultRetryDelay(failureCount) {
  return Math.min(1000 * Math.pow(2, failureCount), 30000);
}

function isCancelable(value) {
  return typeof (value == null ? void 0 : value.cancel) === 'function';
}
var CancelledError = function CancelledError(options) {
  this.revert = options == null ? void 0 : options.revert;
  this.silent = options == null ? void 0 : options.silent;
};
function isCancelledError(value) {
  return value instanceof CancelledError;
} // CLASS

var Retryer = function Retryer(config) {
  var _this = this;

  var cancelRetry = false;
  var cancelFn;
  var continueFn;
  var promiseResolve;
  var promiseReject;
  this.abort = config.abort;

  this.cancel = function (cancelOptions) {
    return cancelFn == null ? void 0 : cancelFn(cancelOptions);
  };

  this.cancelRetry = function () {
    cancelRetry = true;
  };

  this.continueRetry = function () {
    cancelRetry = false;
  };

  this.continue = function () {
    return continueFn == null ? void 0 : continueFn();
  };

  this.failureCount = 0;
  this.isPaused = false;
  this.isResolved = false;
  this.isTransportCancelable = false;
  this.promise = new Promise(function (outerResolve, outerReject) {
    promiseResolve = outerResolve;
    promiseReject = outerReject;
  });

  var resolve = function resolve(value) {
    if (!_this.isResolved) {
      _this.isResolved = true;
      config.onSuccess == null ? void 0 : config.onSuccess(value);
      continueFn == null ? void 0 : continueFn();
      promiseResolve(value);
    }
  };

  var reject = function reject(value) {
    if (!_this.isResolved) {
      _this.isResolved = true;
      config.onError == null ? void 0 : config.onError(value);
      continueFn == null ? void 0 : continueFn();
      promiseReject(value);
    }
  };

  var pause = function pause() {
    return new Promise(function (continueResolve) {
      continueFn = continueResolve;
      _this.isPaused = true;
      config.onPause == null ? void 0 : config.onPause();
    }).then(function () {
      continueFn = undefined;
      _this.isPaused = false;
      config.onContinue == null ? void 0 : config.onContinue();
    });
  }; // Create loop function


  var run = function run() {
    // Do nothing if already resolved
    if (_this.isResolved) {
      return;
    }

    var promiseOrValue; // Execute query

    try {
      promiseOrValue = config.fn();
    } catch (error) {
      promiseOrValue = Promise.reject(error);
    } // Create callback to cancel this fetch


    cancelFn = function cancelFn(cancelOptions) {
      if (!_this.isResolved) {
        reject(new CancelledError(cancelOptions));
        _this.abort == null ? void 0 : _this.abort(); // Cancel transport if supported

        if (isCancelable(promiseOrValue)) {
          try {
            promiseOrValue.cancel();
          } catch (_unused) {}
        }
      }
    }; // Check if the transport layer support cancellation


    _this.isTransportCancelable = isCancelable(promiseOrValue);
    Promise.resolve(promiseOrValue).then(resolve).catch(function (error) {
      var _config$retry, _config$retryDelay;

      // Stop if the fetch is already resolved
      if (_this.isResolved) {
        return;
      } // Do we need to retry the request?


      var retry = (_config$retry = config.retry) != null ? _config$retry : 3;
      var retryDelay = (_config$retryDelay = config.retryDelay) != null ? _config$retryDelay : defaultRetryDelay;
      var delay = typeof retryDelay === 'function' ? retryDelay(_this.failureCount, error) : retryDelay;
      var shouldRetry = retry === true || typeof retry === 'number' && _this.failureCount < retry || typeof retry === 'function' && retry(_this.failureCount, error);

      if (cancelRetry || !shouldRetry) {
        // We are done if the query does not need to be retried
        reject(error);
        return;
      }

      _this.failureCount++; // Notify on fail

      config.onFail == null ? void 0 : config.onFail(_this.failureCount, error); // Delay

      Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* sleep */ "q"])(delay) // Pause if the document is not visible or when the device is offline
      .then(function () {
        if (!_focusManager__WEBPACK_IMPORTED_MODULE_0__[/* focusManager */ "a"].isFocused() || !_onlineManager__WEBPACK_IMPORTED_MODULE_1__[/* onlineManager */ "a"].isOnline()) {
          return pause();
        }
      }).then(function () {
        if (cancelRetry) {
          reject(error);
        } else {
          run();
        }
      });
    });
  }; // Start loop


  run();
};

/***/ }),

/***/ "2O6R":
/*!*****************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-query/es/persistQueryClient-experimental/index.js ***!
  \*****************************************************************************************************************************************/
/*! exports provided: persistQueryClient */
/*! exports used: persistQueryClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return persistQueryClient; });
/* harmony import */ var _core_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/logger */ "ih67");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ "jtiS");



function _await(value, then, direct) {
  if (direct) {
    return then ? then(value) : value;
  }

  if (!value || !value.then) {
    value = Promise.resolve(value);
  }

  return then ? value.then(then) : value;
}

function _catch(body, recover) {
  try {
    var result = body();
  } catch (e) {
    return recover(e);
  }

  if (result && result.then) {
    return result.then(void 0, recover);
  }

  return result;
}

function _continue(value, then) {
  return value && value.then ? value.then(then) : then(value);
}

function _empty() {}

function _invokeIgnored(body) {
  var result = body();

  if (result && result.then) {
    return result.then(_empty);
  }
}

function _async(f) {
  return function () {
    for (var args = [], i = 0; i < arguments.length; i++) {
      args[i] = arguments[i];
    }

    try {
      return Promise.resolve(f.apply(this, args));
    } catch (e) {
      return Promise.reject(e);
    }
  };
}

var persistQueryClient = _async(function (_ref) {
  var queryClient = _ref.queryClient,
      persistor = _ref.persistor,
      _ref$maxAge = _ref.maxAge,
      maxAge = _ref$maxAge === void 0 ? 1000 * 60 * 60 * 24 : _ref$maxAge,
      _ref$buster = _ref.buster,
      buster = _ref$buster === void 0 ? '' : _ref$buster,
      hydrateOptions = _ref.hydrateOptions,
      dehydrateOptions = _ref.dehydrateOptions;
  return _invokeIgnored(function () {
    if (typeof window !== 'undefined') {
      // Subscribe to changes
      var saveClient = function saveClient() {
        var persistClient = {
          buster: buster,
          timestamp: Date.now(),
          clientState: Object(react_query__WEBPACK_IMPORTED_MODULE_1__["dehydrate"])(queryClient, dehydrateOptions)
        };
        persistor.persistClient(persistClient);
      }; // Attempt restore


      return _continue(_catch(function () {
        return _await(persistor.restoreClient(), function (persistedClient) {
          if (persistedClient) {
            if (persistedClient.timestamp) {
              var expired = Date.now() - persistedClient.timestamp > maxAge;
              var busted = persistedClient.buster !== buster;

              if (expired || busted) {
                persistor.removeClient();
              } else {
                Object(react_query__WEBPACK_IMPORTED_MODULE_1__["hydrate"])(queryClient, persistedClient.clientState, hydrateOptions);
              }
            } else {
              persistor.removeClient();
            }
          }
        });
      }, function (err) {
        Object(_core_logger__WEBPACK_IMPORTED_MODULE_0__[/* getLogger */ "a"])().error(err);
        Object(_core_logger__WEBPACK_IMPORTED_MODULE_0__[/* getLogger */ "a"])().warn('Encountered an error attempting to restore client cache from persisted location. As a precaution, the persisted cache will be discarded.');
        persistor.removeClient();
      }), function () {
        // Subscribe to changes in the query cache to trigger the save
        queryClient.getQueryCache().subscribe(saveClient);
      });
    }
  });
});

/***/ }),

/***/ "3sjb":
/*!***********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-query/es/react/useIsFetching.js ***!
  \***********************************************************************************************************************/
/*! exports provided: useIsFetching */
/*! exports used: useIsFetching */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useIsFetching; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_notifyManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/notifyManager */ "BTp1");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/utils */ "jLnA");
/* harmony import */ var _QueryClientProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QueryClientProvider */ "wR8M");





var checkIsFetching = function checkIsFetching(queryClient, filters, isFetching, setIsFetching) {
  var newIsFetching = queryClient.isFetching(filters);

  if (isFetching !== newIsFetching) {
    setIsFetching(newIsFetching);
  }
};

function useIsFetching(arg1, arg2) {
  var mountedRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(false);
  var queryClient = Object(_QueryClientProvider__WEBPACK_IMPORTED_MODULE_3__[/* useQueryClient */ "b"])();

  var _parseFilterArgs = Object(_core_utils__WEBPACK_IMPORTED_MODULE_2__[/* parseFilterArgs */ "k"])(arg1, arg2),
      filters = _parseFilterArgs[0];

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(queryClient.isFetching(filters)),
      isFetching = _React$useState[0],
      setIsFetching = _React$useState[1];

  var filtersRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(filters);
  filtersRef.current = filters;
  var isFetchingRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(isFetching);
  isFetchingRef.current = isFetching;
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    mountedRef.current = true;
    checkIsFetching(queryClient, filtersRef.current, isFetchingRef.current, setIsFetching);
    var unsubscribe = queryClient.getQueryCache().subscribe(_core_notifyManager__WEBPACK_IMPORTED_MODULE_1__[/* notifyManager */ "a"].batchCalls(function () {
      if (mountedRef.current) {
        checkIsFetching(queryClient, filtersRef.current, isFetchingRef.current, setIsFetching);
      }
    }));
    return function () {
      mountedRef.current = false;
      unsubscribe();
    };
  }, [queryClient]);
  return isFetching;
}

/***/ }),

/***/ "4IXx":
/*!*****************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-query/es/react/reactBatchedUpdates.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: unstable_batchedUpdates */
/*! exports used: unstable_batchedUpdates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return unstable_batchedUpdates; });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "7nmT");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);

var unstable_batchedUpdates = react_dom__WEBPACK_IMPORTED_MODULE_0___default.a.unstable_batchedUpdates;

/***/ }),

/***/ "4cYT":
/*!**************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-query/es/core/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/*! exports used: QueryClient, QueryClientProvider, dehydrate, hydrate, onlineManager, setLogger, useInfiniteQuery, useIsFetching, useQuery, useQueryClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _queryClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./queryClient */ "laoW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueryClient", function() { return _queryClient__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger */ "ih67");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setLogger", function() { return _logger__WEBPACK_IMPORTED_MODULE_1__["b"]; });

/* harmony import */ var _onlineManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./onlineManager */ "vQUu");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onlineManager", function() { return _onlineManager__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _hydration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hydration */ "XFSW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dehydrate", function() { return _hydration__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return _hydration__WEBPACK_IMPORTED_MODULE_3__["b"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types */ "tD2C");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_types__WEBPACK_IMPORTED_MODULE_4__, "QueryClientProvider")) __webpack_require__.d(__webpack_exports__, "QueryClientProvider", function() { return _types__WEBPACK_IMPORTED_MODULE_4__["QueryClientProvider"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_types__WEBPACK_IMPORTED_MODULE_4__, "useInfiniteQuery")) __webpack_require__.d(__webpack_exports__, "useInfiniteQuery", function() { return _types__WEBPACK_IMPORTED_MODULE_4__["useInfiniteQuery"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_types__WEBPACK_IMPORTED_MODULE_4__, "useIsFetching")) __webpack_require__.d(__webpack_exports__, "useIsFetching", function() { return _types__WEBPACK_IMPORTED_MODULE_4__["useIsFetching"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_types__WEBPACK_IMPORTED_MODULE_4__, "useQuery")) __webpack_require__.d(__webpack_exports__, "useQuery", function() { return _types__WEBPACK_IMPORTED_MODULE_4__["useQuery"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_types__WEBPACK_IMPORTED_MODULE_4__, "useQueryClient")) __webpack_require__.d(__webpack_exports__, "useQueryClient", function() { return _types__WEBPACK_IMPORTED_MODULE_4__["useQueryClient"]; });















 // Types



/***/ }),

/***/ "87Tw":
/*!*********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-query/es/react/QueryErrorResetBoundary.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: useQueryErrorResetBoundary, QueryErrorResetBoundary */
/*! exports used: useQueryErrorResetBoundary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useQueryErrorResetBoundary; });
/* unused harmony export QueryErrorResetBoundary */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // CONTEXT

function createValue() {
  var _isReset = false;
  return {
    clearReset: function clearReset() {
      _isReset = false;
    },
    reset: function reset() {
      _isReset = true;
    },
    isReset: function isReset() {
      return _isReset;
    }
  };
}

var QueryErrorResetBoundaryContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(createValue()); // HOOK

var useQueryErrorResetBoundary = function useQueryErrorResetBoundary() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(QueryErrorResetBoundaryContext);
}; // COMPONENT

var QueryErrorResetBoundary = function QueryErrorResetBoundary(_ref) {
  var children = _ref.children;
  var value = react__WEBPACK_IMPORTED_MODULE_0___default.a.useMemo(function () {
    return createValue();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(QueryErrorResetBoundaryContext.Provider, {
    value: value
  }, typeof children === 'function' ? children(value) : children);
};

/***/ }),

/***/ "9bJ9":
/*!***************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-query/es/react/setBatchUpdatesFn.js ***!
  \***************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "BTp1");
/* harmony import */ var _reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reactBatchedUpdates */ "4IXx");


_core__WEBPACK_IMPORTED_MODULE_0__[/* notifyManager */ "a"].setBatchNotifyFunction(_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_1__[/* unstable_batchedUpdates */ "a"]);

/***/ }),

/***/ "A4Rj":
/*!**********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-query/es/react/useBaseQuery.js ***!
  \**********************************************************************************************************************/
/*! exports provided: useBaseQuery */
/*! exports used: useBaseQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useBaseQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_notifyManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/notifyManager */ "BTp1");
/* harmony import */ var _QueryErrorResetBoundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QueryErrorResetBoundary */ "87Tw");
/* harmony import */ var _QueryClientProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QueryClientProvider */ "wR8M");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "xSoD");





function useBaseQuery(options, Observer) {
  var mountedRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(false);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0),
      forceUpdate = _React$useState[1];

  var queryClient = Object(_QueryClientProvider__WEBPACK_IMPORTED_MODULE_3__[/* useQueryClient */ "b"])();
  var errorResetBoundary = Object(_QueryErrorResetBoundary__WEBPACK_IMPORTED_MODULE_2__[/* useQueryErrorResetBoundary */ "a"])();
  var defaultedOptions = queryClient.defaultQueryObserverOptions(options); // Make sure results are optimistically set in fetching state before subscribing or updating options

  defaultedOptions.optimisticResults = true; // Include callbacks in batch renders

  if (defaultedOptions.onError) {
    defaultedOptions.onError = _core_notifyManager__WEBPACK_IMPORTED_MODULE_1__[/* notifyManager */ "a"].batchCalls(defaultedOptions.onError);
  }

  if (defaultedOptions.onSuccess) {
    defaultedOptions.onSuccess = _core_notifyManager__WEBPACK_IMPORTED_MODULE_1__[/* notifyManager */ "a"].batchCalls(defaultedOptions.onSuccess);
  }

  if (defaultedOptions.onSettled) {
    defaultedOptions.onSettled = _core_notifyManager__WEBPACK_IMPORTED_MODULE_1__[/* notifyManager */ "a"].batchCalls(defaultedOptions.onSettled);
  }

  if (defaultedOptions.suspense) {
    // Always set stale time when using suspense to prevent
    // fetching again when directly mounting after suspending
    if (typeof defaultedOptions.staleTime !== 'number') {
      defaultedOptions.staleTime = 1000;
    } // Set cache time to 1 if the option has been set to 0
    // when using suspense to prevent infinite loop of fetches


    if (defaultedOptions.cacheTime === 0) {
      defaultedOptions.cacheTime = 1;
    }
  }

  if (defaultedOptions.suspense || defaultedOptions.useErrorBoundary) {
    // Prevent retrying failed query if the error boundary has not been reset yet
    if (!errorResetBoundary.isReset()) {
      defaultedOptions.retryOnMount = false;
    }
  }

  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(function () {
    return new Observer(queryClient, defaultedOptions);
  }),
      observer = _React$useState2[0];

  var result = observer.getOptimisticResult(defaultedOptions);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    mountedRef.current = true;
    errorResetBoundary.clearReset();
    var unsubscribe = observer.subscribe(_core_notifyManager__WEBPACK_IMPORTED_MODULE_1__[/* notifyManager */ "a"].batchCalls(function () {
      if (mountedRef.current) {
        forceUpdate(function (x) {
          return x + 1;
        });
      }
    })); // Update result to make sure we did not miss any query updates
    // between creating the observer and subscribing to it.

    observer.updateResult();
    return function () {
      mountedRef.current = false;
      unsubscribe();
    };
  }, [errorResetBoundary, observer]);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    // Do not notify on updates because of changes in the options because
    // these changes should already be reflected in the optimistic result.
    observer.setOptions(defaultedOptions, {
      listeners: false
    });
  }, [defaultedOptions, observer]); // Handle suspense

  if (defaultedOptions.suspense && result.isLoading) {
    throw observer.fetchOptimistic(defaultedOptions).then(function (_ref) {
      var data = _ref.data;
      defaultedOptions.onSuccess == null ? void 0 : defaultedOptions.onSuccess(data);
      defaultedOptions.onSettled == null ? void 0 : defaultedOptions.onSettled(data, null);
    }).catch(function (error) {
      errorResetBoundary.clearReset();
      defaultedOptions.onError == null ? void 0 : defaultedOptions.onError(error);
      defaultedOptions.onSettled == null ? void 0 : defaultedOptions.onSettled(undefined, error);
    });
  } // Handle error boundary


  if (result.isError && !errorResetBoundary.isReset() && !result.isFetching && Object(_utils__WEBPACK_IMPORTED_MODULE_4__[/* shouldThrowError */ "a"])(defaultedOptions.suspense, defaultedOptions.useErrorBoundary, [result.error, observer.getCurrentQuery()])) {
    throw result.error;
  } // Handle result property usage tracking


  if (defaultedOptions.notifyOnChangeProps === 'tracked') {
    result = observer.trackResult(result, defaultedOptions);
  }

  return result;
}

/***/ }),

/***/ "BTp1":
/*!**********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-query/es/core/notifyManager.js ***!
  \**********************************************************************************************************************/
/*! exports provided: NotifyManager, notifyManager */
/*! exports used: notifyManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NotifyManager */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return notifyManager; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "jLnA");
 // TYPES

// CLASS
var NotifyManager = /*#__PURE__*/function () {
  function NotifyManager() {
    this.queue = [];
    this.transactions = 0;

    this.notifyFn = function (callback) {
      callback();
    };

    this.batchNotifyFn = function (callback) {
      callback();
    };
  }

  var _proto = NotifyManager.prototype;

  _proto.batch = function batch(callback) {
    var result;
    this.transactions++;

    try {
      result = callback();
    } finally {
      this.transactions--;

      if (!this.transactions) {
        this.flush();
      }
    }

    return result;
  };

  _proto.schedule = function schedule(callback) {
    var _this = this;

    if (this.transactions) {
      this.queue.push(callback);
    } else {
      Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* scheduleMicrotask */ "o"])(function () {
        _this.notifyFn(callback);
      });
    }
  }
  /**
   * All calls to the wrapped function will be batched.
   */
  ;

  _proto.batchCalls = function batchCalls(callback) {
    var _this2 = this;

    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this2.schedule(function () {
        callback.apply(void 0, args);
      });
    };
  };

  _proto.flush = function flush() {
    var _this3 = this;

    var queue = this.queue;
    this.queue = [];

    if (queue.length) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* scheduleMicrotask */ "o"])(function () {
        _this3.batchNotifyFn(function () {
          queue.forEach(function (callback) {
            _this3.notifyFn(callback);
          });
        });
      });
    }
  }
  /**
   * Use this method to set a custom notify function.
   * This can be used to for example wrap notifications with `React.act` while running tests.
   */
  ;

  _proto.setNotifyFunction = function setNotifyFunction(fn) {
    this.notifyFn = fn;
  }
  /**
   * Use this method to set a custom function to batch notifications together into a single tick.
   * By default React Query will use the batch function provided by ReactDOM or React Native.
   */
  ;

  _proto.setBatchNotifyFunction = function setBatchNotifyFunction(fn) {
    this.batchNotifyFn = fn;
  };

  return NotifyManager;
}(); // SINGLETON

var notifyManager = new NotifyManager();

/***/ }),

/***/ "Bljx":
/*!*****************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-query/es/devtools/Logo.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logo; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "cxan");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Logo(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("svg", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    width: "40px",
    height: "40px",
    viewBox: "0 0 190 190",
    version: "1.1"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("g", {
    transform: "translate(-33.000000, 0.000000)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("path", {
    d: "M72.7239712,61.3436237 C69.631224,46.362877 68.9675112,34.8727722 70.9666331,26.5293551 C72.1555965,21.5671678 74.3293088,17.5190846 77.6346064,14.5984631 C81.1241394,11.5150478 85.5360327,10.0020122 90.493257,10.0020122 C98.6712013,10.0020122 107.26826,13.7273214 116.455725,20.8044264 C120.20312,23.6910458 124.092437,27.170411 128.131651,31.2444746 C128.45314,30.8310265 128.816542,30.4410453 129.22143,30.0806152 C140.64098,19.9149716 150.255245,13.5989272 158.478408,11.1636507 C163.367899,9.715636 167.958526,9.57768202 172.138936,10.983031 C176.551631,12.4664684 180.06766,15.5329489 182.548314,19.8281091 C186.642288,26.9166735 187.721918,36.2310983 186.195595,47.7320243 C185.573451,52.4199112 184.50985,57.5263831 183.007094,63.0593153 C183.574045,63.1277086 184.142416,63.2532808 184.705041,63.4395297 C199.193932,68.2358678 209.453582,73.3937462 215.665021,79.2882839 C219.360669,82.7953831 221.773972,86.6998434 222.646365,91.0218204 C223.567176,95.5836746 222.669313,100.159332 220.191548,104.451297 C216.105211,111.529614 208.591643,117.11221 197.887587,121.534031 C193.589552,123.309539 188.726579,124.917559 183.293259,126.363748 C183.541176,126.92292 183.733521,127.516759 183.862138,128.139758 C186.954886,143.120505 187.618598,154.61061 185.619477,162.954027 C184.430513,167.916214 182.256801,171.964297 178.951503,174.884919 C175.46197,177.968334 171.050077,179.48137 166.092853,179.48137 C157.914908,179.48137 149.31785,175.756061 140.130385,168.678956 C136.343104,165.761613 132.410866,162.238839 128.325434,158.108619 C127.905075,158.765474 127.388968,159.376011 126.77857,159.919385 C115.35902,170.085028 105.744755,176.401073 97.5215915,178.836349 C92.6321009,180.284364 88.0414736,180.422318 83.8610636,179.016969 C79.4483686,177.533532 75.9323404,174.467051 73.4516862,170.171891 C69.3577116,163.083327 68.2780823,153.768902 69.8044053,142.267976 C70.449038,137.410634 71.56762,132.103898 73.1575891,126.339009 C72.5361041,126.276104 71.9120754,126.144816 71.2949591,125.940529 C56.8060684,121.144191 46.5464184,115.986312 40.3349789,110.091775 C36.6393312,106.584675 34.2260275,102.680215 33.3536352,98.3582381 C32.4328237,93.7963839 33.3306866,89.2207269 35.8084524,84.9287618 C39.8947886,77.8504443 47.4083565,72.2678481 58.1124133,67.8460273 C62.5385143,66.0176154 67.5637208,64.366822 73.1939394,62.8874674 C72.9933393,62.3969171 72.8349374,61.8811235 72.7239712,61.3436237 Z",
    fill: "#002C4B",
    fillRule: "nonzero",
    transform: "translate(128.000000, 95.000000) scale(-1, 1) translate(-128.000000, -95.000000) "
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("path", {
    d: "M113.396882,64 L142.608177,64 C144.399254,64 146.053521,64.958025 146.944933,66.5115174 L161.577138,92.0115174 C162.461464,93.5526583 162.461464,95.4473417 161.577138,96.9884826 L146.944933,122.488483 C146.053521,124.041975 144.399254,125 142.608177,125 L113.396882,125 C111.605806,125 109.951539,124.041975 109.060126,122.488483 L94.4279211,96.9884826 C93.543596,95.4473417 93.543596,93.5526583 94.4279211,92.0115174 L109.060126,66.5115174 C109.951539,64.958025 111.605806,64 113.396882,64 Z M138.987827,70.2765273 C140.779849,70.2765273 142.434839,71.2355558 143.325899,72.7903404 L154.343038,92.0138131 C155.225607,93.5537825 155.225607,95.4462175 154.343038,96.9861869 L143.325899,116.20966 C142.434839,117.764444 140.779849,118.723473 138.987827,118.723473 L117.017233,118.723473 C115.225211,118.723473 113.570221,117.764444 112.67916,116.20966 L101.662022,96.9861869 C100.779452,95.4462175 100.779452,93.5537825 101.662022,92.0138131 L112.67916,72.7903404 C113.570221,71.2355558 115.225211,70.2765273 117.017233,70.2765273 L138.987827,70.2765273 Z M135.080648,77.1414791 L120.924411,77.1414791 C119.134228,77.1414791 117.480644,78.0985567 116.5889,79.6508285 L116.5889,79.6508285 L109.489217,92.0093494 C108.603232,93.5515958 108.603232,95.4484042 109.489217,96.9906506 L109.489217,96.9906506 L116.5889,109.349172 C117.480644,110.901443 119.134228,111.858521 120.924411,111.858521 L120.924411,111.858521 L135.080648,111.858521 C136.870831,111.858521 138.524416,110.901443 139.41616,109.349172 L139.41616,109.349172 L146.515843,96.9906506 C147.401828,95.4484042 147.401828,93.5515958 146.515843,92.0093494 L146.515843,92.0093494 L139.41616,79.6508285 C138.524416,78.0985567 136.870831,77.1414791 135.080648,77.1414791 L135.080648,77.1414791 Z M131.319186,83.7122186 C133.108028,83.7122186 134.760587,84.6678753 135.652827,86.2183156 L138.983552,92.0060969 C139.87203,93.5500005 139.87203,95.4499995 138.983552,96.9939031 L135.652827,102.781684 C134.760587,104.332125 133.108028,105.287781 131.319186,105.287781 L124.685874,105.287781 C122.897032,105.287781 121.244473,104.332125 120.352233,102.781684 L117.021508,96.9939031 C116.13303,95.4499995 116.13303,93.5500005 117.021508,92.0060969 L120.352233,86.2183156 C121.244473,84.6678753 122.897032,83.7122186 124.685874,83.7122186 L131.319186,83.7122186 Z M128.003794,90.1848875 C126.459294,90.1848875 125.034382,91.0072828 124.263005,92.3424437 C123.491732,93.6774232 123.491732,95.3225768 124.263005,96.6575563 C125.034382,97.9927172 126.459294,98.8151125 128.001266,98.8151125 L128.001266,98.8151125 C129.545766,98.8151125 130.970678,97.9927172 131.742055,96.6575563 C132.513327,95.3225768 132.513327,93.6774232 131.742055,92.3424437 C130.970678,91.0072828 129.545766,90.1848875 128.003794,90.1848875 L128.003794,90.1848875 Z M93,94.5009646 L100.767764,94.5009646",
    fill: "#FFD94C"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("path", {
    d: "M87.8601729,108.357758 C89.1715224,107.608286 90.8360246,108.074601 91.5779424,109.399303 L91.5779424,109.399303 L92.0525843,110.24352 C95.8563392,116.982993 99.8190116,123.380176 103.940602,129.435068 C108.807881,136.585427 114.28184,143.82411 120.362479,151.151115 C121.316878,152.30114 121.184944,154.011176 120.065686,154.997937 L120.065686,154.997937 L119.454208,155.534625 C99.3465389,173.103314 86.2778188,176.612552 80.2480482,166.062341 C74.3500652,155.742717 76.4844915,136.982888 86.6513274,109.782853 C86.876818,109.179582 87.3045861,108.675291 87.8601729,108.357758 Z M173.534177,129.041504 C174.986131,128.785177 176.375496,129.742138 176.65963,131.194242 L176.65963,131.194242 L176.812815,131.986376 C181.782365,157.995459 178.283348,171 166.315764,171 C154.609745,171 139.708724,159.909007 121.612702,137.727022 C121.211349,137.235047 120.994572,136.617371 121,135.981509 C121.013158,134.480686 122.235785,133.274651 123.730918,133.287756 L123.730918,133.287756 L124.684654,133.294531 C132.305698,133.335994 139.714387,133.071591 146.910723,132.501323 C155.409039,131.82788 164.283523,130.674607 173.534177,129.041504 Z M180.408726,73.8119663 C180.932139,72.4026903 182.508386,71.6634537 183.954581,72.149012 L183.954581,72.149012 L184.742552,72.4154854 C210.583763,81.217922 220.402356,90.8916805 214.198332,101.436761 C208.129904,111.751366 190.484347,119.260339 161.26166,123.963678 C160.613529,124.067994 159.948643,123.945969 159.382735,123.618843 C158.047025,122.846729 157.602046,121.158214 158.388848,119.847438 L158.388848,119.847438 L158.889328,119.0105 C162.877183,112.31633 166.481358,105.654262 169.701854,99.0242957 C173.50501,91.1948179 177.073967,82.7907081 180.408726,73.8119663 Z M94.7383398,66.0363218 C95.3864708,65.9320063 96.0513565,66.0540315 96.6172646,66.3811573 C97.9529754,67.153271 98.3979538,68.8417862 97.6111517,70.1525615 L97.6111517,70.1525615 L97.1106718,70.9895001 C93.1228168,77.6836699 89.5186416,84.3457379 86.2981462,90.9757043 C82.49499,98.8051821 78.9260328,107.209292 75.5912744,116.188034 C75.0678608,117.59731 73.4916142,118.336546 72.045419,117.850988 L72.045419,117.850988 L71.2574475,117.584515 C45.4162372,108.782078 35.597644,99.1083195 41.8016679,88.5632391 C47.8700957,78.2486335 65.515653,70.7396611 94.7383398,66.0363218 Z M136.545792,34.4653746 C156.653461,16.8966864 169.722181,13.3874478 175.751952,23.9376587 C181.649935,34.2572826 179.515508,53.0171122 169.348673,80.2171474 C169.123182,80.8204179 168.695414,81.324709 168.139827,81.6422422 C166.828478,82.3917144 165.163975,81.9253986 164.422058,80.6006966 L164.422058,80.6006966 L163.947416,79.7564798 C160.143661,73.0170065 156.180988,66.6198239 152.059398,60.564932 C147.192119,53.4145727 141.71816,46.1758903 135.637521,38.8488847 C134.683122,37.6988602 134.815056,35.9888243 135.934314,35.0020629 L135.934314,35.0020629 Z M90.6842361,18 C102.390255,18 117.291276,29.0909926 135.387298,51.2729777 C135.788651,51.7649527 136.005428,52.3826288 136,53.0184911 C135.986842,54.5193144 134.764215,55.7253489 133.269082,55.7122445 L133.269082,55.7122445 L132.315346,55.7054689 C124.694302,55.6640063 117.285613,55.9284091 110.089277,56.4986773 C101.590961,57.17212 92.7164767,58.325393 83.4658235,59.9584962 C82.0138691,60.2148231 80.6245044,59.2578618 80.3403697,57.805758 L80.3403697,57.805758 L80.1871846,57.0136235 C75.2176347,31.0045412 78.7166519,18 90.6842361,18 Z",
    fill: "#FF4154"
  }))));
}

/***/ }),

/***/ "CSPR":
/*!****************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-query/es/devtools/useLocalStorage.js ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useLocalStorage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var getItem = function getItem(key) {
  try {
    var itemValue = localStorage.getItem(key);

    if (typeof itemValue === 'string') {
      return JSON.parse(itemValue);
    }

    return undefined;
  } catch (_unused) {
    return undefined;
  }
};

function useLocalStorage(key, defaultValue) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(),
      value = _React$useState[0],
      setValue = _React$useState[1];

  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    var initialValue = getItem(key);

    if (typeof initialValue === 'undefined' || initialValue === null) {
      setValue(typeof defaultValue === 'function' ? defaultValue() : defaultValue);
    } else {
      setValue(initialValue);
    }
  }, [defaultValue, key]);
  var setter = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(function (updater) {
    setValue(function (old) {
      var newVal = updater;

      if (typeof updater == 'function') {
        newVal = updater(old);
      }

      try {
        localStorage.setItem(key, JSON.stringify(newVal));
      } catch (_unused2) {}

      return newVal;
    });
  }, [key]);
  return [value, setter];
}

/***/ }),

/***/ "DcPZ":
/*!**********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-query/es/core/queryObserver.js ***!
  \**********************************************************************************************************************/
/*! exports provided: QueryObserver */
/*! exports used: QueryObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueryObserver; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "cxan");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "BFfR");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "jLnA");
/* harmony import */ var _notifyManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notifyManager */ "BTp1");
/* harmony import */ var _focusManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./focusManager */ "HXfz");
/* harmony import */ var _subscribable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subscribable */ "FyGo");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logger */ "ih67");
/* harmony import */ var _retryer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./retryer */ "1oX/");








var QueryObserver = /*#__PURE__*/function (_Subscribable) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(QueryObserver, _Subscribable);

  function QueryObserver(client, options) {
    var _this;

    _this = _Subscribable.call(this) || this;
    _this.client = client;
    _this.options = options;
    _this.trackedProps = [];
    _this.selectError = null;

    _this.bindMethods();

    _this.setOptions(options);

    return _this;
  }

  var _proto = QueryObserver.prototype;

  _proto.bindMethods = function bindMethods() {
    this.remove = this.remove.bind(this);
    this.refetch = this.refetch.bind(this);
  };

  _proto.onSubscribe = function onSubscribe() {
    if (this.listeners.length === 1) {
      this.currentQuery.addObserver(this);

      if (shouldFetchOnMount(this.currentQuery, this.options)) {
        this.executeFetch();
      }

      this.updateTimers();
    }
  };

  _proto.onUnsubscribe = function onUnsubscribe() {
    if (!this.listeners.length) {
      this.destroy();
    }
  };

  _proto.shouldFetchOnReconnect = function shouldFetchOnReconnect() {
    return shouldFetchOn(this.currentQuery, this.options, this.options.refetchOnReconnect);
  };

  _proto.shouldFetchOnWindowFocus = function shouldFetchOnWindowFocus() {
    return shouldFetchOn(this.currentQuery, this.options, this.options.refetchOnWindowFocus);
  };

  _proto.destroy = function destroy() {
    this.listeners = [];
    this.clearTimers();
    this.currentQuery.removeObserver(this);
  };

  _proto.setOptions = function setOptions(options, notifyOptions) {
    var prevOptions = this.options;
    var prevQuery = this.currentQuery;
    this.options = this.client.defaultQueryObserverOptions(options);

    if (typeof this.options.enabled !== 'undefined' && typeof this.options.enabled !== 'boolean') {
      throw new Error('Expected enabled to be a boolean');
    } // Keep previous query key if the user does not supply one


    if (!this.options.queryKey) {
      this.options.queryKey = prevOptions.queryKey;
    }

    this.updateQuery();
    var mounted = this.hasListeners(); // Fetch if there are subscribers

    if (mounted && shouldFetchOptionally(this.currentQuery, prevQuery, this.options, prevOptions)) {
      this.executeFetch();
    } // Update result


    this.updateResult(notifyOptions); // Update stale interval if needed

    if (mounted && (this.currentQuery !== prevQuery || this.options.enabled !== prevOptions.enabled || this.options.staleTime !== prevOptions.staleTime)) {
      this.updateStaleTimeout();
    }

    var nextRefetchInterval = this.computeRefetchInterval(); // Update refetch interval if needed

    if (mounted && (this.currentQuery !== prevQuery || this.options.enabled !== prevOptions.enabled || nextRefetchInterval !== this.currentRefetchInterval)) {
      this.updateRefetchInterval(nextRefetchInterval);
    }
  };

  _proto.getOptimisticResult = function getOptimisticResult(options) {
    var defaultedOptions = this.client.defaultQueryObserverOptions(options);
    var query = this.client.getQueryCache().build(this.client, defaultedOptions);
    return this.createResult(query, defaultedOptions);
  };

  _proto.getCurrentResult = function getCurrentResult() {
    return this.currentResult;
  };

  _proto.trackResult = function trackResult(result, defaultedOptions) {
    var _this2 = this;

    var trackedResult = {};

    var trackProp = function trackProp(key) {
      if (!_this2.trackedProps.includes(key)) {
        _this2.trackedProps.push(key);
      }
    };

    Object.keys(result).forEach(function (key) {
      Object.defineProperty(trackedResult, key, {
        configurable: false,
        enumerable: true,
        get: function get() {
          trackProp(key);
          return result[key];
        }
      });
    });

    if (defaultedOptions.useErrorBoundary || defaultedOptions.suspense) {
      trackProp('error');
    }

    return trackedResult;
  };

  _proto.getNextResult = function getNextResult(options) {
    var _this3 = this;

    return new Promise(function (resolve, reject) {
      var unsubscribe = _this3.subscribe(function (result) {
        if (!result.isFetching) {
          unsubscribe();

          if (result.isError && (options == null ? void 0 : options.throwOnError)) {
            reject(result.error);
          } else {
            resolve(result);
          }
        }
      });
    });
  };

  _proto.getCurrentQuery = function getCurrentQuery() {
    return this.currentQuery;
  };

  _proto.remove = function remove() {
    this.client.getQueryCache().remove(this.currentQuery);
  };

  _proto.refetch = function refetch(options) {
    return this.fetch(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, options, {
      meta: {
        refetchPage: options == null ? void 0 : options.refetchPage
      }
    }));
  };

  _proto.fetchOptimistic = function fetchOptimistic(options) {
    var _this4 = this;

    var defaultedOptions = this.client.defaultQueryObserverOptions(options);
    var query = this.client.getQueryCache().build(this.client, defaultedOptions);
    return query.fetch().then(function () {
      return _this4.createResult(query, defaultedOptions);
    });
  };

  _proto.fetch = function fetch(fetchOptions) {
    var _this5 = this;

    return this.executeFetch(fetchOptions).then(function () {
      _this5.updateResult();

      return _this5.currentResult;
    });
  };

  _proto.executeFetch = function executeFetch(fetchOptions) {
    // Make sure we reference the latest query as the current one might have been removed
    this.updateQuery(); // Fetch

    var promise = this.currentQuery.fetch(this.options, fetchOptions);

    if (!(fetchOptions == null ? void 0 : fetchOptions.throwOnError)) {
      promise = promise.catch(_utils__WEBPACK_IMPORTED_MODULE_2__[/* noop */ "j"]);
    }

    return promise;
  };

  _proto.updateStaleTimeout = function updateStaleTimeout() {
    var _this6 = this;

    this.clearStaleTimeout();

    if (_utils__WEBPACK_IMPORTED_MODULE_2__[/* isServer */ "f"] || this.currentResult.isStale || !Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* isValidTimeout */ "g"])(this.options.staleTime)) {
      return;
    }

    var time = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* timeUntilStale */ "r"])(this.currentResult.dataUpdatedAt, this.options.staleTime); // The timeout is sometimes triggered 1 ms before the stale time expiration.
    // To mitigate this issue we always add 1 ms to the timeout.

    var timeout = time + 1;
    this.staleTimeoutId = setTimeout(function () {
      if (!_this6.currentResult.isStale) {
        _this6.updateResult();
      }
    }, timeout);
  };

  _proto.computeRefetchInterval = function computeRefetchInterval() {
    var _this$options$refetch;

    return typeof this.options.refetchInterval === 'function' ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : (_this$options$refetch = this.options.refetchInterval) != null ? _this$options$refetch : false;
  };

  _proto.updateRefetchInterval = function updateRefetchInterval(nextInterval) {
    var _this7 = this;

    this.clearRefetchInterval();
    this.currentRefetchInterval = nextInterval;

    if (_utils__WEBPACK_IMPORTED_MODULE_2__[/* isServer */ "f"] || this.options.enabled === false || !Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* isValidTimeout */ "g"])(this.currentRefetchInterval) || this.currentRefetchInterval === 0) {
      return;
    }

    this.refetchIntervalId = setInterval(function () {
      if (_this7.options.refetchIntervalInBackground || _focusManager__WEBPACK_IMPORTED_MODULE_4__[/* focusManager */ "a"].isFocused()) {
        _this7.executeFetch();
      }
    }, this.currentRefetchInterval);
  };

  _proto.updateTimers = function updateTimers() {
    this.updateStaleTimeout();
    this.updateRefetchInterval(this.computeRefetchInterval());
  };

  _proto.clearTimers = function clearTimers() {
    this.clearStaleTimeout();
    this.clearRefetchInterval();
  };

  _proto.clearStaleTimeout = function clearStaleTimeout() {
    clearTimeout(this.staleTimeoutId);
    this.staleTimeoutId = undefined;
  };

  _proto.clearRefetchInterval = function clearRefetchInterval() {
    clearInterval(this.refetchIntervalId);
    this.refetchIntervalId = undefined;
  };

  _proto.createResult = function createResult(query, options) {
    var prevQuery = this.currentQuery;
    var prevOptions = this.options;
    var prevResult = this.currentResult;
    var prevResultState = this.currentResultState;
    var prevResultOptions = this.currentResultOptions;
    var queryChange = query !== prevQuery;
    var queryInitialState = queryChange ? query.state : this.currentQueryInitialState;
    var prevQueryResult = queryChange ? this.currentResult : this.previousQueryResult;
    var state = query.state;
    var dataUpdatedAt = state.dataUpdatedAt,
        error = state.error,
        errorUpdatedAt = state.errorUpdatedAt,
        isFetching = state.isFetching,
        status = state.status;
    var isPreviousData = false;
    var isPlaceholderData = false;
    var data; // Optimistically set result in fetching state if needed

    if (options.optimisticResults) {
      var mounted = this.hasListeners();
      var fetchOnMount = !mounted && shouldFetchOnMount(query, options);
      var fetchOptionally = mounted && shouldFetchOptionally(query, prevQuery, options, prevOptions);

      if (fetchOnMount || fetchOptionally) {
        isFetching = true;

        if (!dataUpdatedAt) {
          status = 'loading';
        }
      }
    } // Keep previous data if needed


    if (options.keepPreviousData && !state.dataUpdateCount && (prevQueryResult == null ? void 0 : prevQueryResult.isSuccess) && status !== 'error') {
      data = prevQueryResult.data;
      dataUpdatedAt = prevQueryResult.dataUpdatedAt;
      status = prevQueryResult.status;
      isPreviousData = true;
    } // Select data if needed
    else if (options.select && typeof state.data !== 'undefined') {
        // Memoize select result
        if (prevResult && state.data === (prevResultState == null ? void 0 : prevResultState.data) && options.select === this.selectFn) {
          data = this.selectResult;
        } else {
          try {
            this.selectFn = options.select;
            data = options.select(state.data);

            if (options.structuralSharing !== false) {
              data = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* replaceEqualDeep */ "n"])(prevResult == null ? void 0 : prevResult.data, data);
            }

            this.selectResult = data;
            this.selectError = null;
          } catch (selectError) {
            Object(_logger__WEBPACK_IMPORTED_MODULE_6__[/* getLogger */ "a"])().error(selectError);
            this.selectError = selectError;
          }
        }
      } // Use query data
      else {
          data = state.data;
        } // Show placeholder data if needed


    if (typeof options.placeholderData !== 'undefined' && typeof data === 'undefined' && (status === 'loading' || status === 'idle')) {
      var placeholderData; // Memoize placeholder data

      if ((prevResult == null ? void 0 : prevResult.isPlaceholderData) && options.placeholderData === (prevResultOptions == null ? void 0 : prevResultOptions.placeholderData)) {
        placeholderData = prevResult.data;
      } else {
        placeholderData = typeof options.placeholderData === 'function' ? options.placeholderData() : options.placeholderData;

        if (options.select && typeof placeholderData !== 'undefined') {
          try {
            placeholderData = options.select(placeholderData);

            if (options.structuralSharing !== false) {
              placeholderData = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* replaceEqualDeep */ "n"])(prevResult == null ? void 0 : prevResult.data, placeholderData);
            }

            this.selectError = null;
          } catch (selectError) {
            Object(_logger__WEBPACK_IMPORTED_MODULE_6__[/* getLogger */ "a"])().error(selectError);
            this.selectError = selectError;
          }
        }
      }

      if (typeof placeholderData !== 'undefined') {
        status = 'success';
        data = placeholderData;
        isPlaceholderData = true;
      }
    }

    if (this.selectError) {
      error = this.selectError;
      data = this.selectResult;
      errorUpdatedAt = Date.now();
      status = 'error';
    }

    var result = {
      status: status,
      isLoading: status === 'loading',
      isSuccess: status === 'success',
      isError: status === 'error',
      isIdle: status === 'idle',
      data: data,
      dataUpdatedAt: dataUpdatedAt,
      error: error,
      errorUpdatedAt: errorUpdatedAt,
      failureCount: state.fetchFailureCount,
      errorUpdateCount: state.errorUpdateCount,
      isFetched: state.dataUpdateCount > 0 || state.errorUpdateCount > 0,
      isFetchedAfterMount: state.dataUpdateCount > queryInitialState.dataUpdateCount || state.errorUpdateCount > queryInitialState.errorUpdateCount,
      isFetching: isFetching,
      isRefetching: isFetching && status !== 'loading',
      isLoadingError: status === 'error' && state.dataUpdatedAt === 0,
      isPlaceholderData: isPlaceholderData,
      isPreviousData: isPreviousData,
      isRefetchError: status === 'error' && state.dataUpdatedAt !== 0,
      isStale: isStale(query, options),
      refetch: this.refetch,
      remove: this.remove
    };
    return result;
  };

  _proto.shouldNotifyListeners = function shouldNotifyListeners(result, prevResult) {
    if (!prevResult) {
      return true;
    }

    var _this$options = this.options,
        notifyOnChangeProps = _this$options.notifyOnChangeProps,
        notifyOnChangePropsExclusions = _this$options.notifyOnChangePropsExclusions;

    if (!notifyOnChangeProps && !notifyOnChangePropsExclusions) {
      return true;
    }

    if (notifyOnChangeProps === 'tracked' && !this.trackedProps.length) {
      return true;
    }

    var includedProps = notifyOnChangeProps === 'tracked' ? this.trackedProps : notifyOnChangeProps;
    return Object.keys(result).some(function (key) {
      var typedKey = key;
      var changed = result[typedKey] !== prevResult[typedKey];
      var isIncluded = includedProps == null ? void 0 : includedProps.some(function (x) {
        return x === key;
      });
      var isExcluded = notifyOnChangePropsExclusions == null ? void 0 : notifyOnChangePropsExclusions.some(function (x) {
        return x === key;
      });
      return changed && !isExcluded && (!includedProps || isIncluded);
    });
  };

  _proto.updateResult = function updateResult(notifyOptions) {
    var prevResult = this.currentResult;
    this.currentResult = this.createResult(this.currentQuery, this.options);
    this.currentResultState = this.currentQuery.state;
    this.currentResultOptions = this.options; // Only notify if something has changed

    if (Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* shallowEqualObjects */ "p"])(this.currentResult, prevResult)) {
      return;
    } // Determine which callbacks to trigger


    var defaultNotifyOptions = {
      cache: true
    };

    if ((notifyOptions == null ? void 0 : notifyOptions.listeners) !== false && this.shouldNotifyListeners(this.currentResult, prevResult)) {
      defaultNotifyOptions.listeners = true;
    }

    this.notify(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, defaultNotifyOptions, notifyOptions));
  };

  _proto.updateQuery = function updateQuery() {
    var query = this.client.getQueryCache().build(this.client, this.options);

    if (query === this.currentQuery) {
      return;
    }

    var prevQuery = this.currentQuery;
    this.currentQuery = query;
    this.currentQueryInitialState = query.state;
    this.previousQueryResult = this.currentResult;

    if (this.hasListeners()) {
      prevQuery == null ? void 0 : prevQuery.removeObserver(this);
      query.addObserver(this);
    }
  };

  _proto.onQueryUpdate = function onQueryUpdate(action) {
    var notifyOptions = {};

    if (action.type === 'success') {
      notifyOptions.onSuccess = true;
    } else if (action.type === 'error' && !Object(_retryer__WEBPACK_IMPORTED_MODULE_7__[/* isCancelledError */ "c"])(action.error)) {
      notifyOptions.onError = true;
    }

    this.updateResult(notifyOptions);

    if (this.hasListeners()) {
      this.updateTimers();
    }
  };

  _proto.notify = function notify(notifyOptions) {
    var _this8 = this;

    _notifyManager__WEBPACK_IMPORTED_MODULE_3__[/* notifyManager */ "a"].batch(function () {
      // First trigger the configuration callbacks
      if (notifyOptions.onSuccess) {
        _this8.options.onSuccess == null ? void 0 : _this8.options.onSuccess(_this8.currentResult.data);
        _this8.options.onSettled == null ? void 0 : _this8.options.onSettled(_this8.currentResult.data, null);
      } else if (notifyOptions.onError) {
        _this8.options.onError == null ? void 0 : _this8.options.onError(_this8.currentResult.error);
        _this8.options.onSettled == null ? void 0 : _this8.options.onSettled(undefined, _this8.currentResult.error);
      } // Then trigger the listeners


      if (notifyOptions.listeners) {
        _this8.listeners.forEach(function (listener) {
          listener(_this8.currentResult);
        });
      } // Then the cache listeners


      if (notifyOptions.cache) {
        _this8.client.getQueryCache().notify({
          query: _this8.currentQuery,
          type: 'observerResultsUpdated'
        });
      }
    });
  };

  return QueryObserver;
}(_subscribable__WEBPACK_IMPORTED_MODULE_5__[/* Subscribable */ "a"]);

function shouldLoadOnMount(query, options) {
  return options.enabled !== false && !query.state.dataUpdatedAt && !(query.state.status === 'error' && options.retryOnMount === false);
}

function shouldFetchOnMount(query, options) {
  return shouldLoadOnMount(query, options) || query.state.dataUpdatedAt > 0 && shouldFetchOn(query, options, options.refetchOnMount);
}

function shouldFetchOn(query, options, field) {
  if (options.enabled !== false) {
    var value = typeof field === 'function' ? field(query) : field;
    return value === 'always' || value !== false && isStale(query, options);
  }

  return false;
}

function shouldFetchOptionally(query, prevQuery, options, prevOptions) {
  return options.enabled !== false && (query !== prevQuery || prevOptions.enabled === false) && (!options.suspense || query.state.status !== 'error') && isStale(query, options);
}

function isStale(query, options) {
  return query.isStaleByTime(options.staleTime);
}

/***/ }),

/***/ "EdJC":
/*!******************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-query/es/react/useQuery.js ***!
  \******************************************************************************************************************/
/*! exports provided: useQuery */
/*! exports used: useQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useQuery; });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "DcPZ");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/utils */ "jLnA");
/* harmony import */ var _useBaseQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useBaseQuery */ "A4Rj");


 // HOOK

function useQuery(arg1, arg2, arg3) {
  var parsedOptions = Object(_core_utils__WEBPACK_IMPORTED_MODULE_1__[/* parseQueryArgs */ "l"])(arg1, arg2, arg3);
  return Object(_useBaseQuery__WEBPACK_IMPORTED_MODULE_2__[/* useBaseQuery */ "a"])(parsedOptions, _core__WEBPACK_IMPORTED_MODULE_0__[/* QueryObserver */ "a"]);
}

/***/ }),

/***/ "FyGo":
/*!*********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-query/es/core/subscribable.js ***!
  \*********************************************************************************************************************/
/*! exports provided: Subscribable */
/*! exports used: Subscribable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Subscribable; });
var Subscribable = /*#__PURE__*/function () {
  function Subscribable() {
    this.listeners = [];
  }

  var _proto = Subscribable.prototype;

  _proto.subscribe = function subscribe(listener) {
    var _this = this;

    var callback = listener || function () {
      return undefined;
    };

    this.listeners.push(callback);
    this.onSubscribe();
    return function () {
      _this.listeners = _this.listeners.filter(function (x) {
        return x !== callback;
      });

      _this.onUnsubscribe();
    };
  };

  _proto.hasListeners = function hasListeners() {
    return this.listeners.length > 0;
  };

  _proto.onSubscribe = function onSubscribe() {// Do nothing
  };

  _proto.onUnsubscribe = function onUnsubscribe() {// Do nothing
  };

  return Subscribable;
}();

/***/ }),

/***/ "HXfz":
/*!*********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-query/es/core/focusManager.js ***!
  \*********************************************************************************************************************/
/*! exports provided: FocusManager, focusManager */
/*! exports used: focusManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FocusManager */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return focusManager; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "BFfR");
/* harmony import */ var _subscribable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subscribable */ "FyGo");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "jLnA");



var FocusManager = /*#__PURE__*/function (_Subscribable) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(FocusManager, _Subscribable);

  function FocusManager() {
    var _this;

    _this = _Subscribable.call(this) || this;

    _this.setup = function (onFocus) {
      var _window;

      if (!_utils__WEBPACK_IMPORTED_MODULE_2__[/* isServer */ "f"] && ((_window = window) == null ? void 0 : _window.addEventListener)) {
        var listener = function listener() {
          return onFocus();
        }; // Listen to visibillitychange and focus


        window.addEventListener('visibilitychange', listener, false);
        window.addEventListener('focus', listener, false);
        return function () {
          // Be sure to unsubscribe if a new handler is set
          window.removeEventListener('visibilitychange', listener);
          window.removeEventListener('focus', listener);
        };
      }
    };

    return _this;
  }

  var _proto = FocusManager.prototype;

  _proto.onSubscribe = function onSubscribe() {
    if (!this.cleanup) {
      this.setEventListener(this.setup);
    }
  };

  _proto.onUnsubscribe = function onUnsubscribe() {
    if (!this.hasListeners()) {
      var _this$cleanup;

      (_this$cleanup = this.cleanup) == null ? void 0 : _this$cleanup.call(this);
      this.cleanup = undefined;
    }
  };

  _proto.setEventListener = function setEventListener(setup) {
    var _this$cleanup2,
        _this2 = this;

    this.setup = setup;
    (_this$cleanup2 = this.cleanup) == null ? void 0 : _this$cleanup2.call(this);
    this.cleanup = setup(function (focused) {
      if (typeof focused === 'boolean') {
        _this2.setFocused(focused);
      } else {
        _this2.onFocus();
      }
    });
  };

  _proto.setFocused = function setFocused(focused) {
    this.focused = focused;

    if (focused) {
      this.onFocus();
    }
  };

  _proto.onFocus = function onFocus() {
    this.listeners.forEach(function (listener) {
      listener();
    });
  };

  _proto.isFocused = function isFocused() {
    if (typeof this.focused === 'boolean') {
      return this.focused;
    } // document global can be unavailable in react native


    if (typeof document === 'undefined') {
      return true;
    }

    return [undefined, 'visible', 'prerender'].includes(document.visibilityState);
  };

  return FocusManager;
}(_subscribable__WEBPACK_IMPORTED_MODULE_1__[/* Subscribable */ "a"]);
var focusManager = new FocusManager();

/***/ }),

/***/ "JLtu":
/*!**************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-query/es/react/useInfiniteQuery.js ***!
  \**************************************************************************************************************************/
/*! exports provided: useInfiniteQuery */
/*! exports used: useInfiniteQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useInfiniteQuery; });
/* harmony import */ var _core_infiniteQueryObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/infiniteQueryObserver */ "plQW");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/utils */ "jLnA");
/* harmony import */ var _useBaseQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useBaseQuery */ "A4Rj");


 // HOOK

function useInfiniteQuery(arg1, arg2, arg3) {
  var options = Object(_core_utils__WEBPACK_IMPORTED_MODULE_1__[/* parseQueryArgs */ "l"])(arg1, arg2, arg3);
  return Object(_useBaseQuery__WEBPACK_IMPORTED_MODULE_2__[/* useBaseQuery */ "a"])(options, _core_infiniteQueryObserver__WEBPACK_IMPORTED_MODULE_0__[/* InfiniteQueryObserver */ "a"]);
}

/***/ }),

/***/ "JSxC":
/*!******************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-query/es/devtools/index.js ***!
  \******************************************************************************************************************/
/*! exports provided: ReactQueryDevtools, ReactQueryDevtoolsPanel */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _devtools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./devtools */ "x4am");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReactQueryDevtools", function() { return _devtools__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReactQueryDevtoolsPanel", function() { return _devtools__WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ }),

/***/ "LJcz":
/*!*******************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-query/es/react/setLogger.js ***!
  \*******************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "ih67");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger */ "da3v");


Object(_core__WEBPACK_IMPORTED_MODULE_0__[/* setLogger */ "b"])(_logger__WEBPACK_IMPORTED_MODULE_1__[/* logger */ "a"]);

/***/ }),

/***/ "Ntwt":
/*!******************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-query/es/devtools/utils.js ***!
  \******************************************************************************************************************/
/*! exports provided: isServer, getQueryStatusColor, getQueryStatusLabel, styled, useIsMounted, useSafeState, displayValue */
/*! exports used: displayValue, getQueryStatusColor, getQueryStatusLabel, styled, useIsMounted, useSafeState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isServer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getQueryStatusColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getQueryStatusLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return styled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return useIsMounted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return useSafeState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return displayValue; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "cxan");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "+wNj");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme */ "WRzm");
/* harmony import */ var _useMediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useMediaQuery */ "sVyj");





var isServer = typeof window === 'undefined';
function getQueryStatusColor(query, theme) {
  return query.state.isFetching ? theme.active : !query.getObserversCount() ? theme.gray : query.isStale() ? theme.warning : theme.success;
}
function getQueryStatusLabel(query) {
  return query.state.isFetching ? 'fetching' : !query.getObserversCount() ? 'inactive' : query.isStale() ? 'stale' : 'fresh';
}
function styled(type, newStyles, queries) {
  if (queries === void 0) {
    queries = {};
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function (_ref, ref) {
    var style = _ref.style,
        rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref, ["style"]);

    var theme = Object(_theme__WEBPACK_IMPORTED_MODULE_3__[/* useTheme */ "c"])();
    var mediaStyles = Object.entries(queries).reduce(function (current, _ref2) {
      var key = _ref2[0],
          value = _ref2[1];
      // eslint-disable-next-line react-hooks/rules-of-hooks
      return Object(_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(key) ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, current, typeof value === 'function' ? value(rest, theme) : value) : current;
    }, {});
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(type, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, rest, {
      style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, typeof newStyles === 'function' ? newStyles(rest, theme) : newStyles, style, mediaStyles),
      ref: ref
    }));
  });
}
function useIsMounted() {
  var mountedRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(false);
  var isMounted = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(function () {
    return mountedRef.current;
  }, []);
  react__WEBPACK_IMPORTED_MODULE_2___default.a[isServer ? 'useEffect' : 'useLayoutEffect'](function () {
    mountedRef.current = true;
    return function () {
      mountedRef.current = false;
    };
  }, []);
  return isMounted;
}
/**
 * This hook is a safe useState version which schedules state updates in microtasks
 * to prevent updating a component state while React is rendering different components
 * or when the component is not mounted anymore.
 */

function useSafeState(initialState) {
  var isMounted = useIsMounted();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(initialState),
      state = _React$useState[0],
      setState = _React$useState[1];

  var safeSetState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(function (value) {
    scheduleMicrotask(function () {
      if (isMounted()) {
        setState(value);
      }
    });
  }, [isMounted]);
  return [state, safeSetState];
}
/**
 * Displays a string regardless the type of the data
 * @param {unknown} value Value to be stringified
 */

var displayValue = function displayValue(value) {
  var name = Object.getOwnPropertyNames(Object(value));
  var newValue = typeof value === 'bigint' ? value.toString() + "n" : value;
  return JSON.stringify(newValue, name);
};
/**
 * Schedules a microtask.
 * This can be useful to schedule state updates after rendering.
 */

function scheduleMicrotask(callback) {
  Promise.resolve().then(callback).catch(function (error) {
    return setTimeout(function () {
      throw error;
    });
  });
}

/***/ }),

/***/ "Qjpd":
/*!*****************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-query/es/core/mutation.js ***!
  \*****************************************************************************************************************/
/*! exports provided: Mutation, getDefaultState */
/*! exports used: Mutation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mutation; });
/* unused harmony export getDefaultState */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "cxan");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger */ "ih67");
/* harmony import */ var _notifyManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notifyManager */ "BTp1");
/* harmony import */ var _retryer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./retryer */ "1oX/");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "jLnA");




 // TYPES

// CLASS
var Mutation = /*#__PURE__*/function () {
  function Mutation(config) {
    this.options = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, config.defaultOptions, config.options);
    this.mutationId = config.mutationId;
    this.mutationCache = config.mutationCache;
    this.observers = [];
    this.state = config.state || getDefaultState();
    this.meta = config.meta;
  }

  var _proto = Mutation.prototype;

  _proto.setState = function setState(state) {
    this.dispatch({
      type: 'setState',
      state: state
    });
  };

  _proto.addObserver = function addObserver(observer) {
    if (this.observers.indexOf(observer) === -1) {
      this.observers.push(observer);
    }
  };

  _proto.removeObserver = function removeObserver(observer) {
    this.observers = this.observers.filter(function (x) {
      return x !== observer;
    });
  };

  _proto.cancel = function cancel() {
    if (this.retryer) {
      this.retryer.cancel();
      return this.retryer.promise.then(_utils__WEBPACK_IMPORTED_MODULE_4__[/* noop */ "j"]).catch(_utils__WEBPACK_IMPORTED_MODULE_4__[/* noop */ "j"]);
    }

    return Promise.resolve();
  };

  _proto.continue = function _continue() {
    if (this.retryer) {
      this.retryer.continue();
      return this.retryer.promise;
    }

    return this.execute();
  };

  _proto.execute = function execute() {
    var _this = this;

    var data;
    var restored = this.state.status === 'loading';
    var promise = Promise.resolve();

    if (!restored) {
      this.dispatch({
        type: 'loading',
        variables: this.options.variables
      });
      promise = promise.then(function () {
        // Notify cache callback
        _this.mutationCache.config.onMutate == null ? void 0 : _this.mutationCache.config.onMutate(_this.state.variables, _this);
      }).then(function () {
        return _this.options.onMutate == null ? void 0 : _this.options.onMutate(_this.state.variables);
      }).then(function (context) {
        if (context !== _this.state.context) {
          _this.dispatch({
            type: 'loading',
            context: context,
            variables: _this.state.variables
          });
        }
      });
    }

    return promise.then(function () {
      return _this.executeMutation();
    }).then(function (result) {
      data = result; // Notify cache callback

      _this.mutationCache.config.onSuccess == null ? void 0 : _this.mutationCache.config.onSuccess(data, _this.state.variables, _this.state.context, _this);
    }).then(function () {
      return _this.options.onSuccess == null ? void 0 : _this.options.onSuccess(data, _this.state.variables, _this.state.context);
    }).then(function () {
      return _this.options.onSettled == null ? void 0 : _this.options.onSettled(data, null, _this.state.variables, _this.state.context);
    }).then(function () {
      _this.dispatch({
        type: 'success',
        data: data
      });

      return data;
    }).catch(function (error) {
      // Notify cache callback
      _this.mutationCache.config.onError == null ? void 0 : _this.mutationCache.config.onError(error, _this.state.variables, _this.state.context, _this); // Log error

      Object(_logger__WEBPACK_IMPORTED_MODULE_1__[/* getLogger */ "a"])().error(error);
      return Promise.resolve().then(function () {
        return _this.options.onError == null ? void 0 : _this.options.onError(error, _this.state.variables, _this.state.context);
      }).then(function () {
        return _this.options.onSettled == null ? void 0 : _this.options.onSettled(undefined, error, _this.state.variables, _this.state.context);
      }).then(function () {
        _this.dispatch({
          type: 'error',
          error: error
        });

        throw error;
      });
    });
  };

  _proto.executeMutation = function executeMutation() {
    var _this2 = this,
        _this$options$retry;

    this.retryer = new _retryer__WEBPACK_IMPORTED_MODULE_3__[/* Retryer */ "a"]({
      fn: function fn() {
        if (!_this2.options.mutationFn) {
          return Promise.reject('No mutationFn found');
        }

        return _this2.options.mutationFn(_this2.state.variables);
      },
      onFail: function onFail() {
        _this2.dispatch({
          type: 'failed'
        });
      },
      onPause: function onPause() {
        _this2.dispatch({
          type: 'pause'
        });
      },
      onContinue: function onContinue() {
        _this2.dispatch({
          type: 'continue'
        });
      },
      retry: (_this$options$retry = this.options.retry) != null ? _this$options$retry : 0,
      retryDelay: this.options.retryDelay
    });
    return this.retryer.promise;
  };

  _proto.dispatch = function dispatch(action) {
    var _this3 = this;

    this.state = reducer(this.state, action);
    _notifyManager__WEBPACK_IMPORTED_MODULE_2__[/* notifyManager */ "a"].batch(function () {
      _this3.observers.forEach(function (observer) {
        observer.onMutationUpdate(action);
      });

      _this3.mutationCache.notify(_this3);
    });
  };

  return Mutation;
}();
function getDefaultState() {
  return {
    context: undefined,
    data: undefined,
    error: null,
    failureCount: 0,
    isPaused: false,
    status: 'idle',
    variables: undefined
  };
}

function reducer(state, action) {
  switch (action.type) {
    case 'failed':
      return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
        failureCount: state.failureCount + 1
      });

    case 'pause':
      return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
        isPaused: true
      });

    case 'continue':
      return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
        isPaused: false
      });

    case 'loading':
      return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
        context: action.context,
        data: undefined,
        error: null,
        isPaused: false,
        status: 'loading',
        variables: action.variables
      });

    case 'success':
      return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
        data: action.data,
        error: null,
        status: 'success',
        isPaused: false
      });

    case 'error':
      return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
        data: undefined,
        error: action.error,
        failureCount: state.failureCount + 1,
        isPaused: false,
        status: 'error'
      });

    case 'setState':
      return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, action.state);

    default:
      return state;
  }
}

/***/ }),

/***/ "TQen":
/*!***************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-query/devtools/index.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/*! exports used: ReactQueryDevtools */
/***/ (function(module, exports, __webpack_require__) {

if (false) {} else {
  module.exports = __webpack_require__(/*! ./development */ "JSxC")
}


/***/ }),

/***/ "WRzm":
/*!******************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-query/es/devtools/theme.js ***!
  \******************************************************************************************************************/
/*! exports provided: defaultTheme, ThemeProvider, useTheme */
/*! exports used: ThemeProvider, defaultTheme, useTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return defaultTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return useTheme; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "cxan");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "+wNj");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var defaultTheme = {
  background: '#0b1521',
  backgroundAlt: '#132337',
  foreground: 'white',
  gray: '#3f4e60',
  grayAlt: '#222e3e',
  inputBackgroundColor: '#fff',
  inputTextColor: '#000',
  success: '#00ab52',
  danger: '#ff0085',
  active: '#006bff',
  warning: '#ffb200'
};
var ThemeContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext(defaultTheme);
function ThemeProvider(_ref) {
  var theme = _ref.theme,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref, ["theme"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ThemeContext.Provider, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    value: theme
  }, rest));
}
function useTheme() {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(ThemeContext);
}

/***/ }),

/***/ "XFSW":
/*!******************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-query/es/core/hydration.js ***!
  \******************************************************************************************************************/
/*! exports provided: dehydrate, hydrate */
/*! exports used: dehydrate, hydrate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dehydrate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hydrate; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "cxan");


// TYPES
// FUNCTIONS
function dehydrateMutation(mutation) {
  return {
    mutationKey: mutation.options.mutationKey,
    state: mutation.state
  };
} // Most config is not dehydrated but instead meant to configure again when
// consuming the de/rehydrated data, typically with useQuery on the client.
// Sometimes it might make sense to prefetch data on the server and include
// in the html-payload, but not consume it on the initial render.


function dehydrateQuery(query) {
  return {
    state: query.state,
    queryKey: query.queryKey,
    queryHash: query.queryHash
  };
}

function defaultShouldDehydrateMutation(mutation) {
  return mutation.state.isPaused;
}

function defaultShouldDehydrateQuery(query) {
  return query.state.status === 'success';
}

function dehydrate(client, options) {
  var _options, _options2;

  options = options || {};
  var mutations = [];
  var queries = [];

  if (((_options = options) == null ? void 0 : _options.dehydrateMutations) !== false) {
    var shouldDehydrateMutation = options.shouldDehydrateMutation || defaultShouldDehydrateMutation;
    client.getMutationCache().getAll().forEach(function (mutation) {
      if (shouldDehydrateMutation(mutation)) {
        mutations.push(dehydrateMutation(mutation));
      }
    });
  }

  if (((_options2 = options) == null ? void 0 : _options2.dehydrateQueries) !== false) {
    var shouldDehydrateQuery = options.shouldDehydrateQuery || defaultShouldDehydrateQuery;
    client.getQueryCache().getAll().forEach(function (query) {
      if (shouldDehydrateQuery(query)) {
        queries.push(dehydrateQuery(query));
      }
    });
  }

  return {
    mutations: mutations,
    queries: queries
  };
}
function hydrate(client, dehydratedState, options) {
  if (typeof dehydratedState !== 'object' || dehydratedState === null) {
    return;
  }

  var mutationCache = client.getMutationCache();
  var queryCache = client.getQueryCache();
  var mutations = dehydratedState.mutations || [];
  var queries = dehydratedState.queries || [];
  mutations.forEach(function (dehydratedMutation) {
    var _options$defaultOptio;

    mutationCache.build(client, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, options == null ? void 0 : (_options$defaultOptio = options.defaultOptions) == null ? void 0 : _options$defaultOptio.mutations, {
      mutationKey: dehydratedMutation.mutationKey
    }), dehydratedMutation.state);
  });
  queries.forEach(function (dehydratedQuery) {
    var _options$defaultOptio2;

    var query = queryCache.get(dehydratedQuery.queryHash); // Do not hydrate if an existing query exists with newer data

    if (query) {
      if (query.state.dataUpdatedAt < dehydratedQuery.state.dataUpdatedAt) {
        query.setState(dehydratedQuery.state);
      }

      return;
    } // Restore query


    queryCache.build(client, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, options == null ? void 0 : (_options$defaultOptio2 = options.defaultOptions) == null ? void 0 : _options$defaultOptio2.queries, {
      queryKey: dehydratedQuery.queryKey,
      queryHash: dehydratedQuery.queryHash
    }), dehydratedQuery.state);
  });
}

/***/ }),

/***/ "da3v":
/*!****************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-query/es/react/logger.js ***!
  \****************************************************************************************************************/
/*! exports provided: logger */
/*! exports used: logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return logger; });
var logger = console;

/***/ }),

/***/ "ggyD":
/*!*********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-query/es/devtools/Explorer.js ***!
  \*********************************************************************************************************************/
/*! exports provided: Entry, Label, LabelButton, ExpandButton, Value, SubEntries, Info, Expander, chunkArray, DefaultRenderer, default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Entry */
/* unused harmony export Label */
/* unused harmony export LabelButton */
/* unused harmony export ExpandButton */
/* unused harmony export Value */
/* unused harmony export SubEntries */
/* unused harmony export Info */
/* unused harmony export Expander */
/* unused harmony export chunkArray */
/* unused harmony export DefaultRenderer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Explorer; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "+wNj");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "cxan");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "Ntwt");




var Entry = Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* styled */ "d"])('div', {
  fontFamily: 'Menlo, monospace',
  fontSize: '1em',
  lineHeight: '1.7',
  outline: 'none',
  wordBreak: 'break-word'
});
var Label = Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* styled */ "d"])('span', {
  color: 'white'
});
var LabelButton = Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* styled */ "d"])('button', {
  cursor: 'pointer',
  color: 'white'
});
var ExpandButton = Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* styled */ "d"])('button', {
  cursor: 'pointer',
  color: 'inherit',
  font: 'inherit',
  outline: 'inherit',
  background: 'transparent',
  border: 'none',
  padding: 0
});
var Value = Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* styled */ "d"])('span', function (_props, theme) {
  return {
    color: theme.danger
  };
});
var SubEntries = Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* styled */ "d"])('div', {
  marginLeft: '.1em',
  paddingLeft: '1em',
  borderLeft: '2px solid rgba(0,0,0,.15)'
});
var Info = Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* styled */ "d"])('span', {
  color: 'grey',
  fontSize: '.7em'
});
var Expander = function Expander(_ref) {
  var expanded = _ref.expanded,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
      display: 'inline-block',
      transition: 'all .1s ease',
      transform: "rotate(" + (expanded ? 90 : 0) + "deg) " + (style.transform || '')
    }, style)
  }, "\u25B6");
};

/**
 * Chunk elements in the array by size
 *
 * when the array cannot be chunked evenly by size, the last chunk will be
 * filled with the remaining elements
 *
 * @example
 * chunkArray(['a','b', 'c', 'd', 'e'], 2) // returns [['a','b'], ['c', 'd'], ['e']]
 */
function chunkArray(array, size) {
  if (size < 1) return [];
  var i = 0;
  var result = [];

  while (i < array.length) {
    result.push(array.slice(i, i + size));
    i = i + size;
  }

  return result;
}
var DefaultRenderer = function DefaultRenderer(_ref2) {
  var HandleEntry = _ref2.HandleEntry,
      label = _ref2.label,
      value = _ref2.value,
      _ref2$subEntries = _ref2.subEntries,
      subEntries = _ref2$subEntries === void 0 ? [] : _ref2$subEntries,
      _ref2$subEntryPages = _ref2.subEntryPages,
      subEntryPages = _ref2$subEntryPages === void 0 ? [] : _ref2$subEntryPages,
      type = _ref2.type,
      _ref2$expanded = _ref2.expanded,
      expanded = _ref2$expanded === void 0 ? false : _ref2$expanded,
      toggleExpanded = _ref2.toggleExpanded,
      pageSize = _ref2.pageSize;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState([]),
      expandedPages = _React$useState[0],
      setExpandedPages = _React$useState[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Entry, {
    key: label
  }, (subEntryPages == null ? void 0 : subEntryPages.length) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ExpandButton, {
    onClick: function onClick() {
      return toggleExpanded();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Expander, {
    expanded: expanded
  }), " ", label, ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Info, null, String(type).toLowerCase() === 'iterable' ? '(Iterable) ' : '', subEntries.length, " ", subEntries.length > 1 ? "items" : "item")), expanded ? subEntryPages.length === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SubEntries, null, subEntries.map(function (entry) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(HandleEntry, {
      key: entry.label,
      entry: entry
    });
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SubEntries, null, subEntryPages.map(function (entries, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Entry, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(LabelButton, {
      onClick: function onClick() {
        return setExpandedPages(function (old) {
          return old.includes(index) ? old.filter(function (d) {
            return d !== index;
          }) : [].concat(old, [index]);
        });
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Expander, {
      expanded: expanded
    }), " [", index * pageSize, " ...", ' ', index * pageSize + pageSize - 1, "]"), expandedPages.includes(index) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SubEntries, null, entries.map(function (entry) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(HandleEntry, {
        key: entry.label,
        entry: entry
      });
    })) : null));
  })) : null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Label, null, label, ":"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Value, null, Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* displayValue */ "a"])(value))));
};

function isIterable(x) {
  return Symbol.iterator in x;
}

function Explorer(_ref3) {
  var value = _ref3.value,
      defaultExpanded = _ref3.defaultExpanded,
      _ref3$renderer = _ref3.renderer,
      renderer = _ref3$renderer === void 0 ? DefaultRenderer : _ref3$renderer,
      _ref3$pageSize = _ref3.pageSize,
      pageSize = _ref3$pageSize === void 0 ? 100 : _ref3$pageSize,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref3, ["value", "defaultExpanded", "renderer", "pageSize"]);

  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(Boolean(defaultExpanded)),
      expanded = _React$useState2[0],
      setExpanded = _React$useState2[1];

  var toggleExpanded = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(function () {
    return setExpanded(function (old) {
      return !old;
    });
  }, []);
  var type = typeof value;
  var subEntries = [];

  var makeProperty = function makeProperty(sub) {
    var _ref4;

    var subDefaultExpanded = defaultExpanded === true ? (_ref4 = {}, _ref4[sub.label] = true, _ref4) : defaultExpanded == null ? void 0 : defaultExpanded[sub.label];
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, sub, {
      defaultExpanded: subDefaultExpanded
    });
  };

  if (Array.isArray(value)) {
    type = 'array';
    subEntries = value.map(function (d, i) {
      return makeProperty({
        label: i.toString(),
        value: d
      });
    });
  } else if (value !== null && typeof value === 'object' && isIterable(value) && typeof value[Symbol.iterator] === 'function') {
    type = 'Iterable';
    subEntries = Array.from(value, function (val, i) {
      return makeProperty({
        label: i.toString(),
        value: val
      });
    });
  } else if (typeof value === 'object' && value !== null) {
    type = 'object';
    subEntries = Object.entries(value).map(function (_ref5) {
      var key = _ref5[0],
          val = _ref5[1];
      return makeProperty({
        label: key,
        value: val
      });
    });
  }

  var subEntryPages = chunkArray(subEntries, pageSize);
  return renderer(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
    HandleEntry: function HandleEntry(_ref6) {
      var entry = _ref6.entry;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Explorer, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
        value: value,
        renderer: renderer
      }, rest, entry));
    },
    type: type,
    subEntries: subEntries,
    subEntryPages: subEntryPages,
    value: value,
    expanded: expanded,
    toggleExpanded: toggleExpanded,
    pageSize: pageSize
  }, rest));
}

/***/ }),

/***/ "h+QF":
/*!*****************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-query/es/devtools/styledComponents.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: Panel, ActiveQueryPanel, Button, QueryKeys, QueryKey, Code, Input, Select */
/*! exports used: ActiveQueryPanel, Button, Code, Input, Panel, QueryKey, QueryKeys, Select */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Panel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActiveQueryPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return QueryKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return QueryKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Code; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return Select; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "Ntwt");

var Panel = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* styled */ "d"])('div', function (_props, theme) {
  return {
    fontSize: 'clamp(12px, 1.5vw, 14px)',
    fontFamily: "sans-serif",
    display: 'flex',
    backgroundColor: theme.background,
    color: theme.foreground
  };
}, {
  '(max-width: 700px)': {
    flexDirection: 'column'
  },
  '(max-width: 600px)': {
    fontSize: '.9em' // flexDirection: 'column',

  }
});
var ActiveQueryPanel = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* styled */ "d"])('div', function () {
  return {
    flex: '1 1 500px',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
    height: '100%'
  };
}, {
  '(max-width: 700px)': function maxWidth700px(_props, theme) {
    return {
      borderTop: "2px solid " + theme.gray
    };
  }
});
var Button = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* styled */ "d"])('button', function (props, theme) {
  return {
    appearance: 'none',
    fontSize: '.9em',
    fontWeight: 'bold',
    background: theme.gray,
    border: '0',
    borderRadius: '.3em',
    color: 'white',
    padding: '.5em',
    opacity: props.disabled ? '.5' : undefined,
    cursor: 'pointer'
  };
});
var QueryKeys = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* styled */ "d"])('span', {
  display: 'inline-block',
  fontSize: '0.9em'
});
var QueryKey = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* styled */ "d"])('span', {
  display: 'inline-flex',
  alignItems: 'center',
  padding: '.2em .4em',
  fontWeight: 'bold',
  textShadow: '0 0 10px black',
  borderRadius: '.2em'
});
var Code = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* styled */ "d"])('code', {
  fontSize: '.9em',
  color: 'inherit',
  background: 'inherit'
});
var Input = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* styled */ "d"])('input', function (_props, theme) {
  return {
    backgroundColor: theme.inputBackgroundColor,
    border: 0,
    borderRadius: '.2em',
    color: theme.inputTextColor,
    fontSize: '.9em',
    lineHeight: "1.3",
    padding: '.3em .4em'
  };
});
var Select = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* styled */ "d"])('select', function (_props, theme) {
  return {
    display: "inline-block",
    fontSize: ".9em",
    fontFamily: "sans-serif",
    fontWeight: 'normal',
    lineHeight: "1.3",
    padding: ".3em 1.5em .3em .5em",
    height: 'auto',
    border: 0,
    borderRadius: ".2em",
    appearance: "none",
    WebkitAppearance: 'none',
    backgroundColor: theme.inputBackgroundColor,
    backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='%23444444'><polygon points='0,25 100,25 50,75'/></svg>\")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right .55em center",
    backgroundSize: ".65em auto, 100%",
    color: theme.inputTextColor
  };
}, {
  '(max-width: 500px)': {
    display: 'none'
  }
});

/***/ }),

/***/ "hlfg":
/*!***************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-query/es/react/index.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/*! exports used: QueryClient, QueryClientProvider, dehydrate, hydrate, onlineManager, setLogger, useInfiniteQuery, useIsFetching, useQuery, useQueryClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _setBatchUpdatesFn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setBatchUpdatesFn */ "9bJ9");
/* harmony import */ var _setLogger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setLogger */ "LJcz");
/* harmony import */ var _QueryClientProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QueryClientProvider */ "wR8M");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueryClientProvider", function() { return _QueryClientProvider__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useQueryClient", function() { return _QueryClientProvider__WEBPACK_IMPORTED_MODULE_2__["b"]; });

/* harmony import */ var _useIsFetching__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useIsFetching */ "3sjb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useIsFetching", function() { return _useIsFetching__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony import */ var _useQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useQuery */ "EdJC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useQuery", function() { return _useQuery__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony import */ var _useInfiniteQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useInfiniteQuery */ "JLtu");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useInfiniteQuery", function() { return _useInfiniteQuery__WEBPACK_IMPORTED_MODULE_5__["a"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./types */ "nsZ7");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_types__WEBPACK_IMPORTED_MODULE_6__, "QueryClient")) __webpack_require__.d(__webpack_exports__, "QueryClient", function() { return _types__WEBPACK_IMPORTED_MODULE_6__["QueryClient"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_types__WEBPACK_IMPORTED_MODULE_6__, "dehydrate")) __webpack_require__.d(__webpack_exports__, "dehydrate", function() { return _types__WEBPACK_IMPORTED_MODULE_6__["dehydrate"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_types__WEBPACK_IMPORTED_MODULE_6__, "hydrate")) __webpack_require__.d(__webpack_exports__, "hydrate", function() { return _types__WEBPACK_IMPORTED_MODULE_6__["hydrate"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_types__WEBPACK_IMPORTED_MODULE_6__, "onlineManager")) __webpack_require__.d(__webpack_exports__, "onlineManager", function() { return _types__WEBPACK_IMPORTED_MODULE_6__["onlineManager"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_types__WEBPACK_IMPORTED_MODULE_6__, "setLogger")) __webpack_require__.d(__webpack_exports__, "setLogger", function() { return _types__WEBPACK_IMPORTED_MODULE_6__["setLogger"]; });

// Side effects










 // Types



/***/ }),

/***/ "ih67":
/*!***************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-query/es/core/logger.js ***!
  \***************************************************************************************************************/
/*! exports provided: getLogger, setLogger */
/*! exports used: getLogger, setLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getLogger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setLogger; });
// TYPES
// FUNCTIONS
var logger = console;
function getLogger() {
  return logger;
}
function setLogger(newLogger) {
  logger = newLogger;
}

/***/ }),

/***/ "jLnA":
/*!**************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-query/es/core/utils.js ***!
  \**************************************************************************************************************/
/*! exports provided: isServer, noop, functionalUpdate, isValidTimeout, ensureQueryKeyArray, difference, replaceAt, timeUntilStale, parseQueryArgs, parseMutationArgs, parseFilterArgs, parseMutationFilterArgs, mapQueryStatusFilter, matchQuery, matchMutation, hashQueryKeyByOptions, hashQueryKey, stableValueHash, partialMatchKey, partialDeepEqual, replaceEqualDeep, shallowEqualObjects, isPlainObject, isQueryKey, isError, sleep, scheduleMicrotask, getAbortController */
/*! exports used: ensureQueryKeyArray, functionalUpdate, getAbortController, hashQueryKey, hashQueryKeyByOptions, isServer, isValidTimeout, matchMutation, matchQuery, noop, parseFilterArgs, parseQueryArgs, partialMatchKey, replaceEqualDeep, scheduleMicrotask, shallowEqualObjects, sleep, timeUntilStale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return isServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return functionalUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return isValidTimeout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ensureQueryKeyArray; });
/* unused harmony export difference */
/* unused harmony export replaceAt */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return timeUntilStale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return parseQueryArgs; });
/* unused harmony export parseMutationArgs */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return parseFilterArgs; });
/* unused harmony export parseMutationFilterArgs */
/* unused harmony export mapQueryStatusFilter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return matchQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return matchMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return hashQueryKeyByOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hashQueryKey; });
/* unused harmony export stableValueHash */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return partialMatchKey; });
/* unused harmony export partialDeepEqual */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return replaceEqualDeep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return shallowEqualObjects; });
/* unused harmony export isPlainObject */
/* unused harmony export isQueryKey */
/* unused harmony export isError */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return sleep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return scheduleMicrotask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getAbortController; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "cxan");

// TYPES
// UTILS
var isServer = typeof window === 'undefined';
function noop() {
  return undefined;
}
function functionalUpdate(updater, input) {
  return typeof updater === 'function' ? updater(input) : updater;
}
function isValidTimeout(value) {
  return typeof value === 'number' && value >= 0 && value !== Infinity;
}
function ensureQueryKeyArray(value) {
  return Array.isArray(value) ? value : [value];
}
function difference(array1, array2) {
  return array1.filter(function (x) {
    return array2.indexOf(x) === -1;
  });
}
function replaceAt(array, index, value) {
  var copy = array.slice(0);
  copy[index] = value;
  return copy;
}
function timeUntilStale(updatedAt, staleTime) {
  return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
}
function parseQueryArgs(arg1, arg2, arg3) {
  if (!isQueryKey(arg1)) {
    return arg1;
  }

  if (typeof arg2 === 'function') {
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, arg3, {
      queryKey: arg1,
      queryFn: arg2
    });
  }

  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, arg2, {
    queryKey: arg1
  });
}
function parseMutationArgs(arg1, arg2, arg3) {
  if (isQueryKey(arg1)) {
    if (typeof arg2 === 'function') {
      return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, arg3, {
        mutationKey: arg1,
        mutationFn: arg2
      });
    }

    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, arg2, {
      mutationKey: arg1
    });
  }

  if (typeof arg1 === 'function') {
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, arg2, {
      mutationFn: arg1
    });
  }

  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, arg1);
}
function parseFilterArgs(arg1, arg2, arg3) {
  return isQueryKey(arg1) ? [Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, arg2, {
    queryKey: arg1
  }), arg3] : [arg1 || {}, arg2];
}
function parseMutationFilterArgs(arg1, arg2) {
  return isQueryKey(arg1) ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, arg2, {
    mutationKey: arg1
  }) : arg1;
}
function mapQueryStatusFilter(active, inactive) {
  if (active === true && inactive === true || active == null && inactive == null) {
    return 'all';
  } else if (active === false && inactive === false) {
    return 'none';
  } else {
    // At this point, active|inactive can only be true|false or false|true
    // so, when only one value is provided, the missing one has to be the negated value
    var isActive = active != null ? active : !inactive;
    return isActive ? 'active' : 'inactive';
  }
}
function matchQuery(filters, query) {
  var active = filters.active,
      exact = filters.exact,
      fetching = filters.fetching,
      inactive = filters.inactive,
      predicate = filters.predicate,
      queryKey = filters.queryKey,
      stale = filters.stale;

  if (isQueryKey(queryKey)) {
    if (exact) {
      if (query.queryHash !== hashQueryKeyByOptions(queryKey, query.options)) {
        return false;
      }
    } else if (!partialMatchKey(query.queryKey, queryKey)) {
      return false;
    }
  }

  var queryStatusFilter = mapQueryStatusFilter(active, inactive);

  if (queryStatusFilter === 'none') {
    return false;
  } else if (queryStatusFilter !== 'all') {
    var isActive = query.isActive();

    if (queryStatusFilter === 'active' && !isActive) {
      return false;
    }

    if (queryStatusFilter === 'inactive' && isActive) {
      return false;
    }
  }

  if (typeof stale === 'boolean' && query.isStale() !== stale) {
    return false;
  }

  if (typeof fetching === 'boolean' && query.isFetching() !== fetching) {
    return false;
  }

  if (predicate && !predicate(query)) {
    return false;
  }

  return true;
}
function matchMutation(filters, mutation) {
  var exact = filters.exact,
      fetching = filters.fetching,
      predicate = filters.predicate,
      mutationKey = filters.mutationKey;

  if (isQueryKey(mutationKey)) {
    if (!mutation.options.mutationKey) {
      return false;
    }

    if (exact) {
      if (hashQueryKey(mutation.options.mutationKey) !== hashQueryKey(mutationKey)) {
        return false;
      }
    } else if (!partialMatchKey(mutation.options.mutationKey, mutationKey)) {
      return false;
    }
  }

  if (typeof fetching === 'boolean' && mutation.state.status === 'loading' !== fetching) {
    return false;
  }

  if (predicate && !predicate(mutation)) {
    return false;
  }

  return true;
}
function hashQueryKeyByOptions(queryKey, options) {
  var hashFn = (options == null ? void 0 : options.queryKeyHashFn) || hashQueryKey;
  return hashFn(queryKey);
}
/**
 * Default query keys hash function.
 */

function hashQueryKey(queryKey) {
  var asArray = ensureQueryKeyArray(queryKey);
  return stableValueHash(asArray);
}
/**
 * Hashes the value into a stable hash.
 */

function stableValueHash(value) {
  return JSON.stringify(value, function (_, val) {
    return isPlainObject(val) ? Object.keys(val).sort().reduce(function (result, key) {
      result[key] = val[key];
      return result;
    }, {}) : val;
  });
}
/**
 * Checks if key `b` partially matches with key `a`.
 */

function partialMatchKey(a, b) {
  return partialDeepEqual(ensureQueryKeyArray(a), ensureQueryKeyArray(b));
}
/**
 * Checks if `b` partially matches with `a`.
 */

function partialDeepEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (typeof a !== typeof b) {
    return false;
  }

  if (a && b && typeof a === 'object' && typeof b === 'object') {
    return !Object.keys(b).some(function (key) {
      return !partialDeepEqual(a[key], b[key]);
    });
  }

  return false;
}
/**
 * This function returns `a` if `b` is deeply equal.
 * If not, it will replace any deeply equal children of `b` with those of `a`.
 * This can be used for structural sharing between JSON values for example.
 */

function replaceEqualDeep(a, b) {
  if (a === b) {
    return a;
  }

  var array = Array.isArray(a) && Array.isArray(b);

  if (array || isPlainObject(a) && isPlainObject(b)) {
    var aSize = array ? a.length : Object.keys(a).length;
    var bItems = array ? b : Object.keys(b);
    var bSize = bItems.length;
    var copy = array ? [] : {};
    var equalItems = 0;

    for (var i = 0; i < bSize; i++) {
      var key = array ? i : bItems[i];
      copy[key] = replaceEqualDeep(a[key], b[key]);

      if (copy[key] === a[key]) {
        equalItems++;
      }
    }

    return aSize === bSize && equalItems === aSize ? a : copy;
  }

  return b;
}
/**
 * Shallow compare objects. Only works with objects that always have the same properties.
 */

function shallowEqualObjects(a, b) {
  if (a && !b || b && !a) {
    return false;
  }

  for (var key in a) {
    if (a[key] !== b[key]) {
      return false;
    }
  }

  return true;
} // Copied from: https://github.com/jonschlinkert/is-plain-object

function isPlainObject(o) {
  if (!hasObjectPrototype(o)) {
    return false;
  } // If has modified constructor


  var ctor = o.constructor;

  if (typeof ctor === 'undefined') {
    return true;
  } // If has modified prototype


  var prot = ctor.prototype;

  if (!hasObjectPrototype(prot)) {
    return false;
  } // If constructor does not have an Object-specific method


  if (!prot.hasOwnProperty('isPrototypeOf')) {
    return false;
  } // Most likely a plain Object


  return true;
}

function hasObjectPrototype(o) {
  return Object.prototype.toString.call(o) === '[object Object]';
}

function isQueryKey(value) {
  return typeof value === 'string' || Array.isArray(value);
}
function isError(value) {
  return value instanceof Error;
}
function sleep(timeout) {
  return new Promise(function (resolve) {
    setTimeout(resolve, timeout);
  });
}
/**
 * Schedules a microtask.
 * This can be useful to schedule state updates after rendering.
 */

function scheduleMicrotask(callback) {
  Promise.resolve().then(callback).catch(function (error) {
    return setTimeout(function () {
      throw error;
    });
  });
}
function getAbortController() {
  if (typeof AbortController === 'function') {
    return new AbortController();
  }
}

/***/ }),

/***/ "jtiS":
/*!*********************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-query/es/index.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/*! exports used: QueryClient, QueryClientProvider, dehydrate, hydrate, onlineManager, setLogger, useInfiniteQuery, useIsFetching, useQuery, useQueryClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "4cYT");
/* harmony reexport (checked) */ if(__webpack_require__.o(_core__WEBPACK_IMPORTED_MODULE_0__, "QueryClient")) __webpack_require__.d(__webpack_exports__, "QueryClient", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["QueryClient"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_core__WEBPACK_IMPORTED_MODULE_0__, "QueryClientProvider")) __webpack_require__.d(__webpack_exports__, "QueryClientProvider", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["QueryClientProvider"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_core__WEBPACK_IMPORTED_MODULE_0__, "dehydrate")) __webpack_require__.d(__webpack_exports__, "dehydrate", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["dehydrate"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_core__WEBPACK_IMPORTED_MODULE_0__, "hydrate")) __webpack_require__.d(__webpack_exports__, "hydrate", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["hydrate"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_core__WEBPACK_IMPORTED_MODULE_0__, "onlineManager")) __webpack_require__.d(__webpack_exports__, "onlineManager", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["onlineManager"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_core__WEBPACK_IMPORTED_MODULE_0__, "setLogger")) __webpack_require__.d(__webpack_exports__, "setLogger", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["setLogger"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_core__WEBPACK_IMPORTED_MODULE_0__, "useInfiniteQuery")) __webpack_require__.d(__webpack_exports__, "useInfiniteQuery", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["useInfiniteQuery"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_core__WEBPACK_IMPORTED_MODULE_0__, "useIsFetching")) __webpack_require__.d(__webpack_exports__, "useIsFetching", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["useIsFetching"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_core__WEBPACK_IMPORTED_MODULE_0__, "useQuery")) __webpack_require__.d(__webpack_exports__, "useQuery", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["useQuery"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_core__WEBPACK_IMPORTED_MODULE_0__, "useQueryClient")) __webpack_require__.d(__webpack_exports__, "useQueryClient", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["useQueryClient"]; });

/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./react */ "hlfg");
/* harmony reexport (checked) */ if(__webpack_require__.o(_react__WEBPACK_IMPORTED_MODULE_1__, "QueryClient")) __webpack_require__.d(__webpack_exports__, "QueryClient", function() { return _react__WEBPACK_IMPORTED_MODULE_1__["QueryClient"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_react__WEBPACK_IMPORTED_MODULE_1__, "QueryClientProvider")) __webpack_require__.d(__webpack_exports__, "QueryClientProvider", function() { return _react__WEBPACK_IMPORTED_MODULE_1__["QueryClientProvider"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_react__WEBPACK_IMPORTED_MODULE_1__, "dehydrate")) __webpack_require__.d(__webpack_exports__, "dehydrate", function() { return _react__WEBPACK_IMPORTED_MODULE_1__["dehydrate"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_react__WEBPACK_IMPORTED_MODULE_1__, "hydrate")) __webpack_require__.d(__webpack_exports__, "hydrate", function() { return _react__WEBPACK_IMPORTED_MODULE_1__["hydrate"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_react__WEBPACK_IMPORTED_MODULE_1__, "onlineManager")) __webpack_require__.d(__webpack_exports__, "onlineManager", function() { return _react__WEBPACK_IMPORTED_MODULE_1__["onlineManager"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_react__WEBPACK_IMPORTED_MODULE_1__, "setLogger")) __webpack_require__.d(__webpack_exports__, "setLogger", function() { return _react__WEBPACK_IMPORTED_MODULE_1__["setLogger"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_react__WEBPACK_IMPORTED_MODULE_1__, "useInfiniteQuery")) __webpack_require__.d(__webpack_exports__, "useInfiniteQuery", function() { return _react__WEBPACK_IMPORTED_MODULE_1__["useInfiniteQuery"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_react__WEBPACK_IMPORTED_MODULE_1__, "useIsFetching")) __webpack_require__.d(__webpack_exports__, "useIsFetching", function() { return _react__WEBPACK_IMPORTED_MODULE_1__["useIsFetching"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_react__WEBPACK_IMPORTED_MODULE_1__, "useQuery")) __webpack_require__.d(__webpack_exports__, "useQuery", function() { return _react__WEBPACK_IMPORTED_MODULE_1__["useQuery"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_react__WEBPACK_IMPORTED_MODULE_1__, "useQueryClient")) __webpack_require__.d(__webpack_exports__, "useQueryClient", function() { return _react__WEBPACK_IMPORTED_MODULE_1__["useQueryClient"]; });




/***/ }),

/***/ "laoW":
/*!********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-query/es/core/queryClient.js ***!
  \********************************************************************************************************************/
/*! exports provided: QueryClient */
/*! exports used: QueryClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueryClient; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "cxan");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "jLnA");
/* harmony import */ var _queryCache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./queryCache */ "trjN");
/* harmony import */ var _mutationCache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mutationCache */ "tcKf");
/* harmony import */ var _focusManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./focusManager */ "HXfz");
/* harmony import */ var _onlineManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./onlineManager */ "vQUu");
/* harmony import */ var _notifyManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notifyManager */ "BTp1");
/* harmony import */ var _infiniteQueryBehavior__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./infiniteQueryBehavior */ "nwNy");








// CLASS
var QueryClient = /*#__PURE__*/function () {
  function QueryClient(config) {
    if (config === void 0) {
      config = {};
    }

    this.queryCache = config.queryCache || new _queryCache__WEBPACK_IMPORTED_MODULE_2__[/* QueryCache */ "a"]();
    this.mutationCache = config.mutationCache || new _mutationCache__WEBPACK_IMPORTED_MODULE_3__[/* MutationCache */ "a"]();
    this.defaultOptions = config.defaultOptions || {};
    this.queryDefaults = [];
    this.mutationDefaults = [];
  }

  var _proto = QueryClient.prototype;

  _proto.mount = function mount() {
    var _this = this;

    this.unsubscribeFocus = _focusManager__WEBPACK_IMPORTED_MODULE_4__[/* focusManager */ "a"].subscribe(function () {
      if (_focusManager__WEBPACK_IMPORTED_MODULE_4__[/* focusManager */ "a"].isFocused() && _onlineManager__WEBPACK_IMPORTED_MODULE_5__[/* onlineManager */ "a"].isOnline()) {
        _this.mutationCache.onFocus();

        _this.queryCache.onFocus();
      }
    });
    this.unsubscribeOnline = _onlineManager__WEBPACK_IMPORTED_MODULE_5__[/* onlineManager */ "a"].subscribe(function () {
      if (_focusManager__WEBPACK_IMPORTED_MODULE_4__[/* focusManager */ "a"].isFocused() && _onlineManager__WEBPACK_IMPORTED_MODULE_5__[/* onlineManager */ "a"].isOnline()) {
        _this.mutationCache.onOnline();

        _this.queryCache.onOnline();
      }
    });
  };

  _proto.unmount = function unmount() {
    var _this$unsubscribeFocu, _this$unsubscribeOnli;

    (_this$unsubscribeFocu = this.unsubscribeFocus) == null ? void 0 : _this$unsubscribeFocu.call(this);
    (_this$unsubscribeOnli = this.unsubscribeOnline) == null ? void 0 : _this$unsubscribeOnli.call(this);
  };

  _proto.isFetching = function isFetching(arg1, arg2) {
    var _parseFilterArgs = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* parseFilterArgs */ "k"])(arg1, arg2),
        filters = _parseFilterArgs[0];

    filters.fetching = true;
    return this.queryCache.findAll(filters).length;
  };

  _proto.isMutating = function isMutating(filters) {
    return this.mutationCache.findAll(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, filters, {
      fetching: true
    })).length;
  };

  _proto.getQueryData = function getQueryData(queryKey, filters) {
    var _this$queryCache$find;

    return (_this$queryCache$find = this.queryCache.find(queryKey, filters)) == null ? void 0 : _this$queryCache$find.state.data;
  };

  _proto.getQueriesData = function getQueriesData(queryKeyOrFilters) {
    return this.getQueryCache().findAll(queryKeyOrFilters).map(function (_ref) {
      var queryKey = _ref.queryKey,
          state = _ref.state;
      var data = state.data;
      return [queryKey, data];
    });
  };

  _proto.setQueryData = function setQueryData(queryKey, updater, options) {
    var parsedOptions = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* parseQueryArgs */ "l"])(queryKey);
    var defaultedOptions = this.defaultQueryOptions(parsedOptions);
    return this.queryCache.build(this, defaultedOptions).setData(updater, options);
  };

  _proto.setQueriesData = function setQueriesData(queryKeyOrFilters, updater, options) {
    var _this2 = this;

    return _notifyManager__WEBPACK_IMPORTED_MODULE_6__[/* notifyManager */ "a"].batch(function () {
      return _this2.getQueryCache().findAll(queryKeyOrFilters).map(function (_ref2) {
        var queryKey = _ref2.queryKey;
        return [queryKey, _this2.setQueryData(queryKey, updater, options)];
      });
    });
  };

  _proto.getQueryState = function getQueryState(queryKey, filters) {
    var _this$queryCache$find2;

    return (_this$queryCache$find2 = this.queryCache.find(queryKey, filters)) == null ? void 0 : _this$queryCache$find2.state;
  };

  _proto.removeQueries = function removeQueries(arg1, arg2) {
    var _parseFilterArgs2 = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* parseFilterArgs */ "k"])(arg1, arg2),
        filters = _parseFilterArgs2[0];

    var queryCache = this.queryCache;
    _notifyManager__WEBPACK_IMPORTED_MODULE_6__[/* notifyManager */ "a"].batch(function () {
      queryCache.findAll(filters).forEach(function (query) {
        queryCache.remove(query);
      });
    });
  };

  _proto.resetQueries = function resetQueries(arg1, arg2, arg3) {
    var _this3 = this;

    var _parseFilterArgs3 = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* parseFilterArgs */ "k"])(arg1, arg2, arg3),
        filters = _parseFilterArgs3[0],
        options = _parseFilterArgs3[1];

    var queryCache = this.queryCache;

    var refetchFilters = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, filters, {
      active: true
    });

    return _notifyManager__WEBPACK_IMPORTED_MODULE_6__[/* notifyManager */ "a"].batch(function () {
      queryCache.findAll(filters).forEach(function (query) {
        query.reset();
      });
      return _this3.refetchQueries(refetchFilters, options);
    });
  };

  _proto.cancelQueries = function cancelQueries(arg1, arg2, arg3) {
    var _this4 = this;

    var _parseFilterArgs4 = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* parseFilterArgs */ "k"])(arg1, arg2, arg3),
        filters = _parseFilterArgs4[0],
        _parseFilterArgs4$ = _parseFilterArgs4[1],
        cancelOptions = _parseFilterArgs4$ === void 0 ? {} : _parseFilterArgs4$;

    if (typeof cancelOptions.revert === 'undefined') {
      cancelOptions.revert = true;
    }

    var promises = _notifyManager__WEBPACK_IMPORTED_MODULE_6__[/* notifyManager */ "a"].batch(function () {
      return _this4.queryCache.findAll(filters).map(function (query) {
        return query.cancel(cancelOptions);
      });
    });
    return Promise.all(promises).then(_utils__WEBPACK_IMPORTED_MODULE_1__[/* noop */ "j"]).catch(_utils__WEBPACK_IMPORTED_MODULE_1__[/* noop */ "j"]);
  };

  _proto.invalidateQueries = function invalidateQueries(arg1, arg2, arg3) {
    var _ref3,
        _filters$refetchActiv,
        _filters$refetchInact,
        _this5 = this;

    var _parseFilterArgs5 = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* parseFilterArgs */ "k"])(arg1, arg2, arg3),
        filters = _parseFilterArgs5[0],
        options = _parseFilterArgs5[1];

    var refetchFilters = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, filters, {
      // if filters.refetchActive is not provided and filters.active is explicitly false,
      // e.g. invalidateQueries({ active: false }), we don't want to refetch active queries
      active: (_ref3 = (_filters$refetchActiv = filters.refetchActive) != null ? _filters$refetchActiv : filters.active) != null ? _ref3 : true,
      inactive: (_filters$refetchInact = filters.refetchInactive) != null ? _filters$refetchInact : false
    });

    return _notifyManager__WEBPACK_IMPORTED_MODULE_6__[/* notifyManager */ "a"].batch(function () {
      _this5.queryCache.findAll(filters).forEach(function (query) {
        query.invalidate();
      });

      return _this5.refetchQueries(refetchFilters, options);
    });
  };

  _proto.refetchQueries = function refetchQueries(arg1, arg2, arg3) {
    var _this6 = this;

    var _parseFilterArgs6 = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* parseFilterArgs */ "k"])(arg1, arg2, arg3),
        filters = _parseFilterArgs6[0],
        options = _parseFilterArgs6[1];

    var promises = _notifyManager__WEBPACK_IMPORTED_MODULE_6__[/* notifyManager */ "a"].batch(function () {
      return _this6.queryCache.findAll(filters).map(function (query) {
        return query.fetch(undefined, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, options, {
          meta: {
            refetchPage: filters == null ? void 0 : filters.refetchPage
          }
        }));
      });
    });
    var promise = Promise.all(promises).then(_utils__WEBPACK_IMPORTED_MODULE_1__[/* noop */ "j"]);

    if (!(options == null ? void 0 : options.throwOnError)) {
      promise = promise.catch(_utils__WEBPACK_IMPORTED_MODULE_1__[/* noop */ "j"]);
    }

    return promise;
  };

  _proto.fetchQuery = function fetchQuery(arg1, arg2, arg3) {
    var parsedOptions = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* parseQueryArgs */ "l"])(arg1, arg2, arg3);
    var defaultedOptions = this.defaultQueryOptions(parsedOptions); // https://github.com/tannerlinsley/react-query/issues/652

    if (typeof defaultedOptions.retry === 'undefined') {
      defaultedOptions.retry = false;
    }

    var query = this.queryCache.build(this, defaultedOptions);
    return query.isStaleByTime(defaultedOptions.staleTime) ? query.fetch(defaultedOptions) : Promise.resolve(query.state.data);
  };

  _proto.prefetchQuery = function prefetchQuery(arg1, arg2, arg3) {
    return this.fetchQuery(arg1, arg2, arg3).then(_utils__WEBPACK_IMPORTED_MODULE_1__[/* noop */ "j"]).catch(_utils__WEBPACK_IMPORTED_MODULE_1__[/* noop */ "j"]);
  };

  _proto.fetchInfiniteQuery = function fetchInfiniteQuery(arg1, arg2, arg3) {
    var parsedOptions = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* parseQueryArgs */ "l"])(arg1, arg2, arg3);
    parsedOptions.behavior = Object(_infiniteQueryBehavior__WEBPACK_IMPORTED_MODULE_7__[/* infiniteQueryBehavior */ "c"])();
    return this.fetchQuery(parsedOptions);
  };

  _proto.prefetchInfiniteQuery = function prefetchInfiniteQuery(arg1, arg2, arg3) {
    return this.fetchInfiniteQuery(arg1, arg2, arg3).then(_utils__WEBPACK_IMPORTED_MODULE_1__[/* noop */ "j"]).catch(_utils__WEBPACK_IMPORTED_MODULE_1__[/* noop */ "j"]);
  };

  _proto.cancelMutations = function cancelMutations() {
    var _this7 = this;

    var promises = _notifyManager__WEBPACK_IMPORTED_MODULE_6__[/* notifyManager */ "a"].batch(function () {
      return _this7.mutationCache.getAll().map(function (mutation) {
        return mutation.cancel();
      });
    });
    return Promise.all(promises).then(_utils__WEBPACK_IMPORTED_MODULE_1__[/* noop */ "j"]).catch(_utils__WEBPACK_IMPORTED_MODULE_1__[/* noop */ "j"]);
  };

  _proto.resumePausedMutations = function resumePausedMutations() {
    return this.getMutationCache().resumePausedMutations();
  };

  _proto.executeMutation = function executeMutation(options) {
    return this.mutationCache.build(this, options).execute();
  };

  _proto.getQueryCache = function getQueryCache() {
    return this.queryCache;
  };

  _proto.getMutationCache = function getMutationCache() {
    return this.mutationCache;
  };

  _proto.getDefaultOptions = function getDefaultOptions() {
    return this.defaultOptions;
  };

  _proto.setDefaultOptions = function setDefaultOptions(options) {
    this.defaultOptions = options;
  };

  _proto.setQueryDefaults = function setQueryDefaults(queryKey, options) {
    var result = this.queryDefaults.find(function (x) {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* hashQueryKey */ "d"])(queryKey) === Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* hashQueryKey */ "d"])(x.queryKey);
    });

    if (result) {
      result.defaultOptions = options;
    } else {
      this.queryDefaults.push({
        queryKey: queryKey,
        defaultOptions: options
      });
    }
  };

  _proto.getQueryDefaults = function getQueryDefaults(queryKey) {
    var _this$queryDefaults$f;

    return queryKey ? (_this$queryDefaults$f = this.queryDefaults.find(function (x) {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* partialMatchKey */ "m"])(queryKey, x.queryKey);
    })) == null ? void 0 : _this$queryDefaults$f.defaultOptions : undefined;
  };

  _proto.setMutationDefaults = function setMutationDefaults(mutationKey, options) {
    var result = this.mutationDefaults.find(function (x) {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* hashQueryKey */ "d"])(mutationKey) === Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* hashQueryKey */ "d"])(x.mutationKey);
    });

    if (result) {
      result.defaultOptions = options;
    } else {
      this.mutationDefaults.push({
        mutationKey: mutationKey,
        defaultOptions: options
      });
    }
  };

  _proto.getMutationDefaults = function getMutationDefaults(mutationKey) {
    var _this$mutationDefault;

    return mutationKey ? (_this$mutationDefault = this.mutationDefaults.find(function (x) {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* partialMatchKey */ "m"])(mutationKey, x.mutationKey);
    })) == null ? void 0 : _this$mutationDefault.defaultOptions : undefined;
  };

  _proto.defaultQueryOptions = function defaultQueryOptions(options) {
    if (options == null ? void 0 : options._defaulted) {
      return options;
    }

    var defaultedOptions = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, this.defaultOptions.queries, this.getQueryDefaults(options == null ? void 0 : options.queryKey), options, {
      _defaulted: true
    });

    if (!defaultedOptions.queryHash && defaultedOptions.queryKey) {
      defaultedOptions.queryHash = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* hashQueryKeyByOptions */ "e"])(defaultedOptions.queryKey, defaultedOptions);
    }

    return defaultedOptions;
  };

  _proto.defaultQueryObserverOptions = function defaultQueryObserverOptions(options) {
    return this.defaultQueryOptions(options);
  };

  _proto.defaultMutationOptions = function defaultMutationOptions(options) {
    if (options == null ? void 0 : options._defaulted) {
      return options;
    }

    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, this.defaultOptions.mutations, this.getMutationDefaults(options == null ? void 0 : options.mutationKey), options, {
      _defaulted: true
    });
  };

  _proto.clear = function clear() {
    this.queryCache.clear();
    this.mutationCache.clear();
  };

  return QueryClient;
}();

/***/ }),

/***/ "nsZ7":
/*!***************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-query/es/react/types.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/*! exports used: QueryClient, dehydrate, hydrate, onlineManager, setLogger */
/***/ (function(module, exports) {



/***/ }),

/***/ "nwNy":
/*!******************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-query/es/core/infiniteQueryBehavior.js ***!
  \******************************************************************************************************************************/
/*! exports provided: infiniteQueryBehavior, getNextPageParam, getPreviousPageParam, hasNextPage, hasPreviousPage */
/*! exports used: hasNextPage, hasPreviousPage, infiniteQueryBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return infiniteQueryBehavior; });
/* unused harmony export getNextPageParam */
/* unused harmony export getPreviousPageParam */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hasNextPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hasPreviousPage; });
/* harmony import */ var _retryer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./retryer */ "1oX/");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "jLnA");


function infiniteQueryBehavior() {
  return {
    onFetch: function onFetch(context) {
      context.fetchFn = function () {
        var _context$fetchOptions, _context$fetchOptions2, _context$fetchOptions3, _context$fetchOptions4, _context$state$data, _context$state$data2;

        var refetchPage = (_context$fetchOptions = context.fetchOptions) == null ? void 0 : (_context$fetchOptions2 = _context$fetchOptions.meta) == null ? void 0 : _context$fetchOptions2.refetchPage;
        var fetchMore = (_context$fetchOptions3 = context.fetchOptions) == null ? void 0 : (_context$fetchOptions4 = _context$fetchOptions3.meta) == null ? void 0 : _context$fetchOptions4.fetchMore;
        var pageParam = fetchMore == null ? void 0 : fetchMore.pageParam;
        var isFetchingNextPage = (fetchMore == null ? void 0 : fetchMore.direction) === 'forward';
        var isFetchingPreviousPage = (fetchMore == null ? void 0 : fetchMore.direction) === 'backward';
        var oldPages = ((_context$state$data = context.state.data) == null ? void 0 : _context$state$data.pages) || [];
        var oldPageParams = ((_context$state$data2 = context.state.data) == null ? void 0 : _context$state$data2.pageParams) || [];
        var abortController = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* getAbortController */ "c"])();
        var abortSignal = abortController == null ? void 0 : abortController.signal;
        var newPageParams = oldPageParams;
        var cancelled = false; // Get query function

        var queryFn = context.options.queryFn || function () {
          return Promise.reject('Missing queryFn');
        };

        var buildNewPages = function buildNewPages(pages, param, page, previous) {
          newPageParams = previous ? [param].concat(newPageParams) : [].concat(newPageParams, [param]);
          return previous ? [page].concat(pages) : [].concat(pages, [page]);
        }; // Create function to fetch a page


        var fetchPage = function fetchPage(pages, manual, param, previous) {
          if (cancelled) {
            return Promise.reject('Cancelled');
          }

          if (typeof param === 'undefined' && !manual && pages.length) {
            return Promise.resolve(pages);
          }

          var queryFnContext = {
            queryKey: context.queryKey,
            signal: abortSignal,
            pageParam: param,
            meta: context.meta
          };
          var queryFnResult = queryFn(queryFnContext);
          var promise = Promise.resolve(queryFnResult).then(function (page) {
            return buildNewPages(pages, param, page, previous);
          });

          if (Object(_retryer__WEBPACK_IMPORTED_MODULE_0__[/* isCancelable */ "b"])(queryFnResult)) {
            var promiseAsAny = promise;
            promiseAsAny.cancel = queryFnResult.cancel;
          }

          return promise;
        };

        var promise; // Fetch first page?

        if (!oldPages.length) {
          promise = fetchPage([]);
        } // Fetch next page?
        else if (isFetchingNextPage) {
            var manual = typeof pageParam !== 'undefined';
            var param = manual ? pageParam : getNextPageParam(context.options, oldPages);
            promise = fetchPage(oldPages, manual, param);
          } // Fetch previous page?
          else if (isFetchingPreviousPage) {
              var _manual = typeof pageParam !== 'undefined';

              var _param = _manual ? pageParam : getPreviousPageParam(context.options, oldPages);

              promise = fetchPage(oldPages, _manual, _param, true);
            } // Refetch pages
            else {
                (function () {
                  newPageParams = [];
                  var manual = typeof context.options.getNextPageParam === 'undefined';
                  var shouldFetchFirstPage = refetchPage && oldPages[0] ? refetchPage(oldPages[0], 0, oldPages) : true; // Fetch first page

                  promise = shouldFetchFirstPage ? fetchPage([], manual, oldPageParams[0]) : Promise.resolve(buildNewPages([], oldPageParams[0], oldPages[0])); // Fetch remaining pages

                  var _loop = function _loop(i) {
                    promise = promise.then(function (pages) {
                      var shouldFetchNextPage = refetchPage && oldPages[i] ? refetchPage(oldPages[i], i, oldPages) : true;

                      if (shouldFetchNextPage) {
                        var _param2 = manual ? oldPageParams[i] : getNextPageParam(context.options, pages);

                        return fetchPage(pages, manual, _param2);
                      }

                      return Promise.resolve(buildNewPages(pages, oldPageParams[i], oldPages[i]));
                    });
                  };

                  for (var i = 1; i < oldPages.length; i++) {
                    _loop(i);
                  }
                })();
              }

        var finalPromise = promise.then(function (pages) {
          return {
            pages: pages,
            pageParams: newPageParams
          };
        });
        var finalPromiseAsAny = finalPromise;

        finalPromiseAsAny.cancel = function () {
          cancelled = true;
          abortController == null ? void 0 : abortController.abort();

          if (Object(_retryer__WEBPACK_IMPORTED_MODULE_0__[/* isCancelable */ "b"])(promise)) {
            promise.cancel();
          }
        };

        return finalPromise;
      };
    }
  };
}
function getNextPageParam(options, pages) {
  return options.getNextPageParam == null ? void 0 : options.getNextPageParam(pages[pages.length - 1], pages);
}
function getPreviousPageParam(options, pages) {
  return options.getPreviousPageParam == null ? void 0 : options.getPreviousPageParam(pages[0], pages);
}
/**
 * Checks if there is a next page.
 * Returns `undefined` if it cannot be determined.
 */

function hasNextPage(options, pages) {
  if (options.getNextPageParam && Array.isArray(pages)) {
    var nextPageParam = getNextPageParam(options, pages);
    return typeof nextPageParam !== 'undefined' && nextPageParam !== null && nextPageParam !== false;
  }
}
/**
 * Checks if there is a previous page.
 * Returns `undefined` if it cannot be determined.
 */

function hasPreviousPage(options, pages) {
  if (options.getPreviousPageParam && Array.isArray(pages)) {
    var previousPageParam = getPreviousPageParam(options, pages);
    return typeof previousPageParam !== 'undefined' && previousPageParam !== null && previousPageParam !== false;
  }
}

/***/ }),

/***/ "plQW":
/*!******************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-query/es/core/infiniteQueryObserver.js ***!
  \******************************************************************************************************************************/
/*! exports provided: InfiniteQueryObserver */
/*! exports used: InfiniteQueryObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfiniteQueryObserver; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "cxan");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "BFfR");
/* harmony import */ var _queryObserver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./queryObserver */ "DcPZ");
/* harmony import */ var _infiniteQueryBehavior__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./infiniteQueryBehavior */ "nwNy");




var InfiniteQueryObserver = /*#__PURE__*/function (_QueryObserver) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(InfiniteQueryObserver, _QueryObserver);

  // Type override
  // Type override
  // Type override
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  function InfiniteQueryObserver(client, options) {
    return _QueryObserver.call(this, client, options) || this;
  }

  var _proto = InfiniteQueryObserver.prototype;

  _proto.bindMethods = function bindMethods() {
    _QueryObserver.prototype.bindMethods.call(this);

    this.fetchNextPage = this.fetchNextPage.bind(this);
    this.fetchPreviousPage = this.fetchPreviousPage.bind(this);
  };

  _proto.setOptions = function setOptions(options, notifyOptions) {
    _QueryObserver.prototype.setOptions.call(this, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, options, {
      behavior: Object(_infiniteQueryBehavior__WEBPACK_IMPORTED_MODULE_3__[/* infiniteQueryBehavior */ "c"])()
    }), notifyOptions);
  };

  _proto.getOptimisticResult = function getOptimisticResult(options) {
    options.behavior = Object(_infiniteQueryBehavior__WEBPACK_IMPORTED_MODULE_3__[/* infiniteQueryBehavior */ "c"])();
    return _QueryObserver.prototype.getOptimisticResult.call(this, options);
  };

  _proto.fetchNextPage = function fetchNextPage(options) {
    var _options$cancelRefetc;

    return this.fetch({
      // TODO consider removing `?? true` in future breaking change, to be consistent with `refetch` API (see https://github.com/tannerlinsley/react-query/issues/2617)
      cancelRefetch: (_options$cancelRefetc = options == null ? void 0 : options.cancelRefetch) != null ? _options$cancelRefetc : true,
      throwOnError: options == null ? void 0 : options.throwOnError,
      meta: {
        fetchMore: {
          direction: 'forward',
          pageParam: options == null ? void 0 : options.pageParam
        }
      }
    });
  };

  _proto.fetchPreviousPage = function fetchPreviousPage(options) {
    var _options$cancelRefetc2;

    return this.fetch({
      // TODO consider removing `?? true` in future breaking change, to be consistent with `refetch` API (see https://github.com/tannerlinsley/react-query/issues/2617)
      cancelRefetch: (_options$cancelRefetc2 = options == null ? void 0 : options.cancelRefetch) != null ? _options$cancelRefetc2 : true,
      throwOnError: options == null ? void 0 : options.throwOnError,
      meta: {
        fetchMore: {
          direction: 'backward',
          pageParam: options == null ? void 0 : options.pageParam
        }
      }
    });
  };

  _proto.createResult = function createResult(query, options) {
    var _state$data, _state$data2, _state$fetchMeta, _state$fetchMeta$fetc, _state$fetchMeta2, _state$fetchMeta2$fet;

    var state = query.state;

    var result = _QueryObserver.prototype.createResult.call(this, query, options);

    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, result, {
      fetchNextPage: this.fetchNextPage,
      fetchPreviousPage: this.fetchPreviousPage,
      hasNextPage: Object(_infiniteQueryBehavior__WEBPACK_IMPORTED_MODULE_3__[/* hasNextPage */ "a"])(options, (_state$data = state.data) == null ? void 0 : _state$data.pages),
      hasPreviousPage: Object(_infiniteQueryBehavior__WEBPACK_IMPORTED_MODULE_3__[/* hasPreviousPage */ "b"])(options, (_state$data2 = state.data) == null ? void 0 : _state$data2.pages),
      isFetchingNextPage: state.isFetching && ((_state$fetchMeta = state.fetchMeta) == null ? void 0 : (_state$fetchMeta$fetc = _state$fetchMeta.fetchMore) == null ? void 0 : _state$fetchMeta$fetc.direction) === 'forward',
      isFetchingPreviousPage: state.isFetching && ((_state$fetchMeta2 = state.fetchMeta) == null ? void 0 : (_state$fetchMeta2$fet = _state$fetchMeta2.fetchMore) == null ? void 0 : _state$fetchMeta2$fet.direction) === 'backward'
    });
  };

  return InfiniteQueryObserver;
}(_queryObserver__WEBPACK_IMPORTED_MODULE_2__[/* QueryObserver */ "a"]);

/***/ }),

/***/ "sVyj":
/*!**************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-query/es/devtools/useMediaQuery.js ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useMediaQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useMediaQuery(query) {
  // Keep track of the preference in state, start with the current match
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(function () {
    if (typeof window !== 'undefined') {
      return window.matchMedia && window.matchMedia(query).matches;
    }
  }),
      isMatch = _React$useState[0],
      setIsMatch = _React$useState[1]; // Watch for changes


  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    if (typeof window !== 'undefined') {
      if (!window.matchMedia) {
        return;
      } // Create a matcher


      var matcher = window.matchMedia(query); // Create our handler

      var onChange = function onChange(_ref) {
        var matches = _ref.matches;
        return setIsMatch(matches);
      }; // Listen for changes


      matcher.addListener(onChange);
      return function () {
        // Stop listening for changes
        matcher.removeListener(onChange);
      };
    }
  }, [isMatch, query, setIsMatch]);
  return isMatch;
}

/***/ }),

/***/ "tD2C":
/*!**************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-query/es/core/types.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/*! exports used: QueryClientProvider, useInfiniteQuery, useIsFetching, useQuery, useQueryClient */
/***/ (function(module, exports) {



/***/ }),

/***/ "tcKf":
/*!**********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-query/es/core/mutationCache.js ***!
  \**********************************************************************************************************************/
/*! exports provided: MutationCache */
/*! exports used: MutationCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MutationCache; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "BFfR");
/* harmony import */ var _notifyManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifyManager */ "BTp1");
/* harmony import */ var _mutation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mutation */ "Qjpd");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "jLnA");
/* harmony import */ var _subscribable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subscribable */ "FyGo");




 // TYPES

// CLASS
var MutationCache = /*#__PURE__*/function (_Subscribable) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(MutationCache, _Subscribable);

  function MutationCache(config) {
    var _this;

    _this = _Subscribable.call(this) || this;
    _this.config = config || {};
    _this.mutations = [];
    _this.mutationId = 0;
    return _this;
  }

  var _proto = MutationCache.prototype;

  _proto.build = function build(client, options, state) {
    var mutation = new _mutation__WEBPACK_IMPORTED_MODULE_2__[/* Mutation */ "a"]({
      mutationCache: this,
      mutationId: ++this.mutationId,
      options: client.defaultMutationOptions(options),
      state: state,
      defaultOptions: options.mutationKey ? client.getMutationDefaults(options.mutationKey) : undefined,
      meta: options.meta
    });
    this.add(mutation);
    return mutation;
  };

  _proto.add = function add(mutation) {
    this.mutations.push(mutation);
    this.notify(mutation);
  };

  _proto.remove = function remove(mutation) {
    this.mutations = this.mutations.filter(function (x) {
      return x !== mutation;
    });
    mutation.cancel();
    this.notify(mutation);
  };

  _proto.clear = function clear() {
    var _this2 = this;

    _notifyManager__WEBPACK_IMPORTED_MODULE_1__[/* notifyManager */ "a"].batch(function () {
      _this2.mutations.forEach(function (mutation) {
        _this2.remove(mutation);
      });
    });
  };

  _proto.getAll = function getAll() {
    return this.mutations;
  };

  _proto.find = function find(filters) {
    if (typeof filters.exact === 'undefined') {
      filters.exact = true;
    }

    return this.mutations.find(function (mutation) {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* matchMutation */ "h"])(filters, mutation);
    });
  };

  _proto.findAll = function findAll(filters) {
    return this.mutations.filter(function (mutation) {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* matchMutation */ "h"])(filters, mutation);
    });
  };

  _proto.notify = function notify(mutation) {
    var _this3 = this;

    _notifyManager__WEBPACK_IMPORTED_MODULE_1__[/* notifyManager */ "a"].batch(function () {
      _this3.listeners.forEach(function (listener) {
        listener(mutation);
      });
    });
  };

  _proto.onFocus = function onFocus() {
    this.resumePausedMutations();
  };

  _proto.onOnline = function onOnline() {
    this.resumePausedMutations();
  };

  _proto.resumePausedMutations = function resumePausedMutations() {
    var pausedMutations = this.mutations.filter(function (x) {
      return x.state.isPaused;
    });
    return _notifyManager__WEBPACK_IMPORTED_MODULE_1__[/* notifyManager */ "a"].batch(function () {
      return pausedMutations.reduce(function (promise, mutation) {
        return promise.then(function () {
          return mutation.continue().catch(_utils__WEBPACK_IMPORTED_MODULE_3__[/* noop */ "j"]);
        });
      }, Promise.resolve());
    });
  };

  return MutationCache;
}(_subscribable__WEBPACK_IMPORTED_MODULE_4__[/* Subscribable */ "a"]);

/***/ }),

/***/ "trjN":
/*!*******************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-query/es/core/queryCache.js ***!
  \*******************************************************************************************************************/
/*! exports provided: QueryCache */
/*! exports used: QueryCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueryCache; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "BFfR");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "jLnA");
/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./query */ "wQFA");
/* harmony import */ var _notifyManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notifyManager */ "BTp1");
/* harmony import */ var _subscribable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subscribable */ "FyGo");





// CLASS
var QueryCache = /*#__PURE__*/function (_Subscribable) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(QueryCache, _Subscribable);

  function QueryCache(config) {
    var _this;

    _this = _Subscribable.call(this) || this;
    _this.config = config || {};
    _this.queries = [];
    _this.queriesMap = {};
    return _this;
  }

  var _proto = QueryCache.prototype;

  _proto.build = function build(client, options, state) {
    var _options$queryHash;

    var queryKey = options.queryKey;
    var queryHash = (_options$queryHash = options.queryHash) != null ? _options$queryHash : Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* hashQueryKeyByOptions */ "e"])(queryKey, options);
    var query = this.get(queryHash);

    if (!query) {
      query = new _query__WEBPACK_IMPORTED_MODULE_2__[/* Query */ "a"]({
        cache: this,
        queryKey: queryKey,
        queryHash: queryHash,
        options: client.defaultQueryOptions(options),
        state: state,
        defaultOptions: client.getQueryDefaults(queryKey),
        meta: options.meta
      });
      this.add(query);
    }

    return query;
  };

  _proto.add = function add(query) {
    if (!this.queriesMap[query.queryHash]) {
      this.queriesMap[query.queryHash] = query;
      this.queries.push(query);
      this.notify({
        type: 'queryAdded',
        query: query
      });
    }
  };

  _proto.remove = function remove(query) {
    var queryInMap = this.queriesMap[query.queryHash];

    if (queryInMap) {
      query.destroy();
      this.queries = this.queries.filter(function (x) {
        return x !== query;
      });

      if (queryInMap === query) {
        delete this.queriesMap[query.queryHash];
      }

      this.notify({
        type: 'queryRemoved',
        query: query
      });
    }
  };

  _proto.clear = function clear() {
    var _this2 = this;

    _notifyManager__WEBPACK_IMPORTED_MODULE_3__[/* notifyManager */ "a"].batch(function () {
      _this2.queries.forEach(function (query) {
        _this2.remove(query);
      });
    });
  };

  _proto.get = function get(queryHash) {
    return this.queriesMap[queryHash];
  };

  _proto.getAll = function getAll() {
    return this.queries;
  };

  _proto.find = function find(arg1, arg2) {
    var _parseFilterArgs = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* parseFilterArgs */ "k"])(arg1, arg2),
        filters = _parseFilterArgs[0];

    if (typeof filters.exact === 'undefined') {
      filters.exact = true;
    }

    return this.queries.find(function (query) {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* matchQuery */ "i"])(filters, query);
    });
  };

  _proto.findAll = function findAll(arg1, arg2) {
    var _parseFilterArgs2 = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* parseFilterArgs */ "k"])(arg1, arg2),
        filters = _parseFilterArgs2[0];

    return Object.keys(filters).length > 0 ? this.queries.filter(function (query) {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* matchQuery */ "i"])(filters, query);
    }) : this.queries;
  };

  _proto.notify = function notify(event) {
    var _this3 = this;

    _notifyManager__WEBPACK_IMPORTED_MODULE_3__[/* notifyManager */ "a"].batch(function () {
      _this3.listeners.forEach(function (listener) {
        listener(event);
      });
    });
  };

  _proto.onFocus = function onFocus() {
    var _this4 = this;

    _notifyManager__WEBPACK_IMPORTED_MODULE_3__[/* notifyManager */ "a"].batch(function () {
      _this4.queries.forEach(function (query) {
        query.onFocus();
      });
    });
  };

  _proto.onOnline = function onOnline() {
    var _this5 = this;

    _notifyManager__WEBPACK_IMPORTED_MODULE_3__[/* notifyManager */ "a"].batch(function () {
      _this5.queries.forEach(function (query) {
        query.onOnline();
      });
    });
  };

  return QueryCache;
}(_subscribable__WEBPACK_IMPORTED_MODULE_4__[/* Subscribable */ "a"]);

/***/ }),

/***/ "twkq":
/*!************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-query/es/createWebStoragePersistor-experimental/index.js ***!
  \************************************************************************************************************************************************/
/*! exports provided: createWebStoragePersistor */
/*! exports used: createWebStoragePersistor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createWebStoragePersistor; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "cxan");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/utils */ "jLnA");


function createWebStoragePersistor(_ref) {
  var storage = _ref.storage,
      _ref$key = _ref.key,
      key = _ref$key === void 0 ? "REACT_QUERY_OFFLINE_CACHE" : _ref$key,
      _ref$throttleTime = _ref.throttleTime,
      throttleTime = _ref$throttleTime === void 0 ? 1000 : _ref$throttleTime,
      _ref$serialize = _ref.serialize,
      serialize = _ref$serialize === void 0 ? JSON.stringify : _ref$serialize,
      _ref$deserialize = _ref.deserialize,
      deserialize = _ref$deserialize === void 0 ? JSON.parse : _ref$deserialize;

  //try to save data to storage
  function trySave(persistedClient) {
    try {
      storage.setItem(key, serialize(persistedClient));
    } catch (_unused) {
      return false;
    }

    return true;
  }

  if (typeof storage !== 'undefined') {
    return {
      persistClient: throttle(function (persistedClient) {
        if (trySave(persistedClient) !== true) {
          var mutations = [].concat(persistedClient.clientState.mutations);
          var queries = [].concat(persistedClient.clientState.queries);

          var _client = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, persistedClient, {
            clientState: {
              mutations: mutations,
              queries: queries
            }
          }); // sort queries by dataUpdatedAt (oldest first)


          var sortedQueries = [].concat(queries).sort(function (a, b) {
            return a.state.dataUpdatedAt - b.state.dataUpdatedAt;
          }); // clean old queries and try to save

          var _loop = function _loop() {
            var oldestData = sortedQueries.shift();
            _client.clientState.queries = queries.filter(function (q) {
              return q !== oldestData;
            });

            if (trySave(_client)) {
              return {
                v: void 0
              }; // save success
            }
          };

          while (sortedQueries.length > 0) {
            var _ret = _loop();

            if (typeof _ret === "object") return _ret.v;
          } // clean mutations and try to save


          while (mutations.shift()) {
            if (trySave(_client)) {
              return; // save success
            }
          }
        }
      }, throttleTime),
      restoreClient: function restoreClient() {
        var cacheString = storage.getItem(key);

        if (!cacheString) {
          return;
        }

        return deserialize(cacheString);
      },
      removeClient: function removeClient() {
        storage.removeItem(key);
      }
    };
  }

  return {
    persistClient: _core_utils__WEBPACK_IMPORTED_MODULE_1__[/* noop */ "j"],
    restoreClient: _core_utils__WEBPACK_IMPORTED_MODULE_1__[/* noop */ "j"],
    removeClient: _core_utils__WEBPACK_IMPORTED_MODULE_1__[/* noop */ "j"]
  };
}

function throttle(func, wait) {
  if (wait === void 0) {
    wait = 100;
  }

  var timer = null;
  var params;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    params = args;

    if (timer === null) {
      timer = setTimeout(function () {
        func.apply(void 0, params);
        timer = null;
      }, wait);
    }
  };
}

/***/ }),

/***/ "vQUu":
/*!**********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-query/es/core/onlineManager.js ***!
  \**********************************************************************************************************************/
/*! exports provided: OnlineManager, onlineManager */
/*! exports used: onlineManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export OnlineManager */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return onlineManager; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "BFfR");
/* harmony import */ var _subscribable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subscribable */ "FyGo");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "jLnA");



var OnlineManager = /*#__PURE__*/function (_Subscribable) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(OnlineManager, _Subscribable);

  function OnlineManager() {
    var _this;

    _this = _Subscribable.call(this) || this;

    _this.setup = function (onOnline) {
      var _window;

      if (!_utils__WEBPACK_IMPORTED_MODULE_2__[/* isServer */ "f"] && ((_window = window) == null ? void 0 : _window.addEventListener)) {
        var listener = function listener() {
          return onOnline();
        }; // Listen to online


        window.addEventListener('online', listener, false);
        window.addEventListener('offline', listener, false);
        return function () {
          // Be sure to unsubscribe if a new handler is set
          window.removeEventListener('online', listener);
          window.removeEventListener('offline', listener);
        };
      }
    };

    return _this;
  }

  var _proto = OnlineManager.prototype;

  _proto.onSubscribe = function onSubscribe() {
    if (!this.cleanup) {
      this.setEventListener(this.setup);
    }
  };

  _proto.onUnsubscribe = function onUnsubscribe() {
    if (!this.hasListeners()) {
      var _this$cleanup;

      (_this$cleanup = this.cleanup) == null ? void 0 : _this$cleanup.call(this);
      this.cleanup = undefined;
    }
  };

  _proto.setEventListener = function setEventListener(setup) {
    var _this$cleanup2,
        _this2 = this;

    this.setup = setup;
    (_this$cleanup2 = this.cleanup) == null ? void 0 : _this$cleanup2.call(this);
    this.cleanup = setup(function (online) {
      if (typeof online === 'boolean') {
        _this2.setOnline(online);
      } else {
        _this2.onOnline();
      }
    });
  };

  _proto.setOnline = function setOnline(online) {
    this.online = online;

    if (online) {
      this.onOnline();
    }
  };

  _proto.onOnline = function onOnline() {
    this.listeners.forEach(function (listener) {
      listener();
    });
  };

  _proto.isOnline = function isOnline() {
    if (typeof this.online === 'boolean') {
      return this.online;
    }

    if (typeof navigator === 'undefined' || typeof navigator.onLine === 'undefined') {
      return true;
    }

    return navigator.onLine;
  };

  return OnlineManager;
}(_subscribable__WEBPACK_IMPORTED_MODULE_1__[/* Subscribable */ "a"]);
var onlineManager = new OnlineManager();

/***/ }),

/***/ "wQFA":
/*!**************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-query/es/core/query.js ***!
  \**************************************************************************************************************/
/*! exports provided: Query */
/*! exports used: Query */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Query; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "cxan");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "jLnA");
/* harmony import */ var _notifyManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notifyManager */ "BTp1");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logger */ "ih67");
/* harmony import */ var _retryer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./retryer */ "1oX/");




 // TYPES

// CLASS
var Query = /*#__PURE__*/function () {
  function Query(config) {
    this.abortSignalConsumed = false;
    this.hadObservers = false;
    this.defaultOptions = config.defaultOptions;
    this.setOptions(config.options);
    this.observers = [];
    this.cache = config.cache;
    this.queryKey = config.queryKey;
    this.queryHash = config.queryHash;
    this.initialState = config.state || this.getDefaultState(this.options);
    this.state = this.initialState;
    this.meta = config.meta;
    this.scheduleGc();
  }

  var _proto = Query.prototype;

  _proto.setOptions = function setOptions(options) {
    var _this$options$cacheTi;

    this.options = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, this.defaultOptions, options);
    this.meta = options == null ? void 0 : options.meta; // Default to 5 minutes if not cache time is set

    this.cacheTime = Math.max(this.cacheTime || 0, (_this$options$cacheTi = this.options.cacheTime) != null ? _this$options$cacheTi : 5 * 60 * 1000);
  };

  _proto.setDefaultOptions = function setDefaultOptions(options) {
    this.defaultOptions = options;
  };

  _proto.scheduleGc = function scheduleGc() {
    var _this = this;

    this.clearGcTimeout();

    if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* isValidTimeout */ "g"])(this.cacheTime)) {
      this.gcTimeout = setTimeout(function () {
        _this.optionalRemove();
      }, this.cacheTime);
    }
  };

  _proto.clearGcTimeout = function clearGcTimeout() {
    clearTimeout(this.gcTimeout);
    this.gcTimeout = undefined;
  };

  _proto.optionalRemove = function optionalRemove() {
    if (!this.observers.length) {
      if (this.state.isFetching) {
        if (this.hadObservers) {
          this.scheduleGc();
        }
      } else {
        this.cache.remove(this);
      }
    }
  };

  _proto.setData = function setData(updater, options) {
    var _this$options$isDataE, _this$options;

    var prevData = this.state.data; // Get the new data

    var data = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* functionalUpdate */ "b"])(updater, prevData); // Use prev data if an isDataEqual function is defined and returns `true`

    if ((_this$options$isDataE = (_this$options = this.options).isDataEqual) == null ? void 0 : _this$options$isDataE.call(_this$options, prevData, data)) {
      data = prevData;
    } else if (this.options.structuralSharing !== false) {
      // Structurally share data between prev and new data if needed
      data = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* replaceEqualDeep */ "n"])(prevData, data);
    } // Set data and mark it as cached


    this.dispatch({
      data: data,
      type: 'success',
      dataUpdatedAt: options == null ? void 0 : options.updatedAt
    });
    return data;
  };

  _proto.setState = function setState(state, setStateOptions) {
    this.dispatch({
      type: 'setState',
      state: state,
      setStateOptions: setStateOptions
    });
  };

  _proto.cancel = function cancel(options) {
    var _this$retryer;

    var promise = this.promise;
    (_this$retryer = this.retryer) == null ? void 0 : _this$retryer.cancel(options);
    return promise ? promise.then(_utils__WEBPACK_IMPORTED_MODULE_1__[/* noop */ "j"]).catch(_utils__WEBPACK_IMPORTED_MODULE_1__[/* noop */ "j"]) : Promise.resolve();
  };

  _proto.destroy = function destroy() {
    this.clearGcTimeout();
    this.cancel({
      silent: true
    });
  };

  _proto.reset = function reset() {
    this.destroy();
    this.setState(this.initialState);
  };

  _proto.isActive = function isActive() {
    return this.observers.some(function (observer) {
      return observer.options.enabled !== false;
    });
  };

  _proto.isFetching = function isFetching() {
    return this.state.isFetching;
  };

  _proto.isStale = function isStale() {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some(function (observer) {
      return observer.getCurrentResult().isStale;
    });
  };

  _proto.isStaleByTime = function isStaleByTime(staleTime) {
    if (staleTime === void 0) {
      staleTime = 0;
    }

    return this.state.isInvalidated || !this.state.dataUpdatedAt || !Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* timeUntilStale */ "r"])(this.state.dataUpdatedAt, staleTime);
  };

  _proto.onFocus = function onFocus() {
    var _this$retryer2;

    var observer = this.observers.find(function (x) {
      return x.shouldFetchOnWindowFocus();
    });

    if (observer) {
      observer.refetch();
    } // Continue fetch if currently paused


    (_this$retryer2 = this.retryer) == null ? void 0 : _this$retryer2.continue();
  };

  _proto.onOnline = function onOnline() {
    var _this$retryer3;

    var observer = this.observers.find(function (x) {
      return x.shouldFetchOnReconnect();
    });

    if (observer) {
      observer.refetch();
    } // Continue fetch if currently paused


    (_this$retryer3 = this.retryer) == null ? void 0 : _this$retryer3.continue();
  };

  _proto.addObserver = function addObserver(observer) {
    if (this.observers.indexOf(observer) === -1) {
      this.observers.push(observer);
      this.hadObservers = true; // Stop the query from being garbage collected

      this.clearGcTimeout();
      this.cache.notify({
        type: 'observerAdded',
        query: this,
        observer: observer
      });
    }
  };

  _proto.removeObserver = function removeObserver(observer) {
    if (this.observers.indexOf(observer) !== -1) {
      this.observers = this.observers.filter(function (x) {
        return x !== observer;
      });

      if (!this.observers.length) {
        // If the transport layer does not support cancellation
        // we'll let the query continue so the result can be cached
        if (this.retryer) {
          if (this.retryer.isTransportCancelable || this.abortSignalConsumed) {
            this.retryer.cancel({
              revert: true
            });
          } else {
            this.retryer.cancelRetry();
          }
        }

        if (this.cacheTime) {
          this.scheduleGc();
        } else {
          this.cache.remove(this);
        }
      }

      this.cache.notify({
        type: 'observerRemoved',
        query: this,
        observer: observer
      });
    }
  };

  _proto.getObserversCount = function getObserversCount() {
    return this.observers.length;
  };

  _proto.invalidate = function invalidate() {
    if (!this.state.isInvalidated) {
      this.dispatch({
        type: 'invalidate'
      });
    }
  };

  _proto.fetch = function fetch(options, fetchOptions) {
    var _this2 = this,
        _this$options$behavio,
        _context$fetchOptions,
        _abortController$abor;

    if (this.state.isFetching) {
      if (this.state.dataUpdatedAt && (fetchOptions == null ? void 0 : fetchOptions.cancelRefetch)) {
        // Silently cancel current fetch if the user wants to cancel refetches
        this.cancel({
          silent: true
        });
      } else if (this.promise) {
        var _this$retryer4;

        // make sure that retries that were potentially cancelled due to unmounts can continue
        (_this$retryer4 = this.retryer) == null ? void 0 : _this$retryer4.continueRetry(); // Return current promise if we are already fetching

        return this.promise;
      }
    } // Update config if passed, otherwise the config from the last execution is used


    if (options) {
      this.setOptions(options);
    } // Use the options from the first observer with a query function if no function is found.
    // This can happen when the query is hydrated or created with setQueryData.


    if (!this.options.queryFn) {
      var observer = this.observers.find(function (x) {
        return x.options.queryFn;
      });

      if (observer) {
        this.setOptions(observer.options);
      }
    }

    var queryKey = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* ensureQueryKeyArray */ "a"])(this.queryKey);
    var abortController = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* getAbortController */ "c"])(); // Create query function context

    var queryFnContext = {
      queryKey: queryKey,
      pageParam: undefined,
      meta: this.meta
    };
    Object.defineProperty(queryFnContext, 'signal', {
      enumerable: true,
      get: function get() {
        if (abortController) {
          _this2.abortSignalConsumed = true;
          return abortController.signal;
        }

        return undefined;
      }
    }); // Create fetch function

    var fetchFn = function fetchFn() {
      if (!_this2.options.queryFn) {
        return Promise.reject('Missing queryFn');
      }

      _this2.abortSignalConsumed = false;
      return _this2.options.queryFn(queryFnContext);
    }; // Trigger behavior hook


    var context = {
      fetchOptions: fetchOptions,
      options: this.options,
      queryKey: queryKey,
      state: this.state,
      fetchFn: fetchFn,
      meta: this.meta
    };

    if ((_this$options$behavio = this.options.behavior) == null ? void 0 : _this$options$behavio.onFetch) {
      var _this$options$behavio2;

      (_this$options$behavio2 = this.options.behavior) == null ? void 0 : _this$options$behavio2.onFetch(context);
    } // Store state in case the current fetch needs to be reverted


    this.revertState = this.state; // Set to fetching state if not already in it

    if (!this.state.isFetching || this.state.fetchMeta !== ((_context$fetchOptions = context.fetchOptions) == null ? void 0 : _context$fetchOptions.meta)) {
      var _context$fetchOptions2;

      this.dispatch({
        type: 'fetch',
        meta: (_context$fetchOptions2 = context.fetchOptions) == null ? void 0 : _context$fetchOptions2.meta
      });
    } // Try to fetch the data


    this.retryer = new _retryer__WEBPACK_IMPORTED_MODULE_4__[/* Retryer */ "a"]({
      fn: context.fetchFn,
      abort: abortController == null ? void 0 : (_abortController$abor = abortController.abort) == null ? void 0 : _abortController$abor.bind(abortController),
      onSuccess: function onSuccess(data) {
        _this2.setData(data); // Notify cache callback


        _this2.cache.config.onSuccess == null ? void 0 : _this2.cache.config.onSuccess(data, _this2); // Remove query after fetching if cache time is 0

        if (_this2.cacheTime === 0) {
          _this2.optionalRemove();
        }
      },
      onError: function onError(error) {
        // Optimistically update state if needed
        if (!(Object(_retryer__WEBPACK_IMPORTED_MODULE_4__[/* isCancelledError */ "c"])(error) && error.silent)) {
          _this2.dispatch({
            type: 'error',
            error: error
          });
        }

        if (!Object(_retryer__WEBPACK_IMPORTED_MODULE_4__[/* isCancelledError */ "c"])(error)) {
          // Notify cache callback
          _this2.cache.config.onError == null ? void 0 : _this2.cache.config.onError(error, _this2); // Log error

          Object(_logger__WEBPACK_IMPORTED_MODULE_3__[/* getLogger */ "a"])().error(error);
        } // Remove query after fetching if cache time is 0


        if (_this2.cacheTime === 0) {
          _this2.optionalRemove();
        }
      },
      onFail: function onFail() {
        _this2.dispatch({
          type: 'failed'
        });
      },
      onPause: function onPause() {
        _this2.dispatch({
          type: 'pause'
        });
      },
      onContinue: function onContinue() {
        _this2.dispatch({
          type: 'continue'
        });
      },
      retry: context.options.retry,
      retryDelay: context.options.retryDelay
    });
    this.promise = this.retryer.promise;
    return this.promise;
  };

  _proto.dispatch = function dispatch(action) {
    var _this3 = this;

    this.state = this.reducer(this.state, action);
    _notifyManager__WEBPACK_IMPORTED_MODULE_2__[/* notifyManager */ "a"].batch(function () {
      _this3.observers.forEach(function (observer) {
        observer.onQueryUpdate(action);
      });

      _this3.cache.notify({
        query: _this3,
        type: 'queryUpdated',
        action: action
      });
    });
  };

  _proto.getDefaultState = function getDefaultState(options) {
    var data = typeof options.initialData === 'function' ? options.initialData() : options.initialData;
    var hasInitialData = typeof options.initialData !== 'undefined';
    var initialDataUpdatedAt = hasInitialData ? typeof options.initialDataUpdatedAt === 'function' ? options.initialDataUpdatedAt() : options.initialDataUpdatedAt : 0;
    var hasData = typeof data !== 'undefined';
    return {
      data: data,
      dataUpdateCount: 0,
      dataUpdatedAt: hasData ? initialDataUpdatedAt != null ? initialDataUpdatedAt : Date.now() : 0,
      error: null,
      errorUpdateCount: 0,
      errorUpdatedAt: 0,
      fetchFailureCount: 0,
      fetchMeta: null,
      isFetching: false,
      isInvalidated: false,
      isPaused: false,
      status: hasData ? 'success' : 'idle'
    };
  };

  _proto.reducer = function reducer(state, action) {
    var _action$meta, _action$dataUpdatedAt;

    switch (action.type) {
      case 'failed':
        return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
          fetchFailureCount: state.fetchFailureCount + 1
        });

      case 'pause':
        return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
          isPaused: true
        });

      case 'continue':
        return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
          isPaused: false
        });

      case 'fetch':
        return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
          fetchFailureCount: 0,
          fetchMeta: (_action$meta = action.meta) != null ? _action$meta : null,
          isFetching: true,
          isPaused: false
        }, !state.dataUpdatedAt && {
          error: null,
          status: 'loading'
        });

      case 'success':
        return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
          data: action.data,
          dataUpdateCount: state.dataUpdateCount + 1,
          dataUpdatedAt: (_action$dataUpdatedAt = action.dataUpdatedAt) != null ? _action$dataUpdatedAt : Date.now(),
          error: null,
          fetchFailureCount: 0,
          isFetching: false,
          isInvalidated: false,
          isPaused: false,
          status: 'success'
        });

      case 'error':
        var error = action.error;

        if (Object(_retryer__WEBPACK_IMPORTED_MODULE_4__[/* isCancelledError */ "c"])(error) && error.revert && this.revertState) {
          return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, this.revertState);
        }

        return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
          error: error,
          errorUpdateCount: state.errorUpdateCount + 1,
          errorUpdatedAt: Date.now(),
          fetchFailureCount: state.fetchFailureCount + 1,
          isFetching: false,
          isPaused: false,
          status: 'error'
        });

      case 'invalidate':
        return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
          isInvalidated: true
        });

      case 'setState':
        return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, action.state);

      default:
        return state;
    }
  };

  return Query;
}();

/***/ }),

/***/ "wR8M":
/*!*****************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-query/es/react/QueryClientProvider.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: useQueryClient, QueryClientProvider */
/*! exports used: QueryClientProvider, useQueryClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useQueryClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueryClientProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var defaultContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(undefined);
var QueryClientSharingContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(false); // if contextSharing is on, we share the first and at least one
// instance of the context across the window
// to ensure that if React Query is used across
// different bundles or microfrontends they will
// all use the same **instance** of context, regardless
// of module scoping.

function getQueryClientContext(contextSharing) {
  if (contextSharing && typeof window !== 'undefined') {
    if (!window.ReactQueryClientContext) {
      window.ReactQueryClientContext = defaultContext;
    }

    return window.ReactQueryClientContext;
  }

  return defaultContext;
}

var useQueryClient = function useQueryClient() {
  var queryClient = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(getQueryClientContext(react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(QueryClientSharingContext)));

  if (!queryClient) {
    throw new Error('No QueryClient set, use QueryClientProvider to set one');
  }

  return queryClient;
};
var QueryClientProvider = function QueryClientProvider(_ref) {
  var client = _ref.client,
      _ref$contextSharing = _ref.contextSharing,
      contextSharing = _ref$contextSharing === void 0 ? false : _ref$contextSharing,
      children = _ref.children;
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    client.mount();
    return function () {
      client.unmount();
    };
  }, [client]);
  var Context = getQueryClientContext(contextSharing);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(QueryClientSharingContext.Provider, {
    value: contextSharing
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Context.Provider, {
    value: client
  }, children));
};

/***/ }),

/***/ "x4am":
/*!*********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-query/es/devtools/devtools.js ***!
  \*********************************************************************************************************************/
/*! exports provided: ReactQueryDevtools, ReactQueryDevtoolsPanel */
/*! exports used: ReactQueryDevtools, ReactQueryDevtoolsPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReactQueryDevtools; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ReactQueryDevtoolsPanel; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "cxan");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "+wNj");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ "jtiS");
/* harmony import */ var match_sorter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! match-sorter */ "v9xJ");
/* harmony import */ var _useLocalStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useLocalStorage */ "CSPR");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "Ntwt");
/* harmony import */ var _styledComponents__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styledComponents */ "h+QF");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./theme */ "WRzm");
/* harmony import */ var _Explorer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Explorer */ "ggyD");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Logo */ "Bljx");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/utils */ "jLnA");













var isServer = typeof window === 'undefined';
function ReactQueryDevtools(_ref) {
  var initialIsOpen = _ref.initialIsOpen,
      _ref$panelProps = _ref.panelProps,
      panelProps = _ref$panelProps === void 0 ? {} : _ref$panelProps,
      _ref$closeButtonProps = _ref.closeButtonProps,
      closeButtonProps = _ref$closeButtonProps === void 0 ? {} : _ref$closeButtonProps,
      _ref$toggleButtonProp = _ref.toggleButtonProps,
      toggleButtonProps = _ref$toggleButtonProp === void 0 ? {} : _ref$toggleButtonProp,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? 'bottom-left' : _ref$position,
      _ref$containerElement = _ref.containerElement,
      Container = _ref$containerElement === void 0 ? 'aside' : _ref$containerElement,
      styleNonce = _ref.styleNonce;
  var rootRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(null);
  var panelRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(null);

  var _useLocalStorage = Object(_useLocalStorage__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])('reactQueryDevtoolsOpen', initialIsOpen),
      isOpen = _useLocalStorage[0],
      setIsOpen = _useLocalStorage[1];

  var _useLocalStorage2 = Object(_useLocalStorage__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])('reactQueryDevtoolsHeight', null),
      devtoolsHeight = _useLocalStorage2[0],
      setDevtoolsHeight = _useLocalStorage2[1];

  var _useSafeState = Object(_utils__WEBPACK_IMPORTED_MODULE_6__[/* useSafeState */ "f"])(false),
      isResolvedOpen = _useSafeState[0],
      setIsResolvedOpen = _useSafeState[1];

  var _useSafeState2 = Object(_utils__WEBPACK_IMPORTED_MODULE_6__[/* useSafeState */ "f"])(false),
      isResizing = _useSafeState2[0],
      setIsResizing = _useSafeState2[1];

  var isMounted = Object(_utils__WEBPACK_IMPORTED_MODULE_6__[/* useIsMounted */ "e"])();

  var _handleDragStart = function handleDragStart(panelElement, startEvent) {
    var _panelElement$getBoun;

    if (startEvent.button !== 0) return; // Only allow left click for drag

    setIsResizing(true);
    var dragInfo = {
      originalHeight: (_panelElement$getBoun = panelElement == null ? void 0 : panelElement.getBoundingClientRect().height) != null ? _panelElement$getBoun : 0,
      pageY: startEvent.pageY
    };

    var run = function run(moveEvent) {
      var delta = dragInfo.pageY - moveEvent.pageY;
      var newHeight = (dragInfo == null ? void 0 : dragInfo.originalHeight) + delta;
      setDevtoolsHeight(newHeight);

      if (newHeight < 70) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    var unsub = function unsub() {
      setIsResizing(false);
      document.removeEventListener('mousemove', run);
      document.removeEventListener('mouseUp', unsub);
    };

    document.addEventListener('mousemove', run);
    document.addEventListener('mouseup', unsub);
  };

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    setIsResolvedOpen(isOpen != null ? isOpen : false);
  }, [isOpen, isResolvedOpen, setIsResolvedOpen]); // Toggle panel visibility before/after transition (depending on direction).
  // Prevents focusing in a closed panel.

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    var ref = panelRef.current;

    if (ref) {
      var handlePanelTransitionStart = function handlePanelTransitionStart() {
        if (ref && isResolvedOpen) {
          ref.style.visibility = 'visible';
        }
      };

      var handlePanelTransitionEnd = function handlePanelTransitionEnd() {
        if (ref && !isResolvedOpen) {
          ref.style.visibility = 'hidden';
        }
      };

      ref.addEventListener('transitionstart', handlePanelTransitionStart);
      ref.addEventListener('transitionend', handlePanelTransitionEnd);
      return function () {
        ref.removeEventListener('transitionstart', handlePanelTransitionStart);
        ref.removeEventListener('transitionend', handlePanelTransitionEnd);
      };
    }
  }, [isResolvedOpen]);
  react__WEBPACK_IMPORTED_MODULE_2___default.a[isServer ? 'useEffect' : 'useLayoutEffect'](function () {
    if (isResolvedOpen) {
      var _rootRef$current, _rootRef$current$pare;

      var previousValue = (_rootRef$current = rootRef.current) == null ? void 0 : (_rootRef$current$pare = _rootRef$current.parentElement) == null ? void 0 : _rootRef$current$pare.style.paddingBottom;

      var run = function run() {
        var _panelRef$current, _rootRef$current2;

        var containerHeight = (_panelRef$current = panelRef.current) == null ? void 0 : _panelRef$current.getBoundingClientRect().height;

        if ((_rootRef$current2 = rootRef.current) == null ? void 0 : _rootRef$current2.parentElement) {
          rootRef.current.parentElement.style.paddingBottom = containerHeight + "px";
        }
      };

      run();

      if (typeof window !== 'undefined') {
        window.addEventListener('resize', run);
        return function () {
          var _rootRef$current3;

          window.removeEventListener('resize', run);

          if (((_rootRef$current3 = rootRef.current) == null ? void 0 : _rootRef$current3.parentElement) && typeof previousValue === 'string') {
            rootRef.current.parentElement.style.paddingBottom = previousValue;
          }
        };
      }
    }
  }, [isResolvedOpen]);

  var _panelProps$style = panelProps.style,
      panelStyle = _panelProps$style === void 0 ? {} : _panelProps$style,
      otherPanelProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(panelProps, ["style"]);

  var _closeButtonProps$sty = closeButtonProps.style,
      closeButtonStyle = _closeButtonProps$sty === void 0 ? {} : _closeButtonProps$sty,
      onCloseClick = closeButtonProps.onClick,
      otherCloseButtonProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(closeButtonProps, ["style", "onClick"]);

  var _toggleButtonProps$st = toggleButtonProps.style,
      toggleButtonStyle = _toggleButtonProps$st === void 0 ? {} : _toggleButtonProps$st,
      onToggleClick = toggleButtonProps.onClick,
      otherToggleButtonProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(toggleButtonProps, ["style", "onClick"]); // Do not render on the server


  if (!isMounted()) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Container, {
    ref: rootRef,
    className: "ReactQueryDevtools",
    "aria-label": "React Query Devtools"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_theme__WEBPACK_IMPORTED_MODULE_8__[/* ThemeProvider */ "a"], {
    theme: _theme__WEBPACK_IMPORTED_MODULE_8__[/* defaultTheme */ "b"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ReactQueryDevtoolsPanel, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    ref: panelRef,
    styleNonce: styleNonce
  }, otherPanelProps, {
    style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      position: 'fixed',
      bottom: '0',
      right: '0',
      zIndex: 99999,
      width: '100%',
      height: devtoolsHeight != null ? devtoolsHeight : 500,
      maxHeight: '90%',
      boxShadow: '0 0 20px rgba(0,0,0,.3)',
      borderTop: "1px solid " + _theme__WEBPACK_IMPORTED_MODULE_8__[/* defaultTheme */ "b"].gray,
      transformOrigin: 'top',
      // visibility will be toggled after transitions, but set initial state here
      visibility: isOpen ? 'visible' : 'hidden'
    }, panelStyle, isResizing ? {
      transition: "none"
    } : {
      transition: "all .2s ease"
    }, isResolvedOpen ? {
      opacity: 1,
      pointerEvents: 'all',
      transform: "translateY(0) scale(1)"
    } : {
      opacity: 0,
      pointerEvents: 'none',
      transform: "translateY(15px) scale(1.02)"
    }),
    isOpen: isResolvedOpen,
    setIsOpen: setIsOpen,
    handleDragStart: function handleDragStart(e) {
      return _handleDragStart(panelRef.current, e);
    }
  })), isResolvedOpen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styledComponents__WEBPACK_IMPORTED_MODULE_7__[/* Button */ "b"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    type: "button",
    "aria-controls": "ReactQueryDevtoolsPanel",
    "aria-haspopup": "true",
    "aria-expanded": "true"
  }, otherCloseButtonProps, {
    onClick: function onClick(e) {
      setIsOpen(false);
      onCloseClick && onCloseClick(e);
    },
    style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      position: 'fixed',
      zIndex: 99999,
      margin: '.5em',
      bottom: 0
    }, position === 'top-right' ? {
      right: '0'
    } : position === 'top-left' ? {
      left: '0'
    } : position === 'bottom-right' ? {
      right: '0'
    } : {
      left: '0'
    }, closeButtonStyle)
  }), "Close") : null), !isResolvedOpen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    type: "button"
  }, otherToggleButtonProps, {
    "aria-label": "Open React Query Devtools",
    "aria-controls": "ReactQueryDevtoolsPanel",
    "aria-haspopup": "true",
    "aria-expanded": "false",
    onClick: function onClick(e) {
      setIsOpen(true);
      onToggleClick && onToggleClick(e);
    },
    style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      background: 'none',
      border: 0,
      padding: 0,
      position: 'fixed',
      zIndex: 99999,
      display: 'inline-flex',
      fontSize: '1.5em',
      margin: '.5em',
      cursor: 'pointer',
      width: 'fit-content'
    }, position === 'top-right' ? {
      top: '0',
      right: '0'
    } : position === 'top-left' ? {
      top: '0',
      left: '0'
    } : position === 'bottom-right' ? {
      bottom: '0',
      right: '0'
    } : {
      bottom: '0',
      left: '0'
    }, toggleButtonStyle)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Logo__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
    "aria-hidden": true
  })) : null);
}

var getStatusRank = function getStatusRank(q) {
  return q.state.isFetching ? 0 : !q.getObserversCount() ? 3 : q.isStale() ? 2 : 1;
};

var sortFns = {
  'Status > Last Updated': function StatusLastUpdated(a, b) {
    var _sortFns$LastUpdated;

    return getStatusRank(a) === getStatusRank(b) ? (_sortFns$LastUpdated = sortFns['Last Updated']) == null ? void 0 : _sortFns$LastUpdated.call(sortFns, a, b) : getStatusRank(a) > getStatusRank(b) ? 1 : -1;
  },
  'Query Hash': function QueryHash(a, b) {
    return a.queryHash > b.queryHash ? 1 : -1;
  },
  'Last Updated': function LastUpdated(a, b) {
    return a.state.dataUpdatedAt < b.state.dataUpdatedAt ? 1 : -1;
  }
};
var ReactQueryDevtoolsPanel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function ReactQueryDevtoolsPanel(props, ref) {
  var _activeQuery$state;

  var _props$isOpen = props.isOpen,
      isOpen = _props$isOpen === void 0 ? true : _props$isOpen,
      styleNonce = props.styleNonce,
      setIsOpen = props.setIsOpen,
      handleDragStart = props.handleDragStart,
      panelProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["isOpen", "styleNonce", "setIsOpen", "handleDragStart"]);

  var queryClient = Object(react_query__WEBPACK_IMPORTED_MODULE_3__["useQueryClient"])();
  var queryCache = queryClient.getQueryCache();

  var _useLocalStorage3 = Object(_useLocalStorage__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])('reactQueryDevtoolsSortFn', Object.keys(sortFns)[0]),
      sort = _useLocalStorage3[0],
      setSort = _useLocalStorage3[1];

  var _useLocalStorage4 = Object(_useLocalStorage__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])('reactQueryDevtoolsFilter', ''),
      filter = _useLocalStorage4[0],
      setFilter = _useLocalStorage4[1];

  var _useLocalStorage5 = Object(_useLocalStorage__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])('reactQueryDevtoolsSortDesc', false),
      sortDesc = _useLocalStorage5[0],
      setSortDesc = _useLocalStorage5[1];

  var sortFn = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(function () {
    return sortFns[sort];
  }, [sort]);
  react__WEBPACK_IMPORTED_MODULE_2___default.a[isServer ? 'useEffect' : 'useLayoutEffect'](function () {
    if (!sortFn) {
      setSort(Object.keys(sortFns)[0]);
    }
  }, [setSort, sortFn]);

  var _useSafeState3 = Object(_utils__WEBPACK_IMPORTED_MODULE_6__[/* useSafeState */ "f"])(Object.values(queryCache.findAll())),
      unsortedQueries = _useSafeState3[0],
      setUnsortedQueries = _useSafeState3[1];

  var _useLocalStorage6 = Object(_useLocalStorage__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])('reactQueryDevtoolsActiveQueryHash', ''),
      activeQueryHash = _useLocalStorage6[0],
      setActiveQueryHash = _useLocalStorage6[1];

  var queries = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(function () {
    var sorted = [].concat(unsortedQueries).sort(sortFn);

    if (sortDesc) {
      sorted.reverse();
    }

    if (!filter) {
      return sorted;
    }

    return Object(match_sorter__WEBPACK_IMPORTED_MODULE_4__[/* matchSorter */ "a"])(sorted, filter, {
      keys: ['queryHash']
    }).filter(function (d) {
      return d.queryHash;
    });
  }, [sortDesc, sortFn, unsortedQueries, filter]);
  var activeQuery = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(function () {
    return queries.find(function (query) {
      return query.queryHash === activeQueryHash;
    });
  }, [activeQueryHash, queries]);
  var hasFresh = queries.filter(function (q) {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_6__[/* getQueryStatusLabel */ "c"])(q) === 'fresh';
  }).length;
  var hasFetching = queries.filter(function (q) {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_6__[/* getQueryStatusLabel */ "c"])(q) === 'fetching';
  }).length;
  var hasStale = queries.filter(function (q) {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_6__[/* getQueryStatusLabel */ "c"])(q) === 'stale';
  }).length;
  var hasInactive = queries.filter(function (q) {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_6__[/* getQueryStatusLabel */ "c"])(q) === 'inactive';
  }).length;
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    if (isOpen) {
      var unsubscribe = queryCache.subscribe(function () {
        setUnsortedQueries(Object.values(queryCache.getAll()));
      }); // re-subscribing after the panel is closed and re-opened won't trigger the callback,
      // So we'll manually populate our state

      setUnsortedQueries(Object.values(queryCache.getAll()));
      return unsubscribe;
    }

    return undefined;
  }, [isOpen, sort, sortFn, sortDesc, setUnsortedQueries, queryCache]);

  var handleRefetch = function handleRefetch() {
    var promise = activeQuery == null ? void 0 : activeQuery.fetch();
    promise == null ? void 0 : promise.catch(_core_utils__WEBPACK_IMPORTED_MODULE_11__[/* noop */ "j"]);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_theme__WEBPACK_IMPORTED_MODULE_8__[/* ThemeProvider */ "a"], {
    theme: _theme__WEBPACK_IMPORTED_MODULE_8__[/* defaultTheme */ "b"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styledComponents__WEBPACK_IMPORTED_MODULE_7__[/* Panel */ "e"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    ref: ref,
    className: "ReactQueryDevtoolsPanel",
    "aria-label": "React Query Devtools Panel",
    id: "ReactQueryDevtoolsPanel"
  }, panelProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("style", {
    nonce: styleNonce,
    dangerouslySetInnerHTML: {
      __html: "\n            .ReactQueryDevtoolsPanel * {\n              scrollbar-color: " + _theme__WEBPACK_IMPORTED_MODULE_8__[/* defaultTheme */ "b"].backgroundAlt + " " + _theme__WEBPACK_IMPORTED_MODULE_8__[/* defaultTheme */ "b"].gray + ";\n            }\n\n            .ReactQueryDevtoolsPanel *::-webkit-scrollbar, .ReactQueryDevtoolsPanel scrollbar {\n              width: 1em;\n              height: 1em;\n            }\n\n            .ReactQueryDevtoolsPanel *::-webkit-scrollbar-track, .ReactQueryDevtoolsPanel scrollbar-track {\n              background: " + _theme__WEBPACK_IMPORTED_MODULE_8__[/* defaultTheme */ "b"].backgroundAlt + ";\n            }\n\n            .ReactQueryDevtoolsPanel *::-webkit-scrollbar-thumb, .ReactQueryDevtoolsPanel scrollbar-thumb {\n              background: " + _theme__WEBPACK_IMPORTED_MODULE_8__[/* defaultTheme */ "b"].gray + ";\n              border-radius: .5em;\n              border: 3px solid " + _theme__WEBPACK_IMPORTED_MODULE_8__[/* defaultTheme */ "b"].backgroundAlt + ";\n            }\n          "
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '4px',
      marginBottom: '-4px',
      cursor: 'row-resize',
      zIndex: 100000
    },
    onMouseDown: handleDragStart
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      flex: '1 1 500px',
      minHeight: '40%',
      maxHeight: '100%',
      overflow: 'auto',
      borderRight: "1px solid " + _theme__WEBPACK_IMPORTED_MODULE_8__[/* defaultTheme */ "b"].grayAlt,
      display: isOpen ? 'flex' : 'none',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      padding: '.5em',
      background: _theme__WEBPACK_IMPORTED_MODULE_8__[/* defaultTheme */ "b"].backgroundAlt,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    type: "button",
    "aria-label": "Close React Query Devtools",
    "aria-controls": "ReactQueryDevtoolsPanel",
    "aria-haspopup": "true",
    "aria-expanded": "true",
    onClick: function onClick() {
      return setIsOpen(false);
    },
    style: {
      display: 'inline-flex',
      background: 'none',
      border: 0,
      padding: 0,
      marginRight: '.5em',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Logo__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
    "aria-hidden": true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styledComponents__WEBPACK_IMPORTED_MODULE_7__[/* QueryKeys */ "g"], {
    style: {
      marginBottom: '.5em'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styledComponents__WEBPACK_IMPORTED_MODULE_7__[/* QueryKey */ "f"], {
    style: {
      background: _theme__WEBPACK_IMPORTED_MODULE_8__[/* defaultTheme */ "b"].success,
      opacity: hasFresh ? 1 : 0.3
    }
  }, "fresh ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styledComponents__WEBPACK_IMPORTED_MODULE_7__[/* Code */ "c"], null, "(", hasFresh, ")")), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styledComponents__WEBPACK_IMPORTED_MODULE_7__[/* QueryKey */ "f"], {
    style: {
      background: _theme__WEBPACK_IMPORTED_MODULE_8__[/* defaultTheme */ "b"].active,
      opacity: hasFetching ? 1 : 0.3
    }
  }, "fetching ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styledComponents__WEBPACK_IMPORTED_MODULE_7__[/* Code */ "c"], null, "(", hasFetching, ")")), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styledComponents__WEBPACK_IMPORTED_MODULE_7__[/* QueryKey */ "f"], {
    style: {
      background: _theme__WEBPACK_IMPORTED_MODULE_8__[/* defaultTheme */ "b"].warning,
      color: 'black',
      textShadow: '0',
      opacity: hasStale ? 1 : 0.3
    }
  }, "stale ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styledComponents__WEBPACK_IMPORTED_MODULE_7__[/* Code */ "c"], null, "(", hasStale, ")")), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styledComponents__WEBPACK_IMPORTED_MODULE_7__[/* QueryKey */ "f"], {
    style: {
      background: _theme__WEBPACK_IMPORTED_MODULE_8__[/* defaultTheme */ "b"].gray,
      opacity: hasInactive ? 1 : 0.3
    }
  }, "inactive ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styledComponents__WEBPACK_IMPORTED_MODULE_7__[/* Code */ "c"], null, "(", hasInactive, ")"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styledComponents__WEBPACK_IMPORTED_MODULE_7__[/* Input */ "d"], {
    placeholder: "Filter",
    "aria-label": "Filter by queryhash",
    value: filter != null ? filter : '',
    onChange: function onChange(e) {
      return setFilter(e.target.value);
    },
    onKeyDown: function onKeyDown(e) {
      if (e.key === 'Escape') setFilter('');
    },
    style: {
      flex: '1',
      marginRight: '.5em',
      width: '100%'
    }
  }), !filter ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styledComponents__WEBPACK_IMPORTED_MODULE_7__[/* Select */ "h"], {
    "aria-label": "Sort queries",
    value: sort,
    onChange: function onChange(e) {
      return setSort(e.target.value);
    },
    style: {
      flex: '1',
      minWidth: 75,
      marginRight: '.5em'
    }
  }, Object.keys(sortFns).map(function (key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
      key: key,
      value: key
    }, "Sort by ", key);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styledComponents__WEBPACK_IMPORTED_MODULE_7__[/* Button */ "b"], {
    type: "button",
    onClick: function onClick() {
      return setSortDesc(function (old) {
        return !old;
      });
    },
    style: {
      padding: '.3em .4em'
    }
  }, sortDesc ? '⬇ Desc' : '⬆ Asc')) : null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      overflowY: 'auto',
      flex: '1'
    }
  }, queries.map(function (query, i) {
    var isDisabled = query.getObserversCount() > 0 && !query.isActive();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      key: query.queryHash || i,
      role: "button",
      "aria-label": "Open query details for " + query.queryHash,
      onClick: function onClick() {
        return setActiveQueryHash(activeQueryHash === query.queryHash ? '' : query.queryHash);
      },
      style: {
        display: 'flex',
        borderBottom: "solid 1px " + _theme__WEBPACK_IMPORTED_MODULE_8__[/* defaultTheme */ "b"].grayAlt,
        cursor: 'pointer',
        background: query === activeQuery ? 'rgba(255,255,255,.1)' : undefined
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        flex: '0 0 auto',
        width: '2em',
        height: '2em',
        background: Object(_utils__WEBPACK_IMPORTED_MODULE_6__[/* getQueryStatusColor */ "b"])(query, _theme__WEBPACK_IMPORTED_MODULE_8__[/* defaultTheme */ "b"]),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        textShadow: Object(_utils__WEBPACK_IMPORTED_MODULE_6__[/* getQueryStatusLabel */ "c"])(query) === 'stale' ? '0' : '0 0 10px black',
        color: Object(_utils__WEBPACK_IMPORTED_MODULE_6__[/* getQueryStatusLabel */ "c"])(query) === 'stale' ? 'black' : 'white'
      }
    }, query.getObserversCount()), isDisabled ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        flex: '0 0 auto',
        height: '2em',
        background: _theme__WEBPACK_IMPORTED_MODULE_8__[/* defaultTheme */ "b"].gray,
        display: 'flex',
        alignItems: 'center',
        fontWeight: 'bold',
        padding: '0 0.5em'
      }
    }, "disabled") : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styledComponents__WEBPACK_IMPORTED_MODULE_7__[/* Code */ "c"], {
      style: {
        padding: '.5em'
      }
    }, "" + query.queryHash));
  }))), activeQuery ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styledComponents__WEBPACK_IMPORTED_MODULE_7__[/* ActiveQueryPanel */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      padding: '.5em',
      background: _theme__WEBPACK_IMPORTED_MODULE_8__[/* defaultTheme */ "b"].backgroundAlt,
      position: 'sticky',
      top: 0,
      zIndex: 1
    }
  }, "Query Details"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      padding: '.5em'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      marginBottom: '.5em',
      display: 'flex',
      alignItems: 'start',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styledComponents__WEBPACK_IMPORTED_MODULE_7__[/* Code */ "c"], {
    style: {
      lineHeight: '1.8em'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("pre", {
    style: {
      margin: 0,
      padding: 0,
      overflow: 'auto'
    }
  }, JSON.stringify(activeQuery.queryKey, null, 2))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    style: {
      padding: '0.3em .6em',
      borderRadius: '0.4em',
      fontWeight: 'bold',
      textShadow: '0 2px 10px black',
      background: Object(_utils__WEBPACK_IMPORTED_MODULE_6__[/* getQueryStatusColor */ "b"])(activeQuery, _theme__WEBPACK_IMPORTED_MODULE_8__[/* defaultTheme */ "b"]),
      flexShrink: 0
    }
  }, Object(_utils__WEBPACK_IMPORTED_MODULE_6__[/* getQueryStatusLabel */ "c"])(activeQuery))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      marginBottom: '.5em',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, "Observers: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styledComponents__WEBPACK_IMPORTED_MODULE_7__[/* Code */ "c"], null, activeQuery.getObserversCount())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, "Last Updated:", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styledComponents__WEBPACK_IMPORTED_MODULE_7__[/* Code */ "c"], null, new Date(activeQuery.state.dataUpdatedAt).toLocaleTimeString()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      background: _theme__WEBPACK_IMPORTED_MODULE_8__[/* defaultTheme */ "b"].backgroundAlt,
      padding: '.5em',
      position: 'sticky',
      top: 0,
      zIndex: 1
    }
  }, "Actions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      padding: '0.5em'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styledComponents__WEBPACK_IMPORTED_MODULE_7__[/* Button */ "b"], {
    type: "button",
    onClick: handleRefetch,
    disabled: activeQuery.state.isFetching,
    style: {
      background: _theme__WEBPACK_IMPORTED_MODULE_8__[/* defaultTheme */ "b"].active
    }
  }, "Refetch"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styledComponents__WEBPACK_IMPORTED_MODULE_7__[/* Button */ "b"], {
    type: "button",
    onClick: function onClick() {
      return queryClient.invalidateQueries(activeQuery);
    },
    style: {
      background: _theme__WEBPACK_IMPORTED_MODULE_8__[/* defaultTheme */ "b"].warning,
      color: _theme__WEBPACK_IMPORTED_MODULE_8__[/* defaultTheme */ "b"].inputTextColor
    }
  }, "Invalidate"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styledComponents__WEBPACK_IMPORTED_MODULE_7__[/* Button */ "b"], {
    type: "button",
    onClick: function onClick() {
      return queryClient.resetQueries(activeQuery);
    },
    style: {
      background: _theme__WEBPACK_IMPORTED_MODULE_8__[/* defaultTheme */ "b"].gray
    }
  }, "Reset"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styledComponents__WEBPACK_IMPORTED_MODULE_7__[/* Button */ "b"], {
    type: "button",
    onClick: function onClick() {
      return queryClient.removeQueries(activeQuery);
    },
    style: {
      background: _theme__WEBPACK_IMPORTED_MODULE_8__[/* defaultTheme */ "b"].danger
    }
  }, "Remove")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      background: _theme__WEBPACK_IMPORTED_MODULE_8__[/* defaultTheme */ "b"].backgroundAlt,
      padding: '.5em',
      position: 'sticky',
      top: 0,
      zIndex: 1
    }
  }, "Data Explorer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      padding: '.5em'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Explorer__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
    label: "Data",
    value: activeQuery == null ? void 0 : (_activeQuery$state = activeQuery.state) == null ? void 0 : _activeQuery$state.data,
    defaultExpanded: {}
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      background: _theme__WEBPACK_IMPORTED_MODULE_8__[/* defaultTheme */ "b"].backgroundAlt,
      padding: '.5em',
      position: 'sticky',
      top: 0,
      zIndex: 1
    }
  }, "Query Explorer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      padding: '.5em'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Explorer__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
    label: "Query",
    value: activeQuery,
    defaultExpanded: {
      queryKey: true
    }
  }))) : null));
});

/***/ }),

/***/ "xSoD":
/*!***************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-query/es/react/utils.js ***!
  \***************************************************************************************************************/
/*! exports provided: shouldThrowError */
/*! exports used: shouldThrowError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return shouldThrowError; });
function shouldThrowError(suspense, _useErrorBoundary, params) {
  // Allow useErrorBoundary function to override throwing behavior on a per-error basis
  if (typeof _useErrorBoundary === 'function') {
    return _useErrorBoundary.apply(void 0, params);
  } // Allow useErrorBoundary to override suspense's throwing behavior


  if (typeof _useErrorBoundary === 'boolean') return _useErrorBoundary; // If suspense is enabled default to throwing errors

  return !!suspense;
}

/***/ })

}]);
//# sourceMappingURL=npm.react-query.js.map