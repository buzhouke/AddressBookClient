(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+9JB":
/*!*****************************************************!*\
  !*** ./src/views/common/CommonDetailsList/index.ts ***!
  \*****************************************************/
/*! exports provided: CommonDetailsList, onRenderReportDefinitionColumn */
/*! exports used: CommonDetailsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _CommonDetailsList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommonDetailsList */ "MBO/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _CommonDetailsList__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */



/***/ }),

/***/ "/s0O":
/*!**********************************************************************************!*\
  !*** ./src/views/components/AddressBookAppHeader/AddressBookAppHeader.styles.ts ***!
  \**********************************************************************************/
/*! exports provided: useAppHeaderStyles */
/*! exports used: useAppHeaderStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useAppHeaderStyles; });
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "n4Dn");

const useAppHeaderStyles = Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])(() => ({
    navContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: '4px',
        alignItems: 'center',
    },
}));


/***/ }),

/***/ "0BZI":
/*!***********************************************!*\
  !*** ./src/hooks/actions/useNewChatEffect.ts ***!
  \***********************************************/
/*! exports provided: useNewChatEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export useNewChatEffect */
/* harmony import */ var _addressbook_components_metaos_host__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-metaos-host */ "0acT");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "H8PI");
/* harmony import */ var _routes_Paths__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../routes/Paths */ "9hZ6");
/* harmony import */ var _utilities_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/Utils */ "TktC");
/* harmony import */ var _views_components_ErrorStatus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../views/components/ErrorStatus */ "DEO1");






/**
 * check is new chat and auto redirect to error page
 * will skip channel for channel ID
 */
function useNewChatEffect() {
    const navigate = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* useNavigate */ "i"])();
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
        return () => {
            Object(_addressbook_components_metaos_host__WEBPACK_IMPORTED_MODULE_0__[/* getTeamsContext */ "h"])().then(context => {
                const { chat, team, channel } = context || {};
                if (Object(_utilities_Utils__WEBPACK_IMPORTED_MODULE_4__[/* isNewChat */ "a"])(chat === null || chat === void 0 ? void 0 : chat.id, team === null || team === void 0 ? void 0 : team.groupId, channel === null || channel === void 0 ? void 0 : channel.id)) {
                    navigate(Object(_routes_Paths__WEBPACK_IMPORTED_MODULE_3__[/* generateURL */ "b"])(_routes_Paths__WEBPACK_IMPORTED_MODULE_3__[/* Paths */ "a"].HomePage, { errorType: _views_components_ErrorStatus__WEBPACK_IMPORTED_MODULE_5__[/* SpecialErrorType */ "b"].newChat }), {
                        replace: true,
                    });
                }
            });
        };
    }, [navigate]);
}


/***/ }),

/***/ "0UAP":
/*!***************************************!*\
  !*** ./src/views/components/index.ts ***!
  \***************************************/
/*! exports provided: EmptyStatus, SpecialErrorType, ErrorStatus, LoadingPage, PeopleCard */
/*! exports used: EmptyStatus, ErrorStatus, LoadingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _EmptyStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmptyStatus */ "S6UW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _EmptyStatus__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _ErrorStatus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ErrorStatus */ "DEO1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _ErrorStatus__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _LoadingPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoadingPage */ "tajQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _LoadingPage__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _PeopleCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PeopleCard */ "L4Fw");






/***/ }),

/***/ "1n01":
/*!**************************************************************!*\
  !*** ./src/views/components/RefreshButton/RefreshButton.tsx ***!
  \**************************************************************/
/*! exports provided: RefreshButton */
/*! exports used: RefreshButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RefreshButton; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "BFcr");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service */ "YCKj");



const RefreshButton = () => {
    const onClick = () => {
        // Clear the cache and refetch the data
        _service__WEBPACK_IMPORTED_MODULE_2__[/* queryClient */ "e"].clear(); // Clear the cache from memory
        Object(_service__WEBPACK_IMPORTED_MODULE_2__[/* clearQueryClientPersistor */ "c"])(); // Clear the cache from local storage
        window.location.reload();
        return;
    };
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* ActionButton */ "a"], { iconProps: { iconName: 'Refresh' }, onClick: onClick })));
};


/***/ }),

/***/ "2MGt":
/*!************************************!*\
  !*** ./src/hooks/actions/index.ts ***!
  \************************************/
/*! exports provided: useDataFlag, useFlagStatus, ListComponentStatus, useListComponentStatusChange, useNewChatEffect, useTabContentAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _useDataFlag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useDataFlag */ "o34k");
/* unused harmony reexport * */
/* harmony import */ var _useFlagStatus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useFlagStatus */ "ygEs");
/* unused harmony reexport * */
/* harmony import */ var _useListComponentStatusChange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useListComponentStatusChange */ "7kkp");
/* unused harmony reexport * */
/* harmony import */ var _useNewChatEffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useNewChatEffect */ "0BZI");
/* unused harmony reexport * */
/* harmony import */ var _useTabContentAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useTabContentAction */ "S3HP");
/* unused harmony reexport * */







/***/ }),

/***/ "3O72":
/*!******************************************************************!*\
  !*** ./src/views/containers/SearchResult/SearchResult.styles.ts ***!
  \******************************************************************/
/*! exports provided: useSearchResultStyles */
/*! exports used: useSearchResultStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useSearchResultStyles; });
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "n4Dn");
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "tPyQ");

const useSearchResultStyles = Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])(theme => ({
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
    peopleSection: Object.assign({ display: 'flex', alignItems: 'stretch', height: '100%' }, (Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(theme.name) && {
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
        borderRight: `1px solid ${Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(theme.name) ? theme.palette.black : theme.palette.neutralTertiaryAlt}`,
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


/***/ }),

/***/ "5mdo":
/*!****************************************!*\
  !*** ./src/hooks/useReactPageQuery.ts ***!
  \****************************************/
/*! exports provided: useReactPageQuery */
/*! exports used: useReactPageQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useReactPageQuery; });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-query */ "jtiS");

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
    const res = Object(react_query__WEBPACK_IMPORTED_MODULE_0__["useInfiniteQuery"])(Object.assign({ queryFn: ({ queryKey, signal, pageParam }) => {
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
    console.log('useReactPageQuery:', res);
    return Object.assign(res, {
        loadMore: () => res.fetchNextPage(),
        canLoadMore: res.isFetched && res.hasNextPage,
        totalCount: (_c = (_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.pages) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.totalRecordCount,
        data: (_e = (_d = res.data) === null || _d === void 0 ? void 0 : _d.pages) === null || _e === void 0 ? void 0 : _e.reduce((pre, cur) => pre.concat(cur.results), []).filter(v => v !== null && v !== undefined),
    });
}



/***/ }),

/***/ "5odB":
/*!**************************************************************!*\
  !*** ./src/views/components/PeopleCard/PeopleCard.styles.ts ***!
  \**************************************************************/
/*! exports provided: usePeopleCardStyles */
/*! exports used: usePeopleCardStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return usePeopleCardStyles; });
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "n4Dn");
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "tPyQ");
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */

const usePeopleCardStyles = Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])(theme => ({
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
        overflowY: 'auto',
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
        border: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isDarkTheme */ "g"])(theme.name) ? '1px solid #3D3D3D' : '1px solid #F0F0F0',
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
        color: theme.palette.black,
        position: 'relative',
        // top: '2px',
        // left: '2px',
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
        width: 320,
        padding: '20px 24px',
    },
    divider: {
        border: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isDarkTheme */ "g"])(theme.name) ? '1px solid #3D3D3D' : '1px solid #F0F0F0',
    },
}));


/***/ }),

/***/ "61Jn":
/*!**********************************************!*\
  !*** ./src/hooks/useFluentUIThemeWithRTL.ts ***!
  \**********************************************/
/*! exports provided: useFluentUIThemeWithRTL */
/*! exports used: useFluentUIThemeWithRTL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useFluentUIThemeWithRTL; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "Ge+E");
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "y5uQ");
/* harmony import */ var _addressbook_components_metaos_host__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @addressbook/components-metaos-host */ "0acT");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "Tr4L");
/* harmony import */ var _common_env__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/env */ "8MrD");
/* harmony import */ var _localization__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../localization */ "HVbO");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../logger */ "pIRP");








/**
 * a hook to get ITheme with RTL support for FluentUI ThemeProvider
 *
 * @returns An ITheme object
 */
function useFluentUIThemeWithRTL(isMobile) {
    var _a;
    const themeName = Object(_addressbook_components_metaos_host__WEBPACK_IMPORTED_MODULE_2__[/* useTeamsTheme */ "p"])() || _common_env__WEBPACK_IMPORTED_MODULE_5__[/* initQuery */ "k"].get(_common_env__WEBPACK_IMPORTED_MODULE_5__[/* URIParam */ "g"].Theme);
    const { i18n: currentI18n } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__[/* useTranslation */ "a"])(undefined, { useSuspense: false });
    const lang = currentI18n.resolvedLanguage || ((_a = currentI18n.languages) === null || _a === void 0 ? void 0 : _a[0]);
    Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
        if (_common_env__WEBPACK_IMPORTED_MODULE_5__[/* isDevBrowser */ "m"]) {
            document.body.style.backgroundColor = '#F5F5F5';
        }
        else {
            document.body.style.backgroundColor = 'transparent';
        }
        if (themeName) {
            _logger__WEBPACK_IMPORTED_MODULE_7__[/* logger */ "f"].logTraceInfo(_logger__WEBPACK_IMPORTED_MODULE_7__[/* LogCategory */ "a"].AppBoot, `Rendered app host with theme: ${themeName}.`);
            const className = `is-${themeName}Theme`;
            document.body.classList.add(className);
            return () => document.body.classList.remove(className);
        }
    }, [themeName]);
    return Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(() => {
        const teamsTheme = Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* getTeamsTheme */ "a"])(Object(_addressbook_components_metaos_host__WEBPACK_IMPORTED_MODULE_2__[/* coerceTeamsTheme */ "e"])(themeName !== null && themeName !== void 0 ? themeName : ''), isMobile);
        if (lang) {
            const dir = _localization__WEBPACK_IMPORTED_MODULE_6__[/* i18n */ "b"].dir();
            const rtl = dir === 'rtl';
            Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* setRTL */ "c"])(rtl);
            return Object.assign(Object.assign({}, teamsTheme), { rtl });
        }
        return teamsTheme;
    }, [themeName, lang, isMobile]);
}


/***/ }),

/***/ "6gDi":
/*!****************************!*\
  !*** ./src/common/flag.ts ***!
  \****************************/
/*! exports provided: Flag, flagDependency */
/*! exports used: flagDependency */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Flag */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return flagDependency; });
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


/***/ }),

/***/ "7BQt":
/*!***********************************!*\
  !*** ./src/views/common/index.ts ***!
  \***********************************/
/*! exports provided: CommonCardList, CommonDetailsList, onRenderReportDefinitionColumn, LoadingIndicatorWrapper */
/*! exports used: CommonDetailsList, LoadingIndicatorWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _CommonCardList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommonCardList */ "ThME");
/* harmony import */ var _CommonDetailsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CommonDetailsList */ "+9JB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _CommonDetailsList__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _LoadingIndicatorWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoadingIndicatorWrapper */ "Nl/D");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _LoadingIndicatorWrapper__WEBPACK_IMPORTED_MODULE_2__["a"]; });






/***/ }),

/***/ "7Uj4":
/*!**********************************************************!*\
  !*** ./src/views/components/LoadingPage/LoadingPage.tsx ***!
  \**********************************************************/
/*! exports provided: LoadingPage */
/*! exports used: LoadingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingPage; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "tZX7");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react */ "ogYq");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react */ "l3kg");
/* harmony import */ var _fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react-hooks */ "EO0U");
/* harmony import */ var _addressbook_components_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @addressbook/components-shared */ "+INc");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "Tr4L");
/* harmony import */ var _common_Constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/Constants */ "fPKC");
/* harmony import */ var _localization__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../localization */ "HVbO");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../logger */ "pIRP");
/* harmony import */ var _LoadingPage_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./LoadingPage.styles */ "xDGb");
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */









const LoadingPage = ({ message, className }) => {
    const { t, ready } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_6__[/* useTranslation */ "a"])('strings', { useSuspense: false });
    const styles = Object(_LoadingPage_styles__WEBPACK_IMPORTED_MODULE_10__[/* useLoadingStyles */ "a"])();
    const id = Object(_fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_3__[/* useId */ "a"])('LoadingLabel');
    react__WEBPACK_IMPORTED_MODULE_5___default.a.useEffect(() => {
        const loadingTimeout = setTimeout(() => {
            _logger__WEBPACK_IMPORTED_MODULE_9__[/* logger */ "f"].logTraceError(_logger__WEBPACK_IMPORTED_MODULE_9__[/* LogCategory */ "a"].LoadingTimeout, `${_common_Constants__WEBPACK_IMPORTED_MODULE_7__[/* LOADING_TIMEOUT_IN_SECONDS */ "h"]} seconds loading timeout happens in page: ${window.location.href}`);
        }, _common_Constants__WEBPACK_IMPORTED_MODULE_7__[/* LOADING_TIMEOUT_IN_SECONDS */ "h"] * 1000);
        return () => clearTimeout(loadingTimeout);
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* Stack */ "a"], { verticalFill: true, verticalAlign: 'center', horizontalAlign: 'center', className: `${Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* mergeStyles */ "F"])(styles.root, className)} loading-page`, role: 'alert', "aria-atomic": true },
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_addressbook_components_shared__WEBPACK_IMPORTED_MODULE_4__[/* Spinner */ "d"], { "aria-label": ready ? t(_localization__WEBPACK_IMPORTED_MODULE_8__[/* Strings */ "a"].loadingAriaLabel) : 'Loading', "aria-describedby": message && id }),
        message && (react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "a"], { id: id, className: styles.message }, message))));
};


/***/ }),

/***/ "7kkp":
/*!***********************************************************!*\
  !*** ./src/hooks/actions/useListComponentStatusChange.ts ***!
  \***********************************************************/
