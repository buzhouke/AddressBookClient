(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["featureRelatedFiles~main~mobile"],{

/***/ "8/2k":
/*!***************************************************************************************************************!*\
  !*** ./src/locales lazy ^\.\/.*\/.*\.json$ include: strings\.json$ exclude: en\-US\.strings namespace object ***!
  \***************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./dev/strings.json": [
		"DqxR",
		"dev-strings-json"
	],
	"./en-US/strings.json": [
		"eXG7",
		"en-US-strings-json"
	],
	"./zh-CN/strings.json": [
		"GB1s",
		"zh-CN-strings-json"
	],
	"./zh-TW/strings.json": [
		"rTTZ",
		"zh-TW-strings-json"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__.t(id, 3);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "8/2k";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "8G6N":
/*!******************************!*\
  !*** ./src/service/axios.ts ***!
  \******************************/
/*! exports provided: axiosInstance, transformResponse */
/*! exports used: axiosInstance, transformResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return axiosInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return transformResponse; });
/* harmony import */ var _addressbook_components_metaos_host__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-metaos-host */ "0acT");
/* harmony import */ var _addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @addressbook/utilities-core */ "1hmm");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "8dj6");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "ggb3");
/* harmony import */ var _common_Constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/Constants */ "fPKC");
/* harmony import */ var _common_env__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/env */ "8MrD");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../logger */ "pIRP");
/* harmony import */ var _utilities_Utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utilities/Utils */ "TktC");
/* harmony import */ var _RequestError__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./RequestError */ "MpLv");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








/**
 * check statusCode is validate (2xx)
 *
 * @param status
 * @returns
 */
const isValidateStatus = (status) => status >= 200 && status < 300;
const axiosInstance = axios__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].create({
    validateStatus: isValidateStatus,
    paramsSerializer: {
        serialize: params => new URLSearchParams(Object.entries(params).filter((v) => v[1] !== undefined)).toString(),
    },
});
axiosInstance.interceptors.request.use(transformRequest);
axiosInstance.interceptors.response.use(transformResponse, transformError);
function transformRequest(config) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        if (!config.headers) {
            config.headers = new axios__WEBPACK_IMPORTED_MODULE_3__[/* AxiosHeaders */ "b"]({
                [_common_Constants__WEBPACK_IMPORTED_MODULE_4__[/* HEADER_CLIENT_REQUEST_ID */ "e"]]: Object(_addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_1__[/* uuid */ "v"])(),
            });
        }
        else if (!config.headers[_common_Constants__WEBPACK_IMPORTED_MODULE_4__[/* HEADER_CLIENT_REQUEST_ID */ "e"]]) {
            config.headers[_common_Constants__WEBPACK_IMPORTED_MODULE_4__[/* HEADER_CLIENT_REQUEST_ID */ "e"]] = Object(_addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_1__[/* uuid */ "v"])();
        }
        _logger__WEBPACK_IMPORTED_MODULE_6__[/* logger */ "f"].logTraceDebug(_logger__WEBPACK_IMPORTED_MODULE_6__[/* LogCategory */ "a"].APIRequest, `Calling getAuthToken for ${_common_env__WEBPACK_IMPORTED_MODULE_5__[/* ADDRESSBOOK_APP_RESOURCE_URL */ "a"]}`);
        config._getTeamsContextTime = performance.now();
        const context = yield Object(_addressbook_components_metaos_host__WEBPACK_IMPORTED_MODULE_0__[/* getTeamsContext */ "h"])();
        config._getAuthTokenTime = performance.now();
        config.headers.authorization = `Bearer ${yield Object(_addressbook_components_metaos_host__WEBPACK_IMPORTED_MODULE_0__[/* getAuthToken */ "g"])(_common_env__WEBPACK_IMPORTED_MODULE_5__[/* ADDRESSBOOK_APP_RESOURCE_URL */ "a"])}`;
        config.headers[_common_Constants__WEBPACK_IMPORTED_MODULE_4__[/* HEADER_ROUTE_KEY */ "g"]] = (_b = (_a = context.user) === null || _a === void 0 ? void 0 : _a.tenant) === null || _b === void 0 ? void 0 : _b.id;
        config._startRequestTime = performance.now();
        return config;
    });
}
function getRequestId(config) {
    var _a;
    return (_a = config === null || config === void 0 ? void 0 : config.headers) === null || _a === void 0 ? void 0 : _a[_common_Constants__WEBPACK_IMPORTED_MODULE_4__[/* HEADER_CLIENT_REQUEST_ID */ "e"]];
}
function getHttpInfo(config, responseHeaders) {
    const url = config.url || '';
    const getTeamsContextTime = (config === null || config === void 0 ? void 0 : config._getTeamsContextTime) || performance.now();
    const getAuthTokenTime = (config === null || config === void 0 ? void 0 : config._getAuthTokenTime) || performance.now();
    const startRequestTime = (config === null || config === void 0 ? void 0 : config._startRequestTime) || performance.now();
    const getTeamsContextLatency = getAuthTokenTime - getTeamsContextTime;
    const getAuthTokenLatency = startRequestTime - getAuthTokenTime;
    const latency = performance.now() - startRequestTime;
    const clientRequestId = getRequestId(config);
    const correlationId = responseHeaders === null || responseHeaders === void 0 ? void 0 : responseHeaders[_common_Constants__WEBPACK_IMPORTED_MODULE_4__[/* HEADER_RESPONSE_CORRELATION_ID */ "f"]];
    const edgeRef = Object(_utilities_Utils__WEBPACK_IMPORTED_MODULE_7__[/* tryParseAfdRefFromHeaders */ "b"])(responseHeaders);
    return {
        url,
        getTeamsContextLatency,
        getAuthTokenLatency,
        latency,
        clientRequestId,
        correlationId,
        apiName: new URL(url, config.baseURL || location.origin).pathname,
        requestMethod: config.method || 'GET',
        edgeRef,
    };
}
function transformResponse(response) {
    var _a;
    const { status = 0, config } = response;
    const httpInfo = getHttpInfo(config, response.headers);
    if (!isValidateStatus(status)) {
        // log http exception
        _logger__WEBPACK_IMPORTED_MODULE_6__[/* logger */ "f"].logTraceHttpException(httpInfo.apiName || '', ((_a = response.data) === null || _a === void 0 ? void 0 : _a.Message) || response.statusText, status);
    }
    else {
        _logger__WEBPACK_IMPORTED_MODULE_6__[/* logger */ "f"].logTraceDebug(_logger__WEBPACK_IMPORTED_MODULE_6__[/* LogCategory */ "a"].APIRequest, `success for ${response.config.url}`);
    }
    const httpRequest = Object.assign(Object.assign({}, httpInfo), { responseCode: status, responseText: response.statusText });
    _logger__WEBPACK_IMPORTED_MODULE_6__[/* logger */ "f"].logHttp(httpRequest);
    return response.data;
}
function transformError(error) {
    var _a, _b, _c, _d;
    return __awaiter(this, void 0, void 0, function* () {
        if ((error === null || error === void 0 ? void 0 : error.code) === axios__WEBPACK_IMPORTED_MODULE_3__[/* AxiosError */ "a"].ERR_NETWORK) {
            _logger__WEBPACK_IMPORTED_MODULE_6__[/* logger */ "f"].logTraceError(_logger__WEBPACK_IMPORTED_MODULE_6__[/* LogCategory */ "a"].NetworkError, `NetworkError ${(_a = error === null || error === void 0 ? void 0 : error.config) === null || _a === void 0 ? void 0 : _a.url} ${error.message}`);
            if (error.config) {
                _logger__WEBPACK_IMPORTED_MODULE_6__[/* logger */ "f"].logHttp(getHttpInfo(error.config));
            }
            throw new _RequestError__WEBPACK_IMPORTED_MODULE_8__[/* RequestError */ "b"](error, _RequestError__WEBPACK_IMPORTED_MODULE_8__[/* ClientErrorCodes */ "a"].network, getRequestId(error.config));
        }
        else if (error === null || error === void 0 ? void 0 : error.response) {
            // get response from server will log a http error
            const response = error.response;
            if ((response === null || response === void 0 ? void 0 : response.data) instanceof Blob && (response === null || response === void 0 ? void 0 : response.data.type) === 'application/json') {
                try {
                    const errorString = JSON.parse(yield (response === null || response === void 0 ? void 0 : response.data.text()));
                    response.data = errorString;
                }
                catch (e) {
                    _logger__WEBPACK_IMPORTED_MODULE_6__[/* logger */ "f"].logTraceError(_logger__WEBPACK_IMPORTED_MODULE_6__[/* LogCategory */ "a"].APIRequest, `Invalid JSON response from Blob: ${response === null || response === void 0 ? void 0 : response.data}`);
                }
            }
            transformResponse(response);
            throw new _RequestError__WEBPACK_IMPORTED_MODULE_8__[/* RequestError */ "b"](response, undefined, getRequestId(error.config));
        }
        else if (axios__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].isCancel(error)) {
            _logger__WEBPACK_IMPORTED_MODULE_6__[/* logger */ "f"].logTraceInfo(_logger__WEBPACK_IMPORTED_MODULE_6__[/* LogCategory */ "a"].APIRequest, `Cancel ${(_b = error === null || error === void 0 ? void 0 : error.config) === null || _b === void 0 ? void 0 : _b.url}`);
        }
        else if (error === null || error === void 0 ? void 0 : error.config) {
            // no response
            // usually network connection error
            const logCategory = getAxiosErrorLogCategory(error === null || error === void 0 ? void 0 : error.code);
            _logger__WEBPACK_IMPORTED_MODULE_6__[/* logger */ "f"].logTraceError(logCategory, `NetworkError ${(_c = error === null || error === void 0 ? void 0 : error.config) === null || _c === void 0 ? void 0 : _c.url} ${error.message}`);
            _logger__WEBPACK_IMPORTED_MODULE_6__[/* logger */ "f"].logHttp(getHttpInfo(error.config));
            throw new _RequestError__WEBPACK_IMPORTED_MODULE_8__[/* RequestError */ "b"](error, _RequestError__WEBPACK_IMPORTED_MODULE_8__[/* ClientErrorCodes */ "a"].network, getRequestId(error.config));
        }
        else if (error instanceof Error) {
            const isTeamsSDKError = error instanceof _addressbook_components_metaos_host__WEBPACK_IMPORTED_MODULE_0__[/* TeamsError */ "b"];
            // runtime error
            _logger__WEBPACK_IMPORTED_MODULE_6__[/* logger */ "f"].logTraceException(isTeamsSDKError ? _logger__WEBPACK_IMPORTED_MODULE_6__[/* LogCategory */ "a"].TeamsSDKError : _logger__WEBPACK_IMPORTED_MODULE_6__[/* LogCategory */ "a"].RuntimeError, {
                error,
                message: `${error.name} ${(_d = error === null || error === void 0 ? void 0 : error.config) === null || _d === void 0 ? void 0 : _d.url}`,
            });
            throw new _RequestError__WEBPACK_IMPORTED_MODULE_8__[/* RequestError */ "b"](error, isTeamsSDKError ? _RequestError__WEBPACK_IMPORTED_MODULE_8__[/* ClientErrorCodes */ "a"].teamsSDK : _RequestError__WEBPACK_IMPORTED_MODULE_8__[/* ClientErrorCodes */ "a"].runtime);
        }
        else {
            _logger__WEBPACK_IMPORTED_MODULE_6__[/* logger */ "f"].logTraceError(_logger__WEBPACK_IMPORTED_MODULE_6__[/* LogCategory */ "a"].UnknownRequestError, `UnknownError ${error}`);
        }
        throw new _RequestError__WEBPACK_IMPORTED_MODULE_8__[/* RequestError */ "b"](error);
    });
}
// https://github.com/axios/axios/blob/main/lib/adapters/xhr.js
function getAxiosErrorLogCategory(errorCode) {
    switch (errorCode) {
        case axios__WEBPACK_IMPORTED_MODULE_3__[/* AxiosError */ "a"].ERR_NETWORK:
            return _logger__WEBPACK_IMPORTED_MODULE_6__[/* LogCategory */ "a"].NetworkError;
        case axios__WEBPACK_IMPORTED_MODULE_3__[/* AxiosError */ "a"].ETIMEDOUT:
            return _logger__WEBPACK_IMPORTED_MODULE_6__[/* LogCategory */ "a"].TimeoutExceeded;
        case axios__WEBPACK_IMPORTED_MODULE_3__[/* AxiosError */ "a"].ECONNABORTED:
            return _logger__WEBPACK_IMPORTED_MODULE_6__[/* LogCategory */ "a"].RequestAborted;
        default:
            return _logger__WEBPACK_IMPORTED_MODULE_6__[/* LogCategory */ "a"].APIRequest;
    }
}


/***/ }),

/***/ "FMwJ":
/*!***********************************!*\
  !*** ./src/service/tokenCache.ts ***!
  \***********************************/
/*! exports provided: getResourceToken */
/*! exports used: getResourceToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getResourceToken; });
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ "k2tF");
/* harmony import */ var _GlobalServiceClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GlobalServiceClient */ "b6hu");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


// const msal = require('@azure/msal-node');
const tokenCache = new Map();
/**
 * find page query cache.
 *
 * @param resourceType resource type
 * @returns return the access token for target resource
 */
function getResourceToken(resourceType, resourceUrl) {
    return __awaiter(this, void 0, void 0, function* () {
        const cacheKey = getCacheKey(resourceType, resourceUrl);
        let getTokenPromise = tokenCache.get(cacheKey);
        if (getTokenPromise) {
            const cachedToken = yield getToken(getTokenPromise, cacheKey);
            if (cachedToken && new Date(cachedToken.expiresOn) > new Date()) {
                return cachedToken.token;
            }
        }
        getTokenPromise = _GlobalServiceClient__WEBPACK_IMPORTED_MODULE_1__[/* SERVICE_CLIENT */ "a"].tokenExchangeVersion_Exchange({
            input: { ResourceType: resourceType, ResourceUrl: resourceUrl },
        });
        tokenCache.set(cacheKey, getTokenPromise);
        const accessToken = yield getToken(getTokenPromise, cacheKey);
        const decodedToken = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(accessToken.token);
        // console.log('decodedToken:', decodedToken);
        // const scopeList = decodedToken?.scp?.split(' ') ?? [];
        // if (!checkUserRequiredConsent(scopeList)) {
        //     console.log('need consent');
        //     const tenantId = decodedToken?.tid;
        //     const consentUrl = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/authorize?client_id=92b01672-d7de-4a9e-9775-1289109e3222&response_type=code&scope=.default&response_mode=query&prompt=consent`;
        //     const width = 600;
        //     const height = 600;
        //     const top = window.innerHeight / 2 - height / 2 + window.screenY;
        //     const left = window.innerWidth / 2 - width / 2 + window.screenX;
        //     window.open(consentUrl, 'consentPopup', `width=${width},height=${height},top=${top},left=${left}`);
        // }
        return accessToken.token;
    });
}
const checkUserRequiredConsent = (userScopeList) => {
    return userRequiredScopeList.every(scope => userScopeList.includes(scope));
};
const checkAdminRequiredScopes = (userScopeList) => {
    // 使用 every() 检查是否包含所有需要的权限
    return adminRequiredScopeList.every(scope => userScopeList.includes(scope));
};
const userRequiredScopeList = ['email', 'profile', 'openid', 'offline_access', 'Presence.Read.All'];
const adminRequiredScopeList = ['User.ReadWrite.All', 'Group.ReadWrite.All', 'GroupMember.ReadWrite.All'];
function getToken(getTokenPromise, cacheKey) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield getTokenPromise;
        }
        catch (error) {
            tokenCache.delete(cacheKey);
            return Promise.reject(error);
        }
    });
}
function getCacheKey(resourceType, resourceUrl) {
    return `${resourceType}${resourceUrl ? `_${resourceUrl}` : ''}`;
}


/***/ }),

/***/ "KMKo":
/*!***********************************!*\
  !*** ./src/service/queryCache.ts ***!
  \***********************************/
/*! exports provided: updateReactPageQueryCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export updateReactPageQueryCache */
/* harmony import */ var _service_queryClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/queryClient */ "ggBz");

/**
 * update page query cache.
 *
 * @param queryClient query client
 * @param funcs paged SERVICE_CLIENT.method array - service client API function @see SERVICE_CLIENT
 * @param id id to search, if undefined return the first query cache
 * @param update cache update function
 */
function updateReactPageQueryCache(funcs, id, update, queryClient = _service_queryClient__WEBPACK_IMPORTED_MODULE_0__[/* queryClient */ "b"]) {
    var _a, _b;
    const funcNames = funcs.map(f => f.name);
    const dataList = queryClient.getQueriesData({
        predicate: query => funcNames.some(k => query.queryKey.includes(k)),
    });
    for (const queryData of dataList.reverse()) {
        if ((_a = queryData[1]) === null || _a === void 0 ? void 0 : _a.pages) {
            for (const [pageIndex, page] of queryData[1].pages.entries()) {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                const itemIndex = (_b = page.results) === null || _b === void 0 ? void 0 : _b.findIndex(i => (i === null || i === void 0 ? void 0 : i.id) === id);
                if (itemIndex >= 0) {
                    const [key, data] = queryData;
                    const items = data.pages[pageIndex].results;
                    const newItem = update(items[itemIndex]);
                    items.splice(itemIndex, 1, newItem);
                    queryClient.setQueryData(key, Object.assign({}, data));
                }
            }
        }
    }
}


/***/ }),

/***/ "MpLv":
/*!*************************************!*\
  !*** ./src/service/RequestError.ts ***!
  \*************************************/
/*! exports provided: CLIENT_ERROR_PRIX, ClientErrorCodes, ErrorCategory, RequestError */
/*! exports used: ClientErrorCodes, RequestError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CLIENT_ERROR_PRIX */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientErrorCodes; });
/* unused harmony export ErrorCategory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RequestError; });
const CLIENT_ERROR_PRIX = 'C_ERR_';
/**
 * all code starts with `C_ERR` @see CLIENT_ERROR_PRIX
 * meaning `Client defined ERRor `
 */
var ClientErrorCodes;
(function (ClientErrorCodes) {
    ClientErrorCodes["unknown"] = "C_ERR_UNKNOWN";
    /**
     * uncatched server down exception, user can try later
     */
    ClientErrorCodes["unknownServerInternal"] = "C_ERR_UNKNOWN_SERVER_INTERNAL";
    /**
     * uncatched Error for paths or AFD routing
     */
    ClientErrorCodes["unknownServerRequest"] = "C_ERR_UNKNOWN_SERVER_REQUEST";
    /**
     * uncatched
     */
    ClientErrorCodes["unknownRuntime"] = "C_ERR_UNKNOWN_RUNTIME";
    /**
     * Network Connection Error
     */
    ClientErrorCodes["network"] = "C_ERR_NETWORK";
    /**
     * Teams SDK Errors
     */
    ClientErrorCodes["teamsSDK"] = "C_ERR_TEAMS_SDK";
    /**
     * JS Runtime error
     */
    ClientErrorCodes["runtime"] = "C_ERR_RUNTIME";
})(ClientErrorCodes || (ClientErrorCodes = {}));
var ErrorCategory;
(function (ErrorCategory) {
})(ErrorCategory || (ErrorCategory = {}));
/**
 * RequstError
 * - parse normal server error body {Code:string,Message:string}
 * - parse unknown server error
 * - warpper common error
 */
