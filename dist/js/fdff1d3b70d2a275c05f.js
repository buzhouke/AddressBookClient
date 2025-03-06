(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main~mobile"],{

/***/ "4YvN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ init; });

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-logger/src/index.ts + 4 modules
var src = __webpack_require__("yftM");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-metaos-host/src/index.ts + 9 modules
var components_metaos_host_src = __webpack_require__("0acT");

// EXTERNAL MODULE: ./package.json
var package_0 = __webpack_require__("kiQV");

// EXTERNAL MODULE: ./src/logger/index.ts + 1 modules
var logger = __webpack_require__("pIRP");

// EXTERNAL MODULE: ./src/common/env.ts
var env = __webpack_require__("8MrD");

// CONCATENATED MODULE: ./src/utilities/deep-link.ts



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
        logger["f" /* logger */].setCommonProperty({ 'Panel.DeepLinkSourceType': deepLinkSource, 'Panel.DeepLinkType': subEntity === null || subEntity === void 0 ? void 0 : subEntity.type });
        logger["f" /* logger */].logUserBiAction(logger["c" /* ScenarioName */].AppBoot, logger["e" /* StepName */].AppBootDispatchDeepLink, deepLinkSource, dataBag);
        logger["f" /* logger */].markScenario(logger["c" /* ScenarioName */].AppBoot, logger["e" /* StepName */].AppBootDispatchDeepLink, src["g" /* TelemetryScenarioStatus */].Success, {
            dataBag,
        });
        switch (subEntity === null || subEntity === void 0 ? void 0 : subEntity.type.toLowerCase()) {
            default:
                logger["f" /* logger */].logTraceError(logger["a" /* LogCategory */].DeepLink, subEntityId);
                break;
        }
    }
    catch (err) {
        logger["f" /* logger */].logTraceException(logger["a" /* LogCategory */].DeepLink, { error: err });
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
    const deepLink = `https://teams.microsoft.com/l/entity/${env["m" /* WORKREPORT_APP_TEAMS_ID */]}/workreport/?context=${escapeEncode ? context : encodeURIComponent(context)}`;
    return deepLink;
}
/**
 * generate the deep link to app homepage.
 *
 * @returns
 */
function generateDeepLinkToAppHomePage() {
    const deepLink = `https://teams.microsoft.com/l/entity/${env["m" /* WORKREPORT_APP_TEAMS_ID */]}/workreport`;
    return deepLink;
}

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react/index.js
var react = __webpack_require__("ERkP");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/rxjs/_esm5/internal/BehaviorSubject.js
var BehaviorSubject = __webpack_require__("LiEJ");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/rxjs/_esm5/internal/operators/map.js
var map = __webpack_require__("Jg5f");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/rxjs/_esm5/internal/operators/distinctUntilChanged.js
var distinctUntilChanged = __webpack_require__("lqvn");

// CONCATENATED MODULE: ./src/utilities/flags.ts



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
    const [state, setState] = react_default.a.useState(localStorageFlagsSubject.value.includes(flag));
    react_default.a.useEffect(() => {
        const subscription = localStorageFlagsSubject
            .pipe(Object(map["a" /* map */])(flags => flags.includes(flag)), Object(distinctUntilChanged["a" /* distinctUntilChanged */])())
            .subscribe(setState);
        return () => subscription.unsubscribe();
    }, [flag]);
    return state;
}
const localStorageFlagsSubject = createLocalStorageFlagsSubject('Flags');
function createLocalStorageFlagsSubject(key) {
    const subject = new BehaviorSubject["a" /* BehaviorSubject */](getLocalStorageFlags(key));
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

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/history/index.js
var node_modules_history = __webpack_require__("SGJe");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-router/index.js
var react_router = __webpack_require__("H8PI");

// EXTERNAL MODULE: ./src/routes/history.ts
var routes_history = __webpack_require__("TJux");

// EXTERNAL MODULE: ./src/routes/Paths.ts
var Paths = __webpack_require__("9hZ6");

// CONCATENATED MODULE: ./src/utilities/history.ts
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */



function saveLastHistory(userId) {
    if (!canRestore(routes_history["a" /* history */].location))
        return;
    const key = generateLastPathKey(userId);
    const pathString = Object(node_modules_history["e" /* createPath */])(routes_history["a" /* history */].location);
    const item = {
        pathString,
        timestamp: Date.now(),
    };
    localStorage.setItem(key, JSON.stringify(item));
}
const LAST_HISTORY_TTL_IN_SECONDS = 30 * 60 * 1000;
function restoreLastHistory(userId) {
    if (!isExactHomepage(routes_history["a" /* history */].location))
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
    const path = Object(node_modules_history["f" /* parsePath */])(item.pathString);
    if (!canRestore(path))
        return;
    routes_history["a" /* history */].push(path);
}
const lastPathKeyPrefix = 'LastPathV2';
function generateLastPathKey(userId) {
    return userId ? `${lastPathKeyPrefix}-UserId:${userId}` : lastPathKeyPrefix;
}
function isExactHomepage(path) {
    // staticTabs[0].contentUrl in Teams manifest
    if (path.pathname === '/')
        return true;
    const match = Object(react_router["f" /* matchPath */])(path.pathname, Paths["a" /* Paths */].HomePage);
    if (!match)
        return false;
    return Object.keys(match.params).length === 0;
}
function canRestore(path) {
    const pathname = path.pathname;
    if (!pathname)
        return false;
    return [Paths["a" /* Paths */].HomePage].some(pattern => Object(react_router["f" /* matchPath */])(pattern, pathname));
}

// CONCATENATED MODULE: ./src/utilities/isFirstPage.ts
/**
 * check the current stack of the react-router is the first page or not
 */
function isFirstPage() {
    var _a;
    return ((_a = window.history.state) === null || _a === void 0 ? void 0 : _a.idx) === 0;
}

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-people/src/index.ts + 21 modules
var components_people_src = __webpack_require__("apXe");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/lodash-es/uniqBy.js + 9 modules
var uniqBy = __webpack_require__("NkTa");

// EXTERNAL MODULE: ./src/service/index.ts + 2 modules
var service = __webpack_require__("YCKj");

// CONCATENATED MODULE: ./src/utilities/models/people.ts
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
        type: components_people_src["b" /* PeopleSelectionType */].User,
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
            case components_people_src["b" /* PeopleSelectionType */].User:
                return [Object.assign({ Type: service["a" /* DirectoryObjectType */].User }, mapPeopleSelectionToDirectoryObjectWithoutType(selection))];
            case components_people_src["b" /* PeopleSelectionType */].Group:
                if (!expandGroup) {
                    return [
                        Object.assign({ Type: service["a" /* DirectoryObjectType */].Group }, mapPeopleSelectionToDirectoryObjectWithoutType(selection)),
                    ];
                }
                const members = (_c = (_a = (yield selection.items)) !== null && _a !== void 0 ? _a : (yield ((_b = selection.resolveItems) === null || _b === void 0 ? void 0 : _b.call(selection)))) !== null && _c !== void 0 ? _c : [];
                return members.map(item => (Object.assign({ Type: service["a" /* DirectoryObjectType */].User }, mapPeopleSelectionToDirectoryObjectWithoutType(item))));
            case components_people_src["b" /* PeopleSelectionType */].Tag:
            case components_people_src["b" /* PeopleSelectionType */].Unspecific:
                const items = (_f = (_d = (yield selection.items)) !== null && _d !== void 0 ? _d : (yield ((_e = selection.resolveItems) === null || _e === void 0 ? void 0 : _e.call(selection)))) !== null && _f !== void 0 ? _f : [];
                return items.map(item => (Object.assign({ Type: service["a" /* DirectoryObjectType */].User }, mapPeopleSelectionToDirectoryObjectWithoutType(item))));
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
        return Object(uniqBy["a" /* default */])(objects.flat(), object => object.Id);
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
    return Object(uniqBy["a" /* default */])(selections, suggestion => suggestion.id).sort(comparePeopleSelections);
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
    return selection.type === components_people_src["b" /* PeopleSelectionType */].User
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
    return selections.reduce((count, selection) => count + (selection.type === components_people_src["b" /* PeopleSelectionType */].Group ? 1 : 0), 0);
}

