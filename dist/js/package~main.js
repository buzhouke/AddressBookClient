(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["package~main"],{

/***/ "/Qia":
/*!***********************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-fluentui-teams-theme/src/teams/styles/dialog.styles.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: getDialogContentStyles, getDialogFooterStyles */
/*! exports used: getDialogContentStyles, getDialogFooterStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDialogContentStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getDialogFooterStyles; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "ogYq");
/* harmony import */ var _teams_sizes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../teams-sizes */ "ZOo+");
/* harmony import */ var _teams_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../teams-theme */ "tPyQ");
/* istanbul ignore file */



const getDialogContentStyles = (themeName, theme) => {
    const styles = {
        title: {
            fontSize: _teams_sizes__WEBPACK_IMPORTED_MODULE_1__[/* FontSizes */ "a"].size18,
            fontWeight: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "e"].bold,
            padding: '27px 54px 8px 32px',
            lineHeight: _teams_sizes__WEBPACK_IMPORTED_MODULE_1__[/* FontSizes */ "a"].size24,
            color: theme.palette.black,
        },
        topButton: {
            padding: '23px 22px 4px 0',
            fontSize: _teams_sizes__WEBPACK_IMPORTED_MODULE_1__[/* FontSizes */ "a"].size14,
            selectors: {
                '.ms-Dialog-button': {
                    color: theme.palette.neutralDark,
                },
                '.ms-Dialog-button:hover': {
                    color: theme.palette.themePrimary,
                    backgroundColor: 'transparent',
                    selectors: {
                        i: {
                            fontWeight: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "e"].bold,
                        },
                    },
                },
                '.ms-Dialog-button:active': {
                    color: theme.palette.themePrimary,
                },
            },
        },
        inner: {
            padding: '1px 32px 32px 32px',
            color: theme.palette.neutralDark,
            selectors: {
                '.ms-Label': {
                    color: theme.palette.neutralDark,
                },
            },
        },
        innerContent: {
            paddingTop: '4px',
            marginBottom: '20px',
            selectors: {
                ':last-child': {
                    marginBottom: 0,
                },
            },
        },
        subText: {
            color: theme.palette.neutralDark,
            fontWeight: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "e"].regular,
            fontSize: _teams_sizes__WEBPACK_IMPORTED_MODULE_1__[/* FontSizes */ "a"].size14,
            lineHeight: _teams_sizes__WEBPACK_IMPORTED_MODULE_1__[/* FontSizes */ "a"].size20,
            paddingTop: 0,
        },
    };
    // Contrast theme overrides
    if (Object(_teams_theme__WEBPACK_IMPORTED_MODULE_2__[/* isContrastTheme */ "f"])(themeName)) {
        styles.topButton.selectors['.ms-Dialog-button:hover'].color =
            theme.palette.themeDark;
        styles.topButton.selectors['.ms-Dialog-button:active'].color =
            theme.palette.themeDark;
        styles.inner.color = theme.palette.black;
        styles.inner.selectors['.ms-Label'].color = theme.palette.black;
    }
    return styles;
};
const getDialogFooterStyles = (_themeName, _theme) => {
    const styles = {
        actions: {
            margin: '16px 0 0',
        },
    };
    return styles;
};


/***/ }),

/***/ "2+FI":
/*!*************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-fluentui-teams-theme/src/teams/styles/checkbox.styles.ts ***!
  \*************************************************************************************************************************************************/
/*! exports provided: getCheckboxStyles */
/*! exports used: getCheckboxStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCheckboxStyles; });
/* harmony import */ var _teams_sizes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../teams-sizes */ "ZOo+");
/* harmony import */ var _teams_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../teams-theme */ "tPyQ");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "jki+");
/* istanbul ignore file */



function getCheckboxStyles(themeName, _theme) {
    return (props) => {
        const { disabled, checked, theme } = props;
        const { palette } = theme;
        let CHECKBOX_BORDER_COLOR = palette.neutralTertiary;
        let CHECKBOX_BORDER_HOVER_COLOR = palette.black;
        let CHECKBOX_MARK_HOVER_COLOR = palette.black;
        const CHECKBOX_LABEL_COLOR = palette.black;
        let CHECKBOX_DISABLED_LABEL_COLOR = palette.neutralTertiary;
        const CHECKBOX_COLOR = palette.themePrimary;
        const CHECKBOX_CHECKED_HOVER_COLOR = palette.black;
        const CHECKMARK_COLOR = palette.white;
        if (Object(_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(themeName)) {
            CHECKBOX_BORDER_COLOR = 'green';
            CHECKBOX_DISABLED_LABEL_COLOR = 'green';
            CHECKBOX_BORDER_HOVER_COLOR = palette.accent;
            CHECKBOX_MARK_HOVER_COLOR = palette.accent;
        }
        const styles = {
            input: {
                // Work around for fluentui button focus outline not showing in iOS Safari.
                ':focus-visible + label, .ms-Fabric--isFocusVisible &:focus + label': {
                    '::before': {
                        content: '""',
                        position: 'absolute',
                        inset: 0,
                        outline: `1px solid ${theme.palette.black}`,
                        borderRadius: _constants__WEBPACK_IMPORTED_MODULE_2__[/* teamsBorderRadius */ "a"],
                    },
                },
            },
            checkbox: [
                {
                    borderRadius: 4,
                    height: 17,
                    width: 17,
                },
                !disabled &&
                    !checked && {
                    borderColor: palette.black,
                },
                disabled && {
                    borderColor: CHECKBOX_BORDER_COLOR,
                },
                checked &&
                    disabled && {
                    background: CHECKBOX_BORDER_COLOR,
                    borderColor: CHECKBOX_BORDER_COLOR,
                },
                !disabled &&
                    checked && {
                    background: palette.themePrimary,
                },
            ],
            checkmark: [
                {
                    fontWeight: 'bold',
                    fontSize: _teams_sizes__WEBPACK_IMPORTED_MODULE_0__[/* FontSizes */ "a"].size12,
                    border: 'none',
                    background: 'none',
                    color: CHECKMARK_COLOR,
                },
            ],
            root: [
                {
                    color: palette.neutralDark,
                    selectors: {
                        a: {
                            color: 'inherit',
                            selectors: {
                                ':link': {
                                    color: 'inherit',
                                },
                                ':visited': {
                                    color: 'inherit',
                                },
                                ':hover': {
                                    color: 'inherit',
                                },
                            },
                        },
                    },
                },
                !disabled &&
                    checked && {
                    color: palette.black,
                    selectors: {
                        '.ms-Checkbox-checkbox': {
                            background: CHECKBOX_COLOR,
                            borderColor: CHECKBOX_COLOR,
                        },
                        '.ms-Checkbox-text': {
                            color: CHECKBOX_CHECKED_HOVER_COLOR,
                        },
                        ':hover': {
                            color: palette.black,
                            selectors: {
                                '.ms-Checkbox-checkbox': {
                                    background: CHECKBOX_COLOR,
                                    borderColor: CHECKBOX_COLOR,
                                },
                                '.ms-Checkbox-text': {
                                    color: CHECKBOX_CHECKED_HOVER_COLOR,
                                },
                            },
                        },
                    },
                },
                !disabled &&
                    !checked && {
                    color: palette.neutralDark,
                    selectors: {
                        ':hover': {
                            selectors: {
                                '.ms-Checkbox-text': {
                                    color: palette.neutralDark,
                                },
                                '.ms-Checkbox-checkbox': {
                                    border: `1px solid ${CHECKBOX_BORDER_HOVER_COLOR}`,
                                },
                                '.ms-Checkbox-checkmark': {
                                    color: CHECKBOX_MARK_HOVER_COLOR,
                                },
                            },
                        },
                    },
                },
            ],
            label: [
                {
                    alignItems: 'center',
                },
            ],
            text: [
                disabled && {
                    color: CHECKBOX_DISABLED_LABEL_COLOR,
                },
                !disabled &&
                    checked && {
                    color: CHECKBOX_LABEL_COLOR,
                },
                !disabled &&
                    !checked && {
                    color: palette.neutralDark,
                },
            ],
        };
        return styles;
    };
}


/***/ }),

/***/ "40wS":
/*!**********************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-fluentui-teams-theme/src/teams/styles/label.styles.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: LabelStyles */
/*! exports used: LabelStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabelStyles; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "ogYq");
/* istanbul ignore file */

const LabelStyles = (props) => {
    const { theme, disabled } = props;
    const { palette } = theme;
    return {
        root: [
            {
                fontWeight: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "e"].semibold,
                color: palette.black,
                ':after': { color: theme.palette.redDark },
            },
            disabled && {
                opacity: '.65',
            },
        ],
    };
};


/***/ }),

/***/ "5TwM":
/*!**********************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-fluentui-teams-theme/src/teams/styles/modal.styles.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: getModalStyles */
/*! exports used: getModalStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getModalStyles; });
/* harmony import */ var _teams_shadow_levels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../teams-shadow-levels */ "D3bU");
/* harmony import */ var _teams_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../teams-colors */ "McEG");
/* harmony import */ var _teams_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../teams-theme */ "tPyQ");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "jki+");
/* istanbul ignore file */




function getModalStyles(themeName, theme, isMobile) {
    const MODAL_MIN_WIDTH = isMobile ? undefined : '400px';
    const MODAL_MIN_HEIGHT = '116px';
    const BORDER_WIDTH = '1px';
    const styles = {
        root: {
            backgroundColor: 'none',
            selectors: {
                '.ms-Overlay--dark': {
                    backgroundColor: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* CoreColors */ "c"].overlayBackground,
                },
            },
        },
        main: {
            backgroundColor: theme.palette.white,
            borderRadius: _constants__WEBPACK_IMPORTED_MODULE_3__[/* teamsBorderRadius */ "a"],
            color: theme.palette.black,
            borderWidth: BORDER_WIDTH,
            borderStyle: 'solid',
            borderColor: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* CoreColors */ "c"].appBlackAlpha10,
            boxShadow: _teams_shadow_levels__WEBPACK_IMPORTED_MODULE_0__[/* ShadowLevels */ "a"].shadowLevel4,
            minWidth: `${MODAL_MIN_WIDTH} !important`,
            minHeight: `${MODAL_MIN_HEIGHT} !important`,
        },
    };
    const iRawStyle = styles.root.selectors['.ms-Overlay--dark'];
    // Dark theme overrides
    if (Object(_teams_theme__WEBPACK_IMPORTED_MODULE_2__[/* isDarkTheme */ "g"])(themeName)) {
        if (iRawStyle) {
            iRawStyle.backgroundColor = _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkColors */ "d"].overlayBackground;
        }
        styles.main.backgroundColor = theme.palette.neutralLight;
        styles.main.borderColor = theme.palette.white;
    }
    // Contrast theme overrides
    if (Object(_teams_theme__WEBPACK_IMPORTED_MODULE_2__[/* isContrastTheme */ "f"])(themeName)) {
        if (iRawStyle) {
            iRawStyle.backgroundColor = _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* ContrastColors */ "b"].overlayBackground;
        }
        styles.main.borderColor = theme.palette.black;
    }
    return styles;
}


/***/ }),

/***/ "6N/s":
/*!************************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-fluentui-teams-theme/src/teams/styles/choice-group-option.styles.ts ***!
  \************************************************************************************************************************************************************/
/*! exports provided: getChoiceGroupOptionStyles */
/*! exports used: getChoiceGroupOptionStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getChoiceGroupOptionStyles; });
/* harmony import */ var _teams_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../teams-colors */ "McEG");
/* harmony import */ var _teams_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../teams-theme */ "tPyQ");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "jki+");
/* istanbul ignore file */



function getChoiceGroupOptionStyles(themeName, _theme) {
    return (props) => {
        const { disabled, checked, theme } = props;
        const { palette } = theme;
        let CHOICEGROUPOPTION_BORDER_COLOR = palette.neutralTertiary;
        let CHECKBOX_LABEL_COLOR = palette.neutralTertiary;
        if (Object(_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(themeName)) {
            CHOICEGROUPOPTION_BORDER_COLOR = _teams_colors__WEBPACK_IMPORTED_MODULE_0__[/* ContrastColors */ "b"].appGreenContrast;
            CHECKBOX_LABEL_COLOR = _teams_colors__WEBPACK_IMPORTED_MODULE_0__[/* ContrastColors */ "b"].appGreenContrast;
        }
        const styles = {
            choiceFieldWrapper: [
                {
                    background: 'transparent',
                    // Work around for fluentui button focus outline not showing in iOS Safari.
                    position: 'relative',
                    ':has(.ms-ChoiceField-input:focus-visible), .ms-Fabric--isFocusVisible &:has(.ms-ChoiceField-input:focus)': {
                        '::after': {
                            border: 'none',
                            content: '""',
                            position: 'absolute',
                            inset: 0,
                            outline: `1px solid ${theme.palette.black}`,
                            borderRadius: _constants__WEBPACK_IMPORTED_MODULE_2__[/* teamsBorderRadius */ "a"],
                        },
                    },
                },
                disabled && {
                    color: CHECKBOX_LABEL_COLOR,
                },
                !disabled &&
                    checked && {
                    color: palette.black,
                },
                !disabled &&
                    !checked && {
                    color: palette.neutralDark,
                },
            ],
            field: [
                {
                    selectors: {
                        '.ms-ChoiceField-field': {
                            color: 'inherit',
                        },
                        '.ms-ChoiceFieldLabel': {
                            color: 'inherit',
                        },
                        ':hover': [
                            !disabled && {
                                selectors: {
                                    ':before': {
                                        borderColor: palette.black,
                                    },
                                },
                            },
                        ],
                    },
                },
                !disabled &&
                    !checked && {
                    selectors: {
                        ':before': {
                            borderColor: palette.neutralDark,
                        },
                    },
                },
                !disabled &&
                    checked && {
                    color: palette.black,
                    selectors: {
                        ':before': {
                            borderColor: palette.themePrimary,
                        },
                        ':after': {
                            borderColor: palette.themePrimary,
                        },
                    },
                },
                disabled &&
                    !checked && {
                    selectors: {
                        ':before': {
                            borderColor: CHOICEGROUPOPTION_BORDER_COLOR,
                            background: 'transparent',
                        },
                        ':after': {
                            borderColor: CHOICEGROUPOPTION_BORDER_COLOR,
                        },
                    },
                },
                disabled &&
                    checked && {
                    selectors: {
                        ':before': {
                            borderColor: CHOICEGROUPOPTION_BORDER_COLOR,
                            background: 'transparent',
                        },
                        ':after': {
                            borderColor: CHOICEGROUPOPTION_BORDER_COLOR,
                        },
                    },
                },
            ],
        };
        return styles;
    };
}


/***/ }),

/***/ "6Oyu":
/*!****************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-fluentui-teams-theme/src/teams/styles/icon-button.styles.ts ***!
  \****************************************************************************************************************************************************/
/*! exports provided: getIconButtonStyles */
/*! exports used: getIconButtonStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getIconButtonStyles; });
/* harmony import */ var _teams_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../teams-colors */ "McEG");
/* harmony import */ var _teams_shadow_levels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../teams-shadow-levels */ "D3bU");
/* harmony import */ var _teams_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../teams-theme */ "tPyQ");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "jki+");
/* istanbul ignore file */




function getIconButtonStyles(themeName, theme) {
    const styles = {
        root: {
            background: 'none',
            color: theme.palette.black,
            // Inherits the icon color from root
            '.ms-Icon': {
                color: 'unset',
            },
            // Work around for fluentui button focus outline not showing in iOS Safari.
            ':focus-visible, .ms-Fabric--isFocusVisible &:focus': {
                '::after': {
                    content: '""',
                    position: 'absolute',
                    inset: '2px',
                    outline: `1px solid ${theme.palette.black}`,
                    borderRadius: _constants__WEBPACK_IMPORTED_MODULE_3__[/* teamsBorderRadius */ "a"],
                },
            },
        },
        rootHovered: {
            backgroundColor: 'none',
            color: theme.palette.accent,
            boxShadow: 'none',
        },
        rootExpanded: {
            boxShadow: 'none',
        },
        rootPressed: {
            background: 'none',
        },
        rootDisabled: {
            color: Object(_teams_theme__WEBPACK_IMPORTED_MODULE_2__[/* isContrastTheme */ "f"])(themeName) ? _teams_colors__WEBPACK_IMPORTED_MODULE_0__[/* ContrastColors */ "b"].appGreenContrast : undefined,
        },
    };
    // Contrast theme overrides
    if (Object(_teams_theme__WEBPACK_IMPORTED_MODULE_2__[/* isContrastTheme */ "f"])(themeName)) {
        // Root Hovered
        const rootHovered = styles.rootHovered;
        rootHovered.backgroundColor = theme.palette.themeDark;
        rootHovered.color = theme.palette.white;
        rootHovered.boxShadow = _teams_shadow_levels__WEBPACK_IMPORTED_MODULE_1__[/* ShadowLevels */ "a"].shadowLevel6;
        // Menu is expanded
        const rootExpanded = styles.rootExpanded;
        rootExpanded.boxShadow = _teams_shadow_levels__WEBPACK_IMPORTED_MODULE_1__[/* ShadowLevels */ "a"].shadowLevel6;
    }
    return styles;
}


/***/ }),

/***/ "A51w":
/*!***************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-fluentui-teams-theme/src/teams/styles/breadcrumb.styles.ts ***!
  \***************************************************************************************************************************************************/
/*! exports provided: getBreadcrumbStyles */
/*! exports used: getBreadcrumbStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getBreadcrumbStyles; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "ogYq");
/* harmony import */ var _teams_sizes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../teams-sizes */ "ZOo+");
/* harmony import */ var _teams_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../teams-theme */ "tPyQ");
/* istanbul ignore file */



function getBreadcrumbStyles(themeName, _theme) {
    return (props) => {
        const { theme } = props;
        const { palette } = theme;
        const stateSelectors = {
            ':hover': {
                color: palette.themePrimary,
                textDecoration: 'none',
                backgroundColor: 'none',
            },
            ':active': {
                color: palette.themePrimary,
                backgroundColor: 'none',
                textDecoration: 'none',
            },
            '&:active:hover': {
                color: palette.themePrimary,
                backgroundColor: 'none',
                textDecoration: 'none',
            },
        };
        const styles = {
            root: {
                margin: 0,
                fontSize: _teams_sizes__WEBPACK_IMPORTED_MODULE_1__[/* FontSizes */ "a"].size14,
                lineHeight: _teams_sizes__WEBPACK_IMPORTED_MODULE_1__[/* FontSizes */ "a"].size20,
                selectors: {
                    '.ms-Breadcrumb-listItem:last-child .ms-Breadcrumb-itemLink': {
                        fontWeight: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "e"].bold,
                        color: palette.black,
                    },
                    '.ms-Breadcrumb-listItem:last-child .ms-Breadcrumb-item': {
                        fontWeight: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "e"].bold,
                    },
                },
            },
            item: {
                color: palette.black,
                fontSize: _teams_sizes__WEBPACK_IMPORTED_MODULE_1__[/* FontSizes */ "a"].size14,
                lineHeight: '40px',
                height: '40px',
                selectors: {
                    ':last-child': {
                        color: palette.black,
                    },
                },
            },
            listItem: {
                selectors: {
                    ':last-child': {
                        selectors: {
                            '.ms-Breadcrumb-item': {
                                color: palette.black,
                            },
                        },
                    },
                },
            },
            itemLink: {
                fontSize: _teams_sizes__WEBPACK_IMPORTED_MODULE_1__[/* FontSizes */ "a"].size14,
                lineHeight: '40px',
                outline: 'none',
                fontWeight: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "e"].regular,
                color: palette.black,
                height: '40px',
                selectors: Object.assign({ '.ms-Fabric--isFocusVisible &:focus': {
                        // Necessary due to changes of Link component not using getFocusStyle.
                        outline: 'none',
                    } }, stateSelectors),
            },
            chevron: {
                color: palette.neutralDark,
                fontSize: _teams_sizes__WEBPACK_IMPORTED_MODULE_1__[/* FontSizes */ "a"].size12,
            },
            overflowButton: {
                color: palette.neutralDark,
                selectors: Object.assign({}, stateSelectors),
            },
        };
        // Contrast theme overrides
        if (Object(_teams_theme__WEBPACK_IMPORTED_MODULE_2__[/* isContrastTheme */ "f"])(themeName)) {
            stateSelectors['&:active:hover'].color = palette.themeDark;
            stateSelectors[':hover'].color = palette.themeDark;
            stateSelectors[':active'].color = palette.themeDark;
        }
        return styles;
    };
}


/***/ }),

/***/ "B6ki":
/*!***************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-fluentui-teams-theme/src/teams/styles/search-box.styles.ts ***!
  \***************************************************************************************************************************************************/
/*! exports provided: getSearchBoxStyles */
/*! exports used: getSearchBoxStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getSearchBoxStyles; });
/* harmony import */ var _teams_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../teams-colors */ "McEG");
/* harmony import */ var _teams_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../teams-theme */ "tPyQ");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "jki+");
/* istanbul ignore file */



