(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main~mobile"],{

/***/ "4YvN":
/*!****************************!*\
  !*** ./src/common/init.ts ***!
  \****************************/
/*! exports provided: init */
/*! exports used: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return init; });
/* harmony import */ var _addressbook_components_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-logger */ "yftM");
/* harmony import */ var _addressbook_components_metaos_host__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @addressbook/components-metaos-host */ "0acT");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../package.json */ "kiQV");
var _package_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../package.json */ "kiQV", 1);
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logger */ "pIRP");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities */ "Ss4h");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Constants */ "fPKC");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./env */ "8MrD");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icons */ "dERd");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








const tenantId = _env__WEBPACK_IMPORTED_MODULE_6__[/* initQuery */ "k"].get(_env__WEBPACK_IMPORTED_MODULE_6__[/* URIParam */ "g"].TenantId);
const subEntityId = _env__WEBPACK_IMPORTED_MODULE_6__[/* initQuery */ "k"].get(_env__WEBPACK_IMPORTED_MODULE_6__[/* URIParam */ "g"].SubEntityId);
function initFluentUI() {
    Object(_icons__WEBPACK_IMPORTED_MODULE_7__[/* initIcons */ "b"])();
}
function removeNoScript() {
    const noscripts = document.querySelectorAll('noscript');
    noscripts.forEach(noscript => {
        noscript.remove();
    });
}
/**
 * init teams context
 * and update logger and i18n config
 */
function initHost(scenario, isMobile) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    return __awaiter(this, void 0, void 0, function* () {
        // new version parameters
        const parameterVersion = _env__WEBPACK_IMPORTED_MODULE_6__[/* initQuery */ "k"].get(_env__WEBPACK_IMPORTED_MODULE_6__[/* URIParam */ "g"].Version);
        if (_env__WEBPACK_IMPORTED_MODULE_6__[/* isDevBrowser */ "m"]) {
            Object(_addressbook_components_metaos_host__WEBPACK_IMPORTED_MODULE_1__[/* patchTeamsFallbackData */ "k"])({
                getContext: _env__WEBPACK_IMPORTED_MODULE_6__[/* DevTeamsContext */ "c"],
                getAuthToken: _env__WEBPACK_IMPORTED_MODULE_6__[/* DevTeamsIdToken */ "d"],
            });
        }
        scenario.mark(_logger__WEBPACK_IMPORTED_MODULE_3__[/* StepName */ "e"].AppBootStarted);
        const context = yield Object(_addressbook_components_metaos_host__WEBPACK_IMPORTED_MODULE_1__[/* getTeamsContext */ "h"])();
        scenario.mark(_logger__WEBPACK_IMPORTED_MODULE_3__[/* StepName */ "e"].AppBootHostContextInitialized, _addressbook_components_logger__WEBPACK_IMPORTED_MODULE_0__[/* TelemetryScenarioStatus */ "g"].Success, {
            dataBag: {
                theme: context.app.theme,
                parameterVersion,
                locale: context.app.locale,
            },
        });
        // set up common logger properties
        _logger__WEBPACK_IMPORTED_MODULE_3__[/* logger */ "f"].setCommonProperty({
            'AppInfo.SessionId': context.app.host.sessionId,
            'AppInfo.Locale': context.app.locale,
            'UserInfo.LicenseType': (_a = context.user) === null || _a === void 0 ? void 0 : _a.licenseType,
            'UserInfo.Ring': context.app.host.ringId,
            'UserInfo.Id': (_b = context.user) === null || _b === void 0 ? void 0 : _b.id,
            'UserInfo.TenantId': (_d = (_c = context.user) === null || _c === void 0 ? void 0 : _c.tenant) === null || _d === void 0 ? void 0 : _d.id,
            'UserInfo.TenantRole': (_e = context.team) === null || _e === void 0 ? void 0 : _e.userRole,
            'TeamInfo.GroupId': (_f = context.team) === null || _f === void 0 ? void 0 : _f.groupId,
            ConversationId: ((_g = context.chat) === null || _g === void 0 ? void 0 : _g.id) || ((_h = context.channel) === null || _h === void 0 ? void 0 : _h.id) || 'N/A',
            InvokedContext: ((_j = context.chat) === null || _j === void 0 ? void 0 : _j.id)
                ? _addressbook_components_logger__WEBPACK_IMPORTED_MODULE_0__[/* InvokedContext */ "b"].Chat
                : ((_k = context.channel) === null || _k === void 0 ? void 0 : _k.id)
                    ? _addressbook_components_logger__WEBPACK_IMPORTED_MODULE_0__[/* InvokedContext */ "b"].Team
                    : _addressbook_components_logger__WEBPACK_IMPORTED_MODULE_0__[/* InvokedContext */ "b"].Global,
            EntryPoint: getEntryPoint(context),
            'Thread.Type': getThreadType(context),
        });
        if (tenantId !== ((_m = (_l = context.user) === null || _l === void 0 ? void 0 : _l.tenant) === null || _m === void 0 ? void 0 : _m.id) && ((_p = (_o = context.user) === null || _o === void 0 ? void 0 : _o.tenant) === null || _p === void 0 ? void 0 : _p.id)) {
            // fallback to context.tid
            _logger__WEBPACK_IMPORTED_MODULE_3__[/* logger */ "f"].setCompliantAriaClient(context.user.tenant.id).then(() => {
                scenario.mark(_logger__WEBPACK_IMPORTED_MODULE_3__[/* StepName */ "e"].AppBootLoggerInitialized, _addressbook_components_logger__WEBPACK_IMPORTED_MODULE_0__[/* TelemetryScenarioStatus */ "g"].Success);
                _logger__WEBPACK_IMPORTED_MODULE_3__[/* logger */ "f"].activeLogger();
            });
        }
        else {
            _logger__WEBPACK_IMPORTED_MODULE_3__[/* logger */ "f"].activeLogger();
        }
        ensureAppClientType(isMobile, context.app.host.clientType);
        // at this time, do not have i18n config
        // update locale
        // await i18n.changeLanguage(context.app.locale);
        // scenario.mark(StepName.AppBootLocaleInitialized, TelemetryScenarioStatus.Success, {
        //     dataBag: {
        //         locale: `${i18n.resolvedLanguage}(${context.app.locale})`,
        //     },
        // });
        // logger.logTraceDebug(
        //     LogCategory.AppBoot,
        //     `Rendering App Host with locale: ${i18n.resolvedLanguage}(${context.app.locale}), dir: ${i18n.dir()}`
        // );
        if (!subEntityId && !parameterVersion && context.page.subPageId) {
            // for old version, we need to dispatch deeplink from context
            Object(_utilities__WEBPACK_IMPORTED_MODULE_4__[/* dispatchDeepLink */ "d"])(context.page.subPageId, isMobile);
        }
    });
}
/**
 * check Ensure current clientType matched current app type mobile or not
 *
 * @param isMobile
 */
function ensureAppClientType(isMobile, hostClientType) {
    if (!location.pathname.endsWith('/')) {
        // only check the default index
        return;
    }
    if (!hostClientType) {
        _logger__WEBPACK_IMPORTED_MODULE_3__[/* logger */ "f"].logTraceWarning(_logger__WEBPACK_IMPORTED_MODULE_3__[/* LogCategory */ "a"].AppBoot, 'hostClientType is empty');
        return;
    }
    const mobileClientType = [
        _addressbook_components_metaos_host__WEBPACK_IMPORTED_MODULE_1__[/* HostClientType */ "a"].ios,
        _addressbook_components_metaos_host__WEBPACK_IMPORTED_MODULE_1__[/* HostClientType */ "a"].android,
        'ipados',
    ];
    if (isMobile) {
        if (!mobileClientType.includes(hostClientType)) {
            // Desktop Client get mobile page
            _logger__WEBPACK_IMPORTED_MODULE_3__[/* logger */ "f"].logTraceError(_logger__WEBPACK_IMPORTED_MODULE_3__[/* LogCategory */ "a"].AppBoot, `${hostClientType} mismatches Mobile entry, UA: ${navigator.userAgent}`);
            _logger__WEBPACK_IMPORTED_MODULE_3__[/* logger */ "f"].failScenario(_logger__WEBPACK_IMPORTED_MODULE_3__[/* ScenarioName */ "c"].AppBoot);
            window.location.pathname = _Constants__WEBPACK_IMPORTED_MODULE_5__[/* DESKTOP_ENTRY */ "b"];
        }
    }
    else if (mobileClientType.includes(hostClientType)) {
        // Mobile Client get desktop page
        _logger__WEBPACK_IMPORTED_MODULE_3__[/* logger */ "f"].logTraceError(_logger__WEBPACK_IMPORTED_MODULE_3__[/* LogCategory */ "a"].AppBoot, `${hostClientType} mismatches Desktop entry, UA: ${navigator.userAgent}`);
        _logger__WEBPACK_IMPORTED_MODULE_3__[/* logger */ "f"].failScenario(_logger__WEBPACK_IMPORTED_MODULE_3__[/* ScenarioName */ "c"].AppBoot);
        window.location.pathname = _Constants__WEBPACK_IMPORTED_MODULE_5__[/* MOBILE_ENTRYPAGE */ "w"];
    }
}
function getEntryPoint(context) {
    var _a, _b;
    if (((_a = context.chat) === null || _a === void 0 ? void 0 : _a.id) || ((_b = context.channel) === null || _b === void 0 ? void 0 : _b.id)) {
        const hash = window.location.hash;
        if (hash.includes('workflow/commands')) {
            return _addressbook_components_logger__WEBPACK_IMPORTED_MODULE_0__[/* EntryPoint */ "a"].Workflow;
        }
        const taskModuleHomePageHash = '#';
        return hash === taskModuleHomePageHash ? _addressbook_components_logger__WEBPACK_IMPORTED_MODULE_0__[/* EntryPoint */ "a"].ComposeExtension : _addressbook_components_logger__WEBPACK_IMPORTED_MODULE_0__[/* EntryPoint */ "a"].AdaptiveCard;
    }
    return _addressbook_components_logger__WEBPACK_IMPORTED_MODULE_0__[/* EntryPoint */ "a"].PersonalApp;
}
function restoreLastHistoryPage() {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = _env__WEBPACK_IMPORTED_MODULE_6__[/* initQuery */ "k"].get(_env__WEBPACK_IMPORTED_MODULE_6__[/* URIParam */ "g"].UserId);
        // Avoid restoring the history from a deeplink entry.
        if (!subEntityId && userId) {
            Object(_utilities__WEBPACK_IMPORTED_MODULE_4__[/* restoreLastHistory */ "f"])(userId);
        }
    });
}
function registerBeforeUnloadEvent() {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = _env__WEBPACK_IMPORTED_MODULE_6__[/* initQuery */ "k"].get(_env__WEBPACK_IMPORTED_MODULE_6__[/* URIParam */ "g"].UserId);
        Object(_addressbook_components_metaos_host__WEBPACK_IMPORTED_MODULE_1__[/* registerBeforeUnloadHandler */ "l"])(readyToUnload => {
            _logger__WEBPACK_IMPORTED_MODULE_3__[/* logger */ "f"].logUserBiAction(_logger__WEBPACK_IMPORTED_MODULE_3__[/* ScenarioName */ "c"].AppBoot, _logger__WEBPACK_IMPORTED_MODULE_3__[/* StepName */ "e"].AppExit, _addressbook_components_logger__WEBPACK_IMPORTED_MODULE_0__[/* PanelType */ "f"].WorkReport, undefined, true);
            _logger__WEBPACK_IMPORTED_MODULE_3__[/* logger */ "f"].flushLogs(readyToUnload);
            // Avoid storing the history from a deeplink entry.
            if (!subEntityId && userId) {
                Object(_utilities__WEBPACK_IMPORTED_MODULE_4__[/* saveLastHistory */ "g"])(userId);
            }
            return true;
        });
    });
}
function initLogger() {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = _env__WEBPACK_IMPORTED_MODULE_6__[/* initQuery */ "k"].get(_env__WEBPACK_IMPORTED_MODULE_6__[/* URIParam */ "g"].UserId);
        const ringId = _env__WEBPACK_IMPORTED_MODULE_6__[/* initQuery */ "k"].get(_env__WEBPACK_IMPORTED_MODULE_6__[/* URIParam */ "g"].RingId);
        const locale = _env__WEBPACK_IMPORTED_MODULE_6__[/* initQuery */ "k"].get(_env__WEBPACK_IMPORTED_MODULE_6__[/* URIParam */ "g"].Locale);
        const hostClientType = _env__WEBPACK_IMPORTED_MODULE_6__[/* initQuery */ "k"].get(_env__WEBPACK_IMPORTED_MODULE_6__[/* URIParam */ "g"].ClientType);
        // set up logger properties
        _logger__WEBPACK_IMPORTED_MODULE_3__[/* logger */ "f"].setCommonProperty({
            Source: 'Client',
            'Bot.Id': _env__WEBPACK_IMPORTED_MODULE_6__[/* WORKREPORT_BOT_ID */ "j"],
            'App.Id': _env__WEBPACK_IMPORTED_MODULE_6__[/* WORKREPORT_APP_AAD_ID */ "h"],
            'App.Name': 'Updates',
            'AppInfo.ClientType': hostClientType,
            'AppInfo.Locale': locale,
            'AppInfo.Version': _package_json__WEBPACK_IMPORTED_MODULE_2__[/* version */ "a"],
            'UserInfo.Ring': ringId,
            'UserInfo.Id': userId,
            'UserInfo.TenantId': tenantId,
        });
        if (tenantId) {
            yield _logger__WEBPACK_IMPORTED_MODULE_3__[/* logger */ "f"].setCompliantAriaClient(tenantId);
            _logger__WEBPACK_IMPORTED_MODULE_3__[/* logger */ "f"].markScenario(_logger__WEBPACK_IMPORTED_MODULE_3__[/* ScenarioName */ "c"].AppBoot, _logger__WEBPACK_IMPORTED_MODULE_3__[/* StepName */ "e"].AppBootLoggerInitialized, _addressbook_components_logger__WEBPACK_IMPORTED_MODULE_0__[/* TelemetryScenarioStatus */ "g"].Success);
        }
    });
}
function initDeepLink(isMobile) {
    if (subEntityId) {
        // remove subEntityId from url query, to fix the refreshing issue
        const url = new URL(window.location.href);
        url.searchParams.delete(_env__WEBPACK_IMPORTED_MODULE_6__[/* URIParam */ "g"].SubEntityId);
        window.history.replaceState(null, '', url.toString());
        Object(_utilities__WEBPACK_IMPORTED_MODULE_4__[/* dispatchDeepLink */ "d"])(subEntityId, isMobile);
    }
}
function init(isMobile) {
    return __awaiter(this, void 0, void 0, function* () {
        let scenario;
        try {
            restoreLastHistoryPage();
            // detect Guest user
            const detectGuestPromise = Object(_utilities__WEBPACK_IMPORTED_MODULE_4__[/* detectGuest */ "c"])();
            // init from url params
            const initloggerPromise = initLogger();
            scenario = _logger__WEBPACK_IMPORTED_MODULE_3__[/* logger */ "f"].createScenario(_logger__WEBPACK_IMPORTED_MODULE_3__[/* ScenarioName */ "c"].AppBoot);
            _logger__WEBPACK_IMPORTED_MODULE_3__[/* logger */ "f"].logUserBiView(_addressbook_components_logger__WEBPACK_IMPORTED_MODULE_0__[/* PanelLaunchMethod */ "d"].AppNav, _addressbook_components_logger__WEBPACK_IMPORTED_MODULE_0__[/* PanelRegion */ "e"].Main, _addressbook_components_logger__WEBPACK_IMPORTED_MODULE_0__[/* PanelType */ "f"].WorkReport);
            initDeepLink(isMobile);
            // init Host with Teams Context
            const initHostPromise = initHost(scenario, isMobile);
            initFluentUI();
            registerBeforeUnloadEvent();
            removeNoScript();
            yield Promise.all([initloggerPromise, initHostPromise, detectGuestPromise]);
            scenario.mark(_logger__WEBPACK_IMPORTED_MODULE_3__[/* StepName */ "e"].AppBootSuccess, _addressbook_components_logger__WEBPACK_IMPORTED_MODULE_0__[/* TelemetryScenarioStatus */ "g"].Success);
            scenario.stop();
        }
        catch (error) {
            _logger__WEBPACK_IMPORTED_MODULE_3__[/* logger */ "f"].activeLogger();
            _logger__WEBPACK_IMPORTED_MODULE_3__[/* logger */ "f"].logTraceError(_logger__WEBPACK_IMPORTED_MODULE_3__[/* LogCategory */ "a"].AppBoot, `${error}`);
            scenario === null || scenario === void 0 ? void 0 : scenario.mark(_logger__WEBPACK_IMPORTED_MODULE_3__[/* StepName */ "e"].AppBootFailedWithError, _addressbook_components_logger__WEBPACK_IMPORTED_MODULE_0__[/* TelemetryScenarioStatus */ "g"].Failure);
            scenario === null || scenario === void 0 ? void 0 : scenario.fail();
            Object(_addressbook_components_metaos_host__WEBPACK_IMPORTED_MODULE_1__[/* notifyAppInitializationFailure */ "i"])({ reason: _addressbook_components_metaos_host__WEBPACK_IMPORTED_MODULE_1__[/* app */ "d"].FailedReason.Other, message: _logger__WEBPACK_IMPORTED_MODULE_3__[/* logger */ "f"].sessionId });
        }
        finally {
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            _logger__WEBPACK_IMPORTED_MODULE_3__[/* logger */ "f"].flushLogs(() => { });
        }
    });
}
function getThreadType(context) {
    var _a, _b, _c, _d;
    if ((_a = context.chat) === null || _a === void 0 ? void 0 : _a.id) {
        if (Object(_utilities__WEBPACK_IMPORTED_MODULE_4__[/* isNewChat */ "e"])(context.chat.id, (_b = context.team) === null || _b === void 0 ? void 0 : _b.groupId, (_c = context.channel) === null || _c === void 0 ? void 0 : _c.id))
            return _addressbook_components_logger__WEBPACK_IMPORTED_MODULE_0__[/* ThreadType */ "h"].NewChat;
        if (context.chat.id === '48:notes')
            return _addressbook_components_logger__WEBPACK_IMPORTED_MODULE_0__[/* ThreadType */ "h"].SelfChat;
        if (context.chat.id.includes('meeting'))
            return _addressbook_components_logger__WEBPACK_IMPORTED_MODULE_0__[/* ThreadType */ "h"].Meeting;
        if (context.chat.id.includes('unq.gbl.spaces'))
            return _addressbook_components_logger__WEBPACK_IMPORTED_MODULE_0__[/* ThreadType */ "h"].OneOnOneChat;
        return _addressbook_components_logger__WEBPACK_IMPORTED_MODULE_0__[/* ThreadType */ "h"].GroupChat;
    }
    if ((_d = context.channel) === null || _d === void 0 ? void 0 : _d.id) {
        return _addressbook_components_logger__WEBPACK_IMPORTED_MODULE_0__[/* ThreadType */ "h"].Channel;
    }
    return _addressbook_components_logger__WEBPACK_IMPORTED_MODULE_0__[/* ThreadType */ "h"].NA;
}