// CONCATENATED MODULE: ./src/utilities/models/index.ts


// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/jwt-decode/build/jwt-decode.esm.js
var jwt_decode_esm = __webpack_require__("k2tF");

// CONCATENATED MODULE: ./src/utilities/UserRoleCheckUtils.ts
var UserRoleCheckUtils_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
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
    return UserRoleCheckUtils_awaiter(this, void 0, void 0, function* () {
        try {
            const token = yield Object(components_metaos_host_src["g" /* getAuthToken */])(env["b" /* ADDRESSBOOK_APP_RESOURCE_URL */]);
            const jwt = Object(jwt_decode_esm["a" /* default */])(token);
            if (jwt.acct !== UserRole.Guest)
                return;
            const errorPath = Object(Paths["b" /* generateURL */])(Paths["a" /* Paths */].HomePage);
            routes_history["a" /* history */].push(errorPath, { replace: true });
        }
        catch (error) {
            logger["f" /* logger */].logTraceError(logger["a" /* LogCategory */].CheckUserRole, `error when trying to check userRole, ${error}`);
        }
    });
}

// EXTERNAL MODULE: ./src/utilities/Utils.ts + 2 modules
var Utils = __webpack_require__("TktC");

// CONCATENATED MODULE: ./src/utilities/index.ts
// export * from './DateTimeUtils';





// export * from './StatisticsUtils';
// export * from './TelemetryUtils';



// EXTERNAL MODULE: ./src/common/Constants.ts
var Constants = __webpack_require__("fPKC");

// EXTERNAL MODULE: ./src/common/icons.tsx
var icons = __webpack_require__("dERd");

// CONCATENATED MODULE: ./src/common/init.ts
var init_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








