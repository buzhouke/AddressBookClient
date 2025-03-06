(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["featureRelatedFiles~main~mobile"],{

/***/ "8/2k":
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
	"./ja-JP/strings.json": [
		"2YGt",
		"ja-JP-strings-json"
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return axiosInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return transformResponse; });
/* harmony import */ var _addressbook_components_metaos_host__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0acT");
/* harmony import */ var _addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("1hmm");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("8dj6");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ggb3");
/* harmony import */ var _common_Constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("fPKC");
/* harmony import */ var _common_env__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("8MrD");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("pIRP");
/* harmony import */ var _utilities_Utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("TktC");
/* harmony import */ var _RequestError__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("MpLv");
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
                [_common_Constants__WEBPACK_IMPORTED_MODULE_4__[/* HEADER_CLIENT_REQUEST_ID */ "e"]]: Object(_addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_1__[/* uuid */ "e"])(),
            });
        }
        else if (!config.headers[_common_Constants__WEBPACK_IMPORTED_MODULE_4__[/* HEADER_CLIENT_REQUEST_ID */ "e"]]) {
            config.headers[_common_Constants__WEBPACK_IMPORTED_MODULE_4__[/* HEADER_CLIENT_REQUEST_ID */ "e"]] = Object(_addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_1__[/* uuid */ "e"])();
        }
        _logger__WEBPACK_IMPORTED_MODULE_6__[/* logger */ "f"].logTraceDebug(_logger__WEBPACK_IMPORTED_MODULE_6__[/* LogCategory */ "a"].APIRequest, `Calling getAuthToken for ${_common_env__WEBPACK_IMPORTED_MODULE_5__[/* ADDRESSBOOK_APP_RESOURCE_URL */ "b"]}`);
        config._getTeamsContextTime = performance.now();
        const context = yield Object(_addressbook_components_metaos_host__WEBPACK_IMPORTED_MODULE_0__[/* getTeamsContext */ "h"])();
        config._getAuthTokenTime = performance.now();
        config.headers.authorization = `Bearer ${yield Object(_addressbook_components_metaos_host__WEBPACK_IMPORTED_MODULE_0__[/* getAuthToken */ "g"])(_common_env__WEBPACK_IMPORTED_MODULE_5__[/* ADDRESSBOOK_APP_RESOURCE_URL */ "b"])}`;
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getResourceToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return checkAdminRequiredScopes; });
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("k2tF");
/* harmony import */ var _GlobalServiceClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("b6hu");
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
    var _a, _b, _c, _d;
    return __awaiter(this, void 0, void 0, function* () {
        const cacheKey = getCacheKey(resourceType, resourceUrl);
        // const navigate = useNavigate();
        let getTokenPromise = tokenCache.get(cacheKey);
        if (getTokenPromise) {
            const cachedToken = yield getToken(getTokenPromise, cacheKey);
            const decodedToken = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(cachedToken.token);
            const scopeList = (_b = (_a = decodedToken === null || decodedToken === void 0 ? void 0 : decodedToken.scp) === null || _a === void 0 ? void 0 : _a.split(' ')) !== null && _b !== void 0 ? _b : [];
            if (cachedToken && new Date(cachedToken.expiresOn) > new Date() && checkAdminRequiredScopes(scopeList)) {
                return cachedToken.token;
            }
        }
        getTokenPromise = _GlobalServiceClient__WEBPACK_IMPORTED_MODULE_1__[/* SERVICE_CLIENT */ "a"].tokenExchangeVersion_Exchange({
            input: { ResourceType: resourceType, ResourceUrl: resourceUrl },
        });
        tokenCache.set(cacheKey, getTokenPromise);
        const accessToken = yield getToken(getTokenPromise, cacheKey);
        const decodedToken = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(accessToken.token);
        const scopeList = (_d = (_c = decodedToken === null || decodedToken === void 0 ? void 0 : decodedToken.scp) === null || _c === void 0 ? void 0 : _c.split(' ')) !== null && _d !== void 0 ? _d : [];
        // if (checkAdminRequiredScopes(scopeList)) {
        //     console.log('admin required scopes');
        // }
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

/***/ "MpLv":
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ external["a" /* graphServiceClient */]; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ gen["DirectoryObjectType"]; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ gen["ResourceType"]; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ GlobalServiceClient["a" /* SERVICE_CLIENT */]; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ queryClient_queryClient; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ clearQueryClientPersistor; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ tokenCache["a" /* checkAdminRequiredScopes */]; });