/***/ }),

/***/ "5ssl":
/*!**********************************************!*\
  !*** ./src/localization/fallbackLngMap.json ***!
  \**********************************************/
/*! exports provided: en, en-ai, en-bm, en-io, en-vg, en-ky, en-fk, en-gi, en-gg, en-im, en-je, en-ms, en-pn, en-sh, en-tc, fr, fr-pm, ca, es, pt, zh, zh-hans, zh-hans-hk, zh-hans-mo, zh-hant, zh-hk, zh-mo, pseudo, default */
/*! exports used: default */
/***/ (function(module) {

module.exports = JSON.parse("{\"en\":\"en-US\",\"en-ai\":\"en-GB\",\"en-bm\":\"en-GB\",\"en-io\":\"en-GB\",\"en-vg\":\"en-GB\",\"en-ky\":\"en-GB\",\"en-fk\":\"en-GB\",\"en-gi\":\"en-GB\",\"en-gg\":\"en-GB\",\"en-im\":\"en-GB\",\"en-je\":\"en-GB\",\"en-ms\":\"en-GB\",\"en-pn\":\"en-GB\",\"en-sh\":\"en-GB\",\"en-tc\":\"en-GB\",\"fr\":\"fr-FR\",\"fr-pm\":\"fr-CA\",\"ca\":\"ca-ES\",\"es\":\"es-ES\",\"pt\":\"pt-PT\",\"zh\":\"zh-CN\",\"zh-hans\":\"zh-CN\",\"zh-hans-hk\":\"zh-TW\",\"zh-hans-mo\":\"zh-TW\",\"zh-hant\":\"zh-TW\",\"zh-hk\":\"zh-TW\",\"zh-mo\":\"zh-TW\",\"pseudo\":\"qps-PLOC\"}");

/***/ }),

/***/ "7vqZ":
/*!****************************************!*\
  !*** ./src/utilities/models/people.ts ***!
  \****************************************/
/*! exports provided: mapUserToSinglePeopleSelection, mapPeopleSelectionToDirectoryObjectWithoutType, mapPeopleSelectionToDirectoryObjects, mapPeopleSelectionsToDirectoryObjects, comparePeopleSelections, uniqueAndSortPeopleSelections, uniqueAndSortUsersToSinglePeopleSelections, countUsersOfPeopleSelection, countUsersOfPeopleSelections, countGroupsOfPeopleSelections */
/*! exports used: countGroupsOfPeopleSelections, countUsersOfPeopleSelections */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export mapUserToSinglePeopleSelection */
/* unused harmony export mapPeopleSelectionToDirectoryObjectWithoutType */
/* unused harmony export mapPeopleSelectionToDirectoryObjects */
/* unused harmony export mapPeopleSelectionsToDirectoryObjects */
/* unused harmony export comparePeopleSelections */
/* unused harmony export uniqueAndSortPeopleSelections */
/* unused harmony export uniqueAndSortUsersToSinglePeopleSelections */
/* unused harmony export countUsersOfPeopleSelection */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return countUsersOfPeopleSelections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return countGroupsOfPeopleSelections; });
/* harmony import */ var _addressbook_components_people__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-people */ "apXe");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "NkTa");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service */ "YCKj");
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
 * Maps a user to a single people selection.
 *
 * @param user The user to map.
 * @returns The single people selection.
 */
function mapUserToSinglePeopleSelection(user) {
    var _a;
    return {
        type: _addressbook_components_people__WEBPACK_IMPORTED_MODULE_0__[/* PeopleSelectionType */ "c"].User,
        id: user.Id,
        name: (_a = user.DisplayName) !== null && _a !== void 0 ? _a : '',
        mail: user.Mail,
        icon: user.Thumbnail,
    };
}
// /**
//  * Maps a directory object to a people selection.
//  *
//  * @param object The directory object to map.
//  * @returns The people selection.
//  */
// export function mapDirectoryObjectToPeopleSelection(object: DirectoryObject): PeopleSelection {
//     switch (object.Type) {
//         case DirectoryObjectType.User:
//             return mapUserToSinglePeopleSelection(object as User);
//         case DirectoryObjectType.Group:
//             return populateGroupPeopleSelection({
//                 type: PeopleSelectionType.Group,
//                 id: object.Id,
//                 name: object.DisplayName ?? '',
//             });
//         case DirectoryObjectType.TeamworkTag:
//             return {
//                 type: PeopleSelectionType.Tag,
//                 id: object.Id,
//                 name: object.DisplayName ?? '',
//                 icon: IconName.Tag,
//             };
//     }
// }
// /**
//  * Filters role assignments to people selections.
//  *
//  * @param assignments The role assignments to filter.
//  * @param role The role as the criterion.
//  * @returns The people selections.
//  */
// export function filterRoleAssignmentsToPeopleSelections(
//     assignments: ReportDefinitionRoleAssignment[],
//     role: ReportDefinitionRole
// ): PeopleSelection[] {
//     return assignments
//         .filter(assignment => assignment.Role === role)
//         .map(assignment => mapDirectoryObjectToPeopleSelection(assignment.DirectoryObject));
// }
// /**
//  * Maps a team tag result to a many people selection.
//  *
//  * @param result The team tag result to map.
//  * @returns The many people selection.
//  */
// export function mapTeamTagResultToManyPeopleSelection(result: TeamTagResult): ManyPeopleSelection {
//     return {
//         type: PeopleSelectionType.Tag,
//         id: result.TagId,
//         name: result.DisplayName ?? '',
//         resolveItems: async () => {
//             const members = await SERVICE_CLIENT.teamTagVersion_GetTeamTagMembers({
//                 teamId: result.TeamId,
//                 tagId: result.TagId,
//                 expand: ExpandValue.Members,
//             });
//             return uniqueAndSortUsersToSinglePeopleSelections(members);
//         },
//         count: result.MemberCount,
//         icon: IconName.Tag,
//         expandable: true,
//     };
// }
// /**
//  * Adds resolveItems and expandable properties to the selection.
//  *
//  * @param selection The group selection to populate.
//  * @returns The group people selection.
//  */
// export function populateGroupPeopleSelection(selection: ManyPeopleSelection): ManyPeopleSelection {
//     return {
//         ...selection,
//         resolveItems: async () => {
//             const members = await SERVICE_CLIENT.groupsVersion_GetGroupMembers({
//                 groupId: selection.id,
//             });
//             return uniqueAndSortUsersToSinglePeopleSelections(members);
//         },
//         expandable: true,
//     };
// }
/**
 * Maps a people selection to a directory object without type.
 *
 * @param selection The people selection to map.
 * @returns The directory object without type.
 */
function mapPeopleSelectionToDirectoryObjectWithoutType(selection) {
    return { Id: selection.id, DisplayName: selection.name, Mail: selection.mail };
}
/**
 * Maps a people selection to one or more directory objects.
 *
 * Groups are left as is.
 * Tags or unspecific are expanded to their members.
 *
 * @param selection The people selection to map.
 * @param options The options for mapping the people selection to directory objects.
 * @returns The directory objects.
 */
function mapPeopleSelectionToDirectoryObjects(selection, { expandGroup } = {}) {
    var _a, _b, _c, _d, _e, _f;
    return __awaiter(this, void 0, void 0, function* () {
        switch (selection.type) {
            case _addressbook_components_people__WEBPACK_IMPORTED_MODULE_0__[/* PeopleSelectionType */ "c"].User:
                return [Object.assign({ Type: _service__WEBPACK_IMPORTED_MODULE_2__[/* DirectoryObjectType */ "a"].User }, mapPeopleSelectionToDirectoryObjectWithoutType(selection))];
            case _addressbook_components_people__WEBPACK_IMPORTED_MODULE_0__[/* PeopleSelectionType */ "c"].Group:
                if (!expandGroup) {
                    return [
                        Object.assign({ Type: _service__WEBPACK_IMPORTED_MODULE_2__[/* DirectoryObjectType */ "a"].Group }, mapPeopleSelectionToDirectoryObjectWithoutType(selection)),
                    ];
                }
                const members = (_c = (_a = (yield selection.items)) !== null && _a !== void 0 ? _a : (yield ((_b = selection.resolveItems) === null || _b === void 0 ? void 0 : _b.call(selection)))) !== null && _c !== void 0 ? _c : [];
                return members.map(item => (Object.assign({ Type: _service__WEBPACK_IMPORTED_MODULE_2__[/* DirectoryObjectType */ "a"].User }, mapPeopleSelectionToDirectoryObjectWithoutType(item))));
            case _addressbook_components_people__WEBPACK_IMPORTED_MODULE_0__[/* PeopleSelectionType */ "c"].Tag:
            case _addressbook_components_people__WEBPACK_IMPORTED_MODULE_0__[/* PeopleSelectionType */ "c"].Unspecific:
                const items = (_f = (_d = (yield selection.items)) !== null && _d !== void 0 ? _d : (yield ((_e = selection.resolveItems) === null || _e === void 0 ? void 0 : _e.call(selection)))) !== null && _f !== void 0 ? _f : [];
                return items.map(item => (Object.assign({ Type: _service__WEBPACK_IMPORTED_MODULE_2__[/* DirectoryObjectType */ "a"].User }, mapPeopleSelectionToDirectoryObjectWithoutType(item))));
        }
    });
}
/**
 * Maps people selections to directory objects.
 * This function is used to map people selections to directory objects before sending them to the backend.
 *
 * Tags are expanded to their members.
 * Groups are left as is.
 * Duplicate objects are removed.
 *
 * @param selections The people selections to map.
 * @param options The options for mapping the people selections to directory objects.
 * @returns The directory objects.
 */
function mapPeopleSelectionsToDirectoryObjects(selections, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const objects = yield Promise.all(selections.map(selection => mapPeopleSelectionToDirectoryObjects(selection, options)));
        return Object(lodash_es__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(objects.flat(), object => object.Id);
    });
}
/**
 * Compares two people selections.
 *
 * @param a The first people selection.
 * @param b The second people selection.
 * @returns The comparison result. If the first people selection is less than the second people selection, the result is negative. If the first people selection is equal to the second people selection, the result is zero. If the first people selection is greater than the second people selection, the result is positive.
 */
function comparePeopleSelections(a, b) {
    return a.name.localeCompare(b.name, undefined, { sensitivity: 'base' });
}
function uniqueAndSortPeopleSelections(selections) {
    return Object(lodash_es__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(selections, suggestion => suggestion.id).sort(comparePeopleSelections);
}
/**
 * Maps users to single people selections and unique and sort them.
 *
 * @param users The users to map.
 * @returns The single people selections.
 */
function uniqueAndSortUsersToSinglePeopleSelections(users) {
    return uniqueAndSortPeopleSelections(users.map(mapUserToSinglePeopleSelection));
}
/**
 * Counts the users of a people selection.
 * If the people selection is a user, the result is 1.
 * Otherwise, the result is determined by the items or count property.
 * If both items and count are not set, the result is 0 by default.
 *
 * @param selection The people selection.
 * @returns The number of users.
 */
function countUsersOfPeopleSelection(selection) {
    var _a;
    return selection.type === _addressbook_components_people__WEBPACK_IMPORTED_MODULE_0__[/* PeopleSelectionType */ "c"].User
        ? 1
        : Array.isArray(selection.items)
            ? selection.items.length
            : (_a = selection.count) !== null && _a !== void 0 ? _a : 0;
}
/**
 * Counts the users of an array of people selections.
 *
 * @param selections The people selections.
 * @returns The number of users.
 */
function countUsersOfPeopleSelections(selections) {
    return selections.reduce((count, selection) => countUsersOfPeopleSelection(selection) + count, 0);
}
/**
 * Counts the groups of an array of people selections.
 *
 * @param selections The people selections.
 * @returns The number of groups.
 */
function countGroupsOfPeopleSelections(selections) {
    return selections.reduce((count, selection) => count + (selection.type === _addressbook_components_people__WEBPACK_IMPORTED_MODULE_0__[/* PeopleSelectionType */ "c"].Group ? 1 : 0), 0);
}


/***/ }),