const tenantId = env["o" /* initQuery */].get(env["k" /* URIParam */].TenantId);
const init_subEntityId = env["o" /* initQuery */].get(env["k" /* URIParam */].SubEntityId);
function initFluentUI() {
    Object(icons["b" /* initIcons */])();
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
    return init_awaiter(this, void 0, void 0, function* () {
        // new version parameters
        const parameterVersion = env["o" /* initQuery */].get(env["k" /* URIParam */].Version);
        if (env["q" /* isDevBrowser */]) {
            Object(components_metaos_host_src["k" /* patchTeamsFallbackData */])({
                getContext: env["e" /* DevTeamsContext */],
                getAuthToken: env["f" /* DevTeamsIdToken */],
            });
        }
        scenario.mark(logger["e" /* StepName */].AppBootStarted);
        const context = yield Object(components_metaos_host_src["h" /* getTeamsContext */])();
        scenario.mark(logger["e" /* StepName */].AppBootHostContextInitialized, src["g" /* TelemetryScenarioStatus */].Success, {
            dataBag: {
                theme: context.app.theme,
                parameterVersion,
                locale: context.app.locale,
            },
        });
        // set up common logger properties
        logger["f" /* logger */].setCommonProperty({
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
                ? src["b" /* InvokedContext */].Chat
                : ((_k = context.channel) === null || _k === void 0 ? void 0 : _k.id)
                    ? src["b" /* InvokedContext */].Team
                    : src["b" /* InvokedContext */].Global,
            EntryPoint: getEntryPoint(context),
            'Thread.Type': getThreadType(context),
        });
        if (tenantId !== ((_m = (_l = context.user) === null || _l === void 0 ? void 0 : _l.tenant) === null || _m === void 0 ? void 0 : _m.id) && ((_p = (_o = context.user) === null || _o === void 0 ? void 0 : _o.tenant) === null || _p === void 0 ? void 0 : _p.id)) {
            // fallback to context.tid
            logger["f" /* logger */].setCompliantAriaClient(context.user.tenant.id).then(() => {
                scenario.mark(logger["e" /* StepName */].AppBootLoggerInitialized, src["g" /* TelemetryScenarioStatus */].Success);
                logger["f" /* logger */].activeLogger();
            });
        }
        else {
            logger["f" /* logger */].activeLogger();
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
        if (!init_subEntityId && !parameterVersion && context.page.subPageId) {
            // for old version, we need to dispatch deeplink from context
            dispatchDeepLink(context.page.subPageId, isMobile);
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
        logger["f" /* logger */].logTraceWarning(logger["a" /* LogCategory */].AppBoot, 'hostClientType is empty');
        return;
    }
    const mobileClientType = [
        components_metaos_host_src["a" /* HostClientType */].ios,
        components_metaos_host_src["a" /* HostClientType */].android,
        'ipados',
    ];
    if (isMobile) {
        if (!mobileClientType.includes(hostClientType)) {
            // Desktop Client get mobile page
            logger["f" /* logger */].logTraceError(logger["a" /* LogCategory */].AppBoot, `${hostClientType} mismatches Mobile entry, UA: ${navigator.userAgent}`);
            logger["f" /* logger */].failScenario(logger["c" /* ScenarioName */].AppBoot);
            window.location.pathname = Constants["b" /* DESKTOP_ENTRY */];
        }
    }
    else if (mobileClientType.includes(hostClientType)) {
        // Mobile Client get desktop page
        logger["f" /* logger */].logTraceError(logger["a" /* LogCategory */].AppBoot, `${hostClientType} mismatches Desktop entry, UA: ${navigator.userAgent}`);
        logger["f" /* logger */].failScenario(logger["c" /* ScenarioName */].AppBoot);
        window.location.pathname = Constants["i" /* MOBILE_ENTRYPAGE */];
    }
}
function getEntryPoint(context) {
    var _a, _b;
    if (((_a = context.chat) === null || _a === void 0 ? void 0 : _a.id) || ((_b = context.channel) === null || _b === void 0 ? void 0 : _b.id)) {
        const hash = window.location.hash;
        if (hash.includes('workflow/commands')) {
            return src["a" /* EntryPoint */].Workflow;
        }
        const taskModuleHomePageHash = '#';
        return hash === taskModuleHomePageHash ? src["a" /* EntryPoint */].ComposeExtension : src["a" /* EntryPoint */].AdaptiveCard;
    }
    return src["a" /* EntryPoint */].PersonalApp;
}
function restoreLastHistoryPage() {
    return init_awaiter(this, void 0, void 0, function* () {
        const userId = env["o" /* initQuery */].get(env["k" /* URIParam */].UserId);
        // Avoid restoring the history from a deeplink entry.
        if (!init_subEntityId && userId) {
            restoreLastHistory(userId);
        }
    });
}
function registerBeforeUnloadEvent() {
    return init_awaiter(this, void 0, void 0, function* () {
        const userId = env["o" /* initQuery */].get(env["k" /* URIParam */].UserId);
        Object(components_metaos_host_src["l" /* registerBeforeUnloadHandler */])(readyToUnload => {
            logger["f" /* logger */].logUserBiAction(logger["c" /* ScenarioName */].AppBoot, logger["e" /* StepName */].AppExit, src["f" /* PanelType */].WorkReport, undefined, true);
            logger["f" /* logger */].flushLogs(readyToUnload);
            // Avoid storing the history from a deeplink entry.
            if (!init_subEntityId && userId) {
                saveLastHistory(userId);
            }
            return true;
        });
    });
}
function initLogger() {
    return init_awaiter(this, void 0, void 0, function* () {
        const userId = env["o" /* initQuery */].get(env["k" /* URIParam */].UserId);
        const ringId = env["o" /* initQuery */].get(env["k" /* URIParam */].RingId);
        const locale = env["o" /* initQuery */].get(env["k" /* URIParam */].Locale);
        const hostClientType = env["o" /* initQuery */].get(env["k" /* URIParam */].ClientType);
        // set up logger properties
        logger["f" /* logger */].setCommonProperty({
            Source: 'Client',
            'Bot.Id': env["n" /* WORKREPORT_BOT_ID */],
            'App.Id': env["l" /* WORKREPORT_APP_AAD_ID */],
            'App.Name': 'AddressBook',
            'AppInfo.ClientType': hostClientType,
            'AppInfo.Locale': locale,
            'AppInfo.Version': package_0["a" /* version */],
            'UserInfo.Ring': ringId,
            'UserInfo.Id': userId,
            'UserInfo.TenantId': tenantId,
        });
        if (tenantId) {
            yield logger["f" /* logger */].setCompliantAriaClient(tenantId);
            logger["f" /* logger */].markScenario(logger["c" /* ScenarioName */].AppBoot, logger["e" /* StepName */].AppBootLoggerInitialized, src["g" /* TelemetryScenarioStatus */].Success);
        }
    });
}
function initDeepLink(isMobile) {
    if (init_subEntityId) {
        // remove subEntityId from url query, to fix the refreshing issue
        const url = new URL(window.location.href);
        url.searchParams.delete(env["k" /* URIParam */].SubEntityId);
        window.history.replaceState(null, '', url.toString());
        dispatchDeepLink(init_subEntityId, isMobile);
    }
}
function init(isMobile) {
    return init_awaiter(this, void 0, void 0, function* () {
        let scenario;
        try {
            restoreLastHistoryPage();
            // detect Guest user
            const detectGuestPromise = detectGuest();
            // init from url params
            const initloggerPromise = initLogger();
            scenario = logger["f" /* logger */].createScenario(logger["c" /* ScenarioName */].AppBoot);
            logger["f" /* logger */].logUserBiView(src["d" /* PanelLaunchMethod */].AppNav, src["e" /* PanelRegion */].Main, src["f" /* PanelType */].WorkReport);
            initDeepLink(isMobile);
            // init Host with Teams Context
            const initHostPromise = initHost(scenario, isMobile);
            initFluentUI();
            registerBeforeUnloadEvent();
            removeNoScript();
            yield Promise.all([initloggerPromise, initHostPromise, detectGuestPromise]);
            scenario.mark(logger["e" /* StepName */].AppBootSuccess, src["g" /* TelemetryScenarioStatus */].Success);
            scenario.stop();
        }
        catch (error) {
            logger["f" /* logger */].activeLogger();
            logger["f" /* logger */].logTraceError(logger["a" /* LogCategory */].AppBoot, `${error}`);
            scenario === null || scenario === void 0 ? void 0 : scenario.mark(logger["e" /* StepName */].AppBootFailedWithError, src["g" /* TelemetryScenarioStatus */].Failure);
            scenario === null || scenario === void 0 ? void 0 : scenario.fail();
            Object(components_metaos_host_src["i" /* notifyAppInitializationFailure */])({ reason: components_metaos_host_src["d" /* app */].FailedReason.Other, message: logger["f" /* logger */].sessionId });
        }
        finally {
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            logger["f" /* logger */].flushLogs(() => { });
        }
    });
}
function getThreadType(context) {
    var _a, _b, _c, _d;
    if ((_a = context.chat) === null || _a === void 0 ? void 0 : _a.id) {
        if (Object(Utils["a" /* isNewChat */])(context.chat.id, (_b = context.team) === null || _b === void 0 ? void 0 : _b.groupId, (_c = context.channel) === null || _c === void 0 ? void 0 : _c.id))
            return src["h" /* ThreadType */].NewChat;
        if (context.chat.id === '48:notes')
            return src["h" /* ThreadType */].SelfChat;
        if (context.chat.id.includes('meeting'))
            return src["h" /* ThreadType */].Meeting;
        if (context.chat.id.includes('unq.gbl.spaces'))
            return src["h" /* ThreadType */].OneOnOneChat;
        return src["h" /* ThreadType */].GroupChat;
    }
    if ((_d = context.channel) === null || _d === void 0 ? void 0 : _d.id) {
        return src["h" /* ThreadType */].Channel;
    }
    return src["h" /* ThreadType */].NA;
}


/***/ }),

/***/ "5ssl":
/***/ (function(module) {

module.exports = JSON.parse("{\"en\":\"en-US\",\"en-ai\":\"en-GB\",\"en-bm\":\"en-GB\",\"en-io\":\"en-GB\",\"en-vg\":\"en-GB\",\"en-ky\":\"en-GB\",\"en-fk\":\"en-GB\",\"en-gi\":\"en-GB\",\"en-gg\":\"en-GB\",\"en-im\":\"en-GB\",\"en-je\":\"en-GB\",\"en-ms\":\"en-GB\",\"en-pn\":\"en-GB\",\"en-sh\":\"en-GB\",\"en-tc\":\"en-GB\",\"fr\":\"fr-FR\",\"fr-pm\":\"fr-CA\",\"ca\":\"ca-ES\",\"es\":\"es-ES\",\"pt\":\"pt-PT\",\"zh\":\"zh-CN\",\"zh-hans\":\"zh-CN\",\"zh-hans-hk\":\"zh-TW\",\"zh-hans-mo\":\"zh-TW\",\"zh-hant\":\"zh-TW\",\"zh-hk\":\"zh-TW\",\"zh-mo\":\"zh-TW\",\"pseudo\":\"qps-PLOC\"}");

/***/ }),

/***/ "8MrD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return URIParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return isDev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return isTest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return isInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return backendUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return resourceUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ariaToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return consentLoginUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return graphResourceUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return styleNonce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return teamsUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return AadAppId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return teamsAppId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return botId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return initQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return DevTeamsContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return DevTeamsIdToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return isDevBrowser; });
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
const environment = "prod";
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
const teamsAppId = "71bc5224-e765-47a5-9a6e-9e0ee305e1a9";
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
const styleNonce = "04sshnhr";

/**
 * BASE URL for this page and auth
 */
const resourceUrl = "https://addressbook.dg-app.com/92b01672-d7de-4a9e-9775-1289109e3222";
const backendUrl = "https://hierarchicaladdressbook20241114184550.azurewebsites.net";
const teamsUrl = "https://teams.microsoft.com";
const consentLoginUrl = "https://login.microsoftonline.com";
const graphResourceUrl = "https://graph.microsoft.com";
const initQuery = /* #__PURE__*/ new URLSearchParams(window.location.search);
/**
 * teams context for dev/mock
 *
 * @todo merge form query string
 */
const DevTeamsContext = ((_a = {} === null || {} === void 0 ? void 0 : {}.teams) === null || _a === void 0 ? void 0 : _a.context) || {};
/**
 * teams id token for dev/mock
 */
const DevTeamsIdToken = (_b = (isDev && /* # PURE */ initQuery.get('teams.idToken'))) !== null && _b !== void 0 ? _b : (_c = {} === null || {} === void 0 ? void 0 : {}.teams) === null || _c === void 0 ? void 0 : _c.idToken;
/**
 * is dev mode with browser in query
 */
const isDevBrowser = isDev && /* # PURE */ initQuery.has(URIParam.IsBrowser);


/***/ }),