const getFieldStyle = (palette, themeName, background) => {
    const fieldStyle = {
        FIELD_GROUP_BACKGROUND_COLOR: palette.neutralLight,
        FIELD_GROUP_OPACITY: 0.36,
        FIELD_COLOR_PLACEHOLDER_NOT_DISABLED: palette.neutralDark,
        FIELD_COLOR_PLACEHOLDER_DISABLED: palette.neutralDark,
        FIELD_GROUP_BORDER_WIDTH: '0 0 2px 0',
        FIELD_GROUP_BORDER_COLOR: 'transparent',
        FIELD_GROUP_BORDER_COLOR_DISABLED: 'transparent',
        FIELD_GROUP_BORDER_BOTTOM_COLOR_ACTIVE: palette.themePrimary,
        FIELD_GROUP_BORDER_WIDTH_ACTIVE: '0 0 2px 0',
    };
    // Dark theme overrides
    if (Object(_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isDarkTheme */ "g"])(themeName)) {
        fieldStyle.FIELD_GROUP_BACKGROUND_COLOR = palette.white;
        fieldStyle.FIELD_COLOR_PLACEHOLDER_DISABLED = palette.neutralPrimary;
    }
    // Contrast theme overrides
    if (Object(_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(themeName)) {
        fieldStyle.FIELD_GROUP_BACKGROUND_COLOR = palette.white;
        fieldStyle.FIELD_GROUP_OPACITY = 1;
        fieldStyle.FIELD_COLOR_PLACEHOLDER_NOT_DISABLED = palette.black;
        fieldStyle.FIELD_COLOR_PLACEHOLDER_DISABLED = _teams_colors__WEBPACK_IMPORTED_MODULE_0__[/* ContrastColors */ "b"].appGreenContrast;
        fieldStyle.FIELD_GROUP_BORDER_WIDTH = '1px 1px 1px 1px';
        fieldStyle.FIELD_GROUP_BORDER_COLOR = palette.black;
        fieldStyle.FIELD_GROUP_BORDER_COLOR_DISABLED = _teams_colors__WEBPACK_IMPORTED_MODULE_0__[/* ContrastColors */ "b"].appGreenContrast;
        fieldStyle.FIELD_GROUP_BORDER_BOTTOM_COLOR_ACTIVE = palette.themeDark;
        fieldStyle.FIELD_GROUP_BORDER_WIDTH_ACTIVE = '1px 1px 2px 1px';
    }
    // If this textfiled is on gray background
    if (background === 'gray') {
        fieldStyle.FIELD_GROUP_BACKGROUND_COLOR = palette.white;
        fieldStyle.FIELD_COLOR_PLACEHOLDER_NOT_DISABLED = palette.neutralPrimaryAlt;
    }
    return fieldStyle;
};
const getClearButton = (fieldStyle) => ({
    selectors: {
        '.ms-Button': {
            color: fieldStyle.FIELD_COLOR_PLACEHOLDER_NOT_DISABLED,
            selectors: {
                ':hover': {
                    color: fieldStyle.FIELD_COLOR_PLACEHOLDER_NOT_DISABLED,
                },
                ':active': {
                    color: fieldStyle.FIELD_COLOR_PLACEHOLDER_NOT_DISABLED,
                },
            },
        },
    },
});
const getRoot = (fieldStyle, disabled, hasFocus) => [
    {
        background: fieldStyle.FIELD_GROUP_BACKGROUND_COLOR,
        borderRadius: _constants__WEBPACK_IMPORTED_MODULE_2__[/* teamsBorderRadius */ "a"],
        borderWidth: fieldStyle.FIELD_GROUP_BORDER_WIDTH,
        borderStyle: 'Solid',
        borderColor: fieldStyle.FIELD_GROUP_BORDER_COLOR,
        height: 32,
        paddingLeft: 12,
        selectors: {
            ':hover': {
                borderColor: fieldStyle.FIELD_GROUP_BORDER_COLOR,
            },
            '.ms-SearchBox-field': {
                selectors: {
                    '::placeholder': [
                        !disabled && {
                            color: fieldStyle.FIELD_COLOR_PLACEHOLDER_NOT_DISABLED,
                        },
                        disabled && { color: fieldStyle.FIELD_COLOR_PLACEHOLDER_DISABLED },
                    ],
                    ':-ms-input-placeholder': [
                        !disabled && {
                            color: fieldStyle.FIELD_COLOR_PLACEHOLDER_NOT_DISABLED,
                        },
                        disabled && { color: fieldStyle.FIELD_COLOR_PLACEHOLDER_DISABLED },
                    ],
                },
            },
        },
    },
    disabled && {
        opacity: fieldStyle.FIELD_GROUP_OPACITY,
        borderColor: fieldStyle.FIELD_GROUP_BORDER_COLOR_DISABLED,
    },
    !hasFocus &&
        !disabled && {
        selectors: {
            ':hover': {
                borderColor: fieldStyle.FIELD_GROUP_BORDER_COLOR,
            },
        },
    },
    hasFocus && getHasFocus(fieldStyle),
];
const getHasFocus = (fieldStyle) => ({
    borderBottomColor: fieldStyle.FIELD_GROUP_BORDER_BOTTOM_COLOR_ACTIVE,
    borderWidth: fieldStyle.FIELD_GROUP_BORDER_WIDTH_ACTIVE,
    // Need 2px border raidus as the border width is 2px.
    borderBottomRightRadius: _constants__WEBPACK_IMPORTED_MODULE_2__[/* teamsBorderRadius */ "a"],
    borderBottomLeftRadius: _constants__WEBPACK_IMPORTED_MODULE_2__[/* teamsBorderRadius */ "a"],
    selectors: {
        ':hover': {
            borderBottomColor: fieldStyle.FIELD_GROUP_BORDER_BOTTOM_COLOR_ACTIVE,
            borderWidth: fieldStyle.FIELD_GROUP_BORDER_WIDTH_ACTIVE,
            // Need 2px border raidus as the border width is 2px.
            borderBottomRightRadius: _constants__WEBPACK_IMPORTED_MODULE_2__[/* teamsBorderRadius */ "a"],
            borderBottomLeftRadius: _constants__WEBPACK_IMPORTED_MODULE_2__[/* teamsBorderRadius */ "a"],
        },
    },
});
function getSearchBoxStyles(themeName, _theme, background) {
    return (props) => {
        const { theme, disabled, hasInput, hasFocus } = props;
        const { palette } = theme;
        const fieldStyle = getFieldStyle(palette, themeName, background);
        const styles = {
            root: getRoot(fieldStyle, disabled, hasFocus),
            field: {
                color: palette.neutralDark,
                height: 30,
                selectors: {},
            },
            iconContainer: [
                {
                    transition: 'none',
                    width: '32px',
                    height: 30,
                    paddingLeft: 1,
                    paddingRight: 1,
                    order: 2,
                },
                hasInput && {
                    display: 'none',
                },
            ],
            clearButton: getClearButton(fieldStyle),
            icon: [
                {
                    opacity: 1,
                    paddingLeft: 4,
                    paddingRight: 4,
                    transform: 'scaleX(-1)',
                },
                !disabled && { color: fieldStyle.FIELD_COLOR_PLACEHOLDER_NOT_DISABLED },
                disabled && { color: fieldStyle.FIELD_COLOR_PLACEHOLDER_DISABLED },
                hasInput && {
                    display: 'none',
                },
            ],
        };
        return styles;
    };
}


/***/ }),

/***/ "CNu+":
/*!****************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-fluentui-teams-theme/src/teams/styles/command-bar.styles.ts ***!
  \****************************************************************************************************************************************************/
/*! exports provided: getCommandBarStyles */
/*! exports used: getCommandBarStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCommandBarStyles; });
/* harmony import */ var _teams_sizes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../teams-sizes */ "ZOo+");
/* harmony import */ var _teams_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../teams-theme */ "tPyQ");
/* istanbul ignore file */


function getCommandBarStyles(themeName, theme) {
    const MS_BUTTON_ICON_SIZE = _teams_sizes__WEBPACK_IMPORTED_MODULE_0__[/* FontSizes */ "a"].size14;
    const MS_BUTTON_MENU_ICON_SIZE = _teams_sizes__WEBPACK_IMPORTED_MODULE_0__[/* FontSizes */ "a"].size12;
    const MS_COMMAND_BAR_OVERFLOW_BUTTON_SIZE = _teams_sizes__WEBPACK_IMPORTED_MODULE_0__[/* FontSizes */ "a"].size16;
    const ROOT_TOP_BORDER = theme.palette.neutralTertiaryAlt;
    const ROOT_BOTTOM_BORDER = theme.palette.neutralTertiaryAlt;
    const BUTTON_COLOR = theme.palette.neutralDark;
    const COMMANDBAR_HEIGHT = '48px';
    const styles = {
        root: {
            height: COMMANDBAR_HEIGHT,
            paddingLeft: '20px',
            paddingRight: '20px',
            background: 'transparent',
            borderTop: `1px solid ${ROOT_TOP_BORDER}`,
            borderBottom: `1px solid ${ROOT_BOTTOM_BORDER}`,
            selectors: {
                '.icons-filled': {
                    display: 'none',
                },
                '.icons-unfilled': {
                    display: 'block',
                },
                svg: {
                    height: COMMANDBAR_HEIGHT,
                },
                'svg, .icons-default-fill': {
                    fill: BUTTON_COLOR,
                },
                '.ms-Button-menuIcon, .ms-Button-icon': {
                    color: BUTTON_COLOR,
                    fontSize: MS_BUTTON_ICON_SIZE,
                    minWidth: MS_BUTTON_ICON_SIZE,
                    lineHeight: COMMANDBAR_HEIGHT,
                    height: COMMANDBAR_HEIGHT,
                },
                '.ms-Button-menuIcon': {
                    fontSize: MS_BUTTON_MENU_ICON_SIZE,
                    minWidth: MS_BUTTON_MENU_ICON_SIZE,
                    lineHeight: COMMANDBAR_HEIGHT,
                    height: COMMANDBAR_HEIGHT,
                    marginLeft: '6px',
                    marginTop: '1px',
                    selectors: {
                        svg: {
                            width: '20px',
                            height: '38px',
                            margin: '0 -4px',
                        },
                    },
                },
                '.ms-Button--commandBar': {
                    border: '1px solid transparent',
                },
                '.ms-CommandBarItem-link': {
                    textDecoration: 'none',
                    border: '1px solid transparent',
                    color: BUTTON_COLOR,
                },
                'button, a': {
                    marginRight: '16px',
                    minWidth: 'auto',
                },
                button: {
                    height: '100%',
                },
                '.ms-OverflowSet-item:last-child button,  .ms-OverflowSet-item:last-child a': {
                    marginRight: '0',
                },
                'a, a:link, a:visited, a:hover, button, button:active, button:hover': {
                    backgroundColor: 'transparent',
                    color: BUTTON_COLOR,
                },
                'button:hover': {
                    color: theme.palette.themePrimary,
                    selectors: {
                        'svg, .icons-default-fill': {
                            fill: theme.palette.themePrimary,
                        },
                        '.ms-Button-menuIcon, .ms-Button-icon': {
                            fontWeight: 'bold',
                            color: theme.palette.themePrimary,
                            backgroundColor: 'transparent',
                        },
                        '.icons-filled': {
                            display: 'block',
                        },
                        '.icons-unfilled': {
                            display: 'none',
                        },
                    },
                },
                '.ms-Fabric--isFocusVisible &': {
                    selectors: {
                        '.ms-Button:focus': {
                            selectors: {
                                ':after': {
                                    borderColor: theme.palette.white,
                                    outline: `1px solid ${theme.palette.black}`,
                                },
                            },
                        },
                    },
                },
                '.is-expanded': {
                    color: theme.palette.themePrimary,
                    selectors: {
                        'svg, .icons-default-fill': {
                            fill: theme.palette.themePrimary,
                        },
                        '.ms-Button-menuIcon, .ms-Button-icon': {
                            fontWeight: 'bold',
                            color: theme.palette.themePrimary,
                            backgroundColor: 'transparent',
                        },
                        '.icons-filled': {
                            display: 'block',
                        },
                        '.icons-unfilled': {
                            display: 'none',
                        },
                    },
                },
                'a:hover': {
                    color: theme.palette.themePrimary,
                    selectors: {
                        'svg, .icons-default-fill': {
                            fill: theme.palette.themePrimary,
                        },
                        '.ms-Button-menuIcon, .ms-Button-icon': {
                            fontWeight: 'bold',
                            color: theme.palette.themePrimary,
                            backgroundColor: 'transparent',
                        },
                        '.icons-filled': {
                            display: 'block',
                        },
                        '.icons-unfilled': {
                            display: 'none',
                        },
                    },
                },
                '.ms-CommandBar-overflowButton': {
                    minWidth: 'auto',
                    selectors: {
                        '.ms-Button-menuIcon': {
                            margin: 0,
                            fontSize: MS_COMMAND_BAR_OVERFLOW_BUTTON_SIZE,
                        },
                    },
                },
            },
        },
        secondarySet: {
            selectors: {
                '.ms-Button-icon': {
                    display: 'flex',
                    width: 'auto',
                },
            },
        },
    };
    // Contrast theme overrides
    if (Object(_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(themeName)) {
        // Overriding text color
        styles.root.selectors['a, a:link, a:visited, a:hover, button, button:active, button:hover'].color = theme.palette.themeDark;
        // Overriding icons color
        styles.root.selectors['.ms-Button-menuIcon, .ms-Button-icon'].color =
            theme.palette.themeDark;
        // Overriding svg fill color
        styles.root.selectors['svg, .icons-default-fill'].fill =
            theme.palette.themeDark;
    }
    return styles;
}


/***/ }),

/***/ "CVk2":
/*!****************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-fluentui-teams-theme/src/teams/styles/date-picker.styles.ts ***!
  \****************************************************************************************************************************************************/
/*! exports provided: getDatePickerStyles */
/*! exports used: getDatePickerStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDatePickerStyles; });
/* harmony import */ var _teams_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../teams-colors */ "McEG");
/* harmony import */ var _teams_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../teams-theme */ "tPyQ");
/* istanbul ignore file */


function getDatePickerStyles(themeName, _theme) {
    return (props) => {
        const { theme } = props;
        const { palette } = theme;
        let HOVER_TEXT_COLOR = palette.black;
        let HOVER_BACKGROUND_COLOR = palette.neutralLight;
        let DISABLED_TEXT_COLOR = palette.neutralTertiary;
        let DISABLED_BACKGROUND_COLOR = palette.white;
        if (Object(_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isDarkTheme */ "g"])(themeName)) {
            HOVER_BACKGROUND_COLOR = palette.white;
            DISABLED_TEXT_COLOR = palette.neutralTertiary;
            DISABLED_BACKGROUND_COLOR = palette.neutralLight;
        }
        if (Object(_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(themeName)) {
            HOVER_TEXT_COLOR = palette.white;
            HOVER_BACKGROUND_COLOR = palette.themeDark;
            DISABLED_TEXT_COLOR = _teams_colors__WEBPACK_IMPORTED_MODULE_0__[/* ContrastColors */ "b"].appGreenContrast;
            DISABLED_BACKGROUND_COLOR = palette.white;
        }
        const styles = {
            callout: {
                '[class^="monthAndYear-"]': {
                    color: theme.palette.black,
                },
                '[class^="headerIconButton-"], [class^="navigationButton-"]': {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: Object(_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(themeName) ? palette.black : undefined,
                    ':active, :hover': {
                        color: HOVER_TEXT_COLOR,
                        backgroundColor: HOVER_BACKGROUND_COLOR,
                    },
                },
                '.ms-DatePicker': {
                    table: {
                        th: {
                            color: palette.black,
                        },
                        td: {
                            cursor: 'pointer',
                            color: palette.black,
                            ':active, :hover': {
                                // Fluent UI already uses important here, so we must have a more specific selector with
                                // important too to override it.
                                // See https://github.com/microsoft/fluentui/blob/master/packages/react/src/components/CalendarDayGrid/CalendarDayGrid.styles.ts
                                color: HOVER_TEXT_COLOR + ' !important',
                                backgroundColor: HOVER_BACKGROUND_COLOR + ' !important',
                            },
                            'button[disabled]': {
                                color: DISABLED_TEXT_COLOR,
                                backgroundColor: DISABLED_BACKGROUND_COLOR,
                            },
                        },
                    },
                    '[role=grid]': {
                        '[role=gridcell]': {
                            cursor: 'pointer',
                            color: palette.black,
                            ':active, :hover': {
                                color: HOVER_TEXT_COLOR,
                                backgroundColor: HOVER_BACKGROUND_COLOR,
                            },
                            'button[disabled]': {
                                color: DISABLED_TEXT_COLOR,
                                backgroundColor: DISABLED_BACKGROUND_COLOR,
                            },
                        },
                    },
                },
            },
        };
        return styles;
    };
}


/***/ }),

/***/ "D3bU":
/*!**********************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-fluentui-teams-theme/src/teams/teams-shadow-levels.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: ShadowLevels */
/*! exports used: ShadowLevels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShadowLevels; });
/* harmony import */ var _teams_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./teams-colors */ "McEG");
/* istanbul ignore file */

// eslint-disable-next-line @typescript-eslint/no-namespace
var ShadowLevels;
(function (ShadowLevels) {
    ShadowLevels.shadowLevel1 = `0 2px 4px -0.75px ${_teams_colors__WEBPACK_IMPORTED_MODULE_0__[/* BoxShadowColors */ "a"].boxShadowColor}`;
    ShadowLevels.shadowLevel1Dark = `0 2px 4px -0.75px ${_teams_colors__WEBPACK_IMPORTED_MODULE_0__[/* BoxShadowColors */ "a"].boxShadowColorDark}`;
    ShadowLevels.shadowLevel1Darker = `0 2px 4px -0.75px ${_teams_colors__WEBPACK_IMPORTED_MODULE_0__[/* BoxShadowColors */ "a"].boxShadowColorDarker}`;
    ShadowLevels.shadowLevel2 = `0 4px 7px -1px ${_teams_colors__WEBPACK_IMPORTED_MODULE_0__[/* BoxShadowColors */ "a"].boxShadowColor}`;
    ShadowLevels.shadowLevel3 = `0 8px 10px -2px ${_teams_colors__WEBPACK_IMPORTED_MODULE_0__[/* BoxShadowColors */ "a"].boxShadowColor}`;
    ShadowLevels.shadowLevel3Dark = `0 8px 10px -2px ${_teams_colors__WEBPACK_IMPORTED_MODULE_0__[/* BoxShadowColors */ "a"].boxShadowColorDark}`;
    ShadowLevels.shadowLevel4 = `0 16px 18px -4px ${_teams_colors__WEBPACK_IMPORTED_MODULE_0__[/* BoxShadowColors */ "a"].boxShadowColor}`;
    ShadowLevels.shadowLevel5 = '0 1.2px 3.6px rgba(0, 0, 0, 0.11), 0 6.4px 14.4px rgba(0, 0, 0, 0.13)';
    ShadowLevels.shadowLevel6 = '0 0px 0px 2px rgba(0, 0, 0, 1)';
})(ShadowLevels || (ShadowLevels = {}));


/***/ }),

/***/ "Eln2":
/*!**********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-fluentui-teams-theme/src/teams-palette.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: getPalette */
/*! exports used: getPalette */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getPalette; });
/* harmony import */ var _teams_teams_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./teams/teams-theme */ "tPyQ");

const getPalette = (themeName) => {
    switch (themeName) {
        case 'defaultV2':
            return _teams_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* TeamsThemeDefaultV2 */ "e"];
        case 'dark':
        case 'tfl-dark':
            return _teams_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* TeamsThemeDark */ "b"];
        case 'darkV2':
            return _teams_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* TeamsThemeDarkV2 */ "c"];
        case 'contrast':
            return _teams_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* TeamsThemeContrast */ "a"];
        default:
            return _teams_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* TeamsThemeDefault */ "d"];
    }
};


/***/ }),

/***/ "GKFq":
/*!***********************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-fluentui-teams-theme/src/teams/styles/toggle.styles.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: getToggleStyles */
/*! exports used: getToggleStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getToggleStyles; });
/* harmony import */ var _teams_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../teams-colors */ "McEG");
/* harmony import */ var _teams_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../teams-theme */ "tPyQ");
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */


const getToggleStyles = (themeName) => {
    const themeColors = getThemeColors(themeName);
    return (props) => ({
        root: {
            selectors: {
                '.ms-Label': {
                    fontWeight: 'normal',
                    color: themeColors.textColor,
                },
            },
        },
        pill: getPillStyles(!props.disabled, !!props.checked, themeColors),
        thumb: getThumbStyles(!props.disabled, !!props.checked, themeColors),
    });
};
const getThemeColors = (themeName) => {
    let colors = {
        themeName,
    };
    switch (themeName) {
        case 'dark':
            colors = Object.assign(Object.assign({}, colors), { textColor: _teams_colors__WEBPACK_IMPORTED_MODULE_0__[/* DarkColors */ "d"].appBlack, backgroundColor: _teams_colors__WEBPACK_IMPORTED_MODULE_0__[/* DarkColors */ "d"].appWhite, checkedBackgroundColor: _teams_colors__WEBPACK_IMPORTED_MODULE_0__[/* DarkColors */ "d"].appBrand06, disabledBackgroundColor: _teams_colors__WEBPACK_IMPORTED_MODULE_0__[/* DarkColors */ "d"].appGray09, disabledAccentColor: _teams_colors__WEBPACK_IMPORTED_MODULE_0__[/* DarkColors */ "d"].appGray06 });
            break;
        case 'contrast':
            colors = Object.assign(Object.assign({}, colors), { textColor: _teams_colors__WEBPACK_IMPORTED_MODULE_0__[/* ContrastColors */ "b"].appBlack, backgroundColor: _teams_colors__WEBPACK_IMPORTED_MODULE_0__[/* ContrastColors */ "b"].appWhite, checkedBackgroundColor: _teams_colors__WEBPACK_IMPORTED_MODULE_0__[/* ContrastColors */ "b"].appBrand06, disabledBackgroundColor: _teams_colors__WEBPACK_IMPORTED_MODULE_0__[/* ContrastColors */ "b"].appGreenContrast, disabledAccentColor: _teams_colors__WEBPACK_IMPORTED_MODULE_0__[/* ContrastColors */ "b"].appGreenContrast });
            break;
        default:
        case 'default':
            colors = Object.assign(Object.assign({}, colors), { textColor: _teams_colors__WEBPACK_IMPORTED_MODULE_0__[/* CoreColors */ "c"].appBlack, backgroundColor: _teams_colors__WEBPACK_IMPORTED_MODULE_0__[/* CoreColors */ "c"].appWhite, checkedBackgroundColor: _teams_colors__WEBPACK_IMPORTED_MODULE_0__[/* CoreColors */ "c"].appBrand06, disabledBackgroundColor: _teams_colors__WEBPACK_IMPORTED_MODULE_0__[/* CoreColors */ "c"].appGray09, disabledAccentColor: _teams_colors__WEBPACK_IMPORTED_MODULE_0__[/* CoreColors */ "c"].appGray06 });
            break;
    }
    return colors;
};
function getThumbStyles(isEnabled, isChecked, themeColors) {
    const { backgroundColor, borderColor } = getThumbColors(isEnabled, isChecked, themeColors);
    const baseStyles = {
        backgroundColor,
        transition: 'background-color 0.1s, border-color 0.1s',
    };
    if (!isChecked) {
        baseStyles.border = `thin solid ${borderColor}`;
    }
    return baseStyles;
}
function getThumbColors(isEnabled, isChecked, themeColors) {
    const thumbColors = {
        backgroundColor: themeColors.backgroundColor,
    };
    if (!isEnabled && isChecked) {
        thumbColors.backgroundColor = Object(_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(themeColors.themeName)
            ? themeColors.backgroundColor
            : themeColors.disabledAccentColor;
    }
    if (!isChecked) {
        thumbColors.borderColor = isEnabled ? themeColors.textColor : themeColors.disabledAccentColor;
    }
    return thumbColors;
}
function getPillStyles(isEnabled, isChecked, themeColors) {
    const { backgroundColor: thumbBackgroundColor } = getThumbColors(isEnabled, isChecked, themeColors);
    const { backgroundColor: pillBackgroundColor, borderColor, contrastHoverColor, } = getPillColors(isEnabled, isChecked, themeColors);
    const baseStyles = {
        backgroundColor: pillBackgroundColor,
        transition: 'background-color 0.1s, border-color 0.1s',
    };
    if (!isChecked) {
        baseStyles.border = `thin solid ${borderColor} !important`;
    }
    if (isEnabled) {
        baseStyles.selectors = {
            ':hover': Object.assign(Object.assign({}, (contrastHoverColor && Object.assign({ backgroundColor: pillBackgroundColor }, (!isChecked && { borderColor: `${contrastHoverColor} !important` })))), { selectors: {
                    '.ms-Toggle-thumb': Object.assign({ backgroundColor: thumbBackgroundColor }, (contrastHoverColor && !isChecked && { borderColor: contrastHoverColor })),
                } }),
        };
    }
    return baseStyles;
}
function getPillColors(isEnabled, isChecked, themeColors) {
    const pillColors = {
        backgroundColor: themeColors.backgroundColor,
    };
    if (isChecked) {
        pillColors.backgroundColor = isEnabled
            ? themeColors.checkedBackgroundColor
            : themeColors.disabledBackgroundColor;
    }
    if (!isChecked) {
        pillColors.borderColor = isEnabled ? themeColors.textColor : themeColors.disabledAccentColor;
    }
    if (Object(_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(themeColors.themeName)) {
        pillColors.contrastHoverColor = themeColors.checkedBackgroundColor;
    }
    return pillColors;
}


/***/ }),

/***/ "LemD":
/*!*******************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-fluentui-teams-theme/src/teams/styles/default-button.styles.ts ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: getDefaultButtonStyles */
/*! exports used: getDefaultButtonStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDefaultButtonStyles; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "ogYq");
/* harmony import */ var _teams_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../teams-colors */ "McEG");
/* harmony import */ var _teams_shadow_levels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../teams-shadow-levels */ "D3bU");
/* harmony import */ var _teams_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../teams-theme */ "tPyQ");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "jki+");
/* istanbul ignore file */