// UNUSED EXPORTS: axiosInstance, transformResponse, ReportServiceClient, ExpandValue, UserType, ServiceException, updateReactPageQueryCache, CLIENT_ERROR_PRIX, ClientErrorCodes, ErrorCategory, RequestError, getResourceToken

// EXTERNAL MODULE: ./src/service/axios.ts
var axios = __webpack_require__("8G6N");

// EXTERNAL MODULE: ./src/service/external/index.ts + 2 modules
var external = __webpack_require__("k/S9");

// EXTERNAL MODULE: ./src/service/gen/index.ts + 1 modules
var gen = __webpack_require__("kUcb");

// EXTERNAL MODULE: ./src/service/GlobalServiceClient.ts
var GlobalServiceClient = __webpack_require__("b6hu");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-query/es/index.js
var es = __webpack_require__("jtiS");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-query/es/createWebStoragePersistor-experimental/index.js
var createWebStoragePersistor_experimental = __webpack_require__("twkq");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-query/es/persistQueryClient-experimental/index.js
var persistQueryClient_experimental = __webpack_require__("2O6R");

// EXTERNAL MODULE: ./src/common/env.ts
var env = __webpack_require__("8MrD");

// EXTERNAL MODULE: ./src/logger/index.ts + 1 modules
var logger = __webpack_require__("pIRP");

// CONCATENATED MODULE: ./src/service/queryClient.ts





/**
 * the global query client
 * https://react-query.tanstack.com/reference/useQuery#_top
 */
const queryClient_queryClient = /* #__PURE__ */ new es["QueryClient"]({
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
const userObjectId = env["o" /* initQuery */].get(env["k" /* URIParam */].UserId);
const key = 'REACT_QUERY_OFFLINE_CACHE';
const persistor = Object(createWebStoragePersistor_experimental["a" /* createWebStoragePersistor */])({ storage: window.localStorage, key });
const clearQueryClientPersistor = () => window.localStorage.removeItem(key);
Object(persistQueryClient_experimental["a" /* persistQueryClient */])({
    queryClient: queryClient_queryClient,
    persistor,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    buster: (userObjectId ? 'APICache-' + userObjectId : 'CommonAPICache') + '-V3',
});
// Always set to react query online state to true, to avoid pausing request sending and error handling.
window.ononline = () => {
    es["onlineManager"].setOnline(true);
};
window.onoffline = () => {
    es["onlineManager"].setOnline(true);
};
Object(es["setLogger"])(env["p" /* isDev */]
    ? console
    : {
        log: args => {
            logger["f" /* logger */].logTraceInfo(logger["a" /* LogCategory */].ReactQuery, JSON.stringify(args));
        },
        warn: args => {
            logger["f" /* logger */].logTraceWarning(logger["a" /* LogCategory */].ReactQuery, JSON.stringify(args));
        },
        error: args => {
            logger["f" /* logger */].logTraceError(logger["a" /* LogCategory */].ReactQuery, JSON.stringify(args));
        },
    });

// CONCATENATED MODULE: ./src/service/queryCache.ts

/**
 * update page query cache.
 *
 * @param queryClient query client
 * @param funcs paged SERVICE_CLIENT.method array - service client API function @see SERVICE_CLIENT
 * @param id id to search, if undefined return the first query cache
 * @param update cache update function
 */
function updateReactPageQueryCache(funcs, id, update, queryClient = queryClient_queryClient) {
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

// EXTERNAL MODULE: ./src/service/RequestError.ts
var RequestError = __webpack_require__("MpLv");

// EXTERNAL MODULE: ./src/service/tokenCache.ts
var tokenCache = __webpack_require__("FMwJ");

// CONCATENATED MODULE: ./src/service/index.ts










/***/ }),

/***/ "b6hu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SERVICE_CLIENT; });
/* harmony import */ var _common_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8MrD");
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("8G6N");
/* harmony import */ var _gen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("kUcb");



/**
 * Clients For all REST API Call
 *
 * @ref ServiceClientClasses
 */
const SERVICE_CLIENT = {};
Object.entries(_gen__WEBPACK_IMPORTED_MODULE_2__)
    .filter(([key]) => key.endsWith('ServiceClient'))
    .forEach(([_, ClientClass]) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const client = new ClientClass(_common_env__WEBPACK_IMPORTED_MODULE_0__[/* ADDRESSBOOK_APP_BACKEND_URL */ "a"], _axios__WEBPACK_IMPORTED_MODULE_1__[/* axiosInstance */ "a"]);
    Object.getOwnPropertyNames(ClientClass.prototype).forEach((funcName) => {
        if (funcName !== 'constructor') {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            SERVICE_CLIENT[funcName] = client[funcName].bind(client);
        }
    });
});