/***/ "9hZ6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Paths; });
/* unused harmony export CreateRequestSource */
/* unused harmony export SourceCardType */
/* unused harmony export HomePageModalType */
/* unused harmony export OwnedListType */
/* unused harmony export HomePageSectionType */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return generateURL; });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("H8PI");
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
    Paths["ConsentPage"] = "/consentPage";
    Paths["EmptyPage"] = "/emptyPage";
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

/***/ "HVbO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ localeKeys["a" /* Strings */]; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ i18n; });

// EXTERNAL MODULE: ./src/locales/localeKeys.ts
var localeKeys = __webpack_require__("fOXQ");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-logger/src/index.ts + 4 modules
var src = __webpack_require__("yftM");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-metaos-host/src/index.ts + 9 modules
var components_metaos_host_src = __webpack_require__("0acT");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/i18next/dist/esm/i18next.js
var i18next = __webpack_require__("d5gM");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/i18next-resources-to-backend/dist/umd/i18nextResourcesToBackend.js
var i18nextResourcesToBackend = __webpack_require__("Gsa1");
var i18nextResourcesToBackend_default = /*#__PURE__*/__webpack_require__.n(i18nextResourcesToBackend);

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-i18next/dist/es/context.js
var context = __webpack_require__("snMe");

// EXTERNAL MODULE: ./src/common/env.ts
var env = __webpack_require__("8MrD");