function getDefaultButtonStyles(themeName, theme) {
    let primaryTextColor = theme.palette.white;
    let primaryBackgroundColor = theme.palette.themePrimary;
    let primaryBackgroundHoverColor = theme.palette.themeDark;
    let primaryBackgroundActiveColor = theme.palette.themeDarker;
    let primaryBackgroundFocusColor = theme.palette.themeDark;
    let primaryDividerColor = theme.palette.neutralTertiaryAlt;
    let focusBoxShadowColor = theme.palette.white;
    let focusBackgroundColor = theme.palette.neutralTertiaryAlt;
    let focusTextColor = theme.palette.black;
    let focusPrimaryTextColor = theme.palette.white;
    const buttonMinWidth = '96px';
    const buttonBorderRadius = _constants__WEBPACK_IMPORTED_MODULE_4__[/* teamsBorderRadius */ "a"];
    const buttonPadding = '0 16px';
    const buttonBoxShadow = _teams_shadow_levels__WEBPACK_IMPORTED_MODULE_2__[/* ShadowLevels */ "a"].shadowLevel1;
    const buttonBoxShadowDark = _teams_shadow_levels__WEBPACK_IMPORTED_MODULE_2__[/* ShadowLevels */ "a"].shadowLevel1Dark;
    const rootHoverColor = theme.palette.neutralQuaternary;
    const rootPressedCheckedColor = theme.palette.neutralTertiaryAlt;
    if (Object(_teams_theme__WEBPACK_IMPORTED_MODULE_3__[/* isDarkTheme */ "g"])(themeName)) {
        primaryTextColor = theme.palette.black;
        primaryBackgroundColor = theme.palette.themeTertiary;
        primaryBackgroundHoverColor = theme.palette.themeSecondary;
        primaryBackgroundActiveColor = theme.palette.themeLight;
        primaryBackgroundFocusColor = theme.palette.themeLight;
        primaryDividerColor = theme.palette.white;
        focusTextColor = theme.palette.black;
        focusPrimaryTextColor = theme.palette.black;
    }
    if (Object(_teams_theme__WEBPACK_IMPORTED_MODULE_3__[/* isContrastTheme */ "f"])(themeName)) {
        primaryTextColor = theme.palette.white;
        primaryBackgroundColor = theme.palette.black;
        primaryBackgroundHoverColor = theme.palette.themeDark;
        primaryBackgroundActiveColor = theme.palette.themeDark;
        primaryDividerColor = theme.palette.white;
        focusBoxShadowColor = 'transparent';
        focusBackgroundColor = theme.palette.themeDark;
        focusTextColor = theme.palette.white;
    }
    const commonStyles = {
        borderColor: 'transparent',
        background: primaryBackgroundColor,
        color: primaryTextColor,
        boxShadow: buttonBoxShadowDark,
        selectors: {
            ':hover': {
                borderColor: 'transparent',
                background: primaryBackgroundHoverColor,
                color: primaryTextColor,
            },
            ':active': {
                borderColor: 'transparent',
                background: primaryBackgroundActiveColor,
                color: primaryTextColor,
            },
        },
    };
    const focusStyles = {
        // Work around for fluentui button focus outline not showing in iOS Safari.
        ':focus-visible, .ms-Fabric--isFocusVisible &:focus': {
            borderColor: theme.palette.black,
            '::after': {
                outline: 'none',
                borderRadius: buttonBorderRadius,
                borderColor: theme.palette.white,
                borderWidth: '1px',
                borderStyle: 'solid',
                inset: 0,
            },
        },
    };
    const styles = {
        root: {
            borderRadius: buttonBorderRadius,
            backgroundColor: theme.palette.white,
            borderColor: theme.palette.neutralTertiaryAlt,
            color: theme.palette.black,
            boxShadow: buttonBoxShadow,
            cursor: 'pointer',
            minWidth: buttonMinWidth,
            padding: buttonPadding,
            selectors: {
                '.icons-default-fill': {
                    fill: theme.palette.black,
                },
                '.icons-filled': {
                    display: 'none',
                },
            },
        },
        rootHovered: {
            backgroundColor: rootHoverColor,
            borderColor: theme.palette.neutralTertiary,
            color: theme.palette.black,
            selectors: Object.assign({}, focusStyles),
        },
        rootPressed: {
            backgroundColor: rootPressedCheckedColor,
            borderColor: theme.palette.neutralTertiary,
            boxShadow: 'none',
            color: theme.palette.black,
        },
        rootChecked: {
            backgroundColor: rootPressedCheckedColor,
            borderColor: theme.palette.neutralTertiary,
            color: theme.palette.black,
            selectors: Object.assign({}, focusStyles),
        },
        rootCheckedHovered: {
            selectors: Object.assign({}, focusStyles),
        },
        rootDisabled: {
            backgroundColor: rootHoverColor,
            color: theme.palette.neutralTertiary,
            borderColor: 'transparent',
            boxShadow: 'none',
            selectors: Object.assign({}, focusStyles),
        },
        rootFocused: {
            boxShadow: buttonBoxShadow,
            selectors: Object.assign({}, focusStyles),
        },
        icon: {
            fontSize: '1.5em',
            height: 'unset',
        },
        menuIcon: {
            fontSize: '1.5em',
            height: 'unset',
        },
        splitButtonMenuButton: {
            borderTopRightRadius: buttonBorderRadius,
            borderBottomRightRadius: buttonBorderRadius,
            borderWidth: '1px',
            borderStyle: 'solid',
            background: theme.palette.white,
            borderLeft: 0,
            color: theme.palette.black,
            marginLeft: 0,
            selectors: {
                '.icons-filled': {
                    display: 'none',
                },
                ':hover': {
                    backgroundColor: theme.palette.neutralLighter,
                    color: theme.palette.black,
                },
                ':active': {
                    backgroundColor: theme.palette.neutralTertiaryAlt,
                    color: theme.palette.black,
                },
                '.ms-Button-icon': {
                    color: 'inherit',
                    fontWeight: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "e"].bold,
                },
            },
        },
        splitButtonContainer: {
            selectors: {
                '.ms-Button': {
                    borderColor: theme.palette.neutralTertiaryAlt,
                    backgroundClip: 'padding-box',
                },
                '.ms-Button--default': {
                    borderRight: 0,
                    borderTopRightRadius: '0px',
                    borderBottomRightRadius: '0px',
                },
                '.ms-Button--default + .ms-Button': {
                    boxShadow: buttonBoxShadow,
                },
                '.ms-Button--primary': Object.assign({ borderRight: 0, borderTopRightRadius: '0px', borderBottomRightRadius: '0px' }, commonStyles),
                '.ms-Button--primary + .ms-Button': Object.assign({}, commonStyles),
                ".ms-Button--primary ~ span[class*='css-']": {
                    top: 0,
                    bottom: 0,
                    backgroundColor: primaryDividerColor,
                },
                ".ms-Button--primary + .ms-Button[aria-expanded='true']": {
                    background: primaryBackgroundActiveColor,
                    color: primaryTextColor,
                },
                ':hover': {
                    selectors: {
                        '.ms-Button': {
                            borderColor: theme.palette.neutralTertiary,
                        },
                        '.ms-Button--primary': {
                            borderColor: 'transparent',
                        },
                        '.ms-Button--primary + .ms-Button': {
                            borderColor: 'transparent',
                        },
                    },
                },
                ':active': {
                    selectors: {
                        '.ms-Button': {
                            borderColor: theme.palette.neutralTertiary,
                            boxShadow: 'none',
                        },
                        '.ms-Button--primary': {
                            borderColor: 'transparent',
                        },
                        '.ms-Button--primary + .ms-Button': {
                            borderColor: 'transparent',
                        },
                    },
                },
            },
        },
        splitButtonContainerFocused: {
            selectors: {
                '.ms-Fabric--isFocusVisible &': {
                    selectors: {
                        ':focus::after': {
                            outline: 'none',
                            borderRadius: _constants__WEBPACK_IMPORTED_MODULE_4__[/* teamsBorderRadius */ "a"],
                            borderColor: theme.palette.black,
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            boxShadow: `${focusBoxShadowColor} 0 0 0 1px inset`,
                        },
                        ':focus': {
                            selectors: {
                                '.ms-Button': {
                                    backgroundColor: focusBackgroundColor,
                                    color: focusTextColor,
                                },
                                ".ms-Button ~ span[class*='css-']": {
                                    backgroundColor: theme.palette.white,
                                },
                                '.ms-Button--primary': {
                                    backgroundColor: primaryBackgroundFocusColor,
                                    color: focusPrimaryTextColor,
                                },
                                '.ms-Button--primary + .ms-Button': {
                                    backgroundColor: primaryBackgroundFocusColor,
                                    color: focusPrimaryTextColor,
                                },
                            },
                        },
                    },
                },
            },
        },
        splitButtonMenuButtonExpanded: {
            background: theme.palette.neutralTertiaryAlt,
            color: theme.palette.black,
            borderColor: theme.palette.neutralTertiary,
        },
        splitButtonDivider: {
            top: 1,
            bottom: 1,
            width: 1,
            backgroundColor: theme.palette.neutralTertiaryAlt,
        },
        description: {
            color: 'inherit',
        },
    };
    // Dark theme overrides
    if (Object(_teams_theme__WEBPACK_IMPORTED_MODULE_3__[/* isDarkTheme */ "g"])(themeName)) {
        // Root
        styles.root.boxShadow = buttonBoxShadowDark;
        styles.root.borderColor = theme.palette.neutralTertiary;
        styles.root.backgroundColor = theme.palette.neutralLight;
    }
    // Contrast theme overrides
    if (Object(_teams_theme__WEBPACK_IMPORTED_MODULE_3__[/* isContrastTheme */ "f"])(themeName)) {
        // Root
        styles.root.borderWidth = '2px';
        styles.root.borderColor = theme.palette.black;
        // Root Hovered
        styles.rootHovered.borderColor = theme.palette.themeDark;
        styles.rootHovered.color = theme.palette.white;
        styles.rootHovered.backgroundColor = theme.palette.themeDark;
        // Root Pressed
        styles.rootPressed.borderColor = theme.palette.themeDark;
        styles.rootPressed.color = theme.palette.white;
        styles.rootPressed.backgroundColor = theme.palette.themeDark;
        // Root Checked
        styles.rootChecked.borderColor = theme.palette.black;
        styles.rootChecked.color = theme.palette.white;
        // Root Disabled
        styles.rootDisabled.color = _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* ContrastColors */ "b"].appGreenContrast;
        styles.rootDisabled.borderWidth = '2px';
        styles.rootDisabled.borderColor = _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* ContrastColors */ "b"].appGreenContrast;
        styles.rootDisabled.backgroundColor = theme.palette.white;
        // Root Focused
        styles.rootFocused.color = theme.palette.black;
        styles.rootFocused.borderWidth = '2px';
        styles.rootFocused.backgroundColor = theme.palette.white;
        styles.rootFocused.borderColor = theme.palette.themePrimary;
        // Splitmenu Button Overrides
        styles.splitButtonMenuButton.color = theme.palette.black;
        styles.splitButtonMenuButton.borderWidth = '2px';
        styles.splitButtonMenuButton.selectors[':hover'].color =
            theme.palette.white;
        styles.splitButtonMenuButton.selectors[':active'].color =
            theme.palette.white;
        styles.splitButtonMenuButton.selectors[':hover'].backgroundColor =
            theme.palette.themeDark;
        styles.splitButtonMenuButton.selectors[':active'].backgroundColor =
            theme.palette.themeDark;
        styles.splitButtonContainer.selectors[':hover'].selectors['.ms-Button'].borderColor = theme.palette.black;
        styles.splitButtonContainer.selectors[':active']
            .selectors['.ms-Button'].borderColor = theme.palette.black;
        styles.splitButtonDivider.width = '2px';
        styles.splitButtonMenuButtonExpanded.background = theme.palette.themeDark;
        styles.splitButtonMenuButtonExpanded.color = theme.palette.white;
        styles.splitButtonMenuButtonExpanded.borderColor = theme.palette.white;
    }
    return styles;
}


/***/ }),

/***/ "MLhw":
/*!*****************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-fluentui-teams-theme/src/teams/styles/details-list.styles.ts ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: getCheckStyles, getDetailsListStyles, getDetailsRowStyles */
/*! exports used: getCheckStyles, getDetailsListStyles, getDetailsRowStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCheckStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getDetailsListStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getDetailsRowStyles; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "ogYq");
/* harmony import */ var _teams_sizes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../teams-sizes */ "ZOo+");
/* harmony import */ var _teams_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../teams-theme */ "tPyQ");
/* istanbul ignore file */



function getCheckStyles(_themeName, _theme) {
    return (props) => {
        const { theme, checked } = props;
        const { palette } = theme;
        const styles = {
            circle: [!checked && { color: palette.neutralSecondary }],
            check: [!checked && { color: palette.neutralSecondary }],
        };
        return styles;
    };
}
function getDetailsListStyles(themeName, _theme) {
    return (props) => {
        const { theme } = props;
        const { palette } = theme;
        const TEXT_COLOR = palette.black;
        const DETAILS_HEADER_BORDER_COLOR = palette.neutralQuaternary;
        const styles = {
            root: {
                background: 'transparent',
                selectors: {
                    '.ms-GroupHeader': {
                        background: palette.neutralLighterAlt,
                        color: TEXT_COLOR,
                        borderBottom: 'none',
                        selectors: {
                            ':hover': {
                                background: palette.neutralLighterAlt,
                                color: TEXT_COLOR,
                                selectors: {
                                    '.ms-GroupHeader-expand': {
                                        color: palette.neutralDark,
                                    },
                                },
                            },
                            '.ms-GroupSpacer': {
                                width: '40px !important', // Needed to override inline css
                            },
                            '.ms-GroupHeader-title': {
                                fontSize: _teams_sizes__WEBPACK_IMPORTED_MODULE_1__[/* FontSizes */ "a"].size14,
                                fontWeight: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "e"].bold,
                                selectors: {
                                    "[class^='headerCount-']": {
                                        fontWeight: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "e"].regular,
                                    },
                                },
                            },
                            '.ms-GroupHeader-expand': {
                                color: palette.neutralDark,
                                selectors: {
                                    ':hover': {
                                        background: 'transparent',
                                        color: palette.themePrimary,
                                        selectors: {
                                            i: {
                                                fontWeight: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "e"].bold,
                                            },
                                        },
                                    },
                                    i: {
                                        fontSize: _teams_sizes__WEBPACK_IMPORTED_MODULE_1__[/* FontSizes */ "a"].size12,
                                    },
                                },
                            },
                        },
                    },
                },
            },
            headerWrapper: {
                selectors: {
                    '.ms-DetailsHeader': {
                        height: '32px',
                        lineHeight: '32px',
                        backgroundColor: 'transparent',
                        borderBottomColor: DETAILS_HEADER_BORDER_COLOR,
                        /**
                         * Override min-width calculated by items-view
                         */
                        minWidth: '100% !important',
                        padding: 0,
                        selectors: {
                            '.ms-DetailsHeader-cell': {
                                height: '32px',
                            },
                            '.ms-DetailsHeader-cellName': {
                                fontSize: _teams_sizes__WEBPACK_IMPORTED_MODULE_1__[/* FontSizes */ "a"].size12,
                                fontWeight: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "e"].regular,
                                display: 'flex',
                                alignItems: 'center',
                            },
                            '.ms-DetailsRow-check': {
                                width: '40px',
                                height: '32px',
                            },
                            '.is-actionable': {
                                selectors: {
                                    '.ms-DetailsHeader-cellTitle': {
                                        selectors: {
                                            i: {
                                                color: TEXT_COLOR,
                                                position: 'relative',
                                                bottom: '2px',
                                            },
                                        },
                                    },
                                    ':hover': {
                                        background: palette.neutralLighter,
                                        color: TEXT_COLOR,
                                        selectors: {
                                            '.ms-DetailsHeader-cellTitle': {
                                                color: TEXT_COLOR,
                                                selectors: {
                                                    i: {
                                                        color: TEXT_COLOR,
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                            "[class*='cellIsGroupExpander-']": {
                                background: 'transparent',
                                color: TEXT_COLOR,
                                selectors: {
                                    ':hover': {
                                        background: palette.neutralLighter,
                                        color: TEXT_COLOR,
                                    },
                                },
                            },
                            '.ms-DetailsHeader-cellTitle': {
                                alignItems: 'center',
                                color: TEXT_COLOR,
                            },
                            '.ms-DetailsHeader-filterChevron': {
                                paddingTop: '2px',
                            },
                            ':hover .ms-DetailsHeader-cellTitle': {
                                background: 'none',
                            },
                        },
                    },
                    '.ms-DetailsHeader-cellSizer': {
                        cursor: 'ew-resize',
                    },
                },
            },
            contentWrapper: {
                '.ms-DetailsRow': {
                    ':hover': {
                        backgroundColor: Object(_teams_theme__WEBPACK_IMPORTED_MODULE_2__[/* isContrastTheme */ "f"])(themeName)
                            ? theme.palette.themeTertiary
                            : theme.palette.neutralQuaternaryAlt,
                    },
                    ':active': {
                        backgroundColor: theme.palette.neutralTertiaryAlt,
                    },
                    '::after': {
                        // Override the default border color when selected, whose contrast is not enough
                        borderColor: `${palette.black} !important`,
                    },
                },
            },
        };
        // Contrast theme overrides
        if (Object(_teams_theme__WEBPACK_IMPORTED_MODULE_2__[/* isContrastTheme */ "f"])(themeName)) {
            styles.headerWrapper.selectors['.ms-DetailsHeader'].borderBottomColor = palette.neutralTertiaryAlt;
            styles.headerWrapper.selectors['.ms-DetailsHeader'].selectors['.is-actionable'].selectors[':hover'].background = palette.themeDark;
            styles.headerWrapper.selectors['.ms-DetailsHeader'].selectors['.is-actionable'].selectors[':hover'].color =
                palette.white;
            styles.headerWrapper.selectors['.ms-DetailsHeader'].selectors['.is-actionable'].selectors[':hover'].selectors['.ms-DetailsHeader-cellTitle'].selectors.i.color = palette.white;
            styles.headerWrapper.selectors['.ms-DetailsHeader'].selectors['.is-actionable'].selectors[':hover'].selectors['.ms-DetailsHeader-cellTitle'].color = palette.white;
            styles.headerWrapper.selectors['.ms-DetailsHeader'].selectors['.ms-DetailsHeader-cellTitle'].color =
                palette.black;
            styles.headerWrapper.selectors['.ms-DetailsHeader'].selectors["[class*='cellIsGroupExpander-']"].selectors[':hover'].background = palette.themeDark;
            styles.headerWrapper.selectors['.ms-DetailsHeader'].selectors["[class*='cellIsGroupExpander-']"].selectors[':hover'].color = palette.white;
            // Group Header Styling
            styles.root.selectors['.ms-GroupHeader'].selectors[':hover'].color = theme.palette.white;
            styles.root.selectors['.ms-GroupHeader'].selectors[':hover'].background = palette.themeDark;
            styles.root.selectors['.ms-GroupHeader'].selectors[':hover'].selectors['.ms-GroupHeader-expand'].color =
                theme.palette.white;
            styles.root.selectors['.ms-GroupHeader'].selectors['.ms-GroupHeader-expand'].selectors[':hover'].color =
                theme.palette.white;
        }
        return styles;
    };
}
function getDetailsRowStyles(themeName, _theme) {
    return (props) => {
        const { theme, isSelected } = props;
        const { palette } = theme;
        let ROW_HOVER_BACKGROUND_COLOR = palette.neutralLight;
        let SELECTED_ROW_BACKGROUND_COLOR = palette.white;
        const ROW_BORDER_COLOR = palette.neutralLighter;
        const TEXT_COLOR = palette.black;
        const LINK_TEXT_COLOR = palette.black;
        let LINK_TEXT_HOVER_COLOR = palette.black;
        let SELECTED_HOVER_COLOR = palette.black;
        const HERO_BUTTON = "[class*='heroButton']";
        // Contrast theme overrides
        if (Object(_teams_theme__WEBPACK_IMPORTED_MODULE_2__[/* isContrastTheme */ "f"])(themeName)) {
            ROW_HOVER_BACKGROUND_COLOR = palette.themeTertiary;
            SELECTED_ROW_BACKGROUND_COLOR = palette.themePrimary;
            SELECTED_HOVER_COLOR = palette.white;
            LINK_TEXT_HOVER_COLOR = palette.white;
        }
        const styles = {
            root: [
                {
                    background: 'transparent',
                    color: TEXT_COLOR,
                    borderBottomColor: ROW_BORDER_COLOR,
                    fontSize: _teams_sizes__WEBPACK_IMPORTED_MODULE_1__[/* FontSizes */ "a"].size14,
                    /**
                     * Override min-width calculated by items-view
                     */
                    minWidth: '100% !important',
                    selectors: {
                        '.ms-DetailsRow-cell': {
                            color: TEXT_COLOR,
                            selectors: {
                                '.ms-DetailsRow-check': {
                                    height: '100%',
                                    width: '40px',
                                },
                                '.ms-Button--icon': {
                                    color: 'inherit',
                                },
                            },
                        },
                        '.ms-Details': {
                            selectors: {
                                '.ms-Button': {
                                    background: 'transparent',
                                },
                            },
                        },
                        '.ms-Link': {
                            // Need it to override all state (i.e. focus, hover, active) styles for the ms-link component
                            color: `${LINK_TEXT_COLOR} !important`,
                        },
                        ':hover': {
                            background: ROW_HOVER_BACKGROUND_COLOR,
                            selectors: {
                                '.ms-DetailsRow-cell': {
                                    color: SELECTED_HOVER_COLOR,
                                },
                                // Need it to override all state (i.e. focus, hover) styles for the ms-link component
                                '.ms-Link': {
                                    color: `${LINK_TEXT_HOVER_COLOR} !important`,
                                },
                                '.ms-TooltipHost': {
                                    color: SELECTED_HOVER_COLOR,
                                },
                            },
                        },
                        [HERO_BUTTON]: {
                            background: 'transparent',
                            selectors: {
                                ':hover': {
                                    background: 'transparent',
                                    selectors: {
                                        i: {
                                            fontWeight: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "e"].bold,
                                        },
                                    },
                                },
                            },
                        },
                        '.ms-Button--icon': {
                            width: '2rem',
                        },
                    },
                },
                isSelected && [
                    {
                        background: SELECTED_ROW_BACKGROUND_COLOR,
                        selectors: {
                            '.ms-DetailsRow-cell': {
                                color: SELECTED_HOVER_COLOR,
                            },
                            // Need it to override all state (i.e. focus, hover, active) styles for the ms-link component
                            '.ms-Link': {
                                color: `${LINK_TEXT_COLOR} !important`,
                            },
                            ':focus': {
                                background: SELECTED_ROW_BACKGROUND_COLOR,
                                color: SELECTED_HOVER_COLOR,
                                selectors: {
                                    '.ms-DetailsRow-cell': {
                                        color: SELECTED_HOVER_COLOR,
                                    },
                                    // Need it to override all state (i.e. focus, hover) styles for the ms-link component
                                    '.ms-Link': {
                                        color: `${LINK_TEXT_HOVER_COLOR} !important`,
                                    },
                                    ':hover': {
                                        background: ROW_HOVER_BACKGROUND_COLOR,
                                    },
                                },
                            },
                            ':hover': {
                                background: ROW_HOVER_BACKGROUND_COLOR,
                            },
                        },
                    },
                ],
            ],
            cell: {
                margin: 'auto',
            },
        };
        return styles;
    };
}


/***/ }),

/***/ "Mw1l":
/*!******************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-fluentui-teams-theme/src/teams/styles/people-picker.styles.ts ***!
  \******************************************************************************************************************************************************/
/*! exports provided: getPeopePickerStyles */
/*! exports used: getPeopePickerStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getPeopePickerStyles; });
/* harmony import */ var _teams_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../teams-colors */ "McEG");
/* harmony import */ var _teams_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../teams-theme */ "tPyQ");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "jki+");
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */



function getPeopePickerStyles(themeName, theme) {
    return (props) => {
        const { disabled } = props;
        const { palette } = theme;
        let PLACEHOLDER_NOT_DISABLED = Object(_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isDefaultTheme */ "h"])(themeName)
            ? _teams_colors__WEBPACK_IMPORTED_MODULE_0__[/* CoreColors */ "c"].placeHolderTextColor
            : theme.palette.neutralTertiaryAlt;
        let FIELD_GROUP_BACKGROUND_COLOR = palette.neutralLight;
        let SELECTED_BG_COLOR = _teams_colors__WEBPACK_IMPORTED_MODULE_0__[/* CoreColors */ "c"].appGray09;
        let FIELD_GROUP_OPACITY = 0.64;
        const FIELD_COLOR = palette.black;
        let FIELD_COLOR_PLACEHOLDER_NOT_DISABLED = palette.neutralDark;
        let FIELD_COLOR_PLACEHOLDER_DISABLED = palette.neutralDark;
        let FIELD_GROUP_BORDER_WIDTH = '0 0 2px 0';
        let INPUT_GROUP_BORDER_WIDTH = '0 0 2px 0';
        let FIELD_GROUP_BORDER_COLOR = 'transparent';
        let FIELD_GROUP_BORDER_COLOR_DISABLED = _teams_colors__WEBPACK_IMPORTED_MODULE_0__[/* CoreColors */ "c"].appGray09;
        let FIELD_GROUP_BORDER_BOTTOM_COLOR_ACTIVE = palette.themePrimary;
        let PRIMARY_TEXT_BORDER_BOTTOM_COLOR = _teams_colors__WEBPACK_IMPORTED_MODULE_0__[/* CoreColors */ "c"].appRed;
        let PERSONA_HOVER_BACKGROUND_COLOR = _teams_colors__WEBPACK_IMPORTED_MODULE_0__[/* CoreColors */ "c"].pickerPersonaContainerBackground;
        // Dark theme overrides
        if (Object(_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isDarkTheme */ "g"])(themeName)) {
            PLACEHOLDER_NOT_DISABLED = palette.neutralSecondary;
            FIELD_GROUP_BACKGROUND_COLOR = palette.white;
            FIELD_COLOR_PLACEHOLDER_NOT_DISABLED = palette.neutralDark;
            FIELD_COLOR_PLACEHOLDER_DISABLED = palette.neutralPrimary;
            FIELD_GROUP_BORDER_COLOR = _teams_colors__WEBPACK_IMPORTED_MODULE_0__[/* DarkColors */ "d"].appGray09;
            SELECTED_BG_COLOR = _teams_colors__WEBPACK_IMPORTED_MODULE_0__[/* DarkColors */ "d"].appPersonaBackground;
            PRIMARY_TEXT_BORDER_BOTTOM_COLOR = _teams_colors__WEBPACK_IMPORTED_MODULE_0__[/* DarkColors */ "d"].appRed;
            PERSONA_HOVER_BACKGROUND_COLOR = _teams_colors__WEBPACK_IMPORTED_MODULE_0__[/* DarkColors */ "d"].pickerPersonaContainerBackground;
        }
        // Contrast theme overrides
        if (Object(_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(themeName)) {
            PLACEHOLDER_NOT_DISABLED = palette.black;
            FIELD_GROUP_BACKGROUND_COLOR = palette.white;
            SELECTED_BG_COLOR = palette.white;
            FIELD_GROUP_OPACITY = 1;
            FIELD_COLOR_PLACEHOLDER_NOT_DISABLED = palette.black;
            FIELD_COLOR_PLACEHOLDER_DISABLED = _teams_colors__WEBPACK_IMPORTED_MODULE_0__[/* ContrastColors */ "b"].appGreenContrast;
            FIELD_GROUP_BORDER_WIDTH = '1px 1px 1px 1px';
            INPUT_GROUP_BORDER_WIDTH = '0';
            FIELD_GROUP_BORDER_COLOR = palette.black;
            FIELD_GROUP_BORDER_COLOR_DISABLED = _teams_colors__WEBPACK_IMPORTED_MODULE_0__[/* ContrastColors */ "b"].appGreenContrast;
            FIELD_GROUP_BORDER_BOTTOM_COLOR_ACTIVE = palette.themeDark;
            PRIMARY_TEXT_BORDER_BOTTOM_COLOR = _teams_colors__WEBPACK_IMPORTED_MODULE_0__[/* ContrastColors */ "b"].appRed;
            PERSONA_HOVER_BACKGROUND_COLOR = _teams_colors__WEBPACK_IMPORTED_MODULE_0__[/* ContrastColors */ "b"].pickerPersonaContainerBackground;
        }
        const style = {
            root: {},
            itemsWrapper: {
                selectors: {
                    '.ms-PickerPersona-container': Object.assign({ backgroundColor: SELECTED_BG_COLOR }, (Object(_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(themeName) && {
                        border: '1px solid white',
                    })),
                    '.ms-PickerPersona-container, .ms-PickerPersona-container .ms-Button': {
                        color: FIELD_COLOR,
                        selectors: {
                            ':hover': Object.assign({ backgroundColor: PERSONA_HOVER_BACKGROUND_COLOR }, (Object(_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(themeName) && {
                                color: palette.white,
                                selectors: {
                                    '.ms-Persona-details': {
                                        selectors: {
                                            div: {
                                                color: palette.white,
                                            },
                                        },
                                    },
                                    '.ms-Button': {
                                        color: palette.white,
                                    },
                                },
                            })),
                        },
                    },
                    '.ms-PickerPersona-container .ms-Button': {
                        selectors: {
                            ':hover': {
                                selectors: {
                                    i: {
                                        fontWeight: 'bold',
                                    },
                                },
                            },
                            '::after': {
                                // Override the default border color when selected, whose contrast is not enough
                                borderColor: `${palette.black} !important`,
                            },
                        },
                    },
                },
            },
            text: {
                borderWidth: FIELD_GROUP_BORDER_WIDTH,
                borderStyle: 'Solid',
                borderRadius: _constants__WEBPACK_IMPORTED_MODULE_2__[/* teamsBorderRadius */ "a"],
                borderColor: !disabled ? FIELD_GROUP_BORDER_COLOR : FIELD_GROUP_BORDER_COLOR_DISABLED,
                backgroundColor: FIELD_GROUP_BACKGROUND_COLOR,
                opacity: disabled ? FIELD_GROUP_OPACITY : undefined,
                selectors: {
                    '&:hover': {
                        borderColor: FIELD_GROUP_BORDER_COLOR,
                    },
                    '&::after': {
                        background: 'transparent',
                        borderWidth: FIELD_GROUP_BORDER_WIDTH,
                        borderColor: FIELD_GROUP_BORDER_BOTTOM_COLOR_ACTIVE,
                        inset: '-1px 0',
                    },
                    '.ms-Persona-details': {
                        color: FIELD_COLOR,
                        selectors: {
                            div: {
                                color: FIELD_COLOR,
                            },
                        },
                    },
                    '.ms-Persona-primaryText': {
                        borderBottomColor: PRIMARY_TEXT_BORDER_BOTTOM_COLOR,
                    },
                },
            },
            input: {
                height: '32px',
                background: 'transparent',
                color: FIELD_COLOR,
                padding: '0 12px',
                borderWidth: INPUT_GROUP_BORDER_WIDTH,
                borderStyle: 'Solid',
                borderRadius: _constants__WEBPACK_IMPORTED_MODULE_2__[/* teamsBorderRadius */ "a"],
                borderColor: !disabled ? FIELD_GROUP_BORDER_COLOR : FIELD_GROUP_BORDER_COLOR_DISABLED,
                selectors: {
                    '::placeholder': [
                        !disabled && { color: FIELD_COLOR_PLACEHOLDER_NOT_DISABLED },
                        disabled && { color: FIELD_COLOR_PLACEHOLDER_DISABLED },
                    ],
                    ':-ms-input-placeholder': [
                        !disabled && { color: FIELD_COLOR_PLACEHOLDER_NOT_DISABLED },
                        disabled && { color: FIELD_COLOR_PLACEHOLDER_DISABLED },
                    ],
                    '&:active, &:focus': {
                        selectors: {
                            '::placeholder': [!disabled && { color: PLACEHOLDER_NOT_DISABLED }],
                            ':-ms-input-placeholder': [!disabled && { color: PLACEHOLDER_NOT_DISABLED }],
                        },
                    },
                },
            },
        };
        if (Object(_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(themeName)) {
            style.text.selectors['&:hover'].borderStyle = 'solid';
            style.text.selectors['&:hover'].borderColor = !disabled
                ? `${FIELD_GROUP_BORDER_COLOR} !important`
                : `${FIELD_GROUP_BORDER_COLOR_DISABLED} !important`;
            style.text.selectors['&:hover'].borderWidth = FIELD_GROUP_BORDER_WIDTH;
            style.text.selectors['&:hover'].borderRadius = _constants__WEBPACK_IMPORTED_MODULE_2__[/* teamsBorderRadius */ "a"];
        }
        return style;
    };
}


/***/ }),

/***/ "QF6D":
/*!****************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-fluentui-teams-theme/src/teams/styles/message-bar.styles.ts ***!
  \****************************************************************************************************************************************************/
/*! exports provided: getMessageBarStyles */
/*! exports used: getMessageBarStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getMessageBarStyles; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "SwLT");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react */ "ogYq");
/* harmony import */ var _teams_sizes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../teams-sizes */ "ZOo+");
/* istanbul ignore file */


function getMessageBarStyles(_themeName, _theme) {
    return (props) => {
        const { theme, messageBarType } = props;
        const margin = {
            marginTop: '12px',
            marginBottom: '12px',
        };
        const ERROR_COLOR = theme.palette.redDark;
        const ERROR_BACKGROUND_COLOR = theme.palette.redLight;
        const ERROR_BOTTOM_BORDER_COLOR = theme.palette.red;
        const INFO_COLOR = theme.palette.neutralDark;
        const INFO_BACKGROUND_COLOR = theme.palette.neutralTertiaryAlt;
        const INFO_BOTTOM_BORDER_COLOR = theme.palette.neutralTertiary;
        const styles = {
            actions: {},
            iconContainer: margin,
            icon: {
                display: 'none',
            },
            dismissal: [
                Object.assign(Object.assign({ width: '26px', height: 'auto', padding: '2px 4px', marginRight: '8px' }, margin), { selectors: {
                        '.ms-Button-icon': {
                            fontSize: _teams_sizes__WEBPACK_IMPORTED_MODULE_2__[/* FontSizes */ "a"].size10,
                            fontWeight: 'bold',
                        },
                    } }),
                messageBarType === _fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* MessageBarType */ "a"].error && {
                    color: ERROR_COLOR,
                    selectors: {
                        '.ms-Button-icon': {
                            color: ERROR_COLOR,
                        },
                    },
                },
                messageBarType === _fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* MessageBarType */ "a"].info && {
                    color: INFO_COLOR,
                    selectors: {
                        '.ms-Button-icon': {
                            color: INFO_COLOR,
                        },
                    },
                },
            ],
            text: [
                Object.assign({ fontSize: _teams_sizes__WEBPACK_IMPORTED_MODULE_2__[/* FontSizes */ "a"].size14, fontWeight: _fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* FontWeights */ "e"].semibold, justifyContent: 'center', flexGrow: 1 }, margin),
            ],
            root: [
                {
                    selectors: {
                        '.ms-Link': {
                            fontWeight: 'inherit',
                            fontSize: 'inherit',
                            textDecoration: 'underline',
                            color: 'inherit',
                            selectors: {
                                ':hover': {
                                    color: 'inherit',
                                },
                                ':focus': {
                                    color: 'inherit',
                                },
                                ':active': {
                                    color: 'inherit',
                                },
                                ':active:hover': {
                                    color: 'inherit',
                                },
                            },
                        },
                    },
                },
                messageBarType === _fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* MessageBarType */ "a"].info && {
                    color: INFO_COLOR,
                    background: INFO_BACKGROUND_COLOR,
                    borderBottom: `1px solid ${INFO_BOTTOM_BORDER_COLOR}`,
                },
                messageBarType === _fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* MessageBarType */ "a"].error && {
                    color: ERROR_COLOR,
                    background: ERROR_BACKGROUND_COLOR,
                    borderBottom: `1px solid ${ERROR_BOTTOM_BORDER_COLOR}`,
                },
            ],
        };
        return styles;
    };
}


/***/ }),

/***/ "UgYt":
/*!****************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-fluentui-teams-theme/src/teams/styles/search-well.styles.ts ***!
  \****************************************************************************************************************************************************/
/*! exports provided: SEARCH_WELL_FOCUSED_CLASS, getSearchWellStyles */
/*! exports used: getSearchWellStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SEARCH_WELL_FOCUSED_CLASS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getSearchWellStyles; });
/* harmony import */ var _teams_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../teams-theme */ "tPyQ");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "jki+");
/* istanbul ignore file */


const SEARCH_WELL_FOCUSED_CLASS = 'fabric-search-well-callout-focus';
const getSearchWellStyles = (themeName) => (props) => {
    const TEXT_COLOR = props.theme.palette.black;
    let HOVER_COLOR = props.theme.palette.black;
    let KEYBOARD_FOCUS_TEXT_COLOR = props.theme.palette.black;
    let HOVER_BACKGROUND_COLOR = props.theme.palette.neutralLight;
    let FOCUS_BACKGROUND_COLOR = props.theme.palette.neutralQuaternaryAlt;
    let ACTIVE_BACKGROUND_COLOR = props.theme.palette.neutralLight;
    let FOCUS_VISIBLE_BORDER = `1px solid ${KEYBOARD_FOCUS_TEXT_COLOR}`;
    let FOCUS_VISIBLE_BACKGROUND_COLOR = 'transparent';
    if (Object(_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* isDarkTheme */ "g"])(themeName)) {
        HOVER_COLOR = props.theme.palette.black;
        HOVER_BACKGROUND_COLOR = props.theme.palette.neutralQuaternary;
        FOCUS_BACKGROUND_COLOR = props.theme.palette.neutralTertiaryAlt;
        ACTIVE_BACKGROUND_COLOR = props.theme.palette.neutralQuaternary;
    }
    if (Object(_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* isContrastTheme */ "f"])(themeName)) {
        HOVER_COLOR = props.theme.palette.white;
        HOVER_BACKGROUND_COLOR = props.theme.palette.themeDark;
        FOCUS_BACKGROUND_COLOR = props.theme.palette.themeDark;
        ACTIVE_BACKGROUND_COLOR = props.theme.palette.themeDark;
        KEYBOARD_FOCUS_TEXT_COLOR = props.theme.palette.white;
        FOCUS_VISIBLE_BORDER = 'none';
        FOCUS_VISIBLE_BACKGROUND_COLOR = props.theme.palette.themeDark;
    }
    const hoverStyles = {
        background: HOVER_BACKGROUND_COLOR,
        color: HOVER_COLOR,
        boxShadow: 'none',
        selectors: {
            '.icons-default-fill': {
                fill: HOVER_COLOR,
            },
            '.ms-Persona-primaryText': {
                color: HOVER_COLOR,
            },
            '.ms-Persona-secondaryText': {
                color: HOVER_COLOR,
            },
            '.ms-Button-label': {
                color: HOVER_COLOR,
            },
        },
    };
    const focusActiveStyles = {
        background: FOCUS_BACKGROUND_COLOR,
        color: HOVER_COLOR,
        boxShadow: 'none',
        selectors: {
            '.icons-default-fill': {
                fill: HOVER_COLOR,
            },
            '.ms-Persona-primaryText': {
                color: HOVER_COLOR,
            },
            '.ms-Persona-secondaryText': {
                color: HOVER_COLOR,
            },
            '.ms-Button-label': {
                color: HOVER_COLOR,
            },
        },
    };
    return {
        root: {
            selectors: {
                '.ms-Button': {
                    padding: '0 13px 0 13px',
                    color: TEXT_COLOR,
                },
                '.icons-default-fill': {
                    fill: TEXT_COLOR,
                },
            },
        },
        container: {
            selectors: {
                '.ms-Callout': {
                    minWidth: '444px',
                },
                '.ms-Persona-primaryText, .ms-Persona, .ms-Persona-secondaryText': {
                    color: 'inherit',
                },
            },
        },
        calloutMain: {
            selectors: {
                "[data-icon-name='chevronMedRightIcon']": {
                    marginRight: '-5px',
                },
                '.ms-Button': {
                    selectors: {
                        ':hover': Object.assign({ '.icons-unfilled': {
                                display: 'none',
                            }, '.icons-filled': {
                                display: 'block',
                            } }, hoverStyles),
                        ':active': Object.assign(Object.assign({}, focusActiveStyles), { backgroundColor: ACTIVE_BACKGROUND_COLOR }),
                    },
                },
                [`button.${SEARCH_WELL_FOCUSED_CLASS}`]: Object.assign(Object.assign({}, focusActiveStyles), { selectors: {
                        ':hover': {
                            backgroundColor: ACTIVE_BACKGROUND_COLOR,
                        },
                    } }),
                ':global(.ms-Fabric--isFocusVisible) button.fabric-search-well-callout-focus': {
                    backgroundColor: FOCUS_VISIBLE_BACKGROUND_COLOR,
                    border: FOCUS_VISIBLE_BORDER,
                    borderRadius: _constants__WEBPACK_IMPORTED_MODULE_1__[/* teamsBorderRadius */ "a"],
                },
                '.ms-GroupedList-group .ms-List-page button:hover': {
                    color: props.theme.palette.white,
                },
            },
        },
    };
};


/***/ }),

/***/ "Wqj8":
/*!***************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-fluentui-teams-theme/src/teams/styles/suggestion.styles.ts ***!
  \***************************************************************************************************************************************************/
/*! exports provided: getSuggestionsStyles */
/*! exports used: getSuggestionsStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getSuggestionsStyles; });
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */
function getSuggestionsStyles(themeName, _theme) {
    return (props) => {
        const { theme } = props;
        const { palette } = theme;
        const selectedColor = {
            default: `${palette.black} !important`,
            dark: `${palette.black} !important`,
            contrast: `${palette.white} !important`,
        }[themeName];
        const selectedBackground = {
            default: palette.neutralLighter,
            dark: palette.neutralLighter,
            contrast: palette.themeSecondary,
        }[themeName];
        const customizedStyles = {
            background: selectedBackground,
            selectors: {
                '.ms-Persona-details': {
                    selectors: {
                        div: {
                            color: selectedColor,
                        },
                    },
                },
            },
        };
        const styles = {
            root: {},
            noSuggestions: {
                color: palette.black,
            },
            suggestionsContainer: {
                selectors: {
                    '.ms-Suggestions-item': {
                        height: '4.0em',
                        paddingBottom: '0',
                        marginBottom: '0',
                    },
                    '.ms-Suggestions-item .ms-Suggestions-itemButton:hover': Object.assign({}, customizedStyles),
                    '.ms-Suggestions-item .ms-Suggestions-itemButton.is-suggested': Object.assign({}, customizedStyles),
                },
            },
            title: {},
            forceResolveButton: {},
            searchForMoreButton: {},
            suggestionsAvailable: {},
            subComponentStyles: {
                spinner: {},
            },
        };
        return styles;
    };
}


/***/ }),

/***/ "YGEv":
/*!***************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-fluentui-teams-theme/src/teams/teams-styles.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: getTeamStyles */
/*! exports used: getTeamStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getTeamStyles; });
/* harmony import */ var _styles_action_button_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/action-button.styles */ "eSNc");
/* harmony import */ var _styles_breadcrumb_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/breadcrumb.styles */ "A51w");
/* harmony import */ var _styles_callout_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/callout.styles */ "Z6Rc");
/* harmony import */ var _styles_checkbox_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/checkbox.styles */ "2+FI");
/* harmony import */ var _styles_choice_group_option_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/choice-group-option.styles */ "6N/s");
/* harmony import */ var _styles_combo_box_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/combo-box.styles */ "glLe");
/* harmony import */ var _styles_command_bar_button_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/command-bar-button.styles */ "x32f");
/* harmony import */ var _styles_command_bar_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/command-bar.styles */ "CNu+");
/* harmony import */ var _styles_compound_button_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/compound-button.styles */ "uCUu");
/* harmony import */ var _styles_contextual_menu_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/contextual-menu.styles */ "mdHK");
/* harmony import */ var _styles_date_picker_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/date-picker.styles */ "CVk2");
/* harmony import */ var _styles_default_button_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles/default-button.styles */ "LemD");
/* harmony import */ var _styles_details_list_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./styles/details-list.styles */ "MLhw");
/* harmony import */ var _styles_dialog_styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./styles/dialog.styles */ "/Qia");
/* harmony import */ var _styles_document_card_styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./styles/document-card.styles */ "fcJj");
/* harmony import */ var _styles_dropdown_styles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./styles/dropdown.styles */ "tdNh");
/* harmony import */ var _styles_icon_button_styles__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./styles/icon-button.styles */ "6Oyu");
/* harmony import */ var _styles_icon_styles__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./styles/icon.styles */ "aOXU");
/* harmony import */ var _styles_label_styles__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./styles/label.styles */ "40wS");
/* harmony import */ var _styles_message_bar_styles__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./styles/message-bar.styles */ "QF6D");
/* harmony import */ var _styles_modal_styles__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./styles/modal.styles */ "5TwM");
/* harmony import */ var _styles_panel_styles__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./styles/panel.styles */ "nA6Z");
/* harmony import */ var _styles_people_picker_styles__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./styles/people-picker.styles */ "Mw1l");
/* harmony import */ var _styles_persona_styles__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./styles/persona.styles */ "ebDN");
/* harmony import */ var _styles_pivot_styles__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./styles/pivot.styles */ "iDKd");
/* harmony import */ var _styles_primary_button_styles__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./styles/primary-button.styles */ "nIJ3");
/* harmony import */ var _styles_scrollable_pane_styles__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./styles/scrollable-pane.styles */ "cxHQ");
/* harmony import */ var _styles_search_box_styles__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./styles/search-box.styles */ "B6ki");
/* harmony import */ var _styles_search_well_styles__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./styles/search-well.styles */ "UgYt");
/* harmony import */ var _styles_shimmer_styles__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./styles/shimmer.styles */ "iq+x");
/* harmony import */ var _styles_suggestion_styles__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./styles/suggestion.styles */ "Wqj8");
/* harmony import */ var _styles_teaching_bubble_styles__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./styles/teaching-bubble.styles */ "oxez");
/* harmony import */ var _styles_text_field_styles__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./styles/text-field.styles */ "n93F");
/* harmony import */ var _styles_toggle_styles__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./styles/toggle.styles */ "GKFq");
/* harmony import */ var _styles_tooltip_host_styles__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./styles/tooltip-host.styles */ "YPkh");
/* harmony import */ var _styles_tooltip_styles__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./styles/tooltip.styles */ "dBLV");
/* istanbul ignore file */




