class RequestError extends Error {
    constructor(res, code, requestId) {
        var _a, _b, _c;
        super();
        this.name = 'RequestError';
        /**
         * response headers
         */
        this.headers = {};
        this.requestId = requestId;
        if (res instanceof Error) {
            this.code = code || ClientErrorCodes.unknown;
            this.message = `Request Erorr: ${res.message}`;
            this.isRetriable = this.code !== ClientErrorCodes.runtime && this.code !== ClientErrorCodes.unknownRuntime;
            this.stack = res.stack;
        }
        else if (res.status) {
            // AxiosResponse
            const data = res.data;
            if (data === null || data === void 0 ? void 0 : data.Code) {
                // Server Cached error
                this.code = data.Code;
            }
            else if (res.status >= 500) {
                this.code = ClientErrorCodes.unknownServerInternal;
            }
            else if (res.status >= 400) {
                this.code = ClientErrorCodes.unknownServerRequest;
            }
            else {
                this.code = ClientErrorCodes.unknownServerRequest;
            }
            this.message =
                typeof data === 'string'
                    ? data
                    : (data === null || data === void 0 ? void 0 : data.Message) || res.statusText || 'An unexpected server error occurred';
            this.status = res.status;
            this.headers = res.headers;
            this.response = data;
            // isRetriable in response body first, otherwise using status code
            this.isRetriable = (_a = data === null || data === void 0 ? void 0 : data.IsRetriable) !== null && _a !== void 0 ? _a : res.status >= 500;
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            this.additionalErrorMessage = (_b = data === null || data === void 0 ? void 0 : data.AdditionalMessage) === null || _b === void 0 ? void 0 : _b.map((item) => {
                return convertAdditionMessage(item);
            });
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            this.detailedErrors = (_c = data === null || data === void 0 ? void 0 : data.DetailedErrors) === null || _c === void 0 ? void 0 : _c.map((item) => {
                return {
                    code: item.Code,
                    message: item.Message,
                    isRetriable: item.IsRetriable,
                    additionalErrorMessage: convertAdditionMessage(item.AdditionalMessage),
                };
            });
        }
        else {
            // others data
            this.code = code || ClientErrorCodes.unknown;
            this.message = `${(res === null || res === void 0 ? void 0 : res.message) || res}` || 'An unexpected server error occurred';
            this.isRetriable = true;
        }
    }
}
function convertAdditionMessage(additionalMessage) {
    return {
        userNames: additionalMessage.UserNames,
        userIds: additionalMessage.UserIds,
        entityNames: additionalMessage.EntityNames,
        entityIds: additionalMessage.EntityIds,
        helpLink: additionalMessage.HelpLink,
    };
}


/***/ }),

/***/ "YCKj":
/*!******************************!*\
  !*** ./src/service/index.ts ***!
  \******************************/
/*! exports provided: axiosInstance, transformResponse, graphServiceClient, ReportServiceClient, DirectoryObjectType, ExpandValue, UserType, ResourceType, ServiceException, SERVICE_CLIENT, updateReactPageQueryCache, queryClient, clearQueryClientPersistor, CLIENT_ERROR_PRIX, ClientErrorCodes, ErrorCategory, RequestError, getResourceToken */
/*! exports used: DirectoryObjectType, SERVICE_CLIENT, clearQueryClientPersistor, graphServiceClient, queryClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./axios */ "8G6N");
/* harmony import */ var _external__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./external */ "k/S9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _external__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _gen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gen */ "kUcb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _gen__WEBPACK_IMPORTED_MODULE_2__["DirectoryObjectType"]; });

/* harmony import */ var _GlobalServiceClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GlobalServiceClient */ "b6hu");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _GlobalServiceClient__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony import */ var _queryCache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./queryCache */ "KMKo");
/* harmony import */ var _queryClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./queryClient */ "ggBz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _queryClient__WEBPACK_IMPORTED_MODULE_5__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _queryClient__WEBPACK_IMPORTED_MODULE_5__["b"]; });

/* harmony import */ var _RequestError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RequestError */ "MpLv");
/* harmony import */ var _tokenCache__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tokenCache */ "FMwJ");










/***/ }),

/***/ "b6hu":
/*!********************************************!*\
  !*** ./src/service/GlobalServiceClient.ts ***!
  \********************************************/
/*! exports provided: SERVICE_CLIENT */
/*! exports used: SERVICE_CLIENT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SERVICE_CLIENT; });
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./axios */ "8G6N");
/* harmony import */ var _gen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gen */ "kUcb");


/**
 * Clients For all REST API Call
 *
 * @ref ServiceClientClasses
 */
const SERVICE_CLIENT = {};
Object.entries(_gen__WEBPACK_IMPORTED_MODULE_1__)
    .filter(([key]) => key.endsWith('ServiceClient'))
    .forEach(([_, ClientClass]) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const client = new ClientClass('', _axios__WEBPACK_IMPORTED_MODULE_0__[/* axiosInstance */ "a"]);
    Object.getOwnPropertyNames(ClientClass.prototype).forEach((funcName) => {
        if (funcName !== 'constructor') {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            SERVICE_CLIENT[funcName] = client[funcName].bind(client);
        }
    });
});


/***/ }),

/***/ "d8l+":
/*!************************************************!*\
  !*** ./src/service/gen/reportServiceClient.ts ***!
  \************************************************/
/*! exports provided: ReportServiceClient, DirectoryObjectType, ExpandValue, UserType, ResourceType, ServiceException */
/*! exports used: DirectoryObjectType, ExpandValue, ReportServiceClient, ResourceType, ServiceException, UserType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ReportServiceClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectoryObjectType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ExpandValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return UserType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ResourceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ServiceException; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "8dj6");
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.20.0.0 (NJsonSchema v10.9.0.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

// import { UserView } from '../query';
class ReportServiceClient {
    constructor(baseUrl, instance) {
        this.jsonParseReviver = undefined;
        this.instance = instance ? instance : axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].create();
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : '';
    }
    fetchGetAllUserMembersByDepartment({ departmentId, isRootDepartment, top, skipToken, }, signal) {
        let url_ = 'https://hierarchicaladdressbook20241114184550.azurewebsites.net/api/Department/GetAllUserMembers';
        const params = {
            Top: top,
            SkipToken: skipToken,
            isRootDepartment,
            departmentId,
        };
        let options_ = {
            method: 'GET',
            url: url_,
            params,
            headers: {
                Accept: 'application/json',
            },
            signal,
        };
        return this.instance.request(options_);
    }
    fetchGetDirectUserMembersByDepartment({ departmentId, isRootDepartment, top, skipToken, }, signal) {
        let url_ = 'https://hierarchicaladdressbook20241114184550.azurewebsites.net/api/Department/GetUserMembersNotAssignedToAnySubDepartments';
        const params = {
            Top: top,
            SkipToken: skipToken,
            IsRootDepartment: isRootDepartment,
            departmentId,
        };
        let options_ = {
            method: 'GET',
            url: url_,
            params,
            headers: {
                Accept: 'application/json',
            },
            signal,
        };
        return this.instance.request(options_);
    }
    fetchSearchUser({ userDisplayName, top, skipToken, }, signal) {
        let url_ = 'https://hierarchicaladdressbook20241114184550.azurewebsites.net/api/User/SearchUsers';
        const params = {
            Top: top,
            SkipToken: skipToken,
            userDisplayName,
        };
        let options_ = {
            method: 'GET',
            url: url_,
            params,
            headers: {
                Accept: 'application/json',
            },
            signal,
        };
        return this.instance.request(options_);
    }
    /**
     * Exchange token for specific resource
     * @param input The input.
     * @return The output AccessToken.
     */
    tokenExchangeVersion_Exchange({ input }, signal) {
        let url_ = 'https://hierarchicaladdressbook20241114184550.azurewebsites.net/api/TokenExchange';
        const params = {};
        const content_ = JSON.stringify(input);
        let options_ = {
            data: content_,
            method: 'POST',
            url: url_,
            params,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            signal,
        };
        return this.instance.request(options_);
    }
    /**
     * @return The output DepartmentView.
     */
    fetchDepartmentNav({}, signal) {
        let url_ = 'https://hierarchicaladdressbook20241114184550.azurewebsites.net/api/Department/GetAllDepartments';
        const params = {};
        let options_ = {
            method: 'Get',
            url: url_,
            params,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            signal,
        };
        return this.instance.request(options_);
    }
}
/** The enum definition of DirectoryObject's type. There are many object types in AAD world, in our system, we only care about User and Group.            Reference: https://docs.microsoft.com/en-us/graph/api/resources/directoryobject?view=graph-rest-1.0. */
var DirectoryObjectType;
(function (DirectoryObjectType) {
    DirectoryObjectType[DirectoryObjectType["User"] = 0] = "User";
    DirectoryObjectType[DirectoryObjectType["Group"] = 1] = "Group";
    DirectoryObjectType[DirectoryObjectType["TeamworkTag"] = 2] = "TeamworkTag";
})(DirectoryObjectType || (DirectoryObjectType = {}));
/** expand value for GetTeamTagDetailController. */
var ExpandValue;
(function (ExpandValue) {
    ExpandValue[ExpandValue["Members"] = 1] = "Members";
    ExpandValue[ExpandValue["MembersWithPhoto"] = 3] = "MembersWithPhoto";
})(ExpandValue || (ExpandValue = {}));
var UserType;
(function (UserType) {
    UserType[UserType["Member"] = 0] = "Member";
    UserType[UserType["Guest"] = 1] = "Guest";
    UserType[UserType["Unknown"] = 2] = "Unknown";
})(UserType || (UserType = {}));
// export interface TokenExchangeInput {
//     resourceType: ResourceType;
//     resourceUrl: string;
// }
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["Graph"] = 0] = "Graph";
    ResourceType[ResourceType["WorkHub"] = 1] = "WorkHub";
})(ResourceType || (ResourceType = {}));
class ServiceException extends Error {
    constructor(message, status, response, headers, result) {
        super();
        this.isServiceException = true;
        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }
    static isServiceException(obj) {
        return obj.isServiceException === true;
    }
}
function throwException(message, status, response, headers, result) {
    if (result !== null && result !== undefined)
        throw result;
    else
        throw new ServiceException(message, status, response, headers, null);
}
function isAxiosError(obj) {
    return obj && obj.isAxiosError === true;
}


/***/ }),

/***/ "fOXQ":
/*!***********************************!*\
  !*** ./src/locales/localeKeys.ts ***!
  \***********************************/
/*! exports provided: Strings */
/*! exports used: Strings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Strings; });
/**
 * NOTE: THIS IS A GENERATED FILE. PLEASE DO NOT EDIT !!
 *
 * Interface for the strings in locale file for type safety.
 * You can generate this file with "yarn scripts localization"
 */
/**
 * all keys for translation
 */