/*! exports provided: ListComponentStatus, useListComponentStatusChange */
/*! exports used: ListComponentStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponentStatus; });
/* unused harmony export useListComponentStatusChange */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var ListComponentStatus;
(function (ListComponentStatus) {
    ListComponentStatus["Loading"] = "loading";
    ListComponentStatus["Error"] = "error";
    ListComponentStatus["Empty"] = "empty";
    ListComponentStatus["NonEmpty"] = "nonEmpty";
})(ListComponentStatus || (ListComponentStatus = {}));
const useListComponentStatusChange = (items, error, queryStatus, onStatusChange) => {
    const isEmptyList = items ? items.length === 0 : undefined;
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
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


/***/ }),

/***/ "8U4l":
/*!********************************************************!*\
  !*** ./src/views/components/PeopleCard/PeopleCard.tsx ***!
  \********************************************************/
/*! exports provided: PeopleCard */
/*! exports used: PeopleCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeopleCard; });
/* harmony import */ var _addressbook_components_people__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-people */ "apXe");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react */ "dXTB");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react */ "KIfy");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react */ "ogYq");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react */ "BFcr");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/icons */ "dERd");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../hooks */ "eZYV");
/* harmony import */ var _utilities_quickAppUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utilities/quickAppUtils */ "K5h+");
/* harmony import */ var _PeopleCard_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PeopleCard.styles */ "5odB");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







const PeopleCard = ({ people, onDismiss, target }) => {
    const peopleCardStyles = Object(_PeopleCard_styles__WEBPACK_IMPORTED_MODULE_9__[/* usePeopleCardStyles */ "a"])();
    const [presence, setPresence] = react__WEBPACK_IMPORTED_MODULE_5___default.a.useState(undefined);
    const [manager, setManager] = react__WEBPACK_IMPORTED_MODULE_5___default.a.useState(undefined);
    react__WEBPACK_IMPORTED_MODULE_5___default.a.useEffect(() => {
        const fetchPresence = () => __awaiter(void 0, void 0, void 0, function* () {
            const presence = yield Object(_hooks__WEBPACK_IMPORTED_MODULE_7__[/* retrievePeoplePresenceByGraph */ "b"])(people.id);
            setPresence(presence);
        });
        fetchPresence();
    }, [people.id]);
    react__WEBPACK_IMPORTED_MODULE_5___default.a.useEffect(() => {
        const fetchPresence = () => __awaiter(void 0, void 0, void 0, function* () {
            const manager = yield Object(_hooks__WEBPACK_IMPORTED_MODULE_7__[/* retrievePeopleManagerByGraph */ "a"])(people.id);
            setManager(manager);
        });
        fetchPresence();
    }, [people.id]);
    return (react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* Callout */ "a"], { role: 'dialog', className: peopleCardStyles.callout, gapSpace: 20, target: target, isBeakVisible: false, onDismiss: onDismiss, setInitialFocus: true },
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", { className: peopleCardStyles.root },
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", { className: peopleCardStyles.info },
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", { className: peopleCardStyles.peopleWithIcon },
                    react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", { className: peopleCardStyles.peopleWithPresenceInfo },
                        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_addressbook_components_people__WEBPACK_IMPORTED_MODULE_0__[/* PeopleCoin */ "a"], { selection: { id: people.id, name: people.name, type: 0 }, onRetrieveIcon: _hooks__WEBPACK_IMPORTED_MODULE_7__[/* retrievePeopleSelectionIcon */ "c"], coinSize: 64 }),
                        presence && (react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", { className: peopleCardStyles.presenceInfo },
                            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__[/* FontIcon */ "a"], { "aria-label": 'Mail', iconName: _common_icons__WEBPACK_IMPORTED_MODULE_6__[/* PRESENCE_ICONS */ "a"][presence].name, className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_3__[/* mergeStyles */ "F"])(peopleCardStyles.icon, {
                                    color: _common_icons__WEBPACK_IMPORTED_MODULE_6__[/* PRESENCE_ICONS */ "a"][presence].color,
                                }) })))),
                    react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", { className: peopleCardStyles.info },
                        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", { className: peopleCardStyles.boldText }, people.name),
                        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, people.role),
                        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, Object.entries(people.departmentPaths)
                            .map(([_, value]) => value)
                            .join('; ')))),
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", { className: peopleCardStyles.quickHeader },
                    react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_4__[/* ActionButton */ "a"], { iconProps: {
                            iconName: 'Chat',
                            styles: {
                                root: {
                                    fontSize: '20px',
                                },
                            },
                        }, title: 'Chat', ariaLabel: 'Chat', 
                        // className={styles.hoverShowButton}
                        onClick: () => Object(_utilities_quickAppUtils__WEBPACK_IMPORTED_MODULE_8__[/* OpenChatById */ "b"])(people.id) }),
                    react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_4__[/* ActionButton */ "a"], { iconProps: {
                            iconName: 'Organization',
                            styles: {
                                root: {
                                    fontSize: '20px',
                                },
                            },
                        }, title: 'OpenOrgExplorerApp', ariaLabel: 'OpenOrgExplorerApp', onClick: () => Object(_utilities_quickAppUtils__WEBPACK_IMPORTED_MODULE_8__[/* OpenOrgExplorerApp */ "c"])() }),
                    react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_4__[/* ActionButton */ "a"], { iconProps: {
                            iconName: 'Call',
                            styles: {
                                root: {
                                    fontSize: '20px',
                                    padding: 0,
                                },
                            },
                        }, title: 'OpenCall', ariaLabel: 'OpenCall', 
                        // className={styles.hoverShowButton}
                        onClick: () => Object(_utilities_quickAppUtils__WEBPACK_IMPORTED_MODULE_8__[/* OpenCallById */ "a"])(people.id) }),
                    react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_4__[/* ActionButton */ "a"], { iconProps: {
                            iconName: 'Video',
                            styles: {
                                root: {
                                    fontSize: '20px',
                                },
                            },
                        }, title: 'OpenVideoCall', ariaLabel: 'OpenVideoCall', 
                        // className={styles.hoverShowButton}
                        onClick: () => Object(_utilities_quickAppUtils__WEBPACK_IMPORTED_MODULE_8__[/* OpenVideoCallById */ "d"])(people.id) })),
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", { className: peopleCardStyles.divider })),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", { className: peopleCardStyles.main },
                presence && (react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", { className: peopleCardStyles.presence },
                    react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__[/* FontIcon */ "a"], { "aria-label": 'Mail', iconName: _common_icons__WEBPACK_IMPORTED_MODULE_6__[/* PRESENCE_ICONS */ "a"][presence].name, className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_3__[/* mergeStyles */ "F"])(peopleCardStyles.icon, {
                            color: _common_icons__WEBPACK_IMPORTED_MODULE_6__[/* PRESENCE_ICONS */ "a"][presence].color,
                        }) }),
                    react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", { className: peopleCardStyles.subHeaderText }, presence))),
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", { className: peopleCardStyles.subHeader },
                    react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", { className: peopleCardStyles.subHeaderText }, "\u8054\u7CFB\u4EBA"),
                    react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__[/* FontIcon */ "a"], { "aria-label": 'ChevronRight', iconName: 'ChevronRight', className: peopleCardStyles.icon })),
                people.mail && (react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", { className: peopleCardStyles.ContractInfo },
                    react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__[/* FontIcon */ "a"], { "aria-label": 'Mail', iconName: 'Mail', className: peopleCardStyles.icon }),
                    react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, people.mail))),
                people.phone && (react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", { className: peopleCardStyles.ContractInfo },
                    react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__[/* FontIcon */ "a"], { "aria-label": 'Call', iconName: 'Call', className: peopleCardStyles.icon }),
                    react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, people.phone))),
                people.officeLocation && (react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", { className: peopleCardStyles.ContractInfo },
                    react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__[/* FontIcon */ "a"], { "aria-label": 'Location', iconName: 'Location', className: peopleCardStyles.icon }),
                    react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, people.officeLocation))),
                manager && (react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null,
                    react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", { className: peopleCardStyles.subHeader },
                        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", { className: peopleCardStyles.subHeaderText }, "\u76F4\u5C5E\u9886\u5BFC"),
                        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__[/* FontIcon */ "a"], { "aria-label": 'ChevronRight', iconName: 'ChevronRight', className: peopleCardStyles.icon })),
                    react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", { className: peopleCardStyles.peopleWithIcon },
                        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", { className: peopleCardStyles.info },
                            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_addressbook_components_people__WEBPACK_IMPORTED_MODULE_0__[/* PeopleCoin */ "a"], { selection: { id: manager.id, name: manager.name, type: 0 }, onRetrieveIcon: _hooks__WEBPACK_IMPORTED_MODULE_7__[/* retrievePeopleSelectionIcon */ "c"], coinSize: 32 })),
                        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null,
                            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, manager.name),
                            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", null),
                            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, manager.role)))))))));
};


/***/ }),

/***/ "8W9G":
/*!*****************************************!*\
  !*** ./src/hooks/paths/usePageTitle.ts ***!
  \*****************************************/
/*! exports provided: usePageTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export usePageTitle */
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-i18next */ "Tr4L");

/**
 * hook for page title
 *
 * @param path
 * @returns path title
 */
const usePageTitle = (path) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_0__[/* useTranslation */ "a"])();
    switch (path) {
        default:
            return '';
    }
};


/***/ }),

/***/ "8tIN":
/*!**********************************************************************!*\
  !*** ./src/views/components/SearchPeopleField/SearchPeopleField.tsx ***!
  \**********************************************************************/
/*! exports provided: SearchPeopleField */
/*! exports used: SearchPeopleField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPeopleField; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "XgkO");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "Tr4L");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "H8PI");
/* harmony import */ var _localization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../localization */ "HVbO");
/* harmony import */ var _routes_Paths__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../routes/Paths */ "9hZ6");
/* harmony import */ var _SearchPeopleField_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SearchPeopleField.styles */ "FzV7");







const SearchPeopleField = ({ searchText }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__[/* useTranslation */ "a"])();
    const [inputValue, setInputValue] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(searchText || '');
    const onChange = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])((_, value) => {
        setInputValue(value || '');
    }, []);
    const styles = Object(_SearchPeopleField_styles__WEBPACK_IMPORTED_MODULE_6__[/* useSearchFieldStyles */ "a"])();
    const navigate = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* useNavigate */ "i"])();
    const iconProps = {
        iconName: 'Search',
        className: styles.textFieldIcon1,
        styles: {
            root: {
                fontSize: '20px',
            },
        },
    };
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", { noValidate: true, autoComplete: 'off' },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* TextField */ "a"], { className: styles.inputField, placeholder: t(_localization__WEBPACK_IMPORTED_MODULE_4__[/* Strings */ "a"].searchPlaceholder), iconProps: iconProps, value: inputValue, onChange: onChange, onKeyDown: event => {
                    if (event.key === 'Enter') {
                        navigate(Object(_routes_Paths__WEBPACK_IMPORTED_MODULE_5__[/* generateURL */ "b"])(_routes_Paths__WEBPACK_IMPORTED_MODULE_5__[/* Paths */ "a"].SearchResults, undefined, {
                            searchText: inputValue,
                        }));
                    }
                } }))));
};


/***/ }),

/***/ "9NDm":
/*!**************************************!*\
  !*** ./src/routes/desktopRoutes.tsx ***!
  \**************************************/
/*! exports provided: desktopRoutes */
/*! exports used: desktopRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return desktopRoutes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "H8PI");
/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views */ "ptj7");
/* harmony import */ var _Paths__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Paths */ "9hZ6");
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */




const desktopRoutes = [
    // personal app
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* Route */ "b"], { key: _Paths__WEBPACK_IMPORTED_MODULE_3__[/* Paths */ "a"].HomePage, path: _Paths__WEBPACK_IMPORTED_MODULE_3__[/* Paths */ "a"].HomePage, element: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views__WEBPACK_IMPORTED_MODULE_2__[/* HomePage */ "b"], null) }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* Route */ "b"], { key: _Paths__WEBPACK_IMPORTED_MODULE_3__[/* Paths */ "a"].SearchResults, path: _Paths__WEBPACK_IMPORTED_MODULE_3__[/* Paths */ "a"].SearchResults, element: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views__WEBPACK_IMPORTED_MODULE_2__[/* SearchResults */ "c"], null) }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* Route */ "b"], { key: _Paths__WEBPACK_IMPORTED_MODULE_3__[/* Paths */ "a"].DepartmentTeam, path: _Paths__WEBPACK_IMPORTED_MODULE_3__[/* Paths */ "a"].DepartmentTeam, element: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views__WEBPACK_IMPORTED_MODULE_2__[/* HomePage */ "b"], null) }),
    // home
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* Route */ "b"], { key: '*', path: '*', element: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views__WEBPACK_IMPORTED_MODULE_2__[/* DesktopDefaultPage */ "a"], null) }),
];


/***/ }),

/***/ "AuXa":
/*!*****************************!*\
  !*** ./src/hooks/people.ts ***!
  \*****************************/
/*! exports provided: useCurrentUserSelection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export useCurrentUserSelection */
/* harmony import */ var _addressbook_components_metaos_host__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-metaos-host */ "0acT");
/* harmony import */ var _addressbook_components_people__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @addressbook/components-people */ "apXe");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "k2tF");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ "jtiS");
/* harmony import */ var _common_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/env */ "8MrD");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
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
    const { data } = Object(react_query__WEBPACK_IMPORTED_MODULE_3__["useQuery"])({
        queryKey: getCurrentUserSelection.name,
        queryFn: getCurrentUserSelection,
        staleTime: Infinity,
    });
    return data;
}
function getCurrentUserSelection() {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const teamsContext = yield Object(_addressbook_components_metaos_host__WEBPACK_IMPORTED_MODULE_0__[/* getTeamsContext */ "h"])();
        const user = teamsContext.user;
        if (!user)
            throw new Error('User not found in Teams context.');
        const selection = {
            type: _addressbook_components_people__WEBPACK_IMPORTED_MODULE_1__[/* PeopleSelectionType */ "b"].User,
            id: user.id,
            name: (_a = user.displayName) !== null && _a !== void 0 ? _a : '',
            mail: user.userPrincipalName,
        };
        // Patch name if absent in Teams context.
        // We need remove the fallback after the issue has been fixed by the Teams. Relevant issue discussion: https://github.com/OfficeDev/microsoft-teams-library-js/issues/2330
        if (!selection.name) {
            const token = yield Object(_addressbook_components_metaos_host__WEBPACK_IMPORTED_MODULE_0__[/* getAuthToken */ "g"])(_common_env__WEBPACK_IMPORTED_MODULE_4__[/* ADDRESSBOOK_APP_RESOURCE_URL */ "a"]);
            const jwt = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(token);
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


/***/ }),

