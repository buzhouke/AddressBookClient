(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "JwtI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/styles/global.css
var global = __webpack_require__("rMck");

// EXTERNAL MODULE: ./src/common/csp-inject.ts
var csp_inject = __webpack_require__("ajHv");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react/index.js
var react = __webpack_require__("ERkP");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-dom/index.js
var react_dom = __webpack_require__("7nmT");
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-metaos-host/src/index.ts + 9 modules
var src = __webpack_require__("0acT");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/utilities/ThemeProvider/ThemeProvider.js + 4 modules
var ThemeProvider = __webpack_require__("5qKm");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-query/es/index.js
var es = __webpack_require__("jtiS");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-query/devtools/index.js
var devtools = __webpack_require__("TQen");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-router-dom/index.js
var react_router_dom = __webpack_require__("Udmz");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-router/index.js
var react_router = __webpack_require__("H8PI");

// EXTERNAL MODULE: ./src/common/env.ts
var env = __webpack_require__("8MrD");

// CONCATENATED MODULE: ./src/ecs/EcsFlags.ts
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */
var EcsConfigType;
(function (EcsConfigType) {
    EcsConfigType[EcsConfigType["Default"] = 0] = "Default";
    EcsConfigType[EcsConfigType["User"] = 1] = "User";
})(EcsConfigType || (EcsConfigType = {}));
/**
 * initial state to be used when ECS fetch fails.
 * Note: Please change the initialState after your feature complete rollout on ECS
 */
const initialState = {
    NPSFeedbackEnabledTimeRange: '',
    FeedbackBubbleEnabledTimeRange: '2024-09-18/2024-10-10',
};

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/axios/lib/axios.js + 43 modules
var axios = __webpack_require__("8dj6");

// EXTERNAL MODULE: ./src/common/Constants.ts
var Constants = __webpack_require__("fPKC");

// EXTERNAL MODULE: ./src/logger/index.ts + 1 modules
var logger = __webpack_require__("pIRP");

// EXTERNAL MODULE: ./src/service/axios.ts
var service_axios = __webpack_require__("8G6N");

// CONCATENATED MODULE: ./src/ecs/loadEcsConfig.ts






function getECSParams(context) {
    if (!context) {
        return undefined;
    }
    return {
        agents: 'MWTWorkReport',
        ClientEnvironment: env["g" /* ENVIRONMENT */],
        TeamsRing: context.ringId || '',
        HostClientType: context.hostClientType || '',
        TenantID: context.tid || '',
        UserID: context.userObjectId || '',
    };
}
const ECS_STORAGE_KEY = 'EcsConfig';
// try to get ECS config from local storage
const localeECS = (() => {
    try {
        return JSON.parse(localStorage.getItem(ECS_STORAGE_KEY) || '{}');
    }
    catch (error) {
        return {};
    }
})();
/**
 * default ECS config
 * merge with local storage ECS config
 */
const defaultECSFlags = Object.assign(Object.assign({}, initialState), localeECS);
function loadEcsConfig(params) {
    // add start time for performance logging
    const config = { params, _startRequestTime: performance.now() };
    return axios["a" /* default */]
        .get(Constants["c" /* ECS_BASIC_URL */], config)
        .then(response => {
        const ecs = Object(service_axios["b" /* transformResponse */])(response);
        // cache ecs config
        localStorage.setItem(ECS_STORAGE_KEY, JSON.stringify(ecs.MWTWorkReport));
        return ecs;
    })
        .catch((error) => {
        var _a;
        logger["f" /* logger */].logTraceError(logger["a" /* LogCategory */].ECSRequest, `EcsCallError ${(_a = error === null || error === void 0 ? void 0 : error.config) === null || _a === void 0 ? void 0 : _a.url} ${error.message}`);
        // fallback to default value
        return { MWTWorkReport: defaultECSFlags, Headers: {} };
    });
}

// CONCATENATED MODULE: ./src/ecs/ECSConfigProvider.tsx





const ecsConfigQueryKey = 'GetECSConfigs';
const ecsQueryClient = new es["QueryClient"]({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            cacheTime: Infinity,
        },
    },
});
const ECSContext = react_default.a.createContext({ data: defaultECSFlags });
function ECSConfigProviderInner({ children, defaultValue, value, }) {
    const userObjectId = env["o" /* initQuery */].get(env["k" /* URIParam */].UserId);
    const tid = env["o" /* initQuery */].get(env["k" /* URIParam */].TenantId);
    const ringId = env["o" /* initQuery */].get(env["k" /* URIParam */].RingId);
    const hostClientType = env["o" /* initQuery */].get(env["k" /* URIParam */].ClientType);
    const teamsContext = Object(src["o" /* useTeamsContext */])();
    const ecsParams = getECSParams(Object.assign({ userObjectId,
        tid,
        ringId,
        hostClientType }, teamsContext));
    const result = Object(es["useQuery"])([ecsConfigQueryKey, ecsParams], () => loadEcsConfig(ecsParams), {
        select: data => data.MWTWorkReport,
        placeholderData: { MWTWorkReport: defaultValue || defaultECSFlags, Headers: {} },
        enabled: !value && !!ecsParams,
    });
    return react_default.a.createElement(ECSContext.Provider, { value: value ? { data: value } : result }, children);
}
function ECSConfigProvider({ children, defaultValue, value, }) {
    return (react_default.a.createElement(es["QueryClientProvider"], { client: ecsQueryClient },
        react_default.a.createElement(ECSConfigProviderInner, { defaultValue: defaultValue, value: value }, children)));
}
function useECSConfig() {
    return react_default.a.useContext(ECSContext);
}

// CONCATENATED MODULE: ./src/ecs/index.ts
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */




// CONCATENATED MODULE: ./src/hooks/actions/useDataFlag.ts

function generateKey(key, suffix) {
    return `$_${key}${suffix ? `.${suffix}` : ''}`;
}
const FLAG_STORAGE_KEY = 'hasdata';
/**
 * get / set flag for data
 *
 * @param reportListType
 * @returns
 */
function useDataFlag(reportListType) {
    return Object(react["useMemo"])(() => {
        const storageKey = generateKey(FLAG_STORAGE_KEY, reportListType);
        const hasFlag = !!localStorage.getItem(storageKey);
        return {
            hasFlag,
            setFlag: () => localStorage.setItem(storageKey, 'true'),
            delFlag: () => localStorage.removeItem(storageKey),
        };
    }, [reportListType]);
}

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-reactive-var/dist/index.es.js
var index_es = __webpack_require__("2spY");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/rxjs/_esm5/internal/Subject.js + 7 modules
var Subject = __webpack_require__("fQLH");

// CONCATENATED MODULE: ./src/common/flag.ts
/**
 * All enumerations of flag
 */
var Flag;
(function (Flag) {
    Flag["OnboardingModal"] = "OnboardingModal";
    Flag["WriteBubble"] = "WriteBubble";
    Flag["RequestBubble"] = "RequestBubble";
    Flag["SubmitBubble"] = "SubmitBubble";
    Flag["ReviewBubble"] = "ReviewBubble";
    Flag["SubmitGuidesBubble"] = "SubmitGuidesBubble";
    Flag["ReviewGuidesBubble"] = "ReviewGuidesBubble";
    Flag["TaskModuleHomeBubble"] = "TaskModuleHomeBubble";
    Flag["TaskModuleHomeSimpleFRE"] = "TaskModuleHomeSimpleFRE";
    Flag["TaskModuleHomeSimplePreviewBubble"] = "TaskModuleHomeSimplePreviewBubble";
    Flag["TaskModuleHomeSimpleRuleSettingsBubble"] = "TaskModuleHomeSimpleRuleSettingsBubble";
    Flag["MobileSubmitBubble"] = "MobileSubmitBubble";
    Flag["MobileReviewBubble"] = "MobileReviewBubble";
    Flag["FeedbackInAppBubble"] = "FeedbackInAppBubble";
    Flag["FeedbackInTaskModuleBubble"] = "FeedbackInTaskModuleBubble";
})(Flag || (Flag = {}));
/**
 * Relationship binding
 * key: a flag that requires pre-items
 * value: all dependencies
 */
const flagDependency = {
    [Flag.WriteBubble]: [Flag.OnboardingModal],
    [Flag.RequestBubble]: [Flag.WriteBubble, Flag.OnboardingModal],
    [Flag.SubmitBubble]: [Flag.RequestBubble, Flag.OnboardingModal],
    [Flag.SubmitGuidesBubble]: [Flag.SubmitBubble, Flag.OnboardingModal],
    [Flag.ReviewBubble]: [Flag.RequestBubble, Flag.OnboardingModal],
    [Flag.ReviewGuidesBubble]: [Flag.ReviewBubble, Flag.OnboardingModal],
    [Flag.FeedbackInAppBubble]: [Flag.SubmitGuidesBubble, Flag.OnboardingModal],
    [Flag.TaskModuleHomeBubble]: [Flag.OnboardingModal],
    [Flag.MobileSubmitBubble]: [Flag.OnboardingModal],
    [Flag.MobileReviewBubble]: [Flag.MobileSubmitBubble],
};

// EXTERNAL MODULE: ./src/reactiveVariables/CommonVars.ts
var CommonVars = __webpack_require__("VTGp");

// CONCATENATED MODULE: ./src/hooks/actions/useFlagStatus.ts





const useFlagStatus_FLAG_STORAGE_KEY = 'flag';
const states = {};
const subject = new Subject["a" /* Subject */]();
function useFlagStatus_generateKey(key, suffix) {
    return `$_${key}${suffix ? `.${suffix}` : ''}`;
}
function getFlagTrue(flag) {
    const storageKey = useFlagStatus_generateKey(useFlagStatus_FLAG_STORAGE_KEY, flag);
    if (!(flag in states))
        states[flag] = localStorage.getItem(storageKey) ? true : null;
    return states[flag] === null;
}
function getFlagState(flag) {
    var _a;
    getFlagTrue(flag);
    if (flagDependency[flag]) {
        const isComplete = !((_a = flagDependency[flag]) === null || _a === void 0 ? void 0 : _a.some(flag => getFlagTrue(flag)));
        return isComplete ? !states[flag] : false;
    }
    return !states[flag];
}
function setFlagState(flag) {
    states[flag] = true;
    const storageKey = useFlagStatus_generateKey(useFlagStatus_FLAG_STORAGE_KEY, flag);
    localStorage.setItem(storageKey, 'true');
    subject.next(flag);
}
/**
 * set
 *
 * @param flag flag of component meaning whether or not it can be displayed
 * @param autoCleanup cleanup the shown component when the window is closed
 * @returns [value, setValue]
 */
function useFlagStatus(flag, autoCleanup) {
    const [value, setValue] = Object(react["useState"])(() => getFlagState(flag));
    const modalShowing = Object(index_es["b" /* useReactiveVar */])(CommonVars["a" /* modalShowingVar */]);
    autoCleanup = !modalShowing && autoCleanup;
    Object(react["useEffect"])(() => {
        const subscriber = subject.subscribe(updateFlag => {
            var _a;
            if ((_a = flagDependency[flag]) === null || _a === void 0 ? void 0 : _a.includes(updateFlag)) {
                setValue(getFlagState(flag));
            }
        });
        return () => subscriber.unsubscribe();
    }, [flag]);
    Object(react["useEffect"])(() => {
        if (autoCleanup) {
            const storageKey = useFlagStatus_generateKey(useFlagStatus_FLAG_STORAGE_KEY, flag);
            const callback = () => {
                if (getFlagState(flag))
                    localStorage.setItem(storageKey, 'true');
            };
            window.addEventListener('beforeunload', callback);
            return () => {
                window.removeEventListener('beforeunload', callback);
            };
        }
    }, [flag, autoCleanup]);
    return Object(react["useMemo"])(() => [
        !modalShowing && value,
        () => {
            setValue(false);
            setFlagState(flag);
        },
    ], [modalShowing, value, flag]);
}

// CONCATENATED MODULE: ./src/hooks/actions/useListComponentStatusChange.ts

var ListComponentStatus;
(function (ListComponentStatus) {
    ListComponentStatus["Loading"] = "loading";
    ListComponentStatus["Error"] = "error";
    ListComponentStatus["Empty"] = "empty";
    ListComponentStatus["NonEmpty"] = "nonEmpty";
})(ListComponentStatus || (ListComponentStatus = {}));
const useListComponentStatusChange = (items, error, queryStatus, onStatusChange) => {
    const isEmptyList = items ? items.length === 0 : undefined;
    react_default.a.useEffect(() => {
        if (onStatusChange) {
            const status = error
                ? ListComponentStatus.Error
                : isEmptyList && !((queryStatus === null || queryStatus === void 0 ? void 0 : queryStatus.isFetching) === true)
                    ? ListComponentStatus.Empty
                    : isEmptyList === false
                        ? ListComponentStatus.NonEmpty
                        : ListComponentStatus.Loading;
            onStatusChange(status);
        }
    }, [error, isEmptyList, onStatusChange, queryStatus === null || queryStatus === void 0 ? void 0 : queryStatus.isFetching]);
};

// EXTERNAL MODULE: ./src/routes/Paths.ts
var Paths = __webpack_require__("9hZ6");

// EXTERNAL MODULE: ./src/utilities/Utils.ts + 2 modules
var Utils = __webpack_require__("TktC");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/index.ts + 64 modules
var components_shared_src = __webpack_require__("+INc");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/utilities/ThemeProvider/useTheme.js
var useTheme = __webpack_require__("jFKp");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Button/DefaultButton/DefaultButton.js + 2 modules
var DefaultButton = __webpack_require__("Favm");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Button/PrimaryButton/PrimaryButton.js
var PrimaryButton = __webpack_require__("xRnI");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-i18next/dist/es/useTranslation.js
var useTranslation = __webpack_require__("Tr4L");

// EXTERNAL MODULE: ./src/assets/emptyStatus/file-empty.svg
var file_empty = __webpack_require__("/5rm");

// EXTERNAL MODULE: ./src/assets/errorStatus/itemdisabled.svg
var itemdisabled = __webpack_require__("PNiH");

// EXTERNAL MODULE: ./src/assets/errorStatus/newchat.svg
var newchat = __webpack_require__("58+7");

// EXTERNAL MODULE: ./src/assets/errorStatus/noaccess.svg
var noaccess = __webpack_require__("5HKM");

// EXTERNAL MODULE: ./src/assets/errorStatus/offline.svg
var offline = __webpack_require__("ErM2");

// EXTERNAL MODULE: ./src/assets/errorStatus/warning.svg
var warning = __webpack_require__("wnJg");

// EXTERNAL MODULE: ./src/localization/index.ts + 2 modules
var localization = __webpack_require__("HVbO");

// EXTERNAL MODULE: ./src/service/RequestError.ts
var RequestError = __webpack_require__("MpLv");

// CONCATENATED MODULE: ./src/views/components/ErrorStatus/ErrorStatus.tsx