var Strings;
(function (Strings) {
    /**
     * @description {MaxLength=30} the short App name displayed in Teams with logo
     * @default "Updates"
     * @argument ppe : "Updates (Dogfood)"
     * @argument int : "Updates (Int)"
     * @argument dev : "Updates (Dev)"
     */
    Strings["appName"] = "appName";
    /**
     *
     * @default ""
     * @argument Review : "Visit this tab to view update progress and specific update statistics."
     * @argument Submit : "Visit this tab to submit new updates or view updates you've submitted."
     * @argument ReportLiked : "Hold to view who liked this update"
     */
    Strings["simpleBubbleText"] = "simpleBubbleText";
    /**
     *
     * @default ""
     * @argument RequestUpdate : "Request an update"
     * @argument WriteUpdate : "Submit your first update"
     */
    Strings["imageBubbleHead"] = "imageBubbleHead";
    /**
     *
     * @default ""
     * @argument RequestUpdate : "Ask your team members to update you on their work by creating a request."
     * @argument WriteUpdate : "Choose a template to submit your update"
     */
    Strings["imageBubbleText"] = "imageBubbleText";
    /**
     * @description Just keep it empty. {Locked}
     * @default ""
     * @argument Review1 : "Scheduled requests"
     * @argument Review2 : "General requests"
     * @argument Review3 : "Your received updates"
     * @argument Submit1 : "Submit an update"
     * @argument Submit2 : "Scheduled requests"
     * @argument Submit3 : "General requests"
     * @argument Submit4 : "Your submitted updates"
     */
    Strings["userGuidesBubbleHead"] = "userGuidesBubbleHead";
    /**
     *
     * @default ""
     * @argument Review1 : "View and track statistics of update requests with due date to keep your team on schedule."
     * @argument Review2 : "View and track statistics of update requests without due date to get the latest status."
     * @argument Review3 : "Review updates you've received from team members here."
     * @argument Submit1 : "Choose a template to quickly submit an update to your team members."
     * @argument Submit2 : "These update requests have due dates and need to be submitted by the assigned date and time."
     * @argument Submit3 : "These updates don't have due dates and can be submitted at any time."
     * @argument Submit4 : "View the updates you submit here."
     * @argument TaskModuleHome1 : "Choose a template to quickly submit an update to your team members."
     * @argument TaskModuleHome2 : "These updates don't have due dates and can be completed at any time."
     * @argument TaskModuleHome3 : "These updates have due dates and need to be completed by the assigned date and time."
     */
    Strings["userGuidesBubbleText"] = "userGuidesBubbleText";
    /**
     *
     * @default ""
     * @argument Review : "Got it"
     * @argument Submit : "Got it"
     * @argument TaskModuleHome : "Got it"
     */
    Strings["userGuidesBubbleButtonText"] = "userGuidesBubbleButtonText";
    /**
     *
     * @default ""
     * @argument 1 : "Updates in Microsoft Teams makes it easy for you to request, submit, and review updates."
     * @argument 2 : "Save time and energy by submitting and requesting updates with your team."
     * @argument 3 : "Track and review submitted updates all in one place."
     * @argument 4 : "Start with a template to quickly submit and request updates."
     */
    Strings["onboardingIntroductionText"] = "onboardingIntroductionText";
    /**
     * @description Text for action button click to return to the previous slide
     * @default "Back"
     */
    Strings["onboardingBackButtonText"] = "onboardingBackButtonText";
    /**
     * @description Text for action button click to return to the next slide
     * @default "Next"
     */
    Strings["onboardingNextButtonText"] = "onboardingNextButtonText";
    /**
     * @description ConfirmButton text of the last slide in onboarding introduction dialog
     * @default "Begin your journey"
     */
    Strings["onboardingConfirmButtonText"] = "onboardingConfirmButtonText";
    /**
     *
     * @default ""
     * @argument Write : "Submit an update"
     * @argument Request : "Request an update"
     */
    Strings["onboardingEntryCardHead"] = "onboardingEntryCardHead";
    /**
     *
     * @default ""
     * @argument Write : "Share new progress on your work by submitting a quick update to your team."
     * @argument Request : "Ask team members to provide updates on their progress such as weekly and monthly updates."
     */
    Strings["onboardingEntryCardText"] = "onboardingEntryCardText";
    /**
     *
     * @default ""
     * @argument Write : "Submit an update"
     * @argument Request : "Request an update"
     */
    Strings["onboardingEntryCardButton"] = "onboardingEntryCardButton";
    /**
     * @description Header of onboarding entry dialog
     * @default "Welcome to Updates"
     */
    Strings["onboardingEntryHead"] = "onboardingEntryHead";
    /**
     * @description Skip button text of onboarding entry dialog
     * @default "Skip intro"
     */
    Strings["onboardingEntrySkipButtonText"] = "onboardingEntrySkipButtonText";
    /**
     *
     * @default ""
     * @argument Write : "Share what's new with your team"
     */
    Strings["onboardingEntryText"] = "onboardingEntryText";
    /**
     * @description Text for apply button (an action to apply the changes)
     * @default "Apply"
     */
    Strings["buttonTextApply"] = "buttonTextApply";
    /**
     * @description Text for back button (an action to navigate back)
     * @default "Back"
     */
    Strings["buttonTextBack"] = "buttonTextBack";
    /**
     * @description Text for cancel button (an action to cancel)
     * @default "Cancel"
     */
    Strings["buttonTextCancel"] = "buttonTextCancel";
    /**
     * @description Text for clear button (an action to clear the content)
     * @default "Clear"
     */
    Strings["buttonTextClear"] = "buttonTextClear";
    /**
     * @description Text for close button (an action to close the dialog)
     * @default "Close"
     */
    Strings["buttonTextClose"] = "buttonTextClose";
    /**
     * @description Text for confirm button (an action to confirm)
     * @default "Confirm"
     */
    Strings["buttonTextConfirm"] = "buttonTextConfirm";
    /**
     * @description Text for copy button (an action to copy the content)
     * @default "Copy"
     */
    Strings["buttonTextCopy"] = "buttonTextCopy";
    /**
     * @description Text for customize button (an action to customize the settings)
     * @default "Customize"
     */
    Strings["buttonTextCustomize"] = "buttonTextCustomize";
    /**
     * @description Text for delete button (an action to delete an item)
     * @default "Delete"
     */
    Strings["buttonTextDelete"] = "buttonTextDelete";
    /**
     * @description Button text for disable button (an action to disable an item)
     * @default "Disable"
     */
    Strings["buttonTextDisable"] = "buttonTextDisable";
    /**
     * @description Text for discard button (an action to discard the changes)
     * @default "Discard"
     */
    Strings["buttonTextDiscard"] = "buttonTextDiscard";
    /**
     * @description Text for done button (an action to complete the last step)
     * @default "Done"
     */
    Strings["buttonTextDone"] = "buttonTextDone";
    /**
     *
     * @default "Duplicate"
     */
    Strings["buttonTextDuplicate"] = "buttonTextDuplicate";
    /**
     * @description Text for duplicate button (an action to duplicate an item)
     * @default undefined
     */
    Strings["duplicateLabel"] = "duplicateLabel";
    /**
     * @description Text for edit button (an action to edit an update or something)
     * @default "Edit"
     */
    Strings["buttonTextEdit"] = "buttonTextEdit";
    /**
     * @description Text for edit button (an action to edit an update or something) with label
     * @default "Edit {{label}} \"{{value}}\""
     */
    Strings["buttonTextEditWithLabel"] = "buttonTextEditWithLabel";
    /**
     * @description Text for enable button (an action to enable an item)
     * @default "Enable"
     */
    Strings["buttonTextEnable"] = "buttonTextEnable";
    /**
     * @description Text for export button (an action to export data)
     * @default "Export"
     */
    Strings["buttonTextExport"] = "buttonTextExport";
    /**
     * @description Text for go to homepage button (an action to navigate to homepage)
     * @default "Go to homepage"
     */
    Strings["buttonTextGoToHomepage"] = "buttonTextGoToHomepage";
    /**
     * @description Text for import button (an action to import data)
     * @default "Import"
     */
    Strings["buttonTextImport"] = "buttonTextImport";
    /**
     * @description Text for keep both button (an action to keep both conflicted files)
     * @default "Keep both"
     */
    Strings["buttonTextKeepBoth"] = "buttonTextKeepBoth";
    /**
     * @description Text for keep editing button (an action to keep the editing changes)
     * @default "Keep editing"
     */
    Strings["buttonTextKeepEditing"] = "buttonTextKeepEditing";
    /**
     * @description Text for more button (an action to show more options)
     * @default "More"
     */
    Strings["buttonTextMore"] = "buttonTextMore";
    /**
     * @description Text for OK button
     * @default "OK"
     */
    Strings["buttonTextOK"] = "buttonTextOK";
    /**
     * @description Text for preview button (an action to preview the changes)
     * @default "Preview"
     */
    Strings["buttonTextPreview"] = "buttonTextPreview";
    /**
     * @description Text for publish button (an action to publish the changes)
     * @default "Publish"
     */
    Strings["buttonTextPublish"] = "buttonTextPublish";
    /**
     * @description Text for remind button (an action to remind an update)
     * @default "Remind"
     */
    Strings["buttonTextRemind"] = "buttonTextRemind";
    /**
     * @description Text for remove button (an action to remove the item)
     * @default "Remove"
     */
    Strings["buttonTextRemove"] = "buttonTextRemove";
    /**
     * @description Text for replace button (an action to replace the item)
     * @default "Replace"
     */
    Strings["buttonTextReplace"] = "buttonTextReplace";
    /**
     * @description Text for save button (an action to save the changes)
     * @default "Save"
     */
    Strings["buttonTextSave"] = "buttonTextSave";
    /**
     * @description Text for submit button (an action to submit an update or something)
     * @default "Submit"
     */
    Strings["buttonTextSubmit"] = "buttonTextSubmit";
    /**
     * @description Text for submit button (an action to submit an update or something) with send and share to current group
     * @default "Send and share to current group"
     */
    Strings["buttonTextSubmitWithSendAndShare"] = "buttonTextSubmitWithSendAndShare";
    /**
     * @description Label for consent option in share submission card to current group on Task Module submit page
     * @default "Share to current group"
     */
    Strings["shareSubmissionCardConsentOptionLabel"] = "shareSubmissionCardConsentOptionLabel";
    /**
     * @description Aria label for loading icon (a state for loading data)
     * @default "loading"
     */
    Strings["loadingAriaLabel"] = "loadingAriaLabel";
    /**
     * @description Default message for unknown errors
     * @default "Something went wrong"
     * @argument retry : "Something went wrong, please wait then try again later"
     * @argument OperationConflict : "Operation is conflicted"
     * @argument MultiUserOperationConflict : "Someone else has changed the request, please return to homepage and try again."
     * @argument NotProvisioned : "We're preparing the Updates app for you"
     * @argument SolutionNotInstalled : "We're preparing the Updates app for you"
     * @argument InvalidInputChar : "There're invalid characters in your input"
     * @argument noReport : "You have not received any submissions yet"
     * @argument DuplicateReceiver : "Duplicate receivers are not allowed"
     * @argument DuplicateWriter : "Duplicate writers are not allowed"
     * @argument DuplicateOwner : "Duplicate owners are not allowed"
     * @argument DuplicateCollaborator : "Duplicate collaborators are not allowed"
     * @argument TooManyWriters : "Decrease number of writers"
     * @argument TooManyReceivers : "Decrease number of receivers"
     * @argument OwnerCountNotEqualToOne : "Owner Must Be a Single Person"
     * @argument TooManyCollaborators : "Request Collaborators to 5 People"
     * @argument OwnerAndCollaboratorConflict : "Request Owner and Collaborator Cannot Be the Same Person"
     * @argument UserRoleNotFound : "User role not found"
     * @argument TooEarlyDueOfOneTimeRecurrence : "The due time is too early"
     * @argument noPermission : "You don't have access to this update"
     * @argument EnvironmentNotFound : "Not support GCC users yet"
     * @argument newChat : "Send a message to get this conversation started, and then come back to Updates"
     * @argument guestUser : "You don't have access"
     * @argument C_ERR_NETWORK : "Please check your internet connection and try refreshing this page"
     * @argument C_ERR_TEAMS_SDK : "Please check your network or reload the app"
     * @argument SolutionNotUpgrade : "The app is upgrading now"
     * @argument ReportDefinitionDisabled : "This request is no longer available"
     * @argument NotDefinitionSubmitter : "You don't have access to submit this update"
     * @argument DefinitionReviewer : "You don't need to submit this update"
     * @argument ExecutedSimilarManualReminderRecently : "Someone else has just sent a reminder"
     * @argument DefinitionCreator : "You don't need to submit this update"
     * @argument TransactionNotStarted : "This error is usually caused by custom plug-ins in your organization."
     * @argument 624 : "$t(errorTitle_FormsServiceUnavailable)"
     * @argument 650 : "Your forms have reached the max number limit of 400."
     * @argument 674 : "The form has been deleted."
     * @argument 713 : "Your user data are deleted or your Microsoft Forms license is removed."
     * @argument 717 : "One of Microsoft Forms dependencies is disabled."
     * @argument 751 : "Microsoft Forms license is needed."
     * @argument 752 : "$t(errorTitle_751)"
     * @argument 639 : "The form has been moved."
     * @argument FormsResponseNotFound : "The update has been deleted."
     * @argument FormsPrincipalDisabled : "Microsoft Forms app has been disabled."
     * @argument FormsServiceUnavailable : "The service is busy now."
     * @argument StorageThrottled : "The service is busy."
     * @argument DataversePrincipalDisabled : "[AADSTS500014] The solution installation of Dataverse failed."
     * @argument AADSTS50076 : "[AADSTS50076] Configuration change has been made."
     * @argument AADSTS7000112 : "[AADSTS7000112] The Teams Work Report application is disabled."
     * @argument AADSTS50158 : "[AADSTS50158] External security challenge not satisfied."
     * @argument AADSTS53003 : "[AADSTS53003] Certain Conditional Access policies have been set."
     * @argument AADSTS50079 : "[AADSTS50079] Multi-factor authentication need to be enabled."
     * @argument AADSTS530002 : "[AADSTS530002] Your device is required to be compliant."
     * @argument AADSTS530003 : "[AADSTS530003] Your device is required to be managed to access this resource."
     * @argument AADSTS50127 : "[AADSTS50127] Your device is not registered."
     * @argument AADSTS700003 : "[AADSTS700003] Your device needs to be enabled in your tenant."
     * @argument AADSTS53009 : "[AADSTS53009] Application needs to enforce Intune protection policies."
     * @argument AADSTS53001 : "[AADSTS53001] Device is not in required device state: domain_joined."
     * @argument UserNotEnabled : "Some users are not enabled."
     * @argument UserNotEnabledInActiveDirectory : "Some users are not enabled."
     * @argument AccessModeError : "You don't have the access mode of Read/Write for CAL."
     * @argument NoPowerPlatformLicense : "Microsoft PowerApps license needed."
     * @argument TooManyReports : "Exported data exceeds the limit."
     * @argument TooManyReportDefinitions : "Exported data exceeds the limit."
     * @argument NoReports : "No data to export."
     * @argument SandboxHostNotAvailable : "No Sandbox Hosts."
     * @argument UserNotFoundInDataverse : "Some users are not found."
     * @argument DataverseLicenseNotFound : "You need to have a valid license includes the CRM plan to perform further actions, such like Office E3, E5 or power platform license."
     * @argument ItemNotFound : "Item Not Found."
     * @argument userNotPartOfSecurityGroup : "Some users are not part of security group."
     */
    Strings["errorTitle"] = "errorTitle";
    /**
     * @description The retry tips for user when error happens. Correlation Id is a code for investigation
     * @default "Correlation ID: {{correlationId}}."
     * @argument NotProvisioned : "Updates is completing necessary preparations(1/2) for your first visit. Please allow a few minutes for this process to finish."
     * @argument SolutionNotInstalled : "Updates is completing necessary preparations(2/2) for your first visit. Please allow a few minutes for this process to finish."
     * @argument InvalidInputChar : "Please fix and submit again."
     * @argument noReport : ""
     * @argument DuplicateReceiver : "Please remove the duplicate receivers and submit again."
     * @argument DuplicateWriter : "Please remove the duplicate writers and submit again."
     * @argument DuplicateOwner : "Please remove the duplicate owners and submit again."
     * @argument DuplicateCollaborator : "Please remove the duplicate collaborators and submit again."
     * @argument TooManyWriters : "The total number of writers cannot exceed 2,000. Make sure to check the number of individual writers and writers in groups."
     * @argument TooManyReceivers : "The total number of receivers cannot exceed 2,000. Make sure to check the number of individual receivers and receivers in groups."
     * @argument OwnerCountNotEqualToOne : "Please ensure that there is only one designated request owner."
     * @argument TooManyCollaborators : "Please ensure that there are no more than 5 request collaborators."
     * @argument OwnerAndCollaboratorConflict : "Please ensure that the request owner and request collaborator are not the same person."
     * @argument UserRoleNotFound : "User role not found"
     * @argument TooEarlyDueOfOneTimeRecurrence : "The due time of one-time recurrence settings cannot be earlier than now."
     * @argument noPermission : "Contact the assigner to gain access."
     * @argument EnvironmentNotFound : "GCC support will be coming soon and please stay tuned."
     * @argument newChat : ""
     * @argument guestUser : ""
     * @argument C_ERR_NETWORK : ""
     * @argument SolutionNotUpgrade : "We are upgrading the data storage for your organization, please come back in a few minutes."
     * @argument ReportDefinitionDisabled : "Please reach out to request creator for information."
     * @argument NotDefinitionSubmitter : "Please reach out to request creator for access."
     * @argument DefinitionReviewer : "As a viewer, you can view data and submission in more detail in the Updates app."
     * @argument ExecutedSimilarManualReminderRecently : "Come back in an hour for another reminder."
     * @argument DefinitionCreator : "As an assigner, you can manage this request in the Updates app."
     * @argument DefinitionCreatorMobile : "As an assigner, you can manage this request in the Updates app in desktop."
     * @argument 624 : "$t(errorDescription_FormsServiceUnavailable)"
     * @argument 650 : "Please mitigate some unnecessary forms through Microsoft Forms."
     * @argument 674 : "If you need it, you can restore it from the Microsoft Forms portal."
     * @argument 713 : "Please contact your administrator for more details."
     * @argument 717 : "Please contact your administrator for more details."
     * @argument 751 : "Please contact your administrator for more details."
     * @argument 752 : "$t(errorDescription_751)"
     * @argument 639 : "Please contact the request assigner to recover it."
     * @argument FormsResponseNotFound : "Please contact the request assigner for more details."
     * @argument FormsPrincipalDisabled : "Please contact your administrator for more details."
     * @argument FormsServiceUnavailable : "Please try again later."
     * @argument StorageThrottled : "Don't be worried. There are many users accessing the service at the moment. Please try again later."
     * @argument DataversePrincipalDisabled : "$t(errorDescription_FormsPrincipalDisabled)"
     * @argument AADSTS50076 : "$t(errorDescription_FormsPrincipalDisabled)"
     * @argument AADSTS7000112 : "Please enable it."
     * @argument AADSTS50158 : "$t(errorDescription_FormsPrincipalDisabled)"
     * @argument AADSTS53003 : "$t(errorDescription_FormsPrincipalDisabled)"
     * @argument AADSTS50079 : "$t(errorDescription_FormsPrincipalDisabled)"
     * @argument AADSTS530002 : "$t(errorDescription_FormsPrincipalDisabled)"
     * @argument AADSTS530003 : "$t(errorDescription_FormsPrincipalDisabled)"
     * @argument AADSTS50127 : "$t(errorDescription_FormsPrincipalDisabled)"
     * @argument AADSTS700003 : "$t(errorDescription_FormsPrincipalDisabled)"
     * @argument AADSTS53009 : "$t(errorDescription_FormsPrincipalDisabled)"
     * @argument AADSTS53001 : "Conditional Access policy requires a domain joined device, and the device is not domain joined. Please contact IT administrator for more details."
     * @argument UserNotEnabled_zero : "Some users have been disabled in Dataverse. Please remove the users to continue or contact the administrator to enable the users in Dataverse"
     * @argument UserNotEnabled_one : "{{userNames, list}} has been disabled in Dataverse. Please remove the user to continue or contact the administrator to enable the user in Dataverse"
     * @argument UserNotEnabled_other : "{{userNames, list}} have been disabled in Dataverse. Please remove the users to continue or contact the administrator to enable the users in Dataverse"
     * @argument UserNotEnabledInActiveDirectory_zero : "Some users are not enabled in Azure Active Directory. Please contact the administrator for more details."
     * @argument UserNotEnabledInActiveDirectory_one : "{{userNames, list}} is not enabled in Azure Active Directory. Please contact the administrator for more details."
     * @argument UserNotEnabledInActiveDirectory_other : "{{userNames, list}} are not enabled in Azure Active Directory. Please contact the administrator for more details."
     * @argument AccessModeError : "Please contact administrator for more details in Power Platform Admin Center."
     * @argument NoPowerPlatformLicense : "It seems you don't have a valid license or subscription for PowerApps. Please contact administrator for more details."
     * @argument TooManyReports : "Currently, we support exporting up to 1000 updates at a time, please re-filter and try again."
     * @argument TooManyReportDefinitions : "Currently, you can export at most 1000 update submissions or export update submissions through at most 100 update requests at one time, please re-filter and try again."
     * @argument NoReports : "No reports to export, please re-filter and try again."
     * @argument SandboxHostNotAvailable : "No Sandbox Hosts are currently available. Don't worry. Please try again later."
     * @argument UserNotFoundInDataverse : "Some users are not found. Please contact the administrator for more details."
     * @argument ItemNotFound : "We're sorry, but the requested item cannot be located. The update request and associated data have been deleted. Please contact the update request owner for more information."
     * @argument userNotPartOfSecurityGroup_one : "{{userNames, list}} is not members of Azure Active Directory security group. Please contact administrator to add the user in the Power Platform Admin Center."
     * @argument userNotPartOfSecurityGroup_other : "{{userNames, list}} are not members of Azure Active Directory security group. Please contact administrator to add the users in the Power Platform Admin Center."
     * @argument userNotPartOfSecurityGroup_zero : "Some users are not members of Azure Active Directory security group. Please contact administrator to add the users in the Power Platform Admin Center."
     * @argument TransactionNotStarted : "Please contact with your administrator for more details(ErrorCode: 0x80040251)."
     */
    Strings["errorDescription"] = "errorDescription";
    /**
     * @description Action to Reload the App, when errors
     * @default "Try again"
     * @argument DefinitionReviewer : "View submission"
     * @argument DefinitionCreator : "Manage request"
     * @argument MultiUserOperationConflict : "Cancel"
     */
    Strings["errorAction"] = "errorAction";
    /**
     * @description The text for users when they need to update the solution. Keep "Microsoft Check-ins" as it is.
     * @default "Dataverse solution package needs to be updated. Please reach out your administrator to update the package \"Microsoft Check-ins\" for the default environment on Power Platform admin center."
     */
    Strings["solutionCompatibilityAlertText"] = "solutionCompatibilityAlertText";
    /**
     * @description The link text for users to learn more about how to update the solution.
     * @default "Learn more"
     */
    Strings["solutionCompatibilityAlertLinkText"] = "solutionCompatibilityAlertLinkText";
    /**
     * @description Aria label for Manage requests btn, first word is an action
     * @default "Manage requests"
     */
    Strings["manageTemplatesButtonLabel"] = "manageTemplatesButtonLabel";
    /**
     * @description Text to show it happens just now
     * @default "Just now"
     */
    Strings["justNow"] = "justNow";
    /**
     * @description Text for homepage
     * @default "Homepage"
     */
    Strings["homepage"] = "homepage";
    /**
     * @description Text for review tab
     * @default "Review"
     */
    Strings["reviewTab"] = "reviewTab";
    /**
     * @description Text for submit tab
     * @default "Submit"
     */
    Strings["submitTab"] = "submitTab";
    /**
     * @description Text for manage tab
     * @default "Manage"
     */
    Strings["manageTab"] = "manageTab";
    /**
     * @description Text for Manage templates button, first word is an action
     * @default "Request an update"
     */
    Strings["manageTemplatesButton"] = "manageTemplatesButton";
    /**
     * @description Text for action button click to return to home page
     * @default "Back to home"
     */
    Strings["backToHomePageButton"] = "backToHomePageButton";
    /**
     * @description Error will be shown up when user enters blank spaces only
     * @default "Value cannot be blank spaces"
     */
    Strings["customFieldInvalidTextError"] = "customFieldInvalidTextError";
    /**
     * @description text displayed when an invalid character is input, always singular
     * @default "Invalid character {{chars}}"
     */
    Strings["errorMessageInvalidCharacter"] = "errorMessageInvalidCharacter";
    /**
     * @description error text displayed when user input goes over max character limit. {numberPlaceholder} will be replaced with a number in our code.
     * @default "Character limit: {{numberPlaceholder}}"
     */
    Strings["maximumCharacterErrorText"] = "maximumCharacterErrorText";
    /**
     * @description Aria label for facepile overflow button
     * @default "More people"
     */
    Strings["facepileOverflowAriaLabel"] = "facepileOverflowAriaLabel";
    /**
     * @description Label for report template assigner
     * @default "Assigner"
     */
    Strings["reportDefinitionAssignerLabel"] = "reportDefinitionAssignerLabel";
    /**
     * @description Label for report template viewers
     * @default "Viewers"
     */
    Strings["reportDefinitionReceiverLabel"] = "reportDefinitionReceiverLabel";
    /**
     * @description Label for report template submitters
     * @default "Submitters"
     */
    Strings["reportDefinitionWriterLabel"] = "reportDefinitionWriterLabel";
    /**
     * @description Text for number of users who have submitted the updates
     * @default "Submitted"
     */
    Strings["occurrenceStatisticTimeSensitiveCardSubmitNumber"] = "occurrenceStatisticTimeSensitiveCardSubmitNumber";
    /**
     * @description Text for number of users who have not submitted the updates
     * @default "Unsubmitted"
     */
    Strings["occurrenceStatisticTimeSensitiveCardUnsubmitNumber"] = "occurrenceStatisticTimeSensitiveCardUnsubmitNumber";
    /**
     * @description Text for submission rate
     * @default "Submission rate"
     */
    Strings["occurrenceStatisticTimeSensitiveCardSubmissionRate"] = "occurrenceStatisticTimeSensitiveCardSubmissionRate";
    /**
     * @description Text for total submission number
     * @default "Submissions"
     */
    Strings["occurrenceStatisticAdhocCardTotalSubmission"] = "occurrenceStatisticAdhocCardTotalSubmission";
    /**
     * @description Text for new submission number
     * @default "New submission"
     */
    Strings["occurrenceStatisticCardNewSubmission"] = "occurrenceStatisticCardNewSubmission";
    /**
     * @description Empty state message.
     * @default "You don't have any scheduled requests."
     */
    Strings["occurrenceStatisticTimeSensitiveCardlistEmptyStatusMessage"] = "occurrenceStatisticTimeSensitiveCardlistEmptyStatusMessage";
    /**
     * @description Empty state message
     * @default "You don't have any general requests."
     */
    Strings["occurrenceStatisticAdhocCardlistEmptyStatusMessage"] = "occurrenceStatisticAdhocCardlistEmptyStatusMessage";
    /**
     * @description Update list column name, the title and occurrence of update
     * @default "Submission"
     */
    Strings["reportListColumnSubmission"] = "reportListColumnSubmission";
    /**
     * @description Update list column name, the submitter of update
     * @default "Submitters"
     */
    Strings["reportListColumnSubmittedBy"] = "reportListColumnSubmittedBy";
    /**
     * @description Update list column name, the receiver of update
     * @default "Viewers"
     */
    Strings["reportListColumnSubmittedTo"] = "reportListColumnSubmittedTo";
    /**
     * @description Update list column name, the preview text of update
     * @default "Content preview"
     */
    Strings["reportListColumnContentPreview"] = "reportListColumnContentPreview";
    /**
     * @description Update list column name, the submmit time of update
     * @default "Submitted on"
     */
    Strings["reportListColumnSubmittedOn"] = "reportListColumnSubmittedOn";
    /**
     * @description Text for action button click to show all received report in update collection page
     * @default "View entire series"
     */
    Strings["reportListViewInCollectionButton"] = "reportListViewInCollectionButton";
    /**
     * @description Text for action button click to send adaptive card to group
     * @default "Send to group"
     */
    Strings["sendToGroupButton"] = "sendToGroupButton";
    /**
     * @description Table title for the update I received
     * @default "Received"
     */
    Strings["receivedReportListTitle"] = "receivedReportListTitle";
    /**
     * @description Empty page message
     * @default "You haven’t received any updates yet. Create a request to collect update from your team."
     */
    Strings["receivedReportListEmptyStatusMessage"] = "receivedReportListEmptyStatusMessage";
    /**
     * @description Empty page title for filtered
     * @default "No submission found with the filter(s)"
     */
    Strings["reportListWithFilterEmptyStatusTitle"] = "reportListWithFilterEmptyStatusTitle";
    /**
     * @description Empty page message for filtered
     * @default "Please adjust the filter(s) to see more results"
     */
    Strings["reportListWithFilterEmptyStatusMessage"] = "reportListWithFilterEmptyStatusMessage";
    /**
     * @description Table title for the report I submitted
     * @default "Your submissions"
     */
    Strings["submittedReportListTitle"] = "submittedReportListTitle";
    /**
     * @description Empty page message
     * @default "You haven’t submitted any updates yet. Your submitted updates will appear here."
     */
    Strings["submittedReportListEmptyStatusMessage"] = "submittedReportListEmptyStatusMessage";
    /**
     * @description friendly datetime format, today/tomorrow/yesterday. {Locked}
     * @default "$t(friendlyDateAndTime)"
     */
    Strings["listDatetime"] = "listDatetime";
    /**
     * @description friendly relative datetime format, justnow/today/tomorrow/yesterday. {Locked}
     * @default "{{date, friendlyrelativetime}}"
     */
    Strings["listSubmitTime"] = "listSubmitTime";
    /**
     * @description Submitted time of update. {Locked=$t(friendlyDateAndTime)}
     * @default "Submitted $t(friendlyDateAndTime)"
     */
    Strings["submitTimeText"] = "submitTimeText";
    /**
     * @description Submitted time of update, with edited mark. {Locked=$t(submitTimeText)}
     * @default "$t(submitTimeText) (edited)"
     */
    Strings["editTimeText"] = "editTimeText";
    /**
     * @description Update with title and user name who submitted
     * @default "{{title}} by {{user}}"
     */
    Strings["reportSubmittedBy"] = "reportSubmittedBy";
    /**
     * @description Section title for scheduled update list
     * @default "Scheduled"
     * @argument Upcoming : "Scheduled upcoming requests"
     * @argument Overdue : "Scheduled overdue requests"
     */
    Strings["occurrenceTimeSensitiveListTitle"] = "occurrenceTimeSensitiveListTitle";
    /**
     * @description Section subtitle for scheduled update list
     * @default "Check on the assigned requests and provide your update before the due date."
     */
    Strings["occurrenceTimeSensitiveListSubTitle"] = "occurrenceTimeSensitiveListSubTitle";
    /**
     * @description Title for overdue update list
     * @default "Overdue requests"
     */
    Strings["occurrenceOverdueListTitle"] = "occurrenceOverdueListTitle";
    /**
     * @description Tooltip text for overdue update list
     * @default "Unread overdue requests are in bold"
     */
    Strings["occurrenceOverdueListTooltip"] = "occurrenceOverdueListTooltip";
    /**
     * @description Section title for general update list
     * @default "General"
     */
    Strings["occurrenceAdhocListTitle"] = "occurrenceAdhocListTitle";
    /**
     * @description Users can click this button to get the whole list
     * @default "See all"
     * @argument Upcoming : "See all upcomings"
     * @argument Overdue : "See all overdues"
     */
    Strings["occurrenceCardlistSeeallButton"] = "occurrenceCardlistSeeallButton";
    /**
     * @description Aria label for button clicked to show the whole list
     * @default "See all general requests"
     */
    Strings["cardListSeeallImportantButtonAriaLabel"] = "cardListSeeallImportantButtonAriaLabel";
    /**
     * @description Aria label for button clicked to show the whole list
     * @default "See all scheduled requests"
     * @argument Upcoming : "See all scheduled upcoming requests"
     * @argument Overdue : "See all scheduled overdue requests"
     */
    Strings["cardListSeeallScheduledButtonAriaLabel"] = "cardListSeeallScheduledButtonAriaLabel";
    /**
     * @description Aria label for button clicked to show the whole list
     * @default "See all submitted updates"
     */
    Strings["cardListSeeallSubmittedButtonAriaLabel"] = "cardListSeeallSubmittedButtonAriaLabel";
    /**
     * @description Aria label for button clicked to show the whole list
     * @default "See all received updates"
     */
    Strings["cardListSeeallReceivedButtonAriaLabel"] = "cardListSeeallReceivedButtonAriaLabel";
    /**
     * @description Empty page message
     * @default "No scheduled requests pending on you."
     * @argument Upcoming : "You don't have any upcoming scheduled requests."
     * @argument Overdue : "You don't have any overdue scheduled requests."
     */
    Strings["occurrenceTimeSensitiveCardlistEmptyStatusMessage"] = "occurrenceTimeSensitiveCardlistEmptyStatusMessage";
    /**
     * @description Empty page message
     * @default "No general requests assigned to you. "
     */
    Strings["occurrenceAdhocCardlistEmptyStatusMessage"] = "occurrenceAdhocCardlistEmptyStatusMessage";
    /**
     * @description Text to show the user who create the template
     * @default "Assigned by {{name}}"
     */
    Strings["occurrenceCardAssignedBy"] = "occurrenceCardAssignedBy";
    /**
     * @description The message shows when submitting a new update
     * @default "Submitting your update..."
     */
    Strings["creatingReportLabel"] = "creatingReportLabel";
    /**
     * @description The message shows when a update submitted
     * @default " Your update has been submitted!"
     */
    Strings["submitReportSuccess"] = "submitReportSuccess";
    /**
     * @description Empty page title
     * @default "Submit your first update"
     */
    Strings["submitTabPageEmptyStatusTitle"] = "submitTabPageEmptyStatusTitle";
    /**
     * @description Empty page message
     * @default "Start by using a template to manage and submit common updates."
     */
    Strings["submitTabPageEmptyStatusMessage"] = "submitTabPageEmptyStatusMessage";
    /**
     * @description Empty review page title
     * @default "No updates to review"
     */
    Strings["reviewTabPageEmptyStatusTitle"] = "reviewTabPageEmptyStatusTitle";
    /**
     * @description Empty review page message
     * @default "Create a new update request to collect and review updates from others."
     */
    Strings["reviewTabPageEmptyStatusMessage"] = "reviewTabPageEmptyStatusMessage";
    /**
     * @description Label for get more Updates
     * @default "Show more"
     */
    Strings["getMoreReportLabel"] = "getMoreReportLabel";
    /**
     * @description Text of create new template button
     * @default "New request"
     */
    Strings["templateManagementCreateTemplateButton"] = "templateManagementCreateTemplateButton";
    /**
     * @description Default title of template
     * @default "Untitled request"
     */
    Strings["templateDefinitionDefaultTitle"] = "templateDefinitionDefaultTitle";
    /**
     * @description Text indicates the template is in enabled status
     * @default "Enabled"
     */
    Strings["templateDefinitionEnabled"] = "templateDefinitionEnabled";
    /**
     * @description Text indicate the template is in disabled status
     * @default "Disabled"
     */
    Strings["templateDefinitionDisabled"] = "templateDefinitionDisabled";
    /**
     * @description Column title of template title in template management list, first word is an object
     * @default "Request"
     */
    Strings["templateManagementTemplateTitleColumnTitle"] = "templateManagementTemplateTitleColumnTitle";
    /**
     * @description Column title of submitters in template management list
     * @default "Submitters"
     */
    Strings["templateManagementWritersColumnTitle"] = "templateManagementWritersColumnTitle";
    /**
     * @description Column title of viewers in template management list
     * @default "Viewers"
     */
    Strings["templateManagementReceiversColumnTitle"] = "templateManagementReceiversColumnTitle";
    /**
     * @description Column title of the time last updated in template management list
     * @default "Last updated at"
     */
    Strings["templateManagementLastUpdatedAtColumnTitle"] = "templateManagementLastUpdatedAtColumnTitle";
    /**
     * @description Column title of status in template management list
     * @default "Status"
     */
    Strings["templateManagementStatusColumnTitle"] = "templateManagementStatusColumnTitle";
    /**
     * @description Column title of actions in template management list
     * @default "Actions"
     */
    Strings["templateManagementActionsColumnTitle"] = "templateManagementActionsColumnTitle";
    /**
     * @description Aria label text for step number in template wizard
     * @default "Step {{step}}"
     */
    Strings["templateWizardStepAriaLabel"] = "templateWizardStepAriaLabel";
    /**
     * @description Text of badge for new submission counts in template wizard
     * @default "{{counts}} new"
     */
    Strings["templateWizardNewBadgeLabel"] = "templateWizardNewBadgeLabel";
    /**
     * @description Label of template title input in template wizard
     * @default "Request title"
     */
    Strings["templateWizardTemplateTitleLabel"] = "templateWizardTemplateTitleLabel";
    /**
     * @description Aria label for template receivers people picker
     * @default "Edit viewers who can view this request"
     */
    Strings["templateReceiversPeoplePickerAriaLabel"] = "templateReceiversPeoplePickerAriaLabel";
    /**
     * @description Placeholder of template title input in template wizard
     * @default "Add a request title"
     */
    Strings["templateWizardTemplateTitleInputPlaceholder"] = "templateWizardTemplateTitleInputPlaceholder";
    /**
     * @description Description label of template input in template wizard
     * @default "Description"
     */
    Strings["templateWizardTemplateDescriptionLabel"] = "templateWizardTemplateDescriptionLabel";
    /**
     * @description Placeholder of template description input in template wizard
     * @default "If needed, add some extra info that will help people learn more about the request"
     */
    Strings["templateWizardTemplateDescriptionInputPlaceholder"] = "templateWizardTemplateDescriptionInputPlaceholder";
    /**
     * @description Label of template status toggle in template wizard
     * @default "Request status"
     */
    Strings["templateWizardTemplateStatusLabel"] = "templateWizardTemplateStatusLabel";
    /**
     * @description The warning text if user selects 29,30,31th day of month as the due time
     * @default "For the months that are fewer than {{dayOfMonth}} days, the due date will fall on the last day of the month."
     */
    Strings["templateWizardMonthWarning"] = "templateWizardMonthWarning";
    /**
     * @description The error message to indicate the input is required
     * @default "Required"
     */
    Strings["errorMessageRequired"] = "errorMessageRequired";
    /**
     * @description The error message indicate the selected Recivers is too much
     * @default ""
     * @argument overWriters : "Select less than 2,000 submitters and less than 5 groups"
     * @argument overUser : "Select less than 2,000 submitters"
     * @argument overGroup : "Select less than 5 groups"
     * @argument overReceivers : "Select less than 500 Viewers"
     * @argument overComanagers : "Maximum of six people can be selected."
     */
    Strings["errorMessagePeoplePicker"] = "errorMessagePeoplePicker";
    /**
     * @description The error message if user select time is earlier than now
     * @default "The due time should be later than now"
     */
    Strings["templateWizardDueTimeError"] = "templateWizardDueTimeError";
    /**
     * @description The error message if user select reminder time is earlier than a specific time
     * @default "The reminder time should not be shorter than {{time}}"
     */
    Strings["templateEndingBeforeErrorTooShort"] = "templateEndingBeforeErrorTooShort";
    /**
     * @description The error message if user select reminder time is later than a specific time
     * @default "The reminder time should not be longer than {{time}}"
     */
    Strings["templateEndingBeforeErrorTooLong"] = "templateEndingBeforeErrorTooLong";
    /**
     * @description Prompt to select an due Date
     * @default "Due on"
     */
    Strings["templateWizardOneTimeSelectDateTimePrompt"] = "templateWizardOneTimeSelectDateTimePrompt";
    /**
     * @description To describe recurrence pattern like repeat every 3 week
     * @default "Repeat every"
     */
    Strings["templateWizardRecurrencePatternString"] = "templateWizardRecurrencePatternString";
    /**
     * @description To describe reminder like remind 1 day before due time
     * @default "Remind"
     */
    Strings["templateReminderString"] = "templateReminderString";
    /**
     * @description To describe time like at 10:00
     * @default "At"
     */
    Strings["templateWizardRecurrencePatternTimeChooseString"] = "templateWizardRecurrencePatternTimeChooseString";
    /**
     * @description To describe month day like on day 15
     * @default "On day"
     */
    Strings["templateWizardRecurrencePatternMonthdayChooseString"] = "templateWizardRecurrencePatternMonthdayChooseString";
    /**
     * @description Tip to indicate it will fall back to the last day in a month if selected day is greater than the last day in a month
     * @default "Select up to the last day in a month"
     */
    Strings["templateWizardRecurrencePatternMonthdayChooseTooltipString"] = "templateWizardRecurrencePatternMonthdayChooseTooltipString";
    /**
     *
     * @default ""
     * @argument Daily : "Day to repeat"
     * @argument Weekly : "Week to repeat"
     * @argument Monthly : "Month to repeat"
     */
    Strings["templateWizardRecurrencePatternIntervalChooseAriaLabel"] = "templateWizardRecurrencePatternIntervalChooseAriaLabel";
    /**
     * @description Tip to indicate the reminder time
     * @default "Will remind submitters {{time}} before due time"
     */
    Strings["templateReminderTip"] = "templateReminderTip";
    /**
     * @description The time format to show the day and time
     * @default "{{time, list(style: narrow; type: unit)}}"
     */
    Strings["dayAndTime"] = "dayAndTime";
    /**
     *
     * @default ""
     * @argument zero : "{{count}} days"
     * @argument one : "{{count}} day"
     * @argument two : "{{count}} days"
     * @argument few : "{{count}} days"
     * @argument many : "{{count}} days"
     * @argument other : "{{count}} days"
     */
    Strings["days"] = "days";
    /**
     *
     * @default ""
     * @argument zero : "{{count}} hours"
     * @argument one : "{{count}} hour"
     * @argument two : "{{count}} hours"
     * @argument few : "{{count}} hours"
     * @argument many : "{{count}} hours"
     * @argument other : "{{count}} hours"
     */
    Strings["hours"] = "hours";
    /**
     *
     * @default ""
     * @argument zero : "{{count}} minutes"
     * @argument one : "{{count}} minute"
     * @argument two : "{{count}} minutes"
     * @argument few : "{{count}} minutes"
     * @argument many : "{{count}} minutes"
     * @argument other : "{{count}} minutes"
     */
    Strings["minutes"] = "minutes";
    /**
     * @description The status text indicates the toggle is on
     * @default "On"
     */
    Strings["toggleStatusOn"] = "toggleStatusOn";
    /**
     * @description The status text indicates the toggle is off
     * @default "Off"
     */
    Strings["toggleStatusOff"] = "toggleStatusOff";
    /**
     * @description Label text of file attachment required toggle in template wizard
     * @default "File attachment required"
     */
    Strings["templateWizardTemplateFileAttachmentLabel"] = "templateWizardTemplateFileAttachmentLabel";
    /**
     * @description ToolTip text of file attachment required toggle in template wizard
     * @default "Turning on will require submitters to attach a file before submitting."
     */
    Strings["templateWizardTemplateFileAttachmentToolTip"] = "templateWizardTemplateFileAttachmentToolTip";
    /**
     * @description Label text of allow editing after submission toggle in template wizard
     * @default "Editing updates allowed"
     */
    Strings["templateWizardTemplateAllowEditSubmissionsLabel"] = "templateWizardTemplateAllowEditSubmissionsLabel";
    /**
     * @description ToolTip text of allow editing after submission toggle in template wizard
     * @default "Turning on will allow submitters to edit their updates after submitting."
     */
    Strings["templateWizardTemplateAllowEditSubmissionsTooltip"] = "templateWizardTemplateAllowEditSubmissionsTooltip";
    /**
     * @description Aria label for repeat option dropdown
     * @default "Select repeat type"
     */
    Strings["repeatTypeOptionAriaLabel"] = "repeatTypeOptionAriaLabel";
    /**
     * @description Aria label for time dropdown
     * @default "Select due time"
     */
    Strings["timeOptionAriaLabel"] = "timeOptionAriaLabel";
    /**
     * @description Aria label for month day dropdown
     * @default "Select month day"
     */
    Strings["dayOfMonthOptionAriaLabel"] = "dayOfMonthOptionAriaLabel";
    /**
     * @description Aria label for days dropdown
     * @default "Select days"
     */
    Strings["daysOptionAriaLabel"] = "daysOptionAriaLabel";
    /**
     * @description Aria label for hours dropdown
     * @default "Select hours"
     */
    Strings["hoursOptionAriaLabel"] = "hoursOptionAriaLabel";
    /**
     * @description Aria label for minutes dropdown
     * @default "Select minutes"
     */
    Strings["minutesOptionAriaLabel"] = "minutesOptionAriaLabel";
    /**
     * @description Label text for days option in dropdown
     * @default "day"
     */
    Strings["unitDay"] = "unitDay";
    /**
     * @description Label text for hours option in dropdown
     * @default "hour"
     */
    Strings["unitHour"] = "unitHour";
    /**
     * @description Label text for minutes option in dropdown
     * @default "minute"
     */
    Strings["unitMinute"] = "unitMinute";
    /**
     * @description The options text in repeat dropdown to indicate the template recurrence type is one time
     * @default "One time"
     */
    Strings["templateWizardOneTimeRecurrenceType"] = "templateWizardOneTimeRecurrenceType";
    /**
     * @description The options text in repeat dropdown to indicate the template recurrence type is weekly
     * @default "Every week"
     */
    Strings["templateWizardWeeklyRecurrenceType"] = "templateWizardWeeklyRecurrenceType";
    /**
     * @description The options text in repeat dropdown to indicate the template recurrence type is monthly
     * @default "Every month"
     */
    Strings["templateWizardMonthlyRecurrenceType"] = "templateWizardMonthlyRecurrenceType";
    /**
     * @description The recurrence unit to indicate the recurrence type is by n day
     * @default "Day"
     */
    Strings["templateWizardRecurrenceUnitDay"] = "templateWizardRecurrenceUnitDay";
    /**
     * @description The recurrence unit to indicate the recurrence type is by n week
     * @default "Week"
     */
    Strings["templateWizardRecurrenceUnitWeek"] = "templateWizardRecurrenceUnitWeek";
    /**
     * @description The recurrence unit to indicate the recurrence type is by n month
     * @default "Month"
     */
    Strings["templateWizardRecurrenceUnitMonth"] = "templateWizardRecurrenceUnitMonth";
    /**
     * @description The options text in due on dropdown to indicate date is Monday
     * @default "Monday"
     */
    Strings["templateWizardDueOnMonday"] = "templateWizardDueOnMonday";
    /**
     * @description The options text in due on dropdown to indicate date is Tuesday
     * @default "Tuesday"
     */
    Strings["templateWizardDueOnTuesday"] = "templateWizardDueOnTuesday";
    /**
     * @description The options text in due on dropdown to indicate date is Wednesday
     * @default "Wednesday"
     */
    Strings["templateWizardDueOnWednesday"] = "templateWizardDueOnWednesday";
    /**
     * @description The options text in due on dropdown to indicate date is Thursday
     * @default "Thursday"
     */
    Strings["templateWizardDueOnThursday"] = "templateWizardDueOnThursday";
    /**
     * @description The options text in due on dropdown to indicate date is Friday
     * @default "Friday"
     */
    Strings["templateWizardDueOnFriday"] = "templateWizardDueOnFriday";
    /**
     * @description The options text in due on dropdown to indicate date is Saturday
     * @default "Saturday"
     */
    Strings["templateWizardDueOnSaturday"] = "templateWizardDueOnSaturday";
    /**
     * @description The options text in due on dropdown to indicate date is Sunday
     * @default "Sunday"
     */
    Strings["templateWizardDueOnSunday"] = "templateWizardDueOnSunday";
    /**
     * @description Name of weekday. {Locked}
     * @default "{{date, weekday}}"
     */
    Strings["nameOfWeekday"] = "nameOfWeekday";
    /**
     * @description Aria label text of due date picker
     * @default "Select due date"
     */
    Strings["templateWizardTemplateDueOnDateAriaLabel"] = "templateWizardTemplateDueOnDateAriaLabel";
    /**
     * @description Title text in change template status dialog for enabling the template
     * @default "Enable request"
     */
    Strings["templateEnableTemplateText"] = "templateEnableTemplateText";
    /**
     * @description Title text in change template status dialog for disabling the template
     * @default "Disable request"
     */
    Strings["templateDisableTemplateText"] = "templateDisableTemplateText";
    /**
     * @description Title text in delete request dialog for delete the request
     * @default "Delete request"
     */
    Strings["deleteRequestText"] = "deleteRequestText";
    /**
     * @description Description text in change template status dialog for enabling the template with title {{templateDefinitionTitle}}
     * @default "Are you sure you want to enable the request '{{templateDefinitionTitle}}'?"
     */
    Strings["templateEnableTemplateDescriptionText"] = "templateEnableTemplateDescriptionText";
    /**
     * @description Title text in change template status dialog for disabling the template with title {{templateDefinitionTitle}}
     * @default "Are you sure you want to disable the request {{templateDefinitionTitle}}? This request won't be able to be used after it's disabled, but previous related updates won't be affected."
     */
    Strings["templateDisableTemplateDescriptionText"] = "templateDisableTemplateDescriptionText";
    /**
     * @description Description text in delete request dialog for deleting the request with title {{definitionTitle}}
     * @default "Are you certain that you want to delete the request titled {{definitionTitle}}?"
     */
    Strings["deleteRequestDescriptionText"] = "deleteRequestDescriptionText";
    /**
     * @description Highlight description text in delete request dialog for deleting the request with title {{definitionTitle}}
     * @default "Please note that once this request is deleted, all associated updates will be permanently removed and cannot be retrieved."
     */
    Strings["deleteRequestDescriptionHighlightText"] = "deleteRequestDescriptionHighlightText";
    /**
     * @description Description text in delete request dialog for request delete in progress
     * @default "Due to the large amount of data associated with this request, the deletion process may take some time. Please check back later for the results of the deletion."
     */
    Strings["requestDeleteInProgressDescriptionText"] = "requestDeleteInProgressDescriptionText";
    /**
     * @description The loading text of changing template status
     * @default "Updating request status..."
     */
    Strings["templateChangeStatusLoadingText"] = "templateChangeStatusLoadingText";
    /**
     * @description The loading text of delete request
     * @default "Deleting request..."
     */
    Strings["deleteRequestLoadingText"] = "deleteRequestLoadingText";
    /**
     * @description The placeholder text of people picker input
     * @default "Enter names here"
     */
    Strings["peoplePickerPlaceholder"] = "peoplePickerPlaceholder";
    /**
     * @description The placeholder text of writer people picker input in app
     * @default "Enter name, email or team"
     */
    Strings["peoplePickerPlaceholderWriterInApp"] = "peoplePickerPlaceholderWriterInApp";
    /**
     * @description The placeholder text of viewer people picker input in app
     * @default "Enter name or email"
     */
    Strings["peoplePickerPlaceholderViewerInApp"] = "peoplePickerPlaceholderViewerInApp";
    /**
     * @description The placeholder text of people picker input in chat
     * @default "Enter name or email"
     */
    Strings["peoplePickerPlaceholderInChat"] = "peoplePickerPlaceholderInChat";
    /**
     * @description The placeholder text of people picker input in channel
     * @default "Enter name, email or tag"
     */
    Strings["peoplePickerPlaceholderInChannel"] = "peoplePickerPlaceholderInChannel";
    /**
     * @description The placeholder text of people picker input with types
     * @default "Enter {{types, list(style: long; type: disjunction)}}"
     */
    Strings["peoplePickerPlaceholderWithTypes"] = "peoplePickerPlaceholderWithTypes";
    /**
     *
     * @default ""
     * @argument name : "name"
     * @argument email : "email"
     * @argument group : "team"
     * @argument tag : "tag"
     */
    Strings["peoplePickerPlaceholderType"] = "peoplePickerPlaceholderType";
    /**
     * @description The aria label text of error message label of people picker input
     * @default "People is required"
     */
    Strings["peoplePickerRequiredAriaLabel"] = "peoplePickerRequiredAriaLabel";
    /**
     * @description The aria label text of suggestion callout of people picker input
     * @default "Suggestions available"
     */
    Strings["peoplePickerSuggestionAriaLabel"] = "peoplePickerSuggestionAriaLabel";
    /**
     * @description The no result found text of suggestion callout of people picker input
     * @default "No results found"
     */
    Strings["peoplePickerNoResultText"] = "peoplePickerNoResultText";
    /**
     * @description The suggestion callout header of people picker input
     * @default "Suggestions"
     */
    Strings["peoplePickerSuggestionHeaderText"] = "peoplePickerSuggestionHeaderText";
    /**
     * @description The item in people picker dropdown, selecting it means select everyone in current chat or group context
     * @default "Everyone in this group"
     */
    Strings["peoplePickerEveryoneItemText"] = "peoplePickerEveryoneItemText";
    /**
     * @description The text of publishing request
     * @default "Publishing your request"
     */
    Strings["requestPublishingMessage"] = "requestPublishingMessage";
    /**
     * @description The text of published request
     * @default "Your request is successfully published"
     */
    Strings["requestPublishedText"] = "requestPublishedText";
    /**
     * @description The message text of published request
     * @default "You’ll start receiving updates soon. To manage your request, go to ”Manage requests” list in homepage"
     */
    Strings["requestPublishedMessage"] = "requestPublishedMessage";
    /**
     * @description The text of action button for published request
     * @default "Return to homepage"
     */
    Strings["requestPublishedActionText"] = "requestPublishedActionText";
    /**
     * @description The button text indicating create template from scratch, first word is an action
     * @default "Start from blank"
     */
    Strings["startFromScratchButtonText"] = "startFromScratchButtonText";
    /**
     * @description The title of popular template list
     * @default "Start with a popular template"
     */
    Strings["recommendTemplateListTitle"] = "recommendTemplateListTitle";
    /**
     * @description The text of button for viewing more templates
     * @default "View more"
     */
    Strings["templateListViewMoreButtonText"] = "templateListViewMoreButtonText";
    /**
     * @description The error message show in template title input when it's empty
     * @default "Request title is required"
     */
    Strings["templateTitleRequired"] = "templateTitleRequired";
    /**
     * @description The header text of submit report list
     * @default "Needing your updates"
     */
    Strings["submitReportListHeader"] = "submitReportListHeader";
    /**
     *
     * @default ""
     * @argument Ongoing : "Ongoing"
     * @argument Overdue : "Overdue"
     */
    Strings["occurrenceStatus"] = "occurrenceStatus";
    /**
     * @description The hint text of auto saved update draft
     * @default "Auto saved on this device"
     */
    Strings["autoSavedHint"] = "autoSavedHint";
    /**
     * @description The title of submitted update
     * @default "Well done! You’ve successfully submitted an update."
     */
    Strings["submittedTitle"] = "submittedTitle";
    /**
     * @description The message of submitted update
     * @default "You can find all your submissions in ”Submitted” tab in homepage."
     */
    Strings["submittedMessage"] = "submittedMessage";
    /**
     * @description Due time of occurrence. {Locked=$t(friendlyDateAndTime)}
     * @default "Due $t(friendlyDateAndTime)"
     */
    Strings["dueTimeText"] = "dueTimeText";
    /**
     * @description datetime format, such as Mar 7, 2022.{Locked}
     * @default "{{date, datetime(dateStyle: medium)}}"
     */
    Strings["dueTimeDate"] = "dueTimeDate";
    /**
     * @description The format of date and time
     * @default "{{date, friendlydate}} at {{date, dateTime(timeStyle: short)}}"
     */
    Strings["friendlyDateAndTime"] = "friendlyDateAndTime";
    /**
     * @description Text for enabled Occurrence status
     * @default "Active"
     */
    Strings["newOccurrenceEnableStatus"] = "newOccurrenceEnableStatus";
    /**
     * @description The label for a input text filed to set the report (forms) title
     * @default "Update title"
     */
    Strings["reportTitleLabel"] = "reportTitleLabel";
    /**
     * @description Text displayed user names when user names less than three. {Locked}
     * @default "{{val, list}}"
     */
    Strings["userDisplayNamesList"] = "userDisplayNamesList";
    /**
     *
     * @default ""
     * @argument one : "{{count}} other"
     * @argument two : "{{count}} others"
     * @argument few : "{{count}} others"
     * @argument many : "{{count}} others"
     * @argument other : "{{count}} others"
     */
    Strings["userDisplayNamesOther"] = "userDisplayNamesOther";
    /**
     *
     * @default ""
     * @argument zero : "{{period}}"
     * @argument one : "{{period}}, and {{count}} more period"
     * @argument two : "{{period}}, and {{count}} more periods"
     * @argument few : "{{period}}, and {{count}} more periods"
     * @argument many : "{{period}}, and {{count}} more periods"
     * @argument other : "{{period}}, and {{count}} more periods"
     */
    Strings["moreSelectedPeriod"] = "moreSelectedPeriod";
    /**
     * @description Text displayed when there is no report for current occurrence.
     * @default "No update received"
     */
    Strings["noReportReceived"] = "noReportReceived";
    /**
     * @description Text displayed when the report definition is no due date.
     * @default "Available at any time"
     */
    Strings["noDueDate"] = "noDueDate";
    /**
     * @description Text displayed for the due rule of daily reportdefinition with interval is 1
     * @default "Due every day at {{time,dateTime(timeStyle: short)}}"
     */
    Strings["reportDefinitionInfoDueDailyWithIntervalEquals1"] = "reportDefinitionInfoDueDailyWithIntervalEquals1";
    /**
     * @description Text displayed for the due rule of daily reportdefinition with interval is greater than 1
     * @default "Due every {{interval}} days at {{time,dateTime(timeStyle: short)}}"
     */
    Strings["reportDefinitionInfoDueDailyWithIntervalGreaterThan1"] = "reportDefinitionInfoDueDailyWithIntervalGreaterThan1";
    /**
     * @description Text displayed for the due rule of weekly reportdefinition in continuous dates with interval is 1
     * @default "Due every {{dateStart,weekday}} through {{dateEnd,weekday}} at {{time,dateTime(timeStyle: short)}}"
     */
    Strings["reportDefinitionInfoDueWeeklyInContinuousDatesWithIntervalEquals1"] = "reportDefinitionInfoDueWeeklyInContinuousDatesWithIntervalEquals1";
    /**
     * @description Text displayed for the due rule of weekly reportdefinition in discontinuous dates with interval is 1
     * @default "Due every {{date,weekday}} at {{time,dateTime(timeStyle: short)}}"
     */
    Strings["reportDefinitionInfoDueWeeklyInDiscontinuousDatesWithIntervalEquals1"] = "reportDefinitionInfoDueWeeklyInDiscontinuousDatesWithIntervalEquals1";
    /**
     * @description Text displayed for the due rule of weekly reportdefinition in discontinuous dates with interval is greater than 1
     * @default "Due every {{interval}} weeks on {{date,weekday}} at {{time,dateTime(timeStyle: short)}}"
     */
    Strings["reportDefinitionInfoDueWeeklyInDiscontinuousDatesWithIntervalGreaterThan1"] = "reportDefinitionInfoDueWeeklyInDiscontinuousDatesWithIntervalGreaterThan1";
    /**
     * @description Text displayed for the due rule of monthly reportdefinition with interval is 1
     * @default "Due every month on day {{date,dayofmonth}} at {{time,dateTime(timeStyle: short)}}"
     */
    Strings["reportDefinitionInfoDueMonthlyWithIntervalEquals1"] = "reportDefinitionInfoDueMonthlyWithIntervalEquals1";
    /**
     * @description Text displayed for the due rule of monthly reportdefinition with interval is greater than 1
     * @default "Due every {{interval}} months on day {{date,dayofmonth}} at {{time,dateTime(timeStyle: short)}}"
     */
    Strings["reportDefinitionInfoDueMonthlyWithIntervalGreaterThan1"] = "reportDefinitionInfoDueMonthlyWithIntervalGreaterThan1";
    /**
     * @description Description text for request detail page, first word is an object
     * @default "Request details"
     */
    Strings["taskModuleRequestDetailPageDescription"] = "taskModuleRequestDetailPageDescription";
    /**
     * @description announcement to be made when a column has been sorted in ascending order. {{column}} will be replaced by a column name
     * @default "Sorted based on {{column}} in ascending order"
     */
    Strings["ascendingColumnAriaLabel"] = "ascendingColumnAriaLabel";
    /**
     * @description announcement to be made when a column has been sorted in descending order. {{column}} will be replaced by a column name
     * @default "Sorted based on {{column}} in descending order"
     */
    Strings["descendingColumnAriaLabel"] = "descendingColumnAriaLabel";
    /**
     * @description Aria label for sidebar toggle
     * @default "Toggle sidebar"
     */
    Strings["sidebarToggleAriaLabel"] = "sidebarToggleAriaLabel";
    /**
     * @description The aria label text of people picker input to required receiver
     * @default "Viewers is required"
     */
    Strings["receiverRequiredAriaLabel"] = "receiverRequiredAriaLabel";
    /**
     * @description The aria label text of title input is required
     * @default "Update title is required"
     */
    Strings["titleRequiredAriaLabel"] = "titleRequiredAriaLabel";
    /**
     * @description The header for general updates
     * @default "General updates"
     */
    Strings["defaultOccurrenceHeader"] = "defaultOccurrenceHeader";
    /**
     * @description Label for file attachments
     * @default "Attachments"
     */
    Strings["fileAttachmentsLabel"] = "fileAttachmentsLabel";
    /**
     * @description Text of add attachment button
     * @default "Add attachment"
     */
    Strings["attachmentControlAddButtonText"] = "attachmentControlAddButtonText";
    /**
     * @description Hint text of add attachment button, {{count}} will be replaced by the remaining number of attachments
     * @default "You can add {{count}} more attachments"
     * @argument empty : "You can add {{count}} attachments maximum"
     * @argument full : "You've reached attachment limit"
     */
    Strings["attachmentControlAddButtonHint"] = "attachmentControlAddButtonHint";
    /**
     * @description Header of dialog when failed to add attachment
     * @default "Failed to add attachment"
     */
    Strings["attachmentControlFailureDialogHeader"] = "attachmentControlFailureDialogHeader";
    /**
     * @description Text of discard button in attachment chiclet, {{name}} will be replaced by the attachment name
     * @default "Remove attachment \"{{name}}\""
     */
    Strings["attachmentChicletDiscardButtonText"] = "attachmentChicletDiscardButtonText";
    /**
     * @description Text to show the hint of drop files
     * @default "Drop your files here"
     */
    Strings["attachmentFieldDropHint"] = "attachmentFieldDropHint";
    /**
     * @description Error message when attachments are required
     * @default "Attachments are required"
     */
    Strings["attachmentFieldRequiredErrorMessage"] = "attachmentFieldRequiredErrorMessage";
    /**
     * @description Attachment source name for local
     * @default "Upload from my computer"
     */
    Strings["localAttachmentSourceName"] = "localAttachmentSourceName";
    /**
     * @description Attachment source name for SharePoint
     * @default "Browse Teams and Channels"
     */
    Strings["sharePointAttachmentSourceName"] = "sharePointAttachmentSourceName";
    /**
     * @description Attachment source name for OneDrive
     * @default "OneDrive"
     */
    Strings["oneDriveAttachmentSourceName"] = "oneDriveAttachmentSourceName";
    /**
     * @description Attachment source name for link
     * @default "Attach link"
     */
    Strings["linkAttachmentSourceName"] = "linkAttachmentSourceName";
    /**
     * @description Dialog header for file conflict
     * @default "This file already exists"
     */
    Strings["localAttachmentSourceConflictDialogHeader"] = "localAttachmentSourceConflictDialogHeader";
    /**
     * @description Dialog content for file conflict
     * @default "A file with this name already exists in this folder. What would you like to do?"
     */
    Strings["localAttachmentSourceConflictDialogContent"] = "localAttachmentSourceConflictDialogContent";
    /**
     * @description Error message when file is already attached
     * @default "File is already attached"
     */
    Strings["localAttachmentSourceFileDuplicateErrorMessage"] = "localAttachmentSourceFileDuplicateErrorMessage";
    /**
     * @description Error message when file is empty
     * @default "File is empty"
     */
    Strings["localAttachmentSourceFileEmptyErrorMessage"] = "localAttachmentSourceFileEmptyErrorMessage";
    /**
     * @description Label for text in link attachment source
     * @default "Name to display"
     */
    Strings["linkAttachmentSourceTextLabel"] = "linkAttachmentSourceTextLabel";
    /**
     * @description Placeholder for text in link attachment source
     * @default "Name to display"
     */
    Strings["linkAttachmentSourceTextPlaceholder"] = "linkAttachmentSourceTextPlaceholder";
    /**
     * @description Label for address in link attachment source
     * @default "Address"
     */
    Strings["linkAttachmentSourceAddressLabel"] = "linkAttachmentSourceAddressLabel";
    /**
     * @description Placeholder for address in link attachment source
     * @default "Link to an existing file or web page"
     */
    Strings["linkAttachmentSourceAddressPlaceholder"] = "linkAttachmentSourceAddressPlaceholder";
    /**
     * @description Error message when address is invalid
     * @default "Invalid URL"
     */
    Strings["linkAttachmentSourceAddressInvalidErrorMessage"] = "linkAttachmentSourceAddressInvalidErrorMessage";
    /**
     * @description Error message when link is duplicate
     * @default "Please check if you have input the same link or name"
     */
    Strings["linkAttachmentSourceLinkDuplicateErrorMessage"] = "linkAttachmentSourceLinkDuplicateErrorMessage";
    /**
     * @description Description for sharing link in SharePoint attachment source
     * @default "People in your organization with the link can view"
     */
    Strings["sharePointAttachmentSourceSharingLinkDescription"] = "sharePointAttachmentSourceSharingLinkDescription";
    /**
     * @description Text to show the preview unavailable
     * @default "Unable to preview this file"
     */
    Strings["attachmentPreviewUnavailable"] = "attachmentPreviewUnavailable";
    /**
     * @description Dialog title for cancellation double-confirm when leave from templateDefinition page by click close or cancel button
     * @default "Unsaved changes"
     */
    Strings["templateDefinitionCancellationDialogTitle"] = "templateDefinitionCancellationDialogTitle";
    /**
     * @description Dialog content for cancellation double-confirm when leave from templateDefinition page by click close or cancel button
     * @default "Do you want to discard your work or keep editing?"
     */
    Strings["templateDefinitionCancellationDialogContent"] = "templateDefinitionCancellationDialogContent";
    /**
     * @description Hint text to click to change the color and icon
     * @default "Click to change the color and icon"
     */
    Strings["clickToChangeColorAndIcon"] = "clickToChangeColorAndIcon";
    /**
     * @description Label text of choose color section in color icon settings
     * @default "Choose a color"
     */
    Strings["chooseColorLabel"] = "chooseColorLabel";
    /**
     * @description Label text of choose icon section in color icon settings
     * @default "Choose an icon"
     */
    Strings["chooseIconLabel"] = "chooseIconLabel";
    /**
     * @description Label text of use emoji section in color icon settings
     * @default "Use emoji"
     */
    Strings["chooseEmojiLabel"] = "chooseEmojiLabel";
    /**
     * @description Label text of change icon in the tempalte
     * @default "Change the request icon"
     */
    Strings["changeTemplateLabel"] = "changeTemplateLabel";
    /**
     *
     * @default ""
     * @argument Purple : "Purple"
     * @argument DarkOrange : "Dark orange"
     * @argument LightBlue : "Light blue"
     * @argument Red : "Red"
     * @argument DarkPink : "Dark pink"
     * @argument DarkGreen : "Dark green"
     */
    Strings["colorName"] = "colorName";
    /**
     *
     * @default ""
     * @argument DefaultTemplateIcon : "Default template"
     * @argument DailyReport : "Daily report"
     * @argument WeeklyReport : "Weekly report"
     * @argument MonthlyReport : "Monthly report"
     * @argument ProjectProgressReport : "Project progress report"
     * @argument BuildingRetail : "Building retail"
     * @argument FacilityChecklist : "Facility checklist"
     * @argument PerformanceReview : "Performance review"
     * @argument WasteAndSustainabilityManagement : "Waste and sustainability management"
     * @argument ShiftHandoff : "Shift handoff"
     * @argument MaintenanceRequest : "Maintenance request"
     * @argument IncidentReport : "Incident report"
     * @argument ClipboardTextEditFilled : "Clipboard text edit filled"
     * @argument ClipboardTextEdit : "Clipboard text edit"
     * @argument TextBulletList : "Text bullet list"
     * @argument NotepadPerson : "Notepad person"
     * @argument BuildingShop : "Building shop"
     * @argument VehicleTruckProfile : "Vehicle truck profile"
     * @argument Broom : "Broom"
     * @argument Backpack : "Backpack"
     * @argument Megaphone : "Megaphone"
     * @argument Cart : "Cart"
     * @argument ClockAlarm : "Clock alarm"
     * @argument Pulse : "Pulse"
     * @argument Production : "Production"
     * @argument Steps : "Steps"
     * @argument SunWithFaceEmoji : "Sun with face"
     * @argument RocketEmoji : "Rocket"
     * @argument SixOclockEmoji : "Six o'clock"
     * @argument DizzyEmoji : "Dizzy"
     * @argument PoliceCarLightEmoji : "Police car light"
     * @argument MemoEmoji : "Memo"
     * @argument StarEmoji : "Star"
     * @argument ScrollEmoji : "Scroll"
     * @argument SoftIceCreamEmoji : "Soft ice cream"
     * @argument ShortCakeEmoji : "Short cake"
     * @argument GreenAppleEmoji : "Green apple"
     * @argument AppleEmoji : "Apple"
     * @argument CherriesEmoji : "Cherries"
     * @argument BurgerEmoji : "Burger"
     * @argument CakeEmoji : "Cake"
     * @argument SwanEmoji : "Swan"
     * @argument CatFaceEmoji : "Cat face"
     * @argument PottedPlantEmoji : "Potted plant"
     * @argument BellEmoji : "Bell"
     * @argument MilitaryMedalEmoji : "Military medal"
     * @argument TelephoneEmoji : "Telephone"
     * @argument TelephoneReceiverEmoji : "Telephone receiver"
     * @argument PartyPopperEmoji : "Party popper"
     * @argument BalloonEmoji : "Balloon"
     * @argument PushpinEmoji : "Pushpin"
     * @argument ArtistPaletteEmoji : "Artist palette"
     * @argument RingedPlanetEmoji : "Ringed planet"
     * @argument SnowflakeEmoji : "Snowflake"
     * @argument GlobeWithMeridiansEmoji : "Globe with meridians"
     * @argument HighSpeedTrainEmoji : "High-speed train"
     * @argument BullseyeEmoji : "Bullseye"
     * @argument ShieldEmoji : "Shield"
     * @argument SmilingFaceWithSmilingEyesEmoji : "Smiling face with smiling eyes"
     * @argument SpiralNotepadEmoji : "Spiral notepad"
     * @argument TeddyBearEmoji : "Teddy bear"
     * @argument NineOclockEmoji : "Nine o'clock"
     * @argument BooksEmoji : "Books"
     * @argument ChartIncreasingEmoji : "Chart increasing"
     * @argument ReceiptEmoji : "Receipt"
     * @argument CalendarEmoji : "Calendar"
     * @argument PartyingFaceEmoji : "Partying face"
     * @argument PageFacingUpEmoji : "Page facing up"
     * @argument NecktieEmoji : "Necktie"
     * @argument ManSuperheroEmoji : "Man superhero"
     * @argument PersonRowingBoatEmoji : "Person rowing boat"
     * @argument FourLeafCloverEmoji : "Four leaf clover"
     * @argument ThinkingFaceEmoji : "Thinking face"
     * @argument BriefcaseEmoji : "Briefcase"
     * @argument SlightlySmilingFaceEmoji : "Slightly smiling face"
     * @argument CardIndexEmoji : "Card index"
     * @argument HuggingFaceEmoji : "Hugging face"
     * @argument TelescopeEmoji : "Telescope"
     * @argument SunriseEmoji : "Sunrise"
     * @argument SparklerEmoji : "Sparkler"
     * @argument LadyBeetleEmoji : "Lady beetle"
     * @argument NotebookEmoji : "Notebook"
     * @argument FireExtinguisherEmoji : "Fire extinguisher"
     * @argument BookmarkTabsEmoji : "Bookmark tabs"
     */
    Strings["iconName"] = "iconName";
    /**
     * @description Title for OOBE template list section in the home page
     * @default "New update"
     */
    Strings["OOBETemplateListSectionTitle"] = "OOBETemplateListSectionTitle";
    /**
     * @description Empty message for OOBE template list section in the home page
     * @default "You don't have any OOBE templates"
     */
    Strings["OOBETemplateListSectionEmptyStatusMessage"] = "OOBETemplateListSectionEmptyStatusMessage";
    /**
     * @description Title for write a quick update button
     * @default "Submit a quick update"
     */
    Strings["writeAQuickUpdateButtonTitle"] = "writeAQuickUpdateButtonTitle";
    /**
     * @description Title for template list in see all OOBE template modal
     * @default "Update your work from templates"
     */
    Strings["seeAllOOBETemplateModalListTitle"] = "seeAllOOBETemplateModalListTitle";
    /**
     * @description Coach Mark headline for new edited OOBE template being saved
     * @default "Ready to use"
     */
    Strings["newEditedOOBETemplateCoachMarkHeadline"] = "newEditedOOBETemplateCoachMarkHeadline";
    /**
     * @description Coach Mark content for new edited OOBE template being saved
     * @default "You can reuse it to submit your updates."
     */
    Strings["newEditedOOBETemplateCoachMarkContent"] = "newEditedOOBETemplateCoachMarkContent";
    /**
     * @description Display the total count of members in a Team tag, {{totalNumber}} will be replaced with actual number during service run.
     * @default "{{totalNumber}} people have this tag"
     */
    Strings["teamTagMembersDescription"] = "teamTagMembersDescription";
    /**
     * @description Display the total count of members, {{count}} will be replaced with actual number during service run.
     * @default "{{count}} members"
     * @argument one : "1 member"
     */
    Strings["membersCountDescription"] = "membersCountDescription";
    /**
     * @description Display the total count of members in a list, {{count}} will be replaced with actual number during service run.
     * @default "Members ({{count}})"
     * @argument one : "Member (1)"
     */
    Strings["membersListDescription"] = "membersListDescription";
    /**
     * @description The sign of a team tag card
     * @default "Tag group"
     */
    Strings["teamTagCardSign"] = "teamTagCardSign";
    /**
     * @description Recently submitted an update in this group
     * @default "Recently submitted to this group"
     */
    Strings["definitionUsedInConversationTooltip"] = "definitionUsedInConversationTooltip";
    /**
     * @description Be assigned an update to write in this group
     * @default "assigned this to you in this group"
     */
    Strings["definitionCreatedInConversationTooltip"] = "definitionCreatedInConversationTooltip";
    /**
     * @description The text for submitter option. Indicate the submitter of this definition is specific people
     * @default "Specific people in your organization"
     */
    Strings["templateWizardSubmitterOptionSpecificPeople"] = "templateWizardSubmitterOptionSpecificPeople";
    /**
     * @description The text for submitter option. Indicate the submitter of this definition is anyone in the org
     * @default "People in your organization with the link"
     */
    Strings["templateWizardSubmitterOptionAnyone"] = "templateWizardSubmitterOptionAnyone";
    /**
     * @description The text for submitter option. Indicate the submitter of this definition is anyone in the org
     * @default "People in your organization with the link"
     */
    Strings["templateWizardSubmitterOptionAnyoneShort"] = "templateWizardSubmitterOptionAnyoneShort";
    /**
     * @description The content for anyone submissions coachMark
     * @default "A shareable link will be created after you publish or save this request."
     */
    Strings["templateWizardAnyoneSubmissionsCoachMarkContent"] = "templateWizardAnyoneSubmissionsCoachMarkContent";
    /**
     * @description Label text of template submitters people picker input in template wizard
     * @default "Specify submitters"
     */
    Strings["templateWizardTemplateSpecifyWritersLabel"] = "templateWizardTemplateSpecifyWritersLabel";
    /**
     * @description Header title property of copy link component
     * @default "Copy link"
     */
    Strings["copyLinkHeaderTitle"] = "copyLinkHeaderTitle";
    /**
     * @description Info text after copy link success, {{title}} will be replaced with tempalte title and sliced by specific character counts
     * @default "Link to '{{title}}' copied"
     */
    Strings["copyLinkSuccessInfo"] = "copyLinkSuccessInfo";
    /**
     * @description Text of the link copied info on the top message object on mobile
     * @default "Link copied"
     */
    Strings["LinkCopiedInfo"] = "LinkCopiedInfo";
    /**
     * @description Text of the button to show all upcoming reports to write
     * @default "Upcoming"
     */
    Strings["sceduledTypeUpcoming"] = "sceduledTypeUpcoming";
    /**
     * @description Text of the button to show all overdue reports to write
     * @default "Overdue"
     */
    Strings["sceduledTypeOverdue"] = "sceduledTypeOverdue";
    /**
     * @description Text of the button action to Copy template link
     * @default "Copy request link"
     */
    Strings["copyTemplateLink"] = "copyTemplateLink";
    /**
     * @description Text of sharing link on chat, channel, outlook etc., {{title}} will be replaced with tempalte title
     * @default "Submit an update for this request: {{title}}"
     */
    Strings["textShowingOnShareLink"] = "textShowingOnShareLink";
    /**
     * @description The text for link permission setting displayed on copy component. Indicate the submitter of this definition is anyone in the org
     * @default "Anyone in your organization can submit"
     */
    Strings["linkPermissionSettingAnyoneSubmitter"] = "linkPermissionSettingAnyoneSubmitter";
    /**
     * @description The text for link permission setting displayed on copy component. Indicate the submitter of this definition is specific people
     * @default "Assigned submitters can submit"
     */
    Strings["linkPermissionSettingSpecificSubmitter"] = "linkPermissionSettingSpecificSubmitter";
    /**
     * @description The coach mark header text of more actions button on template management list
     * @default "Delete & Duplicate Request from here!"
     */
    Strings["templateManagementListMoreButtonCoachMarkHeader"] = "templateManagementListMoreButtonCoachMarkHeader";
    /**
     * @description The coach mark content text of more actions button on template management list
     * @default "Delete the request that is no longer needed. Duplicate the request to easily create a new one."
     */
    Strings["templateManagementListMoreButtonCoachMarkContent"] = "templateManagementListMoreButtonCoachMarkContent";
    /**
     * @description Title Text of the create template success modal
     * @default "Published!"
     */
    Strings["createTemplateSuccessModalTitle"] = "createTemplateSuccessModalTitle";
    /**
     * @description Description Text of the create template success modal
     * @default "This request is ready to use. You can copy the link now to share it with others or later when you're ready."
     */
    Strings["createTemplateSuccessModalDescription"] = "createTemplateSuccessModalDescription";
    /**
     * @description Text to show unread overdue updates count, {{count}} will be replaced by new count
     * @default "{{count}} new"
     */
    Strings["overdueNumberNewCountString"] = "overdueNumberNewCountString";
    /**
     * @description Text to show total overdue updates count, {{count}} will be replaced by total count
     * @default "Total {{count}} overdue updates"
     * @argument one : "Total 1 overdue update"
     */
    Strings["overdueNumberTotalCountString"] = "overdueNumberTotalCountString";
    /**
     * @description In error description, if the disable user list is unkonwn, it would show this to replace the detail user name
     * @default "Some users"
     */
    Strings["unknownUserList"] = "unknownUserList";
    /**
     * @description report liked title
     * @default "Likes"
     */
    Strings["reportLikedTitle"] = "reportLikedTitle";
    /**
     * @description Text displayed to instruct user to select a due rule option for reportdefinition
     * @default "Set due date and recurrence"
     */
    Strings["dueDateLabel"] = "dueDateLabel";
    /**
     * @description Aria label for due rule option dropdown
     * @default "Select due date"
     */
    Strings["dueDateAriaLabel"] = "dueDateAriaLabel";
    /**
     *
     * @default ""
     * @argument None : "$t(noDueDate)"
     * @argument OneTime : "One time"
     * @argument EveryWeekday : "Every weekday (Mon-Fri)"
     * @argument Daily : "Daily"
     * @argument Weekly : "Weekly"
     * @argument Monthly : "Monthly"
     */
    Strings["dueRuleOption"] = "dueRuleOption";
    /**
     * @description Text for description in reminder modal
     * @default "Prompt submission from people below via Teams notification."
     */
    Strings["reminderDescription"] = "reminderDescription";
    /**
     * @description The header text of the list of unsubmitted writers
     * @default "Unsubmitted"
     */
    Strings["reminderListHeader"] = "reminderListHeader";
    /**
     * @description Text for action button click to send reminder
     * @default "Send reminder"
     */
    Strings["reminderButton"] = "reminderButton";
    /**
     * @description The message shows when a reminder sent successfully
     * @default "The reminder notification has been sent!"
     */
    Strings["remindSuccess"] = "remindSuccess";
    /**
     * @description Text displayed when a reminder notification was sent recently. {{latestReminderSender}} and {{latestReminderTime, relativeminutetime}} will be replaced by corresponding vars. {{latestReminderTime, relativeminutetime}} is an adverbial of time, e.g. '5 minutes ago', 'in 5 minutes'
     * @default "A reminder notification was sent by {{latestReminderSender}} {{latestReminderTime, relativeminutetime}}."
     */
    Strings["reminderBeSentRecently"] = "reminderBeSentRecently";
    /**
     * @description Text for the tooltip of the reminder button when a reminder notification was sent recently. '
' is the linebreak which should be kept unchanged in all locales. {{waitingReminderTime, relativeminutetime}} is an adverbial of future time, e.g. 'in 5 minutes'
     * @default "The last reminder is still effective.\nCome back {{waitingReminderTime, relativeminutetime}} for another reminder."
     */
    Strings["reminderButtontTooltip"] = "reminderButtontTooltip";
    /**
     * @description The message shows when all submitters have submitted.
     * @default "All submitters have already submitted their updates."
     */
    Strings["noUnsubmittedWriter"] = "noUnsubmittedWriter";
    /**
     * @description Text for tooltip, let the screen reader to read the tooltip
     * @default "Tooltip: {{content}}"
     */
    Strings["tooltip"] = "tooltip";
    /**
     * @description Coach Mark headline for feedback icon button, let user know they can provide feedback
     * @default "Provide your feedback"
     */
    Strings["FeedbackIconButtonCoachMarkHeadline"] = "FeedbackIconButtonCoachMarkHeadline";
    /**
     * @description Coach Mark content for feedback icon button, let user know they can provide feedback
     * @default "You are welcomed to provide your feedback to make Updates a better app."
     */
    Strings["FeedbackIconButtonCoachMarkContent"] = "FeedbackIconButtonCoachMarkContent";
    /**
     * @description Text for go to today button in date picker
     * @default "Go to today"
     */
    Strings["datePickerGoToToday"] = "datePickerGoToToday";
    /**
     * @description Aria label for the previous month button in DatePicker
     * @default "Previous month"
     */
    Strings["datePickerPrevMonthAriaLabel"] = "datePickerPrevMonthAriaLabel";
    /**
     * @description Aria label for the next month button in DatePicker
     * @default "Next month"
     */
    Strings["datePickerNextMonthAriaLabel"] = "datePickerNextMonthAriaLabel";
    /**
     * @description Aria label for the previous year button in DatePicker
     * @default "Previous year"
     */
    Strings["datePickerPrevYearAriaLabel"] = "datePickerPrevYearAriaLabel";
    /**
     * @description Aria label for the next year button in DatePicker
     * @default "Next year"
     */
    Strings["datePickerNextYearAriaLabel"] = "datePickerNextYearAriaLabel";
    /**
     * @description Aria label for the previous year range button in DatePicker
     * @default "Previous year range"
     */
    Strings["datePickerPrevYearRangeAriaLabel"] = "datePickerPrevYearRangeAriaLabel";
    /**
     * @description Aria label for the next year range button in DatePicker
     * @default "Next year range"
     */
    Strings["datePickerNextYearRangeAriaLabel"] = "datePickerNextYearRangeAriaLabel";
    /**
     * @description Aria label for the month picker in DatePicker, {0} will be replaced by the current year
     * @default "{0}, select to change the year"
     */
    Strings["datePickerMonthPickerHeaderAriaLabel"] = "datePickerMonthPickerHeaderAriaLabel";
    /**
     * @description Aria label for the year picker in DatePicker, {0} will be replaced by the current year
     * @default "{0}, select to change the month"
     */
    Strings["datePickerYearPickerHeaderAriaLabel"] = "datePickerYearPickerHeaderAriaLabel";
    /**
     * @description Aria label for the close button in DatePicker
     * @default "Close"
     */
    Strings["datePickerCloseButtonAriaLabel"] = "datePickerCloseButtonAriaLabel";
    /**
     * @description Format string for week number in DatePicker, {0} will be replaced by the week number
     * @default "Week number {0}"
     */
    Strings["datePickerWeekNumberFormatString"] = "datePickerWeekNumberFormatString";
    /**
     * @description Format string for selected date in DatePicker, {0} will be replaced by the selected date
     * @default "Selected date {0}"
     */
    Strings["datePickerSelectedDateFormatString"] = "datePickerSelectedDateFormatString";
    /**
     * @description Format string for today date in DatePicker, {0} will be replaced by the today date
     * @default "Today's date {0}"
     */
    Strings["datePickerTodayDateFormatString"] = "datePickerTodayDateFormatString";
    /**
     * @description Aria label for the marked day in DatePicker
     * @default "Day marked"
     */
    Strings["datePickerDayMarkedAriaLabel"] = "datePickerDayMarkedAriaLabel";
    /**
     *
     * @default ""
     * @argument OK : "OK"
     * @argument Cancel : "Cancel"
     * @argument Close : "Close"
     * @argument Retry : "Retry"
     * @argument Remove : "Remove"
     * @argument Copy : "Copy"
     * @argument Download : "Download"
     * @argument ViewOriginalFile : "View original file"
     * @argument Bold : "Bold"
     * @argument Italic : "Italic"
     * @argument Underline : "Underline"
     * @argument Strikethrough : "Strikethrough"
     * @argument BackgroundColor : "Background color"
     * @argument TextColor : "Text color"
     * @argument FontSize : "Font size"
     * @argument BulletedList : "Bulleted list"
     * @argument NumberedList : "Numbered list"
     * @argument DecreaseIndent : "Decrease indent"
     * @argument IncreaseIndent : "Increase indent"
     * @argument InsertLink : "Insert link"
     * @argument InsertImage : "Insert image"
     * @argument InsertFile : "Insert file"
     * @argument InsertTable : "Insert table"
     * @argument Code : "Code"
     * @argument ClearFormat : "Clear format"
     */
    Strings["richTextFieldButton"] = "richTextFieldButton";
    /**
     *
     * @default ""
     * @argument Small : "Small"
     * @argument Medium : "Medium"
     * @argument Large : "Large"
     */
    Strings["richTextFieldFontSize"] = "richTextFieldFontSize";
    /**
     *
     * @default ""
     * @argument Removal : "No highlight"
     * @argument KobiRed : "Kobi red"
     * @argument RoseBud : "Rose bud"
     * @argument Goldenrod : "Goldenrod"
     * @argument Primrose : "Primrose"
     * @argument Mantis : "Mantis"
     * @argument RegentStBlue : "Regent St. blue"
     * @argument PeriwinkleGray : "Periwinkle gray"
     * @argument PaleRose : "Pale rose"
     */
    Strings["richTextFieldBackgroundColor"] = "richTextFieldBackgroundColor";
    /**
     *
     * @default ""
     * @argument Removal : "Automatic"
     * @argument Red : "Red"
     * @argument TuscanOrange : "Tuscan orange"
     * @argument Sunglow : "Sunglow"
     * @argument Pear : "Pear"
     * @argument Eucalyptus : "Eucalyptus"
     * @argument FadedJade : "Faded jade"
     * @argument FunBlue : "Fun blue"
     * @argument TyrianPurple : "Tyrian purple"
     */
    Strings["richTextFieldTextColor"] = "richTextFieldTextColor";
    /**
     * @description Title for insert link in rich text field
     * @default "Insert Link"
     */
    Strings["richTextFieldInsertLinkTitle"] = "richTextFieldInsertLinkTitle";
    /**
     * @description Label for web address (URL) field in insert link in rich text field
     * @default "Web address (URL)"
     */
    Strings["richTextFieldInsertLinkUrl"] = "richTextFieldInsertLinkUrl";
    /**
     * @description Label for display as (text) field in insert link in rich text field
     * @default "Display as"
     */
    Strings["richTextFieldInsertLinkDisplayAs"] = "richTextFieldInsertLinkDisplayAs";
    /**
     * @description Title for insert table in rich text field when row and column count is selected, {{size.rows}} and {{size.cols}} will be replaced by the row and column count
     * @default "Insert {{size.rows}}x{{size.cols}} table"
     * @argument default : "Insert table"
     */
    Strings["richTextFieldInsertTableTitle"] = "richTextFieldInsertTableTitle";
    /**
     * @description Text for message when file content is not available in rich text field
     * @default "The file content is not available."
     */
    Strings["richTextFieldMessageContentUnavailable"] = "richTextFieldMessageContentUnavailable";
    /**
     * @description Default file stem for image file in rich text field
     * @default "image"
     */
    Strings["richTextFieldDefaultImageFileStem"] = "richTextFieldDefaultImageFileStem";
    /**
     * @description Text for other option in form choice questions
     * @default "Other"
     */
    Strings["formOtherText"] = "formOtherText";
    /**
     * @description Default placeholder text for form questions
     * @default "Enter your response"
     */
    Strings["formDefaultPlaceholder"] = "formDefaultPlaceholder";
    /**
     * @description Default placeholder text for form dropdown questions
     * @default "Select your response"
     */
    Strings["formDefaultDropdownPlaceholder"] = "formDefaultDropdownPlaceholder";
    /**
     * @description Aria label for form choice questions, {{title}} will be replaced by the question title, {{choice}} will be replaced by the choice
     * @default "{{title}}: {{choice}}"
     */
    Strings["formChoiceAriaLabel"] = "formChoiceAriaLabel";
    /**
     * @description Error message for response length exceeds size limit in form, {{maxLength}} will be replaced by the max length
     * @default "Please enter less than {{maxLength}} characters"
     * @argument RichText : "Please try to shorten the content or choose "Clear Format" option to clear some formatting"
     */
    Strings["formLengthErrorMessage"] = "formLengthErrorMessage";
    /**
     * @description Error message for not filling required field in form
     * @default "This field is required"
     */
    Strings["formRequiredErrorMessage"] = "formRequiredErrorMessage";
    /**
     * @description Error message for not filling a number for number fields in form
     * @default "Please enter a number"
     * @argument GreaterThan : "Please enter a number greater than {{min}}"
     * @argument GreaterThanOrEqualTo : "Please enter a number greater than or equal to {{min}}"
     * @argument LessThan : "Please enter a number less than {{max}}"
     * @argument LessThanOrEqualTo : "Please enter a number less than or equal to {{max}}"
     * @argument EqualTo : "Please enter a number equal to {{value}}"
     * @argument NotEqualTo : "Please enter a number not equal to {{value}}"
     * @argument Between : "Please enter a number between {{min}} and {{max}}"
     * @argument NotBetween : "Please enter a number not between {{min}} and {{max}}"
     */
    Strings["formNumberErrorMessage"] = "formNumberErrorMessage";
    /**
     * @description Error message for uploading files in rich text field in form
     * @default "File upload failed, please try again"
     */
    Strings["formRichTextFilesErrorMessage"] = "formRichTextFilesErrorMessage";
    /**
     *
     * @default ""
     * @argument Active : "Editing question "{{title}}". Press Tab and Shift+Tab to navigate between questions. Press Escape or Space to exit editing. Press arrow keys to navigate between options."
     * @argument Inactive : "Question "{{title}}". Press Tab and Shift+Tab to navigate between questions. Press Enter or Space to edit."
     */
    Strings["formQuestionHint"] = "formQuestionHint";
    /**
     *
     * @default ""
     * @argument Add : "Add question"
     * @argument Copy : "Copy question"
     * @argument Delete : "Delete question"
     * @argument MoveUp : "Move question up"
     * @argument MoveDown : "Move question down"
     */
    Strings["formQuestionAction"] = "formQuestionAction";
    /**
     * @description Default placeholder text for mocked field in form. This a reference to formDefaultPlaceholder, keep it and don't translate it. {Locked}
     * @default "$t(formDefaultPlaceholder)"
     * @argument Dropdown : "$t(formDefaultDropdownPlaceholder)"
     */
    Strings["formQuestionMockedFieldDefaultPlaceholder"] = "formQuestionMockedFieldDefaultPlaceholder";
    /**
     *
     * @default ""
     * @argument ShortText : "Short text"
     * @argument MultilineText : "Long text"
     * @argument Number : "Number"
     * @argument RichText : "Rich text"
     * @argument MultipleChoice : "Multiple choice"
     * @argument SingleChoice : "Single choice"
     * @argument Dropdown : "Dropdown"
     * @argument Date : "Date"
     */
    Strings["formQuestionDisplayTypeOption"] = "formQuestionDisplayTypeOption";
    /**
     * @description Text for new question title in form
     * @default "Question"
     */
    Strings["formQuestionNewTitle"] = "formQuestionNewTitle";
    /**
     * @description Text for question title in form
     * @default "Title"
     */
    Strings["formQuestionTitle"] = "formQuestionTitle";
    /**
     * @description Text for question subtitle (or subheading) in form
     * @default "Subtitle (optional)"
     */
    Strings["formQuestionSubtitle"] = "formQuestionSubtitle";
    /**
     * @description Text for question required setting toggle in form
     * @default "Required"
     */
    Strings["formQuestionRequired"] = "formQuestionRequired";
    /**
     * @description Text for question restriction setting toggle in form
     * @default "Restriction"
     */
    Strings["formQuestionRestriction"] = "formQuestionRestriction";
    /**
     * @description Text for choice question shuffle setting toggle in form
     * @default "Shuffle"
     */
    Strings["formQuestionShuffle"] = "formQuestionShuffle";
    /**
     *
     * @default ""
     * @argument Add : "Add option"
     * @argument AddOther : "Add "other" option"
     * @argument Delete : "Delete option"
     * @argument MoveUp : "Move option up"
     * @argument MoveDown : "Move option down"
     */
    Strings["formChoiceAction"] = "formChoiceAction";
    /**
     * @description Default title for new choice in form, {{number}} will be replaced by the choice number, starting from 1
     * @default "Option {{number}}"
     */
    Strings["formChoiceNew"] = "formChoiceNew";
    /**
     * @description Text for other choice in form. This a reference to formOtherText, keep it and don't translate it. {Locked}
     * @default "$t(formOtherText)"
     */
    Strings["formChoiceOther"] = "formChoiceOther";
    /**
     * @description Placeholder text for choice in form
     * @default "Option"
     */
    Strings["formChoicePlaceholder"] = "formChoicePlaceholder";
    /**
     *
     * @default ""
     * @argument GreaterThan : "Greater than"
     * @argument GreaterThanOrEqualTo : "Greater than or equal to"
     * @argument LessThan : "Less than"
     * @argument LessThanOrEqualTo : "Less than or equal to"
     * @argument EqualTo : "Equal to"
     * @argument NotEqualTo : "Not equal to"
     * @argument Between : "Between"
     * @argument NotBetween : "Not between"
     */
    Strings["formRestrictionOption"] = "formRestrictionOption";
    /**
     *
     * @default ""
     * @argument min : "Min"
     * @argument max : "Max"
     * @argument value : "Value"
     */
    Strings["formRestrictionValuePlaceholder"] = "formRestrictionValuePlaceholder";
    /**
     * @description Title for error modal in feedback
     * @default "Submit feedback to Microsoft"
     */
    Strings["feedbackErrorModalTitle"] = "feedbackErrorModalTitle";
    /**
     * @description Text for feedback button (an action to give feedback)
     * @default "Give feedback"
     */
    Strings["buttonTextFeedback"] = "buttonTextFeedback";
    /**
     * @description Title for get help button
     * @default "Get help"
     */
    Strings["getHelpTitle"] = "getHelpTitle";
    /**
     * @description The message shows when the collaborator can't edit the item
     * @default "Only the request owner can edit this item."
     */
    Strings["comanagementSettingBottomHitForCollaborator"] = "comanagementSettingBottomHitForCollaborator";
    /**
     * @description The title text of Updates app task module, it's the name of Updates app.
     * @default "Updates"
     */
    Strings["taskModuleHomeHeaderTitle"] = "taskModuleHomeHeaderTitle";
    /**
     * @description The desc text of Updates app task module.
     * @default "Keep up with your team's work status with data-driven insights"
     */
    Strings["taskModuleHomeHeaderDesc"] = "taskModuleHomeHeaderDesc";
    /**
     * @description TaskModuleHomeSimple rulesettings page submitter label.
     * @default "Who needs to submit this request?"
     */
    Strings["taskModuleHomeSimpleSubmitterLabel"] = "taskModuleHomeSimpleSubmitterLabel";
    /**
     * @description TaskModuleHomeSimple rulesettings page receiver label.
     * @default "Who can view the submissions?"
     */
    Strings["taskModuleHomeSimpleReceiverLabel"] = "taskModuleHomeSimpleReceiverLabel";
    /**
     * @description TaskModuleHomeSimple ruleSettings page comanager label.
     * @default "Who can manage this request?"
     */
    Strings["taskModuleHomeSimpleComanagerLabel"] = "taskModuleHomeSimpleComanagerLabel";
    /**
     *
     * @default ""
     * @argument Designing : "Collect update from my team"
     * @argument Previewing : "Preview"
     */
    Strings["taskModuleCreateRequestTitle"] = "taskModuleCreateRequestTitle";
    /**
     *
     * @default ""
     * @argument EditForm : "1️⃣ Edit form"
     * @argument CustomizeSettings : "2️⃣ Customize settings"
     */
    Strings["taskModuleDesignRequestTitle"] = "taskModuleDesignRequestTitle";
    /**
     * @description The header of the context section in the task module design request page when the request is in a group
     * @default "In this group"
     */
    Strings["taskModuleDesignRequestConversationHeader"] = "taskModuleDesignRequestConversationHeader";
    /**
     * @description The title of the banner in the preview request in conversation page
     * @default "What will happen next?"
     */
    Strings["previewRequestInConversationBannerTitle"] = "previewRequestInConversationBannerTitle";
    /**
     * @description The description of the banner in the preview request in conversation page
     * @default "A card will be sent to the team or chat. Everyone in this group can see and interact with the card, including providing updates, viewing submissions, leaving comments..., depending on their roles."
     */
    Strings["previewRequestInConversationBannerDescription"] = "previewRequestInConversationBannerDescription";
    /**
     * @description The sender of the card in the preview request in conversation page.
     * @default "{{userDisplayName}} via Updates"
     */
    Strings["previewRequestInConversationSender"] = "previewRequestInConversationSender";
    /**
     * @description Title for manage request list section in the manage page
     * @default "Manage my requests"
     */
    Strings["ManageRequestListSectionTitle"] = "ManageRequestListSectionTitle";
    /**
     * @description Empty message for manage request list section in the manage page
     * @default "No request yet."
     */
    Strings["ManageRequestListSectionEmptyStatusMessage"] = "ManageRequestListSectionEmptyStatusMessage";
    /**
     * @description Empty description for manage request list section in the manage page
     * @default "You haven’t created any requests yet. Create a request to collect update from your team."
     */
    Strings["ManageRequestListSectionEmptyStatusDesc"] = "ManageRequestListSectionEmptyStatusDesc";
    /**
     * @description Text for button click to fitler request
     * @default "Request"
     */
    Strings["requestFilterButton"] = "requestFilterButton";
    /**
     * @description Text for button click to fitler submitter
     * @default "Submitter"
     */
    Strings["submitterFilterButton"] = "submitterFilterButton";
    /**
     * @description Text for button click to fitler Date
     * @default "Date"
     */
    Strings["dateFilterButton"] = "dateFilterButton";
    /**
     * @description Text for header of data export dialog
     * @default "Export Data"
     */
    Strings["exportDialogHeader"] = "exportDialogHeader";
    /**
     * @description The message shows when exporting data
     * @default "The updates are being exported, please wait and do not close the pop-up window"
     */
    Strings["exportingDataLabel"] = "exportingDataLabel";
    /**
     * @description The message shows when export success
     * @default "The updates have been exported successfully, please click here to download"
     */
    Strings["exportDataSuccessLabel"] = "exportDataSuccessLabel";
    /**
     * @description The placeholder text of submitter people picker input in filter
     * @default "Enter name or email"
     */
    Strings["peoplePickerPlaceholderSubmitterInFilter"] = "peoplePickerPlaceholderSubmitterInFilter";
    /**
     * @description The text of count of reports after filter
     * @default "{{reportsCount}} submission(s) in total"
     */
    Strings["reportsCountAfterFilter"] = "reportsCountAfterFilter";
    /**
     * @description Default message for friendly DateRange
     * @default ""
     * @argument Today : "Today"
     * @argument Yesterday : "Yesterday"
     * @argument RecentSevenDays : "Recent 7 days"
     * @argument RecentThirtyDays : "Recent 30 days"
     */
    Strings["friendlyDateRangeOption"] = "friendlyDateRangeOption";
    /**
     * @description The text of start time of date range filter
     * @default "From"
     */
    Strings["startDateLabel"] = "startDateLabel";
    /**
     * @description The placeholder of start time of date range filter
     * @default "Select the start date"
     */
    Strings["startDatePlaceholder"] = "startDatePlaceholder";
    /**
     * @description The text of end time of date range filter
     * @default "To"
     */
    Strings["endDateLabel"] = "endDateLabel";
    /**
     * @description The placeholder of end time of date range filter
     * @default "Select the end date"
     */
    Strings["endDatePlaceholder"] = "endDatePlaceholder";
    /**
     * @description Reply to someone
     * @default "Reply to"
     */
    Strings["ReportCommentsReply"] = "ReportCommentsReply";
    /**
     * @description The error message when comment on report.
     * @default "Failed to leave a message. Please try again later."
     */
    Strings["ReportCommentsFailedErrorMessage"] = "ReportCommentsFailedErrorMessage";
    /**
     * @description The error message when the input box has no content.
     * @default "Please type a message to continue."
     */
    Strings["ReportCommentsRequiredErrorMessage"] = "ReportCommentsRequiredErrorMessage";
    /**
     * @description Report comment chat box placeholder message.
     * @default "Type a comment or @mention someone here."
     */
    Strings["ReportCommentsChatBoxPlaceholder"] = "ReportCommentsChatBoxPlaceholder";
    /**
     * @description Report comment title
     * @default "Comments"
     */
    Strings["ReportCommentsTitle"] = "ReportCommentsTitle";
    /**
     * @description Report comment mention box title.
     * @default "People who can access"
     */
    Strings["ReportCommentsMentionTitle"] = "ReportCommentsMentionTitle";
    /**
     * @description Report comment empty mention message.
     * @default "Unable to mention as the person can’t access the update"
     */
    Strings["ReportCommentsEmptyMentionMessage"] = "ReportCommentsEmptyMentionMessage";
    /**
     * @description The text indicating the number of views of a report. {{count}} is the number of views.
     * @default "Read by {{count}}"
     * @argument zero : "0 read"
     */
    Strings["ReadingStatusTitle"] = "ReadingStatusTitle";
    /**
     * @description Coach Mark headline for edit report button, let user know they can edit their update
     * @default "Edit your update"
     */
    Strings["editReportButtonCoachMarkHeadline"] = "editReportButtonCoachMarkHeadline";
    /**
     * @description The label for choose falt iconography
     * @default "Use flat iconography"
     */
    Strings["flatIconChooseLabel"] = "flatIconChooseLabel";
    /**
     * @description The label for use template
     * @default "Use template"
     */
    Strings["useTemplateLabel"] = "useTemplateLabel";
    /**
     * @description Promotional words for Updates app
     * @default "Streamline work reports"
     */
    Strings["updatesAppPromotionalLabel"] = "updatesAppPromotionalLabel";
    /**
     * @description Promotional adjective words for Updates app, {StrBegins='# '}
     * @default "# Time-saving"
     */
    Strings["updatesAppPromotionalAdjectiveLabel1"] = "updatesAppPromotionalAdjectiveLabel1";
    /**
     * @description Promotional adjective words for Updates app, {StrBegins='# '}
     * @default "# Simplified"
     */
    Strings["updatesAppPromotionalAdjectiveLabel2"] = "updatesAppPromotionalAdjectiveLabel2";
    /**
     * @description Promotional adjective words for Updates app, {StrBegins='# '}
     * @default "# Organized"
     */
    Strings["updatesAppPromotionalAdjectiveLabel3"] = "updatesAppPromotionalAdjectiveLabel3";
    /**
     * @description The greeting message when user open the app.
     * @default "{{emoji}} Hi {{userDisplayName}}, ready to collect some updates?"
     */
    Strings["readyCollectUpdatesHelloLabel"] = "readyCollectUpdatesHelloLabel";
    /**
     * @description The greeting message when user comes back to the app.
     * @default "{{emoji}} Hi {{userDisplayName}}, welcome back!"
     */
    Strings["readyCollectUpdatesBackLabel"] = "readyCollectUpdatesBackLabel";
    /**
     * @description The title label of active template list.
     * @default "Active in this group"
     */
    Strings["activeTemplateListLabel"] = "activeTemplateListLabel";
    /**
     * @description The button label text that indicates to collect a work report.
     * @default "Collect updates"
     */
    Strings["collectWorkReportLabel"] = "collectWorkReportLabel";
    /**
     * @description The button label text that indicates to view my work report.
     * @default "View my update"
     */
    Strings["viewMyUpdateButtonLabel"] = "viewMyUpdateButtonLabel";
    /**
     * @description The button label text that indicates to submit my work report.
     * @default "Submit my update"
     */
    Strings["submitMyUpdateButtonLabel"] = "submitMyUpdateButtonLabel";
    /**
     * @description The button label text that indicates to view more detail statistics data.
     * @default "View more details"
     */
    Strings["viewMoreDetailsButtonLabel"] = "viewMoreDetailsButtonLabel";
    /**
     * @description The label for success story learn button
     * @default "Get inspired by other team's success"
     */
    Strings["successStoryLearnLabel"] = "successStoryLearnLabel";
    /**
     * @description The label for success story bye hello
     * @default "Bye, scattered chats. Hello, organized updates!"
     */
    Strings["successStoryByeHelloLabel"] = "successStoryByeHelloLabel";
    /**
     * @description The label for success story introduction
     * @default "How Dragon Gate team streamline their weekly work progress sync with the help of Updates"
     */
    Strings["successStoryByeIntroLabel"] = "successStoryByeIntroLabel";
    /**
     * @description The label for pick template
     * @default "Find a match for your needs"
     */
    Strings["findTemplateLabel"] = "findTemplateLabel";
    /**
     * @description The label for open all templates
     * @default "Explore all templates"
     */
    Strings["exploreAllTemplateLabel"] = "exploreAllTemplateLabel";
    /**
     * @description The label for open Updates personal app
     * @default "Do more in Updates full app!"
     */
    Strings["doMoreInUpdatesLabel"] = "doMoreInUpdatesLabel";
    /**
     * @description The label for open Updates personal app description
     * @default "Write assigned updates, view statistics insights and manage your requests... All in Updates app!"
     */
    Strings["doMoreInUpdatesDescriptionLabel"] = "doMoreInUpdatesDescriptionLabel";
    /**
     * @description The label for visit Updates personal app
     * @default "Visit Updates app"
     */
    Strings["visitUpdatesAppLabel"] = "visitUpdatesAppLabel";
    /**
     * @description The title for write update list
     * @default "Needing your updates"
     */
    Strings["writeUpdateListTitle"] = "writeUpdateListTitle";
    /**
     * @description The label for overdue count
     * @default "{{count}} new overdue"
     */
    Strings["overdueCountLabel"] = "overdueCountLabel";
    /**
     * @description The message for no wanted update
     * @default "Not seeing what you want to update?"
     */
    Strings["noWantedUpdateMessage"] = "noWantedUpdateMessage";
    /**
     * @description The message for write a quick update
     * @default "Write a quick update now!"
     */
    Strings["writeAQuickUpdateMessage"] = "writeAQuickUpdateMessage";
    /**
     * @description Users can click this button to get the whole list
     * @default "Show all"
     */
    Strings["writeUpdateListShowAllButton"] = "writeUpdateListShowAllButton";
    /**
     * @description Title for definition highlight customization model
     * @default "Customize highlight"
     */
    Strings["definitionTileSettingModelTitle"] = "definitionTileSettingModelTitle";
    /**
     * @description Description for definition highlight customization model
     * @default "You can highlight up to 2 number or single-choice questions to quickly preview team member's responses."
     */
    Strings["definitionTileSettingModelDescription"] = "definitionTileSettingModelDescription";
    /**
     * @description Title for question of highlight list
     * @default "Question"
     */
    Strings["definitionTileSettingModelListQuestionTitle"] = "definitionTileSettingModelListQuestionTitle";
    /**
     * @description Title for display of highlight list
     * @default "Display"
     */
    Strings["definitionTileSettingModelListDisplayTitle"] = "definitionTileSettingModelListDisplayTitle";
    /**
     * @description Default item in the list for submission status of current wave
     * @default "Submission status of current wave"
     */
    Strings["definitionTileSettingModelListSubmissionStatusQuestion"] = "definitionTileSettingModelListSubmissionStatusQuestion";
    /**
     * @description Title for submission status of highlight
     * @default "Submission status"
     * @argument general : "Total submission"
     */
    Strings["occurrenceSubmissionStatusTitle"] = "occurrenceSubmissionStatusTitle";
    /**
     * @description Description for members who haven't submitted
     * @default "Members who haven't submitted"
     */
    Strings["occurrenceUnSubmitUserDescription"] = "occurrenceUnSubmitUserDescription";
    /**
     * @description Header for definition tiles list
     * @default "Highlight"
     */
    Strings["definitionTileListHeader"] = "definitionTileListHeader";
    /**
     *
     * @default ""
     * @argument sum : "Total"
     * @argument average : "Average"
     * @argument max : "Maximum input"
     * @argument min : "Minimum input"
     * @argument countby : "Top 2 options selected"
     * @argument percentage : "Percentage"
     */
    Strings["tileEvaluationMethod"] = "tileEvaluationMethod";
    /**
     * @description Header for tile evaluation methods list
     * @default "Display calculation"
     */
    Strings["tileEvaluationMethodListHeader"] = "tileEvaluationMethodListHeader";
    /**
     * @description Remove action for tile
     * @default "Remove this highlight"
     */
    Strings["tileRemoveAction"] = "tileRemoveAction";
    /**
     * @description The label for submitter count
     * @default "{{count}} submitters"
     * @argument one : "1 submitter"
     */
    Strings["submitterCountLabel"] = "submitterCountLabel";
    /**
     * @description The label for viewer count
     * @default "{{count}} viewers"
     * @argument one : "1 viewer"
     */
    Strings["viewerCountLabel"] = "viewerCountLabel";
    /**
     * @description The text indicating the occurrence time. {start} is the start time, {end} is the end time.
     * @default "{{start, datetime(month: short; day: numeric)}} - {{end, datetime(dateStyle: medium)}}"
     */
    Strings["occurrenceTime"] = "occurrenceTime";
    /**
     * @description The text indicating the occurrence time. {start} is the start time.
     * @default "{{start, datetime(dateStyle: medium)}} - Till now"
     */
    Strings["occurrenceTimeTillNow"] = "occurrenceTimeTillNow";
    /**
     * @description The label for template intro tag1
     * @default "Every week"
     */
    Strings["templateIntroTag1"] = "templateIntroTag1";
    /**
     * @description The label for template intro tag2
     * @default "Progress update"
     */
    Strings["templateIntroTag2"] = "templateIntroTag2";
    /**
     * @description The label for template intro tag3
     * @default "8-15 people on team"
     */
    Strings["templateIntroTag3"] = "templateIntroTag3";
    /**
     * @description The label for template introduction
     * @default "Template used by this team"
     */
    Strings["templateIntroLabel"] = "templateIntroLabel";
    /**
     * @description The label for background
     * @default "Background"
     */
    Strings["backgroundLabel"] = "backgroundLabel";
    /**
     * @description The label for background description
     * @default "DragonGate is a product development team consisting of 15 members. Each week, team members are required to update their work status, and the manager is responsible for monitoring the team's progress and managing risks."
     */
    Strings["backgroundDescriptionLabel"] = "backgroundDescriptionLabel";
    /**
     * @description The label for pain point
     * @default "Pain Point"
     */
    Strings["painPointLabel"] = "painPointLabel";
    /**
     * @description The label for pain point title1
     * @default "Time consuming"
     */
    Strings["painPointTitle1"] = "painPointTitle1";
    /**
     * @description The label for pain point title2
     * @default "Scattered reports"
     */
    Strings["painPointTitle2"] = "painPointTitle2";
    /**
     * @description The label for pain point title3
     * @default "Unstructured format"
     */
    Strings["painPointTitle3"] = "painPointTitle3";
    /**
     * @description The label for pain point description1
     * @default "Manager spends extra time chasing members to update their work status."
     */
    Strings["painPointDescription1"] = "painPointDescription1";
    /**
     * @description The label for pain point description2
     * @default "Team members update work status via different channels, making it hard to track."
     */
    Strings["painPointDescription2"] = "painPointDescription2";
    /**
     * @description The label for pain point description3
     * @default "Manager struggles to find key points in each report at a glance."
     */
    Strings["painPointDescription3"] = "painPointDescription3";
    /**
     * @description The label for solution
     * @default "Solution"
     */
    Strings["solutionLabel"] = "solutionLabel";
    /**
     * @description The label for solution description
     * @default "DragonGate team has decided to use a 'Weekly Update' template to collect work reports from team members."
     */
    Strings["solutionDescriptionLabel"] = "solutionDescriptionLabel";
    /**
     * @description The label for solution title1
     * @default "Efficient Management with Auto-Reminder"
     */
    Strings["solutionTitle1"] = "solutionTitle1";
    /**
     * @description The label for solution title2
     * @default "Standardized Formats & Effective Data Statistics"
     */
    Strings["solutionTitle2"] = "solutionTitle2";
    /**
     * @description The label for solution title3
     * @default "Centralized Data Storage"
     */
    Strings["solutionTitle3"] = "solutionTitle3";
    /**
     * @description The label for solution description1
     * @default "Every Friday afternoon, team members will receive a reminder to submit their work updates if they have not done in time."
     */
    Strings["solutionDescription1"] = "solutionDescription1";
    /**
     * @description The label for solution description2
     * @default "Team manager can create a set of standard questions to determine the required content of the work report, so the manager to easily obtain key data statistics and get an overview of the entire team's status."
     */
    Strings["solutionDescription2"] = "solutionDescription2";
    /**
     * @description The label for solution description3
     * @default "All work reports would be consolidated in one place across PC and mobile devices, making it easier to review and comment on team members' work."
     */
    Strings["solutionDescription3"] = "solutionDescription3";
    /**
     * @description The label for try for my team
     * @default "Try for my team"
     */
    Strings["tryForMyTeamButtonLabel"] = "tryForMyTeamButtonLabel";
    /**
     * @description The label for template outcome preview
     * @default "Outcome preview"
     */
    Strings["templateOutcomePreview"] = "templateOutcomePreview";
    /**
     * @description The label for template form preview
     * @default "Template form"
     */
    Strings["templateFormPreview"] = "templateFormPreview";
    /**
     * @description The label for use template button
     * @default "Use this template"
     */
    Strings["useThisTemplateButton"] = "useThisTemplateButton";
    /**
     * @description The label for question index of total
     * @default "Question {{index}} of {{total}}"
     */
    Strings["questionNthofTotal"] = "questionNthofTotal";
    /**
     * @description The label for submitter column name
     * @default "Submitter"
     */
    Strings["reportListSubmitterColumnName"] = "reportListSubmitterColumnName";
    /**
     * @description The label for answer column name
     * @default "Answer"
     */
    Strings["reportListAnswerColumnName"] = "reportListAnswerColumnName";
    /**
     * @description The label for see all button
     * @default "See all"
     */
    Strings["reportListSeeallButton"] = "reportListSeeallButton";
    /**
     * @description The label for empty status title
     * @default "Oops... it's empty in here"
     */
    Strings["listEmptyStatusTitle"] = "listEmptyStatusTitle";
    /**
     * @description The label for empty status message
     * @default "You haven't received any updates yet. Remind team members to submit updates if the due date is close."
     */
    Strings["reportListEmptyStatusMessage"] = "reportListEmptyStatusMessage";
    /**
     * @description The label for list view
     * @default "List view"
     */
    Strings["ReportListViewLabel"] = "ReportListViewLabel";
    /**
     * @description The label for question view
     * @default "Question view"
     */
    Strings["ReportQuestionViewLabel"] = "ReportQuestionViewLabel";
    /**
     * @description The label for Updates app slogan title
     * @default "Get a comprehensive overview of your team’s work status"
     */
    Strings["updatesAppSloganTitle"] = "updatesAppSloganTitle";
    /**
     * @description The label for updates app slogan description
     * @default "Success story “Bye scattered chats. Hello organized updates”"
     */
    Strings["updatesAppSloganDescription"] = "updatesAppSloganDescription";
    /**
     * @description The label for collect updates
     * @default "Get started by collecting updates from your team"
     */
    Strings["collectUpdatesLabel"] = "collectUpdatesLabel";
    /**
     * @description The label for collect updates demo
     * @default "You’ll learn your team’s work status like this..."
     */
    Strings["collectUpdatesDemoLabel"] = "collectUpdatesDemoLabel";
    /**
     * @description Text for received list tab
     * @default "Received"
     */
    Strings["receivedListTab"] = "receivedListTab";
    /**
     * @description Text for submitted list tab
     * @default "Submitted"
     */
    Strings["submittedListTab"] = "submittedListTab";
    /**
     * @description Text for my requests list tab
     * @default "Manage requests"
     */
    Strings["myRequestsListTab"] = "myRequestsListTab";
    /**
     * @description The greeting message when user comes back to the app.
     * @default "{{emoji}} Hi {{userDisplayName}}, welcome to Updates!"
     */
    Strings["collectUpdatesWelcomeLabel"] = "collectUpdatesWelcomeLabel";
    /**
     * @description The label for quick update button. User use this button to submit a quick update.
     * @default "Quick update"
     */
    Strings["quickUpdateButton"] = "quickUpdateButton";
    /**
     * @description Default message for currentOccurrenceStatus
     * @default ""
     * @argument Completed : "Completed"
     * @argument Pending : "Pending"
     */
    Strings["currentOccurrenceStatus"] = "currentOccurrenceStatus";
    /**
     * @description Label for request from
     * @default "From: {{userName}}"
     */
    Strings["requestAssignerLabel"] = "requestAssignerLabel";
    /**
     * @description Label for request submitter
     * @default "Submitter: {{userName}}"
     */
    Strings["requestSubmitterLabel"] = "requestSubmitterLabel";
    /**
     * @description The label for collect updates modal title
     * @default "Collect updates from your team"
     */
    Strings["collectUpdatesModalTitle"] = "collectUpdatesModalTitle";
    /**
     * @description The label for template view page name
     * @default "{{templateName}} (Demo)"
     */
    Strings["templateViewPageName"] = "templateViewPageName";
    /**
     * @description The label for demo tag
     * @default "DEMO"
     */
    Strings["demoTag"] = "demoTag";
    /**
     * @description action button text for request an update
     * @default "Create request"
     */
    Strings["createNewRequestAction"] = "createNewRequestAction";
    /**
     * @description The label for aggregated view card list header
     * @default "Review updates"
     */
    Strings["AggregatedViewCardListHeader"] = "AggregatedViewCardListHeader";
    /**
     * @description The label for aggregated view card list show all button
     * @default "Show all"
     */
    Strings["AggregatedViewCardListShowAllButton"] = "AggregatedViewCardListShowAllButton";
    /**
     * @description Text attached to the title indicating the request is a copy
     * @default "{{title}} (copy)"
     */
    Strings["copyLabel"] = "copyLabel";
    /**
     * @description Text of the button action to import last submission
     * @default "Import last submission"
     */
    Strings["importLastSubmissionLabel"] = "importLastSubmissionLabel";
    /**
     * @description Label to prompts the user will import the previous report
     * @default "Import the previous report? It will overwrite content being edited."
     */
    Strings["importLastSubmissionHintLabel"] = "importLastSubmissionHintLabel";
    /**
     * @description Text indicates the report definition is in active status
     * @default "Active"
     */
    Strings["reportDefinitionActiveStatus"] = "reportDefinitionActiveStatus";
    /**
     * @description Text indicates the report definition is in inactive status
     * @default "Inactive"
     */
    Strings["reportDefinitionInactiveStatus"] = "reportDefinitionInactiveStatus";
    /**
     * @description Label for report period select dropdown
     * @default "View reporting period"
     */
    Strings["reportPeriodSelectDropdownLabel"] = "reportPeriodSelectDropdownLabel";
    /**
     * @description Label for submitter select dropdown
     * @default "View submissions from"
     */
    Strings["submitterSelectDropdownLabel"] = "submitterSelectDropdownLabel";
    /**
     * @description Label for submitter select dropdown option for all submitters
     * @default "All Submitters"
     */
    Strings["submitterSelectDropdownAllSubmittersOption"] = "submitterSelectDropdownAllSubmittersOption";
    /**
     * @description Text of the button action to view highlights in app
     * @default "View highlights in app"
     */
    Strings["viewHighlightsLabelInApp"] = "viewHighlightsLabelInApp";
    /**
     * @description Text of the title to view highlights in app
     * @default "View updates highligts & more in app!"
     */
    Strings["viewHighlightsTitleLabel"] = "viewHighlightsTitleLabel";
    /**
     * @description Text of the description to view highlights in app
     * @default "To view data highlights and do more, please visit the Updates full app."
     */
    Strings["viewHighlightsDescriptionLabel"] = "viewHighlightsDescriptionLabel";
    /**
     * @description The label for nps feedback custom question
     * @default "How likely are you to recommend Updates app to others, if asked?"
     */
    Strings["npsFeedbackCustomQuestion"] = "npsFeedbackCustomQuestion";
    /**
     *
     * @default ""
     * @argument 1 : "very unlikely"
     * @argument 2 : "unlikely"
     * @argument 3 : "neutral"
     * @argument 4 : "likely"
     * @argument 5 : "very likely"
     */
    Strings["npsFeedbackCustomOption"] = "npsFeedbackCustomOption";
    /**
     * @description The label for nps feedback modal title
     * @default "How do you like the new Updates app?"
     */
    Strings["npsFeedbackModalTitle"] = "npsFeedbackModalTitle";
    /**
     * @description The label for nps feedback modal description
     * @default "Please take a moment to rate Updates."
     */
    Strings["npsFeedbackModalDescription"] = "npsFeedbackModalDescription";
    /**
     * @description The label for nps feedback modal give feedback button
     * @default "Give feedback"
     */
    Strings["npsFeedbackModalGiveFeedbackButton"] = "npsFeedbackModalGiveFeedbackButton";
    /**
     * @description The label for change role to owner
     * @default "Set as owner"
     */
    Strings["changeRoleToOwner"] = "changeRoleToOwner";
    /**
     * @description The label for labeled name
     * @default "{{name}} ({{label}})"
     */
    Strings["labelledName"] = "labelledName";
    /**
     * @description The label for owner role
     * @default "Owner"
     */
    Strings["ownerRole"] = "ownerRole";
    /**
     * @description The label for what's new modal title
     * @default "What's new"
     */
    Strings["whatsNewModalTitle"] = "whatsNewModalTitle";
    /**
     * @description Text for try it now button (an action to try)
     * @default "Try it now"
     */
    Strings["buttonTextTryItNow"] = "buttonTextTryItNow";
    /**
     * @description Text for got it button (an action to got it)
     * @default "Got it"
     */
    Strings["buttonTextGotIt"] = "buttonTextGotIt";
    /**
     * @description The label for what's new title
     * @default "Add pictures in updates & @Mention in comments"
     */
    Strings["whatsNewTitle"] = "whatsNewTitle";
    /**
     *
     * @default ""
     * @argument InlinePicture : "Add pictures in updates"
     * @argument MentionInComments : "@Mention in comments"
     */
    Strings["featureName"] = "featureName";
    /**
     *
     * @default ""
     * @argument InlinePicture : "Still worried about not being able to add pictures in your updates? Simply copy and paste, drag and drop, or upload from your local storage directly into the rich text box."
     * @argument MentionInComments : "Want to make sure someone sees your comment? Use the @mention feature to tag them directly. They'll receive a notification and be more likely to engage with your post."
     */
    Strings["featureDescription"] = "featureDescription";
    /**
     * @description Aria label for filter button
     * @default "Filter by {{filterName}}"
     */
    Strings["filterAriaLabel"] = "filterAriaLabel";
    /**
     * @description Aria label for export button
     * @default "Export reports to excel"
     */
    Strings["exportButtonAriaLabel"] = "exportButtonAriaLabel";
    /**
     * @description Aria label for got report by request
     * @default "{{request}} selected"
     */
    Strings["gotReportByRequestAriaLabel"] = "gotReportByRequestAriaLabel";
    /**
     * @description Aria label for got report by submitter
     * @default "{{submitter}} selected"
     */
    Strings["gotReportBySubmitterAriaLabel"] = "gotReportBySubmitterAriaLabel";
    /**
     * @description Aria label for got report by friendly time
     * @default "{{friendlyTime}} selected"
     */
    Strings["gotReportByFriendlyTimeAriaLabel"] = "gotReportByFriendlyTimeAriaLabel";
    /**
     * @description Aria label for got report by dateRange
     * @default "{{dateRange, datetimerange}} selected"
     */
    Strings["gotReportByDateRangeAriaLabel"] = "gotReportByDateRangeAriaLabel";
    /**
     * @description The label for return to home
     * @default "Return to homepage"
     */
    Strings["returnToHomePage"] = "returnToHomePage";
    /**
     * @description Text for explore more button (an action to explore more)
     * @default "Explore more"
     */
    Strings["buttonTextExploreMore"] = "buttonTextExploreMore";
    /**
     * @description Text for the month of report slot start time or end time
     * @default "{{date, datetime(month: short)}}"
     */
    Strings["reportSlotMonth"] = "reportSlotMonth";
    /**
     * @description The label for report definition info modal subtitle1, indicates description of report definition
     * @default "Description"
     */
    Strings["descriptionLabel"] = "descriptionLabel";
    /**
     * @description The label for report definition info modal subtitle2, indicates recurrence of report definition
     * @default "Recurrence"
     */
    Strings["recurrenceLabel"] = "recurrenceLabel";
    /**
     * @description The label for report definition info modal subtitle5, indicates who needs to submit this request
     * @default "Who needs to submit this request?"
     */
    Strings["writerListTitle"] = "writerListTitle";
    /**
     * @description The label for edit request button
     * @default "Edit request"
     */
    Strings["reportDefinitionEditButton"] = "reportDefinitionEditButton";
    /**
     *
     * @default ""
     * @argument Pending : "Pending"
     * @argument DueSoon : "Due soon"
     * @argument Submitted : "Submitted"
     * @argument Unsubmitted : "Unsubmitted"
     * @argument GiveUpdate : "Give update"
     * @argument Overdue : "Overdue"
     */
    Strings["reportSlotStatus"] = "reportSlotStatus";
    /**
     * @description This tooltip appears when the user hasn't completed all required form fields.
     * @default "Complete all required fields before submitting your update"
     */
    Strings["submitButtonDisabledTooltipTitle"] = "submitButtonDisabledTooltipTitle";
})(Strings || (Strings = {}));