/***/ "DEO1":
/*!***************************************************!*\
  !*** ./src/views/components/ErrorStatus/index.ts ***!
  \***************************************************/
/*! exports provided: SpecialErrorType, ErrorStatus */
/*! exports used: ErrorStatus, SpecialErrorType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _ErrorStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ErrorStatus */ "IWQ4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _ErrorStatus__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _ErrorStatus__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */



/***/ }),

/***/ "Dqy3":
/*!**************************!*\
  !*** ./src/ecs/index.ts ***!
  \**************************/
/*! exports provided: EcsConfigType, initialState, ECSConfigProvider, useECSConfig, getECSParams, ECS_STORAGE_KEY, defaultECSFlags, loadEcsConfig */
/*! exports used: ECSConfigProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _EcsFlags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EcsFlags */ "HUOG");
/* harmony import */ var _ECSConfigProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ECSConfigProvider */ "VjCn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _ECSConfigProvider__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _loadEcsConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadEcsConfig */ "oZXk");
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */





/***/ }),

/***/ "EYC9":
/*!****************************************************************!*\
  !*** ./src/views/containers/DefaultPage/MobileDefaultPage.tsx ***!
  \****************************************************************/
/*! exports provided: MobileDefaultPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MobileDefaultPage */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "H8PI");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../logger */ "pIRP");
/* harmony import */ var _routes_Paths__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../routes/Paths */ "9hZ6");
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */




const MobileDefaultPage = () => {
    const href = window.location.href;
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        _logger__WEBPACK_IMPORTED_MODULE_2__[/* logger */ "f"].logTraceWarning(_logger__WEBPACK_IMPORTED_MODULE_2__[/* LogCategory */ "a"].Navigate, `Redirect to mobile default page. original url:${href}`);
    }, [href]);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* Navigate */ "a"], { to: _routes_Paths__WEBPACK_IMPORTED_MODULE_3__[/* Paths */ "a"].HomePage, replace: true });
};


/***/ }),

/***/ "F6sv":
/*!***************************************!*\
  !*** ./src/views/containers/index.ts ***!
  \***************************************/
/*! exports provided: DesktopDefaultPage, MobileDefaultPage, ErrorBoundary, HomePage, SearchResults */
/*! exports used: DesktopDefaultPage, HomePage, SearchResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _DefaultPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultPage */ "Llse");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _DefaultPage__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _ErrorBoundary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ErrorBoundary */ "TzxL");
/* harmony import */ var _HomePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HomePage */ "sb7W");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _HomePage__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _SearchResult__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SearchResult */ "ygCl");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _SearchResult__WEBPACK_IMPORTED_MODULE_3__["a"]; });







/***/ }),

/***/ "Fwf9":
/*!************************************!*\
  !*** ./src/hooks/useReactQuery.ts ***!
  \************************************/
/*! exports provided: useReactQuery */
/*! exports used: useReactQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useReactQuery; });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-query */ "jtiS");

/**
 * @param func service client API function
 * @param params service client API params
 * @param options UseQueryOptions
 */
function useReactQuery(func, params, options) {
    return Object(react_query__WEBPACK_IMPORTED_MODULE_0__["useQuery"])(Object.assign({ queryFn: ({ queryKey, signal }) => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            return queryKey[1] ? func(queryKey[1], signal) : func(signal);
        }, queryKey: [func.name, params] }, options));
}



/***/ }),

/***/ "FzV7":
/*!****************************************************************************!*\
  !*** ./src/views/components/SearchPeopleField/SearchPeopleField.styles.ts ***!
  \****************************************************************************/
/*! exports provided: useSearchFieldStyles */
/*! exports used: useSearchFieldStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useSearchFieldStyles; });
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "n4Dn");

const useSearchFieldStyles = Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])(theme => ({
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


/***/ }),

/***/ "HUOG":
/*!*****************************!*\
  !*** ./src/ecs/EcsFlags.ts ***!
  \*****************************/
/*! exports provided: EcsConfigType, initialState */
/*! exports used: initialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export EcsConfigType */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initialState; });
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


/***/ }),

/***/ "I5zc":
/*!**************************************!*\
  !*** ./src/styles/theme-provider.ts ***!
  \**************************************/
/*! exports provided: themeProviderClassName */
/*! exports used: themeProviderClassName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return themeProviderClassName; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "ogYq");

const themeProviderClassName = Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* mergeStyles */ "F"])({ width: '100%', height: '100%' });


/***/ }),

/***/ "IWQ4":
/*!**********************************************************!*\
  !*** ./src/views/components/ErrorStatus/ErrorStatus.tsx ***!
  \**********************************************************/
/*! exports provided: SpecialErrorType, ErrorStatus */
/*! exports used: ErrorStatus, SpecialErrorType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SpecialErrorType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorStatus; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "jFKp");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react */ "Favm");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react */ "xRnI");
/* harmony import */ var _addressbook_components_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @addressbook/components-shared */ "+INc");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "Tr4L");
/* harmony import */ var _assets_emptyStatus_file_empty_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/emptyStatus/file-empty.svg */ "/5rm");
/* harmony import */ var _assets_errorStatus_itemdisabled_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../assets/errorStatus/itemdisabled.svg */ "PNiH");
/* harmony import */ var _assets_errorStatus_newchat_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../assets/errorStatus/newchat.svg */ "58+7");
/* harmony import */ var _assets_errorStatus_noaccess_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../assets/errorStatus/noaccess.svg */ "5HKM");
/* harmony import */ var _assets_errorStatus_offline_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../assets/errorStatus/offline.svg */ "ErM2");
/* harmony import */ var _assets_errorStatus_warning_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../assets/errorStatus/warning.svg */ "wnJg");
/* harmony import */ var _localization__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../localization */ "HVbO");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../logger */ "pIRP");
/* harmony import */ var _service_RequestError__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../service/RequestError */ "MpLv");













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
    [SpecialErrorType.noReport]: _assets_emptyStatus_file_empty_svg__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"],
    [SpecialErrorType.noPermission]: _assets_errorStatus_noaccess_svg__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"],
    [SpecialErrorType.newChat]: _assets_errorStatus_newchat_svg__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"],
    [SpecialErrorType.guestUser]: _assets_errorStatus_noaccess_svg__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"],
    [SpecialErrorType.solutionNotUpgrade]: _assets_errorStatus_newchat_svg__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"],
    [SpecialErrorType.ReportDefinitionDisabled]: _assets_errorStatus_itemdisabled_svg__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"],
    [SpecialErrorType.NotDefinitionSubmitter]: _assets_errorStatus_noaccess_svg__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"],
    [SpecialErrorType.FormsResponseNotFound]: _assets_errorStatus_warning_svg__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"],
    [SpecialErrorType.FormsPrincipalDisabled]: _assets_errorStatus_warning_svg__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"],
    [SpecialErrorType.NotProvisioned]: _assets_errorStatus_noaccess_svg__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"],
    [_service_RequestError__WEBPACK_IMPORTED_MODULE_14__[/* ClientErrorCodes */ "a"].network]: _assets_errorStatus_offline_svg__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"],
    [_service_RequestError__WEBPACK_IMPORTED_MODULE_14__[/* ClientErrorCodes */ "a"].teamsSDK]: _assets_errorStatus_offline_svg__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"],
    [SpecialErrorType.DefinitionReviewer]: _assets_emptyStatus_file_empty_svg__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"],
    [SpecialErrorType.DefinitionOwner]: _assets_emptyStatus_file_empty_svg__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"],
    [SpecialErrorType.ItemNotFound]: _assets_errorStatus_itemdisabled_svg__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"],
    [SpecialErrorType.MultiUserOperationConflict]: _assets_errorStatus_newchat_svg__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"],
};
/**
 * show error status with localized messages and image
 *
 * @param param0
 * @returns
 */
const ErrorStatus = ({ img, title, message, actionText, onAction, className, error, errorCode, hideImg, onReturnToHome, children, }) => {
    var _a;
    const theme = Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* useTheme */ "a"])();
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__[/* useTranslation */ "a"])();
    const code = errorCode || (error === null || error === void 0 ? void 0 : error.code);
    const image = hideImg ? '' : img || ImageMap[code];
    // using requestId for requestError and {sessionId} for others
    const correlationId = (error === null || error === void 0 ? void 0 : error.requestId) || `{${_logger__WEBPACK_IMPORTED_MODULE_13__[/* logger */ "f"].sessionId}}`;
    const action = actionText !== null && actionText !== void 0 ? actionText : (onAction && t(_localization__WEBPACK_IMPORTED_MODULE_12__[/* Strings */ "a"].errorAction, { context: code }));
    const returnToHomepageAction = code === SpecialErrorType.MultiUserOperationConflict;
    react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(() => {
        if (error && !(error instanceof _service_RequestError__WEBPACK_IMPORTED_MODULE_14__[/* RequestError */ "b"])) {
            // log all display error except for RequestError
            // (Request error already logged)
            _logger__WEBPACK_IMPORTED_MODULE_13__[/* logger */ "f"].logTraceException(_logger__WEBPACK_IMPORTED_MODULE_13__[/* LogCategory */ "a"].ErrorStatus, { error });
        }
    }, [error, code]);
    if (error instanceof _service_RequestError__WEBPACK_IMPORTED_MODULE_14__[/* RequestError */ "b"] && !message) {
        message = ((_a = error.detailedErrors) !== null && _a !== void 0 ? _a : [error])
            .map(errorDetail => {
            var _a, _b, _c;
            return t(_localization__WEBPACK_IMPORTED_MODULE_12__[/* Strings */ "a"].errorDescription, Object.assign({ context: errorDetail.code, correlationId, count: (_c = (_b = (_a = errorDetail.additionalErrorMessage) === null || _a === void 0 ? void 0 : _a.userNames) === null || _b === void 0 ? void 0 : _b.length) !== null && _c !== void 0 ? _c : 0 }, errorDetail.additionalErrorMessage));
        })
            .join('\n');
    }
    return (react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_addressbook_components_shared__WEBPACK_IMPORTED_MODULE_3__[/* EmptyState */ "c"], { image: image, role: 'alert', title: title !== null && title !== void 0 ? title : t(_localization__WEBPACK_IMPORTED_MODULE_12__[/* Strings */ "a"].errorTitle, { context: code }), message: message, actionText: action, height: '100%', background: 'transparent', color: theme.palette.black, className: `${className} empty-state` },
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", { style: { display: 'flex', justifyContent: 'center', gap: '20px' } },
            action && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* DefaultButton */ "a"], { text: action, onClick: onAction }),
            returnToHomepageAction && onReturnToHome && (react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__[/* PrimaryButton */ "a"], { text: t(_localization__WEBPACK_IMPORTED_MODULE_12__[/* Strings */ "a"].returnToHomePage), onClick: onReturnToHome }))),
        children));
};


/***/ }),

/***/ "JCBN":
/*!*****************************************************************!*\
  !*** ./src/views/containers/DefaultPage/DesktopDefaultPage.tsx ***!
  \*****************************************************************/
/*! exports provided: DesktopDefaultPage */
/*! exports used: DesktopDefaultPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesktopDefaultPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "H8PI");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../logger */ "pIRP");
/* harmony import */ var _routes_Paths__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../routes/Paths */ "9hZ6");
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */




const DesktopDefaultPage = () => {
    const href = window.location.href;
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        _logger__WEBPACK_IMPORTED_MODULE_2__[/* logger */ "f"].logTraceWarning(_logger__WEBPACK_IMPORTED_MODULE_2__[/* LogCategory */ "a"].Navigate, `Redirect to desktop default page. original url:${href}`);
    }, [href]);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* Navigate */ "a"], { to: _routes_Paths__WEBPACK_IMPORTED_MODULE_3__[/* Paths */ "a"].DepartmentTeam, replace: true });
};


/***/ }),

/***/ "JwtI":
/*!*********************************!*\
  !*** ./src/entries/desktop.tsx ***!
  \*********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/global.css */ "rMck");
/* harmony import */ var _common_csp_inject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/csp-inject */ "ajHv");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "7nmT");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _addressbook_components_metaos_host__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @addressbook/components-metaos-host */ "0acT");
/* harmony import */ var _views_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/App */ "kBEA");
/* harmony import */ var _views_containers_ErrorBoundary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/containers/ErrorBoundary */ "TzxL");
/* harmony import */ var _common_init__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/init */ "4YvN");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../logger */ "pIRP");
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */









Object(_common_init__WEBPACK_IMPORTED_MODULE_7__[/* init */ "a"])(false);
react_dom__WEBPACK_IMPORTED_MODULE_3___default.a.render(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_views_containers_ErrorBoundary__WEBPACK_IMPORTED_MODULE_6__[/* ErrorBoundary */ "a"], null,
    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_addressbook_components_metaos_host__WEBPACK_IMPORTED_MODULE_4__[/* TeamsHostProvider */ "c"], null,
        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_views_App__WEBPACK_IMPORTED_MODULE_5__[/* App */ "a"], null))), document.getElementById('root'), () => {
    _logger__WEBPACK_IMPORTED_MODULE_8__[/* logger */ "f"].markScenario(_logger__WEBPACK_IMPORTED_MODULE_8__[/* ScenarioName */ "c"].AppBoot, _logger__WEBPACK_IMPORTED_MODULE_8__[/* StepName */ "e"].AppBootReactRendered);
    _logger__WEBPACK_IMPORTED_MODULE_8__[/* logger */ "f"].logTraceInfo(_logger__WEBPACK_IMPORTED_MODULE_8__[/* LogCategory */ "a"].AppBoot, 'React rendered desktop APP');
});