var SpecialErrorType;
(function (SpecialErrorType) {
    SpecialErrorType["noReport"] = "noReport";
    SpecialErrorType["noPermission"] = "noPermission";
    SpecialErrorType["newChat"] = "newChat";
    SpecialErrorType["guestUser"] = "guestUser";
    SpecialErrorType["solutionNotUpgrade"] = "SolutionNotUpgrade";
    SpecialErrorType["ReportDefinitionDisabled"] = "ReportDefinitionDisabled";
    SpecialErrorType["NotDefinitionSubmitter"] = "NotDefinitionSubmitter";
    SpecialErrorType["DefinitionReviewer"] = "DefinitionReviewer";
    SpecialErrorType["DefinitionOwner"] = "DefinitionOwner";
    SpecialErrorType["FormsResponseNotFound"] = "FormsResponseNotFound";
    SpecialErrorType["FormsPrincipalDisabled"] = "FormsPrincipalDisabled";
    SpecialErrorType["UserNotEnabled"] = "UserNotEnabled";
    SpecialErrorType["NotProvisioned"] = "NotProvisioned";
    SpecialErrorType["ExecutedSimilarManualReminderRecently"] = "ExecutedSimilarManualReminderRecently";
    SpecialErrorType["Retry"] = "retry";
    SpecialErrorType["EnvironmentNotFound"] = "EnvironmentNotFound";
    SpecialErrorType["ItemNotFound"] = "ItemNotFound";
    SpecialErrorType["BAPBatchAddUserFail"] = "BAPBatchAddUserFail";
    SpecialErrorType["MultiUserOperationConflict"] = "MultiUserOperationConflict";
})(SpecialErrorType || (SpecialErrorType = {}));
const ImageMap = {
    [SpecialErrorType.noReport]: file_empty["a" /* default */],
    [SpecialErrorType.noPermission]: noaccess["a" /* default */],
    [SpecialErrorType.newChat]: newchat["a" /* default */],
    [SpecialErrorType.guestUser]: noaccess["a" /* default */],
    [SpecialErrorType.solutionNotUpgrade]: newchat["a" /* default */],
    [SpecialErrorType.ReportDefinitionDisabled]: itemdisabled["a" /* default */],
    [SpecialErrorType.NotDefinitionSubmitter]: noaccess["a" /* default */],
    [SpecialErrorType.FormsResponseNotFound]: warning["a" /* default */],
    [SpecialErrorType.FormsPrincipalDisabled]: warning["a" /* default */],
    [SpecialErrorType.NotProvisioned]: noaccess["a" /* default */],
    [RequestError["a" /* ClientErrorCodes */].network]: offline["a" /* default */],
    [RequestError["a" /* ClientErrorCodes */].teamsSDK]: offline["a" /* default */],
    [SpecialErrorType.DefinitionReviewer]: file_empty["a" /* default */],
    [SpecialErrorType.DefinitionOwner]: file_empty["a" /* default */],
    [SpecialErrorType.ItemNotFound]: itemdisabled["a" /* default */],
    [SpecialErrorType.MultiUserOperationConflict]: newchat["a" /* default */],
};
/**
 * show error status with localized messages and image
 *
 * @param param0
 * @returns
 */
const ErrorStatus = ({ img, title, message, actionText, onAction, className, error, errorCode, hideImg, onReturnToHome, children, }) => {
    var _a;
    const theme = Object(useTheme["a" /* useTheme */])();
    const { t } = Object(useTranslation["a" /* useTranslation */])();
    const code = errorCode || (error === null || error === void 0 ? void 0 : error.code);
    const image = hideImg ? '' : img || ImageMap[code];
    // using requestId for requestError and {sessionId} for others
    const correlationId = (error === null || error === void 0 ? void 0 : error.requestId) || `{${logger["f" /* logger */].sessionId}}`;
    const action = actionText !== null && actionText !== void 0 ? actionText : (onAction && t(localization["a" /* Strings */].errorAction, { context: code }));
    const returnToHomepageAction = code === SpecialErrorType.MultiUserOperationConflict;
    react_default.a.useEffect(() => {
        if (error && !(error instanceof RequestError["b" /* RequestError */])) {
            // log all display error except for RequestError
            // (Request error already logged)
            logger["f" /* logger */].logTraceException(logger["a" /* LogCategory */].ErrorStatus, { error });
        }
    }, [error, code]);
    if (error instanceof RequestError["b" /* RequestError */] && !message) {
        message = ((_a = error.detailedErrors) !== null && _a !== void 0 ? _a : [error])
            .map(errorDetail => {
            var _a, _b, _c;
            return t(localization["a" /* Strings */].errorDescription, Object.assign({ context: errorDetail.code, correlationId, count: (_c = (_b = (_a = errorDetail.additionalErrorMessage) === null || _a === void 0 ? void 0 : _a.userNames) === null || _b === void 0 ? void 0 : _b.length) !== null && _c !== void 0 ? _c : 0 }, errorDetail.additionalErrorMessage));
        })
            .join('\n');
    }
    return (react_default.a.createElement(components_shared_src["d" /* EmptyState */], { image: image, role: 'alert', title: title !== null && title !== void 0 ? title : t(localization["a" /* Strings */].errorTitle, { context: code }), message: message, actionText: action, height: '100%', background: 'transparent', color: theme.palette.black, className: `${className} empty-state` },
        react_default.a.createElement("div", { style: { display: 'flex', justifyContent: 'center', gap: '20px' } },
            action && react_default.a.createElement(DefaultButton["a" /* DefaultButton */], { text: action, onClick: onAction }),
            returnToHomepageAction && onReturnToHome && (react_default.a.createElement(PrimaryButton["a" /* PrimaryButton */], { text: t(localization["a" /* Strings */].returnToHomePage), onClick: onReturnToHome }))),
        children));
};

// CONCATENATED MODULE: ./src/views/components/ErrorStatus/index.ts
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */


// CONCATENATED MODULE: ./src/hooks/actions/useNewChatEffect.ts






/**
 * check is new chat and auto redirect to error page
 * will skip channel for channel ID
 */
function useNewChatEffect() {
    const navigate = Object(react_router["i" /* useNavigate */])();
    Object(react["useEffect"])(() => {
        return () => {
            Object(src["h" /* getTeamsContext */])().then(context => {
                const { chat, team, channel } = context || {};
                if (Object(Utils["a" /* isNewChat */])(chat === null || chat === void 0 ? void 0 : chat.id, team === null || team === void 0 ? void 0 : team.groupId, channel === null || channel === void 0 ? void 0 : channel.id)) {
                    navigate(Object(Paths["b" /* generateURL */])(Paths["a" /* Paths */].HomePage, { errorType: SpecialErrorType.newChat }), {
                        replace: true,
                    });
                }
            });
        };
    }, [navigate]);
}

// CONCATENATED MODULE: ./src/hooks/actions/useTabContentAction.ts



/**
 * hook for get report list actions
 *
 * @param reportListType is submitted report list or received report list
 * @returns actions
 */
function useTabContentAction(reportListType, hasExtraList) {
    const { hasFlag, setFlag, delFlag } = useDataFlag(reportListType);
    const [extraCardListStatus, setExtraCardListStatus] = Object(react["useState"])();
    const [timeSensitiveCardListStatus, setTimeSensitiveCardListStatus] = Object(react["useState"])();
    const [adhocCardListStatus, setAdhocCardListStatus] = Object(react["useState"])();
    const [reportListStatus, setReportListStatus] = Object(react["useState"])();
    const statusList = [];
    if (hasExtraList)
        statusList.push(extraCardListStatus);
    statusList.push(timeSensitiveCardListStatus, adhocCardListStatus);
    if (reportListType !== 'ComposeExtension')
        statusList.push(reportListStatus);
    const isAllEmpty = statusList.every(s => s === ListComponentStatus.Empty);
    const hasNonEmpty = statusList.some(s => s === ListComponentStatus.NonEmpty);
    const hasError = statusList.some(s => s === ListComponentStatus.Error);
    const showLoading = !(hasFlag || isAllEmpty || hasNonEmpty || hasError);
    Object(react["useEffect"])(() => {
        if (isAllEmpty && hasFlag)
            delFlag();
        if (hasNonEmpty && !hasFlag)
            setFlag();
    }, [delFlag, hasNonEmpty, hasFlag, isAllEmpty, setFlag]);
    return {
        setExtraCardListStatus,
        setTimeSensitiveCardListStatus,
        setAdhocCardListStatus,
        setReportListStatus,
        showLoading,
        isAllEmpty,
    };
}

// CONCATENATED MODULE: ./src/hooks/actions/index.ts






// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-fluentui-teams-theme/index.ts
var components_fluentui_teams_theme = __webpack_require__("n4Dn");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-fluentui-teams-theme/src/teams/teams-theme.ts
var teams_theme = __webpack_require__("tPyQ");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-fluentui-teams-theme/src/teams/teams-sizes.ts
var teams_sizes = __webpack_require__("ZOo+");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-people/src/index.ts + 21 modules
var components_people_src = __webpack_require__("apXe");

// EXTERNAL MODULE: ./src/assets/avatars/beth-davies.png
var beth_davies = __webpack_require__("NGG8");

// EXTERNAL MODULE: ./src/assets/avatars/daisy-phillips.png
var daisy_phillips = __webpack_require__("uel9");

// EXTERNAL MODULE: ./src/assets/avatars/eric-nason.png
var eric_nason = __webpack_require__("DDLe");

// EXTERNAL MODULE: ./src/assets/avatars/joshua-vanburen.png
var joshua_vanburen = __webpack_require__("v0/M");

// EXTERNAL MODULE: ./src/assets/avatars/mona-kane.png
var mona_kane = __webpack_require__("Mt8f");

// EXTERNAL MODULE: ./src/service/index.ts + 2 modules
var service = __webpack_require__("YCKj");

// CONCATENATED MODULE: ./src/utilities/peopleUtils.ts
function mapUserViewToPeople(user) {
    var _a;
    return {
        id: user.id,
        key: user.id,
        mail: (_a = user.mail) !== null && _a !== void 0 ? _a : user.userPrincipalName,
        manager: undefined,
        name: user.displayName,
        officeLocation: user.officeLocation,
        phone: user.mobilePhone,
        role: user.jobTitle,
        parentDepartments: user.parentDepartments,
    };
}
// For Graph User, now using in People Avatar
function mapUserToPeople(user) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    return {
        id: (_a = user.id) !== null && _a !== void 0 ? _a : '',
        key: (_b = user.id) !== null && _b !== void 0 ? _b : '',
        mail: (_d = (_c = user.mail) !== null && _c !== void 0 ? _c : user.userPrincipalName) !== null && _d !== void 0 ? _d : '',
        manager: undefined,
        name: (_e = user.displayName) !== null && _e !== void 0 ? _e : '',
        officeLocation: (_f = user.officeLocation) !== null && _f !== void 0 ? _f : '',
        phone: (_g = user.mobilePhone) !== null && _g !== void 0 ? _g : '',
        role: (_h = user.jobTitle) !== null && _h !== void 0 ? _h : '',
        parentDepartments: [],
    };
}
function getDepartmentIdFromFullId(fullId) {
    var _a;
    return (_a = fullId === null || fullId === void 0 ? void 0 : fullId.split('/').pop()) !== null && _a !== void 0 ? _a : '';
}
function getDepartmentNameFromFullName(fullName) {
    var _a;
    return (_a = fullName === null || fullName === void 0 ? void 0 : fullName.split('/').pop()) !== null && _a !== void 0 ? _a : '';
}

// CONCATENATED MODULE: ./src/hooks/components/people.tsx
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};









// function useQuerySuggestions({
//     groupsInTenant,
//     tagsInGroup,
//     excludingSuggestions = [],
//     emptySuggestions = [],
//     fixedSuggestions = [],
// }: PeopleSelectSourceOptions): UseQuerySuggestionsResult {
//     const teamsContext = useTeamsContext();
//     const chatId = teamsContext?.chat?.id;
//     const groupId = teamsContext?.team?.groupId;
//     const { t } = useTranslation();
//     const [errorMessage, setErrorMessage] = React.useState<string>();
//     const querySuggestions = React.useCallback<NonNullable<PeopleSelectProps['onResolveSuggestions']>>(
//         async filter => {
//             if (!filter) return emptySuggestions;
//             const fetchingSuggestions: Promise<PeopleSelection[]>[] = [];
//             // Fetch users and groups in chat or group if applicable.
//             const fetchingUsersAndGroups = chatId
//                 ? SERVICE_CLIENT.peopleSearchVersion_QueryUsersInChat({ chatId, input: { QueryText: filter } })
//                 : groupId
//                 ? SERVICE_CLIENT.peopleSearchVersion_QueryUsersInGroup({ groupId, input: { QueryText: filter } })
//                 : groupsInTenant
//                 ? SERVICE_CLIENT.peopleSearchVersion_QueryUsersAndGroupsInTenantWide({ input: { QueryText: filter } })
//                 : SERVICE_CLIENT.peopleSearchVersion_QueryPeopleAndUsersInTenantWide({ input: { QueryText: filter } });
//             fetchingSuggestions.push(
//                 fetchingUsersAndGroups.then(objects => objects.map(mapDirectoryObjectToPeopleSelection))
//             );
//             // Fetch tags in group if applicable.
//             if (tagsInGroup && groupId) {
//                 const fetchingTags = SERVICE_CLIENT.teamTagVersion_SearchTeamTagResults({
//                     teamId: groupId,
//                     input: { QueryText: filter },
//                 });
//                 fetchingSuggestions.push(fetchingTags.then(tags => tags.map(mapTeamTagResultToManyPeopleSelection)));
//             }
//             const results = await Promise.allSettled(fetchingSuggestions);
//             // Collect suggestions from all sources and tolerate errors.
//             const suggestions = results.flatMap(result => {
//                 if (result.status !== 'fulfilled') return [];
//                 // Add resolveItems method to group selections and make them expandable.
//                 return result.value.map(selection =>
//                     selection.type === PeopleSelectionType.Group ? populateGroupPeopleSelection(selection) : selection
//                 );
//             });
//             // Collect error message from all sources.
//             setErrorMessage(
//                 results
//                     .map(result => {
//                         if (result.status !== 'rejected') return;
//                         // At this time, we only handle AAD errors.
//                         const error = result.reason;
//                         if (!(error instanceof RequestError && error.code.includes('AADSTS'))) return;
//                         return t(Strings.errorDescription, { context: error.code });
//                     })
//                     .filter(isDefined)[0]
//             );
//             // Unique and sort suggestions.
//             const sortedSuggestions = uniqueAndSortPeopleSelections(suggestions);
//             // Filter out fixed suggestions and excluding suggestions.
//             const filteredSuggestions = sortedSuggestions.filter(
//                 suggestion =>
//                     !fixedSuggestions.some(fixed => fixed.id === suggestion.id) &&
//                     !excludingSuggestions.includes(suggestion)
//             );
//             // Merge fixed suggestions and sorted suggestions.
//             const mergedSuggestions = [...fixedSuggestions, ...filteredSuggestions];
//             return mergedSuggestions;
//         },
//         [chatId, emptySuggestions, excludingSuggestions, fixedSuggestions, groupId, groupsInTenant, t, tagsInGroup]
//     );
//     return { querySuggestions, errorMessage };
// }
// const ManyPeopleSelectionCard: React.FC<{ selection: ManyPeopleSelection }> = ({ selection }) => {
//     const { t } = useTranslation();
//     const styles = useManyPeopleSelectionCardCardStyles();
//     return (
//         <div className={styles.root}>
//             <div className={styles.primary}>
//                 <PeopleCoin selection={selection} coinSize={72} onRetrieveIcon={retrievePeopleSelectionIcon} />
//                 <div className={styles.overview}>
//                     <div className={styles.name}>{selection.name}</div>
//                     {selection.type === PeopleSelectionType.Tag && (
//                         <div className={styles.badge}>{t(Strings.teamTagCardSign)}</div>
//                     )}
//                     {Array.isArray(selection.items) && (
//                         <div className={styles.description}>
//                             {t(Strings.membersCountDescription, { count: selection.items.length })}
//                         </div>
//                     )}
//                 </div>
//             </div>
//             {Array.isArray(selection.items) ? (
//                 <PeopleList
//                     className={styles.secondary}
//                     label={t(Strings.membersListDescription, { count: selection.items.length })}
//                     selections={selection.items}
//                     onRetrieveIcon={retrievePeopleSelectionIcon}
//                 />
//             ) : (
//                 <Spinner className={styles.secondary} aria-label={t(Strings.loadingAriaLabel)} />
//             )}
//         </div>
//     );
// };
const useManyPeopleSelectionCardCardStyles = Object(components_fluentui_teams_theme["a" /* makeStyles */])(theme => ({
    root: {
        width: '320px',
        maxHeight: '400px',
        display: 'flex',
        flexDirection: 'column',
    },
    primary: {
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        padding: '24px',
    },
    secondary: {
        flex: 1,
        padding: '24px',
        borderTop: `1px solid ${Object(teams_theme["f" /* isContrastTheme */])(theme.name) ? theme.palette.black : theme.palette.neutralLight}`,
        overflowY: 'auto',
    },
    overview: {
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
    },
    name: {
        fontSize: teams_sizes["a" /* FontSizes */].size14,
        fontWeight: 700,
        lineHeight: teams_sizes["a" /* FontSizes */].size20,
    },
    badge: {
        padding: '2px 6px',
        borderRadius: '4px',
        backgroundColor: theme.palette.themeLighter,
        border: Object(teams_theme["f" /* isContrastTheme */])(theme.name) ? `1px solid ${theme.palette.themePrimary}` : 'none',
        color: theme.palette.themePrimary,
    },
    description: {
        fontSize: teams_sizes["a" /* FontSizes */].size12,
        fontWeight: 400,
    },
}));
var PeoplePickerErrorContext;
(function (PeoplePickerErrorContext) {
    /**
     * The error context of writer exceed the max count.
     */
    PeoplePickerErrorContext["overWriters"] = "overWriters";
    /**
     * The error context of user exceed the max count.
     */
    PeoplePickerErrorContext["overUser"] = "overUser";
    /**
     * The error context of group exceed the max count.
     */
    PeoplePickerErrorContext["overGroup"] = "overGroup";
    /**
     * The error context of receiver exceed the max count.
     */
    PeoplePickerErrorContext["overReceivers"] = "overReceivers";
    /**
     * The error context of comanager exceed the max count.
     */
    PeoplePickerErrorContext["overComanagers"] = "overComanagers";
})(PeoplePickerErrorContext || (PeoplePickerErrorContext = {}));
// export function usePeopleViewProps({ maxCompactParts = 3 }: UsePeopleViewPropsOptions = {}): UsePeopleViewPropsResult {
//     const { t } = useTranslation();
//     return React.useMemo(
//         () => ({
//             formatNames: names => {
//                 const compactNames = [...names];
//                 if (compactNames.length > maxCompactParts) {
//                     const exposed = maxCompactParts - 1;
//                     const remaining = compactNames.length - exposed;
//                     compactNames.splice(exposed, remaining, t(Strings.userDisplayNamesOther, { count: remaining }));
//                 }
//                 return {
//                     normal: t(Strings.userDisplayNamesList, { val: names }),
//                     compact: t(Strings.userDisplayNamesList, { val: compactNames }),
//                 };
//             },
//         }),
//         [maxCompactParts, t]
//     );
// }
/**
 * Retrieves the icon of a people selection. If the icon is not available, it returns undefined.
 * Mocked icons and icons from Graph API are supported.
 *
 * @param selection The people selection.
 * @param signal The abort signal.
 * @returns The icon of the people selection.
 */