// EXTERNAL MODULE: ./src/locales/supportedLngs.ts
var supportedLngs = __webpack_require__("xZ10");

// EXTERNAL MODULE: ./src/logger/index.ts + 1 modules
var logger = __webpack_require__("pIRP");

// EXTERNAL MODULE: ./src/localization/fallbackLngMap.json
var fallbackLngMap = __webpack_require__("5ssl");

// CONCATENATED MODULE: ./src/localization/fallbackLng.ts



const defaultLng = env["p" /* isDev */] ? 'dev' : 'en-US';
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
    if (env["p" /* isDev */] || !fallbacks.length) {
        fallbacks.push(defaultLng);
    }
    return fallbacks;
}
function getExistingSupportedLanguage(language) {
    // check if the language has language file.
    const existingLng = supportedLngs["a" /* supportedLngs */].find(lng => lng.toLowerCase() === language);
    if (existingLng) {
        return existingLng;
    }
    // check if the language has supported language files with same prefix, return if only one language is supported.
    const samePrefixLngs = supportedLngs["a" /* supportedLngs */].filter(lng => lng.toLowerCase().startsWith(`${language}-`));
    if ((samePrefixLngs === null || samePrefixLngs === void 0 ? void 0 : samePrefixLngs.length) === 1) {
        return samePrefixLngs[0];
    }
    // https://microsoft.sharepoint.com/sites/globalreadiness/SitePages/Language-fallback.aspx
    return fallbackLngMap[language];
}

// CONCATENATED MODULE: ./src/localization/i18n.ts









if (env["p" /* isDev */]) {
    // add dev for languages in DEV env
    supportedLngs["a" /* supportedLngs */].unshift('dev');
}
i18next["a" /* default */].use(context["e" /* initReactI18next */]) // passes i18n down to react-i18next
    .use(i18nextResourcesToBackend_default()((language, namespace, callback) => {
    // Don't populate i18n resources when testing, to avoid translation shift from key to translated string.
    if (env["s" /* isTest */])
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
    debug: env["p" /* isDev */],
    ns: 'strings',
    // localStorage key is the same with the'i18next-browser-languagedetector';
    lng: env["o" /* initQuery */].get(env["k" /* URIParam */].Locale) || localStorage.getItem('i18nextLng') || defaultLng,
    // lng: 'en', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    interpolation: {
        escapeValue: false, // react already safes from xss
    },
    supportedLngs: supportedLngs["a" /* supportedLngs */],
    fallbackLng: fallbackLng,
    load: 'currentOnly',
}, () => {
    // i18n.services.formatter?.add('friendlydate', friendlyDateFormatter);
    // i18n.services.formatter?.add('friendlyrelativetime', friendlyRelativeTimeFormatter);
    // i18n.services.formatter?.add('relativeminutetime', relativeMinuteTimeFormatter);
    // i18n.services.formatter?.add('weekday', weekDayFormatter);
    // i18n.services.formatter?.add('dayofmonth', dayFormatter);
    // i18n.services.formatter?.add('datetimerange', dateTimeRangeFormatter);
});
// update html attribute on languageChanged
i18next["a" /* default */].on('languageChanged', (lng) => {
    document.documentElement.setAttribute('lang', lng);
    document.documentElement.setAttribute('dir', i18next["a" /* default */].dir());
});
i18next["a" /* default */].on('initialized', () => {
    Object(components_metaos_host_src["j" /* notifyAppInitializationSuccess */])().then(() => {
        logger["f" /* logger */].markScenario(logger["c" /* ScenarioName */].AppBoot, logger["e" /* StepName */].TeamsInitializationSuccess, src["g" /* TelemetryScenarioStatus */].Success);
    });
});
/* harmony default export */ var i18n = (i18next["a" /* default */]);

// CONCATENATED MODULE: ./src/localization/index.ts




/***/ }),

/***/ "TJux":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return history; });
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("SGJe");

const history = Object(history__WEBPACK_IMPORTED_MODULE_0__[/* createHashHistory */ "c"])();


/***/ }),

/***/ "TktC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ tryParseAfdRefFromHeaders; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ isNewChat; });

// UNUSED EXPORTS: handleSystemNotificationHeader, InputTaskType, submitInputTask

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-metaos-host/src/index.ts + 9 modules
var src = __webpack_require__("0acT");

// EXTERNAL MODULE: ./src/reactiveVariables/CommonVars.ts
var CommonVars = __webpack_require__("VTGp");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-reactive-var/dist/index.es.js
var index_es = __webpack_require__("2spY");

// CONCATENATED MODULE: ./src/reactiveVariables/TemplateManagementVars.ts
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */

const changeStatusDialogDataVar = Object(index_es["a" /* makeVar */])({ isOpen: false });
const copyTemplateRequestDialogDataVar = Object(index_es["a" /* makeVar */])({ isOpen: false });
const copyTemplateResponseDialogDataVar = Object(index_es["a" /* makeVar */])({ isOpen: false });
const createTemplateSuccessDialogDataVar = Object(index_es["a" /* makeVar */])({ isOpen: false });
const reminderVar = Object(index_es["a" /* makeVar */])({ isOpen: false });

// CONCATENATED MODULE: ./src/reactiveVariables/index.ts



// CONCATENATED MODULE: ./src/utilities/Utils.ts
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
        Object(CommonVars["b" /* systemNotificationCodesVar */])(systemNotificationCodes);
    }
};
var InputTaskType;
(function (InputTaskType) {
    InputTaskType["CreateSelfOwnedReportDefinitionInput"] = "CreateSelfOwnedReportDefinitionInput";
    InputTaskType["SubmitReportInputOfUpdatesRuntime"] = "SubmitReportInputOfUpdatesRuntime";
    InputTaskType["SubmitOOBEReportInputOfUpdatesRuntime"] = "SubmitOOBEReportInputOfUpdatesRuntime";
})(InputTaskType || (InputTaskType = {}));
function submitInputTask(inputType, input) {
    return Object(src["n" /* submitTask */])({
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ ErrorBoundary_ErrorBoundary; });

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-metaos-host/src/index.ts + 9 modules
var src = __webpack_require__("0acT");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react/index.js
var react = __webpack_require__("ERkP");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./src/common/env.ts
var env = __webpack_require__("8MrD");

// EXTERNAL MODULE: ./src/logger/index.ts + 1 modules
var logger = __webpack_require__("pIRP");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/index.ts + 64 modules
var components_shared_src = __webpack_require__("+INc");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-i18next/dist/es/useTranslation.js
var useTranslation = __webpack_require__("Tr4L");

// EXTERNAL MODULE: ./src/localization/index.ts + 2 modules
var localization = __webpack_require__("HVbO");

// EXTERNAL MODULE: ./src/service/index.ts + 2 modules
var service = __webpack_require__("YCKj");

// CONCATENATED MODULE: ./src/views/containers/ErrorBoundary/ErrorBoundaryContent.container.tsx






// eslint-disable-next-line @typescript-eslint/ban-types
const ErrorBoundaryContent = ({ children }) => {
    const { t } = Object(useTranslation["a" /* useTranslation */])(undefined, { useSuspense: false });
    return (react_default.a.createElement(components_shared_src["d" /* EmptyState */], { title: t(localization["a" /* Strings */].errorTitle, { defaultValue: '' }), message: `Session Id: ${logger["f" /* logger */] === null || logger["f" /* logger */] === void 0 ? void 0 : logger["f" /* logger */].sessionId}`, height: '100vh', actionText: t(localization["a" /* Strings */].errorAction, { defaultValue: 'Refresh' }), onAction: () => logger["f" /* logger */].flushLogs(() => {
            // remove page state back to home page
            const location = window.location;
            // taskModule Pages
            if (!location.pathname.includes('/taskModule')) {
                location.hash = '';
            }
            Object(service["e" /* clearQueryClientPersistor */])();
            location.reload();
        }), role: 'alert' }, children));
};

// CONCATENATED MODULE: ./src/views/containers/ErrorBoundary/ErrorBoundary.tsx
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */





class ErrorBoundary_ErrorBoundary extends react_default.a.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    componentDidCatch(error, errorInfo) {
        const message = `App failed to boot: ${error.message}, stack:${error.stack}, componentStack: ${errorInfo.componentStack}`;
        logger["f" /* logger */].logTraceError(logger["a" /* LogCategory */].AppBoot, message);
        logger["f" /* logger */].markScenario(logger["c" /* ScenarioName */].AppBoot, logger["e" /* StepName */].AppBootFailedWithErrorBoundary);
        logger["f" /* logger */].failScenario(logger["c" /* ScenarioName */].AppBoot);
        this.setState(state => (Object.assign(Object.assign({}, state), { error, errorInfo })));
        if (!env["p" /* isDev */]) {
            Object(src["i" /* notifyAppInitializationFailure */])({ reason: src["d" /* app */].FailedReason.Other, message: logger["f" /* logger */].sessionId });
        }
    }
    render() {
        var _a, _b;
        if (this.state.hasError) {
            return (react_default.a.createElement(ErrorBoundaryContent, null, this.state.error && (react_default.a.createElement("div", { role: 'log' },
                react_default.a.createElement("details", null,
                    react_default.a.createElement("summary", null,
                        "Call Stack (",
                        this.state.error.message,
                        ")"),
                    react_default.a.createElement("pre", null, (_a = this.state.error) === null || _a === void 0 ? void 0 : _a.stack)),
                react_default.a.createElement("hr", null),
                react_default.a.createElement("details", { open: true },
                    react_default.a.createElement("summary", null, "Component Stack"),
                    react_default.a.createElement("pre", null, (_b = this.state.errorInfo) === null || _b === void 0 ? void 0 : _b.componentStack))))));
        }
        return this.props.children;
    }
}

// CONCATENATED MODULE: ./src/views/containers/ErrorBoundary/index.ts
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */



/***/ }),

/***/ "VTGp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return modalShowingVar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return systemNotificationCodesVar; });
/* unused harmony export requestFeedbackShowingVar */
/* harmony import */ var react_reactive_var__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2spY");
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

/***/ "ajHv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8MrD");

// import this file before all ts files to inject style nonce
window.CSPSettings = {
    nonce: _env__WEBPACK_IMPORTED_MODULE_0__[/* STYLE_NONCE */ "i"],
};
window.FabricConfig = {
    mergeStyles: {
        cspSettings: { nonce: _env__WEBPACK_IMPORTED_MODULE_0__[/* STYLE_NONCE */ "i"] },
    },
};


/***/ }),