/***/ "8MrD":
/*!***************************!*\
  !*** ./src/common/env.ts ***!
  \***************************/
/*! exports provided: URIParam, isDev, isTest, isInt, ADDRESSBOOK_APP_RESOURCE_URL, ARIA_TOKEN, ENVIRONMENT, STYLE_NONCE, WORKREPORT_APP_AAD_ID, WORKREPORT_APP_TEAMS_ID, WORKREPORT_BOT_ID, initQuery, DevTeamsContext, DevTeamsIdToken, isDevBrowser */
/*! exports used: ADDRESSBOOK_APP_RESOURCE_URL, ARIA_TOKEN, DevTeamsContext, DevTeamsIdToken, ENVIRONMENT, STYLE_NONCE, URIParam, WORKREPORT_APP_AAD_ID, WORKREPORT_APP_TEAMS_ID, WORKREPORT_BOT_ID, initQuery, isDev, isDevBrowser, isInt, isTest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return URIParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return isDev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return isTest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return isInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return resourceUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ariaToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return styleNonce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return AadAppId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return teamsAppId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return botId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return initQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DevTeamsContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DevTeamsIdToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return isDevBrowser; });
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 *  WARNNING: this file must should not import any other files
 */
var _a, _b, _c;
/**
 * Predefined vars
 * inject from config files
 *
 * @todo enable inject form URL in dev/test environment
 */
var URIParam;
(function (URIParam) {
    URIParam["Version"] = "version";
    URIParam["ClientType"] = "clientType";
    URIParam["Theme"] = "theme";
    URIParam["Locale"] = "lng";
    URIParam["UserId"] = "userId";
    URIParam["TenantId"] = "tenantId";
    URIParam["RingId"] = "ringId";
    /**
     * for deep link
     */
    URIParam["SubEntityId"] = "subEntityId";
    /**
     * @private
     * for dev only
     */
    URIParam["IsBrowser"] = "isBrowser";
})(URIParam || (URIParam = {}));
/**
 * current environment
 */
const environment = "dev";
/**
 * check is dev Environment
 */
const isDev = environment === 'dev';
/**
 * check is test Environment
 */
const isTest = environment === 'test';
/**
 * check is int Environment
 */
const isInt = environment === 'int';
/**
 * ADD APP ID
 */
const AadAppId = "92b01672-d7de-4a9e-9775-1289109e3222";
/**
 * Teams App Id
 */
const teamsAppId = "4554b121-1b89-4819-ad00-9cd3b25a6726";
/**
 * TEAMS BOT ID
 */
const botId = "00000000-0000-0000-0000-000000000000";
/**
 * Token for aria log
 */
const ariaToken = "9a40f5a4d1754c7db42aef1d8bed8003-ba2a02df-1fa3-4c6e-8b5a-dcd64f03f256-7677";
/**
 * nonce for dynamic style
 */
const styleNonce = "0t9f7g07";

/**
 * BASE URL for this page and auth
 */
const resourceUrl = "api://neat-ocean-7kdprps-8080.asse.devtunnels.ms/92b01672-d7de-4a9e-9775-1289109e3222";
const initQuery = /* #__PURE__*/ new URLSearchParams(window.location.search);
/**
 * teams context for dev/mock
 *
 * @todo merge form query string
 */
const DevTeamsContext = ((_a = {"teams":{"context":{"app":{"locale":"dev","theme":"default"},"user":{"id":"00000000-0000-0000-000000000000"}},"idToken":""}} === null || {"teams":{"context":{"app":{"locale":"dev","theme":"default"},"user":{"id":"00000000-0000-0000-000000000000"}},"idToken":""}} === void 0 ? void 0 : {"teams":{"context":{"app":{"locale":"dev","theme":"default"},"user":{"id":"00000000-0000-0000-000000000000"}},"idToken":""}}.teams) === null || _a === void 0 ? void 0 : _a.context) || {};
/**
 * teams id token for dev/mock
 */
const DevTeamsIdToken = (_b = (isDev && /* # PURE */ initQuery.get('teams.idToken'))) !== null && _b !== void 0 ? _b : (_c = {"teams":{"context":{"app":{"locale":"dev","theme":"default"},"user":{"id":"00000000-0000-0000-000000000000"}},"idToken":""}} === null || {"teams":{"context":{"app":{"locale":"dev","theme":"default"},"user":{"id":"00000000-0000-0000-000000000000"}},"idToken":""}} === void 0 ? void 0 : {"teams":{"context":{"app":{"locale":"dev","theme":"default"},"user":{"id":"00000000-0000-0000-000000000000"}},"idToken":""}}.teams) === null || _c === void 0 ? void 0 : _c.idToken;
/**
 * is dev mode with browser in query
 */
const isDevBrowser = isDev && /* # PURE */ initQuery.has(URIParam.IsBrowser);


/***/ }),

/***/ "9hZ6":
/*!*****************************!*\
  !*** ./src/routes/Paths.ts ***!
  \*****************************/
/*! exports provided: Paths, CreateRequestSource, SourceCardType, HomePageModalType, OwnedListType, HomePageSectionType, generateURL */
/*! exports used: Paths, generateURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Paths; });
/* unused harmony export CreateRequestSource */
/* unused harmony export SourceCardType */
/* unused harmony export HomePageModalType */
/* unused harmony export OwnedListType */
/* unused harmony export HomePageSectionType */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return generateURL; });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "H8PI");
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */

/**
 * Paths
 *
 * Paths for navigating to various React components for the different pages
 */
var Paths;
(function (Paths) {
    // App pages - desktop
    Paths["HomePage"] = "/homePage";
    Paths["DepartmentTeam"] = "/departmentTeam";
    Paths["SearchResults"] = "/searchResults";
})(Paths || (Paths = {}));
var CreateRequestSource;
(function (CreateRequestSource) {
    CreateRequestSource["DemoCard"] = "DemoCard";
})(CreateRequestSource || (CreateRequestSource = {}));
var SourceCardType;
(function (SourceCardType) {
    SourceCardType["Occurrence"] = "Occurrence";
    SourceCardType["Report"] = "Report";
})(SourceCardType || (SourceCardType = {}));
var HomePageModalType;
(function (HomePageModalType) {
    HomePageModalType["SuccessStoryModal"] = "SuccessStoryModal";
    HomePageModalType["TemplateStoreModal"] = "TemplateStoreModal";
    HomePageModalType["TemplatePreviewModal"] = "TemplatePreviewModal";
})(HomePageModalType || (HomePageModalType = {}));
var OwnedListType;
(function (OwnedListType) {
    OwnedListType["Received"] = "Received";
    OwnedListType["Submitted"] = "Submitted";
    OwnedListType["Request"] = "Request";
})(OwnedListType || (OwnedListType = {}));
var HomePageSectionType;
(function (HomePageSectionType) {
    HomePageSectionType["Write"] = "Write";
    HomePageSectionType["View"] = "View";
    HomePageSectionType["List"] = "List";
})(HomePageSectionType || (HomePageSectionType = {}));
/**
 * generate url Link with parameters
 *
 * @param path
 * @param param
 * @returns
 */
function generateURL(path, param, searchParam) {
    const urlWithParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_0__[/* generatePath */ "e"])(path, param);
    return searchParam ? `${urlWithParams}?${new URLSearchParams(searchParam).toString()}` : urlWithParams;
}


/***/ }),

/***/ "EMeK":
/*!****************************************!*\
  !*** ./src/utilities/DateTimeUtils.ts ***!
  \****************************************/
/*! exports provided: friendlyDateFormatter, friendlyRelativeTimeFormatter, relativeMinuteTimeFormatter, weekDayFormatter, dayFormatter, dateTimeRangeFormatter */
/*! exports used: dateTimeRangeFormatter, dayFormatter, friendlyDateFormatter, friendlyRelativeTimeFormatter, relativeMinuteTimeFormatter, weekDayFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return friendlyDateFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return friendlyRelativeTimeFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return relativeMinuteTimeFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return weekDayFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return dayFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dateTimeRangeFormatter; });
/* harmony import */ var _localization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../localization */ "HVbO");

/**
 * friendly datetime format function for i18n
 *
 * @param value datetime
 * @param lng language
 * @returns formatted datetime string
 */
const friendlyDateFormatter = (value, lng) => {
    const referenceTimestamp = new Date(value).setHours(0, 0, 0, 0);
    const currentTimestamp = new Date().setHours(0, 0, 0, 0);
    const diffTime = referenceTimestamp - currentTimestamp;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const day = Math.abs(diffDays) <= 1
        ? new Intl.RelativeTimeFormat(lng, { numeric: 'auto' }).format(diffDays, 'day')
        : undefined;
    // @see https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
    return day
        ? day.replace(/^\p{CWU}/u, char => char.toLocaleUpperCase())
        : new Intl.DateTimeFormat(lng, {
            dateStyle: 'medium',
        }).format(value);
};
/**
 * friendly relative time format function for i18n
 *
 * @param value datetime
 * @param lng language
 * @returns formatted datetime string
 */
const friendlyRelativeTimeFormatter = (value, lng) => {
    const dateDiff = new Date().getTime() - value.getTime();
    if (dateDiff > 0 && dateDiff < 60 * 1000) {
        return _localization__WEBPACK_IMPORTED_MODULE_0__[/* i18n */ "b"].t(_localization__WEBPACK_IMPORTED_MODULE_0__[/* Strings */ "a"].justNow, { lng });
    }
    return _localization__WEBPACK_IMPORTED_MODULE_0__[/* i18n */ "b"].t(_localization__WEBPACK_IMPORTED_MODULE_0__[/* Strings */ "a"].friendlyDateAndTime, { lng, date: value });
};
/**
 * relative time format function for i18n
 *
 * @param value datetime string
 * @param lng language
 * @returns formatted datetime string
 */
const relativeMinuteTimeFormatter = (value, lng) => {
    const currentDate = new Date();
    const referenceDate = new Date(value);
    const timeDifference = referenceDate.getTime() - currentDate.getTime();
    const timeDifferenceInMinutes = Math.round(timeDifference / (60 * 1000));
    const dateTimeDiff = new Intl.RelativeTimeFormat(lng, { numeric: 'auto' }).format(timeDifferenceInMinutes, 'minute');
    return dateTimeDiff;
};
/**
 * weekDay function for i18n
 *
 * @param value datetime string
 * @param lng language
 * @param options options
 * @returns formatted datetime string
 */
const weekDayFormatter = (value, lng, options) => {
    const format = new Intl.DateTimeFormat(lng, { weekday: (options === null || options === void 0 ? void 0 : options.format) || 'long' }).format;
    const listFormatter = new Intl.ListFormat(lng, { style: 'long', type: 'conjunction' });
    return listFormatter.format(value.map(day => format(new Date(1970, 0, day - 3))));
};
/**
 * day of month function for i18n
 *
 * @param value datetime string
 * @param lng language
 * @returns formatted datetime string
 */
const dayFormatter = (value, lng) => {
    const format = new Intl.DateTimeFormat(lng, { day: 'numeric' }).format;
    const listFormatter = new Intl.ListFormat(lng, { style: 'long', type: 'conjunction' });
    return listFormatter.format(value.map(day => format(new Date(0, 0, day))));
};
/**
 * date time range function for i18n
 *
 * @param value start date and end date
 * @param lng language
 * @returns formatted datetime range string
 */
const dateTimeRangeFormatter = (value, lng) => {
    const format = new Intl.DateTimeFormat(lng, { dateStyle: 'medium' });
    return format.formatRange(...value);
};


/***/ }),

/***/ "EgX+":
/*!**********************************!*\
  !*** ./src/utilities/history.ts ***!
  \**********************************/
/*! exports provided: saveLastHistory, restoreLastHistory */
/*! exports used: restoreLastHistory, saveLastHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return saveLastHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return restoreLastHistory; });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "SGJe");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "H8PI");
/* harmony import */ var _routes_history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes/history */ "TJux");
/* harmony import */ var _routes_Paths__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routes/Paths */ "9hZ6");
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */



function saveLastHistory(userId) {
    if (!canRestore(_routes_history__WEBPACK_IMPORTED_MODULE_2__[/* history */ "a"].location))
        return;
    const key = generateLastPathKey(userId);
    const pathString = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_0__[/* createPath */ "e"])(_routes_history__WEBPACK_IMPORTED_MODULE_2__[/* history */ "a"].location);
    const item = {
        pathString,
        timestamp: Date.now(),
    };
    localStorage.setItem(key, JSON.stringify(item));
}
const LAST_HISTORY_TTL_IN_SECONDS = 30 * 60 * 1000;
function restoreLastHistory(userId) {
    if (!isExactHomepage(_routes_history__WEBPACK_IMPORTED_MODULE_2__[/* history */ "a"].location))
        return;
    const key = generateLastPathKey(userId);
    const itemObject = localStorage.getItem(key);
    if (!itemObject)
        return;
    let item;
    try {
        item = JSON.parse(itemObject);
    }
    catch (_a) {
        return;
    }
    // If more than 30m has passed, remove the item
    const currentTime = Date.now();
    if (currentTime - item.timestamp > LAST_HISTORY_TTL_IN_SECONDS) {
        localStorage.removeItem(key);
        return;
    }
    const path = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_0__[/* parsePath */ "f"])(item.pathString);
    if (!canRestore(path))
        return;
    _routes_history__WEBPACK_IMPORTED_MODULE_2__[/* history */ "a"].push(path);
}
const lastPathKeyPrefix = 'LastPathV2';
function generateLastPathKey(userId) {
    return userId ? `${lastPathKeyPrefix}-UserId:${userId}` : lastPathKeyPrefix;
}
function isExactHomepage(path) {
    // staticTabs[0].contentUrl in Teams manifest
    if (path.pathname === '/')
        return true;
    const match = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* matchPath */ "f"])(path.pathname, _routes_Paths__WEBPACK_IMPORTED_MODULE_3__[/* Paths */ "a"].HomePage);
    if (!match)
        return false;
    return Object.keys(match.params).length === 0;
}
function canRestore(path) {
    const pathname = path.pathname;
    if (!pathname)
        return false;
    return [_routes_Paths__WEBPACK_IMPORTED_MODULE_3__[/* Paths */ "a"].HomePage].some(pattern => Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* matchPath */ "f"])(pattern, pathname));
}


/***/ }),

/***/ "HVbO":
/*!***********************************!*\
  !*** ./src/localization/index.ts ***!
  \***********************************/
/*! exports provided: Strings, i18n */
/*! exports used: Strings, i18n */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _locales_localeKeys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../locales/localeKeys */ "fOXQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _locales_localeKeys__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./i18n */ "UJ3/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _i18n__WEBPACK_IMPORTED_MODULE_1__["a"]; });





/***/ }),

/***/ "K2jR":
/*!*****************************!*\
  !*** ./src/logger/types.ts ***!
  \*****************************/