/***/ }),

/***/ "ggBz":
/*!************************************!*\
  !*** ./src/service/queryClient.ts ***!
  \************************************/
/*! exports provided: queryClient, clearQueryClientPersistor */
/*! exports used: clearQueryClientPersistor, queryClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return queryClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return clearQueryClientPersistor; });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-query */ "jtiS");
/* harmony import */ var react_query_createWebStoragePersistor_experimental__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query/createWebStoragePersistor-experimental */ "twkq");
/* harmony import */ var react_query_persistQueryClient_experimental__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query/persistQueryClient-experimental */ "2O6R");
/* harmony import */ var _common_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/env */ "8MrD");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../logger */ "pIRP");





/**
 * the global query client
 * https://react-query.tanstack.com/reference/useQuery#_top
 */
const queryClient = /* #__PURE__ */ new react_query__WEBPACK_IMPORTED_MODULE_0__["QueryClient"]({
    defaultOptions: {
        queries: {
            cacheTime: 24 * 60 * 60 * 1000,
            staleTime: 1 * 5 * 60 * 1000,
            refetchInterval: false,
            refetchIntervalInBackground: false,
            refetchOnWindowFocus: false,
            retryDelay(retry) {
                const delayTime = 1500;
                return retry * delayTime;
            },
            retry: (failureCount, error) => {
                // Need explicit error type, because error defaults to unknown type and our error is always the specific type.
                // https://github.com/TanStack/query/discussions/2757
                if (error instanceof Error) {
                    const genericError = error;
                    return (failureCount < 3 &&
                        genericError.status !== 404 &&
                        genericError.status !== 429 &&
                        (genericError === null || genericError === void 0 ? void 0 : genericError.status) !== 403);
                }
                return false; // No auto-retry
            },
        },
    },
});
const userObjectId = _common_env__WEBPACK_IMPORTED_MODULE_3__[/* initQuery */ "k"].get(_common_env__WEBPACK_IMPORTED_MODULE_3__[/* URIParam */ "g"].UserId);
const key = 'REACT_QUERY_OFFLINE_CACHE';
const persistor = Object(react_query_createWebStoragePersistor_experimental__WEBPACK_IMPORTED_MODULE_1__[/* createWebStoragePersistor */ "a"])({ storage: window.localStorage, key });
const clearQueryClientPersistor = () => window.localStorage.removeItem(key);
Object(react_query_persistQueryClient_experimental__WEBPACK_IMPORTED_MODULE_2__[/* persistQueryClient */ "a"])({
    queryClient,
    persistor,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    buster: (userObjectId ? 'APICache-' + userObjectId : 'CommonAPICache') + '-V3',
});
// Always set to react query online state to true, to avoid pausing request sending and error handling.
window.ononline = () => {
    react_query__WEBPACK_IMPORTED_MODULE_0__["onlineManager"].setOnline(true);
};
window.onoffline = () => {
    react_query__WEBPACK_IMPORTED_MODULE_0__["onlineManager"].setOnline(true);
};
Object(react_query__WEBPACK_IMPORTED_MODULE_0__["setLogger"])(_common_env__WEBPACK_IMPORTED_MODULE_3__[/* isDev */ "l"]
    ? console
    : {
        log: args => {
            _logger__WEBPACK_IMPORTED_MODULE_4__[/* logger */ "f"].logTraceInfo(_logger__WEBPACK_IMPORTED_MODULE_4__[/* LogCategory */ "a"].ReactQuery, JSON.stringify(args));
        },
        warn: args => {
            _logger__WEBPACK_IMPORTED_MODULE_4__[/* logger */ "f"].logTraceWarning(_logger__WEBPACK_IMPORTED_MODULE_4__[/* LogCategory */ "a"].ReactQuery, JSON.stringify(args));
        },
        error: args => {
            _logger__WEBPACK_IMPORTED_MODULE_4__[/* logger */ "f"].logTraceError(_logger__WEBPACK_IMPORTED_MODULE_4__[/* LogCategory */ "a"].ReactQuery, JSON.stringify(args));
        },
    });