/***/ "dERd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return initIcons; });
/* unused harmony export PRESENCE_ICONS_BACKGROUND_COLOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PRESENCE_ICONS; });
/* harmony import */ var _addressbook_components_fluentui_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Y918");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ogYq");
/* harmony import */ var _fluentui_react_file_type_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Y8RE");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("fPKC");




function initIcons() {
    Object(_addressbook_components_fluentui_icons__WEBPACK_IMPORTED_MODULE_0__[/* initFluentuiIcons */ "c"])();
    Object(_fluentui_react_file_type_icons__WEBPACK_IMPORTED_MODULE_2__[/* initializeFileTypeIcons */ "a"])();
    Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* registerIcons */ "I"])({
        icons: {
            [_Constants__WEBPACK_IMPORTED_MODULE_3__[/* APP_ICON_NAME */ "a"]]: _addressbook_components_fluentui_icons__WEBPACK_IMPORTED_MODULE_0__[/* icons */ "b"].Calendar,
        },
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MAX_DEFINITIONS */
/* unused harmony export MAX_DEFINITION_TITLE_LENGTH */
/* unused harmony export MAX_DEFINITION_DESCRIPTION_LENGTH */
/* unused harmony export MAX_DEFINITION_QUESTIONS */
/* unused harmony export MAX_DEFINITION_QUESTION_TITLE_LENGTH */
/* unused harmony export MAX_DEFINITION_QUESTION_SUBTITLE_LENGTH */
/* unused harmony export INITIAL_DEFINITION_QUESTION_CHOICES */
/* unused harmony export MIN_DEFINITION_QUESTION_CHOICES */
/* unused harmony export MAX_DEFINITION_QUESTION_CHOICES */
/* unused harmony export MAX_DEFINITION_QUESTION_CHOICE_LENGTH */
/* unused harmony export MAX_DEFINITION_GROUP_SUBMITTERS */
/* unused harmony export MAX_DEFINITION_USER_SUBMITTERS */
/* unused harmony export MAX_DEFINITION_USER_OWNERS */
/* unused harmony export MAX_DEFINITION_USER_COLLABORATORS */
/* unused harmony export MAX_REPORT_TITLE_LENGTH */
/* unused harmony export MAX_REPORT_ANSWER_CONTENT_LENGTH */
/* unused harmony export MAX_REPORT_ANSWER_CONTENT_LENGTH_WITH_BUFFER */
/* unused harmony export MAX_REPORT_USER_RECEIVERS */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_ICON_NAME; });
/* unused harmony export APP_ICON_COLOR */
/* unused harmony export DEFAULT_TEMPLATE_ICON_NAME */
/* unused harmony export EMOJI_BACKGROUND_COLOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return HEADER_CLIENT_REQUEST_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return HEADER_ROUTE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return HEADER_RESPONSE_CORRELATION_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DESKTOP_ENTRY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return MOBILE_ENTRYPAGE; });
/* unused harmony export ATTACHMENTS_FOLDER_NAME */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GRAPH_BASE_URL; });
/* unused harmony export IOS_CAMERA_PHOTO_NAME */
/* unused harmony export SHAREPOINT_PICKER_APP */
/* unused harmony export SHAREPOINT_PICKER_SCENARIO */
/* unused harmony export SHAREPOINT_IFRAME_PATH */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return SHAREPOINT_TEMPAUTH_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return SHAREPOINT_DOMAIN_REGEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LOADING_TIMEOUT_IN_SECONDS; });
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
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8MrD");
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
const GRAPH_BASE_URL = _env__WEBPACK_IMPORTED_MODULE_0__[/* ENVIRONMENT */ "g"] === 'gcch'
    ? 'https://graph.microsoft.us'
    : _env__WEBPACK_IMPORTED_MODULE_0__[/* ENVIRONMENT */ "g"] === 'dod'
        ? 'https://dod-graph.microsoft.us'
        : _env__WEBPACK_IMPORTED_MODULE_0__[/* ENVIRONMENT */ "g"] === 'gallatin'
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
const SHAREPOINT_DOMAIN_REGEX = _env__WEBPACK_IMPORTED_MODULE_0__[/* ENVIRONMENT */ "g"] === 'gcch'
    ? /sharepoint\.us/
    : _env__WEBPACK_IMPORTED_MODULE_0__[/* ENVIRONMENT */ "g"] === 'dod'
        ? /sharepoint-mil\.us/
        : _env__WEBPACK_IMPORTED_MODULE_0__[/* ENVIRONMENT */ "g"] === 'gallatin'
            ? /sharepoint\.cn/
            : /sharepoint(-df)?\.com/; // sharepoint.com or sharepoint-df.com for dog food
/**
 * Loading page timeout error threshold
 */
const LOADING_TIMEOUT_IN_SECONDS = 30;
/**
 * The base url for ECS host
 */
const ECS_BASIC_URL = _env__WEBPACK_IMPORTED_MODULE_0__[/* ENVIRONMENT */ "g"] === 'gcch'
    ? 'https://config.ecs.gov.teams.microsoft.us/config/v1/MicrosoftTeamsApps/1.0.0.0'
    : _env__WEBPACK_IMPORTED_MODULE_0__[/* ENVIRONMENT */ "g"] === 'dod'
        ? 'https://config.ecs.dod.teams.microsoft.us/config/v1/MicrosoftTeamsApps/1.0.0.0'
        : _env__WEBPACK_IMPORTED_MODULE_0__[/* ENVIRONMENT */ "g"] === 'gallatin'
            ? 'https://mooncake.config.teams.microsoft.com/config/v1/MicrosoftTeamsApps/1.0.0.0'
            : 'https://config.teams.microsoft.com/config/v1/MicrosoftTeamsApps/1.0.0.0';
/**
 * The base url for OCPS
 */