function retrievePeopleSelectionIcon(selection, signal) {
    return __awaiter(this, void 0, void 0, function* () {
        // const mockedIcon = await retrieveMockedPeopleSelectionIcon(selection, signal);
        // if (mockedIcon !== null) return mockedIcon;
        return retrievePeopleSelectionIconByGraph(selection, signal);
    });
}
function retrievePeopleSelectionIconByGraph(selection, signal) {
    return __awaiter(this, void 0, void 0, function* () {
        const resource = selection.type === components_people_src["b" /* PeopleSelectionType */].User
            ? service["f" /* graphServiceClient */].users(selection.id)
            : selection.type === components_people_src["b" /* PeopleSelectionType */].Group
                ? service["f" /* graphServiceClient */].groups(selection.id)
                : undefined;
        if (!resource)
            return;
        try {
            return yield resource.photos(64).download(signal);
        }
        catch (_a) {
            return;
        }
    });
}
function retrievePeoplePresenceByGraph(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield service["f" /* graphServiceClient */].users(id).getPresence();
    });
}
function retrievePeopleManagerByGraph(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield service["f" /* graphServiceClient */].users(id).getManager();
        return mapUserToPeople(user);
    });
}
function retrieveMockedPeopleSelectionIcon(selection, signal) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!mockedPeopleSelectionIconUrls.has(selection.id))
            return null;
        const url = mockedPeopleSelectionIconUrls.get(selection.id);
        if (!url)
            return;
        try {
            const response = yield fetch(url, { signal });
            return yield response.blob();
        }
        catch (_a) {
            return;
        }
    });
}
/**
 * Mocked people selection icons for template users.
 *
 * @see \Source\Common\Business\ReportDefinitionTemplateHandler.cs
 */
const mockedPeopleSelectionIconUrls = new Map([
    ['', undefined],
    ['4f197574-c487-4ab8-ac2e-c3584026d646', beth_davies["a" /* default */]],
    ['da3647a2-cdeb-4b72-a31d-f4a184d8e727', joshua_vanburen["a" /* default */]],
    ['8af34f36-a407-4b16-9b7e-14dcea93fb09', undefined],
    ['1a9ecbd6-05c1-42f1-ac1e-1534500be7d1', daisy_phillips["a" /* default */]],
    ['ea126a6e-8e86-4401-8d5a-c168a8ee1e36', eric_nason["a" /* default */]],
    ['da3c2255-d519-4ee2-a586-932f8b6d88af', mona_kane["a" /* default */]],
]);

// CONCATENATED MODULE: ./src/hooks/components/index.ts
// export * from './collapsible-text-fields';
// export * from './date-pickers';
// export * from './form-facades';

// export * from './rich-text-fields';

// CONCATENATED MODULE: ./src/hooks/paths/usePageTitle.ts

/**
 * hook for page title
 *
 * @param path
 * @returns path title
 */
const usePageTitle = (path) => {
    const { t } = Object(useTranslation["a" /* useTranslation */])();
    switch (path) {
        default:
            return '';
    }
};

// CONCATENATED MODULE: ./src/hooks/paths/useTopLevelPath.ts
const useTopLevelPath = (path) => {
    const slashIndex = path.indexOf('/', 1);
    return slashIndex > 0 ? path.slice(0, slashIndex) : path;
};

// CONCATENATED MODULE: ./src/hooks/paths/index.ts



// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/jwt-decode/build/jwt-decode.esm.js
var jwt_decode_esm = __webpack_require__("k2tF");

// CONCATENATED MODULE: ./src/hooks/people.ts
var people_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





const ANYONE_SELECTION_ID = 'anyone';
/**
 * A hook that returns the current user selection.
 *
 * @returns The current user selection.
 */
function useCurrentUserSelection() {
    const { data } = Object(es["useQuery"])({
        queryKey: getCurrentUserSelection.name,
        queryFn: getCurrentUserSelection,
        staleTime: Infinity,
    });
    return data;
}
function getCurrentUserSelection() {
    var _a;
    return people_awaiter(this, void 0, void 0, function* () {
        const teamsContext = yield Object(src["h" /* getTeamsContext */])();
        const user = teamsContext.user;
        if (!user)
            throw new Error('User not found in Teams context.');
        const selection = {
            type: components_people_src["b" /* PeopleSelectionType */].User,
            id: user.id,
            name: (_a = user.displayName) !== null && _a !== void 0 ? _a : '',
            mail: user.userPrincipalName,
        };
        // Patch name if absent in Teams context.
        // We need remove the fallback after the issue has been fixed by the Teams. Relevant issue discussion: https://github.com/OfficeDev/microsoft-teams-library-js/issues/2330
        if (!selection.name) {
            const token = yield Object(src["g" /* getAuthToken */])(env["b" /* ADDRESSBOOK_APP_RESOURCE_URL */]);
            const jwt = Object(jwt_decode_esm["a" /* default */])(token);
            if (jwt && jwt.name)
                selection.name = jwt.name;
        }
        return selection;
    });
}
// /**
//  * A hook that returns the contextual everyone selection for the current context.
//  * The items of selection are sorted by name alphabetically.
//  *
//  * @returns The contextual everyone selection.
//  */
// export function useContextualEveryoneSelection(): PeopleSelection | undefined {
//     const { t } = useTranslation();
//     const teamsContext = useTeamsContext();
//     const chatId = teamsContext?.chat?.id;
//     const groupId = teamsContext?.team?.groupId;
//     const chatUsersResult = useReactQuery(
//         SERVICE_CLIENT.peopleSearchVersion_GetUsersFromChat,
//         { chatId: chatId! },
//         { enabled: Boolean(chatId), select: uniqueAndSortUsersToSinglePeopleSelections }
//     );
//     const groupUsersResult = useReactQuery(
//         SERVICE_CLIENT.peopleSearchVersion_GetUsersFromGroup,
//         { groupId: groupId! },
//         { enabled: Boolean(groupId), select: uniqueAndSortUsersToSinglePeopleSelections }
//     );
//     const result = chatId ? chatUsersResult : groupId ? groupUsersResult : undefined;
//     const refetch = result?.refetch;
//     const everyoneItems = result?.data;
//     const everyoneItemsRef = React.useRef(everyoneItems);
//     everyoneItemsRef.current = everyoneItems;
//     return React.useMemo(() => {
//         if (!refetch) return;
//         return {
//             type: PeopleSelectionType.Unspecific,
//             id: EVERYONE_SELECTION_ID,
//             name: t(Strings.peoplePickerEveryoneItemText),
//             get items() {
//                 return everyoneItemsRef.current;
//             },
//             resolveItems: async () => (await refetch({ throwOnError: true })).data!,
//             icon: IconName.ContactCard,
//             expandable: true,
//         };
//     }, [refetch, t]);
// }

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-infinite-scroll-hook/dist/react-infinite-scroll-hook.esm.js + 1 modules
var react_infinite_scroll_hook_esm = __webpack_require__("MeCZ");

// CONCATENATED MODULE: ./src/views/common/CommonCardList/CommonCardList.component.tsx
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */


const CommonCardList = (props) => {
    var _a, _b;
    const { items, CardShimmerComponent, number, queryStatus, shimmerCount = 8 } = props;
    const [sentryRef] = Object(react_infinite_scroll_hook_esm["a" /* default */])({
        loading: !!(queryStatus === null || queryStatus === void 0 ? void 0 : queryStatus.isLoading),
        hasNextPage: !!(queryStatus === null || queryStatus === void 0 ? void 0 : queryStatus.canLoadMore),
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onLoadMore: (_a = queryStatus === null || queryStatus === void 0 ? void 0 : queryStatus.loadMore) !== null && _a !== void 0 ? _a : (() => { }),
        disabled: !queryStatus,
    });
    return (react_default.a.createElement(react_default.a.Fragment, null, (_b = items === null || items === void 0 ? void 0 : items.slice(0, number)) !== null && _b !== void 0 ? _b : Array.from({ length: number !== null && number !== void 0 ? number : shimmerCount }, (_v, i) => (react_default.a.createElement(react_default.a.Fragment, { key: i }, CardShimmerComponent))),
        ((queryStatus === null || queryStatus === void 0 ? void 0 : queryStatus.isLoading) || (queryStatus === null || queryStatus === void 0 ? void 0 : queryStatus.canLoadMore)) && items && (react_default.a.createElement("div", { ref: sentryRef, style: { width: '100%' }, "aria-hidden": true }, CardShimmerComponent))));
};

// CONCATENATED MODULE: ./src/views/common/CommonCardList/index.ts
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */


// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/DetailsList/DetailsRow.js + 2 modules
var DetailsRow = __webpack_require__("eZeq");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/style-utilities/lib/index.js + 14 modules
var lib = __webpack_require__("ogYq");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/DetailsList/DetailsHeader.js + 5 modules
var DetailsHeader = __webpack_require__("Pn0s");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Announced/Announced.js + 2 modules
var Announced = __webpack_require__("fh99");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/DetailsList/ShimmeredDetailsList.js + 23 modules
var ShimmeredDetailsList = __webpack_require__("KEG9");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/selection/Selection.types.js
var Selection_types = __webpack_require__("Imro");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/DetailsList/DetailsList.types.js
var DetailsList_types = __webpack_require__("hGA5");

// CONCATENATED MODULE: ./src/views/common/CommonDetailsList/CommonDetailsList.tsx
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */




const CommonDetailsList = ({ items, columns, className, rowClass, queryStatus, ariaLabel, onItemClick, shimmerLines, onRenderRow, isHeaderVisible = true, groupProps, groups, announcedMessage, }) => {
    var _a;
    const [sentryRef] = Object(react_infinite_scroll_hook_esm["a" /* default */])({
        loading: !!(queryStatus === null || queryStatus === void 0 ? void 0 : queryStatus.isLoading),
        hasNextPage: !!(queryStatus === null || queryStatus === void 0 ? void 0 : queryStatus.canLoadMore),
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onLoadMore: (_a = queryStatus === null || queryStatus === void 0 ? void 0 : queryStatus.loadMore) !== null && _a !== void 0 ? _a : (() => { }),
        disabled: !queryStatus,
        rootMargin: '0px 0px 200px 0px',
    });
    const onRenderRowDefault = react_default.a.useCallback((props) => props ? (react_default.a.createElement(DetailsRow["a" /* DetailsRow */], Object.assign({}, props, { className: Object(lib["F" /* mergeStyles */])(rowClass && rowClass(props)), "data-selection-invoke": true, role: 'row', "data-testid": 'DetailsRow', "aria-rowindex": props.itemIndex }))) : (react_default.a.createElement(react_default.a.Fragment, null)), [rowClass]);
    const onRenderDetailsHeader = react_default.a.useCallback((props) => props ? (react_default.a.createElement(react_default.a.Fragment, null,
        react_default.a.createElement(DetailsHeader["a" /* DetailsHeader */], Object.assign({}, props)),
        announcedMessage && react_default.a.createElement(Announced["a" /* Announced */], { message: announcedMessage }))) : null, [announcedMessage]);
    return (react_default.a.createElement(ShimmeredDetailsList["a" /* ShimmeredDetailsList */], { selectionMode: Selection_types["c" /* SelectionMode */].none, constrainMode: DetailsList_types["d" /* ConstrainMode */].unconstrained, layoutMode: DetailsList_types["e" /* DetailsListLayoutMode */].justified, enableShimmer: !items, columns: columns, items: ((queryStatus === null || queryStatus === void 0 ? void 0 : queryStatus.isLoading) || (queryStatus === null || queryStatus === void 0 ? void 0 : queryStatus.canLoadMore)) && items ? [...items, null] : items || [], isHeaderVisible: isHeaderVisible, onRenderRow: onRenderRow !== null && onRenderRow !== void 0 ? onRenderRow : onRenderRowDefault, onItemInvoked: onItemClick && (item => onItemClick(item)), onRenderDetailsFooter: () => react_default.a.createElement("div", { ref: sentryRef, style: { height: '30px' } }), className: className, ariaLabelForGrid: ariaLabel, shimmerLines: shimmerLines, role: 'table', groups: groups, groupProps: groupProps, onRenderDetailsHeader: onRenderDetailsHeader }));
};
const onRenderReportDefinitionColumn = (title, iconBackgroundColor, icon, description) => {
    return (react_default.a.createElement(components_shared_src["b" /* CommonIcon */], { title: title, iconBackgroundColor: iconBackgroundColor, icon: icon, styles: { title: { fontWeight: 'inherit' } }, description: description }));
};

// CONCATENATED MODULE: ./src/views/common/CommonDetailsList/index.ts
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */


// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/CommonLoadingIndicator/index.ts + 2 modules
var CommonLoadingIndicator = __webpack_require__("HKfi");

// CONCATENATED MODULE: ./src/views/common/LoadingIndicatorWrapper/LoadingIndicatorWrapper.component.tsx
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */




const LoadingIndicatorWrapperComponent = ({ isMobile }) => {
    const isFetching = Object(es["useIsFetching"])() > 0;
    const hideProgressIndicator = !isMobile && window.location.pathname.indexOf(Paths["a" /* Paths */].HomePage) > 0;
    return react_default.a.createElement(react_default.a.Fragment, null, !hideProgressIndicator && react_default.a.createElement(CommonLoadingIndicator["a" /* CommonLoadingIndicator */], { isFetching: isFetching }));
};

// CONCATENATED MODULE: ./src/views/common/LoadingIndicatorWrapper/index.ts
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */


// CONCATENATED MODULE: ./src/views/common/index.ts




// EXTERNAL MODULE: ./src/assets/emptyStatus/no-message.svg
var no_message = __webpack_require__("Qy9N");