/***/ }),

/***/ "fOXQ":
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
     *
     * @default "Hierarchical Address Book"
     * @argument ppe : "Hierarchical Address Book (Dogfood)"
     * @argument int : "Hierarchical Address Book (Int)"
     * @argument dev : "Hierarchical Address Book (Dev)"
     */
    Strings["appName"] = "appName";
    /**
     *
     * @default "Show current and sub-department members"
     */
    Strings["dropDownForDepartDefault"] = "dropDownForDepartDefault";
    /**
     *
     * @default "Show only current department members"
     */
    Strings["dropDownForDepartOption1"] = "dropDownForDepartOption1";
    /**
     *
     * @default "Search by name"
     */
    Strings["searchPlaceholder"] = "searchPlaceholder";
    /**
     *
     * @default "Name"
     */
    Strings["peopleListColumnForName"] = "peopleListColumnForName";
    /**
     *
     * @default "Email"
     */
    Strings["peopleListColumnForEmail"] = "peopleListColumnForEmail";
    /**
     *
     * @default "Phone number"
     */
    Strings["peopleListColumnForPhone"] = "peopleListColumnForPhone";
    /**
     *
     * @default "Department"
     */
    Strings["peopleListColumnForDepart"] = "peopleListColumnForDepart";
    /**
     *
     * @default "Job title"
     */
    Strings["peopleListColumnForJob"] = "peopleListColumnForJob";
    /**
     *
     * @default "No members in the current department"
     */
    Strings["errorTitleForNotContract"] = "errorTitleForNotContract";
    /**
     *
     * @default "No department members available to display. Please select another department to view."
     */
    Strings["errorMessageForNotContract"] = "errorMessageForNotContract";
    /**
     *
     * @default "Exit search"
     */
    Strings["exitSearchLabel"] = "exitSearchLabel";
    /**
     *
     * @default "The search results of \"{{searchResult}}\""
     */
    Strings["searchResultLabel"] = "searchResultLabel";
    /**
     *
     * @default "Contract"
     */
    Strings["contractLabel"] = "contractLabel";
    /**
     *
     * @default "Manager"
     */
    Strings["managerLabel"] = "managerLabel";
    /**
     *
     * @default "Clearing Cache... After clearing cache, the page will reload."
     */
    Strings["refreshCacheLoading"] = "refreshCacheLoading";
    /**
     *
     * @default "Clear Cache successful and now reload the page"
     */
    Strings["refreshCacheSuccess"] = "refreshCacheSuccess";
    /**
     *
     * @default "Error when clearing cache. Please try again. Error: {{error}}"
     */
    Strings["refreshCacheFailed"] = "refreshCacheFailed";
    /**
     * @description Aria label for loading icon (a state for loading data)
     * @default "loading"
     */
    Strings["loadingAriaLabel"] = "loadingAriaLabel";
    /**
     * @description Default message for unknown errors
     * @default "Something went wrong"
     * @argument C_ERR_NETWORK : "Please check your internet connection and try refreshing this page"
     * @argument C_ERR_TEAMS_SDK : "Please check your network or reload the app"
     */
    Strings["errorTitle"] = "errorTitle";
    /**
     * @description The retry tips for user when error happens. Correlation Id is a code for investigation
     * @default "Correlation ID: {{correlationId}}."
     * @argument C_ERR_NETWORK : ""
     * @argument ExchangeOnlineCallException : "The system has recently undergone an upgrade, and some manual configurations by the administrator are required. Please contact the product team."
     */
    Strings["errorDescription"] = "errorDescription";
    /**
     * @description Action to Reload the App, when errors
     * @default "Try again"
     */
    Strings["errorAction"] = "errorAction";
    /**
     * @description The label for return to home
     * @default "Return to homepage"
     */
    Strings["returnToHomePage"] = "returnToHomePage";
    /**
     *
     * @default "No departments or members set up."
     */
    Strings["emptyTitleLabel"] = "emptyTitleLabel";
    /**
     *
     * @default "There are no departments or members available to display. Please click here to set them up."
     */
    Strings["emptyDescriptionLabel"] = "emptyDescriptionLabel";
    /**
     *
     * @default "Refresh Data"
     */
    Strings["emptyButtonLabel"] = "emptyButtonLabel";
    /**
     *
     * @default "There are no departments or members available to display. Please <1>click here</1> to set them up."
     */
    Strings["emptyDescriptionWithLinkLabel"] = "emptyDescriptionWithLinkLabel";
    /**
     *
     * @default "Grant us your permission to proceed"
     */
    Strings["consentTitleLabel"] = "consentTitleLabel";
    /**
     *
     * @default "Once you grant permission, please come back, and we’ll prepare your data shortly."
     */
    Strings["consentDescriptionLabel"] = "consentDescriptionLabel";
    /**
     *
     * @default "Grant permission"
     */
    Strings["consentButtonLabel"] = "consentButtonLabel";
})(Strings || (Strings = {}));