function getTeamStyles(themeName, theme, isMobile) {
    return {
        ActionButton: {
            styles: Object(_styles_action_button_styles__WEBPACK_IMPORTED_MODULE_0__[/* getActionButtonStyles */ "a"])(themeName, theme),
        },
        Breadcrumb: {
            styles: Object(_styles_breadcrumb_styles__WEBPACK_IMPORTED_MODULE_1__[/* getBreadcrumbStyles */ "a"])(themeName, theme),
        },
        CalloutContent: {
            styles: Object(_styles_callout_styles__WEBPACK_IMPORTED_MODULE_2__[/* getCalloutContentStyles */ "a"])(themeName, theme),
        },
        Check: {
            styles: Object(_styles_details_list_styles__WEBPACK_IMPORTED_MODULE_12__[/* getCheckStyles */ "a"])(themeName, theme),
        },
        Checkbox: {
            styles: Object(_styles_checkbox_styles__WEBPACK_IMPORTED_MODULE_3__[/* getCheckboxStyles */ "a"])(themeName, theme),
        },
        ChoiceGroupOption: {
            styles: Object(_styles_choice_group_option_styles__WEBPACK_IMPORTED_MODULE_4__[/* getChoiceGroupOptionStyles */ "a"])(themeName, theme),
        },
        ComboBox: {
            styles: Object(_styles_combo_box_styles__WEBPACK_IMPORTED_MODULE_5__[/* getComboBoxStyles */ "a"])(themeName, theme),
        },
        CommandBar: {
            styles: Object(_styles_command_bar_styles__WEBPACK_IMPORTED_MODULE_7__[/* getCommandBarStyles */ "a"])(themeName, theme),
        },
        CommandBarButton: {
            styles: Object(_styles_command_bar_button_styles__WEBPACK_IMPORTED_MODULE_6__[/* getCommandBarButtonStyles */ "a"])(themeName, theme),
        },
        CompoundButton: {
            styles: Object(_styles_compound_button_styles__WEBPACK_IMPORTED_MODULE_8__[/* getCompoundButtonStyles */ "a"])(themeName, theme),
        },
        ContextualMenu: {
            styles: Object(_styles_contextual_menu_styles__WEBPACK_IMPORTED_MODULE_9__[/* getContextualMenuStyles */ "a"])(themeName, theme),
        },
        DatePicker: {
            styles: Object(_styles_date_picker_styles__WEBPACK_IMPORTED_MODULE_10__[/* getDatePickerStyles */ "a"])(themeName, theme),
        },
        DefaultButton: {
            styles: Object(_styles_default_button_styles__WEBPACK_IMPORTED_MODULE_11__[/* getDefaultButtonStyles */ "a"])(themeName, theme),
        },
        DetailsList: {
            styles: Object(_styles_details_list_styles__WEBPACK_IMPORTED_MODULE_12__[/* getDetailsListStyles */ "b"])(themeName, theme),
        },
        DetailsRow: {
            styles: Object(_styles_details_list_styles__WEBPACK_IMPORTED_MODULE_12__[/* getDetailsRowStyles */ "c"])(themeName, theme),
        },
        DialogContent: {
            styles: Object(_styles_dialog_styles__WEBPACK_IMPORTED_MODULE_13__[/* getDialogContentStyles */ "a"])(themeName, theme),
        },
        DialogFooter: {
            styles: Object(_styles_dialog_styles__WEBPACK_IMPORTED_MODULE_13__[/* getDialogFooterStyles */ "b"])(themeName, theme),
        },
        DocumentCard: {
            styles: Object(_styles_document_card_styles__WEBPACK_IMPORTED_MODULE_14__[/* getDocumentCardStyles */ "a"])(themeName, theme),
        },
        Dropdown: {
            styles: Object(_styles_dropdown_styles__WEBPACK_IMPORTED_MODULE_15__[/* getDropdownStyles */ "a"])(themeName, theme),
        },
        Icon: {
            styles: _styles_icon_styles__WEBPACK_IMPORTED_MODULE_17__[/* getIconStyles */ "a"],
        },
        IconButton: {
            styles: Object(_styles_icon_button_styles__WEBPACK_IMPORTED_MODULE_16__[/* getIconButtonStyles */ "a"])(themeName, theme),
        },
        Label: {
            styles: _styles_label_styles__WEBPACK_IMPORTED_MODULE_18__[/* LabelStyles */ "a"],
        },
        MessageBar: {
            styles: Object(_styles_message_bar_styles__WEBPACK_IMPORTED_MODULE_19__[/* getMessageBarStyles */ "a"])(themeName, theme),
        },
        Modal: {
            styles: Object(_styles_modal_styles__WEBPACK_IMPORTED_MODULE_20__[/* getModalStyles */ "a"])(themeName, theme, isMobile),
        },
        NormalPeoplePicker: {
            styles: Object(_styles_people_picker_styles__WEBPACK_IMPORTED_MODULE_22__[/* getPeopePickerStyles */ "a"])(themeName, theme),
        },
        Panel: {
            styles: Object(_styles_panel_styles__WEBPACK_IMPORTED_MODULE_21__[/* getPanelStyles */ "a"])(themeName, theme),
        },
        Persona: {
            styles: Object(_styles_persona_styles__WEBPACK_IMPORTED_MODULE_23__[/* getPersonaStyles */ "b"])(themeName, theme),
        },
        PersonaCoin: {
            styles: Object(_styles_persona_styles__WEBPACK_IMPORTED_MODULE_23__[/* getPersonaCoinStyles */ "a"])(themeName, theme),
        },
        Pivot: {
            styles: _styles_pivot_styles__WEBPACK_IMPORTED_MODULE_24__[/* PivotStyles */ "a"],
        },
        PrimaryButton: {
            styles: Object(_styles_primary_button_styles__WEBPACK_IMPORTED_MODULE_25__[/* getPrimaryButtonStyles */ "a"])(themeName, theme),
        },
        ScrollablePane: {
            styles: Object(_styles_scrollable_pane_styles__WEBPACK_IMPORTED_MODULE_26__[/* getScrollablePaneStyles */ "a"])(themeName, theme),
        },
        SearchBox: {
            styles: Object(_styles_search_box_styles__WEBPACK_IMPORTED_MODULE_27__[/* getSearchBoxStyles */ "a"])(themeName, theme),
        },
        SearchWellCallout: {
            styles: Object(_styles_search_well_styles__WEBPACK_IMPORTED_MODULE_28__[/* getSearchWellStyles */ "a"])(themeName),
        },
        Shimmer: {
            styles: Object(_styles_shimmer_styles__WEBPACK_IMPORTED_MODULE_29__[/* getShimmerStyles */ "a"])(themeName, theme),
        },
        Suggestions: {
            styles: Object(_styles_suggestion_styles__WEBPACK_IMPORTED_MODULE_30__[/* getSuggestionsStyles */ "a"])(themeName, theme),
        },
        TeachingBubble: {
            styles: Object(_styles_teaching_bubble_styles__WEBPACK_IMPORTED_MODULE_31__[/* getTeachingBubbleStyles */ "a"])(themeName, theme),
        },
        TextField: {
            styles: Object(_styles_text_field_styles__WEBPACK_IMPORTED_MODULE_32__[/* getTextFieldStyles */ "a"])(themeName, theme),
        },
        Toggle: {
            styles: Object(_styles_toggle_styles__WEBPACK_IMPORTED_MODULE_33__[/* getToggleStyles */ "a"])(themeName),
        },
        Tooltip: {
            styles: Object(_styles_tooltip_styles__WEBPACK_IMPORTED_MODULE_35__[/* getTooltipStyles */ "a"])(themeName, theme),
        },
        TooltipHost: {
            styles: Object(_styles_tooltip_host_styles__WEBPACK_IMPORTED_MODULE_34__[/* getTooltipHostStyles */ "a"])(),
        },
    };
}


/***/ }),

/***/ "YPkh":
/*!*****************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-fluentui-teams-theme/src/teams/styles/tooltip-host.styles.ts ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: getTooltipHostStyles */
/*! exports used: getTooltipHostStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getTooltipHostStyles; });
function getTooltipHostStyles() {
    return {
        root: {
            // make icons properly aligned
            '& > i': {
                margin: '4px 4px 0',
            },
        },
    };
}


/***/ }),

/***/ "Z6Rc":
/*!************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-fluentui-teams-theme/src/teams/styles/callout.styles.ts ***!
  \************************************************************************************************************************************************/
/*! exports provided: getCalloutContentStyles */
/*! exports used: getCalloutContentStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCalloutContentStyles; });
/* harmony import */ var _teams_shadow_levels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../teams-shadow-levels */ "D3bU");
/* harmony import */ var _teams_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../teams-theme */ "tPyQ");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "jki+");
/* istanbul ignore file */



function getCalloutContentStyles(themeName, _theme) {
    return (props) => {
        const { theme } = props;
        const { palette } = theme;
        const TEXT_COLOR = palette.black;
        const styles = {
            root: {
                borderRadius: _constants__WEBPACK_IMPORTED_MODULE_2__[/* teamsBorderRadius */ "a"],
                boxShadow: _teams_shadow_levels__WEBPACK_IMPORTED_MODULE_0__[/* ShadowLevels */ "a"].shadowLevel3,
                background: palette.white,
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: palette.neutralTertiaryAlt,
                color: TEXT_COLOR,
                selectors: {
                    '.ms-Spinner': {
                        padding: '32px',
                    },
                    '.ms-CalloutExample-title': {
                        color: 'inherit',
                    },
                    '.ms-CalloutExample-subText': {
                        color: 'inherit',
                    },
                    "[class*='menuItemIconContainer']": {
                        marginLeft: '0',
                        marginRight: '12px',
                    },
                },
            },
            beakCurtain: {
                borderRadius: _constants__WEBPACK_IMPORTED_MODULE_2__[/* teamsBorderRadius */ "a"],
            },
            beak: {
                background: palette.white,
            },
            callout: {
                borderRadius: _constants__WEBPACK_IMPORTED_MODULE_2__[/* teamsBorderRadius */ "a"],
            },
            calloutMain: {
                borderRadius: _constants__WEBPACK_IMPORTED_MODULE_2__[/* teamsBorderRadius */ "a"],
                background: palette.white,
            },
        };
        // Dark theme overrides
        if (Object(_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isDarkTheme */ "g"])(themeName)) {
            styles.root.boxShadow = _teams_shadow_levels__WEBPACK_IMPORTED_MODULE_0__[/* ShadowLevels */ "a"].shadowLevel3Dark;
            styles.root.borderColor = palette.white;
            styles.root.background = palette.neutralLight;
            styles.beak.background = palette.neutralLight;
            styles.calloutMain.background = palette.neutralLight;
        }
        // Contrast theme overrides
        if (Object(_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(themeName)) {
            styles.root.boxShadow = 'none';
            styles.root.borderColor = palette.black;
            styles.root.background = palette.white;
        }
        return styles;
    };
}


/***/ }),

/***/ "aOXU":
/*!*********************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-fluentui-teams-theme/src/teams/styles/icon.styles.ts ***!
  \*********************************************************************************************************************************************/
/*! exports provided: getIconStyles */
/*! exports used: getIconStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getIconStyles; });
/* istanbul ignore file */
function getIconStyles() {
    return {
        root: {
            width: '1em',
            height: '1em',
            img: {
                display: 'block',
                width: '100%',
                height: '100%',
                lineHeight: '100%',
                objectFit: 'contain',
            },
        },
    };
}


/***/ }),

/***/ "cxHQ":
/*!********************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-fluentui-teams-theme/src/teams/styles/scrollable-pane.styles.ts ***!
  \********************************************************************************************************************************************************/
/*! exports provided: getScrollablePaneStyles */
/*! exports used: getScrollablePaneStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getScrollablePaneStyles; });
/* istanbul ignore file */
function getScrollablePaneStyles(_themeName, _theme) {
    return () => {
        const styles = {
            root: {
                fontFamily: 'inherit',
            },
        };
        return styles;
    };
}


/***/ }),

/***/ "dBLV":
/*!************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-fluentui-teams-theme/src/teams/styles/tooltip.styles.ts ***!
  \************************************************************************************************************************************************/
/*! exports provided: getTooltipStyles */
/*! exports used: getTooltipStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getTooltipStyles; });
/* harmony import */ var _teams_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../teams-theme */ "tPyQ");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "jki+");
/* istanbul ignore file */


function getTooltipStyles(themeName, _theme) {
    return (props) => {
        const { theme } = props;
        const { palette } = theme;
        const styles = {
            root: {
                selectors: {
                    '.ms-Callout-beak': {
                        backgroundColor: palette.white,
                        borderBottomRightRadius: _constants__WEBPACK_IMPORTED_MODULE_1__[/* teamsBorderRadius */ "a"],
                    },
                },
            },
            content: {
                backgroundColor: palette.white,
                color: palette.black,
            },
        };
        // Dark theme overrides
        if (Object(_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* isDarkTheme */ "g"])(themeName)) {
            styles.content.backgroundColor = palette.white;
            styles.content.color = palette.black;
        }
        // Contrast theme overrides
        if (Object(_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* isContrastTheme */ "f"])(themeName)) {
            styles.content.backgroundColor = palette.white;
            styles.content.color = palette.black;
        }
        return styles;
    };
}


/***/ }),

/***/ "eSNc":
/*!******************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-fluentui-teams-theme/src/teams/styles/action-button.styles.ts ***!
  \******************************************************************************************************************************************************/
/*! exports provided: getActionButtonStyles */
/*! exports used: getActionButtonStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getActionButtonStyles; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "jki+");
/* istanbul ignore file */

function getActionButtonStyles(themeName, theme) {
    return {
        root: {
            color: theme.palette.neutralDark,
            // Work around for fluentui button focus outline not showing in iOS Safari.
            ':focus-visible, .ms-Fabric--isFocusVisible &:focus': {
                '::after': {
                    content: '""',
                    position: 'absolute',
                    inset: '2px',
                    outline: `1px solid ${theme.palette.black}`,
                    borderRadius: _constants__WEBPACK_IMPORTED_MODULE_0__[/* teamsBorderRadius */ "a"],
                },
            },
        },
    };
}


/***/ }),

/***/ "ebDN":
/*!************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-fluentui-teams-theme/src/teams/styles/persona.styles.ts ***!
  \************************************************************************************************************************************************/
/*! exports provided: getPersonaStyles, getPersonaCoinStyles */
/*! exports used: getPersonaCoinStyles, getPersonaStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getPersonaStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getPersonaCoinStyles; });
/* harmony import */ var _teams_sizes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../teams-sizes */ "ZOo+");
/* istanbul ignore file */

function getPersonaStyles(_themeName, theme) {
    return (_props) => {
        return {
            root: {
                height: 'auto',
            },
            details: {
                width: 'auto',
                flex: '1 1 0',
            },
            primaryText: {
                height: 'auto',
                lineHeight: 'auto',
                fontSize: _teams_sizes__WEBPACK_IMPORTED_MODULE_0__[/* FontSizes */ "a"].size14,
                color: theme.palette.black,
            },
            secondaryText: {
                height: 'auto',
                lineHeight: 'auto',
                fontSize: _teams_sizes__WEBPACK_IMPORTED_MODULE_0__[/* FontSizes */ "a"].size14,
                color: theme.palette.neutralDark,
            },
        };
    };
}
function getPersonaCoinStyles(_themeName, _theme) {
    return (_props) => {
        return {
            initials: {
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
            },
        };
    };
}


/***/ }),

/***/ "fcJj":
/*!******************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-fluentui-teams-theme/src/teams/styles/document-card.styles.ts ***!
  \******************************************************************************************************************************************************/
/*! exports provided: getDocumentCardStyles */
/*! exports used: getDocumentCardStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDocumentCardStyles; });
/* harmony import */ var _teams_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../teams-colors */ "McEG");
/* harmony import */ var _teams_shadow_levels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../teams-shadow-levels */ "D3bU");
/* harmony import */ var _teams_sizes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../teams-sizes */ "ZOo+");
/* harmony import */ var _teams_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../teams-theme */ "tPyQ");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "jki+");
/* istanbul ignore file */





function getDocumentCardStyles(themeName, theme) {
    let BOX_SHADOW = _teams_shadow_levels__WEBPACK_IMPORTED_MODULE_1__[/* ShadowLevels */ "a"].shadowLevel1;
    let BORDER_COLOR = theme.palette.neutralQuaternary;
    if (Object(_teams_theme__WEBPACK_IMPORTED_MODULE_3__[/* isDarkTheme */ "g"])(themeName)) {
        BOX_SHADOW = _teams_shadow_levels__WEBPACK_IMPORTED_MODULE_1__[/* ShadowLevels */ "a"].shadowLevel1Dark;
    }
    if (Object(_teams_theme__WEBPACK_IMPORTED_MODULE_3__[/* isContrastTheme */ "f"])(themeName)) {
        BORDER_COLOR = _teams_colors__WEBPACK_IMPORTED_MODULE_0__[/* ContrastColors */ "b"].appBlack;
    }
    const styles = {
        root: {
            borderRadius: _constants__WEBPACK_IMPORTED_MODULE_4__[/* teamsBorderRadius */ "a"],
            backgroundColor: theme.palette.neutralLighterAlt,
            borderColor: BORDER_COLOR,
            borderStyle: 'solid',
            borderWidth: '1px',
            boxShadow: BOX_SHADOW,
            selectors: {
                ':hover': {
                    backgroundColor: theme.palette.neutralQuaternary,
                },
                ':hover::after': {
                    display: 'none',
                },
                ':focus': {
                    borderColor: theme.palette.black,
                },
                '.ms-DocumentCardTitle': {
                    color: theme.palette.black,
                    fontSize: _teams_sizes__WEBPACK_IMPORTED_MODULE_2__[/* FontSizes */ "a"].size14,
                    height: _teams_sizes__WEBPACK_IMPORTED_MODULE_2__[/* FontSizes */ "a"].size20,
                    lineHeight: _teams_sizes__WEBPACK_IMPORTED_MODULE_2__[/* FontSizes */ "a"].size20,
                },
            },
        },
    };
    return styles;
}


/***/ }),

/***/ "glLe":
/*!**************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-fluentui-teams-theme/src/teams/styles/combo-box.styles.ts ***!
  \**************************************************************************************************************************************************/
/*! exports provided: getComboBoxStyles */
/*! exports used: getComboBoxStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getComboBoxStyles; });
/* harmony import */ var _teams_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../teams-colors */ "McEG");
/* harmony import */ var _teams_sizes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../teams-sizes */ "ZOo+");
/* harmony import */ var _teams_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../teams-theme */ "tPyQ");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "jki+");
/* istanbul ignore file */




function getComboBoxStyles(themeName, theme) {
    let ROOT_BACKGROUND_COLOR = theme.palette.neutralLight;
    let FIELD_GROUP_OPACITY = 0.36;
    const TEXT_COLOR = theme.palette.black;
    let HOVER_COLOR = theme.palette.black;
    const OPTIONS_TEXT_COLOR = theme.palette.neutralDark;
    let HOVER_BACKGROUND_COLOR = theme.palette.neutralLight;
    let FOCUS_BACKGROUND_COLOR = theme.palette.neutralTertiaryAlt;
    let IS_CHECKED_BACKGROUND_COLOR = theme.palette.neutralQuaternaryAlt;
    let KEYBOARD_FOCUS_TEXT_COLOR = theme.palette.black;
    let ICON_FILL_COLOR = theme.palette.neutralPrimaryAlt;
    let FIELD_GROUP_BORDER_WIDTH = '0 0 2px 0';
    let FIELD_GROUP_BORDER_WIDTH_ACTIVE = FIELD_GROUP_BORDER_WIDTH;
    let FIELD_GROUP_BORDER_COLOR = 'transparent';
    let FIELD_GROUP_BORDER_BOTTOM_COLOR_ACTIVE = theme.palette.themePrimary;
    let FIELD_GROUP_BORDER_COLOR_DISABLED = 'transparent';
    let FIELD_COLOR_PLACEHOLDER_DISABLED = theme.palette.neutralDark;
    let PLACEHOLDER_COLOR = theme.palette.neutralDark;
    let PLACEHOLDER_ACTIVE_COLOR = theme.palette.neutralTertiary;
    let FOCUS_VISIBLE_BORDER = theme.palette.white;
    let FOCUS_VISIBLE_OUTLINE = `1px solid ${theme.palette.black}`;
    let FOCUS_VISIBLE_BACKGROUND_COLOR = 'transparent';
    if (Object(_teams_theme__WEBPACK_IMPORTED_MODULE_2__[/* isDarkTheme */ "g"])(themeName)) {
        ROOT_BACKGROUND_COLOR = theme.palette.white;
        HOVER_COLOR = theme.palette.black;
        HOVER_BACKGROUND_COLOR = theme.palette.neutralQuaternary;
        FOCUS_BACKGROUND_COLOR = theme.palette.neutralTertiary;
        IS_CHECKED_BACKGROUND_COLOR = theme.palette.neutralTertiaryAlt;
        PLACEHOLDER_COLOR = theme.palette.neutralDark;
        PLACEHOLDER_ACTIVE_COLOR = theme.palette.neutralSecondary;
        FIELD_COLOR_PLACEHOLDER_DISABLED = theme.palette.neutralPrimary;
    }
    if (Object(_teams_theme__WEBPACK_IMPORTED_MODULE_2__[/* isContrastTheme */ "f"])(themeName)) {
        ROOT_BACKGROUND_COLOR = theme.palette.white;
        FOCUS_BACKGROUND_COLOR = theme.palette.themeDark;
        IS_CHECKED_BACKGROUND_COLOR = theme.palette.themePrimary;
        KEYBOARD_FOCUS_TEXT_COLOR = theme.palette.white;
        ICON_FILL_COLOR = theme.palette.neutralSecondary;
        FIELD_GROUP_OPACITY = 1;
        FIELD_GROUP_BORDER_WIDTH_ACTIVE = '1px 1px 2px 1px';
        FIELD_GROUP_BORDER_WIDTH = '1px 1px 1px 1px';
        FIELD_GROUP_BORDER_COLOR = theme.palette.black;
        FIELD_GROUP_BORDER_BOTTOM_COLOR_ACTIVE = theme.palette.themeDark;
        FIELD_GROUP_BORDER_WIDTH_ACTIVE = '1px 1px 2px 1px';
        FIELD_GROUP_BORDER_COLOR_DISABLED = _teams_colors__WEBPACK_IMPORTED_MODULE_0__[/* ContrastColors */ "b"].appGreenContrast;
        FIELD_COLOR_PLACEHOLDER_DISABLED = _teams_colors__WEBPACK_IMPORTED_MODULE_0__[/* ContrastColors */ "b"].appGreenContrast;
        PLACEHOLDER_COLOR = theme.palette.black;
        PLACEHOLDER_ACTIVE_COLOR = theme.palette.black;
        FOCUS_VISIBLE_BORDER = 'transparent';
        FOCUS_VISIBLE_OUTLINE = 'none';
        FOCUS_VISIBLE_BACKGROUND_COLOR = theme.palette.themeDark;
    }
    const isActive = {
        borderWidth: FIELD_GROUP_BORDER_WIDTH_ACTIVE,
        borderColor: FIELD_GROUP_BORDER_COLOR,
        borderBottomColor: FIELD_GROUP_BORDER_BOTTOM_COLOR_ACTIVE,
        borderBottomRightRadius: _constants__WEBPACK_IMPORTED_MODULE_3__[/* teamsBorderRadius */ "a"],
        borderBottomLeftRadius: _constants__WEBPACK_IMPORTED_MODULE_3__[/* teamsBorderRadius */ "a"],
    };
    const styles = {
        divider: {
            margin: '4px 0',
            height: '2px',
            backgroundColor: theme.palette.neutralLight,
            border: 'none',
        },
        root: {
            borderRadius: _constants__WEBPACK_IMPORTED_MODULE_3__[/* teamsBorderRadius */ "a"],
            paddingLeft: '12px',
            borderWidth: FIELD_GROUP_BORDER_WIDTH,
            borderStyle: 'solid',
            borderColor: FIELD_GROUP_BORDER_COLOR,
            backgroundColor: ROOT_BACKGROUND_COLOR,
            color: TEXT_COLOR,
            minWidth: 'auto',
            paddingTop: '1px',
            overflow: 'hidden',
            selectors: {
                '::after': {
                    display: 'none',
                },
                '&.is-open': Object.assign({}, isActive),
                '.ms-Button--icon': {
                    width: '34px',
                    backgroundColor: 'transparent',
                    position: 'absolute',
                    right: '-1px',
                    selectors: {
                        ':hover': {
                            color: 'inherit',
                            backgroundColor: 'transparent',
                        },
                    },
                },
                '.ms-Button-icon': {
                    color: theme.palette.neutralPrimary,
                    fontSize: _teams_sizes__WEBPACK_IMPORTED_MODULE_1__[/* FontSizes */ "a"].size12,
                    fontWeight: 'bold',
                    position: 'relative',
                    top: '2px',
                    selectors: {
                        '.icons-default-fill': {
                            fill: ICON_FILL_COLOR,
                        },
                    },
                },
            },
        },
        rootError: {
            borderBottomRightRadius: _constants__WEBPACK_IMPORTED_MODULE_3__[/* teamsBorderRadius */ "a"],
            borderBottomLeftRadius: _constants__WEBPACK_IMPORTED_MODULE_3__[/* teamsBorderRadius */ "a"],
            borderWidth: FIELD_GROUP_BORDER_WIDTH_ACTIVE,
        },
        input: {
            backgroundColor: 'transparent',
            height: '30px',
            lineHeight: '30px',
            color: TEXT_COLOR,
            selectors: {
                '::placeholder': { color: PLACEHOLDER_COLOR },
                ':-ms-input-placeholder': { color: PLACEHOLDER_COLOR },
            },
        },
        inputDisabled: {
            color: TEXT_COLOR,
        },
        rootPressed: Object.assign({}, isActive),
        rootFocused: Object.assign(Object.assign({}, isActive), { selectors: {
                input: {
                    selectors: {
                        '::placeholder': { color: PLACEHOLDER_ACTIVE_COLOR },
                        ':-ms-input-placeholder': { color: PLACEHOLDER_ACTIVE_COLOR },
                    },
                },
            } }),
        rootHovered: {
            borderColor: FIELD_GROUP_BORDER_COLOR,
            selectors: {
                '.ms-Button': {
                    backgroundColor: 'transparent',
                },
                '.ms-ComboBox-Input': {
                    color: 'inherit',
                },
            },
        },
        rootDisabled: {
            opacity: FIELD_GROUP_OPACITY,
            borderColor: FIELD_GROUP_BORDER_COLOR_DISABLED,
            selectors: {
                input: {
                    color: FIELD_COLOR_PLACEHOLDER_DISABLED,
                },
                '.ms-Button-icon': {
                    color: FIELD_COLOR_PLACEHOLDER_DISABLED,
                },
            },
        },
        callout: {
            selectors: {
                '.ms-Callout-main': {
                    paddingTop: '8px',
                    paddingBottom: '8px',
                },
                '.is-checked': {
                    backgroundColor: IS_CHECKED_BACKGROUND_COLOR,
                    color: KEYBOARD_FOCUS_TEXT_COLOR,
                },
                '.ms-Fabric--isFocusVisible &': {
                    selectors: {
                        '.is-checked': {
                            backgroundColor: FOCUS_VISIBLE_BACKGROUND_COLOR,
                            selectors: {
                                ':after': {
                                    borderColor: FOCUS_VISIBLE_BORDER,
                                    outline: FOCUS_VISIBLE_OUTLINE,
                                },
                            },
                        },
                    },
                },
            },
        },
        header: {
            padding: '0 8px',
            color: theme.palette.neutralDark,
        },
        optionsContainer: {
            selectors: {
                '.ms-Button': {
                    padding: '4px 16px',
                    minHeight: '32px',
                    height: '32px',
                    whiteSpace: 'noWrap',
                    backgroundColor: 'transparent',
                    color: OPTIONS_TEXT_COLOR,
                    selectors: {
                        ':hover': {
                            backgroundColor: HOVER_BACKGROUND_COLOR,
                            color: HOVER_COLOR,
                        },
                        ':focus': {
                            backgroundColor: FOCUS_BACKGROUND_COLOR,
                            color: HOVER_COLOR,
                        },
                        ':active': {
                            backgroundColor: FOCUS_BACKGROUND_COLOR,
                            color: HOVER_COLOR,
                        },
                        ':hover:active': {
                            backgroundColor: `${FOCUS_BACKGROUND_COLOR} !important`,
                        },
                    },
                },
                '.ms-ComboBox-optionText': {
                    overflow: 'visible',
                },
                '.ms-Checkbox-text': {
                    color: 'inherit',
                },
                '.ms-Checkbox:hover': {
                    selectors: {
                        '.ms-Checkbox-text': {
                            color: 'inherit',
                            selectors: {
                                ':hover': {
                                    color: 'inherit',
                                },
                            },
                        },
                    },
                },
                '.is-disabled': {
                    color: theme.palette.neutralTertiary,
                },
            },
        },
    };
    // Dark theme overrides
    if (Object(_teams_theme__WEBPACK_IMPORTED_MODULE_2__[/* isDarkTheme */ "g"])(themeName)) {
        styles.divider.backgroundColor = theme.palette.white;
        styles.root.selectors['.ms-Button-icon'].color = theme.palette.black;
        styles.optionsContainer.selectors['.ms-Checkbox-text'].color =
            theme.palette.neutralDark;
        styles.optionsContainer.selectors['.ms-Checkbox:hover']
            .selectors['.ms-Checkbox-text'].color = theme.palette.neutralDark;
        styles.optionsContainer.selectors['.ms-Checkbox:hover'].selectors['.ms-Checkbox-text'].selectors[':hover'].color = theme.palette.neutralDark;
    }
    // Contrast theme overrides
    if (Object(_teams_theme__WEBPACK_IMPORTED_MODULE_2__[/* isContrastTheme */ "f"])(themeName)) {
        styles.divider.backgroundColor = theme.palette.black;
        styles.root.selectors['.ms-Button-icon'].color = theme.palette.black;
        styles.optionsContainer.selectors['.ms-Checkbox-text'].color =
            theme.palette.black;
        styles.optionsContainer.selectors['.ms-Checkbox:hover']
            .selectors['.ms-Checkbox-text'].color = theme.palette.black;
        styles.optionsContainer.selectors['.ms-Checkbox:hover'].selectors['.ms-Checkbox-text'].selectors[':hover'].color = theme.palette.black;
        styles.optionsContainer.selectors['.ms-Button'].selectors[':hover'].color = theme.palette.white;
        styles.optionsContainer.selectors['.ms-Button'].selectors[':focus'].color = theme.palette.white;
        styles.optionsContainer.selectors['.ms-Button'].selectors[':active'].color = theme.palette.white;
        styles.optionsContainer.selectors['.ms-Button'].selectors[':hover'].backgroundColor = theme.palette.themeDark;
        styles.optionsContainer.selectors['.ms-Button'].selectors[':focus'].backgroundColor = theme.palette.themeDark;
        styles.optionsContainer.selectors['.ms-Button'].selectors[':active'].backgroundColor = theme.palette.themeDark;
        styles.optionsContainer.selectors['.ms-Button'].selectors[':hover:active'].backgroundColor = `${theme.palette.themeDark} !important`;
        styles.optionsContainer.selectors['.is-disabled'].color =
            _teams_colors__WEBPACK_IMPORTED_MODULE_0__[/* ContrastColors */ "b"].appGreenContrast;
    }
    return styles;
}