/***/ }),

/***/ "K5h+":
/*!****************************************!*\
  !*** ./src/utilities/quickAppUtils.ts ***!
  \****************************************/
/*! exports provided: OpenChat, OpenChatById, OpenCallByEmail, OpenVideoCallByEmail, OpenCallById, OpenVideoCallById, OpenOrgExplorerApp */
/*! exports used: OpenCallById, OpenChatById, OpenOrgExplorerApp, OpenVideoCallById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export OpenChat */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return OpenChatById; });
/* unused harmony export OpenCallByEmail */
/* unused harmony export OpenVideoCallByEmail */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenCallById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return OpenVideoCallById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return OpenOrgExplorerApp; });
/* harmony import */ var _addressbook_components_metaos_host__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-metaos-host */ "0acT");

function OpenChat(userEmail) {
    // executeDeepLink(`https://teams.microsoft.com/l/chat/0/0?users=${userEmail}`);
    // https://teams.microsoft.com/multi-window/chats/
    Object(_addressbook_components_metaos_host__WEBPACK_IMPORTED_MODULE_0__[/* executeDeepLink */ "f"])(`https://teams.microsoft.com/multi-window/chats/users=${userEmail}`);
    // way1: executeDeepLink(`https://teams.microsoft.com/l/chat/0/0?users=${userEmail}`);
    // way2: window.open(`https://teams.microsoft.com/l/chat/0/0?users=${userEmail}`, '_blank');
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
    //         url: `https://teams.microsoft.com/l/chat/0/0?users=${userEmail}`,
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
    // executeDeepLink(`https://teams.microsoft.com/l/chat/0/0?users=8:orgid:${userId}`);
    Object(_addressbook_components_metaos_host__WEBPACK_IMPORTED_MODULE_0__[/* executeDeepLink */ "f"])('https://teams.microsoft.com/multi-window/chats/19:b82b1112-95cf-49ff-b773-82b43964c9ca_f710e772-b3ec-4b3c-aca4-0628a7dd296a@unq.gbl.spaces');
}
function OpenCallByEmail(userEmail) {
    Object(_addressbook_components_metaos_host__WEBPACK_IMPORTED_MODULE_0__[/* executeDeepLink */ "f"])(`https://teams.microsoft.com/l/call/0/0?users=${userEmail}`);
}
function OpenVideoCallByEmail(userEmail) {
    Object(_addressbook_components_metaos_host__WEBPACK_IMPORTED_MODULE_0__[/* executeDeepLink */ "f"])(`https://teams.microsoft.com/l/call/0/0?users=${userEmail}`);
}
function OpenCallById(userId) {
    Object(_addressbook_components_metaos_host__WEBPACK_IMPORTED_MODULE_0__[/* executeDeepLink */ "f"])(`https://teams.microsoft.com/l/call/0/0?users=8:orgid:${userId}`);
}
function OpenVideoCallById(userId) {
    Object(_addressbook_components_metaos_host__WEBPACK_IMPORTED_MODULE_0__[/* executeDeepLink */ "f"])(`https://teams.microsoft.com/l/call/0/0?users=8:orgid:${userId}`);
}
function OpenOrgExplorerApp() {
    Object(_addressbook_components_metaos_host__WEBPACK_IMPORTED_MODULE_0__[/* executeDeepLink */ "f"])('https://teams.microsoft.com/l/app/1f8c20f5-d70f-4f8e-93e1-31d8fce0c8c9');
}


/***/ }),

/***/ "L4Fw":
/*!**************************************************!*\
  !*** ./src/views/components/PeopleCard/index.ts ***!
  \**************************************************/
/*! exports provided: PeopleCard */
/*! exports used: PeopleCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _PeopleCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PeopleCard */ "8U4l");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _PeopleCard__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */



/***/ }),

/***/ "Llse":
/*!***************************************************!*\
  !*** ./src/views/containers/DefaultPage/index.ts ***!
  \***************************************************/
/*! exports provided: DesktopDefaultPage, MobileDefaultPage */
/*! exports used: DesktopDefaultPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _DesktopDefaultPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DesktopDefaultPage */ "JCBN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _DesktopDefaultPage__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _MobileDefaultPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MobileDefaultPage */ "EYC9");
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */




/***/ }),

/***/ "MBO/":
/*!******************************************************************!*\
  !*** ./src/views/common/CommonDetailsList/CommonDetailsList.tsx ***!
  \******************************************************************/
/*! exports provided: CommonDetailsList, onRenderReportDefinitionColumn */
/*! exports used: CommonDetailsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonDetailsList; });
/* unused harmony export onRenderReportDefinitionColumn */
/* harmony import */ var _addressbook_components_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-shared */ "+INc");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react */ "eZeq");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react */ "ogYq");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react */ "Pn0s");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react */ "fh99");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react */ "KEG9");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react */ "Imro");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fluentui/react */ "hGA5");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_infinite_scroll_hook__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-infinite-scroll-hook */ "MeCZ");
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */




const CommonDetailsList = ({ items, columns, className, rowClass, queryStatus, ariaLabel, onItemClick, shimmerLines, onRenderRow, isHeaderVisible = true, groupProps, groups, announcedMessage, }) => {
    var _a;
    const [sentryRef] = Object(react_infinite_scroll_hook__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])({
        loading: !!(queryStatus === null || queryStatus === void 0 ? void 0 : queryStatus.isLoading),
        hasNextPage: !!(queryStatus === null || queryStatus === void 0 ? void 0 : queryStatus.canLoadMore),
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onLoadMore: (_a = queryStatus === null || queryStatus === void 0 ? void 0 : queryStatus.loadMore) !== null && _a !== void 0 ? _a : (() => { }),
        disabled: !queryStatus,
    });
    const onRenderRowDefault = react__WEBPACK_IMPORTED_MODULE_8___default.a.useCallback((props) => props ? (react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* DetailsRow */ "a"], Object.assign({}, props, { className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__[/* mergeStyles */ "F"])(rowClass && rowClass(props)), "data-selection-invoke": true, role: 'row', "data-testid": 'DetailsRow', "aria-rowindex": props.itemIndex }))) : (react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null)), [rowClass]);
    const onRenderDetailsHeader = react__WEBPACK_IMPORTED_MODULE_8___default.a.useCallback((props) => props ? (react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_3__[/* DetailsHeader */ "a"], Object.assign({}, props)),
        announcedMessage && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_4__[/* Announced */ "a"], { message: announcedMessage }))) : null, [announcedMessage]);
    return (react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_5__[/* ShimmeredDetailsList */ "a"], { selectionMode: _fluentui_react__WEBPACK_IMPORTED_MODULE_6__[/* SelectionMode */ "c"].none, constrainMode: _fluentui_react__WEBPACK_IMPORTED_MODULE_7__[/* ConstrainMode */ "d"].unconstrained, layoutMode: _fluentui_react__WEBPACK_IMPORTED_MODULE_7__[/* DetailsListLayoutMode */ "e"].justified, enableShimmer: !items, columns: columns, items: ((queryStatus === null || queryStatus === void 0 ? void 0 : queryStatus.isLoading) || (queryStatus === null || queryStatus === void 0 ? void 0 : queryStatus.canLoadMore)) && items ? [...items, null] : items || [], isHeaderVisible: isHeaderVisible, onRenderRow: onRenderRow !== null && onRenderRow !== void 0 ? onRenderRow : onRenderRowDefault, onItemInvoked: onItemClick && (item => onItemClick(item)), onRenderDetailsFooter: () => react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", { ref: sentryRef }), className: className, ariaLabelForGrid: ariaLabel, shimmerLines: shimmerLines, role: 'table', groups: groups, groupProps: groupProps, onRenderDetailsHeader: onRenderDetailsHeader }));
};
const onRenderReportDefinitionColumn = (title, iconBackgroundColor, icon, description) => {
    return (react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_addressbook_components_shared__WEBPACK_IMPORTED_MODULE_0__[/* CommonIcon */ "b"], { title: title, iconBackgroundColor: iconBackgroundColor, icon: icon, styles: { title: { fontWeight: 'inherit' } }, description: description }));
};


/***/ }),

/***/ "Nl/D":
/*!***********************************************************!*\
  !*** ./src/views/common/LoadingIndicatorWrapper/index.ts ***!
  \***********************************************************/
/*! exports provided: LoadingIndicatorWrapper */
/*! exports used: LoadingIndicatorWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _LoadingIndicatorWrapper_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoadingIndicatorWrapper.component */ "dsxV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _LoadingIndicatorWrapper_component__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */



/***/ }),

/***/ "OwkI":
/*!***************************************!*\
  !*** ./src/hooks/components/index.ts ***!
  \***************************************/
/*! exports provided: retrievePeopleSelectionIcon, retrievePeoplePresenceByGraph, retrievePeopleManagerByGraph */
/*! exports used: retrievePeopleManagerByGraph, retrievePeoplePresenceByGraph, retrievePeopleSelectionIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _people__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./people */ "pFId");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _people__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _people__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _people__WEBPACK_IMPORTED_MODULE_0__["c"]; });

// export * from './collapsible-text-fields';
// export * from './date-pickers';
// export * from './form-facades';

// export * from './rich-text-fields';


/***/ }),

/***/ "Q26K":
/*!************************************************************!*\
  !*** ./src/views/containers/SearchResult/SearchResult.tsx ***!
  \************************************************************/
/*! exports provided: SearchResults */
/*! exports used: SearchResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResults; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "Favm");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "Tr4L");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "H8PI");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks */ "eZYV");
/* harmony import */ var _localization__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../localization */ "HVbO");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../logger */ "pIRP");
/* harmony import */ var _routes_Paths__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../routes/Paths */ "9hZ6");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../service */ "YCKj");
/* harmony import */ var _utilities_peopleUtils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../utilities/peopleUtils */ "Reqn");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components */ "0UAP");
/* harmony import */ var _components_AddressBookAppHeader_AddressBookAppHeader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/AddressBookAppHeader/AddressBookAppHeader */ "ca4Q");
/* harmony import */ var _components_PeopleList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/PeopleList */ "S0dn");
/* harmony import */ var _SearchResult_styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./SearchResult.styles */ "3O72");
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














const SearchResults = () => {
    const styles = Object(_SearchResult_styles__WEBPACK_IMPORTED_MODULE_13__[/* useSearchResultStyles */ "a"])();
    const iconProps = {
        iconName: 'Search',
        className: styles.textFieldIcon1,
        styles: {
            root: {
                fontSize: '20px',
            },
        },
    };
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__[/* useTranslation */ "a"])();
    const { params } = Object(_hooks__WEBPACK_IMPORTED_MODULE_4__[/* usePageParams */ "e"])();
    const { searchText } = params;
    const [inputValue, setInputValue] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(searchText);
    const onChange = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback((_, value) => {
        setInputValue(value || '');
    }, []);
    const navigate = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* useNavigate */ "i"])();
    const _a = Object(_hooks__WEBPACK_IMPORTED_MODULE_4__[/* useReactPageQuery */ "f"])(_service__WEBPACK_IMPORTED_MODULE_8__[/* SERVICE_CLIENT */ "b"].fetchSearchUser, { top: 10, userDisplayName: searchText }, { enabled: searchText !== '' }), { data: searchMembers, error: membersError, isLoading: membersLoading } = _a, membersQueryStatus = __rest(_a, ["data", "error", "isLoading"]);
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: styles.root },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_AddressBookAppHeader_AddressBookAppHeader__WEBPACK_IMPORTED_MODULE_11__[/* AddressBookAppHeader */ "a"], { moduleName: _logger__WEBPACK_IMPORTED_MODULE_6__[/* ModuleName */ "b"].SearchResult, searchText: searchText }),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: styles.main },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: styles.top },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", { className: styles.topText }, t(_localization__WEBPACK_IMPORTED_MODULE_5__[/* Strings */ "a"].searchResultLabel, { searchResult: searchText })),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* DefaultButton */ "a"], { onClick: () => navigate(_routes_Paths__WEBPACK_IMPORTED_MODULE_7__[/* Paths */ "a"].DepartmentTeam), text: t(_localization__WEBPACK_IMPORTED_MODULE_5__[/* Strings */ "a"].exitSearchLabel) })),
            searchMembers && searchMembers.length > 0 && (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PeopleList__WEBPACK_IMPORTED_MODULE_12__[/* PeopleList */ "a"], { items: searchMembers.map(data => Object(_utilities_peopleUtils__WEBPACK_IMPORTED_MODULE_9__[/* mapUserViewToPeople */ "d"])(data)), queryStatus: membersQueryStatus, moduleName: _logger__WEBPACK_IMPORTED_MODULE_6__[/* ModuleName */ "b"].SearchResult })),
            (searchMembers === null || searchMembers === void 0 ? void 0 : searchMembers.length) === 0 && (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_10__[/* EmptyStatus */ "a"], { title: t(_localization__WEBPACK_IMPORTED_MODULE_5__[/* Strings */ "a"].errorTitleForNotContract), message: t(_localization__WEBPACK_IMPORTED_MODULE_5__[/* Strings */ "a"].errorMessageForNotContract), img: 'NoMessage' })),
            membersLoading && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_10__[/* LoadingPage */ "c"], null),
            membersError && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_10__[/* ErrorStatus */ "b"], { error: membersError }))));
};


/***/ }),

/***/ "Reqn":
/*!**************************************!*\
  !*** ./src/utilities/peopleUtils.ts ***!
  \**************************************/
