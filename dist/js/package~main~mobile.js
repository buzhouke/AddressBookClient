(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["package~main~mobile"],{

/***/ "+INc":
/*!************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/index.ts ***!
  \************************************************************************************************************/
/*! exports provided: AppHeader, CollapsingArea, CommonCard, CommonCardShimmer, CommonIconSize, CommonIcon, CommonModal, useModalStyles, useContentStyles, useShareSubmissionCardConsentStyles, ModalContent, CommonPanel, CommonSlideDots, ConfirmationDialog, ContentCopyRequestModal, ContentCopyResponseModal, EmptyState, MobileSheet, PillPivot, SpinnerSize, Spinner, ellipsisStyles, TaskModule, useTaskModuleStyles, TaskModuleV2, useTaskModuleV2Styles, useTaskModuleContentCustomizedStyles, useTaskModuleCategorizedTemplateStoreStyles */
/*! exports used: AppHeader, CommonIcon, EmptyState, Spinner, ellipsisStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _AppHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppHeader */ "F880");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _AppHeader__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _CollapsingArea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CollapsingArea */ "Z70t");
/* harmony import */ var _CommonCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CommonCard */ "O8+z");
/* harmony import */ var _CommonIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CommonIcon */ "Lwxb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _CommonIcon__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony import */ var _CommonModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CommonModal */ "8odi");
/* harmony import */ var _CommonPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CommonPanel */ "gUb0");
/* harmony import */ var _CommonSlideDots__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CommonSlideDots */ "wbAm");
/* harmony import */ var _ConfirmationDialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ConfirmationDialog */ "PxWi");
/* harmony import */ var _ContentCopyRequestModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ContentCopyRequestModal */ "C7FI");
/* harmony import */ var _ContentCopyResponseModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ContentCopyResponseModal */ "Ws0a");
/* harmony import */ var _EmptyState__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./EmptyState */ "dgNf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _EmptyState__WEBPACK_IMPORTED_MODULE_10__["a"]; });

/* harmony import */ var _MobileSheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MobileSheet */ "dnQF");
/* harmony import */ var _PillPivot__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./PillPivot */ "TQ8g");
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Spinner */ "PVww");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _Spinner__WEBPACK_IMPORTED_MODULE_13__["a"]; });

/* harmony import */ var _styles_ellipsisStyles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./styles/ellipsisStyles */ "btUH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _styles_ellipsisStyles__WEBPACK_IMPORTED_MODULE_14__["a"]; });

/* harmony import */ var _TaskModule__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./TaskModule */ "Oi44");
/* harmony import */ var _TaskModuleV2__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./TaskModuleV2 */ "IG8A");



















/***/ }),

/***/ "/R1q":
/*!***********************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/utilities-core/src/signals.ts ***!
  \***********************************************************************************************************/
/*! exports provided: signalAsPromise, allSignalsAsSignal, raceSignalsAsSignal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export signalAsPromise */
/* unused harmony export allSignalsAsSignal */
/* unused harmony export raceSignalsAsSignal */
/**
 * A function that returns a promise that will resolve when the given signal aborts.
 *
 * @param signal The given signal.
 * @returns The promise that will resolve when the given signal aborts.
 */
function signalAsPromise(signal) {
    return new Promise(resolve => signal.addEventListener('abort', () => resolve()));
}
/**
 * A function that returns a signal that will abort when all of the given signals abort.
 *
 * @param signals The given signals.
 * @returns The abort signal that will abort when all of the given signals abort.
 */
function allSignalsAsSignal(signals) {
    const controller = new AbortController();
    Promise.all(signals.map(signalAsPromise)).then(() => controller.abort());
    return controller.signal;
}
/**
 * A function that returns a signal that will abort when any of the given signals abort.
 *
 * @param signals The given signals.
 * @returns The abort signal that will abort when any of the given signals abort.
 */
function raceSignalsAsSignal(signals) {
    const controller = new AbortController();
    Promise.race(signals.map(signalAsPromise)).then(() => controller.abort());
    return controller.signal;
}


/***/ }),

/***/ "/fnU":
/*!***************************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/CommonLoadingIndicator/CommonLoadingIndicator.component.tsx ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: CommonLoadingIndicator */
/*! exports used: CommonLoadingIndicator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonLoadingIndicator; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "ghfI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CommonLoadingIndicator_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CommonLoadingIndicator.styles */ "pdPz");
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */



const CommonLoadingIndicator = ({ isFetching }) => {
    const styles = Object(_CommonLoadingIndicator_styles__WEBPACK_IMPORTED_MODULE_2__[/* useLoadingIndicatorStyles */ "a"])();
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* ProgressIndicator */ "a"], { progressHidden: !isFetching, styles: styles });
};


/***/ }),

/***/ "/m+X":
/*!*************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/utilities-hooks/src/debounce.ts ***!
  \*************************************************************************************************************/
/*! exports provided: useDebounced */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export useDebounced */
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "1aPi");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/**
 * A hook to debounce a function, which will be flushed on unmount.
 *
 * @param func The function to debounce
 * @param deps The deps which will make the return func change
 * @param wait The number of milliseconds to delay.
 * @param options The options object.
 * @returns The debounced function.
 */
function useDebounced(func, deps, wait, options) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const callback = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(Object(lodash_es__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(func, wait, options), deps);
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => callback.flush, [callback]);
    return callback;
}


/***/ }),

/***/ "/mfX":
/*!*********************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/utilities-core/src/miscs.ts ***!
  \*********************************************************************************************************/
/*! exports provided: isDefined, extractContinuousRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isDefined */
/* unused harmony export extractContinuousRange */
/**
 * Check if the value is defined or not with type narrowing.
 *
 * @param value The value to check.
 * @returns `true` if the value is defined, `false` otherwise.
 */
function isDefined(value) {
    return value !== undefined;
}
/**
 * Extracts the continuous range from the numbers, represented as a tuple of the start and end of the range.
 *
 * @param numbers The numbers to extract the continuous range.
 * @returns The continuous range, if the numbers are continuous, otherwise undefined.
 * @example extractContinuousRange([1]) // [1, 1]
 * @example extractContinuousRange([1, 2, 3, 4, 5]) // [1, 5]
 * @example extractContinuousRange([1, 2, 3, 5]) // undefined
 */
function extractContinuousRange(numbers) {
    if (numbers.length === 0)
        return;
    const uniqueSorted = [...new Set(numbers)].sort();
    const isContinuous = uniqueSorted[uniqueSorted.length - 1] - uniqueSorted[0] === uniqueSorted.length - 1;
    if (!isContinuous)
        return;
    return [uniqueSorted[0], uniqueSorted[uniqueSorted.length - 1]];
}


/***/ }),

/***/ "07a+":
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/TaskModule/TaskModule.styles.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: useTaskModuleStyles */
/*! exports used: useTaskModuleStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useTaskModuleStyles; });
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "tPyQ");
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "McEG");
/* harmony import */ var _styles_makeStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/makeStyles */ "oRLY");


const useTaskModuleStyles = /* #__PURE__*/ Object(_styles_makeStyles__WEBPACK_IMPORTED_MODULE_2__[/* makeStyles */ "a"])(theme => ({
    root: {
        width: '100%',
        height: '100%',
        maxHeight: '100vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        boxSizing: 'border-box',
        // Since the styles for task module container on Teams Desktop does not include a bottom padding, we need to
        // add some spacing, though the styles without this padding are approperiate for Teams Web.
        paddingBottom: '0.75rem',
        backgroundColor: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* isDarkTheme */ "g"])(theme.name) ? _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* DarkV2Colors */ "e"].appWhite : theme.palette.white,
    },
}));


/***/ }),

/***/ "0Q/W":
/*!***************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/CommonSlideDots/CommonSlideDots.tsx ***!
  \***************************************************************************************************************************************/
/*! exports provided: CommonSlideDots */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CommonSlideDots */
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "ogYq");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CommonSlideDots_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CommonSlideDots.styles */ "lzXV");



const CommonSlideDots = ({ amount, activeIndex, isClickable = false, slideDotsStyles, onClick, }) => {
    const styles = Object(_CommonSlideDots_styles__WEBPACK_IMPORTED_MODULE_2__[/* userSlideDotsStyles */ "a"])();
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: styles.stepper }, Array(amount)
        .fill(0)
        .map((_item, index) => (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", { className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* mergeStyles */ "F"])(styles.selectOption, slideDotsStyles === null || slideDotsStyles === void 0 ? void 0 : slideDotsStyles.selectOption, isClickable && 'is-clickable', index === activeIndex ? 'is-active' : ''), key: index, onClick: isClickable ? () => onClick === null || onClick === void 0 ? void 0 : onClick(index) : undefined, "data-testid": 'option' })))));
};


/***/ }),

/***/ "0acT":
/*!*****************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-metaos-host/src/index.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: app, HostClientType, TeamsErrorCode, TeamsError, patchTeamsFallbackData, TeamsHostProvider, useTeamsContext, useTeamsTheme, useTeamsNavBarMenu, defaultSize, useTeamsTaskModuleSize, coerceTeamsTheme, getTeamsContext, getAuthToken, registerOnThemeChangeHandler, registerBeforeUnloadHandler, notifyAppInitializationSuccess, notifyAppInitializationFailure, executeDeepLink, openChat, getAuthenticationUser, setNavBarMenu, resizeTaskModule, submitTask, startTask */
/*! exports used: HostClientType, TeamsError, TeamsHostProvider, app, coerceTeamsTheme, executeDeepLink, getAuthToken, getTeamsContext, notifyAppInitializationFailure, notifyAppInitializationSuccess, patchTeamsFallbackData, registerBeforeUnloadHandler, resizeTaskModule, submitTask, useTeamsContext, useTeamsTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _microsoft_teams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/teams-js */ "U9X9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _microsoft_teams_js__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _microsoft_teams_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/teams-js */ "jF9b");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _microsoft_teams_js__WEBPACK_IMPORTED_MODULE_1__["c"]; });

/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error */ "SgCh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _error__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _fallback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fallback */ "7kNt");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "k", function() { return _fallback__WEBPACK_IMPORTED_MODULE_3__["b"]; });

/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./react */ "0ay7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _react__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "o", function() { return _react__WEBPACK_IMPORTED_MODULE_4__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "p", function() { return _react__WEBPACK_IMPORTED_MODULE_4__["c"]; });

/* harmony import */ var _themes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./themes */ "8C+a");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _themes__WEBPACK_IMPORTED_MODULE_5__["a"]; });

/* harmony import */ var _wrappers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wrappers */ "I06U");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _wrappers__WEBPACK_IMPORTED_MODULE_6__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "g", function() { return _wrappers__WEBPACK_IMPORTED_MODULE_6__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h", function() { return _wrappers__WEBPACK_IMPORTED_MODULE_6__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i", function() { return _wrappers__WEBPACK_IMPORTED_MODULE_6__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "j", function() { return _wrappers__WEBPACK_IMPORTED_MODULE_6__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "l", function() { return _wrappers__WEBPACK_IMPORTED_MODULE_6__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "m", function() { return _wrappers__WEBPACK_IMPORTED_MODULE_6__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "n", function() { return _wrappers__WEBPACK_IMPORTED_MODULE_6__["j"]; });









/***/ }),

/***/ "0ay7":
/*!***********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-metaos-host/src/react/index.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: TeamsHostProvider, useTeamsContext, useTeamsTheme, useTeamsNavBarMenu, defaultSize, useTeamsTaskModuleSize */
/*! exports used: TeamsHostProvider, useTeamsContext, useTeamsTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _useTeamsContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useTeamsContext */ "1seW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _useTeamsContext__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _useTeamsContext__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _useTeamsContext__WEBPACK_IMPORTED_MODULE_0__["c"]; });

/* harmony import */ var _useTeamsNavBarMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useTeamsNavBarMenu */ "pVH0");
/* harmony import */ var _useTeamsTaskModuleSize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useTeamsTaskModuleSize */ "6Fz1");





/***/ }),

/***/ "14nm":
/*!*****************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/CommonPanel/CommonPanel.component.tsx ***!
  \*****************************************************************************************************************************************/
/*! exports provided: CommonPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CommonPanel */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react */ "N1b6");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react */ "mxb3");
/* harmony import */ var _CommonPanel_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CommonPanel.styles */ "9G59");
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */



const CommonPanel = ({ isOpen, onRenderNavigationContent, onDismiss, contentRef, children, linkCopiedInfoItem, }) => {
    const panelStyles = Object(_CommonPanel_styles__WEBPACK_IMPORTED_MODULE_3__[/* usePanelStyles */ "a"])();
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* Panel */ "a"], { styles: panelStyles, onRenderNavigationContent: onRenderNavigationContent, isOpen: isOpen, onDismiss: onDismiss, onOuterClick: (ev) => {
            ev === null || ev === void 0 ? void 0 : ev.preventDefault();
        }, type: _fluentui_react__WEBPACK_IMPORTED_MODULE_2__[/* PanelType */ "a"].custom, allowTouchBodyScroll: true, hasCloseButton: !onRenderNavigationContent },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { ref: contentRef, className: panelStyles.contentInner }, children),
        linkCopiedInfoItem));
};


/***/ }),

/***/ "1hmm":
/*!*********************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/utilities-core/src/index.ts ***!
  \*********************************************************************************************************/
/*! exports provided: copyToClipboard, copyImageToClipboard, copyLinkToClipboard, dataTransferIncludesFiles, extractFilesFromDataTransfer, encodeDataUrl, decodeDataUrl, normalizeDate, toZonedISOString, parseDate, parseLocalDateStrictly, parseLocalDate, formatLocalDate, parseLocalDateRange, eraseTime, compareDatesWithoutTime, selectFile, digestBlob, encodeHexString, createFileByBlob, getReadableSizeString, normalizeFileName, splitFileName, joinFileName, uuid, measureImage, parseJson, parseJsonAsStringSet, normalizeStringSet, getMimeByDataUrl, getExtensionByMime, isImageMime, isDefined, extractContinuousRange, parseFloatStrictly, parseIntStrictly, silently, delay, Semaphore, signalAsPromise, allSignalsAsSignal, raceSignalsAsSignal, isAbsoluteUrl, normalizeUrl, openUrl */
/*! exports used: Semaphore, delay, isAbsoluteUrl, silently, uuid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _clipboards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clipboards */ "RwJE");
/* harmony import */ var _data_transfers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-transfers */ "XhlK");
/* harmony import */ var _data_urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-urls */ "iMwy");
/* harmony import */ var _dates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dates */ "42K9");
/* harmony import */ var _files__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./files */ "h3zH");
/* harmony import */ var _ids__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ids */ "zmRz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _ids__WEBPACK_IMPORTED_MODULE_5__["a"]; });

/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images */ "rLoY");
/* harmony import */ var _jsons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./jsons */ "8/+v");
/* harmony import */ var _mimes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mimes */ "sSa5");
/* harmony import */ var _miscs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./miscs */ "/mfX");
/* harmony import */ var _numbers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./numbers */ "y8+Q");
/* harmony import */ var _promises__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./promises */ "Zb4v");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _promises__WEBPACK_IMPORTED_MODULE_11__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _promises__WEBPACK_IMPORTED_MODULE_11__["b"]; });

/* harmony import */ var _semaphores__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./semaphores */ "ZqO1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _semaphores__WEBPACK_IMPORTED_MODULE_12__["a"]; });

/* harmony import */ var _signals__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./signals */ "/R1q");
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./urls */ "Y/b3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _urls__WEBPACK_IMPORTED_MODULE_14__["a"]; });


















/***/ }),

/***/ "1seW":
/*!**********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-metaos-host/src/react/useTeamsContext.tsx ***!
  \**********************************************************************************************************************************/
/*! exports provided: TeamsHostProvider, useTeamsContext, useTeamsTheme */
/*! exports used: TeamsHostProvider, useTeamsContext, useTeamsTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamsHostProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useTeamsContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return useTeamsTheme; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../themes */ "8C+a");
/* harmony import */ var _wrappers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../wrappers */ "I06U");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const defaultTeamsHostValue = { loading: true };
const TeamsReactContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(defaultTeamsHostValue);
/**
 * The component that provides the Teams host access to its children.
 *
 * @property value The controlled value to provide to its children.
 * @property defaultValue The default value to provide to its children.
 */
const TeamsHostProvider = ({ value, defaultValue = defaultTeamsHostValue, children, }) => {
    const [providingValue, setProvidingValue] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(value !== null && value !== void 0 ? value : defaultValue);
    const update = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => __awaiter(void 0, void 0, void 0, function* () { return setProvidingValue({ loading: false, context: yield Object(_wrappers__WEBPACK_IMPORTED_MODULE_2__[/* getTeamsContext */ "c"])() }); }), []);
    const watch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield update();
            yield Object(_wrappers__WEBPACK_IMPORTED_MODULE_2__[/* registerOnThemeChangeHandler */ "g"])(() => {
                update();
            });
        }
        catch (_a) {
            // No-op
        }
    }), [update]);
    // Only update the context if the controlled value is not provided.
    const controlled = Boolean(value);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        if (controlled)
            return;
        watch();
    }, [controlled, watch]);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TeamsReactContext.Provider, { value: providingValue }, children);
};
/**
 * A hook to get the Teams context.
 *
 * @returns The Teams context, or `undefined` if the host is not ready yet.
 */
function useTeamsContext() {
    const value = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(TeamsReactContext);
    if (value.loading)
        return;
    return value.context;
}
/**
 * A hook to get the Teams theme.
 *
 * @returns The Teams theme, or `undefined` if the host is not ready yet.
 */
function useTeamsTheme() {
    const value = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(TeamsReactContext);
    if (value.loading)
        return;
    return Object(_themes__WEBPACK_IMPORTED_MODULE_1__[/* coerceTeamsTheme */ "a"])(value.context.app.theme);
}


/***/ }),

/***/ "42K9":
/*!*********************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/utilities-core/src/dates.ts ***!
  \*********************************************************************************************************/
/*! exports provided: normalizeDate, toZonedISOString, parseDate, parseLocalDateStrictly, parseLocalDate, formatLocalDate, parseLocalDateRange, eraseTime, compareDatesWithoutTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export normalizeDate */
/* unused harmony export toZonedISOString */
/* unused harmony export parseDate */
/* unused harmony export parseLocalDateStrictly */
/* unused harmony export parseLocalDate */
/* unused harmony export formatLocalDate */
/* unused harmony export parseLocalDateRange */
/* unused harmony export eraseTime */
/* unused harmony export compareDatesWithoutTime */
/**
 * The value of DateTimeOffset.MaxValue in DotNet, which is 12/31/9999 11:59:59 PM +00:00.
 *
 * @remarks node -e "console.log(new Date('12/31/9999 11:59:59 PM +00:00').getTime())"
 * @see https://docs.microsoft.com/dotnet/api/system.datetimeoffset.maxvalue
 */
const DATE_TIME_OFFSET_MAX_VALUE = new Date(253402300799000);
/**
 * Normalizes a date. A date is considered normalized if it is less than DateTimeOffset.MaxValue.
 *
 * @param date The date to normalize.
 * @returns The normalized date.
 */
function normalizeDate(date) {
    return date < DATE_TIME_OFFSET_MAX_VALUE ? date : undefined;
}
/**
 * Converts a date to a zoned ISO string, e.g. 2021-01-01T00:00:00.000+08:00.
 *
 * @param date The date to convert.
 * @returns The zoned ISO date string.
 */