/***/ }),

/***/ "iDKd":
/*!**********************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-fluentui-teams-theme/src/teams/styles/pivot.styles.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: PivotStyles */
/*! exports used: PivotStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PivotStyles; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "ogYq");
/* harmony import */ var _teams_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../teams-theme */ "tPyQ");
/* istanbul ignore file */


const PivotStyles = ({ theme, linkFormat }) => {
    const rootIsTabs = linkFormat === 'tabs';
    const LINK_SELECTED_COLOR = theme.palette.black;
    const LINK_COLOR = Object(_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(theme.name) ? theme.palette.themeDark : theme.palette.neutralPrimary;
    const commonStyles = {
        height: 60,
        lineHeight: 60,
        paddingTop: 4,
        marginRight: 0,
        // Work around for fluentui button focus outline not showing in iOS Safari.
        ':focus-visible, .ms-Fabric--isFocusVisible &:focus': {
            outline: `1px auto ${theme.palette.black}`,
        },
        '::after': { display: 'none' },
    };
    const styles = {
        link: [
            commonStyles,
            !rootIsTabs && {
                fontWeight: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "e"].regular,
                color: LINK_COLOR,
                '-webkit-tap-highlight-color': 'transparent',
                selectors: {
                    ':hover': {
                        color: LINK_COLOR,
                        backgroundColor: 'transparent',
                        selectors: {
                            ':before': {
                                backgroundColor: theme.palette.themeTertiary,
                                height: '3px',
                            },
                        },
                    },
                    ':active': {
                        backgroundColor: 'transparent',
                    },
                },
            },
        ],
        linkIsSelected: [
            commonStyles,
            !rootIsTabs && {
                color: LINK_SELECTED_COLOR,
                fontWeight: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "e"].semibold,
                selectors: {
                    ':hover': {
                        color: LINK_SELECTED_COLOR,
                        backgroundColor: 'transparent',
                        selectors: {
                            ':before': {
                                left: '8px',
                                right: '8px',
                            },
                        },
                    },
                    ':active': {
                        color: LINK_SELECTED_COLOR,
                        backgroundColor: 'transparent',
                    },
                    ':before': {
                        border: 'none',
                        height: '3px',
                        backgroundColor: theme.palette.themePrimary,
                        transition: 'none',
                    },
                },
            },
        ],
    };
    return styles;
};


/***/ }),

/***/ "iq+x":
/*!************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-fluentui-teams-theme/src/teams/styles/shimmer.styles.ts ***!
  \************************************************************************************************************************************************/
/*! exports provided: getShimmerStyles */
/*! exports used: getShimmerStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getShimmerStyles; });
/* harmony import */ var _teams_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../teams-theme */ "tPyQ");
/* istanbul ignore file */

function getShimmerStyles(themeName, _theme) {
    return (props) => {
        const { theme } = props;
        const { palette } = theme;
        let SHIMMER_WRAPPER_PRIMARY_BACKGROUND = palette.neutralTertiaryAlt;
        let SHIMMER_WRAPPER_SECONDARY_BACKGROUND = palette.neutralTertiary;
        let SHIMMER_ROOT_BACKGROUND = palette.neutralLight;
        if (Object(_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* isDefaultTheme */ "h"])(themeName)) {
            SHIMMER_ROOT_BACKGROUND = palette.white;
        }
        if (Object(_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* isContrastTheme */ "f"])(themeName)) {
            SHIMMER_WRAPPER_PRIMARY_BACKGROUND = palette.black;
            SHIMMER_WRAPPER_SECONDARY_BACKGROUND = palette.white;
        }
        const styles = {
            root: {
                selectors: {
                    '.ms-ShimmerGap-root': {
                        borderColor: SHIMMER_ROOT_BACKGROUND,
                        background: SHIMMER_ROOT_BACKGROUND,
                    },
                    '.ms-ShimmerLine-root': {
                        borderColor: SHIMMER_ROOT_BACKGROUND,
                        selectors: {
                            svg: {
                                fill: SHIMMER_ROOT_BACKGROUND,
                            },
                        },
                    },
                    '.ms-ShimmerCircle-root': {
                        borderColor: SHIMMER_ROOT_BACKGROUND,
                        selectors: {
                            svg: {
                                fill: SHIMMER_ROOT_BACKGROUND,
                            },
                        },
                    },
                },
            },
            shimmerGradient: {
                background: `linear-gradient(to right, ${SHIMMER_WRAPPER_PRIMARY_BACKGROUND} 0%, ${SHIMMER_WRAPPER_SECONDARY_BACKGROUND} 50%, ${SHIMMER_WRAPPER_PRIMARY_BACKGROUND} 100%) 0px 0px / 90% 100% no-repeat ${SHIMMER_WRAPPER_PRIMARY_BACKGROUND}`,
            },
            shimmerWrapper: {
                background: SHIMMER_WRAPPER_PRIMARY_BACKGROUND,
            },
        };
        return styles;
    };
}


/***/ }),

/***/ "jki+":
/*!*******************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-fluentui-teams-theme/src/teams/styles/constants.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: teamsBorderRadius */
/*! exports used: teamsBorderRadius */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return teamsBorderRadius; });
/* istanbul ignore file */
const teamsBorderRadius = '4px';


/***/ }),

/***/ "mdHK":
/*!********************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-fluentui-teams-theme/src/teams/styles/contextual-menu.styles.ts ***!
  \********************************************************************************************************************************************************/
/*! exports provided: getContextualMenuStyles */
/*! exports used: getContextualMenuStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getContextualMenuStyles; });
/* harmony import */ var _teams_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../teams-colors */ "McEG");
/* harmony import */ var _teams_shadow_levels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../teams-shadow-levels */ "D3bU");
/* harmony import */ var _teams_sizes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../teams-sizes */ "ZOo+");
/* harmony import */ var _teams_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../teams-theme */ "tPyQ");
/* istanbul ignore file */




function getContextualMenuStyles(themeName, _theme) {
    return (props) => {
        const { theme } = props;
        const { palette } = theme;
        const CONTEXTUAL_MENU_ITEM_HEIGHT = 32;
        const iconStyles = {
            maxHeight: CONTEXTUAL_MENU_ITEM_HEIGHT,
            fontSize: _teams_sizes__WEBPACK_IMPORTED_MODULE_2__[/* FontSizes */ "a"].size20,
            width: _teams_sizes__WEBPACK_IMPORTED_MODULE_2__[/* FontSizes */ "a"].size20,
            margin: '0 8px 0 0',
            color: palette.neutralDark,
        };
        const TEXT_COLOR = palette.neutralDark;
        let TEXT_COLOR_HOVER_ACTIVE = palette.black;
        let BACKGROUND_COLOR_HOVER = palette.neutralLight;
        let BACKGROUND_COLOR_ACTIVE = palette.neutralTertiaryAlt;
        let BACKGROUND_FOCUS_COLOR = 'transparent';
        let FOCUS_AFTER = {};
        let CONTRAST_FOCUS_HOVER = {};
        const hoverActiveStyles = (textColor, background_color) => ({
            color: textColor,
            backgroundColor: background_color,
        });
        if (Object(_teams_theme__WEBPACK_IMPORTED_MODULE_3__[/* isDarkTheme */ "g"])(themeName)) {
            BACKGROUND_COLOR_HOVER = palette.neutralQuaternary;
            BACKGROUND_COLOR_ACTIVE = palette.neutralTertiary;
        }
        if (Object(_teams_theme__WEBPACK_IMPORTED_MODULE_3__[/* isContrastTheme */ "f"])(themeName)) {
            TEXT_COLOR_HOVER_ACTIVE = palette.themeDarker;
            BACKGROUND_COLOR_HOVER = palette.themeDark;
            BACKGROUND_COLOR_ACTIVE = palette.themeDark;
            BACKGROUND_FOCUS_COLOR = palette.themeDark;
            FOCUS_AFTER = {
                ':after': {
                    display: 'none',
                },
            };
            CONTRAST_FOCUS_HOVER = {
                '&:focus': Object.assign({}, hoverActiveStyles(TEXT_COLOR_HOVER_ACTIVE, BACKGROUND_COLOR_HOVER)),
                '&:focus:hover': Object.assign({}, hoverActiveStyles(TEXT_COLOR_HOVER_ACTIVE, BACKGROUND_COLOR_HOVER)),
            };
        }
        const isFocusVisible = {
            '.ms-Fabric--isFocusVisible &': {
                selectors: Object.assign({ ':hover': {
                        backgroundColor: BACKGROUND_FOCUS_COLOR,
                    }, ':focus': {
                        backgroundColor: BACKGROUND_FOCUS_COLOR,
                        selectors: {
                            ':after': {
                                borderColor: palette.white,
                                outline: `1px solid ${palette.black}`,
                            },
                        },
                    }, ':focus:hover': {
                        backgroundColor: BACKGROUND_FOCUS_COLOR,
                    } }, FOCUS_AFTER),
            },
        };
        const commonStyles = {
            color: TEXT_COLOR,
            backgroundColor: 'transparent',
            selectors: {
                '.ms-ContextualMenu-icon, .ms-ContextualMenu-submenuIcon, .ms-ContextualMenu-secondaryText, .ms-ContextualMenu-checkmarkIcon, .ms-ContextualMenu-checkmarkIcon': {
                    color: 'inherit',
                    backgroundColor: 'transparent',
                },
                svg: {
                    fill: 'currentColor',
                },
                '.icons-default-fill': {
                    fill: 'currentColor',
                },
                '.ms-ContextualMenu-link': {
                    selectors: Object.assign(Object.assign({ '&:hover': Object.assign({}, hoverActiveStyles(TEXT_COLOR_HOVER_ACTIVE, BACKGROUND_COLOR_HOVER)), '&:active': Object.assign({}, hoverActiveStyles(TEXT_COLOR_HOVER_ACTIVE, BACKGROUND_COLOR_ACTIVE)) }, isFocusVisible), CONTRAST_FOCUS_HOVER),
                },
            },
            ':hover .ms-ContextualMenu-icon': {
                color: 'inherit',
            },
        };
        const styles = {
            subComponentStyles: {
                callout: {
                    root: {
                        boxShadow: _teams_shadow_levels__WEBPACK_IMPORTED_MODULE_1__[/* ShadowLevels */ "a"].shadowLevel3,
                        zIndex: 999,
                        selectors: {
                            '.ms-ContextualMenu': {
                                backgroundColor: 'transparent',
                            },
                            '.ms-ContextualMenu-link, .ms-ContextualMenu-header': {
                                padding: '0 16px',
                            },
                            '.ms-ContextualMenu-itemText': {
                                margin: '0 16px 0 0',
                            },
                            '.ms-ContextualMenu-checkmarkIcon': {
                                width: '14px',
                            },
                            '.ms-ContextualMenu-submenuIcon': {
                                width: '14px',
                            },
                            '.ms-ContextualMenu-header': {
                                fontSize: _teams_sizes__WEBPACK_IMPORTED_MODULE_2__[/* FontSizes */ "a"].size14,
                            },
                        },
                    },
                    calloutMain: {
                        paddingTop: '8px',
                        paddingBottom: '8px',
                    },
                },
                menuItem: (itemStyleProps) => {
                    const { disabled, expanded, primaryDisabled, checked } = itemStyleProps;
                    let THEME_LIGHT = palette.neutralQuaternary;
                    let NEUTRAL_TERTIARY = palette.neutralTertiary;
                    let NEUTRAL_PRIMARY = palette.neutralPrimary;
                    let NEUTRAL_DARK = palette.neutralDark;
                    let NEUTRAL_DARK_WHITE = palette.neutralDark;
                    let NEUTRAL_QUATERNARY_ALT = palette.neutralTertiaryAlt;
                    // Dark theme overrides
                    if (Object(_teams_theme__WEBPACK_IMPORTED_MODULE_3__[/* isDarkTheme */ "g"])(themeName)) {
                        NEUTRAL_QUATERNARY_ALT = palette.white;
                        THEME_LIGHT = palette.neutralTertiaryAlt;
                    }
                    // Contrast theme overrides
                    if (Object(_teams_theme__WEBPACK_IMPORTED_MODULE_3__[/* isContrastTheme */ "f"])(themeName)) {
                        THEME_LIGHT = palette.themePrimary;
                        NEUTRAL_TERTIARY = _teams_colors__WEBPACK_IMPORTED_MODULE_0__[/* ContrastColors */ "b"].appGreenContrast;
                        NEUTRAL_PRIMARY = palette.black;
                        NEUTRAL_DARK = palette.neutralDark;
                        NEUTRAL_DARK_WHITE = palette.white;
                        NEUTRAL_QUATERNARY_ALT = palette.black;
                    }
                    const menuStyles = {
                        divider: {
                            margin: '8px 0',
                            height: '1px',
                            backgroundColor: NEUTRAL_QUATERNARY_ALT,
                        },
                        root: [
                            {
                                height: CONTEXTUAL_MENU_ITEM_HEIGHT,
                                lineHeight: CONTEXTUAL_MENU_ITEM_HEIGHT,
                                color: palette.neutralDark,
                                // High contrast styles https://github.com/microsoft/fluentui/issues/30069
                                '@media (forced-colors: active)': {
                                    ':hover, :focus, :focus:hover': {
                                        forcedColorAdjust: 'none',
                                    },
                                },
                            },
                            !disabled && Object.assign({}, commonStyles),
                            expanded && Object.assign(Object.assign({}, hoverActiveStyles(TEXT_COLOR_HOVER_ACTIVE, THEME_LIGHT)), { selectors: {
                                    ':hover': {
                                        backgroundColor: BACKGROUND_COLOR_ACTIVE,
                                    },
                                } }),
                            disabled && {
                                color: NEUTRAL_TERTIARY,
                            },
                        ],
                        splitPrimary: [
                            {
                                height: CONTEXTUAL_MENU_ITEM_HEIGHT,
                                lineHeight: CONTEXTUAL_MENU_ITEM_HEIGHT,
                                padding: '0 16px',
                                color: NEUTRAL_DARK,
                                selectors: {
                                    '&:hover ~ button': {
                                        backgroundColor: `${THEME_LIGHT} !important`,
                                        color: NEUTRAL_DARK_WHITE,
                                        selectors: {
                                            '.ms-ContextualMenu-submenuIcon': {
                                                color: NEUTRAL_DARK_WHITE,
                                            },
                                        },
                                    },
                                },
                            },
                            !(disabled || primaryDisabled) &&
                                !checked && Object.assign({}, commonStyles),
                            (disabled || primaryDisabled) && {
                                color: NEUTRAL_TERTIARY,
                                selectors: {
                                    '.ms-ContextualMenu-icon': {
                                        color: NEUTRAL_TERTIARY,
                                    },
                                },
                            },
                            checked && {
                                selectors: {
                                    '.ms-ContextualMenu-checkmarkIcon': {
                                        color: NEUTRAL_PRIMARY,
                                    },
                                },
                            },
                        ],
                        splitMenu: [
                            Object.assign({ height: CONTEXTUAL_MENU_ITEM_HEIGHT, lineHeight: CONTEXTUAL_MENU_ITEM_HEIGHT, width: CONTEXTUAL_MENU_ITEM_HEIGHT }, commonStyles),
                            expanded && Object.assign(Object.assign({}, hoverActiveStyles(TEXT_COLOR_HOVER_ACTIVE, THEME_LIGHT)), { selectors: {
                                    ':hover': {
                                        backgroundColor: BACKGROUND_COLOR_ACTIVE,
                                    },
                                } }),
                        ],
                        icon: [Object.assign({}, iconStyles), disabled && { color: NEUTRAL_TERTIARY }],
                        checkmarkIcon: [Object.assign({}, iconStyles)],
                        splitContainer: [
                            {
                                height: CONTEXTUAL_MENU_ITEM_HEIGHT,
                                backgroundColor: 'transparent !important',
                                selectors: {
                                    button: {
                                        selectors: {
                                            '.ms-ContextualMenu-submenuIcon': {
                                                margin: 0,
                                            },
                                        },
                                    },
                                },
                            },
                            !(disabled || primaryDisabled) &&
                                !checked && {
                                selectors: Object.assign({}, isFocusVisible),
                            },
                            disabled && { color: NEUTRAL_TERTIARY },
                        ],
                        subMenuIcon: [
                            {
                                height: CONTEXTUAL_MENU_ITEM_HEIGHT,
                                lineHeight: CONTEXTUAL_MENU_ITEM_HEIGHT,
                                fontSize: _teams_sizes__WEBPACK_IMPORTED_MODULE_2__[/* FontSizes */ "a"].size12,
                                color: NEUTRAL_DARK,
                            },
                            expanded && Object.assign(Object.assign({}, hoverActiveStyles(TEXT_COLOR_HOVER_ACTIVE, THEME_LIGHT)), { selectors: {
                                    ':hover': {
                                        backgroundColor: BACKGROUND_COLOR_ACTIVE,
                                    },
                                } }),
                            disabled && { color: NEUTRAL_TERTIARY },
                        ],
                    };
                    return menuStyles;
                },
            },
        };
        // Dark theme overrides
        if (Object(_teams_theme__WEBPACK_IMPORTED_MODULE_3__[/* isDarkTheme */ "g"])(themeName)) {
            styles.subComponentStyles.callout.root.boxShadow = _teams_shadow_levels__WEBPACK_IMPORTED_MODULE_1__[/* ShadowLevels */ "a"].shadowLevel3Dark;
        }
        // Contrast theme overrides
        if (Object(_teams_theme__WEBPACK_IMPORTED_MODULE_3__[/* isContrastTheme */ "f"])(themeName)) {
            styles.subComponentStyles.callout.root.boxShadow = 'none';
        }
        return styles;
    };
}


/***/ }),

/***/ "n93F":
/*!***************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-fluentui-teams-theme/src/teams/styles/text-field.styles.ts ***!
  \***************************************************************************************************************************************************/
/*! exports provided: getTextFieldStyles */
/*! exports used: getTextFieldStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getTextFieldStyles; });
/* harmony import */ var _teams_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../teams-colors */ "McEG");
/* harmony import */ var _teams_sizes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../teams-sizes */ "ZOo+");
/* harmony import */ var _teams_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../teams-theme */ "tPyQ");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "jki+");
/* istanbul ignore file */