/*! exports provided: ScenarioName, ScenarioType, ModuleName, StepName, LogCategory */
/*! exports used: LogCategory, ModuleName, ScenarioName, ScenarioType, StepName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ScenarioName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ScenarioType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ModuleName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return StepName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogCategory; });
// For feature scenarios:
var ScenarioName;
(function (ScenarioName) {
    ScenarioName["AppBoot"] = "AppBoot";
    ScenarioName["PeopleCard"] = "PeopleCard";
})(ScenarioName || (ScenarioName = {}));
var ScenarioType;
(function (ScenarioType) {
    ScenarioType["OpenPeopleCard"] = "OpenPeopleCard";
})(ScenarioType || (ScenarioType = {}));
var ModuleName;
(function (ModuleName) {
    ModuleName["HomePage"] = "HomePage";
    ModuleName["SearchResult"] = "SearchResult";
})(ModuleName || (ModuleName = {}));
var StepName;
(function (StepName) {
    /**
     * step indicating when the app initialization has started
     */
    StepName["AppBootStarted"] = "AppBootStarted";
    /**
     * step indicating when the app exit
     */
    StepName["AppExit"] = "AppExit";
    StepName["AppBootHostContextInitialized"] = "AppBootHostContextInitialized";
    StepName["AppBootLoggerInitialized"] = "AppBootLoggerInitialized";
    StepName["AppBootSuccess"] = "AppBootSuccess";
    StepName["AppBootFailedWithError"] = "AppBootFailedWithError";
    StepName["AppBootFailedWithErrorBoundary"] = "AppBootFailedWithErrorBoundary";
    StepName["AppBootDispatchDeepLink"] = "AppBootDispatchDeepLink";
    StepName["FileBrowserNavigationEndedNotification"] = "FileBrowserNavigationEndedNotification";
    StepName["FileBrowserNavigationStartedNotification"] = "FileBrowserNavigationStartedNotification";
    StepName["FileBrowserPageLoadedNotification"] = "FileBrowserPageLoadedNotification";
    StepName["SharePointPickerPickLocalFiles"] = "SharePointPickerPickLocalFiles";
    StepName["SharePointPickerAuthenticate"] = "SharePointPickerAuthenticate";
    StepName["SharePointPickerClose"] = "SharePointPickerClose";
    StepName["SharePointPickerPick"] = "SharePointPickerPick";
    StepName["TeamsInitializationSuccess"] = "TeamsInitializationSuccess";
    StepName["AppBootReactRendered"] = "AppBootReactRendered";
})(StepName || (StepName = {}));
// Log Category Sources for scenarios
var LogCategory;
(function (LogCategory) {
    LogCategory["PersonalApp"] = "PersonalApp";
    LogCategory["AppBoot"] = "AppBoot";
    LogCategory["AuthHelper"] = "AuthHelper";
    LogCategory["FileUpload"] = "FileUpload";
    LogCategory["FileUploadAuth"] = "FileUploadAuth";
    LogCategory["APIRequest"] = "APIRequest";
    LogCategory["RetryOnNotProvisioned"] = "RetryOnNotProvisioned";
    LogCategory["CheckUserRole"] = "CheckUserRole";
    LogCategory["FormDesign"] = "FormDesign";
    LogCategory["DeepLink"] = "DeepLink";
    LogCategory["Navigate"] = "Navigate";
    LogCategory["ShareLink"] = "ShareLink";
    LogCategory["SharePointPicker"] = "SharePointPicker";
    LogCategory["LoadingTimeout"] = "LoadingTimeout";
    LogCategory["ECSRequest"] = "ECSRequest";
    LogCategory["ErrorStatus"] = "ErrorStatus";
    LogCategory["DuplicateFormQuestion"] = "DuplicateFormQuestion";
    LogCategory["NetworkError"] = "NetworkError";
    LogCategory["TimeoutExceeded"] = "TimeoutExceeded";
    LogCategory["RequestAborted"] = "RequestAborted";
    LogCategory["TeamsSDKError"] = "TeamsSDKError";
    LogCategory["RuntimeError"] = "RuntimeError";
    LogCategory["UnknownRequestError"] = "UnknownRequestError";
    LogCategory["FeedbackSDKError"] = "FeedbackSDKError";
    LogCategory["ReportResponse"] = "ReportResponse";
    LogCategory["ReactQuery"] = "ReactQuery";
    LogCategory["ResizeTaskModule"] = "ResizeTaskModule";
    LogCategory["ReportDraft"] = "ReportDraft";
    LogCategory["OCPSRequest"] = "OCPSRequest";
})(LogCategory || (LogCategory = {}));


/***/ }),

/***/ "NV7D":
/*!****************************************!*\
  !*** ./src/reactiveVariables/index.ts ***!
  \****************************************/
/*! exports provided: modalShowingVar, systemNotificationCodesVar, requestFeedbackShowingVar, changeStatusDialogDataVar, copyTemplateRequestDialogDataVar, copyTemplateResponseDialogDataVar, createTemplateSuccessDialogDataVar, reminderVar */
/*! exports used: systemNotificationCodesVar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _CommonVars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommonVars */ "VTGp");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _CommonVars__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony import */ var _TemplateManagementVars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TemplateManagementVars */ "Rkzu");




/***/ }),

/***/ "Nxb2":
/*!**************************************!*\
  !*** ./src/utilities/isFirstPage.ts ***!
  \**************************************/
/*! exports provided: isFirstPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isFirstPage */
/**
 * check the current stack of the react-router is the first page or not
 */
function isFirstPage() {
    var _a;
    return ((_a = window.history.state) === null || _a === void 0 ? void 0 : _a.idx) === 0;
}


/***/ }),

/***/ "Oc5c":
/*!***************************************!*\
  !*** ./src/utilities/models/index.ts ***!
  \***************************************/
/*! exports provided: mapUserToSinglePeopleSelection, mapPeopleSelectionToDirectoryObjectWithoutType, mapPeopleSelectionToDirectoryObjects, mapPeopleSelectionsToDirectoryObjects, comparePeopleSelections, uniqueAndSortPeopleSelections, uniqueAndSortUsersToSinglePeopleSelections, countUsersOfPeopleSelection, countUsersOfPeopleSelections, countGroupsOfPeopleSelections */
/*! exports used: countGroupsOfPeopleSelections, countUsersOfPeopleSelections */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _people__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./people */ "7vqZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _people__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _people__WEBPACK_IMPORTED_MODULE_0__["b"]; });




/***/ }),

/***/ "Rkzu":
/*!*********************************************************!*\
  !*** ./src/reactiveVariables/TemplateManagementVars.ts ***!
  \*********************************************************/
/*! exports provided: changeStatusDialogDataVar, copyTemplateRequestDialogDataVar, copyTemplateResponseDialogDataVar, createTemplateSuccessDialogDataVar, reminderVar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export changeStatusDialogDataVar */
/* unused harmony export copyTemplateRequestDialogDataVar */
/* unused harmony export copyTemplateResponseDialogDataVar */
/* unused harmony export createTemplateSuccessDialogDataVar */
/* unused harmony export reminderVar */
/* harmony import */ var react_reactive_var__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-reactive-var */ "2spY");
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */

const changeStatusDialogDataVar = Object(react_reactive_var__WEBPACK_IMPORTED_MODULE_0__[/* makeVar */ "a"])({ isOpen: false });
const copyTemplateRequestDialogDataVar = Object(react_reactive_var__WEBPACK_IMPORTED_MODULE_0__[/* makeVar */ "a"])({ isOpen: false });
const copyTemplateResponseDialogDataVar = Object(react_reactive_var__WEBPACK_IMPORTED_MODULE_0__[/* makeVar */ "a"])({ isOpen: false });
const createTemplateSuccessDialogDataVar = Object(react_reactive_var__WEBPACK_IMPORTED_MODULE_0__[/* makeVar */ "a"])({ isOpen: false });
const reminderVar = Object(react_reactive_var__WEBPACK_IMPORTED_MODULE_0__[/* makeVar */ "a"])({ isOpen: false });


/***/ }),

/***/ "Ss4h":
/*!********************************!*\
  !*** ./src/utilities/index.ts ***!
  \********************************/
/*! exports provided: friendlyDateFormatter, friendlyRelativeTimeFormatter, relativeMinuteTimeFormatter, weekDayFormatter, dayFormatter, dateTimeRangeFormatter, DeepLinkType, DeepLinkSourceType, dispatchDeepLink, generateDeepLink, generateDeepLinkToAppHomePage, LocalStorageFlag, hasLocalStorageFlag, addLocalStorageFlag, removeLocalStorageFlag, clearLocalStorageFlags, useLocalStorageFlag, saveLastHistory, restoreLastHistory, isFirstPage, mapUserToSinglePeopleSelection, mapPeopleSelectionToDirectoryObjectWithoutType, mapPeopleSelectionToDirectoryObjects, mapPeopleSelectionsToDirectoryObjects, comparePeopleSelections, uniqueAndSortPeopleSelections, uniqueAndSortUsersToSinglePeopleSelections, countUsersOfPeopleSelection, countUsersOfPeopleSelections, countGroupsOfPeopleSelections, UserRole, detectGuest, tryParseAfdRefFromHeaders, handleSystemNotificationHeader, InputTaskType, submitInputTask, isNewChat */
/*! exports used: countGroupsOfPeopleSelections, countUsersOfPeopleSelections, detectGuest, dispatchDeepLink, isNewChat, restoreLastHistory, saveLastHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _DateTimeUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DateTimeUtils */ "EMeK");
/* harmony import */ var _deep_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deep-link */ "t45A");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _deep_link__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _flags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flags */ "vWYN");
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./history */ "EgX+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _history__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "g", function() { return _history__WEBPACK_IMPORTED_MODULE_3__["b"]; });

/* harmony import */ var _isFirstPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isFirstPage */ "Nxb2");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models */ "Oc5c");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _models__WEBPACK_IMPORTED_MODULE_5__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _models__WEBPACK_IMPORTED_MODULE_5__["b"]; });

/* harmony import */ var _UserRoleCheckUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UserRoleCheckUtils */ "bH3m");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _UserRoleCheckUtils__WEBPACK_IMPORTED_MODULE_6__["a"]; });

/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Utils */ "TktC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _Utils__WEBPACK_IMPORTED_MODULE_7__["a"]; });







// export * from './StatisticsUtils';
// export * from './TelemetryUtils';




/***/ }),

/***/ "TJux":
/*!*******************************!*\
  !*** ./src/routes/history.ts ***!
  \*******************************/
/*! exports provided: history */
/*! exports used: history */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return history; });
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! history */ "SGJe");

const history = Object(history__WEBPACK_IMPORTED_MODULE_0__[/* createHashHistory */ "c"])();


/***/ }),

/***/ "TktC":
/*!********************************!*\
  !*** ./src/utilities/Utils.ts ***!
  \********************************/
/*! exports provided: tryParseAfdRefFromHeaders, handleSystemNotificationHeader, InputTaskType, submitInputTask, isNewChat */
/*! exports used: isNewChat, tryParseAfdRefFromHeaders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return tryParseAfdRefFromHeaders; });
/* unused harmony export handleSystemNotificationHeader */
/* unused harmony export InputTaskType */
/* unused harmony export submitInputTask */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isNewChat; });
/* harmony import */ var _addressbook_components_metaos_host__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-metaos-host */ "0acT");
/* harmony import */ var _reactiveVariables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reactiveVariables */ "NV7D");
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */


/**
 * Try parse the AFD ref the headers
 *
 * @param headers the http headers objct
 * @returns the AFD ref string, empty string would be returned if not found.
 */
const tryParseAfdRefFromHeaders = (headers) => {
    const MsEdgeRefHeaderName = 'x-msedge-ref';
    const MsRefHeaderName = 'x-ms-ref';
    if (!headers) {
        return '';
    }
    // headers.get() would return null if the header name is not found.
    const refStr = headers[MsEdgeRefHeaderName] || headers[MsRefHeaderName];
    return refStr !== null && refStr !== void 0 ? refStr : '';
};
/**
 * Handle the system notification codes from the headers
 *
 * @param headers the http headers object
 */
const handleSystemNotificationHeader = (headers) => {
    if (!headers) {
        return;
    }
    const value = headers['x-ms-system-notification-codes'];
    const systemNotificationCodes = value ? value.split(',') : [];
    if (systemNotificationCodes.length > 0) {
        Object(_reactiveVariables__WEBPACK_IMPORTED_MODULE_1__[/* systemNotificationCodesVar */ "a"])(systemNotificationCodes);
    }
};
var InputTaskType;
(function (InputTaskType) {
    InputTaskType["CreateSelfOwnedReportDefinitionInput"] = "CreateSelfOwnedReportDefinitionInput";
    InputTaskType["SubmitReportInputOfUpdatesRuntime"] = "SubmitReportInputOfUpdatesRuntime";
    InputTaskType["SubmitOOBEReportInputOfUpdatesRuntime"] = "SubmitOOBEReportInputOfUpdatesRuntime";
})(InputTaskType || (InputTaskType = {}));
function submitInputTask(inputType, input) {
    return Object(_addressbook_components_metaos_host__WEBPACK_IMPORTED_MODULE_0__[/* submitTask */ "n"])({
        type: inputType,
        value: input,
    });
}
/**
 * check is a new chat
 *
 * @param chatId
 * @param groupId
 * @param channelId
 * @returns
 */
function isNewChat(chatId, groupId, channelId) {
    // On Mobile platforms the chatId property does not contain the 'preview' label, so we cannot use that to identify
    // new chats on Mobile. The chat id can also be a non-null empty string.
    if (isInChannel(groupId, channelId)) {
        return false;
    }
    if (!chatId) {
        //  The new chat would not have a chatId
        return true;
    }
    return chatId.includes('preview') || chatId.includes('newchat');
}
/**
 * check is in a channel, if groupId or channelId is truthy, it means in a channel
 *
 * @param groupId
 * @param channelId
 * @returns
 */
function isInChannel(groupId, channelId) {
    return Boolean(groupId || channelId);
}


/***/ }),

/***/ "TzxL":
/*!*****************************************************!*\
  !*** ./src/views/containers/ErrorBoundary/index.ts ***!
  \*****************************************************/
/*! exports provided: ErrorBoundary */
/*! exports used: ErrorBoundary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _ErrorBoundary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ErrorBoundary */ "kj/a");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _ErrorBoundary__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */



/***/ }),

/***/ "UJ3/":
/*!**********************************!*\
  !*** ./src/localization/i18n.ts ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _addressbook_components_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-logger */ "yftM");
/* harmony import */ var _addressbook_components_metaos_host__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @addressbook/components-metaos-host */ "0acT");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! i18next */ "d5gM");
/* harmony import */ var i18next_resources_to_backend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! i18next-resources-to-backend */ "Gsa1");
/* harmony import */ var i18next_resources_to_backend__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(i18next_resources_to_backend__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "snMe");
/* harmony import */ var _common_env__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/env */ "8MrD");
/* harmony import */ var _locales_supportedLngs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../locales/supportedLngs */ "xZ10");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../logger */ "pIRP");
/* harmony import */ var _utilities_DateTimeUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utilities/DateTimeUtils */ "EMeK");
/* harmony import */ var _fallbackLng__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fallbackLng */ "Zq66");