/*! exports provided: mapUserViewToPeople, mapUserToPeople, getDepartmentIdFromFullId, getDepartmentNameFromFullName */
/*! exports used: getDepartmentIdFromFullId, getDepartmentNameFromFullName, mapUserToPeople, mapUserViewToPeople */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return mapUserViewToPeople; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return mapUserToPeople; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDepartmentIdFromFullId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getDepartmentNameFromFullName; });
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
        departmentPaths: user.departmentPaths,
    };
}
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
        departmentPaths: {},
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


/***/ }),

/***/ "S0dn":
/*!**************************************************!*\
  !*** ./src/views/components/PeopleList/index.ts ***!
  \**************************************************/
/*! exports provided: PeopleList */
/*! exports used: PeopleList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _PeopleList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PeopleList */ "hzKq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _PeopleList__WEBPACK_IMPORTED_MODULE_0__["a"]; });




/***/ }),

/***/ "S3HP":
/*!**************************************************!*\
  !*** ./src/hooks/actions/useTabContentAction.ts ***!
  \**************************************************/
/*! exports provided: useTabContentAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export useTabContentAction */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useDataFlag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useDataFlag */ "o34k");
/* harmony import */ var _useListComponentStatusChange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useListComponentStatusChange */ "7kkp");



/**
 * hook for get report list actions
 *
 * @param reportListType is submitted report list or received report list
 * @returns actions
 */
function useTabContentAction(reportListType, hasExtraList) {
    const { hasFlag, setFlag, delFlag } = Object(_useDataFlag__WEBPACK_IMPORTED_MODULE_1__[/* useDataFlag */ "a"])(reportListType);
    const [extraCardListStatus, setExtraCardListStatus] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
    const [timeSensitiveCardListStatus, setTimeSensitiveCardListStatus] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
    const [adhocCardListStatus, setAdhocCardListStatus] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
    const [reportListStatus, setReportListStatus] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
    const statusList = [];
    if (hasExtraList)
        statusList.push(extraCardListStatus);
    statusList.push(timeSensitiveCardListStatus, adhocCardListStatus);
    if (reportListType !== 'ComposeExtension')
        statusList.push(reportListStatus);
    const isAllEmpty = statusList.every(s => s === _useListComponentStatusChange__WEBPACK_IMPORTED_MODULE_2__[/* ListComponentStatus */ "a"].Empty);
    const hasNonEmpty = statusList.some(s => s === _useListComponentStatusChange__WEBPACK_IMPORTED_MODULE_2__[/* ListComponentStatus */ "a"].NonEmpty);
    const hasError = statusList.some(s => s === _useListComponentStatusChange__WEBPACK_IMPORTED_MODULE_2__[/* ListComponentStatus */ "a"].Error);
    const showLoading = !(hasFlag || isAllEmpty || hasNonEmpty || hasError);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
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


/***/ }),

/***/ "S4+q":
/*!**********************************************************************!*\
  !*** ./src/views/common/CommonCardList/CommonCardList.component.tsx ***!
  \**********************************************************************/
/*! exports provided: CommonCardList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CommonCardList */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_infinite_scroll_hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-infinite-scroll-hook */ "MeCZ");
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */


const CommonCardList = (props) => {
    var _a, _b;
    const { items, CardShimmerComponent, number, queryStatus, shimmerCount = 8 } = props;
    const [sentryRef] = Object(react_infinite_scroll_hook__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
        loading: !!(queryStatus === null || queryStatus === void 0 ? void 0 : queryStatus.isLoading),
        hasNextPage: !!(queryStatus === null || queryStatus === void 0 ? void 0 : queryStatus.canLoadMore),
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onLoadMore: (_a = queryStatus === null || queryStatus === void 0 ? void 0 : queryStatus.loadMore) !== null && _a !== void 0 ? _a : (() => { }),
        disabled: !queryStatus,
    });
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, (_b = items === null || items === void 0 ? void 0 : items.slice(0, number)) !== null && _b !== void 0 ? _b : Array.from({ length: number !== null && number !== void 0 ? number : shimmerCount }, (_v, i) => (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, { key: i }, CardShimmerComponent))),
        ((queryStatus === null || queryStatus === void 0 ? void 0 : queryStatus.isLoading) || (queryStatus === null || queryStatus === void 0 ? void 0 : queryStatus.canLoadMore)) && items && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { ref: sentryRef, style: { width: '100%' }, "aria-hidden": true }, CardShimmerComponent))));
};


/***/ }),

/***/ "S6UW":
/*!***************************************************!*\
  !*** ./src/views/components/EmptyStatus/index.ts ***!
  \***************************************************/
/*! exports provided: EmptyStatus */
/*! exports used: EmptyStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _EmptyStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmptyStatus */ "goJt");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _EmptyStatus__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */



/***/ }),

/***/ "ThME":
/*!**************************************************!*\
  !*** ./src/views/common/CommonCardList/index.ts ***!
  \**************************************************/
/*! exports provided: CommonCardList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _CommonCardList_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommonCardList.component */ "S4+q");
/* unused harmony reexport * */
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */



/***/ }),

/***/ "U5IE":
/*!****************************************************************!*\
  !*** ./src/views/components/EmptyStatus/EmptyStatus.styles.ts ***!
  \****************************************************************/
/*! exports provided: useEmptyStatusStyles */
/*! exports used: useEmptyStatusStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useEmptyStatusStyles; });
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "n4Dn");

const useEmptyStatusStyles = Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])(() => ({
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


/***/ }),

/***/ "VjCn":
/*!***************************************!*\
  !*** ./src/ecs/ECSConfigProvider.tsx ***!
  \***************************************/
/*! exports provided: ECSConfigProvider, useECSConfig */
/*! exports used: ECSConfigProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ECSConfigProvider; });
/* unused harmony export useECSConfig */
/* harmony import */ var _addressbook_components_metaos_host__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-metaos-host */ "0acT");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "jtiS");
/* harmony import */ var _common_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/env */ "8MrD");
/* harmony import */ var _loadEcsConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loadEcsConfig */ "oZXk");





const ecsConfigQueryKey = 'GetECSConfigs';
const ecsQueryClient = new react_query__WEBPACK_IMPORTED_MODULE_2__["QueryClient"]({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            cacheTime: Infinity,
        },
    },
});
const ECSContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext({ data: _loadEcsConfig__WEBPACK_IMPORTED_MODULE_4__[/* defaultECSFlags */ "a"] });
function ECSConfigProviderInner({ children, defaultValue, value, }) {
    const userObjectId = _common_env__WEBPACK_IMPORTED_MODULE_3__[/* initQuery */ "k"].get(_common_env__WEBPACK_IMPORTED_MODULE_3__[/* URIParam */ "g"].UserId);
    const tid = _common_env__WEBPACK_IMPORTED_MODULE_3__[/* initQuery */ "k"].get(_common_env__WEBPACK_IMPORTED_MODULE_3__[/* URIParam */ "g"].TenantId);
    const ringId = _common_env__WEBPACK_IMPORTED_MODULE_3__[/* initQuery */ "k"].get(_common_env__WEBPACK_IMPORTED_MODULE_3__[/* URIParam */ "g"].RingId);
    const hostClientType = _common_env__WEBPACK_IMPORTED_MODULE_3__[/* initQuery */ "k"].get(_common_env__WEBPACK_IMPORTED_MODULE_3__[/* URIParam */ "g"].ClientType);
    const teamsContext = Object(_addressbook_components_metaos_host__WEBPACK_IMPORTED_MODULE_0__[/* useTeamsContext */ "o"])();
    const ecsParams = Object(_loadEcsConfig__WEBPACK_IMPORTED_MODULE_4__[/* getECSParams */ "b"])(Object.assign({ userObjectId,
        tid,
        ringId,
        hostClientType }, teamsContext));
    const result = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useQuery"])([ecsConfigQueryKey, ecsParams], () => Object(_loadEcsConfig__WEBPACK_IMPORTED_MODULE_4__[/* loadEcsConfig */ "c"])(ecsParams), {
        select: data => data.MWTWorkReport,
        placeholderData: { MWTWorkReport: defaultValue || _loadEcsConfig__WEBPACK_IMPORTED_MODULE_4__[/* defaultECSFlags */ "a"], Headers: {} },
        enabled: !value && !!ecsParams,
    });
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ECSContext.Provider, { value: value ? { data: value } : result }, children);
}
function ECSConfigProvider({ children, defaultValue, value, }) {
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_query__WEBPACK_IMPORTED_MODULE_2__["QueryClientProvider"], { client: ecsQueryClient },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ECSConfigProviderInner, { defaultValue: defaultValue, value: value }, children)));
}
function useECSConfig() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(ECSContext);
}


/***/ }),

/***/ "WWNV":
/*!********************************************************!*\
  !*** ./src/views/containers/HomePage/HomePageQuery.ts ***!
  \********************************************************/
/*! exports provided: mapDepartmentToNavLink, useMemberListByDepartment, MemberType */
/*! exports used: MemberType, mapDepartmentToNavLink, useMemberListByDepartment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return mapDepartmentToNavLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return useMemberListByDepartment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberType; });
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../hooks */ "eZYV");
/* harmony import */ var _routes_Paths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../routes/Paths */ "9hZ6");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service */ "YCKj");



function mapDepartmentToNavLink(department, currentDepartmentId, // 用于路由生成 V1
currentDepartmentName, // 用于路由生成 V2
selectedDepartmentName // 用于判断当前部门是否展开
) {
    const departmentFullId = currentDepartmentId === '' ? department.id : `${currentDepartmentId}/${department.id}`;
    // departmentFullId 是当前部门的完整 ID，用于生成 URL， 标识哪一页做expand，标识当前部门
    // 因为在HomePage的PeopleList里，不支持用<Guid, <string, string>>的结构来表明DepartmentId, DepartmentFullName, DepartmentFullId,所以路由改换成使用DepartmentFullName和DepartmentId
    // 更新：v3使用departmentFullId和departmentFullName，其中key是departmentFullId，好处是不用担心FullName的唯一性和特殊字符，以及拿到最全的数据，FullId表示层级结构，FullName表示部门名称
    const departmentFullName = currentDepartmentName === '' ? department.name : `${currentDepartmentName}/${department.name}`;
    const link = {
        name: department.name,
        url: Object(_routes_Paths__WEBPACK_IMPORTED_MODULE_1__[/* generateURL */ "b"])(_routes_Paths__WEBPACK_IMPORTED_MODULE_1__[/* Paths */ "a"].DepartmentTeam, undefined, {
            departmentFullName,
            departmentFullId,
        }),
        key: departmentFullId,
        expandAriaLabel: department.name,
        isExpanded: selectedDepartmentName === null || selectedDepartmentName === void 0 ? void 0 : selectedDepartmentName.includes(department.name),
        // isExpanded: true,
        links: department.subDepartments.length
            ? department.subDepartments.map(subDepartment => mapDepartmentToNavLink(subDepartment, departmentFullId, departmentFullName, selectedDepartmentName))
            : undefined, // 如果有子部门，则递归处理；否则为 undefined
    };
    return link;
}
/**
 * hook for get user member list
 *
 * @param type is all member list or direct member list
 * @param top page query page size
 * @returns page query result
 */
function useMemberListByDepartment(type, isRootDepartment, departmentId, top, skipToken) {
    const isAllMember = type === 'AllMember';
    const func = isAllMember
        ? _service__WEBPACK_IMPORTED_MODULE_2__[/* SERVICE_CLIENT */ "b"].fetchGetAllUserMembersByDepartment
        : _service__WEBPACK_IMPORTED_MODULE_2__[/* SERVICE_CLIENT */ "b"].fetchGetDirectUserMembersByDepartment;
    const params = {
        departmentId,
        isRootDepartment,
        top,
        skipToken,
    };
    return Object(_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useReactPageQuery */ "f"])(func, params, { enabled: !!departmentId });
}
// export type MemberType = 'AllMember' | 'DirectMember';
var MemberType;
(function (MemberType) {
    MemberType["AllMember"] = "AllMember";
    MemberType["DirectMember"] = "DirectMember";
})(MemberType || (MemberType = {}));


/***/ }),

/***/ "Y0Nq":
/*!**********************************!*\
  !*** ./src/hooks/useLanguage.ts ***!
  \**********************************/
/*! exports provided: useLanguage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export useLanguage */
/* harmony import */ var _addressbook_components_metaos_host__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-metaos-host */ "0acT");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "Tr4L");


/**
 * A hook to get the current language.
 *
 * @returns The current language.
 */
function useLanguage() {
    var _a, _b;
    const context = Object(_addressbook_components_metaos_host__WEBPACK_IMPORTED_MODULE_0__[/* useTeamsContext */ "o"])();
    const { i18n } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__[/* useTranslation */ "a"])(undefined, { useSuspense: false });
    return ((_a = context === null || context === void 0 ? void 0 : context.app) === null || _a === void 0 ? void 0 : _a.locale) || i18n.resolvedLanguage || ((_b = i18n.languages) === null || _b === void 0 ? void 0 : _b[0]) || i18n.language;
}


/***/ }),

/***/ "bFe0":
/*!*****************************!*\
  !*** ./src/styles/index.ts ***!
  \*****************************/
/*! exports provided: themeProviderClassName */
/*! exports used: themeProviderClassName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _theme_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme-provider */ "I5zc");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _theme_provider__WEBPACK_IMPORTED_MODULE_0__["a"]; });




/***/ }),

/***/ "ca4Q":
/*!****************************************************************************!*\
  !*** ./src/views/components/AddressBookAppHeader/AddressBookAppHeader.tsx ***!
  \****************************************************************************/
/*! exports provided: AddressBookAppHeader */
/*! exports used: AddressBookAppHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressBookAppHeader; });
/* harmony import */ var _addressbook_components_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-shared */ "+INc");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "Tr4L");
/* harmony import */ var _common_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/env */ "8MrD");
/* harmony import */ var _localization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../localization */ "HVbO");
/* harmony import */ var _RefreshButton_RefreshButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../RefreshButton/RefreshButton */ "1n01");
/* harmony import */ var _SearchPeopleField_SearchPeopleField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SearchPeopleField/SearchPeopleField */ "8tIN");
/* harmony import */ var _AddressBookAppHeader_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AddressBookAppHeader.styles */ "/s0O");
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */








const AddressBookAppHeader = ({ items, farItems, title, moduleName, searchText, }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__[/* useTranslation */ "a"])();
    const styles = Object(_AddressBookAppHeader_styles__WEBPACK_IMPORTED_MODULE_7__[/* useAppHeaderStyles */ "a"])();
    const finalFarItems = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](() => {
        return !farItems ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: styles.navContainer },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_SearchPeopleField_SearchPeopleField__WEBPACK_IMPORTED_MODULE_6__[/* SearchPeopleField */ "a"], { searchText: searchText }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_RefreshButton_RefreshButton__WEBPACK_IMPORTED_MODULE_5__[/* RefreshButton */ "a"], null))) : (farItems);
    }, [farItems, searchText, styles.navContainer]);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_addressbook_components_shared__WEBPACK_IMPORTED_MODULE_0__[/* AppHeader */ "a"], { title: title === undefined ? t(_localization__WEBPACK_IMPORTED_MODULE_4__[/* Strings */ "a"].appName, { context: _common_env__WEBPACK_IMPORTED_MODULE_3__[/* ENVIRONMENT */ "e"] }) : title, items: items, farItems: finalFarItems, moduleName: moduleName }));
};


/***/ }),

/***/ "dsxV":
/*!****************************************************************************************!*\
  !*** ./src/views/common/LoadingIndicatorWrapper/LoadingIndicatorWrapper.component.tsx ***!
  \****************************************************************************************/
/*! exports provided: LoadingIndicatorWrapperComponent */
/*! exports used: LoadingIndicatorWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingIndicatorWrapperComponent; });
/* harmony import */ var _addressbook_components_shared_src_CommonLoadingIndicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-shared/src/CommonLoadingIndicator */ "HKfi");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "jtiS");
/* harmony import */ var _routes_Paths__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../routes/Paths */ "9hZ6");
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */




const LoadingIndicatorWrapperComponent = ({ isMobile }) => {
    const isFetching = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useIsFetching"])() > 0;
    const hideProgressIndicator = !isMobile && window.location.pathname.indexOf(_routes_Paths__WEBPACK_IMPORTED_MODULE_3__[/* Paths */ "a"].HomePage) > 0;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, !hideProgressIndicator && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_addressbook_components_shared_src_CommonLoadingIndicator__WEBPACK_IMPORTED_MODULE_0__[/* CommonLoadingIndicator */ "a"], { isFetching: isFetching }));
};


/***/ }),

/***/ "eZYV":
/*!****************************!*\
  !*** ./src/hooks/index.ts ***!
  \****************************/
/*! exports provided: useDataFlag, useFlagStatus, ListComponentStatus, useListComponentStatusChange, useNewChatEffect, useTabContentAction, retrievePeopleSelectionIcon, retrievePeoplePresenceByGraph, retrievePeopleManagerByGraph, usePageTitle, useTopLevelPath, useCurrentUserSelection, useFluentUIThemeWithRTL, useLanguage, usePageParams, useReactPageQuery, useReactQuery */
/*! exports used: retrievePeopleManagerByGraph, retrievePeoplePresenceByGraph, retrievePeopleSelectionIcon, useFluentUIThemeWithRTL, usePageParams, useReactPageQuery, useReactQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "2MGt");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "OwkI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _components__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _components__WEBPACK_IMPORTED_MODULE_1__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _components__WEBPACK_IMPORTED_MODULE_1__["c"]; });

/* harmony import */ var _paths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paths */ "vz5b");
/* harmony import */ var _people__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./people */ "AuXa");
/* harmony import */ var _useFluentUIThemeWithRTL__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useFluentUIThemeWithRTL */ "61Jn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _useFluentUIThemeWithRTL__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony import */ var _useLanguage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useLanguage */ "Y0Nq");
/* harmony import */ var _usePageParams__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./usePageParams */ "n4oa");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _usePageParams__WEBPACK_IMPORTED_MODULE_6__["a"]; });

/* harmony import */ var _useReactPageQuery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./useReactPageQuery */ "5mdo");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _useReactPageQuery__WEBPACK_IMPORTED_MODULE_7__["a"]; });

/* harmony import */ var _useReactQuery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useReactQuery */ "Fwf9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "g", function() { return _useReactQuery__WEBPACK_IMPORTED_MODULE_8__["a"]; });












/***/ }),

/***/ "goJt":
/*!**********************************************************!*\
  !*** ./src/views/components/EmptyStatus/EmptyStatus.tsx ***!
  \**********************************************************/
/*! exports provided: EmptyStatus */
/*! exports used: EmptyStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmptyStatus; });
/* harmony import */ var _addressbook_components_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-shared */ "+INc");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react */ "jFKp");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react */ "ogYq");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react */ "xRnI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_emptyStatus_file_empty_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/emptyStatus/file-empty.svg */ "/5rm");
/* harmony import */ var _assets_emptyStatus_no_message_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/emptyStatus/no-message.svg */ "Qy9N");
/* harmony import */ var _assets_emptyStatus_no_unsubmitted_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../assets/emptyStatus/no-unsubmitted.svg */ "FGVm");
/* harmony import */ var _assets_emptyStatus_optimizing_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../assets/emptyStatus/optimizing.svg */ "RKR/");
/* harmony import */ var _assets_emptyStatus_submitted_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../assets/emptyStatus/submitted.svg */ "q7qM");
/* harmony import */ var _EmptyStatus_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./EmptyStatus.styles */ "U5IE");









const EmptyStatus = ({ img, title, message, actionText, onAction, className, isSmall, children, role, }) => {
    const theme = Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* useTheme */ "a"])();
    const styles = Object(_EmptyStatus_styles__WEBPACK_IMPORTED_MODULE_10__[/* useEmptyStatusStyles */ "a"])();
    const imgFile = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(() => img === 'FileEmpty'
        ? _assets_emptyStatus_file_empty_svg__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]
        : img === 'Optimizing'
            ? _assets_emptyStatus_optimizing_svg__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"]
            : img === 'Submitted'
                ? _assets_emptyStatus_submitted_svg__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"]
                : img === 'NoUnsubmitted'
                    ? _assets_emptyStatus_no_unsubmitted_svg__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"]
                    : img === 'NoMessage'
                        ? _assets_emptyStatus_no_message_svg__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]
                        : '', [img]);
    return (react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_addressbook_components_shared__WEBPACK_IMPORTED_MODULE_0__[/* EmptyState */ "c"], { role: role, className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__[/* mergeStyles */ "F"])(styles.root, isSmall && 'is-small', className), image: imgFile, title: title !== null && title !== void 0 ? title : '', message: message, height: '100%', background: 'transparent', color: theme.palette.black },
        actionText && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_3__[/* PrimaryButton */ "a"], { text: actionText, onClick: onAction }),
        children));
};


/***/ }),

/***/ "hzKq":
/*!********************************************************!*\
  !*** ./src/views/components/PeopleList/PeopleList.tsx ***!
  \********************************************************/
/*! exports provided: PeopleList */
/*! exports used: PeopleList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeopleList; });
/* harmony import */ var _addressbook_components_people__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-people */ "apXe");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react */ "BFcr");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react */ "lm3o");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react */ "rtnm");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react */ "kvDL");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react */ "v4N6");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "Tr4L");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "H8PI");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../hooks */ "eZYV");
/* harmony import */ var _localization__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../localization */ "HVbO");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../logger */ "pIRP");
/* harmony import */ var _routes_Paths__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../routes/Paths */ "9hZ6");
/* harmony import */ var _utilities_peopleUtils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../utilities/peopleUtils */ "Reqn");
/* harmony import */ var _utilities_quickAppUtils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../utilities/quickAppUtils */ "K5h+");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common */ "7BQt");
/* harmony import */ var _PeopleCard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../PeopleCard */ "L4Fw");
/* harmony import */ var _PeopleList_styles__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./PeopleList.styles */ "wGbJ");














const PeopleList = ({ items, queryStatus }) => {
    const styles = Object(_PeopleList_styles__WEBPACK_IMPORTED_MODULE_17__[/* usePeopleListStyles */ "a"])();
    // People Card:
    const [calloutTarget, setCalloutTarget] = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(undefined);
    const [peopleShow, setPeopleShow] = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(undefined);
    const [openCardId, setOpenCardId] = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])('');
    const navigate = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_8__[/* useNavigate */ "i"])();
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__[/* useTranslation */ "a"])();
    // const tooltipId = useId('tooltip');
    const columns = [
        {
            key: 'name',
            name: t(_localization__WEBPACK_IMPORTED_MODULE_10__[/* Strings */ "a"].peopleListColumnForName),
            fieldName: 'name',
            // minWidth: 200,
            // maxWidth: 300,
            minWidth: 264,
            maxWidth: 264,
            isResizable: false,
            iconName: 'ContactCard',
            iconClassName: styles.iconCell,
            className: styles.cellTitle,
            onRender: (item) => {
                return (react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", { className: styles.nameField },
                    react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", { className: styles.nameShow, 
                        // When Click the user name, show the PeopleCard
                        onClick: event => {
                            setOpenCardId(item.id);
                            const targetElement = event.target;
                            setPeopleShow(item);
                            setCalloutTarget(targetElement);
                            _logger__WEBPACK_IMPORTED_MODULE_11__[/* logger */ "f"].logUserBiAction(_logger__WEBPACK_IMPORTED_MODULE_11__[/* ScenarioName */ "c"].PeopleCard, _logger__WEBPACK_IMPORTED_MODULE_11__[/* ScenarioType */ "d"].OpenPeopleCard, 'moduleName', {});
                        } },
                        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_addressbook_components_people__WEBPACK_IMPORTED_MODULE_0__[/* PeopleCoin */ "a"], { selection: { id: item.id, name: item.name, type: 0 }, onRetrieveIcon: _hooks__WEBPACK_IMPORTED_MODULE_9__[/* retrievePeopleSelectionIcon */ "c"], coinSize: 24 }),
                        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", { className: styles.nameSpan, title: item.name }, item.name)),
                    react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", { className: styles.hoverShowButtonContainer },
                        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* ActionButton */ "a"], { iconProps: {
                                iconName: 'Chat',
                                styles: {
                                    root: {
                                        fontSize: '20px',
                                    },
                                },
                            }, title: 'Chat', ariaLabel: 'Chat', className: styles.hoverShowButton, onClick: () => Object(_utilities_quickAppUtils__WEBPACK_IMPORTED_MODULE_14__[/* OpenChatById */ "b"])(item.id) }),
                        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* ActionButton */ "a"], { iconProps: {
                                iconName: 'Call',
                                styles: {
                                    root: {
                                        fontSize: '20px',
                                        padding: 0,
                                    },
                                },
                            }, title: 'Emoji', ariaLabel: 'Emoji', className: styles.hoverShowButton, onClick: () => Object(_utilities_quickAppUtils__WEBPACK_IMPORTED_MODULE_14__[/* OpenCallById */ "a"])(item.id) }))));
            },
        },
        {
            key: 'mail',
            name: t(_localization__WEBPACK_IMPORTED_MODULE_10__[/* Strings */ "a"].peopleListColumnForEmail),
            fieldName: 'mail',
            minWidth: 200,
            maxWidth: 300,
            isResizable: false,
            iconName: 'Mail',
            iconClassName: styles.iconCell,
            onRender: (item) => {
                return (react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", { title: item.mail, className: styles.span }, item.mail));
            },
        },
        {
            key: 'phone',
            name: t(_localization__WEBPACK_IMPORTED_MODULE_10__[/* Strings */ "a"].peopleListColumnForPhone),
            fieldName: 'phone',
            minWidth: 100,
            width: 120,
            maxWidth: 150,
            isResizable: false,
            iconName: 'Call',
            iconClassName: styles.iconCell,
            onRender: (item) => {
                return (react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", { title: item.phone, className: styles.span }, item.phone));
            },
        },
        {
            key: 'depart',
            name: t(_localization__WEBPACK_IMPORTED_MODULE_10__[/* Strings */ "a"].peopleListColumnForDepart),
            fieldName: 'depart',
            minWidth: 200,
            maxWidth: 300,
            isResizable: false,
            iconName: 'Location',
            iconClassName: styles.iconCell,
            onRender: (item) => {
                const tooltipProps = {
                    onRenderContent: () => (react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ol", { style: { margin: '0 5px 0 0', padding: '0 0 0 20px' } }, Object.entries(item.departmentPaths).map(([_departmentFullId, departmentFullName]) => (react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", null, departmentFullName))))),
                };
                return (react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null,
                    react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__[/* TooltipHost */ "a"], { tooltipProps: tooltipProps, delay: _fluentui_react__WEBPACK_IMPORTED_MODULE_3__[/* TooltipDelay */ "a"].zero, 
                        // id={tooltipId}
                        directionalHint: _fluentui_react__WEBPACK_IMPORTED_MODULE_4__[/* DirectionalHint */ "a"].leftCenter },
                        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, Object.entries(item.departmentPaths).map(([departmentFullId, departmentFullName], index) => (react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null,
                            react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_5__[/* Link */ "a"], { key: departmentFullId, onClick: () => navigate(Object(_routes_Paths__WEBPACK_IMPORTED_MODULE_12__[/* generateURL */ "b"])(_routes_Paths__WEBPACK_IMPORTED_MODULE_12__[/* Paths */ "a"].DepartmentTeam, undefined, {
                                    departmentFullName,
                                    departmentFullId,
                                })) }, Object(_utilities_peopleUtils__WEBPACK_IMPORTED_MODULE_13__[/* getDepartmentNameFromFullName */ "b"])(departmentFullName)),
                            index < Object.entries(item.departmentPaths).length - 1 && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", null, "; "))))))));
            },
        },
        {
            key: 'role',
            name: t(_localization__WEBPACK_IMPORTED_MODULE_10__[/* Strings */ "a"].peopleListColumnForJob),
            fieldName: 'role',
            minWidth: 100,
            width: 120,
            maxWidth: 150,
            isResizable: true,
            iconName: 'Desk',
            iconClassName: styles.iconCell,
            onRender: (item) => {
                return (react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", { title: item.role, className: styles.span }, item.role));
            },
        },
    ];
    return (react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_15__[/* CommonDetailsList */ "a"], { className: styles.list, columns: columns, items: items, queryStatus: queryStatus, shimmerLines: 10 }),
        peopleShow !== undefined && peopleShow.id === openCardId && (react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_PeopleCard__WEBPACK_IMPORTED_MODULE_16__[/* PeopleCard */ "a"], { people: peopleShow, onDismiss: () => setOpenCardId(''), target: calloutTarget }))));
};