// EXTERNAL MODULE: ./src/assets/emptyStatus/no-unsubmitted.svg
var no_unsubmitted = __webpack_require__("FGVm");

// EXTERNAL MODULE: ./src/assets/emptyStatus/optimizing.svg
var optimizing = __webpack_require__("RKR/");

// EXTERNAL MODULE: ./src/assets/emptyStatus/submitted.svg
var submitted = __webpack_require__("q7qM");

// CONCATENATED MODULE: ./src/views/components/EmptyStatus/EmptyStatus.styles.ts

const useEmptyStatusStyles = Object(components_fluentui_teams_theme["a" /* makeStyles */])(() => ({
    root: {
        img: {
            width: '200px',
            height: '200px',
            objectFit: 'contain',
        },
        '&.is-small': {
            gap: '0 !important',
            img: {
                width: '100px',
                height: '100px',
            },
        },
        '> button': {
            flexShrink: 0,
        },
    },
}));

// CONCATENATED MODULE: ./src/views/components/EmptyStatus/EmptyStatus.tsx









const EmptyStatus = ({ hyperText, img, title, message, actionText, onAction, className, isSmall, children, role, }) => {
    const theme = Object(useTheme["a" /* useTheme */])();
    const styles = useEmptyStatusStyles();
    const imgFile = Object(react["useMemo"])(() => img === 'FileEmpty'
        ? file_empty["a" /* default */]
        : img === 'Optimizing'
            ? optimizing["a" /* default */]
            : img === 'Submitted'
                ? submitted["a" /* default */]
                : img === 'NoUnsubmitted'
                    ? no_unsubmitted["a" /* default */]
                    : img === 'NoMessage'
                        ? no_message["a" /* default */]
                        : '', [img]);
    return (react_default.a.createElement(components_shared_src["d" /* EmptyState */], { role: role, className: Object(lib["F" /* mergeStyles */])(styles.root, isSmall && 'is-small', className), image: imgFile, title: title !== null && title !== void 0 ? title : '', hyperText: hyperText, message: message, height: '100%', background: 'transparent', color: theme.palette.black },
        actionText && react_default.a.createElement(PrimaryButton["a" /* PrimaryButton */], { text: actionText, onClick: onAction }),
        children));
};

// CONCATENATED MODULE: ./src/views/components/EmptyStatus/index.ts
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */


// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Stack/Stack.js + 4 modules
var Stack = __webpack_require__("tZX7");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Text/Text.js + 2 modules
var Text = __webpack_require__("l3kg");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-hooks/lib/useId.js
var useId = __webpack_require__("EO0U");

// CONCATENATED MODULE: ./src/views/components/LoadingPage/LoadingPage.styles.ts


const useLoadingStyles = Object(components_fluentui_teams_theme["a" /* makeStyles */])(theme => ({
    root: {
        height: '100%',
        padding: '0 2em',
    },
    message: {
        fontSize: '1.2em',
        fontWeight: lib["e" /* FontWeights */].bold,
        color: theme.palette.black,
        whiteSpace: 'pre-line',
        textAlign: 'center',
    },
}));

// CONCATENATED MODULE: ./src/views/components/LoadingPage/LoadingPage.tsx
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */









const LoadingPage = ({ message, className }) => {
    const { t, ready } = Object(useTranslation["a" /* useTranslation */])('strings', { useSuspense: false });
    const styles = useLoadingStyles();
    const id = Object(useId["a" /* useId */])('LoadingLabel');
    react_default.a.useEffect(() => {
        const loadingTimeout = setTimeout(() => {
            logger["f" /* logger */].logTraceError(logger["a" /* LogCategory */].LoadingTimeout, `${Constants["h" /* LOADING_TIMEOUT_IN_SECONDS */]} seconds loading timeout happens in page: ${window.location.href}`);
        }, Constants["h" /* LOADING_TIMEOUT_IN_SECONDS */] * 1000);
        return () => clearTimeout(loadingTimeout);
    }, []);
    return (react_default.a.createElement(Stack["a" /* Stack */], { verticalFill: true, verticalAlign: 'center', horizontalAlign: 'center', className: `${Object(lib["F" /* mergeStyles */])(styles.root, className)} loading-page`, role: 'alert', "aria-atomic": true },
        react_default.a.createElement(components_shared_src["e" /* Spinner */], { "aria-label": ready ? t(localization["a" /* Strings */].loadingAriaLabel) : 'Loading', "aria-describedby": message && id }),
        message && (react_default.a.createElement(Text["a" /* Text */], { id: id, className: styles.message }, message))));
};

// CONCATENATED MODULE: ./src/views/components/LoadingPage/index.ts
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */


// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Callout/Callout.js + 4 modules
var Callout = __webpack_require__("dXTB");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Icon/FontIcon.js
var FontIcon = __webpack_require__("KIfy");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Button/ActionButton/ActionButton.js + 1 modules
var ActionButton = __webpack_require__("BFcr");

// EXTERNAL MODULE: ./src/common/icons.tsx
var icons = __webpack_require__("dERd");

// CONCATENATED MODULE: ./src/utilities/quickAppUtils.ts


function OpenChat(userEmail) {
    Object(src["f" /* executeDeepLink */])(`${env["j" /* TEAMS_URL */]}/l/chat/0/0?users=${userEmail}`);
    // ${TEAMS_URL}/multi-window/chats/
    // executeDeepLink(`${TEAMS_URL}/multi-window/chats/users=${userEmail}`);
    // way1: executeDeepLink(`${TEAMS_URL}/l/chat/0/0?users=${userEmail}`);
    // way2: window.open(`${TEAMS_URL}/l/chat/0/0?users=${userEmail}`, '_blank');
    // openChat(request);
    // way3:
    // const request = {
    //     user: userEmail,
    //     message: '',
    // };
    // openChat(request);
    // way4:
    // startTask(
    //     {
    //         url: `${TEAMS_URL}/l/chat/0/0?users=${userEmail}`,
    //         // url: 'https://happy-field-nwrxt4j-8080.asse.devtunnels.ms/#/homePage',
    //         title: 'new Chat',
    //         size: { width: 600, height: 400 },
    //     },
    //     result => {
    //         if (result) {
    //             console.log('startTask 收到来自对话框的数据：', result);
    //         } else {
    //             console.log('startTask 对话框被关闭，没有返回数据。');
    //         }
    //     }
    // );
}
function OpenChatById(userId) {
    Object(src["f" /* executeDeepLink */])(`${env["j" /* TEAMS_URL */]}/l/chat/0/0?users=8:orgid:${userId}`);
}
function OpenCallByEmail(userEmail) {
    Object(src["f" /* executeDeepLink */])(`${env["j" /* TEAMS_URL */]}/l/call/0/0?users=${userEmail}`);
}
function OpenVideoCallByEmail(userEmail) {
    Object(src["f" /* executeDeepLink */])(`${env["j" /* TEAMS_URL */]}/l/call/0/0?users=${userEmail}`);
}
function OpenCallById(userId) {
    Object(src["f" /* executeDeepLink */])(`${env["j" /* TEAMS_URL */]}/l/call/0/0?users=8:orgid:${userId}`);
}
function OpenVideoCallById(userId) {
    Object(src["f" /* executeDeepLink */])(`${env["j" /* TEAMS_URL */]}/l/call/0/0?users=8:orgid:${userId}`);
}
// export function OpenOrgExplorerApp(userId: string): void {
//     executeDeepLink(`${TEAMS_URL}/l/app/1f8c20f5-d70f-4f8e-93e1-31d8fce0c8c9/1/${userId}`);
// }

// CONCATENATED MODULE: ./src/views/components/PeopleCard/PeopleCard.styles.ts
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */


const usePeopleCardStyles = Object(components_fluentui_teams_theme["a" /* makeStyles */])(theme => ({
    root: {
        fontSize: theme.fonts.small.fontSize,
        display: 'flex',
        gap: '12px',
        flexDirection: 'column',
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
    },
    main: {
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        // maxHeight: '200px',
        // overflowY: 'auto',
    },
    subHeaderText: {
        fontSize: theme.fonts.medium.fontSize,
        fontWeight: 'bold',
        color: theme.palette.black,
    },
    subHeader: {
        display: 'flex',
        flexDirection: 'row',
        gap: '2px',
        alignItems: 'center',
    },
    presence: {
        display: 'flex',
        flexDirection: 'row',
        gap: '16px',
        alignItems: 'center',
        padding: '12px 16px 12px 16px',
        border: Object(teams_theme["g" /* isDarkTheme */])(theme.name) ? '1px solid #3D3D3D' : '1px solid #F0F0F0',
    },
    ContractInfo: {
        display: 'flex',
        flexDirection: 'row',
        gap: '8px',
        alignItems: 'center',
    },
    icon: {
        width: '20px',
        height: '20px',
        fontSize: '20px',
        bottom: '1px',
        color: theme.palette.black,
        position: 'relative',
        flexShrink: 0,
    },
    ManagerInfo: {},
    boldText: {
        fontSize: theme.fonts.mediumPlus.fontSize,
        fontWeight: 'bold',
        color: theme.palette.black,
    },
    peopleWithIcon: {
        display: 'flex',
        flexDirection: 'row',
        gap: '16px',
    },
    peopleWithPresenceInfo: {
        position: 'relative',
        width: '64px',
        height: '64px',
    },
    presenceInfo: {
        position: 'absolute',
        bottom: 0,
        borderRadius: '100%',
        border: `2px solid ${theme.palette.white}`,
        backgroundColor: theme.palette.white,
        right: 0,
        width: '20px',
        height: '20px',
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
    },
    quickHeader: {
        display: 'flex',
        flexDirection: 'row',
        gap: '20px',
    },
    callout: {
        width: 340,
        padding: '20px 24px',
    },
    divider: {
        border: Object(teams_theme["g" /* isDarkTheme */])(theme.name) ? '1px solid #3D3D3D' : '1px solid #F0F0F0',
    },
    text: [Object(components_shared_src["f" /* ellipsisStyles */])(1)],
}));

// CONCATENATED MODULE: ./src/views/components/PeopleCard/PeopleCard.tsx
var PeopleCard_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};










const PeopleCard = ({ people, onDismiss, target, departmentMapping }) => {
    const peopleCardStyles = usePeopleCardStyles();
    const [presence, setPresence] = react_default.a.useState(undefined);
    const [manager, setManager] = react_default.a.useState(undefined);
    const { t } = Object(useTranslation["a" /* useTranslation */])();
    react_default.a.useEffect(() => {
        const fetchPresence = () => PeopleCard_awaiter(void 0, void 0, void 0, function* () {
            const presence = yield retrievePeoplePresenceByGraph(people.id);
            setPresence(presence);
        });
        fetchPresence();
    }, [people.id]);
    react_default.a.useEffect(() => {
        const fetchPresence = () => PeopleCard_awaiter(void 0, void 0, void 0, function* () {
            const manager = yield retrievePeopleManagerByGraph(people.id);
            setManager(manager);
        });
        fetchPresence();
    }, [people.id]);
    return (react_default.a.createElement(Callout["a" /* Callout */], { role: 'dialog', className: peopleCardStyles.callout, gapSpace: 20, key: people.id, target: target, isBeakVisible: false, onDismiss: onDismiss, setInitialFocus: true },
        react_default.a.createElement("div", { className: peopleCardStyles.root },
            react_default.a.createElement("div", { className: peopleCardStyles.info },
                react_default.a.createElement("div", { className: peopleCardStyles.peopleWithIcon },
                    react_default.a.createElement("div", { className: peopleCardStyles.peopleWithPresenceInfo },
                        react_default.a.createElement(components_people_src["a" /* PeopleCoin */], { selection: { id: people.id, name: people.name, type: 0 }, onRetrieveIcon: retrievePeopleSelectionIcon, coinSize: 64 }),
                        presence && (react_default.a.createElement("div", { className: peopleCardStyles.presenceInfo },
                            react_default.a.createElement(FontIcon["a" /* FontIcon */], { "aria-label": 'Mail', iconName: icons["a" /* PRESENCE_ICONS */][presence].name, className: Object(lib["F" /* mergeStyles */])(peopleCardStyles.icon, {
                                    color: icons["a" /* PRESENCE_ICONS */][presence].color,
                                }) })))),
                    react_default.a.createElement("div", { className: peopleCardStyles.info },
                        react_default.a.createElement("span", { className: peopleCardStyles.boldText }, people.name),
                        react_default.a.createElement("span", null, people.role),
                        people.parentDepartments.map(department => {
                            var _a;
                            return (react_default.a.createElement("span", null, getDepartmentNameFromFullName((_a = departmentMapping[department]) === null || _a === void 0 ? void 0 : _a.departmentFullName)));
                        }))),
                react_default.a.createElement("div", { className: peopleCardStyles.quickHeader },
                    react_default.a.createElement(ActionButton["a" /* ActionButton */], { iconProps: {
                            iconName: 'Chat',
                            styles: {
                                root: {
                                    fontSize: '20px',
                                },
                            },
                        }, title: 'Chat', ariaLabel: 'Chat', 
                        // className={styles.hoverShowButton}
                        onClick: () => OpenChatById(people.id) }),
                    react_default.a.createElement(ActionButton["a" /* ActionButton */], { iconProps: {
                            iconName: 'Call',
                            styles: {
                                root: {
                                    fontSize: '20px',
                                    padding: 0,
                                },
                            },
                        }, title: 'OpenCall', ariaLabel: 'OpenCall', 
                        // className={styles.hoverShowButton}
                        onClick: () => OpenCallById(people.id) }),
                    react_default.a.createElement(ActionButton["a" /* ActionButton */], { iconProps: {
                            iconName: 'Video',
                            styles: {
                                root: {
                                    fontSize: '20px',
                                },
                            },
                        }, title: 'OpenVideoCall', ariaLabel: 'OpenVideoCall', 
                        // className={styles.hoverShowButton}
                        onClick: () => OpenVideoCallById(people.id) })),
                react_default.a.createElement("div", { className: peopleCardStyles.divider })),
            react_default.a.createElement("div", { className: peopleCardStyles.main },
                presence && (react_default.a.createElement("div", { className: peopleCardStyles.presence },
                    react_default.a.createElement(FontIcon["a" /* FontIcon */], { "aria-label": 'Mail', iconName: icons["a" /* PRESENCE_ICONS */][presence].name, className: Object(lib["F" /* mergeStyles */])(peopleCardStyles.icon, {
                            color: icons["a" /* PRESENCE_ICONS */][presence].color,
                        }) }),
                    react_default.a.createElement("span", { className: peopleCardStyles.subHeaderText }, presence))),
                (people.mail || people.phone || people.officeLocation) && (react_default.a.createElement("div", { className: peopleCardStyles.subHeader },
                    react_default.a.createElement("span", { className: peopleCardStyles.subHeaderText }, t(localization["a" /* Strings */].contractLabel)),
                    react_default.a.createElement(FontIcon["a" /* FontIcon */], { "aria-label": 'ChevronRight', iconName: 'ChevronRight', className: peopleCardStyles.icon }))),
                people.mail && (react_default.a.createElement("div", { className: peopleCardStyles.ContractInfo },
                    react_default.a.createElement(FontIcon["a" /* FontIcon */], { "aria-label": 'Mail', iconName: 'Mail', className: peopleCardStyles.icon }),
                    react_default.a.createElement("span", { className: peopleCardStyles.text, title: people.mail }, people.mail))),
                people.phone && (react_default.a.createElement("div", { className: peopleCardStyles.ContractInfo },
                    react_default.a.createElement(FontIcon["a" /* FontIcon */], { "aria-label": 'Call', iconName: 'Call', className: peopleCardStyles.icon }),
                    react_default.a.createElement("span", { className: peopleCardStyles.text }, people.phone))),
                people.officeLocation && (react_default.a.createElement("div", { className: peopleCardStyles.ContractInfo },
                    react_default.a.createElement(FontIcon["a" /* FontIcon */], { "aria-label": 'Location', iconName: 'Location', className: peopleCardStyles.icon }),
                    react_default.a.createElement("span", { className: peopleCardStyles.text }, people.officeLocation))),
                manager && (react_default.a.createElement(react_default.a.Fragment, null,
                    react_default.a.createElement("div", { className: peopleCardStyles.subHeader },
                        react_default.a.createElement("span", { className: peopleCardStyles.subHeaderText }, t(localization["a" /* Strings */].managerLabel)),
                        react_default.a.createElement(FontIcon["a" /* FontIcon */], { "aria-label": 'ChevronRight', iconName: 'ChevronRight', className: peopleCardStyles.icon })),
                    react_default.a.createElement("div", { className: peopleCardStyles.peopleWithIcon },
                        react_default.a.createElement("div", { className: peopleCardStyles.info },
                            react_default.a.createElement(components_people_src["a" /* PeopleCoin */], { selection: { id: manager.id, name: manager.name, type: 0 }, onRetrieveIcon: retrievePeopleSelectionIcon, coinSize: 32 })),
                        react_default.a.createElement("div", null,
                            react_default.a.createElement("span", { className: peopleCardStyles.text, title: manager.name }, manager.name),
                            react_default.a.createElement("br", null),
                            react_default.a.createElement("span", { className: peopleCardStyles.text }, manager.role)))))))));
};