if (_common_env__WEBPACK_IMPORTED_MODULE_5__[/* isDev */ "l"]) {
    // add dev for languages in DEV env
    _locales_supportedLngs__WEBPACK_IMPORTED_MODULE_6__[/* supportedLngs */ "a"].unshift('dev');
}
i18next__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].use(react_i18next__WEBPACK_IMPORTED_MODULE_4__[/* initReactI18next */ "e"]) // passes i18n down to react-i18next
    .use(i18next_resources_to_backend__WEBPACK_IMPORTED_MODULE_3___default()((language, namespace, callback) => {
    // Don't populate i18n resources when testing, to avoid translation shift from key to translated string.
    if (_common_env__WEBPACK_IMPORTED_MODULE_5__[/* isTest */ "o"])
        return;
    // https://v4.webpack.js.org/api/module-methods/#magic-comments
    __webpack_require__("8/2k")(`./${language}/${namespace}.json`)
        .then((resources) => {
        callback(null, resources);
    })
        .catch((error) => {
        callback(error, null);
    });
}))
    .init({
    debug: _common_env__WEBPACK_IMPORTED_MODULE_5__[/* isDev */ "l"],
    ns: 'strings',
    // localStorage key is the same with the'i18next-browser-languagedetector';
    lng: _common_env__WEBPACK_IMPORTED_MODULE_5__[/* initQuery */ "k"].get(_common_env__WEBPACK_IMPORTED_MODULE_5__[/* URIParam */ "g"].Locale) || localStorage.getItem('i18nextLng') || _fallbackLng__WEBPACK_IMPORTED_MODULE_9__[/* defaultLng */ "a"],
    // lng: 'en', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    interpolation: {
        escapeValue: false, // react already safes from xss
    },
    supportedLngs: _locales_supportedLngs__WEBPACK_IMPORTED_MODULE_6__[/* supportedLngs */ "a"],
    fallbackLng: _fallbackLng__WEBPACK_IMPORTED_MODULE_9__[/* fallbackLng */ "b"],
    load: 'currentOnly',
}, () => {
    var _a, _b, _c, _d, _e, _f;
    (_a = i18next__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].services.formatter) === null || _a === void 0 ? void 0 : _a.add('friendlydate', _utilities_DateTimeUtils__WEBPACK_IMPORTED_MODULE_8__[/* friendlyDateFormatter */ "c"]);
    (_b = i18next__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].services.formatter) === null || _b === void 0 ? void 0 : _b.add('friendlyrelativetime', _utilities_DateTimeUtils__WEBPACK_IMPORTED_MODULE_8__[/* friendlyRelativeTimeFormatter */ "d"]);
    (_c = i18next__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].services.formatter) === null || _c === void 0 ? void 0 : _c.add('relativeminutetime', _utilities_DateTimeUtils__WEBPACK_IMPORTED_MODULE_8__[/* relativeMinuteTimeFormatter */ "e"]);
    (_d = i18next__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].services.formatter) === null || _d === void 0 ? void 0 : _d.add('weekday', _utilities_DateTimeUtils__WEBPACK_IMPORTED_MODULE_8__[/* weekDayFormatter */ "f"]);
    (_e = i18next__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].services.formatter) === null || _e === void 0 ? void 0 : _e.add('dayofmonth', _utilities_DateTimeUtils__WEBPACK_IMPORTED_MODULE_8__[/* dayFormatter */ "b"]);
    (_f = i18next__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].services.formatter) === null || _f === void 0 ? void 0 : _f.add('datetimerange', _utilities_DateTimeUtils__WEBPACK_IMPORTED_MODULE_8__[/* dateTimeRangeFormatter */ "a"]);
});
// update html attribute on languageChanged
i18next__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].on('languageChanged', (lng) => {
    document.documentElement.setAttribute('lang', lng);
    document.documentElement.setAttribute('dir', i18next__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].dir());
});
i18next__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].on('initialized', () => {
    Object(_addressbook_components_metaos_host__WEBPACK_IMPORTED_MODULE_1__[/* notifyAppInitializationSuccess */ "j"])().then(() => {
        _logger__WEBPACK_IMPORTED_MODULE_7__[/* logger */ "f"].markScenario(_logger__WEBPACK_IMPORTED_MODULE_7__[/* ScenarioName */ "c"].AppBoot, _logger__WEBPACK_IMPORTED_MODULE_7__[/* StepName */ "e"].TeamsInitializationSuccess, _addressbook_components_logger__WEBPACK_IMPORTED_MODULE_0__[/* TelemetryScenarioStatus */ "g"].Success);
    });
});
/* harmony default export */ __webpack_exports__["a"] = (i18next__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]);


/***/ }),

/***/ "VTGp":
/*!*********************************************!*\
  !*** ./src/reactiveVariables/CommonVars.ts ***!
  \*********************************************/
/*! exports provided: modalShowingVar, systemNotificationCodesVar, requestFeedbackShowingVar */
/*! exports used: modalShowingVar, systemNotificationCodesVar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return modalShowingVar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return systemNotificationCodesVar; });
/* unused harmony export requestFeedbackShowingVar */
/* harmony import */ var react_reactive_var__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-reactive-var */ "2spY");
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */

/**
 * modalShowingVar indicates whether there is a modal showing in HomePag,
 * including ReviewReportModal, SubmitReportModal, SubmitOOBEReportModal and TemplateManagementModal
 */
const modalShowingVar = Object(react_reactive_var__WEBPACK_IMPORTED_MODULE_0__[/* makeVar */ "a"])(false);
const systemNotificationCodesVar = Object(react_reactive_var__WEBPACK_IMPORTED_MODULE_0__[/* makeVar */ "a"])([]);
const requestFeedbackShowingVar = Object(react_reactive_var__WEBPACK_IMPORTED_MODULE_0__[/* makeVar */ "a"])(false);


/***/ }),

/***/ "Zq66":
/*!*****************************************!*\
  !*** ./src/localization/fallbackLng.ts ***!
  \*****************************************/
/*! exports provided: defaultLng, fallbackLng */
/*! exports used: defaultLng, fallbackLng */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultLng; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fallbackLng; });
/* harmony import */ var _common_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/env */ "8MrD");
/* harmony import */ var _locales_supportedLngs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locales/supportedLngs */ "xZ10");
/* harmony import */ var _fallbackLngMap_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fallbackLngMap.json */ "5ssl");
var _fallbackLngMap_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./fallbackLngMap.json */ "5ssl", 1);



const defaultLng = _common_env__WEBPACK_IMPORTED_MODULE_0__[/* isDev */ "l"] ? 'dev' : 'en-US';
/**
 * Fallback Language rules
 * https://www.i18next.com/principles/fallback#fallback-to-different-languages
 *
 * @param code
 * @returns
 */
function fallbackLng(code) {
    if (!code) {
        return [defaultLng];
    }
    const fallbacks = [];
    const parts = code.toLowerCase().split('-');
    while (parts.length) {
        const language = parts.join('-');
        const lng = getExistingSupportedLanguage(language);
        if (lng) {
            fallbacks.push(lng);
            // only return one fallback language.
            break;
        }
        parts.pop();
    }
    // push defult for dev or no supported language file
    if (_common_env__WEBPACK_IMPORTED_MODULE_0__[/* isDev */ "l"] || !fallbacks.length) {
        fallbacks.push(defaultLng);
    }
    return fallbacks;
}
function getExistingSupportedLanguage(language) {
    // check if the language has language file.
    const existingLng = _locales_supportedLngs__WEBPACK_IMPORTED_MODULE_1__[/* supportedLngs */ "a"].find(lng => lng.toLowerCase() === language);
    if (existingLng) {
        return existingLng;
    }
    // check if the language has supported language files with same prefix, return if only one language is supported.
    const samePrefixLngs = _locales_supportedLngs__WEBPACK_IMPORTED_MODULE_1__[/* supportedLngs */ "a"].filter(lng => lng.toLowerCase().startsWith(`${language}-`));
    if ((samePrefixLngs === null || samePrefixLngs === void 0 ? void 0 : samePrefixLngs.length) === 1) {
        return samePrefixLngs[0];
    }
    // https://microsoft.sharepoint.com/sites/globalreadiness/SitePages/Language-fallback.aspx
    return _fallbackLngMap_json__WEBPACK_IMPORTED_MODULE_2__[language];
}


/***/ }),

/***/ "ajHv":
/*!**********************************!*\
  !*** ./src/common/csp-inject.ts ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./env */ "8MrD");

// import this file before all ts files to inject style nonce
window.CSPSettings = {
    nonce: _env__WEBPACK_IMPORTED_MODULE_0__[/* STYLE_NONCE */ "f"],
};
window.FabricConfig = {
    mergeStyles: {
        cspSettings: { nonce: _env__WEBPACK_IMPORTED_MODULE_0__[/* STYLE_NONCE */ "f"] },
    },
};


/***/ }),

/***/ "bH3m":
/*!*********************************************!*\
  !*** ./src/utilities/UserRoleCheckUtils.ts ***!
  \*********************************************/
/*! exports provided: UserRole, detectGuest */
/*! exports used: detectGuest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export UserRole */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return detectGuest; });
/* harmony import */ var _addressbook_components_metaos_host__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-metaos-host */ "0acT");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jwt-decode */ "k2tF");
/* harmony import */ var _common_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/env */ "8MrD");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logger */ "pIRP");
/* harmony import */ var _routes_Paths__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../routes/Paths */ "9hZ6");
/* harmony import */ var _routes_history__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../routes/history */ "TJux");
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
 * Indicates the users account status in tenant.
 */
var UserRole;
(function (UserRole) {
    UserRole[UserRole["Member"] = 0] = "Member";
    UserRole[UserRole["Guest"] = 1] = "Guest";
})(UserRole || (UserRole = {}));
/**
 * check is guest and auto redirect to error page
 */
function detectGuest() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const token = yield Object(_addressbook_components_metaos_host__WEBPACK_IMPORTED_MODULE_0__[/* getAuthToken */ "g"])(_common_env__WEBPACK_IMPORTED_MODULE_2__[/* ADDRESSBOOK_APP_RESOURCE_URL */ "a"]);
            const jwt = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(token);
            if (jwt.acct !== UserRole.Guest)
                return;
            const errorPath = Object(_routes_Paths__WEBPACK_IMPORTED_MODULE_4__[/* generateURL */ "b"])(_routes_Paths__WEBPACK_IMPORTED_MODULE_4__[/* Paths */ "a"].HomePage);
            _routes_history__WEBPACK_IMPORTED_MODULE_5__[/* history */ "a"].push(errorPath, { replace: true });
        }
        catch (error) {
            _logger__WEBPACK_IMPORTED_MODULE_3__[/* logger */ "f"].logTraceError(_logger__WEBPACK_IMPORTED_MODULE_3__[/* LogCategory */ "a"].CheckUserRole, `error when trying to check userRole, ${error}`);
        }
    });
}


/***/ }),

/***/ "bOMi":
/*!***************************************!*\
  !*** ./src/service/external/graph.ts ***!
  \***************************************/
/*! exports provided: graphServiceClient */
/*! exports used: graphServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return graphServiceClient; });
/* harmony import */ var _addressbook_services_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/services-core */ "jTXW");
/* harmony import */ var _addressbook_services_graph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @addressbook/services-graph */ "Qt34");
/* harmony import */ var _common_Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/Constants */ "fPKC");
/* harmony import */ var _gen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gen */ "kUcb");
/* harmony import */ var _tokenCache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tokenCache */ "FMwJ");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "xaXT");
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
 * A global GraphServiceClient instance.
 */
const graphServiceClient = createGraphServiceClient();
/**
 * Create a GraphServiceClient instance, with interceptors for headers, authorization, cache and logging.
 *
 * @returns A GraphServiceClient instance.
 */
function createGraphServiceClient() {
    return new _addressbook_services_graph__WEBPACK_IMPORTED_MODULE_1__[/* GraphServiceClient */ "a"]({
        baseUrl: _common_Constants__WEBPACK_IMPORTED_MODULE_2__[/* GRAPH_BASE_URL */ "d"],
        interceptors: [
            // Interceptors to remove redundant requests.
            Object(_utils__WEBPACK_IMPORTED_MODULE_5__[/* createKeyedPoolingInterceptor */ "c"])(),
            Object(_utils__WEBPACK_IMPORTED_MODULE_5__[/* createCachingInterceptorInMemory */ "a"])(),
            // Interceptors to improve resilience.
            Object(_utils__WEBPACK_IMPORTED_MODULE_5__[/* createRetryInterceptorWithBackoff */ "e"])(),
            Object(_addressbook_services_core__WEBPACK_IMPORTED_MODULE_0__[/* createThrottlingInterceptor */ "m"])(),
            Object(_addressbook_services_core__WEBPACK_IMPORTED_MODULE_0__[/* createOnlineInterceptor */ "j"])(),
            // Interceptors to add necessary headers.
            createAuthorizationInterceptorForGraph(),
            Object(_utils__WEBPACK_IMPORTED_MODULE_5__[/* createHeadersInterceptorWithIds */ "b"])(),
            // Interceptor to log raw requests and responses.
            Object(_utils__WEBPACK_IMPORTED_MODULE_5__[/* createLoggingInterceptorByLogger */ "d"])(),
        ],
    });
}
/**
 * Create an authorization interceptor for Graph API requests.
 *
 * @returns An interceptor.
 */
function createAuthorizationInterceptorForGraph() {
    return Object(_addressbook_services_core__WEBPACK_IMPORTED_MODULE_0__[/* createAuthorizationInterceptor */ "f"])((request) => __awaiter(this, void 0, void 0, function* () { return request.url.startsWith(_common_Constants__WEBPACK_IMPORTED_MODULE_2__[/* GRAPH_BASE_URL */ "d"]) ? Object(_tokenCache__WEBPACK_IMPORTED_MODULE_4__[/* getResourceToken */ "a"])(_gen__WEBPACK_IMPORTED_MODULE_3__["ResourceType"].Graph, _common_Constants__WEBPACK_IMPORTED_MODULE_2__[/* GRAPH_BASE_URL */ "d"]) : ''; }));
}


/***/ }),

/***/ "dERd":
/*!******************************!*\
  !*** ./src/common/icons.tsx ***!
  \******************************/
/*! exports provided: initIcons, PRESENCE_ICONS_BACKGROUND_COLOR, PRESENCE_ICONS */
/*! exports used: PRESENCE_ICONS, initIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return initIcons; });
/* unused harmony export PRESENCE_ICONS_BACKGROUND_COLOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PRESENCE_ICONS; });
/* harmony import */ var _addressbook_components_fluentui_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-fluentui-icons */ "Y918");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react */ "ogYq");
/* harmony import */ var _fluentui_react_file_type_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react-file-type-icons */ "Y8RE");