/***/ }),

/***/ "kBEA":
/*!***************************!*\
  !*** ./src/views/App.tsx ***!
  \***************************/
/*! exports provided: App */
/*! exports used: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "5qKm");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "jtiS");
/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query/devtools */ "TQen");
/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query_devtools__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "Udmz");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "H8PI");
/* harmony import */ var _common_env__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/env */ "8MrD");
/* harmony import */ var _ecs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ecs */ "Dqy3");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks */ "eZYV");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../logger */ "pIRP");
/* harmony import */ var _routes_desktopRoutes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../routes/desktopRoutes */ "9NDm");
/* harmony import */ var _routes_history__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../routes/history */ "TJux");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../service */ "YCKj");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles */ "bFe0");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./common */ "7BQt");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components */ "0UAP");
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */















const App = () => {
    const theme = Object(_hooks__WEBPACK_IMPORTED_MODULE_8__[/* useFluentUIThemeWithRTL */ "d"])();
    // Register a handler to flush out theme change and triggers a re-rendering immediately
    react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
        // Component mounted
        _logger__WEBPACK_IMPORTED_MODULE_9__[/* logger */ "f"].logTraceInfo(_logger__WEBPACK_IMPORTED_MODULE_9__[/* LogCategory */ "a"].AppBoot, 'Rendered app host');
        return () => {
            // Component will unmount
            _logger__WEBPACK_IMPORTED_MODULE_9__[/* logger */ "f"].logTraceInfo(_logger__WEBPACK_IMPORTED_MODULE_9__[/* LogCategory */ "a"].AppBoot, 'Closing the app host');
        };
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* ThemeProvider */ "a"], { theme: theme, applyTo: 'body', className: _styles__WEBPACK_IMPORTED_MODULE_13__[/* themeProviderClassName */ "a"] },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Suspense, { fallback: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_15__[/* LoadingPage */ "c"], null) },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ecs__WEBPACK_IMPORTED_MODULE_7__[/* ECSConfigProvider */ "a"], null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_query__WEBPACK_IMPORTED_MODULE_2__["QueryClientProvider"], { client: _service__WEBPACK_IMPORTED_MODULE_12__[/* queryClient */ "e"] },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_14__[/* LoadingIndicatorWrapper */ "b"], null),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[/* unstable_HistoryRouter */ "a"], { history: _routes_history__WEBPACK_IMPORTED_MODULE_11__[/* history */ "a"] },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[/* Routes */ "d"], null, _routes_desktopRoutes__WEBPACK_IMPORTED_MODULE_10__[/* desktopRoutes */ "a"])),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_query_devtools__WEBPACK_IMPORTED_MODULE_3__["ReactQueryDevtools"], { position: 'bottom-right', styleNonce: _common_env__WEBPACK_IMPORTED_MODULE_6__[/* STYLE_NONCE */ "f"] }))))));
};


/***/ }),

/***/ "lmCI":
/*!**********************************************************!*\
  !*** ./src/views/containers/HomePage/HomePage.styles.ts ***!
  \**********************************************************/
/*! exports provided: useHomePageStyles, useNavStyles */
/*! exports used: useHomePageStyles, useNavStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useHomePageStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useNavStyles; });
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "n4Dn");
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "tPyQ");

const useHomePageStyles = Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])(theme => ({
    root: {
        height: '100%',
        overflowY: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.neutralLighterAlt,
    },
    topSearchSection: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '5px 30px 5px 0',
    },
    peopleSection: Object.assign({ display: 'flex', alignItems: 'stretch', backgroundColor: theme.palette.white, height: '100%' }, (Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(theme.name) && {
        borderTop: `1px solid ${theme.palette.black}`,
        borderBottom: `1px solid ${theme.palette.black}`,
    })),
    peopleList: {
        height: '80%',
        overflowY: 'auto',
        overflowX: 'hidden',
    },
    left: {
        flex: 1,
        width: 0,
        backgroundColor: theme.palette.neutralLighterAlt,
        borderRight: `1px solid ${Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(theme.name) ? theme.palette.black : theme.palette.neutralTertiaryAlt}`,
    },
    main: {
        backgroundColor: theme.palette.white,
        flex: 4,
        width: 0,
        padding: '20px',
        columnGap: '20px',
        // overflowY: 'auto',
    },
    dropdown: {
        width: '400px',
        marginBottom: '20px',
        '.ms-Dropdown-caretDown': {
            fontSize: '16px',
            color: theme.palette.neutralPrimary,
        },
    },
}));
const useNavStyles = (props) => ({
    chevronIcon: [
        {
            fontSize: 20,
            left: '4px',
            top: '10px',
        },
        props.isExpanded && {
            transform: '',
        },
        !props.isExpanded && {
            transform: 'rotate(-90deg)',
        },
    ],
});


/***/ }),

/***/ "mHE5":
/*!********************************************!*\
  !*** ./src/hooks/paths/useTopLevelPath.ts ***!
  \********************************************/
/*! exports provided: useTopLevelPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export useTopLevelPath */
const useTopLevelPath = (path) => {
    const slashIndex = path.indexOf('/', 1);
    return slashIndex > 0 ? path.slice(0, slashIndex) : path;
};


/***/ }),

/***/ "n4oa":
/*!************************************!*\
  !*** ./src/hooks/usePageParams.ts ***!
  \************************************/
/*! exports provided: usePageParams */
/*! exports used: usePageParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return usePageParams; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "Udmz");


/**
 * a strong type wrapper for useSearchParams
 */
function usePageParams() {
    const [params, setParams] = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* useSearchParams */ "b"])();
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => ({
        params: Object.fromEntries(params),
        setParams,
        reset: () => setParams({}, { replace: true }),
    }), [params, setParams]);
}


/***/ }),

/***/ "o34k":
/*!******************************************!*\
  !*** ./src/hooks/actions/useDataFlag.ts ***!
  \******************************************/
/*! exports provided: useDataFlag */
/*! exports used: useDataFlag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useDataFlag; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

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
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
        const storageKey = generateKey(FLAG_STORAGE_KEY, reportListType);
        const hasFlag = !!localStorage.getItem(storageKey);
        return {
            hasFlag,
            setFlag: () => localStorage.setItem(storageKey, 'true'),
            delFlag: () => localStorage.removeItem(storageKey),
        };
    }, [reportListType]);
}


/***/ }),

/***/ "oZXk":
/*!**********************************!*\
  !*** ./src/ecs/loadEcsConfig.ts ***!
  \**********************************/
/*! exports provided: getECSParams, ECS_STORAGE_KEY, defaultECSFlags, loadEcsConfig */
/*! exports used: defaultECSFlags, getECSParams, loadEcsConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getECSParams; });
/* unused harmony export ECS_STORAGE_KEY */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultECSFlags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return loadEcsConfig; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "8dj6");
/* harmony import */ var _common_Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Constants */ "fPKC");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logger */ "pIRP");
/* harmony import */ var _service_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/axios */ "8G6N");
/* harmony import */ var _common_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/env */ "8MrD");
/* harmony import */ var _EcsFlags__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EcsFlags */ "HUOG");






function getECSParams(context) {
    if (!context) {
        return undefined;
    }
    return {
        agents: 'MWTWorkReport',
        ClientEnvironment: _common_env__WEBPACK_IMPORTED_MODULE_4__[/* ENVIRONMENT */ "e"],
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
const defaultECSFlags = Object.assign(Object.assign({}, _EcsFlags__WEBPACK_IMPORTED_MODULE_5__[/* initialState */ "a"]), localeECS);
function loadEcsConfig(params) {
    // add start time for performance logging
    const config = { params, _startRequestTime: performance.now() };
    return axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]
        .get(_common_Constants__WEBPACK_IMPORTED_MODULE_1__[/* ECS_BASIC_URL */ "c"], config)
        .then(response => {
        const ecs = Object(_service_axios__WEBPACK_IMPORTED_MODULE_3__[/* transformResponse */ "b"])(response);
        // cache ecs config
        localStorage.setItem(ECS_STORAGE_KEY, JSON.stringify(ecs.MWTWorkReport));
        return ecs;
    })
        .catch((error) => {
        var _a;
        _logger__WEBPACK_IMPORTED_MODULE_2__[/* logger */ "f"].logTraceError(_logger__WEBPACK_IMPORTED_MODULE_2__[/* LogCategory */ "a"].ECSRequest, `EcsCallError ${(_a = error === null || error === void 0 ? void 0 : error.config) === null || _a === void 0 ? void 0 : _a.url} ${error.message}`);
        // fallback to default value
        return { MWTWorkReport: defaultECSFlags, Headers: {} };
    });
}


/***/ }),

/***/ "pFId":
/*!*****************************************!*\
  !*** ./src/hooks/components/people.tsx ***!
  \*****************************************/
/*! exports provided: retrievePeopleSelectionIcon, retrievePeoplePresenceByGraph, retrievePeopleManagerByGraph */
/*! exports used: retrievePeopleManagerByGraph, retrievePeoplePresenceByGraph, retrievePeopleSelectionIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return retrievePeopleSelectionIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return retrievePeoplePresenceByGraph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return retrievePeopleManagerByGraph; });
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "n4Dn");
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "tPyQ");
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "ZOo+");
/* harmony import */ var _addressbook_components_people__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @addressbook/components-people */ "apXe");
/* harmony import */ var _assets_avatars_beth_davies_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/avatars/beth-davies.png */ "NGG8");
/* harmony import */ var _assets_avatars_daisy_phillips_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/avatars/daisy-phillips.png */ "uel9");
/* harmony import */ var _assets_avatars_eric_nason_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/avatars/eric-nason.png */ "DDLe");
/* harmony import */ var _assets_avatars_joshua_vanburen_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/avatars/joshua-vanburen.png */ "v0/M");
/* harmony import */ var _assets_avatars_mona_kane_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/avatars/mona-kane.png */ "Mt8f");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../service */ "YCKj");
/* harmony import */ var _utilities_peopleUtils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utilities/peopleUtils */ "Reqn");
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
const useManyPeopleSelectionCardCardStyles = Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])(theme => ({
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
        borderTop: `1px solid ${Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(theme.name) ? theme.palette.black : theme.palette.neutralLight}`,
        overflowY: 'auto',
    },
    overview: {
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
    },
    name: {
        fontSize: _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_2__[/* FontSizes */ "a"].size14,
        fontWeight: 700,
        lineHeight: _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_2__[/* FontSizes */ "a"].size20,
    },
    badge: {
        padding: '2px 6px',
        borderRadius: '4px',
        backgroundColor: theme.palette.themeLighter,
        border: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(theme.name) ? `1px solid ${theme.palette.themePrimary}` : 'none',
        color: theme.palette.themePrimary,
    },
    description: {
        fontSize: _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_2__[/* FontSizes */ "a"].size12,
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
        const resource = selection.type === _addressbook_components_people__WEBPACK_IMPORTED_MODULE_3__[/* PeopleSelectionType */ "b"].User
            ? _service__WEBPACK_IMPORTED_MODULE_9__[/* graphServiceClient */ "d"].users(selection.id)
            : selection.type === _addressbook_components_people__WEBPACK_IMPORTED_MODULE_3__[/* PeopleSelectionType */ "b"].Group
                ? _service__WEBPACK_IMPORTED_MODULE_9__[/* graphServiceClient */ "d"].groups(selection.id)
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
        return yield _service__WEBPACK_IMPORTED_MODULE_9__[/* graphServiceClient */ "d"].users(id).getPresence();
    });
}
function retrievePeopleManagerByGraph(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield _service__WEBPACK_IMPORTED_MODULE_9__[/* graphServiceClient */ "d"].users(id).getManager();
        return Object(_utilities_peopleUtils__WEBPACK_IMPORTED_MODULE_10__[/* mapUserToPeople */ "c"])(user);
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
    ['4f197574-c487-4ab8-ac2e-c3584026d646', _assets_avatars_beth_davies_png__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]],
    ['da3647a2-cdeb-4b72-a31d-f4a184d8e727', _assets_avatars_joshua_vanburen_png__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"]],
    ['8af34f36-a407-4b16-9b7e-14dcea93fb09', undefined],
    ['1a9ecbd6-05c1-42f1-ac1e-1534500be7d1', _assets_avatars_daisy_phillips_png__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]],
    ['ea126a6e-8e86-4401-8d5a-c168a8ee1e36', _assets_avatars_eric_nason_png__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]],
    ['da3c2255-d519-4ee2-a586-932f8b6d88af', _assets_avatars_mona_kane_png__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"]],
]);


/***/ }),

/***/ "ptj7":
/*!****************************!*\
  !*** ./src/views/index.ts ***!
  \****************************/
/*! exports provided: CommonCardList, CommonDetailsList, onRenderReportDefinitionColumn, LoadingIndicatorWrapper, EmptyStatus, SpecialErrorType, ErrorStatus, LoadingPage, PeopleCard, DesktopDefaultPage, MobileDefaultPage, ErrorBoundary, HomePage, SearchResults */
/*! exports used: DesktopDefaultPage, HomePage, SearchResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "7BQt");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "0UAP");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers */ "F6sv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _containers__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _containers__WEBPACK_IMPORTED_MODULE_2__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _containers__WEBPACK_IMPORTED_MODULE_2__["c"]; });






/***/ }),