// CONCATENATED MODULE: ./src/views/components/PeopleCard/index.ts
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */


// CONCATENATED MODULE: ./src/views/components/index.ts





// CONCATENATED MODULE: ./src/views/components/RefreshButton/RefreshButton.tsx
var RefreshButton_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








const RefreshButton = () => {
    const onClick = () => {
        clearCache();
        return;
    };
    const { t } = Object(useTranslation["a" /* useTranslation */])();
    const navigate = Object(react_router["i" /* useNavigate */])();
    const { mutate: clearCache, isSuccess: clearCacheSuccess, isLoading: isClearingCache, error: clearCacheError, } = Object(es["useMutation"])({
        mutationFn: () => RefreshButton_awaiter(void 0, void 0, void 0, function* () {
            yield service["c" /* SERVICE_CLIENT */].clearCache({});
        }),
        onSuccess: () => {
            service["g" /* queryClient */].clear(); // Clear the query cache from memory
            Object(service["e" /* clearQueryClientPersistor */])(); // Clear the query cache from local storage
            service["g" /* queryClient */].invalidateQueries();
            // window.location.reload();
            navigate(Paths["a" /* Paths */].HomePage);
        },
    });
    return (react_default.a.createElement(react_default.a.Fragment, null,
        react_default.a.createElement(ActionButton["a" /* ActionButton */], { iconProps: { iconName: 'Refresh' }, onClick: onClick }),
        isClearingCache && react_default.a.createElement("div", null, t(localization["a" /* Strings */].refreshCacheLoading)),
        clearCacheError && react_default.a.createElement("div", null, t(localization["a" /* Strings */].refreshCacheFailed, { error: clearCacheError }))));
};

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/TextField/TextField.js + 2 modules
var TextField = __webpack_require__("XgkO");

// CONCATENATED MODULE: ./src/views/components/SearchPeopleField/SearchPeopleField.styles.ts

const useSearchFieldStyles = Object(components_fluentui_teams_theme["a" /* makeStyles */])(theme => ({
    inputField: {
        flex: 1,
        '.ms-Label': {
            padding: '0 0 4px',
            whiteSpace: 'nowrap',
        },
        '.ms-TextField-field': {
            paddingLeft: '36px',
            // backgroundColor: theme.palette.white,
            backgroundColor: theme.palette.neutralLight,
            paddingRight: '36px',
        },
    },
    textFieldIcon1: {
        position: 'absolute',
        left: '6px',
        top: '50%',
        transform: 'translateY(-50%)',
        pointerEvents: 'none',
    },
}));

// CONCATENATED MODULE: ./src/views/components/SearchPeopleField/SearchPeopleField.tsx







const SearchPeopleField = ({ searchText }) => {
    const { t } = Object(useTranslation["a" /* useTranslation */])();
    const [inputValue, setInputValue] = Object(react["useState"])(searchText !== null && searchText !== void 0 ? searchText : '');
    const onChange = Object(react["useCallback"])((_, value) => {
        setInputValue(value || '');
    }, []);
    const styles = useSearchFieldStyles();
    const navigate = Object(react_router["i" /* useNavigate */])();
    const iconProps = {
        iconName: 'Search',
        className: styles.textFieldIcon1,
        styles: {
            root: {
                fontSize: '20px',
            },
        },
    };
    return (react_default.a.createElement(react_default.a.Fragment, null,
        react_default.a.createElement("form", { noValidate: true, autoComplete: 'off' },
            react_default.a.createElement(TextField["a" /* TextField */], { className: styles.inputField, placeholder: t(localization["a" /* Strings */].searchPlaceholder), iconProps: iconProps, value: inputValue, onChange: onChange, onKeyDown: event => {
                    if (event.key === 'Enter' && inputValue !== '') {
                        console.log(window.location.href);
                        navigate(Object(Paths["b" /* generateURL */])(Paths["a" /* Paths */].SearchResults, undefined, {
                            searchText: inputValue,
                        }));
                    }
                } }))));
};

// CONCATENATED MODULE: ./src/views/components/AddressBookAppHeader/AddressBookAppHeader.styles.ts

const useAppHeaderStyles = Object(components_fluentui_teams_theme["a" /* makeStyles */])(() => ({
    navContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: '4px',
        alignItems: 'center',
    },
}));

// CONCATENATED MODULE: ./src/views/components/AddressBookAppHeader/AddressBookAppHeader.tsx
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */








const AddressBookAppHeader = ({ items, farItems, title, moduleName, searchText, }) => {
    const { t } = Object(useTranslation["a" /* useTranslation */])();
    const styles = useAppHeaderStyles();
    const finalFarItems = react["useMemo"](() => {
        return !farItems ? (react["createElement"]("div", { className: styles.navContainer },
            react["createElement"](SearchPeopleField, { searchText: searchText }),
            react["createElement"](RefreshButton, null))) : (farItems);
    }, [farItems, searchText, styles.navContainer]);
    return (react["createElement"](components_shared_src["a" /* AppHeader */], { title: title === undefined ? t(localization["a" /* Strings */].appName, { context: env["g" /* ENVIRONMENT */] }) : title, items: items, farItems: finalFarItems, moduleName: moduleName }));
};

// CONCATENATED MODULE: ./src/views/components/AddressBookAppHeader/index.ts


// CONCATENATED MODULE: ./src/views/containers/ConsentPage/ConsentPage.tsx













const ConsentPage = () => {
    // const href = window.location.href;
    // useEffect(() => {
    //     logger.logTraceWarning(LogCategory.Navigate, `Redirect to desktop default page. original url:${href}`);
    // }, [href]);
    const tenantId = env["o" /* initQuery */].get(env["k" /* URIParam */].TenantId);
    const { t } = Object(useTranslation["a" /* useTranslation */])();
    const onClick = () => {
        const consentUrl = `${env["d" /* CONSENT_LOGIN_URL */]}/${tenantId}/oauth2/v2.0/authorize?client_id=${env["l" /* WORKREPORT_APP_AAD_ID */]}&response_type=code&scope=.default&response_mode=query&prompt=consent`;
        window.open(consentUrl, '_blank');
    };
    usePollingData();
    return (react_default.a.createElement(react_default.a.Fragment, null,
        react_default.a.createElement(AddressBookAppHeader, { moduleName: logger["b" /* ModuleName */].HomePage, farItems: react_default.a.createElement(RefreshButton, null) }),
        react_default.a.createElement(EmptyStatus, { img: 'Optimizing', title: t(localization["a" /* Strings */].consentTitleLabel), message: t(localization["a" /* Strings */].consentDescriptionLabel), actionText: t(localization["a" /* Strings */].consentButtonLabel), onAction: onClick })));
};
function usePollingData() {
    const navigate = Object(react_router["i" /* useNavigate */])();
    const [interval, setInterval] = Object(react["useState"])(5000); // 默认轮询间隔为 5 秒\
    const [isPolling, setIsPolling] = Object(react["useState"])(true); // 默认轮询间隔为 5 秒
    const { data, isLoading, error } = Object(es["useQuery"])([
        'bound tokenExchangeVersion_Exchange',
        {
            input: {
                ResourceType: 0,
                ResourceUrl: env["h" /* GRAPH_RESOURCE_URL */],
            },
        },
    ], () => service["c" /* SERVICE_CLIENT */].tokenExchangeVersion_Exchange({
        input: { ResourceType: service["b" /* ResourceType */].Graph, ResourceUrl: env["h" /* GRAPH_RESOURCE_URL */] },
    }), {
        refetchInterval: interval,
        refetchIntervalInBackground: true,
        onSuccess: data => {
            console.log('Data updated:', data.token);
            console.log('Data updated:', isTokenValid(data.token));
            // 这里可以根据业务逻辑动态调整轮询间隔
            if (isTokenValid(data.token)) {
                console.log('Token is valid, stop polling.');
                setIsPolling(false);
                navigate(Object(Paths["b" /* generateURL */])(Paths["a" /* Paths */].DepartmentTeam, {}), {});
            }
        },
        onError: err => {
            console.error('Error during polling:', err);
        },
        enabled: isPolling, // 默认开启轮询
    });
    return { data, isLoading, error, setInterval }; // 返回数据和控制轮询的方法
}
// function usePollingWithAccessToken(interval: number = 5000): [any, () => void] {
//     // const { data: accessToken, isLoading, error } = useAccessToken();
//     const navigate = useNavigate();
//     const [isPolling, setIsPolling] = useState(true); // 控制轮询开关
//     useEffect(() => {
//         if (!isPolling) return;
//         let timeoutId: NodeJS.Timeout; // 用于管理 `setTimeout` 的 ID
//         const poll = async (): Promise<void> => {
//             try {
//                 if (!isTokenValid(accessToken.token)) {
//                     setIsPolling(false);
//                     navigate(Paths.HomePage);
//                     return;
//                 }
//             } catch (err) {
//                 console.error('Polling error:', err);
//             }
//             if (isPolling) {
//                 timeoutId = setTimeout(() => {
//                     poll();
//                 }, interval); // 递归调用轮询
//             }
//         };
//         poll(); // 开始轮询
//         return () => {
//             setIsPolling(false); // 停止轮询
//             clearTimeout(timeoutId); // 清理 timeout
//         };
//     }, [accessToken, isPolling, isLoading, error, interval, navigate]);
//     return [accessToken, () => setIsPolling(false)]; // 返回数据和停止轮询的函数
// }

// CONCATENATED MODULE: ./src/views/containers/ConsentPage/index.ts


// CONCATENATED MODULE: ./src/views/containers/DefaultPage/DesktopDefaultPage.tsx
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */




const DesktopDefaultPage = () => {
    const href = window.location.href;
    Object(react["useEffect"])(() => {
        logger["f" /* logger */].logTraceWarning(logger["a" /* LogCategory */].Navigate, `Redirect to desktop default page. original url:${href}`);
    }, [href]);
    return react_default.a.createElement(react_router["a" /* Navigate */], { to: Paths["a" /* Paths */].DepartmentTeam, replace: true });
};

// CONCATENATED MODULE: ./src/views/containers/DefaultPage/MobileDefaultPage.tsx
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */




const MobileDefaultPage = () => {
    const href = window.location.href;
    Object(react["useEffect"])(() => {
        logger["f" /* logger */].logTraceWarning(logger["a" /* LogCategory */].Navigate, `Redirect to mobile default page. original url:${href}`);
    }, [href]);
    return react_default.a.createElement(react_router["a" /* Navigate */], { to: Paths["a" /* Paths */].HomePage, replace: true });
};

// CONCATENATED MODULE: ./src/views/containers/DefaultPage/index.ts
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */



// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Link/Link.js + 2 modules
var Link = __webpack_require__("v4N6");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-i18next/dist/es/Trans.js + 2 modules
var Trans = __webpack_require__("TVEO");

// CONCATENATED MODULE: ./src/views/containers/EmptyPage/EmptyPage.styles.ts

const useEmptyPageStyles = Object(components_fluentui_teams_theme["a" /* makeStyles */])(theme => ({
    root: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
    },
}));

// CONCATENATED MODULE: ./src/views/containers/EmptyPage/EmptyPage.tsx











const EmptyPage = () => {
    const { t } = Object(useTranslation["a" /* useTranslation */])();
    const style = useEmptyPageStyles();
    // const onClick = (): void => {
    //     const url =
    //         'https://learn.microsoft.com/en-us/exchange/address-books/hierarchical-address-books/enable-or-disable-hierarchical-address-books';
    //     window.open(url, '_blank');
    // };
    // const [enable, setEnable] = React.useState(false);
    // const {
    //     data: navDataV2,
    //     isLoading: loadingNavV2,
    //     error: navDataErrorV2,
    // } = useReactQuery(
    //     SERVICE_CLIENT.fetchDepartmentNavV2,
    //     { enable },
    //     {
    //         staleTime: 1 * 2 * 60 * 1000, // 2 minute
    //         cacheTime: 1 * 30 * 60 * 1000, // 30 minutes
    //     }
    // );
    const navigate = Object(react_router["i" /* useNavigate */])();
    // useEffect(() => {
    //     if (navDataV2) {
    //         setEnable(false);
    //         if (navDataV2.length !== 0) {
    //             navigate(generateURL(Paths.HomePage));
    //         }
    //     }
    // }, [navDataV2, navigate]);
    const onRefresh = () => {
        // setEnable(true);
        //   const queryK
        service["g" /* queryClient */].clear(); // Clear the query cache from memory
        Object(service["e" /* clearQueryClientPersistor */])(); // Clear the query cache from local storage
        service["g" /* queryClient */].invalidateQueries();
        navigate(Object(Paths["b" /* generateURL */])(Paths["a" /* Paths */].HomePage));
        return;
    };
    const hyperText = (react_default.a.createElement("span", null,
        react_default.a.createElement(Trans["a" /* Trans */], { i18nKey: localization["a" /* Strings */].emptyDescriptionWithLinkLabel, style: { display: 'inline-block' } },
            "There are no departments or members available to display. Please",
            react_default.a.createElement(Link["a" /* Link */], { href: 'https://learn.microsoft.com/en-us/exchange/address-books/hierarchical-address-books/enable-or-disable-hierarchical-address-books', target: '_blank', rel: 'noreferrer' }, "click here"),
            "to set them up")));
    return (react_default.a.createElement(react_default.a.Fragment, null,
        react_default.a.createElement(AddressBookAppHeader, { moduleName: logger["b" /* ModuleName */].HomePage, farItems: react_default.a.createElement(react_default.a.Fragment, null) }),
        react_default.a.createElement("div", { className: style.root },
            react_default.a.createElement(EmptyStatus, { img: 'Optimizing', title: t(localization["a" /* Strings */].emptyTitleLabel), 
                // message={t(Strings.emptyDescriptionLabel)}
                hyperText: hyperText, actionText: '\u5237\u65B0\u6570\u636E', onAction: onRefresh }))));
};

// CONCATENATED MODULE: ./src/views/containers/EmptyPage/index.ts


// EXTERNAL MODULE: ./src/views/containers/ErrorBoundary/index.ts + 2 modules
var ErrorBoundary = __webpack_require__("TzxL");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Nav/Nav.js + 2 modules
var Nav = __webpack_require__("2Ah+");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Dropdown/Dropdown.js + 5 modules
var Dropdown = __webpack_require__("AH+P");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Tooltip/TooltipHost.js + 5 modules
var TooltipHost = __webpack_require__("lm3o");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Tooltip/Tooltip.types.js
var Tooltip_types = __webpack_require__("rtnm");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/common/DirectionalHint.js
var DirectionalHint = __webpack_require__("kvDL");

// CONCATENATED MODULE: ./src/views/components/PeopleList/PeopleList.styles.ts