function initIcons() {
    Object(_addressbook_components_fluentui_icons__WEBPACK_IMPORTED_MODULE_0__[/* initFluentuiIcons */ "b"])();
    Object(_fluentui_react_file_type_icons__WEBPACK_IMPORTED_MODULE_2__[/* initializeFileTypeIcons */ "a"])();
    Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* registerIcons */ "J"])({
        icons: {},
    });
}
const PRESENCE_ICONS_BACKGROUND_COLOR = {
    Green: '#13a10e',
    Red: '#d13438',
    Yellow: '#eaa300',
    Grey: '#707070',
};
const PRESENCE_ICONS = {
    Available: {
        name: _addressbook_components_fluentui_icons__WEBPACK_IMPORTED_MODULE_0__[/* IconName */ "a"].PresenceAvailable,
        color: PRESENCE_ICONS_BACKGROUND_COLOR.Green,
    },
    AvailableIdle: {
        name: _addressbook_components_fluentui_icons__WEBPACK_IMPORTED_MODULE_0__[/* IconName */ "a"].PresenceAvailable,
        color: PRESENCE_ICONS_BACKGROUND_COLOR.Green,
    },
    Away: {
        name: _addressbook_components_fluentui_icons__WEBPACK_IMPORTED_MODULE_0__[/* IconName */ "a"].PresenceAway,
        color: PRESENCE_ICONS_BACKGROUND_COLOR.Yellow,
    },
    BeRightBack: {
        name: _addressbook_components_fluentui_icons__WEBPACK_IMPORTED_MODULE_0__[/* IconName */ "a"].PresenceAway,
        color: PRESENCE_ICONS_BACKGROUND_COLOR.Yellow,
    },
    Busy: {
        name: _addressbook_components_fluentui_icons__WEBPACK_IMPORTED_MODULE_0__[/* IconName */ "a"].PresenceBusy,
        color: PRESENCE_ICONS_BACKGROUND_COLOR.Red,
    },
    BusyIdle: {
        name: _addressbook_components_fluentui_icons__WEBPACK_IMPORTED_MODULE_0__[/* IconName */ "a"].PresenceBusy,
        color: PRESENCE_ICONS_BACKGROUND_COLOR.Red,
    },
    Offline: {
        name: _addressbook_components_fluentui_icons__WEBPACK_IMPORTED_MODULE_0__[/* IconName */ "a"].PresenceOffline,
        color: PRESENCE_ICONS_BACKGROUND_COLOR.Grey,
    },
    PresenceUnknown: {
        name: _addressbook_components_fluentui_icons__WEBPACK_IMPORTED_MODULE_0__[/* IconName */ "a"].PresenceUnknown,
        color: PRESENCE_ICONS_BACKGROUND_COLOR.Grey,
    },
};


/***/ }),

/***/ "fPKC":
/*!*********************************!*\
  !*** ./src/common/Constants.ts ***!
  \*********************************/
/*! exports provided: MAX_DEFINITIONS, MAX_DEFINITION_TITLE_LENGTH, MAX_DEFINITION_DESCRIPTION_LENGTH, MAX_DEFINITION_QUESTIONS, MAX_DEFINITION_QUESTION_TITLE_LENGTH, MAX_DEFINITION_QUESTION_SUBTITLE_LENGTH, INITIAL_DEFINITION_QUESTION_CHOICES, MIN_DEFINITION_QUESTION_CHOICES, MAX_DEFINITION_QUESTION_CHOICES, MAX_DEFINITION_QUESTION_CHOICE_LENGTH, MAX_DEFINITION_GROUP_SUBMITTERS, MAX_DEFINITION_USER_SUBMITTERS, MAX_DEFINITION_USER_OWNERS, MAX_DEFINITION_USER_COLLABORATORS, MAX_REPORT_TITLE_LENGTH, MAX_REPORT_ANSWER_CONTENT_LENGTH, MAX_REPORT_ANSWER_CONTENT_LENGTH_WITH_BUFFER, MAX_REPORT_USER_RECEIVERS, MAX_REPORT_COMMENTS, MAX_REPORT_ATTACHMENTS, PEOPLE_SUGGESTIONS_RESOLVE_DELAY_TIME_MS, SERVER_STORAGE_DEBOUNCE_WAIT_TIME_MS, SERVER_STORAGE_DEBOUNCE_MAX_WAIT_TIME_MS, LOCAL_STORAGE_DEBOUNCE_WAIT_TIME_MS, LOCAL_STORAGE_DEBOUNCE_MAX_WAIT_TIME_MS, MAX_LINK_TARGET_TITLE_CHARACTER_LIMIT, REPORT_SLOT_PAGINATION_LIMIT, REPORT_SLOT_CACHE_TIME, MAX_TASKMODULE_OCCURRENCE_COUNT, APP_ICON_NAME, APP_ICON_COLOR, DEFAULT_TEMPLATE_ICON_NAME, EMOJI_BACKGROUND_COLOR, HEADER_CLIENT_REQUEST_ID, HEADER_ROUTE_KEY, HEADER_RESPONSE_CORRELATION_ID, DESKTOP_ENTRY, MOBILE_ENTRYPAGE, ATTACHMENTS_FOLDER_NAME, GRAPH_BASE_URL, IOS_CAMERA_PHOTO_NAME, SHAREPOINT_PICKER_APP, SHAREPOINT_PICKER_SCENARIO, SHAREPOINT_IFRAME_PATH, SHAREPOINT_TEMPAUTH_KEY, SHAREPOINT_DOMAIN_REGEX, LOADING_TIMEOUT_IN_SECONDS, ECS_BASIC_URL, OCPS_BASIC_URL, LINK_COPIED_INFO_SHOWING_DURATION_MILLISECONDS_IN_MOBILE, DOT_SEPARATOR, QUICK_UPDATE_TEMPLATE_ID, MAX_REPORTS_CAN_EXPORT_LIMIT, MAX_REPORTDEFINITIONS_FILTER_LIMIT, MAX_SUBMITTERS_FILTER_LIMIT, ReceiverRole, WriterRole, BATCHED_QUERIES_TIME_WINDOW_MS, GetHelpLink, NewFeatureKeys */
/*! exports used: ATTACHMENTS_FOLDER_NAME, DESKTOP_ENTRY, ECS_BASIC_URL, GRAPH_BASE_URL, HEADER_CLIENT_REQUEST_ID, HEADER_RESPONSE_CORRELATION_ID, HEADER_ROUTE_KEY, INITIAL_DEFINITION_QUESTION_CHOICES, LOADING_TIMEOUT_IN_SECONDS, MAX_DEFINITION_GROUP_SUBMITTERS, MAX_DEFINITION_QUESTIONS, MAX_DEFINITION_QUESTION_CHOICES, MAX_DEFINITION_QUESTION_CHOICE_LENGTH, MAX_DEFINITION_QUESTION_SUBTITLE_LENGTH, MAX_DEFINITION_QUESTION_TITLE_LENGTH, MAX_DEFINITION_USER_COLLABORATORS, MAX_DEFINITION_USER_OWNERS, MAX_DEFINITION_USER_SUBMITTERS, MAX_REPORT_ANSWER_CONTENT_LENGTH, MAX_REPORT_ANSWER_CONTENT_LENGTH_WITH_BUFFER, MAX_REPORT_USER_RECEIVERS, MIN_DEFINITION_QUESTION_CHOICES, MOBILE_ENTRYPAGE, SHAREPOINT_DOMAIN_REGEX, SHAREPOINT_TEMPAUTH_KEY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MAX_DEFINITIONS */
/* unused harmony export MAX_DEFINITION_TITLE_LENGTH */
/* unused harmony export MAX_DEFINITION_DESCRIPTION_LENGTH */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return MAX_DEFINITION_QUESTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return MAX_DEFINITION_QUESTION_TITLE_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return MAX_DEFINITION_QUESTION_SUBTITLE_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return INITIAL_DEFINITION_QUESTION_CHOICES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return MIN_DEFINITION_QUESTION_CHOICES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return MAX_DEFINITION_QUESTION_CHOICES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return MAX_DEFINITION_QUESTION_CHOICE_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return MAX_DEFINITION_GROUP_SUBMITTERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return MAX_DEFINITION_USER_SUBMITTERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return MAX_DEFINITION_USER_OWNERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return MAX_DEFINITION_USER_COLLABORATORS; });
/* unused harmony export MAX_REPORT_TITLE_LENGTH */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return MAX_REPORT_ANSWER_CONTENT_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return MAX_REPORT_ANSWER_CONTENT_LENGTH_WITH_BUFFER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return MAX_REPORT_USER_RECEIVERS; });
/* unused harmony export MAX_REPORT_COMMENTS */
/* unused harmony export MAX_REPORT_ATTACHMENTS */
/* unused harmony export PEOPLE_SUGGESTIONS_RESOLVE_DELAY_TIME_MS */
/* unused harmony export SERVER_STORAGE_DEBOUNCE_WAIT_TIME_MS */
/* unused harmony export SERVER_STORAGE_DEBOUNCE_MAX_WAIT_TIME_MS */
/* unused harmony export LOCAL_STORAGE_DEBOUNCE_WAIT_TIME_MS */
/* unused harmony export LOCAL_STORAGE_DEBOUNCE_MAX_WAIT_TIME_MS */
/* unused harmony export MAX_LINK_TARGET_TITLE_CHARACTER_LIMIT */
/* unused harmony export REPORT_SLOT_PAGINATION_LIMIT */
/* unused harmony export REPORT_SLOT_CACHE_TIME */
/* unused harmony export MAX_TASKMODULE_OCCURRENCE_COUNT */
/* unused harmony export APP_ICON_NAME */
/* unused harmony export APP_ICON_COLOR */
/* unused harmony export DEFAULT_TEMPLATE_ICON_NAME */
/* unused harmony export EMOJI_BACKGROUND_COLOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return HEADER_CLIENT_REQUEST_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return HEADER_ROUTE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return HEADER_RESPONSE_CORRELATION_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DESKTOP_ENTRY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return MOBILE_ENTRYPAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ATTACHMENTS_FOLDER_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GRAPH_BASE_URL; });
/* unused harmony export IOS_CAMERA_PHOTO_NAME */
/* unused harmony export SHAREPOINT_PICKER_APP */
/* unused harmony export SHAREPOINT_PICKER_SCENARIO */
/* unused harmony export SHAREPOINT_IFRAME_PATH */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return SHAREPOINT_TEMPAUTH_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return SHAREPOINT_DOMAIN_REGEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LOADING_TIMEOUT_IN_SECONDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ECS_BASIC_URL; });
/* unused harmony export OCPS_BASIC_URL */
/* unused harmony export LINK_COPIED_INFO_SHOWING_DURATION_MILLISECONDS_IN_MOBILE */
/* unused harmony export DOT_SEPARATOR */
/* unused harmony export QUICK_UPDATE_TEMPLATE_ID */
/* unused harmony export MAX_REPORTS_CAN_EXPORT_LIMIT */
/* unused harmony export MAX_REPORTDEFINITIONS_FILTER_LIMIT */
/* unused harmony export MAX_SUBMITTERS_FILTER_LIMIT */
/* unused harmony export ReceiverRole */
/* unused harmony export WriterRole */
/* unused harmony export BATCHED_QUERIES_TIME_WINDOW_MS */
/* unused harmony export GetHelpLink */
/* unused harmony export NewFeatureKeys */
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./env */ "8MrD");
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */

const MAX_DEFINITIONS = 100000;
const MAX_DEFINITION_TITLE_LENGTH = 500;
const MAX_DEFINITION_DESCRIPTION_LENGTH = 10000;
const MAX_DEFINITION_QUESTIONS = 100;
const MAX_DEFINITION_QUESTION_TITLE_LENGTH = 4000;
const MAX_DEFINITION_QUESTION_SUBTITLE_LENGTH = 2000;
const INITIAL_DEFINITION_QUESTION_CHOICES = 2;
const MIN_DEFINITION_QUESTION_CHOICES = 1;
const MAX_DEFINITION_QUESTION_CHOICES = 50;
const MAX_DEFINITION_QUESTION_CHOICE_LENGTH = 500;
const MAX_DEFINITION_GROUP_SUBMITTERS = 5;
const MAX_DEFINITION_USER_SUBMITTERS = 2000;
const MAX_DEFINITION_USER_OWNERS = 1;
const MAX_DEFINITION_USER_COLLABORATORS = 5;
const MAX_REPORT_TITLE_LENGTH = 1000;
const MAX_REPORT_ANSWER_CONTENT_LENGTH = 10000;
const MAX_REPORT_ANSWER_CONTENT_LENGTH_WITH_BUFFER = Math.round(MAX_REPORT_ANSWER_CONTENT_LENGTH * 0.99); // To mitigate the difference of DOM implementations between client and server
const MAX_REPORT_USER_RECEIVERS = 500; // No group receivers for now
const MAX_REPORT_COMMENTS = 1000;
const MAX_REPORT_ATTACHMENTS = 10;
const PEOPLE_SUGGESTIONS_RESOLVE_DELAY_TIME_MS = 800;
const SERVER_STORAGE_DEBOUNCE_WAIT_TIME_MS = 500;
const SERVER_STORAGE_DEBOUNCE_MAX_WAIT_TIME_MS = 3000;
const LOCAL_STORAGE_DEBOUNCE_WAIT_TIME_MS = 500;
const LOCAL_STORAGE_DEBOUNCE_MAX_WAIT_TIME_MS = 3000;
const MAX_LINK_TARGET_TITLE_CHARACTER_LIMIT = 10; // Set character limit size of template title
const REPORT_SLOT_PAGINATION_LIMIT = 5;
const REPORT_SLOT_CACHE_TIME = 10 * 60 * 1000; // 10 min
/**
 * Get all occurrences for data migration in chat/team
 */
const MAX_TASKMODULE_OCCURRENCE_COUNT = 1000;
/**
 * Icon Name for work report app
 */
const APP_ICON_NAME = 'AppLogo';
/**
 * background color for APP Icon (accent Color)
 * keep the same with manifest.json
 */
const APP_ICON_COLOR = '#5B5FC7';
/**
 * Icon Name for default Template
 */
const DEFAULT_TEMPLATE_ICON_NAME = 'DefaultTemplateIcon';
/**
 * Emoji background color
 */
const EMOJI_BACKGROUND_COLOR = 'transparent';
/**
 * Http Headers key in request header
 */
const HEADER_CLIENT_REQUEST_ID = 'x-ms-client-request-id';
/**
 * The tenant id key in http request header, it works as route key
 */
const HEADER_ROUTE_KEY = 'x-ms-tenant-id';
/**
 * http correlation key in response header
 */
const HEADER_RESPONSE_CORRELATION_ID = 'mise-correlation-id';
/**
 * the entry page for desktop
 * `/web/index.html` will auto detect mobile or desktop
 */
const DESKTOP_ENTRY = '/web/desktop.html';
/**
 * entry page for mobile
 * `/web/index.html` will auto detect mobile or desktop
 */
const MOBILE_ENTRYPAGE = '/web/mobile.html';
/**
 * The folder name for attachments
 */
const ATTACHMENTS_FOLDER_NAME = 'Microsoft Teams Updates app Documents';
/**
 * The base url for Microsoft Graph API
 */
const GRAPH_BASE_URL = _env__WEBPACK_IMPORTED_MODULE_0__[/* ENVIRONMENT */ "e"] === 'gcch'
    ? 'https://graph.microsoft.us'
    : _env__WEBPACK_IMPORTED_MODULE_0__[/* ENVIRONMENT */ "e"] === 'dod'
        ? 'https://dod-graph.microsoft.us'
        : _env__WEBPACK_IMPORTED_MODULE_0__[/* ENVIRONMENT */ "e"] === 'gallatin'
            ? 'https://microsoftgraph.chinacloudapi.cn'
            : 'https://graph.microsoft.com';
/**
 * When user try to use iphone camera to take photo, the photo name will be always `image.jpg`
 */
const IOS_CAMERA_PHOTO_NAME = 'image.jpg';
// SharePoint picker
const SHAREPOINT_PICKER_APP = 'Teams';
const SHAREPOINT_PICKER_SCENARIO = 'WorkReportFileUpload';
const SHAREPOINT_IFRAME_PATH = '/_layouts/15/FilePicker.aspx';
const SHAREPOINT_TEMPAUTH_KEY = 'tempauth';
const SHAREPOINT_DOMAIN_REGEX = _env__WEBPACK_IMPORTED_MODULE_0__[/* ENVIRONMENT */ "e"] === 'gcch'
    ? /sharepoint\.us/
    : _env__WEBPACK_IMPORTED_MODULE_0__[/* ENVIRONMENT */ "e"] === 'dod'
        ? /sharepoint-mil\.us/
        : _env__WEBPACK_IMPORTED_MODULE_0__[/* ENVIRONMENT */ "e"] === 'gallatin'
            ? /sharepoint\.cn/
            : /sharepoint(-df)?\.com/; // sharepoint.com or sharepoint-df.com for dog food