/***/ "sb7W":
/*!************************************************!*\
  !*** ./src/views/containers/HomePage/index.ts ***!
  \************************************************/
/*! exports provided: HomePage */
/*! exports used: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _HomePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomePage */ "zvKD");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _HomePage__WEBPACK_IMPORTED_MODULE_0__["a"]; });




/***/ }),

/***/ "tajQ":
/*!***************************************************!*\
  !*** ./src/views/components/LoadingPage/index.ts ***!
  \***************************************************/
/*! exports provided: LoadingPage */
/*! exports used: LoadingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _LoadingPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoadingPage */ "7Uj4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _LoadingPage__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */



/***/ }),

/***/ "vz5b":
/*!**********************************!*\
  !*** ./src/hooks/paths/index.ts ***!
  \**********************************/
/*! exports provided: usePageTitle, useTopLevelPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _usePageTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usePageTitle */ "8W9G");
/* unused harmony reexport * */
/* harmony import */ var _useTopLevelPath__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useTopLevelPath */ "mHE5");
/* unused harmony reexport * */




/***/ }),

/***/ "wGbJ":
/*!**************************************************************!*\
  !*** ./src/views/components/PeopleList/PeopleList.styles.ts ***!
  \**************************************************************/
/*! exports provided: usePeopleListStyles */
/*! exports used: usePeopleListStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return usePeopleListStyles; });
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "n4Dn");
/* harmony import */ var _addressbook_components_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @addressbook/components-shared */ "+INc");


const usePeopleListStyles = Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])(theme => ({
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
        '*:hover > &, *:focus-within > &': {
            display: 'flex',
            position: 'relative',
            alignSelf: 'flex-end',
            left: '20px',
        },
    },
    nameSpan: [Object(_addressbook_components_shared__WEBPACK_IMPORTED_MODULE_1__[/* ellipsisStyles */ "e"])(1), { maxWidth: '160px' }],
    span: Object(_addressbook_components_shared__WEBPACK_IMPORTED_MODULE_1__[/* ellipsisStyles */ "e"])(1),
    list: {
        'ms-DetailsRow': {
            cursor: 'default',
        },
        '.ms-Nav': {
            transition: 'none !important' /* 禁用不必要的过渡效果 */,
        },
        // 'ms-DetailsList-contentWrapper': {
        //     overflowY: 'auto',
        // },
        'ms-DetailsHeader-cellTitle': { display: 'flex', alignItems: 'center', gap: '4px', flexDirection: 'row' },
    },
}));


/***/ }),

/***/ "xDGb":
/*!****************************************************************!*\
  !*** ./src/views/components/LoadingPage/LoadingPage.styles.ts ***!
  \****************************************************************/
/*! exports provided: useLoadingStyles */
/*! exports used: useLoadingStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useLoadingStyles; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "ogYq");
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "n4Dn");


const useLoadingStyles = Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* makeStyles */ "a"])(theme => ({
    root: {
        height: '100%',
        padding: '0 2em',
    },
    message: {
        fontSize: '1.2em',
        fontWeight: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "e"].bold,
        color: theme.palette.black,
        whiteSpace: 'pre-line',
        textAlign: 'center',
    },
}));


/***/ }),

/***/ "ygCl":
/*!****************************************************!*\
  !*** ./src/views/containers/SearchResult/index.ts ***!
  \****************************************************/
/*! exports provided: SearchResults */
/*! exports used: SearchResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _SearchResult__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchResult */ "Q26K");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _SearchResult__WEBPACK_IMPORTED_MODULE_0__["a"]; });




/***/ }),

/***/ "ygEs":
/*!********************************************!*\
  !*** ./src/hooks/actions/useFlagStatus.ts ***!
  \********************************************/
/*! exports provided: useFlagStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export useFlagStatus */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_reactive_var__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-reactive-var */ "2spY");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "fQLH");
/* harmony import */ var _common_flag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/flag */ "6gDi");
/* harmony import */ var _reactiveVariables_CommonVars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../reactiveVariables/CommonVars */ "VTGp");





const FLAG_STORAGE_KEY = 'flag';
const states = {};
const subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__[/* Subject */ "a"]();
function generateKey(key, suffix) {
    return `$_${key}${suffix ? `.${suffix}` : ''}`;
}
function getFlagTrue(flag) {
    const storageKey = generateKey(FLAG_STORAGE_KEY, flag);
    if (!(flag in states))
        states[flag] = localStorage.getItem(storageKey) ? true : null;
    return states[flag] === null;
}
function getFlagState(flag) {
    var _a;
    getFlagTrue(flag);
    if (_common_flag__WEBPACK_IMPORTED_MODULE_3__[/* flagDependency */ "a"][flag]) {
        const isComplete = !((_a = _common_flag__WEBPACK_IMPORTED_MODULE_3__[/* flagDependency */ "a"][flag]) === null || _a === void 0 ? void 0 : _a.some(flag => getFlagTrue(flag)));
        return isComplete ? !states[flag] : false;
    }
    return !states[flag];
}
function setFlagState(flag) {
    states[flag] = true;
    const storageKey = generateKey(FLAG_STORAGE_KEY, flag);
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
    const [value, setValue] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(() => getFlagState(flag));
    const modalShowing = Object(react_reactive_var__WEBPACK_IMPORTED_MODULE_1__[/* useReactiveVar */ "b"])(_reactiveVariables_CommonVars__WEBPACK_IMPORTED_MODULE_4__[/* modalShowingVar */ "a"]);
    autoCleanup = !modalShowing && autoCleanup;
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        const subscriber = subject.subscribe(updateFlag => {
            var _a;
            if ((_a = _common_flag__WEBPACK_IMPORTED_MODULE_3__[/* flagDependency */ "a"][flag]) === null || _a === void 0 ? void 0 : _a.includes(updateFlag)) {
                setValue(getFlagState(flag));
            }
        });
        return () => subscriber.unsubscribe();
    }, [flag]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        if (autoCleanup) {
            const storageKey = generateKey(FLAG_STORAGE_KEY, flag);
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
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => [
        !modalShowing && value,
        () => {
            setValue(false);
            setFlagState(flag);
        },
    ], [modalShowing, value, flag]);
}


/***/ }),

/***/ "zvKD":
/*!****************************************************!*\
  !*** ./src/views/containers/HomePage/HomePage.tsx ***!
  \****************************************************/
/*! exports provided: HomePage */
/*! exports used: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "2Ah+");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react */ "AH+P");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "Tr4L");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "H8PI");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hooks */ "eZYV");
/* harmony import */ var _localization__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../localization */ "HVbO");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../logger */ "pIRP");
/* harmony import */ var _routes_Paths__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../routes/Paths */ "9hZ6");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../service */ "YCKj");
/* harmony import */ var _utilities_peopleUtils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../utilities/peopleUtils */ "Reqn");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components */ "0UAP");
/* harmony import */ var _components_AddressBookAppHeader_AddressBookAppHeader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/AddressBookAppHeader/AddressBookAppHeader */ "ca4Q");
/* harmony import */ var _components_PeopleList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/PeopleList */ "S0dn");
/* harmony import */ var _HomePage_styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./HomePage.styles */ "lmCI");
/* harmony import */ var _HomePageQuery__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./HomePageQuery */ "WWNV");
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
    const styles = Object(_HomePage_styles__WEBPACK_IMPORTED_MODULE_14__[/* useHomePageStyles */ "a"])();
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__[/* useTranslation */ "a"])();
    const { params } = Object(_hooks__WEBPACK_IMPORTED_MODULE_5__[/* usePageParams */ "e"])();
    // const { departmentFullId, departmentName } = params; v1
    const { departmentFullName, departmentFullId } = params; // v2
    const navigate = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[/* useNavigate */ "i"])();
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
        { key: _HomePageQuery__WEBPACK_IMPORTED_MODULE_15__[/* MemberType */ "a"].AllMember, text: t(_localization__WEBPACK_IMPORTED_MODULE_6__[/* Strings */ "a"].dropDownForDepartDefault) },
        { key: _HomePageQuery__WEBPACK_IMPORTED_MODULE_15__[/* MemberType */ "a"].DirectMember, text: t(_localization__WEBPACK_IMPORTED_MODULE_6__[/* Strings */ "a"].dropDownForDepartOption1) },
    ];
    // const [filteredItems, setFilteredItems] = useState<IPeople[]>();
    // useEffect(() => {
    //     setFilteredItems(departmentMembers);
    // }, [departmentMembers]);
    const [selectedMemberType, setSelectedMemberType] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(_HomePageQuery__WEBPACK_IMPORTED_MODULE_15__[/* MemberType */ "a"].AllMember);
    const onOptionChange = (event, option) => {
        if (option !== undefined) {
            setSelectedMemberType(option.key);
        }
    };
    const { data: navData, isLoading: loadingNav, error: navDataError, } = Object(_hooks__WEBPACK_IMPORTED_MODULE_5__[/* useReactQuery */ "g"])(_service__WEBPACK_IMPORTED_MODULE_9__[/* SERVICE_CLIENT */ "b"].fetchDepartmentNav, {}, {
        staleTime: 1 * 30 * 60 * 1000,
        cacheTime: 1 * 30 * 60 * 1000, // 30 minutes
    });
    const currentDepartmentId = departmentFullId ? Object(_utilities_peopleUtils__WEBPACK_IMPORTED_MODULE_10__[/* getDepartmentIdFromFullId */ "a"])(departmentFullId) : navData === null || navData === void 0 ? void 0 : navData.id;
    const _a = Object(_HomePageQuery__WEBPACK_IMPORTED_MODULE_15__[/* useMemberListByDepartment */ "c"])(selectedMemberType, currentDepartmentId === (navData === null || navData === void 0 ? void 0 : navData.id), currentDepartmentId, 20), { data: members, error: membersError, isLoading: membersLoading } = _a, membersQueryStatus = __rest(_a, ["data", "error", "isLoading"]);
    const navLinkGroups = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(() => {
        return navData ? [{ links: [Object(_HomePageQuery__WEBPACK_IMPORTED_MODULE_15__[/* mapDepartmentToNavLink */ "b"])(navData, '', '', departmentFullName)] }] : [];
    }, [navData, departmentFullName]);
    Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
        if ((!departmentFullId || departmentFullId === '') && (navData === null || navData === void 0 ? void 0 : navData.id) && (navData === null || navData === void 0 ? void 0 : navData.name)) {
            navigate(Object(_routes_Paths__WEBPACK_IMPORTED_MODULE_8__[/* generateURL */ "b"])(_routes_Paths__WEBPACK_IMPORTED_MODULE_8__[/* Paths */ "a"].DepartmentTeam, undefined, {
                departmentFullName: navData.name,
                departmentFullId: navData.id,
            }));
        }
    }, [departmentFullId, members, navData === null || navData === void 0 ? void 0 : navData.id, navData === null || navData === void 0 ? void 0 : navData.name, navigate]);
    return (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { className: styles.root },
        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_AddressBookAppHeader_AddressBookAppHeader__WEBPACK_IMPORTED_MODULE_12__[/* AddressBookAppHeader */ "a"], { moduleName: _logger__WEBPACK_IMPORTED_MODULE_7__[/* ModuleName */ "b"].HomePage }),
        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { className: styles.peopleSection },
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { className: styles.left },
                loadingNav && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_11__[/* LoadingPage */ "c"], null),
                navData && (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* Nav */ "a"], { ariaLabel: '', styles: _HomePage_styles__WEBPACK_IMPORTED_MODULE_14__[/* useNavStyles */ "b"], groups: navLinkGroups, selectedKey: departmentFullId, 
                    // onLinkExpandClick={}
                    onLinkClick: (ev, item) => {
                        ev === null || ev === void 0 ? void 0 : ev.preventDefault(); // 阻止默认的 URL 跳转行为
                        if (item === null || item === void 0 ? void 0 : item.url) {
                            navigate(item.url); // 使用 React Router 的路由跳转
                        }
                    } })),
                navDataError && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null,
                    " ", navDataError === null || navDataError === void 0 ? void 0 :
                    navDataError.message,
                    " ")),
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { className: styles.main },
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", null, departmentFullName !== null && departmentFullName !== void 0 ? departmentFullName : navData === null || navData === void 0 ? void 0 : navData.name),
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null,
                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* Dropdown */ "a"], { className: styles.dropdown, placeholder: 'Select an option', options: options, selectedKey: selectedMemberType, onChange: onOptionChange })),
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { className: styles.peopleList },
                    members && members.length > 0 && (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_PeopleList__WEBPACK_IMPORTED_MODULE_13__[/* PeopleList */ "a"], { items: members.map(data => Object(_utilities_peopleUtils__WEBPACK_IMPORTED_MODULE_10__[/* mapUserViewToPeople */ "d"])(data)), queryStatus: membersQueryStatus, moduleName: _logger__WEBPACK_IMPORTED_MODULE_7__[/* ModuleName */ "b"].HomePage })),
                    (members === null || members === void 0 ? void 0 : members.length) === 0 && (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_11__[/* EmptyStatus */ "a"], { title: t(_localization__WEBPACK_IMPORTED_MODULE_6__[/* Strings */ "a"].errorTitleForNotContract), message: t(_localization__WEBPACK_IMPORTED_MODULE_6__[/* Strings */ "a"].errorMessageForNotContract), img: 'NoMessage' })),
                    membersLoading && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_11__[/* LoadingPage */ "c"], null),
                    membersError && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_11__[/* ErrorStatus */ "b"], { error: membersError }))))));
};


/***/ })

},[["JwtI","runtime~main","main~mobile.microsoft","main~mobile.fui","assets~main~mobile","main.fui","assets~main","package~main~mobile","package~main","npm._fluentui~react-icons","npm.react-dom","npm.framer-motion","npm._fluentui~utilities","npm.react-query","npm.lodash-es","npm._internationalized~date","npm.axios","npm.i18next","featureRelatedFiles~main~mobile","vendors~main~mobile","vendors~main","main~mobile"]]]);
//# sourceMappingURL=main.js.map