const usePeopleListStyles = Object(components_fluentui_teams_theme["a" /* makeStyles */])(theme => ({
    iconCell: {
        padding: 0,
        fontSize: '16px',
        marginRight: '4px',
        height: '20px',
        width: '20px',
    },
    cellTitle: {
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        flexDirection: 'row',
    },
    nameShow: {
        display: 'flex',
        flexDirection: 'row',
        gap: '4px',
        alignItems: 'center',
        cursor: 'pointer',
    },
    departmentList: {
        display: 'inline-block',
    },
    nameField: {
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        flexDirection: 'row',
    },
    hoverShowButton: {
        height: '100%',
        width: '100%',
        padding: '0',
        ':hover,:focus-within': {
            color: theme.palette.themePrimary,
        },
    },
    hoverShowButtonContainer: {
        display: 'none',
        '*:hover > &, *:focus-within > &, *:hover > * > * > &, *:focus-within > * > * > &': {
            display: 'flex',
            position: 'relative',
            alignSelf: 'flex-end',
            left: '20px',
        },
    },
    nameSpan: [Object(components_shared_src["f" /* ellipsisStyles */])(1), { maxWidth: '160px' }],
    span: Object(components_shared_src["f" /* ellipsisStyles */])(1),
    list: {
        'ms-DetailsRow': {
            cursor: 'default',
        },
        '.ms-Nav': {
            transition: 'none !important' /* 禁用不必要的过渡效果 */,
        },
        'ms-DetailsHeader-cellTitle': { display: 'flex', alignItems: 'center', gap: '4px', flexDirection: 'row' },
    },
}));

// CONCATENATED MODULE: ./src/views/components/PeopleList/PeopleList.tsx














const PeopleList = ({ items, queryStatus, moduleName, departmentFullId: currentFullId, departmentMapping, }) => {
    const styles = usePeopleListStyles();
    // People Card:
    const [calloutTarget, setCalloutTarget] = Object(react["useState"])(undefined);
    const [peopleShow, setPeopleShow] = Object(react["useState"])(undefined);
    const [openCardId, setOpenCardId] = Object(react["useState"])('');
    const navigate = Object(react_router["i" /* useNavigate */])();
    const { t } = Object(useTranslation["a" /* useTranslation */])();
    const columns = [
        {
            key: 'name',
            name: t(localization["a" /* Strings */].peopleListColumnForName),
            fieldName: 'name',
            minWidth: 264,
            maxWidth: 264,
            isResizable: false,
            iconName: 'ContactCard',
            iconClassName: styles.iconCell,
            className: styles.cellTitle,
            onRender: (item) => {
                return (react_default.a.createElement("div", { className: styles.nameField, key: item.id + 'name' },
                    react_default.a.createElement("div", { className: styles.nameShow, 
                        // When Click the user name, show the PeopleCard
                        onClick: event => {
                            setOpenCardId(item.id);
                            const targetElement = event.target;
                            setPeopleShow(item);
                            setCalloutTarget(targetElement);
                            logger["f" /* logger */].logUserBiAction(logger["c" /* ScenarioName */].PeopleCard, logger["d" /* ScenarioType */].OpenPeopleCard, moduleName, {});
                        } },
                        react_default.a.createElement(components_people_src["a" /* PeopleCoin */], { selection: { id: item.id, name: item.name, type: 0 }, onRetrieveIcon: retrievePeopleSelectionIcon, coinSize: 24 }),
                        react_default.a.createElement("div", { className: styles.nameSpan, title: item.name }, item.name)),
                    react_default.a.createElement("div", { className: styles.hoverShowButtonContainer },
                        react_default.a.createElement(ActionButton["a" /* ActionButton */], { iconProps: {
                                iconName: 'Chat',
                                styles: {
                                    root: {
                                        fontSize: '20px',
                                        ':hover': {
                                            backgroundColor: 'inherit',
                                        },
                                    },
                                },
                            }, title: 'Chat', ariaLabel: 'Chat', className: styles.hoverShowButton, onClick: () => OpenChatById(item.id) }),
                        react_default.a.createElement(ActionButton["a" /* ActionButton */], { iconProps: {
                                iconName: 'Call',
                                styles: {
                                    root: {
                                        fontSize: '20px',
                                        padding: 0,
                                    },
                                },
                            }, title: 'Emoji', ariaLabel: 'Emoji', className: styles.hoverShowButton, onClick: () => OpenCallById(item.id) }))));
            },
        },
        {
            key: 'mail',
            name: t(localization["a" /* Strings */].peopleListColumnForEmail),
            fieldName: 'mail',
            minWidth: 200,
            maxWidth: 300,
            isResizable: false,
            iconName: 'Mail',
            iconClassName: styles.iconCell,
            onRender: (item) => {
                return (react_default.a.createElement("div", { title: item.mail, className: styles.span, key: item.id + 'mail' }, item.mail));
            },
        },
        {
            key: 'phone',
            name: t(localization["a" /* Strings */].peopleListColumnForPhone),
            fieldName: 'phone',
            minWidth: 100,
            width: 120,
            maxWidth: 150,
            isResizable: false,
            iconName: 'Call',
            iconClassName: styles.iconCell,
            onRender: (item) => {
                return (react_default.a.createElement("div", { title: item.phone, className: styles.span, key: item.id + 'phone' }, item.phone));
            },
        },
        {
            key: 'depart',
            name: t(localization["a" /* Strings */].peopleListColumnForDepart),
            fieldName: 'depart',
            minWidth: 200,
            maxWidth: 300,
            isResizable: false,
            iconName: 'Location',
            iconClassName: styles.iconCell,
            onRender: (item) => {
                var _a;
                const tooltipProps = {
                    onRenderContent: () => {
                        var _a;
                        const departmentFullNameList = [];
                        (_a = item.parentDepartments) === null || _a === void 0 ? void 0 : _a.forEach(departmentId => {
                            var _a, _b;
                            if (getDepartmentNameFromFullName((_a = departmentMapping[departmentId]) === null || _a === void 0 ? void 0 : _a.departmentFullName)) {
                                departmentFullNameList.push((_b = departmentMapping[departmentId]) === null || _b === void 0 ? void 0 : _b.departmentFullName);
                            }
                        });
                        return (react_default.a.createElement(react_default.a.Fragment, null, departmentFullNameList && departmentFullNameList.length === 1 ? (
                        // 只有一条数据时，直接渲染内容
                        react_default.a.createElement("div", { key: item.id + 'departmentList' + departmentFullNameList[0] }, departmentFullNameList[0])) : (react_default.a.createElement("ol", { style: { margin: '0 5px 0 0', padding: '0 0 0 14px' }, key: item.id + 'departmentListOL' + departmentFullNameList[0] }, departmentFullNameList &&
                            departmentFullNameList.map(fullName => (react_default.a.createElement("li", { key: item.id + fullName }, fullName)))))));
                    },
                };
                const validatedDepartmentList = [];
                (_a = item.parentDepartments) === null || _a === void 0 ? void 0 : _a.forEach(departmentId => {
                    var _a;
                    if (getDepartmentNameFromFullName((_a = departmentMapping[departmentId]) === null || _a === void 0 ? void 0 : _a.departmentFullName)) {
                        validatedDepartmentList.push(departmentId);
                    }
                });
                return (react_default.a.createElement("div", { key: item.id + 'tooltipHost' },
                    react_default.a.createElement(TooltipHost["a" /* TooltipHost */], { key: 'tooltip' + item.id, tooltipProps: tooltipProps, delay: Tooltip_types["a" /* TooltipDelay */].zero, directionalHint: DirectionalHint["a" /* DirectionalHint */].leftCenter },
                        react_default.a.createElement("div", { key: 'tooltipId' + item.id }, departmentMapping &&
                            validatedDepartmentList &&
                            validatedDepartmentList.map((departmentId, index) => {
                                var _a, _b, _c, _d;
                                return (react_default.a.createElement("div", { key: 'tooltipId1' + item.id + departmentId, className: styles.departmentList },
                                    ((_a = departmentMapping[departmentId]) === null || _a === void 0 ? void 0 : _a.departmentFullId) &&
                                        ((_b = departmentMapping[departmentId]) === null || _b === void 0 ? void 0 : _b.departmentFullId) !== currentFullId ? (react_default.a.createElement(Link["a" /* Link */], { key: departmentMapping[departmentId].departmentFullId, onClick: () => {
                                            var _a, _b;
                                            return navigate(Object(Paths["b" /* generateURL */])(Paths["a" /* Paths */].DepartmentTeam, undefined, {
                                                departmentFullName: (_a = departmentMapping[departmentId]) === null || _a === void 0 ? void 0 : _a.departmentFullName,
                                                departmentFullId: (_b = departmentMapping[departmentId]) === null || _b === void 0 ? void 0 : _b.departmentFullId,
                                            }));
                                        } }, getDepartmentNameFromFullName((_c = departmentMapping[departmentId]) === null || _c === void 0 ? void 0 : _c.departmentFullName))) : (getDepartmentNameFromFullName((_d = departmentMapping[departmentId]) === null || _d === void 0 ? void 0 : _d.departmentFullName)),
                                    index !== validatedDepartmentList.length - 1 && react_default.a.createElement("span", null, "; ")));
                            })))));
            },
        },
        {
            key: 'role',
            name: t(localization["a" /* Strings */].peopleListColumnForJob),
            fieldName: 'role',
            minWidth: 100,
            width: 120,
            maxWidth: 150,
            isResizable: true,
            iconName: 'Desk',
            iconClassName: styles.iconCell,
            onRender: (item) => {
                return (react_default.a.createElement("div", { title: item.role, className: styles.span, key: item.id + 'role' }, item.role));
            },
        },
    ];
    return (react_default.a.createElement(react_default.a.Fragment, null,
        react_default.a.createElement(CommonDetailsList, { className: styles.list, columns: columns, items: items, queryStatus: queryStatus, shimmerLines: 10 }),
        peopleShow !== undefined && peopleShow.id === openCardId && (react_default.a.createElement(PeopleCard, { key: peopleShow.id, departmentMapping: departmentMapping, people: peopleShow, onDismiss: () => setOpenCardId(''), target: calloutTarget }))));
};

// CONCATENATED MODULE: ./src/views/components/PeopleList/index.ts


// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/ChoiceGroup/ChoiceGroup.js + 5 modules
var ChoiceGroup = __webpack_require__("1+It");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/styles/makeStyles.ts
var makeStyles = __webpack_require__("oRLY");

// CONCATENATED MODULE: ./src/views/components/SelectModal/SelectModal.styles.ts

const useSelectModalStyles = Object(makeStyles["a" /* makeStyles */])(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        padding: '24px',
        // alignItems: 'center',
    },
}));

// CONCATENATED MODULE: ./src/views/components/SelectModal/SelectModal.tsx
var SelectModal_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};











function SelectModal({ onDismiss }) {
    const [isModalOpen, setIsModalOpen] = react_default.a.useState(true);
    const { t } = Object(useTranslation["a" /* useTranslation */])();
    const navigate = Object(react_router["i" /* useNavigate */])();
    // const onDismiss = (): void => {
    //     setIsModalOpen(false);
    // };
    const modalContentProps = {
        headerProps: {
            title: '設定',
        },
        primaryBtnProps: {
            text: '離開',
            onClick: onDismiss,
        },
        onDismiss,
        // contentClassName: mergeStyles(useTaskModuleContentCustomizedStyles()),
        closeButtonAriaLabel: '離開',
    };
    const { data: candidates, isLoading: loadingCandidates, error: candidatesError, } = useReactQuery(service["c" /* SERVICE_CLIENT */].getDepartmentCandidates, {}, {});
    const [option, setOption] = react_default.a.useState();
    const options = react_default.a.useMemo(() => {
        if (!candidates) {
            return [];
        }
        return candidates.map(candidate => {
            return { key: candidate.id, text: candidate.name };
        });
    }, [candidates]);
    function onChange(ev, option) {
        setOption(option === null || option === void 0 ? void 0 : option.key);
        return;
    }
    // const { data, isLoading, error } = useReactQuery(SERVICE_CLIENT.setRootDepartment, {}, {});
    const onClick = () => {
        setRootDepartment();
    };
    const { mutate: setRootDepartment, isSuccess: setRootDepartmentSuccess, isLoading: isSetRootDepartment, error: setRootDepartmentError, } = Object(es["useMutation"])({
        mutationFn: () => SelectModal_awaiter(this, void 0, void 0, function* () {
            if (option) {
                yield service["c" /* SERVICE_CLIENT */].setRootDepartment({ departmentId: option });
            }
        }),
        onSuccess: () => {
            service["g" /* queryClient */].clear(); // Clear the query cache from memory
            Object(service["e" /* clearQueryClientPersistor */])(); // Clear the query cache from local storage
            service["g" /* queryClient */].invalidateQueries();
            onDismiss();
            navigate(Paths["a" /* Paths */].HomePage);
        },
    });
    const styles = useSelectModalStyles();
    return (react_default.a.createElement(components_shared_src["c" /* CommonModal */], Object.assign({ isOpen: isModalOpen }, modalContentProps),
        react_default.a.createElement("div", { className: styles.container },
            (loadingCandidates || isSetRootDepartment) && react_default.a.createElement(LoadingPage, null),
            candidates && !isSetRootDepartment && !setRootDepartmentSuccess && (react_default.a.createElement(react_default.a.Fragment, null,
                react_default.a.createElement(ChoiceGroup["a" /* ChoiceGroup */], { options: options, onChange: onChange, label: '\u8ACB\u9078\u64C7\u4F60\u7684\u6839\u90E8\u9580', required: true }),
                react_default.a.createElement(PrimaryButton["a" /* PrimaryButton */], { text: '\u78BA\u8A8D', onClick: onClick, disabled: option === undefined }))),
            setRootDepartmentSuccess && react_default.a.createElement("div", null, "\u8A2D\u5B9A\u6210\u529F"),
            setRootDepartmentError && react_default.a.createElement("div", null, setRootDepartmentError),
            candidatesError && react_default.a.createElement("div", null, candidatesError))));
}

// CONCATENATED MODULE: ./src/views/containers/HomePage/HomePage.styles.ts


const useHomePageStyles = Object(components_fluentui_teams_theme["a" /* makeStyles */])(theme => ({
    root: {
        height: '100vh',
        overflowY: 'hidden',
        backgroundColor: theme.palette.neutralLighterAlt,
    },
    topSearchSection: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '5px 30px 5px 0',
    },
    peopleSection: Object.assign({ display: 'flex', alignItems: 'stretch', backgroundColor: theme.palette.white, height: '100%' }, (Object(teams_theme["f" /* isContrastTheme */])(theme.name) && {
        borderTop: `1px solid ${theme.palette.black}`,
        borderBottom: `1px solid ${theme.palette.black}`,
    })),
    peopleList: {
        height: '80%',
        overflowY: 'auto',
        overflowX: 'hidden',
    },
    navContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: '4px',
        alignItems: 'center',
    },
    left: {
        flex: 1,
        width: 0,
        height: '100%',
        backgroundColor: theme.palette.neutralLight,
        borderRight: `1px solid ${Object(teams_theme["f" /* isContrastTheme */])(theme.name) ? theme.palette.black : theme.palette.neutralTertiaryAlt}`,
    },
    main: {
        backgroundColor: theme.palette.white,
        flex: 4,
        width: 0,
        gap: '20px',
        display: 'flex',
        flexDirection: 'column',
        padding: '24px',
        columnGap: '20px',
        // overflowY: 'auto',
    },
    notPadding: {
        padding: '0px',
        margin: '0px',
        // marginBottom: '20px',
    },
    breadcrumb: {
        fontSize: '24px',
    },
    dropdown: {
        width: '324px',
        // marginBottom: '20px',
        '.ms-Dropdown-caretDown': {
            fontSize: '16px',
            color: theme.palette.neutralPrimary,
        },
    },
}));
const useNavStyles = (props) => ({
    chevronIcon: [
        {
            fontSize: '16px',
            left: '12px',
            top: '12px',
        },
        props.isExpanded && {
            transform: '',
        },
        !props.isExpanded && {
            transform: 'rotate(-90deg)',
        },
    ],
    link: [{ width: '100%', display: 'flex', alignItems: 'center' }, Object(components_shared_src["f" /* ellipsisStyles */])(1)],
    linkText: [{ display: 'flex', alignItems: 'center', marginLeft: '6px', width: '100%' }, Object(components_shared_src["f" /* ellipsisStyles */])(1)],
    root: { overflowX: 'hidden', height: 'calc(100vh - 60px)', width: '100%' },
});