/**
 * Loading page timeout error threshold
 */
const LOADING_TIMEOUT_IN_SECONDS = 30;
/**
 * The base url for ECS host
 */
const ECS_BASIC_URL = _env__WEBPACK_IMPORTED_MODULE_0__[/* ENVIRONMENT */ "e"] === 'gcch'
    ? 'https://config.ecs.gov.teams.microsoft.us/config/v1/MicrosoftTeamsApps/1.0.0.0'
    : _env__WEBPACK_IMPORTED_MODULE_0__[/* ENVIRONMENT */ "e"] === 'dod'
        ? 'https://config.ecs.dod.teams.microsoft.us/config/v1/MicrosoftTeamsApps/1.0.0.0'
        : _env__WEBPACK_IMPORTED_MODULE_0__[/* ENVIRONMENT */ "e"] === 'gallatin'
            ? 'https://mooncake.config.teams.microsoft.com/config/v1/MicrosoftTeamsApps/1.0.0.0'
            : 'https://config.teams.microsoft.com/config/v1/MicrosoftTeamsApps/1.0.0.0';
/**
 * The base url for OCPS
 */
const OCPS_BASIC_URL = _env__WEBPACK_IMPORTED_MODULE_0__[/* ENVIRONMENT */ "e"] === 'gcch' || _env__WEBPACK_IMPORTED_MODULE_0__[/* ENVIRONMENT */ "e"] === 'dod' || _env__WEBPACK_IMPORTED_MODULE_0__[/* ENVIRONMENT */ "e"] === 'gallatin'
    ? ''
    : 'https://clients.config.office.net/user/v1.0/web/policies';
/**
 * Link copied info showing duration in mobile
 */
const LINK_COPIED_INFO_SHOWING_DURATION_MILLISECONDS_IN_MOBILE = 3000;
/**
 * Dot separator
 */
const DOT_SEPARATOR = '•';
/**
 * Template id for quick update
 */
const QUICK_UPDATE_TEMPLATE_ID = 'QuickReport';
/**
 * Data Export limitation
 */
const MAX_REPORTS_CAN_EXPORT_LIMIT = 1000;
/**
 * Data Export limitation of report definition can filter
 */
const MAX_REPORTDEFINITIONS_FILTER_LIMIT = 1;
/**
 * Data Export limitation of submitter can filter
 */
const MAX_SUBMITTERS_FILTER_LIMIT = 1;
/**
 * Receiver role
 */
const ReceiverRole = 'Receiver';
/**
 * Writer role
 */
const WriterRole = 'Writer';
/**
 * The time window for batched queries
 */
const BATCHED_QUERIES_TIME_WINDOW_MS = 500;
/**
 * The get help target link
 */
const GetHelpLink = 'https://support.microsoft.com/office/get-started-in-updates-c03a079e-e660-42dc-817b-ca4cfd602e5a';
/**
 * New feature keys
 */
const NewFeatureKeys = ['InlinePicture', 'MentionInComments'];


/***/ }),

/***/ "k/S9":
/*!***************************************!*\
  !*** ./src/service/external/index.ts ***!
  \***************************************/
/*! exports provided: graphServiceClient */
/*! exports used: graphServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _graph__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graph */ "bOMi");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _graph__WEBPACK_IMPORTED_MODULE_0__["a"]; });




/***/ }),

/***/ "kiQV":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, private, scripts, keywords, author, license, dependencies, devDependencies, default */
/*! exports used: version */
/***/ (function(module) {

module.exports = JSON.parse("{\"a\":\"1.0.0\"}");

/***/ }),

/***/ "kj/a":
/*!**************************************************************!*\
  !*** ./src/views/containers/ErrorBoundary/ErrorBoundary.tsx ***!
  \**************************************************************/
/*! exports provided: ErrorBoundary */
/*! exports used: ErrorBoundary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorBoundary; });
/* harmony import */ var _addressbook_components_metaos_host__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-metaos-host */ "0acT");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/env */ "8MrD");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../logger */ "pIRP");
/* harmony import */ var _ErrorBoundaryContent_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ErrorBoundaryContent.container */ "vNE+");
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */





class ErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    componentDidCatch(error, errorInfo) {
        const message = `App failed to boot: ${error.message}, stack:${error.stack}, componentStack: ${errorInfo.componentStack}`;
        _logger__WEBPACK_IMPORTED_MODULE_3__[/* logger */ "f"].logTraceError(_logger__WEBPACK_IMPORTED_MODULE_3__[/* LogCategory */ "a"].AppBoot, message);
        _logger__WEBPACK_IMPORTED_MODULE_3__[/* logger */ "f"].markScenario(_logger__WEBPACK_IMPORTED_MODULE_3__[/* ScenarioName */ "c"].AppBoot, _logger__WEBPACK_IMPORTED_MODULE_3__[/* StepName */ "e"].AppBootFailedWithErrorBoundary);
        _logger__WEBPACK_IMPORTED_MODULE_3__[/* logger */ "f"].failScenario(_logger__WEBPACK_IMPORTED_MODULE_3__[/* ScenarioName */ "c"].AppBoot);
        if (_common_env__WEBPACK_IMPORTED_MODULE_2__[/* isDev */ "l"]) {
            this.setState(state => (Object.assign(Object.assign({}, state), { error, errorInfo })));
        }
        else {
            // it only works before notify success to teams
            Object(_addressbook_components_metaos_host__WEBPACK_IMPORTED_MODULE_0__[/* notifyAppInitializationFailure */ "i"])({ reason: _addressbook_components_metaos_host__WEBPACK_IMPORTED_MODULE_0__[/* app */ "d"].FailedReason.Other, message: _logger__WEBPACK_IMPORTED_MODULE_3__[/* logger */ "f"].sessionId });
        }
    }
    render() {
        var _a, _b;
        if (this.state.hasError) {
            return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorBoundaryContent_container__WEBPACK_IMPORTED_MODULE_4__[/* ErrorBoundaryContent */ "a"], null, this.state.error && (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { role: 'log' },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", null,
                        "Call Stack (",
                        this.state.error.message,
                        ")"),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("pre", null, (_a = this.state.error) === null || _a === void 0 ? void 0 : _a.stack)),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", null),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", { open: true },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", null, "Component Stack"),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("pre", null, (_b = this.state.errorInfo) === null || _b === void 0 ? void 0 : _b.componentStack))))));
        }
        return this.props.children;
    }
}


/***/ }),

/***/ "pIRP":
/*!*****************************!*\
  !*** ./src/logger/index.ts ***!
  \*****************************/
/*! exports provided: logger, ScenarioName, ScenarioType, ModuleName, StepName, LogCategory */
/*! exports used: LogCategory, ModuleName, ScenarioName, ScenarioType, StepName, logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return logger; });
/* harmony import */ var _addressbook_components_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-logger */ "yftM");
/* harmony import */ var _common_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/env */ "8MrD");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "K2jR");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _types__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _types__WEBPACK_IMPORTED_MODULE_2__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _types__WEBPACK_IMPORTED_MODULE_2__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _types__WEBPACK_IMPORTED_MODULE_2__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _types__WEBPACK_IMPORTED_MODULE_2__["e"]; });



/**
 * global logger for the APP
 */
const logger = /* #__PURE__ */ new _addressbook_components_logger__WEBPACK_IMPORTED_MODULE_0__[/* OneDSLogger */ "c"]({
    ariaToken: _common_env__WEBPACK_IMPORTED_MODULE_1__[/* ARIA_TOKEN */ "b"],
    isDevelopment: _common_env__WEBPACK_IMPORTED_MODULE_1__[/* isDev */ "l"] || _common_env__WEBPACK_IMPORTED_MODULE_1__[/* isInt */ "n"],
    delay: 10000,
    logTraceTypes: _common_env__WEBPACK_IMPORTED_MODULE_1__[/* isDev */ "l"] || _common_env__WEBPACK_IMPORTED_MODULE_1__[/* isInt */ "n"]
        ? ['Debug', 'Info', 'Warning', 'Error', 'Exception', 'HTTPException']
        : ['Warning', 'Error', 'Exception', 'HTTPException'],
});



/***/ }),

/***/ "rMck":
/*!*******************************!*\
  !*** ./src/styles/global.css ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "t45A":
/*!************************************!*\
  !*** ./src/utilities/deep-link.ts ***!
  \************************************/
/*! exports provided: DeepLinkType, DeepLinkSourceType, dispatchDeepLink, generateDeepLink, generateDeepLinkToAppHomePage */
/*! exports used: dispatchDeepLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DeepLinkType */
/* unused harmony export DeepLinkSourceType */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dispatchDeepLink; });
/* unused harmony export generateDeepLink */
/* unused harmony export generateDeepLinkToAppHomePage */
/* harmony import */ var _addressbook_components_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-logger */ "yftM");
/* harmony import */ var _common_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/env */ "8MrD");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logger */ "pIRP");



var DeepLinkType;
(function (DeepLinkType) {
    // Keep the value to lower case to make the switch more smoothly.
    /**
     * The assigned event of the definition.
     */
    DeepLinkType["DefinitionAssigned"] = "definitionassigned";
    /**
     * The received event of the definition.
     */
    DeepLinkType["DefinitionReceived"] = "definitionreceived";
    /**
     * The owner changed event of the definition.
     */
    DeepLinkType["DefinitionOwnerChanged"] = "definitionownerchanged";
    /**
     * The collabortor changed event of the definition.
     */
    DeepLinkType["DefinitionCollaboratorChanged"] = "definitioncollaboratorchanged";
    /**
     * The created event of the report.
     */
    DeepLinkType["ReportReceived"] = "reportreceived";
    /**
     * The report liked event.
     */
    DeepLinkType["ReportLiked"] = "reportliked";
    /**
     * The report edited event.
     */
    DeepLinkType["ReportEdited"] = "reportedited";
    /**
     * The report commented event.
     */
    DeepLinkType["ReportCommented"] = "reportcommented";
    /**
     * The Ending event of the occurrence.
     */
    DeepLinkType["OccurrenceEnding"] = "occurrenceending";
    /**
     * generate DeepLink to manual reminder.
     */
    DeepLinkType["OccurrenceManualReminder"] = "occurrencemanualreminder";
    /**
     * review the Occurrence Report (From Desktop Taskmodule)
     */
    DeepLinkType["ReviewOccurrenceReport"] = "reviewoccurrencereport";
    /**
     * review the Occurrence Report (From Mobile Taskmodule)
     */
    DeepLinkType["ReviewOccurrence"] = "reviewoccurrence";
    /**
     * generate DeepLink to remind submit.
     */
    DeepLinkType["RemindSubmit"] = "remindsubmit";
    /**
     * generate DeepLink to edit definition.
     */
    DeepLinkType["EditDefinition"] = "editdefinition";
})(DeepLinkType || (DeepLinkType = {}));
var DeepLinkSourceType;
(function (DeepLinkSourceType) {
    DeepLinkSourceType["TaskModule"] = "TaskModule";
    DeepLinkSourceType["ActivityFeed"] = "ActivityFeed";
    DeepLinkSourceType["GeneratedShareLink"] = "GeneratedShareLink";
    DeepLinkSourceType["AdaptiveCard"] = "AdaptiveCard";
})(DeepLinkSourceType || (DeepLinkSourceType = {}));
function dispatchDeepLink(subEntityId, isMobile) {
    var _a;
    try {
        const subEntity = JSON.parse(subEntityId);
        const dataBag = {
            type: subEntity === null || subEntity === void 0 ? void 0 : subEntity.type,
            source: subEntity === null || subEntity === void 0 ? void 0 : subEntity.source,
            definitionId: subEntity === null || subEntity === void 0 ? void 0 : subEntity.definitionId,
            occurrenceId: subEntity === null || subEntity === void 0 ? void 0 : subEntity.occurrenceId,
            reportId: subEntity === null || subEntity === void 0 ? void 0 : subEntity.reportId,
        };
        const deepLinkSource = (_a = subEntity === null || subEntity === void 0 ? void 0 : subEntity.source) !== null && _a !== void 0 ? _a : DeepLinkSourceType.ActivityFeed;
        _logger__WEBPACK_IMPORTED_MODULE_2__[/* logger */ "f"].setCommonProperty({ 'Panel.DeepLinkSourceType': deepLinkSource, 'Panel.DeepLinkType': subEntity === null || subEntity === void 0 ? void 0 : subEntity.type });
        _logger__WEBPACK_IMPORTED_MODULE_2__[/* logger */ "f"].logUserBiAction(_logger__WEBPACK_IMPORTED_MODULE_2__[/* ScenarioName */ "c"].AppBoot, _logger__WEBPACK_IMPORTED_MODULE_2__[/* StepName */ "e"].AppBootDispatchDeepLink, deepLinkSource, dataBag);
        _logger__WEBPACK_IMPORTED_MODULE_2__[/* logger */ "f"].markScenario(_logger__WEBPACK_IMPORTED_MODULE_2__[/* ScenarioName */ "c"].AppBoot, _logger__WEBPACK_IMPORTED_MODULE_2__[/* StepName */ "e"].AppBootDispatchDeepLink, _addressbook_components_logger__WEBPACK_IMPORTED_MODULE_0__[/* TelemetryScenarioStatus */ "g"].Success, {
            dataBag,
        });
        switch (subEntity === null || subEntity === void 0 ? void 0 : subEntity.type.toLowerCase()) {
            default:
                _logger__WEBPACK_IMPORTED_MODULE_2__[/* logger */ "f"].logTraceError(_logger__WEBPACK_IMPORTED_MODULE_2__[/* LogCategory */ "a"].DeepLink, subEntityId);
                break;
        }
    }
    catch (err) {
        _logger__WEBPACK_IMPORTED_MODULE_2__[/* logger */ "f"].logTraceException(_logger__WEBPACK_IMPORTED_MODULE_2__[/* LogCategory */ "a"].DeepLink, { error: err });
    }
}
/**
 * generate the deep link for the definition.
 *
 * @param subEntity
 * @param escapeEncode escape encodeURIComponent (for ios BUG: lost the context when execute the deepLink with encodeURIComponent)
 * @returns
 */
function generateDeepLink(subEntity, escapeEncode = false) {
    const context = JSON.stringify({ subEntityId: JSON.stringify(subEntity) });
    const deepLink = `https://teams.microsoft.com/l/entity/${_common_env__WEBPACK_IMPORTED_MODULE_1__[/* WORKREPORT_APP_TEAMS_ID */ "i"]}/workreport/?context=${escapeEncode ? context : encodeURIComponent(context)}`;
    return deepLink;
}
/**
 * generate the deep link to app homepage.
 *
 * @returns
 */
function generateDeepLinkToAppHomePage() {
    const deepLink = `https://teams.microsoft.com/l/entity/${_common_env__WEBPACK_IMPORTED_MODULE_1__[/* WORKREPORT_APP_TEAMS_ID */ "i"]}/workreport`;
    return deepLink;
}


/***/ }),

/***/ "vNE+":
/*!*******************************************************************************!*\
  !*** ./src/views/containers/ErrorBoundary/ErrorBoundaryContent.container.tsx ***!
  \*******************************************************************************/
/*! exports provided: ErrorBoundaryContent */
/*! exports used: ErrorBoundaryContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorBoundaryContent; });
/* harmony import */ var _addressbook_components_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-shared */ "+INc");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "Tr4L");
/* harmony import */ var _localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../localization */ "HVbO");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../logger */ "pIRP");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service */ "YCKj");