/***/ }),

/***/ "kUcb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "ReportServiceClient", function() { return /* reexport */ reportServiceClient_ReportServiceClient; });
__webpack_require__.d(__webpack_exports__, "DirectoryObjectType", function() { return /* reexport */ DirectoryObjectType; });
__webpack_require__.d(__webpack_exports__, "ExpandValue", function() { return /* reexport */ ExpandValue; });
__webpack_require__.d(__webpack_exports__, "UserType", function() { return /* reexport */ UserType; });
__webpack_require__.d(__webpack_exports__, "ResourceType", function() { return /* reexport */ ResourceType; });
__webpack_require__.d(__webpack_exports__, "ServiceException", function() { return /* reexport */ ServiceException; });

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/axios/lib/axios.js + 43 modules
var axios = __webpack_require__("8dj6");

// CONCATENATED MODULE: ./src/service/gen/reportServiceClient.ts
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.20.0.0 (NJsonSchema v10.9.0.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

// import { UserView } from '../query';
class reportServiceClient_ReportServiceClient {
    constructor(baseUrl, instance) {
        this.jsonParseReviver = undefined;
        this.instance = instance ? instance : axios["a" /* default */].create();
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : '';
    }
    fetchGetAllUserMembersByDepartment({ departmentId, top, skipToken, }, signal) {
        let url_ = this.baseUrl + '/api/Department/GetAllUserMembers';
        const params = {
            Top: top,
            SkipToken: skipToken,
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
    fetchGetDirectUserMembersByDepartment({ departmentId, top, skipToken, }, signal) {
        let url_ = this.baseUrl + '/api/Department/GetDirectUserMembers';
        const params = {
            Top: top,
            SkipToken: skipToken,
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
        let url_ = this.baseUrl + '/api/User/SearchUsers';
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
        let url_ = this.baseUrl + '/api/TokenExchange';
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
    // /**
    //  * @return The output DepartmentView.
    //  */
    // fetchDepartmentNav({}: {}, signal?: AbortSignal | undefined): Promise<DepartmentView> {
    //     let url_ = this.baseUrl +'/api/Department/GetAllDepartments';
    //     const params = {};
    //     let options_: AxiosRequestConfig = {
    //         method: 'Get',
    //         url: url_,
    //         params,
    //         headers: {
    //             'Content-Type': 'application/json',
    //             Accept: 'application/json',
    //         },
    //         signal,
    //     };
    //     return this.instance.request(options_);
    // }
    /**
     * @return The output DepartmentView.
     */
    fetchDepartmentNavV2({}, signal) {
        let url_ = this.baseUrl + '/api/Department/GetAllDepartmentNodesV2';
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
    getDepartmentCandidates({}, signal) {
        let url_ = this.baseUrl + '/api/Department/GetAllRootDepartmentsCandidates';
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
    setRootDepartment({ departmentId }, signal) {
        let url_ = this.baseUrl + '/api/Department/SetRootDepartment';
        const params = { departmentId };
        let options_ = {
            method: 'Post',
            url: url_,
            params,
            headers: {
                Accept: 'application/json',
            },
            signal,
        };
        return this.instance.request(options_);
    }
    clearCache({}, signal) {
        let url_ = this.baseUrl + '/api/Department/ClearCache';
        const params = {};
        let options_ = {
            method: 'Delete',
            url: url_,
            params,
            headers: {
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

// CONCATENATED MODULE: ./src/service/gen/index.ts



/***/ }),

/***/ "xZ10":
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
const supportedLngs = ['en-US', 'ja-JP', 'zh-CN', 'zh-TW'];


/***/ })

}]);