// CONCATENATED MODULE: ./src/views/containers/HomePage/HomePageQuery.ts


const DEPARTMENT_SPLITTER = '/';
/**
 * hook for get user member list
 *
 * @param type is all member list or direct member list
 * @param top page query page size
 * @returns page query result
 */
function useMemberListByDepartment(type, departmentId, top, skipToken) {
    const isAllMember = type === 'AllMember';
    const func = isAllMember
        ? service["c" /* SERVICE_CLIENT */].fetchGetAllUserMembersByDepartment
        : service["c" /* SERVICE_CLIENT */].fetchGetDirectUserMembersByDepartment;
    const params = {
        departmentId,
        top,
        skipToken,
    };
    return useReactPageQuery(func, params, { enabled: !!departmentId });
}
// export type MemberType = 'AllMember' | 'DirectMember';
var MemberType;
(function (MemberType) {
    MemberType["AllMember"] = "AllMember";
    MemberType["DirectMember"] = "DirectMember";
})(MemberType || (MemberType = {}));
// export function mapDepartmentFullNameToBreadcrumbItem(departmentFullName: string): IBreadcrumbItem[] {
//     if (!departmentFullName) {
//         return [];
//     }
//     return departmentFullName.split(DEPARTMENT_SPLITTER).map((name, index) => {
//         return { text: name, key: index.toString() };
//     });
// }

// CONCATENATED MODULE: ./src/views/containers/HomePage/HomePage.tsx
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};



















const HomePage = () => {
    const styles = useHomePageStyles();
    const { t } = Object(useTranslation["a" /* useTranslation */])();
    const { params } = usePageParams();
    // const { departmentFullId, departmentName } = params; v1
    const { departmentFullName, departmentFullId } = params; // v2
    const navigate = Object(react_router["i" /* useNavigate */])();
    // mock data
    // const navLinkGroups: INavLinkGroup[] = [
    //     {
    //         links: [
    //             {
    //                 name: '全公司',
    //                 url: baseUrl + generateURL(Paths.DepartmentTeam),
    //                 key: 'key1',
    //                 expandAriaLabel: 'Show more Parent link 1',
    //                 isExpanded: departmentId !== undefined,
    //                 links: [
    //                     {
    //                         name: 'STCA',
    //                         url:
    //                             baseUrl +
    //                             generateURL(Paths.DepartmentTeam, undefined, {
    //                                 departmentId: 'STCA',
    //                             }),
    //                         key: 'STCA',
    //                         expandAriaLabel: 'Show more Child link 1',
    //                         isExpanded: departmentId?.includes('STCA'),
    //                         links: [
    //                             {
    //                                 name: 'Teams Platform',
    //                                 url:
    //                                     baseUrl +
    //                                     generateURL(Paths.DepartmentTeam, undefined, {
    //                                         departmentId: 'STCA/Teams Platform',
    //                                     }),
    //                                 key: 'STCA/Teams Platform',
    //                             },
    //                             {
    //                                 name: 'M365',
    //                                 key: 'STCA/M365',
    //                                 url:
    //                                     baseUrl +
    //                                     generateURL(Paths.DepartmentTeam, undefined, { departmentId: 'STCA/M365' }),
    //                             },
    //                         ],
    //                     },
    //                     {
    //                         name: 'C+AI',
    //                         url:
    //                             baseUrl +
    //                             generateURL(Paths.DepartmentTeam, undefined, {
    //                                 departmentId: 'C+AI',
    //                             }),
    //                         key: 'C+AI',
    //                         isExpanded: departmentId?.includes('C+AI'),
    //                         expandAriaLabel: 'Show more Child link 2',
    //                         links: [
    //                             {
    //                                 name: 'Windows',
    //                                 key: 'C+AI/Windows',
    //                                 url:
    //                                     baseUrl +
    //                                     generateURL(Paths.DepartmentTeam, undefined, {
    //                                         departmentId: 'C+AI/Windows',
    //                                     }),
    //                             },
    //                             {
    //                                 name: 'AI Platform',
    //                                 key: 'C+AI/AI Platform',
    //                                 url:
    //                                     baseUrl +
    //                                     generateURL(Paths.DepartmentTeam, undefined, {
    //                                         departmentId: 'C+AI/AI Platform',
    //                                     }),
    //                             },
    //                         ],
    //                         // isExpanded: true,
    //                     },
    //                     {
    //                         name: 'CSS',
    //                         key: 'CSS',
    //                         url:
    //                             baseUrl +
    //                             generateURL(Paths.DepartmentTeam, undefined, {
    //                                 departmentId: 'CSS',
    //                             }),
    //                     },
    //                 ],
    //                 // isExpanded: true,
    //             },
    //         ],
    //     },
    // ];
    // mock data
    // const items: IPeople[] = useMemo(() => mockPeopleList, []);
    // const departmentMembers = useMemo(() => {
    //     return departmentFullId === undefined
    //         ? items
    //         : items.filter(item => item.departs.filter(depart => depart.includes(departmentFullId)).length > 0);
    // }, [departmentFullId, items]);
    // const reportSlotResult = useReactPageQuery(
    //     SERVICE_CLIENT.occurrencesVersion_ListReportSlotByReportDefinitionAndSubmitter,
    //     { reportDefinitionId: definitionId!, top: REPORT_SLOT_PAGINATION_LIMIT },
    //     { enabled: !!definitionId, cacheTime: REPORT_SLOT_CACHE_TIME }
    // );
    const options = [
        { key: MemberType.AllMember, text: t(localization["a" /* Strings */].dropDownForDepartDefault) },
        { key: MemberType.DirectMember, text: t(localization["a" /* Strings */].dropDownForDepartOption1) },
    ];
    const [selectedMemberType, setSelectedMemberType] = react_default.a.useState(MemberType.AllMember);
    const onOptionChange = (event, option) => {
        if (option !== undefined) {
            setSelectedMemberType(option.key);
        }
    };
    const { navLinkGroupsV2, departmentMapping, navDataTree, navDataError, loadingNav } = useDepartmentView(departmentFullName);
    console.log('navDataError', navDataError);
    const currentDepartmentId = departmentFullId
        ? getDepartmentIdFromFullId(departmentFullId)
        : navDataTree && navDataTree[0] && navDataTree[0].id; // ?
    const _a = useMemberListByDepartment(selectedMemberType, currentDepartmentId, 20), { data: members, error: membersError, isLoading: membersLoading } = _a, membersQueryStatus = __rest(_a, ["data", "error", "isLoading"]); // Waiting for replace to navDataV2
    const { data: accessToken, isLoading: loadingCache } = useAccessToken();
    Object(react["useEffect"])(() => {
        if (loadingCache)
            return;
        console.log('accessToken:', accessToken);
        console.log('isTokenValid:', isTokenValid(accessToken === null || accessToken === void 0 ? void 0 : accessToken.token));
        if ((accessToken === null || accessToken === void 0 ? void 0 : accessToken.token) && !isTokenValid(accessToken === null || accessToken === void 0 ? void 0 : accessToken.token)) {
            navigate(Object(Paths["b" /* generateURL */])(Paths["a" /* Paths */].ConsentPage, {}));
        }
    }, [accessToken, loadingCache, navigate]);
    Object(react["useEffect"])(() => {
        var _a, _b;
        if ((!departmentFullId || departmentFullId === '') &&
            navDataTree !== undefined &&
            ((_a = navDataTree[0]) === null || _a === void 0 ? void 0 : _a.id) &&
            ((_b = navDataTree[0]) === null || _b === void 0 ? void 0 : _b.name)) {
            navigate(Object(Paths["b" /* generateURL */])(Paths["a" /* Paths */].DepartmentTeam, undefined, {
                departmentFullName: navDataTree[0].name,
                departmentFullId: navDataTree[0].id,
            }));
        }
    }, [departmentFullId, departmentMapping, members, navDataTree, navigate]);
    const [isOpen, setIsOpen] = react_default.a.useState(false);
    const onClickSetting = () => {
        setIsOpen(true);
        return;
    };
    const onDismissSetting = () => {
        setIsOpen(false);
        return;
    };
    const tenantId = env["o" /* initQuery */].get(env["k" /* URIParam */].TenantId) || '';
    const whiteTenantId = [
        'a0783b62-a438-4df4-b01a-1922ce21ddbe',
        'b6fa951c-a5e0-489a-aee6-b8d1c69cee47',
        '5a87739f-4172-4866-8ff7-cd86f8f00fe7',
    ];
    const showSettings = whiteTenantId.includes(tenantId);
    return (react_default.a.createElement("div", { className: styles.root },
        react_default.a.createElement(AddressBookAppHeader, { moduleName: logger["b" /* ModuleName */].HomePage, farItems: react_default.a.createElement("div", { className: styles.navContainer },
                react_default.a.createElement(SearchPeopleField, null),
                showSettings && react_default.a.createElement(ActionButton["a" /* ActionButton */], { iconProps: { iconName: 'Settings' }, onClick: onClickSetting }),
                react_default.a.createElement(RefreshButton, null)) }),
        react_default.a.createElement("div", { className: styles.peopleSection },
            react_default.a.createElement("div", { className: styles.left },
                navDataError && react_default.a.createElement(ErrorStatus, { error: navDataError }),
                loadingNav && react_default.a.createElement(LoadingPage, null),
                navLinkGroupsV2 && (react_default.a.createElement(Nav["a" /* Nav */], { ariaLabel: '', styles: useNavStyles, groups: navLinkGroupsV2, selectedKey: currentDepartmentId, 
                    // onLinkExpandClick={}
                    onLinkClick: (ev, item) => {
                        ev === null || ev === void 0 ? void 0 : ev.preventDefault(); // 阻止默认的 URL 跳转行为
                        if (item === null || item === void 0 ? void 0 : item.url) {
                            navigate(item.url); // 使用 React Router 的路由跳转
                        }
                    } }))),
            react_default.a.createElement("div", { className: styles.main },
                react_default.a.createElement("h2", { className: styles.notPadding }, !loadingNav &&
                    getDepartmentNameFromFullName(departmentFullName !== null && departmentFullName !== void 0 ? departmentFullName : (navDataTree && navDataTree[0] && navDataTree[0].name))),
                react_default.a.createElement("div", null,
                    react_default.a.createElement(Dropdown["a" /* Dropdown */], { className: styles.dropdown, placeholder: 'Select an option', options: options, selectedKey: selectedMemberType, onChange: onOptionChange })),
                react_default.a.createElement("div", { className: styles.peopleList },
                    members && members.length > 0 && departmentMapping && !loadingNav && (react_default.a.createElement(PeopleList, { items: members.map(data => mapUserViewToPeople(data)), queryStatus: membersQueryStatus, moduleName: logger["b" /* ModuleName */].HomePage, departmentFullId: departmentFullId, departmentMapping: departmentMapping })),
                    (members === null || members === void 0 ? void 0 : members.length) === 0 && !loadingNav && (react_default.a.createElement(EmptyStatus, { title: t(localization["a" /* Strings */].errorTitleForNotContract), message: t(localization["a" /* Strings */].errorMessageForNotContract), img: 'NoMessage' })),
                    (membersLoading || loadingNav) && react_default.a.createElement(LoadingPage, null),
                    membersError && react_default.a.createElement(ErrorStatus, { error: membersError })))),
        isOpen && react_default.a.createElement(SelectModal, { onDismiss: onDismissSetting })));
};

// CONCATENATED MODULE: ./src/views/containers/HomePage/index.ts



// CONCATENATED MODULE: ./src/views/containers/SearchResult/SearchResult.styles.ts

const useSearchResultStyles = Object(components_fluentui_teams_theme["a" /* makeStyles */])(theme => ({
    root: { height: '100%', display: 'flex', flexDirection: 'column' },
    topSearchSection: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '30px',
    },
    field: {
        flex: 1,
        '.ms-Label': {
            padding: '0 0 4px',
            whiteSpace: 'nowrap',
        },
    },
    peopleSection: Object.assign({ display: 'flex', alignItems: 'stretch', height: '100%' }, (Object(teams_theme["f" /* isContrastTheme */])(theme.name) && {
        borderTop: `1px solid ${theme.palette.black}`,
        borderBottom: `1px solid ${theme.palette.black}`,
    })),
    textFieldIcon1: {
        position: 'absolute',
        left: '6px',
        top: '50%',
        transform: 'translateY(-50%)',
        pointerEvents: 'none',
        // height: '20px',
        // width: '20px',
    },
    inputField: {
        flex: 1,
        '.ms-Label': {
            padding: '0 0 4px',
            whiteSpace: 'nowrap',
        },
        '.ms-TextField-field': {
            paddingLeft: '36px',
            backgroundColor: theme.palette.white,
            paddingRight: '36px',
        },
    },
    left: {
        flex: 1,
        width: 0,
        backgroundColor: theme.palette.neutralLighterAlt,
        borderRight: `1px solid ${Object(teams_theme["f" /* isContrastTheme */])(theme.name) ? theme.palette.black : theme.palette.neutralTertiaryAlt}`,
    },
    main: {
        padding: '24px 80px 24px 80px',
        backgroundColor: theme.palette.white,
        height: '100%',
        overflowY: 'auto',
    },
    topText: {
        color: theme.palette.black,
    },
    top: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        // marginBottom: '20px',
    },
    dropdown: {
        width: '200px',
        marginBottom: '20px',
    },
    iconCell: {
        padding: 0,
        fontSize: '16px',
        // top: '2px',
        marginRight: '4px',
        height: '16px',
        width: '16px',
    },
}));

// CONCATENATED MODULE: ./src/views/containers/SearchResult/SearchResult.tsx
var SearchResult_rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};














const SearchResults = () => {
    const styles = useSearchResultStyles();
    const iconProps = {
        iconName: 'Search',
        className: styles.textFieldIcon1,
        styles: {
            root: {
                fontSize: '20px',
            },
        },
    };
    const { t } = Object(useTranslation["a" /* useTranslation */])();
    const { params } = usePageParams();
    const { searchText } = params;
    // const [inputValue, setInputValue] = useState(searchText);
    // const onChange = React.useCallback((_: unknown, value?: string) => {
    //     setInputValue(value || '');
    // }, []);
    const navigate = Object(react_router["i" /* useNavigate */])();
    const _a = useReactPageQuery(service["c" /* SERVICE_CLIENT */].fetchSearchUser, { top: 10, userDisplayName: searchText }, { enabled: searchText !== '' }), { data: searchMembers, error: membersError, isLoading: membersLoading } = _a, membersQueryStatus = SearchResult_rest(_a, ["data", "error", "isLoading"]);
    const { departmentMapping } = useDepartmentView('');
    return (react_default.a.createElement("div", { className: styles.root },
        react_default.a.createElement(AddressBookAppHeader, { moduleName: logger["b" /* ModuleName */].SearchResult, searchText: searchText }),
        react_default.a.createElement("div", { className: styles.main },
            react_default.a.createElement("div", { className: styles.top },
                react_default.a.createElement("h2", { className: styles.topText }, t(localization["a" /* Strings */].searchResultLabel, { searchResult: searchText })),
                react_default.a.createElement(DefaultButton["a" /* DefaultButton */], { onClick: () => navigate(Paths["a" /* Paths */].DepartmentTeam), text: t(localization["a" /* Strings */].exitSearchLabel) })),
            searchMembers && searchMembers.length > 0 && (react_default.a.createElement(PeopleList, { items: searchMembers.map(data => mapUserViewToPeople(data)), queryStatus: membersQueryStatus, moduleName: logger["b" /* ModuleName */].SearchResult, departmentMapping: departmentMapping })),
            (searchMembers === null || searchMembers === void 0 ? void 0 : searchMembers.length) === 0 && (react_default.a.createElement(EmptyStatus, { title: t(localization["a" /* Strings */].errorTitleForNotContract), message: t(localization["a" /* Strings */].errorMessageForNotContract), img: 'NoMessage' })),
            membersLoading && react_default.a.createElement(LoadingPage, null),
            membersError && react_default.a.createElement(ErrorStatus, { error: membersError }))));
};