function getTextFieldStyles(themeName, _theme) {
    return (props) => {
        const { focused, disabled, hasErrorMessage, multiline, theme } = props;
        const { palette } = theme;
        const FIELD_HEIGHT = '32px';
        const MULTILINE_FIELD_HEIGHT = '94px';
        let FIELD_GROUP_BACKGROUND_COLOR = palette.neutralLight;
        let FIELD_GROUP_OPACITY = 0.36;
        let FIELD_COLOR = palette.black;
        let FIELD_COLOR_PLACEHOLDER_NOT_DISABLED = palette.neutralDark;
        let FIELD_COLOR_PLACEHOLDER_DISABLED = palette.neutralDark;
        let FIELD_GROUP_BORDER_WIDTH = '0 0 2px 0';
        let FIELD_GROUP_BORDER_COLOR = 'transparent';
        let FIELD_GROUP_BORDER_COLOR_DISABLED = 'transparent';
        let FIELD_GROUP_BORDER_BOTTOM_COLOR_ACTIVE = palette.themePrimary;
        let FIELD_GROUP_BORDER_WIDTH_ACTIVE = FIELD_GROUP_BORDER_WIDTH;
        const ERROR_MESSAGE_COLOR = theme.palette.redDark;
        // Dark theme overrides
        if (Object(_teams_theme__WEBPACK_IMPORTED_MODULE_2__[/* isDarkTheme */ "g"])(themeName)) {
            FIELD_GROUP_BACKGROUND_COLOR = palette.neutralLighter;
            FIELD_COLOR = palette.black;
            FIELD_COLOR_PLACEHOLDER_NOT_DISABLED = palette.neutralDark;
            FIELD_COLOR_PLACEHOLDER_DISABLED = palette.neutralPrimary;
        }
        // Contrast theme overrides
        if (Object(_teams_theme__WEBPACK_IMPORTED_MODULE_2__[/* isContrastTheme */ "f"])(themeName)) {
            FIELD_GROUP_BACKGROUND_COLOR = palette.white;
            FIELD_GROUP_OPACITY = 1;
            FIELD_COLOR = palette.black;
            FIELD_COLOR_PLACEHOLDER_NOT_DISABLED = palette.black;
            FIELD_COLOR_PLACEHOLDER_DISABLED = _teams_colors__WEBPACK_IMPORTED_MODULE_0__[/* ContrastColors */ "b"].appGreenContrast;
            FIELD_GROUP_BORDER_WIDTH = '1px 1px 1px 1px';
            FIELD_GROUP_BORDER_COLOR = palette.black;
            FIELD_GROUP_BORDER_COLOR_DISABLED = _teams_colors__WEBPACK_IMPORTED_MODULE_0__[/* ContrastColors */ "b"].appGreenContrast;
            FIELD_GROUP_BORDER_BOTTOM_COLOR_ACTIVE = palette.themeDark;
            FIELD_GROUP_BORDER_WIDTH_ACTIVE = '1px 1px 2px 1px';
        }
        const isActiveOpenStyles = {
            selectors: {
                '.ms-TextField-fieldGroup': {
                    borderBottomColor: FIELD_GROUP_BORDER_BOTTOM_COLOR_ACTIVE,
                    borderWidth: FIELD_GROUP_BORDER_WIDTH_ACTIVE,
                    // Need 2px border raidus as the border width is 2px.
                    borderBottomRightRadius: _constants__WEBPACK_IMPORTED_MODULE_3__[/* teamsBorderRadius */ "a"],
                    borderBottomLeftRadius: _constants__WEBPACK_IMPORTED_MODULE_3__[/* teamsBorderRadius */ "a"],
                },
                textarea: {
                    selectors: {
                        '& .ms-TextField-fieldGroup': {
                            height: 'auto',
                        },
                    },
                },
            },
        };
        const styles = {
            root: {
                selectors: {
                    '.ms-TextField-fieldGroup': {
                        backgroundColor: FIELD_GROUP_BACKGROUND_COLOR,
                    },
                    '&.is-active': Object.assign({}, isActiveOpenStyles),
                    '.ms-DatePicker.is-open &': Object.assign({}, isActiveOpenStyles),
                    '&.is-disabled': {
                        selectors: {
                            '.ms-TextField-fieldGroup': {
                                borderColor: FIELD_GROUP_BORDER_COLOR_DISABLED,
                                selectors: {
                                    'input, textarea': {
                                        color: FIELD_COLOR_PLACEHOLDER_DISABLED,
                                    },
                                },
                            },
                        },
                    },
                },
            },
            subComponentStyles: {
                label: getLabelStyles,
            },
            fieldGroup: [
                {
                    borderRadius: _constants__WEBPACK_IMPORTED_MODULE_3__[/* teamsBorderRadius */ "a"],
                    borderWidth: FIELD_GROUP_BORDER_WIDTH,
                    borderStyle: 'Solid',
                    borderColor: FIELD_GROUP_BORDER_COLOR,
                    height: !multiline ? FIELD_HEIGHT : 'auto',
                    selectors: {
                        '::after': {
                            display: 'none',
                        },
                    },
                },
                disabled && {
                    opacity: FIELD_GROUP_OPACITY,
                },
                !focused &&
                    !disabled &&
                    !hasErrorMessage && {
                    selectors: {
                        ':hover': {
                            borderColor: FIELD_GROUP_BORDER_COLOR,
                        },
                    },
                },
                hasErrorMessage && [
                    {
                        borderColor: FIELD_GROUP_BORDER_COLOR,
                        color: 'red',
                        selectors: {
                            '&:focus, &:hover': {
                                borderColor: FIELD_GROUP_BORDER_COLOR,
                            },
                        },
                    },
                ],
            ],
            field: {
                color: FIELD_COLOR,
                height: !multiline ? FIELD_HEIGHT : MULTILINE_FIELD_HEIGHT,
                padding: !multiline ? '0 12px 2px' : '7px 12px 9px',
                backgroundColor: 'transparent',
                selectors: {
                    '::placeholder': [
                        !disabled && { color: FIELD_COLOR_PLACEHOLDER_NOT_DISABLED },
                        disabled && { color: FIELD_COLOR_PLACEHOLDER_DISABLED },
                    ],
                    ':-ms-input-placeholder': [
                        !disabled && { color: FIELD_COLOR_PLACEHOLDER_NOT_DISABLED },
                        disabled && { color: FIELD_COLOR_PLACEHOLDER_DISABLED },
                    ],
                },
            },
            errorMessage: {
                color: ERROR_MESSAGE_COLOR,
            },
        };
        return styles;
    };
}
function getLabelStyles(props) {
    return {
        root: {
            color: props.theme.palette.neutralDark,
            paddingTop: 0,
            paddingBottom: '6px',
            fontSize: _teams_sizes__WEBPACK_IMPORTED_MODULE_1__[/* FontSizes */ "a"].size12,
        },
    };
}


/***/ }),

/***/ "nA6Z":
/*!**********************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-fluentui-teams-theme/src/teams/styles/panel.styles.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: getPanelStyles */
/*! exports used: getPanelStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getPanelStyles; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "ogYq");
/* harmony import */ var _teams_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../teams-colors */ "McEG");
/* harmony import */ var _teams_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../teams-theme */ "tPyQ");
/* istanbul ignore file */



function getPanelStyles(themeName, theme) {
    let BUTTON_ICON_HOVER_COLOR = theme.palette.themePrimary;
    if (Object(_teams_theme__WEBPACK_IMPORTED_MODULE_2__[/* isContrastTheme */ "f"])(themeName)) {
        BUTTON_ICON_HOVER_COLOR = theme.palette.themeDark;
    }
    const styles = {
        main: {
            selectors: {
                '&.ms-Panel-main': {
                    borderWidth: 0,
                    borderStyle: 'solid',
                    borderColor: theme.palette.black,
                },
            },
        },
        overlay: {
            backgroundColor: _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* CoreColors */ "c"].overlayBackground,
        },
        closeButton: {
            color: theme.palette.black,
            selectors: {
                '&:hover': {
                    color: theme.palette.themePrimary,
                    backgroundColor: 'transparent',
                    selectors: {
                        i: {
                            fontWeight: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "e"].bold,
                        },
                    },
                },
                '&:active': {
                    color: theme.palette.themePrimary,
                    backgroundColor: 'transparent',
                    selectors: {
                        i: {
                            fontWeight: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "e"].bold,
                        },
                    },
                },
            },
        },
        commands: {
            paddingTop: '10px',
            paddingBottom: '20px',
        },
        content: {
            color: theme.palette.black,
            selectors: {
                '.ms-Button--icon': {
                    selectors: {
                        i: {
                            color: theme.palette.black,
                        },
                        ':hover': {
                            backgroundColor: 'transparent',
                            selectors: {
                                i: {
                                    fontWeight: 'bold',
                                    color: BUTTON_ICON_HOVER_COLOR,
                                },
                            },
                        },
                        ':active': {
                            backgroundColor: 'transparent',
                        },
                    },
                },
            },
        },
        headerText: {
            color: theme.palette.black,
        },
    };
    // Dark theme overrides
    if (Object(_teams_theme__WEBPACK_IMPORTED_MODULE_2__[/* isDarkTheme */ "g"])(themeName)) {
        styles.overlay.backgroundColor = _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* DarkColors */ "d"].overlayBackground;
    }
    // Contrast theme overrides
    if (Object(_teams_theme__WEBPACK_IMPORTED_MODULE_2__[/* isContrastTheme */ "f"])(themeName)) {
        styles.overlay.backgroundColor = _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* ContrastColors */ "b"].overlayBackground;
        styles.main.selectors['&.ms-Panel-main'].borderWidth = '2px';
        styles.closeButton.selectors['&:hover'].color = theme.palette.themeDark;
        styles.closeButton.selectors['&:active'].color =
            theme.palette.themeDark;
    }
    return styles;
}


/***/ }),

/***/ "nIJ3":
/*!*******************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-fluentui-teams-theme/src/teams/styles/primary-button.styles.ts ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: getPrimaryButtonStyles */
/*! exports used: getPrimaryButtonStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getPrimaryButtonStyles; });
/* harmony import */ var _teams_shadow_levels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../teams-shadow-levels */ "D3bU");
/* harmony import */ var _teams_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../teams-colors */ "McEG");
/* harmony import */ var _teams_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../teams-theme */ "tPyQ");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "jki+");
/* istanbul ignore file */




function getPrimaryButtonStyles(themeName, theme) {
    let iconFillColor = theme.palette.white;
    const buttonBoxShadow = _teams_shadow_levels__WEBPACK_IMPORTED_MODULE_0__[/* ShadowLevels */ "a"].shadowLevel1Dark;
    const buttonBorderRadius = _constants__WEBPACK_IMPORTED_MODULE_3__[/* teamsBorderRadius */ "a"];
    const rootColor = theme.palette.themePrimary;
    const textColor = theme.palette.white;
    const rootHoverColor = theme.palette.themeDark;
    const rootPressedCheckedColor = theme.palette.themeDarker;
    if (Object(_teams_theme__WEBPACK_IMPORTED_MODULE_2__[/* isContrastTheme */ "f"])(themeName)) {
        iconFillColor = theme.palette.white;
    }
    if (Object(_teams_theme__WEBPACK_IMPORTED_MODULE_2__[/* isDarkTheme */ "g"])(themeName)) {
        iconFillColor = theme.palette.black;
    }
    const styles = {
        root: {
            backgroundColor: rootColor,
            color: textColor,
            boxShadow: buttonBoxShadow,
            borderColor: rootColor,
            selectors: {
                'svg, .icons-default-fill': {
                    fill: iconFillColor,
                },
            },
        },
        rootHovered: {
            backgroundColor: rootHoverColor,
            borderColor: rootHoverColor,
            color: textColor,
            selectors: {
                'svg, .icons-default-fill': {
                    fill: iconFillColor,
                },
            },
        },
        rootPressed: {
            backgroundColor: rootPressedCheckedColor,
            borderColor: rootPressedCheckedColor,
            color: textColor,
            selectors: {
                'svg, .icons-default-fill': {
                    fill: iconFillColor,
                },
            },
        },
        rootChecked: {
            backgroundColor: rootPressedCheckedColor,
            borderColor: rootPressedCheckedColor,
            color: textColor,
            selectors: {
                'svg, .icons-default-fill': {
                    fill: iconFillColor,
                },
            },
        },
        rootCheckedHovered: {
            backgroundColor: rootHoverColor,
            borderColor: rootHoverColor,
            color: textColor,
            selectors: {
                'svg, .icons-default-fill': {
                    fill: iconFillColor,
                },
            },
        },
        rootDisabled: {
            backgroundColor: theme.palette.neutralQuaternary,
            borderColor: theme.palette.neutralQuaternary,
            color: theme.palette.neutralTertiary,
            selectors: {
                'svg, .icons-default-fill': {
                    fill: theme.palette.neutralTertiary,
                },
            },
        },
        rootFocused: {
            backgroundColor: rootColor,
            borderColor: rootColor,
            borderRadius: buttonBorderRadius,
            color: textColor,
            selectors: {
                'svg, .icons-default-fill': {
                    fill: iconFillColor,
                },
            },
        },
    };
    // Dark theme overrides
    if (Object(_teams_theme__WEBPACK_IMPORTED_MODULE_2__[/* isDarkTheme */ "g"])(themeName)) {
        // Root
        styles.root.color = theme.palette.black;
        styles.root.backgroundColor = theme.palette.themeTertiary;
        styles.root.borderColor = theme.palette.themeTertiary;
        // Root Hovered
        styles.rootHovered.color = theme.palette.black;
        styles.rootHovered.backgroundColor = theme.palette.themeSecondary;
        styles.rootHovered.borderColor = theme.palette.themeSecondary;
        styles.rootHovered.selectors['svg, .icons-default-fill'].fill =
            theme.palette.black;
        // Root Checked
        styles.rootChecked.color = theme.palette.black;
        styles.rootChecked.backgroundColor = theme.palette.themeLight;
        styles.rootChecked.borderColor = theme.palette.themeLight;
        styles.rootChecked.selectors['svg, .icons-default-fill'].fill =
            theme.palette.black;
        // Root Checked Hovered
        styles.rootCheckedHovered.color = theme.palette.black;
        styles.rootCheckedHovered.backgroundColor = theme.palette.themeSecondary;
        styles.rootCheckedHovered.borderColor = theme.palette.themeSecondary;
        styles.rootCheckedHovered.selectors['svg, .icons-default-fill'].fill =
            theme.palette.black;
        // Root Pressed
        styles.rootPressed.color = theme.palette.black;
        styles.rootPressed.backgroundColor = theme.palette.themeLight;
        styles.rootPressed.borderColor = theme.palette.themeLight;
        styles.rootPressed.selectors['svg, .icons-default-fill'].fill =
            theme.palette.black;
        // Root Focused
        styles.rootFocused.backgroundColor = theme.palette.themeTertiary;
        styles.rootFocused.borderColor = theme.palette.themeTertiary;
        styles.rootFocused.color = theme.palette.black;
        styles.rootFocused.selectors['svg, .icons-default-fill'].fill =
            theme.palette.black;
        // Root Disabled
        styles.rootDisabled.selectors['svg, .icons-default-fill'].fill =
            theme.palette.neutralTertiary;
    }
    // Contrast theme overrides
    if (Object(_teams_theme__WEBPACK_IMPORTED_MODULE_2__[/* isContrastTheme */ "f"])(themeName)) {
        // Root
        styles.root.color = theme.palette.white;
        styles.root.backgroundColor = theme.palette.black;
        styles.root.borderColor = theme.palette.black;
        // Root Hovered
        styles.rootHovered.backgroundColor = theme.palette.themeDark;
        styles.rootHovered.borderColor = theme.palette.themeDark;
        styles.rootHovered.borderWidth = '2px';
        // Root Pressed
        styles.rootPressed.backgroundColor = theme.palette.themeDark;
        styles.rootPressed.borderColor = theme.palette.themeDark;
        // Root Checked
        styles.rootChecked.backgroundColor = theme.palette.themePrimary;
        styles.rootChecked.borderColor = theme.palette.themePrimary;
        // Root Checked Hovered
        styles.rootChecked.backgroundColor = theme.palette.themeDark;
        styles.rootChecked.borderColor = theme.palette.themeDark;
        // Root Disabled
        styles.rootDisabled.color = theme.palette.white;
        styles.rootDisabled.backgroundColor = _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* ContrastColors */ "b"].appGreenContrast;
        styles.rootDisabled.borderColor = _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* ContrastColors */ "b"].appGreenContrast;
        styles.rootDisabled.selectors['svg, .icons-default-fill'].fill =
            theme.palette.white;
        // Root Focused
        styles.rootFocused.backgroundColor = theme.palette.themeDark;
        styles.rootFocused.borderColor = theme.palette.themeDark;
    }
    return styles;
}


/***/ }),

/***/ "oxez":
/*!********************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-fluentui-teams-theme/src/teams/styles/teaching-bubble.styles.ts ***!
  \********************************************************************************************************************************************************/
/*! exports provided: getTeachingBubbleStyles */
/*! exports used: getTeachingBubbleStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getTeachingBubbleStyles; });
/* harmony import */ var _teams_sizes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../teams-sizes */ "ZOo+");

function getTeachingBubbleStyles(themeName, theme) {
    return {
        subComponentStyles: {
            callout: {
                root: {
                    maxWidth: '280px',
                    boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.12), 0px 4px 8px rgba(0, 0, 0, 0.14)',
                },
                beak: {
                    background: theme.palette.themePrimary,
                    borderRadius: '3px',
                    width: '12px',
                    height: '12px',
                },
                calloutMain: {
                    background: theme.palette.themePrimary,
                },
            },
        },
        content: {
            backgroundColor: theme.palette.themePrimary,
        },
        headline: {
            fontSize: _teams_sizes__WEBPACK_IMPORTED_MODULE_0__[/* FontSizes */ "a"].size18,
            fontWeight: '700',
            lineHeight: _teams_sizes__WEBPACK_IMPORTED_MODULE_0__[/* FontSizes */ "a"].size24,
        },
        subText: {
            fontSize: _teams_sizes__WEBPACK_IMPORTED_MODULE_0__[/* FontSizes */ "a"].size12,
        },
        closeButton: {
            margin: '14px 18px 0px 0px',
            padding: '0px 0px',
            fontSize: '20px',
            height: '20px',
            width: '20px',
            ' i': {
                fontSize: '19px',
                margin: '0px 0px',
                height: '20px',
                lineHeight: '20px',
            },
        },
        body: {
            ':not(:last-child)': { marginBottom: '0px' },
            lineHeight: _teams_sizes__WEBPACK_IMPORTED_MODULE_0__[/* FontSizes */ "a"].size16,
        },
        header: {
            ':not(:last-child)': { marginBottom: '12px' },
        },
        bodyContent: {
            padding: '12px 16px',
            lineHeight: _teams_sizes__WEBPACK_IMPORTED_MODULE_0__[/* FontSizes */ "a"].size16,
            fontSize: _teams_sizes__WEBPACK_IMPORTED_MODULE_0__[/* FontSizes */ "a"].size12,
            fontWeight: '400',
            whiteSpace: 'pre-wrap',
            background: theme.palette.themePrimary,
        },
        secondaryButton: {
            borderColor: theme.palette.themeTertiary,
            '.ms-Button-label': {
                fontWeight: '500',
            },
        },
        footer: {
            marginTop: '12px',
            flexDirection: 'column',
            alignItems: 'stretch',
            '.ms-StackItem': {
                width: '100%',
            },
            '.ms-Button:not(:first-child)': {
                margin: '0px',
            },
        },
    };
}


/***/ }),

/***/ "tdNh":
/*!*************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-fluentui-teams-theme/src/teams/styles/dropdown.styles.ts ***!
  \*************************************************************************************************************************************************/
/*! exports provided: getDropdownStyles */
/*! exports used: getDropdownStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDropdownStyles; });
/* harmony import */ var _teams_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../teams-colors */ "McEG");
/* harmony import */ var _teams_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../teams-theme */ "tPyQ");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "jki+");
/* istanbul ignore file */