/***/ }),

/***/ "kUcb":
/*!**********************************!*\
  !*** ./src/service/gen/index.ts ***!
  \**********************************/
/*! exports provided: ReportServiceClient, DirectoryObjectType, ExpandValue, UserType, ResourceType, ServiceException */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reportServiceClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reportServiceClient */ "d8l+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReportServiceClient", function() { return _reportServiceClient__WEBPACK_IMPORTED_MODULE_0__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirectoryObjectType", function() { return _reportServiceClient__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpandValue", function() { return _reportServiceClient__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserType", function() { return _reportServiceClient__WEBPACK_IMPORTED_MODULE_0__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResourceType", function() { return _reportServiceClient__WEBPACK_IMPORTED_MODULE_0__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceException", function() { return _reportServiceClient__WEBPACK_IMPORTED_MODULE_0__["e"]; });




/***/ }),

/***/ "xZ10":
/*!**************************************!*\
  !*** ./src/locales/supportedLngs.ts ***!
  \**************************************/
/*! exports provided: supportedLngs */
/*! exports used: supportedLngs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return supportedLngs; });
/**
 * NOTE: THIS IS A GENERATED FILE. PLEASE DO NOT EDIT !!
 *
 * Interface for the strings in locale file for type safety.
 * You can generate this file with "yarn scripts localization"
 */
/**
 * All supported languages tag
 * generated from locale folder name
 */
const supportedLngs = ['en-US', 'zh-CN', 'zh-TW'];


/***/ })

}]);
//# sourceMappingURL=featureRelatedFiles~main~mobile.js.map