// CONCATENATED MODULE: ./src/views/containers/SearchResult/index.ts


// CONCATENATED MODULE: ./src/views/containers/index.ts







// CONCATENATED MODULE: ./src/views/index.ts




// CONCATENATED MODULE: ./src/hooks/useReactQuery.ts

/**
 * @param func service client API function
 * @param params service client API params
 * @param options UseQueryOptions
 */
function useReactQuery(func, params, options) {
    return Object(es["useQuery"])(Object.assign({ queryFn: ({ queryKey, signal }) => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            return queryKey[1] ? func(queryKey[1], signal) : func(signal);
        }, queryKey: [func.name, params] }, options));
}


// CONCATENATED MODULE: ./src/hooks/requests/useDepartmentView.ts






function useDepartmentView(departmentFullName) {
    const navigate = Object(react_router["i" /* useNavigate */])();
    const { data: navDataV2, isLoading: loadingNavV2, error: navDataErrorV2, } = useReactQuery(service["c" /* SERVICE_CLIENT */].fetchDepartmentNavV2, {}, {
        staleTime: 1 * 2 * 60 * 1000,
        cacheTime: 1 * 30 * 60 * 1000, // 30 minutes
    });
    const { navLinkGroupsV2, departmentMapping, navDataTree } = react_default.a.useMemo(() => {
        if (!navDataV2) {
            return { navLinkGroupsV2: [], departmentMapping: {}, navDataTree: undefined };
        } // Waiting for replace to navDataV2
        if (navDataV2.length === 0) {
            navigate(Object(Paths["b" /* generateURL */])(Paths["a" /* Paths */].EmptyPage, {}));
            return { navLinkGroupsV2: [], departmentMapping: {}, navDataTree: undefined };
        }
        const navDataTree = mapDepartmentListToTree(navDataV2); // Waiting for replace to navDataV2
        const departmentMapping = {};
        const navLinkGroups = navDataV2 // Waiting for replace to navDataV2
            ? [
                {
                    links: navDataTree.map(navItem => mapDepartmentToNavLink(navItem, '', '', departmentFullName, departmentMapping)),
                },
            ]
            : [];
        return { navLinkGroupsV2: navLinkGroups, departmentMapping, navDataTree };
    }, [departmentFullName, navDataV2, navigate]);
    return { navLinkGroupsV2, departmentMapping, navDataTree, loadingNav: loadingNavV2, navDataError: navDataErrorV2 };
}
function mapDepartmentListToTree(departmentList) {
    const map = new Map();
    const roots = [];
    departmentList.forEach(department => {
        map.set(department.exchangeObjectId, department);
    });
    departmentList.forEach(department => {
        var _a;
        if (department.parentIds && department.parentIds.length > 0) {
            for (const parentId of department.parentIds) {
                const parent = map.get(parentId);
                if (parent && !((_a = parent === null || parent === void 0 ? void 0 : parent.subDepartments) === null || _a === void 0 ? void 0 : _a.some(d => d.exchangeObjectId === department.exchangeObjectId))) {
                    if (!parent.subDepartments) {
                        parent.subDepartments = [];
                    }
                    parent.subDepartments.push(department);
                }
            }
        }
        else if (department.isRootDepartment) {
            roots.push(department);
        }
    });
    return roots;
}
function mapDepartmentToNavLink(department, currentDepartmentId, // 用于路由生成 V1
currentDepartmentName, // 用于路由生成 V2
selectedDepartmentName, // 用于判断当前部门是否展开
departmentMapping) {
    const departmentFullId = currentDepartmentId === '' ? department.id : `${currentDepartmentId}${DEPARTMENT_SPLITTER}${department.id}`;
    // departmentFullId 是当前部门的完整 ID，用于生成 URL， 标识哪一页做expand，标识当前部门
    // 因为在HomePage的PeopleList里，不支持用<Guid, <string, string>>的结构来表明DepartmentId, DepartmentFullName, DepartmentFullId,所以路由改换成使用DepartmentFullName和DepartmentId
    // 更新：v3使用departmentFullId和departmentFullName，其中key是departmentFullId，好处是不用担心FullName的唯一性和特殊字符，以及拿到最全的数据，FullId表示层级结构，FullName表示部门名称
    const departmentFullName = currentDepartmentName === ''
        ? department.name
        : `${currentDepartmentName}${DEPARTMENT_SPLITTER}${department.name}`;
    // Add department attribute to departmentList
    departmentMapping[department.id] = { departmentFullId, departmentFullName };
    const link = {
        name: department.name,
        url: Object(Paths["b" /* generateURL */])(Paths["a" /* Paths */].DepartmentTeam, undefined, {
            departmentFullName,
            departmentFullId,
        }),
        key: department.id,
        expandAriaLabel: department.name,
        isExpanded: selectedDepartmentName === null || selectedDepartmentName === void 0 ? void 0 : selectedDepartmentName.includes(department.name),
        // isExpanded: true,
        links: department.subDepartments
            ? department.subDepartments.map(subDepartment => mapDepartmentToNavLink(subDepartment, departmentFullId, departmentFullName, selectedDepartmentName, departmentMapping))
            : undefined, // 如果有子部门，则递归处理；否则为 undefined
    };
    return link;
}

// CONCATENATED MODULE: ./src/hooks/requests/useExchangeToken.ts



function useAccessToken() {
    return useReactQuery(service["c" /* SERVICE_CLIENT */].tokenExchangeVersion_Exchange, {
        input: { ResourceType: service["b" /* ResourceType */].Graph, ResourceUrl: 'https://graph.microsoft.com' },
    }, {
        staleTime: 1 * 1000,
        cacheTime: 1 * 1000, // 1 second
    });
}
function isTokenValid(accessToken) {
    var _a, _b;
    if (!accessToken)
        return false;
    const decodedToken = Object(jwt_decode_esm["a" /* default */])(accessToken);
    const scopeList = (_b = (_a = decodedToken === null || decodedToken === void 0 ? void 0 : decodedToken.scp) === null || _a === void 0 ? void 0 : _a.split(' ')) !== null && _b !== void 0 ? _b : [];
    return Object(service["d" /* checkAdminRequiredScopes */])(scopeList);
}

// CONCATENATED MODULE: ./src/hooks/requests/index.ts



// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/rtl.js
var lib_rtl = __webpack_require__("Ge+E");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-fluentui-teams-theme/src/teams-customizations.ts + 40 modules
var teams_customizations = __webpack_require__("y5uQ");

// CONCATENATED MODULE: ./src/hooks/useFluentUIThemeWithRTL.ts








/**
 * a hook to get ITheme with RTL support for FluentUI ThemeProvider
 *
 * @returns An ITheme object
 */
function useFluentUIThemeWithRTL(isMobile) {
    var _a;
    const themeName = Object(src["p" /* useTeamsTheme */])() || env["o" /* initQuery */].get(env["k" /* URIParam */].Theme);
    const { i18n: currentI18n } = Object(useTranslation["a" /* useTranslation */])(undefined, { useSuspense: false });
    const lang = currentI18n.resolvedLanguage || ((_a = currentI18n.languages) === null || _a === void 0 ? void 0 : _a[0]);
    Object(react["useEffect"])(() => {
        if (env["q" /* isDevBrowser */]) {
            document.body.style.backgroundColor = '#F5F5F5';
        }
        else {
            document.body.style.backgroundColor = 'transparent';
        }
        if (themeName) {
            logger["f" /* logger */].logTraceInfo(logger["a" /* LogCategory */].AppBoot, `Rendered app host with theme: ${themeName}.`);
            const className = `is-${themeName}Theme`;
            document.body.classList.add(className);
            return () => document.body.classList.remove(className);
        }
    }, [themeName]);
    return Object(react["useMemo"])(() => {
        const teamsTheme = Object(teams_customizations["a" /* getTeamsTheme */])(Object(src["e" /* coerceTeamsTheme */])(themeName !== null && themeName !== void 0 ? themeName : ''), isMobile);
        if (lang) {
            const dir = localization["b" /* i18n */].dir();
            const rtl = dir === 'rtl';
            Object(lib_rtl["c" /* setRTL */])(rtl);
            return Object.assign(Object.assign({}, teamsTheme), { rtl });
        }
        return teamsTheme;
    }, [themeName, lang, isMobile]);
}

// CONCATENATED MODULE: ./src/hooks/useLanguage.ts


/**
 * A hook to get the current language.
 *
 * @returns The current language.
 */
function useLanguage() {
    var _a, _b;
    const context = Object(src["o" /* useTeamsContext */])();
    const { i18n } = Object(useTranslation["a" /* useTranslation */])(undefined, { useSuspense: false });
    return ((_a = context === null || context === void 0 ? void 0 : context.app) === null || _a === void 0 ? void 0 : _a.locale) || i18n.resolvedLanguage || ((_b = i18n.languages) === null || _b === void 0 ? void 0 : _b[0]) || i18n.language;
}

// CONCATENATED MODULE: ./src/hooks/usePageParams.ts


/**
 * a strong type wrapper for useSearchParams
 */
function usePageParams() {
    const [params, setParams] = Object(react_router_dom["b" /* useSearchParams */])();
    return Object(react["useMemo"])(() => ({
        params: Object.fromEntries(params),
        setParams,
        reset: () => setParams({}, { replace: true }),
    }), [params, setParams]);
}

// CONCATENATED MODULE: ./src/hooks/useReactPageQuery.ts

/**
 * The default size of query page.
 */
const PAGE_SIZE = 10;
/**
 * hook for client page query with parameters,
 * - **never** use `new XXXServiceClient().someMethod`;
 * - use `SERVICE_CLIENT.someMethod` instead.
 *
 * @example
 * ```ts
 *  useReactPageQuery(SERVICE_CLIENT.helloWorld_Get, { a: 'a', b: 1 });
 * ```
 * @param  func SERVICE_CLIENT.method - service client API function @see SERVICE_CLIENT
 * @param  params service client API params
 * @param  options UseInfiniteQueryOptions
 */
function useReactPageQuery(func, params, options) {
    var _a, _b, _c, _d, _e;
    const res = Object(es["useInfiniteQuery"])(Object.assign({ queryFn: ({ queryKey, signal, pageParam }) => {
            var _a;
            const params = pageParam ? Object.assign(Object.assign({}, queryKey[1]), { skipToken: pageParam }) : (_a = queryKey[1]) !== null && _a !== void 0 ? _a : {};
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            return func(params, signal);
        }, queryKey: [func.name, params], getNextPageParam: lastPage => {
            var _a, _b;
            return lastPage.skipToken && ((_a = lastPage.results) === null || _a === void 0 ? void 0 : _a.length) >= ((_b = params === null || params === void 0 ? void 0 : params.top) !== null && _b !== void 0 ? _b : PAGE_SIZE)
                ? lastPage.skipToken
                : undefined;
        } }, options));
    return Object.assign(res, {
        loadMore: () => res.fetchNextPage(),
        canLoadMore: res.isFetched && res.hasNextPage,
        totalCount: (_c = (_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.pages) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.totalRecordCount,
        data: (_e = (_d = res.data) === null || _d === void 0 ? void 0 : _d.pages) === null || _e === void 0 ? void 0 : _e.reduce((pre, cur) => pre.concat(cur.results), []).filter(v => v !== null && v !== undefined),
    });
}


// CONCATENATED MODULE: ./src/hooks/index.ts











// CONCATENATED MODULE: ./src/routes/desktopRoutes.tsx
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */




const desktopRoutes = [
    // personal app
    react_default.a.createElement(react_router["b" /* Route */], { key: Paths["a" /* Paths */].HomePage, path: Paths["a" /* Paths */].HomePage, element: react_default.a.createElement(HomePage, null) }),
    react_default.a.createElement(react_router["b" /* Route */], { key: Paths["a" /* Paths */].SearchResults, path: Paths["a" /* Paths */].SearchResults, element: react_default.a.createElement(SearchResults, null) }),
    react_default.a.createElement(react_router["b" /* Route */], { key: Paths["a" /* Paths */].DepartmentTeam, path: Paths["a" /* Paths */].DepartmentTeam, element: react_default.a.createElement(HomePage, null) }),
    react_default.a.createElement(react_router["b" /* Route */], { key: Paths["a" /* Paths */].ConsentPage, path: Paths["a" /* Paths */].ConsentPage, element: react_default.a.createElement(ConsentPage, null) }),
    react_default.a.createElement(react_router["b" /* Route */], { key: Paths["a" /* Paths */].EmptyPage, path: Paths["a" /* Paths */].EmptyPage, element: react_default.a.createElement(EmptyPage, null) }),
    // home
    react_default.a.createElement(react_router["b" /* Route */], { key: '*', path: '*', element: react_default.a.createElement(DesktopDefaultPage, null) }),
];

// EXTERNAL MODULE: ./src/routes/history.ts
var routes_history = __webpack_require__("TJux");

// CONCATENATED MODULE: ./src/styles/theme-provider.ts

const themeProviderClassName = Object(lib["F" /* mergeStyles */])({ width: '100%', height: '100%' });

// CONCATENATED MODULE: ./src/styles/index.ts


// CONCATENATED MODULE: ./src/views/App.tsx
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */















const App = () => {
    const theme = useFluentUIThemeWithRTL();
    // Register a handler to flush out theme change and triggers a re-rendering immediately
    react_default.a.useEffect(() => {
        // Component mounted
        logger["f" /* logger */].logTraceInfo(logger["a" /* LogCategory */].AppBoot, 'Rendered app host');
        return () => {
            // Component will unmount
            logger["f" /* logger */].logTraceInfo(logger["a" /* LogCategory */].AppBoot, 'Closing the app host');
        };
    }, []);
    return (react_default.a.createElement(ThemeProvider["a" /* ThemeProvider */], { theme: theme, applyTo: 'body', className: themeProviderClassName },
        react_default.a.createElement(react_default.a.Suspense, { fallback: react_default.a.createElement(LoadingPage, null) },
            react_default.a.createElement(ECSConfigProvider, null,
                react_default.a.createElement(es["QueryClientProvider"], { client: service["g" /* queryClient */] },
                    react_default.a.createElement(LoadingIndicatorWrapperComponent, null),
                    react_default.a.createElement(react_router_dom["a" /* unstable_HistoryRouter */], { history: routes_history["a" /* history */] },
                        react_default.a.createElement(react_router["d" /* Routes */], null, desktopRoutes)),
                    react_default.a.createElement(devtools["ReactQueryDevtools"], { position: 'bottom-right', styleNonce: env["i" /* STYLE_NONCE */] }))))));
};

// EXTERNAL MODULE: ./src/common/init.ts + 8 modules
var init = __webpack_require__("4YvN");

// CONCATENATED MODULE: ./src/entries/desktop.tsx
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */









Object(init["a" /* init */])(false);
react_dom_default.a.render(react_default.a.createElement(ErrorBoundary["a" /* ErrorBoundary */], null,
    react_default.a.createElement(src["c" /* TeamsHostProvider */], null,
        react_default.a.createElement(App, null))), document.getElementById('root'), () => {
    logger["f" /* logger */].markScenario(logger["c" /* ScenarioName */].AppBoot, logger["e" /* StepName */].AppBootReactRendered);
    logger["f" /* logger */].logTraceInfo(logger["a" /* LogCategory */].AppBoot, 'React rendered desktop APP');
});


/***/ })

},[["JwtI","runtime~main","main~mobile.microsoft","main~mobile.fui","main.fui","assets~main","package~main~mobile","package~main","npm._fluentui~react-icons","npm.framer-motion","npm._fluentui~utilities","npm.react-dom","npm.lodash-es","npm.react-query","npm._internationalized~date","npm.axios","npm.i18next","featureRelatedFiles~main~mobile","vendors~main~mobile","vendors~main","main~mobile"]]]);