function getDropdownStyles(themeName, _theme, background) {
    return (props) => {
        const { theme, disabled, isOpen, hasError, isRenderingPlaceholder } = props;
        if (!theme) {
            throw new Error('theme is undefined or null in base Dropdown getStyles function.');
        }
        const { palette } = theme;
        let ROOT_BACKGROUND_COLOR = theme.palette.neutralLight;
        let FIELD_GROUP_OPACITY = 0.36;
        const TEXT_COLOR = theme.palette.black;
        let HOVER_COLOR = theme.palette.black;
        let HOVER_BACKGROUND_COLOR = theme.palette.neutralLight;
        let FOCUS_BACKGROUND_COLOR = theme.palette.neutralTertiaryAlt;
        const DROPDOWN_ITEM_COLOR = theme.palette.neutralDark;
        let DROPDOWN_ITEM_SELECTED_BACKGROUND_COLOR = theme.palette.neutralQuaternary;
        let DROPDOWN_ITEM_SELECTED_HOVER_BACKGROUND_COLOR = theme.palette.neutralTertiaryAlt;
        let DROPDOWN_ITEM_SELECTED_HOVER_TEXT_COLOR = theme.palette.black;
        let FIELD_GROUP_BORDER_WIDTH = '0 0 2px 0';
        let FIELD_GROUP_BORDER_COLOR = 'transparent';
        let CALLOUT_BORDER_COLOR = _teams_colors__WEBPACK_IMPORTED_MODULE_0__[/* CoreColors */ "c"].appBlackAlpha10;
        let FIELD_GROUP_BORDER_WIDTH_ACTIVE = FIELD_GROUP_BORDER_WIDTH;
        let FIELD_GROUP_BORDER_BOTTOM_COLOR_ACTIVE = theme.palette.themePrimary;
        let FIELD_GROUP_BORDER_COLOR_DISABLED = 'transparent';
        let FIELD_COLOR_PLACEHOLDER_DISABLED = theme.palette.neutralDark;
        let FOCUS_VISIBLE_BORDER = theme.palette.white;
        let FOCUS_VISIBLE_OUTLINE = `1px solid ${theme.palette.black}`;
        let FOCUS_VISIBLE_BACKGROUND_COLOR = 'transparent';
        let ERROR_BORDER_COLOR = _teams_colors__WEBPACK_IMPORTED_MODULE_0__[/* CoreColors */ "c"].appRed;
        if (Object(_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isDarkTheme */ "g"])(themeName)) {
            ROOT_BACKGROUND_COLOR = theme.palette.white;
            CALLOUT_BORDER_COLOR = palette.white;
            HOVER_COLOR = theme.palette.black;
            HOVER_BACKGROUND_COLOR = theme.palette.neutralQuaternary;
            FOCUS_BACKGROUND_COLOR = theme.palette.neutralTertiary;
            DROPDOWN_ITEM_SELECTED_BACKGROUND_COLOR = theme.palette.neutralTertiaryAlt;
            DROPDOWN_ITEM_SELECTED_HOVER_BACKGROUND_COLOR = theme.palette.neutralTertiary;
            FIELD_COLOR_PLACEHOLDER_DISABLED = theme.palette.neutralPrimary;
            ERROR_BORDER_COLOR = _teams_colors__WEBPACK_IMPORTED_MODULE_0__[/* DarkColors */ "d"].appRed;
        }
        if (Object(_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(themeName)) {
            ROOT_BACKGROUND_COLOR = theme.palette.white;
            FIELD_GROUP_OPACITY = 1;
            HOVER_COLOR = theme.palette.white;
            HOVER_BACKGROUND_COLOR = theme.palette.themeDark;
            FOCUS_BACKGROUND_COLOR = theme.palette.themeDark;
            DROPDOWN_ITEM_SELECTED_BACKGROUND_COLOR = theme.palette.themePrimary;
            DROPDOWN_ITEM_SELECTED_HOVER_BACKGROUND_COLOR = theme.palette.themeDark;
            DROPDOWN_ITEM_SELECTED_HOVER_TEXT_COLOR = theme.palette.themeDarker;
            FIELD_GROUP_BORDER_COLOR = theme.palette.black;
            FIELD_GROUP_BORDER_WIDTH = '1px 1px 1px 1px';
            CALLOUT_BORDER_COLOR = palette.black;
            FIELD_GROUP_BORDER_WIDTH_ACTIVE = '1px 1px 2px 1px';
            FIELD_GROUP_BORDER_BOTTOM_COLOR_ACTIVE = theme.palette.themeDark;
            FIELD_GROUP_BORDER_COLOR_DISABLED = _teams_colors__WEBPACK_IMPORTED_MODULE_0__[/* ContrastColors */ "b"].appGreenContrast;
            FIELD_COLOR_PLACEHOLDER_DISABLED = _teams_colors__WEBPACK_IMPORTED_MODULE_0__[/* ContrastColors */ "b"].appGreenContrast;
            ERROR_BORDER_COLOR = theme.palette.black;
            FOCUS_VISIBLE_BORDER = 'transparent';
            FOCUS_VISIBLE_OUTLINE = 'none';
            FOCUS_VISIBLE_BACKGROUND_COLOR = theme.palette.themeDark;
        }
        // If this combobox is on gray background
        if (background === 'gray') {
            ROOT_BACKGROUND_COLOR = theme.palette.white;
        }
        const isActive = {
            borderWidth: FIELD_GROUP_BORDER_WIDTH_ACTIVE,
            borderColor: FIELD_GROUP_BORDER_COLOR,
            borderBottomColor: FIELD_GROUP_BORDER_BOTTOM_COLOR_ACTIVE,
            borderBottomRightRadius: _constants__WEBPACK_IMPORTED_MODULE_2__[/* teamsBorderRadius */ "a"],
            borderBottomLeftRadius: _constants__WEBPACK_IMPORTED_MODULE_2__[/* teamsBorderRadius */ "a"],
        };
        const isFocusVisible = {
            '.ms-Fabric--isFocusVisible &': {
                selectors: {
                    ':focus': {
                        backgroundColor: FOCUS_VISIBLE_BACKGROUND_COLOR,
                        selectors: {
                            ':after': {
                                backgroundColor: 'transparent',
                                borderColor: FOCUS_VISIBLE_BORDER,
                                outline: FOCUS_VISIBLE_OUTLINE,
                            },
                        },
                    },
                    ':focus:hover': {
                        backgroundColor: FOCUS_VISIBLE_BACKGROUND_COLOR,
                    },
                },
            },
        };
        const commonStyles = {
            selectors: {
                '.ms-Dropdown-titleIsPlaceHolder': {
                    color: TEXT_COLOR,
                },
                '.ms-Dropdown-title': {
                    color: TEXT_COLOR,
                },
                '.ms-Dropdown-caretDown': {
                    color: TEXT_COLOR,
                },
            },
        };
        const styles = {
            callout: {
                border: `1px solid ${CALLOUT_BORDER_COLOR}`,
                selectors: {
                    '.ms-Callout-main': {
                        paddingTop: '8px',
                        paddingBottom: '8px',
                    },
                },
            },
            title: [
                {
                    paddingLeft: '12px',
                    paddingRight: '32px',
                    color: TEXT_COLOR,
                    minWidth: 'auto',
                    border: 'none',
                    height: 30,
                    backgroundColor: 'transparent',
                },
                isRenderingPlaceholder && {
                    color: TEXT_COLOR,
                },
                disabled && {
                    color: FIELD_COLOR_PLACEHOLDER_DISABLED,
                },
            ],
            dropdownItemHeader: {
                padding: '0 8px',
                color: theme.palette.neutralDark,
            },
            dropdownDivider: {
                margin: '4px 0',
                height: '2px',
                backgroundColor: theme.palette.neutralLight,
                border: 'none',
            },
            dropdown: [
                {
                    borderRadius: _constants__WEBPACK_IMPORTED_MODULE_2__[/* teamsBorderRadius */ "a"],
                    borderWidth: FIELD_GROUP_BORDER_WIDTH,
                    borderStyle: 'solid',
                    borderColor: FIELD_GROUP_BORDER_COLOR,
                    backgroundColor: ROOT_BACKGROUND_COLOR,
                    height: 32,
                    boxSizing: 'border-box',
                    color: TEXT_COLOR,
                    selectors: {
                        '::after': {
                            display: 'none',
                        },
                    },
                },
                !disabled && {
                    selectors: {
                        ':hover': Object.assign({}, commonStyles),
                        ':active': Object.assign({}, commonStyles),
                        ':focus': Object.assign({}, commonStyles),
                    },
                },
                isOpen &&
                    !disabled &&
                    !hasError && Object.assign({}, isActive),
                !disabled &&
                    !hasError && {
                    selectors: {
                        '.ms-Fabric--isFocusVisible &': {
                            selectors: {
                                ':focus': Object.assign({}, isActive),
                            },
                        },
                    },
                },
                disabled && {
                    opacity: FIELD_GROUP_OPACITY,
                    borderColor: FIELD_GROUP_BORDER_COLOR_DISABLED,
                },
                hasError && {
                    borderColor: ERROR_BORDER_COLOR,
                    borderBottomRightRadius: _constants__WEBPACK_IMPORTED_MODULE_2__[/* teamsBorderRadius */ "a"],
                    borderBottomLeftRadius: _constants__WEBPACK_IMPORTED_MODULE_2__[/* teamsBorderRadius */ "a"],
                    borderWidth: FIELD_GROUP_BORDER_WIDTH,
                },
            ],
            caretDownWrapper: {
                height: 30,
                right: '12px',
                display: 'flex',
                // alignItems: 'center',
            },
            caretDown: [
                {
                    color: TEXT_COLOR,
                },
                disabled && {
                    color: FIELD_COLOR_PLACEHOLDER_DISABLED,
                },
            ],
            dropdownItemDisabled: {
                color: FIELD_COLOR_PLACEHOLDER_DISABLED,
                opacity: FIELD_GROUP_OPACITY,
            },
            dropdownItems: {
                selectors: {
                    '.ms-Checkbox': {
                        selectors: {
                            '& .is-checked': {
                                backgroundColor: 'transparent',
                            },
                            ':hover': {
                                backgroundColor: HOVER_BACKGROUND_COLOR,
                            },
                        },
                    },
                },
            },
            dropdownItem: [
                {
                    color: DROPDOWN_ITEM_COLOR,
                    padding: '4px 16px',
                    minHeight: '32px',
                    height: '32px',
                    selectors: Object.assign({ ':hover': {
                            color: HOVER_COLOR,
                            backgroundColor: HOVER_BACKGROUND_COLOR,
                        }, ':focus': {
                            color: HOVER_COLOR,
                            backgroundColor: DROPDOWN_ITEM_SELECTED_BACKGROUND_COLOR,
                        }, ':active': {
                            color: HOVER_COLOR,
                            backgroundColor: FOCUS_BACKGROUND_COLOR,
                        }, ':hover:focus': {
                            color: HOVER_COLOR,
                            backgroundColor: HOVER_BACKGROUND_COLOR,
                        }, ':active:hover': {
                            color: HOVER_COLOR,
                            backgroundColor: FOCUS_BACKGROUND_COLOR,
                        } }, isFocusVisible),
                },
            ],
            dropdownItemSelected: {
                backgroundColor: DROPDOWN_ITEM_SELECTED_BACKGROUND_COLOR,
                color: HOVER_COLOR,
                padding: '4px 16px',
                minHeight: '3.2px',
                height: '32px',
                selectors: Object.assign(Object.assign({}, isFocusVisible), { ':focus': {
                        backgroundColor: DROPDOWN_ITEM_SELECTED_BACKGROUND_COLOR,
                    }, ':hover': {
                        color: HOVER_COLOR,
                        backgroundColor: DROPDOWN_ITEM_SELECTED_HOVER_BACKGROUND_COLOR,
                    }, ':focus:hover': {
                        color: HOVER_COLOR,
                        backgroundColor: DROPDOWN_ITEM_SELECTED_HOVER_BACKGROUND_COLOR,
                    }, ':hover .ms-Dropdown-optionText': {
                        color: DROPDOWN_ITEM_SELECTED_HOVER_TEXT_COLOR,
                    } }),
            },
        };
        return styles;
    };
}


/***/ }),

/***/ "uCUu":
/*!********************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-fluentui-teams-theme/src/teams/styles/compound-button.styles.ts ***!
  \********************************************************************************************************************************************************/
/*! exports provided: getCompoundButtonStyles */
/*! exports used: getCompoundButtonStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCompoundButtonStyles; });
/* harmony import */ var _teams_shadow_levels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../teams-shadow-levels */ "D3bU");
/* harmony import */ var _teams_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../teams-colors */ "McEG");
/* harmony import */ var _teams_sizes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../teams-sizes */ "ZOo+");
/* harmony import */ var _teams_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../teams-theme */ "tPyQ");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "jki+");
/* istanbul ignore file */





function getCompoundButtonStyles(themeName, theme) {
    const buttonBorderRadius = _constants__WEBPACK_IMPORTED_MODULE_4__[/* teamsBorderRadius */ "a"];
    const rootPrimaryShadow = _teams_shadow_levels__WEBPACK_IMPORTED_MODULE_0__[/* ShadowLevels */ "a"].shadowLevel1Dark;
    // SVG
    let svgFillColor = theme.palette.white;
    let svgBackgroundColor = theme.palette.themePrimary;
    let svgFillColorPrimary = theme.palette.themePrimary;
    const rootSvgBackgroundColor = theme.palette.white;
    let rootHoveredSvgFillColor = theme.palette.white;
    let rootHoveredSvgBackgroundColor = theme.palette.themePrimary;
    let rootHoveredSvgFillColorPrimary = theme.palette.themePrimary;
    let rootDisabledSvgBackgroundColor = theme.palette.neutralTertiary;
    let rootDisabledSvgFillColorPrimary = theme.palette.neutralQuaternary;
    // Root
    let rootBackgroundColor = theme.palette.white;
    let rootShadow = _teams_shadow_levels__WEBPACK_IMPORTED_MODULE_0__[/* ShadowLevels */ "a"].shadowLevel1;
    let rootBorderColor = theme.palette.neutralTertiaryAlt;
    let rootBorderWidth = '1px';
    // Root Hovered
    let rootHoveredBackgroundColor = theme.palette.neutralQuaternary;
    let rootHoveredBorderColor = theme.palette.neutralTertiary;
    let rootHoveredColor = theme.palette.black;
    // Root Pressed
    let rootPressedBackgroundColor = theme.palette.neutralTertiaryAlt;
    let rootPressedBorderColor = theme.palette.neutralTertiary;
    let rootPressedColor = theme.palette.black;
    // Root Disabled
    let rootDisabledBackgroundColor = theme.palette.neutralQuaternary;
    let rootDisabledColor = theme.palette.neutralTertiary;
    let rootDisabledBorderColor = 'transparent';
    // Root Checked
    let rootCheckedBorderColor = theme.palette.neutralTertiary;
    let rootCheckedColor = theme.palette.black;
    // Root Primary
    let rootBackgroundColorPrimary = theme.palette.themePrimary;
    let rootBorderColorPrimary = theme.palette.themePrimary;
    let rootColorPrimary = theme.palette.white;
    // Root Hovered Primary
    let rootHoveredBackgroundColorPrimary = theme.palette.themeDark;
    let rootHoveredBorderColorPrimary = theme.palette.themeDark;
    let rootHoveredColorPrimary = theme.palette.white;
    // Root Pressed Primary
    let rootPressedBackgroundColorPrimary = theme.palette.themeDarker;
    let rootPressedBorderColorPrimary = theme.palette.themeDarker;
    let rootPressedColorPrimary = theme.palette.white;
    // Root Disabled Primary
    let rootDisabledBackgroundColorPrimary = theme.palette.neutralQuaternary;
    let rootDisabledBorderColorPrimary = theme.palette.neutralQuaternary;
    let rootDisabledColorPrimary = theme.palette.neutralTertiary;
    // Root Checked Primary
    let rootCheckedBackgroundColorPrimary = theme.palette.themeDarker;
    let rootCheckedBorderColorPrimary = theme.palette.themeDarker;
    let rootCheckedColorPrimary = theme.palette.white;
    // Root Checked Hovered Primary
    let rootCheckedHoveredBackgroundColorPrimary = theme.palette.themeDark;
    let rootCheckedHoveredBorderColorPrimary = theme.palette.themeDark;
    let rootCheckedHoveredColorPrimary = theme.palette.white;
    // Conditional only for contrast theme
    let isFocusVisibleSVG = {};
    if (Object(_teams_theme__WEBPACK_IMPORTED_MODULE_3__[/* isDarkTheme */ "g"])(themeName)) {
        // Root
        rootBackgroundColor = theme.palette.neutralLight;
        rootShadow = _teams_shadow_levels__WEBPACK_IMPORTED_MODULE_0__[/* ShadowLevels */ "a"].shadowLevel1Dark;
        rootBorderColor = theme.palette.neutralTertiary;
        // Root Primary
        rootBackgroundColorPrimary = theme.palette.themeTertiary;
        rootBorderColorPrimary = theme.palette.themeTertiary;
        rootColorPrimary = theme.palette.black;
        // Root Hovered Primary
        rootHoveredBackgroundColorPrimary = theme.palette.themeSecondary;
        rootHoveredBorderColorPrimary = theme.palette.themeSecondary;
        rootHoveredColorPrimary = theme.palette.black;
        // Root Pressed Primary
        rootPressedBackgroundColorPrimary = theme.palette.themeLight;
        rootPressedBorderColorPrimary = theme.palette.themeLight;
        rootPressedColorPrimary = theme.palette.black;
        // Root Checked Primary
        rootCheckedBackgroundColorPrimary = theme.palette.themeLight;
        rootCheckedBorderColorPrimary = theme.palette.themeLight;
        rootCheckedColorPrimary = theme.palette.black;
        // Root Checked Hovered Primary
        rootCheckedHoveredBackgroundColorPrimary = theme.palette.themeSecondary;
        rootCheckedHoveredBorderColorPrimary = theme.palette.themeSecondary;
        rootCheckedHoveredColorPrimary = theme.palette.black;
    }
    if (Object(_teams_theme__WEBPACK_IMPORTED_MODULE_3__[/* isContrastTheme */ "f"])(themeName)) {
        // SVG
        svgFillColor = theme.palette.white;
        svgFillColorPrimary = theme.palette.black;
        svgBackgroundColor = theme.palette.black;
        rootHoveredSvgFillColor = theme.palette.black;
        rootHoveredSvgBackgroundColor = theme.palette.white;
        rootHoveredSvgFillColorPrimary = theme.palette.black;
        rootDisabledSvgBackgroundColor = _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* ContrastColors */ "b"].appGreenContrast;
        rootDisabledSvgFillColorPrimary = _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* ContrastColors */ "b"].appGreenContrast;
        // Root
        rootBorderWidth = '2px';
        // Root Hovered
        rootHoveredBackgroundColor = theme.palette.themeDark;
        rootHoveredBorderColor = theme.palette.themeDark;
        rootHoveredColor = theme.palette.white;
        // Root Pressed
        rootPressedBackgroundColor = theme.palette.themeDark;
        rootPressedBorderColor = theme.palette.themeDark;
        rootPressedColor = theme.palette.white;
        // Root Disabled
        rootDisabledBackgroundColor = theme.palette.white;
        rootDisabledBorderColor = _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* ContrastColors */ "b"].appGreenContrast;
        rootDisabledColor = _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* ContrastColors */ "b"].appGreenContrast;
        // Root Checked
        rootCheckedBorderColor = theme.palette.black;
        rootCheckedColor = theme.palette.white;
        // Root Primary
        rootColorPrimary = theme.palette.white;
        rootBackgroundColorPrimary = theme.palette.black;
        rootBorderColorPrimary = theme.palette.black;
        // Root Hovered Primary
        rootHoveredBackgroundColorPrimary = theme.palette.themeDark;
        rootHoveredBorderColorPrimary = theme.palette.themeDark;
        // Root Pressed Primary
        rootPressedBackgroundColorPrimary = theme.palette.themeDark;
        rootPressedBorderColorPrimary = theme.palette.themeDark;
        // Root Disabled Primary
        rootDisabledBackgroundColorPrimary = _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* ContrastColors */ "b"].appGreenContrast;
        rootDisabledBorderColorPrimary = _teams_colors__WEBPACK_IMPORTED_MODULE_1__[/* ContrastColors */ "b"].appGreenContrast;
        rootDisabledColorPrimary = theme.palette.white;
        // Root Checked Primary
        rootCheckedBackgroundColorPrimary = theme.palette.themePrimary;
        rootCheckedBorderColorPrimary = theme.palette.themePrimary;
        // Root Checked Hovered Primary
        rootCheckedBackgroundColorPrimary = theme.palette.themeDark;
        rootCheckedBorderColorPrimary = theme.palette.themeDark;
        isFocusVisibleSVG = {
            selectors: {
                svg: {
                    background: theme.palette.white,
                    fill: theme.palette.black,
                },
            },
        };
    }
    const styles = {
        root: {
            borderRadius: buttonBorderRadius,
            boxShadow: rootShadow,
            backgroundColor: rootBackgroundColor,
            borderColor: rootBorderColor,
            borderWidth: rootBorderWidth,
            color: theme.palette.black,
            minHeight: 'auto',
            padding: '12px',
            selectors: {
                '.ms-Button-icon': {
                    color: 'inherit',
                },
                '.icons-default-fill': {
                    fill: 'inherit',
                },
                svg: {
                    width: '32px',
                    height: '32px',
                    padding: '6px',
                    display: 'block',
                    boxSizing: 'content-box',
                    borderRadius: _constants__WEBPACK_IMPORTED_MODULE_4__[/* teamsBorderRadius */ "a"],
                    fill: svgFillColor,
                    background: svgBackgroundColor,
                },
                '.icons-unfilled': {
                    display: 'none',
                },
                '.icons-filled': {
                    display: 'block',
                },
                '.ms-Fabric--isFocusVisible &': {
                    selectors: {
                        ':focus::after': {
                            outline: 'none',
                            borderRadius: buttonBorderRadius,
                            borderColor: theme.palette.white,
                            borderWidth: '1px',
                            borderStyle: 'solid',
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                        },
                        ':focus': Object.assign({ borderColor: theme.palette.black }, isFocusVisibleSVG),
                    },
                },
                '&.ms-Button--compoundPrimary': {
                    backgroundColor: rootBackgroundColorPrimary,
                    borderColor: rootBorderColorPrimary,
                    boxShadow: rootPrimaryShadow,
                    color: rootColorPrimary,
                    selectors: {
                        svg: {
                            fill: svgFillColorPrimary,
                            background: rootSvgBackgroundColor,
                        },
                    },
                },
                '.ms-Button-description': {
                    color: 'inherit !important', // important needed to override fabric color style
                },
            },
        },
        rootHovered: {
            selectors: {
                '&.ms-Button--compound:hover': {
                    backgroundColor: rootHoveredBackgroundColor,
                    borderColor: rootHoveredBorderColor,
                    color: rootHoveredColor,
                    selectors: {
                        svg: {
                            fill: rootHoveredSvgFillColor,
                            background: rootHoveredSvgBackgroundColor,
                        },
                    },
                },
                '&.ms-Button--compoundPrimary:hover': {
                    backgroundColor: rootHoveredBackgroundColorPrimary,
                    borderColor: rootHoveredBorderColorPrimary,
                    color: rootHoveredColorPrimary,
                    selectors: {
                        svg: {
                            fill: rootHoveredSvgFillColorPrimary,
                        },
                    },
                },
            },
        },
        rootPressed: {
            boxShadow: 'none',
            selectors: {
                '&.ms-Button--compound:active': {
                    backgroundColor: rootPressedBackgroundColor,
                    borderColor: rootPressedBorderColor,
                    color: rootPressedColor,
                    selectors: {
                        svg: {
                            fill: rootHoveredSvgFillColor,
                            background: rootHoveredSvgBackgroundColor,
                        },
                    },
                },
                '&.ms-Button--compoundPrimary:active': {
                    backgroundColor: rootPressedBackgroundColorPrimary,
                    borderColor: rootPressedBorderColorPrimary,
                    color: rootPressedColorPrimary,
                    selectors: {
                        svg: {
                            fill: rootHoveredSvgFillColorPrimary,
                        },
                    },
                },
            },
        },
        rootDisabled: {
            backgroundColor: rootDisabledBackgroundColor,
            color: rootDisabledColor,
            borderColor: rootDisabledBorderColor,
            boxShadow: 'none',
            selectors: {
                svg: {
                    fill: theme.palette.neutralQuaternary,
                    background: rootDisabledSvgBackgroundColor,
                },
                '&.ms-Button--compoundPrimary.is-disabled': {
                    backgroundColor: rootDisabledBackgroundColorPrimary,
                    borderColor: rootDisabledBorderColorPrimary,
                    color: rootDisabledColorPrimary,
                    boxShadow: 'none',
                    selectors: {
                        svg: {
                            fill: rootDisabledSvgFillColorPrimary,
                            background: theme.palette.neutralTertiary,
                        },
                    },
                },
            },
        },
        rootChecked: {
            backgroundColor: theme.palette.neutralTertiaryAlt,
            borderColor: rootCheckedBorderColor,
            color: rootCheckedColor,
            selectors: {
                '&.ms-Button--compoundPrimary.is-checked': {
                    backgroundColor: rootCheckedBackgroundColorPrimary,
                    borderColor: rootCheckedBorderColorPrimary,
                    color: rootCheckedColorPrimary,
                },
            },
        },
        rootCheckedHovered: {
            selectors: {
                '&.ms-Button--compoundPrimary.is-checked:hover': {
                    backgroundColor: rootCheckedHoveredBackgroundColorPrimary,
                    borderColor: rootCheckedHoveredBorderColorPrimary,
                    color: rootCheckedHoveredColorPrimary,
                },
            },
        },
        rootCheckedDisabled: {
            backgroundColor: rootDisabledBackgroundColor,
            color: rootDisabledColor,
            borderColor: rootDisabledBorderColor,
            boxShadow: 'none',
            selectors: {
                '&.ms-Button--compoundPrimary.is-checked.is-disabled': {
                    backgroundColor: rootDisabledBackgroundColorPrimary,
                    borderColor: rootDisabledBorderColorPrimary,
                    color: rootDisabledColorPrimary,
                    boxShadow: 'none',
                },
            },
        },
        flexContainer: {
            alignItems: 'center',
        },
        textContainer: {
            flexShrink: '1',
        },
        icon: {
            width: 'auto',
            height: 'auto',
            marginRight: '12px',
        },
        description: {
            color: 'inherit',
            fontSize: _teams_sizes__WEBPACK_IMPORTED_MODULE_2__[/* FontSizes */ "a"].size14,
            opacity: 0.84,
        },
    };
    // Contrast theme overrides
    if (Object(_teams_theme__WEBPACK_IMPORTED_MODULE_3__[/* isContrastTheme */ "f"])(themeName)) {
        // Root
        styles.root.selectors['.ms-Fabric--isFocusVisible &']
            .selectors[':focus'].backgroundColor = theme.palette.themeDark;
        styles.root.selectors['.ms-Fabric--isFocusVisible &']
            .selectors[':focus'].borderColor = theme.palette.themeDark;
        styles.root.selectors['.ms-Fabric--isFocusVisible &']
            .selectors[':focus'].color = theme.palette.white;
        styles.root.selectors['.ms-Fabric--isFocusVisible &']
            .selectors[':focus::after'].display = 'none';
    }
    return styles;
}


/***/ }),

/***/ "x32f":
/*!***********************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-fluentui-teams-theme/src/teams/styles/command-bar-button.styles.ts ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: getCommandBarButtonStyles */
/*! exports used: getCommandBarButtonStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCommandBarButtonStyles; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "jki+");
/* istanbul ignore file */

function getCommandBarButtonStyles(themeName, theme) {
    return {
        root: {
            // Work around for fluentui button focus outline not showing in iOS Safari.
            ':focus-visible, .ms-Fabric--isFocusVisible &:focus': {
                '::after': {
                    content: '""',
                    position: 'absolute',
                    inset: '2px',
                    outline: `1px solid ${theme.palette.black}`,
                    borderRadius: _constants__WEBPACK_IMPORTED_MODULE_0__[/* teamsBorderRadius */ "a"],
                },
            },
        },
    };
}


/***/ }),

/***/ "y5uQ":
/*!*****************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-fluentui-teams-theme/src/teams-customizations.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: getTeamsTheme */
/*! exports used: getTeamsTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getTeamsTheme; });
/* harmony import */ var _teams_teams_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./teams/teams-styles */ "YGEv");
/* harmony import */ var _teams_palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./teams-palette */ "Eln2");


const getTeamsTheme = (themeName, isMobile) => {
    const palette = Object(_teams_palette__WEBPACK_IMPORTED_MODULE_1__[/* getPalette */ "a"])(themeName);
    palette.components = Object(_teams_teams_styles__WEBPACK_IMPORTED_MODULE_0__[/* getTeamStyles */ "a"])(themeName, palette, isMobile);
    return palette;
};


/***/ })

}]);
//# sourceMappingURL=package~main.js.map