const OCPS_BASIC_URL = _env__WEBPACK_IMPORTED_MODULE_0__[/* ENVIRONMENT */ "g"] === 'gcch' || _env__WEBPACK_IMPORTED_MODULE_0__[/* ENVIRONMENT */ "g"] === 'dod' || _env__WEBPACK_IMPORTED_MODULE_0__[/* ENVIRONMENT */ "g"] === 'gallatin'
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ graphServiceClient; });

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/services-core/src/index.ts + 17 modules
var src = __webpack_require__("jTXW");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/services-graph/src/index.ts + 11 modules
var services_graph_src = __webpack_require__("Qt34");

// EXTERNAL MODULE: ./src/common/Constants.ts
var Constants = __webpack_require__("fPKC");

// EXTERNAL MODULE: ./src/service/gen/index.ts + 1 modules
var gen = __webpack_require__("kUcb");

// EXTERNAL MODULE: ./src/service/tokenCache.ts
var tokenCache = __webpack_require__("FMwJ");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/utilities-core/src/index.ts + 15 modules
var utilities_core_src = __webpack_require__("1hmm");

// EXTERNAL MODULE: ./src/logger/index.ts + 1 modules
var logger = __webpack_require__("pIRP");

// CONCATENATED MODULE: ./src/service/external/utils.ts




/**
 * Creates a service interceptor that pools requests in a keyed promise pool.
 *
 * @returns An interceptor.
 */
function createKeyedPoolingInterceptor() {
    return Object(src["k" /* createPoolingInterceptor */])({ pool });
}
const pool = new src["a" /* KeyedPromisePool */]();
/**
 * Creates a service interceptor that caches responses in a memory cache.
 *
 * @returns An interceptor.
 */
function createCachingInterceptorInMemory() {
    return Object(src["g" /* createCachingInterceptor */])({ cache, test: isGetAndOkWithExceptions });
}
const cache = new src["b" /* MemoryServiceCache */]();
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
    return Object(src["l" /* createRetryInterceptor */])({ backoff });
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
    return Object(src["h" /* createHeadersInterceptor */])({ [CLIENT_REQUEST_ID]: utilities_core_src["e" /* uuid */] });
}
/**
 * Creates a service interceptor that logs requests and responses to logger.
 *
 * @returns An interceptor.
 * @see https://learn.microsoft.com/graph/best-practices-concept#reliability-and-support
 */
function createLoggingInterceptorByLogger() {
    return Object(src["i" /* createLoggingInterceptor */])({ logRequest, logResponse, logError });
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
    logger["f" /* logger */].logHttp(info);
}
function logError(error, context) {
    if (!(error instanceof Error))
        return;
    logger["f" /* logger */].logTraceError(logger["a" /* LogCategory */].NetworkError, `NetworkError ${maskUrl(context.url, maskUrlOptionsForUrl)} ${error.message}`);
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
        const match = masked.hostname.match(Constants["j" /* SHAREPOINT_DOMAIN_REGEX */]);
        if (match) {
            masked.hostname = match[0];
            masked.pathname = '';
            masked.search = '';
        }
    }
    if (options.token && masked.searchParams.has(Constants["k" /* SHAREPOINT_TEMPAUTH_KEY */])) {
        masked.searchParams.set(Constants["k" /* SHAREPOINT_TEMPAUTH_KEY */], '<token>');
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

// CONCATENATED MODULE: ./src/service/external/graph.ts
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
    return new services_graph_src["a" /* GraphServiceClient */]({
        baseUrl: Constants["d" /* GRAPH_BASE_URL */],
        interceptors: [
            // Interceptors to remove redundant requests.
            createKeyedPoolingInterceptor(),
            createCachingInterceptorInMemory(),
            // Interceptors to improve resilience.
            createRetryInterceptorWithBackoff(),
            Object(src["m" /* createThrottlingInterceptor */])(),
            Object(src["j" /* createOnlineInterceptor */])(),
            // Interceptors to add necessary headers.
            createAuthorizationInterceptorForGraph(),
            createHeadersInterceptorWithIds(),
            // Interceptor to log raw requests and responses.
            createLoggingInterceptorByLogger(),
        ],
    });
}
/**
 * Create an authorization interceptor for Graph API requests.
 *
 * @returns An interceptor.
 */
function createAuthorizationInterceptorForGraph() {
    return Object(src["f" /* createAuthorizationInterceptor */])((request) => __awaiter(this, void 0, void 0, function* () { return request.url.startsWith(Constants["d" /* GRAPH_BASE_URL */]) ? Object(tokenCache["b" /* getResourceToken */])(gen["ResourceType"].Graph, Constants["d" /* GRAPH_BASE_URL */]) : ''; }));
}

// CONCATENATED MODULE: ./src/service/external/index.ts



/***/ }),

/***/ "kiQV":
/***/ (function(module) {

module.exports = JSON.parse("{\"a\":\"2.0.0\"}");

/***/ }),

/***/ "pIRP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "f", function() { return /* binding */ logger; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ ScenarioName; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ ScenarioType; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ ModuleName; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ StepName; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ LogCategory; });

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-logger/src/index.ts + 4 modules
var src = __webpack_require__("yftM");

// EXTERNAL MODULE: ./src/common/env.ts
var env = __webpack_require__("8MrD");

// CONCATENATED MODULE: ./src/logger/types.ts
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

// CONCATENATED MODULE: ./src/logger/index.ts


/**
 * global logger for the APP
 */
const logger = /* #__PURE__ */ new src["c" /* OneDSLogger */]({
    ariaToken: env["c" /* ARIA_TOKEN */],
    isDevelopment: env["p" /* isDev */] || env["r" /* isInt */],
    delay: 10000,
    logTraceTypes: env["p" /* isDev */] || env["r" /* isInt */]
        ? ['Debug', 'Info', 'Warning', 'Error', 'Exception', 'HTTPException']
        : ['Warning', 'Error', 'Exception', 'HTTPException'],
});



/***/ }),

/***/ "rMck":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin


/***/ })

}]);