// eslint-disable-next-line @typescript-eslint/ban-types
const ErrorBoundaryContent = ({ children }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__[/* useTranslation */ "a"])(undefined, { useSuspense: false });
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_addressbook_components_shared__WEBPACK_IMPORTED_MODULE_0__[/* EmptyState */ "b"], { title: t(_localization__WEBPACK_IMPORTED_MODULE_3__[/* Strings */ "a"].errorTitle, { defaultValue: '' }), message: `Session Id: ${_logger__WEBPACK_IMPORTED_MODULE_4__[/* logger */ "f"] === null || _logger__WEBPACK_IMPORTED_MODULE_4__[/* logger */ "f"] === void 0 ? void 0 : _logger__WEBPACK_IMPORTED_MODULE_4__[/* logger */ "f"].sessionId}`, height: '100vh', actionText: t(_localization__WEBPACK_IMPORTED_MODULE_3__[/* Strings */ "a"].errorAction, { defaultValue: 'Refresh' }), onAction: () => _logger__WEBPACK_IMPORTED_MODULE_4__[/* logger */ "f"].flushLogs(() => {
            // remove page state back to home page
            const location = window.location;
            // taskModule Pages
            if (!location.pathname.includes('/taskModule')) {
                location.hash = '';
            }
            Object(_service__WEBPACK_IMPORTED_MODULE_5__[/* clearQueryClientPersistor */ "c"])();
            location.reload();
        }), role: 'alert' }, children));
};


/***/ }),

/***/ "vWYN":
/*!********************************!*\
  !*** ./src/utilities/flags.ts ***!
  \********************************/
/*! exports provided: LocalStorageFlag, hasLocalStorageFlag, addLocalStorageFlag, removeLocalStorageFlag, clearLocalStorageFlags, useLocalStorageFlag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LocalStorageFlag */
/* unused harmony export hasLocalStorageFlag */
/* unused harmony export addLocalStorageFlag */
/* unused harmony export removeLocalStorageFlag */
/* unused harmony export clearLocalStorageFlags */
/* unused harmony export useLocalStorageFlag */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "LiEJ");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "Jg5f");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "lqvn");



/**
 * An enum of all the flags that can be stored in local storage.
 */
var LocalStorageFlag;
(function (LocalStorageFlag) {
    LocalStorageFlag["MobileReportLikedButton"] = "MobileReportLikedButton";
    LocalStorageFlag["AggregatedViewDemoCard"] = "AggregatedViewDemoCard";
    LocalStorageFlag["PersonalAppValidUsage"] = "PersonalAppValidUsage";
    LocalStorageFlag["TaskModuleValidUsage"] = "TaskModuleValidUsage";
    LocalStorageFlag["UserHasData"] = "UserHasData";
    LocalStorageFlag["DismissWelcomeUpdateSection"] = "DismissWelcomeUpdateSection";
    LocalStorageFlag["DismissWelcomeUpdateSectionWithCategory"] = "DismissWelcomeUpdateSectionWithCategory";
    LocalStorageFlag["FeedbackBubble"] = "FeedbackBubble";
})(LocalStorageFlag || (LocalStorageFlag = {}));
/**
 * Checks if the given flag is stored in local storage.
 *
 * @param flag The flag to check.
 * @returns A boolean indicating if the flag is stored in local storage.
 */
function hasLocalStorageFlag(flag) {
    return localStorageFlagsSubject.value.includes(flag);
}
/**
 * Adds the given flag to local storage.
 *
 * @param flag The flag to add.
 */
function addLocalStorageFlag(flag) {
    if (localStorageFlagsSubject.value.includes(flag))
        return;
    localStorageFlagsSubject.next([...localStorageFlagsSubject.value, flag]);
}
/**
 * Removes the given flag from local storage.
 *
 * @param flag The flag to remove.
 */
function removeLocalStorageFlag(flag) {
    if (!localStorageFlagsSubject.value.includes(flag))
        return;
    localStorageFlagsSubject.next(localStorageFlagsSubject.value.filter(f => f !== flag));
}
/**
 * Clears all flags from local storage.
 */
function clearLocalStorageFlags() {
    localStorageFlagsSubject.next([]);
}
/**
 * A hook that returns a boolean indicating if the given flag is stored in local storage.
 *
 * @param flag The flag to check.
 * @returns A boolean indicating if the flag is stored in local storage.
 */
function useLocalStorageFlag(flag) {
    const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(localStorageFlagsSubject.value.includes(flag));
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
        const subscription = localStorageFlagsSubject
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__[/* map */ "a"])(flags => flags.includes(flag)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__[/* distinctUntilChanged */ "a"])())
            .subscribe(setState);
        return () => subscription.unsubscribe();
    }, [flag]);
    return state;
}
const localStorageFlagsSubject = createLocalStorageFlagsSubject('Flags');
function createLocalStorageFlagsSubject(key) {
    const subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__[/* BehaviorSubject */ "a"](getLocalStorageFlags(key));
    subject.subscribe(flags => setLocalStorageFlags(key, flags));
    return subject;
}
function getLocalStorageFlags(key) {
    const flagsJson = localStorage.getItem(key);
    return parseLocalStorageFlags(flagsJson);
}
function setLocalStorageFlags(key, flags) {
    if (flags.length) {
        const flagsJson = JSON.stringify(flags);
        localStorage.setItem(key, flagsJson);
    }
    else {
        localStorage.removeItem(key);
    }
}
function parseLocalStorageFlags(json) {
    try {
        if (!json)
            return [];
        const flagsObject = JSON.parse(json);
        if (!Array.isArray(flagsObject))
            return [];
        const flagsArray = flagsObject.filter((flag) => typeof flag === 'string' && flag in LocalStorageFlag);
        return flagsArray;
    }
    catch (_a) {
        return [];
    }
}


/***/ }),

/***/ "xaXT":
/*!***************************************!*\
  !*** ./src/service/external/utils.ts ***!
  \***************************************/
/*! exports provided: createKeyedPoolingInterceptor, createCachingInterceptorInMemory, createRetryInterceptorWithBackoff, createHeadersInterceptorWithIds, createLoggingInterceptorByLogger */
/*! exports used: createCachingInterceptorInMemory, createHeadersInterceptorWithIds, createKeyedPoolingInterceptor, createLoggingInterceptorByLogger, createRetryInterceptorWithBackoff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createKeyedPoolingInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createCachingInterceptorInMemory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return createRetryInterceptorWithBackoff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createHeadersInterceptorWithIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return createLoggingInterceptorByLogger; });
/* harmony import */ var _addressbook_services_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/services-core */ "jTXW");
/* harmony import */ var _addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @addressbook/utilities-core */ "1hmm");
/* harmony import */ var _common_Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/Constants */ "fPKC");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../logger */ "pIRP");




/**
 * Creates a service interceptor that pools requests in a keyed promise pool.
 *
 * @returns An interceptor.
 */
function createKeyedPoolingInterceptor() {
    return Object(_addressbook_services_core__WEBPACK_IMPORTED_MODULE_0__[/* createPoolingInterceptor */ "k"])({ pool });
}
const pool = new _addressbook_services_core__WEBPACK_IMPORTED_MODULE_0__[/* KeyedPromisePool */ "a"]();
/**
 * Creates a service interceptor that caches responses in a memory cache.
 *
 * @returns An interceptor.
 */
function createCachingInterceptorInMemory() {
    return Object(_addressbook_services_core__WEBPACK_IMPORTED_MODULE_0__[/* createCachingInterceptor */ "g"])({ cache, test: isGetAndOkWithExceptions });
}
const cache = new _addressbook_services_core__WEBPACK_IMPORTED_MODULE_0__[/* MemoryServiceCache */ "b"]();
const exceptions = [{ regex: /\/photo(s\/.*)?\/\$value$/, status: [404] }];
function isGetAndOkWithExceptions(request, response) {
    return (request.method === 'GET' &&
        (!response ||
            response.ok ||
            exceptions.some(({ regex, status }) => regex.test(request.url) && status.includes(response.status))));
}
const CLIENT_REQUEST_ID = 'client-request-id';
const REQUEST_ID = 'request-id';
const RETRY_AFTER = 'retry-after';
/**
 * Creates a service interceptor that retries requests with backoff according to the Retry-After header or exponentially.
 *
 * @returns An interceptor.
 * @see https://learn.microsoft.com/graph/best-practices-concept#reliability-and-support
 */
function createRetryInterceptorWithBackoff() {
    return Object(_addressbook_services_core__WEBPACK_IMPORTED_MODULE_0__[/* createRetryInterceptor */ "l"])({ backoff });
}
const backoff = (attempts, response) => {
    const retryAfterValue = response === null || response === void 0 ? void 0 : response.headers.get(RETRY_AFTER);
    const retryAfterSeconds = retryAfterValue ? parseInt(retryAfterValue, 10) : NaN;
    const resultSeconds = isFinite(retryAfterSeconds) ? retryAfterSeconds : Math.pow(2, attempts);
    return resultSeconds * 1000;
};
/**
 * Creates a service interceptor that adds a client-request-id header to the request.
 *
 * @returns An interceptor.
 * @see https://learn.microsoft.com/graph/best-practices-concept#reliability-and-support
 */
function createHeadersInterceptorWithIds() {
    return Object(_addressbook_services_core__WEBPACK_IMPORTED_MODULE_0__[/* createHeadersInterceptor */ "h"])({ [CLIENT_REQUEST_ID]: _addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_1__[/* uuid */ "v"] });
}
/**
 * Creates a service interceptor that logs requests and responses to logger.
 *
 * @returns An interceptor.
 * @see https://learn.microsoft.com/graph/best-practices-concept#reliability-and-support
 */
function createLoggingInterceptorByLogger() {
    return Object(_addressbook_services_core__WEBPACK_IMPORTED_MODULE_0__[/* createLoggingInterceptor */ "i"])({ logRequest, logResponse, logError });
}
function logRequest(request) {
    var _a;
    return {
        start: performance.now(),
        url: request.url,
        method: request.method,
        clientRequestId: (_a = request.headers.get(CLIENT_REQUEST_ID)) !== null && _a !== void 0 ? _a : '',
    };
}
function logResponse(response, context) {
    var _a;
    const info = {
        latency: performance.now() - context.start,
        apiName: maskUrl(context.url, maskUrlOptionsForApiName),
        url: maskUrl(context.url, maskUrlOptionsForUrl),
        requestMethod: context.method,
        clientRequestId: context.clientRequestId,
        responseCode: response.status,
        responseText: response.statusText,
        correlationId: (_a = response.headers.get(REQUEST_ID)) !== null && _a !== void 0 ? _a : '',
    };
    _logger__WEBPACK_IMPORTED_MODULE_3__[/* logger */ "f"].logHttp(info);
}
function logError(error, context) {
    if (!(error instanceof Error))
        return;
    _logger__WEBPACK_IMPORTED_MODULE_3__[/* logger */ "f"].logTraceError(_logger__WEBPACK_IMPORTED_MODULE_3__[/* LogCategory */ "a"].NetworkError, `NetworkError ${maskUrl(context.url, maskUrlOptionsForUrl)} ${error.message}`);
}
/**
 * Masks a URL by replacing parts of it with placeholders.
 *
 * To avoid being escaped, the placeholders are enclosed in:
 * - square brackets if occurring in the path,
 * - angle brackets if occurring in the query string.
 *
 * @param url The URL to mask.
 * @param options The mask URL options.
 * @returns The masked URL.
 * @example maskUrl('https://example.com/users/42', { user: true }); // 'https://example.com/users/[user]'
 * @example maskUrl('https://example.com/groups/42', { group: true }); // 'https://example.com/groups/[group]'
 * @example maskUrl('https://example.com/me/photos/48x48/$value', { photo: true }); // 'https://example.com/me/photos/[photo]/$value'
 * @example maskUrl('https://example.com/drives/42', { drive: true }); // 'https://example.com/drives/[drive]'
 * @example maskUrl('https://example.com/me/drive/items/42:/Documents:', { item: true }); // 'https://example.com/me/drive/items/[item]:/Documents:'
 * @example maskUrl('https://example.com/me/drive/items/42:/Documents:', { itemPath: true }); // 'https://example.com/me/drive/items/42:[item-path]:'
 * @example maskUrl('https://example.com/shares/42', { share: true }); // 'https://example.com/shares/[share]'
 * @example maskUrl('https://example.com/shares/42/driveitem/thumbnails/0/medium', { thumbnail: true }); // 'https://example.com/shares/42/driveitem/thumbnails/[thumbnail]/medium'
 * @example maskUrl('https://contoso-my.sharepoint.com/path/to/entity', { sharepoint: true }); // 'https://sharepoint.com'
 * @example maskUrl('https://contoso-my.sharepoint.com/path/to/entity?tempauth=42', { token: true }); // 'https://contoso-my.sharepoint.com/path/to/entity?tempauth=<token>'
 */
function maskUrl(url, options = {}) {
    const masked = new URL(url);
    if (options.user) {
        masked.pathname = masked.pathname.replace(/(?<=users\/)\S+?(?=\/|$)/g, '[user]');
    }
    if (options.group) {
        masked.pathname = masked.pathname.replace(/(?<=groups\/)\S+?(?=\/|$)/g, '[group]');
    }
    if (options.photo) {
        masked.pathname = masked.pathname.replace(/(?<=photos\/)\S+?(?=\/|$)/g, '[photo]');
    }
    if (options.drive) {
        masked.pathname = masked.pathname.replace(/(?<=drives\/)\S+?(?=\/|$)/g, '[drive]');
    }
    if (options.item) {
        masked.pathname = masked.pathname.replace(/(?<=items\/)\S+?(?=:|\/|$)/g, '[item]');
    }
    if (options.itemPath) {
        masked.pathname = masked.pathname.replace(/(?<=(items\/\S+|root):)\S+?(?=:)/g, '[item-path]');
    }
    if (options.share) {
        masked.pathname = masked.pathname.replace(/(?<=shares\/)\S+?(?=\/|$)/g, '[share]');
    }
    if (options.thumbnail) {
        masked.pathname = masked.pathname.replace(/(?<=thumbnails\/)\S+?(?=\/|$)/g, '[thumbnail]');
    }
    if (options.sharepoint) {
        const match = masked.hostname.match(_common_Constants__WEBPACK_IMPORTED_MODULE_2__[/* SHAREPOINT_DOMAIN_REGEX */ "x"]);
        if (match) {
            masked.hostname = match[0];
            masked.pathname = '';
            masked.search = '';
        }
    }
    if (options.token && masked.searchParams.has(_common_Constants__WEBPACK_IMPORTED_MODULE_2__[/* SHAREPOINT_TEMPAUTH_KEY */ "y"])) {
        masked.searchParams.set(_common_Constants__WEBPACK_IMPORTED_MODULE_2__[/* SHAREPOINT_TEMPAUTH_KEY */ "y"], '<token>');
    }
    return masked.toString();
}
/**
 * The mask URL options for API names.
 */
const maskUrlOptionsForApiName = {
    user: true,
    group: true,
    photo: true,
    drive: true,
    item: true,
    itemPath: true,
    share: true,
    thumbnail: true,
    sharepoint: true,
};
/**
 * The mask URL options for URLs.
 */
const maskUrlOptionsForUrl = {
    itemPath: true,
    token: true,
};


/***/ })

}]);
//# sourceMappingURL=main~mobile.js.map