function toZonedISOString(date) {
    const offset = date.getTimezoneOffset();
    const offsetHours = Math.floor(Math.abs(offset) / 60);
    const offsetMinutes = Math.abs(offset) % 60;
    const offsetSign = offset <= 0 ? '+' : '-';
    const offsetHoursString = offsetHours.toString().padStart(2, '0');
    const offsetMinutesString = offsetMinutes.toString().padStart(2, '0');
    const offsetString = `${offsetSign}${offsetHoursString}:${offsetMinutesString}`;
    const year = date.getFullYear().toString().padStart(4, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const milliseconds = date.getMilliseconds().toString().padStart(3, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}${offsetString}`;
}
/**
 * Parses a date string by the Date constructor.
 *
 * @param dateString The date string to parse.
 * @returns The parsed date, or undefined if the date string is invalid.
 */
function parseDate(dateString) {
    const date = new Date(dateString);
    return isFinite(date.getTime()) ? date : undefined;
}
/**
 * Parses a local date string strictly, which is in the format of "yyyy-MM-dd".
 *
 * @param dateString The date string to parse.
 * @returns The parsed date, or undefined if the date string is invalid.
 */
function parseLocalDateStrictly(dateString) {
    const matches = dateString.match(/^(\d{1,4})-(\d{1,2})-(\d{1,2})$/);
    if (!matches)
        return;
    const [year, month, day] = matches.slice(1).map(n => parseInt(n, 10));
    return new Date(year, month - 1, day);
}
/**
 * Parses a local date string.
 *
 * @param dateString The date string to parse.
 * @returns The parsed date, or undefined if the date string is invalid.
 */
function parseLocalDate(dateString) {
    var _a;
    return (_a = parseLocalDateStrictly(dateString)) !== null && _a !== void 0 ? _a : parseDate(dateString);
}
/**
 * Formats date as local date string. (yyyy-MM-dd)
 *
 * @param date The date to format.
 * @returns The formatted date string.
 */
function formatLocalDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return [year, month, day].join('-');
}
/**
 * Parses a local date range string into a tuple of start and end dates. Either date is fully inclusive. The date range
 * string must be in the format of "yyyy-MM-dd/yyyy-MM-dd".
 *
 * @param rangeString The date range string to parse.
 * @returns A tuple of start and end dates, or undefined if the date range string is invalid.
 */
function parseLocalDateRange(rangeString) {
    const matches = rangeString.match(/^(\d{1,4})-(\d{1,2})-(\d{1,2})\/(\d{1,4})-(\d{1,2})-(\d{1,2})$/);
    if (!matches)
        return;
    const [startYear, startMonth, startDay, endYear, endMonth, endDay] = matches.slice(1).map(n => parseInt(n, 10));
    const start = new Date(startYear, startMonth - 1, startDay, 0, 0, 0, 0);
    const end = new Date(endYear, endMonth - 1, endDay, 23, 59, 59, 999);
    return { start, end };
}
/**
 * Erases the time part of a date.
 *
 * @param date The date to erase the time part.
 * @returns The date with the time part erased.
 */
function eraseTime(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}
/**
 * The number of milliseconds in one day.
 */
const MILLISECONDS_IN_ONE_DAY = 24 * 60 * 60 * 1000;
/**
 * Compares two dates without considering time parts.
 *
 * @param a The first date.
 * @param b The second date.
 * @returns The comparison result, which is the difference between the two dates in days. A positive value means a is
 * later than b, a negative value means a is earlier than b, and zero means a is the same as b.
 */
function compareDatesWithoutTime(a, b) {
    return (eraseTime(a).getTime() - eraseTime(b).getTime()) / MILLISECONDS_IN_ONE_DAY;
}


/***/ }),

/***/ "4KAz":
/*!*******************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/ConfirmationDialog/ConfirmationDialog.component.tsx ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: ConfirmationDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ConfirmationDialog */
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "xRnI");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react */ "ogYq");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react */ "Favm");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react */ "dt+D");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react */ "3m8w");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react */ "IEJz");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ConfirmationDialog_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ConfirmationDialog.styles */ "LCdI");
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */



const ConfirmationDialog = ({ title, subText, isOpen, content, dismiss, actions, showDarkOverlay, showCloseButton = true, }) => {
    const contentStyles = Object(_ConfirmationDialog_styles__WEBPACK_IMPORTED_MODULE_7__[/* useContentStyles */ "a"])();
    const buttons = actions &&
        actions.map((buttonProps, index) => {
            return buttonProps.primary ? (react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* PrimaryButton */ "a"], Object.assign({ className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* mergeStyles */ "F"])(contentStyles.button, contentStyles.primaryButton) }, buttonProps, { key: index }))) : (react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_fluentui_react__WEBPACK_IMPORTED_MODULE_2__[/* DefaultButton */ "a"], Object.assign({ className: contentStyles.button }, buttonProps, { key: index })));
        });
    const dialogProps = {
        hidden: !isOpen,
        onDismiss: dismiss,
        styles: Object(_ConfirmationDialog_styles__WEBPACK_IMPORTED_MODULE_7__[/* useDialogStyles */ "b"])(),
        dialogContentProps: {
            type: _fluentui_react__WEBPACK_IMPORTED_MODULE_3__[/* DialogType */ "a"].normal,
            title,
            subText,
            showCloseButton,
        },
        modalProps: {
            isDarkOverlay: !!showDarkOverlay,
            overlay: !showDarkOverlay &&
                {
                    isDarkThemed: false,
                    styles: {
                        root: {
                            background: 'none',
                        },
                    },
                },
            isBlocking: true,
        },
    };
    return (react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_fluentui_react__WEBPACK_IMPORTED_MODULE_4__[/* Dialog */ "a"], Object.assign({}, dialogProps),
        content,
        react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_fluentui_react__WEBPACK_IMPORTED_MODULE_5__[/* DialogFooter */ "a"], { className: contentStyles.footerButtons }, buttons)));
};


/***/ }),

/***/ "4P7H":
/*!*********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/AppHeader/AppHeader.styles.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: useAppHeaderStyles */
/*! exports used: useAppHeaderStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useAppHeaderStyles; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "ogYq");
/* harmony import */ var _styles_makeStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/makeStyles */ "oRLY");
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */


const useAppHeaderStyles = Object(_styles_makeStyles__WEBPACK_IMPORTED_MODULE_1__[/* makeStyles */ "a"])(theme => ({
    root: {
        backgroundColor: theme.palette.white,
        padding: '0 1.25rem',
        height: '3.75rem',
    },
    text: [
        theme.fonts.large,
        {
            fontWeight: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "e"].bold,
            margin: '15px 10px 15px 10px',
            color: theme.palette.black,
        },
    ],
}));


/***/ }),

/***/ "547/":
/*!***********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-people/src/PeopleList/index.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: PeopleList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _PeopleList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PeopleList */ "JIAz");
/* unused harmony reexport * */



/***/ }),

/***/ "54rC":
/*!*************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/CommonCard/CommonCard.shimmer.tsx ***!
  \*************************************************************************************************************************************/
/*! exports provided: CommonCardShimmer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CommonCardShimmer */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react */ "tZX7");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react */ "ogYq");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react */ "51aq");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react */ "VOGN");
/* harmony import */ var _CommonCard_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CommonCard.styles */ "FLJA");



const LARGE_ICON_SIZE = 64;
const SMALL_ICON_SIZE = 32;
const LARGE_GAP_WIDTH = 18;
const SMALL_GAP_WIDTH = 12;
const LARGE_TEXT_HEIGHT = 64;
const SMALL_TEXT_HEIGHT = 20;
const CommonCardShimmer = ({ isMobile, isLowHeight, expanded, }) => {
    const cardStyles = Object(_CommonCard_styles__WEBPACK_IMPORTED_MODULE_5__[/* useCommonCardStyles */ "a"])();
    const singleLine = (isMobile && isLowHeight) || expanded;
    const iconSize = expanded ? LARGE_ICON_SIZE : SMALL_ICON_SIZE;
    const gapWidth = expanded ? LARGE_GAP_WIDTH : SMALL_GAP_WIDTH;
    const textHeight = expanded ? LARGE_TEXT_HEIGHT : SMALL_TEXT_HEIGHT;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* Stack */ "a"], { className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__[/* mergeStyles */ "F"])(cardStyles.root, expanded && cardStyles.expandedRoot, isMobile && cardStyles.mobileRoot, isMobile && isLowHeight && cardStyles.mobileRootWithoutReminder), verticalAlign: 'space-between' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_3__[/* Shimmer */ "a"], { width: singleLine ? undefined : iconSize, shimmerElements: [
                { type: _fluentui_react__WEBPACK_IMPORTED_MODULE_4__[/* ShimmerElementType */ "a"].line, height: iconSize, width: iconSize },
                { type: _fluentui_react__WEBPACK_IMPORTED_MODULE_4__[/* ShimmerElementType */ "a"].gap, width: gapWidth },
                { type: _fluentui_react__WEBPACK_IMPORTED_MODULE_4__[/* ShimmerElementType */ "a"].line, height: textHeight },
            ] }),
        !singleLine && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_3__[/* Shimmer */ "a"], { shimmerElements: [{ type: _fluentui_react__WEBPACK_IMPORTED_MODULE_4__[/* ShimmerElementType */ "a"].line, height: textHeight }] })));
};


/***/ }),

/***/ "5Ejj":
/*!*************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/EmptyState/turtle.svg ***!
  \*************************************************************************************************************************/
/*! exports provided: default, ReactComponent */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ReactComponent */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path, _path2, _path3, _path4, _path5, _path6, _path7, _path8, _path9, _path10, _g, _path11, _path12, _path13, _path14, _path15, _path16, _defs;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function SvgTurtle(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 195,
    height: 104,
    viewBox: "0 0 195 104",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M88.232 103.855c48.729 0 88.232-4.052 88.232-9.05 0-4.998-39.503-9.05-88.232-9.05C39.502 85.755 0 89.807 0 94.805c0 4.998 39.503 9.05 88.232 9.05z",
    fill: "#E1DFDD"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M169.026 13.113l-15.05-5.668c-4.664-1.757-9.821.728-11.52 5.55l-7.051 20.015 9.738 3.667c7.598 2.862 16-1.187 18.768-9.043l5.115-14.52z",
    fill: "url(#turtle_svg__paint0_linear_41_85734)"
  })), _path3 || (_path3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M172.244 14.324l-18.268-6.88c-4.664-1.757-9.821.728-11.52 5.55l-1.07 3.036 17.846 6.721c5.591 2.106 11.774-.873 13.811-6.654.253-.718-.105-1.512-.799-1.773z",
    fill: "url(#turtle_svg__paint1_linear_41_85734)"
  })), _path4 || (_path4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M91.442 2.544l-19.5-.252c-4.962-.064-9.036 4.044-9.098 9.175l-.257 21.3 28.485.368.37-30.591z",
    fill: "#AEB0D6"
  })), _path5 || (_path5 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M110.635 15.77H52.506c-9.208 0-16.672 7.718-16.672 17.239h107.295c0-9.521-16.572-17.24-32.494-17.24z",
    fill: "#FFD590"
  })), _path6 || (_path6 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M39.313.873c-.382-.71-1.167-1.042-1.865-.788L14.796 8.313c-4.75 1.725-2.448 14.162 3.58 11.973l15.94-5.79c5.695-2.069 7.932-8.168 4.997-13.623z",
    fill: "#C3C3E1"
  })), _path7 || (_path7 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M96.115 3.8c-.133-.802-.767-1.384-1.507-1.384H70.6c-5.035 0-6.85 12.523-.461 12.523h16.895c6.036 0 10.102-4.987 9.082-11.14z",
    fill: "#AEB0D6"
  })), _path8 || (_path8 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M33.091 1.668L14.693 8.351c-6.68 2.427-5.649 9.081-1.355 12.833 10.77 9.412 8.903 17.021 8.903 17.021l13.334-4.843c7.48-2.718 11.018-10.551.92-19.745L33.092 1.668z",
    fill: "#C3C3E1"
  })), _path9 || (_path9 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M140.865 33.009H74.128c-1.706 0-3.089 1.43-3.089 3.193v24.529c0 1.764 1.383 3.193 3.089 3.193h50.752c10.534 0 19.073-8.83 19.073-19.721v-8c0-1.764-1.383-3.194-3.088-3.194z",
    fill: "url(#turtle_svg__paint2_linear_41_85734)"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("mask", {
    id: "turtle_svg__a",
    style: {
      maskType: "alpha"
    },
    maskUnits: "userSpaceOnUse",
    x: 19,
    y: 33,
    width: 123,
    height: 59
  }, _path10 || (_path10 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M88.17 33.009H19.493v7.756c0 28.129 22.053 50.931 49.257 50.931h25.122c22.557 0 38.363-15.708 47.414-30.57-22.528-4.908-24.405-28.117-53.116-28.117z",
    fill: "#C3C3E1"
  }))), _g || (_g = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    mask: "url(#turtle_svg__a)",
    fill: "#6E6FAC",
    stroke: "#8B8CC4",
    strokeWidth: 7.067,
    strokeMiterlimit: 10
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M87.786 120.106H62.067l-12.86-23.03 12.86-23.03h25.719l12.859 23.03-12.86 23.03zM49.136 97.075H23.417l-12.86-23.03 12.86-23.03h25.719l12.86 23.03-12.86 23.03zM126.388 97.075h-25.719l-12.86-23.03 12.86-23.03h25.719l12.859 23.03-12.859 23.03z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M164.866 74.014h-25.719l-12.859-23.03 12.859-23.03h25.719l12.86 23.03-12.86 23.03zM87.797 74.046h-25.72l-12.859-23.03 12.86-23.03h25.719l12.859 23.03-12.86 23.03zM10.351 74.046h-25.719l-12.86-23.03 12.86-23.03h25.719l12.86 23.03-12.86 23.03z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M126.388 51.017h-25.719l-12.86-23.03 12.86-23.03h25.719l12.859 23.03-12.859 23.03zM49.147 51.017h-25.72l-12.859-23.03 12.86-23.03h25.719l12.86 23.03-12.86 23.03z"
  }))), _path11 || (_path11 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M141.286 61.127c-22.528-4.909-24.405-28.118-53.116-28.118M88.17 33.009H19.493",
    stroke: "#8B8CC4",
    strokeWidth: 11.221,
    strokeMiterlimit: 10,
    strokeLinecap: "round"
  })), _path12 || (_path12 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M148.301 60.901c0-7.625-2.424-8.745-4.504-8.188-2.113.566-4.111 3.922-4.111 3.922l-15.521-23.217s18.836-7.918 29.417-2.743c11.318 5.535 14.229 15.992 14.229 28.313l-19.51 1.913z",
    fill: "#C3C3E1"
  })), _path13 || (_path13 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M128.651 19.896c2.714-5.518-19.548-6.039-20.555-4.355-2.561 4.28-1.142 8.848-7.886 8.754-6.326-.088-7.82 4.911-7.82 4.911s4.264 2.06 7.32 9.32c5.184 12.31 23.631 10.66 24.455-5.11.236-4.508 2.308-9.091 4.486-13.52z",
    fill: "#C3C3E1"
  })), _path14 || (_path14 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M129.489 11.718l-13.561-.436c-4.961-.16-9.108 3.87-9.262 8.999l-.098 3.229 17.108.55c4.844.156 8.893-3.778 9.044-8.787.057-1.904-1.389-3.495-3.231-3.555zM168.596 38.62h-.92c-10.701 0-19.375 8.968-19.375 20.032s8.674 20.033 19.375 20.033h14.055c7.014 0 12.7-5.879 12.7-13.13v-.223c0-14.753-11.567-26.713-25.835-26.713z",
    fill: "#C3C3E1"
  })), _path15 || (_path15 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    opacity: 0.5,
    d: "M177.543 49.48c1.832 1.107 10.811-1.428 10.811-1.428l-2.411-2.545s-5.319 2.039-8.168 2.908a.567.567 0 00-.504.62.58.58 0 00.272.446z",
    fill: "#8B8CC4"
  })), _path16 || (_path16 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M180.326 65.642c.781-2.215.408-4.39-.833-4.857-1.24-.467-2.878.95-3.659 3.166-.78 2.215-.408 4.39.833 4.857 1.24.467 2.878-.95 3.659-3.166z",
    fill: "#605D5A"
  })), _defs || (_defs = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("linearGradient", {
    id: "turtle_svg__paint0_linear_41_85734",
    x1: 162.909,
    y1: 12.121,
    x2: 123.674,
    y2: 44.411,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("stop", {
    stopColor: "#C3C3E1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("stop", {
    offset: 1,
    stopColor: "#8B8CC4"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("linearGradient", {
    id: "turtle_svg__paint1_linear_41_85734",
    x1: 161.899,
    y1: 10.916,
    x2: 124.026,
    y2: 42.086,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("stop", {
    stopColor: "#C3C3E1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("stop", {
    offset: 1,
    stopColor: "#8B8CC4"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("linearGradient", {
    id: "turtle_svg__paint2_linear_41_85734",
    x1: 131.819,
    y1: 35.848,
    x2: 101.956,
    y2: 47.298,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("stop", {
    stopColor: "#C3C3E1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("stop", {
    offset: 1,
    stopColor: "#8B8CC4"
  })))));
}
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "dist/turtle.63d050.svg");


/***/ }),

/***/ "6Fz1":
/*!****************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-metaos-host/src/react/useTeamsTaskModuleSize.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: defaultSize, useTeamsTaskModuleSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export defaultSize */
/* unused harmony export useTeamsTaskModuleSize */
/* harmony import */ var _addressbook_components_metaos_host__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-metaos-host */ "0acT");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "ocL3");



/**
 * Default size of teams dialog.
 *
 * @see /Source/Clients/web-apps/WorkReport/manifests/teams.template.json
 */
const defaultSize = { width: 1000, height: 700 };
function useTeamsTaskModuleSize(size = defaultSize) {
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => update({ width: size.width, height: size.height }), [size.width, size.height]);
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => () => update(defaultSize), []);
}
function update(size) {
    Object(_addressbook_components_metaos_host__WEBPACK_IMPORTED_MODULE_0__[/* resizeTaskModule */ "m"])(size).catch(_utils__WEBPACK_IMPORTED_MODULE_2__[/* noop */ "c"]);
}


/***/ }),

/***/ "6nSl":
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/EmptyState/EmptyState.styles.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: styles */
/*! exports used: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
const styles = {
    root: {
        maxHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem',
    },
    info: {
        textAlign: 'center',
    },
    btn: {
        border: '1px solid',
        display: 'block',
        borderRadius: '4px',
        height: '2rem',
        padding: '.25rem 1.5rem',
        fontWeight: 'bold',
    },
    message: {
        fontFamily: 'unset',
        whiteSpace: 'pre-wrap',
    },
};


/***/ }),

/***/ "78Zn":
/*!*********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-fluentui-icons/src/Icons.tsx ***!
  \*********************************************************************************************************************/
/*! exports provided: iconStyle, customIconStyle, icons, initFluentuiIcons, IconName */
/*! exports used: IconName, icons, initFluentuiIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export iconStyle */
/* unused harmony export customIconStyle */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return icons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return initFluentuiIcons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconName; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "ogYq");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react-icons */ "FR/H");
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react-icons */ "vngG");
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react-icons */ "34Ww");
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react-icons */ "1sf2");
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react-icons */ "6SJ2");



const iconStyle = /* #__PURE__ */ Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* mergeStyles */ "F"])({
    display: 'block',
    width: '100%',
    height: '100%',
    lineHeight: '100%',
    fill: 'currentColor',
});
const customIconStyle = /* #__PURE__ */ Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* mergeStyles */ "F"])({
    display: 'block',
    width: '100%',
    height: '100%',
    lineHeight: '100%',
});
const dropdownIconStyle = /* #__PURE__ */ Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* mergeStyles */ "F"])({
// fontSize: '24px',
// width: '24px',
// height: '24px',
});
const icons = /* #__PURE__ */ {
    ContactCard: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_2__[/* ContactCardRegular */ "b"], { className: iconStyle }),
    Mail: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_3__[/* MailRegular */ "c"], { className: iconStyle }),
    Chat: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_4__[/* ChatRegular */ "e"], { className: iconStyle }),
    Call: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_4__[/* CallRegular */ "d"], { className: iconStyle }),
    Location: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_3__[/* LocationRegular */ "b"], { className: iconStyle }),
    Desk: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_2__[/* DeskRegular */ "c"], { className: iconStyle }),
    Search: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_5__[/* SearchRegular */ "j"], { className: iconStyle }),
    Cancel: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_2__[/* DismissRegular */ "d"], { className: iconStyle }),
    // ChevronRight: <ChevronRightRegular className={iconStyle} />,
    // ChevronLeft: <ChevronLeftRegular className={iconStyle} />,
    Home: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_3__[/* HomeRegular */ "a"], { className: iconStyle }),
    Calendar: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_4__[/* CalendarLtrRegular */ "c"], { className: iconStyle }),
    ChevronDown: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_2__[/* ChevronDownFilled */ "a"], { className: dropdownIconStyle }),
    Tag: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_6__[/* TagRegular */ "a"], { className: iconStyle }),
    // Up: <ArrowUpRegular className={iconStyle} />,
    Down: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_4__[/* ArrowDownRegular */ "a"], { className: iconStyle }),
    Organization: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_5__[/* OrganizationRegular */ "a"], { className: iconStyle }),
    Video: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_6__[/* VideoRegular */ "b"], { className: iconStyle }),
    Refresh: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_4__[/* ArrowSyncRegular */ "b"], { className: iconStyle }),
    // Presence:
    PresenceAvailable: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_5__[/* PresenceAvailableFilled */ "b"], { className: iconStyle }),
    PresenceAway: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_5__[/* PresenceAwayFilled */ "c"], { className: iconStyle }),
    PresenceBlocked: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_5__[/* PresenceBlockedRegular */ "d"], { className: iconStyle }),
    PresenceBusy: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_5__[/* PresenceBusyFilled */ "e"], { className: iconStyle }),
    PresenceDnd: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_5__[/* PresenceDndFilled */ "f"], { className: iconStyle }),
    PresenceOof: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_5__[/* PresenceOofRegular */ "h"], { className: iconStyle }),
    PresenceOffline: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_5__[/* PresenceOfflineRegular */ "g"], { className: iconStyle }),
    PresenceUnknown: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_5__[/* PresenceUnknownRegular */ "i"], { className: iconStyle }),
    // CheckMark: <CheckmarkRegular className={iconStyle} />,
    // SortDown: <ArrowSortDownRegular className={iconStyle} />,
    // SortUp: <ArrowSortUpRegular className={iconStyle} />,
    // RingerSolid: <AlertFilled className={iconStyle} />,
    // Contact: <PersonFilled className={iconStyle} />,
    // Info: <InfoRegular className={iconStyle} />,
    // Add: <AddRegular className={iconStyle} />,
    // AddFilled: <AddFilled className={iconStyle} />,
    // GlobalNavButton: <NavigationRegular className={iconStyle} />,
    // Filter: <FilterRegular className={iconStyle} />,
    // Settings: <SettingsRegular className={iconStyle} />,
    // More: <MoreHorizontalRegular className={iconStyle} />,
    // Edit: <EditRegular className={iconStyle} />,
    // Cancel: <DismissRegular className={iconStyle} />,
    // ChevronRight: <ChevronRightRegular className={iconStyle} />,
    // ChevronLeft: <ChevronLeftRegular className={iconStyle} />,
    // Home: <HomeRegular className={iconStyle} />,
    // Calendar: <CalendarLtrRegular className={iconStyle} />,
    // Airplane: <AirplaneRegular className={iconStyle} />,
    // ChevronDown: <ChevronDownRegular className={iconStyle} />,
    // Up: <ArrowUpRegular className={iconStyle} />,
    // Down: <ArrowDownRegular className={iconStyle} />,
    // CheckMark: <CheckmarkRegular className={iconStyle} />,
    // SortDown: <ArrowSortDownRegular className={iconStyle} />,
    // SortUp: <ArrowSortUpRegular className={iconStyle} />,
    // Ringer: <AlertRegular className={iconStyle} />,
    // RingerSolid: <AlertFilled className={iconStyle} />,
    // Contact: <PersonFilled className={iconStyle} />,
    // Info: <InfoRegular className={iconStyle} />,
    // CaretRight: <CaretRightFilled className={iconStyle} />,
    // CaretDown: <CaretDownFilled className={iconStyle} />,
    // ProjectCollection: <CollectionsRegular className={iconStyle} />,
    // AlertUrgentFilled: <AlertUrgentFilled className={iconStyle} />,
    // NotepadPerson: <NotepadPersonFilled className={iconStyle} />,
    // ClipboardTaskList: <ClipboardTaskListLtrFilled className={iconStyle} />,
    // TextBulletList: <TextBulletListSquareEditFilled className={iconStyle} />,
    // DocumentRibbon: <DocumentRibbonFilled className={iconStyle} />,
    // ClipboardError: <ClipboardErrorFilled className={iconStyle} />,
    // DataArea: <DataAreaFilled className={iconStyle} />,
    // WrenchScrewdriver: <WrenchScrewdriverFilled className={iconStyle} />,
    // CalendarDay: <CalendarDayFilled className={iconStyle} />,
    // CalendarWorkWeek: <CalendarWorkWeekFilled className={iconStyle} />,
    // CalendarMonth: <CalendarMonthFilled className={iconStyle} />,
    // ClipboardTextEdit: <ClipboardTextEditRegular className={iconStyle} />,
    // ClipboardTextEditFilled: <ClipboardTextEditFilled className={iconStyle} />,
    // BranchCompare: <BranchCompareFilled className={iconStyle} />,
    // LeafThree: <LeafThreeFilled className={iconStyle} />,
    // ClipboardText: <ClipboardTextLtrFilled className={iconStyle} />,
    // BuildingRetail: <BuildingRetailFilled className={iconStyle} />,
    // ClipboardDay: <ClipboardDayFilled className={iconStyle} />,
    // Clipboard3Day: <Clipboard3DayFilled className={iconStyle} />,
    // ClipboardMonth: <ClipboardMonthFilled className={iconStyle} />,
    // BuildingShop: <BuildingShopFilled className={iconStyle} />,
    // BuildingRetailToolbox: <BuildingRetailToolboxFilled className={iconStyle} />,
    // VehicleTruck: <VehicleTruckFilled className={iconStyle} />,
    // VehicleTruckProfile: <VehicleTruckProfileFilled className={iconStyle} />,
    // Broom: <BroomFilled className={iconStyle} />,
    // Backpack: <BackpackFilled className={iconStyle} />,
    // Megaphone: <MegaphoneFilled className={iconStyle} />,
    // Cart: <CartFilled className={iconStyle} />,
    // ClockAlarm: <ClockAlarmFilled className={iconStyle} />,
    // Pulse: <PulseFilled className={iconStyle} />,
    // Production: <ProductionFilled className={iconStyle} />,
    // Steps: <StepsFilled className={iconStyle} />,
    // BookTemplate: <BookTemplateRegular className={iconStyle} />,
    // Tag: <TagRegular className={iconStyle} />,
    // LinkSquare: <LinkSquareRegular className={iconStyle} />,
    // LinkRegular: <LinkRegular className={iconStyle} />,
    // ThumbLikeRegular: <ThumbLikeRegular className={iconStyle} />,
    // ThumbLikeFilled: <ThumbLikeFilled className={iconStyle} />,
    // PersonFeedbackRegular: <PersonFeedbackRegular className={iconStyle} />,
    // Attach: <AttachRegular className={iconStyle} />,
    // Image: <ImageRegular className={iconStyle} />,
    // ImageOff: <ImageOffRegular className={iconStyle} />,
    // Open: <OpenRegular className={iconStyle} />,
    // ArrowClockwise: <ArrowClockwiseRegular className={iconStyle} />,
    // ArrowUpload: <ArrowUploadFilled className={iconStyle} />,
    // ArrowDownload: <ArrowDownload className={iconStyle} />,
    // ArrowRepeatAllRegular: <ArrowRepeatAllRegular className={iconStyle} />,
    // ArrowExport: <ArrowExportRegular className={iconStyle} />,
    // CheckMarkCircle: <CheckmarkCircleRegular className={iconStyle} />,
    // PeopleTeam: <PeopleTeamRegular className={iconStyle} />,
    // PersonRegular: <PersonRegular className={iconStyle} />,
    // BoardSplitRegular: <BoardSplitRegular className={iconStyle} />,
    // ListRegular: <ListRegular className={iconStyle} />,
    // ArrowRight: <ArrowRight className={iconStyle} />,
    // People: <PeopleFilled className={iconStyle} />,
    // PeopleRegular: <PeopleRegular className={iconStyle} />,
    // QuestionCircle: <QuestionCircle className={iconStyle} />,
    // to consume @addressbook/components-rich-text
    // // Emoji for default template icon
    // SunWithFaceEmoji: <SunWithFace {...emojiProps} />,
    // RocketEmoji: <Rocket {...emojiProps} />,
    // SixOclockEmoji: <SixOclock {...emojiProps} />,
    // DizzyEmoji: <Dizzy {...emojiProps} />,
    // PoliceCarLightEmoji: <PoliceCarLight {...emojiProps} />,
    // MemoEmoji: <Memo {...emojiProps} />,
    // StarEmoji: <Star {...emojiProps} />,
    // ScrollEmoji: <Scroll {...emojiProps} />,
    // // Emoji for user pick
    // SoftIceCreamEmoji: <SoftIceCream {...emojiProps} />,
    // ShortCakeEmoji: <ShortCake {...emojiProps} />,
    // GreenAppleEmoji: <GreenApple {...emojiProps} />,
    // AppleEmoji: <Apple {...emojiProps} />,
    // CherriesEmoji: <Cherries {...emojiProps} />,
    // BurgerEmoji: <Burger {...emojiProps} />,
    // CakeEmoji: <Cake {...emojiProps} />,
    // SwanEmoji: <Swan {...emojiProps} />,
    // CatFaceEmoji: <CatFace {...emojiProps} />,
    // PottedPlantEmoji: <PottedPlant {...emojiProps} />,
    // BellEmoji: <Bell {...emojiProps} />,
    // MilitaryMedalEmoji: <MilitaryMedal {...emojiProps} />,
    // TelephoneEmoji: <Telephone {...emojiProps} />,
    // TelephoneReceiverEmoji: <TelephoneReceiver {...emojiProps} />,
    // PartyPopperEmoji: <PartyPopper {...emojiProps} />,
    // BalloonEmoji: <Balloon {...emojiProps} />,
    // PushpinEmoji: <Pushpin {...emojiProps} />,
    // ArtistPaletteEmoji: <ArtistPalette {...emojiProps} />,
    // RingedPlanetEmoji: <RingedPlanet {...emojiProps} />,
    // SnowflakeEmoji: <Snowflake {...emojiProps} />,
    // GlobeWithMeridiansEmoji: <GlobeWithMeridians {...emojiProps} />,
    // HighSpeedTrainEmoji: <HighSpeedTrain {...emojiProps} />,
    // GrinningFaceEmoji: <GrinningFace {...emojiProps} />,
    // PencilEmoji: <Pencile {...emojiProps} />,
    // FaceWithDiagonalMouth: <FaceWithDiagonalMouth {...emojiProps} />,
    // FaceWithRaisedEyebrow: <FaceWithRaisedEyebrow {...emojiProps} />,
    // SlightlyFrowningFace: <SlightlyFrowningFace {...emojiProps} />,
    // // Emoji for default template icon, do not delete it even no reference
    // BullseyeEmoji: <Bullseye {...emojiProps} />,
    // ShieldEmoji: <Shield {...emojiProps} />,
    // SmilingFaceWithSmilingEyesEmoji: <SmilingFaceWithSmilingEyes {...emojiProps} />,
    // SpiralNotepadEmoji: <SpiralNotepad {...emojiProps} />,
    // TeddyBearEmoji: <TeddyBear {...emojiProps} />,
    // NineOclockEmoji: <NineOclock {...emojiProps} />,
    // BooksEmoji: <BooksEmoji {...emojiProps} />,
    // ChartIncreasingEmoji: <ChartIncreasingEmoji {...emojiProps} />,
    // ReceiptEmoji: <ReceiptEmoji {...emojiProps} />,
    // CalendarEmoji: <CalendarEmoji {...emojiProps} />,
    // PartyingFaceEmoji: <PartyingFaceEmoji {...emojiProps} />,
    // PageFacingUpEmoji: <PageFacingUpEmoji {...emojiProps} />,
    // NecktieEmoji: <NecktieEmoji {...emojiProps} />,
    // ManSuperheroEmoji: <ManSuperheroEmoji {...emojiProps} />,
    // PersonRowingBoatEmoji: <PersonRowingBoatEmoji {...emojiProps} />,
    // FourLeafCloverEmoji: <FourLeafCloverEmoji {...emojiProps} />,
    // ThinkingFaceEmoji: <ThinkingFaceEmoji {...emojiProps} />,
    // BriefcaseEmoji: <BriefcaseEmoji {...emojiProps} />,
    // SlightlySmilingFaceEmoji: <SlightlySmilingFaceEmoji {...emojiProps} />,
    // CardIndexEmoji: <CardIndexEmoji {...emojiProps} />,
    // HuggingFaceEmoji: <HuggingFaceEmoji {...emojiProps} />,
    // TelescopeEmoji: <TelescopeEmoji {...emojiProps} />,
    // SunriseEmoji: <SunriseEmoji {...emojiProps} />,
    // SparklerEmoji: <SparklerEmoji {...emojiProps} />,
    // LadyBeetleEmoji: <LadyBeetleEmoji {...emojiProps} />,
    // NotebookEmoji: <NotebookEmoji {...emojiProps} />,
    // FireExtinguisherEmoji: <FireExtinguisherEmoji {...emojiProps} />,
    // BookmarkTabsEmoji: <BookmarkTabsEmoji {...emojiProps} />,
    // FireEmoji: <FireEmoji {...emojiProps} />,
};
function initFluentuiIcons() {
    Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* registerIcons */ "I"])({ icons });
}
const IconName = /* #__PURE__ */ Object.fromEntries(Object.keys(icons).map((k) => [k, k]));


/***/ }),

/***/ "7cB0":
/*!*******************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/services-graph/src/resources/drive.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: GraphDriveResource */
/*! exports used: GraphDriveResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphDriveResource; });
/* harmony import */ var _drive_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drive-item */ "Mzmc");

/**
 * The drive resource.
 *
 * @see https://learn.microsoft.com/graph/api/resources/drive
 */
class GraphDriveResource {
    constructor(operation, locator) {
        this.operation = operation;
        this.locator = locator;
    }
    /**
     * Navigates to the root drive item resource, with optional path.
     *
     * @param path The item path.
     * @returns The item resource.
     * @see https://learn.microsoft.com/graph/api/driveitem-get
     */
    root(path) {
        return new _drive_item__WEBPACK_IMPORTED_MODULE_0__[/* GraphDriveItemResource */ "a"](this.operation, this.locator.extend(describeItem('root', path)));
    }
    /**
     * Navigates to the drive item resource by id, with optional path.
     *
     * @param id The item id.
     * @param path The item path.
     * @returns The item resource.
     * @see https://learn.microsoft.com/graph/api/driveitem-get
     */
    items(id, path) {
        return new _drive_item__WEBPACK_IMPORTED_MODULE_0__[/* GraphDriveItemResource */ "a"](this.operation, this.locator.extend('items', describeItem(id, path)));
    }
}
/**
 * Describes an item by id and optional path.
 *
 * @param id The item id.
 * @param path The item path.
 * @returns The item descriptor.
 * @see https://learn.microsoft.com/graph/api/driveitem-get
 */
function describeItem(id, path) {
    return `${id}${path ? `:/${encodePath(path)}:` : ''}`;
}
/**
 * Encodes a path. Each segment of the path must be encoded separately.
 *
 * @param path The file path.
 * @returns The encoded file path.
 * @see https://learn.microsoft.com/graph/onedrive-addressing-driveitems#path-encoding
 *
 * @example encodePath('foo/bar') // 'foo/bar'
 * @example encodePath('foo bar') // 'foo%20bar'
 */
function encodePath(path) {
    return path.split('/').map(encodeURIComponent).join('/');
}


/***/ }),

/***/ "7ct7":
/*!**********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/services-core/src/interceptors/online.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: createOnlineInterceptor */
/*! exports used: createOnlineInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createOnlineInterceptor; });
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
 * Create a service interceptor that waits until the target is online.
 *
 * @property target The target to check online status.
 * @returns An interceptor.
 */
function createOnlineInterceptor({ target = window } = {}) {
    return (request, proceed) => __awaiter(this, void 0, void 0, function* () {
        yield untilOnline(target);
        return proceed(request);
    });
}
/**
 * Wait until the target is online.
 *
 * @param target The target to check online status.
 * @returns A promise that resolves when the target is online.
 */
function untilOnline(target) {
    return __awaiter(this, void 0, void 0, function* () {
        if (target.navigator.onLine)
            return;
        return new Promise(resolve => target.addEventListener('online', () => resolve(), { once: true }));
    });
}


/***/ }),

/***/ "7kNt":
/*!********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-metaos-host/src/fallback.ts ***!
  \********************************************************************************************************************/
/*! exports provided: patchTeamsFallbackData, fallbackBySelector */
/*! exports used: fallbackBySelector, patchTeamsFallbackData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return patchTeamsFallbackData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fallbackBySelector; });
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
 * Fallback data about Teams host.
 *
 * @remarks The runtime value may not obey the type definition strictly, since it's for testing or local development only.
 */
const fallbackData = {};
/**
 * Patch the fallback data about Teams host, which will be used when the Teams initialization fails.
 *
 * @param patchData The data to patch.
 * @remarks This function is for testing or local development only.
 */
function patchTeamsFallbackData(patchData) {
    Object.assign(fallbackData, patchData);
}
/**
 * Fallback the promise by the selector of the fallback data.
 *
 * @param promise The promise that may fail.
 * @param selector The selector to get the fallback data.
 * @returns A promise resolved with the result of the promise or the fallback data if possible.
 */
function fallbackBySelector(promise, selector) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield promise;
        }
        catch (error) {
            const fallbackValue = selector(fallbackData);
            if (fallbackValue !== undefined)
                return fallbackValue;
            throw error;
        }
    });
}


/***/ }),

/***/ "8/+v":
/*!*********************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/utilities-core/src/jsons.ts ***!
  \*********************************************************************************************************/
/*! exports provided: parseJson, parseJsonAsStringSet, normalizeStringSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export parseJson */
/* unused harmony export parseJsonAsStringSet */
/* unused harmony export normalizeStringSet */
/**
 * Parses json as object.
 *
 * @param json The json string to parse.
 * @returns The parsed object if the json string is valid. Otherwise, return undefined.
 */
function parseJson(json) {
    if (json === undefined)
        return;
    try {
        return JSON.parse(json);
    }
    catch (_a) {
        // Ignore the error.
    }
}
/**
 * Parses json as string set.
 * If the json string is undefined, it will return an empty array.
 * If the json string is of an array, it will return an array with only string elements.
 * If the json string is of a string, it will return an array with the string as the only element.
 * Otherwise, it will return an array with the json string as the only element.
 *
 * @param json The json string to parse.
 * @returns The parsed string set array.
 *
 * @example parseJsonAsStringSet('') // []
 * @example parseJsonAsStringSet('["", 1, true, "Another", "Another", "Yet"]') // ['Another', 'Yet']
 * @example parseJsonAsStringSet('42') // ['42']
 */
function parseJsonAsStringSet(json) {
    const parsed = parseJson(json);
    const array = Array.isArray(parsed) ? parsed : typeof parsed === 'string' ? [parsed] : json ? [json] : [];
    return normalizeStringSet(array);
}
/**
 * Normalizes string set, retaining only non-empty unique strings.
 *
 * @param array The string set array to normalize.
 * @returns The normalized string set array.
 *
 * @example normalizeStringSet(['', 1, true, undefined, null, 'Another', 'Another', 'Yet']) // ['Another', 'Yet']
 */
function normalizeStringSet(array) {
    return [...new Set(array.filter((o) => typeof o === 'string' && Boolean(o)))];
}


/***/ }),

/***/ "8C+a":
/*!******************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-metaos-host/src/themes.ts ***!
  \******************************************************************************************************************/
/*! exports provided: coerceTeamsTheme */
/*! exports used: coerceTeamsTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return coerceTeamsTheme; });
const knownThemes = ['default', 'dark', 'contrast'];
const fallbackTheme = 'default';
/**
 * Coerce the theme to a known value.
 *
 * @param theme The theme to coerce.
 * @returns The coerced theme.
 */
function coerceTeamsTheme(theme) {
    var _a;
    return (_a = knownThemes.find(knownTheme => knownTheme === theme)) !== null && _a !== void 0 ? _a : fallbackTheme;
}


/***/ }),

/***/ "8eDT":
/*!***************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/services-graph/src/resources/profile-photo.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: GraphProfilePhotoResource */
/*! exports used: GraphProfilePhotoResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphProfilePhotoResource; });
/**
 * The profile photo resource.
 *
 * @see https://learn.microsoft.com/graph/api/resources/profilephoto
 */
class GraphProfilePhotoResource {
    constructor(operation, locator) {
        this.operation = operation;
        this.locator = locator;
    }
    /**
     * Gets the profile photo content.
     *
     * @param signal The abort signal.
     * @returns The profile photo content.
     * @see https://learn.microsoft.com/graph/api/profilephoto-get
     */
    download(signal) {
        const url = `/v1.0/${this.locator.path}/$value`;
        return this.operation.requestBlob(url, { signal });
    }
}


/***/ }),

/***/ "8m13":
/*!*********************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/services-graph/src/types.ts ***!
  \*********************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



/***/ }),

/***/ "8odi":
/*!************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/CommonModal/index.ts ***!
  \************************************************************************************************************************/
/*! exports provided: CommonModal, useModalStyles, useContentStyles, useShareSubmissionCardConsentStyles, ModalContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _CommonModal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommonModal.component */ "FHkE");
/* unused harmony reexport * */
/* harmony import */ var _CommonModal_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CommonModal.styles */ "sndZ");
/* unused harmony reexport * */
/* harmony import */ var _ModalContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModalContent */ "uhAr");
/* unused harmony reexport * */
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */





/***/ }),

/***/ "95X5":
/*!*******************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/services-graph/src/resources/index.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: GraphDriveResource, GraphDriveItemResource, GraphGroupResource, GraphProfilePhotoResource, GraphRootResource, GraphShareResource, GraphThumbnailResource, GraphUserResource */
/*! exports used: GraphRootResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _drive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drive */ "7cB0");
/* harmony import */ var _drive_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drive-item */ "Mzmc");
/* harmony import */ var _group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./group */ "XWzl");
/* harmony import */ var _profile_photo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-photo */ "8eDT");
/* harmony import */ var _root__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./root */ "au/o");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _root__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony import */ var _share__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./share */ "jPfx");
/* harmony import */ var _thumbnail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./thumbnail */ "AuCu");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user */ "qxKi");










/***/ }),

/***/ "9G59":
/*!*************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/CommonPanel/CommonPanel.styles.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: usePanelStyles */
/*! exports used: usePanelStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return usePanelStyles; });
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "tPyQ");
/* harmony import */ var _styles_makeStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/makeStyles */ "oRLY");
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */


const usePanelStyles = /* #__PURE__*/ Object(_styles_makeStyles__WEBPACK_IMPORTED_MODULE_1__[/* makeStyles */ "a"])(theme => ({
    main: {
        animation: 'none',
        backgroundColor: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* isDarkTheme */ "g"])(theme.name) ? theme.palette.neutralLight : undefined,
    },
    scrollableContent: {
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        display: 'flex',
    },
    commands: {
        padding: 0,
        borderBottom: `1px solid ${theme.palette.neutralTertiaryAlt}`,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    navigation: {
        height: 'auto',
    },
    content: {
        padding: '24px 4px',
        flex: '1 1 auto',
        overflowY: 'auto',
        'overflow-y': 'overlay', // make scrollbar float over content
    },
    contentInner: {
        height: '100%',
    },
}));


/***/ }),

/***/ "9GRA":
/*!*****************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/services-core/src/interceptors/authorization.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: createAuthorizationInterceptor */
/*! exports used: createAuthorizationInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createAuthorizationInterceptor; });
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
 * Create a service interceptor to authorize requests.
 *
 * @param authenticate The authenticate function.
 * @returns An interceptor.
 */
function createAuthorizationInterceptor(authenticate) {
    return (request, proceed) => __awaiter(this, void 0, void 0, function* () {
        const token = yield authenticate(request);
        const authorizedRequest = token ? authorize(request, token) : request;
        return proceed(authorizedRequest);
    });
}
function authorize(request, token) {
    const authorizedRequest = new Request(request);
    authorizedRequest.headers.set('Authorization', `Bearer ${token}`);
    return authorizedRequest;
}


/***/ }),

/***/ "9jFz":
/*!*********************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/utilities-hooks/src/drop.ts ***!
  \*********************************************************************************************************/
/*! exports provided: useDrop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export useDrop */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * A Hook to handle drag and drop events as a drop target.
 *
 * @property accept A function to determine if the data is accepted.
 * @property consume A function to consume the data.
 * @property disabled A flag to disable the drop target.
 * @returns a tuple of dragging state and a ref to the drop target element.
 */
function useDrop({ accept, consume, disabled, }) {
    const elementRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);
    const [dragging, setDragging] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
    const guard = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback((handler, prevent) => (event) => {
        if (event.relatedTarget)
            return;
        const data = event.dataTransfer;
        if (!data || !accept(data))
            return;
        if (prevent)
            event.preventDefault();
        handler(data);
    }, [accept]);
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
        if (disabled)
            return;
        const element = elementRef.current;
        if (!element)
            return;
        const enter = guard(() => setDragging(true));
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        const over = guard(() => { }, true);
        const leave = guard(() => setDragging(false));
        const drop = guard(data => consume === null || consume === void 0 ? void 0 : consume(data), true);
        const controller = new AbortController();
        element.ownerDocument.addEventListener('dragenter', enter, { signal: controller.signal, capture: true });
        element.ownerDocument.addEventListener('dragover', over, { signal: controller.signal, capture: true });
        element.ownerDocument.addEventListener('dragleave', leave, { signal: controller.signal, capture: true });
        element.ownerDocument.addEventListener('drop', leave, { signal: controller.signal, capture: true });
        element.addEventListener('drop', drop, { signal: controller.signal });
        return () => controller.abort();
    }, [consume, disabled, elementRef, guard]);
    return [dragging, elementRef];
}


/***/ }),

/***/ "AuCu":
/*!***********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/services-graph/src/resources/thumbnail.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: GraphThumbnailResource */
/*! exports used: GraphThumbnailResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphThumbnailResource; });
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
 * The thumbnail resource.
 *
 * @see https://learn.microsoft.com/graph/api/resources/thumbnail
 */
class GraphThumbnailResource {
    constructor(operation, locator) {
        this.operation = operation;
        this.locator = locator;
    }
    /**
     * Downloads the thumbnail content.
     *
     * @param options The download options.
     * @param signal The abort signal.
     * @returns The thumbnail content.
     * @see https://learn.microsoft.com/graph/api/driveitem-list-thumbnails#retrieve-thumbnail-binary-content
     */
    download({ prefer } = {}, signal) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `/v1.0/${this.locator.path}/content`;
            return this.operation.requestBlob(url, { headers: prefer ? { Prefer: prefer } : {}, signal });
        });
    }
}


/***/ }),

/***/ "B/xv":
/*!***********************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/CollapsingArea/CollapsingArea.component.tsx ***!
  \***********************************************************************************************************************************************/
/*! exports provided: CollapsingArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CollapsingArea */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react-hooks */ "6MXf");
/* harmony import */ var _fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react-hooks */ "EO0U");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react */ "ogYq");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react */ "YGsJ");
/* harmony import */ var _CollapsingArea_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CollapsingArea.styles */ "o+HD");
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */




const CollapsingArea = ({ title, collapse, collapseIcon, expandIcon, children, titleClassName, farItems, styles, }) => {
    const [collapsedState, { toggle }] = Object(_fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useBoolean */ "a"])(collapse !== null && collapse !== void 0 ? collapse : false);
    const collapsingAreaStyles = Object(_CollapsingArea_styles__WEBPACK_IMPORTED_MODULE_5__[/* useCollapsingAreaStyles */ "b"])();
    const ariaControlsId = Object(_fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_2__[/* useId */ "a"])('collapsible-region-');
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: collapsedState ? _CollapsingArea_styles__WEBPACK_IMPORTED_MODULE_5__[/* CollapsedClassName */ "a"] : 'is-expanded' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_3__[/* mergeStyles */ "F"])(collapsingAreaStyles.title, titleClassName) },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_3__[/* mergeStyles */ "F"])(collapsingAreaStyles.button, styles === null || styles === void 0 ? void 0 : styles.button), onClick: toggle, "aria-expanded": !collapsedState, "aria-controls": ariaControlsId },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_4__[/* Icon */ "a"], { className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_3__[/* mergeStyles */ "F"])(collapsingAreaStyles.icon, styles === null || styles === void 0 ? void 0 : styles.icon), iconName: collapsedState ? collapseIcon : expandIcon }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_3__[/* mergeStyles */ "F"])(collapsingAreaStyles.text, styles === null || styles === void 0 ? void 0 : styles.text) }, title)),
            farItems),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { id: ariaControlsId, className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_3__[/* mergeStyles */ "F"])(collapsingAreaStyles.collapsibleRegion, styles === null || styles === void 0 ? void 0 : styles.collapsibleRegion) }, children)));
};


/***/ }),

/***/ "C6XX":
/*!**********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-people/src/PeopleView/PeopleView.types.ts ***!
  \**********************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



/***/ }),

/***/ "C7FI":
/*!************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/ContentCopyRequestModal/index.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: ContentCopyRequestModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _ContentCopyRequestModal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContentCopyRequestModal.component */ "mmDp");
/* unused harmony reexport * */
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */



/***/ }),

/***/ "CS/u":
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-people/src/PeopleSelect/PeopleSelect.types.ts ***!
  \**************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



/***/ }),

/***/ "DMX/":
/*!*************************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/ContentCopyRequestModal/ContentCopyRequestModal.styles.ts ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: useCopyRequestModalStyles, useContentStyles */
/*! exports used: useContentStyles, useCopyRequestModalStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useCopyRequestModalStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useContentStyles; });
/* harmony import */ var _styles_makeStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/makeStyles */ "oRLY");
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */

const horizontalPaddingGap = '1.875rem';
const useCopyRequestModalStyles = /* #__PURE__*/ Object(_styles_makeStyles__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])({
    main: {
        width: '29.25rem',
        height: '9.5rem',
        maxHeight: '100%',
    },
    scrollableContent: {
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '1.875rem',
        paddingBottom: '1.25rem',
        gap: '0.625rem',
        boxSizing: 'border-box',
    },
});
const useContentStyles = /* #__PURE__*/ Object(_styles_makeStyles__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])(() => ({
    header: {
        width: '100%',
        maxWidth: '100%',
        padding: `0 ${horizontalPaddingGap}`,
        flex: '0 0 auto',
        h1: {
            fontSize: '18px',
        },
    },
    headerProperty: {
        maxWidth: 'calc( 100% - 2rem )',
    },
    footer: {
        padding: `0 ${horizontalPaddingGap}`,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        '>.ms-Button--command': {
            marginRight: 'auto',
        },
    },
    linkPermissionSetting: {
        width: '21rem',
        height: '3rem',
        display: 'flex',
        alignItems: 'center',
    },
    linkPermissionSettingIcon: {
        display: 'flex',
        justifyContent: 'center',
        width: '2rem',
        height: '2rem',
        margin: '0 0.5rem',
    },
    linkPermissionSettingTextStyles: [
        {
            width: '15rem',
            maxWidth: '15rem',
        },
    ],
}));


/***/ }),

/***/ "DPFp":
/*!********************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/services-core/src/error.ts ***!
  \********************************************************************************************************/
/*! exports provided: ServiceOperationError */
/*! exports used: ServiceOperationError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceOperationError; });
class ServiceOperationError extends Error {
    constructor({ message, request, response }) {
        super(message !== null && message !== void 0 ? message : response.statusText);
        this.name = this.constructor.name;
        this.request = request;
        this.response = response;
    }
}


/***/ }),

/***/ "DaYX":
/*!************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-people/src/types.ts ***!
  \************************************************************************************************************/
/*! exports provided: PeopleSelectionType */
/*! exports used: PeopleSelectionType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeopleSelectionType; });
var PeopleSelectionType;
(function (PeopleSelectionType) {
    PeopleSelectionType[PeopleSelectionType["User"] = 0] = "User";
    PeopleSelectionType[PeopleSelectionType["Group"] = 1] = "Group";
    PeopleSelectionType[PeopleSelectionType["Tag"] = 2] = "Tag";
    PeopleSelectionType[PeopleSelectionType["Unspecific"] = 3] = "Unspecific";
})(PeopleSelectionType || (PeopleSelectionType = {}));


/***/ }),

/***/ "Dugf":
/*!***************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/CommonCard/CommonCard.component.tsx ***!
  \***************************************************************************************************************************************/
/*! exports provided: CommonCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CommonCard */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react */ "ogYq");
/* harmony import */ var _CommonIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CommonIcon */ "Lwxb");
/* harmony import */ var _CommonCard_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CommonCard.styles */ "FLJA");




const CommonCard = (props) => {
    const { accentColor, iconName, title, description, highlightDescription, reminder, isMobile, expandable, id, role, farItem, onCardClick, } = props;
    const cardStyles = Object(_CommonCard_styles__WEBPACK_IMPORTED_MODULE_3__[/* useCommonCardStyles */ "a"])();
    const expanded = expandable && !isMobile && !reminder;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { role: role },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { id: id, className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* mergeStyles */ "F"])(cardStyles.root, expanded && cardStyles.expandedRoot, isMobile && cardStyles.mobileRoot, isMobile && !reminder && cardStyles.mobileRootWithoutReminder), onClick: onCardClick },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CommonIcon__WEBPACK_IMPORTED_MODULE_2__[/* CommonIcon */ "a"], { icon: iconName, size: expanded ? _CommonIcon__WEBPACK_IMPORTED_MODULE_2__[/* CommonIconSize */ "b"].Size64 : _CommonIcon__WEBPACK_IMPORTED_MODULE_2__[/* CommonIconSize */ "b"].Size32, iconBackgroundColor: accentColor, title: title, description: description, rightItem: farItem, styles: {
                    root: expanded && cardStyles.expandedIconRoot,
                    description: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* mergeStyles */ "F"])([
                        highlightDescription && cardStyles.hightlightedDescription,
                        expanded && cardStyles.expandedDescription,
                    ]),
                } }),
            reminder)));
};


/***/ }),

/***/ "EAWf":
/*!*********************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/utilities-hooks/src/blob.ts ***!
  \*********************************************************************************************************/
/*! exports provided: useBlobObjectUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export useBlobObjectUrl */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useBlobObjectUrl(blob) {
    const blobRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    const objectUrlRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    const updateObjectUrlRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])((objectUrl) => {
        const previousObjectUrl = objectUrlRef.current;
        if (previousObjectUrl)
            URL.revokeObjectURL(previousObjectUrl);
        objectUrlRef.current = objectUrl;
    });
    if (blob !== blobRef.current) {
        blobRef.current = blob;
        updateObjectUrlRef.current(blob ? URL.createObjectURL(blob) : undefined);
    }
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => updateObjectUrlRef.current, []);
    return objectUrlRef.current;
}


/***/ }),

/***/ "EDS4":
/*!*****************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-people/src/PeopleCoin/PeopleCoin.tsx ***!
  \*****************************************************************************************************************************/
/*! exports provided: PeopleCoin */
/*! exports used: PeopleCoin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeopleCoin; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "jFKp");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react */ "028r");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react */ "YGsJ");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react */ "tArt");
/* harmony import */ var _addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @addressbook/utilities-core */ "1hmm");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _PeopleCoin_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PeopleCoin.styles */ "UKA7");
/* harmony import */ var _PeopleCoin_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PeopleCoin.utils */ "N+Kj");
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





const PeopleCoin = (_a) => {
    var { selection, onRetrieveIcon, preventNameAsTitle } = _a, props = __rest(_a, ["selection", "onRetrieveIcon", "preventNameAsTitle"]);
    const theme = Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* useTheme */ "a"])();
    const styles = Object(_PeopleCoin_styles__WEBPACK_IMPORTED_MODULE_6__[/* usePeopleCoinStyles */ "a"])();
    const icon = Object(_PeopleCoin_utils__WEBPACK_IMPORTED_MODULE_7__[/* useIcon */ "a"])(selection, onRetrieveIcon);
    const propsInternal = react__WEBPACK_IMPORTED_MODULE_5___default.a.useMemo(() => {
        const baseProps = Object.assign({ text: selection.name, title: preventNameAsTitle ? undefined : selection.name }, props);
        if (!icon)
            return baseProps;
        const iconProps = Object(_addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_4__[/* isAbsoluteUrl */ "c"])(icon)
            ? {
                imageProps: { src: icon, imageFit: _fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* ImageFit */ "b"].cover },
                style: props.coinSize
                    ? { boxSizing: 'border-box', width: props.coinSize, height: props.coinSize }
                    : {},
            }
            : {
                iconName: icon,
                style: props.coinSize
                    ? { boxSizing: 'border-box', fontSize: props.coinSize, padding: props.coinSize * 0.1875 }
                    : {},
            };
        return Object.assign(Object.assign({}, baseProps), { onRenderInitials: props => react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__[/* Icon */ "a"], Object.assign({ className: styles.icon, title: props === null || props === void 0 ? void 0 : props.title }, iconProps)), initialsColor: theme.palette.themeLight, initialsTextColor: theme.palette.themeDark });
    }, [
        icon,
        preventNameAsTitle,
        props,
        selection.name,
        styles.icon,
        theme.palette.themeDark,
        theme.palette.themeLight,
    ]);
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_3__[/* PersonaCoin */ "a"], Object.assign({}, props, propsInternal));
};


/***/ }),

/***/ "ETwS":
/*!*****************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-people/src/PeopleView/PeopleView.tsx ***!
  \*****************************************************************************************************************************/
/*! exports provided: PeopleView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PeopleView */
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "ogYq");
/* harmony import */ var _fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react-hooks */ "EO0U");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PeopleCoin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PeopleCoin */ "KDg/");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../types */ "DaYX");
/* harmony import */ var _PeopleView_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PeopleView.styles */ "WGvt");
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






const defaultFormatNames = (names) => ({ normal: names.join(', ') });
const PeopleView = (_a) => {
    var { label, selections, onRetrieveIcon, formatNames = defaultFormatNames, className } = _a, props = __rest(_a, ["label", "selections", "onRetrieveIcon", "formatNames", "className"]);
    const { normal: names, compact: compactNames } = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(() => formatNames(selections.map(selection => selection.name)), [selections, formatNames]);
    const aggregatedSelection = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(() => selections.length === 1
        ? selections[0]
        : { type: _types__WEBPACK_IMPORTED_MODULE_4__[/* PeopleSelectionType */ "a"].Unspecific, id: 'aggregated', name: names, icon: 'People' }, [names, selections]);
    const labelId = Object(_fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useId */ "a"])('label');
    const styles = Object(_PeopleView_styles__WEBPACK_IMPORTED_MODULE_5__[/* usePeopleViewStyles */ "a"])();
    return (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object.assign({ className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* mergeStyles */ "F"])(styles.root, className) }, props),
        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_PeopleCoin__WEBPACK_IMPORTED_MODULE_3__[/* PeopleCoin */ "a"], { selection: aggregatedSelection, onRetrieveIcon: onRetrieveIcon, coinSize: 32 }),
        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { className: styles.textContainer },
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { className: styles.names, title: names, "aria-labelledby": labelId }, compactNames !== null && compactNames !== void 0 ? compactNames : names),
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { className: styles.label, id: labelId }, label))));
};


/***/ }),

/***/ "F880":
/*!**********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/AppHeader/index.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: AppHeader */
/*! exports used: AppHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _AppHeader_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppHeader.component */ "p/h3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _AppHeader_component__WEBPACK_IMPORTED_MODULE_0__["a"]; });




/***/ }),

/***/ "FHkE":
/*!*****************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/CommonModal/CommonModal.component.tsx ***!
  \*****************************************************************************************************************************************/
/*! exports provided: CommonModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CommonModal */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react */ "brIe");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react */ "ogYq");
/* harmony import */ var _fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react-hooks */ "EO0U");
/* harmony import */ var _CommonModal_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CommonModal.styles */ "sndZ");
/* harmony import */ var _ModalContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ModalContent */ "uhAr");
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */
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





const CommonModal = (_a) => {
    var { isOpen, modalStyles } = _a, props = __rest(_a, ["isOpen", "modalStyles"]);
    const styles = Object(_CommonModal_styles__WEBPACK_IMPORTED_MODULE_4__[/* useModalStyles */ "b"])();
    const titleId = Object(_fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_3__[/* useId */ "a"])('ModalTitle');
    const subTitleId = Object(_fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_3__[/* useId */ "a"])('ModalSubTitle');
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* Modal */ "a"], { titleAriaId: titleId, subtitleAriaId: subTitleId, styles: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__[/* mergeStyleSets */ "E"])(styles, modalStyles), isOpen: isOpen, isBlocking: true, layerProps: { eventBubblingEnabled: true }, focusTrapZoneProps: { isClickableOutsideFocusTrap: true }, onDismiss: props.onDismiss },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ModalContent__WEBPACK_IMPORTED_MODULE_5__[/* ModalContent */ "a"], Object.assign({ titleId: titleId, subTitleId: subTitleId }, props))));
};


/***/ }),

/***/ "FLJA":
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/CommonCard/CommonCard.styles.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: useCommonCardStyles */
/*! exports used: useCommonCardStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useCommonCardStyles; });
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "tPyQ");
/* harmony import */ var _styles_ellipsisStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/ellipsisStyles */ "btUH");
/* harmony import */ var _styles_makeStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/makeStyles */ "oRLY");
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */



const useCommonCardStyles = Object(_styles_makeStyles__WEBPACK_IMPORTED_MODULE_2__[/* makeStyles */ "a"])(theme => ({
    root: {
        position: 'relative',
        padding: '16px',
        width: '300px',
        height: '100px',
        boxShadow: '0px 0.3px 0.9px rgba(0, 0, 0, 0.07), 0px 1.6px 3.6px rgba(0, 0, 0, 0.11)',
        borderRadius: '4px',
        cursor: 'pointer',
        textAlign: 'start',
        background: theme.palette.white,
        border: `${Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* isContrastTheme */ "f"])(theme.name) ? '0.87px' : 0} solid ${theme.palette.neutralLighter}`,
        outlineOffset: '2px',
        display: 'flex',
        boxSizing: 'border-box',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'normal',
        color: theme.palette.neutralDark,
    },
    mobileRoot: {
        boxShadow: 'none',
        background: 'transparent',
        width: '100%',
        height: '106px',
        ':before': {
            content: '""',
            position: 'absolute',
            right: 0,
            bottom: 0,
            width: 'calc(100% - 16px)',
            borderBottom: `1px solid ${theme.palette.neutralTertiaryAlt}`,
        },
    },
    mobileRootWithoutReminder: {
        height: '64px',
        ':before': {
            width: 'calc(100% - 72px)',
        },
    },
    expandedRoot: {
        paddingInline: '18px',
        justifyContent: 'center',
    },
    hightlightedDescription: {
        color: theme.palette.redDark,
    },
    expandedIconRoot: {
        columnGap: '18px',
    },
    expandedDescription: [
        Object(_styles_ellipsisStyles__WEBPACK_IMPORTED_MODULE_1__[/* ellipsisStyles */ "a"])(3),
        { marginTop: '3px !important', whiteSpace: 'normal', wordBreak: 'normal', maxLines: 3 },
    ],
}));


/***/ }),

/***/ "Flb/":
/*!************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-logger/src/common/interfaces.ts ***!
  \************************************************************************************************************************/
/*! exports provided: ScenarioColumns, TelemetryScenarioStatus, TelemetryScenarioStep */
/*! exports used: TelemetryScenarioStatus, TelemetryScenarioStep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ScenarioColumns */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TelemetryScenarioStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TelemetryScenarioStep; });
var ScenarioColumns;
(function (ScenarioColumns) {
    ScenarioColumns["Delta"] = "delta";
    ScenarioColumns["Elapsed"] = "elapsed";
    ScenarioColumns["Error"] = "error";
    ScenarioColumns["ErrorCode"] = "errorCode";
    ScenarioColumns["ScenarioName"] = "Scenario.Name";
    ScenarioColumns["ScenarioStatus"] = "Scenario.Status";
    ScenarioColumns["ScenarioStep"] = "Scenario.Step";
    ScenarioColumns["StartReason"] = "startReason";
    ScenarioColumns["StatusCode"] = "statusCode";
    ScenarioColumns["StepDelta"] = "stepDelta";
    ScenarioColumns["StepElapsed"] = "stepElapsed";
})(ScenarioColumns || (ScenarioColumns = {}));
var TelemetryScenarioStatus;
(function (TelemetryScenarioStatus) {
    TelemetryScenarioStatus["Abandoned"] = "abandoned";
    TelemetryScenarioStatus["Failure"] = "failure";
    TelemetryScenarioStatus["Incomplete"] = "incomplete";
    TelemetryScenarioStatus["Init"] = "init";
    TelemetryScenarioStatus["Success"] = "success";
    TelemetryScenarioStatus["Timeout"] = "timeout";
})(TelemetryScenarioStatus || (TelemetryScenarioStatus = {}));
var TelemetryScenarioStep;
(function (TelemetryScenarioStep) {
    TelemetryScenarioStep["Finish"] = "finish";
    TelemetryScenarioStep["Pause"] = "pause";
    TelemetryScenarioStep["Start"] = "start";
    TelemetryScenarioStep["Test"] = "test";
})(TelemetryScenarioStep || (TelemetryScenarioStep = {}));


/***/ }),

/***/ "G1AE":
/*!***************************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/ContentCopyResponseModal/ContentCopyResponseModal.styles.ts ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: useCopyResponseModalStyles, useContentStyles, useLinkPlaceTextFieldStyles */
/*! exports used: useContentStyles, useCopyResponseModalStyles, useLinkPlaceTextFieldStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useCopyResponseModalStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useContentStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return useLinkPlaceTextFieldStyles; });
/* harmony import */ var _styles_makeStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/makeStyles */ "oRLY");
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */

const useCopyResponseModalStyles = /* #__PURE__*/ Object(_styles_makeStyles__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])({
    main: {
        width: '25rem',
        height: '18rem',
        maxHeight: '100%',
    },
    scrollableContent: {
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        padding: '1.1875rem 2rem 2.5rem 2rem',
        boxSizing: 'border-box',
    },
});
const useContentStyles = /* #__PURE__*/ Object(_styles_makeStyles__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])(theme => ({
    header: {
        width: '100%',
        maxWidth: '100%',
        height: '1rem',
        display: 'flex',
        alignItems: 'center',
        '>.ms-Button--icon': {
            width: '1rem',
            height: '1rem',
        },
    },
    contents: {
        width: '100%',
        maxWidth: '100%',
        display: 'flex',
        alignItems: 'center',
        marginTop: '1rem',
    },
    copySuccessIcon: {
        width: '2.75rem',
        height: '2.75rem',
        display: 'flex',
        justifyContent: 'center',
    },
    copyTitle: {
        width: '100%',
        maxWidth: '100%',
        marginTop: '1rem !important',
        span: {
            color: theme.palette.black,
        },
    },
    copyContent: {
        width: '100%',
        maxWidth: '100%',
        flex: '0 0 auto',
        marginTop: '1.25rem !important',
    },
    linkPermissionSetting: {
        width: '21rem',
        height: '3rem',
        display: 'flex',
        alignItems: 'center',
        border: `1px solid ${theme.palette.neutralLight}`,
        borderRadius: '3px',
        marginTop: '1.25rem !important',
    },
    linkPermissionSettingIcon: {
        display: 'flex',
        justifyContent: 'center',
        width: '2rem',
        height: '2rem',
        margin: '0 0.5rem',
    },
    linkPermissionSettingTextStyles: [
        {
            width: '15rem',
            maxWidth: '15rem',
        },
    ],
}));
function useLinkPlaceTextFieldStyles() {
    return {
        fieldGroup: {
            width: '14.75rem',
            height: '1.875rem !important',
            '.ms-TextField-fieldGroup:hover': {
                borderWidth: '0 0 0 2px',
            },
            '.ms-TextField-fieldGroup:focus': {
                borderWidth: '0 0 0 2px',
            },
        },
    };
}


/***/ }),

/***/ "GCOY":
/*!***************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-people/src/PeopleSelect/PeopleSelect.utils.tsx ***!
  \***************************************************************************************************************************************/
/*! exports provided: extractSelectionFromPersonaProps, normalizeFilter, filterSuggestions, resolvePeopleSelectionItems, tryExpandPeopleSelection, useMapPeopleSelectionToPersonaProps */
/*! exports used: extractSelectionFromPersonaProps, filterSuggestions, normalizeFilter, resolvePeopleSelectionItems, tryExpandPeopleSelection, useMapPeopleSelectionToPersonaProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return extractSelectionFromPersonaProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return normalizeFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return filterSuggestions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return resolvePeopleSelectionItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return tryExpandPeopleSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return useMapPeopleSelectionToPersonaProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PeopleCoin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PeopleCoin */ "KDg/");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "DaYX");
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
 * Extracts the selection from persona props.
 *
 * @param props The persona props.
 * @returns The selection.
 */
function extractSelectionFromPersonaProps(props) {
    return props.selection;
}
/**
 * Normalizes filter text.
 *
 * @param filter The filter text to normalize.
 * @returns The normalized filter text.
 * @example normalizeFilter('') // ''
 * @example normalizeFilter('  ') // ''
 * @example normalizeFilter('Ruijun Gao') // 'ruijun gao'
 * @example normalizeFilter('  Ruijun Gao  ') // 'ruijun gao'
 */
function normalizeFilter(filter) {
    return filter.trim().toLowerCase();
}
/**
 * Filters suggestions based on selections.
 *
 * @param selections The selections to filter suggestions against.
 * @param suggestions The suggestions to filter.
 * @returns The filtered suggestions.
 * @example filterSuggestions([], []) // []
 * @example filterSuggestions([{ id: '1', name: 'Ruijun Gao' }], [{ id: '1', name: 'Ruijun Gao' }]) // []
 * @example filterSuggestions([{ id: '1', name: 'Ruijun Gao' }], [{ id: '2', name: 'Ruijun Gao' }]) // [{ id: '1', name: 'Ruijun Gao' }]
 */
function filterSuggestions(suggestions, selections) {
    return suggestions.filter(suggestion => !selections.some(selection => selection.id === suggestion.id));
}
/**
 * Resolves the items of a selection in-place if it is resolvable and not resolved.
 *
 * @param selection The selection to resolve.
 * @returns A promise that resolves when the selection is resolved.
 */
function resolvePeopleSelectionItems(selection) {
    return __awaiter(this, void 0, void 0, function* () {
        if (selection.type === _types__WEBPACK_IMPORTED_MODULE_2__[/* PeopleSelectionType */ "a"].User || !selection.resolveItems)
            return;
        if (!selection.items)
            selection.items = selection.resolveItems();
        if (!Array.isArray(selection.items))
            selection.items = yield selection.items;
    });
}
/**
 * Expands a selection in selections into multiple selections if it is expandable.
 *
 * @param selections The selections.
 * @param selection The selection to expand.
 * @returns The new selections if the selection is expanded, otherwise undefined.
 */
function tryExpandPeopleSelection(selections, selection) {
    if (selection.type === _types__WEBPACK_IMPORTED_MODULE_2__[/* PeopleSelectionType */ "a"].User || !selection.expandable || !Array.isArray(selection.items))
        return;
    const index = selections.indexOf(selection);
    if (index < 0)
        return;
    const newSelections = [...selections];
    const absentSelections = filterSuggestions(selection.items, selections);
    const patchedSelections = absentSelections.map(absentSelection => (Object.assign(Object.assign({}, absentSelection), { unremovable: absentSelection.unremovable || selection.unremovable })));
    newSelections.splice(index, 1, ...patchedSelections);
    return newSelections;
}
/**
 * A hook that creates a function that maps a selection to a persona props.
 * The function will memoize the result based on the describeSuggestion function.
 *
 * @param describeSuggestion A function that describes a suggestion, used to generate the secondary text.
 * @returns A function that maps a selection to a persona props.
 */
function useMapPeopleSelectionToPersonaProps({ onRetrieveIcon, describeSuggestion, }) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(selection => ({
        key: selection.id,
        text: selection.name,
        secondaryText: describeSuggestion === null || describeSuggestion === void 0 ? void 0 : describeSuggestion(selection),
        selection,
        onRenderPersonaCoin: props => (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PeopleCoin__WEBPACK_IMPORTED_MODULE_1__[/* PeopleCoin */ "a"], Object.assign({}, props, { selection: selection, onRetrieveIcon: onRetrieveIcon, coinSize: 32 }))),
    }), [describeSuggestion, onRetrieveIcon]);
}


/***/ }),

/***/ "HKfi":
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/CommonLoadingIndicator/index.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: CommonLoadingIndicator */
/*! exports used: CommonLoadingIndicator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _CommonLoadingIndicator_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommonLoadingIndicator.component */ "/fnU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _CommonLoadingIndicator_component__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */



/***/ }),

/***/ "I06U":
/*!********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-metaos-host/src/wrappers.ts ***!
  \********************************************************************************************************************/
/*! exports provided: getTeamsContext, getAuthToken, registerOnThemeChangeHandler, registerBeforeUnloadHandler, notifyAppInitializationSuccess, notifyAppInitializationFailure, executeDeepLink, openChat, getAuthenticationUser, setNavBarMenu, resizeTaskModule, submitTask, startTask */
/*! exports used: executeDeepLink, getAuthToken, getTeamsContext, notifyAppInitializationFailure, notifyAppInitializationSuccess, registerBeforeUnloadHandler, registerOnThemeChangeHandler, resizeTaskModule, setNavBarMenu, submitTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getTeamsContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getAuthToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return registerOnThemeChangeHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return registerBeforeUnloadHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return notifyAppInitializationSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return notifyAppInitializationFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return executeDeepLink; });
/* unused harmony export openChat */
/* unused harmony export getAuthenticationUser */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return setNavBarMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return resizeTaskModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return submitTask; });
/* unused harmony export startTask */
/* harmony import */ var _microsoft_teams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/teams-js */ "U9X9");
/* harmony import */ var _microsoft_teams_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/teams-js */ "cIvH");
/* harmony import */ var _microsoft_teams_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/teams-js */ "4Upr");
/* harmony import */ var _microsoft_teams_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/teams-js */ "bfgZ");
/* harmony import */ var _microsoft_teams_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/teams-js */ "U1hN");
/* harmony import */ var _microsoft_teams_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/teams-js */ "2Phd");
/* harmony import */ var _fallback__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fallback */ "7kNt");
/* harmony import */ var _themes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./themes */ "8C+a");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils */ "ocL3");




function getTeamsContext() {
    const result = Object(_utils__WEBPACK_IMPORTED_MODULE_8__[/* ensureByTeamsInitialization */ "a"])(_microsoft_teams_js__WEBPACK_IMPORTED_MODULE_0__[/* app */ "a"].getContext);
    return Object(_fallback__WEBPACK_IMPORTED_MODULE_6__[/* fallbackBySelector */ "a"])(result, data => data.getContext);
}
function getAuthToken(resources) {
    const parameters = {
        resources: typeof resources === 'string' ? [resources, 'openid', 'Calls.JoinGroupCall.All'] : resources,
    };
    const result = Object(_utils__WEBPACK_IMPORTED_MODULE_8__[/* ensureByTeamsInitialization */ "a"])(() => _microsoft_teams_js__WEBPACK_IMPORTED_MODULE_1__[/* authentication */ "a"].getAuthToken(parameters));
    return Object(_fallback__WEBPACK_IMPORTED_MODULE_6__[/* fallbackBySelector */ "a"])(result, data => data.getAuthToken);
}
function registerOnThemeChangeHandler(handler) {
    const coercedHandler = theme => handler(Object(_themes__WEBPACK_IMPORTED_MODULE_7__[/* coerceTeamsTheme */ "a"])(theme));
    return Object(_utils__WEBPACK_IMPORTED_MODULE_8__[/* ensureByTeamsInitialization */ "a"])(() => _microsoft_teams_js__WEBPACK_IMPORTED_MODULE_0__[/* app */ "a"].registerOnThemeChangeHandler(coercedHandler));
}
const registerBeforeUnloadHandler = Object(_utils__WEBPACK_IMPORTED_MODULE_8__[/* guardByTeamsInitialization */ "b"])(_microsoft_teams_js__WEBPACK_IMPORTED_MODULE_2__[/* teamsCore */ "a"].registerBeforeUnloadHandler);
const notifyAppInitializationSuccess = Object(_utils__WEBPACK_IMPORTED_MODULE_8__[/* guardByTeamsInitialization */ "b"])(_microsoft_teams_js__WEBPACK_IMPORTED_MODULE_0__[/* app */ "a"].notifySuccess);
const notifyAppInitializationFailure = Object(_utils__WEBPACK_IMPORTED_MODULE_8__[/* guardByTeamsInitialization */ "b"])(_microsoft_teams_js__WEBPACK_IMPORTED_MODULE_0__[/* app */ "a"].notifyFailure);
const executeDeepLink = Object(_utils__WEBPACK_IMPORTED_MODULE_8__[/* guardByTeamsInitialization */ "b"])(_microsoft_teams_js__WEBPACK_IMPORTED_MODULE_0__[/* app */ "a"].openLink);
const openChat = Object(_utils__WEBPACK_IMPORTED_MODULE_8__[/* guardByTeamsInitialization */ "b"])(_microsoft_teams_js__WEBPACK_IMPORTED_MODULE_3__[/* chat */ "a"].openChat);
// export const openChat = guardByTeamsInitialization();
const getAuthenticationUser = Object(_utils__WEBPACK_IMPORTED_MODULE_8__[/* guardByTeamsInitialization */ "b"])(_microsoft_teams_js__WEBPACK_IMPORTED_MODULE_1__[/* authentication */ "a"].getUser);
const setNavBarMenu = Object(_utils__WEBPACK_IMPORTED_MODULE_8__[/* guardByTeamsInitialization */ "b"])(_microsoft_teams_js__WEBPACK_IMPORTED_MODULE_4__[/* menus */ "a"].setNavBarMenu);
const resizeTaskModule = Object(_utils__WEBPACK_IMPORTED_MODULE_8__[/* guardByTeamsInitialization */ "b"])(_microsoft_teams_js__WEBPACK_IMPORTED_MODULE_5__[/* dialog */ "a"].update.resize);
const submitTask = Object(_utils__WEBPACK_IMPORTED_MODULE_8__[/* guardByTeamsInitialization */ "b"])(_microsoft_teams_js__WEBPACK_IMPORTED_MODULE_5__[/* dialog */ "a"].url.submit);
const startTask = Object(_utils__WEBPACK_IMPORTED_MODULE_8__[/* guardByTeamsInitialization */ "b"])(_microsoft_teams_js__WEBPACK_IMPORTED_MODULE_5__[/* dialog */ "a"].url.open);


/***/ }),

/***/ "IE5g":
/*!*****************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/EmptyState/EmptyState.tsx ***!
  \*****************************************************************************************************************************/
/*! exports provided: EmptyState */
/*! exports used: EmptyState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmptyState; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react */ "ogYq");
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "ZOo+");
/* harmony import */ var _EmptyState_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EmptyState.styles */ "6nSl");
/* harmony import */ var _turtle_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./turtle.svg */ "5Ejj");





function EmptyState({ title, message, image = _turtle_svg__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], onAction, actionText, children, className, height, color = '#000', btnColor = '#242424', background = '#F5F5F5', btnBackground = '#FFF', role, titleFontSize = 18, }) {
    const titleId = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => `dialogTitle${Math.random()}`.replace('.', '-'), []);
    const descId = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => `dialogDesc${Math.random()}`.replace('.', '-'), []);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* mergeStyles */ "F"])(_EmptyState_styles__WEBPACK_IMPORTED_MODULE_3__[/* styles */ "a"].root, { height, background, color }, className) },
        image && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { "aria-hidden": true }, typeof image === 'string' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { alt: '', "aria-hidden": true, src: image }) : image)),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { role: role, "aria-atomic": true, "aria-labelledby": title && titleId, "aria-describedby": message && descId, style: _EmptyState_styles__WEBPACK_IMPORTED_MODULE_3__[/* styles */ "a"].info },
            title && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", { id: titleId, style: { fontSize: typeof titleFontSize === 'number' ? Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_2__[/* rem */ "b"])(titleFontSize) : titleFontSize } }, title)),
            message && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", { id: descId, style: _EmptyState_styles__WEBPACK_IMPORTED_MODULE_3__[/* styles */ "a"].message }, message))),
        actionText && onAction && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { "aria-hidden": !title, autoFocus: true, style: Object.assign(Object.assign({}, _EmptyState_styles__WEBPACK_IMPORTED_MODULE_3__[/* styles */ "a"].btn), { background: btnBackground, color: btnColor, cursor: 'pointer' }), onClick: onAction }, actionText)),
        children));
}


/***/ }),

/***/ "IG8A":
/*!*************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/TaskModuleV2/index.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: TaskModuleV2, useTaskModuleV2Styles, useTaskModuleContentCustomizedStyles, useTaskModuleCategorizedTemplateStoreStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _TaskModuleV2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskModuleV2.component */ "oEFf");
/* unused harmony reexport * */
/* harmony import */ var _TaskModuleV2_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskModuleV2.styles */ "Qvt5");
/* unused harmony reexport * */




/***/ }),

/***/ "JIAz":
/*!*****************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-people/src/PeopleList/PeopleList.tsx ***!
  \*****************************************************************************************************************************/
/*! exports provided: PeopleList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PeopleList */
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "ogYq");
/* harmony import */ var _fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react-hooks */ "EO0U");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PeopleCoin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PeopleCoin */ "KDg/");
/* harmony import */ var _PeopleList_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PeopleList.styles */ "aVEE");
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





const PeopleList = (_a) => {
    var { label, selections, formatName, formatDescription, onRetrieveIcon, onItemClick, labelClassName, listClassName, itemClassName } = _a, props = __rest(_a, ["label", "selections", "formatName", "formatDescription", "onRetrieveIcon", "onItemClick", "labelClassName", "listClassName", "itemClassName"]);
    const labelId = Object(_fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useId */ "a"])('label');
    const styles = Object(_PeopleList_styles__WEBPACK_IMPORTED_MODULE_4__[/* usePeopleListStyles */ "a"])();
    return (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object.assign({}, props),
        label && (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { id: labelId, className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* mergeStyles */ "F"])(styles.label, labelClassName) }, label)),
        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* mergeStyles */ "F"])(styles.list, listClassName), role: 'list', "aria-labelledby": labelId }, selections.map(selection => {
            var _a;
            return (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { key: selection.id, className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* mergeStyles */ "F"])(styles.item, itemClassName), role: 'listitem', onClick: () => onItemClick === null || onItemClick === void 0 ? void 0 : onItemClick(selection) },
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_PeopleCoin__WEBPACK_IMPORTED_MODULE_3__[/* PeopleCoin */ "a"], { selection: selection, onRetrieveIcon: onRetrieveIcon, coinSize: 24 }),
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { className: styles.text },
                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, (_a = formatName === null || formatName === void 0 ? void 0 : formatName(selection)) !== null && _a !== void 0 ? _a : selection.name),
                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, formatDescription === null || formatDescription === void 0 ? void 0 : formatDescription(selection)))));
        }))));
};


/***/ }),

/***/ "Jj2f":
/*!***********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/services-core/src/interceptors/pooling.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: createPoolingInterceptor, KeyedPromisePool */
/*! exports used: KeyedPromisePool, createPoolingInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createPoolingInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyedPromisePool; });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "XMOn");
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
 * Create a service interceptor that pools pending promises for requests and reuses them.
 *
 * @property test Determines whether a request should be pooled.
 * @property selector A function that selects a key from a request.
 * @property pool A map of pending promises.
 * @returns An interceptor.
 */
function createPoolingInterceptor({ test = _utilities__WEBPACK_IMPORTED_MODULE_0__[/* isGet */ "a"], pool }) {
    return (request, proceed) => __awaiter(this, void 0, void 0, function* () {
        if (!test(request))
            return proceed(request);
        return pool.acquire(request, () => proceed(request));
    });
}
/**
 * A promise pool that pools pending promises for requests and reuses them based on a key.
 */
class KeyedPromisePool {
    /**
     * Creates an instance of MemoryPromisePool.
     *
     * @param selector A function that selects a key from a request.
     */
    constructor(selector = _utilities__WEBPACK_IMPORTED_MODULE_0__[/* urlSelector */ "d"]) {
        this.selector = selector;
        this.pendings = new Map();
    }
    acquire(request, fire) {
        return __awaiter(this, void 0, void 0, function* () {
            const key = this.selector(request);
            const pending = this.pendings.get(key);
            if (pending)
                return (yield pending).clone();
            const fired = fire();
            this.pendings.set(key, fired);
            try {
                return yield fired;
            }
            finally {
                this.pendings.delete(key);
            }
        });
    }
}


/***/ }),

/***/ "KDg/":
/*!***********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-people/src/PeopleCoin/index.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: PeopleCoin */
/*! exports used: PeopleCoin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _PeopleCoin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PeopleCoin */ "EDS4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _PeopleCoin__WEBPACK_IMPORTED_MODULE_0__["a"]; });




/***/ }),

/***/ "KuCH":
/*!***************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/CommonIcon/CommonIcon.component.tsx ***!
  \***************************************************************************************************************************************/
/*! exports provided: CommonIconSize, CommonIcon */
/*! exports used: CommonIcon, CommonIconSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CommonIconSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react */ "ogYq");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react */ "YGsJ");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react */ "l3kg");
/* harmony import */ var _addressbook_utilities_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @addressbook/utilities-hooks */ "jG8U");
/* harmony import */ var _CommonIcon_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CommonIcon.styles */ "fKKw");
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */




/**
 * size of icon container
 */
var CommonIconSize;
(function (CommonIconSize) {
    CommonIconSize["Size28"] = "icon-size-28";
    CommonIconSize["Size32"] = "icon-size-32";
    CommonIconSize["Size40"] = "icon-size-40";
    CommonIconSize["Size44"] = "icon-size-44";
    CommonIconSize["Size48"] = "icon-size-48";
    CommonIconSize["Size64"] = "icon-size-64";
    CommonIconSize["Size80"] = "icon-size-80";
})(CommonIconSize || (CommonIconSize = {}));
const CommonIcon = ({ icon, iconColor = 'white', iconBackgroundColor, size = CommonIconSize.Size32, styles = {}, title, titleId, titleAs, description, descriptionId, onIconClick, editIconAriaLabel, className, titleTrailingItem, rightItem, }) => {
    const defaultStyles = Object(_CommonIcon_styles__WEBPACK_IMPORTED_MODULE_5__[/* useCommonIconStyles */ "a"])();
    const ref = Object(_addressbook_utilities_hooks__WEBPACK_IMPORTED_MODULE_4__[/* useKeyboardInvoke */ "a"])();
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* mergeStyles */ "F"])(defaultStyles.root, styles.root, className) },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* mergeStyles */ "F"])(size, defaultStyles.content, styles.content) },
            icon && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { role: onIconClick ? 'button' : 'presentation', tabIndex: onIconClick ? 0 : undefined, onClick: onIconClick, ref: ref, "aria-label": onIconClick && editIconAriaLabel, className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* mergeStyles */ "F"])(defaultStyles.iconContainer, iconBackgroundColor && {
                    backgroundColor: iconBackgroundColor,
                }, styles.iconContainer) },
                typeof icon === 'string' ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__[/* Icon */ "a"], { className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* mergeStyles */ "F"])(defaultStyles.icon, {
                        color: iconColor,
                        fill: iconColor,
                    }), iconName: icon })) : (icon),
                onIconClick && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__[/* Icon */ "a"], { className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* mergeStyles */ "F"])(defaultStyles.editIcon, styles.editIcon), iconName: 'Edit' })))),
            (title || description) && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* mergeStyles */ "F"])(defaultStyles.textContainer, styles.textarea) },
                title && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: defaultStyles.titleContainer },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "a"], { id: titleId, title: title, role: 'presentation', 
                        // prevent screen reader from reading the title twice (group) in MacOS
                        // about presentation role: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_presentation_role
                        className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* mergeStyles */ "F"])(defaultStyles.title, styles.title), as: titleAs }, title),
                    titleTrailingItem)),
                description &&
                    (typeof description === 'string' ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "a"], { id: descriptionId, title: description, role: 'presentation', className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* mergeStyles */ "F"])(defaultStyles.description, styles.description) }, description)) : (description))))),
        rightItem));
};


/***/ }),

/***/ "LCdI":
/*!***************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/ConfirmationDialog/ConfirmationDialog.styles.ts ***!
  \***************************************************************************************************************************************************/
/*! exports provided: useDialogStyles, useContentStyles */
/*! exports used: useContentStyles, useDialogStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useDialogStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useContentStyles; });
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "n4Dn");
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */

const useDialogStyles = Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])(() => {
    return {
        main: {
            maxWidth: '600px !important',
            width: '600px !important',
            margin: '0 5px',
        },
    };
});
const useContentStyles = Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])(() => ({
    footerButtons: {
        display: 'flex',
        flexDirection: 'row-reverse',
        flexWrap: 'nowrap',
        whiteSpace: 'nowrap',
        justifyContent: 'space-between',
        '.ms-Dialog-actions': {
            width: '100%',
        },
        '.ms-Dialog-actionsRight': {
            width: '100%',
        },
        '.ms-Dialog-action:first-child:nth-last-child(1)': {
            maxWidth: '100%',
            display: 'inline-block',
        },
        '.ms-Dialog-action:first-child:nth-last-child(2), .ms-Dialog-action:first-child:nth-last-child(2) ~ .ms-Dialog-action': {
            maxWidth: '50%',
            display: 'inline-block',
        },
        '.ms-Dialog-action:first-child:nth-last-child(3), .ms-Dialog-action:first-child:nth-last-child(3) ~ .ms-Dialog-action': {
            maxWidth: '33.3%',
            display: 'inline-block',
        },
        '.ms-Button': {
            maxWidth: '100%',
        },
        '.ms-Button-flexContainer': {
            maxWidth: '100%',
        },
        '.ms-Button-textContainer': {
            maxWidth: '100%',
        },
    },
    button: {
        height: '28px',
        padding: 0,
        '.ms-Button-label': {
            maxWidth: '100%',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            wordBreak: 'break-all',
            height: '1rem',
        },
        flexFlow: '1',
        flexShrink: '0',
    },
    primaryButton: {
        borderRadius: '5px',
    },
}));


/***/ }),

/***/ "Lwxb":
/*!***********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/CommonIcon/index.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: CommonIconSize, CommonIcon */
/*! exports used: CommonIcon, CommonIconSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _CommonIcon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommonIcon.component */ "KuCH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _CommonIcon_component__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _CommonIcon_component__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */



/***/ }),

/***/ "McEG":
/*!***************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-fluentui-teams-theme/src/teams/teams-colors.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: CoreColors, DarkColors, ContrastColors, DefaultV2Colors, DarkV2Colors, SecondaryColors, BoxShadowColors, appWhiteAlpha10 */
/*! exports used: BoxShadowColors, ContrastColors, CoreColors, DarkColors, DarkV2Colors, DefaultV2Colors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CoreColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DarkColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ContrastColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return DefaultV2Colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return DarkV2Colors; });
/* unused harmony export SecondaryColors */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxShadowColors; });
/* unused harmony export appWhiteAlpha10 */
/* istanbul ignore file */
// Default theme colors
// eslint-disable-next-line @typescript-eslint/no-namespace
var CoreColors;
(function (CoreColors) {
    CoreColors.appBlack = '#252423';
    CoreColors.appBlackAlpha10 = '#e8e7e6';
    CoreColors.appWhite = '#fff';
    CoreColors.appWhiteAlpha10 = 'rgba(255, 255, 255, 0.1)';
    CoreColors.appBrand02 = '#33344a';
    CoreColors.appBrand04 = '#464775';
    CoreColors.appBrand06 = '#6264a7';
    CoreColors.appBrand08 = '#8b8cc7';
    CoreColors.appBrand12 = '#bdbde6';
    CoreColors.appBrand14 = '#e2e2f6';
    CoreColors.appBrand16 = '#f4f4fc';
    CoreColors.appBrand00 = '#6264a7'; // Does not swap in dark theme
    CoreColors.appGray02 = '#484644';
    CoreColors.appGray03 = '#605e5c';
    CoreColors.appGray04 = '#979593';
    CoreColors.appGray06 = '#c8c6c4';
    CoreColors.appGray08 = '#e1dfdd';
    CoreColors.appGray09 = '#edebe9';
    CoreColors.appGray10 = '#f3f2f1';
    CoreColors.appGray12 = 'rgba(37, 36, 35, 0.05)';
    CoreColors.appGray14 = '#faf9f8';
    CoreColors.appRed = '#eeacb2';
    CoreColors.appRedLight = '#fdf6f6';
    CoreColors.appRedDark = '#b10e1c';
    CoreColors.appGreen = '#9fd89f';
    CoreColors.appGreenLight = '#f1faf1';
    CoreColors.appGreenDark = '#0e700e';
    CoreColors.overlayBackground = 'rgba(37, 36, 35, .75)';
    CoreColors.placeHolderTextColor = '#616161';
    CoreColors.pickerPersonaContainerBackground = '#e9eaf6';
})(CoreColors || (CoreColors = {}));
// Dark theme colors
// eslint-disable-next-line @typescript-eslint/no-namespace
var DarkColors;
(function (DarkColors) {
    DarkColors.appBlack = '#fff';
    DarkColors.appBlackAlpha10 = 'rgba(255, 255, 255, 0.1)';
    DarkColors.appWhite = '#201f1f';
    DarkColors.appWhiteAlpha10 = 'rgba(255, 255, 255, 0.1)';
    DarkColors.appBrand02 = '#e2e3f6';
    DarkColors.appBrand04 = '#bdbde6';
    DarkColors.appBrand06 = '#a6a7dc';
    DarkColors.appBrand08 = '#8b8cc7';
    DarkColors.appBrand12 = '#6264a7';
    DarkColors.appBrand14 = '#464775';
    DarkColors.appBrand16 = '#33344a';
    DarkColors.appGray02 = '#c8c6c4';
    DarkColors.appGray03 = '#b3b0ad';
    DarkColors.appGray04 = '#8a8886';
    DarkColors.appGray06 = '#605e5c';
    DarkColors.appGray08 = '#484644';
    DarkColors.appGray09 = '#3b3a3a';
    DarkColors.appGray10 = '#2d2c2c';
    DarkColors.appGray12 = 'rgba(255, 255, 255, 0.05)';
    DarkColors.appGray14 = '#292828';
    DarkColors.appRed = '#dc626d';
    DarkColors.appRedLight = '#3b0509';
    DarkColors.appRedDark = '#c50f1f';
    DarkColors.appGreen = '#107c10';
    DarkColors.appGreenLight = '#052505';
    DarkColors.appGreenDark = '#54b054';
    DarkColors.redTextDark = '#f9526b';
    DarkColors.overlayBackground = 'rgba(37,36,35,.75)';
    DarkColors.appPersonaBackground = '#3B3A3A';
    DarkColors.pickerPersonaContainerBackground = '#323348';
})(DarkColors || (DarkColors = {}));
// Contrast theme colors
// eslint-disable-next-line @typescript-eslint/no-namespace
var ContrastColors;
(function (ContrastColors) {
    ContrastColors.appBlack = '#fff';
    ContrastColors.appBlackAlpha10 = 'rgba(255, 255, 255, 0.1)';
    ContrastColors.appWhite = '#000';
    ContrastColors.appWhiteAlpha10 = 'rgba(255, 255, 255, 0.1)';
    ContrastColors.NeutralForeground3 = '#ADADAD';
    ContrastColors.appBrand02 = '#000';
    ContrastColors.appBrand04 = '#ffff00';
    ContrastColors.appBrand06 = '#00ebff';
    ContrastColors.appBrand08 = '#ffff00';
    ContrastColors.appBrand12 = '#ffff00';
    ContrastColors.appBrand14 = '#000';
    ContrastColors.appBrand16 = '#000';
    ContrastColors.appGray02 = '#fff';
    ContrastColors.appGray03 = '#000';
    ContrastColors.appGray04 = '#fff';
    ContrastColors.appGray06 = '#000';
    ContrastColors.appGray08 = '#fff';
    ContrastColors.appGray09 = '#000';
    ContrastColors.appGray10 = '#000';
    ContrastColors.appGray12 = '#fff';
    ContrastColors.appGray14 = '#000';
    ContrastColors.appGreenContrast = '#30f42c';
    ContrastColors.overlayBackground = 'rgba(0,0,0,.75)';
    ContrastColors.appRed = '#fff';
    ContrastColors.appRedLight = '#000';
    ContrastColors.appRedDark = '#fff';
    ContrastColors.appGreen = '#fff';
    ContrastColors.appGreenLight = '#000';
    ContrastColors.appGreenDark = '#fff';
    ContrastColors.pickerPersonaContainerBackground = '#ffff00';
})(ContrastColors || (ContrastColors = {}));
// Default V2 theme colors
// eslint-disable-next-line @typescript-eslint/no-namespace
var DefaultV2Colors;
(function (DefaultV2Colors) {
    DefaultV2Colors.appBlack = '#242424';
    DefaultV2Colors.appBlackAlpha10 = 'rgba(255, 255, 255, 0.1)'; // Missing
    DefaultV2Colors.appWhite = '#fff';
    DefaultV2Colors.appWhiteAlpha10 = 'rgba(255, 255, 255, 0.1)'; // Missing
    DefaultV2Colors.appBrand02 = '#2F2F4A';
    DefaultV2Colors.appBrand04 = '#383966';
    DefaultV2Colors.appBrand05 = '#444791';
    DefaultV2Colors.appBrand06 = '#5B5FC7';
    DefaultV2Colors.appBrand08 = '#9092c1';
    DefaultV2Colors.appBrand12 = '#a5a7cf';
    DefaultV2Colors.appBrand14 = '#bbbcdd';
    DefaultV2Colors.appBrand16 = '#E8EBFA';
    DefaultV2Colors.appGray02 = '#424242';
    DefaultV2Colors.appGray03 = '#616161';
    DefaultV2Colors.appGray04 = '#8a8a8a';
    DefaultV2Colors.appGray06 = '#bdbdbd';
    DefaultV2Colors.appGray08 = '#d1d1d1';
    DefaultV2Colors.appGray09 = '#ebebeb';
    DefaultV2Colors.appGray10 = '#f0f0f0';
    DefaultV2Colors.appGray12 = '#f5f5f5';
    DefaultV2Colors.appGray14 = '#fafafa';
    DefaultV2Colors.appRed = '#b10e1c';
    DefaultV2Colors.appRedLight = '#fdf6f6';
    DefaultV2Colors.appRedDark = '#eeacb2';
    DefaultV2Colors.appGreen = '#9fd89f';
    DefaultV2Colors.appGreenLight = '#f1faf1';
    DefaultV2Colors.appGreenDark = '#0e700e';
    DefaultV2Colors.overlayBackground = 'rgba(37,36,35,.75)'; // Missing
})(DefaultV2Colors || (DefaultV2Colors = {}));
// Dark V2 theme colors
// eslint-disable-next-line @typescript-eslint/no-namespace
var DarkV2Colors;
(function (DarkV2Colors) {
    DarkV2Colors.appBlack = '#fff';
    DarkV2Colors.appBlackAlpha10 = 'rgba(255, 255, 255, 0.1)'; // Missing
    DarkV2Colors.appWhite = '#292929';
    DarkV2Colors.appWhiteAlpha10 = 'rgba(255, 255, 255, 0.1)'; // Missing
    DarkV2Colors.appBrand02 = '#C5CBFA';
    DarkV2Colors.appBrand04 = '#ACB3FA';
    DarkV2Colors.appBrand05 = '#444791';
    DarkV2Colors.appBrand06 = '#9399F5';
    DarkV2Colors.appBrand08 = '#7A80EB';
    DarkV2Colors.appBrand12 = '#5B5FC7';
    DarkV2Colors.appBrand14 = '#444791';
    DarkV2Colors.appBrand16 = '#2F2F4A';
    DarkV2Colors.appGray02 = '#d6d6d6';
    DarkV2Colors.appGray03 = '#adadad';
    DarkV2Colors.appGray04 = '#8a8a8a';
    DarkV2Colors.appGray06 = '#666';
    DarkV2Colors.appGray08 = '#5c5c5c';
    DarkV2Colors.appGray09 = '#3d3d3d';
    DarkV2Colors.appGray10 = '#141414';
    DarkV2Colors.appGray12 = '#1f1f1f';
    DarkV2Colors.appGray14 = '#242424';
    DarkV2Colors.appRed = '#dc626d';
    DarkV2Colors.appRedLight = '#3b0509';
    DarkV2Colors.appRedDark = '#c50f1f';
    DarkV2Colors.appGreen = '#107c10';
    DarkV2Colors.appGreenLight = '#052505';
    DarkV2Colors.appGreenDark = '#54b054';
    DarkV2Colors.overlayBackground = 'rgba(37,36,35,.75)'; // Missing
})(DarkV2Colors || (DarkV2Colors = {}));
// eslint-disable-next-line @typescript-eslint/no-namespace
var SecondaryColors;
(function (SecondaryColors) {
    SecondaryColors.appOrange01 = '#833122';
    SecondaryColors.appOrange02 = '#a33d2a';
    SecondaryColors.appOrange03 = '#bd432c';
    SecondaryColors.appOrange04 = '#cc4a31';
    SecondaryColors.appOrange = '#e97548';
    SecondaryColors.appOrange14 = '#efdbd3';
    SecondaryColors.appOrange16 = '#f9ecea';
    SecondaryColors.appGreen = '#92c353';
    SecondaryColors.appGreen04 = '#237b4b';
    SecondaryColors.grey2 = '#050505';
    SecondaryColors.grey6 = '#0f0f0f';
    SecondaryColors.grey10 = '#1a1a1a';
    SecondaryColors.grey18 = '#2e2e2e';
    SecondaryColors.grey20 = '#333333';
    SecondaryColors.grey22 = '#383838';
    SecondaryColors.grey88 = '#e0e0e0';
})(SecondaryColors || (SecondaryColors = {}));
// eslint-disable-next-line @typescript-eslint/no-namespace
var BoxShadowColors;
(function (BoxShadowColors) {
    BoxShadowColors.boxShadowColor = 'rgba(0,0,0,.1)';
    BoxShadowColors.boxShadowColorDark = 'rgba(0,0,0,.25)';
    BoxShadowColors.boxShadowColorDarkV2 = 'rgba(0,0,0,.3)';
    BoxShadowColors.boxShadowColorDarker = 'rgba(0,0,0,.5)';
})(BoxShadowColors || (BoxShadowColors = {}));
const appWhiteAlpha10 = 'rgba(37, 36, 36, 0.1)';


/***/ }),

/***/ "MpPh":
/*!*****************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/utilities-interceptors/src/utils.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: applyInterceptor, composeInterceptors */
/*! exports used: applyInterceptor, composeInterceptors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return applyInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return composeInterceptors; });
/**
 * Apply an interceptor to a target.
 *
 * @param interceptor The interceptor to apply.
 * @param target The target to apply the interceptor to.
 * @returns The target with the interceptor applied.
 */
function applyInterceptor(interceptor, target) {
    return param => interceptor(param, target);
}
/**
 * Compose multiple interceptors into a single interceptor.
 * The interceptors are called in order, with the next interceptor as the proceed function.
 *
 * @param interceptors The interceptors to compose.
 * @returns The composed interceptor.
 */
function composeInterceptors(interceptors) {
    return interceptors.reduce(composeInterceptorsInternal);
}
/**
 * Compose two interceptors into a single interceptor.
 *
 * @param current The interceptor to call first.
 * @param next The interceptor to call second.
 * @returns The composed interceptor.
 */
function composeInterceptorsInternal(current, next) {
    return (param, proceed) => current(param, applyInterceptor(next, proceed));
}


/***/ }),

/***/ "Mzmc":
/*!************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/services-graph/src/resources/drive-item.ts ***!
  \************************************************************************************************************************/
/*! exports provided: GraphDriveItemResource */
/*! exports used: GraphDriveItemResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphDriveItemResource; });
/* harmony import */ var _addressbook_services_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/services-core */ "jTXW");
/* harmony import */ var _addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @addressbook/utilities-core */ "1hmm");
/* harmony import */ var _thumbnail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./thumbnail */ "AuCu");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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



/**
 * The drive item resource.
 *
 * @see https://learn.microsoft.com/graph/api/resources/driveitem
 */
class GraphDriveItemResource {
    constructor(operation, locator) {
        this.operation = operation;
        this.locator = locator;
    }
    /**
     * Navigates to the root of the drive.
     *
     * @param index The thumbnail index.
     * @param size The thumbnail size.
     * @returns The thumbnail resource.
     */
    thumbnails(index, size) {
        return new _thumbnail__WEBPACK_IMPORTED_MODULE_2__[/* GraphThumbnailResource */ "a"](this.operation, this.locator.extend('thumbnails', index.toString(), size));
    }
    /**
     * Gets the id of the drive item.
     *
     * @param signal The abort signal.
     * @returns The id of the drive item, or an empty string if the drive item does not exist.
     * @see https://learn.microsoft.com/graph/api/driveitem-get
     */
    getId(signal) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `/v1.0/${this.locator.path}?$select=id`;
            try {
                const response = yield this.operation.requestJson(url, { signal });
                return response.id;
            }
            catch (error) {
                if (error instanceof _addressbook_services_core__WEBPACK_IMPORTED_MODULE_0__[/* ServiceOperationError */ "d"] && error.response.status === 404)
                    return;
                throw error;
            }
        });
    }
    /**
     * Shares the drive item.
     *
     * @param signal The abort signal.
     * @returns The sharing link.
     * @see https://learn.microsoft.com/graph/api/driveitem-createlink
     */
    share(signal) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const url = `/v1.0/${this.locator.path}/createLink`;
            const response = yield this.operation.requestJson(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ type: 'view', scope: 'organization' }),
                signal,
            });
            return (_b = (_a = response.link) === null || _a === void 0 ? void 0 : _a.webUrl) !== null && _b !== void 0 ? _b : '';
        });
    }
    /**
     * Creates a folder under the drive item.
     *
     * @param name The folder name.
     * @param signal The abort signal.
     * @returns The id of the created folder.
     * @see https://learn.microsoft.com/graph/api/driveitem-post-children
     */
    createFolder(name, signal) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const url = `/v1.0/${this.locator.path}/children`;
            const response = yield this.operation.requestJson(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, folder: {} }),
                signal,
            });
            return (_a = response.id) !== null && _a !== void 0 ? _a : '';
        });
    }
    /**
     * Uploads the drive item using an upload session.
     *
     * @param file The file to upload.
     * @param options The upload options.
     * @param signal The abort signal.
     * @returns The id of the uploaded item.
     * @see https://learn.microsoft.com/graph/api/driveitem-createuploadsession
     */
    upload(file, _a, signal) {
        var { conflictBehavior } = _a, options = __rest(_a, ["conflictBehavior"]);
        return __awaiter(this, void 0, void 0, function* () {
            const url = `/v1.0/${this.locator.path}/createUploadSession`;
            const response = yield this.operation.requestJson(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    item: Object.assign({ '@microsoft.graph.conflictBehavior': conflictBehavior }, getDriveItemUploadableProperties(file)),
                    deferCommit: true,
                }),
                signal,
            });
            const { uploadUrl } = response;
            if (!uploadUrl)
                throw new Error('Upload URL not found.');
            try {
                return yield this.performUpload(file, uploadUrl, options, signal);
            }
            catch (error) {
                // Delete the upload session if the upload fails, so that the upload session is not left open.
                // The signal is not passed intentionally to ensure the delete request is sent.
                // Ignore the error if the delete request fails.
                yield Object(_addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_1__[/* silently */ "d"])(this.operation.request(uploadUrl, { method: 'DELETE' }));
                throw error;
            }
        });
    }
    performUpload(file, url, { chunkSize = defaultChunkSize, onProgress }, signal) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            // Loop until the upload is complete.
            let expectedRange = [0, undefined];
            while (true) {
                const start = expectedRange[0];
                const end = Math.min((_a = expectedRange[1]) !== null && _a !== void 0 ? _a : start + chunkSize, file.size);
                const chunk = file.slice(start, end);
                if (!chunk.size)
                    break;
                onProgress === null || onProgress === void 0 ? void 0 : onProgress(start / file.size);
                const response = yield this.operation.requestJson(url, {
                    method: 'PUT',
                    headers: { 'Content-Range': `bytes ${start}-${end - 1}/${file.size}` },
                    body: chunk,
                    signal,
                });
                if (!((_b = response.nextExpectedRanges) === null || _b === void 0 ? void 0 : _b.length))
                    break;
                expectedRange = parseBytesRange(response.nextExpectedRanges[0]);
            }
            // Commit the upload.
            onProgress === null || onProgress === void 0 ? void 0 : onProgress(1);
            const response = yield this.operation.requestJson(url, { method: 'POST', signal });
            return (_c = response.id) !== null && _c !== void 0 ? _c : '';
        });
    }
    /**
     * Downloads the drive item content.
     *
     * @param options The download options.
     * @param signal The abort signal.
     * @returns The drive item content.
     * @see https://learn.microsoft.com/graph/api/driveitem-get-content
     */
    download({ prefer } = {}, signal) {
        const url = `/v1.0/${this.locator.path}/content`;
        return this.operation.requestBlob(url, { headers: prefer ? { Prefer: prefer } : {}, signal });
    }
}
/**
 * The default chunk size for uploading files.
 * The chunk size must be a multiple of 320 KiB (327,680 bytes).
 *
 * https://learn.microsoft.com/graph/api/driveitem-createuploadsession#upload-bytes-to-the-upload-session
 */
const defaultChunkSize = 32 * 320 * 1024; // 10 MiB
/**
 * Parses an inclusive bytes range string as a tuple of start and end byte, where the parsed end byte is exclusive.
 *
 * @param range The bytes range string, e.g. '0-41'.
 * @returns The start and end byte.
 * @see https://learn.microsoft.com/graph/api/driveitem-createuploadsession#response-1
 *
 * @example parseBytesRange('0-41') // [0, 42]
 * @example parseBytesRange('42-') // [42, undefined]
 */
function parseBytesRange(range) {
    const [startByteString, endByteString] = range.split('-');
    const startByte = parseInt(startByteString, 10);
    const endByte = endByteString ? parseInt(endByteString, 10) + 1 : undefined;
    return [startByte, endByte];
}
/**
 * Gets the uploadable properties for a file.
 *
 * @param file The file.
 * @returns The uploadable properties.
 * @see https://learn.microsoft.com/graph/api/resources/driveitemuploadableproperties
 */
function getDriveItemUploadableProperties(file) {
    return {
        name: file.name,
        fileSystemInfo: {
            lastModifiedDateTime: new Date(file.lastModified).toISOString(),
        },
    };
}


/***/ }),

/***/ "N+Kj":
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-people/src/PeopleCoin/PeopleCoin.utils.tsx ***!
  \***********************************************************************************************************************************/
/*! exports provided: useIcon */
/*! exports used: useIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useIcon; });
/* harmony import */ var _fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react-hooks */ "cJKS");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function useIcon(selection, onRetrieveIcon) {
    const forceUpdate = Object(_fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useForceUpdate */ "a"])();
    react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
        if (selection.icon || !onRetrieveIcon)
            return;
        const retrieval = ensureRetrieval(selection, onRetrieveIcon);
        if (!retrieval)
            return;
        // Force update when retrieval is done
        let mounted = true;
        retrieval.then(() => mounted && forceUpdate());
        return () => {
            mounted = false;
        };
    }, [forceUpdate, onRetrieveIcon, selection]);
    return selection.icon || (onRetrieveIcon && getCachedIcon(selection));
}
const cachedIconsOrRetrievals = new Map();
/**
 * Returns the cached icon or undefined if it's not cached or being retrieved.
 *
 * @param selection The selection to get the cached icon for.
 * @returns The cached icon.
 */
function getCachedIcon(selection) {
    const iconOrRetrieval = cachedIconsOrRetrievals.get(selection.id);
    if (iconOrRetrieval instanceof Promise)
        return;
    return iconOrRetrieval;
}
/**
 * Ensures that the icon is retrieved and cached.
 *
 * @param selection The selection to retrieve the icon for.
 * @param retrieveIcon The function to retrieve the icon.
 * @returns A promise that resolves when the icon is retrieved and cached or undefined if the icon is already cached.
 */
function ensureRetrieval(selection, retrieveIcon) {
    const iconOrRetrieval = cachedIconsOrRetrievals.get(selection.id);
    if (iconOrRetrieval instanceof Promise)
        return iconOrRetrieval;
    // Since the icon can also be undefined, we need to check by key explicitly instead of checking if icon is truthy.
    if (cachedIconsOrRetrievals.has(selection.id))
        return;
    const newRetrieval = safeRetrieveIcon(selection, retrieveIcon).then(icon => {
        cachedIconsOrRetrievals.set(selection.id, icon);
    });
    cachedIconsOrRetrievals.set(selection.id, newRetrieval);
    return newRetrieval;
}
function safeRetrieveIcon(selection, retrieveIcon) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const icon = yield retrieveIcon(selection);
            return icon instanceof Blob ? URL.createObjectURL(icon) : icon;
        }
        catch (_a) {
            return;
        }
    });
}


/***/ }),

/***/ "N5m/":
/*!*******************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-logger/src/common/types.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: EntryPoint, PanelType, InvokedContext, LoggerLevels, CommonLogCategory, PanelRegion, PanelLaunchMethod, ActionGesture, PanelViewOutcome, PanelActionOutcome, ThreadType */
/*! exports used: CommonLogCategory, EntryPoint, InvokedContext, LoggerLevels, PanelLaunchMethod, PanelRegion, PanelType, ThreadType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EntryPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return PanelType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return InvokedContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LoggerLevels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonLogCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return PanelRegion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return PanelLaunchMethod; });
/* unused harmony export ActionGesture */
/* unused harmony export PanelViewOutcome */
/* unused harmony export PanelActionOutcome */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ThreadType; });
var EntryPoint;
(function (EntryPoint) {
    EntryPoint["ComposeExtension"] = "composeExtension";
    EntryPoint["Workflow"] = "workflow";
    EntryPoint["PersonalApp"] = "personalApp";
    EntryPoint["AdaptiveCard"] = "adaptiveCard";
})(EntryPoint || (EntryPoint = {}));
// For Page:
var PanelType;
(function (PanelType) {
    PanelType["WorkReport"] = "workReport";
    PanelType["HomePage"] = "homePage";
    PanelType["WriteReport"] = "writeReport";
    PanelType["ReviewReport"] = "reviewReport";
    PanelType["CreateRequestPage"] = "CreateRequestPage";
    PanelType["EditRequestPage"] = "EditRequestPage";
    PanelType["CopyRequestPage"] = "CopyRequestPage";
    PanelType["SubmitUpdatePage"] = "SubmitUpdatePage";
    PanelType["SubmitOOBEUpdatePage"] = "SubmitOOBEUpdatePage";
    PanelType["SubmitUpdateV2Page"] = "SubmitUpdateV2Page";
    PanelType["SubmitOOBEUpdateV2Page"] = "SubmitOOBEUpdateV2Page";
    PanelType["AggregatedViewPage"] = "AggregatedViewPage";
    PanelType["TaskModuleRBACListPage"] = "TaskModuleRBACListPage";
    PanelType["TaskModuleCollectUpdatesPage"] = "TaskModuleCollectUpdatesPage";
    PanelType["TaskModuleSuccessStoryPage"] = "TaskModuleSuccessStoryPage";
    PanelType["TaskModulePreviewTemplatePage"] = "TaskModulePreviewTemplatePage";
    PanelType["TaskModuleCreateRequestPage"] = "TaskModuleCreateRequestPage";
    PanelType["PreviewAdaptiveCardPage"] = "PreviewAdaptiveCardPage";
    PanelType["TaskModuleSubmitUpdatePage"] = "TaskModuleSubmitUpdatePage";
    PanelType["TaskModuleSendReminderPage"] = "TaskModuleSendReminderPage";
    PanelType["TaskModuleReviewReportPage"] = "TaskModuleReviewReportPage";
})(PanelType || (PanelType = {}));
var InvokedContext;
(function (InvokedContext) {
    InvokedContext["Chat"] = "Chat";
    InvokedContext["Team"] = "Team";
    InvokedContext["Global"] = "Global";
})(InvokedContext || (InvokedContext = {}));
var LoggerLevels;
(function (LoggerLevels) {
    LoggerLevels["info"] = "info";
    LoggerLevels["debug"] = "debug";
    LoggerLevels["log"] = "log";
    LoggerLevels["warn"] = "warn";
    LoggerLevels["error"] = "error";
})(LoggerLevels || (LoggerLevels = {}));
// Log Category Sources for scenarios
var CommonLogCategory;
(function (CommonLogCategory) {
    CommonLogCategory["GlobalException"] = "GlobalException";
    CommonLogCategory["HTTPException"] = "HTTPException";
})(CommonLogCategory || (CommonLogCategory = {}));
/**
 * The region of the page the panel is located
 * in (Ex: Panel_Type = Channel, Panel.Region = Main or Right)
 * Note: Keep the enums Alphabetically Sorted
 */
var PanelRegion;
(function (PanelRegion) {
    PanelRegion["Banner"] = "banner";
    PanelRegion["Dialog"] = "dialog";
    PanelRegion["Footer"] = "footer";
    PanelRegion["Header"] = "header";
    PanelRegion["Left"] = "left";
    PanelRegion["Main"] = "main";
    PanelRegion["Modal"] = "modal";
    PanelRegion["Popover"] = "popover";
    PanelRegion["Right"] = "right";
    PanelRegion["Toast"] = "toast";
    PanelRegion["Virtual"] = "virtual";
})(PanelRegion || (PanelRegion = {}));
/**
 * How a panel was opened up
 * Sample values: nav, notification, direct, toast, userInitiated, update,
 * login, appNav, redererTerminated
 */
var PanelLaunchMethod;
(function (PanelLaunchMethod) {
    PanelLaunchMethod["ActivityFeed"] = "activityFeed";
    PanelLaunchMethod["AppNav"] = "appNav";
    PanelLaunchMethod["Direct"] = "direct";
    PanelLaunchMethod["Nav"] = "nav";
    PanelLaunchMethod["Notification"] = "notification";
    PanelLaunchMethod["Posts"] = "posts";
    PanelLaunchMethod["Toast"] = "toast";
    PanelLaunchMethod["Update"] = "update";
    PanelLaunchMethod["UserInitiated"] = "userInitiated";
})(PanelLaunchMethod || (PanelLaunchMethod = {}));
var ActionGesture;
(function (ActionGesture) {
    ActionGesture["Click"] = "click";
    ActionGesture["Hover"] = "hover";
    ActionGesture["KeyPress"] = "keypress";
    ActionGesture["None"] = "none";
    ActionGesture["Scroll"] = "scroll";
})(ActionGesture || (ActionGesture = {}));
var PanelViewOutcome;
(function (PanelViewOutcome) {
    PanelViewOutcome["Failure"] = "failure";
    PanelViewOutcome["Init"] = "init";
    PanelViewOutcome["None"] = "none";
    PanelViewOutcome["Success"] = "success";
})(PanelViewOutcome || (PanelViewOutcome = {}));
/**
 * Outcome of action taken
 * (Ex: Action_Outcome = "read" is logged when "scroll" action happens)
 * Note: Keep the enums Alphabetically Sorted
 */
var PanelActionOutcome;
(function (PanelActionOutcome) {
    PanelActionOutcome["CopyToClipboard"] = "copyToClipboard";
    PanelActionOutcome["Disable"] = "disable";
    PanelActionOutcome["DismissBanner"] = "dismissBanner";
    PanelActionOutcome["Enable"] = "enable";
    PanelActionOutcome["Hide"] = "hide";
    PanelActionOutcome["Inspect"] = "inspect";
    PanelActionOutcome["Launch"] = "launch";
    PanelActionOutcome["Nav"] = "nav";
    PanelActionOutcome["None"] = "none";
    PanelActionOutcome["OpenChat"] = "openChat";
    PanelActionOutcome["OpenDialog"] = "openDialog";
    PanelActionOutcome["OpenPopup"] = "openPopup";
    PanelActionOutcome["Read"] = "read";
    PanelActionOutcome["RemoveBanner"] = "removeBanner";
    PanelActionOutcome["RemoveChiclet"] = "removeChiclet";
    PanelActionOutcome["Retry"] = "retry";
    PanelActionOutcome["Select"] = "select";
    PanelActionOutcome["Show"] = "show";
    PanelActionOutcome["ShowBanner"] = "showBanner";
    PanelActionOutcome["Submit"] = "submit";
    PanelActionOutcome["Toggle"] = "toggle";
    PanelActionOutcome["Update"] = "update";
})(PanelActionOutcome || (PanelActionOutcome = {}));
var ThreadType;
(function (ThreadType) {
    ThreadType["GroupChat"] = "GroupChat";
    ThreadType["OneOnOneChat"] = "OneOnOneChat";
    ThreadType["SelfChat"] = "SelfChat";
    ThreadType["NewChat"] = "NewChat";
    ThreadType["Meeting"] = "Meeting";
    ThreadType["Channel"] = "Channel";
    ThreadType["NA"] = "N/A";
})(ThreadType || (ThreadType = {}));


/***/ }),

/***/ "NHpu":
/*!****************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-people/src/PeopleSelect/PeopleSelect.strings.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: peopleSelectDefaultStrings */
/*! exports used: peopleSelectDefaultStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return peopleSelectDefaultStrings; });
const peopleSelectDefaultStrings = {
    inputPlaceholder: 'Enter names here',
    requiredErrorMessage: 'This field is required',
    removeButtonAriaLabel: 'Remove',
    suggestionsHeaderText: 'Suggestions',
    noResultsFoundText: 'No results found',
    suggestionsAvailableAlertText: 'Suggestions available',
};


/***/ }),

/***/ "O8+z":
/*!***********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/CommonCard/index.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: CommonCard, CommonCardShimmer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _CommonCard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommonCard.component */ "Dugf");
/* unused harmony reexport * */
/* harmony import */ var _CommonCard_shimmer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CommonCard.shimmer */ "54rC");
/* unused harmony reexport * */
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */




/***/ }),

/***/ "Oi44":
/*!***********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/TaskModule/index.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: TaskModule, useTaskModuleStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _TaskModule_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskModule.component */ "TTZU");
/* unused harmony reexport * */
/* harmony import */ var _TaskModule_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskModule.styles */ "07a+");
/* unused harmony reexport * */




/***/ }),

/***/ "PVww":
/*!********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/Spinner/index.ts ***!
  \********************************************************************************************************************/
/*! exports provided: SpinnerSize, Spinner */
/*! exports used: Spinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Spinner */ "uWkf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _Spinner__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */



/***/ }),

/***/ "PxWi":
/*!*******************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/ConfirmationDialog/index.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: ConfirmationDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _ConfirmationDialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConfirmationDialog.component */ "4KAz");
/* unused harmony reexport * */
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */



/***/ }),

/***/ "Qt34":
/*!*********************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/services-graph/src/index.ts ***!
  \*********************************************************************************************************/
/*! exports provided: GraphServiceClient */
/*! exports used: GraphServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client */ "qUHg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _client__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "8m13");




/***/ }),

/***/ "Qvt5":
/*!***************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/TaskModuleV2/TaskModuleV2.styles.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: useTaskModuleV2Styles, useTaskModuleContentCustomizedStyles, useTaskModuleCategorizedTemplateStoreStyles */
/*! exports used: useTaskModuleV2Styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useTaskModuleV2Styles; });
/* unused harmony export useTaskModuleContentCustomizedStyles */
/* unused harmony export useTaskModuleCategorizedTemplateStoreStyles */
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "tPyQ");
/* harmony import */ var _styles_makeStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/makeStyles */ "oRLY");


const useTaskModuleV2Styles = /* #__PURE__*/ Object(_styles_makeStyles__WEBPACK_IMPORTED_MODULE_1__[/* makeStyles */ "a"])({
    root: {
        width: '100%',
        height: '100%',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        paddingBottom: '0.75rem',
    },
    content: {
        padding: '24px 60px',
    },
    header: {
        marginBottom: '22px',
    },
});
const useTaskModuleContentCustomizedStyles = /* #__PURE__*/ Object(_styles_makeStyles__WEBPACK_IMPORTED_MODULE_1__[/* makeStyles */ "a"])(theme => ({
    background: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* isDefaultTheme */ "h"])(theme.name)
        ? 'linear-gradient(#DCE0FA 1%,white 40%) fixed'
        : Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* isDarkTheme */ "g"])(theme.name)
            ? 'linear-gradient(#3D3E78 1%,#333333 40%) fixed'
            : 'black',
}));
const useTaskModuleCategorizedTemplateStoreStyles = /* #__PURE__*/ Object(_styles_makeStyles__WEBPACK_IMPORTED_MODULE_1__[/* makeStyles */ "a"])(() => ({
    padding: '24px 0',
}));


/***/ }),

/***/ "R2N7":
/*!*************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/utilities-hooks/src/keyboard.ts ***!
  \*************************************************************************************************************/
/*! exports provided: useKeyboardInvoke */
/*! exports used: useKeyboardInvoke */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useKeyboardInvoke; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * A hook that allows invoking the element by pressing Enter or Space key.
 *
 * @returns The ref for the element.
 */
function useKeyboardInvoke() {
    const elementRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
        const element = elementRef.current;
        if (!element)
            return;
        const handler = (event) => {
            // Should do nothing if the default behavior is prevented
            if (event.defaultPrevented)
                return;
            if (event.key === 'Enter' || event.key === ' ') {
                element.click();
                event.preventDefault();
            }
        };
        const controller = new AbortController();
        element.addEventListener('keydown', handler, { signal: controller.signal });
        return () => controller.abort();
    }, []);
    return elementRef;
}


/***/ }),

/***/ "Rlsw":
/*!*****************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-people/src/PeoplePile/PeoplePile.tsx ***!
  \*****************************************************************************************************************************/
/*! exports provided: PeoplePile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PeoplePile */
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "ogYq");
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "ZOo+");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PeopleCoin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PeopleCoin */ "KDg/");
/* harmony import */ var _PeoplePile_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PeoplePile.styles */ "maUk");
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





const PeoplePile = (_a) => {
    var { selections, onRetrieveIcon, maxVisible = Infinity, compact, coinSize = 24, showOnlyName, overflowTitle, className } = _a, props = __rest(_a, ["selections", "onRetrieveIcon", "maxVisible", "compact", "coinSize", "showOnlyName", "overflowTitle", "className"]);
    const [visibleSelections, overflowCount] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(() => {
        const visibleSelections = selections.slice(0, maxVisible);
        const overflowCount = Math.max(selections.length - maxVisible, 0);
        return [visibleSelections, overflowCount];
    }, [maxVisible, selections]);
    const onlyNameText = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(() => showOnlyName && !overflowCount && selections.length === 1 && selections[0].name, [overflowCount, selections, showOnlyName]);
    const styles = Object(_PeoplePile_styles__WEBPACK_IMPORTED_MODULE_4__[/* usePeoplePileStyles */ "a"])();
    const overflow = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(() => overflowCount > 0 && (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* mergeStyles */ "F"])(styles.overflow, compact && styles.compactOverflow, {
            fontSize: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* rem */ "b"])(Math.min(coinSize * 0.5, 10)),
        }), title: overflowTitle }, overflowCount)), [overflowCount, overflowTitle, styles, compact, coinSize]);
    const onlyName = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(() => onlyNameText && (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* mergeStyles */ "F"])(styles.onlyName, {
            fontSize: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* rem */ "b"])(Math.min(coinSize * 0.75, 14)),
            margin: `0 ${Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* rem */ "b"])(2 + coinSize * 0.25)}`,
        }), title: props.title ? undefined : onlyNameText }, onlyNameText)), [coinSize, onlyNameText, props.title, styles.onlyName]);
    return (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object.assign({ className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* mergeStyles */ "F"])(styles.root, className) }, props),
        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* mergeStyles */ "F"])(styles.coins, compact && styles.compactCoins), role: 'list' }, visibleSelections.map(selection => (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_PeopleCoin__WEBPACK_IMPORTED_MODULE_3__[/* PeopleCoin */ "a"], { key: selection.id, role: 'listitem', selection: selection, onRetrieveIcon: onRetrieveIcon, coinSize: coinSize, preventNameAsTitle: Boolean(props.title) })))),
        overflow,
        onlyName));
};


/***/ }),

/***/ "RwJE":
/*!**************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/utilities-core/src/clipboards.ts ***!
  \**************************************************************************************************************/
/*! exports provided: copyToClipboard, copyImageToClipboard, copyLinkToClipboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export copyToClipboard */
/* unused harmony export copyImageToClipboard */
/* unused harmony export copyLinkToClipboard */
/* harmony import */ var _data_urls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-urls */ "iMwy");
/* harmony import */ var _mimes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mimes */ "sSa5");
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
 * Copies the given data to the clipboard.
 *
 * @param data - The data to copy.
 * @returns A promise that resolves when the data is copied.
 * @remarks This function doesn't use Clipboard API because some policies may prevent it from working.
 */
function copyToClipboard(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const input = document.createElement('input');
        input.style.display = 'none';
        // We have to use a dummy value, since blank value won't work in some browsers (for example, iOS Safari).
        input.value = ' ';
        try {
            document.body.appendChild(input);
            yield new Promise((resolve, reject) => {
                document.addEventListener('copy', event => {
                    const dataTransfer = event.clipboardData;
                    if (!dataTransfer)
                        return;
                    dataTransfer.clearData();
                    Object.entries(data).forEach(([type, content]) => dataTransfer.setData(type, content));
                    event.preventDefault();
                    resolve();
                }, { once: true });
                input.select();
                const successful = document.execCommand('copy');
                if (!successful)
                    reject(new Error('Failed to copy data to clipboard'));
            });
        }
        finally {
            document.body.removeChild(input);
        }
    });
}
/**
 * Copies the given image to the clipboard.
 *
 * @property blob - The image blob to copy.
 * @property name - The name of the image.
 * @returns A promise that resolves when the image is copied.
 */
function copyImageToClipboard({ blob, name }) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!Object(_mimes__WEBPACK_IMPORTED_MODULE_1__[/* isImageMime */ "a"])(blob.type))
            return;
        const dataUrl = yield Object(_data_urls__WEBPACK_IMPORTED_MODULE_0__[/* encodeDataUrl */ "a"])(blob);
        const image = document.createElement('img');
        image.src = dataUrl;
        if (name)
            image.alt = name;
        return copyToClipboard({ [blob.type]: dataUrl, 'text/html': image.outerHTML, 'text/plain': name !== null && name !== void 0 ? name : '' });
    });
}
/**
 * Copies the given link to the clipboard.
 *
 * @property url - The link to copy.
 * @property text - The text of the link.
 * @property image - The image to show in the link.
 * @returns A promise that resolves when the link is copied.
 */
function copyLinkToClipboard({ url, text, image }) {
    const anchor = document.createElement('a');
    anchor.href = url;
    if (text || !image) {
        const textContainer = document.createElement('div');
        textContainer.textContent = text !== null && text !== void 0 ? text : url;
        anchor.appendChild(textContainer);
    }
    if (image) {
        const img = document.createElement('img');
        img.src = image;
        anchor.appendChild(img);
    }
    return copyToClipboard({ 'text/html': anchor.outerHTML, 'text/plain': url });
}


/***/ }),

/***/ "S/LY":
/*!*************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/PillPivot/PillPivot.component.tsx ***!
  \*************************************************************************************************************************************/
/*! exports provided: PillPivot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PillPivot */
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "v5UV");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react */ "ogYq");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react */ "I0MF");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _PillPivot_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PillPivot.styles */ "TtjS");



const PillPivot = ({ items, defaultSelectedKey, isMobile, onSelected, className, }) => {
    const styles = Object(_PillPivot_styles__WEBPACK_IMPORTED_MODULE_4__[/* usePillPivotStyles */ "b"])();
    const buttonStyles = Object(_PillPivot_styles__WEBPACK_IMPORTED_MODULE_4__[/* usePillButtonStyles */ "a"])();
    const onLinkClick = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])((item) => {
        if (onSelected && (item === null || item === void 0 ? void 0 : item.props.itemKey)) {
            onSelected(item.props.itemKey);
        }
    }, [onSelected]);
    return (react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* Pivot */ "a"], { onLinkClick: onLinkClick, defaultSelectedKey: defaultSelectedKey, headersOnly: true, styles: {
            root: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* mergeStyles */ "F"])(styles.root, isMobile && 'is-mobile', className),
            link: isMobile ? buttonStyles.mobile : buttonStyles.root,
            linkIsSelected: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* mergeStyles */ "F"])(isMobile ? buttonStyles.mobile : buttonStyles.root, 'is-active'),
            linkContent: buttonStyles.content,
        } }, items.map(item => (react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__[/* PivotItem */ "a"], { key: item.key, itemKey: item.key, ariaLabel: item.text, headerText: item.text })))));
};


/***/ }),

/***/ "S98w":
/*!***********************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/utilities-hooks/src/update.ts ***!
  \***********************************************************************************************************/
/*! exports provided: useUpdate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export useUpdate */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useUpdate(value, onChange) {
    const valueRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(value);
    valueRef.current = value;
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
        if (!onChange)
            return;
        return updater => {
            const newValue = updater(valueRef.current);
            valueRef.current = newValue;
            onChange(newValue);
        };
    }, [onChange]);
}


/***/ }),

/***/ "SgCh":
/*!*****************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-metaos-host/src/error.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: TeamsErrorCode, TeamsError */
/*! exports used: TeamsError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TeamsErrorCode */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamsError; });
var TeamsErrorCode;
(function (TeamsErrorCode) {
    TeamsErrorCode["NoNetwork"] = "NoNetwork";
    TeamsErrorCode["ServerTemporarilyUnavailable"] = "ServerTemporarilyUnavailable";
    TeamsErrorCode["Transient"] = "Transient";
    TeamsErrorCode["Unexpected"] = "Unexpected";
    TeamsErrorCode["Unknown"] = "Unknown";
})(TeamsErrorCode || (TeamsErrorCode = {}));
const defaultMessage = 'A Teams error occurred.';
/**
 * The error class to wrap all the errors thrown by Teams JS SDK. This class provides a unified error handling
 * mechanism for all the errors thrown by the SDK, which could be an Error, an SdkError, or a string.
 *
 * @property code The code of the error.
 * @property cause The cause of the error.
 */
class TeamsError extends Error {
    constructor({ message = defaultMessage, code = TeamsErrorCode.Unknown, cause } = {}) {
        super(message);
        this.code = code;
        this.cause = cause;
        this.name = 'TeamsError';
    }
    /**
     * Wrap a TeamsError from an unknown error, populating the error properties if recognized.
     *
     * @param error The error to wrap a TeamsError from.
     * @returns A TeamsError instance.
     */
    static from(error) {
        // Returns TeamsError as is
        if (error instanceof TeamsError)
            return error;
        // Wrap an Error
        if (error instanceof Error) {
            return new TeamsError({
                message: error.message,
                code: parseTeamsErrorCode(error.message),
                cause: error,
            });
        }
        // Wrap an SdkError
        if (isSdkError(error)) {
            return new TeamsError({
                message: `${error.errorCode}, ${error.message}`,
                code: parseTeamsErrorCode(error.message, error.errorCode),
            });
        }
        // Wrap a string
        if (typeof error === 'string') {
            return new TeamsError({
                message: error,
                code: parseTeamsErrorCode(error),
            });
        }
        // Returns an unknown error if not recognized
        return TeamsError.unknown;
    }
}
/**
 * The singleton instance of an unknown error.
 */
TeamsError.unknown = new TeamsError();
/**
 * Checks whether the error fits the SdkError interface.
 *
 * @param error The error to check.
 * @returns Whether the error fits the SdkError interface.
 * @remarks Implement this by our own to avoid the unstrict type check in the SDK.
 */
function isSdkError(error) {
    if (typeof error !== 'object' || error === null)
        return false;
    const { errorCode, message } = error;
    return typeof errorCode === 'number' && (typeof message === 'string' || message === undefined);
}
/**
 * Parses the Teams error code from the error message or the raw code.
 *
 * @param message The error message.
 * @param rawCode The raw error code.
 * @returns The Teams error code.
 */
function parseTeamsErrorCode(message, rawCode) {
    if (rawCode) {
        // Parse the error code from the SDK
    }
    if (message) {
        if (message.startsWith('Error: NoNetwork')) {
            return TeamsErrorCode.NoNetwork;
        }
        if (message.startsWith('Error: ServerTemporarilyUnavailable')) {
            return TeamsErrorCode.ServerTemporarilyUnavailable;
        }
        if (message.startsWith('Error: TransientError')) {
            return TeamsErrorCode.Transient;
        }
        if (message.startsWith('Error: Unexpected')) {
            return TeamsErrorCode.Unexpected;
        }
    }
    return TeamsErrorCode.Unknown;
}


/***/ }),

/***/ "TQ8g":
/*!**********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/PillPivot/index.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: PillPivot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _PillPivot_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PillPivot.component */ "S/LY");
/* unused harmony reexport * */
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */



/***/ }),

/***/ "TTZU":
/*!***************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/TaskModule/TaskModule.component.tsx ***!
  \***************************************************************************************************************************************/
/*! exports provided: TaskModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TaskModule */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CommonModal_ModalContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CommonModal/ModalContent */ "uhAr");
/* harmony import */ var _TaskModule_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TaskModule.styles */ "07a+");
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */



const TaskModule = props => {
    const styles = Object(_TaskModule_styles__WEBPACK_IMPORTED_MODULE_2__[/* useTaskModuleStyles */ "a"])();
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: styles.root },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CommonModal_ModalContent__WEBPACK_IMPORTED_MODULE_1__[/* ModalContent */ "a"], Object.assign({}, props))));
};


/***/ }),

/***/ "TtjS":
/*!*********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/PillPivot/PillPivot.styles.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: usePillPivotStyles, usePillButtonStyles */
/*! exports used: usePillButtonStyles, usePillPivotStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return usePillPivotStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return usePillButtonStyles; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "ogYq");
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "n4Dn");
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "ZOo+");
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "tPyQ");
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */


const usePillPivotStyles = Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* makeStyles */ "a"])(_theme => ({
    root: {
        display: 'flex',
        gap: '4px',
        '&.is-mobile': {
            gap: '8px',
        },
    },
}));
const usePillButtonStyles = Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* makeStyles */ "a"])(theme => ({
    root: {
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '81px',
        height: '25px',
        cursor: 'pointer',
        borderRadius: '30px',
        fontWeight: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "e"].regular,
        fontSize: _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_2__[/* FontSizes */ "a"].size12,
        border: `1px solid ${Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_3__[/* isContrastTheme */ "f"])(theme.name) ? theme.palette.themeDark : theme.palette.neutralLight}`,
        background: theme.palette.white,
        color: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_3__[/* isContrastTheme */ "f"])(theme.name) ? theme.palette.black : theme.palette.neutralPrimary,
        padding: 0,
        '&::before, &::after': {
            display: 'none',
        },
        '&.is-active': {
            background: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_3__[/* isContrastTheme */ "f"])(theme.name) ? theme.palette.themePrimary : theme.palette.themeLighter,
            borderColor: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_3__[/* isContrastTheme */ "f"])(theme.name) ? theme.palette.themeDark : theme.palette.themeLight,
            color: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_3__[/* isContrastTheme */ "f"])(theme.name) ? theme.palette.black : theme.palette.themePrimary,
            fontWeight: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "e"].semibold,
        },
    },
    mobile: {
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '105px',
        height: '32px',
        cursor: 'pointer',
        borderRadius: '20px',
        fontWeight: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "e"].regular,
        fontSize: _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_2__[/* FontSizes */ "a"].size16,
        background: theme.palette.neutralLighter,
        color: theme.palette.neutralDark,
        padding: 0,
        '&::before, &::after': {
            display: 'none',
        },
        '&.is-active, &.is-selected:hover': {
            background: theme.palette.themePrimary,
            color: theme.palette.white,
            fontWeight: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "e"].semibold,
        },
    },
    content: {
        lineHeight: 'initial',
    },
}));


/***/ }),

/***/ "UKA7":
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-people/src/PeopleCoin/PeopleCoin.styles.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: usePeopleCoinStyles */
/*! exports used: usePeopleCoinStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return usePeopleCoinStyles; });
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "n4Dn");
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "tPyQ");

const usePeopleCoinStyles = Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])(theme => ({
    icon: {
        color: theme.palette.themePrimary,
        backgroundColor: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(theme.name) ? theme.palette.white : theme.palette.neutralLighter,
        border: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(theme.name) ? `1px solid ${theme.palette.black}` : undefined,
        borderRadius: '50%',
    },
}));


/***/ }),

/***/ "UThM":
/*!**********************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/services-core/src/locator.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ServiceResourceLocator */
/*! exports used: ServiceResourceLocator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceResourceLocator; });
/**
 * A service resource locator.
 */
class ServiceResourceLocator {
    constructor(parts) {
        this.parts = parts;
    }
    /**
     * Get the path of the locator, excluding empty parts.
     *
     * @returns The path.
     */
    get path() {
        return this.parts.filter(part => part !== '').join('/');
    }
    /**
     * Extend the locator with the given parts.
     *
     * @param parts The parts to extend.
     * @returns The extended
     */
    extend(...parts) {
        return new ServiceResourceLocator([...this.parts, ...parts]);
    }
}
/**
 * The root locator.
 */
ServiceResourceLocator.root = new ServiceResourceLocator([]);


/***/ }),

/***/ "WGvt":
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-people/src/PeopleView/PeopleView.styles.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: usePeopleViewStyles */
/*! exports used: usePeopleViewStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return usePeopleViewStyles; });
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "n4Dn");
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "ZOo+");

const usePeopleViewStyles = Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])(theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        cursor: 'default',
    },
    textContainer: {
        flex: 1,
        minWidth: 0,
    },
    names: {
        fontSize: _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* FontSizes */ "a"].size14,
        fontWeight: 600,
        color: theme.palette.black,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        maxWidth: 'max-content',
    },
    label: {
        fontSize: _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* FontSizes */ "a"].size12,
        fontWeight: 400,
        color: theme.palette.neutralDark,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        maxWidth: 'max-content',
    },
}));


/***/ }),

/***/ "Ws0a":
/*!*************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/ContentCopyResponseModal/index.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: ContentCopyResponseModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _ContentCopyResponseModal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContentCopyResponseModal.component */ "jU0a");
/* unused harmony reexport * */
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */



/***/ }),

/***/ "X0lx":
/*!**************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/services-core/src/interceptors/throttling.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: createThrottlingInterceptor */
/*! exports used: createThrottlingInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createThrottlingInterceptor; });
/* harmony import */ var _addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/utilities-core */ "1hmm");

const defaultMaxConcurrency = 8;
/**
 * Create a service interceptor to throttle requests.
 *
 * @property maxConcurrency The maximum number of concurrent requests.
 * @returns An interceptor.
 */
function createThrottlingInterceptor({ maxConcurrency = defaultMaxConcurrency, } = {}) {
    const semaphore = new _addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_0__[/* Semaphore */ "a"](maxConcurrency);
    return (request, proceed) => semaphore.run(() => proceed(request));
}


/***/ }),

/***/ "XMOn":
/*!*************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/services-core/src/interceptors/utilities.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: isGet, isServerErrorOrTooManyRequests, isGetAndOk, urlSelector */
/*! exports used: isGet, isGetAndOk, isServerErrorOrTooManyRequests, urlSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isServerErrorOrTooManyRequests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isGetAndOk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return urlSelector; });
const isGet = request => request.method === 'GET';
const isServerErrorOrTooManyRequests = response => response.status >= 500 || response.status === 429;
const isGetAndOk = (request, response) => { var _a; return request.method === 'GET' && ((_a = response === null || response === void 0 ? void 0 : response.ok) !== null && _a !== void 0 ? _a : true); };
const urlSelector = request => request.url;


/***/ }),

/***/ "XWzl":
/*!*******************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/services-graph/src/resources/group.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: GraphGroupResource */
/*! exports used: GraphGroupResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphGroupResource; });
/* harmony import */ var _drive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drive */ "7cB0");
/* harmony import */ var _profile_photo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-photo */ "8eDT");


/**
 * The group resource.
 *
 * @see https://learn.microsoft.com/graph/api/resources/group
 */
class GraphGroupResource {
    constructor(operation, locator) {
        this.operation = operation;
        this.locator = locator;
    }
    /**
     * Navigates to the drive resource.
     *
     * @returns The drive resource.
     * @see https://learn.microsoft.com/graph/api/drive-get
     */
    get drive() {
        return new _drive__WEBPACK_IMPORTED_MODULE_0__[/* GraphDriveResource */ "a"](this.operation, this.locator.extend('drive'));
    }
    /**
     * Navigates to the profile photo resource.
     *
     * @returns The profile photo resource.
     * @see https://learn.microsoft.com/graph/api/profilephoto-get
     */
    get photo() {
        return new _profile_photo__WEBPACK_IMPORTED_MODULE_1__[/* GraphProfilePhotoResource */ "a"](this.operation, this.locator.extend('photo'));
    }
    /**
     * Navigates to the profile photo resource by size.
     *
     * @param size The profile photo size.
     * @returns The profile photo resource.
     * @see https://learn.microsoft.com/graph/api/profilephoto-get
     */
    photos(size) {
        return new _profile_photo__WEBPACK_IMPORTED_MODULE_1__[/* GraphProfilePhotoResource */ "a"](this.operation, this.locator.extend('photos', `${size}x${size}`));
    }
}


/***/ }),

/***/ "XhlK":
/*!******************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/utilities-core/src/data-transfers.ts ***!
  \******************************************************************************************************************/
/*! exports provided: dataTransferIncludesFiles, extractFilesFromDataTransfer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export dataTransferIncludesFiles */
/* unused harmony export extractFilesFromDataTransfer */
/**
 * Checks if a data transfer contains files.
 *
 * @param data The data transfer to check.
 * @returns `true` if the data transfer contains files, otherwise `false`.
 */
function dataTransferIncludesFiles(data) {
    return data.types.includes('Files');
}
/**
 * Extracts files from a data transfer.
 *
 * @param data The data transfer to extract files from.
 * @returns The files in the data transfer.
 */
function extractFilesFromDataTransfer(data) {
    const files = Array.from(data.items, item => item.getAsFile());
    return files.filter((file) => file !== null);
}


/***/ }),

/***/ "Y/b3":
/*!********************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/utilities-core/src/urls.ts ***!
  \********************************************************************************************************/
/*! exports provided: isAbsoluteUrl, normalizeUrl, openUrl */
/*! exports used: isAbsoluteUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isAbsoluteUrl; });
/* unused harmony export normalizeUrl */
/* unused harmony export openUrl */
/**
 * Check if a URL is an absolute URL.
 *
 * @param url The URL to check.
 * @returns true if the URL is an absolute URL, false otherwise.
 */
function isAbsoluteUrl(url) {
    try {
        new URL(url);
        return true;
    }
    catch (_a) {
        return false;
    }
}
// See RFC 3986: https://datatracker.ietf.org/doc/html/rfc3986#section-3.3
const unreserved = '[\\w\\d._~-]';
const genericTopLevelDomain = '\\w+';
const host = `${unreserved}+\\.${genericTopLevelDomain}`;
const mailtoRegex = new RegExp(`^${unreserved}+@${host}$`);
const ftpRegex = new RegExp(`^ftp\.${host}(/\\S+)?$`);
const httpRegex = new RegExp(`^${host}(/\\S+)?$`);
const defaultProtocols = [
    { name: 'mailto', guess: mailtoRegex },
    { name: 'ftp', guess: ftpRegex },
    { name: 'ftps' },
    { name: 'http' },
    { name: 'https', guess: httpRegex },
];
/**
 * Normalize URL to a valid URL with protocol, or empty string if the URL is invalid.
 *
 * @param url the URL to normalize
 * @param protocols the protocols to allow or guess
 * @returns the normalized URL
 *
 * @example normalizeUrl('https://example.com') // 'https://www.example.com/'
 * @example normalizeUrl('alice@example.com') // 'mailto:alice@example.com'
 * @example normalizeUrl('ftp.example.com') // 'ftp://ftp.example.com/'
 * @example normalizeUrl('example.com') // 'https://www.example.com/'
 * @example normalizeUrl('example') // ''
 */
function normalizeUrl(url, protocols = defaultProtocols) {
    try {
        // Try to parse the url
        const parsedUrl = new URL(url);
        // If the protocol is not allowed, return empty string
        if (!protocols.some(protocol => parsedUrl.protocol === `${protocol.name}:`))
            return '';
        // If the url is valid, return it
        return parsedUrl.toString();
    }
    catch (_a) {
        // If the url is not valid, try to guess the protocol
        for (const { name, guess } of protocols) {
            if (!(guess === null || guess === void 0 ? void 0 : guess.test(url)))
                continue;
            // If the url is valid with the guessed protocol, return it
            try {
                return new URL(`${name}:${url}`).toString();
            }
            catch (_b) {
                // Ignore any errors
            }
        }
        // Otherwise, return empty string
        return '';
    }
}
/**
 * Opens the given url in a new tab.
 *
 * @param url The url.
 */
function openUrl(url) {
    window.open(url, '_blank', 'noopener noreferrer');
}


/***/ }),

/***/ "Y918":
/*!********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-fluentui-icons/src/index.ts ***!
  \********************************************************************************************************************/
/*! exports provided: iconStyle, customIconStyle, icons, initFluentuiIcons, IconName */
/*! exports used: IconName, icons, initFluentuiIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Icons */ "78Zn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _Icons__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _Icons__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _Icons__WEBPACK_IMPORTED_MODULE_0__["c"]; });




/***/ }),

/***/ "Yd5b":
/*!*********************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/utilities-hooks/src/deep.ts ***!
  \*********************************************************************************************************/
/*! exports provided: useDeepDeps, useDeepMemo, useDeepCallback, useDeepEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export useDeepDeps */
/* unused harmony export useDeepMemo */
/* unused harmony export useDeepCallback */
/* unused harmony export useDeepEffect */
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "DCIk");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/**
 * A Hook to create a deep dependency list, ensuring that the dependencies are stable when they only change shallowly.
 *
 * @param deps The dependencies to stabilize.
 * @returns The stabilized dependencies.
 */
function useDeepDeps(deps) {
    const ref = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef();
    if (!ref.current || !Object(lodash_es__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(deps, ref.current))
        ref.current = deps;
    return ref.current;
}
/**
 * A Hook to create a memoized value, ensuring that the value is stable when the dependencies change shallowly.
 *
 * @param factory The factory to create the value.
 * @param deps The dependencies to stabilize.
 * @returns The memoized value.
 */
function useDeepMemo(factory, deps) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.useMemo(factory, useDeepDeps(deps));
}
/**
 * A Hook to create a memoized callback, ensuring that the callback is stable when the dependencies change shallowly.
 *
 * @param callback The callback to memoize.
 * @param deps The dependencies to stabilize.
 * @returns The memoized callback.
 */
function useDeepCallback(callback, deps) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(callback, useDeepDeps(deps));
}
/**
 * A Hook to create an effect, ensuring that the effect won't run when the dependencies change shallowly.
 *
 * @param effect The effect to run.
 * @param deps The dependencies to stabilize.
 * @returns The effect.
 */
function useDeepEffect(effect, deps) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(effect, useDeepDeps(deps));
}


/***/ }),

/***/ "Z70t":
/*!***************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/CollapsingArea/index.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: CollapsingArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _CollapsingArea_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CollapsingArea.component */ "B/xv");
/* unused harmony reexport * */
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */



/***/ }),

/***/ "ZOo+":
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-fluentui-teams-theme/src/teams/teams-sizes.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: rem, FontSizes */
/*! exports used: FontSizes, rem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return rem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FontSizes; });
const rem = (px) => `${px / 16}rem`;
var FontSizes;
(function (FontSizes) {
    FontSizes.size10 = rem(10);
    FontSizes.size12 = rem(12);
    FontSizes.size14 = rem(14);
    FontSizes.size16 = rem(16);
    FontSizes.size18 = rem(18);
    FontSizes.size20 = rem(20);
    FontSizes.size24 = rem(24);
    FontSizes.size28 = rem(28);
    FontSizes.size32 = rem(32);
    FontSizes.size42 = rem(42);
    FontSizes.size68 = rem(68);
})(FontSizes || (FontSizes = {}));


/***/ }),

/***/ "ZX02":
/*!***************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/utilities-hooks/src/renderings.ts ***!
  \***************************************************************************************************************/
/*! exports provided: useRenderings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export useRenderings */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * A hook that allows to dynamically render and unrender React elements.
 */
function useRenderings() {
    const [renderings, setRenderings] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]);
    const render = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback((key, element) => setRenderings(renderings => {
        let index = renderings.findIndex(rendering => rendering.key === key);
        if (index < 0)
            index = renderings.length;
        const newRenderings = [...renderings];
        newRenderings[index] = react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(element, { key });
        return newRenderings;
    }), [setRenderings]);
    const unrender = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(key => setRenderings(rendering => rendering.filter(element => element.key !== key)), [setRenderings]);
    const dispose = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(() => setRenderings([]), [setRenderings]);
    return { renderings, render, unrender, dispose };
}


/***/ }),

/***/ "Zb4v":
/*!************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/utilities-core/src/promises.ts ***!
  \************************************************************************************************************/
/*! exports provided: silently, delay */
/*! exports used: delay, silently */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return silently; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return delay; });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function silently(promise) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield promise;
        }
        catch (_a) {
            // Ignore the error.
        }
    });
}
/**
 * Delay for a number of milliseconds.
 *
 * @param ms The number of milliseconds to delay.
 * @returns A promise that resolves after the delay.
 */
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


/***/ }),

/***/ "ZqO1":
/*!**************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/utilities-core/src/semaphores.ts ***!
  \**************************************************************************************************************/
/*! exports provided: Semaphore */
/*! exports used: Semaphore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Semaphore; });
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
 * A semaphore is a synchronization primitive that restricts the number of simultaneous accesses to a shared resource.
 */
class Semaphore {
    /**
     * Create a semaphore.
     *
     * @param resources The number of resources.
     */
    constructor(resources) {
        if (resources <= 0 || !Number.isInteger(resources))
            throw new Error('Resources must be a positive integer.');
        this.currentInternal = resources;
        this.notifies = [];
    }
    /**
     * Get the number of available resources.
     */
    get current() {
        return this.currentInternal;
    }
    /**
     * Acquire a resource.
     *
     * @returns A promise that resolves to an idempotent function to release the resource.
     */
    acquire() {
        return __awaiter(this, void 0, void 0, function* () {
            while (this.currentInternal <= 0)
                yield new Promise(resolve => this.notifies.push(resolve));
            this.currentInternal--;
            let released = false;
            return () => {
                var _a;
                if (released)
                    return;
                released = true;
                this.currentInternal++;
                (_a = this.notifies.shift()) === null || _a === void 0 ? void 0 : _a();
            };
        });
    }
    /**
     * Run an action with a resource.
     *
     * @param action The action to run.
     * @returns The result of the action.
     */
    run(action) {
        return __awaiter(this, void 0, void 0, function* () {
            const release = yield this.acquire();
            try {
                return yield action();
            }
            finally {
                release();
            }
        });
    }
}


/***/ }),

/***/ "aVEE":
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-people/src/PeopleList/PeopleList.styles.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: usePeopleListStyles */
/*! exports used: usePeopleListStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return usePeopleListStyles; });
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "n4Dn");
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "ZOo+");

const usePeopleListStyles = Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])(theme => ({
    label: {
        fontSize: _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* FontSizes */ "a"].size14,
        fontWeight: 600,
        color: theme.palette.black,
        marginBottom: '8px',
    },
    list: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
    },
    item: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
    },
    text: {
        flex: 1,
        fontSize: _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* FontSizes */ "a"].size12,
        color: theme.palette.black,
    },
}));


/***/ }),

/***/ "apXe":
/*!************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-people/src/index.ts ***!
  \************************************************************************************************************/
/*! exports provided: PeopleCoin, PeopleList, PeoplePile, PeopleSelect, PeopleView, PeopleSelectionType */
/*! exports used: PeopleCoin, PeopleSelectionType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _PeopleCoin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PeopleCoin */ "KDg/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _PeopleCoin__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _PeopleList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PeopleList */ "547/");
/* harmony import */ var _PeoplePile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PeoplePile */ "fkN4");
/* harmony import */ var _PeopleSelect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PeopleSelect */ "wzJJ");
/* harmony import */ var _PeopleView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PeopleView */ "nK6a");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types */ "DaYX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _types__WEBPACK_IMPORTED_MODULE_5__["a"]; });









/***/ }),

/***/ "au/o":
/*!******************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/services-graph/src/resources/root.ts ***!
  \******************************************************************************************************************/
/*! exports provided: GraphRootResource */
/*! exports used: GraphRootResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphRootResource; });
/* harmony import */ var _drive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drive */ "7cB0");
/* harmony import */ var _group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group */ "XWzl");
/* harmony import */ var _share__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./share */ "jPfx");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "qxKi");




/**
 * The root resource.
 *
 * @see https://learn.microsoft.com/graph/api/resources/root
 */
class GraphRootResource {
    constructor(operation, locator) {
        this.operation = operation;
        this.locator = locator;
    }
    /**
     * Navigates to the current user resource.
     *
     * @returns The current user resource.
     * @see https://learn.microsoft.com/graph/api/user-get
     */
    get me() {
        return new _user__WEBPACK_IMPORTED_MODULE_3__[/* GraphUserResource */ "a"](this.operation, this.locator.extend('me'));
    }
    /**
     * Navigates to the user resource by id.
     *
     * @param id The user id.
     * @returns The user resource.
     * @see https://learn.microsoft.com/graph/api/user-get
     */
    users(id) {
        return new _user__WEBPACK_IMPORTED_MODULE_3__[/* GraphUserResource */ "a"](this.operation, this.locator.extend('users', id));
    }
    /**
     * Navigates to the group resource by id.
     *
     * @param id The group id.
     * @returns The group resource.
     * @see https://learn.microsoft.com/graph/api/group-get
     */
    groups(id) {
        return new _group__WEBPACK_IMPORTED_MODULE_1__[/* GraphGroupResource */ "a"](this.operation, this.locator.extend('groups', id));
    }
    /**
     * Navigates to the drive resource by id.
     *
     * @param id The drive id.
     * @returns The drive resource.
     * @see https://learn.microsoft.com/graph/api/drive-get
     */
    drives(id) {
        return new _drive__WEBPACK_IMPORTED_MODULE_0__[/* GraphDriveResource */ "a"](this.operation, this.locator.extend('drives', id));
    }
    /**
     * Navigates to the share resource by id or sharing link.
     *
     * @param idOrUrl The share id or sharing link.
     * @returns The share resource.
     * @see https://learn.microsoft.com/graph/api/shares-get
     */
    shares(idOrUrl) {
        return new _share__WEBPACK_IMPORTED_MODULE_2__[/* GraphShareResource */ "a"](this.operation, this.locator.extend('shares', encodeSharingUrlIfNecessary(idOrUrl)));
    }
}
/**
 * Encodes a sharing URL if necessary, only if the input is a URL, otherwise returns the input as is.
 *
 * @param idOrUrl The share id or sharing link.
 * @returns The original id or the encoded sharing URL.
 */
function encodeSharingUrlIfNecessary(idOrUrl) {
    return idOrUrl.startsWith('https://') ? encodeSharingUrl(idOrUrl) : idOrUrl;
}
/**
 * Encodes a sharing URL for use with the Microsoft Graph API. To encode a sharing URL, use the following logic:
 * - First, use base64 encode the URL.
 * - Convert the base64 encoded result to unpadded base64url format by removing = characters from the end of the value,
 * replacing / with _ and + with -.)
 * - Append u! to be beginning of the string.
 *
 * @param url The sharing URL.
 * @returns The encoded sharing URL.
 * @see https://learn.microsoft.com/graph/api/shares-get
 *
 * @example encodeSharingUrl('https://example.com') // 'u!aHR0cHM6Ly9leGFtcGxlLmNvbQ'
 */
function encodeSharingUrl(url) {
    return `u!${btoa(url).replace(/=+$/, '').replace('/', '_').replace('+', '-')}`;
}


/***/ }),

/***/ "btUH":
/*!****************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/styles/ellipsisStyles.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: ellipsisStyles */
/*! exports used: ellipsisStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ellipsisStyles; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "ogYq");

/**
 * text with ellipsis styles
 *
 * @param line max row number
 * @returns classname
 */
const ellipsisStyles = (line) => Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* mergeStyles */ "F"])({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    wordBreak: 'break-word',
}, line === 1
    ? {
        display: 'block',
        whiteSpace: 'nowrap',
    }
    : {
        display: '-webkit-box',
        '-webkit-box-orient': 'vertical',
        '-webkit-line-clamp': `${line}`,
    });


/***/ }),

/***/ "dgNf":
/*!***********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/EmptyState/index.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: EmptyState */
/*! exports used: EmptyState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _EmptyState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmptyState */ "IE5g");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _EmptyState__WEBPACK_IMPORTED_MODULE_0__["a"]; });




/***/ }),

/***/ "dnQF":
/*!************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/MobileSheet/index.ts ***!
  \************************************************************************************************************************/
/*! exports provided: MobileSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _MobileSheet_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MobileSheet.component */ "vuOn");
/* unused harmony reexport * */
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */



/***/ }),

/***/ "eTZ1":
/*!***************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/utilities-hooks/src/long-press.ts ***!
  \***************************************************************************************************************/
/*! exports provided: useLongPress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export useLongPress */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const defaultDuration = 1000;
/**
 * A hook that allows invoking a callback function when an element is long pressed.
 *
 * @property onLongPress The callback function to invoke when the element is long pressed.
 * @property onClick The callback function to invoke when the element is clicked.
 * @property duration The duration in milliseconds to consider the press as long press.
 * @returns A ref object that should be assigned to the element to be long pressed.
 */
function useLongPress({ onLongPress, onClick, duration = defaultDuration, }) {
    const elementRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);
    const onLongPressRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(onLongPress);
    onLongPressRef.current = onLongPress;
    const onClickRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(onClick);
    onClickRef.current = onClick;
    // Events happen in order: down -> (leave -> enter)* -> up -> document up
    // - handleDown: set pointer with long press context, set timeout to trigger long press
    // - handleUp: invoke onClick if long press is not triggered
    // - handleEnter: mark pointer as inside
    // - handleLeave: mark pointer as outside
    // - handleDocumentUp: delete long press context of pointer, clear timeout
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
        const element = elementRef.current;
        if (!element)
            return;
        const contexts = new Map();
        const guard = (handler) => (event) => {
            if (!isInvokingEvent(event))
                return;
            const key = getInvokingContextKey(event);
            handler(key);
        };
        const trigger = (key) => {
            const context = contexts.get(key);
            if (!context || !context.inside)
                return;
            const onLongPress = onLongPressRef.current;
            if (!onLongPress)
                return;
            onLongPress();
            context.triggered = true;
        };
        const handleDown = guard(key => {
            if (contexts.has(key))
                return;
            const timeoutId = setTimeout(() => trigger(key), duration);
            contexts.set(key, { timeoutId, triggered: false, inside: true });
        });
        const handleUp = guard(key => {
            const context = contexts.get(key);
            if (!context || context.triggered)
                return;
            const onClick = onClickRef.current;
            if (!onClick)
                return;
            onClick();
        });
        const handleLeave = guard(key => {
            const context = contexts.get(key);
            if (!context)
                return;
            context.inside = false;
        });
        const handleEnter = guard(key => {
            const context = contexts.get(key);
            if (!context)
                return;
            context.inside = true;
        });
        const handleDocumentUp = guard(key => {
            const context = contexts.get(key);
            if (!context)
                return;
            clearTimeout(context.timeoutId);
            contexts.delete(key);
        });
        const controller = new AbortController();
        // Handle pointer events
        element.addEventListener('pointerdown', handleDown, { signal: controller.signal });
        element.addEventListener('pointerup', handleUp, { signal: controller.signal, capture: true });
        element.addEventListener('pointerleave', handleLeave, { signal: controller.signal, capture: true });
        element.addEventListener('pointerenter', handleEnter, { signal: controller.signal, capture: true });
        element.ownerDocument.addEventListener('pointerup', handleDocumentUp, { signal: controller.signal });
        // Handle keyboard events
        element.addEventListener('keydown', handleDown, { signal: controller.signal });
        element.addEventListener('keyup', handleUp, { signal: controller.signal, capture: true });
        element.ownerDocument.addEventListener('keyup', handleDocumentUp, { signal: controller.signal });
        // Clean up timeouts
        controller.signal.addEventListener('abort', () => contexts.forEach(({ timeoutId }) => clearTimeout(timeoutId)));
        return () => controller.abort();
    }, [duration]);
    return elementRef;
}
function isInvokingEvent(event) {
    return event instanceof KeyboardEvent ? event.key === 'Enter' || event.key === ' ' : true;
}
function getInvokingContextKey(event) {
    return event instanceof KeyboardEvent ? event.key : event.pointerId;
}


/***/ }),

/***/ "fKKw":
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/CommonIcon/CommonIcon.styles.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: useCommonIconStyles */
/*! exports used: useCommonIconStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useCommonIconStyles; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "ogYq");
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "ZOo+");
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "tPyQ");
/* harmony import */ var _styles_ellipsisStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/ellipsisStyles */ "btUH");
/* harmony import */ var _styles_makeStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/makeStyles */ "oRLY");
/* harmony import */ var _CommonIcon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CommonIcon.component */ "KuCH");
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */





const useCommonIconStyles = Object(_styles_makeStyles__WEBPACK_IMPORTED_MODULE_4__[/* makeStyles */ "a"])(theme => ({
    root: { display: 'flex', justifyContent: 'space-between' },
    content: {
        display: 'flex',
        columnGap: '12px',
        alignItems: 'center',
        overflow: 'hidden',
    },
    iconContainer: {
        position: 'relative',
        height: '2rem',
        width: '2rem',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '4px',
        flexShrink: '0 !important',
        '&:hover .edit-icon': {
            visibility: 'visible',
        },
        [`.${_CommonIcon_component__WEBPACK_IMPORTED_MODULE_5__[/* CommonIconSize */ "b"].Size28} &`]: { height: '28px', width: '28px' },
        [`.${_CommonIcon_component__WEBPACK_IMPORTED_MODULE_5__[/* CommonIconSize */ "b"].Size32} &`]: { height: '32px', width: '32px' },
        [`.${_CommonIcon_component__WEBPACK_IMPORTED_MODULE_5__[/* CommonIconSize */ "b"].Size40} &`]: { height: '40px', width: '40px' },
        [`.${_CommonIcon_component__WEBPACK_IMPORTED_MODULE_5__[/* CommonIconSize */ "b"].Size44} &`]: { height: '44px', width: '44px' },
        [`.${_CommonIcon_component__WEBPACK_IMPORTED_MODULE_5__[/* CommonIconSize */ "b"].Size48} &`]: { height: '48px', width: '48px' },
        [`.${_CommonIcon_component__WEBPACK_IMPORTED_MODULE_5__[/* CommonIconSize */ "b"].Size64} &`]: { height: '64px', width: '64px' },
        [`.${_CommonIcon_component__WEBPACK_IMPORTED_MODULE_5__[/* CommonIconSize */ "b"].Size80} &`]: { height: '80px', width: '80px' },
    },
    icon: {
        color: 'white',
        fontSize: '1rem',
        [`.${_CommonIcon_component__WEBPACK_IMPORTED_MODULE_5__[/* CommonIconSize */ "b"].Size28} &`]: theme.fonts.mediumPlus,
        [`.${_CommonIcon_component__WEBPACK_IMPORTED_MODULE_5__[/* CommonIconSize */ "b"].Size32} &`]: theme.fonts.xLarge,
        [`.${_CommonIcon_component__WEBPACK_IMPORTED_MODULE_5__[/* CommonIconSize */ "b"].Size40} &`]: theme.fonts.xLargePlus,
        [`.${_CommonIcon_component__WEBPACK_IMPORTED_MODULE_5__[/* CommonIconSize */ "b"].Size44} &`]: theme.fonts.xxLarge,
        [`.${_CommonIcon_component__WEBPACK_IMPORTED_MODULE_5__[/* CommonIconSize */ "b"].Size48} &`]: theme.fonts.xxLargePlus,
        [`.${_CommonIcon_component__WEBPACK_IMPORTED_MODULE_5__[/* CommonIconSize */ "b"].Size64} &`]: { fontSize: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* rem */ "b"])(48) },
        [`.${_CommonIcon_component__WEBPACK_IMPORTED_MODULE_5__[/* CommonIconSize */ "b"].Size80} &`]: { fontSize: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* rem */ "b"])(48) },
    },
    editIcon: [
        'edit-icon',
        {
            cursor: 'pointer',
            visibility: 'hidden',
            color: theme.palette.white,
            position: 'absolute',
            fontSize: '8px',
            background: theme.palette.neutralDark,
            padding: '6px',
            borderRadius: '50%',
            bottom: '4px',
            right: '4px',
        },
    ],
    textContainer: { overflow: 'hidden' },
    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    title: [
        Object(_styles_ellipsisStyles__WEBPACK_IMPORTED_MODULE_3__[/* ellipsisStyles */ "a"])(1),
        {
            fontWeight: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "e"].semibold,
            color: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_2__[/* isContrastTheme */ "f"])(theme.name) ? 'inherit' : theme.palette.black,
            margin: 0,
        },
    ],
    description: [
        theme.fonts.small,
        Object(_styles_ellipsisStyles__WEBPACK_IMPORTED_MODULE_3__[/* ellipsisStyles */ "a"])(1),
        {
            color: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_2__[/* isContrastTheme */ "f"])(theme.name) ? 'inherit' : theme.palette.neutralDark,
        },
    ],
}));


/***/ }),

/***/ "fenK":
/*!***********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/services-core/src/interceptors/headers.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: createHeadersInterceptor */
/*! exports used: createHeadersInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createHeadersInterceptor; });
/**
 * Create a service interceptor that adds headers to the request.
 *
 * @param entries The header entries.
 * @returns An interceptor.
 */
function createHeadersInterceptor(entries) {
    return (request, proceed) => {
        const newRequest = new Request(request);
        for (const [key, valueOrFactory] of Object.entries(entries)) {
            const value = typeof valueOrFactory === 'function' ? valueOrFactory(request) : valueOrFactory;
            newRequest.headers.append(key, value);
        }
        return proceed(newRequest);
    };
}


/***/ }),

/***/ "fkN4":
/*!***********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-people/src/PeoplePile/index.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: PeoplePile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _PeoplePile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PeoplePile */ "Rlsw");
/* unused harmony reexport * */



/***/ }),

/***/ "gUb0":
/*!************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/CommonPanel/index.ts ***!
  \************************************************************************************************************************/
/*! exports provided: CommonPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _CommonPanel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommonPanel.component */ "14nm");
/* unused harmony reexport * */
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */



/***/ }),

/***/ "gzbv":
/*!*****************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/Spinner/Spinner.styles.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: useSpinnerStyles */
/*! exports used: useSpinnerStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useSpinnerStyles; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "ogYq");
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "n4Dn");


const useSpinnerStyles = Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* makeStyles */ "a"])({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bound: {
        overflow: 'hidden',
    },
    animated: {
        display: 'block',
        willChange: 'transform',
        animation: `${Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* keyframes */ "D"])({
            from: { transform: 'translateY(0)' },
            to: { transform: 'translateY(-100%)' },
        })} 2s steps(60) infinite`,
    },
});


/***/ }),

/***/ "h3zH":
/*!*********************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/utilities-core/src/files.ts ***!
  \*********************************************************************************************************/
/*! exports provided: selectFile, digestBlob, encodeHexString, createFileByBlob, getReadableSizeString, normalizeFileName, splitFileName, joinFileName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export selectFile */
/* unused harmony export digestBlob */
/* unused harmony export encodeHexString */
/* unused harmony export createFileByBlob */
/* unused harmony export getReadableSizeString */
/* unused harmony export normalizeFileName */
/* unused harmony export splitFileName */
/* unused harmony export joinFileName */
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
 * Prompts the user to select a file.
 *
 * @property options.accept The file types to accept, as a comma-separated list of MIME types.
 * @returns A promise that resolves to the selected file, or rejects if the user cancels.
 */
function selectFile(options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const input = document.createElement('input');
        Object.assign(input, options);
        input.style.display = 'none';
        input.type = 'file';
        try {
            document.body.appendChild(input);
            return yield new Promise((resolve, reject) => {
                input.addEventListener('change', () => {
                    var _a;
                    const file = (_a = input.files) === null || _a === void 0 ? void 0 : _a[0];
                    if (file)
                        resolve(file);
                    else
                        reject();
                });
                input.addEventListener('cancel', () => reject());
                input.click();
            });
        }
        finally {
            document.body.removeChild(input);
        }
    });
}
/**
 * Gets the SHA-1 digest of a blob, as a hex string.
 *
 * @param blob The blob to digest.
 * @returns A promise that resolves to the digest.
 */
function digestBlob(blob) {
    return __awaiter(this, void 0, void 0, function* () {
        const buffer = yield blob.arrayBuffer();
        const digest = yield crypto.subtle.digest('SHA-1', buffer);
        return encodeHexString(digest);
    });
}
/**
 * Encodes a buffer as a hex string.
 *
 * @param buffer The buffer to encode.
 * @returns The encoded hex string.
 */
function encodeHexString(buffer) {
    return Array.from(new Uint8Array(buffer))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
}
/**
 * Creates a file from a blob.
 *
 * @param blob The blob to create the file from.
 * @param name The name of the file.
 * @returns The created file.
 */
function createFileByBlob(blob, name) {
    return new File([blob], name, Object.assign({ type: blob.type }, (blob instanceof File && { lastModified: blob.lastModified })));
}
const defaultGetReadableSizeStringOptions = {
    units: ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
    base: 1024,
};
/**
 * Gets the readable size string for the given size in bytes.
 *
 * @param sizeInBytes The size in bytes.
 * @property units The size units.
 * @property base The base of the size units.
 * @property offset The exponent offset for the next unit, added to the exponent of the size to determine the unit.
 * @property precision The precision of the size, as the number of fractional digits.
 * @returns The readable size string.
 *
 * @example getReadableSizeString(0) // '0 B'
 * @example getReadableSizeString(42) // '42 B'
 * @example getReadableSizeString(768) // '0.8 KB'
 * @example getReadableSizeString(1024) // '1.0 KB'
 * @example getReadableSizeString(1024 * 1.5) // '1.5 KB'
 */
function getReadableSizeString(sizeInBytes, { units, base, offset = 0.1, precision = 1 } = defaultGetReadableSizeStringOptions) {
    if (sizeInBytes < 0 || !Number.isInteger(sizeInBytes))
        throw new Error('Size must be a non-negative integer.');
    const exponent = sizeInBytes && Math.log(sizeInBytes) / Math.log(base);
    const unitIndex = Math.min(Math.floor(exponent + offset), units.length - 1);
    const size = sizeInBytes / Math.pow(base, unitIndex);
    const numberPart = unitIndex === 0 ? size : size.toFixed(precision);
    const unitPart = units[unitIndex];
    return `${numberPart} ${unitPart}`;
}
/**
 * The default disallowed characters for file names.
 *
 * @see https://learn.microsoft.com/graph/onedrive-addressing-driveitems#onedrive-reserved-characters
 */
const defaultDisallowed = /[/\\*<>?:"|#%]/g;
/**
 * Normalizes a file name by replacing disallowed characters with replacement.
 *
 * @param name The name to normalize.
 * @property disallowed The disallowed characters to replace.
 * @property replacement The replacement character for disallowed characters.
 * @returns The normalized name.
 */
function normalizeFileName(name, { disallowed = defaultDisallowed, replacement = '_' } = {}) {
    return name.replace(disallowed, replacement);
}
/**
 * Splits a file name into its stem and extension.
 *
 * @param name The name to split.
 * @returns The stem and extension of the name.
 * @example splitFileName('') // { stem: '', extension: '' }
 * @example splitFileName('image') // { stem: 'image', extension: '' }
 * @example splitFileName('image.png') // { stem: 'image', extension: 'png' }
 * @example splitFileName('image.gif.png') // { stem: 'image.gif', extension: 'png' }
 * @example splitFileName('.hidden') // { stem: '.hidden', extension: '' }
 * @example splitFileName('.hidden.sh') // { stem: '.hidden', extension: 'sh' }
 */
function splitFileName(name) {
    const lastDot = name.lastIndexOf('.');
    return lastDot <= 0
        ? { stem: name, extension: '' }
        : { stem: name.slice(0, lastDot), extension: name.slice(lastDot + 1) };
}
/**
 * Joins a file name from its stem and extension.
 *
 * @param parts The parts of the file name.
 * @returns The joined file name.
 * @example joinFileName({ stem: '', extension: '' }) // ''
 * @example joinFileName({ stem: 'image', extension: '' }) // 'image'
 * @example joinFileName({ stem: 'image', extension: 'png' }) // 'image.png'
 * @example joinFileName({ stem: 'image.gif', extension: 'png' }) // 'image.gif.png'
 * @example joinFileName({ stem: '.hidden', extension: '' }) // '.hidden'
 * @example joinFileName({ stem: '.hidden', extension: 'sh' }) // '.hidden.sh'
 */
function joinFileName(parts) {
    return parts.extension ? `${parts.stem}.${parts.extension}` : parts.stem;
}


/***/ }),

/***/ "hnrB":
/*!*********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/services-core/src/interceptors/index.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: createAuthorizationInterceptor, createCachingInterceptor, MemoryServiceCache, createHeadersInterceptor, createLoggingInterceptor, createOnlineInterceptor, createPoolingInterceptor, KeyedPromisePool, createRetryInterceptor, createThrottlingInterceptor */
/*! exports used: KeyedPromisePool, MemoryServiceCache, createAuthorizationInterceptor, createCachingInterceptor, createHeadersInterceptor, createLoggingInterceptor, createOnlineInterceptor, createPoolingInterceptor, createRetryInterceptor, createThrottlingInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _authorization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authorization */ "9GRA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _authorization__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _caching__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./caching */ "iYQ3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _caching__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _caching__WEBPACK_IMPORTED_MODULE_1__["b"]; });

/* harmony import */ var _headers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./headers */ "fenK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _headers__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _logging__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logging */ "mYzL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _logging__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony import */ var _online__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./online */ "7ct7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "g", function() { return _online__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony import */ var _pooling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pooling */ "Jj2f");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _pooling__WEBPACK_IMPORTED_MODULE_5__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h", function() { return _pooling__WEBPACK_IMPORTED_MODULE_5__["b"]; });

/* harmony import */ var _retry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./retry */ "nqsk");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i", function() { return _retry__WEBPACK_IMPORTED_MODULE_6__["a"]; });

/* harmony import */ var _throttling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./throttling */ "X0lx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "j", function() { return _throttling__WEBPACK_IMPORTED_MODULE_7__["a"]; });











/***/ }),

/***/ "iMwy":
/*!*************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/utilities-core/src/data-urls.ts ***!
  \*************************************************************************************************************/
/*! exports provided: encodeDataUrl, decodeDataUrl */
/*! exports used: encodeDataUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return encodeDataUrl; });
/* unused harmony export decodeDataUrl */
/**
 * Encodes a blob as a data URL.
 *
 * @param blob The blob to encode.
 * @returns A promise that resolves to the data URL.
 */
function encodeDataUrl(blob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => resolve(reader.result));
        reader.addEventListener('error', () => reject());
        reader.readAsDataURL(blob);
    });
}
/**
 * Decodes a data URL as a blob.
 *
 * @param dataUrl The data URL to decode.
 * @returns The decoded blob, or `undefined` if the data URL is invalid.
 */
function decodeDataUrl(dataUrl) {
    const [protocol, body] = dataUrl.split(':', 2);
    if (protocol !== 'data')
        return;
    const [prefix, data] = body.split(',', 2);
    const [mime, encoding] = prefix.split(';', 2);
    const blobPart = encoding === 'base64' ? decodeBase64(data) : decodeURIComponent(data);
    return new Blob([blobPart], { type: mime });
}
function decodeBase64(data) {
    const binaryString = atob(data);
    const byteArray = Uint8Array.from(binaryString, c => c.charCodeAt(0));
    return byteArray.buffer;
}


/***/ }),

/***/ "iYQ3":
/*!***********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/services-core/src/interceptors/caching.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: createCachingInterceptor, MemoryServiceCache */
/*! exports used: MemoryServiceCache, createCachingInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createCachingInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemoryServiceCache; });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "XMOn");
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
 * Create a service interceptor that caches responses.
 *
 * @property test Determines whether a request and response should be cached.
 * @property cache The cache used to store responses.
 * @returns An interceptor.
 */
function createCachingInterceptor({ test = _utilities__WEBPACK_IMPORTED_MODULE_0__[/* isGetAndOk */ "b"], cache }) {
    return (request, proceed) => __awaiter(this, void 0, void 0, function* () {
        if (!test(request))
            return proceed(request);
        const cachedResponse = yield cache.get(request);
        if (cachedResponse)
            return cachedResponse;
        const response = yield proceed(request);
        if (!test(request, response))
            return response;
        yield cache.set(request, response.clone());
        return response;
    });
}
/**
 * An memory service cache that stores responses in a Map.
 */
class MemoryServiceCache {
    /**
     * Creates an instance of MemoryServiceCache.
     *
     * @param selector A function that selects a key from a request.
     */
    constructor(selector = _utilities__WEBPACK_IMPORTED_MODULE_0__[/* urlSelector */ "d"]) {
        this.selector = selector;
        this.cache = new Map();
    }
    get(request) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return (_a = this.cache.get(this.selector(request))) === null || _a === void 0 ? void 0 : _a.clone();
        });
    }
    set(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            this.cache.set(this.selector(request), response);
        });
    }
}


/***/ }),

/***/ "jG8U":
/*!**********************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/utilities-hooks/src/index.ts ***!
  \**********************************************************************************************************/
/*! exports provided: useBlobObjectUrl, useDebounced, useDeepDeps, useDeepMemo, useDeepCallback, useDeepEffect, useDrop, useKeyboardInvoke, useLongPress, useRenderings, useUpdate, useElementsVisibility */
/*! exports used: useKeyboardInvoke */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _blob__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blob */ "EAWf");
/* harmony import */ var _debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./debounce */ "/m+X");
/* harmony import */ var _deep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deep */ "Yd5b");
/* harmony import */ var _drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drop */ "9jFz");
/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./keyboard */ "R2N7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _keyboard__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony import */ var _long_press__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./long-press */ "eTZ1");
/* harmony import */ var _renderings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./renderings */ "ZX02");
/* harmony import */ var _update__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./update */ "S98w");
/* harmony import */ var _visibility__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./visibility */ "kXVD");











/***/ }),

/***/ "jPfx":
/*!*******************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/services-graph/src/resources/share.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: GraphShareResource */
/*! exports used: GraphShareResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphShareResource; });
/* harmony import */ var _drive_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drive-item */ "Mzmc");

/**
 * The share resource.
 *
 * @see https://learn.microsoft.com/graph/api/resources/shareddriveitem
 */
class GraphShareResource {
    constructor(operation, locator) {
        this.operation = operation;
        this.locator = locator;
    }
    /**
     * Navigates to the drive item resource.
     *
     * @returns The drive item resource.
     * @see https://learn.microsoft.com/graph/api/driveitem-get
     */
    get driveItem() {
        return new _drive_item__WEBPACK_IMPORTED_MODULE_0__[/* GraphDriveItemResource */ "a"](this.operation, this.locator.extend('driveItem'));
    }
}


/***/ }),

/***/ "jTXW":
/*!********************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/services-core/src/index.ts ***!
  \********************************************************************************************************/
/*! exports provided: ServiceOperationError, createAuthorizationInterceptor, createCachingInterceptor, MemoryServiceCache, createHeadersInterceptor, createLoggingInterceptor, createOnlineInterceptor, createPoolingInterceptor, KeyedPromisePool, createRetryInterceptor, createThrottlingInterceptor, ServiceResourceLocator, ServiceOperation */
/*! exports used: KeyedPromisePool, MemoryServiceCache, ServiceOperation, ServiceOperationError, ServiceResourceLocator, createAuthorizationInterceptor, createCachingInterceptor, createHeadersInterceptor, createLoggingInterceptor, createOnlineInterceptor, createPoolingInterceptor, createRetryInterceptor, createThrottlingInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error */ "DPFp");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _error__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _interceptors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interceptors */ "hnrB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _interceptors__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _interceptors__WEBPACK_IMPORTED_MODULE_1__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _interceptors__WEBPACK_IMPORTED_MODULE_1__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "g", function() { return _interceptors__WEBPACK_IMPORTED_MODULE_1__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h", function() { return _interceptors__WEBPACK_IMPORTED_MODULE_1__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i", function() { return _interceptors__WEBPACK_IMPORTED_MODULE_1__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "j", function() { return _interceptors__WEBPACK_IMPORTED_MODULE_1__["g"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "k", function() { return _interceptors__WEBPACK_IMPORTED_MODULE_1__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "l", function() { return _interceptors__WEBPACK_IMPORTED_MODULE_1__["i"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "m", function() { return _interceptors__WEBPACK_IMPORTED_MODULE_1__["j"]; });

/* harmony import */ var _locator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locator */ "UThM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _locator__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _operation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./operation */ "nSFl");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _operation__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types */ "z42N");







/***/ }),

/***/ "jU0a":
/*!*******************************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/ContentCopyResponseModal/ContentCopyResponseModal.component.tsx ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: ContentCopyResponseModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ContentCopyResponseModal */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react */ "brIe");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react */ "ogYq");
/* harmony import */ var _ContentCopyResponseModal_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContentCopyResponseModal.styles */ "G1AE");
/* harmony import */ var _ContentCopyResponseModalContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ContentCopyResponseModalContent */ "xUmT");
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */
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




const ContentCopyResponseModal = (_a) => {
    var { isOpen, modalStyles } = _a, props = __rest(_a, ["isOpen", "modalStyles"]);
    const styles = Object(_ContentCopyResponseModal_styles__WEBPACK_IMPORTED_MODULE_3__[/* useCopyResponseModalStyles */ "b"])();
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* Modal */ "a"], { styles: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__[/* mergeStyleSets */ "E"])(styles, modalStyles), isOpen: isOpen, isBlocking: true, onDismiss: props.onDismiss },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ContentCopyResponseModalContent__WEBPACK_IMPORTED_MODULE_4__[/* ContentCopyRequestModalContent */ "a"], Object.assign({}, props))));
};


/***/ }),

/***/ "kXVD":
/*!***************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/utilities-hooks/src/visibility.ts ***!
  \***************************************************************************************************************/
/*! exports provided: useElementsVisibility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export useElementsVisibility */
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "1aPi");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const defaultThreshold = [0, 0.2, 0.4, 0.6, 0.8, 1];
/**
 * A hook that observes the visibility of the provided elements and calls the onVisibilityChange callback when the visibility changes.
 *
 * @property elementsProvider A function that returns the elements to observe.
 * @property onVisibilityChange A callback that is called when the visibility of the elements changes.
 */
function useElementsVisibility({ elementsProvider, onVisibilityChange, threshold = defaultThreshold, }) {
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
        const elements = elementsProvider();
        if (!elements.length)
            return;
        const visibilityRatios = Array.from({ length: elements.length }, () => 0);
        const observer = new IntersectionObserver(Object(lodash_es__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])((entries) => {
            entries.forEach(entry => {
                const index = elements.indexOf(entry.target);
                visibilityRatios[index] = entry.intersectionRatio;
            });
            onVisibilityChange(visibilityRatios);
        }), { threshold });
        elements.forEach(item => observer.observe(item));
        return () => observer.disconnect();
    }, [elementsProvider, onVisibilityChange, threshold]);
}


/***/ }),

/***/ "lzXV":
/*!*********************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/CommonSlideDots/CommonSlideDots.styles.ts ***!
  \*********************************************************************************************************************************************/
/*! exports provided: userSlideDotsStyles */
/*! exports used: userSlideDotsStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userSlideDotsStyles; });
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "n4Dn");

const userSlideDotsStyles = /* #__PURE__*/ Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])(theme => ({
    stepper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectOption: {
        width: '8px',
        height: '8px',
        margin: '0px 6px',
        borderRadius: '50%',
        backgroundColor: theme.palette.neutralTertiaryAlt,
        '&.is-clickable': {
            cursor: 'pointer',
            ':hover': { backgroundColor: theme.palette.themePrimary },
        },
        '&.is-active': {
            backgroundColor: theme.palette.themePrimary,
        },
    },
}));


/***/ }),

/***/ "mYzL":
/*!***********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/services-core/src/interceptors/logging.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: createLoggingInterceptor */
/*! exports used: createLoggingInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createLoggingInterceptor; });
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
 * Create a service interceptor that logs request, response and error.
 *
 * @property logRequest A function that logs request.
 * @property logResponse A function that logs response.
 * @property logError A function that logs error.
 * @returns An interceptor.
 * @remarks The context returned by `logRequest` will be passed to `logResponse` and `logError`, which helps to
 * correlate the logs, for example, logging the latency of a request.
 */
function createLoggingInterceptor({ logRequest, logResponse, logError, }) {
    return (request, proceed) => __awaiter(this, void 0, void 0, function* () {
        const context = logRequest(request);
        try {
            const response = yield proceed(request);
            logResponse(response, context);
            return response;
        }
        catch (error) {
            logError(error, context);
            throw error;
        }
    });
}


/***/ }),

/***/ "mZ99":
/*!******************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-logger/src/OneDSLogger.ts ***!
  \******************************************************************************************************************/
/*! exports provided: OneDSLogger */
/*! exports used: OneDSLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OneDSLogger; });
/* harmony import */ var _addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/utilities-core */ "1hmm");
/* harmony import */ var _microsoft_teams_telemetry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/teams-telemetry */ "39Bk");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ "nwjK");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es */ "UkL6");
/* harmony import */ var _common_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/types */ "N5m/");
/* harmony import */ var _ScenarioLogger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ScenarioLogger */ "ytE3");





var AriaEventTypes;
(function (AriaEventTypes) {
    AriaEventTypes["Trace"] = "hab_trace";
    AriaEventTypes["Performance"] = "hab_performance";
    AriaEventTypes["UserBi"] = "hab_userbi";
    AriaEventTypes["NonUiEvent"] = "hab_nonUiEvent";
    AriaEventTypes["Scenario"] = "hab_scenario";
    AriaEventTypes["Http"] = "hab_http";
})(AriaEventTypes || (AriaEventTypes = {}));
const emailPattern = /([\w-\.]+)@([\w-]+\.)+[\w-]+/g;
const emailPlaceholder = '[email]';
const guidPattern = /[a-f\d]{8}(-[a-f\d]{4}){3}-[a-f\d]{12}/gi;
const guidPlaceholder = '[guid]';
/**
 * Sets up the Telemetry and hijacks the console events
 * So that we can automatically instrument the native console events
 */
class OneDSLogger {
    /**
     * Logger constructor.
     *
     * @param ariaToken aria token
     * @param sessionId sessionId
     * @param delay milliseconds to wait before log event. 0 default; -1 for infinitely.
     * @param isDevelopment if true, enable console log and trace log. false default.
     */
    constructor(config) {
        const { ariaToken, sessionId, delay, isDevelopment, logTraceTypes } = config || {};
        this.isDevelopment = isDevelopment || false;
        this.logTraceTypes = logTraceTypes || [];
        this.lastUserBiViewEventTime = performance.now();
        this.originalInfo = console.info.bind(console);
        this.originalDebug = console.debug ? console.debug.bind(console) : console.log.bind(console);
        this.originalLog = console.log.bind(console);
        this.originalWarn = console.warn.bind(console);
        this.originalError = console.error.bind(console);
        this.originalAssert = console.assert.bind(console);
        if (!isDevelopment) {
            // set up our functions above to use the inner function
            console.info = this.hook.bind(this, this.originalInfo, _common_types__WEBPACK_IMPORTED_MODULE_4__[/* LoggerLevels */ "d"].info);
            console.debug = this.hook.bind(this, this.originalDebug, _common_types__WEBPACK_IMPORTED_MODULE_4__[/* LoggerLevels */ "d"].debug);
            console.log = this.hook.bind(this, this.originalLog, _common_types__WEBPACK_IMPORTED_MODULE_4__[/* LoggerLevels */ "d"].log);
            console.warn = this.hook.bind(this, this.originalWarn, _common_types__WEBPACK_IMPORTED_MODULE_4__[/* LoggerLevels */ "d"].warn);
            console.error = this.hook.bind(this, this.originalError, _common_types__WEBPACK_IMPORTED_MODULE_4__[/* LoggerLevels */ "d"].error);
            console.assert = this.assert.bind(this);
        }
        this.initPromise = new Promise((r) => (this.initPromiseResolve = r));
        if (delay === undefined || delay >= 0) {
            setTimeout(() => this.activeLogger(), delay);
        }
        if (ariaToken) {
            this.instrumentationKey = ariaToken;
            this.initializeAria();
        }
        this.sessionId = sessionId || Object(_addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_0__[/* uuid */ "e"])();
        this.setCommonProperty({ Session: this.sessionId });
        this.activeScenarios = {};
        if (!isDevelopment) {
            // log all global runtime error
            window.addEventListener('error', err => this.logTraceException(_common_types__WEBPACK_IMPORTED_MODULE_4__[/* CommonLogCategory */ "a"].GlobalException, { error: err }));
            // log load performance
            window.addEventListener('load', this.logLoadPerformance.bind(this));
        }
    }
    activeLogger() {
        if (this.initPromiseResolve) {
            this.initPromiseResolve();
        }
    }
    setCompliantAriaClient(tenantId) {
        if (!this.ariaTelemetryClient) {
            return Promise.resolve();
        }
        return this.ariaTelemetryClient
            .getCompliantAriaClient(tenantId, this.getClientConfig())
            .then(client => {
            Object(_microsoft_teams_telemetry__WEBPACK_IMPORTED_MODULE_1__[/* updateToCompliantAriaClient */ "k"])(client);
        })
            .catch(err => {
            console.error('Get ComplaintAriaClient error', err);
        });
    }
    setCommonProperty(dataMap) {
        var _a;
        const context = _microsoft_teams_telemetry__WEBPACK_IMPORTED_MODULE_1__[/* logger */ "j"].getLoggerContext();
        const newContext = { customProperties: (_a = context === null || context === void 0 ? void 0 : context.customProperties) !== null && _a !== void 0 ? _a : {} };
        for (const [key, value] of Object.entries(dataMap)) {
            newContext.customProperties[key] = value;
        }
        _microsoft_teams_telemetry__WEBPACK_IMPORTED_MODULE_1__[/* logger */ "j"].updateContext(newContext);
    }
    logPerformance(action, source, duration, duartionDetails, dataBag) {
        const logDetails = {};
        Object.entries(duartionDetails !== null && duartionDetails !== void 0 ? duartionDetails : {}).map(v => (logDetails[`Time.${Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(v[0])}`] = Math.ceil(v[1])));
        const eventProperties = Object.assign({ Action: action, Source: source, Duration: Math.ceil(duration) }, logDetails);
        this.addDetailsToEventProperties(dataBag, eventProperties);
        this.logEvent(AriaEventTypes.Performance, eventProperties);
    }
    logHttp(httpInfo) {
        const eventProperties = {
            HTTP_API: httpInfo.apiName,
            HTTP_URL: httpInfo.url,
            HTTP_ClientRequestId: httpInfo.clientRequestId,
            HTTP_CorrelationId: httpInfo.correlationId,
            HTTP_Latency: httpInfo.latency,
            HTTP_GetTeamsContextLatency: httpInfo.getTeamsContextLatency,
            HTTP_GetAuthTokenLatency: httpInfo.getAuthTokenLatency,
            HTTP_ResponseCode: httpInfo.responseCode,
            HTTP_ResponseText: httpInfo.responseText,
            HTTP_RequestMethod: httpInfo.requestMethod,
            HTTP_Edge_Ref: httpInfo.edgeRef,
        };
        this.logEvent(AriaEventTypes.Http, eventProperties);
    }
    logUserBiView(panelLaunchMethod, panelRegion, panelType, dataBag) {
        const event = {
            eventName: _microsoft_teams_telemetry__WEBPACK_IMPORTED_MODULE_1__[/* EventBaseType */ "b"].PanelView,
            properties: {
                [_microsoft_teams_telemetry__WEBPACK_IMPORTED_MODULE_1__[/* UserBiColumns */ "d"].PanelRegion]: panelRegion,
                [_microsoft_teams_telemetry__WEBPACK_IMPORTED_MODULE_1__[/* UserBiColumns */ "d"].PanelType]: panelType,
                [_microsoft_teams_telemetry__WEBPACK_IMPORTED_MODULE_1__[/* UserBiColumns */ "d"].PanelLaunchMethod]: panelLaunchMethod,
                [_microsoft_teams_telemetry__WEBPACK_IMPORTED_MODULE_1__[/* UserBiColumns */ "d"].PanelUri]: window.location.hash,
            },
        };
        this.lastUserBiViewEventTime = performance.now();
        this.addDetailsToEventProperties(dataBag, event.properties);
        this.logUIEvent(event);
    }
    logUserBiAction(scenarioName, scenarioType, moduleName, dataBag, pageLeave) {
        const event = {
            eventName: _microsoft_teams_telemetry__WEBPACK_IMPORTED_MODULE_1__[/* EventBaseType */ "b"].PanelAction,
            properties: {
                [_microsoft_teams_telemetry__WEBPACK_IMPORTED_MODULE_1__[/* UserBiColumns */ "d"].Scenario]: scenarioName,
                [_microsoft_teams_telemetry__WEBPACK_IMPORTED_MODULE_1__[/* UserBiColumns */ "d"].ScenarioType]: Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(scenarioType),
                [_microsoft_teams_telemetry__WEBPACK_IMPORTED_MODULE_1__[/* UserBiColumns */ "d"].ModuleName]: Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(moduleName),
                [_microsoft_teams_telemetry__WEBPACK_IMPORTED_MODULE_1__[/* UserBiColumns */ "d"].PanelUri]: window.location.hash,
                ['Panel.Path']: window.location.hash.replace(guidPattern, guidPlaceholder),
                ['DataBag.PageElapsed']: performance.now() - this.lastUserBiViewEventTime,
                ['DataBag.PageLeave']: !!pageLeave,
            },
        };
        this.addDetailsToEventProperties(dataBag, event.properties);
        this.logUIEvent(event);
    }
    logNonUiTelemetry(nonUiComponent, outcome, details) {
        const eventProperties = {
            SourceComponent: nonUiComponent,
            Event: outcome,
        };
        this.addDetailsToEventProperties(details, eventProperties);
        this.logEvent(AriaEventTypes.NonUiEvent, eventProperties);
    }
    createScenario(name, dataBag) {
        if (!name) {
            throw new Error('Missing scenario name.');
        }
        if (this.activeScenarios[name] != null) {
            console.warn(`trying to create a scenario: ${name} that already exists`);
            return this.activeScenarios[name];
        }
        const newScenario = new _ScenarioLogger__WEBPACK_IMPORTED_MODULE_5__[/* ScenarioLogger */ "a"](this, name, dataBag);
        this.activeScenarios[name] = newScenario;
        return newScenario;
    }
    findScenario(name) {
        return this.activeScenarios[name] ? this.activeScenarios[name] : null;
    }
    markScenario(scenarioName, step, status, eventData) {
        const scenario = this.findScenario(scenarioName);
        if (scenario) {
            scenario.mark(step, status, eventData);
        }
    }
    stopScenario(scenarioName, eventData) {
        const scenario = this.findScenario(scenarioName);
        if (scenario) {
            scenario.stop(eventData);
        }
    }
    failScenario(scenarioName, eventData) {
        const scenario = this.findScenario(scenarioName);
        if (scenario) {
            scenario.fail(eventData);
        }
    }
    logScenario(name, eventData, completeScenario) {
        const eventProperties = { [_microsoft_teams_telemetry__WEBPACK_IMPORTED_MODULE_1__[/* ScenarioColumns */ "c"].ScenarioName]: name };
        Object.keys(eventData).forEach((key) => {
            if (key === 'dataBag') {
                this.addDetailsToEventProperties(eventData.dataBag, eventProperties);
            }
            else {
                eventProperties[key.charAt(0).toUpperCase() + key.slice(1)] = eventData[key];
            }
        });
        this.logEvent(AriaEventTypes.Scenario, eventProperties);
        if (completeScenario) {
            delete this.activeScenarios[name];
        }
    }
    markScenarioComplete(name) {
        if (this.activeScenarios[name] != null) {
            delete this.activeScenarios[name];
        }
    }
    hook(_stream, prefix, ...args) {
        let message = '';
        // more data args are passed, stringify and record
        for (const arg of args) {
            try {
                const formattedArg = JSON.stringify(arg, null, 2);
                message += '\r\n' + formattedArg;
            }
            catch (err) {
                console.warn(`Error stringifying console logs, because: ${err}`);
            }
        }
        switch (prefix) {
            case _common_types__WEBPACK_IMPORTED_MODULE_4__[/* LoggerLevels */ "d"].info:
            case _common_types__WEBPACK_IMPORTED_MODULE_4__[/* LoggerLevels */ "d"].debug:
            case _common_types__WEBPACK_IMPORTED_MODULE_4__[/* LoggerLevels */ "d"].log:
                if (this.isDevelopment) {
                    this.logTraceInternal(prefix, 'console', message);
                }
                break;
            case _common_types__WEBPACK_IMPORTED_MODULE_4__[/* LoggerLevels */ "d"].warn:
            case _common_types__WEBPACK_IMPORTED_MODULE_4__[/* LoggerLevels */ "d"].error:
                this.logTraceInternal(prefix, 'console', message);
                break;
        }
    }
    logTraceDebug(logCategory, message) {
        // If Debug logs are disabled for this user, don't do anything
        if (!this.isLogTraceDebugEnabled()) {
            return;
        }
        this.logTraceInternal(_common_types__WEBPACK_IMPORTED_MODULE_4__[/* LoggerLevels */ "d"].debug, logCategory, message);
    }
    logTraceInfo(logCategory, message) {
        // If Info logs are disabled for this user, don't do anything
        if (!this.isLogTraceInfoEnabled()) {
            return;
        }
        this.logTraceInternal(_common_types__WEBPACK_IMPORTED_MODULE_4__[/* LoggerLevels */ "d"].info, logCategory, message);
    }
    logTraceWarning(logCategory, message) {
        // If Warning logs are disabled for this user, don't do anything
        if (!this.isLogTraceWarningEnabled()) {
            return;
        }
        this.logTraceInternal(_common_types__WEBPACK_IMPORTED_MODULE_4__[/* LoggerLevels */ "d"].warn, logCategory, message);
    }
    logTraceError(logCategory, message) {
        // If Error logs are disabled for this user, don't do anything
        if (!this.isLogTraceErrorEnabled()) {
            return;
        }
        this.logTraceInternal(_common_types__WEBPACK_IMPORTED_MODULE_4__[/* LoggerLevels */ "d"].error, logCategory, message);
    }
    logTraceException(logCategory, options, dataBag) {
        if (this.isDevelopment) {
            console.log(logCategory, JSON.stringify(options));
        }
        // If Exception logs are disabled for this user in production, don't do anything
        if (!this.isLogTraceExceptionEnabled()) {
            return;
        }
        this.logTraceInternal(_common_types__WEBPACK_IMPORTED_MODULE_4__[/* LoggerLevels */ "d"].error, logCategory, options.message, options, dataBag);
    }
    logTraceHttpException(httpAPI, message, httpStatusCode) {
        const messageWithStatusCode = `{${httpAPI}} API call failed with message {${message}}, statusCode {${httpStatusCode}}`;
        if (this.isDevelopment) {
            console.log(messageWithStatusCode);
        }
        if (!this.isLogTraceHTTPExceptionEnabled()) {
            return;
        }
        this.logTraceInternal(_common_types__WEBPACK_IMPORTED_MODULE_4__[/* LoggerLevels */ "d"].error, _common_types__WEBPACK_IMPORTED_MODULE_4__[/* CommonLogCategory */ "a"].HTTPException, messageWithStatusCode);
    }
    flushLogs(callback) {
        const telemetryClients = Object(_microsoft_teams_telemetry__WEBPACK_IMPORTED_MODULE_1__[/* getClients */ "f"])();
        telemetryClients.forEach(telemetryClient => {
            if (telemetryClient.isInitialized()) {
                telemetryClient.flush(callback);
            }
        });
    }
    flushAndTeardown() {
        Object(_microsoft_teams_telemetry__WEBPACK_IMPORTED_MODULE_1__[/* flushTelemetry */ "e"])();
    }
    // Check if debug-level logs are allowed to pass through
    isLogTraceDebugEnabled() {
        return this.logTraceTypes.includes('Debug');
    }
    // Check if info-level logs are allowed to pass through
    isLogTraceInfoEnabled() {
        return this.logTraceTypes.includes('Info');
    }
    // Check if warning-level logs are allowed to pass through
    isLogTraceWarningEnabled() {
        return this.logTraceTypes.includes('Warning');
    }
    // Check if error-level logs are allowed to pass through
    isLogTraceErrorEnabled() {
        return this.logTraceTypes.includes('Error');
    }
    // Check if exception are allowed to pass through
    isLogTraceExceptionEnabled() {
        return this.logTraceTypes.includes('Exception');
    }
    // Check if HTTP exception are allowed to pass through
    isLogTraceHTTPExceptionEnabled() {
        return this.logTraceTypes.includes('HTTPException');
    }
    logTraceInternal(level, logCategory, message, options, dataBag) {
        const eventProperties = {
            LogLevel: level,
            LogCategory: logCategory,
        };
        if (message) {
            eventProperties.Message = message;
        }
        this.addDetailsToEventProperties(dataBag, eventProperties);
        if (options) {
            if (options.error) {
                if (options.error.stack) {
                    eventProperties.CallStack = options.error.stack;
                }
                if (options.error.name) {
                    eventProperties.ExceptionType = options.error.name;
                }
                if (options.error.message) {
                    eventProperties.ExceptionMessage = options.error.message;
                }
                const code = options.error.code;
                if (typeof code === 'string') {
                    eventProperties.ExceptionCode = code;
                }
            }
            if (options.details) {
                eventProperties.Details = options.details;
            }
            if (options.method) {
                eventProperties.Method = options.method;
            }
        }
        this.logEvent(AriaEventTypes.Trace, eventProperties);
    }
    assert(test, ...args) {
        this.originalAssert(test, args);
        if (test === false) {
            this.hook(null, 'err', args);
        }
    }
    addDetailsToEventProperties(details, eventProperties) {
        if (details) {
            const typeOfDetails = typeof details;
            if (typeOfDetails === 'string' || typeOfDetails === 'boolean' || typeOfDetails === 'number') {
                eventProperties['DataBag.info'] = details;
            }
            else {
                Object.keys(details).forEach((key) => {
                    const typeOfDetail = typeof details[key];
                    const eventKey = `DataBag.${key}`;
                    if (typeOfDetail === 'string' || typeOfDetail === 'boolean' || typeOfDetail === 'number') {
                        eventProperties[eventKey] = details[key];
                    }
                    else {
                        eventProperties[eventKey] = JSON.stringify(details[key]);
                    }
                });
            }
        }
    }
    logEvent(eventName, properties) {
        properties['AppInfo.ElapsedTime'] = Math.ceil(performance.now());
        this.initPromise.then(() => {
            Object(_microsoft_teams_telemetry__WEBPACK_IMPORTED_MODULE_1__[/* logEvent */ "h"])(eventName, properties);
        });
    }
    logUIEvent(event) {
        event.properties['AppInfo.ElapsedTime'] = Math.ceil(performance.now());
        this.initPromise.then(() => {
            Object(_microsoft_teams_telemetry__WEBPACK_IMPORTED_MODULE_1__[/* logUIEvent */ "i"])(event);
        });
    }
    getClientConfig() {
        const config = {
            instrumentationKey: this.instrumentationKey,
            channelConfiguration: {
                // Post channel configuration
                eventsLimitInMem: 50,
            },
            webAnalyticsConfiguration: {
                // Web Analytics Plugin configuration
                autoCapture: {
                    scroll: false,
                    pageView: false,
                    onLoad: false,
                    onUnload: false,
                    click: false,
                    jsError: false,
                },
            },
        };
        return config;
    }
    initializeAria() {
        this.ariaTelemetryClient = new _microsoft_teams_telemetry__WEBPACK_IMPORTED_MODULE_1__[/* AriaTelemetryClient */ "a"](this.getClientConfig(), this.isDevelopment);
        Object(_microsoft_teams_telemetry__WEBPACK_IMPORTED_MODULE_1__[/* initializeTelemetryClient */ "g"])(this.ariaTelemetryClient, this.isDevelopment);
    }
    logLoadPerformance() {
        setTimeout(() => {
            var _a;
            let perfDetails = {};
            // https://developer.mozilla.org/en-US/docs/Web/API/PerformancePaintTiming
            performance.getEntriesByType('paint').forEach(p => (perfDetails[p.name] = p.startTime));
            // https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming
            const resPerfs = performance.getEntriesByType('resource');
            const resourceDetails = Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(resPerfs, res => res.initiatorType);
            Object.entries(resourceDetails).map(([type, value]) => {
                const duration = Math.max(...value.map(j => j.responseEnd)) - Math.min(...value.map(j => j.startTime));
                this.logPerformance(`resource-${type}`, window.location.href, duration, undefined, {
                    details: value.map(p => ({
                        name: this.formatUrl(p.name),
                        duration: Math.ceil(p.duration),
                        size: p.transferSize,
                    })),
                });
            });
            const js = resPerfs.filter(ele => ele.initiatorType === 'script');
            perfDetails['download-script'] =
                Math.max(...js.map(j => j.responseEnd)) - Math.min(...js.map(j => j.startTime));
            // https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming
            // https://developer.mozilla.org/en-US/docs/Web/Performance/Navigation_and_resource_timings
            const timeInfo = (_a = performance.getEntriesByType('navigation')) === null || _a === void 0 ? void 0 : _a[0];
            if (!timeInfo) {
                return;
            }
            perfDetails['page-ttfb'] = timeInfo.responseStart - timeInfo.startTime;
            const loadDuration = timeInfo.loadEventStart - timeInfo.startTime;
            perfDetails['page-loading'] = loadDuration;
            perfDetails = Object.assign(Object.assign({}, perfDetails), { Cache: timeInfo.domainLookupStart - timeInfo.fetchStart, Dns: timeInfo.domainLookupEnd - timeInfo.domainLookupStart, Connect: timeInfo.connectEnd - timeInfo.connectStart, Request: timeInfo.responseStart - timeInfo.requestStart, Download: timeInfo.responseEnd - timeInfo.responseStart, Dom: timeInfo.domComplete - timeInfo.responseEnd, Contentload: timeInfo.loadEventEnd - timeInfo.loadEventStart, DOMContentLoaded: timeInfo.domContentLoadedEventEnd - timeInfo.domContentLoadedEventStart, Redirect: timeInfo.redirectEnd - timeInfo.redirectStart });
            this.logPerformance('performance-timing', window.location.href, loadDuration, perfDetails);
        }, 0);
    }
    formatUrl(url) {
        var _a;
        // remove same url prefix
        // eg. https://reports.teams.microsoft.com/dist/js/runtime~main.1234.js to runtime~main.1234.js
        if (url.startsWith(location.origin)) {
            url = (_a = url.split('/').pop()) !== null && _a !== void 0 ? _a : '';
        }
        // remove email
        return decodeURIComponent(url).replace(emailPattern, emailPlaceholder);
    }
}


/***/ }),

/***/ "maUk":
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-people/src/PeoplePile/PeoplePile.styles.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: usePeoplePileStyles */
/*! exports used: usePeoplePileStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return usePeoplePileStyles; });
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "n4Dn");

const usePeoplePileStyles = Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])({
    root: {
        display: 'flex',
        alignItems: 'center',
    },
    coins: {
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
    },
    compactCoins: {
        gap: 0,
        '>:not(:first-child)': {
            marginInlineStart: '-2px',
        },
    },
    overflow: {
        zIndex: 0,
        margin: '0 4px',
        '::before': {
            content: '"+"',
        },
    },
    compactOverflow: {
        margin: '0 2px',
    },
    onlyName: {
        margin: '0 4px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
});


/***/ }),

/***/ "mmDp":
/*!*****************************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/ContentCopyRequestModal/ContentCopyRequestModal.component.tsx ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: ContentCopyRequestModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ContentCopyRequestModal */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react */ "brIe");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react */ "ogYq");
/* harmony import */ var _ContentCopyRequestModal_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContentCopyRequestModal.styles */ "DMX/");
/* harmony import */ var _ContentCopyRequestModalContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ContentCopyRequestModalContent */ "prwL");
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */
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




const ContentCopyRequestModal = (_a) => {
    var { isOpen, modalStyles } = _a, props = __rest(_a, ["isOpen", "modalStyles"]);
    const styles = Object(_ContentCopyRequestModal_styles__WEBPACK_IMPORTED_MODULE_3__[/* useCopyRequestModalStyles */ "b"])();
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* Modal */ "a"], { styles: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__[/* mergeStyleSets */ "E"])(styles, modalStyles), isOpen: isOpen, isBlocking: true, onDismiss: props.onDismiss },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ContentCopyRequestModalContent__WEBPACK_IMPORTED_MODULE_4__[/* ContentCopyRequestModalContent */ "a"], Object.assign({}, props))));
};


/***/ }),

/***/ "n4Dn":
/*!**********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-fluentui-teams-theme/index.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: getTeamsTheme, getPalette, CoreColors, DarkColors, ContrastColors, DefaultV2Colors, DarkV2Colors, SecondaryColors, BoxShadowColors, appWhiteAlpha10, ShadowLevels, getTeamStyles, IOS_FONT_FAMILY, ANDROID_FONT_FAMILY, TeamsThemeDefault, TeamsThemeDark, TeamsThemeContrast, TeamsThemeDefaultV2, TeamsThemeDarkV2, isDarkTheme, isContrastTheme, isDefaultTheme, rem, FontSizes, SEARCH_WELL_FOCUSED_CLASS, makeStyles */
/*! exports used: makeStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return makeStyles; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "QHyR");


const makeStyles = _fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"];


/***/ }),

/***/ "nK6a":
/*!***********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-people/src/PeopleView/index.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: PeopleView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _PeopleView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PeopleView */ "ETwS");
/* unused harmony reexport * */
/* harmony import */ var _PeopleView_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PeopleView.types */ "C6XX");
/* unused harmony reexport * */




/***/ }),

/***/ "nSFl":
/*!************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/services-core/src/operation.ts ***!
  \************************************************************************************************************/
/*! exports provided: ServiceOperation */
/*! exports used: ServiceOperation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceOperation; });
/* harmony import */ var _addressbook_utilities_interceptors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/utilities-interceptors */ "vzP5");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error */ "DPFp");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class ServiceOperation {
    constructor({ baseUrl, fetch = window.fetch, interceptors = [] } = {}) {
        this.baseUrl = baseUrl;
        this.fetch = interceptors.length ? Object(_addressbook_utilities_interceptors__WEBPACK_IMPORTED_MODULE_0__[/* applyInterceptor */ "a"])(Object(_addressbook_utilities_interceptors__WEBPACK_IMPORTED_MODULE_0__[/* composeInterceptors */ "b"])(interceptors), fetch) : fetch;
    }
    request(url, init) {
        return __awaiter(this, void 0, void 0, function* () {
            const request = new Request(new URL(url, this.baseUrl), init);
            const response = yield this.fetch(request);
            if (!response.ok)
                throw new _error__WEBPACK_IMPORTED_MODULE_1__[/* ServiceOperationError */ "a"]({ request, response });
            return response;
        });
    }
    requestJson(url, init) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.request(url, init);
            return response.json();
        });
    }
    requestBlob(url, init) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.request(url, init);
            return response.blob();
        });
    }
}


/***/ }),

/***/ "nqsk":
/*!*********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/services-core/src/interceptors/retry.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: createRetryInterceptor */
/*! exports used: createRetryInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createRetryInterceptor; });
/* harmony import */ var _addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/utilities-core */ "1hmm");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities */ "XMOn");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const defaultMaxRetries = 3;
/**
 * Create a service interceptor that retries requests.
 *
 * @property test A function to test if the response should be retried.
 * @property maxRetries The maximum number of retries.
 * @property backoff A function to calculate the delay between retries, in milliseconds.
 * @returns An interceptor.
 */
function createRetryInterceptor({ test = _utilities__WEBPACK_IMPORTED_MODULE_1__[/* isServerErrorOrTooManyRequests */ "c"], maxRetries = defaultMaxRetries, backoff, } = {}) {
    return (request, proceed) => __awaiter(this, void 0, void 0, function* () {
        let retries = 0;
        while (true) {
            try {
                const response = yield proceed(request.clone());
                if (test(response) && retries++ < maxRetries) {
                    if (backoff)
                        yield Object(_addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_0__[/* delay */ "b"])(backoff(retries, response));
                    continue;
                }
                return response;
            }
            catch (error) {
                if (retries++ < maxRetries) {
                    if (backoff)
                        yield Object(_addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_0__[/* delay */ "b"])(backoff(retries));
                    continue;
                }
                throw error;
            }
        }
    });
}


/***/ }),

/***/ "o+HD":
/*!*******************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/CollapsingArea/CollapsingArea.styles.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: CollapsedClassName, useCollapsingAreaStyles */
/*! exports used: CollapsedClassName, useCollapsingAreaStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollapsedClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useCollapsingAreaStyles; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "ogYq");
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "n4Dn");
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "ZOo+");
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */


const CollapsedClassName = 'is-collapsed';
const useCollapsingAreaStyles = Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* makeStyles */ "a"])(theme => ({
    title: {
        height: '2rem',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        cursor: 'pointer',
        boxSizing: 'border-box',
    },
    button: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'start',
        padding: 0,
        border: 'none',
        background: 'transparent',
    },
    icon: {
        height: '100%',
        paddingRight: '4px',
        color: theme.palette.black,
    },
    text: {
        color: theme.palette.black,
        fontSize: _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_2__[/* FontSizes */ "a"].size12,
        fontWeight: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "e"].bold,
        flex: 1,
    },
    collapsibleRegion: {
        [`.${CollapsedClassName} &`]: {
            display: 'none',
        },
    },
}));


/***/ }),

/***/ "oEFf":
/*!*******************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/TaskModuleV2/TaskModuleV2.component.tsx ***!
  \*******************************************************************************************************************************************/
/*! exports provided: TaskModuleV2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TaskModuleV2 */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react */ "ogYq");
/* harmony import */ var _CommonModal_ModalContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CommonModal/ModalContent */ "uhAr");
/* harmony import */ var _TaskModuleV2_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TaskModuleV2.styles */ "Qvt5");
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */




const TaskModuleV2 = props => {
    const styles = Object(_TaskModuleV2_styles__WEBPACK_IMPORTED_MODULE_3__[/* useTaskModuleV2Styles */ "a"])();
    const contentMergedStyles = Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* mergeStyles */ "F"])(styles.content, props.contentClassName);
    const initialProps = {
        contentClassName: contentMergedStyles,
        headerClassName: styles.header,
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: styles.root },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CommonModal_ModalContent__WEBPACK_IMPORTED_MODULE_2__[/* ModalContent */ "a"], Object.assign({}, props, initialProps))));
};


/***/ }),

/***/ "oRLY":
/*!************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/styles/makeStyles.ts ***!
  \************************************************************************************************************************/
/*! exports provided: makeStyles */
/*! exports used: makeStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return makeStyles; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "QHyR");

const makeStyles = _fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"];


/***/ }),

/***/ "ocL3":
/*!*****************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-metaos-host/src/utils.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: ensureByTeamsInitialization, guardByTeamsInitialization, noop */
/*! exports used: ensureByTeamsInitialization, guardByTeamsInitialization, noop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ensureByTeamsInitialization; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return guardByTeamsInitialization; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return noop; });
/* harmony import */ var _microsoft_teams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/teams-js */ "U9X9");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error */ "SgCh");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


let teamsInitializationPromise;
/**
 * @see https://github.com/MicrosoftDocs/msteams-docs/issues/11221
 * @see https://github.com/OfficeDev/microsoft-teams-library-js/blob/ecbd5626e25381d3e0f704164836258d91d75c6b/packages/teams-js/src/artifactsForCDN/validDomains.json#L4
 */
const additionalMessageOrigins = 'https://teams.microsoftonline.cn';
function ensureTeamsInitializationPromise() {
    return (teamsInitializationPromise !== null && teamsInitializationPromise !== void 0 ? teamsInitializationPromise : (teamsInitializationPromise = _microsoft_teams_js__WEBPACK_IMPORTED_MODULE_0__[/* app */ "a"].initialize([additionalMessageOrigins])));
}
/**
 * Ensure that the Teams SDK is initialized before calling the callback.
 *
 * @param callback The callback to call after initialization.
 * @returns A promise that resolves with the result of the callback.
 */
function ensureByTeamsInitialization(callback) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield ensureTeamsInitializationPromise();
            return yield callback();
        }
        catch (error) {
            throw _error__WEBPACK_IMPORTED_MODULE_1__[/* TeamsError */ "a"].from(error);
        }
    });
}
/**
 * A higher-order function that guards a callback with Teams SDK initialization.
 *
 * @param callback The callback to guard.
 * @returns A guarded callback.
 */
function guardByTeamsInitialization(callback) {
    return (...args) => ensureByTeamsInitialization(() => callback(...args));
}
/**
 * A function that does nothing.
 */
function noop() {
    // Noop
}


/***/ }),

/***/ "p/h3":
/*!*************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/AppHeader/AppHeader.component.tsx ***!
  \*************************************************************************************************************************************/
/*! exports provided: AppHeader */
/*! exports used: AppHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppHeader; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "tZX7");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_appIcon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/appIcon.svg */ "lvLM");
/* harmony import */ var _AppHeader_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AppHeader.styles */ "4P7H");
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */




const AppHeader = ({ items, farItems, title }) => {
    const headerStyles = Object(_AppHeader_styles__WEBPACK_IMPORTED_MODULE_3__[/* useAppHeaderStyles */ "a"])();
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* Stack */ "a"], { as: 'header', horizontal: true, disableShrink: true, horizontalAlign: 'space-between', className: headerStyles.root },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", { src: _assets_appIcon_svg__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], style: { width: ' 36px' } }),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", { className: headerStyles.text }, title),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* Stack */ "a"], { verticalAlign: 'center', grow: true }, items),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* Stack */ "a"], { horizontalAlign: 'center', verticalAlign: 'center' }, farItems)));
};


/***/ }),

/***/ "pVH0":
/*!************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-metaos-host/src/react/useTeamsNavBarMenu.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: useTeamsNavBarMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export useTeamsNavBarMenu */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "ocL3");
/* harmony import */ var _wrappers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../wrappers */ "I06U");



function useTeamsNavBarMenu(items) {
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => update(items), [items]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => () => update([]), []);
}
function update(items) {
    Object(_wrappers__WEBPACK_IMPORTED_MODULE_2__[/* setNavBarMenu */ "i"])(items.map(mapTeamsNavBarMenuItem), id => dispatchTeamsNavBarMenuItemOnClick(id, items)).catch(_utils__WEBPACK_IMPORTED_MODULE_1__[/* noop */ "c"]);
}
function mapTeamsNavBarMenuItem(item) {
    var _a, _b, _c;
    return {
        id: item.id,
        title: (_a = item.title) !== null && _a !== void 0 ? _a : '',
        icon: (_b = item.icon) !== null && _b !== void 0 ? _b : '',
        enabled: !item.disabled,
        selected: (_c = item.selected) !== null && _c !== void 0 ? _c : false,
    };
}
function dispatchTeamsNavBarMenuItemOnClick(id, menuItems) {
    const item = menuItems.find(item => item.id === id);
    if (!item || !item.onClick)
        return false;
    item.onClick();
    return true;
}


/***/ }),

/***/ "pZH0":
/*!*****************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/utilities-interceptors/src/types.ts ***!
  \*****************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



/***/ }),

/***/ "pdPz":
/*!***********************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/CommonLoadingIndicator/CommonLoadingIndicator.styles.ts ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: useLoadingIndicatorStyles */
/*! exports used: useLoadingIndicatorStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useLoadingIndicatorStyles; });
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "n4Dn");

const useLoadingIndicatorStyles = Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])(() => ({
    root: {
        position: 'relative',
    },
    itemProgress: {
        position: 'absolute',
        padding: 0,
        top: 1,
        width: '100%',
    },
}));


/***/ }),

/***/ "prwL":
/*!**************************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/ContentCopyRequestModal/ContentCopyRequestModalContent.tsx ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: ContentCopyRequestModalContent */
/*! exports used: ContentCopyRequestModalContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentCopyRequestModalContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react */ "tZX7");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react */ "9bYq");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react */ "l3kg");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react */ "xRnI");
/* harmony import */ var _CommonIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../CommonIcon */ "Lwxb");
/* harmony import */ var _ContentCopyRequestModal_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ContentCopyRequestModal.styles */ "DMX/");




const ContentCopyRequestModalContent = ({ copyRequestModalHeaderTitle, copyRequestModalCloseButton, copyRequestModalCopyButton, linkTargetTitle, linkPermissionSettingText, onDismiss, LinkPermissionSettingIcon, linkGenerateAndCopy, }) => {
    const styles = Object(_ContentCopyRequestModal_styles__WEBPACK_IMPORTED_MODULE_6__[/* useContentStyles */ "a"])();
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* Stack */ "a"], { horizontal: true, horizontalAlign: 'space-between', role: 'alert', className: styles.header },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CommonIcon__WEBPACK_IMPORTED_MODULE_5__[/* CommonIcon */ "a"], { titleAs: 'h1', className: styles.headerProperty, title: copyRequestModalHeaderTitle, description: linkTargetTitle }),
            onDismiss && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__[/* IconButton */ "a"], { iconProps: { iconName: 'Cancel' }, ariaLabel: copyRequestModalCloseButton, title: copyRequestModalCloseButton, onClick: onDismiss }))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: styles.footer },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* Stack */ "a"], { horizontal: true, className: styles.linkPermissionSetting },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* Stack */ "a"], { horizontalAlign: 'center', className: styles.linkPermissionSettingIcon }, LinkPermissionSettingIcon),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "a"], { block: true, className: styles.linkPermissionSettingTextStyles }, linkPermissionSettingText)),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_4__[/* PrimaryButton */ "a"], { primary: true, text: copyRequestModalCopyButton, onClick: linkGenerateAndCopy }))));
};


/***/ }),

/***/ "qUHg":
/*!**********************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/services-graph/src/client.ts ***!
  \**********************************************************************************************************/
/*! exports provided: GraphServiceClient */
/*! exports used: GraphServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphServiceClient; });
/* harmony import */ var _addressbook_services_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/services-core */ "jTXW");
/* harmony import */ var _resources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resources */ "95X5");


/**
 * A service client for the Microsoft Graph API.
 *
 * @see https://learn.microsoft.com/graph/api/overview
 */
class GraphServiceClient extends _resources__WEBPACK_IMPORTED_MODULE_1__[/* GraphRootResource */ "a"] {
    constructor(operationOptions = {}) {
        super(new _addressbook_services_core__WEBPACK_IMPORTED_MODULE_0__[/* ServiceOperation */ "c"](operationOptions), _addressbook_services_core__WEBPACK_IMPORTED_MODULE_0__[/* ServiceResourceLocator */ "e"].root);
    }
}


/***/ }),

/***/ "qxKi":
/*!******************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/services-graph/src/resources/user.ts ***!
  \******************************************************************************************************************/
/*! exports provided: GraphUserResource */
/*! exports used: GraphUserResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphUserResource; });
/* harmony import */ var _drive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drive */ "7cB0");
/* harmony import */ var _profile_photo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-photo */ "8eDT");
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
 * The user resource.
 *
 * @see https://learn.microsoft.com/graph/api/resources/user
 */
class GraphUserResource {
    constructor(operation, locator) {
        this.operation = operation;
        this.locator = locator;
    }
    /**
     * Navigates to the drive resource.
     *
     * @returns The drive resource.
     * @see https://learn.microsoft.com/graph/api/drive-get
     */
    get drive() {
        return new _drive__WEBPACK_IMPORTED_MODULE_0__[/* GraphDriveResource */ "a"](this.operation, this.locator.extend('drive'));
    }
    /**
     * Navigates to the profile photo resource.
     *
     * @returns The profile photo resource.
     * @see https://learn.microsoft.com/graph/api/profilephoto-get
     */
    get photo() {
        return new _profile_photo__WEBPACK_IMPORTED_MODULE_1__[/* GraphProfilePhotoResource */ "a"](this.operation, this.locator.extend('photo'));
    }
    /**
     * Navigates to the profile photo resource by size.
     *
     * @param size The profile photo size.
     * @returns The profile photo resource.
     * @see https://learn.microsoft.com/graph/api/profilephoto-get
     */
    photos(size) {
        return new _profile_photo__WEBPACK_IMPORTED_MODULE_1__[/* GraphProfilePhotoResource */ "a"](this.operation, this.locator.extend('photos', `${size}x${size}`));
    }
    /**
     * Get Presence of the user.
     *
     * @returns The presence of the user.
     * @see https://learn.microsoft.com/en-us/graph/api/presence-get
     */
    getPresence(signal) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const url = `/v1.0/${this.locator.path}/presence`;
            const response = yield this.operation.requestJson(url, { signal });
            return (_a = response.availability) !== null && _a !== void 0 ? _a : 'PresenceUnknown'; // Possible values are Available, AvailableIdle, Away, BeRightBack, Busy, BusyIdle, DoNotDisturb, Offline, PresenceUnknown
        });
    }
    /**
     * Get Presence of the user.
     *
     * @returns The presence of the user.
     * @see https://learn.microsoft.com/en-us/graph/api/orgcontact-get-manager
     */
    getManager(signal) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `/v1.0/${this.locator.path}/manager`;
            const response = yield this.operation.requestJson(url, { signal });
            console.log('url:', url);
            console.log('response:', response);
            return response;
        });
    }
    /**
     * Gets my site URL of the user.
     *
     * @param signal The abort signal.
     * @returns The my site URL.
     * @see https://learn.microsoft.com/graph/api/user-get
     */
    getMySite(signal) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const url = `/v1.0/${this.locator.path}?$select=mySite`;
            const response = yield this.operation.requestJson(url, { signal });
            return (_a = response.mySite) !== null && _a !== void 0 ? _a : '';
        });
    }
}


/***/ }),

/***/ "rLoY":
/*!**********************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/utilities-core/src/images.ts ***!
  \**********************************************************************************************************/
/*! exports provided: measureImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export measureImage */
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
 * Measures the size of an image.
 *
 * @param blob The image to measure.
 * @returns The size of the image.
 */
function measureImage(blob) {
    return __awaiter(this, void 0, void 0, function* () {
        const objectUrl = URL.createObjectURL(blob);
        try {
            const image = new Image();
            image.src = objectUrl;
            yield image.decode();
            return { width: image.naturalWidth, height: image.naturalHeight };
        }
        finally {
            URL.revokeObjectURL(objectUrl);
        }
    });
}


/***/ }),

/***/ "rXaL":
/*!*************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/MobileSheet/MobileSheet.styles.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: useMobileSheetStyles, useMobileSheetContainerStyles, useMobileSheetBackdropStyles */
/*! exports used: useMobileSheetBackdropStyles, useMobileSheetContainerStyles, useMobileSheetStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return useMobileSheetStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useMobileSheetContainerStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useMobileSheetBackdropStyles; });
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "n4Dn");

const useMobileSheetStyles = Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])(theme => ({
    content: {
        overflow: 'auto',
        maxHeight: 'calc(100vh - 54px)',
        minHeight: '90px', // for A11y - voice control overlay show number in iOS Safari.
    },
    header: {
        height: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    handler: {
        width: '36px',
        height: '4px',
        background: theme.palette.neutralTertiaryAlt,
        borderRadius: '2px',
    },
}));
const useMobileSheetContainerStyles = Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])(theme => ({
    background: theme.palette.white,
    paddingBottom: '8px',
}));
const useMobileSheetBackdropStyles = Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])({ border: 'none' });


/***/ }),

/***/ "sSa5":
/*!*********************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/utilities-core/src/mimes.ts ***!
  \*********************************************************************************************************/
/*! exports provided: getMimeByDataUrl, getExtensionByMime, isImageMime */
/*! exports used: isImageMime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getMimeByDataUrl */
/* unused harmony export getExtensionByMime */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isImageMime; });
/**
 * Gets the mime type of a data URL.
 *
 * @param dataUrl The data URL to get the mime type of.
 * @returns The mime type of the data URL, or `undefined` if the data URL is invalid.
 * @see https://developer.mozilla.org/docs/web/http/basics_of_http/data_urls
 * @example getMimeByDataUrl('data:,') // ''
 * @example getMimeByDataUrl('data:text/plain,42%207') // 'text/plain'
 * @example getMimeByDataUrl('data:;base64,') // ''
 * @example getMimeByDataUrl('data:application/octet-stream;base64,NDIgNw==') // 'application/octet-stream'
 * @example getMimeByDataUrl('') // undefined
 * @example getMimeByDataUrl('invalid') // undefined
 */
function getMimeByDataUrl(dataUrl) {
    var _a;
    return (_a = dataUrl.match(/^data:(.*?)(?:;base64)?,\S*$/)) === null || _a === void 0 ? void 0 : _a[1];
}
/**
 * Gets the extension by a mime type.
 *
 * @param mime The mime type.
 * @returns The extension.
 * @example getExtensionByMime('image/png') // 'png'
 * @example getExtensionByMime('application/octet-stream') // undefined
 */
function getExtensionByMime(mime) {
    return mimeExtensionMapping[mime];
}
/**
 * The mapping from mime types to extensions.
 *
 * @see https://www.iana.org/assignments/media-types/media-types.xhtml
 * @see https://developer.mozilla.org/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
 */
const mimeExtensionMapping = {
    'image/apng': 'apng',
    'image/avif': 'avif',
    'image/bmp': 'bmp',
    'image/gif': 'gif',
    'image/heic': 'heic',
    'image/heif': 'heif',
    'image/jpeg': 'jpg',
    'image/png': 'png',
    'image/svg+xml': 'svg',
    'image/tiff': 'tiff',
    'image/vnd.microsoft.icon': 'ico',
    'image/webp': 'webp',
};
/**
 * Checks if a mime type is an image mime type.
 *
 * @param mime The mime type to check.
 * @returns `true` if the mime type is an image mime type, otherwise `false`.
 * @example isImageMime('image/png') // true
 * @example isImageMime('application/octet-stream') // false
 */
function isImageMime(mime) {
    return mime.startsWith('image/');
}


/***/ }),

/***/ "sndZ":
/*!*************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/CommonModal/CommonModal.styles.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: useModalStyles, useContentStyles, useShareSubmissionCardConsentStyles */
/*! exports used: useContentStyles, useModalStyles, useShareSubmissionCardConsentStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useModalStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useContentStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return useShareSubmissionCardConsentStyles; });
/* harmony import */ var _styles_makeStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/makeStyles */ "oRLY");
/* harmony import */ var _styles_ellipsisStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/ellipsisStyles */ "btUH");
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */


const horizontalPaddingGap = '30px';
const verticalPaddingGap = '24px';
const useModalStyles = /* #__PURE__*/ Object(_styles_makeStyles__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])({
    main: {
        width: '1000px',
        height: '700px',
        maxHeight: '100%',
        maxWidth: '100%',
    },
    scrollableContent: {
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '30px',
        paddingBottom: '20px',
        gap: '10px',
        boxSizing: 'border-box',
    },
});
const useContentStyles = /* #__PURE__*/ Object(_styles_makeStyles__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])({
    placeHolder: {
        paddingBottom: '0.5rem',
    },
    header: {
        display: 'flex',
        height: '2.25rem',
        alignItems: 'center',
        flexShrink: 0,
        padding: `0 ${horizontalPaddingGap}`,
        '>:first-child': {
            flex: '1 1 auto',
            minWidth: 0,
        },
    },
    content: {
        flex: '1 1 auto',
        overflowY: 'auto',
        'overflow-y': 'overlay',
        padding: `${verticalPaddingGap} ${horizontalPaddingGap}`, // using the same inner padding to make scrollbar right
    },
    footer: {
        padding: `0 ${horizontalPaddingGap}`,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: '0.5rem',
        '>.ms-Button--action': {
            marginInlineEnd: 'auto',
        },
    },
});
const useShareSubmissionCardConsentStyles = Object(_styles_makeStyles__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])(theme => ({
    root: {
        '&.ms-Checkbox': {
            padding: 0,
        },
    },
    checkbox: {
        borderColor: theme.palette.neutralDark,
    },
    text: [
        {
            width: '10rem',
        },
        Object(_styles_ellipsisStyles__WEBPACK_IMPORTED_MODULE_1__[/* ellipsisStyles */ "a"])(1),
    ],
}));


/***/ }),

/***/ "tPyQ":
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-fluentui-teams-theme/src/teams/teams-theme.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: IOS_FONT_FAMILY, ANDROID_FONT_FAMILY, TeamsThemeDefault, TeamsThemeDark, TeamsThemeContrast, TeamsThemeDefaultV2, TeamsThemeDarkV2, isDarkTheme, isContrastTheme, isDefaultTheme */
/*! exports used: TeamsThemeContrast, TeamsThemeDark, TeamsThemeDarkV2, TeamsThemeDefault, TeamsThemeDefaultV2, isContrastTheme, isDarkTheme, isDefaultTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export IOS_FONT_FAMILY */
/* unused harmony export ANDROID_FONT_FAMILY */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return TeamsThemeDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TeamsThemeDark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamsThemeContrast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return TeamsThemeDefaultV2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TeamsThemeDarkV2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return isDarkTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return isContrastTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return isDefaultTheme; });
/* harmony import */ var _fluentui_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/theme */ "j03K");
/* harmony import */ var _teams_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./teams-colors */ "McEG");
/* harmony import */ var _teams_sizes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./teams-sizes */ "ZOo+");
/* istanbul ignore file */



const iosBaseFont = '-apple-system, BlinkMacSystemFont';
const andoridBaseFontFont = 'Roboto';
const IOS_FONT_FAMILY = `${iosBaseFont}, sans-serif`;
const ANDROID_FONT_FAMILY = `${andoridBaseFontFont}, sans-serif`;
const defaultFontStyle = {
    fontFamily: `${iosBaseFont}, "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", ${andoridBaseFontFont} sans-serif`,
};
const fonts = {
    tiny: { fontSize: _teams_sizes__WEBPACK_IMPORTED_MODULE_2__[/* FontSizes */ "a"].size10 },
    xSmall: { fontSize: _teams_sizes__WEBPACK_IMPORTED_MODULE_2__[/* FontSizes */ "a"].size10 },
    small: { fontSize: _teams_sizes__WEBPACK_IMPORTED_MODULE_2__[/* FontSizes */ "a"].size12 },
    smallPlus: { fontSize: _teams_sizes__WEBPACK_IMPORTED_MODULE_2__[/* FontSizes */ "a"].size12 },
    medium: { fontSize: _teams_sizes__WEBPACK_IMPORTED_MODULE_2__[/* FontSizes */ "a"].size14 },
    mediumPlus: { fontSize: _teams_sizes__WEBPACK_IMPORTED_MODULE_2__[/* FontSizes */ "a"].size16 },
    large: { fontSize: _teams_sizes__WEBPACK_IMPORTED_MODULE_2__[/* FontSizes */ "a"].size18 },
    xLarge: { fontSize: _teams_sizes__WEBPACK_IMPORTED_MODULE_2__[/* FontSizes */ "a"].size20 },
    xLargePlus: { fontSize: _teams_sizes__WEBPACK_IMPORTED_MODULE_2__[/* FontSizes */ "a"].size24 },
    xxLarge: { fontSize: _teams_sizes__WEBPACK_IMPORTED_MODULE_2__[/* FontSizes */ "a"].size28 },
    xxLargePlus: { fontSize: _teams_sizes__WEBPACK_IMPORTED_MODULE_2__[/* FontSizes */ "a"].size32 },
    superLarge: { fontSize: _teams_sizes__WEBPACK_IMPORTED_MODULE_2__[/* FontSizes */ "a"].size42 },
    mega: { fontSize: _teams_sizes__WEBPACK_IMPORTED_MODULE_2__[/* FontSizes */ "a"].size68 },
};
const TeamsThemeDefault = Object(_fluentui_theme__WEBPACK_IMPORTED_MODULE_0__[/* createTheme */ "a"])({
    defaultFontStyle,
    fonts,
    palette: {
        black: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* CoreColors */ "c"].appBlack,
        neutralDark: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* CoreColors */ "c"].appGray02,
        neutralPrimary: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* CoreColors */ "c"].appGray03,
        neutralPrimaryAlt: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* CoreColors */ "c"].appGray03,
        neutralSecondary: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* CoreColors */ "c"].appGray04,
        neutralTertiary: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* CoreColors */ "c"].appGray06,
        neutralTertiaryAlt: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* CoreColors */ "c"].appGray08,
        neutralQuaternary: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* CoreColors */ "c"].appGray09,
        neutralQuaternaryAlt: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* CoreColors */ "c"].appGray09,
        neutralLight: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* CoreColors */ "c"].appGray10,
        neutralLighter: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* CoreColors */ "c"].appGray12,
        neutralLighterAlt: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* CoreColors */ "c"].appGray14,
        white: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* CoreColors */ "c"].appWhite,
        // themeDark & ThemeDarkAlt has same color values, themeLighter & themeLighterAlt has same color values
        themeDarker: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* CoreColors */ "c"].appBrand02,
        themeDark: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* CoreColors */ "c"].appBrand04,
        themeDarkAlt: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* CoreColors */ "c"].appBrand04,
        themePrimary: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* CoreColors */ "c"].appBrand06,
        themeSecondary: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* CoreColors */ "c"].appBrand08,
        themeTertiary: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* CoreColors */ "c"].appBrand12,
        themeLight: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* CoreColors */ "c"].appBrand14,
        themeLighter: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* CoreColors */ "c"].appBrand16,
        themeLighterAlt: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* CoreColors */ "c"].appBrand16,
        red: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* CoreColors */ "c"].appRed,
        redLight: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* CoreColors */ "c"].appRedLight,
        redDark: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* CoreColors */ "c"].appRedDark,
        green: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* CoreColors */ "c"].appGreen,
        greenLight: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* CoreColors */ "c"].appGreenLight,
        greenDark: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* CoreColors */ "c"].appGreenDark,
    },
    semanticColors: {
        inputText: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* CoreColors */ "c"].appBrand06,
        inputBackground: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* CoreColors */ "c"].appBrand16,
    },
});
TeamsThemeDefault.name = 'default';
const TeamsThemeDark = Object(_fluentui_theme__WEBPACK_IMPORTED_MODULE_0__[/* createTheme */ "a"])({
    defaultFontStyle,
    fonts,
    palette: {
        black: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkColors */ "d"].appBlack,
        neutralDark: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkColors */ "d"].appGray02,
        neutralPrimary: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkColors */ "d"].appGray03,
        neutralPrimaryAlt: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkColors */ "d"].appGray03,
        neutralSecondary: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkColors */ "d"].appGray04,
        neutralTertiary: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkColors */ "d"].appGray06,
        neutralTertiaryAlt: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkColors */ "d"].appGray08,
        neutralQuaternary: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkColors */ "d"].appGray09,
        neutralQuaternaryAlt: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkColors */ "d"].appGray09,
        neutralLight: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkColors */ "d"].appGray10,
        neutralLighter: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkColors */ "d"].appGray12,
        neutralLighterAlt: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkColors */ "d"].appGray14,
        white: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkColors */ "d"].appWhite,
        // themeDark & ThemeDarkAlt has same color values, themeLighter & themeLighterAlt has same color values
        themeDarker: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkColors */ "d"].appBrand02,
        themeDark: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkColors */ "d"].appBrand04,
        themeDarkAlt: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkColors */ "d"].appBrand04,
        themePrimary: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkColors */ "d"].appBrand06,
        themeSecondary: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkColors */ "d"].appBrand08,
        themeTertiary: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkColors */ "d"].appBrand12,
        themeLight: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkColors */ "d"].appBrand14,
        themeLighter: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkColors */ "d"].appBrand16,
        themeLighterAlt: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkColors */ "d"].appBrand16,
        red: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkColors */ "d"].appRed,
        redLight: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkColors */ "d"].appRedLight,
        redDark: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkColors */ "d"].appRedDark,
        green: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkColors */ "d"].appGreen,
        greenLight: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkColors */ "d"].appGreenLight,
        greenDark: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkColors */ "d"].appGreenDark,
    },
    semanticColors: {
        inputText: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkColors */ "d"].appBrand06,
        inputBackground: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkColors */ "d"].appBrand16,
    },
    isInverted: true,
});
TeamsThemeDark.name = 'dark';
const TeamsThemeContrast = Object(_fluentui_theme__WEBPACK_IMPORTED_MODULE_0__[/* createTheme */ "a"])({
    defaultFontStyle,
    fonts,
    palette: {
        black: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* ContrastColors */ "b"].appBlack,
        neutralDark: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* ContrastColors */ "b"].appGray02,
        neutralPrimary: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* ContrastColors */ "b"].appGray03,
        neutralPrimaryAlt: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* ContrastColors */ "b"].appGray03,
        neutralSecondary: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* ContrastColors */ "b"].appGray04,
        neutralTertiary: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* ContrastColors */ "b"].appGray06,
        neutralTertiaryAlt: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* ContrastColors */ "b"].appGray08,
        neutralQuaternary: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* ContrastColors */ "b"].appGray09,
        neutralQuaternaryAlt: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* ContrastColors */ "b"].appGray09,
        neutralLight: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* ContrastColors */ "b"].appGray10,
        neutralLighter: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* ContrastColors */ "b"].appGray12,
        neutralLighterAlt: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* ContrastColors */ "b"].appGray14,
        white: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* ContrastColors */ "b"].appWhite,
        // themeDark & ThemeDarkAlt has same color values, themeLighter & themeLighterAlt has same color values
        themeDarker: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* ContrastColors */ "b"].appBrand02,
        themeDark: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* ContrastColors */ "b"].appBrand04,
        themeDarkAlt: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* ContrastColors */ "b"].appBrand04,
        themePrimary: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* ContrastColors */ "b"].appBrand06,
        themeSecondary: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* ContrastColors */ "b"].appBrand08,
        themeTertiary: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* ContrastColors */ "b"].appBrand12,
        themeLight: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* ContrastColors */ "b"].appBrand14,
        themeLighter: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* ContrastColors */ "b"].appBrand16,
        themeLighterAlt: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* ContrastColors */ "b"].appBrand16,
        red: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* ContrastColors */ "b"].appRed,
        redLight: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* ContrastColors */ "b"].appRedLight,
        redDark: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* ContrastColors */ "b"].appRedDark,
        green: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* ContrastColors */ "b"].appGreen,
        greenLight: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* ContrastColors */ "b"].appGreenLight,
        greenDark: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* ContrastColors */ "b"].appGreenDark,
    },
    semanticColors: {
        inputText: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* ContrastColors */ "b"].appBrand06,
        inputBackground: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* ContrastColors */ "b"].appBrand16,
        bodyText: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* ContrastColors */ "b"].appBlack,
    },
});
TeamsThemeContrast.name = 'contrast';
const TeamsThemeDefaultV2 = Object(_fluentui_theme__WEBPACK_IMPORTED_MODULE_0__[/* createTheme */ "a"])({
    defaultFontStyle,
    fonts,
    palette: {
        black: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DefaultV2Colors */ "f"].appBlack,
        neutralDark: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DefaultV2Colors */ "f"].appGray02,
        neutralPrimary: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DefaultV2Colors */ "f"].appGray03,
        neutralPrimaryAlt: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DefaultV2Colors */ "f"].appGray03,
        neutralSecondary: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DefaultV2Colors */ "f"].appGray04,
        neutralTertiary: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DefaultV2Colors */ "f"].appGray06,
        neutralTertiaryAlt: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DefaultV2Colors */ "f"].appGray08,
        neutralQuaternary: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DefaultV2Colors */ "f"].appGray09,
        neutralQuaternaryAlt: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DefaultV2Colors */ "f"].appGray09,
        neutralLight: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DefaultV2Colors */ "f"].appGray10,
        neutralLighter: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DefaultV2Colors */ "f"].appGray12,
        neutralLighterAlt: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DefaultV2Colors */ "f"].appGray14,
        white: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DefaultV2Colors */ "f"].appWhite,
        // themeDark & ThemeDarkAlt has same color values, themeLighter & themeLighterAlt has same color values
        themeDarker: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DefaultV2Colors */ "f"].appBrand02,
        themeDark: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DefaultV2Colors */ "f"].appBrand04,
        themeDarkAlt: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DefaultV2Colors */ "f"].appBrand04,
        themePrimary: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DefaultV2Colors */ "f"].appBrand06,
        themeSecondary: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DefaultV2Colors */ "f"].appBrand08,
        themeTertiary: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DefaultV2Colors */ "f"].appBrand12,
        themeLight: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DefaultV2Colors */ "f"].appBrand14,
        themeLighter: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DefaultV2Colors */ "f"].appBrand16,
        themeLighterAlt: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DefaultV2Colors */ "f"].appBrand16,
        red: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DefaultV2Colors */ "f"].appRed,
        redLight: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DefaultV2Colors */ "f"].appRedLight,
        redDark: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DefaultV2Colors */ "f"].appRedDark,
        green: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DefaultV2Colors */ "f"].appGreen,
        greenLight: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DefaultV2Colors */ "f"].appGreenLight,
        greenDark: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DefaultV2Colors */ "f"].appGreenDark,
    },
    semanticColors: {
        inputText: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DefaultV2Colors */ "f"].appBrand06,
        inputBackground: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DefaultV2Colors */ "f"].appBrand16,
    },
});
TeamsThemeDefaultV2.name = 'defaultV2';
const TeamsThemeDarkV2 = Object(_fluentui_theme__WEBPACK_IMPORTED_MODULE_0__[/* createTheme */ "a"])({
    defaultFontStyle,
    fonts,
    palette: {
        black: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkV2Colors */ "e"].appBlack,
        neutralDark: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkV2Colors */ "e"].appGray02,
        neutralPrimary: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkV2Colors */ "e"].appGray03,
        neutralPrimaryAlt: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkV2Colors */ "e"].appGray03,
        neutralSecondary: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkV2Colors */ "e"].appGray04,
        neutralTertiary: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkV2Colors */ "e"].appGray06,
        neutralTertiaryAlt: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkV2Colors */ "e"].appGray08,
        neutralQuaternary: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkV2Colors */ "e"].appGray09,
        neutralQuaternaryAlt: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkV2Colors */ "e"].appGray09,
        neutralLight: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkV2Colors */ "e"].appGray10,
        neutralLighter: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkV2Colors */ "e"].appGray12,
        neutralLighterAlt: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkV2Colors */ "e"].appGray14,
        white: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkV2Colors */ "e"].appWhite,
        // themeDark & ThemeDarkAlt has same color values, themeLighter & themeLighterAlt has same color values
        themeDarker: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkV2Colors */ "e"].appBrand02,
        themeDark: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkV2Colors */ "e"].appBrand04,
        themeDarkAlt: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkV2Colors */ "e"].appBrand04,
        themePrimary: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkV2Colors */ "e"].appBrand06,
        themeSecondary: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkV2Colors */ "e"].appBrand08,
        themeTertiary: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkV2Colors */ "e"].appBrand12,
        themeLight: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkV2Colors */ "e"].appBrand14,
        themeLighter: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkV2Colors */ "e"].appBrand16,
        themeLighterAlt: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkV2Colors */ "e"].appBrand16,
        red: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkV2Colors */ "e"].appRed,
        redLight: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkV2Colors */ "e"].appRedLight,
        redDark: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkV2Colors */ "e"].appRedDark,
        green: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkV2Colors */ "e"].appGreen,
        greenLight: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkV2Colors */ "e"].appGreenLight,
        greenDark: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkV2Colors */ "e"].appGreenDark,
    },
    semanticColors: {
        inputText: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkV2Colors */ "e"].appBrand06,
        inputBackground: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkV2Colors */ "e"].appBrand16,
    },
    isInverted: true,
});
TeamsThemeDarkV2.name = 'darkV2';
/**
 * Checks whether theme is dark or not.
 *
 * @param themeName the theme name
 * @returns true if the theme is dark, false otherwise.
 */
function isDarkTheme(themeName) {
    return themeName === 'dark';
}
/**
 * Checks whether theme is contrast or not.
 *
 * @param themeName the theme name
 * @returns true if the theme is contrast, false otherwise.
 */
function isContrastTheme(themeName) {
    return themeName === 'contrast';
}
/**
 * Checks whether theme is default or not.
 *
 * @param themeName the theme name
 * @returns true if the theme is default, false otherwise.
 */
function isDefaultTheme(themeName) {
    return themeName === 'default';
}


/***/ }),

/***/ "uWkf":
/*!***********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/Spinner/Spinner.tsx ***!
  \***********************************************************************************************************************/
/*! exports provided: SpinnerSize, Spinner */
/*! exports used: Spinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SpinnerSize */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Spinner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react */ "ogYq");
/* harmony import */ var _assets_spinner_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/spinner.svg */ "3gQd");
/* harmony import */ var _Spinner_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Spinner.styles */ "gzbv");
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




var SpinnerSize;
(function (SpinnerSize) {
    SpinnerSize[SpinnerSize["Small"] = 24] = "Small";
    SpinnerSize[SpinnerSize["Medium"] = 32] = "Medium";
    SpinnerSize[SpinnerSize["Large"] = 48] = "Large";
})(SpinnerSize || (SpinnerSize = {}));
const Spinner = (_a) => {
    var { size = SpinnerSize.Medium, className } = _a, props = __rest(_a, ["size", "className"]);
    const styles = Object(_Spinner_styles__WEBPACK_IMPORTED_MODULE_3__[/* useSpinnerStyles */ "a"])();
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object.assign({ className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* mergeStyles */ "F"])(styles.root, className), role: 'progressbar', "aria-busy": true }, props),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* mergeStyles */ "F"])(styles.bound, { width: size, height: size }) },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_spinner_svg__WEBPACK_IMPORTED_MODULE_2__[/* ReactComponent */ "a"], { className: styles.animated }))));
};


/***/ }),

/***/ "uhAr":
/*!********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/CommonModal/ModalContent.tsx ***!
  \********************************************************************************************************************************/
/*! exports provided: ModalContent */
/*! exports used: ModalContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalContent; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "ogYq");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react */ "9bYq");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react */ "kqob");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react */ "BFcr");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react */ "Favm");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react */ "xRnI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _CommonIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../CommonIcon */ "Lwxb");
/* harmony import */ var _CommonLoadingIndicator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../CommonLoadingIndicator */ "HKfi");
/* harmony import */ var _CommonModal_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CommonModal.styles */ "sndZ");





const ModalContent = ({ headerProps, secondaryBtnProps, subsidiaryBtnProps, primaryBtnProps, children, contentRef, closeButtonAriaLabel, onDismiss, titleId, subTitleId, contentClassName, headerClassName, footerClassName, isFetching, titleFarItem, footerItem, shareSubmissionCardConsentShow, shareSubmissionCardConsentOptionChecked, onShareSubmissionCardConsentOptionChange, shareSubmissionCardConsentOptionLabel, placeHolderItem, }) => {
    const styles = Object(_CommonModal_styles__WEBPACK_IMPORTED_MODULE_9__[/* useContentStyles */ "a"])();
    const shareSubmissionCardConsentStyles = Object(_CommonModal_styles__WEBPACK_IMPORTED_MODULE_9__[/* useShareSubmissionCardConsentStyles */ "c"])();
    return (react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", { role: 'alert', "aria-busy": !headerProps, className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* mergeStyles */ "F"])(styles.header, headerClassName) },
            react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_CommonIcon__WEBPACK_IMPORTED_MODULE_7__[/* CommonIcon */ "a"], Object.assign({ titleAs: 'h1', titleId: titleId, descriptionId: subTitleId }, headerProps)),
            titleFarItem,
            onDismiss && (react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* IconButton */ "a"], { iconProps: { iconName: 'Cancel' }, ariaLabel: closeButtonAriaLabel, title: closeButtonAriaLabel, onClick: onDismiss }))),
        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_CommonLoadingIndicator__WEBPACK_IMPORTED_MODULE_8__[/* CommonLoadingIndicator */ "a"], { isFetching: isFetching }),
        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", { className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* mergeStyles */ "F"])(styles.content, contentClassName), ref: contentRef, "data-is-scrollable": true },
            placeHolderItem && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", { className: styles.placeHolder }, placeHolderItem),
            children),
        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", { className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* mergeStyles */ "F"])(styles.footer, footerClassName) },
            shareSubmissionCardConsentShow && (react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__[/* Checkbox */ "a"], { label: shareSubmissionCardConsentOptionLabel, checked: shareSubmissionCardConsentOptionChecked, onChange: (_, checked) => onShareSubmissionCardConsentOptionChange === null || onShareSubmissionCardConsentOptionChange === void 0 ? void 0 : onShareSubmissionCardConsentOptionChange(checked), styles: shareSubmissionCardConsentStyles })),
            secondaryBtnProps && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_3__[/* ActionButton */ "a"], Object.assign({}, secondaryBtnProps)),
            footerItem,
            subsidiaryBtnProps && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_4__[/* DefaultButton */ "a"], Object.assign({}, subsidiaryBtnProps)),
            primaryBtnProps && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_5__[/* PrimaryButton */ "a"], Object.assign({ primary: true }, primaryBtnProps)))));
};


/***/ }),

/***/ "vuOn":
/*!*****************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/MobileSheet/MobileSheet.component.tsx ***!
  \*****************************************************************************************************************************************/
/*! exports provided: MobileSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MobileSheet */
/* harmony import */ var _fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react-hooks */ "6MXf");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal_sheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal-sheet */ "1kBo");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react */ "lLjQ");
/* harmony import */ var _MobileSheet_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MobileSheet.styles */ "rXaL");
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */





const MobileSheet = ({ onDismiss, content, snapPoints, initialSnap, }) => {
    const styles = Object(_MobileSheet_styles__WEBPACK_IMPORTED_MODULE_4__[/* useMobileSheetStyles */ "c"])();
    const containerStyles = Object(_MobileSheet_styles__WEBPACK_IMPORTED_MODULE_4__[/* useMobileSheetContainerStyles */ "b"])();
    const backdropStyles = Object(_MobileSheet_styles__WEBPACK_IMPORTED_MODULE_4__[/* useMobileSheetBackdropStyles */ "a"])();
    const [isOpen, { setFalse: onClose }] = Object(_fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useBoolean */ "a"])(true);
    const keyEventName = 'keydown';
    react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener(keyEventName, handleKeyDown, true);
        return () => {
            document.removeEventListener(keyEventName, handleKeyDown, true);
        };
    }, [onClose]);
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_modal_sheet__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], { snapPoints: snapPoints, initialSnap: initialSnap, isOpen: isOpen, onClose: onClose, onCloseEnd: onDismiss, detent: 'content-height' },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_modal_sheet__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].Container, { style: containerStyles },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_3__[/* FocusTrapZone */ "a"], null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_modal_sheet__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].Header, null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: styles.header },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: styles.handler }))),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_modal_sheet__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].Content, null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: styles.content }, content)))),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_modal_sheet__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].Backdrop, { style: backdropStyles, onTap: onClose })));
};


/***/ }),

/***/ "vzP5":
/*!*****************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/utilities-interceptors/src/index.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: applyInterceptor, composeInterceptors */
/*! exports used: applyInterceptor, composeInterceptors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "pZH0");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "MpPh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["b"]; });





/***/ }),

/***/ "wbAm":
/*!****************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/CommonSlideDots/index.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: CommonSlideDots */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _CommonSlideDots__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommonSlideDots */ "0Q/W");
/* unused harmony reexport * */
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */



/***/ }),

/***/ "wzJJ":
/*!*************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-people/src/PeopleSelect/index.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: PeopleSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _PeopleSelect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PeopleSelect */ "xu4S");
/* unused harmony reexport * */
/* harmony import */ var _PeopleSelect_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PeopleSelect.types */ "CS/u");
/* unused harmony reexport * */




/***/ }),

/***/ "xUmT":
/*!****************************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/ContentCopyResponseModal/ContentCopyResponseModalContent.tsx ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: ContentCopyRequestModalContent */
/*! exports used: ContentCopyRequestModalContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentCopyRequestModalContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react */ "tZX7");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react */ "9bYq");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react */ "l3kg");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react */ "XgkO");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react */ "xRnI");
/* harmony import */ var _ContentCopyResponseModal_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ContentCopyResponseModal.styles */ "G1AE");



const ContentCopyRequestModalContent = ({ copyRequestModalCloseButton, copyRequestModalCopyButton, copyLinkSuccessInfo, linkPermissionSettingText, generatedLink, onDismiss, CopySuccessIcon, LinkPermissionSettingIcon, copyContentToClip, }) => {
    const styles = Object(_ContentCopyResponseModal_styles__WEBPACK_IMPORTED_MODULE_6__[/* useContentStyles */ "a"])();
    const linkPlaceTextFieldStyles = Object(_ContentCopyResponseModal_styles__WEBPACK_IMPORTED_MODULE_6__[/* useLinkPlaceTextFieldStyles */ "c"])();
    const textFieldRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);
    const focusTextField = () => {
        var _a;
        (_a = textFieldRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        if (copyContentToClip) {
            copyContentToClip();
        }
    };
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
        var _a;
        (_a = textFieldRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* Stack */ "a"], { horizontal: true, reversed: true, role: 'alert', className: styles.header }, onDismiss && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__[/* IconButton */ "a"], { iconProps: { iconName: 'Cancel' }, ariaLabel: copyRequestModalCloseButton, title: copyRequestModalCloseButton, onClick: onDismiss }))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* Stack */ "a"], { className: styles.contents },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* Stack */ "a"], { horizontalAlign: 'center', className: styles.copySuccessIcon }, CopySuccessIcon),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* Stack */ "a"], { horizontal: true, horizontalAlign: 'center', className: styles.copyTitle },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "a"], { block: true, nowrap: true }, copyLinkSuccessInfo)),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* Stack */ "a"], { horizontal: true, horizontalAlign: 'space-between', className: styles.copyContent, tokens: { childrenGap: '4px' } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_4__[/* TextField */ "a"], { underlined: true, readOnly: true, defaultValue: generatedLink, styles: linkPlaceTextFieldStyles, componentRef: textFieldRef, onFocus: e => e.target.select(), validateOnFocusIn: true, validateOnLoad: true }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_5__[/* PrimaryButton */ "a"], { primary: true, text: copyRequestModalCopyButton, onClick: focusTextField })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* Stack */ "a"], { horizontal: true, className: styles.linkPermissionSetting },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* Stack */ "a"], { horizontalAlign: 'center', className: styles.linkPermissionSettingIcon }, LinkPermissionSettingIcon),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "a"], { block: true, className: styles.linkPermissionSettingTextStyles }, linkPermissionSettingText)))));
};


/***/ }),

/***/ "xu4S":
/*!*********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-people/src/PeopleSelect/PeopleSelect.tsx ***!
  \*********************************************************************************************************************************/
/*! exports provided: PeopleSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PeopleSelect */
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "KSXz");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react */ "ogYq");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react */ "xndG");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react */ "Rel8");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react */ "gGwy");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react */ "kvDL");
/* harmony import */ var _fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react-hooks */ "EO0U");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _PeopleCoin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../PeopleCoin */ "KDg/");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../types */ "DaYX");
/* harmony import */ var _PeopleSelect_strings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PeopleSelect.strings */ "NHpu");
/* harmony import */ var _PeopleSelect_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PeopleSelect.styles */ "zZfW");
/* harmony import */ var _PeopleSelect_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./PeopleSelect.utils */ "GCOY");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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








/**
 * A component for selecting people.
 *
 * The component offers:
 * - Unified props based on PeopleSelection interface for both single and many selection.
 * - Expandable ManyPeopleSelection with factory and promise support.
 * - Validation support using validateSelections prop.
 * - Filter text normalization.
 * - Suggestions filtering based on selections.
 * - Prevent removal of unremovable items.
 * - Localized strings.
 */
const PeopleSelect = (_a) => {
    var { label, hint, required, selections, errorMessage, suggestionsErrorMessage, onSelectionsChange, onErrorMessageChange, onResolveSuggestions, allowEmptySuggestions, onRenderItem, onExpandPeopleSelection, onRenderMoreButtonMenu, onRetrieveIcon, describeSuggestion, validateSelections, strings, formatName, pickerClassName, resolveDelay, disabled, itemLimit } = _a, props = __rest(_a, ["label", "hint", "required", "selections", "errorMessage", "suggestionsErrorMessage", "onSelectionsChange", "onErrorMessageChange", "onResolveSuggestions", "allowEmptySuggestions", "onRenderItem", "onExpandPeopleSelection", "onRenderMoreButtonMenu", "onRetrieveIcon", "describeSuggestion", "validateSelections", "strings", "formatName", "pickerClassName", "resolveDelay", "disabled", "itemLimit"]);
    const stringsInternal = react__WEBPACK_IMPORTED_MODULE_7___default.a.useMemo(() => (Object.assign(Object.assign({}, _PeopleSelect_strings__WEBPACK_IMPORTED_MODULE_10__[/* peopleSelectDefaultStrings */ "a"]), strings)), [strings]);
    const mapPeopleSelectionToPersonaProps = Object(_PeopleSelect_utils__WEBPACK_IMPORTED_MODULE_12__[/* useMapPeopleSelectionToPersonaProps */ "f"])({
        onRetrieveIcon,
        describeSuggestion,
    });
    const selectionsRef = react__WEBPACK_IMPORTED_MODULE_7___default.a.useRef(selections);
    selectionsRef.current = selections;
    react__WEBPACK_IMPORTED_MODULE_7___default.a.useEffect(() => {
        selectionsRef.current.map(_PeopleSelect_utils__WEBPACK_IMPORTED_MODULE_12__[/* resolvePeopleSelectionItems */ "d"]);
    }, []);
    const selectedItems = react__WEBPACK_IMPORTED_MODULE_7___default.a.useMemo(() => selections.map(mapPeopleSelectionToPersonaProps), [mapPeopleSelectionToPersonaProps, selections]);
    const triggerChange = react__WEBPACK_IMPORTED_MODULE_7___default.a.useCallback((selections) => {
        const errorMessage = required && !selections.length
            ? stringsInternal.requiredErrorMessage
            : validateSelections === null || validateSelections === void 0 ? void 0 : validateSelections(selections);
        onSelectionsChange === null || onSelectionsChange === void 0 ? void 0 : onSelectionsChange(selections);
        onErrorMessageChange === null || onErrorMessageChange === void 0 ? void 0 : onErrorMessageChange(errorMessage);
    }, [onErrorMessageChange, onSelectionsChange, required, stringsInternal.requiredErrorMessage, validateSelections]);
    const triggerChangeRef = react__WEBPACK_IMPORTED_MODULE_7___default.a.useRef(triggerChange);
    triggerChangeRef.current = triggerChange;
    const onChange = react__WEBPACK_IMPORTED_MODULE_7___default.a.useCallback((items = []) => {
        const newSelections = items.map(item => Object(_PeopleSelect_utils__WEBPACK_IMPORTED_MODULE_12__[/* extractSelectionFromPersonaProps */ "a"])(item));
        // Prevent removal of unremovable items
        const unremovableSelections = selectionsRef.current.filter(selection => selection.unremovable);
        if (!unremovableSelections.every(selection => newSelections.includes(selection)))
            return;
        triggerChangeRef.current(newSelections);
    }, []);
    const triggerResolveSuggestions = react__WEBPACK_IMPORTED_MODULE_7___default.a.useCallback((filter) => __awaiter(void 0, void 0, void 0, function* () {
        const normalizedFilter = Object(_PeopleSelect_utils__WEBPACK_IMPORTED_MODULE_12__[/* normalizeFilter */ "c"])(filter);
        const suggestions = yield onResolveSuggestions(normalizedFilter);
        const filteredSuggestions = Object(_PeopleSelect_utils__WEBPACK_IMPORTED_MODULE_12__[/* filterSuggestions */ "b"])(suggestions, selectionsRef.current);
        return filteredSuggestions.map(mapPeopleSelectionToPersonaProps);
    }), [mapPeopleSelectionToPersonaProps, onResolveSuggestions]);
    const onResolveSuggestionsInternal = react__WEBPACK_IMPORTED_MODULE_7___default.a.useCallback(filter => triggerResolveSuggestions(filter), [triggerResolveSuggestions]);
    const onEmptyResolveSuggestionsInternal = react__WEBPACK_IMPORTED_MODULE_7___default.a.useCallback(() => triggerResolveSuggestions(''), [triggerResolveSuggestions]);
    const onItemSelected = react__WEBPACK_IMPORTED_MODULE_7___default.a.useCallback(selectedItem => {
        if (!selectedItem)
            return null;
        // Try to resolve the selection's items
        const selection = Object(_PeopleSelect_utils__WEBPACK_IMPORTED_MODULE_12__[/* extractSelectionFromPersonaProps */ "a"])(selectedItem);
        Object(_PeopleSelect_utils__WEBPACK_IMPORTED_MODULE_12__[/* resolvePeopleSelectionItems */ "d"])(selection);
        return selectedItem;
    }, []);
    const onExpandPeopleSelectionRef = react__WEBPACK_IMPORTED_MODULE_7___default.a.useRef(onExpandPeopleSelection);
    onExpandPeopleSelectionRef.current = onExpandPeopleSelection;
    const styles = Object(_PeopleSelect_styles__WEBPACK_IMPORTED_MODULE_11__[/* usePeopleSelectStyles */ "a"])();
    const onRenderItemInternal = react__WEBPACK_IMPORTED_MODULE_7___default.a.useCallback(props => {
        var _a, _b;
        const selection = Object(_PeopleSelect_utils__WEBPACK_IMPORTED_MODULE_12__[/* extractSelectionFromPersonaProps */ "a"])(props.item);
        const moreButtonMenu = onRenderMoreButtonMenu === null || onRenderMoreButtonMenu === void 0 ? void 0 : onRenderMoreButtonMenu(selection);
        const newProps = Object.assign(Object.assign({}, props), { item: Object.assign(Object.assign({}, props.item), { ValidationState: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* ValidationState */ "a"].valid, onRenderPersonaCoin: props => (react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null,
                    react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_PeopleCoin__WEBPACK_IMPORTED_MODULE_8__[/* PeopleCoin */ "a"], Object.assign({}, props, { selection: selection, onRetrieveIcon: onRetrieveIcon, coinSize: 24 })),
                    selection.type !== _types__WEBPACK_IMPORTED_MODULE_9__[/* PeopleSelectionType */ "a"].User && selection.expandable && (react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_PeopleCoin__WEBPACK_IMPORTED_MODULE_8__[/* PeopleCoin */ "a"], Object.assign({}, props, { selection: Object.assign(Object.assign({}, selection), { icon: 'AddFilled' }), onRetrieveIcon: onRetrieveIcon, coinSize: 24, className: styles.expandableCoinOverlay }))))), onClick: () => {
                    var _a;
                    // Try to expand the selection
                    const newSelections = Object(_PeopleSelect_utils__WEBPACK_IMPORTED_MODULE_12__[/* tryExpandPeopleSelection */ "e"])(selectionsRef.current, selection);
                    if (!newSelections)
                        return;
                    (_a = onExpandPeopleSelectionRef.current) === null || _a === void 0 ? void 0 : _a.call(onExpandPeopleSelectionRef, selection);
                    triggerChangeRef.current(newSelections);
                }, text: (_a = formatName === null || formatName === void 0 ? void 0 : formatName(selection)) !== null && _a !== void 0 ? _a : selection.name, onRenderSecondaryText: moreButtonMenu ? () => moreButtonMenu : undefined }), className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* mergeStyles */ "F"])(props.className, selection.unremovable && styles.unremovable, moreButtonMenu && styles.moreButtonMenu) });
        const item = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__[/* PeoplePickerItem */ "a"], Object.assign({}, newProps));
        return (_b = onRenderItem === null || onRenderItem === void 0 ? void 0 : onRenderItem(selection, item)) !== null && _b !== void 0 ? _b : item;
    }, [
        onRenderMoreButtonMenu,
        formatName,
        styles.unremovable,
        styles.moreButtonMenu,
        styles.expandableCoinOverlay,
        onRenderItem,
        onRetrieveIcon,
    ]);
    const labelId = Object(_fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_6__[/* useId */ "a"])('label');
    const hintId = Object(_fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_6__[/* useId */ "a"])('hint');
    const errorMessageId = Object(_fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_6__[/* useId */ "a"])('errorMessage');
    return (react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", Object.assign({}, props),
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_3__[/* Label */ "a"], { id: labelId, className: styles.label, required: required }, label),
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_4__[/* NormalPeoplePicker */ "a"], { className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* mergeStyles */ "F"])(styles.picker, pickerClassName), selectedItems: selectedItems, onChange: onChange, onResolveSuggestions: onResolveSuggestionsInternal, 
            // This is intentionally disabled to avoid the suggestions taking the screen reader focus immediately
            // after focus is moved to the input field. It used to cause the screen reader miss the picker label,
            // placeholder, and other important information.
            onEmptyResolveSuggestions: allowEmptySuggestions ? onEmptyResolveSuggestionsInternal : undefined, onItemSelected: onItemSelected, onRenderItem: onRenderItemInternal, inputProps: Object.assign(Object.assign(Object.assign(Object.assign({ 'aria-labelledby': labelId }, (hint && { 'aria-describedby': hintId })), (selections.length === 0 && { placeholder: stringsInternal.inputPlaceholder })), (required && { 'aria-required': true, required: true })), (errorMessage && { 'aria-invalid': true, 'aria-errormessage': errorMessageId })), pickerCalloutProps: {
                directionalHint: _fluentui_react__WEBPACK_IMPORTED_MODULE_5__[/* DirectionalHint */ "a"].bottomLeftEdge,
                directionalHintForRTL: _fluentui_react__WEBPACK_IMPORTED_MODULE_5__[/* DirectionalHint */ "a"].bottomRightEdge,
                alignTargetEdge: true,
                styles: { root: { '.ms-Persona': { width: '236px' } } },
            }, pickerSuggestionsProps: {
                suggestionsHeaderText: stringsInternal.suggestionsHeaderText,
                noResultsFoundText: suggestionsErrorMessage || stringsInternal.noResultsFoundText,
                suggestionsAvailableAlertText: stringsInternal.suggestionsAvailableAlertText,
            }, removeButtonAriaLabel: stringsInternal.removeButtonAriaLabel, resolveDelay: resolveDelay, disabled: disabled, itemLimit: itemLimit }),
        hint && (react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", { id: hintId, className: styles.hint }, hint)),
        errorMessage && (react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", { id: errorMessageId, className: styles.errorMessage, role: 'alert' }, errorMessage))));
};


/***/ }),

/***/ "y8+Q":
/*!***********************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/utilities-core/src/numbers.ts ***!
  \***********************************************************************************************************/
/*! exports provided: parseFloatStrictly, parseIntStrictly */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export parseFloatStrictly */
/* unused harmony export parseIntStrictly */
const floatRegex = /^(\+|-)?\d+(\.\d+)?$/;
/**
 * Parses a float strictly. The float string must be in the format like "42", "42.7" or "-1.23", or it will return NaN.
 *
 * @param floatString The float string to parse.
 * @returns The parsed float, or undefined if the float string is invalid.
 * @remarks This function is stricter than the built-in parseFloat function, which parses string "42abc" as 42.
 *
 * @example parseFloatStrictly("42"); // 42
 * @example parseFloatStrictly("42.7"); // 42.7
 * @example parseFloatStrictly("-1.23"); // -1.23
 * @example parseFloatStrictly("42abc"); // NaN
 */
function parseFloatStrictly(floatString) {
    return floatRegex.test(floatString) ? parseFloat(floatString) : NaN;
}
const intRegex = /^(\+|-)?\d+$/;
/**
 * Parses an integer strictly. The integer string must be in the format like "42" or "-7", or it will return NaN.
 *
 * @param intString The integer string to parse.
 * @returns The parsed integer.
 * @remarks This function is stricter than the built-in parseInt function, which parses string "42abc" as 42.
 *
 * @example parseIntStrictly("42"); // 42
 * @example parseIntStrictly("-7"); // -7
 * @example parseIntStrictly("42abc"); // NaN
 */
function parseIntStrictly(intString) {
    return intRegex.test(intString) ? parseInt(intString, 10) : NaN;
}


/***/ }),

/***/ "yftM":
/*!************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-logger/src/index.ts ***!
  \************************************************************************************************************/
/*! exports provided: OneDSLogger, ScenarioColumns, TelemetryScenarioStatus, TelemetryScenarioStep, EntryPoint, PanelType, InvokedContext, LoggerLevels, CommonLogCategory, PanelRegion, PanelLaunchMethod, ActionGesture, PanelViewOutcome, PanelActionOutcome, ThreadType */
/*! exports used: EntryPoint, InvokedContext, OneDSLogger, PanelLaunchMethod, PanelRegion, PanelType, TelemetryScenarioStatus, ThreadType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _OneDSLogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OneDSLogger */ "mZ99");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _OneDSLogger__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _common_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/interfaces */ "Flb/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "g", function() { return _common_interfaces__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _common_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/types */ "N5m/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _common_types__WEBPACK_IMPORTED_MODULE_2__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _common_types__WEBPACK_IMPORTED_MODULE_2__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _common_types__WEBPACK_IMPORTED_MODULE_2__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _common_types__WEBPACK_IMPORTED_MODULE_2__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _common_types__WEBPACK_IMPORTED_MODULE_2__["g"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h", function() { return _common_types__WEBPACK_IMPORTED_MODULE_2__["h"]; });






/***/ }),

/***/ "ytE3":
/*!*********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-logger/src/ScenarioLogger.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: ScenarioLogger */
/*! exports used: ScenarioLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScenarioLogger; });
/* harmony import */ var _addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/utilities-core */ "1hmm");
/* harmony import */ var _common_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/interfaces */ "Flb/");


/**
 * There are some scenarios that will end in the service side, not in the client side.
 * Most notably, there is a platform limitation in which closing task module interrupts the logger calls.
 */
class ScenarioLogger {
    constructor(logger, name, dataBag) {
        this.id = Object(_addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_0__[/* uuid */ "e"])();
        this.name = name;
        this.logger = logger;
        this.isScenarioComplete = false;
        this.startTime = this.elapsedTime = performance.now();
        this.eventData = {
            elapsed: 0,
        };
        this.createMark(_common_interfaces__WEBPACK_IMPORTED_MODULE_1__[/* TelemetryScenarioStep */ "b"].Start, _common_interfaces__WEBPACK_IMPORTED_MODULE_1__[/* TelemetryScenarioStatus */ "a"].Init, { dataBag }, false);
    }
    mark(stepName, status, eventData) {
        this.createMark(stepName, status !== null && status !== void 0 ? status : _common_interfaces__WEBPACK_IMPORTED_MODULE_1__[/* TelemetryScenarioStatus */ "a"].Incomplete, eventData, false);
    }
    stop(eventData) {
        this.createMark(_common_interfaces__WEBPACK_IMPORTED_MODULE_1__[/* TelemetryScenarioStep */ "b"].Finish, (eventData && eventData['Scenario.Status']) || _common_interfaces__WEBPACK_IMPORTED_MODULE_1__[/* TelemetryScenarioStatus */ "a"].Success, eventData, true);
    }
    fail(eventData) {
        this.createMark(_common_interfaces__WEBPACK_IMPORTED_MODULE_1__[/* TelemetryScenarioStep */ "b"].Finish, _common_interfaces__WEBPACK_IMPORTED_MODULE_1__[/* TelemetryScenarioStatus */ "a"].Failure, eventData, true);
    }
    getCurrentElapsedTime() {
        return performance.now() - this.elapsedTime;
    }
    createMark(stepName, status, eventData, completeScenario) {
        if (!this.isScenarioComplete) {
            this.isScenarioComplete = completeScenario;
            const timestamp = performance.now();
            if (eventData) {
                this.eventData = Object.assign(Object.assign({}, this.eventData), eventData);
            }
            this.eventData.id = this.id;
            this.eventData['Scenario.Step'] = stepName;
            this.eventData['Scenario.Status'] = status;
            this.eventData.elapsed = this.elapsedTime = timestamp - this.startTime;
            this.eventData.stepElapsed = eventData === null || eventData === void 0 ? void 0 : eventData.stepElapsed;
            this.logger.logScenario(this.name, this.eventData, completeScenario);
        }
        else {
            console.warn(`Scenario: ${this.name}, Step: ${stepName}
                is being called after scenario has completed.`);
        }
    }
}


/***/ }),

/***/ "z42N":
/*!********************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/services-core/src/types.ts ***!
  \********************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



/***/ }),

/***/ "zZfW":
/*!***************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-people/src/PeopleSelect/PeopleSelect.styles.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: usePeopleSelectStyles */
/*! exports used: usePeopleSelectStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return usePeopleSelectStyles; });
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "n4Dn");
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "ZOo+");
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "tPyQ");

const usePeopleSelectStyles = Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])(theme => ({
    label: {
        fontSize: _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* FontSizes */ "a"].size14,
        padding: '0 0 8px',
    },
    errorMessage: {
        color: theme.palette.redDark,
        padding: '4px 12px',
        fontSize: _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* FontSizes */ "a"].size12,
    },
    hint: {
        fontSize: _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* FontSizes */ "a"].size12,
        color: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_2__[/* isContrastTheme */ "f"])(theme.name) ? theme.palette.black : theme.palette.neutralPrimary,
    },
    picker: {
        '.ms-TooltipHost': {
            display: 'block',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
        },
        '.ms-BasePicker-text': {
            backgroundColor: theme.palette.neutralLight,
            '.ms-PickerPersona-container': {
                margin: '4px',
                backgroundColor: theme.palette.white,
            },
            '.ms-BasePicker-input::placeholder': {
                color: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_2__[/* isContrastTheme */ "f"])(theme.name) ? theme.palette.black : theme.palette.neutralPrimary,
            },
        },
        '.ms-PickerPersona-container:hover .ms-PickerItem-removeButton .ms-Button-icon': {
            color: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_2__[/* isContrastTheme */ "f"])(theme.name) ? theme.palette.white : undefined,
            backgroundColor: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_2__[/* isContrastTheme */ "f"])(theme.name) ? theme.palette.themeSecondary : undefined,
        },
        '.ms-PickerItem-removeButton .ms-Button-icon': {
            color: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_2__[/* isContrastTheme */ "f"])(theme.name) ? theme.palette.black : theme.palette.neutralPrimary,
        },
    },
    unremovable: {
        '.ms-PickerItem-removeButton': {
            display: 'none',
        },
    },
    moreButtonMenu: {
        '.ms-Persona-details': {
            flexDirection: 'row',
        },
        '.ms-Persona-secondaryText': {
            display: 'flex',
            marginRight: '-10px',
        },
        '.ms-Button--hasMenu': {
            height: '20px',
        },
    },
    expandableCoinOverlay: {
        position: 'absolute',
        visibility: 'hidden',
        '.ms-Persona:hover &, .ms-Persona:focus-visible &': {
            visibility: 'visible',
        },
    },
}));


/***/ }),

/***/ "zmRz":
/*!*******************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/utilities-core/src/ids.ts ***!
  \*******************************************************************************************************/
/*! exports provided: uuid */
/*! exports used: uuid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return uuid; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "IVkz");

const uuid = () => Object(uuid__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])();


/***/ })

}]);
//# sourceMappingURL=package~main~mobile.js.map